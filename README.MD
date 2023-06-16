# Running the Metadata Deployment Code

This README will guide you on how to run this metadata deployment code. This code uploads images to IPFS using Pinata, processes them, and then uploads the associated metadata.

Before you start, make sure Node.js and NPM are installed on your system.

## Instructions

### Step 1: Set Up Your Environment Variables

Create a `.env` file in the root directory of your project. Set the environment variables required for the Pinata service. Your `.env` file should include your Pinata API keys as follows:

```text
PINATA_API_KEY=<your-pinata-api-key>
PINATA_API_KEY_SECRET=<your-pinata-secret-key>
```

Replace `<your-pinata-api-key>` and `<your-pinata-secret-key>` with your actual Pinata API key and secret key, respectively.

### Step 2: Replace the Images
Replace the existing images located in the ./assets/img/ directory with the ones you want to use. Ensure you replace both icon.png and banner.png. The image paths are defined in the code, and the current code assumes PNG format.

### Step 3: Edit the Metadata
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

### Step 4: Run the Code
Now you're ready to run the code. Use the following NPM command in your terminal:

```bash
npm run upload-metadata
```

This command will trigger the deployMetadata function. It will upload the images to IPFS via Pinata, gather image data, populate the metadata, and finally, upload the metadata.

If everything runs successfully, you will see a console log of the metadata's Content Identifier (CID) on IPFS.

## Troubleshooting

In case you encounter issues:

- Check your Pinata API keys in your .env file.
- Ensure your images are in the correct format (PNG) and in the correct directory (./assets/img/).
- Make sure your metadata is correctly structured.
- Ensure that your environment has the necessary dependencies installed (Node.js and NPM).

Happy coding!