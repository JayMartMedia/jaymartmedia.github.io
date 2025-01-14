"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[7074],{3874:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(5893),i=t(1151);const a={slug:"call-chatgpt-from-node-js",title:"Call ChatGPT From NodeJS",authors:"jaymartin",tags:["AI","OpenAI","ChatGPT","NodeJS"],toc_max_heading_level:4},r=void 0,s={permalink:"/blog/call-chatgpt-from-node-js",editUrl:"https://github.com/jaymartmedia/jaymartmedia.github.io/tree/main/blog/2024-11-22-call-chatgpt-api-from-node.md",source:"@site/blog/2024-11-22-call-chatgpt-api-from-node.md",title:"Call ChatGPT From NodeJS",description:"In this article I show you how to call the ChatGPT/OpenAI AI model from inside NodeJS.",date:"2024-11-22T00:00:00.000Z",formattedDate:"November 22, 2024",tags:[{label:"AI",permalink:"/blog/tags/ai"},{label:"OpenAI",permalink:"/blog/tags/open-ai"},{label:"ChatGPT",permalink:"/blog/tags/chat-gpt"},{label:"NodeJS",permalink:"/blog/tags/node-js"}],readingTime:6.255,hasTruncateMarker:!0,authors:[{name:"Jay Martin",title:"Runner of JayMartMedia",url:"https://github.com/jaymartmedia",imageURL:"https://github.com/jaymartmedia.png",key:"jaymartin"}],frontMatter:{slug:"call-chatgpt-from-node-js",title:"Call ChatGPT From NodeJS",authors:"jaymartin",tags:["AI","OpenAI","ChatGPT","NodeJS"],toc_max_heading_level:4},unlisted:!1,prevItem:{title:"Convert a Video to GIF with FFMPEG",permalink:"/blog/convert-a-video-to-gif-with-ffmpeg"},nextItem:{title:"Running Llama AI Model Locally",permalink:"/blog/running-llama-ai-model-locally"}},l={authorsImageUrls:[void 0]},c=[{value:"Overview",id:"overview",level:2},{value:"Create a new NPM project",id:"create-a-new-npm-project",level:2},{value:"Setup Node script",id:"setup-node-script",level:2},{value:"Create OpenAI account, purchase credits, and create API key",id:"create-openai-account-purchase-credits-and-create-api-key",level:2},{value:"Use the API key in the Node script",id:"use-the-api-key-in-the-node-script",level:2},{value:"Changing the model and adjusting the prompt",id:"changing-the-model-and-adjusting-the-prompt",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Common issues",id:"common-issues",level:2},{value:"Token Not found",id:"token-not-found",level:3},{value:"No funds",id:"no-funds",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"In this article I show you how to call the ChatGPT/OpenAI AI model from inside NodeJS."}),"\n",(0,o.jsx)(n.p,{children:"This could be useful if you want to build a website or CLI tool that takes advantage of an AI model."}),"\n",(0,o.jsx)("link",{rel:"stylesheet",href:"/legacy/jmm-video.css"}),"\n",(0,o.jsx)("div",{class:"jmm-video-container",children:(0,o.jsx)("iframe",{class:"jmm-video",src:"https://www.youtube.com/embed/dWZkQdD9hdE",frameborder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["I have written this article in text form in order to save you time. In my experience, reading an article is often faster and/or more convenient (certainly quieter) than watching a video. If you would prefer to view this information in video form, you can click the video above, or ",(0,o.jsx)(n.a,{href:"https://www.youtube.com/watch?v=dWZkQdD9hdE",children:"view the video on YouTube"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsxs)(n.p,{children:["We'll start out by setting up a new NPM project. Then we'll add the OpenAI library to our project and copy some code from their quickstart guide (",(0,o.jsx)(n.a,{href:"https://platform.openai.com/",children:"https://platform.openai.com/"}),"). And finally we'll create an OpenAI account, create an API key, and buy some credits so we can use the API. I will say upfront, unfortunately we will need to buy at least $5 worth of credits to use the API. The nice thing is, those credits should last for many thousands of API calls (",(0,o.jsx)(n.a,{href:"https://openai.com/api/pricing/",children:"https://openai.com/api/pricing/"}),")."]}),"\n",(0,o.jsx)(n.h2,{id:"create-a-new-npm-project",children:"Create a new NPM project"}),"\n",(0,o.jsx)(n.p,{children:"You will need to have Node and NPM installed in order to complete this step."}),"\n",(0,o.jsx)(n.p,{children:"I recommend using NVM or FNM to manage Node and NPM"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["NVM (Linux/Unix): ",(0,o.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"https://github.com/nvm-sh/nvm"})]}),"\n",(0,o.jsxs)(n.li,{children:["NVM (Windows): ",(0,o.jsx)(n.a,{href:"https://github.com/coreybutler/nvm-windows",children:"https://github.com/coreybutler/nvm-windows"})]}),"\n",(0,o.jsxs)(n.li,{children:["FNM: ",(0,o.jsx)(n.a,{href:"https://github.com/Schniz/fnm",children:"https://github.com/Schniz/fnm"})]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Once you have Node/NPM installed, make a new directory where you would like to put your code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"mkdir openai-example\ncd openai-example\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then create the NPM project"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npm init -y\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setup-node-script",children:"Setup Node script"}),"\n",(0,o.jsxs)(n.p,{children:["You can refer to the OpenAI quickstart guide for the latest instructions, or follow the steps below: ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/docs/quickstart",children:"https://platform.openai.com/docs/quickstart"})]}),"\n",(0,o.jsx)(n.p,{children:"Add the openai library:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npm install openai\n"})}),"\n",(0,o.jsx)(n.p,{children:"Create the script in a file called main.js:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="main.js"',children:'import OpenAI from "openai";\n\nconst openai = new OpenAI();\n\nconst completion = await openai.chat.completions.create({\n    model: "gpt-4o-mini",\n    messages: [\n        { role: "system", content: "You are a helpful assistant." },\n        {\n            role: "user",\n            content: "Write a haiku about recursion in programming.",\n        },\n    ],\n});\n\nconsole.log(completion.choices[0].message);\n'})}),"\n",(0,o.jsx)(n.p,{children:"Add type module, and a start script to the package.json file."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",metastring:'title="package.json"',children:'...\n    "type": "module",\n    "scripts": {\n        "start": "node main.js"\n    },\n...\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now run the script by running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npm run start\n"})}),"\n",(0,o.jsx)(n.p,{children:"You should see an error mentioning that there is no token set. We'll do that in the next step."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"OpenAIError: The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).\n"})}),"\n",(0,o.jsx)(n.h2,{id:"create-openai-account-purchase-credits-and-create-api-key",children:"Create OpenAI account, purchase credits, and create API key"}),"\n",(0,o.jsx)(n.p,{children:"Now we need to create an account, purchase some credits, and get an API key in order to authenticate with the OpenAI API."}),"\n",(0,o.jsx)(n.p,{children:"To do this:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Create an OpenAI account by","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Going to ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/",children:"https://platform.openai.com/"})]}),"\n",(0,o.jsx)(n.li,{children:"Click on Sign Up or Log In"}),"\n",(0,o.jsx)(n.li,{children:"Create an account or connect with with one of the other supported accounts"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Purchase some credits","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Click on the gear cog in the top right corner to open your settings"}),"\n",(0,o.jsx)(n.li,{children:'Click "Billing" on the left sidebar'}),"\n",(0,o.jsx)(n.li,{children:"Add to credit balance"}),"\n",(0,o.jsxs)(n.li,{children:["Purchase $5 or more worth of credits. Unfortunately OpenAI no longer offers free promotional credits. You can view pricing info for API calls here: ",(0,o.jsx)(n.a,{href:"https://openai.com/api/pricing/",children:"https://openai.com/api/pricing/"})]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Create an API secret key","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:'Click "API keys" on the left sidebar'}),"\n",(0,o.jsx)(n.li,{children:'Click "+ Create new secret key" in the top right corner'}),"\n",(0,o.jsx)(n.li,{children:"Enter a name for your API secret key"}),"\n",(0,o.jsx)(n.li,{children:'Click "Create secret key"'}),"\n",(0,o.jsx)(n.li,{children:"Copy the API secret key"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:['Copy the API key and paste it into a ".env" file (yes, the filename should start with a period/full-stop)',"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",metastring:'title=".env"',children:"OPENAI_API_KEY=your_api_key_here\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"use-the-api-key-in-the-node-script",children:"Use the API key in the Node script"}),"\n",(0,o.jsx)(n.p,{children:'Add the dotenv package to load the ".env" file values as environment variables (you could also add as a system environment variable):'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npm install dotenv\n"})}),"\n",(0,o.jsx)(n.p,{children:'Import dotenv and call the config method in the "main.js" file:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'{2,4} title="main.js"',children:'import OpenAI from "openai";\nimport dotenv from "dotenv";\n\ndotenv.config();\nconst openai = new OpenAI();\n...\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now run the script by running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"npm run start\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The script should now succeed and display the response from ChatGPT. If the script returns with an error then you can refer to the ",(0,o.jsx)(n.a,{href:"#common-issues",children:"common issues"})," section."]}),"\n",(0,o.jsx)(n.h2,{id:"changing-the-model-and-adjusting-the-prompt",children:"Changing the model and adjusting the prompt"}),"\n",(0,o.jsxs)(n.p,{children:["You likely want the model to do something other than generating a haiku about recursion. You can do this by changing the prompts that are passed to the model. The ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/text-generation#system-messages",children:"system message"})," is typically set by the developer who is building the application. The ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/text-generation#user-messages",children:"user message"})," is typically passed from the user of the application. You can read more about prompt engineering best practices in the ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/docs/guides/prompt-engineering",children:"prompt engineering section of the"})," OpenAI documentation."]}),"\n",(0,o.jsxs)(n.p,{children:["You may also want to change the AI model that is being used. You can do this by changing the model field. Available models can be found in the ",(0,o.jsx)(n.a,{href:"https://platform.openai.com/docs/models",children:"models section of the"})," OpenAI documentation."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="main.js"',children:'...\nconst userPrompt = "programming"; // Could be populated from cli arguments, HTTP request body, or other user input\nconst completion = await openai.chat.completions.create({\n    model: "gpt-4o-mini", // Change the model (changes performance and pricing): https://platform.openai.com/docs/models\n    messages: [\n        { role: "system", content: "You are a helpful joke maker who tells people jokes. Generate me a joke about the following topic" }, // System prompt\n        {\n            role: "user",\n            content: userPrompt, // Prompt that comes from the end user\n        },\n    ],\n});\n...\n'})}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(n.p,{children:"In this article we created an NPM project and Node script which uses the OpenAI library to interact with the ChatGPT AI model. We also created an OpenAI account and API key to authenticate with the API. Finally we ran a simple script which makes a call to ChatGPT via the OpenAI library and returns a response to the console."}),"\n",(0,o.jsx)(n.h2,{id:"common-issues",children:"Common issues"}),"\n",(0,o.jsx)(n.h3,{id:"token-not-found",children:"Token Not found"}),"\n",(0,o.jsx)(n.p,{children:"If you don't have a token, or your token is set incorrectly, you may see an error similar to this one:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"OpenAIError: The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option, like new OpenAI({ apiKey: 'My API Key' }).\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you see this message then you will need to ",(0,o.jsx)(n.a,{href:"#create-openai-account-purchase-credits-and-create-api-key",children:'generate a token, set it in your ".env" file'})," and ",(0,o.jsx)(n.a,{href:"#use-the-api-key-in-the-node-script",children:"use the token in your script"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Things to check:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Ensure that the ".env" file is named correctly and placed next to the package.json file'}),"\n",(0,o.jsxs)(n.li,{children:['Ensure that the ".env" file contains the variable name and token value ',(0,o.jsx)(n.code,{children:"OPENAI_API_KEY=abc123def456"})]}),"\n",(0,o.jsxs)(n.li,{children:["Ensure that the lines ",(0,o.jsx)(n.code,{children:'import dotenv from "dotenv"'})," and ",(0,o.jsx)(n.code,{children:"dotenv.config()"}),' are in your "main.js" file. The ',(0,o.jsx)(n.code,{children:"dotenv.config()"})," file needs to be BEFORE the ",(0,o.jsx)(n.code,{children:"const openai = new OpenAI()"})," line."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"no-funds",children:"No funds"}),"\n",(0,o.jsx)(n.p,{children:"If you run an API call before purchasing credits you may see an error similar to this one:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"RateLimitError: 429 You exceeded your current quota, please check your plan and billing details. For more information on this error, read the docs: https://platform.openai.com/docs/guides/error-codes/api-errors.\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you see this message then you will need to ",(0,o.jsx)(n.a,{href:"#create-openai-account-purchase-credits-and-create-api-key",children:"purchase some credits"}),'. You may also need to generate a new API token and set it in your ".env" file after purchasing tokens. Per my testing, tokens created BEFORE credits are purchased do NOT work even after credits have been purchased.']})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var o=t(7294);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);