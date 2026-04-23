import { Page } from "playwright";

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto("https://commerce.bagisto.com/admin/login");
  }

  async login(username: string, password: string) {
    await this.page.fill("#email", username);
    await this.page.fill("#password", password);
    await this.page.getByRole("button", { name: "Sign In" }).click();
  }

  async getCurrentUrl() {
    return this.page.url();
  }
}