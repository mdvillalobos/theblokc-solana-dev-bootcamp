import env from "dotenv"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

env.config();

async function main() {
    const connect = new Web3.Connection(Web3.clusterApiUrl("devnet"), "confirmed");
    const publicKey = new Web3.PublicKey("8Hbb8D6RBarCXK2nKkG6rYeTXnfUeu3m3JmaFWhKk9zX");
    const keyPair = Web3.Keypair.fromSecretKey(base58.decode(process.env.PRIVATE_KEY as any));
    const mintedToken = new Web3.PublicKey("3WNVP1gEKfJZ9EDQD8B1XEyuvZNXfEMvcY3ZqBK9gvQm");
    const tokenAccount = new Web3.PublicKey('2yHnRuyrBMma2PnjgEyopM9JY55VNd7XtWNB7tL1hcE8');

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