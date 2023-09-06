import * as fs from 'fs';

// Read the content of the first SVG file
const svgFile1: string = fs.readFileSync('file1.svg', 'utf-8');

// Read the content of the second SVG file
const svgFile2: string = fs.readFileSync('file2.svg', 'utf-8');

// Concatenate the contents of both files
const mergedSVG: string = svgFile1 + svgFile2;

// Write the merged content to a new SVG file
fs.writeFileSync('merged.svg', mergedSVG, 'utf-8');

console.log('SVG files merged successfully!');
