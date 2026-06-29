import { test, expect } from "@playwright/test";

const PUBLIC_ROUTES = [
  { path: "/", title: /Box Truck Dispatch/i },
  { path: "/about", title: /About Box Truck Dispatching/i },
  { path: "/service", title: /Box Truck Dispatch Services/i },
  { path: "/service/load-booking", title: /Box Truck Dispatch Services/i },
  { path: "/blog", title: /Box Truck Dispatching Blog/i },
  { path: "/contact", title: /Contact Box Truck Dispatching/i },
  { path: "/pricing", title: /Box Truck Dispatching Pricing/i },
  { path: "/state", title: /Box Truck Dispatching Across/i },
];

test.describe("Static public routes", () => {
  for (const route of PUBLIC_ROUTES) {
    test(`${route.path} renders and returns 200`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(route.title);
    });
  }
});

test("/blog/[slug] returns 404 without CMS data", async ({ page }) => {
  const response = await page.goto(
    "/blog/why-box-truck-owners-lose-profitable-loads",
  );
  expect(response?.status()).toBe(404);
});
