---
sidebar_label: Assignment 6
---

import Countdown from "@site/src/components/Countdown"

# Assignment 6 : Javascript and AJAX

Platform-Based Programming (CSGE602022) - organized by Faculty of Computer Science
University of Indonesia, Odd Term 2022/2023

---

## Assignment Description

In this assignment, you will implement AJAX in the `todolist` functionality that you have made in assignment 4 and 5.

Checklist for this assignment is as follows:

- [ ] Alter the assignment that you have previously made in assignment 4 using AJAX.
  - [ ] AJAX GET
    - [ ] Create a view that returns the whole data task in the form of JSON.
    - [ ] Create a path containing `/todolist/json` that redirects to the new view that you've just made
    - [ ] Do the AJAX GET method to get the list of task.
  - [ ] AJAX POST
    - [ ] Create an `Add Task` button that opens to a modal with a form to add new tasks.

      > To learn further about Bootstrap (v5.2) modal, please read the given documentations: [Modal · Bootstrap v5.2](https://getbootstrap.com/docs/5.2/components/modal/).

  - [ ] Create a view to add new tasks into the database.
  - [ ] Create a path containing `/todolist/add` that redirects to the new view that you've just made.
  - [ ] Connect the form that you have made in the modal to the `/todolist/add` path.
  - [ ] Close the modal after succesfully adding the task.
  - [ ] Do a page refresh on the main page asyncronically to show the latest list without having to reload the entire page.
- [ ] Answer the following questions on the `README-TWO.md`file inside the `todolist` folder.
  - [ ] Describe the difference between asynchronous programming with synchronous programming.
  - [ ] When Implementing Javascript and AJAX, there is an application in the paradigms of Event-Driven Programming. Describe the reasoning for those paradigms and state some examples of its application.
  - [ ] Describe the implementation of asynchronous programming in AJAX.
  - [ ] Explain how you would implement the checklist above.

## Deadline

Deadline for Assignment 6: <Countdown deadline={new Date("13 October 2022 12:00 GMT+7")} />

The teaching assistant will check the last commit of the lab assignment repository, so you do not need to collect the repository link into the submission slot.

## Bonus

You will get bonus points on this assignment assessment if you create the following features.

- [ ] Adding a delete functionality using AJAX DELETE.
  - [ ] Create a column with a delete button in the task feature.
  - [ ] Create a view that deletes the task that contains a certain ID.
  - [ ] Create a `/todolist/delete/{id}` path that takes an ID from the path and forwards it to the view.
  - [ ] Create a JavaScript function that calls the endpoint of task deletion.
  - [ ] Do a refresh in the main page asyncronically that shows the latest list without reloading the entire page
