import path from 'path';
import process from 'process';
import fs from 'fs';

/* functions build paths to files */
export const getPath = (filename) => path.resolve(process.cwd(), filename);

export const getFullPath = (filePath) => getPath(filePath);

/* functions reads data from a file and writes it to a constant */
export const getFileContent = (fullPath) => fs.readFileSync(fullPath, 'utf8');

/* the function returns the file format */
export const getFileExt = (filePath) => path.extname(filePath);
