import axios from 'axios';
import fs from 'fs';
import path from 'path';
import {convertMetadata} from "./utils/convert-metadata";
import {OpenSeaMetadata} from "./types/opensea-metadata";

const fetchConvertMetadata = async (baseURI: string, tokenAmount: number) => {
  const outputDir = path.join(__dirname, 'output');

  // Create the output directory if it doesn't exist
  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
  }

  // Loop from 1.json to 10,000
  for (let i = 1; i <= tokenAmount; i++) {
    console.clear();
    console.log(`Fetching and converting metadata from ${baseURI}...`);
    console.log(`${(i/tokenAmount*100).toFixed(2)}% done`);
    try {
      // Fetch data from the concatenated URL
      const response = await axios.get(`${baseURI}${i}`);
      const data = response.data as OpenSeaMetadata;
      const lsp4Metadata = await convertMetadata(data);

      // Write the fetched data to a file in the 'output' directory
      fs.writeFileSync(path.join(outputDir, i.toString()), JSON.stringify({LSP4Metadata: lsp4Metadata}));
    } catch (error) {
      console.error(`Failed to fetch and write data for index ${i}: ${error.message}`);
    }
  }
};


fetchConvertMetadata('https://clonex-assets.rtfkt.com/', 1000);