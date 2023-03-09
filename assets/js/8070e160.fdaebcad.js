"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(i,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),s=n(6550),i=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=m({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=i??p;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var f=n(2389);const k="tabList__CuJ",y="tabItem_LNqP";function N(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),i(a))},h=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},l,{className:(0,r.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",k)},o.createElement(N,(0,a.Z)({},e,t)),o.createElement(b,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}},2257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),l=n(5162);const s={sidebar_label:"Quickstart \ud83d\ude80"},i="Quickstart: Add Nango to your app",u={unversionedId:"quickstart",id:"quickstart",title:"Quickstart: Add Nango to your app",description:"Just want to see Nango in Action? Check out our 1 minute demo video",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/quickstart.md",tags:[],version:"current",frontMatter:{sidebar_label:"Quickstart \ud83d\ude80"},sidebar:"nango",previous:{title:"Introduction",permalink:"/"},next:{title:"Core Concepts",permalink:"/reference/core-concepts"}},c={},p=[{value:"Step 1: Get your Nango instance ready",id:"step-1-get-your-nango-instance-ready",level:2},{value:"Step 2: Configure your API/Integration",id:"step-2-configure-your-apiintegration",level:2},{value:"Step 3: Trigger the OAuth flow from the frontend",id:"step-3-trigger-the-oauth-flow-from-the-frontend",level:2},{value:"Step 4: Obtain the access token from the backend",id:"step-4-obtain-the-access-token-from-the-backend",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"Backend SDK",id:"backend-sdk",level:3},{value:"REST API",id:"rest-api",level:3},{value:"Need help?",id:"need-help",level:2}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quickstart-add-nango-to-your-app"},"Quickstart: Add Nango to your app"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Just want to see Nango in Action? Check out our ",(0,o.kt)("a",{parentName:"p",href:"/#demo"},"1 minute demo video"))),(0,o.kt)("p",null,"Follow these 4 steps to run OAuth flows with Nango in your app in 15 minutes."),(0,o.kt)("h2",{id:"step-1-get-your-nango-instance-ready"},"Step 1: Get your Nango instance ready"),(0,o.kt)("p",null,"The easiest and fastest way to get a production ready Nango instance is with Nango Cloud."),(0,o.kt)(r.Z,{groupId:"deployment",queryString:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cloud",label:"Nango Cloud",mdxType:"TabItem"},"Sign up for a Nango Cloud (no credit card required):",(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://app.nango.dev/signup",style:{cursor:"pointer"}},(0,o.kt)("img",{src:"https://raw.githubusercontent.com/NangoHQ/nango/6f49ab92c0ffc18c1d0f44d9bd96c62ac97aaa8d/docs/static/img/nango-deploy-button.svg",alt:"Try Nango Cloud",width:"215",style:{marginTop:"10px"}})),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("p",null,"After you sign up you should be redirected to the ",(0,o.kt)("a",{parentName:"p",href:"https://app.nango.dev/integrations"},"Integrations page"),". You are ready for step 2!")),(0,o.kt)(l.Z,{value:"localhost",label:"Localhost",mdxType:"TabItem"},"You can try Nango on your local machine with docker compose:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/NangoHQ/nango-quickstart.git && cd nango-quickstart\ndocker compose up # Keep the tab open\n")),(0,o.kt)("p",null,"After you see the message that Nango is running, open the ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3003/"},"dashboard")," in your browser.")),(0,o.kt)(l.Z,{value:"self-hosted",label:"Self-hosted",mdxType:"TabItem"},(0,o.kt)("p",null,"You can self-host Nango on a single machine with our docker images. Check the ",(0,o.kt)("a",{parentName:"p",href:"/category/deploy-nango-self-hosted"},"Nango Self Hosted")," page for a list of all providers, or use these 1-click deploy options:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://render.com/deploy?repo=https://github.com/NangoHQ/nango-render"},(0,o.kt)("img",{parentName:"a",src:"https://render.com/images/deploy-to-render-button.svg",alt:"Deploy to Render"}))),(0,o.kt)("a",{href:"https://heroku.com/deploy?template=https://github.com/NangoHQ/nango-heroku"},(0,o.kt)("img",{src:"https://www.herokucdn.com/deploy/button.svg",alt:"Deploy to heroku",width:"200"})),(0,o.kt)("p",null,"Once you have setup your instance, open the dashboard at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<NANGO-HOST-AND-PORT>"),"."))),(0,o.kt)("h2",{id:"step-2-configure-your-apiintegration"},"Step 2: Configure your API/Integration"),(0,o.kt)("p",null,'Click the "Add New" button on the dashboard\'s integrations page, it will ask for you for 4 things:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find your Provider/API in the dropdown. If needed, we also have a ",(0,o.kt)("a",{parentName:"p",href:"/providers"},"list of supported APIs")," in the docs here.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Decide what this config should be called in Nango, we call this the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONFIG-KEY>"),' here and the UI calls it the "Unique Key". Most people pick the same name as the API, e.g. ',(0,o.kt)("inlineCode",{parentName:"p"},"github"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create an OAuth app on your Provider's developer portal. Obtain the client id & client secret (sometimes also called app id and app secret or similar) and add them.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You should also get a list of scopes you want to request. Prepare them in a comma separated list: ",(0,o.kt)("inlineCode",{parentName:"p"},"scope1,scope2,scope3")," (no matter what the provider tells you, Nango will reformat them) and add them to the Scopes field."))),(0,o.kt)("p",null,'Click "Save" and you are ready to trigger your first OAuth flow!'),(0,o.kt)("h2",{id:"step-3-trigger-the-oauth-flow-from-the-frontend"},"Step 3: Trigger the OAuth flow from the frontend"),(0,o.kt)("p",null,"To trigger an OAuth flow in your frontend use our frontend SDK."),(0,o.kt)(r.Z,{groupId:"deployment",queryString:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cloud",label:"Nango Cloud",mdxType:"TabItem"},(0,o.kt)("p",null,"You will need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Public Key")," from your ",(0,o.kt)("a",{parentName:"p",href:"https://app.nango.dev/project-settings"},"Dashboard's project settings")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONFIG-KEY>")," from the last step."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Nango from 'https://unpkg.com/@nangohq/frontend/dist/index.js'; // For quick testing\n// or\nimport Nango from '@nangohq/frontend'; // After installing the npm package\n\nvar nango = new Nango({ publicKey: '<PUBLIC-KEY>' });\n\n// Trigger an OAuth flow\n// Param 1: config key from Step 2 (bullet 4)\n// Param 2: ID you will use to retrieve the connection (most often the user ID)\nnango\n    .auth('<CONFIG-KEY>', '<CONNECTION-ID>')\n    .then((result) => {\n        console.log(`OAuth flow succeeded for provider \"${result.providerConfigKey}\" and connection-id \"${result.connectionId}\"!`);\n    })\n    .catch((error) => {\n        console.error(`There was an error in the OAuth flow for integration: ${error.message}`);\n    });\n"))),(0,o.kt)(l.Z,{value:"localhost",label:"Localhost",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Nango from 'https://unpkg.com/@nangohq/frontend/dist/index.js'; // For quick testing\n// or\nimport Nango from '@nangohq/frontend'; // After installing the npm package\n\nvar nango = new Nango({ host: 'http://localhost:3003' });\n\n// Trigger an OAuth flow\n// Param 1: config key from Step 2 (bullet 4)\n// Param 2: ID you will use to retrieve the connection (most often the user ID)\nnango\n    .auth('<CONFIG-KEY>', '<CONNECTION-ID>')\n    .then((result) => {\n        console.log(`OAuth flow succeeded for provider \"${result.providerConfigKey}\" and connection-id \"${result.connectionId}\"!`);\n    })\n    .catch((error) => {\n        console.error(`There was an error in the OAuth flow for integration: ${error.message}`);\n    });\n"))),(0,o.kt)(l.Z,{value:"self-hosted",label:"Self-hosted",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import Nango from 'https://unpkg.com/@nangohq/frontend/dist/index.js'; // For quick testing\n// or\nimport Nango from '@nangohq/frontend'; // After installing the npm package\n\nvar nango = new Nango({ host: '<NANGO-HOST-AND-PORT>' });\n\n// Trigger an OAuth flow\n// Param 1: config key from Step 2 (bullet 4)\n// Param 2: ID you will use to retrieve the connection (most often the user ID)\nnango\n    .auth('<CONFIG-KEY>', '<CONNECTION-ID>')\n    .then((result) => {\n        console.log(`OAuth flow succeeded for provider \"${result.providerConfigKey}\" and connection-id \"${result.connectionId}\"!`);\n    })\n    .catch((error) => {\n        console.error(`There was an error in the OAuth flow for integration: ${error.message}`);\n    });\n")))),(0,o.kt)("p",null,"If you are using server side rendering (SSR) with NextJS, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NangoHQ/nango/issues/335#issuecomment-1431757714"},"use this workaround"),"."),(0,o.kt)("p",null,"With the frontend part ready, you should now be able to run a full OAuth flow from your app while Nango will retrieve, store and refresh tokens automatically."),(0,o.kt)("p",null,"Go ahead & try it! \ud83d\ude4c"),(0,o.kt)("h2",{id:"step-4-obtain-the-access-token-from-the-backend"},"Step 4: Obtain the access token from the backend"),(0,o.kt)("p",null,"There are a few different way in which you can obtain access tokens from Nango. The dashboard is great for testing, but in your app we recommend using the ",(0,o.kt)("a",{parentName:"p",href:"/reference/node-sdk"},"node SDK")," or the ",(0,o.kt)("a",{parentName:"p",href:"/reference/connections-api"},"Connections REST API"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Make sure you always have a fresh access token"),(0,o.kt)("br",{parentName:"p"}),"\n","Many OAuth providers provide short-lived access tokens (30-60 minutes). Nango refreshes them automatically for you, but it is important that you always request the access token right before each API call. Otherwise you may work with a stale token that has been revoked and your API call will fail.")),(0,o.kt)("h3",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"Find the Connection in your ",(0,o.kt)("a",{parentName:"p",href:"https://app.nango.dev/connections"},'dashboard\'s "Connections" page'),'. Click "View" to see the current access token and details.'),(0,o.kt)("h3",{id:"backend-sdk"},"Backend SDK"),(0,o.kt)("p",null,"If you work with Node, Nango offers a ",(0,o.kt)("a",{parentName:"p",href:"/reference/node-sdk"},"node SDK")," to retrieve tokens (more languages coming)."),(0,o.kt)(r.Z,{groupId:"deployment",queryString:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cloud",label:"Nango Cloud",mdxType:"TabItem"},(0,o.kt)("p",null,"You will need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret Key")," from your ",(0,o.kt)("a",{parentName:"p",href:"https://app.nango.dev/project-settings"},"Dashboard's project settings"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Nango } from '@nangohq/node';\n\nlet nango = new Nango({ secretKey: '<SECRET-KEY>' });\n\nlet accessToken = await nango.getToken('<CONFIG-KEY>', '<CONNECTION-ID>');\n"))),(0,o.kt)(l.Z,{value:"localhost",label:"Localhost",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Nango } from '@nangohq/node';\n\nlet nango = new Nango({ host: 'http://localhost:3003' });\n\nlet accessToken = await nango.getToken('<CONFIG-KEY>', '<CONNECTION-ID>');\n"))),(0,o.kt)(l.Z,{value:"self-hosted",label:"Self-hosted",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Nango } from '@nangohq/node';\n\nlet nango = new Nango({ host: '<NANGO-HOST-AND-PORT>' });\n\nlet accessToken = await nango.getToken('<CONFIG-KEY>', '<CONNECTION-ID>');\n")))),(0,o.kt)("h3",{id:"rest-api"},"REST API"),(0,o.kt)("p",null,"You can use the Nango ",(0,o.kt)("a",{parentName:"p",href:"/reference/connections-api"},"Connections REST API")," to retrieve connection details & the current access token:"),(0,o.kt)(r.Z,{groupId:"deployment",queryString:!0,mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cloud",label:"Nango Cloud",mdxType:"TabItem"},(0,o.kt)("p",null,"You will need the ",(0,o.kt)("inlineCode",{parentName:"p"},"Secret Key")," from your ",(0,o.kt)("a",{parentName:"p",href:"https://app.nango.dev/project-settings"},"Dashboard's project settings"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl 'https://api.nango.dev/connection/<CONNECTION-ID>?provider_config_key=<CONFIG-KEY>'\\\n-H 'Authorization: Bearer <SECRET-KEY>'\n"))),(0,o.kt)(l.Z,{value:"localhost",label:"Localhost",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl 'http://localhost:3003/connection/<CONNECTION-ID>?provider_config_key=<CONFIG-KEY>'\n"))),(0,o.kt)(l.Z,{value:"self-hosted",label:"Self-hosted",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl '<NANGO-HOST-AND-PORT>/connection/<CONNECTION-ID>?provider_config_key=<CONFIG-KEY>'\n")))),(0,o.kt)("h2",{id:"need-help"},"Need help?"),(0,o.kt)("p",null,"If you run into any trouble whilst setting up Nango or have any questions please do not hesitate to contact us - we are happy to help!"),(0,o.kt)("p",null,"Please join our ",(0,o.kt)("a",{parentName:"p",href:"https://nango.dev/slack"},"Slack community"),", where we are very active, and we will do our best to help you fast."))}h.isMDXComponent=!0}}]);