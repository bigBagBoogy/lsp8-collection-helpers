import axios from 'axios';
import fs from 'fs';
import FormData from 'form-data';
import {PINATA_API_KEY, PINATA_API_KEY_SECRET} from "../globals";
import basePathConverter from 'base-path-converter';
import rfs from 'recursive-fs';

export async function uploadFolderToPinata(folderPath: string): Promise<string> {
  try {
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

    const { files } = await rfs.read(folderPath);
    let data = new FormData();

    for (const file of files) {
      data.append('file', fs.createReadStream(file), {
        filepath: basePathConverter(folderPath, file),
      });
    }

    const response = await axios.post(url, data, {
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      headers: {
        ...data.getHeaders(),
        'pinata_api_key': PINATA_API_KEY,
        'pinata_secret_api_key': PINATA_API_KEY_SECRET,
      },
    });

    return response.data.IpfsHash;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadImageToPinata(filePath: string): Promise<string> {
  try {
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

    let data = new FormData();
    data.append('file', fs.createReadStream(filePath));

    const response = await axios.post(url, data, {
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
      headers: {
        'pinata_api_key': PINATA_API_KEY,
        'pinata_secret_api_key': PINATA_API_KEY_SECRET,
      },
    });

    return response.data.IpfsHash;
  } catch (error) {
    console.log(error);
  }
}

export async function uploadJsonToPinata(stringifiedJson: string) {
  try {
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

    let data = new FormData();
    const buffer = Buffer.from(stringifiedJson, 'utf-8');
    data.append('file', buffer, { filename: 'data.json', contentType: 'application/json' });

    const response = await axios.post(url, data, {
      maxContentLength: Number.MAX_SAFE_INTEGER,
      maxBodyLength: Number.MAX_SAFE_INTEGER,
      headers: {
        ...data.getHeaders(),  // This will set the 'Content-Type' header to 'multipart/form-data'
        'pinata_api_key': PINATA_API_KEY,
        'pinata_secret_api_key': PINATA_API_KEY_SECRET,
      },
    });

    return response.data.IpfsHash;
  } catch (error) {
    console.log(error);
  }
}