import genDiff from '../src/diff.js';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { it, expect } from '@jest/globals';

const readTxt = (fileName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const path = resolve(__dirname, fileName);
    return readFileSync(path, 'utf8');
  };

it('finding the difference between files', () => {
    const expected = genDiff('file1.json', 'file2.json');
    const actual = readTxt('__fixtures__/result_diff.txt');
    expect(actual).toEqual(expected);
  });
