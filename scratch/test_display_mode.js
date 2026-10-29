const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

// Check sections inside view-website
const startIdx = html.indexOf('<div id="view-website"');
const endIdx = html.indexOf('<!-- END WEBSITE PAGE VIEW -->');
const websiteHtml = html.substring(startIdx, endIdx);

const sectionRegex = /<section\b[^>]*id="([^"]+)"[^>]*>|<section\b[^>]*class="([^"]+)"[^>]*>/g;
let match;
const sections = [];
while ((match = sectionRegex.exec(websiteHtml)) !== null) {
  sections.push(match[1] || match[2]);
}

console.log('Sections found in #view-website:', sections);
