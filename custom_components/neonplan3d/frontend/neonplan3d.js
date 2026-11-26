Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Ka=new URL(import.meta.url),Ba=Ka.searchParams.get("v"),qa=o=>new URL(`./fonts/${o}${Ba?`?v=${Ba}`:""}`,Ka).href,Ua="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Ga(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${qa("figtree.woff2")}) format("woff2");unicode-range:${Ua}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${qa("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Ua}}`,document.head.append(o)}function Ya(o,e){var t,n;return e==="metric"||e==="imperial"?e:((n=(t=o==null?void 0:o.config)==null?void 0:t.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function Ih(o,e){return String(Number(o.toFixed(e)))}function Qa(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),i=Math.floor(n/12+1e-9),r=n-i*12,s=Ih(r,e>=2?1:0);return i?r<.05?`${t}${i}'`:`${t}${i}' ${s}"`:`${t}${s}"`}function Ja(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,r=!1,s=!1,a=t;for(let l of t.matchAll(n)){let u=Number(l[1]);if(!Number.isFinite(u))return null;let d=l[2];r=!0,a=a.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(i+=u*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?i+=u*.0254:d==="mm"?i+=u/1e3:d==="cm"?i+=u/100:d==="m"?i+=u:i+=e==="imperial"?u*(s?.0254:.3048):u}return!r||/[^\s+]/.test(a)?null:i}function Kn(o){var t;let e=(t=o==null?void 0:o.locale)==null?void 0:t.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let n=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return n?{hourCycle:n==="h11"||n==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var Lo=globalThis,No=Lo.ShadowRoot&&(Lo.ShadyCSS===void 0||Lo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,or=Symbol(),Xa=new WeakMap,Gn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==or)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(No&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Xa.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Xa.set(t,e))}return e}toString(){return this.cssText}},Za=o=>new Gn(typeof o=="string"?o:o+"",void 0,or),fe=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,i,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[r+1],o[0]);return new Gn(t,o,or)},el=(o,e)=>{if(No)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),i=Lo.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,o.appendChild(n)}},ir=No?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Za(t)})(o):o;var{is:Ph,defineProperty:Eh,getOwnPropertyDescriptor:Th,getOwnPropertyNames:Ah,getOwnPropertySymbols:zh,getPrototypeOf:Rh}=Object,Do=globalThis,tl=Do.trustedTypes,Ch=tl?tl.emptyScript:"",rr=Do.reactiveElementPolyfillSupport,Yn=(o,e)=>o,sr={toAttribute(o,e){switch(e){case Boolean:o=o?Ch:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ol=(o,e)=>!Ph(o,e),nl={attribute:!0,type:String,converter:sr,reflect:!1,useDefault:!1,hasChanged:ol};Symbol.metadata??=Symbol("metadata"),Do.litPropertyMetadata??=new WeakMap;var mt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=nl){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Eh(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){let{get:i,set:r}=Th(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:i,set(s){let a=i==null?void 0:i.call(this);r==null||r.call(this,s),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??nl}static _$Ei(){if(this.hasOwnProperty(Yn("elementProperties")))return;let e=Rh(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Yn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yn("properties"))){let t=this.properties,n=[...Ah(t),...zh(t)];for(let i of n)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let i of n)t.unshift(ir(i))}else e!==void 0&&t.push(ir(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return el(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var r;let n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){let s=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:sr).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){var r,s;let n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let a=n.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((r=a.converter)==null?void 0:r.fromAttribute)!==void 0?a.converter:sr;this._$Em=i;let u=l.fromAttribute(t,a.type);this[i]=u??((s=this._$Ej)==null?void 0:s.get(i))??u,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){var s;if(e!==void 0){let a=this.constructor;if(i===!1&&(r=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ol)(r,t)||n.useDefault&&n.reflect&&r===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,s]of i){let{wrapped:a}=s,l=this[r];a!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,s,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},mt[Yn("elementProperties")]=new Map,mt[Yn("finalized")]=new Map,rr==null||rr({ReactiveElement:mt}),(Do.reactiveElementVersions??=[]).push("2.1.2");var fr=globalThis,il=o=>o,Vo=fr.trustedTypes,rl=Vo?Vo.createPolicy("lit-html",{createHTML:o=>o}):void 0,ul="$lit$",It=`lit$${Math.random().toFixed(9).slice(2)}$`,pl="?"+It,Fh=`<${pl}>`,Kt=document,Jn=()=>Kt.createComment(""),Xn=o=>o===null||typeof o!="object"&&typeof o!="function",mr=Array.isArray,Oh=o=>mr(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",ar=`[ 	
\f\r]`,Qn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,sl=/-->/g,al=/>/g,qt=RegExp(`>|${ar}(?:([^\\s"'>=/]+)(${ar}*=${ar}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ll=/'/g,cl=/"/g,hl=/^(?:script|style|textarea|title)$/i,gr=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),g=gr(1),gt=gr(2),Vb=gr(3),Gt=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),dl=new WeakMap,Ut=Kt.createTreeWalker(Kt,129);function fl(o,e){if(!mr(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return rl!==void 0?rl.createHTML(e):e}var Hh=(o,e)=>{let t=o.length-1,n=[],i,r=e===2?"<svg>":e===3?"<math>":"",s=Qn;for(let a=0;a<t;a++){let l=o[a],u,d,c=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===Qn?d[1]==="!--"?s=sl:d[1]!==void 0?s=al:d[2]!==void 0?(hl.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=qt):d[3]!==void 0&&(s=qt):s===qt?d[0]===">"?(s=i??Qn,c=-1):d[1]===void 0?c=-2:(c=s.lastIndex-d[2].length,u=d[1],s=d[3]===void 0?qt:d[3]==='"'?cl:ll):s===cl||s===ll?s=qt:s===sl||s===al?s=Qn:(s=qt,i=void 0);let h=s===qt&&o[a+1].startsWith("/>")?" ":"";r+=s===Qn?l+Fh:c>=0?(n.push(u),l.slice(0,c)+ul+l.slice(c)+It+h):l+It+(c===-2?a:h)}return[fl(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Zn=class o{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0,a=e.length-1,l=this.parts,[u,d]=Hh(e,t);if(this.el=o.createElement(u,n),Ut.currentNode=this.el.content,t===2||t===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=Ut.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(ul)){let p=d[s++],h=i.getAttribute(c).split(It),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:h,ctor:f[1]==="."?dr:f[1]==="?"?ur:f[1]==="@"?pr:mn}),i.removeAttribute(c)}else c.startsWith(It)&&(l.push({type:6,index:r}),i.removeAttribute(c));if(hl.test(i.tagName)){let c=i.textContent.split(It),p=c.length-1;if(p>0){i.textContent=Vo?Vo.emptyScript:"";for(let h=0;h<p;h++)i.append(c[h],Jn()),Ut.nextNode(),l.push({type:2,index:++r});i.append(c[p],Jn())}}}else if(i.nodeType===8)if(i.data===pl)l.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(It,c+1))!==-1;)l.push({type:7,index:r}),c+=It.length-1}r++}}static createElement(e,t){let n=Kt.createElement("template");return n.innerHTML=e,n}};function fn(o,e,t=o,n){var s,a;if(e===Gt)return e;let i=n!==void 0?(s=t._$Co)==null?void 0:s[n]:t._$Cl,r=Xn(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),r===void 0?i=void 0:(i=new r(o),i._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=fn(o,i._$AS(o,e.values),i,n)),e}var cr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,i=((e==null?void 0:e.creationScope)??Kt).importNode(t,!0);Ut.currentNode=i;let r=Ut.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let u;l.type===2?u=new eo(r,r.nextSibling,this,e):l.type===1?u=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(u=new hr(r,this,e)),this._$AV.push(u),l=n[++a]}s!==(l==null?void 0:l.index)&&(r=Ut.nextNode(),s++)}return Ut.currentNode=Kt,i}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},eo=class o{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=fn(this,e,t),Xn(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Gt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Oh(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Xn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Kt.createTextNode(e)),this._$AH=e}$(e){var r;let{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Zn.createElement(fl(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(t);else{let s=new cr(i,this),a=s.u(this.options);s.p(t),this.T(a),this._$AH=s}}_$AC(e){let t=dl.get(e.strings);return t===void 0&&dl.set(e.strings,t=new Zn(e)),t}k(e){mr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,i=0;for(let r of e)i===t.length?t.push(n=new o(this.O(Jn()),this.O(Jn()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let i=il(e).nextSibling;il(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},mn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(e,t=this,n,i){let r=this.strings,s=!1;if(r===void 0)e=fn(this,e,t,0),s=!Xn(e)||e!==this._$AH&&e!==Gt,s&&(this._$AH=e);else{let a=e,l,u;for(e=r[0],l=0;l<r.length-1;l++)u=fn(this,a[n+l],t,l),u===Gt&&(u=this._$AH[l]),s||=!Xn(u)||u!==this._$AH[l],u===x?e=x:e!==x&&(e+=(u??"")+r[l+1]),this._$AH[l]=u}s&&!i&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},dr=class extends mn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},ur=class extends mn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},pr=class extends mn{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=fn(this,e,t,0)??x)===Gt)return;let n=this._$AH,i=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==x&&(n===x||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},hr=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){fn(this,e)}};var lr=fr.litHtmlPolyfillSupport;lr==null||lr(Zn,eo),(fr.litHtmlVersions??=[]).push("3.3.3");var ml=(o,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,i=n._$litPart$;if(i===void 0){let r=(t==null?void 0:t.renderBefore)??null;n._$litPart$=i=new eo(e.insertBefore(Jn(),r),r,void 0,t??{})}return i._$AI(o),i};var to=globalThis,ue=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ml(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Gt}},gl;ue._$litElement$=!0,ue.finalized=!0,(gl=to.litElementHydrateSupport)==null||gl.call(to,{LitElement:ue});var br=to.litElementPolyfillSupport;br==null||br({LitElement:ue});(to.litElementVersions??=[]).push("4.2.2");var ye="main",_r=o=>o&&o!==ye?{plan:o}:{};async function jo(o,e){return o.callWS({type:"neonplan3d/building/get",..._r(e)})}async function no(o,e,t,n){let i=r=>o.callWS({type:"neonplan3d/building/save",building:e,..._r(t),...r&&n!==void 0&&n>=0?{base_revision:n}:{}});try{return(await i(!0)).revision}catch(r){if(n===void 0||!/extra keys not allowed.*base_revision/i.test(String((r==null?void 0:r.message)??r)))throw r;return(await i(!1)).revision}}function bl(o){return!!o&&typeof o=="object"&&o.code==="stale_plan"}function _l(o,e,t){return o.connection.subscribeMessage(n=>e(n.revision),{type:"neonplan3d/building/subscribe",..._r(t)})}function vl(o,e){return o.connection.subscribeMessage(t=>e(t.plan??ye,t.revision),{type:"neonplan3d/building/subscribe",plan:"*"})}async function yl(o){try{return await o.callWS({type:"neonplan3d/plans/list"})}catch{return{plans:[],trash:[],locate_plan:ye}}}function wl(o,e){return o.connection.subscribeMessage(e,{type:"neonplan3d/plans/subscribe"})}function vr(o,e,t,n,i,r){return o.connection.subscribeMessage(s=>{"announce"in s?t==null||t(s.announce):"reload"in s?n==null||n(s.reload):"style"in s?i==null||i(s.style):typeof s.text=="string"&&e(s)},{type:"neonplan3d/voice/subscribe",...t?{announce:!0}:{},...n?{reload:!0}:{},...i?{style:!0}:{},...r?{view:r}:{}})}async function xl(o,e,t,n){return(await o.callWS({type:"neonplan3d/voice/answer",ask_id:e,text:t,answered:n})).taken}async function kl(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function $l(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var Sl=2.1;var Lh=new Set(["pending","firmware_mismatch","upgrading","provisioning","adopting","deleting"]),Nh=new Set(["disconnected","heartbeat_missed","inform_error","adoption_failed","isolated"]);function Dh(o,e){var n,i;let t=e&&e!=="none"?(i=(n=o.entities)==null?void 0:n[e])==null?void 0:i.device_id:null;return t&&o.entities?Object.values(o.entities).filter(r=>r.device_id===t).map(r=>r.entity_id):[]}function Vh(o){let e=o==null?void 0:o.attributes.options;return Array.isArray(e)&&e.includes("connected")&&e.includes("disconnected")}function oo(o,e){let t=Dh(o,e.entity),n=r=>{var s,a,l;return`${r} ${((s=o.states[r])==null?void 0:s.attributes.friendly_name)??""} ${((l=(a=o.entities)==null?void 0:a[r])==null?void 0:l.translation_key)??""}`.toLowerCase()},i=r=>t.find(s=>s.startsWith("sensor.")&&r.test(n(s)))??null;return{state:t.find(r=>r.startsWith("sensor.")&&Vh(o.states[r]))??null,clients:i(/clients|clientes/),led:t.find(r=>r.startsWith("light."))??null,cpu:i(/cpu/),memory:i(/memor/),restart:t.find(r=>{var s;return r.startsWith("button.")&&(((s=o.states[r])==null?void 0:s.attributes.device_class)==="restart"||/restart|reinici/.test(n(r)))})??null}}var yr=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function Ml(o,e){var i;let t=e.state?o.states[e.state]:void 0;return t?{status:Nh.has(t.state)||t.state==="unavailable"?"down":Lh.has(t.state)?"busy":"up",led:e.led?((i=o.states[e.led])==null?void 0:i.state)==="on":!0,clients:yr(e.clients?o.states[e.clients]:void 0),cpu:yr(e.cpu?o.states[e.cpu]:void 0),memory:yr(e.memory?o.states[e.memory]:void 0)}:null}function Wo(o,e){var i,r,s,a;let t=(r=(i=o.entities)==null?void 0:i[e])==null?void 0:r.device_id,n=t?(s=o.devices)==null?void 0:s[t]:void 0;return(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||((a=o.states[e])==null?void 0:a.attributes.friendly_name)||e}function Il(o){return o.status==="down"?[1,.22,.25]:o.status==="busy"?[1,.65,.15]:o.led?[.35,.65,1]:null}function jh(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function kr(o){let e=$e(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(jh).length>=2}function $r(o){let e=o==null?void 0:o.parts.find(t=>t.spin==="y"||t.spin==="z");return e?e.spin:null}function Pl(o=new Date){let e=o.getFullYear(),t=o.getMonth();if(t===0&&o.getDate()<=6)return 4;if(t<10)return 0;let n=new Date(e,t,o.getDate()).getTime(),i=new Date(e,11,24),r=new Date(e,11,24-i.getDay()).getTime(),s=168*3600*1e3,a=0;for(let l=1;l<=4;l++)n>=r-(4-l)*s-3600*1e3&&(a=l);return a}var El=[],xr=new Map,Tl=0;function Al(o){El=o,xr=new Map(o.flatMap(e=>e.items.map(t=>[Wh(e.id,t.id),t]))),Tl++}function gn(){return El}function bn(){return Tl}function Wh(o,e){return`pack:${o}:${e}`}function Pt(o){return o.startsWith("pack:")}function Bo(o){return Pt(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function Yt(o){return o==="robot_vacuum"||Pt(o)&&o.endsWith(":robot_vacuum")}function Bh(o){return o.z>.05}function zl(o){let e=((o==null?void 0:o.parts)??[]).filter(t=>t.shape==="cyl"&&Bh(t));return e.length?e.reduce((t,n)=>n.w*n.d>t.w*t.d?n:t).z:.227}function Rl(o){return Pt(o)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(o)}var qh={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Cl(o){var e;return(e=$e(o))==null?void 0:e.parts.find(t=>t.screen)}function $e(o){if(!Pt(o))return;let e=xr.get(o);if(e)return e;let[,t,...n]=o.split(":"),i=qh[t];return i?xr.get(`pack:${i}:${n.join(":")}`):void 0}function Fl(o){return o.name.es??o.name.en??Object.values(o.name)[0]??o.id}var Uh={architecture:"Arquitectura y acabados",balcony:"Balc\xF3n y espacios peque\xF1os",bath:"Ba\xF1o",cabinet_kit:"Armarios y estanter\xEDas \u2013 kit",deco:"Decoraci\xF3n y plantas",dining_hall:"Comedor y recibidor",fun_halloween:"Pack divertido: Halloween",fun_winter:"Pack divertido: Invierno y Navidad",fun_pets:"Pack divertido: Mascotas",bedroom:"Dormitorio",cinema:"Cine en casa y Hi-Fi",exclusive:"Exclusivo: frigor\xEDfico inteligente",fitness:"Fitness",garage:"Garaje y taller",garden:"Jard\xEDn y terraza",kids:"Cuarto infantil",kitchen:"Cocina",living:"Sal\xF3n",office:"Oficina y gaming",pets:"Mascotas",smarthome:"Smart home y tecnolog\xEDa",stairs:"Escaleras y barandillas",utility:"Lavadero e instalaciones",vehicles:"Veh\xEDculos",starter:"Pack de inicio",pro_auto:"Pro: Auto Pro",pro_timetravel:"Pro: Viaje en el tiempo",pro_pool:"Pro: Piscina Pro",pro_camera:"Pro: Cabina de c\xE1mara",pro_energy:"Pro: Energ\xEDa Pro",pro_screens:"Pro: Pantallas en directo",pro_sound:"Pro: Sonido y Cine",pro_weather:"Pro: Tiempo exterior",pro_heat:"Pro: Calor Pro",pro_household:"Pro: Hogar Pro",frames:"Marcos de fotos digitales",homelab:"Homelab y taller",announce:"M\xF3dulo: Avisos",voice_answers:"M\xF3dulo: La casa responde",window_watch:"M\xF3dulo: Vigilancia de ventanas"};function Ol(o){let e=o.id.replace(/^mastershort\./,""),t=e.endsWith("_sample"),n=Uh[t?e.slice(0,-7):e];return n?t?`${n} \u2013 muestra`:n:o.name}var Kh=.005;function Se(o,e){let t=$e(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Hl;if(e.type==="access_point")return e.variant==="wall"?Sl:Math.max(0,o.height-Math.max(.005,e.h));if(qo.has(e.type))return Math.max(0,o.height-Uo(e.type,e.h));if(e.type==="led_strip"){let n=o.rooms.find(r=>r.points.length>=3&&B([e.x,e.z],r.points)),i=typeof(n==null?void 0:n.ceiling_height)=="number"&&n.ceiling_height>0?n.ceiling_height:o.height;return Math.max(0,i-.04-Math.max(.02,e.h))}switch(t==null?void 0:t.mount){case"surface":return wr(o,e)+Ko(o,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h-Kh);default:return t?wr(o,e):Ll(e)||wr(o,e)}}function wr(o,e){let t=o.rooms.filter(n=>n.points.length>=3);return!t.length||t.some(n=>B([e.x,e.z],n.points))?0:bt(o,e.x,e.z)}var Vl={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},r_=Object.keys(Vl),jl=1;function Yh(o){return o.variant&&Vl[o.variant]?o.variant:"80"}function Wl(o){return{30:1,50:2,80:3,100:4}[Yh(o)]??3}function io(o,e){var a,l;let t=e.entity&&e.entity!=="none"?e.entity:null,n=t?(l=(a=o.entities)==null?void 0:a[t])==null?void 0:l.device_id:null,i=n&&o.entities?Object.values(o.entities).filter(u=>u.device_id===n).map(u=>u.entity_id):[],r=u=>{var d,c,p;return`${u} ${((d=o.states[u])==null?void 0:d.attributes.friendly_name)??""} ${((p=(c=o.entities)==null?void 0:c[u])==null?void 0:p.translation_key)??""}`.toLowerCase()},s=(u,d,c)=>i.find(p=>p.startsWith(`${u}.`)&&d.test(r(p))&&!(c&&c.test(r(p))))??null;return{heater:t,heating:s("binary_sensor",/heating|calentando|heizt/),showers:s("sensor",/shower|ducha|dusch/),remaining:s("sensor",/remaining|restante|restzeit/),power:s("switch",/power|encendid|_on\b/,/eco|legionella/),eco:s("switch",/\beco/)}}var Dl=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function Bl(o,e){var l,u,d;let t=e.heater?o.states[e.heater]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=e.power?(l=o.states[e.power])==null?void 0:l.state:void 0,i=n!==void 0?n==="on":t.state!=="off",r=t.attributes,s=i&&(e.heating?((u=o.states[e.heating])==null?void 0:u.state)==="on":r.hvac_action==="heating"),a=Dl(e.remaining?o.states[e.remaining]:void 0);return{on:i,heating:s,current:typeof r.current_temperature=="number"?r.current_temperature:null,target:typeof r.temperature=="number"?r.temperature:null,showers:Dl(e.showers?o.states[e.showers]:void 0),remaining:s&&a!==null&&a>0?a:null,eco:e.eco?((d=o.states[e.eco])==null?void 0:d.state)==="on":!1}}var st={field:null,size:1,right:0,up:0};var Ul=["rain","snow","clouds","lightning","sky"];var Ir={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Pr(o){return o==="hedge"||o==="fence"||o==="pergola"}function Er(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!Pr(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function le(o){return[...o.rooms,...Er(o)]}function Qh(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let i=o.slope_dir??"x",r=(u,d)=>i==="x"?u:i==="-x"?-u:i==="z"?d:-d,s=1/0,a=-1/0;for(let[u,d]of o.points){let c=r(u,d);s=Math.min(s,c),a=Math.max(a,c)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-s)/(a-s)));return n*l}function Jh(o,e,t,n){return Go(o,e)+Ir[e.type]-Xh(o,e,t,n)}var Tr=-.2,Mr={set:!1,level:Tr};function Kl(o){let e=(o==null?void 0:o.settings.terrain)??null;Mr={set:(e==null?void 0:e.level)!=null,level:(e==null?void 0:e.level)??Tr}}function Gl(o){return o.elevation>.3?0:Mr.set?Mr.level-o.elevation:Tr}function Go(o,e){return Gl(o)+(e.offset??0)}function Xh(o,e,t,n){return e.type==="pool"?0:Qh(e,t,n)}function bt(o,e,t){let n=(o.outdoor??[]).filter(r=>!Pr(r.type)&&r.type!=="pool"&&B([e,t],r.points)),i=[...n].reverse().find(r=>r.cut)??n[0];return i?Jh(o,i,e,t):Gl(o)}function Yl(o,e){return Go(o,e)+(e.above?Ql(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Zh(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?Ql(o):1.5}function ef(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!Pr(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>B(n,t.points)))}function ro(o,e){return!e.above&&!ef(o,e)?_n(o,e)-.05:Yl(o,e)-Zh(e)}function _n(o,e){return Yl(o,e)-.15}function Ql(o){return o.height&&o.height>.3?o.height:1.2}var tf={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Jl={type:"none",pitch:35,overhang:.4},nf={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Jl}};var Xl=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Zl=.3;var ec=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Hl=1.75;function tc(o){if(["lamp_ceiling_fan","lamp_pendant","stairwell","parking"].includes(o.type)||Ar.has(o.type))return!1;let e=$e(o.type);return!((e==null?void 0:e.mount)==="ceiling"&&e.light&&e.light!=="panel")}var qo=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Uo(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var Ar=new Set(["stairs","stairs_u"]);function so(o){var e;return ec.has(o)||!!((e=$e(o))!=null&&e.light)}var of=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var rf=1.05,sf=.3;function Ll(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"neon_sign":return Math.max(0,1.6-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return rf;case"wall_socket":return sf;case"water_heater":return jl;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var ql=.04,af=1.2;function Ko(o,e,t,n=0){var r;let i=0;for(let s of o.furniture)!(of.has(s.type)||(r=$e(s.type))!=null&&r.surface)||!B([e,t],Qt(s))||s.type==="worktop"&&n>0&&s.h-ql>=af&&n<=s.h-ql-.02||(i=Math.max(i,s.h));return i}var Gh=new Set([...ec,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","neon_sign","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Nl={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_ceiling_fan:[1.2,1.2,.35],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.086,.05,.086],wall_socket:[.086,.05,.086],water_heater:[.506,.275,1.066],access_point:[.16,.16,.035],neon_sign:[.9,.03,.32],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var lf=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],cf=["standard","bars","glass_wall","slide"];function df(o,e){return o.type==="door"?o.style&&lf.includes(o.style)?o.style:e?"front":"interior":o.style&&cf.includes(o.style)?o.style:"standard"}function uf(o,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let i=e==="sidelights",r=o-.04,s=Math.min(1.05,Math.max(.6,r-(i?.6:.3))),a=(r-s)/(i?2:1),l=n.sidelight_width??a,u=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),u=i?Math.max(.1,u):0;let d=r-.5;if(l+u>d){let p=Math.max(0,d)/(l+u);l*=p,u*=p}return i?{panels:[[.02,.02+l],[o-.02-u,o-.02]],x0:.02+l,x1:o-.02-u}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function nc(o,e){let t=o.width,n=uf(t,df(o,!1),e,o),i=(n==null?void 0:n.x0)??0,r=(n==null?void 0:n.x1)??t;return o.leaves!==2?(i+r)/2:e?i+(r-i)/4:r-(r-i)/4}function ao(o){var e;o.energy={...tf,...o.energy??{}},o.presence=o.presence??[],o.settings={...nf,...o.settings,roof:{...Jl,...((e=o.settings)==null?void 0:e.roof)??{}}};for(let t of o.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(i=>({...i,panel:i.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(i=>({...i,mount:i.mount??null,rotation:i.rotation??0})),t.furniture=t.furniture.map(i=>({...i,entity:i.entity??null,power:i.power??null,...i.show_if&&!i.show_if.entity?{show_if:null}:{}}));let n=t.placements.filter(i=>i.entity_id.startsWith("light.")&&!i.pin);if(n.length){let i={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let r of n){let s=i[r.mount??"ceiling"],[a,l,u]=Nl[s];t.furniture.push({id:`lamp_${r.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:r.x,z:r.z,rotation:0,w:a,d:l,h:u,variant:null,entity:r.entity_id,power:null})}t.placements=t.placements.filter(r=>!r.entity_id.startsWith("light.")||r.pin)}t.openings=t.openings.map(i=>({...i,hinge:i.hinge??"left",leaves:i.leaves??1,swing:i.swing??"in",style:i.style??null,cover:i.cover??null,contact:i.contact??null,contact2:i.contact2??null,tilt:i.tilt??null}))}return o}function oc(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function Ge(o){let e=0;for(let t=0;t<o.length;t++){let[n,i]=o[t],[r,s]=o[(t+1)%o.length];e+=n*s-r*i}return e/2}function zr(o){return Math.abs(Ge(o))}function Sr(o,e){let t=1/0;for(let n=0;n<e.length;n++){let i=e[n],r=e[(n+1)%e.length],s=r[0]-i[0],a=r[1]-i[1],l=s*s+a*a,u=l>0?Math.max(0,Math.min(1,((o[0]-i[0])*s+(o[1]-i[1])*a)/l)):0;t=Math.min(t,Math.hypot(o[0]-i[0]-u*s,o[1]-i[1]-u*a))}return t}function Rr(o){let e=Ve(o);if(o.length<3||B(e,o)&&Sr(e,o)>=.6)return e;let t=o.map(c=>c[0]),n=o.map(c=>c[1]),[i,r,s,a]=[Math.min(...t),Math.max(...t),Math.min(...n),Math.max(...n)],l=24,u=e,d=B(e,o)?Sr(e,o):-1;for(let c=0;c<=l;c++)for(let p=0;p<=l;p++){let h=[i+(r-i)*c/l,s+(a-s)*p/l];if(!B(h,o))continue;let f=Sr(h,o);f>d+1e-9&&([u,d]=[h,f])}return u}function Ve(o){let e=Ge(o);if(Math.abs(e)<1e-9){let i=o.length||1;return[o.reduce((r,s)=>r+s[0],0)/i,o.reduce((r,s)=>r+s[1],0)/i]}let t=0,n=0;for(let i=0;i<o.length;i++){let[r,s]=o[i],[a,l]=o[(i+1)%o.length],u=r*l-a*s;t+=(r+a)*u,n+=(s+l)*u}return[t/(6*e),n/(6*e)]}function Qt(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),i=o.w/2,r=o.d/2;return[[-i,-r],[i,-r],[i,r],[-i,r]].map(([s,a])=>[o.x+s*t-a*n,o.z+s*n+a*t])}function B(o,e){let t=!1;for(let n=0,i=e.length-1;n<e.length;i=n++){let[r,s]=e[n],[a,l]=e[i];s>o[1]!=l>o[1]&&o[0]<(a-r)*(o[1]-s)/(l-s)+r&&(t=!t)}return t}var ic={lamp_ceiling:"ceiling",lamp_ceiling_fan:"ceiling_fan",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var pf=700,rc="neonplan3d.unsaved",Et="1.24.0",lc="floorplan-3d.unsaved",Cr=o=>o===ye?rc:`${rc}.${o}`;function hf(o){try{let e=localStorage.getItem(Cr(o))??(o===ye?localStorage.getItem(lc):null);return e?JSON.parse(e):null}catch{return null}}function lo(o,e){try{e?localStorage.setItem(Cr(o),JSON.stringify(e)):(localStorage.removeItem(Cr(o)),o===ye&&localStorage.removeItem(lc))}catch{}}function sc(o,e){return o&&e.some(t=>t.id===o)?o:ye}var vn=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;planId=ye;plans=[];trash=[];locatePlan=ye;plansLoaded=!1;wanted=null;unsubscribePlans=null;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;onVisible=()=>{document.visibilityState!=="visible"||!this.hass||this.pending||this.saving||this.reload()};constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,typeof document<"u"&&document.addEventListener("visibilitychange",this.onVisible),this.hass&&this.start()}hostDisconnected(){var e,t;this.connected=!1,typeof document<"u"&&document.removeEventListener("visibilitychange",this.onVisible),this.flush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null,(t=this.unsubscribePlans)==null||t.call(this),this.unsubscribePlans=null}async switchPlan(e){var n;if(!this.plansLoaded||!this.hass){this.wanted=e??null;return}let t=sc(e,this.plans);this.wanted=t,!(t===this.planId&&this.building)&&(await this.flush(),(n=this.unsubscribe)==null||n.call(this),this.unsubscribe=null,this.planId=t,this.building=null,this.revision=-1,this.ownRevisions=new Set,this.draft=null,this.saveState="idle",this.host.requestUpdate(),await this.reload(),await this.follow())}planName(e,t){let n=this.plans.find(i=>i.id===e);return(n==null?void 0:n.name)||(e===ye?t:"?")}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},pf),this.host.requestUpdate()}get frontendVersion(){return Et}get versionGap(){return!this.backendVersion||Et==="dev"||this.backendVersion===Et?null:ff(this.backendVersion,Et)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Et!=="dev"&&this.backendVersion!==Et}restoreDraft(){let e=this.draft;this.draft=null,e!=null&&e.conflict&&lo(this.planId,null),e&&this.edit(ao(e.building))}discardDraft(){this.draft=null,lo(this.planId,null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!e||!this.hass)return;this.pending=null;let t=this.planId;for(let n of e.floors)for(let i of n.furniture)i.mount_y!=null&&i.mount_y>10&&(i.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let n=await no(this.hass,e,t,t===this.planId?this.revision:void 0);t===this.planId&&(this.ownRevisions.add(n),this.revision=n),this.saveState=this.pending?"saving":"saved",this.saveError=null,lo(t,null)}catch(n){if(bl(n)&&t===this.planId){let i={building:e,savedAt:Date.now(),conflict:!0};lo(t,i),this.pending=null,this.saveState="idle",this.saveError=null,await this.reload(),this.draft=i,this.host.requestUpdate();return}this.saveState="error",this.saveError=ac(n),lo(t,{building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reloadPlans()]),this.planId=sc(this.wanted??this.planId,this.plans),await this.reload(),await this.follow(),!this.unsubscribePlans&&this.connected))try{this.unsubscribePlans=await wl(this.hass,e=>{this.takePlans(e),this.plans.some(t=>t.id===this.planId)||this.switchPlan(ye)})}catch{}}async follow(){if(this.unsubscribe||!this.connected||!this.hass)return;let e=this.planId;try{let t=await _l(this.hass,n=>{e===this.planId&&(this.ownRevisions.has(n)||n===this.revision||this.pending||this.saving||this.reload())},e);e!==this.planId||this.unsubscribe?t():this.unsubscribe=t}catch{}}async reloadPlans(){this.hass&&this.takePlans(await yl(this.hass))}takePlans(e){this.plans=e.plans,this.trash=e.trash,this.locatePlan=e.locate_plan,this.plansLoaded=!0,this.host.requestUpdate()}packTries=0;packTimer;async reloadPacks(){if(this.hass){try{this.packs=await $l(this.hass),this.packTries=0}catch(e){if((e==null?void 0:e.code)==="unknown_command")this.packs=[];else if(this.packTries<4){let t=[1500,4e3,1e4,3e4][this.packTries++];clearTimeout(this.packTimer),this.packTimer=setTimeout(()=>{this.reloadPacks()},t)}}Al(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(!this.hass)return;let e=this.planId;try{let t=await jo(this.hass,e);if(e!==this.planId)return;this.building=ao(t.building),this.backendVersion=t.version??null,this.draft===null&&!this.pending&&(this.draft=hf(e)),this.revision=t.revision,this.error=null}catch(t){this.error=ac(t)}this.host.requestUpdate()}};function ac(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function ff(o,e){let t=o.split(/[.-]/).map(i=>Number.parseInt(i,10)||0),n=e.split(/[.-]/).map(i=>Number.parseInt(i,10)||0);for(let i=0;i<Math.max(t.length,n.length);i++){let r=(t[i]??0)-(n[i]??0);if(r)return r}return 0}var mf=new Set(["lights","climate","action","link"]);function Fr(o){if(!Array.isArray(o))return[];let e=[];for(let t of o)if(!(!t||typeof t!="object"||!mf.has(String(t.kind)))&&!(t.kind==="action"&&!/^[a-z_]+\.[a-z0-9_]+$/.test(String(t.entity??"")))&&!(t.kind==="link"&&!/^\/[^/]/.test(String(t.path??"")))&&(e.push({kind:t.kind,name:typeof t.name=="string"?t.name.slice(0,24):void 0,icon:typeof t.icon=="string"?t.icon.slice(0,4):void 0,entity:t.entity,path:t.path}),e.length===2))break;return e}function cc(o,e){return[...o].sort((t,n)=>t.elevation-n.elevation).map(t=>{let n=e.filter(i=>i.floorId===t.id);return{id:t.id,name:t.name,rooms:n,lightsOn:n.reduce((i,r)=>i+r.lightsOn.length,0)}}).filter(t=>t.rooms.length>0)}function dc(o,e,t,n,i=[]){let r=o.length===2?o.map(s=>({id:`floor:${s.id}`,label:s.name,badge:s.lightsOn})):o.length?[{id:"rooms",label:"",badge:o.reduce((s,a)=>s+a.lightsOn,0)}]:[];return[{id:"now",label:"",badge:e},...r,...n?[{id:"covers",label:"",badge:t}]:[],...i,{id:"more",label:"",badge:0}]}var gf=5;function uc(o,e=gf){let t=[...o];if(t.length>e){let i=t.filter(r=>r.id.startsWith("floor:"));if(i.length>1){let r=t.indexOf(i[0]);t=t.filter(s=>!s.id.startsWith("floor:")),t.splice(r,0,{id:"rooms",label:"",badge:i.reduce((s,a)=>s+a.badge,0)})}}let n=[];for(;t.length>e;){let i=t.length-2;if(i<1||t[i].id==="rooms"||t[i].id.startsWith("floor:"))break;n.unshift(...t.splice(i,1))}return{bar:t,over:n}}function pc(o,e,t,n){let i=typeof n=="number"&&Number.isFinite(n)?Math.round(n):null;return{entity:o,name:e,position:i,shut:t==="closed"||i===0}}function hc(o,e,t){return/iPad|Tablet|Silk|\bKF[A-Z]{2,4}\b/.test(o)||/Macintosh/.test(o)&&t>1?"tablet":/iPhone|iPod|Windows Phone/.test(o)?"phone":/Android/.test(o)?/Mobile/.test(o)&&e<600?"phone":"tablet":t>0&&e>0&&e<500?"phone":"desktop"}var bf={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",zoom_style:"Al acercar",zoom_late_early:"pronto",zoom_scope_all:"Todas las habitaciones",zoom_scope_room:"Solo la habitaci\xF3n",zoom_scope_hint:"Qu\xE9 pasa al estilo al acercar: todas las habitaciones o solo la habitaci\xF3n a la que te acercas o que tocas \u2013 el resto de la casa conserva el estilo ajustado",zoom_late_late:"tarde",zoom_late_hint:"Cu\xE1ndo entra el estilo al acercar: pronto (ya con una planta abierta) o tarde (solo de cerca en la habitaci\xF3n)",zoom_style_off:"Al acercar: se mantiene",zoom_style_hint:"De lejos la casa conserva el estilo ajustado; al acercarte a una planta o a una habitaci\xF3n pasa suavemente a este estilo \u2013 sin recargar. Funciona si arriba est\xE1 elegido Ne\xF3n, Blueprint o D\xEDa.",holo_more:"m\xE1s",holo_less:"menos",draft_conflict:"El plano se guard\xF3 mientras tanto en otro dispositivo; ahora se muestra esa versi\xF3n m\xE1s reciente. Tu cambio de las {time} se hizo sobre la anterior y no est\xE1 guardado.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",plain_off:"Con muebles",plain_on:"Solo plano",plain_hint:"Solo plano: paredes, puertas, ventanas y escaleras sin muebles; los dispositivos se quedan.",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",floor_from_ha:"Plantas de Home Assistant:",level:"Nivel {n}",elevation:"Altura sobre el suelo (m)",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",show_menu:"Mostrar",tool_menu:"Herramienta",view_menu:"Vista",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_id:"ID (opci\xF3n de tarjeta room:)",area:"\xC1rea",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",feed_drain:"Sumidero",hp_side_right:"derecha",hp_side_left:"izquierda",hp_side_back:"detr\xE1s",pool_valves:"V\xE1lvulas",pool_valve_shut:"cerrada",pool_valve_toggle:"Toca para cambiar: tal como est\xE1 la v\xE1lvula de verdad",pool_joint:"Uni\xF3n",wv_cat_base:"Muebles bajos y aparadores",wv_cat_hang:"Colgados",wv_cat_tall:"Armarios altos",wv_cat_living:"Sentarse y dormir",wv_cat_light:"Luces",wv_cat_pack:"De tus packs",wv_cat_energy:"Energ\xEDa",delete:"Eliminar",settings:"Ajustes",furn_extra:"Valor extra junto al s\xEDmbolo (sensor, p. ej. temperatura del agua)",roof_basics:"Forma del tejado",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",cancel:"Cancelar",confirm_switch:"\xBFAccionar {name} de verdad?",grid:"Cuadr\xEDcula (m)",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",area_m2:"{a} m\xB2",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",plan_main:"Casa",plan_pick:"Elegir plano",plan_all:"Todos los planos",plan_new:"Nuevo plano",plan_manage:"Gestionar planos",plan_alerts_elsewhere:"{n} aviso(s) en otro plano",card_plan:"Plano",plan_lights_on:"Luces encendidas",plan_open_now:"Ventanas y puertas abiertas",plan_open_n:"{n} abiertas",plan_site:"Parcela",plan_alert:"{plan}: {text}",plan_alert_go:"Ver",card_rooms:"Solo estas habitaciones",card_rooms_hint:"Toca habitaciones en el plano: la tarjeta muestra solo esas, con sus muebles y dispositivos; p. ej. para la tableta de los ni\xF1os o un piso de vacaciones. Una sola habitaci\xF3n se abre con sus dispositivos al lado. Vac\xEDo: toda la casa.",card_rooms_leave:"Se pueden abrir otras habitaciones",card_rooms_leave_hint:"Sin marcar, la tableta se queda en estas habitaciones.",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",through_full:"Pantalla completa",through_full_hint:"La imagen de la c\xE1mara en toda la pantalla (Esc o Atr\xE1s para salir). Donde el navegador no puede, se abre la vista de c\xE1mara de Home Assistant, tambi\xE9n con sonido.",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt_short:"Inclin. \xB0",camera_popup_open:"Mirar a trav\xE9s de la c\xE1mara",state_recording:"Grabando",state_streaming:"En directo",room_cleaning:"Limpieza (robot aspirador)",panel_clean:"Aspirar",panel_everything_off:"Apagar todo ({n})",panel_fold_open:"Mostrar dispositivos",panel_fold_close:"Plegar",panel_fold_lights:"\u{1F4A1} {n} encendidas",voice_clean_started:"El robot aspirador sale: {room}.",voice_clean_none:"{room} no tiene limpieza configurada (editor \u2192 habitaci\xF3n \u2192 Limpieza).",voice_off_done:"{room}: {n} dispositivos apagados.",voice_off_nothing:"{room}: ya est\xE1 todo apagado.",voice_noroom:"\xBFQu\xE9 habitaci\xF3n? Di p. ej. \xABaspira la cocina\xBB, o indica d\xF3nde cuelga la tableta.",voice_noroom_open:"Toca primero una habitaci\xF3n; entonces \xABah\xED\xBB se refiere a ella.",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",view_settings:"Ajustes",view_settings_admin:"Solo los administradores pueden cambiar estos ajustes; se aplican a toda la casa.",view_settings_look:"Aspecto",glass_size:"Tama\xF1o de las tarjetas de cristal",glass_size_hint:"Energ\xEDa, bomba de calor, coche, dispositivos y las dem\xE1s tarjetas de cristal de la vista 3D",view_settings_alerts:"Avisos",view_settings_control:"Manejo",view_settings_more:"El resto de ajustes est\xE1 en el editor, en \u2699 Ajustes.",lines_add:"A\xF1adir",lines_new:"Nueva entrada \u2026",sheet_mic:"Hablar",sheet_listening:"Escuchando\u2026",sheet_mic_failed:"No se entendi\xF3 nada: el micr\xF3fono necesita HTTPS y una canalizaci\xF3n de voz con reconocimiento.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",bg_map_1:"Toca una esquina exterior de la casa en la imagen.",bg_map_2:"Ahora toca en la imagen la siguiente esquina de la misma pared exterior.",bg_map_3:"Ahora toca la misma primera esquina en el contorno amarillo del mapa.",bg_map_4:"Y la segunda esquina en el contorno: la imagen se gira, escala y mueve para encajar.",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",media_play_head:"Reproducir",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_surroundings:"Mostrar el entorno del mapa",card_surroundings_hint:"Desactivado: esta tarjeta muestra la casa sin casas vecinas, calles ni \xE1rboles; m\xE1s tranquila en una pantalla peque\xF1a y m\xE1s ligera para dispositivos poco potentes.",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",director:"Director en directo",director_motion_off:"Desactivado",director_motion_person:"Solo personas",director_motion_all:"Cualquier movimiento",voice:"Control por voz",aliases:"Otros nombres para la voz",voice_showing:"Mostrando {name}.",screen_name:"Nombre de pantalla (para Assist)",screen_name_placeholder:"p. ej. Cocina",screen_name_hint:"Preguntar a Assist (\xABMuestra el sal\xF3n\xBB) o una automatizaci\xF3n que llame al servicio neonplan3d.ask llega a todas las vistas de CasaNeon abiertas. Si el servicio nombra una pantalla, solo reacciona la vista con ese nombre.",card_voice_area:"Habitaci\xF3n para \xABaqu\xED\xBB",card_voice_area_none:"Ninguna (ajuste del dispositivo)",card_voice_area_hint:"Si la tableta con este panel est\xE1 en una habitaci\xF3n, las frases sin nombre de habitaci\xF3n (\xABEnciende la luz\xBB, \xABApaga la luz aqu\xED\xBB) se aplican a esta \xE1rea. Sin elegir, cuenta la habitaci\xF3n ajustada en el propio dispositivo.",voice_button:"Hablar",voice_listen:"Escuchando \u2026",voice_none:"No se entendi\xF3 nada",voice_silent:"El micr\xF3fono solo da silencio. Normalmente lo tiene otra app: en Fully Kiosk desactiva la detecci\xF3n ac\xFAstica de movimiento (Motion Detection \u2192 Acoustic Detection) y recarga.",voice_no_pipeline:"No hay voz a texto configurada en Assist (Ajustes \u2192 Asistentes de voz).",voice_denied:"Micr\xF3fono no permitido: solo funciona con https y con el permiso en el navegador o en Fully Kiosk.",voice_error:"Control por voz: {msg}",card_voice:"Control por voz (bot\xF3n de micr\xF3fono)",card_voice_hint:"\xABMuestra el sal\xF3n\xBB muestra la habitaci\xF3n; las dem\xE1s frases van a Assist. Necesita https y el micr\xF3fono permitido",voice_sentences_distinct:"Solo las inequ\xEDvocas (\xABMuestra \u2026\xBB, \xABPregunta a la casa \u2026\xBB, \xABCasa, \u2026\xBB)",voice_sentences_all:"Todas las preguntas (tambi\xE9n las que Home Assistant contesta por s\xED mismo)",voice_sentences_off:"Ninguna (predeterminado \u2013 sin archivo de frases)",backdrop:"Fondo",backdrop_look:"El cielo del aspecto (por defecto)",backdrop_gradient:"Degradado",backdrop_image:"Imagen",card_director:"Director en directo (cabina de c\xE1maras)",card_director_hint:"La tarjeta muestra sola lo que pasa. Qu\xE9 eventos, lo eliges en el editor en \xABDirector en directo\xBB.",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",rain_warning:"Aviso: ventana abierta mientras llueve",sun_patches:"Luz del sol por las ventanas",sun_shadow:"Recorrido del sol y sombra de la casa",tap_in_room:"Accionar dispositivos solo en la habitaci\xF3n abierta",tap_in_room_hint:"En la vista de la casa y de la planta, un toque en un dispositivo abre su habitaci\xF3n en vez de accionarlo, as\xED un toque pensado para la planta no mueve una persiana por error. En la habitaci\xF3n abierta todo sigue igual; una pulsaci\xF3n larga abre el men\xFA en cualquier sitio.",right_click_back:"El clic derecho retrocede un nivel",right_click_back_hint:"Un clic derecho corto en la vista 3D cierra la habitaci\xF3n o vuelve de la planta a la casa. Desactivado: un clic derecho funciona como un clic.",sun_shadow_hint:"Un arco sobre la casa muestra el recorrido del sol hoy con amanecer y atardecer, y la sombra de la casa se dibuja en el suelo y se mueve con el sol. Necesita la orientaci\xF3n norte; en el nivel \xABTableta\xBB solo el arco.",sky:"Cielo real",sky_hint:"Un cielo detr\xE1s de la casa seg\xFAn la posici\xF3n real del sol: arreboles, estrellas que se mueven durante la noche y la luna en su fase real. Con \xABTiempo exterior\xBB las nubes se mueven con el viento. Desactivado con fondo propio y en el aspecto plano; en el nivel \xABTableta\xBB una imagen fija.",flyin:"Llegada desde el espacio",flyin_hint:"Al abrir, un globo de ne\xF3n gira hacia tu casa y se sumerge mientras la c\xE1mara baja hasta la casa. Una vez por carga de p\xE1gina; un toque lo omite. No en el editor ni en el nivel \xABTableta\xBB.",sun_arc:"Arco solar alrededor de",sun_arc_house:"la casa",sun_arc_plot:"toda la parcela",sun_arc_hint:"D\xF3nde est\xE1n el arco solar y el anillo de la br\xFAjula: alrededor de la casa (por defecto) o alrededor de todo lo dibujado \u2013 habitaciones, zonas exteriores, vallas y paredes libres.",window_glow:"Las ventanas iluminan fuera de noche",window_glow_hint:"Cuando est\xE1 oscuro, la luz de las habitaciones encendidas sale por las ventanas como un brillo c\xE1lido sobre el c\xE9sped y la terraza \u2013 en el color de la luz de la habitaci\xF3n, m\xE1s tenue tras persianas bajadas.",gpu_safe_note:"En este navegador, el arco del sol, la sombra de la casa y el brillo de las ventanas de noche est\xE1n desactivados: los gr\xE1ficos se perdieron justo despu\xE9s de arrancar. La pr\xF3xima versi\xF3n de CasaNeon lo intentar\xE1 de nuevo.",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",alert_contact_unavailable:"Contacto no disponible: {name}",alert_short_contact_unavailable:"Contacto no disponible",alert_unavailable:"Avisar si un contacto de ventana o puerta no est\xE1 disponible",alert_unavailable_hint:"Si un contacto lleva 10 minutos \xABno disponible\xBB (pila agotada, sin cobertura), la ventana parece cerrada en 3D sin saberlo. Entonces aparece un aviso.",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_pets:"Mostrar las mascotas",card_ghost:"Mostrar el fantasma de Halloween",card_ghost_hint:"Pack divertido Halloween: el fantasma flota tambi\xE9n por la casa de esta tarjeta (p. ej. desact\xEDvalo en la tableta de pared)",card_pets_hint:"Pack divertido Mascotas: mostrar los animales configurados en esta tarjeta (p. ej. desact\xEDvalos en la tableta de pared)",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof:"Mostrar el tejado",card_roof_hint:"Desactivado: la casa se ve sin tejado, como si no lo tuviera, con las habitaciones abiertas (los campos solares del tejado desaparecen con \xE9l)",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_templates:"Plantillas de tarjeta",card_templates_intro:"Configura aqu\xED una tarjeta del panel una sola vez, p. ej. \xABCocina tableta Fire\xBB. En la tableta solo eliges la plantilla en el di\xE1logo de la tarjeta. Si la cambias aqu\xED, cada tableta con esta plantilla la sigue sola.",card_templates_empty:"A\xFAn no hay plantillas. Crea la primera con \xAB+ Nueva plantilla\xBB.",card_templates_no_editor:"No se pudo cargar el editor de la tarjeta. Recarga la p\xE1gina (Ctrl+F5).",card_template_new:"Nueva plantilla",card_template_new_name:"Nueva plantilla",card_template_copy_name:"{name} (copia)",card_template_delete_ask:"\xBFEliminar la plantilla \xAB{name}\xBB? Las tarjetas que la usan siguen con sus propios ajustes.",card_template_reloaded:"Recarga enviada: las pantallas abiertas se recargan en los pr\xF3ximos segundos.",card_template_reload_failed:"La recarga fall\xF3. \xBFYa funciona CasaNeon en esta versi\xF3n en Home Assistant (reiniciar tras una actualizaci\xF3n)?",card_template_reload_all:"Recargar todas las pantallas",card_template_reload_hint:"Recarga cada vista abierta de CasaNeon, p. ej. tras una actualizaci\xF3n. En automatizaciones: la acci\xF3n \xABneonplan3d.reload_screens\xBB.",card_template_name:"Nombre",card_template_duplicate:"Duplicar",card_template_preview:"Vista previa",card_template_preview_off:"Ocultar vista previa",card_template_preview_on:"Mostrar vista previa",card_template_where:"\xBFD\xF3nde cuelga la tableta?",card_template_where_hint:"La habitaci\xF3n para \xABaqu\xED\xBB: \xABEnciende la luz aqu\xED\xBB se aplica entonces a esta zona, aunque la tarjeta muestre siempre la planta baja.",card_template_reloading:"Recargando \u2026 (unos segundos)",screen_reloading:"Recargando \u2026",card_template_open:"Editar en el editor de CasaNeon",card_template_make:"Crear una plantilla en el editor de CasaNeon",card_template_screen:"Pantalla",card_template_screen_tablet:"Tableta 10\u2033 horizontal (Fire HD 10)",card_template_screen_small:"Tableta 7\u2033 horizontal (Fire 7)",card_template_screen_upright:"Tableta en vertical",card_template_screen_phone:"M\xF3vil",card_tab_for:"General",card_templates_screens:"Pantallas",card_templates_phones:"M\xF3viles",card_templates_none:"A\xFAn ninguna",card_template_use_title:"C\xF3mo usar la plantilla en el panel",nav_lights:"Luces",nav_climate:"Calefacci\xF3n",nav_page:"P\xE1gina",nav_all_on:"Encender todo",nav_all_off:"Apagar todo",nav_dev_on:"Encendido",nav_dev_off:"Apagado",card_phone_place:"Lugar propio {n}",card_phone_place_none:"Ninguno",card_phone_place_lights:"Luces: todas las l\xE1mparas por planta",card_phone_place_climate:"Calefacci\xF3n: todos los termostatos por planta",card_phone_place_action:"Ejecutar una escena o un script",card_phone_place_link:"Abrir una p\xE1gina de un panel",card_phone_place_name:"Nombre en la barra (vac\xEDo: autom\xE1tico)",card_phone_place_icon:"S\xEDmbolo (un emoji, vac\xEDo: autom\xE1tico)",card_phone_place_entity:"Escena o script",card_phone_place_path:"Ruta en Home Assistant",card_phone_place_hint:"Hasta dos lugares propios aparecen en la barra antes de \xABM\xE1s\xBB. Un lugar sin dispositivos adecuados en la casa no se muestra.",card_for:"\xBFPara qu\xE9 es la tarjeta?",card_for_large:"Tableta o pantalla grande",card_for_phone:"M\xF3vil",card_for_large_hint:"La casa en grande en la imagen, con los conmutadores, la barra de habitaciones y las im\xE1genes de plantas que elijas; para tableta de pared, PC y televisor.",card_for_phone_hint:"La tarjeta ocupa toda la pantalla y recibe abajo una barra para el pulgar: Ahora, Habitaciones, Persianas, M\xE1s. Los conmutadores propios de la tarjeta, la barra de habitaciones y las im\xE1genes de plantas desaparecen. Mejor en una vista propia del panel.",card_section_phone:"La barra en el m\xF3vil",card_phone_rooms:"Habitaciones",card_phone_rooms_hint:"Las habitaciones por planta como mosaicos con luces, ventanas abiertas y m\xFAsica; un toque salta a la habitaci\xF3n.",card_phone_covers:"Persianas",card_phone_covers_hint:"Todas las persianas de la casa en una p\xE1gina, con \xABSubir todas\xBB y \xABBajar todas\xBB.",card_phone_favorites:"Favoritos arriba en la lista",card_phone_favorites_hint:"Los favoritos de la casa como botones encima de \xAB\xBFQu\xE9 pasa?\xBB.",card_phone_solo_hint:"La habitaci\xF3n a la que saltas aparece sola en la imagen. Cada dispositivo puede cambiarlo por su cuenta en \xABM\xE1s\xBB.",card_phone_start_now:"Empezar con la lista",card_phone_start_now_hint:"La tarjeta se abre con \xAB\xBFQu\xE9 pasa?\xBB en lugar de la casa.",card_template_new_large:"Para tableta / pantalla grande",card_template_new_phone:"Para el m\xF3vil",card_template_new_name_phone:"M\xF3vil",card_template_preview_look:"Girar, acercar y abrir habitaciones funciona como en la tarjeta. En la vista previa no se acciona nada.",card_template_where_other:"Otras zonas",card_template_voice_off:"El bot\xF3n del micr\xF3fono est\xE1 desactivado en esta plantilla. Sin \xE9l, la tableta no escucha.",card_template_voice_on:"Activar el bot\xF3n del micr\xF3fono",card_template_own:"Esta tarjeta a\xFAn tiene ajustes antiguos que ya no se aplican con la plantilla: {list}.",card_template_own_clear:"Limpiar (solo la plantilla)",card_template_mode:"Cambios:",card_template_live:"Directo a las tabletas",card_template_manual:"Enviar con un bot\xF3n",card_template_pending:"A\xFAn sin enviar: las tabletas muestran el estado anterior, la vista previa el nuevo.",card_template_publish:"Enviar a las tabletas",card_template_discard:"Descartar",card_template_published:"Enviado: las tabletas muestran ahora el nuevo estado.",card_template_preview_big:"Grande",card_template_preview_small:"Peque\xF1a",card_template_use:"C\xF3mo usarla: a\xF1ade la tarjeta CasaNeon en la tableta y elige la plantilla arriba, o en YAML:",card_template_copy:"Copiar",card_template_copied:"Copiado.",card_template_reload:"Recargar las pantallas con esta plantilla",card_template:"Plantilla",card_template_none:"Ninguna \u2013 ajustar aqu\xED",card_template_hint:"Las plantillas de tarjeta se crean en el editor de CasaNeon en \u2699 Ajustes \u2192 Plantillas de tarjeta. Luego aqu\xED solo eliges una.",card_template_on:"Esta tarjeta sigue su plantilla. C\xE1mbiala en el editor de CasaNeon en \u2699 Ajustes \u2192 Plantillas de tarjeta; cada tableta la adopta sola.",card_template_missing:"La plantilla de tarjeta \xAB{name}\xBB ya no est\xE1 en el plano. La tarjeta usa sus propios ajustes.",card_plain:"Solo plano (sin muebles)",room_bar:"Barra de habitaciones",room_bar_hint:"Abajo una tarjeta por habitaci\xF3n: temperatura, ventanas abiertas, lo que suena y un interruptor de luz. Un toque vuela a la habitaci\xF3n. Arriba quedan solo las plantas; el ojo deja la barra.",room_bar_none:"Sin barra de habitaciones",room_bar_rooms:"Barra de habitaciones",room_bar_all:"+ favoritos",room_bar_hide:"Plegar la barra de habitaciones",room_bar_on:"Encendido",room_bar_off:"Apagado",room_bar_light:"Luz",room_bar_activate:"Activar",room_bar_lights:"{n} encendidas",room_bar_lights_off:"Apagar las luces de la habitaci\xF3n",room_bar_open:"abierta",room_bar_playing:"sonando",card_room_bar:"Barra de habitaciones abajo",card_room_bar_favorites:"Favoritos en la barra de habitaciones",card_room_bar_favorites_hint:"Escenas, scripts e interruptores de los favoritos (Ajustes \u2192 Favoritos) al principio de la barra.",show_if:"Mostrar solo si \u2026",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",ext_tab:"Extensiones",fun_intro:"Extras solo por diversi\xF3n; act\xEDvalos y desact\xEDvalos aqu\xED.",pet_kind_cat:"\u{1F431} Gato",pet_kind_dog:"\u{1F436} Perro",pet_kind_rabbit:"\u{1F430} Conejo",pet_fur_orange:"Pelirrojo",pet_fur_tabby:"Atigrado",pet_fur_black:"Negro",pet_fur_white:"Blanco",pet_fur_grey:"Gris",pet_fur_brown:"Marr\xF3n",pet_fur_calico:"Tricolor",pet_fur_golden:"Dorado",pet_fur_cream:"Crema",pet_breed_dachshund:"Teckel",pet_breed_pug:"Carlino",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Pastor",pet_floor_auto:"Planta baja",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_shape_free:"Libre",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_camera:"La c\xE1mara detecta movimiento: {name}",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",card_room:"Habitaci\xF3n inicial",card_room_none:"Ninguna (planta o casa)",card_walk:"Permitir el recorrido",card_walk_hint:"El bot\xF3n para recorrer la casa a la altura de los ojos",card_tt_range:"El viaje en el tiempo empieza",card_tt_range_24h:"hace 24 horas",card_tt_range_7d:"hace una semana",card_tt_speed:"Velocidad de reproducci\xF3n",card_tt_speed_day:"1 d\xEDa en 6 s",car_charging:"Recarga (potencia, estado o interruptor)",car_climate:"Clima / precalentamiento",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia ahora",holo_house_now:"Casa ahora",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",furn_cable_to_grid:"El cable termina en la acometida",furn_cable_to_grid_hint:"Energ\xEDa Pro: el cable de este inversor va a la acometida en lugar del contador \u2013 por ejemplo cuando el inversor y la acometida est\xE1n lejos del cuadro el\xE9ctrico.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_width:"Ancho del fijo lateral (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",style_slide:"Corredera (una hoja se desliza delante de la fija)",preset_terrace_slide:"Puerta elevadora corredera",preset_window_slide:"Ventana corredera",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",gate_kind_swing:"Portillo (una hoja)",gate_kind_double:"Puerta de dos hojas",gate_kind_slide:"Puerta corredera",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_pitch_upper:"Pendiente del fald\xF3n superior (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_end:"Extremo",roof_end_auto:"seg\xFAn la forma",roof_end_gable:"Hastial",roof_end_hint:"C\xF3mo termina la cumbrera en este extremo: hastial (muro vertical), fald\xF3n o media cadera; por ejemplo, un fald\xF3n solo en un lado.",roof_swap:"Intercambiar lados",roof_turn:"Giro",roof_turn_hint:"Gira esta parte del tejado en el plano (sentido horario), p. ej. para un ala en \xE1ngulo. Las buhardillas y hastiales encima giran con ella. 0\xB0 = como antes.",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_overhang_sides:"Alero por lado",roof_overhang_sides_hint:"Fijar t\xFA mismo el alero de cada lado. Desactivado: autom\xE1tico \u2013 sin alero donde el fald\xF3n toca una parte m\xE1s alta de la casa.",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",angle_lock:"Bloqueo 3D",angle_lock_hint:"El \xE1ngulo queda fijo: arrastrar desplaza la vista y el zoom sigue funcionando; nadie gira la casa sin querer.",keep_view_hint:"Al cambiar entre la casa y las plantas, la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_contact:"Contacto o interruptor",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",surround_err_busy:"Los servidores de mapas est\xE1n ocupados ahora mismo. Vuelve a intentarlo en unos minutos.",surround_err_empty:"El mapa a\xFAn no tiene casas ni calles para este lugar.",sill_board_auto:"autom\xE1tico",sill_board_none:"ninguno",sill_board_inside:"solo dentro",sill_board_outside:"solo fuera",opening_height:"Altura (m)",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",blind_side:"La persiana est\xE1",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_main:"Sensor de manilla hoja principal",entity_auto:"Autom\xE1tico ({name})",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",lib_room_living:"Sal\xF3n",lib_room_dining:"Comedor",lib_room_kitchen:"Cocina",lib_room_bedroom:"Dormitorio",lib_room_kids:"Ni\xF1os",lib_room_bath:"Ba\xF1o",lib_room_office:"Oficina",lib_room_hall:"Pasillo",lib_room_utility:"Lavadero",lib_room_garage:"Garaje",lib_room_garden:"Jard\xEDn",lib_room_hobby:"Hobby y fitness",lib_kind_sofa:"Sof\xE1s",lib_kind_seating:"Asientos",lib_kind_table:"Mesas",lib_kind_storage:"Armarios y estanter\xEDas",lib_kind_bed:"Camas",lib_kind_kitchen:"Cocina",lib_kind_appliance:"Electrodom\xE9sticos",lib_kind_bath:"Ba\xF1o",lib_kind_lamp:"Luces",lib_kind_media:"TV y audio",lib_kind_office:"Oficina",lib_kind_tech:"T\xE9cnica y hogar inteligente",lib_kind_heating:"Calefacci\xF3n y clima",lib_kind_energy:"Energ\xEDa",lib_kind_household:"Hogar",lib_kind_deco:"Decoraci\xF3n",lib_kind_plant:"Plantas",lib_kind_outdoor:"Jard\xEDn y exterior",lib_kind_kids:"Ni\xF1os",lib_kind_sport:"Fitness",lib_kind_pets:"Mascotas",lib_kind_vehicle:"Veh\xEDculos",lib_kind_stairs:"Escaleras y barandillas",lib_kind_architecture:"Arquitectura",rotation:"Rotaci\xF3n (\xB0)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",wall_heights:"Alturas de las paredes",style_group_custom:"Estilos propios",style_new:"Crear mi estilo a partir de \xE9l",style_own_suffix:"(propio)",style_delete:"Eliminar estilo",style_name:"Nombre",style_builtin_hint:"Un estilo listo. Para ajustarlo: \xABCrear mi estilo a partir de \xE9l\xBB \u2013 entonces est\xE1n todos los ajustes y tu estilo aparece en cada lista de estilos.",style_show_beside:"Mostrar en \xAB3D al lado\xBB",style_natural:"Materiales reales (madera, azulejos, colores de pared)",style_dark:"Estilo oscuro \u2013 las l\xEDneas brillan",style_line:"L\xEDneas",style_surface_dark:"Superficies oscuras",style_surface_light:"Superficies claras",style_hue:"Cantidad de color",style_lift:"Brillo base",style_contrast:"Contraste",style_signal:"Dispositivos activos en color",style_sun:"Luz seg\xFAn la direcci\xF3n",style_ao:"Esquinas de la habitaci\xF3n",style_shadows:"Sombras de contacto bajo los muebles",style_floors:"Textura del suelo",style_cut:"Bordes de corte oscuros",style_dim:"Ambiente de noche",style_bg_top:"Fondo arriba",style_bg_bottom:"Fondo abajo",style_times:"Momentos del d\xEDa (plan de la casa)",wall_exterior_short:"pared exterior",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",theme_auto:"Auto (D\xEDa/Ne\xF3n seg\xFAn el sol)",style:"Estilo",style_neon:"Ne\xF3n",style_blueprint:"Blueprint",style_day:"D\xEDa",style_focus:"Noche / Enfoque",style_synth:"Synthwave",style_cozy:"Acogedor",style_evening:"Acogedor noche",style_winter:"Tarde de invierno",style_model:"Maqueta de arquitecto",style_pastel:"Pastel",style_warm:"C\xE1lido / madera y papel",style_house:"Plan de la casa (d\xEDa / tarde / noche)",style_group_neon:"Ne\xF3n y cl\xE1sico",style_group_homely:"Acogedor \u2013 materiales reales",style_group_designed:"Dise\xF1ados",style_group_auto:"Autom\xE1tico",style_set:"Estilo \xAB{name}\xBB activado.",style_reset:"Estilo de nuevo como est\xE1 configurado.",style_none:"\u2013 ninguno \u2013",style_day_label:"De d\xEDa",style_evening_label:"Por la tarde",style_night_label:"De noche",style_switch:"Cambiar",style_switch_sun:"seg\xFAn el sol",style_switch_time:"seg\xFAn la hora",style_morning_at:"D\xEDa desde",style_evening_at:"Tarde desde",style_night_at:"Noche desde",style_switch_hint:"Seg\xFAn el sol: d\xEDa mientras el sol est\xE1 arriba, luego tarde hasta \xABNoche desde\xBB. Seg\xFAn la hora: las tres horas.",style_entity:"Estilo desde una entidad auxiliar",style_entity_hint:"Un input_select o input_text cuyo estado nombra un estilo (p. ej. \xABAcogedor\xBB). Mientras nombre uno, se aplica ese estilo; las automatizaciones pueden cambiarlo.",theme_evening:"Estilo por la tarde",theme_night:"Estilo de noche",theme_schedule_hint:"Vac\xEDo = el mismo estilo todo el d\xEDa. Cambia seg\xFAn el plan de la casa (por el sol o la hora).",persons:"Personas",locate:"Localizaci\xF3n",furnish:"Amueblar",mount_height:"Altura sobre el suelo (m)",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",markers_room:"En la habitaci\xF3n",pin_size:"Tama\xF1o de los s\xEDmbolos",pin_size_small:"Peque\xF1o",pin_size_normal:"Normal",pin_size_large:"Grande",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_ac_unit:"Aire acondicionado (de pared)",furn_awning:"Toldo",furn_group_outdoor:"Terraza y balc\xF3n",bin_out:"Sacado (ayudante)",bin_out_done:"sacado \u2713",bin_out_mark:"Marcar como sacado",bin_next_only:"Etiquetar solo la pr\xF3xima recogida",bin_days:"Mostrar etiquetas solo \u2026 d\xEDas antes",hh_service2:"{name}: {what} pendiente",bin_none:"Sin recogida a la vista",hh_title:"Hoy en casa",heat_sensor:"Calefacci\xF3n (sensor)",heat_sensor_hint:"Si el termostato no dice si calienta (las v\xE1lvulas Tuya informan un \xABwork state\xBB), elige aqu\xED ese sensor: encendido/abierto/calentando o una apertura mayor de 0 % hace brillar el radiador.",door_lock_btn:"Bloquear",door_unlock_btn:"Desbloquear",door_lock_confirm:"\xBFSeguro que quieres bloquear {name}?",door_unlock_confirm:"\xBFSeguro que quieres desbloquear {name}?",clock:"Reloj",clock_off:"Desactivado",clock_tl:"\u2196 reloj",clock_tr:"\u2197 reloj",clock_bl:"\u2199 reloj",clock_br:"\u2198 reloj",hh_left:"quedan {t}",hh_done:"\xA1Listo!",hh_finished:"{name} ha terminado",hh_thirsty:"Sed",hh_plant:"{name} necesita agua",hh_service:"{name}: mantenimiento pendiente",hh_fridge_open:"{name} est\xE1 abierto",alert_fridge_door:"Nevera abierta: {name}",alert_short_fridge_door:"Nevera abierta",card_household:"Hoy en casa",card_household_hint:"Hogar Pro: tarjeta con contenedores, correo, aparatos terminados, plantas sedientas y mantenimiento",furn_waste_bin:"Contenedor de basura",furn_mailbox:"Buz\xF3n",furn_neon_sign:"Letrero de ne\xF3n",sign_color:"Color de los tubos",furn_water_heater:"Termo el\xE9ctrico",stair_open:"Abierta por debajo (losa inclinada)",stair_open_hint:"Los pelda\xF1os van sobre una losa que sigue la pendiente: el hueco de debajo queda libre, con techo inclinado, y cabe otro tramo o un mueble debajo.",furn_access_point:"Punto de acceso Wi-Fi",ap_entity:"Punto de acceso",ap_mount:"Montaje",ap_ceiling:"Techo",ap_wall:"Pared",ap_gestures:"En 3D: tocar enciende o apaga su LED; mantener pulsado lo reinicia (pregunta antes). El anillo brilla azul conectado con el LED encendido, rojo si est\xE1 desconectado y \xE1mbar mientras se actualiza.",ap_role_state:"estado",ap_role_clients:"clientes",ap_role_led:"LED",ap_role_cpu:"CPU",ap_role_memory:"memoria",ap_role_restart:"reinicio",ap_client:"{n} cliente",ap_clients:"{n} clientes",ap_down:"Desconectado",ap_busy:"Actualizando",ap_up:"Conectado",ap_restart_confirm:"\xBFReiniciar {name}? Sus clientes perder\xE1n el Wi-Fi un par de minutos.",heater_capacity:"Capacidad",heater_found:"Encontrado en el mismo dispositivo:",heater_role_heating:"calentando",heater_role_showers:"duchas",heater_role_remaining:"tiempo restante",heater_role_power:"encendido",heater_role_eco:"eco",heater_gestures:"En 3D: tocar lo enciende o apaga; mantener pulsado abre su ficha para regular la temperatura y el modo.",heater_gestures_no_power:"En 3D: tocar o mantener pulsado abre su ficha para regular la temperatura y el modo (no se encontr\xF3 un interruptor de encendido).",heater_shower:"{n} ducha",heater_showers:"{n} duchas",heater_left:"{min} min para agua caliente",furn_lamp_ceiling_fan:"Ventilador de techo con luz",furn_fan_entity:"Entidad del ventilador",ceiling_fan_hint:"La luz es la entidad del elemento de arriba: el motor y la pantalla la encienden. Las aspas conmutan el ventilador por separado y giran mientras funciona, m\xE1s r\xE1pido cuanto mayor es su velocidad.",pin_standby:"En espera",furn_wall_switch:"Interruptor de pared",furn_wall_socket:"Enchufe de pared",furn_group_electric:"Electricidad",socket_count:"Enchufes",socket_n:"Enchufe {n}",socket_switch:"Encender y apagar con (opcional)",socket_power:"Medidor de consumo (W, opcional)",socket_hint:"Un enchufe con interruptor (enchufe inteligente) se enciende y apaga al tocarlo en 3D y su peque\xF1o LED muestra que est\xE1 encendido. Con medidor de consumo cuenta en el balance de energ\xEDa y su pin muestra los vatios de todos sus enchufes. Para ponerlo sobre una encimera, sube su \xABAltura sobre el suelo\xBB.",switch_keys:"Teclas",switch_key:"Entidad de la tecla",switch_key_n:"Tecla {n}",switch_ring:"Anillo de luz (color de)",switch_ring_hint:"Para interruptores con luz alrededor (p. ej. Sonoff TX Ultimate): elige la luz que da su color y brillo; el anillo brilla en la pared alrededor de la placa mientras esa luz est\xE1 encendida.",switch_hint:"Cada tecla conmuta su entidad al tocarla en 3D (una persiana se abre o se cierra) y su LED se enciende mientras est\xE1 encendida o abierta.",furn_group_household:"Hogar",bin_shape_bin120:"Contenedor con ruedas 120 l",bin_shape_bin240:"Contenedor con ruedas 240 l",bin_shape_bin1100:"Contenedor 1100 l",bin_shape_multi:"Contenedor con varios compartimentos",bin_shape_bag:"Bolsa",bin_shape_caddy:"Cubo",bin_shape_underground:"Contenedor soterrado",bin_kind:"Residuo",bin_kind_rest:"Resto",bin_kind_bio:"Org\xE1nico",bin_kind_paper:"Papel",bin_kind_plastic:"Envases",bin_kind_glass:"Vidrio",bin_kind_garden:"Restos de poda",bin_kind_recycling:"Reciclaje",bin_kind_other:"Otro",bin_color:"Color",bin_lid:"Tapa",bin_source:"Calendario de recogida o sensor",bin_match:"Palabra del calendario (vac\xEDo: seg\xFAn el residuo)",bin_today:"Hoy",bin_tomorrow:"Ma\xF1ana",bin_in_days:"en {n} d\xEDas",mailbox_shape_wall:"Buz\xF3n de pared",mailbox_shape_pole:"Buz\xF3n en poste (con bandera)",mailbox_shape_pillar:"Buz\xF3n de pie con portaperi\xF3dicos",mailbox_shape_parcel:"Buz\xF3n de paquetes",mailbox_shape_bank:"Buzones agrupados",mailbox_door:"Sensor de la puerta de recogida (opcional)",mailbox_post:"Correo",pro_feature_household:"Hogar Pro: contenedores que brillan la v\xEDspera de la recogida, buz\xF3n con correo, plantas con sed; lavadora, secadora y lavavajillas muestran el tiempo restante y \xAB\xA1Listo!\xBB; filtros y consumibles pendientes en amarillo; aviso de nevera abierta; tarjeta \xABHoy en casa\xBB; adem\xE1s la nevera inteligente (americana, puertas con sensores)",pro_name_frames:"Marcos de fotos digitales",pro_feature_frames:"Marcos de fotos digitales: marcos en la pared muestran una presentaci\xF3n, el calendario, un tabl\xF3n, listas o la imagen de una c\xE1mara; al tocar se abre en grande",curtain_side_both:"ambos lados",curtain_side_left:"izquierda (vista de frente)",curtain_side_right:"derecha (vista de frente)",awning_pitch:"Inclinaci\xF3n (\xB0)",awning_valance:"Fald\xF3n (borde de lona delantero)",awning_kind_arm:"Toldo de brazos articulados (terraza)",awning_kind_drop:"Toldo de brazo invisible / punto recto (balc\xF3n, ventana)",awning_kind_vertical:"Toldo vertical / ZIP (ventana, balc\xF3n)",awning_kind_pergola:"Toldo de p\xE9rgola / galer\xEDa acristalada",awning_kind_side:"Toldo lateral (privacidad)",awning_kind_arm_hint:"El cl\xE1sico sobre la terraza: los brazos articulados empujan la lona hacia fuera con una ligera pendiente. Fondo = salida.",awning_kind_drop_hint:"Los brazos giran desde la pared hacia delante y hacia abajo, la lona se tensa inclinada delante. Fondo = longitud de los brazos, Inclinaci\xF3n = cu\xE1nto bajan los brazos por debajo de la horizontal.",awning_kind_vertical_hint:"La lona baja en vertical por gu\xEDas laterales hasta el suelo \u2013 delante de una ventana, la barandilla de un balc\xF3n o el frente de una p\xE9rgola. Altura sobre el suelo = borde inferior del cofre.",awning_kind_pergola_hint:"Un marco fijo con postes delante; la lona se extiende por encima de sus gu\xEDas. Fondo = hasta los postes, Inclinaci\xF3n = pendiente del techo.",awning_kind_side_hint:"Un poste con la lona enrollada a la izquierda, la lona se extiende en horizontal hacia la derecha hasta el poste opuesto. Ancho = extensi\xF3n, Altura sobre el suelo = altura de la lona.",furn_glow_color:"Color fijo en 3D",furn_glow_color_hint:"La l\xE1mpara brilla siempre en este color en el plano, sea cual sea el color que indique la luz \u2013 encendido/apagado y brillo siguen viniendo de la luz.",furn_only_color:"Brillar solo cuando la luz muestra este color",furn_only_color_pick:"Color",furn_only_color_hint:"La l\xE1mpara solo brilla mientras la luz muestra aproximadamente este color, p. ej. amarillo para \xABagua\xBB en el lavabo. Los dem\xE1s colores de la misma luz quedan oscuros aqu\xED.",furn_run_w:"En marcha desde (vatios)",furn_run_w_hint:"A partir de cu\xE1ntos vatios en el sensor de potencia el aparato cuenta como en marcha y brilla (vac\xEDo: 10 W). Para aparatos tras un enchufe inteligente que consumen unos vatios en espera, p. ej. 100.",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_energy:"Energ\xEDa y solar",solar_pro_soon:"pr\xF3ximamente",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_float:"Mostrar sobre la habitaci\xF3n sin el tejado",roof_window_float_hint:"Cuando el tejado se desvanece al acercarte a una planta o una habitaci\xF3n, la ventana se queda en su sitio sobre la habitaci\xF3n: abierta, abatida, con su persiana. Funciona sobre las habitaciones de la planta en la que se apoya el tejado; donde la pendiente baja sobre una planta inferior, las ventanas se quedan en el tejado. Desactivado: solo se ve en el tejado.",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",lock_plan:"\u{1F512} Plano",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",climate:"Clima de la habitaci\xF3n",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show_always:"Mostrar siempre",marker_show_active:"Solo si est\xE1 activo",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",furn_power:"Sensor de potencia (W)",furn_meter_reading:"Lectura del contador (m\xB3 o litros)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",floor_lights:"{n} luces encendidas",now_title:"\xBFQu\xE9 pasa?",now_open_one:"1 ventana o puerta abierta",now_open:"{n} ventanas y puertas abiertas",now_tilted:"abatida",now_unlocked_one:"1 puerta sin cerrar con llave",now_unlocked:"{n} puertas sin cerrar con llave",now_home:"En casa",now_away:"Fuera",now_nobody:"Nadie en casa",now_lights_one:"1 luz encendida",now_lights:"{n} luces encendidas",now_battery:"Bater\xEDa",now_car_away:"fuera",now_calm:"Todo en orden",now_calm_away:"Est\xE1s fuera: en casa todo est\xE1 en orden",now_calm_detail:"Sin avisos, nada abierto, nada que hacer.",now_try:"Nuevo para el m\xF3vil: \xAB\xBFQu\xE9 pasa?\xBB, tu casa de un vistazo.",now_try_yes:"Probar",now_try_no:"No, gracias",now_lights_off:"Apagar todo",now_lock:"Cerrar con llave",now_check:"Repaso de la casa",now_check_hint:"Antes de salir o de acostarte: revisa una a una todas las cosas abiertas o encendidas y ap\xE1galas.",now_next:"Siguiente",now_done:"Listo",now_check_done:"Repaso de la casa terminado",now_check_nothing:"Todo cerrado, todo apagado.",now_window_hint:"ci\xE9rrala a mano",now_all_lights_off:"Apagar las {n} luces",nav_now:"Ahora",nav_rooms:"Habitaciones",nav_covers:"Persianas",nav_more:"M\xE1s",nav_whole_floor:"Toda la planta",nav_all_up:"Subir todas",nav_all_down:"Bajar todas",nav_house:"Toda la casa",nav_solo:"Habitaci\xF3n sola",nav_solo_hint:"La habitaci\xF3n abierta aparece sola en la imagen, sin el resto de la casa.",nav_off:"Desactivar vista para m\xF3vil",now_setting:"Vista para m\xF3vil",now_setting_hint:"Una l\xEDnea bajo la casa dice qu\xE9 pasa. Un toque abre la lista: avisos, ventanas abiertas, qui\xE9n est\xE1 en casa, el hogar, luces y energ\xEDa, con \xABApagar todo\xBB y el repaso de la casa.",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia"},_f={};function T(o,e,t={}){let n=bf[e]??_f[e]??e;for(let[i,r]of Object.entries(t))n=n.replace(`{${i}}`,String(r));return n}function ie(o,e,t=2){return e.toLocaleString("es",{maximumFractionDigits:t})}function yn(o){let e=(o.switch_keys??[]).slice(0,4).map(t=>t&&t!=="none"?t:null);return e.length?e:[null]}var fc=o=>o&&o!=="none"?o:null;function wn(o){let e=(o.socket_outlets??[]).slice(0,4).map(t=>({entity:fc(t==null?void 0:t.entity),power:fc(t==null?void 0:t.power)}));return e.length?e:[{entity:null,power:null}]}function Yo(o){return o.switch_ring&&o.switch_ring!=="none"?o.switch_ring:null}function Or(o,e){var n;let t=e?(n=o.states[e])==null?void 0:n.state:void 0;return t==="on"||t==="open"||t==="opening"}var vf={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},yf=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),wf=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),xf=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Qo=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],kc=new Set(["light","switch","fan"]);function $c(o){return o.slice(0,o.indexOf("."))}function V(o){return vf[$c(o)]??null}function mc(o){return o!==null&&o!=="scene"&&o!=="script"}var kf=new Set(["shutter","garage","gate","door","curtain","awning","window","shade"]);function Jo(o){return!o||!(((o.attributes.supported_features??0)|0)&48)?!1:typeof o.attributes.current_tilt_position=="number"||!kf.has(String(o.attributes.device_class??""))}function Lr(o,e){let t=((o==null?void 0:o.attributes.supported_features)??0)|0;return t!==0&&!(t&3)&&(t&176)!==0?e==="stop"?{service:"stop_cover_tilt",data:{}}:t&(e==="open"?16:32)?{service:e==="open"?"open_cover_tilt":"close_cover_tilt",data:{}}:{service:"set_cover_tilt_position",data:{tilt_position:e==="open"?100:0}}:{service:e==="open"?"open_cover":e==="close"?"close_cover":"stop_cover",data:{}}}function Xo(o,e,t){let n=new Map;for(let i of e){let r=Lr(o.states[i],t),s=`${r.service}|${JSON.stringify(r.data)}`,a=n.get(s)??{...r,ids:[]};a.ids.push(i),n.set(s,a)}return[...n.values()].map(i=>({service:i.service,data:{...i.data,entity_id:i.ids}}))}function $f(o,e){var i;let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let r=(i=o.devices)==null?void 0:i[n];if(!r)return null;if(r.area_id)return r.area_id;n=r.parent_device_id}return null}function qe(o,e){var n;let t=(n=o.entities)==null?void 0:n[e];return t?t.area_id?t.area_id:$f(o,t.device_id):null}function Zo(o,e){var n;let t=(n=o.entities)==null?void 0:n[e];return!!t&&(!!t.hidden||!!t.hidden_by||!!t.disabled_by)}function gc(o,e){var a;let t=V(e);if(!t)return!1;let n=(a=o.entities)==null?void 0:a[e];if(Zo(o,e)||n!=null&&n.entity_category)return!1;let i=o.states[e];if(!i)return!1;let r=i.attributes.device_class,s=String(i.attributes.unit_of_measurement??"");return t==="sensor"?r?yf.has(r)||r==="voltage"&&s==="mV":wf.has(s):t==="binary"?r?xf.has(r):!!(n!=null&&n.area_id):!0}var Sf=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function bc(o,e){var i;if(V(e)!=="sensor")return!1;let t=(i=o.entities)==null?void 0:i[e];if(Zo(o,e)||t!=null&&t.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||Sf.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||ee(n)}var Hr=null;function uo(o){var l,u;let e=Hr;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,i=[],r=new Map,s=new Map;for(let d of Object.keys(o.entities??{})){let c=o.entities[d],p=c.device_id;p&&c.area_id&&(s.get(p)??s.set(p,new Set).get(p)).add(c.area_id),p&&qr(o,d)&&(n.get(p)??n.set(p,[]).get(p)).push(d),p&&!Zo(o,d)&&!c.entity_category&&(r.get(p)??r.set(p,new Set).get(p)).add($c(d));let h=gc(o,d),f=qe(o,d);if(!f){(h||bc(o,d))&&mc(V(d))&&i.push(d);continue}h&&(t.get(f)??t.set(f,[]).get(f)).push(d)}if(o.entities)for(let d of Object.keys(o.states))o.entities[d]||(gc(o,d)||bc(o,d))&&mc(V(d))&&i.push(d);i.sort((d,c)=>Qo.indexOf(V(d))-Qo.indexOf(V(c))||K(o,d).localeCompare(K(o,c)));for(let[d,c]of t){let p=(u=(l=o.areas)==null?void 0:l[d])==null?void 0:u.name;c.sort((h,f)=>{let m=Qo.indexOf(V(h)),b=Qo.indexOf(V(f));return m-b||K(o,h,p).localeCompare(K(o,f,p))})}let a=new Set([...s].filter(([,d])=>d.size>1).map(([d])=>d));return Hr={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:i,domains:r,hubs:a},Hr}function Ie(o,e){return!e||!o.entities?[]:uo(o).areas.get(e)??[]}var Mf={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},If=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Pf=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Ef(o,e){var i,r,s;let t=(r=(i=o.entities)==null?void 0:i[e])==null?void 0:r.device_id,n=t&&!uo(o).hubs.has(t)?uo(o).domains.get(t):void 0;return n&&[...n].some(a=>If.has(a))?!1:!Pf.test(`${e} ${((s=o.states[e])==null?void 0:s.attributes.friendly_name)??""}`)}function Nr(o,e,t,n){var h;let i=(h=t.climate)==null?void 0:h[n];if(i==="none")return[];if(i)return o.states[i]?[i]:[];let r=Mf[n],s=(f,m)=>B([f,m],t.points),a=(e==null?void 0:e.placements.filter(f=>f.entity_id.startsWith("sensor.")))??[],l=a.filter(f=>s(f.x,f.z)).map(f=>f.entity_id),u=new Set(a.filter(f=>!s(f.x,f.z)).map(f=>f.entity_id)),d=[...new Set([...Ie(o,t.area_id).filter(f=>!u.has(f)),...l])],c=d.filter(f=>{var m;return f.startsWith("sensor.")&&((m=o.states[f])==null?void 0:m.attributes.device_class)===r&&(t.outdoor||Ef(o,f))});if(c.length)return c;let p=Sc[n];return p?d.filter(f=>{var m;return f.startsWith("climate.")&&typeof((m=o.states[f])==null?void 0:m.attributes[p])=="number"}):[]}var Sc={temperature:"current_temperature",humidity:"current_humidity"};function Tf(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let r=Sc[t],s=r?Number(n==null?void 0:n.attributes[r]):Number.NaN;return t==="temperature"?_c(s,Ye(o)):s}let i=Number(n==null?void 0:n.state);return t==="temperature"?_c(i,n==null?void 0:n.attributes.unit_of_measurement):i}function Ye(o){var e,t;return((t=(e=o.config)==null?void 0:e.unit_system)==null?void 0:t.temperature)==="\xB0F"?"\xB0F":"\xB0C"}function _c(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function Tt(o,e){return Ye(o)==="\xB0F"?e*9/5+32:e}function Ze(o,e,t,n){let i=Nr(o,e,t,n).map(r=>Tf(o,r,n)).filter(r=>Number.isFinite(r));return i.length?i.reduce((r,s)=>r+s,0)/i.length:null}function Af(o,e){return!!o.entities&&uo(o).hubs.has(e)}function zf(o,e){return o.entities?uo(o).power.get(e)??[]:[]}function K(o,e,t,n=!1){var a,l;let i=o.states[e],r=(a=o.entities)==null?void 0:a[e],s=(i==null?void 0:i.attributes.friendly_name)??(r==null?void 0:r.name)??e;if(n&&(r!=null&&r.name)&&r.device_id){let u=(l=o.devices)==null?void 0:l[r.device_id],d=((u==null?void 0:u.name_by_user)||(u==null?void 0:u.name)||"").trim();d&&s.toLowerCase()===`${d} ${r.name}`.toLowerCase()&&(s=r.name)}if(t&&s.length>t.length+1&&s.toLowerCase().startsWith(t.toLowerCase()+" ")){let u=s.slice(t.length+1);return u.charAt(0).toUpperCase()+u.slice(1)}return s}function Mc(o,e){if(!e||e==="none")return null;let t=o.states[e];if(!t||ee(t))return null;let n=t.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(n))return!0;if(["off","closed","idle","false","inactive","standby"].includes(n))return!1;let i=Number(n);return Number.isFinite(i)?i>0:null}function Ic(o){let e=o.toLowerCase().trim().replace(/[\s-]+/g,"_"),t=/(^|_)(not|no|nicht|kein|keine|un|dis)_?(charging|charge|connected|plugged|verbunden|angesteckt)/.test(e),n=/charger_free|^available$|^idle$|frei|abgesteckt|no_car|kein_fahrzeug/.test(e),i=!t&&!/ready_to_charge|charger_|complete|finish|charged|fertig|beendet|voll$|full/.test(e)&&/(^|_)(charging|charge|laden|lädt|ladend|lade)($|_)/.test(e),r=i||!t&&!n&&/connect|plug|ready|insert|angesteckt|verbunden|wait|paused|suspend|preparing|complete|finish|charged|fertig|full|voll/.test(e);return{charging:i,plugged:r}}function ee(o){return!o||o.state==="unavailable"||o.state==="unknown"}var Rf=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Dr(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Vr(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function Qe(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Vr(o.state)||o.state==="returning";switch(V(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return Dr(o)&&Rf.has(String(o.state).toLowerCase());default:return!1}}function Pc(o,e){if(!o||ee(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function Ec(o){if(!o||ee(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],i=["heating","cooling","drying","fan"].includes(t);return{color:n,level:i||!t?1:.45}}function Tc(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255),n=a=>{let l=Math.max(...a),u=Math.min(...a),d=l-u;return l<=0||d/l<.25?[-1,0]:[(l===a[0]?((a[1]-a[2])/d+6)%6:l===a[1]?(a[2]-a[0])/d+2:(a[0]-a[1])/d+4)*60,d/l]},[i]=n(t),[r]=n(o.color);if(i<0||r<0)return i<0&&r<0?o:null;let s=Math.abs(i-r);return Math.min(s,360-s)<=30?o:null}function Ac(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(n=>parseInt(e.slice(n,n+2),16)/255);return{...o,color:t}}function _t(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,i=t.rgb_color,r;return i&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?r=[i[0]/255,i[1]/255,i[2]/255]:typeof t.color_temp_kelvin=="number"?r=Cf(t.color_temp_kelvin):r=[1,.71,.28],{color:r,level:n}}function zc(o){let e=o.attributes.supported_color_modes;return!Array.isArray(e)||!e.length?!0:e.some(t=>["hs","rgb","rgbw","rgbww","xy"].includes(String(t)))}function Cf(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function xn(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Ff=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Of=new Set(["garage","gate"]),Hf=new Set(["window","opening"]);function co(o,e,t=!1){let n=new Map;return e.length&&o.forEach((i,r)=>{let s=t&&e.length===1?e[0]:e[r];s&&n.set(i.id,s)}),n}function kn(o,e){let t=new Map,n=(r,s)=>r==="none"?null:r??s??null,i=(r,s,a)=>{let l=n(r.cover,s);return{cover:l,contact:r.sensor==="handle"&&r.contact==null?null:n(r.contact,a),tilt:r.tilt==="none"?null:r.tilt,contact2:r.leaves===2&&r.contact2&&r.contact2!=="none"?r.contact2:null,lock:(r.type==="door"||r.type==="window"&&r.sill<=.01)&&r.lock&&r.lock!=="none"?r.lock:null,tilt2:r.leaves===2&&r.tilt2&&r.tilt2!=="none"?r.tilt2:null,position:l&&V(l)==="cover"&&r.position&&r.position!=="none"?r.position:null,positionInverted:!!r.position_inverted,...r.slat_invert?{slatInvert:!0}:{},tiltAngle:r.tilt_angle&&r.tilt_angle!=="none"?r.tilt_angle:null,tiltMax:r.tilt_max??null,tiltOffset:r.tilt_offset??null,tiltInvert:!!r.tilt_invert,shut:!!r.shut,...r.contact_invert?{contactInvert:!0}:{},...r.cover_invert?{coverInvert:!0}:{}}};for(let r of e){for(let s of r.rooms){let a=r.openings.filter(y=>y.room_id===s.id).sort((y,w)=>y.edge-w.edge||y.offset-w.offset);if(!a.length)continue;let l=Ie(o,s.area_id),u=y=>{var w;return(w=o.states[y])==null?void 0:w.attributes.device_class},d=l.filter(y=>V(y)==="cover"&&Ff.has(u(y))),c=a.filter(y=>y.type==="window"),p=a.filter(y=>y.type==="door"),h=a.filter(y=>y.type==="garage"),f=co(c,d,!0),m=co(c,l.filter(y=>V(y)==="binary"&&Hf.has(u(y)))),b=co(p,l.filter(y=>V(y)==="binary"&&u(y)==="door")),v=co(h,l.filter(y=>V(y)==="cover"&&Of.has(u(y)??""))),$=co(h,l.filter(y=>V(y)==="binary"&&u(y)==="garage_door"));for(let y of a){let w=y.type==="window"?f:y.type==="garage"?v:null,S=y.type==="window"?m:y.type==="garage"?$:b;t.set(y.id,i(y,w==null?void 0:w.get(y.id),S.get(y.id)))}}for(let s of r.openings)t.has(s.id)||t.set(s.id,i(s))}return t}var Lf=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Nf(o){if(!o||ee(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=Lf.find(([i])=>i.test(t.trim()));if(n)return n[1]}return null}var Df=new Set(["unlocked","unlocking","open","opening"]);function jr(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var Vf=.5;function vt(o,e,t="window"){var w;e.cover&&jr(e.cover)&&(e={...e,cover:null,position:null});let n=e.lock?o.states[e.lock]:void 0,i=n&&Df.has(n.state)?{unlocked:!0}:{},r=S=>{var I;return!!S&&((I=o.states[S])==null?void 0:I.state)==="on"},s=S=>!!S&&!!o.states[S]&&!ee(o.states[S]),a=S=>S?Nf(o.states[S]):null,l=S=>{let I=a(S);return e.contactInvert&&S&&S!==e.tilt&&S!==e.tilt2&&I!=="tilted"&&I?I==="open"?"closed":"open":I},u=r(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",d=l(e.contact2)==="open"&&!u?1:0,c=r(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",p=c?1:0,h=e.tiltAngle?Number((w=o.states[e.tiltAngle])==null?void 0:w.state):NaN;if(Number.isFinite(h)){let S=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);p=Math.min(1,Math.max(0,S/(e.tiltMax||15))),p<.08&&(p=0),c=p>0}let f=l(e.contact)==="open"&&!c?1:0,m=null,b=e.cover?o.states[e.cover]:void 0,v=Cc(o,e.position);if(v!==null)m=e.positionInverted?v:1-v;else if(b&&!ee(b)){let S=b.attributes.current_position;typeof S=="number"?m=1-Math.min(100,Math.max(0,S))/100:m=b.state==="closed"?1:b.state==="opening"||b.state==="closing"?.5:0,e.coverInvert&&(m=1-m)}else e.cover&&(m=0);let $=b&&!ee(b)?$n(b,!!e.slatInvert):null,y=$===null?{}:{slats:$/100};if(t==="door"){let S=l(e.contact);return m!==null&&b&&jc.has(String(b.attributes.device_class??""))?{open:S===null?1-m:S==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...i}:{open:S===null?e.shut?0:Vf:S==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:m,...y,sensed:S!==null||m!==null,...i}}if(t==="garage"){let S=l(e.contact),I=m!==null||S!==null;return m===null&&(m=S===null||S==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:m,sensed:I}}return{open:f,open2:d,tilt:p,tilt2:u?1:0,cover:m,...y,sensed:s(e.contact)||s(e.tilt)||Number.isFinite(h),...i}}function Rc(o,e){return e==="garage"?(o.cover??1)<.98:o.open>.02||o.open2>.02}function $n(o,e=!1){let t=o==null?void 0:o.attributes.current_tilt_position;if(typeof t!="number"||!Number.isFinite(t))return null;let n=Math.min(100,Math.max(0,t));return e?100-n:n}function po(o,e){return!!(o!=null&&o.floors.some(t=>t.openings.some(n=>n.cover===e&&n.slat_invert)))}function Cc(o,e){let t=e?o.states[e]:void 0;if(!t||ee(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,i?n/100:n))}function Wr(o,e){var s,a;let t=new Map,n=[];for(let l of e){let u=V(l)==="camera"?`camera:${l}`:((a=(s=o.entities)==null?void 0:s[l])==null?void 0:a.device_id)??`entity:${l}`,d=t.get(u);d||(t.set(u,d=[]),n.push(u)),d.push(l)}let i=n.map(l=>{let u=t.get(l),d=u.find(c=>{var p,h;return!((h=(p=o.entities)==null?void 0:p[c])!=null&&h.name)})??u[0];return{primary:d,others:u.filter(c=>c!==d)}}),r=new Map(e.map((l,u)=>[l,u]));return i.sort((l,u)=>r.get(l.primary)-r.get(u.primary))}function ei(o,e){return Wr(o,e).map(t=>t.primary)}var vc={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Fc=new Set(["tv_board","tv_wall"]);function Oc(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let i=String(n).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||i===r||r.length>=3&&i.includes(r)}function Hc(o){return Fc.has(o)||!!Cl(o)}function ti(o){return Hc(o)||o==="desk"||o==="fridge_smart"}function Sn(o,e){var r;let t=new Set,n=Jt(o,e),i=e.some(s=>s.openings.some(a=>a.confirm))?kn(o,e):null;for(let s of e){for(let a of s.placements)a.confirm&&t.add(a.entity_id);for(let a of s.openings){let l=a.confirm?i==null?void 0:i.get(a.id):null;l!=null&&l.cover&&l.cover!=="none"?t.add(l.cover):a.type==="garage"&&(l!=null&&l.contact)&&V(l.contact)==="switch"&&t.add(l.contact)}for(let a of s.furniture){if(a.confirm&&a.type==="wall_switch")for(let u of yn(a))u&&t.add(u);if(a.confirm&&a.type==="wall_socket")for(let u of wn(a))u.entity&&t.add(u.entity);let l=a.confirm?(r=n.get(a.id))==null?void 0:r.entity:null;l&&l!=="none"&&t.add(l)}}return t}function Lc(o,e){let t=new Set;if(!e.some(n=>n.openings.some(i=>i.cover_invert)))return t;for(let n of kn(o,e).values())n.coverInvert&&n.cover&&t.add(n.cover);return t}function Nc(o,e){let t=new Map;for(let n of e)for(let i of n.furniture){if(i.type!=="awning"&&!Bo(i.type))continue;let r=i.entity&&i.entity!=="none"?i.entity:null,s=r?o.states[r]:void 0,a=i.awning_time??20;if(!s||ee(s)){t.set(i.id,{out:0,moving:0,time:a});continue}let l=p=>i.awning_invert?1-p:p,u=Cc(o,i.awning_position&&i.awning_position!=="none"?i.awning_position:null),d=s.attributes.current_position,c=s.state==="opening"?i.awning_invert?-1:1:s.state==="closing"?i.awning_invert?1:-1:0;u!==null?t.set(i.id,{out:l(u),moving:0,time:a}):typeof d=="number"&&Number.isFinite(d)?t.set(i.id,{out:l(Math.min(1,Math.max(0,d/100))),moving:0,time:a}):c?t.set(i.id,{out:null,moving:c,time:a}):t.set(i.id,{out:l(s.state==="open"||s.state==="on"?1:0),moving:0,time:a})}for(let n of e)for(let i of n.outdoor??[])if(i.type==="fence")for(let r of i.gates??[])t.set(r.id,jf(o,r));return t}function jf(o,e){let t=e.time??(e.kind==="slide"?15:4),n=a=>a&&a!=="none"?o.states[a]:void 0,i=n(e.contact);if(i&&!ee(i))return{out:null,moving:i.state==="on"||i.state==="open"?1:-1,time:t,settled:!0};let r=n(e.entity);if(!r||ee(r))return{out:null,moving:-1,time:t,settled:!0};let s=r.attributes.current_position;return typeof s=="number"&&Number.isFinite(s)?{out:Math.min(1,Math.max(0,s/100)),moving:0,time:t}:r.state==="opening"?{out:null,moving:1,time:t}:r.state==="closing"?{out:null,moving:-1,time:t}:{out:null,moving:r.state==="open"||r.state==="on"?1:-1,time:t,settled:!0}}function Br(o,e){let t=i=>{var s;if(!i||i==="none")return!1;let r=(s=o.states[i])==null?void 0:s.state;return r==="on"||r==="open"},n=new Map;for(let i of e)for(let r of i.furniture)r.type==="fridge_smart"&&n.set(r.id,{left:t(r.door_left),right:t(r.door_right)});return n}var yc={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function qr(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function Ur(o,e){var m,b;if(qr(o,e))return e;if(e.startsWith("binary_sensor."))return null;let t=(b=(m=o.entities)==null?void 0:m[e])==null?void 0:b.device_id;if(!t)return null;let n=Af(o,t),i=qe(o,e),r=zf(o,t).filter(v=>v!==e);if(!r.length)return null;let s=`sensor.${e.slice(e.indexOf(".")+1)}_power`;if(r.includes(s))return s;let a=v=>{var $;return String((($=o.states[v])==null?void 0:$.attributes.friendly_name)??"").trim().toLowerCase()},l=(v,$)=>{let y=$.slice($.indexOf(".")+1),w=a($);return y.length>=4&&v.slice(v.indexOf(".")+1).includes(y)?y.length:w.length>=4&&a(v).includes(w)?w.length:0},u=r.length>1||n?Object.values(o.entities??{}).filter(v=>v.device_id===t&&!v.entity_id.startsWith("sensor.")).map(v=>v.entity_id):[e],d=v=>{let $=null,y=0;for(let w of u){let S=l(v,w);S>y&&([$,y]=[w,S])}return $},c=new Map(r.map(v=>[v,d(v)])),p=r.find(v=>c.get(v)===e);if(p)return p;let h=r.filter(v=>c.get(v)===null),f=h.find(v=>i!==null&&qe(o,v)===i);return f||n?f??null:h.find(v=>i===null||qe(o,v)===null||qe(o,v)===i)??null}function Jt(o,e){let t=new Map;for(let n of e){let i=new Set([...n.furniture.flatMap(r=>[r.entity,r.power]),...n.placements.map(r=>r.entity_id)].filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let s=r.type in yc,a=s?yc[r.type]:vc[r.type]??(Yt(r.type)?vc.robot_vacuum:void 0);if(!a&&r.entity==null&&r.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&B([r.x,r.z],h.points))??(r.type==="awning"?Er(n).find(h=>B([r.x,r.z],h.points)):void 0),u=l?ei(o,Ie(o,l.area_id)):[],d=h=>`${h} ${K(o,h)}`,c=r.entity==="none"?null:r.entity??null;if(r.entity==null){let h=u.filter(f=>!i.has(f));if(s){let f=h.filter(m=>V(m)==="light");c=f.find(m=>a.test(d(m)))??f[0]??null}else if(Yt(r.type)){let f=(l==null?void 0:l.area_id)??null;c=Object.keys(o.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&!Zo(o,m)&&qe(o,m)===f)??null}else if(r.type==="radiator"||r.type==="ac_unit"){let f=h.filter(m=>V(m)==="climate");c=f.find(m=>a.test(d(m)))??f[0]??null}else if(Hc(r.type)){let f=h.filter(m=>V(m)==="media");c=f.find(m=>{var b;return((b=o.states[m])==null?void 0:b.attributes.device_class)==="tv"})??f.find(m=>a==null?void 0:a.test(d(m)))??(Fc.has(r.type)?f[0]??null:null)}else r.type==="awning"?c=h.find(f=>{var m;return f.startsWith("cover.")&&((a==null?void 0:a.test(d(f)))||((m=o.states[f])==null?void 0:m.attributes.device_class)==="awning")})??null:a&&(c=h.find(f=>["switch","media","fan"].includes(V(f)??"")&&a.test(d(f)))??null);c&&i.add(c)}let p=r.power==="none"?null:r.power??null;r.power==null&&(p=c?Ur(o,c):null,!p&&a&&l&&!s&&(p=Ie(o,l.area_id).find(f=>qr(o,f)&&!i.has(f)&&a.test(d(f)))??null),p&&i.add(p)),(c||p)&&t.set(r.id,{entity:c,power:p})}}return t}function Kr(o){if(!o||o.state==="off"||o.state==="standby"||ee(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function Mn(o,e,t,n=[]){let i=(c,p)=>B([c,p],t.points),r=Jt(o,[e]),s=kn(o,[e]),a=[...e.placements.filter(c=>i(c.x,c.z)).map(c=>c.entity_id),...e.furniture.filter(c=>i(c.x,c.z)).flatMap(c=>{var p,h;return[(p=r.get(c.id))==null?void 0:p.entity,(h=r.get(c.id))==null?void 0:h.power]}),...e.openings.filter(c=>c.room_id===t.id).flatMap(c=>{let p=s.get(c.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(c=>[c.window,c.cover,c.contact,c.tilt]),...t.panel??[]].filter(c=>!!c&&!!o.states[c]),l=new Set(t.hidden??[]),u=[...new Set(a)].filter(c=>!l.has(c)),d=new Set(u);return{shown:u,more:Ie(o,t.area_id).filter(c=>!d.has(c)&&!l.has(c))}}var wc=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Wf={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function ni(o,e){var c,p;let t=e.car??{},n=h=>h&&h!=="none"?h:null,i=n(t.device)??n(e.entity),r=i?(p=(c=o.entities)==null?void 0:c[i])==null?void 0:p.device_id:null,s=r&&o.entities?Object.values(o.entities).filter(h=>h.device_id===r).map(h=>h.entity_id):[],a=h=>{var f,m,b;return`${h} ${((f=o.states[h])==null?void 0:f.attributes.friendly_name)??""} ${((b=(m=o.entities)==null?void 0:m[h])==null?void 0:b.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(h,f,m)=>s.find(b=>f.includes(b.split(".")[0])&&Wf[h].test(a(b))&&(!m||m(b)))??null,u=h=>{var f;return String(((f=o.states[h])==null?void 0:f.attributes.unit_of_measurement)??"")},d=h=>{var f;return String(((f=o.states[h])==null?void 0:f.attributes.device_class)??"")};return{soc:n(t.soc)??s.find(h=>h.startsWith("sensor.")&&d(h)==="battery")??l("soc",["sensor"],h=>u(h)==="%"),range:n(t.range)??l("range",["sensor"],h=>/km|mi/.test(u(h)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],h=>/^k?W$/.test(u(h)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&d(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??s.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??s.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function Bf(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function ho(o,e){var b;let t=ni(o,e),n=v=>v?o.states[v]:void 0,i=v=>{var y;let $=Number((y=n(v))==null?void 0:y.state);return v&&Number.isFinite($)?$:null},r=i(t.soc),s=i(t.range),a=n(t.charging),l=String((a==null?void 0:a.attributes.unit_of_measurement)??""),u=a&&/^k?W$/.test(l)?(i(t.charging)??0)*(l==="kW"?1e3:1):null,d=u!==null?u>50:!!a&&["on","charging","laden"].includes(a.state.toLowerCase()),c=n(t.plugged),p=n(t.lock),h=n(t.climate),f=n(t.tracker),m=(f==null?void 0:f.state.toLowerCase())??"";return{entities:t,soc:r!==null?Math.max(0,Math.min(100,r)):null,range:s,rangeUnit:String(((b=n(t.range))==null?void 0:b.attributes.unit_of_measurement)??"km"),chargingW:u,charging:d,plugged:c?c.state==="on":null,locked:p?Bf(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:f&&m!=="home"&&!ee(f)?m==="not_home"?"":f.state:null}}function Dc(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(ni(o,n)))).filter(t=>!!t)}function fo(o,e,t){var i,r;if(t==="none")return null;if(t)return t;let n=e?(r=(i=o.entities)==null?void 0:i[e])==null?void 0:r.device_id:null;if(!n||!o.entities)return null;for(let s of Object.values(o.entities))if(!(s.device_id!==n||!s.entity_id.startsWith("sensor."))&&(wc.test(s.translation_key??"")||wc.test(s.entity_id.split(".")[1])))return s.entity_id;return null}function xc(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Gr(o,e,t,n){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let i=xc(t);if(!i)return null;let r=s=>{var a,l;return[s.name,s.area_id??"",s.area_id&&((l=(a=o.areas)==null?void 0:a[s.area_id])==null?void 0:l.name)||""].map(xc).filter(Boolean)};return(n!=="loose"?e.find(s=>r(s).includes(i)):void 0)??(n!=="exact"?e.find(s=>r(s).some(a=>a.length>=3&&(a.includes(i)||i.includes(a)))):void 0)??null}function Vc(o,e,t,n,i,r=new Set){var l,u;let s=n?(l=o.states[n])==null?void 0:l.attributes:void 0,a=[...e.filter(d=>d.id===t),...e.filter(d=>d.id!==t&&!r.has(d.id))];for(let d of[i?(u=o.states[i])==null?void 0:u.state:void 0,s==null?void 0:s.current_room,s==null?void 0:s.room,s==null?void 0:s.current_segment])for(let c of["exact","loose"])for(let p of a){let h=Gr(o,p.rooms,d,c);if(h)return{floor:p,room:h}}return null}var jc=new Set(["garage","gate","door"]);function In(o,e){let t=new Set,n=new Set,i=r=>{if(!r||r==="none"||!o.states[r])return;let s=V(r);s==="light"?t.add(r):s==="cover"&&!jc.has(String(o.states[r].attributes.device_class??""))&&n.add(r)};for(let r of e.rooms){let s=new Set(r.hidden??[]);for(let a of ei(o,Ie(o,r.area_id)))s.has(a)||i(a)}for(let r of e.placements)i(r.entity_id);for(let r of e.furniture)i(r.entity);return{lights:[...t],covers:[...n]}}function Wc(o,e){let t=new Set,n=i=>{i&&i.startsWith("climate.")&&o.states[i]&&t.add(i)};for(let i of e.rooms){let r=new Set(i.hidden??[]);for(let s of Ie(o,i.area_id))r.has(s)||n(s)}for(let i of e.placements)n(i.entity_id);for(let i of e.furniture)n(i.entity);return[...t]}function yt(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function mo(o){o!==location.pathname+location.search&&(history.pushState({from:location.pathname},"",o),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}})))}function Bc(o,e,t){var i;let n=((i=t.target)==null?void 0:i.trim())??"";if(t.action==="navigate"&&n)mo(n);else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[r,s]=n.split(".",2);o.callService(r,s,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var Oe=(o,e)=>[o[0]-e[0],o[1]-e[1]],at=(o,e)=>[o[0]+e[0],o[1]+e[1]],Je=(o,e)=>[o[0]*e,o[1]*e],Jr=(o,e)=>o[0]*e[0]+o[1]*e[1],Pn=(o,e)=>o[0]*e[1]-o[1]*e[0],go=o=>Math.hypot(o[0],o[1]),wt=o=>{let e=go(o)||1;return[o[0]/e,o[1]/e]},Qr=o=>[-o[1],o[0]],qc=o=>[o[1],-o[0]];function En(o,e,t=[]){let n=e.eps??.005,i=[],r=t.filter(k=>Math.hypot(k.b[0]-k.a[0],k.b[1]-k.a[1])>.05),s=[],a=k=>{for(let _=0;_<s.length;_++)if(Math.abs(s[_][0]-k[0])<=n&&Math.abs(s[_][1]-k[1])<=n)return _;return s.push([k[0],k[1]]),s.length-1},l=[];for(let k of o){let _=k.points;if(_.length<3||Math.abs(Ge(_))<1e-6)continue;let E=Ge(_)>0,A=_.map(a);for(let F=0;F<_.length;F++){let j=A[F],Q=A[(F+1)%_.length];j!==Q&&l.push(E?{u:j,v:Q,room:k.id,edge:F,forward:!0}:{u:Q,v:j,room:k.id,edge:F,forward:!1})}}let u=r.map(k=>[a(k.a),a(k.b)]),d=new Set;for(let k of o){let _=k.points;_.length<3||(k.wall_splits??[]).forEach((E,A)=>{if(!E||A>=_.length)return;let F=_[A],j=Oe(_[(A+1)%_.length],F),Q=go(j);for(let O of E)O>n&&O<Q-n&&d.add(a(at(F,Je(j,O/Q))))})}let c=[];for(let k of l){let _=s[k.u],E=s[k.v],A=Oe(E,_),F=go(A),j=Je(A,1/F),Q=[];for(let L=0;L<s.length;L++){if(L===k.u||L===k.v)continue;let J=Oe(s[L],_),Z=Jr(J,j);Z<=n||Z>=F-n||Math.abs(Pn(j,J))<=n&&Q.push({t:Z,id:L})}Q.sort((L,J)=>L.t-J.t);let O=[{t:0,id:k.u},...Q,{t:F,id:k.v}];for(let L=0;L+1<O.length;L++){let J=O[L],Z=O[L+1],te=k.forward?J.t:F-Z.t,ae=k.forward?Z.t:F-J.t;c.push({u:J.id,v:Z.id,room:k.room,edge:k.edge,t0:te,t1:ae})}}let p=new Map;for(let k of c){let _=k.u<k.v?`${k.u}-${k.v}`:`${k.v}-${k.u}`,E=p.get(_);E||p.set(_,E=[]),E.push(k)}let h=k=>({room_id:k.room,edge:k.edge,t0:k.t0,t1:k.t1}),f=new Map;for(let k of c){let _=`${k.room}:${k.edge}`;f.set(_,[...f.get(_)??[],k.t0].sort((E,A)=>E-A))}let m=k=>{var A,F;let _=(F=(A=o.find(j=>j.id===k.room))==null?void 0:A.wall_heights)==null?void 0:F[k.edge];if(!Array.isArray(_))return _;let E=f.get(`${k.room}:${k.edge}`)??[];return _[E.indexOf(k.t0)]??null},b=k=>{let _=k.map(m).filter(A=>typeof A=="number"&&A>0);if(_.length)return Math.min(..._);let E=k.map(A=>{var F;return(F=o.find(j=>j.id===A.room))==null?void 0:F.ceiling_height});return E.every(A=>typeof A=="number"&&A>0)?Math.max(...E):void 0},v=k=>{let _=k.map(E=>{var A,F;return(F=(A=o.find(j=>j.id===E.room))==null?void 0:A.wall_thickness)==null?void 0:F[E.edge]}).filter(E=>typeof E=="number"&&E>0);return _.length?Math.max(..._):void 0},$=k=>{var _;for(let E of k){let A=o.find(O=>O.id===E.room),F=(_=A==null?void 0:A.wall_slopes)==null?void 0:_[E.edge];if(!A||!F)continue;let j=A.points[E.edge],Q=A.points[(E.edge+1)%A.points.length];return{p:[j[0],j[1]],q:[Q[0],Q[1]],h0:Math.max(.05,F[0]),h1:Math.max(.05,F[1])}}},y=k=>k.some(_=>m(_)===0),w=k=>{let _=$(k);return _?{height:Math.max(_.h0,_.h1),slope:_}:{height:b(k)}},S=[],I=[],P=[];for(let k of p.values()){let _=k[0],E=k.find(A=>A!==_&&A.u===_.v&&A.v===_.u&&A.room!==_.room);for(let A of k)A!==_&&A!==E&&A.room!==_.room&&i.push(`overlap:${_.room}:${A.room}`);if(y(E?[_,E]:[_])){E&&S.push([_.room,E.room]),I.push(E?[h(_),h(E)]:[h(_)]);continue}if(E){let A=v([_,E])??e.interior;P.push({a:_.u,b:_.v,left:A/2,right:A/2,exterior:!1,roomLeft:_.room,roomRight:E.room,sources:[h(_),h(E)],...w([_,E])})}else P.push({a:_.u,b:_.v,left:0,right:v([_])??e.exterior,exterior:!0,roomLeft:_.room,roomRight:null,sources:[h(_)],...w([_])})}let C=k=>wt(Oe(s[k.b],s[k.a]));for(let k of P){if(k.exterior||k.free)continue;let _=new Set;for(let A of[k.a,k.b])for(let F of P)!F.exterior||F.free||F.a!==A&&F.b!==A||Math.abs(Pn(C(k),C(F)))>1e-6||(F.roomLeft===k.roomLeft?_.add("left"):F.roomLeft===k.roomRight&&_.add("right"));if(_.size!==1)continue;let E=k.left+k.right;_.has("left")?(k.left=0,k.right=E):(k.left=E,k.right=0)}r.forEach((k,_)=>{var Z;let[E,A]=u[_];if(E===A)return;let F=[(k.a[0]+k.b[0])/2,(k.a[1]+k.b[1])/2],j=((Z=o.find(te=>te.points.length>=3&&B(F,te.points)))==null?void 0:Z.id)??null,Q=(k.thickness??e.interior)/2,O=typeof k.height=="number"&&k.height>0?k.height:void 0,L=k.slope,J=L?{p:[k.a[0],k.a[1]],q:[k.b[0],k.b[1]],h0:Math.max(.05,L[0]),h1:Math.max(.05,L[1])}:void 0;P.push({free:k.id,a:E,b:A,left:Q,right:Q,exterior:!1,roomLeft:j,roomRight:j,sources:[],...J?{height:Math.max(J.h0,J.h1),slope:J}:{height:O}})}),P=Uf(P,s,d);let R=Gf(P,s);return{walls:P.map((k,_)=>{let E=s[k.a],A=s[k.b],F=R.get(`${_}:a`),j=R.get(`${_}:b`),Q=Yf([F.right,j.left,A,j.right,F.left,E],1e-6);return{id:qf(E,A),a:[E[0],E[1]],b:[A[0],A[1]],left:k.left,right:k.right,exterior:k.exterior,roomLeft:k.roomLeft,roomRight:k.roomRight,sources:k.sources,footprint:Q,...k.free?{free:k.free}:{},...k.height!==void 0?{height:k.height}:{},...k.slope?{slope:k.slope}:{}}}),warnings:[...new Set(i)],open:S,noWalls:I}}function qf(o,e){let t=r=>Math.round(r*100),[n,i]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(i[0])}_${t(i[1])}`}function Yr(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Uf(o,e,t=new Set){let n=o.slice(),i=!0;for(;i;){i=!1;let r=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let u=r.get(l);u||r.set(l,u=[]),u.push(a)}});for(let[s,a]of r){if(a.length!==2||t.has(s))continue;let l=n[a[0]],u=n[a[1]],d=l.b!==s&&u.a!==s;if(l.b!==s&&(l=Yr(l)),u.a!==s&&(u=Yr(u)),l.a===u.b)continue;let c=wt(Oe(e[l.b],e[l.a])),p=wt(Oe(e[u.b],e[u.a]));if(Math.abs(Pn(c,p))>1e-6||Jr(c,p)<=0||l.free||u.free||l.height!==u.height||l.slope||u.slope||l.exterior!==u.exterior||l.roomLeft!==u.roomLeft||l.roomRight!==u.roomRight||Math.abs(l.left-u.left)>1e-9||Math.abs(l.right-u.right)>1e-9)continue;let h={...l,b:u.b,sources:Kf(l.sources,u.sources)},f=d?Yr(h):h,m=n.filter((b,v)=>v!==a[0]&&v!==a[1]);m.push(f),n.length=0,n.push(...m),i=!0;break}}return n}function Kf(o,e){let t=o.map(n=>({...n}));for(let n of e){let i=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):t.push({...n})}return t}function Gf(o,e){let t=new Map;o.forEach((i,r)=>{let s=wt(Oe(e[i.b],e[i.a])),a=[[i.a,{key:`${r}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${r}:b`,d:Je(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,u]of a){let d=t.get(l);d||t.set(l,d=[]),d.push(u)}});let n=new Map;for(let[i,r]of t){let s=e[i];r.sort((u,d)=>u.angle-d.angle);let a=u=>({left:at(s,Je(Qr(u.d),u.left)),right:at(s,Je(qc(u.d),u.right))});for(let u of r)n.set(u.key,a(u));if(r.length<2)continue;let l=4*Math.max(...r.map(u=>Math.max(u.left,u.right)))+1e-9;for(let u=0;u<r.length;u++){let d=r[u],c=r[(u+1)%r.length],p=at(s,Je(Qr(d.d),d.left)),h=at(s,Je(qc(c.d),c.right)),f=Pn(d.d,c.d);if(Math.abs(f)<1e-4)continue;let m=Pn(Oe(h,p),c.d)/f,b=at(p,Je(d.d,m));go(Oe(b,s))>l||(n.get(d.key).left=b,n.get(c.key).right=b)}}return n}function Yf(o,e){let t=o.filter((i,r)=>go(Oe(i,o[(r+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let i=0;i<t.length;i++){let r=t[(i+t.length-1)%t.length],s=t[i],a=t[(i+1)%t.length],l=Oe(s,r),u=Oe(a,s);if(Math.abs(Pn(wt(l),wt(u)))<1e-7&&Jr(l,u)>0){t=t.filter((d,c)=>c!==i),n=!0;break}}}return t}function oi(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length],r=wt(Oe(i,n));return at(n,Je(r,t))}function Qf(o,e){let t=Oe(o.b,o.a),n=Qr(wt(t)),i=a=>e.some(l=>l.points.length>=3&&B(a,l.points)),r=0,s=0;for(let a of[.2,.5,.8]){let l=at(o.a,Je(t,a));i(at(l,Je(n,o.left+.2)))&&r++,i(Oe(l,Je(n,o.right+.2)))&&s++}return r>=2&&s===0?!0:s>=2&&r===0?!1:null}function Uc(o,e,t,n){let i=o.wall?t.find(s=>s.id===o.wall):void 0;if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return!1;let r=(i.thickness??n)/2;return Qf({a:i.a,b:i.b,left:r,right:r},e)===!1}function Kc(o,e,t){if(o.wall){let i=t.find(a=>a.id===o.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let r=wt(Oe(i.b,i.a));return{room:{id:o.room_id,name:"",area_id:null,points:[i.a,i.b,at(i.a,[-r[1],r[0]])]},edge:0}}let n=e.find(i=>i.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}var xt=Math.PI/180;function Tn(o){let e=o.rotation??0;if(!e||o.points&&o.points.length>=3)return null;let t=e*xt;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(t),s:Math.sin(t)}}function et(o,e,t=!1){if(!o)return e;let n=e[0]-o.p[0],i=e[1]-o.p[1],r=t?-o.s:o.s;return[o.p[0]+n*o.c-i*r,o.p[1]+n*r+i*o.c]}function kt(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1),r=Tn(o),s=o.axis==="x"?(l,u)=>[l,o.flip?i-u:n+u]:(l,u)=>[o.flip?t-u:e+u,l],a=r?(l,u)=>et(r,s(l,u)):s;return o.axis==="x"?{u0:e,u1:t,w:i-n,at:a}:{u0:n,u1:i,w:t-e,at:a}}function Jf(o,e,t,n=1e-6){let[i,r]=od(o,e,t),s=kt({...o,rotation:0});return i>=s.u0-n&&i<=s.u1+n&&r>=-n&&r<=s.w+n}function An(o){let e=kt(o).w,t=o.eave_a,n=o.eave_b,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xt),r=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xt);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*i,y:l=>t+l*i};if(o.shape==="mansard"){let l=td(e,t,n,i,r,ed(o));return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(i+r))):e/2,a=t+s*i;return{vr:s,rh:a,y:l=>l<=s?t+l*i:n+(e-l)*r}}function Xr(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var Yc=.14,Xf=.03;function Qc(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function Zr(o,e){return An(o).rh-Yc>e+.01}function Jc(o,e,t,n){let i=null,r=[],s=[],a=Math.max(0,o.settings.roof.overhang??0),l=Xr(o);for(let d of l){if(d.open||n!==void 0&&!Zr(d,n))continue;let c=d.points&&d.points.length>=3?null:d.overhang_sides??null,p=E=>typeof(c==null?void 0:c[E])=="number"?Math.max(0,c[E]):null,[h,f]=od(d,e,t),m=kt({...d,rotation:0}),b=1e-6,[v,$,y,w]=[m.u0-(p(2)??0),m.u1+(p(3)??0),-(p(0)??0),m.w+(p(1)??0)],S=Math.max(v-h,h-$,y-f,f-w),I=!!d.points&&d.points.length>=3;if(S>(I?b:Xf)||I&&!B([e,t],d.points))continue;let P=d.shape==="flat"||d.shape==="parapet",C=Math.max(0,d.overhang??a),[R,G]=[Math.min($,Math.max(v,h)),Math.min(w,Math.max(y,f))],_=((P?null:rm(im(d,{a:p(0)??C,b:p(1)??C,u0:p(2)??C,u1:p(3)??C}),R,G))??An(d).y(G))-Yc;S>b?r.push({s:d,y:_}):(i=i===null?_:Math.max(i,_),s.push(d))}let u=null;if(i!==null)for(let{s:d,y:c}of r){if(u!==null&&c<=u)continue;let p=ns(l,d);p&&s.includes(p)||(u=c)}return i!==null&&u!==null&&u>i?u:i}function Xc(o,e){let t=o.length;if(t<3||Math.abs(e)<1e-9)return o.map(r=>[r[0],r[1]]);let n=zr(o)>=0?1:-1,i=[];for(let r=0;r<t;r++){let s=o[(r+t-1)%t],a=o[r],l=o[(r+1)%t],u=Gc([a[0]-s[0],a[1]-s[1]]),d=Gc([l[0]-a[0],l[1]-a[1]]),c=[u[1]*n,-u[0]*n],p=[d[1]*n,-d[0]*n],h=c[0]+p[0],f=c[1]+p[1],m=Math.hypot(h,f);if(m<1e-6){i.push([a[0]+c[0]*e,a[1]+c[1]*e]);continue}let b=(h*c[0]+f*c[1])/m,v=Math.min(4,1/Math.max(.25,b));i.push([a[0]+h/m*e*v,a[1]+f/m*e*v])}return i}function Gc(o){let e=Math.hypot(o[0],o[1])||1;return[o[0]/e,o[1]/e]}function Zc(o,e){if(o.points&&o.points.length>=3)return Xc(o.points,e);let t=Math.min(o.x0,o.x1)-e,n=Math.max(o.x0,o.x1)+e,i=Math.min(o.z0,o.z1)-e,r=Math.max(o.z0,o.z1)+e,s=Tn(o);return[[t,i],[n,i],[n,r],[t,r]].map(a=>et(s,a))}function Zf(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}var em=30,tm=5,nm=60;function om(o){let e=o.pitch_upper;return typeof e=="number"&&Number.isFinite(e)?Math.min(nm,Math.max(tm,e)):em}function ed(o){return Math.tan(om(o)*xt)}function td(o,e,t,n,i,r){let s=Math.min(o*.3,n>1e-6?2.4/n:o*.3),a=Math.min(o*.3,i>1e-6?2.4/i:o*.3),l=e+s*n,u=t+a*i,d=Math.min(o-a,Math.max(s,(u-l+r*(o-a+s))/(2*r))),c=l+(d-s)*r;return{vla:s,vlb:a,yla:l,ylb:u,vr:d,rh:c,y:h=>h<=s?e+h*n:h<=d?l+(h-s)*r:h<=o-a?u+(o-a-h)*r:t+(o-h)*i}}function im(o,e){let t=kt(o),n=An(o),i=t.w,r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),u=(O,L)=>[O,L,n.y(L)],d=u(a,-r),c=u(l,-r),p=u(l,i+s),h=u(a,i+s),f=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xt),m=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xt);if(o.shape==="pent"){let O=[d,c,p,h],L=[[0,n.y(0)],[i,n.y(i)]];return{faces:[O],rim:O,ridges:[[p,h]],gable:L,gables:[L,L]}}if(o.shape==="pyramid"){let O=[(t.u0+t.u1)/2,n.vr,n.rh];return{faces:[[d,c,O],[c,p,O],[p,h,O],[h,d,O]],rim:[d,c,p,h],ridges:[[d,O],[h,O],[c,O],[p,O]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let O=td(i,o.eave_a,o.eave_b,f,m,ed(o)),L=[[0,n.y(0)],[O.vla,O.yla],[O.vr,O.rh],[i-O.vlb,O.ylb],[i,n.y(i)]],J=[a,O.vla,O.yla],Z=[l,O.vla,O.yla],te=[a,i-O.vlb,O.ylb],ae=[l,i-O.vlb,O.ylb],_e=[a,O.vr,O.rh],ve=[l,O.vr,O.rh];return{faces:[[d,c,Z,J],[J,Z,ve,_e],[_e,ve,ae,te],[te,ae,p,h]],rim:[d,c,Z,ve,ae,p,h,te,_e,J],ridges:[[_e,ve],[J,Z],[te,ae]],gable:L,gables:[L,L]}}let[b,v]=es(o)??["gable","gable"],$=ts(o,[b,v]),y=b==="gable"?[a,n.vr,n.rh]:[t.u0+$.d0,n.vr,n.rh],w=v==="gable"?[l,n.vr,n.rh]:[t.u1-$.d1,n.vr,n.rh],S=[a,$.vah,$.yh],I=[a,$.vbh,$.yh],P=[l,$.vah,$.yh],C=[l,$.vbh,$.yh],R=b==="halfhip",G=v==="halfhip",k=[[d,c,...G?[P]:[],w,y,...R?[S]:[]],[y,w,...G?[C]:[],p,h,...R?[I]:[]]];b==="hip"&&k.push([h,d,y]),R&&k.push([I,S,y]),v==="hip"&&k.push([c,p,w]),G&&k.push([P,C,w]);let _=[d,c,...v==="gable"?[w]:G?[P,C]:[],p,h,...b==="gable"?[y]:R?[I,S]:[]],E=[[y,w]];b==="hip"&&E.push([d,y],[h,y]),R&&E.push([S,y],[I,y]),v==="hip"&&E.push([c,w],[p,w]),G&&E.push([P,w],[C,w]);let A=[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]],F=[[0,n.y(0)],[$.vah,$.yh],[$.vbh,$.yh],[i,n.y(i)]],j=O=>O==="gable"?A:O==="halfhip"?F:null,Q=[j(b),j(v)];return{faces:k,rim:_,ridges:E,gable:Q[0]??Q[1],gables:Q}}function es(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,t=n=>n==="gable"||n==="hip"||n==="halfhip"?n:e;return[t(o.end_u0),t(o.end_u1)]}function ts(o,e){let t=kt(o),n=An(o),i=t.w,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xt),s=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xt),a=t.u1-t.u0,l=e[0]!=="gable"&&e[1]!=="gable"?a/2:a,u=Math.min(n.y(0),n.y(i)),d=u+(n.rh-u)*.55,c=r>1e-6?Math.min(n.vr,(d-o.eave_a)/r):n.vr,p=s>1e-6?Math.max(n.vr,i-(d-o.eave_b)/s):n.vr,h=Math.min(l,Math.min(n.vr,i-n.vr)||i/2),f=Math.min(l-.1,(n.rh-d)/Math.max(.2,r)),m=b=>b==="hip"?h:b==="halfhip"?f:0;return{d0:m(e[0]),d1:m(e[1]),yh:d,vah:c,vbh:p}}function rm(o,e,t){let n=null;for(let i of o.faces){if(!B([e,t],i.map($=>[$[0],$[1]])))continue;let[r,s]=i,a=i.slice(2).find($=>Math.abs((s[0]-r[0])*($[1]-r[1])-(s[1]-r[1])*($[0]-r[0]))>1e-9);if(!a)continue;let l=s[0]-r[0],u=s[2]-r[2],d=s[1]-r[1],c=a[0]-r[0],p=a[2]-r[2],h=a[1]-r[1],f=u*h-d*p,m=d*c-l*h,b=l*p-u*c;if(Math.abs(m)<1e-9)continue;let v=r[2]-(f*(e-r[0])+b*(t-r[1]))/m;n=n===null?v:Math.min(n,v)}return n}function nd(o,e,t){let n=e*xt,i={p:t,c:Math.cos(n),s:Math.sin(n)};if(o.points&&o.points.length>=3)return{...o,points:o.points.map(d=>et(i,d)),...Zf(o.points.map(d=>et(i,d)))};let r=o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],s=et(i,r),a=s[0]-r[0],l=s[1]-r[1],u=(((o.rotation??0)+e)%360+360)%360;return u>180&&(u-=360),{...o,x0:o.x0+a,x1:o.x1+a,z0:o.z0+l,z1:o.z1+l,pivot:s,rotation:Math.abs(u)<1e-9?0:u}}function od(o,e,t){let[n,i]=et(Tn(o),[e,t],!0),r=Math.min(o.x0,o.x1),s=Math.max(o.x0,o.x1),a=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[n,o.flip?l-i:i-a]:[i,o.flip?s-n:n-r]}function ns(o,e){let[t,n]=et(Tn(e),[(e.x0+e.x1)/2,(e.z0+e.z1)/2]),i=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),r=null;for(let s of o)s===e||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||i(s)<i(e)*1.5||Jf(s,t,n)&&(!r||i(s)<i(r))&&(r=s);return r}function id(o,e,t){let n=kt(e),i=o.floors.flatMap(m=>m.rooms.filter(b=>b.points.length>=3&&m.elevation+m.height>e.base+.05)),r=o.settings.wall_exterior,s=i.map(m=>Xc(m.points,Math.max(r,...(m.wall_thickness??[]).map(b=>b??0))+.01)),a=.35,l=(m,b)=>{if(i.some($=>B(m(a),$.points)))return!0;let v=m(-Math.min(.3,b/2));return s.some($=>!B(v,$)&&[.05,.2,a].some(y=>B(m(y),$)))},u=[.15,.5,.85],d=u.map(m=>n.u0+(n.u1-n.u0)*m),c=u.map(m=>n.w*m),p=m=>m==="a"?d.some(b=>l(v=>n.at(b,-v),n.w)):m==="b"?d.some(b=>l(v=>n.at(b,n.w+v),n.w)):m==="u0"?c.some(b=>l(v=>n.at(n.u0-v,b),n.u1-n.u0)):c.some(b=>l(v=>n.at(n.u1+v,b),n.u1-n.u0)),h=e.overhang_sides??null,f=(m,b)=>{let v=h==null?void 0:h[m];return typeof v=="number"?Math.max(0,v):p(b)?0:t};return{a:f(0,"a"),b:f(1,"b"),u0:f(2,"u0"),u1:f(3,"u1")}}function rd(o,e){let t=o.floors.filter(i=>i.rooms.length>0).sort((i,r)=>i.elevation-r.elevation),n=[...t].reverse().filter(i=>i.elevation<e.base-.05);if(e.x0!==void 0&&e.z0!==void 0&&e.x1!==void 0&&e.z1!==void 0){let i=Zc({x0:e.x0,z0:e.z0,x1:e.x1,z1:e.z1,points:e.points,rotation:e.rotation,pivot:e.pivot},0),r=i.reduce((c,p)=>c+p[0],0)/i.length,s=i.reduce((c,p)=>c+p[1],0)/i.length,a=[[r,s],...i.map(c=>[r+(c[0]-r)*.6,s+(c[1]-s)*.6])],l=c=>c.rooms.some(p=>p.points.length>=3&&a.some(h=>B(h,p.points))),u=t.find(c=>Math.abs(c.elevation-e.base)<=.05&&l(c));if(u)return u;let d=n.length>1?n.find(l):void 0;if(d)return d}return n[0]??t[0]}function sd(o,e=t=>`roof_${t+1}`){var l;let t=((l=o.settings.roof)==null?void 0:l.pitch)??35,n=o.settings.wall_exterior,i=o.floors.filter(u=>u.rooms.some(d=>d.points.length>=3)).sort((u,d)=>d.elevation-u.elevation),r=[],s=[],a=u=>Math.round(u*1e3)/1e3;for(let u of i){let d=u.rooms.filter(w=>w.points.length>=3),c=[...new Set(d.flatMap(w=>w.points.map(S=>a(S[0]))))].sort((w,S)=>w-S),p=[...new Set(d.flatMap(w=>w.points.map(S=>a(S[1]))))].sort((w,S)=>w-S),h=c.length-1,f=p.length-1,m=(w,S)=>w.some(I=>B(S,I.points)),b=[];for(let w=0;w<f;w++){b.push([]);for(let S=0;S<h;S++){let I=[(c[S]+c[S+1])/2,(p[w]+p[w+1])/2];b[w].push(m(d,I)&&!m(s,I))}}let v=b.map(w=>w.map(()=>!1)),$=(w,S)=>b[S][w]&&!v[S][w],y=u.elevation+u.height;for(let w=0;w<f;w++)for(let S=0;S<h;S++){if(!$(S,w))continue;let I=S;for(;I+1<h&&$(I+1,w);)I++;let P=w;for(;P+1<f&&Array.from({length:I-S+1},(_,E)=>$(S+E,P+1)).every(Boolean);)P++;for(let _=w;_<=P;_++)for(let E=S;E<=I;E++)v[_][E]=!0;let C=c[S]-n,R=c[I+1]+n,G=p[w]-n,k=p[P+1]+n;Math.min(R-C,k-G)<.8||r.push({id:e(r.length),x0:a(C),z0:a(G),x1:a(R),z1:a(k),shape:"gable",axis:R-C>=k-G?"x":"z",eave_a:a(y),eave_b:a(y),pitch_a:t,pitch_b:t,base:a(y),overhang:null})}s.push(...d)}return r}var ri=Math.PI/180,sm=1.13,am=1.72,si=.025,Xt=.07,ad=.25;function _o(o,e){var n;let t=[];for(let i of o.floors){if(e&&i.id!==e)continue;let{walls:r}=En(i.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},i.walls??[]);for(let s of r){if(!s.exterior&&!s.free)continue;let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],u=Math.hypot(a,l);if(u<.5)continue;let d=l/u,c=-a/u,p=Math.min(i.height,s.height??i.height),h=((n=s.sources.find(b=>b.room_id===s.roomLeft))==null?void 0:n.edge)??null,f={floorId:i.id,room:s.roomLeft,edge:h,free:!!s.free},m=(b,v,$,y)=>t.push({key:b,section:null,side:"top",flat:!1,o:v,eu:$,es:[0,1,0],n:y,lu:u,ls:p,pitch:90,span:()=>[0,u],facing:[y[0],y[2]],wall:f});m(`wall:${i.id}:${s.id}`,[s.a[0]+d*s.right,i.elevation,s.a[1]+c*s.right],[a/u,0,l/u],[d,0,c]),s.free&&m(`wall:${i.id}:${s.id}:back`,[s.b[0]-d*s.left,i.elevation,s.b[1]-c*s.left],[-a/u,0,-l/u],[-d,0,-c])}}return t}var ld="ground";function lm(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function cm(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],i=[-Math.sin(t),0,Math.cos(t)],r=lm(o),s=n[0]*e.u+i[0]*e.v,a=n[2]*e.u+i[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:bt(r,s,a)):e.base??0;return{key:ld,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function en(o,e,t=zt(o)){return e.face===ld?cm(o,e):e.face.startsWith("wall:")?_o(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function os(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function dm(o,e){var r;let t=(r=o.settings.roof)==null?void 0:r.frame;if(t&&t.length===4&&t.every(s=>Number.isFinite(s)))return t;let n=e.rooms.flatMap(s=>s.points.map(a=>a[0])),i=e.rooms.flatMap(s=>s.points.map(a=>a[1]));return[Math.min(...n),Math.min(...i),Math.max(...n),Math.max(...i)]}function zt(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>um(w,id(o,w,w.overhang??e.overhang)));let t=os(o);if(!t)return[];let[n,i,r,s]=dm(o,t),a=o.settings.wall_exterior+e.overhang,l=n-a,u=r+a,d=i-a,c=s+a,p=t.elevation+t.height;if(e.type==="flat")return[cd("main",null,l,d,u,c,p+ad)];let h=u-l>=c-d,f=e.ridge==="short"?!h:h,m=(f?c-d:u-l)/2,b=m*Math.tan(e.pitch*ri),v=(w,S,I)=>f?[w,p+I,(d+c)/2+S]:[(l+u)/2+S,p+I,w],[$,y]=f?[l,u]:[d,c];return[-1,1].map(w=>ii(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",v($,w*m,0),v(y,w*m,0),v($,0,b),e.pitch,()=>[0,y-$]))}function um(o,e){let t=kt(o),n=An(o),i=(y,w,S)=>{let[I,P]=t.at(y,w);return[I,S,P]},r=Math.max(0,e.a),s=Math.max(0,e.b),a=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),u=l-a;if(o.shape==="flat"||o.shape==="parapet"){let y=kt({...o,rotation:0}),w=y.at(a,-r),S=y.at(l,t.w+s),I=cd(o.id,o.id,Math.min(w[0],S[0]),Math.min(w[1],S[1]),Math.max(w[0],S[0]),Math.max(w[1],S[1]),o.eave_a+ad);return[hm(I,Tn(o))]}if(o.shape==="pent")return[ii(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,t.w+s,n.y(t.w+s)),o.pitch_a,()=>[0,u])];let d=es(o),c=d?ts(o,d):null,p=o.shape==="pyramid"||(d==null?void 0:d[0])==="hip",h=o.shape==="pyramid"||(d==null?void 0:d[1])==="hip",f=o.shape==="pyramid"?(t.u1-t.u0)/2:p?c.d0:0,m=o.shape==="pyramid"?(t.u1-t.u0)/2:h?c.d1:0,b=p?t.u0+f-a:0,v=h?l-(t.u1-m):0,$=[];if(n.vr>.3){let y=Math.hypot(n.vr+r,n.rh-n.y(-r));$.push(ii(`${o.id}:a`,o.id,"a",i(a,-r,n.y(-r)),i(l,-r,n.y(-r)),i(a,n.vr,n.rh),o.pitch_a,w=>[b*(w/y),u-v*(w/y)]))}if(t.w-n.vr>.3){let y=Math.hypot(t.w+s-n.vr,n.rh-n.y(t.w+s));$.push(ii(`${o.id}:b`,o.id,"b",i(l,t.w+s,n.y(t.w+s)),i(a,t.w+s,n.y(t.w+s)),i(l,n.vr,n.rh),o.pitch_b,w=>[v*(w/y),u-b*(w/y)]))}if(p||h){let y=n.y(-r),w=n.y(t.w+s),S=[];p&&S.push([`${o.id}:c`,"c",i(a,t.w+s,w),i(a,-r,y),i(t.u0+f,n.vr,n.rh)]),h&&S.push([`${o.id}:d`,"d",i(l,-r,y),i(l,t.w+s,w),i(t.u1-m,n.vr,n.rh)]);for(let[I,P,C,R,G]of S){let k=pm(I,o.id,P,C,R,G);k&&$.push(k)}}return $}function pm(o,e,t,n,i,r){let s=bo(Zt(i,n));if(s<.3)return null;let a=At(Zt(i,n)),l=Zt(r,n),u=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*u,l[1]-a[1]*u,l[2]-a[2]*u],c=bo(d);if(c<.3)return null;let p=At(d),h=At(pd(a,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=At([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/ri;return{key:o,section:e,side:t,flat:!1,o:n,eu:a,es:p,n:h,lu:s,ls:c,pitch:m,span:v=>{let $=Math.min(1,Math.max(0,v/c));return[u*$,s-(s-u)*$]},facing:[f[0],f[2]]}}function ii(o,e,t,n,i,r,s,a){let l=At(Zt(i,n)),u=At(Zt(r,n)),d=At(pd(l,u));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let c=At([-u[0],0,-u[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:u,n:d,lu:bo(Zt(i,n)),ls:bo(Zt(r,n)),pitch:s,span:a,facing:[c[0],c[2]]}}function hm(o,e){if(!e)return o;let t=a=>{let[l,u]=et({p:[0,0],c:e.c,s:e.s},[a[0],a[2]]);return[l,a[1],u]},[n,i]=et(e,[o.o[0],o.o[2]]),[r,s]=et({p:[0,0],c:e.c,s:e.s},o.facing);return{...o,o:[n,o.o[1],i],eu:t(o.eu),es:t(o.es),n:t(o.n),facing:[r,s]}}function cd(o,e,t,n,i,r,s){let a=i-t>=r-n,l=a?i-t:r-n,u=a?r-n:i-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:u,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function is(o){let e=o.module_w||sm,t=o.module_h||am;return o.portrait===!1?[t,e]:[e,t]}function dd(o){var e;return(e=o.layout)!=null&&e.length?o.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function rs(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*ri:o.wall?Math.min(90,Math.max(0,e.tilt??0))*ri:0}function tn(o,e){let[t,n]=is(e),i=dd(e),r=Math.max(1,...i),a=(i.length-1)*ud(o,e)+n*Math.cos(rs(o,e));return[r*t+(r-1)*si,a]}function ud(o,e){let[,t]=is(e),n=rs(o,e);return o.wall?t*Math.cos(n)+si:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+si}function fm(o,e,t=!1){let[n,i]=is(e),r=[],s=rs(o,e),a=i*Math.cos(s),l=ud(o,e),u=dd(e),d=Math.max(1,...u),c=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(m,b,v)=>[o.o[0]+o.eu[0]*m+o.es[0]*b+o.n[0]*v,o.o[1]+o.eu[1]*m+o.es[1]*b+o.n[1]*v,o.o[2]+o.eu[2]*m+o.es[2]*b+o.n[2]*v],f=(m,b)=>{if(o.unbounded)return!0;if(b<-1e-6||b>o.ls+1e-6)return!1;let[v,$]=o.span(b);return m>=v-1e-6&&m<=$+1e-6};return u.forEach((m,b)=>{let v=e.align==="right"?d-m:e.align==="center"?(d-m)/2:0;for(let $=0;$<m;$++){let y=`${b}:${$}`,w=c.has(y);if(w&&!t)continue;let S=e.u+($+v)*(n+si),I=e.v+b*l,P=S+n,C=I+(o.flat||o.wall?a:i);if(p){if(!(f((S+P)/2,I)&&f((S+P)/2,C)))continue}else if(![[S,I],[P,I],[P,C],[S,C]].every(([A,F])=>f(A,F)))continue;if(o.wall&&s>.001){let A=Xt+i*Math.sin(s),[F,j]=e.flip?[A,Xt]:[Xt,A],Q=[h(S,I,F),h(P,I,F),h(P,C,j),h(S,C,j)],O=e.flip?I:C,L=[S+.05,P-.05].map(J=>[h(J,O,0),h(J,O,A)]);r.push({corners:Q,posts:L,cell:y,skipped:w});continue}if(!o.flat){r.push({corners:[h(S,I,Xt),h(P,I,Xt),h(P,C,Xt),h(S,C,Xt)],posts:[],cell:y,skipped:w});continue}let R=.15,G=R+i*Math.sin(s),[k,_]=e.flip?[C,I]:[I,C],E=[h(S,k,R),h(P,k,R),h(P,_,G),h(S,_,G)];r.push({corners:E,posts:[S+.05,P-.05].flatMap(A=>[[h(A,k,0),h(A,k,R)],[h(A,_,0),h(A,_,G)]]),cell:y,skipped:w})}}),r}function Zt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function bo(o){return Math.hypot(o[0],o[1],o[2])}function At(o){let e=bo(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function pd(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var mm=.78,gm=1.18;function bm(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,tilt:0,module_w:o.w||mm,module_h:o.h||gm}}function _m(o,e){let t=fm(o,bm(e))[0];if(!t)return null;let n=i=>[i[0]-o.n[0]*.05,i[1]-o.n[1]*.05,i[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function ss(o,e,t){let n=e?_m(e,t):null;if(!n)return null;let i=(n[0][0]+n[2][0])/2,r=(n[0][1]+n[2][1])/2,s=(n[0][2]+n[2][2])/2;for(let a of[...o.floors].sort((l,u)=>u.elevation-l.elevation)){if(a.elevation>r)continue;let l=a.rooms.find(u=>B([i,s],u.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}function ai(o,e){var i;let t=((i=o.settings.roof)==null?void 0:i.windows)??[];if(!t.length)return[];let n=new Map(zt(o).map(r=>[r.key,r]));return t.filter(r=>{var s;return((s=ss(o,n.get(r.face),r))==null?void 0:s.roomId)===e})}function hd(o,e){let[t,n]=tn(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var vm=new Set(["window","door","opening","garage_door"]),zn=null;function ym(o,e,t,n){(!zn||zn.entities!==o.entities||zn.building!==e)&&(zn={entities:o.entities,building:e,rooms:new Map});let i=zn.rooms.get(n.id);return i||(i=Mn(o,t,n,ai(e,n.id)).shown,zn.rooms.set(n.id,i)),i}function Rt(o,e,t){var r,s;let n=t?e.floors.filter(a=>a.id===t):[...e.floors].sort((a,l)=>a.elevation-l.elevation),i=[];for(let a of n)for(let[l,u]of le(a).entries()){if(!((r=u.name)!=null&&r.trim())||u.outdoor&&le(a).findIndex($=>$.outdoor&&$.area_id===u.area_id&&$.name===u.name)<l)continue;let d=ym(o,e,a,u),c=d.filter($=>V($)==="light"&&o.states[$]),p=c.filter($=>o.states[$].state==="on"),h=d.filter($=>{let y=o.states[$];return V($)==="binary"&&(y==null?void 0:y.state)==="on"&&vm.has(String(y.attributes.device_class??""))}).length,f=d.some($=>{var y;return V($)==="media"&&((y=o.states[$])==null?void 0:y.state)==="playing"}),m=Ze(o,a,u,"temperature"),b=m===null?null:Tt(o,m);if(b===null&&((s=u.climate)==null?void 0:s.temperature)!=="none"){let $=d.filter(y=>V(y)==="climate").map(y=>{var w;return(w=o.states[y])==null?void 0:w.attributes.current_temperature}).find(y=>typeof y=="number");typeof $=="number"&&(b=$)}let v=Ze(o,a,u,"humidity");i.push({floorId:a.id,roomId:u.id,name:u.name,temp:b,humidity:v,lights:c,lightsOn:p,open:h,playing:f,active:p.length>0||h>0||f})}return i}function fd(o){return o.lightsOn.length?["turn_off",o.lightsOn]:["turn_on",o.lights]}function md(o,e){return(e.settings.favorites??[]).filter(t=>o.states[t]).map(t=>{let[n,i]=yt(t);return{id:t,domain:n,service:i,on:n==="homeassistant"&&o.states[t].state==="on"}})}var Rn=(o,e=4)=>(o.length>e?[...o.slice(0,e),"\u2026"]:o).join(", ");function gd(o){let e=new Set;return o.openings.filter(t=>(t.open||t.tilted)&&!e.has(t.id)&&!!e.add(t.id))}function bd(o,e){let t=[];for(let c of o.alerts)t.push({kind:"alert",level:2,title:c.text,detail:"",targets:[c]});let n=gd(o);if(n.length){let c=n.map(h=>h.tilted?`${h.room} (${e.tilted})`:h.room).filter(Boolean),p=n.map(h=>({entity:h.entity,opening:h.id,floorId:h.floorId,roomId:h.roomId,label:[h.room,h.name,h.tilted?`(${e.tilted})`:""].filter(Boolean).join(" ")}));t.push({kind:"open",level:1,title:e.open(n.length),detail:Rn([...new Set(c)]),targets:p})}if(o.unlocked.length&&t.push({kind:"unlocked",level:1,title:e.unlocked(o.unlocked.length),detail:Rn(o.unlocked.map(c=>c.name)),targets:o.unlocked.map(c=>({entity:c.entity,floorId:c.floorId,roomId:c.roomId,label:c.name})),action:{kind:"lock",entities:o.unlocked.flatMap(c=>c.entity?[c.entity]:[])}}),o.people.length){let c=o.people.filter(m=>m.home),p=o.people.filter(m=>!m.home),h=c.length?`${e.home}: ${Rn(c.map(m=>m.room?`${m.name} (${m.room})`:m.name))}`:e.nobodyHome,f=c.filter(m=>m.roomId).map(m=>({floorId:m.floorId,roomId:m.roomId,label:`${m.name} \xB7 ${m.room}`}));t.push({kind:"people",level:0,title:h,detail:p.length?`${e.away}: ${Rn(p.map(m=>m.name))}`:"",targets:f})}let i=o.household.filter(c=>c.hot),r=o.household.filter(c=>!c.hot);for(let c of i)t.push({kind:"household",level:1,title:c.text,detail:"",targets:c.entity?[{entity:c.entity}]:[]});r.length&&t.push({kind:"household",level:0,title:r[0].text,detail:Rn(r.slice(1).map(c=>c.text),3),targets:[]});let s=o.lights.filter(c=>c.count>0),a=s.reduce((c,p)=>c+p.count,0);if(a){let c=s.flatMap(p=>p.on??[]);t.push({kind:"lights",level:0,title:e.lights(a),detail:Rn(s.map(p=>p.room)),targets:s.map(p=>({floorId:p.floorId,roomId:p.roomId,label:p.count>1?`${p.room} (${p.count})`:p.room})),...c.length?{action:{kind:"lights_off",entities:c}}:{}})}for(let c of o.cars){let p=c.soc!==null?`${Math.round(c.soc)} %`:"",h=c.present?c.charging?e.charging:"":e.carAway;(h||p)&&t.push({kind:"car",level:0,title:c.name,detail:[h,p].filter(Boolean).join(" \xB7 "),targets:[]})}let l=o.energy;if(l&&(l.consumption!==null||l.solar!==null)){let c=[];l.solar!==null&&l.solar>5&&c.push(`${e.energySolar} ${e.watts(l.solar)}`),l.grid!==null&&Math.abs(l.grid)>5&&c.push(`${l.grid<0?e.energyFeed:e.energyGrid} ${e.watts(Math.abs(l.grid))}`),l.soc!==null&&c.push(`${e.battery} ${Math.round(l.soc)} %`),t.push({kind:"energy",level:0,title:l.consumption!==null?`${e.energyUse} ${e.watts(l.consumption)}`:c.shift(),detail:c.join(" \xB7 "),targets:[]})}let u=c=>c.level===2?0:o.away&&c.kind==="people"?1:c.level===1?2:3,d=t.map((c,p)=>({it:c,n:p})).sort((c,p)=>u(c.it)-u(p.it)||c.n-p.n).map(c=>c.it);return d.some(c=>c.level>0)||d.unshift({kind:"calm",level:0,title:e.calm,detail:e.calmDetail,targets:[]}),d}function _d(o){let e=o.filter(r=>r.level===2);if(e.length)return{text:e.length>1?`${e[0].title} (+${e.length-1})`:e[0].title,level:2};let t=o.filter(r=>r.level===1),n=o.find(r=>r.kind==="lights");if(t.length)return{text:[...t.slice(0,2).map(r=>r.title),...n&&t.length<2?[n.title]:[]].join(" \xB7 "),level:1};let i=o.find(r=>r.kind==="calm");return{text:[(i==null?void 0:i.title)??"",(n==null?void 0:n.title)??""].filter(Boolean).join(" \xB7 "),level:0}}function vd(o,e){var n;let t=[];for(let i of gd(o))t.push({kind:"open",title:[i.room,i.name,i.tilted?`(${e.tilted})`:""].filter(Boolean).join(" \xB7 "),target:{entity:i.entity,opening:i.id,floorId:i.floorId,roomId:i.roomId}});for(let i of o.unlocked)t.push({kind:"unlocked",title:i.name,target:{entity:i.entity,floorId:i.floorId,roomId:i.roomId},...i.entity?{action:{kind:"lock",entities:[i.entity]}}:{}});for(let i of o.lights)i.count<=0||t.push({kind:"lights",title:`${i.room} \xB7 ${e.lights(i.count)}`,target:{floorId:i.floorId,roomId:i.roomId},...(n=i.on)!=null&&n.length?{action:{kind:"lights_off",entities:i.on}}:{}});return t}var wm={alert:"\u26A0\uFE0F",open:"\u{1FA9F}",unlocked:"\u{1F513}",people:"\u{1F464}",household:"\u{1F9FA}",lights:"\u{1F4A1}",energy:"\u26A1",car:"\u{1F697}",calm:"\u2705"},xm={open:"\u{1FA9F}",unlocked:"\u{1F513}",lights:"\u{1F4A1}"},as=class extends ue{static properties={items:{attribute:!1},stops:{attribute:!1},labels:{attribute:!1},favorites:{attribute:!1},summary:{attribute:!1},mode:{reflect:!0},_open:{state:!0},_step:{state:!0},_did:{state:!0}};constructor(){super(),this.items=[],this.stops=[],this.favorites=[],this.summary={text:"",level:0},this.mode="bar",this._open=null,this._step=0,this._did=0}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}willUpdate(e){e.has("mode")&&(this._open=null,this.mode==="check"&&(this._step=0,this._did=0))}updated(e){if(this.mode==="check"&&(e.has("mode")||e.has("_step"))){let t=this.stops[this._step];t&&this.fire("now-go",t.target)}}tapRow(e,t){if(e.targets.length){if(e.targets.length===1)return this.fire("now-go",e.targets[0]);this._open=this._open===t?null:t}}actLabel(e){return e.kind==="lock"?this.labels.lock:this.labels.lightsOff}renderBar(){return g`<button class="bar level${this.summary.level}" @click=${()=>this.fire("now-mode","page")}>
      <span class="dot" aria-hidden="true"></span>
      <span class="sum">${this.summary.text}</span>
      <span class="go" aria-hidden="true">›</span>
    </button>`}renderPage(){return g`<header>
        <b>${this.labels.title}</b>
        <button class="x" aria-label=${this.labels.close} @click=${()=>this.fire("now-mode","bar")}>✕</button>
      </header>
      ${this.favorites.length?g`<div class="favs">${this.favorites.map(e=>g`<button @click=${()=>this.fire("now-fav",e.entity)}>★ ${e.name}</button>`)}</div>`:x}
      <ul>
        ${this.items.map((e,t)=>{let n=e.targets.length>1,i=this._open===t;return g`<li class="level${e.level}">
            <div class="line">
              <button class="row" ?disabled=${!e.targets.length} aria-expanded=${n?i:x} @click=${()=>this.tapRow(e,t)}>
                <span class="icon" aria-hidden="true">${wm[e.kind]}</span>
                <span class="text"><b>${e.title}</b>${e.detail?g`<small>${e.detail}</small>`:x}</span>
                ${e.targets.length?g`<span class="go" aria-hidden="true">${n?i?"\u25BE":"\u25B8":"\u203A"}</span>`:x}
              </button>
              ${e.action?g`<button class="act" @click=${()=>this.fire("now-act",e.action)}>${this.actLabel(e.action)}</button>`:x}
            </div>
            ${n&&i?g`<div class="places">
                  ${e.targets.map(r=>g`<button class="place" @click=${()=>this.fire("now-go",r)}>${r.label??""}<span aria-hidden="true">›</span></button>`)}
                </div>`:x}
          </li>`})}
      </ul>
      <footer>
        <button class="check" @click=${()=>this.fire("now-mode","check")}>
          <b>🚪 ${this.labels.check}</b>
          <small>${this.labels.checkHint}</small>
        </button>
      </footer>`}renderCheck(){let e=this.stops[this._step],t=g`<button class="x" aria-label=${this.labels.close} @click=${()=>this.fire("now-mode","bar")}>✕</button>`;if(!e)return g`<div class="card">
        <div class="card-top"><b>✅ ${this.stops.length?this.labels.checkDone:this.labels.checkNothing}</b>${t}</div>
        <div class="card-btns"><button class="primary" @click=${()=>this.fire("now-mode","bar")}>${this.labels.done}</button></div>
      </div>`;let n=()=>this._step+=1,i=this.stops.slice(this._step).filter(s=>s.kind==="lights"&&s.action),r=e.kind==="lights"&&i.length>1?[...new Set(i.flatMap(s=>s.action.entities))]:null;return g`<div class="card">
      <div class="card-top">
        <span class="icon" aria-hidden="true">${xm[e.kind]}</span>
        <span class="text"><b>${e.title}</b><small>${this._step+1} / ${this.stops.length}${e.kind==="open"?g` · ${this.labels.windowHint}`:x}</small></span>
        ${t}
      </div>
      <div class="card-btns">
        ${e.action?g`<button
              class="primary"
              @click=${()=>{this.fire("now-act",e.action),this._did+=1,n()}}
            >
              ${this.actLabel(e.action)}
            </button>`:x}
        <button @click=${n}>${this.labels.next}</button>
      </div>
      ${r?g`<div class="card-btns">
            <button
              @click=${()=>{this.fire("now-act",{kind:"lights_off",entities:r}),this._step=this.stops.length}}
            >
              ${this.labels.allLightsOff.replace("{n}",String(r.length))}
            </button>
          </div>`:x}
    </div>`}render(){return this.mode==="page"?this.renderPage():this.mode==="check"?this.renderCheck():this.renderBar()}static styles=fe`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 0;
      color: #e8f0ff;
      font: 14px/1.3 var(--fp3d-font, system-ui, sans-serif);
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    /* ---- the line under the house */
    .bar {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      min-height: 44px;
      padding: 8px 14px;
      background: #0e1626;
      border: 1px solid rgba(120, 160, 255, 0.25);
      border-radius: 999px;
      text-align: left;
    }
    .dot {
      flex: none;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #3ddc84;
    }
    .level1 .dot {
      background: #ffb547;
    }
    .level2 .dot {
      background: #ff5a5a;
    }
    .bar.level2 {
      border-color: #ff5a5a;
    }
    .sum {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }
    .go {
      flex: none;
      opacity: 0.6;
    }
    /* ---- the page */
    :host([mode="page"]) {
      background: #0b1220;
    }
    header {
      display: flex;
      align-items: center;
      padding: 14px 10px 8px 18px;
    }
    header b {
      flex: 1;
      font-size: 19px;
    }
    .x {
      flex: none;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: none;
      border: 0;
      font-size: 18px;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0 10px;
      overflow-y: auto;
      overscroll-behavior: contain;
      flex: 1;
      min-height: 0;
    }
    li {
      border-radius: 14px;
      margin-bottom: 6px;
      background: #121c30;
    }
    li.level2 {
      background: rgba(255, 70, 70, 0.18);
    }
    .line {
      display: flex;
      align-items: center;
      gap: 6px;
      padding-right: 8px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 1;
      min-width: 0;
      min-height: 56px;
      padding: 10px 6px 10px 12px;
      background: none;
      border: 0;
      text-align: left;
    }
    .row:disabled {
      cursor: default;
    }
    .icon {
      flex: none;
      width: 28px;
      text-align: center;
      font-size: 19px;
    }
    .text {
      flex: 1;
      min-width: 0;
      display: grid;
      gap: 2px;
    }
    .text b {
      font-weight: 600;
      font-size: 15px;
    }
    .text small {
      opacity: 0.75;
      font-size: 13px;
    }
    .level2 .text b {
      color: #ff9a9a;
    }
    .level1 .text b {
      color: #ffc46b;
    }
    .act {
      flex: none;
      min-height: 40px;
      padding: 8px 14px;
      border-radius: 999px;
      border: 1px solid #00e5ff;
      background: rgba(0, 229, 255, 0.12);
      color: #7df3ff;
      font-weight: 600;
    }
    .places {
      display: grid;
      gap: 2px;
      padding: 0 8px 8px 50px;
    }
    .place {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      min-height: 40px;
      align-items: center;
      padding: 6px 10px;
      border-radius: 10px;
      background: rgba(120, 160, 255, 0.1);
      border: 0;
      text-align: left;
    }
    footer {
      padding: 8px 10px calc(10px + env(safe-area-inset-bottom, 0px));
    }
    .check {
      display: grid;
      gap: 2px;
      width: 100%;
      padding: 12px 16px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: #16233c;
      text-align: left;
    }
    .check b {
      font-size: 15px;
    }
    .check small {
      opacity: 0.75;
    }
    .favs {
      display: flex;
      gap: 8px;
      padding: 0 10px 10px;
      overflow-x: auto;
    }
    .favs button {
      flex: none;
      min-height: 46px;
      padding: 8px 16px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: #16233c;
      font-weight: 600;
    }
    /* ---- the house check */
    .card {
      background: #0e1626;
      border: 1px solid rgba(120, 160, 255, 0.3);
      border-radius: 16px;
      padding: 8px 8px 10px 12px;
    }
    .card-top {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .card-top > b {
      flex: 1;
      font-size: 15px;
      padding: 6px 0;
    }
    .card-btns {
      display: flex;
      gap: 8px;
      padding: 6px 4px 0 0;
    }
    .card-btns button {
      flex: 1;
      min-height: 44px;
      border-radius: 999px;
      border: 1px solid rgba(120, 160, 255, 0.35);
      background: #16233c;
      font-weight: 600;
    }
    .card-btns .primary {
      border-color: #00e5ff;
      background: #00e5ff;
      color: #06101c;
    }
  `};customElements.get("fp3d-now-list")||customElements.define("fp3d-now-list",as);var km={now:"\u25CF",rooms:"\u25A6",covers:"\u25A4",more:"\u22EF"},ls=class extends ue{static properties={slots:{attribute:!1},floors:{attribute:!1},covers:{attribute:!1},more:{attribute:!1},group:{attribute:!1},labels:{attribute:!1},sheet:{},floorId:{},active:{},level:{type:Number},attention:{},roomId:{}};constructor(){super(),this.slots=[],this.floors=[],this.covers=[],this.more=[],this.group=null,this.sheet=null,this.floorId=null,this.active=null,this.level=0,this.attention="",this.roomId=null}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}slotLabel(e){return e.label||(e.id==="now"?this.labels.now:e.id==="rooms"?this.labels.rooms:e.id==="covers"?this.labels.covers:this.labels.more)}renderRooms(){let e=this.floors.find(t=>t.id===this.floorId)??this.floors[0];return e?g`${this.floors.length>1&&this.slots.some(t=>t.id==="rooms")?g`<div class="tabs">${this.floors.map(t=>g`<button aria-pressed=${t.id===e.id} @click=${()=>this.fire("nav-floor",t.id)}>${t.name}</button>`)}</div>`:x}
      <div class="tiles">
        <button class="tile whole" @click=${()=>this.fire("nav-room",{floorId:e.id,roomId:null})}><b>${this.labels.wholeFloor}</b><small>${e.name}</small></button>
        ${e.rooms.map(t=>g`<button class="tile ${t.active?"on":""}" aria-pressed=${t.roomId===this.roomId} @click=${()=>this.fire("nav-room",{floorId:t.floorId,roomId:t.roomId})}>
            <b>${t.name}</b>
            <small>${t.temp!==null?`${t.temp.toLocaleString(void 0,{maximumFractionDigits:1})}\xB0`:""}</small>
            <span class="marks">
              ${t.lightsOn.length?g`<span class="mark light">💡 ${t.lightsOn.length}</span>`:x} ${t.open?g`<span class="mark open">🪟 ${t.open}</span>`:x}
              ${t.playing?g`<span class="mark">♪</span>`:x}
            </span>
          </button>`)}
      </div>`:x}renderCovers(){let e=(t,n)=>this.fire("nav-cover",{entities:t,service:n});return g`${this.covers.map(t=>g`<section>
        <header>
          <b>${t.name}</b>
          <button @click=${()=>e(t.items.map(n=>n.entity),"open_cover")}>▲ ${this.labels.allUp}</button>
          <button @click=${()=>e(t.items.map(n=>n.entity),"close_cover")}>▼ ${this.labels.allDown}</button>
        </header>
        ${t.items.map(n=>g`<div class="cover">
            <span class="name">${n.name}</span>
            <span class="pos">${n.position!==null?`${n.position} %`:""}</span>
            <button aria-label="▲" @click=${()=>e([n.entity],"open_cover")}>▲</button>
            <button aria-label="■" @click=${()=>e([n.entity],"stop_cover")}>■</button>
            <button aria-label="▼" @click=${()=>e([n.entity],"close_cover")}>▼</button>
          </div>`)}
      </section>`)}`}renderGroup(){let e=this.group;if(!e)return x;let t=(n,i)=>this.fire("nav-group",{entities:n,on:i});return g`${e.floors.map(n=>g`<section>
        <header>
          <b>${n.name}</b>
          ${e.allOn?g`<button @click=${()=>t(n.items.map(i=>i.entity),!0)}>${this.labels.allOn}</button>`:x}
          <button @click=${()=>t(n.items.filter(i=>i.on).map(i=>i.entity),!1)}>${this.labels.allOff}</button>
        </header>
        ${n.items.map(i=>g`<div class="cover">
            <span class="name">${i.name}</span>
            <span class="pos">${i.detail}</span>
            <button class="power" aria-pressed=${i.on} @click=${()=>t([i.entity],!i.on)}>${i.on?this.labels.on:this.labels.off}</button>
          </div>`)}
      </section>`)}`}renderMore(){return g`<div class="more">
      ${this.more.map(e=>g`<button aria-pressed=${e.pressed===void 0?x:e.pressed} @click=${()=>this.fire("nav-more",e.id)}>
          <span class="icon" aria-hidden="true">${e.icon}</span>
          <span class="text"><b>${e.label}</b>${e.hint?g`<small>${e.hint}</small>`:x}</span>
          ${e.pressed===void 0?x:g`<span class="switch" aria-hidden="true"></span>`}
        </button>`)}
    </div>`}render(){var t;let e=this.sheet==="rooms"?"":this.sheet==="covers"?this.labels.covers:this.sheet==="more"?this.labels.more:this.sheet==="group"?((t=this.group)==null?void 0:t.title)??"":"";return g`${this.sheet?g`<div class="veil" @click=${()=>this.fire("nav-close")}></div>
            <div class="sheet" role="dialog">
              ${e?g`<h3>${e}</h3>`:x} ${this.sheet==="rooms"?this.renderRooms():this.sheet==="covers"?this.renderCovers():this.sheet==="group"?this.renderGroup():this.renderMore()}
            </div>`:x}
      ${this.attention&&!this.sheet&&this.active!=="now"?g`<button class="attention level${this.level}" @click=${()=>this.fire("nav-slot","now")}><span class="dot"></span><span class="sum">${this.attention}</span><span aria-hidden="true">›</span></button>`:x}
      <nav>
        ${this.slots.map(n=>g`<button class="slot" aria-pressed=${this.active===n.id} @click=${()=>this.fire("nav-slot",n.id)}>
            <span class="glyph ${n.id==="now"?`dot level${this.level}`:""}" aria-hidden="true">${n.id==="now"?"":n.icon?n.icon:n.id.startsWith("floor:")?"\u25A6":km[n.id]}</span>
            <span class="label">${this.slotLabel(n)}</span>
            ${n.badge?g`<span class="badge">${n.badge}</span>`:x}
          </button>`)}
      </nav>`}static styles=fe`
    :host {
      display: block;
      color: #e8f0ff;
      font: 14px/1.3 var(--fp3d-font, system-ui, sans-serif);
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    nav {
      position: relative;
      z-index: 3;
      display: flex;
      gap: 2px;
      padding: 6px 6px calc(6px + env(safe-area-inset-bottom, 0px));
      background: #0b1220;
      border-top: 1px solid rgba(120, 160, 255, 0.22);
    }
    .slot {
      position: relative;
      flex: 1 1 0;
      min-width: 0;
      min-height: 52px;
      display: grid;
      justify-items: center;
      align-content: center;
      gap: 3px;
      background: none;
      border: 0;
      border-radius: 14px;
      padding: 4px 2px;
    }
    .slot[aria-pressed="true"] {
      background: rgba(0, 229, 255, 0.16);
      color: #7df3ff;
    }
    .glyph {
      font-size: 18px;
      line-height: 20px;
      height: 20px;
    }
    .dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #3ddc84;
      display: inline-block;
    }
    .glyph.dot {
      margin-top: 3px;
      height: 14px;
    }
    .level1.dot,
    .level1 .dot {
      background: #ffb547;
    }
    .level2.dot,
    .level2 .dot {
      background: #ff5a5a;
    }
    .label {
      font-size: 11.5px;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .badge {
      position: absolute;
      top: 2px;
      left: calc(50% + 8px);
      min-width: 18px;
      height: 18px;
      padding: 0 5px;
      box-sizing: border-box;
      border-radius: 9px;
      background: #ffb547;
      color: #1a1200;
      font-size: 11px;
      font-weight: 700;
      line-height: 18px;
      text-align: center;
    }
    .attention {
      position: relative;
      z-index: 3;
      display: flex;
      align-items: center;
      gap: 10px;
      width: calc(100% - 16px);
      margin: 0 8px 6px;
      min-height: 40px;
      padding: 6px 14px;
      border-radius: 999px;
      background: #0e1626;
      border: 1px solid rgba(255, 181, 71, 0.6);
      text-align: left;
    }
    .attention.level2 {
      border-color: #ff5a5a;
    }
    .sum {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
    }
    .veil {
      position: fixed;
      inset: 0;
      z-index: 1;
      background: rgba(0, 0, 0, 0.45);
    }
    .sheet {
      position: relative;
      z-index: 2;
      max-height: 62vh;
      overflow-y: auto;
      overscroll-behavior: contain;
      margin: 0 8px 6px;
      padding: 12px;
      border-radius: 18px;
      background: #0e1626;
      border: 1px solid rgba(120, 160, 255, 0.25);
    }
    h3 {
      margin: 0 0 10px 4px;
      font-size: 17px;
    }
    .tabs {
      display: flex;
      gap: 6px;
      margin-bottom: 10px;
      overflow-x: auto;
    }
    .tabs button {
      flex: none;
      min-height: 38px;
      padding: 6px 14px;
      border-radius: 999px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: none;
    }
    .tabs button[aria-pressed="true"] {
      background: #00e5ff;
      border-color: #00e5ff;
      color: #06101c;
      font-weight: 600;
    }
    .tiles {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(104px, 1fr));
      gap: 8px;
    }
    .tile {
      position: relative;
      min-height: 76px;
      display: grid;
      align-content: start;
      gap: 2px;
      padding: 10px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.2);
      background: #121c30;
      text-align: left;
    }
    .tile.on {
      border-color: rgba(255, 196, 107, 0.7);
      background: #1d2334;
    }
    .tile[aria-pressed="true"] {
      border-color: #00e5ff;
    }
    .tile.whole {
      background: #16233c;
    }
    .tile b {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .tile small {
      opacity: 0.75;
      min-height: 16px;
    }
    .marks {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
      font-size: 12px;
    }
    .mark.light {
      color: #ffc46b;
    }
    section + section {
      margin-top: 14px;
    }
    section header {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 6px;
    }
    section header b {
      flex: 1;
      font-size: 15px;
    }
    section header button,
    .cover button {
      min-height: 40px;
      min-width: 44px;
      padding: 6px 12px;
      border-radius: 999px;
      border: 1px solid rgba(120, 160, 255, 0.3);
      background: #16233c;
    }
    .cover .power {
      min-width: 60px;
    }
    .cover .power[aria-pressed="true"] {
      background: #ffb02e;
      border-color: #ffb02e;
      color: #1a1205;
      font-weight: 600;
    }
    .cover {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 0;
    }
    .cover .name {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .cover .pos {
      opacity: 0.7;
      font-size: 12.5px;
      min-width: 44px;
      text-align: right;
    }
    .more {
      display: grid;
      gap: 6px;
    }
    .more button {
      display: flex;
      align-items: center;
      gap: 12px;
      min-height: 54px;
      padding: 8px 12px;
      border-radius: 14px;
      border: 1px solid rgba(120, 160, 255, 0.2);
      background: #121c30;
      text-align: left;
    }
    .more .icon {
      flex: none;
      width: 28px;
      text-align: center;
      font-size: 19px;
    }
    .more .text {
      flex: 1;
      display: grid;
      gap: 2px;
    }
    .more small {
      opacity: 0.75;
      font-size: 12.5px;
    }
    .switch {
      flex: none;
      width: 38px;
      height: 22px;
      border-radius: 11px;
      background: #33425c;
      position: relative;
    }
    .switch::after {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #e8f0ff;
      transition: left 0.15s;
    }
    button[aria-pressed="true"] .switch {
      background: #00e5ff;
    }
    button[aria-pressed="true"] .switch::after {
      left: 19px;
    }
  `};customElements.get("fp3d-phone-nav")||customElements.define("fp3d-phone-nav",ls);var cs=class extends ue{static properties={hass:{attribute:!1},building:{attribute:!1},view:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},extras:{attribute:!1},solo:{type:Boolean},hide:{attribute:!1},places:{attribute:!1},_own:{state:!0},start:{attribute:!1},watts:{attribute:!1},mode:{reflect:!0},_sheet:{state:!0},_navFloor:{state:!0}};started=!1;stops=[];lastFloors=[];constructor(){super(),this.building=null,this.view=()=>null,this.floorId=null,this.roomId=null,this.extras=[],this.solo=!1,this.hide=[],this.start=void 0,this.places=void 0,this._own=0,this.watts=e=>`${Math.round(e)} W`,this.mode="bar",this._sheet=null,this._navFloor=null}t(e){return T(this.hass,e)}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}words(){let e=(t,n)=>i=>this.t(i===1?t:n).replace("{n}",String(i));return{open:e("now_open_one","now_open"),tilted:this.t("now_tilted"),unlocked:e("now_unlocked_one","now_unlocked"),home:this.t("now_home"),away:this.t("now_away"),nobodyHome:this.t("now_nobody"),lights:e("now_lights_one","now_lights"),energyUse:this.t("energy_consumption"),energySolar:this.t("energy_solar"),energyGrid:this.t("energy_grid_import"),energyFeed:this.t("energy_grid_export"),battery:this.t("now_battery"),charging:this.t("wallbox_charging"),carAway:this.t("now_car_away"),calm:this.t("now_calm"),calmDetail:this.t("now_calm_detail"),watts:this.watts}}setMode(e){var t,n,i;if(e==="check"){let r=(t=this.view())==null?void 0:t.nowInput();this.stops=r?vd(r,this.words()):[]}this.mode==="check"&&e!=="check"&&this.fire("phone-room",{floorId:this.floorId,roomId:null}),e==="check"!=(this.mode==="check")&&((i=(n=this.view())==null?void 0:n.quietCards)==null||i.call(n,e==="check")),this._sheet=null,this.mode=e,this.fire("phone-mode",e)}updated(){this.started||!this.hass||!this.building||(this.started=!0,this.start==="now"&&this.mode==="bar"&&this.setMode("page"))}openList(){this.setMode("page")}go(e){var t;this.mode==="page"&&this.setMode("bar"),(t=this.view())==null||t.showNow(e)}act(e){!this.hass||!e.entities.length||(e.kind==="lock"?this.hass.callService("lock","lock",{entity_id:e.entities}):this.hass.callService("homeassistant","turn_off",{entity_id:e.entities}))}fav(e){var i;let[t,n]=yt(e);(i=this.hass)==null||i.callService(t,n,{entity_id:e})}groupOf(e){let t=this.hass,n=this.building;if(!t||!n||e.kind!=="lights"&&e.kind!=="climate")return null;let i=e.kind==="lights",r=l=>typeof l=="number"?`${l.toLocaleString(t.language,{maximumFractionDigits:1})}\xB0`:"",s=l=>{let u=t.states[l],d=(u==null?void 0:u.attributes)??{},c=i?(u==null?void 0:u.state)==="on":!!u&&u.state!=="off"&&u.state!=="unavailable"&&u.state!=="unknown",p=i?c&&typeof d.brightness=="number"?`${Math.round(d.brightness/2.55)} %`:"":[r(d.current_temperature),c?r(d.temperature):""].filter(Boolean).join(" \u2192 ");return{entity:l,name:K(t,l),on:c,detail:p}},a=[...n.floors].sort((l,u)=>l.elevation-u.elevation).map(l=>({id:l.id,name:l.name,items:(i?In(t,l).lights:Wc(t,l)).map(s)})).filter(l=>l.items.length);return{title:e.name||this.t(i?"nav_lights":"nav_climate"),allOn:i,floors:a}}switchGroup(e,t){var s;let n=this.hass;if(!n||!e.length)return;let i=e.filter(a=>a.startsWith("climate.")),r=e.filter(a=>!a.startsWith("climate."));r.length&&n.callService("homeassistant",t?"turn_on":"turn_off",{entity_id:r});for(let a of i){let l=((s=n.states[a])==null?void 0:s.attributes.hvac_modes)??[],u=t?["heat","auto","heat_cool"].find(d=>l.includes(d))??l.find(d=>d!=="off"):"off";u&&(t||l.includes("off")||!l.length)&&n.callService("climate","set_hvac_mode",{entity_id:a,hvac_mode:u})}}tapSlot(e,t){var s,a;if(e==="now")return this.setMode(this.mode==="page"?"bar":"page");if(this.mode!=="bar"&&this.setMode("bar"),e.startsWith("own:")){let l=Number(e.slice(4)),u=Fr(this.places)[l];if(!u)return;if(u.kind==="action"&&u.entity){this._sheet=null;let[d,c]=yt(u.entity);(s=this.hass)==null||s.callService(d,c==="toggle"?"turn_on":c,{entity_id:u.entity})}else if(u.kind==="link"&&u.path)this._sheet=null,this.fire("phone-link",u.path);else{let d=this._sheet==="group"&&this._own===l;this._own=l,this._sheet=d?null:"group"}return}let n=e.startsWith("floor:")?e.slice(6):null,i=n||e==="rooms"?"rooms":e==="covers"?"covers":"more",r=this._sheet===i&&(!n||n===this._navFloor);this._sheet=r?null:i,i==="rooms"&&(this._navFloor=n??(t.some(l=>l.id===this.floorId)?this.floorId:((a=t[0])==null?void 0:a.id)??null))}tapMore(e){var t,n;this._sheet=null,e==="check"?this.setMode("check"):e==="house"?this.fire("phone-room",{floorId:null,roomId:null}):e==="solo"?this.fire("phone-solo",!this.solo):e==="find"?(n=(t=this.view())==null?void 0:t.openFind)==null||n.call(t):e.startsWith("slot:")?this.tapSlot(e.slice(5),this.lastFloors):this.fire("phone-more",e)}render(){var I;let e=this.hass,t=this.building;if(!e||!t)return x;let n=((I=this.view())==null?void 0:I.nowInput())??null,i=this.words();n!=null&&n.away&&(i.calm=this.t("now_calm_away"));let r=n?bd(n,i):[],s=n?_d(r):{text:"",level:0},a=cc(t.floors,Rt(e,t,null)),l=[...t.floors].sort((P,C)=>P.elevation-C.elevation).map(P=>({id:P.id,name:P.name,items:In(e,P).covers.map(C=>{var R,G;return pc(C,K(e,C),(R=e.states[C])==null?void 0:R.state,(G=e.states[C])==null?void 0:G.attributes.current_position)})})).filter(P=>P.items.length),u=l.reduce((P,C)=>P+C.items.filter(R=>R.shut).length,0),d=new Set(this.hide??[]),c=Fr(this.places),p=c.map(P=>this.groupOf(P)),h={lights:"\u{1F4A1}",climate:"\u{1F321}",action:"\u25B6",link:"\u2197"},f=c.map((P,C)=>{var R;return{id:`own:${C}`,label:P.name||(P.kind==="lights"?this.t("nav_lights"):P.kind==="climate"?this.t("nav_climate"):P.kind==="action"&&P.entity?K(e,P.entity):this.t("nav_page")),icon:P.icon||h[P.kind],badge:P.kind==="lights"?((R=p[C])==null?void 0:R.floors.reduce((G,k)=>G+k.items.filter(_=>_.on).length,0))??0:0}}).filter((P,C)=>p[C]?p[C].floors.length>0:c[C].kind==="link"||!!e.states[c[C].entity??""]),{bar:m,over:b}=uc(dc(d.has("rooms")?[]:a,r.filter(P=>P.level>0).length,u,l.length>0&&!d.has("covers"),f));this.lastFloors=a;let v=this.mode==="page"?"now":this._sheet==="rooms"?m.some(P=>P.id==="rooms")?"rooms":`floor:${this._navFloor}`:this._sheet==="group"?`own:${this._own}`:this._sheet,$={title:this.t("now_title"),close:this.t("close"),lightsOff:this.t("now_lights_off"),lock:this.t("now_lock"),check:this.t("now_check"),checkHint:this.t("now_check_hint"),next:this.t("now_next"),done:this.t("now_done"),checkDone:this.t("now_check_done"),checkNothing:this.t("now_check_nothing"),windowHint:this.t("now_window_hint"),allLightsOff:this.t("now_all_lights_off")},y={now:this.t("nav_now"),rooms:this.t("nav_rooms"),covers:this.t("nav_covers"),more:this.t("nav_more"),wholeFloor:this.t("nav_whole_floor"),allUp:this.t("nav_all_up"),allDown:this.t("nav_all_down"),allOn:this.t("nav_all_on"),allOff:this.t("nav_all_off"),on:this.t("nav_dev_on"),off:this.t("nav_dev_off"),close:this.t("close")},w=[...b.map(P=>({id:`slot:${P.id}`,icon:P.icon??(P.id==="covers"?"\u25A4":"\u25A6"),label:P.label||this.t(P.id==="covers"?"nav_covers":"nav_rooms"),hint:P.badge?String(P.badge):void 0})),{id:"find",icon:"\u{1F50D}",label:this.t("find")},{id:"check",icon:"\u{1F6AA}",label:this.t("now_check"),hint:this.t("now_check_hint")},{id:"house",icon:"\u{1F3E0}",label:this.t("nav_house")},{id:"solo",icon:"\u{1F50E}",label:this.t("nav_solo"),hint:this.t("nav_solo_hint"),pressed:this.solo},...this.extras],S=d.has("favorites")?[]:(t.settings.favorites??[]).filter(P=>!!e.states[P]).map(P=>({entity:P,name:K(e,P)}));return g`${this.mode!=="bar"?g`<fp3d-now-list
            class="list"
            .items=${r}
            .summary=${s}
            .stops=${this.stops}
            .labels=${$}
            .favorites=${S}
            .mode=${this.mode}
            @now-mode=${P=>this.setMode(P.detail)}
            @now-go=${P=>this.go(P.detail)}
            @now-act=${P=>this.act(P.detail)}
            @now-fav=${P=>this.fav(P.detail)}
          ></fp3d-now-list>`:x}
      ${this.mode!=="check"?g`<fp3d-phone-nav
            class="nav"
            .slots=${m}
            .floors=${a}
            .covers=${l}
            .more=${w}
            .group=${this._sheet==="group"?p[this._own]??null:null}
            .labels=${y}
            .sheet=${this._sheet}
            .floorId=${this._navFloor}
            .roomId=${this.roomId}
            .active=${v}
            .level=${s.level}
            .attention=${s.level>0&&!this.roomId?s.text:""}
            @nav-slot=${P=>this.tapSlot(P.detail,a)}
            @nav-floor=${P=>this._navFloor=P.detail}
            @nav-close=${()=>this._sheet=null}
            @nav-room=${P=>{this._sheet=null,this.fire("phone-room",P.detail)}}
            @nav-cover=${P=>{e.callService("cover",P.detail.service,{entity_id:P.detail.entities})}}
            @nav-group=${P=>this.switchGroup(P.detail.entities,P.detail.on)}
            @nav-more=${P=>this.tapMore(P.detail)}
          ></fp3d-phone-nav>`:x}`}static styles=fe`
    /* over the 3D view, without taking its touches: only the bar, the pages and the card catch them */
    :host {
      position: absolute;
      inset: 0;
      z-index: 9;
      pointer-events: none;
    }
    .nav,
    .list {
      pointer-events: auto;
      position: absolute;
      left: 0;
      right: 0;
    }
    .nav {
      bottom: 0;
      z-index: 2;
    }
    .list[mode="page"] {
      top: 0;
      bottom: calc(64px + env(safe-area-inset-bottom, 0px));
      z-index: 1;
    }
    .list[mode="check"] {
      left: 8px;
      right: 8px;
      bottom: 8px;
    }
  `};customElements.get("fp3d-phone-shell")||customElements.define("fp3d-phone-shell",cs);var yd;function ds(){let o=new URL("./neonplan3d-editor.js?v=593761479005",new URL(import.meta.url)).href;return yd??=import(o),yd}var $m={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function $t(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function us(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return r<=.1?0:Math.min(1,.3+r/10)}function wd(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let i=$m[n.state];if(!i)return null;let r=n.attributes,s=i.cloud??0;typeof r.cloud_coverage=="number"&&(s=Math.min(1,Math.max(0,r.cloud_coverage/100)));let a=i.wind??0;if(typeof r.wind_speed=="number"){let u=r.wind_speed_unit==="m/s"?r.wind_speed*3.6:r.wind_speed_unit==="mph"?r.wind_speed*1.609:r.wind_speed;a=Math.max(a,Math.min(1,u/60))}let l=us(o,t);return l!==null&&l>0&&(s=Math.max(s,.85)),{entity:n.entity_id,condition:n.state,rain:l??i.rain??0,snow:i.snow??0,fog:i.fog??0,cloud:s,wind:a,lightning:!!i.lightning}}function xd(o,e){let t=new Set(e??Ul);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var Sm=["pool","room_bar"];function ps(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("neonplan3d.lab","1"):o==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function $d(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("neonplan3d.projection","1"):o==="0"&&localStorage.removeItem("neonplan3d.projection"),localStorage.getItem("neonplan3d.projection")==="1"}catch{return!1}}function lt(o){return!Sm.includes(o)||ps()}var kd="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",Mm={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function Sd(o){let e=o?Mm[o]:void 0;return e?`${kd}#${e}`:kd}function q(o){return lt(o)}var Im=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),Pm=new Set(["power","plug","connectivity","running"]);function li(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return Pm.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return Im.has(n)||n.startsWith("ob ")}function ms(o){let e=$e(o);if(!e)return!1;if(Em.test([e.id,...e.tags??[],...Object.values(e.name??{})].join(" ")))return!e.light||/plant|pflanz/i.test(e.id);if(e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var Em=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var Pe=["#3a3f47","#3a3f47"],nn=["#23262b","#23262b"],tt=["#5a3b25","#5a3b25"],xe=["#1f4fa8","#1f4fa8"],Ct=["#e3b616","#e3b616"],se=["#2f7d3b","#2f7d3b"],Md={default:{rest:Pe,bio:tt,paper:xe,plastic:Ct,glass:se,garden:se,recycling:Ct,other:Pe},DE:{rest:nn,bio:tt,paper:xe,plastic:Ct,glass:se,garden:se,recycling:Ct},AT:{rest:Pe,bio:tt,paper:[Pe[0],"#c0262d"],plastic:Ct,glass:se,garden:se},CH:{rest:["#d8d8d8","#d8d8d8"],bio:se,paper:xe,plastic:Pe,glass:se,garden:se},NL:{rest:Pe,bio:se,paper:xe,plastic:["#3a3f47","#e57a1f"],glass:se,garden:se},BE:{rest:Pe,bio:se,paper:xe,plastic:xe,glass:se,garden:se},GB:{rest:nn,bio:["#3a3f47","#5a3b25"],paper:xe,plastic:xe,glass:nn,garden:tt,recycling:xe},US:{rest:nn,bio:se,paper:xe,plastic:xe,glass:xe,garden:se,recycling:xe},CA:{rest:nn,bio:se,paper:xe,plastic:xe,glass:xe,garden:se,recycling:xe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Pe,bio:tt,paper:[Pe[0],"#e3b616"],plastic:[Pe[0],"#e3b616"],recycling:[Pe[0],"#e3b616"],glass:se,garden:se},IT:{rest:Pe,bio:tt,paper:xe,plastic:Ct,glass:se,garden:se},ES:{rest:Pe,bio:tt,paper:xe,plastic:Ct,glass:se,garden:se},PT:{rest:Pe,bio:tt,paper:xe,plastic:Ct,glass:se,garden:se},DK:{rest:nn,bio:se,paper:xe,plastic:Pe,glass:se,garden:se},SE:{rest:nn,bio:tt,paper:xe,plastic:Pe,glass:se,garden:se},NO:{rest:Pe,bio:tt,paper:xe,plastic:Pe,glass:se,garden:se},FI:{rest:Pe,bio:tt,paper:xe,plastic:Pe,glass:se,garden:se}},Td="DE";function Ad(o){Td=o}function zd(o){var n;let e=(n=o==null?void 0:o.config)==null?void 0:n.country;if(e)return e.toUpperCase();let t=((o==null?void 0:o.language)??"").split("-")[1];return t?t.toUpperCase():"DE"}function Tm(o,e){var t;return((t=Md[e])==null?void 0:t[o])??Md.default[o]??Pe}function Rd(o,e=Td){let t=Tm(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var Am={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function fs(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(i=>i.trim()&&n.includes(i.trim())):e==="other"?!1:Am[e].some(i=>n.includes(i))}function gs(o){let e=typeof o=="string"?o:(o==null?void 0:o.date)??(o==null?void 0:o.dateTime);if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function zm(o){return o.map(e=>({day:gs(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function Cd(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function Fd(o,e,t=new Date,n=42){let i=new Map,r=o.callApi;if(!r)return i;let s=new Date(t.getFullYear(),t.getMonth(),t.getDate()),a=ui(s,n);return await Promise.all(e.map(async l=>{try{let u=await r.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(s.toISOString())}&end=${encodeURIComponent(a.toISOString())}`);i.set(l,zm(Array.isArray(u)?u:[]))}catch{}})),i}function Id(o){let e=typeof o=="string"?o:(o==null?void 0:o.dateTime)??(o==null?void 0:o.date);if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:{at:n,allDay:!!t}}function Rm(o,e){return o.map(t=>{let n=Id(t.start),i=Id(t.end);return{summary:String(t.summary??"").trim(),calendar:e,allDay:!!(n!=null&&n.allDay),start:(n==null?void 0:n.at)??null,end:(i==null?void 0:i.at)??null}}).filter(t=>t.summary)}async function Od(o,e,t=new Date){let n=o.callApi;if(!n||!e.length)return[];let i=new Date(t.getFullYear(),t.getMonth(),t.getDate()),r=ui(i,1);return(await Promise.all(e.map(async a=>{try{let l=await n.call(o,"GET",`calendars/${a}?start=${encodeURIComponent(i.toISOString())}&end=${encodeURIComponent(r.toISOString())}`);return Rm(Array.isArray(l)?l:[],a)}catch{return[]}}))).flat()}function Hd(o,e=new Date,t,n=6){let i=new Date(e.getFullYear(),e.getMonth(),e.getDate()),r=ui(i,1),s=a=>a.toLocaleTimeString(t||void 0,{hour:"2-digit",minute:"2-digit"});return o.filter(a=>a.allDay?(!a.start||a.start<r)&&(!a.end||a.end>i):a.end&&a.end<=e?!1:!a.start||a.start<r).sort((a,l)=>{var u,d;return Number(l.allDay)-Number(a.allDay)||(((u=a.start)==null?void 0:u.getTime())??0)-(((d=l.start)==null?void 0:d.getTime())??0)}).filter((a,l,u)=>u.findIndex(d=>{var c,p;return d.summary===a.summary&&((c=d.start)==null?void 0:c.getTime())===((p=a.start)==null?void 0:p.getTime())})===l).slice(0,n).map(a=>{let l=!a.allDay&&a.start&&a.start>=i,u=!a.allDay&&!!a.start&&a.start.getTime()-e.getTime()<=36e5&&(!a.end||a.end>e);return{icon:"calendar-clock",text:l?`${s(a.start)} ${a.summary}`:a.summary,entity:a.calendar,...u?{hot:!0}:{}}})}var Cn=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),ui=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),ci=(o,e)=>Math.round((Cn(e).getTime()-Cn(o).getTime())/864e5);function hs(o,e,t={}){let n=t.from??14,i=t.until??12,r=e.getHours()+e.getMinutes()/60;return o===1&&r>=n||o===0&&r<i}function Ld(o,e,t,n=new Date,i=3){let r=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!r)return[];if(r.startsWith("calendar.")){let a=Cn(n);return(t.get(r)??[]).filter(l=>l.day>=a&&fs(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,i)}let s=bs(o,e,t,n);return s?[{day:s.day,summary:s.summary}]:[]}function bs(o,e,t,n=new Date,i={}){let r=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!r)return null;let s=Cn(n);if(r.startsWith("calendar.")){let d=(t.get(r)??[]).find(p=>p.day>=s&&fs(p.summary,o.bin_kind??"rest",o.bin_match));if(!d)return null;let c=ci(s,d.day);if(c===0&&n.getHours()+n.getMinutes()/60>=(i.until??12)){let p=(t.get(r)??[]).find(h=>h.day>s&&fs(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:ci(s,p.day),day:p.day,summary:p.summary,glow:hs(ci(s,p.day),n,i)}}return{days:c,day:d.day,summary:d.summary,glow:hs(c,n,i)}}let a=e.states[r];if(!a)return null;let l=Om(a,n);if(l===null||l<0)return null;let u=ui(s,l);return{days:l,day:u,summary:String(a.attributes.friendly_name??""),glow:hs(l,n,i)}}function Cm(o,e){let t=typeof o=="string"&&o!=="none"?o:null,n=t?e.states[t]:void 0;return!!n&&jd.has(String(n.state).toLowerCase())}function _s(o,e){return Cm(o.bin_out,e)}function Nd(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function Dd(o,e=.3){let t=o.filter(a=>!a.icon),n=t.map((a,l)=>l),i=a=>n[a]===a?a:n[a]=i(n[a]);for(let a=0;a<t.length;a++)for(let l=a+1;l<t.length;l++){let u=t[a],d=t[l];u.floorId===d.floorId&&Math.hypot(u.x-d.x,u.z-d.z)<=u.r+d.r+e&&(n[i(l)]=i(a))}let r=new Map;t.forEach((a,l)=>r.set(i(l),[...r.get(i(l))??[],a]));let s=[];for(let a of r.values())a.sort((l,u)=>l.days-u.days||l.name.localeCompare(u.name)),s.push({floorId:a[0].floorId,x:a.reduce((l,u)=>l+u.x,0)/a.length,z:a.reduce((l,u)=>l+u.z,0)/a.length,y:Math.max(...a.map(l=>l.y)),lines:a});for(let a of o)a.icon&&s.push({floorId:a.floorId,x:a.x,z:a.z,y:a.y,lines:[a]});return s}function Vd(o,e={}){let t=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,n=o.length?Math.min(...o.map(i=>i.days)):0;return new Set(o.filter(i=>(t===null||i.days<=t)&&(!e.nextOnly||i.days===n)).map(i=>i.id))}function Fm(o,e=new Date){let t=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o)??/(?:^|[^\d])(\d{1,2})(-)(\d{1,2})-(\d{4})(?![\d])/.exec(o),i,r,s;if(t)[i,r,s]=[Number(t[1]),Number(t[2]),Number(t[3])];else if(n){let l=Number(n[1]),u=Number(n[3]);n[2]==="/"&&u>12&&l<=12&&([l,u]=[u,l]),s=l,r=u;let d=n[4];i=d?d.length===2?2e3+Number(d):Number(d):e.getFullYear(),!d&&new Date(i,r-1,s)<Cn(e)&&(i+=1)}else return null;if(r<1||r>12||s<1||s>31)return null;let a=new Date(i,r-1,s);return a.getMonth()===r-1?a:null}function Om(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;for(let l of["Days_until","days_until"]){let u=t[l];if(typeof u=="number"&&Number.isFinite(u))return Math.round(u);if(typeof u=="string"&&/^-?\d+$/.test(u.trim()))return Number(u.trim())}let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let i=/^\d{4}-\d{2}-\d{2}T/.test(n)?gs(n):Fm(n,e);if(i)return ci(e,i);let r=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(r))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(r))return 1;let s=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(r)??/\bin\s+(\d+)/.exec(r);if(s)return Number(s[1]);let a=r.match(/\d+/g);return a?Number(a[a.length-1]):null}var jd=new Set(["on","open","true","detected","home"]);function Pd(o){let e=o!=null&&o.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function Wd(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let i=e.states[n];if(!i||i.state==="unavailable"||i.state==="unknown")return!1;let r=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!r){let l=Number(i.state);return jd.has(i.state.toLowerCase())||Number.isFinite(l)&&l>0}let s=Pd(i),a=Pd(e.states[r]);return s===null||t-s>7*864e5?!1:a===null||s>a+1e3}function Bd(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:Nm(o)}function qd(o){var t;if(o==="washer"||o==="dryer"||o==="dishwasher")return o;let e=(t=$e(o))==null?void 0:t.id;return e?/dishwasher|geschirr/.test(e)?"dishwasher":/dryer|trockner/.test(e)?"dryer":/washer|washing|waschmaschine/.test(e)?"washer":/oven|cooker|backofen/.test(e)?"oven":null:null}var Ud=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function vs(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let r=n.attributes,s=String(r.problem??"").toLowerCase();return String(r.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&s.includes("moisture")&&!s.includes("high")}let i=Ud(n);return i!==null&&i<(o.moisture_min??20)}function ys(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let s=Number(t),a=n==="s"?s/60:n==="h"?s*60:s;return Math.max(0,Math.round(a))}let i=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(i)return Number(i[1])*60+Number(i[2])+Math.round(Number(i[3]??0)/60);let r=Date.parse(t);return Number.isFinite(r)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((r-e)/6e4)):null}var Hm=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function ws(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return Hm.has(e)}var Lm=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function xs(o,e,t){let n=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(n!==null&&Lm.has(n))return!0;let i=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),r=!!o&&!i&&n!==null&&(n==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(n));return e!==null&&e<=t&&!r}function Kd(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function Ed(o,e,t,n){let i=typeof o=="string"&&o!=="none"?o:null,r=i?t.states[i]:void 0;if(!i||!r||r.state==="unavailable"||r.state==="unknown")return!1;if(i.startsWith("binary_sensor.")||i.startsWith("input_boolean."))return r.state==="on";let s=Ud(r);if(s!==null)return s<=(e??10);let a=gs(r.state);return!!a&&a.getTime()<=Cn(n).getTime()}function Gd(o,e,t=new Date){let n=[];return Ed(o.service,o.service_min,e,t)&&n.push(o.service),o.service2!==o.service&&Ed(o.service2,o.service2_min,e,t)&&n.push(o.service2),n}var Ft=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),Yd=o=>!!o&&(o.state==="on"||o.state==="open");function pi(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let i of Ft(o)){let r=e.states[i];if(Yd(r)&&(r!=null&&r.last_changed)&&t-Date.parse(r.last_changed)>=n)return i}return null}function Qd(o,e,t=Date.now()){let n=null;for(let i of o)if(!(i.type!=="fridge"&&i.type!=="fridge_smart"))for(let r of Ft(i)){let s=e.states[r];if(!Yd(s)||!(s!=null&&s.last_changed))continue;let a=Date.parse(s.last_changed)+(i.door_alarm??2)*6e4-t;a>0&&(n===null||a<n)&&(n=a)}return n}var di=class{running=new Map;ended=new Map;update(e,t,n,i=Date.now()){let r=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;r===!0&&this.ended.set(e,i);let s=this.ended.get(e);return s===void 0?!1:i-s>12*36e5||n(s)?(this.ended.delete(e),!1):!0}};function Nm(o){return[o.moisture??null,o.remaining??null,o.service??null,o.service2??null]}var eu="proxmoxve";function Dm(o){let e=new Map;for(let t of Object.values(o.entities??{})){if(t.platform!==eu||!t.device_id||!t.translation_key)continue;let n=t.entity_id.slice(0,t.entity_id.indexOf("."));if(n!=="sensor"&&n!=="binary_sensor")continue;let i=e.get(t.device_id);i||e.set(t.device_id,i=new Map);let r=`${n==="binary_sensor"?"b:":""}${t.translation_key}`;i.has(r)?i.set(`${r}#${t.entity_id}`,t.entity_id):i.set(r,t.entity_id)}return e}function fi(o){return!!o&&o.state!=="unavailable"&&o.state!=="unknown"}function nt(o,e){let t=e?o.states[e]:void 0;if(!fi(t))return null;let n=Number(t.state);return Number.isFinite(n)?n:null}function hi(o,e){var n;let t=(n=o.devices)==null?void 0:n[e];return(t==null?void 0:t.name_by_user)||(t==null?void 0:t.name)||e}function ks(o){let e=/^(?:qemu|lxc|vm)\s+(.*?)\s*\((\d+)\)\s*$/i.exec(o.trim());return e?{name:e[1],vmid:Number(e[2])}:{name:o.trim(),vmid:null}}var Jd=new WeakMap;function tu(o){let e=o==null?void 0:o.entities;if(!e)return!1;let t=Jd.get(e);return t===void 0&&Jd.set(e,t=Object.values(e).some(n=>n.platform===eu)),t}function vo(o){var i,r,s;let e=[],t=[],n=[];for(let[a,l]of Dm(o)){let u=d=>l.get(d);if(u("node_status")||u("qemu_on")||u("lxc_on")){let d=u("node_status")??u("b:status"),c=o.states[d],p=d===u("node_status")?(c==null?void 0:c.state)==="online":(c==null?void 0:c.state)==="on";e.push({deviceId:a,name:hi(o,a).replace(/^node\s+/i,""),online:p,cpu:nt(o,u("cpu_used")),memory:nt(o,u("memory_used_perc")),disk:nt(o,u("disk_used_perc")),load:nt(o,u("load_1m")),vmsOn:nt(o,u("qemu_on")),lxcOn:nt(o,u("lxc_on")),updates:nt(o,u("updates_total")),failedTasks:nt(o,u("failed_tasks_count")),entity:d})}else if(u("cpu_used")&&(u("b:status")||u("status_raw"))){let d=u("b:status")??u("status_raw"),c=o.states[d],p=d===u("b:status")?(c==null?void 0:c.state)==="on":(c==null?void 0:c.state)==="running",h=((r=(i=o.devices)==null?void 0:i[a])==null?void 0:r.model)??"",f=ks(hi(o,a)),m=/lxc/i.test(h)||/^lxc\b/i.test(hi(o,a))?"lxc":"vm",b=u("memory_used")?o.states[u("memory_used")]:void 0,v=u("uptime")?o.states[u("uptime")]:void 0,$=u("ip_address")?o.states[u("ip_address")]:void 0;t.push({deviceId:a,name:f.name,vmid:f.vmid,kind:m,running:p,cpu:p?nt(o,u("cpu_used")):null,memory:p?nt(o,u("memory_used_perc")):null,memoryUsed:p&&fi(b)?`${Number(b.state).toFixed(1)} ${b.attributes.unit_of_measurement??""}`.trim():null,disk:nt(o,u("disk_used_perc")),ip:fi($)?$.state:null,since:p&&fi(v)?v.state:null,problem:((s=o.states[u("b:health")??""])==null?void 0:s.state)==="on",entity:d})}else{let d=[...l].filter(([c])=>c==="b:health"||c.startsWith("b:health#")).map(([,c])=>c);d.length&&[...l.keys()].some(c=>c.startsWith("disk_size"))&&n.push({deviceId:a,name:hi(o,a),health:d})}}return t.sort((a,l)=>(a.vmid??1e9)-(l.vmid??1e9)||a.name.localeCompare(l.name)),{nodes:e,instances:t,disks:n}}function nu(o){return[...o.nodes.map(e=>e.entity),...o.instances.map(e=>e.entity),...o.disks.flatMap(e=>e.health)]}var Xd=new Set;function ou(o){let e=[];for(let t of o.instances)t.running?Xd.add(t.deviceId):Xd.has(t.deviceId)&&e.push(t);return e}var Zd=new Set;function iu(o,e){var n;let t=[];for(let i of e.disks)for(let r of i.health){let s=(n=o.states[r])==null?void 0:n.state;s==="off"?Zd.add(r):s==="on"&&Zd.has(r)&&t.push({disk:i,entity:r})}return t}function ru(o,e=Date.now()){let t=Math.max(0,(e-Date.parse(o))/1e3);if(!Number.isFinite(t))return"\u2013";let n=Math.floor(t/86400),i=Math.floor(t%86400/3600),r=Math.floor(t%3600/60);return n?`${n} d ${i} h`:i?`${i} h ${r} min`:`${r} min`}var Vm=10*6e4,jm=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),su={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function yo(o,e,t){let n=[];for(let p of e.floors)for(let h of p.rooms){let f=Ie(o,h.area_id).filter(m=>{var b;return m.startsWith("binary_sensor.")&&!!su[String((b=o.states[m])==null?void 0:b.attributes.device_class)]});f.length&&n.push({floorId:p.id,roomId:h.id,sensors:f})}let i=Object.keys(o.states),r=e.settings.rain_warning===!1?null:$t(o,t??e.settings.weather_entity),s=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,a=q("household")?e.floors.flatMap(p=>p.furniture.filter(h=>(h.type==="fridge"||h.type==="fridge_smart")&&Ft(h).length).map(h=>{var f;return{floorId:p.id,roomId:((f=p.rooms.find(m=>m.points.length>=3&&B([h.x,h.z],m.points)))==null?void 0:f.id)??null,furnitureId:h.id,ids:Ft(h)}})):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,u=l&&o.states[l]?l:null,d=nu(vo(o)),c=d.length?{ids:d,...Wm(e)}:null;return{rooms:n,alarms:i.filter(p=>p.startsWith("alarm_control_panel.")),weather:r,outage:s,rain:u,fridges:a,proxmox:c}}function Wm(o){for(let e of o.floors){let t=e.furniture.find(i=>i.type.endsWith(":server_rack")),n=t?e.rooms.find(i=>i.points.length>=3&&B([t.x,t.z],i.points)):void 0;if(t)return{roomId:(n==null?void 0:n.id)??null,floorId:e.id}}return{roomId:null,floorId:null}}function $s(o){var e;return[...o.rooms.flatMap(t=>t.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(t=>t.ids),...((e=o.proxmox)==null?void 0:e.ids)??[]]}function mi(o,e,t,n){var a,l,u;let i=[];for(let d of t.rooms)for(let c of d.sensors){let p=o.states[c];(p==null?void 0:p.state)==="on"&&i.push({kind:su[String(p.attributes.device_class)],entity:c,roomId:d.roomId,floorId:d.floorId})}let r=t.rain?us(o,t.rain):null;if(r!==null?r>0:!!t.weather&&jm.has(((a=o.states[t.weather])==null?void 0:a.state)??""))for(let d of e.floors)for(let c of d.openings){if(c.type!=="window"||c.rain_ignore)continue;let p=n.get(c.id);if(!p)continue;let h=vt(o,p,"window");h.open<.5&&h.tilt<.5&&h.open2<.5&&h.tilt2<.5||i.push({kind:"window_rain",entity:p.contact??p.tilt??p.contact2??c.id,roomId:c.room_id,floorId:d.id})}if(t.outage&&li(o.states[t.outage])&&i.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null}),e.settings.alert_unavailable){let d=Date.now(),c=new Set;for(let p of e.floors)for(let h of p.openings){let f=n.get(h.id);if(f)for(let m of[f.contact,f.tilt,f.contact2,f.tilt2]){if(!m||c.has(m))continue;let b=o.states[m];if(!b||b.state!=="unavailable"&&b.state!=="unknown")continue;let v=Date.parse(b.last_changed??"");Number.isFinite(v)&&d-v<Vm||(c.add(m),i.push({kind:"contact_unavailable",entity:m,roomId:h.room_id,floorId:p.id}))}}}for(let d of t.fridges??[]){let c=(l=e.floors.find(h=>h.id===d.floorId))==null?void 0:l.furniture.find(h=>h.id===d.furnitureId),p=c?pi(c,o):null;p&&i.push({kind:"fridge_door",entity:p,roomId:d.roomId,floorId:d.floorId})}if(t.proxmox){let{roomId:d,floorId:c}=t.proxmox,p=vo(o);for(let h of p.nodes)h.online||i.push({kind:"pve_node_down",entity:h.entity,roomId:d,floorId:c});for(let h of iu(o,p))i.push({kind:"pve_disk",entity:h.entity,roomId:d,floorId:c});for(let h of ou(p))i.push({kind:"pve_stopped",entity:h.entity,roomId:d,floorId:c})}for(let d of t.alarms){let c=(u=o.states[d])==null?void 0:u.state;c==="triggered"?i.push({kind:"alarm",entity:d,roomId:null,floorId:null}):c==="pending"&&i.push({kind:"alarm_pending",entity:d,roomId:null,floorId:null})}return i}function au(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"pve_stopped":return[1,.62,.2];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function Ot(o,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null;if(t.text!==void 0)return n?`${n.name} \xB7 ${t.text}`:t.text;let i=t.kind.startsWith("pve_")&&o?Bm(o,t):o?K(o,t.entity):t.entity,r=T(o,`alert_${t.kind}`,{name:i});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${T(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${r}`:r}function Bm(o,e){var r,s,a;let t=(s=(r=o.entities)==null?void 0:r[e.entity])==null?void 0:s.device_id,n=t?(a=o.devices)==null?void 0:a[t]:void 0,i=(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||K(o,e.entity);if(e.kind==="pve_node_down")return i.replace(/^node\s+/i,"");if(e.kind==="pve_stopped"){let l=ks(i);return l.vmid===null?l.name:`${l.name} (${l.vmid})`}return i}function gi(o,e){let t=Rt(o,e,null),n=t.map(r=>r.temp).filter(r=>r!==null),i=mi(o,e,yo(o,e),new Map).filter(r=>r.roomId!==null);return{rooms:t.length,lightsOn:t.reduce((r,s)=>r+s.lightsOn.length,0),open:t.reduce((r,s)=>r+s.open,0),playing:t.filter(r=>r.playing).length,temp:n.length?Math.round(n.reduce((r,s)=>r+s,0)/n.length*10)/10:null,alerts:i}}var He=fe`
  :host {
    --fp3d-bg: #070b14;
    --fp3d-bg2: #0d1424;
    --fp3d-chrome: rgba(14, 21, 38, 0.86);
    --fp3d-chrome-solid: #0f1729;
    --fp3d-line: rgba(120, 170, 255, 0.16);
    --fp3d-text: #e6eefc;
    --fp3d-muted: #8a9bb8;
    --fp3d-accent: #37e0ff;
    --fp3d-accent-text: #041018;
    --fp3d-soft: #5b7cff;
    --fp3d-warm: #ffb547;
    --fp3d-danger: #ff6b8b;
    --fp3d-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    --fp3d-font: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    --fp3d-title-font: "Bricolage Grotesque", "Figtree", system-ui, sans-serif;
    color-scheme: dark;
    font-family: var(--fp3d-font);
    color: var(--fp3d-text);
  }
`,je=fe`
  .fp3d-seg {
    display: inline-flex;
    padding: 3px;
    gap: 2px;
    border-radius: 999px;
    background: var(--fp3d-chrome);
    box-shadow: var(--fp3d-shadow);
  }
  .fp3d-seg button,
  .fp3d-chip {
    font: inherit;
    font-weight: 500;
    border: none;
    background: none;
    color: var(--fp3d-muted);
    padding: 7px 13px;
    border-radius: 999px;
    cursor: pointer;
    white-space: nowrap;
    min-height: 34px;
  }
  .fp3d-seg button[aria-pressed="true"],
  .fp3d-chip[aria-pressed="true"] {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
  }
  .fp3d-seg button:disabled {
    opacity: 0.4;
    cursor: default;
  }
  .fp3d-chip {
    background: var(--fp3d-chrome);
    color: var(--fp3d-text);
    box-shadow: var(--fp3d-shadow);
  }
  button:focus-visible,
  input:focus-visible,
  select:focus-visible {
    outline: 2px solid var(--fp3d-accent);
    outline-offset: 2px;
  }
  .fp3d-btn {
    font: inherit;
    font-weight: 600;
    border: 1px solid var(--fp3d-line);
    background: rgba(55, 224, 255, 0.06);
    color: var(--fp3d-text);
    border-radius: 10px;
    padding: 7px 12px;
    cursor: pointer;
    min-height: 34px;
  }
  .fp3d-btn:hover {
    border-color: var(--fp3d-accent);
  }
  .fp3d-btn.fp3d-danger {
    color: var(--fp3d-danger);
  }
  .fp3d-btn.fp3d-primary {
    background: var(--fp3d-accent);
    color: var(--fp3d-accent-text);
    border-color: transparent;
  }
  .fp3d-field {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-field input,
  .fp3d-field select {
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
    min-width: 0;
  }
  .fp3d-field input[type="range"] {
    padding: 0;
    accent-color: var(--fp3d-accent);
  }
  /* a colour picker shows its colour as a full swatch, not a line inside the text field's padding */
  .fp3d-field input[type="color"] {
    padding: 3px;
    height: 36px;
    width: 100%;
    cursor: pointer;
  }
  .fp3d-field select option,
  select option {
    /* the opened list keeps the dark look (else light text on the browser's white list) */
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-text);
  }
  /* the group titles of an opened list (the styles): dark too, else a white bar with light text */
  .fp3d-field select optgroup,
  select optgroup {
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-accent);
    font-style: normal;
    font-weight: 700;
  }
  /* a list to edit line by line (a module's sentences): ✕ per line, a field to add one */
  .fp3d-lines {
    display: grid;
    gap: 4px;
    font-size: 12px;
    color: var(--fp3d-muted);
  }
  .fp3d-lines-row {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 4px 4px 9px;
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    font-size: 14px;
    color: var(--fp3d-text);
  }
  .fp3d-lines-row span {
    flex: 1;
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .fp3d-lines-row button {
    border: 0;
    background: none;
    color: var(--fp3d-muted);
    font: inherit;
    cursor: pointer;
    padding: 2px 8px;
    border-radius: 6px;
  }
  .fp3d-lines-row button:hover:not(:disabled) {
    color: var(--fp3d-danger);
  }
  .fp3d-lines-add {
    display: flex;
    gap: 6px;
  }
  .fp3d-lines-add input {
    flex: 1;
    min-width: 0;
    font: inherit;
    font-size: 14px;
    color: var(--fp3d-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fp3d-line);
    border-radius: 8px;
    padding: 7px 9px;
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var bi=o=>(o==null?void 0:o.icon)||"\u{1F3E0}";function Fn(o,e,t){let n=e.find(i=>i.id===t);return(n==null?void 0:n.name)||(t===ye?T(o,"plan_main"):"?")}var Ss=class extends ue{static properties={hass:{attribute:!1},plans:{attribute:!1},current:{attribute:!1},admin:{type:Boolean},alerts:{attribute:!1},site:{type:Boolean},hasSite:{type:Boolean},_open:{state:!0}};constructor(){super(),this.plans=[],this.current=ye,this.admin=!1,this.alerts=null,this.site=!1,this.hasSite=!1,this._open=!1}t(e,t){return T(this.hass,e,t)}fire(e,t={}){this._open=!1,this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}close=e=>{e.composedPath().includes(this)||(this._open=!1)};connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.close)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.close)}render(){let e=this.plans.find(n=>n.id===this.current),t=[...this.alerts??new Map].filter(([n,i])=>n!==this.current&&i>0).reduce((n,[,i])=>n+i,0);return g`<button
        class="fp3d-pp-btn"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        title=${this.t("plan_pick")}
        @click=${()=>this._open=!this._open}
      >
        <span class="fp3d-pp-icon">${this.site?"\u{1F3D8}":bi(e)}</span>
        <span class="fp3d-pp-name">${this.site?this.t("plan_site"):Fn(this.hass,this.plans,this.current)}</span>
        ${t?g`<span class="fp3d-pp-alert" title=${this.t("plan_alerts_elsewhere",{n:t})}>${t}</span>`:x}
        <span class="fp3d-pp-caret">▾</span>
      </button>
      ${this._open?g`<div class="fp3d-pp-menu" role="listbox">
            ${this.plans.map(n=>{var i;return g`<button role="option" aria-selected=${!this.site&&n.id===this.current} @click=${()=>this.fire("plan-pick",{plan:n.id})}>
                <span class="fp3d-pp-icon">${bi(n)}</span>
                <span class="fp3d-pp-name">${Fn(this.hass,this.plans,n.id)}</span>
                ${(i=this.alerts)!=null&&i.get(n.id)?g`<span class="fp3d-pp-alert">${this.alerts.get(n.id)}</span>`:x}
                <span class="fp3d-pp-size">${this.t(n.rooms===1?"floor_rooms_one":"floor_rooms",{n:n.rooms})}</span>
              </button>`})}
            ${this.hasSite?g`<button role="option" aria-selected=${this.site} @click=${()=>this.fire("plan-site")}>
                  <span class="fp3d-pp-icon">🏘</span><span class="fp3d-pp-name">${this.t("plan_site")}</span>
                </button>`:x}
            ${this.plans.length>1?g`<button class="fp3d-pp-extra" @click=${()=>this.fire("plan-overview")}>▦ ${this.t("plan_all")}</button>`:x}
            ${this.admin?g`<hr />
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-new")}>＋ ${this.t("plan_new")}</button>
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-manage")}>⚙ ${this.t("plan_manage")}</button>`:x}
          </div>`:x}`}static styles=[He,je,fe`
      :host {
        position: relative;
        display: inline-block;
        min-width: 0;
      }
      .fp3d-pp-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        max-width: 260px;
        min-height: 36px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-pp-btn:hover,
      .fp3d-pp-btn[aria-expanded="true"] {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pp-name {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-pp-caret {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .fp3d-pp-alert {
        min-width: 18px;
        padding: 0 5px;
        border-radius: 9px;
        background: var(--fp3d-alert, #ff4d6d);
        color: #fff;
        font-size: 11.5px;
        font-weight: 700;
        line-height: 18px;
        text-align: center;
      }
      .fp3d-pp-menu {
        position: absolute;
        z-index: 20;
        top: calc(100% + 6px);
        left: 0;
        display: grid;
        min-width: 240px;
        max-width: min(340px, 90vw);
        max-height: 60vh;
        overflow: auto;
        padding: 6px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
      }
      .fp3d-pp-menu button {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 40px;
        padding: 6px 10px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: var(--fp3d-text);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-pp-menu button:hover,
      .fp3d-pp-menu button[aria-selected="true"] {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-pp-menu .fp3d-pp-name {
        flex: 1;
      }
      .fp3d-pp-size {
        color: var(--fp3d-muted);
        font-size: 12px;
        white-space: nowrap;
      }
      .fp3d-pp-extra {
        color: var(--fp3d-muted) !important;
      }
      hr {
        width: 100%;
        margin: 4px 0;
        border: 0;
        border-top: 1px solid var(--fp3d-line);
      }
    `]};customElements.get("fp3d-plan-picker")||customElements.define("fp3d-plan-picker",Ss);var Ms=class extends ue{static properties={hass:{attribute:!1},plans:{attribute:!1},buildings:{attribute:!1},current:{attribute:!1}};t(e,t){return T(this.hass,e,t)}fire(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}render(){var t,n,i;let e=String(((i=(n=(t=this.hass)==null?void 0:t.config)==null?void 0:n.unit_system)==null?void 0:i.temperature)??"\xB0C");return g`<div class="fp3d-po-veil" @click=${r=>r.target===r.currentTarget&&this.fire("close")}>
      <section class="fp3d-po" role="dialog" aria-label=${this.t("plan_all")}>
        <header>
          <h2>${this.t("plan_all")}</h2>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>✕</button>
        </header>
        <div class="fp3d-po-grid">
          ${this.plans.map(r=>{let s=this.buildings.get(r.id),a=s&&this.hass?gi(this.hass,s):null;return g`<button class="fp3d-po-tile ${a!=null&&a.alerts.length?"fp3d-po-alert":""} ${r.id===this.current?"fp3d-po-current":""}" @click=${()=>this.fire("plan-pick",{plan:r.id})}>
              <span class="fp3d-po-head"><span class="fp3d-po-icon">${bi(r)}</span><strong>${Fn(this.hass,this.plans,r.id)}</strong></span>
              ${a?g`<span class="fp3d-po-facts">
                      <span>${this.t(a.rooms===1?"floor_rooms_one":"floor_rooms",{n:a.rooms})}</span>
                      <span title=${this.t("plan_lights_on")}>💡 ${a.lightsOn}</span>
                      ${a.open?g`<span title=${this.t("plan_open_now")}>${this.t("plan_open_n",{n:a.open})}</span>`:x}
                      ${a.playing?g`<span>♪ ${a.playing}</span>`:x}
                      ${a.temp!==null?g`<span>🌡 ${ie(this.hass,a.temp,1)} ${e}</span>`:x}
                    </span>
                    ${a.alerts.slice(0,3).map(l=>g`<span class="fp3d-po-warn">⚠ ${Ot(this.hass,s,l)}</span>`)}`:g`<span class="fp3d-po-facts">…</span>`}
            </button>`})}
        </div>
      </section>
    </div>`}static styles=[He,je,fe`
      .fp3d-po-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(0, 0, 0, 0.55);
      }
      .fp3d-po {
        width: min(920px, 100%);
        max-height: 90vh;
        overflow: auto;
        padding: 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
      }
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
      }
      h2 {
        margin: 0;
        font-family: var(--fp3d-title-font);
        font-size: 20px;
      }
      .fp3d-po-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 12px;
      }
      .fp3d-po-tile {
        display: grid;
        align-content: start;
        gap: 8px;
        min-height: 120px;
        padding: 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-po-tile:hover,
      .fp3d-po-current {
        border-color: var(--fp3d-accent);
        box-shadow: 0 0 18px -6px var(--fp3d-accent);
      }
      .fp3d-po-alert {
        border-color: var(--fp3d-alert, #ff4d6d);
        box-shadow: 0 0 20px -6px var(--fp3d-alert, #ff4d6d);
      }
      .fp3d-po-head {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
      }
      .fp3d-po-icon {
        font-size: 24px;
      }
      .fp3d-po-facts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 12px;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      .fp3d-po-warn {
        color: var(--fp3d-alert, #ff4d6d);
        font-size: 13px;
        font-weight: 600;
      }
    `]};customElements.get("fp3d-plan-overview")||customElements.define("fp3d-plan-overview",Ms);var Is=":",qm=.05;function cu(o,e){let t=o.indexOf(Is);return t>0?{plan:o.slice(0,t),id:o.slice(t+1)}:{plan:e,id:o}}function Um(o,e){let t=e.rot*Math.PI/180,n=Math.cos(t),i=Math.sin(t),r=s=>Math.round(s*1e3)/1e3;return[r(o[0]*n-o[1]*i+e.x),r(o[0]*i+o[1]*n+e.y)]}function Km(o,e,t){let n=s=>`${e}${Is}${s}`,i=s=>Um(s,t),r=s=>(((s??0)+t.rot)%360+360)%360;return{...o,id:n(o.id),rooms:o.rooms.map(s=>({...s,id:n(s.id),points:s.points.map(i),start_view:null})),openings:o.openings.map(s=>({...s,id:n(s.id),room_id:n(s.room_id),wall:s.wall?n(s.wall):s.wall})),furniture:o.furniture.map(s=>{let[a,l]=i([s.x,s.z]);return{...s,id:n(s.id),x:a,z:l,rotation:r(s.rotation)}}),placements:o.placements.map(s=>{let[a,l]=i([s.x,s.z]);return{...s,x:a,z:l,rotation:r(s.rotation)}}),outdoor:(o.outdoor??[]).map(s=>({...s,id:n(s.id),points:s.points.map(i)})),walls:(o.walls??[]).map(s=>({...s,id:n(s.id),a:i(s.a),b:i(s.b)})),background:null,start_view:null}}function lu(o,e=""){let t=o.settings.roof;if(!t||t.type==="none")return[];if(t.type===void 0||t.type==="custom")return t.sections??[];let n=sd(o,i=>`${e}roof_${i+1}`);return t.type==="flat"?n.map(i=>({...i,shape:"flat"})):n}function Gm(o,e,t){let n=t.rot?nd(o,t.rot,[0,0]):o,i=r=>[r[0]+t.x,r[1]+t.y];return{...n,id:`${e}${Is}${o.id}`,x0:n.x0+t.x,x1:n.x1+t.x,z0:n.z0+t.y,z1:n.z1+t.y,pivot:n.pivot?i(n.pivot):n.pivot,points:n.points?n.points.map(i):n.points}}function du(o,e){var u;let t=o.floors.map(d=>({...d,rooms:[...d.rooms],openings:[...d.openings],furniture:[...d.furniture],placements:[...d.placements],outdoor:[...d.outdoor??[]],walls:[...d.walls??[]]}));for(let d of e)if((u=d.site)!=null&&u.on)for(let c of d.building.floors){let p=Km(c,d.id,d.site),h=t.find(f=>Math.abs(f.elevation-c.elevation)<qm);if(!h){t.push(p);continue}h.rooms.push(...p.rooms),h.openings.push(...p.openings),h.furniture.push(...p.furniture),h.placements.push(...p.placements),h.outdoor.push(...p.outdoor),h.walls=[...h.walls??[],...p.walls??[]]}t.sort((d,c)=>d.elevation-c.elevation);let n=d=>d.floors.some(c=>c.rooms.some(p=>p.points.length>=3)),i=n(o)?lu(o):[],r=o.settings.roof.type!=="custom"&&o.settings.roof.type!==void 0,s=(o.settings.roof.solar??[]).map(d=>r&&i[0]&&d.face.startsWith("main:")?{...d,face:`${i[0].id}:${d.face.slice(5)}`}:d),a=[...i,...e.filter(d=>{var c;return((c=d.site)==null?void 0:c.on)&&n(d.building)}).flatMap(d=>lu(d.building).map(c=>Gm(c,d.id,d.site)))],l={...o.settings.roof,type:"custom",sections:a,solar:s};return{...o,floors:t,card_templates:[],settings:{...o.settings,start_view:null,roof:l}}}var On=class{others=new Map;watched="";unsubscribe=null;siteOf=null;host;constructor(e){this.host=e}watch(e,t){let n=t.plans.map(s=>s.id).filter(s=>s!==t.planId),i=`${t.planId}|${n.join(",")}`;if(!e||i===this.watched)return;this.watched=i;let r=s=>jo(e,s).then(a=>{!t.plans.some(l=>l.id===s)||s===t.planId||(this.others=new Map(this.others).set(s,ao(a.building)),this.host.requestUpdate())},()=>{});this.others=new Map([...this.others].filter(([s])=>n.includes(s)));for(let s of n)r(s);n.length&&!this.unsubscribe&&vl(e,s=>{s!==t.planId&&t.plans.some(a=>a.id===s)&&r(s)}).then(s=>this.unsubscribe=s,()=>{})}stop(){var e;(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null,this.watched=""}all(e){let t=new Map(this.others);return e.building&&t.set(e.planId,e.building),t}site(e){let t=this.all(e),n=t.get(ye);if(!n)return null;let i=e.plans.filter(a=>{var l;return a.id!==ye&&((l=a.site)==null?void 0:l.on)}).map(a=>({id:a.id,site:a.site,building:t.get(a.id)}));if(i.some(a=>!a.building))return null;let r=[n,...i.flatMap(a=>{var l,u,d;return[a.building,(l=a.site)==null?void 0:l.x,(u=a.site)==null?void 0:u.y,(d=a.site)==null?void 0:d.rot]})];if(this.siteOf&&this.siteOf.key.length===r.length&&this.siteOf.key.every((a,l)=>a===r[l]))return this.siteOf.to;let s=du(n,i.map(a=>({id:a.id,site:a.site,building:a.building})));return this.siteOf={key:r,to:s},s}};var uu={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Hn(o){return uu[o]}function on(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function Ln(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${uu[o]}"/></svg>`}var pu="neonplan3d.roombar_min",Ym="M5 4h14v16H5zM12 4v16M5 12h14",hu="M8 5.5v13l10.5-6.5z",_i=o=>g`<svg class="fp3d-rb-ico" viewBox="0 0 24 24" aria-hidden="true">${gt`<path d=${o} />`}</svg>`,Ps=class extends ue{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},favorites:{type:Boolean},readOnly:{type:Boolean},_min:{state:!0},_fired:{state:!0}};constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.favorites=!1,this.readOnly=!1,this._fired=null;try{this._min=localStorage.getItem(pu)==="1"}catch{this._min=!1}}t(e,t){return T(this.hass,e,t)}setMin(e){this._min=e;try{localStorage.setItem(pu,e?"1":"0")}catch{}}toggleLights(e,t){if(e.stopPropagation(),this.readOnly)return;let[n,i]=fd(t);i.length&&this.hass.callService("light",n,{entity_id:i})}pick(e,t){this.dispatchEvent(new CustomEvent("room-pick",{detail:{floorId:e,roomId:t},bubbles:!0,composed:!0}))}render(){let e=this.building;if(!e||!this.hass)return x;if(this._min)return g`<button class="fp3d-chip fp3d-rb-open" aria-expanded="false" title=${this.t("room_bar")} @click=${()=>this.setMin(!1)}>▴ ${this.t("room_bar_rooms")}</button>`;let t=this.hass,n=Rt(t,e,this.floorId),i=this.favorites?md(t,e):[],r=!this.floorId&&e.floors.length>1,s=a=>{var l;return((l=e.floors.find(u=>u.id===a))==null?void 0:l.name)??""};return g`<div class="fp3d-rb" role="toolbar" aria-label=${this.t("room_bar")}>
      <button class="fp3d-rb-min" aria-expanded="true" title=${this.t("room_bar_hide")} aria-label=${this.t("room_bar_hide")} @click=${()=>this.setMin(!0)}>▾</button>
      ${i.map(a=>{let l=t.states[a.id],u=a.domain!=="homeassistant",d=this.readOnly||ee(l),c=()=>{d||(t.callService(a.domain,a.service,{entity_id:a.id}),this._fired=a.id,setTimeout(()=>this._fired=null,700))};return g`<div class="fp3d-rb-card fp3d-rb-fav ${a.on||this._fired===a.id?"fp3d-rb-on":""} ${d?"fp3d-rb-off":""}">
          <div class="fp3d-rb-top"><b class="fp3d-rb-name">${K(t,a.id)}</b></div>
          <div class="fp3d-rb-row"></div>
          ${u?g`<button class="fp3d-rb-act" ?disabled=${d} @click=${c}>${_i(hu)} ${this.t("room_bar_activate")}</button>`:g`<button class="fp3d-rb-switch" role="switch" aria-checked=${a.on} ?disabled=${d} @click=${c}>
                <span>${a.on?this.t("room_bar_on"):this.t("room_bar_off")}</span><i aria-hidden="true"></i>
              </button>`}
        </div>`})}
      ${i.length&&n.length?g`<span class="fp3d-rb-sep" aria-hidden="true"></span>`:x}
      ${n.map(a=>{let l=a.temp===null&&!a.lights.length&&!a.open&&!a.playing,u=a.lightsOn.length>0;return g`<div
          class="fp3d-rb-card ${l?"fp3d-rb-quiet":""} ${a.active?"fp3d-rb-active":""} ${a.roomId===this.roomId?"fp3d-rb-sel":""}"
          role="button"
          tabindex="0"
          title=${r?`${a.name} \xB7 ${s(a.floorId)}`:a.name}
          aria-pressed=${a.roomId===this.roomId}
          @click=${()=>this.pick(a.floorId,a.roomId)}
          @keydown=${d=>d.target===d.currentTarget&&(d.key==="Enter"||d.key===" ")&&(d.preventDefault(),this.pick(a.floorId,a.roomId))}
        >
          <div class="fp3d-rb-top">
            <b class="fp3d-rb-name">${a.name}</b>
            ${a.temp===null?x:g`<span class="fp3d-rb-temp">${ie(t,a.temp,1)}°</span>`}
          </div>
          <div class="fp3d-rb-row">
            ${r?g`<span class="fp3d-rb-floor">${s(a.floorId)}</span>`:x}
            ${a.humidity===null?x:g`<span>${ie(t,a.humidity,0)} %</span>`}
            ${a.open?g`<span class="fp3d-rb-state fp3d-rb-win" title=${this.t("room_bar_open")}>${_i(Ym)}${a.open>1?a.open:""}</span>`:x}
            ${a.playing?g`<span class="fp3d-rb-state fp3d-rb-play" title=${this.t("room_bar_playing")}>${_i(hu)}</span>`:x}
          </div>
          ${a.lights.length?g`<button
                class="fp3d-rb-switch"
                role="switch"
                aria-checked=${u}
                aria-label=${`${this.t("room_bar_light")} ${a.name}`}
                ?disabled=${this.readOnly}
                @click=${d=>this.toggleLights(d,a)}
                @keydown=${d=>d.stopPropagation()}
              >
                <span>${_i(Hn("light"))} ${u?`${this.t("room_bar_light")} \xB7 ${this.t("room_bar_lights",{n:a.lightsOn.length})}`:this.t("room_bar_light")}</span><i aria-hidden="true"></i>
              </button>`:g`<div class="fp3d-rb-switch-gap"></div>`}
        </div>`})}
    </div>`}static styles=[He,je,fe`
      :host {
        display: block;
        pointer-events: none;
      }
      .fp3d-rb,
      .fp3d-rb-open {
        pointer-events: auto;
      }
      /* one row of even cards, solid like the room panel, scrolling sideways */
      .fp3d-rb {
        display: flex;
        align-items: stretch;
        gap: 8px;
        padding: 2px;
        overflow-x: auto;
        scrollbar-width: none;
        overscroll-behavior-x: contain;
      }
      .fp3d-rb::-webkit-scrollbar {
        display: none;
      }
      .fp3d-rb-min {
        flex: none;
        width: 26px;
        padding: 0;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        font: inherit;
        cursor: pointer;
      }
      .fp3d-rb-sep {
        flex: none;
        width: 1px;
        margin: 8px 0;
        background: var(--fp3d-line);
      }
      .fp3d-rb-card {
        flex: none;
        box-sizing: border-box;
        width: 164px;
        height: 96px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 9px 10px 8px 12px;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        box-shadow: var(--fp3d-shadow);
        color: var(--fp3d-text);
        cursor: pointer;
        user-select: none;
      }
      .fp3d-rb-top {
        display: flex;
        align-items: baseline;
        gap: 6px;
        min-width: 0;
      }
      .fp3d-rb-name {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 13px;
        font-weight: 700;
      }
      .fp3d-rb-temp {
        flex: none;
        color: var(--fp3d-accent);
        font-family: var(--fp3d-title-font);
        font-size: 19px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-rb-row {
        display: flex;
        align-items: center;
        gap: 8px;
        min-height: 16px;
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      .fp3d-rb-floor {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rb-ico {
        width: 14px;
        height: 14px;
        flex: none;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.9;
        stroke-linecap: round;
        stroke-linejoin: round;
        vertical-align: -2px;
      }
      .fp3d-rb-state {
        display: inline-flex;
        align-items: center;
        gap: 2px;
      }
      .fp3d-rb-win {
        color: var(--fp3d-danger);
      }
      .fp3d-rb-play {
        color: var(--fp3d-accent);
      }
      /* the switch at the foot of a card: a label and a small toggle */
      .fp3d-rb-switch,
      .fp3d-rb-act {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        height: 26px;
        padding: 0 4px 0 9px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-muted);
        font: inherit;
        font-size: 11px;
        cursor: pointer;
      }
      .fp3d-rb-switch span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rb-switch i {
        flex: none;
        position: relative;
        width: 28px;
        height: 16px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.14);
        transition: background 0.15s;
      }
      .fp3d-rb-switch i::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: #c9d6ee;
        transition: transform 0.15s;
      }
      .fp3d-rb-switch[aria-checked="true"] {
        color: var(--fp3d-warm);
        border-color: rgba(255, 181, 71, 0.45);
        background: rgba(255, 181, 71, 0.1);
      }
      .fp3d-rb-switch[aria-checked="true"] i {
        background: var(--fp3d-warm);
      }
      .fp3d-rb-switch[aria-checked="true"] i::after {
        transform: translateX(12px);
        background: #1a1200;
      }
      .fp3d-rb-act {
        justify-content: center;
        padding: 0 10px;
        color: var(--fp3d-text);
      }
      .fp3d-rb-switch:disabled,
      .fp3d-rb-act:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-rb-switch-gap {
        height: 26px;
      }
      /* something on or open: a warm edge; the open room: the accent */
      .fp3d-rb-active,
      .fp3d-rb-on {
        border-color: rgba(255, 181, 71, 0.65);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.2), var(--fp3d-shadow);
      }
      .fp3d-rb-sel {
        border-color: var(--fp3d-accent);
        box-shadow: 0 0 0 1px var(--fp3d-accent) inset, var(--fp3d-shadow);
      }
      .fp3d-rb-quiet .fp3d-rb-name {
        color: var(--fp3d-muted);
      }
      .fp3d-rb-fav {
        cursor: default;
      }
      .fp3d-rb-off {
        opacity: 0.55;
      }
      @media (max-width: 600px) {
        .fp3d-rb-card {
          width: 132px;
          height: 86px;
          padding: 7px 8px 6px 10px;
        }
        .fp3d-rb-temp {
          font-size: 16px;
        }
      }
    `]};customElements.get("fp3d-room-bar")||customElements.define("fp3d-room-bar",Ps);function Es(o){return(o==null?void 0:o.settings.person_look)??"figure"}function yi(o){return Es(o)!=="off"}var fu=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function vi(o){let e=0;for(let t of o)e=e*31+t.charCodeAt(0)>>>0;return fu[e%fu.length]}var mu=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Qm(o,e,t){var i,r;let n=mu(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let s of e.floors)for(let a of s.rooms)if([a.name,a.area_id??"",a.area_id?((r=(i=o.areas)==null?void 0:i[a.area_id])==null?void 0:r.name)??"":""].filter(Boolean).map(mu).includes(n))return{floorId:s.id,room:a};return null}function gu(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Jm(o,e){return["home","on","unknown","unavailable",""].includes(o)?!1:!(e&&o!=="not_home"&&Xm(e,o))}function Xm(o,e){var i;let t=(i=o.states["zone.home"])==null?void 0:i.attributes;if(!t||typeof t.latitude!="number"||typeof t.longitude!="number")return!1;let n=Math.PI/180;for(let[r,s]of Object.entries(o.states)){if(!r.startsWith("zone.")||r==="zone.home")continue;let a=s.attributes;if(a.friendly_name!==e||typeof a.latitude!="number"||typeof a.longitude!="number")continue;let l=(a.latitude-t.latitude)*n,u=(a.longitude-t.longitude)*n,d=Math.sin(l/2)**2+Math.cos(t.latitude*n)*Math.cos(a.latitude*n)*Math.sin(u/2)**2;if(2*6371e3*Math.asin(Math.sqrt(d))<=(typeof t.radius=="number"?t.radius:100)+(typeof a.radius=="number"?a.radius:0))return!0}return!1}function bu(o,e){let t=[],n=new Map;for(let i of e.presence){let r=o.states[i.person];if(!r||!i.sensor||r.state!=="home"&&r.state!=="on")continue;let s=o.states[i.sensor];if(!s)continue;let a=Qm(o,e,s.state);if(!a)continue;let l=n.get(a.room.id)??0;n.set(a.room.id,l+1);let[u,d]=Rr(a.room.points),c=-Math.PI/2+.9+l*1.15,p=.75,h=r.attributes.friendly_name??i.person;t.push({id:i.person,name:h,initials:gu(h),picture:r.attributes.entity_picture??null,floorId:a.floorId,roomId:a.room.id,x:u+Math.cos(c)*p,z:d+Math.sin(c)*p})}return t}function wi(o,e,t=new Set,n=Date.now()){let i=[];for(let[c,p]of Object.entries(o.states)){let h=p.attributes;if(!c.startsWith("sensor.")||h.neonplan_locate!==!0||typeof h.room_id!="string")continue;let f=null;for(let v of e.floors){let $=le(v).find(y=>y.id===h.room_id);$&&(f={floorId:v.id,room:$})}if(!f)continue;let m=typeof h.last_seen=="string"?Date.parse(h.last_seen):NaN,b=typeof h.since=="string"?Date.parse(h.since):NaN;i.push({entityId:c,name:typeof h.device_name=="string"?h.device_name:c,person:typeof h.person=="string"?h.person:null,floorId:f.floorId,room:f.room,seen:Number.isFinite(m)?m:0,since:Number.isFinite(b)?b:0,probability:typeof h.probability=="number"?h.probability:0,worn:h.wearable===!0})}let r=[],s=new Map,a=new Map,l=(c,p)=>{let h=s.get(c.room.id)??0;if(s.set(c.room.id,h+1),!p.thing){let w=a.get(c.room.id);if(!w){try{w=og(o,e,c.floorId,c.room)}catch{w=[]}a.set(c.room.id,w)}let S=w.shift();for(;S&&!B(S,c.room.points);)S=w.shift();if(S){r.push({...p,floorId:c.floorId,roomId:c.room.id,x:S[0],z:S[1]});return}}let[f,m]=Rr(c.room.points),b=-Math.PI/2+.9+h*1.15,v=[f+Math.cos(b)*.75,m+Math.sin(b)*.75],[$,y]=B(v,c.room.points)?v:[f,m];r.push({...p,floorId:c.floorId,roomId:c.room.id,x:$,z:y})},u=(c,p)=>l(c,{id:c.entityId,name:c.name,initials:c.name.slice(0,1).toUpperCase(),picture:null,color:p,entity:c.entityId,tag:c.name,thing:!0}),d=new Map;for(let c of i)c.person?d.set(c.person,[...d.get(c.person)??[],c]):u(c,vi(c.entityId));for(let[c,p]of d){if(t.has(c))continue;let h=o.states[c];if(h&&Jm(h.state,o)){for(let w of p)u(w,vi(c));continue}let f=w=>w.reduce((S,I)=>I.seen>S.seen?I:S),m=p.filter(w=>w.worn&&n-w.seen<12e4),b=f(m.length?m:p),v=w=>n-w.seen<3e4&&n-b.seen<3e4&&w.since>=b.since-12e4,$=null;if(b.worn){let w=p.filter(I=>!I.worn&&I.room.id!==b.room.id&&v(I)),S=w.length?w.reduce((I,P)=>P.probability>I.probability?P:I):null;S&&n-b.since>=6e5&&S.since>b.since+12e4?($=b,b=S):S&&S.probability>b.probability+.15&&(b=S)}let y=(h==null?void 0:h.attributes.friendly_name)??b.name;l(b,{id:c,name:y,initials:gu(y),picture:(h==null?void 0:h.attributes.entity_picture)??null,color:vi(c),entity:b.entityId,tag:y.split(/\s+/)[0]});for(let w of p)w===b||w.room.id===b.room.id||w!==$&&(w.worn&&n-w.seen<12e4||v(w))||u(w,vi(c))}return r}var Zm=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],eg=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function tg(o,e){let t=[],[n,i]=Ve(e.points),r=(s,a)=>s.points.some((l,u)=>{let d=s.points[(u+1)%s.points.length],[c,p]=[d[0]-l[0],d[1]-l[1]],h=c*c+p*p||1,f=Math.max(0,Math.min(1,((a[0]-l[0])*c+(a[1]-l[1])*p)/h));return Math.hypot(l[0]+f*c-a[0],l[1]+f*p-a[1])<.3});for(let s of o.openings){if(s.wall||s.type==="window"&&s.sill>.3||s.type==="garage")continue;let a=o.rooms.find(f=>f.id===s.room_id);if(!a)continue;let l=a.points[s.edge],u=a.points[(s.edge+1)%a.points.length];if(!l||!u)continue;let d=Math.hypot(u[0]-l[0],u[1]-l[1])||1,c=[l[0]+(u[0]-l[0])*s.offset/d,l[1]+(u[1]-l[1])*s.offset/d];if(!r(e,c))continue;let p=o.rooms.find(f=>f.id!==e.id&&r(f,c)),h=.6/(Math.hypot(n-c[0],i-c[1])||1);t.push({to:p?Nn(p.name):null,spot:[c[0]+(n-c[0])*h,c[1]+(i-c[1])*h]})}return t}var ng=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],Nn=o=>o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function og(o,e,t,n){var u,d;let i=e.floors.find(c=>c.id===t);if(!i||!n.area_id)return[];let r=i.furniture.filter(c=>B([c.x,c.z],n.points)),s=tg(i,n),a=[],l=new Set([...Nn(n.name),...Nn(((d=(u=o.areas)==null?void 0:u[n.area_id])==null?void 0:d.name)??""),...Nn(n.area_id),...ng]);for(let[c,p]of Object.entries(o.states)){if(!c.startsWith("binary_sensor.")||p.state!=="on")continue;let h=p.attributes.device_class;if(h!=="occupancy"&&h!=="presence"||qe(o,c)!==n.area_id)continue;let m=new Set(Nn(String(p.attributes.friendly_name??c.slice(14))).filter(y=>!l.has(y))),b=r.find(y=>y.name&&Nn(y.name).some(w=>m.has(w))||Zm.some(([w,S])=>w.test(y.type.split(":").pop()??"")&&S.some(I=>m.has(I)))),v=b?null:s.find(y=>y.to?y.to.some(w=>m.has(w)):[...m].some(w=>eg.some(S=>w.includes(S)))),$=b?[b.x,b.z]:v?v.spot:null;$&&!a.some(([y,w])=>y===$[0]&&w===$[1])&&a.push($)}return a}function _u(o,e,t,n){let i=new Map,r=s=>{var a;return!!s&&((a=o.states[s])==null?void 0:a.state)==="on"};for(let s of e.floors){let a=new Set;for(let u of s.rooms)for(let d of ei(o,Ie(o,u.area_id)))V(d)==="light"&&a.add(d);for(let u of s.placements)V(u.entity_id)==="light"&&a.add(u.entity_id);let l=s.openings.filter(u=>{let d=t.get(u.id);if(!d)return!1;if(u.type==="garage")return(vt(o,d,"garage").cover??1)<.95;if(u.type==="door")return r(d.contact)||r(d.contact2??null);let c=vt(o,d,"window");return c.open>.5||c.tilt>.5||c.open2>.5||c.tilt2>.5}).length;i.set(s.id,{rooms:s.rooms.length,lightsOn:[...a].filter(u=>{var d;return((d=o.states[u])==null?void 0:d.state)==="on"}).length,open:l,persons:n.filter(u=>u.floorId===s.id).length})}return i}function vu(o,e){let t=[e.rooms===1?T(o,"floor_rooms_one"):T(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(T(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(T(o,"floor_open",{n:e.open})),e.persons&&t.push(T(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var Ht=(o,e)=>T(o,e),yu=new Set;function wu(o){yu=o}var ig={open:"closed",closed:"open",opening:"closing",closing:"opening"};function Ae(o,e){var n,i;if(!e||ee(e))return Ht(o,"state_unavailable");let t=e.attributes;switch(V(e.entity_id)){case"light":return e.state!=="on"?Ht(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:Ht(o,"state_on");case"switch":case"fan":return Ht(o,e.state==="on"?"state_on":"state_off");case"cover":{let r=yu.has(e.entity_id);return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${r?100-t.current_position:t.current_position} %`:xi(o,r?ig[e.state]??e.state:e.state)}case"climate":{let r=typeof t.current_temperature=="number"?`${ie(o,t.current_temperature,1)} ${o?Ye(o):"\xB0C"}`:null;return e.state==="off"?r?`${r} \xB7 ${Ht(o,"state_off")}`:Ht(o,"state_off"):r??xi(o,e.state)}case"media":{let r=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",s=[t.app_name,t.media_title,t.source].find(a=>typeof a=="string"&&a);return r&&s?s:xi(o,e.state)}case"lock":case"camera":return xi(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?Ht(o,e.state==="on"?"state_open":"state_closed"):Ht(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let r=Number(e.state),s=t.unit_of_measurement??"",a=((i=(n=o==null?void 0:o.entities)==null?void 0:n[e.entity_id])==null?void 0:i.display_precision)??1;return Number.isFinite(r)?`${ie(o,r,a)}${s?` ${s}`:""}`:e.state}default:return""}}function xi(o,e){let t=`state_${e}`,n=T(o,t);return n===t?e:n}function xu(o,e){var i,r;let t=[],n=new Set(e.floors.flatMap(s=>s.furniture.map(a=>a.look_of).filter(a=>!!a)));for(let s of e.floors)for(let a of s.placements){let l=V(a.entity_id),u=o.states[a.entity_id];if(!l||!u)continue;let d=s.rooms.find(p=>p.points.length>=3&&B([a.x,a.z],p.points))??null,c=d!=null&&d.area_id?(r=(i=o.areas)==null?void 0:i[d.area_id])==null?void 0:r.name:void 0;t.push({id:a.entity_id,floorId:s.id,roomId:(d==null?void 0:d.id)??null,x:a.x,z:a.z,y:a.y??xn(l,s.height,a.mount??null),lamp:l==="light"?a.mount??"ceiling":null,model:l==="camera"?a.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,...l==="camera"&&n.has(a.entity_id)?{ownLook:!0}:{},motion:l==="camera"?rg(o,a.entity_id):void 0,fov:a.fov??void 0,reach:a.reach??void 0,tilt:a.tilt??void 0,rotation:a.rotation??0,icon:a.icon?on(a.icon):Ln(l),cone:l==="camera"&&a.cone===!1?!1:void 0,name:a.name||K(o,a.entity_id,c),ownName:a.name||void 0,showName:!!a.show_name,text:Ae(o,u),active:Qe(u),unavailable:ee(u),glow:l==="light"?Ts(_t(u),a.glow_scale):null,show:a.marker??void 0,fixed:!!a.locked})}return t}function wo(o,e){var n;let t=`${e} ${String(((n=o.states[e])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function rg(o,e){return ot(o,e).some(t=>{var n;return((n=o.states[t])==null?void 0:n.state)==="on"})}var ku=new Map;function $u(o){ku=new Map((o==null?void 0:o.floors.flatMap(e=>e.placements.filter(t=>Array.isArray(t.detect_sensors)).map(t=>[t.entity_id,t.detect_sensors])))??[])}function ot(o,e){return ku.get(e)??sg(o,e)}function sg(o,e){var n,i;let t=(i=(n=o.entities)==null?void 0:n[e])==null?void 0:i.device_id;return t?Object.values(o.entities??{}).filter(r=>r.device_id===t&&r.entity_id.startsWith("binary_sensor.")).map(r=>r.entity_id).filter(r=>{var s;return["motion","occupancy","presence"].includes(String((s=o.states[r])==null?void 0:s.attributes.device_class))}):[]}function Su(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function Te(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Dn(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function Ts(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}function ki(o,e,t){let{shown:n,more:i}=Mn(o,e,t),r=(f,m)=>B([f,m],t.points),s=new Set(e.furniture.filter(f=>{var m;return r(f.x,f.z)&&so(f.type)&&((m=f.entity)==null?void 0:m.startsWith("switch."))}).map(f=>f.entity)),a=[],l=[],u=[],d=[],c=[];for(let f of new Set([...n,...i])){let m=o.states[f];if(!m||ee(m))continue;let b=f.split(".")[0];b==="light"&&m.state==="on"?a.push(f):b==="fan"&&m.state==="on"?l.push(f):b==="switch"&&m.state==="on"&&s.has(f)?u.push(f):b==="media_player"&&m.state!=="off"&&m.state!=="standby"&&(m.attributes.device_class==="tv"?d.push(f):m.state==="playing"&&c.push(f))}let p=[],h=(f,m,b)=>b.length&&p.push({domain:f,service:m,data:{entity_id:b}});return h("light","turn_off",a),h("fan","turn_off",l),h("switch","turn_off",u),h("media_player","turn_off",d),h("media_player","media_pause",c),p}function $i(o){return o.reduce((e,t)=>e+t.data.entity_id.length,0)}function Si(o,e){let t=e.cleaning;if(!t||!o.states[t])return null;let[n,i]=yt(t);return{domain:n,service:i,data:{entity_id:t}}}function Mu(o,e){if(!e)return null;for(let t of o){let n=t.rooms.find(i=>i.area_id===e);if(n)return{floor:t,room:n}}return null}var ag=4,lg=3e3,cg=8,dg=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],ug=o=>g`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Hn(o)} />
  </svg>`,Mi={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},As=o=>g`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,zs=class extends ue{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},walk:{type:Boolean},collapsible:{type:Boolean},compact:{type:Boolean,reflect:!0},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},lg)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return T(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}renderRoomActions(e){if(this.readOnly)return x;let t=Si(this.hass,e),n=this.floor?ki(this.hass,this.floor,e):[];if(!t&&!n.length)return x;let i=r=>r.forEach(s=>this.call(s.domain,s.service,s.data));return g`<div class="fp3d-rp-sheets">
      ${t?g`<button class="fp3d-rp-sheet" @click=${()=>i([t])}><span aria-hidden="true">🧹</span>${this.t("panel_clean")}</button>`:x}
      ${n.length?g`<button class="fp3d-rp-sheet" @click=${()=>i(n)}><span aria-hidden="true">⏻</span>${this.t("panel_everything_off",{n:$i(n)})}</button>`:x}
    </div>`}get areaName(){var e,t,n;return(e=this.room)!=null&&e.area_id?(n=(t=this.hass.areas)==null?void 0:t[this.room.area_id])==null?void 0:n.name:void 0}name(e){return K(this.hass,e,this.areaName,!0)}nameButton(e){return g`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&Te(this,e)}>${this.name(e)}</button>`}askFor(e){var t;return!((t=this.confirmEntities)!=null&&t.has(e))||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let i=()=>{var r;this.readOnly||(r=this.confirmEntities)!=null&&r.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return g`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${ee(e)}
      @click=${i}
    ></button>`}renderHere(e){if(!this.building||!lt("locate")||!yi(this.building))return x;let t=wi(this.hass,this.building).filter(n=>n.roomId===e.id);return t.length?g`<p class="fp3d-rp-facts fp3d-rp-here">
      ${t.map((n,i)=>g`${i?", ":""}<span style="color:${n.color}">●</span> ${n.name}`)}
    </p>`:x}willUpdate(e){var t,n;this.collapsible&&(e.has("room")||e.has("collapsible"))&&((t=e.get("room"))==null?void 0:t.id)!==((n=this.room)==null?void 0:n.id)&&(this.compact=!0),!this.collapsible&&this.compact&&(this.compact=!1)}render(){var w;let e=this.room;if(!e||!this.hass)return x;let t=Ie(this.hass,e.area_id),n=this.memo,{shown:i,more:r}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?Mn(this.hass,this.floor,e,this.building?ai(this.building,e.id):[]):{shown:t,more:[]}},s=Wr(this.hass,r).map(S=>S.primary),a=s.length,l=this._showAll?[...i,...s]:i,u=S=>l.filter(I=>S.includes(V(I))).map(I=>this.hass.states[I]).filter(I=>!!I),d=u(["light"]),c=u(["cover"]),p=u(["climate"]),h=u(["media"]),f=u(["switch","fan","lock"]),m=u(["sensor","binary"]),b=u(["camera"]);this.hasCameras=b.length>0;let v=u(["scene","script"]),$=this.facts(p),y=d.filter(S=>S.state==="on");return g`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${$.length?g`<p class="fp3d-rp-facts">${$.join(" \xB7 ")}</p>`:x}
          ${this.renderHere(e)}
          ${this.renderRoomActions(e)}
          ${this.readOnly?g`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:x}
          ${(w=this.sheets)!=null&&w.length&&!this.readOnly?g`<div class="fp3d-rp-sheets">
                ${this.sheets.map(S=>g`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:S.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${S.icon}</span>${S.title}
                  </button>`)}
              </div>`:x}
        </div>
        ${this.walk&&!this.readOnly&&e.points.length>=3?g`<button class="fp3d-rp-close fp3d-rp-walk" title=${this.t("walk_start")} aria-label=${this.t("walk_start")} @click=${()=>this.fire("walk-here")}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
            </button>`:x}
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      ${this.collapsible&&e.area_id&&l.length?g`<button class="fp3d-rp-fold" aria-expanded=${!this.compact} @click=${()=>this.compact=!this.compact}>
            <span aria-hidden="true">${this.compact?"\u25B4":"\u25BE"}</span>
            ${this.compact?`${this.t("panel_fold_open")}${y.length?` \xB7 ${this.t("panel_fold_lights",{n:y.length})}`:""}`:this.t("panel_fold_close")}
          </button>`:x}
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?x:g`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:g`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${d.length?this.section("panel_lights",d.map(S=>this.lightRow(S)),g`${y.length<d.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:d.filter(S=>!ee(S)).map(S=>S.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:x}${y.length?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:y.map(S=>S.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:x}`):x}
        ${c.length?this.section("panel_covers",c.map(S=>this.coverRow(S)),c.length>1?g`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(c,"open")}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(c,"close")}>
                      ${this.t("panel_all_close")}
                    </button>`:x):x}
        ${p.length?this.section("panel_climate",p.map(S=>this.climateRow(S))):x}
        ${h.length?this.section("panel_media",h.map(S=>this.mediaRow(S))):x}
        ${f.length?this.section("panel_switches",f.map(S=>this.switchRow(S))):x}
        ${b.length?this.section("panel_cameras",b.map(S=>this.cameraTile(S))):x}
        ${m.length?this.section("panel_sensors",m.map(S=>this.sensorRow(S))):x}
        ${v.length?this.section("panel_scenes",[g`<div class="fp3d-rp-scenes">
                  ${v.map(S=>g`<button
                      class="fp3d-btn"
                      ?disabled=${ee(S)}
                      @click=${()=>this.call(V(S.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:S.entity_id})}
                    >
                      ${this.name(S.entity_id)}
                    </button>`)}
                </div>`]):x}
        ${a?g`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:a})}
            </button>`:x}
      </div>
    </section>`}facts(e){var l;let t=[],n=this.room,i=(u,d)=>{var f;let c=Ze(this.hass,this.floor,n,u);if(c===null)return null;if(u==="temperature")return`${ie(this.hass,Tt(this.hass,c),1)} ${Ye(this.hass)}`;let p=Nr(this.hass,this.floor,n,u)[0],h=((f=this.hass.states[p])==null?void 0:f.attributes.unit_of_measurement)??d;return`${ie(this.hass,c,1)} ${h}`},r=e.find(u=>typeof u.attributes.current_temperature=="number"),s=i("temperature","\xB0C");s?t.push(s):r&&((l=n.climate)==null?void 0:l.temperature)!=="none"&&t.push(`${ie(this.hass,r.attributes.current_temperature,1)} ${Ye(this.hass)}`);let a=i("humidity","%");return a&&t.push(a),t}section(e,t,n=x){return g`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}rowIcon(e,t){var s,a;let n=this.floor,i=((s=n==null?void 0:n.furniture.find(l=>l.icon&&(l.entity===t||l.fan_entity===t)))==null?void 0:s.icon)??((a=n==null?void 0:n.placements.find(l=>l.icon&&l.entity_id===t))==null?void 0:a.icon);if(!i)return ug(e);let r=i.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"");return g`<ha-icon icon=${`mdi:${r}`} style="--mdc-icon-size:18px"></ha-icon>`}lightRow(e){let t=e.attributes,n=e.state==="on",i=t.supported_color_modes??[],r=i.some(p=>p!=="onoff"),s=i.includes("color_temp"),a=i.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,u=t.min_color_temp_kelvin??2200,d=t.max_color_temp_kelvin??6500,c=e.entity_id;return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${this.rowIcon("light",c)}</span>
      ${this.nameButton(c)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:c}))}
      ${n&&r?g`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:c,brightness_pct:Number(p.target.value)})}
          /></label>`:x}
      ${n&&s?g`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${u}
              max=${d}
              step="50"
              .value=${String(t.color_temp_kelvin??u)}
              @change=${p=>this.call("light","turn_on",{entity_id:c,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:x}
      ${n&&a?g`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${dg.map(p=>g`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:c,rgb_color:p})}
              ></button>`)}
          </div>`:x}
    </div>`}covers(e,t){let n=e.filter(i=>!ee(i)).map(i=>i.entity_id);for(let i of Xo(this.hass,n,t))this.call("cover",i.service,i.data)}coverRow(e){var s;let t=e.attributes,n=t.supported_features??0,i=e.entity_id,r=ee(e);return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${this.rowIcon("cover",e.entity_id)}</span>
      ${this.nameButton(i)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.covers([e],"open")}>${this.t("cover_open")}</button>
        ${n&cg||n&64&&!(n&3)?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.covers([e],"stop")}>${this.t("cover_stop")}</button>`:x}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(i)&&this.covers([e],"close")}>${this.t("cover_close")}</button>
      </div>
      ${n&ag&&typeof t.current_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_position)}
              @change=${a=>this.call("cover","set_cover_position",{entity_id:i,position:Number(a.target.value)})}
          /></label>`:x}
      ${n&128&&typeof t.current_tilt_position=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String($n(e,po(this.building,i))??0)}
              @change=${a=>{let l=Number(a.target.value);this.call("cover","set_cover_tilt_position",{entity_id:i,tilt_position:po(this.building,i)?100-l:l})}}
          /></label>`:Jo((s=this.hass)==null?void 0:s.states[i])?g`<div class="fp3d-rp-buttons">
              ${n&16?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_open")}</button>`:x}
              ${n&32?g`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:i})}>${this.t("cover_tilt_close")}</button>`:x}
            </div>`:x}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,i=typeof t.temperature=="number"?t.temperature:null,r=t.target_temp_step??.5,s=t.min_temp??5,a=t.max_temp??30,l=t.hvac_modes??[],u=d=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(a,Math.max(s,Math.round(d/r)*r))});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${this.rowIcon("climate",e.entity_id)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${i!==null?g`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>u(i-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${ie(this.hass,i,1)} ${Ye(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>u(i+r)}>+</button>
          </div>`:x}
      ${l.length>1?g`<div class="fp3d-rp-chips">
            ${l.map(d=>g`<button
                class="fp3d-chip"
                aria-pressed=${e.state===d}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:d})}
              >
                ${this.stateLabel(d)}
              </button>`)}
          </div>`:x}
    </div>`}stateOf(e,t=Ae(this.hass,e)){var i,r;if((r=(i=this.room)==null?void 0:i.no_state)!=null&&r.includes(e.entity_id))return"";let n=V(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,i=ee(e)||e.state==="off",r=[t.media_title,t.media_artist].filter(s=>typeof s=="string"&&s).join(" \xB7 ");return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${this.rowIcon("media",e.entity_id)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${r?g`<p class="fp3d-rp-media fp3d-rp-wide">${r}</p>`:x}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${As(Mi.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${ee(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${As(e.state==="playing"?Mi.pause:Mi.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${As(Mi.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?g`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${s=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(s.target.value)/100})}
          /></label>`:x}
    </div>`}switchRow(e){let t=e.entity_id,n=V(t),i=t.slice(0,t.indexOf(".")),r=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",s=()=>n==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:t}):this.call(i,"toggle",{entity_id:t});return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${r?"fp3d-rp-on":""}">${this.rowIcon(n,t)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,r,s)}
    </div>`}cameraTile(e){var r;let t=e.attributes.entity_picture,n=t&&!ee(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,i=(r=this.floor)==null?void 0:r.placements.some(s=>s.entity_id===e.entity_id);return g`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&Te(this,e.entity_id)}>
        ${n?g`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:g`<span class="fp3d-rp-note">${Ae(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${i?g`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${q("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:x}
    </div>`}sensorRow(e){let t=V(e.entity_id),n=t==="binary"&&e.state==="on";return g`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${this.rowIcon(t,e.entity_id)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[He,je,fe`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
        min-height: 0;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        box-shadow: var(--fp3d-shadow);
        overflow: hidden;
      }
      /* time travel: the controls show the past and take no touches (the list still scrolls) */
      .fp3d-rp-ro .fp3d-rp-body :is(button, input, select) {
        pointer-events: none;
      }
      .fp3d-rp-ro-note {
        color: #ffb020;
      }
      .fp3d-rp-head {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 14px 14px 10px 16px;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-head > div {
        flex: 1;
        min-width: 0;
      }
      .fp3d-rp-sheets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-rp-sheet {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        min-height: 32px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 12%, transparent);
        color: inherit;
        font: inherit;
        font-size: 13px;
        cursor: pointer;
      }
      .fp3d-rp-sheet:hover {
        border-color: var(--fp3d-accent, #37e0ff);
      }
      h2 {
        margin: 0;
        font: 700 21px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-rp-facts {
        margin: 2px 0 0;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      @media (pointer: coarse) {
        .fp3d-rp-close {
          width: 40px;
          height: 40px;
        }
        .fp3d-rp-swatch {
          width: 36px;
          height: 36px;
        }
        .fp3d-rp-small {
          min-height: 36px;
        }
      }
      .fp3d-rp-close {
        display: grid;
        place-items: center;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        border: none;
        background: rgba(255, 255, 255, 0.06);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-rp-fold {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        min-height: 40px;
        padding: 6px 14px;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
      }
      :host([compact]) .fp3d-rp-fold {
        border-bottom: none;
      }
      :host([compact]) .fp3d-rp-body {
        display: none;
      }
      .fp3d-rp-walk {
        margin-right: 6px;
        color: #37e0ff;
      }
      .fp3d-rp-body {
        overflow-y: auto;
        padding: 6px 14px 16px 16px;
        display: grid;
        gap: 14px;
        overscroll-behavior: contain;
      }
      .fp3d-rp-note {
        color: var(--fp3d-muted);
        font-size: 13px;
        margin: 8px 0 0;
      }
      .fp3d-rp-sec-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
      }
      h3 {
        margin: 0;
        font-size: 11.5px;
        font-weight: 600;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-row {
        display: grid;
        grid-template-columns: 28px 1fr auto auto;
        align-items: center;
        gap: 6px 10px;
        padding: 9px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-rp-row:last-child {
        border-bottom: none;
      }
      .fp3d-rp-row > :nth-child(n + 5),
      .fp3d-rp-row > .fp3d-rp-wide {
        grid-column: 2 / -1;
      }
      .fp3d-rp-icon {
        display: grid;
        place-items: center;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        color: var(--fp3d-muted);
        background: rgba(91, 124, 255, 0.12);
      }
      .fp3d-rp-on {
        color: #2a1a00;
        background: var(--fp3d-warm);
        box-shadow: 0 0 14px rgba(255, 181, 71, 0.55);
      }
      .fp3d-rp-name {
        font: inherit;
        font-weight: 500;
        color: var(--fp3d-text);
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-rp-state {
        font-size: 12.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
        max-width: 110px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-rp-row > .fp3d-rp-state:last-child {
        grid-column: 3 / -1;
        justify-self: end;
      }
      .fp3d-switch {
        position: relative;
        width: 44px;
        height: 26px;
        border-radius: 999px;
        border: none;
        background: rgba(255, 255, 255, 0.1);
        cursor: pointer;
      }
      .fp3d-switch::after {
        content: "";
        position: absolute;
        top: 3px;
        left: 3px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #e6eefc;
        transition: transform 0.2s ease;
      }
      .fp3d-switch[aria-checked="true"] {
        background: var(--fp3d-warm);
      }
      .fp3d-switch[aria-checked="true"]::after {
        transform: translateX(18px);
      }
      .fp3d-switch:disabled {
        opacity: 0.4;
        cursor: default;
      }
      .fp3d-rp-slider {
        display: grid;
        grid-template-columns: 110px 1fr;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-rp-slider input {
        width: 100%;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-rp-ct input {
        accent-color: var(--fp3d-warm);
      }
      .fp3d-rp-swatches,
      .fp3d-rp-buttons,
      .fp3d-rp-chips,
      .fp3d-rp-scenes {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-rp-swatch {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        border: 1px solid rgba(255, 255, 255, 0.2);
        background: var(--c);
        box-shadow: 0 0 10px var(--c);
        cursor: pointer;
      }
      .fp3d-rp-camera {
        position: relative;
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        margin: 6px 0;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        overflow: hidden;
        background: #05080f;
        cursor: pointer;
      }
      .fp3d-rp-camera img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-rp-camera-wrap {
        position: relative;
      }
      .fp3d-rp-look {
        position: absolute;
        right: 8px;
        bottom: 12px;
        padding: 4px 10px;
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        background: rgba(7, 11, 20, 0.8);
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-rp-camera-name {
        position: absolute;
        left: 8px;
        bottom: 6px;
        padding: 2px 8px;
        border-radius: 8px;
        background: rgba(7, 11, 20, 0.75);
        color: var(--fp3d-text);
        font-size: 12px;
        font-weight: 600;
      }
      .fp3d-rp-more {
        justify-self: start;
      }
      .fp3d-rp-small {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 5px 10px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-rp-stepper {
        display: flex;
        align-items: center;
        gap: 10px;
        font-variant-numeric: tabular-nums;
        font-weight: 600;
      }
      .fp3d-rp-stepper small {
        color: var(--fp3d-muted);
        font-weight: 500;
        margin-right: 4px;
      }
      .fp3d-rp-stepper .fp3d-btn {
        width: 36px;
        padding: 4px 0;
        font-size: 17px;
      }
      .fp3d-rp-chips .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
        min-height: 30px;
        padding: 4px 11px;
        font-size: 13px;
      }
      .fp3d-rp-media {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      button:focus-visible,
      input:focus-visible {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",zs);function Iu(o,e,t,n,i=!1){let r=s=>{let a=s==null?void 0:s.value.trim();!s||!a||(s.value="",n([...o,a]))};return g`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${t.label}>
    ${t.label}
    ${o.map((s,a)=>g`<div class="fp3d-lines-row">
        <span>${s}</span>
        <button type="button" title=${t.remove} aria-label=${`${t.remove}: ${s}`} ?disabled=${e} @click=${()=>n(o.filter((l,u)=>u!==a))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${t.placeholder}
        aria-label=${t.placeholder}
        ?disabled=${e}
        @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),r(s.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${e} @click=${s=>r(s.currentTarget.previousElementSibling)}>
        ${t.add}
      </button>
    </div>
  </div>`}var pg="#ff3fb4";function Eu(o){let e=String(o??"").split(/\s*(?:\||\n)\s*/).map(t=>t.trim().slice(0,40)).filter(Boolean).slice(0,2);return e.length?e:["Neon"]}function Pu(o){return!o||!/^#[0-9a-f]{6}$/i.test(o)?null:[1,3,5].map(e=>parseInt(o.slice(e,e+2),16)/255)}function Tu(o,e,t){let n=Pu(o.sign_color)??Pu(pg);if(!t)return{on:!0,color:n,level:1};if(!e)return{on:!1,color:n,level:0};if(e.entity_id.split(".")[0]==="light"){let s=_t(e);if(!s)return{on:!1,color:n,level:0};let a=e.attributes.color_mode;return{on:!0,color:Array.isArray(e.attributes.rgb_color)&&a!=="color_temp"&&a!=="brightness"&&a!=="onoff"&&a!=="white"?s.color:n,level:s.level}}let r=["on","open","home","playing","heat","cool","auto"].includes(e.state);return{on:r,color:n,level:r?1:0}}var xo=new Map;function Au(o,e,t,n,i){let r=Math.min(8,Math.max(.25,Number.isFinite(i)&&i>0?i:3)),s=t?Math.round(Math.min(1,Math.max(.2,n))*10)/10:0,a=`${o.join(`
`)}|${e.map(w=>Math.round(w*32)).join(",")}|${s}|${r.toFixed(2)}`,l=xo.get(a);if(l)return l;if(typeof document>"u")return null;let u=r>=1?1024:Math.round(1024*r),d=r>=1?Math.round(1024/r):1024,c=document.createElement("canvas");c.width=u,c.height=d;let p=c.getContext("2d");if(!p)return null;let h="'Dancing Script', 'Segoe Script', 'Brush Script MT', 'Comic Sans MS', cursive";p.font=`600 100px ${h}`;let f=Math.max(...o.map(w=>p.measureText(w).width),1),m=Math.max(12,Math.min(u*.86*100/f,d*.78/(o.length*1.15)));p.font=`600 ${m}px ${h}`,p.textAlign="center",p.textBaseline="middle",p.lineJoin="round";let b=(w,S,I=1)=>`rgba(${w.map(P=>Math.round(Math.min(1,Math.max(0,P*S))*255)).join(",")},${I})`,v=e.map(w=>w+(1-w)*.65),$=d/2-(o.length-1)*m*1.15/2;o.forEach((w,S)=>{let I=$+S*m*1.15;t?(p.shadowColor=b(e,1),p.shadowBlur=m*.45*s,p.strokeStyle=b(e,1,.55*s),p.lineWidth=m*.12,p.strokeText(w,u/2,I),p.shadowBlur=m*.2*s,p.fillStyle=b(v,.55+.45*s),p.fillText(w,u/2,I)):(p.shadowBlur=0,p.fillStyle=b(e.map(P=>.12+P*.22),1),p.fillText(w,u/2,I))});let y=c.toDataURL("image/png");return xo.size>40&&xo.delete(xo.keys().next().value),xo.set(a,y),y}var Ue=.03,Ii=o=>o&&o!=="none"?o:null;function jn(o,e=t=>Ii(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let i of n.furniture){let r=e(i);if(i.type==="meter")t.grid??=r,t.gridExport??=Ii(i.export);else if(i.type==="inverter"&&r&&!t.solar.includes(r))t.solar.push(r);else if(i.type==="home_battery"){r&&!t.battery.includes(r)&&t.battery.push(r);let s=Ii(i.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(r||s)&&t.batteries.push({power:r,charge:s});let a=Ii(i.soc);a&&!t.soc.includes(a)&&t.soc.push(a)}}return t}function Cs(o){if(hg(o))return o.energy.meter;for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}function hg(o){let e=o.energy.meter;return!!o.energy.hub_point&&!!e&&o.floors.some(t=>t.id===e.floor_id)}async function Lu(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),i=new Map;for(let r of e)i.set(r,((n==null?void 0:n[r])??[]).reduce((s,a)=>s+(typeof a.change=="number"?a.change:0),0));return i}catch{return null}}var Nu=.07;function be(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),i=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-i:i}function Mo(o,e){return Ur(o,e)}function Du(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),i=[],r=new Set;for(let s of e.floors)for(let a of s.placements){let l=Mo(o,a.entity_id);!l||n.has(l)||r.has(l)||(r.add(l),i.push({id:a.entity_id,powerEntity:l,floorId:s.id,x:a.x,z:a.z,power:Math.max(0,be(o.states[l])??0)}))}return i}function Ti(o,e,t){let n=(e.settings.roof.strings??[]).filter(i=>(t===void 0||i.inverter===t)&&i.entity&&i.entity!=="none").map(i=>be(o.states[i.entity])).filter(i=>i!==null);return n.length?n.reduce((i,r)=>i+Math.max(0,r),0):null}function Ai(o,e){return e===null?o:o===null||Math.max(0,o)<5&&e>50?e:o}function Vu(o,e,t,n=jn(e)){let i=e.energy,r=i.grid??n.grid,s=r?be(o.states[r],i.grid_invert):null;if(!i.grid&&n.gridExport){let m=Math.max(0,be(o.states[n.gridExport])??0);s=Math.max(0,s??0)-m}let a=i.solar?be(o.states[i.solar]):null;if(!i.solar&&n.solar.length){let m=n.solar.map(b=>be(o.states[b])).filter(b=>b!==null);a=m.length?m.reduce((b,v)=>b+v,0):null}a=Ai(a,Ti(o,e));let l=i.battery?be(o.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let m=n.batteries.map(b=>{if(b.charge){let v=b.power?Math.max(0,be(o.states[b.power])??0):0,$=Math.max(0,be(o.states[b.charge])??0);return v-$}return b.power?be(o.states[b.power],i.battery_invert):null}).filter(b=>b!==null);l=m.length?m.reduce((b,v)=>b+v,0):null}let d=(i.battery_soc?[i.battery_soc]:n.soc).map(m=>{var b;return Number((b=o.states[m])==null?void 0:b.state)}).filter(m=>Number.isFinite(m)),c=d.length?d.reduce((m,b)=>m+b,0)/d.length:NaN,p=i.tariff?o.states[i.tariff]:void 0,h=Number(p==null?void 0:p.state),f=i.consumption?be(o.states[i.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||a!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):t.length&&(f=t.reduce((m,b)=>m+b.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(c)?c:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function rn(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function Lt(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function fg(o,e){let t=o.length,n=o.map((i,r)=>{let s=o[(r+1)%t],a=s[0]-i[0],l=s[1]-i[1],u=Math.hypot(a,l)||1,d=-l/u,c=a/u;return{p:[i[0]+d*e[r],i[1]+c*e[r]],d:[a/u,l/u],n:[d,c]}});return o.map((i,r)=>{let s=n[(r-1+t)%t],a=n[r],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*e[r],i[1]+a.n[1]*e[r]];let u=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*u,s.p[1]+s.d[1]*u]})}function mg(o){return Ge(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function Fs(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:i}=En(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let r of o.rooms){if(r.points.length<3)continue;let{pts:s,flipped:a}=mg(r),l=s.length,u=s.map((p,h)=>{let f=a?(l-2-h+l)%l:h,m=i.some(b=>!b.exterior&&b.sources.some(v=>v.room_id===r.id&&v.edge===f));return Nu+(m?t/2:0)}),d=fg(s,u).map(p=>rn(n,p)),c=d.map((p,h)=>[p,d[(h+1)%l]]);for(let[p,h]of c)Lt(n,p,h);n.rings.set(r.id,c)}for(let r of i){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let s=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],a=$o(n,r.roomLeft,s),l=$o(n,r.roomRight,s);a!==null&&l!==null&&Lt(n,a,l)}return bg(n),n}var gg=1;function bg(o){let e=[...o.rings.entries()];for(;;){let t=new Array(o.pos.length).fill(-1),n=0;for(let s=0;s<o.pos.length;s++){if(t[s]>=0)continue;let a=[s];for(t[s]=n;a.length;)for(let{to:l}of o.adj[a.pop()])t[l]<0&&(a.push(l),t[l]=n);n++}if(n<2)return;let i=null;for(let[,s]of e)for(let a of new Set(s.flat()))for(let[l,u]of e)if(t[u[0][0]]!==t[a])for(let[d,c]of u){let p=o.pos[a],h=o.pos[d],f=o.pos[c],m=f[0]-h[0],b=f[1]-h[1],v=Math.min(1,Math.max(0,((p[0]-h[0])*m+(p[1]-h[1])*b)/(m*m+b*b||1))),$=Math.hypot(p[0]-h[0]-m*v,p[1]-h[1]-b*v);(!i||$<i.d)&&(i={a,room:l,d:$})}if(!i||i.d>gg+2*Nu)return;let r=$o(o,i.room,o.pos[i.a]);if(r===null)return;Lt(o,i.a,r)}}function $o(o,e,t){let n=o.rings.get(e);if(!n)return null;let i=null;for(let s of n){let a=o.pos[s[0]],l=o.pos[s[1]],u=l[0]-a[0],d=l[1]-a[1],c=u*u+d*d||1,p=Math.min(1,Math.max(0,((t[0]-a[0])*u+(t[1]-a[1])*d)/c)),h=[a[0]+u*p,a[1]+d*p],f=Math.hypot(t[0]-h[0],t[1]-h[1]);(!i||f<i.d)&&(i={seg:s,q:h,d:f})}if(!i)return null;let r=rn(o,i.q);return Lt(o,r,i.seg[0]),Lt(o,r,i.seg[1]),r}function Pi(o,e,t){let n=o.pos[t],i=$o(o,e.id,n);if(i===null)return!1;let r=o.pos[i],s=o.pos[o.adj[i][0].to],a=o.pos[o.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,u=[(a[0]-s[0])/l,(a[1]-s[1])/l],d=(n[0]-r[0])*u[0]+(n[1]-r[1])*u[1],c=(n[1]-r[1])*u[0]-(n[0]-r[0])*u[1];if(Math.abs(d)<.01||Math.abs(c)<.01)return Lt(o,t,i),!0;let p=[r[0]+u[0]*d,r[1]+u[1]*d],h=[r[0]-u[1]*c,r[1]+u[0]*c],f=rn(o,B(h,e.points)||!B(p,e.points)?h:p);return Lt(o,i,f),Lt(o,f,t),!0}function So(o,e){let t=o.rooms.filter(r=>r.points.length>=3),n=t.find(r=>B(e,r.points));if(n)return n;let i=null;for(let r of t)for(let s of r.points){let a=Math.hypot(e[0]-s[0],e[1]-s[1]);(!i||a<i.d)&&(i={room:r,d:a})}return(i==null?void 0:i.room)??null}function ju(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),i=o.pos.map(()=>!1);for(t[e]=0;;){let r=-1;for(let s=0;s<t.length;s++)!i[s]&&t[s]<1/0&&(r<0||t[s]<t[r])&&(r=s);if(r<0)break;i[r]=!0;for(let{to:s,w:a}of o.adj[r])t[r]+a<t[s]-1e-9&&(t[s]=t[r]+a,n[s]=r)}return{dist:t,prev:n}}function zu(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Ru=new WeakMap;function _g(o,e){let t=Cs(o),n=o.floors.find(d=>d.id===t.floor_id),i=[],{wall_exterior:r,wall_interior:s}=o.settings,a=new Map,l=new Map;e.forEach((d,c)=>l.set(d.floorId,[...l.get(d.floorId)??[],c]));let u=o.floors.filter(d=>l.has(d.id));for(let d of u){if(d.id===n.id)continue;let c=d.elevation>n.elevation,p=l.get(d.id),h=zu(p,e);i.push({floorId:n.id,a:[t.x,Ue,t.z],b:[t.x,c?n.height:-.2,t.z],dist:0,members:p,kind:h});let f=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[t.x,c?-.2:d.height,t.z],b:[t.x,Ue,t.z],dist:f,members:p,kind:h}),a.set(d.id,f+.25)}for(let d of u){let c=Fs(d,r,s),p=So(d,[t.x,t.z]);if(!p)continue;let h=rn(c,[t.x,t.z]);if(!Pi(c,p,h))continue;let f=[];for(let y of l.get(d.id)){let w=e[y],S=So(d,[w.x,w.z]);if(!S)continue;let I=rn(c,[w.x,w.z]);Pi(c,S,I)&&f.push({node:I,member:y})}let{dist:m,prev:b}=ju(c,h),v=new Map;for(let y of f)if(Number.isFinite(m[y.node]))for(let w=y.node;b[w]>=0;w=b[w]){let S=b[w],I=`${S}>${w}`,P=v.get(I)??{a:S,b:w,members:[]};P.members.push(y.member),v.set(I,P)}let $=a.get(d.id)??0;for(let{a:y,b:w,members:S}of v.values()){let I=c.pos[y],P=c.pos[w],C=zu(S,e);i.push({floorId:d.id,a:[I[0],Ue,I[1]],b:[P[0],Ue,P[1]],dist:$+m[y],members:S,kind:C})}}return i}function Wu({building:o,consumers:e,summary:t,battery:n,fieldPower:i,devicePower:r}){var G;let s=Cs(o);if(!s)return[];let a=o.floors.find(k=>k.id===s.floor_id);if(!a)return[];let l=k=>r==null?void 0:r.get(k),u=Rs(o,"inverter"),d=Rs(o,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let c=k=>{let _=null;for(let E of u)E.floorId===k.floorId&&(!_||Math.hypot(E.x-k.x,E.z-k.z)<Math.hypot(_.x-k.x,_.z-k.z))&&(_=E);return _},p=k=>l(k.id)??(d.length===1?t.battery??0:0),h=new Map;for(let k of d){let _=c(k);_&&h.set(k.id,_)}let f=e.map(k=>({floorId:k.floorId,x:k.x,z:k.z,kind:k.wallbox?"wallbox":"consumer",power:k.power}));for(let k of d)!h.has(k.id)&&t.battery!==null&&f.push({floorId:k.floorId,x:k.x,z:k.z,kind:"battery",power:Math.abs(p(k))});let m=`${s.floor_id}:${s.x},${s.z}|${f.map(k=>`${k.floorId}:${k.x},${k.z}:${k.kind}`).join(";")}`,b=Ru.get(o);b||Ru.set(o,b=new Map);let v=b.get(m);v||(v=_g(o,f),b.clear(),b.set(m,v));let $=v.map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.members.reduce((_,E)=>_+f[E].power,0),kind:k.kind})),y=t.grid!==null?Ei(o):null,w=o.settings.roof.cables??[],S=k=>w.find(_=>_.id===k),I=(k,_)=>k.map(E=>({...E,key:_}));if(y){let k=t.grid>=0,_=S("grid"),E=_?ko(o,_,[y.end[0],a.elevation+Math.max(Ue,y.height),y.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...y.height>.05?[[y.end[0],y.height,y.end[1]]]:[],[y.end[0],Ue,y.end[1]],[y.wall[0],Ue,y.wall[1]],[s.x,Ue,s.z]],A=_?Vn(o,k?E:[...E].reverse(),Math.abs(t.grid),k?"grid":"export",a):qu(a.id,k?E:[...E].reverse(),Math.abs(t.grid),k?"grid":"export",0);$.push(...I(A,"grid"))}if(t.battery!==null&&t.battery>0)for(let k of $)k.kind==="battery"&&([k.a,k.b]=[k.b,k.a]);let P=o.settings.roof.solar??[],C=o.settings.roof.strings??[],R=new Map;if(i&&P.length){let k=[...zt(o),..._o(o)];for(let _ of P){let E=i.get(_.id)??0,A=_.string?(G=C.find(te=>te.id===_.string))==null?void 0:G.inverter:null,F=A?d.find(te=>te.id===A)??null:null,j=A&&!F?u.find(te=>te.id===A)??null:null;if(F){let te=h.get(F.id);te&&R.set(te.id,(R.get(te.id)??0)+E);let ae=F.variant==="wall"?.5+F.h:.9,_e=S(`solar:${_.id}`),ve=_e?Ou(o,_):null,ne=o.floors.find(Le=>Le.id===F.floorId);_e&&ve&&ne?$.push(...I(Vn(o,ko(o,_e,ve,[F.x,ne.elevation+ae,F.z]),E,"solar",ne),`solar:${_.id}`)):$.push(...I(Hu(o,_,E,F,ae),`solar:${_.id}`));continue}if(!j&&u.length){let te=en(o,_,k),ae=te?hd(te,_):[_.u,_.v];j=u.reduce((_e,ve)=>!_e||Math.hypot(ve.x-ae[0],ve.z-ae[1])<Math.hypot(_e.x-ae[0],_e.z-ae[1])?ve:_e,null)}j&&R.set(j.id,(R.get(j.id)??0)+E);let Q=j??{floorId:s.floor_id,x:s.x,z:s.z},O=j?1.1+j.h:1.5,L=S(`solar:${_.id}`),J=L?Ou(o,_):null,Z=o.floors.find(te=>te.id===Q.floorId);L&&J&&Z?$.push(...I(Vn(o,ko(o,L,J,[Q.x,Z.elevation+O,Q.z]),E,"solar",Z),`solar:${_.id}`)):$.push(...I(Hu(o,_,E,Q,O),`solar:${_.id}`))}}else t.solar!==null&&!u.length&&$.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Ue,s.z+.08],dist:0,power:t.solar,kind:"solar"});for(let k of u){let _=1.1+k.h,E=d.filter(j=>h.get(j.id)===k),A=l(k.id);if(A===void 0){A=R.get(k.id)??(u.length===1?t.solar??0:0);for(let j of E)A+=p(j)}let F=o.floors.find(j=>j.id===k.floorId);if(t.solar!==null||t.battery!==null){let j=S(`inv:${k.id}`),Q=vg(o,k.id)?Ei(o):null,O=Q?{floorId:Q.floorId,x:Q.end[0],z:Q.end[1],y:Math.max(Ue,Q.height)}:{floorId:s.floor_id,x:s.x,z:s.z,y:1.5},L=Q?o.floors.find(Z=>Z.id===Q.floorId)??a:a,J=j&&F?Vn(o,ko(o,j,[k.x,F.elevation+_,k.z],[O.x,L.elevation+O.y,O.z]),Math.max(0,A),"inverter",F):Fu(o,k,_,O,O.y,Math.max(0,A),"inverter",0);$.push(...I(J,`inv:${k.id}`))}for(let j of E){let Q=p(j);if(t.battery===null&&l(j.id)===void 0)continue;let O=j.variant==="wall"?.5+j.h:.9,L=S(`bat:${j.id}`),J=L&&F?Vn(o,ko(o,L,[k.x,F.elevation+_-.1,k.z],[j.x,F.elevation+O,j.z]),Math.abs(Q),"battery",F):Fu(o,k,_-.1,j,O,Math.abs(Q),"battery",0);$.push(...I(Q<=0?J:J.map(Z=>({...Z,a:Z.b,b:Z.a})).reverse(),`bat:${j.id}`))}}return $}function Ei(o){var h;let e=Cs(o),t=e?o.floors.find(f=>f.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:i}=o.settings,{walls:r}=En(t.rooms,{exterior:n,interior:i},t.walls??[]),s=Rs(o,"grid_point")[0],a=r.filter(f=>f.exterior);if(s){let f=null;for(let v of a){let $=v.b[0]-v.a[0],y=v.b[1]-v.a[1],w=s.x-e.x,S=s.z-e.z,I=w*y-S*$;if(Math.abs(I)<1e-9)continue;let P=((v.a[0]-e.x)*y-(v.a[1]-e.z)*$)/I,C=((v.a[0]-e.x)*S-(v.a[1]-e.z)*w)/I;if(P<=0||P>1||C<0||C>1||f&&P>=f.t)continue;let R=Math.hypot($,y)||1;f={q:[e.x+w*P,e.z+S*P],out:[y/R,-$/R],t:P}}let m=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[e.x,e.z],b=((h=o.floors.flatMap(v=>v.furniture).find(v=>v.id===s.id))==null?void 0:h.mount_y)??0;return{floorId:t.id,wall:m,end:[s.x,s.z],height:Math.max(0,b)}}let l=null;for(let f of a){let m=f.b[0]-f.a[0],b=f.b[1]-f.a[1],v=m*m+b*b||1,$=Math.min(1,Math.max(0,((e.x-f.a[0])*m+(e.z-f.a[1])*b)/v)),y=[f.a[0]+m*$,f.a[1]+b*$],w=Math.hypot(e.x-y[0],e.z-y[1]),S=Math.sqrt(v);(!l||w<l.d)&&(l={q:y,out:[b/S,-m/S],d:w})}if(!l)return null;let{q:u,out:d}=l,c=0;for(let f of o.floors)for(let m of f.outdoor??[]){let b=m.points.length;for(let v=0;v<b;v++){let $=m.points[v],y=m.points[(v+1)%b],w=y[0]-$[0],S=y[1]-$[1],I=d[0]*S-d[1]*w;if(Math.abs(I)<1e-9)continue;let P=(($[0]-u[0])*S-($[1]-u[1])*w)/I,C=(($[0]-u[0])*d[1]-($[1]-u[1])*d[0])/I;P>0&&C>=0&&C<=1&&(c=Math.max(c,Math.min(15,P)))}}let p=c>n+1?c:n+2.5;return{floorId:t.id,wall:[u[0]+d[0]*(n/2+.05),u[1]+d[1]*(n/2+.05)],end:[u[0]+d[0]*p,u[1]+d[1]*p],height:0}}function vg(o,e){return o.floors.some(t=>t.furniture.some(n=>n.id===e&&n.type==="inverter"&&n.cable_to==="grid"))}function Rs(o,e){let t=[];for(let n of o.floors)for(let i of n.furniture)i.type===e&&t.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return t}var Cu=new WeakMap;function Bu(o,e,t,n){let i=`${e.id}:${t.join(",")}>${n.join(",")}`,r=Cu.get(o);r||Cu.set(o,r=new Map);let s=r.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=o.settings,u=Fs(e,a,l),d=[t,n],c=So(e,t),p=So(e,n);if(c&&p){let h=rn(u,t),f=rn(u,n);if(Pi(u,c,h)&&Pi(u,p,f)){let{dist:m,prev:b}=ju(u,h);if(Number.isFinite(m[f])){d.length=0;for(let v=f;v>=0;v=b[v])d.unshift(u.pos[v])}}}return r.set(i,d),d}function Fu(o,e,t,n,i,r,s,a){let l=o.floors.find(c=>c.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let u=Bu(o,l,[e.x,e.z],[n.x,n.z]),d=[[e.x,t,e.z],...u.map(c=>[c[0],Ue,c[1]]),[n.x,i,n.z]];return qu(l.id,d,r,s,a)}function qu(o,e,t,n,i){let r=[];for(let s=0;s+1<e.length;s++){let a=e[s],l=e[s+1],u=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);u<1e-4||(r.push({floorId:o,a,b:l,dist:i,power:t,kind:n}),i+=u)}return r}function ko(o,e,t,n){let i=o.floors.find(s=>s.id===e.floor_id),r=((i==null?void 0:i.elevation)??0)+Math.max(Ue,e.height);return[t,...e.points.map(s=>[s[0],r,s[1]]),n]}function Ou(o,e){let t=en(o,e,[...zt(o),..._o(o)]);if(!t)return null;let[n,i]=tn(t,e),r=e.u+n/2,s=t.unbounded?e.v+i/2:e.v;return[t.o[0]+t.eu[0]*r+t.es[0]*s,t.o[1]+t.eu[1]*r+t.es[1]*s,t.o[2]+t.eu[2]*r+t.es[2]*s]}function yg(o,e,t){let{wall_exterior:n,wall_interior:i}=o.settings,r=Fs(e,n,i),s=So(e,t),a=s?$o(r,s.id,t):null;return a===null?t:r.pos[a]}function Vn(o,e,t,n,i){let r=[...o.floors].sort((u,d)=>u.elevation-d.elevation),s=u=>{let d=i;for(let c of r)u>=c.elevation-.01&&(d=c);return d},a=[],l=0;for(let u=0;u+1<e.length;u++){let d=e[u],c=e[u+1];if(Math.hypot(c[0]-d[0],c[1]-d[1],c[2]-d[2])<1e-4)continue;let h=[];if(Math.abs(c[1]-d[1])>.01){let f=Math.min(d[1],c[1]),m=Math.max(d[1],c[1]);for(let b of r)b.elevation>f+.01&&b.elevation<m-.01&&h.push(b.elevation);c[1]<d[1]&&h.reverse()}for(let f of[...h,c[1]]){let m=(f-d[1])/(c[1]-d[1]||1),b=Math.abs(c[1]-d[1])>.01?[d[0]+(c[0]-d[0])*m,f,d[2]+(c[2]-d[2])*m]:c,v=s((d[1]+b[1])/2),$=Math.hypot(b[0]-d[0],b[1]-d[1],b[2]-d[2]);$>1e-4&&a.push({floorId:v.id,a:[d[0],d[1]-v.elevation,d[2]],b:[b[0],b[1]-v.elevation,b[2]],dist:l,power:t,kind:n}),l+=$,d=b}}return a}function Hu(o,e,t,n,i){let r=[...zt(o),..._o(o)],s=en(o,e,r),a=o.floors.find(b=>b.id===n.floorId);if(!s||!a)return[];let[l,u]=tn(s,e),d=(b,v)=>[s.o[0]+s.eu[0]*b+s.es[0]*v,s.o[1]+s.eu[1]*b+s.es[1]*v,s.o[2]+s.eu[2]*b+s.es[2]*v],c=e.u+l/2,p=a.elevation+Ue,h=[],f;if(s.unbounded){let b=d(c,e.v+u/2);f=[b[0],p,b[2]],h.push(f)}else if(s.wall){let b=d(c,e.v);f=[b[0],p,b[2]],h.push(b,f)}else{let b=d(c,e.v),v=os(o)??a,$=Math.max(a.elevation+.5,Math.min(b[1]-.25,v.elevation+v.height-.12));f=[b[0],$,b[2]],h.push(b)}let m=yg(o,a,[f[0],f[2]]);h.push([m[0],f[1],m[1]]),Math.abs(f[1]-p)>.05&&h.push([m[0],p,m[1]]);for(let b of Bu(o,a,m,[n.x,n.z]).slice(1))h.push([b[0],p,b[1]]);return h.push([n.x,a.elevation+i,n.z]),Vn(o,h,t,"solar",a)}function Uu(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),i=new Array(n).fill(0),r=-1;for(let a of Object.values(o))for(let l of a){let u=typeof l.start=="number"?l.start:Date.parse(l.start),d=Math.floor((u-t.getTime())/3e5);d<0||d>=n||typeof l.mean!="number"||(i[d]+=Math.max(0,l.mean),r=Math.max(r,d))}return i.length=Math.max(r+1,n-3,1),{kwh:i.reduce((a,l)=>a+l*5/60/1e3,0),peak:Math.max(0,...i),curve:i}}async function Ku(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function Os(o,e){let n=l=>42-(e>0?l/e*36:0),i=o.map((l,u)=>[u/288*220,n(l)]),r=i.map(([l,u],d)=>`${d?"L":"M"}${l.toFixed(1)} ${u.toFixed(1)}`).join(" "),[s,a]=i[i.length-1];return{line:r,area:`${r} L${s.toFixed(1)} 44 L0 44 Z`,endX:s,endY:a}}function Gu(o){var e;return Math.max(1,o.rows*o.cols-(((e=o.skip)==null?void 0:e.length)??0))}var wg=400;function Yu(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let i=Math.min(1,(e.get(n.id)??0)/(Gu(n)*(n.wp??wg)));t.set(n.id,i>.003?Math.pow(i,.6):0)}return t}function Qu(o,e,t){let n=new Map,i=e.settings.roof.solar??[],r=e.settings.roof.strings??[],s=Gu,a=[],l=0,u=new Map;for(let p of i){let h=p.entity&&p.entity!=="none"?be(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let f=p.string?r.find(b=>b.id===p.string):void 0,m=f!=null&&f.entity&&f.entity!=="none"?be(o.states[f.entity]):null;if(f&&m!==null){u.set(f.id,[...u.get(f.id)??[],p]);continue}a.push(p)}for(let[p,h]of u){let f=r.find(v=>v.id===p),m=Math.max(0,be(o.states[f.entity])??0),b=h.reduce((v,$)=>v+s($),0);for(let v of h)n.set(v.id,m*s(v)/b);l+=m}let d=Math.max(0,(t??0)-l),c=a.reduce((p,h)=>p+s(h),0);for(let p of a)n.set(p.id,c?d*s(p)/c:0);return n}var it={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Ju(o,e){if(o==="grid")return it.import;if(o==="export")return it.export;if(o==="solar")return it.solar;if(o==="battery")return it.battery;if(o==="wallbox")return it.wallbox;if(o==="inverter")return(e.solar??0)>5?it.solar:it.battery;let t=[[Math.max(0,e.grid??0),it.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),it.solar],[Math.max(0,e.battery??0),it.battery]],[n]=t.reduce((i,r)=>r[0]>i[0]?r:i);return n>0?t.find(i=>i[0]===n)[1]:it.house}var Io={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Hs={natural:!0,signal:!0,shadows:!0,floors:1,cutDark:!0,sun:.45,ao:.45},Ri=[{id:"neon",base:"neon",group:"neon",aliases:["neon","standard","ne\xF3n","est\xE1ndar"]},{id:"blueprint",base:"blueprint",group:"neon",aliases:["blueprint","bauplan","blaupause","plano","plano azul"]},{id:"day",base:"day",group:"neon",aliases:["tag","day","hell","light","d\xEDa","claro"]},{id:"focus",base:"neon",group:"neon",palette:{line:"#394150",dark:"#07090d",light:"#2c313a",hue:0,lift:.05,contrast:2.5},signal:!0,sun:.2,bg:["#030407","#0b0e14"],aliases:["fokus","focus","nacht","night","dunkel","dark","noche","oscuro","enfoque"]},{id:"synth",base:"neon",group:"neon",palette:{line:"#ff3fd2",dark:"#12051f",light:"#3a1460",hue:.2,lift:.05,contrast:2.5},signal:!0,sun:.2,bg:["#08010f","#2a0838"],aliases:["synthwave","synth","retro","party"]},{id:"cozy",base:"day",group:"homely",...Hs,palette:null,bg:["#f1efeb","#d9d5ce"],aliases:["wohnlich","gem\xFCtlich","cozy","homely","echt","real","acogedor","hogare\xF1o"]},{id:"evening",base:"neon",group:"homely",...Hs,sun:.4,dim:.75,bg:["#14161c","#272630"],aliases:["wohnlich abend","abend","abendstimmung","evening","cozy evening","acogedor noche","tarde","noche acogedora"]},{id:"winter",base:"neon",group:"homely",...Hs,sun:.4,dim:.8,bg:["#0b1322","#1d2a40"],aliases:["winterabend","winter","advent","weihnachten","christmas","invierno","tarde de invierno","tarde invierno","navidad"]},{id:"model",base:"day",group:"designed",palette:{line:"#8a8f98",dark:"#cfcac2",light:"#fbfaf7",hue:.08,lift:.35,contrast:3.2},signal:!0,sun:.3,ao:.3,shadows:!0,bg:["#eeece8","#d6d2cb"],aliases:["architekturmodell","modell","model","architect","wei\xDF","white","maqueta","modelo","blanco"]},{id:"pastel",base:"day",group:"designed",palette:{line:"#3b3f5c",dark:"#b7c4e6",light:"#fff4ea",hue:.55,lift:.3,contrast:3},signal:!0,sun:.25,ao:.2,shadows:!0,bg:["#f4efe8","#e3e7f2"],aliases:["pastell","pastel","bunt","kids","colores","infantil"]},{id:"warm",base:"day",group:"designed",palette:{line:"#5a4632",dark:"#b0906c",light:"#f4ead9",hue:.15,lift:.3,contrast:3},signal:!0,sun:.3,ao:.3,shadows:!0,bg:["#f0e7d7","#d9cbb3"],aliases:["warm","holz","papier","holz und papier","wood","paper","madera","papel","madera y papel","c\xE1lido"]}],wv=Ri.map(o=>o.id),xg=new Map(Ri.map(o=>[o.id,o])),Ci=[];function Wn(o){Ci=(o??[]).filter(e=>e&&typeof e.id=="string"&&e.id.startsWith("my_")&&typeof e.name=="string").map(e=>({...e,group:"custom",aliases:[e.name]}))}function sn(){return Ci.length?[...Ri,...Ci]:Ri}function Nt(o){return o?xg.get(o)??Ci.find(e=>e.id===o):void 0}function Ls(o){let e=/^(\d{1,2}):(\d{2})$/.exec((o==null?void 0:o.trim())??"");if(!e)return null;let t=Number(e[1]),n=Number(e[2]);return t<24&&n<60?t*60+n:null}function kg(o,e,t){let n=e.getHours()*60+e.getMinutes(),i=Ls(o==null?void 0:o.style_morning_at)??420,r=Ls(o==null?void 0:o.style_evening_at)??1080,s=Ls(o==null?void 0:o.style_night_at)??1380,a=s>i?n>=s||n<i:n>=s&&n<i;return((o==null?void 0:o.style_switch)??"sun")==="sun"&&t!==null?t?"day":e.getHours()<12||a?"night":"evening":a?"night":n>=r?"evening":"day"}function zi(o){return o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"")}function Fi(o,e={}){if(!o)return null;let t=zi(o);if(!t)return null;for(let n of sn())if(zi(n.id)===t||n.aliases.some(i=>zi(i)===t)||(e[n.id]??[]).some(i=>zi(i)===t))return n.id;return null}function Xu(o){let e=u=>Nt(u)?u:null,t=e(o.override);if(t)return t;let n=Fi(o.entityState,o.names);if(n)return n;let i=o.choice||"neon";if(i==="auto")return o.sunUp===!1?"neon":o.sunUp===!0?"day":"neon";let r=(u,d,c,p)=>{let h=kg(p,o.now,o.sunUp);return h==="night"?c??d??u??"neon":h==="evening"?d??u??"neon":u??"neon"};if(i==="house"){let u=o.plan;return r(e(u==null?void 0:u.style_day),e(u==null?void 0:u.style_evening),e(u==null?void 0:u.style_night),u)}let s=e(i)??"neon",a=e(o.evening),l=e(o.night);return a||l?r(s,a,l,o.plan):s}var Oi={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Zu(o,e){let t=Oi[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[i,r]=t[n],[s,a]=t[n-1];if(e<=i){let l=(e-s)/(i-s);return[a[0]+(r[0]-a[0])*l,a[1]+(r[1]-a[1])*l,a[2]+(r[2]-a[2])*l]}}return t[t.length-1][1]}function ep(o,e,t){let n=new Map;for(let i of e.floors)for(let r of i.rooms){let s=Ze(o,i,r,t);s!==null&&n.set(r.id,s)}return n}function tp(o){let e=Oi[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([i,r])=>`rgb(${r.map(s=>Math.round(s*255)).join(",")}) ${Math.round((i-t)/(n-t)*100)}%`).join(", ")})`}function ze(o,e){if(!Pt(e))return T(o,`furn_${e}`);let t=$e(e);return t?Fl(t):T(o,"pack_missing_item")}var Ns=.06;function op(o,e,t){let n=t[0]-e[0],i=t[1]-e[1],r=Math.hypot(n,i)||1e-9,s=((o[0]-e[0])*n+(o[1]-e[1])*i)/r;return{off:Math.abs((o[0]-e[0])*i-(o[1]-e[1])*n)/r,at:s,len:r}}function np(o,e){for(let t=0;t<e.length;t++){let n=op(o,e[t],e[(t+1)%e.length]);if(n.off<Ns&&n.at>-Ns&&n.at<n.len+Ns)return t}return-1}function $g(o,e,t){let n=o.points[e],i=o.points[(e+1)%o.points.length];if(!n||!i)return null;let r=Math.hypot(i[0]-n[0],i[1]-n[1])||1e-9;return[n[0]+(i[0]-n[0])*t/r,n[1]+(i[1]-n[1])*t/r]}function Hi(o,e){if(!o||!(e!=null&&e.length))return[];let t=new Set(o.floors.flatMap(n=>[...n.rooms.map(i=>i.id),...(n.outdoor??[]).map(i=>i.id)]));return e.filter(n=>t.has(n))}function Li(o,e){var h,f;o.settings.surroundings&&(o={...o,settings:{...o.settings,surroundings:null}});let t=new Set(e),n=o.settings.wall_interior??.12,i=[];for(let m of o.floors){let b=m.rooms.filter(R=>t.has(R.id)),v=(m.outdoor??[]).filter(R=>t.has(R.id));if(!b.length&&!v.length)continue;let $=[...b.map(R=>R.points),...v.map(R=>R.points)].filter(R=>R.length>=3),y=(R,G)=>$.some(k=>B([R,G],k)),w=m.rooms.filter(R=>!t.has(R.id)&&R.points.length>=3),S=b.map(R=>{let G=R.points.length,k=Array.from({length:G},(E,A)=>{var F;return((F=R.wall_thickness)==null?void 0:F[A])??null}),_=!1;for(let E=0;E<G;E++){if(k[E]!==null)continue;let A=R.points[E],F=R.points[(E+1)%G],j=[(A[0]+F[0])/2,(A[1]+F[1])/2];w.some(Q=>np(j,Q.points)>=0)&&(k[E]=n,_=!0)}return _?{...R,wall_thickness:k}:R}),I=(m.walls??[]).filter(R=>y((R.a[0]+R.b[0])/2,(R.a[1]+R.b[1])/2)),P=new Set(I.map(R=>R.id)),C=[];for(let R of m.openings){if(R.wall){P.has(R.wall)&&C.push(R);continue}if(t.has(R.room_id)){C.push(R);continue}let G=m.rooms.find(_=>_.id===R.room_id),k=G?$g(G,R.edge,R.offset):null;if(k)for(let _ of b){let E=np(k,_.points);if(E<0)continue;let A=op(k,_.points[E],_.points[(E+1)%_.points.length]);C.push({...R,room_id:_.id,edge:E,offset:A.at,hinge:R.hinge==="left"?"right":"left",swing:R.swing==="in"?"out":"in"});break}}i.push({...m,rooms:S,outdoor:v,walls:I,openings:C,furniture:m.furniture.filter(R=>y(R.x,R.z)),placements:m.placements.filter(R=>y(R.x,R.z))})}let r=Sg(o),s=o.settings.roof;if((s==null?void 0:s.type)==="custom"&&((h=s.sections)!=null&&h.length)){let m=new Set(i.map(y=>y.id)),b=s.sections,v=new Set(b.filter(y=>{var w;return m.has(((w=rd(o,y))==null?void 0:w.id)??"")})),$=b.filter(y=>v.has(y.dormer&&ns(b,y)||y));return $.length===b.length?{...o,floors:i}:{...o,floors:i,settings:{...o.settings,roof:$.length?{...s,sections:$}:{...s,type:"none"}}}}if(!(!s||s.type==="none"||r===null||i.some(m=>m.id===r)))return{...o,floors:i,settings:{...o.settings,roof:{...s,type:"none"}}};let u=s&&(s.type==="flat"||s.type==="gable")&&r!==null?(((f=o.floors.find(m=>m.id===r))==null?void 0:f.rooms)??[]).filter(m=>m.points.length>=3):[];if(!u.length)return{...o,floors:i};let d=u.flatMap(m=>m.points.map(b=>b[0])),c=u.flatMap(m=>m.points.map(b=>b[1])),p=[Math.min(...d),Math.min(...c),Math.max(...d),Math.max(...c)];return{...o,floors:i,settings:{...o.settings,roof:{...s,frame:p}}}}function Sg(o){var t;return((t=o.floors.filter(n=>n.rooms.some(i=>i.points.length>=3)).sort((n,i)=>i.elevation-n.elevation)[0])==null?void 0:t.id)??null}function Mg(o,e){var l;let t=(l=o==null?void 0:o.states[e.entity])==null?void 0:l.state;if(t===void 0)return!1;let n=(e.state??"").trim(),i=n.startsWith("!");i&&(n=n.slice(1).trim());let r=n?n.split(",").map(u=>u.trim()).filter(Boolean):["on"],s=Number(t),a=r.some(u=>{let d=/^([<>]=?)\s*(-?\d+(?:[.,]\d+)?)$/.exec(u);if(d){if(!Number.isFinite(s)||t.trim()==="")return!1;let c=Number(d[2].replace(",","."));return d[1]==="<"?s<c:d[1]==="<="?s<=c:d[1]===">"?s>c:s>=c}return t.toLowerCase()===u.toLowerCase()});return i?!a:a}function Ds(o,e){var t;return!((t=e.show_if)!=null&&t.entity)||Mg(o,e.show_if)}function Vs(o,e){var n;if(!e)return"";let t="";for(let i of e.floors)for(let r of i.furniture)(n=r.show_if)!=null&&n.entity&&(t+=`${r.id}:${Ds(o,r)?1:0};`);return t}var an=o=>{var e;return((e=o==null?void 0:o.settings)==null?void 0:e.winter)??{}},Ig=o=>Pl(o)>0;function rp(o,e,t=new Date){var s;let n=an(e);if(!q("fun_winter")||n.roof_lights===!1)return!1;if(n.roof_entity)return((s=o.states[n.roof_entity])==null?void 0:s.state)==="on";let i=o.states["sun.sun"],r=i?i.state==="below_horizon":t.getHours()>=16||t.getHours()<7;return Ig(t)&&r}var Pg=new Set(["snowy","snowy-rainy"]),ip="neonplan3d.winter_last_snow";function Eg(o,e){let t=e?o.states[e]:void 0,n=t==null?void 0:t.attributes.temperature;return typeof n!="number"?null:String(t.attributes.temperature_unit??"\xB0C").includes("F")?(n-32)*5/9:n}function sp(o,e,t,n=Date.now(),i=Tg()){var l;if(!q("fun_winter")||an(e).snow===!1||!t)return 0;let r=((l=o.states[t])==null?void 0:l.state)??"";if(Pg.has(r)){try{i==null||i.setItem(ip,String(n))}catch{}return 1}let s=Number((i==null?void 0:i.getItem(ip))??0);if(!s||n-s>72*36e5)return 0;let a=Eg(o,t);return a===null||a<=1?1:Math.max(0,1-(n-s)/(6*36e5))}function Tg(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function ap(o,e){if(e<=0)return[];let t=[];for(let n of o.floors)for(let i of n.outdoor??[])i.type==="lawn"&&i.points.length>=3&&t.push({floorId:n.id,points:i.points,y:Go(n,i)+Ir[i.type]+.025,color:[.93,.96,1],opacity:.78*e,...i.slope?{follow:{areaId:i.id,lift:.025}}:{}});return t}function lp(o,e=new Date){if(!q("fun_winter")||an(o).firework===!1)return!1;if(typeof location<"u"&&new URLSearchParams(location.search).has("fp3d_firework"))return!0;let t=e.getMonth(),n=e.getDate(),i=e.getHours()*60+e.getMinutes();return t===11&&n===31&&i>=1439||t===0&&n===1&&i<10}var Di=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Ni(o){return o&&o!=="none"?o:null}function Bn(o,e){var r,s;if(e.type!=="parking")return null;let t=Ni(e.entity);if(t){let a=o.states[t];if(!a||!Di.has(a.state.toLowerCase()))return null}let n=e.vehicle??null,i=Ni(e.type_entity);if(i&&((r=e.types)!=null&&r.length)){let a=(((s=o.states[i])==null?void 0:s.state)??"").trim().toLowerCase();if(a){let l=d=>d.trim().toLowerCase(),u=e.types.find(d=>l(d.state)===a)??e.types.find(d=>l(d.state)&&a.includes(l(d.state)));u&&(n=u.vehicle)}}return n&&$e(n)?n:null}function js(o,e){let t=new Map;for(let n of e.floors)for(let i of n.furniture){let r=Bn(o,i);r&&t.set(i.id,r)}return t}function cp(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[Ni(t.entity),Ni(t.type_entity)])).filter(e=>!!e)}function dp(o,e){let t=$e(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var Po=1800*1e3,Ag=new Set(["motion","occupancy","presence"]);function up(o,e){var t;return e.startsWith("binary_sensor.")&&Ag.has(String((t=o.states[e])==null?void 0:t.attributes.device_class))}function Eo(o,e){let t=[],n=new Set,i=(r,s,a,l)=>{n.has(r)||(n.add(r),t.push({entity:r,floorId:s,x:a,z:l}))};for(let r of e.floors)for(let s of r.placements)if(up(o,s.entity_id))i(s.entity_id,r.id,s.x,s.z);else if(V(s.entity_id)==="camera")for(let a of ot(o,s.entity_id))i(a,r.id,s.x,s.z);for(let r of e.floors)for(let s of r.rooms){if(!s.area_id||s.points.length<3)continue;let[a,l]=Ve(s.points);for(let u of Ie(o,s.area_id))up(o,u)&&i(u,r.id,a,l)}return t}function pp(o,e,t,n=Po){let i=t-n,r=[];for(let[s,a]of Object.entries(o)){let l="";for(let u of a){let d=(u.lc??u.lu)*1e3;u.s==="on"&&l!=="on"&&d>=i&&d<=t&&r.push({entity:s,time:d}),l=u.s}}for(let s of e){let a=s.lastChanged??NaN;s.state!=="on"||!(a>=i&&a<=t)||r.some(l=>l.entity===s.entity&&Math.abs(l.time-a)<2e3)||r.push({entity:s.entity,time:a})}return r.sort((s,a)=>s.time-a.time)}function hp(o,e,t,n=Po){let i=new Map(o.map(s=>[s.entity,s])),r=[];for(let s of e){let a=i.get(s.entity);if(!a)continue;let l=r[r.length-1];l&&l.entity===s.entity&&s.time-l.time<6e4||r.push({...a,time:s.time,age:Math.min(1,Math.max(0,(t-s.time)/n))})}return r.slice(-40)}function Vi(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit",...Kn(o)})}var fp='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var ji=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Wi(o,e){let t=[],n=Jt(o,e.floors),i=e.floors.length>1;for(let r of e.floors){let s=(d,c)=>r.rooms.find(p=>p.points.length>=3&&B([d,c],p.points))??null,a=(d,c)=>{var p;return[(p=s(d,c))==null?void 0:p.name,i?r.name:null].filter(Boolean).join(" \xB7 ")};for(let d of r.rooms){if(d.points.length<3)continue;let[c,p]=Ve(d.points);t.push({kind:"room",name:d.name,where:i?r.name:"",floorId:r.id,roomId:d.id,entity:null,icon:null,x:c,z:p,y:0})}let l=new Set,u=(d,c,p,h)=>{var f;l.has(d)||!o.states[d]||(l.add(d),t.push({kind:"device",name:K(o,d),where:a(c,p),floorId:r.id,roomId:((f=s(c,p))==null?void 0:f.id)??null,entity:d,icon:V(d),x:c,z:p,y:h}))};for(let d of r.placements)u(d.entity_id,d.x,d.z,d.y??xn(V(d.entity_id)??"sensor",r.height,d.mount));for(let d of r.furniture){let c=n.get(d.id),p=(c==null?void 0:c.entity)??(c==null?void 0:c.power);p&&u(p,d.x,d.z,Math.min(r.height-.3,Math.max(.5,d.h)))}}return t}function mp(o,e,t=8){let n=ji(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let i=o.filter(a=>{let l=ji(`${a.name} ${a.where} ${a.entity??""}`);return n.every(u=>l.includes(u))}),r=ji(e.trim()),s=a=>(ji(a.name).startsWith(r)?0:2)+(a.kind==="room"?0:1);return i.sort((a,l)=>s(a)-s(l)||a.name.localeCompare(l.name)).slice(0,t)}var ct=new Map,Ws=new Map,gp=new Map;async function zg(o,e){return o.callWS({type:"neonplan3d/modules/code",pack_id:e})}async function Rg(o,e){let t=await zg(o,e.id);if(t.api!==1)return null;let n=URL.createObjectURL(new Blob([t.code],{type:"text/javascript"}));try{let r=(await import(n)).default;if(!r||r.api!==1||typeof r.id!="string")return null;let s=gp.get(e.id);s&&URL.revokeObjectURL(s),gp.set(e.id,n);let a={id:e.id,release:t.release,module:r};return ct.set(e.id,a),a}catch(i){throw URL.revokeObjectURL(n),i}}async function Bs(o,e){let t=new Map(e.filter(n=>n.module&&n.module.api===1&&n.module.approved===!0).map(n=>[n.id,n]));for(let n of[...ct.keys()])t.has(n)||ct.delete(n);await Promise.all([...t.values()].map(n=>{let i=ct.get(n.id);if(i&&i.release===(n.release??1))return Promise.resolve(i);let r=Ws.get(n.id);return r||(r=Rg(o,n).catch(s=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,s),null)).finally(()=>Ws.delete(n.id)),Ws.set(n.id,r)),r}))}async function bp(o,e){for(let t of ct.values())if(t.module.voice)try{let n=await t.module.voice(o,e);if(n)return n}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed on "${o}"`,n)}return null}function _p(o){return cn(e=>{var t;return(t=e.scene)==null?void 0:t.call(e,o)})}function vp(o){return[...ct.values()].flatMap(e=>{var t,n;return((n=(t=e.module).popups)==null?void 0:n.call(t,o))??[]})}function yp(o){return cn(e=>{var t;return(t=e.cards)==null?void 0:t.call(e,o)})}function wp(o){return cn(e=>{var t;return(t=e.alerts)==null?void 0:t.call(e,o)})}function xp(o){return cn(e=>{var t;return(t=e.watched)==null?void 0:t.call(e,o)})}function qs(o,e){return cn(t=>{var n;return(n=t.roomSheets)==null?void 0:n.call(t,o,e)})}function Us(o){return cn(e=>{var t;return(t=e.menuSheets)==null?void 0:t.call(e,o)})}function Ks(){return[...ct.values()].filter(o=>!!o.module.settings).map(o=>o.id)}function kp(o,e){let t=ct.get(o);if(!(t!=null&&t.module.settings))return[];try{return t.module.settings(e)??[]}catch(n){return console.warn(`NeonPlan 3D: module ${t.id} failed`,n),[]}}function $p(o){return cn(e=>{var t;return(t=e.pools)==null?void 0:t.call(e,o)})}function ln(){return ct.size>0}function cn(o){let e=[];for(let t of ct.values())try{e.push(...o(t.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed`,n)}return e}function Mp(o,e,t){let n=o.filter(l=>Number.isFinite(l));if(n.length<2)return"";let i=Math.min(...n),s=Math.max(...n)-i||1,a=l=>Math.round(l*10)/10;return n.map((l,u)=>`${a(u/(n.length-1)*e)},${a(t-1-(l-i)/s*(t-2))}`).join(" ")}function Sp(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let t=Math.min(1,Math.max(0,e))*(o.length-1),n=Math.min(o.length-2,Math.floor(t)),i=t-n,[r,s]=[o[n],o[n+1]];return[r[0]+(s[0]-r[0])*i,r[1]+(s[1]-r[1])*i,r[2]+(s[2]-r[2])*i]}function Ip(o){let e=[];for(let t of o){let n=t.points;if(n.length<2)continue;let i=[],r=0;for(let l=1;l<n.length;l++){let u=Math.hypot(n[l][0]-n[l-1][0],n[l][1]-n[l-1][1],n[l][2]-n[l-1][2]);i.push(u),r+=u}if(r<.01)continue;let s=t.colors.length===n.length,a=0;for(let l=1;l<n.length;l++){let u=i[l-1];if(u<.005)continue;let d=s?Sp([t.colors[l-1],t.colors[l]],.5):Sp(t.colors,(a+u/2)/r);e.push({floorId:t.floorId,a:[...n[l-1]],b:[...n[l]],dist:a,power:Math.max(0,t.flow),color:d,...t.width?{width:Math.min(3,Math.max(.5,t.width))}:{},...t.look==="pipe"?{pipe:!0}:{},...t.views==="house"?{house:!0}:t.views==="floor"?{floor:!0}:{}}),a+=u}}return e}function Pp(o){return o&&[...o].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(o)?o:null}function Ep(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function Bi(o,e){return(o??[]).filter(t=>!e||!t.minor)}var Tp="https://www.openstreetmap.org/copyright";var Cg=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Fg=[2200,2700,3200,4e3,5e3,6500],Og=["hs","rgb","rgbw","rgbww","xy"],Hg=4,Lg=16,Ng=32,Dg=128;function Ys(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>Og.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Qs(o){return((o.attributes.supported_features??0)&Hg)!==0&&typeof o.attributes.current_position=="number"}var Gs=class extends ue{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},pro:{type:Boolean},slatInvert:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{V(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return g`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?g`<img src=${n} alt=${K(this.hass,this.entity)} />`:g`<span class="qm-note">${Ae(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return T(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:K(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}cover(e,t){let n=Lr(e,t);this.call("cover",n.service,n.data)}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){Te(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,i)=>{let r=i/t*Math.PI*2-Math.PI/2;return g`<div class="qm-at" style="left:${50+Math.cos(r)*39}%;top:${50+Math.sin(r)*39}%">${n}</div>`})}renderLight(e){let t=Ys(e),n=e.state==="on",i=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,r=t.color?Cg.map(s=>g`<button class="qm-swatch" style="background:rgb(${s.join(",")})" aria-label=${`RGB ${s.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:s})}></button>`):t.temp?Fg.map(s=>g`<button class="qm-swatch" style="background:${Vg(s)}" aria-label=${`${s} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:s})}></button>`):[];return g`<div class="qm-ring ${r.length?"":"qm-ring-small"}">
        ${this.ring(r)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${i} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?g`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,i))}
            aria-label=${this.t("brightness")}
            @change=${s=>this.call("light","turn_on",{brightness_pct:Number(s.target.value)})}
          />`:x}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",i=Qs(e),r=(d,c,p,h=!1)=>g`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${c} @click=${p}>${d}</button>`,s=d=>t!==null&&Math.abs(t-d)<3,a=[r("\u25B2",this.t("cover_open"),()=>this.ask()&&this.cover(e,"open"),s(100)),...i?[75,50].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25BC",this.t("cover_close"),()=>this.ask()&&this.cover(e,"close"),s(0)),...i?[25].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),s(d))):[],r("\u25A0",this.t("cover_stop"),()=>this.cover(e,"stop"),n)],l=$n(e,this.slatInvert),u=t!==null?100-t:l!==null?100-l:e.state==="closed"?100:0;return g`<div class="qm-ring">
        ${this.ring(a)}
        <button
          class="qm-power qm-blind ${u<100?"qm-on":""}"
          style="--closed:${u}%"
          aria-label=${n?this.t("cover_stop"):u>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.cover(e,"stop"):this.ask()&&this.cover(e,u>50?"open":"close")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:Ae(this.hass,e)}</b>
        </button>
      </div>
      ${i?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:x}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=$n(e,this.slatInvert),i=r=>this.slatInvert?100-r:r;return t&Dg&&n!==null?g`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:i(Number(r.target.value))})}
      /></label>`:Jo(e)?g`<div class="qm-tilt-buttons">
        ${t&Lg?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:x}
        ${t&Ng?g`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:x}
      </div>`:x}renderCar(e){let t=e.entities,n=(c,p,h,f={})=>{this.hass.callService(c,p,{entity_id:h,...f})},i=t.lock,r=!!i&&i.startsWith("lock."),s=c=>/^(switch|input_boolean|fan|light)\./.test(c),a=t.climate,l=!!a&&a.startsWith("climate."),u=t.charging&&s(t.charging)?t.charging:null,d=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return g`<p class="qm-car-line">${d||Ae(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${r||i&&s(i)?g`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(r?n("lock","unlock",i):n("homeassistant","turn_off",i)):r?n("lock","lock",i):n("homeassistant","turn_on",i)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:x}
        ${a?g`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",a)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:x}
        ${u?g`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",u)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:x}
        ${!r&&!a&&!u?g`<p class="qm-note">${this.t("car_no_controls")}</p>`:x}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",i=e.state==="off"||e.state==="standby",r=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,s=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),a=typeof t.entity_picture=="string"?t.entity_picture:null;return g`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${i} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${a?`background-image:url(${a})`:""} @click=${()=>this.call("media_player",i?"turn_on":n?"media_pause":"media_play")}>
          <span>${i?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${i} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${s?g`<p class="qm-media-title">${s}</p>`:x}
      ${r!==null?g`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(r)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:x}
      ${this.renderPlay(e)}`}renderPlay(e){if(!q("sound"))return x;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return x;let i=e.attributes.source;return g`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(r=>g`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:r.type,media_content_id:r.content})}>
            ▶ ${r.label}
          </button>`)}
        ${t.map(r=>g`<button class="qm-chip ${r===i?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:r})}>${r}</button>`)}
      </div>`}renderDoorLock(e){let t=e.state==="locked"||e.state==="locking"||e.state==="jammed",n=K(this.hass,this.entity),i=()=>{confirm(this.t(t?"door_unlock_confirm":"door_lock_confirm",{name:n}))&&(this.call("lock",t?"unlock":"lock"),this.close())};return g`<p class="qm-car-line">${Ae(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${t?"qm-slot-on":""}" @click=${i}>${t?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return g`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${Ae(this.hass,e)}</b>
      </button>
    </div>`}render(){var i;let e=(i=this.hass)==null?void 0:i.states[this.entity];if(!e)return x;let t=V(this.entity),n=this.car?this.renderCar(this.car):ee(e)?g`<p class="qm-note">${Ae(this.hass,e)}</p>`:this.doorLock&&t==="lock"?this.renderDoorLock(e):t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&q("sound")?this.renderMedia(e):this.renderToggle(e);return g`<div class="qm" role="dialog" aria-label=${K(this.hass,this.entity)}>
      <div class="qm-title">${K(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[He,fe`
    .qm-play-head {
      margin: 10px 0 4px;
      font-size: 11px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      opacity: 0.7;
    }
    .qm-play {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-height: 110px;
      overflow-y: auto;
    }
    .qm-chip {
      border: 1px solid rgba(160, 240, 255, 0.35);
      border-radius: 999px;
      padding: 5px 10px;
      background: rgba(8, 16, 34, 0.55);
      color: inherit;
      font: inherit;
      font-size: 12.5px;
      cursor: pointer;
    }
    .qm-chip-on {
      border-color: var(--fp3d-accent, #37e0ff);
      color: var(--fp3d-accent, #37e0ff);
    }
      .qm-camera {
        display: block;
        width: 100%;
        padding: 0;
        margin: 6px 0 8px;
        border: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #000;
        cursor: pointer;
      }
      .qm-camera img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .qm:has(.qm-camera) {
        width: 300px;
      }
      .qm {
        width: 232px;
        padding: 12px 14px 10px;
        border-radius: 22px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        backdrop-filter: blur(10px);
      }
      :host([low]) .qm {
        backdrop-filter: none;
        box-shadow: 0 0 0 1px var(--fp3d-line);
        animation: none;
        color: var(--fp3d-text);
        text-align: center;
        animation: qm-in 140ms ease-out;
      }
      @keyframes qm-in {
        from {
          opacity: 0;
          transform: scale(0.85);
        }
      }
      .qm-title {
        font: 700 14.5px var(--fp3d-title-font);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-ring {
        position: relative;
        width: 196px;
        height: 196px;
        margin: 6px auto 4px;
        display: grid;
        place-items: center;
      }
      .qm-ring-small {
        height: 110px;
      }
      .qm-at {
        position: absolute;
        transform: translate(-50%, -50%);
      }
      .qm-swatch {
        width: 34px;
        height: 34px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.35);
      }
      .qm-swatch:active {
        transform: scale(0.9);
      }
      .qm-power {
        display: grid;
        place-items: center;
        gap: 2px;
        width: 88px;
        height: 88px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-muted);
        box-shadow: inset 0 0 0 2px var(--fp3d-line);
        cursor: pointer;
        font: inherit;
      }
      .qm-power b {
        font: 700 15px var(--fp3d-title-font);
        color: var(--fp3d-text);
      }
      .qm-power small {
        font-size: 11px;
      }
      .qm-on {
        color: #1a1204;
        background: var(--fp3d-warm);
        box-shadow: 0 0 24px rgba(255, 181, 71, 0.55);
      }
      .qm-on b {
        color: #1a1204;
      }
      .qm-slot {
        display: grid;
        place-items: center;
        border-color: var(--fp3d-line);
        background: var(--fp3d-bg2, #16223a);
        color: var(--fp3d-text);
        font: 700 12px var(--fp3d-title-font);
      }
      .qm-slot-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 14px rgba(55, 224, 255, 0.45);
      }
      /* the blind: its closed part covers the circle from the top, the open part glows like daylight */
      .qm-blind.qm-on {
        background: linear-gradient(to bottom, #1e2c4c var(--closed), #9fd9ff var(--closed));
        box-shadow: 0 0 22px rgba(120, 200, 255, 0.4);
        color: #06101f;
      }
      .qm-blind b {
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
        color: #fff;
      }
      .qm-round {
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 50%;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 17px;
        cursor: pointer;
      }
      .qm-car-line {
        margin: 2px 0 8px;
        text-align: center;
        font-weight: 600;
        font-variant-numeric: tabular-nums;
      }
      .qm-car {
        display: grid;
        gap: 6px;
        justify-items: stretch;
      }
      .qm-car .qm-slot {
        width: auto;
        padding: 6px 10px;
        font-size: 13px;
      }
      .qm-media {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 6px 0;
      }
      .qm-media-main {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        position: relative;
      }
      .qm-media-main span {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
        font-size: 22px;
        text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
        color: #fff;
      }
      .qm-media .qm-slot {
        width: auto;
        padding: 0 10px;
      }
      .qm-media-title {
        margin: 2px 0 4px;
        text-align: center;
        font-size: 12px;
        opacity: 0.85;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .qm-tilt {
        display: grid;
        gap: 4px;
        margin-top: 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .qm-tilt-buttons {
        display: flex;
        gap: 6px;
        justify-content: center;
        margin-top: 8px;
      }
      .qm-tilt-buttons .qm-slot {
        width: auto;
        padding: 0 10px;
        font-size: 12px;
      }
      .qm-slider {
        width: 100%;
        margin: 4px 0 6px;
        accent-color: var(--fp3d-accent);
      }
      .qm-look {
        display: block;
        width: 100%;
        margin-top: -4px;
      }
      .qm-details {
        border: 0;
        background: none;
        color: var(--fp3d-accent);
        font: inherit;
        font-size: 13px;
        padding: 6px;
        cursor: pointer;
      }
      .qm-note {
        color: var(--fp3d-muted);
      }
    `]};function Vg(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,i)=>Math.round(n+(i-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Gs);var jg=new URL(import.meta.url),Wg=new URL("./neonplan3d-3d.js?v=2af3fad7d710",jg).href,Ap;function To(){return Ap??=import(Wg),Ap}var Js;function Xs(){let o=new URL("./neonplan3d-fun.js?v=c5a375fbb0ff",new URL(import.meta.url)).href;return Js??=import(o).catch(e=>{throw Js=void 0,e}),Js}function zp(o,e){let t=o.points,n=t[e],i=t[(e+1)%t.length],r=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/r,(i[1]-n[1])/r],a=[-s[1],s[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];B([l[0]+a[0]*.02,l[1]+a[1]*.02],t)||(a=[-a[0],-a[1]]);let u=[a[1],-a[0]];return{a:n,b:i,u:s,n:a,length:r,rightward:s[0]*u[0]+s[1]*u[1]>0}}function qi(o,e){let t=e[0]-o.a[0],n=e[1]-o.a[1];return{s:t*o.u[0]+n*o.u[1],d:t*o.n[0]+n*o.n[1]}}function Zs(o,e,t){return[o.a[0]+o.u[0]*e+o.n[0]*t,o.a[1]+o.u[1]*e+o.n[1]*t]}var Bg=.45;function Rp(o,e){let t=[];for(let n of e.openings){if(n.wall)continue;let i=e.rooms.find(a=>a.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:r,d:s}=qi(o,oi(i,n.edge,n.offset));Math.abs(s)>.4||r<-.05||r>o.length+.05||t.push(qg(n,r))}return t}function qg(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function Cp(o,e,t,n=Bg){let i=[];for(let r of e.furniture){if(r.type==="stairwell"||r.type==="parking")continue;let s=B([r.x,r.z],t.points),a=Qt(r).map(h=>qi(o,h)),l=Math.min(...a.map(h=>h.d)),u=Math.min(...a.map(h=>h.s)),d=Math.max(...a.map(h=>h.s)),c=qi(o,[r.x,r.z]);if(!s&&c.d<=0||c.d<=0||l>n||l<-.3||d<.02||u>o.length-.02)continue;let p=Se(e,r);i.push({kind:"furniture",id:r.id,s0:u,s1:d,y0:p,y1:p+r.h,d:l})}return i}var Fp=.3;function Ao(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,i=o.height??Fp,r=[];if(o.heights)t&&r.push([t.x,t.y,t.z]),o.points.forEach(([s,a],l)=>{var u;return r.push([s,((u=o.heights)==null?void 0:u[l])??i,a])}),n&&r.push([n.x,n.y,n.z]);else{if(!t||!n)return[];r.push([t.x,t.y,t.z],[t.x,i,t.z]);for(let[s,a]of o.points)r.push([s,i,a]);r.push([n.x,i,n.z],[n.x,n.y,n.z])}return r.filter((s,a)=>a===0||ea(s,r[a-1])>.001)}function ea(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function Ui(o){let e=0;for(let t=1;t<o.length;t++)e+=ea(o[t-1],o[t]);return e}function Ki(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[i,r]=[o[n-1],o[n]],s=ea(i,r);if(!(s<1e-6)){if(t<=s||n===o.length-1){let a=Math.min(1,t/s),l=[(r[0]-i[0])/s,(r[1]-i[1])/s,(r[2]-i[2])/s];return{p:[i[0]+(r[0]-i[0])*a,i[1]+(r[1]-i[1])*a,i[2]+(r[2]-i[2])*a],dir:l,seg:n-1}}t-=s}}return null}function dn(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function Ug(o,e){let{w:t,d:n,h:i}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,i*.55,0]:e==="pressure"?[t*.05,i*.9,0]:null;if(o.type==="pool_filter"){let r=Math.min(t,n)/2;if(o.variant==="side6"){let l=r+.08;return e==="pump"?[l,i*.6,0]:e==="return"?[l+.06,i*.48,0]:e==="waste"?[l,i*.36,0]:null}let s=i*.89,a=r*.45+.04;return e==="pump"?[-a,s,0]:e==="return"?[a,s,0]:e==="waste"?[0,s,-a]:null}if(o.type==="pool_heat_pump"){let r=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let s=e==="in"?i*.25:i*.45;return r==="back"?[e==="in"?-t*.15:t*.15,s,-n/2-.04]:[(r==="left"?-1:1)*(t/2+.04),s,-n*.2]}return null}function Op(o,e){let t=Ug(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[i,r]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*i-t[2]*r,y:t[1],z:o.z+t[0]*r+t[2]*i}}function zo(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}function Lp(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}var ta=[.25,.7,1],Kg=900;function Np(o,e,t,n=i=>i){let i=[];for(let r of o){let s=n(Ao(r,t),r);if(s.length<2)continue;let a=e.get(r.id),l=(a==null?void 0:a.color)??ta,u=0;for(let d=1;d<s.length;d++){let[c,p]=[s[d-1],s[d]],h=Math.hypot(p[0]-c[0],p[1]-c[1],p[2]-c[2]);h<.01||(i.push({floorId:r.floor_id,a:c,b:p,dist:u,power:a!=null&&a.active?Kg:0,color:l}),u+=h)}}return i}function Gi(o,e,t){let n=t.pool??{},i=_n(e,t);return r=>{var u,d;let{kind:s,id:a,port:l}=dn(r);if(s==="port"){let c=(u=n.ports)==null?void 0:u.find(h=>h.id===a);if(!c)return null;let p=c.kind==="skimmer"?i-(c.depth??0):c.kind==="drain"?ro(e,t)+.03:c.kind==="inlet"?i-(c.depth??.3):.02;return{x:c.x,z:c.z,y:p}}if(s==="joint"){let c=(d=n.joints)==null?void 0:d.find(p=>p.id===a);return c?zo(c,l):null}if(s!=="dev")return null;for(let c of o.floors){let p=c.furniture.find(b=>b.id===a);if(!p||!Xl.includes(p.type))continue;let h=l?Op(p,l):null,f=c.elevation-e.elevation;if(h)return{...h,y:h.y+Se(c,p)+f};let m=p.type==="pool_filter"?p.h*.88:p.type==="pool_dosing"?.95:p.type==="pool_valve"?Zl:p.type==="pool_pump"?.2:.3;return{x:p.x,z:p.z,y:m+Se(c,p)+f}}return null}}function na(o,e,t,n){let i=d=>{var h,f,m;let{kind:c,id:p}=dn(d);return c==="port"?(m=(f=(h=t.pool)==null?void 0:h.ports)==null?void 0:f.find(b=>b.id===p))==null?void 0:m.kind:void 0},r=d=>i(d)==="drain",s=d=>i(d)==="inlet"||i(d)==="skimmer",a=d=>{if(d.length<2)return d;let c=d[0],p=oa(t,[c[0],c[2]]);if(!p)return d;let h=[c[0]+p[0]*.35,c[1],c[2]+p[1]*.35],f=1;for(;f<d.length&&Math.hypot(d[f][0]-c[0],d[f][2]-c[2])<.01;)f++;let m=d.slice(f).map(v=>[...v]);for(let v=0;v<m.length-1;v++){let $=(m[v][0]-c[0])*p[0]+(m[v][2]-c[2])*p[1];if($>=.349999)break;m[v][0]+=p[0]*(.35-$),m[v][2]+=p[1]*(.35-$)}let b=m[0]??d[d.length-1];return[c,h,[h[0],b[1],h[2]],...m]},l=d=>{if(d.length<2)return d;let c=d[0];if(!B([c[0],c[2]],t.points))return d;let p=ro(n,t)-.15,h=d.findIndex((v,$)=>$>0&&Math.hypot(v[0]-c[0],v[2]-c[2])>.01);if(h<0)return d;let f=d[h],m=[f[0],f[2]];for(let v=0;v<t.points.length;v++){let $=t.points[v],y=t.points[(v+1)%t.points.length],w=Gg([c[0],c[2]],[f[0],f[2]],$,y);w&&(m=w)}let b=Math.hypot(m[0]-c[0],m[1]-c[2])>1e-6?[m[0]+(m[0]-c[0])*.02,m[1]+(m[1]-c[2])*.02]:m;return[c,[c[0],p,c[2]],[b[0],p,b[1]],[b[0],f[1],b[1]],...d.slice(h)]},u=o;return e.from&&r(e.from)&&(u=l(u)),e.to&&r(e.to)&&(u=l([...u].reverse()).reverse()),e.from&&s(e.from)&&(u=a(u)),e.to&&s(e.to)&&(u=a([...u].reverse()).reverse()),u}function oa(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length];n+=s[0]*a[1]-a[0]*s[1]}let i=null;for(let r=0;r<t.length;r++){let s=t[r],a=t[(r+1)%t.length],l=a[0]-s[0],u=a[1]-s[1],d=Math.hypot(l,u);if(d<1e-6)continue;let c=Math.max(0,Math.min(1,((e[0]-s[0])*l+(e[1]-s[1])*u)/(d*d))),p=Math.hypot(s[0]+l*c-e[0],s[1]+u*c-e[1]),h=n>0?[u/d+0,-l/d+0]:[-u/d+0,l/d+0];(!i||p<i.d)&&(i={d:p,n:h})}return i?i.n:null}function Gg(o,e,t,n){let i=[e[0]-o[0],e[1]-o[1]],r=[n[0]-t[0],n[1]-t[1]],s=i[0]*r[1]-i[1]*r[0];if(Math.abs(s)<1e-9)return null;let a=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/s,l=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/s;return a>=0&&a<=1&&l>=0&&l<=1?[o[0]+i[0]*a,o[1]+i[1]*a]:null}var Ce=o=>Math.round(o*1e3)/1e3;var Dp=-.3;function Vp(o,e,t,n,i){var b;let r=[],s=[],a=v=>e(v),l=[],u=o.from,d=[];for(let v of o.vias){if(v.kind!=="hole"){d.push(v.kind);continue}let $=t.find(P=>P.id===v.joint),y=a(u);if(!$||!y)continue;let w=a(`joint:${$.id}:inside`),S=a(`joint:${$.id}:outside`),I=v.dir?v.dir==="out":Math.hypot(y.x-w.x,y.z-w.z)<=Math.hypot(y.x-S.x,y.z-S.z);l.push({a:u,b:`joint:${$.id}:${I?"inside":"outside"}`,fits:d}),d=[],u=`joint:${$.id}:${I?"outside":"inside"}`}let c=o.to;if(c.length>1){let v=a(u),$=c.map(a).filter(y=>!!y);if(v&&$.length===c.length){let y=$.reduce((R,G)=>R+G.x,0)/$.length,w=$.reduce((R,G)=>R+G.z,0)/$.length,S=Math.hypot(v.x-y,v.z-w)||1,I=Math.min(1,S/2)/S,P=v.y<0||$.some(R=>R.y<0),C={id:i("joint"),kind:"tee",x:Ce(y+(v.x-y)*I),z:Ce(w+(v.z-w)*I),y:P?Dp:Ce(v.y)};s.push(C),l.push({a:u,b:`joint:${C.id}:in`,fits:d}),d=[],c.forEach((R,G)=>l.push({a:`joint:${C.id}:out${G+1}`,b:R,fits:[]})),c=[]}}c.length&&l.push({a:u,b:c[0],fits:d});let p=v=>{let{kind:$,id:y,port:w}=dn(v),S=$==="joint"?s.find(I=>I.id===y):void 0;return S?zo(S,w):a(v)},h=v=>n(v)==="source",f=v=>n(v)==="sink",m=o.to.some(h)&&!h(o.from)||f(o.from)&&!o.to.some(f);for(let v of l){let $=p(v.a),y=p(v.b);if(!$||!y)continue;let w=Yg($,y,Hp(v.a,t),Hp(v.b,t)),S={id:i("pipe"),from:v.a,to:v.b,floor_id:o.floorId,points:w.map(P=>[P[0],P[2]]),heights:w.map(P=>P[1])},I=Ui(Ao(S,p));S.fittings=v.fits.map((P,C)=>({id:i("fit"),kind:P,at:Ce(Math.min(I/2,.4+C*.25)),...P==="valve"?{open:!0}:{}})),m&&(S={...S,from:S.to,to:S.from,points:[...S.points].reverse(),heights:[...S.heights??[]].reverse(),fittings:(b=S.fittings)==null?void 0:b.map(P=>({...P,at:Ce(Math.max(0,I-P.at))}))}),r.push(S)}return{pipes:r,joints:s}}function Hp(o,e){let{kind:t,id:n,port:i}=dn(o),r=t==="joint"&&i==="outside"?e.find(s=>s.id===n):void 0;return(r==null?void 0:r.kind)==="wall"?[-(r.nx??0),-(r.nz??0)]:null}function Yg(o,e,t=null,n=null){let i=o.y<0||e.y<0?Dp:Ce(Math.max(o.y,e.y)),r=[],[s,a]=[o.x,o.z];t&&([s,a]=[Ce(s+t[0]*.5),Ce(a+t[1]*.5)],r.push([s,Ce(o.y),a]));let[l,u]=[e.x,e.z],d=[];return n&&([l,u]=[Ce(l+n[0]*.5),Ce(u+n[1]*.5)],d.push([l,Ce(e.y),u])),r.push([Ce(s),i,Ce(a)]),Math.abs(l-s)>.01&&r.push([Ce(l),i,Ce(a)]),Math.abs(u-a)>.01&&r.push([Ce(l),i,Ce(u)]),r.push(...d),r.filter((c,p)=>p===0||Math.hypot(c[0]-r[p-1][0],c[1]-r[p-1][1],c[2]-r[p-1][2])>.001)}var Qg=2e3;function jp(o){return Math.max(0,Qg-o)}var Wp=120;var Bp="neonplan3d.gpu_lost",Yi="1.24.0";function qp(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function ia(o,e=qp()){try{return!!e&&e.getItem(Bp)===o}catch{return!1}}function Up(o,e,t,n,i=qp()){if(n||t-e>2e4||t<e||!i)return!1;try{return i.setItem(Bp,o),!0}catch{return!1}}function Kp(o,e,t,n=12,i=180){let r=Math.max(i,e),s=Math.max(i*.5625,t),a={cols:1,tile:Math.min(r,s*16/9)};for(let l=1;l<=Math.max(1,o);l++){let u=Math.ceil(o/l),d=(r-n*(l-1))/l,c=(s-n*(u-1))/u*16/9,p=Math.min(d,c);(p>a.tile||l===1)&&(a={cols:l,tile:p})}if(a.tile<i){let l=Math.max(1,Math.floor((r+n)/(i+n)));return{cols:Math.min(l,Math.max(1,o)),tile:i}}return{cols:a.cols,tile:Math.floor(a.tile)}}function ra(o,e,t){var R,G,k,_;let n=[...t.openings.values()].flatMap(E=>[E.cover,E.contact,E.tilt,E.contact2??null,E.tilt2??null,E.position??null,E.tiltAngle??null,E.lock??null]),i=Su(e),r=i.filter(E=>V(E)==="camera").flatMap(E=>ot(o,E)),s=i.map(E=>Mo(o,E)),a=e.energy,l=e.presence.flatMap(E=>[E.person,E.sensor]),u=e.floors.flatMap(E=>E.rooms.flatMap(A=>Ie(o,A.area_id).filter(F=>V(F)==="light"))),d=[...t.furniture.values()].flatMap(E=>[E.entity,E.power]),c=e.floors.flatMap(E=>E.furniture.flatMap(A=>[A.state_entity??null,A.state_entity2??null,A.color_entity??null])),p=e.floors.flatMap(E=>E.furniture.flatMap(A=>[A.door_left??null,A.door_right??null,A.soc??null,A.status??null,A.charge??null,A.export??null])),h=e.floors.flatMap(E=>E.furniture.flatMap(A=>Object.values(A.binds??{}))),f=(((R=e.settings.roof)==null?void 0:R.windows)??[]).flatMap(E=>[E.cover,E.contact,E.tilt]).filter(E=>!!E&&E!=="none"),m=[...(((G=e.settings.roof)==null?void 0:G.solar)??[]).map(E=>E.entity),...(((k=e.settings.roof)==null?void 0:k.strings)??[]).map(E=>E.entity)].filter(E=>!!E&&E!=="none"),b=e.floors.flatMap(E=>E.furniture.filter(A=>A.type==="robot_vacuum").map(A=>{var F;return fo(o,((F=t.furniture.get(A.id))==null?void 0:F.entity)??null,A.room_sensor)})),v=e.floors.flatMap(E=>E.furniture.flatMap(A=>(A.pictures??[]).flatMap(F=>[F.entity,...F.image.startsWith("camera:")?[F.image.slice(7)]:[]]))),$=t.heat?e.floors.flatMap(E=>E.rooms.flatMap(A=>Ie(o,A.area_id).filter(F=>F.startsWith("sensor.")))):[],y=[...cp(e.floors),...q("auto_pro")?Dc(o,e.floors):[]],w=Eo(o,e).map(E=>E.entity),S=q("household")?[...e.floors.flatMap(E=>E.furniture.flatMap(Bd)),((_=e.settings.household)==null?void 0:_.notes)??null].filter(E=>!!E&&E!=="none"):[],I=e.floors.flatMap(E=>E.furniture.flatMap(A=>{var F,j;return A.type==="access_point"?Object.values(oo(o,{entity:((F=t.furniture.get(A.id))==null?void 0:F.entity)??A.entity})):A.type==="water_heater"?Object.values(io(o,{entity:((j=t.furniture.get(A.id))==null?void 0:j.entity)??A.entity})):A.type==="lamp_ceiling_fan"?[A.fan_entity??null]:A.type==="wall_switch"?[...yn(A),Yo(A)]:A.type==="wall_socket"?wn(A).flatMap(Q=>[Q.entity,Q.power]):[]})),P=$t(o,t.weatherEntityId??e.settings.weather_entity),C=[...I,...i,...r,...n,...s,...d,...c,...p,...h,...b,...f,...m,...v,a.grid,a.solar,a.battery,a.battery_soc,a.consumption,a.tariff,...l,...u,...$,...t.warnings,...y,...w,...S,P,"sun.sun"];return[...new Set(C.filter(E=>!!E))]}var Gp=/^#[0-9a-f]{3,8}$/i;function Jg(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function Yp(o){if(!o||!o.kind)return null;let e=o.color&&Gp.test(o.color)?o.color:"#0b1426",t=o.color2&&Gp.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${t})`;let n=Jg(o.image);if(!n)return null;let i=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${i}), rgba(4, 8, 16, ${i})), url("${n}") center / cover no-repeat`}var sa;function St(){let o=new URL("./neonplan3d-voice.js?v=6bd8f369a25c",new URL(import.meta.url)).href;return sa??=import(o).catch(e=>{throw sa=void 0,e}),sa}function Qi(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("neonplan3d.mic","1"),sessionStorage.getItem("neonplan3d.mic")==="1"}catch{return!1}}function aa(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function la(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function dt(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function ca(){try{return localStorage.getItem("neonplan3d.voiceArea")}catch{return null}}function Ji(){try{sessionStorage.removeItem("neonplan3d.mic")}catch{}}var Xg=[[/KFTRWI|KFTRPWI|KFMAWI|KFSNWI|KFTUWI/,"Fire HD 10"],[/KFONWI|KFRAWI|KFRAPWI|KFTBWI|KFDOWI/,"Fire HD 8"],[/KFQUWI|KFMUWI|KFKAWI|KFGIWI/,"Fire 7"]];function Qp(o=typeof navigator>"u"?"":navigator.userAgent){var r,s,a;if(!o)return null;let e=/Fully/i.test(o)?"Fully Kiosk":/Home ?Assistant/i.test(o)?"HA app":/Silk\//.test(o)?"Silk":/Edg\//.test(o)?"Edge":/Firefox\//.test(o)?"Firefox":/Chrome\//.test(o)?"Chrome":/Safari\//.test(o)?"Safari":null,i=[((r=Xg.find(([l])=>l.test(o)))==null?void 0:r[1])??(/KF[A-Z]{2,5}WI|Silk\//.test(o)?"Fire tablet":null)??(/iPad/.test(o)?"iPad":/iPhone/.test(o)?"iPhone":/Android/.test(o)?((a=(s=/Android [\d.]+; ([^;)]+?)(?: Build|\))/.exec(o))==null?void 0:s[1])==null?void 0:a.trim())??"Android":/Windows/.test(o)?"Windows":/Mac OS X/.test(o)?"Mac":/Linux/.test(o)?"Linux":null),e].filter(Boolean).join(" \xB7 ");return i?i.slice(0,80):null}var Zg=.25,Jp=o=>Math.round(o*1e3)/1e3;function da(o,e,t,n,i){let r=o.rooms.find(s=>s.points.length>=3&&B([e,t],s.points));return!r||B([n,i],r.points)?[n,i]:B([n,t],r.points)?[n,t]:B([e,i],r.points)?[e,i]:[e,t]}function Xp(o,e,t,n){let i=Math.hypot(n[0]-t[0],n[1]-t[1]);if(i<.01)return!1;let r=[(n[0]-t[0])/i,(n[1]-t[1])/i],s=l=>Math.abs(-(l[0]-t[0])*r[1]+(l[1]-t[1])*r[0]),a=l=>(l[0]-t[0])*r[0]+(l[1]-t[1])*r[1];return o.rooms.some(l=>l.id!==e&&l.points.some((u,d)=>{let c=l.points[(d+1)%l.points.length];return s(u)>.02||s(c)>.02?!1:Math.min(i,Math.max(a(u),a(c)))-Math.max(0,Math.min(a(u),a(c)))>.05}))}function Zp(o,e,t,n=Zg){let i=o.rooms.find(u=>u.points.length>=3&&B([e.x,e.z],u.points));if(!i)return null;let r=i.points,s=Ge(r)>=0?1:-1,a=t/2,l=null;for(let u=0;u<r.length;u++){let d=r[u],c=r[(u+1)%r.length],p=Math.hypot(c[0]-d[0],c[1]-d[1]);if(p<.3)continue;let h=[(c[0]-d[0])/p,(c[1]-d[1])/p],f=[-h[1]*s,h[0]*s],m=(e.x-d[0])*h[0]+(e.z-d[1])*h[1];if(m<0||m>p)continue;let v=o.rooms.some(C=>C.id!==i.id&&C.points.some((R,G)=>{let k=C.points[(G+1)%C.points.length],_=Math.abs((R[0]-d[0])*f[0]+(R[1]-d[1])*f[1]),E=Math.abs((k[0]-d[0])*f[0]+(k[1]-d[1])*f[1]);return _<.02&&E<.02}))?a:0,$=(e.x-d[0])*f[0]+(e.z-d[1])*f[1]-v,y=Math.atan2(-f[0],f[1])*180/Math.PI,w=C=>Math.abs((e.rotation-C+540)%360-180),I=[{rotation:y,extent:e.d/2},{rotation:y+90,extent:e.w/2},{rotation:y-90,extent:e.w/2}].reduce((C,R)=>w(R.rotation)<w(C.rotation)?R:C);if(w(I.rotation)>50)continue;let P=$-I.extent;Math.abs(P)>n||l&&Math.abs(P)>=Math.abs(l.gap)||(l={x:Jp(e.x-f[0]*P),z:Jp(e.z-f[1]*P),rotation:(Math.round(I.rotation)%360+360)%360,gap:P})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function eb(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var ua={walls(o,e,t){let n=o.floors.find(r=>r.id===e),i=n==null?void 0:n.rooms.find(r=>r.id===t);return!n||!i||i.points.length<3?[]:i.points.map((r,s)=>{let a=zp(i,s),l=Xp(n,i.id,a.a,a.b),u=[...Cp(a,n,i).map(d=>[d.s0,d.s1]),...Rp(a,n).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:i.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:u}})},onWall(o,e,t){return Zs(eb(o),e,t)},freeSpot(o,e,t=.1){let n=r=>r>=t&&r+e<=o.length-t&&!o.taken.some(([s,a])=>r<a+.05&&r+e>s-.05),i=o.length/2-e/2;for(let r=0;r<=o.length;r+=.05){if(n(i-r))return Math.round((i-r)*100)/100;if(n(i+r))return Math.round((i+r)*100)/100}return null},nodeAt(o,e,t){let n=o.floors.find(a=>a.id===e),i=n==null?void 0:n.outdoor.find(a=>a.id===t);if(!n||!i)return()=>null;let r=Gi(o,n,i),s=i.pool??{};return a=>{let{kind:l,id:u,port:d}=dn(a),c=l==="joint"?(s.joints??[]).find(h=>h.id===u):void 0;if(c)return zo(c,d);let p=l==="port"?(s.ports??[]).find(h=>h.id===u):void 0;return p?r(a)??{x:p.x,y:.02,z:p.z}:r(a)}},connect(o,e,t,n,i,r){var l;let s=o.floors.find(u=>u.id===e),a=s==null?void 0:s.outdoor.find(u=>u.id===t);return!s||!a?{pipes:[],joints:[]}:Vp({...n,floorId:e},ua.nodeAt(o,e,t),((l=a.pool)==null?void 0:l.joints)??[],i,r)}};var Xi=30,tb=10,nb=600,eh={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},ob={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},ib=2e4,rb=3*6e4,pa=new Set(["unavailable","unknown",""]),sb="neonplan3d.director";function ha(){try{return localStorage.getItem(sb)==="1"}catch{return!1}}function nh(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var ab=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function oh(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(t=>{let n=o.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let i=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return ab.test(i)}).sort()}function fa(o,e,t=Date.now()){if(!o||!e||pa.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let n=Date.parse(e.state);return Number.isFinite(n)&&t-n<3e4}return o.state==="off"&&e.state==="on"}var th=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function ih(o,e,t=Date.now()){return!o||!e||pa.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?fa(o,e,t):pa.has(o.state)?!1:th.has(e.state)&&!th.has(o.state)}function rh(o,e,t,n){var d;if(n)return n;let i=o.entities??{},r=(d=i[e])==null?void 0:d.device_id,s=t.filter(c=>c.startsWith("camera.")),a=r?s.find(c=>{var p;return((p=i[c])==null?void 0:p.device_id)===r}):void 0;if(a)return a;let l=c=>qe(o,c),u=l(e);return u&&s.find(c=>l(c)===u)||null}var Ro=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,t,n){let i=this.seen.has(e),r=this.seen.get(e);return this.seen.set(e,t),i&&r!==t&&n(r,t)}stopped(e,t,n){let i=this.runs.get(e);return t?(i!=null&&i.run||this.runs.set(e,{run:!0,since:n,ran:!0}),!1):!i||i.run?(this.runs.set(e,{run:!1,since:n,ran:!!(i!=null&&i.run)}),!1):i.ran&&n-i.since>=rb?(i.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,t,n=Xi){let i=this.shown.get(e.key);if(i!==void 0&&t-i<ob[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&t-this.touchedAt<ib)return!1;let s=this.current;if(s&&t<s.until&&eh[s.shot.kind]>eh[e.kind])return!1;let a=Math.min(nb,Math.max(tb,n))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:t,until:t+a,touched:!1},this.shown.set(e.key,t),!0}due(e){let t=this.current;return!t||e<t.until?null:(this.current=null,{shot:t.shot,back:!t.touched})}clear(){this.current=null}};var Re=Math.PI/180,Zi=-.833;function lb(o,e,t){let n=(o/864e5+24405875e-1-2451545)/36525,i=((280.46646+n*(36000.76983+n*3032e-7))%360+360)%360,r=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),a=Math.sin(r*Re)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*r*Re)*(.019993-101e-6*n)+Math.sin(3*r*Re)*289e-6,l=125.04-1934.136*n,u=i+a-.00569-.00478*Math.sin(l*Re),c=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*Re),p=Math.asin(Math.sin(c*Re)*Math.sin(u*Re)),h=Math.tan(c/2*Re)**2,f=4*(h*Math.sin(2*i*Re)-2*s*Math.sin(r*Re)+4*s*h*Math.sin(r*Re)*Math.cos(2*i*Re)-.5*h*h*Math.sin(4*i*Re)-1.25*s*s*Math.sin(2*r*Re))/Re,m=new Date(o),$=(((m.getUTCHours()*60+m.getUTCMinutes()+m.getUTCSeconds()/60+f+4*t)%1440+1440)%1440/4-180)*Re,y=e*Re,w=Math.sin(y)*Math.sin(p)+Math.cos(y)*Math.cos(p)*Math.cos($),S=90-Math.acos(Math.min(1,Math.max(-1,w)))/Re;return{azimuth:(Math.atan2(Math.sin($),Math.cos($)*Math.sin(y)-Math.tan(p)*Math.cos(y))/Re+180+360)%360,elevation:S}}function sh(o,e,t){let n=new Date(o);n.setHours(0,0,0,0);let i=n.getTime(),r=10*6e4,s=c=>({...lb(c,e,t),t:c}),a=[],l=null,u=null,d=s(i);for(let c=i+r;c<=i+24*36e5;c+=r){let p=s(c),h=p.elevation>Zi,f=d.elevation>Zi;if(h!==f){let m=d.t,b=p.t;for(let $=0;$<12;$++){let y=(m+b)/2;s(y).elevation>Zi===f?m=y:b=y}let v=s(Math.round((m+b)/2));h?(l??=v,a.push(v)):(u=v,a.push(v))}h&&a.push(p),d=p}return!l&&a.length&&s(i).elevation>Zi&&a.unshift(s(i)),{points:a,rise:l,set:u}}var ma=Math.PI/180;function ah(o,e,t,n){let i=o*ma,r=(e-n)*ma,s=t*ma;return Math.sin(s)*Math.sin(i)+Math.cos(s)*Math.cos(i)*Math.cos(r)<0?null:[Math.cos(i)*Math.sin(r),Math.cos(s)*Math.sin(i)-Math.sin(s)*Math.cos(i)*Math.cos(r)]}var lh=o=>o<0?0:o>1?1:o<.5?4*o*o*o:1-Math.pow(-2*o+2,3)/2,cb={turn:1500,dive:1300,fade:600},ga=class extends ue{static properties={lat:{type:Number},lon:{type:Number}};raf=0;t0=0;dove=!1;ended=!1;constructor(){super(),this.lat=50,this.lon=10}firstUpdated(){this.t0=performance.now();let e=()=>{this.ended||(this.draw(performance.now()-this.t0),this.raf=requestAnimationFrame(e))};this.raf=requestAnimationFrame(e)}disconnectedCallback(){super.disconnectedCallback(),cancelAnimationFrame(this.raf)}skip=()=>this.finish(!0);finish(e){this.ended||(this.ended=!0,cancelAnimationFrame(this.raf),this.dove||this.dispatchEvent(new CustomEvent("flyin-dive",{detail:{fast:!0}})),this.dispatchEvent(new CustomEvent("flyin-done",{detail:{skipped:e}})))}draw(e){let t=this.renderRoot.querySelector("canvas"),n=t==null?void 0:t.getContext("2d");if(!t||!n)return;let i=1,r=Math.round(t.clientWidth*i),s=Math.round(t.clientHeight*i);(t.width!==r||t.height!==s)&&(t.width=r,t.height=s);let{turn:a,dive:l,fade:u}=cb;if(e>a+l*.55&&!this.dove&&(this.dove=!0,this.dispatchEvent(new CustomEvent("flyin-dive",{detail:{fast:!1}}))),e>a+l+u)return this.finish(!1);n.clearRect(0,0,r,s);let d=e<a+l?0:(e-a-l)/u;n.globalAlpha=1-d,n.fillStyle="#02040a",n.fillRect(0,0,r,s);let c=lh(e/a),p=this.lon-100*(1-c),h=this.lat*c,f=e<a?0:lh((e-a)/l),b=Math.min(r,s)*.32*Math.pow(14,f),v=ah(this.lat,this.lon,h,p),$=r/2-(v?v[0]*b*f:0),y=s/2+(v?v[1]*b*f:0);if(b<Math.max(r,s)){let S=n.createRadialGradient($,y,b*.95,$,y,b*1.25);S.addColorStop(0,"rgba(62,232,255,0.35)"),S.addColorStop(1,"rgba(62,232,255,0)"),n.fillStyle=S;let I=b*1.25,P=Math.max(0,$-I),C=Math.max(0,y-I);n.fillRect(P,C,Math.min(r,$+I)-P,Math.min(s,y+I)-C)}n.fillStyle="#06101f",n.beginPath(),n.arc($,y,b,0,Math.PI*2),n.fill(),n.strokeStyle=`rgba(62,232,255,${.5*(1-f*.7)})`,n.lineWidth=Math.max(1,i);let w=S=>{let I=!1;n.beginPath();for(let[P,C]of S){let R=ah(P,C,h,p);if(!R){I=!1;continue}let G=$+R[0]*b,k=y-R[1]*b;I?n.lineTo(G,k):n.moveTo(G,k),I=!0}n.stroke()};if(f<.8){for(let S=-75;S<=75;S+=15)w(Array.from({length:73},(I,P)=>[S,P*5-180]));for(let S=-180;S<180;S+=15)w(Array.from({length:37},(I,P)=>[P*5-90,S]))}if(v){let S=$+v[0]*b,I=y-v[1]*b,P=.5+.5*Math.sin(e/140),C=n.createLinearGradient(S,I,S,I-s*.35);C.addColorStop(0,`rgba(255,95,210,${.8*c})`),C.addColorStop(1,"rgba(255,95,210,0)"),n.fillStyle=C,n.fillRect(S-2*i,I-s*.35,4*i,s*.35),n.fillStyle=`rgba(255,95,210,${.9*c})`,n.beginPath(),n.arc(S,I,(4+3*P)*i,0,Math.PI*2),n.fill(),n.strokeStyle=`rgba(255,95,210,${.6*c*(1-P)})`,n.beginPath(),n.arc(S,I,(8+16*P)*i,0,Math.PI*2),n.stroke()}n.globalAlpha=1}render(){return g`<canvas @pointerdown=${this.skip} aria-hidden="true"></canvas>`}static styles=fe`
    :host {
      position: absolute;
      inset: 0;
      z-index: 30;
      cursor: pointer;
    }
    canvas {
      width: 100%;
      height: 100%;
      display: block;
    }
  `};customElements.get("fp3d-flyin")||customElements.define("fp3d-flyin",ga);function ch(o,e){var t;return String(e&&((t=o.states[e])==null?void 0:t.attributes.unit_of_measurement)||"m\xB3")}function ub(o,e){return g`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${gt`<polyline points=${Mp(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function pb(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${ie(o,e*1e3,0)} l`:`${ie(o,e,e<10?2:0)} ${t}`}var hb=12e4,fb=600*1e3,dh={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},mb='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',gb='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function ba(o){return o.fan_entity&&o.fan_entity!=="none"?o.fan_entity:null}function uh(o){if(!o||!Qe(o))return 0;let e=o.attributes.percentage;return typeof e=="number"?Math.max(.15,e/100):1}var bb=[.35,.95,1],_b=[1,.3,.2];function Co(o,e,t){var n;return((n=o.rooms.find(i=>i.points.length>=3&&B([e,t],i.points)))==null?void 0:n.id)??null}function vb(o,e){var n;let t=e.action==="more_info"?e.target:(n=e.data)==null?void 0:n.entity_id;return typeof t=="string"&&Qe(o.states[t])}function yb(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function wb(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function ph(o,e){let t=s=>s&&s!=="none"?s:null,n=vt(o,{cover:t(e.cover),contact:t(e.contact),tilt:t(e.tilt)},"window"),i=t(e.window)?o.states[t(e.window)]:void 0,r=n.open;if(i&&!ee(i)){let s=i.attributes.current_position;r=typeof s=="number"?Math.min(1,Math.max(0,s/100)):i.state==="open"||i.state==="opening"?1:0}return{open:r,tilt:n.tilt,cover:n.cover??0}}function xb(o){let{card_templates:e,...t}=o;return JSON.stringify(t)}var hh=new Set,fh=new Set;async function kb(){let o=window.AudioContext??window.webkitAudioContext;if(!o)return;let e=new o;try{if(await Promise.race([e.resume(),new Promise(n=>setTimeout(n,300))]),e.state!=="running")return;let t=e.currentTime;for(let[n,i]of[[784,0],[523,.45]]){let r=e.createOscillator(),s=e.createGain();r.frequency.value=n,s.gain.setValueAtTime(1e-4,t+i),s.gain.exponentialRampToValueAtTime(.3,t+i+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+i+.9),r.connect(s).connect(e.destination),r.start(t+i),r.stop(t+i+.95)}await new Promise(n=>setTimeout(n,1300))}finally{e.close().catch(()=>{})}}function $b(o){let e=o==null?void 0:o.settings.label_scale;return typeof e=="number"&&Number.isFinite(e)?Math.min(2,Math.max(.5,e)):1}var _a=18,ya=class extends ue{static properties={hass:{attribute:!1},building:{attribute:!1},planId:{attribute:!1},rooms:{attribute:!1,hasChanged:(e,t)=>(e??[]).join(",")!==(t??[]).join(",")},noSave:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},surroundings:{attribute:!1},plain:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},themeEvening:{attribute:!1},themeNight:{attribute:!1},styleEntity:{attribute:!1},zoomStyle:{attribute:!1},zoomLate:{attribute:!1},zoomScope:{attribute:!1},_styleOverride:{state:!0},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},proxmoxWall:{attribute:!1},_pveFilter:{state:!0},weather:{type:Boolean},sunFx:{attribute:!1},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_menuFresh:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_camPop:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_popup:{state:!0},popupValues:{state:!0},_settingsOpen:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},_cardsQuiet:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},template:{attribute:!1},viewKind:{attribute:!1},voiceArea:{attribute:!1},_voice:{state:!0},_announce:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_flyIn:{state:!0},_spotHint:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;morph=0;clockTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;menuFreshTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;moduleFull=new Set(Ib());cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;popSeen=new Set;throughWall=!1;live=null;resizeObs=null;unsubAsk=null;voiceTimer;announceTimer;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;popupTimer;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeFar=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;dayEvents=[];pickupKey="";householdTimer;binHolos=[];finished=new di;appliances=new Map;directing=new Ro;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;winterTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.planId=null,this.rooms=null,this.noSave=!1,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.surroundings=!0,this.plain=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.sunFx=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._menuFresh=!1,this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._note=null,this._popup=null,this.popupValues={};try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this._cardsQuiet=!1,this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this.template=null,this.viewKind="panel",this.voiceArea=null,this._voice=null,this._micProbe=Qi(),this._alerts=[],this._household=[],this._hhFolded=yb("neonplan3d.hhFolded"),this._binInfo=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.proxmoxWall=!1,this._pveFilter="all",this.holograms=null,this._flyIn=null,this._spotHint=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible);try{let e=JSON.parse(localStorage.getItem(va)??"null");this._styleOverride=e&&(e.until===null||e.until>Date.now())&&Nt(e.style)?e:null}catch{this._styleOverride=null}this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!(e!=null&&e.connection)||!this.isConnected||(this.unsubAsk=vr(e,t=>{this.onAsk(t)},t=>{this.onAnnounce(t)},t=>this.onReload(t),t=>this.onStyle(t),this.viewInfo()).catch(()=>vr(e,t=>{this.onAsk(t)},t=>{this.onAnnounce(t)},t=>this.onReload(t),void 0,this.viewInfo())).catch(()=>(this.unsubAsk=null,async()=>{})))}viewInfo(){return{kind:this.viewKind,screen:this.screen,template:this.template,device:Qp(),version:Et,...this.planId&&this.planId!==ye?{plan:this.planId}:{}}}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e==null||e.then(t=>t()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{var e;document.hidden||(e=this.holoRefetch)==null||e.call(this)};disconnectedCallback(){var e,t,n,i,r;super.disconnectedCallback(),this.watchWinter(!1),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),(e=this.pets)==null||e.dispose(),this.pets=null,this.petsFor=null,(t=this.ghost)==null||t.dispose(),this.ghost=null,(n=this.unlistenReplay)==null||n.call(this),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,(i=this.resizeObs)==null||i.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",this.tintSig="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),(r=this.viewer)==null||r.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&St().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",t=>{var r,s;let n=t;if(!((s=(r=n.target)==null?void 0:r.closest)!=null&&s.call(r,".fp3d-holo")))return;let i=this.renderRoot.querySelector("canvas");i&&(n.preventDefault(),i.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{var i;let n=(((i=t[0])==null?void 0:i.contentRect.width)??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await To();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",i=>{var r,s;this._central&&!((s=(r=i.target)==null?void 0:r.closest)!=null&&s.call(r,".fp3d-central, .fp3d-central-btn"))&&(this._central=!1),this._info&&(this._info=null)});let n=Date.now();this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,safeFx:ia(Yi),onContextLost:()=>Up(Yi,n,Date.now(),document.hidden),onRoomTap:(i,r)=>this.fire("room-tap",{floorId:i,roomId:r}),onFloorTap:i=>this.fire("floor-tap",{floorId:i}),floorInfo:i=>i.rooms.length===1?T(this.hass,"floor_rooms_one"):T(this.hass,"floor_rooms",{n:i.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(i,r,s)=>this.onDeviceTap(i,r,s),onDeviceHold:(i,r,s)=>this.onDeviceHold(i,r,s),onRoomDoubleTap:(i,r)=>this.onRoomDoubleTap(i,r),onDeviceSwipe:(i,r,s,a,l)=>this.onDeviceSwipe(i,r,s,a,l),onMorph:i=>{this.morph=i;let r=this.renderRoot.querySelector(".fp3d-zoom-bg");r&&(r.style.opacity=String(i))},onFurnitureSelect:i=>this.fire("furniture-select",{id:i}),onFurnitureMove:(i,r,s)=>this.fire("furniture-move",{id:i,x:r,z:s}),onDeviceSelect:i=>this.fire("device-select",{id:i}),onDeviceMove:(i,r,s)=>this.fire("device-move",{id:i,x:r,z:s}),onStats:i=>{this.showStats&&(this._stats=i)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setStyle(this.effectiveStyle()),this.viewer.setZoomStyle(this.zoomDef()),this.viewer.setZoomLate((this.zoomLate??50)/100),this.viewer.setZoomScope(this.zoomScope==="room"?"room":"all"),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((i,r,s,a,l,u)=>this.placeHolo(i,r,s,a,l,u)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...gn()]),this.hass&&Bs(this.hass,gn()).then(()=>this.syncDevices(!0)),this.shownPacks=bn(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.shownBuilding()),this.maybeFlyIn()),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&(Kl(this.building??null),$u(this.building)),e.has("hass")&&this.hass&&Ad(zd(this.hass))}updated(e){var l,u,d;if(e.has("hass")&&((l=this.live)!=null&&l.el)&&(this.live.el.hass=this.hass),e.has("_menu")&&this._menu&&!e.get("_menu")&&(this._menuFresh=!0,clearTimeout(this.menuFreshTimer),this.menuFreshTimer=setTimeout(()=>this._menuFresh=!1,400)),e.has("_holos")){let c=this._holos.map(p=>p.kind).join(",");if(c!==this.holoShape){this.holoShape=c;for(let p of this.renderRoot.querySelectorAll(".fp3d-holo"))p.hidden=!0;for(let p of this.renderRoot.querySelectorAll(".fp3d-holo-link"))p.toggleAttribute("hidden",!0);(u=this.viewer)==null||u.invalidate()}}(e.has("screen")||e.has("template")||e.has("viewKind")||e.has("planId"))&&this.unsubAsk&&this.hasUpdated?(this.unwatchAsk(),this.watchAsk()):e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),e.has("_through")&&!this._through&&e.get("_through")&&t.endLook(),this.shownPacks!==bn()&&(this.shownPacks=bn(),t.setPacks([...gn()]),this.hass&&Bs(this.hass,gn()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&t.setParked(js(this.hass,this.building)),this.syncDevices(!0));let n=e.has("building")&&this.building?xb(this.building):this.drawnPlan,i=e.has("building")&&n===this.drawnPlan;if(this.drawnPlan=n,e.has("building")&&this.building&&!i){let c=JSON.stringify(this.startViewOf()),p=this.shownStartView!==void 0&&this.shownStartView!==c;this.shownStartView=c,t.setStartView(this.startViewOf()),t.setBuilding(this.shownBuilding()),p&&this.floorId===null&&t.resetView(),this.maybeFlyIn()}else(e.has("plain")&&e.get("plain")!==void 0||e.has("rooms")&&e.get("rooms")!==void 0||e.has("surroundings")&&e.get("surroundings")!==void 0)&&this.building?(t.setBuilding(this.shownBuilding()),e.has("rooms")&&(this.syncDevices(!0),t.resetView())):e.has("hass")&&this.building&&Vs(this.hass,this.building)!==this.shownSig&&(t.setBuilding(this.shownBuilding()),this.syncDevices(!0));(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let r=["building","markerMode","heatMode","flows","alerts","dimmed"].some(c=>e.has(c))||this.markerMode==="room"&&e.has("roomId"),s=this.replayTicked&&!!this.replay;this.replayTicked=!1,(r||e.has("hass")||s)&&this.syncDevices(r,s&&(this.trail||this.detecting)),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),(e.has("clean")||e.has("_narrowStage"))&&this.scheduleThumbs(),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("angleLock")&&t.setAngleLock(this.angleLock),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("hideRoof")&&t.setHideRoof(this.hideRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),["theme","themeEvening","themeNight"].some(c=>e.has(c)&&e.get(c)!==void 0)&&this._styleOverride&&this.setStyleOverride("reset",null),(e.has("theme")||e.has("themeEvening")||e.has("themeNight")||e.has("styleEntity")||e.has("_styleOverride")||e.has("building"))&&t.setStyle(this.effectiveStyle()),(e.has("zoomStyle")||e.has("building"))&&t.setZoomStyle(this.zoomDef()),e.has("zoomLate")&&t.setZoomLate((this.zoomLate??50)/100),e.has("zoomScope")&&t.setZoomScope(this.zoomScope==="room"?"room":"all"),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,(d=this.replay)==null||d.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}watchWinter(e){e&&!this.winterTimer?this.winterTimer=setInterval(()=>this.syncDevices(!1,!0),6e4):!e&&this.winterTimer&&(clearInterval(this.winterTimer),this.winterTimer=void 0)}syncDevices(e,t=!1){var za,Ra,Ca,Fa,Oa,Ha,La,Na,Da;let n=this.viewer,i=this.conditioned();if(!n||!i||!this.hass)return;let r=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==r.entities){this.openingLinks=kn(r,i.floors),wu(Lc(r,i.floors)),this.furnitureLinks=Jt(r,i.floors),this.linkedRegistry=r.entities,this.findIndex=null,this.alertSrc=this.alerts?yo(r,i,this.weatherEntityId):null,this.watchHousehold(r,i),this.watched=ra(r,i,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?$s(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),ln()&&(this.watched=[...new Set([...this.watched,...xp(this.sceneHost(r,i))])]);let M=this.styleEntity||i.settings.style_entity;if(M&&!this.watched.includes(M)&&(this.watched=[...this.watched,M]),q("fun_winter")){let z=[an(i).roof_entity,$t(r,this.weatherEntityId??i.settings.weather_entity),"sun.sun"].filter(N=>!!N);this.watched=[...new Set([...this.watched,...z])]}e=!0}let s=e||t,a=!s;if(!s){for(let M of this.watched)if(this.shownStates.get(M)!==r.states[M]&&(s=!0,!M.startsWith("sensor."))){a=!1;break}}let l=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=((za=this.replay)==null?void 0:za.seek)??0,this.seenT=((Ra=this.replay)==null?void 0:Ra.t)??0,!s)return;if(!e&&!this.replay&&n.cameraBusy()){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},Wp);return}if(a&&this._low&&!this.replay){let M=jp(performance.now()-this.lastSync);if(M>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},M);return}}this.lastSync=performance.now();let u=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(M=>[M,r.states[M]])),this.scene=ln()?_p(this.sceneHost(r,i)):[];let d=Du(r,i),c=xu(r,i),p=this.furnitureMarkers(r,i,new Set(c.map(M=>M.id)),new Set(d.map(M=>M.powerEntity)));d.push(...p.consumers),this.lastConsumers=d;let h=Vu(r,i,d,jn(i,M=>{var z,N;return((N=(z=this.furnitureLinks)==null?void 0:z.get(M.id))==null?void 0:N.power)??null})),f=new Map(d.filter(M=>M.id!==M.powerEntity).map(M=>[M.id,M.power]));this.confirmSet=Sn(r,i.floors);let m=this.trail?this.trailNow(r,i):[],b=q("camera_cockpit")&&!this.dimmed?this.detectionPins(r,c):[];this.detecting=b.length>0;let v=q("energy_pro"),$=new Set(q("auto_pro")?i.floors.flatMap(M=>M.furniture.filter(z=>z.type==="parking"&&z.car&&Bn(r,z)).map(z=>z.id)):[]);n.setDevices([...[...c,...p.markers,...this.lockMarkers(r,i)].map(M=>{let z=M.show==="no_power"||"energyDevice"in M&&M.energyDevice||"standby"in M&&M.standby?null:f.get(M.id)??null,N={...M,power:z,powerText:z===null?void 0:he(r,z),effect:this.dimmed?!1:M.effect},oe=M.ownName&&(M.showName||this.markerNames)?M.ownName:"",H=this.cardsOn()&&(q("sound")&&this.mediaCardUp(r,M.id)||q("auto_pro")&&!!M.furnitureId&&$.has(M.furnitureId));return{...N,pin:this.showPin(N)&&!H,full:M.show==="always"||M.full===!0,caption:oe}}),...(v&&(this.flows??this._flows)&&!this.dimmed&&h.grid!==null?[this.gridPin(r,i,h.grid)]:[]).filter(M=>!!M),...b,...m.map((M,z)=>({id:`trail:${z}`,floorId:M.floorId,roomId:null,x:M.x,z:M.z,y:.3+.4*m.slice(0,z).filter(N=>N.entity===M.entity).length,icon:fp,name:K(r,M.entity),text:Vi(r,M.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(i)]);for(let M of this.scene)M.kind==="marker"&&M.card&&M.furnitureId&&!p.targets.has(M.furnitureId)&&p.targets.set(M.furnitureId,`module:${M.id}`);n.setTrail(m,this.replay?this.robotPaths(r,i):[]),n.setPickTargets(p.targets,this.openingTargets()),n.setScreens(p.screens),n.setFridgeDoors(Br(r,i.floors)),n.setAwnings(Nc(r,i.floors)),n.setProjections(this.projectedCameras(r,i)),n.setRobots(this.robotInfos(r,i));let y=new Map;for(let M of((Ca=i.settings.roof)==null?void 0:Ca.windows)??[])y.set(M.id,ph(r,M));n.setRoofWindows(y),n.setParked(js(r,i));let w=new Map(i.floors.flatMap(M=>M.openings.map(z=>[z.id,z.type]))),S=new Map([...this.openingLinks].map(([M,z])=>[M,vt(r,z,w.get(M))]));n.setOpeningStates(S,l);let I=this.alertSrc?mi(r,i,this.alertSrc,this.openingLinks):[],P=this.alerts&&ln()?wp(this.sceneHost(r,i)).map(M=>({kind:M.kind,entity:M.entity,roomId:M.roomId,floorId:M.floorId,text:M.text,color:M.color,quiet:!M.roomId})):[];this.setAlerts([...I,...P]),clearTimeout(this.fridgeTimer);let C=q("household")&&!this.replay?Qd(i.floors.flatMap(M=>M.furniture),r):null;C!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),C+500));let R=[...c,...p.markers].map(M=>`${M.id}:${M.glow?`${M.glow.level.toFixed(1)}/${M.glow.color.map(z=>z.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...S].map(([M,z])=>`${M}:${z.open}:${z.cover===null?"-":z.cover.toFixed(1)}`).join(";");if(R!==this.thumbSig){let M=this.thumbSig==="";this.thumbSig=R,M||this.scheduleThumbs(1500)}let G=i.floors.flatMap(M=>M.furniture.filter(z=>z.type==="home_battery").map(z=>({floorId:M.id,x:z.x,z:z.z})))[0]??(i.energy.battery?i.floors.flatMap(M=>M.placements.filter(z=>z.entity_id===i.energy.battery).map(z=>({floorId:M.id,x:z.x,z:z.z})))[0]:null),k=v?Qu(r,i,h.solar):null,_=i.settings.roof.hologram??st,E=[...i.settings.roof.solar??[]].sort((M,z)=>z.rows*z.cols-M.rows*M.cols),A=i.settings.roof.strings??[],F=M=>{var z;return(M.string?(z=A.find(N=>N.id===M.string))==null?void 0:z.inverter:null)??null},j=_.plant_floor?"all":"house",Q=(M,z,N,oe)=>{var De,Un;let H=en(i,M);if(!H)return null;let[X,ke]=tn(H,M),pe=M.u+X/2+z,re=M.v+ke/2+N,Be=[H.o[0]+H.eu[0]*pe+H.es[0]*re,H.o[1]+H.eu[1]*pe+H.es[1]*re,H.o[2]+H.eu[2]*pe+H.es[2]*re],ge=((De=H.wall)==null?void 0:De.floorId)??(H.unbounded?((Un=i.floors.find(Ho=>Ho.elevation===Math.min(...i.floors.map(Wt=>Wt.elevation))))==null?void 0:Un.id)??i.floors[0].id:[...i.floors].sort((Ho,Wt)=>Wt.elevation-Ho.elevation)[0].id);return{p:[Be[0]+H.n[0]*.05,Be[1]+H.n[1]*.05,Be[2]+H.n[2]*.05],n:[H.n[0],H.n[1],H.n[2]],floorId:ge,size:oe,roof:!0,views:j}},O=[],L=[],J=h.grid!==null||h.battery!==null||h.solar!==null,Z=_.place==="free"&&Number.isFinite(_.x)&&Number.isFinite(_.z),te=v&&h.solar!==null&&!Z?E.find(M=>M.id===_.field)??E[0]:void 0,ae=te?F(te):null,_e=!!te&&!!ae&&!E.some(M=>M.id!==te.id&&F(M)===ae)&&_.right===0&&_.up===0,ve=(()=>{if(!_e||!te)return 0;let M=en(i,te);return M?tn(M,te)[0]/2+1.2:0})(),ne=te?Q(te,_.right+ve,_.up,_.size):null,Le=this.devicePowers(r,i),U=i.energy.solar?[i.energy.solar]:jn(i,M=>{var z,N;return((N=(z=this.furnitureLinks)==null?void 0:z.get(M.id))==null?void 0:N.power)??null}).solar,Fe=U.map(M=>be(r.states[M])).filter(M=>M!==null),Ke=(i.settings.roof.strings??[]).flatMap(M=>M.entity&&M.entity!=="none"?[M.entity]:[]),un=Ai(Fe.length?Fe.reduce((M,z)=>M+z,0):null,Ti(r,i))!==(Fe.length?Fe.reduce((M,z)=>M+z,0):null),Me=v&&h.solar!==null?un?Ke:U:[];if(ne)O.push(ne),L.push({kind:"main",name:T(r,"holo_title"),w:null,dayIds:Me,battery:null});else if(v&&J&&Z){let M=0,z=0,N=0,oe=1/0,H=i.floors[0];for(let re of i.floors){re.rooms.length&&(oe=Math.min(oe,re.elevation)),re.rooms.length&&(!H.rooms.length||re.elevation+re.height>H.elevation+H.height)&&(H=re);for(let Be of re.rooms)for(let[ge,De]of Be.points)M+=ge,z+=De,N++}N&&(M/=N,z/=N);let X=_.x-M,ke=_.z-z,pe=Math.hypot(X,ke);O.push({p:[_.x,(Number.isFinite(oe)?oe:0)+(_.height??3),_.z],n:pe>.01?[X/pe,0,ke/pe]:[1,0,0],floorId:H.id,size:_.size,roof:!0,views:j}),L.push({kind:"main",name:T(r,"holo_title"),w:null,dayIds:Me,battery:null})}else if(v&&J&&i.floors.some(M=>M.rooms.length)){let M=-1/0,z=1/0,N=-1/0,oe=0,H=i.floors[0];for(let X of i.floors){for(let ke of X.rooms)for(let[pe,re]of ke.points)M=Math.max(M,pe),z=Math.min(z,re),N=Math.max(N,re);X.rooms.length&&X.elevation+X.height>oe&&(oe=X.elevation+X.height,H=X)}O.push({p:[M+.6,oe+.4,(z+N)/2],n:[1,0,0],floorId:H.id,size:_.size,roof:!0,views:j}),L.push({kind:"main",name:T(r,"holo_title"),w:null,dayIds:Me,battery:null})}if(v&&h.solar!==null){let M=new Set;for(let z of i.floors)for(let N of z.furniture.filter(oe=>oe.type==="inverter")){if(N.plant_card===!1||M.has(N.id))continue;M.add(N.id);let oe=E.filter(ge=>F(ge)===N.id),H=(te&&N.id===ae?oe.find(ge=>ge.id!==te.id):null)??oe[0],X=((Oa=(Fa=this.furnitureLinks)==null?void 0:Fa.get(N.id))==null?void 0:Oa.power)??null,ke=H?Q(H,N.plant_right??0,N.plant_up??0,_.size*.85):null,pe=Ti(r,i,N.id);if(!ke||!X&&pe===null)continue;let re=z.furniture.filter(ge=>ge.type==="home_battery").sort((ge,De)=>Math.hypot(ge.x-N.x,ge.z-N.z)-Math.hypot(De.x-N.x,De.z-N.z))[0],Be=re!=null&&re.soc&&re.soc!=="none"?Number((Ha=r.states[re.soc])==null?void 0:Ha.state):NaN;O.push(ke),L.push({kind:"plant",name:N.name||ze(r,N.type),w:Math.max(0,Ai(X?be(r.states[X]):null,pe)??0),dayIds:X?[X]:[],battery:re?{soc:Number.isFinite(Be)?Be:null,w:Le.get(re.id)??null}:null})}}let Mt=_.device_house===!1?"floor":"all";if(v)for(let M of i.floors){for(let z of M.furniture){if(!z.holo)continue;let N=((Na=(La=this.furnitureLinks)==null?void 0:La.get(z.id))==null?void 0:Na.power)??null,oe=d.find(X=>X.id===z.id);if(!N&&!oe)continue;let H=M.elevation+Se(M,z)+z.h;O.push({p:[z.x,H+.1,z.z],n:[0,1,0],floorId:M.id,size:_.size*.7,roof:!1,views:Mt,room:Co(M,z.x,z.z)}),L.push({kind:"device",name:z.name||ze(r,z.type),w:(oe==null?void 0:oe.power)??(N?be(r.states[N]):null),dayIds:N?[N]:[],battery:null})}for(let z of M.placements){if(!z.holo)continue;let N=Mo(r,z.entity_id);if(!N)continue;let oe=M.elevation+(z.y??.4)+.2;O.push({p:[z.x,oe,z.z],n:[0,1,0],floorId:M.id,size:_.size*.7,roof:!1,views:Mt,room:Co(M,z.x,z.z)}),L.push({kind:"device",name:z.name||K(r,z.entity_id),w:be(r.states[N]),dayIds:[N],battery:null})}}let Ne=[];if(q("sound")){let M=new Set,z=(i.settings.roof.hologram??st).size,N=(H,X,ke,pe,re,Be)=>{let ge=r.states[X];if(!ge||V(X)!=="media")return;if(M.has(X)){let Bt=Ne.find(nr=>nr.id===X);Bt&&Ne.push({...Bt,id:`${X}#${Ne.filter(nr=>nr.id.startsWith(`${X}#`)).length+2}`,floorId:H.id,x:ke,z:pe,members:[X]});return}M.add(X);let De=this.ro?void 0:this.mediaGrace.get(X),Un=[ge.attributes.media_title,ge.attributes.app_name,ge.attributes.source].find(Bt=>typeof Bt=="string"&&!!Bt.trim())??"";if(!(!ee(ge)&&(ge.state==="playing"||ge.state==="paused"&&!!Un&&this.pausedRecently(ge)||ge.state==="on"&&!!ge.attributes.source))){De&&De.until>Date.now()?(Ne.push({...De.source,playing:!1,level:0}),O.push(De.anchor),L.push({...De.card,media:{...De.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,De.until-Date.now()+100))):ee(ge)||(this.mediaGrace.delete(X),Ne.push({id:X,floorId:H.id,x:ke,z:pe,level:0,playing:!1,members:[]}));return}let Wt=ge.state==="playing",rt=ge.attributes,Va=typeof rt.volume_level=="number"?Math.min(1,Math.max(0,rt.volume_level)):.5,Sh=Array.isArray(rt.group_members)?rt.group_members.filter(Bt=>Bt!==X):[];Ne.push({id:X,floorId:H.id,x:ke,z:pe,level:Wt?.3+.7*Va:0,playing:Wt,members:Sh});let Mh=Un||T(r,"holo_media_playing"),ja={p:[ke,H.elevation+re+.12,pe],n:[0,1,0],floorId:H.id,size:z*.7,roof:!1,views:"all",room:Co(H,ke,pe)},Wa={kind:"media",name:Be,w:null,dayIds:[],battery:null,media:{id:X,title:Mh,artist:typeof rt.media_artist=="string"?rt.media_artist:typeof rt.media_album_name=="string"?rt.media_album_name:"",picture:typeof rt.entity_picture=="string"?rt.entity_picture:null,volume:Math.round(Va*100),playing:Wt}};O.push(ja),L.push(Wa),this.ro||this.mediaGrace.set(X,{until:Date.now()+45e3,card:Wa,source:Ne[Ne.length-1],anchor:ja})},oe=(H,X)=>{var ke,pe;for(let re of H.furniture){if((re.entity!=null&&re.entity!=="none")!==X)continue;let Be=(pe=(ke=this.furnitureLinks)==null?void 0:ke.get(re.id))==null?void 0:pe.entity;Be&&N(H,Be,re.x,re.z,Se(H,re)+re.h,re.name||ze(r,re.type))}};for(let H of i.floors)oe(H,!0);for(let H of i.floors)for(let X of H.placements)N(H,X.entity_id,X.x,X.z,X.y??1.1,X.name||K(r,X.entity_id));for(let H of i.floors)oe(H,!1)}if(q("auto_pro")){let M=(i.settings.roof.hologram??st).size;for(let z of i.floors)for(let N of z.furniture){if(N.type!=="parking"||!N.car)continue;let oe=Bn(r,N);if(!oe)continue;let H=ho(r,N);if(H.soc===null&&H.range===null&&H.locked===null&&H.climateOn===null)continue;let X=dp(N,oe),ke=Se(z,N)+((X==null?void 0:X.h)??1.6);O.push({p:[N.x,z.elevation+ke+.25,N.z],n:[0,1,0],floorId:z.id,size:M*.7,roof:!1,views:"all"});let pe=H.entities;L.push({kind:"car",name:N.name||ze(r,oe),w:null,dayIds:[],battery:null,car:{spot:N.id,soc:H.soc,range:H.range,rangeUnit:H.rangeUnit,chargingW:H.chargingW,charging:H.charging,locked:H.locked,climateOn:H.climateOn,lock:pe.lock,climate:pe.climate,charge:pe.charging&&/^(switch|input_boolean)\./.test(pe.charging)?pe.charging:null}})}}let Vt=this.scene.filter(M=>M.kind==="water").map(M=>({...M,level:this.dimmed?M.level*.4:M.level}));if(n.setPools(Vt),ln()){let M=(i.settings.roof.hologram??st).size;for(let z of yp(this.sceneHost(r,i))){let N=i.floors.find(H=>H.id===z.anchor.floorId);if(!N)continue;let oe=null;if(z.anchor.areaId){let H=N.outdoor.find(re=>re.id===z.anchor.areaId);if(!H||H.points.length<3)continue;let[X,ke]=Ve(H.points),pe=H.type==="pool"?_n(N,H):bt(N,X,ke);oe=[X,N.elevation+Math.max(pe,0)+(H.above?.6:1.1),ke]}else if(z.anchor.furnitureId){let H=N.furniture.find(X=>X.id===z.anchor.furnitureId);if(!H)continue;oe=[H.x,N.elevation+Se(N,H)+H.h+.25,H.z]}oe&&(O.push({p:oe,n:[0,1,0],floorId:N.id,size:M*.7,roof:!1,views:"all"}),L.push({kind:"module",name:z.title,w:null,dayIds:[],battery:null,module:z}))}for(let z of this.scene){if(z.kind!=="tag")continue;let N=i.floors.find(oe=>oe.id===z.floorId);N&&(O.push({p:[z.at[0],N.elevation+z.at[1],z.at[2]],n:[0,1,0],floorId:N.id,size:M*.75,roof:!1,views:z.views??"all"}),L.push({kind:"bin",name:z.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:z.color??"#37e0ff",when:z.text,name:z.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}if(q("household")){let M=(i.settings.roof.hologram??st).size;for(let z of Dd(this.binHolos)){let N=i.floors.find(H=>H.id===z.floorId);if(!N)continue;O.push({p:[z.x,N.elevation+z.y+.04,z.z],n:[0,1,0],floorId:z.floorId,size:M*.75,roof:!1,views:"all",room:Co(N,z.x,z.z)});let oe=z.lines.map(H=>({color:H.color,when:H.when,name:H.name,soon:!!H.soon&&!H.out,out:!!H.out}));L.push({kind:"bin",name:z.lines.map(H=>H.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:oe,soon:oe.some(H=>H.soon),icon:z.lines.length===1?z.lines[0].icon??null:null}})}}n.setSound(Ne);let ut=this._walk?this.walkRoomPts:null,pt=O.map(M=>!this._walk||!!ut&&B([M.p[0],M.p[2]],ut)),D=L.filter((M,z)=>pt[z]);n.setAnchors(O.filter((M,z)=>pt[z])),JSON.stringify(D)!==JSON.stringify(this._holos)&&(this._holos=D),n.setSolarLevels(k&&!this.dimmed?Yu(i,k):new Map);let we=!v||!(this.flows??this._flows)||this.dimmed?[]:Wu({building:i,consumers:d,summary:h,battery:G??null,fieldPower:k,devicePower:this.devicePowers(r,i)}).map(M=>({floorId:M.floorId,a:M.a,b:M.b,dist:M.dist,power:M.power,color:Ju(M.kind,h)})),ht=this.poolPipes(i),Fo=this.scene.filter(M=>M.kind==="line"),pn=q("fun_winter")&&!this.replay;n.setRoofLights(pn&&rp(r,i)?an(i).roof_color?"color":"warm":"off",an(i).roof_outline!==!1);let hn=pn?sp(r,i,$t(r,this.weatherEntityId??i.settings.weather_entity)):0;n.setRoofSnow(hn),n.setFirework(pn&&lp(i)),this.watchWinter(pn),n.setFlows(this.dimmed?we:[...we,...ht.flows,...Ip(Fo)]),n.setPipes(ht.tubes),n.setPatches([...this.scene.filter(M=>M.kind==="patch").map(M=>({floorId:M.floorId,points:M.points,y:M.y,color:M.color,opacity:this.dimmed?M.opacity*.4:M.opacity,...M.glow?{glow:!0}:{}})),...ap(i,hn)]);let ft=[],W=lt("locate")&&yi(i)?[...ft,...wi(r,i,new Set(ft.map(M=>M.id)))]:ft;n.setPersonLook(Es(i)==="pin"?"pin":"figure"),n.setPersons([...W,...this.moduleFigures(i)]),this.lastPersons=W.map(M=>({id:M.id,floorId:M.floorId,roomId:M.roomId}));let ce=_u(r,i,this.openingLinks,W);n.setFloorInfo(new Map([...ce].map(([M,z])=>[M,this.clean&&this._narrowStage?"":vu(r,z)]))),this.fire("status-change",{});let de=(Da=r.states["sun.sun"])==null?void 0:Da.attributes,We=typeof(de==null?void 0:de.elevation)=="number"?de.elevation:null;n.setSun(this.sunFx!==!1&&We!==null&&typeof(de==null?void 0:de.azimuth)=="number"?{elevation:We,azimuth:de.azimuth}:null);let me=M=>T(r,M).charAt(0).toUpperCase();n.setSunPath(this.sunFx===!1?null:this.sunPathToday(r),[me("compass_n"),me("compass_e"),me("compass_s"),me("compass_w")],Kn(r)),n.setStyle(this.effectiveStyle());let Xe=this.weather&&!this.dimmed&&q("weather")?wd(r,$t(r,this.weatherEntityId??i.settings.weather_entity),i.settings.rain_entity):null,Ee=Xe?xd(Xe,i.settings.weather_effects):null;this.cloud=(Ee==null?void 0:Ee.cloud)??0,this._sky=(We===null?0:Math.min(1,Math.max(0,(We+4)/16)))*(1-.45*this.cloud);let Oo=Ee?Ee.sky:(i.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&q("weather")?{...Ee??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:Oo}:null),this.watchLightning(!!(Ee!=null&&Ee.lightning)),this.applyTint();let jt=h.grid!==null||h.solar!==null||h.battery!==null||h.tariff!==null?h:null;JSON.stringify(jt)!==JSON.stringify(this._energy)&&(this._energy=jt);let Ea=d.some(M=>M.wallbox)?d.filter(M=>M.wallbox).reduce((M,z)=>M+z.power,0):null,Ta=i.floors.flatMap(M=>M.furniture.filter(z=>z.type==="inverter")).map(M=>{var oe,H;let z=(H=(oe=this.furnitureLinks)==null?void 0:oe.get(M.id))==null?void 0:H.power,N=z?be(r.states[z]):null;return N===null?null:{name:M.name||ze(r,M.type),w:Math.max(0,N)}}).filter(M=>!!M);JSON.stringify(Ta)!==JSON.stringify(this._plants)&&(this._plants=Ta),Ea!==this._wallboxW&&(this._wallboxW=Ea),this.watchSolarDay([...new Set(L.flatMap(M=>M.dayIds))]);let Aa=q("energy_pro");this.watchMeters(Aa?i.energy.gas??null:null,Aa?i.energy.water??null:null),u&&(this.syncMs=this.syncMs*.8+(performance.now()-u)*.2)}listenReplay(){var t;(t=this.unlistenReplay)==null||t.call(this),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{var n;this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&((n=this.viewer)==null||n.flashDevices(e.pulses)),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}nowInput(){let e=this.hass,t=this.building;if(!e||!t||!this.openingLinks)return null;let n=new Map(this.lastPersons.map(a=>[a.id,a])),i=new Map(t.floors.flatMap(a=>le(a).map(l=>[l.id,l.name]))),r=Object.values(e.states).filter(a=>a.entity_id.startsWith("person.")).map(a=>{let l=n.get(a.entity_id);return{name:K(e,a.entity_id),home:a.state==="home",room:l?i.get(l.roomId)??null:null,floorId:(l==null?void 0:l.floorId)??null,roomId:(l==null?void 0:l.roomId)??null}}),s=Object.values(e.states).find(a=>{var l;return a.entity_id.startsWith("person.")&&!!((l=e.user)!=null&&l.id)&&a.attributes.user_id===e.user.id});return{alerts:this._alerts.map(a=>({text:Ot(e,t,a),entity:a.entity,floorId:a.floorId,roomId:a.roomId})),openings:this.spokenOpenings(e,t),unlocked:this.lockMarkers(e,t).filter(a=>a.active).map(a=>({name:K(e,a.id),entity:a.id,floorId:a.floorId,roomId:a.roomId})),people:r,household:this._household.map(a=>({text:a.text,entity:a.entity,hot:!!a.hot})),lights:Rt(e,t,null).map(a=>({room:a.name,count:a.lightsOn.length,on:a.lightsOn,floorId:a.floorId,roomId:a.roomId})),energy:this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,soc:this._energy.soc}:null,cars:this.spokenCars(e,t).map(a=>({name:a.name,present:a.present,charging:a.charging,soc:a.soc,floorId:a.floorId})),away:!!s&&s.state!=="home"}}quietCards(e){this._cardsQuiet=e}showNow(e){var i;let t=this.building,n=e.opening&&t?this.openingSpot(t,e.opening):null;if(n){(this.floorId!==n.floorId||this.roomId)&&this.fire("floor-tap",{floorId:n.floorId}),setTimeout(()=>{var r;return(r=this.viewer)==null?void 0:r.focus(n.floorId,n.x,n.z,n.y,e.entity??null,{radius:4.6,phi:1,theta:n.theta})},120);return}if(e.entity){let r=this.floorId;if(this.showEntity(e.entity),(i=this.findIndex)!=null&&i.some(s=>s.entity===e.entity)||this.floorId!==r)return}e.floorId&&this.jumpTo({kind:"now",entity:e.entity??"",floorId:e.floorId,roomId:e.roomId??null})}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let i=(this.findIndex??=Wi(t,n)).find(s=>s.entity===e);if(i){this.goTo(i);return}let r=qe(t,e);for(let s of n.floors){let a=s.openings.find(c=>{var h;let p=(h=this.openingLinks)==null?void 0:h.get(c.id);return!!p&&[p.contact,p.tilt,p.contact2,p.tilt2,p.cover].includes(e)}),l=s.rooms.find(c=>c.points.length>=3&&(a?c.id===a.room_id:!!r&&c.area_id===r));if(!l)continue;let[u,d]=Ve(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:s.id,roomId:l.id,entity:e,icon:null,x:u,z:d,y:1});return}}now(){var e;return((e=this.replay)==null?void 0:e.t)??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,i=n?kn(t,e.floors):this.openingLinks,r=n?Jt(t,e.floors):this.furnitureLinks,s=$s(yo(t,e,this.weatherEntityId)),a=ra(t,e,{openings:i,furniture:r,heat:!0,warnings:s,weatherEntityId:this.weatherEntityId}),l=q("auto_pro")?e.floors.flatMap(u=>u.furniture.filter(d=>d.type==="parking").flatMap(d=>[typeof d.entity=="string"?d.entity:null,d.car?ni(t,d).tracker:null]).filter(d=>!!d&&d.startsWith("device_tracker."))):[];return{entities:a,openings:[...i],furniture:[...r],low:this._low,cars:l,energy:q("energy_pro"),auto:q("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return x;let t=this.hass,n=t.states[e.entity],i=Ae(t,n),r=V(e.entity)==="light"&&(n==null?void 0:n.state)==="on"&&i.endsWith("%")?`${T(t,"state_on")} \xB7 ${i}`:i,s=n!=null&&n.last_changed?T(t,"tt_since",{time:Vi(t,Date.parse(n.last_changed))}):"";return g`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${K(t,e.entity)}</span>
      <b>${s?`${r} \xB7 ${s}`:r}</b>
    </div>`}devicePowers(e,t){var i,r;let n=new Map;for(let s of t.floors)for(let a of s.furniture){if(a.type!=="inverter"&&a.type!=="home_battery")continue;let l=(r=(i=this.furnitureLinks)==null?void 0:i.get(a.id))==null?void 0:r.power,u=a.type==="home_battery"&&a.charge&&a.charge!=="none"?be(e.states[a.charge]):null,d=l?be(e.states[l],a.type==="home_battery"&&t.energy.battery_invert&&u===null):null;d!==null&&u!==null?d=Math.max(0,d)-Math.max(0,u):d===null&&u!==null&&(d=-Math.max(0,u)),d!==null&&n.set(a.id,d)}return n}detectionPins(e,t){var s,a,l,u;let n=[],i=new Set(((s=this.building)==null?void 0:s.floors.flatMap(d=>d.placements.filter(c=>c.detect_pins===!1).map(c=>c.entity_id)))??[]),r=new Set(((a=this.building)==null?void 0:a.floors.flatMap(d=>d.placements.filter(c=>c.detect_popup).map(c=>c.entity_id)))??[]);for(let d of t){if(r.has(d.id)&&((l=d.model)!=null&&l.startsWith("camera"))&&this.popOnDetection(e,d.id),!((u=d.model)!=null&&u.startsWith("camera"))||i.has(d.id))continue;let c=this.now(),p=ot(e,d.id).filter($=>{let y=e.states[$];return y?y.state==="on"?!0:y.state==="off"&&!!y.last_changed&&c-Date.parse(y.last_changed)<hb:!1}),h=new Map;for(let $ of p){let y=wo(e,$);h.has(y)||h.set(y,$)}h.size>1&&h.delete("motion");let f=(d.rotation??0)*Math.PI/180,m=[-Math.sin(f),Math.cos(f)],b=d.model==="camera_ceiling",v=0;for(let[$,y]of h){let w=e.states[y],S=w!=null&&w.last_changed?Vi(e,Date.parse(w.last_changed)):"";n.push({id:`detect:${y}`,floorId:d.floorId,roomId:d.roomId,x:d.x+(b?0:m[0]*1.1),z:d.z+(b?0:m[1]*1.1),y:1.4+.4*v++,icon:dh[$]??dh.motion,name:K(e,y),text:`${T(e,`detect_${$}`)}${S?` \xB7 ${S}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let i=Ei(t);if(!i)return null;let r=Math.abs(n)<5,s=t.settings.outage_entity;return s&&li(e.states[s])?{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:gb,name:T(e,"holo_grid"),text:T(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:i.floorId,roomId:null,x:i.end[0],z:i.end[1],y:.9+i.height,icon:mb,name:T(e,"holo_grid"),text:r?he(e,0):`${T(e,n<0?"energy_grid_export":"energy_grid_import")} ${he(e,Math.abs(n))}`,active:!r,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(s=>!!s),i=this.replay?"":n.join(",");if(i===this.meterKey)return;if(this.meterKey=i,clearInterval(this.meterTimer),this.meterTimer=void 0,!i){this._meters=null;return}let r=async()=>{if(!this.hass||document.hidden)return;let s=await Lu(this.hass,n);this.meterKey===i&&s&&(this._meters={gas:e?s.get(e)??null:null,water:t?s.get(t)??null:null})};r(),this.meterTimer=setInterval(()=>{r()},3e5)}poolPipes(e){var r,s;let t=[],n=[],i=new Map(this.scene.filter(a=>a.kind==="pipeflow").map(a=>[a.areaId,a.flows]));for(let{floor:a,area:l}of Lp(e.floors)){let u=l.pool;if(!((r=u.pipes)!=null&&r.length)&&!((s=u.joints)!=null&&s.length))continue;let d=u.ports??[],c=new Map(Object.entries(i.get(l.id)??{})),p=Gi(e,a,l),h=(f,m)=>na(f,m,l,a);t.push(...Np(u.pipes??[],c,p,h));for(let f of d){if(f.kind!=="inlet")continue;let m=p(`port:${f.id}`),b=m&&oa(l,[m.x,m.z]);if(!m||!b)continue;let v=(u.pipes??[]).find(y=>y.to===`port:${f.id}`),$=v?c.get(v.id):void 0;n.push({floorId:a.id,points:[[m.x+b[0]*.03,m.y,m.z+b[1]*.03],[m.x-b[0]*.09,m.y,m.z-b[1]*.09]],radius:.035,water:$!=null&&$.active?$.color:null,fittings:[]})}for(let f of u.joints??[]){if(f.kind!=="wall"&&f.kind!=="floor")continue;let m=p(`joint:${f.id}:inside`),b=p(`joint:${f.id}:outside`),v=f.kind==="floor"?.03:m.y;n.push({floorId:a.id,points:[[m.x,v,m.z],[b.x,b.y,b.z]],radius:.05,water:null,fittings:[]})}for(let f of u.pipes??[]){let m=na(Ao(f,p),f,l,a);if(m.length<2)continue;let b=c.get(f.id),v=[],$=Ui(m);for(let[y,w]of[[f.from,.04],[f.to,$-.04]]){let S=y.startsWith("dev:")||y.startsWith("joint:")?Ki(m,w):null;S&&v.push({kind:"sleeve",p:S.p,dir:S.dir})}for(let y of f.fittings??[]){let w=Ki(m,y.at);w&&v.push({kind:y.kind,p:w.p,dir:w.dir,open:y.open!==!1})}n.push({floorId:f.floor_id,points:m,radius:.025,water:b!=null&&b.active?b.color??ta:null,fittings:v})}}return{flows:t,tubes:n}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let r=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(r===this.holoIds)return;this.holoIds=r,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let i=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let r=await Ku(this.hass,e);this.holoIds===n&&(this._rows=r)};i(),this.holoTimer=setInterval(()=>{i()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&i()}}holoShape="";holoBoxes=[];holoSizes=new Map;holoStage={w:0,h:0,at:0};placeHolo(e,t,n,i,r,s){var F,j,Q,O;(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let a=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),u=((F=this._holos[e])==null?void 0:F.kind)==="main";if(!a){u&&this._holoOn&&(this._holoOn=!1);return}u&&i!==this._holoOn&&(this._holoOn=i);let d=this._holos[e],c=(((j=this.building)==null?void 0:j.settings.roof.hologram)??st).device_min_w??0;(d==null?void 0:d.kind)==="device"&&c>0&&(d.w??0)<c&&(i=!1);let p=!i;if(a.hidden!==p&&(a.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!i)return;if((d==null?void 0:d.kind)==="bin"){let L=Math.max(.6,r*.8),J=!!((Q=d.bin)!=null&&Q.icon)&&r*.8<.62;a.classList.contains("fp3d-holo-far")!==J&&(a.classList.toggle("fp3d-holo-far",J),this.holoSizes.delete(e)),J&&(L=1);let Z=this.holoSizes.get(e),te=performance.now();(!Z||te-Z.at>2e3)&&(Z={w:a.offsetWidth||90,h:a.offsetHeight||40,at:te},this.holoSizes.set(e,Z));let ae=Z.w*L,_e=Z.h*L,ve=n;for(let ne=0;ne<6;ne++){let Le=this.holoBoxes.find(U=>t-ae/2<U.x1+3&&t+ae/2>U.x0-3&&ve-_e<U.y1+3&&ve>U.y0-3);if(!Le)break;ve=Le.y0-4}this.holoBoxes.push({i:e,x0:t-ae/2,x1:t+ae/2,y0:ve-_e,y1:ve}),a.style.transform=`translate(${t.toFixed(1)}px, ${ve.toFixed(1)}px) scale(${L.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=r*.8,f=34*h,m=46*h,b=t+(s?f:-f),v=n-m,$=this.holoSizes.get(e),y=performance.now();(!$||y-$.at>2e3)&&($={w:a.offsetWidth||184,h:a.offsetHeight||90,at:y},this.holoSizes.set(e,$));let w=$.w*h,S=$.h*h;if(y-this.holoStage.at>2e3){let L=a.parentElement;this.holoStage={w:(L==null?void 0:L.clientWidth)||innerWidth,h:(L==null?void 0:L.clientHeight)||innerHeight,at:y}}let I=8,P=this.holoStage.w,C=this.holoStage.h,R=s?b:b-w,G=P>w+2*I?Math.max(0,I-R)-Math.max(0,R+w-(P-I)):0;R+=G,b+=G;let k=R+w;for(let L=0;L<6;L++){let J=this.holoBoxes.find(Z=>R<Z.x1+4&&k>Z.x0-4&&v-S<Z.y1+4&&v>Z.y0-4);if(!J)break;v=J.y0-6}let _=60,E=v-S<_;if(E){v=n+m+S;for(let L=0;L<6;L++){let J=this.holoBoxes.find(Z=>R<Z.x1+4&&k>Z.x0-4&&v-S<Z.y1+4&&v>Z.y0-4);if(!J)break;v=J.y1+6+S}C>S+_+I&&(v=Math.min(v,C-I)),v=Math.max(v,_+S)}this.holoBoxes.push({i:e,x0:R,x1:k,y0:v-S,y1:v});let A=s||(((O=this.building)==null?void 0:O.settings.roof.hologram)??st).mirror!==!1;if(a.style.transform=A?`translate(${b.toFixed(1)}px, ${v.toFixed(1)}px) scale(${(s?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${R.toFixed(1)}px, ${v.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let L=l.firstElementChild,J=l.lastElementChild;L==null||L.setAttribute("x1",t.toFixed(1)),L==null||L.setAttribute("y1",n.toFixed(1)),L==null||L.setAttribute("x2",b.toFixed(1)),L==null||L.setAttribute("y2",(E?v-S:v).toFixed(1)),J==null||J.setAttribute("cx",t.toFixed(1)),J==null||J.setAttribute("cy",n.toFixed(1))}}renderHologram(){var s,a;let e=this._energy,t=()=>this._holos.map((l,u)=>l.kind==="bin"?this.renderBinCard(l,u):x),n=this._holos.some(l=>l.kind==="module"||l.tag);if(!(n||q("energy_pro")||q("sound")||q("auto_pro")||q("pool")||q("household"))||!this.cardsOn())return q("household")||n?t():x;if(this.roomId&&!(((s=this.building)==null?void 0:s.settings.roof.hologram)??st).device_room)return this._holos.map((l,u)=>l.kind==="media"?this.renderMediaCard(l,u):l.kind==="bin"?this.renderBinCard(l,u):x);let i=this.floorId===null||(((a=this.building)==null?void 0:a.floors.length)??0)<=1,r=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&i;return this._holos.map((l,u)=>l.kind==="module"?this.renderModuleCard(l,u):l.kind==="bin"?this.renderBinCard(l,u):l.kind==="car"?this.renderCarCard(l,u):l.kind==="media"?this.renderMediaCard(l,u):l.kind==="device"?this.renderDeviceCard(l,u):r?this.renderHoloCard(l,u,e):x)}renderBinCard(e,t){let n=e.bin,i=n.lines.length===1?n.lines[0]:null,r=n.lines.map(s=>`${s.name}: ${s.when}`).join(", ");return g`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${i!=null&&i.out?"fp3d-holo-out":""} ${i?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${r} style="--bin:${n.lines[0].color}">
      ${n.icon?g`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${n.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:x}
      ${i?g`<div class="fp3d-holo-body"><b>${i.when}</b><span>${i.name}</span></div>`:g`<div class="fp3d-holo-body fp3d-holo-lines">
            ${n.lines.map(s=>g`<div class="fp3d-holo-line ${s.soon?"":"fp3d-holo-line-later"} ${s.out?"fp3d-holo-line-out":""}" style="--bin:${s.color}"><b>${s.when}</b><span>${s.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,t){let n=this.hass,i=f=>T(n,f),r=e.car,s=!this.mediaFolded.has(r.spot),a=()=>{this.mediaFolded.has(r.spot)?this.mediaFolded.delete(r.spot):this.mediaFolded.add(r.spot),this.requestUpdate()},l=(f,m,b)=>{n.callService(f,m,{entity_id:b})},u=(f,m)=>f.startsWith("climate.")?l("climate",m?"turn_on":"turn_off",f):l("homeassistant",m?"turn_on":"turn_off",f),d=()=>{if(!r.lock)return;let f=r.lock.startsWith("lock.");if(r.locked){if(!confirm(i("car_unlock_confirm")))return;f?l("lock","unlock",r.lock):l("homeassistant","turn_off",r.lock)}else f?l("lock","lock",r.lock):l("homeassistant","turn_on",r.lock)},c=r.soc===null?"#37e0ff":r.soc>=50?"#4dff80":r.soc>=20?"#ffcc40":"#ff4d40",p=!!r.lock&&/^(lock|input_boolean|switch)\./.test(r.lock),h=!!r.climate&&/^(climate|switch|input_boolean)\./.test(r.climate);return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${r.charging?`\u26A1 ${i("car_charging_short")}`:r.locked===null?"":r.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${c}">${r.soc!==null?`${Math.round(r.soc)} %`:"\u2013"}</b>
            <span>${r.range!==null?`${ie(n,r.range,0)} ${r.rangeUnit}`:""}${r.charging&&r.chargingW?` \xB7 ${he(n,r.chargingW)}`:""}</span>
          </div>
          ${r.soc!==null?g`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,r.soc))}%;background:${c}"></i></div>`:x}
          ${s&&!this.ro&&(p||h||r.charge)?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?g`<button title=${r.locked?i("car_unlock_btn"):i("car_lock_btn")} @click=${d}>${r.locked?"\u{1F512}":"\u{1F513}"}</button>`:x}
                ${h?g`<button class=${r.climateOn?"fp3d-holo-on":""} title=${i("car_climate")} @click=${()=>u(r.climate,!r.climateOn)}>❄</button>`:x}
                ${r.charge?g`<button class=${r.charging?"fp3d-holo-on":""} title=${i("car_charging")} @click=${()=>u(r.charge,!r.charging)}>⚡</button>`:x}
              </div>`:x}
        </div>
      </div>`}renderModuleCard(e,t){var b,v,$,y;let n=e.module,i=!this.mediaFolded.has(n.id),r=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},s=w=>w?`color:${w}`:"",a=this._low||this.clientWidth<600,l=a&&!this.moduleFull.has(n.id),u=a&&[...n.rows??[],...n.cells??[],...((b=n.chain)==null?void 0:b.items)??[],...n.spark?[n.spark]:[]].some(w=>w.minor),d=()=>{this.moduleFull.has(n.id)?this.moduleFull.delete(n.id):this.moduleFull.add(n.id);try{localStorage.setItem(bh,JSON.stringify([...this.moduleFull]))}catch{}this.requestUpdate()},c=Bi(n.rows,l),p=Bi(n.cells,l),h=n.chain?Bi(n.chain.items,l):[],f=n.spark&&n.spark.values.length>1&&!(l&&n.spark.minor)?n.spark:null,m=!!(n.chain||(v=n.cells)!=null&&v.length||n.status);return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${m?"fp3d-holo-mod-wide":""} ${this.cardPing===n.id?"fp3d-holo-ping":""} ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${r}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live" style=${s(n.liveColor)}>${n.live??""}</span></div>
          ${n.status?g`<div class="fp3d-holo-status" style=${n.status.color?`--st:${n.status.color}`:""}>
                ${n.status.icon?g`<i>${n.status.icon}</i>`:x}<b>${n.status.text}</b>${n.status.since?g`<span>${n.status.since}</span>`:x}
              </div>`:x}
          ${n.main?g`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${s(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span>
                ${n.main.side?g`<em style=${s(n.main.side.color)}><b>${n.main.side.text}</b>${n.main.side.sub?g`<small>${n.main.side.sub}</small>`:x}</em>`:x}
              </div>`:x}
          ${i&&h.length?g`<div class="fp3d-holo-chain">
                  ${h.map((w,S)=>g`${S?g`<s>→</s>`:x}<div><small>${w.label}</small><b style=${s(w.color)}>${w.value}</b></div>`)}
                </div>
                ${n.chain.note?g`<div class="fp3d-holo-chain-note" style=${s(n.chain.noteColor)}>${n.chain.note}</div>`:x}`:x}
          ${i?c.map(w=>g`<div class="fp3d-holo-mrow"><span>${w.label}</span><b style=${s(w.color)}>${w.value}</b>${w.at!==void 0?w.fill?g`<i class="fp3d-holo-mrow-fill"><s style="width:${w.at}%;background:${w.color??"#37e0ff"}"></s></i>`:g`<i><em style="left:${w.at}%;background:${w.color??"#37e0ff"};color:${w.color??"#37e0ff"}"></em></i>`:g`<i class="fp3d-holo-mrow-none"></i>`}</div>`):x}
          ${i&&p.length?g`<div class="fp3d-holo-cells">${p.map(w=>g`<div><small>${w.label}</small><b style=${s(w.color)}>${w.value}</b></div>`)}</div>`:x}
          ${i&&n.hint?g`<div class="fp3d-holo-hint" style=${n.hint.color?`--hint:${n.hint.color}`:""}>${n.hint.text}</div>`:x}
          ${i?(n.lines??[]).map(w=>g`<div class="fp3d-holo-mline">${w}</div>`):x}
          ${i&&f?g`${f.label?g`<div class="fp3d-holo-spark-label">${f.label}</div>`:x}${ub(f.values,f.color??"#ffb347")}`:x}
          ${i&&(($=n.chips)!=null&&$.length)?g`<div class="fp3d-holo-chips">
                ${n.chips.map(w=>g`<div class="fp3d-holo-mline">${w.title}</div>
                    <div class="fp3d-holo-chip-row">${w.items.map(S=>g`<button class=${S.on?"fp3d-holo-on":""} title=${S.title??""} @click=${()=>S.onTap()}>${S.label}</button>`)}</div>`)}
              </div>`:x}
          ${i&&u?g`<button class="fp3d-holo-more" @click=${d}>${T(this.hass,l?"holo_more":"holo_less")}</button>`:x}
          ${i&&!this.ro&&((y=n.buttons)!=null&&y.length)?g`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(w=>g`<button class=${w.on?"fp3d-holo-on":""} title=${w.title??""} @click=${()=>w.onTap()}>${w.label}</button>`)}</div>`:x}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){var y,w,S;let n=this.hass,i=I=>T(n,I),r=e.media,s=!this.mediaFolded.has(r.id),a=()=>{this.mediaFolded.has(r.id)?this.mediaFolded.delete(r.id):this.mediaFolded.add(r.id),this.requestUpdate()},l=(I,P={})=>{Promise.resolve(n.callService("media_player",I,{entity_id:r.id,...P})).catch(C=>this.serviceFailed(`media_player.${I}`,C))},u={down:I=>I.currentTarget.dataset.pressed=String(I.pointerId),up:I=>P=>{let C=P.currentTarget;C.dataset.pressed===String(P.pointerId)&&(delete C.dataset.pressed,P.stopPropagation(),C.dataset.acted=String(Date.now()),I())},key:I=>P=>{let C=P.currentTarget;Date.now()-Number(C.dataset.acted??0)<700||(C.dataset.acted=String(Date.now()),I())}},d=(y=n.states[r.id])==null?void 0:y.attributes.supported_features,c=I=>typeof d!="number"||(d&I)!==0,p=this.mediaIntent.get(r.id);p&&(p.playing===r.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(r.id);let h=((w=this.mediaIntent.get(r.id))==null?void 0:w.playing)??r.playing,f=c(16384)||c(1),m=()=>{this.mediaIntent.set(r.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":c(16384)?"media_play":"media_play_pause")},b=this.mediaVolume.get(r.id);b&&(Math.abs(b.v-r.volume)<=2||Date.now()-b.at>3e4)&&this.mediaVolume.delete(r.id);let v=((S=this.mediaVolume.get(r.id))==null?void 0:S.v)??r.volume,$=(I,P)=>{this.mediaVolume.set(r.id,{v:I,at:Date.now()}),this.requestUpdate(),(P||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:I/100}))};return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${a}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${i("holo_media_playing")}`:i("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${r.picture?g`<img class="fp3d-holo-cover" src=${r.picture} alt="" />`:g`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${r.title}</b>${r.artist?g`<span>${r.artist}</span>`:x}</div>
        </div>
        ${s&&!this.ro?g`<div class="fp3d-holo-media-controls">
                <button aria-label=${i("previous")} ?disabled=${!c(16)} @pointerdown=${u.down} @pointerup=${u.up(()=>l("media_previous_track"))} @click=${u.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${i("play_pause")} ?disabled=${h?!c(1):!f} @pointerdown=${u.down} @pointerup=${u.up(m)} @click=${u.key(m)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${i("next")} ?disabled=${!c(32)} @pointerdown=${u.down} @pointerup=${u.up(()=>l("media_next_track"))} @click=${u.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(v)}
                  aria-label=${i("volume")}
                  @input=${I=>$(Number(I.target.value),!1)}
                  @change=${I=>$(Number(I.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${v} %</span>
              </div>`:x}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,i=u=>T(n,u),r=!this.holoFolded.has(t),s=this.dayOf(e),a=s&&s.curve.length>1?Os(s.curve,s.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${he(n,e.w??0)}</b><span>${i("holo_dev_now")}</span></div>
        ${r&&s?g`<div class="fp3d-holo-sub">${i("holo_today")} <b>${ie(n,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${he(n,s.peak)}</b></div>`:x}
        ${r&&a?gt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${a.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${a.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${a.endX}" cy="${a.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:x}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?Uu(t,new Date(this.now())):null}renderHoloCard(e,t,n){var b,v;let i=this.hass,r=$=>T(i,$),s=!this.holoFolded.has(t),a=this.dayOf(e),l=e.kind==="main",u=l&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,d=a&&a.curve.length>1?Os(a.curve,a.peak):null,c=new Date(this.now()),p=(c.getHours()+c.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},f=l?n.solar??n.consumption??0:e.w??0,m=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return g`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${he(i,f)}</b><span>${r(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${s?g`${l&&this._plants.length>1?g`<div class="fp3d-holo-plants">${this._plants.map($=>g`<span>${$.name}</span><b>${he(i,$.w)}</b>`)}</div>`:x}
              ${a?g`<div class="fp3d-holo-sub">${r("holo_today")} <b>${ie(i,a.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${he(i,a.peak)}</b></div>`:x}
              ${d?gt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${d.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${d.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${d.endX}" cy="${d.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:x}
              <div class="fp3d-holo-grid">
                ${m?g`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${r("holo_battery")}<br /><b>${m.soc!==null?`${Math.round(m.soc)} %`:he(i,Math.abs(m.w??0))}</b>
                      ${m.w!==null&&Math.abs(m.w)>=5?g`<span>${m.w<0?"\u25B2":"\u25BC"} ${he(i,Math.abs(m.w))}</span>`:x}
                    </div>`:x}
                ${l&&n.grid!==null?g`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${r("holo_grid")}<br /><b>${he(i,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":r(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:x}
                ${l&&n.consumption!==null?g`<div class="fp3d-holo-cell fp3d-holo-house">${r("holo_house")}<br /><b>${he(i,n.consumption)}</b></div>`:x}
                ${l&&this._wallboxW!==null?g`<div class="fp3d-holo-cell fp3d-holo-wb">${r("holo_wallbox")}<br /><b>${he(i,this._wallboxW)}</b></div>`:x}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?g`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?g`<span>🔥 ${r("holo_gas")} <b>${ie(i,this._meters.gas,this._meters.gas<10?2:1)} ${ch(i,(b=this.building)==null?void 0:b.energy.gas)}</b></span>`:x}
                    ${this._meters.water!==null?g`<span>💧 ${r("holo_water")} <b>${pb(i,this._meters.water,ch(i,(v=this.building)==null?void 0:v.energy.water))}</b></span>`:x}
                    <span>${r("holo_today_short")}</span>
                  </div>`:x}
              ${u!==null?g`<div class="fp3d-holo-bar"><div style="width:${u}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${r("holo_autarky")}</span><b>${u} %</b></div>`:x}`:x}
      </div>
    </div>`}setAlerts(e){let t=e.map(s=>`${s.kind}:${s.entity}`),n=this.ro?[]:e.filter((s,a)=>!this.seenAlerts.has(t[a]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(s=>`${s.kind}:${s.entity}`).join()&&(this._alerts=e);let i=e.some(s=>!s.quiet);if(i&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!i||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let r=this.directorSettings();if(r!=null&&r.alerts){let s=n[0];if(this.directing.offer({kind:"alert",key:`alert:${s.kind}:${s.entity}`,entity:s.entity},Date.now(),r.hold??Xi)){this.directorShow(()=>this.jumpTo(s));return}}this.alertJump&&this.jumpTo(n[0])}directorSettings(){var t;let e=(t=this.building)==null?void 0:t.settings.director;return this.director&&!this.ro&&q("camera_cockpit")&&nh(e)?e:null}direct(){let e=this.directorSettings(),t=this.hass,n=this.building;if(!e||!t||!n){this.directorSrc&&(this.directing=new Ro,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let i=Date.now(),r=e.hold??Xi,s=`${JSON.stringify(e)}|${n.floors.map(u=>u.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==t.entities||this.directorSrc.building!==n||this.directorSrc.sig!==s){let u=[...new Set(n.floors.flatMap(c=>c.placements.map(p=>p.entity_id)))],d=e.motion??"off";this.directorSrc={registry:t.entities,building:n,sig:s,bells:(e.doorbell?oh(t,e.doorbell_entity):[]).map(c=>({id:c,camera:rh(t,c,u,e.doorbell_camera)})),motion:d==="off"?[]:u.filter(c=>c.startsWith("camera.")).flatMap(c=>ot(t,c).filter(p=>d==="all"||wo(t,p)==="person").map(p=>({sensor:p,cam:c})))}}let a=[];for(let u of this.directorSrc.bells)this.directing.edge(u.id,t.states[u.id],(d,c)=>fa(d,c,i))&&a.push({kind:"doorbell",key:`bell:${u.id}`,entity:u.id,camera:u.camera});for(let u of e.triggers??[])u.entity&&this.directing.edge(`trigger:${u.entity}`,t.states[u.entity],(d,c)=>ih(d,c,i))&&a.push({kind:"trigger",key:`trigger:${u.entity}`,entity:u.entity,camera:u.camera});for(let u of this.directorSrc.motion)this.directing.edge(u.sensor,t.states[u.sensor],(d,c)=>(d==null?void 0:d.state)==="off"&&(c==null?void 0:c.state)==="on")&&a.push({kind:"motion",key:`cam:${u.cam}`,entity:u.sensor,camera:u.cam});if(e.appliances){for(let[u,d]of this.appliances)this.directing.stopped(`app:${u}`,d.running,i)&&a.push({kind:"appliance",key:`app:${u}`,entity:u});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];a.sort((u,d)=>l.indexOf(u.kind)-l.indexOf(d.kind));for(let u of a)if(this.directing.offer(u,i,r)){this.directorShow(()=>this.directorGo(u));break}}directorShow(e){let t=this.viewer;if(!t)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:t.getView()}),t.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(e){let t=this.building;if(t){if(e.camera&&t.floors.some(n=>n.placements.some(i=>i.entity_id===e.camera))){let n=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(e.kind==="appliance"){let n=this.appliances.get(e.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),t=this.directorBack;e&&(this.directorBack=null,!(!e.back||!t)&&(this._through&&(this._through=null),this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId?setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60):this.roomId&&t.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:null}),60),setTimeout(()=>{var n,i;(n=this.viewer)==null||n.flyTo(t.view),(i=this.viewer)==null||i.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){var d;let n=this.building,i=this.hass,r=n==null?void 0:n.floors.find(c=>c.id===e),s=r?le(r).find(c=>c.id===t):void 0;if(!n||!i||!r||!s||this.ro)return;let a=new Set(Ie(i,s.area_id).filter(c=>V(c)==="light"));for(let c of r.placements)V(c.entity_id)==="light"&&B([c.x,c.z],s.points)&&a.add(c.entity_id);for(let c of r.furniture){let p=(d=this.furnitureLinks.get(c.id))==null?void 0:d.entity;p&&so(c.type)&&B([c.x,c.z],s.points)&&a.add(p)}let l=[...a].filter(c=>!this.confirmSet.has(c));if(!l.length)return;let u=l.some(c=>{var p;return((p=i.states[c])==null?void 0:p.state)==="on"});i.callService("homeassistant",u?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let i=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let a=this.heatMode,l=ep(n,t,a);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,i=new Map([...l].map(([u,d])=>[u,Zu(a,d)]))}let r=new Map;if(this.heatMode==="values")for(let a of t.floors)for(let l of le(a)){let u=Ze(n,a,l,"temperature"),d=Ze(n,a,l,"humidity"),c=Ze(n,a,l,"co2"),p=[u!==null?`${ie(n,Tt(n,u),1)} ${Ye(n)}`:null,d!==null?`${ie(n,d,0)} %`:null,c!==null?`${ie(n,c,0)} ppm`:null].filter(h=>!!h);p.length&&r.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(r),this._alerts.length){i??=new Map;let a=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let u=au(l).map(d=>d*a);if(l.roomId)i.set(l.roomId,u);else for(let d of t.floors)if(!l.floorId||d.id===l.floorId)for(let c of d.rooms)i.set(c.id,u)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(i??=new Map,i.set(this.roomFlash.roomId,[.9,.95,1]));let s=i?[...i].map(([a,l])=>`${a}:${l.map(u=>u.toFixed(2)).join(",")}`).join(";"):"";s!==this.tintSig&&(this.tintSig=s,e.setRoomTint(i))}furnitureMarkers(e,t,n,i){var y,w,S,I,P,C,R,G;let r=[],s=[],a=new Map,l=new Map,u=new Set(n),d=q("household"),c=[];this.binHolos=[];let p=new Map(this.scene.filter(k=>k.kind==="glow").map(k=>[k.furnitureId,k]));for(let k of t.floors)for(let _ of k.furniture){let E=this.furnitureLinks.get(_.id),A=this.stateFaces(e,_);if(A.length&&a.set(_.id,{color:A[0].color,level:A[0].level,faces:A}),so(_.type)){r.push(this.lampMarker(e,k,_,(E==null?void 0:E.entity)??null));let W=_.type==="lamp_ceiling_fan"||$r($e(_.type))?ba(_):null;W&&r.push(this.lampMarker(e,k,_,W,!0));continue}if(_.type==="wall_switch"){let W=yn(_);W.forEach((de,We)=>de&&l.set(`${_.id}#${We}`,`ws:${de}`));let ce=Yo(_);a.set(_.id,{color:[0,0,0],level:0,keys:W.map(de=>Or(e,de)?bb:null),switchRing:ce?_t(e.states[ce]):null});continue}if(_.type==="wall_socket"){let W=typeof _.run_w=="number"&&_.run_w>0?_.run_w:5,ce=null,de=null,We=wn(_).map((me,Xe)=>{me.entity?l.set(`${_.id}#${Xe}`,`ws:${me.entity}`):me.power&&l.set(`${_.id}#${Xe}`,me.power);let Ee=me.power?be(e.states[me.power]):null;return me.power&&Ee!==null&&(ce=(ce??0)+Math.max(0,Ee),de??=me.power,i.has(me.power)||(i.add(me.power),s.push({id:me.entity??me.power,powerEntity:me.power,floorId:k.id,x:_.x,z:_.z,power:Math.max(0,Ee)}))),(me.entity?Or(e,me.entity):(Ee??0)>W)?_b:null});if(a.set(_.id,{color:[0,0,0],level:0,keys:We}),de!==null&&ce!==null&&!n.has(de)){let me=ce;n.add(de);let Xe=k.rooms.find(Ee=>Ee.points.length>=3&&B([_.x,_.z],Ee.points));r.push({id:de,floorId:k.id,roomId:(Xe==null?void 0:Xe.id)??null,x:_.x,z:_.z,y:gh(_)+Se(k,_),icon:on(_.icon||"power-socket-eu"),name:_.name||ze(e,_.type),ownName:_.name||void 0,showName:!!_.show_name,text:he(e,me),active:me>W,unavailable:!1,glow:null,furnitureId:_.id,show:_.marker??void 0,fromFurniture:!0})}continue}let F=p.get(_.id);F&&a.set(_.id,{color:F.color,level:F.level});let j=(_.type==="plant"||ms(_.type))&&!!_.moisture&&_.moisture!=="none";if(_.type==="waste_bin"||_.type==="mailbox"||j){let W=d?this.householdState(e,k,_):null;W!=null&&W.screen&&a.set(_.id,W.screen),W!=null&&W.marker&&r.push(W.marker);let ce=_.type==="waste_bin"?_.bin_source:_.type==="mailbox"?_.entity:_.moisture;if(d&&typeof ce=="string"&&ce!=="none"&&l.set(_.id,`hh:${ce}#${_.id}`),W!=null&&W.item&&c.push(W.item),!j)continue}if(d){let W=Gd(_,e);W.length&&!a.has(_.id)&&a.set(_.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let ce of W){let de=_.name||ze(e,_.type);c.push({icon:"wrench-outline",text:ce===_.service?T(e,"hh_service",{name:de}):T(e,"hh_service2",{name:de,what:K(e,ce)}),entity:ce})}(_.type==="fridge"||_.type==="fridge_smart")&&pi(_,e)&&(a.set(_.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),c.push({icon:"fridge-alert-outline",text:T(e,"hh_fridge_open",{name:_.name||ze(e,_.type)}),entity:Ft(_)[0]??null}))}let O=_.type==="parking"&&q("auto_pro")&&!!_.car?ho(e,_):null,L=qd(_.type),J=!!L,Z=_.type==="home_battery"?_.soc:_.type==="wallbox"?_.status:_.type==="parking"&&O?((y=_.car)==null?void 0:y.device)??O.entities.soc:d&&J?_.remaining??null:null,te=Z&&Z!=="none"?Z:null,ae=_.extra&&_.extra!=="none"&&e.states[_.extra]?_.extra:null,_e=ae?Ae(e,e.states[ae]):"",ve=W=>_e?W?`${W} \xB7 ${_e}`:_e:W,ne=E??(te||ae?{entity:null,power:null}:void 0);if(!ne)continue;let Le=_.type==="home_battery"?te??ne.entity??ne.power:ne.entity??ne.power??te??ae;l.set(_.id,Le);let U=ne.entity?e.states[ne.entity]:void 0,Fe=_.type==="water_heater"?Bl(e,io(e,{entity:ne.entity})):null,Ke=_.type==="access_point"?Ml(e,oo(e,{entity:ne.entity})):null,un=_.type==="meter"?t.energy.grid_invert&&!_.export:_.type==="home_battery"?t.energy.battery_invert&&!_.charge:!1,Me=ne.power?be(e.states[ne.power],un):null,Mt=_.type==="home_battery"&&_.charge&&_.charge!=="none"?_.charge:_.type==="meter"&&_.export&&_.export!=="none"?_.export:null,Ne=Mt?be(e.states[Mt]):null;Ne!==null&&(Me=Math.max(0,Me??0)-Math.max(0,Ne)),ne.power&&Me!==null&&!i.has(ne.power)&&(i.add(ne.power),s.push({id:Le,powerEntity:ne.power,floorId:k.id,x:_.x,z:_.z,power:Math.max(0,Me),wallbox:_.type==="wallbox"||void 0}));let Vt=typeof _.run_w=="number"&&_.run_w>0?_.run_w:10,ut=typeof _.run_w=="number"&&_.run_w>0&&Me!==null&&Me<=_.run_w,pt=!!ne.entity&&/^(switch|input_boolean)\./.test(ne.entity)&&Me!==null,D=(Me??0)>Vt||!pt&&((U==null?void 0:U.state)==="on"||(U==null?void 0:U.state)==="running"||Dr(U)&&Qe(U));J&&this.appliances.set(_.id,{floorId:k.id,x:_.x,z:_.z,entity:ne.entity??ne.power??_.id,running:D});let we=null;if(d&&J){let W=_.remaining&&_.remaining!=="none"?e.states[_.remaining]:void 0,ce=ys(W),de=D||!ne.power&&!ne.entity&&(ce??0)>0,We=Ft(_),me=Oo=>We.some(Pa=>{let jt=e.states[Pa];return!!(jt!=null&&jt.last_changed)&&Date.parse(jt.last_changed)>Oo}),Xe=this.finished.update(_.id,de,me),Ee=_.name||(ne.entity?K(e,ne.entity):ze(e,_.type));de?(D||a.set(_.id,mh(L)),ce!==null&&!xs(U,ne.power?Me:null,Vt)&&(we=T(e,"hh_left",{t:Kd(ce)}),c.push({icon:"timer-outline",text:`${Ee}: ${we}`,entity:_.remaining??ne.entity}))):(ws(U)||ws(W)||Xe)&&(we=T(e,"hh_done"),a.set(_.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),c.push({icon:"check-circle-outline",text:T(e,"hh_finished",{name:Ee}),entity:ne.entity??ne.power}))}if(O&&Bn(e,_)){let W=[];if(O.soc!==null){let ce=O.soc>=50?[.3,1,.5]:O.soc>=20?[1,.8,.25]:[1,.3,.25];W.push({part:"band",color:ce,level:O.charging?1:.6})}if(O.locked===!1&&W.push({part:"lights",color:[1,.42,.02],level:1}),O.climateOn){let ce=O.entities.climate?e.states[O.entities.climate]:void 0,de=!!ce&&(ce.attributes.hvac_action==="cooling"||ce.state==="cool");W.push({part:"cabin",color:de?[.45,.8,1]:[1,.55,.22],level:.35})}W.length&&a.set(`${_.id}:vehicle`,{color:W[0].color,level:W[0].level,faces:W})}if(_.type==="radiator"&&(U&&V(U.entity_id)==="climate"||_.heat_sensor)){let W=U&&V(U.entity_id)==="climate"?U.attributes:null;if(Mc(e,_.heat_sensor)??(W==null?void 0:W.hvac_action)==="heating"){let de=W&&typeof W.temperature=="number"&&typeof W.current_temperature=="number"?W.temperature-W.current_temperature:1;a.set(_.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,de))})}else p.has(_.id)&&a.delete(_.id)}else if(Ke){let W=Il(Ke);W&&a.set(_.id,{color:W,level:1,apRing:W})}else if(Fe){let W=Wl(_);Fe.on&&a.set(_.id,{color:Fe.heating?[1,.45,.12]:[.25,.85,1],level:Fe.heating?1:.55,plain:!0,dots:{n:W,lit:Math.max(0,Math.min(W,Math.round(Fe.showers??0))),color:[.35,.9,1]}})}else if(_.type==="ac_unit"&&U&&V(U.entity_id)==="climate"){let W=Ec(U);W&&a.set(_.id,W)}else if(L&&D)a.set(_.id,mh(L));else if(_.type==="stove"||kr(_.type)){let W=Pc(U,D);W>0&&a.set(_.id,{color:[1,.05,.01],level:W,faces:[{part:"burners",color:[1,.05,.01],level:W}]})}let ht=$e(_.type),Fo=!!ht&&!ht.light&&ht.parts.some(W=>W.glow);if(U&&Fo&&q("sound")&&V(U.entity_id)==="media"&&U.state==="playing"&&!ti(_.type)){let W=typeof U.attributes.volume_level=="number"?U.attributes.volume_level:.5;a.set(_.id,{color:Kr(U)??[.22,.88,1],level:.5+.5*W,ring:!0,plain:!0})}if(U&&ti(_.type)&&!kr(_.type)&&!(Bo(_.type)&&V(U.entity_id)==="cover")){let W=q("screens"),ce=V(U.entity_id)==="light"?_t(U):null,de=V(U.entity_id)==="media"&&["playing","on","paused","idle"].includes(U.state),We=W&&V(U.entity_id)==="media"?Kr(U):ce?ce.color:Qe(U)||de?[.22,.88,1]:null,me=W&&V(U.entity_id)==="media"?U.attributes.entity_picture??null:null;We&&a.set(_.id,{color:We,level:U.state==="playing"?1:.6,picture:me,ring:Fo&&q("sound")&&U.state==="playing"})}if(U&&!A.length&&(ht==null?void 0:ht.family)==="towel_radiator"&&Qe(U)&&a.set(_.id,{color:[1,.55,.25],level:.85,faces:[{part:"all",color:[1,.55,.25],level:.85}]}),u.has(Le))continue;n.add(Le);let pn=ne.entity?V(ne.entity):null,hn=k.rooms.find(W=>W.points.length>=3&&B([_.x,_.z],W.points)),ft=U&&Rl(_.type)&&U.entity_id.startsWith("water_heater.")?Sb(e,U):null;r.push({id:Le,floorId:k.id,roomId:(hn==null?void 0:hn.id)??null,x:_.x,z:_.z,y:gh(_)+Se(k,_),icon:_.icon?on(_.icon):ft?on("water-boiler"):Ln(pn??"switch"),name:_.name||(Ke&&ne.entity?Wo(e,ne.entity):ne.entity?K(e,ne.entity):ze(e,_.type)),ownName:_.name||void 0,showName:!!_.show_name,text:ve(we??(Ke?this.apText(e,Ke):Fe?this.heaterText(e,Fe):O?this.carText(e,O,!!U&&!Di.has(U.state.toLowerCase())):_.type==="home_battery"?this.batteryText(e,te,Me):_.type==="wallbox"?this.wallboxText(e,te,Me):_.type==="meter"?this.meterText(e,Me):ft?ft.text:U&&!pt?Ae(e,U):ut?T(e,"pin_standby"):Me!==null?he(e,Math.max(0,Me)):"")),active:we?!0:Ke?Ke.status==="up":Fe?Fe.heating:O?O.charging:ft?ft.on:U&&!pt?Qe(U):(Me??0)>(typeof _.run_w=="number"&&_.run_w>0?_.run_w:5),unavailable:U?ee(U):!1,glow:null,furnitureId:_.id,energyDevice:_.type==="inverter"||_.type==="home_battery"||_.type==="wallbox"||_.type==="meter"||!!O||!!ae,...ut?{standby:ut}:{},show:_.marker??(O||we?"always":void 0),fromFurniture:!0})}let h=t.settings.household;if(h!=null&&h.bin_next_only||typeof(h==null?void 0:h.bin_days)=="number"){let k=Vd(this.binHolos.filter(_=>!_.icon),{nextOnly:h.bin_next_only,ahead:h.bin_days});this.binHolos=this.binHolos.filter(_=>_.icon||k.has(_.id))}let f=(w=t.settings.household)==null?void 0:w.notes,m=f&&f!=="none"?e.states[f]:void 0;if(d&&m&&!ee(m)&&m.state.trim()){let k=m.state.split(/\s*(?:\||\n|;)\s*/).map(_=>_.trim()).filter(Boolean).slice(0,8);c.unshift(...k.map(_=>({icon:"pin-outline",text:_,entity:f})))}if(d&&this.dayEvents.length){let k=c.findIndex(_=>_.icon!=="pin-outline");c.splice(k<0?c.length:k,0,...Hd(this.dayEvents,new Date,e.language))}this._household=c.filter((k,_)=>c.findIndex(E=>E.text===k.text)===_),this.cameraScreens=0;let b=Br(e,t.floors),v=q("screens");for(let k of t.floors)for(let _ of k.furniture){if(!v||!((S=_.pictures)!=null&&S.length)||!ti(_.type)||_.type==="fridge_smart"&&((I=b.get(_.id))!=null&&I.right))continue;let E=_.pictures.find(j=>Oc(e,j));if(!E)continue;let A=this.pictureUrl(E.image),F=_.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];A&&a.set(_.id,{color:F,level:1,picture:A,plain:!0})}for(let k of t.floors)for(let _ of k.furniture){if(_.type!=="neon_sign")continue;let E=((P=this.furnitureLinks.get(_.id))==null?void 0:P.entity)??null,A=Tu(_,E?e.states[E]:void 0,!!E),F=Au(Eu(_.sign_text),A.color,A.on,A.level,Math.max(.05,_.w)/Math.max(.05,_.h));a.set(_.id,{color:[.015,.015,.03],level:1,picture:F,plain:!0})}let $=new Map;for(let k of t.floors)for(let _ of k.furniture){if(!$r($e(_.type)))continue;let E=ba(_)??((C=this.furnitureLinks.get(_.id))==null?void 0:C.entity)??null,A=E?e.states[E]:void 0,F=E==null?void 0:E.split(".")[0];$.set(_.id,F==="fan"?uh(A):F!=="light"&&A&&Qe(A)?.6:0)}(R=this.viewer)==null||R.setSpinSpeeds($),(G=this.viewer)==null||G.setLiveStates(e.states,k=>{var _;return((_=this.furnitureLinks.get(k))==null?void 0:_.entity)??null});for(let k of p.values())k.top?a.set(k.furnitureId,{color:k.color,level:k.level,faces:[{part:"strata",color:k.color,top:k.top,level:k.level}]}):k.plate?a.set(k.furnitureId,{color:k.color,level:k.level,faces:[{part:"plate",color:k.color,level:k.level}]}):k.band&&a.set(k.furnitureId,{color:k.color,level:k.level,faces:[{part:"band",color:k.color,level:k.level}]});for(let k of this.scene)k.kind==="screen"&&(a.set(k.furnitureId,{color:k.color??[.06,.08,.14],level:k.level??1,picture:k.picture,plain:!0}),k.popup&&l.set(k.furnitureId,`popup:${k.popup}`));return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:r,consumers:s,screens:a,targets:l}}watchHousehold(e,t){var u;let n=t.floors.flatMap(d=>d.furniture).filter(d=>d.type==="waste_bin"||d.type==="mailbox"),i=(((u=t.settings.household)==null?void 0:u.calendars)??[]).filter(d=>typeof d=="string"&&d.startsWith("calendar.")),r=q("household")&&(n.length>0||i.length>0)&&!this.replay,s=r?Cd(t.floors):[],a=`${s.join(",")}|${i.join(",")}`;if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="",this.dayEvents=[];return}let l=async d=>{let[c,p]=await Promise.all([s.length?Fd(d,s):null,i.length?Od(d,i):null]);c&&(this.pickups=c),this.dayEvents=p??[],this.syncDevices(!0)};(a!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=a,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void l(this.hass??e),6e5),s.length||i.length?l(e):this.dayEvents=[])}householdState(e,t,n){var l,u,d,c;let i=p=>{let h=parseInt(p.slice(1),16);return[(h>>16&255)/255,(h>>8&255)/255,(h&255)/255]};if(n.type==="waste_bin"){let p=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!p)return null;let h=bs(n,e,this.pickups,new Date,{from:(u=(l=this.building)==null?void 0:l.settings.household)==null?void 0:u.bin_from,until:(c=(d=this.building)==null?void 0:d.settings.household)==null?void 0:c.bin_until});if(!h)return null;let f=h.days===0?T(e,"bin_today"):h.days===1?T(e,"bin_tomorrow"):T(e,"bin_in_days",{n:h.days}),m=i(Rd(n)[1]),b=Math.max(...m),$=b-Math.min(...m)<.12?[.92,.95,1]:m.map(P=>Math.min(1,P/Math.max(.001,b)*1.05)),y=n.name||T(e,`bin_kind_${n.bin_kind??"rest"}`),w=_s(n,e),S=`#${$.map(P=>Math.round(P*255).toString(16).padStart(2,"0")).join("")}`,I=w?T(e,"bin_out_done"):f;return this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:Se(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:y,color:S,when:I,soon:h.days<=1&&!w,days:h.days,out:w}),{item:h.days<=1?{icon:w?"check-circle-outline":"trash-can-outline",text:`${y}: ${I}`,entity:p,hot:h.glow&&!w}:void 0}}if(n.type!=="mailbox"){let p=vs(n,e),h=[1,.55,.12],f=n.name||ze(e,n.type);return p?(this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:Se(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:f,color:"#ff8c1f",when:T(e,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:h,level:.9,faces:[{part:"band",color:h,level:.9}]},item:{icon:"watering-can-outline",text:T(e,"hh_plant",{name:f}),entity:n.moisture??null,hot:!0}}):null}let r=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!r)return null;let s=Wd(n,e),a=[1,.62,.15];return s&&this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:Se(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:n.name||ze(e,n.type),color:"#ffb547",when:T(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:s?{color:a,level:1,faces:[{part:"top",color:a,level:1},{part:"band",color:a,level:.8}]}:void 0,item:s?{icon:"email-alert-outline",text:n.name?`${n.name}: ${T(e,"mailbox_post")}`:T(e,"mailbox_post"),entity:r,hot:!0}:void 0}}robotPaths(e,t){var r,s;let n=this.replay;if(!n)return[];let i=[];for(let a of t.floors){let l=a.rooms.filter(u=>u.points.length>=3);for(let u of a.furniture){if(!Yt(u.type))continue;let d=((s=(r=this.furnitureLinks)==null?void 0:r.get(u.id))==null?void 0:s.entity)??null;if(!d)continue;let c=n.robotRooms(d,fo(e,d,u.room_sensor)),p=[];for(let h of c){let f=Gr(e,l,h),m=f?Ve(f.points):null,b=p[p.length-1];m&&(!b||b[0]!==m[0]||b[1]!==m[1])&&p.push([m[0],m[1]])}p.length&&i.push({floorId:a.id,points:p})}}return i}trailNow(e,t){let n=this.now(),i=Eo(e,t),r=this.replay?this.replay.rows(i.map(a=>a.entity),n-Po,n):this.trailRows,s=i.map(a=>{let l=e.states[a.entity];return{entity:a.entity,state:l==null?void 0:l.state,lastChanged:l!=null&&l.last_changed?Date.parse(l.last_changed):void 0}});return hp(i,pp(r,s,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!q("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!q("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let i=Eo(t,n).map(r=>r.entity);if(i.length){try{let r=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Po).toISOString(),entity_ids:i,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=r??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,t){let n=[];if($d()){let i=new Set(t.floors.flatMap(r=>r.placements.map(s=>s.entity_id)).filter(r=>V(r)==="camera"));for(let r of i){let s=e.states[r],a=s==null?void 0:s.attributes.entity_picture;!a||ee(s)||n.push({id:r,url:a.startsWith("data:")?a:`${a}${a.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t==null?void 0:t.attributes.entity_picture;return!n||ee(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),kl(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(i=>{if(n.has(i.type)||i.type.startsWith("lamp_")&&i.type!=="lamp_floor"&&i.type!=="lamp_uplight"||i.h<.04||Se(e,i)>.12)return!1;let r=$e(i.type);return r&&(r.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(i.type))?!1:B([i.x,i.z],t)||Qt(i).some(s=>B(s,t))}).map(i=>Qt(i))}robotInfos(e,t){var i,r;let n=[];for(let s of t.floors)for(let a of s.furniture){if(!Yt(a.type))continue;let l=((i=this.furnitureLinks.get(a.id))==null?void 0:i.entity)??null,u=l?(r=e.states[l])==null?void 0:r.state:void 0,d=Vr(u)?"cleaning":u==="returning"?"returning":u==="error"?"error":u==="docked"||!u?"docked":"idle",c=a.rotation*Math.PI/180,p=Pt(a.type),h=a.d*(p?zl($e(a.type)):.14),f=[a.x-Math.sin(c)*h,a.z+Math.cos(c)*h],m=I=>({id:I.id,rooms:I.rooms.filter(P=>P.points.length>=3)}),b=m(s).rooms,v=new Set(t.floors.filter(I=>I!==s&&I.furniture.some(P=>{var C;return Yt(P.type)&&(((C=this.furnitureLinks.get(P.id))==null?void 0:C.entity)??null)===l})).map(I=>I.id)),$=d==="cleaning"&&l?Vc(e,t.floors.map(m),s.id,l,fo(e,l,a.room_sensor),v):null,y=$&&t.floors.find(I=>I.id===$.floor.id)||s,w=($==null?void 0:$.room)??b.find(I=>B(f,I.points)),S=d==="cleaning"&&w?this.robotObstacles(y,w.points):[];n.push({id:a.id,floorId:y.id,rest:f,restHeading:-c,mode:d,room:(w==null?void 0:w.points)??null,roomId:(w==null?void 0:w.id)??null,obstacles:S,...p?{model:{type:a.type,w:a.w,d:a.d,h:a.h}}:{}})}return n}batteryText(e,t,n){var s;let i=t?Number((s=e.states[t])==null?void 0:s.state):Number.NaN,r=[];return Number.isFinite(i)&&r.push(`${ie(e,i,0)} %`),n!==null&&Math.abs(n)>=10&&r.push(`${n<0?"\u25B2":"\u25BC"} ${he(e,Math.abs(n))}`),r.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?he(e,0):`${T(e,t<0?"energy_grid_export":"energy_grid_import")} ${he(e,Math.abs(t))}`}wallboxText(e,t,n){let i=t?e.states[t]:void 0,r=String((i==null?void 0:i.state)??"").toLowerCase(),s=Ic(r),a=(n??0)>50||s.charging,l=i!=null&&i.entity_id.startsWith("binary_sensor.")?r==="on":s.plugged,u=a?T(e,"wallbox_charging"):l?T(e,"wallbox_plugged"):i&&!ee(i)&&!i.entity_id.startsWith("binary_sensor.")?Ae(e,i):"",d=n!==null&&n>50?he(e,n):"";return[u,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],i=t.state_entity&&t.state_entity!=="none"&&t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[r,s]of i){if(!r||r==="none")continue;let a=e.states[r];if(!a||ee(a)||!(Qe(a)||a.state==="home"||a.state==="occupied"||a.state==="on"))continue;let u=V(r)==="light"?_t(a):null;n.push({part:s,color:u?u.color:[1,.71,.28],level:u?u.level:.85})}return n}carText(e,t,n){let i=s=>T(e,s);if(n||t.away!==null){let s=t.away?` \xB7 ${t.away}`:"";return`${i("car_away")}${s}`}let r=[];return t.soc!==null&&r.push(`${ie(e,t.soc,0)} %`),t.range!==null&&r.push(`${ie(e,t.range,0)} ${t.rangeUnit}`),t.charging?r.push(t.chargingW!==null?`\u26A1 ${he(e,t.chargingW)}`:`\u26A1 ${i("car_charging_short")}`):t.plugged&&r.push("\u{1F50C}"),t.locked!==null&&r.push(t.locked?"\u{1F512}":"\u{1F513}"),r.join(" \xB7 ")}ceilingAt(e,t,n){var l;let r=((l=e.rooms.find(u=>u.ceiling_height&&u.points.length>=3&&B([t,n],u.points)))==null?void 0:l.ceiling_height)||e.height,s=this.building;if(!s||!Xr(s).some(u=>Qc(u,e.elevation+r)&&Zr(u,e.elevation)))return r;let a=Jc(s,t,n,e.elevation);return a===null?r:Math.max(.5,Math.min(r,a-e.elevation))}apOf(e){var t,n;if(!this.hass||!this.building)return null;for(let i of this.building.floors)for(let r of i.furniture){if(r.type!=="access_point")continue;let s=((n=(t=this.furnitureLinks)==null?void 0:t.get(r.id))==null?void 0:n.entity)??r.entity;if(s===e)return oo(this.hass,{entity:s})}return null}apText(e,t){if(t.status==="down")return T(e,"ap_down");if(t.status==="busy")return T(e,"ap_busy");let n=[];return t.clients!==null&&n.push(T(e,t.clients===1?"ap_client":"ap_clients",{n:Math.round(t.clients)})),t.cpu!==null&&n.push(`CPU ${ie(e,t.cpu,0)} %`),n.join(" \xB7 ")||T(e,"ap_up")}heaterPower(e){var t,n;if(!this.hass||!this.building||!e.startsWith("water_heater."))return null;for(let i of this.building.floors)for(let r of i.furniture){if(r.type!=="water_heater")continue;let s=((n=(t=this.furnitureLinks)==null?void 0:t.get(r.id))==null?void 0:n.entity)??r.entity;if(s===e)return io(this.hass,{entity:s}).power}return null}heaterText(e,t){if(!t.on)return T(e,"state_off");let n=Ye(e),i=s=>`${ie(e,s,0)} ${n}`,r=[t.current!==null?t.target!==null&&t.heating?`${i(t.current)} \u2192 ${i(t.target)}`:i(t.current):null];return t.showers!==null&&r.push(T(e,t.showers===1?"heater_shower":"heater_showers",{n:Math.round(t.showers)})),t.remaining!==null&&r.push(T(e,"heater_left",{min:Math.round(t.remaining)})),r.filter(Boolean).join(" \xB7 ")}lampMarker(e,t,n,i,r=!1){let s=i?e.states[i]:void 0,a=$e(n.type),l=ic[n.type]??(a==null?void 0:a.light)??"floor",u=t.rooms.some(y=>y.points.length>=3&&B([n.x,n.z],y.points)),d=l==="strip"&&!u?bt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!a?n.mount_y:a||l==="wall"||l==="strip"?Se(t,n):l==="table"?Ko(t,n.x,n.z,n.h):l==="bollard"||l==="garden"?bt(t,n.x,n.z):0,c=t.rooms.find(y=>y.points.length>=3&&B([n.x,n.z],y.points)),p=this.ceilingAt(t,n.x,n.z),h=(a?a.mount==="ceiling":["ceiling","ceiling_fan","downlight","spot","panel","pendant"].includes(l))&&n.mount_y==null,f=h?t.height-p:0,m=a&&h?Math.max(0,d-f):d,b=qo.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+Uo(n.type,n.h)):Math.abs(f)>.01?p:void 0,v=b??t.height,$=a?a.mount==="ceiling"?Math.max(.5,m-.15):m+n.h+.2:{ceiling:v-.3,ceiling_fan:v-.45,downlight:v-.25,spot:v-.35,panel:v-.25,pendant:Math.max(.6,v-n.h-.25),floor:m+n.h+.25,uplight:m+n.h+.25,table:m+n.h+.2,wall:m+n.h+.2,strip:n.upright?m+n.w+.15:Math.max(.3,m-.2),bollard:m+n.h+.25,garden:m+n.h+.25}[l];return{id:i??`lamp:${n.id}`,floorId:t.id,roomId:(c==null?void 0:c.id)??null,x:n.x,z:n.z,y:$,icon:n.icon?on(n.icon):Ln(r?"fan":"light"),name:n.name||(i?K(e,i):ze(e,n.type)),text:s?Ae(e,s):"",active:s?Qe(s):!1,unavailable:s?ee(s):!1,glow:r?null:s?Ts(Ac(Tc(_t(s,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_color),n.glow_scale):null,lamp:l,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,size:[n.w,n.d,n.h],base:m,top:b,pickable:!!i,furnitureId:r?`${n.id}:fan`:n.id,fanBlades:r||void 0,fanSpeed:r?uh(s):void 0,fanStatic:n.type==="lamp_ceiling_fan"&&!r&&!ba(n)?!0:void 0,pack:a?n.type:null,finish:a?n.finish??null:null,lightY:a?a.mount==="ceiling"?m:m+n.h*.85:void 0,effect:!!s&&s.state==="on"&&!n.glow_color&&zc(s)&&typeof s.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(s.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(e){var i;if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let t=(i=this.building)==null?void 0:i.floors.find(r=>r.id===e.floorId),n=t?le(t).find(r=>r.id===this.roomId):void 0;return!!n&&B([e.x,e.z],n.points)}showPin(e){if(e.id.startsWith("lamp:"))return!1;if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="active")return e.active;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let t=V(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){if(n.lock&&!n.cover||jr(n.cover)){e.set(t,`opening:${t}`);continue}let i=n.cover??n.contact??n.tilt;i&&e.set(t,i)}return e}scheduleThumbs(e=600){var i;clearTimeout(this.thumbTimer);let t=((i=this.building)==null?void 0:i.floors.filter(r=>r.rooms.length).length)??0;if(!this.floorThumbs||t<2||this.clean&&this._narrowStage){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return x;let e=new Map(this.building.floors.map(r=>[r.id,r.name])),t=[...this._thumbs].sort((r,s)=>{var a,l;return(((a=this.building.floors.find(u=>u.id===s.floorId))==null?void 0:a.elevation)??0)-(((l=this.building.floors.find(u=>u.id===r.floorId))==null?void 0:l.elevation)??0)}),n=this._thumbsCompact,i=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return g`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${T(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${T(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${T(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${i}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${T(this.hass,"all_floors")}</span>
      </button>
      ${t.map(r=>g`<button class="fp3d-thumb" aria-pressed=${this.floorId===r.floorId} @click=${()=>this.fire("floor-tap",{floorId:r.floorId})}>
          ${n?x:g`<img src=${r.url} alt="" />`}
          <span>${e.get(r.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!0);if(/^(module|popup|trail|lamp):/.test(e))return this.onDeviceTap(e,t,n);if(this.ro){this.onDeviceTap(e,t,n);return}let i=this.apOf(e);if(i){!i.restart||!this.hass?Te(this,e):confirm(T(this.hass,"ap_restart_confirm",{name:Wo(this.hass,e)}))&&this.hass.callService("button","press",{entity_id:i.restart});return}if(q("auto_pro")&&this.hass&&this.building)for(let s of this.building.floors)for(let a of s.furniture){if(a.type!=="parking"||!a.car)continue;let l=ho(this.hass,a);if([a.entity,a.car.device,...Object.values(l.entities)].filter(d=>!!d&&d!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:l};return}}let r=V(e);r==="light"||r==="cover"||r==="switch"||r==="fan"||r==="lock"||r==="camera"?this._menu={entity:e,x:t,y:n}:Te(this,e)}onDeviceSwipe(e,t,n,i,r){var l;let s=(l=this.hass)==null?void 0:l.states[e];if(this.ro)return!1;if(t==="start"){if(!s||ee(s)||this.confirmSet.has(e))return!1;let u=V(e);if(u==="light"&&Ys(s).dim){let d=s.state==="on"?typeof s.attributes.brightness=="number"?Math.round(s.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:d,value:d,x:i,y:r},this.swipeFar=0,!0}if(u==="cover"&&Qs(s)){let d=s.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:d,value:d,x:i,y:r},this.swipeFar=0,!0}return!1}let a=this._swipe;if(!a||a.entity!==e)return!1;if(t==="move"){this.swipeFar=Math.max(this.swipeFar,Math.abs(n));let u=Math.abs(n)<=_a?0:n-Math.sign(n)*_a,d=Math.round(Math.min(100,Math.max(0,a.start-u/220*100)));d!==a.value&&(this._swipe={...a,value:d});let c=performance.now();a.kind==="light"&&d!==a.start&&c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else{if(clearTimeout(this.swipeTimer),this.swipeFar<=_a)return this._swipe=null,this.onDeviceTap(e,i,r),!0;a.value!==a.start&&this.applySwipe(),this.swipeTimer=setTimeout(()=>this._swipe=null,700)}return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>{var t;return(t=this.viewer)==null?void 0:t.focus(e.floorId,e.x,e.z,e.y,e.entity)},120)}renderBinInfo(){var d;let e=this._binInfo,t=this.hass,n=e&&((d=this.building)==null?void 0:d.floors.flatMap(c=>c.furniture).find(c=>c.id===e.furnitureId));if(!e||!t||!n)return x;let i=Ld(n,t,this.pickups),r=new Date;r.setHours(0,0,0,0);let s=c=>{let p=Math.round((c.getTime()-r.getTime())/864e5);return p===0?T(t,"bin_today"):p===1?T(t,"bin_tomorrow"):c.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},a=n.name||T(t,`bin_kind_${n.bin_kind??"rest"}`),l=_s(n,t),u=c=>{c.stopPropagation(),typeof n.bin_out=="string"&&Dn(t,n.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return g`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${a}</span>
      ${i.length?i.map(c=>g`<b>${s(c.day)}${c.summary&&c.summary!==a?g` <small>· ${c.summary}</small>`:x}</b>`):g`<b>${T(t,"bin_none")}</b>`}
      ${Nd(n)&&!this.ro?g`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${u}>${l?T(t,"bin_out_done"):T(t,"bin_out_mark")}</button>`:l?g`<small>${T(t,"bin_out_done")}</small>`:x}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!q("household")||this.panelOpen)return x;let e=()=>{this._hhFolded=!this._hhFolded,wb("neonplan3d.hhFolded",this._hhFolded)};return g`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${T(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?x:this._household.map(t=>g`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):Te(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderClock(){var s;let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),x;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let t=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),i=(s=this.hass.config)==null?void 0:s.time_zone,r=a=>{try{return t.toLocaleString(n,i?{...a,timeZone:i}:a)}catch{return t.toLocaleString(n,a)}};return g`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${r({hour:"2-digit",minute:"2-digit",...Kn(this.hass)})}</b><span>${r({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return x;let t=this._alerts.slice(0,3);return g`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>g`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${Ot(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Ot(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?g`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:x}
    </div>`}renderScenes(){var r,s;let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return x;let t=e.floors.flatMap(a=>le(a)).find(a=>a.id===this.roomId),n=t?Ie(this.hass,t.area_id).filter(a=>V(a)==="scene"||V(a)==="script").slice(0,6):[];if(!n.length)return x;let i=t!=null&&t.area_id?(s=(r=this.hass.areas)==null?void 0:r[t.area_id])==null?void 0:s.name:void 0;return g`<div class="fp3d-scenes">
      ${n.map(a=>g`<button class="fp3d-chip" aria-pressed=${this._sceneFired===a} @click=${()=>this.runScene(a)}>${K(this.hass,a,i)}</button>`)}
    </div>`}async syncPets(){var s,a,l,u,d,c,p;let e=this.building,t=this.viewer,n=((s=e==null?void 0:e.settings.pets)==null?void 0:s.on)!==!1&&this.petsOn!==!1,i=n?((a=e==null?void 0:e.settings.pets)==null?void 0:a.list)??[]:[],r=n&&!!(e!=null&&e.floors.some(h=>h.furniture.some(f=>/:aquarium(_large)?$/.test(f.type))));if(!t||!e||!q("fun_pets")||!i.length&&!r){(l=this.pets)==null||l.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,i));return}if(!this.petsLoading){this.petsLoading=!0;try{let[h,f]=await Promise.all([Xs(),To()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=h.startPets({lib:f.funLib,FloorMap:f.FloorMap,viewer:this.viewer,building:this.building,pets:((d=(u=this.building)==null?void 0:u.settings.pets)==null?void 0:d.on)!==!1&&this.petsOn!==!1?((p=(c=this.building)==null?void 0:c.settings.pets)==null?void 0:p.list)??[]:[],night:()=>{var m,b;return((b=(m=this.hass)==null?void 0:m.states["sun.sun"])==null?void 0:b.state)==="below_horizon"},base:(m,b)=>Se(m,b),closedDoors:()=>{var v,$,y;let m=new Set,b=((v=this.hass)==null?void 0:v.states)??{};for(let w of(($=this.building)==null?void 0:$.floors)??[])for(let S of w.openings)S.type==="door"&&S.contact&&((y=b[S.contact])==null?void 0:y.state)==="off"&&m.add(S.id);return m}})}catch(h){console.error("CasaNeon: the pets failed to load",h)}finally{this.petsLoading=!1}}}async syncGhost(){var n,i;let e=this.building,t=!!e&&q("fun_halloween")&&((n=e.settings.halloween)==null?void 0:n.ghost)!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){(i=this.ghost)==null||i.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[r,s]=await Promise.all([Xs(),To()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=r.startGhost({lib:s.funLib,viewer:this.viewer,building:this.building,night:()=>{var a,l;return((l=(a=this.hass)==null?void 0:a.states["sun.sun"])==null?void 0:l.state)==="below_horizon"}})}catch(r){console.error("CasaNeon: the ghost failed to load",r)}finally{this.ghostLoading=!1}}}walkHere(){this.startWalk()}async startWalk(){let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=this.roomId,i=e.floors.filter(p=>p.rooms.some(h=>h.points.length>=3)),s=(n?i.find(p=>p.rooms.some(h=>h.id===n)):void 0)??i.find(p=>p.id===this.floorId)??[...i].sort((p,h)=>Math.abs(p.elevation)-Math.abs(h.elevation))[0];if(!s)return;let a=await To();this._walk={room:null,hint:!0},this.walkChanged(!0),await this.updateComplete;let l=this.renderRoot.querySelector(".fp3d-walk-surface");if(!l)return;t.setFloor(s.id,!1),t.setWallMode("auto");let u=new a.FloorMap(e,s),d=n?s.rooms.find(p=>p.id===n):void 0,c;if(d){let p=u.freeNear(Ve(d.points));c={x:p[0],z:p[1],yaw:u.openYaw(p),pitch:-.05}}this.walker=new a.WalkCamera(t,u,l,{start:c,onRoom:p=>{this.walkRoomPts=(p==null?void 0:p.points)??null,this._walk&&(this._walk={...this._walk,room:(p==null?void 0:p.name)??null}),this.syncDevices(!0)}}),this.walkKeys=p=>{p.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}walkChanged(e){this.dispatchEvent(new CustomEvent("walk-change",{detail:{walking:e},bubbles:!0,composed:!0}))}stopWalk(){var t;if(!this.walker&&!this._walk)return;(t=this.walker)==null||t.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null,this.walkChanged(!1);let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return x;let e=r=>T(this.hass,r);if(!this._walk&&this.panelOpen)return x;if(!this._walk)return g`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,i=(r,s)=>{var c;if(!n)return;let a=44,l=r.clientX-n.cx,u=r.clientY-n.cy,d=Math.hypot(l,u);d>a&&([l,u]=[l/d*a,u/d*a]),s.firstElementChild.style.transform=`translate(${l}px, ${u}px)`,(c=this.walker)==null||c.setStick({x:l/a,y:u/a})};return g`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?g`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:x}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${r=>{let s=r.currentTarget,a=s.getBoundingClientRect();n={id:r.pointerId,cx:a.left+a.width/2,cy:a.top+a.height/2},s.setPointerCapture(r.pointerId),i(r,s)}}
        @pointermove=${r=>i(r,r.currentTarget)}
        @pointerup=${r=>{var s;n=null,r.currentTarget.firstElementChild.style.transform="",(s=this.walker)==null||s.setStick(null)}}
        @pointercancel=${r=>{var s;n=null,r.currentTarget.firstElementChild.style.transform="",(s=this.walker)==null||s.setStick(null)}}
      >
        <span></span>
      </div>`}openFind(){this._find=""}renderFind(){let e=this.building;if(!e||!this.hass)return x;if(this._find===null)return g`<button class="fp3d-find-btn" title=${T(this.hass,"find")} aria-label=${T(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=mp(this.findIndex??=Wi(this.hass,e),this._find);return g`<div class="fp3d-find ${this.clean?"fp3d-find-up":""}">
      <input
        type="search"
        placeholder=${T(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${T(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?g`<div class="fp3d-find-list">
            ${t.length?t.map(n=>g`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?Hn(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?g`<small>${n.where}</small>`:x}</span>
                  </button>`):g`<p>${T(this.hass,"find_none")}</p>`}
          </div>`:x}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return x;let n=(b,v)=>T(t,b,v),i=g`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return i;let r=this.floorId?e.floors.find(b=>b.id===this.floorId):void 0,s=r?[r]:e.floors,a=s.flatMap(b=>In(t,b).lights),l=s.flatMap(b=>In(t,b).covers),u=a.filter(b=>{var v;return((v=t.states[b])==null?void 0:v.state)==="on"}).length,d=!r,c=(b,v,$,y)=>{if(y.length){if(d&&this._armed!==b){this._armed=b,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}if(this._armed=null,v==="cover"&&($==="open_cover"||$==="close_cover")){for(let w of Xo(t,y,$==="open_cover"?"open":"close"))t.callService("cover",w.service,w.data);return}t.callService(v,$,{entity_id:y})}},p=(b,v,$,y,w)=>g`<button class="fp3d-btn ${this._armed===b?"fp3d-central-armed":""}" ?disabled=${!w.length} @click=${()=>c(b,$,y,w)}>
        ${this._armed===b?n("central_sure"):n(v)}
      </button>`,h=(e.settings.favorites??[]).filter(b=>t.states[b]),f=this.buttons??e.settings.buttons??[],m=ln()?Us(this.sceneHost(t,e)):[];return g`${i}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <div class="fp3d-central-top">
          <b>${r?r.name:n("central_house")}</b>
          <button class="fp3d-btn fp3d-central-gear" title=${n("view_settings")} aria-label=${n("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${n("view_settings")}</button>
        </div>
        ${m.length?g`<div class="fp3d-central-favs">
              ${m.map(b=>g`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:b.id,floorId:null,roomId:null}}}><span aria-hidden="true">${b.icon}</span> ${b.title}</button>`)}
            </div>`:x}
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${a.length?g` <small>${u}/${a.length}</small>`:x}</span>
          ${p("lights_on","central_on","light","turn_on",a.filter(b=>{var v;return((v=t.states[b])==null?void 0:v.state)==="off"}))}
          ${p("lights_off","central_off","light","turn_off",a.filter(b=>{var v;return((v=t.states[b])==null?void 0:v.state)==="on"}))}
        </div>
        ${l.length?g`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:x}
        <b>${n("central_favorites")}</b>
        ${h.length?g`<div class="fp3d-central-favs">
              ${h.map(b=>{let[v,$]=yt(b),y=t.states[b],w=v==="homeassistant"&&(y==null?void 0:y.state)==="on";return g`<button
                  class="fp3d-chip"
                  aria-pressed=${w||this._sceneFired===b}
                  ?disabled=${ee(y)}
                  @click=${()=>{t.callService(v,$,{entity_id:b}),this._sceneFired=b,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${K(t,b)}
                </button>`})}
            </div>`:f.length?x:g`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${f.length?g`<div class="fp3d-central-favs">
              ${f.map(b=>g`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${vb(t,b)}
                  @click=${v=>{Bc(t,v.currentTarget,b),b.action!=="service"&&(this._central=!1)}}
                >
                  ${b.icon?g`<ha-icon .icon=${b.icon.startsWith("mdi:")?b.icon:`mdi:${b.icon}`}></ha-icon>`:x}${b.label}
                </button>`)}
            </div>`:x}
      </div>`}maybeFlyIn(e=!1){var r,s,a,l,u;let t=this.viewer,n=(s=(r=this.hass)==null?void 0:r.config)==null?void 0:s.latitude,i=(l=(a=this.hass)==null?void 0:a.config)==null?void 0:l.longitude;!t||!e&&(this.flownIn||!((u=this.building)!=null&&u.settings.flyin))||this.walkable===!1||this.ro||this._low||typeof n!="number"||typeof i!="number"||matchMedia("(prefers-reduced-motion: reduce)").matches||(this.flownIn=!0,t.flyInStart(),this._flyIn={lat:n,lon:i})}flownIn=!1;renderFlyIn(){let e=this._flyIn;return e?g`<fp3d-flyin
      .lat=${e.lat}
      .lon=${e.lon}
      @flyin-dive=${t=>{var n;return(n=this.viewer)==null?void 0:n.flyInLand(t.detail.fast)}}
      @flyin-done=${()=>this._flyIn=null}
    ></fp3d-flyin>`:x}mediaCardUp(e,t){var r;let n=e.states[t];if(!n||V(t)!=="media")return!1;if(!this.ro&&(((r=this.mediaGrace.get(t))==null?void 0:r.until)??0)>Date.now()&&ee(n))return!0;let i=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(s=>typeof s=="string"&&!!s.trim());return!ee(n)&&(n.state==="playing"||n.state==="paused"&&i&&this.pausedRecently(n))}pausedRecently(e){let t=Date.parse(e.last_changed??"");if(!Number.isFinite(t))return!0;let n=t+fb-Date.now();if(n<=0)return!1;let i=Date.now()+n+500;return(!this.pausedTimer||i<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=i,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},n+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return x;let e=T(this.hass,this.clean?"controls_show":"controls_hide");return g`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?gt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:gt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return x;let t=this._voice,n=(t==null?void 0:t.phase)==="wait"||(t==null?void 0:t.phase)==="listen",i=T(e,"voice_button"),r=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return g`<button class="fp3d-mic ${(t==null?void 0:t.phase)==="listen"?"fp3d-mic-on":""}" style="left:${r}px" title=${i} aria-label=${i} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${gt`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${t?g`<div class="fp3d-mic-say ${t.phase==="error"?"fp3d-mic-err":""}" style="left:${r}px">${t.text}</div>`:x}`}sayVoice(e,t){this._voice={phase:e,text:t},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){var s;let t=this.hass,n=this.building;if(!t||!n)return;let i=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==i)return;if(e.show_rooms){(!e.admins_only||(s=t.user)!=null&&s.is_admin)&&this.showRooms(n,e.show_rooms);return}let r=null;try{let a=await St();r=await this.handleSentence(t,n,a,e.text,e.speak),r===null&&this.sayVoice("error",T(t,"voice_none"))}catch(a){this.sayVoice("error",T(t,"voice_error",{msg:String((a==null?void 0:a.message)??a)}))}try{await xl(t,e.ask_id,r??"",r!==null)}catch{}}async onAnnounce(e){let t=this.hass;if(!t)return;let n=(this.screen??"").trim().toLowerCase();if(!(e.screens.length&&!e.screens.some(i=>i.trim().toLowerCase()===n))&&!hh.has(e.id)){hh.add(e.id),this._announce=e.message,clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>this._announce=null,12e3);try{await kb(),await(await St()).speak(t,e.message,dt())}catch{}}}onReload(e){e.plan&&e.plan!==(this.planId??ye)||e.templates.length&&!(this.template&&e.templates.includes(this.template))||fh.has(e.id)||(fh.add(e.id),!(Date.now()-(window.fp3dReloadSent??0)<15e3)&&(this._announce=T(this.hass,"screen_reloading"),setTimeout(()=>location.reload(),500+Math.random()*4e3)))}openRoom(e){if(!this.roomId)return null;for(let t of e.floors){let n=le(t).find(i=>i.id===this.roomId);if(n)return{floor:t,room:n}}return null}async roomAction(e,t,n){let i=()=>Mu(t.floors,this.voiceArea??ca()),r=d=>{let c=t.floors.find(h=>h.id===d.floorId),p=c&&le(c).find(h=>h.id===d.roomId);return c&&p?{floor:c,room:p}:null},s=n.room==="there"?this.openRoom(t):n.room==="here"?i():n.room?r(n.room):i()??this.openRoom(t);if(!s)return T(e,n.room==="there"?"voice_noroom_open":"voice_noroom");let a=s.room.name,l=async d=>{await Promise.all(d.map(c=>e.callService(c.domain,c.service,c.data)))};if(n.action==="clean"){let d=Si(e,s.room);return d?(await l([d]),T(e,"voice_clean_started",{room:a})):T(e,"voice_clean_none",{room:a})}let u=ki(e,s.floor,s.room);return u.length?(await l(u),T(e,"voice_off_done",{room:a,n:$i(u)})):T(e,"voice_off_nothing",{room:a})}async onMic(){var r,s;let e=this.hass,t=this.building;if(!e||!t||((r=this._voice)==null?void 0:r.phase)==="wait"||((s=this._voice)==null?void 0:s.phase)==="listen")return;clearTimeout(this.voiceTimer);let n=(a,l)=>this.sayVoice(a,l);n("wait","\u2026"),this.tourToken++;let i;try{let a=window.AudioContext??window.webkitAudioContext;i=new a,i.resume().catch(()=>{})}catch{i=void 0}try{let a=await St(),l=await a.listenOnce(e,()=>n("listen",T(e,"voice_listen")),dt(),i);if(!l){n("error",T(e,"voice_none"));return}if(await this.handleSentence(e,t,a,l,!0)!==null)return;n("wait",`\u201C${l}\u201D \u2026`);let u=this.voiceArea??ca(),d=l,c=this.openRoom(t);c!=null&&c.room.area_id&&a.saysThere(l,e.language)&&(u=c.room.area_id,d=a.withoutThere(l,e.language));let p=await a.converse(e,d,u);n("done",p?`\u201C${l}\u201D \u2013 ${p}`:`\u201C${l}\u201D`)}catch(a){let l=a,u=(l==null?void 0:l.message)==="no_pipeline"?"voice_no_pipeline":(l==null?void 0:l.message)==="silent"?"voice_silent":(l==null?void 0:l.name)==="NotAllowedError"||(l==null?void 0:l.name)==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",u?T(e,u):T(e,"voice_error",{msg:String((l==null?void 0:l.message)??(l==null?void 0:l.name)??a)}))}}async handleSentence(e,t,n,i,r){var c,p,h,f;let s=(m,b)=>this.sayVoice(m,b),a=this.replay?null:this.styleSentence(i);if(a)return s("done",`\u201C${i}\u201D \u2013 ${a}`),r&&n.speak(e,a,dt()),a;let{devices:l,items:u}=this.spokenDevices(e,t,n.SYNONYMS),d=this.replay?null:n.roomIntent(i,t,e.language,m=>{var b,v;return m.area_id?(v=(b=e.areas)==null?void 0:b[m.area_id])==null?void 0:v.name:null});if(d){let m=await this.roomAction(e,t,d);return s("done",`\u201C${i}\u201D \u2013 ${m}`),r&&n.speak(e,m,dt()),m}{let m=n.showTarget(i,t,l,y=>{var w,S;return y.area_id?(S=(w=e.areas)==null?void 0:w[y.area_id])==null?void 0:S.name:null});if(m){let y=m.kind==="house"?T(e,"all_floors"):m.kind==="cameras"?T(e,"camera_wall_title"):m.name;if(s("done",`\u201C${i}\u201D \u2192 ${y}`),this.directing.touch(Date.now()),m.kind==="cameras")q("camera_cockpit")?this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0})):this._proHint="camera_cockpit";else if(m.kind==="device"){let w=u.get(m.id);m.camera&&m.entity&&q("camera_cockpit")?this.lookThrough(m.entity):w&&this.goTo(w)}else m.kind==="house"?this.fire("floor-tap",{floorId:null}):m.kind==="floor"?this.fire("floor-tap",{floorId:m.floorId}):(this.floorId!==m.floorId&&this.fire("floor-tap",{floorId:m.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:m.floorId,roomId:m.roomId}),60));return T(e,"voice_showing",{name:y})}let b=await e.callWS({type:"neonplan3d/locate/ask",text:i,language:e.language}).catch(()=>null);if(b)return s("done",`\u201C${i}\u201D \u2013 ${b.text}`),b.rooms.length&&(!b.admins_only||(c=e.user)!=null&&c.is_admin)&&this.showRooms(t,b.rooms),r&&n.speak(e,b.text,dt()),b.text;let v=this.moduleHost(e,t,n.SYNONYMS,y=>n.showTarget(y,t,l,w=>{var S,I;return w.area_id?(I=(S=e.areas)==null?void 0:S[w.area_id])==null?void 0:I.name:null})),$=await bp(i,v);if($){s("done",$.text?`\u201C${i}\u201D \u2013 ${$.text}`:`\u201C${i}\u201D`),this.directing.touch(Date.now()),(p=$.highlight)!=null&&p.length&&((h=this.viewer)==null||h.flashDevices($.highlight));let y=$.focus,w=$.spoken??$.text??"";if((f=$.tour)!=null&&f.length){let S=r&&$.speak!==!1?P=>n.speak(e,P,dt()):null,I=$.spoken??$.text;return I&&S&&await S(I),this.runTour($.tour,t,u,S),w}if(y!=null&&y.roomId&&y.floorId)this.floorId!==y.floorId&&this.fire("floor-tap",{floorId:y.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:y.floorId,roomId:y.roomId}),60);else if(y!=null&&y.floorId&&!y.entity&&!y.furnitureId)this.fire("floor-tap",{floorId:y.floorId});else if(y!=null&&y.entity||y!=null&&y.furnitureId){let S=u.get(y.entity??`furniture:${y.furnitureId}`);S&&this.goTo(S)}return $.text&&$.speak!==!1&&r&&n.speak(e,$.text,dt()),w}}return null}spokenDevices(e,t,n){let i=this.findIndex??=Wi(e,t),r=new Map(t.floors.flatMap(c=>le(c).map(p=>[p.id,p.name]))),s=[],a=[],l=new Map;for(let c of i)c.kind==="device"&&c.entity&&l.set(c.entity,c);let u=new Set;for(let c of t.floors){let p=le(c);for(let h of c.furniture){if(Mb.has(h.type))continue;let f=this.furnitureLinks.get(h.id),m=(f==null?void 0:f.entity)??(f==null?void 0:f.power)??null,b=m??`furniture:${h.id}`,v=p.find(C=>C.points.length>=3&&B([h.x,h.z],C.points)),$=ze(e,h.type),y=[h.name,...h.aliases??[],$,m?K(e,m):null,...n[h.type]??[]].filter(C=>!!C),w=h.name||(m?K(e,m):$);s.push({id:b,entity:m,name:w,names:y,room:(v==null?void 0:v.name)??"",camera:!!m&&V(m)==="camera"});let S=(h.type==="plant"||ms(h.type))&&!!h.moisture&&h.moisture!=="none",I=xs(f!=null&&f.entity?e.states[f.entity]:void 0,f!=null&&f.power?be(e.states[f.power]):null,typeof h.run_w=="number"&&h.run_w>0?h.run_w:10),P=q("household")&&typeof h.remaining=="string"&&h.remaining!=="none"&&!I?ys(e.states[h.remaining]):null;a.push({id:b,entity:m,name:w,names:y,room:(v==null?void 0:v.name)??"",floorId:c.id,roomId:(v==null?void 0:v.id)??null,power:(f==null?void 0:f.power)??null,type:h.type,remaining:P,thirsty:S&&q("household")?vs(h,e):null}),m?u.add(m):l.set(b,{kind:"device",name:w,where:"",floorId:c.id,roomId:(v==null?void 0:v.id)??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(c.height-.3,Math.max(.5,h.h))})}}let d=new Map(t.floors.flatMap(c=>c.placements.map(p=>[p.entity_id,p])));for(let[c,p]of l){if(u.has(c)||c.startsWith("furniture:"))continue;let h=p.roomId&&r.get(p.roomId)||"",f=d.get(c),m=[f==null?void 0:f.name,...(f==null?void 0:f.aliases)??[],p.name].filter(b=>!!b);s.push({id:c,entity:c,name:p.name,names:m,room:h,camera:V(c)==="camera"}),a.push({id:c,entity:c,name:p.name,names:m,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:s,items:l,spoken:a}}lockMarkers(e,t){var i,r;let n=[];for(let s of t.floors)for(let a of s.openings){let l=(r=(i=this.openingLinks)==null?void 0:i.get(a.id))==null?void 0:r.lock;if(!l)continue;let u=this.openingSpot(t,a.id,!0);if(!u)continue;let d=e.states[l];n.push({id:l,floorId:s.id,roomId:a.room_id,x:u.x,z:u.z,y:Math.min(u.y+.35,1.5),icon:Ln("lock"),name:K(e,l),text:d?Ae(e,d):"",active:!!d&&(d.state==="unlocked"||d.state==="open"||d.state==="unlocking"),unavailable:!d||ee(d),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(e,t,n=!1){for(let i of e.floors){let r=i.openings.find(v=>v.id===t);if(!r)continue;let s=Kc(r,i.rooms,i.walls??[]);if(!s)return null;let a=s.room.points,l=a[s.edge],u=a[(s.edge+1)%a.length],d=Math.hypot(u[0]-l[0],u[1]-l[1])||1,c=[(u[0]-l[0])/d,(u[1]-l[1])/d],h=Ge(a)>0!==Uc(r,i.rooms,i.walls??[],e.settings.wall_interior)?[-c[1],c[0]]:[c[1],-c[0]],f=r.offset;if(n){let v=c[0]*h[1]-c[1]*h[0]>0;f=r.offset-r.width/2+nc(r,r.hinge==="left"===v)}let[m,b]=oi(s.room,s.edge,f);return{floorId:i.id,x:m+h[0]*.2,z:b+h[1]*.2,y:Math.max(.5,r.sill+r.height/2),theta:Math.atan2(h[0],h[1])}}return null}async showRooms(e,t){let n=t.map(l=>{var u;return{roomId:l,floorId:(u=e.floors.find(d=>d.rooms.some(c=>c.id===l)))==null?void 0:u.id}}).filter(l=>!!l.floorId).slice(0,8);if(!n.length)return;let i=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let r=this.renderRoot.querySelector(".fp3d-stage"),s=()=>{this.tourToken++,clearTimeout(this.tourTimer)};r==null||r.addEventListener("pointerdown",s,{once:!0});let a=l=>new Promise(u=>this.tourTimer=setTimeout(u,l));for(let[l,u]of n.entries()){if(i!==this.tourToken||(this.floorId!==u.floorId&&(this.fire("floor-tap",{floorId:u.floorId}),await a(150)),i!==this.tourToken))break;this.roomId!==u.roomId&&this.fire("room-tap",{floorId:u.floorId,roomId:u.roomId}),this.directing.touch(Date.now()),l<n.length-1&&await a(4e3)}r==null||r.removeEventListener("pointerdown",s)}async runTour(e,t,n,i){var d;let r=++this.tourToken;clearTimeout(this.tourTimer);let s=e.map(c=>{if(c.openingId){let h=this.openingSpot(t,c.openingId);return h?{...h,entity:null,say:c.say,inside:!0}:null}let p=n.get(c.entity??`furniture:${c.furnitureId}`);return p?{floorId:p.floorId,x:p.x,z:p.z,y:p.y,theta:void 0,entity:p.entity,say:c.say,inside:!1}:null}).filter(c=>!!c).slice(0,8);if(!s.length)return;let a=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};a==null||a.addEventListener("pointerdown",l,{once:!0});let u=c=>new Promise(p=>this.tourTimer=setTimeout(p,c));for(let c of s){if(r!==this.tourToken||(this.floorId!==c.floorId&&(this.fire("floor-tap",{floorId:c.floorId}),await u(150)),r!==this.tourToken)||((d=this.viewer)==null||d.focus(c.floorId,c.x,c.z,c.y,c.entity,c.inside?{radius:3.2,phi:1.05,theta:c.theta}:void 0),await u(900),r!==this.tourToken))break;let p=c.say&&i?await i(c.say):!1;if(r!==this.tourToken)break;await u(p?1200:2600)}a==null||a.removeEventListener("pointerdown",l)}spokenOpenings(e,t){var a,l,u;let n=[],i=d=>T(e,d);for(let d of t.floors){let c=new Map(le(d).map(p=>[p.id,p.name]));for(let p of d.openings){let h=(a=this.openingLinks)==null?void 0:a.get(p.id);if(!h)continue;let f=p.type==="garage"?"garage":p.type==="door"?"door":"window",m=vt(e,h,p.type),b=Rc(m,p.type),v=!b&&(m.tilt>.02||m.tilt2>.02);for(let $ of[h.contact,h.contact2,h.cover,h.tilt,h.tilt2])$&&$!=="none"&&n.push({id:p.id,entity:$,kind:f,name:i(`opening_${p.type}`),room:c.get(p.room_id)??"",floorId:d.id,roomId:p.room_id,open:b,tilted:v})}}let r=((l=t.settings.roof)==null?void 0:l.windows)??[],s=r.length?new Map(zt(t).map(d=>[d.key,d])):null;for(let d of r){let c=ph(e,d),p=c.open>.02,h=!p&&c.tilt>.02,f=[d.window,d.contact,d.cover,d.tilt].filter(y=>!!y&&y!=="none"),m=(u=f.map(y=>qe(e,y)).filter(y=>!!y).map(y=>t.floors.flatMap(w=>w.rooms.filter(S=>S.area_id===y).map(S=>({floor:w,room:S})))).find(y=>y.length===1))==null?void 0:u[0],b=m?null:ss(t,s==null?void 0:s.get(d.face),d),v=(m==null?void 0:m.floor)??(b==null?void 0:b.floor)??t.floors[t.floors.length-1],$=(m==null?void 0:m.room)??(b?v==null?void 0:v.rooms.find(y=>y.id===b.roomId):void 0);for(let y of f)n.push({id:d.id,entity:y,kind:"roof_window",name:d.name||i("roof_window"),room:($==null?void 0:$.name)??"",floorId:(v==null?void 0:v.id)??"",roomId:($==null?void 0:$.id)??null,open:p,tilted:h})}return n}sceneHost(e,t){return this.moduleHost(e,t,{},()=>null)}moduleHost(e,t,n,i){let r=null,s=()=>r??=this.spokenDevices(e,t,n).spoken,a={api:1,stage:2,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>s(),findDevice:l=>{let u=i(l);return(u==null?void 0:u.kind)==="device"&&u.id?s().find(d=>d.id===u.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>{var l,u;return!!((u=(l=this.hass)==null?void 0:l.user)!=null&&u.is_admin)&&!this.ro&&!this.noSave},updateBuilding:l=>{var c;let u=this.building;if(!u||!this.hass||this.ro||this.noSave||!((c=this.hass.user)!=null&&c.is_admin))return;let d=structuredClone(u);l(d),this.building=d,no(this.hass,d,this.planId??void 0).catch(p=>this.serviceFailed("neonplan3d/building/save",p))},callService:(l,u,d)=>this.hass?this.hass.callService(l,u,d):Promise.resolve(),newId:l=>oc(l),waterLevel:(l,u)=>{var p;let d=(p=this.building)==null?void 0:p.floors.find(h=>h.id===l),c=d==null?void 0:d.outdoor.find(h=>h.id===u);return!d||!c||c.type!=="pool"?null:{y:_n(d,c),floorY:ro(d,c)}},groundAt:(l,u,d)=>{var p;let c=(p=this.building)==null?void 0:p.floors.find(h=>h.id===l);return c?bt(c,u,d):0},openPopup:(l,u)=>this.openModulePopup(l,u),closePopup:()=>this.closeModulePopup(),imageUrl:l=>this.pictureUrl(l),people:()=>this.lastPersons.flatMap(l=>{var d,c;let u=(c=(d=this.building)==null?void 0:d.floors.find(p=>p.id===l.floorId))==null?void 0:c.rooms.find(p=>p.id===l.roomId);return u?[{id:l.id,floorId:l.floorId,roomId:l.roomId,roomName:u.name}]:[]}),look:()=>this.effectiveTheme()==="day"?"light":"dark",lowPower:()=>this._low,refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:ua,openings:()=>this.spokenOpenings(e,t),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>{var u;return{id:l.id,entity:l.powerEntity,name:((u=s().find(d=>d.entity===l.id||d.power===l.powerEntity))==null?void 0:u.name)??K(e,l.id),watts:l.power}}).sort((l,u)=>u.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,t),cars:()=>this.spokenCars(e,t),pools:()=>$p(a),weather:()=>$t(e,this.weatherEntityId??t.settings.weather_entity),listen:async l=>{try{return(await(await St()).listenOnce(e,l,dt())).trim()||null}catch{return null}},notify:l=>this.showNote(l),tour:(l,u)=>{let d=this.spokenDevices(e,t,n).items,c=u?p=>St().then(h=>h.speak(e,p,dt())):null;this.runTour(l,t,d,c)},occupied:()=>this.occupiedRooms(e,t),speakers:()=>this.planSpeakers(e,t),cameras:()=>this.planCameras(e,t),pickSpot:l=>this.pickSpot(l)};return a}pickSpot(e){return new Promise(t=>{let n=this.viewer;if(!n)return t(null);clearTimeout(this.spotTimer);let i=r=>{clearTimeout(this.spotTimer),this._spotHint=null,t(r)};n.pickSpot(i),this._spotHint=e,this.spotTimer=setTimeout(()=>n.pickSpot(null),6e4)})}spotTimer;planCameras(e,t){return t.floors.flatMap(n=>n.placements.filter(i=>i.entity_id.startsWith("camera.")).map(i=>{let r=i.mount==="ceiling";return{entity:i.entity_id,floorId:n.id,x:i.x,z:i.z,height:r?n.height-.1:i.y??2.2,heading:i.rotation??0,tilt:i.tilt??(r?65:20),fov:i.fov??(r?120:90),reach:i.reach??(r?3:4.5),dome:r,detections:ot(e,i.entity_id).map(s=>{var a;return{sensor:s,kind:wo(e,s),on:((a=e.states[s])==null?void 0:a.state)==="on"}})}}))}moduleFigures(e){let t=[];for(let n of this.scene){if(n.kind!=="figure")continue;let i=e.floors.find(s=>s.id===n.floorId);if(!i)continue;let r=n.look==="person";t.push({id:`module:${n.id}`,name:n.name,initials:r?"":n.look==="car"?"\u{1F697}":"\u{1F43E}",picture:null,floorId:n.floorId,roomId:Co(i,n.at[0],n.at[1])??"",x:n.at[0],z:n.at[1],color:n.color??(r?"#ff5fd2":"#3ee8ff"),...n.entity?{entity:n.entity}:{},...r?{}:{thing:!0}})}return t}showNote(e){this._note=e,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(e,t){let n=new Map;for(let i of this.lastPersons)i.roomId&&n.set(i.roomId,i);for(let i of t.floors)for(let r of i.rooms){if(n.has(r.id)||!r.area_id)continue;Ie(e,r.area_id).some(a=>{let l=e.states[a];return a.startsWith("binary_sensor.")&&(l==null?void 0:l.state)==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&n.set(r.id,{floorId:i.id,roomId:r.id})}return[...n.values()]}planSpeakers(e,t){let n=[],i=new Set;for(let r of t.floors){let s=(a,l)=>{var u;return((u=le(r).find(d=>d.points.length>=3&&B([a,l],d.points)))==null?void 0:u.id)??null};for(let a of r.placements)!a.entity_id.startsWith("media_player.")||i.has(a.entity_id)||!e.states[a.entity_id]||(i.add(a.entity_id),n.push({entity:a.entity_id,name:K(e,a.entity_id),floorId:r.id,roomId:s(a.x,a.z),at:[a.x,a.z],top:a.y??1.1}));for(let a of r.furniture){let l=a.entity;!l||!l.startsWith("media_player.")||i.has(l)||!e.states[l]||(i.add(l),n.push({entity:l,name:K(e,l),floorId:r.id,roomId:s(a.x,a.z),furnitureId:a.id,at:[a.x,a.z],top:Se(r,a)+a.h}))}}return n}roomSheets(e){let t=this.hass,n=this.building;if(!t||!n||this.ro||!ln())return[];let i=n.floors.find(r=>le(r).some(s=>s.id===e));return i?qs(this.sceneHost(t,n),{floorId:i.id,roomId:e}).map(r=>({id:r.id,icon:r.icon,title:r.title})):[]}plainOf=null;drawnPlan="";condOf=null;shownSig="";conditioned(){var a;let e=this.building,t=Vs(this.hass,e);this.shownSig=t;let n=Hi(e,this.rooms),i=!this.surroundings&&!!(e!=null&&e.settings.surroundings),r=`${t}|${n.join(",")}|${i}`;if(!e||!t&&!n.length&&!i)return e;if(((a=this.condOf)==null?void 0:a.from)===e&&this.condOf.sig===r)return this.condOf.to;let s=t?{...e,floors:e.floors.map(l=>({...l,furniture:l.furniture.filter(u=>Ds(this.hass,u))}))}:e;return n.length&&(s=Li(s,n)),i&&s.settings.surroundings&&(s={...s,settings:{...s.settings,surroundings:null}}),this.condOf={from:e,sig:r,to:s},s}shownBuilding(){var i;let e=this.conditioned();if(!e||!this.plain)return e;if(((i=this.plainOf)==null?void 0:i.from)===e)return this.plainOf.to;let t=r=>{var s;return Ar.has(r.type)||r.type==="stairwell"||!!((s=$e(r.type))!=null&&s.hole)},n={...e,floors:e.floors.map(r=>({...r,furniture:r.furniture.filter(t)}))};return this.plainOf={from:e,to:n},n}openRoomSheet(e,t){var i;let n=(i=this.building)==null?void 0:i.floors.find(r=>r.rooms.some(s=>s.id===e));this._sheet={id:t,floorId:(n==null?void 0:n.id)??null,roomId:e}}currentSheet(e,t){let n=this._sheet;if(!n)return null;let i=this.sceneHost(e,t);return(n.roomId&&n.floorId?qs(i,{floorId:n.floorId,roomId:n.roomId}):Us(i)).find(s=>s.id===n.id)??null}openModulePopup(e,t=6e4){clearTimeout(this.popupTimer),this._popup={id:e},this.popupValues={},this.popupTimer=setTimeout(()=>this._popup=null,t)}closeModulePopup(){clearTimeout(this.popupTimer),this._popup=null,this.popupValues={}}renderModulePopup(){let e=this.hass,t=this.building,n=this._popup;if(!e||!t||!n)return x;let i=vp(this.sceneHost(e,t)).find(l=>l.id===n.id);if(!i)return x;let r=()=>this.closeModulePopup(),s=l=>T(e,l),a=l=>{var u,d;switch(l.kind){case"image":{let c=l.live&&q("camera_cockpit")&&((u=t.settings.director)!=null&&u.live)?this.liveFor(l.live):null;return c?g`<div class="fp3d-pop-big fp3d-pop-live">${c}</div>`:g`<img class="fp3d-pop-big" src=${l.src} alt="" />`}case"text":return g`<p class=${l.muted?"fp3d-sub":"fp3d-pop-text"}>${l.text}</p>`;case"heading":return g`<h4 class="fp3d-pop-h">${l.text}</h4>`;case"line":return g`<div class="fp3d-pop-line"><span>${l.text}</span>${l.sub?g`<span>${l.sub}</span>`:x}${l.note?g`<em>${l.note}</em>`:x}</div>`;case"groups":return l.groups.length?g`<div class="fp3d-pop-groups">
                ${l.groups.map(c=>g`<section class=${c.strong?"fp3d-pop-strong":""}>
                    <h4 role=${c.onToggle?"button":x} tabindex=${c.onToggle?0:x} @click=${()=>{var p;return(p=c.onToggle)==null?void 0:p.call(c)}}>${c.title} ${c.onToggle?g`<small>${c.open?"\u25BE":"\u25B8"}</small>`:x}</h4>
                    ${c.rows.map(p=>g`<div class="fp3d-pop-row ${p.leadStrong?"fp3d-pop-rowlive":""}" style=${p.color?`--cal:${p.color}`:""}>
                        <span class="fp3d-pop-lead">${p.lead}</span>
                        <span class="fp3d-pop-sum">${p.text}${p.sub?g`<small> · ${p.sub}</small>`:x}${c.open&&p.detail?g`<em>${p.detail}</em>`:x}</span>
                      </div>`)}
                  </section>`)}
              </div>`:g`<p class="fp3d-sub">${l.empty??""}</p>`;case"checklist":return g`<div class="fp3d-pop-todo">
            ${l.items.length?l.items.map(c=>g`<label class="fp3d-pop-todoitem ${c.done?"fp3d-pop-done":""}">
                    <input type="checkbox" .checked=${c.done} ?disabled=${this.ro} @change=${()=>{c.onToggle()}} />
                    <span>${c.text}</span>
                  </label>`):g`<p class="fp3d-sub">${l.empty??""}</p>`}
          </div>`;case"people":return g`<div class="fp3d-pop-people">
            ${l.items.map(c=>g`<div class="fp3d-pop-personrow ${c.bright?"fp3d-pop-bright":""}">
                ${c.picture?g`<img src=${c.picture} alt="" />`:g`<span class="fp3d-pop-initial">${c.name.slice(0,1)}</span>`}
                <div><b>${c.name}</b><span>${c.sub}</span></div>
              </div>`)}
          </div>`;case"tiles":return g`<div class="fp3d-pop-tiles">${l.items.map(c=>g`<div><small>${c.label}</small><span>${c.symbol}</span><b>${c.main}</b>${c.sub?g`<small>${c.sub}</small>`:x}</div>`)}</div>`;case"media":return g`<div class="fp3d-pop-media">
            ${l.picture?g`<img class="fp3d-pop-cover" src=${l.picture} alt="" />`:x}
            <div class="fp3d-pop-mediatext">
              <b>${l.title}</b>
              ${l.sub?g`<span>${l.sub}</span>`:x}
              ${(d=l.buttons)!=null&&d.length?g`<div class="fp3d-pop-ctl">${l.buttons.map(c=>g`<button class="fp3d-chip" @click=${()=>{c.onTap()}}>${c.label}</button>`)}</div>`:x}
            </div>
          </div>`;case"form":{if(this.ro)return x;if(!l.open)return g`<button class="fp3d-btn fp3d-pop-addbtn" @click=${()=>l.onOpen()}>${l.button}</button>`;let c=h=>this.popupValues[`${l.id}:${h.id}`]??h.value,p=(h,f)=>this.popupValues={...this.popupValues,[`${l.id}:${h.id}`]:f};return g`<form class="fp3d-pop-form" @submit=${h=>{h.preventDefault(),l.onSubmit(Object.fromEntries(l.fields.map(f=>[f.id,c(f)])))}}>
            ${l.fields.map(h=>h.kind==="select"?g`<select class="fp3d-pop-in" @change=${f=>p(h,f.target.value)}>
                    ${(h.options??[]).map(f=>g`<option value=${f.id} ?selected=${f.id===c(h)}>${f.label}</option>`)}
                  </select>`:g`<input class="fp3d-pop-in" type=${h.kind} placeholder=${h.placeholder??""} .value=${c(h)} @input=${f=>p(h,f.target.value)} />`)}
            <div class="fp3d-pop-ctl"><button class="fp3d-btn fp3d-primary" type="submit">${l.submit}</button><button class="fp3d-btn" type="button" @click=${()=>l.onCancel()}>${s("cancel")}</button></div>
          </form>`}case"input":return this.ro?x:g`<form class="fp3d-pop-form" @submit=${c=>{c.preventDefault();let p=c.target.querySelector("input");l.onSubmit(p.value),p.value=""}}>
                <input class="fp3d-pop-in" placeholder=${l.placeholder} />
                <button class="fp3d-btn fp3d-primary" type="submit">${l.button}</button>
              </form>`;default:return x}};return g`<div class="fp3d-sheet-backdrop" @click=${r}></div>
      <div class="fp3d-sheet fp3d-pop ${i.wide?"fp3d-pop-wide":""}" role="dialog" aria-label=${i.title}>
        <header><span>${i.icon?`${i.icon} `:""}${i.title}</span><button class="fp3d-sheet-x" aria-label=${s("close")} @click=${r}>✕</button></header>
        ${i.sections.map(a)}
      </div>`}renderSheet(){var d,c,p;let e=this.hass,t=this.building;if(!e||!t||!this._sheet)return x;let n=this.currentSheet(e,t);if(!n)return x;let i=h=>T(e,h),r=this._sheet.roomId?t.floors.flatMap(h=>h.rooms).find(h=>h.id===this._sheet.roomId):void 0,s=()=>this._sheet=null,a=async h=>{s();try{await h()}catch(f){console.warn("NeonPlan 3D: module sheet failed",f)}},l=()=>{let h=this.renderRoot.querySelector(".fp3d-sheet-input"),f=h==null?void 0:h.value.trim();f&&n.input&&a(()=>n.input.onSubmit(f))},u=async()=>{var b,v;let h=this.renderRoot.querySelector(".fp3d-sheet-input");if(!h)return;h.placeholder=i("sheet_listening");let f=this.sceneHost(e,t),m=await((b=f.listen)==null?void 0:b.call(f,()=>h.placeholder=i("sheet_listening")));h.placeholder=((v=n.input)==null?void 0:v.placeholder)??"",m?h.value=m:this.showNote(i("sheet_mic_failed"))};return g`<div class="fp3d-sheet-backdrop" @click=${s}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${n.title}>
        <header>
          <b><span aria-hidden="true">${n.icon}</span> ${n.title}${r?` \xB7 ${r.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${i("close")} @click=${s}>✕</button>
        </header>
        ${n.choice?g`<div class="fp3d-sheet-choice">
              ${n.choice.options.map(h=>g`<button class="fp3d-chip" aria-pressed=${h.id===n.choice.value} @click=${()=>{n.choice.set(h.id),this.requestUpdate()}}>${h.label}</button>`)}
            </div>`:x}
        ${(d=n.chips)!=null&&d.length?g`<div class="fp3d-sheet-chips">${n.chips.map(h=>g`<button class="fp3d-sheet-chip" @click=${()=>{a(()=>h.onTap())}}>${h.label}</button>`)}</div>`:x}
        ${n.input?g`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${n.input.placeholder} @keydown=${h=>h.key==="Enter"&&l()} />
              ${n.input.mic?g`<button class="fp3d-btn fp3d-sheet-mic" title=${i("sheet_mic")} aria-label=${i("sheet_mic")} @click=${()=>{u()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:x}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${n.input.button}</button>
            </div>`:x}
        ${(c=n.lines)!=null&&c.length?g`<div class="fp3d-sheet-lines">${n.lines.map(h=>g`<p>${h}</p>`)}</div>`:x}
        ${(p=e.user)!=null&&p.is_admin&&!this.ro&&Ks().length?g`<button class="fp3d-sheet-gear" @click=${()=>{s(),this._settingsOpen=!0,this.updateComplete.then(()=>{var h;return(h=this.renderRoot.querySelector(".fp3d-set-module"))==null?void 0:h.scrollIntoView({block:"start"})})}}>⚙ ${i("view_settings")}</button>`:x}
      </div>`}setPlanSettings(e){var i,r;let t=this.building;if(!t||!((r=(i=this.hass)==null?void 0:i.user)!=null&&r.is_admin)||this.ro||this.noSave)return;let n=structuredClone(t);Object.assign(n.settings,e),this.building=n,no(this.hass,n,this.planId??void 0).catch(s=>this.serviceFailed("neonplan3d/building/save",s))}renderSettings(){var d;let e=this.hass,t=this.building;if(!e||!t||!this._settingsOpen)return x;let n=c=>T(e,c),i=!!((d=e.user)!=null&&d.is_admin)&&!this.ro&&!this.noSave,r=t.settings,s=(c,p,h,f)=>g`<label class="fp3d-set-check" title=${f?n(f):""}
        ><input type="checkbox" .checked=${p} ?disabled=${!i} @change=${m=>this.setPlanSettings(h(m.target.checked))} /> ${n(c)}</label
      >`,a=this.sceneHost(e,t),l=gn(),u=Ks().map(c=>{let p=kp(c,a);if(!p.length||p[0].kind==="heading")return p;let h=l.find(m=>m.id===c);return[{kind:"heading",text:h?Ol(h).replace(/^(Modul|Module):\s*/i,""):c},...p]}).filter(c=>c.length);return g`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${n("view_settings")}>
        <header>
          <b>⚙ ${n("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${n("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${i?x:g`<p class="fp3d-set-note">${n("view_settings_admin")}</p>`}
        <h4>${n("view_settings_look")}</h4>
        ${s("sky",r.sky!==!1,c=>({sky:c}),"sky_hint")}
        ${s("flyin",!!r.flyin,c=>(c&&setTimeout(()=>this.maybeFlyIn(!0),300),{flyin:c||void 0}),"flyin_hint")}
        ${s("sun_shadow",r.sun_shadow!==!1,c=>({sun_shadow:c}),"sun_shadow_hint")}
        ${r.sun_shadow!==!1?g`<label class="fp3d-set-field" title=${n("sun_arc_hint")}
              >${n("sun_arc")}
              <select ?disabled=${!i} @change=${c=>this.setPlanSettings({sun_arc:c.target.value==="plot"?"plot":null})}>
                <option value="house" ?selected=${r.sun_arc!=="plot"}>${n("sun_arc_house")}</option>
                <option value="plot" ?selected=${r.sun_arc==="plot"}>${n("sun_arc_plot")}</option>
              </select></label
            >`:x}
        ${s("window_glow",r.window_glow!==!1,c=>({window_glow:c}),"window_glow_hint")}
        ${ia(Yi)?g`<p class="fp3d-set-note">${n("gpu_safe_note")}</p>`:x}
        ${s("sun_patches",r.sun_patches!==!1,c=>({sun_patches:c}))}
        ${this.renderGlassSize(n,i,r)}
        <h4>${n("view_settings_control")}</h4>
        ${s("tap_in_room",!!r.tap_in_room,c=>({tap_in_room:c}),"tap_in_room_hint")}
        ${s("right_click_back",!!r.right_click_back,c=>({right_click_back:c}),"right_click_back_hint")}
        <h4>${n("view_settings_alerts")}</h4>
        ${s("rain_warning",r.rain_warning!==!1,c=>({rain_warning:c}))}
        ${s("alert_unavailable",!!r.alert_unavailable,c=>({alert_unavailable:c}))}
        ${s("alert_names",r.alert_names!==!1,c=>({alert_names:c}))}
        ${u.map(c=>g`<div class="fp3d-set-module">${c.map(p=>this.renderViewField(e,p,i))}</div>`)}
        <p class="fp3d-set-note">${n("view_settings_more")}</p>
      </div>`}renderGlassSize(e,t,n){let i=n.roof.hologram??st,r=[.75,1,1.25,1.5,2],s=r.includes(i.size)?r:[...r,i.size].sort((a,l)=>a-l);return g`<label class="fp3d-set-field" title=${e("glass_size_hint")}
      >${e("glass_size")}
      <select ?disabled=${!t} @change=${a=>this.setPlanSettings({roof:{...n.roof,hologram:{...i,size:Number(a.target.value)}}})}>
        ${s.map(a=>g`<option value=${a} ?selected=${a===i.size}>${Math.round(a*100)} %</option>`)}
      </select></label
    >`}renderViewField(e,t,n){switch(t.kind){case"heading":return g`<h4>${t.text}</h4>`;case"text":return g`<p class="fp3d-set-note">${t.text}</p>`;case"check":return g`<label class="fp3d-set-check"><input type="checkbox" .checked=${t.value} ?disabled=${!n} @change=${i=>t.set(i.target.checked)} /> ${t.label}</label>`;case"select":return g`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${i=>t.set(i.target.value)}>
            ${t.options.map(i=>g`<option value=${i.id} ?selected=${i.id===t.value}>${i.label}</option>`)}
          </select></label
        >`;case"entity":{let i=Object.keys(e.states).filter(r=>t.filter(r)).sort((r,s)=>K(e,r).localeCompare(K(e,s)));return g`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${r=>{let s=r.target.value;t.set(s===""?null:s)}}>
            <option value="" ?selected=${!t.value}>${t.auto?T(e,"entity_auto",{name:K(e,t.auto)}):"\u2014"}</option>
            ${i.map(r=>g`<option value=${r} ?selected=${r===t.value}>${K(e,r)}</option>`)}
          </select></label
        >`}case"lines":return Iu(t.value,!n,{label:t.label,placeholder:t.placeholder??T(e,"lines_new"),add:T(e,"lines_add"),remove:T(e,"delete")},i=>t.set(i));case"button":return g`<button class="fp3d-btn ${t.primary?"fp3d-primary":""}" ?disabled=${!n} title=${t.title??""} @click=${()=>t.onTap()}>${t.label}</button>`}}renderNote(){return this._note?g`<div class="fp3d-note" role="status">${this._note}</div>`:x}spokenAlerts(e,t){let n=new Map(t.floors.flatMap(i=>le(i).map(r=>[r.id,r.name])));return this._alerts.map(i=>({kind:i.kind,entity:i.entity,name:K(e,i.entity),...i.text?{text:i.text}:{},room:i.roomId?n.get(i.roomId)??null:null,floorId:i.floorId,roomId:i.roomId}))}spokenCars(e,t){if(!q("auto_pro"))return[];let n=[];for(let i of t.floors)for(let r of i.furniture){if(r.type!=="parking"||!r.car)continue;let s=Bn(e,r),a=ho(e,r),l=a.entities.tracker?e.states[a.entities.tracker]:void 0,u=!!s&&!(l&&!Di.has(l.state.toLowerCase()));n.push({name:r.name||(s?ze(e,s):ze(e,"car")),spot:r.id,floorId:i.id,present:u,away:a.away,soc:a.soc,range:a.range,rangeUnit:a.rangeUnit,charging:a.charging,chargingW:a.chargingW,plugged:a.plugged,locked:a.locked})}return n}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return x;let t=e.kind==="light"&&e.value<=0;return g`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${K(this.hass,e.entity)}</span>
      <b>${t?T(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){var s;let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!q("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let i=(s=n.floors.find(a=>a.placements.some(l=>l.entity_id===e)))==null?void 0:s.id;if(!i)return;this._menu=null,this._through?this._through={...this._through,entity:e,ready:!1}:this._through={entity:e,back:t.getView(),ready:!1},this.watchCameras(!0);let r=this.floorId===i?0:300;r&&(this.throughFloor=i,this.fire("floor-tap",{floorId:i})),setTimeout(()=>{var a,l;((a=this._through)==null?void 0:a.entity)===e&&!((l=this.viewer)!=null&&l.lookThrough(e))&&(this._through=null)},r),setTimeout(()=>{var a;((a=this._through)==null?void 0:a.entity)===e&&(this._through={...this._through,ready:!0})},r+950)}endThrough(){var t,n,i;let e=this._through;e&&(this._through=null,((t=this.live)==null?void 0:t.id)===e.entity&&(this.live=null),(n=this.viewer)==null||n.endLook(),(i=this.viewer)==null||i.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?x:g`<div class="fp3d-pro" role="dialog">
      <b>${T(this.hass,"pro_title")}</b>
      <span>${T(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${T(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip" href=${Sd(this._proHint)} target="_blank" rel="noopener">${T(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${T(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${T(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return x;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!q("camera_cockpit"))return g`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${T(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${T(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(d=>d.placements.map(c=>c.entity_id)).filter(d=>V(d)==="camera"))];this.watchCameras(!0);let i=d=>{let c=e.states[d],p=c==null?void 0:c.attributes.entity_picture;return p&&c&&!ee(c)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},r=d=>{let c=e.states[d];return g`${K(e,d)}${(c==null?void 0:c.state)==="recording"?g` <b>● ${T(e,"state_recording")}</b>`:x}`},s=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(s){let d=i(s),c=this.liveFor(s),p=()=>{this.throughWall=!0,t(),this.lookThrough(s)};return g`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${T(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${r(s)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${T(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${c??(d?g`<img src=${d} alt="" />`:g`<div class="fp3d-wall-none">${T(e,"state_unavailable")}</div>`)}</div>
      </div>`}let a=this.renderRoot.querySelector(".fp3d-wall-grid");a||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:u}=Kp(n.length,(a==null?void 0:a.clientWidth)??this.clientWidth-48,(a==null?void 0:a.clientHeight)??this.clientHeight-160);return g`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${T(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${T(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${u}px); grid-auto-rows: ${Math.round(u*9/16)}px">
        ${n.map(d=>{let c=i(d),p=ot(e,d).some(h=>{var f;return((f=e.states[h])==null?void 0:f.state)==="on"});return g`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${T(e,"camera_wall_big")} @click=${()=>this._wallBig=d}>
            ${c?g`<img src=${c} alt="" />`:g`<div class="fp3d-wall-none">${T(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${r(d)}</span>
          </button>`})}
      </div>
    </div>`}renderProxmox(){if(!this.proxmoxWall||!this.hass||this.ro)return x;let e=this.hass,t=(d,c)=>T(e,d,c),n=()=>this.dispatchEvent(new CustomEvent("proxmox-close",{bubbles:!0,composed:!0})),i=vo(e),r=d=>d===null?"\u2013":`${ie(e,d,d<10?1:0)} %`,s=(d,c)=>g`<span class="fp3d-pve-bar" title=${`${d} ${r(c)}`}
        ><span class="fp3d-pve-bar-label">${d}</span><span class="fp3d-pve-bar-track"><span class="fp3d-pve-bar-fill ${(c??0)>=85?"fp3d-pve-hot":""}" style="width: ${Math.min(100,Math.max(0,c??0))}%"></span></span><span class="fp3d-pve-bar-value">${r(c)}</span></span
      >`,a=i.instances.filter(d=>d.running).length,l=i.instances.filter(d=>this._pveFilter==="all"||this._pveFilter==="on"===d.running),u=(d,c,p)=>g`<button class="fp3d-chip" aria-pressed=${this._pveFilter===d} @click=${()=>this._pveFilter=d}>${c} · ${p}</button>`;return g`<div class="fp3d-wall fp3d-pve">
      <div class="fp3d-wall-head">
        <span>${t("pve_title")}</span>
        <span class="fp3d-wall-tools">${u("all",t("pve_all"),i.instances.length)} ${u("on",t("pve_on"),a)} ${u("off",t("pve_off"),i.instances.length-a)}</span>
        <button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      ${i.nodes.map(d=>g`<button class="fp3d-pve-node ${d.online?"":"fp3d-pve-down"}" @click=${()=>Te(this,d.entity)}>
          <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${d.online?"fp3d-pve-dot-on":"fp3d-pve-dot-bad"}"></span>${d.name} · ${t(d.online?"pve_online":"pve_offline")}</span>
          ${s(t("pve_cpu"),d.cpu)} ${s(t("pve_ram"),d.memory)} ${s(t("pve_disk"),d.disk)}
          <span class="fp3d-pve-facts">
            ${d.vmsOn!==null||d.lxcOn!==null?g`<span>${t("pve_running_counts",{vms:d.vmsOn??0,lxc:d.lxcOn??0})}</span>`:x}
            ${d.load!==null?g`<span>${t("pve_load")} ${ie(e,d.load,2)}</span>`:x}
            ${d.updates?g`<span>${t("pve_updates",{n:d.updates})}</span>`:x}
            ${d.failedTasks?g`<span class="fp3d-pve-warn">${t("pve_failed",{n:d.failedTasks})}</span>`:x}
          </span>
        </button>`)}
      <div class="fp3d-pve-grid">
        ${l.length?l.map(d=>g`<button class="fp3d-pve-tile ${d.running?"":"fp3d-pve-off"} ${d.problem?"fp3d-pve-down":""}" @click=${()=>Te(this,d.entity)}>
                <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${d.problem?"fp3d-pve-dot-bad":d.running?"fp3d-pve-dot-on":""}"></span>${d.name}</span>
                <span class="fp3d-pve-sub">${d.vmid!==null?`#${d.vmid} \xB7 `:""}${t(d.kind==="vm"?"pve_vm":"pve_lxc")}${d.ip?` \xB7 ${d.ip}`:""}</span>
                ${d.running?g`${s(t("pve_cpu"),d.cpu)} ${s(t("pve_ram"),d.memory)}
                      <span class="fp3d-pve-sub">${t("pve_disk")} ${r(d.disk)}${d.memoryUsed?` \xB7 ${d.memoryUsed}`:""}${d.since?` \xB7 ${t("pve_since",{d:ru(d.since)})}`:""}</span>`:g`<span class="fp3d-pve-sub">${t(d.problem?"pve_problem":"pve_stopped")}</span>`}
              </button>`):g`<p class="fp3d-pve-sub">${t("pve_none")}</p>`}
      </div>
    </div>`}liveFor(e){var t;if(((t=this.live)==null?void 0:t.id)!==e){let n={id:e,el:null,failed:!1};this.live=n;let i=window;i.loadCardHelpers?i.loadCardHelpers().then(r=>{if(this.live!==n)return;let s=r.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});s.hass=this.hass,n.el=s,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}popOnDetection(e,t){let n=this.now();for(let i of ot(e,t)){let r=e.states[i];if((r==null?void 0:r.state)!=="on"||!r.last_changed)continue;let s=Date.parse(r.last_changed),a=`${i}@${r.last_changed}`;if(this.popSeen.has(a)||n-s>3e4)continue;this.popSeen.add(a),this.popSeen.size>200&&(this.popSeen=new Set([...this.popSeen].slice(-50)));let l=e.states[t],u=l==null?void 0:l.attributes.entity_picture,d=u&&!ee(l)?u.startsWith("data:")?u:`${u}${u.includes("?")?"&":"?"}fp3d=${Date.now()}`:null;this._camPop={entity:t,text:`${T(e,`detect_${wo(e,i)}`)} \xB7 ${K(e,t)}`,until:n+2e4,src:d},clearTimeout(this.camPopTimer),this.camPopTimer=setTimeout(()=>this._camPop=null,2e4);return}}camPopTimer;renderCamPop(){let e=this._camPop;return!e||!this.hass||this._through?x:g`<div class="fp3d-campop" role="status">
      <button class="fp3d-campop-img" title=${T(this.hass,"camera_popup_open")} @click=${()=>(this._camPop=null,this.lookThrough(e.entity))}>
        ${e.src?g`<img src=${e.src} alt="" />`:x}
      </button>
      <div class="fp3d-campop-bar"><span>${e.text}</span><button class="fp3d-chip" aria-label=${T(this.hass,"close")} @click=${()=>this._camPop=null}>✕</button></div>
    </div>`}zoomDef(){var e;return Wn((e=this.building)==null?void 0:e.settings.styles_custom),this.zoomStyle?Nt(this.zoomStyle)??null:null}renderZoomBackground(){var n;let e=this.morph,t=(n=this.zoomDef())==null?void 0:n.bg;return t?g`<div class="fp3d-zoom-bg" style="opacity:${e};background:linear-gradient(180deg, ${t[0]}, ${t[1]})"></div>`:x}renderThrough(){var s,a;let e=this._through;if(!e||!this.hass)return x;let t=this.hass.states[e.entity],n=t==null?void 0:t.attributes.entity_picture,i=n&&!ee(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,r=(a=(s=this.building)==null?void 0:s.settings.director)!=null&&a.live?this.liveFor(e.entity):null;return g`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${e.ready?r?g`<div class="fp3d-through-img fp3d-through-live">${r}</div>`:i?g`<img class="fp3d-through-img" src=${i} alt="" />`:x:x}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${K(this.hass,e.entity)}</span>
        <span class="fp3d-still">${r?"\u25CF Live":T(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${T(this.hass,"through_blend")}
          @input=${l=>this._blend=Number(l.target.value)/100}
        />
        <button class="fp3d-chip" title=${T(this.hass,"through_full_hint")} @click=${()=>this.throughFull(e.entity)}>⛶ ${T(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${T(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(e){let t=this.renderRoot.querySelector(".fp3d-through-img");t&&typeof t.requestFullscreen=="function"?t.requestFullscreen().catch(()=>Te(this,e)):Te(this,e)}renderMenu(){var a;let e=this._menu;if(!e||!this.hass||this.ro)return x;let t=this.renderRoot.querySelector(".fp3d-stage"),n=(t==null?void 0:t.clientWidth)??800,i=(t==null?void 0:t.clientHeight)??600,r=Math.max(8,Math.min(n-240,e.x-116)),s=Math.max(8,Math.min(i-360,e.y-170));return g`<div class="fp3d-menu-backdrop" @click=${()=>!this._menuFresh&&(this._menu=null)}></div>
      <fp3d-quick-menu
        style="left:${r}px;top:${s}px;${this._menuFresh?"pointer-events:none":""}"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        ?slatInvert=${po(this.building,e.entity)}
        .presets=${q("sound")?((a=this.building)==null?void 0:a.settings.media_presets)??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${q("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${l=>this.lookThrough(l.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){var n;let t=[];for(let i of this.scene){if(i.kind!=="marker")continue;let r=e.floors.find(c=>c.id===i.floorId),s=i.furnitureId?r==null?void 0:r.furniture.find(c=>c.id===i.furnitureId):void 0;if(!r||!s&&!i.at)continue;let[a,l]=s?[s.x,s.z]:i.at,u=Ep(i.path),d=Pp(i.emoji);t.push({id:`module:${i.id}`,floorId:r.id,roomId:((n=r.rooms.find(c=>c.points.length>=3&&B([a,l],c.points)))==null?void 0:n.id)??null,x:a,z:l,y:i.y??(s?Se(r,s)+s.h*.6:1.2),icon:d?`<span style="font-size:18px;line-height:1" aria-hidden="true">${d}</span>`:u?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${u}"/></svg>`:"",name:i.name,text:i.text??"",active:!!i.active&&!this.dimmed,unavailable:!1,glow:i.color&&i.active&&!this.dimmed?{color:i.color,level:1}:null,pin:!0,full:!0,...s?{furnitureId:s.id}:{}})}return t}openModuleCard(e){var r,s;let t=this.scene.find(a=>a.kind==="marker"&&a.id===e);if(!t)return;if(t.sheet){this.openRoomSheet(t.sheet.roomId,t.sheet.id);return}t.card&&(this.mediaFolded.delete(t.card),this.cardPing=t.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let n=(r=this.building)==null?void 0:r.floors.find(a=>a.id===t.floorId),i=n==null?void 0:n.furniture.find(a=>a.id===t.furnitureId);n&&i&&((s=this.viewer)==null||s.focus(n.id,i.x,i.z,Se(n,i)+i.h*.6,`module:${t.id}`))}onDeviceTap(e,t=0,n=0){var a;if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("popup:"))return this.openModulePopup(e.slice(6));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!1);if(e.startsWith("hh:")){let[l,u]=e.slice(3).split("#");((a=this.building)==null?void 0:a.floors.flatMap(c=>c.furniture).find(c=>c.id===u&&c.type==="waste_bin"))?(this._binInfo={furnitureId:u,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(l,t,n):Te(this,l);return}if(e.startsWith("ws:")){let l=e.slice(3);this.ro?this.showInfo(l,t,n):(!this.confirmSet.has(l)||confirm(T(this.hass,"confirm_switch",{name:K(this.hass,l)})))&&Dn(this.hass,l);return}if(this.ro){let l=this.building,u=l?l.energy.grid??jn(l,c=>{var p,h;return((h=(p=this.furnitureLinks)==null?void 0:p.get(c.id))==null?void 0:h.power)??null}).grid:null,d=e==="grid"?u:e.startsWith("detect:")?e.slice(7):e;d&&this.showInfo(d,t,n);return}let i=this.apOf(e);if(i){i.led?(!this.confirmSet.has(e)||confirm(T(this.hass,"confirm_switch",{name:this.hass?Wo(this.hass,e):e})))&&Dn(this.hass,i.led):Te(this,e);return}let r=this.heaterPower(e);if(r){(!this.confirmSet.has(e)||confirm(T(this.hass,"confirm_switch",{name:K(this.hass,e)})))&&Dn(this.hass,r);return}if(e==="grid"){let l=this.building,u=l?l.energy.grid??jn(l,d=>{var c,p;return((p=(c=this.furnitureLinks)==null?void 0:c.get(d.id))==null?void 0:p.power)??null}).grid:null;u&&Te(this,u);return}if(e.startsWith("detect:")){Te(this,e.slice(7));return}let s=V(e);if(s==="cover"||s==="camera"){this._menu={entity:e,x:t,y:n};return}if(s&&kc.has(s)){if(this.confirmSet.has(e)&&!confirm(T(this.hass,"confirm_switch",{name:K(this.hass,e)})))return;Dn(this.hass,e)}else Te(this,e)}onOpeningTap(e,t,n,i){var u;let r=(u=this.openingLinks)==null?void 0:u.get(e);if(!r||!this.hass)return;if(r.lock&&!r.cover){this.ro?this.showInfo(r.lock,t,n):this._menu={entity:r.lock,x:t,y:n,doorLock:!0};return}let s=r.cover;if(!s)return;if(this.ro){this.showInfo(r.contact??s,t,n);return}if(i){Te(this,s);return}let a=this.hass.states[s];if(!a||ee(a)){Te(this,s);return}if(this.confirmSet.has(s)&&!confirm(T(this.hass,"confirm_switch",{name:K(this.hass,s)})))return;let[l]=s.split(".");this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:s})}effectiveTheme(){return this.effectiveStyle().base}effectiveStyle(){var u,d,c;let e=this.hass,t=(u=this.building)==null?void 0:u.settings,n=this._styleOverride,i=n&&(n.until===null||n.until>Date.now())?n.style:null,r=this.styleEntity||(t==null?void 0:t.style_entity)||null;Wn(t==null?void 0:t.styles_custom);let s={};for(let p of sn())s[p.id]=[p.name??T(e,`style_${p.id}`)];let a=(d=e==null?void 0:e.states["sun.sun"])==null?void 0:d.state,l=Xu({choice:this.theme,evening:this.themeEvening,night:this.themeNight,plan:t,entityState:r?((c=e==null?void 0:e.states[r])==null?void 0:c.state)??null:null,override:i,now:new Date,sunUp:a==="above_horizon"?!0:a==="below_horizon"?!1:null,names:s});return Nt(l)??Nt("neon")}setStyleOverride(e,t){var i;let n=e===""||e==="reset"||e==="auto_reset"?null:Nt(e)?e:Fi(e);this._styleOverride=n?{style:n,until:t?Date.now()+t*6e4:null}:null;try{this._styleOverride?localStorage.setItem(va,JSON.stringify(this._styleOverride)):localStorage.removeItem(va)}catch{}return(i=this.viewer)==null||i.setStyle(this.effectiveStyle()),n}onStyle(e){let t=(this.screen??"").trim().toLowerCase();e.screens.length&&!e.screens.some(n=>n.trim().toLowerCase()===t)||this.setStyleOverride(e.style,e.minutes??null)}styleSentence(e){var l,u;let t=this.hass,n=e.toLowerCase().trim(),i=/(^|\s)(estilo|aspecto|look|dise[nñ]o|modo|vista)(\s|$)/.test(n),r=` ${n} `.replace(/[¿?¡!.,]/g," ").replace(/\s(casa ?neon|la casa|casa|por favor|pon|ponme|poner|cambia|cambiar|activa|activar|usa|usar|al|a|el|la|los|las|en|de|del|un|una|como|modo|estilo|aspecto|look|dise[nñ]o|vista)(?=\s)/g," ").replace(/\s+/g," ").trim();if(i&&/^(normal|el normal|por defecto|predeterminado|est[aá]ndar|autom[aá]tico|auto|volver|restablecer|reset)$/.test(r))return this.setStyleOverride("reset",null),T(t,"style_reset");Wn((l=this.building)==null?void 0:l.settings.styles_custom);let s={};for(let d of sn())s[d.id]=[d.name??T(t,`style_${d.id}`)];let a=Fi(r,s);return a?(this.setStyleOverride(a,null),T(t,"style_set",{name:((u=Nt(a))==null?void 0:u.name)??T(t,`style_${a}`)})):null}startViewOf(){var e;return this.startView??((e=this.building)==null?void 0:e.settings.start_view)??null}currentView(){var e;return((e=this.viewer)==null?void 0:e.currentView())??null}resetView(){var e;this._through=null,(e=this.viewer)==null||e.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}cardsOn(){return(this.showEnergy||!!this.holograms)&&this.holoVisible()&&!this._cardsQuiet}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!q("energy_pro")||!e||this.roomId||!this.showEnergy)return x;let t=i=>T(this.hass,i),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:he(this.hass,e.consumption)}),e.grid!==null){let i=e.grid<0;n.push({cls:i?"export":"grid",label:t(i?"energy_grid_export":"energy_grid_import"),value:he(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:he(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let i=[e.battery!==null?he(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:i.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${ie(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),g`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?x:n.map(i=>g`<div class="fp3d-energy-item fp3d-energy-${i.cls}"><span>${i.label}</span><b>${i.value}</b></div>`)}
      ${this.flows!==null?x:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?x:g`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return x;let e=Oi[this.heatMode],t=this.heatMode==="temperature",n=t?Tt(this.hass,e.stops[0][0]):e.stops[0][0],i=t?Tt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],r=t?Ye(this.hass):e.unit,s=a=>T(this.hass,a);return g`<div class="fp3d-legend">
      <b>${s(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${tp(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${ie(this.hass,n,0)} ${r}</span><span>${ie(this.hass,i,0)} ${r}</span></span>
      ${this.heatValues.size?x:g`<span class="fp3d-legend-none">${s("heat_none_found")}</span>`}
    </div>`}sunPathToday(e){var r,s;let t=(r=e.config)==null?void 0:r.latitude,n=(s=e.config)==null?void 0:s.longitude;if(typeof t!="number"||typeof n!="number")return null;let i=`${new Date().toDateString()},${t},${n}`;return this.sunPathKey!==i&&(this.sunPathKey=i,this.sunPathCache=sh(Date.now(),t,n)),this.sunPathCache}skyColor(){let e=Io[this.effectiveTheme()]??Io.neon,t=this._sky;return e.night[0].map((n,i)=>Math.round(n+(e.day[0][i]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){var l,u,d;let e=this._sky,t=(c,p)=>`rgb(${c.map((h,f)=>Math.round(h+(p[f]-h)*e)).join(",")})`,n=Io[this.effectiveTheme()]??Io.neon,i=this.effectiveStyle().bg,r=Yp((l=this.building)==null?void 0:l.settings.backdrop)??(i?`linear-gradient(180deg, ${i[0]}, ${i[1]})`:null),a=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-room-scale:${$b(this.building)};--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}${r?`;background:${r}`:""}`;return g`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.effectiveTheme()==="day"?"fp3d-bright":""} ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""} ${this._spotHint?"fp3d-picking":""}"
      style=${a}
    >
      ${this.renderZoomBackground()}
      ${this._error?g`<p class="fp3d-error">${this._error}</p>`:x} ${this.clean?x:this.renderEnergy()} ${this.renderHologram()} ${this.clean?x:this.renderLegend()}
      ${this.clean&&this._find!==null&&!this._walk?this.renderFind():x}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?x:g`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?x:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderThrough()} ${this.renderCamPop()} ${this.renderCameraWall()} ${this.renderProxmox()} ${this.renderSheet()} ${this.renderModulePopup()} ${this.renderSettings()} ${this.renderNote()}
      ${this.clean?x:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()} ${(d=(u=this.building)==null?void 0:u.settings.surroundings)!=null&&d.on&&this.surroundings?g`<a class="fp3d-osm-credit" href=${Tp} target="_blank" rel="noopener">© OpenStreetMap</a>`:x}
      ${this.renderMic()} ${this.renderFlyIn()}
      ${this._spotHint?g`<button class="fp3d-spot-hint" @click=${()=>{var c;return(c=this.viewer)==null?void 0:c.pickSpot(null)}}>📍 ${this._spotHint} <span aria-hidden="true">✕</span></button>`:x}
      ${this._announce?g`<div class="fp3d-announce" role="status" @click=${()=>this._announce=null}>📢 ${this._announce}</div>`:x}
      ${this.pivotMark&&!this._walk?g`<span class="fp3d-pivot" aria-hidden="true"></span>`:x}
      ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,Ji())}></fp3d-mic-probe>`:x}
      ${this.showStats&&this._stats?g`<span class="fp3d-stats"
            ><b>${this._stats.fps?T(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):T(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?g`(${this._stats.busy.map(c=>T(this.hass,`stats_busy_${c}`)).join(", ")})`:x} ·
            ${T(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${T(this.hass,this._stats.low?"stats_low":"stats_full",{r:ie(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${ie(this.hass,this.syncMs,1)} ms`:""}</span
          >`:x}
    </div>`}static styles=[He,je,fe`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      /* a tag: light text on a solid dark plate, the bin's colour as its edge and a soft glow (coloured text – a
         blue paper bin's – was hard to read) */
      .fp3d-holo.fp3d-holo-bin {
        min-width: 0;
        width: auto;
        padding: 0;
        border-radius: 8px;
        pointer-events: none;
        border: 1.5px solid color-mix(in srgb, var(--bin) 85%, white);
        border-left-width: calc(6px * var(--fp3d-pin-k, 1));
        background: rgba(9, 13, 22, 0.94);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        box-shadow: 0 0 16px color-mix(in srgb, var(--bin) 50%, transparent), 0 2px 6px rgba(0, 0, 0, 0.5);
        color: #f5f8ff;
        text-shadow: none;
      }
      /* the tags of bins, mailboxes and plants follow the symbol size like the pins' labels (#645) */
      .fp3d-holo-bin .fp3d-holo-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: calc(4px * var(--fp3d-pin-k, 1)) calc(10px * var(--fp3d-pin-k, 1));
        white-space: nowrap;
      }
      .fp3d-holo.fp3d-holo-later {
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
        border-color: color-mix(in srgb, var(--bin) 60%, #3a4252);
      }
      .fp3d-holo-bin b {
        font-size: calc(19px * var(--fp3d-pin-k, 1));
        font-weight: 700;
        line-height: 1.15;
        color: #ffffff;
      }
      .fp3d-holo-later b {
        font-weight: 600;
        color: #dfe5f0;
      }
      .fp3d-holo-bin span {
        font-size: calc(13px * var(--fp3d-pin-k, 1));
        line-height: 1.2;
        color: #cfd7e6;
      }
      /* put out already: a calm green edge, no glow */
      .fp3d-holo.fp3d-holo-out {
        border-color: #4ddf7a;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
      }
      .fp3d-holo-out b,
      .fp3d-holo-line-out b {
        color: #a8ffc2;
      }
      /* bins standing together: one plate, one line each in pickup order with its own colour edge */
      .fp3d-holo.fp3d-holo-bin.fp3d-holo-multi {
        border-color: rgba(190, 205, 230, 0.55);
        border-left-width: 1.5px;
      }
      .fp3d-holo-bin .fp3d-holo-lines {
        align-items: stretch;
        gap: calc(3px * var(--fp3d-pin-k, 1));
        padding: calc(5px * var(--fp3d-pin-k, 1)) calc(9px * var(--fp3d-pin-k, 1)) calc(5px * var(--fp3d-pin-k, 1)) calc(6px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line {
        display: flex;
        align-items: baseline;
        gap: calc(7px * var(--fp3d-pin-k, 1));
        border-left: calc(5px * var(--fp3d-pin-k, 1)) solid var(--bin);
        padding-left: calc(6px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line b {
        font-size: calc(16px * var(--fp3d-pin-k, 1));
      }
      .fp3d-holo-line-later b {
        font-weight: 600;
        color: #dfe5f0;
      }
      .fp3d-holo-line-later {
        border-left-color: color-mix(in srgb, var(--bin) 65%, #3a4252);
      }
      /* a mailbox's or a plant's tag from afar: a round symbol (the text comes back close up) */
      .fp3d-holo-sym {
        display: none;
      }
      .fp3d-holo.fp3d-holo-bin.fp3d-holo-far {
        border-radius: 50%;
        border-width: 2px;
      }
      .fp3d-holo-far .fp3d-holo-body {
        display: none;
      }
      .fp3d-holo-far .fp3d-holo-sym {
        display: flex;
        align-items: center;
        justify-content: center;
        width: calc(34px * var(--fp3d-pin-k, 1));
        height: calc(34px * var(--fp3d-pin-k, 1));
        color: #ffffff;
      }
      .fp3d-holo-far .fp3d-holo-sym svg {
        width: 62%;
        height: 62%;
      }
      .fp3d-holo-link[style*="--bin"] line,
      .fp3d-holo-link[style*="--bin"] circle {
        stroke: var(--bin);
      }
      .fp3d-pivot {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 22px;
        height: 22px;
        margin: -11px 0 0 -11px;
        border: 1.5px solid color-mix(in srgb, var(--fp3d-accent, #37e0ff) 75%, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 2;
      }
      .fp3d-pivot::before,
      .fp3d-pivot::after {
        content: "";
        position: absolute;
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 75%, transparent);
      }
      .fp3d-pivot::before {
        left: 50%;
        top: -6px;
        bottom: -6px;
        width: 1.5px;
        margin-left: -0.75px;
      }
      .fp3d-pivot::after {
        top: 50%;
        left: -6px;
        right: -6px;
        height: 1.5px;
        margin-top: -0.75px;
      }
      /* two classes: the info bubbles' own rule (.fp3d-swipe, further down) lets taps through to the house and
         would win over a single class – this bubble has a button (#793) */
      .fp3d-swipe.fp3d-bin-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-swipe.fp3d-bin-info .fp3d-bin-out {
        pointer-events: auto;
      }
      .fp3d-bin-info small {
        opacity: 0.7;
        font-weight: 400;
      }
      .fp3d-bin-info .fp3d-bin-out {
        margin-top: 6px;
        padding: 7px 12px;
        border-radius: 999px;
        border: 1px solid rgba(190, 205, 230, 0.55);
        background: rgba(255, 255, 255, 0.08);
        color: #f5f8ff;
        font: inherit;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
      }
      .fp3d-bin-info .fp3d-bin-out-on {
        border-color: #4ddf7a;
        background: rgba(77, 223, 122, 0.16);
        color: #a8ffc2;
      }
      .fp3d-hh {
        position: absolute;
        right: 12px;
        top: 58px;
        z-index: 3;
        width: min(250px, calc(100% - 24px));
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: rgba(10, 18, 34, 0.72);
        border: 1px solid rgba(110, 220, 255, 0.28);
        backdrop-filter: blur(8px);
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.35);
      }
      .fp3d-hh-folded {
        width: auto;
      }
      .fp3d-hh button {
        font: inherit;
        color: inherit;
        background: none;
        border: 0;
        text-align: left;
        cursor: pointer;
        border-radius: 9px;
      }
      .fp3d-hh-head {
        font-size: 12px;
        font-weight: 600;
        padding: 3px 6px;
        opacity: 0.9;
      }
      .fp3d-hh-head b {
        margin-left: 4px;
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-hh-row {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        padding: 5px 6px;
      }
      .fp3d-hh-row:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.06);
      }
      .fp3d-hh-row:disabled {
        cursor: default;
      }
      .fp3d-hh-hot .fp3d-hh-icon {
        color: #ffb547;
      }
      .fp3d-hh-icon {
        flex: none;
        display: inline-flex;
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-alert-banner {
        position: absolute;
        left: 50%;
        top: 10px;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        gap: 6px;
        max-width: calc(100% - 24px);
        z-index: 4;
      }
      .fp3d-alert {
        flex: 0 1 auto;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 7px 14px 7px 12px;
        border: 0;
        border-left: 4px solid #ff3b4f;
        border-radius: 12px;
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        font: 600 13.5px var(--fp3d-font);
        box-shadow: 0 0 18px rgba(255, 59, 79, 0.35);
        cursor: pointer;
        animation: fp3d-alert-pulse 1.2s ease-in-out infinite;
      }
      .fp3d-alert-water,
      .fp3d-alert-window_rain {
        border-left-color: #4fb3ff;
        box-shadow: 0 0 18px rgba(79, 179, 255, 0.35);
      }
      .fp3d-alert-alarm_pending {
        border-left-color: #ffb547;
        box-shadow: 0 0 18px rgba(255, 181, 71, 0.35);
      }
      .fp3d-alert-more {
        align-self: center;
        color: var(--fp3d-muted);
        font-size: 13px;
      }
      @keyframes fp3d-alert-pulse {
        50% {
          box-shadow: 0 0 4px transparent;
        }
      }
      .fp3d-has-alerts .fp3d-energy {
        top: 58px;
      }
      .fp3d-scenes {
        position: absolute;
        left: 60px;
        right: 60px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 6px;
        z-index: 2;
        pointer-events: none;
      }
      .fp3d-scenes .fp3d-chip {
        pointer-events: auto;
      }
      @media (prefers-reduced-motion: reduce) {
        .fp3d-alert,
        .fp3d-dev-found {
          animation: none;
        }
      }
      .fp3d-stage {
        position: absolute;
        inset: 0;
        overflow: hidden;
        container-type: size;
        container-name: fp3d;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-sky, var(--fp3d-bg2)), var(--fp3d-ground, var(--fp3d-bg)) 72%);
        transition: background 2s ease;
        isolation: isolate;
      }
      /* under everything on the stage, above the stage's own background (the stage isolates its layers) */
      .fp3d-zoom-bg {
        position: absolute;
        inset: 0;
        z-index: -1;
        pointer-events: none;
      }
      /* while a spot is picked, names and pins on the view let the tap through to the plan */
      .fp3d-picking .fp3d-labels,
      .fp3d-picking .fp3d-labels * {
        pointer-events: none !important;
      }
      .fp3d-picking .fp3d-canvas {
        cursor: crosshair;
      }
      /* a module asks for a spot: the hint stands at the top until the tap (a tap on it cancels) */
      .fp3d-spot-hint {
        position: absolute;
        top: calc(12px + env(safe-area-inset-top, 0px));
        left: 50%;
        transform: translateX(-50%);
        z-index: 25;
        padding: 8px 14px;
        border-radius: 999px;
        border: 1px solid rgba(62, 232, 255, 0.6);
        background: rgba(6, 12, 24, 0.85);
        color: #e6ecff;
        font: inherit;
        font-size: 14px;
        cursor: pointer;
        box-shadow: 0 0 18px rgba(62, 232, 255, 0.25);
      }
      /* the real sky (drawn by the 3D view): first on the stage, so the zoom style's background lies over it */
      .fp3d-sky {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: -1;
        pointer-events: none;
      }
      .fp3d-canvas {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        display: block;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-canvas:active {
        cursor: grabbing;
      }
      .fp3d-labels {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }
      .fp3d-pin-info {
        display: grid;
        gap: 1px;
        text-align: center;
      }
      .fp3d-pin-info small {
        font-size: calc(11px * var(--fp3d-room-scale, 1));
        font-weight: 500;
        opacity: 0.9;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-pin {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        font: 600 12.5px var(--fp3d-title-font);
        color: var(--fp3d-text);
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        box-shadow: var(--fp3d-shadow);
      }
      /* the house's size of the room names (idea: Banhammer1919) */
      .fp3d-pin[data-room] {
        font-size: calc(12.5px * var(--fp3d-room-scale, 1));
        padding: calc(5px * var(--fp3d-room-scale, 1)) calc(10px * var(--fp3d-room-scale, 1));
        border-radius: calc(10px * var(--fp3d-room-scale, 1));
      }
      .fp3d-pin-floor {
        display: grid;
        justify-items: start;
        gap: 1px;
        padding: 8px 14px;
        border-radius: 12px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 22px rgba(55, 224, 255, 0.28);
      }
      .fp3d-pin-floor b {
        font: 700 15px var(--fp3d-title-font);
        letter-spacing: -0.01em;
      }
      .fp3d-pin-floor span {
        font: 500 12px var(--fp3d-font);
        opacity: 0.78;
      }
      .fp3d-dev {
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: auto;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        /* the symbol size (small 0.8, normal 1, large 1.25) scales the pin from inside, not its position */
        font: 600 calc(12px * var(--fp3d-pin-k, 1)) var(--fp3d-font);
        cursor: pointer;
        white-space: nowrap;
        backdrop-filter: blur(6px);
        touch-action: manipulation;
        -webkit-user-select: none;
        user-select: none;
        transition: opacity 0.2s ease;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: calc(24px * var(--fp3d-pin-k, 1));
        height: calc(24px * var(--fp3d-pin-k, 1));
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev-icon svg {
        width: calc(18px * var(--fp3d-pin-k, 1));
        height: calc(18px * var(--fp3d-pin-k, 1));
      }
      .fp3d-dev[data-entity^="trail:"] {
        padding: 2px 4px 2px 2px;
        font-size: 11px;
        border-color: rgba(55, 224, 255, 0.5);
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-icon {
        color: #37e0ff;
      }
      .fp3d-dev[data-entity^="trail:"] .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-text {
        display: none;
        padding-right: 6px;
        color: var(--fp3d-text);
        font-variant-numeric: tabular-nums;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-watt:empty {
        display: none;
      }
      .fp3d-dev-watt {
        padding: 1px 6px 1px 0;
        color: #37e0ff;
        font-variant-numeric: tabular-nums;
        font-weight: 700;
      }
      .fp3d-dev-on .fp3d-dev-watt {
        color: #2a1a00;
      }
      .fp3d-person {
        position: absolute;
        left: 0;
        top: 0;
        width: 30px;
        height: 30px;
        pointer-events: auto;
      }
      .fp3d-person-tap {
        cursor: pointer;
      }
      .fp3d-person-face {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        background: var(--fp3d-pc, #ff5fd2);
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px color-mix(in srgb, var(--fp3d-pc, #ff5fd2) 55%, transparent),
          0 0 18px var(--fp3d-pc, #ff5fd2);
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person-figure {
        width: auto;
        height: auto;
      }
      .fp3d-person-figure .fp3d-person-face {
        display: none;
      }
      .fp3d-person-figure .fp3d-person-tag {
        position: static;
        display: block;
        transform: none;
      }
      .fp3d-person-tag {
        position: absolute;
        left: 50%;
        top: calc(100% + 4px);
        transform: translateX(-50%);
        padding: 1px 7px;
        border-radius: 8px;
        background: rgba(8, 14, 28, 0.82);
        border: 1px solid color-mix(in srgb, var(--fp3d-pc, #ff5fd2) 60%, transparent);
        color: #fff;
        font: 600 11px var(--fp3d-font);
        white-space: nowrap;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      /* room names off: the pins go, but the "values" stay (without the name) */
      .fp3d-no-room-names .fp3d-pin:not(.fp3d-pin-info),
      .fp3d-no-room-names .fp3d-pin-info .fp3d-pin-name {
        display: none !important;
      }
      /* tablet level: blur over the canvas and glowing shadows are expensive on weak GPUs */
      .fp3d-stage.fp3d-low {
        transition: none;
      }
      .fp3d-low .fp3d-pin,
      .fp3d-low .fp3d-dev,
      .fp3d-low .fp3d-dev-on,
      .fp3d-low .fp3d-energy-item,
      .fp3d-low .fp3d-find input,
      .fp3d-low .fp3d-find-list,
      .fp3d-low .fp3d-find-btn,
      .fp3d-low .fp3d-swipe,
      .fp3d-low .fp3d-thumb {
        backdrop-filter: none;
        box-shadow: none;
        transition: none;
      }
      /* a shadow that pulses repaints the warning every frame: it glows steadily on the tablet level */
      .fp3d-low .fp3d-alert {
        animation: none;
      }
      .fp3d-low .fp3d-holo-link line,
      .fp3d-low .fp3d-holo-link circle,
      .fp3d-low .fp3d-holo-curve {
        filter: none;
      }
      .fp3d-thumbs {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: calc(100% - 140px);
        overflow-y: auto;
        scrollbar-width: none;
        z-index: 2;
      }
      .fp3d-thumb {
        position: relative;
        display: grid;
        padding: 0;
        width: 150px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: color-mix(in srgb, var(--fp3d-chrome) 70%, transparent);
        color: var(--fp3d-text);
        cursor: pointer;
        overflow: hidden;
        font: inherit;
        box-shadow: var(--fp3d-shadow);
        opacity: 0.72;
        transition: opacity 0.15s, border-color 0.15s;
      }
      .fp3d-thumb:hover,
      .fp3d-thumb[aria-pressed="true"] {
        opacity: 1;
      }
      .fp3d-thumb[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-accent), 0 0 18px rgba(55, 224, 255, 0.25);
      }
      .fp3d-thumb img {
        display: block;
        width: 100%;
        aspect-ratio: 4 / 3;
      }
      .fp3d-thumb span {
        position: absolute;
        left: 8px;
        bottom: 6px;
        font-size: 12px;
        font-weight: 600;
        text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
      }
      .fp3d-thumbs-fold {
        align-self: flex-start;
        width: 26px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 11px;
        cursor: pointer;
      }
      /* folded: plain floor buttons with their names, no pictures (D177) */
      .fp3d-thumbs-compact .fp3d-thumb {
        padding: 6px 10px;
        min-width: 0;
      }
      .fp3d-thumbs-compact .fp3d-thumb span {
        position: static;
        background: none;
        padding: 0;
      }
      .fp3d-thumb-house {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
      }
      .fp3d-thumb-house span {
        position: static;
        text-shadow: none;
      }
      .fp3d-thumbs-small .fp3d-thumb {
        width: 104px;
      }
      /* at the top right, clear of the floor pictures and the switch rows (a card moves it beside its own buttons) */
      .fp3d-walk-btn {
        position: absolute;
        z-index: 3;
        top: 12px;
        right: var(--fp3d-walk-right, 12px);
        height: 38px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 0 14px 0 10px;
        font: inherit;
        font-weight: 700;
        font-size: 14px;
        border: 1px solid rgba(55, 224, 255, 0.45);
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      .fp3d-walk-surface {
        position: absolute;
        inset: 0;
        z-index: 4;
        touch-action: none;
        cursor: grab;
      }
      .fp3d-walk-top {
        position: absolute;
        z-index: 5;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: none;
        white-space: nowrap;
      }
      .fp3d-walk-room,
      .fp3d-walk-exit,
      .fp3d-walk-hint {
        padding: 8px 14px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font: inherit;
        font-weight: 700;
      }
      .fp3d-walk-exit {
        border: 0;
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-walk-hint {
        position: absolute;
        z-index: 5;
        left: 50%;
        top: 62px;
        transform: translateX(-50%);
        max-width: min(560px, calc(100% - 32px));
        font-weight: 500;
        font-size: 13px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-walk-stick {
        position: absolute;
        z-index: 5;
        right: 18px;
        bottom: calc(18px + var(--fp3d-bottom-inset, 0px));
        width: 112px;
        height: 112px;
        border-radius: 50%;
        background: rgba(14, 21, 38, 0.55);
        border: 1px solid var(--fp3d-line);
        display: grid;
        place-items: center;
        touch-action: none;
      }
      .fp3d-walk-stick span {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        background: var(--fp3d-accent);
        box-shadow: 0 0 16px rgba(55, 224, 255, 0.5);
        pointer-events: none;
      }
      /* with a mouse the stick is not needed */
      @media (pointer: fine) {
        .fp3d-walk-stick {
          display: none;
        }
      }
      .fp3d-find-btn {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
      }
      /* the star sits above the search button, its menu opens above it */
      .fp3d-central-btn {
        position: absolute;
        left: 12px;
        bottom: calc(56px + var(--fp3d-bottom-inset, 0px));
        width: 40px;
        height: 40px;
        display: grid;
        place-items: center;
        border: 0;
        border-radius: 13px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        cursor: pointer;
        z-index: 3;
      }
      .fp3d-central-on {
        color: var(--fp3d-accent);
      }
      .fp3d-central {
        position: absolute;
        left: 12px;
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        width: min(320px, calc(100% - 24px));
        max-height: calc(100% - 140px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 12px 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 16px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(10px);
        z-index: 4;
      }
      .fp3d-central > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        opacity: 0.7;
      }
      .fp3d-central-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-central-row small {
        opacity: 0.6;
      }
      .fp3d-central .fp3d-btn {
        min-width: 64px;
      }
      .fp3d-central-armed {
        background: #ff8a3d !important;
        color: #1a0d00 !important;
      }
      .fp3d-central-favs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-own-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .fp3d-own-btn ha-icon {
        --mdc-icon-size: 18px;
      }
      .fp3d-central-hint {
        margin: 0;
        font-size: 13px;
        opacity: 0.7;
      }
      .fp3d-low .fp3d-central {
        backdrop-filter: none;
      }
      /* the eye sits beside the search button; alone in the corner once the view is clean */
      .fp3d-osm-credit {
        position: absolute;
        right: 8px;
        bottom: 4px;
        z-index: 3;
        font-size: 10px;
        color: var(--fp3d-muted, rgba(200, 210, 230, 0.7));
        opacity: 0.75;
        text-decoration: none;
      }
      .fp3d-eye {
        position: absolute;
        left: 56px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: 36px;
        height: 36px;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      /* the clock in a corner of the view (view settings / card option clock) */
      .fp3d-clock {
        position: absolute;
        z-index: 4;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 2px;
        padding: 8px 14px;
        border-radius: 14px;
        background: rgba(4, 16, 24, 0.55);
        color: var(--fp3d-text);
        line-height: 1.1;
        pointer-events: none;
        backdrop-filter: blur(6px);
      }
      .fp3d-clock b {
        font-size: 30px;
        font-weight: 700;
        font-variant-numeric: tabular-nums;
        letter-spacing: 0.02em;
      }
      .fp3d-clock span {
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      /* at the top it sits under the energy strip and the walk button */
      .fp3d-clock-tl {
        top: 64px;
        left: 12px;
      }
      .fp3d-clock-tr {
        top: 64px;
        right: 12px;
      }
      .fp3d-clock-bl {
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        left: 12px;
      }
      .fp3d-clock-br {
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        right: 12px;
      }
      .fp3d-mic {
        position: absolute;
        bottom: calc(6px + var(--fp3d-bottom-inset, 0px));
        /* a big target: it is tapped from across the room, often with a thumb */
        width: 52px;
        height: 52px;
        touch-action: manipulation;
        display: grid;
        place-items: center;
        padding: 0;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.35);
        background: rgba(8, 16, 34, 0.7);
        color: var(--fp3d-text);
        cursor: pointer;
        z-index: 4;
      }
      .fp3d-mic-on {
        color: #ff5a6a;
        border-color: #ff5a6a;
        box-shadow: 0 0 12px rgba(255, 90, 106, 0.7);
      }
      .fp3d-mic-say {
        position: absolute;
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
        max-width: min(420px, calc(100% - 80px));
        padding: 6px 12px;
        border-radius: 14px;
        background: rgba(8, 16, 34, 0.85);
        border: 1px solid rgba(160, 240, 255, 0.35);
        color: var(--fp3d-text);
        font-size: 14px;
        z-index: 4;
      }
      .fp3d-announce {
        position: absolute;
        left: 50%;
        top: 18%;
        transform: translateX(-50%);
        max-width: min(640px, calc(100% - 32px));
        padding: 16px 26px;
        border-radius: 18px;
        background: rgba(8, 16, 34, 0.9);
        border: 1px solid rgba(160, 240, 255, 0.6);
        box-shadow: 0 0 24px rgba(0, 229, 255, 0.35);
        color: var(--fp3d-text);
        font-size: clamp(20px, 4vw, 34px);
        text-align: center;
        z-index: 6;
      }
      .fp3d-mic-err {
        border-color: rgba(255, 90, 106, 0.7);
      }
      .fp3d-eye-clean {
        left: 12px;
        opacity: 0.55;
      }
      .fp3d-eye:hover,
      .fp3d-eye-clean:hover {
        opacity: 1;
      }
      .fp3d-find {
        position: absolute;
        left: 12px;
        bottom: calc(10px + var(--fp3d-bottom-inset, 0px));
        width: min(340px, calc(100% - 24px));
        display: flex;
        flex-direction: column-reverse;
        gap: 6px;
        z-index: 3;
      }
      /* opened from the phone view's "More": above the line that says what needs a look */
      .fp3d-find-up {
        bottom: calc(66px + var(--fp3d-bottom-inset, 0px));
      }
      .fp3d-find input {
        box-sizing: border-box;
        width: 100%;
        height: 42px;
        padding: 0 42px 0 14px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-size: 15px;
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-close {
        position: absolute;
        right: 6px;
        bottom: 6px;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-find-list {
        display: grid;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(8px);
      }
      .fp3d-find-list button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 10px;
        border: 0;
        border-radius: 10px;
        background: none;
        color: var(--fp3d-text);
        text-align: left;
        font: inherit;
        cursor: pointer;
      }
      .fp3d-find-list button:hover,
      .fp3d-find-list button:focus-visible {
        background: rgba(127, 127, 127, 0.14);
      }
      .fp3d-find-list b {
        display: block;
        font-weight: 600;
      }
      .fp3d-find-list small,
      .fp3d-find-list p {
        color: var(--fp3d-muted);
        font-size: 12px;
        margin: 0;
      }
      .fp3d-find-list p {
        padding: 8px 10px;
      }
      .fp3d-find-icon {
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 10px;
        background: rgba(127, 127, 127, 0.15);
        flex: none;
      }
      .fp3d-find-icon svg {
        width: 16px;
        height: 16px;
      }
      .fp3d-swipe {
        position: absolute;
        transform: translate(-50%, calc(-100% - 28px));
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        gap: 2px 12px;
        padding: 8px 12px;
        border-radius: 14px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        pointer-events: none;
        white-space: nowrap;
        z-index: 4;
      }
      /* time travel: the clock sits at the top centre, the warnings below it */
      .fp3d-replay .fp3d-alert-banner {
        top: 74px;
      }
      /* the time bar takes the bottom: the heat legend moves up under the energy values */
      .fp3d-replay .fp3d-legend,
      .fp3d-replay.fp3d-has-alerts .fp3d-legend {
        bottom: auto;
        top: 62px;
      }
      .fp3d-replay .fp3d-energy {
        max-width: calc(50% - 96px);
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: none;
        pointer-events: auto;
      }
      .fp3d-replay .fp3d-energy > * {
        flex: none;
      }
      /* the warnings sit below the clock, so the energy values stay at the top */
      .fp3d-replay.fp3d-has-alerts .fp3d-energy {
        top: 10px;
      }
      @container fp3d (max-width: 700px) {
        .fp3d-replay .fp3d-energy,
        .fp3d-replay.fp3d-has-alerts .fp3d-energy {
          top: 68px;
          max-width: calc(100% - 24px);
        }
        .fp3d-replay .fp3d-alert-banner,
        .fp3d-replay .fp3d-legend {
          top: 116px;
        }
        .fp3d-replay.fp3d-has-alerts .fp3d-legend {
          top: 164px;
        }
      }
      .fp3d-info {
        grid-template-columns: auto;
        z-index: 5;
      }
      .fp3d-swipe.fp3d-info b {
        font-size: 15px;
      }
      .fp3d-swipe span {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-swipe b {
        grid-row: 2;
        font: 700 22px var(--fp3d-title-font);
      }
      .fp3d-swipe i {
        grid-row: 1 / 3;
        grid-column: 2;
        position: relative;
        width: 10px;
        height: 44px;
        border-radius: 5px;
        background: rgba(127, 127, 127, 0.25);
        overflow: hidden;
      }
      .fp3d-swipe em {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--fp3d-warm);
      }
      .fp3d-menu-backdrop {
        position: absolute;
        inset: 0;
        z-index: 5;
      }
      .fp3d-central-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-central-top > b {
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-central-gear {
        padding: 4px 10px;
        font-size: 12px;
      }
      /* a module's sheet and the ⚙ settings: a glass box in the middle, over a dim backdrop */
      .fp3d-sheet-backdrop {
        position: absolute;
        inset: 0;
        z-index: 7;
        background: rgba(4, 8, 16, 0.35);
      }
      .fp3d-pop {
        width: min(560px, calc(100% - 24px));
      }
      .fp3d-pop.fp3d-pop-wide {
        width: min(960px, calc(100% - 24px));
      }
      .fp3d-pop-big {
        display: block;
        width: 100%;
        max-height: calc(100vh - 160px);
        object-fit: contain;
        border-radius: 12px;
        background: #000;
      }
      .fp3d-pop-groups {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .fp3d-pop-groups h4 {
        margin: 0 0 6px;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-strong h4 {
        color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-pop-row {
        display: grid;
        grid-template-columns: 96px 1fr;
        gap: 10px;
        align-items: baseline;
        padding: 6px 0 6px 12px;
        border-left: 3px solid var(--cal, #37e0ff);
        margin-bottom: 4px;
      }
      .fp3d-pop-lead {
        font-variant-numeric: tabular-nums;
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 13px;
      }
      .fp3d-pop-sum {
        font-size: 15px;
      }
      .fp3d-pop-sum small {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-media,
      .fp3d-pop-person {
        display: flex;
        gap: 16px;
        align-items: center;
      }
      .fp3d-pop-cover {
        width: 160px;
        height: 160px;
        object-fit: cover;
        border-radius: 12px;
        background: #000;
        flex: none;
      }
      .fp3d-pop-sym {
        font-size: 72px;
        line-height: 1;
        flex: none;
      }
      .fp3d-pop-mediatext {
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
      }
      .fp3d-pop-mediatext b {
        font-size: 18px;
      }
      .fp3d-pop-mediatext span {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-ctl {
        display: flex;
        gap: 8px;
        margin-top: 6px;
      }
      .fp3d-pop-rowlive .fp3d-pop-lead {
        color: var(--fp3d-accent, #37e0ff);
        font-weight: 700;
      }
      .fp3d-pop-groups h4 {
        cursor: pointer;
      }
      .fp3d-pop-sum em {
        display: block;
        font-style: normal;
        font-size: 13px;
        color: var(--fp3d-muted, #8fa0c0);
        margin-top: 2px;
      }
      .fp3d-pop-form {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pop-in {
        flex: 1 1 140px;
        min-width: 0;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.06);
        color: inherit;
        font: inherit;
      }
      .fp3d-pop-addbtn {
        align-self: flex-start;
        margin-top: 4px;
      }
      .fp3d-pop-todo {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .fp3d-pop-todoitem {
        display: flex;
        gap: 12px;
        align-items: center;
        padding: 8px 6px;
        border-radius: 10px;
        font-size: 16px;
        cursor: pointer;
      }
      .fp3d-pop-todoitem:hover {
        background: rgba(255, 255, 255, 0.05);
      }
      .fp3d-pop-todoitem input {
        width: 22px;
        height: 22px;
        accent-color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-pop-done span {
        text-decoration: line-through;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-people {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .fp3d-pop-personrow {
        display: flex;
        gap: 12px;
        align-items: center;
        opacity: 0.6;
      }
      .fp3d-pop-personrow.fp3d-pop-bright {
        opacity: 1;
      }
      .fp3d-pop-personrow img,
      .fp3d-pop-initial {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        object-fit: cover;
        background: rgba(255, 255, 255, 0.1);
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        flex: none;
      }
      .fp3d-pop-personrow div {
        display: flex;
        flex-direction: column;
      }
      .fp3d-pop-personrow span {
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 13px;
      }
      .fp3d-pop-h {
        margin: 10px 0 4px;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-line {
        display: flex;
        flex-wrap: wrap;
        gap: 6px 12px;
        align-items: baseline;
        font-size: 18px;
      }
      .fp3d-pop-line span + span {
        color: var(--fp3d-muted, #8fa0c0);
        font-size: 14px;
      }
      .fp3d-pop-line em,
      .fp3d-pop-mediatext em {
        font-style: normal;
        color: var(--fp3d-accent, #37e0ff);
        font-size: 14px;
      }
      .fp3d-pop-waste {
        margin: 0;
      }
      .fp3d-pop-tiles {
        display: flex;
        gap: 10px;
        margin-top: 12px;
      }
      .fp3d-pop-tiles div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        padding: 8px 4px;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.05);
      }
      .fp3d-pop-tiles span {
        font-size: 26px;
      }
      .fp3d-pop-tiles small {
        color: var(--fp3d-muted, #8fa0c0);
      }
      .fp3d-pop-live {
        aspect-ratio: 16 / 9;
        overflow: hidden;
      }
      .fp3d-sheet {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: min(440px, calc(100% - 24px));
        max-height: calc(100% - 40px);
        overflow-y: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 14px 16px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 18px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(12px);
        z-index: 8;
      }
      .fp3d-sheet header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        font-size: 16px;
      }
      .fp3d-sheet-x {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        cursor: pointer;
      }
      .fp3d-sheet-choice,
      .fp3d-sheet-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-sheet-chip {
        min-height: 40px;
        padding: 0 14px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line);
        background: color-mix(in srgb, var(--fp3d-accent, #37e0ff) 10%, transparent);
        color: inherit;
        font: inherit;
        font-size: 14px;
        cursor: pointer;
      }
      .fp3d-sheet-chip:hover {
        border-color: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-sheet-row {
        display: flex;
        gap: 6px;
      }
      .fp3d-sheet-input {
        flex: 1;
        min-width: 0;
        min-height: 38px;
        padding: 0 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(0, 0, 0, 0.18);
        color: inherit;
        font: inherit;
      }
      .fp3d-sheet-lines p,
      .fp3d-set-note {
        margin: 0;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-settings h4 {
        margin: 6px 0 0;
        font-size: 12px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-set-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
      }
      .fp3d-set-field {
        display: grid;
        gap: 4px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-set-field select,
      .fp3d-set-field textarea {
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(0, 0, 0, 0.18);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 6px 8px;
      }
      .fp3d-sheet-gear {
        align-self: flex-start;
        border: 0;
        background: none;
        color: var(--fp3d-muted);
        font: inherit;
        font-size: 13px;
        padding: 4px 0;
        cursor: pointer;
      }
      .fp3d-sheet-gear:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-set-module {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-note {
        position: absolute;
        left: 50%;
        bottom: calc(80px + var(--fp3d-bottom-inset, 0px));
        transform: translateX(-50%);
        max-width: calc(100% - 32px);
        padding: 8px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        border: 1px solid var(--fp3d-line);
        color: var(--fp3d-text);
        font-size: 13px;
        box-shadow: var(--fp3d-shadow);
        z-index: 9;
        pointer-events: none;
      }
      /* a camera's new detection as a small picture (#442) */
      .fp3d-campop {
        position: absolute;
        right: 12px;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 64px);
        z-index: 5;
        width: min(360px, 70vw);
        border-radius: 14px;
        overflow: hidden;
        background: rgba(8, 16, 34, 0.9);
        border: 1px solid rgba(255, 120, 120, 0.6);
        box-shadow: 0 0 26px rgba(255, 80, 80, 0.35);
      }
      .fp3d-campop-img {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        padding: 0;
        border: 0;
        background: #000;
        cursor: pointer;
      }
      .fp3d-campop-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fp3d-campop-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        padding: 6px 10px;
        font-size: 13px;
        color: #ffd6d6;
      }
      .fp3d-through {
        position: absolute;
        inset: 0;
        z-index: 4;
        pointer-events: none;
      }
      /* the camera wall: a glass sheet over the scene with every camera's picture */
      .fp3d-wall {
        position: absolute;
        inset: 56px 12px calc(var(--fp3d-bottom-inset, 0px) + 12px);
        z-index: 5;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 16px;
        background: rgba(8, 16, 34, 0.86);
        border: 1px solid rgba(160, 240, 255, 0.4);
        box-shadow: 0 0 28px rgba(55, 224, 255, 0.25);
        overflow: auto;
      }
      .fp3d-wall-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        color: #e6fbff;
      }
      .fp3d-wall-pro {
        margin: 0;
        color: #ffd75a;
      }
      .fp3d-wall-head .fp3d-wall-title {
        flex: 1;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 8px;
      }
      .fp3d-wall-title b {
        color: #ff6b6b;
        font-weight: 600;
      }
      .fp3d-wall-tools {
        display: flex;
        gap: 6px;
      }
      .fp3d-wall-big {
        flex: 1;
        min-height: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
      }
      .fp3d-wall-big img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      /* the stream player: a bare card, as wide as the sheet allows for a 16:9 picture */
      .fp3d-wall-big > hui-picture-entity-card,
      .fp3d-wall-big > hui-error-card {
        width: min(100%, calc((100vh - 200px) * 16 / 9));
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-wall-grid {
        flex: 1;
        display: grid;
        align-content: safe center;
        justify-content: center;
        gap: 12px;
        min-height: 0;
        overflow-y: auto;
      }
      .fp3d-wall-cam {
        position: relative;
        padding: 0;
        border: 1px solid rgba(160, 240, 255, 0.3);
        border-radius: 12px;
        overflow: hidden;
        background: #0a1426;
        cursor: pointer;
        width: 100%;
        height: 100%;
      }
      .fp3d-wall-cam img,
      .fp3d-wall-none {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #8aa;
      }
      .fp3d-wall-seen {
        border-color: rgba(255, 80, 90, 0.9);
        box-shadow: 0 0 14px rgba(255, 60, 70, 0.5);
      }
      .fp3d-wall-name {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px 8px;
        font-size: 12px;
        text-align: left;
        color: #e6fbff;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
      }
      .fp3d-wall-name b {
        color: #ff6b6b;
        font-weight: 600;
      }
      /* the Proxmox panel: the node on top, a tile per VM and container below */
      .fp3d-pve-node,
      .fp3d-pve-tile {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 8px 10px;
        border-radius: 12px;
        border: 1px solid rgba(160, 240, 255, 0.3);
        background: rgba(10, 20, 38, 0.8);
        color: #e6fbff;
        font: inherit;
        font-size: 12px;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-pve-node {
        display: grid;
        grid-template-columns: minmax(140px, 1.2fr) repeat(3, minmax(110px, 1fr));
        align-items: center;
        gap: 6px 14px;
      }
      .fp3d-pve-node .fp3d-pve-facts {
        grid-column: 1 / -1;
      }
      .fp3d-pve-grid {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
        align-content: start;
        gap: 10px;
        min-height: 0;
        overflow-y: auto;
      }
      .fp3d-pve-name {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .fp3d-pve-sub,
      .fp3d-pve-facts {
        color: #9fb6c8;
        font-size: 11px;
      }
      .fp3d-pve-facts {
        display: flex;
        flex-wrap: wrap;
        gap: 4px 14px;
      }
      .fp3d-pve-warn {
        color: #ffb547;
      }
      .fp3d-pve-dot {
        flex: none;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #4a5a70;
      }
      .fp3d-pve-dot-on {
        background: #3ddc84;
        box-shadow: 0 0 6px rgba(61, 220, 132, 0.8);
      }
      .fp3d-pve-dot-bad {
        background: #ff5f6d;
        box-shadow: 0 0 6px rgba(255, 95, 109, 0.8);
      }
      .fp3d-pve-off {
        opacity: 0.55;
      }
      .fp3d-pve-down {
        border-color: rgba(255, 95, 109, 0.8);
      }
      .fp3d-pve-bar {
        display: grid;
        grid-template-columns: 34px 1fr 44px;
        align-items: center;
        gap: 6px;
        font-size: 11px;
        color: #9fb6c8;
      }
      .fp3d-pve-bar-track {
        height: 5px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.12);
        overflow: hidden;
      }
      .fp3d-pve-bar-fill {
        display: block;
        height: 100%;
        border-radius: 3px;
        background: var(--fp3d-accent, #37e0ff);
      }
      .fp3d-pve-bar-fill.fp3d-pve-hot {
        background: #ffb547;
      }
      .fp3d-pve-bar-value {
        text-align: right;
        color: #e6fbff;
      }
      .fp3d-pro {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 6;
        display: flex;
        flex-direction: column;
        gap: 8px;
        /* left: 50% leaves only half the width to shrink into: a width of its own keeps the buttons inside */
        width: min(320px, calc(100% - 60px));
        padding: 16px 18px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-accent);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
      }
      .fp3d-pro div {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
      }
      .fp3d-pro a {
        text-decoration: none;
      }
      .fp3d-flash::after {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 3;
        background: rgba(225, 238, 255, 0.4);
        pointer-events: none;
      }
      .fp3d-through-img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: var(--fp3d-blend);
      }
      .fp3d-through-live {
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
      .fp3d-through-live > * {
        width: 100%;
        --ha-card-background: transparent;
        --ha-card-border-width: 0;
        --ha-card-box-shadow: none;
      }
      .fp3d-through-img:fullscreen {
        opacity: 1;
        object-fit: contain;
        background: #000;
      }
      .fp3d-through-bar {
        position: absolute;
        left: 50%;
        bottom: calc(var(--fp3d-bottom-inset, 0px) + 14px);
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 12px;
        max-width: calc(100% - 32px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        backdrop-filter: blur(12px);
        border: 1px solid var(--fp3d-line);
        pointer-events: auto;
      }
      .fp3d-through-name {
        font-weight: 600;
        white-space: nowrap;
      }
      /* a small note that the picture is a still, so nobody wonders why it does not move */
      .fp3d-still {
        font-size: 11px;
        font-weight: 400;
        opacity: 0.65;
        white-space: nowrap;
        margin-left: 6px;
      }
      .fp3d-through-bar input[type="range"] {
        width: 140px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-through-on :is(.fp3d-pin, .fp3d-dev, .fp3d-energy, .fp3d-legend, .fp3d-thumbs, .fp3d-scenes, .fp3d-find-btn, .fp3d-stats) {
        display: none;
      }
      fp3d-quick-menu {
        position: absolute;
        z-index: 6;
      }
      .fp3d-dev-found {
        animation: fp3d-found 0.6s ease-in-out 4;
      }
      @keyframes fp3d-found {
        50% {
          scale: 1.35;
          filter: drop-shadow(0 0 12px var(--fp3d-accent));
        }
      }
      .fp3d-legend {
        position: absolute;
        left: 12px;
        /* above the star button */
        bottom: calc(104px + var(--fp3d-bottom-inset, 0px));
        display: grid;
        gap: 4px;
        min-width: 180px;
        padding: 8px 11px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 12px;
        pointer-events: none;
      }
      .fp3d-legend-bar {
        height: 8px;
        border-radius: 4px;
      }
      .fp3d-legend-range {
        display: flex;
        justify-content: space-between;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-legend-none {
        color: var(--fp3d-warm);
      }
      /* Energie Pro: the glass hologram beside the house */
      .fp3d-holo {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 4;
        width: 236px;
        padding: 12px 14px 11px;
        border-radius: 16px;
        overflow: hidden;
        cursor: pointer;
        background: linear-gradient(140deg, rgba(150, 235, 255, 0.2) 0%, rgba(70, 140, 230, 0.08) 45%, rgba(20, 60, 140, 0.05) 100%);
        backdrop-filter: blur(7px) saturate(150%);
        -webkit-backdrop-filter: blur(7px) saturate(150%);
        border: 1px solid rgba(160, 240, 255, 0.55);
        box-shadow:
          0 0 28px rgba(55, 224, 255, 0.35),
          0 0 2px rgba(200, 250, 255, 0.9),
          inset 0 1px 0 rgba(255, 255, 255, 0.45),
          inset 0 0 36px rgba(55, 224, 255, 0.14);
        color: #e6fbff;
        font-size: 12px;
        line-height: 1.35;
        text-shadow: 0 0 6px rgba(80, 220, 255, 0.55);
        will-change: transform;
        transform-origin: 0 0;
      }
      .fp3d-holo[hidden],
      .fp3d-holo-link[hidden] {
        display: none;
      }
      /* a device's card: smaller than the plant's */
      /* the now-playing card: cover, titles, transport and volume */
      .fp3d-holo-media .fp3d-holo-head {
        cursor: pointer;
      }
      .fp3d-holo-track {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 6px;
      }
      .fp3d-holo-cover {
        width: 46px;
        height: 46px;
        border-radius: 8px;
        object-fit: cover;
        flex: none;
        box-shadow: 0 0 12px rgba(55, 224, 255, 0.35);
      }
      .fp3d-holo-cover-none {
        display: grid;
        place-items: center;
        font-size: 22px;
        background: rgba(55, 224, 255, 0.15);
        color: #a8f0ff;
      }
      .fp3d-holo-titles {
        display: grid;
        gap: 2px;
        min-width: 0;
      }
      .fp3d-holo-titles b {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-titles span {
        font-size: 12px;
        opacity: 0.8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 170px;
      }
      .fp3d-holo-media-controls {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-holo-media-controls button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        border: 1px solid rgba(160, 240, 255, 0.4);
        background: rgba(8, 16, 34, 0.6);
        color: var(--fp3d-text);
        cursor: pointer;
        font-size: 12px;
      }
      .fp3d-holo-media-controls button:disabled {
        opacity: 0.3;
        cursor: default;
      }
      .fp3d-holo-media-controls input[type="range"] {
        width: 70px;
        accent-color: var(--fp3d-accent);
      }
      .fp3d-holo-car-main {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-top: 4px;
      }
      .fp3d-holo-car-main b {
        font-size: 22px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-car-main span {
        font-size: 12px;
        opacity: 0.85;
      }
      .fp3d-holo-car-bar {
        height: 5px;
        margin-top: 6px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.15);
        overflow: hidden;
      }
      .fp3d-holo-car-bar i {
        display: block;
        height: 100%;
        border-radius: 3px;
        box-shadow: 0 0 8px currentColor;
      }
      .fp3d-holo-meters {
        display: flex;
        flex-wrap: wrap;
        gap: 2px 10px;
      }
      .fp3d-holo-mrow {
        display: grid;
        grid-template-columns: 50px 64px 1fr;
        align-items: center;
        gap: 6px;
        margin-top: 5px;
        font-size: 12px;
      }
      .fp3d-holo-mrow span {
        opacity: 0.8;
      }
      .fp3d-holo-mrow b {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-mrow i {
        position: relative;
        height: 4px;
        border-radius: 2px;
        /* red – yellow – green (the ideal range in the middle) – yellow – red */
        background: linear-gradient(90deg, rgba(255, 77, 64, 0.35), rgba(255, 204, 64, 0.35) 25%, rgba(77, 255, 128, 0.45) 40%, rgba(77, 255, 128, 0.45) 60%, rgba(255, 204, 64, 0.35) 75%, rgba(255, 77, 64, 0.35));
      }
      .fp3d-holo-mrow-none {
        visibility: hidden;
      }
      .fp3d-holo-mrow em {
        position: absolute;
        top: -2px;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        border-radius: 50%;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-more {
        display: block;
        margin: 6px 0 0 auto;
        padding: 2px 9px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent, #37e0ff) 45%, transparent);
        border-radius: 9px;
        background: transparent;
        color: var(--fp3d-accent, #37e0ff);
        font: 600 11px var(--fp3d-font);
        cursor: pointer;
        pointer-events: auto;
      }
      .fp3d-holo-mline {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.85;
      }
      /* a bright style (Day, Homely, Architect's model, Pastel, Wood & paper): the darker glass of the module cards,
         so the light text stays readable over a light house and sky (#1126) */
      .fp3d-bright .fp3d-holo:not(.fp3d-holo-plain) {
        background: linear-gradient(140deg, rgba(40, 80, 130, 0.62) 0%, rgba(12, 28, 58, 0.78) 55%, rgba(8, 18, 40, 0.82) 100%);
      }
      /* a module's richer card: a state line, a second big value, a chain, cells, a hint */
      .fp3d-holo.fp3d-holo-mod-wide {
        width: 236px;
        /* a denser card: darker glass, so its many small values stay readable over a bright room */
        background: linear-gradient(140deg, rgba(40, 80, 130, 0.62) 0%, rgba(12, 28, 58, 0.78) 55%, rgba(8, 18, 40, 0.82) 100%);
      }
      .fp3d-holo-mod-wide .fp3d-holo-mrow {
        grid-template-columns: 74px 78px 1fr;
      }
      .fp3d-holo-ping {
        box-shadow:
          0 0 0 2px var(--fp3d-accent, #37e0ff),
          0 0 26px rgba(55, 224, 255, 0.55);
      }
      .fp3d-holo-status {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-top: 6px;
        padding: 4px 8px;
        border-radius: 9px;
        font-size: 13.5px;
        color: var(--st, #37e0ff);
        background: color-mix(in srgb, var(--st, #37e0ff) 14%, transparent);
        border: 1px solid color-mix(in srgb, var(--st, #37e0ff) 45%, transparent);
      }
      .fp3d-holo-status i {
        font-style: normal;
      }
      .fp3d-holo-status span {
        margin-left: auto;
        font-size: 11px;
        color: inherit;
        opacity: 0.8;
        white-space: nowrap;
      }
      .fp3d-holo-mod-main em {
        margin-left: auto;
        display: grid;
        justify-items: end;
        font-style: normal;
        line-height: 1.1;
      }
      .fp3d-holo-mod-main em b {
        font-size: 18px;
      }
      .fp3d-holo-mod-main em small {
        font-size: 10.5px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .fp3d-holo-chain {
        display: flex;
        align-items: stretch;
        gap: 3px;
        margin-top: 7px;
      }
      .fp3d-holo-chain > div,
      .fp3d-holo-cells > div {
        flex: 1;
        min-width: 0;
        display: grid;
        padding: 3px 5px;
        border-radius: 7px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(160, 240, 255, 0.16);
      }
      .fp3d-holo-chain small,
      .fp3d-holo-cells small {
        font-size: 10px;
        opacity: 0.75;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-holo-chain b,
      .fp3d-holo-cells b {
        font-size: 12.5px;
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-chain s {
        align-self: center;
        text-decoration: none;
        opacity: 0.6;
        font-size: 11px;
      }
      .fp3d-holo-chain-note {
        margin-top: 3px;
        font-size: 11px;
        text-align: right;
        opacity: 0.9;
      }
      .fp3d-holo-cells {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
        margin-top: 7px;
      }
      .fp3d-holo-hint {
        margin-top: 6px;
        padding: 4px 7px;
        border-radius: 7px;
        font-size: 11.5px;
        color: var(--hint, #ffc04d);
        background: color-mix(in srgb, var(--hint, #ffc04d) 13%, transparent);
        border-left: 3px solid var(--hint, #ffc04d);
      }
      .fp3d-holo-mrow-fill {
        background: rgba(160, 240, 255, 0.14) !important;
        overflow: hidden;
      }
      .fp3d-holo-mrow-fill s {
        display: block;
        height: 100%;
        border-radius: 2px;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-spark-label {
        margin-top: 6px;
        font-size: 10.5px;
        opacity: 0.7;
      }
      .fp3d-holo-spark-label + .fp3d-holo-spark {
        margin-top: 1px;
      }
      .fp3d-holo-spark {
        display: block;
        width: 100%;
        height: 22px;
        margin-top: 6px;
      }
      .fp3d-holo-spark polyline {
        fill: none;
        stroke-width: 1.6;
        vector-effect: non-scaling-stroke;
        stroke-linejoin: round;
      }
      /* a module's chips (Pool Pro: ball valves and the six-way valve, set by hand) */
      .fp3d-holo-chips {
        display: grid;
        gap: 4px;
        margin-top: 4px;
        max-height: 220px;
        overflow-y: auto;
        pointer-events: auto;
      }
      .fp3d-holo-chip,
      .fp3d-holo-chip-row button {
        font: inherit;
        font-size: 11.5px;
        color: inherit;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(91, 124, 255, 0.35);
        border-radius: 8px;
        padding: 4px 8px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-holo-chip {
        display: grid;
        grid-template-columns: 14px 1fr auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-holo-chip i {
        font-style: normal;
        color: #ff6b5a;
      }
      .fp3d-holo-chip.fp3d-holo-on i {
        color: #4dff9a;
      }
      .fp3d-holo-chip small {
        opacity: 0.75;
      }
      .fp3d-holo-valve-pos {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-holo-on {
        border-color: var(--fp3d-accent) !important;
        color: var(--fp3d-accent) !important;
      }
      .fp3d-holo-vol {
        font-size: 11px;
        opacity: 0.8;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-dev {
        width: 184px;
        padding: 10px 12px 9px;
      }
      /* tablet level: no blur and no sheen, the glass is painted */
      .fp3d-holo-plain {
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        background: rgba(12, 26, 50, 0.9);
      }
      .fp3d-holo-plain .fp3d-holo-sheen,
      .fp3d-holo-plain .fp3d-holo-scan {
        display: none;
      }
      /* the thin line from the solar field up to the card, with a dot on the field */
      .fp3d-holo-link {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        pointer-events: none;
        overflow: visible;
      }
      .fp3d-holo-link line {
        stroke: rgba(160, 240, 255, 0.75);
        stroke-width: 1.2;
        filter: drop-shadow(0 0 3px rgba(55, 224, 255, 0.8));
      }
      .fp3d-holo-link circle {
        fill: #cffaff;
        stroke: rgba(55, 224, 255, 0.8);
        stroke-width: 2;
        filter: drop-shadow(0 0 4px rgba(55, 224, 255, 0.9));
      }
      .fp3d-holo-min {
        width: 150px;
      }
      .fp3d-holo-sheen {
        position: absolute;
        inset: 0;
        background: linear-gradient(115deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0) 32%, rgba(255, 255, 255, 0) 68%, rgba(255, 255, 255, 0.07) 100%);
        pointer-events: none;
      }
      .fp3d-holo-scan {
        position: absolute;
        inset: 0;
        background: repeating-linear-gradient(0deg, rgba(160, 240, 255, 0.06) 0 1px, transparent 1px 4px);
        pointer-events: none;
      }
      .fp3d-holo-body {
        position: relative;
      }
      .fp3d-holo-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 10px;
        letter-spacing: 0.14em;
        color: #8ff0ff;
        text-transform: uppercase;
      }
      .fp3d-holo-live {
        color: #5dffb0;
      }
      .fp3d-holo-big {
        display: flex;
        align-items: baseline;
        gap: 9px;
        margin: 6px 0 1px;
      }
      .fp3d-holo-big b {
        font-size: 26px;
        color: #ffe27a;
        text-shadow: 0 0 12px rgba(255, 210, 80, 0.85);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-big span,
      .fp3d-holo-sub {
        color: #aee9ff;
      }
      .fp3d-holo-sub {
        margin-bottom: 6px;
      }
      .fp3d-holo-plants {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        column-gap: 10px;
        margin: 0 0 5px;
        font-size: 11px;
        color: #aee9ff;
      }
      .fp3d-holo-plants b {
        color: #ffe27a;
        text-align: right;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-sub b,
      .fp3d-holo-cell b,
      .fp3d-holo-foot b {
        color: #fff;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-holo-curve {
        display: block;
        margin-bottom: 7px;
        filter: drop-shadow(0 0 4px rgba(255, 215, 90, 0.7));
      }
      .fp3d-holo-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-holo-cell {
        border-left: 2px solid #aee9ff;
        padding-left: 6px;
      }
      .fp3d-holo-cell span {
        font-size: 11px;
      }
      .fp3d-holo-bat {
        border-left-color: #5dffb0;
      }
      .fp3d-holo-bat span {
        color: #5dffb0;
      }
      .fp3d-holo-exp {
        border-left-color: #4ff6ff;
      }
      .fp3d-holo-exp span {
        color: #4ff6ff;
      }
      .fp3d-holo-imp {
        border-left-color: #ff6fb0;
      }
      .fp3d-holo-imp span {
        color: #ff8fc4;
      }
      .fp3d-holo-house {
        border-left-color: #a9c0ff;
      }
      .fp3d-holo-wb {
        border-left-color: #63c9ff;
      }
      .fp3d-holo-bar {
        margin-top: 8px;
        height: 5px;
        border-radius: 3px;
        background: rgba(160, 240, 255, 0.16);
        overflow: hidden;
      }
      .fp3d-holo-bar div {
        height: 100%;
        background: linear-gradient(90deg, #5dffb0, #4ff6ff);
        box-shadow: 0 0 8px rgba(80, 240, 255, 0.8);
      }
      .fp3d-holo-foot {
        display: flex;
        justify-content: space-between;
        margin-top: 3px;
        font-size: 10px;
        color: #aee9ff;
      }
      .fp3d-energy {
        position: absolute;
        left: 12px;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        max-width: calc(100% - 24px);
        pointer-events: none;
      }
      .fp3d-energy-item {
        display: grid;
        padding: 5px 11px 6px;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        border-left: 3px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        backdrop-filter: blur(6px);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-energy-item span {
        font-size: 11px;
        color: var(--fp3d-muted);
      }
      .fp3d-energy-item b {
        font: 700 15px var(--fp3d-title-font);
      }
      .fp3d-energy-total {
        border-left-color: #6fd8ff;
      }
      .fp3d-energy-grid {
        border-left-color: #37e0ff;
      }
      .fp3d-energy-export,
      .fp3d-energy-solar {
        border-left-color: #ffc633;
      }
      .fp3d-energy-battery {
        border-left-color: #59ff8c;
      }
      .fp3d-flow-toggle {
        pointer-events: auto;
        cursor: pointer;
        border: 0;
        border-left: 3px solid var(--fp3d-line);
        color: inherit;
        text-align: left;
        font: inherit;
      }
      .fp3d-flow-toggle[aria-pressed="true"] {
        border-left-color: var(--fp3d-accent);
      }
      .fp3d-flow-toggle span {
        display: none;
      }
      .fp3d-flow-toggle b {
        opacity: 0.4;
        filter: grayscale(1);
      }
      .fp3d-flow-toggle[aria-pressed="true"] b {
        opacity: 1;
        filter: none;
      }
      .fp3d-energy-tariff {
        border-left-color: #b98cff;
      }
      /* narrow stages (portrait tablets, phones): the energy values scroll in one row */
      @container fp3d (max-width: 900px) {
        .fp3d-energy {
          flex-wrap: nowrap;
          overflow-x: auto;
          scrollbar-width: none;
          pointer-events: auto;
        }
        .fp3d-legend {
          bottom: auto;
          top: 62px;
        }
        .fp3d-has-alerts .fp3d-legend {
          top: 110px;
        }
      }
      /* the view's own controls on the right (#285); the room panel opens there, so they make way for it */
      .fp3d-side-right :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        left: auto;
        right: 12px;
      }
      .fp3d-side-right .fp3d-eye {
        left: auto;
        right: 56px;
      }
      .fp3d-side-right.fp3d-panel-open :is(.fp3d-thumbs, .fp3d-find-btn, .fp3d-central-btn, .fp3d-central, .fp3d-eye-clean, .fp3d-find, .fp3d-legend) {
        display: none;
      }
      /* a room sheet covers the lower half: the view's own controls step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-panel-open :is(.fp3d-find-btn, .fp3d-find, .fp3d-thumbs, .fp3d-legend, .fp3d-stats, .fp3d-scenes) {
          display: none;
        }
      }
      @media (pointer: coarse) {
        .fp3d-find-close {
          width: 40px;
          height: 40px;
          right: 1px;
          bottom: 1px;
        }
        .fp3d-dev {
          padding: 6px;
        }
        .fp3d-pin {
          padding: 8px 12px;
        }
      }
      .fp3d-dev-full .fp3d-dev-text {
        display: inline;
      }
      .fp3d-dev-name:empty {
        display: none;
      }
      .fp3d-dev-name {
        position: absolute;
        top: calc(100% + 3px);
        left: 50%;
        transform: translateX(-50%);
        max-width: 140px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 1px 6px;
        border-radius: 6px;
        font-size: 10.5px;
        font-weight: 600;
        line-height: 1.35;
        color: var(--fp3d-text);
        background: rgba(10, 16, 32, 0.72);
        pointer-events: none;
      }
      .fp3d-dev-sel {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: 2px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-glow, var(--fp3d-warm));
        box-shadow: 0 0 16px var(--fp3d-glow, var(--fp3d-warm));
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-on .fp3d-dev-text {
        color: #2a1a00;
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
      .fp3d-dev-dim {
        opacity: 0.35;
      }
      .fp3d-dev[hidden],
      .fp3d-pin[hidden] {
        display: none;
      }
      .fp3d-pin-active {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        border-color: transparent;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.45);
      }
      .fp3d-stats b {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-stats {
        padding: 4px 9px;
        border-radius: 8px;
        background: var(--fp3d-chrome);
        position: absolute;
        right: 10px;
        bottom: calc(8px + var(--fp3d-bottom-inset, 0px));
        font-size: 11.5px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
        pointer-events: none;
      }
      .fp3d-error {
        position: absolute;
        inset: auto 16px 16px;
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",ya);function Sb(o,e){let t=e.attributes.current_temperature,n=typeof t=="number"&&Number.isFinite(t)?`${ie(o,Math.round(t))} \xB0C`:"",i=!["off","unavailable","unknown"].includes(e.state);return{text:[Ae(o,e),n].filter(Boolean).join(" \xB7 "),on:i}}function he(o,e){return Math.abs(e)>=1e3?`${ie(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function mh(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var Mb=new Set(["rug","stairwell","grid_point","worktop"]);function gh(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var va="neonplan3d.style_override",bh="neonplan3d.module_full";function Ib(){try{let o=JSON.parse(localStorage.getItem(bh)??"[]");return Array.isArray(o)?o.filter(e=>typeof e=="string"):[]}catch{return[]}}function wa(o,e,t={}){let n=["neon","homely","designed","custom"],i=sn();return g`${t.none?g`<option value="" ?selected=${!e}>${o("style_none")}</option>`:x}
    ${t.auto||t.house?g`<optgroup label=${o("style_group_auto")}>
          ${t.house?g`<option value="house" ?selected=${e==="house"}>${o("style_house")}</option>`:x}
          ${t.auto?g`<option value="auto" ?selected=${e==="auto"}>${o("theme_auto")}</option>`:x}
        </optgroup>`:x}
    ${n.filter(r=>i.some(s=>s.group===r)).map(r=>g`<optgroup label=${o(`style_group_${r}`)}>
            ${i.filter(s=>s.group===r).map(s=>g`<option value=${s.id} ?selected=${e===s.id}>${s.name??o(`style_${s.id}`)}</option>`)}
          </optgroup>`)}`}function _h(o){return typeof o=="string"&&(o==="auto"||o==="house"||o.startsWith("my_")||sn().some(e=>e.id===o))}var xa;function vh(){let o=new URL("./neonplan3d-locate.js?v=ff94b6d7bd13",new URL(import.meta.url)).href;return xa??=import(o).catch(e=>{throw xa=void 0,e}),xa}var Pb=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function yh(o){let e=document.createElement("style");e.textContent=Pb;let t=document.createElement("div");t.className="fp3d-loclab",document.body.append(e,t);let n=null,i="",r=!0,s=async(u,d={})=>{let c=o().hass;if(c){try{n=await c.callWS({type:"neonplan3d/locate/rec",action:u,...d}),i=""}catch(p){i=p.message??String(p)}a()}},a=()=>{var m;let u=o().building,d=n,c=((m=d==null?void 0:d.mark)==null?void 0:m.room)??null,p=`<h4 data-a="toggle"><span>\u{1F4E1} Localizaci\xF3n \xB7 Grabaci\xF3n (laboratorio)</span><span>${r?"\u25BE":"\u25B8"}</span></h4>`;if(!r){t.innerHTML=p;return}let h=((d==null?void 0:d.devices)??[]).map(b=>{let v=b.t?Math.round(Date.now()/1e3-b.t):null;return`<div>\u231A ${Dt(b.title)}: ${v===null?"<small>a\xFAn sin se\xF1al</small>":`${b.rssi} dBm \xB7 ${Dt(b.scanner??"")} <small>hace ${v} s</small>`}</div>`}).join(""),f=((u==null?void 0:u.floors)??[]).map(b=>`<div class="fl">${Dt(b.name)}</div>`+b.rooms.map(v=>`<button data-room="${Dt(v.id)}" data-name="${Dt(v.name)}" class="${c===v.id?"on":""}">${Dt(v.name)}</button>`).join("")).join("");t.innerHTML=`${p}
      <div><button data-a="setup">\u2699 Configurar localizaci\xF3n</button></div>
      <div>${d!=null&&d.running?`<button class="rec" data-a="stop">\u25A0 Parar</button> <small>${Math.floor(d.seconds/60)}:${String(d.seconds%60).padStart(2,"0")} \xB7 ${d.lines} l\xEDneas</small>`:'<button data-a="start">\u25CF Empezar grabaci\xF3n</button>'}</div>
      ${i?`<div style="color:#ff8fa3">${Dt(i)}</div>`:""}
      ${h||(d?"<div><small>No hay claves de iPhone/Watch (Private BLE Device) en HA; se graba todo igualmente.</small></div>":"")}
      ${d!=null&&d.mark?`<div style="margin-top:6px">\u23F1 desde hace <b>${Eb(Date.now()/1e3-d.mark.t)}</b> en <b>${Dt(d.mark.name)}</b> ${Date.now()/1e3-d.mark.t>=120?"\u2713 2 min conseguidos":""}</div>`:""}
      <div class="fl">Ahora estoy en \u2026</div>
      <button data-room="" class="${c?"":"on"}">\u{1F6B6} de camino / en ninguna parte</button>
      ${f}`};t.addEventListener("click",u=>{let d=u.target.closest("button,h4");if(!d)return;let c=d.dataset.a;if(c==="toggle")r=!r,a();else if(c==="start")s("start",{note:"lab walk"});else if(c==="stop")s("stop");else if(c==="setup"){let{hass:p,building:h}=o();p&&h&&vh().then(f=>f.openLocateSetup(p,h,()=>o().hass))}else d.dataset.room!==void 0&&s("mark",d.dataset.room?{room:d.dataset.room,name:d.dataset.name}:{room:null})}),s("status");let l=window.setInterval(()=>{s("status")},1e3);return()=>{window.clearInterval(l),t.remove(),e.remove()}}function Eb(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Dt(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var ka;function Tb(){let o=new URL("./neonplan3d-timetravel.js?v=ab903af023ed",new URL(import.meta.url)).href;return ka??=import(o).catch(e=>{throw ka=void 0,e}),ka}var qn=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),Tb().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("CasaNeon: time travel failed to load",t),this.host.requestUpdate()}))}stop(){var e;this.active&&(this.starting=!1,(e=this.session)==null||e.dispose(),this.session=null,this.host.requestUpdate())}hass(e){var t;return((t=this.session)==null?void 0:t.hass)??e}};function Ab(){try{return matchMedia("(hover: none) and (pointer: coarse)").matches&&!matchMedia("(any-pointer: fine)").matches}catch{return!1}}var zb={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"},Y={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},$a=class extends ue{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_walking:{state:!0},_overview:{state:!0},_site:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_plain:{state:!0},_roomBar:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_zoomStyle:{state:!0},_zoomLate:{state:!0},_zoomScope:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_proxmox:{state:!0},_clean:{state:!0},_phone:{state:!0},_phoneAsk:{state:!0},_nowMode:{state:!0},_solo:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0}};watch=new On(this);otherAlerts={at:0,list:[]};pendingRoom=null;nowLinked=!1;nowLinkOpen=!1;pendingLink=null;data=new vn(this);locateLab=null;tt=new qn(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._walking=!1,this._overview=!1,this._site=new URLSearchParams(location.search).get("plan")==="site",this.data.switchPlan(new URLSearchParams(location.search).get("plan")??Y.get("plan")),this._wallMode=Y.get("walls")==="cut"?"cut":"auto",this._explode=Y.get("explode")!=="0",this._keepRoof=Y.get("roof")==="1",this._plain=Y.get("plain")==="1";let e=Y.get("roombar");this._roomBar=e==="rooms"||e==="all"?e:"off";let t=Y.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=Y.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let n=Y.get("markers");this._markers=n==="none"||n==="all"||n==="room"?n:"important";let i=Y.get("pinSize");this._pinSize=i==="small"||i==="large"?i:"normal";let r=Y.get("heat");this._heat=r==="temperature"||r==="humidity"||r==="co2"||r==="values"?r:"none";let s=Y.get("theme");this._theme=_h(s)?s:"neon",this._zoomStyle=Y.get("zoom_style")??"";let a=Number(Y.get("zoom_late"));this._zoomLate=Number.isFinite(a)&&Y.get("zoom_late")!==null?Math.min(100,Math.max(0,a)):50,this._zoomScope=Y.get("zoom_scope")==="room"?"room":"all";let l=Y.get("clock");this._clock=l==="tl"||l==="tr"||l==="bl"||l==="br"?l:"off";let u=Y.get("accent");this._accent=u&&/^#[0-9a-f]{6}$/i.test(u)?u:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let d=Y.get("floor_stack");this._floorStack=d==="stacked"||d==="single"?d:"dim",this._roomNames=Y.get("room_names")!=="0",this._controlsRight=Y.get("controls")==="right",this._keepView=Y.get("keep_view")==="1",this._angleLock=Y.get("angle_lock")==="1",this._trail=Y.get("trail")==="1",this._cameraWall=!1,this._proxmox=!1,this._clean=Y.get("clean")==="1",this._phone=Y.get("phone")==="1",this._nowMode="bar",this._solo=Y.get("phone_solo")==="1";let c=new URLSearchParams(location.search);c.get("view")==="now"&&(this.nowLinked=!0,this.nowLinkOpen=!0),(c.get("room")||c.get("show"))&&(this.pendingLink={room:c.get("room"),show:c.get("show")}),this._phoneAsk=Y.get("phone")===null&&hc(navigator.userAgent,Math.min(screen.width,screen.height),navigator.maxTouchPoints)==="phone",this._navWrap=Y.get("nav_wrap")==="1",this._optsOpen=!1,this._pinHover=!1,this._weather=Y.get("weather")!=="0",this._director=ha(),this._micProbe=!1,this._voiceHere=aa(),this._screen=la()}t(e,t){return T(this.hass,e,t)}willUpdate(e){var n;e.has("hass")&&this.hass&&(this.data.setHass(this.hass),(n=this.tt.session)==null||n.setLive(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(i=>i.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){var e,t;return((t=(e=this.hass)==null?void 0:e.user)==null?void 0:t.is_admin)??!1}get canEdit(){return this.isAdmin&&!Ab()}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){var i;let{floorId:t,roomId:n}=e.detail;if(this._site){if(!n)return;let r=cu(n,ye);this.pendingRoom={plan:r.plan,floorId:null,roomId:r.id},this._site=!1,r.plan===this.data.planId?this.requestUpdate():this.pickPlan(r.plan);return}if((((i=this.data.building)==null?void 0:i.floors.length)??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,Y.set("walls",e)}setRoomBar(e){this._roomBar=e,Y.set("roombar",e)}setPlain(e){this._plain=e,Y.set("plain",e?"1":"0")}setKeepRoof(e){this._keepRoof=e,Y.set("roof",e?"1":"0")}setExplode(e){this._explode=e,Y.set("explode",e?"1":"0")}followLink(){let e=this.pendingLink,t=this.data.building;if(!(!e||!t||!this.view3d())){if(this.pendingLink=null,e.room){let n=e.room.trim().toLowerCase();for(let i of t.floors){let r=le(i).find(s=>s.id===e.room||s.name.trim().toLowerCase()===n);if(r){this._floorId=i.id,this._roomId=r.id;break}}}e.show&&setTimeout(()=>{var n;return(n=this.view3d())==null?void 0:n.showNow({entity:e.show})},1200)}}get phoneOn(){return this._phone||this.nowLinked}phoneShell(){return this.renderRoot.querySelector("fp3d-phone-shell")}phoneExtras(){return[{id:"show",icon:"\u{1F441}",label:this.t("show_menu")},{id:"tt",icon:"\u23EA",label:this.t("tt_chip")},{id:"menu",icon:"\u2630",label:"Home Assistant"},{id:"off",icon:"\u{1F4F1}",label:this.t("nav_off")}]}phoneMore(e){e==="show"?this._showOpen=!0:e==="tt"?this.toggleTimeTravel():e==="menu"?this.dispatchEvent(new CustomEvent("hass-toggle-menu",{bubbles:!0,composed:!0})):e==="off"&&this.setPhone(!1)}setPhone(e){this._phone=e,this._phoneAsk=!1,e||(this.nowLinked=!1),Y.set("phone",e?"1":"0")}setQuality(e){this._quality=e,Y.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.furniture.find(a=>a.id===e);s&&t(s,r)}this.data.edit(i)}editDevice(e,t){let n=this.data.building;if(!n)return;let i=structuredClone(n);for(let r of i.floors){let s=r.placements.find(a=>a.entity_id===e);s&&t(s,r)}this.data.edit(i)}moveDevice(e){let{id:t,x:n,z:i}=e.detail;this.editDevice(t,(r,s)=>{let[a,l]=da(s,r.x,r.z,n,i);Object.assign(r,{x:a,z:l})})}turnStep(){return V(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.placements=i.placements.filter(r=>r.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let t=this.data.building,n=t==null?void 0:t.floors.find(c=>c.placements.some(p=>p.entity_id===e)),i=n==null?void 0:n.placements.find(c=>c.entity_id===e);if(!n||!i)return x;let r=V(e),s=r==="light",a=r==="camera",l=i.mount==="ceiling",u=r?xn(r,n.height,s||a?i.mount??(a?"wall":"ceiling"):null):1,d=(c,p,h,f,m,b)=>g`<label class="fp3d-size" title=${c}
        >${c}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${f}
          max=${m}
          .value=${String(Math.round(p*100)/100)}
          @change=${v=>{let $=parseFloat(v.target.value.replace(",","."));Number.isFinite($)&&b(Math.min(m,Math.max(f,$)))}}
        />
      </label>`;return g`${s?g`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${c=>this.editDevice(e,p=>Object.assign(p,{mount:c.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(c=>g`<option value=${c} ?selected=${c===(i.mount??"ceiling")}>${this.t(`lamp_${c}`)}</option>`)}
          </select>`:x}
      ${a?g`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${c=>this.editDevice(e,p=>Object.assign(p,{mount:c.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${d(this.t("camera_fov_short"),i.fov??(l?360:90),5,10,360,c=>this.editDevice(e,p=>p.fov=c))}
            ${d(this.t("camera_reach_short"),i.reach??(l?3:4.5),.5,.5,50,c=>this.editDevice(e,p=>p.reach=c))}
            ${d(this.t("camera_tilt_short"),i.tilt??(l?65:20),5,0,90,c=>this.editDevice(e,p=>p.tilt=c))}`:x}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((i.y??u)*100)/100)}
          @change=${c=>{let p=parseFloat(c.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(e,h=>h.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${i.y!==null?g`<button class="fp3d-chip" @click=${()=>this.editDevice(e,c=>c.y=null)}>${this.t("height_auto")}</button>`:x}`}furnitureName(e){var n;let t=(n=this.data.building)==null?void 0:n.floors.flatMap(i=>i.furniture).find(i=>i.id===e);return t?ze(this.hass,t.type):""}moveFurniture(e){var s;let{id:t,x:n,z:i}=e.detail,r=((s=this.data.building)==null?void 0:s.settings.wall_interior)??.12;this.editFurniture(t,(a,l)=>{let[u,d]=da(l,a.x,a.z,n,i);Object.assign(a,{x:u,z:d});let c=Zp(l,a,r);c&&Object.assign(a,c)})}renderSizeFields(e){var l,u,d;let t=(l=this.data.building)==null?void 0:l.floors.flatMap(c=>c.furniture).find(c=>c.id===e);if(!t)return x;let n=Ya(this.hass,(u=this.data.building)==null?void 0:u.settings.units)==="imperial",i=c=>n?Qa(c):String(Math.round(c*100)/100),r=c=>n?Ja(c,"imperial"):parseFloat(c.replace(",",".")),s=(c,p)=>g`<label class="fp3d-size" title=${this.t(`size_${c}`)}
      >${p}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${i(t[c])}
        @change=${h=>{let f=r(h.target.value)??NaN;Number.isFinite(f)&&f>0&&this.editFurniture(e,m=>m[c]=Math.round(f*1e3)/1e3)}}
    /></label>`,a=(d=this.data.building)==null?void 0:d.floors.find(c=>c.furniture.some(p=>p.id===e));return g`${s("w",this.t("size_short_w"))}${s("d",this.t("size_short_d"))}${s("h",this.t("size_short_h"))}
    ${a&&tc(t)?g`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${i(t.mount_y??Se(a,t))}
              @change=${c=>{let p=r(c.target.value)??NaN;Number.isFinite(p)&&p>=0&&this.editFurniture(e,h=>h.mount_y=Math.round(p*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?g`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,c=>c.mount_y=null)}>${this.t("height_auto")}</button>`:x}`:x}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let i of n.floors)i.furniture=i.furniture.filter(r=>r.id!==e);this.data.edit(n),this._selFurniture=null}rememberStartView(e=!1){var i;let t=this.data.building;if(!t)return;let n=e?null:(i=this.view3d())==null?void 0:i.currentView();!e&&!n||this.data.edit({...t,settings:{...t.settings,start_view:n??null}})}openFunSettings(e="fun",t=null){this.setMode("editor");let n=0,i=()=>{let r=this.renderRoot.querySelector("fp3d-editor");r!=null&&r.openSettings?r.openSettings(e,t):n++<60&&setTimeout(i,100)};this.updateComplete.then(i)}siteBuilding(){return this.watch.site(this.data)}showSite(){this.tt.active&&this.tt.stop(),this._site=!0,this._floorId=null,this._roomId=null,this._mode="view"}planBuildings(){return this.watch.all(this.data)}alertsElsewhere(){if(!this.hass||this.data.plans.length<2)return[];let e=Date.now();if(e-this.otherAlerts.at<2e3)return this.otherAlerts.list;let t=[];for(let[n,i]of this.watch.others)if(n!==this.data.planId)for(let r of gi(this.hass,i).alerts)t.push({plan:n,alert:r});return this.otherAlerts={at:e,list:t},t}alertCounts(){let e=new Map;for(let{plan:t}of this.alertsElsewhere())e.set(t,(e.get(t)??0)+1);return e}pickPlan(e){this._site&&(this._site=!1,this._floorId=null,this._roomId=null),e!==this.data.planId&&(this.tt.active&&this.tt.stop(),Y.set("plan",e),this._floorId=null,this._roomId=null,this.data.switchPlan(e))}showElsewhere(e,t){this.pendingRoom={plan:e,floorId:t.floorId,roomId:t.roomId},this.pickPlan(e)}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!q("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this._proxmox=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(i,r)=>T(this.hass,i,r)})}}updated(){var n,i,r,s;this.data.plans.length>1&&this.watch.watch(this.hass,this.data),this.followLink(),this.nowLinkOpen&&this.phoneShell()&&(this.nowLinkOpen=!1,this.phoneShell().openList());let e=this.pendingRoom;if(e&&this.data.planId===e.plan&&this.data.building&&(this.pendingRoom=null,this._floorId=e.floorId??((n=this.data.building.floors.find(a=>le(a).some(l=>l.id===e.roomId)))==null?void 0:n.id)??null,this._roomId=e.roomId),!this.locateLab&&((r=(i=this.hass)==null?void 0:i.user)!=null&&r.is_admin)&&this.data.building&&ps()&&(this.locateLab=yh(()=>({hass:this.hass,building:this.data.building}))),this.pendingTemplate!==null&&((s=this.hass)!=null&&s.user)&&this.data.building){let a=this.pendingTemplate;this.pendingTemplate=null,this.hass.user.is_admin&&this.openFunSettings("cards",a||null)}if(this.ttLinked||!this.data.building||!bn()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let t=new URLSearchParams(location.search).get("tt");t!==null&&q("time_travel")&&this.toggleTimeTravel(t)}back(){var e,t;this._roomId?this._roomId=null:this._floorId&&(((e=this.data.building)==null?void 0:e.floors.length)??0)>1?this._floorId=null:(t=this.view3d())==null||t.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey);let e=new URLSearchParams(location.search);e.get("tab")==="extensions"&&(this._mode="extensions"),e.get("settings")==="cards"&&(this.pendingTemplate=e.get("template")??"")}pendingTemplate=null;disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop(),(e=this.locateLab)==null||e.call(this),this.locateLab=null}render(){var n;let e=this.data.building;Wn(e==null?void 0:e.settings.styles_custom);let t=this.data.saveState;return g`
      <div class="fp3d-app ${(this._clean||this.phoneOn)&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._micProbe&&this.hass?g`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,Ji())}></fp3d-mic-probe>`:x}
        ${(this._clean||this.phoneOn)&&this._mode==="view"?x:g`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>CasaNeon</h1>
          ${this.data.plans.length>1||this.isAdmin&&this.data.plans.length>0?g`<fp3d-plan-picker
                .hass=${this.hass}
                .plans=${this.data.plans}
                .current=${this.data.planId}
                ?admin=${this.isAdmin}
                @plan-pick=${i=>this.pickPlan(i.detail.plan)}
                .alerts=${this.alertCounts()}
                @plan-new=${()=>this.openFunSettings("plans")}
                @plan-manage=${()=>this.openFunSettings("plans")}
                @plan-overview=${()=>this._overview=!0}
                @plan-site=${()=>this.showSite()}
                .site=${this._site}
                .hasSite=${this.data.plans.some(i=>{var r;return(r=i.site)==null?void 0:r.on})}
              ></fp3d-plan-picker>`:x}
          ${this._overview?g`<fp3d-plan-overview
                .hass=${this.hass}
                .plans=${this.data.plans}
                .buildings=${this.planBuildings()}
                .current=${this.data.planId}
                @plan-pick=${i=>{this._overview=!1,this.pickPlan(i.detail.plan)}}
                @close=${()=>this._overview=!1}
              ></fp3d-plan-overview>`:x}
          ${this.isAdmin?g`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                ${this.canEdit?g`<button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>`:x}
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}
                </button>
              </div>`:x}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&(e!=null&&e.floors.some(i=>i.rooms.length))?g`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙
                </button>
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <button class="fp3d-chip" aria-pressed=${this._phone} title=${this.t("now_setting_hint")} @click=${()=>this.setPhone(!this._phone)}>📱 ${this.t("now_setting")}</button>
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(i=>g`<button aria-pressed=${this._quality===i} @click=${()=>this.setQuality(i)}>${this.t(`quality_${i}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("style")}>
                <label class="fp3d-style-pick" title=${this.t("style")}>
                  <span aria-hidden="true">🎨</span>
                  <select
                    aria-label=${this.t("style")}
                    @change=${i=>{this._theme=i.target.value,Y.set("theme",this._theme)}}
                  >
                    ${wa(i=>this.t(i),this._theme,{auto:!0,house:!0})}
                  </select>
                </label>
                <label class="fp3d-style-pick" title=${this.t("zoom_style_hint")}>
                  <span aria-hidden="true">🔍</span>
                  <select
                    aria-label=${this.t("zoom_style")}
                    @change=${i=>{this._zoomStyle=i.target.value,Y.set("zoom_style",this._zoomStyle)}}
                  >
                    <option value="" ?selected=${!this._zoomStyle}>${this.t("zoom_style_off")}</option>
                    ${wa(i=>this.t(i),this._zoomStyle,{})}
                  </select>
                </label>
                ${this._zoomStyle?g`<label class="fp3d-style-pick fp3d-zoom-late" title=${this.t("zoom_late_hint")}>
                      <span>${this.t("zoom_late_early")}</span>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        step="5"
                        aria-label=${this.t("zoom_late_hint")}
                        .value=${String(this._zoomLate)}
                        @input=${i=>{this._zoomLate=Number(i.target.value),Y.set("zoom_late",String(this._zoomLate))}}
                      />
                      <span>${this.t("zoom_late_late")}</span>
                    </label>
                    <label class="fp3d-style-pick" title=${this.t("zoom_scope_hint")}>
                      <select
                        aria-label=${this.t("zoom_scope_hint")}
                        @change=${i=>{this._zoomScope=i.target.value,Y.set("zoom_scope",this._zoomScope)}}
                      >
                        <option value="all" ?selected=${this._zoomScope!=="room"}>${this.t("zoom_scope_all")}</option>
                        <option value="room" ?selected=${this._zoomScope==="room"}>${this.t("zoom_scope_room")}</option>
                      </select>
                    </label>`:x}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${i=>{this._accent=i.target.value,Y.set("accent",this._accent)}}
                  />
                  ${this._accent?g`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,Y.set("accent","")}}
                      >
                        ↺
                      </button>`:x}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${["off","tl","tr","bl","br"].map(i=>g`<button aria-pressed=${this._clock===i} title=${this.t(`clock_${i}`)} aria-label=${this.t(`clock_${i}`)} @click=${()=>{this._clock=i,Y.set("clock",i)}}>
                      ${i==="off"?this.t("clock_off"):zb[i]}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(i=>g`<button
                      aria-pressed=${this._markers===i}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=i,Y.set("markers",i)}}
                    >
                      ${this.t(`markers_${i}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(i=>g`<button
                      aria-pressed=${this._pinSize===i}
                      @click=${()=>{this._pinSize=i,Y.set("pinSize",i)}}
                    >
                      ${this.t(`pin_size_${i}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(i=>g`<button
                      aria-pressed=${this._controlsRight===i}
                      title=${this.t(i?"controls_right":"controls_left")}
                      aria-label=${this.t(i?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=i,Y.set("controls",i?"right":"left")}}
                    >
                      ${i?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.isAdmin?g`<button
                        title=${`${this.t("start_view")}: ${this.t("start_view_set")}`}
                        aria-label=${this.t("start_view_set")}
                        @click=${()=>this.rememberStartView()}
                        @mouseenter=${()=>this._pinHover=!0}
                        @mouseleave=${()=>this._pinHover=!1}
                        @focus=${()=>this._pinHover=!0}
                        @blur=${()=>this._pinHover=!1}
                      >
                        📌
                      </button>
                      ${(n=this.data.building)!=null&&n.settings.start_view?g`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:x}`:x}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,Y.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,Y.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,Y.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:x}
          ${this._mode==="editor"&&t!=="idle"?g`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:x}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?x:this.renderNotices()}
        ${this.data.error&&!e?g`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:x}
        ${!e&&!this.data.error?g`<p class="fp3d-message">${this.t("loading")}</p>`:x}
        ${e?this._mode==="editor"&&this.canEdit?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(this._site?this.siteBuilding()??e:e):x}
      </div>
    `}renderNotices(){var n;let e=this.data,t=[];for(let{plan:i,alert:r}of this.alertsElsewhere()){let s=this.watch.others.get(i);s&&t.push(g`<div class="fp3d-notice fp3d-notice-error">
          <span>⚠ ${this.t("plan_alert",{plan:Fn(this.hass,e.plans,i),text:Ot(this.hass,s,r)})}</span>
          <button class="fp3d-btn" @click=${()=>this.showElsewhere(i,r)}>${this.t("plan_alert_go")}</button>
        </div>`)}if(e.needsRestart&&(e.versionGap==="frontend"?t.push(g`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(g`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(g`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let i=new Date(e.draft.savedAt).toLocaleString((n=this.hass)==null?void 0:n.language);t.push(g`<div class="fp3d-notice">
          <span>${this.t(e.draft.conflict?"draft_conflict":"draft_found",{time:i})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?g`<div class="fp3d-notices">${t}</div>`:x}renderExtensions(){return this._editorReady?g`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @open-fun-settings=${()=>this.openFunSettings()}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`:(ds().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),g`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?g`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .planId=${this.data.planId}
      .plans=${this.data.plans}
      .trash=${this.data.trash}
      .locatePlan=${this.data.locatePlan}
      @plan-pick=${t=>this.pickPlan(t.detail.plan)}
      @plans-changed=${()=>{this.data.reloadPlans()}}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @director-here=${()=>this._director=ha()}
      @voice-here=${()=>{this._voiceHere=aa(),this._screen=la()}}
      @mic-probe=${()=>St().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(ds().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),g`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){var u,d,c,p;if(!e.floors.length||!e.floors.some(h=>h.rooms.length))return g`<div class="fp3d-empty">
        <p>${this.t(this.canEdit?"no_building_admin":"no_building")}</p>
        ${this.canEdit?g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:x}
      </div>`;let t=e.floors.find(h=>h.id===this._floorId),n=t?[t]:e.floors,i=this.tt.active,r=lt("room_bar")?this._roomBar:"off",s=r!=="off"&&!i,a=this.phoneOn&&!i&&!this._walking,l=r==="off";return g`
      ${this._clean||this.phoneOn||!l&&e.floors.length<2?x:g`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?g`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(h=>g`<button
                  class="fp3d-chip"
                  aria-pressed=${h.id===this._floorId}
                  @click=${()=>{this._floorId=h.id,this._roomId=null}}
                >
                  ${h.name}
                </button>`)}
              ${l?g`<span class="fp3d-sep"></span>`:x}`:x}
        ${(l?n:[]).flatMap(h=>[n.length>1&&le(h).some(f=>f.name.trim())?g`<span class="fp3d-nav-floor">${h.name}</span>`:x,...le(h).filter((f,m,b)=>f.name.trim()&&!(f.outdoor&&b.findIndex(v=>v.outdoor&&v.area_id===f.area_id&&v.name===f.name)<m)).map(f=>g`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${f.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=h.id),this._roomId=f.id===this._roomId?null:f.id}}
            >
              ${f.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,Y.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${i?"fp3d-tt":""} ${s?"fp3d-has-bar":""} ${a?`fp3d-phone fp3d-now-${this._nowMode}`:""}">
        <fp3d-view3d
          class="fp3d-body"
          @walk-change=${h=>this._walking=h.detail.walking}
          .pivotMark=${this._pinHover}
          .hass=${this.tt.hass(this.hass)}
          .replay=${((u=this.tt.session)==null?void 0:u.replay)??null}
          .building=${e}
          .planId=${this._site?null:this.data.planId}
          .noSave=${this._site}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          .angleLock=${this._angleLock}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall&&!i}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .proxmoxWall=${this._proxmox&&!i}
          @proxmox-close=${()=>this._proxmox=!1}
          .clean=${this._clean||this.phoneOn}
          .cleanButton=${!this.phoneOn}
          .rooms=${a&&this._solo&&this._roomId?[this._roomId]:null}
          @clean-toggle=${()=>{this._clean=!this._clean,Y.set("clean",this._clean?"1":"0")}}
          .weather=${this._weather}
          .director=${this._director}
          .voice=${this._voiceHere}
          .screen=${this._screen||null}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:((d=e.floors[0])==null?void 0:d.id)??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .plain=${this._plain}
          .markerMode=${this._markers}
          .pinSize=${this._pinSize}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .zoomStyle=${this._zoomStyle}
          .zoomLate=${this._zoomLate}
          .zoomScope=${this._zoomScope}
          .clock=${this._clock}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!i}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${h=>this._selFurniture=h.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${h=>this._selDevice=h.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @status-change=${()=>this.phoneOn&&setTimeout(()=>{var h;return(h=this.phoneShell())==null?void 0:h.requestUpdate()},0)}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${h=>{this._floorId=h.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId&&!this._walking&&!(a&&this._nowMode==="check")?g`<fp3d-room-panel
              ?walk=${!0}
              @walk-here=${()=>{var h;return(h=this.view3d())==null?void 0:h.walkHere()}}
              class="fp3d-room-panel"
              ?collapsible=${this.phoneOn}
              @camera-look=${h=>{var f;return(f=this.view3d())==null?void 0:f.lookThrough(h.detail.entity)}}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${i}
              .room=${e.floors.flatMap(h=>le(h)).find(h=>h.id===this._roomId)??null}
              .floor=${e.floors.find(h=>le(h).some(f=>f.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${Sn(this.hass,e.floors)}
              .sheets=${this._roomId?((c=this.view3d())==null?void 0:c.roomSheets(this._roomId))??null:null}
              @sheet-open=${h=>{var f;return this._roomId&&((f=this.view3d())==null?void 0:f.openRoomSheet(this._roomId,h.detail.id))}}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:x}
        ${a?g`<fp3d-phone-shell
              .hass=${this.hass}
              .building=${e}
              .view=${()=>this.view3d()}
              .floorId=${this._floorId}
              .roomId=${this._roomId}
              .solo=${this._solo}
              .extras=${this.phoneExtras()}
              .watts=${h=>he(this.hass,h)}
              @phone-mode=${h=>this._nowMode=h.detail}
              @phone-room=${h=>{this._floorId=e.floors.length>1||h.detail.roomId?h.detail.floorId:null,this._roomId=h.detail.roomId}}
              @phone-solo=${h=>{this._solo=h.detail,Y.set("phone_solo",this._solo?"1":"0")}}
              @phone-more=${h=>this.phoneMore(h.detail)}
            ></fp3d-phone-shell>`:x}
        ${this._phoneAsk&&!i?g`<div class="fp3d-now-ask" role="dialog">
              <span>${this.t("now_try")}</span>
              <button class="fp3d-chip" @click=${()=>this.setPhone(!0)}>${this.t("now_try_yes")}</button>
              <button class="fp3d-chip" @click=${()=>this.setPhone(!1)}>${this.t("now_try_no")}</button>
            </div>`:x}
        ${s?g`<fp3d-room-bar
              class="fp3d-room-bar"
              .hass=${this.hass}
              .building=${e}
              .floorId=${e.floors.length>1?this._floorId:((p=e.floors[0])==null?void 0:p.id)??null}
              .roomId=${this._roomId}
              ?favorites=${r==="all"}
              @room-pick=${h=>{e.floors.length>1&&(this._floorId=h.detail.floorId),this._roomId=h.detail.roomId===this._roomId?null:h.detail.roomId}}
            ></fp3d-room-bar>`:x}
        ${this.tt.session?g`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:x}
        ${this._clean||a&&!this._showOpen?x:g`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?g`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          <div class="fp3d-seg" title=${this.t("plain_hint")}>
            <button aria-pressed=${!this._plain} @click=${()=>this.setPlain(!1)}>${this.t("plain_off")}</button>
            <button aria-pressed=${this._plain} @click=${()=>this.setPlain(!0)}>${this.t("plain_on")}</button>
          </div>
          ${lt("room_bar")?g`<div class="fp3d-seg" title=${this.t("room_bar_hint")}>
                <button aria-pressed=${this._roomBar==="off"} @click=${()=>this.setRoomBar("off")}>${this.t("room_bar_none")}</button>
                <button aria-pressed=${this._roomBar==="rooms"} @click=${()=>this.setRoomBar("rooms")}>${this.t("room_bar_rooms")}</button>
                <button aria-pressed=${this._roomBar==="all"} @click=${()=>this.setRoomBar("all")}>${this.t("room_bar_all")}</button>
              </div>`:x}
          ${e.floors.length>1&&!this._floorId?g`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:x}
          ${!this._floorId&&e.settings.roof.type!=="none"?g`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:x}
          ${e.floors.length>1&&this._floorId?g`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(h=>g`<button
                      aria-pressed=${this._floorStack===h}
                      @click=${()=>{this._floorStack=h,Y.set("floor_stack",h)}}
                    >
                      ${this.t(`floor_stack_short_${h}`)}
                    </button>`)}
              </div>`:x}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(h=>g`<button
                  aria-pressed=${this._heat===h}
                  @click=${()=>{this._heat=h,Y.set("heat",h)}}
                >
                  ${this.t(h==="none"?"heat_off":`heat_short_${h}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,Y.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,Y.set("trail",this._trail?"1":"0")}}
          >
            ${q("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>{this._cameraWall=!this._cameraWall,this._cameraWall&&(this._proxmox=!1)}}
          >
            ${q("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          ${tu(this.hass)?g`<button
                class="fp3d-chip"
                aria-pressed=${this._proxmox}
                title=${this.t("pve_hint")}
                @click=${()=>{this._proxmox=!this._proxmox,this._proxmox&&(this._cameraWall=!1)}}
              >
                ${this.t("pve_title")}
              </button>`:x}
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,Y.set("weather",this._weather?"1":"0")}}
          >
            ${q("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:x}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${i} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${q("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?g`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:x}
        </div>`}
        ${this._furnish?g`<div class="fp3d-furnish-bar">
              ${this._selFurniture?g`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,h=>h.mirror=!h.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?g`<span>${K(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:g`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:x}
      </div>
    `}static styles=[He,je,fe`
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. The parent may pad itself by the
           screen's safe areas (notches; some themes set them on every screen): those are taken off, or the panel is
           taller than the window and its bottom is cut off (#529). */
        height: calc(100vh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        background: var(--fp3d-bg);
      }
      /* dvh only where it is known: with var() in it a browser without dvh (Chrome before 108, the Fire tablets'
         WebView) cannot drop the line while reading it, so it would not fall back to the vh above – the height
         would be lost and the panel collapse to its header, the 3D view to nothing */
      @supports (height: 100dvh) {
        :host {
          height: calc(100dvh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        }
      }
      .fp3d-app {
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 0;
      }
      .fp3d-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 6px 14px 6px 4px;
        min-height: 52px;
        border-bottom: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        flex-wrap: wrap;
        /* the header's menus (the floor plan picker) open over the editor's tool bar and the 3D view below */
        position: relative;
        z-index: 30;
      }
      ha-menu-button {
        color: var(--fp3d-text);
      }
      h1 {
        font-family: var(--fp3d-title-font);
        font-weight: 700;
        font-size: 19px;
        letter-spacing: -0.01em;
        margin: 0 4px 0 8px;
        white-space: nowrap;
      }
      .fp3d-notices {
        display: grid;
        gap: 6px;
        padding: 8px 14px 0;
      }
      .fp3d-notice {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 12px;
        padding: 9px 12px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        font-size: 13.5px;
      }
      .fp3d-notice span {
        flex: 1;
        min-width: 200px;
      }
      .fp3d-notice-warn {
        border-color: rgba(255, 181, 71, 0.6);
        color: var(--fp3d-warm);
      }
      .fp3d-notice-error {
        border-color: rgba(255, 107, 139, 0.6);
        color: var(--fp3d-danger);
        word-break: break-word;
      }
      .fp3d-chip-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-furnish-bar {
        position: absolute;
        left: 50%;
        bottom: 16px;
        transform: translateX(-50%);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 8px 10px 8px 16px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13.5px;
      }
      .fp3d-size-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-size input {
        width: 58px;
        padding: 5px 6px;
        border: 1px solid rgba(127, 127, 127, 0.35);
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger);
      }
      .fp3d-grow {
        flex: 1;
      }
      .fp3d-save {
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      /* the view options (quality, look, symbols, side) fold behind ⚙ on every screen: a tidy header */
      .fp3d-opts-btn {
        display: grid;
        place-items: center;
        order: 3;
        width: 36px;
        height: 36px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: transparent;
        color: var(--fp3d-text);
        font-size: 17px;
        cursor: pointer;
      }
      .fp3d-opts-btn[aria-expanded="true"] {
        color: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
      }
      .fp3d-view-opts {
        display: none;
      }
      .fp3d-view-opts.fp3d-opts-open {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        order: 5;
        width: 100%;
      }
      /* phones: version and grow move with it */
      @media (max-width: 700px) {
        .fp3d-version {
          order: 4;
        }
        .fp3d-header .fp3d-grow {
          display: none;
        }
      }
      /* the installed version, at the far right of the header */
      .fp3d-version {
        margin-left: auto;
        font-size: 11.5px;
        color: var(--fp3d-muted);
        white-space: nowrap;
        opacity: 0.8;
      }
      .fp3d-save-error {
        color: var(--fp3d-danger);
      }
      .fp3d-body {
        flex: 1;
        min-height: 0;
      }
      /* the colour well beside the look: a small round swatch, the reset arrow next to it */
      .fp3d-style-pick {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 0 6px;
      }
      .fp3d-zoom-late {
        font-size: 12px;
        color: var(--fp3d-muted, var(--fp3d-text));
      }
      .fp3d-zoom-late input {
        width: 110px;
      }
      .fp3d-style-pick select {
        background: var(--fp3d-chrome-solid);
        color: var(--fp3d-text);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 6px 8px;
        font: inherit;
        max-width: 230px;
      }
      .fp3d-accent-pick {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        padding: 0 4px;
      }
      .fp3d-accent-pick input[type="color"] {
        width: 22px;
        height: 22px;
        padding: 0;
        border: 1px solid var(--fp3d-line);
        border-radius: 50%;
        background: none;
        cursor: pointer;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 2px;
      }
      .fp3d-accent-pick input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: 50%;
      }
      .fp3d-accent-reset {
        border: none;
        background: none;
        color: var(--fp3d-muted);
        cursor: pointer;
        font-size: 14px;
        padding: 0 2px;
      }
      .fp3d-nav {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 10px 14px;
        overflow-x: auto;
        scrollbar-width: none;
        flex: none;
      }
      /* a desktop shows a thin scrollbar while the pointer rests on the bar. Its room is kept all the time (an
         invisible thumb), so the bar does not grow on hover and the 3D view below does not jump; the bottom padding
         gives that room back (idea from TRusselo, #1053). Touch screens keep their overlay scrollbars. */
      @media (hover: hover) and (pointer: fine) {
        .fp3d-nav:not(.fp3d-nav-wrap) {
          scrollbar-width: thin;
          scrollbar-color: transparent transparent;
          padding-bottom: 3px;
        }
        .fp3d-nav:not(.fp3d-nav-wrap):hover {
          scrollbar-color: color-mix(in srgb, var(--fp3d-text) 35%, transparent) transparent;
        }
      }
      /* wrapped (several lines, scrolling up and down): the thin scrollbar on hover as before */
      .fp3d-nav-wrap:hover {
        scrollbar-width: thin;
      }
      /* wrapped: several lines, at most about three before the bar itself scrolls */
      .fp3d-nav-wrap {
        flex-wrap: wrap;
        overflow-x: visible;
        overflow-y: auto;
        max-height: 132px;
      }
      .fp3d-nav-floor {
        flex: none;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-left: 6px;
      }
      .fp3d-nav-toggle {
        flex: none;
        margin-left: auto;
        position: sticky;
        right: 0;
        min-width: 34px;
        padding-left: 8px;
        padding-right: 8px;
      }
      .fp3d-nav .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-sep {
        flex: none;
        width: 1px;
        margin: 4px 4px;
        background: var(--fp3d-line);
      }
      .fp3d-stage-wrap {
        position: relative;
        flex: 1;
        min-height: 0;
        display: flex;
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-stage-wrap fp3d-view3d {
        flex: 1;
      }
      .fp3d-room-panel {
        position: absolute;
        top: 58px;
        right: 14px;
        bottom: 14px;
        width: min(360px, calc(100% - 28px));
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        pointer-events: none;
      }
      /* the switches sit at the bottom (as in the card), where they never meet the energy values or warnings */
      fp3d-view3d {
        --fp3d-bottom-inset: 52px;
      }
      .fp3d-clean fp3d-view3d {
        --fp3d-bottom-inset: 0px;
      }
      .fp3d-furnish-bar {
        bottom: 68px;
      }
      /* time travel: its bar at the bottom; the switches, the buttons of the view and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt fp3d-view3d {
        --fp3d-bottom-inset: calc(52px + var(--fp3d-tt-h));
      }
      .fp3d-tt .fp3d-overlay {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt .fp3d-room-panel {
        bottom: calc(var(--fp3d-tt-h) + 6px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* the room bar: above the switches, beside the view's own buttons (search, eye, microphone) – nothing moves for it;
         beside an open room panel */
      .fp3d-room-bar {
        position: absolute;
        left: 148px;
        right: 12px;
        bottom: 56px;
      }
      .fp3d-side-right .fp3d-room-bar {
        left: 12px;
        right: 148px;
      }
      /* the eye tidied the switches away: the room bar sits at the bottom */
      .fp3d-clean .fp3d-room-bar {
        bottom: 12px;
      }
      .fp3d-room-open .fp3d-room-bar {
        right: calc(14px + min(360px, calc(100% - 28px)) + 10px);
      }
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-room-open .fp3d-room-bar {
          display: none;
        }
        .fp3d-room-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        .fp3d-room-open .fp3d-overlay {
          display: none;
        }
        /* the view's own buttons (search, eye) step up above the sheet */
        .fp3d-room-open fp3d-view3d {
          --fp3d-bottom-inset: calc(55% + 8px);
        }
        /* phones: the time bar takes two rows; the switches make way for it */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
        .fp3d-tt .fp3d-overlay {
          display: none;
        }
        .fp3d-tt fp3d-view3d {
          --fp3d-bottom-inset: var(--fp3d-tt-h);
        }
      }
      /* the phone view: a bar at the bottom (Now, the rooms by floor, the blinds, More); the list is a page of its
         own above the bar, the house check a small card – the house and the list never share the screen */
      /* the view's own things step up above the bar; an open room's panel stands on it */
      .fp3d-phone fp3d-view3d {
        --fp3d-bottom-inset: calc(72px + env(safe-area-inset-bottom, 0px));
      }
      .fp3d-phone .fp3d-overlay {
        bottom: calc(76px + env(safe-area-inset-bottom, 0px));
      }
      .fp3d-phone .fp3d-room-panel {
        bottom: calc(70px + env(safe-area-inset-bottom, 0px));
        height: auto;
        max-height: calc(62% - 62px);
      }
      .fp3d-now-check fp3d-view3d {
        --fp3d-bottom-inset: 190px;
      }
      .fp3d-now-ask {
        position: absolute;
        left: 8px;
        right: 8px;
        top: 8px;
        z-index: 6;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border-radius: 14px;
        background: var(--fp3d-panel-bg, rgba(13, 20, 34, 0.94));
        border: 1px solid var(--fp3d-line, rgba(120, 160, 255, 0.22));
        color: var(--fp3d-text, #e8f0ff);
      }
      .fp3d-now-ask span {
        flex: 1 1 180px;
      }
      /* search and eye on the right (#285): the bar leaves room there instead */
      .fp3d-side-right .fp3d-overlay {
        left: 12px;
        right: 100px;
      }
      /* an open room panel keeps the switches beside it, not over its last rows */
      .fp3d-room-open .fp3d-overlay {
        right: calc(min(360px, 100% - 28px) + 26px);
      }
      .fp3d-overlay {
        position: absolute;
        right: 12px;
        bottom: 12px;
        /* room for the search button and the eye beside it */
        left: 100px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        align-items: center;
        pointer-events: none;
      }
      .fp3d-overlay > * {
        pointer-events: auto;
      }
      /* the view's switches in one "Show" menu that opens upwards */
      .fp3d-show-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-show-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-show-panel {
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        z-index: 30;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        width: min(470px, 92vw);
        padding: 10px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid, #0d1628);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
        box-shadow: var(--fp3d-shadow);
      }
      .fp3d-show-panel > .fp3d-seg {
        flex-wrap: wrap;
      }
      .fp3d-show-panel > .fp3d-chip {
        box-shadow: none;
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-seg-label {
        display: inline-flex;
        align-items: center;
        padding: 0 4px 0 8px;
        opacity: 0.75;
      }
      .fp3d-quality button {
        padding: 5px 11px;
        min-height: 30px;
        font-size: 13px;
      }
      .fp3d-message,
      .fp3d-empty {
        padding: 32px 20px;
        color: var(--fp3d-muted);
        text-align: center;
      }
      .fp3d-phone-only {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-only {
          display: block;
        }
      }
      .fp3d-empty {
        display: grid;
        justify-items: center;
        gap: 12px;
        margin: auto;
      }
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",$a);function Sa(o){var t;let e=(t=o==null?void 0:o.orientation)==null?void 0:t.type;return typeof e=="string"&&e?e.startsWith("portrait"):((o==null?void 0:o.height)??0)>((o==null?void 0:o.width)??0)}function wh(o,e){return(e?o==null?void 0:o.start_view_portrait:void 0)??(o==null?void 0:o.start_view)??null}function er(o,e){let t=e==null?void 0:e.trim(),n=o==null?void 0:o.card_templates;return t?(n==null?void 0:n.find(i=>i.id===t))??(n==null?void 0:n.find(i=>{var r;return(r=i.aliases)==null?void 0:r.includes(t)})):void 0}var Rb=["fill","height","fullscreen_button","plan"];function Ma(o,e){let t=er(e,o.template);if(!t)return o;let n=Object.fromEntries(Rb.filter(i=>o[i]!==void 0).map(i=>[i,o[i]]));return{...t.config,...n,screen:t.config.screen||t.name,type:o.type,template:o.template}}function tr(o,e,t=new Date){var a;if(!o||o==="off")return!1;if(o==="sun")return((a=e==null?void 0:e.states["sun.sun"])==null?void 0:a.state)==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let i=Number(n[1])*60+Number(n[2]),r=Number(n[3])*60+Number(n[4]),s=t.getHours()*60+t.getMinutes();return i<=r?s>=i&&s<r:s>=i||s<r}var xh;function kh(){let o=new URL("./neonplan3d-card-editor.js?v=67d9fab076d0",new URL(import.meta.url)).href;return xh??=import(o),xh}function $h(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}function Cb(o){let e=o;for(let t=0;e&&t<40;t++){if(e.localName==="hui-grid-section")return!0;e=e.parentElement??e.getRootNode().host??null}return!1}var Ia=class extends ue{static properties={hass:{attribute:!1},_config:{state:!0},_upright:{state:!0},_roomId:{state:!0},_walking:{state:!0},_phoneMode:{state:!0},_solo:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0},_stretch:{state:!0}};yaml=null;appliedTemplate="";roomApplied=!1;cleanTimer;cellObserver=null;idleTimer;nightTimer;data=new vn(this);watch=new On(this);yamlPlan=null;tt=new qn(this);constructor(){super(),this._roomId=null,this._walking=!1,this._phoneMode="bar";let e=localStorage.getItem("neonplan3d.phone_solo");this._solo=e===null?null:e==="1",this._floorId=void 0,this._walls=$h(),this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._upright=Sa(globalThis.screen),this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1,this._stretch=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){var n;clearTimeout(this.cleanTimer);let t=((n=this._config)==null?void 0:n.controls_hide_after)??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){var t;clearTimeout(this.idleTimer);let e=((t=this._config)==null?void 0:t.idle_return)??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!q("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:(n==null?void 0:n.quality)??"auto",speed:(n==null?void 0:n.time_travel_speed)??null,range:(n==null?void 0:n.time_travel_range)??null,t:(i,r)=>T(this.hass,i,r)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){var e,t,n;if((e=this.tt.session)!=null&&e.playing){this.armIdle();return}this.tt.stop(),this._roomId=this.homeRoom(),this._floorId=void 0,(t=this.view3d())==null||t.resetView(),(n=this._config)!=null&&n.idle_orbit&&(this._orbit=!0)}openDashboard(e){mo(e)}onFullscreen=()=>{var e;this._fullscreen=!!document.fullscreenElement&&((e=this.shadowRoot)==null?void 0:e.contains(document.fullscreenElement))===!0,requestAnimationFrame(this.onViewport)};startView(e){return wh(e,this._upright)}onViewport=()=>{var n,i;let e=Sa(globalThis.screen);e!==this._upright&&(this._upright=e);let t=Math.round(((n=window.visualViewport)==null?void 0:n.height)??window.innerHeight);if(Math.abs(t-this._vh)>1&&(this._vh=t),(i=this._config)!=null&&i.fill&&!this._fullscreen){let r=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(r-this._top)>1)&&(this._top=r)}};preview=!1;connectedCallback(){var e,t,n,i;super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.addEventListener("resize",this.onViewport),(i=(n=(t=globalThis.screen)==null?void 0:t.orientation)==null?void 0:n.addEventListener)==null||i.call(n,"change",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.cellObserver??=new ResizeObserver(()=>{var a,l;let r=((a=this._config)==null?void 0:a.height)??420,s=!((l=this._config)!=null&&l.fill)&&this.clientHeight>r+4&&Cb(this);s!==this._stretch&&(this._stretch=s)}),this.cellObserver.observe(this),this.armIdle(),this.nightTimer=setInterval(()=>{var r;return this._night=tr((r=this._config)==null?void 0:r.night,this.hass)},6e4)}disconnectedCallback(){var e,t,n,i,r;super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onViewport),(i=(n=(t=globalThis.screen)==null?void 0:t.orientation)==null?void 0:n.removeEventListener)==null||i.call(n,"change",this.onViewport),(r=this.cellObserver)==null||r.disconnect(),this.cellObserver=null,this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){var n;if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=(n=this.shadowRoot)==null?void 0:n.querySelector("ha-card"),t=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e!=null&&e.requestFullscreen?e.requestFullscreen().catch(t):t()}static async getConfigElement(){return await kh(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this.yaml=e,e.plan!==this.yamlPlan&&(this.yamlPlan=e.plan,this.roomApplied=!1,this._floorId=void 0,this._roomId=null,this.data.switchPlan(e.plan==="site"?ye:e.plan??null)),this.appliedTemplate=this.templateKey(),this.applyConfig(Ma(e,this.data.building))}templateKey(){var t;let e=er(this.data.building,(t=this.yaml)==null?void 0:t.template);return e?JSON.stringify([e.name,e.config]):""}applyConfig(e,t){let n=i=>!t||JSON.stringify(t[i])!==JSON.stringify(e[i]);this._config=e,n("floor")&&(this._floorId=void 0),(n("room")||n("rooms"))&&(this.roomApplied=!1),n("rooms")&&(this._floorId=void 0),n("walls")&&(this._walls=$h()),n("heatmap")&&(this._heat=null),n("explode")&&(this._explode=null),this._orbit=!1,this._night=tr(e.night,this.hass),n("controls_hidden")&&(this._clean=e.controls_hidden===!0),(n("controls_hide_after")||n("controls_hidden"))&&this.armClean(),(n("idle_return")||n("idle_orbit"))&&this.armIdle()}getCardSize(){var e;return Math.ceil((((e=this._config)==null?void 0:e.height)??420)/50)}getGridOptions(){var e,t;return{columns:"full",rows:(e=this._config)!=null&&e.fill?12:Math.ceil((((t=this._config)==null?void 0:t.height)??420)/56),min_rows:4}}willUpdate(e){var t,n,i;if((t=this.yaml)!=null&&t.template){let r=this.templateKey();r!==this.appliedTemplate&&(this.appliedTemplate=r,this.applyConfig(Ma(this.yaml,this.data.building),this._config))}if(e.has("hass")&&this.hass){this.data.setHass(this.hass),(n=this.tt.session)==null||n.setLive(this.hass);let r=tr((i=this._config)==null?void 0:i.night,this.hass);r!==this._night&&(this._night=r)}}get shownRooms(){var e;return Hi(this.data.building,(e=this._config)==null?void 0:e.rooms)}get roomsLocked(){var e;return this.shownRooms.length>0&&((e=this._config)==null?void 0:e.rooms_lock)!==!1}get roomFloors(){var t;let e=new Set(this.shownRooms);return(((t=this.data.building)==null?void 0:t.floors)??[]).filter(n=>le(n).some(i=>e.has(i.id))).map(n=>n.id)}homeRoom(){var t,n;if((t=this._config)!=null&&t.room)return this._config.room;let e=this.shownRooms;return e.length===1&&((n=this._config)==null?void 0:n.room_panel)!==!1?e[0]:null}allowed(e){return!e||!this.roomsLocked||this.shownRooms.includes(e)}roomsOf=null;shownBuilding(e){var i;let t=this.shownRooms;if(!t.length)return e;let n=t.join(",");return(((i=this.roomsOf)==null?void 0:i.from)!==e||this.roomsOf.key!==n)&&(this.roomsOf={from:e,key:n,to:Li(e,t)}),this.roomsOf.to}get canSwitch(){var e;return this.shownRooms.length?this.roomFloors.length>1:!((e=this._config)!=null&&e.floor)||this.thumbs}get thumbs(){var e,t;return this.shownRooms.length?!1:((e=this._config)==null?void 0:e.floor_thumbs)??!((t=this._config)!=null&&t.floor)}currentFloor(){var i;let e=this.data.building,t=this._floorId===void 0?((i=this._config)==null?void 0:i.floor)??null:this._floorId,n=this.roomFloors;return this.shownRooms.length?n.length===1?n[0]:t&&n.includes(t)?t:null:e&&e.floors.length===1?e.floors[0].id:e!=null&&e.floors.some(r=>r.id===t)?t:null}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}get isSite(){var e;return((e=this._config)==null?void 0:e.plan)==="site"}updated(){var t,n;this.isSite&&this.data.plans.length>1&&this.watch.watch(this.hass,this.data);let e=(t=this.shadowRoot)==null?void 0:t.querySelector("fp3d-view3d");if(e){let i=Math.min(...[...((n=this.shadowRoot)==null?void 0:n.querySelectorAll(".fp3d-card-full"))??[]].map(s=>s.offsetLeft),1/0),r=Number.isFinite(i)?Math.max(104,e.clientWidth-i+8):104;e.style.getPropertyValue("--fp3d-walk-right")!==`${r}px`&&e.style.setProperty("--fp3d-walk-right",`${r}px`)}}render(){var I,P,C,R,G,k,_,E,A,F,j,Q,O,L,J,Z,te,ae,_e,ve,ne,Le,U,Fe,Ke,un,Me,Mt,Ne,Vt,ut,pt;let e=((I=this._config)==null?void 0:I.height)??420,t=this._config,n=this.isSite?this.watch.site(this.data)??this.data.building:this.data.building,i=n?this.homeRoom():null;!this.roomApplied&&n&&i&&(this.roomApplied=!0,n.floors.some(D=>le(D).some(we=>we.id===i))&&(this._roomId=i));let r=this.shownRooms,s=r.length===1?((P=n==null?void 0:n.floors.flatMap(D=>le(D)).find(D=>D.id===r[0]))==null?void 0:P.area_id)??null:null,a=this.currentFloor(),l=!!this._roomId&&(t==null?void 0:t.room_panel)===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!a&&((n==null?void 0:n.floors.length)??0)>1,u=D=>(t==null?void 0:t.controls)===!0||Array.isArray(t==null?void 0:t.controls)&&t.controls.includes(D),d=["temperature","humidity","co2"].filter(D=>u(D)),c=this._walls??(t==null?void 0:t.walls)??"auto",p=this._heat??(t==null?void 0:t.heatmap)??"none",h=this._explode??(t==null?void 0:t.explode)??!0,f=this._fullscreen?"100%":t!=null&&t.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":this._stretch?"100%":`${e}px`,m=!!n&&!this._clean&&(t==null?void 0:t.phone)!==!0&&(l||(!!(t!=null&&t.controls)||!!(t!=null&&t.time_travel))&&!(this._roomId&&t.room_panel!==!1)),b=this.tt.active,v=!!n&&!!(t!=null&&t.room_bar)&&t.phone!==!0&&lt("room_bar")&&!b&&!(this._roomId&&t.room_panel!==!1),$=(t==null?void 0:t.controls_hidden)!==void 0||((t==null?void 0:t.controls_hide_after)??0)>0,y=(t==null?void 0:t.phone)===!0&&!!n&&!b&&!this._walking,w=D=>T(this.hass,D),S=/^#[0-9a-f]{6}$/i.test((t==null?void 0:t.accent)??"")?t.accent:null;return g`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${S?`--fp3d-accent:${S}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${b?"fp3d-tt":""} ${y?"fp3d-phone":""}" style="height:${f}">
        ${n&&n.floors.some(D=>D.rooms.length)?g`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${((C=this.tt.session)==null?void 0:C.replay)??null}
              .building=${n}
              .planId=${this.isSite?null:this.data.planId}
              .noSave=${this.isSite}
              .rooms=${(t==null?void 0:t.phone)===!0&&(this._solo??t.phone_solo===!0)&&this._roomId?[this._roomId]:r.length?r:null}
              .packs=${this.data.packs}
              .floorId=${a}
              .roomId=${this._roomId}
              .wallMode=${c}
              .explode=${h}
              .keepRoof=${(t==null?void 0:t.roof_fade)===!1}
              .plain=${(t==null?void 0:t.plain)===!0}
              .surroundings=${(t==null?void 0:t.surroundings)!==!1}
              .hideRoof=${(t==null?void 0:t.roof)===!1||r.length>0}
              .quality=${((R=this._config)==null?void 0:R.quality)??"auto"}
              ?showStats=${((G=this._config)==null?void 0:G.stats)??!1}
              .markerMode=${((k=this._config)==null?void 0:k.markers)??"important"}
              .pinSize=${((_=this._config)==null?void 0:_.marker_size)??"normal"}
              .markerNames=${((E=this._config)==null?void 0:E.marker_names)===!0}
              .central=${((A=this._config)==null?void 0:A.central)!==!1}
              .walkable=${((F=this._config)==null?void 0:F.walk)!==!1}
              @walk-change=${D=>this._walking=D.detail.walking}
              .petsOn=${((j=this._config)==null?void 0:j.pets)!==!1}
              .ghostOn=${((Q=this._config)==null?void 0:Q.ghost)!==!1}
              .buttons=${((L=(O=this._config)==null?void 0:O.buttons)==null?void 0:L.map((D,we)=>({id:`card_${we}`,...D})))??null}
              .heatMode=${p}
              .theme=${((J=this._config)==null?void 0:J.theme)??"neon"}
              .zoomStyle=${((Z=this._config)==null?void 0:Z.zoom_style)??null}
              .zoomLate=${((te=this._config)==null?void 0:te.zoom_late)??null}
              .zoomScope=${((ae=this._config)==null?void 0:ae.zoom_scope)??null}
              .themeEvening=${((_e=this._config)==null?void 0:_e.theme_evening)??null}
              .themeNight=${((ve=this._config)==null?void 0:ve.theme_night)??null}
              .styleEntity=${((ne=this._config)==null?void 0:ne.style_entity)??null}
              .clock=${((Le=this._config)==null?void 0:Le.clock)??null}
              .accent=${((U=this._config)==null?void 0:U.accent)??null}
              .showEnergy=${((Fe=this._config)==null?void 0:Fe.energy)??!0}
              .flows=${((Ke=this._config)==null?void 0:Ke.flows)??null}
              .holograms=${((un=this._config)==null?void 0:un.holograms)??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${(t==null?void 0:t.room_names)!==!1}
              .controlsRight=${(t==null?void 0:t.controls_side)==="right"}
              .keepView=${(t==null?void 0:t.keep_view)===!0}
              .angleLock=${(t==null?void 0:t.angle_lock)===!0}
              .floorStack=${(t==null?void 0:t.floor_stack)??"dim"}
              .panelOpen=${!!this._roomId&&(t==null?void 0:t.room_panel)!==!1}
              .alerts=${(t==null?void 0:t.alerts)!==!1}
              .householdCard=${(t==null?void 0:t.household_card)!==!1}
              .alertJump=${!!(t!=null&&t.alert_jump)}
              .director=${!!(t!=null&&t.director)}
              .voice=${!!(t!=null&&t.voice)}
              .screen=${((Me=t==null?void 0:t.screen)==null?void 0:Me.trim())||null}
              .template=${((Mt=t==null?void 0:t.template)==null?void 0:Mt.trim())||null}
              .viewKind=${this.preview?"preview":"card"}
              .voiceArea=${((Ne=t==null?void 0:t.voice_area)==null?void 0:Ne.trim())||s}
              @open-extensions=${()=>this.openDashboard("/neonplan3d?tab=extensions")}
              .scenes=${(t==null?void 0:t.scenes)!==!1}
              ?trail=${!!(t!=null&&t.motion_trail)}
              .cameraWall=${this._cameraWall&&!b}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean||y}
              .cleanButton=${$&&!y}
              @status-change=${()=>y&&setTimeout(()=>{var D,we;return(we=(D=this.shadowRoot)==null?void 0:D.querySelector("fp3d-phone-shell"))==null?void 0:we.requestUpdate()},0)}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${(t==null?void 0:t.weather)!==!1}
              .weatherEntityId=${(t==null?void 0:t.weather_entity)??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${this.startView(t)}
              style=${b?`--fp3d-bottom-inset: ${m?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:m?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${D=>{if(this.allowed(D.detail.roomId)){if(this.canSwitch&&((n==null?void 0:n.floors.length)??0)>1&&D.detail.floorId&&this.currentFloor()!==D.detail.floorId){if(this.roomsLocked&&!this.roomFloors.includes(D.detail.floorId))return;this._floorId=D.detail.floorId,this._roomId=null;return}D.detail.roomId&&(this._roomId=D.detail.roomId===this._roomId?null:D.detail.roomId)}}}
              @floor-tap=${D=>{this.roomsLocked&&D.detail.floorId&&!this.roomFloors.includes(D.detail.floorId)||(this._floorId=D.detail.floorId,this._roomId=null)}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:g`<p class="fp3d-card-msg">${this.data.error??(n?T(this.hass,"no_building"):T(this.hass,"loading"))}</p>`}
        ${n&&(t!=null&&t.template)&&!er(n,t.template)?g`<div class="fp3d-card-tpl-missing">${T(this.hass,"card_template_missing",{name:t.template})}</div>`:x}
        ${v?g`<fp3d-room-bar
              class="fp3d-card-room-bar"
              style="bottom:${m?54:8}px"
              .hass=${this.hass}
              .building=${this.shownBuilding(n)}
              .floorId=${a}
              .roomId=${this._roomId}
              ?favorites=${(t==null?void 0:t.room_bar_favorites)===!0}
              @room-pick=${D=>{if(this.allowed(D.detail.roomId)){if(D.detail.floorId!==this.currentFloor()){if(!this.canSwitch)return;this._floorId=D.detail.floorId}this._roomId=D.detail.roomId===this._roomId?null:D.detail.roomId}}}
            ></fp3d-room-bar>`:x}
        ${this._roomId&&n&&((Vt=this._config)==null?void 0:Vt.room_panel)!==!1&&!this._walking&&!(y&&this._phoneMode==="check")?g`<fp3d-room-panel
              ?walk=${((ut=this._config)==null?void 0:ut.walk)!==!1}
              @walk-here=${()=>{var D;return(D=this.view3d())==null?void 0:D.walkHere()}}
              @camera-look=${D=>{var we;return(we=this.view3d())==null?void 0:we.lookThrough(D.detail.entity)}}
              class="fp3d-card-panel"
              ?collapsible=${y}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${b}
              .room=${n.floors.flatMap(D=>le(D)).find(D=>D.id===this._roomId)??null}
              .floor=${n.floors.find(D=>le(D).some(we=>we.id===this._roomId))??null}
              .building=${n}
              .confirmEntities=${Sn(this.hass,n.floors)}
              .sheets=${this._roomId?((pt=this.view3d())==null?void 0:pt.roomSheets(this._roomId))??null:null}
              @sheet-open=${D=>{var we;return this._roomId&&((we=this.view3d())==null?void 0:we.openRoomSheet(this._roomId,D.detail.id))}}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:x}
        ${y&&n?g`<fp3d-phone-shell
              .hass=${this.hass}
              .building=${n}
              .view=${()=>this.view3d()}
              .floorId=${this._floorId??null}
              .roomId=${this._roomId}
              .solo=${this._solo??(t==null?void 0:t.phone_solo)===!0}
              .hide=${(t==null?void 0:t.phone_hide)??[]}
              .start=${t==null?void 0:t.phone_start}
              .places=${t==null?void 0:t.phone_places}
              @phone-link=${D=>mo(D.detail)}
              .extras=${t!=null&&t.dashboard?[{id:"dash",icon:"\u2302",label:t.dashboard_label||t.dashboard}]:[]}
              .watts=${D=>he(this.hass,D)}
              @phone-mode=${D=>this._phoneMode=D.detail}
              @phone-room=${D=>{this.allowed(D.detail.roomId)&&(this._floorId=n.floors.length>1||D.detail.roomId?D.detail.floorId:null,this._roomId=D.detail.roomId)}}
              @phone-solo=${D=>{this._solo=D.detail;try{localStorage.setItem("neonplan3d.phone_solo",this._solo?"1":"0")}catch{}}}
              @phone-more=${D=>D.detail==="dash"&&(t==null?void 0:t.dashboard)&&mo(t.dashboard)}
            ></fp3d-phone-shell>`:x}
        ${m&&n?g`<div class="fp3d-card-controls">
              ${l?g`<button class="fp3d-chip" @click=${()=>this.back()}>${w("back")}</button>`:x}
              ${t!=null&&t.time_travel?g`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${b} title=${w("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${q("time_travel")?"\u23EA":"\u{1F512}"} ${w("tt_chip")}
                  </button>`:x}
              ${t!=null&&t.camera_wall?g`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${w("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${w("cameras_short")}</button>`:x}
              ${u("walls")?g`<div class="fp3d-seg">
                    <button aria-pressed=${c==="auto"} @click=${()=>this.setWalls("auto")}>${w("walls_auto")}</button>
                    <button aria-pressed=${c==="cut"} @click=${()=>this.setWalls("cut")}>${w("walls_cut")}</button>
                  </div>`:x}
              ${u("floors")&&n.floors.length>1&&!a?g`<div class="fp3d-seg">
                    <button aria-pressed=${h} @click=${()=>this._explode=!0}>${w("floors_apart")}</button>
                    <button aria-pressed=${!h} @click=${()=>this._explode=!1}>${w("floors_stacked")}</button>
                  </div>`:x}
              ${d.length?g`<div class="fp3d-seg" role="group" aria-label=${w("heatmap")}>
                    ${["none",...d].map(D=>g`<button aria-pressed=${p===D} @click=${()=>this._heat=D}>
                          ${w(D==="none"?"heat_off":`heat_short_${D}`)}
                        </button>`)}
                  </div>`:x}
            </div>`:x}
        ${this.tt.session?g`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:x}
        ${""}
        ${t!=null&&t.fullscreen_button&&(!this._clean||this._fullscreen)&&(!y||this._fullscreen)&&!(this._roomId&&t.room_panel!==!1)?g`<button class="fp3d-card-full" title=${w(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${w(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:x}
        ${t!=null&&t.dashboard&&!this._clean&&!y&&!(this._roomId&&t.room_panel!==!1)?g`<button class="fp3d-card-full fp3d-card-dash ${t.fullscreen_button?"fp3d-card-dash-2":""}" title=${t.dashboard_label||t.dashboard} aria-label=${t.dashboard_label||t.dashboard} @click=${()=>this.openDashboard(t.dashboard)}>
              ${t.dashboard_label?g`<span>${t.dashboard_label}</span>`:"\u2302"}
            </button>`:x}
      </div>
    </ha-card>`}static styles=[He,je,fe`
      .fp3d-card-controls {
        position: absolute;
        left: 60px;
        right: 10px;
        bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
        pointer-events: none;
      }
      .fp3d-card-controls > * {
        pointer-events: auto;
      }
      /* time travel: its bar at the bottom, the switches and the room panel above it */
      .fp3d-tt > * {
        --fp3d-tt-h: 64px;
      }
      .fp3d-tt .fp3d-card-controls {
        bottom: calc(var(--fp3d-tt-h) + 2px);
      }
      .fp3d-tt .fp3d-card-panel {
        bottom: calc(var(--fp3d-tt-h) + 4px);
      }
      .fp3d-tt-chip[aria-pressed="true"] {
        background: #ffb020;
        color: #1a1200;
      }
      /* the view's walk button steps aside for the card's own buttons at the top right */
      fp3d-view3d {
        --fp3d-walk-right: 104px;
      }
      .fp3d-card-full {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 38px;
        height: 38px;
        border: 0;
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        box-shadow: var(--fp3d-shadow);
        font-size: 18px;
        cursor: pointer;
      }
      /* the dashboard button: after the rule above, so its own width wins and, beside the full screen button, it
         steps to the left instead of covering it (D1002) */
      .fp3d-card-full.fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-full.fp3d-card-dash-2 {
        right: 56px;
      }
      /* full screen made by the card itself (iPad, the app on iOS): over the whole page */
      ha-card.fp3d-pseudo-full {
        position: fixed;
        inset: 0;
        z-index: 9999;
        height: 100vh !important;
        max-height: none !important;
        border-radius: 0;
      }
      @supports (height: 100dvh) {
        ha-card.fp3d-pseudo-full {
          height: 100dvh !important;
        }
      }
      /* a block, so the dashboard's grid cell gives it its height (and the card can measure it, #926) */
      :host {
        display: block;
      }
      ha-card {
        overflow: hidden;
        background: var(--fp3d-bg);
        height: 100%;
      }
      ha-card:fullscreen {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        border: 0;
      }
      ha-card:fullscreen .fp3d-card-body {
        flex: 1 1 auto;
        min-height: 0;
      }
      /* night (kiosk): the whole card dimmed */
      ha-card.fp3d-night .fp3d-card-body {
        filter: brightness(0.55);
      }
      .fp3d-card-body {
        position: relative;
        display: flex;
        height: 100%;
        container-type: size;
        container-name: fp3d;
      }
      fp3d-view3d {
        flex: 1;
      }
      .fp3d-card-tpl-missing {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        max-width: calc(100% - 40px);
        padding: 6px 12px;
        border-radius: 10px;
        background: var(--fp3d-chrome-solid, rgba(10, 16, 30, 0.92));
        border: 1px solid rgba(255, 170, 60, 0.6);
        color: var(--fp3d-text, #fff);
        font-size: 13px;
        z-index: 5;
      }
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
      }
      /* beside the view's own buttons (search, eye) at the bottom left: nothing moves for the room bar */
      .fp3d-card-room-bar {
        position: absolute;
        left: 148px;
        right: 10px;
      }
      .fp3d-card-panel {
        position: absolute;
        top: 10px;
        right: 10px;
        bottom: 10px;
        width: min(340px, calc(100% - 20px));
        display: flex;
        flex-direction: column;
        pointer-events: none;
      }
      /* phones and portrait tablets: the room panel becomes a sheet at the bottom */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
        .fp3d-card-panel {
          top: auto;
          left: 8px;
          right: 8px;
          bottom: 8px;
          width: auto;
          height: 55%;
          justify-content: flex-end;
        }
        /* the time bar takes two rows here */
        .fp3d-tt > * {
          --fp3d-tt-h: 100px;
        }
      }
      /* the phone view: the view's own things and an open room's panel stand above its bar */
      .fp3d-phone fp3d-view3d {
        --fp3d-bottom-inset: calc(72px + env(safe-area-inset-bottom, 0px));
      }
      /* above the bar, which is taller on a phone with a home indicator */
      .fp3d-phone .fp3d-card-panel {
        bottom: calc(70px + env(safe-area-inset-bottom, 0px));
        height: auto;
        max-height: calc(62% - 62px);
      }
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",Ia);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:T(void 0,"card_name"),description:T(void 0,"card_description"),preview:!1})}Ga();Qi();
