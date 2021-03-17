import { parse, getFormat } from './parsers.js';
import formatting from './formatters/index.js';
import generateResultDiff from './diff.js';
import { getFullPath, getFileContent, getFileExt } from './utilites.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const contentFile1 = getFileContent(getFullPath(filepath1));
  const contentFile2 = getFileContent(getFullPath(filepath2));

  const format1 = getFormat(getFileExt(filepath1));
  const format2 = getFormat(getFileExt(filepath2));

  const data1 = parse(format1, contentFile1);
  const data2 = parse(format2, contentFile2);

  const difference = generateResultDiff(data1, data2);
  return formatting(format, difference);
};

export default genDiff;
