"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[2028],{2890:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=s(5893),r=s(1151);const t={},c="Linux/Unix",o={id:"helpful-commands/os/linux-unix",title:"Linux/Unix",description:"Compressing files (tar)",source:"@site/docs/helpful-commands/os/linux-unix.md",sourceDirName:"helpful-commands/os",slug:"/helpful-commands/os/linux-unix",permalink:"/articles/helpful-commands/os/linux-unix",draft:!1,unlisted:!1,editUrl:"https://github.com/jaymartmedia/jaymartmedia/tree/main/packages/create-docusaurus/templates/shared/docs/helpful-commands/os/linux-unix.md",tags:[],version:"current",frontMatter:{},sidebar:"commandsSidebar",previous:{title:"PostgreSQL",permalink:"/articles/helpful-commands/language-specific/postgresql"},next:{title:"Windows",permalink:"/articles/helpful-commands/os/windows"}},l={},d=[{value:"Compressing files (tar)",id:"compressing-files-tar",level:2},{value:"SSH",id:"ssh",level:2},{value:"SCP",id:"scp",level:2},{value:"GREP",id:"grep",level:2},{value:"CURL",id:"curl",level:2},{value:"Network",id:"network",level:2},{value:"Command History Tricks",id:"command-history-tricks",level:2},{value:"View recent commands",id:"view-recent-commands",level:3},{value:"Rerun recent commands",id:"rerun-recent-commands",level:3},{value:"Misc",id:"misc",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"linuxunix",children:"Linux/Unix"}),"\n",(0,i.jsx)(n.h2,{id:"compressing-files-tar",children:"Compressing files (tar)"}),"\n",(0,i.jsxs)(n.p,{children:["Resource: ",(0,i.jsx)(n.a,{href:"https://www.tecmint.com/18-tar-command-examples-in-linux/",children:"https://angular.io/cli/generate#component"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tar -cvf documents.tar /home/jmm/documents/"})," Create a tar file"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"-cvf = compress, verbose (list files), filename (to be compressed into)"}),"\n",(0,i.jsx)(n.li,{children:"documents.tar = the output file containing files"}),"\n",(0,i.jsx)(n.li,{children:"/home/jmm/documents/ = input directory or file"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"tar -xvf documents.tar -C /home/jmm/new-documents/"})," Extract from a tar file"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"-xvf = eXtract, verbose (list files), filename (to extract from)"}),"\n",(0,i.jsx)(n.li,{children:"documents.tar = .tar file to extract from"}),"\n",(0,i.jsx)(n.li,{children:"-C = directory to extract into"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ssh",children:"SSH"}),"\n",(0,i.jsxs)(n.p,{children:["Resource: ",(0,i.jsx)(n.a,{href:"https://linux.die.net/man/1/ssh",children:"https://linux.die.net/man/1/ssh"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ssh jmm@192.168.1.123"}),' SSH into server at 192.168.1.123 as user "jmm" (will be asked for password if ssh keys not setup)']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ssh jmm@192.168.1.123 ls"})," Run the ls command on the server at 192.168.1.123 and show results of command in local machine terminal"]}),"\n",(0,i.jsx)(n.h2,{id:"scp",children:"SCP"}),"\n",(0,i.jsxs)(n.p,{children:["Resource: ",(0,i.jsx)(n.a,{href:"https://linux.die.net/man/1/scp",children:"https://linux.die.net/man/1/scp"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"scp pi@192.168.1.123:/home/jmm/.bashrc /home/jmm/"})," use SCP to copy .bashrc file from server at 192.168.1.123 to local machine /home/jmm/ directory"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"scp /home/jmm/.bashrc pi@192.168.1.123:/home/jmm/"})," use SCP to copy .bashrc file from local machine to server at 192.168.1.123"]}),"\n",(0,i.jsx)(n.h2,{id:"grep",children:"GREP"}),"\n",(0,i.jsx)(n.p,{children:"Resources:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["General: ",(0,i.jsx)(n.a,{href:"https://www.geeksforgeeks.org/grep-command-in-unixlinux/",children:"https://www.geeksforgeeks.org/grep-command-in-unixlinux/"})]}),"\n",(0,i.jsxs)(n.li,{children:["Exclude with grep: ",(0,i.jsx)(n.a,{href:"https://linuxize.com/post/grep-exclude/",children:"https://linuxize.com/post/grep-exclude/"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"grep Docker ./readme.md"}),' search for all lines that contain "Docker" in the readme.md file']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"grep -r --exclude-dir=node_modules Docker"}),' search for all lines that contain "Docker" recursively excluding the node_modules directory']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"grep -r --exclude=*.{png,jpg} Docker"}),' search for "Docker" recursively and exclude files of type .png and .jpg']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"grep -Irn Docker"}),' recursively search for "Docker" while excluding binary files and return the line number']}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["-I -- process a binary file as if it did not contain matching data;",(0,i.jsx)(n.br,{}),"\n","-n -- prefix each line of output with the 1-based line number within its input file",(0,i.jsx)(n.br,{}),"\n","-i -- case insensitive search"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"curl",children:"CURL"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"curl https://www.website.com/file.pdf --output file.pdf"})," Download the file at the web address specified and save to an output file"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"curl -k https://www.website.com/file.pdf --output file.pdf"})," allow insecure/self-signed-cert"]}),"\n",(0,i.jsx)(n.h2,{id:"network",children:"Network"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"lsof -i -P -n | grep LISTEN"})," Check open ports"]}),"\n",(0,i.jsx)(n.h2,{id:"command-history-tricks",children:"Command History Tricks"}),"\n",(0,i.jsx)(n.h3,{id:"view-recent-commands",children:"View recent commands"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"history"})," - view recent commands"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'history | grep -i "cargo"'}),' - view recent commands in history that include "cargo", -i is case-insensitive']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"!dotnet:p"}),' - display the most recent command that started with "dotnet"']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"!12:p"})," - display the command at index 12"]}),"\n",(0,i.jsx)(n.h3,{id:"rerun-recent-commands",children:"Rerun recent commands"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CTRL + p"})," - paste in the most recent command that you ran, need to hit enter to run"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"!!"})," - immediately rerun last command"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"!dotnet"}),' - immediately rerun last command that started with "dotnet"']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"!12"})," - immediately rerun command at index 12"]}),"\n",(0,i.jsx)(n.h2,{id:"misc",children:"Misc"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"diff <(ls old) <(ls new)"})," diff the output of two commands (such as comparing the contents of two directories)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'echo -n "string to encode here" | base64 -w 0'})," base64 encode a string. -n removes the newline character when echoing, -w 0 prevents auto wrapping lines (default is 76 chars, ",(0,i.jsx)(n.code,{children:"base64 --help"})," for more info)"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"printf '%-32s' \"Here is text!\" >> /dev/ttyS3"})," print a string padded with spaces to 32char and send to serial device"]}),"\n",(0,i.jsx)(n.p,{children:"Read in a secret value (such as a password) from the command line so that it doesn't appear in shell history:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'#!/bin/sh\r\necho -n "Enter secret: "   # echo text with no newline\r\nread -s secret             # read in secret without showing chars\r\necho $secret               # do something with secret value (defo don\'t echo it)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>c});var i=s(7294);const r={},t=i.createContext(r);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);