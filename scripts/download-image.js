const fs = require('fs');
const path = require('path');
const https = require('https');

// Create the directory if it doesn't exist
const dir = path.join(__dirname, '../public/images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// URL of the image shared by the user
const imageUrl = 'https://raw.githubusercontent.com/hamiltro2/healixai-assets/main/healixai-mobile-app.jpg';
const outputPath = path.join(dir, 'healixai-mobile-app.jpg');

// Download the image
https.get(imageUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`);
    return;
  }

  const fileStream = fs.createWriteStream(outputPath);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log(`Image downloaded successfully to ${outputPath}`);
  });
}).on('error', (err) => {
  console.error(`Error downloading image: ${err.message}`);
});
