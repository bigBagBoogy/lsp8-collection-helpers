import sharp from "sharp";
import fs from "fs";
import {keccak256} from "js-sha3";


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