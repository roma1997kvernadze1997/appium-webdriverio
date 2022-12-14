# Appium + WebDriver.IO Demo Framework - Android & IOS

## General System Requirements

---

#### Node JS

We need node js to download Appium beta version & drivers easily.

- Download[ Node Js](https://linktodocumentation) depending on your operating system.

After download, check node version

```bash
    node -v
```

#### Java JDK & JAVA_HOME variable

- [Open JDK](https://openjdk.org)
- [JAVA_HOME setup for Windows](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)
- [JAVA_HOME setup for Mac](https://mkyong.com/java/how-to-set-java_home-environment-variable-on-mac-os-x/)

## Android Setup

#### Android Studio & ANDROID_HOME variable

- [Android Studio](https://developer.android.com/studio?hl=es-419&gclsrc=aw.ds&gclid=Cj0KCQjwyOuYBhCGARIsAIdGQRNrDv20QvoOy_-I5E1LoZdOLu3nvhlwX_7EjPeHcE1kGQNNcIVOme0aAqckEALw_wcB)
- [ANDROID_HOME setup for Windows](https://www.testingdocs.com/setting-android_home-environment-variable-on-windows/)
- [ANDROID_HOME setup for Mac](https://stackoverflow.com/questions/19986214/setting-android-home-enviromental-variable-on-mac-os-x)

## Editor

Install Visual Studio Code: (https://code.visualstudio.com/download)

#### Download Appium Inspector

In order to find the correct locators to map elements, you will need to have this tool installed in your computer.

- [Appium Inspector Releases](https://github.com/appium/appium/blob/1.x/docs/en/writing-running-appium/web/chromedriver.md)

For this project you can use the following configuration:

| Server Key  | Server Value |
| ----------- | ------------ |
| Remote Host | localhost    |
| Remote Port | 4723         |
| Remote Path | /wd/hub      |

Android Desired Capabilities(Example)
| Desired Capability Key | Desired Capability Value |
| ------------- | ------------- |
| platformName | Android |
| platformVersion | [OS VERSION / IMAGE] |
| deviceName | [EMULATED_DEVICE_NAME] |
| app | /[PROJECT_PATH]/[APP_NAME].apk |
| appium:automationName | UIAutomator2 |

IOS Desired Capabilities(Emulator - App)
| Desired Capability Key | Desired Capability Value |
| ------------- | ------------- |
| platformName | IOS |
| platformVersion | [OS VERSION / IMAGE] |
| deviceName | [EMULATED_DEVICE_NAME] |
| app | /[PROJECT_PATH]/[APP_NAME].app |
| appium:automationName | XCUItest |

#### Install Apium

Appium is an open source test automation framework for use with native, hybrid and mobile web apps.
It drives iOS, Android, and Windows apps using the WebDriver protocol.

- Install [Appium](https://appium.io) from the official documentation
- Install [Appium 2](https://appiumpro.com/editions/122-installing-appium-20-and-the-driver-and-plugins-cli) by Node JS(Beta):

```bash
    npm install -g appium@next
```

Check the appium version using

```bash
    appium -v
```

#### Appium Doctor

To check if your OS meets the appium requirements, install this node package.

- [Appium Doctor Package](https://github.com/appium/appium-doctor)
  Install it using the command

```bash
npm install appium-doctor -g
```

And then use the library:

```bash
appium-doctor
```

#### Appium drivers

If you want Appium to work correctly, you need to download and have the android/ios driver in your system.
Run the commands:

```bash 
appium driver install xcuitest
appium driver install uiautomator2
```

Check the installed drivers using

```bash
appium driver list
```

If, none of the scripts are working in project, run this command!

```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```


#### applications

Any app

**_Important Note:_**
For IOS you are going to need an app build to run it in simulators, but an .IPA file to run it in real devices. It required additonal desired capabilities, and you can see which ones in the next article: [Appium XCUITest Driver Real Device Setup
](https://appium.io/docs/en/drivers/ios-xcuitest-real-devices/)

## Setup WebDriverIO

1- Run the command to create the package.json & continue with the installation process

```bash
    npm init wdio .
```

2- Using the WDIO Configuration Helper select the options you want to select. In my case I decided to use:

- On my local machine
- Mocha
- No compiler
- Spect Location: Default
- Do you want WebDriverIO to generate some test files?: No
- Reporter: Spec or Allure
- No Plugin
- Service: Appium
- Base URL: Default
- NPM Install: Yes

3- Add your tests at

```bash
'./[yourProject]/specs/**/*.js'
```

4- Configure the app route at wdio.conf.js

- Declare where it is going to be located

```bash
const projectPath = require('path')
const androidAppPath = projectPath.join(process.cwd(), "app/android/app-debug.apk")
const iosAppPath = projectPath.join(process.cwd(),"app/ios/shopthing.app");
```

- Set up the capabilities for Android(Emulator sample)

```bash
capabilities: [{
        platformName: 'Android',
        "appium:platformVersion": "12",
        "appium:device-name": 'Pixel 4 API 31(S)',
        "appium:automationName": "UIAutomator2",
        "appium:app": androidAppPath,
    }]
```

- Set up the capabilities for IOS(Simulator sample)

```bash
capabilities: [{
        platformName: 'IOS',
        "appium:device-name": 'iPhone 13 Pro Max',
        "appium:platformVersion": "16.0",
        "appium:automationName": "XCUItest",
        "appium:app": iosAppPath,
    }]
```

- Install Appium in your project

```bash
    npm install --save-dev appium@next
```

- Check if the drivers are still available, if not install them again:

```bash
appium driver list
```

- Install drivers: Android(uiautomator2) or IOS(xcuitest)

```bash
appium driver install xcuitest
appium driver install uiautomator2
```

- Run your scripts using. Scripts are located inPackage.json!

```bash
npx wdio
```

## Setup WebDriverIO

if you want to run this project:

1- Install all the system requirements

2- Clone the project

3- Run: npm i

4- Download the android app and place it under app/android or app/IOS

5- npm run wdioIOS/wdioAndroid

## Android setup & demo

[![ANDROID TESTING VIDEO](https://i.ytimg.com/vi/KN1sTvvX0mM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgoIVXC8QqNpzuuw9sdzSkOos1lg)](https://www.youtube.com/watch?v=KN1sTvvX0mM&t=2569s)

## IOS setup & demo

[![IOS TESTING VIDEO](https://i.ytimg.com/vi/Q5Oy8axA8Qw/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBoa-PxuNR5xJ0U8NM4J0sigtqwgg)](https://www.youtube.com/watch?v=Q5Oy8axA8Qw&ab_channel=JoanMedia)

### Extra Information

- [UI Selectors (Android)](https://developer.android.com/reference/androidx/test/uiautomator/UiSelector)

- [Predicate Strings Selectors (IOS)](https://appium.io/docs/en/writing-running-appium/ios/ios-predicate/)

- [Class Chain Selectors (IOS)](https://github.com/facebookarchive/WebDriverAgent/wiki/Class-Chain-Queries-Construction-Rules)
