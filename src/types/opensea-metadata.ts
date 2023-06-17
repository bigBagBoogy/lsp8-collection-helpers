export interface OpenSeaAttribute {
  trait_type: string;
  value: any;
}

export interface OpenSeaMetadata {
  name: string;
  description: string;
  attributes: OpenSeaAttribute[];
  image: string;
}
