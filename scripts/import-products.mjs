#!/usr/bin/env node
/**
 * Product import scaffold.
 *
 * Reads a CSV (default: data/products.csv, falling back to data/template.csv),
 * validates the rows and writes a normalized data/products.normalized.json.
 *
 * It does NOT touch any store by itself — plug your Shopify Admin API call where
 * marked below to actually create the products. No tokens are stored in the repo.
 *
 * Usage:
 *   node scripts/import-products.mjs [path/to/file.csv]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const REQUIRED = ['handle', 'title', 'price'];

function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') {
        inQuotes = false;
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field);
      field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
      field = '';
    } else {
      field += c;
    }
  }
  if (field !== '' || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function toObjects(rows) {
  const [header, ...body] = rows;
  return body.map((cells) => {
    const obj = {};
    header.forEach((h, i) => {
      obj[h.trim()] = (cells[i] || '').trim();
    });
    return obj;
  });
}

const input = process.argv[2] || 'data/products.csv';
const source = existsSync(input) ? input : 'data/template.csv';
console.log(`Reading: ${source}`);

const records = toObjects(parseCSV(readFileSync(source, 'utf8')));
const products = [];
const errors = [];

records.forEach((r, idx) => {
  const missing = REQUIRED.filter((k) => !r[k]);
  if (missing.length) {
    errors.push(`Row ${idx + 2}: missing ${missing.join(', ')}`);
    return;
  }
  products.push({
    handle: r.handle,
    title: r.title,
    body_html: r.description || '',
    status: r.status || 'draft',
    tags: (r.tags || '')
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean),
    images: r.image_url ? [{ src: r.image_url }] : [],
    variants: [{ price: r.price, compare_at_price: r.compare_at_price || null, sku: r.sku || '' }]
  });
});

if (errors.length) {
  console.error(`\nValidation errors:\n${errors.join('\n')}\n`);
}

writeFileSync('data/products.normalized.json', JSON.stringify(products, null, 2));
console.log(`Normalized ${products.length} product(s) -> data/products.normalized.json`);

// --- Plug your import here -------------------------------------------------
// for (const product of products) {
//   await admin.graphql(PRODUCT_CREATE_MUTATION, { variables: { input: product } });
// }
// --------------------------------------------------------------------------
console.log('Next: wire your Shopify Admin API (productCreate) where marked in this file.');
