import { Link, MetadataAsset, MetadataImage } from './metadata-objects';
export interface LSP4DigitalAssetMetadata {
  name?: string;
  description: string;
  links: Link[];
  icon: MetadataImage[];
  images: MetadataImage[] | MetadataImage[][];
  assets: MetadataAsset[];
  attributes?: LSP4MetadataAttribute[]
}

export interface LSP4MetadataAttribute {
  key: string,    // name of the attribute
  value: string, // value assigned to the attribute
  type: string | number | boolean
}