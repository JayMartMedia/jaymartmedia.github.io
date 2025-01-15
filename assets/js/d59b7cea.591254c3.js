"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[7728],{2136:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var s=n(5893),r=n(1151);const t={},l="SRE",o={id:"helpful-resources/site-reliability-engineering",title:"SRE",description:"Overview",source:"@site/docs/helpful-resources/site-reliability-engineering.md",sourceDirName:"helpful-resources",slug:"/helpful-resources/site-reliability-engineering",permalink:"/articles/helpful-resources/site-reliability-engineering",draft:!1,unlisted:!1,editUrl:"https://github.com/jaymartmedia/jaymartmedia.github.io/tree/main/docs/helpful-resources/site-reliability-engineering.md",tags:[],version:"current",frontMatter:{},sidebar:"resourcesSidebar",previous:{title:"physical-protocols",permalink:"/articles/helpful-resources/physical-protocols"},next:{title:"Software Development",permalink:"/articles/helpful-resources/software-development-recommended-practices"}},a={},h=[{value:"Overview",id:"overview",level:2},{value:"What is SRE?",id:"what-is-sre",level:2},{value:"SRE in my experience",id:"sre-in-my-experience",level:2},{value:"Fortune 50 Home Improvement Retail",id:"fortune-50-home-improvement-retail",level:3},{value:"Multi-Billion-Dollar Logistics Brokerage",id:"multi-billion-dollar-logistics-brokerage",level:3},{value:"Is SRE for you?",id:"is-sre-for-you",level:2},{value:"Salary",id:"salary",level:3},{value:"Remote Work",id:"remote-work",level:3},{value:"SRE Concepts/Tools/Skills",id:"sre-conceptstoolsskills",level:2},{value:"Resources",id:"resources",level:2}];function c(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"sre",children:"SRE"}),"\n",(0,s.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(i.p,{children:"This file contains my thoughts on Site Reliability Engineering (SRE). Disclaimer that I am a software engineer, I am not necessarily a site reliability engineer. But I think there is enough overlap in some responsibilities that my thoughts and experience may be helpful to others."}),"\n",(0,s.jsx)(i.h2,{id:"what-is-sre",children:"What is SRE?"}),"\n",(0,s.jsx)(i.p,{children:"Site reliability engineering roles, responsibilities and practices will vary from company to company. But the general purpose remains the same:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Ensure that software services are stable."}),"\n",(0,s.jsx)(i.li,{children:"Ensure that monitoring is in place to detect issues as early as possible."}),"\n",(0,s.jsx)(i.li,{children:"Ensure that there is a process to follow in case issues arise."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"These responsibilities may belong to a specific role, or be shared between multiple roles."}),"\n",(0,s.jsx)(i.h2,{id:"sre-in-my-experience",children:"SRE in my experience"}),"\n",(0,s.jsx)(i.p,{children:"This section details my specific experience regrading SRE at different companies."}),"\n",(0,s.jsx)(i.h3,{id:"fortune-50-home-improvement-retail",children:"Fortune 50 Home Improvement Retail"}),"\n",(0,s.jsx)(i.p,{children:"I worked at a Fortune 50 company that had a dedicated SRE role. I did not interact with people in this role often, but there were a few instances where there was an issue with the app that my team owned, and they would reach out to me as a developer for support."}),"\n",(0,s.jsx)(i.p,{children:"My perception of the SRE role at this company was that they were responsible for running the logging platform, and having automated checks in place to detect issues. If there were any issues, SRE would investigate to determine if it was a networking/infrastructure issue in which case they may be able to take action or escalate to another team, or an application issue in which case they may need to escalate to the development team. I am not sure whether the development team or SRE team managed the cloud resources at this company."}),"\n",(0,s.jsx)(i.p,{children:"Tech:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Deployment stack","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["CI/CD - ",(0,s.jsx)(i.a,{href:"https://www.jenkins.io/",children:"Jenkins"})]}),"\n",(0,s.jsxs)(i.li,{children:["Containerization - ",(0,s.jsx)(i.a,{href:"https://www.docker.com/",children:"Docker"})," and ",(0,s.jsx)(i.a,{href:"https://podman.io/",children:"Podman"})]}),"\n",(0,s.jsxs)(i.li,{children:["Container Orchestration - ",(0,s.jsx)(i.a,{href:"https://spinnaker.io/",children:"Spinnaker"})]}),"\n",(0,s.jsxs)(i.li,{children:["Compute - ",(0,s.jsx)(i.a,{href:"https://cloud.google.com/run",children:"Google Cloud Run"})," (Maybe Cloud Run, definitely GCP)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Logging stack - ",(0,s.jsx)(i.a,{href:"https://www.elastic.co/elastic-stack",children:"Elasticsearch, Kibana"})]}),"\n",(0,s.jsx)(i.li,{children:"Monitoring stack - Unsure, possibly some alerting tools in Kibana?"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"multi-billion-dollar-logistics-brokerage",children:"Multi-Billion-Dollar Logistics Brokerage"}),"\n",(0,s.jsx)(i.p,{children:"I worked at a logistics brokerage company that did not have an SRE title, but the SRE responsibilities were split between different roles. The two roles that took most of the SRE responsibility were the Platform Engineering (PE) and Network Operations Center (NOC)."}),"\n",(0,s.jsx)(i.p,{children:"The PE team was responsible for maintaining the Windows VMs that legacy applications were deployed to. They also maintained the on-prem Kubernetes (K8s) clusters that newly built apps run on. They were also responsible for maintaining the legacy logging platform, SEQ, as well as the new logging platform, Elasticsearch."}),"\n",(0,s.jsx)(i.p,{children:"The NOC was responsible for maintaining the monitoring tools that would detect outages. When an issue was detected by automated checks, the NOC would follow run books and escalate to the on-call person for the appropriate team. The NOC was also responsible for change management."}),"\n",(0,s.jsx)(i.p,{children:"The Cloud team was responsible for overseeing cloud resource creation and management, however development teams had control over specific cloud resources."}),"\n",(0,s.jsx)(i.p,{children:"The development team was responsible for creating and maintaining their build and deployment pipelines. The development team could consult with PE if needed for pipeline management. The development team would request Resource Group creation from the Cloud team (Azure's logical grouping of cloud resources). Then the development team could create their own resources as needed inside that resource group."}),"\n",(0,s.jsx)(i.p,{children:"Tech:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Deployment stack","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["CI/CD - ",(0,s.jsx)(i.a,{href:"https://azure.microsoft.com/en-us/products/devops/pipelines",children:"Azure Pipelines"})]}),"\n",(0,s.jsxs)(i.li,{children:["Monitoring - ",(0,s.jsx)(i.a,{href:"https://www.datadoghq.com/",children:"Datadog"})]}),"\n",(0,s.jsxs)(i.li,{children:["Cloud - ",(0,s.jsx)(i.a,{href:"https://azure.microsoft.com/",children:"Azure"})]}),"\n",(0,s.jsxs)(i.li,{children:["Legacy","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Compute - On-prem Windows VMs running ",(0,s.jsx)(i.a,{href:"https://www.iis.net/",children:"IIS"})]}),"\n",(0,s.jsxs)(i.li,{children:["Logging - ",(0,s.jsx)(i.a,{href:"https://datalust.co/seq",children:"SEQ"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["New/Green-field","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Containerization - ",(0,s.jsx)(i.a,{href:"https://www.docker.com/",children:"Docker"})]}),"\n",(0,s.jsxs)(i.li,{children:["Container Orchestration - ",(0,s.jsx)(i.a,{href:"https://kubernetes.io/",children:"Kubernetes"})]}),"\n",(0,s.jsxs)(i.li,{children:["Logging - ",(0,s.jsx)(i.a,{href:"https://www.elastic.co/elasticsearch",children:"Elasticsearch"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"is-sre-for-you",children:"Is SRE for you?"}),"\n",(0,s.jsx)(i.p,{children:"If you are interested in the operations aspect of software (deploying/monitoring/maintaining), then SRE may be for you. SRE may be less programming heavy than development, which may be a good fit for people interested in software, but not necessarily programming. Note that it is likely that some programming knowledge would be required, or at the very least helpful, for many SRE roles."}),"\n",(0,s.jsx)(i.p,{children:"At this point, I don't think SRE is the role for me. Mostly because I enjoy the programming/development aspect of software. That said, I am very interested in SRE in terms of being able to run/deploy and support my own applications, and I just enjoy learning stuff in general."}),"\n",(0,s.jsx)(i.h3,{id:"salary",children:"Salary"}),"\n",(0,s.jsx)(i.p,{children:"As with all potential careers, salary is relevant. Here are a few links to various salary sites:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["glassdoor - ",(0,s.jsx)(i.a,{href:"https://www.glassdoor.com/Salaries/site-reliability-engineer-salary-SRCH_KO0,25.htm",children:"https://www.glassdoor.com/Salaries/site-reliability-engineer-salary-SRCH_KO0,25.htm"})]}),"\n",(0,s.jsxs)(i.li,{children:["hired.com - ",(0,s.jsx)(i.a,{href:"https://hired.com/salaries/site-reliability-engineer-sre",children:"https://hired.com/salaries/site-reliability-engineer-sre"})]}),"\n",(0,s.jsxs)(i.li,{children:["levels.fyi - ",(0,s.jsx)(i.a,{href:"https://www.levels.fyi/t/software-engineer/focus/site-reliability-sre",children:"https://www.levels.fyi/t/software-engineer/focus/site-reliability-sre"})]}),"\n",(0,s.jsxs)(i.li,{children:["payscale.com - ",(0,s.jsx)(i.a,{href:"https://www.payscale.com/research/US/Job=Site_Reliability_Engineer_(SRE)/Salary",children:"https://www.payscale.com/research/US/Job=Site_Reliability_Engineer_(SRE)/Salary"})]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"remote-work",children:"Remote Work"}),"\n",(0,s.jsx)(i.p,{children:"SRE roles, like other software roles, are often remote. Although in-person/hybrid jobs can also be found if that is something you prefer."}),"\n",(0,s.jsx)(i.h2,{id:"sre-conceptstoolsskills",children:"SRE Concepts/Tools/Skills"}),"\n",(0,s.jsx)(i.p,{children:"Here are some general concepts, tools, and skills that may be helpful for someone in an SRE position. Note that all of the items listed below are not necessarily hard requirements. Full proficiency is not necessarily required for each of the listed items, working knowledge will be enough in a lot of cases."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Logging/Monitoring","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"How to proactively detect issues with an application/network/etc."}),"\n",(0,s.jsx)(i.li,{children:"i.e. Datadog, ELK stack, etc."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Networking","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"How do DNS/Firewall/etc. work"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Deployment","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Docker/Kubernetes for containerized app management"}),"\n",(0,s.jsx)(i.li,{children:"Terraform for managing cloud infrastructure"}),"\n",(0,s.jsx)(i.li,{children:"Build/Deploy pipelines such as GitHub Actions/Jenkins/Azure Pipelines/etc."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Programming","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Bash/Linux CLI"}),"\n",(0,s.jsx)(i.li,{children:"Python"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsx)(i.p,{children:"Information about SRE from some large companies"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["AWS - ",(0,s.jsx)(i.a,{href:"https://aws.amazon.com/what-is/sre/",children:"https://aws.amazon.com/what-is/sre/"})]}),"\n",(0,s.jsxs)(i.li,{children:["Google - ",(0,s.jsx)(i.a,{href:"https://sre.google/",children:"https://sre.google/"})]}),"\n",(0,s.jsxs)(i.li,{children:["Redhat - ",(0,s.jsx)(i.a,{href:"https://www.redhat.com/en/topics/devops/what-is-sre",children:"https://www.redhat.com/en/topics/devops/what-is-sre"})]}),"\n",(0,s.jsxs)(i.li,{children:["Wikipedia - ",(0,s.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Site_reliability_engineering",children:"https://en.wikipedia.org/wiki/Site_reliability_engineering"})]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>o,a:()=>l});var s=n(7294);const r={},t=s.createContext(r);function l(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);