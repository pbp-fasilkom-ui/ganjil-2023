---
sidebar_label: Lab 4
---

# Lab 4: Web Design Using HTML and CSS3

Platform-Based Programming (CSGE602022) - Organized by Faculty of Computer Science, University of Indonesia, Odd Semester 2022/2023

---

## **Learning Objectives**

After finishing this tutorial, students are expected to:
- Understand the HTMl5 tagging.
- Understand the different types of HTML5
- Understand the CSS syntax 
- Understand the static files in Django 
- Understand how to use selector in CSS.

## Introduction to HTML

Please learn and try the HTML by yourself using [this](https://www.w3schools.com/html/default.asp) reference.

You can read the difference between HTML and HTML5 in [this](https://www.geeksforgeeks.org/difference-between-html-and-html5/) reference.

## Introduction to CSS

**What is CSS?**

Cascading Style Sheets (CSS) is a language that used to descibe the design and formatting from a website that written in markup language (e.g. HTML). CSS is useful for making the website more attractive.

You can read [this](https://www.geeksforgeeks.org/difference-between-css-and-css3/) reference to learn about the difference between CSS and CSS3.

**CSS Syntax**

In general, CSS can be written in the following format:

```css
selector {
  properties: value;
}
```

Please learn and try the css by yourself with [this](https://www.w3schools.com/css/) reference.

There are three different ways to write the CSS:

1. **Inline Styles**
2. **Internal Style Sheet**
3. **External Style Sheet**

Please learn about the three types of CSS in [this](https://www.geeksforgeeks.org/types-of-css-cascading-style-sheet/) reference.

Please note that if you're using the External Style Sheet, you need to add `{% load staticfiles %}` tag on your HTML page. The example can be seen on the following code snippet below:

```html
{% load staticfiles %}
<html>
  <head>
    <title>CSS Tutorial Yay</title>
    <link rel="stylesheet" href="{% static 'css/tutorial.css' %}" />
  </head>
  <body>
    <div>
      <h1>CSS Tutorial Yay</h1>
    </div>
    <div id="main">
      <div>
        <p>Published: 04 October 2021</p>
        <h1><a href="">My CSS Tutorial</a></h1>
        <p>Yay, this is a tutorial using CSS!</p>
      </div>
    </div>
  </body>
</html>
```

This things can happened because CSS is a static files in Django. Static files will be covered later on the next section.

**Additional Notes**

If there's more than one style defined for an element, the style that will be applied is the one with the higher priority. The following list is the order of the priority with the number 1 has the higher priority.

1. Inline style
2. External dan internal style sheets
3. Browser default

## Static files in Django
In Django framework, there are files called static files. Static files are the supporting files on a website. The example of static files are the CSS, JavaScript, and images. The settings for static files are located in `settings.py` files. 

```python
  ...
  # Static files (CSS, JavaScript, Images)
  # httpsdocs.djangoproject.comen1.9howtostatic-files
  STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')
  STATIC_URL = 'static'
  ...
```

In `settings.py`, there's a `STATIC_ROOT` variable which specifies the absolute path to the static files directory when running the `collectstatic` command on the project and there's `STATIC_URL` variable which is a publicly accessible URL to get those static files.

The `collectstatic` command is a command to collect the static files from all application so it can  be easily accessed from all application. 

Further explanation about static files you can read in [this](https://docs.djangoproject.com/en/4.1/ref/contrib/staticfiles/) reference.

## Selector in CSS

In this section, you will learn the three selector in CSS, that is element selector, class selector, and ID selector.

1. Element Selector
  
    Element selector using HTML tag as a selector to change the property contained in the tag. 

    ```css
    h1 {
      color: #fca205;
      font-family: "Monospace";
      font-style: italic;
    }
    ```

2. ID Selector
    
    ID selector uses the ID in the HTML tag attribute as the selector.

    You can add the ID attribute in the HTML tag like the example below (ID must be unique):

    ```css
    ...
    <body>
      <div id="header">
        <h1>Tutorial CSS Yay</h1>
      </div>
      ...
    </body>
    ...
    ```

    Then, add the ID as a selector on your CSS file.

    ```css
    #header {
      background-color: #f0f0f0;
      margin-top: 0;
      padding: 20px 20px 20px 40px;
    }
    ```

    You can see the changes that happens. You may try to add another ID selector to change the other properties.

3. Class Selector

    The next selector is class selector. Class selector can be used to beautify the HTML template. Add some class in HTML tag below:

    ```html
    ...
    <div id="main">
        <div class="content_section">
            <p class="date">published: 28 September 2022</p>
            <h2><a href="">My CSS Tutorial</a></h2>
            <p id="content_1">Yay this is my tutorial!</p>
        </div>
        <div class="content_section">
            <p class="date ">published: 29 September 2022</p>
            <h2><a href="">Tutorial CSS mu</a></h2>
            <p id="content_2">Yay, this is a tutorial using CSS!</p>
        </div>
        <div class="content_section">
            <p>published: 30 September 2022</p>
            <h2><a href="">All of this template is tutorial</a></h2>
            <p id="content_3">The tutorial is very useful!</p>
        </div>
    </div>
    ...
    ```

    Then, add the class selector below to your CSS file:

    ```css
    .content_section {
      background-color: #3696e1;
      margin-bottom: 30px;
      color: #000000;
      font-family: cursive;
      padding: 20px 20px 20px 40px;
    }
    ```

    You may try to add the other class selector_ to change the other properties.

The difference between ID selector and class selector is that the ID selector using format `#[id_name]` (always begin with `#`) and class selector using the format `.[class_name]` (always begin with `.`)

To learn more about **CSS Selector Reference**, you can read [this](https://www.w3schools.com/cssref/css_selectors.asp) reference.


## CSS Tips & Tricks

### Get to know the Combinators

After learn about the selector in CSS, you can learn more about combinators. The combinators is a marker that indicates the relationship between elements, classes, or IDs in CSS.

There are 4 combinators in CSS.

1. Descendant selector (_space_)
2. Child selector (>)
3. Adjacent sibling selector (+)
4. General sibling selector (~)

Please learn about the 4 types of combinators in CSS from [this](https://www.w3schools.com/css/css_combinators.asp) reference.

### Get to know the CSS Pseudo-class

Pseudo-class used to defined the specific state from an element. The example of some pesudo-class can be seen below:

* **:active** for choosing the current active element.
* **:checked** for choosing the element that has been checked. 
* **:disabled** for choosing the element that has been disabled.
* **:enabled** for choosing the element that has been enabled.
* **:link** for choosing the link that haven't visited.
* **:hover** for choosing the element when the mouse / cursor is over it.
* **:visited** fpor choosing the link that has been visited.

In general, pseudo-class written in the following format:

```css
selector:pseudo-class {
  properties: value;
}
```

### The Differences between Margin, Border and Padding

You can learn about the difference between margin, border, and padding from [this](https://www.w3schools.com/css/css_boxmodel.asp) reference.

## Introduction to Bootstrap

There are many CSS _framework_ used today, one of them is Bootstrap. Boostrap provide the classes which is often used in the development of a website. The provided class is navbar, card, footer, carousel, and many more. Moreover, Bootstrap also provide many useful features. One of those features is the grid system which is useful for dividing the web pages easily.

To learn more about Bootstrap, you can read [this](https://getbootstrap.com/docs/5.2/getting-started/introduction/) reference.

## Responsive Web Design

Responsive web design is a web design method or system approach that aims to provide a website that looks good on all devices (whether on a desktop, tablet, or mobile phone). Responsive web design doesn't change the content on the website, but only changes the way it is presented on each device to match the screen size and behavior of each device. Responsive web design uses CSS to resize (such as shrinking and enlarging) an element.

To check the implementation of responsive web design on a website, you can access the website and open the `Toggle Device Mode` feature on the browser.

The list below is the keyboard shortcut to access the feature on the Google Chrome browser.

- Windows/Linux : `CTRL + SHIFT + M` 
- Mac : `Command + Shift + M`

To learn more about responsive web design, you can read [this](https://web.dev/responsive-web-design-basics/) reference. 

## Tutorial: Adding Bootstrap in Wishlist Application.

Here's what you need to do to complete this part of the tutorial.

1. Add the lines of code needed for your application to use Bootstrap.

    > Please refer to the information on [this](https://getbootstrap.com/docs/5.2/getting-started/introduction/) page.

2. Feel free to modify the look of your `wishlist` application as creatively as possible using Bootstrap.

## Tutorial: Adding a Navbar to the Entire App Page

Add a *navigation bar* (you can use Bootstrap) to your `wishlist.html` page and display your **name** and **logout button** on the *navigation bar* you created. 

## Additional References

- You can go to [this](https://getbootstrap.com/docs/5.2/components/navbar/) link to see the code you can use to add a *navigation bar* using Bootstrap.
- You can go to [this](https://www.w3schools.com/css/css_navbar.asp) link to see the code that you can use to add a *navigation bar* using CSS manually.

## The Final Words

Congratulations! You have successfully completed Tutorial 4. 😄

As always, don't forget to `add`, `commit`, and `push` your changes to save them into the GitHub repository before you close your work. 😉

## Contributors

- Christopher Ekaputra Loe
- Zefanya Soplantila
- Rafi Indrawan Dirgantara
- Muhammad Athallah
- Zuhal 'Alimul Hadi (EN Translator)

## Credits

This tutorial was developed based on [PBP Odd 2021](https://gitlab.com/PBP-2021/pbp-lab) written by the 2021 Platform-Based Programming Teaching Team ([@prakashdivyy](https://gitlab.com/prakashdivyy)). All tutorials and instructions included in this repository are designed so that students who are taking Platform-Based Programming courses can complete the tutorials during lab sessions.
