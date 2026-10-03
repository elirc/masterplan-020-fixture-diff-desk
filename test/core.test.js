import test from 'node:test';
import assert from 'node:assert/strict';

import { parseFlat, diffFlat } from '../public/core.js';
test('added, removed, changed and unchanged keys are distinct', () => {
  assert.deepEqual(diffFlat({ a: 1, b: 2, d: true }, { a: 1, c: null, d: false }), [
    { key: 'b', kind: 'removed', before: 2 }, { key: 'c', kind: 'added', after: null }, { key: 'd', kind: 'changed', before: true, after: false },
  ]);
});
test('missing is not null and type changes are changes', () => {
  assert.equal(diffFlat({}, { x: null })[0].kind, 'added'); assert.equal(diffFlat({ x: 1 }, { x: '1' })[0].kind, 'changed');
});
test('parse errors identify the source and reject unsupported structures', () => {
  assert.throws(() => parseFlat('{', 'Before'), /Before: invalid JSON/);
  for (const value of ['[]', 'null', '{"a":{}}', '{"a":[]}', '{"a":1e999}']) assert.throws(() => parseFlat(value, 'After'), /After:/);
});
test('prototype-looking keys are data and inputs stay unchanged', () => {
  const before = parseFlat('{"__proto__":null}', 'Before'); const after = parseFlat('{"constructor":"x"}', 'After');
  assert.deepEqual(diffFlat(before, after).map(x => x.kind), ['removed', 'added']); assert.equal(before.__proto__, null);
});
