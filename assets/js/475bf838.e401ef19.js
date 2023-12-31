"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[7231],{9472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var s=t(5893),a=t(1151);const o={},i="Kafka",r={id:"helpful-resources/kafka",title:"Kafka",description:"Kafka is a pub sub messaging queue which allows loose coupling of applications.",source:"@site/docs/helpful-resources/kafka.md",sourceDirName:"helpful-resources",slug:"/helpful-resources/kafka",permalink:"/articles/helpful-resources/kafka",draft:!1,unlisted:!1,editUrl:"https://github.com/jaymartmedia/jaymartmedia.github.io/tree/main/docs/helpful-resources/kafka.md",tags:[],version:"current",frontMatter:{},sidebar:"resourcesSidebar",previous:{title:"Encryption",permalink:"/articles/helpful-resources/encryption"},next:{title:"Networking",permalink:"/articles/helpful-resources/networking"}},c={},u=[{value:"Kafka Connect",id:"kafka-connect",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"kafka",children:"Kafka"}),"\n",(0,s.jsx)(n.p,{children:"Kafka is a pub sub messaging queue which allows loose coupling of applications."}),"\n",(0,s.jsx)(n.p,{children:"Pros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Loose coupling of applications. If another application needs some data, they can just consume (subscribe to) the topic. The application that is producing the messages does not need to produce to each and every listener."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"More difficult to manage who is allowed to see data. Need to make sure you have something in place to prevent unauthorized applications/users from consuming from the topic."}),"\n",(0,s.jsx)(n.li,{children:"Difficult to see the message backlog. Each consumer manages this themself, so the producer does not know how far behind each consumer is. (Good for decoupling, but can be an issue of this functionality is needed)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Things to consider:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Data is homogeneous. If each consumer needs the same data, this is perfectly fine. But if some consumers need some portion of the data, and other consumers need a different portion, then it may be better to insert each bit of data in a queue for each consumer."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"kafka-connect",children:"Kafka Connect"}),"\n",(0,s.jsx)(n.p,{children:"Kafka Connect is an ecosystem of tools that can be used to connect databases, data sources, and more to a Kafka topic. Connectors can be used as producers and consumers."}),"\n",(0,s.jsxs)(n.p,{children:['"Apache Kafka 101: Kafka Connect" by Confluent: ',(0,s.jsx)(n.a,{href:"https://youtu.be/J6adhl3wEj4",children:"https://youtu.be/J6adhl3wEj4"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(7294);const a={},o=s.createContext(a);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);