import { Address, TransactionWatcher } from '@multiversx/sdk-core';
import { ProxyNetworkProvider } from '@multiversx/sdk-network-providers';
import { UserSigner } from '@multiversx/sdk-wallet';
import { CollectionCreatorClient } from '../src/index';
import { config } from 'dotenv';

config();



describe('deploy contract', () => {
  test('deploying collection creator', async () => {
    config();
    const us = UserSigner.fromPem(process.env.SENDER_PRIVATE_KEY!);
    const networProvider = new ProxyNetworkProvider(process.env.ELROND_PROXY!);


    const client = CollectionCreatorClient(networProvider, us);

    await (async function deploy() {
      console.log(`Deploying using address:`, us.getAddress().toString());
      const creatorsString = process.env.CREATORS!;
      if (!creatorsString) {
        console.log(`No creators provided, aborting deploy.`);
        return;
      }
      const creators = creatorsString.split(',').map((c) => Address.fromBech32(c));

      const deployHash = await client.deploy(creators);

      console.log(`Deployed Tx: `, deployHash);

      // const tx = await networProvider.getTransaction(deployHash);

      const txWatcher = new TransactionWatcher(networProvider,);
      const completeTx = await txWatcher.awaitCompleted({
        getHash() {
          return {
            hex() {
              return deployHash
            },
          };
        },
      })
      const deployed = completeTx.logs.findEvents("SCDeploy")[0].address.bech32()
      console.log("Creator deployed to:", deployed)

    })()
  }, 4000000);
});
