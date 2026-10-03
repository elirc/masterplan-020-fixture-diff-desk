# Debugging laboratory

[Concepts](02-CONCEPTS-AND-TRACES.md) · [Practice stories](05-PRACTICE-STORIES.md)

These are deliberately proposed defects for a scratch branch. They are not claims that the shipped reference still contains these bugs. Keep main working and introduce only one change at a time.

## Case 1: Missing and null are classified as equal

**Introduce or discuss this mistake:** Coalesce missing values to null before comparing.

**Discriminating experiment:** Compare {} against {"x":null}.

### Worked diagnosis

First state the expected contract: The desk parses two JSON objects separately and accepts only flat scalar values: strings, finite numbers, booleans and null. It rejects arrays, nested structures and non-finite parsed numbers. Comparison returns sorted added, removed and changed keys, using own-property presence so missing differs from null. Equality uses Object.is, including its signed-zero distinction. Parsing errors name the Before or After side. Then create the smallest example from the experiment above. Compare the observed result with the contract before changing more code. The likely cause is at this boundary: **public/core.js: presence checks precede value comparison.** Repair that boundary, rerun the example, and check one neighboring valid case so the repair does not merely special-case the chosen input.

The completed reasoning record is: symptom → contract violated → input that distinguishes hypotheses → owning line or rule → minimal repair → regression evidence. This is a worked diagnostic route; fill in your actual outputs when you run it. No invented console transcript is supplied.

## Case 2: Nested data silently disappears

**Introduce or discuss this mistake:** Remove shape rejection without adding a recursive contract.

**Discriminating experiment:** Compare two objects with different nested fields.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** public/core.js: parseFlat must enforce the advertised limit.

## Case 3: A corrected input still shows an old change list

**Introduce or discuss this mistake:** Remove the input invalidation handlers.

**Discriminating experiment:** Compare, edit one textarea and observe the old result.

### Your investigation

1. Write two possible explanations before looking at the hints.
2. Predict what the experiment would show if each explanation were true.
3. Run or inspect the smallest discriminating case and record the result.
4. Identify the owning file and make one bounded repair.
5. Verify the original case and a neighboring case; explain why both matter.

**Location hint, only after your attempt:** public/app.js: derived output must correspond to the current input pair.

## If the first repair does not work

Do not pile on another unrelated edit. Read the diff and check whether the observed failure changed. If the hypothesis was wrong, write that down and restore only your own experimental change before testing the next hypothesis. A rejected hypothesis is useful progress when its evidence is clear.

When asking an assistant for help, provide the exact input, expected and observed result, the current diff and the file you believe owns the rule. Ask for one counterexample or diagnostic question first. Keep proposed causes separate from demonstrated causes.
