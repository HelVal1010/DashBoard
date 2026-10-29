const fs = require('fs');
const css = fs.readFileSync('styles.css', 'utf8');

// Find all width/min-width declarations with fixed pixel values > 320px outside media queries
const fixedWidthRegex = /(?:^|[^{]+)\{([^}]+)\}/g;
let match;
const suspicious = [];

while ((match = fixedWidthRegex.exec(css)) !== null) {
  const block = match[1];
  const pxMatch = block.match(/(?:min-width|width)\s*:\s*(\d+)px/);
  if (pxMatch) {
    const val = parseInt(pxMatch[1], 10);
    if (val > 320 && val < 1680) { // between mobile width and desktop max-width
      const selector = match[0].split('{')[0].trim();
      // check if it's inside a media query or standard desktop container
      suspicious.push({ selector, width: val });
    }
  }
}

console.log('Fixed widths > 320px:', suspicious);
