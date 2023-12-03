# My React native template

### This is my react native template, it's a simple template with some basic libraries and configurations.

### I hope you enjoy it!

## Libraries:

- [React Navigation](https://reactnavigation.org/)
- [Redux-toolkit](https://redux-toolkit.js.org/)
- [redux-persis](https://github.com/rt2zz/redux-persist)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)
- [tamagui](https://tamagui.dev)
- [day.js](https://day.js.org/docs/en/installation/installation)
- [axios](https://axios-http.com/docs/intro)
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [expo-modules](https://expo.dev/)

## If you want to use it, do following steps:

### 1. Clone this repository

```bash
git clone git@github.com:codebycoder/MyRNTemplate.git NewProjectName
```

### 2. Install dependencies

```bash
cd NewProjectName && npm install
```

## Do following steps to rename your project:

### 1. Rename your project in package.json

### 2. Rename your project in app.json

### 4.Rename Native iOS and Android App:

- This is the trickiest part, as it involves renaming the iOS and Android app identifiers.

## iOS:

- Open the ios folder in Xcode.
- Click on the root of your project tree.
- In the General tab, update the Display Name, Bundle Identifier, and any other relevant fields.
- Rename the **ios/YourOldProjectName** folder and update the references in Xcode.

## Android:

- Update the **applicationId** in **android/app/build.gradle**.
- Rename the folders in **android/app/src/main/java** to match your new applicationId.
- Update the package name in all your **Java/Kotlin** files.

## Or using Using a Renaming Tool:

1. install react-native-rename

```bash
npm install -g react-native-rename

```

2. Rename your app

```bash
react-native-rename <newName>
```

3. Rename your app with a custom Bundle Identifier (Android only. For iOS, please use Xcode)

```bash
react-native-rename <newName> -b <bundleIdentifier>
```

## Post-Renaming Steps:

1. Reinstall Node Modules:

```bash
rm -rf node_modules && npm install
```

2. Reset the React Native Cache:

```bash
react-native start --reset-cache
```

3. Rebuild the app:

```bash
react-native run-ios
react-native run-android
```
