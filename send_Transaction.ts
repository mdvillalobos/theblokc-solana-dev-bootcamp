import {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL, 
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
} from "@solana/web3.js";

import bs58 from "bs58"
import "dotenv/config"

const to = new PublicKey("7tabfn7purpDYV6K9G9DSjouHqkyrmsi4km86HdaqDqp");

const keyPair = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY ?? ""));

const connect = new Connection(clusterApiUrl("devnet"), "confirmed");

const getBalance = async (address : PublicKey) => {
    try{
        const balance = await connect.getBalance(address);
        console.log(`address ${address.toString()} has ${balance / LAMPORTS_PER_SOL} SOL` );
    } 
    catch (err : any) {

    } 
};

async function main() {
    const transaction = new Transaction().add(SystemProgram.transfer({
        fromPubkey: keyPair.publicKey, toPubkey: to, lamports: LAMPORTS_PER_SOL / 50000000,
        })
    );

    const signature = await sendAndConfirmTransaction(connect, transaction, [
        keyPair,
    ]);
    console.log("SIGNATURE", signature);
    await getBalance(to);
};

main();