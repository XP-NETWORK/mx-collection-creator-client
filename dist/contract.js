"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionCreatorClient = void 0;
const out_1 = require("@multiversx/sdk-core/out");
const abi_json_1 = __importDefault(require("./abi.json"));
const wasm_base64_1 = require("./wasm.base64");
function CollectionCreatorClient(provider, signer) {
    const contract = new out_1.SmartContract({
        abi: out_1.AbiRegistry.create(abi_json_1.default),
    });
    const code = out_1.Code.fromBuffer(wasm_base64_1.CONTRACT_WASM);
    const getNonce = async () => (await provider.getAccount(signer.getAddress())).nonce;
    return {
        set_address(address) {
            contract.setAddress(address);
        },
        async deploy(creators) {
            const deploy = contract.deploy({
                code: code,
                deployer: out_1.Address.fromString(signer.getAddress().toString()),
                chainID: 'D',
                initArguments: [
                    new out_1.List(new out_1.AddressType(), creators.map((e) => new out_1.AddressValue(e))),
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
                new out_1.BytesValue(Buffer.from(identifier)),
            ]);
            const query = interaction.check().buildQuery();
            const queryResponse = await provider.queryContract(query);
            if (queryResponse.returnData[0] !== '') {
                let typedBundle = new out_1.ResultsParser().parseQueryResponse(queryResponse, interaction.getEndpoint());
                return typedBundle.firstValue?.valueOf();
            }
            throw new Error(`Query failed: No Contract found for this result`);
        },
        async create_collection(identifier, name, ticker, owner) {
            const txn = contract.methods
                .create_collection([
                new out_1.BytesValue(Buffer.from(identifier)),
                new out_1.BytesValue(Buffer.from(name)),
                new out_1.BytesValue(Buffer.from(ticker)),
                new out_1.AddressValue(owner),
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
exports.CollectionCreatorClient = CollectionCreatorClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJhY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29udHJhY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBV2tDO0FBR2xDLDBEQUE2QjtBQUM3QiwrQ0FBOEM7QUFpQjlDLFNBQWdCLHVCQUF1QixDQUNyQyxRQUEwQixFQUMxQixNQUFrQjtJQUVsQixNQUFNLFFBQVEsR0FBRyxJQUFJLG1CQUFhLENBQUM7UUFDakMsR0FBRyxFQUFFLGlCQUFXLENBQUMsTUFBTSxDQUFDLGtCQUFHLENBQUM7S0FDN0IsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxJQUFJLEdBQUcsVUFBSSxDQUFDLFVBQVUsQ0FBQywyQkFBYSxDQUFDLENBQUM7SUFFNUMsTUFBTSxRQUFRLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FDMUIsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDekQsT0FBTztRQUNMLFdBQVcsQ0FBQyxPQUFPO1lBQ2pCLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUTtZQUNuQixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUM3QixJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsYUFBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzVELE9BQU8sRUFBRSxHQUFHO2dCQUNaLGFBQWEsRUFBRTtvQkFDYixJQUFJLFVBQUksQ0FDTixJQUFJLGlCQUFXLEVBQUUsRUFDakIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxrQkFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pDO2lCQUNGO2dCQUNELFFBQVEs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