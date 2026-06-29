const baseUrl = process.env.LHCI_BASE_URL || "http://localhost:3100";

const urls = [
  baseUrl,
  `${baseUrl}/blog`,
  `${baseUrl}/service`,
  `${baseUrl}/about`,
  `${baseUrl}/contact`,
  `${baseUrl}/pricing`,
  `${baseUrl}/state`,
];

if (process.env.LHCI_BLOG_SLUG) {
  urls.push(`${baseUrl}/blog/${process.env.LHCI_BLOG_SLUG}`);
}

module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start -- -p 3100",
      startServerReadyPattern: "Ready",
      url: urls,
      numberOfRuns: 3,
      settings: {
        formFactor: "mobile",
        screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 2 },
        throttlingMethod: "devtools",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      },
    },
    upload: { target: "filesystem", outputDir: "./lighthouse-reports" },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.9 }],
        "categories:accessibility": ["error", { minScore: 0.9 }],
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
        "total-blocking-time": ["error", { maxNumericValue: 200 }],
        "resource-summary:script:size": ["error", { maxNumericValue: 102400 }],
        "resource-summary:total:size": ["error", { maxNumericValue: 1048576 }],
      },
    },
  },
};