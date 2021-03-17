import _ from 'lodash';

const repeatIndent = (level) => ' '.repeat(level);

const baseNumberIndent = 2;
const objNumberIndent = 4;
const keyNumberIndent = 8;

const toString = (data, lvlIndent) => {
  if (!_.isObject(data)) {
    return data;
  }
  const indentForObj = repeatIndent(lvlIndent + objNumberIndent);
  const indentForKey = repeatIndent(lvlIndent + keyNumberIndent);
  const result = Object.entries(data).map(([key, value]) => `${indentForKey}${key}: ${toString(value, lvlIndent + objNumberIndent)}`);
  return `{\n${result.join('\n')}\n${indentForObj}}`;
};
const toStringNested = (elem, lvlIndent, f) => {
  const { name, children } = elem;
  const indent = repeatIndent(lvlIndent + objNumberIndent);
  return `${indent}${name}: {\n${f(children, lvlIndent + objNumberIndent)}\n${indent}}`;
};
const toStringChanged = (elem, lvlIndent) => {
  const { name, valueBefore, valueAfter } = elem;
  const indent = repeatIndent(lvlIndent + baseNumberIndent);
  return `${indent}- ${name}: ${toString(valueBefore, lvlIndent)}\n${indent}+ ${name}: ${toString(valueAfter, lvlIndent)}`;
};

const renderStylish = (diff) => {
  const iter = (data, lvl = 0) => {
    const result = data.map((elem) => {
      const { name, type, value } = elem;
      const indent = repeatIndent(lvl);
      switch (type) {
        case 'added':
          return `  ${indent}+ ${name}: ${toString(value, lvl)}`;
        case 'deleted':
          return `  ${indent}- ${name}: ${toString(value, lvl)}`;
        case 'identical':
          return `  ${indent}  ${name}: ${toString(value, lvl)}`;
        case 'changed':
          return toStringChanged(elem, lvl);
        case 'nested':
          return toStringNested(elem, lvl, iter);
        default:
          throw new Error(`Unknown type: ${type}`);
      }
    });
    return result.join('\n');
  };
  return `{\n${iter(diff)}\n}`;
};

export default renderStylish;
