---
sidebar_label: "Lab 6"
---

# Lab 6: Introduction to Flutter

Platform-Based Development (CSGE602022) - Organized by Faculty of Computer Science,
University of Indonesia, Odd Semester 2022/2023

---

## Learning Objectives

After completing this tutorial, students are expected to:

- Understand the Flutter installation process.
- Understand and use the basic Flutter commands that are needed to know to work on application projects.
- Understand the basic flow of creating and executing Flutter applications.

## Introduction to Flutter

Flutter is an open source mobile application framework created by Google in 2017. Flutter is used in the development of applications for the Android and iOS operating systems. Flutter also supports web, Windows, Linux, and MacOS based application development natively.

The advantage of Flutter itself is its ability to create applications for multiple platforms with only one codebase. In addition, the JIT (just in time) feature allows developers to see changes made to the codebase directly without having to repeat the process of compiling application code from scratch.

## Flutter Installation

1. Access the following link according to the operating system you are using.

    a. [Mac OS](https://docs.flutter.dev/get-started/install/macos)
  
    For Mac OS users using Homebrew, you can use the `brew install --cask flutter` command to install Flutter.
  
    b. [Windows](https://docs.flutter.dev/get-started/install/windows)

    c. [Linux](https://docs.flutter.dev/get-started/install/linux)

2. Install the latest version of Flutter by following the guide in the link above.
  
    For Mac users, skip the `iOS Setup` stage and go straight to the `Android Setup` stage.

3. Install the IDE of your choice that will be used to develop Flutter applications.

    a. [Android Studio (Recommended)](https://developer.android.com/studio)

    b. [Visual Studio Code](https://code.visualstudio.com/)

    You can use Visual Studio Code for Flutter by installing the [Dart](https://marketplace.visualstudio.com/items?itemName=Dart-Code.dart-code) and [Flutter](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter).
  
    You can also read the IDE functionality provided by the Flutter extension at the link provided.

## Tutorial: Getting Started with Flutter

1. Open Terminal or Command Prompt.

2. Go to the directory according to your wish.

3. Generate a Flutter project and enter the project directory.

    ``` bash
    flutter create <APP_NAME>
    cd <APP_NAME>
    ```

4. Run the project via Terminal or Command Prompt.

    ``` bash
    flutter run
    ```

5. A display like the one below will appear.

    ![First App](https://i.ibb.co/GTq5p70/693e69f5108186abc024710adf4387bb.jpg)

6. Open the `lib/main.dart` file with your preferred editor or IDE.

7. Change the sentence `You have pushed the button this many times` to `You have clicked the button this many times`.

8. Save the file and see the changes in the application interface.

9. After saving your changes, do `git init` on the root folder and `add`-`commit`-`push` the project to a new repository on GitHub. You can name your new repository `pbp-flutter-tutorial`.

10. Submit your repository link to the submission slot on Scele.

## Final Words

Congratulations, you've created your first Flutter app!

After you have completed all of the tutorials above, hopefully now you will understand better and in the future you will be able to explore more with the Flutter framework in creating a multiplatform application.

**Happy coding!**

## Additional References

- [Flutter Docs](https://docs.flutter.dev/)
- [Write your first Flutter app, part 1](https://docs.flutter.dev/get-started/codelab)
- [An Introduction to Flutter: The Basics by FreeCodeCamp](https://www.freecodecamp.org/news/an-introduction-to-flutter-the-basics-9fe541fd39e2/)
- [Flutter Course for Beginners – 37-hour Cross Platform App Development Tutorial by FreeCodeCamp](https://www.youtube.com/watch?v=VPvVD8t02U8)

## Contributors

- Muhammad Azis Husein
- Muhammad Athallah
- Adrian Ardizza
- Mohamad Rifqy Zulkarnaen
