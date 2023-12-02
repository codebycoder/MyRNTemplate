## My React native template

### This is my react native template, it's a simple template with some basic libraries and configurations.

### I hope you enjoy it!

### If you want to use it, do following steps:

### 1. Clone this repository

```bash
git clone [your-repo-url] NewProjectName
```

### 2. Install dependencies

```bash
cd NewProjectName && npm install
```

### Do following steps to rename your project:

### 1. Rename your project in package.json

### 2. Rename your project in app.json

### 4.Rename Native iOS and Android App:

This is the trickiest part, as it involves renaming the iOS and Android app identifiers.
iOS:
Open the ios folder in Xcode.
Click on the root of your project tree.
In the General tab, update the Display Name, Bundle Identifier, and any other relevant fields.
Rename the ios/YourOldProjectName folder and update the references in Xcode.
Android:

Update the applicationId in android/app/build.gradle.
Rename the folders in android/app/src/main/java to match your new applicationId.
Update the package name in all your Java/Kotlin files.
