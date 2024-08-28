class BasePage {
  constructor(url) {
    this.url = url;
  }
  open() {
    return browser.url(this.url);
  }
  // async open() {
  //   return browser.url("https://www.saucedemo.com/");
  // }
}
module.exports = BasePage;
