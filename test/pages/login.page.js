const BasePage = require("./base.page");

class LoginPage extends BasePage {
  constructor() {
    super("https://www.saucedemo.com/");
  }
  // input(name) {
  //   const selectors = {
  //     username: '//input[@id="user-name"]',
  //     password: '//input[@id="password"]',
  //   };
  //   return $(selectors[name]);
  // }
  get userInput() {
    return $('//input[@id="user-name"]');
  }
  get passwordInput() {
    return $('//input[@id="password"]');
  }
  // setting valuse to username and password
  async setInputValue(input, value) {
    await input.setValue(value);
  }
  async setUser(username) {
    return this.setInputValue(this.userInput, username);
  }
  async setPassword(password) {
    return this.setInputValue(this.passwordInput, password);
  }
  // clearing username and password
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
  async clearUser() {
    return this.clearInput(this.userInput);
  }
  async clearPassword() {
    return this.clearInput(this.passwordInput);
  }
  //loging
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
