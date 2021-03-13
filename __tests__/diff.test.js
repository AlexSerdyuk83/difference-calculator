import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/diff.js';
import convertJson from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, 'src', '..', '__fixtures__', filename);

const pathToFile1 = getFixturePath('file1.json');
const pathToFile2 = getFixturePath('file2.json');
const pathToFileTxt = getFixturePath('result_diff.txt');

it('convert_json', () => {
  const expected1 = {
    host: 'hexlet.io',
    timeout: 50,
    proxy: '123.234.53.22',
    follow: false,
  };
  const expected2 = {
    timeout: 20,
    verbose: true,
    host: 'hexlet.io',
  };

  const actual1 = convertJson(pathToFile1);
  expect(actual1).toEqual(expected1);

  const actual2 = convertJson(pathToFile2);
  expect(actual2).toEqual(expected2);
});

it('finding the difference between files', () => {
  const expected = genDiff(pathToFile1, pathToFile2);
  const actual = readFileSync(pathToFileTxt, 'utf-8');
  expect(actual).toEqual(expected);
});
