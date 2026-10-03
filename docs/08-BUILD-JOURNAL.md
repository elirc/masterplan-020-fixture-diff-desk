# Build journal: Fixture Diff Desk

[Code tour](03-CODE-TOUR.md) · [Actual verification](VERIFICATION.md)

This is a retrospective teaching narrative about the implementation in this repository. It is not a verbatim conversation, fabricated team debate or hidden chain-of-thought transcript. The design explanations below are reviewable rationales tied to the source. Dates and check results belong to the verification record.

## The starting problem

A developer wants to compare two small JSON fixtures and explain changed fields.

The main temptation was to make the project larger than its learning target. The useful boundary is **structured comparison and explicit limits**. A finished small example lets you inspect the whole path and ask what each part contributes. Extra infrastructure would add more things to configure before the central idea became clear.

## The first contract

The desk parses two JSON objects separately and accepts only flat scalar values: strings, finite numbers, booleans and null. It rejects arrays, nested structures and non-finite parsed numbers. Comparison returns sorted added, removed and changed keys, using own-property presence so missing differs from null. Equality uses Object.is, including its signed-zero distinction. Parsing errors name the Before or After side.

The contract turned broad intent into examples that can disagree with an implementation. That matters because a plausible-looking result can hide a wrong boundary rule. The examples in the concepts guide were chosen to expose those distinctions, not to make the demo look flawless.

## Decision note 1: Keep the supported shape small

A recursive diff needs decisions about arrays, paths, ordering and cycles that are unnecessary for this learning step. parseFlat rejects nested objects rather than returning an incomplete result that looks authoritative. Direct diffFlat callers are expected to supply already validated flat objects; the browser always uses the parser first.

**What a learner should challenge:** What would an array-diff contract need to say before implementation?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 2: Test presence separately from value

Reading before[key] alone cannot distinguish an absent key from some present values in general. Object.hasOwn explicitly asks whether the record owns the key. This also treats names such as constructor and __proto__ as data rather than accidentally finding inherited properties.

**What a learner should challenge:** Why is key in object a different question from Object.hasOwn?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## Decision note 3: Make output order deterministic

Sorting the union of keys makes two logically equivalent inputs produce the same review order even when their JSON properties were typed differently. The comparison does not mutate either object. Deterministic order supports readable tests and human review without claiming JSON property order has business meaning.

**What a learner should challenge:** Would a sorted result still be appropriate if original source order carried meaning?

**Evidence to consult:** inspect the owning source file, the contract examples and the verification scope. If your alternative satisfies the same behavior with a different structure, compare the maintenance cost instead of assuming one syntax is automatically correct.

## What the checks contributed

The pure-function checks exercised the contract independently of the DOM. Browser checks then verified that real controls passed inputs, showed results and recovered from relevant error or empty states. These are complementary forms of evidence.

The record in VERIFICATION.md reports actual local observations. A GitHub Actions workflow is provided, but its remote result must be inspected separately after a push. A screenshot documents one rendered state; it is not a substitute for the interaction and boundary checks.

## What you should do differently on your own build

Start from the same user need but write your own examples first. Choose a small variation from the story list. Predict behavior, implement a slice and compare the result with your prediction. The reference helps you judge a finished result; your journal should record your own uncertainties and discoveries rather than adopting this narrative as if you experienced it.

## The handoff

The next learner can start from README, locate `diffFlat`, reproduce the example table and attempt one bounded story. That is the intended handoff quality: a working result plus enough evidence and explanation to continue safely. The six practice stories remain unfinished for the learner.
