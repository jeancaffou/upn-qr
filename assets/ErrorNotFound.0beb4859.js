import{c as o,h as v,g as V,C as D,D as de,E as fe,F as re,G as ve,r as U,a as me,H as ge,I as P,T as he,l as be,J as ye,_ as pe,z as ke,q as xe,K as qe,B as Q,u as $e}from"./index.5e9689bf.js";import{c as H,h as Ee,b as z,d as _e}from"./render.3b63a565.js";import{c as Se}from"./dom.1b2fe6a8.js";const F={xs:18,sm:24,md:32,lg:38,xl:46},le={size:String};function ie(e,t=F){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const W="0 0 24 24",G=e=>e,I=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":G,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":I,"ion-ios":I,"ion-logo":I,"iconfont ":G,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},se={o_:"-outlined",r_:"-round",s_:"-sharp"},oe={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},we=new RegExp("^("+Object.keys(ue).join("|")+")"),Be=new RegExp("^("+Object.keys(se).join("|")+")"),X=new RegExp("^("+Object.keys(oe).join("|")+")"),Ce=/^[Mm]\s?[-+]?\.?\d/,Re=/^img:/,Le=/^svguse:/,Pe=/^ion-/,Te=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var J=H({name:"QIcon",props:{...le,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=V(),n=ie(e),u=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=o(()=>{let c,r=e.name;if(r==="none"||!r)return{none:!0};if(a.iconMapFn!==null){const s=a.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Ce.test(r)===!0){const[s,y=W]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(i=>{const[p,h,k]=i.split("@@");return v("path",{style:h,d:p,transform:k})})}}if(Re.test(r)===!0)return{img:!0,src:r.substring(4)};if(Le.test(r)===!0){const[s,y=W]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const b=r.match(we);if(b!==null)c=ue[b[1]](r);else if(Te.test(r)===!0)c=r;else if(Pe.test(r)===!0)c=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(X.test(r)===!0){c="notranslate material-symbols";const s=r.match(X);s!==null&&(r=r.substring(6),c+=oe[s[1]]),q=r}else{c="notranslate material-icons";const s=r.match(Be);s!==null&&(r=r.substring(2),c+=se[s[1]]),q=r}return{cls:c,content:q}});return()=>{const c={class:u.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,Ee(t.default)):f.value.img===!0?v("span",c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v("span",c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v("span",c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}});const Oe={size:{type:[Number,String],default:"1em"},color:String};function Ae(e){return{cSize:o(()=>e.size in F?`${F[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Me=H({name:"QSpinner",props:{...Oe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:a}=Ae(e);return()=>v("svg",{class:a.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function je(e,t=250){let a=!1,n;return function(){return a===!1&&(a=!0,setTimeout(()=>{a=!1},t),n=e.apply(this,arguments)),n}}function Y(e,t,a,n){a.modifiers.stop===!0&&re(e);const u=a.modifiers.color;let f=a.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),r=document.createElement("span"),q=ve(e),{left:b,top:s,width:y,height:i}=t.getBoundingClientRect(),p=Math.sqrt(y*y+i*i),h=p/2,k=`${(y-p)/2}px`,d=f?k:`${q.left-b-h}px`,x=`${(i-p)/2}px`,L=f?x:`${q.top-s-h}px`;r.className="q-ripple__inner",Se(r,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${d},${L},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${u?" text-"+u:""}`,c.setAttribute("dir","ltr"),c.appendChild(r),t.appendChild(c);const C=()=>{c.remove(),clearTimeout(R)};a.abort.push(C);let R=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${k},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,R=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,R=setTimeout(()=>{c.remove(),a.abort.splice(a.abort.indexOf(C),1)},275)},250)},50)}function Z(e,{modifiers:t,value:a,arg:n}){const u=Object.assign({},e.cfg.ripple,t,a);e.modifiers={early:u.early===!0,stop:u.stop===!0,center:u.center===!0,color:u.color||n,keyCodes:[].concat(u.keyCodes||13)}}var ze=_e({name:"ripple",beforeMount(e,t){const a=t.instance.$.appContext.config.globalProperties.$q.config||{};if(a.ripple===!1)return;const n={cfg:a,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&Y(u,e,n,u.qKeyEvent===!0)},keystart:je(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&D(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&Y(u,e,n,!0)},300)};Z(n,t),e.__qripple=n,de(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const a=e.__qripple;a!==void 0&&(a.enabled=t.value!==!1,a.enabled===!0&&Object(t.value)===t.value&&Z(a,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(a=>{a()}),fe(t,"main"),delete e._qripple)}});const ce={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ne=Object.keys(ce),Ke={align:{type:String,validator:e=>Ne.includes(e)}};function Ie(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${ce[t]}`})}function De(e){return e.appContext.config.globalProperties.$router!==void 0}function ee(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function te(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Fe(e,t){for(const a in t){const n=t[a],u=e[a];if(typeof n=="string"){if(n!==u)return!1}else if(Array.isArray(u)===!1||u.length!==n.length||n.some((f,c)=>f!==u[c]))return!1}return!0}function ne(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((a,n)=>a===t[n]):e.length===1&&e[0]===t}function Ve(e,t){return Array.isArray(e)===!0?ne(e,t):Array.isArray(t)===!0?ne(t,e):e===t}function Qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(Ve(e[a],t[a])===!1)return!1;return!0}const He={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Ue({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const a=V(),{props:n,proxy:u,emit:f}=a,c=De(a),r=o(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?o(()=>c===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>c===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),b=o(()=>q.value===!0?L(n.to):null),s=o(()=>b.value!==null),y=o(()=>r.value===!0||s.value===!0),i=o(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),p=o(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:b.value.href,target:n.target}:{}),h=o(()=>{if(s.value===!1)return-1;const{matched:m}=b.value,{length:$}=m,_=m[$-1];if(_===void 0)return-1;const w=u.$route.matched;if(w.length===0)return-1;const B=w.findIndex(te.bind(null,_));if(B>-1)return B;const N=ee(m[$-2]);return $>1&&ee(_)===N&&w[w.length-1].path!==N?w.findIndex(te.bind(null,m[$-2])):B}),k=o(()=>s.value===!0&&h.value!==-1&&Fe(u.$route.params,b.value.params)),d=o(()=>k.value===!0&&h.value===u.$route.matched.length-1&&Qe(u.$route.params,b.value.params)),x=o(()=>s.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":k.value===!0?` ${n.activeClass}`:"":"");function L(m){try{return u.$router.resolve(m)}catch{}return null}function C(m,{returnRouterError:$,to:_=n.to,replace:w=n.replace}={}){if(n.disable===!0)return m.preventDefault(),Promise.resolve(!1);if(m.metaKey||m.altKey||m.ctrlKey||m.shiftKey||m.button!==void 0&&m.button!==0||n.target==="_blank")return Promise.resolve(!1);m.preventDefault();const B=u.$router[w===!0?"replace":"push"](_);return $===!0?B:B.then(()=>{}).catch(()=>{})}function R(m){if(s.value===!0){const $=_=>C(m,_);f("click",m,$),m.defaultPrevented!==!0&&$()}else f("click",m)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:i,resolvedLink:b,linkIsActive:k,linkIsExactActive:d,linkClass:x,linkAttrs:p,getLink:L,navigateToRouterLink:C,navigateOnClick:R}}const ae={none:0,xs:4,sm:8,md:16,lg:24,xl:32},We={xs:8,sm:10,md:14,lg:20,xl:24},Ge=["button","submit","reset"],Xe=/[^\s]\/[^\s]/,Je=["flat","outline","push","unelevated"],Ye=(e,t)=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t,Ze={...le,...He,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Je.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,round:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ke.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function et(e){const t=ie(e,We),a=Ie(e),{hasRouterLink:n,hasLink:u,linkTag:f,linkAttrs:c,navigateOnClick:r}=Ue({fallbackTag:"button"}),q=o(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ae?ae[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),b=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),i=o(()=>Ye(e,"standard")),p=o(()=>{const d={tabindex:y.value};return u.value===!0?Object.assign(d,c.value):Ge.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Xe.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),h=o(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${b.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${i.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=o(()=>a.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:h,style:q,innerClasses:k,attributes:p,hasLink:u,linkTag:f,navigateOnClick:r,isActionable:s}}const{passiveCapture:E}=be;let T=null,O=null,A=null;var tt=H({name:"QBtn",props:{...Ze,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:a}){const{proxy:n}=V(),{classes:u,style:f,innerClasses:c,attributes:r,hasLink:q,linkTag:b,navigateOnClick:s,isActionable:y}=et(e),i=U(null),p=U(null);let h=null,k,d=null;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),L=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),C=o(()=>({center:e.round})),R=o(()=>{const l=Math.max(0,Math.min(100,e.percentage));return l>0?{transition:"transform 0.6s",transform:`translateX(${l-100}%)`}:{}}),m=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const l={onClick:_,onKeydown:w,onMousedown:N};if(n.$q.platform.has.touch===!0){const g=e.onTouchstart!==void 0?"":"Passive";l[`onTouchstart${g}`]=B}return l}return{onClick:P}}),$=o(()=>({ref:i,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:f.value,...r.value,...m.value}));function _(l){if(i.value!==null){if(l!==void 0){if(l.defaultPrevented===!0)return;const g=document.activeElement;if(e.type==="submit"&&g!==document.body&&i.value.contains(g)===!1&&g.contains(i.value)===!1){i.value.focus();const K=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",K,E),i.value!==null&&i.value.removeEventListener("blur",K,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",K,E),i.value.addEventListener("blur",K,E)}}s(l)}}function w(l){i.value!==null&&(a("keydown",l),D(l,[13,32])===!0&&O!==i.value&&(O!==null&&M(),l.defaultPrevented!==!0&&(i.value.focus(),O=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),i.value.addEventListener("blur",S,E)),P(l)))}function B(l){i.value!==null&&(a("touchstart",l),l.defaultPrevented!==!0&&(T!==i.value&&(T!==null&&M(),T=i.value,h=l.target,h.addEventListener("touchcancel",S,E),h.addEventListener("touchend",S,E)),k=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,k=!1},200)))}function N(l){i.value!==null&&(l.qSkipRipple=k===!0,a("mousedown",l),l.defaultPrevented!==!0&&A!==i.value&&(A!==null&&M(),A=i.value,i.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,E)))}function S(l){if(i.value!==null&&!(l!==void 0&&l.type==="blur"&&document.activeElement===i.value)){if(l!==void 0&&l.type==="keyup"){if(O===i.value&&D(l,[13,32])===!0){const g=new MouseEvent("click",l);g.qKeyEvent=!0,l.defaultPrevented===!0&&ye(g),l.cancelBubble===!0&&re(g),i.value.dispatchEvent(g),P(l),l.qKeyEvent=!0}a("keyup",l)}M()}}function M(l){const g=p.value;l!==!0&&(T===i.value||A===i.value)&&g!==null&&g!==document.activeElement&&(g.setAttribute("tabindex",-1),g.focus()),T===i.value&&(h!==null&&(h.removeEventListener("touchcancel",S,E),h.removeEventListener("touchend",S,E)),T=h=null),A===i.value&&(document.removeEventListener("mouseup",S,E),A=null),O===i.value&&(document.removeEventListener("keyup",S,!0),i.value!==null&&i.value.removeEventListener("blur",S,E),O=null),i.value!==null&&i.value.classList.remove("q-btn--active")}function j(l){P(l),l.qSkipRipple=!0}return me(()=>{M(!0)}),Object.assign(n,{click:_}),()=>{let l=[];e.icon!==void 0&&l.push(v(J,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&l.push(v("span",{class:"block"},[e.label])),l=z(t.default,l),e.iconRight!==void 0&&e.round===!1&&l.push(v(J,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const g=[v("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&g.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:R.value})])),g.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},l)),e.loading!==null&&g.push(v(he,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Me)])]:null)),ge(v(b.value,$.value,g),[[ze,L.value,void 0,C.value]])}}});const nt=ke({name:"ErrorNotFound"}),at={class:"fullscreen bg-blue text-white text-center q-pa-md flex flex-center"},rt=Q("div",{style:{"font-size":"30vh"}}," 404 ",-1),lt=Q("div",{class:"text-h2",style:{opacity:".4"}}," Oops. Nothing here... ",-1);function it(e,t,a,n,u,f){return xe(),qe("div",at,[Q("div",null,[rt,lt,$e(tt,{class:"q-mt-xl",color:"white","text-color":"blue",unelevated:"",to:"/",label:"Go Home","no-caps":""})])])}var ct=pe(nt,[["render",it]]);export{ct as default};
