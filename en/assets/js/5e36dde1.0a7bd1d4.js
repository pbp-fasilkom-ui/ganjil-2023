"use strict";(self.webpackChunk_pbp_fasilkom_ui_ganjil_2023=self.webpackChunk_pbp_fasilkom_ui_ganjil_2023||[]).push([[594],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)a=s[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),m=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=m(a),u=n,h=d["".concat(o,".").concat(u)]||d[u]||p[u]||s;return a?i.createElement(h,l(l({ref:t},c),{},{components:a})):i.createElement(h,l({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=d;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var m=2;m<s;m++)l[m]=a[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1490:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>r,toc:()=>m});var i=a(7462),n=(a(7294),a(3905));const s={sidebar_label:"Assignment 3"},l="Assignment 3: Implement Data Delivery using Django",r={unversionedId:"tugas/tugas-3",id:"tugas/tugas-3",title:"Assignment 3: Implement Data Delivery using Django",description:"Platform-Based Programming (CSGE602022) - Organized by the Faculty of Computer Science Universitas Indonesia, Odd Term 2022/2023",source:"@site/i18n/en/docusaurus-plugin-content-docs-assignments/current/tugas/tugas-3.md",sourceDirName:"tugas",slug:"/tugas/tugas-3",permalink:"/ganjil-2023/en/assignments/tugas/tugas-3",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Assignment 3"},sidebar:"tutorialSidebar",previous:{title:"Assignment 2",permalink:"/ganjil-2023/en/assignments/tugas/tugas-2"},next:{title:"Assignment 4",permalink:"/ganjil-2023/en/assignments/tugas/tugas-4"}},o={},m=[{value:"Description",id:"description",level:2},{value:"Deadline",id:"deadline",level:2},{value:"Bonus",id:"bonus",level:2}],c={toc:m};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"assignment-3-implement-data-delivery-using-django"},"Assignment 3: Implement Data Delivery using Django"),(0,n.kt)("p",null,"Platform-Based Programming (CSGE602022) - Organized by the Faculty of Computer Science Universitas Indonesia, Odd Term 2022/2023"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"In this assignment, you will implement the concept of data delivery and some other things that you have learned during the lab tutorial."),(0,n.kt)("p",null,"Checklist for this assignment is as follows:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a new app named ",(0,n.kt)("inlineCode",{parentName:"li"},"mywatchlist")," in the Django project that you\ncreated from previous assignment (i.e. Assignment 2)."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add ",(0,n.kt)("inlineCode",{parentName:"li"},"mywatchlist")," URL path so that the user can access http://localhost:8000/mywatchlist"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a model named ",(0,n.kt)("inlineCode",{parentName:"li"},"MyWatchList")," that have attribute as follows:",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"watched")," to describe the film has been watched or not."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"title")," to describe the title of the film."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"rating")," to describe film ratings in the range of 1 to 5."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"release_date")," to describe when the film was released."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,n.kt)("inlineCode",{parentName:"li"},"review")," to describe the review for the film."))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add at least 10 data entries for the ",(0,n.kt)("inlineCode",{parentName:"li"},"MyWatchList")," object that has been\ncreated above."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement a feature to show the data you added in previous step in the\nfollowing formats:",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","HTML"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","XML"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","JSON"))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement URL routing so the data can be accessed via the following URLs:",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/mywatchlist/html to access ",(0,n.kt)("inlineCode",{parentName:"li"},"mywatchlist")," in HTML format."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/mywatchlist/xml to access ",(0,n.kt)("inlineCode",{parentName:"li"},"mywatchlist")," in XML format."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","http://localhost:8000/mywatchlist/json to access ",(0,n.kt)("inlineCode",{parentName:"li"},"mywatchlist")," in JSON format."))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deploy the app to Heroku on the application that you have made so it can be accessed later by your friends via the internet."),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a ",(0,n.kt)("inlineCode",{parentName:"li"},"README.md")," which contains a link to the Heroku app that you've deployed and answer the following questions:",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Explain the difference between JSON, XML, and HTML!"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Explain why we need the data delivery when implementing on a platform!"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Explain how do you complete the tasks in this assignment!"))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Access the three URLs to retrieve all variants of ",(0,n.kt)("inlineCode",{parentName:"li"},"mywatchlist")," data by\nusing ",(0,n.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"Postman")," or similar tools (e.g. ",(0,n.kt)("a",{parentName:"li",href:"https://httpie.io/product"},"HTTPie"),", ",(0,n.kt)("a",{parentName:"li",href:"https://insomnia.rest/"},"Insomnia"),").",(0,n.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Take screenshots of the output from the tool you used and add them to ",(0,n.kt)("inlineCode",{parentName:"li"},"README.md"),".\nCheck ",(0,n.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/basic-syntax/#images-1"},"Markdown Guide"),"\nto learn how to embed image in ",(0,n.kt)("inlineCode",{parentName:"li"},"README.md"),"."))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Implement tests in ",(0,n.kt)("inlineCode",{parentName:"li"},"tests.py")," to verify that all URL routers are able to\nreturn an ",(0,n.kt)("inlineCode",{parentName:"li"},"HTTP 200 OK")," response.")),(0,n.kt)("p",null,"Please remember that ",(0,n.kt)("strong",{parentName:"p"},"the assignment is not the same as the tutorial"),".\nTherefore, complete the assignment in a different Django project.\nReuse the Git repository and Django project from the previous assignment as the starter code for this assignment."),(0,n.kt)("h2",{id:"deadline"},"Deadline"),(0,n.kt)("p",null,"This assignment has a submission deadline of 22 September 2022 at 12:00 PM. The teaching assistants will check the last commit of your lab assignment repository, so you do not have to submit the repository link into the submission slot."),(0,n.kt)("h2",{id:"bonus"},"Bonus"),(0,n.kt)("p",null,"You will get an extra score on this assignment if you create a feature that displays a message with the following rule:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If the number of movies that you've watched is more than or equal to the number of movies that you haven't watched,\ndisplay a message in the web page that congrulates you for having watched so many movies.\nFor example: ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"<p>Congratulations, you have watched a lot of movies!</p>"))),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","If the number of movies that you haven't watched is more than the number of movies that you have watched,\ndisplay a message in the web page that reminds you to watch more movies.\nFor example: ",(0,n.kt)("em",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"em"},"<p>Woah, you need to watch more movies!</p>")))))}p.isMDXComponent=!0}}]);