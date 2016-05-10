const fs = require('fs');
const sh = require('shelljs');
import test from 'ava';
import fileBytes from './';

test('invalid args sync', t => {
  t.throws(() => {
    fileBytes.sync('invalidFileName.txt');
  }, Error);
});

test('empty file sync', t => {
  sh.touch('empty.txt');
  t.is(fileBytes.sync('empty.txt'), 0);
  t.is(typeof fileBytes.sync('empty.txt'), 'number');
  sh.rm('empty.txt');
});

test('small file sync', t => {
  fs.writeFileSync('small.txt', '0123456789');
  t.is(fileBytes.sync('small.txt'), 10);
  sh.rm('small.txt');
});

test('invalid args promise', async t => {
  try {
    await fileBytes('invalidFileName.txt');
    t.fail('Exception was not thrown');
  } catch (err) {
    t.truthy(err);
  }
});

test('empty file promise', async t => {
  sh.touch('empty.txt');
  t.is(await fileBytes('empty.txt'), 0);
  sh.rm('empty.txt');
});

test('small file promise', async t => {
  fs.writeFileSync('small.txt', '0123456789');
  t.is(await fileBytes('small.txt'), 10);
  sh.rm('small.txt');
});
