import test from 'ava';
const tempWrite = require('temp-write');
import fileBytes from './';

test('invalid args sync', t => {
  t.throws(() => {
    fileBytes.sync('invalidFileName.txt');
  }, /ENOENT/);
});

test('empty file sync', t => {
  const file = tempWrite.sync('');
  t.is(fileBytes.sync(file), 0);
  t.is(typeof fileBytes.sync(file), 'number');
});

test('small file sync', t => {
  const file = tempWrite.sync('1234');
  t.is(fileBytes.sync(file), 4);
});

test('invalid args promise', t => {
  t.throws(fileBytes('invalidFileName'), /ENOENT/);
});

test('empty file promise', async t => {
  const file = tempWrite.sync('');
  t.is(await fileBytes(file), 0);
});

test('small file promise', async t => {
  const file = tempWrite.sync('1234');
  t.is(await fileBytes(file), 4);
});
