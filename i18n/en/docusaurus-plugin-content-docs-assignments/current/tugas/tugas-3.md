---
sidebar_label: Assignment 3
---

# Assignment 3: Implement Data Delivery using Django

Platform-Based Programming (CSGE602022) - Organized by the Faculty of Computer Science Universitas Indonesia, Odd Term 2022/2023

---

## Description

In this assignment, you will implement the concept of data delivery and some other things that you have learned during the lab tutorial.

Checklist for this assignment is as follows:

-  [ ] Create a new app named `mywatchlist` in the Django project that you
   created from previous assignment (i.e. Assignment 2).
-  [ ] Add `mywatchlist` URL path so that the user can access http://localhost:8000/mywatchlist
-  [ ] Create a model named `MyWatchList` that have attribute as follows:
   -  [ ] `watched` to describe the film has been watched or not.
   -  [ ] `title` to describe the title of the film.
   -  [ ] `rating` to describe film ratings in the range of 1 to 5.
   -  [ ] `release_date` to describe when the film was released.
   -  [ ] `review` to describe the review for the film.
-  [ ] Add at least 10 data entries for the `MyWatchList` object that has been
   created above.
-  [ ] Implement a feature to show the data you added in previous step in the
   following formats:
   -  [ ] HTML
   -  [ ] XML
   -  [ ] JSON
-  [ ] Implement URL routing so the data can be accessed via the following URLs:
   -  [ ] http://localhost:8000/mywatchlist/html to access `mywatchlist` in HTML format.
   -  [ ] http://localhost:8000/mywatchlist/xml to access `mywatchlist` in XML format.
   -  [ ] http://localhost:8000/mywatchlist/json to access `mywatchlist` in JSON format.
-  [ ] Deploy the app to Heroku on the application that you have made so it can be accessed later by your friends via the internet.
-  [ ] Create a `README.md` which contains a link to the Heroku app that you've deployed and answer the following questions:
   -  [ ] Explain the difference between JSON, XML, and HTML!
   -  [ ] Explain why we need the data delivery when implementing on a platform!
   -  [ ] Explain how do you complete the tasks in this assignment!
-  [ ] Access the three URLs to retrieve all variants of `mywatchlist` data by
   using [Postman][] or similar tools (e.g. [HTTPie][], [Insomnia][]).
   -  [ ] Take screenshots of the output from the tool you used and add them to `README.md`.
      Check [Markdown Guide](https://www.markdownguide.org/basic-syntax/#images-1)
      to learn how to embed image in `README.md`.
-  [ ] Implement tests in `tests.py` to verify that all URL routers are able to
   return an `HTTP 200 OK` response.

Please remember that **the assignment is not the same as the tutorial**.
Therefore, complete the assignment in a different Django project.
Reuse the Git repository and Django project from the previous assignment as the starter code for this assignment.

## Deadline

This assignment has a submission deadline of 22 September 2022 at 12:00 PM. The teaching assistants will check the last commit of your lab assignment repository, so you do not have to submit the repository link into the submission slot.

## Bonus

You will get an extra score on this assignment if you create a feature that displays a message with the following rule:

- [ ] If the number of movies that you've watched is more than or equal to the number of movies that you haven't watched,
  display a message in the web page that congrulates you for having watched so many movies.
  For example: _`<p>Congratulations, you have watched a lot of movies!</p>`_
- [ ] If the number of movies that you haven't watched is more than the number of movies that you have watched,
  display a message in the web page that reminds you to watch more movies.
  For example: _`<p>Woah, you need to watch more movies!</p>`_

[HTTPie]: https://httpie.io/product
[Insomnia]: https://insomnia.rest/
[Postman]: https://www.postman.com/
