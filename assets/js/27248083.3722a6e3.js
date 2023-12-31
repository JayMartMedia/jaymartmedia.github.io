"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[8882],{8515:(e,o,c)=>{c.r(o),c.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var n=c(5893),r=c(1151);const t={},i="Docker",s={id:"helpful-commands/containerization/docker",title:"Docker",description:"Docker is a tool used to containerize applications so that they run consistently across machines.",source:"@site/docs/helpful-commands/containerization/docker.md",sourceDirName:"helpful-commands/containerization",slug:"/helpful-commands/containerization/docker",permalink:"/articles/helpful-commands/containerization/docker",draft:!1,unlisted:!1,editUrl:"https://github.com/jaymartmedia/jaymartmedia.github.io/tree/main/docs/helpful-commands/containerization/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"commandsSidebar",previous:{title:"Containerization",permalink:"/articles/category/containerization"},next:{title:"Kubernetes",permalink:"/articles/helpful-commands/containerization/kubernetes"}},a={},d=[{value:"Docker Specific",id:"docker-specific",level:2},{value:"Docker Compose",id:"docker-compose",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"docker",children:"Docker"}),"\n",(0,n.jsx)(o.p,{children:"Docker is a tool used to containerize applications so that they run consistently across machines."}),"\n",(0,n.jsx)(o.h2,{id:"docker-specific",children:"Docker Specific"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"docker rm -f $(docker ps -a -q)"})," Remove all docker containers"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"docker rmi -f $(docker images -a -q"})," Remove all docker images"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"docker rm $(docker stop $(docker ps --quiet --filter name=<containerName>))"})," Stop and remove docker container by name"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"docker ps"})," List docker containers"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"docker exec -it {containername} bin/bash"})," SSH into docker container"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"docker build --progress=plain -t app-name:1.0 ."})," Remove special formatting which can collapse lines and hide some output"]}),"\n",(0,n.jsx)(o.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"docker-compose up"})," Start the docker-compose.yaml file in the same directory"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"docker-compose -f docker-compose-local.yaml up"})," Startup the docker compose file specified"]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"docker-compose up --force-recreate"})," Start docker compose and use new containers rather than previously used containers that have been stopped"]}),"\n",(0,n.jsxs)(o.p,{children:["docker compose docs: ",(0,n.jsx)(o.a,{href:"https://docs.docker.com/engine/reference/commandline/compose",children:"https://docs.docker.com/engine/reference/commandline/compose"})]}),"\n",(0,n.jsxs)(o.p,{children:["docker compose up docs: ",(0,n.jsx)(o.a,{href:"https://docs.docker.com/engine/reference/commandline/compose_up",children:"https://docs.docker.com/engine/reference/commandline/compose_up"})]})]})}function m(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,o,c)=>{c.d(o,{Z:()=>s,a:()=>i});var n=c(7294);const r={},t=n.createContext(r);function i(e){const o=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function s(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:o},e.children)}}}]);