# Running the Metadata Deployment Code

This README will guide you on how to run this metadata deployment code. This code provides two features: one for uploading images to IPFS using Pinata, processing them, and then uploading the associated metadata, and the second for fetching and converting metadata from a provided base URI.

Before you start, make sure Node.js and NPM are installed on your system.

## Feature 1: Deploying Metadata

This README will guide you on how to run this metadata deployment code. This code uploads images to IPFS using Pinata, processes them, and then uploads the associated metadata.

Before you start, make sure Node.js and NPM are installed on your system.

### Instructions

#### Step 1: Set Up Your Environment Variables

Create an account on [Pinata](https://www.pinata.cloud/) and create your API keys.
Create a `.env` file in the root directory of your project. 
Set the environment variables required for the Pinata NFT upload.
Your `.env` file should include your Pinata API keys as follows:

```text
PINATA_API_KEY=<your-pinata-api-key>
PINATA_API_KEY_SECRET=<your-pinata-secret-key>
```

Replace `<your-pinata-api-key>` and `<your-pinata-secret-key>` with your actual Pinata API key and secret key, respectively.

#### Step 2: Replace the Images
Replace the existing images located in the ./assets/img/ directory with the ones you want to use. Ensure you replace both icon.png and banner.png. The image paths are defined in the code, and the current code assumes PNG format.

#### Step 3: Edit the Metadata
You will need to change the metadata to suit your needs. The LSP4DigitalAssetMetadata object in the code provides a template. Replace the description, links, and other fields as needed.

For example:

```typescript
const metadata: LSP4DigitalAssetMetadata = {
    description: 'Your description',
    links: [{title: 'Your Title', url: 'Your URL'}],
    icon: [
        // your icon data will be populated automatically 
    ],
    images: [
        // your images data will be populated automatically
    ],
    assets: [] // add your assets if needed
};
```

#### Step 4: Run the Code
Now you're ready to run the code. Use the following NPM command in your terminal:

```bash
npm run upload-metadata
```

This command will trigger the deployMetadata function. It will upload the images to IPFS via Pinata, gather image data, populate the metadata, and finally, upload the metadata.

If everything runs successfully, you will see a console log of the metadata's Content Identifier (CID) on IPFS.

## Feature 2: Fetching and Converting Metadata

### Instructions

#### Step 1: Set Up Your Environment Variables

If the metadata you're trying to fetch and convert is an IPFS URI, you'll need to add an IPFS gateway to the `.env` with `IPFS_GATEWAY`. Your `.env` file should now look like this:

```text
PINATA_API_KEY=<your-pinata-api-key>
PINATA_API_KEY_SECRET=<your-pinata-secret-key>
IPFS_GATEWAY=<your-ipfs-gateway>
```

Replace <your-ipfs-gateway> with your actual IPFS gateway.

#### Step 2: Set your configuration

In the last line of [fetch-convert-metadata.ts](src/fetch-convert-metadata.ts), 
change the `baseURI` to the URI of the metadata you want to fetch and convert, 
and amount of tokens to convert:

```typescript
fetchConvertMetadata(<baseURI>, <tokensNumber>);
```

#### Step 3: Run the Code

Run the `fetchConvertMetadata` function by using the following NPM command in your terminal:

```bash
npm run fetch-convert-metadata
```

This command will trigger the `fetchConvertMetadata` function. It will fetch and convert metadata from the provided base URI.

If everything runs successfully, you will see a progress log of the metadata fetching and converting process.

### Troubleshooting

In case you encounter issues:

- Check your Pinata API keys in your .env file.
- Ensure your images are in the correct format (PNG) and in the correct directory [./assets/img/](./assets/img/).
- Make sure your metadata is correctly structured.
- Ensure that your environment has the necessary dependencies installed (Node.js and NPM).
- Check your IPFS gateway in your .env file if you're using the fetching and converting metadata feature.

Happy coding!