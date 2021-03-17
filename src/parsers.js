import yaml from 'js-yaml';

const getFormat = (ext) => {
  switch (ext) {
    case '.json':
      return 'json';
    case '.yml':
      return 'yml';
    case '.yaml':
      return 'yaml';
    default:
      throw new Error(`${ext} currently not supported`);
  }
};

const parse = (format, content) => {
  switch (format) {
    case 'json':
      return JSON.parse(content);
    case 'yml':
      return yaml.load(content);
    case 'yaml':
      return yaml.load(content);
    default:
      throw new Error(`Unknown format ${format}`);
  }
};

export { parse, getFormat };
