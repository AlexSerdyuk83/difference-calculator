import path from 'path';
import process from 'process';
import fs from 'fs';

export const getPath = (filename) => path.resolve(process.cwd(), filename);

export const getFullPath = (filePath) => getPath(filePath);

export const getFileContent = (fullPath) => fs.readFileSync(fullPath, 'utf8');

export const getFileExt = (filePath) => path.extname(filePath);
