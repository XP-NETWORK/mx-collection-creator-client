import { IAddress } from '@multiversx/sdk-core/out';
import { INetworkProvider } from '@multiversx/sdk-network-providers/out/interface';
import { UserSigner } from '@multiversx/sdk-wallet/out';
export interface CollectionCreator {
    deploy(creators: IAddress[]): Promise<string>;
    create_collection(identifier: string, name: string, ticker: string, owner: IAddress): Promise<string>;
    collections(identifier: string): Promise<string>;
    set_address(address: IAddress): void;
}
export declare function CollectionCreatorClient(provider: INetworkProvider, signer: UserSigner): CollectionCreator;
//# sourceMappingURL=contract.d.ts.map