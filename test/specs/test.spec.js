const LoginPage = require("../pages/login.page");
const loginPage = new LoginPage();

describe("SauceDemo Login Tests", () => {
  beforeEach(async () => {
    await loginPage.open();
  });
  
 //thsi test is made to check that BasePage class works correctly
  it("check page title", async () => {
    await expect(browser).toHaveTitle("Swag Labs");
  });
  
  it("UC-1 Test Login form with empty credentials", async () => {
    const username = await loginPage.input("username");
    const password = await loginPage.input("password");
    //set input values
    await username.setValue("standard_user");
    await password.setValue("password");
    //clear input values
    await loginPage.clearInput(username);
    await loginPage.clearInput(password);

    const value1 = await username.getValue();
    console.log(value1); //making sure values are cleared

    await loginPage.login();

    await expect(loginPage.errorMessage).toHaveText(
      expect.stringContaining("Username is required")
    );
  });

  it("UC-2 Test Login form with credentials by passing Username only", async () => {
    const username = await loginPage.input("username");
    const password = await loginPage.input("password");
    //set input values
    await username.setValue("standard_user");
    await password.setValue("password");
    //clear input password value
    await loginPage.clearInput(password);
    await loginPage.login();

    await expect(loginPage.errorMessage).toHaveText(
      expect.stringContaining("Password is required")
    );
  });

  it("UC-3 Test Login form with valid credentials", async () => {
    const username = await loginPage.input("username");
    const password = await loginPage.input("password");
    //set input values
    await username.setValue("standard_user");
    await password.setValue("secret_sauce");
    await loginPage.login();

    await expect(browser).toHaveTitle("Swag Labs");
  });
});
