# M020: foundations clinic

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

A comparison needs both a shape contract and an equality contract. Flat JSON excludes a large family of recursive decisions, which is useful for a first implementation. Own-key presence distinguishes an added null from an unchanged null. Sorting the union of keys creates a stable review order without changing either input.

## Start from one visible behavior

Read this contract slowly: The desk parses two JSON objects separately and accepts only flat scalar values: strings, finite numbers, booleans and null. It rejects arrays, nested structures and non-finite parsed numbers. Comparison returns sorted added, removed and changed keys, using own-property presence so missing differs from null. Equality uses Object.is, including its signed-zero distinction. Parsing errors name the Before or After side.

Underline the promised result, circle the input boundary and mark the stated limitation. A junior developer often starts by naming a framework or file. Start instead with an observation that a user could confirm or reject. File names become useful after you know which responsibility you are looking for.

## Clinic 1: Presence

Whether an object owns a key at all.

**Small experiment:** Compare an absent x with x:null.

Find the part of `diffFlat` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **presence** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Compare an absent x with x:null.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 2: Scalar

One supported non-nested value.

**Small experiment:** Classify strings, booleans, null, arrays and objects under this contract.

Find the part of `diffFlat` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **scalar** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Classify strings, booleans, null, arrays and objects under this contract.”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 3: Equality policy

The exact relation used to decide unchanged values.

**Small experiment:** Explain the difference between numeric 1 and string "1".

Find the part of `diffFlat` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **equality policy** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Explain the difference between numeric 1 and string "1".”? Leave your answer in the session journal before reading the mentor hints.

## Clinic 4: Deterministic output

Equivalent comparisons displayed in a stable order.

**Small experiment:** Reorder JSON properties and compare result ordering.

Find the part of `diffFlat` or its surrounding adapter that makes this idea observable. Read no more than one small responsibility at a time. Write the value or structure before the operation, the operation itself and the value or structure afterward. If this is a layout observation, use the containing box, matching rule and resulting arrangement instead of inventing a JavaScript variable.

### Predict before inspecting

Write one ordinary example and one example that makes the distinction matter. Give an expected result for each. The second example should separate two plausible implementations; simply changing a name or color may leave both candidates behaving identically. Explain why your chosen variation is informative.

### Build a tiny explanation

Explain **deterministic output** in three sentences: what problem it names, where you can see it in this repository, and what would go wrong if you ignored it. Avoid replacing the explanation with a slogan such as “best practice.” A concrete input, property or event should appear in at least one sentence.

### Repeat with less support

Close this paragraph, revisit the source and reconstruct the explanation without copying. Then deliberately change one assumption and predict which part of the explanation must change. Record the first point where you become uncertain. That point is a better question for a mentor than asking for another complete tour of the entire project.

**Checkpoint question:** How would you teach this distinction using only the experiment “Reorder JSON properties and compare result ordering.”? Leave your answer in the session journal before reading the mentor hints.

## Read a real source window

The following is an excerpt from [public/core.js](../public/core.js), beginning at source line 1. It is a reading window, not a standalone runnable exercise. Open the linked file for surrounding declarations and context.

```js
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
```

For each meaningful line, label its job as input interpretation, validation, state ownership, transformation, output or presentation. Some files contain only a subset of those jobs. Do not force the categories onto code that does not perform them. A closing brace is structure, not a separate business rule.

Choose one expression and restate it as a question the program answers. Then choose one expression that merely carries out a consequence of that answer. This separates a product decision from mechanical plumbing. If you cannot explain an operator, isolate a tiny example rather than rewriting the whole function.

## A three-column scratch sheet

| Before | Rule or operation | After |
|---|---|---|
| Write an actual supported input or layout situation | Name the owning function, property or event | Predict the concrete result |
| Change one assumption | State which rule now matters | Predict what changes and what remains stable |
| Use an invalid, missing or unsupported case | Identify the boundary that rejects or handles it | Predict feedback and retained state |

Do not fill the After column by running the reference first. That turns prediction practice into transcription. After predicting, observe the program and put discrepancies in a fourth note below the table. A wrong prediction is useful when you can name the mistaken assumption.

## What understanding looks like

You can locate `diffFlat`, explain why the adapter has a separate job, and produce a new counterexample without borrowing one from the tests. You can also say what the reference deliberately does not support. If one of those is missing, choose the smallest clinic above that addresses it and repeat that clinic with different data.
