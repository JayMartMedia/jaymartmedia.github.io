"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[714],{7475:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(5893),t=n(1151);const o={slug:"running-llama-ai-model-locally",title:"Running Llama AI Model Locally",authors:"jaymartin",tags:["AI","Llama","Local"],toc_max_heading_level:4},i=void 0,r={permalink:"/blog/running-llama-ai-model-locally",editUrl:"https://github.com/jaymartmedia/jaymartmedia.github.io/tree/main/blog/2024-11-14-running-llama-ai-model-locally.md",source:"@site/blog/2024-11-14-running-llama-ai-model-locally.md",title:"Running Llama AI Model Locally",description:"The Llama AI model is an open-source model built by Meta. It can be used similarly to how OpenAI's ChatGPT can be used. In this article we will run the Llama AI model locally via Docker. We will NOT configure Llama to use the GPU in this article.",date:"2024-11-14T00:00:00.000Z",formattedDate:"November 14, 2024",tags:[{label:"AI",permalink:"/blog/tags/ai"},{label:"Llama",permalink:"/blog/tags/llama"},{label:"Local",permalink:"/blog/tags/local"}],readingTime:4.175,hasTruncateMarker:!1,authors:[{name:"Jay Martin",title:"Runner of JayMartMedia",url:"https://github.com/jaymartmedia",imageURL:"https://github.com/jaymartmedia.png",key:"jaymartin"}],frontMatter:{slug:"running-llama-ai-model-locally",title:"Running Llama AI Model Locally",authors:"jaymartin",tags:["AI","Llama","Local"],toc_max_heading_level:4},unlisted:!1,nextItem:{title:"Setting up an NGINX reverse proxy",permalink:"/blog/nginx-reverse-proxy"}},s={authorsImageUrls:[void 0]},c=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:3},{value:"Running the Ollama container",id:"running-the-ollama-container",level:3},{value:"Install the Llama 3.2 model",id:"install-the-llama-32-model",level:3},{value:"Querying the AI model",id:"querying-the-ai-model",level:3},{value:"Adding and querying a code model (or other model)",id:"adding-and-querying-a-code-model-or-other-model",level:3},{value:"Running a UI for easier interaction",id:"running-a-ui-for-easier-interaction",level:3},{value:"Conclusion",id:"conclusion",level:3}];function d(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.p,{children:["The ",(0,a.jsx)(l.a,{href:"https://www.llama.com/",children:"Llama AI model"})," is an open-source model built by Meta. It can be used similarly to how OpenAI's ChatGPT can be used. In this article we will run the Llama AI model locally via Docker. We will NOT configure Llama to use the GPU in this article."]}),"\n",(0,a.jsx)(l.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(l.p,{children:["First we will run an ",(0,a.jsx)(l.a,{href:"https://ollama.com/",children:"Ollama"})," Docker container. Ollama is used as a wrapper around the AI models themselves. Then we will add the llama 3.2 model to the Ollama container. Once the model is running, we will interact with the Llama via HTTP using the cURL command line tool. Additionally I will show you how to add a code AI model and interact with it. Finally we will run a UI to make it easier to interact with the AI models (more similar to the ChatGPT UI."]}),"\n",(0,a.jsx)(l.h3,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(l.p,{children:"For this tutorial you will need Docker and cURL (or Postman/Wget or other HTTP client) installed."}),"\n",(0,a.jsxs)(l.p,{children:["You can install Docker by following the ",(0,a.jsx)(l.a,{href:"https://docs.docker.com/get-started/get-docker/",children:"Docker documentation"}),"."]}),"\n",(0,a.jsxs)(l.p,{children:["You can install cURL from the ",(0,a.jsx)(l.a,{href:"https://curl.se/download.html",children:"cURL website"}),"."]}),"\n",(0,a.jsx)(l.h3,{id:"running-the-ollama-container",children:"Running the Ollama container"}),"\n",(0,a.jsxs)(l.p,{children:["The ",(0,a.jsx)(l.a,{href:"https://hub.docker.com/r/ollama/ollama",children:"Ollama Docker image"})," is available on the Docker hub."]}),"\n",(0,a.jsx)(l.p,{children:"Start the container by running the following command in your terminal:"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama\n"})}),"\n",(0,a.jsx)(l.p,{children:"If it's your first time, it will likely take a few minutes to pull the image from the Docker hub."}),"\n",(0,a.jsx)(l.p,{children:"By default, the Ollama wrapper does not have any AI models installed. You can verify this by listing the installed models:"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"curl http://localhost:11434/api/tags\n"})}),"\n",(0,a.jsx)(l.h3,{id:"install-the-llama-32-model",children:"Install the Llama 3.2 model"}),"\n",(0,a.jsxs)(l.p,{children:["A ",(0,a.jsx)(l.a,{href:"https://ollama.com/library",children:"list of available models"})," can be found on the Ollama website."]}),"\n",(0,a.jsx)(l.p,{children:"There are two ways to install a model. It can be done via an HTTP request or by running a command inside the Docker container,"}),"\n",(0,a.jsx)(l.p,{children:"To install a model via HTTP request (which I prefer) you can run the following cURL command via the terminal."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:'curl http://localhost:11434/api/pull -d \'{\n    "name": "llama3.2"\n}\'\n'})}),"\n",(0,a.jsx)(l.p,{children:"Otherwise you can install the model by executing a command in the Docker in either of two following ways."}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"docker exec -it ollama ollama run llama3.2\n"})}),"\n",(0,a.jsx)(l.p,{children:"OR"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"docker exec -it ollama bash\n\nollama run llama3.2\n"})}),"\n",(0,a.jsx)(l.p,{children:"You can now verify that the model is installed by listing the installed models:"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"curl http://localhost:11434/api/tags\n"})}),"\n",(0,a.jsx)(l.h3,{id:"querying-the-ai-model",children:"Querying the AI model"}),"\n",(0,a.jsx)(l.p,{children:"You can query the model by making an HTTP request"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:'curl http://localhost:11434/api/generate -d \'{\n    "model": "llama3.2",\n    "prompt": "Tell me a joke about AI models.",\n    "stream": false\n}\'\n'})}),"\n",(0,a.jsx)(l.p,{children:'If you would like the response to come back as a stream (for example, to make the response feel faster, or allow partial response, or make it seem like the model is writing the response word by word) then you can exclude the "stream": false property in the request body.'}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:'curl http://localhost:11434/api/generate -d \'{\n    "model": "llama3.2",\n    "prompt": "Tell me a joke about AI models."\n}\'\n'})}),"\n",(0,a.jsx)(l.h3,{id:"adding-and-querying-a-code-model-or-other-model",children:"Adding and querying a code model (or other model)"}),"\n",(0,a.jsx)(l.p,{children:"You can install a code generation model by running"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:'curl http://localhost:11434/api/pull -d \'{\n    "name": "qwen2.5-coder:7b"\n}\'\n'})}),"\n",(0,a.jsx)(l.p,{children:"OR"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"`docker exec -it ollama ollama run qwen2.5-coder:7b`\n"})}),"\n",(0,a.jsx)(l.p,{children:"Then you can query it by running the following (note the model property):"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:'curl http://localhost:11434/api/generate -d \'{\n    "model": "qwen2.5-coder:7b",\n    "prompt": "Write me a js function to calculate the fibonacci sequence",\n    "stream": false\n}\'\n'})}),"\n",(0,a.jsxs)(l.p,{children:["Here is a ",(0,a.jsx)(l.a,{href:"https://ollama.com/library",children:"list of other available models"})," that can be installed."]}),"\n",(0,a.jsx)(l.h3,{id:"running-a-ui-for-easier-interaction",children:"Running a UI for easier interaction"}),"\n",(0,a.jsxs)(l.p,{children:["Obviously it's a little bit inconvenient to interact with the AI model via HTTP/cURL. It would be nice to have something more similar to the ChatGPT web UI. Fortunately there are a number of ",(0,a.jsx)(l.a,{href:"https://github.com/ollama/ollama?tab=readme-ov-file#community-integrations",children:"community built integrations"})," that can do just that (more or less)! The one we will be using in this article is ",(0,a.jsx)(l.a,{href:"https://github.com/open-webui/open-webui",children:"Open WebUI"}),"."]}),"\n",(0,a.jsx)(l.p,{children:"Run the following command to run Open WebUI locally"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-shell",children:"docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data --name open-webui ghcr.io/open-webui/open-webui:main\n"})}),"\n",(0,a.jsxs)(l.p,{children:["In your browser, go to ",(0,a.jsx)(l.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),' and you should see the sign in page for Open WebUI. You will need to click "Sign up" to create an account when you first run and use Open WebUI (The tool indicates that the account data will be stored locally, but I have not personally read through the code and verified this).']}),"\n",(0,a.jsx)(l.p,{children:'Once you are logged in, you can create a new chat. You can select the AI model in the dropdown in the top left corner of the chat. It seems that Open WebUI uses the "/api/tags" endpoint to get a list of the installed models.'}),"\n",(0,a.jsx)(l.p,{children:"Once the desired model is selected you can query it via the text box in the middle of the screen!"}),"\n",(0,a.jsx)(l.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(l.p,{children:"In this article I showed how to:"}),"\n",(0,a.jsxs)(l.ol,{children:["\n",(0,a.jsx)(l.li,{children:"Run an Ollama Docker container"}),"\n",(0,a.jsx)(l.li,{children:"Install some AI models in the Ollama container (llama3.2 and qwen2.5-coder)"}),"\n",(0,a.jsx)(l.li,{children:"Query the different AI models"}),"\n",(0,a.jsx)(l.li,{children:"Run Open WebUI to give us an easier interface with the AI models"}),"\n"]}),"\n",(0,a.jsx)(l.p,{children:"I hope you found the article helpful!"})]})}function h(e={}){const{wrapper:l}={...(0,t.a)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,l,n)=>{n.d(l,{Z:()=>r,a:()=>i});var a=n(7294);const t={},o=a.createContext(t);function i(e){const l=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(o.Provider,{value:l},e.children)}}}]);