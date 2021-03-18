import yaml from 'js-yaml';

/* the function defines the file format */
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

/* the function converts a file to a JavaScript object */
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
