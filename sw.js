if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,f)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const o=e=>c(e,n),r={module:{uri:n},exports:a,require:o};s[n]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(f(...e),a)))}}define(["./workbox-17c5f633"],(function(e){"use strict";e.setCacheNameDetails({prefix:"upn-qr"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/dom.08fd5113.js",revision:"bca8c2acb111bf4c50b489f4b9af3329"},{url:"assets/ErrorNotFound.43e0103c.js",revision:"f0f92eea296abdd697372a1686c5725a"},{url:"assets/fastclick.8a4a8267.js",revision:"40efabedb876d409f1732920a78f9ae0"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.83be7b2f.woff2",revision:"393b5d8b3fd798486652801f3ee8c6ea"},{url:"assets/index.7a1e2ad1.css",revision:"e020e9eb53adcbbd8b34ce150a99c13c"},{url:"assets/index.e4d5527b.js",revision:"a9996a30288a6e44ab9d5b26b76c7bed"},{url:"assets/IndexPage.633f1349.js",revision:"c794e053a74d697c6e7678d6074d6537"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.193dc948.js",revision:"7122fdf9d04397ab1891841f3bc5be3b"},{url:"assets/QBtn.448fcfc0.js",revision:"5ed0b6e13fa9ecefc1164cc9a3d29808"},{url:"assets/scroll.0bfad50a.js",revision:"7e91d1ca24987986b588d28e3ec054a2"},{url:"favicon.ico",revision:"6150c4f8261878790f96c2a05efadd6a"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"f43206b80af9e23e571a41f8166fbf0c"},{url:"icons/favicon-16x16.png",revision:"7c8c921db1f12e77677af76a04a75890"},{url:"icons/favicon-32x32.png",revision:"e2878706a13cf072cf671cc227c8d2ed"},{url:"icons/favicon-96x96.png",revision:"ed210eec7565554dbc7ff32189497094"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"index.html",revision:"e24281f843746769d3e0dd30c81a8941"},{url:"manifest.json",revision:"1f372aa1bf863bf130d62bc28b1c755f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
