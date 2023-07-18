import {
  AbiRegistry,
  Address,
  AddressType,
  AddressValue,
  BytesValue,
  Code,
  IAddress,
  List,
  ResultsParser,
  SmartContract,
} from '@multiversx/sdk-core/out';
import { INetworkProvider } from '@multiversx/sdk-network-providers/out/interface';
import { UserSigner } from '@multiversx/sdk-wallet/out';
import ABI from './abi.json';
import { CONTRACT_WASM } from './wasm.base64';

export interface CollectionCreator {
  deploy(creators: IAddress[]): Promise<string>;

  create_collection(
    identifier: string,
    name: string,
    ticker: string,
    owner: IAddress
  ): Promise<string>;

  collections(identifier: string): Promise<string>;

  set_address(address: IAddress): void;
}

export function CollectionCreatorClient(
  provider: INetworkProvider,
  signer: UserSigner
): CollectionCreator {
  const contract = new SmartContract({
    abi: AbiRegistry.create(ABI),
  });
  const code = Code.fromBuffer(CONTRACT_WASM);

  const getNonce = async () =>
    (await provider.getAccount(signer.getAddress())).nonce;
  return {
    set_address(address) {
      contract.setAddress(address);
    },
    async deploy(creators) {
      const deploy = contract.deploy({
        code: code,
        deployer: Address.fromString(signer.getAddress().toString()),
        chainID: 'D',
        initArguments: [
          new List(
            new AddressType(),
            creators.map((e) => new AddressValue(e))
          ),
        ],
        gasLimit: 50000000,
      });

      deploy.setNonce(await getNonce());

      const signed = await signer.sign(deploy.serializeForSigning());
      deploy.applySignature(signed);

      return provider.sendTransaction(deploy);
    },
    async collections(identifier) {
      const interaction = contract.methods.collections([
        new BytesValue(Buffer.from(identifier)),
      ]);
      const query = interaction.check().buildQuery();
      const queryResponse = await provider.queryContract(query);
      let typedBundle = new ResultsParser().parseQueryResponse(
        queryResponse,
        interaction.getEndpoint()
      );
      console.log(typedBundle);

      const response = (await provider.queryContract(query)).returnData.join(
        ','
      );

      return response;
    },
    async create_collection(identifier, name, ticker, owner) {
      const txn = contract.methods
        .create_collection([
          new BytesValue(Buffer.from(identifier)),
          new BytesValue(Buffer.from(name)),
          new BytesValue(Buffer.from(ticker)),
          new AddressValue(owner),
        ])
        .withSender(signer.getAddress())
        .withChainID('D')
        .withGasLimit(200000000)
        .withValue(BigInt(50000000000000000))
        .withNonce(await getNonce())
        .buildTransaction();

      const signed = await signer.sign(txn.serializeForSigning());
      txn.applySignature(signed);

      return provider.sendTransaction(txn);
    },
  };
}
