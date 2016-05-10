'use strict';
const fs = require('fs');
const pathExists = require('path-exists');

module.exports = filename => new Promise((resolve, reject) => {
  if (pathExists.sync(filename)) {
    const stats = fs.statSync(filename);
    resolve(stats.size);
  }

  reject(new Error(`File "${filename}" not found`));
});

module.exports.sync = filename => {
  if (pathExists.sync(filename)) {
    const stats = fs.statSync(filename);
    return stats.size;
  }
  throw new Error(`File "${filename}" not found`);
};
