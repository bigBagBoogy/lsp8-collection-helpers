import {uploadFolderToPinata} from "./utils/upload-to-ipfs";

uploadFolderToPinata('src/output').then((cid) => {
  console.log(`Folder uploaded to ipfs://${cid}`);
});