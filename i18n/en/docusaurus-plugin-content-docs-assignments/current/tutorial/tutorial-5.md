---
sidebar_label: "Lab 5"
---

import CodeEditor from "@site/src/components/CodeEditor"
import { ajaxJQueryExample } from "@site/src/data/examples"

# Lab 5: JavaScript and AJAX

Platform-Based Programming (CSGE602022) - Organized by Faculty of Computer Science,
University of Indonesia, Odd Semester 2022/2023

---

## Learning Objectives

After completing this lab, students are expected to understand:

- Usage of JavaScript functions in front-end development
- Basic usage of JavaScript
- Usage of AJAX

## Introduction to JavaScript

### What is JavaScript?

JavaScript is a cross-platform high-level multi-paradigm programming language platform. Its
multi-paradigm nature makes JavaScript support the concepts of object-oriented programming,
imperative programming, and functional programming. JavaScript itself is an
implementation of ECMAScript, which is the core of the JavaScript language. Some
other implementations of ECMAScript that are similar to JavaScript include JScript (Microsoft) and ActionScript (Adobe).

JavaScript, along with HTML and CSS, are the three main technologies used in web development.
The advantages of using JavaScript in web development, basically, JavaScript can manipulate
web pages dynamically and provide more interaction to users. Therefore, almost all
modern websites today use JavaScript in their web pages to provide the best experience to users.
Some examples of things we can do with using JavaScript include displaying information based
on time, recognizing the type of browser type, validating forms or data, creating cookies
(not "that" cookies, but [cookies](https://en.wikipedia.org/wiki/HTTP_cookie)),
changing the styling and CSS of an element dynamically, etc.

In web development, JavaScript code is generally used on the client-side of the web 
(client-side JavaScript) but some types of JavaScript code are currently used on the
server-side of a web (server-side JavaScript) such as **node.js**. The term client-side
indicates that the JavaScript code will be executed or run on the user's browser,
not on the website's server. This means that the complexity of the JavaScript code will not affect the
performance of the website server but affects the performance of the browser and computer; the more
the more complex the JavaScript code is, the more computer memory is consumed by the browser.

In this course, we will only focus on JavaScript client-side code.

### How are the stages of JavaScript executed by the browser?

Take a look at the following diagram.

![javascript-works](https://preview.ibb.co/e258TG/Screenshot_from_2017_10_31_14_29_13.png)

After the browser downloads the HTML web page then right where the tag `<script></script>`
tag is located, the browser will look at the script tag, whether the tag contains an embedded
JavaScript code or referencing an external JavaScript file. If it refers to an external
JavaScript file, then the browser will download the file first.

**How to write JavaScript**

JavaScript can be written with **embedded JavaScript** or **external JavaScript**.
JavaScript code can be defined or written as embedded in an HTML file or separately
in a separate file. If it is written in a separate file from HTML, the file extension
used for JavaScript files is `.js`. Here are some examples of how JavaScript is defined.

JavaScript can be placed in the head or body of an HTML page. In addition, JavaScript code
**MUST** be inserted between the `<script>` and `</script>` tags. You can put more than one
tag script containing JavaScript in an HTML file.

**Embedded JavaScript in HTML**

`index.html`

```html
<script type="text/JavaScript">
  alert("Hello World!");
</script>
```

**External JavaScript in HTML**

`index.html`

```html
<script type="text/JavaScript" src="js/script.js"></script>
```

`js/script.js`

```javascript
alert("Hello World!");
```

In the external JavaScript file, the `<script>` tag no longer needs to be added.

Separating JavaScript in a separate file can provide several advantages such as the code can
be code can be used in other HTML files, JavaScript and HTML code are not mixed together so
that there is more focus when developing applications, as well as developing the application,
as well as speeding up page loading. The `.js` file will usually be cached by the browser so
that if we open the same page and there are no changes to the `.js` file, then the file, the
browser will not request the `.js` file to the server again, but will use the file from the
previously stored cache file that has been saved before.

### JavaScript Execution

After the JavaScript has been downloaded completely, the browser will immediately
start to execute the JavaScript code. If the code is NOT event-triggered, then
the code is executed immediately. If the code is event-triggered, then the code
will only be executed if the defined event is triggered.

```javascript
// immediately executed
alert("Hello World");

// immediately executed
var obj = document.getElementById("object");
// directly executed, adds an onclick event handler for the object element
obj.onclick = function () {
  // only executed if the 'object' element is clicked
  alert("You just clicked the object!");
};
```

### JavaScript Syntax

**Variables**

Defining variables in JavaScript is quite easy. An example would be as follows.

```javascript
var example = 0; // var example is a number
var example = "example"; // var example is a string
var example = true; // var example is a boolean
```

JavaScript can accommodate many data types; from strings, integers, to even objects.
Unlike Java where the data type marking is differentiated by the head variable (for
example, if you want to create a variable with data type `int`, then the syntax will
be like `int x = 9`), JavaScript has the character of a loosely typed or dynamic language,
i.e. you don't need to write the type of data in the head variable and JavaScript will
automatically read your data type based on the standardbased on existing standards
(as in the example above).

There are some rules for choosing indentifiers or variable names in JavaScript.
The first character MUST be an alphabet, underscore (\_), or dollar character ($).
In addition, JavaScript identifiers are case sensitive.

**String Concatenation**

In JavaScript, we can also concatenate a `string` with another `string` just like in Java.

```javascript
var str1 = "PBP" + " " + "Fun";
var str2 = "PBP";
var str3 = "Fun";
var str4 = str2 + " " + str3;
var str5 = "Fun";
var str6 = `PBP${str5}`; // Has the same result as "PBP" + " " + str5
```

### Javascript Scope

**Local Variables**

Variables defined in functions are local,
so they can only be accessed by code within the function.

```javascript
// code outside the thisFunction() function cannot access the courseName variable
function thisFunction() {
  var courseName = "PBP";
  // code inside this function can access the courseName variable
}
```

**Global Variables**

Variables defined **OUTSIDE** the function are global
and can be accessed by other code in the JavaScript file.

```javascript
var courseName = "PBP";
function thisFunction() {
  // code inside this function can access the courseName variable
}
```

**Auto Global Variable**

A value that is assigned to an undeclared variable automatically
becomes a global variable even if the variable is inside a function.

```javascript
thisFunction(); // thisFunction() function needs to be called first
console.log(courseName); // print "PBP" in the JavaScript console
function thisFunction() {
  courseName = "PBP";
}
```

**Accessing Global Variables from HTML**

You can access variables that reside in a JavaScript file
file in the HTML file that downloads the JavaScript file.

```html
...
<input type="text" onclick="this.value=courseName" />
...
```

```javascript
...
var courseName = "PBP";
...
```

### Function and Event

A function is a group of codes that can be called anywhere in the
(similar to `method` in Java). This reduces the redundancy of existing code
(less repeated same code). In addition, function in JavaScript is very useful
for dynamically calling elements. A function can be called fellow function
and can also be called because of an event (explained below).
For example, here is the code in `index.html`.

```html
...
<input type="button" value="magicButton" id="magicButton" onclick="hooray();" />
...
```

Then here is the code in `javascript.js`.

```javascript
...
function hooray(){
    alert("Yahoo!");
}
...
```

When the `magicButton` is pressed, the `onclick` function will execute the `hooray()` function
in `javascript.js`, and then pop up the appropriate alert that has been assigned before.

The `onclick` code is actually an example of a JavaScript capability called event.
An event is a JavaScript capability to create a dynamic website. The meaning of `onclick`
is to indicate what JavaScript will do if the element is pressed. In addition,
event is usually given a function that is useful as commands for JavaScript.
In addition, there are many other examples of event such as `onchange`,
`onmouseover`, `onmouseout`, and so on which you can read
[here](https://www.tutorialspoint.com/javascript/javascript_events.html).

### JavaScript HTML & CSS DOM

**HTML DOM**

The HTML DOM (Document Object Model) is a the standard on how to convert,
fetch, and remove HTML elements. HTML DOM can be accessed via JavaScript
or any other programming language. Full details can be seen
[here](https://www.w3schools.com/js/js_htmldom.asp).

Here's an example implementation.

```html
...
<div>
  <p onclick="myFunction()" id="demo">Example of HTML DOM</p>
      
</div>
...
```

```javascript
...
    function myFunction() {
document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
    }
...
```

**CSS DOM**

Similar to the HTML DOM, the CSS DOM can change CSS dynamically via JavaScript.
Full details can be found [here](https://www.w3schools.com/js/js_htmldom_css.asp).

Here is an example.

`index.html`

```html
...
<p id="blueText" onclick="changeColor()">Click me v2</p>
...
```

`javascript.js`

```javascript
...
function changeColor(){
    document.getElementById("blueText").style.color="blue";
}
...
```

## AJAX Introduction

AJAX stands for **A**synchronous **J**avaScript **A**nd **X**ML.

AJAX is not a programming language. AJAX uses the browser to request data from the web server and JavaScript and HTML DOM to display the data. AJAX can use XML to send data but can also use text or JSON. AJAX makes web pages update data asynchronously by sending data to the server behind the scenes, meaning we can update some data elements on the page without having to reload the entire page.

Here is how AJAX works.

![ajax-works](https://www.w3schools.com/js/pic_ajax.gif)

1. An event occurs on a web page (for example the submit data button is pressed)
2. An `XMLHttpRequest` object created by JavaScript
3. `XMLHttpRequest` object sends request to server
4. The server processes the request
5. The server returns the response back to the web page
6. Response is read by JavaScript
7. The next action will be triggered by JavaScript according to the steps made (for example updating the data on the page)

You can use `jQuery` to do AJAX. JQuery is a JavaScript library created for easy access to some of the *Core APIs* provided by browsers. The following is an example of using JQuery to make AJAX calls.

<CodeEditor outputHeight="50vh" defaultValue={ajaxJQueryExample} />

Apart from that, you can also do AJAX in modern browsers by using the `fetch()` function provided by JavaScript. The use of `fetch()` to make AJAX calls can be seen at the following link: [https://www.w3schools.com/jsref/api_fetch.asp](https://www.w3schools.com/jsref/api_fetch.asp )

## Tutorial

You are required to add AJAX functionality to the `wishlist` project created in Tutorial 1.

- [ ] Create a new template named `wishlist_ajax.html` with the same contents as `wishlist.html`
- [ ] Create a new view that points to the `wishlist_ajax.html` page. Also add path `/wishlist/ajax` to access the view.
- [ ] Implement AJAX on the `wishlist_ajax.html` . page
  - [ ] Take all `wishlist` data using **AJAX GET**. You can use the JSON endpoints created in Tutorial 2 as the data source.
  - [ ] Create a `form` to add Wishlist Items using **AJAX POST**.
    - [ ] Create a new view that accepts JSON data and adds a new ItemWishlist to the database.
    - [ ] Add path `/wishlist/ajax/submit` which points to the view you have created.
    - [ ] Use `jQuery` or `fetch()` to submit form data asynchronously to the created path.
    - [ ] Refresh ItemWishlist on table asynchronously to show added item without reloading whole page.

<u>You must use AJAX when implementing this task. Submissions that do not use AJAX **are not graded**.</u>

## Bonus: Web Storage

With local storage, web applications can store data locally in the user's browser.
This is useful if you are using front-end frameworks such as React or Vue,
as the ability to use cookies on these frameworks is limited.
Prior to HTML5, application data had to be stored in cookies (included in every server request).
Local storage is more secure and large amounts of data can be stored locally without affecting website performance.
Unlike cookies, the storage limit is much larger (at least 5MB) and the stored information is never transferred to the server.
Local storage is per origin (per domain and protocol). All pages (from one origin) can store and access the same data.

There are 2 ways to store data using web storage.

- `window.localStorage` - save data without expiration date

- `window.sessionStorage` - stores data for one session (data is lost when browser tab is closed)

**localStorage Object**

The `localStorage` object stores data without an expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

Here is an example implementation.

`index.html`

```html
...
<p><button onclick="clickCounter()" type="button">Click me!</button></p>
<div id="result"></div>
<p>Click the button to see the counter increase.</p>
<p>
  Close the browser tab (or window), and try again,
  and the counter will continue to count (is not reset).
</p>
...
```

`javascript.js`

```javascript
...
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
...
```

If the page is executed, when the button is pressed, the click count will increase.
When the browser is closed and we reopen the previous page, it can be seen that
the calculation of the click count will continue from the previous one.

**sessionStorage Object**

The `sessionStorage` object works in a similar way to `localStorage` (to try `sessionStorage`, please use the previous code but replace the `localStorage` object with `sessionStorage`). However if the browser is closed and the previous page is reopened, click count will restart from 0.

To read more about HTML5 WebStorage, please read the following references:
[HTML5 WebStorage](http://www.w3im.com/en/html/html5_webstorage.html).

## Reference

1. [JavaScript](https://www.w3schools.com/js/default.asp)
2. [jQuery](https://www.w3schools.com/jquery/default.asp)
3. [PBP-2017 Lab 6](https://gitlab.com/PPW-2017/ppw-lab/-/blob/master/lab_instruction/lab_6/README.md)
4. [PBP-2021 Lab 5](https://gitlab.com/PBP-2021/pbp-lab/-/tree/master/lab_instruction/lab_5)
5. [TheCatAPI](https://docs.thecatapi.com/)

## The final word
Congratulations, you've completed the last Django tutorial! Don't forget to *add, commit, push* with `git`.

## Contributor
- [DRY] Adrian Ardizza
- [FAR] Muhammad Haqqi Al Farizi
- [VS] Vincent Suryakim
- [ZKA] Zidan Kharisma Adidarma
- [LAH] Muhammad Athallah (Proofreader)
- [LAN] Firlandi Althaf Rizqi Ansyari (Translator)