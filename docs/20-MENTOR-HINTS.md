# M020: mentor hints and answer directions

[Expanded workshop map](WORKBOOK-INDEX.md) · [Repository overview](../README.md)

Use this chapter after making an attempt. It provides reasoning directions and evaluation criteria, not finished feature patches. A learner can choose a different design when the revised contract is explicit and the evidence supports it.

## Retrieval card 01: answer direction

**Question:** Explain presence through this project

Whether an object owns a key at all.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 02: answer direction

**Question:** Explain scalar through this project

One supported non-nested value.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 03: answer direction

**Question:** Explain equality policy through this project

The exact relation used to decide unchanged values.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 04: answer direction

**Question:** Explain deterministic output through this project

Equivalent comparisons displayed in a stable order.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 05: answer direction

**Question:** Predict: {} → {x:null}

x added, not unchanged

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 06: answer direction

**Question:** Predict: {x:1} → {x:'1'}

x changed because value type differs

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 07: answer direction

**Question:** Predict: Nested object on After side

Explicit After shape error before comparison

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 08: answer direction

**Question:** What would an array-diff contract need to say before implementation?

A recursive diff needs decisions about arrays, paths, ordering and cycles that are unnecessary for this learning step. parseFlat rejects nested objects rather than returning an incomplete result that looks authoritative. Direct diffFlat callers are expected to supply already validated flat objects; the browser always uses the parser first.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 09: answer direction

**Question:** Why is key in object a different question from Object.hasOwn?

Reading before[key] alone cannot distinguish an absent key from some present values in general. Object.hasOwn explicitly asks whether the record owns the key. This also treats names such as constructor and __proto__ as data rather than accidentally finding inherited properties.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 10: answer direction

**Question:** Would a sorted result still be appropriate if original source order carried meaning?

Sorting the union of keys makes two logically equivalent inputs produce the same review order even when their JSON properties were typed differently. The comparison does not mutate either object. Deterministic order supports readable tests and human review without claiming JSON property order has business meaning.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 11: answer direction

**Question:** What does your strongest check not prove?

Use the scope recorded in VERIFICATION.md; do not infer production readiness from a small local fixture.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Retrieval card 12: answer direction

**Question:** What is the difference between two values being unequal and one value being absent?

A comparison needs both a shape contract and an equality contract. Flat JSON excludes a large family of recursive decisions, which is useful for a first implementation. Own-key presence distinguishes an added null from an unchanged null. Sorting the union of keys creates a stable review order without changing either input.

Look for a concrete connection to `public/core.js` or `public/app.js`. A strong answer names an input or condition, the responsible operation and the resulting behavior. Merely repeating the vocabulary word is insufficient. If your example differs from the reference, check whether it is supported by the contract before treating a different outcome as a defect.

## Story 07: Add change-kind counts

**First hint:** The desired improvement is “Summarize added, removed and changed rows.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive counts from diff output; keep no-change explicit; render counts beside the detailed list.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Summary counts equal the actual classified rows.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose compact labels. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 08: Add a key-name search

**First hint:** The desired improvement is “Filter the displayed diff without recomputing meaning.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Preserve the complete change list; derive visible rows by key; label filtered and total counts separately.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Hidden changes still contribute to the total comparison count.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose case sensitivity. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 09: Add a scalar-type label

**First hint:** The desired improvement is “Explain why visually similar values differ.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Derive a type label that treats null explicitly; show before and after types; keep raw values readable.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Number 1 and string 1 have different labels.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a null type label. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 10: Add a copyable comparison report

**First hint:** The desired improvement is “Help a reviewer carry the evidence.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Format the source labels and structured changes as text; keep absent markers explicit; avoid HTML interpolation.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: A removed null is distinguishable from an absent before value.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose report ordering and indentation. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 11: Add duplicate-JSON-key awareness

**First hint:** The desired improvement is “Explain a parsing limitation honestly.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Inspect a duplicate-key JSON example; observe the parsed result; document that ordinary JSON.parse does not preserve duplicate entries.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The guide never claims the current parser reports every original duplicate key.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Decide whether a stricter parser belongs in a future project. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 12: Add a same-input shortcut explanation

**First hint:** The desired improvement is “Teach identity versus equality without changing correctness.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Compare two separately parsed equal objects; show an empty diff; discuss why object-reference equality alone is insufficient.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Equal contents produce no changes even when object references differ.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a small equal fixture pair. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 13: Add a side-specific reset

**First hint:** The desired improvement is “Restore only Before or After and invalidate the report.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Keep separate baseline strings; wire one control per side; clear stale comparison feedback.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: Resetting one side leaves the other source untouched.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose default fixtures. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 14: Add unsafe-number documentation

**First hint:** The desired improvement is “Expose a deliberate JSON-number limitation.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Compare large integer literals around safe precision; observe parsing; decide whether to restrict the shape further on a branch.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The reference's finite-number acceptance is distinguished from exact integer preservation.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose a stricter numeric policy if needed. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Story 15: Add a changed-value emphasis

**First hint:** The desired improvement is “Improve scanning without color-only meaning.” Start by identifying which existing boundary already knows the necessary information. Do not copy that information into new state until you can explain why derivation is insufficient.

**Second hint:** Follow this source-specific route: Render explicit before and after labels; use safe text; inspect long string wrapping.. Keep each stage independently inspectable. If a step requires a policy choice, write the choice before implementing it.

**Third hint:** Your strongest completion evidence should establish: The full value remains available at 320px and change kind is textual.. Invent a plausible wrong implementation and make your example disagree with it.

**Decision still left to you:** Choose table or stacked-row layout. The guide intentionally does not settle this. Evaluate your answer by clarity of the contract, consistency of the implementation and quality of verification, not by guessing the author's preferred wording.

## Mentor feedback rubric

| Dimension | Beginning | Developing | Independent evidence |
|---|---|---|---|
| Trace | Names files only | Follows one ordinary case | Predicts a new boundary and explains its owner |
| Test design | Copies output | Uses a stated expectation | Rejects a plausible wrong candidate |
| Design | Repeats a slogan | Names an alternative | Compares costs using a concrete change |
| Agent use | Accepts a generated answer | Checks suggested edits | Supplies own proposal and adjudicates critiques |
| Handoff | Claims it works | Lists actual checks | Explains behavior, evidence and limits coherently |

Use the rubric to choose the next practice action, not to label yourself permanently. A learner may be independent at source tracing and still need help designing a failure case. Target the missing skill with one smaller exercise.
