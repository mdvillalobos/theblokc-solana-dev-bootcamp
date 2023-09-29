import {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const publicKey = new PublicKey("8Hbb8D6RBarCXK2nKkG6rYeTXnfUeu3m3JmaFWhKk9zX");

async function getBalance(){
    try{
        const connect = new Connection(clusterApiUrl("devnet"), "confirmed");
        const balance = await connect.getBalance(publicKey);
        console.log(`address ${publicKey} has ${balance / LAMPORTS_PER_SOL} SOL` );
    } 
    catch (err : any) {

    } 
};


async function main() {
    await getBalance();
}

main();