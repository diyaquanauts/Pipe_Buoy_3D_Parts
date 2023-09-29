const fs = require('fs');

// Read the JSON file
const rawData = fs.readFileSync('partInfo.json');
const parts = JSON.parse(rawData);

// Start of README content
let readmeContent = `# Pipe Buoy: 3D Parts

This repository contains all the 3D parts for the Pipe Buoy project.  
Always make sure to pull the latest before starting a new build.  

`;

// Define the desired width for all images
const imageWidth = "250";  // width in pixels

// Generate content for each part and append to README content
for (const part of parts) {
    readmeContent += `## ${part.name}\n\n`;
    readmeContent += `<img src="${part.image}" width="${imageWidth}" alt="${part.name}" title="${part.name}" align="left" style="margin-right:20px">`;
    readmeContent += `${part.description}<br><sub>**Filename:** ${part.filename}</sub><br><sub>**Drawn By:** ${part['Drawn By']}</sub>\n\n`;

    // Adding multiple line breaks as a workaround
    for (let i = 0; i < 5; i++) {
        readmeContent += "<br>";
    }
    readmeContent+= "\n";
}

// Write the generated content to README.md
fs.writeFileSync('README.md', readmeContent);

console.log('README.md has been updated!');
