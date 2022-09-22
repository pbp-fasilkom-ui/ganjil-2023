---
sidebar_label: Assignment 4
---

import Countdown from "@site/src/components/Countdown"

# Assignment 4: Implementing Forms and Authentication Using Django

Platform-Based Programming (CSGE602022) - Organized by Faculty of Computer Science, University of Indonesia, Odd Term 2022/2023

---

## Description

In this assignment, you will implement the `<form>` element, authentication concepts, and some of the things you learned during the lab tutorial.

The checklist for this assignment is as follows:

- [ ] Create a new application called `todolist` in the previously deployed Django task project.
- [ ] Add the _path_ `todolist` so that users can access http://localhost:8000/todolist.
- [ ] Create a `Task` model that has the following attributes:
    - [ ] `user` to associate the task with the user who created the task.

        > You can use the model type `models.ForeignKey` with the parameter `User`. To learn more about `ForeignKey` in Django, you can read the Django documentation (or click [here](https://docs.djangoproject.com/en/4.1/ref/models/fields/#foreignkey)).
    
    - [ ] `date` to describe the date the task was created.
    - [ ] `title` to describe the title of the task.
    - [ ] `description` to describe the description of the task.
- [ ] Implement the registration, login, and logout forms so that users can use `todolist` properly.
- [ ] Create a `todolist` main page that contains the user's username, the `Add New Task` button, the logout button, and a table containing the task creation date, task title, and task description.
- Create a form page for task creation. The only data the user needs to enter is the task title and task description.

    > You can read Django's documentation on `Forms` [here] (https://docs.djangoproject.com/en/4.1/topics/forms/).

- [ ] Create a `routing` so that some functions can be accessed via the following URL:
    - [ ] http://localhost:8000/todolist contains the main page containing the task table.
    - [ ] http://localhost:8000/todolist/login contains the login form.
    - [ ] http://localhost:8000/todolist/register contains the account registration form.
    - [ ] http://localhost:8000/todolist/create-task contains the task creation form.
    - [ ] http://localhost:8000/todolist/logout contains the logout mechanism.
- [ ] Deploy your project to the Heroku that you have created so that it can later be accessed by your friends via the Internet.
- [ ] Create **two** user accounts and **three** dummy data using the `Task` model on each account.
- [ ] Create a `README.md` in the `todolist` folder that contains the link to your deployed Heroku application and the answers to the following questions:
    - [ ] What does `{% csrf_token %}` do in the `<form>` element? What happens if there is no such "code snippet" in the `<form>` element?
    - [ ] Can we create the `<form>` element manually (without using a generator like `{{ form.as_table }}`)? Explain generally how to create `<form>` manually.
    - [ ] Describe the data flow process from the submission made by the user through the HTML form, data storage in the database, until the appearance of the data that has been stored in the HTML template.
    - [ ] Explain how you implement the checklist above.

## Deadline

Deadline for Assignment 4: <Countdown deadline={new Date("29 Se, 2022 12:00 GMT+7")} />

The teaching assistant will check **the last commit** of the assignment repository, so you do not need to submit the repository link into the submission slot.

## Bonus

You will get bonus marks on this assignment if you create the following features.

- [ ] Add an `is_finished` attribute to the `Task` model (with the default value of `False`) and create two new columns in the task table containing the completion status of the task and a button to change the completion status of a task to `Finished` or `Unfinished`.
- [ ] Add a new column to the task table containing a button to delete a task.

Both features above must be implemented (not just a button, but these features must be able to perform the desired behavior) if you want to get bonus points.

> Motivation: By completing the bonus features, you have learned the basics of CRUD in Django. 😉