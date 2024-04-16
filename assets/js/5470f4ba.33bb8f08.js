"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[2880],{5208:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(5893),i=t(1151);const r={slug:"input-validation-with-java",title:"Input validation with Java",authors:"jaymartin",tags:["Java"]},o="Input Validation with Java",s={permalink:"/blog/input-validation-with-java",editUrl:"https://github.com/jaymartmedia/jaymartmedia.github.io/tree/main/blog/2019-02-27-input-validation-with-java.mdx",source:"@site/blog/2019-02-27-input-validation-with-java.mdx",title:"Input validation with Java",description:"In this article I will be showing you how to perform validation on user input in Java. This article assumes that you have a basic understanding of Java and the Scanner class, and that you already have a compiler or IDE installed. I will be using JGrasp but you can use your favorite enviroment.",date:"2019-02-27T00:00:00.000Z",formattedDate:"February 27, 2019",tags:[{label:"Java",permalink:"/blog/tags/java"}],readingTime:3.09,hasTruncateMarker:!0,authors:[{name:"Jay Martin",title:"Runner of JayMartMedia",url:"https://github.com/jaymartmedia",imageURL:"https://github.com/jaymartmedia.png",key:"jaymartin"}],frontMatter:{slug:"input-validation-with-java",title:"Input validation with Java",authors:"jaymartin",tags:["Java"]},unlisted:!1,prevItem:{title:"Web Scraping with PHP",permalink:"/blog/web-scraping-with-php"}},l={authorsImageUrls:[void 0]},c=[];function u(n){const e={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"In this article I will be showing you how to perform validation on user input in Java. This article assumes that you have a basic understanding of Java and the Scanner class, and that you already have a compiler or IDE installed. I will be using JGrasp but you can use your favorite enviroment."}),"\n",(0,a.jsx)("link",{rel:"stylesheet",href:"/legacy/jmm-video.css"}),"\n",(0,a.jsx)("div",{class:"jmm-video-container",children:(0,a.jsx)("iframe",{class:"jmm-video",src:"https://www.youtube.com/embed/kLPBxtsf-b4",frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["I have written this article in text form in order to save you time. In my experience, reading an article is often faster and/or more convenient (certainly quieter) than watching a video. If you would prefer to view this information in video form, you can click the video above, or ",(0,a.jsx)(e.a,{href:"https://www.youtube.com/watch?v=kLPBxtsf-b4",children:"view the video on YouTube"}),"."]})}),"\n",(0,a.jsx)(e.p,{children:'The purpose of user validation is to make sure that the user inputs a value that is both the correct type and a valid value. For example: the user should not be allowed to center a negative number for their age. The user should also not be allowed to enter a String such as "Hello" for their age. The age must be a positive integer, or float, depending on the use case.'}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:'title="Code to read an int"',children:"// must have imported the scanner class\n// import java.util.*;\npublic static int read_int(Scanner stdin, String prompt){\n  int i = -1;\n  while( i < 0 ){\n    System.out.print(prompt);\n \n    String input = stdin.nextLine();\n \n    try{\n      i = Integer.valueOf(input);\n    } catch (NumberFormatException e) {\n      i = -1;\n    }\n  }\n  return i;\n}// end read_int function\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:'title="Code to read a float"',children:"// must have imported the scanner class\n// import java.util.*;\npublic static float read_float(Scanner stdin, String prompt){\n   float i = -1;\n   while( i < 0 ){\n      System.out.print(prompt);\n \n      String input = stdin.nextLine();\n \n      try{\n         i = Float.valueOf(input);\n      } catch (NumberFormatException e) {\n         i = -1;\n      }\n   }\n   return i;\n}// end read_float function\n"})}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"On line 3"})," the function accepts a scanner object in addition to a string."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"On line 4"})," we set a variable i which will hold our data value returned by the user. We initailize it at an invalid value so that our while loop will run."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"On line 5"})," we continue looping until i is greater than 0. This could easily be changed if we wanted the integer to be in a different range."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"On line 6"})," we ask our user for input by printing the prompt."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"On line 8"})," we accept input as a string using the scanner. Note that this MUST be .nextLine() we cannot use .nextInt() or .nextFloat() or we will get an error."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"On line 11"})," we attempt to convert the input string into an integer inside a try/catch block."]}),"\n",(0,a.jsxs)(e.p,{children:[(0,a.jsx)(e.strong,{children:"On line 13"})," we set the variable i to an invalid value so the while loop will continue to run. Line 13 will only be executed if the input String cannot be converted to an integer."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:'title="Using the read methods"',children:'// sets up a new scanner object\nScanner stdin = new Scanner(System.in);\n \n// calls the read_int function and passes in the scanner object and a text prompt\nint age = read_int(stdin, "Enter your age: ");\n \n// outputs the users age to the console\nSystem.out.println("Your age is: "+age);\n'})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-js",metastring:'title="Full code example"',children:'import java.util.*;\npublic class Demo {\n    public static void main(String[] args) {\n        Scanner stdin = new Scanner(System.in);\n \n        float f = read_float(stdin, "Enter a float");\n \n        System.out.println(f);\n    }\n \n    public static float read_float(Scanner stdin, String prompt) {\n        float i = -1;\n        while (i < 0) {\n            System.out.print(prompt);\n \n            String input = stdin.nextLine();\n \n            try {\n                i = Float.valueOf(input);\n            } catch (NumberFormatException e) {\n                i = -1;\n            }\n        }\n        return i;\n    }\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>o});var a=t(7294);const i={},r=a.createContext(i);function o(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);