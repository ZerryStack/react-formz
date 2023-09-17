module.exports = {
  releaseRules: [
    { tag: "Breaking", release: "major" },
    { tag: "Update", release: "minor" },
    { tag: "New", release: "minor" },
    { tag: "Build", release: "minor" },
    { tag: "Docs", release: "patch" },
    { tag: "Fix", release: "patch" },
    { tag: "Chore", release: false },
    { tag: "Ignore", release: false },
  ],
};
