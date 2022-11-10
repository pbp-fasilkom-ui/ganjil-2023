---
sidebar_label: Assignment 8
---

import Countdown from "@site/src/components/Countdown"

# Assignment 8: Flutter Form

Platform Based Development (CSGE602022) - Organized by Faculty of Computer Science, University of Indonesia, Odd Semester 2022/2023

---

## Assignment Description

In this assignment, you will create a simple budget tracking app using the app created in the previous assignment.

The checklist for this assignment is as follows.

- [ ] Add a drawer/hamburger menu to the previously created app.
- [ ] Add two navigation buttons on the drawer/hamburger.
  - [ ] First navigation to the form page.
  - [ ] The second navigation to the page that displays the budget data that has been input through the form.

    ![Drawer](https://i.ibb.co/Pzh61B7/kki-drawer.png)

- [ ] Add a form page
  - [ ] Add an input element with String data type in the form of budget title.
  - [ ] Add an input element with int data type in the form of budget amount.
  - [ ] Add a dropdown element containing the type budget with income and expense options.
  - [ ] Add a button to save the budget.
  
    ```
    Note: You can utilize data structures like List to store the data created.
    ```

    ![Form](https://i.ibb.co/2kRM76Y/kki-form.png)

- [ ] Add a page of budget data
  - [ ] Displays all the titles, amounts, and types of budgets that have been added to the form.

    ![Data](https://i.ibb.co/25nmskY/kki-data.png)

- [ ] Answer the following questions in `README.md` in the root folder (please modify the `README.md` you created before; add subheadings for each assignment).
  - [ ] Explain the difference between `Navigator.push` and `Navigator.pushReplacement`.
  - [ ] List all the widgets you used in this project and explain their functions.
  - [ ] Name the types of events that exist in Flutter (example: `onPressed`).
  - [ ] Explain how the Navigator works in "switching" pages of a Flutter application.
- [ ] Explain how you implemented the checking list above.
- [ ] Do `add`-`commit`-`push` to GitHub.

## Deadline

Deadline for Assignment 8: <Countdown deadline={new Date("November 17, 2022 12:00 GMT+7")} />

The teaching assistant will check the last commit of the lab assignment repository, so you do not need to submit the repository link into the submission slot.

## Bonus

You will get bonus marks on this assignment if you create the following features.

- [ ] Add a date picker element to the form page.
- [ ] Display a date element (free format) on each budget element on the budget data page.
- [ ] Refactor the Drawer widget to a separate file.
