if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const b=e=>n(e,s),f={module:{uri:s},exports:o,require:b};i[s]=Promise.all(c.map((e=>f[e]||b(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"192.bundle.js",revision:"411a68c8db97f09cea1237aa95c3febf"},{url:"2.bundle.js",revision:"22b42e5141982226e5c5ac408ba8de7b"},{url:"322b30424be12eb2eb14.gif",revision:null},{url:"app.webmanifest",revision:"c7ff1e0c124244342662f91f032b0627"},{url:"app~655b3202.bundle.js",revision:"e86a11bc20e2e6a6427b6feb129523ee"},{url:"app~655b3202.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"d951b67648dd860b5675a549f339034e"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"9147af027c56fb2c48c78b178ee7673a"},{url:"app~e4317507.bundle.js",revision:"bf9911fa0ef885298c6f8b3e1e6d9fb9"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"icon.jpeg",revision:"d11033ddffe9a4791fa966458544e9af"},{url:"icons/icon-128x128.png",revision:"bb1cf0424d15f19cba02ffbe448e50ec"},{url:"icons/icon-144x144.png",revision:"65c9cb68479b63dd41badab00a0f55d1"},{url:"icons/icon-152x152.png",revision:"821522a79d3326d65a446cb2eb5e2c2d"},{url:"icons/icon-192x192.png",revision:"7ef4d4dff2e420d6ebb3c652c73fa24d"},{url:"icons/icon-384x384.png",revision:"d00e78c9a4b56717122d47eeeb1b0c46"},{url:"icons/icon-512x512.png",revision:"0f255c072db3b4b6cc31bae270968504"},{url:"icons/icon-72x72.png",revision:"4e9b20b43bcbeeec1decd242a281cd8d"},{url:"icons/icon-96x96.png",revision:"6c375c9d3166a76617aba159141ac2df"},{url:"icons/resto-128x128.png",revision:"d0ecb170c15390234ea3b418b181fc95"},{url:"icons/resto-144x144.png",revision:"e202ec39421413215450430fa1056915"},{url:"icons/resto-152x152.png",revision:"f55e7f624c8854e26a3cf9569a6fc6cb"},{url:"icons/resto-192x192.png",revision:"e4e32b20cc041669e2fdb52675e115ce"},{url:"icons/resto-384x384.png",revision:"5cf64b8794d44ce4e9526355f67b3321"},{url:"icons/resto-512x512.png",revision:"bf154ccfb8e52f4c51a85388da0dd71e"},{url:"icons/resto-72x72.png",revision:"e5072078ce9bbeef493e3f5a694c96df"},{url:"icons/resto-96x96.png",revision:"460643c0c3b702ed85e1afa673d94dcb"},{url:"index.html",revision:"afaf767a669f533283e19ca2aed4574c"},{url:"resto.png",revision:"0398396d3a1b5d56324579b2ddde9716"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
