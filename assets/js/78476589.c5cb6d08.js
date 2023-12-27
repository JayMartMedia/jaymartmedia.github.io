"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[3095],{4429:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var s=t(5893),i=t(1151);const a={},r="TMUX",c={id:"helpful-commands/cli/tmux",title:"TMUX",description:"TMUX is a terminal multiplexer which allows you to have quick access to multiple terminal windows.",source:"@site/docs/helpful-commands/cli/tmux.md",sourceDirName:"helpful-commands/cli",slug:"/helpful-commands/cli/tmux",permalink:"/articles/helpful-commands/cli/tmux",draft:!1,unlisted:!1,editUrl:"https://github.com/jaymartmedia/jaymartmedia/tree/main/packages/create-docusaurus/templates/shared/docs/helpful-commands/cli/tmux.md",tags:[],version:"current",frontMatter:{},sidebar:"commandsSidebar",previous:{title:"SSH",permalink:"/articles/helpful-commands/cli/ssh"},next:{title:"Docker",permalink:"/articles/helpful-commands/containerization/docker"}},l={},o=[{value:"Starting/Restarting TMUX",id:"startingrestarting-tmux",level:2},{value:"Pane/Tile Management",id:"panetile-management",level:2},{value:"Exiting TMUX",id:"exiting-tmux",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"tmux",children:"TMUX"}),"\n",(0,s.jsx)(n.p,{children:"TMUX is a terminal multiplexer which allows you to have quick access to multiple terminal windows."}),"\n",(0,s.jsxs)(n.p,{children:["All commands in tmux are triggered by a ",(0,s.jsx)(n.strong,{children:"prefix key"})," followed by a ",(0,s.jsx)(n.strong,{children:"command key"})," (similar to emacs). By default, tmux uses ",(0,s.jsx)(n.code,{children:"C-b"})," as prefix key. This notation might read a little weird if you're not used to it. In this emacs notation ",(0,s.jsx)(n.code,{children:"C-"}),' means "press and hold the ',(0,s.jsx)(n.code,{children:"Ctrl"}),' key". Thus ',(0,s.jsx)(n.code,{children:"C-b"})," simply means press the ",(0,s.jsx)(n.code,{children:"Ctrl"})," and ",(0,s.jsx)(n.code,{children:"b"})," keys at the same time. ",(0,s.jsx)(n.a,{href:"https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/",children:"src"})]}),"\n",(0,s.jsx)(n.h2,{id:"startingrestarting-tmux",children:"Starting/Restarting TMUX"}),"\n",(0,s.jsxs)(n.p,{children:["To start tmux: ",(0,s.jsx)(n.code,{children:"tmux"})]}),"\n",(0,s.jsxs)(n.p,{children:["To start tmux with a named session: ",(0,s.jsx)(n.code,{children:"tmux new -s mysession"})]}),"\n",(0,s.jsxs)(n.p,{children:["To attach to an existing session: ",(0,s.jsx)(n.code,{children:"tmux ls"})," then ",(0,s.jsx)(n.code,{children:"tmux attach -t {session id (number, or name if provided)}"})]}),"\n",(0,s.jsxs)(n.p,{children:["Rename existing session: ",(0,s.jsx)(n.code,{children:"tmux rename-session -t {old session id (number or name if provided)} {new session name}"})]}),"\n",(0,s.jsx)(n.h2,{id:"panetile-management",children:"Pane/Tile Management"}),"\n",(0,s.jsxs)(n.p,{children:["Split left and right: ",(0,s.jsx)(n.code,{children:"C-b %"})]}),"\n",(0,s.jsxs)(n.p,{children:["Split vertically: ",(0,s.jsx)(n.code,{children:'C-b "'})]}),"\n",(0,s.jsxs)(n.p,{children:["Change selected pane: ",(0,s.jsx)(n.code,{children:"C-b <arrow key>"})]}),"\n",(0,s.jsxs)(n.p,{children:["Close currently selected pane: ",(0,s.jsx)(n.code,{children:"C-d"})," or type ",(0,s.jsx)(n.code,{children:"exit"})]}),"\n",(0,s.jsxs)(n.p,{children:["Make pane full sized (same command to shrink again): ",(0,s.jsx)(n.code,{children:"C-b z"})]}),"\n",(0,s.jsxs)(n.p,{children:["Resize pane in direction: ",(0,s.jsx)(n.code,{children:"C-b C-<arrow ey>"})]}),"\n",(0,s.jsx)(n.h2,{id:"exiting-tmux",children:"Exiting TMUX"}),"\n",(0,s.jsx)(n.p,{children:"You can exit tmux by exiting all the panes inside"}),"\n",(0,s.jsx)(n.p,{children:"You can exit tmux (and leave session running in background) by detaching."}),"\n",(0,s.jsxs)(n.p,{children:["Detach from current session: ",(0,s.jsx)(n.code,{children:"C-b d"})]}),"\n",(0,s.jsxs)(n.p,{children:["Detach from sessions (prompt): ",(0,s.jsx)(n.code,{children:"C-b D"})]}),"\n",(0,s.jsxs)(n.p,{children:["Resource: ",(0,s.jsx)(n.a,{href:"https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/",children:"https://www.hamvocke.com/blog/a-quick-and-easy-guide-to-tmux/"})]})]})}function m(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(7294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);