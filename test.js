const fs = require('fs');
const sh = require('shelljs');
import test from 'ava';
import fileBytes from './';

function getRand() {
  const min = 0;
  const max = 99999999999999999999;
  return Math.floor(Math.random() * (max - min) + min);
}

test('invalid args sync', t => {
  t.throws(() => {
    fileBytes.sync('invalidFileName.txt');
  }, /ENOENT/);
});

test('empty file sync', t => {
  const file = `empty${getRand()}.txt`;
  sh.touch(file);
  t.is(fileBytes.sync(file), 0);
  t.is(typeof fileBytes.sync(file), 'number');
  sh.rm(file);
});

test('small file sync', t => {
  const file = `small${getRand()}.txt`;
  fs.writeFileSync(file, 'four');
  t.is(fileBytes.sync(file), 4);
  sh.rm(file);
});

test('invalid args promise', t => {
  t.throws(fileBytes('invalidFileName'), /ENOENT/);
});

test('empty file promise', async t => {
  const file = `empty${getRand()}.txt`;
  sh.touch(file);
  t.is(await fileBytes(file), 0);
  sh.rm(file);
});

test('small file promise', async t => {
  const file = `small${getRand()}.txt`;
  fs.writeFileSync(file, 'four');
  t.is(await fileBytes(file), 4);
  sh.rm(file);
});
