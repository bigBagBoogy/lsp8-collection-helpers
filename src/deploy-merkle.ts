import { MerkleTree } from 'merkletreejs';
import { hexlify, keccak256 } from 'ethers';
import * as fs from 'fs';
import {uploadJsonToPinata} from "./utils/upload-to-ipfs";

// Define a type for the address proof object
interface AddressProof {
  address: string,
  proof: string[]
}

// Read the whitelist file and split it into an array of addresses
const data = fs.readFileSync('src/whitelist.txt', 'utf8');
const addresses = data.split('\r').filter(Boolean); // filter Boolean is used to remove empty lines

// Create a hash function

// Convert addresses to buffer and then hash them
const hashedAddresses = addresses.map(address => hexlify(keccak256(address)));

// Construct a Merkle tree from the hashed addresses
const merkleTree = new MerkleTree(hashedAddresses, keccak256, { sortLeaves: true, sortPairs: true });

// Construct an array of address proof objects
const addressProofs: AddressProof[] = addresses.map(address => {
  const proof = merkleTree.getProof(hexlify(keccak256((address))));
  return {
    address: address,
    proof: proof.map((node) => '0x' + node.data.toString('hex')) // converting proofs to hexadecimal format
  };
});

const whitelist = {
  merkleRoot: merkleTree.getHexRoot(),
  whitelist: addressProofs,
}

uploadJsonToPinata(JSON.stringify(whitelist)).then((cid) => {
  console.log(`Whitelist uploaded to ipfs://${cid}`);
});
