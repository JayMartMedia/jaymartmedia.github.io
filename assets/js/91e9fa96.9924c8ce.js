"use strict";(self.webpackChunkjaymartmedia=self.webpackChunkjaymartmedia||[]).push([[1692],{8254:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=s(5893),i=s(1151);const r={},a="Encryption",o={id:"helpful-resources/encryption",title:"Encryption",description:"E2EE (End-to-end encryption)",source:"@site/docs/helpful-resources/encryption.md",sourceDirName:"helpful-resources",slug:"/helpful-resources/encryption",permalink:"/articles/helpful-resources/encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/jaymartmedia/jaymartmedia.github.io/tree/main/docs/helpful-resources/encryption.md",tags:[],version:"current",frontMatter:{},sidebar:"resourcesSidebar",previous:{title:"DevOps",permalink:"/articles/helpful-resources/devops"},next:{title:"Kafka",permalink:"/articles/helpful-resources/kafka"}},h={},c=[{value:"E2EE (End-to-end encryption)",id:"e2ee-end-to-end-encryption",level:2},{value:"RSA (Rivest\u2013Shamir\u2013Adleman)",id:"rsa-rivestshamiradleman",level:2},{value:"Breaking RSA",id:"breaking-rsa",level:3},{value:"Diffie-Hellman key exchange",id:"diffie-hellman-key-exchange",level:2},{value:"AES (Advanced Encryption Standard)",id:"aes-advanced-encryption-standard",level:2},{value:"TLS (Transport Layer Security)",id:"tls-transport-layer-security",level:2},{value:"TLS Handshake",id:"tls-handshake",level:3},{value:"SP network (Substitution/Permutation)",id:"sp-network-substitutionpermutation",level:2},{value:"Elliptic Curve",id:"elliptic-curve",level:2}];function l(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"encryption",children:"Encryption"}),"\n",(0,n.jsx)(t.h2,{id:"e2ee-end-to-end-encryption",children:"E2EE (End-to-end encryption)"}),"\n",(0,n.jsxs)(t.p,{children:["Dr. Mike Pound explains how end-to-end encryption works, and vulnerabilities that could arise if e2e encryption could not be used: ",(0,n.jsx)(t.a,{href:"https://youtu.be/jkV1KEJGKRA",children:"https://youtu.be/jkV1KEJGKRA"})," (Computerphile)"]}),"\n",(0,n.jsx)(t.h2,{id:"rsa-rivestshamiradleman",children:"RSA (Rivest\u2013Shamir\u2013Adleman)"}),"\n",(0,n.jsx)(t.p,{children:"RSA is a standard asymmetric (public/private) key encryption algorithm. Often used for SSH keys, TLS handshakes, and more. RSA is slower than symmetric key algorithms such as AES, so RSA is typically used to exchange a primary key at the beginning of a session. Then the symmetric key is used to encrypt and decrypt the data payloads that are transmitted throughout the session."}),"\n",(0,n.jsx)(t.h3,{id:"breaking-rsa",children:"Breaking RSA"}),"\n",(0,n.jsxs)(t.p,{children:["computerphile: ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=-ShwJqAalOk",children:"https://www.youtube.com/watch?v=-ShwJqAalOk"})]}),"\n",(0,n.jsx)(t.h2,{id:"diffie-hellman-key-exchange",children:"Diffie-Hellman key exchange"}),"\n",(0,n.jsx)(t.p,{children:"The Diffie-Hellman key exchange is a way for two parties to create a shared symmetric encryption key."}),"\n",(0,n.jsxs)(t.p,{children:["In this video Dr. Mike Pound combines colored water to demonstrate how Diffie-Hellman allows two parties to create a shared symmetric key without knowing the others secret key: ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=NmM9HA2MQGI",children:"https://www.youtube.com/watch?v=NmM9HA2MQGI"})," (Computerphile)"]}),"\n",(0,n.jsxs)(t.p,{children:["In this video Dr. Mike Pound discusses the mathmathmatics behind Diffie-Hellman, specifically the concept of how (g",(0,n.jsx)("sup",{children:"a"}),")",(0,n.jsx)("sup",{children:"b"})," == g",(0,n.jsx)("sup",{children:"a*b"})," == (g",(0,n.jsx)("sup",{children:"b"}),")",(0,n.jsx)("sup",{children:"a"})," : ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=Yjrfm_oRO0w",children:"https://www.youtube.com/watch?v=Yjrfm_oRO0w"})," (Computerphile)"]}),"\n",(0,n.jsxs)(t.p,{children:["In this video Dr. Mike Pound explains how DH is susceptible to a man-in-the-middle attack and how RSA works in conjunction with DH to protect against this: ",(0,n.jsx)(t.a,{href:"https://youtu.be/vsXMMT2CqqE",children:"https://youtu.be/vsXMMT2CqqE"})," (Computerphile)"]}),"\n",(0,n.jsx)(t.h2,{id:"aes-advanced-encryption-standard",children:"AES (Advanced Encryption Standard)"}),"\n",(0,n.jsx)(t.p,{children:"AES is a standard symmetric key encryption algorithm that uses 128 bit blocks, with a 128, 192, or 256 bit key. Often used for SSL/TLS, file encryption, and more. AES is faster than RSA, and therefore typically used to encrypt and decrypt data payloads once both parties have the key."}),"\n",(0,n.jsxs)(t.p,{children:["In this video Dr. Mike Pound discusses how and why AES was chosen as the standard symmetric key encryption algorithm: ",(0,n.jsx)(t.a,{href:"https://youtu.be/VYech-c5Dic",children:"https://youtu.be/VYech-c5Dic"})," (Computerphile)"]}),"\n",(0,n.jsxs)(t.p,{children:["In this video Dr. Mike Pound walks through the AES algorithm: ",(0,n.jsx)(t.a,{href:"https://youtu.be/O4xNJsjtN6E",children:"https://youtu.be/O4xNJsjtN6E"})," (Computerphile)"]}),"\n",(0,n.jsx)(t.h2,{id:"tls-transport-layer-security",children:"TLS (Transport Layer Security)"}),"\n",(0,n.jsxs)(t.p,{children:["In this video Dr. Mike Point discusses where TLS came from and where it sits within the layers of the internet: ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=0TLDTodL7Lc",children:"https://www.youtube.com/watch?v=0TLDTodL7Lc"})," (Computerphile)"]}),"\n",(0,n.jsx)(t.h3,{id:"tls-handshake",children:"TLS Handshake"}),"\n",(0,n.jsxs)(t.p,{children:["In this video Dr. Mike Pound discusses the TLS handshake: ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=86cQJ0MMses",children:"https://www.youtube.com/watch?v=86cQJ0MMses"})," (Computerphile)"]}),"\n",(0,n.jsx)(t.h2,{id:"sp-network-substitutionpermutation",children:"SP network (Substitution/Permutation)"}),"\n",(0,n.jsxs)(t.p,{children:["In this video Dr. Mike Pound discusses the concept of a substitution and permutation network which is what AES is based on: ",(0,n.jsx)(t.a,{href:"https://youtu.be/DLjzI5dX8jc",children:"https://youtu.be/DLjzI5dX8jc"})," (Computerphile)"]}),"\n",(0,n.jsx)(t.h2,{id:"elliptic-curve",children:"Elliptic Curve"}),"\n",(0,n.jsx)(t.p,{children:"Elliptic Curve cryptography is an alternative to Diffie-Hellman. Elliptic curve is more difficult to reverse engineer and therefore can use shorter keys which speeds gives elliptic curve a speed advantage over Diffie-Hellman."}),"\n",(0,n.jsx)(t.p,{children:"There may be some curves which are not as secure as others (allow backdoors), therefore there are still researchers who are skeptical about trusting elliptic curve cryptography."}),"\n",(0,n.jsxs)(t.p,{children:["In this video Dr. Mike Pound explains the concept of elliptic curve cryptography: ",(0,n.jsx)(t.a,{href:"https://youtu.be/NF1pwjL9-DE",children:"https://youtu.be/NF1pwjL9-DE"})," (Computerphile)"]}),"\n",(0,n.jsxs)(t.p,{children:["In this video Dr. Mike Pound discusses a time when NIST pushed for specific values for P and Q which along with other circumstances led researchers to believe that these values of P and Q allowed the NSA a backdoor into keys generated using these values: ",(0,n.jsx)(t.a,{href:"https://youtu.be/nybVFJVXbww",children:"https://youtu.be/nybVFJVXbww"})," (Computerphile)"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var n=s(7294);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);