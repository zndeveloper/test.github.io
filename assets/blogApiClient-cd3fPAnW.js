var a=Object.defineProperty;var r=(n,e,t)=>e in n?a(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var o=(n,e,t)=>(r(n,typeof e!="symbol"?e+"":e,t),t);import{a as i}from"./apiClient-Hrr0e7fx.js";import{A as s,M as l}from"./AbstractApiClient-0xmu0Kex.js";function p(n){return n.substring(0,n.lastIndexOf("/")+1)}function d(n){const e=/src="(.+)"/gi;if(n.contentRef){const t="/rest-api/"+p(n.contentRef);n.content=n.content.replaceAll(e,'src="'+t+'$1"')}}function u(n){const e=new l;n.contentMd&&(n.content=e.render(n.contentMd))}async function f(n){if(n.contentRef){const e=n.contentRef.split(".").pop(),t=await i.getText(n.contentRef);e.toLowerCase()==="md"?n.contentMd=t:n.content=t}return u(n),d(n),n}class g extends s{constructor(){super(...arguments);o(this,"listUri","blog/list.json")}fetchById(t){return super.fetchById(t).then(c=>f(c))}}const A=new g;export{A as b};
