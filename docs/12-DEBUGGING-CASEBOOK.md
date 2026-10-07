# M020: deeper debugging casebook

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

The incidents below are hypothetical teaching scenarios based on realistic mistakes in this codebase. They are not claims that the shipped reference is broken. Reproduce a proposed defect only on a disposable practice branch. Keep an observed failure separate from a likely explanation; the point of an experiment is to make those two agree or disagree.

## Incident 1: Missing and null are classified as equal

**Fictional report:** A learner says, “Missing and null are classified as equal.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Coalesce missing values to null before comparing.

**Starting experiment:** Compare {} against {"x":null}.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: The desk parses two JSON objects separately and accepts only flat scalar values: strings, finite numbers, booleans and null. It rejects arrays, nested structures and non-finite parsed numbers. Comparison returns sorted added, removed and changed keys, using own-property presence so missing differs from null. Equality uses Object.is, including its signed-zero distinction. Parsing errors name the Before or After side. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `diffFlat` is wrong. Hypothesis B: the rule is correct but `public/app.js` supplies or presents the wrong value or state. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/core.js: presence checks precede value comparison.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “Missing and null are classified as equal” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## Incident 2: Nested data silently disappears

**Fictional report:** A learner says, “Nested data silently disappears.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Remove shape rejection without adding a recursive contract.

**Starting experiment:** Compare two objects with different nested fields.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: The desk parses two JSON objects separately and accepts only flat scalar values: strings, finite numbers, booleans and null. It rejects arrays, nested structures and non-finite parsed numbers. Comparison returns sorted added, removed and changed keys, using own-property presence so missing differs from null. Equality uses Object.is, including its signed-zero distinction. Parsing errors name the Before or After side. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `diffFlat` is wrong. Hypothesis B: the rule is correct but `public/app.js` supplies or presents the wrong value or state. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/core.js: parseFlat must enforce the advertised limit.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “Nested data silently disappears” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## Incident 3: A corrected input still shows an old change list

**Fictional report:** A learner says, “A corrected input still shows an old change list.” They supply no diagnosis. Your job is to reduce the report to a reproducible difference from the contract.

**Candidate defect for the lab:** Remove the input invalidation handlers.

**Starting experiment:** Compare, edit one textarea and observe the old result.

### Triage before touching the code

Record the exact input or content, the action, the expected result and the actual result. Check whether you are running the file or branch you think you are running. A browser may be showing an older served directory; a terminal may be in a different repository. Confirm the environment using ordinary read-only inspection before changing a product rule.

The relevant promise is: The desk parses two JSON objects separately and accepts only flat scalar values: strings, finite numbers, booleans and null. It rejects arrays, nested structures and non-finite parsed numbers. Comparison returns sorted added, removed and changed keys, using own-property presence so missing differs from null. Equality uses Object.is, including its signed-zero distinction. Parsing errors name the Before or After side. Extract only the sentence this incident violates. Do not rewrite the whole contract to fit an accidental result. If the reported behavior is outside scope, document that first; an unsupported case is not automatically a regression.

### Keep two hypotheses alive

Hypothesis A: the owning rule near `diffFlat` is wrong. Hypothesis B: the rule is correct but `public/app.js` supplies or presents the wrong value or state. Name the observation each hypothesis predicts.

Use the smallest controlled experiment that makes the predictions differ. Reading more files is not always a better experiment. A single exact boundary value, a changed call order or a computed style can be more decisive than a large random fixture. Record the outcome before making the repair.

### Locate the causal boundary

public/app.js: derived output must correspond to the current input pair.

Explain why this location can produce the symptom. A line near the visible error is not necessarily the cause; the wrong value may have been produced earlier. Conversely, a plausible architectural theory is weak if the actual event handler never reaches the suspected function. Follow one trace end to end rather than searching for a fashionable anti-pattern.

### Repair narrowly and look for neighboring damage

Make the smallest coherent repair that restores the contract. Rerun the discriminating example, then one ordinary neighboring case and one recovery or repeat sequence. If the repair only special-cases the chosen fixture, propose a second input that exposes that weakness. A regression should preserve the reason for the fix, not merely the exact spelling of one fixture.

### Write a short incident note

Use these fields: symptom; violated promise; competing hypotheses; experiment; actual observation; owning rule; repair; regression; remaining uncertainty. Avoid claiming the hypothetical incident happened in the original build history. The supplied narrative is a practice route; your own note should describe only the experiment you actually performed.

**After a break:** explain “A corrected input still shows an old change list” again without opening the location hint. If you can recall only the file name, repeat the input-to-output trace. The useful memory is the causal relationship, not where a previous assistant told you to click.

## When a proposed repair fails

Stop adding edits. Compare the new symptom with the old one and inspect the diff. Decide whether the experiment rejected your hypothesis or whether the repair failed to change the intended boundary. Revert only your own experimental change if needed, preserve other work, and try the next discriminating input.

## A useful help request

```text
Project: Fixture Diff Desk; suspected owner: public/core.js / diffFlat.
Expected / observed: [exact difference].
Smallest reproduction: [inputs, actions and environment].
Hypothesis A predicts: [observation].
Hypothesis B predicts: [different observation].
Experiment already run and real output: [fill in].
Suggest one next experiment, not a rewrite. Separate facts from hypotheses.
```
