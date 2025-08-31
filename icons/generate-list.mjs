// Node.js script to generate icons/list.json
import { readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

function getIconPaths(subdir) {
  return readdirSync(join('icons', subdir))
    .filter(f => f.endsWith('.svg'))
    .map(f => `${subdir}/${f}`);
}

const filled = getIconPaths('filled');
const outline = getIconPaths('outline');
const allIcons = [...filled, ...outline].sort();

writeFileSync(join('icons', 'list.json'), JSON.stringify(allIcons, null, 2));
console.log(`Generated icons/list.json with ${allIcons.length} icons.`);
