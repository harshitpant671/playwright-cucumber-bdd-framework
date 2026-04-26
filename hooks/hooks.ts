import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

Before({ timeout: 30000 }, async function (this: any) {
  const isCI = !!process.env.CI;
  this.browser = await chromium.launch({ headless: isCI });
  this.page = await this.browser.newPage();
});

After(async function (this: any) {
  if (this.page) {
    await this.page.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});