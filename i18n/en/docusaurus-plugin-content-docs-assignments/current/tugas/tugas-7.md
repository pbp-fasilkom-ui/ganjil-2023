---
sidebar_label: Assignment 7
---

import Countdown from "@site/src/components/Countdown"

# Assignment 7: Flutter Basic Elements

Platform-Based Development (CSGE602022) - Organized by Faculty of Computer Science
University of Indonesia, Odd Term 2022/2023

---

## Assignment Description

In this assignment, you will implement some of the basic elements of Flutter.

The checklist for this assignment is as follows.

- [ ] Create a new Flutter program with the name `counter_7`.
- [ ] Change the program interface to be as below.

    ![Counter App](https://i.ibb.co/N7JqmCf/Selection-577.png)

- [ ] Implement the following logic in the program.
  - [ ] The + button adds a number by one unit.
  - [ ] Button - reduces the number by one unit. If counter is 0, then the - button has no effect on counter.
  - [ ] If counter is odd, the indicator text changes to "ODD" in blue.
  - [ ] If counter is even, the indicator text changes to "EVEN" in red.
  - [ ] The number 0 is considered an even number.
- [ ] Answer the following questions on `README.md` in the root folder.
  - [ ] Explain what is meant by stateless widget and stateful widget and explain the difference between them.
  - [ ] Mention what widgets you use in this project and explain their functions.
  - [ ] What is the function of `setState()`? Explain what variables can be affected by the function.
  - [ ] Explain the difference between `const` and `final`.
  - [ ] Explain how you implement the checklist above.
- [ ] Do `add`-`commit`-`push` to a new repository on GitHub. You can name your new repository by `pbp-flutter-lab`.

## Deadline

Deadline for Assignment 7: <Countdown deadline={new Date("10 November 2022 12:00 GMT+7")} />

Please submit the repository link you are using into the submission slot provided on SCELE.

## Bonus

You will get bonus points on this assignment if you make the following feature.

- [ ] Hide the - button if counter is 0.
