const LoginPage = require("../pages/login.page");
const loginPage = new LoginPage();
const data = require("../data/login-data");

describe("SauceDemo Login Tests", () => {
  beforeEach(async () => {
    await loginPage.open();
  });

  //thsi test is made to check that BasePage class works correctly
  it("check page title", async () => {
    await expect(browser).toHaveTitle("Swag Labs");
  });

  it("UC-1 Test Login form with empty credentials", async () => {
    //set input values
    await loginPage.setUser(data.invalidCredentials.username);
    await loginPage.setPassword(data.invalidCredentials.password);
    //clear input values
    await loginPage.clearUser();
    await loginPage.clearPassword();

    await loginPage.login();

    await expect(loginPage.errorMessage).toHaveText(
      expect.stringContaining("Username is required")
    );
  });

  it("UC-2 Test Login form with credentials by passing Username only", async () => {
    //set input values
    await loginPage.setUser(data.invalidCredentials.username);
    await loginPage.setPassword(data.invalidCredentials.password);
    //clear password value
    await loginPage.clearPassword();
    await loginPage.login();

    await expect(loginPage.errorMessage).toHaveText(
      expect.stringContaining("Password is required")
    );
  });

  it("UC-3 Test Login form with valid credentials", async () => {
    //set input values
    await loginPage.setUser(data.validCredentials.username);
    await loginPage.setPassword(data.validCredentials.password);
    await loginPage.login();

    await expect(browser).toHaveTitle("Swag Labs");
  });
});
