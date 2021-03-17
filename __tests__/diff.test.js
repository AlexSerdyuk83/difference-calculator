import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, 'src', '..', '__fixtures__', filename);

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const file1Yml = getFixturePath('file1.yml');
const file2Yml = getFixturePath('file2.yml');
const diffStylish = fs.readFileSync(getFixturePath('result_stylish.txt'), 'utf8');
const diffPlain = fs.readFileSync(getFixturePath('result_plain.txt'), 'utf8');
const diffJson = fs.readFileSync(getFixturePath('result_json.txt'), 'utf8');

test.each([
  ['diffJsonToStylish', file1Json, file2Json, diffStylish, 'stylish'],
  ['diffYmlToStylish', file1Yml, file2Yml, diffStylish, 'stylish'],
  ['diffJsonToPlain', file1Json, file2Json, diffPlain, 'plain'],
  ['diffYmlToPlain', file1Yml, file2Yml, diffPlain, 'plain'],
  ['diffJsonToJson', file1Json, file2Json, diffJson, 'json'],
  ['diffYmlToJson', file1Yml, file2Yml, diffJson, 'json'],
])('%s', (name, a, b, expected, format) => {
  expect(genDiff(a, b, format)).toBe(expected);
});
