if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let l={};const o=e=>i(e,c),u={module:{uri:c},exports:l,require:o};s[c]=Promise.all(n.map((e=>u[e]||o(e)))).then((e=>(r(...e),l)))}}define(["./workbox-f3ddde50"],(function(e){"use strict";e.setCacheNameDetails({prefix:"emuix"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/about.481214c9.css",revision:null},{url:"/css/app.cf6cf736.css",revision:null},{url:"/css/chunk-vendors.cc486695.css",revision:null},{url:"/final.jpg",revision:"f60630f9ea7165d89d597542b206376b"},{url:"/finalC.jpg",revision:"078928dadb0ede0211827a6c20051b22"},{url:"/img/final.edb2544f.jpg",revision:null},{url:"/index.html",revision:"bed17e8c55c3a38f65e68deacf673641"},{url:"/js/about.1d99a701.js",revision:null},{url:"/js/app.cb4baf01.js",revision:null},{url:"/js/chunk-vendors.8dc01ceb.js",revision:null},{url:"/manifest.json",revision:"ed11acc428c542d5b37cf563c9792862"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
