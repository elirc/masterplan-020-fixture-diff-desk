# Six junior practice stories

[Debugging lab](04-DEBUGGING-LAB.md) · [Hints — use after an attempt](06-HINTS-AND-ANSWERS.md)

These are new exercises beyond the finished reference. No story is marked complete for you. Start a branch such as practice/story-01 and write acceptance examples before editing. Each plan leaves the actual code, wording and one design choice to you.

## Story 01: Show unchanged-key count

**User need:** As a learner or user of Fixture Diff Desk, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Derive an unchanged count without including unchanged rows in the main changes list.

**Implementation plan:**

1. Trace `diffFlat` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Counts reconcile to the union of keys for added, removed, changed and unchanged cases.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Counts reconcile to the union of keys for added, removed, changed and unchanged cases.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 02: Add a swap action

**User need:** As a learner or user of Fixture Diff Desk, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Swap the two source strings and immediately invalidate or recompute the comparison.

**Implementation plan:**

1. Trace `diffFlat` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Added becomes removed, before/after values reverse, and unchanged keys remain absent.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Added becomes removed, before/after values reverse, and unchanged keys remain absent.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 03: Offer a sample reset

**User need:** As a learner or user of Fixture Diff Desk, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Restore the original fictional fixture pair through one action and clear stale feedback.

**Implementation plan:**

1. Trace `diffFlat` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Reset after a syntax error returns both inputs and a predictable uncomputed state.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Reset after a syntax error returns both inputs and a predictable uncomputed state.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 04: Choose signed-zero policy

**User need:** As a learner or user of Fixture Diff Desk, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Keep Object.is or normalize signed zero, documenting the decision with -0 and 0 fixtures.

**Implementation plan:**

1. Trace `diffFlat` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The test distinguishes your chosen equality semantics and the guide explains JSON display limitations.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The test distinguishes your chosen equality semantics and the guide explains JSON display limitations.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 05: Render a changes table

**User need:** As a learner or user of Fixture Diff Desk, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Map structured change rows to safe text cells with explicit absent labels.

**Implementation plan:**

1. Trace `diffFlat` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: Missing is visually distinct from null and markup-looking string values remain text.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** Missing is visually distinct from null and markup-looking string values remain text.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.

## Story 06: Add a nested-data teaching error

**User need:** As a learner or user of Fixture Diff Desk, I want this small improvement so the behavior is easier to use, explain or verify.

**Feature boundary:** Improve the unsupported-shape error to name the first offending key without attempting recursion.

**Implementation plan:**

1. Trace `diffFlat` and locate the smallest owning file from the code tour. Write how this story touches that responsibility.
2. Write a before/after example that demonstrates this acceptance requirement: The correct side and key are shown, and the app still refuses a partial nested diff.
3. Choose the input shape, wording or layout policy yourself. Record one alternative and the reason you did not choose it.
4. Implement only the bounded change. If it crosses files, explain what each file owns rather than copying the same decision into several places.
5. Reproduce the acceptance example and one existing boundary case. Add an automated regression for executable logic, or an explicit browser/keyboard/content observation for a static change.
6. Review the diff, explain the change without reading the solution, and record remaining limits.

**Acceptance evidence:** The correct side and key are shown, and the app still refuses a partial nested diff.

**Left for you:** exact fixture values, names, wording, the implementation and the tradeoff decision. Do not open the hints until you have an example and a first attempt.

**Stretch only after completion:** add one adversarial example that a plausible but incorrect solution would fail. Explain why that example is more informative than adding three ordinary examples.
