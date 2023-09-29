import env from "dotenv"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

env.config();

async function main() {
    const url = Web3.clusterApiUrl("devnet");
    const connect = new Web3.Connection(url);
    const publicKey = new Web3.PublicKey("8Hbb8D6RBarCXK2nKkG6rYeTXnfUeu3m3JmaFWhKk9zX");
    const decoded = base58.decode(process.env.PRIVATE_KEY as any);
    const keyPair = Web3.Keypair.fromSecretKey(decoded);
    const mintedToken = new Web3.PublicKey("mint-public-key");
    const tokenAccount = new Web3.PublicKey('7jUkCQ1jLZaBinkPAVSrouGsywbhg5BdWH5ojmYcZFS1n')

    const mindtedTokens = await token.mintTo(
        connect,
        keyPair,
        mintedToken,
        tokenAccount,
        keyPair.publicKey,
        Web3.LAMPORTS_PER_SOL * 1000000000
    )

    console.log("minted tokens", mintedToken);
}


main();