# file-bytes
[![npm version](https://img.shields.io/npm/v/file-bytes.svg)](https://www.npmjs.com/package/file-bytes)
[![Build Status](https://travis-ci.org/dawsonbotsford/file-bytes.svg?branch=master)](https://travis-ci.org/dawsonbotsford/file-bytes)
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
//=> 'README.md is 1806 bytes'


// sync
console.log(`README.md is ${fileBytes.sync('README.md')} bytes`);
//=> 'README.md is 1806 bytes'
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

## License

MIT © [Dawson Botsford](http://dawsonbotsford.com)
