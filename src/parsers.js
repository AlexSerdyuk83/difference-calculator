import { readFileSync } from 'fs';
/* import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url'; */

const convertJson = (fileName) => {
  const content = readFileSync(fileName, 'utf8');
  return JSON.parse(content);
};

/*   const writeInConst = (fileName) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = resolve(__dirname, fileName);
  return readFileSync(path, 'utf8');
};

  const convertJson = (fileName) => {
  const content = writeInConst(fileName, 'utf8');
  return JSON.parse(content);
}; */

// eslint-disable-next-line import/prefer-default-export
export default convertJson;
