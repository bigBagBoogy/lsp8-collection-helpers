import { config } from 'dotenv';
config();

export const PINATA_API_KEY = process.env.PINATA_API_KEY;
export const PINATA_API_KEY_SECRET = process.env.PINATA_API_KEY_SECRET;
export const IPFS_GATEWAY = process.env.IPFS_GATEWAY;
export const ARWEAVE_GATEWAY = process.env.ARWEAVE_GATEWAY;