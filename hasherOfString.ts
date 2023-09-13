import { keccak256 } from 'js-sha3';

// Your IPFS URI
const ipfsURI = "ipfs://QmQKhYpFUX3xKLkMHc1zfwBHxBafLXtvQnbHq4ATNk71cJ";

// Calculate the hash
const ipfsHash = keccak256(ipfsURI);

console.log("Contract Metadata Hash:", ipfsHash);

