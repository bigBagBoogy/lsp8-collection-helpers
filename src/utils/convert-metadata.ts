import {LSP4DigitalAssetMetadata, LSP4MetadataAttribute} from "../types/lsp4-metadata";
import {getImageDataFromUrl} from "./image-data";
import {OpenSeaAttribute, OpenSeaMetadata} from "../types/opensea-metadata";

export const convertMetadata = async (metadata: OpenSeaMetadata): Promise<LSP4DigitalAssetMetadata> => {
  const attributes: LSP4MetadataAttribute[] = metadata.attributes.map((attribute: OpenSeaAttribute) => {
    return {
      key: attribute.trait_type,
      value: attribute.value,
      type: typeof attribute.value
    }
  });

  const imageData = await getImageDataFromUrl(metadata.image);

  return {
    name: metadata.name,
    description: metadata.description,
    links: [],
    icon: [],
    images: [[ {
      width: imageData.width,
      height: imageData.height,
      hashFunction: 'keccak256',
      hash: imageData.hash,
      url: metadata.image
    }]],
    assets: [],
    attributes
  }
}