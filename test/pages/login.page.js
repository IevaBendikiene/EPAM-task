const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("https://www.saucedemo.com/");
  }
  input(name) {
    const selectors = {
      username: '//input[@id="user-name"]',
      password: '//input[@id="password"]',
    };
    return $(selectors[name]);
  }
  async clearInput(input) {
    if (browser.isChromium) {
      const inputLength = (await input.getValue()).length;
      for (let i = 0; i < inputLength; i++) {
        await input.addValue("\uE003");
      }
    } else {
      await input.clearValue();
    }
  }
  get loginButton() {
    return $('//input[@id="login-button"]');
  }
  async login() {
    await this.loginButton.click();
  }
  get errorMessage() {
    return $("//form//h3");
  }
}

module.exports = LoginPage;
