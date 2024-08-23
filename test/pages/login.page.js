class LoginPage {
  // get usernameInput() {
  //   return $("#user-name");
  // }
  // get passwordInput() {
  //   return $("#password");
  // }
  // get loginButton() {
  //   return $("#login-button");
  // }
  // get errorMessage() {
  //   return $(".error-message-container");
  // }

  async open() {
    return browser.url("https://www.saucedemo.com/");
  }

  // async login(){
  //   await this.loginButton.click()
  // }
}

module.exports = new LoginPage();
