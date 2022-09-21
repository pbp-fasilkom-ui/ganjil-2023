---
sidebar_label: Assignment 2
---

# Assignment 2: Introduction to Django and Model-View-Template (MVT)

Platform-Based Programming (CSGE602022) - Organized by the Faculty of Computer Science Universitas Indonesia, Odd Term 2022/2023

---

## Task Description

You are asked to implement MVT concept using Django framework by creating a new
Django project and save it as a new Git repository on GitHub. You can start
initialize a new Django project and Git repository from scratch, or use the
following [code template repository][] as the starter code of your new Django
project.

Your tasks are as follows:

1. Create a new Django project and store it in a Git repository on GitHub.
   You can initialize the new Django project from scratch or by using the
   [code template repository][].
2. Create a new Django app in the new Django project. You can give it any name
   as long it is descriptive and appropriate with the domain of your project.
   For example, if you are creating a Web app for tracking student attendance,
   then it makes more sense if the app is named from a concept from the domain
   of the problem, such as `attendance`, `student`, or `presence`.
3. Create a function on `views.py` that can do querying into models and returns the data into a HTML.
4. Create a routing to map the function that you've created in `views.py`.
5. Map the data that has been returned into HTML by using Django syntax for templates and data mapping.
6. Deploy your assignment into Heroku so that your friends and your teaching assistants can access it via the Internet.
7. Create (or update) `README.md` file in the root project directory. Write down
   the link to your deployed Heroku application in `README.md` and also answers
   the following questions:
   - Create a diagram containing client request to the Django web application
     and its response. Also explain the flow of the diagram and how the
     `urls.py`, `views.py`, `models.py` and HTML files connected each other.
   - Explain why do we use virtual environments? Let's say, if we do not use the virtual environments, can we still create a Django web application?
   - Explain how did you implement the steps on point 1 to point 4 above.

   Write your answers in `README.md` file!

Please remember that **the assignment is not the same as the tutorial**.
Therefore, complete the assignment in a different Django project.
Create a new Git repository and Django project for working on this assignment.

## Deadline

The deadline of this task is set on September 15th 2022 at 12PM. Please submit the repository link of your assignments on the submission slot in SCELE.

## Bonus

You will gain bonus for the grading if you're able to implement and demonstrate basic testing (e.g. unit testing, functional testing) on your assignments.

[code template repository]: https://github.com/pbp-fasilkom-ui/tugas-lab-repository
