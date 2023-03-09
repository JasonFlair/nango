"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7483],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(r),d=n,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||a;return r?o.createElement(f,i(i({ref:t},c),{},{components:r})):o.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9294:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_label:"Yahoo"},i="Yahoo API wiki",p={unversionedId:"providers/yahoo",id:"providers/yahoo",title:"Yahoo API wiki",description:"Please add your learnings, favorite links and gotchas here by editing this page.",source:"@site/docs/providers/yahoo.md",sourceDirName:"providers",slug:"/providers/yahoo",permalink:"/providers/yahoo",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/yahoo.md",tags:[],version:"current",frontMatter:{sidebar_label:"Yahoo"},sidebar:"nango",previous:{title:"Xero",permalink:"/providers/xero"},next:{title:"YouTube",permalink:"/providers/youtube"}},l={},s=[{value:"Using Yahoo with Nango",id:"using-yahoo-with-nango",level:2},{value:"App registration &amp; publishing",id:"app-registration--publishing",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"API specific gotchas",id:"api-specific-gotchas",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"yahoo-api-wiki"},"Yahoo API wiki"),(0,n.kt)("admonition",{title:"Working with the Yahoo API?",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please add your learnings, favorite links and gotchas here by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nangohq/nango/tree/master/docs/docs/providers/yahoo.md"},"editing this page"),".")),(0,n.kt)("h2",{id:"using-yahoo-with-nango"},"Using Yahoo with Nango"),(0,n.kt)("p",null,"Provider template name in Nango: ",(0,n.kt)("inlineCode",{parentName:"p"},"yahoo"),(0,n.kt)("br",{parentName:"p"}),"\n","Follow our ",(0,n.kt)("a",{parentName:"p",href:"/quickstart"},"quickstart")," to add an OAuth integration with Yahoo in 5 minutes."),(0,n.kt)("h2",{id:"app-registration--publishing"},"App registration & publishing"),(0,n.kt)("p",null,"Register you app on ",(0,n.kt)("a",{parentName:"p",href:"https://developer.yahoo.com/"},"Yahoo's developer portal")),(0,n.kt)("h2",{id:"useful-links"},"Useful links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.yahoo.com/"},"Yahoo developer portal"))),(0,n.kt)("h2",{id:"api-specific-gotchas"},"API specific gotchas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This OAuth flow seems to cover the APIs listed ",(0,n.kt)("a",{parentName:"li",href:"https://developer.yahoo.com/api"},"on this page"))))}u.isMDXComponent=!0}}]);