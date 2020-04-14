#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');
const exec = require('await-exec');

/**
 * Copies all files to user-specified location
 *
 * @param {location} Location in user's file system to copy all files
 */
async function copyFiles(location) {
  // third argument is user-supplied from terminal
  const folderName = process.argv[2];
  const loc = path.join(location, folderName);

  // if direct folder path is detected
  if (!fs.existsSync(loc, { recursive: true })) {
    // return console.log('folder does not exist');
    fs.mkdirSync(loc, { recursive: true });

    let filesToCopyFolder;

    if (process.argv[3] === '-d') filesToCopyFolder = path.join(__dirname, '../react-docker');
    else filesToCopyFolder = path.join(__dirname, '../react-local');

    fs.copy(filesToCopyFolder, loc, (err) => {
      if (err) {
        return console.log('An error occured when creating a React app.');
      }
    });

    const installScript = `npm --prefix ${loc} install ${loc}`;
    console.log('Installing npm packages...');
    await exec(installScript);

    return console.log('Have fun!');
  } return console.log('Folder already exists. Stopping...');
}

exports.copyFiles = copyFiles;
