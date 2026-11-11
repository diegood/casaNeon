Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var cs=new URL(import.meta.url),as=cs.searchParams.get("v"),ss=o=>new URL(`./fonts/${o}${as?`?v=${as}`:""}`,cs).href,ls="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function ds(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${ss("figtree.woff2")}) format("woff2");unicode-range:${ls}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${ss("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${ls}}`,document.head.append(o)}function us(o,e){var t,n;return e==="metric"||e==="imperial"?e:((n=(t=o==null?void 0:o.config)==null?void 0:t.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function mp(o,e){return String(Number(o.toFixed(e)))}function ps(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),r=Math.floor(n/12+1e-9),i=n-r*12,a=mp(i,e>=2?1:0);return r?i<.05?`${t}${r}'`:`${t}${r}' ${a}"`:`${t}${a}"`}function hs(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,r=0,i=!1,a=!1,s=t;for(let l of t.matchAll(n)){let u=Number(l[1]);if(!Number.isFinite(u))return null;let c=l[2];i=!0,s=s.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(r+=u*.3048,a=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?r+=u*.0254:c==="mm"?r+=u/1e3:c==="cm"?r+=u/100:c==="m"?r+=u:r+=e==="imperial"?u*(a?.0254:.3048):u}return!i||/[^\s+]/.test(s)?null:r}function Rn(o){var t;let e=(t=o==null?void 0:o.locale)==null?void 0:t.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let n=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return n?{hourCycle:n==="h11"||n==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var yo=globalThis,wo=yo.ShadowRoot&&(yo.ShadyCSS===void 0||yo.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Rr=Symbol(),fs=new WeakMap,Fn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Rr)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(wo&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=fs.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&fs.set(t,e))}return e}toString(){return this.cssText}},ms=o=>new Fn(typeof o=="string"?o:o+"",void 0,Rr),Me=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new Fn(t,o,Rr)},gs=(o,e)=>{if(wo)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=yo.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},Fr=wo?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ms(t)})(o):o;var{is:gp,defineProperty:bp,getOwnPropertyDescriptor:_p,getOwnPropertyNames:vp,getOwnPropertySymbols:yp,getPrototypeOf:wp}=Object,xo=globalThis,bs=xo.trustedTypes,xp=bs?bs.emptyScript:"",Hr=xo.reactiveElementPolyfillSupport,Hn=(o,e)=>o,Or={toAttribute(o,e){switch(e){case Boolean:o=o?xp:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},vs=(o,e)=>!gp(o,e),_s={attribute:!0,type:String,converter:Or,reflect:!1,useDefault:!1,hasChanged:vs};Symbol.metadata??=Symbol("metadata"),xo.litPropertyMetadata??=new WeakMap;var st=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_s){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&bp(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=_p(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let s=r==null?void 0:r.call(this);i==null||i.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_s}static _$Ei(){if(this.hasOwnProperty(Hn("elementProperties")))return;let e=wp(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Hn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Hn("properties"))){let t=this.properties,n=[...vp(t),...yp(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(Fr(r))}else e!==void 0&&t.push(Fr(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var i;let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Or).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){var i,a;let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let s=n.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:Or;this._$Em=r;let u=l.fromAttribute(t,s.type);this[r]=u??((a=this._$Ej)==null?void 0:a.get(r))??u,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){var a;if(e!==void 0){let s=this.constructor;if(r===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??vs)(i,t)||n.useDefault&&n.reflect&&i===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,a]of r){let{wrapped:s}=a,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};st.elementStyles=[],st.shadowRootOptions={mode:"open"},st[Hn("elementProperties")]=new Map,st[Hn("finalized")]=new Map,Hr==null||Hr({ReactiveElement:st}),(xo.reactiveElementVersions??=[]).push("2.1.2");var Br=globalThis,ys=o=>o,ko=Br.trustedTypes,ws=ko?ko.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ps="$lit$",bt=`lit$${Math.random().toFixed(9).slice(2)}$`,Is="?"+bt,kp=`<${Is}>`,Rt=document,Ln=()=>Rt.createComment(""),jn=o=>o===null||typeof o!="object"&&typeof o!="function",Ur=Array.isArray,$p=o=>Ur(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Lr=`[ 	
\f\r]`,On=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xs=/-->/g,ks=/>/g,zt=RegExp(`>|${Lr}(?:([^\\s"'>=/]+)(${Lr}*=${Lr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$s=/'/g,Ss=/"/g,Es=/^(?:script|style|textarea|title)$/i,Kr=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),b=Kr(1),lt=Kr(2),dg=Kr(3),Ft=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ms=new WeakMap,Ct=Rt.createTreeWalker(Rt,129);function As(o,e){if(!Ur(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ws!==void 0?ws.createHTML(e):e}var Sp=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",a=On;for(let s=0;s<t;s++){let l=o[s],u,c,d=-1,p=0;for(;p<l.length&&(a.lastIndex=p,c=a.exec(l),c!==null);)p=a.lastIndex,a===On?c[1]==="!--"?a=xs:c[1]!==void 0?a=ks:c[2]!==void 0?(Es.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=zt):c[3]!==void 0&&(a=zt):a===zt?c[0]===">"?(a=r??On,d=-1):c[1]===void 0?d=-2:(d=a.lastIndex-c[2].length,u=c[1],a=c[3]===void 0?zt:c[3]==='"'?Ss:$s):a===Ss||a===$s?a=zt:a===xs||a===ks?a=On:(a=zt,r=void 0);let h=a===zt&&o[s+1].startsWith("/>")?" ":"";i+=a===On?l+kp:d>=0?(n.push(u),l.slice(0,d)+Ps+l.slice(d)+bt+h):l+bt+(d===-2?s:h)}return[As(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Dn=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,a=0,s=e.length-1,l=this.parts,[u,c]=Sp(e,t);if(this.el=o.createElement(u,n),Ct.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=Ct.nextNode())!==null&&l.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(let d of r.getAttributeNames())if(d.endsWith(Ps)){let p=c[a++],h=r.getAttribute(d).split(bt),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:f[2],strings:h,ctor:f[1]==="."?Vr:f[1]==="?"?Nr:f[1]==="@"?qr:tn}),r.removeAttribute(d)}else d.startsWith(bt)&&(l.push({type:6,index:i}),r.removeAttribute(d));if(Es.test(r.tagName)){let d=r.textContent.split(bt),p=d.length-1;if(p>0){r.textContent=ko?ko.emptyScript:"";for(let h=0;h<p;h++)r.append(d[h],Ln()),Ct.nextNode(),l.push({type:2,index:++i});r.append(d[p],Ln())}}}else if(r.nodeType===8)if(r.data===Is)l.push({type:2,index:i});else{let d=-1;for(;(d=r.data.indexOf(bt,d+1))!==-1;)l.push({type:7,index:i}),d+=bt.length-1}i++}}static createElement(e,t){let n=Rt.createElement("template");return n.innerHTML=e,n}};function en(o,e,t=o,n){var a,s;if(e===Ft)return e;let r=n!==void 0?(a=t._$Co)==null?void 0:a[n]:t._$Cl,i=jn(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=en(o,r._$AS(o,e.values),r,n)),e}var Dr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??Rt).importNode(t,!0);Ct.currentNode=r;let i=Ct.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new Vn(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new Wr(i,this,e)),this._$AV.push(u),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=Ct.nextNode(),a++)}return Ct.currentNode=Rt,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Vn=class o{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=en(this,e,t),jn(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Ft&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$p(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&jn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Rt.createTextNode(e)),this._$AH=e}$(e){var i;let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Dn.createElement(As(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{let a=new Dr(r,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(e){let t=Ms.get(e.strings);return t===void 0&&Ms.set(e.strings,t=new Dn(e)),t}k(e){Ur(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(Ln()),this.O(Ln()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let r=ys(e).nextSibling;ys(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},tn=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=en(this,e,t,0),a=!jn(e)||e!==this._$AH&&e!==Ft,a&&(this._$AH=e);else{let s=e,l,u;for(e=i[0],l=0;l<i.length-1;l++)u=en(this,s[n+l],t,l),u===Ft&&(u=this._$AH[l]),a||=!jn(u)||u!==this._$AH[l],u===x?e=x:e!==x&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}a&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Vr=class extends tn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},Nr=class extends tn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},qr=class extends tn{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=en(this,e,t,0)??x)===Ft)return;let n=this._$AH,r=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==x&&(n===x||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Wr=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){en(this,e)}};var jr=Br.litHtmlPolyfillSupport;jr==null||jr(Dn,Vn),(Br.litHtmlVersions??=[]).push("3.3.3");var Ts=(o,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,r=n._$litPart$;if(r===void 0){let i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new Vn(e.insertBefore(Ln(),i),i,void 0,t??{})}return r._$AI(o),r};var Nn=globalThis,ve=class extends st{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ts(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Ft}},zs;ve._$litElement$=!0,ve.finalized=!0,(zs=Nn.litElementHydrateSupport)==null||zs.call(Nn,{LitElement:ve});var Gr=Nn.litElementPolyfillSupport;Gr==null||Gr({LitElement:ve});(Nn.litElementVersions??=[]).push("4.2.2");var pe="main",Yr=o=>o&&o!==pe?{plan:o}:{};async function $o(o,e){return o.callWS({type:"neonplan3d/building/get",...Yr(e)})}async function qn(o,e,t){return(await o.callWS({type:"neonplan3d/building/save",building:e,...Yr(t)})).revision}function Cs(o,e,t){return o.connection.subscribeMessage(n=>e(n.revision),{type:"neonplan3d/building/subscribe",...Yr(t)})}function Rs(o,e){return o.connection.subscribeMessage(t=>e(t.plan??pe,t.revision),{type:"neonplan3d/building/subscribe",plan:"*"})}async function Fs(o){try{return await o.callWS({type:"neonplan3d/plans/list"})}catch{return{plans:[],trash:[],locate_plan:pe}}}function Hs(o,e){return o.connection.subscribeMessage(e,{type:"neonplan3d/plans/subscribe"})}function Os(o,e,t,n,r){return o.connection.subscribeMessage(i=>{"announce"in i?t==null||t(i.announce):"reload"in i?n==null||n(i.reload):typeof i.text=="string"&&e(i)},{type:"neonplan3d/voice/subscribe",...t?{announce:!0}:{},...n?{reload:!0}:{},...r?{view:r}:{}})}async function Ls(o,e,t,n){return(await o.callWS({type:"neonplan3d/voice/answer",ask_id:e,text:t,answered:n})).taken}async function js(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Ds(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var Vs=2.1;var Mp=new Set(["pending","firmware_mismatch","upgrading","provisioning","adopting","deleting"]),Pp=new Set(["disconnected","heartbeat_missed","inform_error","adoption_failed","isolated"]);function Ip(o,e){var n,r;let t=e&&e!=="none"?(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id:null;return t&&o.entities?Object.values(o.entities).filter(i=>i.device_id===t).map(i=>i.entity_id):[]}function Ep(o){let e=o==null?void 0:o.attributes.options;return Array.isArray(e)&&e.includes("connected")&&e.includes("disconnected")}function Wn(o,e){let t=Ip(o,e.entity),n=i=>{var a,s,l;return`${i} ${((a=o.states[i])==null?void 0:a.attributes.friendly_name)??""} ${((l=(s=o.entities)==null?void 0:s[i])==null?void 0:l.translation_key)??""}`.toLowerCase()},r=i=>t.find(a=>a.startsWith("sensor.")&&i.test(n(a)))??null;return{state:t.find(i=>i.startsWith("sensor.")&&Ep(o.states[i]))??null,clients:r(/clients|clientes/),led:t.find(i=>i.startsWith("light."))??null,cpu:r(/cpu/),memory:r(/memor/),restart:t.find(i=>{var a;return i.startsWith("button.")&&(((a=o.states[i])==null?void 0:a.attributes.device_class)==="restart"||/restart|reinici/.test(n(i)))})??null}}var Qr=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function Ns(o,e){var r;let t=e.state?o.states[e.state]:void 0;return t?{status:Pp.has(t.state)||t.state==="unavailable"?"down":Mp.has(t.state)?"busy":"up",led:e.led?((r=o.states[e.led])==null?void 0:r.state)==="on":!0,clients:Qr(e.clients?o.states[e.clients]:void 0),cpu:Qr(e.cpu?o.states[e.cpu]:void 0),memory:Qr(e.memory?o.states[e.memory]:void 0)}:null}function So(o,e){var r,i,a,s;let t=(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id,n=t?(a=o.devices)==null?void 0:a[t]:void 0;return(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||((s=o.states[e])==null?void 0:s.attributes.friendly_name)||e}function qs(o){return o.status==="down"?[1,.22,.25]:o.status==="busy"?[1,.65,.15]:o.led?[.35,.65,1]:null}function Ap(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function Zr(o){let e=we(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(Ap).length>=2}function Ws(o=new Date){let e=o.getFullYear(),t=o.getMonth();if(t===0&&o.getDate()<=6)return 4;if(t<10)return 0;let n=new Date(e,t,o.getDate()).getTime(),r=new Date(e,11,24),i=new Date(e,11,24-r.getDay()).getTime(),a=168*3600*1e3,s=0;for(let l=1;l<=4;l++)n>=i-(4-l)*a-3600*1e3&&(s=l);return s}var Bs=[],Xr=new Map,Us=0;function Ks(o){Bs=o,Xr=new Map(o.flatMap(e=>e.items.map(t=>[Tp(e.id,t.id),t]))),Us++}function nn(){return Bs}function on(){return Us}function Tp(o,e){return`pack:${o}:${e}`}function _t(o){return o.startsWith("pack:")}function Mo(o){return _t(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function rn(o){return o==="robot_vacuum"||_t(o)&&o.endsWith(":robot_vacuum")}function zp(o){return o.z>.05}function Gs(o){let e=((o==null?void 0:o.parts)??[]).filter(t=>t.shape==="cyl"&&zp(t));return e.length?e.reduce((t,n)=>n.w*n.d>t.w*t.d?n:t).z:.227}function Ys(o){return _t(o)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(o)}var Cp={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Qs(o){var e;return(e=we(o))==null?void 0:e.parts.find(t=>t.screen)}function we(o){if(!_t(o))return;let e=Xr.get(o);if(e)return e;let[,t,...n]=o.split(":"),r=Cp[t];return r?Xr.get(`pack:${r}:${n.join(":")}`):void 0}function Js(o){return o.name.es??o.name.en??Object.values(o.name)[0]??o.id}var Rp={architecture:"Arquitectura y acabados",balcony:"Balc\xF3n y espacios peque\xF1os",bath:"Ba\xF1o",cabinet_kit:"Armarios y estanter\xEDas \u2013 kit",deco:"Decoraci\xF3n y plantas",dining_hall:"Comedor y recibidor",fun_halloween:"Pack divertido: Halloween",fun_winter:"Pack divertido: Invierno y Navidad",fun_pets:"Pack divertido: Mascotas",bedroom:"Dormitorio",cinema:"Cine en casa y Hi-Fi",exclusive:"Exclusivo: frigor\xEDfico inteligente",fitness:"Fitness",garage:"Garaje y taller",garden:"Jard\xEDn y terraza",kids:"Cuarto infantil",kitchen:"Cocina",living:"Sal\xF3n",office:"Oficina y gaming",pets:"Mascotas",smarthome:"Smart home y tecnolog\xEDa",stairs:"Escaleras y barandillas",utility:"Lavadero e instalaciones",vehicles:"Veh\xEDculos",starter:"Pack de inicio",pro_auto:"Pro: Auto Pro",pro_timetravel:"Pro: Viaje en el tiempo",pro_pool:"Pro: Piscina Pro",pro_camera:"Pro: Cabina de c\xE1mara",pro_energy:"Pro: Energ\xEDa Pro",pro_screens:"Pro: Pantallas en directo",pro_sound:"Pro: Sonido y Cine",pro_weather:"Pro: Tiempo exterior",pro_heat:"Pro: Calor Pro",pro_household:"Pro: Hogar Pro"};function Xs(o){let e=o.id.replace(/^mastershort\./,""),t=e.endsWith("_sample"),n=Rp[t?e.slice(0,-7):e];return n?t?`${n} \u2013 muestra`:n:o.name}function _e(o,e){let t=we(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Zs;if(e.type==="access_point")return e.variant==="wall"?Vs:Math.max(0,o.height-Math.max(.005,e.h));if(Po.has(e.type))return Math.max(0,o.height-Io(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t==null?void 0:t.mount){case"surface":return Jr(o,e)+Eo(o,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?Jr(o,e):el(e)||Jr(o,e)}}function Jr(o,e){let t=o.rooms.filter(n=>n.points.length>=3);return!t.length||t.some(n=>B([e.x,e.z],n.points))?0:ct(o,e.x,e.z)}var ol={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},Ig=Object.keys(ol),rl=1;function Hp(o){return o.variant&&ol[o.variant]?o.variant:"80"}function il(o){return{30:1,50:2,80:3,100:4}[Hp(o)]??3}function Bn(o,e){var s,l;let t=e.entity&&e.entity!=="none"?e.entity:null,n=t?(l=(s=o.entities)==null?void 0:s[t])==null?void 0:l.device_id:null,r=n&&o.entities?Object.values(o.entities).filter(u=>u.device_id===n).map(u=>u.entity_id):[],i=u=>{var c,d,p;return`${u} ${((c=o.states[u])==null?void 0:c.attributes.friendly_name)??""} ${((p=(d=o.entities)==null?void 0:d[u])==null?void 0:p.translation_key)??""}`.toLowerCase()},a=(u,c,d)=>r.find(p=>p.startsWith(`${u}.`)&&c.test(i(p))&&!(d&&d.test(i(p))))??null;return{heater:t,heating:a("binary_sensor",/heating|calentando|heizt/),showers:a("sensor",/shower|ducha|dusch/),remaining:a("sensor",/remaining|restante|restzeit/),power:a("switch",/power|encendid|_on\b/,/eco|legionella/),eco:a("switch",/\beco/)}}var nl=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function al(o,e){var l,u,c;let t=e.heater?o.states[e.heater]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=e.power?(l=o.states[e.power])==null?void 0:l.state:void 0,r=n!==void 0?n==="on":t.state!=="off",i=t.attributes,a=r&&(e.heating?((u=o.states[e.heating])==null?void 0:u.state)==="on":i.hvac_action==="heating"),s=nl(e.remaining?o.states[e.remaining]:void 0);return{on:r,heating:a,current:typeof i.current_temperature=="number"?i.current_temperature:null,target:typeof i.temperature=="number"?i.temperature:null,showers:nl(e.showers?o.states[e.showers]:void 0),remaining:a&&s!==null&&s>0?s:null,eco:e.eco?((c=o.states[e.eco])==null?void 0:c.state)==="on":!1}}var et={field:null,size:1,right:0,up:0};var ll=["rain","snow","clouds","lightning","sky"];var ti={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function ni(o){return o==="hedge"||o==="fence"||o==="pergola"}function oi(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!ni(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function ce(o){return[...o.rooms,...oi(o)]}function Op(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let r=o.slope_dir??"x",i=(u,c)=>r==="x"?u:r==="-x"?-u:r==="z"?c:-c,a=1/0,s=-1/0;for(let[u,c]of o.points){let d=i(u,c);a=Math.min(a,d),s=Math.max(s,d)}if(s-a<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-a)/(s-a)));return n*l}function Lp(o,e,t,n){return Ao(o,e)+ti[e.type]-jp(o,e,t,n)}var ri=-.2,ei={set:!1,level:ri};function cl(o){let e=(o==null?void 0:o.settings.terrain)??null;ei={set:(e==null?void 0:e.level)!=null,level:(e==null?void 0:e.level)??ri}}function dl(o){return o.elevation>.3?0:ei.set?ei.level-o.elevation:ri}function Ao(o,e){return dl(o)+(e.offset??0)}function jp(o,e,t,n){return e.type==="pool"?0:Op(e,t,n)}function ct(o,e,t){let n=(o.outdoor??[]).filter(i=>!ni(i.type)&&i.type!=="pool"&&B([e,t],i.points)),r=[...n].reverse().find(i=>i.cut)??n[0];return r?Lp(o,r,e,t):dl(o)}function ul(o,e){return Ao(o,e)+(e.above?pl(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Dp(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?pl(o):1.5}function Vp(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!ni(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>B(n,t.points)))}function Un(o,e){return!e.above&&!Vp(o,e)?an(o,e)-.05:ul(o,e)-Dp(e)}function an(o,e){return ul(o,e)-.15}function pl(o){return o.height&&o.height>.3?o.height:1.2}var Np={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var hl={type:"none",pitch:35,overhang:.4},qp={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...hl}};var fl=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],ml=.3;var gl=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Zs=1.75;function bl(o){if(["lamp_ceiling_fan","lamp_pendant","stairwell","parking"].includes(o.type)||ii.has(o.type))return!1;let e=we(o.type);return!((e==null?void 0:e.mount)==="ceiling"&&e.light&&e.light!=="panel")}var Po=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Io(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var ii=new Set(["stairs","stairs_u"]);function Kn(o){var e;return gl.has(o)||!!((e=we(o))!=null&&e.light)}var Wp=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var Bp=1.05,Up=.3;function el(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return Bp;case"wall_socket":return Up;case"water_heater":return rl;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var sl=.04,Kp=1.2;function Eo(o,e,t,n=0){var i;let r=0;for(let a of o.furniture)!(Wp.has(a.type)||(i=we(a.type))!=null&&i.surface)||!B([e,t],Ht(a))||a.type==="worktop"&&n>0&&a.h-sl>=Kp&&n<=a.h-sl-.02||(r=Math.max(r,a.h));return r}var Fp=new Set([...gl,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),tl={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_ceiling_fan:[1.2,1.2,.35],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.086,.05,.086],wall_socket:[.086,.05,.086],water_heater:[.506,.275,1.066],access_point:[.16,.16,.035],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Gp=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Yp=["standard","bars","glass_wall","slide"];function Qp(o,e){return o.type==="door"?o.style&&Gp.includes(o.style)?o.style:e?"front":"interior":o.style&&Yp.includes(o.style)?o.style:"standard"}function Jp(o,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",i=o-.04,a=Math.min(1.05,Math.max(.6,i-(r?.6:.3))),s=(i-a)/(r?2:1),l=n.sidelight_width??s,u=r?n.sidelight_width2??n.sidelight_width??s:0;l=Math.max(.1,l),u=r?Math.max(.1,u):0;let c=i-.5;if(l+u>c){let p=Math.max(0,c)/(l+u);l*=p,u*=p}return r?{panels:[[.02,.02+l],[o-.02-u,o-.02]],x0:.02+l,x1:o-.02-u}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function _l(o,e){let t=o.width,n=Jp(t,Qp(o,!1),e,o),r=(n==null?void 0:n.x0)??0,i=(n==null?void 0:n.x1)??t;return o.leaves!==2?(r+i)/2:e?r+(i-r)/4:i-(i-r)/4}function Gn(o){var e;o.energy={...Np,...o.energy??{}},o.presence=o.presence??[],o.settings={...qp,...o.settings,roof:{...hl,...((e=o.settings)==null?void 0:e.roof)??{}}};for(let t of o.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(r=>({...r,panel:r.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),t.furniture=t.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=t.placements.filter(r=>r.entity_id.startsWith("light.")&&!r.pin);if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of n){let a=r[i.mount??"ceiling"],[s,l,u]=tl[a];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:a,x:i.x,z:i.z,rotation:0,w:s,d:l,h:u,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}t.openings=t.openings.map(r=>({...r,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return o}function vl(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function qe(o){let e=0;for(let t=0;t<o.length;t++){let[n,r]=o[t],[i,a]=o[(t+1)%o.length];e+=n*a-i*r}return e/2}function yl(o){return Math.abs(qe(o))}function He(o){let e=qe(o);if(Math.abs(e)<1e-9){let r=o.length||1;return[o.reduce((i,a)=>i+a[0],0)/r,o.reduce((i,a)=>i+a[1],0)/r]}let t=0,n=0;for(let r=0;r<o.length;r++){let[i,a]=o[r],[s,l]=o[(r+1)%o.length],u=i*l-s*a;t+=(i+s)*u,n+=(a+l)*u}return[t/(6*e),n/(6*e)]}function Ht(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=o.w/2,i=o.d/2;return[[-r,-i],[r,-i],[r,i],[-r,i]].map(([a,s])=>[o.x+a*t-s*n,o.z+a*n+s*t])}function B(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,a]=e[n],[s,l]=e[r];a>o[1]!=l>o[1]&&o[0]<(s-i)*(o[1]-a)/(l-a)+i&&(t=!t)}return t}var wl={lamp_ceiling:"ceiling",lamp_ceiling_fan:"ceiling_fan",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Xp=700,xl="neonplan3d.unsaved",vt="1.24.0",Sl="floorplan-3d.unsaved",si=o=>o===pe?xl:`${xl}.${o}`;function Zp(o){try{let e=localStorage.getItem(si(o))??(o===pe?localStorage.getItem(Sl):null);return e?JSON.parse(e):null}catch{return null}}function ai(o,e){try{e?localStorage.setItem(si(o),JSON.stringify(e)):(localStorage.removeItem(si(o)),o===pe&&localStorage.removeItem(Sl))}catch{}}function kl(o,e){return o&&e.some(t=>t.id===o)?o:pe}var sn=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;planId=pe;plans=[];trash=[];locatePlan=pe;plansLoaded=!1;wanted=null;unsubscribePlans=null;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){var e,t;this.connected=!1,this.flush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null,(t=this.unsubscribePlans)==null||t.call(this),this.unsubscribePlans=null}async switchPlan(e){var n;if(!this.plansLoaded||!this.hass){this.wanted=e??null;return}let t=kl(e,this.plans);this.wanted=t,!(t===this.planId&&this.building)&&(await this.flush(),(n=this.unsubscribe)==null||n.call(this),this.unsubscribe=null,this.planId=t,this.building=null,this.revision=-1,this.ownRevisions=new Set,this.draft=null,this.saveState="idle",this.host.requestUpdate(),await this.reload(),await this.follow())}planName(e,t){let n=this.plans.find(r=>r.id===e);return(n==null?void 0:n.name)||(e===pe?t:"?")}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Xp),this.host.requestUpdate()}get frontendVersion(){return vt}get versionGap(){return!this.backendVersion||vt==="dev"||this.backendVersion===vt?null:eh(this.backendVersion,vt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&vt!=="dev"&&this.backendVersion!==vt}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Gn(e.building))}discardDraft(){this.draft=null,ai(this.planId,null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!e||!this.hass)return;this.pending=null;let t=this.planId;for(let n of e.floors)for(let r of n.furniture)r.mount_y!=null&&r.mount_y>10&&(r.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let n=await qn(this.hass,e,t);t===this.planId&&(this.ownRevisions.add(n),this.revision=n),this.saveState=this.pending?"saving":"saved",this.saveError=null,ai(t,null)}catch(n){this.saveState="error",this.saveError=$l(n),ai(t,{building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reloadPlans()]),this.planId=kl(this.wanted??this.planId,this.plans),await this.reload(),await this.follow(),!this.unsubscribePlans&&this.connected))try{this.unsubscribePlans=await Hs(this.hass,e=>{this.takePlans(e),this.plans.some(t=>t.id===this.planId)||this.switchPlan(pe)})}catch{}}async follow(){if(this.unsubscribe||!this.connected||!this.hass)return;let e=this.planId;try{let t=await Cs(this.hass,n=>{e===this.planId&&(this.ownRevisions.has(n)||n===this.revision||this.pending||this.saving||this.reload())},e);e!==this.planId||this.unsubscribe?t():this.unsubscribe=t}catch{}}async reloadPlans(){this.hass&&this.takePlans(await Fs(this.hass))}takePlans(e){this.plans=e.plans,this.trash=e.trash,this.locatePlan=e.locate_plan,this.plansLoaded=!0,this.host.requestUpdate()}async reloadPacks(){if(this.hass){try{this.packs=await Ds(this.hass)}catch{this.packs=[]}Ks(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(!this.hass)return;let e=this.planId;try{let t=await $o(this.hass,e);if(e!==this.planId)return;this.building=Gn(t.building),this.backendVersion=t.version??null,this.draft===null&&!this.pending&&(this.draft=Zp(e)),this.revision=t.revision,this.error=null}catch(t){this.error=$l(t)}this.host.requestUpdate()}};function $l(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function eh(o,e){let t=o.split(/[.-]/).map(r=>Number.parseInt(r,10)||0),n=e.split(/[.-]/).map(r=>Number.parseInt(r,10)||0);for(let r=0;r<Math.max(t.length,n.length);r++){let i=(t[r]??0)-(n[r]??0);if(i)return i}return 0}var Ml;function li(){let o=new URL("./neonplan3d-editor.js?v=8ebac563aa34",new URL(import.meta.url)).href;return Ml??=import(o),Ml}function ln(o){let e=(o.switch_keys??[]).slice(0,4).map(t=>t&&t!=="none"?t:null);return e.length?e:[null]}var Pl=o=>o&&o!=="none"?o:null;function cn(o){let e=(o.socket_outlets??[]).slice(0,4).map(t=>({entity:Pl(t==null?void 0:t.entity),power:Pl(t==null?void 0:t.power)}));return e.length?e:[{entity:null,power:null}]}function To(o){return o.switch_ring&&o.switch_ring!=="none"?o.switch_ring:null}function ci(o,e){var n;let t=e?(n=o.states[e])==null?void 0:n.state:void 0;return t==="on"||t==="open"||t==="opening"}var th={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},nh=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),oh=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),rh=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),zo=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Hl=new Set(["light","switch","fan"]);function Ol(o){return o.slice(0,o.indexOf("."))}function L(o){return th[Ol(o)]??null}function Il(o){return o!==null&&o!=="scene"&&o!=="script"}var ih=new Set(["shutter","garage","gate","door","curtain","awning","window","shade"]);function Co(o){return!o||!(((o.attributes.supported_features??0)|0)&48)?!1:typeof o.attributes.current_tilt_position=="number"||!ih.has(String(o.attributes.device_class??""))}function ui(o,e){let t=((o==null?void 0:o.attributes.supported_features)??0)|0;return t!==0&&!(t&3)&&(t&176)!==0?e==="stop"?{service:"stop_cover_tilt",data:{}}:t&(e==="open"?16:32)?{service:e==="open"?"open_cover_tilt":"close_cover_tilt",data:{}}:{service:"set_cover_tilt_position",data:{tilt_position:e==="open"?100:0}}:{service:e==="open"?"open_cover":e==="close"?"close_cover":"stop_cover",data:{}}}function Ro(o,e,t){let n=new Map;for(let r of e){let i=ui(o.states[r],t),a=`${i.service}|${JSON.stringify(i.data)}`,s=n.get(a)??{...i,ids:[]};s.ids.push(r),n.set(a,s)}return[...n.values()].map(r=>({service:r.service,data:{...r.data,entity_id:r.ids}}))}function ah(o,e){var r;let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let i=(r=o.devices)==null?void 0:r[n];if(!i)return null;if(i.area_id)return i.area_id;n=i.parent_device_id}return null}function Oe(o,e){var n;let t=(n=o.entities)==null?void 0:n[e];return t?t.area_id?t.area_id:ah(o,t.device_id):null}function Fo(o,e){var n;let t=(n=o.entities)==null?void 0:n[e];return!!t&&(!!t.hidden||!!t.hidden_by||!!t.disabled_by)}function El(o,e){var s;let t=L(e);if(!t)return!1;let n=(s=o.entities)==null?void 0:s[e];if(Fo(o,e)||n!=null&&n.entity_category)return!1;let r=o.states[e];if(!r)return!1;let i=r.attributes.device_class,a=String(r.attributes.unit_of_measurement??"");return t==="sensor"?i?nh.has(i)||i==="voltage"&&a==="mV":oh.has(a):t==="binary"?i?rh.has(i):!!(n!=null&&n.area_id):!0}var sh=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Al(o,e){var r;if(L(e)!=="sensor")return!1;let t=(r=o.entities)==null?void 0:r[e];if(Fo(o,e)||t!=null&&t.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||sh.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||X(n)}var di=null;function Qn(o){var l,u;let e=di;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,r=[],i=new Map,a=new Map;for(let c of Object.keys(o.entities??{})){let d=o.entities[c],p=d.device_id;p&&d.area_id&&(a.get(p)??a.set(p,new Set).get(p)).add(d.area_id),p&&vi(o,c)&&(n.get(p)??n.set(p,[]).get(p)).push(c),p&&!Fo(o,c)&&!d.entity_category&&(i.get(p)??i.set(p,new Set).get(p)).add(Ol(c));let h=El(o,c),f=Oe(o,c);if(!f){(h||Al(o,c))&&Il(L(c))&&r.push(c);continue}h&&(t.get(f)??t.set(f,[]).get(f)).push(c)}if(o.entities)for(let c of Object.keys(o.states))o.entities[c]||(El(o,c)||Al(o,c))&&Il(L(c))&&r.push(c);r.sort((c,d)=>zo.indexOf(L(c))-zo.indexOf(L(d))||Y(o,c).localeCompare(Y(o,d)));for(let[c,d]of t){let p=(u=(l=o.areas)==null?void 0:l[c])==null?void 0:u.name;d.sort((h,f)=>{let m=zo.indexOf(L(h)),g=zo.indexOf(L(f));return m-g||Y(o,h,p).localeCompare(Y(o,f,p))})}let s=new Set([...a].filter(([,c])=>c.size>1).map(([c])=>c));return di={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:r,domains:i,hubs:s},di}function xe(o,e){return!e||!o.entities?[]:Qn(o).areas.get(e)??[]}var lh={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},ch=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),dh=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function uh(o,e){var r,i,a;let t=(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id,n=t&&!Qn(o).hubs.has(t)?Qn(o).domains.get(t):void 0;return n&&[...n].some(s=>ch.has(s))?!1:!dh.test(`${e} ${((a=o.states[e])==null?void 0:a.attributes.friendly_name)??""}`)}function pi(o,e,t,n){var h;let r=(h=t.climate)==null?void 0:h[n];if(r==="none")return[];if(r)return o.states[r]?[r]:[];let i=lh[n],a=(f,m)=>B([f,m],t.points),s=(e==null?void 0:e.placements.filter(f=>f.entity_id.startsWith("sensor.")))??[],l=s.filter(f=>a(f.x,f.z)).map(f=>f.entity_id),u=new Set(s.filter(f=>!a(f.x,f.z)).map(f=>f.entity_id)),c=[...new Set([...xe(o,t.area_id).filter(f=>!u.has(f)),...l])],d=c.filter(f=>{var m;return f.startsWith("sensor.")&&((m=o.states[f])==null?void 0:m.attributes.device_class)===i&&(t.outdoor||uh(o,f))});if(d.length)return d;let p=Ll[n];return p?c.filter(f=>{var m;return f.startsWith("climate.")&&typeof((m=o.states[f])==null?void 0:m.attributes[p])=="number"}):[]}var Ll={temperature:"current_temperature",humidity:"current_humidity"};function ph(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let i=Ll[t],a=i?Number(n==null?void 0:n.attributes[i]):Number.NaN;return t==="temperature"?Tl(a,We(o)):a}let r=Number(n==null?void 0:n.state);return t==="temperature"?Tl(r,n==null?void 0:n.attributes.unit_of_measurement):r}function We(o){var e,t;return((t=(e=o.config)==null?void 0:e.unit_system)==null?void 0:t.temperature)==="\xB0F"?"\xB0F":"\xB0C"}function Tl(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function yt(o,e){return We(o)==="\xB0F"?e*9/5+32:e}function Ke(o,e,t,n){let r=pi(o,e,t,n).map(i=>ph(o,i,n)).filter(i=>Number.isFinite(i));return r.length?r.reduce((i,a)=>i+a,0)/r.length:null}function jl(o,e){return!!o.entities&&Qn(o).hubs.has(e)}function hi(o,e){return o.entities?Qn(o).power.get(e)??[]:[]}function Y(o,e,t){var i,a;let n=o.states[e],r=(n==null?void 0:n.attributes.friendly_name)??((a=(i=o.entities)==null?void 0:i[e])==null?void 0:a.name)??e;if(t&&r.length>t.length+1&&r.toLowerCase().startsWith(t.toLowerCase()+" ")){let s=r.slice(t.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return r}function Dl(o,e){if(!e||e==="none")return null;let t=o.states[e];if(!t||X(t))return null;let n=t.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(n))return!0;if(["off","closed","idle","false","inactive","standby"].includes(n))return!1;let r=Number(n);return Number.isFinite(r)?r>0:null}function X(o){return!o||o.state==="unavailable"||o.state==="unknown"}var hh=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function fi(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function mi(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function tt(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return mi(o.state)||o.state==="returning";switch(L(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return fi(o)&&hh.has(String(o.state).toLowerCase());default:return!1}}function Vl(o,e){if(!o||X(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function Nl(o){if(!o||X(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],r=["heating","cooling","drying","fan"].includes(t);return{color:n,level:r||!t?1:.45}}function ql(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(s=>parseInt(e.slice(s,s+2),16)/255),n=s=>{let l=Math.max(...s),u=Math.min(...s),c=l-u;return l<=0||c/l<.25?[-1,0]:[(l===s[0]?((s[1]-s[2])/c+6)%6:l===s[1]?(s[2]-s[0])/c+2:(s[0]-s[1])/c+4)*60,c/l]},[r]=n(t),[i]=n(o.color);if(r<0||i<0)return r<0&&i<0?o:null;let a=Math.abs(r-i);return Math.min(a,360-a)<=30?o:null}function Wl(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(n=>parseInt(e.slice(n,n+2),16)/255);return{...o,color:t}}function Ot(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,i;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?i=fh(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:n}}function Bl(o){let e=o.attributes.supported_color_modes;return!Array.isArray(e)||!e.length?!0:e.some(t=>["hs","rgb","rgbw","rgbww","xy"].includes(String(t)))}function fh(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function dn(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var mh=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),gh=new Set(["garage","gate"]),bh=new Set(["window","opening"]);function Yn(o,e,t=!1){let n=new Map;return e.length&&o.forEach((r,i)=>{let a=t&&e.length===1?e[0]:e[i];a&&n.set(r.id,a)}),n}function un(o,e){let t=new Map,n=(i,a)=>i==="none"?null:i??a??null,r=(i,a,s)=>{let l=n(i.cover,a);return{cover:l,contact:i.sensor==="handle"&&i.contact==null?null:n(i.contact,s),tilt:i.tilt==="none"?null:i.tilt,contact2:i.leaves===2&&i.contact2&&i.contact2!=="none"?i.contact2:null,lock:(i.type==="door"||i.type==="window"&&i.sill<=.01)&&i.lock&&i.lock!=="none"?i.lock:null,tilt2:i.leaves===2&&i.tilt2&&i.tilt2!=="none"?i.tilt2:null,position:l&&L(l)==="cover"&&i.position&&i.position!=="none"?i.position:null,positionInverted:!!i.position_inverted,tiltAngle:i.tilt_angle&&i.tilt_angle!=="none"?i.tilt_angle:null,tiltMax:i.tilt_max??null,tiltOffset:i.tilt_offset??null,tiltInvert:!!i.tilt_invert,shut:!!i.shut,...i.contact_invert?{contactInvert:!0}:{},...i.cover_invert?{coverInvert:!0}:{}}};for(let i of e){for(let a of i.rooms){let s=i.openings.filter(v=>v.room_id===a.id).sort((v,k)=>v.edge-k.edge||v.offset-k.offset);if(!s.length)continue;let l=xe(o,a.area_id),u=v=>{var k;return(k=o.states[v])==null?void 0:k.attributes.device_class},c=l.filter(v=>L(v)==="cover"&&mh.has(u(v))),d=s.filter(v=>v.type==="window"),p=s.filter(v=>v.type==="door"),h=s.filter(v=>v.type==="garage"),f=Yn(d,c,!0),m=Yn(d,l.filter(v=>L(v)==="binary"&&bh.has(u(v)))),g=Yn(p,l.filter(v=>L(v)==="binary"&&u(v)==="door")),_=Yn(h,l.filter(v=>L(v)==="cover"&&gh.has(u(v)??""))),w=Yn(h,l.filter(v=>L(v)==="binary"&&u(v)==="garage_door"));for(let v of s){let k=v.type==="window"?f:v.type==="garage"?_:null,S=v.type==="window"?m:v.type==="garage"?w:g;t.set(v.id,r(v,k==null?void 0:k.get(v.id),S.get(v.id)))}}for(let a of i.openings)t.has(a.id)||t.set(a.id,r(a))}return t}var _h=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function vh(o){if(!o||X(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=_h.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var yh=new Set(["unlocked","unlocking","open","opening"]);function gi(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var wh=.5;function dt(o,e,t="window"){var w;e.cover&&gi(e.cover)&&(e={...e,cover:null,position:null});let n=e.lock?o.states[e.lock]:void 0,r=n&&yh.has(n.state)?{unlocked:!0}:{},i=v=>{var k;return!!v&&((k=o.states[v])==null?void 0:k.state)==="on"},a=v=>!!v&&!!o.states[v]&&!X(o.states[v]),s=v=>v?vh(o.states[v]):null,l=v=>{let k=s(v);return e.contactInvert&&v&&v!==e.tilt&&v!==e.tilt2&&k!=="tilted"&&k?k==="open"?"closed":"open":k},u=i(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",c=l(e.contact2)==="open"&&!u?1:0,d=i(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",p=d?1:0,h=e.tiltAngle?Number((w=o.states[e.tiltAngle])==null?void 0:w.state):NaN;if(Number.isFinite(h)){let v=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);p=Math.min(1,Math.max(0,v/(e.tiltMax||15))),p<.08&&(p=0),d=p>0}let f=l(e.contact)==="open"&&!d?1:0,m=null,g=e.cover?o.states[e.cover]:void 0,_=Ul(o,e.position);if(_!==null)m=e.positionInverted?_:1-_;else if(g&&!X(g)){let v=g.attributes.current_position;typeof v=="number"?m=1-Math.min(100,Math.max(0,v))/100:m=g.state==="closed"?1:g.state==="opening"||g.state==="closing"?.5:0,e.coverInvert&&(m=1-m)}else e.cover&&(m=0);if(t==="door"){let v=l(e.contact);return m!==null&&g&&ec.has(String(g.attributes.device_class??""))?{open:v===null?1-m:v==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...r}:{open:v===null?e.shut?0:wh:v==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:m,sensed:v!==null||m!==null,...r}}if(t==="garage"){let v=l(e.contact),k=m!==null||v!==null;return m===null&&(m=v===null||v==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:m,sensed:k}}return{open:f,open2:c,tilt:p,tilt2:u?1:0,cover:m,sensed:a(e.contact)||a(e.tilt)||Number.isFinite(h),...r}}function Ul(o,e){let t=e?o.states[e]:void 0;if(!t||X(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function bi(o,e){var a,s;let t=new Map,n=[];for(let l of e){let u=L(l)==="camera"?`camera:${l}`:((s=(a=o.entities)==null?void 0:a[l])==null?void 0:s.device_id)??`entity:${l}`,c=t.get(u);c||(t.set(u,c=[]),n.push(u)),c.push(l)}let r=n.map(l=>{let u=t.get(l),c=u.find(d=>{var p,h;return!((h=(p=o.entities)==null?void 0:p[d])!=null&&h.name)})??u[0];return{primary:c,others:u.filter(d=>d!==c)}}),i=new Map(e.map((l,u)=>[l,u]));return r.sort((l,u)=>i.get(l.primary)-i.get(u.primary))}function Ho(o,e){return bi(o,e).map(t=>t.primary)}var zl={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Kl=new Set(["tv_board","tv_wall"]);function Gl(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let r=String(n).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===i||i.length>=3&&r.includes(i)}function Yl(o){return Kl.has(o)||!!Qs(o)}function Oo(o){return Yl(o)||o==="desk"||o==="fridge_smart"}function pn(o,e){var i;let t=new Set,n=Lt(o,e),r=e.some(a=>a.openings.some(s=>s.confirm))?un(o,e):null;for(let a of e){for(let s of a.placements)s.confirm&&t.add(s.entity_id);for(let s of a.openings){let l=s.confirm?r==null?void 0:r.get(s.id):null;l!=null&&l.cover&&l.cover!=="none"?t.add(l.cover):s.type==="garage"&&(l!=null&&l.contact)&&L(l.contact)==="switch"&&t.add(l.contact)}for(let s of a.furniture){if(s.confirm&&s.type==="wall_switch")for(let u of ln(s))u&&t.add(u);if(s.confirm&&s.type==="wall_socket")for(let u of cn(s))u.entity&&t.add(u.entity);let l=s.confirm?(i=n.get(s.id))==null?void 0:i.entity:null;l&&l!=="none"&&t.add(l)}}return t}function Ql(o,e){let t=new Set;if(!e.some(n=>n.openings.some(r=>r.cover_invert)))return t;for(let n of un(o,e).values())n.coverInvert&&n.cover&&t.add(n.cover);return t}function Jl(o,e){let t=new Map;for(let n of e)for(let r of n.furniture){if(r.type!=="awning"&&!Mo(r.type))continue;let i=r.entity&&r.entity!=="none"?r.entity:null,a=i?o.states[i]:void 0,s=r.awning_time??20;if(!a||X(a)){t.set(r.id,{out:0,moving:0,time:s});continue}let l=p=>r.awning_invert?1-p:p,u=Ul(o,r.awning_position&&r.awning_position!=="none"?r.awning_position:null),c=a.attributes.current_position,d=a.state==="opening"?r.awning_invert?-1:1:a.state==="closing"?r.awning_invert?1:-1:0;u!==null?t.set(r.id,{out:l(u),moving:0,time:s}):typeof c=="number"&&Number.isFinite(c)?t.set(r.id,{out:l(Math.min(1,Math.max(0,c/100))),moving:0,time:s}):d?t.set(r.id,{out:null,moving:d,time:s}):t.set(r.id,{out:l(a.state==="open"||a.state==="on"?1:0),moving:0,time:s})}for(let n of e)for(let r of n.outdoor??[])if(r.type==="fence")for(let i of r.gates??[])t.set(i.id,xh(o,i));return t}function xh(o,e){let t=e.time??(e.kind==="slide"?15:4),n=s=>s&&s!=="none"?o.states[s]:void 0,r=n(e.contact);if(r&&!X(r))return{out:null,moving:r.state==="on"||r.state==="open"?1:-1,time:t,settled:!0};let i=n(e.entity);if(!i||X(i))return{out:null,moving:-1,time:t,settled:!0};let a=i.attributes.current_position;return typeof a=="number"&&Number.isFinite(a)?{out:Math.min(1,Math.max(0,a/100)),moving:0,time:t}:i.state==="opening"?{out:null,moving:1,time:t}:i.state==="closing"?{out:null,moving:-1,time:t}:{out:null,moving:i.state==="open"||i.state==="on"?1:-1,time:t,settled:!0}}function _i(o,e){let t=r=>{var a;if(!r||r==="none")return!1;let i=(a=o.states[r])==null?void 0:a.state;return i==="on"||i==="open"},n=new Map;for(let r of e)for(let i of r.furniture)i.type==="fridge_smart"&&n.set(i.id,{left:t(i.door_left),right:t(i.door_right)});return n}var Cl={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function vi(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function kh(o,e){var n,r;if(vi(o,e))return e;let t=(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id;return t?hi(o,t).find(i=>i!==e)??null:null}function Lt(o,e){let t=new Map;for(let n of e){let r=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let a=i.type in Cl,s=a?Cl[i.type]:zl[i.type]??(rn(i.type)?zl.robot_vacuum:void 0);if(!s&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&B([i.x,i.z],h.points))??(i.type==="awning"?oi(n).find(h=>B([i.x,i.z],h.points)):void 0),u=l?Ho(o,xe(o,l.area_id)):[],c=h=>`${h} ${Y(o,h)}`,d=i.entity==="none"?null:i.entity??null;if(i.entity==null){let h=u.filter(f=>!r.has(f));if(a){let f=h.filter(m=>L(m)==="light");d=f.find(m=>s.test(c(m)))??f[0]??null}else if(rn(i.type)){let f=(l==null?void 0:l.area_id)??null;d=Object.keys(o.entities??{}).find(m=>m.startsWith("vacuum.")&&!r.has(m)&&!Fo(o,m)&&Oe(o,m)===f)??null}else if(i.type==="radiator"||i.type==="ac_unit"){let f=h.filter(m=>L(m)==="climate");d=f.find(m=>s.test(c(m)))??f[0]??null}else if(Yl(i.type)){let f=h.filter(m=>L(m)==="media");d=f.find(m=>{var g;return((g=o.states[m])==null?void 0:g.attributes.device_class)==="tv"})??f.find(m=>s==null?void 0:s.test(c(m)))??(Kl.has(i.type)?f[0]??null:null)}else i.type==="awning"?d=h.find(f=>{var m;return f.startsWith("cover.")&&((s==null?void 0:s.test(c(f)))||((m=o.states[f])==null?void 0:m.attributes.device_class)==="awning")})??null:s&&(d=h.find(f=>["switch","media","fan"].includes(L(f)??"")&&s.test(c(f)))??null);d&&r.add(d)}let p=i.power==="none"?null:i.power??null;i.power==null&&(p=d?kh(o,d):null,!p&&s&&l&&!a&&(p=xe(o,l.area_id).find(f=>vi(o,f)&&!r.has(f)&&s.test(c(f)))??null),p&&r.add(p)),(d||p)&&t.set(i.id,{entity:d,power:p})}}return t}function yi(o){if(!o||o.state==="off"||o.state==="standby"||X(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function hn(o,e,t,n=[]){let r=(d,p)=>B([d,p],t.points),i=Lt(o,[e]),a=un(o,[e]),s=[...e.placements.filter(d=>r(d.x,d.z)).map(d=>d.entity_id),...e.furniture.filter(d=>r(d.x,d.z)).flatMap(d=>{var p,h;return[(p=i.get(d.id))==null?void 0:p.entity,(h=i.get(d.id))==null?void 0:h.power]}),...e.openings.filter(d=>d.room_id===t.id).flatMap(d=>{let p=a.get(d.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(d=>[d.window,d.cover,d.contact,d.tilt]),...t.panel??[]].filter(d=>!!d&&!!o.states[d]),l=new Set(t.hidden??[]),u=[...new Set(s)].filter(d=>!l.has(d)),c=new Set(u);return{shown:u,more:xe(o,t.area_id).filter(d=>!c.has(d)&&!l.has(d))}}var Rl=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,$h={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Lo(o,e){var d,p;let t=e.car??{},n=h=>h&&h!=="none"?h:null,r=n(t.device)??n(e.entity),i=r?(p=(d=o.entities)==null?void 0:d[r])==null?void 0:p.device_id:null,a=i&&o.entities?Object.values(o.entities).filter(h=>h.device_id===i).map(h=>h.entity_id):[],s=h=>{var f,m,g;return`${h} ${((f=o.states[h])==null?void 0:f.attributes.friendly_name)??""} ${((g=(m=o.entities)==null?void 0:m[h])==null?void 0:g.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(h,f,m)=>a.find(g=>f.includes(g.split(".")[0])&&$h[h].test(s(g))&&(!m||m(g)))??null,u=h=>{var f;return String(((f=o.states[h])==null?void 0:f.attributes.unit_of_measurement)??"")},c=h=>{var f;return String(((f=o.states[h])==null?void 0:f.attributes.device_class)??"")};return{soc:n(t.soc)??a.find(h=>h.startsWith("sensor.")&&c(h)==="battery")??l("soc",["sensor"],h=>u(h)==="%"),range:n(t.range)??l("range",["sensor"],h=>/km|mi/.test(u(h)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],h=>/^k?W$/.test(u(h)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??a.find(h=>h.startsWith("binary_sensor.")&&c(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??a.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??a.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??a.find(h=>h.startsWith("device_tracker."))??null}}function Sh(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function Jn(o,e){var g;let t=Lo(o,e),n=_=>_?o.states[_]:void 0,r=_=>{var v;let w=Number((v=n(_))==null?void 0:v.state);return _&&Number.isFinite(w)?w:null},i=r(t.soc),a=r(t.range),s=n(t.charging),l=String((s==null?void 0:s.attributes.unit_of_measurement)??""),u=s&&/^k?W$/.test(l)?(r(t.charging)??0)*(l==="kW"?1e3:1):null,c=u!==null?u>50:!!s&&["on","charging","laden"].includes(s.state.toLowerCase()),d=n(t.plugged),p=n(t.lock),h=n(t.climate),f=n(t.tracker),m=(f==null?void 0:f.state.toLowerCase())??"";return{entities:t,soc:i!==null?Math.max(0,Math.min(100,i)):null,range:a,rangeUnit:String(((g=n(t.range))==null?void 0:g.attributes.unit_of_measurement)??"km"),chargingW:u,charging:c,plugged:d?d.state==="on":null,locked:p?Sh(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:f&&m!=="home"&&!X(f)?m==="not_home"?"":f.state:null}}function Xl(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(Lo(o,n)))).filter(t=>!!t)}function Xn(o,e,t){var r,i;if(t==="none")return null;if(t)return t;let n=e?(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id:null;if(!n||!o.entities)return null;for(let a of Object.values(o.entities))if(!(a.device_id!==n||!a.entity_id.startsWith("sensor."))&&(Rl.test(a.translation_key??"")||Rl.test(a.entity_id.split(".")[1])))return a.entity_id;return null}function Fl(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Zl(o,e,t,n){var i,a;let r=t?(i=o.states[t])==null?void 0:i.attributes:void 0;for(let s of[n?(a=o.states[n])==null?void 0:a.state:void 0,r==null?void 0:r.current_room,r==null?void 0:r.room,r==null?void 0:r.current_segment]){let l=wi(o,e,s);if(l)return l}return null}function wi(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=Fl(t);if(!n)return null;let r=i=>{var a,s;return[i.name,i.area_id??"",i.area_id&&((s=(a=o.areas)==null?void 0:a[i.area_id])==null?void 0:s.name)||""].map(Fl).filter(Boolean)};return e.find(i=>r(i).includes(n))??e.find(i=>r(i).some(a=>a.length>=3&&(a.includes(n)||n.includes(a))))??null}var ec=new Set(["garage","gate","door"]);function xi(o,e){let t=new Set,n=new Set,r=i=>{if(!i||i==="none"||!o.states[i])return;let a=L(i);a==="light"?t.add(i):a==="cover"&&!ec.has(String(o.states[i].attributes.device_class??""))&&n.add(i)};for(let i of e.rooms){let a=new Set(i.hidden??[]);for(let s of Ho(o,xe(o,i.area_id)))a.has(s)||r(s)}for(let i of e.placements)r(i.entity_id);for(let i of e.furniture)r(i.entity);return{lights:[...t],covers:[...n]}}function fn(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function tc(o,e,t){var r;let n=((r=t.target)==null?void 0:r.trim())??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[i,a]=n.split(".",2);o.callService(i,a,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var Mh={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",plain_off:"Con muebles",plain_on:"Solo plano",plain_hint:"Solo plano: paredes, puertas, ventanas y escaleras sin muebles; los dispositivos se quedan.",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",floor_order_hint:"Solo cambia el orden de las plantas en la lista y en las miniaturas. D\xF3nde est\xE1 una planta en la casa 3D lo decide su \xABaltura sobre el suelo\xBB.",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de CasaNeon ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de CasaNeon.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_detect_choose:"Elegir t\xFA mismo los sensores de detecci\xF3n",camera_detect_choose_hint:"Solo cuentan los sensores marcados para los pines, el rastro de movimiento y la direcci\xF3n en vivo \u2013 tambi\xE9n sensores de otro dispositivo, p. ej. el sensor de personas de Frigate para una c\xE1mara Reolink. Sin la marca, CasaNeon usa todos los sensores del dispositivo de la c\xE1mara.",camera_detect_add:"A\xF1adir un sensor",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",view_settings:"Ajustes",view_settings_admin:"Solo los administradores pueden cambiar estos ajustes; se aplican a toda la casa.",view_settings_look:"Aspecto",glass_size:"Tama\xF1o de las tarjetas de cristal",glass_size_hint:"Energ\xEDa, bomba de calor, coche, dispositivos y las dem\xE1s tarjetas de cristal de la vista 3D",view_settings_alerts:"Avisos",view_settings_control:"Manejo",view_settings_more:"El resto de ajustes est\xE1 en el editor, en \u2699 Ajustes.",lines_add:"A\xF1adir",lines_new:"Nueva entrada \u2026",sheet_mic:"Hablar",sheet_listening:"Escuchando\u2026",sheet_mic_failed:"No se entendi\xF3 nada: el micr\xF3fono necesita HTTPS y una canalizaci\xF3n de voz con reconocimiento.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace. Una c\xE1mara conserva su marcador con todos sus ajustes; el modelo solo se a\xF1ade.",as_furniture_pick:"Elegir mueble \u2026",camera_look_builtin:"Modelo de c\xE1mara est\xE1ndar",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",sun_shadow:"Recorrido del sol y sombra de la casa",tap_in_room:"Accionar dispositivos solo en la habitaci\xF3n abierta",tap_in_room_hint:"En la vista de la casa y de la planta, un toque en un dispositivo abre su habitaci\xF3n en vez de accionarlo, as\xED un toque pensado para la planta no mueve una persiana por error. En la habitaci\xF3n abierta todo sigue igual; una pulsaci\xF3n larga abre el men\xFA en cualquier sitio.",right_click_back:"El clic derecho retrocede un nivel",right_click_back_hint:"Un clic derecho corto en la vista 3D cierra la habitaci\xF3n o vuelve de la planta a la casa. Desactivado: un clic derecho funciona como un clic.",sun_shadow_hint:"Un arco sobre la casa muestra el recorrido del sol hoy con amanecer y atardecer, y la sombra de la casa se dibuja en el suelo y se mueve con el sol. Necesita la orientaci\xF3n norte; en el nivel \xABTableta\xBB solo el arco.",sun_arc:"Arco solar alrededor de",sun_arc_house:"la casa",sun_arc_plot:"toda la parcela",sun_arc_hint:"D\xF3nde est\xE1n el arco solar y el anillo de la br\xFAjula: alrededor de la casa (por defecto) o alrededor de todo lo dibujado \u2013 habitaciones, zonas exteriores, vallas y paredes libres.",window_glow:"Las ventanas iluminan fuera de noche",window_glow_hint:"Cuando est\xE1 oscuro, la luz de las habitaciones encendidas sale por las ventanas como un brillo c\xE1lido sobre el c\xE9sped y la terraza \u2013 en el color de la luz de la habitaci\xF3n, m\xE1s tenue tras persianas bajadas.",gpu_safe_note:"En este navegador, el arco del sol, la sombra de la casa y el brillo de las ventanas de noche est\xE1n desactivados: los gr\xE1ficos se perdieron justo despu\xE9s de arrancar. La pr\xF3xima versi\xF3n de CasaNeon lo intentar\xE1 de nuevo.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",alert_contact_unavailable:"Contacto no disponible: {name}",alert_short_contact_unavailable:"Contacto no disponible",alert_unavailable:"Avisar si un contacto de ventana o puerta no est\xE1 disponible",alert_unavailable_hint:"Si un contacto lleva 10 minutos \xABno disponible\xBB (pila agotada, sin cobertura), la ventana parece cerrada en 3D sin saberlo. Entonces aparece un aviso.",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de CasaNeon.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_plain:"Solo plano (sin muebles)",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_copy:"Copiar",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon \u2013 actualiza CasaNeon (HACS) y recarga la p\xE1gina.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para CasaNeon. Importa aqu\xED tus propios packs (.fp3dpack).",ext_pro:"Extensiones Pro",ext_active:"activa",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",card_room:"Habitaci\xF3n inicial",card_room_none:"Ninguna (planta o casa)",card_walk:"Permitir el recorrido",card_walk_hint:"El bot\xF3n para recorrer la casa a la altura de los ojos",card_tt_range:"El viaje en el tiempo empieza",card_tt_range_24h:"hace 24 horas",card_tt_range_7d:"hace una semana",card_tt_speed:"Velocidad de reproducci\xF3n",card_tt_speed_day:"1 d\xEDa en 6 s",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: CasaNeon encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia ahora",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_hub:"Punto de uni\xF3n de cables definido",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas y prop\xF3n ideas como issue en GitHub: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",furn_cable_to_grid:"El cable termina en la acometida",furn_cable_to_grid_hint:"Energ\xEDa Pro: el cable de este inversor va a la acometida en lugar del contador \u2013 por ejemplo cuando el inversor y la acometida est\xE1n lejos del cuadro el\xE9ctrico.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",gate_hint:"Puertas en la valla: un hueco en un lado, como una puerta en una pared. Con una entidad, la puerta tambi\xE9n se abre en 3D y un toque sobre ella la acciona.",gate_n:"Puerta {n}",gate_edge:"Lado",gate_edge_n:"Lado {n} ({len} m)",gate_kind:"Tipo",gate_kind_swing:"Portillo (una hoja)",gate_kind_double:"Puerta de dos hojas",gate_kind_slide:"Puerta corredera",gate_at:"Centro desde el inicio del lado",gate_flip:"Bisagra en el otro lado",gate_flip_slide:"Se abre hacia el otro lado",gate_outward:"Se abre hacia fuera",gate_entity:"Motor o interruptor",gate_contact:"Contacto (abierto/cerrado)",gate_time:"Tiempo de recorrido (s)",gate_remove:"Quitar puerta",gate_add:"+ Puerta en la valla",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_turn:"Giro",roof_turn_hint:"Gira esta parte del tejado en el plano (sentido horario), p. ej. para un ala en \xE1ngulo. Las buhardillas y hastiales encima giran con ella. 0\xB0 = como antes.",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_overhang_sides:"Alero por lado",roof_overhang_sides_hint:"Fijar t\xFA mismo el alero de cada lado. Desactivado: autom\xE1tico \u2013 sin alero donde el fald\xF3n toca una parte m\xE1s alta de la casa.",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar entre la casa y las plantas, la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_angle:"\xC1ngulo de apertura",door_angle_hint:"Cu\xE1nto queda abierta la puerta en 3D: sin sensor siempre, con sensor en cuanto indica abierta. Por defecto: medio abierta sin sensor, totalmente abierta con \xE9l.",door_angle_default:"Por defecto",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_meter_reading:"Lectura del contador (m\xB3 o litros)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_hub:"Punto de uni\xF3n de cables",energy_hub_point:"Los cables se unen en un punto propio",energy_hub_point_hint:"Energ\xEDa Pro: todos los cables van a este punto (p. ej. el cuadro el\xE9ctrico) en lugar del contador \u2013 \xFAtil cuando el contador est\xE1 en la acometida.",energy_hub_set:"Poner el punto en el plano",energy_hub_tap:"Toca el plano donde se unen los cables.",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant.",show_menu:"Mostrar",tool_menu:"Herramienta",floor_label:"Planta:",floor_settings:"Ajustes de la planta",floor_settings_of:"Planta {floor}",floor_none_hint:"A\xF1ade tu primera planta arriba con \xABPlanta\xBB \u2192 \xABA\xF1adir planta\xBB.",tool_group_build:"Construir",tool_group_outside:"Exterior",tool_room:"Habitaci\xF3n",view_menu:"Vista",fit_hint:"Mostrar todo el plano de la planta (con el jard\xEDn al dibujar el exterior)",tech_open:"Dibujar la sala t\xE9cnica",tech_open_hint:"Despu\xE9s toca en el plano la pared donde est\xE1 tu instalaci\xF3n.",tech_step:"Paso {n}",tech_step_feed:"Toca \xAB{name}\xBB a la izquierda y luego el punto de la pared por donde entra la tuber\xEDa (abajo del todo: desde el suelo).",tech_step_devices:"Toca la bomba y el filtro de arena a la izquierda: se colocan junto a la pared. La bomba de calor y la dosificaci\xF3n si las tienes.",tech_step_line:"Traza una l\xEDnea: de \xAB{a}\xBB a \xAB{b}\xBB. Pulsa en uno y arrastra hasta el otro.",tech_step_loose:"Un tubo acaba suelto: prol\xF3ngalo hasta un equipo o una tuber\xEDa, o b\xF3rralo (\u270B Seleccionar).",tech_step_drawing:"Sigue arrastrando o toca punto a punto: la l\xEDnea termina en un equipo, una tuber\xEDa o un tubo.",tech_step_fit:"Toca el tubo donde va la v\xE1lvula (el visor): se ilumina en naranja.",tech_mode:"Sala t\xE9cnica",tech_mode_hint:"Dibuja la sala t\xE9cnica en esta pared: entra las tuber\xEDas de la piscina, coloca los equipos, traza los tubos",tech_draw:"Dibujar",tech_pick:"Seleccionar",pool_delete_confirm:"\xBFEliminar la piscina con sus {n} tubos?",tech_erase:"Borrar",tech_erase_hint:"Toca un tubo, una v\xE1lvula de bola, una mirilla o un agujero y se elimina. \xBFLo dibujaste mal? Deshacer tambi\xE9n ayuda.",tech_feeds:"Tuber\xEDas de la piscina",tech_devices:"Equipos",tech_fittings:"Valvuler\xEDa",tech_hint:"Trazar una l\xEDnea: toca un equipo, una tuber\xEDa o un tubo y arrastra hasta el siguiente (o punto a punto). Sobre un tubo crea una T. CasaNeon sabe solo hacia d\xF3nde va el agua y qu\xE9 conexi\xF3n del equipo usar.",tech_no_ports:"Coloca primero el skimmer, el sumidero y las boquillas con la herramienta Piscina.",tech_ok:"Todo conectado: el agua circula.",tech_issue_loose:"{n} extremos sueltos",tech_issue_port:"{name} sin conectar",tech_issue_feed:"{name} a\xFAn no entrado",tech_feed_place:"Toca donde la tuber\xEDa entra en la sala: abajo del todo, desde el suelo; m\xE1s arriba, por la pared.",tech_start:"Toca un equipo o una tuber\xEDa y traza una l\xEDnea.",feed_skimmer:"Skimmer",feed_drain:"Sumidero",feed_inlet:"Boquillas",feed_waste:"Desag\xFCe (lavado)",hp_ports:"Conexiones",hp_side_right:"derecha",hp_side_left:"izquierda",hp_side_back:"detr\xE1s",pool_depth:"Profundidad del vaso (m)",pool_rim:"Borde sobre el c\xE9sped (m)",pool_depth_hint:"Profundidad: del borde al fondo. Una piscina de 1,50 m que sobresale 20 cm: profundidad 1,50, borde 0,20. El agua queda 15 cm bajo el borde.",pool_depth_ground:"La profundidad se ve en 3D en cuanto la piscina est\xE1 en un c\xE9sped, una terraza u otra zona; sin suelo alrededor, el vaso se ver\xEDa desde fuera.",pool_port_depth:"Prof.",pool_port_depth_hint:"Profundidad bajo la l\xEDnea de agua (m): boquillas normalmente 0,30, el skimmer en la l\xEDnea de agua",pool_valves:"V\xE1lvulas",pool_valve_shut:"cerrada",pool_valve_toggle:"Toca para cambiar: tal como est\xE1 la v\xE1lvula de verdad",pool_joint:"Uni\xF3n",block_some_fixed:"\u{1F512} Una pieza est\xE1 fijada: el bloque solo se mueve cuando todas est\xE9n liberadas.",unfix_all:"Liberar todo",wv_block_all:"Bloque entero",wv_block_one:"Solo esta pieza",wv_gap:"Hueco: {w} \u2013 esto cabe:",wv_gap_hint:"Toca un lugar libre de la pared: aqu\xED aparece lo que cabe.",wv_kit_title:"A la pared",wv_recent:"Usados recientemente",wv_none_fits:"Nada cabe en este hueco.",wv_cat_base:"Muebles bajos y aparadores",wv_cat_hang:"Colgados",wv_cat_tall:"Armarios altos",wv_cat_living:"Sentarse y dormir",wv_cat_light:"Luces",wv_cat_pack:"De tus packs",wv_cat_energy:"Energ\xEDa",block_title:"Bloque de muebles",multi_title:"{n} muebles seleccionados",block_hint:"Un clic selecciona todo el bloque, arrastrar lo mueve. Una sola pieza: t\xF3cala dos veces o elige su nombre abajo.",multi_hint:"May\xFAs + clic a\xF1ade o quita muebles, May\xFAs + arrastrar en una zona vac\xEDa dibuja un marco. Mu\xE9velos, g\xEDralos o c\xF3pialos juntos, o \xFAnelos en un bloque.",block_part_edit:"Editar solo esta pieza",block_break:"Deshacer bloque",block_make:"Unir en un bloque",multi_mode:"Seleccionar varios (tocar a\xF1ade, arrastrar dibuja un marco)",block_part:"Parte de un bloque.",block_select:"Seleccionar todo el bloque",block_delete:"\xBFEliminar {n} muebles?",block_delete_fixed:"\xBFEliminar {n} muebles? Algunos est\xE1n fijados.",wall_zoom_hint:"Zoom: rueda del rat\xF3n o dos dedos",wall_zoom_all:"Pared entera",card_pets:"Mostrar las mascotas",card_ghost:"Mostrar el fantasma de Halloween",card_ghost_hint:"Pack divertido Halloween: el fantasma flota tambi\xE9n por la casa de esta tarjeta (p. ej. desact\xEDvalo en la tableta de pared)",card_pets_hint:"Pack divertido Mascotas: mostrar los animales configurados en esta tarjeta (p. ej. desact\xEDvalos en la tableta de pared)",fun_title:"Packs divertidos",fun_intro:"Extras solo por diversi\xF3n; act\xEDvalos y desact\xEDvalos aqu\xED.",fun_name_pets:"Mascotas",fun_feature_pets:"Un gato, un perro o un conejo vive en tu casa 3D: recorre las habitaciones, se tumba en el sof\xE1, la cama o la alfombra y duerme por la noche.",fun_name_halloween:"Halloween",fun_feature_halloween:"Un fantasma que de vez en cuando flota por la casa.",halloween_ghost:"Dejar flotar al fantasma",pets_show:"Mostrar las mascotas",pet_add:"A\xF1adir una mascota",pet_name:"Nombre",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Gato",pet_kind_dog:"\u{1F436} Perro",pet_kind_rabbit:"\u{1F430} Conejo",pet_fur:"Pelaje",pet_fur_orange:"Pelirrojo",pet_fur_tabby:"Atigrado",pet_fur_black:"Negro",pet_fur_white:"Blanco",pet_fur_grey:"Gris",pet_fur_brown:"Marr\xF3n",pet_fur_calico:"Tricolor",pet_fur_golden:"Dorado",pet_fur_cream:"Crema",pet_breed:"Raza",pet_breed_dachshund:"Teckel",pet_breed_pug:"Carlino",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Pastor",pet_floor:"Planta",pet_floor_auto:"Planta baja",tt_ev_camera:"La c\xE1mara detecta movimiento: {name}",terrain:"Terreno",terrain_hint:"D\xF3nde est\xE1 el terreno alrededor de la casa. Lo que queda por debajo (un s\xF3tano, la parte baja de un semis\xF3tano) est\xE1 bajo tierra en 3D; c\xE9spedes, caminos y terrazas est\xE1n sobre el terreno.",terrain_level:"Altura del terreno (m, planta baja = 0)",terrain_earth:"Mostrar los s\xF3tanos bajo tierra",terrain_earth_hint:"Las plantas por debajo del terreno est\xE1n bajo tierra; abre una y la ver\xE1s como en una excavaci\xF3n. Desactivado: quedan sueltas como antes.",terrain_cellar_hint:"Semis\xF3tano: baja la altura del terreno tanto como deba asomar el s\xF3tano, p. ej. \u22121,2 m. Las ventanas de s\xF3tano bajo el terreno reciben un patio ingl\xE9s.",terrain_no_cellar_hint:"Un s\xF3tano es una planta con elevaci\xF3n negativa, p. ej. \u22122,6 m.",terrain_reset:"Restablecer el terreno",cellar_window:"Ventana de s\xF3tano",well:"Patio ingl\xE9s",well_hint:"Esta ventana est\xE1 bajo el nivel del terreno: en 3D recibe un patio ingl\xE9s con rejilla. Desm\xE1rcalo para no tener ninguno, p. ej. si por fuera pasa un camino.",well_rim:"Borde sobre el terreno (m)",well_depth:"Profundidad desde la pared (m)",cellar_window_hint:"Peque\xF1a y arriba en la pared: 100 \xD7 50 cm, 25 cm bajo el techo. Bajo el terreno recibe en 3D un patio ingl\xE9s con rejilla.",side_fold_hint:"Estrechar la barra lateral: m\xE1s espacio para el plano",furn_ac_unit:"Aire acondicionado (de pared)",furn_awning:"Toldo",furn_group_outdoor:"Terraza y balc\xF3n",bin_from:"Brillar desde (hora, el d\xEDa antes)",bin_until:"hasta (hora, d\xEDa de recogida)",bin_none:"Sin recogida a la vista",hh_title:"Hoy en casa",hh_left:"quedan {t}",hh_done:"\xA1Listo!",hh_finished:"{name} ha terminado",hh_thirsty:"Sed",hh_plant:"{name} necesita agua",hh_service:"{name}: mantenimiento pendiente",hh_fridge_open:"{name} est\xE1 abierto",alert_fridge_door:"Nevera abierta: {name}",alert_short_fridge_door:"Nevera abierta",hh_moisture:"Planta (plant.*) o sensor de humedad",hh_moisture_min:"Sed por debajo de (%)",hh_remaining:"Tiempo restante (sensor)",hh_door:"Sensor de puerta",hh_fridge_door:"Sensor de puerta",hh_appliance_hint:"Mientras funciona, su marcador muestra el tiempo restante; despu\xE9s \xAB\xA1Listo!\xBB hasta que se abre la puerta o vuelve a funcionar.",hh_door_alarm:"Avisar tras (minutos abierto)",hh_service_entity:"Consumible / mantenimiento (sensor)",hh_service_min:"Pendiente desde (\u2264 % o d\xEDas)",hh_service_hint:"P. ej. filtro, sal o abrillantador: un sensor binario (activo = pendiente), un n\xFAmero (% o d\xEDas restantes) o una fecha. Si toca, el aparato brilla en amarillo y aparece en \xABHoy en casa\xBB.",hh_teaser_plant:"Con Hogar Pro la planta muestra cu\xE1ndo necesita agua.",hh_teaser_appliance:"Con Hogar Pro el aparato muestra su tiempo restante y \xAB\xA1Listo!\xBB hasta que se abre la puerta.",hh_teaser_fridge:"Con Hogar Pro CasaNeon avisa cuando la puerta de la nevera est\xE1 abierta demasiado tiempo.",card_household:"Hoy en casa",card_household_hint:"Hogar Pro: tarjeta con contenedores, correo, aparatos terminados, plantas sedientas y mantenimiento",furn_waste_bin:"Contenedor de basura",furn_mailbox:"Buz\xF3n",furn_wall_switch:"Interruptor de pared",furn_water_heater:"Termo el\xE9ctrico",stair_open:"Abierta por debajo (losa inclinada)",stair_open_hint:"Los pelda\xF1os van sobre una losa que sigue la pendiente: el hueco de debajo queda libre, con techo inclinado, y cabe otro tramo o un mueble debajo.",furn_access_point:"Punto de acceso Wi-Fi",ap_entity:"Punto de acceso",ap_mount:"Montaje",ap_ceiling:"Techo",ap_wall:"Pared",ap_hint:"Elige el punto de acceso por su nombre; su estado, clientes, LED, CPU, memoria y bot\xF3n de reinicio se buscan en el mismo dispositivo (UniFi Network).",ap_gestures:"En 3D: tocar enciende o apaga su LED; mantener pulsado lo reinicia (pregunta antes). El anillo brilla azul conectado con el LED encendido, rojo si est\xE1 desconectado y \xE1mbar mientras se actualiza.",ap_role_state:"estado",ap_role_clients:"clientes",ap_role_led:"LED",ap_role_cpu:"CPU",ap_role_memory:"memoria",ap_role_restart:"reinicio",ap_client:"{n} cliente",ap_clients:"{n} clientes",ap_down:"Desconectado",ap_busy:"Actualizando",ap_up:"Conectado",ap_restart_confirm:"\xBFReiniciar {name}? Sus clientes perder\xE1n el Wi-Fi un par de minutos.",heater_entity:"Calentador (water_heater)",heater_capacity:"Capacidad",heater_found:"Encontrado en el mismo dispositivo:",heater_hint:"Elige su entidad water_heater; lo dem\xE1s (si calienta, duchas, tiempo restante, encendido, eco) se busca solo en el mismo dispositivo.",heater_role_heating:"calentando",heater_role_showers:"duchas",heater_role_remaining:"tiempo restante",heater_role_power:"encendido",heater_role_eco:"eco",heater_gestures:"En 3D: tocar lo enciende o apaga; mantener pulsado abre su ficha para regular la temperatura y el modo.",heater_gestures_no_power:"En 3D: tocar o mantener pulsado abre su ficha para regular la temperatura y el modo (no se encontr\xF3 un interruptor de encendido).",heater_shower:"{n} ducha",heater_showers:"{n} duchas",heater_left:"{min} min para agua caliente",furn_lamp_ceiling_fan:"Ventilador de techo con luz",furn_fan_entity:"Entidad del ventilador",ceiling_fan_hint:"La luz es la entidad del elemento de arriba: el motor y la pantalla la encienden. Las aspas conmutan el ventilador por separado y giran mientras funciona, m\xE1s r\xE1pido cuanto mayor es su velocidad.",furn_wall_socket:"Enchufe de pared",furn_group_electric:"Electricidad",socket_count:"Enchufes",socket_n:"Enchufe {n}",socket_switch:"Encender y apagar con (opcional)",socket_power:"Medidor de consumo (W, opcional)",socket_hint:"Un enchufe con interruptor (enchufe inteligente) se enciende y apaga al tocarlo en 3D y su peque\xF1o LED muestra que est\xE1 encendido. Con medidor de consumo cuenta en el balance de energ\xEDa y su pin muestra los vatios de todos sus enchufes. Para ponerlo sobre una encimera, sube su \xABAltura sobre el suelo\xBB.",switch_keys:"Teclas",switch_key:"Entidad de la tecla",switch_key_n:"Tecla {n}",switch_ring:"Anillo de luz (color de)",switch_ring_hint:"Para interruptores con luz alrededor (p. ej. Sonoff TX Ultimate): elige la luz que da su color y brillo; el anillo brilla en la pared alrededor de la placa mientras esa luz est\xE1 encendida.",switch_hint:"Cada tecla conmuta su entidad al tocarla en 3D (una persiana se abre o se cierra) y su LED se enciende mientras est\xE1 encendida o abierta.",furn_group_household:"Hogar",bin_shape:"Forma",bin_shape_bin120:"Contenedor con ruedas 120 l",bin_shape_bin240:"Contenedor con ruedas 240 l",bin_shape_bin1100:"Contenedor 1100 l",bin_shape_multi:"Contenedor con varios compartimentos",bin_shape_bag:"Bolsa",bin_shape_caddy:"Cubo",bin_shape_underground:"Contenedor soterrado",bin_kind:"Residuo",bin_kind_rest:"Resto",bin_kind_bio:"Org\xE1nico",bin_kind_paper:"Papel",bin_kind_plastic:"Envases",bin_kind_glass:"Vidrio",bin_kind_garden:"Restos de poda",bin_kind_recycling:"Reciclaje",bin_kind_other:"Otro",bin_color:"Color",bin_lid:"Tapa",bin_source:"Calendario de recogida o sensor",bin_match:"Palabra del calendario (vac\xEDo: seg\xFAn el residuo)",bin_hint:"El contenedor brilla desde la hora elegida del d\xEDa anterior hasta la hora del d\xEDa de recogida (para todos); su marcador indica \xABHoy\xBB o \xABMa\xF1ana\xBB, al tocarlo muestra las pr\xF3ximas recogidas. En un calendario (p. ej. Waste Collection Schedule) se buscan las palabras de su residuo; un sensor puede dar los d\xEDas o la fecha.",bin_today:"Hoy",bin_tomorrow:"Ma\xF1ana",bin_in_days:"en {n} d\xEDas",mailbox_shape:"Forma",mailbox_shape_wall:"Buz\xF3n de pared",mailbox_shape_pole:"Buz\xF3n en poste (con bandera)",mailbox_shape_pillar:"Buz\xF3n de pie con portaperi\xF3dicos",mailbox_shape_parcel:"Buz\xF3n de paquetes",mailbox_shape_bank:"Buzones agrupados",mailbox_entity:"Sensor de correo (trampilla o indicador)",mailbox_door:"Sensor de la puerta de recogida (opcional)",mailbox_hint:"Con un indicador (p. ej. un input_boolean \xABcorreo\xBB que activa una automatizaci\xF3n) el buz\xF3n brilla mientras est\xE1 activo. Con trampilla y puerta de recogida brilla cuando ha llegado correo despu\xE9s del \xFAltimo vaciado.",mailbox_post:"Correo",pro_name_household:"Hogar Pro",pro_feature_household:"Hogar Pro: contenedores que brillan la v\xEDspera de la recogida, buz\xF3n con correo, plantas con sed; lavadora, secadora y lavavajillas muestran el tiempo restante y \xAB\xA1Listo!\xBB; filtros y consumibles pendientes en amarillo; aviso de nevera abierta; tarjeta \xABHoy en casa\xBB; adem\xE1s la nevera inteligente (americana, puertas con sensores)",household_teaser_bin:"Con Hogar Pro el contenedor brilla la v\xEDspera de la recogida, seg\xFAn tu calendario.",household_teaser_mail:"Con Hogar Pro el buz\xF3n brilla en cuanto hay correo, hasta que se vac\xEDa.",awning_cover:"Toldo (cover)",motor_cover:"Motor (cover)",curtain_side:"Se abre hacia",curtain_side_both:"ambos lados",curtain_side_left:"izquierda (vista de frente)",curtain_side_right:"derecha (vista de frente)",motor_time:"Tiempo de recorrido (s)",motor_invert_hint:"Para covers que indican 100 % con la cortina cerrada o la pantalla abajo.",awning_pitch:"Inclinaci\xF3n (\xB0)",awning_time:"Tiempo de salida completa (s)",awning_position:"Sensor de posici\xF3n (opcional)",awning_valance:"Fald\xF3n (borde de lona delantero)",awning_invert:"Invertir el sentido",awning_invert_hint:"Para covers que informan 100 % cuando el toldo est\xE1 recogido.",awning_kind:"Tipo",awning_kind_arm:"Toldo de brazos articulados (terraza)",awning_kind_drop:"Toldo de brazo invisible / punto recto (balc\xF3n, ventana)",awning_kind_vertical:"Toldo vertical / ZIP (ventana, balc\xF3n)",awning_kind_pergola:"Toldo de p\xE9rgola / galer\xEDa acristalada",awning_kind_side:"Toldo lateral (privacidad)",awning_kind_arm_hint:"El cl\xE1sico sobre la terraza: los brazos articulados empujan la lona hacia fuera con una ligera pendiente. Fondo = salida.",awning_kind_drop_hint:"Los brazos giran desde la pared hacia delante y hacia abajo, la lona se tensa inclinada delante. Fondo = longitud de los brazos, Inclinaci\xF3n = cu\xE1nto bajan los brazos por debajo de la horizontal.",awning_kind_vertical_hint:"La lona baja en vertical por gu\xEDas laterales hasta el suelo \u2013 delante de una ventana, la barandilla de un balc\xF3n o el frente de una p\xE9rgola. Altura sobre el suelo = borde inferior del cofre.",awning_kind_pergola_hint:"Un marco fijo con postes delante; la lona se extiende por encima de sus gu\xEDas. Fondo = hasta los postes, Inclinaci\xF3n = pendiente del techo.",awning_kind_side_hint:"Un poste con la lona enrollada a la izquierda, la lona se extiende en horizontal hacia la derecha hasta el poste opuesto. Ancho = extensi\xF3n, Altura sobre el suelo = altura de la lona.",awning_hint:"Ancho = el toldo a lo largo de la pared, fondo = su salida totalmente extendido; la parte trasera del marco va contra la fachada, la altura sobre el suelo es la parte inferior del cofre. Si el cover informa su posici\xF3n mientras se mueve, el toldo sale despacio en 3D; si solo dice abriendo/cerrando, se mueve seg\xFAn el tiempo de salida.",furn_only_color:"Brillar solo cuando la luz muestra este color",furn_only_color_pick:"Color",furn_only_color_hint:"La l\xE1mpara solo brilla mientras la luz muestra aproximadamente este color, p. ej. amarillo para \xABagua\xBB en el lavabo. Los dem\xE1s colores de la misma luz quedan oscuros aqu\xED.",furn_run_w:"En marcha desde (vatios)",furn_run_w_hint:"A partir de cu\xE1ntos vatios en el sensor de potencia el aparato cuenta como en marcha y brilla (vac\xEDo: 10 W). Para aparatos tras un enchufe inteligente que consumen unos vatios en espera, p. ej. 100.",roof_window_float:"Mostrar sobre la habitaci\xF3n sin el tejado",roof_window_float_hint:"Cuando el tejado se desvanece al acercarte a una planta o una habitaci\xF3n, la ventana se queda en su sitio sobre la habitaci\xF3n: abierta, abatida, con su persiana. Funciona sobre las habitaciones de la planta en la que se apoya el tejado; donde la pendiente baja sobre una planta inferior, las ventanas se quedan en el tejado. Desactivado: solo se ve en el tejado.",tech_ask:"Tubo colocado: \xBFsigue hasta la piscina? Entonces aqu\xED va un pasamuros con su salida al exterior:",tech_ask_loose:"Dejarlo abierto",tech_step_tee:"Toca el tubo donde va la derivaci\xF3n: se corta ah\xED y desde la T trazas la siguiente l\xEDnea.",side_resize:"Arrastra para ensanchar o estrechar la barra lateral",furn_extra:"Valor extra junto al s\xEDmbolo (sensor, p. ej. temperatura del agua)",settings_house:"Casa",settings_weather:"Tiempo y avisos",roof_basics:"Forma del tejado",through_full:"Pantalla completa",through_full_hint:"La imagen de la c\xE1mara en toda la pantalla (Esc o Atr\xE1s para salir). Donde el navegador no puede, se abre la vista de c\xE1mara de Home Assistant, tambi\xE9n con sonido.",director:"Director en directo",director_hint:"Una pantalla muestra sola lo que pasa en casa: suena el timbre y la vista vuela a la puerta y mira por su c\xE1mara. Cada evento est\xE1 apagado hasta que lo actives.",director_here:"Activar en este dispositivo",director_here_hint:"Solo para este navegador, p. ej. la tablet de la pared. En una tarjeta del dashboard el director se activa en los ajustes de la tarjeta.",director_doorbell:"Suena el timbre: volar a la puerta y mirar por la c\xE1mara",director_doorbell_entity:"Timbre",director_doorbell_camera:"C\xE1mara de la puerta",director_no_doorbell:"No se encontr\xF3 ning\xFAn timbre. Elige la entidad event o binary_sensor de tu timbre.",director_motion:"Una c\xE1mara ve a alguien",director_appliances:"Lavadora, secadora o lavavajillas terminados",director_alerts:"Aviso nuevo (humo, agua, alarma, ventana abierta con lluvia \u2026)",director_hold:"Volver tras (segundos)",director_back_hint:"Despu\xE9s la vista vuelve a donde estaba, salvo que alguien haya tocado la pantalla mientras tanto. A quien est\xE9 usando la tablet solo le interrumpen el timbre y los avisos. Con el timbre se queda el doble de tiempo.",voice:"Control por voz",voice_hint:"Un bot\xF3n de micr\xF3fono abajo a la izquierda en la vista 3D: t\xF3calo y habla. \xABMuestra el sal\xF3n\xBB, \xABplanta de arriba\xBB o \xABtoda la casa\xBB muestran el sitio; lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist de Home Assistant.",voice_here:"Activar en este dispositivo",aliases:"Otros nombres para la voz",aliases_hint:"Otros nombres separados por comas, para pedir la \xABSmart TV Pro\xBB como \xABtele del sal\xF3n\xBB o \xABtele\xBB. Los usan el control por voz y la b\xFAsqueda.",aliases_placeholder:"p. ej. tele del sal\xF3n, tele",voice_understands:"Qu\xE9 entiende CasaNeon",voice_examples:"\xABMuestra el sal\xF3n\xBB|\xABVe a la planta de arriba\xBB|\xABMuestra toda la casa\xBB|\xABMuestra la lavadora\xBB / \xAB\xBFD\xF3nde est\xE1 la secadora?\xBB|\xABMuestra la c\xE1mara de la entrada\xBB|\xABMuestra las c\xE1maras\xBB|Todo lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist",voice_needs:"Necesita https, permiso para el micr\xF3fono (en Fully Kiosk: Web Content Settings \u2192 acceso al micr\xF3fono) y una pipeline de Assist con voz a texto. En una tarjeta del dashboard el bot\xF3n se activa en los ajustes de la tarjeta.",voice_showing:"Mostrando {name}.",screen_name:"Nombre de pantalla (para Assist)",screen_name_placeholder:"p. ej. Cocina",screen_name_hint:"Preguntar a Assist (\xABMuestra el sal\xF3n\xBB) o una automatizaci\xF3n que llame al servicio neonplan3d.ask llega a todas las vistas de CasaNeon abiertas. Si el servicio nombra una pantalla, solo reacciona la vista con ese nombre.",voice_room:"Habitaci\xF3n de este dispositivo (para \xABaqu\xED\xBB)",voice_room_none:"Ninguna (como antes)",voice_room_hint:"Si la tableta est\xE1 en una habitaci\xF3n, bastan frases sin nombre de habitaci\xF3n: \xABEnciende la luz\xBB, \xABApaga la luz aqu\xED\xBB o \xABBaja las persianas\xBB se aplican entonces a esa habitaci\xF3n. Si nombras una habitaci\xF3n, cuenta esa. Puedes elegir las habitaciones que tienen un \xE1rea de Home Assistant. Un dispositivo de voz como el Voice PE no lo necesita, ya conoce su \xE1rea.",card_voice_area:"Habitaci\xF3n para \xABaqu\xED\xBB",card_voice_area_none:"Ninguna (ajuste del dispositivo)",card_voice_area_hint:"Si la tableta con este panel est\xE1 en una habitaci\xF3n, las frases sin nombre de habitaci\xF3n (\xABEnciende la luz\xBB, \xABApaga la luz aqu\xED\xBB) se aplican a esta \xE1rea. Sin elegir, cuenta la habitaci\xF3n ajustada en el propio dispositivo.",voice_button:"Hablar",voice_listen:"Escuchando \u2026",voice_none:"No se entendi\xF3 nada",voice_silent:"El micr\xF3fono solo da silencio. Normalmente lo tiene otra app: en Fully Kiosk desactiva la detecci\xF3n ac\xFAstica de movimiento (Motion Detection \u2192 Acoustic Detection) y recarga.",voice_no_pipeline:"No hay voz a texto configurada en Assist (Ajustes \u2192 Asistentes de voz).",voice_denied:"Micr\xF3fono no permitido: solo funciona con https y con el permiso en el navegador o en Fully Kiosk.",voice_error:"Control por voz: {msg}",card_voice:"Control por voz (bot\xF3n de micr\xF3fono)",card_voice_hint:"\xABMuestra el sal\xF3n\xBB muestra la habitaci\xF3n; las dem\xE1s frases van a Assist. Necesita https y el micr\xF3fono permitido",director_mic_test:"\u{1F399}\uFE0F Probar el micr\xF3fono",director_mic_hint:"Comprueba https, el micr\xF3fono y la voz a texto de Assist en este dispositivo y muestra qu\xE9 habitaci\xF3n abrir\xEDa una frase. No se acciona nada.",voice_pipeline:"Pipeline de Assist en este dispositivo",voice_sentences:"Frases para Assist",voice_sentences_hint:"Lo que Assist pasa a CasaNeon. Preguntas como \xAB\xBFQu\xE9 ventanas est\xE1n abiertas?\xBB las contesta si no Home Assistant; \xABPregunta a la casa qu\xE9 ventanas est\xE1n abiertas\xBB siempre llega a CasaNeon.",voice_pipeline_preferred:"La preferida en Home Assistant",voice_pipeline_no_stt:"sin voz a texto",backdrop:"Fondo",backdrop_kind:"Detr\xE1s de la casa",backdrop_color:"Un color",backdrop_top:"Color arriba",backdrop_bottom:"Color abajo",backdrop_image_url:"Direcci\xF3n de la imagen",backdrop_dim:"Oscurecer",backdrop_image_bad:"Esta direcci\xF3n no sirve: https://\u2026 o una ruta como /local/fondo.jpg",backdrop_hint:"Pon la imagen en config/www de Home Assistant; entonces es /local/nombre.jpg. Oscurecer mantiene legibles las l\xEDneas de ne\xF3n. No cuesta rendimiento, tampoco en tablets antiguas.",director_live:"Imagen en directo al mirar por la c\xE1mara",director_live_hint:"En vez de una foto cada pocos segundos corre el v\xEDdeo de la c\xE1mara (con el reproductor de Home Assistant). Necesita m\xE1s potencia: mejor desactivado en tablets muy antiguas.",director_triggers:"Disparadores propios",director_triggers_hint:"Cuando una de estas entidades se enciende o se abre (un segundo timbre, el port\xF3n del garaje, la puerta del jard\xEDn), la vista vuela all\xED y mira por la c\xE1mara elegida (sin c\xE1mara: al dispositivo).",director_trigger_entity:"Disparador",director_trigger_add:"+ A\xF1adir disparador",card_director:"Director en directo (cabina de c\xE1maras)",card_director_hint:"La tarjeta muestra sola lo que pasa. Qu\xE9 eventos, lo eliges en el editor en \xABDirector en directo\xBB.",card_roof:"Mostrar el tejado",card_roof_hint:"Desactivado: la casa se ve sin tejado, como si no lo tuviera, con las habitaciones abiertas (los campos solares del tejado desaparecen con \xE9l)",room_order_up:"Subir la habitaci\xF3n (antes en la barra de habitaciones)",room_order_down:"Bajar la habitaci\xF3n (despu\xE9s en la barra de habitaciones)",outdoor_area_hint:"Con un \xE1rea, la superficie funciona como una habitaci\xF3n: un toque en 3D la abre con los dispositivos del \xE1rea, aparece en la barra de habitaciones y lleva su nombre.",angle_lock:"Bloqueo 3D",angle_lock_hint:"El \xE1ngulo queda fijo: arrastrar desplaza la vista y el zoom sigue funcionando; nadie gira la casa sin querer.",strip_rise:"Inclinaci\xF3n (\xB0)",strip_rise_hint:"La tira sube a lo largo, p. ej. por la escalera o un pasamanos (~35\u201340\xB0). Su altura sobre el suelo es entonces la de su centro.",wall_slope:"Inclinada",wall_slope_hint:"Pared inclinada: una altura propia en cada esquina y el borde superior recto entre ellas (un cobertizo, una pendiente, ventanas altas en el lado alto). Ventanas y puertas quedan por debajo del borde.",wall_slope_start:"Altura en la esquina {n} (m)",wall_slope_end:"Altura en la esquina {n} (m)",theme_auto:"Auto (D\xEDa/Ne\xF3n seg\xFAn el sol)",markers_room:"En la habitaci\xF3n",pin_size:"Tama\xF1o de los s\xEDmbolos",pin_size_small:"Peque\xF1o",pin_size_normal:"Normal",pin_size_large:"Grande",hh_notes:"Tabl\xF3n (ayudante de texto)",hh_notes_hint:"Un ayudante de texto (input_text) o sensor cuyo texto aparece en \xABHoy en casa\xBB; separa varias l\xEDneas con |. Las automatizaciones escriben en \xE9l (\xABel paquete est\xE1 en el garaje\xBB) y la tarjeta lo muestra.",heat_sensor:"Calefacci\xF3n (sensor)",heat_sensor_hint:"Si el termostato no dice si calienta (las v\xE1lvulas Tuya informan un \xABwork state\xBB), elige aqu\xED ese sensor: encendido/abierto/calentando o una apertura mayor de 0 % hace brillar el radiador.",door_lock:"Cerradura inteligente",door_lock_hint:"La cerradura de la puerta (Nuki, Aqara \u2026): un pin en la puerta muestra cerrada o abierta; un toque la cierra o la abre.",clock:"Reloj",clock_off:"Desactivado",clock_tl:"\u2196 reloj",clock_tr:"\u2197 reloj",clock_bl:"\u2199 reloj",clock_br:"\u2198 reloj",editor_floor:"Planta inicial del editor",editor_floor_auto:"La primera de la lista",editor_floor_hint:"La planta con la que se abre el editor.",director_motion_off:"Desactivado",director_motion_person:"Solo personas",director_motion_all:"Cualquier movimiento",voice_sentences_distinct:"Solo las inequ\xEDvocas (\xABMuestra \u2026\xBB, \xABPregunta a la casa \u2026\xBB, \xABCasa, \u2026\xBB)",voice_sentences_all:"Todas las preguntas (tambi\xE9n las que Home Assistant contesta por s\xED mismo)",voice_sentences_off:"Ninguna (predeterminado \u2013 sin archivo de frases)",backdrop_look:"El cielo del aspecto (por defecto)",backdrop_gradient:"Degradado",backdrop_image:"Imagen",voice_sentences_kept:"Has cambiado t\xFA el archivo de frases de {langs} \u2013 CasaNeon no lo toca.",voice_sentences_failed:"No se pudo escribir el archivo de frases.",voice_sentences_file:"CasaNeon solo crea el archivo custom_sentences/<idioma>/neonplan3d.yaml cuando eliges frases aqu\xED. Un archivo que hayas cambiado nunca se sobrescribe; al quitar la integraci\xF3n se borra el archivo de CasaNeon.",roof_end:"Extremo",roof_end_auto:"seg\xFAn la forma",roof_end_gable:"Hastial",roof_end_hint:"C\xF3mo termina la cumbrera en este extremo: hastial (muro vertical), fald\xF3n o media cadera; por ejemplo, un fald\xF3n solo en un lado.",devices_hide_all:"Ocultar los {n} en el panel de la habitaci\xF3n",devices_show_all:"Mostrar de nuevo los {n}",sill_board:"Alf\xE9izar",sill_board_hint:"Autom\xE1tico: a partir de 30 cm de antepecho, alf\xE9izar por dentro y por fuera; ninguno en una ventana que se apoya directamente sobre otra (montante, frente acristalado dividido).",sill_board_auto:"autom\xE1tico",sill_board_none:"ninguno",sill_board_inside:"solo dentro",sill_board_outside:"solo fuera",lib_room_all:"Todas las habitaciones",lib_room_living:"Sal\xF3n",lib_room_dining:"Comedor",lib_room_kitchen:"Cocina",lib_room_bedroom:"Dormitorio",lib_room_kids:"Ni\xF1os",lib_room_bath:"Ba\xF1o",lib_room_office:"Oficina",lib_room_hall:"Pasillo",lib_room_utility:"Lavadero",lib_room_garage:"Garaje",lib_room_garden:"Jard\xEDn",lib_room_hobby:"Hobby y fitness",lib_kind_sofa:"Sof\xE1s",lib_kind_seating:"Asientos",lib_kind_table:"Mesas",lib_kind_storage:"Armarios y estanter\xEDas",lib_kind_bed:"Camas",lib_kind_kitchen:"Cocina",lib_kind_appliance:"Electrodom\xE9sticos",lib_kind_bath:"Ba\xF1o",lib_kind_lamp:"Luces",lib_kind_media:"TV y audio",lib_kind_office:"Oficina",lib_kind_tech:"T\xE9cnica y hogar inteligente",lib_kind_heating:"Calefacci\xF3n y clima",lib_kind_energy:"Energ\xEDa",lib_kind_household:"Hogar",lib_kind_deco:"Decoraci\xF3n",lib_kind_plant:"Plantas",lib_kind_outdoor:"Jard\xEDn y exterior",lib_kind_kids:"Ni\xF1os",lib_kind_sport:"Fitness",lib_kind_pets:"Mascotas",lib_kind_vehicle:"Veh\xEDculos",lib_kind_stairs:"Escaleras y barandillas",lib_kind_architecture:"Arquitectura",lib_recent:"Usados recientemente",lib_favorites:"Favoritos",lib_fav_add:"A\xF1adir a favoritos",lib_fav_remove:"Quitar de favoritos",lib_chip_electric:"Vinculable",lib_chip_light:"Ilumina",lib_chip_outdoor:"Exterior",lib_more:"Mostrar {n} m\xE1s",lib_basic:"B\xE1sico",lib_sizes:"{n} tama\xF1os",lib_hint_room:"Sugerido para la habitaci\xF3n abierta \u2013 cambia arriba.",persons:"Personas",locate:"Localizaci\xF3n",bin_out:"Sacado (ayudante)",bin_out_hint:"Opcional: encendido mientras el cubo est\xE1 fuera (input_boolean, interruptor o sensor binario). Entonces deja de brillar y su etiqueta dice \xABsacado \u2713\xBB; tocar el cubo conmuta un ayudante o interruptor. Una automatizaci\xF3n nocturna lo restablece.",bin_out_done:"sacado \u2713",bin_out_mark:"Marcar como sacado",bin_next_only:"Etiquetar solo la pr\xF3xima recogida",bin_days:"Mostrar etiquetas solo \u2026 d\xEDas antes",bin_days_always:"siempre",bin_tags_hint:"Para todos los cubos. Los cubos sin etiqueta siguen en \xABHoy en casa\xBB y muestran sus recogidas al tocarlos.",hh_service2:"{name}: {what} pendiente",hh_service2_entity:"Segundo mantenimiento (p. ej. base)",hh_service2_min:"Segundo pendiente desde (\u2264 % o d\xEDas)",door_lock_btn:"Bloquear",door_unlock_btn:"Desbloquear",door_lock_confirm:"\xBFSeguro que quieres bloquear {name}?",door_unlock_confirm:"\xBFSeguro que quieres desbloquear {name}?",garage_pulse_hint:"Un interruptor o bot\xF3n como motor: un toque en la puerta da un impulso (el interruptor se enciende, el bot\xF3n se pulsa); si la puerta est\xE1 abierta lo indica el contacto.",pin_standby:"En espera",fx3d:"Efectos",fx3d_hint:"Mostrar tambi\xE9n tiempo, sol, mascotas y fantasma en la vista 3D del editor (desactivado: una vista tranquila para dibujar)",floor_shift_x:"X \u2192 a la derecha",floor_shift_z:"Z \u2193 hacia abajo",top_hung:"Proyectante (se abre hacia fuera por abajo)",top_hung_hint:"La ventana cuelga arriba y se abre hacia fuera por abajo; abierta y entreabierta se ven igual.",floor_copy:"Duplicar planta",floor_copy_name:"{name} (copia)",floor_copy_hint:"Pone la planta otra vez encima de la casa: habitaciones, paredes, ventanas, puertas y muebles, sin enlaces a Home Assistant.",strip_length:"Longitud (m)",strip_thickness:"Grosor (m)",plan_main:"Casa",plan_pick:"Elegir plano",plan_all:"Todos los planos",plan_new:"Nuevo plano",plan_manage:"Gestionar planos",plan_alerts_elsewhere:"{n} aviso(s) en otro plano",plans_title:"Planos",plans_intro:"Varios edificios o pisos en una sola instalaci\xF3n: la casa, el garaje, la caseta del jard\xEDn, un piso de vacaciones. Cada plano tiene sus propias plantas, habitaciones y puntos de restauraci\xF3n; arriba eliges cu\xE1l se muestra.",plan_icon:"Elegir un icono",plan_name:"Nombre del plano",plan_size:"{floors} planta(s) \xB7 {rooms} habitaciones",plan_up:"Subir",plan_down:"Bajar",plan_open:"Abrir",plan_shown:"visible",plan_delete:"Mover a la papelera",plan_delete_confirm:"\xBFMover \xAB{name}\xBB a la papelera? Se puede restaurar durante {days} d\xEDas.",plan_new_name:"Plano {n}",plan_new_placeholder:"Nombre, p. ej. Caseta del jard\xEDn",plan_from:"A partir de",plan_from_empty:"Vac\xEDo",plan_from_copy:"Copia de \xAB{name}\xBB",plan_from_file:"Un archivo (exportaci\xF3n)",plan_create:"Crear",plan_locate:"Presencia en vivo",plan_locate_hint:"Saber qui\xE9n est\xE1 en qu\xE9 habitaci\xF3n funciona con un solo plano.",plan_locate_other:"La presencia en vivo funciona con el plano \xAB{name}\xBB. Cambia a ese plano o elige otro en \u2699 \u2192 Planos.",plan_trash:"Papelera",plan_trash_days:"quedan {n} d\xEDas",plan_restore:"Restaurar",card_plan:"Plano",plan_lights_on:"Luces encendidas",plan_open_now:"Ventanas y puertas abiertas",plan_open_n:"{n} abiertas",plan_site:"Parcela",plan_id_hint:"El id para la tarjeta del panel (plan: \u2026)",site_intro:"\xBFD\xF3nde est\xE1n los otros edificios junto a la casa? Arr\xE1stralos a su sitio y g\xEDralos para que encajen; luego elige \xABParcela\xBB arriba y lo ver\xE1s todo junto en 3D. Sin marcar, un plano est\xE1 en otro lugar (un piso de vacaciones).",site_turn_left:"Girar 15\xB0 a la izquierda",site_turn_right:"Girar 15\xB0 a la derecha",site_turn_90:"Girar 90\xB0",site_elsewhere:"est\xE1 en otro lugar",plan_alert:"{plan}: {text}",plan_alert_go:"Ver",room_card:"Tarjeta para esta habitaci\xF3n",room_card_hint:"Crea una plantilla de tarjeta que muestra solo esta habitaci\xF3n, para la tableta que hay en ella. En la tableta luego solo eliges la plantilla.",card_rooms:"Solo estas habitaciones",card_rooms_hint:"Toca habitaciones en el plano: la tarjeta muestra solo esas, con sus muebles y dispositivos; p. ej. para la tableta de los ni\xF1os o un piso de vacaciones. Una sola habitaci\xF3n se abre con sus dispositivos al lado. Vac\xEDo: toda la casa.",card_rooms_leave:"Se pueden abrir otras habitaciones",card_rooms_leave_hint:"Sin marcar, la tableta se queda en estas habitaciones.",camera_detect_popup:"Mostrar la imagen al detectar algo nuevo",camera_detect_popup_hint:"Cabina de c\xE1mara: cuando la c\xE1mara detecta algo nuevo (persona, coche, movimiento), su imagen aparece 20 segundos abajo a la derecha; un toque mira a trav\xE9s de la c\xE1mara.",camera_popup_open:"Mirar a trav\xE9s de la c\xE1mara",room_cleaning:"Limpieza (robot aspirador)",room_cleaning_hint:"El script o bot\xF3n que env\xEDa el robot aspirador a esta habitaci\xF3n (la limpieza por habitaciones de la integraci\xF3n de tu robot). El panel muestra entonces \xAB\u{1F9F9} Aspirar\xBB, y \xABaspira aqu\xED\xBB o \xABaspira la cocina\xBB funciona por voz.",panel_clean:"Aspirar",panel_everything_off:"Apagar todo ({n})",voice_clean_started:"El robot aspirador sale: {room}.",voice_clean_none:"{room} no tiene limpieza configurada (editor \u2192 habitaci\xF3n \u2192 Limpieza).",voice_off_done:"{room}: {n} dispositivos apagados.",voice_off_nothing:"{room}: ya est\xE1 todo apagado.",voice_noroom:"\xBFQu\xE9 habitaci\xF3n? Di p. ej. \xABaspira la cocina\xBB, o indica d\xF3nde cuelga la tableta.",voice_noroom_open:"Toca primero una habitaci\xF3n; entonces \xABah\xED\xBB se refiere a ella.",card_templates:"Plantillas de tarjeta",card_templates_intro:"Configura aqu\xED una tarjeta del panel una sola vez, p. ej. \xABCocina tableta Fire\xBB. En la tableta solo eliges la plantilla en el di\xE1logo de la tarjeta. Si la cambias aqu\xED, cada tableta con esta plantilla la sigue sola.",card_templates_empty:"A\xFAn no hay plantillas. Crea la primera con \xAB+ Nueva plantilla\xBB.",card_templates_no_editor:"No se pudo cargar el editor de la tarjeta. Recarga la p\xE1gina (Ctrl+F5).",card_template_new:"Nueva plantilla",card_template_new_name:"Nueva plantilla",card_template_copy_name:"{name} (copia)",card_template_delete_ask:"\xBFEliminar la plantilla \xAB{name}\xBB? Las tarjetas que la usan siguen con sus propios ajustes.",card_template_reloaded:"Recarga enviada: las pantallas abiertas se recargan en los pr\xF3ximos segundos.",card_template_reload_failed:"La recarga fall\xF3. \xBFYa funciona CasaNeon en esta versi\xF3n en Home Assistant (reiniciar tras una actualizaci\xF3n)?",card_template_reload_all:"Recargar todas las pantallas",card_template_reload_hint:"Recarga cada vista abierta de CasaNeon, p. ej. tras una actualizaci\xF3n. En automatizaciones: la acci\xF3n \xABneonplan3d.reload_screens\xBB.",card_template_name:"Nombre",card_template_duplicate:"Duplicar",card_template_preview:"Vista previa",card_template_preview_off:"Ocultar vista previa",card_template_preview_on:"Mostrar vista previa",card_template_where:"\xBFD\xF3nde cuelga la tableta?",card_template_where_hint:"La habitaci\xF3n para \xABaqu\xED\xBB: \xABEnciende la luz aqu\xED\xBB se aplica entonces a esta zona, aunque la tarjeta muestre siempre la planta baja.",card_template_reloading:"Recargando \u2026 (unos segundos)",screen_reloading:"Recargando \u2026",card_template_open:"Editar en el editor de CasaNeon",card_template_make:"Crear una plantilla en el editor de CasaNeon",card_template_screen:"Pantalla",card_template_screen_tablet:"Tableta 10\u2033 horizontal (Fire HD 10)",card_template_screen_small:"Tableta 7\u2033 horizontal (Fire 7)",card_template_screen_upright:"Tableta en vertical",card_template_screen_phone:"M\xF3vil",card_template_preview_look:"Solo para ver: tocar la vista previa no acciona nada.",card_template_where_other:"Otras zonas",card_template_voice_off:"El bot\xF3n del micr\xF3fono est\xE1 desactivado en esta plantilla. Sin \xE9l, la tableta no escucha.",card_template_voice_on:"Activar el bot\xF3n del micr\xF3fono",screens_title:"Pantallas abiertas",screens_hint:"Todos los dispositivos en los que CasaNeon est\xE1 abierto ahora y lo que muestran. Una tableta en reposo puede faltar un momento.",screens_none:"Ahora no hay ninguna pantalla de CasaNeon abierta.",screens_panel:"Vista 3D (barra lateral)",screens_card_own:"Tarjeta con ajustes propios",screens_since:"desde {time}",screens_old:"versi\xF3n antigua \u2013 recargar",screens_reload:"Recargar",screens_unknown_device:"Dispositivo desconocido",card_template_own:"Esta tarjeta a\xFAn tiene ajustes antiguos que ya no se aplican con la plantilla: {list}.",card_template_own_clear:"Limpiar (solo la plantilla)",card_template_mode:"Cambios:",card_template_live:"Directo a las tabletas",card_template_manual:"Enviar con un bot\xF3n",card_template_pending:"A\xFAn sin enviar: las tabletas muestran el estado anterior, la vista previa el nuevo.",card_template_publish:"Enviar a las tabletas",card_template_discard:"Descartar",card_template_published:"Enviado: las tabletas muestran ahora el nuevo estado.",card_template_preview_big:"Grande",card_template_preview_small:"Peque\xF1a",card_template_use:"C\xF3mo usarla: a\xF1ade la tarjeta CasaNeon en la tableta y elige la plantilla arriba, o en YAML:",card_template_copy:"Copiar",card_template_copied:"Copiado.",card_template_reload:"Recargar las pantallas con esta plantilla",card_template:"Plantilla",card_template_none:"Ninguna \u2013 ajustar aqu\xED",card_template_hint:"Las plantillas de tarjeta se crean en el editor de CasaNeon en \u2699 Ajustes \u2192 Plantillas de tarjeta. Luego aqu\xED solo eliges una.",card_template_on:"Esta tarjeta sigue su plantilla. C\xE1mbiala en el editor de CasaNeon en \u2699 Ajustes \u2192 Plantillas de tarjeta; cada tableta la adopta sola.",card_template_missing:"La plantilla de tarjeta \xAB{name}\xBB ya no est\xE1 en el plano. La tarjeta usa sus propios ajustes.",room_bar:"Barra de habitaciones",room_bar_hint:"Abajo una tarjeta por habitaci\xF3n: temperatura, ventanas abiertas, lo que suena y un interruptor de luz. Un toque vuela a la habitaci\xF3n. Arriba quedan solo las plantas; el ojo deja la barra.",room_bar_none:"Sin barra de habitaciones",room_bar_rooms:"Barra de habitaciones",room_bar_all:"+ favoritos",room_bar_hide:"Plegar la barra de habitaciones",room_bar_on:"Encendido",room_bar_off:"Apagado",room_bar_light:"Luz",room_bar_activate:"Activar",room_bar_lights:"{n} encendidas",room_bar_lights_off:"Apagar las luces de la habitaci\xF3n",room_bar_open:"abierta",room_bar_playing:"sonando",card_room_bar:"Barra de habitaciones abajo",card_room_bar_favorites:"Favoritos en la barra de habitaciones",card_room_bar_favorites_hint:"Escenas, scripts e interruptores de los favoritos (Ajustes \u2192 Favoritos) al principio de la barra.",show_if:"Mostrar solo si \u2026",show_if_hint:"La pieza aparece en 3D solo mientras una entidad est\xE1 en un estado: el \xE1rbol de Navidad mientras input_boolean.navidad est\xE1 encendido, la decoraci\xF3n solo en diciembre. El editor siempre la muestra.",show_if_entity:"Entidad",show_if_state:"Estado",show_if_state_hint:'Varios estados separados por comas (p. ej. "on, home"); "<20" o ">80" compara un n\xFAmero; un "!" delante lo invierte (se muestra en cualquier otro estado). Vac\xEDo significa "on".',show_if_now_on:"visible ahora",show_if_now_off:"oculta ahora",fun_intro_settings:"Extras gratis para divertirse. Sus muebles llegan con un archivo de pack importado en Extensiones; aqu\xED los configuras.",fun_moved:"Los packs divertidos se configuran ahora en el editor en \u2699 Ajustes \u2192 Packs divertidos. Sus muebles se siguen importando aqu\xED, entre los packs.",fun_open_settings:"Abrir los ajustes de los packs divertidos",halloween_deco_hint:"Las decoraciones est\xE1n en la biblioteca de muebles del editor, en \xABPack divertido: Halloween\xBB. Calabaza, caldero y velas brillan con una luz vinculada.",fun_name_winter:"Invierno y Navidad",fun_feature_winter:"Un \xE1rbol de Navidad cuyas luces brillan con su enchufe, una corona de Adviento que enciende sola una vela m\xE1s cada domingo de Adviento, estrella de ventana, arco de velas, reno luminoso, mu\xF1eco de nieve, regalos y guirnaldas de luces.",winter_deco_hint:'La decoraci\xF3n est\xE1 en la biblioteca de muebles del editor, en "Pack divertido: Invierno y Navidad". Con "Mostrar solo si \u2026" vuelve sola cada diciembre, p. ej. mientras input_boolean.navidad est\xE1 encendido.',winter_roof_lights:"Guirnalda de luces en el alero",winter_roof_entity:"Se enciende con",winter_roof_auto:"Autom\xE1tico: por la tarde desde el 1.er domingo de Adviento hasta el 6 de enero",winter_roof_color:"De colores en lugar de blanco c\xE1lido",winter_roof_outline:"Tambi\xE9n en los hastiales y la cumbrera (todo el tejado)",winter_snow:"Nieve en el tejado y el c\xE9sped mientras nieva (se derrite con el deshielo)",winter_firework:"Fuegos artificiales sobre la casa a medianoche en Nochevieja",style_slide:"Corredera (una hoja se desliza delante de la fija)",preset_terrace_slide:"Puerta elevadora corredera",preset_window_slide:"Ventana corredera",mount_below_hint:"Por debajo de 0 solo fuera de las habitaciones: escalones que bajan a una terraza hundida o a un patio de luces.",furn_glow_color:"Color fijo en 3D",furn_glow_color_hint:"La l\xE1mpara brilla siempre en este color en el plano, sea cual sea el color que indique la luz \u2013 encendido/apagado y brillo siguen viniendo de la luz.",marker_show_active:"Solo si est\xE1 activo"};function T(o,e,t={}){let n=Mh[e]??e;for(let[r,i]of Object.entries(t))n=n.replace(`{${r}}`,String(i));return n}function oe(o,e,t=2){return e.toLocaleString("es",{maximumFractionDigits:t})}var Ph={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function ut(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function ki(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return i<=.1?0:Math.min(1,.3+i/10)}function nc(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let r=Ph[n.state];if(!r)return null;let i=n.attributes,a=r.cloud??0;typeof i.cloud_coverage=="number"&&(a=Math.min(1,Math.max(0,i.cloud_coverage/100)));let s=r.wind??0;if(typeof i.wind_speed=="number"){let u=i.wind_speed_unit==="m/s"?i.wind_speed*3.6:i.wind_speed_unit==="mph"?i.wind_speed*1.609:i.wind_speed;s=Math.max(s,Math.min(1,u/60))}let l=ki(o,t);return l!==null&&l>0&&(a=Math.max(a,.85)),{entity:n.entity_id,condition:n.state,rain:l??r.rain??0,snow:r.snow??0,fog:r.fog??0,cloud:a,wind:s,lightning:!!r.lightning}}function oc(o,e){let t=new Set(e??ll);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var Ih=["pool","room_bar"];function $i(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("neonplan3d.lab","1"):o==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function ic(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("neonplan3d.projection","1"):o==="0"&&localStorage.removeItem("neonplan3d.projection"),localStorage.getItem("neonplan3d.projection")==="1"}catch{return!1}}function nt(o){return!Ih.includes(o)||$i()}var rc="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",Eh={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function ac(o){let e=o?Eh[o]:void 0;return e?`${rc}#${e}`:rc}function V(o){return nt(o)}var Ah=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),Th=new Set(["power","plug","connectivity","running"]);function jo(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return Th.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return Ah.has(n)||n.startsWith("ob ")}function Pi(o){let e=we(o);if(!e)return!1;if(zh.test([e.id,...e.tags??[],...Object.values(e.name??{})].join(" ")))return!e.light||/plant|pflanz/i.test(e.id);if(e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var zh=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var ke=["#3a3f47","#3a3f47"],jt=["#23262b","#23262b"],Ge=["#5a3b25","#5a3b25"],me=["#1f4fa8","#1f4fa8"],wt=["#e3b616","#e3b616"],re=["#2f7d3b","#2f7d3b"],sc={default:{rest:ke,bio:Ge,paper:me,plastic:wt,glass:re,garden:re,recycling:wt,other:ke},DE:{rest:jt,bio:Ge,paper:me,plastic:wt,glass:re,garden:re,recycling:wt},AT:{rest:ke,bio:Ge,paper:[ke[0],"#c0262d"],plastic:wt,glass:re,garden:re},CH:{rest:["#d8d8d8","#d8d8d8"],bio:re,paper:me,plastic:ke,glass:re,garden:re},NL:{rest:ke,bio:re,paper:me,plastic:["#3a3f47","#e57a1f"],glass:re,garden:re},BE:{rest:ke,bio:re,paper:me,plastic:me,glass:re,garden:re},GB:{rest:jt,bio:["#3a3f47","#5a3b25"],paper:me,plastic:me,glass:jt,garden:Ge,recycling:me},US:{rest:jt,bio:re,paper:me,plastic:me,glass:me,garden:re,recycling:me},CA:{rest:jt,bio:re,paper:me,plastic:me,glass:me,garden:re,recycling:me},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:ke,bio:Ge,paper:[ke[0],"#e3b616"],plastic:[ke[0],"#e3b616"],recycling:[ke[0],"#e3b616"],glass:re,garden:re},IT:{rest:ke,bio:Ge,paper:me,plastic:wt,glass:re,garden:re},ES:{rest:ke,bio:Ge,paper:me,plastic:wt,glass:re,garden:re},PT:{rest:ke,bio:Ge,paper:me,plastic:wt,glass:re,garden:re},DK:{rest:jt,bio:re,paper:me,plastic:ke,glass:re,garden:re},SE:{rest:jt,bio:Ge,paper:me,plastic:ke,glass:re,garden:re},NO:{rest:ke,bio:Ge,paper:me,plastic:ke,glass:re,garden:re},FI:{rest:ke,bio:Ge,paper:me,plastic:ke,glass:re,garden:re}},dc="DE";function uc(o){dc=o}function pc(o){var n;let e=(n=o==null?void 0:o.config)==null?void 0:n.country;if(e)return e.toUpperCase();let t=((o==null?void 0:o.language)??"").split("-")[1];return t?t.toUpperCase():"DE"}function Ch(o,e){var t;return((t=sc[e])==null?void 0:t[o])??sc.default[o]??ke}function hc(o,e=dc){let t=Ch(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var Rh={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function Mi(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(r=>r.trim()&&n.includes(r.trim())):e==="other"?!1:Rh[e].some(r=>n.includes(r))}function Ii(o){let e=typeof o=="string"?o:(o==null?void 0:o.date)??(o==null?void 0:o.dateTime);if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Fh(o){return o.map(e=>({day:Ii(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function fc(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function Ei(o,e,t=new Date,n=42){let r=new Map,i=o.callApi;if(!i)return r;let a=new Date(t.getFullYear(),t.getMonth(),t.getDate()),s=mc(a,n);return await Promise.all(e.map(async l=>{try{let u=await i.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(a.toISOString())}&end=${encodeURIComponent(s.toISOString())}`);r.set(l,Fh(Array.isArray(u)?u:[]))}catch{}})),r}var mn=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),mc=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),Do=(o,e)=>Math.round((mn(e).getTime()-mn(o).getTime())/864e5);function Si(o,e,t={}){let n=t.from??14,r=t.until??12,i=e.getHours()+e.getMinutes()/60;return o===1&&i>=n||o===0&&i<r}function gc(o,e,t,n=new Date,r=3){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return[];if(i.startsWith("calendar.")){let s=mn(n);return(t.get(i)??[]).filter(l=>l.day>=s&&Mi(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,r)}let a=Ai(o,e,t,n);return a?[{day:a.day,summary:a.summary}]:[]}function Ai(o,e,t,n=new Date,r={}){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return null;let a=mn(n);if(i.startsWith("calendar.")){let c=(t.get(i)??[]).find(p=>p.day>=a&&Mi(p.summary,o.bin_kind??"rest",o.bin_match));if(!c)return null;let d=Do(a,c.day);if(d===0&&n.getHours()+n.getMinutes()/60>=(r.until??12)){let p=(t.get(i)??[]).find(h=>h.day>a&&Mi(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:Do(a,p.day),day:p.day,summary:p.summary,glow:Si(Do(a,p.day),n,r)}}return{days:d,day:c.day,summary:c.summary,glow:Si(d,n,r)}}let s=e.states[i];if(!s)return null;let l=Lh(s,n);if(l===null||l<0)return null;let u=mc(a,l);return{days:l,day:u,summary:String(s.attributes.friendly_name??""),glow:Si(l,n,r)}}function Hh(o,e){let t=typeof o=="string"&&o!=="none"?o:null,n=t?e.states[t]:void 0;return!!n&&yc.has(String(n.state).toLowerCase())}function Ti(o,e){return Hh(o.bin_out,e)}function bc(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function _c(o,e=.3){let t=o.filter(s=>!s.icon),n=t.map((s,l)=>l),r=s=>n[s]===s?s:n[s]=r(n[s]);for(let s=0;s<t.length;s++)for(let l=s+1;l<t.length;l++){let u=t[s],c=t[l];u.floorId===c.floorId&&Math.hypot(u.x-c.x,u.z-c.z)<=u.r+c.r+e&&(n[r(l)]=r(s))}let i=new Map;t.forEach((s,l)=>i.set(r(l),[...i.get(r(l))??[],s]));let a=[];for(let s of i.values())s.sort((l,u)=>l.days-u.days||l.name.localeCompare(u.name)),a.push({floorId:s[0].floorId,x:s.reduce((l,u)=>l+u.x,0)/s.length,z:s.reduce((l,u)=>l+u.z,0)/s.length,y:Math.max(...s.map(l=>l.y)),lines:s});for(let s of o)s.icon&&a.push({floorId:s.floorId,x:s.x,z:s.z,y:s.y,lines:[s]});return a}function vc(o,e={}){let t=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,n=o.length?Math.min(...o.map(r=>r.days)):0;return new Set(o.filter(r=>(t===null||r.days<=t)&&(!e.nextOnly||r.days===n)).map(r=>r.id))}function Oh(o,e=new Date){let t=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o)??/(?:^|[^\d])(\d{1,2})(-)(\d{1,2})-(\d{4})(?![\d])/.exec(o),r,i,a;if(t)[r,i,a]=[Number(t[1]),Number(t[2]),Number(t[3])];else if(n){let l=Number(n[1]),u=Number(n[3]);n[2]==="/"&&u>12&&l<=12&&([l,u]=[u,l]),a=l,i=u;let c=n[4];r=c?c.length===2?2e3+Number(c):Number(c):e.getFullYear(),!c&&new Date(r,i-1,a)<mn(e)&&(r+=1)}else return null;if(i<1||i>12||a<1||a>31)return null;let s=new Date(r,i-1,a);return s.getMonth()===i-1?s:null}function Lh(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;for(let l of["Days_until","days_until"]){let u=t[l];if(typeof u=="number"&&Number.isFinite(u))return Math.round(u);if(typeof u=="string"&&/^-?\d+$/.test(u.trim()))return Number(u.trim())}let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let r=/^\d{4}-\d{2}-\d{2}T/.test(n)?Ii(n):Oh(n,e);if(r)return Do(e,r);let i=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(i))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(i))return 1;let a=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(i)??/\bin\s+(\d+)/.exec(i);if(a)return Number(a[1]);let s=i.match(/\d+/g);return s?Number(s[s.length-1]):null}var yc=new Set(["on","open","true","detected","home"]);function lc(o){let e=o!=null&&o.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function wc(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let r=e.states[n];if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let i=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!i){let l=Number(r.state);return yc.has(r.state.toLowerCase())||Number.isFinite(l)&&l>0}let a=lc(r),s=lc(e.states[i]);return a===null||t-a>7*864e5?!1:s===null||a>s+1e3}function xc(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:Vh(o)}function kc(o){var t;if(o==="washer"||o==="dryer"||o==="dishwasher")return o;let e=(t=we(o))==null?void 0:t.id;return e?/dishwasher|geschirr/.test(e)?"dishwasher":/dryer|trockner/.test(e)?"dryer":/washer|washing|waschmaschine/.test(e)?"washer":/oven|cooker|backofen/.test(e)?"oven":null:null}var $c=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function zi(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let i=n.attributes,a=String(i.problem??"").toLowerCase();return String(i.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&a.includes("moisture")&&!a.includes("high")}let r=$c(n);return r!==null&&r<(o.moisture_min??20)}function Ci(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let a=Number(t),s=n==="s"?a/60:n==="h"?a*60:a;return Math.max(0,Math.round(s))}let r=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(r)return Number(r[1])*60+Number(r[2])+Math.round(Number(r[3]??0)/60);let i=Date.parse(t);return Number.isFinite(i)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((i-e)/6e4)):null}var jh=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function Ri(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return jh.has(e)}var Dh=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function Fi(o,e,t){let n=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(n!==null&&Dh.has(n))return!0;let r=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),i=!!o&&!r&&n!==null&&(n==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(n));return e!==null&&e<=t&&!i}function Sc(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function cc(o,e,t,n){let r=typeof o=="string"&&o!=="none"?o:null,i=r?t.states[r]:void 0;if(!r||!i||i.state==="unavailable"||i.state==="unknown")return!1;if(r.startsWith("binary_sensor.")||r.startsWith("input_boolean."))return i.state==="on";let a=$c(i);if(a!==null)return a<=(e??10);let s=Ii(i.state);return!!s&&s.getTime()<=mn(n).getTime()}function Mc(o,e,t=new Date){let n=[];return cc(o.service,o.service_min,e,t)&&n.push(o.service),o.service2!==o.service&&cc(o.service2,o.service2_min,e,t)&&n.push(o.service2),n}var xt=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),Pc=o=>!!o&&(o.state==="on"||o.state==="open");function No(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let r of xt(o)){let i=e.states[r];if(Pc(i)&&(i!=null&&i.last_changed)&&t-Date.parse(i.last_changed)>=n)return r}return null}function Ic(o,e,t=Date.now()){let n=null;for(let r of o)if(!(r.type!=="fridge"&&r.type!=="fridge_smart"))for(let i of xt(r)){let a=e.states[i];if(!Pc(a)||!(a!=null&&a.last_changed))continue;let s=Date.parse(a.last_changed)+(r.door_alarm??2)*6e4-t;s>0&&(n===null||s<n)&&(n=s)}return n}var Vo=class{running=new Map;ended=new Map;update(e,t,n,r=Date.now()){let i=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;i===!0&&this.ended.set(e,r);let a=this.ended.get(e);return a===void 0?!1:r-a>12*36e5||n(a)?(this.ended.delete(e),!1):!0}};function Vh(o){return[o.moisture??null,o.remaining??null,o.service??null,o.service2??null]}var zc="proxmoxve";function Nh(o){let e=new Map;for(let t of Object.values(o.entities??{})){if(t.platform!==zc||!t.device_id||!t.translation_key)continue;let n=t.entity_id.slice(0,t.entity_id.indexOf("."));if(n!=="sensor"&&n!=="binary_sensor")continue;let r=e.get(t.device_id);r||e.set(t.device_id,r=new Map);let i=`${n==="binary_sensor"?"b:":""}${t.translation_key}`;r.has(i)?r.set(`${i}#${t.entity_id}`,t.entity_id):r.set(i,t.entity_id)}return e}function Wo(o){return!!o&&o.state!=="unavailable"&&o.state!=="unknown"}function Ye(o,e){let t=e?o.states[e]:void 0;if(!Wo(t))return null;let n=Number(t.state);return Number.isFinite(n)?n:null}function qo(o,e){var n;let t=(n=o.devices)==null?void 0:n[e];return(t==null?void 0:t.name_by_user)||(t==null?void 0:t.name)||e}function Hi(o){let e=/^(?:qemu|lxc|vm)\s+(.*?)\s*\((\d+)\)\s*$/i.exec(o.trim());return e?{name:e[1],vmid:Number(e[2])}:{name:o.trim(),vmid:null}}var Ec=new WeakMap;function Cc(o){let e=o==null?void 0:o.entities;if(!e)return!1;let t=Ec.get(e);return t===void 0&&Ec.set(e,t=Object.values(e).some(n=>n.platform===zc)),t}function Zn(o){var r,i,a;let e=[],t=[],n=[];for(let[s,l]of Nh(o)){let u=c=>l.get(c);if(u("node_status")||u("qemu_on")||u("lxc_on")){let c=u("node_status")??u("b:status"),d=o.states[c],p=c===u("node_status")?(d==null?void 0:d.state)==="online":(d==null?void 0:d.state)==="on";e.push({deviceId:s,name:qo(o,s).replace(/^node\s+/i,""),online:p,cpu:Ye(o,u("cpu_used")),memory:Ye(o,u("memory_used_perc")),disk:Ye(o,u("disk_used_perc")),load:Ye(o,u("load_1m")),vmsOn:Ye(o,u("qemu_on")),lxcOn:Ye(o,u("lxc_on")),updates:Ye(o,u("updates_total")),failedTasks:Ye(o,u("failed_tasks_count")),entity:c})}else if(u("cpu_used")&&(u("b:status")||u("status_raw"))){let c=u("b:status")??u("status_raw"),d=o.states[c],p=c===u("b:status")?(d==null?void 0:d.state)==="on":(d==null?void 0:d.state)==="running",h=((i=(r=o.devices)==null?void 0:r[s])==null?void 0:i.model)??"",f=Hi(qo(o,s)),m=/lxc/i.test(h)||/^lxc\b/i.test(qo(o,s))?"lxc":"vm",g=u("memory_used")?o.states[u("memory_used")]:void 0,_=u("uptime")?o.states[u("uptime")]:void 0,w=u("ip_address")?o.states[u("ip_address")]:void 0;t.push({deviceId:s,name:f.name,vmid:f.vmid,kind:m,running:p,cpu:p?Ye(o,u("cpu_used")):null,memory:p?Ye(o,u("memory_used_perc")):null,memoryUsed:p&&Wo(g)?`${Number(g.state).toFixed(1)} ${g.attributes.unit_of_measurement??""}`.trim():null,disk:Ye(o,u("disk_used_perc")),ip:Wo(w)?w.state:null,since:p&&Wo(_)?_.state:null,problem:((a=o.states[u("b:health")??""])==null?void 0:a.state)==="on",entity:c})}else{let c=[...l].filter(([d])=>d==="b:health"||d.startsWith("b:health#")).map(([,d])=>d);c.length&&[...l.keys()].some(d=>d.startsWith("disk_size"))&&n.push({deviceId:s,name:qo(o,s),health:c})}}return t.sort((s,l)=>(s.vmid??1e9)-(l.vmid??1e9)||s.name.localeCompare(l.name)),{nodes:e,instances:t,disks:n}}function Rc(o){return[...o.nodes.map(e=>e.entity),...o.instances.map(e=>e.entity),...o.disks.flatMap(e=>e.health)]}var Ac=new Set;function Fc(o){let e=[];for(let t of o.instances)t.running?Ac.add(t.deviceId):Ac.has(t.deviceId)&&e.push(t);return e}var Tc=new Set;function Hc(o,e){var n;let t=[];for(let r of e.disks)for(let i of r.health){let a=(n=o.states[i])==null?void 0:n.state;a==="off"?Tc.add(i):a==="on"&&Tc.has(i)&&t.push({disk:r,entity:i})}return t}function Oc(o,e=Date.now()){let t=Math.max(0,(e-Date.parse(o))/1e3);if(!Number.isFinite(t))return"\u2013";let n=Math.floor(t/86400),r=Math.floor(t%86400/3600),i=Math.floor(t%3600/60);return n?`${n} d ${r} h`:r?`${r} h ${i} min`:`${i} min`}var qh=10*6e4,Wh=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Lc={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function eo(o,e,t){let n=[];for(let p of e.floors)for(let h of p.rooms){let f=xe(o,h.area_id).filter(m=>{var g;return m.startsWith("binary_sensor.")&&!!Lc[String((g=o.states[m])==null?void 0:g.attributes.device_class)]});f.length&&n.push({floorId:p.id,roomId:h.id,sensors:f})}let r=Object.keys(o.states),i=e.settings.rain_warning===!1?null:ut(o,t??e.settings.weather_entity),a=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,s=V("household")?e.floors.flatMap(p=>p.furniture.filter(h=>(h.type==="fridge"||h.type==="fridge_smart")&&xt(h).length).map(h=>{var f;return{floorId:p.id,roomId:((f=p.rooms.find(m=>m.points.length>=3&&B([h.x,h.z],m.points)))==null?void 0:f.id)??null,furnitureId:h.id,ids:xt(h)}})):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,u=l&&o.states[l]?l:null,c=Rc(Zn(o)),d=c.length?{ids:c,...Bh(e)}:null;return{rooms:n,alarms:r.filter(p=>p.startsWith("alarm_control_panel.")),weather:i,outage:a,rain:u,fridges:s,proxmox:d}}function Bh(o){for(let e of o.floors){let t=e.furniture.find(r=>r.type.endsWith(":server_rack")),n=t?e.rooms.find(r=>r.points.length>=3&&B([t.x,t.z],r.points)):void 0;if(t)return{roomId:(n==null?void 0:n.id)??null,floorId:e.id}}return{roomId:null,floorId:null}}function Oi(o){var e;return[...o.rooms.flatMap(t=>t.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(t=>t.ids),...((e=o.proxmox)==null?void 0:e.ids)??[]]}function Bo(o,e,t,n){var s,l,u;let r=[];for(let c of t.rooms)for(let d of c.sensors){let p=o.states[d];(p==null?void 0:p.state)==="on"&&r.push({kind:Lc[String(p.attributes.device_class)],entity:d,roomId:c.roomId,floorId:c.floorId})}let i=t.rain?ki(o,t.rain):null;if(i!==null?i>0:!!t.weather&&Wh.has(((s=o.states[t.weather])==null?void 0:s.state)??""))for(let c of e.floors)for(let d of c.openings){if(d.type!=="window"||d.rain_ignore)continue;let p=n.get(d.id);if(!p)continue;let h=dt(o,p,"window");h.open<.5&&h.tilt<.5&&h.open2<.5&&h.tilt2<.5||r.push({kind:"window_rain",entity:p.contact??p.tilt??p.contact2??d.id,roomId:d.room_id,floorId:c.id})}if(t.outage&&jo(o.states[t.outage])&&r.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null}),e.settings.alert_unavailable){let c=Date.now(),d=new Set;for(let p of e.floors)for(let h of p.openings){let f=n.get(h.id);if(f)for(let m of[f.contact,f.tilt,f.contact2,f.tilt2]){if(!m||d.has(m))continue;let g=o.states[m];if(!g||g.state!=="unavailable"&&g.state!=="unknown")continue;let _=Date.parse(g.last_changed??"");Number.isFinite(_)&&c-_<qh||(d.add(m),r.push({kind:"contact_unavailable",entity:m,roomId:h.room_id,floorId:p.id}))}}}for(let c of t.fridges??[]){let d=(l=e.floors.find(h=>h.id===c.floorId))==null?void 0:l.furniture.find(h=>h.id===c.furnitureId),p=d?No(d,o):null;p&&r.push({kind:"fridge_door",entity:p,roomId:c.roomId,floorId:c.floorId})}if(t.proxmox){let{roomId:c,floorId:d}=t.proxmox,p=Zn(o);for(let h of p.nodes)h.online||r.push({kind:"pve_node_down",entity:h.entity,roomId:c,floorId:d});for(let h of Hc(o,p))r.push({kind:"pve_disk",entity:h.entity,roomId:c,floorId:d});for(let h of Fc(p))r.push({kind:"pve_stopped",entity:h.entity,roomId:c,floorId:d})}for(let c of t.alarms){let d=(u=o.states[c])==null?void 0:u.state;d==="triggered"?r.push({kind:"alarm",entity:c,roomId:null,floorId:null}):d==="pending"&&r.push({kind:"alarm_pending",entity:c,roomId:null,floorId:null})}return r}function jc(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"pve_stopped":return[1,.62,.2];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function Dt(o,e,t){let n=t.roomId?e.floors.flatMap(a=>a.rooms).find(a=>a.id===t.roomId):null;if(t.text!==void 0)return n?`${n.name} \xB7 ${t.text}`:t.text;let r=t.kind.startsWith("pve_")&&o?Uh(o,t):o?Y(o,t.entity):t.entity,i=T(o,`alert_${t.kind}`,{name:r});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${T(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${i}`:i}function Uh(o,e){var i,a,s;let t=(a=(i=o.entities)==null?void 0:i[e.entity])==null?void 0:a.device_id,n=t?(s=o.devices)==null?void 0:s[t]:void 0,r=(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||Y(o,e.entity);if(e.kind==="pve_node_down")return r.replace(/^node\s+/i,"");if(e.kind==="pve_stopped"){let l=Hi(r);return l.vmid===null?l.name:`${l.name} (${l.vmid})`}return r}var Le=(o,e)=>[o[0]-e[0],o[1]-e[1]],kt=(o,e)=>[o[0]+e[0],o[1]+e[1]],pt=(o,e)=>[o[0]*e,o[1]*e],ji=(o,e)=>o[0]*e[0]+o[1]*e[1],gn=(o,e)=>o[0]*e[1]-o[1]*e[0],to=o=>Math.hypot(o[0],o[1]),$t=o=>{let e=to(o)||1;return[o[0]/e,o[1]/e]},Dc=o=>[-o[1],o[0]],Vc=o=>[o[1],-o[0]];function bn(o,e,t=[]){let n=e.eps??.005,r=[],i=t.filter(A=>Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1])>.05),a=[],s=A=>{for(let P=0;P<a.length;P++)if(Math.abs(a[P][0]-A[0])<=n&&Math.abs(a[P][1]-A[1])<=n)return P;return a.push([A[0],A[1]]),a.length-1},l=[];for(let A of o){let P=A.points;if(P.length<3||Math.abs(qe(P))<1e-6)continue;let $=qe(P)>0,E=P.map(s);for(let R=0;R<P.length;R++){let j=E[R],N=E[(R+1)%P.length];j!==N&&l.push($?{u:j,v:N,room:A.id,edge:R,forward:!0}:{u:N,v:j,room:A.id,edge:R,forward:!1})}}let u=i.map(A=>[s(A.a),s(A.b)]),c=new Set;for(let A of o){let P=A.points;P.length<3||(A.wall_splits??[]).forEach(($,E)=>{if(!$||E>=P.length)return;let R=P[E],j=Le(P[(E+1)%P.length],R),N=to(j);for(let J of $)J>n&&J<N-n&&c.add(s(kt(R,pt(j,J/N))))})}let d=[];for(let A of l){let P=a[A.u],$=a[A.v],E=Le($,P),R=to(E),j=pt(E,1/R),N=[];for(let H=0;H<a.length;H++){if(H===A.u||H===A.v)continue;let U=Le(a[H],P),ne=ji(U,j);ne<=n||ne>=R-n||Math.abs(gn(j,U))<=n&&N.push({t:ne,id:H})}N.sort((H,U)=>H.t-U.t);let J=[{t:0,id:A.u},...N,{t:R,id:A.v}];for(let H=0;H+1<J.length;H++){let U=J[H],ne=J[H+1],K=A.forward?U.t:R-ne.t,Z=A.forward?ne.t:R-U.t;d.push({u:U.id,v:ne.id,room:A.room,edge:A.edge,t0:K,t1:Z})}}let p=new Map;for(let A of d){let P=A.u<A.v?`${A.u}-${A.v}`:`${A.v}-${A.u}`,$=p.get(P);$||p.set(P,$=[]),$.push(A)}let h=A=>({room_id:A.room,edge:A.edge,t0:A.t0,t1:A.t1}),f=new Map;for(let A of d){let P=`${A.room}:${A.edge}`;f.set(P,[...f.get(P)??[],A.t0].sort(($,E)=>$-E))}let m=A=>{var E,R;let P=(R=(E=o.find(j=>j.id===A.room))==null?void 0:E.wall_heights)==null?void 0:R[A.edge];if(!Array.isArray(P))return P;let $=f.get(`${A.room}:${A.edge}`)??[];return P[$.indexOf(A.t0)]??null},g=A=>{let P=A.map(m).filter(E=>typeof E=="number"&&E>0);if(P.length)return Math.min(...P);let $=A.map(E=>{var R;return(R=o.find(j=>j.id===E.room))==null?void 0:R.ceiling_height});return $.every(E=>typeof E=="number"&&E>0)?Math.max(...$):void 0},_=A=>{let P=A.map($=>{var E,R;return(R=(E=o.find(j=>j.id===$.room))==null?void 0:E.wall_thickness)==null?void 0:R[$.edge]}).filter($=>typeof $=="number"&&$>0);return P.length?Math.max(...P):void 0},w=A=>{var P;for(let $ of A){let E=o.find(J=>J.id===$.room),R=(P=E==null?void 0:E.wall_slopes)==null?void 0:P[$.edge];if(!E||!R)continue;let j=E.points[$.edge],N=E.points[($.edge+1)%E.points.length];return{p:[j[0],j[1]],q:[N[0],N[1]],h0:Math.max(.05,R[0]),h1:Math.max(.05,R[1])}}},v=A=>A.some(P=>m(P)===0),k=A=>{let P=w(A);return P?{height:Math.max(P.h0,P.h1),slope:P}:{height:g(A)}},S=[],M=[];for(let A of p.values()){let P=A[0],$=A.find(E=>E!==P&&E.u===P.v&&E.v===P.u&&E.room!==P.room);for(let E of A)E!==P&&E!==$&&E.room!==P.room&&r.push(`overlap:${P.room}:${E.room}`);if(v($?[P,$]:[P])){$&&S.push([P.room,$.room]);continue}if($){let E=_([P,$])??e.interior;M.push({a:P.u,b:P.v,left:E/2,right:E/2,exterior:!1,roomLeft:P.room,roomRight:$.room,sources:[h(P),h($)],...k([P,$])})}else M.push({a:P.u,b:P.v,left:0,right:_([P])??e.exterior,exterior:!0,roomLeft:P.room,roomRight:null,sources:[h(P)],...k([P])})}let y=A=>$t(Le(a[A.b],a[A.a]));for(let A of M){if(A.exterior||A.free)continue;let P=new Set;for(let E of[A.a,A.b])for(let R of M)!R.exterior||R.free||R.a!==E&&R.b!==E||Math.abs(gn(y(A),y(R)))>1e-6||(R.roomLeft===A.roomLeft?P.add("left"):R.roomLeft===A.roomRight&&P.add("right"));if(P.size!==1)continue;let $=A.left+A.right;P.has("left")?(A.left=0,A.right=$):(A.left=$,A.right=0)}i.forEach((A,P)=>{var ne;let[$,E]=u[P];if($===E)return;let R=[(A.a[0]+A.b[0])/2,(A.a[1]+A.b[1])/2],j=((ne=o.find(K=>K.points.length>=3&&B(R,K.points)))==null?void 0:ne.id)??null,N=(A.thickness??e.interior)/2,J=typeof A.height=="number"&&A.height>0?A.height:void 0,H=A.slope,U=H?{p:[A.a[0],A.a[1]],q:[A.b[0],A.b[1]],h0:Math.max(.05,H[0]),h1:Math.max(.05,H[1])}:void 0;M.push({free:A.id,a:$,b:E,left:N,right:N,exterior:!1,roomLeft:j,roomRight:j,sources:[],...U?{height:Math.max(U.h0,U.h1),slope:U}:{height:J}})}),M=Gh(M,a,c);let C=Qh(M,a);return{walls:M.map((A,P)=>{let $=a[A.a],E=a[A.b],R=C.get(`${P}:a`),j=C.get(`${P}:b`),N=Jh([R.right,j.left,E,j.right,R.left,$],1e-6);return{id:Kh($,E),a:[$[0],$[1]],b:[E[0],E[1]],left:A.left,right:A.right,exterior:A.exterior,roomLeft:A.roomLeft,roomRight:A.roomRight,sources:A.sources,footprint:N,...A.free?{free:A.free}:{},...A.height!==void 0?{height:A.height}:{},...A.slope?{slope:A.slope}:{}}}),warnings:[...new Set(r)],open:S}}function Kh(o,e){let t=i=>Math.round(i*100),[n,r]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Li(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Gh(o,e,t=new Set){let n=o.slice(),r=!0;for(;r;){r=!1;let i=new Map;n.forEach((a,s)=>{for(let l of[a.a,a.b]){let u=i.get(l);u||i.set(l,u=[]),u.push(s)}});for(let[a,s]of i){if(s.length!==2||t.has(a))continue;let l=n[s[0]],u=n[s[1]],c=l.b!==a&&u.a!==a;if(l.b!==a&&(l=Li(l)),u.a!==a&&(u=Li(u)),l.a===u.b)continue;let d=$t(Le(e[l.b],e[l.a])),p=$t(Le(e[u.b],e[u.a]));if(Math.abs(gn(d,p))>1e-6||ji(d,p)<=0||l.free||u.free||l.height!==u.height||l.slope||u.slope||l.exterior!==u.exterior||l.roomLeft!==u.roomLeft||l.roomRight!==u.roomRight||Math.abs(l.left-u.left)>1e-9||Math.abs(l.right-u.right)>1e-9)continue;let h={...l,b:u.b,sources:Yh(l.sources,u.sources)},f=c?Li(h):h,m=n.filter((g,_)=>_!==s[0]&&_!==s[1]);m.push(f),n.length=0,n.push(...m),r=!0;break}}return n}function Yh(o,e){let t=o.map(n=>({...n}));for(let n of e){let r=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Qh(o,e){let t=new Map;o.forEach((r,i)=>{let a=$t(Le(e[r.b],e[r.a])),s=[[r.a,{key:`${i}:a`,d:a,left:r.left,right:r.right,angle:Math.atan2(a[1],a[0])}],[r.b,{key:`${i}:b`,d:pt(a,-1),left:r.right,right:r.left,angle:Math.atan2(-a[1],-a[0])}]];for(let[l,u]of s){let c=t.get(l);c||t.set(l,c=[]),c.push(u)}});let n=new Map;for(let[r,i]of t){let a=e[r];i.sort((u,c)=>u.angle-c.angle);let s=u=>({left:kt(a,pt(Dc(u.d),u.left)),right:kt(a,pt(Vc(u.d),u.right))});for(let u of i)n.set(u.key,s(u));if(i.length<2)continue;let l=4*Math.max(...i.map(u=>Math.max(u.left,u.right)))+1e-9;for(let u=0;u<i.length;u++){let c=i[u],d=i[(u+1)%i.length],p=kt(a,pt(Dc(c.d),c.left)),h=kt(a,pt(Vc(d.d),d.right)),f=gn(c.d,d.d);if(Math.abs(f)<1e-4)continue;let m=gn(Le(h,p),d.d)/f,g=kt(p,pt(c.d,m));to(Le(g,a))>l||(n.get(c.key).left=g,n.get(d.key).right=g)}}return n}function Jh(o,e){let t=o.filter((r,i)=>to(Le(r,o[(i+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let i=t[(r+t.length-1)%t.length],a=t[r],s=t[(r+1)%t.length],l=Le(a,i),u=Le(s,a);if(Math.abs(gn($t(l),$t(u)))<1e-7&&ji(l,u)>0){t=t.filter((c,d)=>d!==r),n=!0;break}}}return t}function Uo(o,e,t){let n=o.points[e],r=o.points[(e+1)%o.points.length],i=$t(Le(r,n));return kt(n,pt(i,t))}function Nc(o,e,t){if(o.wall){let r=t.find(s=>s.id===o.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let i=$t(Le(r.b,r.a));return{room:{id:o.room_id,name:"",area_id:null,points:[r.a,r.b,kt(r.a,[-i[1],i[0]])]},edge:0}}let n=e.find(r=>r.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}var ht=Math.PI/180;function Wc(o){let e=o.rotation??0;if(!e||o.points&&o.points.length>=3)return null;let t=e*ht;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(t),s:Math.sin(t)}}function oo(o,e,t=!1){if(!o)return e;let n=e[0]-o.p[0],r=e[1]-o.p[1],i=t?-o.s:o.s;return[o.p[0]+n*o.c-r*i,o.p[1]+n*i+r*o.c]}function Vt(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),r=Math.max(o.z0,o.z1),i=Wc(o),a=o.axis==="x"?(l,u)=>[l,o.flip?r-u:n+u]:(l,u)=>[o.flip?t-u:e+u,l],s=i?(l,u)=>oo(i,a(l,u)):a;return o.axis==="x"?{u0:e,u1:t,w:r-n,at:s}:{u0:n,u1:r,w:t-e,at:s}}function _n(o){let e=Vt(o).w,t=o.eave_a,n=o.eave_b,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*ht),i=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*ht);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(o.shape==="mansard"){let l=Gc(e,t,n,r,i);return{vr:l.vr,rh:l.rh,y:l.y}}let a=r+i>1e-6?Math.min(e,Math.max(0,(n-t+e*i)/(r+i))):e/2,s=t+a*r;return{vr:a,rh:s,y:l=>l<=a?t+l*r:n+(e-l)*i}}function Di(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var Bc=.14;function Uc(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function Vi(o,e){return _n(o).rh-Bc>e+.01}function Kc(o,e,t,n){let r=null,i=Math.max(0,o.settings.roof.overhang??0);for(let a of Di(o)){if(a.open||n!==void 0&&!Vi(a,n))continue;let s=a.points&&a.points.length>=3?null:a.overhang_sides??null,l=_=>typeof(s==null?void 0:s[_])=="number"?Math.max(0,s[_]):null,[u,c]=nf(a,e,t),d=Vt({...a,rotation:0}),p=1e-6;if(u<d.u0-(l(2)??0)-p||u>d.u1+(l(3)??0)+p||c<-(l(0)??0)-p||c>d.w+(l(1)??0)+p||a.points&&a.points.length>=3&&!B([e,t],a.points))continue;let h=a.shape==="flat"||a.shape==="parapet",f=Math.max(0,a.overhang??i),g=((h?null:tf(ef(a,{a:l(0)??f,b:l(1)??f,u0:l(2)??f,u1:l(3)??f}),u,c))??_n(a).y(c))-Bc;r=r===null?g:Math.max(r,g)}return r}function Xh(o,e){let t=o.length;if(t<3||Math.abs(e)<1e-9)return o.map(i=>[i[0],i[1]]);let n=yl(o)>=0?1:-1,r=[];for(let i=0;i<t;i++){let a=o[(i+t-1)%t],s=o[i],l=o[(i+1)%t],u=qc([s[0]-a[0],s[1]-a[1]]),c=qc([l[0]-s[0],l[1]-s[1]]),d=[u[1]*n,-u[0]*n],p=[c[1]*n,-c[0]*n],h=d[0]+p[0],f=d[1]+p[1],m=Math.hypot(h,f);if(m<1e-6){r.push([s[0]+d[0]*e,s[1]+d[1]*e]);continue}let g=(h*d[0]+f*d[1])/m,_=Math.min(4,1/Math.max(.25,g));r.push([s[0]+h/m*e*_,s[1]+f/m*e*_])}return r}function qc(o){let e=Math.hypot(o[0],o[1])||1;return[o[0]/e,o[1]/e]}function Zh(o){let e=o.map(n=>n[0]),t=o.map(n=>n[1]);return{x0:Math.min(...e),z0:Math.min(...t),x1:Math.max(...e),z1:Math.max(...t)}}var no=Math.tan(30*ht);function Gc(o,e,t,n,r){let i=Math.min(o*.3,n>1e-6?2.4/n:o*.3),a=Math.min(o*.3,r>1e-6?2.4/r:o*.3),s=e+i*n,l=t+a*r,u=Math.min(o-a,Math.max(i,(l-s+no*(o-a+i))/(2*no))),c=s+(u-i)*no;return{vla:i,vlb:a,yla:s,ylb:l,vr:u,rh:c,y:p=>p<=i?e+p*n:p<=u?s+(p-i)*no:p<=o-a?l+(o-a-p)*no:t+(o-p)*r}}function ef(o,e){let t=Vt(o),n=_n(o),r=t.w,i=Math.max(0,e.a),a=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),u=(H,U)=>[H,U,n.y(U)],c=u(s,-i),d=u(l,-i),p=u(l,r+a),h=u(s,r+a),f=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*ht),m=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*ht);if(o.shape==="pent"){let H=[c,d,p,h],U=[[0,n.y(0)],[r,n.y(r)]];return{faces:[H],rim:H,ridges:[[p,h]],gable:U,gables:[U,U]}}if(o.shape==="pyramid"){let H=[(t.u0+t.u1)/2,n.vr,n.rh];return{faces:[[c,d,H],[d,p,H],[p,h,H],[h,c,H]],rim:[c,d,p,h],ridges:[[c,H],[h,H],[d,H],[p,H]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let H=Gc(r,o.eave_a,o.eave_b,f,m),U=[[0,n.y(0)],[H.vla,H.yla],[H.vr,H.rh],[r-H.vlb,H.ylb],[r,n.y(r)]],ne=[s,H.vla,H.yla],K=[l,H.vla,H.yla],Z=[s,r-H.vlb,H.ylb],W=[l,r-H.vlb,H.ylb],de=[s,H.vr,H.rh],fe=[l,H.vr,H.rh];return{faces:[[c,d,K,ne],[ne,K,fe,de],[de,fe,W,Z],[Z,W,p,h]],rim:[c,d,K,fe,W,p,h,Z,de,ne],ridges:[[de,fe],[ne,K],[Z,W]],gable:U,gables:[U,U]}}let[g,_]=Ni(o)??["gable","gable"],w=qi(o,[g,_]),v=g==="gable"?[s,n.vr,n.rh]:[t.u0+w.d0,n.vr,n.rh],k=_==="gable"?[l,n.vr,n.rh]:[t.u1-w.d1,n.vr,n.rh],S=[s,w.vah,w.yh],M=[s,w.vbh,w.yh],y=[l,w.vah,w.yh],C=[l,w.vbh,w.yh],q=g==="halfhip",A=_==="halfhip",P=[[c,d,...A?[y]:[],k,v,...q?[S]:[]],[v,k,...A?[C]:[],p,h,...q?[M]:[]]];g==="hip"&&P.push([h,c,v]),q&&P.push([M,S,v]),_==="hip"&&P.push([d,p,k]),A&&P.push([y,C,k]);let $=[c,d,..._==="gable"?[k]:A?[y,C]:[],p,h,...g==="gable"?[v]:q?[M,S]:[]],E=[[v,k]];g==="hip"&&E.push([c,v],[h,v]),q&&E.push([S,v],[M,v]),_==="hip"&&E.push([d,k],[p,k]),A&&E.push([y,k],[C,k]);let R=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],j=[[0,n.y(0)],[w.vah,w.yh],[w.vbh,w.yh],[r,n.y(r)]],N=H=>H==="gable"?R:H==="halfhip"?j:null,J=[N(g),N(_)];return{faces:P,rim:$,ridges:E,gable:J[0]??J[1],gables:J}}function Ni(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,t=n=>n==="gable"||n==="hip"||n==="halfhip"?n:e;return[t(o.end_u0),t(o.end_u1)]}function qi(o,e){let t=Vt(o),n=_n(o),r=t.w,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*ht),a=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*ht),s=t.u1-t.u0,l=e[0]!=="gable"&&e[1]!=="gable"?s/2:s,u=Math.min(n.y(0),n.y(r)),c=u+(n.rh-u)*.55,d=i>1e-6?Math.min(n.vr,(c-o.eave_a)/i):n.vr,p=a>1e-6?Math.max(n.vr,r-(c-o.eave_b)/a):n.vr,h=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),f=Math.min(l-.1,(n.rh-c)/Math.max(.2,i)),m=g=>g==="hip"?h:g==="halfhip"?f:0;return{d0:m(e[0]),d1:m(e[1]),yh:c,vah:d,vbh:p}}function tf(o,e,t){let n=null;for(let r of o.faces){if(!B([e,t],r.map(w=>[w[0],w[1]])))continue;let[i,a]=r,s=r.slice(2).find(w=>Math.abs((a[0]-i[0])*(w[1]-i[1])-(a[1]-i[1])*(w[0]-i[0]))>1e-9);if(!s)continue;let l=a[0]-i[0],u=a[2]-i[2],c=a[1]-i[1],d=s[0]-i[0],p=s[2]-i[2],h=s[1]-i[1],f=u*h-c*p,m=c*d-l*h,g=l*p-u*d;if(Math.abs(m)<1e-9)continue;let _=i[2]-(f*(e-i[0])+g*(t-i[1]))/m;n=n===null?_:Math.min(n,_)}return n}function Yc(o,e,t){let n=e*ht,r={p:t,c:Math.cos(n),s:Math.sin(n)};if(o.points&&o.points.length>=3)return{...o,points:o.points.map(c=>oo(r,c)),...Zh(o.points.map(c=>oo(r,c)))};let i=o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],a=oo(r,i),s=a[0]-i[0],l=a[1]-i[1],u=(((o.rotation??0)+e)%360+360)%360;return u>180&&(u-=360),{...o,x0:o.x0+s,x1:o.x1+s,z0:o.z0+l,z1:o.z1+l,pivot:a,rotation:Math.abs(u)<1e-9?0:u}}function nf(o,e,t){let[n,r]=oo(Wc(o),[e,t],!0),i=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),s=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[n,o.flip?l-r:r-s]:[r,o.flip?a-n:n-i]}function Qc(o,e,t){let n=Vt(e),r=o.floors.flatMap(m=>m.rooms.filter(g=>g.points.length>=3&&m.elevation+m.height>e.base+.05)),i=o.settings.wall_exterior,a=r.map(m=>Xh(m.points,Math.max(i,...(m.wall_thickness??[]).map(g=>g??0))+.01)),s=.35,l=(m,g)=>{if(r.some(w=>B(m(s),w.points)))return!0;let _=m(-Math.min(.3,g/2));return a.some(w=>!B(_,w)&&[.05,.2,s].some(v=>B(m(v),w)))},u=[.15,.5,.85],c=u.map(m=>n.u0+(n.u1-n.u0)*m),d=u.map(m=>n.w*m),p=m=>m==="a"?c.some(g=>l(_=>n.at(g,-_),n.w)):m==="b"?c.some(g=>l(_=>n.at(g,n.w+_),n.w)):m==="u0"?d.some(g=>l(_=>n.at(n.u0-_,g),n.u1-n.u0)):d.some(g=>l(_=>n.at(n.u1+_,g),n.u1-n.u0)),h=e.overhang_sides??null,f=(m,g)=>{let _=h==null?void 0:h[m];return typeof _=="number"?Math.max(0,_):p(g)?0:t};return{a:f(0,"a"),b:f(1,"b"),u0:f(2,"u0"),u1:f(3,"u1")}}function Jc(o,e=t=>`roof_${t+1}`){var l;let t=((l=o.settings.roof)==null?void 0:l.pitch)??35,n=o.settings.wall_exterior,r=o.floors.filter(u=>u.rooms.some(c=>c.points.length>=3)).sort((u,c)=>c.elevation-u.elevation),i=[],a=[],s=u=>Math.round(u*1e3)/1e3;for(let u of r){let c=u.rooms.filter(k=>k.points.length>=3),d=[...new Set(c.flatMap(k=>k.points.map(S=>s(S[0]))))].sort((k,S)=>k-S),p=[...new Set(c.flatMap(k=>k.points.map(S=>s(S[1]))))].sort((k,S)=>k-S),h=d.length-1,f=p.length-1,m=(k,S)=>k.some(M=>B(S,M.points)),g=[];for(let k=0;k<f;k++){g.push([]);for(let S=0;S<h;S++){let M=[(d[S]+d[S+1])/2,(p[k]+p[k+1])/2];g[k].push(m(c,M)&&!m(a,M))}}let _=g.map(k=>k.map(()=>!1)),w=(k,S)=>g[S][k]&&!_[S][k],v=u.elevation+u.height;for(let k=0;k<f;k++)for(let S=0;S<h;S++){if(!w(S,k))continue;let M=S;for(;M+1<h&&w(M+1,k);)M++;let y=k;for(;y+1<f&&Array.from({length:M-S+1},($,E)=>w(S+E,y+1)).every(Boolean);)y++;for(let $=k;$<=y;$++)for(let E=S;E<=M;E++)_[$][E]=!0;let C=d[S]-n,q=d[M+1]+n,A=p[k]-n,P=p[y+1]+n;Math.min(q-C,P-A)<.8||i.push({id:e(i.length),x0:s(C),z0:s(A),x1:s(q),z1:s(P),shape:"gable",axis:q-C>=P-A?"x":"z",eave_a:s(v),eave_b:s(v),pitch_a:t,pitch_b:t,base:s(v),overhang:null})}a.push(...c)}return i}var Go=Math.PI/180,of=1.13,rf=1.72,Yo=.025,Nt=.07,Xc=.25;function io(o,e){var n;let t=[];for(let r of o.floors){if(e&&r.id!==e)continue;let{walls:i}=bn(r.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},r.walls??[]);for(let a of i){if(!a.exterior&&!a.free)continue;let s=a.b[0]-a.a[0],l=a.b[1]-a.a[1],u=Math.hypot(s,l);if(u<.5)continue;let c=l/u,d=-s/u,p=Math.min(r.height,a.height??r.height),h=((n=a.sources.find(g=>g.room_id===a.roomLeft))==null?void 0:n.edge)??null,f={floorId:r.id,room:a.roomLeft,edge:h,free:!!a.free},m=(g,_,w,v)=>t.push({key:g,section:null,side:"top",flat:!1,o:_,eu:w,es:[0,1,0],n:v,lu:u,ls:p,pitch:90,span:()=>[0,u],facing:[v[0],v[2]],wall:f});m(`wall:${r.id}:${a.id}`,[a.a[0]+c*a.right,r.elevation,a.a[1]+d*a.right],[s/u,0,l/u],[c,0,d]),a.free&&m(`wall:${r.id}:${a.id}:back`,[a.b[0]-c*a.left,r.elevation,a.b[1]-d*a.left],[-s/u,0,-l/u],[-c,0,-d])}}return t}var Zc="ground";function af(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function sf(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],i=af(o),a=n[0]*e.u+r[0]*e.v,s=n[2]*e.u+r[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:ct(i,a,s)):e.base??0;return{key:Zc,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function Wt(o,e,t=Mt(o)){return e.face===Zc?sf(o,e):e.face.startsWith("wall:")?io(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function Wi(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function lf(o,e){var i;let t=(i=o.settings.roof)==null?void 0:i.frame;if(t&&t.length===4&&t.every(a=>Number.isFinite(a)))return t;let n=e.rooms.flatMap(a=>a.points.map(s=>s[0])),r=e.rooms.flatMap(a=>a.points.map(s=>s[1]));return[Math.min(...n),Math.min(...r),Math.max(...n),Math.max(...r)]}function Mt(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(k=>cf(k,Qc(o,k,k.overhang??e.overhang)));let t=Wi(o);if(!t)return[];let[n,r,i,a]=lf(o,t),s=o.settings.wall_exterior+e.overhang,l=n-s,u=i+s,c=r-s,d=a+s,p=t.elevation+t.height;if(e.type==="flat")return[ed("main",null,l,c,u,d,p+Xc)];let h=u-l>=d-c,f=e.ridge==="short"?!h:h,m=(f?d-c:u-l)/2,g=m*Math.tan(e.pitch*Go),_=(k,S,M)=>f?[k,p+M,(c+d)/2+S]:[(l+u)/2+S,p+M,k],[w,v]=f?[l,u]:[c,d];return[-1,1].map(k=>Ko(`main:${k<0?"a":"b"}`,null,k<0?"a":"b",_(w,k*m,0),_(v,k*m,0),_(w,0,g),e.pitch,()=>[0,v-w]))}function cf(o,e){let t=Vt(o),n=_n(o),r=(v,k,S)=>{let[M,y]=t.at(v,k);return[M,S,y]},i=Math.max(0,e.a),a=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),u=l-s;if(o.shape==="flat"||o.shape==="parapet"){let v=t.at(s,-i),k=t.at(l,t.w+a);return[ed(o.id,o.id,Math.min(v[0],k[0]),Math.min(v[1],k[1]),Math.max(v[0],k[0]),Math.max(v[1],k[1]),o.eave_a+Xc)]}if(o.shape==="pent")return[Ko(`${o.id}:a`,o.id,"a",r(s,-i,n.y(-i)),r(l,-i,n.y(-i)),r(s,t.w+a,n.y(t.w+a)),o.pitch_a,()=>[0,u])];let c=Ni(o),d=c?qi(o,c):null,p=o.shape==="pyramid"||(c==null?void 0:c[0])==="hip",h=o.shape==="pyramid"||(c==null?void 0:c[1])==="hip",f=o.shape==="pyramid"?(t.u1-t.u0)/2:p?d.d0:0,m=o.shape==="pyramid"?(t.u1-t.u0)/2:h?d.d1:0,g=p?t.u0+f-s:0,_=h?l-(t.u1-m):0,w=[];if(n.vr>.3){let v=Math.hypot(n.vr+i,n.rh-n.y(-i));w.push(Ko(`${o.id}:a`,o.id,"a",r(s,-i,n.y(-i)),r(l,-i,n.y(-i)),r(s,n.vr,n.rh),o.pitch_a,k=>[g*(k/v),u-_*(k/v)]))}if(t.w-n.vr>.3){let v=Math.hypot(t.w+a-n.vr,n.rh-n.y(t.w+a));w.push(Ko(`${o.id}:b`,o.id,"b",r(l,t.w+a,n.y(t.w+a)),r(s,t.w+a,n.y(t.w+a)),r(l,n.vr,n.rh),o.pitch_b,k=>[_*(k/v),u-g*(k/v)]))}if(p||h){let v=n.y(-i),k=n.y(t.w+a),S=[];p&&S.push([`${o.id}:c`,"c",r(s,t.w+a,k),r(s,-i,v),r(t.u0+f,n.vr,n.rh)]),h&&S.push([`${o.id}:d`,"d",r(l,-i,v),r(l,t.w+a,k),r(t.u1-m,n.vr,n.rh)]);for(let[M,y,C,q,A]of S){let P=df(M,o.id,y,C,q,A);P&&w.push(P)}}return w}function df(o,e,t,n,r,i){let a=ro(qt(r,n));if(a<.3)return null;let s=St(qt(r,n)),l=qt(i,n),u=l[0]*s[0]+l[1]*s[1]+l[2]*s[2],c=[l[0]-s[0]*u,l[1]-s[1]*u,l[2]-s[2]*u],d=ro(c);if(d<.3)return null;let p=St(c),h=St(od(s,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=St([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/Go;return{key:o,section:e,side:t,flat:!1,o:n,eu:s,es:p,n:h,lu:a,ls:d,pitch:m,span:_=>{let w=Math.min(1,Math.max(0,_/d));return[u*w,a-(a-u)*w]},facing:[f[0],f[2]]}}function Ko(o,e,t,n,r,i,a,s){let l=St(qt(r,n)),u=St(qt(i,n)),c=St(od(l,u));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let d=St([-u[0],0,-u[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:u,n:c,lu:ro(qt(r,n)),ls:ro(qt(i,n)),pitch:a,span:s,facing:[d[0],d[2]]}}function ed(o,e,t,n,r,i,a){let s=r-t>=i-n,l=s?r-t:i-n,u=s?i-n:r-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,a,n],eu:s?[1,0,0]:[0,0,1],es:s?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:u,pitch:0,span:()=>[0,l],facing:s?[0,1]:[1,0]}}function Bi(o){let e=o.module_w||of,t=o.module_h||rf;return o.portrait===!1?[t,e]:[e,t]}function td(o){var e;return(e=o.layout)!=null&&e.length?o.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function Ui(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*Go:o.wall?Math.min(90,Math.max(0,e.tilt??0))*Go:0}function Bt(o,e){let[t,n]=Bi(e),r=td(e),i=Math.max(1,...r),s=(r.length-1)*nd(o,e)+n*Math.cos(Ui(o,e));return[i*t+(i-1)*Yo,s]}function nd(o,e){let[,t]=Bi(e),n=Ui(o,e);return o.wall?t*Math.cos(n)+Yo:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Yo}function uf(o,e,t=!1){let[n,r]=Bi(e),i=[],a=Ui(o,e),s=r*Math.cos(a),l=nd(o,e),u=td(e),c=Math.max(1,...u),d=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(m,g,_)=>[o.o[0]+o.eu[0]*m+o.es[0]*g+o.n[0]*_,o.o[1]+o.eu[1]*m+o.es[1]*g+o.n[1]*_,o.o[2]+o.eu[2]*m+o.es[2]*g+o.n[2]*_],f=(m,g)=>{if(o.unbounded)return!0;if(g<-1e-6||g>o.ls+1e-6)return!1;let[_,w]=o.span(g);return m>=_-1e-6&&m<=w+1e-6};return u.forEach((m,g)=>{let _=e.align==="right"?c-m:e.align==="center"?(c-m)/2:0;for(let w=0;w<m;w++){let v=`${g}:${w}`,k=d.has(v);if(k&&!t)continue;let S=e.u+(w+_)*(n+Yo),M=e.v+g*l,y=S+n,C=M+(o.flat||o.wall?s:r);if(p){if(!(f((S+y)/2,M)&&f((S+y)/2,C)))continue}else if(![[S,M],[y,M],[y,C],[S,C]].every(([R,j])=>f(R,j)))continue;if(o.wall&&a>.001){let R=Nt+r*Math.sin(a),[j,N]=e.flip?[R,Nt]:[Nt,R],J=[h(S,M,j),h(y,M,j),h(y,C,N),h(S,C,N)],H=e.flip?M:C,U=[S+.05,y-.05].map(ne=>[h(ne,H,0),h(ne,H,R)]);i.push({corners:J,posts:U,cell:v,skipped:k});continue}if(!o.flat){i.push({corners:[h(S,M,Nt),h(y,M,Nt),h(y,C,Nt),h(S,C,Nt)],posts:[],cell:v,skipped:k});continue}let q=.15,A=q+r*Math.sin(a),[P,$]=e.flip?[C,M]:[M,C],E=[h(S,P,q),h(y,P,q),h(y,$,A),h(S,$,A)];i.push({corners:E,posts:[S+.05,y-.05].flatMap(R=>[[h(R,P,0),h(R,P,q)],[h(R,$,0),h(R,$,A)]]),cell:v,skipped:k})}}),i}function qt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function ro(o){return Math.hypot(o[0],o[1],o[2])}function St(o){let e=ro(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function od(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var pf=.78,hf=1.18;function ff(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||pf,module_h:o.h||hf}}function mf(o,e){let t=uf(o,ff(e))[0];if(!t)return null;let n=r=>[r[0]-o.n[0]*.05,r[1]-o.n[1]*.05,r[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function Ki(o,e,t){let n=e?mf(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,i=(n[0][1]+n[2][1])/2,a=(n[0][2]+n[2][2])/2;for(let s of[...o.floors].sort((l,u)=>u.elevation-l.elevation)){if(s.elevation>i)continue;let l=s.rooms.find(u=>B([r,a],u.points));if(l)return{floor:s,roomId:l.id,corners:n}}return null}function Qo(o,e){var r;let t=((r=o.settings.roof)==null?void 0:r.windows)??[];if(!t.length)return[];let n=new Map(Mt(o).map(i=>[i.key,i]));return t.filter(i=>{var a;return((a=Ki(o,n.get(i.face),i))==null?void 0:a.roomId)===e})}function rd(o,e){let[t,n]=Bt(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var gf=new Set(["window","door","opening","garage_door"]),vn=null;function bf(o,e,t,n){(!vn||vn.entities!==o.entities||vn.building!==e)&&(vn={entities:o.entities,building:e,rooms:new Map});let r=vn.rooms.get(n.id);return r||(r=hn(o,t,n,Qo(e,n.id)).shown,vn.rooms.set(n.id,r)),r}function Jo(o,e,t){var i,a;let n=t?e.floors.filter(s=>s.id===t):[...e.floors].sort((s,l)=>s.elevation-l.elevation),r=[];for(let s of n)for(let[l,u]of ce(s).entries()){if(!((i=u.name)!=null&&i.trim())||u.outdoor&&ce(s).findIndex(w=>w.outdoor&&w.area_id===u.area_id&&w.name===u.name)<l)continue;let c=bf(o,e,s,u),d=c.filter(w=>L(w)==="light"&&o.states[w]),p=d.filter(w=>o.states[w].state==="on"),h=c.filter(w=>{let v=o.states[w];return L(w)==="binary"&&(v==null?void 0:v.state)==="on"&&gf.has(String(v.attributes.device_class??""))}).length,f=c.some(w=>{var v;return L(w)==="media"&&((v=o.states[w])==null?void 0:v.state)==="playing"}),m=Ke(o,s,u,"temperature"),g=m===null?null:yt(o,m);if(g===null&&((a=u.climate)==null?void 0:a.temperature)!=="none"){let w=c.filter(v=>L(v)==="climate").map(v=>{var k;return(k=o.states[v])==null?void 0:k.attributes.current_temperature}).find(v=>typeof v=="number");typeof w=="number"&&(g=w)}let _=Ke(o,s,u,"humidity");r.push({floorId:s.id,roomId:u.id,name:u.name,temp:g,humidity:_,lights:d,lightsOn:p,open:h,playing:f,active:p.length>0||h>0||f})}return r}function id(o){return o.lightsOn.length?["turn_off",o.lightsOn]:["turn_on",o.lights]}function ad(o,e){return(e.settings.favorites??[]).filter(t=>o.states[t]).map(t=>{let[n,r]=fn(t);return{id:t,domain:n,service:r,on:n==="homeassistant"&&o.states[t].state==="on"}})}function Xo(o,e){let t=Jo(o,e,null),n=t.map(i=>i.temp).filter(i=>i!==null),r=Bo(o,e,eo(o,e),new Map).filter(i=>i.roomId!==null);return{rooms:t.length,lightsOn:t.reduce((i,a)=>i+a.lightsOn.length,0),open:t.reduce((i,a)=>i+a.open,0),playing:t.filter(i=>i.playing).length,temp:n.length?Math.round(n.reduce((i,a)=>i+a,0)/n.length*10)/10:null,alerts:r}}var Ce=Me`
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
`,je=Me`
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
`;var Zo=o=>(o==null?void 0:o.icon)||"\u{1F3E0}";function yn(o,e,t){let n=e.find(r=>r.id===t);return(n==null?void 0:n.name)||(t===pe?T(o,"plan_main"):"?")}var Gi=class extends ve{static properties={hass:{attribute:!1},plans:{attribute:!1},current:{attribute:!1},admin:{type:Boolean},alerts:{attribute:!1},site:{type:Boolean},hasSite:{type:Boolean},_open:{state:!0}};constructor(){super(),this.plans=[],this.current=pe,this.admin=!1,this.alerts=null,this.site=!1,this.hasSite=!1,this._open=!1}t(e,t){return T(this.hass,e,t)}fire(e,t={}){this._open=!1,this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}close=e=>{e.composedPath().includes(this)||(this._open=!1)};connectedCallback(){super.connectedCallback(),document.addEventListener("pointerdown",this.close)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointerdown",this.close)}render(){let e=this.plans.find(n=>n.id===this.current),t=[...this.alerts??new Map].filter(([n,r])=>n!==this.current&&r>0).reduce((n,[,r])=>n+r,0);return b`<button
        class="fp3d-pp-btn"
        aria-haspopup="listbox"
        aria-expanded=${this._open}
        title=${this.t("plan_pick")}
        @click=${()=>this._open=!this._open}
      >
        <span class="fp3d-pp-icon">${this.site?"\u{1F3D8}":Zo(e)}</span>
        <span class="fp3d-pp-name">${this.site?this.t("plan_site"):yn(this.hass,this.plans,this.current)}</span>
        ${t?b`<span class="fp3d-pp-alert" title=${this.t("plan_alerts_elsewhere",{n:t})}>${t}</span>`:x}
        <span class="fp3d-pp-caret">▾</span>
      </button>
      ${this._open?b`<div class="fp3d-pp-menu" role="listbox">
            ${this.plans.map(n=>{var r;return b`<button role="option" aria-selected=${!this.site&&n.id===this.current} @click=${()=>this.fire("plan-pick",{plan:n.id})}>
                <span class="fp3d-pp-icon">${Zo(n)}</span>
                <span class="fp3d-pp-name">${yn(this.hass,this.plans,n.id)}</span>
                ${(r=this.alerts)!=null&&r.get(n.id)?b`<span class="fp3d-pp-alert">${this.alerts.get(n.id)}</span>`:x}
                <span class="fp3d-pp-size">${this.t(n.rooms===1?"floor_rooms_one":"floor_rooms",{n:n.rooms})}</span>
              </button>`})}
            ${this.hasSite?b`<button role="option" aria-selected=${this.site} @click=${()=>this.fire("plan-site")}>
                  <span class="fp3d-pp-icon">🏘</span><span class="fp3d-pp-name">${this.t("plan_site")}</span>
                </button>`:x}
            ${this.plans.length>1?b`<button class="fp3d-pp-extra" @click=${()=>this.fire("plan-overview")}>▦ ${this.t("plan_all")}</button>`:x}
            ${this.admin?b`<hr />
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-new")}>＋ ${this.t("plan_new")}</button>
                  <button class="fp3d-pp-extra" @click=${()=>this.fire("plan-manage")}>⚙ ${this.t("plan_manage")}</button>`:x}
          </div>`:x}`}static styles=[Ce,je,Me`
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
    `]};customElements.get("fp3d-plan-picker")||customElements.define("fp3d-plan-picker",Gi);var Yi=class extends ve{static properties={hass:{attribute:!1},plans:{attribute:!1},buildings:{attribute:!1},current:{attribute:!1}};t(e,t){return T(this.hass,e,t)}fire(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}render(){var t,n,r;let e=String(((r=(n=(t=this.hass)==null?void 0:t.config)==null?void 0:n.unit_system)==null?void 0:r.temperature)??"\xB0C");return b`<div class="fp3d-po-veil" @click=${i=>i.target===i.currentTarget&&this.fire("close")}>
      <section class="fp3d-po" role="dialog" aria-label=${this.t("plan_all")}>
        <header>
          <h2>${this.t("plan_all")}</h2>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>✕</button>
        </header>
        <div class="fp3d-po-grid">
          ${this.plans.map(i=>{let a=this.buildings.get(i.id),s=a&&this.hass?Xo(this.hass,a):null;return b`<button class="fp3d-po-tile ${s!=null&&s.alerts.length?"fp3d-po-alert":""} ${i.id===this.current?"fp3d-po-current":""}" @click=${()=>this.fire("plan-pick",{plan:i.id})}>
              <span class="fp3d-po-head"><span class="fp3d-po-icon">${Zo(i)}</span><strong>${yn(this.hass,this.plans,i.id)}</strong></span>
              ${s?b`<span class="fp3d-po-facts">
                      <span>${this.t(s.rooms===1?"floor_rooms_one":"floor_rooms",{n:s.rooms})}</span>
                      <span title=${this.t("plan_lights_on")}>💡 ${s.lightsOn}</span>
                      ${s.open?b`<span title=${this.t("plan_open_now")}>${this.t("plan_open_n",{n:s.open})}</span>`:x}
                      ${s.playing?b`<span>♪ ${s.playing}</span>`:x}
                      ${s.temp!==null?b`<span>🌡 ${oe(this.hass,s.temp,1)} ${e}</span>`:x}
                    </span>
                    ${s.alerts.slice(0,3).map(l=>b`<span class="fp3d-po-warn">⚠ ${Dt(this.hass,a,l)}</span>`)}`:b`<span class="fp3d-po-facts">…</span>`}
            </button>`})}
        </div>
      </section>
    </div>`}static styles=[Ce,je,Me`
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
    `]};customElements.get("fp3d-plan-overview")||customElements.define("fp3d-plan-overview",Yi);var Qi=":",_f=.05;function ld(o,e){let t=o.indexOf(Qi);return t>0?{plan:o.slice(0,t),id:o.slice(t+1)}:{plan:e,id:o}}function vf(o,e){let t=e.rot*Math.PI/180,n=Math.cos(t),r=Math.sin(t),i=a=>Math.round(a*1e3)/1e3;return[i(o[0]*n-o[1]*r+e.x),i(o[0]*r+o[1]*n+e.y)]}function yf(o,e,t){let n=a=>`${e}${Qi}${a}`,r=a=>vf(a,t),i=a=>(((a??0)+t.rot)%360+360)%360;return{...o,id:n(o.id),rooms:o.rooms.map(a=>({...a,id:n(a.id),points:a.points.map(r),start_view:null})),openings:o.openings.map(a=>({...a,id:n(a.id),room_id:n(a.room_id),wall:a.wall?n(a.wall):a.wall})),furniture:o.furniture.map(a=>{let[s,l]=r([a.x,a.z]);return{...a,id:n(a.id),x:s,z:l,rotation:i(a.rotation)}}),placements:o.placements.map(a=>{let[s,l]=r([a.x,a.z]);return{...a,x:s,z:l,rotation:i(a.rotation)}}),outdoor:(o.outdoor??[]).map(a=>({...a,id:n(a.id),points:a.points.map(r)})),walls:(o.walls??[]).map(a=>({...a,id:n(a.id),a:r(a.a),b:r(a.b)})),background:null,start_view:null}}function sd(o,e=""){let t=o.settings.roof;if(!t||t.type==="none")return[];if(t.type===void 0||t.type==="custom")return t.sections??[];let n=Jc(o,r=>`${e}roof_${r+1}`);return t.type==="flat"?n.map(r=>({...r,shape:"flat"})):n}function wf(o,e,t){let n=t.rot?Yc(o,t.rot,[0,0]):o,r=i=>[i[0]+t.x,i[1]+t.y];return{...n,id:`${e}${Qi}${o.id}`,x0:n.x0+t.x,x1:n.x1+t.x,z0:n.z0+t.y,z1:n.z1+t.y,pivot:n.pivot?r(n.pivot):n.pivot,points:n.points?n.points.map(r):n.points}}function cd(o,e){var u;let t=o.floors.map(c=>({...c,rooms:[...c.rooms],openings:[...c.openings],furniture:[...c.furniture],placements:[...c.placements],outdoor:[...c.outdoor??[]],walls:[...c.walls??[]]}));for(let c of e)if((u=c.site)!=null&&u.on)for(let d of c.building.floors){let p=yf(d,c.id,c.site),h=t.find(f=>Math.abs(f.elevation-d.elevation)<_f);if(!h){t.push(p);continue}h.rooms.push(...p.rooms),h.openings.push(...p.openings),h.furniture.push(...p.furniture),h.placements.push(...p.placements),h.outdoor.push(...p.outdoor),h.walls=[...h.walls??[],...p.walls??[]]}t.sort((c,d)=>c.elevation-d.elevation);let n=c=>c.floors.some(d=>d.rooms.some(p=>p.points.length>=3)),r=n(o)?sd(o):[],i=o.settings.roof.type!=="custom"&&o.settings.roof.type!==void 0,a=(o.settings.roof.solar??[]).map(c=>i&&r[0]&&c.face.startsWith("main:")?{...c,face:`${r[0].id}:${c.face.slice(5)}`}:c),s=[...r,...e.filter(c=>{var d;return((d=c.site)==null?void 0:d.on)&&n(c.building)}).flatMap(c=>sd(c.building).map(d=>wf(d,c.id,c.site)))],l={...o.settings.roof,type:"custom",sections:s,solar:a};return{...o,floors:t,card_templates:[],settings:{...o.settings,start_view:null,roof:l}}}var wn=class{others=new Map;watched="";unsubscribe=null;siteOf=null;host;constructor(e){this.host=e}watch(e,t){let n=t.plans.map(a=>a.id).filter(a=>a!==t.planId),r=`${t.planId}|${n.join(",")}`;if(!e||r===this.watched)return;this.watched=r;let i=a=>$o(e,a).then(s=>{!t.plans.some(l=>l.id===a)||a===t.planId||(this.others=new Map(this.others).set(a,Gn(s.building)),this.host.requestUpdate())},()=>{});this.others=new Map([...this.others].filter(([a])=>n.includes(a)));for(let a of n)i(a);n.length&&!this.unsubscribe&&Rs(e,a=>{a!==t.planId&&t.plans.some(s=>s.id===a)&&i(a)}).then(a=>this.unsubscribe=a,()=>{})}stop(){var e;(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null,this.watched=""}all(e){let t=new Map(this.others);return e.building&&t.set(e.planId,e.building),t}site(e){let t=this.all(e),n=t.get(pe);if(!n)return null;let r=e.plans.filter(s=>{var l;return s.id!==pe&&((l=s.site)==null?void 0:l.on)}).map(s=>({id:s.id,site:s.site,building:t.get(s.id)}));if(r.some(s=>!s.building))return null;let i=[n,...r.flatMap(s=>{var l,u,c;return[s.building,(l=s.site)==null?void 0:l.x,(u=s.site)==null?void 0:u.y,(c=s.site)==null?void 0:c.rot]})];if(this.siteOf&&this.siteOf.key.length===i.length&&this.siteOf.key.every((s,l)=>s===i[l]))return this.siteOf.to;let a=cd(n,r.map(s=>({id:s.id,site:s.site,building:s.building})));return this.siteOf={key:i,to:a},a}};var dd={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function xn(o){return dd[o]}function Ut(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function kn(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${dd[o]}"/></svg>`}var ud="neonplan3d.roombar_min",xf="M5 4h14v16H5zM12 4v16M5 12h14",pd="M8 5.5v13l10.5-6.5z",er=o=>b`<svg class="fp3d-rb-ico" viewBox="0 0 24 24" aria-hidden="true">${lt`<path d=${o} />`}</svg>`,Ji=class extends ve{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},favorites:{type:Boolean},readOnly:{type:Boolean},_min:{state:!0},_fired:{state:!0}};constructor(){super(),this.building=null,this.floorId=null,this.roomId=null,this.favorites=!1,this.readOnly=!1,this._fired=null;try{this._min=localStorage.getItem(ud)==="1"}catch{this._min=!1}}t(e,t){return T(this.hass,e,t)}setMin(e){this._min=e;try{localStorage.setItem(ud,e?"1":"0")}catch{}}toggleLights(e,t){if(e.stopPropagation(),this.readOnly)return;let[n,r]=id(t);r.length&&this.hass.callService("light",n,{entity_id:r})}pick(e,t){this.dispatchEvent(new CustomEvent("room-pick",{detail:{floorId:e,roomId:t},bubbles:!0,composed:!0}))}render(){let e=this.building;if(!e||!this.hass)return x;if(this._min)return b`<button class="fp3d-chip fp3d-rb-open" aria-expanded="false" title=${this.t("room_bar")} @click=${()=>this.setMin(!1)}>▴ ${this.t("room_bar_rooms")}</button>`;let t=this.hass,n=Jo(t,e,this.floorId),r=this.favorites?ad(t,e):[],i=!this.floorId&&e.floors.length>1,a=s=>{var l;return((l=e.floors.find(u=>u.id===s))==null?void 0:l.name)??""};return b`<div class="fp3d-rb" role="toolbar" aria-label=${this.t("room_bar")}>
      <button class="fp3d-rb-min" aria-expanded="true" title=${this.t("room_bar_hide")} aria-label=${this.t("room_bar_hide")} @click=${()=>this.setMin(!0)}>▾</button>
      ${r.map(s=>{let l=t.states[s.id],u=s.domain!=="homeassistant",c=this.readOnly||X(l),d=()=>{c||(t.callService(s.domain,s.service,{entity_id:s.id}),this._fired=s.id,setTimeout(()=>this._fired=null,700))};return b`<div class="fp3d-rb-card fp3d-rb-fav ${s.on||this._fired===s.id?"fp3d-rb-on":""} ${c?"fp3d-rb-off":""}">
          <div class="fp3d-rb-top"><b class="fp3d-rb-name">${Y(t,s.id)}</b></div>
          <div class="fp3d-rb-row"></div>
          ${u?b`<button class="fp3d-rb-act" ?disabled=${c} @click=${d}>${er(pd)} ${this.t("room_bar_activate")}</button>`:b`<button class="fp3d-rb-switch" role="switch" aria-checked=${s.on} ?disabled=${c} @click=${d}>
                <span>${s.on?this.t("room_bar_on"):this.t("room_bar_off")}</span><i aria-hidden="true"></i>
              </button>`}
        </div>`})}
      ${r.length&&n.length?b`<span class="fp3d-rb-sep" aria-hidden="true"></span>`:x}
      ${n.map(s=>{let l=s.temp===null&&!s.lights.length&&!s.open&&!s.playing,u=s.lightsOn.length>0;return b`<div
          class="fp3d-rb-card ${l?"fp3d-rb-quiet":""} ${s.active?"fp3d-rb-active":""} ${s.roomId===this.roomId?"fp3d-rb-sel":""}"
          role="button"
          tabindex="0"
          title=${i?`${s.name} \xB7 ${a(s.floorId)}`:s.name}
          aria-pressed=${s.roomId===this.roomId}
          @click=${()=>this.pick(s.floorId,s.roomId)}
          @keydown=${c=>c.target===c.currentTarget&&(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),this.pick(s.floorId,s.roomId))}
        >
          <div class="fp3d-rb-top">
            <b class="fp3d-rb-name">${s.name}</b>
            ${s.temp===null?x:b`<span class="fp3d-rb-temp">${oe(t,s.temp,1)}°</span>`}
          </div>
          <div class="fp3d-rb-row">
            ${i?b`<span class="fp3d-rb-floor">${a(s.floorId)}</span>`:x}
            ${s.humidity===null?x:b`<span>${oe(t,s.humidity,0)} %</span>`}
            ${s.open?b`<span class="fp3d-rb-state fp3d-rb-win" title=${this.t("room_bar_open")}>${er(xf)}${s.open>1?s.open:""}</span>`:x}
            ${s.playing?b`<span class="fp3d-rb-state fp3d-rb-play" title=${this.t("room_bar_playing")}>${er(pd)}</span>`:x}
          </div>
          ${s.lights.length?b`<button
                class="fp3d-rb-switch"
                role="switch"
                aria-checked=${u}
                aria-label=${`${this.t("room_bar_light")} ${s.name}`}
                ?disabled=${this.readOnly}
                @click=${c=>this.toggleLights(c,s)}
                @keydown=${c=>c.stopPropagation()}
              >
                <span>${er(xn("light"))} ${u?`${this.t("room_bar_light")} \xB7 ${this.t("room_bar_lights",{n:s.lightsOn.length})}`:this.t("room_bar_light")}</span><i aria-hidden="true"></i>
              </button>`:b`<div class="fp3d-rb-switch-gap"></div>`}
        </div>`})}
    </div>`}static styles=[Ce,je,Me`
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
    `]};customElements.get("fp3d-room-bar")||customElements.define("fp3d-room-bar",Ji);function Zi(o){return(o==null?void 0:o.settings.person_look)??"figure"}function tr(o){return Zi(o)!=="off"}var hd=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function Xi(o){let e=0;for(let t of o)e=e*31+t.charCodeAt(0)>>>0;return hd[e%hd.length]}var fd=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function kf(o,e,t){var r,i;let n=fd(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let a of e.floors)for(let s of a.rooms)if([s.name,s.area_id??"",s.area_id?((i=(r=o.areas)==null?void 0:r[s.area_id])==null?void 0:i.name)??"":""].filter(Boolean).map(fd).includes(n))return{floorId:a.id,room:s};return null}function md(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function $f(o){return!["home","on","unknown","unavailable",""].includes(o)}function gd(o,e){let t=[],n=new Map;for(let r of e.presence){let i=o.states[r.person];if(!i||!r.sensor||i.state!=="home"&&i.state!=="on")continue;let a=o.states[r.sensor];if(!a)continue;let s=kf(o,e,a.state);if(!s)continue;let l=n.get(s.room.id)??0;n.set(s.room.id,l+1);let[u,c]=He(s.room.points),d=-Math.PI/2+.9+l*1.15,p=.75,h=i.attributes.friendly_name??r.person;t.push({id:r.person,name:h,initials:md(h),picture:i.attributes.entity_picture??null,floorId:s.floorId,roomId:s.room.id,x:u+Math.cos(d)*p,z:c+Math.sin(d)*p})}return t}function nr(o,e,t=new Set,n=Date.now()){let r=[];for(let[d,p]of Object.entries(o.states)){let h=p.attributes;if(!d.startsWith("sensor.")||h.neonplan_locate!==!0||typeof h.room_id!="string")continue;let f=null;for(let _ of e.floors){let w=ce(_).find(v=>v.id===h.room_id);w&&(f={floorId:_.id,room:w})}if(!f)continue;let m=typeof h.last_seen=="string"?Date.parse(h.last_seen):NaN,g=typeof h.since=="string"?Date.parse(h.since):NaN;r.push({entityId:d,name:typeof h.device_name=="string"?h.device_name:d,person:typeof h.person=="string"?h.person:null,floorId:f.floorId,room:f.room,seen:Number.isFinite(m)?m:0,since:Number.isFinite(g)?g:0,probability:typeof h.probability=="number"?h.probability:0,worn:h.wearable===!0})}let i=[],a=new Map,s=new Map,l=(d,p)=>{let h=a.get(d.room.id)??0;if(a.set(d.room.id,h+1),!p.thing){let _=s.get(d.room.id);_||s.set(d.room.id,_=Ef(o,e,d.floorId,d.room));let w=_.shift();if(w){i.push({...p,floorId:d.floorId,roomId:d.room.id,x:w[0],z:w[1]});return}}let[f,m]=He(d.room.points),g=-Math.PI/2+.9+h*1.15;i.push({...p,floorId:d.floorId,roomId:d.room.id,x:f+Math.cos(g)*.75,z:m+Math.sin(g)*.75})},u=(d,p)=>l(d,{id:d.entityId,name:d.name,initials:d.name.slice(0,1).toUpperCase(),picture:null,color:p,entity:d.entityId,tag:d.name,thing:!0}),c=new Map;for(let d of r)d.person?c.set(d.person,[...c.get(d.person)??[],d]):u(d,Xi(d.entityId));for(let[d,p]of c){if(t.has(d))continue;let h=o.states[d];if(h&&$f(h.state))continue;let f=k=>k.reduce((S,M)=>M.seen>S.seen?M:S),m=p.filter(k=>k.worn&&n-k.seen<12e4),g=f(m.length?m:p),_=k=>n-k.seen<3e4&&n-g.seen<3e4&&k.since>=g.since-12e4,w=null;if(g.worn){let k=p.filter(M=>!M.worn&&M.room.id!==g.room.id&&_(M)),S=k.length?k.reduce((M,y)=>y.probability>M.probability?y:M):null;S&&n-g.since>=6e5&&S.since>g.since+12e4?(w=g,g=S):S&&S.probability>g.probability+.15&&(g=S)}let v=(h==null?void 0:h.attributes.friendly_name)??g.name;l(g,{id:d,name:v,initials:md(v),picture:(h==null?void 0:h.attributes.entity_picture)??null,color:Xi(d),entity:g.entityId,tag:v.split(/\s+/)[0]});for(let k of p)k===g||k.room.id===g.room.id||k!==w&&(k.worn&&n-k.seen<12e4||_(k))||u(k,Xi(d))}return i}var Sf=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],Mf=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function Pf(o,e){let t=[],[n,r]=He(e.points),i=(a,s)=>a.points.some((l,u)=>{let c=a.points[(u+1)%a.points.length],[d,p]=[c[0]-l[0],c[1]-l[1]],h=d*d+p*p||1,f=Math.max(0,Math.min(1,((s[0]-l[0])*d+(s[1]-l[1])*p)/h));return Math.hypot(l[0]+f*d-s[0],l[1]+f*p-s[1])<.3});for(let a of o.openings){if(a.wall||a.type==="window"&&a.sill>.3||a.type==="garage")continue;let s=o.rooms.find(f=>f.id===a.room_id);if(!s)continue;let l=s.points[a.edge],u=s.points[(a.edge+1)%s.points.length];if(!l||!u)continue;let c=Math.hypot(u[0]-l[0],u[1]-l[1])||1,d=[l[0]+(u[0]-l[0])*a.offset/c,l[1]+(u[1]-l[1])*a.offset/c];if(!i(e,d))continue;let p=o.rooms.find(f=>f.id!==e.id&&i(f,d)),h=.6/(Math.hypot(n-d[0],r-d[1])||1);t.push({to:p?$n(p.name):null,spot:[d[0]+(n-d[0])*h,d[1]+(r-d[1])*h]})}return t}var If=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],$n=o=>o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function Ef(o,e,t,n){var u,c;let r=e.floors.find(d=>d.id===t);if(!r||!n.area_id)return[];let i=r.furniture.filter(d=>B([d.x,d.z],n.points)),a=Pf(r,n),s=[],l=new Set([...$n(n.name),...$n(((c=(u=o.areas)==null?void 0:u[n.area_id])==null?void 0:c.name)??""),...$n(n.area_id),...If]);for(let[d,p]of Object.entries(o.states)){if(!d.startsWith("binary_sensor.")||p.state!=="on")continue;let h=p.attributes.device_class;if(h!=="occupancy"&&h!=="presence"||Oe(o,d)!==n.area_id)continue;let m=new Set($n(String(p.attributes.friendly_name??d.slice(14))).filter(v=>!l.has(v))),g=i.find(v=>v.name&&$n(v.name).some(k=>m.has(k))||Sf.some(([k,S])=>k.test(v.type.split(":").pop()??"")&&S.some(M=>m.has(M)))),_=g?null:a.find(v=>v.to?v.to.some(k=>m.has(k)):[...m].some(k=>Mf.some(S=>k.includes(S)))),w=g?[g.x,g.z]:_?_.spot:null;w&&!s.some(([v,k])=>v===w[0]&&k===w[1])&&s.push(w)}return s}function bd(o,e,t,n){let r=new Map,i=a=>{var s;return!!a&&((s=o.states[a])==null?void 0:s.state)==="on"};for(let a of e.floors){let s=new Set;for(let u of a.rooms)for(let c of Ho(o,xe(o,u.area_id)))L(c)==="light"&&s.add(c);for(let u of a.placements)L(u.entity_id)==="light"&&s.add(u.entity_id);let l=a.openings.filter(u=>{let c=t.get(u.id);if(!c)return!1;if(u.type==="garage")return(dt(o,c,"garage").cover??1)<.95;if(u.type==="door")return i(c.contact)||i(c.contact2??null);let d=dt(o,c,"window");return d.open>.5||d.tilt>.5||d.open2>.5||d.tilt2>.5}).length;r.set(a.id,{rooms:a.rooms.length,lightsOn:[...s].filter(u=>{var c;return((c=o.states[u])==null?void 0:c.state)==="on"}).length,open:l,persons:n.filter(u=>u.floorId===a.id).length})}return r}function _d(o,e){let t=[e.rooms===1?T(o,"floor_rooms_one"):T(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(T(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(T(o,"floor_open",{n:e.open})),e.persons&&t.push(T(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var Pt=(o,e)=>T(o,e),vd=new Set;function yd(o){vd=o}var Af={open:"closed",closed:"open",opening:"closing",closing:"opening"};function Ee(o,e){var n,r;if(!e||X(e))return Pt(o,"state_unavailable");let t=e.attributes;switch(L(e.entity_id)){case"light":return e.state!=="on"?Pt(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:Pt(o,"state_on");case"switch":case"fan":return Pt(o,e.state==="on"?"state_on":"state_off");case"cover":{let i=vd.has(e.entity_id);return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${i?100-t.current_position:t.current_position} %`:or(o,i?Af[e.state]??e.state:e.state)}case"climate":{let i=typeof t.current_temperature=="number"?`${oe(o,t.current_temperature,1)} ${o?We(o):"\xB0C"}`:null;return e.state==="off"?i?`${i} \xB7 ${Pt(o,"state_off")}`:Pt(o,"state_off"):i??or(o,e.state)}case"media":{let i=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",a=[t.app_name,t.media_title,t.source].find(s=>typeof s=="string"&&s);return i&&a?a:or(o,e.state)}case"lock":case"camera":return or(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?Pt(o,e.state==="on"?"state_open":"state_closed"):Pt(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let i=Number(e.state),a=t.unit_of_measurement??"",s=((r=(n=o==null?void 0:o.entities)==null?void 0:n[e.entity_id])==null?void 0:r.display_precision)??1;return Number.isFinite(i)?`${oe(o,i,s)}${a?` ${a}`:""}`:e.state}default:return""}}function or(o,e){let t=`state_${e}`,n=T(o,t);return n===t?e:n}function wd(o,e){var r,i;let t=[],n=new Set(e.floors.flatMap(a=>a.furniture.map(s=>s.look_of).filter(s=>!!s)));for(let a of e.floors)for(let s of a.placements){let l=L(s.entity_id),u=o.states[s.entity_id];if(!l||!u)continue;let c=a.rooms.find(p=>p.points.length>=3&&B([s.x,s.z],p.points))??null,d=c!=null&&c.area_id?(i=(r=o.areas)==null?void 0:r[c.area_id])==null?void 0:i.name:void 0;t.push({id:s.entity_id,floorId:a.id,roomId:(c==null?void 0:c.id)??null,x:s.x,z:s.z,y:s.y??dn(l,a.height,s.mount??null),lamp:l==="light"?s.mount??"ceiling":null,model:l==="camera"?s.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,...l==="camera"&&n.has(s.entity_id)?{ownLook:!0}:{},motion:l==="camera"?Tf(o,s.entity_id):void 0,fov:s.fov??void 0,reach:s.reach??void 0,tilt:s.tilt??void 0,rotation:s.rotation??0,icon:s.icon?Ut(s.icon):kn(l),cone:l==="camera"&&s.cone===!1?!1:void 0,name:s.name||Y(o,s.entity_id,d),ownName:s.name||void 0,showName:!!s.show_name,text:Ee(o,u),active:tt(u),unavailable:X(u),glow:l==="light"?ea(Ot(u),s.glow_scale):null,show:s.marker??void 0,fixed:!!s.locked})}return t}function rr(o,e){var n;let t=`${e} ${String(((n=o.states[e])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Tf(o,e){return ot(o,e).some(t=>{var n;return((n=o.states[t])==null?void 0:n.state)==="on"})}var xd=new Map;function kd(o){xd=new Map((o==null?void 0:o.floors.flatMap(e=>e.placements.filter(t=>Array.isArray(t.detect_sensors)).map(t=>[t.entity_id,t.detect_sensors])))??[])}function ot(o,e){return xd.get(e)??zf(o,e)}function zf(o,e){var n,r;let t=(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id;return t?Object.values(o.entities??{}).filter(i=>i.device_id===t&&i.entity_id.startsWith("binary_sensor.")).map(i=>i.entity_id).filter(i=>{var a;return["motion","occupancy","presence"].includes(String((a=o.states[i])==null?void 0:a.attributes.device_class))}):[]}function $d(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function Pe(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Sn(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function ea(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}function ir(o,e,t){let{shown:n,more:r}=hn(o,e,t),i=(f,m)=>B([f,m],t.points),a=new Set(e.furniture.filter(f=>{var m;return i(f.x,f.z)&&Kn(f.type)&&((m=f.entity)==null?void 0:m.startsWith("switch."))}).map(f=>f.entity)),s=[],l=[],u=[],c=[],d=[];for(let f of new Set([...n,...r])){let m=o.states[f];if(!m||X(m))continue;let g=f.split(".")[0];g==="light"&&m.state==="on"?s.push(f):g==="fan"&&m.state==="on"?l.push(f):g==="switch"&&m.state==="on"&&a.has(f)?u.push(f):g==="media_player"&&m.state!=="off"&&m.state!=="standby"&&(m.attributes.device_class==="tv"?c.push(f):m.state==="playing"&&d.push(f))}let p=[],h=(f,m,g)=>g.length&&p.push({domain:f,service:m,data:{entity_id:g}});return h("light","turn_off",s),h("fan","turn_off",l),h("switch","turn_off",u),h("media_player","turn_off",c),h("media_player","media_pause",d),p}function ar(o){return o.reduce((e,t)=>e+t.data.entity_id.length,0)}function sr(o,e){let t=e.cleaning;if(!t||!o.states[t])return null;let[n,r]=fn(t);return{domain:n,service:r,data:{entity_id:t}}}function Sd(o,e){if(!e)return null;for(let t of o){let n=t.rooms.find(r=>r.area_id===e);if(n)return{floor:t,room:n}}return null}var Cf=4,Rf=3e3,Ff=8,Hf=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Of=o=>b`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${xn(o)} />
  </svg>`,lr={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},ta=o=>b`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,na=class extends ve{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},walk:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},Rf)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return T(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}renderRoomActions(e){if(this.readOnly)return x;let t=sr(this.hass,e),n=this.floor?ir(this.hass,this.floor,e):[];if(!t&&!n.length)return x;let r=i=>i.forEach(a=>this.call(a.domain,a.service,a.data));return b`<div class="fp3d-rp-sheets">
      ${t?b`<button class="fp3d-rp-sheet" @click=${()=>r([t])}><span aria-hidden="true">🧹</span>${this.t("panel_clean")}</button>`:x}
      ${n.length?b`<button class="fp3d-rp-sheet" @click=${()=>r(n)}><span aria-hidden="true">⏻</span>${this.t("panel_everything_off",{n:ar(n)})}</button>`:x}
    </div>`}get areaName(){var e,t,n;return(e=this.room)!=null&&e.area_id?(n=(t=this.hass.areas)==null?void 0:t[this.room.area_id])==null?void 0:n.name:void 0}name(e){return Y(this.hass,e,this.areaName)}nameButton(e){return b`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&Pe(this,e)}>${this.name(e)}</button>`}askFor(e){var t;return!((t=this.confirmEntities)!=null&&t.has(e))||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let r=()=>{var i;this.readOnly||(i=this.confirmEntities)!=null&&i.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return b`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${X(e)}
      @click=${r}
    ></button>`}renderHere(e){if(!this.building||!nt("locate")||!tr(this.building))return x;let t=nr(this.hass,this.building).filter(n=>n.roomId===e.id);return t.length?b`<p class="fp3d-rp-facts fp3d-rp-here">
      ${t.map((n,r)=>b`${r?", ":""}<span style="color:${n.color}">●</span> ${n.name}`)}
    </p>`:x}render(){var k;let e=this.room;if(!e||!this.hass)return x;let t=xe(this.hass,e.area_id),n=this.memo,{shown:r,more:i}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?hn(this.hass,this.floor,e,this.building?Qo(this.building,e.id):[]):{shown:t,more:[]}},a=bi(this.hass,i).map(S=>S.primary),s=a.length,l=this._showAll?[...r,...a]:r,u=S=>l.filter(M=>S.includes(L(M))).map(M=>this.hass.states[M]).filter(M=>!!M),c=u(["light"]),d=u(["cover"]),p=u(["climate"]),h=u(["media"]),f=u(["switch","fan","lock"]),m=u(["sensor","binary"]),g=u(["camera"]);this.hasCameras=g.length>0;let _=u(["scene","script"]),w=this.facts(p),v=c.filter(S=>S.state==="on");return b`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${w.length?b`<p class="fp3d-rp-facts">${w.join(" \xB7 ")}</p>`:x}
          ${this.renderHere(e)}
          ${this.renderRoomActions(e)}
          ${this.readOnly?b`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:x}
          ${(k=this.sheets)!=null&&k.length&&!this.readOnly?b`<div class="fp3d-rp-sheets">
                ${this.sheets.map(S=>b`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:S.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${S.icon}</span>${S.title}
                  </button>`)}
              </div>`:x}
        </div>
        ${this.walk&&!this.readOnly&&e.points.length>=3?b`<button class="fp3d-rp-close fp3d-rp-walk" title=${this.t("walk_start")} aria-label=${this.t("walk_start")} @click=${()=>this.fire("walk-here")}>
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
            </button>`:x}
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?x:b`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:b`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${c.length?this.section("panel_lights",c.map(S=>this.lightRow(S)),b`${v.length<c.length?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:c.filter(S=>!X(S)).map(S=>S.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:x}${v.length?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:v.map(S=>S.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:x}`):x}
        ${d.length?this.section("panel_covers",d.map(S=>this.coverRow(S)),d.length>1?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(d,"open")}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.covers(d,"close")}>
                      ${this.t("panel_all_close")}
                    </button>`:x):x}
        ${p.length?this.section("panel_climate",p.map(S=>this.climateRow(S))):x}
        ${h.length?this.section("panel_media",h.map(S=>this.mediaRow(S))):x}
        ${f.length?this.section("panel_switches",f.map(S=>this.switchRow(S))):x}
        ${g.length?this.section("panel_cameras",g.map(S=>this.cameraTile(S))):x}
        ${m.length?this.section("panel_sensors",m.map(S=>this.sensorRow(S))):x}
        ${_.length?this.section("panel_scenes",[b`<div class="fp3d-rp-scenes">
                  ${_.map(S=>b`<button
                      class="fp3d-btn"
                      ?disabled=${X(S)}
                      @click=${()=>this.call(L(S.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:S.entity_id})}
                    >
                      ${this.name(S.entity_id)}
                    </button>`)}
                </div>`]):x}
        ${s?b`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:s})}
            </button>`:x}
      </div>
    </section>`}facts(e){var l;let t=[],n=this.room,r=(u,c)=>{var f;let d=Ke(this.hass,this.floor,n,u);if(d===null)return null;if(u==="temperature")return`${oe(this.hass,yt(this.hass,d),1)} ${We(this.hass)}`;let p=pi(this.hass,this.floor,n,u)[0],h=((f=this.hass.states[p])==null?void 0:f.attributes.unit_of_measurement)??c;return`${oe(this.hass,d,1)} ${h}`},i=e.find(u=>typeof u.attributes.current_temperature=="number"),a=r("temperature","\xB0C");a?t.push(a):i&&((l=n.climate)==null?void 0:l.temperature)!=="none"&&t.push(`${oe(this.hass,i.attributes.current_temperature,1)} ${We(this.hass)}`);let s=r("humidity","%");return s&&t.push(s),t}section(e,t,n=x){return b`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}rowIcon(e,t){var a,s;let n=this.floor,r=((a=n==null?void 0:n.furniture.find(l=>l.icon&&(l.entity===t||l.fan_entity===t)))==null?void 0:a.icon)??((s=n==null?void 0:n.placements.find(l=>l.icon&&l.entity_id===t))==null?void 0:s.icon);if(!r)return Of(e);let i=r.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"");return b`<ha-icon icon=${`mdi:${i}`} style="--mdc-icon-size:18px"></ha-icon>`}lightRow(e){let t=e.attributes,n=e.state==="on",r=t.supported_color_modes??[],i=r.some(p=>p!=="onoff"),a=r.includes("color_temp"),s=r.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,u=t.min_color_temp_kelvin??2200,c=t.max_color_temp_kelvin??6500,d=e.entity_id;return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${this.rowIcon("light",d)}</span>
      ${this.nameButton(d)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:d}))}
      ${n&&i?b`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,brightness_pct:Number(p.target.value)})}
          /></label>`:x}
      ${n&&a?b`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${u}
              max=${c}
              step="50"
              .value=${String(t.color_temp_kelvin??u)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:x}
      ${n&&s?b`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${Hf.map(p=>b`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:d,rgb_color:p})}
              ></button>`)}
          </div>`:x}
    </div>`}covers(e,t){let n=e.filter(r=>!X(r)).map(r=>r.entity_id);for(let r of Ro(this.hass,n,t))this.call("cover",r.service,r.data)}coverRow(e){var a;let t=e.attributes,n=t.supported_features??0,r=e.entity_id,i=X(e);return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${this.rowIcon("cover",e.entity_id)}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.covers([e],"open")}>${this.t("cover_open")}</button>
        ${n&Ff||n&64&&!(n&3)?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.covers([e],"stop")}>${this.t("cover_stop")}</button>`:x}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.covers([e],"close")}>${this.t("cover_close")}</button>
      </div>
      ${n&Cf&&typeof t.current_position=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:r,position:Number(s.target.value)})}
          /></label>`:x}
      ${n&128&&typeof t.current_tilt_position=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:r,tilt_position:Number(s.target.value)})}
          /></label>`:Co((a=this.hass)==null?void 0:a.states[r])?b`<div class="fp3d-rp-buttons">
              ${n&16?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_open")}</button>`:x}
              ${n&32?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_close")}</button>`:x}
            </div>`:x}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,r=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,a=t.min_temp??5,s=t.max_temp??30,l=t.hvac_modes??[],u=c=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(s,Math.max(a,Math.round(c/i)*i))});return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${this.rowIcon("climate",e.entity_id)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${r!==null?b`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>u(r-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${oe(this.hass,r,1)} ${We(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>u(r+i)}>+</button>
          </div>`:x}
      ${l.length>1?b`<div class="fp3d-rp-chips">
            ${l.map(c=>b`<button
                class="fp3d-chip"
                aria-pressed=${e.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:x}
    </div>`}stateOf(e,t=Ee(this.hass,e)){var r,i;if((i=(r=this.room)==null?void 0:r.no_state)!=null&&i.includes(e.entity_id))return"";let n=L(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,r=X(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(a=>typeof a=="string"&&a).join(" \xB7 ");return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${this.rowIcon("media",e.entity_id)}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?b`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:x}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${ta(lr.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${X(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${ta(e.state==="playing"?lr.pause:lr.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${ta(lr.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${a=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(a.target.value)/100})}
          /></label>`:x}
    </div>`}switchRow(e){let t=e.entity_id,n=L(t),r=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",a=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(r,"toggle",{entity_id:t});return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${this.rowIcon(n,t)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,a)}
    </div>`}cameraTile(e){var i;let t=e.attributes.entity_picture,n=t&&!X(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=(i=this.floor)==null?void 0:i.placements.some(a=>a.entity_id===e.entity_id);return b`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&Pe(this,e.entity_id)}>
        ${n?b`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:b`<span class="fp3d-rp-note">${Ee(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${r?b`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:x}
    </div>`}sensorRow(e){let t=L(e.entity_id),n=t==="binary"&&e.state==="on";return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${this.rowIcon(t,e.entity_id)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Ce,je,Me`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",na);function Md(o,e,t,n,r=!1){let i=a=>{let s=a==null?void 0:a.value.trim();!a||!s||(a.value="",n([...o,s]))};return b`<div class="fp3d-lines ${r?"fp3d-wide":""}" role="group" aria-label=${t.label}>
    ${t.label}
    ${o.map((a,s)=>b`<div class="fp3d-lines-row">
        <span>${a}</span>
        <button type="button" title=${t.remove} aria-label=${`${t.remove}: ${a}`} ?disabled=${e} @click=${()=>n(o.filter((l,u)=>u!==s))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${t.placeholder}
        aria-label=${t.placeholder}
        ?disabled=${e}
        @keydown=${a=>{a.key==="Enter"&&(a.preventDefault(),i(a.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${e} @click=${a=>i(a.currentTarget.previousElementSibling)}>
        ${t.add}
      </button>
    </div>
  </div>`}var Ve=.03,cr=o=>o&&o!=="none"?o:null;function Pn(o,e=t=>cr(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let i=e(r);if(r.type==="meter")t.grid??=i,t.gridExport??=cr(r.export);else if(r.type==="inverter"&&i&&!t.solar.includes(i))t.solar.push(i);else if(r.type==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let a=cr(r.charge);a&&!t.charge.includes(a)&&t.charge.push(a),(i||a)&&t.batteries.push({power:i,charge:a});let s=cr(r.soc);s&&!t.soc.includes(s)&&t.soc.push(s)}}return t}function ra(o){if(Lf(o))return o.energy.meter;for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}function Lf(o){let e=o.energy.meter;return!!o.energy.hub_point&&!!e&&o.floors.some(t=>t.id===e.floor_id)}async function Cd(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),r=new Map;for(let i of e)r.set(i,((n==null?void 0:n[i])??[]).reduce((a,s)=>a+(typeof s.change=="number"?s.change:0),0));return r}catch{return null}}var Rd=.07;function ge(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function jf(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function co(o,e){var l,u;if(jf(o,e))return e;if(e.startsWith("binary_sensor."))return null;let t=(u=(l=o.entities)==null?void 0:l[e])==null?void 0:u.device_id;if(!t)return null;let n=jl(o,t),r=Oe(o,e),i=hi(o,t).filter(c=>c!==e),a=`sensor.${e.slice(e.indexOf(".")+1)}_power`;if(i.includes(a))return a;let s=i.find(c=>r!==null&&Oe(o,c)===r);return s||n?s??null:i.find(c=>r===null||Oe(o,c)===null||Oe(o,c)===r)??null}function Fd(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),r=[],i=new Set;for(let a of e.floors)for(let s of a.placements){let l=co(o,s.entity_id);!l||n.has(l)||i.has(l)||(i.add(l),r.push({id:s.entity_id,powerEntity:l,floorId:a.id,x:s.x,z:s.z,power:Math.max(0,ge(o.states[l])??0)}))}return r}function Hd(o,e,t,n=Pn(e)){let r=e.energy,i=r.grid??n.grid,a=i?ge(o.states[i],r.grid_invert):null;if(!r.grid&&n.gridExport){let m=Math.max(0,ge(o.states[n.gridExport])??0);a=Math.max(0,a??0)-m}let s=r.solar?ge(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let m=n.solar.map(g=>ge(o.states[g])).filter(g=>g!==null);s=m.length?m.reduce((g,_)=>g+_,0):null}let l=r.battery?ge(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let m=n.batteries.map(g=>{if(g.charge){let _=g.power?Math.max(0,ge(o.states[g.power])??0):0,w=Math.max(0,ge(o.states[g.charge])??0);return _-w}return g.power?ge(o.states[g.power],r.battery_invert):null}).filter(g=>g!==null);l=m.length?m.reduce((g,_)=>g+_,0):null}let c=(r.battery_soc?[r.battery_soc]:n.soc).map(m=>{var g;return Number((g=o.states[m])==null?void 0:g.state)}).filter(m=>Number.isFinite(m)),d=c.length?c.reduce((m,g)=>m+g,0)/c.length:NaN,p=r.tariff?o.states[r.tariff]:void 0,h=Number(p==null?void 0:p.state),f=r.consumption?ge(o.states[r.consumption]):null;return f!==null?f=Math.max(0,f):a!==null||s!==null||l!==null?f=Math.max(0,(a??0)+Math.max(0,s??0)+(l??0)):t.length&&(f=t.reduce((m,g)=>m+g.power,0)),{grid:a,solar:s===null?null:Math.max(0,s),battery:l,soc:Number.isFinite(d)?d:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function Kt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function It(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Df(o,e){let t=o.length,n=o.map((r,i)=>{let a=o[(i+1)%t],s=a[0]-r[0],l=a[1]-r[1],u=Math.hypot(s,l)||1,c=-l/u,d=s/u;return{p:[r[0]+c*e[i],r[1]+d*e[i]],d:[s/u,l/u],n:[c,d]}});return o.map((r,i)=>{let a=n[(i-1+t)%t],s=n[i],l=a.d[0]*s.d[1]-a.d[1]*s.d[0];if(Math.abs(l)<1e-6)return[r[0]+s.n[0]*e[i],r[1]+s.n[1]*e[i]];let u=((s.p[0]-a.p[0])*s.d[1]-(s.p[1]-a.p[1])*s.d[0])/l;return[a.p[0]+a.d[0]*u,a.p[1]+a.d[1]*u]})}function Vf(o){return qe(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function ia(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:r}=bn(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let i of o.rooms){if(i.points.length<3)continue;let{pts:a,flipped:s}=Vf(i),l=a.length,u=a.map((p,h)=>{let f=s?(l-2-h+l)%l:h,m=r.some(g=>!g.exterior&&g.sources.some(_=>_.room_id===i.id&&_.edge===f));return Rd+(m?t/2:0)}),c=Df(a,u).map(p=>Kt(n,p)),d=c.map((p,h)=>[p,c[(h+1)%l]]);for(let[p,h]of d)It(n,p,h);n.rings.set(i.id,d)}for(let i of r){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let a=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],s=so(n,i.roomLeft,a),l=so(n,i.roomRight,a);s!==null&&l!==null&&It(n,s,l)}return qf(n),n}var Nf=1;function qf(o){let e=[...o.rings.entries()];for(;;){let t=new Array(o.pos.length).fill(-1),n=0;for(let a=0;a<o.pos.length;a++){if(t[a]>=0)continue;let s=[a];for(t[a]=n;s.length;)for(let{to:l}of o.adj[s.pop()])t[l]<0&&(s.push(l),t[l]=n);n++}if(n<2)return;let r=null;for(let[,a]of e)for(let s of new Set(a.flat()))for(let[l,u]of e)if(t[u[0][0]]!==t[s])for(let[c,d]of u){let p=o.pos[s],h=o.pos[c],f=o.pos[d],m=f[0]-h[0],g=f[1]-h[1],_=Math.min(1,Math.max(0,((p[0]-h[0])*m+(p[1]-h[1])*g)/(m*m+g*g||1))),w=Math.hypot(p[0]-h[0]-m*_,p[1]-h[1]-g*_);(!r||w<r.d)&&(r={a:s,room:l,d:w})}if(!r||r.d>Nf+2*Rd)return;let i=so(o,r.room,o.pos[r.a]);if(i===null)return;It(o,r.a,i)}}function so(o,e,t){let n=o.rings.get(e);if(!n)return null;let r=null;for(let a of n){let s=o.pos[a[0]],l=o.pos[a[1]],u=l[0]-s[0],c=l[1]-s[1],d=u*u+c*c||1,p=Math.min(1,Math.max(0,((t[0]-s[0])*u+(t[1]-s[1])*c)/d)),h=[s[0]+u*p,s[1]+c*p],f=Math.hypot(t[0]-h[0],t[1]-h[1]);(!r||f<r.d)&&(r={seg:a,q:h,d:f})}if(!r)return null;let i=Kt(o,r.q);return It(o,i,r.seg[0]),It(o,i,r.seg[1]),i}function dr(o,e,t){let n=o.pos[t],r=so(o,e.id,n);if(r===null)return!1;let i=o.pos[r],a=o.pos[o.adj[r][0].to],s=o.pos[o.adj[r][1].to],l=Math.hypot(s[0]-a[0],s[1]-a[1])||1,u=[(s[0]-a[0])/l,(s[1]-a[1])/l],c=(n[0]-i[0])*u[0]+(n[1]-i[1])*u[1],d=(n[1]-i[1])*u[0]-(n[0]-i[0])*u[1];if(Math.abs(c)<.01||Math.abs(d)<.01)return It(o,t,r),!0;let p=[i[0]+u[0]*c,i[1]+u[1]*c],h=[i[0]-u[1]*d,i[1]+u[0]*d],f=Kt(o,B(h,e.points)||!B(p,e.points)?h:p);return It(o,r,f),It(o,f,t),!0}function lo(o,e){let t=o.rooms.filter(i=>i.points.length>=3),n=t.find(i=>B(e,i.points));if(n)return n;let r=null;for(let i of t)for(let a of i.points){let s=Math.hypot(e[0]-a[0],e[1]-a[1]);(!r||s<r.d)&&(r={room:i,d:s})}return(r==null?void 0:r.room)??null}function Od(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),r=o.pos.map(()=>!1);for(t[e]=0;;){let i=-1;for(let a=0;a<t.length;a++)!r[a]&&t[a]<1/0&&(i<0||t[a]<t[i])&&(i=a);if(i<0)break;r[i]=!0;for(let{to:a,w:s}of o.adj[i])t[i]+s<t[a]-1e-9&&(t[a]=t[i]+s,n[a]=i)}return{dist:t,prev:n}}function Pd(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Id=new WeakMap;function Wf(o,e){let t=ra(o),n=o.floors.find(c=>c.id===t.floor_id),r=[],{wall_exterior:i,wall_interior:a}=o.settings,s=new Map,l=new Map;e.forEach((c,d)=>l.set(c.floorId,[...l.get(c.floorId)??[],d]));let u=o.floors.filter(c=>l.has(c.id));for(let c of u){if(c.id===n.id)continue;let d=c.elevation>n.elevation,p=l.get(c.id),h=Pd(p,e);r.push({floorId:n.id,a:[t.x,Ve,t.z],b:[t.x,d?n.height:-.2,t.z],dist:0,members:p,kind:h});let f=Math.abs(c.elevation-n.elevation);r.push({floorId:c.id,a:[t.x,d?-.2:c.height,t.z],b:[t.x,Ve,t.z],dist:f,members:p,kind:h}),s.set(c.id,f+.25)}for(let c of u){let d=ia(c,i,a),p=lo(c,[t.x,t.z]);if(!p)continue;let h=Kt(d,[t.x,t.z]);if(!dr(d,p,h))continue;let f=[];for(let v of l.get(c.id)){let k=e[v],S=lo(c,[k.x,k.z]);if(!S)continue;let M=Kt(d,[k.x,k.z]);dr(d,S,M)&&f.push({node:M,member:v})}let{dist:m,prev:g}=Od(d,h),_=new Map;for(let v of f)if(Number.isFinite(m[v.node]))for(let k=v.node;g[k]>=0;k=g[k]){let S=g[k],M=`${S}>${k}`,y=_.get(M)??{a:S,b:k,members:[]};y.members.push(v.member),_.set(M,y)}let w=s.get(c.id)??0;for(let{a:v,b:k,members:S}of _.values()){let M=d.pos[v],y=d.pos[k],C=Pd(S,e);r.push({floorId:c.id,a:[M[0],Ve,M[1]],b:[y[0],Ve,y[1]],dist:w+m[v],members:S,kind:C})}}return r}function Ld({building:o,consumers:e,summary:t,battery:n,fieldPower:r,devicePower:i}){var A;let a=ra(o);if(!a)return[];let s=o.floors.find(P=>P.id===a.floor_id);if(!s)return[];let l=P=>i==null?void 0:i.get(P),u=oa(o,"inverter"),c=oa(o,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let d=P=>{let $=null;for(let E of u)E.floorId===P.floorId&&(!$||Math.hypot(E.x-P.x,E.z-P.z)<Math.hypot($.x-P.x,$.z-P.z))&&($=E);return $},p=P=>l(P.id)??(c.length===1?t.battery??0:0),h=new Map;for(let P of c){let $=d(P);$&&h.set(P.id,$)}let f=e.map(P=>({floorId:P.floorId,x:P.x,z:P.z,kind:P.wallbox?"wallbox":"consumer",power:P.power}));for(let P of c)!h.has(P.id)&&t.battery!==null&&f.push({floorId:P.floorId,x:P.x,z:P.z,kind:"battery",power:Math.abs(p(P))});let m=`${a.floor_id}:${a.x},${a.z}|${f.map(P=>`${P.floorId}:${P.x},${P.z}:${P.kind}`).join(";")}`,g=Id.get(o);g||Id.set(o,g=new Map);let _=g.get(m);_||(_=Wf(o,f),g.clear(),g.set(m,_));let w=_.map(P=>({floorId:P.floorId,a:P.a,b:P.b,dist:P.dist,power:P.members.reduce(($,E)=>$+f[E].power,0),kind:P.kind})),v=t.grid!==null?ur(o):null,k=o.settings.roof.cables??[],S=P=>k.find($=>$.id===P),M=(P,$)=>P.map(E=>({...E,key:$}));if(v){let P=t.grid>=0,$=S("grid"),E=$?ao(o,$,[v.end[0],s.elevation+Math.max(Ve,v.height),v.end[1]],[a.x,s.elevation+.4+1.1,a.z]):[...v.height>.05?[[v.end[0],v.height,v.end[1]]]:[],[v.end[0],Ve,v.end[1]],[v.wall[0],Ve,v.wall[1]],[a.x,Ve,a.z]],R=$?Mn(o,P?E:[...E].reverse(),Math.abs(t.grid),P?"grid":"export",s):Dd(s.id,P?E:[...E].reverse(),Math.abs(t.grid),P?"grid":"export",0);w.push(...M(R,"grid"))}if(t.battery!==null&&t.battery>0)for(let P of w)P.kind==="battery"&&([P.a,P.b]=[P.b,P.a]);let y=o.settings.roof.solar??[],C=o.settings.roof.strings??[],q=new Map;if(r&&y.length){let P=[...Mt(o),...io(o)];for(let $ of y){let E=r.get($.id)??0,R=$.string?(A=C.find(Z=>Z.id===$.string))==null?void 0:A.inverter:null,j=R?c.find(Z=>Z.id===R)??null:null,N=R&&!j?u.find(Z=>Z.id===R)??null:null;if(j){let Z=h.get(j.id);Z&&q.set(Z.id,(q.get(Z.id)??0)+E);let W=j.variant==="wall"?.5+j.h:.9,de=S(`solar:${$.id}`),fe=de?Td(o,$):null,Be=o.floors.find(ye=>ye.id===j.floorId);de&&fe&&Be?w.push(...M(Mn(o,ao(o,de,fe,[j.x,Be.elevation+W,j.z]),E,"solar",Be),`solar:${$.id}`)):w.push(...M(zd(o,$,E,j,W),`solar:${$.id}`));continue}if(!N&&u.length){let Z=Wt(o,$,P),W=Z?rd(Z,$):[$.u,$.v];N=u.reduce((de,fe)=>!de||Math.hypot(fe.x-W[0],fe.z-W[1])<Math.hypot(de.x-W[0],de.z-W[1])?fe:de,null)}N&&q.set(N.id,(q.get(N.id)??0)+E);let J=N??{floorId:a.floor_id,x:a.x,z:a.z},H=N?1.1+N.h:1.5,U=S(`solar:${$.id}`),ne=U?Td(o,$):null,K=o.floors.find(Z=>Z.id===J.floorId);U&&ne&&K?w.push(...M(Mn(o,ao(o,U,ne,[J.x,K.elevation+H,J.z]),E,"solar",K),`solar:${$.id}`)):w.push(...M(zd(o,$,E,J,H),`solar:${$.id}`))}}else t.solar!==null&&!u.length&&w.push({floorId:s.id,a:[a.x+.08,s.height+.6,a.z+.08],b:[a.x+.08,Ve,a.z+.08],dist:0,power:t.solar,kind:"solar"});for(let P of u){let $=1.1+P.h,E=c.filter(N=>h.get(N.id)===P),R=l(P.id);if(R===void 0){R=q.get(P.id)??(u.length===1?t.solar??0:0);for(let N of E)R+=p(N)}let j=o.floors.find(N=>N.id===P.floorId);if(t.solar!==null||t.battery!==null){let N=S(`inv:${P.id}`),J=Bf(o,P.id)?ur(o):null,H=J?{floorId:J.floorId,x:J.end[0],z:J.end[1],y:Math.max(Ve,J.height)}:{floorId:a.floor_id,x:a.x,z:a.z,y:1.5},U=J?o.floors.find(K=>K.id===J.floorId)??s:s,ne=N&&j?Mn(o,ao(o,N,[P.x,j.elevation+$,P.z],[H.x,U.elevation+H.y,H.z]),Math.max(0,R),"inverter",j):Ad(o,P,$,H,H.y,Math.max(0,R),"inverter",0);w.push(...M(ne,`inv:${P.id}`))}for(let N of E){let J=p(N);if(t.battery===null&&l(N.id)===void 0)continue;let H=N.variant==="wall"?.5+N.h:.9,U=S(`bat:${N.id}`),ne=U&&j?Mn(o,ao(o,U,[P.x,j.elevation+$-.1,P.z],[N.x,j.elevation+H,N.z]),Math.abs(J),"battery",j):Ad(o,P,$-.1,N,H,Math.abs(J),"battery",0);w.push(...M(J<=0?ne:ne.map(K=>({...K,a:K.b,b:K.a})).reverse(),`bat:${N.id}`))}}return w}function ur(o){var h;let e=ra(o),t=e?o.floors.find(f=>f.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:r}=o.settings,{walls:i}=bn(t.rooms,{exterior:n,interior:r},t.walls??[]),a=oa(o,"grid_point")[0],s=i.filter(f=>f.exterior);if(a){let f=null;for(let _ of s){let w=_.b[0]-_.a[0],v=_.b[1]-_.a[1],k=a.x-e.x,S=a.z-e.z,M=k*v-S*w;if(Math.abs(M)<1e-9)continue;let y=((_.a[0]-e.x)*v-(_.a[1]-e.z)*w)/M,C=((_.a[0]-e.x)*S-(_.a[1]-e.z)*k)/M;if(y<=0||y>1||C<0||C>1||f&&y>=f.t)continue;let q=Math.hypot(w,v)||1;f={q:[e.x+k*y,e.z+S*y],out:[v/q,-w/q],t:y}}let m=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[e.x,e.z],g=((h=o.floors.flatMap(_=>_.furniture).find(_=>_.id===a.id))==null?void 0:h.mount_y)??0;return{floorId:t.id,wall:m,end:[a.x,a.z],height:Math.max(0,g)}}let l=null;for(let f of s){let m=f.b[0]-f.a[0],g=f.b[1]-f.a[1],_=m*m+g*g||1,w=Math.min(1,Math.max(0,((e.x-f.a[0])*m+(e.z-f.a[1])*g)/_)),v=[f.a[0]+m*w,f.a[1]+g*w],k=Math.hypot(e.x-v[0],e.z-v[1]),S=Math.sqrt(_);(!l||k<l.d)&&(l={q:v,out:[g/S,-m/S],d:k})}if(!l)return null;let{q:u,out:c}=l,d=0;for(let f of o.floors)for(let m of f.outdoor??[]){let g=m.points.length;for(let _=0;_<g;_++){let w=m.points[_],v=m.points[(_+1)%g],k=v[0]-w[0],S=v[1]-w[1],M=c[0]*S-c[1]*k;if(Math.abs(M)<1e-9)continue;let y=((w[0]-u[0])*S-(w[1]-u[1])*k)/M,C=((w[0]-u[0])*c[1]-(w[1]-u[1])*c[0])/M;y>0&&C>=0&&C<=1&&(d=Math.max(d,Math.min(15,y)))}}let p=d>n+1?d:n+2.5;return{floorId:t.id,wall:[u[0]+c[0]*(n/2+.05),u[1]+c[1]*(n/2+.05)],end:[u[0]+c[0]*p,u[1]+c[1]*p],height:0}}function Bf(o,e){return o.floors.some(t=>t.furniture.some(n=>n.id===e&&n.type==="inverter"&&n.cable_to==="grid"))}function oa(o,e){let t=[];for(let n of o.floors)for(let r of n.furniture)r.type===e&&t.push({id:r.id,type:r.type,floorId:n.id,x:r.x,z:r.z,h:r.h,variant:r.variant??null});return t}var Ed=new WeakMap;function jd(o,e,t,n){let r=`${e.id}:${t.join(",")}>${n.join(",")}`,i=Ed.get(o);i||Ed.set(o,i=new Map);let a=i.get(r);if(a)return a;let{wall_exterior:s,wall_interior:l}=o.settings,u=ia(e,s,l),c=[t,n],d=lo(e,t),p=lo(e,n);if(d&&p){let h=Kt(u,t),f=Kt(u,n);if(dr(u,d,h)&&dr(u,p,f)){let{dist:m,prev:g}=Od(u,h);if(Number.isFinite(m[f])){c.length=0;for(let _=f;_>=0;_=g[_])c.unshift(u.pos[_])}}}return i.set(r,c),c}function Ad(o,e,t,n,r,i,a,s){let l=o.floors.find(d=>d.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let u=jd(o,l,[e.x,e.z],[n.x,n.z]),c=[[e.x,t,e.z],...u.map(d=>[d[0],Ve,d[1]]),[n.x,r,n.z]];return Dd(l.id,c,i,a,s)}function Dd(o,e,t,n,r){let i=[];for(let a=0;a+1<e.length;a++){let s=e[a],l=e[a+1],u=Math.hypot(l[0]-s[0],l[1]-s[1],l[2]-s[2]);u<1e-4||(i.push({floorId:o,a:s,b:l,dist:r,power:t,kind:n}),r+=u)}return i}function ao(o,e,t,n){let r=o.floors.find(a=>a.id===e.floor_id),i=((r==null?void 0:r.elevation)??0)+Math.max(Ve,e.height);return[t,...e.points.map(a=>[a[0],i,a[1]]),n]}function Td(o,e){let t=Wt(o,e,[...Mt(o),...io(o)]);if(!t)return null;let[n,r]=Bt(t,e),i=e.u+n/2,a=t.unbounded?e.v+r/2:e.v;return[t.o[0]+t.eu[0]*i+t.es[0]*a,t.o[1]+t.eu[1]*i+t.es[1]*a,t.o[2]+t.eu[2]*i+t.es[2]*a]}function Uf(o,e,t){let{wall_exterior:n,wall_interior:r}=o.settings,i=ia(e,n,r),a=lo(e,t),s=a?so(i,a.id,t):null;return s===null?t:i.pos[s]}function Mn(o,e,t,n,r){let i=[...o.floors].sort((u,c)=>u.elevation-c.elevation),a=u=>{let c=r;for(let d of i)u>=d.elevation-.01&&(c=d);return c},s=[],l=0;for(let u=0;u+1<e.length;u++){let c=e[u],d=e[u+1];if(Math.hypot(d[0]-c[0],d[1]-c[1],d[2]-c[2])<1e-4)continue;let h=[];if(Math.abs(d[1]-c[1])>.01){let f=Math.min(c[1],d[1]),m=Math.max(c[1],d[1]);for(let g of i)g.elevation>f+.01&&g.elevation<m-.01&&h.push(g.elevation);d[1]<c[1]&&h.reverse()}for(let f of[...h,d[1]]){let m=(f-c[1])/(d[1]-c[1]||1),g=Math.abs(d[1]-c[1])>.01?[c[0]+(d[0]-c[0])*m,f,c[2]+(d[2]-c[2])*m]:d,_=a((c[1]+g[1])/2),w=Math.hypot(g[0]-c[0],g[1]-c[1],g[2]-c[2]);w>1e-4&&s.push({floorId:_.id,a:[c[0],c[1]-_.elevation,c[2]],b:[g[0],g[1]-_.elevation,g[2]],dist:l,power:t,kind:n}),l+=w,c=g}}return s}function zd(o,e,t,n,r){let i=[...Mt(o),...io(o)],a=Wt(o,e,i),s=o.floors.find(g=>g.id===n.floorId);if(!a||!s)return[];let[l,u]=Bt(a,e),c=(g,_)=>[a.o[0]+a.eu[0]*g+a.es[0]*_,a.o[1]+a.eu[1]*g+a.es[1]*_,a.o[2]+a.eu[2]*g+a.es[2]*_],d=e.u+l/2,p=s.elevation+Ve,h=[],f;if(a.unbounded){let g=c(d,e.v+u/2);f=[g[0],p,g[2]],h.push(f)}else if(a.wall){let g=c(d,e.v);f=[g[0],p,g[2]],h.push(g,f)}else{let g=c(d,e.v),_=Wi(o)??s,w=Math.max(s.elevation+.5,Math.min(g[1]-.25,_.elevation+_.height-.12));f=[g[0],w,g[2]],h.push(g)}let m=Uf(o,s,[f[0],f[2]]);h.push([m[0],f[1],m[1]]),Math.abs(f[1]-p)>.05&&h.push([m[0],p,m[1]]);for(let g of jd(o,s,m,[n.x,n.z]).slice(1))h.push([g[0],p,g[1]]);return h.push([n.x,s.elevation+r,n.z]),Mn(o,h,t,"solar",s)}function Vd(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),r=new Array(n).fill(0),i=-1;for(let s of Object.values(o))for(let l of s){let u=typeof l.start=="number"?l.start:Date.parse(l.start),c=Math.floor((u-t.getTime())/3e5);c<0||c>=n||typeof l.mean!="number"||(r[c]+=Math.max(0,l.mean),i=Math.max(i,c))}return r.length=Math.max(i+1,n-3,1),{kwh:r.reduce((s,l)=>s+l*5/60/1e3,0),peak:Math.max(0,...r),curve:r}}async function Nd(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function aa(o,e){let n=l=>42-(e>0?l/e*36:0),r=o.map((l,u)=>[u/288*220,n(l)]),i=r.map(([l,u],c)=>`${c?"L":"M"}${l.toFixed(1)} ${u.toFixed(1)}`).join(" "),[a,s]=r[r.length-1];return{line:i,area:`${i} L${a.toFixed(1)} 44 L0 44 Z`,endX:a,endY:s}}function qd(o){var e;return Math.max(1,o.rows*o.cols-(((e=o.skip)==null?void 0:e.length)??0))}var Kf=400;function Wd(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let r=Math.min(1,(e.get(n.id)??0)/(qd(n)*(n.wp??Kf)));t.set(n.id,r>.003?Math.pow(r,.6):0)}return t}function Bd(o,e,t){let n=new Map,r=e.settings.roof.solar??[],i=e.settings.roof.strings??[],a=qd,s=[],l=0,u=new Map;for(let p of r){let h=p.entity&&p.entity!=="none"?ge(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let f=p.string?i.find(g=>g.id===p.string):void 0,m=f!=null&&f.entity&&f.entity!=="none"?ge(o.states[f.entity]):null;if(f&&m!==null){u.set(f.id,[...u.get(f.id)??[],p]);continue}s.push(p)}for(let[p,h]of u){let f=i.find(_=>_.id===p),m=Math.max(0,ge(o.states[f.entity])??0),g=h.reduce((_,w)=>_+a(w),0);for(let _ of h)n.set(_.id,m*a(_)/g);l+=m}let c=Math.max(0,(t??0)-l),d=s.reduce((p,h)=>p+a(h),0);for(let p of s)n.set(p.id,d?c*a(p)/d:0);return n}var Qe={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Ud(o,e){if(o==="grid")return Qe.import;if(o==="export")return Qe.export;if(o==="solar")return Qe.solar;if(o==="battery")return Qe.battery;if(o==="wallbox")return Qe.wallbox;if(o==="inverter")return(e.solar??0)>5?Qe.solar:Qe.battery;let t=[[Math.max(0,e.grid??0),Qe.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),Qe.solar],[Math.max(0,e.battery??0),Qe.battery]],[n]=t.reduce((r,i)=>i[0]>r[0]?i:r);return n>0?t.find(r=>r[0]===n)[1]:Qe.house}var sa=["neon","blueprint","day"],uo={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var pr={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Kd(o,e){let t=pr[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[r,i]=t[n],[a,s]=t[n-1];if(e<=r){let l=(e-a)/(r-a);return[s[0]+(i[0]-s[0])*l,s[1]+(i[1]-s[1])*l,s[2]+(i[2]-s[2])*l]}}return t[t.length-1][1]}function Gd(o,e,t){let n=new Map;for(let r of e.floors)for(let i of r.rooms){let a=Ke(o,r,i,t);a!==null&&n.set(i.id,a)}return n}function Yd(o){let e=pr[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([r,i])=>`rgb(${i.map(a=>Math.round(a*255)).join(",")}) ${Math.round((r-t)/(n-t)*100)}%`).join(", ")})`}function Ae(o,e){if(!_t(e))return T(o,`furn_${e}`);let t=we(e);return t?Js(t):T(o,"pack_missing_item")}var la=.06;function Jd(o,e,t){let n=t[0]-e[0],r=t[1]-e[1],i=Math.hypot(n,r)||1e-9,a=((o[0]-e[0])*n+(o[1]-e[1])*r)/i;return{off:Math.abs((o[0]-e[0])*r-(o[1]-e[1])*n)/i,at:a,len:i}}function Qd(o,e){for(let t=0;t<e.length;t++){let n=Jd(o,e[t],e[(t+1)%e.length]);if(n.off<la&&n.at>-la&&n.at<n.len+la)return t}return-1}function Gf(o,e,t){let n=o.points[e],r=o.points[(e+1)%o.points.length];if(!n||!r)return null;let i=Math.hypot(r[0]-n[0],r[1]-n[1])||1e-9;return[n[0]+(r[0]-n[0])*t/i,n[1]+(r[1]-n[1])*t/i]}function hr(o,e){if(!o||!(e!=null&&e.length))return[];let t=new Set(o.floors.flatMap(n=>[...n.rooms.map(r=>r.id),...(n.outdoor??[]).map(r=>r.id)]));return e.filter(n=>t.has(n))}function fr(o,e){var h;let t=new Set(e),n=o.settings.wall_interior??.12,r=[];for(let f of o.floors){let m=f.rooms.filter(C=>t.has(C.id)),g=(f.outdoor??[]).filter(C=>t.has(C.id));if(!m.length&&!g.length)continue;let _=[...m.map(C=>C.points),...g.map(C=>C.points)].filter(C=>C.length>=3),w=(C,q)=>_.some(A=>B([C,q],A)),v=f.rooms.filter(C=>!t.has(C.id)&&C.points.length>=3),k=m.map(C=>{let q=C.points.length,A=Array.from({length:q},($,E)=>{var R;return((R=C.wall_thickness)==null?void 0:R[E])??null}),P=!1;for(let $=0;$<q;$++){if(A[$]!==null)continue;let E=C.points[$],R=C.points[($+1)%q],j=[(E[0]+R[0])/2,(E[1]+R[1])/2];v.some(N=>Qd(j,N.points)>=0)&&(A[$]=n,P=!0)}return P?{...C,wall_thickness:A}:C}),S=(f.walls??[]).filter(C=>w((C.a[0]+C.b[0])/2,(C.a[1]+C.b[1])/2)),M=new Set(S.map(C=>C.id)),y=[];for(let C of f.openings){if(C.wall){M.has(C.wall)&&y.push(C);continue}if(t.has(C.room_id)){y.push(C);continue}let q=f.rooms.find(P=>P.id===C.room_id),A=q?Gf(q,C.edge,C.offset):null;if(A)for(let P of m){let $=Qd(A,P.points);if($<0)continue;let E=Jd(A,P.points[$],P.points[($+1)%P.points.length]);y.push({...C,room_id:P.id,edge:$,offset:E.at,hinge:C.hinge==="left"?"right":"left",swing:C.swing==="in"?"out":"in"});break}}r.push({...f,rooms:k,outdoor:g,walls:S,openings:y,furniture:f.furniture.filter(C=>w(C.x,C.z)),placements:f.placements.filter(C=>w(C.x,C.z))})}let i=Yf(o),a=o.settings.roof;if(!(!a||a.type==="none"||i===null||r.some(f=>f.id===i)))return{...o,floors:r,settings:{...o.settings,roof:{...a,type:"none"}}};let u=a&&(a.type==="flat"||a.type==="gable")&&i!==null?(((h=o.floors.find(f=>f.id===i))==null?void 0:h.rooms)??[]).filter(f=>f.points.length>=3):[];if(!u.length)return{...o,floors:r};let c=u.flatMap(f=>f.points.map(m=>m[0])),d=u.flatMap(f=>f.points.map(m=>m[1])),p=[Math.min(...c),Math.min(...d),Math.max(...c),Math.max(...d)];return{...o,floors:r,settings:{...o.settings,roof:{...a,frame:p}}}}function Yf(o){var t;return((t=o.floors.filter(n=>n.rooms.some(r=>r.points.length>=3)).sort((n,r)=>r.elevation-n.elevation)[0])==null?void 0:t.id)??null}function Qf(o,e){var l;let t=(l=o==null?void 0:o.states[e.entity])==null?void 0:l.state;if(t===void 0)return!1;let n=(e.state??"").trim(),r=n.startsWith("!");r&&(n=n.slice(1).trim());let i=n?n.split(",").map(u=>u.trim()).filter(Boolean):["on"],a=Number(t),s=i.some(u=>{let c=/^([<>]=?)\s*(-?\d+(?:[.,]\d+)?)$/.exec(u);if(c){if(!Number.isFinite(a)||t.trim()==="")return!1;let d=Number(c[2].replace(",","."));return c[1]==="<"?a<d:c[1]==="<="?a<=d:c[1]===">"?a>d:a>=d}return t.toLowerCase()===u.toLowerCase()});return r?!s:s}function ca(o,e){var t;return!((t=e.show_if)!=null&&t.entity)||Qf(o,e.show_if)}function da(o,e){var n;if(!e)return"";let t="";for(let r of e.floors)for(let i of r.furniture)(n=i.show_if)!=null&&n.entity&&(t+=`${i.id}:${ca(o,i)?1:0};`);return t}var Gt=o=>{var e;return((e=o==null?void 0:o.settings)==null?void 0:e.winter)??{}},Jf=o=>Ws(o)>0;function Zd(o,e,t=new Date){var a;let n=Gt(e);if(!V("fun_winter")||n.roof_lights===!1)return!1;if(n.roof_entity)return((a=o.states[n.roof_entity])==null?void 0:a.state)==="on";let r=o.states["sun.sun"],i=r?r.state==="below_horizon":t.getHours()>=16||t.getHours()<7;return Jf(t)&&i}var Xf=new Set(["snowy","snowy-rainy"]),Xd="neonplan3d.winter_last_snow";function Zf(o,e){let t=e?o.states[e]:void 0,n=t==null?void 0:t.attributes.temperature;return typeof n!="number"?null:String(t.attributes.temperature_unit??"\xB0C").includes("F")?(n-32)*5/9:n}function eu(o,e,t,n=Date.now(),r=em()){var l;if(!V("fun_winter")||Gt(e).snow===!1||!t)return 0;let i=((l=o.states[t])==null?void 0:l.state)??"";if(Xf.has(i)){try{r==null||r.setItem(Xd,String(n))}catch{}return 1}let a=Number((r==null?void 0:r.getItem(Xd))??0);if(!a||n-a>72*36e5)return 0;let s=Zf(o,t);return s===null||s<=1?1:Math.max(0,1-(n-a)/(6*36e5))}function em(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function tu(o,e){if(e<=0)return[];let t=[];for(let n of o.floors)for(let r of n.outdoor??[])r.type==="lawn"&&r.points.length>=3&&t.push({floorId:n.id,points:r.points,y:Ao(n,r)+ti[r.type]+.025,color:[.93,.96,1],opacity:.78*e,...r.slope?{follow:{areaId:r.id,lift:.025}}:{}});return t}function nu(o,e=new Date){if(!V("fun_winter")||Gt(o).firework===!1)return!1;if(typeof location<"u"&&new URLSearchParams(location.search).has("fp3d_firework"))return!0;let t=e.getMonth(),n=e.getDate(),r=e.getHours()*60+e.getMinutes();return t===11&&n===31&&r>=1439||t===0&&n===1&&r<10}var gr=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function mr(o){return o&&o!=="none"?o:null}function In(o,e){var i,a;if(e.type!=="parking")return null;let t=mr(e.entity);if(t){let s=o.states[t];if(!s||!gr.has(s.state.toLowerCase()))return null}let n=e.vehicle??null,r=mr(e.type_entity);if(r&&((i=e.types)!=null&&i.length)){let s=(((a=o.states[r])==null?void 0:a.state)??"").trim().toLowerCase();if(s){let l=c=>c.trim().toLowerCase(),u=e.types.find(c=>l(c.state)===s)??e.types.find(c=>l(c.state)&&s.includes(l(c.state)));u&&(n=u.vehicle)}}return n&&we(n)?n:null}function ua(o,e){let t=new Map;for(let n of e.floors)for(let r of n.furniture){let i=In(o,r);i&&t.set(r.id,i)}return t}function ou(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[mr(t.entity),mr(t.type_entity)])).filter(e=>!!e)}function ru(o,e){let t=we(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var po=1800*1e3,tm=new Set(["motion","occupancy","presence"]);function iu(o,e){var t;return e.startsWith("binary_sensor.")&&tm.has(String((t=o.states[e])==null?void 0:t.attributes.device_class))}function ho(o,e){let t=[],n=new Set,r=(i,a,s,l)=>{n.has(i)||(n.add(i),t.push({entity:i,floorId:a,x:s,z:l}))};for(let i of e.floors)for(let a of i.placements)if(iu(o,a.entity_id))r(a.entity_id,i.id,a.x,a.z);else if(L(a.entity_id)==="camera")for(let s of ot(o,a.entity_id))r(s,i.id,a.x,a.z);for(let i of e.floors)for(let a of i.rooms){if(!a.area_id||a.points.length<3)continue;let[s,l]=He(a.points);for(let u of xe(o,a.area_id))iu(o,u)&&r(u,i.id,s,l)}return t}function au(o,e,t,n=po){let r=t-n,i=[];for(let[a,s]of Object.entries(o)){let l="";for(let u of s){let c=(u.lc??u.lu)*1e3;u.s==="on"&&l!=="on"&&c>=r&&c<=t&&i.push({entity:a,time:c}),l=u.s}}for(let a of e){let s=a.lastChanged??NaN;a.state!=="on"||!(s>=r&&s<=t)||i.some(l=>l.entity===a.entity&&Math.abs(l.time-s)<2e3)||i.push({entity:a.entity,time:s})}return i.sort((a,s)=>a.time-s.time)}function su(o,e,t,n=po){let r=new Map(o.map(a=>[a.entity,a])),i=[];for(let a of e){let s=r.get(a.entity);if(!s)continue;let l=i[i.length-1];l&&l.entity===a.entity&&a.time-l.time<6e4||i.push({...s,time:a.time,age:Math.min(1,Math.max(0,(t-a.time)/n))})}return i.slice(-40)}function br(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit",...Rn(o)})}var lu='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var _r=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function vr(o,e){let t=[],n=Lt(o,e.floors),r=e.floors.length>1;for(let i of e.floors){let a=(c,d)=>i.rooms.find(p=>p.points.length>=3&&B([c,d],p.points))??null,s=(c,d)=>{var p;return[(p=a(c,d))==null?void 0:p.name,r?i.name:null].filter(Boolean).join(" \xB7 ")};for(let c of i.rooms){if(c.points.length<3)continue;let[d,p]=He(c.points);t.push({kind:"room",name:c.name,where:r?i.name:"",floorId:i.id,roomId:c.id,entity:null,icon:null,x:d,z:p,y:0})}let l=new Set,u=(c,d,p,h)=>{var f;l.has(c)||!o.states[c]||(l.add(c),t.push({kind:"device",name:Y(o,c),where:s(d,p),floorId:i.id,roomId:((f=a(d,p))==null?void 0:f.id)??null,entity:c,icon:L(c),x:d,z:p,y:h}))};for(let c of i.placements)u(c.entity_id,c.x,c.z,c.y??dn(L(c.entity_id)??"sensor",i.height,c.mount));for(let c of i.furniture){let d=n.get(c.id),p=(d==null?void 0:d.entity)??(d==null?void 0:d.power);p&&u(p,c.x,c.z,Math.min(i.height-.3,Math.max(.5,c.h)))}}return t}function cu(o,e,t=8){let n=_r(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let r=o.filter(s=>{let l=_r(`${s.name} ${s.where} ${s.entity??""}`);return n.every(u=>l.includes(u))}),i=_r(e.trim()),a=s=>(_r(s.name).startsWith(i)?0:2)+(s.kind==="room"?0:1);return r.sort((s,l)=>a(s)-a(l)||s.name.localeCompare(l.name)).slice(0,t)}var rt=new Map,pa=new Map,du=new Map;async function nm(o,e){return o.callWS({type:"neonplan3d/modules/code",pack_id:e})}async function om(o,e){let t=await nm(o,e.id);if(t.api!==1)return null;let n=URL.createObjectURL(new Blob([t.code],{type:"text/javascript"}));try{let i=(await import(n)).default;if(!i||i.api!==1||typeof i.id!="string")return null;let a=du.get(e.id);a&&URL.revokeObjectURL(a),du.set(e.id,n);let s={id:e.id,release:t.release,module:i};return rt.set(e.id,s),s}catch(r){throw URL.revokeObjectURL(n),r}}async function ha(o,e){let t=new Map(e.filter(n=>n.module&&n.module.api===1&&n.module.approved===!0).map(n=>[n.id,n]));for(let n of[...rt.keys()])t.has(n)||rt.delete(n);await Promise.all([...t.values()].map(n=>{let r=rt.get(n.id);if(r&&r.release===(n.release??1))return Promise.resolve(r);let i=pa.get(n.id);return i||(i=om(o,n).catch(a=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,a),null)).finally(()=>pa.delete(n.id)),pa.set(n.id,i)),i}))}async function uu(o,e){for(let t of rt.values())if(t.module.voice)try{let n=await t.module.voice(o,e);if(n)return n}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed on "${o}"`,n)}return null}function pu(o){return Qt(e=>{var t;return(t=e.scene)==null?void 0:t.call(e,o)})}function hu(o){return[...rt.values()].flatMap(e=>{var t,n;return((n=(t=e.module).popups)==null?void 0:n.call(t,o))??[]})}function fu(o){return Qt(e=>{var t;return(t=e.cards)==null?void 0:t.call(e,o)})}function mu(o){return Qt(e=>{var t;return(t=e.alerts)==null?void 0:t.call(e,o)})}function gu(o){return Qt(e=>{var t;return(t=e.watched)==null?void 0:t.call(e,o)})}function fa(o,e){return Qt(t=>{var n;return(n=t.roomSheets)==null?void 0:n.call(t,o,e)})}function ma(o){return Qt(e=>{var t;return(t=e.menuSheets)==null?void 0:t.call(e,o)})}function ga(){return[...rt.values()].filter(o=>!!o.module.settings).map(o=>o.id)}function bu(o,e){let t=rt.get(o);if(!(t!=null&&t.module.settings))return[];try{return t.module.settings(e)??[]}catch(n){return console.warn(`NeonPlan 3D: module ${t.id} failed`,n),[]}}function _u(o){return Qt(e=>{var t;return(t=e.pools)==null?void 0:t.call(e,o)})}function Yt(){return rt.size>0}function Qt(o){let e=[];for(let t of rt.values())try{e.push(...o(t.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed`,n)}return e}function yu(o,e,t){let n=o.filter(l=>Number.isFinite(l));if(n.length<2)return"";let r=Math.min(...n),a=Math.max(...n)-r||1,s=l=>Math.round(l*10)/10;return n.map((l,u)=>`${s(u/(n.length-1)*e)},${s(t-1-(l-r)/a*(t-2))}`).join(" ")}function vu(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let t=Math.min(1,Math.max(0,e))*(o.length-1),n=Math.min(o.length-2,Math.floor(t)),r=t-n,[i,a]=[o[n],o[n+1]];return[i[0]+(a[0]-i[0])*r,i[1]+(a[1]-i[1])*r,i[2]+(a[2]-i[2])*r]}function wu(o){let e=[];for(let t of o){let n=t.points;if(n.length<2)continue;let r=[],i=0;for(let l=1;l<n.length;l++){let u=Math.hypot(n[l][0]-n[l-1][0],n[l][1]-n[l-1][1],n[l][2]-n[l-1][2]);r.push(u),i+=u}if(i<.01)continue;let a=t.colors.length===n.length,s=0;for(let l=1;l<n.length;l++){let u=r[l-1];if(u<.005)continue;let c=a?vu([t.colors[l-1],t.colors[l]],.5):vu(t.colors,(s+u/2)/i);e.push({floorId:t.floorId,a:[...n[l-1]],b:[...n[l]],dist:s,power:Math.max(0,t.flow),color:c,...t.width?{width:Math.min(3,Math.max(.5,t.width))}:{},...t.look==="pipe"?{pipe:!0}:{},...t.views==="house"?{house:!0}:t.views==="floor"?{floor:!0}:{}}),s+=u}}return e}function xu(o){return o&&[...o].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(o)?o:null}function ku(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function yr(o,e){return(o??[]).filter(t=>!e||!t.minor)}var rm=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],im=[2200,2700,3200,4e3,5e3,6500],am=["hs","rgb","rgbw","rgbww","xy"],sm=4,lm=16,cm=32,dm=128;function _a(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>am.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function va(o){return((o.attributes.supported_features??0)&sm)!==0&&typeof o.attributes.current_position=="number"}var ba=class extends ve{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{L(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return b`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?b`<img src=${n} alt=${Y(this.hass,this.entity)} />`:b`<span class="qm-note">${Ee(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return T(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:Y(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}cover(e,t){let n=ui(e,t);this.call("cover",n.service,n.data)}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){Pe(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,r)=>{let i=r/t*Math.PI*2-Math.PI/2;return b`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${n}</div>`})}renderLight(e){let t=_a(e),n=e.state==="on",r=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,i=t.color?rm.map(a=>b`<button class="qm-swatch" style="background:rgb(${a.join(",")})" aria-label=${`RGB ${a.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:a})}></button>`):t.temp?im.map(a=>b`<button class="qm-swatch" style="background:${um(a)}" aria-label=${`${a} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:a})}></button>`):[];return b`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${r} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?b`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,r))}
            aria-label=${this.t("brightness")}
            @change=${a=>this.call("light","turn_on",{brightness_pct:Number(a.target.value)})}
          />`:x}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",r=va(e),i=(c,d,p,h=!1)=>b`<button class="qm-swatch qm-slot ${h?"qm-slot-on":""}" aria-label=${d} @click=${p}>${c}</button>`,a=c=>t!==null&&Math.abs(t-c)<3,s=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.cover(e,"open"),a(100)),...r?[75,50].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),a(c))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.cover(e,"close"),a(0)),...r?[25].map(c=>i(`${c}`,`${c} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:c}),a(c))):[],i("\u25A0",this.t("cover_stop"),()=>this.cover(e,"stop"),n)],l=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null,u=t!==null?100-t:l!==null?100-l:e.state==="closed"?100:0;return b`<div class="qm-ring">
        ${this.ring(s)}
        <button
          class="qm-power qm-blind ${u<100?"qm-on":""}"
          style="--closed:${u}%"
          aria-label=${n?this.t("cover_stop"):u>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.cover(e,"stop"):this.ask()&&this.cover(e,u>50?"open":"close")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:Ee(this.hass,e)}</b>
        </button>
      </div>
      ${r?b`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${c=>this.call("cover","set_cover_position",{position:Number(c.target.value)})}
          />`:x}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&dm&&n!==null?b`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(r.target.value)})}
      /></label>`:Co(e)?b`<div class="qm-tilt-buttons">
        ${t&lm?b`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:x}
        ${t&cm?b`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:x}
      </div>`:x}renderCar(e){let t=e.entities,n=(d,p,h,f={})=>{this.hass.callService(d,p,{entity_id:h,...f})},r=t.lock,i=!!r&&r.startsWith("lock."),a=d=>/^(switch|input_boolean|fan|light)\./.test(d),s=t.climate,l=!!s&&s.startsWith("climate."),u=t.charging&&a(t.charging)?t.charging:null,c=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return b`<p class="qm-car-line">${c||Ee(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${i||r&&a(r)?b`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(i?n("lock","unlock",r):n("homeassistant","turn_off",r)):i?n("lock","lock",r):n("homeassistant","turn_on",r)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:x}
        ${s?b`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",s)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:x}
        ${u?b`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",u)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:x}
        ${!i&&!s&&!u?b`<p class="qm-note">${this.t("car_no_controls")}</p>`:x}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",r=e.state==="off"||e.state==="standby",i=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,a=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),s=typeof t.entity_picture=="string"?t.entity_picture:null;return b`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${s?`background-image:url(${s})`:""} @click=${()=>this.call("media_player",r?"turn_on":n?"media_pause":"media_play")}>
          <span>${r?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${a?b`<p class="qm-media-title">${a}</p>`:x}
      ${i!==null?b`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(i)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:x}
      ${this.renderPlay(e)}`}renderPlay(e){if(!V("sound"))return x;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return x;let r=e.attributes.source;return b`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(i=>b`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:i.type,media_content_id:i.content})}>
            ▶ ${i.label}
          </button>`)}
        ${t.map(i=>b`<button class="qm-chip ${i===r?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:i})}>${i}</button>`)}
      </div>`}renderDoorLock(e){let t=e.state==="locked"||e.state==="locking"||e.state==="jammed",n=Y(this.hass,this.entity),r=()=>{confirm(this.t(t?"door_unlock_confirm":"door_lock_confirm",{name:n}))&&(this.call("lock",t?"unlock":"lock"),this.close())};return b`<p class="qm-car-line">${Ee(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${t?"qm-slot-on":""}" @click=${r}>${t?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return b`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${Ee(this.hass,e)}</b>
      </button>
    </div>`}render(){var r;let e=(r=this.hass)==null?void 0:r.states[this.entity];if(!e)return x;let t=L(this.entity),n=this.car?this.renderCar(this.car):X(e)?b`<p class="qm-note">${Ee(this.hass,e)}</p>`:this.doorLock&&t==="lock"?this.renderDoorLock(e):t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&V("sound")?this.renderMedia(e):this.renderToggle(e);return b`<div class="qm" role="dialog" aria-label=${Y(this.hass,this.entity)}>
      <div class="qm-title">${Y(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Ce,Me`
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
    `]};function um(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,r)=>Math.round(n+(r-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",ba);var pm=new URL(import.meta.url),hm=new URL("./neonplan3d-3d.js?v=51f23a8906b3",pm).href,$u;function fo(){return $u??=import(hm),$u}var ya;function wa(){let o=new URL("./neonplan3d-fun.js?v=2a3bea79c1b9",new URL(import.meta.url)).href;return ya??=import(o).catch(e=>{throw ya=void 0,e}),ya}function Su(o,e){let t=o.points,n=t[e],r=t[(e+1)%t.length],i=Math.hypot(r[0]-n[0],r[1]-n[1])||1,a=[(r[0]-n[0])/i,(r[1]-n[1])/i],s=[-a[1],a[0]],l=[(n[0]+r[0])/2,(n[1]+r[1])/2];B([l[0]+s[0]*.02,l[1]+s[1]*.02],t)||(s=[-s[0],-s[1]]);let u=[s[1],-s[0]];return{a:n,b:r,u:a,n:s,length:i,rightward:a[0]*u[0]+a[1]*u[1]>0}}function wr(o,e){let t=e[0]-o.a[0],n=e[1]-o.a[1];return{s:t*o.u[0]+n*o.u[1],d:t*o.n[0]+n*o.n[1]}}function xa(o,e,t){return[o.a[0]+o.u[0]*e+o.n[0]*t,o.a[1]+o.u[1]*e+o.n[1]*t]}var fm=.45;function Mu(o,e){let t=[];for(let n of e.openings){if(n.wall)continue;let r=e.rooms.find(s=>s.id===n.room_id);if(!r||n.edge>=r.points.length)continue;let{s:i,d:a}=wr(o,Uo(r,n.edge,n.offset));Math.abs(a)>.4||i<-.05||i>o.length+.05||t.push(mm(n,i))}return t}function mm(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function Pu(o,e,t,n=fm){let r=[];for(let i of e.furniture){if(i.type==="stairwell"||i.type==="parking")continue;let a=B([i.x,i.z],t.points),s=Ht(i).map(h=>wr(o,h)),l=Math.min(...s.map(h=>h.d)),u=Math.min(...s.map(h=>h.s)),c=Math.max(...s.map(h=>h.s)),d=wr(o,[i.x,i.z]);if(!a&&d.d<=0||d.d<=0||l>n||l<-.3||c<.02||u>o.length-.02)continue;let p=_e(e,i);r.push({kind:"furniture",id:i.id,s0:u,s1:c,y0:p,y1:p+i.h,d:l})}return r}var Iu=.3;function mo(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,r=o.height??Iu,i=[];if(o.heights)t&&i.push([t.x,t.y,t.z]),o.points.forEach(([a,s],l)=>{var u;return i.push([a,((u=o.heights)==null?void 0:u[l])??r,s])}),n&&i.push([n.x,n.y,n.z]);else{if(!t||!n)return[];i.push([t.x,t.y,t.z],[t.x,r,t.z]);for(let[a,s]of o.points)i.push([a,r,s]);i.push([n.x,r,n.z],[n.x,n.y,n.z])}return i.filter((a,s)=>s===0||ka(a,i[s-1])>.001)}function ka(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function xr(o){let e=0;for(let t=1;t<o.length;t++)e+=ka(o[t-1],o[t]);return e}function kr(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[r,i]=[o[n-1],o[n]],a=ka(r,i);if(!(a<1e-6)){if(t<=a||n===o.length-1){let s=Math.min(1,t/a),l=[(i[0]-r[0])/a,(i[1]-r[1])/a,(i[2]-r[2])/a];return{p:[r[0]+(i[0]-r[0])*s,r[1]+(i[1]-r[1])*s,r[2]+(i[2]-r[2])*s],dir:l,seg:n-1}}t-=a}}return null}function Jt(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function gm(o,e){let{w:t,d:n,h:r}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,r*.55,0]:e==="pressure"?[t*.05,r*.9,0]:null;if(o.type==="pool_filter"){let i=Math.min(t,n)/2;if(o.variant==="side6"){let l=i+.08;return e==="pump"?[l,r*.6,0]:e==="return"?[l+.06,r*.48,0]:e==="waste"?[l,r*.36,0]:null}let a=r*.89,s=i*.45+.04;return e==="pump"?[-s,a,0]:e==="return"?[s,a,0]:e==="waste"?[0,a,-s]:null}if(o.type==="pool_heat_pump"){let i=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let a=e==="in"?r*.25:r*.45;return i==="back"?[e==="in"?-t*.15:t*.15,a,-n/2-.04]:[(i==="left"?-1:1)*(t/2+.04),a,-n*.2]}return null}function Eu(o,e){let t=gm(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[r,i]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*r-t[2]*i,y:t[1],z:o.z+t[0]*i+t[2]*r}}function go(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}function Tu(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}var $a=[.25,.7,1],bm=900;function zu(o,e,t,n=r=>r){let r=[];for(let i of o){let a=n(mo(i,t),i);if(a.length<2)continue;let s=e.get(i.id),l=(s==null?void 0:s.color)??$a,u=0;for(let c=1;c<a.length;c++){let[d,p]=[a[c-1],a[c]],h=Math.hypot(p[0]-d[0],p[1]-d[1],p[2]-d[2]);h<.01||(r.push({floorId:i.floor_id,a:d,b:p,dist:u,power:s!=null&&s.active?bm:0,color:l}),u+=h)}}return r}function $r(o,e,t){let n=t.pool??{},r=an(e,t);return i=>{var u,c;let{kind:a,id:s,port:l}=Jt(i);if(a==="port"){let d=(u=n.ports)==null?void 0:u.find(h=>h.id===s);if(!d)return null;let p=d.kind==="skimmer"?r-(d.depth??0):d.kind==="drain"?Un(e,t)+.03:d.kind==="inlet"?r-(d.depth??.3):.02;return{x:d.x,z:d.z,y:p}}if(a==="joint"){let d=(c=n.joints)==null?void 0:c.find(p=>p.id===s);return d?go(d,l):null}if(a!=="dev")return null;for(let d of o.floors){let p=d.furniture.find(g=>g.id===s);if(!p||!fl.includes(p.type))continue;let h=l?Eu(p,l):null,f=d.elevation-e.elevation;if(h)return{...h,y:h.y+_e(d,p)+f};let m=p.type==="pool_filter"?p.h*.88:p.type==="pool_dosing"?.95:p.type==="pool_valve"?ml:p.type==="pool_pump"?.2:.3;return{x:p.x,z:p.z,y:m+_e(d,p)+f}}return null}}function Sa(o,e,t,n){let r=c=>{var h,f,m;let{kind:d,id:p}=Jt(c);return d==="port"?(m=(f=(h=t.pool)==null?void 0:h.ports)==null?void 0:f.find(g=>g.id===p))==null?void 0:m.kind:void 0},i=c=>r(c)==="drain",a=c=>r(c)==="inlet"||r(c)==="skimmer",s=c=>{if(c.length<2)return c;let d=c[0],p=Ma(t,[d[0],d[2]]);if(!p)return c;let h=[d[0]+p[0]*.35,d[1],d[2]+p[1]*.35],f=1;for(;f<c.length&&Math.hypot(c[f][0]-d[0],c[f][2]-d[2])<.01;)f++;let m=c.slice(f).map(_=>[..._]);for(let _=0;_<m.length-1;_++){let w=(m[_][0]-d[0])*p[0]+(m[_][2]-d[2])*p[1];if(w>=.349999)break;m[_][0]+=p[0]*(.35-w),m[_][2]+=p[1]*(.35-w)}let g=m[0]??c[c.length-1];return[d,h,[h[0],g[1],h[2]],...m]},l=c=>{if(c.length<2)return c;let d=c[0];if(!B([d[0],d[2]],t.points))return c;let p=Un(n,t)-.15,h=c.findIndex((_,w)=>w>0&&Math.hypot(_[0]-d[0],_[2]-d[2])>.01);if(h<0)return c;let f=c[h],m=[f[0],f[2]];for(let _=0;_<t.points.length;_++){let w=t.points[_],v=t.points[(_+1)%t.points.length],k=_m([d[0],d[2]],[f[0],f[2]],w,v);k&&(m=k)}let g=Math.hypot(m[0]-d[0],m[1]-d[2])>1e-6?[m[0]+(m[0]-d[0])*.02,m[1]+(m[1]-d[2])*.02]:m;return[d,[d[0],p,d[2]],[g[0],p,g[1]],[g[0],f[1],g[1]],...c.slice(h)]},u=o;return e.from&&i(e.from)&&(u=l(u)),e.to&&i(e.to)&&(u=l([...u].reverse()).reverse()),e.from&&a(e.from)&&(u=s(u)),e.to&&a(e.to)&&(u=s([...u].reverse()).reverse()),u}function Ma(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let i=0;i<t.length;i++){let a=t[i],s=t[(i+1)%t.length];n+=a[0]*s[1]-s[0]*a[1]}let r=null;for(let i=0;i<t.length;i++){let a=t[i],s=t[(i+1)%t.length],l=s[0]-a[0],u=s[1]-a[1],c=Math.hypot(l,u);if(c<1e-6)continue;let d=Math.max(0,Math.min(1,((e[0]-a[0])*l+(e[1]-a[1])*u)/(c*c))),p=Math.hypot(a[0]+l*d-e[0],a[1]+u*d-e[1]),h=n>0?[u/c+0,-l/c+0]:[-u/c+0,l/c+0];(!r||p<r.d)&&(r={d:p,n:h})}return r?r.n:null}function _m(o,e,t,n){let r=[e[0]-o[0],e[1]-o[1]],i=[n[0]-t[0],n[1]-t[1]],a=r[0]*i[1]-r[1]*i[0];if(Math.abs(a)<1e-9)return null;let s=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/a,l=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/a;return s>=0&&s<=1&&l>=0&&l<=1?[o[0]+r[0]*s,o[1]+r[1]*s]:null}var ze=o=>Math.round(o*1e3)/1e3;var Cu=-.3;function Ru(o,e,t,n,r){var g;let i=[],a=[],s=_=>e(_),l=[],u=o.from,c=[];for(let _ of o.vias){if(_.kind!=="hole"){c.push(_.kind);continue}let w=t.find(y=>y.id===_.joint),v=s(u);if(!w||!v)continue;let k=s(`joint:${w.id}:inside`),S=s(`joint:${w.id}:outside`),M=_.dir?_.dir==="out":Math.hypot(v.x-k.x,v.z-k.z)<=Math.hypot(v.x-S.x,v.z-S.z);l.push({a:u,b:`joint:${w.id}:${M?"inside":"outside"}`,fits:c}),c=[],u=`joint:${w.id}:${M?"outside":"inside"}`}let d=o.to;if(d.length>1){let _=s(u),w=d.map(s).filter(v=>!!v);if(_&&w.length===d.length){let v=w.reduce((q,A)=>q+A.x,0)/w.length,k=w.reduce((q,A)=>q+A.z,0)/w.length,S=Math.hypot(_.x-v,_.z-k)||1,M=Math.min(1,S/2)/S,y=_.y<0||w.some(q=>q.y<0),C={id:r("joint"),kind:"tee",x:ze(v+(_.x-v)*M),z:ze(k+(_.z-k)*M),y:y?Cu:ze(_.y)};a.push(C),l.push({a:u,b:`joint:${C.id}:in`,fits:c}),c=[],d.forEach((q,A)=>l.push({a:`joint:${C.id}:out${A+1}`,b:q,fits:[]})),d=[]}}d.length&&l.push({a:u,b:d[0],fits:c});let p=_=>{let{kind:w,id:v,port:k}=Jt(_),S=w==="joint"?a.find(M=>M.id===v):void 0;return S?go(S,k):s(_)},h=_=>n(_)==="source",f=_=>n(_)==="sink",m=o.to.some(h)&&!h(o.from)||f(o.from)&&!o.to.some(f);for(let _ of l){let w=p(_.a),v=p(_.b);if(!w||!v)continue;let k=vm(w,v,Au(_.a,t),Au(_.b,t)),S={id:r("pipe"),from:_.a,to:_.b,floor_id:o.floorId,points:k.map(y=>[y[0],y[2]]),heights:k.map(y=>y[1])},M=xr(mo(S,p));S.fittings=_.fits.map((y,C)=>({id:r("fit"),kind:y,at:ze(Math.min(M/2,.4+C*.25)),...y==="valve"?{open:!0}:{}})),m&&(S={...S,from:S.to,to:S.from,points:[...S.points].reverse(),heights:[...S.heights??[]].reverse(),fittings:(g=S.fittings)==null?void 0:g.map(y=>({...y,at:ze(Math.max(0,M-y.at))}))}),i.push(S)}return{pipes:i,joints:a}}function Au(o,e){let{kind:t,id:n,port:r}=Jt(o),i=t==="joint"&&r==="outside"?e.find(a=>a.id===n):void 0;return(i==null?void 0:i.kind)==="wall"?[-(i.nx??0),-(i.nz??0)]:null}function vm(o,e,t=null,n=null){let r=o.y<0||e.y<0?Cu:ze(Math.max(o.y,e.y)),i=[],[a,s]=[o.x,o.z];t&&([a,s]=[ze(a+t[0]*.5),ze(s+t[1]*.5)],i.push([a,ze(o.y),s]));let[l,u]=[e.x,e.z],c=[];return n&&([l,u]=[ze(l+n[0]*.5),ze(u+n[1]*.5)],c.push([l,ze(e.y),u])),i.push([ze(a),r,ze(s)]),Math.abs(l-a)>.01&&i.push([ze(l),r,ze(s)]),Math.abs(u-s)>.01&&i.push([ze(l),r,ze(u)]),i.push(...c),i.filter((d,p)=>p===0||Math.hypot(d[0]-i[p-1][0],d[1]-i[p-1][1],d[2]-i[p-1][2])>.001)}var ym=2e3;function Fu(o){return Math.max(0,ym-o)}var Hu=120;var Ou="neonplan3d.gpu_lost",Sr="1.24.0";function Lu(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function Pa(o,e=Lu()){try{return!!e&&e.getItem(Ou)===o}catch{return!1}}function ju(o,e,t,n,r=Lu()){if(n||t-e>2e4||t<e||!r)return!1;try{return r.setItem(Ou,o),!0}catch{return!1}}function Du(o,e,t,n=12,r=180){let i=Math.max(r,e),a=Math.max(r*.5625,t),s={cols:1,tile:Math.min(i,a*16/9)};for(let l=1;l<=Math.max(1,o);l++){let u=Math.ceil(o/l),c=(i-n*(l-1))/l,d=(a-n*(u-1))/u*16/9,p=Math.min(c,d);(p>s.tile||l===1)&&(s={cols:l,tile:p})}if(s.tile<r){let l=Math.max(1,Math.floor((i+n)/(r+n)));return{cols:Math.min(l,Math.max(1,o)),tile:r}}return{cols:s.cols,tile:Math.floor(s.tile)}}function Ia(o,e,t){var C,q,A,P;let n=[...t.openings.values()].flatMap($=>[$.cover,$.contact,$.tilt,$.contact2??null,$.tilt2??null,$.position??null,$.tiltAngle??null,$.lock??null]),r=$d(e),i=r.filter($=>L($)==="camera").flatMap($=>ot(o,$)),a=r.map($=>co(o,$)),s=e.energy,l=e.presence.flatMap($=>[$.person,$.sensor]),u=e.floors.flatMap($=>$.rooms.flatMap(E=>xe(o,E.area_id).filter(R=>L(R)==="light"))),c=[...t.furniture.values()].flatMap($=>[$.entity,$.power]),d=e.floors.flatMap($=>$.furniture.flatMap(E=>[E.state_entity??null,E.state_entity2??null,E.color_entity??null])),p=e.floors.flatMap($=>$.furniture.flatMap(E=>[E.door_left??null,E.door_right??null,E.soc??null,E.status??null,E.charge??null,E.export??null])),h=(((C=e.settings.roof)==null?void 0:C.windows)??[]).flatMap($=>[$.cover,$.contact,$.tilt]).filter($=>!!$&&$!=="none"),f=[...(((q=e.settings.roof)==null?void 0:q.solar)??[]).map($=>$.entity),...(((A=e.settings.roof)==null?void 0:A.strings)??[]).map($=>$.entity)].filter($=>!!$&&$!=="none"),m=e.floors.flatMap($=>$.furniture.filter(E=>E.type==="robot_vacuum").map(E=>{var R;return Xn(o,((R=t.furniture.get(E.id))==null?void 0:R.entity)??null,E.room_sensor)})),g=e.floors.flatMap($=>$.furniture.flatMap(E=>(E.pictures??[]).flatMap(R=>[R.entity,...R.image.startsWith("camera:")?[R.image.slice(7)]:[]]))),_=t.heat?e.floors.flatMap($=>$.rooms.flatMap(E=>xe(o,E.area_id).filter(R=>R.startsWith("sensor.")))):[],w=[...ou(e.floors),...V("auto_pro")?Xl(o,e.floors):[]],v=ho(o,e).map($=>$.entity),k=V("household")?[...e.floors.flatMap($=>$.furniture.flatMap(xc)),((P=e.settings.household)==null?void 0:P.notes)??null].filter($=>!!$&&$!=="none"):[],S=e.floors.flatMap($=>$.furniture.flatMap(E=>{var R,j;return E.type==="access_point"?Object.values(Wn(o,{entity:((R=t.furniture.get(E.id))==null?void 0:R.entity)??E.entity})):E.type==="water_heater"?Object.values(Bn(o,{entity:((j=t.furniture.get(E.id))==null?void 0:j.entity)??E.entity})):E.type==="lamp_ceiling_fan"?[E.fan_entity??null]:E.type==="wall_switch"?[...ln(E),To(E)]:E.type==="wall_socket"?cn(E).flatMap(N=>[N.entity,N.power]):[]})),M=ut(o,t.weatherEntityId??e.settings.weather_entity),y=[...S,...r,...i,...n,...a,...c,...d,...p,...m,...h,...f,...g,s.grid,s.solar,s.battery,s.battery_soc,s.consumption,s.tariff,...l,...u,..._,...t.warnings,...w,...v,...k,M,"sun.sun"];return[...new Set(y.filter($=>!!$))]}var Vu=/^#[0-9a-f]{3,8}$/i;function wm(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function Nu(o){if(!o||!o.kind)return null;let e=o.color&&Vu.test(o.color)?o.color:"#0b1426",t=o.color2&&Vu.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${t})`;let n=wm(o.image);if(!n)return null;let r=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${r}), rgba(4, 8, 16, ${r})), url("${n}") center / cover no-repeat`}var Ea;function ft(){let o=new URL("./neonplan3d-voice.js?v=bc99c93223f2",new URL(import.meta.url)).href;return Ea??=import(o).catch(e=>{throw Ea=void 0,e}),Ea}function Mr(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("neonplan3d.mic","1"),sessionStorage.getItem("neonplan3d.mic")==="1"}catch{return!1}}function Aa(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function Ta(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function mt(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function za(){try{return localStorage.getItem("neonplan3d.voiceArea")}catch{return null}}function Pr(){try{sessionStorage.removeItem("neonplan3d.mic")}catch{}}var xm=[[/KFTRWI|KFTRPWI|KFMAWI|KFSNWI|KFTUWI/,"Fire HD 10"],[/KFONWI|KFRAWI|KFRAPWI|KFTBWI|KFDOWI/,"Fire HD 8"],[/KFQUWI|KFMUWI|KFKAWI|KFGIWI/,"Fire 7"]];function qu(o=typeof navigator>"u"?"":navigator.userAgent){var i,a,s;if(!o)return null;let e=/Fully/i.test(o)?"Fully Kiosk":/Home ?Assistant/i.test(o)?"HA app":/Silk\//.test(o)?"Silk":/Edg\//.test(o)?"Edge":/Firefox\//.test(o)?"Firefox":/Chrome\//.test(o)?"Chrome":/Safari\//.test(o)?"Safari":null,r=[((i=xm.find(([l])=>l.test(o)))==null?void 0:i[1])??(/KF[A-Z]{2,5}WI|Silk\//.test(o)?"Fire tablet":null)??(/iPad/.test(o)?"iPad":/iPhone/.test(o)?"iPhone":/Android/.test(o)?((s=(a=/Android [\d.]+; ([^;)]+?)(?: Build|\))/.exec(o))==null?void 0:a[1])==null?void 0:s.trim())??"Android":/Windows/.test(o)?"Windows":/Mac OS X/.test(o)?"Mac":/Linux/.test(o)?"Linux":null),e].filter(Boolean).join(" \xB7 ");return r?r.slice(0,80):null}var km=.25,Wu=o=>Math.round(o*1e3)/1e3;function Ca(o,e,t,n,r){let i=o.rooms.find(a=>a.points.length>=3&&B([e,t],a.points));return!i||B([n,r],i.points)?[n,r]:B([n,t],i.points)?[n,t]:B([e,r],i.points)?[e,r]:[e,t]}function Bu(o,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let i=[(n[0]-t[0])/r,(n[1]-t[1])/r],a=l=>Math.abs(-(l[0]-t[0])*i[1]+(l[1]-t[1])*i[0]),s=l=>(l[0]-t[0])*i[0]+(l[1]-t[1])*i[1];return o.rooms.some(l=>l.id!==e&&l.points.some((u,c)=>{let d=l.points[(c+1)%l.points.length];return a(u)>.02||a(d)>.02?!1:Math.min(r,Math.max(s(u),s(d)))-Math.max(0,Math.min(s(u),s(d)))>.05}))}function Uu(o,e,t,n=km){let r=o.rooms.find(u=>u.points.length>=3&&B([e.x,e.z],u.points));if(!r)return null;let i=r.points,a=qe(i)>=0?1:-1,s=t/2,l=null;for(let u=0;u<i.length;u++){let c=i[u],d=i[(u+1)%i.length],p=Math.hypot(d[0]-c[0],d[1]-c[1]);if(p<.3)continue;let h=[(d[0]-c[0])/p,(d[1]-c[1])/p],f=[-h[1]*a,h[0]*a],m=(e.x-c[0])*h[0]+(e.z-c[1])*h[1];if(m<0||m>p)continue;let _=o.rooms.some(C=>C.id!==r.id&&C.points.some((q,A)=>{let P=C.points[(A+1)%C.points.length],$=Math.abs((q[0]-c[0])*f[0]+(q[1]-c[1])*f[1]),E=Math.abs((P[0]-c[0])*f[0]+(P[1]-c[1])*f[1]);return $<.02&&E<.02}))?s:0,w=(e.x-c[0])*f[0]+(e.z-c[1])*f[1]-_,v=Math.atan2(-f[0],f[1])*180/Math.PI,k=C=>Math.abs((e.rotation-C+540)%360-180),M=[{rotation:v,extent:e.d/2},{rotation:v+90,extent:e.w/2},{rotation:v-90,extent:e.w/2}].reduce((C,q)=>k(q.rotation)<k(C.rotation)?q:C);if(k(M.rotation)>50)continue;let y=w-M.extent;Math.abs(y)>n||l&&Math.abs(y)>=Math.abs(l.gap)||(l={x:Wu(e.x-f[0]*y),z:Wu(e.z-f[1]*y),rotation:(Math.round(M.rotation)%360+360)%360,gap:y})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function $m(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var Ra={walls(o,e,t){let n=o.floors.find(i=>i.id===e),r=n==null?void 0:n.rooms.find(i=>i.id===t);return!n||!r||r.points.length<3?[]:r.points.map((i,a)=>{let s=Su(r,a),l=Bu(n,r.id,s.a,s.b),u=[...Pu(s,n,r).map(c=>[c.s0,c.s1]),...Mu(s,n).filter(c=>c.y0<.05).map(c=>[c.s0,c.s1])];return{roomId:r.id,edge:a,a:s.a,b:s.b,u:s.u,n:s.n,length:s.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:u}})},onWall(o,e,t){return xa($m(o),e,t)},freeSpot(o,e,t=.1){let n=i=>i>=t&&i+e<=o.length-t&&!o.taken.some(([a,s])=>i<s+.05&&i+e>a-.05),r=o.length/2-e/2;for(let i=0;i<=o.length;i+=.05){if(n(r-i))return Math.round((r-i)*100)/100;if(n(r+i))return Math.round((r+i)*100)/100}return null},nodeAt(o,e,t){let n=o.floors.find(s=>s.id===e),r=n==null?void 0:n.outdoor.find(s=>s.id===t);if(!n||!r)return()=>null;let i=$r(o,n,r),a=r.pool??{};return s=>{let{kind:l,id:u,port:c}=Jt(s),d=l==="joint"?(a.joints??[]).find(h=>h.id===u):void 0;if(d)return go(d,c);let p=l==="port"?(a.ports??[]).find(h=>h.id===u):void 0;return p?i(s)??{x:p.x,y:.02,z:p.z}:i(s)}},connect(o,e,t,n,r,i){var l;let a=o.floors.find(u=>u.id===e),s=a==null?void 0:a.outdoor.find(u=>u.id===t);return!a||!s?{pipes:[],joints:[]}:Ru({...n,floorId:e},Ra.nodeAt(o,e,t),((l=s.pool)==null?void 0:l.joints)??[],r,i)}};var Ir=30,Sm=10,Mm=600,Ku={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},Pm={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},Im=2e4,Em=3*6e4,Fa=new Set(["unavailable","unknown",""]),Am="neonplan3d.director";function Ha(){try{return localStorage.getItem(Am)==="1"}catch{return!1}}function Yu(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var Tm=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Qu(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(t=>{let n=o.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let r=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return Tm.test(r)}).sort()}function Oa(o,e,t=Date.now()){if(!o||!e||Fa.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let n=Date.parse(e.state);return Number.isFinite(n)&&t-n<3e4}return o.state==="off"&&e.state==="on"}var Gu=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function Ju(o,e,t=Date.now()){return!o||!e||Fa.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?Oa(o,e,t):Fa.has(o.state)?!1:Gu.has(e.state)&&!Gu.has(o.state)}function Xu(o,e,t,n){var c;if(n)return n;let r=o.entities??{},i=(c=r[e])==null?void 0:c.device_id,a=t.filter(d=>d.startsWith("camera.")),s=i?a.find(d=>{var p;return((p=r[d])==null?void 0:p.device_id)===i}):void 0;if(s)return s;let l=d=>Oe(o,d),u=l(e);return u&&a.find(d=>l(d)===u)||null}var bo=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,t,n){let r=this.seen.has(e),i=this.seen.get(e);return this.seen.set(e,t),r&&i!==t&&n(i,t)}stopped(e,t,n){let r=this.runs.get(e);return t?(r!=null&&r.run||this.runs.set(e,{run:!0,since:n,ran:!0}),!1):!r||r.run?(this.runs.set(e,{run:!1,since:n,ran:!!(r!=null&&r.run)}),!1):r.ran&&n-r.since>=Em?(r.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,t,n=Ir){let r=this.shown.get(e.key);if(r!==void 0&&t-r<Pm[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&t-this.touchedAt<Im)return!1;let a=this.current;if(a&&t<a.until&&Ku[a.shot.kind]>Ku[e.kind])return!1;let s=Math.min(Mm,Math.max(Sm,n))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:t,until:t+s,touched:!1},this.shown.set(e.key,t),!0}due(e){let t=this.current;return!t||e<t.until?null:(this.current=null,{shot:t.shot,back:!t.touched})}clear(){this.current=null}};var Te=Math.PI/180,Er=-.833;function zm(o,e,t){let n=(o/864e5+24405875e-1-2451545)/36525,r=((280.46646+n*(36000.76983+n*3032e-7))%360+360)%360,i=357.52911+n*(35999.05029-1537e-7*n),a=.016708634-n*(42037e-9+1267e-10*n),s=Math.sin(i*Te)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*i*Te)*(.019993-101e-6*n)+Math.sin(3*i*Te)*289e-6,l=125.04-1934.136*n,u=r+s-.00569-.00478*Math.sin(l*Te),d=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*Te),p=Math.asin(Math.sin(d*Te)*Math.sin(u*Te)),h=Math.tan(d/2*Te)**2,f=4*(h*Math.sin(2*r*Te)-2*a*Math.sin(i*Te)+4*a*h*Math.sin(i*Te)*Math.cos(2*r*Te)-.5*h*h*Math.sin(4*r*Te)-1.25*a*a*Math.sin(2*i*Te))/Te,m=new Date(o),w=(((m.getUTCHours()*60+m.getUTCMinutes()+m.getUTCSeconds()/60+f+4*t)%1440+1440)%1440/4-180)*Te,v=e*Te,k=Math.sin(v)*Math.sin(p)+Math.cos(v)*Math.cos(p)*Math.cos(w),S=90-Math.acos(Math.min(1,Math.max(-1,k)))/Te;return{azimuth:(Math.atan2(Math.sin(w),Math.cos(w)*Math.sin(v)-Math.tan(p)*Math.cos(v))/Te+180+360)%360,elevation:S}}function Zu(o,e,t){let n=new Date(o);n.setHours(0,0,0,0);let r=n.getTime(),i=10*6e4,a=d=>({...zm(d,e,t),t:d}),s=[],l=null,u=null,c=a(r);for(let d=r+i;d<=r+24*36e5;d+=i){let p=a(d),h=p.elevation>Er,f=c.elevation>Er;if(h!==f){let m=c.t,g=p.t;for(let w=0;w<12;w++){let v=(m+g)/2;a(v).elevation>Er===f?m=v:g=v}let _=a(Math.round((m+g)/2));h?(l??=_,s.push(_)):(u=_,s.push(_))}h&&s.push(p),c=p}return!l&&s.length&&a(r).elevation>Er&&s.unshift(a(r)),{points:s,rise:l,set:u}}function ep(o,e){var t;return String(e&&((t=o.states[e])==null?void 0:t.attributes.unit_of_measurement)||"m\xB3")}function Rm(o,e){return b`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${lt`<polyline points=${yu(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function Fm(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${oe(o,e*1e3,0)} l`:`${oe(o,e,e<10?2:0)} ${t}`}var Hm=12e4,Om=600*1e3,tp={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Lm='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',jm='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function np(o){return o.fan_entity&&o.fan_entity!=="none"?o.fan_entity:null}function Dm(o){if(!o||!tt(o))return 0;let e=o.attributes.percentage;return typeof e=="number"?Math.max(.15,e/100):1}var Vm=[.35,.95,1],Nm=[1,.3,.2];function Ar(o,e,t){var n;return((n=o.rooms.find(r=>r.points.length>=3&&B([e,t],r.points)))==null?void 0:n.id)??null}function qm(o,e){var n;let t=e.action==="more_info"?e.target:(n=e.data)==null?void 0:n.entity_id;return typeof t=="string"&&tt(o.states[t])}function Wm(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Bm(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function op(o,e){let t=a=>a&&a!=="none"?a:null,n=dt(o,{cover:t(e.cover),contact:t(e.contact),tilt:t(e.tilt)},"window"),r=t(e.window)?o.states[t(e.window)]:void 0,i=n.open;if(r&&!X(r)){let a=r.attributes.current_position;i=typeof a=="number"?Math.min(1,Math.max(0,a/100)):r.state==="open"||r.state==="opening"?1:0}return{open:i,tilt:n.tilt,cover:n.cover??0}}function Um(o){let{card_templates:e,...t}=o;return JSON.stringify(t)}var rp=new Set,ip=new Set;async function Km(){let o=window.AudioContext??window.webkitAudioContext;if(!o)return;let e=new o;try{if(await Promise.race([e.resume(),new Promise(n=>setTimeout(n,300))]),e.state!=="running")return;let t=e.currentTime;for(let[n,r]of[[784,0],[523,.45]]){let i=e.createOscillator(),a=e.createGain();i.frequency.value=n,a.gain.setValueAtTime(1e-4,t+r),a.gain.exponentialRampToValueAtTime(.3,t+r+.02),a.gain.exponentialRampToValueAtTime(1e-4,t+r+.9),i.connect(a).connect(e.destination),i.start(t+r),i.stop(t+r+.95)}await new Promise(n=>setTimeout(n,1300))}finally{e.close().catch(()=>{})}}var La=class extends ve{static properties={hass:{attribute:!1},building:{attribute:!1},planId:{attribute:!1},rooms:{attribute:!1,hasChanged:(e,t)=>(e??[]).join(",")!==(t??[]).join(",")},noSave:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},plain:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},proxmoxWall:{attribute:!1},_pveFilter:{state:!0},weather:{type:Boolean},sunFx:{attribute:!1},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_camPop:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_popup:{state:!0},popupValues:{state:!0},_settingsOpen:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},template:{attribute:!1},viewKind:{attribute:!1},voiceArea:{attribute:!1},_voice:{state:!0},_announce:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;clockTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;popSeen=new Set;throughWall=!1;live=null;resizeObs=null;unsubAsk=null;voiceTimer;announceTimer;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;popupTimer;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];finished=new Vo;appliances=new Map;directing=new bo;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;winterTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.planId=null,this.rooms=null,this.noSave=!1,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.plain=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.sunFx=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._note=null,this._popup=null,this.popupValues={};try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this.template=null,this.viewKind="panel",this.voiceArea=null,this._voice=null,this._micProbe=Mr(),this._alerts=[],this._household=[],this._hhFolded=Wm("neonplan3d.hhFolded"),this._binInfo=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.proxmoxWall=!1,this._pveFilter="all",this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!(e!=null&&e.connection)||!this.isConnected||(this.unsubAsk=Os(e,t=>{this.onAsk(t)},t=>{this.onAnnounce(t)},t=>this.onReload(t),{kind:this.viewKind,screen:this.screen,template:this.template,device:qu(),version:vt,...this.planId&&this.planId!==pe?{plan:this.planId}:{}}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e==null||e.then(t=>t()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{var e;document.hidden||(e=this.holoRefetch)==null||e.call(this)};disconnectedCallback(){var e,t,n,r,i;super.disconnectedCallback(),this.watchWinter(!1),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),(e=this.pets)==null||e.dispose(),this.pets=null,this.petsFor=null,(t=this.ghost)==null||t.dispose(),this.ghost=null,(n=this.unlistenReplay)==null||n.call(this),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,(r=this.resizeObs)==null||r.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),(i=this.viewer)==null||i.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&ft().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",t=>{var i,a;let n=t;if(!((a=(i=n.target)==null?void 0:i.closest)!=null&&a.call(i,".fp3d-holo")))return;let r=this.renderRoot.querySelector("canvas");r&&(n.preventDefault(),r.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{var r;let n=(((r=t[0])==null?void 0:r.contentRect.width)??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await fo();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",r=>{var i,a;this._central&&!((a=(i=r.target)==null?void 0:i.closest)!=null&&a.call(i,".fp3d-central, .fp3d-central-btn"))&&(this._central=!1),this._info&&(this._info=null)});let n=Date.now();this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,safeFx:Pa(Sr),onContextLost:()=>ju(Sr,n,Date.now(),document.hidden),onRoomTap:(r,i)=>this.fire("room-tap",{floorId:r,roomId:i}),onFloorTap:r=>this.fire("floor-tap",{floorId:r}),floorInfo:r=>r.rooms.length===1?T(this.hass,"floor_rooms_one"):T(this.hass,"floor_rooms",{n:r.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(r,i,a)=>this.onDeviceTap(r,i,a),onDeviceHold:(r,i,a)=>this.onDeviceHold(r,i,a),onRoomDoubleTap:(r,i)=>this.onRoomDoubleTap(r,i),onDeviceSwipe:(r,i,a,s,l)=>this.onDeviceSwipe(r,i,a,s,l),onFurnitureSelect:r=>this.fire("furniture-select",{id:r}),onFurnitureMove:(r,i,a)=>this.fire("furniture-move",{id:r,x:i,z:a}),onDeviceSelect:r=>this.fire("device-select",{id:r}),onDeviceMove:(r,i,a)=>this.fire("device-move",{id:r,x:i,z:a}),onStats:r=>{this.showStats&&(this._stats=r)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((r,i,a,s,l,u)=>this.placeHolo(r,i,a,s,l,u)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...nn()]),this.hass&&ha(this.hass,nn()).then(()=>this.syncDevices(!0)),this.shownPacks=on(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.shownBuilding())),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&(cl(this.building??null),kd(this.building)),e.has("hass")&&this.hass&&uc(pc(this.hass))}updated(e){var s,l;e.has("hass")&&((s=this.live)!=null&&s.el)&&(this.live.el.hass=this.hass),(e.has("screen")||e.has("template")||e.has("viewKind")||e.has("planId"))&&this.unsubAsk&&this.hasUpdated?(this.unwatchAsk(),this.watchAsk()):e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==on()&&(this.shownPacks=on(),t.setPacks([...nn()]),this.hass&&ha(this.hass,nn()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&t.setParked(ua(this.hass,this.building)),this.syncDevices(!0));let n=e.has("building")&&this.building?Um(this.building):this.drawnPlan,r=e.has("building")&&n===this.drawnPlan;if(this.drawnPlan=n,e.has("building")&&this.building&&!r){let u=JSON.stringify(this.startViewOf()),c=this.shownStartView!==void 0&&this.shownStartView!==u;this.shownStartView=u,t.setStartView(this.startViewOf()),t.setBuilding(this.shownBuilding()),c&&this.floorId===null&&t.resetView()}else(e.has("plain")&&e.get("plain")!==void 0||e.has("rooms")&&e.get("rooms")!==void 0)&&this.building?(t.setBuilding(this.shownBuilding()),e.has("rooms")&&(this.syncDevices(!0),t.resetView())):e.has("hass")&&this.building&&da(this.hass,this.building)!==this.shownSig&&(t.setBuilding(this.shownBuilding()),this.syncDevices(!0));(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let i=["building","markerMode","heatMode","flows","alerts","dimmed"].some(u=>e.has(u))||this.markerMode==="room"&&e.has("roomId"),a=this.replayTicked&&!!this.replay;this.replayTicked=!1,(i||e.has("hass")||a)&&this.syncDevices(i,a&&(this.trail||this.detecting)),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("angleLock")&&t.setAngleLock(this.angleLock),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("hideRoof")&&t.setHideRoof(this.hideRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.effectiveTheme()),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,(l=this.replay)==null||l.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}watchWinter(e){e&&!this.winterTimer?this.winterTimer=setInterval(()=>this.syncDevices(!1,!0),6e4):!e&&this.winterTimer&&(clearInterval(this.winterTimer),this.winterTimer=void 0)}syncDevices(e,t=!1){var Ga,Ya,Qa,Ja,Xa,Za,es,ts,ns;let n=this.viewer,r=this.conditioned();if(!n||!r||!this.hass)return;let i=this.hass;if(e||!this.openingLinks||this.linkedRegistry!==i.entities){if(this.openingLinks=un(i,r.floors),yd(Ql(i,r.floors)),this.furnitureLinks=Lt(i,r.floors),this.linkedRegistry=i.entities,this.findIndex=null,this.alertSrc=this.alerts?eo(i,r,this.weatherEntityId):null,this.watchHousehold(i,r),this.watched=Ia(i,r,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?Oi(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Yt()&&(this.watched=[...new Set([...this.watched,...gu(this.sceneHost(i,r))])]),V("fun_winter")){let I=[Gt(r).roof_entity,ut(i,this.weatherEntityId??r.settings.weather_entity),"sun.sun"].filter(z=>!!z);this.watched=[...new Set([...this.watched,...I])]}e=!0}let a=e||t,s=!a;if(!a){for(let I of this.watched)if(this.shownStates.get(I)!==i.states[I]&&(a=!0,!I.startsWith("sensor."))){s=!1;break}}let l=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=((Ga=this.replay)==null?void 0:Ga.seek)??0,this.seenT=((Ya=this.replay)==null?void 0:Ya.t)??0,!a)return;if(!e&&!this.replay&&n.cameraBusy()){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},Hu);return}if(s&&this._low&&!this.replay){let I=Fu(performance.now()-this.lastSync);if(I>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},I);return}}this.lastSync=performance.now();let u=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(I=>[I,i.states[I]])),this.scene=Yt()?pu(this.sceneHost(i,r)):[];let c=Fd(i,r),d=wd(i,r),p=this.furnitureMarkers(i,r,new Set(d.map(I=>I.id)),new Set(c.map(I=>I.powerEntity)));c.push(...p.consumers),this.lastConsumers=c;let h=Hd(i,r,c,Pn(r,I=>{var z,O;return((O=(z=this.furnitureLinks)==null?void 0:z.get(I.id))==null?void 0:O.power)??null})),f=new Map(c.filter(I=>I.id!==I.powerEntity).map(I=>[I.id,I.power]));this.confirmSet=pn(i,r.floors);let m=this.trail?this.trailNow(i,r):[],g=V("camera_cockpit")&&!this.dimmed?this.detectionPins(i,d):[];this.detecting=g.length>0;let _=V("energy_pro"),w=new Set(V("auto_pro")?r.floors.flatMap(I=>I.furniture.filter(z=>z.type==="parking"&&z.car&&In(i,z)).map(z=>z.id)):[]);n.setDevices([...[...d,...p.markers,...this.lockMarkers(i,r)].map(I=>{let z=I.show==="no_power"||"energyDevice"in I&&I.energyDevice||"standby"in I&&I.standby?null:f.get(I.id)??null,O={...I,power:z,powerText:z===null?void 0:he(i,z),effect:this.dimmed?!1:I.effect},te=I.ownName&&(I.showName||this.markerNames)?I.ownName:"",F=V("sound")&&this.mediaCardUp(i,I.id)||V("auto_pro")&&!!I.furnitureId&&w.has(I.furnitureId);return{...O,pin:this.showPin(O)&&!F,full:I.show==="always"||I.full===!0,caption:te}}),...(_&&(this.flows??this._flows)&&!this.dimmed&&h.grid!==null?[this.gridPin(i,r,h.grid)]:[]).filter(I=>!!I),...g,...m.map((I,z)=>({id:`trail:${z}`,floorId:I.floorId,roomId:null,x:I.x,z:I.z,y:.3+.4*m.slice(0,z).filter(O=>O.entity===I.entity).length,icon:lu,name:Y(i,I.entity),text:br(i,I.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(r)]);for(let I of this.scene)I.kind==="marker"&&I.card&&I.furnitureId&&!p.targets.has(I.furnitureId)&&p.targets.set(I.furnitureId,`module:${I.id}`);n.setTrail(m,this.replay?this.robotPaths(i,r):[]),n.setPickTargets(p.targets,this.openingTargets()),n.setScreens(p.screens),n.setFridgeDoors(_i(i,r.floors)),n.setAwnings(Jl(i,r.floors)),n.setProjections(this.projectedCameras(i,r)),n.setRobots(this.robotInfos(i,r));let v=new Map;for(let I of((Qa=r.settings.roof)==null?void 0:Qa.windows)??[])v.set(I.id,op(i,I));n.setRoofWindows(v),n.setParked(ua(i,r));let k=new Map(r.floors.flatMap(I=>I.openings.map(z=>[z.id,z.type]))),S=new Map([...this.openingLinks].map(([I,z])=>[I,dt(i,z,k.get(I))]));n.setOpeningStates(S,l);let M=this.alertSrc?Bo(i,r,this.alertSrc,this.openingLinks):[],y=this.alerts&&Yt()?mu(this.sceneHost(i,r)).map(I=>({kind:I.kind,entity:I.entity,roomId:I.roomId,floorId:I.floorId,text:I.text,color:I.color,quiet:!I.roomId})):[];this.setAlerts([...M,...y]),clearTimeout(this.fridgeTimer);let C=V("household")&&!this.replay?Ic(r.floors.flatMap(I=>I.furniture),i):null;C!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),C+500));let q=[...d,...p.markers].map(I=>`${I.id}:${I.glow?`${I.glow.level.toFixed(1)}/${I.glow.color.map(z=>z.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...S].map(([I,z])=>`${I}:${z.open}:${z.cover===null?"-":z.cover.toFixed(1)}`).join(";");if(q!==this.thumbSig){let I=this.thumbSig==="";this.thumbSig=q,I||this.scheduleThumbs(1500)}let A=r.floors.flatMap(I=>I.furniture.filter(z=>z.type==="home_battery").map(z=>({floorId:I.id,x:z.x,z:z.z})))[0]??(r.energy.battery?r.floors.flatMap(I=>I.placements.filter(z=>z.entity_id===r.energy.battery).map(z=>({floorId:I.id,x:z.x,z:z.z})))[0]:null),P=_?Bd(i,r,h.solar):null,$=r.settings.roof.hologram??et,E=[...r.settings.roof.solar??[]].sort((I,z)=>z.rows*z.cols-I.rows*I.cols),R=r.settings.roof.strings??[],j=I=>{var z;return(I.string?(z=R.find(O=>O.id===I.string))==null?void 0:z.inverter:null)??null},N=$.plant_floor?"all":"house",J=(I,z,O,te)=>{var Ne,Cn;let F=Wt(r,I);if(!F)return null;let[Q,be]=Bt(F,I),ie=I.u+Q/2+z,le=I.v+be/2+O,Ie=[F.o[0]+F.eu[0]*ie+F.es[0]*le,F.o[1]+F.eu[1]*ie+F.es[1]*le,F.o[2]+F.eu[2]*ie+F.es[2]*le],Se=((Ne=F.wall)==null?void 0:Ne.floorId)??(F.unbounded?((Cn=r.floors.find(vo=>vo.elevation===Math.min(...r.floors.map(At=>At.elevation))))==null?void 0:Cn.id)??r.floors[0].id:[...r.floors].sort((vo,At)=>At.elevation-vo.elevation)[0].id);return{p:[Ie[0]+F.n[0]*.05,Ie[1]+F.n[1]*.05,Ie[2]+F.n[2]*.05],n:[F.n[0],F.n[1],F.n[2]],floorId:Se,size:te,roof:!0,views:N}},H=[],U=[],ne=h.grid!==null||h.battery!==null||h.solar!==null,K=$.place==="free"&&Number.isFinite($.x)&&Number.isFinite($.z),Z=_&&h.solar!==null&&!K?E.find(I=>I.id===$.field)??E[0]:void 0,W=Z?j(Z):null,de=!!Z&&!!W&&!E.some(I=>I.id!==Z.id&&j(I)===W)&&$.right===0&&$.up===0,fe=(()=>{if(!de||!Z)return 0;let I=Wt(r,Z);return I?Bt(I,Z)[0]/2+1.2:0})(),Be=Z?J(Z,$.right+fe,$.up,$.size):null,ye=this.devicePowers(i,r),it=_&&h.solar!==null?r.energy.solar?[r.energy.solar]:Pn(r,I=>{var z,O;return((O=(z=this.furnitureLinks)==null?void 0:z.get(I.id))==null?void 0:O.power)??null}).solar:[];if(Be)H.push(Be),U.push({kind:"main",name:T(i,"holo_title"),w:null,dayIds:it,battery:null});else if(_&&ne&&K){let I=0,z=0,O=0,te=1/0,F=r.floors[0];for(let le of r.floors){le.rooms.length&&(te=Math.min(te,le.elevation)),le.rooms.length&&(!F.rooms.length||le.elevation+le.height>F.elevation+F.height)&&(F=le);for(let Ie of le.rooms)for(let[Se,Ne]of Ie.points)I+=Se,z+=Ne,O++}O&&(I/=O,z/=O);let Q=$.x-I,be=$.z-z,ie=Math.hypot(Q,be);H.push({p:[$.x,(Number.isFinite(te)?te:0)+($.height??3),$.z],n:ie>.01?[Q/ie,0,be/ie]:[1,0,0],floorId:F.id,size:$.size,roof:!0,views:N}),U.push({kind:"main",name:T(i,"holo_title"),w:null,dayIds:it,battery:null})}else if(_&&ne&&r.floors.some(I=>I.rooms.length)){let I=-1/0,z=1/0,O=-1/0,te=0,F=r.floors[0];for(let Q of r.floors){for(let be of Q.rooms)for(let[ie,le]of be.points)I=Math.max(I,ie),z=Math.min(z,le),O=Math.max(O,le);Q.rooms.length&&Q.elevation+Q.height>te&&(te=Q.elevation+Q.height,F=Q)}H.push({p:[I+.6,te+.4,(z+O)/2],n:[1,0,0],floorId:F.id,size:$.size,roof:!0,views:N}),U.push({kind:"main",name:T(i,"holo_title"),w:null,dayIds:it,battery:null})}if(_&&h.solar!==null){let I=new Set;for(let z of r.floors)for(let O of z.furniture.filter(te=>te.type==="inverter")){if(O.plant_card===!1||I.has(O.id))continue;I.add(O.id);let te=E.filter(Ie=>j(Ie)===O.id),F=(Z&&O.id===W?te.find(Ie=>Ie.id!==Z.id):null)??te[0],Q=((Xa=(Ja=this.furnitureLinks)==null?void 0:Ja.get(O.id))==null?void 0:Xa.power)??null,be=F?J(F,O.plant_right??0,O.plant_up??0,$.size*.85):null;if(!be||!Q)continue;let ie=z.furniture.filter(Ie=>Ie.type==="home_battery").sort((Ie,Se)=>Math.hypot(Ie.x-O.x,Ie.z-O.z)-Math.hypot(Se.x-O.x,Se.z-O.z))[0],le=ie!=null&&ie.soc&&ie.soc!=="none"?Number((Za=i.states[ie.soc])==null?void 0:Za.state):NaN;H.push(be),U.push({kind:"plant",name:O.name||Ae(i,O.type),w:Math.max(0,ge(i.states[Q])??0),dayIds:[Q],battery:ie?{soc:Number.isFinite(le)?le:null,w:ye.get(ie.id)??null}:null})}}let gt=$.device_house===!1?"floor":"all";if(_)for(let I of r.floors){for(let z of I.furniture){if(!z.holo)continue;let O=((ts=(es=this.furnitureLinks)==null?void 0:es.get(z.id))==null?void 0:ts.power)??null,te=c.find(Q=>Q.id===z.id);if(!O&&!te)continue;let F=I.elevation+_e(I,z)+z.h;H.push({p:[z.x,F+.1,z.z],n:[0,1,0],floorId:I.id,size:$.size*.7,roof:!1,views:gt,room:Ar(I,z.x,z.z)}),U.push({kind:"device",name:z.name||Ae(i,z.type),w:(te==null?void 0:te.power)??(O?ge(i.states[O]):null),dayIds:O?[O]:[],battery:null})}for(let z of I.placements){if(!z.holo)continue;let O=co(i,z.entity_id);if(!O)continue;let te=I.elevation+(z.y??.4)+.2;H.push({p:[z.x,te,z.z],n:[0,1,0],floorId:I.id,size:$.size*.7,roof:!1,views:gt,room:Ar(I,z.x,z.z)}),U.push({kind:"device",name:z.name||Y(i,z.entity_id),w:ge(i.states[O]),dayIds:[O],battery:null})}}let Re=[];if(V("sound")){let I=new Set,z=(r.settings.roof.hologram??et).size,O=(F,Q,be,ie,le,Ie)=>{let Se=i.states[Q];if(!Se||L(Q)!=="media")return;if(I.has(Q)){let Tt=Re.find(Cr=>Cr.id===Q);Tt&&Re.push({...Tt,id:`${Q}#${Re.filter(Cr=>Cr.id.startsWith(`${Q}#`)).length+2}`,floorId:F.id,x:be,z:ie,members:[Q]});return}I.add(Q);let Ne=this.ro?void 0:this.mediaGrace.get(Q),Cn=[Se.attributes.media_title,Se.attributes.app_name,Se.attributes.source].find(Tt=>typeof Tt=="string"&&!!Tt.trim())??"";if(!(!X(Se)&&(Se.state==="playing"||Se.state==="paused"&&!!Cn&&this.pausedRecently(Se)||Se.state==="on"&&!!Se.attributes.source))){Ne&&Ne.until>Date.now()?(Re.push({...Ne.source,playing:!1,level:0}),H.push(Ne.anchor),U.push({...Ne.card,media:{...Ne.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,Ne.until-Date.now()+100))):X(Se)||(this.mediaGrace.delete(Q),Re.push({id:Q,floorId:F.id,x:be,z:ie,level:0,playing:!1,members:[]}));return}let At=Se.state==="playing",Ze=Se.attributes,os=typeof Ze.volume_level=="number"?Math.min(1,Math.max(0,Ze.volume_level)):.5,hp=Array.isArray(Ze.group_members)?Ze.group_members.filter(Tt=>Tt!==Q):[];Re.push({id:Q,floorId:F.id,x:be,z:ie,level:At?.3+.7*os:0,playing:At,members:hp});let fp=Cn||T(i,"holo_media_playing"),rs={p:[be,F.elevation+le+.12,ie],n:[0,1,0],floorId:F.id,size:z*.7,roof:!1,views:"all",room:Ar(F,be,ie)},is={kind:"media",name:Ie,w:null,dayIds:[],battery:null,media:{id:Q,title:fp,artist:typeof Ze.media_artist=="string"?Ze.media_artist:typeof Ze.media_album_name=="string"?Ze.media_album_name:"",picture:typeof Ze.entity_picture=="string"?Ze.entity_picture:null,volume:Math.round(os*100),playing:At}};H.push(rs),U.push(is),this.ro||this.mediaGrace.set(Q,{until:Date.now()+45e3,card:is,source:Re[Re.length-1],anchor:rs})},te=(F,Q)=>{var be,ie;for(let le of F.furniture){if((le.entity!=null&&le.entity!=="none")!==Q)continue;let Ie=(ie=(be=this.furnitureLinks)==null?void 0:be.get(le.id))==null?void 0:ie.entity;Ie&&O(F,Ie,le.x,le.z,_e(F,le)+le.h,le.name||Ae(i,le.type))}};for(let F of r.floors)te(F,!0);for(let F of r.floors)for(let Q of F.placements)O(F,Q.entity_id,Q.x,Q.z,Q.y??1.1,Q.name||Y(i,Q.entity_id));for(let F of r.floors)te(F,!1)}if(V("auto_pro")){let I=(r.settings.roof.hologram??et).size;for(let z of r.floors)for(let O of z.furniture){if(O.type!=="parking"||!O.car)continue;let te=In(i,O);if(!te)continue;let F=Jn(i,O);if(F.soc===null&&F.range===null&&F.locked===null&&F.climateOn===null)continue;let Q=ru(O,te),be=_e(z,O)+((Q==null?void 0:Q.h)??1.6);H.push({p:[O.x,z.elevation+be+.25,O.z],n:[0,1,0],floorId:z.id,size:I*.7,roof:!1,views:"all"});let ie=F.entities;U.push({kind:"car",name:O.name||Ae(i,te),w:null,dayIds:[],battery:null,car:{spot:O.id,soc:F.soc,range:F.range,rangeUnit:F.rangeUnit,chargingW:F.chargingW,charging:F.charging,locked:F.locked,climateOn:F.climateOn,lock:ie.lock,climate:ie.climate,charge:ie.charging&&/^(switch|input_boolean)\./.test(ie.charging)?ie.charging:null}})}}let G=this.scene.filter(I=>I.kind==="water").map(I=>({...I,level:this.dimmed?I.level*.4:I.level}));if(n.setPools(G),Yt()){let I=(r.settings.roof.hologram??et).size;for(let z of fu(this.sceneHost(i,r))){let O=r.floors.find(F=>F.id===z.anchor.floorId);if(!O)continue;let te=null;if(z.anchor.areaId){let F=O.outdoor.find(le=>le.id===z.anchor.areaId);if(!F||F.points.length<3)continue;let[Q,be]=He(F.points),ie=F.type==="pool"?an(O,F):ct(O,Q,be);te=[Q,O.elevation+Math.max(ie,0)+(F.above?.6:1.1),be]}else if(z.anchor.furnitureId){let F=O.furniture.find(Q=>Q.id===z.anchor.furnitureId);if(!F)continue;te=[F.x,O.elevation+_e(O,F)+F.h+.25,F.z]}te&&(H.push({p:te,n:[0,1,0],floorId:O.id,size:I*.7,roof:!1,views:"all"}),U.push({kind:"module",name:z.title,w:null,dayIds:[],battery:null,module:z}))}for(let z of this.scene){if(z.kind!=="tag")continue;let O=r.floors.find(te=>te.id===z.floorId);O&&(H.push({p:[z.at[0],O.elevation+z.at[1],z.at[2]],n:[0,1,0],floorId:O.id,size:I*.75,roof:!1,views:z.views??"all"}),U.push({kind:"bin",name:z.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:z.color??"#37e0ff",when:z.text,name:z.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}if(V("household")){let I=(r.settings.roof.hologram??et).size;for(let z of _c(this.binHolos)){let O=r.floors.find(F=>F.id===z.floorId);if(!O)continue;H.push({p:[z.x,O.elevation+z.y+.04,z.z],n:[0,1,0],floorId:z.floorId,size:I*.75,roof:!1,views:"all",room:Ar(O,z.x,z.z)});let te=z.lines.map(F=>({color:F.color,when:F.when,name:F.name,soon:!!F.soon&&!F.out,out:!!F.out}));U.push({kind:"bin",name:z.lines.map(F=>F.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:te,soon:te.some(F=>F.soon),icon:z.lines.length===1?z.lines[0].icon??null:null}})}}n.setSound(Re);let $e=this._walk?this.walkRoomPts:null,at=H.map(I=>!this._walk||!!$e&&B([I.p[0],I.p[2]],$e)),Xt=U.filter((I,z)=>at[z]);n.setAnchors(H.filter((I,z)=>at[z])),JSON.stringify(Xt)!==JSON.stringify(this._holos)&&(this._holos=Xt),n.setSolarLevels(P&&!this.dimmed?Wd(r,P):new Map);let An=!_||!(this.flows??this._flows)||this.dimmed?[]:Ld({building:r,consumers:c,summary:h,battery:A??null,fieldPower:P,devicePower:this.devicePowers(i,r)}).map(I=>({floorId:I.floorId,a:I.a,b:I.b,dist:I.dist,power:I.power,color:Ud(I.kind,h)})),_o=this.poolPipes(r),Tn=this.scene.filter(I=>I.kind==="line"),Je=V("fun_winter")&&!this.replay;n.setRoofLights(Je&&Zd(i,r)?Gt(r).roof_color?"color":"warm":"off",Gt(r).roof_outline!==!1);let D=Je?eu(i,r,ut(i,this.weatherEntityId??r.settings.weather_entity)):0;n.setRoofSnow(D),n.setFirework(Je&&nu(r)),this.watchWinter(Je),n.setFlows(this.dimmed?An:[...An,..._o.flows,...wu(Tn)]),n.setPipes(_o.tubes),n.setPatches([...this.scene.filter(I=>I.kind==="patch").map(I=>({floorId:I.floorId,points:I.points,y:I.y,color:I.color,opacity:this.dimmed?I.opacity*.4:I.opacity,...I.glow?{glow:!0}:{}})),...tu(r,D)]);let ae=[],ue=nt("locate")&&tr(r)?[...ae,...nr(i,r,new Set(ae.map(I=>I.id)))]:ae;n.setPersonLook(Zi(r)==="pin"?"pin":"figure"),n.setPersons(ue),this.lastPersons=ue.map(I=>({id:I.id,floorId:I.floorId,roomId:I.roomId}));let Xe=bd(i,r,this.openingLinks,ue);n.setFloorInfo(new Map([...Xe].map(([I,z])=>[I,_d(i,z)])));let se=(ns=i.states["sun.sun"])==null?void 0:ns.attributes,De=typeof(se==null?void 0:se.elevation)=="number"?se.elevation:null;n.setSun(this.sunFx!==!1&&De!==null&&typeof(se==null?void 0:se.azimuth)=="number"?{elevation:De,azimuth:se.azimuth}:null);let Fe=I=>T(i,I).charAt(0).toUpperCase();n.setSunPath(this.sunFx===!1?null:this.sunPathToday(i),[Fe("compass_n"),Fe("compass_e"),Fe("compass_s"),Fe("compass_w")],Rn(i)),this.theme==="auto"&&n.setTheme(this.effectiveTheme());let zn=this.weather&&!this.dimmed&&V("weather")?nc(i,ut(i,this.weatherEntityId??r.settings.weather_entity),r.settings.rain_entity):null,Ue=zn?oc(zn,r.settings.weather_effects):null;this.cloud=(Ue==null?void 0:Ue.cloud)??0,this._sky=(De===null?0:Math.min(1,Math.max(0,(De+4)/16)))*(1-.45*this.cloud);let Zt=Ue?Ue.sky:(r.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&V("weather")?{...Ue??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:Zt}:null),this.watchLightning(!!(Ue!=null&&Ue.lightning)),this.applyTint();let Wa=h.grid!==null||h.solar!==null||h.battery!==null||h.tariff!==null?h:null;JSON.stringify(Wa)!==JSON.stringify(this._energy)&&(this._energy=Wa);let Ba=c.some(I=>I.wallbox)?c.filter(I=>I.wallbox).reduce((I,z)=>I+z.power,0):null,Ua=r.floors.flatMap(I=>I.furniture.filter(z=>z.type==="inverter")).map(I=>{var te,F;let z=(F=(te=this.furnitureLinks)==null?void 0:te.get(I.id))==null?void 0:F.power,O=z?ge(i.states[z]):null;return O===null?null:{name:I.name||Ae(i,I.type),w:Math.max(0,O)}}).filter(I=>!!I);JSON.stringify(Ua)!==JSON.stringify(this._plants)&&(this._plants=Ua),Ba!==this._wallboxW&&(this._wallboxW=Ba),this.watchSolarDay([...new Set(U.flatMap(I=>I.dayIds))]);let Ka=V("energy_pro");this.watchMeters(Ka?r.energy.gas??null:null,Ka?r.energy.water??null:null),u&&(this.syncMs=this.syncMs*.8+(performance.now()-u)*.2)}listenReplay(){var t;(t=this.unlistenReplay)==null||t.call(this),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{var n;this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&((n=this.viewer)==null||n.flashDevices(e.pulses)),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.findIndex??=vr(t,n)).find(a=>a.entity===e);if(r){this.goTo(r);return}let i=Oe(t,e);for(let a of n.floors){let s=a.openings.find(d=>{var h;let p=(h=this.openingLinks)==null?void 0:h.get(d.id);return!!p&&[p.contact,p.tilt,p.contact2,p.tilt2,p.cover].includes(e)}),l=a.rooms.find(d=>d.points.length>=3&&(s?d.id===s.room_id:!!i&&d.area_id===i));if(!l)continue;let[u,c]=He(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:a.id,roomId:l.id,entity:e,icon:null,x:u,z:c,y:1});return}}now(){var e;return((e=this.replay)==null?void 0:e.t)??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,r=n?un(t,e.floors):this.openingLinks,i=n?Lt(t,e.floors):this.furnitureLinks,a=Oi(eo(t,e,this.weatherEntityId)),s=Ia(t,e,{openings:r,furniture:i,heat:!0,warnings:a,weatherEntityId:this.weatherEntityId}),l=V("auto_pro")?e.floors.flatMap(u=>u.furniture.filter(c=>c.type==="parking").flatMap(c=>[typeof c.entity=="string"?c.entity:null,c.car?Lo(t,c).tracker:null]).filter(c=>!!c&&c.startsWith("device_tracker."))):[];return{entities:s,openings:[...r],furniture:[...i],low:this._low,cars:l,energy:V("energy_pro"),auto:V("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return x;let t=this.hass,n=t.states[e.entity],r=Ee(t,n),i=L(e.entity)==="light"&&(n==null?void 0:n.state)==="on"&&r.endsWith("%")?`${T(t,"state_on")} \xB7 ${r}`:r,a=n!=null&&n.last_changed?T(t,"tt_since",{time:br(t,Date.parse(n.last_changed))}):"";return b`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${Y(t,e.entity)}</span>
      <b>${a?`${i} \xB7 ${a}`:i}</b>
    </div>`}devicePowers(e,t){var r,i;let n=new Map;for(let a of t.floors)for(let s of a.furniture){if(s.type!=="inverter"&&s.type!=="home_battery")continue;let l=(i=(r=this.furnitureLinks)==null?void 0:r.get(s.id))==null?void 0:i.power,u=s.type==="home_battery"&&s.charge&&s.charge!=="none"?ge(e.states[s.charge]):null,c=l?ge(e.states[l],s.type==="home_battery"&&t.energy.battery_invert&&u===null):null;c!==null&&u!==null?c=Math.max(0,c)-Math.max(0,u):c===null&&u!==null&&(c=-Math.max(0,u)),c!==null&&n.set(s.id,c)}return n}detectionPins(e,t){var a,s,l,u;let n=[],r=new Set(((a=this.building)==null?void 0:a.floors.flatMap(c=>c.placements.filter(d=>d.detect_pins===!1).map(d=>d.entity_id)))??[]),i=new Set(((s=this.building)==null?void 0:s.floors.flatMap(c=>c.placements.filter(d=>d.detect_popup).map(d=>d.entity_id)))??[]);for(let c of t){if(i.has(c.id)&&((l=c.model)!=null&&l.startsWith("camera"))&&this.popOnDetection(e,c.id),!((u=c.model)!=null&&u.startsWith("camera"))||r.has(c.id))continue;let d=this.now(),p=ot(e,c.id).filter(w=>{let v=e.states[w];return v?v.state==="on"?!0:v.state==="off"&&!!v.last_changed&&d-Date.parse(v.last_changed)<Hm:!1}),h=new Map;for(let w of p){let v=rr(e,w);h.has(v)||h.set(v,w)}h.size>1&&h.delete("motion");let f=(c.rotation??0)*Math.PI/180,m=[-Math.sin(f),Math.cos(f)],g=c.model==="camera_ceiling",_=0;for(let[w,v]of h){let k=e.states[v],S=k!=null&&k.last_changed?br(e,Date.parse(k.last_changed)):"";n.push({id:`detect:${v}`,floorId:c.floorId,roomId:c.roomId,x:c.x+(g?0:m[0]*1.1),z:c.z+(g?0:m[1]*1.1),y:1.4+.4*_++,icon:tp[w]??tp.motion,name:Y(e,v),text:`${T(e,`detect_${w}`)}${S?` \xB7 ${S}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let r=ur(t);if(!r)return null;let i=Math.abs(n)<5,a=t.settings.outage_entity;return a&&jo(e.states[a])?{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:jm,name:T(e,"holo_grid"),text:T(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:Lm,name:T(e,"holo_grid"),text:i?he(e,0):`${T(e,n<0?"energy_grid_export":"energy_grid_import")} ${he(e,Math.abs(n))}`,active:!i,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(a=>!!a),r=this.replay?"":n.join(",");if(r===this.meterKey)return;if(this.meterKey=r,clearInterval(this.meterTimer),this.meterTimer=void 0,!r){this._meters=null;return}let i=async()=>{if(!this.hass||document.hidden)return;let a=await Cd(this.hass,n);this.meterKey===r&&a&&(this._meters={gas:e?a.get(e)??null:null,water:t?a.get(t)??null:null})};i(),this.meterTimer=setInterval(()=>{i()},3e5)}poolPipes(e){var i,a;let t=[],n=[],r=new Map(this.scene.filter(s=>s.kind==="pipeflow").map(s=>[s.areaId,s.flows]));for(let{floor:s,area:l}of Tu(e.floors)){let u=l.pool;if(!((i=u.pipes)!=null&&i.length)&&!((a=u.joints)!=null&&a.length))continue;let c=u.ports??[],d=new Map(Object.entries(r.get(l.id)??{})),p=$r(e,s,l),h=(f,m)=>Sa(f,m,l,s);t.push(...zu(u.pipes??[],d,p,h));for(let f of c){if(f.kind!=="inlet")continue;let m=p(`port:${f.id}`),g=m&&Ma(l,[m.x,m.z]);if(!m||!g)continue;let _=(u.pipes??[]).find(v=>v.to===`port:${f.id}`),w=_?d.get(_.id):void 0;n.push({floorId:s.id,points:[[m.x+g[0]*.03,m.y,m.z+g[1]*.03],[m.x-g[0]*.09,m.y,m.z-g[1]*.09]],radius:.035,water:w!=null&&w.active?w.color:null,fittings:[]})}for(let f of u.joints??[]){if(f.kind!=="wall"&&f.kind!=="floor")continue;let m=p(`joint:${f.id}:inside`),g=p(`joint:${f.id}:outside`),_=f.kind==="floor"?.03:m.y;n.push({floorId:s.id,points:[[m.x,_,m.z],[g.x,g.y,g.z]],radius:.05,water:null,fittings:[]})}for(let f of u.pipes??[]){let m=Sa(mo(f,p),f,l,s);if(m.length<2)continue;let g=d.get(f.id),_=[],w=xr(m);for(let[v,k]of[[f.from,.04],[f.to,w-.04]]){let S=v.startsWith("dev:")||v.startsWith("joint:")?kr(m,k):null;S&&_.push({kind:"sleeve",p:S.p,dir:S.dir})}for(let v of f.fittings??[]){let k=kr(m,v.at);k&&_.push({kind:v.kind,p:k.p,dir:k.dir,open:v.open!==!1})}n.push({floorId:f.floor_id,points:m,radius:.025,water:g!=null&&g.active?g.color??$a:null,fittings:_})}}return{flows:t,tubes:n}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let i=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(i===this.holoIds)return;this.holoIds=i,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let r=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let i=await Nd(this.hass,e);this.holoIds===n&&(this._rows=i)};r(),this.holoTimer=setInterval(()=>{r()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&r()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,r,i,a){var q,A,P,$;(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let s=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),u=((q=this._holos[e])==null?void 0:q.kind)==="main";if(!s){u&&this._holoOn&&(this._holoOn=!1);return}u&&r!==this._holoOn&&(this._holoOn=r);let c=this._holos[e],d=(((A=this.building)==null?void 0:A.settings.roof.hologram)??et).device_min_w??0;(c==null?void 0:c.kind)==="device"&&d>0&&(c.w??0)<d&&(r=!1);let p=!r;if(s.hidden!==p&&(s.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!r)return;if((c==null?void 0:c.kind)==="bin"){let E=Math.max(.6,i*.8),R=!!((P=c.bin)!=null&&P.icon)&&i*.8<.62;s.classList.contains("fp3d-holo-far")!==R&&(s.classList.toggle("fp3d-holo-far",R),this.holoSizes.delete(e)),R&&(E=1);let j=this.holoSizes.get(e),N=performance.now();(!j||N-j.at>2e3)&&(j={w:s.offsetWidth||90,h:s.offsetHeight||40,at:N},this.holoSizes.set(e,j));let J=j.w*E,H=j.h*E,U=n;for(let ne=0;ne<6;ne++){let K=this.holoBoxes.find(Z=>t-J/2<Z.x1+3&&t+J/2>Z.x0-3&&U-H<Z.y1+3&&U>Z.y0-3);if(!K)break;U=K.y0-4}this.holoBoxes.push({i:e,x0:t-J/2,x1:t+J/2,y0:U-H,y1:U}),s.style.transform=`translate(${t.toFixed(1)}px, ${U.toFixed(1)}px) scale(${E.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=i*.8,f=34*h,m=46*h,g=t+(a?f:-f),_=n-m,w=this.holoSizes.get(e),v=performance.now();(!w||v-w.at>2e3)&&(w={w:s.offsetWidth||184,h:s.offsetHeight||90,at:v},this.holoSizes.set(e,w));let k=w.w*h,S=w.h*h,M=a?g:g-k,y=M+k;for(let E=0;E<6;E++){let R=this.holoBoxes.find(j=>M<j.x1+4&&y>j.x0-4&&_-S<j.y1+4&&_>j.y0-4);if(!R)break;_=R.y0-6}this.holoBoxes.push({i:e,x0:M,x1:y,y0:_-S,y1:_});let C=a||((($=this.building)==null?void 0:$.settings.roof.hologram)??et).mirror!==!1;if(s.style.transform=C?`translate(${g.toFixed(1)}px, ${_.toFixed(1)}px) scale(${(a?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${M.toFixed(1)}px, ${_.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let E=l.firstElementChild,R=l.lastElementChild;E==null||E.setAttribute("x1",t.toFixed(1)),E==null||E.setAttribute("y1",n.toFixed(1)),E==null||E.setAttribute("x2",g.toFixed(1)),E==null||E.setAttribute("y2",_.toFixed(1)),R==null||R.setAttribute("cx",t.toFixed(1)),R==null||R.setAttribute("cy",n.toFixed(1))}}renderHologram(){var a,s;let e=this._energy,t=()=>this._holos.map((l,u)=>l.kind==="bin"?this.renderBinCard(l,u):x),n=this._holos.some(l=>l.kind==="module"||l.tag);if(!(n||V("energy_pro")||V("sound")||V("auto_pro")||V("pool")||V("household"))||this.roomId&&!(((a=this.building)==null?void 0:a.settings.roof.hologram)??et).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return V("household")||n?t():x;let r=this.floorId===null||(((s=this.building)==null?void 0:s.floors.length)??0)<=1,i=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&r;return this._holos.map((l,u)=>l.kind==="module"?this.renderModuleCard(l,u):l.kind==="bin"?this.renderBinCard(l,u):l.kind==="car"?this.renderCarCard(l,u):l.kind==="media"?this.renderMediaCard(l,u):l.kind==="device"?this.renderDeviceCard(l,u):i?this.renderHoloCard(l,u,e):x)}renderBinCard(e,t){let n=e.bin,r=n.lines.length===1?n.lines[0]:null,i=n.lines.map(a=>`${a.name}: ${a.when}`).join(", ");return b`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${r!=null&&r.out?"fp3d-holo-out":""} ${r?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${i} style="--bin:${n.lines[0].color}">
      ${n.icon?b`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${n.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:x}
      ${r?b`<div class="fp3d-holo-body"><b>${r.when}</b><span>${r.name}</span></div>`:b`<div class="fp3d-holo-body fp3d-holo-lines">
            ${n.lines.map(a=>b`<div class="fp3d-holo-line ${a.soon?"":"fp3d-holo-line-later"} ${a.out?"fp3d-holo-line-out":""}" style="--bin:${a.color}"><b>${a.when}</b><span>${a.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,t){let n=this.hass,r=f=>T(n,f),i=e.car,a=!this.mediaFolded.has(i.spot),s=()=>{this.mediaFolded.has(i.spot)?this.mediaFolded.delete(i.spot):this.mediaFolded.add(i.spot),this.requestUpdate()},l=(f,m,g)=>{n.callService(f,m,{entity_id:g})},u=(f,m)=>f.startsWith("climate.")?l("climate",m?"turn_on":"turn_off",f):l("homeassistant",m?"turn_on":"turn_off",f),c=()=>{if(!i.lock)return;let f=i.lock.startsWith("lock.");if(i.locked){if(!confirm(r("car_unlock_confirm")))return;f?l("lock","unlock",i.lock):l("homeassistant","turn_off",i.lock)}else f?l("lock","lock",i.lock):l("homeassistant","turn_on",i.lock)},d=i.soc===null?"#37e0ff":i.soc>=50?"#4dff80":i.soc>=20?"#ffcc40":"#ff4d40",p=!!i.lock&&/^(lock|input_boolean|switch)\./.test(i.lock),h=!!i.climate&&/^(climate|switch|input_boolean)\./.test(i.climate);return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${i.charging?`\u26A1 ${r("car_charging_short")}`:i.locked===null?"":i.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${d}">${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b>
            <span>${i.range!==null?`${oe(n,i.range,0)} ${i.rangeUnit}`:""}${i.charging&&i.chargingW?` \xB7 ${he(n,i.chargingW)}`:""}</span>
          </div>
          ${i.soc!==null?b`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,i.soc))}%;background:${d}"></i></div>`:x}
          ${a&&!this.ro&&(p||h||i.charge)?b`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?b`<button title=${i.locked?r("car_unlock_btn"):r("car_lock_btn")} @click=${c}>${i.locked?"\u{1F512}":"\u{1F513}"}</button>`:x}
                ${h?b`<button class=${i.climateOn?"fp3d-holo-on":""} title=${r("car_climate")} @click=${()=>u(i.climate,!i.climateOn)}>❄</button>`:x}
                ${i.charge?b`<button class=${i.charging?"fp3d-holo-on":""} title=${r("car_charging")} @click=${()=>u(i.charge,!i.charging)}>⚡</button>`:x}
              </div>`:x}
        </div>
      </div>`}renderModuleCard(e,t){var h,f,m;let n=e.module,r=!this.mediaFolded.has(n.id),i=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},a=g=>g?`color:${g}`:"",s=this._low||this.clientWidth<600,l=yr(n.rows,s),u=yr(n.cells,s),c=n.chain?yr(n.chain.items,s):[],d=n.spark&&n.spark.values.length>1&&!(s&&n.spark.minor)?n.spark:null,p=!!(n.chain||(h=n.cells)!=null&&h.length||n.status);return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${p?"fp3d-holo-mod-wide":""} ${this.cardPing===n.id?"fp3d-holo-ping":""} ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${i}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live" style=${a(n.liveColor)}>${n.live??""}</span></div>
          ${n.status?b`<div class="fp3d-holo-status" style=${n.status.color?`--st:${n.status.color}`:""}>
                ${n.status.icon?b`<i>${n.status.icon}</i>`:x}<b>${n.status.text}</b>${n.status.since?b`<span>${n.status.since}</span>`:x}
              </div>`:x}
          ${n.main?b`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${a(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span>
                ${n.main.side?b`<em style=${a(n.main.side.color)}><b>${n.main.side.text}</b>${n.main.side.sub?b`<small>${n.main.side.sub}</small>`:x}</em>`:x}
              </div>`:x}
          ${r&&c.length?b`<div class="fp3d-holo-chain">
                  ${c.map((g,_)=>b`${_?b`<s>→</s>`:x}<div><small>${g.label}</small><b style=${a(g.color)}>${g.value}</b></div>`)}
                </div>
                ${n.chain.note?b`<div class="fp3d-holo-chain-note" style=${a(n.chain.noteColor)}>${n.chain.note}</div>`:x}`:x}
          ${r?l.map(g=>b`<div class="fp3d-holo-mrow"><span>${g.label}</span><b style=${a(g.color)}>${g.value}</b>${g.at!==void 0?g.fill?b`<i class="fp3d-holo-mrow-fill"><s style="width:${g.at}%;background:${g.color??"#37e0ff"}"></s></i>`:b`<i><em style="left:${g.at}%;background:${g.color??"#37e0ff"};color:${g.color??"#37e0ff"}"></em></i>`:b`<i class="fp3d-holo-mrow-none"></i>`}</div>`):x}
          ${r&&u.length?b`<div class="fp3d-holo-cells">${u.map(g=>b`<div><small>${g.label}</small><b style=${a(g.color)}>${g.value}</b></div>`)}</div>`:x}
          ${r&&n.hint?b`<div class="fp3d-holo-hint" style=${n.hint.color?`--hint:${n.hint.color}`:""}>${n.hint.text}</div>`:x}
          ${r?(n.lines??[]).map(g=>b`<div class="fp3d-holo-mline">${g}</div>`):x}
          ${r&&d?b`${d.label?b`<div class="fp3d-holo-spark-label">${d.label}</div>`:x}${Rm(d.values,d.color??"#ffb347")}`:x}
          ${r&&((f=n.chips)!=null&&f.length)?b`<div class="fp3d-holo-chips">
                ${n.chips.map(g=>b`<div class="fp3d-holo-mline">${g.title}</div>
                    <div class="fp3d-holo-chip-row">${g.items.map(_=>b`<button class=${_.on?"fp3d-holo-on":""} title=${_.title??""} @click=${()=>_.onTap()}>${_.label}</button>`)}</div>`)}
              </div>`:x}
          ${r&&!this.ro&&((m=n.buttons)!=null&&m.length)?b`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(g=>b`<button class=${g.on?"fp3d-holo-on":""} title=${g.title??""} @click=${()=>g.onTap()}>${g.label}</button>`)}</div>`:x}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){var v,k,S;let n=this.hass,r=M=>T(n,M),i=e.media,a=!this.mediaFolded.has(i.id),s=()=>{this.mediaFolded.has(i.id)?this.mediaFolded.delete(i.id):this.mediaFolded.add(i.id),this.requestUpdate()},l=(M,y={})=>{Promise.resolve(n.callService("media_player",M,{entity_id:i.id,...y})).catch(C=>this.serviceFailed(`media_player.${M}`,C))},u={down:M=>M.currentTarget.dataset.pressed=String(M.pointerId),up:M=>y=>{let C=y.currentTarget;C.dataset.pressed===String(y.pointerId)&&(delete C.dataset.pressed,y.stopPropagation(),C.dataset.acted=String(Date.now()),M())},key:M=>y=>{let C=y.currentTarget;Date.now()-Number(C.dataset.acted??0)<700||(C.dataset.acted=String(Date.now()),M())}},c=(v=n.states[i.id])==null?void 0:v.attributes.supported_features,d=M=>typeof c!="number"||(c&M)!==0,p=this.mediaIntent.get(i.id);p&&(p.playing===i.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(i.id);let h=((k=this.mediaIntent.get(i.id))==null?void 0:k.playing)??i.playing,f=d(16384)||d(1),m=()=>{this.mediaIntent.set(i.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":d(16384)?"media_play":"media_play_pause")},g=this.mediaVolume.get(i.id);g&&(Math.abs(g.v-i.volume)<=2||Date.now()-g.at>3e4)&&this.mediaVolume.delete(i.id);let _=((S=this.mediaVolume.get(i.id))==null?void 0:S.v)??i.volume,w=(M,y)=>{this.mediaVolume.set(i.id,{v:M,at:Date.now()}),this.requestUpdate(),(y||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:M/100}))};return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${r("holo_media_playing")}`:r("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${i.picture?b`<img class="fp3d-holo-cover" src=${i.picture} alt="" />`:b`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${i.title}</b>${i.artist?b`<span>${i.artist}</span>`:x}</div>
        </div>
        ${a&&!this.ro?b`<div class="fp3d-holo-media-controls">
                <button aria-label=${r("previous")} ?disabled=${!d(16)} @pointerdown=${u.down} @pointerup=${u.up(()=>l("media_previous_track"))} @click=${u.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${r("play_pause")} ?disabled=${h?!d(1):!f} @pointerdown=${u.down} @pointerup=${u.up(m)} @click=${u.key(m)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${r("next")} ?disabled=${!d(32)} @pointerdown=${u.down} @pointerup=${u.up(()=>l("media_next_track"))} @click=${u.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(_)}
                  aria-label=${r("volume")}
                  @input=${M=>w(Number(M.target.value),!1)}
                  @change=${M=>w(Number(M.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${_} %</span>
              </div>`:x}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,r=u=>T(n,u),i=!this.holoFolded.has(t),a=this.dayOf(e),s=a&&a.curve.length>1?aa(a.curve,a.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${he(n,e.w??0)}</b><span>${r("holo_dev_now")}</span></div>
        ${i&&a?b`<div class="fp3d-holo-sub">${r("holo_today")} <b>${oe(n,a.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${he(n,a.peak)}</b></div>`:x}
        ${i&&s?lt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${s.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${s.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${s.endX}" cy="${s.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:x}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?Vd(t,new Date(this.now())):null}renderHoloCard(e,t,n){var g,_;let r=this.hass,i=w=>T(r,w),a=!this.holoFolded.has(t),s=this.dayOf(e),l=e.kind==="main",u=l&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,c=s&&s.curve.length>1?aa(s.curve,s.peak):null,d=new Date(this.now()),p=(d.getHours()+d.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},f=l?n.solar??n.consumption??0:e.w??0,m=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${he(r,f)}</b><span>${i(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${a?b`${l&&this._plants.length>1?b`<div class="fp3d-holo-plants">${this._plants.map(w=>b`<span>${w.name}</span><b>${he(r,w.w)}</b>`)}</div>`:x}
              ${s?b`<div class="fp3d-holo-sub">${i("holo_today")} <b>${oe(r,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${he(r,s.peak)}</b></div>`:x}
              ${c?lt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${c.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${c.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${c.endX}" cy="${c.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:x}
              <div class="fp3d-holo-grid">
                ${m?b`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${i("holo_battery")}<br /><b>${m.soc!==null?`${Math.round(m.soc)} %`:he(r,Math.abs(m.w??0))}</b>
                      ${m.w!==null&&Math.abs(m.w)>=5?b`<span>${m.w<0?"\u25B2":"\u25BC"} ${he(r,Math.abs(m.w))}</span>`:x}
                    </div>`:x}
                ${l&&n.grid!==null?b`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${i("holo_grid")}<br /><b>${he(r,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":i(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:x}
                ${l&&n.consumption!==null?b`<div class="fp3d-holo-cell fp3d-holo-house">${i("holo_house")}<br /><b>${he(r,n.consumption)}</b></div>`:x}
                ${l&&this._wallboxW!==null?b`<div class="fp3d-holo-cell fp3d-holo-wb">${i("holo_wallbox")}<br /><b>${he(r,this._wallboxW)}</b></div>`:x}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?b`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?b`<span>🔥 ${i("holo_gas")} <b>${oe(r,this._meters.gas,this._meters.gas<10?2:1)} ${ep(r,(g=this.building)==null?void 0:g.energy.gas)}</b></span>`:x}
                    ${this._meters.water!==null?b`<span>💧 ${i("holo_water")} <b>${Fm(r,this._meters.water,ep(r,(_=this.building)==null?void 0:_.energy.water))}</b></span>`:x}
                    <span>${i("holo_today_short")}</span>
                  </div>`:x}
              ${u!==null?b`<div class="fp3d-holo-bar"><div style="width:${u}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${i("holo_autarky")}</span><b>${u} %</b></div>`:x}`:x}
      </div>
    </div>`}setAlerts(e){let t=e.map(a=>`${a.kind}:${a.entity}`),n=this.ro?[]:e.filter((a,s)=>!this.seenAlerts.has(t[s]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(a=>`${a.kind}:${a.entity}`).join()&&(this._alerts=e);let r=e.some(a=>!a.quiet);if(r&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!r||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let i=this.directorSettings();if(i!=null&&i.alerts){let a=n[0];if(this.directing.offer({kind:"alert",key:`alert:${a.kind}:${a.entity}`,entity:a.entity},Date.now(),i.hold??Ir)){this.directorShow(()=>this.jumpTo(a));return}}this.alertJump&&this.jumpTo(n[0])}directorSettings(){var t;let e=(t=this.building)==null?void 0:t.settings.director;return this.director&&!this.ro&&V("camera_cockpit")&&Yu(e)?e:null}direct(){let e=this.directorSettings(),t=this.hass,n=this.building;if(!e||!t||!n){this.directorSrc&&(this.directing=new bo,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let r=Date.now(),i=e.hold??Ir,a=`${JSON.stringify(e)}|${n.floors.map(u=>u.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==t.entities||this.directorSrc.building!==n||this.directorSrc.sig!==a){let u=[...new Set(n.floors.flatMap(d=>d.placements.map(p=>p.entity_id)))],c=e.motion??"off";this.directorSrc={registry:t.entities,building:n,sig:a,bells:(e.doorbell?Qu(t,e.doorbell_entity):[]).map(d=>({id:d,camera:Xu(t,d,u,e.doorbell_camera)})),motion:c==="off"?[]:u.filter(d=>d.startsWith("camera.")).flatMap(d=>ot(t,d).filter(p=>c==="all"||rr(t,p)==="person").map(p=>({sensor:p,cam:d})))}}let s=[];for(let u of this.directorSrc.bells)this.directing.edge(u.id,t.states[u.id],(c,d)=>Oa(c,d,r))&&s.push({kind:"doorbell",key:`bell:${u.id}`,entity:u.id,camera:u.camera});for(let u of e.triggers??[])u.entity&&this.directing.edge(`trigger:${u.entity}`,t.states[u.entity],(c,d)=>Ju(c,d,r))&&s.push({kind:"trigger",key:`trigger:${u.entity}`,entity:u.entity,camera:u.camera});for(let u of this.directorSrc.motion)this.directing.edge(u.sensor,t.states[u.sensor],(c,d)=>(c==null?void 0:c.state)==="off"&&(d==null?void 0:d.state)==="on")&&s.push({kind:"motion",key:`cam:${u.cam}`,entity:u.sensor,camera:u.cam});if(e.appliances){for(let[u,c]of this.appliances)this.directing.stopped(`app:${u}`,c.running,r)&&s.push({kind:"appliance",key:`app:${u}`,entity:u});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];s.sort((u,c)=>l.indexOf(u.kind)-l.indexOf(c.kind));for(let u of s)if(this.directing.offer(u,r,i)){this.directorShow(()=>this.directorGo(u));break}}directorShow(e){let t=this.viewer;if(!t)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:t.getView()}),t.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(e){let t=this.building;if(t){if(e.camera&&t.floors.some(n=>n.placements.some(r=>r.entity_id===e.camera))){let n=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(e.kind==="appliance"){let n=this.appliances.get(e.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),t=this.directorBack;e&&(this.directorBack=null,!(!e.back||!t)&&(this._through&&(this._through=null),this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId?setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60):this.roomId&&t.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:null}),60),setTimeout(()=>{var n,r;(n=this.viewer)==null||n.flyTo(t.view),(r=this.viewer)==null||r.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){var c;let n=this.building,r=this.hass,i=n==null?void 0:n.floors.find(d=>d.id===e),a=i?ce(i).find(d=>d.id===t):void 0;if(!n||!r||!i||!a||this.ro)return;let s=new Set(xe(r,a.area_id).filter(d=>L(d)==="light"));for(let d of i.placements)L(d.entity_id)==="light"&&B([d.x,d.z],a.points)&&s.add(d.entity_id);for(let d of i.furniture){let p=(c=this.furnitureLinks.get(d.id))==null?void 0:c.entity;p&&Kn(d.type)&&B([d.x,d.z],a.points)&&s.add(p)}let l=[...s].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let u=l.some(d=>{var p;return((p=r.states[d])==null?void 0:p.state)==="on"});r.callService("homeassistant",u?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let r=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let s=this.heatMode,l=Gd(n,t,s);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,r=new Map([...l].map(([u,c])=>[u,Kd(s,c)]))}let i=new Map;if(this.heatMode==="values")for(let s of t.floors)for(let l of ce(s)){let u=Ke(n,s,l,"temperature"),c=Ke(n,s,l,"humidity"),d=Ke(n,s,l,"co2"),p=[u!==null?`${oe(n,yt(n,u),1)} ${We(n)}`:null,c!==null?`${oe(n,c,0)} %`:null,d!==null?`${oe(n,d,0)} ppm`:null].filter(h=>!!h);p.length&&i.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){r??=new Map;let s=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let u=jc(l).map(c=>c*s);if(l.roomId)r.set(l.roomId,u);else for(let c of t.floors)if(!l.floorId||c.id===l.floorId)for(let d of c.rooms)r.set(d.id,u)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(r??=new Map,r.set(this.roomFlash.roomId,[.9,.95,1]));let a=r?[...r].map(([s,l])=>`${s}:${l.map(u=>u.toFixed(2)).join(",")}`).join(";"):"";a!==this.tintSig&&(this.tintSig=a,e.setRoomTint(r))}furnitureMarkers(e,t,n,r){var w,v,k,S;let i=[],a=[],s=new Map,l=new Map,u=new Set(n),c=V("household"),d=[];this.binHolos=[];let p=new Map(this.scene.filter(M=>M.kind==="glow").map(M=>[M.furnitureId,M]));for(let M of t.floors)for(let y of M.furniture){let C=this.furnitureLinks.get(y.id),q=this.stateFaces(e,y);if(q.length&&s.set(y.id,{color:q[0].color,level:q[0].level,faces:q}),Kn(y.type)){i.push(this.lampMarker(e,M,y,(C==null?void 0:C.entity)??null));let D=y.type==="lamp_ceiling_fan"?np(y):null;D&&i.push(this.lampMarker(e,M,y,D,!0));continue}if(y.type==="wall_switch"){let D=ln(y);D.forEach((ue,Xe)=>ue&&l.set(`${y.id}#${Xe}`,`ws:${ue}`));let ae=To(y);s.set(y.id,{color:[0,0,0],level:0,keys:D.map(ue=>ci(e,ue)?Vm:null),switchRing:ae?Ot(e.states[ae]):null});continue}if(y.type==="wall_socket"){let D=typeof y.run_w=="number"&&y.run_w>0?y.run_w:5,ae=null,ue=null,Xe=cn(y).map((se,De)=>{se.entity?l.set(`${y.id}#${De}`,`ws:${se.entity}`):se.power&&l.set(`${y.id}#${De}`,se.power);let Fe=se.power?ge(e.states[se.power]):null;return se.power&&Fe!==null&&(ae=(ae??0)+Math.max(0,Fe),ue??=se.power,r.has(se.power)||(r.add(se.power),a.push({id:se.entity??se.power,powerEntity:se.power,floorId:M.id,x:y.x,z:y.z,power:Math.max(0,Fe)}))),(se.entity?ci(e,se.entity):(Fe??0)>D)?Nm:null});if(s.set(y.id,{color:[0,0,0],level:0,keys:Xe}),ue!==null&&ae!==null&&!n.has(ue)){let se=ae;n.add(ue);let De=M.rooms.find(Fe=>Fe.points.length>=3&&B([y.x,y.z],Fe.points));i.push({id:ue,floorId:M.id,roomId:(De==null?void 0:De.id)??null,x:y.x,z:y.z,y:sp(y)+_e(M,y),icon:Ut(y.icon||"power-socket-eu"),name:y.name||Ae(e,y.type),ownName:y.name||void 0,showName:!!y.show_name,text:he(e,se),active:se>D,unavailable:!1,glow:null,furnitureId:y.id,show:y.marker??void 0,fromFurniture:!0})}continue}let A=p.get(y.id);A&&s.set(y.id,{color:A.color,level:A.level});let P=(y.type==="plant"||Pi(y.type))&&!!y.moisture&&y.moisture!=="none";if(y.type==="waste_bin"||y.type==="mailbox"||P){let D=c?this.householdState(e,M,y):null;D!=null&&D.screen&&s.set(y.id,D.screen),D!=null&&D.marker&&i.push(D.marker);let ae=y.type==="waste_bin"?y.bin_source:y.type==="mailbox"?y.entity:y.moisture;if(c&&typeof ae=="string"&&ae!=="none"&&l.set(y.id,`hh:${ae}#${y.id}`),D!=null&&D.item&&d.push(D.item),!P)continue}if(c){let D=Mc(y,e);D.length&&!s.has(y.id)&&s.set(y.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let ae of D){let ue=y.name||Ae(e,y.type);d.push({icon:"wrench-outline",text:ae===y.service?T(e,"hh_service",{name:ue}):T(e,"hh_service2",{name:ue,what:Y(e,ae)}),entity:ae})}(y.type==="fridge"||y.type==="fridge_smart")&&No(y,e)&&(s.set(y.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),d.push({icon:"fridge-alert-outline",text:T(e,"hh_fridge_open",{name:y.name||Ae(e,y.type)}),entity:xt(y)[0]??null}))}let E=y.type==="parking"&&V("auto_pro")&&!!y.car?Jn(e,y):null,R=kc(y.type),j=!!R,N=y.type==="home_battery"?y.soc:y.type==="wallbox"?y.status:y.type==="parking"&&E?((w=y.car)==null?void 0:w.device)??E.entities.soc:c&&j?y.remaining??null:null,J=N&&N!=="none"?N:null,H=y.extra&&y.extra!=="none"&&e.states[y.extra]?y.extra:null,U=H?Ee(e,e.states[H]):"",ne=D=>U?D?`${D} \xB7 ${U}`:U:D,K=C??(J||H?{entity:null,power:null}:void 0);if(!K)continue;let Z=y.type==="home_battery"?J??K.entity??K.power:K.entity??K.power??J??H;l.set(y.id,Z);let W=K.entity?e.states[K.entity]:void 0,de=y.type==="water_heater"?al(e,Bn(e,{entity:K.entity})):null,fe=y.type==="access_point"?Ns(e,Wn(e,{entity:K.entity})):null,Be=y.type==="meter"?t.energy.grid_invert&&!y.export:y.type==="home_battery"?t.energy.battery_invert&&!y.charge:!1,ye=K.power?ge(e.states[K.power],Be):null,it=y.type==="home_battery"&&y.charge&&y.charge!=="none"?y.charge:y.type==="meter"&&y.export&&y.export!=="none"?y.export:null,gt=it?ge(e.states[it]):null;gt!==null&&(ye=Math.max(0,ye??0)-Math.max(0,gt)),K.power&&ye!==null&&!r.has(K.power)&&(r.add(K.power),a.push({id:Z,powerEntity:K.power,floorId:M.id,x:y.x,z:y.z,power:Math.max(0,ye),wallbox:y.type==="wallbox"||void 0}));let Re=typeof y.run_w=="number"&&y.run_w>0?y.run_w:10,G=typeof y.run_w=="number"&&y.run_w>0&&ye!==null&&ye<=y.run_w,$e=(ye??0)>Re||(W==null?void 0:W.state)==="on"||(W==null?void 0:W.state)==="running"||fi(W)&&tt(W);j&&this.appliances.set(y.id,{floorId:M.id,x:y.x,z:y.z,entity:K.entity??K.power??y.id,running:$e});let at=null;if(c&&j){let D=y.remaining&&y.remaining!=="none"?e.states[y.remaining]:void 0,ae=Ci(D),ue=$e||!K.power&&!K.entity&&(ae??0)>0,Xe=xt(y),se=zn=>Xe.some(Ue=>{let Zt=e.states[Ue];return!!(Zt!=null&&Zt.last_changed)&&Date.parse(Zt.last_changed)>zn}),De=this.finished.update(y.id,ue,se),Fe=y.name||(K.entity?Y(e,K.entity):Ae(e,y.type));ue?($e||s.set(y.id,ap(R)),ae!==null&&!Fi(W,K.power?ye:null,Re)&&(at=T(e,"hh_left",{t:Sc(ae)}),d.push({icon:"timer-outline",text:`${Fe}: ${at}`,entity:y.remaining??K.entity}))):(Ri(W)||Ri(D)||De)&&(at=T(e,"hh_done"),s.set(y.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),d.push({icon:"check-circle-outline",text:T(e,"hh_finished",{name:Fe}),entity:K.entity??K.power}))}if(E&&In(e,y)){let D=[];if(E.soc!==null){let ae=E.soc>=50?[.3,1,.5]:E.soc>=20?[1,.8,.25]:[1,.3,.25];D.push({part:"band",color:ae,level:E.charging?1:.6})}if(E.locked===!1&&D.push({part:"lights",color:[1,.42,.02],level:1}),E.climateOn){let ae=E.entities.climate?e.states[E.entities.climate]:void 0,ue=!!ae&&(ae.attributes.hvac_action==="cooling"||ae.state==="cool");D.push({part:"cabin",color:ue?[.45,.8,1]:[1,.55,.22],level:.35})}D.length&&s.set(`${y.id}:vehicle`,{color:D[0].color,level:D[0].level,faces:D})}if(y.type==="radiator"&&(W&&L(W.entity_id)==="climate"||y.heat_sensor)){let D=W&&L(W.entity_id)==="climate"?W.attributes:null;if(Dl(e,y.heat_sensor)??(D==null?void 0:D.hvac_action)==="heating"){let ue=D&&typeof D.temperature=="number"&&typeof D.current_temperature=="number"?D.temperature-D.current_temperature:1;s.set(y.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,ue))})}else p.has(y.id)&&s.delete(y.id)}else if(fe){let D=qs(fe);D&&s.set(y.id,{color:D,level:1,apRing:D})}else if(de){let D=il(y);de.on&&s.set(y.id,{color:de.heating?[1,.45,.12]:[.25,.85,1],level:de.heating?1:.55,plain:!0,dots:{n:D,lit:Math.max(0,Math.min(D,Math.round(de.showers??0))),color:[.35,.9,1]}})}else if(y.type==="ac_unit"&&W&&L(W.entity_id)==="climate"){let D=Nl(W);D&&s.set(y.id,D)}else if(R&&$e)s.set(y.id,ap(R));else if(y.type==="stove"||Zr(y.type)){let D=Vl(W,$e);D>0&&s.set(y.id,{color:[1,.05,.01],level:D,faces:[{part:"burners",color:[1,.05,.01],level:D}]})}let Xt=we(y.type),An=!!Xt&&!Xt.light&&Xt.parts.some(D=>D.glow);if(W&&An&&V("sound")&&L(W.entity_id)==="media"&&W.state==="playing"&&!Oo(y.type)){let D=typeof W.attributes.volume_level=="number"?W.attributes.volume_level:.5;s.set(y.id,{color:yi(W)??[.22,.88,1],level:.5+.5*D,ring:!0,plain:!0})}if(W&&Oo(y.type)&&!Zr(y.type)&&!(Mo(y.type)&&L(W.entity_id)==="cover")){let D=V("screens"),ae=L(W.entity_id)==="light"?Ot(W):null,ue=L(W.entity_id)==="media"&&["playing","on","paused","idle"].includes(W.state),Xe=D&&L(W.entity_id)==="media"?yi(W):ae?ae.color:tt(W)||ue?[.22,.88,1]:null,se=D&&L(W.entity_id)==="media"?W.attributes.entity_picture??null:null;Xe&&s.set(y.id,{color:Xe,level:W.state==="playing"?1:.6,picture:se,ring:An&&V("sound")&&W.state==="playing"})}if(u.has(Z))continue;n.add(Z);let _o=K.entity?L(K.entity):null,Tn=M.rooms.find(D=>D.points.length>=3&&B([y.x,y.z],D.points)),Je=W&&Ys(y.type)&&W.entity_id.startsWith("water_heater.")?Gm(e,W):null;i.push({id:Z,floorId:M.id,roomId:(Tn==null?void 0:Tn.id)??null,x:y.x,z:y.z,y:sp(y)+_e(M,y),icon:y.icon?Ut(y.icon):Je?Ut("water-boiler"):kn(_o??"switch"),name:y.name||(fe&&K.entity?So(e,K.entity):K.entity?Y(e,K.entity):Ae(e,y.type)),ownName:y.name||void 0,showName:!!y.show_name,text:ne(at??(fe?this.apText(e,fe):de?this.heaterText(e,de):E?this.carText(e,E,!!W&&!gr.has(W.state.toLowerCase())):y.type==="home_battery"?this.batteryText(e,J,ye):y.type==="wallbox"?this.wallboxText(e,J,ye):y.type==="meter"?this.meterText(e,ye):Je?Je.text:W?Ee(e,W):G?T(e,"pin_standby"):ye!==null?he(e,Math.max(0,ye)):"")),active:at?!0:fe?fe.status==="up":de?de.heating:E?E.charging:Je?Je.on:W?tt(W):(ye??0)>(typeof y.run_w=="number"&&y.run_w>0?y.run_w:5),unavailable:W?X(W):!1,glow:null,furnitureId:y.id,energyDevice:y.type==="inverter"||y.type==="home_battery"||y.type==="wallbox"||y.type==="meter"||!!E||!!H,...G?{standby:G}:{},show:y.marker??(E||at?"always":void 0),fromFurniture:!0})}let h=t.settings.household;if(h!=null&&h.bin_next_only||typeof(h==null?void 0:h.bin_days)=="number"){let M=vc(this.binHolos.filter(y=>!y.icon),{nextOnly:h.bin_next_only,ahead:h.bin_days});this.binHolos=this.binHolos.filter(y=>y.icon||M.has(y.id))}let f=(v=t.settings.household)==null?void 0:v.notes,m=f&&f!=="none"?e.states[f]:void 0;if(c&&m&&!X(m)&&m.state.trim()){let M=m.state.split(/\s*(?:\||\n|;)\s*/).map(y=>y.trim()).filter(Boolean).slice(0,8);d.unshift(...M.map(y=>({icon:"pin-outline",text:y,entity:f})))}this._household=d.filter((M,y)=>d.findIndex(C=>C.text===M.text)===y),this.cameraScreens=0;let g=_i(e,t.floors),_=V("screens");for(let M of t.floors)for(let y of M.furniture){if(!_||!((k=y.pictures)!=null&&k.length)||!Oo(y.type)||y.type==="fridge_smart"&&((S=g.get(y.id))!=null&&S.right))continue;let C=y.pictures.find(P=>Gl(e,P));if(!C)continue;let q=this.pictureUrl(C.image),A=y.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];q&&s.set(y.id,{color:A,level:1,picture:q,plain:!0})}for(let M of p.values())M.top?s.set(M.furnitureId,{color:M.color,level:M.level,faces:[{part:"strata",color:M.color,top:M.top,level:M.level}]}):M.plate?s.set(M.furnitureId,{color:M.color,level:M.level,faces:[{part:"plate",color:M.color,level:M.level}]}):M.band&&s.set(M.furnitureId,{color:M.color,level:M.level,faces:[{part:"band",color:M.color,level:M.level}]});for(let M of this.scene)M.kind==="screen"&&(s.set(M.furnitureId,{color:M.color??[.06,.08,.14],level:M.level??1,picture:M.picture,plain:!0}),M.popup&&l.set(M.furnitureId,`popup:${M.popup}`));return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:i,consumers:a,screens:s,targets:l}}watchHousehold(e,t){let n=t.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox"),r=V("household")&&n.length>0&&!this.replay,i=r?fc(t.floors):[],a=i.join(",");if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let s=async()=>{i.length&&(this.pickups=await Ei(this.hass??e,i)),this.syncDevices(!0)};(a!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=a,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void s(),6e5),i.length&&Ei(e,i).then(l=>{this.pickups=l,this.syncDevices(!0)}))}householdState(e,t,n){var l,u,c,d;let r=p=>{let h=parseInt(p.slice(1),16);return[(h>>16&255)/255,(h>>8&255)/255,(h&255)/255]};if(n.type==="waste_bin"){let p=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!p)return null;let h=Ai(n,e,this.pickups,new Date,{from:(u=(l=this.building)==null?void 0:l.settings.household)==null?void 0:u.bin_from,until:(d=(c=this.building)==null?void 0:c.settings.household)==null?void 0:d.bin_until});if(!h)return null;let f=h.days===0?T(e,"bin_today"):h.days===1?T(e,"bin_tomorrow"):T(e,"bin_in_days",{n:h.days}),m=r(hc(n)[1]),g=Math.max(...m),w=g-Math.min(...m)<.12?[.92,.95,1]:m.map(y=>Math.min(1,y/Math.max(.001,g)*1.05)),v=n.name||T(e,`bin_kind_${n.bin_kind??"rest"}`),k=Ti(n,e),S=`#${w.map(y=>Math.round(y*255).toString(16).padStart(2,"0")).join("")}`,M=k?T(e,"bin_out_done"):f;return this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:_e(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:v,color:S,when:M,soon:h.days<=1&&!k,days:h.days,out:k}),{item:h.days<=1?{icon:k?"check-circle-outline":"trash-can-outline",text:`${v}: ${M}`,entity:p,hot:h.glow&&!k}:void 0}}if(n.type!=="mailbox"){let p=zi(n,e),h=[1,.55,.12],f=n.name||Ae(e,n.type);return p?(this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:_e(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:f,color:"#ff8c1f",when:T(e,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:h,level:.9,faces:[{part:"band",color:h,level:.9}]},item:{icon:"watering-can-outline",text:T(e,"hh_plant",{name:f}),entity:n.moisture??null,hot:!0}}):null}let i=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!i)return null;let a=wc(n,e),s=[1,.62,.15];return a&&this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:_e(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:n.name||Ae(e,n.type),color:"#ffb547",when:T(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:a?{color:s,level:1,faces:[{part:"top",color:s,level:1},{part:"band",color:s,level:.8}]}:void 0,item:a?{icon:"email-alert-outline",text:n.name?`${n.name}: ${T(e,"mailbox_post")}`:T(e,"mailbox_post"),entity:i,hot:!0}:void 0}}robotPaths(e,t){var i,a;let n=this.replay;if(!n)return[];let r=[];for(let s of t.floors){let l=s.rooms.filter(u=>u.points.length>=3);for(let u of s.furniture){if(!rn(u.type))continue;let c=((a=(i=this.furnitureLinks)==null?void 0:i.get(u.id))==null?void 0:a.entity)??null;if(!c)continue;let d=n.robotRooms(c,Xn(e,c,u.room_sensor)),p=[];for(let h of d){let f=wi(e,l,h),m=f?He(f.points):null,g=p[p.length-1];m&&(!g||g[0]!==m[0]||g[1]!==m[1])&&p.push([m[0],m[1]])}p.length&&r.push({floorId:s.id,points:p})}}return r}trailNow(e,t){let n=this.now(),r=ho(e,t),i=this.replay?this.replay.rows(r.map(s=>s.entity),n-po,n):this.trailRows,a=r.map(s=>{let l=e.states[s.entity];return{entity:s.entity,state:l==null?void 0:l.state,lastChanged:l!=null&&l.last_changed?Date.parse(l.last_changed):void 0}});return su(r,au(i,a,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!V("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!V("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let r=ho(t,n).map(i=>i.entity);if(r.length){try{let i=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-po).toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=i??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,t){let n=[];if(ic()){let r=new Set(t.floors.flatMap(i=>i.placements.map(a=>a.entity_id)).filter(i=>L(i)==="camera"));for(let i of r){let a=e.states[i],s=a==null?void 0:a.attributes.entity_picture;!s||X(a)||n.push({id:i,url:s.startsWith("data:")?s:`${s}${s.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t==null?void 0:t.attributes.entity_picture;return!n||X(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),js(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(r=>{if(n.has(r.type)||r.type.startsWith("lamp_")&&r.type!=="lamp_floor"&&r.type!=="lamp_uplight"||r.h<.04||_e(e,r)>.12)return!1;let i=we(r.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(r.type))?!1:B([r.x,r.z],t)||Ht(r).some(a=>B(a,t))}).map(r=>Ht(r))}robotInfos(e,t){var r,i;let n=[];for(let a of t.floors)for(let s of a.furniture){if(!rn(s.type))continue;let l=((r=this.furnitureLinks.get(s.id))==null?void 0:r.entity)??null,u=l?(i=e.states[l])==null?void 0:i.state:void 0,c=mi(u)?"cleaning":u==="returning"?"returning":u==="error"?"error":u==="docked"||!u?"docked":"idle",d=s.rotation*Math.PI/180,p=_t(s.type),h=s.d*(p?Gs(we(s.type)):.14),f=[s.x-Math.sin(d)*h,s.z+Math.cos(d)*h],m=a.rooms.filter(v=>v.points.length>=3),_=(c==="cleaning"?Zl(e,m,l,Xn(e,l,s.room_sensor)):null)??m.find(v=>B(f,v.points)),w=c==="cleaning"&&_?this.robotObstacles(a,_.points):[];n.push({id:s.id,floorId:a.id,rest:f,restHeading:-d,mode:c,room:(_==null?void 0:_.points)??null,roomId:(_==null?void 0:_.id)??null,obstacles:w,...p?{model:{type:s.type,w:s.w,d:s.d,h:s.h}}:{}})}return n}batteryText(e,t,n){var a;let r=t?Number((a=e.states[t])==null?void 0:a.state):Number.NaN,i=[];return Number.isFinite(r)&&i.push(`${oe(e,r,0)} %`),n!==null&&Math.abs(n)>=10&&i.push(`${n<0?"\u25B2":"\u25BC"} ${he(e,Math.abs(n))}`),i.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?he(e,0):`${T(e,t<0?"energy_grid_export":"energy_grid_import")} ${he(e,Math.abs(t))}`}wallboxText(e,t,n){let r=t?e.states[t]:void 0,i=String((r==null?void 0:r.state)??"").toLowerCase(),a=(n??0)>50||/charg|laden|lädt/.test(i),s=r!=null&&r.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=a?T(e,"wallbox_charging"):s?T(e,"wallbox_plugged"):r&&!X(r)&&!r.entity_id.startsWith("binary_sensor.")?Ee(e,r):"",u=n!==null&&n>50?he(e,n):"";return[l,u].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],r=t.state_entity&&t.state_entity!=="none"&&t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[i,a]of r){if(!i||i==="none")continue;let s=e.states[i];if(!s||X(s)||!(tt(s)||s.state==="home"||s.state==="occupied"||s.state==="on"))continue;let u=L(i)==="light"?Ot(s):null;n.push({part:a,color:u?u.color:[1,.71,.28],level:u?u.level:.85})}return n}carText(e,t,n){let r=a=>T(e,a);if(n||t.away!==null){let a=t.away?` \xB7 ${t.away}`:"";return`${r("car_away")}${a}`}let i=[];return t.soc!==null&&i.push(`${oe(e,t.soc,0)} %`),t.range!==null&&i.push(`${oe(e,t.range,0)} ${t.rangeUnit}`),t.charging?i.push(t.chargingW!==null?`\u26A1 ${he(e,t.chargingW)}`:`\u26A1 ${r("car_charging_short")}`):t.plugged&&i.push("\u{1F50C}"),t.locked!==null&&i.push(t.locked?"\u{1F512}":"\u{1F513}"),i.join(" \xB7 ")}ceilingAt(e,t,n){var l;let i=((l=e.rooms.find(u=>u.ceiling_height&&u.points.length>=3&&B([t,n],u.points)))==null?void 0:l.ceiling_height)||e.height,a=this.building;if(!a||!Di(a).some(u=>Uc(u,e.elevation+i)&&Vi(u,e.elevation)))return i;let s=Kc(a,t,n,e.elevation);return s===null?i:Math.max(.5,Math.min(i,s-e.elevation))}apOf(e){var t,n;if(!this.hass||!this.building)return null;for(let r of this.building.floors)for(let i of r.furniture){if(i.type!=="access_point")continue;let a=((n=(t=this.furnitureLinks)==null?void 0:t.get(i.id))==null?void 0:n.entity)??i.entity;if(a===e)return Wn(this.hass,{entity:a})}return null}apText(e,t){if(t.status==="down")return T(e,"ap_down");if(t.status==="busy")return T(e,"ap_busy");let n=[];return t.clients!==null&&n.push(T(e,t.clients===1?"ap_client":"ap_clients",{n:Math.round(t.clients)})),t.cpu!==null&&n.push(`CPU ${oe(e,t.cpu,0)} %`),n.join(" \xB7 ")||T(e,"ap_up")}heaterPower(e){var t,n;if(!this.hass||!this.building||!e.startsWith("water_heater."))return null;for(let r of this.building.floors)for(let i of r.furniture){if(i.type!=="water_heater")continue;let a=((n=(t=this.furnitureLinks)==null?void 0:t.get(i.id))==null?void 0:n.entity)??i.entity;if(a===e)return Bn(this.hass,{entity:a}).power}return null}heaterText(e,t){if(!t.on)return T(e,"state_off");let n=We(e),r=a=>`${oe(e,a,0)} ${n}`,i=[t.current!==null?t.target!==null&&t.heating?`${r(t.current)} \u2192 ${r(t.target)}`:r(t.current):null];return t.showers!==null&&i.push(T(e,t.showers===1?"heater_shower":"heater_showers",{n:Math.round(t.showers)})),t.remaining!==null&&i.push(T(e,"heater_left",{min:Math.round(t.remaining)})),i.filter(Boolean).join(" \xB7 ")}lampMarker(e,t,n,r,i=!1){let a=r?e.states[r]:void 0,s=we(n.type),l=wl[n.type]??(s==null?void 0:s.light)??"floor",u=t.rooms.some(v=>v.points.length>=3&&B([n.x,n.z],v.points)),c=l==="strip"&&!u?ct(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||l==="wall"||l==="strip"?_e(t,n):l==="table"?Eo(t,n.x,n.z,n.h):l==="bollard"||l==="garden"?ct(t,n.x,n.z):0,d=t.rooms.find(v=>v.points.length>=3&&B([n.x,n.z],v.points)),p=this.ceilingAt(t,n.x,n.z),h=(s?s.mount==="ceiling":["ceiling","ceiling_fan","downlight","spot","panel","pendant"].includes(l))&&n.mount_y==null,f=h?t.height-p:0,m=s&&h?Math.max(0,c-f):c,g=Po.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+Io(n.type,n.h)):Math.abs(f)>.01?p:void 0,_=g??t.height,w=s?s.mount==="ceiling"?Math.max(.5,m-.15):m+n.h+.2:{ceiling:_-.3,ceiling_fan:_-.45,downlight:_-.25,spot:_-.35,panel:_-.25,pendant:Math.max(.6,_-n.h-.25),floor:m+n.h+.25,uplight:m+n.h+.25,table:m+n.h+.2,wall:m+n.h+.2,strip:n.upright?m+n.w+.15:Math.max(.3,m-.2),bollard:m+n.h+.25,garden:m+n.h+.25}[l];return{id:r??`lamp:${n.id}`,floorId:t.id,roomId:(d==null?void 0:d.id)??null,x:n.x,z:n.z,y:w,icon:n.icon?Ut(n.icon):kn(i?"fan":"light"),name:n.name||(r?Y(e,r):Ae(e,n.type)),text:a?Ee(e,a):"",active:a?tt(a):!1,unavailable:a?X(a):!1,glow:i?null:a?ea(Wl(ql(Ot(a,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_color),n.glow_scale):null,lamp:l,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,size:[n.w,n.d,n.h],base:m,top:g,pickable:!!r,furnitureId:i?`${n.id}:fan`:n.id,fanBlades:i||void 0,fanSpeed:i?Dm(a):void 0,fanStatic:n.type==="lamp_ceiling_fan"&&!i&&!np(n)?!0:void 0,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?m:m+n.h*.85:void 0,effect:!!a&&a.state==="on"&&!n.glow_color&&Bl(a)&&typeof a.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(a.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(e){var r;if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let t=(r=this.building)==null?void 0:r.floors.find(i=>i.id===e.floorId),n=t?ce(t).find(i=>i.id===this.roomId):void 0;return!!n&&B([e.x,e.z],n.points)}showPin(e){if(e.id.startsWith("lamp:"))return!1;if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="active")return e.active;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let t=L(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){if(n.lock&&!n.cover||gi(n.cover)){e.set(t,`opening:${t}`);continue}let r=n.cover??n.contact??n.tilt;r&&e.set(t,r)}return e}scheduleThumbs(e=600){var r;clearTimeout(this.thumbTimer);let t=((r=this.building)==null?void 0:r.floors.filter(i=>i.rooms.length).length)??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return x;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),t=[...this._thumbs].sort((i,a)=>{var s,l;return(((s=this.building.floors.find(u=>u.id===a.floorId))==null?void 0:s.elevation)??0)-(((l=this.building.floors.find(u=>u.id===i.floorId))==null?void 0:l.elevation)??0)}),n=this._thumbsCompact,r=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return b`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${T(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${T(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${T(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${r}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${T(this.hass,"all_floors")}</span>
      </button>
      ${t.map(i=>b`<button class="fp3d-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${n?x:b`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!0);if(this.ro){this.onDeviceTap(e,t,n);return}let r=this.apOf(e);if(r){!r.restart||!this.hass?Pe(this,e):confirm(T(this.hass,"ap_restart_confirm",{name:So(this.hass,e)}))&&this.hass.callService("button","press",{entity_id:r.restart});return}if(V("auto_pro")&&this.hass&&this.building)for(let a of this.building.floors)for(let s of a.furniture){if(s.type!=="parking"||!s.car)continue;let l=Jn(this.hass,s);if([s.entity,s.car.device,...Object.values(l.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:l};return}}let i=L(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:t,y:n}:Pe(this,e)}onDeviceSwipe(e,t,n,r,i){var l;let a=(l=this.hass)==null?void 0:l.states[e];if(this.ro)return!1;if(t==="start"){if(!a||X(a)||this.confirmSet.has(e))return!1;let u=L(e);if(u==="light"&&_a(a).dim){let c=a.state==="on"?typeof a.attributes.brightness=="number"?Math.round(a.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:r,y:i},!0}if(u==="cover"&&va(a)){let c=a.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:r,y:i},!0}return!1}let s=this._swipe;if(!s||s.entity!==e)return!1;if(t==="move"){let u=Math.round(Math.min(100,Math.max(0,s.start-n/220*100)));u!==s.value&&(this._swipe={...s,value:u});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>{var t;return(t=this.viewer)==null?void 0:t.focus(e.floorId,e.x,e.z,e.y,e.entity)},120)}renderBinInfo(){var c;let e=this._binInfo,t=this.hass,n=e&&((c=this.building)==null?void 0:c.floors.flatMap(d=>d.furniture).find(d=>d.id===e.furnitureId));if(!e||!t||!n)return x;let r=gc(n,t,this.pickups),i=new Date;i.setHours(0,0,0,0);let a=d=>{let p=Math.round((d.getTime()-i.getTime())/864e5);return p===0?T(t,"bin_today"):p===1?T(t,"bin_tomorrow"):d.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},s=n.name||T(t,`bin_kind_${n.bin_kind??"rest"}`),l=Ti(n,t),u=d=>{d.stopPropagation(),typeof n.bin_out=="string"&&Sn(t,n.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return b`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${s}</span>
      ${r.length?r.map(d=>b`<b>${a(d.day)}${d.summary&&d.summary!==s?b` <small>· ${d.summary}</small>`:x}</b>`):b`<b>${T(t,"bin_none")}</b>`}
      ${bc(n)&&!this.ro?b`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${u}>${l?T(t,"bin_out_done"):T(t,"bin_out_mark")}</button>`:l?b`<small>${T(t,"bin_out_done")}</small>`:x}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!V("household")||this.panelOpen)return x;let e=()=>{this._hhFolded=!this._hhFolded,Bm("neonplan3d.hhFolded",this._hhFolded)};return b`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${T(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?x:this._household.map(t=>b`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):Pe(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderClock(){var a;let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),x;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let t=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),r=(a=this.hass.config)==null?void 0:a.time_zone,i=s=>{try{return t.toLocaleString(n,r?{...s,timeZone:r}:s)}catch{return t.toLocaleString(n,s)}};return b`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${i({hour:"2-digit",minute:"2-digit",...Rn(this.hass)})}</b><span>${i({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return x;let t=this._alerts.slice(0,3);return b`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>b`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${Dt(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Dt(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?b`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:x}
    </div>`}renderScenes(){var i,a;let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return x;let t=e.floors.flatMap(s=>ce(s)).find(s=>s.id===this.roomId),n=t?xe(this.hass,t.area_id).filter(s=>L(s)==="scene"||L(s)==="script").slice(0,6):[];if(!n.length)return x;let r=t!=null&&t.area_id?(a=(i=this.hass.areas)==null?void 0:i[t.area_id])==null?void 0:a.name:void 0;return b`<div class="fp3d-scenes">
      ${n.map(s=>b`<button class="fp3d-chip" aria-pressed=${this._sceneFired===s} @click=${()=>this.runScene(s)}>${Y(this.hass,s,r)}</button>`)}
    </div>`}async syncPets(){var a,s,l,u,c,d,p;let e=this.building,t=this.viewer,n=((a=e==null?void 0:e.settings.pets)==null?void 0:a.on)!==!1&&this.petsOn!==!1,r=n?((s=e==null?void 0:e.settings.pets)==null?void 0:s.list)??[]:[],i=n&&!!(e!=null&&e.floors.some(h=>h.furniture.some(f=>/:aquarium(_large)?$/.test(f.type))));if(!t||!e||!V("fun_pets")||!r.length&&!i){(l=this.pets)==null||l.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,r));return}if(!this.petsLoading){this.petsLoading=!0;try{let[h,f]=await Promise.all([wa(),fo()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=h.startPets({lib:f.funLib,FloorMap:f.FloorMap,viewer:this.viewer,building:this.building,pets:((c=(u=this.building)==null?void 0:u.settings.pets)==null?void 0:c.on)!==!1&&this.petsOn!==!1?((p=(d=this.building)==null?void 0:d.settings.pets)==null?void 0:p.list)??[]:[],night:()=>{var m,g;return((g=(m=this.hass)==null?void 0:m.states["sun.sun"])==null?void 0:g.state)==="below_horizon"},base:(m,g)=>_e(m,g),closedDoors:()=>{var _,w,v;let m=new Set,g=((_=this.hass)==null?void 0:_.states)??{};for(let k of((w=this.building)==null?void 0:w.floors)??[])for(let S of k.openings)S.type==="door"&&S.contact&&((v=g[S.contact])==null?void 0:v.state)==="off"&&m.add(S.id);return m}})}catch(h){console.error("CasaNeon: the pets failed to load",h)}finally{this.petsLoading=!1}}}async syncGhost(){var n,r;let e=this.building,t=!!e&&V("fun_halloween")&&((n=e.settings.halloween)==null?void 0:n.ghost)!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){(r=this.ghost)==null||r.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[i,a]=await Promise.all([wa(),fo()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=i.startGhost({lib:a.funLib,viewer:this.viewer,building:this.building,night:()=>{var s,l;return((l=(s=this.hass)==null?void 0:s.states["sun.sun"])==null?void 0:l.state)==="below_horizon"}})}catch(i){console.error("CasaNeon: the ghost failed to load",i)}finally{this.ghostLoading=!1}}}walkHere(){this.startWalk()}async startWalk(){let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=this.roomId,r=e.floors.filter(p=>p.rooms.some(h=>h.points.length>=3)),a=(n?r.find(p=>p.rooms.some(h=>h.id===n)):void 0)??r.find(p=>p.id===this.floorId)??[...r].sort((p,h)=>Math.abs(p.elevation)-Math.abs(h.elevation))[0];if(!a)return;let s=await fo();this._walk={room:null,hint:!0},this.walkChanged(!0),await this.updateComplete;let l=this.renderRoot.querySelector(".fp3d-walk-surface");if(!l)return;t.setFloor(a.id,!1),t.setWallMode("auto");let u=new s.FloorMap(e,a),c=n?a.rooms.find(p=>p.id===n):void 0,d;if(c){let p=u.freeNear(He(c.points));d={x:p[0],z:p[1],yaw:u.openYaw(p),pitch:-.05}}this.walker=new s.WalkCamera(t,u,l,{start:d,onRoom:p=>{this.walkRoomPts=(p==null?void 0:p.points)??null,this._walk&&(this._walk={...this._walk,room:(p==null?void 0:p.name)??null}),this.syncDevices(!0)}}),this.walkKeys=p=>{p.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}walkChanged(e){this.dispatchEvent(new CustomEvent("walk-change",{detail:{walking:e},bubbles:!0,composed:!0}))}stopWalk(){var t;if(!this.walker&&!this._walk)return;(t=this.walker)==null||t.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null,this.walkChanged(!1);let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return x;let e=i=>T(this.hass,i);if(!this._walk&&this.panelOpen)return x;if(!this._walk)return b`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,r=(i,a)=>{var d;if(!n)return;let s=44,l=i.clientX-n.cx,u=i.clientY-n.cy,c=Math.hypot(l,u);c>s&&([l,u]=[l/c*s,u/c*s]),a.firstElementChild.style.transform=`translate(${l}px, ${u}px)`,(d=this.walker)==null||d.setStick({x:l/s,y:u/s})};return b`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?b`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:x}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${i=>{let a=i.currentTarget,s=a.getBoundingClientRect();n={id:i.pointerId,cx:s.left+s.width/2,cy:s.top+s.height/2},a.setPointerCapture(i.pointerId),r(i,a)}}
        @pointermove=${i=>r(i,i.currentTarget)}
        @pointerup=${i=>{var a;n=null,i.currentTarget.firstElementChild.style.transform="",(a=this.walker)==null||a.setStick(null)}}
        @pointercancel=${i=>{var a;n=null,i.currentTarget.firstElementChild.style.transform="",(a=this.walker)==null||a.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return x;if(this._find===null)return b`<button class="fp3d-find-btn" title=${T(this.hass,"find")} aria-label=${T(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=cu(this.findIndex??=vr(this.hass,e),this._find);return b`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${T(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${T(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?b`<div class="fp3d-find-list">
            ${t.length?t.map(n=>b`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?xn(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?b`<small>${n.where}</small>`:x}</span>
                  </button>`):b`<p>${T(this.hass,"find_none")}</p>`}
          </div>`:x}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return x;let n=(g,_)=>T(t,g,_),r=b`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return r;let i=this.floorId?e.floors.find(g=>g.id===this.floorId):void 0,a=i?[i]:e.floors,s=a.flatMap(g=>xi(t,g).lights),l=a.flatMap(g=>xi(t,g).covers),u=s.filter(g=>{var _;return((_=t.states[g])==null?void 0:_.state)==="on"}).length,c=!i,d=(g,_,w,v)=>{if(v.length){if(c&&this._armed!==g){this._armed=g,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}if(this._armed=null,_==="cover"&&(w==="open_cover"||w==="close_cover")){for(let k of Ro(t,v,w==="open_cover"?"open":"close"))t.callService("cover",k.service,k.data);return}t.callService(_,w,{entity_id:v})}},p=(g,_,w,v,k)=>b`<button class="fp3d-btn ${this._armed===g?"fp3d-central-armed":""}" ?disabled=${!k.length} @click=${()=>d(g,w,v,k)}>
        ${this._armed===g?n("central_sure"):n(_)}
      </button>`,h=(e.settings.favorites??[]).filter(g=>t.states[g]),f=this.buttons??e.settings.buttons??[],m=Yt()?ma(this.sceneHost(t,e)):[];return b`${r}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <div class="fp3d-central-top">
          <b>${i?i.name:n("central_house")}</b>
          <button class="fp3d-btn fp3d-central-gear" title=${n("view_settings")} aria-label=${n("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${n("view_settings")}</button>
        </div>
        ${m.length?b`<div class="fp3d-central-favs">
              ${m.map(g=>b`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:g.id,floorId:null,roomId:null}}}><span aria-hidden="true">${g.icon}</span> ${g.title}</button>`)}
            </div>`:x}
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${s.length?b` <small>${u}/${s.length}</small>`:x}</span>
          ${p("lights_on","central_on","light","turn_on",s.filter(g=>{var _;return((_=t.states[g])==null?void 0:_.state)==="off"}))}
          ${p("lights_off","central_off","light","turn_off",s.filter(g=>{var _;return((_=t.states[g])==null?void 0:_.state)==="on"}))}
        </div>
        ${l.length?b`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:x}
        <b>${n("central_favorites")}</b>
        ${h.length?b`<div class="fp3d-central-favs">
              ${h.map(g=>{let[_,w]=fn(g),v=t.states[g],k=_==="homeassistant"&&(v==null?void 0:v.state)==="on";return b`<button
                  class="fp3d-chip"
                  aria-pressed=${k||this._sceneFired===g}
                  ?disabled=${X(v)}
                  @click=${()=>{t.callService(_,w,{entity_id:g}),this._sceneFired=g,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${Y(t,g)}
                </button>`})}
            </div>`:f.length?x:b`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${f.length?b`<div class="fp3d-central-favs">
              ${f.map(g=>b`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${qm(t,g)}
                  @click=${_=>{tc(t,_.currentTarget,g),g.action!=="service"&&(this._central=!1)}}
                >
                  ${g.icon?b`<ha-icon .icon=${g.icon.startsWith("mdi:")?g.icon:`mdi:${g.icon}`}></ha-icon>`:x}${g.label}
                </button>`)}
            </div>`:x}
      </div>`}mediaCardUp(e,t){var i;let n=e.states[t];if(!n||L(t)!=="media")return!1;if(!this.ro&&(((i=this.mediaGrace.get(t))==null?void 0:i.until)??0)>Date.now()&&X(n))return!0;let r=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(a=>typeof a=="string"&&!!a.trim());return!X(n)&&(n.state==="playing"||n.state==="paused"&&r&&this.pausedRecently(n))}pausedRecently(e){let t=Date.parse(e.last_changed??"");if(!Number.isFinite(t))return!0;let n=t+Om-Date.now();if(n<=0)return!1;let r=Date.now()+n+500;return(!this.pausedTimer||r<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=r,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},n+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return x;let e=T(this.hass,this.clean?"controls_show":"controls_hide");return b`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?lt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:lt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return x;let t=this._voice,n=(t==null?void 0:t.phase)==="wait"||(t==null?void 0:t.phase)==="listen",r=T(e,"voice_button"),i=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return b`<button class="fp3d-mic ${(t==null?void 0:t.phase)==="listen"?"fp3d-mic-on":""}" style="left:${i}px" title=${r} aria-label=${r} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${lt`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${t?b`<div class="fp3d-mic-say ${t.phase==="error"?"fp3d-mic-err":""}" style="left:${i}px">${t.text}</div>`:x}`}sayVoice(e,t){this._voice={phase:e,text:t},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){var a;let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==r)return;if(e.show_rooms){(!e.admins_only||(a=t.user)!=null&&a.is_admin)&&this.showRooms(n,e.show_rooms);return}let i=null;try{let s=await ft();i=await this.handleSentence(t,n,s,e.text,e.speak),i===null&&this.sayVoice("error",T(t,"voice_none"))}catch(s){this.sayVoice("error",T(t,"voice_error",{msg:String((s==null?void 0:s.message)??s)}))}try{await Ls(t,e.ask_id,i??"",i!==null)}catch{}}async onAnnounce(e){let t=this.hass;if(!t)return;let n=(this.screen??"").trim().toLowerCase();if(!(e.screens.length&&!e.screens.some(r=>r.trim().toLowerCase()===n))&&!rp.has(e.id)){rp.add(e.id),this._announce=e.message,clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>this._announce=null,12e3);try{await Km(),await(await ft()).speak(t,e.message,mt())}catch{}}}onReload(e){e.plan&&e.plan!==(this.planId??pe)||e.templates.length&&!(this.template&&e.templates.includes(this.template))||ip.has(e.id)||(ip.add(e.id),!(Date.now()-(window.fp3dReloadSent??0)<15e3)&&(this._announce=T(this.hass,"screen_reloading"),setTimeout(()=>location.reload(),500+Math.random()*4e3)))}openRoom(e){if(!this.roomId)return null;for(let t of e.floors){let n=ce(t).find(r=>r.id===this.roomId);if(n)return{floor:t,room:n}}return null}async roomAction(e,t,n){let r=()=>Sd(t.floors,this.voiceArea??za()),i=c=>{let d=t.floors.find(h=>h.id===c.floorId),p=d&&ce(d).find(h=>h.id===c.roomId);return d&&p?{floor:d,room:p}:null},a=n.room==="there"?this.openRoom(t):n.room==="here"?r():n.room?i(n.room):r()??this.openRoom(t);if(!a)return T(e,n.room==="there"?"voice_noroom_open":"voice_noroom");let s=a.room.name,l=async c=>{await Promise.all(c.map(d=>e.callService(d.domain,d.service,d.data)))};if(n.action==="clean"){let c=sr(e,a.room);return c?(await l([c]),T(e,"voice_clean_started",{room:s})):T(e,"voice_clean_none",{room:s})}let u=ir(e,a.floor,a.room);return u.length?(await l(u),T(e,"voice_off_done",{room:s,n:ar(u)})):T(e,"voice_off_nothing",{room:s})}async onMic(){var i,a;let e=this.hass,t=this.building;if(!e||!t||((i=this._voice)==null?void 0:i.phase)==="wait"||((a=this._voice)==null?void 0:a.phase)==="listen")return;clearTimeout(this.voiceTimer);let n=(s,l)=>this.sayVoice(s,l);n("wait","\u2026"),this.tourToken++;let r;try{let s=window.AudioContext??window.webkitAudioContext;r=new s,r.resume().catch(()=>{})}catch{r=void 0}try{let s=await ft(),l=await s.listenOnce(e,()=>n("listen",T(e,"voice_listen")),mt(),r);if(!l){n("error",T(e,"voice_none"));return}if(await this.handleSentence(e,t,s,l,!0)!==null)return;n("wait",`\u201C${l}\u201D \u2026`);let u=this.voiceArea??za(),c=l,d=this.openRoom(t);d!=null&&d.room.area_id&&s.saysThere(l,e.language)&&(u=d.room.area_id,c=s.withoutThere(l,e.language));let p=await s.converse(e,c,u);n("done",p?`\u201C${l}\u201D \u2013 ${p}`:`\u201C${l}\u201D`)}catch(s){let l=s,u=(l==null?void 0:l.message)==="no_pipeline"?"voice_no_pipeline":(l==null?void 0:l.message)==="silent"?"voice_silent":(l==null?void 0:l.name)==="NotAllowedError"||(l==null?void 0:l.name)==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",u?T(e,u):T(e,"voice_error",{msg:String((l==null?void 0:l.message)??(l==null?void 0:l.name)??s)}))}}async handleSentence(e,t,n,r,i){var c,d,p,h;let a=(f,m)=>this.sayVoice(f,m),{devices:s,items:l}=this.spokenDevices(e,t,n.SYNONYMS),u=this.replay?null:n.roomIntent(r,t,e.language,f=>{var m,g;return f.area_id?(g=(m=e.areas)==null?void 0:m[f.area_id])==null?void 0:g.name:null});if(u){let f=await this.roomAction(e,t,u);return a("done",`\u201C${r}\u201D \u2013 ${f}`),i&&n.speak(e,f,mt()),f}{let f=n.showTarget(r,t,s,w=>{var v,k;return w.area_id?(k=(v=e.areas)==null?void 0:v[w.area_id])==null?void 0:k.name:null});if(f){let w=f.kind==="house"?T(e,"all_floors"):f.kind==="cameras"?T(e,"camera_wall_title"):f.name;if(a("done",`\u201C${r}\u201D \u2192 ${w}`),this.directing.touch(Date.now()),f.kind==="cameras")V("camera_cockpit")?this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0})):this._proHint="camera_cockpit";else if(f.kind==="device"){let v=l.get(f.id);f.camera&&f.entity&&V("camera_cockpit")?this.lookThrough(f.entity):v&&this.goTo(v)}else f.kind==="house"?this.fire("floor-tap",{floorId:null}):f.kind==="floor"?this.fire("floor-tap",{floorId:f.floorId}):(this.floorId!==f.floorId&&this.fire("floor-tap",{floorId:f.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:f.floorId,roomId:f.roomId}),60));return T(e,"voice_showing",{name:w})}let m=await e.callWS({type:"neonplan3d/locate/ask",text:r,language:e.language}).catch(()=>null);if(m)return a("done",`\u201C${r}\u201D \u2013 ${m.text}`),m.rooms.length&&(!m.admins_only||(c=e.user)!=null&&c.is_admin)&&this.showRooms(t,m.rooms),i&&n.speak(e,m.text,mt()),m.text;let g=this.moduleHost(e,t,n.SYNONYMS,w=>n.showTarget(w,t,s,v=>{var k,S;return v.area_id?(S=(k=e.areas)==null?void 0:k[v.area_id])==null?void 0:S.name:null})),_=await uu(r,g);if(_){a("done",_.text?`\u201C${r}\u201D \u2013 ${_.text}`:`\u201C${r}\u201D`),this.directing.touch(Date.now()),(d=_.highlight)!=null&&d.length&&((p=this.viewer)==null||p.flashDevices(_.highlight));let w=_.focus,v=_.spoken??_.text??"";if((h=_.tour)!=null&&h.length){let k=i&&_.speak!==!1?M=>n.speak(e,M,mt()):null,S=_.spoken??_.text;return S&&k&&await k(S),this.runTour(_.tour,t,l,k),v}if(w!=null&&w.roomId&&w.floorId)this.floorId!==w.floorId&&this.fire("floor-tap",{floorId:w.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:w.floorId,roomId:w.roomId}),60);else if(w!=null&&w.floorId&&!w.entity&&!w.furnitureId)this.fire("floor-tap",{floorId:w.floorId});else if(w!=null&&w.entity||w!=null&&w.furnitureId){let k=l.get(w.entity??`furniture:${w.furnitureId}`);k&&this.goTo(k)}return _.text&&_.speak!==!1&&i&&n.speak(e,_.text,mt()),v}}return null}spokenDevices(e,t,n){let r=this.findIndex??=vr(e,t),i=new Map(t.floors.flatMap(d=>ce(d).map(p=>[p.id,p.name]))),a=[],s=[],l=new Map;for(let d of r)d.kind==="device"&&d.entity&&l.set(d.entity,d);let u=new Set;for(let d of t.floors){let p=ce(d);for(let h of d.furniture){if(Ym.has(h.type))continue;let f=this.furnitureLinks.get(h.id),m=(f==null?void 0:f.entity)??(f==null?void 0:f.power)??null,g=m??`furniture:${h.id}`,_=p.find(C=>C.points.length>=3&&B([h.x,h.z],C.points)),w=Ae(e,h.type),v=[h.name,...h.aliases??[],w,m?Y(e,m):null,...n[h.type]??[]].filter(C=>!!C),k=h.name||(m?Y(e,m):w);a.push({id:g,entity:m,name:k,names:v,room:(_==null?void 0:_.name)??"",camera:!!m&&L(m)==="camera"});let S=(h.type==="plant"||Pi(h.type))&&!!h.moisture&&h.moisture!=="none",M=Fi(f!=null&&f.entity?e.states[f.entity]:void 0,f!=null&&f.power?ge(e.states[f.power]):null,typeof h.run_w=="number"&&h.run_w>0?h.run_w:10),y=V("household")&&typeof h.remaining=="string"&&h.remaining!=="none"&&!M?Ci(e.states[h.remaining]):null;s.push({id:g,entity:m,name:k,names:v,room:(_==null?void 0:_.name)??"",floorId:d.id,roomId:(_==null?void 0:_.id)??null,power:(f==null?void 0:f.power)??null,type:h.type,remaining:y,thirsty:S&&V("household")?zi(h,e):null}),m?u.add(m):l.set(g,{kind:"device",name:k,where:"",floorId:d.id,roomId:(_==null?void 0:_.id)??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(d.height-.3,Math.max(.5,h.h))})}}let c=new Map(t.floors.flatMap(d=>d.placements.map(p=>[p.entity_id,p])));for(let[d,p]of l){if(u.has(d)||d.startsWith("furniture:"))continue;let h=p.roomId&&i.get(p.roomId)||"",f=c.get(d),m=[f==null?void 0:f.name,...(f==null?void 0:f.aliases)??[],p.name].filter(g=>!!g);a.push({id:d,entity:d,name:p.name,names:m,room:h,camera:L(d)==="camera"}),s.push({id:d,entity:d,name:p.name,names:m,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:a,items:l,spoken:s}}lockMarkers(e,t){var r,i;let n=[];for(let a of t.floors)for(let s of a.openings){let l=(i=(r=this.openingLinks)==null?void 0:r.get(s.id))==null?void 0:i.lock;if(!l)continue;let u=this.openingSpot(t,s.id,!0);if(!u)continue;let c=e.states[l];n.push({id:l,floorId:a.id,roomId:s.room_id,x:u.x,z:u.z,y:Math.min(u.y+.35,1.5),icon:kn("lock"),name:Y(e,l),text:c?Ee(e,c):"",active:!!c&&(c.state==="unlocked"||c.state==="open"||c.state==="unlocking"),unavailable:!c||X(c),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(e,t,n=!1){for(let r of e.floors){let i=r.openings.find(_=>_.id===t);if(!i)continue;let a=Nc(i,r.rooms,r.walls??[]);if(!a)return null;let s=a.room.points,l=s[a.edge],u=s[(a.edge+1)%s.length],c=Math.hypot(u[0]-l[0],u[1]-l[1])||1,d=[(u[0]-l[0])/c,(u[1]-l[1])/c],h=qe(s)>0?[-d[1],d[0]]:[d[1],-d[0]],f=i.offset;if(n){let _=d[0]*h[1]-d[1]*h[0]>0;f=i.offset-i.width/2+_l(i,i.hinge==="left"===_)}let[m,g]=Uo(a.room,a.edge,f);return{floorId:r.id,x:m+h[0]*.2,z:g+h[1]*.2,y:Math.max(.5,i.sill+i.height/2),theta:Math.atan2(h[0],h[1])}}return null}async showRooms(e,t){let n=t.map(l=>{var u;return{roomId:l,floorId:(u=e.floors.find(c=>c.rooms.some(d=>d.id===l)))==null?void 0:u.id}}).filter(l=>!!l.floorId).slice(0,8);if(!n.length)return;let r=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let i=this.renderRoot.querySelector(".fp3d-stage"),a=()=>{this.tourToken++,clearTimeout(this.tourTimer)};i==null||i.addEventListener("pointerdown",a,{once:!0});let s=l=>new Promise(u=>this.tourTimer=setTimeout(u,l));for(let[l,u]of n.entries()){if(r!==this.tourToken||(this.floorId!==u.floorId&&(this.fire("floor-tap",{floorId:u.floorId}),await s(150)),r!==this.tourToken))break;this.roomId!==u.roomId&&this.fire("room-tap",{floorId:u.floorId,roomId:u.roomId}),this.directing.touch(Date.now()),l<n.length-1&&await s(4e3)}i==null||i.removeEventListener("pointerdown",a)}async runTour(e,t,n,r){var c;let i=++this.tourToken;clearTimeout(this.tourTimer);let a=e.map(d=>{if(d.openingId){let h=this.openingSpot(t,d.openingId);return h?{...h,entity:null,say:d.say,inside:!0}:null}let p=n.get(d.entity??`furniture:${d.furnitureId}`);return p?{floorId:p.floorId,x:p.x,z:p.z,y:p.y,theta:void 0,entity:p.entity,say:d.say,inside:!1}:null}).filter(d=>!!d).slice(0,8);if(!a.length)return;let s=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};s==null||s.addEventListener("pointerdown",l,{once:!0});let u=d=>new Promise(p=>this.tourTimer=setTimeout(p,d));for(let d of a){if(i!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await u(150)),i!==this.tourToken)||((c=this.viewer)==null||c.focus(d.floorId,d.x,d.z,d.y,d.entity,d.inside?{radius:3.2,phi:1.05,theta:d.theta}:void 0),await u(900),i!==this.tourToken))break;let p=d.say&&r?await r(d.say):!1;if(i!==this.tourToken)break;await u(p?1200:2600)}s==null||s.removeEventListener("pointerdown",l)}spokenOpenings(e,t){var s,l,u;let n=[],r=c=>T(e,c);for(let c of t.floors){let d=new Map(ce(c).map(p=>[p.id,p.name]));for(let p of c.openings){let h=(s=this.openingLinks)==null?void 0:s.get(p.id);if(!h)continue;let f=p.type==="garage"?"garage":p.type==="door"?"door":"window",m=dt(e,h,p.type),g=m.open>.02||m.open2>.02||p.type==="garage"&&(m.cover??0)>.02,_=!g&&(m.tilt>.02||m.tilt2>.02);for(let w of[h.contact,h.contact2,h.cover,h.tilt,h.tilt2])w&&w!=="none"&&n.push({id:p.id,entity:w,kind:f,name:r(`opening_${p.type}`),room:d.get(p.room_id)??"",floorId:c.id,roomId:p.room_id,open:g,tilted:_})}}let i=((l=t.settings.roof)==null?void 0:l.windows)??[],a=i.length?new Map(Mt(t).map(c=>[c.key,c])):null;for(let c of i){let d=op(e,c),p=d.open>.02,h=!p&&d.tilt>.02,f=[c.window,c.contact,c.cover,c.tilt].filter(v=>!!v&&v!=="none"),m=(u=f.map(v=>Oe(e,v)).filter(v=>!!v).map(v=>t.floors.flatMap(k=>k.rooms.filter(S=>S.area_id===v).map(S=>({floor:k,room:S})))).find(v=>v.length===1))==null?void 0:u[0],g=m?null:Ki(t,a==null?void 0:a.get(c.face),c),_=(m==null?void 0:m.floor)??(g==null?void 0:g.floor)??t.floors[t.floors.length-1],w=(m==null?void 0:m.room)??(g?_==null?void 0:_.rooms.find(v=>v.id===g.roomId):void 0);for(let v of f)n.push({id:c.id,entity:v,kind:"roof_window",name:c.name||r("roof_window"),room:(w==null?void 0:w.name)??"",floorId:(_==null?void 0:_.id)??"",roomId:(w==null?void 0:w.id)??null,open:p,tilted:h})}return n}sceneHost(e,t){return this.moduleHost(e,t,{},()=>null)}moduleHost(e,t,n,r){let i=null,a=()=>i??=this.spokenDevices(e,t,n).spoken,s={api:1,stage:2,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>a(),findDevice:l=>{let u=r(l);return(u==null?void 0:u.kind)==="device"&&u.id?a().find(c=>c.id===u.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>{var l,u;return!!((u=(l=this.hass)==null?void 0:l.user)!=null&&u.is_admin)&&!this.ro&&!this.noSave},updateBuilding:l=>{var d;let u=this.building;if(!u||!this.hass||this.ro||this.noSave||!((d=this.hass.user)!=null&&d.is_admin))return;let c=structuredClone(u);l(c),this.building=c,qn(this.hass,c,this.planId??void 0).catch(p=>this.serviceFailed("neonplan3d/building/save",p))},callService:(l,u,c)=>this.hass?this.hass.callService(l,u,c):Promise.resolve(),newId:l=>vl(l),waterLevel:(l,u)=>{var p;let c=(p=this.building)==null?void 0:p.floors.find(h=>h.id===l),d=c==null?void 0:c.outdoor.find(h=>h.id===u);return!c||!d||d.type!=="pool"?null:{y:an(c,d),floorY:Un(c,d)}},groundAt:(l,u,c)=>{var p;let d=(p=this.building)==null?void 0:p.floors.find(h=>h.id===l);return d?ct(d,u,c):0},openPopup:(l,u)=>this.openModulePopup(l,u),closePopup:()=>this.closeModulePopup(),imageUrl:l=>this.pictureUrl(l),people:()=>this.lastPersons.flatMap(l=>{var c,d;let u=(d=(c=this.building)==null?void 0:c.floors.find(p=>p.id===l.floorId))==null?void 0:d.rooms.find(p=>p.id===l.roomId);return u?[{id:l.id,floorId:l.floorId,roomId:l.roomId,roomName:u.name}]:[]}),look:()=>this.effectiveTheme()==="day"?"light":"dark",lowPower:()=>this._low,refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:Ra,openings:()=>this.spokenOpenings(e,t),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>{var u;return{id:l.id,entity:l.powerEntity,name:((u=a().find(c=>c.entity===l.id||c.power===l.powerEntity))==null?void 0:u.name)??Y(e,l.id),watts:l.power}}).sort((l,u)=>u.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,t),cars:()=>this.spokenCars(e,t),pools:()=>_u(s),weather:()=>ut(e,this.weatherEntityId??t.settings.weather_entity),listen:async l=>{try{return(await(await ft()).listenOnce(e,l,mt())).trim()||null}catch{return null}},notify:l=>this.showNote(l),tour:(l,u)=>{let c=this.spokenDevices(e,t,n).items,d=u?p=>ft().then(h=>h.speak(e,p,mt())):null;this.runTour(l,t,c,d)},occupied:()=>this.occupiedRooms(e,t),speakers:()=>this.planSpeakers(e,t)};return s}showNote(e){this._note=e,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(e,t){let n=new Map;for(let r of this.lastPersons)r.roomId&&n.set(r.roomId,r);for(let r of t.floors)for(let i of r.rooms){if(n.has(i.id)||!i.area_id)continue;xe(e,i.area_id).some(s=>{let l=e.states[s];return s.startsWith("binary_sensor.")&&(l==null?void 0:l.state)==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&n.set(i.id,{floorId:r.id,roomId:i.id})}return[...n.values()]}planSpeakers(e,t){let n=[],r=new Set;for(let i of t.floors){let a=(s,l)=>{var u;return((u=ce(i).find(c=>c.points.length>=3&&B([s,l],c.points)))==null?void 0:u.id)??null};for(let s of i.placements)!s.entity_id.startsWith("media_player.")||r.has(s.entity_id)||!e.states[s.entity_id]||(r.add(s.entity_id),n.push({entity:s.entity_id,name:Y(e,s.entity_id),floorId:i.id,roomId:a(s.x,s.z),at:[s.x,s.z],top:s.y??1.1}));for(let s of i.furniture){let l=s.entity;!l||!l.startsWith("media_player.")||r.has(l)||!e.states[l]||(r.add(l),n.push({entity:l,name:Y(e,l),floorId:i.id,roomId:a(s.x,s.z),furnitureId:s.id,at:[s.x,s.z],top:_e(i,s)+s.h}))}}return n}roomSheets(e){let t=this.hass,n=this.building;if(!t||!n||this.ro||!Yt())return[];let r=n.floors.find(i=>ce(i).some(a=>a.id===e));return r?fa(this.sceneHost(t,n),{floorId:r.id,roomId:e}).map(i=>({id:i.id,icon:i.icon,title:i.title})):[]}plainOf=null;drawnPlan="";condOf=null;shownSig="";conditioned(){var a;let e=this.building,t=da(this.hass,e);this.shownSig=t;let n=hr(e,this.rooms),r=`${t}|${n.join(",")}`;if(!e||!t&&!n.length)return e;if(((a=this.condOf)==null?void 0:a.from)===e&&this.condOf.sig===r)return this.condOf.to;let i=t?{...e,floors:e.floors.map(s=>({...s,furniture:s.furniture.filter(l=>ca(this.hass,l))}))}:e;return n.length&&(i=fr(i,n)),this.condOf={from:e,sig:r,to:i},i}shownBuilding(){var r;let e=this.conditioned();if(!e||!this.plain)return e;if(((r=this.plainOf)==null?void 0:r.from)===e)return this.plainOf.to;let t=i=>{var a;return ii.has(i.type)||i.type==="stairwell"||!!((a=we(i.type))!=null&&a.hole)},n={...e,floors:e.floors.map(i=>({...i,furniture:i.furniture.filter(t)}))};return this.plainOf={from:e,to:n},n}openRoomSheet(e,t){var r;let n=(r=this.building)==null?void 0:r.floors.find(i=>i.rooms.some(a=>a.id===e));this._sheet={id:t,floorId:(n==null?void 0:n.id)??null,roomId:e}}currentSheet(e,t){let n=this._sheet;if(!n)return null;let r=this.sceneHost(e,t);return(n.roomId&&n.floorId?fa(r,{floorId:n.floorId,roomId:n.roomId}):ma(r)).find(a=>a.id===n.id)??null}openModulePopup(e,t=6e4){clearTimeout(this.popupTimer),this._popup={id:e},this.popupValues={},this.popupTimer=setTimeout(()=>this._popup=null,t)}closeModulePopup(){clearTimeout(this.popupTimer),this._popup=null,this.popupValues={}}renderModulePopup(){let e=this.hass,t=this.building,n=this._popup;if(!e||!t||!n)return x;let r=hu(this.sceneHost(e,t)).find(l=>l.id===n.id);if(!r)return x;let i=()=>this.closeModulePopup(),a=l=>T(e,l),s=l=>{var u,c;switch(l.kind){case"image":{let d=l.live&&V("camera_cockpit")&&((u=t.settings.director)!=null&&u.live)?this.liveFor(l.live):null;return d?b`<div class="fp3d-pop-big fp3d-pop-live">${d}</div>`:b`<img class="fp3d-pop-big" src=${l.src} alt="" />`}case"text":return b`<p class=${l.muted?"fp3d-sub":"fp3d-pop-text"}>${l.text}</p>`;case"heading":return b`<h4 class="fp3d-pop-h">${l.text}</h4>`;case"line":return b`<div class="fp3d-pop-line"><span>${l.text}</span>${l.sub?b`<span>${l.sub}</span>`:x}${l.note?b`<em>${l.note}</em>`:x}</div>`;case"groups":return l.groups.length?b`<div class="fp3d-pop-groups">
                ${l.groups.map(d=>b`<section class=${d.strong?"fp3d-pop-strong":""}>
                    <h4 role=${d.onToggle?"button":x} tabindex=${d.onToggle?0:x} @click=${()=>{var p;return(p=d.onToggle)==null?void 0:p.call(d)}}>${d.title} ${d.onToggle?b`<small>${d.open?"\u25BE":"\u25B8"}</small>`:x}</h4>
                    ${d.rows.map(p=>b`<div class="fp3d-pop-row ${p.leadStrong?"fp3d-pop-rowlive":""}" style=${p.color?`--cal:${p.color}`:""}>
                        <span class="fp3d-pop-lead">${p.lead}</span>
                        <span class="fp3d-pop-sum">${p.text}${p.sub?b`<small> · ${p.sub}</small>`:x}${d.open&&p.detail?b`<em>${p.detail}</em>`:x}</span>
                      </div>`)}
                  </section>`)}
              </div>`:b`<p class="fp3d-sub">${l.empty??""}</p>`;case"checklist":return b`<div class="fp3d-pop-todo">
            ${l.items.length?l.items.map(d=>b`<label class="fp3d-pop-todoitem ${d.done?"fp3d-pop-done":""}">
                    <input type="checkbox" .checked=${d.done} ?disabled=${this.ro} @change=${()=>{d.onToggle()}} />
                    <span>${d.text}</span>
                  </label>`):b`<p class="fp3d-sub">${l.empty??""}</p>`}
          </div>`;case"people":return b`<div class="fp3d-pop-people">
            ${l.items.map(d=>b`<div class="fp3d-pop-personrow ${d.bright?"fp3d-pop-bright":""}">
                ${d.picture?b`<img src=${d.picture} alt="" />`:b`<span class="fp3d-pop-initial">${d.name.slice(0,1)}</span>`}
                <div><b>${d.name}</b><span>${d.sub}</span></div>
              </div>`)}
          </div>`;case"tiles":return b`<div class="fp3d-pop-tiles">${l.items.map(d=>b`<div><small>${d.label}</small><span>${d.symbol}</span><b>${d.main}</b>${d.sub?b`<small>${d.sub}</small>`:x}</div>`)}</div>`;case"media":return b`<div class="fp3d-pop-media">
            ${l.picture?b`<img class="fp3d-pop-cover" src=${l.picture} alt="" />`:x}
            <div class="fp3d-pop-mediatext">
              <b>${l.title}</b>
              ${l.sub?b`<span>${l.sub}</span>`:x}
              ${(c=l.buttons)!=null&&c.length?b`<div class="fp3d-pop-ctl">${l.buttons.map(d=>b`<button class="fp3d-chip" @click=${()=>{d.onTap()}}>${d.label}</button>`)}</div>`:x}
            </div>
          </div>`;case"form":{if(this.ro)return x;if(!l.open)return b`<button class="fp3d-btn fp3d-pop-addbtn" @click=${()=>l.onOpen()}>${l.button}</button>`;let d=h=>this.popupValues[`${l.id}:${h.id}`]??h.value,p=(h,f)=>this.popupValues={...this.popupValues,[`${l.id}:${h.id}`]:f};return b`<form class="fp3d-pop-form" @submit=${h=>{h.preventDefault(),l.onSubmit(Object.fromEntries(l.fields.map(f=>[f.id,d(f)])))}}>
            ${l.fields.map(h=>h.kind==="select"?b`<select class="fp3d-pop-in" @change=${f=>p(h,f.target.value)}>
                    ${(h.options??[]).map(f=>b`<option value=${f.id} ?selected=${f.id===d(h)}>${f.label}</option>`)}
                  </select>`:b`<input class="fp3d-pop-in" type=${h.kind} placeholder=${h.placeholder??""} .value=${d(h)} @input=${f=>p(h,f.target.value)} />`)}
            <div class="fp3d-pop-ctl"><button class="fp3d-btn fp3d-primary" type="submit">${l.submit}</button><button class="fp3d-btn" type="button" @click=${()=>l.onCancel()}>${a("cancel")}</button></div>
          </form>`}case"input":return this.ro?x:b`<form class="fp3d-pop-form" @submit=${d=>{d.preventDefault();let p=d.target.querySelector("input");l.onSubmit(p.value),p.value=""}}>
                <input class="fp3d-pop-in" placeholder=${l.placeholder} />
                <button class="fp3d-btn fp3d-primary" type="submit">${l.button}</button>
              </form>`;default:return x}};return b`<div class="fp3d-sheet-backdrop" @click=${i}></div>
      <div class="fp3d-sheet fp3d-pop ${r.wide?"fp3d-pop-wide":""}" role="dialog" aria-label=${r.title}>
        <header><span>${r.icon?`${r.icon} `:""}${r.title}</span><button class="fp3d-sheet-x" aria-label=${a("close")} @click=${i}>✕</button></header>
        ${r.sections.map(s)}
      </div>`}renderSheet(){var c,d,p;let e=this.hass,t=this.building;if(!e||!t||!this._sheet)return x;let n=this.currentSheet(e,t);if(!n)return x;let r=h=>T(e,h),i=this._sheet.roomId?t.floors.flatMap(h=>h.rooms).find(h=>h.id===this._sheet.roomId):void 0,a=()=>this._sheet=null,s=async h=>{a();try{await h()}catch(f){console.warn("NeonPlan 3D: module sheet failed",f)}},l=()=>{let h=this.renderRoot.querySelector(".fp3d-sheet-input"),f=h==null?void 0:h.value.trim();f&&n.input&&s(()=>n.input.onSubmit(f))},u=async()=>{var g,_;let h=this.renderRoot.querySelector(".fp3d-sheet-input");if(!h)return;h.placeholder=r("sheet_listening");let f=this.sceneHost(e,t),m=await((g=f.listen)==null?void 0:g.call(f,()=>h.placeholder=r("sheet_listening")));h.placeholder=((_=n.input)==null?void 0:_.placeholder)??"",m?h.value=m:this.showNote(r("sheet_mic_failed"))};return b`<div class="fp3d-sheet-backdrop" @click=${a}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${n.title}>
        <header>
          <b><span aria-hidden="true">${n.icon}</span> ${n.title}${i?` \xB7 ${i.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${r("close")} @click=${a}>✕</button>
        </header>
        ${n.choice?b`<div class="fp3d-sheet-choice">
              ${n.choice.options.map(h=>b`<button class="fp3d-chip" aria-pressed=${h.id===n.choice.value} @click=${()=>{n.choice.set(h.id),this.requestUpdate()}}>${h.label}</button>`)}
            </div>`:x}
        ${(c=n.chips)!=null&&c.length?b`<div class="fp3d-sheet-chips">${n.chips.map(h=>b`<button class="fp3d-sheet-chip" @click=${()=>{s(()=>h.onTap())}}>${h.label}</button>`)}</div>`:x}
        ${n.input?b`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${n.input.placeholder} @keydown=${h=>h.key==="Enter"&&l()} />
              ${n.input.mic?b`<button class="fp3d-btn fp3d-sheet-mic" title=${r("sheet_mic")} aria-label=${r("sheet_mic")} @click=${()=>{u()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:x}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${n.input.button}</button>
            </div>`:x}
        ${(d=n.lines)!=null&&d.length?b`<div class="fp3d-sheet-lines">${n.lines.map(h=>b`<p>${h}</p>`)}</div>`:x}
        ${(p=e.user)!=null&&p.is_admin&&!this.ro&&ga().length?b`<button class="fp3d-sheet-gear" @click=${()=>{a(),this._settingsOpen=!0,this.updateComplete.then(()=>{var h;return(h=this.renderRoot.querySelector(".fp3d-set-module"))==null?void 0:h.scrollIntoView({block:"start"})})}}>⚙ ${r("view_settings")}</button>`:x}
      </div>`}setPlanSettings(e){var r,i;let t=this.building;if(!t||!((i=(r=this.hass)==null?void 0:r.user)!=null&&i.is_admin)||this.ro||this.noSave)return;let n=structuredClone(t);Object.assign(n.settings,e),this.building=n,qn(this.hass,n,this.planId??void 0).catch(a=>this.serviceFailed("neonplan3d/building/save",a))}renderSettings(){var c;let e=this.hass,t=this.building;if(!e||!t||!this._settingsOpen)return x;let n=d=>T(e,d),r=!!((c=e.user)!=null&&c.is_admin)&&!this.ro&&!this.noSave,i=t.settings,a=(d,p,h,f)=>b`<label class="fp3d-set-check" title=${f?n(f):""}
        ><input type="checkbox" .checked=${p} ?disabled=${!r} @change=${m=>this.setPlanSettings(h(m.target.checked))} /> ${n(d)}</label
      >`,s=this.sceneHost(e,t),l=nn(),u=ga().map(d=>{let p=bu(d,s);if(!p.length||p[0].kind==="heading")return p;let h=l.find(m=>m.id===d);return[{kind:"heading",text:h?Xs(h).replace(/^(Modul|Module):\s*/i,""):d},...p]}).filter(d=>d.length);return b`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${n("view_settings")}>
        <header>
          <b>⚙ ${n("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${n("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${r?x:b`<p class="fp3d-set-note">${n("view_settings_admin")}</p>`}
        <h4>${n("view_settings_look")}</h4>
        ${a("sun_shadow",i.sun_shadow!==!1,d=>({sun_shadow:d}),"sun_shadow_hint")}
        ${i.sun_shadow!==!1?b`<label class="fp3d-set-field" title=${n("sun_arc_hint")}
              >${n("sun_arc")}
              <select ?disabled=${!r} @change=${d=>this.setPlanSettings({sun_arc:d.target.value==="plot"?"plot":null})}>
                <option value="house" ?selected=${i.sun_arc!=="plot"}>${n("sun_arc_house")}</option>
                <option value="plot" ?selected=${i.sun_arc==="plot"}>${n("sun_arc_plot")}</option>
              </select></label
            >`:x}
        ${a("window_glow",i.window_glow!==!1,d=>({window_glow:d}),"window_glow_hint")}
        ${Pa(Sr)?b`<p class="fp3d-set-note">${n("gpu_safe_note")}</p>`:x}
        ${a("sun_patches",i.sun_patches!==!1,d=>({sun_patches:d}))}
        ${this.renderGlassSize(n,r,i)}
        <h4>${n("view_settings_control")}</h4>
        ${a("tap_in_room",!!i.tap_in_room,d=>({tap_in_room:d}),"tap_in_room_hint")}
        ${a("right_click_back",!!i.right_click_back,d=>({right_click_back:d}),"right_click_back_hint")}
        <h4>${n("view_settings_alerts")}</h4>
        ${a("rain_warning",i.rain_warning!==!1,d=>({rain_warning:d}))}
        ${a("alert_unavailable",!!i.alert_unavailable,d=>({alert_unavailable:d}))}
        ${a("alert_names",i.alert_names!==!1,d=>({alert_names:d}))}
        ${u.map(d=>b`<div class="fp3d-set-module">${d.map(p=>this.renderViewField(e,p,r))}</div>`)}
        <p class="fp3d-set-note">${n("view_settings_more")}</p>
      </div>`}renderGlassSize(e,t,n){let r=n.roof.hologram??et,i=[.75,1,1.25,1.5,2],a=i.includes(r.size)?i:[...i,r.size].sort((s,l)=>s-l);return b`<label class="fp3d-set-field" title=${e("glass_size_hint")}
      >${e("glass_size")}
      <select ?disabled=${!t} @change=${s=>this.setPlanSettings({roof:{...n.roof,hologram:{...r,size:Number(s.target.value)}}})}>
        ${a.map(s=>b`<option value=${s} ?selected=${s===r.size}>${Math.round(s*100)} %</option>`)}
      </select></label
    >`}renderViewField(e,t,n){switch(t.kind){case"heading":return b`<h4>${t.text}</h4>`;case"text":return b`<p class="fp3d-set-note">${t.text}</p>`;case"check":return b`<label class="fp3d-set-check"><input type="checkbox" .checked=${t.value} ?disabled=${!n} @change=${r=>t.set(r.target.checked)} /> ${t.label}</label>`;case"select":return b`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${r=>t.set(r.target.value)}>
            ${t.options.map(r=>b`<option value=${r.id} ?selected=${r.id===t.value}>${r.label}</option>`)}
          </select></label
        >`;case"entity":{let r=Object.keys(e.states).filter(i=>t.filter(i)).sort((i,a)=>Y(e,i).localeCompare(Y(e,a)));return b`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${i=>{let a=i.target.value;t.set(a===""?null:a)}}>
            <option value="" ?selected=${!t.value}>${t.auto?T(e,"entity_auto",{name:Y(e,t.auto)}):"\u2014"}</option>
            ${r.map(i=>b`<option value=${i} ?selected=${i===t.value}>${Y(e,i)}</option>`)}
          </select></label
        >`}case"lines":return Md(t.value,!n,{label:t.label,placeholder:t.placeholder??T(e,"lines_new"),add:T(e,"lines_add"),remove:T(e,"delete")},r=>t.set(r));case"button":return b`<button class="fp3d-btn ${t.primary?"fp3d-primary":""}" ?disabled=${!n} title=${t.title??""} @click=${()=>t.onTap()}>${t.label}</button>`}}renderNote(){return this._note?b`<div class="fp3d-note" role="status">${this._note}</div>`:x}spokenAlerts(e,t){let n=new Map(t.floors.flatMap(r=>ce(r).map(i=>[i.id,i.name])));return this._alerts.map(r=>({kind:r.kind,entity:r.entity,name:Y(e,r.entity),...r.text?{text:r.text}:{},room:r.roomId?n.get(r.roomId)??null:null,floorId:r.floorId,roomId:r.roomId}))}spokenCars(e,t){if(!V("auto_pro"))return[];let n=[];for(let r of t.floors)for(let i of r.furniture){if(i.type!=="parking"||!i.car)continue;let a=In(e,i),s=Jn(e,i),l=s.entities.tracker?e.states[s.entities.tracker]:void 0,u=!!a&&!(l&&!gr.has(l.state.toLowerCase()));n.push({name:i.name||(a?Ae(e,a):Ae(e,"car")),spot:i.id,floorId:r.id,present:u,away:s.away,soc:s.soc,range:s.range,rangeUnit:s.rangeUnit,charging:s.charging,chargingW:s.chargingW,plugged:s.plugged,locked:s.locked})}return n}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return x;let t=e.kind==="light"&&e.value<=0;return b`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${Y(this.hass,e.entity)}</span>
      <b>${t?T(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){var a;let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!V("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let r=(a=n.floors.find(s=>s.placements.some(l=>l.entity_id===e)))==null?void 0:a.id;if(!r)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let i=this.floorId===r?0:300;i&&(this.throughFloor=r,this.fire("floor-tap",{floorId:r})),setTimeout(()=>{var s,l;((s=this._through)==null?void 0:s.entity)===e&&!((l=this.viewer)!=null&&l.lookThrough(e))&&(this._through=null)},i)}endThrough(){var t,n;let e=this._through;e&&(this._through=null,((t=this.live)==null?void 0:t.id)===e.entity&&(this.live=null),(n=this.viewer)==null||n.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?x:b`<div class="fp3d-pro" role="dialog">
      <b>${T(this.hass,"pro_title")}</b>
      <span>${T(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${T(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip" href=${ac(this._proHint)} target="_blank" rel="noopener">${T(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${T(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${T(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return x;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!V("camera_cockpit"))return b`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${T(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${T(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(c=>c.placements.map(d=>d.entity_id)).filter(c=>L(c)==="camera"))];this.watchCameras(!0);let r=c=>{let d=e.states[c],p=d==null?void 0:d.attributes.entity_picture;return p&&d&&!X(d)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},i=c=>{let d=e.states[c];return b`${Y(e,c)}${(d==null?void 0:d.state)==="recording"?b` <b>● ${T(e,"state_recording")}</b>`:x}`},a=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(a){let c=r(a),d=this.liveFor(a),p=()=>{this.throughWall=!0,t(),this.lookThrough(a)};return b`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${T(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${i(a)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${T(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${d??(c?b`<img src=${c} alt="" />`:b`<div class="fp3d-wall-none">${T(e,"state_unavailable")}</div>`)}</div>
      </div>`}let s=this.renderRoot.querySelector(".fp3d-wall-grid");s||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:u}=Du(n.length,(s==null?void 0:s.clientWidth)??this.clientWidth-48,(s==null?void 0:s.clientHeight)??this.clientHeight-160);return b`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${T(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${T(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${u}px); grid-auto-rows: ${Math.round(u*9/16)}px">
        ${n.map(c=>{let d=r(c),p=ot(e,c).some(h=>{var f;return((f=e.states[h])==null?void 0:f.state)==="on"});return b`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${T(e,"camera_wall_big")} @click=${()=>this._wallBig=c}>
            ${d?b`<img src=${d} alt="" />`:b`<div class="fp3d-wall-none">${T(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${i(c)}</span>
          </button>`})}
      </div>
    </div>`}renderProxmox(){if(!this.proxmoxWall||!this.hass||this.ro)return x;let e=this.hass,t=(c,d)=>T(e,c,d),n=()=>this.dispatchEvent(new CustomEvent("proxmox-close",{bubbles:!0,composed:!0})),r=Zn(e),i=c=>c===null?"\u2013":`${oe(e,c,c<10?1:0)} %`,a=(c,d)=>b`<span class="fp3d-pve-bar" title=${`${c} ${i(d)}`}
        ><span class="fp3d-pve-bar-label">${c}</span><span class="fp3d-pve-bar-track"><span class="fp3d-pve-bar-fill ${(d??0)>=85?"fp3d-pve-hot":""}" style="width: ${Math.min(100,Math.max(0,d??0))}%"></span></span><span class="fp3d-pve-bar-value">${i(d)}</span></span
      >`,s=r.instances.filter(c=>c.running).length,l=r.instances.filter(c=>this._pveFilter==="all"||this._pveFilter==="on"===c.running),u=(c,d,p)=>b`<button class="fp3d-chip" aria-pressed=${this._pveFilter===c} @click=${()=>this._pveFilter=c}>${d} · ${p}</button>`;return b`<div class="fp3d-wall fp3d-pve">
      <div class="fp3d-wall-head">
        <span>${t("pve_title")}</span>
        <span class="fp3d-wall-tools">${u("all",t("pve_all"),r.instances.length)} ${u("on",t("pve_on"),s)} ${u("off",t("pve_off"),r.instances.length-s)}</span>
        <button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      ${r.nodes.map(c=>b`<button class="fp3d-pve-node ${c.online?"":"fp3d-pve-down"}" @click=${()=>Pe(this,c.entity)}>
          <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${c.online?"fp3d-pve-dot-on":"fp3d-pve-dot-bad"}"></span>${c.name} · ${t(c.online?"pve_online":"pve_offline")}</span>
          ${a(t("pve_cpu"),c.cpu)} ${a(t("pve_ram"),c.memory)} ${a(t("pve_disk"),c.disk)}
          <span class="fp3d-pve-facts">
            ${c.vmsOn!==null||c.lxcOn!==null?b`<span>${t("pve_running_counts",{vms:c.vmsOn??0,lxc:c.lxcOn??0})}</span>`:x}
            ${c.load!==null?b`<span>${t("pve_load")} ${oe(e,c.load,2)}</span>`:x}
            ${c.updates?b`<span>${t("pve_updates",{n:c.updates})}</span>`:x}
            ${c.failedTasks?b`<span class="fp3d-pve-warn">${t("pve_failed",{n:c.failedTasks})}</span>`:x}
          </span>
        </button>`)}
      <div class="fp3d-pve-grid">
        ${l.length?l.map(c=>b`<button class="fp3d-pve-tile ${c.running?"":"fp3d-pve-off"} ${c.problem?"fp3d-pve-down":""}" @click=${()=>Pe(this,c.entity)}>
                <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${c.problem?"fp3d-pve-dot-bad":c.running?"fp3d-pve-dot-on":""}"></span>${c.name}</span>
                <span class="fp3d-pve-sub">${c.vmid!==null?`#${c.vmid} \xB7 `:""}${t(c.kind==="vm"?"pve_vm":"pve_lxc")}${c.ip?` \xB7 ${c.ip}`:""}</span>
                ${c.running?b`${a(t("pve_cpu"),c.cpu)} ${a(t("pve_ram"),c.memory)}
                      <span class="fp3d-pve-sub">${t("pve_disk")} ${i(c.disk)}${c.memoryUsed?` \xB7 ${c.memoryUsed}`:""}${c.since?` \xB7 ${t("pve_since",{d:Oc(c.since)})}`:""}</span>`:b`<span class="fp3d-pve-sub">${t(c.problem?"pve_problem":"pve_stopped")}</span>`}
              </button>`):b`<p class="fp3d-pve-sub">${t("pve_none")}</p>`}
      </div>
    </div>`}liveFor(e){var t;if(((t=this.live)==null?void 0:t.id)!==e){let n={id:e,el:null,failed:!1};this.live=n;let r=window;r.loadCardHelpers?r.loadCardHelpers().then(i=>{if(this.live!==n)return;let a=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});a.hass=this.hass,n.el=a,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}popOnDetection(e,t){let n=this.now();for(let r of ot(e,t)){let i=e.states[r];if((i==null?void 0:i.state)!=="on"||!i.last_changed)continue;let a=Date.parse(i.last_changed),s=`${r}@${i.last_changed}`;if(this.popSeen.has(s)||n-a>3e4)continue;this.popSeen.add(s),this.popSeen.size>200&&(this.popSeen=new Set([...this.popSeen].slice(-50)));let l=e.states[t],u=l==null?void 0:l.attributes.entity_picture,c=u&&!X(l)?u.startsWith("data:")?u:`${u}${u.includes("?")?"&":"?"}fp3d=${Date.now()}`:null;this._camPop={entity:t,text:`${T(e,`detect_${rr(e,r)}`)} \xB7 ${Y(e,t)}`,until:n+2e4,src:c},clearTimeout(this.camPopTimer),this.camPopTimer=setTimeout(()=>this._camPop=null,2e4);return}}camPopTimer;renderCamPop(){let e=this._camPop;return!e||!this.hass||this._through?x:b`<div class="fp3d-campop" role="status">
      <button class="fp3d-campop-img" title=${T(this.hass,"camera_popup_open")} @click=${()=>(this._camPop=null,this.lookThrough(e.entity))}>
        ${e.src?b`<img src=${e.src} alt="" />`:x}
      </button>
      <div class="fp3d-campop-bar"><span>${e.text}</span><button class="fp3d-chip" aria-label=${T(this.hass,"close")} @click=${()=>this._camPop=null}>✕</button></div>
    </div>`}renderThrough(){var a,s;let e=this._through;if(!e||!this.hass)return x;let t=this.hass.states[e.entity],n=t==null?void 0:t.attributes.entity_picture,r=n&&!X(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,i=(s=(a=this.building)==null?void 0:a.settings.director)!=null&&s.live?this.liveFor(e.entity):null;return b`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${i?b`<div class="fp3d-through-img fp3d-through-live">${i}</div>`:r?b`<img class="fp3d-through-img" src=${r} alt="" />`:x}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${Y(this.hass,e.entity)}</span>
        <span class="fp3d-still">${i?"\u25CF Live":T(this.hass,"camera_still",{s:this._low?10:5})}</span>
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
    </div>`}throughFull(e){let t=this.renderRoot.querySelector(".fp3d-through-img");t&&typeof t.requestFullscreen=="function"?t.requestFullscreen().catch(()=>Pe(this,e)):Pe(this,e)}renderMenu(){var s;let e=this._menu;if(!e||!this.hass||this.ro)return x;let t=this.renderRoot.querySelector(".fp3d-stage"),n=(t==null?void 0:t.clientWidth)??800,r=(t==null?void 0:t.clientHeight)??600,i=Math.max(8,Math.min(n-240,e.x-116)),a=Math.max(8,Math.min(r-360,e.y-170));return b`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${i}px;top:${a}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        .presets=${V("sound")?((s=this.building)==null?void 0:s.settings.media_presets)??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${V("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${l=>this.lookThrough(l.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){var n;let t=[];for(let r of this.scene){if(r.kind!=="marker")continue;let i=e.floors.find(d=>d.id===r.floorId),a=r.furnitureId?i==null?void 0:i.furniture.find(d=>d.id===r.furnitureId):void 0;if(!i||!a&&!r.at)continue;let[s,l]=a?[a.x,a.z]:r.at,u=ku(r.path),c=xu(r.emoji);t.push({id:`module:${r.id}`,floorId:i.id,roomId:((n=i.rooms.find(d=>d.points.length>=3&&B([s,l],d.points)))==null?void 0:n.id)??null,x:s,z:l,y:r.y??(a?_e(i,a)+a.h*.6:1.2),icon:c?`<span style="font-size:18px;line-height:1" aria-hidden="true">${c}</span>`:u?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${u}"/></svg>`:"",name:r.name,text:r.text??"",active:!!r.active&&!this.dimmed,unavailable:!1,glow:r.color&&r.active&&!this.dimmed?{color:r.color,level:1}:null,pin:!0,full:!0,...a?{furnitureId:a.id}:{}})}return t}openModuleCard(e){var i,a;let t=this.scene.find(s=>s.kind==="marker"&&s.id===e);if(!t)return;if(t.sheet){this.openRoomSheet(t.sheet.roomId,t.sheet.id);return}t.card&&(this.mediaFolded.delete(t.card),this.cardPing=t.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let n=(i=this.building)==null?void 0:i.floors.find(s=>s.id===t.floorId),r=n==null?void 0:n.furniture.find(s=>s.id===t.furnitureId);n&&r&&((a=this.viewer)==null||a.focus(n.id,r.x,r.z,_e(n,r)+r.h*.6,`module:${t.id}`))}onDeviceTap(e,t=0,n=0){var s;if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("popup:"))return this.openModulePopup(e.slice(6));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!1);if(e.startsWith("hh:")){let[l,u]=e.slice(3).split("#");((s=this.building)==null?void 0:s.floors.flatMap(d=>d.furniture).find(d=>d.id===u&&d.type==="waste_bin"))?(this._binInfo={furnitureId:u,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(l,t,n):Pe(this,l);return}if(e.startsWith("ws:")){let l=e.slice(3);this.ro?this.showInfo(l,t,n):(!this.confirmSet.has(l)||confirm(T(this.hass,"confirm_switch",{name:Y(this.hass,l)})))&&Sn(this.hass,l);return}if(this.ro){let l=this.building,u=l?l.energy.grid??Pn(l,d=>{var p,h;return((h=(p=this.furnitureLinks)==null?void 0:p.get(d.id))==null?void 0:h.power)??null}).grid:null,c=e==="grid"?u:e.startsWith("detect:")?e.slice(7):e;c&&this.showInfo(c,t,n);return}let r=this.apOf(e);if(r){r.led?(!this.confirmSet.has(e)||confirm(T(this.hass,"confirm_switch",{name:this.hass?So(this.hass,e):e})))&&Sn(this.hass,r.led):Pe(this,e);return}let i=this.heaterPower(e);if(i){(!this.confirmSet.has(e)||confirm(T(this.hass,"confirm_switch",{name:Y(this.hass,e)})))&&Sn(this.hass,i);return}if(e==="grid"){let l=this.building,u=l?l.energy.grid??Pn(l,c=>{var d,p;return((p=(d=this.furnitureLinks)==null?void 0:d.get(c.id))==null?void 0:p.power)??null}).grid:null;u&&Pe(this,u);return}if(e.startsWith("detect:")){Pe(this,e.slice(7));return}let a=L(e);if(a==="cover"||a==="camera"){this._menu={entity:e,x:t,y:n};return}if(a&&Hl.has(a)){if(this.confirmSet.has(e)&&!confirm(T(this.hass,"confirm_switch",{name:Y(this.hass,e)})))return;Sn(this.hass,e)}else Pe(this,e)}onOpeningTap(e,t,n,r){var u;let i=(u=this.openingLinks)==null?void 0:u.get(e);if(!i||!this.hass)return;if(i.lock&&!i.cover){this.ro?this.showInfo(i.lock,t,n):this._menu={entity:i.lock,x:t,y:n,doorLock:!0};return}let a=i.cover;if(!a)return;if(this.ro){this.showInfo(i.contact??a,t,n);return}if(r){Pe(this,a);return}let s=this.hass.states[a];if(!s||X(s)){Pe(this,a);return}if(this.confirmSet.has(a)&&!confirm(T(this.hass,"confirm_switch",{name:Y(this.hass,a)})))return;let[l]=a.split(".");this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:a})}effectiveTheme(){var e,t;return this.theme!=="auto"?this.theme:((t=(e=this.hass)==null?void 0:e.states["sun.sun"])==null?void 0:t.state)==="above_horizon"?"day":"neon"}startViewOf(){var e;return this.startView??((e=this.building)==null?void 0:e.settings.start_view)??null}currentView(){var e;return((e=this.viewer)==null?void 0:e.currentView())??null}resetView(){var e;this._through=null,(e=this.viewer)==null||e.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!V("energy_pro")||!e||this.roomId||!this.showEnergy)return x;let t=r=>T(this.hass,r),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:he(this.hass,e.consumption)}),e.grid!==null){let r=e.grid<0;n.push({cls:r?"export":"grid",label:t(r?"energy_grid_export":"energy_grid_import"),value:he(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:he(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let r=[e.battery!==null?he(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:r.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${oe(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),b`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?x:n.map(r=>b`<div class="fp3d-energy-item fp3d-energy-${r.cls}"><span>${r.label}</span><b>${r.value}</b></div>`)}
      ${this.flows!==null?x:b`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?x:b`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return x;let e=pr[this.heatMode],t=this.heatMode==="temperature",n=t?yt(this.hass,e.stops[0][0]):e.stops[0][0],r=t?yt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=t?We(this.hass):e.unit,a=s=>T(this.hass,s);return b`<div class="fp3d-legend">
      <b>${a(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Yd(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${oe(this.hass,n,0)} ${i}</span><span>${oe(this.hass,r,0)} ${i}</span></span>
      ${this.heatValues.size?x:b`<span class="fp3d-legend-none">${a("heat_none_found")}</span>`}
    </div>`}sunPathToday(e){var i,a;let t=(i=e.config)==null?void 0:i.latitude,n=(a=e.config)==null?void 0:a.longitude;if(typeof t!="number"||typeof n!="number")return null;let r=`${new Date().toDateString()},${t},${n}`;return this.sunPathKey!==r&&(this.sunPathKey=r,this.sunPathCache=Zu(Date.now(),t,n)),this.sunPathCache}skyColor(){let e=uo[this.effectiveTheme()]??uo.neon,t=this._sky;return e.night[0].map((n,r)=>Math.round(n+(e.day[0][r]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){var s;let e=this._sky,t=(l,u)=>`rgb(${l.map((c,d)=>Math.round(c+(u[d]-c)*e)).join(",")})`,n=uo[this.effectiveTheme()]??uo.neon,r=Nu((s=this.building)==null?void 0:s.settings.backdrop),a=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}${r?`;background:${r}`:""}`;return b`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${a}
    >
      ${this._error?b`<p class="fp3d-error">${this._error}</p>`:x} ${this.clean?x:this.renderEnergy()} ${this.renderHologram()} ${this.clean?x:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?x:b`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?x:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderThrough()} ${this.renderCamPop()} ${this.renderCameraWall()} ${this.renderProxmox()} ${this.renderSheet()} ${this.renderModulePopup()} ${this.renderSettings()} ${this.renderNote()}
      ${this.clean?x:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.renderMic()}
      ${this._announce?b`<div class="fp3d-announce" role="status" @click=${()=>this._announce=null}>📢 ${this._announce}</div>`:x}
      ${this.pivotMark&&!this._walk?b`<span class="fp3d-pivot" aria-hidden="true"></span>`:x}
      ${this._micProbe&&this.hass?b`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,Pr())}></fp3d-mic-probe>`:x}
      ${this.showStats&&this._stats?b`<span class="fp3d-stats"
            ><b>${this._stats.fps?T(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):T(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?b`(${this._stats.busy.map(l=>T(this.hass,`stats_busy_${l}`)).join(", ")})`:x} ·
            ${T(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${T(this.hass,this._stats.low?"stats_low":"stats_full",{r:oe(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${oe(this.hass,this.syncMs,1)} ms`:""}</span
          >`:x}
    </div>`}static styles=[Ce,je,Me`
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
      .fp3d-holo-mline {
        margin-top: 5px;
        font-size: 12px;
        opacity: 0.85;
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",La);function Gm(o,e){let t=e.attributes.current_temperature,n=typeof t=="number"&&Number.isFinite(t)?`${oe(o,Math.round(t))} \xB0C`:"",r=!["off","unavailable","unknown"].includes(e.state);return{text:[Ee(o,e),n].filter(Boolean).join(" \xB7 "),on:r}}function he(o,e){return Math.abs(e)>=1e3?`${oe(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function ap(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var Ym=new Set(["rug","stairwell","grid_point","worktop"]);function sp(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var ja;function lp(){let o=new URL("./neonplan3d-locate.js?v=39f4ccb548ff",new URL(import.meta.url)).href;return ja??=import(o).catch(e=>{throw ja=void 0,e}),ja}var Qm=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function cp(o){let e=document.createElement("style");e.textContent=Qm;let t=document.createElement("div");t.className="fp3d-loclab",document.body.append(e,t);let n=null,r="",i=!0,a=async(u,c={})=>{let d=o().hass;if(d){try{n=await d.callWS({type:"neonplan3d/locate/rec",action:u,...c}),r=""}catch(p){r=p.message??String(p)}s()}},s=()=>{var m;let u=o().building,c=n,d=((m=c==null?void 0:c.mark)==null?void 0:m.room)??null,p=`<h4 data-a="toggle"><span>\u{1F4E1} Localizaci\xF3n \xB7 Grabaci\xF3n (laboratorio)</span><span>${i?"\u25BE":"\u25B8"}</span></h4>`;if(!i){t.innerHTML=p;return}let h=((c==null?void 0:c.devices)??[]).map(g=>{let _=g.t?Math.round(Date.now()/1e3-g.t):null;return`<div>\u231A ${Et(g.title)}: ${_===null?"<small>a\xFAn sin se\xF1al</small>":`${g.rssi} dBm \xB7 ${Et(g.scanner??"")} <small>hace ${_} s</small>`}</div>`}).join(""),f=((u==null?void 0:u.floors)??[]).map(g=>`<div class="fl">${Et(g.name)}</div>`+g.rooms.map(_=>`<button data-room="${Et(_.id)}" data-name="${Et(_.name)}" class="${d===_.id?"on":""}">${Et(_.name)}</button>`).join("")).join("");t.innerHTML=`${p}
      <div><button data-a="setup">\u2699 Configurar localizaci\xF3n</button></div>
      <div>${c!=null&&c.running?`<button class="rec" data-a="stop">\u25A0 Parar</button> <small>${Math.floor(c.seconds/60)}:${String(c.seconds%60).padStart(2,"0")} \xB7 ${c.lines} l\xEDneas</small>`:'<button data-a="start">\u25CF Empezar grabaci\xF3n</button>'}</div>
      ${r?`<div style="color:#ff8fa3">${Et(r)}</div>`:""}
      ${h||(c?"<div><small>No hay claves de iPhone/Watch (Private BLE Device) en HA; se graba todo igualmente.</small></div>":"")}
      ${c!=null&&c.mark?`<div style="margin-top:6px">\u23F1 desde hace <b>${Jm(Date.now()/1e3-c.mark.t)}</b> en <b>${Et(c.mark.name)}</b> ${Date.now()/1e3-c.mark.t>=120?"\u2713 2 min conseguidos":""}</div>`:""}
      <div class="fl">Ahora estoy en \u2026</div>
      <button data-room="" class="${d?"":"on"}">\u{1F6B6} de camino / en ninguna parte</button>
      ${f}`};t.addEventListener("click",u=>{let c=u.target.closest("button,h4");if(!c)return;let d=c.dataset.a;if(d==="toggle")i=!i,s();else if(d==="start")a("start",{note:"lab walk"});else if(d==="stop")a("stop");else if(d==="setup"){let{hass:p,building:h}=o();p&&h&&lp().then(f=>f.openLocateSetup(p,h,()=>o().hass))}else c.dataset.room!==void 0&&a("mark",c.dataset.room?{room:c.dataset.room,name:c.dataset.name}:{room:null})}),a("status");let l=window.setInterval(()=>{a("status")},1e3);return()=>{window.clearInterval(l),t.remove(),e.remove()}}function Jm(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Et(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var Da;function Xm(){let o=new URL("./neonplan3d-timetravel.js?v=5a375f0f9f94",new URL(import.meta.url)).href;return Da??=import(o).catch(e=>{throw Da=void 0,e}),Da}var En=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),Xm().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("CasaNeon: time travel failed to load",t),this.host.requestUpdate()}))}stop(){var e;this.active&&(this.starting=!1,(e=this.session)==null||e.dispose(),this.session=null,this.host.requestUpdate())}hass(e){var t;return((t=this.session)==null?void 0:t.hass)??e}};function Zm(){try{return matchMedia("(hover: none) and (pointer: coarse)").matches&&!matchMedia("(any-pointer: fine)").matches}catch{return!1}}var eg={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"},ee={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},Va=class extends ve{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_walking:{state:!0},_overview:{state:!0},_site:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_plain:{state:!0},_roomBar:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_proxmox:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0}};watch=new wn(this);otherAlerts={at:0,list:[]};pendingRoom=null;data=new sn(this);locateLab=null;tt=new En(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._walking=!1,this._overview=!1,this._site=new URLSearchParams(location.search).get("plan")==="site",this.data.switchPlan(new URLSearchParams(location.search).get("plan")??ee.get("plan")),this._wallMode=ee.get("walls")==="cut"?"cut":"auto",this._explode=ee.get("explode")!=="0",this._keepRoof=ee.get("roof")==="1",this._plain=ee.get("plain")==="1";let e=ee.get("roombar");this._roomBar=e==="rooms"||e==="all"?e:"off";let t=ee.get("quality");this._quality=t==="low"||t==="high"?t:"auto",this._stats=ee.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let n=ee.get("markers");this._markers=n==="none"||n==="all"||n==="room"?n:"important";let r=ee.get("pinSize");this._pinSize=r==="small"||r==="large"?r:"normal";let i=ee.get("heat");this._heat=i==="temperature"||i==="humidity"||i==="co2"||i==="values"?i:"none";let a=ee.get("theme");this._theme=a==="auto"||a&&sa.includes(a)?a:"neon";let s=ee.get("clock");this._clock=s==="tl"||s==="tr"||s==="bl"||s==="br"?s:"off";let l=ee.get("accent");this._accent=l&&/^#[0-9a-f]{6}$/i.test(l)?l:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let u=ee.get("floor_stack");this._floorStack=u==="stacked"||u==="single"?u:"dim",this._roomNames=ee.get("room_names")!=="0",this._controlsRight=ee.get("controls")==="right",this._keepView=ee.get("keep_view")==="1",this._angleLock=ee.get("angle_lock")==="1",this._trail=ee.get("trail")==="1",this._cameraWall=!1,this._proxmox=!1,this._clean=ee.get("clean")==="1",this._navWrap=ee.get("nav_wrap")==="1",this._optsOpen=!1,this._pinHover=!1,this._weather=ee.get("weather")!=="0",this._director=Ha(),this._micProbe=!1,this._voiceHere=Aa(),this._screen=Ta()}t(e,t){return T(this.hass,e,t)}willUpdate(e){var n;e.has("hass")&&this.hass&&(this.data.setHass(this.hass),(n=this.tt.session)==null||n.setLive(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(r=>r.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){var e,t;return((t=(e=this.hass)==null?void 0:e.user)==null?void 0:t.is_admin)??!1}get canEdit(){return this.isAdmin&&!Zm()}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){var r;let{floorId:t,roomId:n}=e.detail;if(this._site){if(!n)return;let i=ld(n,pe);this.pendingRoom={plan:i.plan,floorId:null,roomId:i.id},this._site=!1,i.plan===this.data.planId?this.requestUpdate():this.pickPlan(i.plan);return}if((((r=this.data.building)==null?void 0:r.floors.length)??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,ee.set("walls",e)}setRoomBar(e){this._roomBar=e,ee.set("roombar",e)}setPlain(e){this._plain=e,ee.set("plain",e?"1":"0")}setKeepRoof(e){this._keepRoof=e,ee.set("roof",e?"1":"0")}setExplode(e){this._explode=e,ee.set("explode",e?"1":"0")}setQuality(e){this._quality=e,ee.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let i of r.floors){let a=i.furniture.find(s=>s.id===e);a&&t(a,i)}this.data.edit(r)}editDevice(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let i of r.floors){let a=i.placements.find(s=>s.entity_id===e);a&&t(a,i)}this.data.edit(r)}moveDevice(e){let{id:t,x:n,z:r}=e.detail;this.editDevice(t,(i,a)=>{let[s,l]=Ca(a,i.x,i.z,n,r);Object.assign(i,{x:s,z:l})})}turnStep(){return L(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.placements=r.placements.filter(i=>i.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let t=this.data.building,n=t==null?void 0:t.floors.find(d=>d.placements.some(p=>p.entity_id===e)),r=n==null?void 0:n.placements.find(d=>d.entity_id===e);if(!n||!r)return x;let i=L(e),a=i==="light",s=i==="camera",l=r.mount==="ceiling",u=i?dn(i,n.height,a||s?r.mount??(s?"wall":"ceiling"):null):1,c=(d,p,h,f,m,g)=>b`<label class="fp3d-size" title=${d}
        >${d}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${f}
          max=${m}
          .value=${String(Math.round(p*100)/100)}
          @change=${_=>{let w=parseFloat(_.target.value.replace(",","."));Number.isFinite(w)&&g(Math.min(m,Math.max(f,w)))}}
        />
      </label>`;return b`${a?b`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${d=>this.editDevice(e,p=>Object.assign(p,{mount:d.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(d=>b`<option value=${d} ?selected=${d===(r.mount??"ceiling")}>${this.t(`lamp_${d}`)}</option>`)}
          </select>`:x}
      ${s?b`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${d=>this.editDevice(e,p=>Object.assign(p,{mount:d.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${c(this.t("camera_fov_short"),r.fov??(l?360:90),5,10,360,d=>this.editDevice(e,p=>p.fov=d))}
            ${c(this.t("camera_reach_short"),r.reach??(l?3:4.5),.5,.5,50,d=>this.editDevice(e,p=>p.reach=d))}
            ${c(this.t("camera_tilt_short"),r.tilt??(l?65:20),5,0,90,d=>this.editDevice(e,p=>p.tilt=d))}`:x}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((r.y??u)*100)/100)}
          @change=${d=>{let p=parseFloat(d.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(e,h=>h.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${r.y!==null?b`<button class="fp3d-chip" @click=${()=>this.editDevice(e,d=>d.y=null)}>${this.t("height_auto")}</button>`:x}`}furnitureName(e){var n;let t=(n=this.data.building)==null?void 0:n.floors.flatMap(r=>r.furniture).find(r=>r.id===e);return t?Ae(this.hass,t.type):""}moveFurniture(e){var a;let{id:t,x:n,z:r}=e.detail,i=((a=this.data.building)==null?void 0:a.settings.wall_interior)??.12;this.editFurniture(t,(s,l)=>{let[u,c]=Ca(l,s.x,s.z,n,r);Object.assign(s,{x:u,z:c});let d=Uu(l,s,i);d&&Object.assign(s,d)})}renderSizeFields(e){var l,u,c;let t=(l=this.data.building)==null?void 0:l.floors.flatMap(d=>d.furniture).find(d=>d.id===e);if(!t)return x;let n=us(this.hass,(u=this.data.building)==null?void 0:u.settings.units)==="imperial",r=d=>n?ps(d):String(Math.round(d*100)/100),i=d=>n?hs(d,"imperial"):parseFloat(d.replace(",",".")),a=(d,p)=>b`<label class="fp3d-size" title=${this.t(`size_${d}`)}
      >${p}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${r(t[d])}
        @change=${h=>{let f=i(h.target.value)??NaN;Number.isFinite(f)&&f>0&&this.editFurniture(e,m=>m[d]=Math.round(f*1e3)/1e3)}}
    /></label>`,s=(c=this.data.building)==null?void 0:c.floors.find(d=>d.furniture.some(p=>p.id===e));return b`${a("w",this.t("size_short_w"))}${a("d",this.t("size_short_d"))}${a("h",this.t("size_short_h"))}
    ${s&&bl(t)?b`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${r(t.mount_y??_e(s,t))}
              @change=${d=>{let p=i(d.target.value)??NaN;Number.isFinite(p)&&p>=0&&this.editFurniture(e,h=>h.mount_y=Math.round(p*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?b`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,d=>d.mount_y=null)}>${this.t("height_auto")}</button>`:x}`:x}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.furniture=r.furniture.filter(i=>i.id!==e);this.data.edit(n),this._selFurniture=null}rememberStartView(e=!1){var r;let t=this.data.building;if(!t)return;let n=e?null:(r=this.view3d())==null?void 0:r.currentView();!e&&!n||this.data.edit({...t,settings:{...t.settings,start_view:n??null}})}openFunSettings(e="fun",t=null){this.setMode("editor");let n=0,r=()=>{let i=this.renderRoot.querySelector("fp3d-editor");i!=null&&i.openSettings?i.openSettings(e,t):n++<60&&setTimeout(r,100)};this.updateComplete.then(r)}siteBuilding(){return this.watch.site(this.data)}showSite(){this.tt.active&&this.tt.stop(),this._site=!0,this._floorId=null,this._roomId=null,this._mode="view"}planBuildings(){return this.watch.all(this.data)}alertsElsewhere(){if(!this.hass||this.data.plans.length<2)return[];let e=Date.now();if(e-this.otherAlerts.at<2e3)return this.otherAlerts.list;let t=[];for(let[n,r]of this.watch.others)if(n!==this.data.planId)for(let i of Xo(this.hass,r).alerts)t.push({plan:n,alert:i});return this.otherAlerts={at:e,list:t},t}alertCounts(){let e=new Map;for(let{plan:t}of this.alertsElsewhere())e.set(t,(e.get(t)??0)+1);return e}pickPlan(e){this._site&&(this._site=!1,this._floorId=null,this._roomId=null),e!==this.data.planId&&(this.tt.active&&this.tt.stop(),ee.set("plan",e),this._floorId=null,this._roomId=null,this.data.switchPlan(e))}showElsewhere(e,t){this.pendingRoom={plan:e,floorId:t.floorId,roomId:t.roomId},this.pickPlan(e)}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!V("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this._proxmox=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(r,i)=>T(this.hass,r,i)})}}updated(){var n,r,i,a;this.data.plans.length>1&&this.watch.watch(this.hass,this.data);let e=this.pendingRoom;if(e&&this.data.planId===e.plan&&this.data.building&&(this.pendingRoom=null,this._floorId=e.floorId??((n=this.data.building.floors.find(s=>ce(s).some(l=>l.id===e.roomId)))==null?void 0:n.id)??null,this._roomId=e.roomId),!this.locateLab&&((i=(r=this.hass)==null?void 0:r.user)!=null&&i.is_admin)&&this.data.building&&$i()&&(this.locateLab=cp(()=>({hass:this.hass,building:this.data.building}))),this.pendingTemplate!==null&&((a=this.hass)!=null&&a.user)&&this.data.building){let s=this.pendingTemplate;this.pendingTemplate=null,this.hass.user.is_admin&&this.openFunSettings("cards",s||null)}if(this.ttLinked||!this.data.building||!on()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let t=new URLSearchParams(location.search).get("tt");t!==null&&V("time_travel")&&this.toggleTimeTravel(t)}back(){var e,t;this._roomId?this._roomId=null:this._floorId&&(((e=this.data.building)==null?void 0:e.floors.length)??0)>1?this._floorId=null:(t=this.view3d())==null||t.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey);let e=new URLSearchParams(location.search);e.get("tab")==="extensions"&&(this._mode="extensions"),e.get("settings")==="cards"&&(this.pendingTemplate=e.get("template")??"")}pendingTemplate=null;disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop(),(e=this.locateLab)==null||e.call(this),this.locateLab=null}render(){var n;let e=this.data.building,t=this.data.saveState;return b`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._micProbe&&this.hass?b`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,Pr())}></fp3d-mic-probe>`:x}
        ${this._clean&&this._mode==="view"?x:b`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>CasaNeon</h1>
          ${this.data.plans.length>1||this.isAdmin&&this.data.plans.length>0?b`<fp3d-plan-picker
                .hass=${this.hass}
                .plans=${this.data.plans}
                .current=${this.data.planId}
                ?admin=${this.isAdmin}
                @plan-pick=${r=>this.pickPlan(r.detail.plan)}
                .alerts=${this.alertCounts()}
                @plan-new=${()=>this.openFunSettings("plans")}
                @plan-manage=${()=>this.openFunSettings("plans")}
                @plan-overview=${()=>this._overview=!0}
                @plan-site=${()=>this.showSite()}
                .site=${this._site}
                .hasSite=${this.data.plans.some(r=>{var i;return(i=r.site)==null?void 0:i.on})}
              ></fp3d-plan-picker>`:x}
          ${this._overview?b`<fp3d-plan-overview
                .hass=${this.hass}
                .plans=${this.data.plans}
                .buildings=${this.planBuildings()}
                .current=${this.data.planId}
                @plan-pick=${r=>{this._overview=!1,this.pickPlan(r.detail.plan)}}
                @close=${()=>this._overview=!1}
              ></fp3d-plan-overview>`:x}
          ${this.isAdmin?b`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                ${this.canEdit?b`<button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>`:x}
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}
                </button>
              </div>`:x}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&(e!=null&&e.floors.some(r=>r.rooms.length))?b`<button
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
                ${["auto","low","high"].map(r=>b`<button aria-pressed=${this._quality===r} @click=${()=>this.setQuality(r)}>${this.t(`quality_${r}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${[...sa,"auto"].map(r=>b`<button
                      aria-pressed=${this._theme===r}
                      @click=${()=>{this._theme=r,ee.set("theme",r)}}
                    >
                      ${this.t(`theme_${r}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${r=>{this._accent=r.target.value,ee.set("accent",this._accent)}}
                  />
                  ${this._accent?b`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,ee.set("accent","")}}
                      >
                        ↺
                      </button>`:x}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${["off","tl","tr","bl","br"].map(r=>b`<button aria-pressed=${this._clock===r} title=${this.t(`clock_${r}`)} aria-label=${this.t(`clock_${r}`)} @click=${()=>{this._clock=r,ee.set("clock",r)}}>
                      ${r==="off"?this.t("clock_off"):eg[r]}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(r=>b`<button
                      aria-pressed=${this._markers===r}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=r,ee.set("markers",r)}}
                    >
                      ${this.t(`markers_${r}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(r=>b`<button
                      aria-pressed=${this._pinSize===r}
                      @click=${()=>{this._pinSize=r,ee.set("pinSize",r)}}
                    >
                      ${this.t(`pin_size_${r}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(r=>b`<button
                      aria-pressed=${this._controlsRight===r}
                      title=${this.t(r?"controls_right":"controls_left")}
                      aria-label=${this.t(r?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=r,ee.set("controls",r?"right":"left")}}
                    >
                      ${r?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.isAdmin?b`<button
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
                      ${(n=this.data.building)!=null&&n.settings.start_view?b`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:x}`:x}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,ee.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,ee.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,ee.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:x}
          ${this._mode==="editor"&&t!=="idle"?b`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:x}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?x:this.renderNotices()}
        ${this.data.error&&!e?b`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:x}
        ${!e&&!this.data.error?b`<p class="fp3d-message">${this.t("loading")}</p>`:x}
        ${e?this._mode==="editor"&&this.canEdit?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(this._site?this.siteBuilding()??e:e):x}
      </div>
    `}renderNotices(){var n;let e=this.data,t=[];for(let{plan:r,alert:i}of this.alertsElsewhere()){let a=this.watch.others.get(r);a&&t.push(b`<div class="fp3d-notice fp3d-notice-error">
          <span>⚠ ${this.t("plan_alert",{plan:yn(this.hass,e.plans,r),text:Dt(this.hass,a,i)})}</span>
          <button class="fp3d-btn" @click=${()=>this.showElsewhere(r,i)}>${this.t("plan_alert_go")}</button>
        </div>`)}if(e.needsRestart&&(e.versionGap==="frontend"?t.push(b`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(b`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(b`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let r=new Date(e.draft.savedAt).toLocaleString((n=this.hass)==null?void 0:n.language);t.push(b`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:r})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?b`<div class="fp3d-notices">${t}</div>`:x}renderExtensions(){return this._editorReady?b`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @open-fun-settings=${()=>this.openFunSettings()}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`:(li().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),b`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?b`<fp3d-editor
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
      @director-here=${()=>this._director=Ha()}
      @voice-here=${()=>{this._voiceHere=Aa(),this._screen=Ta()}}
      @mic-probe=${()=>ft().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(li().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),b`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){var l,u,c,d;if(!e.floors.length||!e.floors.some(p=>p.rooms.length))return b`<div class="fp3d-empty">
        <p>${this.t(this.canEdit?"no_building_admin":"no_building")}</p>
        ${this.canEdit?b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:x}
      </div>`;let t=e.floors.find(p=>p.id===this._floorId),n=t?[t]:e.floors,r=this.tt.active,i=nt("room_bar")?this._roomBar:"off",a=i!=="off"&&!r,s=i==="off";return b`
      ${this._clean||!s&&e.floors.length<2?x:b`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?b`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(p=>b`<button
                  class="fp3d-chip"
                  aria-pressed=${p.id===this._floorId}
                  @click=${()=>{this._floorId=p.id,this._roomId=null}}
                >
                  ${p.name}
                </button>`)}
              ${s?b`<span class="fp3d-sep"></span>`:x}`:x}
        ${(s?n:[]).flatMap(p=>[n.length>1&&ce(p).some(h=>h.name.trim())?b`<span class="fp3d-nav-floor">${p.name}</span>`:x,...ce(p).filter((h,f,m)=>h.name.trim()&&!(h.outdoor&&m.findIndex(g=>g.outdoor&&g.area_id===h.area_id&&g.name===h.name)<f)).map(h=>b`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${h.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=p.id),this._roomId=h.id===this._roomId?null:h.id}}
            >
              ${h.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,ee.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${r?"fp3d-tt":""} ${a?"fp3d-has-bar":""}">
        <fp3d-view3d
          class="fp3d-body"
          @walk-change=${p=>this._walking=p.detail.walking}
          .pivotMark=${this._pinHover}
          .hass=${this.tt.hass(this.hass)}
          .replay=${((l=this.tt.session)==null?void 0:l.replay)??null}
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
          .cameraWall=${this._cameraWall&&!r}
          @camera-wall-close=${()=>this._cameraWall=!1}
          @camera-wall-open=${()=>this._cameraWall=!0}
          .proxmoxWall=${this._proxmox&&!r}
          @proxmox-close=${()=>this._proxmox=!1}
          .clean=${this._clean}
          .cleanButton=${!0}
          @clean-toggle=${()=>{this._clean=!this._clean,ee.set("clean",this._clean?"1":"0")}}
          .weather=${this._weather}
          .director=${this._director}
          .voice=${this._voiceHere}
          .screen=${this._screen||null}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:((u=e.floors[0])==null?void 0:u.id)??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .plain=${this._plain}
          .markerMode=${this._markers}
          .pinSize=${this._pinSize}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .clock=${this._clock}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!r}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${p=>this._selFurniture=p.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${p=>this._selDevice=p.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${p=>{this._floorId=p.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId&&!this._walking?b`<fp3d-room-panel
              ?walk=${!0}
              @walk-here=${()=>{var p;return(p=this.view3d())==null?void 0:p.walkHere()}}
              class="fp3d-room-panel"
              @camera-look=${p=>{var h;return(h=this.view3d())==null?void 0:h.lookThrough(p.detail.entity)}}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${r}
              .room=${e.floors.flatMap(p=>ce(p)).find(p=>p.id===this._roomId)??null}
              .floor=${e.floors.find(p=>ce(p).some(h=>h.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${pn(this.hass,e.floors)}
              .sheets=${this._roomId?((c=this.view3d())==null?void 0:c.roomSheets(this._roomId))??null:null}
              @sheet-open=${p=>{var h;return this._roomId&&((h=this.view3d())==null?void 0:h.openRoomSheet(this._roomId,p.detail.id))}}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:x}
        ${a?b`<fp3d-room-bar
              class="fp3d-room-bar"
              .hass=${this.hass}
              .building=${e}
              .floorId=${e.floors.length>1?this._floorId:((d=e.floors[0])==null?void 0:d.id)??null}
              .roomId=${this._roomId}
              ?favorites=${i==="all"}
              @room-pick=${p=>{e.floors.length>1&&(this._floorId=p.detail.floorId),this._roomId=p.detail.roomId===this._roomId?null:p.detail.roomId}}
            ></fp3d-room-bar>`:x}
        ${this.tt.session?b`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:x}
        ${this._clean?x:b`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?b`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          <div class="fp3d-seg" title=${this.t("plain_hint")}>
            <button aria-pressed=${!this._plain} @click=${()=>this.setPlain(!1)}>${this.t("plain_off")}</button>
            <button aria-pressed=${this._plain} @click=${()=>this.setPlain(!0)}>${this.t("plain_on")}</button>
          </div>
          ${nt("room_bar")?b`<div class="fp3d-seg" title=${this.t("room_bar_hint")}>
                <button aria-pressed=${this._roomBar==="off"} @click=${()=>this.setRoomBar("off")}>${this.t("room_bar_none")}</button>
                <button aria-pressed=${this._roomBar==="rooms"} @click=${()=>this.setRoomBar("rooms")}>${this.t("room_bar_rooms")}</button>
                <button aria-pressed=${this._roomBar==="all"} @click=${()=>this.setRoomBar("all")}>${this.t("room_bar_all")}</button>
              </div>`:x}
          ${e.floors.length>1&&!this._floorId?b`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:x}
          ${!this._floorId&&e.settings.roof.type!=="none"?b`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:x}
          ${e.floors.length>1&&this._floorId?b`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(p=>b`<button
                      aria-pressed=${this._floorStack===p}
                      @click=${()=>{this._floorStack=p,ee.set("floor_stack",p)}}
                    >
                      ${this.t(`floor_stack_short_${p}`)}
                    </button>`)}
              </div>`:x}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(p=>b`<button
                  aria-pressed=${this._heat===p}
                  @click=${()=>{this._heat=p,ee.set("heat",p)}}
                >
                  ${this.t(p==="none"?"heat_off":`heat_short_${p}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,ee.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,ee.set("trail",this._trail?"1":"0")}}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>{this._cameraWall=!this._cameraWall,this._cameraWall&&(this._proxmox=!1)}}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          ${Cc(this.hass)?b`<button
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
            @click=${()=>{this._weather=!this._weather,ee.set("weather",this._weather?"1":"0")}}
          >
            ${V("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:x}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${r} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${V("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?b`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:x}
        </div>`}
        ${this._furnish?b`<div class="fp3d-furnish-bar">
              ${this._selFurniture?b`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,p=>p.mirror=!p.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?b`<span>${Y(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:b`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:x}
      </div>
    `}static styles=[Ce,je,Me`
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
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",Va);function Tr(o,e){let t=e==null?void 0:e.trim(),n=o==null?void 0:o.card_templates;return t?(n==null?void 0:n.find(r=>r.id===t))??(n==null?void 0:n.find(r=>{var i;return(i=r.aliases)==null?void 0:i.includes(t)})):void 0}var tg=["fill","height","fullscreen_button","plan"];function Na(o,e){let t=Tr(e,o.template);if(!t)return o;let n=Object.fromEntries(tg.filter(r=>o[r]!==void 0).map(r=>[r,o[r]]));return{...t.config,...n,screen:t.config.screen||t.name,type:o.type,template:o.template}}function zr(o,e,t=new Date){var s;if(!o||o==="off")return!1;if(o==="sun")return((s=e==null?void 0:e.states["sun.sun"])==null?void 0:s.state)==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let r=Number(n[1])*60+Number(n[2]),i=Number(n[3])*60+Number(n[4]),a=t.getHours()*60+t.getMinutes();return r<=i?a>=r&&a<i:a>=r||a<i}var dp;function up(){let o=new URL("./neonplan3d-card-editor.js?v=376f01ea474f",new URL(import.meta.url)).href;return dp??=import(o),dp}function pp(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}function ng(o){let e=o;for(let t=0;e&&t<40;t++){if(e.localName==="hui-grid-section")return!0;e=e.parentElement??e.getRootNode().host??null}return!1}var qa=class extends ve{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_walking:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0},_stretch:{state:!0}};yaml=null;appliedTemplate="";roomApplied=!1;cleanTimer;cellObserver=null;idleTimer;nightTimer;data=new sn(this);watch=new wn(this);yamlPlan=null;tt=new En(this);constructor(){super(),this._roomId=null,this._walking=!1,this._floorId=void 0,this._walls=pp(),this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1,this._stretch=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){var n;clearTimeout(this.cleanTimer);let t=((n=this._config)==null?void 0:n.controls_hide_after)??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){var t;clearTimeout(this.idleTimer);let e=((t=this._config)==null?void 0:t.idle_return)??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!V("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:(n==null?void 0:n.quality)??"auto",speed:(n==null?void 0:n.time_travel_speed)??null,range:(n==null?void 0:n.time_travel_range)??null,t:(r,i)=>T(this.hass,r,i)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){var e,t,n;if((e=this.tt.session)!=null&&e.playing){this.armIdle();return}this.tt.stop(),this._roomId=this.homeRoom(),this._floorId=void 0,(t=this.view3d())==null||t.resetView(),(n=this._config)!=null&&n.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{var e;this._fullscreen=!!document.fullscreenElement&&((e=this.shadowRoot)==null?void 0:e.contains(document.fullscreenElement))===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{var t,n;let e=Math.round(((t=window.visualViewport)==null?void 0:t.height)??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),(n=this._config)!=null&&n.fill&&!this._fullscreen){let r=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(r-this._top)>1)&&(this._top=r)}};preview=!1;connectedCallback(){var e;super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.cellObserver??=new ResizeObserver(()=>{var r,i;let t=((r=this._config)==null?void 0:r.height)??420,n=!((i=this._config)!=null&&i.fill)&&this.clientHeight>t+4&&ng(this);n!==this._stretch&&(this._stretch=n)}),this.cellObserver.observe(this),this.armIdle(),this.nightTimer=setInterval(()=>{var t;return this._night=zr((t=this._config)==null?void 0:t.night,this.hass)},6e4)}disconnectedCallback(){var e,t;super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onViewport),(t=this.cellObserver)==null||t.disconnect(),this.cellObserver=null,this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){var n;if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=(n=this.shadowRoot)==null?void 0:n.querySelector("ha-card"),t=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e!=null&&e.requestFullscreen?e.requestFullscreen().catch(t):t()}static async getConfigElement(){return await up(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this.yaml=e,e.plan!==this.yamlPlan&&(this.yamlPlan=e.plan,this.roomApplied=!1,this._floorId=void 0,this._roomId=null,this.data.switchPlan(e.plan==="site"?pe:e.plan??null)),this.appliedTemplate=this.templateKey(),this.applyConfig(Na(e,this.data.building))}templateKey(){var t;let e=Tr(this.data.building,(t=this.yaml)==null?void 0:t.template);return e?JSON.stringify([e.name,e.config]):""}applyConfig(e,t){let n=r=>!t||JSON.stringify(t[r])!==JSON.stringify(e[r]);this._config=e,n("floor")&&(this._floorId=void 0),(n("room")||n("rooms"))&&(this.roomApplied=!1),n("rooms")&&(this._floorId=void 0),n("walls")&&(this._walls=pp()),n("heatmap")&&(this._heat=null),n("explode")&&(this._explode=null),this._orbit=!1,this._night=zr(e.night,this.hass),n("controls_hidden")&&(this._clean=e.controls_hidden===!0),(n("controls_hide_after")||n("controls_hidden"))&&this.armClean(),(n("idle_return")||n("idle_orbit"))&&this.armIdle()}getCardSize(){var e;return Math.ceil((((e=this._config)==null?void 0:e.height)??420)/50)}getGridOptions(){var e,t;return{columns:"full",rows:(e=this._config)!=null&&e.fill?12:Math.ceil((((t=this._config)==null?void 0:t.height)??420)/56),min_rows:4}}willUpdate(e){var t,n,r;if((t=this.yaml)!=null&&t.template){let i=this.templateKey();i!==this.appliedTemplate&&(this.appliedTemplate=i,this.applyConfig(Na(this.yaml,this.data.building),this._config))}if(e.has("hass")&&this.hass){this.data.setHass(this.hass),(n=this.tt.session)==null||n.setLive(this.hass);let i=zr((r=this._config)==null?void 0:r.night,this.hass);i!==this._night&&(this._night=i)}}get shownRooms(){var e;return hr(this.data.building,(e=this._config)==null?void 0:e.rooms)}get roomsLocked(){var e;return this.shownRooms.length>0&&((e=this._config)==null?void 0:e.rooms_lock)!==!1}get roomFloors(){var t;let e=new Set(this.shownRooms);return(((t=this.data.building)==null?void 0:t.floors)??[]).filter(n=>ce(n).some(r=>e.has(r.id))).map(n=>n.id)}homeRoom(){var t,n;if((t=this._config)!=null&&t.room)return this._config.room;let e=this.shownRooms;return e.length===1&&((n=this._config)==null?void 0:n.room_panel)!==!1?e[0]:null}allowed(e){return!e||!this.roomsLocked||this.shownRooms.includes(e)}roomsOf=null;shownBuilding(e){var r;let t=this.shownRooms;if(!t.length)return e;let n=t.join(",");return(((r=this.roomsOf)==null?void 0:r.from)!==e||this.roomsOf.key!==n)&&(this.roomsOf={from:e,key:n,to:fr(e,t)}),this.roomsOf.to}get canSwitch(){var e;return this.shownRooms.length?this.roomFloors.length>1:!((e=this._config)!=null&&e.floor)||this.thumbs}get thumbs(){var e,t;return this.shownRooms.length?!1:((e=this._config)==null?void 0:e.floor_thumbs)??!((t=this._config)!=null&&t.floor)}currentFloor(){var r;let e=this.data.building,t=this._floorId===void 0?((r=this._config)==null?void 0:r.floor)??null:this._floorId,n=this.roomFloors;return this.shownRooms.length?n.length===1?n[0]:t&&n.includes(t)?t:null:e&&e.floors.length===1?e.floors[0].id:e!=null&&e.floors.some(i=>i.id===t)?t:null}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}get isSite(){var e;return((e=this._config)==null?void 0:e.plan)==="site"}updated(){this.isSite&&this.data.plans.length>1&&this.watch.watch(this.hass,this.data)}render(){var S,M,y,C,q,A,P,$,E,R,j,N,J,H,U,ne,K,Z,W,de,fe,Be,ye,it,gt,Re;let e=((S=this._config)==null?void 0:S.height)??420,t=this._config,n=this.isSite?this.watch.site(this.data)??this.data.building:this.data.building,r=n?this.homeRoom():null;!this.roomApplied&&n&&r&&(this.roomApplied=!0,n.floors.some(G=>ce(G).some($e=>$e.id===r))&&(this._roomId=r));let i=this.shownRooms,a=i.length===1?((M=n==null?void 0:n.floors.flatMap(G=>ce(G)).find(G=>G.id===i[0]))==null?void 0:M.area_id)??null:null,s=this.currentFloor(),l=!!this._roomId&&(t==null?void 0:t.room_panel)===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!s&&((n==null?void 0:n.floors.length)??0)>1,u=G=>(t==null?void 0:t.controls)===!0||Array.isArray(t==null?void 0:t.controls)&&t.controls.includes(G),c=["temperature","humidity","co2"].filter(G=>u(G)),d=this._walls??(t==null?void 0:t.walls)??"auto",p=this._heat??(t==null?void 0:t.heatmap)??"none",h=this._explode??(t==null?void 0:t.explode)??!0,f=this._fullscreen?"100%":t!=null&&t.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":this._stretch?"100%":`${e}px`,m=!!n&&!this._clean&&(l||(!!(t!=null&&t.controls)||!!(t!=null&&t.time_travel))&&!(this._roomId&&t.room_panel!==!1)),g=this.tt.active,_=!!n&&!!(t!=null&&t.room_bar)&&nt("room_bar")&&!g&&!(this._roomId&&t.room_panel!==!1),w=(t==null?void 0:t.controls_hidden)!==void 0||((t==null?void 0:t.controls_hide_after)??0)>0,v=G=>T(this.hass,G),k=/^#[0-9a-f]{6}$/i.test((t==null?void 0:t.accent)??"")?t.accent:null;return b`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${k?`--fp3d-accent:${k}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${g?"fp3d-tt":""}" style="height:${f}">
        ${n&&n.floors.some(G=>G.rooms.length)?b`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${((y=this.tt.session)==null?void 0:y.replay)??null}
              .building=${n}
              .planId=${this.isSite?null:this.data.planId}
              .noSave=${this.isSite}
              .rooms=${i.length?i:null}
              .packs=${this.data.packs}
              .floorId=${s}
              .roomId=${this._roomId}
              .wallMode=${d}
              .explode=${h}
              .keepRoof=${(t==null?void 0:t.roof_fade)===!1}
              .plain=${(t==null?void 0:t.plain)===!0}
              .hideRoof=${(t==null?void 0:t.roof)===!1||i.length>0}
              .quality=${((C=this._config)==null?void 0:C.quality)??"auto"}
              ?showStats=${((q=this._config)==null?void 0:q.stats)??!1}
              .markerMode=${((A=this._config)==null?void 0:A.markers)??"important"}
              .pinSize=${((P=this._config)==null?void 0:P.marker_size)??"normal"}
              .markerNames=${(($=this._config)==null?void 0:$.marker_names)===!0}
              .central=${((E=this._config)==null?void 0:E.central)!==!1}
              .walkable=${((R=this._config)==null?void 0:R.walk)!==!1}
              @walk-change=${G=>this._walking=G.detail.walking}
              .petsOn=${((j=this._config)==null?void 0:j.pets)!==!1}
              .ghostOn=${((N=this._config)==null?void 0:N.ghost)!==!1}
              .buttons=${((H=(J=this._config)==null?void 0:J.buttons)==null?void 0:H.map((G,$e)=>({id:`card_${$e}`,...G})))??null}
              .heatMode=${p}
              .theme=${((U=this._config)==null?void 0:U.theme)??"neon"}
              .clock=${((ne=this._config)==null?void 0:ne.clock)??null}
              .accent=${((K=this._config)==null?void 0:K.accent)??null}
              .showEnergy=${((Z=this._config)==null?void 0:Z.energy)??!0}
              .flows=${((W=this._config)==null?void 0:W.flows)??null}
              .holograms=${((de=this._config)==null?void 0:de.holograms)??null}
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
              .screen=${((fe=t==null?void 0:t.screen)==null?void 0:fe.trim())||null}
              .template=${((Be=t==null?void 0:t.template)==null?void 0:Be.trim())||null}
              .viewKind=${this.preview?"preview":"card"}
              .voiceArea=${((ye=t==null?void 0:t.voice_area)==null?void 0:ye.trim())||a}
              @open-extensions=${()=>this.openDashboard("/neonplan3d?tab=extensions")}
              .scenes=${(t==null?void 0:t.scenes)!==!1}
              ?trail=${!!(t!=null&&t.motion_trail)}
              .cameraWall=${this._cameraWall&&!g}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${w}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${(t==null?void 0:t.weather)!==!1}
              .weatherEntityId=${(t==null?void 0:t.weather_entity)??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${(t==null?void 0:t.start_view)??null}
              style=${g?`--fp3d-bottom-inset: ${m?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:m?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${G=>{if(this.allowed(G.detail.roomId)){if(this.canSwitch&&((n==null?void 0:n.floors.length)??0)>1&&G.detail.floorId&&this.currentFloor()!==G.detail.floorId){if(this.roomsLocked&&!this.roomFloors.includes(G.detail.floorId))return;this._floorId=G.detail.floorId,this._roomId=null;return}G.detail.roomId&&(this._roomId=G.detail.roomId===this._roomId?null:G.detail.roomId)}}}
              @floor-tap=${G=>{this.roomsLocked&&G.detail.floorId&&!this.roomFloors.includes(G.detail.floorId)||(this._floorId=G.detail.floorId,this._roomId=null)}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:b`<p class="fp3d-card-msg">${this.data.error??(n?T(this.hass,"no_building"):T(this.hass,"loading"))}</p>`}
        ${n&&(t!=null&&t.template)&&!Tr(n,t.template)?b`<div class="fp3d-card-tpl-missing">${T(this.hass,"card_template_missing",{name:t.template})}</div>`:x}
        ${_?b`<fp3d-room-bar
              class="fp3d-card-room-bar"
              style="bottom:${m?54:8}px"
              .hass=${this.hass}
              .building=${this.shownBuilding(n)}
              .floorId=${s}
              .roomId=${this._roomId}
              ?favorites=${(t==null?void 0:t.room_bar_favorites)===!0}
              @room-pick=${G=>{if(this.allowed(G.detail.roomId)){if(G.detail.floorId!==this.currentFloor()){if(!this.canSwitch)return;this._floorId=G.detail.floorId}this._roomId=G.detail.roomId===this._roomId?null:G.detail.roomId}}}
            ></fp3d-room-bar>`:x}
        ${this._roomId&&n&&((it=this._config)==null?void 0:it.room_panel)!==!1&&!this._walking?b`<fp3d-room-panel
              ?walk=${((gt=this._config)==null?void 0:gt.walk)!==!1}
              @walk-here=${()=>{var G;return(G=this.view3d())==null?void 0:G.walkHere()}}
              @camera-look=${G=>{var $e;return($e=this.view3d())==null?void 0:$e.lookThrough(G.detail.entity)}}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${g}
              .room=${n.floors.flatMap(G=>ce(G)).find(G=>G.id===this._roomId)??null}
              .floor=${n.floors.find(G=>ce(G).some($e=>$e.id===this._roomId))??null}
              .building=${n}
              .confirmEntities=${pn(this.hass,n.floors)}
              .sheets=${this._roomId?((Re=this.view3d())==null?void 0:Re.roomSheets(this._roomId))??null:null}
              @sheet-open=${G=>{var $e;return this._roomId&&(($e=this.view3d())==null?void 0:$e.openRoomSheet(this._roomId,G.detail.id))}}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:x}
        ${m&&n?b`<div class="fp3d-card-controls">
              ${l?b`<button class="fp3d-chip" @click=${()=>this.back()}>${v("back")}</button>`:x}
              ${t!=null&&t.time_travel?b`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${g} title=${v("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${V("time_travel")?"\u23EA":"\u{1F512}"} ${v("tt_chip")}
                  </button>`:x}
              ${t!=null&&t.camera_wall?b`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${v("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${v("cameras_short")}</button>`:x}
              ${u("walls")?b`<div class="fp3d-seg">
                    <button aria-pressed=${d==="auto"} @click=${()=>this.setWalls("auto")}>${v("walls_auto")}</button>
                    <button aria-pressed=${d==="cut"} @click=${()=>this.setWalls("cut")}>${v("walls_cut")}</button>
                  </div>`:x}
              ${u("floors")&&n.floors.length>1&&!s?b`<div class="fp3d-seg">
                    <button aria-pressed=${h} @click=${()=>this._explode=!0}>${v("floors_apart")}</button>
                    <button aria-pressed=${!h} @click=${()=>this._explode=!1}>${v("floors_stacked")}</button>
                  </div>`:x}
              ${c.length?b`<div class="fp3d-seg" role="group" aria-label=${v("heatmap")}>
                    ${["none",...c].map(G=>b`<button aria-pressed=${p===G} @click=${()=>this._heat=G}>
                          ${v(G==="none"?"heat_off":`heat_short_${G}`)}
                        </button>`)}
                  </div>`:x}
            </div>`:x}
        ${this.tt.session?b`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:x}
        ${t!=null&&t.fullscreen_button&&!this._clean&&!(this._roomId&&t.room_panel!==!1)?b`<button class="fp3d-card-full" title=${v(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${v(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:x}
        ${t!=null&&t.dashboard&&!this._clean&&!(this._roomId&&t.room_panel!==!1)?b`<button class="fp3d-card-full fp3d-card-dash ${t.fullscreen_button?"fp3d-card-dash-2":""}" title=${t.dashboard_label||t.dashboard} aria-label=${t.dashboard_label||t.dashboard} @click=${()=>this.openDashboard(t.dashboard)}>
              ${t.dashboard_label?b`<span>${t.dashboard_label}</span>`:"\u2302"}
            </button>`:x}
      </div>
    </ha-card>`}static styles=[Ce,je,Me`
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
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",qa);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:T(void 0,"card_name"),description:T(void 0,"card_description"),preview:!1})}ds();Mr();
