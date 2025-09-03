// Minimal front-end using ethers v6 to connect MetaMask
import { ethers } from "ethers";

document.getElementById("connect").addEventListener("click", async () => {
  // Check if MetaMask is present
  if (!window.ethereum) {
    alert("Please install MetaMask.");
    return;
  }

  // Request accounts and get signer
  const provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  const signer = await provider.getSigner();

  // Show connected address
  const address = await signer.getAddress();
  console.log("Connected:", address);
  alert(`Connected: ${address}`);
});
