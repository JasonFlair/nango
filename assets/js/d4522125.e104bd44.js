"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l="Nango Cloud",u={unversionedId:"cloud",id:"cloud",title:"Nango Cloud",description:"Nango Cloud is hosted and managed by Nango.",source:"@site/docs/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/cloud",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/cloud.md",tags:[],version:"current",frontMatter:{},sidebar:"nango",previous:{title:"Zoom",permalink:"/providers/zoom"},next:{title:"Deploy Nango Open Source",permalink:"/category/deploy-nango-sync-open-source"}},i={},c=[{value:"Cloud Features",id:"cloud-features",level:2},{value:"\ud83d\ude80 Cloud Quickstart",id:"quickstart",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nango-cloud"},"Nango Cloud"),(0,a.kt)("p",null,"Nango Cloud is hosted and managed by Nango."),(0,a.kt)("h2",{id:"cloud-features"},"Cloud Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Auto-scaling: We make sure Nango scales, no matter the load you throw at it"),(0,a.kt)("li",{parentName:"ul"},"Auto-updates: Always enjoy the latest & greatest provider templates with no work"),(0,a.kt)("li",{parentName:"ul"},"Encryption at rest"),(0,a.kt)("li",{parentName:"ul"},"SSL"),(0,a.kt)("li",{parentName:"ul"},"Server authentication: Access is protected with a secret key"),(0,a.kt)("li",{parentName:"ul"},"Monitoring & alerting (soon)"),(0,a.kt)("li",{parentName:"ul"},"Admin panel for handling configs & metrics (soon)"),(0,a.kt)("li",{parentName:"ul"},"Production-grade support & 24h turnaround to implement new integrations")),(0,a.kt)("p",null,"Other feature ideas or questions? We would love to help or hear your input on the ",(0,a.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"Slack community"),"!"),(0,a.kt)("h2",{id:"quickstart"},"\ud83d\ude80 Cloud Quickstart"),(0,a.kt)("p",null,"In <5mins, learn how to access & manage OAuth tokens for any API, using Github as an example. Ready? Go! \u23f0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://nango.dev/start"},"Sign up")," to Nango Cloud (no credit card required) and get your ",(0,a.kt)("inlineCode",{parentName:"p"},"Server URL")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Secret")," (don't share!)."),(0,a.kt)("p",null,"On your local machine, configure them as environment variables (in your ",(0,a.kt)("inlineCode",{parentName:"p"},".zshrc")," or ",(0,a.kt)("inlineCode",{parentName:"p"},".bashrc"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export NANGO_HOSTPORT=SERVER_URL # Replace\nexport NANGO_SECRET_KEY=SECRET # Replace\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Restart your console")," and add a new Github OAuth App (created by us) to Nango:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'npx nango config:create github-cloud github 2682fa17f945844c2586 6d0f95b851a9d37c03f548762a9133ac87455f22 "user,public_repo"\n')),(0,a.kt)("p",null,"Complete the Github ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nango.dev/demo/github-cloud"},"OAuth flow"),". Nango will securely retrieve, store and refresh OAuth credentials. Now try:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx nango token:get 1 github-cloud\n")),(0,a.kt)("p",null,"Congrats \ud83e\udd73 You have a fresh token to access the Github API! Let's make sure it works (\u2757\ufe0freplace ",(0,a.kt)("inlineCode",{parentName:"p"},"TOKEN"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XGET -G "https://api.github.com/users/bastienbeurier/repos" \\\n    -H "Authorization: Bearer TOKEN"\n')),(0,a.kt)("p",null,"(In practice, you should use our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nango.dev/reference/guide#node-sdk"},"backend SDK")," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nango.dev/reference/guide#rest-api"},"REST API")," to fetch tokens from your codebase.)"),(0,a.kt)("p",null,"Wanna go live? Go through the more detailed ",(0,a.kt)("a",{parentName:"p",href:"/reference/guide"},"Step-By-Step Guide"),"."))}s.isMDXComponent=!0}}]);