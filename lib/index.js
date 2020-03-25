#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

/**
 * Copies all files to user-specified location
 *
 * @param {location} Location in user's file system to copy all files
 */
const copyFiles = (location) => {
  // third argument is user-supplied from terminal
  const folderName = process.argv[2];
  const loc = path.join(location, folderName);

  // if direct folder path is detected
  if (!fs.existsSync(loc, { recursive: true })) {
    // return console.log('folder does not exist');
    fs.mkdirSync(loc, { recursive: true });

    const filesToCopyFolder = path.join(__dirname, '../react-project');

    fs.copy(filesToCopyFolder, loc, (err) => {
      if (err) {
        return console.log('An error occured when creating a React app.');
      }
      return console.log('Have fun!');
    });
  } else return console.log('folder exists');
};

exports.copyFiles = copyFiles;
