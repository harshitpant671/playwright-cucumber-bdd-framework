import { Before, After } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  this.page = page;
});

After(async function () {
  await this.page.close();
  await browser.close();
});