import Fuse from 'fuse.js';
import { products } from './src/data/products.js';

const fuse = new Fuse(products, {
    keys: ['name', 'description', 'category', 'subcategory', 'features', 'keywords'],
    threshold: 0.3,
    includeScore: true
});

function testSearch(query, expectedProductName) {
    console.log(`\nTesting search for: "${query}"`);
    const results = fuse.search(query);
    if (results.length > 0) {
        const topResult = results[0].item.name;
        console.log(`  Top result: ${topResult}`);
        if (expectedProductName && topResult.includes(expectedProductName)) {
            console.log("  ✅ SUCCESS");
        } else if (expectedProductName) {
            console.log(`  ❌ FAILURE (Expected ${expectedProductName})`);
        }
    } else {
        console.log("  ❌ NO RESULTS FOUND");
    }
}

console.log("Starting Search Verification...");

// 1. Exact Match
testSearch("Paddy", "Paddy");

// 2. Fuzzy Match (Typo)
testSearch("Paddu", "Paddy");
testSearch("Onon", "Onion");

// 3. Keyword/Semantic Match
testSearch("Rice", "Paddy");
testSearch("Chawal", "Paddy");
testSearch("Dal", "Urad");
testSearch("Sarso", "Mustard");
testSearch("Fodder", "Sudan");

console.log("\nVerification Complete.");
