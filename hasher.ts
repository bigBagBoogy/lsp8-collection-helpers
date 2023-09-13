import fs from 'fs';
import { keccak256 } from 'js-sha3';

async function hashLocalSVG() {
  // Replace 'image.svg' with the path to your local SVG file
  const filePath = './assets/img/bearYellow.svg';

  try {
    // Read the SVG file as text
    const svgContent = fs.readFileSync(filePath, 'utf-8');

    // Calculate the keccak256 hash of the SVG content
    const keccakHash = '0x' + keccak256(svgContent);

    console.log(`Hash: ${filePath} ${keccakHash}`);
  } catch (error) {
    console.error(`Error reading or hashing the SVG file: ${error}`);
  }
}

hashLocalSVG();

