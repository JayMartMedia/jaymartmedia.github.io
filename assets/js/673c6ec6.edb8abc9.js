"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[6449],{5437:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=s(5893),o=s(1151);const a={},r="Kubernetes",i={id:"helpful-commands/containerization/kubernetes",title:"Kubernetes",description:"Kubernetes is a tool used for orchestrating containers.",source:"@site/docs/helpful-commands/containerization/kubernetes.md",sourceDirName:"helpful-commands/containerization",slug:"/helpful-commands/containerization/kubernetes",permalink:"/articles/helpful-commands/containerization/kubernetes",draft:!1,unlisted:!1,editUrl:"https://github.com/jaymartmedia/jaymartmedia.github.io/tree/main/docs/helpful-commands/containerization/kubernetes.md",tags:[],version:"current",frontMatter:{},sidebar:"commandsSidebar",previous:{title:"Docker",permalink:"/articles/helpful-commands/containerization/docker"},next:{title:"IDE/Text Editor",permalink:"/articles/category/idetext-editor"}},c={},l=[{value:"Namespaces",id:"namespaces",level:2},{value:"Set default namespace",id:"set-default-namespace",level:3},{value:"Exec into pod",id:"exec-into-pod",level:2},{value:"Cronjobs/Jobs",id:"cronjobsjobs",level:2},{value:"Create and run a job based on a cronjob",id:"create-and-run-a-job-based-on-a-cronjob",level:3},{value:"KIND",id:"kind",level:2},{value:"Configuring a KIND cluster",id:"configuring-a-kind-cluster",level:2},{value:"JQ",id:"jq",level:2},{value:"Get all images for a pod",id:"get-all-images-for-a-pod",level:3},{value:"Get all resource types, names, and images",id:"get-all-resource-types-names-and-images",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"kubernetes",children:"Kubernetes"}),"\n",(0,t.jsx)(n.p,{children:"Kubernetes is a tool used for orchestrating containers."}),"\n",(0,t.jsx)(n.h2,{id:"namespaces",children:"Namespaces"}),"\n",(0,t.jsx)(n.h3,{id:"set-default-namespace",children:"Set default namespace"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"kubectl config set-context --current --namespace=<namespace>"})}),"\n",(0,t.jsx)(n.h2,{id:"exec-into-pod",children:"Exec into pod"}),"\n",(0,t.jsxs)(n.p,{children:["Open bash shell ",(0,t.jsx)(n.code,{children:"kubectl exec -it myapp-123 -- /bin/bash"})," (",(0,t.jsx)(n.code,{children:"//bin//bash"})," on Windows)"]}),"\n",(0,t.jsxs)(n.p,{children:["Run command and exit ",(0,t.jsx)(n.code,{children:"kubectl exec myapp-123 -- ls"})]}),"\n",(0,t.jsx)(n.h2,{id:"cronjobsjobs",children:"Cronjobs/Jobs"}),"\n",(0,t.jsx)(n.h3,{id:"create-and-run-a-job-based-on-a-cronjob",children:"Create and run a job based on a cronjob"}),"\n",(0,t.jsx)(n.p,{children:"this can be used to manually trigger a cronjob"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"kubectl create job --from=cronjob/<cronjob name> <job name>"})}),"\n",(0,t.jsx)(n.h2,{id:"kind",children:"KIND"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://kind.sigs.k8s.io/",children:"KIND"})," stands for Kubernetes IN Docker. Kind is a tool that creates a development Kubernetes cluster inside of Docker quickly and easily. KIND also allows local multi-node setups."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"choco install kind"})," - Use Chocolatey to install kind on Windows"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kind create cluster --name my-kind-cluster"})," - Create a cluster"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kubectl config get-contexts"})," - List clusters"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kubectl config use-context {name of context}"})," - Switch to the KIND cluster"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kind delete cluster --name my-kind-cluster"})," - Delete the KIND cluster"]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-a-kind-cluster",children:"Configuring a KIND cluster"}),"\n",(0,t.jsxs)(n.p,{children:["KIND also allows you to customize your cluster when it is created via a ",(0,t.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/configuration/#nodes",children:"yaml config file"}),". (",(0,t.jsx)(n.a,{href:"https://dotnetninja.net/2021/03/running-a-multi-node-kubernetes-cluster-on-windows-with-kind/",children:"related blog post"}),")"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="./my-cluster-config.yaml"',children:"kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n- role: worker\n- role: worker\n- role: worker\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"kind create cluster --name my-custom-kind-cluster --config ./my-cluster-config.yaml"})," - Create a KIND cluster based on the config file"]}),"\n",(0,t.jsx)(n.h2,{id:"jq",children:"JQ"}),"\n",(0,t.jsxs)(n.p,{children:["JQ is a CLI tool that can be used to filter/format json. It can be used to select specific values from json output from the ",(0,t.jsx)(n.code,{children:"kubectl get <resource>"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"../cli/jq",children:"my notes on jq for more info"})]}),"\n",(0,t.jsx)(n.h3,{id:"get-all-images-for-a-pod",children:"Get all images for a pod"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ kubectl get pod/mypod -o json | jq '.spec.containers[].image' -r\n\nnginx\nimage2\nimage3\n"})}),"\n",(0,t.jsx)(n.h3,{id:"get-all-resource-types-names-and-images",children:"Get all resource types, names, and images"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'$ kubectl get all -o json | jq \'.items[] | ("Resource kind: " + .kind),("Resource name: " + .metadata.name),("images: " + spec.containers[]?.image),("")\' -r\n\nResource kind: Pod\nResource name: mypod\nimages: nginx\n\nResource kind: Service\nResource name: myservice\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var t=s(7294);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);