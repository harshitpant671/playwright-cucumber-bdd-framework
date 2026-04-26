import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

let browser: Browser;
let page: Page;

Before(async function () {
  const isCI = !!process.env.CI;
  browser = await chromium.launch({ headless: isCI });
  page = await browser.newPage();
  this.page = page;
});

After(async function () {
  await this.page.close();
  await browser.close();
});