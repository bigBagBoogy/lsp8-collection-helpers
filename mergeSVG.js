"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Read the content of the first SVG file
var svgFile1 = fs.readFileSync('file1.svg', 'utf-8');
// Read the content of the second SVG file
var svgFile2 = fs.readFileSync('file2.svg', 'utf-8');
// Concatenate the contents of both files
var mergedSVG = svgFile1 + svgFile2;
// Write the merged content to a new SVG file
fs.writeFileSync('merged.svg', mergedSVG, 'utf-8');
console.log('SVG files merged successfully!');
