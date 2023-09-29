import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { TypePredicateKind } from "typescript";

const url = Web3.clusterApiUrl("devnet");
const connect = new Web3.Connection(url);

const publicKey = new Web3.PublicKey("8Hbb8D6RBarCXK2nKkG6rYeTXnfUeu3m3JmaFWhKk9zX");
const decoded = base58.decode(process.env.PRIVATE_KEY as any);
const keyPair = Web3.Keypair.fromSecretKey(decoded);
const tokenMint = new Web3.PublicKey("7jUkCQ1jLZaBinkPAVSrouGsywbhg5BdWH5ojmYcZFS1");

async function main() {
    const tokenAccount = await token.createAccount(
        connect,
        keyPair,
        tokenMint,
        publicKey,
    
    )
    console.log(tokenAccount.toBase58());
}

main();