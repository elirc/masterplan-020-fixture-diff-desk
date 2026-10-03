export function parseFlat(text, label) {
  let value;
  try { value = JSON.parse(text); }
  catch { throw new TypeError(`${label}: invalid JSON syntax.`); }
  if (value === null || Array.isArray(value) || typeof value !== 'object') throw new TypeError(`${label}: provide a flat object.`);
  for (const entry of Object.values(value)) {
    if (entry !== null && !['string', 'number', 'boolean'].includes(typeof entry)) throw new TypeError(`${label}: nested objects and arrays are unsupported.`);
    if (typeof entry === 'number' && !Number.isFinite(entry)) throw new TypeError(`${label}: numbers must be finite.`);
  }
  return value;
}
export function diffFlat(before, after) {
  const changes = [];
  for (const key of [...new Set([...Object.keys(before), ...Object.keys(after)])].sort()) {
    if (!Object.hasOwn(before, key)) changes.push({ key, kind: 'added', after: after[key] });
    else if (!Object.hasOwn(after, key)) changes.push({ key, kind: 'removed', before: before[key] });
    else if (!Object.is(before[key], after[key])) changes.push({ key, kind: 'changed', before: before[key], after: after[key] });
  }
  return changes;
}
