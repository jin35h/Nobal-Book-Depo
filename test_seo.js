// test_seo.js - Verifies all SEO, AEO, and GEO checks against index.html
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

console.log('--- TESTING SEO, AEO, GEO CHECKS ---');

// 1. Title & Meta
const titleMatch = html.match(/<title>(.*?)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'NONE', `(${titleMatch ? titleMatch[1].length : 0} chars)`);

const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
console.log('Description:', descMatch ? descMatch[1] : 'NONE', `(${descMatch ? descMatch[1].length : 0} chars)`);

const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'NONE');

// 2. Open Graph & Twitter
const ogTitle = html.match(/<meta\s+property=["']og:title["']\s+content=["'](.*?)["']/i);
const ogImage = html.match(/<meta\s+property=["']og:image["']\s+content=["'](.*?)["']/i);
const twitterCard = html.match(/<meta\s+name=["']twitter:card["']\s+content=["'](.*?)["']/i);
console.log('OG Title:', ogTitle ? ogTitle[1] : 'NONE');
console.log('OG Image:', ogImage ? ogImage[1] : 'NONE');
console.log('Twitter Card:', twitterCard ? twitterCard[1] : 'NONE');

// 3. Headings
const h1Matches = html.match(/<h1[\s>][\s\S]*?<\/h1>/gi) || [];
console.log('H1 count:', h1Matches.length);
if(h1Matches.length > 0) console.log('H1 content:', h1Matches[0].replace(/<[^>]+>/g, '').trim());

const h2Matches = html.match(/<h2[\s>][\s\S]*?<\/h2>/gi) || [];
console.log('H2 count:', h2Matches.length);
h2Matches.forEach((h, i) => console.log(`  H2 #${i+1}:`, h.replace(/<[^>]+>/g, '').trim()));

// 4. Schema JSON-LD validation
const schemaMatch = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);
if(schemaMatch){
  try {
    const json = JSON.parse(schemaMatch[1]);
    console.log('JSON-LD Schema parsed successfully! Graph nodes:', json['@graph'].map(n => n['@type']));
  } catch(e) {
    console.error('JSON-LD Parse Error:', e.message);
  }
} else {
  console.log('JSON-LD Schema: NOT FOUND');
}

// 5. Images with alt & dimensions
const imgTags = html.match(/<img[\s\S]*?>/gi) || [];
console.log('Total images:', imgTags.length);
imgTags.forEach((img, idx) => {
  const hasAlt = /alt=["'].*?["']/i.test(img);
  const hasWidth = /width=["'].*?["']/i.test(img);
  const hasHeight = /height=["'].*?["']/i.test(img);
  console.log(`Image #${idx+1}: alt=${hasAlt}, width=${hasWidth}, height=${hasHeight}`);
});

// 6. Word count
const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                     .replace(/<style[\s\S]*?<\/style>/gi, '')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ')
                     .trim();
const words = textOnly.split(' ').filter(w => w.length > 0);
console.log('Total word count:', words.length);
