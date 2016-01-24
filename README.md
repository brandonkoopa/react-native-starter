# react-native-starter
- [Getting Started][getting-started]
    - [Requirements][reqs]
    - [Installation][install]
- [Find your way around][navigate]


This boilerplate application is a great place to start when making a new react-native application for iOS and Android devices. It contains a working Navigator that navigates through scenes that are already setup for you.

## Getting Started

### Requirements
- A modern browser
- [Install react-native][node]

### Installation
Once you have react-native installed globally, **clone** the repo, **install** and **start** the app.
```sh
clone https://github.com/brandonkoopa/react-native-starter.git
npm install
react-native start
```

**react-native start** runs the packager, which you can then run the app in an iOS simulator or Android simulator.

To run the iOS app in the simulator, open and run the following file in Xcode:
./ios/ReactNativeStarter.xcodeproj

If you [setup Android emulation][android-setup], you can run the Android app with:
```sh
react-native run-android
```

## Finding your way around
Source files can be found in the `src` folder.
```
android/
ios/
src/
    |__ common/
    |__ scenes/
        |__ home.js
        |__ signin.js
        |__ signup.js
    |__ main.js
index.android.js
index.ios.js
```

After making changes to the application, with packager running (**react-native start**), refresh the emulator to see your changes. For example, to refresh your running app in the iOS emulator on Mac, press command-R.

[getting-started]: #getting-started
[reqs]: #requirements
[install]: #installation
[navigate]: #find-your-way-around
[use]: #use-in-your-own-project
[node]: http://www.nodejs.org
[react-native]: https://facebook.github.io/react-native/docs/getting-started.html
[android-setup]: https://facebook.github.io/react-native/docs/android-setup.html
[gulp]: http://gulpjs.com/
