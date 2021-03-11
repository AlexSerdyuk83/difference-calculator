import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const convert = (fileName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = resolve(__dirname, fileName);
  const content = readFileSync(path, 'utf8');
  return JSON.parse(content);
};

// eslint-disable-next-line import/prefer-default-export
export { convert };
