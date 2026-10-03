import { parseFlat, diffFlat } from './core.js';
document.querySelector('#compare').onclick = () => {
  const result = document.querySelector('#result');
  try {
    const before = parseFlat(document.querySelector('#before').value, 'Before');
    const after = parseFlat(document.querySelector('#after').value, 'After');
    const changes = diffFlat(before, after);
    result.textContent = changes.length ? JSON.stringify(changes, null, 2) : 'No changes.';
  } catch (error) { result.textContent = error.message; }
};
for (const field of document.querySelectorAll('textarea')) field.oninput = () => { document.querySelector('#result').textContent = 'Inputs changed. Compare again.'; };
