const LoginScreen = require("../../screenObjects/android/Login.screen");
const LeftSideMenuScreen = require("../../screenObjects/android/LeftSideMenu.screen")
//const allureReporter = require('@wdio/allure-reporter').default

describe("Open LogIn Page", () => {
  beforeEach(async () => {
    await LeftSideMenuScreen.expandMenuButton.click();
    await LeftSideMenuScreen.loginMenuButton.click();
  });

  it("Verify Header Text", async() => {
    await expect(LoginScreen.heraderText).toHaveText(
      "Select a username and password from the list below, or click on the usernames to automatically populate the username and password.");
  })

  it("Should not login with invalid credentials", async () => {
    LoginScreen.login("User12", "Password12");
    await expect(LoginScreen.errorText).toHaveText(
      "Provided credentials do not match any user in this service.");
  });

  // it('Case', () => {
  //   allureReporter.addFeature('Feature')
  // })

});
