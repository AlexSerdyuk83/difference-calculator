import { readFileSync } from 'fs';
import { extname } from 'path';
import { load } from 'js-yaml';
/* import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url'; */

const getFlat = (data) => {
  const result = data.reduce((acc, item) => {
    const key = Object.keys(item)[0];
    const value = item[key];
    acc[key] = value;
    return acc;
  }, {});
  return result;
};

const convert = (fileName) => {
  const content = readFileSync(fileName, 'utf8');
  const format = extname(fileName);
  const result = format === '.json' ? JSON.parse(content) : getFlat(load(content));
  return result;
};

export default convert;
