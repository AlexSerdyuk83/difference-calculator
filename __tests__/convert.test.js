import convert from '../src/convert.js';
import { it, expect } from '@jest/globals';

it('convert_json', () => {
  const expected1 = {
    host: "hexlet.io",
    timeout: 50,
    proxy: "123.234.53.22",
    follow: false
  };
  const expected2 = {
    timeout: 20,
    verbose: true,
    host: "hexlet.io"
  };
  const actual1 = convert('file1.json');
  expect(actual1).toEqual(expected1);

  const actual2 = convert('file2.json');
  expect(actual2).toEqual(expected2);;

});
