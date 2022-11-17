---
sidebar_label: Assignment 9
---

import Countdown from "@site/src/components/Countdown"

# Assignment 9: Flutter Web Service Integration

Platform-Based Development (CSGE602022) - Organized by Faculty of Computer Science University of Indonesia, Odd Term 2022/2023

---

## Assignment Description

In this assignment, you will integrate `mywatchlist` that you have created in Assignment 3 previously to Flutter. This assignment will use the same app as the previous Flutter assignment.

The checklist for this task is as follows.

- [ ] Add a navigation button on the drawer/hamburger to go to the `mywatchlist` page.

- [ ] Create one Dart file that contains the `mywatchlist` model.

- [ ] Add a `mywatchlist`  page that contains all the *watch lists* that exist in the JSON endpoints in Django that you have *deployed* to Heroku before (Task 3). In this section, you only need to display the title of each `mywatchlist`.

  - [ ] Create a navigation from each *watch list* title to the detail page

    ![Mywatchlist](https://i.ibb.co/dbnTnQz/mywatchlist.png)

- [ ] Add a detail page for each `mywatchlist` in the list. This page displays the title, release date, rating, *review*, and status (watched/not watched).

- [ ] Add a button to go back to the `mywatchlist` list.

    ![Detail](https://i.ibb.co/rdCFcYy/detail.png)

- [ ] Answer the following questions in `README.md` in the root folder (please modify the `README.md` you created earlier; add subheadings for each task).

  - [ ] Can we retrieve JSON data without creating a model first? If yes, is it better than creating a model before retrieving JSON data?
  - [ ] List the widgets that you used in this project and explain their functions.
  - [ ] Explain the mechanism of retrieving data from json so it can be shown in Flutter.
  - [ ] Explain how you implemented the checklist above.
- [ ] Do `add`-`commit`-`push` to GitHub.

## Deadline

Deadline for Asssignment 9: <Countdown deadline={new Date("November 24, 2022 12:00 GMT+7")} />

The teaching assistant will check the *last commit* of the lab assignment repository, so you don't need to submit the repository link into the submission slot.

## Bonus

You will get bonus marks on this assignment assessment if you create the following features.

- [ ] Add a checkbox to each watchlist on the `mywatchlist` page. Where the checkbox will be checked if the watched status is true and unchecked if it is false.
  - [ ] If the checkbox is pressed, then the watched status will change (the change will happen locally and temporarily only, the status on the endpoint also does not need to be changed)
- [ ] Add color to the *outline* for every `mywatchlist` on the `mywatchlist` page based on the watched status (The two picked colors are free).
- [ ] *Refactor* fetch data function from web service to a separate file.
