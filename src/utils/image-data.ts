import axios from 'axios';
import sharp from 'sharp';
import { keccak256 } from 'js-sha3';
import fs from "fs";

export const getImageDataFromUrl = async (imageUrl: string) => {
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

  const imageBuffer = Buffer.from(response.data, 'binary');
  const metadata = await sharp(imageBuffer).metadata();

  const keccakHash = '0x' + keccak256.update(imageBuffer).hex();

  return {
    width: metadata.width,
    height: metadata.height,
    hash: keccakHash
  };
};



export const getImageData = async (filePath) => {
  const image = sharp(filePath);
  const metadata = await image.metadata();

  const imageContent = fs.readFileSync(filePath);
  const keccakHash = '0x' + keccak256(imageContent);
  return {
    width: metadata.width,
    height: metadata.height,
    hash: keccakHash
  }
};