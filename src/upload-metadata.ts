import {uploadImageToPinata, uploadJsonToPinata} from "./utils/upload-to-ipfs";
import {getImageData} from "./utils/image-data";
import {LSP4DigitalAssetMetadata} from "./types/lsp4-metadata";

async function uploadMetadata() {
  const iconCID = await uploadImageToPinata('./assets/img/icon.png');
  const iconData = await getImageData('./assets/img/icon.png');

  const bannerCID = await uploadImageToPinata('./assets/img/banner.png')
  const bannerData = await getImageData('./assets/img/banner.png');

  const metadata: LSP4DigitalAssetMetadata = {
    description: '🧬 CLONE X - LUKSO = 🧬20,000 next-gen Avatars, by RTFKT and Takashi Murakami 🌸',
    links: [{title: 'DROPPS', url: 'https://dropps.io'}, {title: 'RTFKT', url: 'https://rtfkt.com'}],
    icon: [{
      width: iconData.width,
      height: iconData.height,
      hashFunction: 'keccak256',
      hash: iconData.hash,
      url: `ipfs://${iconCID}`
    }],
    images: [[{
      width: bannerData.width,
      height: bannerData.height,
      hashFunction: 'keccak256',
      hash: bannerData.hash,
      url: `ipfs://${bannerCID}`
    }]],
    assets: []
  };

  const metadataCID = await uploadJsonToPinata(JSON.stringify({LSP4Metadata: metadata}));

  console.log(`Metadata CID: ${metadataCID}`);
}

uploadMetadata();