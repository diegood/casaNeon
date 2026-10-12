Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var pr=new URL(import.meta.url),cr=pr.searchParams.get("v"),dr=o=>new URL(`./fonts/${o}${cr?`?v=${cr}`:""}`,pr).href,ur="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function hr(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${dr("figtree.woff2")}) format("woff2");unicode-range:${ur}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${dr("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${ur}}`,document.head.append(o)}function fr(o,e){return e==="metric"||e==="imperial"?e:o?.config?.unit_system?.length==="mi"?"imperial":"metric"}function as(o,e){return String(Number(o.toFixed(e)))}function mr(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),a=Math.floor(n/12+1e-9),r=n-a*12,i=as(r,e>=2?1:0);return a?r<.05?`${t}${a}'`:`${t}${a}' ${i}"`:`${t}${i}"`}function gr(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,a=0,r=!1,i=!1,s=t;for(let l of t.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];r=!0,s=s.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(a+=d*.3048,i=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?a+=d*.0254:c==="mm"?a+=d/1e3:c==="cm"?a+=d/100:c==="m"?a+=d:a+=e==="imperial"?d*(i?.0254:.3048):d}return!r||/[^\s+]/.test(s)?null:a}var Jt=globalThis,Xt=Jt.ShadowRoot&&(Jt.ShadyCSS===void 0||Jt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cn=Symbol(),_r=new WeakMap,_t=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Cn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Xt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=_r.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&_r.set(t,e))}return e}toString(){return this.cssText}},br=o=>new _t(typeof o=="string"?o:o+"",void 0,Cn),de=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,a,r)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+o[r+1],o[0]);return new _t(t,o,Cn)},vr=(o,e)=>{if(Xt)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),a=Jt.litNonce;a!==void 0&&n.setAttribute("nonce",a),n.textContent=t.cssText,o.appendChild(n)}},Fn=Xt?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return br(t)})(o):o;var{is,defineProperty:ss,getOwnPropertyDescriptor:ls,getOwnPropertyNames:cs,getOwnPropertySymbols:ds,getPrototypeOf:us}=Object,Zt=globalThis,yr=Zt.trustedTypes,ps=yr?yr.emptyScript:"",hs=Zt.reactiveElementPolyfillSupport,bt=(o,e)=>o,Vn={toAttribute(o,e){switch(e){case Boolean:o=o?ps:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},xr=(o,e)=>!is(o,e),wr={attribute:!0,type:String,converter:Vn,reflect:!1,useDefault:!1,hasChanged:xr};Symbol.metadata??=Symbol("metadata"),Zt.litPropertyMetadata??=new WeakMap;var ke=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=wr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),a=this.getPropertyDescriptor(e,n,t);a!==void 0&&ss(this.prototype,e,a)}}static getPropertyDescriptor(e,t,n){let{get:a,set:r}=ls(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:a,set(i){let s=a?.call(this);r?.call(this,i),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??wr}static _$Ei(){if(this.hasOwnProperty(bt("elementProperties")))return;let e=us(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(bt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bt("properties"))){let t=this.properties,n=[...cs(t),...ds(t)];for(let a of n)this.createProperty(a,t[a])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,a]of t)this.elementProperties.set(n,a)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let a=this._$Eu(t,n);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let a of n)t.unshift(Fn(a))}else e!==void 0&&t.push(Fn(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,n);if(a!==void 0&&n.reflect===!0){let r=(n.converter?.toAttribute!==void 0?n.converter:Vn).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(e,t){let n=this.constructor,a=n._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let r=n.getPropertyOptions(a),i=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Vn;this._$Em=a;let s=i.fromAttribute(t,r.type);this[a]=s??this._$Ej?.get(a)??s,this._$Em=null}}requestUpdate(e,t,n,a=!1,r){if(e!==void 0){let i=this.constructor;if(a===!1&&(r=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??xr)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:a,wrapped:r},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),r!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,r]of this._$Ep)this[a]=r;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[a,r]of n){let{wrapped:i}=r,s=this[a];i!==!0||this._$AL.has(a)||s===void 0||this.C(a,void 0,r,s)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};ke.elementStyles=[],ke.shadowRootOptions={mode:"open"},ke[bt("elementProperties")]=new Map,ke[bt("finalized")]=new Map,hs?.({ReactiveElement:ke}),(Zt.reactiveElementVersions??=[]).push("2.1.2");var qn=globalThis,kr=o=>o,en=qn.trustedTypes,$r=en?en.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ir="$lit$",Se=`lit$${Math.random().toFixed(9).slice(2)}$`,Tr="?"+Se,fs=`<${Tr}>`,De=document,yt=()=>De.createComment(""),wt=o=>o===null||typeof o!="object"&&typeof o!="function",Wn=Array.isArray,ms=o=>Wn(o)||typeof o?.[Symbol.iterator]=="function",Hn=`[ 	
\f\r]`,vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Mr=/-->/g,Sr=/>/g,Le=RegExp(`>|${Hn}(?:([^\\s"'>=/]+)(${Hn}*=${Hn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Er=/'/g,Pr=/"/g,zr=/^(?:script|style|textarea|title)$/i,Bn=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),_=Bn(1),$t=Bn(2),Mc=Bn(3),Ne=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Ar=new WeakMap,je=De.createTreeWalker(De,129);function Rr(o,e){if(!Wn(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return $r!==void 0?$r.createHTML(e):e}var gs=(o,e)=>{let t=o.length-1,n=[],a,r=e===2?"<svg>":e===3?"<math>":"",i=vt;for(let s=0;s<t;s++){let l=o[s],d,c,u=-1,h=0;for(;h<l.length&&(i.lastIndex=h,c=i.exec(l),c!==null);)h=i.lastIndex,i===vt?c[1]==="!--"?i=Mr:c[1]!==void 0?i=Sr:c[2]!==void 0?(zr.test(c[2])&&(a=RegExp("</"+c[2],"g")),i=Le):c[3]!==void 0&&(i=Le):i===Le?c[0]===">"?(i=a??vt,u=-1):c[1]===void 0?u=-2:(u=i.lastIndex-c[2].length,d=c[1],i=c[3]===void 0?Le:c[3]==='"'?Pr:Er):i===Pr||i===Er?i=Le:i===Mr||i===Sr?i=vt:(i=Le,a=void 0);let f=i===Le&&o[s+1].startsWith("/>")?" ":"";r+=i===vt?l+fs:u>=0?(n.push(d),l.slice(0,u)+Ir+l.slice(u)+Se+f):l+Se+(u===-2?s:f)}return[Rr(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},xt=class o{constructor({strings:e,_$litType$:t},n){let a;this.parts=[];let r=0,i=0,s=e.length-1,l=this.parts,[d,c]=gs(e,t);if(this.el=o.createElement(d,n),je.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(a=je.nextNode())!==null&&l.length<s;){if(a.nodeType===1){if(a.hasAttributes())for(let u of a.getAttributeNames())if(u.endsWith(Ir)){let h=c[i++],f=a.getAttribute(u).split(Se),p=/([.?@])?(.*)/.exec(h);l.push({type:1,index:r,name:p[2],strings:f,ctor:p[1]==="."?Ln:p[1]==="?"?jn:p[1]==="@"?Dn:Xe}),a.removeAttribute(u)}else u.startsWith(Se)&&(l.push({type:6,index:r}),a.removeAttribute(u));if(zr.test(a.tagName)){let u=a.textContent.split(Se),h=u.length-1;if(h>0){a.textContent=en?en.emptyScript:"";for(let f=0;f<h;f++)a.append(u[f],yt()),je.nextNode(),l.push({type:2,index:++r});a.append(u[h],yt())}}}else if(a.nodeType===8)if(a.data===Tr)l.push({type:2,index:r});else{let u=-1;for(;(u=a.data.indexOf(Se,u+1))!==-1;)l.push({type:7,index:r}),u+=Se.length-1}r++}}static createElement(e,t){let n=De.createElement("template");return n.innerHTML=e,n}};function Je(o,e,t=o,n){if(e===Ne)return e;let a=n!==void 0?t._$Co?.[n]:t._$Cl,r=wt(e)?void 0:e._$litDirective$;return a?.constructor!==r&&(a?._$AO?.(!1),r===void 0?a=void 0:(a=new r(o),a._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=a:t._$Cl=a),a!==void 0&&(e=Je(o,a._$AS(o,e.values),a,n)),e}var On=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,a=(e?.creationScope??De).importNode(t,!0);je.currentNode=a;let r=je.nextNode(),i=0,s=0,l=n[0];for(;l!==void 0;){if(i===l.index){let d;l.type===2?d=new kt(r,r.nextSibling,this,e):l.type===1?d=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(d=new Nn(r,this,e)),this._$AV.push(d),l=n[++s]}i!==l?.index&&(r=je.nextNode(),i++)}return je.currentNode=De,a}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},kt=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,a){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Je(this,e,t),wt(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==Ne&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ms(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&wt(this._$AH)?this._$AA.nextSibling.data=e:this.T(De.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,a=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=xt.createElement(Rr(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===a)this._$AH.p(t);else{let r=new On(a,this),i=r.u(this.options);r.p(t),this.T(i),this._$AH=r}}_$AC(e){let t=Ar.get(e.strings);return t===void 0&&Ar.set(e.strings,t=new xt(e)),t}k(e){Wn(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,a=0;for(let r of e)a===t.length?t.push(n=new o(this.O(yt()),this.O(yt()),this,this.options)):n=t[a],n._$AI(r),a++;a<t.length&&(this._$AR(n&&n._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=kr(e).nextSibling;kr(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Xe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,a,r){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,a){let r=this.strings,i=!1;if(r===void 0)e=Je(this,e,t,0),i=!wt(e)||e!==this._$AH&&e!==Ne,i&&(this._$AH=e);else{let s=e,l,d;for(e=r[0],l=0;l<r.length-1;l++)d=Je(this,s[n+l],t,l),d===Ne&&(d=this._$AH[l]),i||=!wt(d)||d!==this._$AH[l],d===w?e=w:e!==w&&(e+=(d??"")+r[l+1]),this._$AH[l]=d}i&&!a&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ln=class extends Xe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},jn=class extends Xe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},Dn=class extends Xe{constructor(e,t,n,a,r){super(e,t,n,a,r),this.type=5}_$AI(e,t=this){if((e=Je(this,e,t,0)??w)===Ne)return;let n=this._$AH,a=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==w&&(n===w||a);a&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Nn=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Je(this,e)}};var _s=qn.litHtmlPolyfillSupport;_s?.(xt,kt),(qn.litHtmlVersions??=[]).push("3.3.3");var Cr=(o,e,t)=>{let n=t?.renderBefore??e,a=n._$litPart$;if(a===void 0){let r=t?.renderBefore??null;n._$litPart$=a=new kt(e.insertBefore(yt(),r),r,void 0,t??{})}return a._$AI(o),a};var Un=globalThis,se=class extends ke{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cr(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};se._$litElement$=!0,se.finalized=!0,Un.litElementHydrateSupport?.({LitElement:se});var bs=Un.litElementPolyfillSupport;bs?.({LitElement:se});(Un.litElementVersions??=[]).push("4.2.2");async function Fr(o){return o.callWS({type:"neonplan3d/building/get"})}async function Vr(o,e){return(await o.callWS({type:"neonplan3d/building/save",building:e})).revision}function Hr(o,e){return o.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}async function Or(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Lr(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var vs="neonplan3d.seenOffers";function jr(o){let e=[];try{e=JSON.parse(localStorage.getItem(vs)??"[]")}catch{}return o.filter(t=>!e.includes(t.id))}var ys="neonplan3d.seenUpdates";function Dr(o){let e=[];try{e=JSON.parse(localStorage.getItem(ys)??"[]")}catch{}return o.filter(t=>!e.includes(`${t.id}@${t.release}`))}function Nr(o){return o.callWS({type:"neonplan3d/license/get"})}var qr=[],Gn=new Map,Wr=0;function Br(o){qr=o,Gn=new Map(o.flatMap(e=>e.items.map(t=>[ws(e.id,t.id),t]))),Wr++}function Kn(){return qr}function Ze(){return Wr}function ws(o,e){return`pack:${o}:${e}`}function Yn(o){return o.startsWith("pack:")}var xs={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Ur(o){return le(o)?.parts.find(e=>e.screen)}function le(o){if(!Yn(o))return;let e=Gn.get(o);if(e)return e;let[,t,...n]=o.split(":"),a=xs[t];return a?Gn.get(`pack:${a}:${n.join(":")}`):void 0}function Gr(o){return o.name.es??o.name.en??Object.values(o.name)[0]??o.id}function pe(o,e){let t=le(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Kr;if(tn.has(e.type))return Math.max(0,o.height-nn(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t?.mount){case"surface":return on(o,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?0:Yr(e)}}var Ee={field:null,size:1,right:0,up:0};var Jr=["rain","snow","clouds","lightning","sky"];var Xr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function $s(o){return o==="hedge"||o==="fence"||o==="pergola"}function Ms(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let a=o.slope_dir??"x",r=(d,c)=>a==="x"?d:a==="-x"?-d:a==="z"?c:-c,i=1/0,s=-1/0;for(let[d,c]of o.points){let u=r(d,c);i=Math.min(i,u),s=Math.max(s,u)}if(s-i<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(e,t)-i)/(s-i)));return n*l}function Ss(o,e,t,n){return Qn(o)+(e.offset??0)+Xr[e.type]-Ms(e,t,n)}function Qn(o){return o.elevation>.3?0:-.2}function Mt(o,e,t){let n=(o.outdoor??[]).filter(r=>!$s(r.type)&&r.type!=="pool"&&W([e,t],r.points)),a=[...n].reverse().find(r=>r.cut)??n[0];return a?Ss(o,a,e,t):Qn(o)}function rn(o,e){let t=Qn(o)+(e.offset??0);return e.above?t+Es(e)-.15:t+Xr.pool}function Es(o){return o.height&&o.height>.3?o.height:1.2}var Ps={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Zr={type:"none",pitch:35,overhang:.4},As={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Zr}};var St=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],ea=.3;var ta=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Kr=1.75;function na(o){if(["lamp_ceiling","lamp_panel","lamp_pendant","stairwell","parking"].includes(o.type)||Is.has(o.type))return!1;let e=le(o.type);return!(e?.mount==="ceiling"&&e.light)}var tn=new Set(["lamp_downlight","lamp_spot"]);function nn(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:.02}var Is=new Set(["stairs","stairs_u"]);function Jn(o){return ta.has(o)||!!le(o)?.light}var Ts=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Yr(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function on(o,e,t){let n=0;for(let a of o.furniture)!(Ts.has(a.type)||le(a.type)?.surface)||!W([e,t],et(a))||(n=Math.max(n,a.h));return n}var ks=new Set([...ta,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Qr={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function Xn(o){o.energy={...Ps,...o.energy??{}},o.presence=o.presence??[],o.settings={...As,...o.settings,roof:{...Zr,...o.settings?.roof??{}}};for(let e of o.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(n=>({...n,panel:n.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),e.furniture=e.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let t=e.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(t.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let a of t){let r=n[a.mount??"ceiling"],[i,s,l]=Qr[r];e.furniture.push({id:`lamp_${a.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:r,x:a.x,z:a.z,rotation:0,w:i,d:s,h:l,variant:null,entity:a.entity_id,power:null})}e.placements=e.placements.filter(a=>!a.entity_id.startsWith("light.")||a.pin)}e.openings=e.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return o}function Pe(o){let e=0;for(let t=0;t<o.length;t++){let[n,a]=o[t],[r,i]=o[(t+1)%o.length];e+=n*i-r*a}return e/2}function he(o){let e=Pe(o);if(Math.abs(e)<1e-9){let a=o.length||1;return[o.reduce((r,i)=>r+i[0],0)/a,o.reduce((r,i)=>r+i[1],0)/a]}let t=0,n=0;for(let a=0;a<o.length;a++){let[r,i]=o[a],[s,l]=o[(a+1)%o.length],d=r*l-s*i;t+=(r+s)*d,n+=(i+l)*d}return[t/(6*e),n/(6*e)]}function et(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),a=o.w/2,r=o.d/2;return[[-a,-r],[a,-r],[a,r],[-a,r]].map(([i,s])=>[o.x+i*t-s*n,o.z+i*n+s*t])}function W(o,e){let t=!1;for(let n=0,a=e.length-1;n<e.length;a=n++){let[r,i]=e[n],[s,l]=e[a];i>o[1]!=l>o[1]&&o[0]<(s-r)*(o[1]-i)/(l-i)+r&&(t=!t)}return t}var oa={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var zs=700,eo="neonplan3d.unsaved",tt="1.17.1",aa="floorplan-3d.unsaved";function Rs(){try{let o=localStorage.getItem(eo)??localStorage.getItem(aa);return o?JSON.parse(o):null}catch{return null}}function Zn(o){try{o?localStorage.setItem(eo,JSON.stringify(o)):(localStorage.removeItem(eo),localStorage.removeItem(aa))}catch{}}var nt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){this.connected=!1,this.flush(),this.unsubscribe?.(),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},zs),this.host.requestUpdate()}get frontendVersion(){return tt}get versionGap(){return!this.backendVersion||tt==="dev"||this.backendVersion===tt?null:Cs(this.backendVersion,tt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&tt!=="dev"&&this.backendVersion!==tt}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Xn(e.building))}discardDraft(){this.draft=null,Zn(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!(!e||!this.hass)){this.pending=null;for(let t of e.floors)for(let n of t.furniture)n.mount_y!=null&&n.mount_y>10&&(n.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await Vr(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,Zn(null)}catch(t){this.saveState="error",this.saveError=ra(t),Zn({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Hr(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Lr(this.hass)}catch{this.packs=[]}Br(this.packs),this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Fr(this.hass);this.building=Xn(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=Rs()),this.revision=e.revision,this.error=null}catch(e){this.error=ra(e)}this.host.requestUpdate()}}};function ra(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function Cs(o,e){let t=o.split(/[.-]/).map(a=>Number.parseInt(a,10)||0),n=e.split(/[.-]/).map(a=>Number.parseInt(a,10)||0);for(let a=0;a<Math.max(t.length,n.length);a++){let r=(t[a]??0)-(n[a]??0);if(r)return r}return 0}var ia;function to(){let o=new URL("./neonplan3d-editor.js?v=f1bb3190cabe",new URL(import.meta.url)).href;return ia??=import(o),ia}var Fs={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Vs=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Hs=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Os=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),an=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],fa=new Set(["light","switch","fan"]);function ma(o){return o.slice(0,o.indexOf("."))}function F(o){return Fs[ma(o)]??null}function sa(o){return o!==null&&o!=="scene"&&o!=="script"}function At(o,e){let t=o.entities?.[e];return t?t.area_id?t.area_id:t.device_id&&o.devices?.[t.device_id]?.area_id||null:null}function la(o,e){let t=F(e);if(!t)return!1;let n=o.entities?.[e];if(n?.hidden||n?.entity_category)return!1;let a=o.states[e];if(!a)return!1;let r=a.attributes.device_class;return t==="sensor"?r?Vs.has(r):Hs.has(String(a.attributes.unit_of_measurement??"")):t==="binary"?r?Os.has(r):!!n?.area_id:!0}var Ls=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ca(o,e){if(F(e)!=="sensor")return!1;let t=o.entities?.[e];if(t?.hidden||t?.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||Ls.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||q(n)}var no=null;function Pt(o){let e=no;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,a=[],r=new Map,i=new Map;for(let l of Object.keys(o.entities??{})){let d=o.entities[l],c=d.device_id;c&&d.area_id&&(i.get(c)??i.set(c,new Set).get(c)).add(d.area_id),c&&co(o,l)&&(n.get(c)??n.set(c,[]).get(c)).push(l),c&&!d.hidden&&!d.entity_category&&(r.get(c)??r.set(c,new Set).get(c)).add(ma(l));let u=la(o,l),h=At(o,l);if(!h){(u||ca(o,l))&&sa(F(l))&&a.push(l);continue}u&&(t.get(h)??t.set(h,[]).get(h)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(la(o,l)||ca(o,l))&&sa(F(l))&&a.push(l);a.sort((l,d)=>an.indexOf(F(l))-an.indexOf(F(d))||K(o,l).localeCompare(K(o,d)));for(let[l,d]of t){let c=o.areas?.[l]?.name;d.sort((u,h)=>{let f=an.indexOf(F(u)),p=an.indexOf(F(h));return f-p||K(o,u,c).localeCompare(K(o,h,c))})}let s=new Set([...i].filter(([,l])=>l.size>1).map(([l])=>l));return no={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:a,domains:r,hubs:s},no}function ne(o,e){return!e||!o.entities?[]:Pt(o).areas.get(e)??[]}var js={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ds=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Ns=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function qs(o,e){let t=o.entities?.[e]?.device_id,n=t&&!Pt(o).hubs.has(t)?Pt(o).domains.get(t):void 0;return n&&[...n].some(a=>Ds.has(a))?!1:!Ns.test(`${e} ${o.states[e]?.attributes.friendly_name??""}`)}function oo(o,e,t,n){let a=t.climate?.[n];if(a==="none")return[];if(a)return o.states[a]?[a]:[];let r=js[n],i=(f,p)=>W([f,p],t.points),s=e?.placements.filter(f=>f.entity_id.startsWith("sensor."))??[],l=s.filter(f=>i(f.x,f.z)).map(f=>f.entity_id),d=new Set(s.filter(f=>!i(f.x,f.z)).map(f=>f.entity_id)),c=[...new Set([...ne(o,t.area_id).filter(f=>!d.has(f)),...l])],u=c.filter(f=>f.startsWith("sensor.")&&o.states[f]?.attributes.device_class===r&&qs(o,f));if(u.length)return u;let h=ga[n];return h?c.filter(f=>f.startsWith("climate.")&&typeof o.states[f]?.attributes[h]=="number"):[]}var ga={temperature:"current_temperature",humidity:"current_humidity"};function Ws(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let r=ga[t],i=r?Number(n?.attributes[r]):Number.NaN;return t==="temperature"?da(i,ge(o)):i}let a=Number(n?.state);return t==="temperature"?da(a,n?.attributes.unit_of_measurement):a}function ge(o){return o.config?.unit_system?.temperature==="\xB0F"?"\xB0F":"\xB0C"}function da(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function ot(o,e){return ge(o)==="\xB0F"?e*9/5+32:e}function Ae(o,e,t,n){let a=oo(o,e,t,n).map(r=>Ws(o,r,n)).filter(r=>Number.isFinite(r));return a.length?a.reduce((r,i)=>r+i,0)/a.length:null}function _a(o,e){return!!o.entities&&Pt(o).hubs.has(e)}function ro(o,e){return o.entities?Pt(o).power.get(e)??[]:[]}function K(o,e,t){let a=o.states[e]?.attributes.friendly_name??o.entities?.[e]?.name??e;if(t&&a.length>t.length+1&&a.toLowerCase().startsWith(t.toLowerCase()+" ")){let r=a.slice(t.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return a}function q(o){return!o||o.state==="unavailable"||o.state==="unknown"}var Bs=new Set(["running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function ao(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function io(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function $e(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return io(o.state)||o.state==="returning";switch(F(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return ao(o)&&Bs.has(String(o.state).toLowerCase());default:return!1}}function Ie(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,a=t.rgb_color,r;return a&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?r=[a[0]/255,a[1]/255,a[2]/255]:typeof t.color_temp_kelvin=="number"?r=Us(t.color_temp_kelvin):r=[1,.71,.28],{color:r,level:n}}function Us(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function rt(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Gs=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Ks=new Set(["garage","gate"]),Ys=new Set(["window","opening"]);function Et(o,e,t=!1){let n=new Map;return e.length&&o.forEach((a,r)=>{let i=t&&e.length===1?e[0]:e[r];i&&n.set(a.id,i)}),n}function It(o,e){let t=new Map,n=(r,i)=>r==="none"?null:r??i??null,a=(r,i,s)=>({cover:n(r.cover,i),contact:r.sensor==="handle"&&r.contact==null?null:n(r.contact,s),tilt:r.tilt==="none"?null:r.tilt,contact2:r.leaves===2&&r.contact2&&r.contact2!=="none"?r.contact2:null,tilt2:r.leaves===2&&r.tilt2&&r.tilt2!=="none"?r.tilt2:null,position:r.position&&r.position!=="none"?r.position:null,positionInverted:!!r.position_inverted,tiltAngle:r.tilt_angle&&r.tilt_angle!=="none"?r.tilt_angle:null,tiltMax:r.tilt_max??null,tiltOffset:r.tilt_offset??null,tiltInvert:!!r.tilt_invert,shut:!!r.shut,...r.contact_invert?{contactInvert:!0}:{}});for(let r of e){for(let i of r.rooms){let s=r.openings.filter(b=>b.room_id===i.id).sort((b,x)=>b.edge-x.edge||b.offset-x.offset);if(!s.length)continue;let l=ne(o,i.area_id),d=b=>o.states[b]?.attributes.device_class,c=l.filter(b=>F(b)==="cover"&&Gs.has(d(b))),u=s.filter(b=>b.type==="window"),h=s.filter(b=>b.type==="door"),f=s.filter(b=>b.type==="garage"),p=Et(u,c,!0),g=Et(u,l.filter(b=>F(b)==="binary"&&Ys.has(d(b)))),m=Et(h,l.filter(b=>F(b)==="binary"&&d(b)==="door")),S=Et(f,l.filter(b=>F(b)==="cover"&&Ks.has(d(b)??""))),v=Et(f,l.filter(b=>F(b)==="binary"&&d(b)==="garage_door"));for(let b of s){let x=b.type==="window"?p:b.type==="garage"?S:null,T=b.type==="window"?g:b.type==="garage"?v:m;t.set(b.id,a(b,x?.get(b.id),T.get(b.id)))}}for(let i of r.openings)t.has(i.id)||t.set(i.id,a(i))}return t}var Qs=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Js(o){if(!o||q(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=Qs.find(([a])=>a.test(t.trim()));if(n)return n[1]}return null}var Xs=.5;function Te(o,e,t="window"){let n=m=>!!m&&o.states[m]?.state==="on",a=m=>!!m&&!!o.states[m]&&!q(o.states[m]),r=m=>m?Js(o.states[m]):null,i=m=>{let S=r(m);return e.contactInvert&&m&&m!==e.tilt&&m!==e.tilt2&&S!=="tilted"&&S?S==="open"?"closed":"open":S},s=n(e.tilt2)||i(e.tilt2)==="tilted"||i(e.contact2)==="tilted",l=i(e.contact2)==="open"&&!s?1:0,d=n(e.tilt)||i(e.tilt)==="tilted"||i(e.contact)==="tilted",c=d?1:0,u=e.tiltAngle?Number(o.states[e.tiltAngle]?.state):NaN;if(Number.isFinite(u)){let m=(u-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,m/(e.tiltMax||15))),c<.08&&(c=0),d=c>0}let h=i(e.contact)==="open"&&!d?1:0,f=null,p=e.cover?o.states[e.cover]:void 0,g=Zs(o,e.position);if(g!==null)f=e.positionInverted?g:1-g;else if(p&&!q(p)){let m=p.attributes.current_position;typeof m=="number"?f=1-Math.min(100,Math.max(0,m))/100:f=p.state==="closed"?1:p.state==="opening"||p.state==="closing"?.5:0}else e.cover&&(f=0);if(t==="door"){let m=i(e.contact);return{open:m===null?e.shut?0:Xs:m==="closed"?0:1,open2:i(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:f,sensed:m!==null||f!==null}}if(t==="garage"){let m=i(e.contact),S=f!==null||m!==null;return f===null&&(f=m===null||m==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:f,sensed:S}}return{open:h,open2:l,tilt:c,tilt2:s?1:0,cover:f,sensed:a(e.contact)||a(e.tilt)||Number.isFinite(u)}}function Zs(o,e){let t=e?o.states[e]:void 0;if(!t||q(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let a=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,a?n/100:n))}function so(o,e){let t=new Map,n=[];for(let i of e){let s=o.entities?.[i]?.device_id??`entity:${i}`,l=t.get(s);l||(t.set(s,l=[]),n.push(s)),l.push(i)}let a=n.map(i=>{let s=t.get(i),l=s.find(d=>!o.entities?.[d]?.name)??s[0];return{primary:l,others:s.filter(d=>d!==l)}}),r=new Map(e.map((i,s)=>[i,s]));return a.sort((i,s)=>r.get(i.primary)-r.get(s.primary))}function sn(o,e){return so(o,e).map(t=>t.primary)}var el={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},ba=new Set(["tv_board","tv_wall"]);function va(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let a=String(n).toLowerCase(),r=e.state.trim().toLowerCase();return e.state.trim()==="*"||a===r||r.length>=3&&a.includes(r)}function ya(o){return ba.has(o)||!!Ur(o)}function ln(o){return ya(o)||o==="desk"||o==="fridge_smart"}function at(o,e){let t=new Set,n=qe(o,e),a=e.some(r=>r.openings.some(i=>i.confirm))?It(o,e):null;for(let r of e){for(let i of r.placements)i.confirm&&t.add(i.entity_id);for(let i of r.openings){let s=i.confirm?a?.get(i.id):null;s?.cover&&s.cover!=="none"?t.add(s.cover):i.type==="garage"&&s?.contact&&F(s.contact)==="switch"&&t.add(s.contact)}for(let i of r.furniture){let s=i.confirm?n.get(i.id)?.entity:null;s&&s!=="none"&&t.add(s)}}return t}function lo(o,e){let t=a=>{if(!a||a==="none")return!1;let r=o.states[a]?.state;return r==="on"||r==="open"},n=new Map;for(let a of e)for(let r of a.furniture)r.type==="fridge_smart"&&n.set(r.id,{left:t(r.door_left),right:t(r.door_right)});return n}var ua={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function co(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function tl(o,e){if(co(o,e))return e;let t=o.entities?.[e]?.device_id;return t?ro(o,t).find(n=>n!==e)??null:null}function qe(o,e){let t=new Map;for(let n of e){let a=new Set([...n.furniture.flatMap(r=>[r.entity,r.power]),...n.placements.map(r=>r.entity_id)].filter(r=>!!r&&r!=="none"));for(let r of n.furniture){let i=r.type in ua,s=i?ua[r.type]:el[r.type];if(!s&&r.entity==null&&r.power==null)continue;let l=n.rooms.find(f=>f.points.length>=3&&W([r.x,r.z],f.points)),d=l?sn(o,ne(o,l.area_id)):[],c=f=>`${f} ${K(o,f)}`,u=r.entity==="none"?null:r.entity??null;if(r.entity==null){let f=d.filter(p=>!a.has(p));if(i){let p=f.filter(g=>F(g)==="light");u=p.find(g=>s.test(c(g)))??p[0]??null}else if(r.type==="robot_vacuum"){let p=l?.area_id??null;u=Object.keys(o.entities??{}).find(g=>g.startsWith("vacuum.")&&!a.has(g)&&At(o,g)===p)??null}else if(r.type==="radiator"){let p=f.filter(g=>F(g)==="climate");u=p.find(g=>s.test(c(g)))??p[0]??null}else if(ya(r.type)){let p=f.filter(g=>F(g)==="media");u=p.find(g=>o.states[g]?.attributes.device_class==="tv")??p.find(g=>s?.test(c(g)))??(ba.has(r.type)?p[0]??null:null)}else s&&(u=f.find(p=>["switch","media","fan"].includes(F(p)??"")&&s.test(c(p)))??null);u&&a.add(u)}let h=r.power==="none"?null:r.power??null;r.power==null&&(h=u?tl(o,u):null,!h&&s&&l&&!i&&(h=ne(o,l.area_id).find(p=>co(o,p)&&!a.has(p)&&s.test(c(p)))??null),h&&a.add(h)),(u||h)&&t.set(r.id,{entity:u,power:h})}}return t}function uo(o){if(!o||o.state==="off"||o.state==="standby"||q(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function wa(o,e,t){let n=(c,u)=>W([c,u],t.points),a=qe(o,[e]),r=It(o,[e]),i=[...e.placements.filter(c=>n(c.x,c.z)).map(c=>c.entity_id),...e.furniture.filter(c=>n(c.x,c.z)).flatMap(c=>[a.get(c.id)?.entity,a.get(c.id)?.power]),...e.openings.filter(c=>c.room_id===t.id).flatMap(c=>{let u=r.get(c.id);return u?[u.cover,u.contact,u.tilt,u.contact2]:[]}),...t.panel??[]].filter(c=>!!c&&!!o.states[c]),s=new Set(t.hidden??[]),l=[...new Set(i)].filter(c=>!s.has(c)),d=new Set(l);return{shown:l,more:ne(o,t.area_id).filter(c=>!d.has(c)&&!s.has(c))}}var pa=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,nl={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function cn(o,e){let t=e.car??{},n=u=>u&&u!=="none"?u:null,a=n(t.device)??n(e.entity),r=a?o.entities?.[a]?.device_id:null,i=r&&o.entities?Object.values(o.entities).filter(u=>u.device_id===r).map(u=>u.entity_id):[],s=u=>`${u} ${o.states[u]?.attributes.friendly_name??""} ${o.entities?.[u]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(u,h,f)=>i.find(p=>h.includes(p.split(".")[0])&&nl[u].test(s(p))&&(!f||f(p)))??null,d=u=>String(o.states[u]?.attributes.unit_of_measurement??""),c=u=>String(o.states[u]?.attributes.device_class??"");return{soc:n(t.soc)??i.find(u=>u.startsWith("sensor.")&&c(u)==="battery")??l("soc",["sensor"],u=>d(u)==="%"),range:n(t.range)??l("range",["sensor"],u=>/km|mi/.test(d(u)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],u=>/^k?W$/.test(d(u)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??i.find(u=>u.startsWith("binary_sensor.")&&c(u)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??i.find(u=>u.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??i.find(u=>u.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??i.find(u=>u.startsWith("device_tracker."))??null}}function ol(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function dn(o,e){let t=cn(o,e),n=m=>m?o.states[m]:void 0,a=m=>{let S=Number(n(m)?.state);return m&&Number.isFinite(S)?S:null},r=a(t.soc),i=a(t.range),s=n(t.charging),l=String(s?.attributes.unit_of_measurement??""),d=s&&/^k?W$/.test(l)?(a(t.charging)??0)*(l==="kW"?1e3:1):null,c=d!==null?d>50:!!s&&["on","charging","laden"].includes(s.state.toLowerCase()),u=n(t.plugged),h=n(t.lock),f=n(t.climate),p=n(t.tracker),g=p?.state.toLowerCase()??"";return{entities:t,soc:r!==null?Math.max(0,Math.min(100,r)):null,range:i,rangeUnit:String(n(t.range)?.attributes.unit_of_measurement??"km"),chargingW:d,charging:c,plugged:u?u.state==="on":null,locked:h?ol(h):null,climateOn:f?f.entity_id.startsWith("climate.")?f.state!=="off"&&f.state!=="unavailable":f.state==="on":null,away:p&&g!=="home"&&!q(p)?g==="not_home"?"":p.state:null}}function xa(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(cn(o,n)))).filter(t=>!!t)}function Tt(o,e,t){if(t==="none")return null;if(t)return t;let n=e?o.entities?.[e]?.device_id:null;if(!n||!o.entities)return null;for(let a of Object.values(o.entities))if(!(a.device_id!==n||!a.entity_id.startsWith("sensor."))&&(pa.test(a.translation_key??"")||pa.test(a.entity_id.split(".")[1])))return a.entity_id;return null}function ha(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function ka(o,e,t,n){let a=t?o.states[t]?.attributes:void 0;for(let r of[n?o.states[n]?.state:void 0,a?.current_room,a?.room,a?.current_segment]){let i=po(o,e,r);if(i)return i}return null}function po(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=ha(t);if(!n)return null;let a=r=>[r.name,r.area_id??"",r.area_id&&o.areas?.[r.area_id]?.name||""].map(ha).filter(Boolean);return e.find(r=>a(r).includes(n))??e.find(r=>a(r).some(i=>i.length>=3&&(i.includes(n)||n.includes(i))))??null}var rl=new Set(["garage","gate","door"]);function ho(o,e){let t=new Set,n=new Set,a=r=>{if(!r||r==="none"||!o.states[r])return;let i=F(r);i==="light"?t.add(r):i==="cover"&&!rl.has(String(o.states[r].attributes.device_class??""))&&n.add(r)};for(let r of e.rooms){let i=new Set(r.hidden??[]);for(let s of sn(o,ne(o,r.area_id)))i.has(s)||a(s)}for(let r of e.placements)a(r.entity_id);for(let r of e.furniture)a(r.entity);return{lights:[...t],covers:[...n]}}function $a(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Ma(o,e,t){let n=t.target?.trim()??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[a,r]=n.split(".",2);o.callService(a,r,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var al={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de NeonPlan 3D ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra NeonPlan 3D {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de NeonPlan 3D instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de NeonPlan 3D ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de NeonPlan 3D.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"NeonPlan 3D",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace.",as_furniture_pick:"Elegir mueble \u2026",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de NeonPlan 3D.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_title:"Conexi\xF3n con la tienda",license_instance:"Id de instalaci\xF3n",license_copy:"Copiar",license_copied:"Id copiado",license_activate:"Activar",license_activated:"Conectado: tus packs aparecen abajo.",license_active:"Conectado como {name} (clave {key})",license_checked:"\xFAltima comprobaci\xF3n {time}",license_refresh:"Comprobar ahora",license_refreshed:"Comprobado.",license_remove:"Desconectar",license_remove_confirm:"\xBFDesconectar de la tienda? Los packs instalados se quedan; solo dejan de llegar las actualizaciones por s\xED solas.",license_installed:"instalado \xB7 v{release}",license_update_available:"actualizaci\xF3n a v{release} disponible",license_not_installed:"a\xFAn no instalado",license_install:"Instalar",license_update:"Actualizar",license_none:"Todav\xEDa no hay packs en la cuenta.",license_hint:"La clave de licencia est\xE1 en tu pedido y en tu cuenta en mastershort.de. Introducida una vez, los packs comprados aparecen aqu\xED, se firman para esta instalaci\xF3n y se actualizan solos (se comprueba una vez al d\xEDa). Todo lo instalado sigue funcionando sin la conexi\xF3n.",license_shop:"M\xE1s packs en la tienda",license_error_invalid_key:"La tienda no conoce esta clave. Tiene la forma NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Esta clave ya est\xE1 vinculada al n\xFAmero permitido de instalaciones.",license_error_shop_unreachable:"La tienda no est\xE1 disponible ahora mismo. Los packs instalados siguen funcionando.",license_error_not_owned:"Este pack no est\xE1 en esta cuenta.",license_error_no_key:"Introduce primero la clave de licencia.",license_error_wrong_instance:"La tienda firm\xF3 el pack para otra instalaci\xF3n.",license_error_rate_limit:"La tienda est\xE1 muy solicitada ahora mismo. Int\xE9ntalo de nuevo en un minuto.",license_error_other:"No ha funcionado: {detail}",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de NeonPlan \u2013 actualiza NeonPlan 3D (HACS) y recarga la p\xE1gina.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",offers_title:"Novedades en la tienda",offers_new:"NUEVO",offers_loyalty:"Tu descuento de fidelidad: {percent} % en cada pack y extensi\xF3n Pro adicional",offers_kind_pack:"Pack de muebles",offers_kind_pro:"Extensi\xF3n Pro",offers_kind_bundle:"Lote",offers_dot:"Novedades en la tienda",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para NeonPlan 3D. Instala aqu\xED lo que has comprado con tu clave de licencia; se actualiza solo y funciona tambi\xE9n sin la conexi\xF3n.",ext_shop:"Abrir la tienda",ext_pro:"Extensiones Pro",ext_active:"activa",ext_get:"Ver en la tienda",supporter_title:"Supporter \xB7 Discord",supporter_intro:"\xA1Gracias por apoyar NeonPlan 3D! Este c\xF3digo desbloquea el rol \u{1F499} Supporter en Discord: ver\xE1s el canal #beta-feedback y probar\xE1s las nuevas extensiones primero.",supporter_open:"Abrir Discord",supporter_how:"C\xF3mo: abre Discord, escribe /supporter {code} en cualquier canal y env\xEDalo. El rol llega al instante.",beta_yours:"Beta \xB7 para ti como supporter",beta_supporters:"Beta \xB7 primero para supporters",beta_yours_hint:"Como eres supporter, puedes probar esta extensi\xF3n antes. Cu\xE9ntanos en Discord (canal #beta-feedback) qu\xE9 funciona y qu\xE9 no.",beta_supporters_hint:"Esta extensi\xF3n a\xFAn est\xE1 en beta y primero solo viene con el Supporter-Pass. Cuando est\xE9 terminada, todos podr\xE1n conseguirla en la tienda.",beta_feedback:"Opini\xF3n en Discord",beta_become:"Hazte supporter",beta_bar:"Beta \u2013 como supporter la pruebas primero. Opiniones en Discord (#beta-feedback).",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles, la conexi\xF3n con la tienda y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: NeonPlan encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro. Tras la compra aparece en Extensiones \u203A Conexi\xF3n con la tienda y se instala desde ah\xED.",pro_shop:"Ir a la tienda",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de NeonPlan 3D. Actualiza primero (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',license_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de NeonPlan 3D. Actualiza primero (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",chk_pro_get:"Desbloquear Energ\xEDa Pro (cables, m\xF3dulos, holograma)",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",pro_unlock:"Desbloquear",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas como issue en GitHub y de los deseos como discusi\xF3n: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",help_discord:"Comunidad en Discord",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de NeonPlan 3D \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant."};function z(o,e,t={}){let n=al[e]??e;for(let[a,r]of Object.entries(t))n=n.replace(`{${a}}`,String(r));return n}function X(o,e,t=2){return e.toLocaleString("es",{maximumFractionDigits:t})}var il=["pool"];function sl(){try{return localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function ll(o){return!il.includes(o)||sl()}var Sa=o=>(o??navigator.language).toLowerCase().startsWith("de");function Ea(o){return Sa(o)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var cl={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Pa(o,e){let t=Sa(o),n=t?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",a=e?cl[e]:void 0,r=a?t?a.de:a.en:"",[i,s]=r.split("#");return`${n}${i}?lang=${t?"de":"en"}${s?`#${s}`:""}`}function O(o){return ll(o)}var Aa={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function un(o){return Aa[o]}function pn(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function zt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Aa[o]}"/></svg>`}var ze=(o,e)=>z(o,e);function ce(o,e){if(!e||q(e))return ze(o,"state_unavailable");let t=e.attributes;switch(F(e.entity_id)){case"light":return e.state!=="on"?ze(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:ze(o,"state_on");case"switch":case"fan":return ze(o,e.state==="on"?"state_on":"state_off");case"cover":return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${t.current_position} %`:hn(o,e.state);case"climate":{let n=typeof t.current_temperature=="number"?`${X(o,t.current_temperature,1)} ${o?ge(o):"\xB0C"}`:null;return e.state==="off"?n?`${n} \xB7 ${ze(o,"state_off")}`:ze(o,"state_off"):n??hn(o,e.state)}case"media":{let n=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",a=[t.app_name,t.media_title,t.source].find(r=>typeof r=="string"&&r);return n&&a?a:hn(o,e.state)}case"lock":case"camera":return hn(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?ze(o,e.state==="on"?"state_open":"state_closed"):ze(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let n=Number(e.state),a=t.unit_of_measurement??"",r=o?.entities?.[e.entity_id]?.display_precision??1;return Number.isFinite(n)?`${X(o,n,r)}${a?` ${a}`:""}`:e.state}default:return""}}function hn(o,e){let t=`state_${e}`,n=z(o,t);return n===t?e:n}function Ia(o,e){let t=[];for(let n of e.floors)for(let a of n.placements){let r=F(a.entity_id),i=o.states[a.entity_id];if(!r||!i)continue;let s=n.rooms.find(d=>d.points.length>=3&&W([a.x,a.z],d.points))??null,l=s?.area_id?o.areas?.[s.area_id]?.name:void 0;t.push({id:a.entity_id,floorId:n.id,roomId:s?.id??null,x:a.x,z:a.z,y:a.y??rt(r,n.height,a.mount??null),lamp:r==="light"?a.mount??"ceiling":null,model:r==="camera"?a.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:r==="camera"?dl(o,a.entity_id):void 0,fov:a.fov??void 0,reach:a.reach??void 0,tilt:a.tilt??void 0,rotation:a.rotation??0,icon:a.icon?pn(a.icon):zt(r),cone:r==="camera"&&a.cone===!1?!1:void 0,name:a.name||K(o,a.entity_id,l),ownName:a.name||void 0,showName:!!a.show_name,text:ce(o,i),active:$e(i),unavailable:q(i),glow:r==="light"?fo(Ie(i),a.glow_scale):null,show:a.marker??void 0,fixed:!!a.locked})}return t}function Ta(o,e){let t=`${e} ${String(o.states[e]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function dl(o,e){return Re(o,e).some(t=>o.states[t]?.state==="on")}function Re(o,e){let t=o.entities?.[e]?.device_id;return t?Object.values(o.entities??{}).filter(n=>n.device_id===t&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(o.states[n]?.attributes.device_class))):[]}function za(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function ve(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Ra(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function fo(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}var ye=de`
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
`,Ce=de`
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
  .fp3d-field select option,
  select option {
    /* the opened list keeps the dark look (else light text on the browser's white list) */
    background: var(--fp3d-chrome-solid);
    color: var(--fp3d-text);
  }
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var ul=4,pl=3e3,hl=8,fl=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],it=o=>_`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${un(o)} />
  </svg>`,fn={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},mo=o=>_`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,go=class extends se{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},confirmEntities:{attribute:!1},readOnly:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},pl)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return z(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}get areaName(){return this.room?.area_id?this.hass.areas?.[this.room.area_id]?.name:void 0}name(e){return K(this.hass,e,this.areaName)}nameButton(e){return _`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&ve(this,e)}>${this.name(e)}</button>`}askFor(e){return!this.confirmEntities?.has(e)||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let a=()=>{this.readOnly||this.confirmEntities?.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return _`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${q(e)}
      @click=${a}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return w;let t=ne(this.hass,e.area_id),n=this.memo,{shown:a,more:r}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,room:e,...this.floor?wa(this.hass,this.floor,e):{shown:t,more:[]}},i=so(this.hass,r).map(x=>x.primary),s=i.length,l=this._showAll?[...a,...i]:a,d=x=>l.filter(T=>x.includes(F(T))).map(T=>this.hass.states[T]),c=d(["light"]),u=d(["cover"]),h=d(["climate"]),f=d(["media"]),p=d(["switch","fan","lock"]),g=d(["sensor","binary"]),m=d(["camera"]);this.hasCameras=m.length>0;let S=d(["scene","script"]),v=this.facts(h),b=c.filter(x=>x.state==="on");return _`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${v.length?_`<p class="fp3d-rp-facts">${v.join(" \xB7 ")}</p>`:w}
          ${this.readOnly?_`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:w}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?w:_`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:_`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${c.length?this.section("panel_lights",c.map(x=>this.lightRow(x)),_`${b.length<c.length?_`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:c.filter(x=>!q(x)).map(x=>x.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:w}${b.length?_`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:b.map(x=>x.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:w}`):w}
        ${u.length?this.section("panel_covers",u.map(x=>this.coverRow(x)),u.length>1?_`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:u.filter(x=>!q(x)).map(x=>x.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:u.filter(x=>!q(x)).map(x=>x.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:w):w}
        ${h.length?this.section("panel_climate",h.map(x=>this.climateRow(x))):w}
        ${f.length?this.section("panel_media",f.map(x=>this.mediaRow(x))):w}
        ${p.length?this.section("panel_switches",p.map(x=>this.switchRow(x))):w}
        ${m.length?this.section("panel_cameras",m.map(x=>this.cameraTile(x))):w}
        ${g.length?this.section("panel_sensors",g.map(x=>this.sensorRow(x))):w}
        ${S.length?this.section("panel_scenes",[_`<div class="fp3d-rp-scenes">
                  ${S.map(x=>_`<button
                      class="fp3d-btn"
                      ?disabled=${q(x)}
                      @click=${()=>this.call(F(x.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:x.entity_id})}
                    >
                      ${this.name(x.entity_id)}
                    </button>`)}
                </div>`]):w}
        ${s?_`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:s})}
            </button>`:w}
      </div>
    </section>`}facts(e){let t=[],n=this.room,a=(l,d)=>{let c=Ae(this.hass,this.floor,n,l);if(c===null)return null;if(l==="temperature")return`${X(this.hass,ot(this.hass,c),1)} ${ge(this.hass)}`;let u=oo(this.hass,this.floor,n,l)[0],h=this.hass.states[u]?.attributes.unit_of_measurement??d;return`${X(this.hass,c,1)} ${h}`},r=e.find(l=>typeof l.attributes.current_temperature=="number"),i=a("temperature","\xB0C");i?t.push(i):r&&n.climate?.temperature!=="none"&&t.push(`${X(this.hass,r.attributes.current_temperature,1)} ${ge(this.hass)}`);let s=a("humidity","%");return s&&t.push(s),t}section(e,t,n=w){return _`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",a=t.supported_color_modes??[],r=a.some(h=>h!=="onoff"),i=a.includes("color_temp"),s=a.some(h=>["hs","rgb","rgbw","rgbww","xy"].includes(h)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,d=t.min_color_temp_kelvin??2200,c=t.max_color_temp_kelvin??6500,u=e.entity_id;return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${it("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&r?_`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${h=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(h.target.value)})}
          /></label>`:w}
      ${n&&i?_`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${c}
              step="50"
              .value=${String(t.color_temp_kelvin??d)}
              @change=${h=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(h.target.value)})}
          /></label>`:w}
      ${n&&s?_`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${fl.map(h=>_`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${h.join(",")})"
                aria-label="rgb(${h.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:h})}
              ></button>`)}
          </div>`:w}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,a=e.entity_id,r=q(e);return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${it("cover")}</span>
      ${this.nameButton(a)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(a)&&this.call("cover","open_cover",{entity_id:a})}>${this.t("cover_open")}</button>
        ${n&hl?_`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","stop_cover",{entity_id:a})}>${this.t("cover_stop")}</button>`:w}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.askFor(a)&&this.call("cover","close_cover",{entity_id:a})}>${this.t("cover_close")}</button>
      </div>
      ${n&ul&&typeof t.current_position=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_position)}
              @change=${i=>this.call("cover","set_cover_position",{entity_id:a,position:Number(i.target.value)})}
          /></label>`:w}
      ${n&128&&typeof t.current_tilt_position=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${r}
              .value=${String(t.current_tilt_position)}
              @change=${i=>this.call("cover","set_cover_tilt_position",{entity_id:a,tilt_position:Number(i.target.value)})}
          /></label>`:n&48?_`<div class="fp3d-rp-buttons">
              ${n&16?_`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:a})}>${this.t("cover_tilt_open")}</button>`:w}
              ${n&32?_`<button class="fp3d-btn fp3d-rp-small" ?disabled=${r} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:a})}>${this.t("cover_tilt_close")}</button>`:w}
            </div>`:w}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,a=typeof t.temperature=="number"?t.temperature:null,r=t.target_temp_step??.5,i=t.min_temp??5,s=t.max_temp??30,l=t.hvac_modes??[],d=c=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(s,Math.max(i,Math.round(c/r)*r))});return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${it("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${a!==null?_`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(a-r)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${X(this.hass,a,1)} ${ge(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(a+r)}>+</button>
          </div>`:w}
      ${l.length>1?_`<div class="fp3d-rp-chips">
            ${l.map(c=>_`<button
                class="fp3d-chip"
                aria-pressed=${e.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:w}
    </div>`}stateOf(e,t=ce(this.hass,e)){if(this.room?.no_state?.includes(e.entity_id))return"";let n=F(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,a=q(e)||e.state==="off",r=[t.media_title,t.media_artist].filter(i=>typeof i=="string"&&i).join(" \xB7 ");return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${it("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${r?_`<p class="fp3d-rp-media fp3d-rp-wide">${r}</p>`:w}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${a} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${mo(fn.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${q(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${mo(e.state==="playing"?fn.pause:fn.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${a} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${mo(fn.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${i=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(i.target.value)/100})}
          /></label>`:w}
    </div>`}switchRow(e){let t=e.entity_id,n=F(t),a=t.slice(0,t.indexOf(".")),r=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",i=()=>n==="lock"?this.call("lock",r?"lock":"unlock",{entity_id:t}):this.call(a,"toggle",{entity_id:t});return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${r?"fp3d-rp-on":""}">${it(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,r,i)}
    </div>`}cameraTile(e){let t=e.attributes.entity_picture,n=t&&!q(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,a=this.floor?.placements.some(r=>r.entity_id===e.entity_id);return _`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&ve(this,e.entity_id)}>
        ${n?_`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:_`<span class="fp3d-rp-note">${ce(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${a?_`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${O("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:w}
    </div>`}sensorRow(e){let t=F(e.entity_id),n=t==="binary"&&e.state==="on";return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${it(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[ye,Ce,de`
      :host {
        display: block;
      }
      .fp3d-rp {
        /* the host may be pointer-events: none so the 3D view stays usable around the panel */
        pointer-events: auto;
        display: flex;
        flex-direction: column;
        max-height: 100%;
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",go);var ml={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function st(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function _o(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return r<=.1?0:Math.min(1,.3+r/10)}function Ca(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let a=ml[n.state];if(!a)return null;let r=n.attributes,i=a.cloud??0;typeof r.cloud_coverage=="number"&&(i=Math.min(1,Math.max(0,r.cloud_coverage/100)));let s=a.wind??0;if(typeof r.wind_speed=="number"){let d=r.wind_speed_unit==="m/s"?r.wind_speed*3.6:r.wind_speed_unit==="mph"?r.wind_speed*1.609:r.wind_speed;s=Math.max(s,Math.min(1,d/60))}let l=_o(o,t);return l!==null&&l>0&&(i=Math.max(i,.85)),{entity:n.entity_id,condition:n.state,rain:l??a.rain??0,snow:a.snow??0,fog:a.fog??0,cloud:i,wind:s,lightning:!!a.lightning}}function Fa(o,e){let t=new Set(e??Jr);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var gl=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function Va(o,e){let[t,n,a,r]=o==="ph"?[7,7.4,6.8,7.8]:o==="orp"?[650,800,600,850]:[.3,1.5,.1,3];return e>=t&&e<=n?"ok":e>=a&&e<=r?"warn":"bad"}function gn(o,e){let t=e??{},n=Object.keys(o.states),a=u=>`${u} ${o.states[u]?.attributes.friendly_name??""}`.toLowerCase().replace(/[\s-]+/g,"_"),r=u=>String(o.states[u]?.attributes.device_class??""),i=u=>String(o.states[u]?.attributes.unit_of_measurement??""),s=n.filter(u=>gl.test(a(u))),l=(u,h)=>u.find(h)??null,d=(u,h)=>{let f=t[u];return f==="none"?null:f??h()},c=u=>u.split(".")[0];return{temperature:d("temperature",()=>l(s,u=>c(u)==="sensor"&&(r(u)==="temperature"||/°[CF]/.test(i(u)))&&/(wasser|water|eau|agua|acqua)/.test(a(u)))??l(s,u=>c(u)==="sensor"&&(r(u)==="temperature"||/°[CF]/.test(i(u))))),heater:d("heater",()=>l(s,u=>c(u)==="climate"||c(u)==="water_heater")??l(s,u=>/^(switch|input_boolean)$/.test(c(u))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(a(u)))),pump:d("pump",()=>l(s,u=>/^(switch|fan|input_boolean)$/.test(c(u))&&/(pump|pumpe|filter|pompe|bomba)/.test(a(u)))??l(s,u=>c(u)==="binary_sensor"&&/(pump|pumpe|filter)/.test(a(u)))),light:d("light",()=>l(s,u=>c(u)==="light")),ph:d("ph",()=>{let u=h=>c(h)==="sensor"&&(r(h)==="ph"||i(h).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(a(h)));return l(s,u)??l(n,u)}),chlorine:d("chlorine",()=>l(s,h=>c(h)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(a(h))||i(h)==="mV"))??l(n,h=>c(h)==="sensor"&&/(orp|redox|chlor)/.test(a(h)))),cover:d("cover",()=>l(s,u=>c(u)==="cover"))}}function mn(o){if(!o||q(o))return null;let e=Number(o.state);return o.state!==""&&Number.isFinite(e)?e:null}function lt(o,e){let t=gn(o,e),n=x=>x?o.states[x]:void 0,a=n(t.heater),r=n(t.temperature),i=mn(r),s=String(r?.attributes.unit_of_measurement??"");i===null&&a&&typeof a.attributes.current_temperature=="number"&&(i=a.attributes.current_temperature),s||(s=String(o.config?.unit_system?.temperature??"\xB0C"));let l=null;if(a&&t.heater&&!q(a)){let x=a.attributes,T=t.heater.startsWith("climate.")?"climate":t.heater.startsWith("water_heater.")?"water_heater":"switch",$=T==="switch"?a.state==="on":a.state!=="off",P=String(x.hvac_action??""),y=typeof x.temperature=="number"?x.temperature:null,E=T==="switch"?$:P?P==="heating":$&&y!==null&&i!==null&&i<y-.2;l={id:t.heater,kind:T,on:$,heating:E,target:y,step:typeof x.target_temp_step=="number"?x.target_temp_step:.5,min:typeof x.min_temp=="number"?x.min_temp:10,max:typeof x.max_temp=="number"?x.max_temp:40}}let d=null,c=n(t.pump);if(c&&t.pump&&!q(c)){let x=t.pump.startsWith("sensor.")?mn(c):null,T=String(c.attributes.unit_of_measurement??"")==="kW",$=x===null?null:T?x*1e3:x;d={id:t.pump,on:$!==null?$>20:c.state==="on",watts:$,switchable:/^(switch|fan|input_boolean)\./.test(t.pump)}}let u=null,h=n(t.light);if(h&&t.light&&!q(h)){let x=t.light.startsWith("light.")?Ie(h):h.state==="on"?{color:[.3,.75,1],level:1}:null;u={id:t.light,on:!!x,color:x?.color??[.3,.75,1],level:x?.level??0}}let f=mn(n(t.ph)),p=n(t.chlorine),g=mn(p),m=String(p?.attributes.unit_of_measurement??""),S=m==="mV"||g!==null&&g>50,v=null,b=n(t.cover);if(b&&t.cover&&!q(b)){let x=b.attributes.current_position,T=typeof x=="number"?1-Math.max(0,Math.min(100,x))/100:b.state==="closed"?1:b.state==="open"?0:.5;v={id:t.cover,closed:T,moving:b.state==="opening"||b.state==="closing"}}return{entities:t,temp:i,unit:s||"\xB0C",heater:l,pump:d,light:u,ph:f===null?null:{value:f,range:Va("ph",f)},chlorine:g===null?null:{value:g,unit:S?"mV":m||"mg/l",orp:S,range:Va(S?"orp":"chlorine",g)},cover:v}}function We(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}function Ha(o,e){return We(e).flatMap(({area:t})=>Object.values(gn(o,t.pool)).filter(n=>!!n))}function Oa(o){if(o.light?.on)return{color:o.light.color,level:.35+.65*o.light.level};if(o.temp===null)return{color:[.1,.45,.8],level:.18};let e=o.unit.includes("F")?(o.temp-32)*5/9:o.temp,t=Math.max(0,Math.min(1,(e-14)/16));return{color:[.08+.1*t,.35+.45*t,.85-.1*t],level:.16+.12*t}}var _l=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),bl=new Set(["power","plug","connectivity","running"]);function _n(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return bl.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return _l.has(n)||n.startsWith("ob ")}var vl=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),La={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function bo(o,e,t){let n=[];for(let c of e.floors)for(let u of c.rooms){let h=ne(o,u.area_id).filter(f=>f.startsWith("binary_sensor.")&&!!La[String(o.states[f]?.attributes.device_class)]);h.length&&n.push({floorId:c.id,roomId:u.id,sensors:h})}let a=Object.keys(o.states),r=e.settings.rain_warning===!1?null:st(o,t??e.settings.weather_entity),i=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,s=O("pool")?We(e.floors).map(({floor:c,area:u})=>({floorId:c.id,areaId:u.id,ids:Object.values(gn(o,u.pool)).filter(h=>!!h)})):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,d=l&&o.states[l]?l:null;return{rooms:n,alarms:a.filter(c=>c.startsWith("alarm_control_panel.")),weather:r,outage:i,pools:s,rain:d}}function vo(o){return[...o.rooms.flatMap(e=>e.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.pools??[]).flatMap(e=>e.ids)]}function ja(o,e,t,n){let a=[];for(let s of t.rooms)for(let l of s.sensors){let d=o.states[l];d?.state==="on"&&a.push({kind:La[String(d.attributes.device_class)],entity:l,roomId:s.roomId,floorId:s.floorId})}let r=t.rain?_o(o,t.rain):null;if(r!==null?r>0:!!t.weather&&vl.has(o.states[t.weather]?.state??""))for(let s of e.floors)for(let l of s.openings){if(l.type!=="window"||l.rain_ignore)continue;let d=n.get(l.id);if(!d)continue;let c=Te(o,d,"window");c.open<.5&&c.tilt<.5&&c.open2<.5&&c.tilt2<.5||a.push({kind:"window_rain",entity:d.contact??d.tilt??d.contact2??l.id,roomId:l.room_id,floorId:s.id})}t.outage&&_n(o.states[t.outage])&&a.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null});for(let s of t.pools??[]){let l=e.floors.find(u=>u.id===s.floorId)?.outdoor?.find(u=>u.id===s.areaId);if(!l)continue;let d=lt(o,l.pool);d.ph?.range==="bad"&&d.entities.ph&&a.push({kind:"pool_ph",entity:d.entities.ph,roomId:null,floorId:s.floorId}),d.chlorine?.range==="bad"&&d.entities.chlorine&&a.push({kind:"pool_chlorine",entity:d.entities.chlorine,roomId:null,floorId:s.floorId});let c=d.temp===null?null:d.unit.includes("F")?(d.temp-32)*5/9:d.temp;c!==null&&c<=3&&!d.pump?.on&&a.push({kind:"pool_frost",entity:d.entities.temperature??d.entities.heater??s.areaId,roomId:null,floorId:s.floorId})}for(let s of t.alarms){let l=o.states[s]?.state;l==="triggered"?a.push({kind:"alarm",entity:s,roomId:null,floorId:null}):l==="pending"&&a.push({kind:"alarm_pending",entity:s,roomId:null,floorId:null})}return a}function Da(o){switch(o){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"pool_ph":case"pool_chlorine":return[1,.62,.2];case"pool_frost":return[.55,.8,1];default:return[1,.2,.25]}}function yo(o,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null,a=o?.states[t.entity],r=t.kind.startsWith("pool_")&&a?`${a.state}${a.attributes.unit_of_measurement?` ${a.attributes.unit_of_measurement}`:""}`:o?K(o,t.entity):t.entity,i=z(o,`alert_${t.kind}`,{name:r});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${z(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${i}`:i}var fe=(o,e)=>[o[0]-e[0],o[1]-e[1]],ct=(o,e)=>[o[0]+e[0],o[1]+e[1]],Fe=(o,e)=>[o[0]*e,o[1]*e],wo=(o,e)=>o[0]*e[0]+o[1]*e[1],dt=(o,e)=>o[0]*e[1]-o[1]*e[0],Rt=o=>Math.hypot(o[0],o[1]),ut=o=>{let e=Rt(o)||1;return[o[0]/e,o[1]/e]},Na=o=>[-o[1],o[0]],qa=o=>[o[1],-o[0]];function pt(o,e,t=[]){let n=e.eps??.005,a=[],r=t.filter(y=>Math.hypot(y.b[0]-y.a[0],y.b[1]-y.a[1])>.05),i=[],s=y=>{for(let E=0;E<i.length;E++)if(Math.abs(i[E][0]-y[0])<=n&&Math.abs(i[E][1]-y[1])<=n)return E;return i.push([y[0],y[1]]),i.length-1},l=[];for(let y of o){let E=y.points;if(E.length<3||Math.abs(Pe(E))<1e-6)continue;let M=Pe(E)>0,A=E.map(s);for(let C=0;C<E.length;C++){let U=A[C],L=A[(C+1)%E.length];U!==L&&l.push(M?{u:U,v:L,room:y.id,edge:C,forward:!0}:{u:L,v:U,room:y.id,edge:C,forward:!1})}}let d=r.map(y=>[s(y.a),s(y.b)]),c=new Set;for(let y of o){let E=y.points;E.length<3||(y.wall_splits??[]).forEach((M,A)=>{if(!M||A>=E.length)return;let C=E[A],U=fe(E[(A+1)%E.length],C),L=Rt(U);for(let j of M)j>n&&j<L-n&&c.add(s(ct(C,Fe(U,j/L))))})}let u=[];for(let y of l){let E=i[y.u],M=i[y.v],A=fe(M,E),C=Rt(A),U=Fe(A,1/C),L=[];for(let Q=0;Q<i.length;Q++){if(Q===y.u||Q===y.v)continue;let D=fe(i[Q],E),B=wo(D,U);B<=n||B>=C-n||Math.abs(dt(U,D))<=n&&L.push({t:B,id:Q})}L.sort((Q,D)=>Q.t-D.t);let j=[{t:0,id:y.u},...L,{t:C,id:y.v}];for(let Q=0;Q+1<j.length;Q++){let D=j[Q],B=j[Q+1],ae=y.forward?D.t:C-B.t,oe=y.forward?B.t:C-D.t;u.push({u:D.id,v:B.id,room:y.room,edge:y.edge,t0:ae,t1:oe})}}let h=new Map;for(let y of u){let E=y.u<y.v?`${y.u}-${y.v}`:`${y.v}-${y.u}`,M=h.get(E);M||h.set(E,M=[]),M.push(y)}let f=y=>({room_id:y.room,edge:y.edge,t0:y.t0,t1:y.t1}),p=new Map;for(let y of u){let E=`${y.room}:${y.edge}`;p.set(E,[...p.get(E)??[],y.t0].sort((M,A)=>M-A))}let g=y=>{let E=o.find(A=>A.id===y.room)?.wall_heights?.[y.edge];if(!Array.isArray(E))return E;let M=p.get(`${y.room}:${y.edge}`)??[];return E[M.indexOf(y.t0)]??null},m=y=>{let E=y.map(g).filter(A=>typeof A=="number"&&A>0);if(E.length)return Math.min(...E);let M=y.map(A=>o.find(C=>C.id===A.room)?.ceiling_height);return M.every(A=>typeof A=="number"&&A>0)?Math.max(...M):void 0},S=y=>{let E=y.map(M=>o.find(A=>A.id===M.room)?.wall_thickness?.[M.edge]).filter(M=>typeof M=="number"&&M>0);return E.length?Math.max(...E):void 0},v=y=>y.some(E=>g(E)===0),b=[],x=[];for(let y of h.values()){let E=y[0],M=y.find(A=>A!==E&&A.u===E.v&&A.v===E.u&&A.room!==E.room);for(let A of y)A!==E&&A!==M&&A.room!==E.room&&a.push(`overlap:${E.room}:${A.room}`);if(v(M?[E,M]:[E])){M&&b.push([E.room,M.room]);continue}if(M){let A=S([E,M])??e.interior;x.push({a:E.u,b:E.v,left:A/2,right:A/2,exterior:!1,roomLeft:E.room,roomRight:M.room,sources:[f(E),f(M)],height:m([E,M])})}else x.push({a:E.u,b:E.v,left:0,right:S([E])??e.exterior,exterior:!0,roomLeft:E.room,roomRight:null,sources:[f(E)],height:m([E])})}let T=y=>ut(fe(i[y.b],i[y.a]));for(let y of x){if(y.exterior||y.free)continue;let E=new Set;for(let A of[y.a,y.b])for(let C of x)!C.exterior||C.free||C.a!==A&&C.b!==A||Math.abs(dt(T(y),T(C)))>1e-6||(C.roomLeft===y.roomLeft?E.add("left"):C.roomLeft===y.roomRight&&E.add("right"));if(E.size!==1)continue;let M=y.left+y.right;E.has("left")?(y.left=0,y.right=M):(y.left=M,y.right=0)}r.forEach((y,E)=>{let[M,A]=d[E];if(M===A)return;let C=[(y.a[0]+y.b[0])/2,(y.a[1]+y.b[1])/2],U=o.find(Q=>Q.points.length>=3&&W(C,Q.points))?.id??null,L=(y.thickness??e.interior)/2,j=typeof y.height=="number"&&y.height>0?y.height:void 0;x.push({free:y.id,a:M,b:A,left:L,right:L,exterior:!1,roomLeft:U,roomRight:U,sources:[],height:j})}),x=wl(x,i,c);let $=kl(x,i);return{walls:x.map((y,E)=>{let M=i[y.a],A=i[y.b],C=$.get(`${E}:a`),U=$.get(`${E}:b`),L=$l([C.right,U.left,A,U.right,C.left,M],1e-6);return{id:yl(M,A),a:[M[0],M[1]],b:[A[0],A[1]],left:y.left,right:y.right,exterior:y.exterior,roomLeft:y.roomLeft,roomRight:y.roomRight,sources:y.sources,footprint:L,...y.free?{free:y.free}:{},...y.height!==void 0?{height:y.height}:{}}}),warnings:[...new Set(a)],open:b}}function yl(o,e){let t=r=>Math.round(r*100),[n,a]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(a[0])}_${t(a[1])}`}function Wa(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function wl(o,e,t=new Set){let n=o.slice(),a=!0;for(;a;){a=!1;let r=new Map;n.forEach((i,s)=>{for(let l of[i.a,i.b]){let d=r.get(l);d||r.set(l,d=[]),d.push(s)}});for(let[i,s]of r){if(s.length!==2||t.has(i))continue;let l=n[s[0]],d=n[s[1]];if(l.b!==i&&(l=Wa(l)),d.a!==i&&(d=Wa(d)),l.a===d.b)continue;let c=ut(fe(e[l.b],e[l.a])),u=ut(fe(e[d.b],e[d.a]));if(Math.abs(dt(c,u))>1e-6||wo(c,u)<=0||l.free||d.free||l.height!==d.height||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let h={...l,b:d.b,sources:xl(l.sources,d.sources)},f=n.filter((p,g)=>g!==s[0]&&g!==s[1]);f.push(h),n.length=0,n.push(...f),a=!0;break}}return n}function xl(o,e){let t=o.map(n=>({...n}));for(let n of e){let a=t.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));a?(a.t0=Math.min(a.t0,n.t0),a.t1=Math.max(a.t1,n.t1)):t.push({...n})}return t}function kl(o,e){let t=new Map;o.forEach((a,r)=>{let i=ut(fe(e[a.b],e[a.a])),s=[[a.a,{key:`${r}:a`,d:i,left:a.left,right:a.right,angle:Math.atan2(i[1],i[0])}],[a.b,{key:`${r}:b`,d:Fe(i,-1),left:a.right,right:a.left,angle:Math.atan2(-i[1],-i[0])}]];for(let[l,d]of s){let c=t.get(l);c||t.set(l,c=[]),c.push(d)}});let n=new Map;for(let[a,r]of t){let i=e[a];r.sort((d,c)=>d.angle-c.angle);let s=d=>({left:ct(i,Fe(Na(d.d),d.left)),right:ct(i,Fe(qa(d.d),d.right))});for(let d of r)n.set(d.key,s(d));if(r.length<2)continue;let l=4*Math.max(...r.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<r.length;d++){let c=r[d],u=r[(d+1)%r.length],h=ct(i,Fe(Na(c.d),c.left)),f=ct(i,Fe(qa(u.d),u.right)),p=dt(c.d,u.d);if(Math.abs(p)<1e-4)continue;let g=dt(fe(f,h),u.d)/p,m=ct(h,Fe(c.d,g));Rt(fe(m,i))>l||(n.get(c.key).left=m,n.get(u.key).right=m)}}return n}function $l(o,e){let t=o.filter((a,r)=>Rt(fe(a,o[(r+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let a=0;a<t.length;a++){let r=t[(a+t.length-1)%t.length],i=t[a],s=t[(a+1)%t.length],l=fe(i,r),d=fe(s,i);if(Math.abs(dt(ut(l),ut(d)))<1e-7&&wo(l,d)>0){t=t.filter((c,u)=>u!==a),n=!0;break}}}return t}var Ft=Math.PI/180;function Vt(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),a=Math.max(o.z0,o.z1);return o.axis==="x"?{u0:e,u1:t,w:a-n,at:(r,i)=>[r,o.flip?a-i:n+i]}:{u0:n,u1:a,w:t-e,at:(r,i)=>[o.flip?t-i:e+i,r]}}function bn(o){let e=Vt(o).w,t=o.eave_a,n=o.eave_b,a=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*Ft),r=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*Ft);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*a,y:l=>t+l*a};if(o.shape==="mansard"){let l=Ga(e,t,n,a,r);return{vr:l.vr,rh:l.rh,y:l.y}}let i=a+r>1e-6?Math.min(e,Math.max(0,(n-t+e*r)/(a+r))):e/2,s=t+i*a;return{vr:i,rh:s,y:l=>l<=i?t+l*a:n+(e-l)*r}}var Ml=.14;function Ba(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function Ua(o,e,t){let n=null,a=Math.max(0,o.settings.roof.overhang??0);for(let r of o.settings.roof.sections??[]){if(r.open)continue;let i=Math.min(r.x0,r.x1),s=Math.max(r.x0,r.x1),l=Math.min(r.z0,r.z1),d=Math.max(r.z0,r.z1);if(e<i-1e-6||e>s+1e-6||t<l-1e-6||t>d+1e-6||r.points&&r.points.length>=3&&!W([e,t],r.points))continue;let[c,u]=Pl(r,e,t),h=r.shape==="flat"||r.shape==="parapet",f=Math.max(0,r.overhang??a),g=((h?null:El(Sl(r,{u0:f,u1:f,a:f,b:f}),c,u))??bn(r).y(u))-Ml;n=n===null?g:Math.max(n,g)}return n}var Ct=Math.tan(30*Ft);function Ga(o,e,t,n,a){let r=Math.min(o*.3,n>1e-6?2.4/n:o*.3),i=Math.min(o*.3,a>1e-6?2.4/a:o*.3),s=e+r*n,l=t+i*a,d=Math.min(o-i,Math.max(r,(l-s+Ct*(o-i+r))/(2*Ct))),c=s+(d-r)*Ct;return{vla:r,vlb:i,yla:s,ylb:l,vr:d,rh:c,y:h=>h<=r?e+h*n:h<=d?s+(h-r)*Ct:h<=o-i?l+(o-i-h)*Ct:t+(o-h)*a}}function Sl(o,e){let t=Vt(o),n=bn(o),a=t.w,r=Math.max(0,e.a),i=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=(v,b)=>[v,b,n.y(b)],c=d(s,-r),u=d(l,-r),h=d(l,a+i),f=d(s,a+i),p=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*Ft),g=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*Ft);if(o.shape==="pent"){let v=[c,u,h,f];return{faces:[v],rim:v,ridges:[[h,f]],gable:[[0,n.y(0)],[a,n.y(a)]]}}if(o.shape==="hip"||o.shape==="pyramid"){let v=o.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,a-n.vr)||a/2),b=[t.u0+v,n.vr,n.rh],x=[t.u1-v,n.vr,n.rh],T=o.shape==="pyramid"?[[c,u,b],[u,h,b],[h,f,b],[f,c,b]]:[[c,u,x,b],[b,x,h,f],[f,c,b],[u,h,x]],$=o.shape==="pyramid"?[[c,b],[f,b],[u,b],[h,b]]:[[b,x],[c,b],[f,b],[u,x],[h,x]];return{faces:T,rim:[c,u,h,f],ridges:$,gable:null}}if(o.shape==="halfhip"){let v=Math.min(n.y(0),n.y(a)),b=v+(n.rh-v)*.55,x=p>1e-6?Math.min(n.vr,(b-o.eave_a)/p):n.vr,T=g>1e-6?Math.max(n.vr,a-(b-o.eave_b)/g):n.vr,$=Math.min((t.u1-t.u0)/2-.1,(n.rh-b)/Math.max(.2,p)),P=[t.u0+$,n.vr,n.rh],y=[t.u1-$,n.vr,n.rh],E=[s,x,b],M=[s,T,b],A=[l,x,b],C=[l,T,b];return{faces:[[c,u,A,y,P,E],[P,y,C,h,f,M],[M,E,P],[A,C,y]],rim:[c,u,A,C,h,f,M,E],ridges:[[P,y],[E,P],[M,P],[A,y],[C,y]],gable:[[0,n.y(0)],[x,b],[T,b],[a,n.y(a)]]}}if(o.shape==="mansard"){let v=Ga(a,o.eave_a,o.eave_b,p,g),b=[s,v.vla,v.yla],x=[l,v.vla,v.yla],T=[s,a-v.vlb,v.ylb],$=[l,a-v.vlb,v.ylb],P=[s,v.vr,v.rh],y=[l,v.vr,v.rh];return{faces:[[c,u,x,b],[b,x,y,P],[P,y,$,T],[T,$,h,f]],rim:[c,u,x,y,$,h,f,T,P,b],ridges:[[P,y],[b,x],[T,$]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[a-v.vlb,v.ylb],[a,n.y(a)]]}}let m=[s,n.vr,n.rh],S=[l,n.vr,n.rh];return{faces:[[c,u,S,m],[m,S,h,f]],rim:[c,u,S,h,f,m],ridges:[[m,S]],gable:[[0,n.y(0)],[n.vr,n.rh],[a,n.y(a)]]}}function El(o,e,t){let n=null;for(let a of o.faces){if(!W([e,t],a.map(v=>[v[0],v[1]])))continue;let[r,i]=a,s=a.slice(2).find(v=>Math.abs((i[0]-r[0])*(v[1]-r[1])-(i[1]-r[1])*(v[0]-r[0]))>1e-9);if(!s)continue;let l=i[0]-r[0],d=i[2]-r[2],c=i[1]-r[1],u=s[0]-r[0],h=s[2]-r[2],f=s[1]-r[1],p=d*f-c*h,g=c*u-l*f,m=l*h-d*u;if(Math.abs(g)<1e-9)continue;let S=r[2]-(p*(e-r[0])+m*(t-r[1]))/g;n=n===null?S:Math.min(n,S)}return n}function Pl(o,e,t){let n=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),r=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1);return o.axis==="x"?[e,o.flip?i-t:t-r]:[t,o.flip?a-e:e-n]}function Ka(o,e,t){let n=Vt(e),a=o.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>e.base+.05)),r=d=>d.some(c=>a.some(u=>W(c,u.points))),i=.35,s=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:r(s.map(d=>n.at(d,-i)))?0:t,b:r(s.map(d=>n.at(d,n.w+i)))?0:t,u0:r(l.map(d=>n.at(n.u0-i,d)))?0:t,u1:r(l.map(d=>n.at(n.u1+i,d)))?0:t}}var yn=Math.PI/180,Al=1.13,Il=1.72,xo=.025;var Ya=.25;function Ot(o,e){let t=[];for(let n of o.floors){if(e&&n.id!==e)continue;let{walls:a}=pt(n.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},n.walls??[]);for(let r of a){if(!r.exterior&&!r.free)continue;let i=r.b[0]-r.a[0],s=r.b[1]-r.a[1],l=Math.hypot(i,s);if(l<.5)continue;let d=s/l,c=-i/l,u=Math.min(n.height,r.height??n.height),h=r.sources.find(g=>g.room_id===r.roomLeft)?.edge??null,f={floorId:n.id,room:r.roomLeft,edge:h,free:!!r.free},p=(g,m,S,v)=>t.push({key:g,section:null,side:"top",flat:!1,o:m,eu:S,es:[0,1,0],n:v,lu:l,ls:u,pitch:90,span:()=>[0,l],facing:[v[0],v[2]],wall:f});p(`wall:${n.id}:${r.id}`,[r.a[0]+d*r.right,n.elevation,r.a[1]+c*r.right],[i/l,0,s/l],[d,0,c]),r.free&&p(`wall:${n.id}:${r.id}:back`,[r.b[0]-d*r.left,n.elevation,r.b[1]-c*r.left],[-i/l,0,-s/l],[-d,0,-c])}}return t}var Qa="ground";function Tl(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function zl(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],a=[-Math.sin(t),0,Math.cos(t)],r=Tl(o),i=n[0]*e.u+a[0]*e.v,s=n[2]*e.u+a[2]*e.v,l=r?r.elevation+(e.base!=null?e.base:Mt(r,i,s)):e.base??0;return{key:Qa,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:a,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[a[0],a[2]],unbounded:!0}}function Ue(o,e,t=Lt(o)){return e.face===Qa?zl(o,e):e.face.startsWith("wall:")?Ot(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function ko(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Lt(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(v=>Rl(v,Ka(o,v,v.overhang??e.overhang)));let t=ko(o);if(!t)return[];let n=t.rooms.flatMap(v=>v.points.map(b=>b[0])),a=t.rooms.flatMap(v=>v.points.map(b=>b[1])),r=o.settings.wall_exterior+e.overhang,i=Math.min(...n)-r,s=Math.max(...n)+r,l=Math.min(...a)-r,d=Math.max(...a)+r,c=t.elevation+t.height;if(e.type==="flat")return[Ja("main",null,i,l,s,d,c+Ya)];let u=s-i>=d-l,h=e.ridge==="short"?!u:u,f=(h?d-l:s-i)/2,p=f*Math.tan(e.pitch*yn),g=(v,b,x)=>h?[v,c+x,(l+d)/2+b]:[(i+s)/2+b,c+x,v],[m,S]=h?[i,s]:[l,d];return[-1,1].map(v=>vn(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",g(m,v*f,0),g(S,v*f,0),g(m,0,p),e.pitch,()=>[0,S-m]))}function Rl(o,e){let t=Vt(o),n=bn(o),a=(g,m,S)=>{let[v,b]=t.at(g,m);return[v,S,b]},r=Math.max(0,e.a),i=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=l-s;if(o.shape==="flat"||o.shape==="parapet"){let g=t.at(s,-r),m=t.at(l,t.w+i);return[Ja(o.id,o.id,Math.min(g[0],m[0]),Math.min(g[1],m[1]),Math.max(g[0],m[0]),Math.max(g[1],m[1]),o.eave_a+Ya)]}if(o.shape==="pent")return[vn(`${o.id}:a`,o.id,"a",a(s,-r,n.y(-r)),a(l,-r,n.y(-r)),a(s,t.w+i,n.y(t.w+i)),o.pitch_a,()=>[0,d])];let c=o.shape==="hip"||o.shape==="pyramid",u=o.shape==="pyramid"?(t.u1-t.u0)/2:c?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,h=c?t.u0+u-s:0,f=c?l-(t.u1-u):0,p=[];if(n.vr>.3){let g=Math.hypot(n.vr+r,n.rh-n.y(-r));p.push(vn(`${o.id}:a`,o.id,"a",a(s,-r,n.y(-r)),a(l,-r,n.y(-r)),a(s,n.vr,n.rh),o.pitch_a,m=>[h*(m/g),d-f*(m/g)]))}if(t.w-n.vr>.3){let g=Math.hypot(t.w+i-n.vr,n.rh-n.y(t.w+i));p.push(vn(`${o.id}:b`,o.id,"b",a(l,t.w+i,n.y(t.w+i)),a(s,t.w+i,n.y(t.w+i)),a(l,n.vr,n.rh),o.pitch_b,m=>[f*(m/g),d-h*(m/g)]))}if(c){let g=n.y(-r),m=n.y(t.w+i),S=[[`${o.id}:c`,"c",a(s,t.w+i,m),a(s,-r,g),a(t.u0+u,n.vr,n.rh)],[`${o.id}:d`,"d",a(l,-r,g),a(l,t.w+i,m),a(t.u1-u,n.vr,n.rh)]];for(let[v,b,x,T,$]of S){let P=Cl(v,o.id,b,x,T,$);P&&p.push(P)}}return p}function Cl(o,e,t,n,a,r){let i=Ht(Be(a,n));if(i<.3)return null;let s=Ve(Be(a,n)),l=Be(r,n),d=l[0]*s[0]+l[1]*s[1]+l[2]*s[2],c=[l[0]-s[0]*d,l[1]-s[1]*d,l[2]-s[2]*d],u=Ht(c);if(u<.3)return null;let h=Ve(c),f=Ve(ei(s,h));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let p=Ve([-h[0],0,-h[2]]),g=Math.atan2(h[1],Math.hypot(h[0],h[2]))/yn;return{key:o,section:e,side:t,flat:!1,o:n,eu:s,es:h,n:f,lu:i,ls:u,pitch:g,span:S=>{let v=Math.min(1,Math.max(0,S/u));return[d*v,i-(i-d)*v]},facing:[p[0],p[2]]}}function vn(o,e,t,n,a,r,i,s){let l=Ve(Be(a,n)),d=Ve(Be(r,n)),c=Ve(ei(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let u=Ve([-d[0],0,-d[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:d,n:c,lu:Ht(Be(a,n)),ls:Ht(Be(r,n)),pitch:i,span:s,facing:[u[0],u[2]]}}function Ja(o,e,t,n,a,r,i){let s=a-t>=r-n,l=s?a-t:r-n,d=s?r-n:a-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,i,n],eu:s?[1,0,0]:[0,0,1],es:s?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:s?[0,1]:[1,0]}}function Xa(o){let e=o.module_w||Al,t=o.module_h||Il;return o.portrait===!1?[t,e]:[e,t]}function Fl(o){return o.layout?.length?o.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function Za(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*yn:o.wall?Math.min(90,Math.max(0,e.tilt??0))*yn:0}function Ge(o,e){let[t,n]=Xa(e),a=Fl(e),r=Math.max(1,...a),s=(a.length-1)*Vl(o,e)+n*Math.cos(Za(o,e));return[r*t+(r-1)*xo,s]}function Vl(o,e){let[,t]=Xa(e),n=Za(o,e);return o.wall?t*Math.cos(n)+xo:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+xo}function Be(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function Ht(o){return Math.hypot(o[0],o[1],o[2])}function Ve(o){let e=Ht(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function ei(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}function ti(o,e){let[t,n]=Ge(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var me=.03,wn=o=>o&&o!=="none"?o:null;function ht(o,e=t=>wn(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let a of n.furniture){let r=e(a);if(a.type==="meter")t.grid??=r,t.gridExport??=wn(a.export);else if(a.type==="inverter"&&r&&!t.solar.includes(r))t.solar.push(r);else if(a.type==="home_battery"){r&&!t.battery.includes(r)&&t.battery.push(r);let i=wn(a.charge);i&&!t.charge.includes(i)&&t.charge.push(i),(r||i)&&t.batteries.push({power:r,charge:i});let s=wn(a.soc);s&&!t.soc.includes(s)&&t.soc.push(s)}}return t}function Mo(o){for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}async function ii(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),a=new Map;for(let r of e)a.set(r,(n?.[r]??[]).reduce((i,s)=>i+(typeof s.change=="number"?s.change:0),0));return a}catch{return null}}var Hl=.07;function ee(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),a=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-a:a}function Ol(o,e){return e.startsWith("sensor.")&&o.states[e]?.attributes.device_class==="power"}function Nt(o,e){if(Ol(o,e))return e;let t=o.entities?.[e]?.device_id;if(!t)return null;let n=_a(o,t),a=n?At(o,e):null;return ro(o,t).find(r=>r!==e&&(!n||a!==null&&At(o,r)===a))??null}function si(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),a=[],r=new Set;for(let i of e.floors)for(let s of i.placements){let l=Nt(o,s.entity_id);!l||n.has(l)||r.has(l)||(r.add(l),a.push({id:s.entity_id,powerEntity:l,floorId:i.id,x:s.x,z:s.z,power:Math.max(0,ee(o.states[l])??0)}))}return a}function li(o,e,t,n=ht(e)){let a=e.energy,r=a.grid??n.grid,i=r?ee(o.states[r],a.grid_invert):null;if(!a.grid&&n.gridExport){let g=Math.max(0,ee(o.states[n.gridExport])??0);i=Math.max(0,i??0)-g}let s=a.solar?ee(o.states[a.solar]):null;if(!a.solar&&n.solar.length){let g=n.solar.map(m=>ee(o.states[m])).filter(m=>m!==null);s=g.length?g.reduce((m,S)=>m+S,0):null}let l=a.battery?ee(o.states[a.battery],a.battery_invert):null;if(!a.battery&&n.batteries.length){let g=n.batteries.map(m=>{if(m.charge){let S=m.power?Math.max(0,ee(o.states[m.power])??0):0,v=Math.max(0,ee(o.states[m.charge])??0);return S-v}return m.power?ee(o.states[m.power],a.battery_invert):null}).filter(m=>m!==null);l=g.length?g.reduce((m,S)=>m+S,0):null}let c=(a.battery_soc?[a.battery_soc]:n.soc).map(g=>Number(o.states[g]?.state)).filter(g=>Number.isFinite(g)),u=c.length?c.reduce((g,m)=>g+m,0)/c.length:NaN,h=a.tariff?o.states[a.tariff]:void 0,f=Number(h?.state),p=a.consumption?ee(o.states[a.consumption]):null;return p!==null?p=Math.max(0,p):i!==null||s!==null||l!==null?p=Math.max(0,(i??0)+Math.max(0,s??0)+(l??0)):t.length&&(p=t.reduce((g,m)=>g+m.power,0)),{grid:i,solar:s===null?null:Math.max(0,s),battery:l,soc:Number.isFinite(u)?u:null,tariff:h&&Number.isFinite(f)?{value:f,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:p}}function Ye(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function Ke(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Ll(o,e){let t=o.length,n=o.map((a,r)=>{let i=o[(r+1)%t],s=i[0]-a[0],l=i[1]-a[1],d=Math.hypot(s,l)||1,c=-l/d,u=s/d;return{p:[a[0]+c*e[r],a[1]+u*e[r]],d:[s/d,l/d],n:[c,u]}});return o.map((a,r)=>{let i=n[(r-1+t)%t],s=n[r],l=i.d[0]*s.d[1]-i.d[1]*s.d[0];if(Math.abs(l)<1e-6)return[a[0]+s.n[0]*e[r],a[1]+s.n[1]*e[r]];let d=((s.p[0]-i.p[0])*s.d[1]-(s.p[1]-i.p[1])*s.d[0])/l;return[i.p[0]+i.d[0]*d,i.p[1]+i.d[1]*d]})}function jl(o){return Pe(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function So(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:a}=pt(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let r of o.rooms){if(r.points.length<3)continue;let{pts:i,flipped:s}=jl(r),l=i.length,d=i.map((h,f)=>{let p=s?(l-2-f+l)%l:f,g=a.some(m=>!m.exterior&&m.sources.some(S=>S.room_id===r.id&&S.edge===p));return Hl+(g?t/2:0)}),c=Ll(i,d).map(h=>Ye(n,h)),u=c.map((h,f)=>[h,c[(f+1)%l]]);for(let[h,f]of u)Ke(n,h,f);n.rings.set(r.id,u)}for(let r of a){if(r.exterior||!r.roomLeft||!r.roomRight)continue;let i=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2],s=kn(n,r.roomLeft,i),l=kn(n,r.roomRight,i);s!==null&&l!==null&&Ke(n,s,l)}return n}function kn(o,e,t){let n=o.rings.get(e);if(!n)return null;let a=null;for(let i of n){let s=o.pos[i[0]],l=o.pos[i[1]],d=l[0]-s[0],c=l[1]-s[1],u=d*d+c*c||1,h=Math.min(1,Math.max(0,((t[0]-s[0])*d+(t[1]-s[1])*c)/u)),f=[s[0]+d*h,s[1]+c*h],p=Math.hypot(t[0]-f[0],t[1]-f[1]);(!a||p<a.d)&&(a={seg:i,q:f,d:p})}if(!a)return null;let r=Ye(o,a.q);return Ke(o,r,a.seg[0]),Ke(o,r,a.seg[1]),r}function $n(o,e,t){let n=o.pos[t],a=kn(o,e.id,n);if(a===null)return!1;let r=o.pos[a],i=o.pos[o.adj[a][0].to],s=o.pos[o.adj[a][1].to],l=Math.hypot(s[0]-i[0],s[1]-i[1])||1,d=[(s[0]-i[0])/l,(s[1]-i[1])/l],c=(n[0]-r[0])*d[0]+(n[1]-r[1])*d[1],u=(n[1]-r[1])*d[0]-(n[0]-r[0])*d[1];if(Math.abs(c)<.01||Math.abs(u)<.01)return Ke(o,t,a),!0;let h=[r[0]+d[0]*c,r[1]+d[1]*c],f=[r[0]-d[1]*u,r[1]+d[0]*u],p=Ye(o,W(f,e.points)||!W(h,e.points)?f:h);return Ke(o,a,p),Ke(o,p,t),!0}function Dt(o,e){let t=o.rooms.filter(r=>r.points.length>=3),n=t.find(r=>W(e,r.points));if(n)return n;let a=null;for(let r of t)for(let i of r.points){let s=Math.hypot(e[0]-i[0],e[1]-i[1]);(!a||s<a.d)&&(a={room:r,d:s})}return a?.room??null}function ci(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),a=o.pos.map(()=>!1);for(t[e]=0;;){let r=-1;for(let i=0;i<t.length;i++)!a[i]&&t[i]<1/0&&(r<0||t[i]<t[r])&&(r=i);if(r<0)break;a[r]=!0;for(let{to:i,w:s}of o.adj[r])t[r]+s<t[i]-1e-9&&(t[i]=t[r]+s,n[i]=r)}return{dist:t,prev:n}}function ni(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var oi=new WeakMap;function Dl(o,e){let t=Mo(o),n=o.floors.find(c=>c.id===t.floor_id),a=[],{wall_exterior:r,wall_interior:i}=o.settings,s=new Map,l=new Map;e.forEach((c,u)=>l.set(c.floorId,[...l.get(c.floorId)??[],u]));let d=o.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let u=c.elevation>n.elevation,h=l.get(c.id),f=ni(h,e);a.push({floorId:n.id,a:[t.x,me,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:h,kind:f});let p=Math.abs(c.elevation-n.elevation);a.push({floorId:c.id,a:[t.x,u?-.2:c.height,t.z],b:[t.x,me,t.z],dist:p,members:h,kind:f}),s.set(c.id,p+.25)}for(let c of d){let u=So(c,r,i),h=Dt(c,[t.x,t.z]);if(!h)continue;let f=Ye(u,[t.x,t.z]);if(!$n(u,h,f))continue;let p=[];for(let b of l.get(c.id)){let x=e[b],T=Dt(c,[x.x,x.z]);if(!T)continue;let $=Ye(u,[x.x,x.z]);$n(u,T,$)&&p.push({node:$,member:b})}let{dist:g,prev:m}=ci(u,f),S=new Map;for(let b of p)if(Number.isFinite(g[b.node]))for(let x=b.node;m[x]>=0;x=m[x]){let T=m[x],$=`${T}>${x}`,P=S.get($)??{a:T,b:x,members:[]};P.members.push(b.member),S.set($,P)}let v=s.get(c.id)??0;for(let{a:b,b:x,members:T}of S.values()){let $=u.pos[b],P=u.pos[x],y=ni(T,e);a.push({floorId:c.id,a:[$[0],me,$[1]],b:[P[0],me,P[1]],dist:v+g[b],members:T,kind:y})}}return a}function di({building:o,consumers:e,summary:t,battery:n,fieldPower:a,devicePower:r}){let i=Mo(o);if(!i)return[];let s=o.floors.find(M=>M.id===i.floor_id);if(!s)return[];let l=M=>r?.get(M),d=$o(o,"inverter"),c=$o(o,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=M=>{let A=null;for(let C of d)C.floorId===M.floorId&&(!A||Math.hypot(C.x-M.x,C.z-M.z)<Math.hypot(A.x-M.x,A.z-M.z))&&(A=C);return A},h=M=>l(M.id)??(c.length===1?t.battery??0:0),f=new Map;for(let M of c){let A=u(M);A&&f.set(M.id,A)}let p=e.map(M=>({floorId:M.floorId,x:M.x,z:M.z,kind:M.wallbox?"wallbox":"consumer",power:M.power}));for(let M of c)!f.has(M.id)&&t.battery!==null&&p.push({floorId:M.floorId,x:M.x,z:M.z,kind:"battery",power:Math.abs(h(M))});let g=`${i.floor_id}:${i.x},${i.z}|${p.map(M=>`${M.floorId}:${M.x},${M.z}:${M.kind}`).join(";")}`,m=oi.get(o);m||oi.set(o,m=new Map);let S=m.get(g);S||(S=Dl(o,p),m.clear(),m.set(g,S));let v=S.map(M=>({floorId:M.floorId,a:M.a,b:M.b,dist:M.dist,power:M.members.reduce((A,C)=>A+p[C].power,0),kind:M.kind})),b=t.grid!==null?Eo(o):null,x=o.settings.roof.cables??[],T=M=>x.find(A=>A.id===M),$=(M,A)=>M.map(C=>({...C,key:A}));if(b){let M=t.grid>=0,A=T("grid"),C=A?xn(o,A,[b.end[0],s.elevation+Math.max(me,b.height),b.end[1]],[i.x,s.elevation+.4+1.1,i.z]):[...b.height>.05?[[b.end[0],b.height,b.end[1]]]:[],[b.end[0],me,b.end[1]],[b.wall[0],me,b.wall[1]],[i.x,me,i.z]],U=A?jt(o,M?C:[...C].reverse(),Math.abs(t.grid),M?"grid":"export",s):pi(s.id,M?C:[...C].reverse(),Math.abs(t.grid),M?"grid":"export",0);v.push(...$(U,"grid"))}if(t.battery!==null&&t.battery>0)for(let M of v)M.kind==="battery"&&([M.a,M.b]=[M.b,M.a]);let P=o.settings.roof.solar??[],y=o.settings.roof.strings??[],E=new Map;if(a&&P.length){let M=[...Lt(o),...Ot(o)];for(let A of P){let C=a.get(A.id)??0,U=A.string?y.find(oe=>oe.id===A.string)?.inverter:null,L=U?d.find(oe=>oe.id===U)??null:null;if(!L&&d.length){let oe=Ue(o,A,M),Me=oe?ti(oe,A):[A.u,A.v];L=d.reduce((He,mt)=>!He||Math.hypot(mt.x-Me[0],mt.z-Me[1])<Math.hypot(He.x-Me[0],He.z-Me[1])?mt:He,null)}L&&E.set(L.id,(E.get(L.id)??0)+C);let j=L??{floorId:i.floor_id,x:i.x,z:i.z},Q=L?1.1+L.h:1.5,D=T(`solar:${A.id}`),B=D?Nl(o,A):null,ae=o.floors.find(oe=>oe.id===j.floorId);D&&B&&ae?v.push(...$(jt(o,xn(o,D,B,[j.x,ae.elevation+Q,j.z]),C,"solar",ae),`solar:${A.id}`)):v.push(...$(Wl(o,A,C,j,Q),`solar:${A.id}`))}}else t.solar!==null&&!d.length&&v.push({floorId:s.id,a:[i.x+.08,s.height+.6,i.z+.08],b:[i.x+.08,me,i.z+.08],dist:0,power:t.solar,kind:"solar"});for(let M of d){let A=1.1+M.h,C=c.filter(j=>f.get(j.id)===M),U=l(M.id);if(U===void 0){U=E.get(M.id)??(d.length===1?t.solar??0:0);for(let j of C)U+=h(j)}let L=o.floors.find(j=>j.id===M.floorId);if(t.solar!==null||t.battery!==null){let j=T(`inv:${M.id}`),Q=j&&L?jt(o,xn(o,j,[M.x,L.elevation+A,M.z],[i.x,s.elevation+1.5,i.z]),Math.max(0,U),"inverter",L):ai(o,M,A,{floorId:i.floor_id,x:i.x,z:i.z},1.5,Math.max(0,U),"inverter",0);v.push(...$(Q,`inv:${M.id}`))}for(let j of C){let Q=h(j);if(t.battery===null&&l(j.id)===void 0)continue;let D=j.variant==="wall"?.5+j.h:.9,B=T(`bat:${j.id}`),ae=B&&L?jt(o,xn(o,B,[M.x,L.elevation+A-.1,M.z],[j.x,L.elevation+D,j.z]),Math.abs(Q),"battery",L):ai(o,M,A-.1,j,D,Math.abs(Q),"battery",0);v.push(...$(Q<=0?ae:ae.map(oe=>({...oe,a:oe.b,b:oe.a})).reverse(),`bat:${j.id}`))}}return v}function Eo(o){let e=Mo(o),t=e?o.floors.find(f=>f.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:a}=o.settings,{walls:r}=pt(t.rooms,{exterior:n,interior:a},t.walls??[]),i=$o(o,"grid_point")[0],s=r.filter(f=>f.exterior);if(i){let f=null;for(let m of s){let S=m.b[0]-m.a[0],v=m.b[1]-m.a[1],b=i.x-e.x,x=i.z-e.z,T=b*v-x*S;if(Math.abs(T)<1e-9)continue;let $=((m.a[0]-e.x)*v-(m.a[1]-e.z)*S)/T,P=((m.a[0]-e.x)*x-(m.a[1]-e.z)*b)/T;if($<=0||$>1||P<0||P>1||f&&$>=f.t)continue;let y=Math.hypot(S,v)||1;f={q:[e.x+b*$,e.z+x*$],out:[v/y,-S/y],t:$}}let p=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[e.x,e.z],g=o.floors.flatMap(m=>m.furniture).find(m=>m.id===i.id)?.mount_y??0;return{floorId:t.id,wall:p,end:[i.x,i.z],height:Math.max(0,g)}}let l=null;for(let f of s){let p=f.b[0]-f.a[0],g=f.b[1]-f.a[1],m=p*p+g*g||1,S=Math.min(1,Math.max(0,((e.x-f.a[0])*p+(e.z-f.a[1])*g)/m)),v=[f.a[0]+p*S,f.a[1]+g*S],b=Math.hypot(e.x-v[0],e.z-v[1]),x=Math.sqrt(m);(!l||b<l.d)&&(l={q:v,out:[g/x,-p/x],d:b})}if(!l)return null;let{q:d,out:c}=l,u=0;for(let f of o.floors)for(let p of f.outdoor??[]){let g=p.points.length;for(let m=0;m<g;m++){let S=p.points[m],v=p.points[(m+1)%g],b=v[0]-S[0],x=v[1]-S[1],T=c[0]*x-c[1]*b;if(Math.abs(T)<1e-9)continue;let $=((S[0]-d[0])*x-(S[1]-d[1])*b)/T,P=((S[0]-d[0])*c[1]-(S[1]-d[1])*c[0])/T;$>0&&P>=0&&P<=1&&(u=Math.max(u,Math.min(15,$)))}}let h=u>n+1?u:n+2.5;return{floorId:t.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*h,d[1]+c[1]*h],height:0}}function $o(o,e){let t=[];for(let n of o.floors)for(let a of n.furniture)a.type===e&&t.push({id:a.id,type:a.type,floorId:n.id,x:a.x,z:a.z,h:a.h,variant:a.variant??null});return t}var ri=new WeakMap;function ui(o,e,t,n){let a=`${e.id}:${t.join(",")}>${n.join(",")}`,r=ri.get(o);r||ri.set(o,r=new Map);let i=r.get(a);if(i)return i;let{wall_exterior:s,wall_interior:l}=o.settings,d=So(e,s,l),c=[t,n],u=Dt(e,t),h=Dt(e,n);if(u&&h){let f=Ye(d,t),p=Ye(d,n);if($n(d,u,f)&&$n(d,h,p)){let{dist:g,prev:m}=ci(d,f);if(Number.isFinite(g[p])){c.length=0;for(let S=p;S>=0;S=m[S])c.unshift(d.pos[S])}}}return r.set(a,c),c}function ai(o,e,t,n,a,r,i,s){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let d=ui(o,l,[e.x,e.z],[n.x,n.z]),c=[[e.x,t,e.z],...d.map(u=>[u[0],me,u[1]]),[n.x,a,n.z]];return pi(l.id,c,r,i,s)}function pi(o,e,t,n,a){let r=[];for(let i=0;i+1<e.length;i++){let s=e[i],l=e[i+1],d=Math.hypot(l[0]-s[0],l[1]-s[1],l[2]-s[2]);d<1e-4||(r.push({floorId:o,a:s,b:l,dist:a,power:t,kind:n}),a+=d)}return r}function xn(o,e,t,n){let r=(o.floors.find(i=>i.id===e.floor_id)?.elevation??0)+Math.max(me,e.height);return[t,...e.points.map(i=>[i[0],r,i[1]]),n]}function Nl(o,e){let t=Ue(o,e,[...Lt(o),...Ot(o)]);if(!t)return null;let[n,a]=Ge(t,e),r=e.u+n/2,i=t.unbounded?e.v+a/2:e.v;return[t.o[0]+t.eu[0]*r+t.es[0]*i,t.o[1]+t.eu[1]*r+t.es[1]*i,t.o[2]+t.eu[2]*r+t.es[2]*i]}function ql(o,e,t){let{wall_exterior:n,wall_interior:a}=o.settings,r=So(e,n,a),i=Dt(e,t),s=i?kn(r,i.id,t):null;return s===null?t:r.pos[s]}function jt(o,e,t,n,a){let r=[...o.floors].sort((d,c)=>d.elevation-c.elevation),i=d=>{let c=a;for(let u of r)d>=u.elevation-.01&&(c=u);return c},s=[],l=0;for(let d=0;d+1<e.length;d++){let c=e[d],u=e[d+1];if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<1e-4)continue;let f=[];if(Math.abs(u[1]-c[1])>.01){let p=Math.min(c[1],u[1]),g=Math.max(c[1],u[1]);for(let m of r)m.elevation>p+.01&&m.elevation<g-.01&&f.push(m.elevation);u[1]<c[1]&&f.reverse()}for(let p of[...f,u[1]]){let g=(p-c[1])/(u[1]-c[1]||1),m=Math.abs(u[1]-c[1])>.01?[c[0]+(u[0]-c[0])*g,p,c[2]+(u[2]-c[2])*g]:u,S=i((c[1]+m[1])/2),v=Math.hypot(m[0]-c[0],m[1]-c[1],m[2]-c[2]);v>1e-4&&s.push({floorId:S.id,a:[c[0],c[1]-S.elevation,c[2]],b:[m[0],m[1]-S.elevation,m[2]],dist:l,power:t,kind:n}),l+=v,c=m}}return s}function Wl(o,e,t,n,a){let r=[...Lt(o),...Ot(o)],i=Ue(o,e,r),s=o.floors.find(m=>m.id===n.floorId);if(!i||!s)return[];let[l,d]=Ge(i,e),c=(m,S)=>[i.o[0]+i.eu[0]*m+i.es[0]*S,i.o[1]+i.eu[1]*m+i.es[1]*S,i.o[2]+i.eu[2]*m+i.es[2]*S],u=e.u+l/2,h=s.elevation+me,f=[],p;if(i.unbounded){let m=c(u,e.v+d/2);p=[m[0],h,m[2]],f.push(p)}else if(i.wall){let m=c(u,e.v);p=[m[0],h,m[2]],f.push(m,p)}else{let m=c(u,e.v),S=ko(o)??s,v=Math.max(s.elevation+.5,Math.min(m[1]-.25,S.elevation+S.height-.12));p=[m[0],v,m[2]],f.push(m)}let g=ql(o,s,[p[0],p[2]]);f.push([g[0],p[1],g[1]]),Math.abs(p[1]-h)>.05&&f.push([g[0],h,g[1]]);for(let m of ui(o,s,g,[n.x,n.z]).slice(1))f.push([m[0],h,m[1]]);return f.push([n.x,s.elevation+a,n.z]),jt(o,f,t,"solar",s)}function hi(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),a=new Array(n).fill(0);for(let i of Object.values(o))for(let s of i){let l=typeof s.start=="number"?s.start:Date.parse(s.start),d=Math.floor((l-t.getTime())/3e5);d<0||d>=n||typeof s.mean!="number"||(a[d]+=Math.max(0,s.mean))}return{kwh:a.reduce((i,s)=>i+s*5/60/1e3,0),peak:Math.max(0,...a),curve:a}}async function fi(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function Po(o,e){let n=l=>42-(e>0?l/e*36:0),a=o.map((l,d)=>[d/288*220,n(l)]),r=a.map(([l,d],c)=>`${c?"L":"M"}${l.toFixed(1)} ${d.toFixed(1)}`).join(" "),[i,s]=a[a.length-1];return{line:r,area:`${r} L${i.toFixed(1)} 44 L0 44 Z`,endX:i,endY:s}}function mi(o){return Math.max(1,o.rows*o.cols-(o.skip?.length??0))}var Bl=400;function gi(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let a=Math.min(1,(e.get(n.id)??0)/(mi(n)*(n.wp??Bl)));t.set(n.id,a>.003?Math.pow(a,.6):0)}return t}function _i(o,e,t){let n=new Map,a=e.settings.roof.solar??[],r=e.settings.roof.strings??[],i=mi,s=[],l=0,d=new Map;for(let h of a){let f=h.entity&&h.entity!=="none"?ee(o.states[h.entity]):null;if(f!==null){n.set(h.id,Math.max(0,f)),l+=Math.max(0,f);continue}let p=h.string?r.find(m=>m.id===h.string):void 0,g=p?.entity&&p.entity!=="none"?ee(o.states[p.entity]):null;if(p&&g!==null){d.set(p.id,[...d.get(p.id)??[],h]);continue}s.push(h)}for(let[h,f]of d){let p=r.find(S=>S.id===h),g=Math.max(0,ee(o.states[p.entity])??0),m=f.reduce((S,v)=>S+i(v),0);for(let S of f)n.set(S.id,g*i(S)/m);l+=g}let c=Math.max(0,(t??0)-l),u=s.reduce((h,f)=>h+i(f),0);for(let h of s)n.set(h.id,u?c*i(h)/u:0);return n}var _e={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function bi(o,e){if(o==="grid")return _e.import;if(o==="export")return _e.export;if(o==="solar")return _e.solar;if(o==="battery")return _e.battery;if(o==="wallbox")return _e.wallbox;if(o==="inverter")return(e.solar??0)>5?_e.solar:_e.battery;let t=[[Math.max(0,e.grid??0),_e.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),_e.solar],[Math.max(0,e.battery??0),_e.battery]],[n]=t.reduce((a,r)=>r[0]>a[0]?r:a);return n>0?t.find(a=>a[0]===n)[1]:_e.house}var Ao=["neon","blueprint","day"],qt={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Mn={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function vi(o,e){let t=Mn[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[a,r]=t[n],[i,s]=t[n-1];if(e<=a){let l=(e-i)/(a-i);return[s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l,s[2]+(r[2]-s[2])*l]}}return t[t.length-1][1]}function yi(o,e,t){let n=new Map;for(let a of e.floors)for(let r of a.rooms){let i=Ae(o,a,r,t);i!==null&&n.set(r.id,i)}return n}function wi(o){let e=Mn[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([a,r])=>`rgb(${r.map(i=>Math.round(i*255)).join(",")}) ${Math.round((a-t)/(n-t)*100)}%`).join(", ")})`}function we(o,e){if(!Yn(e))return z(o,`furn_${e}`);let t=le(e);return t?Gr(t):z(o,"pack_missing_item")}var Io=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Sn(o){return o&&o!=="none"?o:null}function Wt(o,e){if(e.type!=="parking")return null;let t=Sn(e.entity);if(t){let r=o.states[t];if(!r||!Io.has(r.state.toLowerCase()))return null}let n=e.vehicle??null,a=Sn(e.type_entity);if(a&&e.types?.length){let r=(o.states[a]?.state??"").trim().toLowerCase();if(r){let i=l=>l.trim().toLowerCase(),s=e.types.find(l=>i(l.state)===r)??e.types.find(l=>i(l.state)&&r.includes(i(l.state)));s&&(n=s.vehicle)}}return n&&le(n)?n:null}function To(o,e){let t=new Map;for(let n of e.floors)for(let a of n.furniture){let r=Wt(o,a);r&&t.set(a.id,r)}return t}function xi(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[Sn(t.entity),Sn(t.type_entity)])).filter(e=>!!e)}function ki(o,e){let t=le(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var Bt=1800*1e3,Ul=new Set(["motion","occupancy","presence"]);function $i(o,e){return e.startsWith("binary_sensor.")&&Ul.has(String(o.states[e]?.attributes.device_class))}function Ut(o,e){let t=[],n=new Set,a=(r,i,s,l)=>{n.has(r)||(n.add(r),t.push({entity:r,floorId:i,x:s,z:l}))};for(let r of e.floors)for(let i of r.placements)if($i(o,i.entity_id))a(i.entity_id,r.id,i.x,i.z);else if(F(i.entity_id)==="camera")for(let s of Re(o,i.entity_id))a(s,r.id,i.x,i.z);for(let r of e.floors)for(let i of r.rooms){if(!i.area_id||i.points.length<3)continue;let[s,l]=he(i.points);for(let d of ne(o,i.area_id))$i(o,d)&&a(d,r.id,s,l)}return t}function Mi(o,e,t,n=Bt){let a=t-n,r=[];for(let[i,s]of Object.entries(o)){let l="";for(let d of s){let c=(d.lc??d.lu)*1e3;d.s==="on"&&l!=="on"&&c>=a&&c<=t&&r.push({entity:i,time:c}),l=d.s}}for(let i of e){let s=i.lastChanged??NaN;i.state!=="on"||!(s>=a&&s<=t)||r.some(l=>l.entity===i.entity&&Math.abs(l.time-s)<2e3)||r.push({entity:i.entity,time:s})}return r.sort((i,s)=>i.time-s.time)}function Si(o,e,t,n=Bt){let a=new Map(o.map(i=>[i.entity,i])),r=[];for(let i of e){let s=a.get(i.entity);if(!s)continue;let l=r[r.length-1];l&&l.entity===i.entity&&i.time-l.time<6e4||r.push({...s,time:i.time,age:Math.min(1,Math.max(0,(t-i.time)/n))})}return r.slice(-40)}function En(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit"})}var Ei='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Pn=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function zo(o,e){let t=[],n=qe(o,e.floors),a=e.floors.length>1;for(let r of e.floors){let i=(c,u)=>r.rooms.find(h=>h.points.length>=3&&W([c,u],h.points))??null,s=(c,u)=>[i(c,u)?.name,a?r.name:null].filter(Boolean).join(" \xB7 ");for(let c of r.rooms){if(c.points.length<3)continue;let[u,h]=he(c.points);t.push({kind:"room",name:c.name,where:a?r.name:"",floorId:r.id,roomId:c.id,entity:null,icon:null,x:u,z:h,y:0})}let l=new Set,d=(c,u,h,f)=>{l.has(c)||!o.states[c]||(l.add(c),t.push({kind:"device",name:K(o,c),where:s(u,h),floorId:r.id,roomId:i(u,h)?.id??null,entity:c,icon:F(c),x:u,z:h,y:f}))};for(let c of r.placements)d(c.entity_id,c.x,c.z,c.y??rt(F(c.entity_id)??"sensor",r.height,c.mount));for(let c of r.furniture){let u=n.get(c.id),h=u?.entity??u?.power;h&&d(h,c.x,c.z,Math.min(r.height-.3,Math.max(.5,c.h)))}}return t}function Pi(o,e,t=8){let n=Pn(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let a=o.filter(s=>{let l=Pn(`${s.name} ${s.where} ${s.entity??""}`);return n.every(d=>l.includes(d))}),r=Pn(e.trim()),i=s=>(Pn(s.name).startsWith(r)?0:2)+(s.kind==="room"?0:1);return a.sort((s,l)=>i(s)-i(l)||s.name.localeCompare(l.name)).slice(0,t)}var Gl=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Kl=[2200,2700,3200,4e3,5e3,6500],Yl=["hs","rgb","rgbw","rgbww","xy"],Ql=4,Ai=16,Ii=32,Jl=128;function Co(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>Yl.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Fo(o){return((o.attributes.supported_features??0)&Ql)!==0&&typeof o.attributes.current_position=="number"}var Ro=class extends se{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{F(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return _`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?_`<img src=${n} alt=${K(this.hass,this.entity)} />`:_`<span class="qm-note">${ce(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return z(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:K(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){ve(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,a)=>{let r=a/t*Math.PI*2-Math.PI/2;return _`<div class="qm-at" style="left:${50+Math.cos(r)*39}%;top:${50+Math.sin(r)*39}%">${n}</div>`})}renderLight(e){let t=Co(e),n=e.state==="on",a=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,r=t.color?Gl.map(i=>_`<button class="qm-swatch" style="background:rgb(${i.join(",")})" aria-label=${`RGB ${i.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:i})}></button>`):t.temp?Kl.map(i=>_`<button class="qm-swatch" style="background:${Xl(i)}" aria-label=${`${i} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:i})}></button>`):[];return _`<div class="qm-ring ${r.length?"":"qm-ring-small"}">
        ${this.ring(r)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${a} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?_`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,a))}
            aria-label=${this.t("brightness")}
            @change=${i=>this.call("light","turn_on",{brightness_pct:Number(i.target.value)})}
          />`:w}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",a=Fo(e),r=(d,c,u,h=!1)=>_`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${c} @click=${u}>${d}</button>`,i=d=>t!==null&&Math.abs(t-d)<3,s=[r("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),i(100)),...a?[75,50].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),i(d))):[],r("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),i(0)),...a?[25].map(d=>r(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),i(d))):[],r("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return _`<div class="qm-ring">
        ${this.ring(s)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:ce(this.hass,e)}</b>
        </button>
      </div>
      ${a?_`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:w}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Jl&&n!==null?_`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${a=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(a.target.value)})}
      /></label>`:t&(Ai|Ii)?_`<div class="qm-tilt-buttons">
        ${t&Ai?_`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:w}
        ${t&Ii?_`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:w}
      </div>`:w}renderCar(e){let t=e.entities,n=(u,h,f,p={})=>{this.hass.callService(u,h,{entity_id:f,...p})},a=t.lock,r=!!a&&a.startsWith("lock."),i=u=>/^(switch|input_boolean|fan|light)\./.test(u),s=t.climate,l=!!s&&s.startsWith("climate."),d=t.charging&&i(t.charging)?t.charging:null,c=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return _`<p class="qm-car-line">${c||ce(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${r||a&&i(a)?_`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(r?n("lock","unlock",a):n("homeassistant","turn_off",a)):r?n("lock","lock",a):n("homeassistant","turn_on",a)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:w}
        ${s?_`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",s)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:w}
        ${d?_`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",d)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:w}
        ${!r&&!s&&!d?_`<p class="qm-note">${this.t("car_no_controls")}</p>`:w}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",a=e.state==="off"||e.state==="standby",r=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,i=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),s=typeof t.entity_picture=="string"?t.entity_picture:null;return _`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${a} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${s?`background-image:url(${s})`:""} @click=${()=>this.call("media_player",a?"turn_on":n?"media_pause":"media_play")}>
          <span>${a?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${a} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${i?_`<p class="qm-media-title">${i}</p>`:w}
      ${r!==null?_`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(r)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:w}
      ${this.renderPlay(e)}`}renderPlay(e){if(!O("sound"))return w;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return w;let a=e.attributes.source;return _`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(r=>_`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:r.type,media_content_id:r.content})}>
            ▶ ${r.label}
          </button>`)}
        ${t.map(r=>_`<button class="qm-chip ${r===a?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:r})}>${r}</button>`)}
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return _`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${ce(this.hass,e)}</b>
      </button>
    </div>`}render(){let e=this.hass?.states[this.entity];if(!e)return w;let t=F(this.entity),n=this.car?this.renderCar(this.car):q(e)?_`<p class="qm-note">${ce(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&O("sound")?this.renderMedia(e):this.renderToggle(e);return _`<div class="qm" role="dialog" aria-label=${K(this.hass,this.entity)}>
      <div class="qm-title">${K(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[ye,de`
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
    `]};function Xl(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,a)=>Math.round(n+(a-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Ro);var Zl=new URL(import.meta.url),ec=new URL("./neonplan3d-3d.js?v=e1898a542370",Zl).href,Ti;function Vo(){return Ti??=import(ec),Ti}var zi=.3;function Gt(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,a=o.height??zi,r=[];if(o.heights)t&&r.push([t.x,t.y,t.z]),o.points.forEach(([i,s],l)=>r.push([i,o.heights?.[l]??a,s])),n&&r.push([n.x,n.y,n.z]);else{if(!t||!n)return[];r.push([t.x,t.y,t.z],[t.x,a,t.z]);for(let[i,s]of o.points)r.push([i,a,s]);r.push([n.x,a,n.z],[n.x,n.y,n.z])}return r.filter((i,s)=>s===0||Ho(i,r[s-1])>.001)}function Ho(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function Oo(o){let e=0;for(let t=1;t<o.length;t++)e+=Ho(o[t-1],o[t]);return e}function An(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[a,r]=[o[n-1],o[n]],i=Ho(a,r);if(!(i<1e-6)){if(t<=i||n===o.length-1){let s=Math.min(1,t/i),l=[(r[0]-a[0])/i,(r[1]-a[1])/i,(r[2]-a[2])/i];return{p:[a[0]+(r[0]-a[0])*s,a[1]+(r[1]-a[1])*s,a[2]+(r[2]-a[2])*s],dir:l,seg:n-1}}t-=i}}return null}function Kt(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function Lo(o){let{kind:e,id:t}=Kt(o);return e&&t?`${e}:${t}`:o}function tc(o,e){let{w:t,d:n,h:a}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,a*.55,0]:e==="pressure"?[t*.05,a*.9,0]:null;if(o.type==="pool_filter"){let r=Math.min(t,n)/2;if(o.variant==="side6"){let l=r+.08;return e==="pump"?[l,a*.6,0]:e==="return"?[l+.06,a*.48,0]:e==="waste"?[l,a*.36,0]:null}let i=a*.89,s=r*.45+.04;return e==="pump"?[-s,i,0]:e==="return"?[s,i,0]:e==="waste"?[0,i,-s]:null}return o.type==="pool_heat_pump"?e==="in"?[t/2+.04,a*.25,-n*.2]:e==="out"?[t/2+.04,a*.45,-n*.2]:null:null}function Ri(o,e){let t=tc(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[a,r]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*a-t[2]*r,y:t[1],z:o.z+t[0]*r+t[2]*a}}function Ci(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}var Fi=new Set(["skimmer","drain"]),jo=new Set(["backwash","rinse","waste"]),Vi=o=>`port:${o}`,Hi=o=>`dev:${o}`,Oi=o=>!!o.fittings?.some(e=>e.kind==="valve"&&e.open===!1);function Li(o){let e=new Map(o.pipes.map(b=>[b.id,{active:!1,warm:!1,waste:!1}]));if(!o.pumpOn)return e;let t=new Map(o.pipes.map(b=>[b.id,Kt(b.from).port])),n=o.pipes.map(b=>({...b,from:b.from?Lo(b.from):`loose:${b.id}:a`,to:b.to?Lo(b.to):`loose:${b.id}:b`})),a=new Map(o.devices.map(b=>[Hi(b.id),b])),r=new Map(o.ports.map(b=>[Vi(b.id),b])),i=b=>{let x=a.get(b);return!!x&&x.type==="pool_valve"&&x.open===!1},s=new Map,l=new Map;for(let b of n)s.set(b.from,[...s.get(b.from)??[],b]),l.set(b.to,[...l.get(b.to)??[],b]);let d=b=>r.get(b)?.kind==="waste",c=b=>a.get(b)?.type==="pool_heat_pump",u=new Map,h=(b,x=new Set)=>{let T=u.get(b.id);if(T)return T;if(x.has(b.id))return{heat:!1,waste:!1};x.add(b.id);let $=c(b.to),P=d(b.to);if(!$||!P)for(let E of s.get(b.to)??[]){let M=h(E,x);$||=M.heat,P||=M.waste}let y={heat:$,waste:P};return u.set(b.id,y),y},f=o.devices.filter(b=>b.type==="pool_pump").map(b=>Hi(b.id)),p=f.length?f:o.ports.filter(b=>Fi.has(b.kind)).map(b=>Vi(b.id)),g=new Set,m=(b,x,T)=>{let $=`${b}|${x}|${T}`;if(g.has($)||(g.add($),i(b)))return;let P=s.get(b)??[],y=a.get(b);if(y?.type==="pool_filter"){let E=y.valve??"filter";if(E==="closed")return;let M=jo.has(E)?"waste":"return";P=P.filter(A=>{let C=t.get(A.id);return C?C===M:h(A).waste===jo.has(E)}),jo.has(E)&&(T=!0)}else if(P.length>1){let E=P.filter(A=>h(A).heat),M=P.filter(A=>!h(A).heat);E.length&&M.length&&(P=o.heaterOn?E:M)}y?.type==="pool_heat_pump"&&o.heating&&(x=!0);for(let E of P){if(i(E.to)||Oi(E))continue;let M=e.get(E.id);M.active=!0,M.warm||=x,M.waste||=T,m(E.to,x,T)}},S=new Set,v=b=>{for(let x of l.get(b)??[])S.has(x.id)||i(x.from)||Oi(x)||(S.add(x.id),v(x.from))};if(f.length){for(let x of f)v(x);let b=(x,T=new Set)=>T.has(x.id)?!1:(T.add(x.id),Fi.has(r.get(x.from)?.kind??"")?!0:(l.get(x.from)??[]).some($=>S.has($.id)&&b($,T)));for(let x of S){let T=n.find($=>$.id===x);b(T)&&(e.get(x).active=!0)}}for(let b of p)m(b,!1,!1);return e}var nc=[.25,.7,1],oc=[1,.45,.18],rc=[.75,.6,.35],ac=900;function Do(o){return o?.waste?rc:o?.warm?oc:nc}function ji(o,e,t){let n=[];for(let a of o){let r=Gt(a,t);if(r.length<2)continue;let i=e.get(a.id),s=Do(i),l=0;for(let d=1;d<r.length;d++){let[c,u]=[r[d-1],r[d]],h=Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2]);h<.01||(n.push({floorId:a.floor_id,a:c,b:u,dist:l,power:i?.active?ac:0,color:s}),l+=h)}}return n}function Di(o,e,t){let n=t.pool??{},a=rn(e,t);return r=>{let{kind:i,id:s,port:l}=Kt(r);if(i==="port"){let d=n.ports?.find(u=>u.id===s);if(!d)return null;let c=d.kind==="skimmer"?a:d.kind==="drain"?a-1.2:d.kind==="inlet"?a-.3:.02;return{x:d.x,z:d.z,y:c}}if(i==="joint"){let d=n.joints?.find(c=>c.id===s);return d?Ci(d,l):null}if(i!=="dev")return null;for(let d of o.floors){let c=d.furniture.find(f=>f.id===s);if(!c||!St.includes(c.type))continue;let u=l?Ri(c,l):null;if(u)return{...u,y:u.y+pe(d,c)};let h=c.type==="pool_filter"?c.h*.88:c.type==="pool_dosing"?.95:c.type==="pool_valve"?ea:c.type==="pool_pump"?.2:.3;return{x:c.x,z:c.z,y:h+pe(d,c)}}return null}}var Ni=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function ic(o,e,t){let n=Ni(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let a of e.floors)for(let r of a.rooms)if([r.name,r.area_id??"",r.area_id?o.areas?.[r.area_id]?.name??"":""].filter(Boolean).map(Ni).includes(n))return{floorId:a.id,room:r};return null}function sc(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function qi(o,e){let t=[],n=new Map;for(let a of e.presence){let r=o.states[a.person];if(!r||!a.sensor||r.state!=="home"&&r.state!=="on")continue;let i=o.states[a.sensor];if(!i)continue;let s=ic(o,e,i.state);if(!s)continue;let l=n.get(s.room.id)??0;n.set(s.room.id,l+1);let[d,c]=he(s.room.points),u=-Math.PI/2+.9+l*1.15,h=.75,f=r.attributes.friendly_name??a.person;t.push({id:a.person,name:f,initials:sc(f),picture:r.attributes.entity_picture??null,floorId:s.floorId,roomId:s.room.id,x:d+Math.cos(u)*h,z:c+Math.sin(u)*h})}return t}function Wi(o,e,t,n){let a=new Map,r=i=>!!i&&o.states[i]?.state==="on";for(let i of e.floors){let s=new Set;for(let d of i.rooms)for(let c of sn(o,ne(o,d.area_id)))F(c)==="light"&&s.add(c);for(let d of i.placements)F(d.entity_id)==="light"&&s.add(d.entity_id);let l=i.openings.filter(d=>{let c=t.get(d.id);if(!c)return!1;if(d.type==="garage")return(Te(o,c,"garage").cover??1)<.95;if(d.type==="door")return r(c.contact)||r(c.contact2??null);let u=Te(o,c,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;a.set(i.id,{rooms:i.rooms.length,lightsOn:[...s].filter(d=>o.states[d]?.state==="on").length,open:l,persons:n.filter(d=>d.floorId===i.id).length})}return a}function Bi(o,e){let t=[e.rooms===1?z(o,"floor_rooms_one"):z(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(z(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(z(o,"floor_open",{n:e.open})),e.persons&&t.push(z(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}function Ui(o,e,t,n=12,a=180){let r=Math.max(a,e),i=Math.max(a*.5625,t),s={cols:1,tile:Math.min(r,i*16/9)};for(let l=1;l<=Math.max(1,o);l++){let d=Math.ceil(o/l),c=(r-n*(l-1))/l,u=(i-n*(d-1))/d*16/9,h=Math.min(c,u);(h>s.tile||l===1)&&(s={cols:l,tile:h})}if(s.tile<a){let l=Math.max(1,Math.floor((r+n)/(a+n)));return{cols:Math.min(l,Math.max(1,o)),tile:a}}return{cols:s.cols,tile:Math.floor(s.tile)}}function No(o,e,t){let n=[...t.openings.values()].flatMap($=>[$.cover,$.contact,$.tilt,$.contact2??null,$.tilt2??null,$.position??null,$.tiltAngle??null]),a=za(e),r=a.filter($=>F($)==="camera").flatMap($=>Re(o,$)),i=a.map($=>Nt(o,$)),s=e.energy,l=e.presence.flatMap($=>[$.person,$.sensor]),d=e.floors.flatMap($=>$.rooms.flatMap(P=>ne(o,P.area_id).filter(y=>F(y)==="light"))),c=[...t.furniture.values()].flatMap($=>[$.entity,$.power]),u=e.floors.flatMap($=>$.furniture.flatMap(P=>[P.state_entity??null,P.state_entity2??null,P.color_entity??null])),h=e.floors.flatMap($=>$.furniture.flatMap(P=>[P.door_left??null,P.door_right??null,P.soc??null,P.status??null,P.charge??null,P.export??null])),f=(e.settings.roof?.windows??[]).flatMap($=>[$.cover,$.contact,$.tilt]).filter($=>!!$&&$!=="none"),p=[...(e.settings.roof?.solar??[]).map($=>$.entity),...(e.settings.roof?.strings??[]).map($=>$.entity)].filter($=>!!$&&$!=="none"),g=e.floors.flatMap($=>$.furniture.filter(P=>P.type==="robot_vacuum").map(P=>Tt(o,t.furniture.get(P.id)?.entity??null,P.room_sensor))),m=e.floors.flatMap($=>$.furniture.flatMap(P=>(P.pictures??[]).flatMap(y=>[y.entity,...y.image.startsWith("camera:")?[y.image.slice(7)]:[]]))),S=t.heat?e.floors.flatMap($=>$.rooms.flatMap(P=>ne(o,P.area_id).filter(y=>y.startsWith("sensor.")))):[],v=[...xi(e.floors),...O("auto_pro")?xa(o,e.floors):[],...O("pool")?Ha(o,e.floors):[]],b=Ut(o,e).map($=>$.entity),x=st(o,t.weatherEntityId??e.settings.weather_entity),T=[...a,...r,...n,...i,...c,...u,...h,...g,...f,...p,...m,s.grid,s.solar,s.battery,s.battery_soc,s.consumption,s.tariff,...l,...d,...S,...t.warnings,...v,...b,x,"sun.sun"];return[...new Set(T.filter($=>!!$))]}function Gi(o,e){return String(e&&o.states[e]?.attributes.unit_of_measurement||"m\xB3")}function cc(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${X(o,e*1e3,0)} l`:`${X(o,e,e<10?2:0)} ${t}`}var dc=12e4,Ki={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},uc='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',pc='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function Yi(o,e,t){return o.rooms.find(n=>n.points.length>=3&&W([e,t],n.points))?.id??null}function hc(o,e){let t=e.action==="more_info"?e.target:e.data?.entity_id;return typeof t=="string"&&$e(o.states[t])}var qo=class extends se{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;poolTarget=new Map;volumeSent=0;holoIds="";shownStartView;throughWall=!1;live=null;resizeObs=null;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;walker=null;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start())}disconnectedCallback(){super.disconnectedCallback(),this.stopWalk(),this.unlistenReplay?.(),this.unlistenReplay=null,this.resizeObs?.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),this.viewer?.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.renderRoot.addEventListener("wheel",e=>{let t=e;if(!t.target?.closest?.(".fp3d-holo"))return;let n=this.renderRoot.querySelector("canvas");n&&(t.preventDefault(),n.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{let n=(t[0]?.contentRect.width??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Vo();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",n=>{this._central&&!n.target?.closest?.(".fp3d-central, .fp3d-central-btn")&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,a)=>this.fire("room-tap",{floorId:n,roomId:a}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?z(this.hass,"floor_rooms_one"):z(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,a,r)=>this.onDeviceTap(n,a,r),onDeviceHold:(n,a,r)=>this.onDeviceHold(n,a,r),onRoomDoubleTap:(n,a)=>this.onRoomDoubleTap(n,a),onDeviceSwipe:(n,a,r,i,s)=>this.onDeviceSwipe(n,a,r,i,s),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,a,r)=>this.fire("furniture-move",{id:n,x:a,z:r}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,a,r)=>this.fire("device-move",{id:n,x:a,z:r}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((n,a,r,i,s,l)=>this.placeHolo(n,a,r,i,s,l)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this._low=this.viewer.low,this.viewer.setPacks([...Kn()]),this.shownPacks=Ze(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}updated(e){e.has("hass")&&this.live?.el&&(this.live.el.hass=this.hass),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Ze()&&(this.shownPacks=Ze(),t.setPacks([...Kn()]),this.hass&&this.building&&t.setParked(To(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let r=JSON.stringify(this.startViewOf()),i=this.shownStartView!==void 0&&this.shownStartView!==r;this.shownStartView=r,t.setStartView(this.startViewOf()),t.setBuilding(this.building),i&&this.floorId===null&&t.resetView()}e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(r=>e.has(r)),a=this.replayTicked&&!!this.replay;this.replayTicked=!1,(n||e.has("hass")||a)&&this.syncDevices(n,a&&(this.trail||this.detecting)),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,this.replay?.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e,t=!1){let n=this.viewer,a=this.building;if(!n||!a||!this.hass)return;let r=this.hass;(e||!this.openingLinks||this.linkedRegistry!==r.entities)&&(this.openingLinks=It(r,a.floors),this.furnitureLinks=qe(r,a.floors),this.linkedRegistry=r.entities,this.findIndex=null,this.alertSrc=this.alerts?bo(r,a,this.weatherEntityId):null,this.watched=No(r,a,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?vo(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),e=!0);let i=e||t||this.watched.some(k=>this.shownStates.get(k)!==r.states[k]),s=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=this.replay?.seek??0,this.seenT=this.replay?.t??0,!i)return;let l=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(k=>[k,r.states[k]]));let d=si(r,a),c=Ia(r,a),u=this.furnitureMarkers(r,a,new Set(c.map(k=>k.id)),new Set(d.map(k=>k.powerEntity)));d.push(...u.consumers);let h=li(r,a,d,ht(a,k=>this.furnitureLinks?.get(k.id)?.power??null)),f=new Map(d.filter(k=>k.id!==k.powerEntity).map(k=>[k.id,k.power]));this.confirmSet=at(r,a.floors);let p=this.trail?this.trailNow(r,a):[],g=O("camera_cockpit")&&!this.dimmed?this.detectionPins(r,c):[];this.detecting=g.length>0;let m=O("energy_pro"),S=new Set(O("auto_pro")?a.floors.flatMap(k=>k.furniture.filter(I=>I.type==="parking"&&I.car&&Wt(r,I)).map(I=>I.id)):[]);n.setDevices([...[...c,...u.markers].map(k=>{let I=k.show==="no_power"||"energyDevice"in k&&k.energyDevice?null:f.get(k.id)??null,V={...k,power:I,powerText:I===null?void 0:Z(r,I),effect:this.dimmed?!1:k.effect},N=k.ownName&&(k.showName||this.markerNames)?k.ownName:"",R=O("sound")&&this.mediaCardUp(r,k.id)||O("auto_pro")&&!!k.furnitureId&&S.has(k.furnitureId);return{...V,pin:this.showPin(V)&&!R,full:k.show==="always",caption:N}}),...(m&&(this.flows??this._flows)&&!this.dimmed&&h.grid!==null?[this.gridPin(r,a,h.grid)]:[]).filter(k=>!!k),...g,...p.map((k,I)=>({id:`trail:${I}`,floorId:k.floorId,roomId:null,x:k.x,z:k.z,y:.3+.4*p.slice(0,I).filter(V=>V.entity===k.entity).length,icon:Ei,name:K(r,k.entity),text:En(r,k.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),n.setTrail(p,this.replay?this.robotPaths(r,a):[]),n.setPickTargets(u.targets,this.openingTargets()),n.setScreens(u.screens),n.setFridgeDoors(lo(r,a.floors)),n.setRobots(this.robotInfos(r,a));let v=new Map;for(let k of a.settings.roof?.windows??[]){let I=H=>H&&H!=="none"?H:null,V=Te(r,{cover:I(k.cover),contact:I(k.contact),tilt:I(k.tilt)},"window"),N=I(k.window)?r.states[I(k.window)]:void 0,R=V.open;if(N&&!q(N)){let H=N.attributes.current_position;R=typeof H=="number"?Math.min(1,Math.max(0,H/100)):N.state==="open"||N.state==="opening"?1:0}v.set(k.id,{open:R,tilt:V.tilt,cover:V.cover??0})}n.setRoofWindows(v),n.setParked(To(r,a));let b=new Map(a.floors.flatMap(k=>k.openings.map(I=>[I.id,I.type]))),x=new Map([...this.openingLinks].map(([k,I])=>[k,Te(r,I,b.get(k))]));n.setOpeningStates(x,s),this.setAlerts(this.alertSrc?ja(r,a,this.alertSrc,this.openingLinks):[]);let T=[...c,...u.markers].map(k=>`${k.id}:${k.glow?`${k.glow.level.toFixed(1)}/${k.glow.color.map(I=>I.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...x].map(([k,I])=>`${k}:${I.open}:${I.cover===null?"-":I.cover.toFixed(1)}`).join(";");if(T!==this.thumbSig){let k=this.thumbSig==="";this.thumbSig=T,k||this.scheduleThumbs(1500)}let $=a.floors.flatMap(k=>k.furniture.filter(I=>I.type==="home_battery").map(I=>({floorId:k.id,x:I.x,z:I.z})))[0]??(a.energy.battery?a.floors.flatMap(k=>k.placements.filter(I=>I.entity_id===a.energy.battery).map(I=>({floorId:k.id,x:I.x,z:I.z})))[0]:null),P=m?_i(r,a,h.solar):null,y=a.settings.roof.hologram??Ee,E=[...a.settings.roof.solar??[]].sort((k,I)=>I.rows*I.cols-k.rows*k.cols),M=a.settings.roof.strings??[],A=k=>(k.string?M.find(I=>I.id===k.string)?.inverter:null)??null,C=y.plant_floor?"all":"house",U=(k,I,V,N)=>{let R=Ue(a,k);if(!R)return null;let[H,J]=Ge(R,k),Y=k.u+H/2+I,te=k.v+J/2+V,ie=[R.o[0]+R.eu[0]*Y+R.es[0]*te,R.o[1]+R.eu[1]*Y+R.es[1]*te,R.o[2]+R.eu[2]*Y+R.es[2]*te],re=R.wall?.floorId??(R.unbounded?a.floors.find(ue=>ue.elevation===Math.min(...a.floors.map(Qe=>Qe.elevation)))?.id??a.floors[0].id:[...a.floors].sort((ue,Qe)=>Qe.elevation-ue.elevation)[0].id);return{p:[ie[0]+R.n[0]*.05,ie[1]+R.n[1]*.05,ie[2]+R.n[2]*.05],n:[R.n[0],R.n[1],R.n[2]],floorId:re,size:N,roof:!0,views:C}},L=[],j=[],Q=h.grid!==null||h.battery!==null||h.solar!==null,D=y.place==="free"&&Number.isFinite(y.x)&&Number.isFinite(y.z),B=m&&h.solar!==null&&!D?E.find(k=>k.id===y.field)??E[0]:void 0,ae=B?A(B):null,oe=!!B&&!!ae&&!E.some(k=>k.id!==B.id&&A(k)===ae)&&y.right===0&&y.up===0,Me=(()=>{if(!oe||!B)return 0;let k=Ue(a,B);return k?Ge(k,B)[0]/2+1.2:0})(),He=B?U(B,y.right+Me,y.up,y.size):null,mt=this.devicePowers(r,a),Tn=m&&h.solar!==null?a.energy.solar?[a.energy.solar]:ht(a,k=>this.furnitureLinks?.get(k.id)?.power??null).solar:[];if(He)L.push(He),j.push({kind:"main",name:z(r,"holo_title"),w:null,dayIds:Tn,battery:null});else if(m&&Q&&D){let k=0,I=0,V=0,N=1/0,R=a.floors[0];for(let te of a.floors){te.rooms.length&&(N=Math.min(N,te.elevation)),te.rooms.length&&(!R.rooms.length||te.elevation+te.height>R.elevation+R.height)&&(R=te);for(let ie of te.rooms)for(let[re,ue]of ie.points)k+=re,I+=ue,V++}V&&(k/=V,I/=V);let H=y.x-k,J=y.z-I,Y=Math.hypot(H,J);L.push({p:[y.x,(Number.isFinite(N)?N:0)+(y.height??3),y.z],n:Y>.01?[H/Y,0,J/Y]:[1,0,0],floorId:R.id,size:y.size,roof:!0,views:C}),j.push({kind:"main",name:z(r,"holo_title"),w:null,dayIds:Tn,battery:null})}else if(m&&Q&&a.floors.some(k=>k.rooms.length)){let k=-1/0,I=1/0,V=-1/0,N=0,R=a.floors[0];for(let H of a.floors){for(let J of H.rooms)for(let[Y,te]of J.points)k=Math.max(k,Y),I=Math.min(I,te),V=Math.max(V,te);H.rooms.length&&H.elevation+H.height>N&&(N=H.elevation+H.height,R=H)}L.push({p:[k+.6,N+.4,(I+V)/2],n:[1,0,0],floorId:R.id,size:y.size,roof:!0,views:C}),j.push({kind:"main",name:z(r,"holo_title"),w:null,dayIds:Tn,battery:null})}if(m&&h.solar!==null){let k=new Set;for(let I of a.floors)for(let V of I.furniture.filter(N=>N.type==="inverter")){if(V.plant_card===!1||k.has(V.id))continue;k.add(V.id);let N=E.filter(ie=>A(ie)===V.id),R=(B&&V.id===ae?N.find(ie=>ie.id!==B.id):null)??N[0],H=this.furnitureLinks?.get(V.id)?.power??null,J=R?U(R,V.plant_right??0,V.plant_up??0,y.size*.85):null;if(!J||!H)continue;let Y=I.furniture.filter(ie=>ie.type==="home_battery").sort((ie,re)=>Math.hypot(ie.x-V.x,ie.z-V.z)-Math.hypot(re.x-V.x,re.z-V.z))[0],te=Y?.soc&&Y.soc!=="none"?Number(r.states[Y.soc]?.state):NaN;L.push(J),j.push({kind:"plant",name:V.name||we(r,V.type),w:Math.max(0,ee(r.states[H])??0),dayIds:[H],battery:Y?{soc:Number.isFinite(te)?te:null,w:mt.get(Y.id)??null}:null})}}let Ko=y.device_house===!1?"floor":"all";if(m)for(let k of a.floors){for(let I of k.furniture){if(!I.holo)continue;let V=this.furnitureLinks?.get(I.id)?.power??null,N=d.find(H=>H.id===I.id);if(!V&&!N)continue;let R=k.elevation+pe(k,I)+I.h;L.push({p:[I.x,R+.1,I.z],n:[0,1,0],floorId:k.id,size:y.size*.7,roof:!1,views:Ko,room:Yi(k,I.x,I.z)}),j.push({kind:"device",name:I.name||we(r,I.type),w:N?.power??(V?ee(r.states[V]):null),dayIds:V?[V]:[],battery:null})}for(let I of k.placements){if(!I.holo)continue;let V=Nt(r,I.entity_id);if(!V)continue;let N=k.elevation+(I.y??.4)+.2;L.push({p:[I.x,N,I.z],n:[0,1,0],floorId:k.id,size:y.size*.7,roof:!1,views:Ko,room:Yi(k,I.x,I.z)}),j.push({kind:"device",name:I.name||K(r,I.entity_id),w:ee(r.states[V]),dayIds:[V],battery:null})}}let xe=[];if(O("sound")){let k=new Set,I=(a.settings.roof.hologram??Ee).size,V=(R,H,J,Y,te,ie)=>{let re=r.states[H];if(!re||F(H)!=="media")return;if(k.has(H)){let Oe=xe.find(Rn=>Rn.id===H);Oe&&xe.push({...Oe,id:`${H}#${xe.filter(Rn=>Rn.id.startsWith(`${H}#`)).length+2}`,floorId:R.id,x:J,z:Y,members:[H]});return}k.add(H);let ue=this.ro?void 0:this.mediaGrace.get(H),Qe=[re.attributes.media_title,re.attributes.app_name,re.attributes.source].find(Oe=>typeof Oe=="string"&&!!Oe.trim())??"";if(!(!q(re)&&(re.state==="playing"||re.state==="paused"&&!!Qe||re.state==="on"&&!!re.attributes.source))){ue&&ue.until>Date.now()?(xe.push({...ue.source,playing:!1,level:0}),L.push(ue.anchor),j.push({...ue.card,media:{...ue.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,ue.until-Date.now()+100))):q(re)||(this.mediaGrace.delete(H),xe.push({id:H,floorId:R.id,x:J,z:Y,level:0,playing:!1,members:[]}));return}let zn=re.state==="playing",be=re.attributes,ir=typeof be.volume_level=="number"?Math.min(1,Math.max(0,be.volume_level)):.5,os=Array.isArray(be.group_members)?be.group_members.filter(Oe=>Oe!==H):[];xe.push({id:H,floorId:R.id,x:J,z:Y,level:zn?.3+.7*ir:0,playing:zn,members:os});let rs=Qe||z(r,"holo_media_playing"),sr={p:[J,R.elevation+te+.12,Y],n:[0,1,0],floorId:R.id,size:I*.7,roof:!1,views:"all"},lr={kind:"media",name:ie,w:null,dayIds:[],battery:null,media:{id:H,title:rs,artist:typeof be.media_artist=="string"?be.media_artist:typeof be.media_album_name=="string"?be.media_album_name:"",picture:typeof be.entity_picture=="string"?be.entity_picture:null,volume:Math.round(ir*100),playing:zn}};L.push(sr),j.push(lr),this.ro||this.mediaGrace.set(H,{until:Date.now()+45e3,card:lr,source:xe[xe.length-1],anchor:sr})},N=(R,H)=>{for(let J of R.furniture){if((J.entity!=null&&J.entity!=="none")!==H)continue;let Y=this.furnitureLinks?.get(J.id)?.entity;Y&&V(R,Y,J.x,J.z,pe(R,J)+J.h,J.name||we(r,J.type))}};for(let R of a.floors)N(R,!0);for(let R of a.floors)for(let H of R.placements)V(R,H.entity_id,H.x,H.z,H.y??1.1,H.name||K(r,H.entity_id));for(let R of a.floors)N(R,!1)}if(O("auto_pro")){let k=(a.settings.roof.hologram??Ee).size;for(let I of a.floors)for(let V of I.furniture){if(V.type!=="parking"||!V.car)continue;let N=Wt(r,V);if(!N)continue;let R=dn(r,V);if(R.soc===null&&R.range===null&&R.locked===null&&R.climateOn===null)continue;let H=ki(V,N),J=pe(I,V)+(H?.h??1.6);L.push({p:[V.x,I.elevation+J+.25,V.z],n:[0,1,0],floorId:I.id,size:k*.7,roof:!1,views:"all"});let Y=R.entities;j.push({kind:"car",name:V.name||we(r,N),w:null,dayIds:[],battery:null,car:{spot:V.id,soc:R.soc,range:R.range,rangeUnit:R.rangeUnit,chargingW:R.chargingW,charging:R.charging,locked:R.locked,climateOn:R.climateOn,lock:Y.lock,climate:Y.climate,charge:Y.charging&&/^(switch|input_boolean)\./.test(Y.charging)?Y.charging:null}})}}if(O("pool")){let k=(a.settings.roof.hologram??Ee).size,I=[];for(let{floor:V,area:N}of We(a.floors)){let R=lt(r,N.pool);if(!Object.values(R.entities).some(Boolean))continue;let H=Oa(R),J=rn(V,N);I.push({id:N.id,floorId:V.id,points:N.points,y:J,color:H.color,level:this.dimmed?H.level*.4:H.level,flow:!!R.pump?.on,heat:!!R.heater?.heating,cover:R.cover?.closed??0});let[Y,te]=he(N.points);L.push({p:[Y,V.elevation+Math.max(J,0)+(N.above?.6:1.1),te],n:[0,1,0],floorId:V.id,size:k*.7,roof:!1,views:"all"}),j.push({kind:"pool",name:z(r,"out_pool"),w:null,dayIds:[],battery:null,pool:{area:N.id,state:R}})}n.setPools(I)}else n.setPools([]);n.setSound(xe);let Yo=this._walk?this.walkRoomPts:null,Qo=L.map(k=>!this._walk||!!Yo&&W([k.p[0],k.p[2]],Yo)),Jo=j.filter((k,I)=>Qo[I]);n.setAnchors(L.filter((k,I)=>Qo[I])),JSON.stringify(Jo)!==JSON.stringify(this._holos)&&(this._holos=Jo),n.setSolarLevels(P&&!this.dimmed?gi(a,P):new Map);let Xo=!m||!(this.flows??this._flows)||this.dimmed?[]:di({building:a,consumers:d,summary:h,battery:$??null,fieldPower:P,devicePower:this.devicePowers(r,a)}).map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.power,color:bi(k.kind,h)})),Zo=this.poolPipes(r,a);n.setFlows(this.dimmed?Xo:[...Xo,...Zo.flows]),n.setPipes(Zo.tubes);let er=[];n.setPersons(er);let ts=Wi(r,a,this.openingLinks,er);n.setFloorInfo(new Map([...ts].map(([k,I])=>[k,Bi(r,I)])));let Yt=r.states["sun.sun"]?.attributes,Qt=typeof Yt?.elevation=="number"?Yt.elevation:null;n.setSun(Qt!==null&&typeof Yt?.azimuth=="number"?{elevation:Qt,azimuth:Yt.azimuth}:null);let tr=this.weather&&!this.dimmed&&O("weather")?Ca(r,st(r,this.weatherEntityId??a.settings.weather_entity),a.settings.rain_entity):null,gt=tr?Fa(tr,a.settings.weather_effects):null;this.cloud=gt?.cloud??0,this._sky=(Qt===null?0:Math.min(1,Math.max(0,(Qt+4)/16)))*(1-.45*this.cloud);let ns=gt?gt.sky:(a.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&O("weather")?{...gt??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:ns}:null),this.watchLightning(!!gt?.lightning),this.applyTint();let nr=h.grid!==null||h.solar!==null||h.battery!==null||h.tariff!==null?h:null;JSON.stringify(nr)!==JSON.stringify(this._energy)&&(this._energy=nr);let or=d.some(k=>k.wallbox)?d.filter(k=>k.wallbox).reduce((k,I)=>k+I.power,0):null,rr=a.floors.flatMap(k=>k.furniture.filter(I=>I.type==="inverter")).map(k=>{let I=this.furnitureLinks?.get(k.id)?.power,V=I?ee(r.states[I]):null;return V===null?null:{name:k.name||we(r,k.type),w:Math.max(0,V)}}).filter(k=>!!k);JSON.stringify(rr)!==JSON.stringify(this._plants)&&(this._plants=rr),or!==this._wallboxW&&(this._wallboxW=or),this.watchSolarDay([...new Set(j.flatMap(k=>k.dayIds))]);let ar=O("energy_pro");this.watchMeters(ar?a.energy.gas??null:null,ar?a.energy.water??null:null),l&&(this.syncMs=this.syncMs*.8+(performance.now()-l)*.2)}listenReplay(){this.unlistenReplay?.(),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&this.viewer?.flashDevices(e.pulses),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let a=(this.findIndex??=zo(t,n)).find(i=>i.entity===e);if(a){this.goTo(a);return}let r=t.entities?.[e]?.area_id??t.devices?.[t.entities?.[e]?.device_id??""]?.area_id??null;for(let i of n.floors){let s=i.openings.find(u=>{let h=this.openingLinks?.get(u.id);return!!h&&[h.contact,h.tilt,h.contact2,h.tilt2,h.cover].includes(e)}),l=i.rooms.find(u=>u.points.length>=3&&(s?u.id===s.room_id:!!r&&u.area_id===r));if(!l)continue;let[d,c]=he(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:i.id,roomId:l.id,entity:e,icon:null,x:d,z:c,y:1});return}}now(){return this.replay?.t??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,a=n?It(t,e.floors):this.openingLinks,r=n?qe(t,e.floors):this.furnitureLinks,i=vo(bo(t,e,this.weatherEntityId)),s=No(t,e,{openings:a,furniture:r,heat:!0,warnings:i,weatherEntityId:this.weatherEntityId}),l=O("auto_pro")?e.floors.flatMap(d=>d.furniture.filter(c=>c.type==="parking").flatMap(c=>[typeof c.entity=="string"?c.entity:null,c.car?cn(t,c).tracker:null]).filter(c=>!!c&&c.startsWith("device_tracker."))):[];return{entities:s,openings:[...a],furniture:[...r],low:this._low,cars:l,energy:O("energy_pro"),auto:O("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return w;let t=this.hass,n=t.states[e.entity],a=ce(t,n),r=F(e.entity)==="light"&&n?.state==="on"&&a.endsWith("%")?`${z(t,"state_on")} \xB7 ${a}`:a,i=n?.last_changed?z(t,"tt_since",{time:En(t,Date.parse(n.last_changed))}):"";return _`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${K(t,e.entity)}</span>
      <b>${i?`${r} \xB7 ${i}`:r}</b>
    </div>`}devicePowers(e,t){let n=new Map;for(let a of t.floors)for(let r of a.furniture){if(r.type!=="inverter"&&r.type!=="home_battery")continue;let i=this.furnitureLinks?.get(r.id)?.power,s=r.type==="home_battery"&&r.charge&&r.charge!=="none"?ee(e.states[r.charge]):null,l=i?ee(e.states[i],r.type==="home_battery"&&t.energy.battery_invert&&s===null):null;l!==null&&s!==null?l=Math.max(0,l)-Math.max(0,s):l===null&&s!==null&&(l=-Math.max(0,s)),l!==null&&n.set(r.id,l)}return n}detectionPins(e,t){let n=[],a=new Set(this.building?.floors.flatMap(r=>r.placements.filter(i=>i.detect_pins===!1).map(i=>i.entity_id))??[]);for(let r of t){if(!r.model?.startsWith("camera")||a.has(r.id))continue;let i=this.now(),s=Re(e,r.id).filter(f=>{let p=e.states[f];return p?p.state==="on"?!0:p.state==="off"&&!!p.last_changed&&i-Date.parse(p.last_changed)<dc:!1}),l=new Map;for(let f of s){let p=Ta(e,f);l.has(p)||l.set(p,f)}l.size>1&&l.delete("motion");let d=(r.rotation??0)*Math.PI/180,c=[-Math.sin(d),Math.cos(d)],u=r.model==="camera_ceiling",h=0;for(let[f,p]of l){let g=e.states[p],m=g?.last_changed?En(e,Date.parse(g.last_changed)):"";n.push({id:`detect:${p}`,floorId:r.floorId,roomId:r.roomId,x:r.x+(u?0:c[0]*1.1),z:r.z+(u?0:c[1]*1.1),y:1.4+.4*h++,icon:Ki[f]??Ki.motion,name:K(e,p),text:`${z(e,`detect_${f}`)}${m?` \xB7 ${m}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let a=Eo(t);if(!a)return null;let r=Math.abs(n)<5,i=t.settings.outage_entity;return i&&_n(e.states[i])?{id:"grid",floorId:a.floorId,roomId:null,x:a.end[0],z:a.end[1],y:.9+a.height,icon:pc,name:z(e,"holo_grid"),text:z(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:a.floorId,roomId:null,x:a.end[0],z:a.end[1],y:.9+a.height,icon:uc,name:z(e,"holo_grid"),text:r?Z(e,0):`${z(e,n<0?"energy_grid_export":"energy_grid_import")} ${Z(e,Math.abs(n))}`,active:!r,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(i=>!!i),a=this.replay?"":n.join(",");if(a===this.meterKey)return;if(this.meterKey=a,clearInterval(this.meterTimer),this.meterTimer=void 0,!a){this._meters=null;return}let r=async()=>{if(!this.hass||document.hidden)return;let i=await ii(this.hass,n);this.meterKey===a&&i&&(this._meters={gas:e?i.get(e)??null:null,water:t?i.get(t)??null:null})};r(),this.meterTimer=setInterval(()=>{r()},3e5)}poolPipes(e,t){let n=O("pool"),r=[...new Map(t.floors.flatMap(l=>l.furniture.filter(d=>St.includes(d.type)).map(d=>[d.id,d]))).values()].map(l=>({id:l.id,type:l.type,open:l.valve_open!==!1,valve:l.valve_position??null})),i=[],s=[];for(let{floor:l,area:d}of We(t.floors)){let c=d.pool;if(!c.pipes?.length&&!c.joints?.length)continue;let u=lt(e,c),h=c.ports??[],f=Li({pipes:c.pipes??[],ports:h,devices:r,pumpOn:n&&!!u.pump?.on,heaterOn:!!u.heater?.on,heating:!!u.heater?.heating}),p=Di(t,l,d);i.push(...ji(c.pipes??[],f,p));for(let g of c.joints??[]){if(g.kind!=="wall"&&g.kind!=="floor")continue;let m=p(`joint:${g.id}:inside`),S=p(`joint:${g.id}:outside`),v=g.kind==="floor"?.03:m.y;s.push({floorId:l.id,points:[[m.x,v,m.z],[S.x,S.y,S.z]],radius:.05,water:null,fittings:[]})}for(let g of c.pipes??[]){let m=Gt(g,p);if(m.length<2)continue;let S=f.get(g.id),v=[],b=Oo(m);for(let[x,T]of[[g.from,.04],[g.to,b-.04]]){let $=x.startsWith("dev:")||x.startsWith("joint:")?An(m,T):null;$&&v.push({kind:"sleeve",p:$.p,dir:$.dir})}for(let x of g.fittings??[]){let T=An(m,x.at);T&&v.push({kind:x.kind,p:T.p,dir:T.dir,open:x.open!==!1})}s.push({floorId:g.floor_id,points:m,radius:.025,water:S?.active?Do(S):null,fittings:v})}}return{flows:i,tubes:s}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let r=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(r===this.holoIds)return;this.holoIds=r,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let a=async()=>{if(!this.hass||document.hidden)return;let r=await fi(this.hass,e);this.holoIds===n&&(this._rows=r)};a(),this.holoTimer=setInterval(()=>{a()},3e5)}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,a,r,i){(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let s=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),d=this._holos[e]?.kind==="main";if(!s){d&&this._holoOn&&(this._holoOn=!1);return}d&&a!==this._holoOn&&(this._holoOn=a);let c=this._holos[e],u=(this.building?.settings.roof.hologram??Ee).device_min_w??0;c?.kind==="device"&&u>0&&(c.w??0)<u&&(a=!1);let h=!a;if(s.hidden!==h&&(s.hidden=h),l&&l.hasAttribute("hidden")!==h&&l.toggleAttribute("hidden",h),!a)return;let f=r*.8,p=34*f,g=46*f,m=t+(i?p:-p),S=n-g,v=this.holoSizes.get(e),b=performance.now();(!v||b-v.at>2e3)&&(v={w:s.offsetWidth||184,h:s.offsetHeight||90,at:b},this.holoSizes.set(e,v));let x=v.w*f,T=v.h*f,$=i?m:m-x,P=$+x;for(let E=0;E<6;E++){let M=this.holoBoxes.find(A=>$<A.x1+4&&P>A.x0-4&&S-T<A.y1+4&&S>A.y0-4);if(!M)break;S=M.y0-6}this.holoBoxes.push({i:e,x0:$,x1:P,y0:S-T,y1:S});let y=i||(this.building?.settings.roof.hologram??Ee).mirror!==!1;if(s.style.transform=y?`translate(${m.toFixed(1)}px, ${S.toFixed(1)}px) scale(${(i?f:-f).toFixed(3)}, ${f.toFixed(3)}) translate(0, -100%)`:`translate(${$.toFixed(1)}px, ${S.toFixed(1)}px) scale(${f.toFixed(3)}) translate(0, -100%)`,l){let E=l.firstElementChild,M=l.lastElementChild;E?.setAttribute("x1",t.toFixed(1)),E?.setAttribute("y1",n.toFixed(1)),E?.setAttribute("x2",m.toFixed(1)),E?.setAttribute("y2",S.toFixed(1)),M?.setAttribute("cx",t.toFixed(1)),M?.setAttribute("cy",n.toFixed(1))}}renderHologram(){let e=this._energy;if(!(O("energy_pro")||O("sound")||O("auto_pro")||O("pool"))||this.roomId&&!(this.building?.settings.roof.hologram??Ee).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return w;let t=this.floorId===null||(this.building?.floors.length??0)<=1,n=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&t;return this._holos.map((a,r)=>a.kind==="pool"?this.renderPoolCard(a,r):a.kind==="car"?this.renderCarCard(a,r):a.kind==="media"?this.renderMediaCard(a,r):a.kind==="device"?this.renderDeviceCard(a,r):n?this.renderHoloCard(a,r,e):w)}renderCarCard(e,t){let n=this.hass,a=p=>z(n,p),r=e.car,i=!this.mediaFolded.has(r.spot),s=()=>{this.mediaFolded.has(r.spot)?this.mediaFolded.delete(r.spot):this.mediaFolded.add(r.spot),this.requestUpdate()},l=(p,g,m)=>{n.callService(p,g,{entity_id:m})},d=(p,g)=>p.startsWith("climate.")?l("climate",g?"turn_on":"turn_off",p):l("homeassistant",g?"turn_on":"turn_off",p),c=()=>{if(!r.lock)return;let p=r.lock.startsWith("lock.");if(r.locked){if(!confirm(a("car_unlock_confirm")))return;p?l("lock","unlock",r.lock):l("homeassistant","turn_off",r.lock)}else p?l("lock","lock",r.lock):l("homeassistant","turn_on",r.lock)},u=r.soc===null?"#37e0ff":r.soc>=50?"#4dff80":r.soc>=20?"#ffcc40":"#ff4d40",h=!!r.lock&&/^(lock|input_boolean|switch)\./.test(r.lock),f=!!r.climate&&/^(climate|switch|input_boolean)\./.test(r.climate);return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${r.charging?`\u26A1 ${a("car_charging_short")}`:r.locked===null?"":r.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${r.soc!==null?`${Math.round(r.soc)} %`:"\u2013"}</b>
            <span>${r.range!==null?`${X(n,r.range,0)} ${r.rangeUnit}`:""}${r.charging&&r.chargingW?` \xB7 ${Z(n,r.chargingW)}`:""}</span>
          </div>
          ${r.soc!==null?_`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,r.soc))}%;background:${u}"></i></div>`:w}
          ${i&&!this.ro&&(h||f||r.charge)?_`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${h?_`<button title=${r.locked?a("car_unlock_btn"):a("car_lock_btn")} @click=${c}>${r.locked?"\u{1F512}":"\u{1F513}"}</button>`:w}
                ${f?_`<button class=${r.climateOn?"fp3d-holo-on":""} title=${a("car_climate")} @click=${()=>d(r.climate,!r.climateOn)}>❄</button>`:w}
                ${r.charge?_`<button class=${r.charging?"fp3d-holo-on":""} title=${a("car_charging")} @click=${()=>d(r.charge,!r.charging)}>⚡</button>`:w}
              </div>`:w}
        </div>
      </div>`}renderPoolCard(e,t){let n=this.hass,a=$=>z(n,$),{area:r,state:i}=e.pool,s=!this.mediaFolded.has(r),l=()=>{this.mediaFolded.has(r)?this.mediaFolded.delete(r):this.mediaFolded.add(r),this.requestUpdate()},d=($,P,y,E={})=>{n.callService($,P,{entity_id:y,...E})},c=i.heater,u=c?this.poolTarget.get(c.id):void 0;u&&c&&(c.target!==null&&Math.abs(u.v-c.target)<.01||Date.now()-u.at>3e4)&&this.poolTarget.delete(c.id);let h=(c&&this.poolTarget.get(c.id)?.v)??c?.target??null,f=$=>{if(!c||c.kind==="switch")return;let P=Math.min(c.max,Math.max(c.min,Math.round($/c.step)*c.step));this.poolTarget.set(c.id,{v:P,at:Date.now()}),this.requestUpdate(),d(c.kind,"set_temperature",c.id,{temperature:P})},p=($,P)=>X(n,$,P),g=i.temp===null?null:i.unit.includes("F")?(i.temp-32)*5/9:i.temp,m=g===null?"#37e0ff":g<20?"#5ab4ff":g<26?"#37e0ff":g<31?"#4dff9a":"#ffb347",S=$=>$==="ok"?"#4dff80":$==="warn"?"#ffcc40":"#ff4d40",v=($,P,y)=>Math.max(3,Math.min(97,($-P)/(y-P)*100)),b=($,P,y,E)=>_`<div class="fp3d-holo-pool-chem"><span>${$}</span><b style="color:${S(y)}">${P}</b><i><em style="left:${E}%;background:${S(y)};color:${S(y)}"></em></i></div>`,x=c?.heating?`\u{1F525} ${a("pool_heating")}`:i.pump?.on?`\u3030 ${a("pool_pump_on")}`:"",T=$=>$.closed>.98?a("pool_cover_closed"):$.closed<.02?a("pool_cover_open"):`${Math.round($.closed*100)} % ${a("pool_cover_closed_part")}`;return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-pool ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${l}><span>🏊 ${e.name}</span><span class="fp3d-holo-live">${x}</span></div>
          <div class="fp3d-holo-car-main">
            <b style="color:${m}">${i.temp!==null?`${p(i.temp,1)} ${i.unit}`:"\u2013"}</b>
            <span>${c&&h!==null&&c.kind!=="switch"?`\u2192 ${p(h,1)} ${i.unit}`:c?c.on?a("pool_heater_on"):a("pool_heater_off"):""}</span>
          </div>
          ${s&&i.ph?b("pH",p(i.ph.value,2),i.ph.range,v(i.ph.value,6.6,8)):w}
          ${s&&i.chlorine?b(i.chlorine.orp?a("pool_orp"):a("pool_chlorine"),`${p(i.chlorine.value,i.chlorine.orp?0:2)} ${i.chlorine.unit}`,i.chlorine.range,i.chlorine.orp?v(i.chlorine.value,500,900):v(i.chlorine.value,0,3)):w}
          ${s&&i.cover?_`<div class="fp3d-holo-pool-line">${a("pool_cover")}: ${T(i.cover)}</div>`:w}
          ${s&&!this.ro&&(c||i.pump?.switchable||i.light||i.cover)?_`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${c&&c.kind!=="switch"&&h!==null?_`<button title=${a("pool_colder")} @click=${()=>f(h-c.step)}>−</button
                    ><button title=${a("pool_warmer")} @click=${()=>f(h+c.step)}>+</button>`:w}
                ${c?_`<button class=${c.on?"fp3d-holo-on":""} title=${a("pool_heater")} @click=${()=>c.kind==="switch"?d("homeassistant",c.on?"turn_off":"turn_on",c.id):d(c.kind,c.on?"turn_off":"turn_on",c.id)}>🔥</button>`:w}
                ${i.pump?.switchable?_`<button class=${i.pump.on?"fp3d-holo-on":""} title=${a("pool_pump")} @click=${()=>d("homeassistant",i.pump.on?"turn_off":"turn_on",i.pump.id)}>〰</button>`:w}
                ${i.light?_`<button class=${i.light.on?"fp3d-holo-on":""} title=${a("pool_light")} @click=${()=>d("homeassistant","toggle",i.light.id)}>💡</button>`:w}
                ${i.cover?_`<button
                      title=${i.cover.moving?a("pool_cover_stop"):i.cover.closed>.5?a("pool_cover_open_btn"):a("pool_cover_close_btn")}
                      @click=${()=>d("cover",i.cover.moving?"stop_cover":i.cover.closed>.5?"open_cover":"close_cover",i.cover.id)}
                    >
                      ${i.cover.moving?"\u23F9":i.cover.closed>.5?"\u25B2":"\u25BC"}
                    </button>`:w}
              </div>`:w}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){let n=this.hass,a=p=>z(n,p),r=e.media,i=!this.mediaFolded.has(r.id),s=()=>{this.mediaFolded.has(r.id)?this.mediaFolded.delete(r.id):this.mediaFolded.add(r.id),this.requestUpdate()},l=(p,g={})=>{Promise.resolve(n.callService("media_player",p,{entity_id:r.id,...g})).catch(m=>this.serviceFailed(`media_player.${p}`,m))},d={down:p=>p.currentTarget.dataset.pressed=String(p.pointerId),up:p=>g=>{let m=g.currentTarget;m.dataset.pressed===String(g.pointerId)&&(delete m.dataset.pressed,g.stopPropagation(),m.dataset.acted=String(Date.now()),p())},key:p=>g=>{let m=g.currentTarget;Date.now()-Number(m.dataset.acted??0)<700||(m.dataset.acted=String(Date.now()),p())}},c=()=>l(r.playing?"media_pause":"media_play"),u=this.mediaVolume.get(r.id);u&&(Math.abs(u.v-r.volume)<=2||Date.now()-u.at>3e4)&&this.mediaVolume.delete(r.id);let h=this.mediaVolume.get(r.id)?.v??r.volume,f=(p,g)=>{this.mediaVolume.set(r.id,{v:p,at:Date.now()}),this.requestUpdate(),(g||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:p/100}))};return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${r.playing?`\u25CF ${a("holo_media_playing")}`:a("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${r.picture?_`<img class="fp3d-holo-cover" src=${r.picture} alt="" />`:_`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${r.title}</b>${r.artist?_`<span>${r.artist}</span>`:w}</div>
        </div>
        ${i&&!this.ro?_`<div class="fp3d-holo-media-controls">
                <button aria-label=${a("previous")} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_previous_track"))} @click=${d.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${a("play_pause")} @pointerdown=${d.down} @pointerup=${d.up(c)} @click=${d.key(c)}>${r.playing?"\u23F8":"\u25B6"}</button>
                <button aria-label=${a("next")} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_next_track"))} @click=${d.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(h)}
                  aria-label=${a("volume")}
                  @input=${p=>f(Number(p.target.value),!1)}
                  @change=${p=>f(Number(p.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${h} %</span>
              </div>`:w}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,a=d=>z(n,d),r=!this.holoFolded.has(t),i=this.dayOf(e),s=i&&i.curve.length>1?Po(i.curve,i.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${a("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${Z(n,e.w??0)}</b><span>${a("holo_dev_now")}</span></div>
        ${r&&i?_`<div class="fp3d-holo-sub">${a("holo_today")} <b>${X(n,i.kwh,1)} kWh</b> · ${a("holo_peak")} <b>${Z(n,i.peak)}</b></div>`:w}
        ${r&&s?$t`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${s.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${s.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${s.endX}" cy="${s.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:w}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?hi(t,new Date(this.now())):null}renderHoloCard(e,t,n){let a=this.hass,r=m=>z(a,m),i=!this.holoFolded.has(t),s=this.dayOf(e),l=e.kind==="main",d=l&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid??0)/n.consumption)*100))):null,c=s&&s.curve.length>1?Po(s.curve,s.peak):null,u=new Date(this.now()),h=(u.getHours()+u.getMinutes()/60)/24*220,f=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},p=l?n.solar??n.consumption??0:e.w??0,g=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${f}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${Z(a,p)}</b><span>${r(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${i?_`${l&&this._plants.length>1?_`<div class="fp3d-holo-plants">${this._plants.map(m=>_`<span>${m.name}</span><b>${Z(a,m.w)}</b>`)}</div>`:w}
              ${s?_`<div class="fp3d-holo-sub">${r("holo_today")} <b>${X(a,s.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${Z(a,s.peak)}</b></div>`:w}
              ${c?$t`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${c.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${c.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${c.endX}" cy="${c.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${h}" y1="2" x2="${h}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:w}
              <div class="fp3d-holo-grid">
                ${g?_`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${r("holo_battery")}<br /><b>${g.soc!==null?`${Math.round(g.soc)} %`:Z(a,Math.abs(g.w??0))}</b>
                      ${g.w!==null&&Math.abs(g.w)>=5?_`<span>${g.w<0?"\u25B2":"\u25BC"} ${Z(a,Math.abs(g.w))}</span>`:w}
                    </div>`:w}
                ${l&&n.grid!==null?_`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${r("holo_grid")}<br /><b>${Z(a,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":r(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:w}
                ${l&&n.consumption!==null?_`<div class="fp3d-holo-cell fp3d-holo-house">${r("holo_house")}<br /><b>${Z(a,n.consumption)}</b></div>`:w}
                ${l&&this._wallboxW!==null?_`<div class="fp3d-holo-cell fp3d-holo-wb">${r("holo_wallbox")}<br /><b>${Z(a,this._wallboxW)}</b></div>`:w}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?_`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?_`<span>🔥 ${r("holo_gas")} <b>${X(a,this._meters.gas,this._meters.gas<10?2:1)} ${Gi(a,this.building?.energy.gas)}</b></span>`:w}
                    ${this._meters.water!==null?_`<span>💧 ${r("holo_water")} <b>${cc(a,this._meters.water,Gi(a,this.building?.energy.water))}</b></span>`:w}
                    <span>${r("holo_today_short")}</span>
                  </div>`:w}
              ${d!==null?_`<div class="fp3d-holo-bar"><div style="width:${d}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${r("holo_autarky")}</span><b>${d} %</b></div>`:w}`:w}
      </div>
    </div>`}setAlerts(e){let t=e.map(a=>`${a.kind}:${a.entity}`),n=this.ro?[]:e.filter((a,r)=>!this.seenAlerts.has(t[r]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(a=>`${a.kind}:${a.entity}`).join()&&(this._alerts=e),e.length&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!e.length||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){let n=this.building,a=this.hass,r=n?.floors.find(c=>c.id===e),i=r?.rooms.find(c=>c.id===t);if(!n||!a||!r||!i||this.ro)return;let s=new Set(ne(a,i.area_id).filter(c=>F(c)==="light"));for(let c of r.placements)F(c.entity_id)==="light"&&W([c.x,c.z],i.points)&&s.add(c.entity_id);for(let c of r.furniture){let u=this.furnitureLinks.get(c.id)?.entity;u&&Jn(c.type)&&W([c.x,c.z],i.points)&&s.add(u)}let l=[...s].filter(c=>!this.confirmSet.has(c));if(!l.length)return;let d=l.some(c=>a.states[c]?.state==="on");a.callService("homeassistant",d?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let a=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let s=this.heatMode,l=yi(n,t,s);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,a=new Map([...l].map(([d,c])=>[d,vi(s,c)]))}let r=new Map;if(this.heatMode==="values")for(let s of t.floors)for(let l of s.rooms){let d=Ae(n,s,l,"temperature"),c=Ae(n,s,l,"humidity"),u=Ae(n,s,l,"co2"),h=[d!==null?`${X(n,ot(n,d),1)} ${ge(n)}`:null,c!==null?`${X(n,c,0)} %`:null,u!==null?`${X(n,u,0)} ppm`:null].filter(f=>!!f);h.length&&r.set(l.id,h.join(" \xB7 "))}if(e.setRoomInfo(r),this._alerts.length){a??=new Map;let s=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){let d=Da(l.kind).map(c=>c*s);if(l.roomId)a.set(l.roomId,d);else for(let c of t.floors)for(let u of c.rooms)a.set(u.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(a??=new Map,a.set(this.roomFlash.roomId,[.9,.95,1]));let i=a?[...a].map(([s,l])=>`${s}:${l.map(d=>d.toFixed(2)).join(",")}`).join(";"):"";i!==this.tintSig&&(this.tintSig=i,e.setRoomTint(a))}furnitureMarkers(e,t,n,a){let r=[],i=[],s=new Map,l=new Map,d=O("pool")?We(t.floors)[0]:void 0,c=d?lt(e,d.area.pool):null;for(let f of t.floors)for(let p of f.furniture){let g=this.furnitureLinks.get(p.id),m=this.stateFaces(e,p);if(m.length&&s.set(p.id,{color:m[0].color,level:m[0].level,faces:m}),Jn(p.type)){r.push(this.lampMarker(e,f,p,g?.entity??null));continue}if(c&&St.includes(p.type)){let D=p.valve_position??"filter";p.type==="pool_pump"&&c.pump?.on?s.set(p.id,{color:[.3,.8,1],level:.85}):p.type==="pool_heat_pump"&&c.heater?.heating?s.set(p.id,{color:[1,.45,.15],level:.85}):p.type==="pool_heat_pump"&&c.heater?.on?s.set(p.id,{color:[.3,.8,1],level:.35}):p.type==="pool_filter"?s.set(p.id,D==="closed"?{color:[1,.3,.25],level:.6}:D==="filter"||D==="recirculate"?{color:[.3,1,.6],level:c.pump?.on?.8:.3}:{color:[1,.62,.2],level:.85}):p.type==="pool_dosing"&&c.pump?.on&&s.set(p.id,{color:[.6,.9,1],level:.5})}let v=p.type==="parking"&&O("auto_pro")&&!!p.car?dn(e,p):null,b=p.type==="home_battery"?p.soc:p.type==="wallbox"?p.status:p.type==="parking"&&v?p.car?.device??v.entities.soc:null,x=b&&b!=="none"?b:null,T=g??(x?{entity:null,power:null}:void 0);if(!T)continue;let $=p.type==="home_battery"?x??T.entity??T.power:T.entity??T.power??x;l.set(p.id,$);let P=T.entity?e.states[T.entity]:void 0,y=p.type==="meter"?t.energy.grid_invert&&!p.export:p.type==="home_battery"?t.energy.battery_invert&&!p.charge:!1,E=T.power?ee(e.states[T.power],y):null,M=p.type==="home_battery"&&p.charge&&p.charge!=="none"?p.charge:p.type==="meter"&&p.export&&p.export!=="none"?p.export:null,A=M?ee(e.states[M]):null;A!==null&&(E=Math.max(0,E??0)-Math.max(0,A)),T.power&&E!==null&&!a.has(T.power)&&(a.add(T.power),i.push({id:$,powerEntity:T.power,floorId:f.id,x:p.x,z:p.z,power:Math.max(0,E),wallbox:p.type==="wallbox"||void 0}));let C=(E??0)>10||P?.state==="on"||P?.state==="running"||ao(P)&&$e(P);if(v&&Wt(e,p)){let D=[];if(v.soc!==null){let B=v.soc>=50?[.3,1,.5]:v.soc>=20?[1,.8,.25]:[1,.3,.25];D.push({part:"band",color:B,level:v.charging?1:.6})}if(v.locked===!1&&D.push({part:"lights",color:[1,.42,.02],level:1}),v.climateOn){let B=v.entities.climate?e.states[v.entities.climate]:void 0,ae=!!B&&(B.attributes.hvac_action==="cooling"||B.state==="cool");D.push({part:"cabin",color:ae?[.45,.8,1]:[1,.55,.22],level:.35})}D.length&&s.set(`${p.id}:vehicle`,{color:D[0].color,level:D[0].level,faces:D})}if(p.type==="radiator"&&P&&F(P.entity_id)==="climate"){let D=P.attributes;if(D.hvac_action==="heating"){let B=typeof D.temperature=="number"&&typeof D.current_temperature=="number"?D.temperature-D.current_temperature:1;s.set(p.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,B))})}}else(p.type==="washer"||p.type==="dryer"||p.type==="dishwasher")&&C&&s.set(p.id,{color:[.3,.85,1],level:.8});let U=le(p.type),L=!!U&&!U.light&&U.parts.some(D=>D.glow);if(P&&L&&O("sound")&&F(P.entity_id)==="media"&&P.state==="playing"&&!ln(p.type)){let D=typeof P.attributes.volume_level=="number"?P.attributes.volume_level:.5;s.set(p.id,{color:uo(P)??[.22,.88,1],level:.5+.5*D,ring:!0,plain:!0})}if(P&&ln(p.type)){let D=O("screens"),B=F(P.entity_id)==="light"?Ie(P):null,ae=F(P.entity_id)==="media"&&["playing","on","paused","idle"].includes(P.state),oe=D&&F(P.entity_id)==="media"?uo(P):B?B.color:$e(P)||ae?[.22,.88,1]:null,Me=D&&F(P.entity_id)==="media"?P.attributes.entity_picture??null:null;oe&&s.set(p.id,{color:oe,level:P.state==="playing"?1:.6,picture:Me,ring:L&&O("sound")&&P.state==="playing"})}if(n.has($))continue;n.add($);let j=T.entity?F(T.entity):null,Q=f.rooms.find(D=>D.points.length>=3&&W([p.x,p.z],D.points));r.push({id:$,floorId:f.id,roomId:Q?.id??null,x:p.x,z:p.z,y:fc(p)+pe(f,p),icon:p.icon?pn(p.icon):zt(j??"switch"),name:p.name||(T.entity?K(e,T.entity):we(e,p.type)),ownName:p.name||void 0,showName:!!p.show_name,text:v?this.carText(e,v,!!P&&!Io.has(P.state.toLowerCase())):p.type==="home_battery"?this.batteryText(e,x,E):p.type==="wallbox"?this.wallboxText(e,x,E):p.type==="meter"?this.meterText(e,E):P?ce(e,P):E!==null?Z(e,Math.max(0,E)):"",active:v?v.charging:P?$e(P):(E??0)>5,unavailable:P?q(P):!1,glow:null,furnitureId:p.id,energyDevice:p.type==="inverter"||p.type==="home_battery"||p.type==="wallbox"||p.type==="meter"||!!v,show:p.marker??(v?"always":void 0),fromFurniture:!0})}this.cameraScreens=0;let u=lo(e,t.floors),h=O("screens");for(let f of t.floors)for(let p of f.furniture){if(!h||!p.pictures?.length||!ln(p.type)||p.type==="fridge_smart"&&u.get(p.id)?.right)continue;let g=p.pictures.find(v=>va(e,v));if(!g)continue;let m=this.pictureUrl(g.image),S=p.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];m&&s.set(p.id,{color:S,level:1,picture:m,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall),{markers:r,consumers:i,screens:s,targets:l}}robotPaths(e,t){let n=this.replay;if(!n)return[];let a=[];for(let r of t.floors){let i=r.rooms.filter(s=>s.points.length>=3);for(let s of r.furniture){if(s.type!=="robot_vacuum")continue;let l=this.furnitureLinks?.get(s.id)?.entity??null;if(!l)continue;let d=n.robotRooms(l,Tt(e,l,s.room_sensor)),c=[];for(let u of d){let h=po(e,i,u),f=h?he(h.points):null,p=c[c.length-1];f&&(!p||p[0]!==f[0]||p[1]!==f[1])&&c.push([f[0],f[1]])}c.length&&a.push({floorId:r.id,points:c})}}return a}trailNow(e,t){let n=this.now(),a=Ut(e,t),r=this.replay?this.replay.rows(a.map(s=>s.entity),n-Bt,n):this.trailRows,i=a.map(s=>{let l=e.states[s.entity];return{entity:s.entity,state:l?.state,lastChanged:l?.last_changed?Date.parse(l.last_changed):void 0}});return Si(a,Mi(r,i,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!O("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!O("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let a=Ut(t,n).map(r=>r.entity);if(a.length){try{let r=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Bt).toISOString(),entity_ids:a,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=r??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t?.attributes.entity_picture;return!n||q(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),Or(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(a=>{if(n.has(a.type)||a.type.startsWith("lamp_")&&a.type!=="lamp_floor"&&a.type!=="lamp_uplight"||a.h<.04||pe(e,a)>.12)return!1;let r=le(a.type);return r&&(r.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(a.type))?!1:W([a.x,a.z],t)||et(a).some(i=>W(i,t))}).map(a=>et(a))}robotInfos(e,t){let n=[];for(let a of t.floors)for(let r of a.furniture){if(r.type!=="robot_vacuum")continue;let i=this.furnitureLinks.get(r.id)?.entity??null,s=i?e.states[i]?.state:void 0,l=io(s)?"cleaning":s==="returning"?"returning":s==="error"?"error":s==="docked"||!s?"docked":"idle",d=r.rotation*Math.PI/180,c=r.d*.14,u=[r.x-Math.sin(d)*c,r.z+Math.cos(d)*c],h=a.rooms.filter(m=>m.points.length>=3),p=(l==="cleaning"?ka(e,h,i,Tt(e,i,r.room_sensor)):null)??h.find(m=>W(u,m.points)),g=l==="cleaning"&&p?this.robotObstacles(a,p.points):[];n.push({id:r.id,floorId:a.id,rest:u,restHeading:-d,mode:l,room:p?.points??null,roomId:p?.id??null,obstacles:g})}return n}batteryText(e,t,n){let a=t?Number(e.states[t]?.state):Number.NaN,r=[];return Number.isFinite(a)&&r.push(`${X(e,a,0)} %`),n!==null&&Math.abs(n)>=10&&r.push(`${n<0?"\u25B2":"\u25BC"} ${Z(e,Math.abs(n))}`),r.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?Z(e,0):`${z(e,t<0?"energy_grid_export":"energy_grid_import")} ${Z(e,Math.abs(t))}`}wallboxText(e,t,n){let a=t?e.states[t]:void 0,r=String(a?.state??"").toLowerCase(),i=(n??0)>50||/charg|laden|lädt/.test(r),s=a?.entity_id.startsWith("binary_sensor.")?r==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(r),l=i?z(e,"wallbox_charging"):s?z(e,"wallbox_plugged"):a&&!q(a)&&!a.entity_id.startsWith("binary_sensor.")?ce(e,a):"",d=n!==null&&n>50?Z(e,n):"";return[l,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],a=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[r,i]of a){if(!r||r==="none")continue;let s=e.states[r];if(!s||q(s)||!($e(s)||s.state==="home"||s.state==="occupied"||s.state==="on"))continue;let d=F(r)==="light"?Ie(s):null;n.push({part:i,color:d?d.color:[1,.71,.28],level:d?d.level:.85})}return n}carText(e,t,n){let a=i=>z(e,i);if(n||t.away!==null){let i=t.away?` \xB7 ${t.away}`:"";return`${a("car_away")}${i}`}let r=[];return t.soc!==null&&r.push(`${X(e,t.soc,0)} %`),t.range!==null&&r.push(`${X(e,t.range,0)} ${t.rangeUnit}`),t.charging?r.push(t.chargingW!==null?`\u26A1 ${Z(e,t.chargingW)}`:`\u26A1 ${a("car_charging_short")}`):t.plugged&&r.push("\u{1F50C}"),t.locked!==null&&r.push(t.locked?"\u{1F512}":"\u{1F513}"),r.join(" \xB7 ")}ceilingAt(e,t,n){let r=e.rooms.find(l=>l.ceiling_height&&l.points.length>=3&&W([t,n],l.points))?.ceiling_height||e.height,i=this.building;if(!i||!(i.settings.roof.sections??[]).some(l=>Ba(l,e.elevation+r)))return r;let s=Ua(i,t,n);return s===null?r:Math.max(.5,Math.min(r,s-e.elevation))}lampMarker(e,t,n,a){let r=a?e.states[a]:void 0,i=le(n.type),s=oa[n.type]??i?.light??"floor",l=t.rooms.some(v=>v.points.length>=3&&W([n.x,n.z],v.points)),d=s==="strip"&&!l?Mt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!i?n.mount_y:i||s==="wall"||s==="strip"?pe(t,n):s==="table"?on(t,n.x,n.z):s==="bollard"||s==="garden"?Mt(t,n.x,n.z):0,c=t.rooms.find(v=>v.points.length>=3&&W([n.x,n.z],v.points)),u=this.ceilingAt(t,n.x,n.z),h=(i?i.mount==="ceiling":["ceiling","downlight","spot","panel","pendant"].includes(s))&&n.mount_y==null,f=h?t.height-u:0,p=i&&h?Math.max(0,d-f):d,g=tn.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+nn(n.type,n.h)):Math.abs(f)>.01?u:void 0,m=g??t.height,S=i?i.mount==="ceiling"?Math.max(.5,p-.15):p+n.h+.2:{ceiling:m-.3,downlight:m-.25,spot:m-.35,panel:m-.25,pendant:Math.max(.6,m-n.h-.25),floor:p+n.h+.25,uplight:p+n.h+.25,table:p+n.h+.2,wall:p+n.h+.2,strip:n.upright?p+n.w+.15:Math.max(.3,p-.2),bollard:p+n.h+.25,garden:p+n.h+.25}[s];return{id:a??`lamp:${n.id}`,floorId:t.id,roomId:c?.id??null,x:n.x,z:n.z,y:S,icon:zt("light"),name:n.name||(a?K(e,a):we(e,n.type)),text:r?ce(e,r):"",active:r?$e(r):!1,unavailable:r?q(r):!1,glow:r?fo(Ie(r,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.glow_scale):null,lamp:s,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,size:[n.w,n.d,n.h],base:p,top:g,pickable:!!a,furnitureId:n.id,pack:i?n.type:null,lightY:i?i.mount==="ceiling"?p:p+n.h*.85:void 0,effect:!!r&&r.state==="on"&&typeof r.attributes.effect=="string"&&!/^(none|off|solid|static|normal)$/i.test(r.attributes.effect),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=F(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let a=n.cover??n.contact??n.tilt;a&&e.set(t,a)}return e}scheduleThumbs(e=600){clearTimeout(this.thumbTimer);let t=this.building?.floors.filter(a=>a.rooms.length).length??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return w;let e=new Map(this.building.floors.map(r=>[r.id,r.name])),t=[...this._thumbs].sort((r,i)=>(this.building.floors.find(s=>s.id===i.floorId)?.elevation??0)-(this.building.floors.find(s=>s.id===r.floorId)?.elevation??0)),n=this._thumbsCompact,a=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return _`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${z(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${z(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${z(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${a}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${z(this.hass,"all_floors")}</span>
      </button>
      ${t.map(r=>_`<button class="fp3d-thumb" aria-pressed=${this.floorId===r.floorId} @click=${()=>this.fire("floor-tap",{floorId:r.floorId})}>
          ${n?w:_`<img src=${r.url} alt="" />`}
          <span>${e.get(r.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(this.ro){this.onDeviceTap(e,t,n);return}if(O("auto_pro")&&this.hass&&this.building)for(let r of this.building.floors)for(let i of r.furniture){if(i.type!=="parking"||!i.car)continue;let s=dn(this.hass,i);if([i.entity,i.car.device,...Object.values(s.entities)].filter(d=>!!d&&d!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:s};return}}let a=F(e);a==="light"||a==="cover"||a==="switch"||a==="fan"||a==="lock"||a==="camera"?this._menu={entity:e,x:t,y:n}:ve(this,e)}onDeviceSwipe(e,t,n,a,r){let i=this.hass?.states[e];if(this.ro)return!1;if(t==="start"){if(!i||q(i)||this.confirmSet.has(e))return!1;let l=F(e);if(l==="light"&&Co(i).dim){let d=i.state==="on"?typeof i.attributes.brightness=="number"?Math.round(i.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:d,value:d,x:a,y:r},!0}if(l==="cover"&&Fo(i)){let d=i.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:d,value:d,x:a,y:r},!0}return!1}let s=this._swipe;if(!s||s.entity!==e)return!1;if(t==="move"){let l=Math.round(Math.min(100,Math.max(0,s.start-n/220*100)));l!==s.value&&(this._swipe={...s,value:l});let d=performance.now();d-this.swipeSent>350&&(this.swipeSent=d,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>this.viewer?.focus(e.floorId,e.x,e.z,e.y,e.entity),120)}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return w;let t=this._alerts.slice(0,3);return _`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>_`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${yo(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${yo(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?_`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:w}
    </div>`}renderScenes(){let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return w;let t=e.floors.flatMap(r=>r.rooms).find(r=>r.id===this.roomId),n=t?ne(this.hass,t.area_id).filter(r=>F(r)==="scene"||F(r)==="script").slice(0,6):[];if(!n.length)return w;let a=t?.area_id?this.hass.areas?.[t.area_id]?.name:void 0;return _`<div class="fp3d-scenes">
      ${n.map(r=>_`<button class="fp3d-chip" aria-pressed=${this._sceneFired===r} @click=${()=>this.runScene(r)}>${K(this.hass,r,a)}</button>`)}
    </div>`}async startWalk(){let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=e.floors.filter(u=>u.rooms.some(h=>h.points.length>=3)),r=(this.roomId?n.find(u=>u.rooms.some(h=>h.id===this.roomId)):void 0)??n.find(u=>u.id===this.floorId)??[...n].sort((u,h)=>Math.abs(u.elevation)-Math.abs(h.elevation))[0];if(!r)return;let i=await Vo();this._walk={room:null,hint:!0},await this.updateComplete;let s=this.renderRoot.querySelector(".fp3d-walk-surface");if(!s)return;t.setFloor(r.id,!1),t.setWallMode("auto");let l=new i.FloorMap(e,r),d=this.roomId?r.rooms.find(u=>u.id===this.roomId):void 0,c;if(d){let u=l.freeNear(he(d.points));c={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new i.WalkCamera(t,l,s,{start:c,onRoom:u=>{this.walkRoomPts=u?.points??null,this._walk&&(this._walk={...this._walk,room:u?.name??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){if(!this.walker&&!this._walk)return;this.walker?.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return w;let e=r=>z(this.hass,r);if(!this._walk)return _`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,a=(r,i)=>{if(!n)return;let s=44,l=r.clientX-n.cx,d=r.clientY-n.cy,c=Math.hypot(l,d);c>s&&([l,d]=[l/c*s,d/c*s]),i.firstElementChild.style.transform=`translate(${l}px, ${d}px)`,this.walker?.setStick({x:l/s,y:d/s})};return _`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?_`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:w}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${r=>{let i=r.currentTarget,s=i.getBoundingClientRect();n={id:r.pointerId,cx:s.left+s.width/2,cy:s.top+s.height/2},i.setPointerCapture(r.pointerId),a(r,i)}}
        @pointermove=${r=>a(r,r.currentTarget)}
        @pointerup=${r=>{n=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
        @pointercancel=${r=>{n=null,r.currentTarget.firstElementChild.style.transform="",this.walker?.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return w;if(this._find===null)return _`<button class="fp3d-find-btn" title=${z(this.hass,"find")} aria-label=${z(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Pi(this.findIndex??=zo(this.hass,e),this._find);return _`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${z(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${z(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?_`<div class="fp3d-find-list">
            ${t.length?t.map(n=>_`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?un(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?_`<small>${n.where}</small>`:w}</span>
                  </button>`):_`<p>${z(this.hass,"find_none")}</p>`}
          </div>`:w}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return w;let n=(g,m)=>z(t,g,m),a=_`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return a;let r=this.floorId?e.floors.find(g=>g.id===this.floorId):void 0,i=r?[r]:e.floors,s=i.flatMap(g=>ho(t,g).lights),l=i.flatMap(g=>ho(t,g).covers),d=s.filter(g=>t.states[g]?.state==="on").length,c=!r,u=(g,m,S,v)=>{if(v.length){if(c&&this._armed!==g){this._armed=g,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(m,S,{entity_id:v})}},h=(g,m,S,v,b)=>_`<button class="fp3d-btn ${this._armed===g?"fp3d-central-armed":""}" ?disabled=${!b.length} @click=${()=>u(g,S,v,b)}>
        ${this._armed===g?n("central_sure"):n(m)}
      </button>`,f=(e.settings.favorites??[]).filter(g=>t.states[g]),p=this.buttons??e.settings.buttons??[];return _`${a}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <b>${r?r.name:n("central_house")}</b>
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${s.length?_` <small>${d}/${s.length}</small>`:w}</span>
          ${h("lights_on","central_on","light","turn_on",s.filter(g=>t.states[g]?.state==="off"))}
          ${h("lights_off","central_off","light","turn_off",s.filter(g=>t.states[g]?.state==="on"))}
        </div>
        ${l.length?_`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${h("covers_open","central_open","cover","open_cover",l)}
              ${h("covers_close","central_close","cover","close_cover",l)}
            </div>`:w}
        <b>${n("central_favorites")}</b>
        ${f.length?_`<div class="fp3d-central-favs">
              ${f.map(g=>{let[m,S]=$a(g),v=t.states[g],b=m==="homeassistant"&&v?.state==="on";return _`<button
                  class="fp3d-chip"
                  aria-pressed=${b||this._sceneFired===g}
                  ?disabled=${q(v)}
                  @click=${()=>{t.callService(m,S,{entity_id:g}),this._sceneFired=g,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${K(t,g)}
                </button>`})}
            </div>`:p.length?w:_`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${p.length?_`<div class="fp3d-central-favs">
              ${p.map(g=>_`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${hc(t,g)}
                  @click=${m=>{Ma(t,m.currentTarget,g),g.action!=="service"&&(this._central=!1)}}
                >
                  ${g.icon?_`<ha-icon .icon=${g.icon.startsWith("mdi:")?g.icon:`mdi:${g.icon}`}></ha-icon>`:w}${g.label}
                </button>`)}
            </div>`:w}
      </div>`}mediaCardUp(e,t){let n=e.states[t];if(!n||F(t)!=="media")return!1;if(!this.ro&&(this.mediaGrace.get(t)?.until??0)>Date.now()&&q(n))return!0;let a=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(r=>typeof r=="string"&&!!r.trim());return!q(n)&&(n.state==="playing"||n.state==="paused"&&a)}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return w;let e=z(this.hass,this.clean?"controls_show":"controls_hide");return _`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?$t`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:$t`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return w;let t=e.kind==="light"&&e.value<=0;return _`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${K(this.hass,e.entity)}</span>
      <b>${t?z(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!O("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let a=n.floors.find(i=>i.placements.some(s=>s.entity_id===e))?.id;if(!a)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let r=this.floorId===a?0:300;r&&(this.throughFloor=a,this.fire("floor-tap",{floorId:a})),setTimeout(()=>{this._through?.entity===e&&!this.viewer?.lookThrough(e)&&(this._through=null)},r)}endThrough(){let e=this._through;e&&(this._through=null,this.viewer?.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?w:_`<div class="fp3d-pro" role="dialog">
      <b>${z(this.hass,"pro_title")}</b>
      <span>${z(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${z(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip fp3d-chip-on" href=${Ea(this.hass.language)} target="_blank" rel="noopener">${z(this.hass,"pro_shop")}</a>
        <a class="fp3d-chip" href=${Pa(this.hass.language,this._proHint)} target="_blank" rel="noopener">${z(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${z(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${z(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return w;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!O("camera_cockpit"))return _`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${z(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${z(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(c=>c.placements.map(u=>u.entity_id)).filter(c=>F(c)==="camera"))];this.watchCameras(!0);let a=c=>{let u=e.states[c],h=u?.attributes.entity_picture;return h&&u&&!q(u)?h.startsWith("data:")?h:`${h}${h.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},r=c=>{let u=e.states[c];return _`${K(e,c)}${u?.state==="recording"?_` <b>● ${z(e,"state_recording")}</b>`:w}`},i=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(i){let c=a(i),u=this.liveFor(i),h=()=>{this.throughWall=!0,t(),this.lookThrough(i)};return _`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${z(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${r(i)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${h}>${z(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(c?_`<img src=${c} alt="" />`:_`<div class="fp3d-wall-none">${z(e,"state_unavailable")}</div>`)}</div>
      </div>`}let s=this.renderRoot.querySelector(".fp3d-wall-grid");s||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:d}=Ui(n.length,s?.clientWidth??this.clientWidth-48,s?.clientHeight??this.clientHeight-160);return _`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${z(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${z(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${d}px); grid-auto-rows: ${Math.round(d*9/16)}px">
        ${n.map(c=>{let u=a(c),h=Re(e,c).some(f=>e.states[f]?.state==="on");return _`<button class="fp3d-wall-cam ${h?"fp3d-wall-seen":""}" title=${z(e,"camera_wall_big")} @click=${()=>this._wallBig=c}>
            ${u?_`<img src=${u} alt="" />`:_`<div class="fp3d-wall-none">${z(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${r(c)}</span>
          </button>`})}
      </div>
    </div>`}liveFor(e){if(this.live?.id!==e){let t={id:e,el:null,failed:!1};this.live=t;let n=window;n.loadCardHelpers?n.loadCardHelpers().then(a=>{if(this.live!==t)return;let r=a.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});r.hass=this.hass,t.el=r,this.requestUpdate()}).catch(()=>{t.failed=!0,this.requestUpdate()}):t.failed=!0}return this.live.el}renderThrough(){let e=this._through;if(!e||!this.hass)return w;let t=this.hass.states[e.entity],n=t?.attributes.entity_picture,a=n&&!q(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null;return _`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${a?_`<img class="fp3d-through-img" src=${a} alt="" />`:w}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${K(this.hass,e.entity)}</span>
        <span class="fp3d-still">${z(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${z(this.hass,"through_blend")}
          @input=${r=>this._blend=Number(r.target.value)/100}
        />
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${z(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){let e=this._menu;if(!e||!this.hass||this.ro)return w;let t=this.renderRoot.querySelector(".fp3d-stage"),n=t?.clientWidth??800,a=t?.clientHeight??600,r=Math.max(8,Math.min(n-240,e.x-116)),i=Math.max(8,Math.min(a-360,e.y-170));return _`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${r}px;top:${i}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${O("sound")?this.building?.settings.media_presets??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${O("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${s=>this.lookThrough(s.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,t=0,n=0){if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(this.ro){let r=this.building,i=r?r.energy.grid??ht(r,l=>this.furnitureLinks?.get(l.id)?.power??null).grid:null,s=e==="grid"?i:e.startsWith("detect:")?e.slice(7):e;s&&this.showInfo(s,t,n);return}if(e==="grid"){let r=this.building,i=r?r.energy.grid??ht(r,s=>this.furnitureLinks?.get(s.id)?.power??null).grid:null;i&&ve(this,i);return}if(e.startsWith("detect:")){ve(this,e.slice(7));return}let a=F(e);if(a==="cover"||a==="camera"){this._menu={entity:e,x:t,y:n};return}if(a&&fa.has(a)){if(this.confirmSet.has(e)&&!confirm(z(this.hass,"confirm_switch",{name:K(this.hass,e)})))return;Ra(this.hass,e)}else ve(this,e)}startViewOf(){return this.startView??this.building?.settings.start_view??null}currentView(){return this.viewer?.currentView()??null}resetView(){this._through=null,this.viewer?.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!O("energy_pro")||!e||this.roomId||!this.showEnergy)return w;let t=a=>z(this.hass,a),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:Z(this.hass,e.consumption)}),e.grid!==null){let a=e.grid<0;n.push({cls:a?"export":"grid",label:t(a?"energy_grid_export":"energy_grid_import"),value:Z(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:Z(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let a=[e.battery!==null?Z(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:a.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${X(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),_`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?w:n.map(a=>_`<div class="fp3d-energy-item fp3d-energy-${a.cls}"><span>${a.label}</span><b>${a.value}</b></div>`)}
      ${this.flows!==null?w:_`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?w:_`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return w;let e=Mn[this.heatMode],t=this.heatMode==="temperature",n=t?ot(this.hass,e.stops[0][0]):e.stops[0][0],a=t?ot(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],r=t?ge(this.hass):e.unit,i=s=>z(this.hass,s);return _`<div class="fp3d-legend">
      <b>${i(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${wi(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${X(this.hass,n,0)} ${r}</span><span>${X(this.hass,a,0)} ${r}</span></span>
      ${this.heatValues.size?w:_`<span class="fp3d-legend-none">${i("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=qt[this.theme]??qt.neon,t=this._sky;return e.night[0].map((n,a)=>Math.round(n+(e.day[0][a]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(r,i)=>`rgb(${r.map((s,l)=>Math.round(s+(i[l]-s)*e)).join(",")})`,n=qt[this.theme]??qt.neon,a=`--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}`;return _`<div
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${a}
    >
      ${this._error?_`<p class="fp3d-error">${this._error}</p>`:w} ${this.clean?w:this.renderEnergy()} ${this.renderHologram()} ${this.clean?w:this.renderLegend()}
      ${this.renderAlerts()} ${this.clean||this._walk?w:_`${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?w:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderThrough()} ${this.renderCameraWall()}
      ${this.clean?w:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.showStats&&this._stats?_`<span class="fp3d-stats"
            ><b>${this._stats.fps?z(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):z(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?_`(${this._stats.busy.map(r=>z(this.hass,`stats_busy_${r}`)).join(", ")})`:w} ·
            ${z(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${z(this.hass,this._stats.low?"stats_low":"stats_full",{r:X(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${X(this.hass,this.syncMs,1)} ms`:""}</span
          >`:w}
    </div>`}static styles=[ye,Ce,de`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
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
        font-size: 11px;
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
        font: 600 12px var(--fp3d-font);
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
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
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
        display: grid;
        place-items: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        overflow: hidden;
        background: #ff5fd2;
        color: #fff;
        font: 700 12px var(--fp3d-font);
        box-shadow:
          0 0 0 2px rgba(255, 95, 210, 0.45),
          0 0 18px #ff5fd2;
        pointer-events: auto;
      }
      .fp3d-person img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .fp3d-person[hidden] {
        display: none;
      }
      .fp3d-no-room-names .fp3d-pin {
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
      .fp3d-holo-pool-chem {
        display: grid;
        grid-template-columns: 50px 64px 1fr;
        align-items: center;
        gap: 6px;
        margin-top: 5px;
        font-size: 12px;
      }
      .fp3d-holo-pool-chem span {
        opacity: 0.8;
      }
      .fp3d-holo-pool-chem b {
        font-variant-numeric: tabular-nums;
        white-space: nowrap;
      }
      .fp3d-holo-pool-chem i {
        position: relative;
        height: 4px;
        border-radius: 2px;
        /* red – yellow – green (the ideal range in the middle) – yellow – red */
        background: linear-gradient(90deg, rgba(255, 77, 64, 0.35), rgba(255, 204, 64, 0.35) 25%, rgba(77, 255, 128, 0.45) 40%, rgba(77, 255, 128, 0.45) 60%, rgba(255, 204, 64, 0.35) 75%, rgba(255, 77, 64, 0.35));
      }
      .fp3d-holo-pool-chem em {
        position: absolute;
        top: -2px;
        width: 8px;
        height: 8px;
        margin-left: -4px;
        border-radius: 50%;
        box-shadow: 0 0 6px currentColor;
      }
      .fp3d-holo-pool-line {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.85;
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",qo);function Z(o,e){return Math.abs(e)>=1e3?`${X(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function fc(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var mc=.25,Qi=o=>Math.round(o*1e3)/1e3;function Wo(o,e,t,n,a){let r=o.rooms.find(i=>i.points.length>=3&&W([e,t],i.points));return!r||W([n,a],r.points)?[n,a]:W([n,t],r.points)?[n,t]:W([e,a],r.points)?[e,a]:[e,t]}function Ji(o,e,t,n=mc){let a=o.rooms.find(d=>d.points.length>=3&&W([e.x,e.z],d.points));if(!a)return null;let r=a.points,i=Pe(r)>=0?1:-1,s=t/2,l=null;for(let d=0;d<r.length;d++){let c=r[d],u=r[(d+1)%r.length],h=Math.hypot(u[0]-c[0],u[1]-c[1]);if(h<.3)continue;let f=[(u[0]-c[0])/h,(u[1]-c[1])/h],p=[-f[1]*i,f[0]*i],g=(e.x-c[0])*f[0]+(e.z-c[1])*f[1];if(g<0||g>h)continue;let S=o.rooms.some(y=>y.id!==a.id&&y.points.some((E,M)=>{let A=y.points[(M+1)%y.points.length],C=Math.abs((E[0]-c[0])*p[0]+(E[1]-c[1])*p[1]),U=Math.abs((A[0]-c[0])*p[0]+(A[1]-c[1])*p[1]);return C<.02&&U<.02}))?s:0,v=(e.x-c[0])*p[0]+(e.z-c[1])*p[1]-S,b=Math.atan2(-p[0],p[1])*180/Math.PI,x=y=>Math.abs((e.rotation-y+540)%360-180),$=[{rotation:b,extent:e.d/2},{rotation:b+90,extent:e.w/2},{rotation:b-90,extent:e.w/2}].reduce((y,E)=>x(E.rotation)<x(y.rotation)?E:y);if(x($.rotation)>50)continue;let P=v-$.extent;Math.abs(P)>n||l&&Math.abs(P)>=Math.abs(l.gap)||(l={x:Qi(e.x-p[0]*P),z:Qi(e.z-p[1]*P),rotation:(Math.round($.rotation)%360+360)%360,gap:P})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}var Bo;function gc(){let o=new URL("./neonplan3d-timetravel.js?v=7d1971f352bf",new URL(import.meta.url)).href;return Bo??=import(o).catch(e=>{throw Bo=void 0,e}),Bo}var ft=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),gc().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("NeonPlan 3D: time travel failed to load",t),this.host.requestUpdate()}))}stop(){this.active&&(this.starting=!1,this.session?.dispose(),this.session=null,this.host.requestUpdate())}hass(e){return this.session?.hass??e}};var G={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},Uo=class extends se{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_newOffers:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_accent:{state:!0},_weather:{state:!0}};offersChecked=!1;data=new nt(this);tt=new ft(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._newOffers=0,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode=G.get("walls")==="cut"?"cut":"auto",this._explode=G.get("explode")!=="0",this._keepRoof=G.get("roof")==="1";let e=G.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=G.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=G.get("markers");this._markers=t==="none"||t==="all"?t:"important";let n=G.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"||n==="values"?n:"none";let a=G.get("theme");this._theme=a&&Ao.includes(a)?a:"neon";let r=G.get("accent");this._accent=r&&/^#[0-9a-f]{6}$/i.test(r)?r:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let i=G.get("floor_stack");this._floorStack=i==="stacked"||i==="single"?i:"dim",this._roomNames=G.get("room_names")!=="0",this._controlsRight=G.get("controls")==="right",this._keepView=G.get("keep_view")==="1",this._trail=G.get("trail")==="1",this._cameraWall=!1,this._clean=G.get("clean")==="1",this._navWrap=G.get("nav_wrap")==="1",this._optsOpen=!1,this._weather=G.get("weather")!=="0"}t(e,t){return z(this.hass,e,t)}willUpdate(e){e.has("hass")&&this.hass&&(this.data.setHass(this.hass),this.tt.session?.setLive(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(n=>n.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){return this.hass?.user?.is_admin??!1}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){let{floorId:t,roomId:n}=e.detail;if((this.data.building?.floors.length??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,G.set("walls",e)}setKeepRoof(e){this._keepRoof=e,G.set("roof",e?"1":"0")}setExplode(e){this._explode=e,G.set("explode",e?"1":"0")}setQuality(e){this._quality=e,G.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let a=structuredClone(n);for(let r of a.floors){let i=r.furniture.find(s=>s.id===e);i&&t(i,r)}this.data.edit(a)}editDevice(e,t){let n=this.data.building;if(!n)return;let a=structuredClone(n);for(let r of a.floors){let i=r.placements.find(s=>s.entity_id===e);i&&t(i,r)}this.data.edit(a)}moveDevice(e){let{id:t,x:n,z:a}=e.detail;this.editDevice(t,(r,i)=>{let[s,l]=Wo(i,r.x,r.z,n,a);Object.assign(r,{x:s,z:l})})}turnStep(){return F(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let a of n.floors)a.placements=a.placements.filter(r=>r.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let n=this.data.building?.floors.find(u=>u.placements.some(h=>h.entity_id===e)),a=n?.placements.find(u=>u.entity_id===e);if(!n||!a)return w;let r=F(e),i=r==="light",s=r==="camera",l=a.mount==="ceiling",d=r?rt(r,n.height,i||s?a.mount??(s?"wall":"ceiling"):null):1,c=(u,h,f,p,g,m)=>_`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${f}
          min=${p}
          max=${g}
          .value=${String(Math.round(h*100)/100)}
          @change=${S=>{let v=parseFloat(S.target.value.replace(",","."));Number.isFinite(v)&&m(Math.min(g,Math.max(p,v)))}}
        />
      </label>`;return _`${i?_`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,h=>Object.assign(h,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>_`<option value=${u} ?selected=${u===(a.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:w}
      ${s?_`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,h=>Object.assign(h,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${c(this.t("camera_fov_short"),a.fov??(l?360:90),5,10,360,u=>this.editDevice(e,h=>h.fov=u))}
            ${c(this.t("camera_reach_short"),a.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,h=>h.reach=u))}
            ${c(this.t("camera_tilt_short"),a.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,h=>h.tilt=u))}`:w}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((a.y??d)*100)/100)}
          @change=${u=>{let h=parseFloat(u.target.value.replace(",","."));Number.isFinite(h)&&h>=0&&this.editDevice(e,f=>f.y=Math.round(h*1e3)/1e3)}}
        />
      </label>
      ${a.y!==null?_`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:w}`}furnitureName(e){let t=this.data.building?.floors.flatMap(n=>n.furniture).find(n=>n.id===e);return t?we(this.hass,t.type):""}moveFurniture(e){let{id:t,x:n,z:a}=e.detail,r=this.data.building?.settings.wall_interior??.12;this.editFurniture(t,(i,s)=>{let[l,d]=Wo(s,i.x,i.z,n,a);Object.assign(i,{x:l,z:d});let c=Ji(s,i,r);c&&Object.assign(i,c)})}renderSizeFields(e){let t=this.data.building?.floors.flatMap(l=>l.furniture).find(l=>l.id===e);if(!t)return w;let n=fr(this.hass,this.data.building?.settings.units)==="imperial",a=l=>n?mr(l):String(Math.round(l*100)/100),r=l=>n?gr(l,"imperial"):parseFloat(l.replace(",",".")),i=(l,d)=>_`<label class="fp3d-size" title=${this.t(`size_${l}`)}
      >${d}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${a(t[l])}
        @change=${c=>{let u=r(c.target.value)??NaN;Number.isFinite(u)&&u>0&&this.editFurniture(e,h=>h[l]=Math.round(u*1e3)/1e3)}}
    /></label>`,s=this.data.building?.floors.find(l=>l.furniture.some(d=>d.id===e));return _`${i("w",this.t("size_short_w"))}${i("d",this.t("size_short_d"))}${i("h",this.t("size_short_h"))}
    ${s&&na(t)?_`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${a(t.mount_y??pe(s,t))}
              @change=${l=>{let d=r(l.target.value)??NaN;Number.isFinite(d)&&d>=0&&this.editFurniture(e,c=>c.mount_y=Math.round(d*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?_`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,l=>l.mount_y=null)}>${this.t("height_auto")}</button>`:w}`:w}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let a of n.floors)a.furniture=a.furniture.filter(r=>r.id!==e);this.data.edit(n),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!O("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(a,r)=>z(this.hass,a,r)})}}updated(){if(this.ttLinked||!this.data.building||!Ze()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&O("time_travel")&&this.toggleTimeTravel(e)}back(){this._roomId?this._roomId=null:this._floorId&&(this.data.building?.floors.length??0)>1?this._floorId=null:this.view3d()?.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}checkOffers(){this.offersChecked||!this.hass?.user?.is_admin||(this.offersChecked=!0,Nr(this.hass).then(e=>this._newOffers=e.active?jr(e.offers??[]).length+Dr(e.updates??[]).length:0).catch(()=>{}))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop()}render(){this.checkOffers();let e=this.data.building,t=this.data.saveState;return _`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._clean&&this._mode==="view"?w:_`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>NeonPlan 3D</h1>
          ${this.isAdmin?_`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")} title=${this._newOffers?this.t("offers_dot"):""}>
                  ✦ ${this.t("ext_tab")}${this._newOffers?_`<span class="fp3d-dot" aria-label=${this.t("offers_dot")}></span>`:w}
                </button>
              </div>`:w}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&e?.floors.some(n=>n.rooms.length)?_`<button
                  class="fp3d-opts-btn"
                  aria-expanded=${this._optsOpen}
                  title=${this.t("view_options")}
                  aria-label=${this.t("view_options")}
                  @click=${()=>this._optsOpen=!this._optsOpen}
                >
                  ⚙
                </button>
                <div class="fp3d-view-opts ${this._optsOpen?"fp3d-opts-open":""}">
                <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("quality")}>
                ${["auto","low","high"].map(n=>_`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${Ao.map(n=>_`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,G.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${n=>{this._accent=n.target.value,G.set("accent",this._accent)}}
                  />
                  ${this._accent?_`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,G.set("accent","")}}
                      >
                        ↺
                      </button>`:w}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>_`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,G.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(n=>_`<button
                      aria-pressed=${this._controlsRight===n}
                      title=${this.t(n?"controls_right":"controls_left")}
                      aria-label=${this.t(n?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=n,G.set("controls",n?"right":"left")}}
                    >
                      ${n?"\u25E8":"\u25E7"}
                    </button>`)}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,G.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,G.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:w}
          ${this._mode==="editor"&&t!=="idle"?_`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:w}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?w:this.renderNotices()}
        ${this.data.error&&!e?_`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:w}
        ${!e&&!this.data.error?_`<p class="fp3d-message">${this.t("loading")}</p>`:w}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):w}
      </div>
    `}renderNotices(){let e=this.data,t=[];if(e.needsRestart&&(e.versionGap==="frontend"?t.push(_`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(_`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(_`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let n=new Date(e.draft.savedAt).toLocaleString(this.hass?.language);t.push(_`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:n})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?_`<div class="fp3d-notices">${t}</div>`:w}renderExtensions(){return this._editorReady?_`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @offers-seen=${()=>this._newOffers=0}
    ></fp3d-extensions>`:(to().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),_`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?_`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(to().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),_`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){if(!e.floors.length||!e.floors.some(r=>r.rooms.length))return _`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?_`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:w}
      </div>`;let t=e.floors.find(r=>r.id===this._floorId),n=t?[t]:e.floors,a=this.tt.active;return _`
      ${this._clean?w:_`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?_`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(r=>_`<button
                  class="fp3d-chip"
                  aria-pressed=${r.id===this._floorId}
                  @click=${()=>{this._floorId=r.id,this._roomId=null}}
                >
                  ${r.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:w}
        ${n.flatMap(r=>[n.length>1&&r.rooms.some(i=>i.name.trim())?_`<span class="fp3d-nav-floor">${r.name}</span>`:w,...r.rooms.filter(i=>i.name.trim()).map(i=>_`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${i.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=r.id),this._roomId=i.id===this._roomId?null:i.id}}
            >
              ${i.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,G.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${a?"fp3d-tt":""}">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.tt.hass(this.hass)}
          .replay=${this.tt.session?.replay??null}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
          ?trail=${this._trail}
          .cameraWall=${this._cameraWall&&!a}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,G.set("clean",this._clean?"1":"0")}}
          ?weather=${this._weather}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:e.floors[0]?.id??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!a}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${r=>this._selFurniture=r.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${r=>this._selDevice=r.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${r=>{this._floorId=r.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?_`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${r=>this.view3d()?.lookThrough(r.detail.entity)}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${a}
              .room=${e.floors.flatMap(r=>r.rooms).find(r=>r.id===this._roomId)??null}
              .floor=${e.floors.find(r=>r.rooms.some(i=>i.id===this._roomId))??null}
              .confirmEntities=${at(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:w}
        ${this.tt.session?_`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:w}
        ${this._clean?w:_`<div class="fp3d-overlay">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?_`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:w}
          ${!this._floorId&&e.settings.roof.type!=="none"?_`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:w}
          ${e.floors.length>1&&this._floorId?_`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(r=>_`<button
                      aria-pressed=${this._floorStack===r}
                      @click=${()=>{this._floorStack=r,G.set("floor_stack",r)}}
                    >
                      ${this.t(`floor_stack_short_${r}`)}
                    </button>`)}
              </div>`:w}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(r=>_`<button
                  aria-pressed=${this._heat===r}
                  @click=${()=>{this._heat=r,G.set("heat",r)}}
                >
                  ${this.t(r==="none"?"heat_off":`heat_short_${r}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,G.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,G.set("trail",this._trail?"1":"0")}}
          >
            ${O("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>this._cameraWall=!this._cameraWall}
          >
            ${O("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,G.set("weather",this._weather?"1":"0")}}
          >
            ${O("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${a} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${O("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?_`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:w}
        </div>`}
        ${this._furnish?_`<div class="fp3d-furnish-bar">
              ${this._selFurniture?_`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,r=>r.mirror=!r.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?_`<span>${K(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:_`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:w}
      </div>
    `}static styles=[ye,Ce,de`
      .fp3d-dot {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 6px;
        border-radius: 50%;
        background: #ffb547;
        box-shadow: 0 0 8px #ffb547;
        vertical-align: middle;
      }
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. */
        height: 100vh;
        height: 100dvh;
        background: var(--fp3d-bg);
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
      .fp3d-view-opts {
        display: contents;
      }
      .fp3d-opts-btn {
        display: none;
      }
      /* phones: the view options fold behind ⚙ (one header row instead of three) */
      @media (max-width: 700px) {
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
      /* a desktop shows a thin scrollbar while the pointer rests on the bar */
      .fp3d-nav:hover {
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
      /* phones and portrait tablets: panel as a sheet at the bottom, the switches step aside */
      @container fp3d ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
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
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",Uo);function In(o,e,t=new Date){if(!o||o==="off")return!1;if(o==="sun")return e?.states["sun.sun"]?.state==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let a=Number(n[1])*60+Number(n[2]),r=Number(n[3])*60+Number(n[4]),i=t.getHours()*60+t.getMinutes();return a<=r?i>=a&&i<r:i>=a||i<r}var Xi;function Zi(){let o=new URL("./neonplan3d-card-editor.js?v=aeaa382755b2",new URL(import.meta.url)).href;return Xi??=import(o),Xi}function es(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var Go=class extends se{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new nt(this);tt=new ft(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=es(),this._heat=null,this._explode=null,this._fullscreen=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){clearTimeout(this.cleanTimer);let t=this._config?.controls_hide_after??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){clearTimeout(this.idleTimer);let e=this._config?.idle_return??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){return this.shadowRoot?.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!O("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:n?.quality??"auto",speed:n?.time_travel_speed??null,range:n?.time_travel_range??null,t:(a,r)=>z(this.hass,a,r)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){if(this.tt.session?.playing){this.armIdle();return}this.tt.stop(),this._roomId=this._config?.room??null,this._floorId=void 0,this.view3d()?.resetView(),this._config?.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{this._fullscreen=!!document.fullscreenElement&&this.shadowRoot?.contains(document.fullscreenElement)===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{let e=Math.round(window.visualViewport?.height??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),this._config?.fill&&!this._fullscreen){let t=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(t-this._top)>1)&&(this._top=t)}};connectedCallback(){super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),window.visualViewport?.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>this._night=In(this._config?.night,this.hass),6e4)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),window.visualViewport?.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen():this.shadowRoot?.querySelector("ha-card")?.requestFullscreen?.()}static async getConfigElement(){return await Zi(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=es(),this._heat=null,this._explode=null,this._orbit=!1,this._night=In(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){return Math.ceil((this._config?.height??420)/50)}getGridOptions(){return{columns:"full",rows:this._config?.fill?12:Math.ceil((this._config?.height??420)/56),min_rows:4}}willUpdate(e){if(e.has("hass")&&this.hass){this.data.setHass(this.hass),this.tt.session?.setLive(this.hass);let t=In(this._config?.night,this.hass);t!==this._night&&(this._night=t)}}get canSwitch(){return!this._config?.floor||this.thumbs}get thumbs(){return this._config?.floor_thumbs??!this._config?.floor}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){let e=this.data.building,t=this._config?.height??420,n=this._config;!this.roomApplied&&e&&n?.room&&(this.roomApplied=!0,e.floors.some(v=>v.rooms.some(b=>b.id===n.room))&&(this._roomId=n.room));let a=this._floorId===void 0?n?.floor??null:this._floorId,r=e&&e.floors.length===1?e.floors[0].id:e?.floors.some(v=>v.id===a)?a:null,i=!!this._roomId&&n?.room_panel===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!r&&(e?.floors.length??0)>1,s=v=>n?.controls===!0||Array.isArray(n?.controls)&&n.controls.includes(v),l=["temperature","humidity","co2"].filter(v=>s(v)),d=this._walls??n?.walls??"auto",c=this._heat??n?.heatmap??"none",u=this._explode??n?.explode??!0,h=this._fullscreen?"100%":n?.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${t}px`,f=!!e&&!this._clean&&(i||(!!n?.controls||!!n?.time_travel)&&!(this._roomId&&n.room_panel!==!1)),p=this.tt.active,g=n?.controls_hidden!==void 0||(n?.controls_hide_after??0)>0,m=v=>z(this.hass,v),S=/^#[0-9a-f]{6}$/i.test(n?.accent??"")?n.accent:null;return _`<ha-card class=${this._night?"fp3d-night":""} style=${S?`--fp3d-accent:${S}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${p?"fp3d-tt":""}" style="height:${h}">
        ${e&&e.floors.some(v=>v.rooms.length)?_`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${this.tt.session?.replay??null}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${r}
              .roomId=${this._roomId}
              .wallMode=${d}
              .explode=${u}
              .keepRoof=${n?.roof_fade===!1}
              .quality=${this._config?.quality??"auto"}
              ?showStats=${this._config?.stats??!1}
              .markerMode=${this._config?.markers??"important"}
              .markerNames=${this._config?.marker_names===!0}
              .central=${this._config?.central!==!1}
              .walkable=${this._config?.walk!==!1}
              .buttons=${this._config?.buttons?.map((v,b)=>({id:`card_${b}`,...v}))??null}
              .heatMode=${c}
              .theme=${this._config?.theme??"neon"}
              .accent=${this._config?.accent??null}
              .showEnergy=${this._config?.energy??!0}
              .flows=${this._config?.flows??null}
              .holograms=${this._config?.holograms??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${n?.room_names!==!1}
              .controlsRight=${n?.controls_side==="right"}
              .keepView=${n?.keep_view===!0}
              .floorStack=${n?.floor_stack??"dim"}
              .panelOpen=${!!this._roomId&&n?.room_panel!==!1}
              .alerts=${n?.alerts!==!1}
              .alertJump=${!!n?.alert_jump}
              .scenes=${n?.scenes!==!1}
              ?trail=${!!n?.motion_trail}
              .cameraWall=${this._cameraWall&&!p}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${g}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              ?weather=${n?.weather!==!1}
              .weatherEntityId=${n?.weather_entity??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${n?.start_view??null}
              style=${p?`--fp3d-bottom-inset: ${f?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:f?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${v=>{if(this.canSwitch&&(e?.floors.length??0)>1&&v.detail.floorId&&r!==v.detail.floorId){this._floorId=v.detail.floorId,this._roomId=null;return}v.detail.roomId&&(this._roomId=v.detail.roomId===this._roomId?null:v.detail.roomId)}}
              @floor-tap=${v=>{this._floorId=v.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:_`<p class="fp3d-card-msg">${this.data.error??(e?z(this.hass,"no_building"):z(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&this._config?.room_panel!==!1?_`<fp3d-room-panel
              @camera-look=${v=>this.view3d()?.lookThrough(v.detail.entity)}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${p}
              .room=${e.floors.flatMap(v=>v.rooms).find(v=>v.id===this._roomId)??null}
              .floor=${e.floors.find(v=>v.rooms.some(b=>b.id===this._roomId))??null}
              .confirmEntities=${at(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:w}
        ${f&&e?_`<div class="fp3d-card-controls">
              ${i?_`<button class="fp3d-chip" @click=${()=>this.back()}>${m("back")}</button>`:w}
              ${n?.time_travel?_`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${p} title=${m("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${O("time_travel")?"\u23EA":"\u{1F512}"} ${m("tt_chip")}
                  </button>`:w}
              ${n?.camera_wall?_`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${m("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${m("cameras_short")}</button>`:w}
              ${s("walls")?_`<div class="fp3d-seg">
                    <button aria-pressed=${d==="auto"} @click=${()=>this.setWalls("auto")}>${m("walls_auto")}</button>
                    <button aria-pressed=${d==="cut"} @click=${()=>this.setWalls("cut")}>${m("walls_cut")}</button>
                  </div>`:w}
              ${s("floors")&&e.floors.length>1&&!r?_`<div class="fp3d-seg">
                    <button aria-pressed=${u} @click=${()=>this._explode=!0}>${m("floors_apart")}</button>
                    <button aria-pressed=${!u} @click=${()=>this._explode=!1}>${m("floors_stacked")}</button>
                  </div>`:w}
              ${l.length?_`<div class="fp3d-seg" role="group" aria-label=${m("heatmap")}>
                    ${["none",...l].map(v=>_`<button aria-pressed=${c===v} @click=${()=>this._heat=v}>
                          ${m(v==="none"?"heat_off":`heat_short_${v}`)}
                        </button>`)}
                  </div>`:w}
            </div>`:w}
        ${this.tt.session?_`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:w}
        ${n?.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?_`<button class="fp3d-card-full" title=${m(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${m(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:w}
        ${n?.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?_`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?_`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:w}
      </div>
    </ha-card>`}static styles=[ye,Ce,de`
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
      .fp3d-card-dash {
        width: auto;
        min-width: 38px;
        padding: 0 12px;
        font-size: 14px;
        font-weight: 600;
      }
      .fp3d-card-dash-2 {
        right: 56px;
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
      .fp3d-card-msg {
        margin: auto;
        color: var(--fp3d-muted);
        padding: 16px;
        text-align: center;
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
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",Go);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:z(void 0,"card_name"),description:z(void 0,"card_description"),preview:!1})}hr();
