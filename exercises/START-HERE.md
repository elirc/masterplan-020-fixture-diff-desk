# Your independent variation

Read [the six practice stories](../docs/05-PRACTICE-STORIES.md), choose one, and create a branch with `git switch -c practice/story-01`.

Before code, record the expected behavior, one boundary input and a design decision in your own ignored `my-journal/` folder. Use [the template](../docs/JOURNAL-TEMPLATE.md). Keep main as the working reference. The shipped tests verify the reference; they do not mean your chosen story is already complete.

Start with **Show unchanged-key count**. Derive an unchanged count without including unchanged rows in the main changes list.

Acceptance: Counts reconcile to the union of keys for added, removed, changed and unchanged cases.

Do not copy an answer before trying. After your first attempt, use [the hints](../docs/06-HINTS-AND-ANSWERS.md), then ask for a review with a concrete diff and observed result.
