const { JsonRpcProvider, Wallet, parseEther, parseUnits } = require("ethers");
const { FlashbotsBundleProvider } = require("@flashbots/ethers-provider-bundle");

const provider = new JsonRpcProvider("https://mainnet.infura.io/v3/c0f20c79f20d430fa251e4ea25880384"); // <-- Sostituisci con il tuo vero ID!
const wallet = new Wallet(process.env.PRIVATE_KEY, provider);

async function main() {
  const flashbotsProvider = await FlashbotsBundleProvider.create(provider, wallet);

  const transaction = {
    to: "0xc42C7A68F1f9e7C451D7478b39D81E7A3A5139C6",
    value: parseEther("0.01"),
    gasLimit: 21000,
    maxFeePerGas: parseUnits("100", "gwei"),
    maxPriorityFeePerGas: parseUnits("2", "gwei"),
    nonce: await provider.getTransactionCount(wallet.address),
    chainId: 1
  };

  const signedTx = await wallet.signTransaction(transaction);
  const bundle = [{ signedTransaction: signedTx }];

  const blockNumber = await provider.getBlockNumber();
  const result = await flashbotsProvider.sendBundle(bundle, blockNumber + 1);

  console.log("Bundle sent:", result);
}

main();
