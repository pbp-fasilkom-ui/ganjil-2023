---
sidebar_label: Assignment 3
---

# Assignment 3: Implement Data Delivery using Django

Platform-Based Programming (CSGE602022) - Organized by the Faculty of Computer Science Universitas Indonesia, Odd Term 2022/2023

---

## Description

In this assignment, you will implement the concept of data delivery and some other things that you have learned during the lab tutorial.

Checklist for this assignment is as follows:

- [ ] Create a new app named `mywatchlist` in the Django project that was created in Assignment 2.
- [ ] Add `mywatchlist` URL path so that the user can access http://localhost:8000/mywatchlist
- [ ] Create a model named `MyWatchList` that have attribute as follows: 
    - [ ] `watched` to describe the film has been watched or not
    - [ ] `title` to describe the title of the film
    - [ ] `rating` to describe film ratings in the range of 1 to 5
    - [ ] `release_date` to describe when the film was released
    - [ ] `review` to describe the review for the film
- [ ] Add 10 data minimal for the `MyWatchList` object that has been created above. 
- [ ] Implement a feature to present the data in **point 4** with three formats:  
    - [ ] HTML
    - [ ] XML
    - [ ] JSON 
- [ ] Create routing so the data can be accessed via URL: 
    - [ ] http://localhost:8000/mywatchlist/html to access `mywatchlist` in HTML format.
    - [ ] http://localhost:8000/mywatchlist/xml to access `mywatchlist` in XML format.
    - [ ] http://localhost:8000/mywatchlist/json to access `mywatchlist` in JSON format.
- [ ] Deploy the app to Heroku on the application that you have made so it can be accessed later by your friends via the internet. 
- [ ] Create a `README.md` which contains a link to the Heroku app that you've deployed and answer the following questions:
    - [ ] Explain the difference between JSON, XML, and HTML!
    - [ ] Explain why we need the data delivery in implementing a platform.
    - [ ] Explain how you can implement point 1 to 3 above.
- [ ] Access three URLs in point 6 using Postman, take screenshots, and add them to `README.md`.
- [ ] Create unit test in `tests.py` to test that the three URLs in point 6 can return an `HTTP 200 OK` response.

Note that you've to do this assignment using **different repository** than the tutorial. But, you can **use the Django project in assignment 2 to finish this assignment**

## The Deadline
This assignment has a submission deadline of 22 September 2022 at 12:00 PM. The teaching assistants will check the last commit of your lab assignment repository, so you do not have to submit the repository link into the submission slot.

## Bonus
You will get an extra score on this assignment if you create a feature that displays a message with the following rule:

- [ ] If the number of movies that you've watched is more than or equal to the number of movies that you haven't watched, display the message "Congratulations, you have watched movies a lot!" in HTML form.
- [ ] If the number of movies that you haven't watched is more than the number of movies that you have watched, display the message "Woah, you have not much watched movies!" in HTML form.
