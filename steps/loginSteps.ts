import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import assert from "assert";
import { LoginPage } from "../pages/loginPage";

let browser: Browser;
let page: Page;
let loginPage: LoginPage;

Given("user is on login page", async function () {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate();
});

When(
  "user enters username {string} and password {string}",
  async function (username: string, password: string) {
    await loginPage.login(username, password);
  }
);

Then("user should be redirected to dashboard", async function () {
  const url = await loginPage.getCurrentUrl();
  assert(url.includes("dashboard"));
  await browser.close();
});