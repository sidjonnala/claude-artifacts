/* ---------------------------------------------------------------------------
   Artifact manifest.

   This is the only file you edit when adding an artifact. Drop the HTML into
   artifacts/<slug>.html, then add one entry below. Newest entries can go
   anywhere in the list; index.html sorts by `updated` descending.

   Fields
     slug     kebab-case id, must match the filename in artifacts/
     title    as shown on the index and in the artifact's own <title>
     file     path relative to the repo root
     summary  one or two sentences, shown on the index card
     tags     lowercase, reused across artifacts so filtering is useful
     status   short label, e.g. Proposal, Live, Superseded, Reference
     updated  YYYY-MM-DD, the date the artifact content last changed
     source   optional link back to the live artifact
--------------------------------------------------------------------------- */

window.ARTIFACTS = [
  {
    slug: "release-cadence-calendar",
    title: "Release Cadence Calendar",
    file: "artifacts/release-cadence-calendar.html",
    summary:
      "Eight weeks per release, six weeks between releases, on one scrollable calendar through March 2027. Shows the two-week overlap where a hardening sprint doubles as the next release's sprint 1, plus the arithmetic that reconciles the six-versus-eight argument.",
    tags: ["release process", "cadence", "calendar", "proposal"],
    status: "Proposal",
    updated: "2026-09-09",
    source: "https://claude.ai/code/artifact/363adfb1-b67b-47aa-a71e-867a82662f83"
  },
  {
    slug: "six-weeks-or-eight",
    title: "Six Weeks or Eight",
    file: "artifacts/six-weeks-or-eight.html",
    summary:
      "The 22 open challenges from the Sep 2 and Sep 3 release meetings, numbered so they can be called out by number in the room, tagged disputed / open / agreed and grouped by where they bite.",
    tags: ["release process", "cadence", "open issues", "decision log"],
    status: "Reference",
    updated: "2026-09-04",
    source: "https://claude.ai/code/artifact/30e59e3a-14ae-47e6-9683-341b823868b2"
  }
];
