import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatting = (format, difference) => {
  switch (format) {
    case 'json':
      return json(difference);
    case 'plain':
      return plain(difference);
    case 'stylish':
      return stylish(difference);
    default:
      throw new Error(`Unknown format ${format}. Use json, plain or stylish (default)`);
  }
};

export default formatting;
