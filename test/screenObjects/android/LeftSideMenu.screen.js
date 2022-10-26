class LeftSideMenuScreen {
  get expandMenuButton() {
    return $("~open menu");
  }

  get loginMenuButton() {
    return $('//*[@text="Log In"]');
  }
}

module.exports = new LeftSideMenuScreen();
