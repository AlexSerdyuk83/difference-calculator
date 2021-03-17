import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, 'src', '..', '__fixtures__', filename);

const pathToFileJson1 = getFixturePath('file1.json');
const pathToFileJson2 = getFixturePath('file2.json');
const pathToFileYml1 = getFixturePath('file_yml1.yml');
const pathToFileYml2 = getFixturePath('file_yml2.yml');

const pathToFileTxt = getFixturePath('result_diff.txt');

it('finding the difference between files', () => {
  const expected1 = genDiff(pathToFileJson1, pathToFileJson2);
  const expected2 = genDiff(pathToFileYml1, pathToFileYml2);
  const expected3 = genDiff(pathToFileYml1, pathToFileJson2);
  const actual = readFileSync(pathToFileTxt, 'utf-8');

  expect(actual).toEqual(expected1);
  expect(actual).toEqual(expected2);
  expect(actual).toEqual(expected3);
});
