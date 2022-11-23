---
sidebar_label: Lab 9
---

# Tutorial 9: Basic State Management, Connecting Django with Flutter, and Git Branching

Platform-Based Development (CSGE602022) - Organized by Faculty of Computer Science University of Indonesia, Odd Term 2022/2023

---

## Learning Objectives

After completing this tutorial, students are expected to:

- Understand Provider package to perform basic state management.
- Able to authenticate with Django servers with the Flutter app.
- Understand the proper and correct usage of Git branching.

## Basic State Management with Provider

Provider is a wrapper around the `InheritedWidget` to make the `InheritedWidget` easier to use and more reusable. `InheritedWidget` itself is a base class for Flutter widgets that efficiently propagate information to other widgets residing in a *tree*.

The benefits of using a `provider` are as follows.

- Simplified allocation or disposal of resources.
- Lazy-loading.
- A vastly reduced boilerplate over making a new class every time.
- Dvtool friendly – using Provider, the state of your application will be visible in the Flutter devtool.
- Increased scalability for classes with a listening mechanism that grows exponentially in complexity.

To find out more about the `provider`, learn from its page: <https://pub.dev/packages/provider>

## Tutorial: Using the Django Server in Flutter

To facilitate the creation of an authentication system, the team of teaching assistants has developed a Flutter package that can be used to make contact with the Django web service (including `GET` and `POST` operations).

The package itself can be accessed via the following link: [pbp_django_auth](https://pub.dev/packages/pbp_django_auth)

Please read the documentation to see how to use package.

> If you have criticism or suggestions for this package, you can tell us directly on Discord. 🤩

## Good and Correct Use of Git Branching

One of the most important functions of Git is development branch control which helps increase productivity in project creation. In general, development branch is a bifurcation of code conditions that create a new path for its evolution. This branch can be parallelized to any other branch you create. You can incorporate new functionality into your code regularly and precisely.

Git branching has many advantages. The most powerful two advantages of using Git branching are:

1. Allows the development of new features for applications without interrupting development on the main branch.
2. Allows the creation of different development branches that can be centered in a single repository; examples are stable branch and staging branch.

The following is an example of using Git branching that you can apply to work on your final group project.

1. `main` branch; contains code that is ready to be used as codebase production version of the application and usually becomes reference for CI/CD to build applications.
2. `staging` or `development` branch; contains a collection of unitary code features or modules that have been comprehensively well-integrated.
3. Branch which contains individual member features or modules; usually named by either the feature name or the member working on it (or even both).

Here are things to consider when using branch.

1. Before *push* a code to an individual branch, **make sure you pull the code from staging branch**. This is done to avoid conflicts that can occur when you do merge request to `staging` branch.
2. When you want to do merge request from individual branch, **make sure you merge into staging branch**. This is done to avoid errors that can occur when you push to the main branch which contains the application unitary code. Imagine if you directly push to `main` branch and it turns out that there are still lots of errors that occur but (unfortunately) the application's unified code has been formed into one APK file and has been accessed by users; of course, we want to avoid that, right?
3. Focus on `main` branch for releasing applications to the general public and `staging` branch for integrating applications into one unit that is error-free before release.
4. With this focus, **__push into main branch only from staging branch.__**

With a brief explanation and example from Git branching, it is hoped that you will be able to work on your final group project in a more orderly and systematic manner. 😉

## Additional Reference

- [Simple app state management | Flutter](https://docs.flutter.dev/development/data-and-backend/state-mgmt/simple)
- [Flutter State Management with Provider](https://blog.devgenius.io/flutter-state-management-with-provider-5a57eca108f1)
- [git - the simple guide](https://rogerdudler.github.io/git-guide/index.html)
- [Using Branches in Git](https://uoftcoders.github.io/studyGroup/lessons/git/branches/lesson/)
- [How to Use Branches in Git – the Ultimate Cheatsheet](https://www.freecodecamp.org/news/how-to-use-branches-in-git/)

## Contributor

Muhammad Athallah.
