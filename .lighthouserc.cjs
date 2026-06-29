module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      url: [
        "http://localhost:3000",
        "http://localhost:3000/blog",
        "http://localhost:3000/blog/why-box-truck-owners-lose-profitable-loads",
        "http://localhost:3000/service",
        "http://localhost:3000/about",
        "http://localhost:3000/contact",
        "http://localhost:3000/pricing",
        "http://localhost:3000/state",
      ],
      numberOfRuns: 3,
    },
    upload: {
      target: "filesystem",
      outputDir: "./lighthouse-reports",
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.9 }],
        "categories:accessibility": ["warn", { minScore: 0.9 }],
        "categories:best-practices": ["warn", { minScore: 0.9 }],
        "categories:seo": ["warn", { minScore: 0.9 }],
      },
    },
  },
};
