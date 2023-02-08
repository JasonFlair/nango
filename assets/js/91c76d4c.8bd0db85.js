"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,f=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="CLI",l={unversionedId:"reference/cli",id:"reference/cli",title:"CLI",description:"You can manage your Provider Configurations & Connections using the Nango CLI.",source:"@site/docs/reference/cli.md",sourceDirName:"reference",slug:"/reference/cli",permalink:"/reference/cli",draft:!1,editUrl:"https://github.com/nangohq/nango/tree/master/docs/docs/reference/cli.md",tags:[],version:"current",frontMatter:{},sidebar:"nango",previous:{title:"Step-by-step guide",permalink:"/reference/guide"},next:{title:"Advanced configuration",permalink:"/reference/configuration"}},c={},p=[{value:"Setting the Nango host &amp; secret key",id:"setting-the-nango-host--secret-key",level:2},{value:"Manage Provider Configurations",id:"manage-provider-configurations",level:2},{value:"List",id:"list",level:3},{value:"Get",id:"get",level:3},{value:"Create",id:"create",level:3},{value:"Edit",id:"edit",level:3},{value:"Delete",id:"delete",level:3},{value:"Manage Connections",id:"manage-connections",level:2},{value:"Get",id:"get-1",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli"},"CLI"),(0,o.kt)("p",null,"You can manage your Provider Configurations & Connections using the Nango CLI. "),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx nango")," to get a list of all CLI commands."),(0,o.kt)("h2",{id:"setting-the-nango-host--secret-key"},"Setting the Nango host & secret key"),(0,o.kt)("p",null,"By default, the CLI expects the Nango server to be reachable at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:3003"),". You can change this by setting the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"NANGO_HOSTPORT")," in your CLI environment."),(0,o.kt)("p",null,"If your instance is protected with a secret key (all Nango Cloud instances are, and hopefully your production instance is) you also need to set it with the ",(0,o.kt)("inlineCode",{parentName:"p"},"NANGO_SECRET_KEY")," environment variable."),(0,o.kt)("p",null,"We recommend you store both in a ",(0,o.kt)("inlineCode",{parentName:"p"},".bashrc")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".zshrc")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export NANGO_HOSTPORT=https://nango<instance-id>.onrender.com;\nexport NANGO_SECRET_KEY=<secret-key>;\n")),(0,o.kt)("h2",{id:"manage-provider-configurations"},"Manage Provider Configurations"),(0,o.kt)("h3",{id:"list"},"List"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx nango config:list")," to list all existing Provider Configurations."),(0,o.kt)("h3",{id:"get"},"Get"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx nango config:get <provider_config_key>")," to get a specific Provider Configurations."),(0,o.kt)("h3",{id:"create"},"Create"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx nango config:create <provider_config_key> <provider> <oauth_client_id> <oauth_client_secret> <oauth_scopes>")," to create a new Provider Configuration. If you specify multiple OAuth scopes in ",(0,o.kt)("inlineCode",{parentName:"p"},"<oauth_scopes>")," they should be separated by commas (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"oauth,read"),"), regardless of what the instructions of the OAuth provider are (Nango will reformat them if needed)."),(0,o.kt)("h3",{id:"edit"},"Edit"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx nango config:edit <provider_config_key> <provider> <oauth_client_id> <oauth_client_secret> <oauth_scopes>")," to edit an existing Provider Configuration. If you specify multiple OAuth scopes in ",(0,o.kt)("inlineCode",{parentName:"p"},"<oauth_scopes>")," they should be separated by commas (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"oauth,read"),"), regardless of what the instructions of the OAuth provider are (Nango will reformat them if needed)."),(0,o.kt)("h3",{id:"delete"},"Delete"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx nango config:delete <provider_config_key>")," to delete an existing Provider Configuration."),(0,o.kt)("h2",{id:"manage-connections"},"Manage Connections"),(0,o.kt)("h3",{id:"get-1"},"Get"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"npx nango connection:get <connection_id> <provider_config_key>")," to get a Connection with credentials."))}u.isMDXComponent=!0}}]);