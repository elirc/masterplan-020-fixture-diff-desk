# Building Fixture Diff Desk, one decision at a time

[Learning route](00-START-HERE.md) · [Code tour](03-CODE-TOUR.md)

This is a reconstruction of how to approach the finished reference. It explains visible design choices; it is not a transcript of hidden reasoning or a claim that a fictional team performed these steps.

## Start from the contract

The desk parses two JSON objects separately and accepts only flat scalar values: strings, finite numbers, booleans and null. It rejects arrays, nested structures and non-finite parsed numbers. Comparison returns sorted added, removed and changed keys, using own-property presence so missing differs from null. Equality uses Object.is, including its signed-zero distinction. Parsing errors name the Before or After side.

The smallest useful result answers this user need: A developer wants to compare two small JSON fixtures and explain changed fields. Write the examples before choosing file names. Keep the scope small enough that the decisive behavior fits in one trace.

## Step 1: Separate syntax and shape

Invalid JSON cannot reach the object validator. Valid JSON such as an array or null still fails the flat-object contract. A nested object has valid syntax but unsupported structure. These distinctions let the error explain what to fix instead of collapsing every failure into an unhelpful parse error.

**Pause and produce evidence:** {} → {x:null}. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 2: Walk the key union

Write a table with columns key, present-before, present-after and equality. Classify added and removed before comparing values. For unchanged keys produce no row. This hand table is an independent expected result for a small regression fixture.

**Pause and produce evidence:** {x:1} → {x:'1'}. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 3: Probe awkward names

JSON.parse creates data properties for keys such as __proto__. The core uses own keys and Object.hasOwn to compare them. No merging into a general configuration object occurs. Test one prototype-looking key to expose an inherited-property assumption without expanding into a full recursive serializer.

**Pause and produce evidence:** Nested object on After side. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Step 4: Invalidate old output

The textareas can change after a comparison. Their input handlers replace the result with a compare-again message. This is a simple way to prevent a correct result for an earlier input from appearing current. A future live-diff mode would require a separate rendering policy.

**Pause and produce evidence:** Nested object on After side. Predict the outcome, then compare it with the reference. In your notes, distinguish what the code says should happen from what you actually observed.

## Keep the implementation reviewable

A useful commit has one understandable reason to exist. Separate the initial working slice, the checks that expose its important boundaries, and the teaching material that explains it. The published commits in this repository were assembled from verified working files; they are real commits, not fabricated evidence of a long historical development process. 

For your own variation, commit at a point where the behavior and evidence agree. Describe the trigger, the resulting behavior and the check in the commit message or review note. Avoid mixing a rule change with unrelated formatting because it makes the learning decision harder to see.

## Stop before adding a platform

The next useful improvement is a sharper example or clearer explanation, not a database, account system or framework migration. Add an abstraction only when it names a real repeated responsibility. You should be able to describe what becomes easier to change after the abstraction and what new complexity it introduces.

**Independent design choice from the original brief:** Choose the supported value types and reject unsupported shapes clearly.

The reference made one choice, documented in the code tour. You may choose differently in a branch if you first revise the contract and acceptance examples. A deliberate alternative is a stronger learning artifact than an unexplained copy.
