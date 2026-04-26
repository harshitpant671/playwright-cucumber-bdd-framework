import { Given, When, Then } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";
import assert from "assert";
import { LoginPage } from "../pages/loginPage";

let loginPage: LoginPage;

Given("user is on login page", async function (this: any) {
  loginPage = new LoginPage(this.page);
  await loginPage.navigate();
});

When(
  "user enters username {string} and password {string}",
  async function (this: any, username: string, password: string) {
    await loginPage.login(username, password);
  }
);

Then("user should be redirected to dashboard", async function (this: any) {
  const url = await loginPage.getCurrentUrl();
  assert(url.includes("dashboard"));
});