import { config } from 'dotenv';
config();

export const PINATA_API_KEY = process.env.PINATA_API_KEY;
export const PINATA_API_KEY_SECRET = process.env.PINATA_API_KEY_SECRET;