if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const c=e=>i(e,l),u={module:{uri:l},exports:o,require:c};s[l]=Promise.all(n.map((e=>u[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"emuix"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.66232473.css",revision:null},{url:"/css/app.d4d7f94b.css",revision:null},{url:"/css/chunk-vendors.cc486695.css",revision:null},{url:"/final.jpg",revision:"f60630f9ea7165d89d597542b206376b"},{url:"/finalC.jpg",revision:"078928dadb0ede0211827a6c20051b22"},{url:"/img/final.edb2544f.jpg",revision:null},{url:"/index.html",revision:"633799e6f18201d43f1983c9efb9a4a0"},{url:"/js/about.71ccaa4f.js",revision:null},{url:"/js/app.c4e89e40.js",revision:null},{url:"/js/chunk-vendors.8dc01ceb.js",revision:null},{url:"/manifest.json",revision:"ed11acc428c542d5b37cf563c9792862"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
