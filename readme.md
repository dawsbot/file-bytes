# file-bytes
[![npm version](https://img.shields.io/npm/v/file-bytes.svg)](https://www.npmjs.com/package/file-bytes)
[![Build Status](https://travis-ci.org/dawsonbotsford/file-bytes.svg?branch=master)](https://travis-ci.org/dawsonbotsford/file-bytes)
[![Build status](https://ci.appveyor.com/api/projects/status/7vxahu1f0s0k9isc?svg=true)](https://ci.appveyor.com/project/dawsonbotsford/file-bytes)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Get the file size of a file

<br>

## Install

```
npm install --save file-bytes
```

<br>

## Usage

```js
const fileBytes = require('file-bytes');

fileBytes('README.md').then(size => {
  console.log(`README.md is ${size} bytes`);
});
//=> "README.md" is 1806 bytes


// sync
console.log(`README.md is ${fileBytes.sync('README.md')} bytes`);
//=> "README.md" is 1806 bytes
```

<br>

## API

### fileBytes(filename)

Returns a promise for the filename's file size as a `number`.

### fileBytes.sync(filename)

Return's the filename's file size as a `number`.

#### filename

Type: `string`

<br>

## Examples

* Convert the output into human style using [pretty-bytes](https://github.com/sindresorhus/pretty-bytes)

```js
const fileBytes = require('file-bytes');
const prettyBytes = require('pretty-bytes');

console.log(prettyBytes(fileBytes.sync('example.txt')));
//=> 1.34 kB
```

<br>

* Get the file sizes of everything in the current repo with [glob](https://github.com/isaacs/node-glob)

```js
const fileBytes = require('file-bytes');
const glob = require('glob');

glob('./*', (err, files) => {
  // files is an array of filenames.
  for (let file of files) {
    const size = fileBytes.sync(file);
    console.log(`"${file}" is ${size} bytes`);
  }
});
//=> "README.md" is 1806 bytes
//=> "package.json" is 122 bytes
//=> "index.js" is 497 bytes
```

<br>

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)
