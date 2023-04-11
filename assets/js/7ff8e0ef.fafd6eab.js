"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},g=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=i,m=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return r?n.createElement(m,o(o({ref:t},g),{},{components:r})):n.createElement(m,o({ref:t},g))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_label:"Gorgias"},o="Gorgias API wiki",s={unversionedId:"providers/gorgias",id:"providers/gorgias",title:"Gorgias API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/gorgias.md",sourceDirName:"providers",slug:"/providers/gorgias",permalink:"/providers/gorgias",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/gorgias.md",tags:[],version:"current",frontMatter:{sidebar_label:"Gorgias"},sidebar:"nango",previous:{title:"GSheet",permalink:"/providers/google-sheet"},next:{title:"Greenhouse",permalink:"/providers/greenhouse"}},p={},l=[{value:"Using Gorgias with Nango",id:"using-gorgias-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],g={toc:l};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gorgias-api-wiki"},"Gorgias API wiki"),(0,i.kt)("admonition",{title:"Working with the Gorgias API?",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/gorgias.md"},"editing this page"),".")),(0,i.kt)("h2",{id:"using-gorgias-with-nango"},"Using Gorgias with Nango"),(0,i.kt)("p",null,"Provider template name in Nango: ",(0,i.kt)("inlineCode",{parentName:"p"},"gorgias"),(0,i.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,i.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Gorgias in 5 minutes."),(0,i.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rating: ",(0,i.kt)("inlineCode",{parentName:"strong"},"Easy & fast")),"\nRegistering an app takes only a few minutes, and you can start building immediately: ",(0,i.kt)("a",{parentName:"p",href:"https://developers.gorgias.com/docs/1-register-on-developer-portal"},"App registration docs")),(0,i.kt)("h2",{id:"useful-links"},"Useful links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.gorgias.com/docs/1-register-on-developer-portal"},"How to register an Application")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.gorgias.com/docs/oauth2-authentication-for-creating-apps-with-gorgias"},"OAuth-related docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.gorgias.com/docs/oauth2-scopes"},"List of OAuth scopes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developers.gorgias.com/reference/introduction"},"Web API docs (their REST API)"))),(0,i.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To refresh tokens, you will need to set the ",(0,i.kt)("inlineCode",{parentName:"li"},"offline")," as part of the scopes when creating an integration. "),(0,i.kt)("li",{parentName:"ul"},"To refresh the token simple use ",(0,i.kt)("inlineCode",{parentName:"li"},"nango.getToken()")," to generate new set of tokens.")))}c.isMDXComponent=!0}}]);