import _ from 'lodash';

const valueToString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return `${value}`;
};

const renderPlain = (difference) => {
  const iter = (data, name = []) => {
    const dataFiltered = data.filter(({ type }) => type !== 'identical');
    const result = dataFiltered.map((elem) => {
      const names = [...name, elem.name];
      const { type, value } = elem;
      switch (type) {
        case 'added':
          return `Property '${names.join('.')}' was added with value: ${valueToString(value)}`;
        case 'deleted':
          return `Property '${names.join('.')}' was removed`;
        case 'changed': {
          const { valueBefore, valueAfter } = elem;
          return `Property '${names.join('.')}' was updated. From ${valueToString(valueBefore)} to ${valueToString(valueAfter)}`;
        }
        case 'nested':
          return iter(elem.children, names);
        default:
          throw new Error(`Unknown node type: ${type}`);
      }
    });
    return result.join('\n');
  };
  return iter(difference);
};

export default renderPlain;
