// Patch @sveltejs/adapter-vercel to avoid EEXIST symlink errors
// caused by duplicate __data.json routes in SvelteKit 2.48+

const fs = require('fs');
const path = require('path');

const adapterPath = path.join(__dirname, '..', 'node_modules', '@sveltejs', 'adapter-vercel', 'index.js');

if (!fs.existsSync(adapterPath)) {
  console.log('[fix-adapter-vercel] adapter-vercel not found, skipping patch');
  process.exit(0);
}

let code = fs.readFileSync(adapterPath, 'utf8');

// If we've already patched (look for our marker), do nothing
if (code.includes('patched to avoid duplicate __data.json symlinks')) {
  console.log('[fix-adapter-vercel] already patched, skipping');
  process.exit(0);
}

const original =
  "\t\t\t\t\t// Create symlinks\n" +
  "\t\t\t\t\tfs.symlinkSync(relative_for_main, main_symlink_path); // Creates functions/index.func -> ![-].func\n" +
  "\t\t\t\t\tfs.symlinkSync(relative_for_data, data_symlink_path); // Creates functions/index/__data.json.func -> ../![-].func\n";

const patched =
  "\t\t\t\t\t// Create symlinks (patched to avoid duplicate __data.json symlinks)\n" +
  "\t\t\t\t\tif (!route.id.endsWith('/__data.json')) {\n" +
  "\t\t\t\t\t\tfs.symlinkSync(relative_for_main, main_symlink_path); // Creates functions/index.func -> ![-].func\n" +
  "\t\t\t\t\t}\n" +
  "\t\t\t\t\ttry {\n" +
  "\t\t\t\t\t\tfs.symlinkSync(relative_for_data, data_symlink_path); // Creates functions/index/__data.json.func -> ../![-].func\n" +
  "\t\t\t\t\t} catch (e) {\n" +
  "\t\t\t\t\t\tif (e.code !== 'EEXIST') throw e;\n" +
  "\t\t\t\t\t}\n";

if (!code.includes(original)) {
  console.warn('[fix-adapter-vercel] expected code block not found; adapter layout may have changed. No patch applied.');
  process.exit(0);
}

code = code.replace(original, patched);
fs.writeFileSync(adapterPath, code, 'utf8');

console.log('[fix-adapter-vercel] Patched @sveltejs/adapter-vercel to avoid EEXIST symlink errors.');

