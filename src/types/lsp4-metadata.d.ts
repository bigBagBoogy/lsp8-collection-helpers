import { Link, MetadataAsset, MetadataImage } from './metadata-objects';
export interface LSP4DigitalAssetMetadata {
  name?: string;
  description: string;
  links: Link[];
  icon: MetadataImage[];
  images: MetadataImage[] | MetadataImage[][];
  assets: MetadataAsset[];
}