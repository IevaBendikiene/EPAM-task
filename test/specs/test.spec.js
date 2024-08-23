const LoginPage = require("../pages/login.page");

describe("SauceDemo Login Tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
    
  });
   
  it("UC-1 Test Login form with empty credentials", async () => {
    const userInput = await $("#user-name")
    const passwordInput = await $("#password")
    const loginBtn = await $("#login-button")
    const error = await $(".error-message-container")

    await userInput.setValue("standard_user");
    await passwordInput.setValue("password");
    await userInput.clearValue();
    await passwordInput.clearValue();
    await loginBtn.click()

    await expect(error).toHaveText("Username is required")
  });

  it("UC-2 Test Login form with credentials by passing Username only", async () => {
    const userInput = await $("#user-name")
    const passwordInput = await $("#password")
    const loginBtn = await $("#login-button")
    const error = await $(".error-message-container")

    await userInput.setValue("standard_user");
    await passwordInput.setValue("password");
    await passwordInput.clearValue();
    await loginBtn.click()

    await expect(error).toHaveText("Password is required")
    
  });

  it("UC-3 Test Login form with valid credentials", async () => {

    const userInput = await $("#user-name")
    const passwordInput = await $("#password")
    const loginBtn = await $("#login-button")
   

    await userInput.setValue("standard_user");
    await passwordInput.setValue("password");
    await loginBtn.click()
    await expect(browser.getTitle).toHaveText("Swag Labs")
    
  });
});
