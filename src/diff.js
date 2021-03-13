// eslint-disable-next-line import/no-unresolved
import convert from './convert.js';

// eslint-disable-next-line import/prefer-default-export
const genDiff = (file1nName, file2Name) => {
  const file1 = convert(file1nName);
  const file2 = convert(file2Name);
  const keys1 = Object.keys(file1).sort();
  const keys2 = Object.keys(file2).sort();
  const keys = Array.from(new Set([...keys1, ...keys2]));
  // eslint-disable-next-line array-callback-return
  const result = keys.reduce((acc, key) => {
    if (keys1.includes(key) && !keys2.includes(key)) {
      acc.push(`- ${key}: ${file1[key]}`);
    } else if (!keys1.includes(key) && keys2.includes(key)) {
      acc.push(`+ ${key}: ${file2[key]}`);
    } else if ((keys1.includes(key) && keys2.includes(key)) && file1[key] === file2[key]) {
      acc.push(`  ${key}: ${file1[key]}`);
    } else {
      acc.push(`- ${key}: ${file1[key]}`);
      acc.push(`+ ${key}: ${file2[key]}`);
    }
    return acc;
  }, []);
  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
