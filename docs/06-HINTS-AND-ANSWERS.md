# Hints and answer directions

[Return to the stories](05-PRACTICE-STORIES.md)

There are intentionally no complete feature patches here. Use one hint, return to your code and produce evidence. Your design can differ from the reference when you state and verify the new contract.

## Story 01: Show unchanged-key count

**Hint 1 — ownership:** Begin from `diffFlat`. Derive an unchanged count without including unchanged rows in the main changes list.

**Hint 2 — reasoning:** Revisit the decision “Keep the supported shape small”. Ask yourself: What would an array-diff contract need to say before implementation?

**Answer direction:** A defensible solution demonstrates this observable result: Counts reconcile to the union of keys for added, removed, changed and unchanged cases. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 02: Add a swap action

**Hint 1 — ownership:** Begin from `diffFlat`. Swap the two source strings and immediately invalidate or recompute the comparison.

**Hint 2 — reasoning:** Revisit the decision “Test presence separately from value”. Ask yourself: Why is key in object a different question from Object.hasOwn?

**Answer direction:** A defensible solution demonstrates this observable result: Added becomes removed, before/after values reverse, and unchanged keys remain absent. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 03: Offer a sample reset

**Hint 1 — ownership:** Begin from `diffFlat`. Restore the original fictional fixture pair through one action and clear stale feedback.

**Hint 2 — reasoning:** Revisit the decision “Make output order deterministic”. Ask yourself: Would a sorted result still be appropriate if original source order carried meaning?

**Answer direction:** A defensible solution demonstrates this observable result: Reset after a syntax error returns both inputs and a predictable uncomputed state. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 04: Choose signed-zero policy

**Hint 1 — ownership:** Begin from `diffFlat`. Keep Object.is or normalize signed zero, documenting the decision with -0 and 0 fixtures.

**Hint 2 — reasoning:** Revisit the decision “Keep the supported shape small”. Ask yourself: What would an array-diff contract need to say before implementation?

**Answer direction:** A defensible solution demonstrates this observable result: The test distinguishes your chosen equality semantics and the guide explains JSON display limitations. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 05: Render a changes table

**Hint 1 — ownership:** Begin from `diffFlat`. Map structured change rows to safe text cells with explicit absent labels.

**Hint 2 — reasoning:** Revisit the decision “Test presence separately from value”. Ask yourself: Why is key in object a different question from Object.hasOwn?

**Answer direction:** A defensible solution demonstrates this observable result: Missing is visually distinct from null and markup-looking string values remain text. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Story 06: Add a nested-data teaching error

**Hint 1 — ownership:** Begin from `diffFlat`. Improve the unsupported-shape error to name the first offending key without attempting recursion.

**Hint 2 — reasoning:** Revisit the decision “Make output order deterministic”. Ask yourself: Would a sorted result still be appropriate if original source order carried meaning?

**Answer direction:** A defensible solution demonstrates this observable result: The correct side and key are shown, and the app still refuses a partial nested diff. The exact code is not prescribed. If your change achieves that result by changing an unrelated original rule, revise either the implementation or the story contract explicitly.

**Self-review:** Could the UI or helper appear correct while the underlying rule remains wrong? Could the underlying calculation be correct while stale presentation misleads the user? Choose the question that applies and write one distinguishing example.

## Answers to the trace questions

Compare → parse Before and validate its flat shape → parse After and validate it → union their own keys and sort → classify absent/present/value differences → render changes or No changes. Editing either input invalidates the displayed comparison.

The expected examples are in the concepts table. Use them to check your reasoning, then supply a new example of your own. A copied sentence is not evidence that you can trace a changed input.

## When to ask for more help

Ask after you can show a concrete attempt, a specific uncertainty and an observation. Request a smaller hint before a full patch. If you do accept generated code, explain each changed line and run a counterexample you chose independently.
