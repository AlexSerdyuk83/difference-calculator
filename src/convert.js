import { readFileSync } from 'fs';
import { resolve } from 'path';

const convert = (fileName) => {
  const currDirect = process.cwd();
  const path = resolve(currDirect, 'src', fileName);
  const content = readFileSync(path, 'utf8');
  return JSON.parse(content);
};

// eslint-disable-next-line import/prefer-default-export
export { convert };
