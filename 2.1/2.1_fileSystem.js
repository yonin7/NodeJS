// import { copyFileSync, constants } from 'fs';

const fs = require('fs');
console.log(__dirname);
const folderPath = __dirname;
fs.writeFileSync('file.txt', 'Hello world');
fs.copyFileSync('file.txt', 'fileCopy.txt');
fs.renameSync('file.txt', 'renamedFile.txt');
fs.readdirSync(folderPath, readdirCallback);

function readdirCallback(err, files) {
  if (err) {
    console.log('Error in reading contents');
  } else {
    console.log(files);
  }
}

const dirName = 'newFolder';

fs.mkdirSync(dirName, 0o777);
