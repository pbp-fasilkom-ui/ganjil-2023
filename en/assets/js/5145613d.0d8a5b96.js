"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[884],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var r=n.createContext({}),p=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),u=i,k=d["".concat(r,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),o=a(2556);const s={sidebar_label:"Assignment 4"},l="Assignment 4: Implementing Forms and Authentication Using Django",r={unversionedId:"tugas/tugas-4",id:"tugas/tugas-4",title:"Assignment 4: Implementing Forms and Authentication Using Django",description:"Platform-Based Programming (CSGE602022) - Organized by Faculty of Computer Science, University of Indonesia, Odd Term 2022/2023",source:"@site/i18n/en/docusaurus-plugin-content-docs-assignments/current/tugas/tugas-4.md",sourceDirName:"tugas",slug:"/tugas/tugas-4",permalink:"/ganjil-2023/en/assignments/tugas/tugas-4",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Assignment 4"},sidebar:"tutorialSidebar",previous:{title:"Assignment 3",permalink:"/ganjil-2023/en/assignments/tugas/tugas-3"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Deadline",id:"deadline",level:2},{value:"Bonus",id:"bonus",level:2}],m={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"assignment-4-implementing-forms-and-authentication-using-django"},"Assignment 4: Implementing Forms and Authentication Using Django"),(0,i.kt)("p",null,"Platform-Based Programming (CSGE602022) - Organized by Faculty of Computer Science, University of Indonesia, Odd Term 2022/2023"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"In this assignment, you will implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"<form>")," element, authentication concepts, and some of the things you learned during the lab tutorial."),(0,i.kt)("p",null,"The checklist for this assignment is as follows:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Create a new application called ",(0,i.kt)("inlineCode",{parentName:"p"},"todolist")," in the previously deployed Django task project.")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Add the ",(0,i.kt)("em",{parentName:"p"},"path")," ",(0,i.kt)("inlineCode",{parentName:"p"},"todolist")," so that users can access http://localhost:8000/todolist.")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," model that has the following attributes:"),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," to associate the task with the user who created the task."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"You can use the model type ",(0,i.kt)("inlineCode",{parentName:"p"},"models.ForeignKey")," with the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"User"),". To learn more about ",(0,i.kt)("inlineCode",{parentName:"p"},"ForeignKey")," in Django, you can read the Django documentation (or click ",(0,i.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.1/ref/models/fields/#foreignkey"},"here"),")."))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"p"},"date")," to describe the date the task was created.")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," to describe the title of the task.")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," to describe the description of the task.")))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Implement the registration, login, and logout forms so that users can use ",(0,i.kt)("inlineCode",{parentName:"p"},"todolist")," properly.")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"todolist")," main page that contains the user's username, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add New Task")," button, the logout button, and a table containing the task creation date, task title, and task description.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Create a form page for task creation. The only data the user needs to enter is the task title and task description."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"You can read Django's documentation on ",(0,i.kt)("inlineCode",{parentName:"p"},"Forms")," ","[here]"," (",(0,i.kt)("a",{parentName:"p",href:"https://docs.djangoproject.com/en/4.1/topics/forms/"},"https://docs.djangoproject.com/en/4.1/topics/forms/"),")."))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"routing")," so that some functions can be accessed via the following URL:"),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/todolist contains the main page containing the task table."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/todolist/login contains the login form."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/todolist/register contains the account registration form."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/todolist/create-task contains the task creation form."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/todolist/logout contains the logout mechanism."))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Deploy your project to the Heroku that you have created so that it can later be accessed by your friends via the Internet.")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Create ",(0,i.kt)("strong",{parentName:"p"},"two")," user accounts and ",(0,i.kt)("strong",{parentName:"p"},"three")," dummy data using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Task")," model on each account.")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"todolist")," folder that contains the link to your deployed Heroku application and the answers to the following questions:"),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","What does ",(0,i.kt)("inlineCode",{parentName:"li"},"{% csrf_token %}")," do in the ",(0,i.kt)("inlineCode",{parentName:"li"},"<form>"),' element? What happens if there is no such "code snippet" in the ',(0,i.kt)("inlineCode",{parentName:"li"},"<form>")," element?"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Can we create the ",(0,i.kt)("inlineCode",{parentName:"li"},"<form>")," element manually (without using a generator like ",(0,i.kt)("inlineCode",{parentName:"li"},"{{ form.as_table }}"),")? Explain generally how to create ",(0,i.kt)("inlineCode",{parentName:"li"},"<form>")," manually."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Describe the data flow process from the submission made by the user through the HTML form, data storage in the database, until the appearance of the data that has been stored in the HTML template."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Explain how you implement the checklist above.")))),(0,i.kt)("h2",{id:"deadline"},"Deadline"),(0,i.kt)("p",null,"Deadline for Assignment 4: ",(0,i.kt)(o.Z,{deadline:new Date("29 Se, 2022 12:00 GMT+7"),mdxType:"Countdown"})),(0,i.kt)("p",null,"The teaching assistant will check ",(0,i.kt)("strong",{parentName:"p"},"the last commit")," of the assignment repository, so you do not need to submit the repository link into the submission slot."),(0,i.kt)("h2",{id:"bonus"},"Bonus"),(0,i.kt)("p",null,"You will get bonus marks on this assignment if you create the following features."),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add an ",(0,i.kt)("inlineCode",{parentName:"li"},"is_finished")," attribute to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Task")," model (with the default value of ",(0,i.kt)("inlineCode",{parentName:"li"},"False"),") and create two new columns in the task table containing the completion status of the task and a button to change the completion status of a task to ",(0,i.kt)("inlineCode",{parentName:"li"},"Finished")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"Unfinished"),"."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add a new column to the task table containing a button to delete a task.")),(0,i.kt)("p",null,"Both features above must be implemented (not just a button, but these features must be able to perform the desired behavior) if you want to get bonus points."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Motivation: By completing the bonus features, you have learned the basics of CRUD in Django. \ud83d\ude09")))}d.isMDXComponent=!0},2556:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294);const i=e=>{let{deadline:t}=e;const a=(e=>{const[t,a]=n.useState({day:0,hour:0,minute:0,second:0});return n.useEffect((()=>{const t=setInterval((()=>{const t=Date.now(),n=e.getTime();if(n<t)return a({day:0,hour:0,minute:0,second:0});let i=(n-t)/1e3,o=Math.floor(i/86400);i%=86400;let s=Math.floor(i/3600);i%=3600;let l=Math.floor(i/60);i%=60;let r=Math.floor(i);a({day:o,hour:s,minute:l,second:r})}),1e3);return()=>clearInterval(t)}),[]),t})(t);return n.createElement("p",null,t.toLocaleString("id-ID",{dateStyle:"long",timeStyle:"long"}),n.createElement("span",null,"\xa0(",a.day," days ",a.hour," hours ",a.minute," minutes ",a.second," seconds left)"))}}}]);