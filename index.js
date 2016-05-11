'use strict';
const fs = require('fs');
const pify = require('pify');

module.exports = filename => {
  return pify(fs.stat)(filename)
    .then(stats => stats.size)
    .catch(err => {
      throw err;
    });
};

module.exports.sync = filename => {
  try {
    const stats = fs.statSync(filename);
    return stats.size;
  } catch (err) {
    throw err;
  }
};
