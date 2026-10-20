Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Wi=new URL(import.meta.url),Vi=Wi.searchParams.get("v"),Ni=o=>new URL(`./fonts/${o}${Vi?`?v=${Vi}`:""}`,Wi).href,qi="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Bi(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Ni("figtree.woff2")}) format("woff2");unicode-range:${qi}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Ni("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${qi}}`,document.head.append(o)}function Ui(o,e){var t,n;return e==="metric"||e==="imperial"?e:((n=(t=o==null?void 0:o.config)==null?void 0:t.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function Jc(o,e){return String(Number(o.toFixed(e)))}function Ki(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),r=Math.floor(n/12+1e-9),i=n-r*12,a=Jc(i,e>=2?1:0);return r?i<.05?`${t}${r}'`:`${t}${r}' ${a}"`:`${t}${a}"`}function Gi(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,r=0,i=!1,a=!1,s=t;for(let l of t.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];i=!0,s=s.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(r+=d*.3048,a=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?r+=d*.0254:c==="mm"?r+=d/1e3:c==="cm"?r+=d/100:c==="m"?r+=d:r+=e==="imperial"?d*(a?.0254:.3048):d}return!i||/[^\s+]/.test(s)?null:r}var Un=globalThis,Kn=Un.ShadowRoot&&(Un.ShadyCSS===void 0||Un.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vo=Symbol(),Yi=new WeakMap,an=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Vo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Kn&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Yi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Yi.set(t,e))}return e}toString(){return this.cssText}},Qi=o=>new an(typeof o=="string"?o:o+"",void 0,Vo),Ee=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new an(t,o,Vo)},Ji=(o,e)=>{if(Kn)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=Un.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},No=Kn?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Qi(t)})(o):o;var{is:Xc,defineProperty:Zc,getOwnPropertyDescriptor:ed,getOwnPropertyNames:td,getOwnPropertySymbols:nd,getPrototypeOf:od}=Object,Gn=globalThis,Xi=Gn.trustedTypes,rd=Xi?Xi.emptyScript:"",qo=Gn.reactiveElementPolyfillSupport,sn=(o,e)=>o,Wo={toAttribute(o,e){switch(e){case Boolean:o=o?rd:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},ea=(o,e)=>!Xc(o,e),Zi={attribute:!0,type:String,converter:Wo,reflect:!1,useDefault:!1,hasChanged:ea};Symbol.metadata??=Symbol("metadata"),Gn.litPropertyMetadata??=new WeakMap;var Ue=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Zi){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Zc(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ed(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let s=r==null?void 0:r.call(this);i==null||i.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Zi}static _$Ei(){if(this.hasOwnProperty(sn("elementProperties")))return;let e=od(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(sn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(sn("properties"))){let t=this.properties,n=[...td(t),...nd(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(No(r))}else e!==void 0&&t.push(No(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ji(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var i;let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Wo).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){var i,a;let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let s=n.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:Wo;this._$Em=r;let d=l.fromAttribute(t,s.type);this[r]=d??((a=this._$Ej)==null?void 0:a.get(r))??d,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){var a;if(e!==void 0){let s=this.constructor;if(r===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??ea)(i,t)||n.useDefault&&n.reflect&&i===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,a]of r){let{wrapped:s}=a,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ue.elementStyles=[],Ue.shadowRootOptions={mode:"open"},Ue[sn("elementProperties")]=new Map,Ue[sn("finalized")]=new Map,qo==null||qo({ReactiveElement:Ue}),(Gn.reactiveElementVersions??=[]).push("2.1.2");var Xo=globalThis,ta=o=>o,Yn=Xo.trustedTypes,na=Yn?Yn.createPolicy("lit-html",{createHTML:o=>o}):void 0,la="$lit$",Xe=`lit$${Math.random().toFixed(9).slice(2)}$`,ca="?"+Xe,id=`<${ca}>`,pt=document,cn=()=>pt.createComment(""),dn=o=>o===null||typeof o!="object"&&typeof o!="function",Zo=Array.isArray,ad=o=>Zo(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Bo=`[ 	
\f\r]`,ln=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,oa=/-->/g,ra=/>/g,dt=RegExp(`>|${Bo}(?:([^\\s"'>=/]+)(${Bo}*=${Bo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ia=/'/g,aa=/"/g,da=/^(?:script|style|textarea|title)$/i,er=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),v=er(1),Tt=er(2),Gp=er(3),ht=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),sa=new WeakMap,ut=pt.createTreeWalker(pt,129);function ua(o,e){if(!Zo(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return na!==void 0?na.createHTML(e):e}var sd=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",a=ln;for(let s=0;s<t;s++){let l=o[s],d,c,u=-1,p=0;for(;p<l.length&&(a.lastIndex=p,c=a.exec(l),c!==null);)p=a.lastIndex,a===ln?c[1]==="!--"?a=oa:c[1]!==void 0?a=ra:c[2]!==void 0?(da.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=dt):c[3]!==void 0&&(a=dt):a===dt?c[0]===">"?(a=r??ln,u=-1):c[1]===void 0?u=-2:(u=a.lastIndex-c[2].length,d=c[1],a=c[3]===void 0?dt:c[3]==='"'?aa:ia):a===aa||a===ia?a=dt:a===oa||a===ra?a=ln:(a=dt,r=void 0);let h=a===dt&&o[s+1].startsWith("/>")?" ":"";i+=a===ln?l+id:u>=0?(n.push(d),l.slice(0,u)+la+l.slice(u)+Xe+h):l+Xe+(u===-2?s:h)}return[ua(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},un=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,a=0,s=e.length-1,l=this.parts,[d,c]=sd(e,t);if(this.el=o.createElement(d,n),ut.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=ut.nextNode())!==null&&l.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(la)){let p=c[a++],h=r.getAttribute(u).split(Xe),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:f[2],strings:h,ctor:f[1]==="."?Go:f[1]==="?"?Yo:f[1]==="@"?Qo:It}),r.removeAttribute(u)}else u.startsWith(Xe)&&(l.push({type:6,index:i}),r.removeAttribute(u));if(da.test(r.tagName)){let u=r.textContent.split(Xe),p=u.length-1;if(p>0){r.textContent=Yn?Yn.emptyScript:"";for(let h=0;h<p;h++)r.append(u[h],cn()),ut.nextNode(),l.push({type:2,index:++i});r.append(u[p],cn())}}}else if(r.nodeType===8)if(r.data===ca)l.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(Xe,u+1))!==-1;)l.push({type:7,index:i}),u+=Xe.length-1}i++}}static createElement(e,t){let n=pt.createElement("template");return n.innerHTML=e,n}};function At(o,e,t=o,n){var a,s;if(e===ht)return e;let r=n!==void 0?(a=t._$Co)==null?void 0:a[n]:t._$Cl,i=dn(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=At(o,r._$AS(o,e.values),r,n)),e}var Ko=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??pt).importNode(t,!0);ut.currentNode=r;let i=ut.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new pn(i,i.nextSibling,this,e):l.type===1?d=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(d=new Jo(i,this,e)),this._$AV.push(d),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=ut.nextNode(),a++)}return ut.currentNode=pt,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},pn=class o{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=At(this,e,t),dn(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==ht&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ad(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&dn(this._$AH)?this._$AA.nextSibling.data=e:this.T(pt.createTextNode(e)),this._$AH=e}$(e){var i;let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=un.createElement(ua(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{let a=new Ko(r,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(e){let t=sa.get(e.strings);return t===void 0&&sa.set(e.strings,t=new un(e)),t}k(e){Zo(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(cn()),this.O(cn()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let r=ta(e).nextSibling;ta(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},It=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=At(this,e,t,0),a=!dn(e)||e!==this._$AH&&e!==ht,a&&(this._$AH=e);else{let s=e,l,d;for(e=i[0],l=0;l<i.length-1;l++)d=At(this,s[n+l],t,l),d===ht&&(d=this._$AH[l]),a||=!dn(d)||d!==this._$AH[l],d===k?e=k:e!==k&&(e+=(d??"")+i[l+1]),this._$AH[l]=d}a&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Go=class extends It{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Yo=class extends It{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},Qo=class extends It{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=At(this,e,t,0)??k)===ht)return;let n=this._$AH,r=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==k&&(n===k||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Jo=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){At(this,e)}};var Uo=Xo.litHtmlPolyfillSupport;Uo==null||Uo(un,pn),(Xo.litHtmlVersions??=[]).push("3.3.3");var pa=(o,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,r=n._$litPart$;if(r===void 0){let i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new pn(e.insertBefore(cn(),i),i,void 0,t??{})}return r._$AI(o),r};var hn=globalThis,Se=class extends Ue{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pa(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ht}},ha;Se._$litElement$=!0,Se.finalized=!0,(ha=hn.litElementHydrateSupport)==null||ha.call(hn,{LitElement:Se});var tr=hn.litElementPolyfillSupport;tr==null||tr({LitElement:Se});(hn.litElementVersions??=[]).push("4.2.2");async function fa(o){return o.callWS({type:"neonplan3d/building/get"})}async function Qn(o,e){return(await o.callWS({type:"neonplan3d/building/save",building:e})).revision}function ma(o,e){return o.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}function ga(o,e){return o.connection.subscribeMessage(e,{type:"neonplan3d/voice/subscribe"})}async function ba(o,e,t,n){return(await o.callWS({type:"neonplan3d/voice/answer",ask_id:e,text:t,answered:n})).taken}async function _a(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function va(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var ya=2.1;var ld=new Set(["pending","firmware_mismatch","upgrading","provisioning","adopting","deleting"]),cd=new Set(["disconnected","heartbeat_missed","inform_error","adoption_failed","isolated"]);function dd(o,e){var n,r;let t=e&&e!=="none"?(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id:null;return t&&o.entities?Object.values(o.entities).filter(i=>i.device_id===t).map(i=>i.entity_id):[]}function ud(o){let e=o==null?void 0:o.attributes.options;return Array.isArray(e)&&e.includes("connected")&&e.includes("disconnected")}function fn(o,e){let t=dd(o,e.entity),n=i=>{var a,s,l;return`${i} ${((a=o.states[i])==null?void 0:a.attributes.friendly_name)??""} ${((l=(s=o.entities)==null?void 0:s[i])==null?void 0:l.translation_key)??""}`.toLowerCase()},r=i=>t.find(a=>a.startsWith("sensor.")&&i.test(n(a)))??null;return{state:t.find(i=>i.startsWith("sensor.")&&ud(o.states[i]))??null,clients:r(/clients|clientes/),led:t.find(i=>i.startsWith("light."))??null,cpu:r(/cpu/),memory:r(/memor/),restart:t.find(i=>{var a;return i.startsWith("button.")&&(((a=o.states[i])==null?void 0:a.attributes.device_class)==="restart"||/restart|reinici/.test(n(i)))})??null}}var nr=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function wa(o,e){var r;let t=e.state?o.states[e.state]:void 0;return t?{status:cd.has(t.state)||t.state==="unavailable"?"down":ld.has(t.state)?"busy":"up",led:e.led?((r=o.states[e.led])==null?void 0:r.state)==="on":!0,clients:nr(e.clients?o.states[e.clients]:void 0),cpu:nr(e.cpu?o.states[e.cpu]:void 0),memory:nr(e.memory?o.states[e.memory]:void 0)}:null}function Jn(o,e){var r,i,a,s;let t=(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id,n=t?(a=o.devices)==null?void 0:a[t]:void 0;return(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||((s=o.states[e])==null?void 0:s.attributes.friendly_name)||e}function xa(o){return o.status==="down"?[1,.22,.25]:o.status==="busy"?[1,.65,.15]:o.led?[.35,.65,1]:null}function pd(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function rr(o){let e=ye(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(pd).length>=2}var ka=[],or=new Map,$a=0;function Ma(o){ka=o,or=new Map(o.flatMap(e=>e.items.map(t=>[hd(e.id,t.id),t]))),$a++}function mn(){return ka}function zt(){return $a}function hd(o,e){return`pack:${o}:${e}`}function ft(o){return o.startsWith("pack:")}function Xn(o){return ft(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function Ct(o){return o==="robot_vacuum"||ft(o)&&o.endsWith(":robot_vacuum")}var fd={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Sa(o){var e;return(e=ye(o))==null?void 0:e.parts.find(t=>t.screen)}function ye(o){if(!ft(o))return;let e=or.get(o);if(e)return e;let[,t,...n]=o.split(":"),r=fd[t];return r?or.get(`pack:${r}:${n.join(":")}`):void 0}function Ea(o){return o.name.es??o.name.en??Object.values(o.name)[0]??o.id}function me(o,e){let t=ye(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Pa;if(e.type==="access_point")return e.variant==="wall"?ya:Math.max(0,o.height-Math.max(.005,e.h));if(Zn.has(e.type))return Math.max(0,o.height-eo(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t==null?void 0:t.mount){case"surface":return to(o,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?0:Aa(e)}}var za={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},ph=Object.keys(za),Ca=1;function gd(o){return o.variant&&za[o.variant]?o.variant:"80"}function Ra(o){return{30:1,50:2,80:3,100:4}[gd(o)]??3}function gn(o,e){var s,l;let t=e.entity&&e.entity!=="none"?e.entity:null,n=t?(l=(s=o.entities)==null?void 0:s[t])==null?void 0:l.device_id:null,r=n&&o.entities?Object.values(o.entities).filter(d=>d.device_id===n).map(d=>d.entity_id):[],i=d=>{var c,u,p;return`${d} ${((c=o.states[d])==null?void 0:c.attributes.friendly_name)??""} ${((p=(u=o.entities)==null?void 0:u[d])==null?void 0:p.translation_key)??""}`.toLowerCase()},a=(d,c,u)=>r.find(p=>p.startsWith(`${d}.`)&&c.test(i(p))&&!(u&&u.test(i(p))))??null;return{heater:t,heating:a("binary_sensor",/heating|calentando|heizt/),showers:a("sensor",/shower|ducha|dusch/),remaining:a("sensor",/remaining|restante|restzeit/),power:a("switch",/power|encendid|_on\b/,/eco|legionella/),eco:a("switch",/\beco/)}}var Ta=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function Fa(o,e){var l,d,c;let t=e.heater?o.states[e.heater]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=e.power?(l=o.states[e.power])==null?void 0:l.state:void 0,r=n!==void 0?n==="on":t.state!=="off",i=t.attributes,a=r&&(e.heating?((d=o.states[e.heating])==null?void 0:d.state)==="on":i.hvac_action==="heating"),s=Ta(e.remaining?o.states[e.remaining]:void 0);return{on:r,heating:a,current:typeof i.current_temperature=="number"?i.current_temperature:null,target:typeof i.temperature=="number"?i.temperature:null,showers:Ta(e.showers?o.states[e.showers]:void 0),remaining:a&&s!==null&&s>0?s:null,eco:e.eco?((c=o.states[e.eco])==null?void 0:c.state)==="on":!1}}var Ke={field:null,size:1,right:0,up:0};var ja=["rain","snow","clouds","lightning","sky"];var bd={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function ar(o){return o==="hedge"||o==="fence"||o==="pergola"}function _d(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!ar(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function we(o){return[...o.rooms,..._d(o)]}function vd(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let r=o.slope_dir??"x",i=(d,c)=>r==="x"?d:r==="-x"?-d:r==="z"?c:-c,a=1/0,s=-1/0;for(let[d,c]of o.points){let u=i(d,c);a=Math.min(a,u),s=Math.max(s,u)}if(s-a<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-a)/(s-a)));return n*l}function yd(o,e,t,n){return La(o,e)+bd[e.type]-wd(o,e,t,n)}var sr=-.2,ir={set:!1,level:sr};function Da(o){let e=(o==null?void 0:o.settings.terrain)??null;ir={set:(e==null?void 0:e.level)!=null,level:(e==null?void 0:e.level)??sr}}function Oa(o){return o.elevation>.3?0:ir.set?ir.level-o.elevation:sr}function La(o,e){return Oa(o)+(e.offset??0)}function wd(o,e,t,n){return e.type==="pool"?0:vd(e,t,n)}function Rt(o,e,t){let n=(o.outdoor??[]).filter(i=>!ar(i.type)&&i.type!=="pool"&&B([e,t],i.points)),r=[...n].reverse().find(i=>i.cut)??n[0];return r?yd(o,r,e,t):Oa(o)}function Va(o,e){return La(o,e)+(e.above?Na(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function xd(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?Na(o):1.5}function kd(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!ar(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>B(n,t.points)))}function bn(o,e){return!e.above&&!kd(o,e)?Ft(o,e)-.05:Va(o,e)-xd(e)}function Ft(o,e){return Va(o,e)-.15}function Na(o){return o.height&&o.height>.3?o.height:1.2}var $d={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var qa={type:"none",pitch:35,overhang:.4},Md={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...qa}};var Wa=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Ba=.3;var Ua=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Pa=1.75;function Ka(o){if(["lamp_ceiling_fan","lamp_pendant","stairwell","parking"].includes(o.type)||Sd.has(o.type))return!1;let e=ye(o.type);return!((e==null?void 0:e.mount)==="ceiling"&&e.light)}var Zn=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function eo(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var Sd=new Set(["stairs","stairs_u"]);function lr(o){var e;return Ua.has(o)||!!((e=ye(o))!=null&&e.light)}var Ed=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var Pd=1.05,Ad=.3;function Aa(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return Pd;case"wall_socket":return Ad;case"water_heater":return Ca;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Ha=.04,Id=1.2;function to(o,e,t,n=0){var i;let r=0;for(let a of o.furniture)!(Ed.has(a.type)||(i=ye(a.type))!=null&&i.surface)||!B([e,t],mt(a))||a.type==="worktop"&&n>0&&a.h-Ha>=Id&&n<=a.h-Ha-.02||(r=Math.max(r,a.h));return r}var md=new Set([...Ua,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Ia={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_ceiling_fan:[1.2,1.2,.35],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.086,.05,.086],wall_socket:[.086,.05,.086],water_heater:[.506,.275,1.066],access_point:[.16,.16,.035],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function cr(o){var e;o.energy={...$d,...o.energy??{}},o.presence=o.presence??[],o.settings={...Md,...o.settings,roof:{...qa,...((e=o.settings)==null?void 0:e.roof)??{}}};for(let t of o.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(r=>({...r,panel:r.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),t.furniture=t.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=t.placements.filter(r=>r.entity_id.startsWith("light.")&&!r.pin);if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of n){let a=r[i.mount??"ceiling"],[s,l,d]=Ia[a];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:a,x:i.x,z:i.z,rotation:0,w:s,d:l,h:d,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}t.openings=t.openings.map(r=>({...r,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return o}function Ga(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function Ne(o){let e=0;for(let t=0;t<o.length;t++){let[n,r]=o[t],[i,a]=o[(t+1)%o.length];e+=n*a-i*r}return e/2}function Re(o){let e=Ne(o);if(Math.abs(e)<1e-9){let r=o.length||1;return[o.reduce((i,a)=>i+a[0],0)/r,o.reduce((i,a)=>i+a[1],0)/r]}let t=0,n=0;for(let r=0;r<o.length;r++){let[i,a]=o[r],[s,l]=o[(r+1)%o.length],d=i*l-s*a;t+=(i+s)*d,n+=(a+l)*d}return[t/(6*e),n/(6*e)]}function mt(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=o.w/2,i=o.d/2;return[[-r,-i],[r,-i],[r,i],[-r,i]].map(([a,s])=>[o.x+a*t-s*n,o.z+a*n+s*t])}function B(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,a]=e[n],[s,l]=e[r];a>o[1]!=l>o[1]&&o[0]<(s-i)*(o[1]-a)/(l-a)+i&&(t=!t)}return t}var Ya={lamp_ceiling:"ceiling",lamp_ceiling_fan:"ceiling_fan",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Td=700,ur="neonplan3d.unsaved",Ht="1.22.0",Ja="floorplan-3d.unsaved";function zd(){try{let o=localStorage.getItem(ur)??localStorage.getItem(Ja);return o?JSON.parse(o):null}catch{return null}}function dr(o){try{o?localStorage.setItem(ur,JSON.stringify(o)):(localStorage.removeItem(ur),localStorage.removeItem(Ja))}catch{}}var jt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){var e;this.connected=!1,this.flush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Td),this.host.requestUpdate()}get frontendVersion(){return Ht}get versionGap(){return!this.backendVersion||Ht==="dev"||this.backendVersion===Ht?null:Cd(this.backendVersion,Ht)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Ht!=="dev"&&this.backendVersion!==Ht}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(cr(e.building))}discardDraft(){this.draft=null,dr(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!(!e||!this.hass)){this.pending=null;for(let t of e.floors)for(let n of t.furniture)n.mount_y!=null&&n.mount_y>10&&(n.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await Qn(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,dr(null)}catch(t){this.saveState="error",this.saveError=Qa(t),dr({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await ma(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await va(this.hass)}catch{this.packs=[]}Ma(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await fa(this.hass);this.building=cr(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=zd()),this.revision=e.revision,this.error=null}catch(e){this.error=Qa(e)}this.host.requestUpdate()}}};function Qa(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function Cd(o,e){let t=o.split(/[.-]/).map(r=>Number.parseInt(r,10)||0),n=e.split(/[.-]/).map(r=>Number.parseInt(r,10)||0);for(let r=0;r<Math.max(t.length,n.length);r++){let i=(t[r]??0)-(n[r]??0);if(i)return i}return 0}var Xa;function pr(){let o=new URL("./neonplan3d-editor.js?v=964a279b0055",new URL(import.meta.url)).href;return Xa??=import(o),Xa}function Dt(o){let e=(o.switch_keys??[]).slice(0,4).map(t=>t&&t!=="none"?t:null);return e.length?e:[null]}var Za=o=>o&&o!=="none"?o:null;function Ot(o){let e=(o.socket_outlets??[]).slice(0,4).map(t=>({entity:Za(t==null?void 0:t.entity),power:Za(t==null?void 0:t.power)}));return e.length?e:[{entity:null,power:null}]}function no(o){return o.switch_ring&&o.switch_ring!=="none"?o.switch_ring:null}function hr(o,e){var n;let t=e?(n=o.states[e])==null?void 0:n.state:void 0;return t==="on"||t==="open"||t==="opening"}var Rd={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Fd=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),Hd=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),jd=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),oo=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],ls=new Set(["light","switch","fan"]);function cs(o){return o.slice(0,o.indexOf("."))}function j(o){return Rd[cs(o)]??null}function es(o){return o!==null&&o!=="scene"&&o!=="script"}function yn(o,e){var n,r,i;let t=(n=o.entities)==null?void 0:n[e];return t?t.area_id?t.area_id:t.device_id&&((i=(r=o.devices)==null?void 0:r[t.device_id])==null?void 0:i.area_id)||null:null}function ts(o,e){var a;let t=j(e);if(!t)return!1;let n=(a=o.entities)==null?void 0:a[e];if(n!=null&&n.hidden||n!=null&&n.entity_category)return!1;let r=o.states[e];if(!r)return!1;let i=r.attributes.device_class;return t==="sensor"?i?Fd.has(i):Hd.has(String(r.attributes.unit_of_measurement??"")):t==="binary"?i?jd.has(i):!!(n!=null&&n.area_id):!0}var Dd=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function ns(o,e){var r;if(j(e)!=="sensor")return!1;let t=(r=o.entities)==null?void 0:r[e];if(t!=null&&t.hidden||t!=null&&t.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||Dd.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Y(n)}var fr=null;function vn(o){var l,d;let e=fr;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,r=[],i=new Map,a=new Map;for(let c of Object.keys(o.entities??{})){let u=o.entities[c],p=u.device_id;p&&u.area_id&&(a.get(p)??a.set(p,new Set).get(p)).add(u.area_id),p&&wr(o,c)&&(n.get(p)??n.set(p,[]).get(p)).push(c),p&&!u.hidden&&!u.entity_category&&(i.get(p)??i.set(p,new Set).get(p)).add(cs(c));let h=ts(o,c),f=yn(o,c);if(!f){(h||ns(o,c))&&es(j(c))&&r.push(c);continue}h&&(t.get(f)??t.set(f,[]).get(f)).push(c)}if(o.entities)for(let c of Object.keys(o.states))o.entities[c]||(ts(o,c)||ns(o,c))&&es(j(c))&&r.push(c);r.sort((c,u)=>oo.indexOf(j(c))-oo.indexOf(j(u))||J(o,c).localeCompare(J(o,u)));for(let[c,u]of t){let p=(d=(l=o.areas)==null?void 0:l[c])==null?void 0:d.name;u.sort((h,f)=>{let m=oo.indexOf(j(h)),g=oo.indexOf(j(f));return m-g||J(o,h,p).localeCompare(J(o,f,p))})}let s=new Set([...a].filter(([,c])=>c.size>1).map(([c])=>c));return fr={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:r,domains:i,hubs:s},fr}function ge(o,e){return!e||!o.entities?[]:vn(o).areas.get(e)??[]}var Od={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ld=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Vd=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Nd(o,e){var r,i,a;let t=(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id,n=t&&!vn(o).hubs.has(t)?vn(o).domains.get(t):void 0;return n&&[...n].some(s=>Ld.has(s))?!1:!Vd.test(`${e} ${((a=o.states[e])==null?void 0:a.attributes.friendly_name)??""}`)}function mr(o,e,t,n){var h;let r=(h=t.climate)==null?void 0:h[n];if(r==="none")return[];if(r)return o.states[r]?[r]:[];let i=Od[n],a=(f,m)=>B([f,m],t.points),s=(e==null?void 0:e.placements.filter(f=>f.entity_id.startsWith("sensor.")))??[],l=s.filter(f=>a(f.x,f.z)).map(f=>f.entity_id),d=new Set(s.filter(f=>!a(f.x,f.z)).map(f=>f.entity_id)),c=[...new Set([...ge(o,t.area_id).filter(f=>!d.has(f)),...l])],u=c.filter(f=>{var m;return f.startsWith("sensor.")&&((m=o.states[f])==null?void 0:m.attributes.device_class)===i&&(t.outdoor||Nd(o,f))});if(u.length)return u;let p=ds[n];return p?c.filter(f=>{var m;return f.startsWith("climate.")&&typeof((m=o.states[f])==null?void 0:m.attributes[p])=="number"}):[]}var ds={temperature:"current_temperature",humidity:"current_humidity"};function qd(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let i=ds[t],a=i?Number(n==null?void 0:n.attributes[i]):Number.NaN;return t==="temperature"?os(a,Fe(o)):a}let r=Number(n==null?void 0:n.state);return t==="temperature"?os(r,n==null?void 0:n.attributes.unit_of_measurement):r}function Fe(o){var e,t;return((t=(e=o.config)==null?void 0:e.unit_system)==null?void 0:t.temperature)==="\xB0F"?"\xB0F":"\xB0C"}function os(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function Lt(o,e){return Fe(o)==="\xB0F"?e*9/5+32:e}function Ze(o,e,t,n){let r=mr(o,e,t,n).map(i=>qd(o,i,n)).filter(i=>Number.isFinite(i));return r.length?r.reduce((i,a)=>i+a,0)/r.length:null}function us(o,e){return!!o.entities&&vn(o).hubs.has(e)}function gr(o,e){return o.entities?vn(o).power.get(e)??[]:[]}function J(o,e,t){var i,a;let n=o.states[e],r=(n==null?void 0:n.attributes.friendly_name)??((a=(i=o.entities)==null?void 0:i[e])==null?void 0:a.name)??e;if(t&&r.length>t.length+1&&r.toLowerCase().startsWith(t.toLowerCase()+" ")){let s=r.slice(t.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return r}function ps(o,e){if(!e||e==="none")return null;let t=o.states[e];if(!t||Y(t))return null;let n=t.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(n))return!0;if(["off","closed","idle","false","inactive","standby"].includes(n))return!1;let r=Number(n);return Number.isFinite(r)?r>0:null}function Y(o){return!o||o.state==="unavailable"||o.state==="unknown"}var Wd=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function br(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function _r(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function qe(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return _r(o.state)||o.state==="returning";switch(j(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return br(o)&&Wd.has(String(o.state).toLowerCase());default:return!1}}function hs(o,e){if(!o||Y(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function fs(o){if(!o||Y(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],r=["heating","cooling","drying","fan"].includes(t);return{color:n,level:r||!t?1:.45}}function ms(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(s=>parseInt(e.slice(s,s+2),16)/255),n=s=>{let l=Math.max(...s),d=Math.min(...s),c=l-d;return l<=0||c/l<.25?[-1,0]:[(l===s[0]?((s[1]-s[2])/c+6)%6:l===s[1]?(s[2]-s[0])/c+2:(s[0]-s[1])/c+4)*60,c/l]},[r]=n(t),[i]=n(o.color);if(r<0||i<0)return r<0&&i<0?o:null;let a=Math.abs(r-i);return Math.min(a,360-a)<=30?o:null}function gt(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,i;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?i=Bd(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:n}}function Bd(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function Vt(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Ud=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Kd=new Set(["garage","gate"]),Gd=new Set(["window","opening"]);function _n(o,e,t=!1){let n=new Map;return e.length&&o.forEach((r,i)=>{let a=t&&e.length===1?e[0]:e[i];a&&n.set(r.id,a)}),n}function Nt(o,e){let t=new Map,n=(i,a)=>i==="none"?null:i??a??null,r=(i,a,s)=>({cover:n(i.cover,a),contact:i.sensor==="handle"&&i.contact==null?null:n(i.contact,s),tilt:i.tilt==="none"?null:i.tilt,contact2:i.leaves===2&&i.contact2&&i.contact2!=="none"?i.contact2:null,lock:(i.type==="door"||i.type==="window"&&i.sill<=.01)&&i.lock&&i.lock!=="none"?i.lock:null,tilt2:i.leaves===2&&i.tilt2&&i.tilt2!=="none"?i.tilt2:null,position:i.position&&i.position!=="none"?i.position:null,positionInverted:!!i.position_inverted,tiltAngle:i.tilt_angle&&i.tilt_angle!=="none"?i.tilt_angle:null,tiltMax:i.tilt_max??null,tiltOffset:i.tilt_offset??null,tiltInvert:!!i.tilt_invert,shut:!!i.shut,...i.contact_invert?{contactInvert:!0}:{},...i.cover_invert?{coverInvert:!0}:{}});for(let i of e){for(let a of i.rooms){let s=i.openings.filter(x=>x.room_id===a.id).sort((x,M)=>x.edge-M.edge||x.offset-M.offset);if(!s.length)continue;let l=ge(o,a.area_id),d=x=>{var M;return(M=o.states[x])==null?void 0:M.attributes.device_class},c=l.filter(x=>j(x)==="cover"&&Ud.has(d(x))),u=s.filter(x=>x.type==="window"),p=s.filter(x=>x.type==="door"),h=s.filter(x=>x.type==="garage"),f=_n(u,c,!0),m=_n(u,l.filter(x=>j(x)==="binary"&&Gd.has(d(x)))),g=_n(p,l.filter(x=>j(x)==="binary"&&d(x)==="door")),_=_n(h,l.filter(x=>j(x)==="cover"&&Kd.has(d(x)??""))),y=_n(h,l.filter(x=>j(x)==="binary"&&d(x)==="garage_door"));for(let x of s){let M=x.type==="window"?f:x.type==="garage"?_:null,b=x.type==="window"?m:x.type==="garage"?y:g;t.set(x.id,r(x,M==null?void 0:M.get(x.id),b.get(x.id)))}}for(let a of i.openings)t.has(a.id)||t.set(a.id,r(a))}return t}var Yd=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Qd(o){if(!o||Y(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=Yd.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var Jd=.5;function We(o,e,t="window"){var g;let n=_=>{var y;return!!_&&((y=o.states[_])==null?void 0:y.state)==="on"},r=_=>!!_&&!!o.states[_]&&!Y(o.states[_]),i=_=>_?Qd(o.states[_]):null,a=_=>{let y=i(_);return e.contactInvert&&_&&_!==e.tilt&&_!==e.tilt2&&y!=="tilted"&&y?y==="open"?"closed":"open":y},s=n(e.tilt2)||a(e.tilt2)==="tilted"||a(e.contact2)==="tilted",l=a(e.contact2)==="open"&&!s?1:0,d=n(e.tilt)||a(e.tilt)==="tilted"||a(e.contact)==="tilted",c=d?1:0,u=e.tiltAngle?Number((g=o.states[e.tiltAngle])==null?void 0:g.state):NaN;if(Number.isFinite(u)){let _=(u-(e.tiltOffset??0))*(e.tiltInvert?-1:1);c=Math.min(1,Math.max(0,_/(e.tiltMax||15))),c<.08&&(c=0),d=c>0}let p=a(e.contact)==="open"&&!d?1:0,h=null,f=e.cover?o.states[e.cover]:void 0,m=gs(o,e.position);if(m!==null)h=e.positionInverted?m:1-m;else if(f&&!Y(f)){let _=f.attributes.current_position;typeof _=="number"?h=1-Math.min(100,Math.max(0,_))/100:h=f.state==="closed"?1:f.state==="opening"||f.state==="closing"?.5:0,e.coverInvert&&(h=1-h)}else e.cover&&(h=0);if(t==="door"){let _=a(e.contact);return h!==null&&f&&Ms.has(String(f.attributes.device_class??""))?{open:_===null?1-h:_==="closed"?0:1,open2:a(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0}:{open:_===null?e.shut?0:Jd:_==="closed"?0:1,open2:a(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:h,sensed:_!==null||h!==null}}if(t==="garage"){let _=a(e.contact),y=h!==null||_!==null;return h===null&&(h=_===null||_==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:h,sensed:y}}return{open:p,open2:l,tilt:c,tilt2:s?1:0,cover:h,sensed:r(e.contact)||r(e.tilt)||Number.isFinite(u)}}function gs(o,e){let t=e?o.states[e]:void 0;if(!t||Y(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function vr(o,e){var a,s;let t=new Map,n=[];for(let l of e){let d=j(l)==="camera"?`camera:${l}`:((s=(a=o.entities)==null?void 0:a[l])==null?void 0:s.device_id)??`entity:${l}`,c=t.get(d);c||(t.set(d,c=[]),n.push(d)),c.push(l)}let r=n.map(l=>{let d=t.get(l),c=d.find(u=>{var p,h;return!((h=(p=o.entities)==null?void 0:p[u])!=null&&h.name)})??d[0];return{primary:c,others:d.filter(u=>u!==c)}}),i=new Map(e.map((l,d)=>[l,d]));return r.sort((l,d)=>i.get(l.primary)-i.get(d.primary))}function ro(o,e){return vr(o,e).map(t=>t.primary)}var rs={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},bs=new Set(["tv_board","tv_wall"]);function _s(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let r=String(n).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===i||i.length>=3&&r.includes(i)}function vs(o){return bs.has(o)||!!Sa(o)}function io(o){return vs(o)||o==="desk"||o==="fridge_smart"}function qt(o,e){var i;let t=new Set,n=bt(o,e),r=e.some(a=>a.openings.some(s=>s.confirm))?Nt(o,e):null;for(let a of e){for(let s of a.placements)s.confirm&&t.add(s.entity_id);for(let s of a.openings){let l=s.confirm?r==null?void 0:r.get(s.id):null;l!=null&&l.cover&&l.cover!=="none"?t.add(l.cover):s.type==="garage"&&(l!=null&&l.contact)&&j(l.contact)==="switch"&&t.add(l.contact)}for(let s of a.furniture){if(s.confirm&&s.type==="wall_switch")for(let d of Dt(s))d&&t.add(d);if(s.confirm&&s.type==="wall_socket")for(let d of Ot(s))d.entity&&t.add(d.entity);let l=s.confirm?(i=n.get(s.id))==null?void 0:i.entity:null;l&&l!=="none"&&t.add(l)}}return t}function ys(o,e){let t=new Set;if(!e.some(n=>n.openings.some(r=>r.cover_invert)))return t;for(let n of Nt(o,e).values())n.coverInvert&&n.cover&&t.add(n.cover);return t}function ws(o,e){let t=new Map;for(let n of e)for(let r of n.furniture){if(r.type!=="awning"&&!Xn(r.type))continue;let i=r.entity&&r.entity!=="none"?r.entity:null,a=i?o.states[i]:void 0,s=r.awning_time??20;if(!a||Y(a)){t.set(r.id,{out:0,moving:0,time:s});continue}let l=p=>r.awning_invert?1-p:p,d=gs(o,r.awning_position&&r.awning_position!=="none"?r.awning_position:null),c=a.attributes.current_position,u=a.state==="opening"?r.awning_invert?-1:1:a.state==="closing"?r.awning_invert?1:-1:0;d!==null?t.set(r.id,{out:l(d),moving:0,time:s}):typeof c=="number"&&Number.isFinite(c)?t.set(r.id,{out:l(Math.min(1,Math.max(0,c/100))),moving:0,time:s}):u?t.set(r.id,{out:null,moving:u,time:s}):t.set(r.id,{out:l(a.state==="open"||a.state==="on"?1:0),moving:0,time:s})}return t}function yr(o,e){let t=r=>{var a;if(!r||r==="none")return!1;let i=(a=o.states[r])==null?void 0:a.state;return i==="on"||i==="open"},n=new Map;for(let r of e)for(let i of r.furniture)i.type==="fridge_smart"&&n.set(i.id,{left:t(i.door_left),right:t(i.door_right)});return n}var is={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function wr(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function Xd(o,e){var n,r;if(wr(o,e))return e;let t=(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id;return t?gr(o,t).find(i=>i!==e)??null:null}function bt(o,e){let t=new Map;for(let n of e){let r=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let a=i.type in is,s=a?is[i.type]:rs[i.type]??(Ct(i.type)?rs.robot_vacuum:void 0);if(!s&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&B([i.x,i.z],h.points)),d=l?ro(o,ge(o,l.area_id)):[],c=h=>`${h} ${J(o,h)}`,u=i.entity==="none"?null:i.entity??null;if(i.entity==null){let h=d.filter(f=>!r.has(f));if(a){let f=h.filter(m=>j(m)==="light");u=f.find(m=>s.test(c(m)))??f[0]??null}else if(Ct(i.type)){let f=(l==null?void 0:l.area_id)??null;u=Object.keys(o.entities??{}).find(m=>m.startsWith("vacuum.")&&!r.has(m)&&yn(o,m)===f)??null}else if(i.type==="radiator"||i.type==="ac_unit"){let f=h.filter(m=>j(m)==="climate");u=f.find(m=>s.test(c(m)))??f[0]??null}else if(vs(i.type)){let f=h.filter(m=>j(m)==="media");u=f.find(m=>{var g;return((g=o.states[m])==null?void 0:g.attributes.device_class)==="tv"})??f.find(m=>s==null?void 0:s.test(c(m)))??(bs.has(i.type)?f[0]??null:null)}else s&&(u=h.find(f=>["switch","media","fan"].includes(j(f)??"")&&s.test(c(f)))??null);u&&r.add(u)}let p=i.power==="none"?null:i.power??null;i.power==null&&(p=u?Xd(o,u):null,!p&&s&&l&&!a&&(p=ge(o,l.area_id).find(f=>wr(o,f)&&!r.has(f)&&s.test(c(f)))??null),p&&r.add(p)),(u||p)&&t.set(i.id,{entity:u,power:p})}}return t}function xr(o){if(!o||o.state==="off"||o.state==="standby"||Y(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function xs(o,e,t,n=[]){let r=(u,p)=>B([u,p],t.points),i=bt(o,[e]),a=Nt(o,[e]),s=[...e.placements.filter(u=>r(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>r(u.x,u.z)).flatMap(u=>{var p,h;return[(p=i.get(u.id))==null?void 0:p.entity,(h=i.get(u.id))==null?void 0:h.power]}),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let p=a.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...t.panel??[]].filter(u=>!!u&&!!o.states[u]),l=new Set(t.hidden??[]),d=[...new Set(s)].filter(u=>!l.has(u)),c=new Set(d);return{shown:d,more:ge(o,t.area_id).filter(u=>!c.has(u)&&!l.has(u))}}var as=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Zd={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function ao(o,e){var u,p;let t=e.car??{},n=h=>h&&h!=="none"?h:null,r=n(t.device)??n(e.entity),i=r?(p=(u=o.entities)==null?void 0:u[r])==null?void 0:p.device_id:null,a=i&&o.entities?Object.values(o.entities).filter(h=>h.device_id===i).map(h=>h.entity_id):[],s=h=>{var f,m,g;return`${h} ${((f=o.states[h])==null?void 0:f.attributes.friendly_name)??""} ${((g=(m=o.entities)==null?void 0:m[h])==null?void 0:g.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(h,f,m)=>a.find(g=>f.includes(g.split(".")[0])&&Zd[h].test(s(g))&&(!m||m(g)))??null,d=h=>{var f;return String(((f=o.states[h])==null?void 0:f.attributes.unit_of_measurement)??"")},c=h=>{var f;return String(((f=o.states[h])==null?void 0:f.attributes.device_class)??"")};return{soc:n(t.soc)??a.find(h=>h.startsWith("sensor.")&&c(h)==="battery")??l("soc",["sensor"],h=>d(h)==="%"),range:n(t.range)??l("range",["sensor"],h=>/km|mi/.test(d(h)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],h=>/^k?W$/.test(d(h)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??a.find(h=>h.startsWith("binary_sensor.")&&c(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??a.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??a.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??a.find(h=>h.startsWith("device_tracker."))??null}}function eu(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function wn(o,e){var g;let t=ao(o,e),n=_=>_?o.states[_]:void 0,r=_=>{var x;let y=Number((x=n(_))==null?void 0:x.state);return _&&Number.isFinite(y)?y:null},i=r(t.soc),a=r(t.range),s=n(t.charging),l=String((s==null?void 0:s.attributes.unit_of_measurement)??""),d=s&&/^k?W$/.test(l)?(r(t.charging)??0)*(l==="kW"?1e3:1):null,c=d!==null?d>50:!!s&&["on","charging","laden"].includes(s.state.toLowerCase()),u=n(t.plugged),p=n(t.lock),h=n(t.climate),f=n(t.tracker),m=(f==null?void 0:f.state.toLowerCase())??"";return{entities:t,soc:i!==null?Math.max(0,Math.min(100,i)):null,range:a,rangeUnit:String(((g=n(t.range))==null?void 0:g.attributes.unit_of_measurement)??"km"),chargingW:d,charging:c,plugged:u?u.state==="on":null,locked:p?eu(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:f&&m!=="home"&&!Y(f)?m==="not_home"?"":f.state:null}}function ks(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(ao(o,n)))).filter(t=>!!t)}function xn(o,e,t){var r,i;if(t==="none")return null;if(t)return t;let n=e?(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id:null;if(!n||!o.entities)return null;for(let a of Object.values(o.entities))if(!(a.device_id!==n||!a.entity_id.startsWith("sensor."))&&(as.test(a.translation_key??"")||as.test(a.entity_id.split(".")[1])))return a.entity_id;return null}function ss(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function $s(o,e,t,n){var i,a;let r=t?(i=o.states[t])==null?void 0:i.attributes:void 0;for(let s of[n?(a=o.states[n])==null?void 0:a.state:void 0,r==null?void 0:r.current_room,r==null?void 0:r.room,r==null?void 0:r.current_segment]){let l=kr(o,e,s);if(l)return l}return null}function kr(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=ss(t);if(!n)return null;let r=i=>{var a,s;return[i.name,i.area_id??"",i.area_id&&((s=(a=o.areas)==null?void 0:a[i.area_id])==null?void 0:s.name)||""].map(ss).filter(Boolean)};return e.find(i=>r(i).includes(n))??e.find(i=>r(i).some(a=>a.length>=3&&(a.includes(n)||n.includes(a))))??null}var Ms=new Set(["garage","gate","door"]);function $r(o,e){let t=new Set,n=new Set,r=i=>{if(!i||i==="none"||!o.states[i])return;let a=j(i);a==="light"?t.add(i):a==="cover"&&!Ms.has(String(o.states[i].attributes.device_class??""))&&n.add(i)};for(let i of e.rooms){let a=new Set(i.hidden??[]);for(let s of ro(o,ge(o,i.area_id)))a.has(s)||r(s)}for(let i of e.placements)r(i.entity_id);for(let i of e.furniture)r(i.entity);return{lights:[...t],covers:[...n]}}function Ss(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Es(o,e,t){var r;let n=((r=t.target)==null?void 0:r.trim())??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[i,a]=n.split(".",2);o.callService(i,a,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var tu={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de CasaNeon ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de CasaNeon.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace.",as_furniture_pick:"Elegir mueble \u2026",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de CasaNeon.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_copy:"Copiar",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon \u2013 actualiza CasaNeon (HACS) y recarga la p\xE1gina.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para CasaNeon. Importa aqu\xED tus propios packs (.fp3dpack).",ext_pro:"Extensiones Pro",ext_active:"activa",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: CasaNeon encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia ahora",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas y prop\xF3n ideas como issue en GitHub: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant.",show_menu:"Mostrar",tool_menu:"Herramienta",floor_label:"Planta:",floor_settings:"Ajustes de la planta",floor_settings_of:"Planta {floor}",floor_none_hint:"A\xF1ade tu primera planta arriba con \xABPlanta\xBB \u2192 \xABA\xF1adir planta\xBB.",tool_group_build:"Construir",tool_group_outside:"Exterior",tool_room:"Habitaci\xF3n",view_menu:"Vista",fit_hint:"Mostrar todo el plano de la planta (con el jard\xEDn al dibujar el exterior)",tech_open:"Dibujar la sala t\xE9cnica",tech_open_hint:"Despu\xE9s toca en el plano la pared donde est\xE1 tu instalaci\xF3n.",tech_step:"Paso {n}",tech_step_feed:"Toca \xAB{name}\xBB a la izquierda y luego el punto de la pared por donde entra la tuber\xEDa (abajo del todo: desde el suelo).",tech_step_devices:"Toca la bomba y el filtro de arena a la izquierda: se colocan junto a la pared. La bomba de calor y la dosificaci\xF3n si las tienes.",tech_step_line:"Traza una l\xEDnea: de \xAB{a}\xBB a \xAB{b}\xBB. Pulsa en uno y arrastra hasta el otro.",tech_step_loose:"Un tubo acaba suelto: prol\xF3ngalo hasta un equipo o una tuber\xEDa, o b\xF3rralo (\u270B Seleccionar).",tech_step_drawing:"Sigue arrastrando o toca punto a punto: la l\xEDnea termina en un equipo, una tuber\xEDa o un tubo.",tech_step_fit:"Toca el tubo donde va la v\xE1lvula (el visor): se ilumina en naranja.",tech_mode:"Sala t\xE9cnica",tech_mode_hint:"Dibuja la sala t\xE9cnica en esta pared: entra las tuber\xEDas de la piscina, coloca los equipos, traza los tubos",tech_draw:"Dibujar",tech_pick:"Seleccionar",pool_delete_confirm:"\xBFEliminar la piscina con sus {n} tubos?",tech_erase:"Borrar",tech_erase_hint:"Toca un tubo, una v\xE1lvula de bola, una mirilla o un agujero y se elimina. \xBFLo dibujaste mal? Deshacer tambi\xE9n ayuda.",tech_feeds:"Tuber\xEDas de la piscina",tech_devices:"Equipos",tech_fittings:"Valvuler\xEDa",tech_hint:"Trazar una l\xEDnea: toca un equipo, una tuber\xEDa o un tubo y arrastra hasta el siguiente (o punto a punto). Sobre un tubo crea una T. CasaNeon sabe solo hacia d\xF3nde va el agua y qu\xE9 conexi\xF3n del equipo usar.",tech_no_ports:"Coloca primero el skimmer, el sumidero y las boquillas con la herramienta Piscina.",tech_ok:"Todo conectado: el agua circula.",tech_issue_loose:"{n} extremos sueltos",tech_issue_port:"{name} sin conectar",tech_issue_feed:"{name} a\xFAn no entrado",tech_feed_place:"Toca donde la tuber\xEDa entra en la sala: abajo del todo, desde el suelo; m\xE1s arriba, por la pared.",tech_start:"Toca un equipo o una tuber\xEDa y traza una l\xEDnea.",feed_skimmer:"Skimmer",feed_drain:"Sumidero",feed_inlet:"Boquillas",feed_waste:"Desag\xFCe (lavado)",hp_ports:"Conexiones",hp_side_right:"derecha",hp_side_left:"izquierda",hp_side_back:"detr\xE1s",pool_depth:"Profundidad del vaso (m)",pool_rim:"Borde sobre el c\xE9sped (m)",pool_depth_hint:"Profundidad: del borde al fondo. Una piscina de 1,50 m que sobresale 20 cm: profundidad 1,50, borde 0,20. El agua queda 15 cm bajo el borde.",pool_depth_ground:"La profundidad se ve en 3D en cuanto la piscina est\xE1 en un c\xE9sped, una terraza u otra zona; sin suelo alrededor, el vaso se ver\xEDa desde fuera.",pool_port_depth:"Prof.",pool_port_depth_hint:"Profundidad bajo la l\xEDnea de agua (m): boquillas normalmente 0,30, el skimmer en la l\xEDnea de agua",pool_valves:"V\xE1lvulas",pool_valve_shut:"cerrada",pool_valve_toggle:"Toca para cambiar: tal como est\xE1 la v\xE1lvula de verdad",pool_joint:"Uni\xF3n",block_some_fixed:"\u{1F512} Una pieza est\xE1 fijada: el bloque solo se mueve cuando todas est\xE9n liberadas.",unfix_all:"Liberar todo",wv_block_all:"Bloque entero",wv_block_one:"Solo esta pieza",wv_gap:"Hueco: {w} \u2013 esto cabe:",wv_gap_hint:"Toca un lugar libre de la pared: aqu\xED aparece lo que cabe.",wv_kit_title:"A la pared",wv_recent:"Usados recientemente",wv_none_fits:"Nada cabe en este hueco.",wv_cat_base:"Muebles bajos y aparadores",wv_cat_hang:"Colgados",wv_cat_tall:"Armarios altos",wv_cat_living:"Sentarse y dormir",wv_cat_light:"Luces",wv_cat_pack:"De tus packs",wv_cat_energy:"Energ\xEDa",block_title:"Bloque de muebles",multi_title:"{n} muebles seleccionados",block_hint:"Un clic selecciona todo el bloque, arrastrar lo mueve. Una sola pieza: t\xF3cala dos veces o elige su nombre abajo.",multi_hint:"May\xFAs + clic a\xF1ade o quita muebles, May\xFAs + arrastrar en una zona vac\xEDa dibuja un marco. Mu\xE9velos, g\xEDralos o c\xF3pialos juntos, o \xFAnelos en un bloque.",block_part_edit:"Editar solo esta pieza",block_break:"Deshacer bloque",block_make:"Unir en un bloque",multi_mode:"Seleccionar varios (tocar a\xF1ade, arrastrar dibuja un marco)",block_part:"Parte de un bloque.",block_select:"Seleccionar todo el bloque",block_delete:"\xBFEliminar {n} muebles?",block_delete_fixed:"\xBFEliminar {n} muebles? Algunos est\xE1n fijados.",wall_zoom_hint:"Zoom: rueda del rat\xF3n o dos dedos",wall_zoom_all:"Pared entera",card_pets:"Mostrar las mascotas",card_ghost:"Mostrar el fantasma de Halloween",card_ghost_hint:"Pack divertido Halloween: el fantasma flota tambi\xE9n por la casa de esta tarjeta (p. ej. desact\xEDvalo en la tableta de pared)",card_pets_hint:"Pack divertido Mascotas: mostrar los animales configurados en esta tarjeta (p. ej. desact\xEDvalos en la tableta de pared)",fun_title:"Packs divertidos",fun_intro:"Extras solo por diversi\xF3n; act\xEDvalos y desact\xEDvalos aqu\xED.",fun_name_pets:"Mascotas",fun_feature_pets:"Un gato, un perro o un conejo vive en tu casa 3D: recorre las habitaciones, se tumba en el sof\xE1, la cama o la alfombra y duerme por la noche.",fun_name_halloween:"Halloween",fun_feature_halloween:"Un fantasma que de vez en cuando flota por la casa.",halloween_ghost:"Dejar flotar al fantasma",pets_show:"Mostrar las mascotas",pet_add:"A\xF1adir una mascota",pet_name:"Nombre",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Gato",pet_kind_dog:"\u{1F436} Perro",pet_kind_rabbit:"\u{1F430} Conejo",pet_fur:"Pelaje",pet_fur_orange:"Pelirrojo",pet_fur_tabby:"Atigrado",pet_fur_black:"Negro",pet_fur_white:"Blanco",pet_fur_grey:"Gris",pet_fur_brown:"Marr\xF3n",pet_fur_calico:"Tricolor",pet_fur_golden:"Dorado",pet_fur_cream:"Crema",pet_breed:"Raza",pet_breed_dachshund:"Teckel",pet_breed_pug:"Carlino",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Pastor",pet_floor:"Planta",pet_floor_auto:"Planta baja",tt_ev_camera:"La c\xE1mara detecta movimiento: {name}",terrain:"Terreno",terrain_hint:"D\xF3nde est\xE1 el terreno alrededor de la casa. Lo que queda por debajo (un s\xF3tano, la parte baja de un semis\xF3tano) est\xE1 bajo tierra en 3D; c\xE9spedes, caminos y terrazas est\xE1n sobre el terreno.",terrain_level:"Altura del terreno (m, planta baja = 0)",terrain_earth:"Mostrar los s\xF3tanos bajo tierra",terrain_earth_hint:"Las plantas por debajo del terreno est\xE1n bajo tierra; abre una y la ver\xE1s como en una excavaci\xF3n. Desactivado: quedan sueltas como antes.",terrain_cellar_hint:"Semis\xF3tano: baja la altura del terreno tanto como deba asomar el s\xF3tano, p. ej. \u22121,2 m. Las ventanas de s\xF3tano bajo el terreno reciben un patio ingl\xE9s.",terrain_no_cellar_hint:"Un s\xF3tano es una planta con elevaci\xF3n negativa, p. ej. \u22122,6 m.",terrain_reset:"Restablecer el terreno",cellar_window:"Ventana de s\xF3tano",well:"Patio ingl\xE9s",well_hint:"Esta ventana est\xE1 bajo el nivel del terreno: en 3D recibe un patio ingl\xE9s con rejilla. Desm\xE1rcalo para no tener ninguno, p. ej. si por fuera pasa un camino.",well_rim:"Borde sobre el terreno (m)",cellar_window_hint:"Peque\xF1a y arriba en la pared: 100 \xD7 50 cm, 25 cm bajo el techo. Bajo el terreno recibe en 3D un patio ingl\xE9s con rejilla.",side_fold_hint:"Estrechar la barra lateral: m\xE1s espacio para el plano",furn_ac_unit:"Aire acondicionado (de pared)",furn_awning:"Toldo",furn_group_outdoor:"Terraza y balc\xF3n",bin_from:"Brillar desde (hora, el d\xEDa antes)",bin_until:"hasta (hora, d\xEDa de recogida)",bin_none:"Sin recogida a la vista",hh_title:"Hoy en casa",hh_left:"quedan {t}",hh_done:"\xA1Listo!",hh_finished:"{name} ha terminado",hh_thirsty:"Sed",hh_plant:"{name} necesita agua",hh_service:"{name}: mantenimiento pendiente",hh_fridge_open:"{name} est\xE1 abierto",alert_fridge_door:"Nevera abierta: {name}",alert_short_fridge_door:"Nevera abierta",hh_moisture:"Planta (plant.*) o sensor de humedad",hh_moisture_min:"Sed por debajo de (%)",hh_remaining:"Tiempo restante (sensor)",hh_door:"Sensor de puerta",hh_fridge_door:"Sensor de puerta",hh_appliance_hint:"Mientras funciona, su marcador muestra el tiempo restante; despu\xE9s \xAB\xA1Listo!\xBB hasta que se abre la puerta o vuelve a funcionar.",hh_door_alarm:"Avisar tras (minutos abierto)",hh_service_entity:"Consumible / mantenimiento (sensor)",hh_service_min:"Pendiente desde (\u2264 % o d\xEDas)",hh_service_hint:"P. ej. filtro, sal o abrillantador: un sensor binario (activo = pendiente), un n\xFAmero (% o d\xEDas restantes) o una fecha. Si toca, el aparato brilla en amarillo y aparece en \xABHoy en casa\xBB.",hh_teaser_plant:"Con Hogar Pro la planta muestra cu\xE1ndo necesita agua.",hh_teaser_appliance:"Con Hogar Pro el aparato muestra su tiempo restante y \xAB\xA1Listo!\xBB hasta que se abre la puerta.",hh_teaser_fridge:"Con Hogar Pro CasaNeon avisa cuando la puerta de la nevera est\xE1 abierta demasiado tiempo.",card_household:"Hoy en casa",card_household_hint:"Hogar Pro: tarjeta con contenedores, correo, aparatos terminados, plantas sedientas y mantenimiento",furn_waste_bin:"Contenedor de basura",furn_mailbox:"Buz\xF3n",furn_wall_switch:"Interruptor de pared",furn_water_heater:"Termo el\xE9ctrico",stair_open:"Abierta por debajo (losa inclinada)",stair_open_hint:"Los pelda\xF1os van sobre una losa que sigue la pendiente: el hueco de debajo queda libre, con techo inclinado, y cabe otro tramo o un mueble debajo.",furn_access_point:"Punto de acceso Wi-Fi",ap_entity:"Punto de acceso",ap_mount:"Montaje",ap_ceiling:"Techo",ap_wall:"Pared",ap_hint:"Elige el punto de acceso por su nombre; su estado, clientes, LED, CPU, memoria y bot\xF3n de reinicio se buscan en el mismo dispositivo (UniFi Network).",ap_gestures:"En 3D: tocar enciende o apaga su LED; mantener pulsado lo reinicia (pregunta antes). El anillo brilla azul conectado con el LED encendido, rojo si est\xE1 desconectado y \xE1mbar mientras se actualiza.",ap_role_state:"estado",ap_role_clients:"clientes",ap_role_led:"LED",ap_role_cpu:"CPU",ap_role_memory:"memoria",ap_role_restart:"reinicio",ap_client:"{n} cliente",ap_clients:"{n} clientes",ap_down:"Desconectado",ap_busy:"Actualizando",ap_up:"Conectado",ap_restart_confirm:"\xBFReiniciar {name}? Sus clientes perder\xE1n el Wi-Fi un par de minutos.",heater_entity:"Calentador (water_heater)",heater_capacity:"Capacidad",heater_found:"Encontrado en el mismo dispositivo:",heater_hint:"Elige su entidad water_heater; lo dem\xE1s (si calienta, duchas, tiempo restante, encendido, eco) se busca solo en el mismo dispositivo.",heater_role_heating:"calentando",heater_role_showers:"duchas",heater_role_remaining:"tiempo restante",heater_role_power:"encendido",heater_role_eco:"eco",heater_gestures:"En 3D: tocar lo enciende o apaga; mantener pulsado abre su ficha para regular la temperatura y el modo.",heater_gestures_no_power:"En 3D: tocar o mantener pulsado abre su ficha para regular la temperatura y el modo (no se encontr\xF3 un interruptor de encendido).",heater_shower:"{n} ducha",heater_showers:"{n} duchas",heater_left:"{min} min para agua caliente",furn_lamp_ceiling_fan:"Ventilador de techo con luz",furn_fan_entity:"Entidad del ventilador",ceiling_fan_hint:"La luz es la entidad del elemento de arriba: el motor y la pantalla la encienden. Las aspas conmutan el ventilador por separado y giran mientras funciona, m\xE1s r\xE1pido cuanto mayor es su velocidad.",furn_wall_socket:"Enchufe de pared",furn_group_electric:"Electricidad",socket_count:"Enchufes",socket_n:"Enchufe {n}",socket_switch:"Encender y apagar con (opcional)",socket_power:"Medidor de consumo (W, opcional)",socket_hint:"Un enchufe con interruptor (enchufe inteligente) se enciende y apaga al tocarlo en 3D y su peque\xF1o LED muestra que est\xE1 encendido. Con medidor de consumo cuenta en el balance de energ\xEDa y su pin muestra los vatios de todos sus enchufes. Para ponerlo sobre una encimera, sube su \xABAltura sobre el suelo\xBB.",switch_keys:"Teclas",switch_key:"Entidad de la tecla",switch_key_n:"Tecla {n}",switch_ring:"Anillo de luz (color de)",switch_ring_hint:"Para interruptores con luz alrededor (p. ej. Sonoff TX Ultimate): elige la luz que da su color y brillo; el anillo brilla en la pared alrededor de la placa mientras esa luz est\xE1 encendida.",switch_hint:"Cada tecla conmuta su entidad al tocarla en 3D (una persiana se abre o se cierra) y su LED se enciende mientras est\xE1 encendida o abierta.",furn_group_household:"Hogar",bin_shape:"Forma",bin_shape_bin120:"Contenedor con ruedas 120 l",bin_shape_bin240:"Contenedor con ruedas 240 l",bin_shape_bin1100:"Contenedor 1100 l",bin_shape_multi:"Contenedor con varios compartimentos",bin_shape_bag:"Bolsa",bin_shape_caddy:"Cubo",bin_shape_underground:"Contenedor soterrado",bin_kind:"Residuo",bin_kind_rest:"Resto",bin_kind_bio:"Org\xE1nico",bin_kind_paper:"Papel",bin_kind_plastic:"Envases",bin_kind_glass:"Vidrio",bin_kind_garden:"Restos de poda",bin_kind_recycling:"Reciclaje",bin_kind_other:"Otro",bin_color:"Color",bin_lid:"Tapa",bin_source:"Calendario de recogida o sensor",bin_match:"Palabra del calendario (vac\xEDo: seg\xFAn el residuo)",bin_hint:"El contenedor brilla desde la hora elegida del d\xEDa anterior hasta la hora del d\xEDa de recogida (para todos); su marcador indica \xABHoy\xBB o \xABMa\xF1ana\xBB, al tocarlo muestra las pr\xF3ximas recogidas. En un calendario (p. ej. Waste Collection Schedule) se buscan las palabras de su residuo; un sensor puede dar los d\xEDas o la fecha.",bin_today:"Hoy",bin_tomorrow:"Ma\xF1ana",bin_in_days:"en {n} d\xEDas",mailbox_shape:"Forma",mailbox_shape_wall:"Buz\xF3n de pared",mailbox_shape_pole:"Buz\xF3n en poste (con bandera)",mailbox_shape_pillar:"Buz\xF3n de pie con portaperi\xF3dicos",mailbox_shape_parcel:"Buz\xF3n de paquetes",mailbox_shape_bank:"Buzones agrupados",mailbox_entity:"Sensor de correo (trampilla o indicador)",mailbox_door:"Sensor de la puerta de recogida (opcional)",mailbox_hint:"Con un indicador (p. ej. un input_boolean \xABcorreo\xBB que activa una automatizaci\xF3n) el buz\xF3n brilla mientras est\xE1 activo. Con trampilla y puerta de recogida brilla cuando ha llegado correo despu\xE9s del \xFAltimo vaciado.",mailbox_post:"Correo",pro_name_household:"Hogar Pro",pro_feature_household:"Hogar Pro: contenedores que brillan la v\xEDspera de la recogida, buz\xF3n con correo, plantas con sed; lavadora, secadora y lavavajillas muestran el tiempo restante y \xAB\xA1Listo!\xBB; filtros y consumibles pendientes en amarillo; aviso de nevera abierta; tarjeta \xABHoy en casa\xBB; adem\xE1s la nevera inteligente (americana, puertas con sensores)",household_teaser_bin:"Con Hogar Pro el contenedor brilla la v\xEDspera de la recogida, seg\xFAn tu calendario.",household_teaser_mail:"Con Hogar Pro el buz\xF3n brilla en cuanto hay correo, hasta que se vac\xEDa.",awning_cover:"Toldo (cover)",motor_cover:"Motor (cover)",curtain_side:"Se abre hacia",curtain_side_both:"ambos lados",curtain_side_left:"izquierda (vista de frente)",curtain_side_right:"derecha (vista de frente)",motor_time:"Tiempo de recorrido (s)",motor_invert_hint:"Para covers que indican 100 % con la cortina cerrada o la pantalla abajo.",awning_pitch:"Inclinaci\xF3n (\xB0)",awning_time:"Tiempo de salida completa (s)",awning_position:"Sensor de posici\xF3n (opcional)",awning_valance:"Fald\xF3n (borde de lona delantero)",awning_invert:"Invertir el sentido",awning_invert_hint:"Para covers que informan 100 % cuando el toldo est\xE1 recogido.",awning_kind:"Tipo",awning_kind_arm:"Toldo de brazos articulados (terraza)",awning_kind_drop:"Toldo de brazo invisible / punto recto (balc\xF3n, ventana)",awning_kind_vertical:"Toldo vertical / ZIP (ventana, balc\xF3n)",awning_kind_pergola:"Toldo de p\xE9rgola / galer\xEDa acristalada",awning_kind_side:"Toldo lateral (privacidad)",awning_kind_arm_hint:"El cl\xE1sico sobre la terraza: los brazos articulados empujan la lona hacia fuera con una ligera pendiente. Fondo = salida.",awning_kind_drop_hint:"Los brazos giran desde la pared hacia delante y hacia abajo, la lona se tensa inclinada delante. Fondo = longitud de los brazos, Inclinaci\xF3n = cu\xE1nto bajan los brazos por debajo de la horizontal.",awning_kind_vertical_hint:"La lona baja en vertical por gu\xEDas laterales hasta el suelo \u2013 delante de una ventana, la barandilla de un balc\xF3n o el frente de una p\xE9rgola. Altura sobre el suelo = borde inferior del cofre.",awning_kind_pergola_hint:"Un marco fijo con postes delante; la lona se extiende por encima de sus gu\xEDas. Fondo = hasta los postes, Inclinaci\xF3n = pendiente del techo.",awning_kind_side_hint:"Un poste con la lona enrollada a la izquierda, la lona se extiende en horizontal hacia la derecha hasta el poste opuesto. Ancho = extensi\xF3n, Altura sobre el suelo = altura de la lona.",awning_hint:"Ancho = el toldo a lo largo de la pared, fondo = su salida totalmente extendido; la parte trasera del marco va contra la fachada, la altura sobre el suelo es la parte inferior del cofre. Si el cover informa su posici\xF3n mientras se mueve, el toldo sale despacio en 3D; si solo dice abriendo/cerrando, se mueve seg\xFAn el tiempo de salida.",furn_only_color:"Brillar solo en un color",furn_only_color_pick:"Color",furn_only_color_hint:"La l\xE1mpara solo brilla mientras la luz muestra aproximadamente este color, p. ej. amarillo para \xABagua\xBB en el lavabo. Los dem\xE1s colores de la misma luz quedan oscuros aqu\xED.",furn_run_w:"En marcha desde (vatios)",furn_run_w_hint:"A partir de cu\xE1ntos vatios en el sensor de potencia el aparato cuenta como en marcha y brilla (vac\xEDo: 10 W). Para aparatos tras un enchufe inteligente que consumen unos vatios en espera, p. ej. 100.",roof_window_float:"Mostrar sobre la habitaci\xF3n sin el tejado",roof_window_float_hint:"Cuando el tejado se desvanece al acercarte a una planta o una habitaci\xF3n, la ventana se queda en su sitio sobre la habitaci\xF3n: abierta, abatida, con su persiana. Funciona sobre las habitaciones de la planta en la que se apoya el tejado; donde la pendiente baja sobre una planta inferior, las ventanas se quedan en el tejado. Desactivado: solo se ve en el tejado.",tech_ask:"Tubo colocado: \xBFsigue hasta la piscina? Entonces aqu\xED va un pasamuros con su salida al exterior:",tech_ask_loose:"Dejarlo abierto",tech_step_tee:"Toca el tubo donde va la derivaci\xF3n: se corta ah\xED y desde la T trazas la siguiente l\xEDnea.",side_resize:"Arrastra para ensanchar o estrechar la barra lateral",furn_extra:"Valor extra junto al s\xEDmbolo (sensor, p. ej. temperatura del agua)",settings_house:"Casa",settings_weather:"Tiempo y avisos",roof_basics:"Forma del tejado",through_full:"Pantalla completa",through_full_hint:"La imagen de la c\xE1mara en toda la pantalla (Esc o Atr\xE1s para salir). Donde el navegador no puede, se abre la vista de c\xE1mara de Home Assistant, tambi\xE9n con sonido.",director:"Director en directo",director_hint:"Una pantalla muestra sola lo que pasa en casa: suena el timbre y la vista vuela a la puerta y mira por su c\xE1mara. Cada evento est\xE1 apagado hasta que lo actives.",director_here:"Activar en este dispositivo",director_here_hint:"Solo para este navegador, p. ej. la tablet de la pared. En una tarjeta del dashboard el director se activa en los ajustes de la tarjeta.",director_doorbell:"Suena el timbre: volar a la puerta y mirar por la c\xE1mara",director_doorbell_entity:"Timbre",director_doorbell_camera:"C\xE1mara de la puerta",director_no_doorbell:"No se encontr\xF3 ning\xFAn timbre. Elige la entidad event o binary_sensor de tu timbre.",director_motion:"Una c\xE1mara ve a alguien",director_appliances:"Lavadora, secadora o lavavajillas terminados",director_alerts:"Aviso nuevo (humo, agua, alarma, ventana abierta con lluvia \u2026)",director_hold:"Volver tras (segundos)",director_back_hint:"Despu\xE9s la vista vuelve a donde estaba, salvo que alguien haya tocado la pantalla mientras tanto. A quien est\xE9 usando la tablet solo le interrumpen el timbre y los avisos. Con el timbre se queda el doble de tiempo.",voice:"Control por voz",voice_hint:"Un bot\xF3n de micr\xF3fono abajo a la izquierda en la vista 3D: t\xF3calo y habla. \xABMuestra el sal\xF3n\xBB, \xABplanta de arriba\xBB o \xABtoda la casa\xBB muestran el sitio; lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist de Home Assistant.",voice_here:"Activar en este dispositivo",aliases:"Otros nombres para la voz",aliases_hint:"Otros nombres separados por comas, para pedir la \xABSmart TV Pro\xBB como \xABtele del sal\xF3n\xBB o \xABtele\xBB. Los usan el control por voz y la b\xFAsqueda.",aliases_placeholder:"p. ej. tele del sal\xF3n, tele",voice_understands:"Qu\xE9 entiende CasaNeon",voice_examples:"\xABMuestra el sal\xF3n\xBB|\xABVe a la planta de arriba\xBB|\xABMuestra toda la casa\xBB|\xABMuestra la lavadora\xBB / \xAB\xBFD\xF3nde est\xE1 la secadora?\xBB|\xABMuestra la c\xE1mara de la entrada\xBB|\xABMuestra las c\xE1maras\xBB|Todo lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist",voice_needs:"Necesita https, permiso para el micr\xF3fono (en Fully Kiosk: Web Content Settings \u2192 acceso al micr\xF3fono) y una pipeline de Assist con voz a texto. En una tarjeta del dashboard el bot\xF3n se activa en los ajustes de la tarjeta.",voice_showing:"Mostrando {name}.",screen_name:"Nombre de pantalla (para Assist)",screen_name_placeholder:"p. ej. Cocina",screen_name_hint:"Preguntar a Assist (\xABMuestra el sal\xF3n\xBB) o una automatizaci\xF3n que llame al servicio neonplan3d.ask llega a todas las vistas de CasaNeon abiertas. Si el servicio nombra una pantalla, solo reacciona la vista con ese nombre.",voice_button:"Hablar",voice_listen:"Escuchando \u2026",voice_none:"No se entendi\xF3 nada",voice_silent:"El micr\xF3fono solo da silencio. Normalmente lo tiene otra app: en Fully Kiosk desactiva la detecci\xF3n ac\xFAstica de movimiento (Motion Detection \u2192 Acoustic Detection) y recarga.",voice_no_pipeline:"No hay voz a texto configurada en Assist (Ajustes \u2192 Asistentes de voz).",voice_denied:"Micr\xF3fono no permitido: solo funciona con https y con el permiso en el navegador o en Fully Kiosk.",voice_error:"Control por voz: {msg}",card_voice:"Control por voz (bot\xF3n de micr\xF3fono)",card_voice_hint:"\xABMuestra el sal\xF3n\xBB muestra la habitaci\xF3n; las dem\xE1s frases van a Assist. Necesita https y el micr\xF3fono permitido",director_mic_test:"\u{1F399}\uFE0F Probar el micr\xF3fono",director_mic_hint:"Comprueba https, el micr\xF3fono y la voz a texto de Assist en este dispositivo y muestra qu\xE9 habitaci\xF3n abrir\xEDa una frase. No se acciona nada.",voice_pipeline:"Pipeline de Assist en este dispositivo",voice_sentences:"Frases para Assist",voice_sentences_hint:"Lo que Assist pasa a CasaNeon. Preguntas como \xAB\xBFQu\xE9 ventanas est\xE1n abiertas?\xBB las contesta si no Home Assistant; \xABPregunta a la casa qu\xE9 ventanas est\xE1n abiertas\xBB siempre llega a CasaNeon.",voice_pipeline_preferred:"La preferida en Home Assistant",voice_pipeline_no_stt:"sin voz a texto",backdrop:"Fondo",backdrop_kind:"Detr\xE1s de la casa",backdrop_color:"Un color",backdrop_top:"Color arriba",backdrop_bottom:"Color abajo",backdrop_image_url:"Direcci\xF3n de la imagen",backdrop_dim:"Oscurecer",backdrop_image_bad:"Esta direcci\xF3n no sirve: https://\u2026 o una ruta como /local/fondo.jpg",backdrop_hint:"Pon la imagen en config/www de Home Assistant; entonces es /local/nombre.jpg. Oscurecer mantiene legibles las l\xEDneas de ne\xF3n. No cuesta rendimiento, tampoco en tablets antiguas.",director_live:"Imagen en directo al mirar por la c\xE1mara",director_live_hint:"En vez de una foto cada pocos segundos corre el v\xEDdeo de la c\xE1mara (con el reproductor de Home Assistant). Necesita m\xE1s potencia: mejor desactivado en tablets muy antiguas.",director_triggers:"Disparadores propios",director_triggers_hint:"Cuando una de estas entidades se enciende o se abre (un segundo timbre, el port\xF3n del garaje, la puerta del jard\xEDn), la vista vuela all\xED y mira por la c\xE1mara elegida (sin c\xE1mara: al dispositivo).",director_trigger_entity:"Disparador",director_trigger_add:"+ A\xF1adir disparador",card_director:"Director en directo (cabina de c\xE1maras)",card_director_hint:"La tarjeta muestra sola lo que pasa. Qu\xE9 eventos, lo eliges en el editor en \xABDirector en directo\xBB.",card_roof:"Mostrar el tejado",card_roof_hint:"Desactivado: la casa se ve sin tejado, como si no lo tuviera, con las habitaciones abiertas (los campos solares del tejado desaparecen con \xE9l)",room_order_up:"Subir la habitaci\xF3n (antes en la barra de habitaciones)",room_order_down:"Bajar la habitaci\xF3n (despu\xE9s en la barra de habitaciones)",outdoor_area_hint:"Con un \xE1rea, la superficie funciona como una habitaci\xF3n: un toque en 3D la abre con los dispositivos del \xE1rea, aparece en la barra de habitaciones y lleva su nombre.",angle_lock:"Bloqueo 3D",angle_lock_hint:"El \xE1ngulo queda fijo: arrastrar desplaza la vista y el zoom sigue funcionando; nadie gira la casa sin querer.",strip_rise:"Inclinaci\xF3n (\xB0)",strip_rise_hint:"La tira sube a lo largo, p. ej. por la escalera o un pasamanos (~35\u201340\xB0). Su altura sobre el suelo es entonces la de su centro.",wall_slope:"Inclinada",wall_slope_hint:"Pared inclinada: una altura propia en cada esquina y el borde superior recto entre ellas (un cobertizo, una pendiente, ventanas altas en el lado alto). Ventanas y puertas quedan por debajo del borde.",wall_slope_start:"Altura en la esquina {n} (m)",wall_slope_end:"Altura en la esquina {n} (m)",theme_auto:"Auto (D\xEDa/Ne\xF3n seg\xFAn el sol)",markers_room:"En la habitaci\xF3n",pin_size:"Tama\xF1o de los s\xEDmbolos",pin_size_small:"Peque\xF1o",pin_size_normal:"Normal",pin_size_large:"Grande",hh_notes:"Tabl\xF3n (ayudante de texto)",hh_notes_hint:"Un ayudante de texto (input_text) o sensor cuyo texto aparece en \xABHoy en casa\xBB; separa varias l\xEDneas con |. Las automatizaciones escriben en \xE9l (\xABel paquete est\xE1 en el garaje\xBB) y la tarjeta lo muestra.",heat_sensor:"Calefacci\xF3n (sensor)",heat_sensor_hint:"Si el termostato no dice si calienta (las v\xE1lvulas Tuya informan un \xABwork state\xBB), elige aqu\xED ese sensor: encendido/abierto/calentando o una apertura mayor de 0 % hace brillar el radiador.",door_lock:"Cerradura inteligente",door_lock_hint:"La cerradura de la puerta (Nuki, Aqara \u2026): un pin en la puerta muestra cerrada o abierta; un toque la cierra o la abre.",clock:"Reloj",clock_off:"Desactivado",clock_tl:"\u2196 reloj",clock_tr:"\u2197 reloj",clock_bl:"\u2199 reloj",clock_br:"\u2198 reloj",editor_floor:"Planta inicial del editor",editor_floor_auto:"La primera de la lista",editor_floor_hint:"La planta con la que se abre el editor.",director_motion_off:"Desactivado",director_motion_person:"Solo personas",director_motion_all:"Cualquier movimiento",voice_sentences_distinct:"Solo las inequ\xEDvocas (\xABMuestra \u2026\xBB, \xABPregunta a la casa \u2026\xBB, \xABCasa, \u2026\xBB)",voice_sentences_all:"Todas las preguntas (tambi\xE9n las que Home Assistant contesta por s\xED mismo)",voice_sentences_off:"Ninguna (se borra el archivo de frases)",backdrop_look:"El cielo del aspecto (por defecto)",backdrop_gradient:"Degradado",backdrop_image:"Imagen"};function A(o,e,t={}){let n=tu[e]??e;for(let[r,i]of Object.entries(t))n=n.replace(`{${r}}`,String(i));return n}function se(o,e,t=2){return e.toLocaleString("es",{maximumFractionDigits:t})}var nu=["pool"];function ou(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("neonplan3d.lab","1"):o==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function As(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("neonplan3d.projection","1"):o==="0"&&localStorage.removeItem("neonplan3d.projection"),localStorage.getItem("neonplan3d.projection")==="1"}catch{return!1}}function ru(o){return!nu.includes(o)||ou()}var Ps="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",iu={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function Is(o){let e=o?iu[o]:void 0;return e?`${Ps}#${e}`:Ps}function V(o){return ru(o)}var Ts={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function so(o){return Ts[o]}function kn(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function Wt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Ts[o]}"/></svg>`}var et=(o,e)=>A(o,e),zs=new Set;function Cs(o){zs=o}var au={open:"closed",closed:"open",opening:"closing",closing:"opening"};function $e(o,e){var n,r;if(!e||Y(e))return et(o,"state_unavailable");let t=e.attributes;switch(j(e.entity_id)){case"light":return e.state!=="on"?et(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:et(o,"state_on");case"switch":case"fan":return et(o,e.state==="on"?"state_on":"state_off");case"cover":{let i=zs.has(e.entity_id);return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${i?100-t.current_position:t.current_position} %`:lo(o,i?au[e.state]??e.state:e.state)}case"climate":{let i=typeof t.current_temperature=="number"?`${se(o,t.current_temperature,1)} ${o?Fe(o):"\xB0C"}`:null;return e.state==="off"?i?`${i} \xB7 ${et(o,"state_off")}`:et(o,"state_off"):i??lo(o,e.state)}case"media":{let i=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",a=[t.app_name,t.media_title,t.source].find(s=>typeof s=="string"&&s);return i&&a?a:lo(o,e.state)}case"lock":case"camera":return lo(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?et(o,e.state==="on"?"state_open":"state_closed"):et(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let i=Number(e.state),a=t.unit_of_measurement??"",s=((r=(n=o==null?void 0:o.entities)==null?void 0:n[e.entity_id])==null?void 0:r.display_precision)??1;return Number.isFinite(i)?`${se(o,i,s)}${a?` ${a}`:""}`:e.state}default:return""}}function lo(o,e){let t=`state_${e}`,n=A(o,t);return n===t?e:n}function Rs(o,e){var n,r;let t=[];for(let i of e.floors)for(let a of i.placements){let s=j(a.entity_id),l=o.states[a.entity_id];if(!s||!l)continue;let d=i.rooms.find(u=>u.points.length>=3&&B([a.x,a.z],u.points))??null,c=d!=null&&d.area_id?(r=(n=o.areas)==null?void 0:n[d.area_id])==null?void 0:r.name:void 0;t.push({id:a.entity_id,floorId:i.id,roomId:(d==null?void 0:d.id)??null,x:a.x,z:a.z,y:a.y??Vt(s,i.height,a.mount??null),lamp:s==="light"?a.mount??"ceiling":null,model:s==="camera"?a.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:s==="camera"?su(o,a.entity_id):void 0,fov:a.fov??void 0,reach:a.reach??void 0,tilt:a.tilt??void 0,rotation:a.rotation??0,icon:a.icon?kn(a.icon):Wt(s),cone:s==="camera"&&a.cone===!1?!1:void 0,name:a.name||J(o,a.entity_id,c),ownName:a.name||void 0,showName:!!a.show_name,text:$e(o,l),active:qe(l),unavailable:Y(l),glow:s==="light"?Sr(gt(l),a.glow_scale):null,show:a.marker??void 0,fixed:!!a.locked})}return t}function Mr(o,e){var n;let t=`${e} ${String(((n=o.states[e])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function su(o,e){return Ge(o,e).some(t=>{var n;return((n=o.states[t])==null?void 0:n.state)==="on"})}function Ge(o,e){var n,r;let t=(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id;return t?Object.values(o.entities??{}).filter(i=>i.device_id===t&&i.entity_id.startsWith("binary_sensor.")).map(i=>i.entity_id).filter(i=>{var a;return["motion","occupancy","presence"].includes(String((a=o.states[i])==null?void 0:a.attributes.device_class))}):[]}function Fs(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function xe(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function $n(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function Sr(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}var Pe=(o,e)=>[o[0]-e[0],o[1]-e[1]],tt=(o,e)=>[o[0]+e[0],o[1]+e[1]],Ye=(o,e)=>[o[0]*e,o[1]*e],Er=(o,e)=>o[0]*e[0]+o[1]*e[1],Bt=(o,e)=>o[0]*e[1]-o[1]*e[0],Mn=o=>Math.hypot(o[0],o[1]),nt=o=>{let e=Mn(o)||1;return[o[0]/e,o[1]/e]},Hs=o=>[-o[1],o[0]],js=o=>[o[1],-o[0]];function Ut(o,e,t=[]){let n=e.eps??.005,r=[],i=t.filter(E=>Math.hypot(E.b[0]-E.a[0],E.b[1]-E.a[1])>.05),a=[],s=E=>{for(let w=0;w<a.length;w++)if(Math.abs(a[w][0]-E[0])<=n&&Math.abs(a[w][1]-E[1])<=n)return w;return a.push([E[0],E[1]]),a.length-1},l=[];for(let E of o){let w=E.points;if(w.length<3||Math.abs(Ne(w))<1e-6)continue;let $=Ne(w)>0,P=w.map(s);for(let C=0;C<w.length;C++){let N=P[C],q=P[(C+1)%w.length];N!==q&&l.push($?{u:N,v:q,room:E.id,edge:C,forward:!0}:{u:q,v:N,room:E.id,edge:C,forward:!1})}}let d=i.map(E=>[s(E.a),s(E.b)]),c=new Set;for(let E of o){let w=E.points;w.length<3||(E.wall_splits??[]).forEach(($,P)=>{if(!$||P>=w.length)return;let C=w[P],N=Pe(w[(P+1)%w.length],C),q=Mn(N);for(let Q of $)Q>n&&Q<q-n&&c.add(s(tt(C,Ye(N,Q/q))))})}let u=[];for(let E of l){let w=a[E.u],$=a[E.v],P=Pe($,w),C=Mn(P),N=Ye(P,1/C),q=[];for(let D=0;D<a.length;D++){if(D===E.u||D===E.v)continue;let ne=Pe(a[D],w),L=Er(ne,N);L<=n||L>=C-n||Math.abs(Bt(N,ne))<=n&&q.push({t:L,id:D})}q.sort((D,ne)=>D.t-ne.t);let Q=[{t:0,id:E.u},...q,{t:C,id:E.v}];for(let D=0;D+1<Q.length;D++){let ne=Q[D],L=Q[D+1],ee=E.forward?ne.t:C-L.t,oe=E.forward?L.t:C-ne.t;u.push({u:ne.id,v:L.id,room:E.room,edge:E.edge,t0:ee,t1:oe})}}let p=new Map;for(let E of u){let w=E.u<E.v?`${E.u}-${E.v}`:`${E.v}-${E.u}`,$=p.get(w);$||p.set(w,$=[]),$.push(E)}let h=E=>({room_id:E.room,edge:E.edge,t0:E.t0,t1:E.t1}),f=new Map;for(let E of u){let w=`${E.room}:${E.edge}`;f.set(w,[...f.get(w)??[],E.t0].sort(($,P)=>$-P))}let m=E=>{var P,C;let w=(C=(P=o.find(N=>N.id===E.room))==null?void 0:P.wall_heights)==null?void 0:C[E.edge];if(!Array.isArray(w))return w;let $=f.get(`${E.room}:${E.edge}`)??[];return w[$.indexOf(E.t0)]??null},g=E=>{let w=E.map(m).filter(P=>typeof P=="number"&&P>0);if(w.length)return Math.min(...w);let $=E.map(P=>{var C;return(C=o.find(N=>N.id===P.room))==null?void 0:C.ceiling_height});return $.every(P=>typeof P=="number"&&P>0)?Math.max(...$):void 0},_=E=>{let w=E.map($=>{var P,C;return(C=(P=o.find(N=>N.id===$.room))==null?void 0:P.wall_thickness)==null?void 0:C[$.edge]}).filter($=>typeof $=="number"&&$>0);return w.length?Math.max(...w):void 0},y=E=>{var w;for(let $ of E){let P=o.find(Q=>Q.id===$.room),C=(w=P==null?void 0:P.wall_slopes)==null?void 0:w[$.edge];if(!P||!C)continue;let N=P.points[$.edge],q=P.points[($.edge+1)%P.points.length];return{p:[N[0],N[1]],q:[q[0],q[1]],h0:Math.max(.05,C[0]),h1:Math.max(.05,C[1])}}},x=E=>E.some(w=>m(w)===0),M=E=>{let w=y(E);return w?{height:Math.max(w.h0,w.h1),slope:w}:{height:g(E)}},b=[],T=[];for(let E of p.values()){let w=E[0],$=E.find(P=>P!==w&&P.u===w.v&&P.v===w.u&&P.room!==w.room);for(let P of E)P!==w&&P!==$&&P.room!==w.room&&r.push(`overlap:${w.room}:${P.room}`);if(x($?[w,$]:[w])){$&&b.push([w.room,$.room]);continue}if($){let P=_([w,$])??e.interior;T.push({a:w.u,b:w.v,left:P/2,right:P/2,exterior:!1,roomLeft:w.room,roomRight:$.room,sources:[h(w),h($)],...M([w,$])})}else T.push({a:w.u,b:w.v,left:0,right:_([w])??e.exterior,exterior:!0,roomLeft:w.room,roomRight:null,sources:[h(w)],...M([w])})}let z=E=>nt(Pe(a[E.b],a[E.a]));for(let E of T){if(E.exterior||E.free)continue;let w=new Set;for(let P of[E.a,E.b])for(let C of T)!C.exterior||C.free||C.a!==P&&C.b!==P||Math.abs(Bt(z(E),z(C)))>1e-6||(C.roomLeft===E.roomLeft?w.add("left"):C.roomLeft===E.roomRight&&w.add("right"));if(w.size!==1)continue;let $=E.left+E.right;w.has("left")?(E.left=0,E.right=$):(E.left=$,E.right=0)}i.forEach((E,w)=>{var D;let[$,P]=d[w];if($===P)return;let C=[(E.a[0]+E.b[0])/2,(E.a[1]+E.b[1])/2],N=((D=o.find(ne=>ne.points.length>=3&&B(C,ne.points)))==null?void 0:D.id)??null,q=(E.thickness??e.interior)/2,Q=typeof E.height=="number"&&E.height>0?E.height:void 0;T.push({free:E.id,a:$,b:P,left:q,right:q,exterior:!1,roomLeft:N,roomRight:N,sources:[],height:Q})}),T=cu(T,a,c);let H=uu(T,a);return{walls:T.map((E,w)=>{let $=a[E.a],P=a[E.b],C=H.get(`${w}:a`),N=H.get(`${w}:b`),q=pu([C.right,N.left,P,N.right,C.left,$],1e-6);return{id:lu($,P),a:[$[0],$[1]],b:[P[0],P[1]],left:E.left,right:E.right,exterior:E.exterior,roomLeft:E.roomLeft,roomRight:E.roomRight,sources:E.sources,footprint:q,...E.free?{free:E.free}:{},...E.height!==void 0?{height:E.height}:{},...E.slope?{slope:E.slope}:{}}}),warnings:[...new Set(r)],open:b}}function lu(o,e){let t=i=>Math.round(i*100),[n,r]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Ds(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function cu(o,e,t=new Set){let n=o.slice(),r=!0;for(;r;){r=!1;let i=new Map;n.forEach((a,s)=>{for(let l of[a.a,a.b]){let d=i.get(l);d||i.set(l,d=[]),d.push(s)}});for(let[a,s]of i){if(s.length!==2||t.has(a))continue;let l=n[s[0]],d=n[s[1]];if(l.b!==a&&(l=Ds(l)),d.a!==a&&(d=Ds(d)),l.a===d.b)continue;let c=nt(Pe(e[l.b],e[l.a])),u=nt(Pe(e[d.b],e[d.a]));if(Math.abs(Bt(c,u))>1e-6||Er(c,u)<=0||l.free||d.free||l.height!==d.height||l.slope||d.slope||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let p={...l,b:d.b,sources:du(l.sources,d.sources)},h=n.filter((f,m)=>m!==s[0]&&m!==s[1]);h.push(p),n.length=0,n.push(...h),r=!0;break}}return n}function du(o,e){let t=o.map(n=>({...n}));for(let n of e){let r=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function uu(o,e){let t=new Map;o.forEach((r,i)=>{let a=nt(Pe(e[r.b],e[r.a])),s=[[r.a,{key:`${i}:a`,d:a,left:r.left,right:r.right,angle:Math.atan2(a[1],a[0])}],[r.b,{key:`${i}:b`,d:Ye(a,-1),left:r.right,right:r.left,angle:Math.atan2(-a[1],-a[0])}]];for(let[l,d]of s){let c=t.get(l);c||t.set(l,c=[]),c.push(d)}});let n=new Map;for(let[r,i]of t){let a=e[r];i.sort((d,c)=>d.angle-c.angle);let s=d=>({left:tt(a,Ye(Hs(d.d),d.left)),right:tt(a,Ye(js(d.d),d.right))});for(let d of i)n.set(d.key,s(d));if(i.length<2)continue;let l=4*Math.max(...i.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<i.length;d++){let c=i[d],u=i[(d+1)%i.length],p=tt(a,Ye(Hs(c.d),c.left)),h=tt(a,Ye(js(u.d),u.right)),f=Bt(c.d,u.d);if(Math.abs(f)<1e-4)continue;let m=Bt(Pe(h,p),u.d)/f,g=tt(p,Ye(c.d,m));Mn(Pe(g,a))>l||(n.get(c.key).left=g,n.get(u.key).right=g)}}return n}function pu(o,e){let t=o.filter((r,i)=>Mn(Pe(r,o[(i+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let i=t[(r+t.length-1)%t.length],a=t[r],s=t[(r+1)%t.length],l=Pe(a,i),d=Pe(s,a);if(Math.abs(Bt(nt(l),nt(d)))<1e-7&&Er(l,d)>0){t=t.filter((c,u)=>u!==r),n=!0;break}}}return t}function co(o,e,t){let n=o.points[e],r=o.points[(e+1)%o.points.length],i=nt(Pe(r,n));return tt(n,Ye(i,t))}function Os(o,e,t){if(o.wall){let r=t.find(s=>s.id===o.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let i=nt(Pe(r.b,r.a));return{room:{id:o.room_id,name:"",area_id:null,points:[r.a,r.b,tt(r.a,[-i[1],i[0]])]},edge:0}}let n=e.find(r=>r.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}var En=Math.PI/180;function Pn(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),r=Math.max(o.z0,o.z1);return o.axis==="x"?{u0:e,u1:t,w:r-n,at:(i,a)=>[i,o.flip?r-a:n+a]}:{u0:n,u1:r,w:t-e,at:(i,a)=>[o.flip?t-a:e+a,i]}}function uo(o){let e=Pn(o).w,t=o.eave_a,n=o.eave_b,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*En),i=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*En);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(o.shape==="mansard"){let l=Ns(e,t,n,r,i);return{vr:l.vr,rh:l.rh,y:l.y}}let a=r+i>1e-6?Math.min(e,Math.max(0,(n-t+e*i)/(r+i))):e/2,s=t+a*r;return{vr:a,rh:s,y:l=>l<=a?t+l*r:n+(e-l)*i}}var hu=.14;function Ls(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function Vs(o,e,t){let n=null,r=Math.max(0,o.settings.roof.overhang??0);for(let i of o.settings.roof.sections??[]){if(i.open)continue;let a=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),l=Math.min(i.z0,i.z1),d=Math.max(i.z0,i.z1);if(e<a-1e-6||e>s+1e-6||t<l-1e-6||t>d+1e-6||i.points&&i.points.length>=3&&!B([e,t],i.points))continue;let[c,u]=gu(i,e,t),p=i.shape==="flat"||i.shape==="parapet",h=Math.max(0,i.overhang??r),m=((p?null:mu(fu(i,{u0:h,u1:h,a:h,b:h}),c,u))??uo(i).y(u))-hu;n=n===null?m:Math.max(n,m)}return n}var Sn=Math.tan(30*En);function Ns(o,e,t,n,r){let i=Math.min(o*.3,n>1e-6?2.4/n:o*.3),a=Math.min(o*.3,r>1e-6?2.4/r:o*.3),s=e+i*n,l=t+a*r,d=Math.min(o-a,Math.max(i,(l-s+Sn*(o-a+i))/(2*Sn))),c=s+(d-i)*Sn;return{vla:i,vlb:a,yla:s,ylb:l,vr:d,rh:c,y:p=>p<=i?e+p*n:p<=d?s+(p-i)*Sn:p<=o-a?l+(o-a-p)*Sn:t+(o-p)*r}}function fu(o,e){let t=Pn(o),n=uo(o),r=t.w,i=Math.max(0,e.a),a=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=(y,x)=>[y,x,n.y(x)],c=d(s,-i),u=d(l,-i),p=d(l,r+a),h=d(s,r+a),f=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*En),m=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*En);if(o.shape==="pent"){let y=[c,u,p,h];return{faces:[y],rim:y,ridges:[[p,h]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(o.shape==="hip"||o.shape==="pyramid"){let y=o.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,r-n.vr)||r/2),x=[t.u0+y,n.vr,n.rh],M=[t.u1-y,n.vr,n.rh],b=o.shape==="pyramid"?[[c,u,x],[u,p,x],[p,h,x],[h,c,x]]:[[c,u,M,x],[x,M,p,h],[h,c,x],[u,p,M]],T=o.shape==="pyramid"?[[c,x],[h,x],[u,x],[p,x]]:[[x,M],[c,x],[h,x],[u,M],[p,M]];return{faces:b,rim:[c,u,p,h],ridges:T,gable:null}}if(o.shape==="halfhip"){let y=Math.min(n.y(0),n.y(r)),x=y+(n.rh-y)*.55,M=f>1e-6?Math.min(n.vr,(x-o.eave_a)/f):n.vr,b=m>1e-6?Math.max(n.vr,r-(x-o.eave_b)/m):n.vr,T=Math.min((t.u1-t.u0)/2-.1,(n.rh-x)/Math.max(.2,f)),z=[t.u0+T,n.vr,n.rh],H=[t.u1-T,n.vr,n.rh],U=[s,M,x],E=[s,b,x],w=[l,M,x],$=[l,b,x];return{faces:[[c,u,w,H,z,U],[z,H,$,p,h,E],[E,U,z],[w,$,H]],rim:[c,u,w,$,p,h,E,U],ridges:[[z,H],[U,z],[E,z],[w,H],[$,H]],gable:[[0,n.y(0)],[M,x],[b,x],[r,n.y(r)]]}}if(o.shape==="mansard"){let y=Ns(r,o.eave_a,o.eave_b,f,m),x=[s,y.vla,y.yla],M=[l,y.vla,y.yla],b=[s,r-y.vlb,y.ylb],T=[l,r-y.vlb,y.ylb],z=[s,y.vr,y.rh],H=[l,y.vr,y.rh];return{faces:[[c,u,M,x],[x,M,H,z],[z,H,T,b],[b,T,p,h]],rim:[c,u,M,H,T,p,h,b,z,x],ridges:[[z,H],[x,M],[b,T]],gable:[[0,n.y(0)],[y.vla,y.yla],[y.vr,y.rh],[r-y.vlb,y.ylb],[r,n.y(r)]]}}let g=[s,n.vr,n.rh],_=[l,n.vr,n.rh];return{faces:[[c,u,_,g],[g,_,p,h]],rim:[c,u,_,p,h,g],ridges:[[g,_]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function mu(o,e,t){let n=null;for(let r of o.faces){if(!B([e,t],r.map(y=>[y[0],y[1]])))continue;let[i,a]=r,s=r.slice(2).find(y=>Math.abs((a[0]-i[0])*(y[1]-i[1])-(a[1]-i[1])*(y[0]-i[0]))>1e-9);if(!s)continue;let l=a[0]-i[0],d=a[2]-i[2],c=a[1]-i[1],u=s[0]-i[0],p=s[2]-i[2],h=s[1]-i[1],f=d*h-c*p,m=c*u-l*h,g=l*p-d*u;if(Math.abs(m)<1e-9)continue;let _=i[2]-(f*(e-i[0])+g*(t-i[1]))/m;n=n===null?_:Math.min(n,_)}return n}function gu(o,e,t){let n=Math.min(o.x0,o.x1),r=Math.max(o.x0,o.x1),i=Math.min(o.z0,o.z1),a=Math.max(o.z0,o.z1);return o.axis==="x"?[e,o.flip?a-t:t-i]:[t,o.flip?r-e:e-n]}function qs(o,e,t){let n=Pn(e),r=o.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>e.base+.05)),i=d=>d.some(c=>r.some(u=>B(c,u.points))),a=.35,s=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:i(s.map(d=>n.at(d,-a)))?0:t,b:i(s.map(d=>n.at(d,n.w+a)))?0:t,u0:i(l.map(d=>n.at(n.u0-a,d)))?0:t,u1:i(l.map(d=>n.at(n.u1+a,d)))?0:t}}var ho=Math.PI/180,bu=1.13,_u=1.72,fo=.025,_t=.07,Ws=.25;function In(o,e){var n;let t=[];for(let r of o.floors){if(e&&r.id!==e)continue;let{walls:i}=Ut(r.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},r.walls??[]);for(let a of i){if(!a.exterior&&!a.free)continue;let s=a.b[0]-a.a[0],l=a.b[1]-a.a[1],d=Math.hypot(s,l);if(d<.5)continue;let c=l/d,u=-s/d,p=Math.min(r.height,a.height??r.height),h=((n=a.sources.find(g=>g.room_id===a.roomLeft))==null?void 0:n.edge)??null,f={floorId:r.id,room:a.roomLeft,edge:h,free:!!a.free},m=(g,_,y,x)=>t.push({key:g,section:null,side:"top",flat:!1,o:_,eu:y,es:[0,1,0],n:x,lu:d,ls:p,pitch:90,span:()=>[0,d],facing:[x[0],x[2]],wall:f});m(`wall:${r.id}:${a.id}`,[a.a[0]+c*a.right,r.elevation,a.a[1]+u*a.right],[s/d,0,l/d],[c,0,u]),a.free&&m(`wall:${r.id}:${a.id}:back`,[a.b[0]-c*a.left,r.elevation,a.b[1]-u*a.left],[-s/d,0,-l/d],[-c,0,-u])}}return t}var Bs="ground";function vu(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function yu(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],i=vu(o),a=n[0]*e.u+r[0]*e.v,s=n[2]*e.u+r[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:Rt(i,a,s)):e.base??0;return{key:Bs,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function yt(o,e,t=Kt(o)){return e.face===Bs?yu(o,e):e.face.startsWith("wall:")?In(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function Pr(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Kt(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(y=>wu(y,qs(o,y,y.overhang??e.overhang)));let t=Pr(o);if(!t)return[];let n=t.rooms.flatMap(y=>y.points.map(x=>x[0])),r=t.rooms.flatMap(y=>y.points.map(x=>x[1])),i=o.settings.wall_exterior+e.overhang,a=Math.min(...n)-i,s=Math.max(...n)+i,l=Math.min(...r)-i,d=Math.max(...r)+i,c=t.elevation+t.height;if(e.type==="flat")return[Us("main",null,a,l,s,d,c+Ws)];let u=s-a>=d-l,p=e.ridge==="short"?!u:u,h=(p?d-l:s-a)/2,f=h*Math.tan(e.pitch*ho),m=(y,x,M)=>p?[y,c+M,(l+d)/2+x]:[(a+s)/2+x,c+M,y],[g,_]=p?[a,s]:[l,d];return[-1,1].map(y=>po(`main:${y<0?"a":"b"}`,null,y<0?"a":"b",m(g,y*h,0),m(_,y*h,0),m(g,0,f),e.pitch,()=>[0,_-g]))}function wu(o,e){let t=Pn(o),n=uo(o),r=(m,g,_)=>{let[y,x]=t.at(m,g);return[y,_,x]},i=Math.max(0,e.a),a=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=l-s;if(o.shape==="flat"||o.shape==="parapet"){let m=t.at(s,-i),g=t.at(l,t.w+a);return[Us(o.id,o.id,Math.min(m[0],g[0]),Math.min(m[1],g[1]),Math.max(m[0],g[0]),Math.max(m[1],g[1]),o.eave_a+Ws)]}if(o.shape==="pent")return[po(`${o.id}:a`,o.id,"a",r(s,-i,n.y(-i)),r(l,-i,n.y(-i)),r(s,t.w+a,n.y(t.w+a)),o.pitch_a,()=>[0,d])];let c=o.shape==="hip"||o.shape==="pyramid",u=o.shape==="pyramid"?(t.u1-t.u0)/2:c?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,p=c?t.u0+u-s:0,h=c?l-(t.u1-u):0,f=[];if(n.vr>.3){let m=Math.hypot(n.vr+i,n.rh-n.y(-i));f.push(po(`${o.id}:a`,o.id,"a",r(s,-i,n.y(-i)),r(l,-i,n.y(-i)),r(s,n.vr,n.rh),o.pitch_a,g=>[p*(g/m),d-h*(g/m)]))}if(t.w-n.vr>.3){let m=Math.hypot(t.w+a-n.vr,n.rh-n.y(t.w+a));f.push(po(`${o.id}:b`,o.id,"b",r(l,t.w+a,n.y(t.w+a)),r(s,t.w+a,n.y(t.w+a)),r(l,n.vr,n.rh),o.pitch_b,g=>[h*(g/m),d-p*(g/m)]))}if(c){let m=n.y(-i),g=n.y(t.w+a),_=[[`${o.id}:c`,"c",r(s,t.w+a,g),r(s,-i,m),r(t.u0+u,n.vr,n.rh)],[`${o.id}:d`,"d",r(l,-i,m),r(l,t.w+a,g),r(t.u1-u,n.vr,n.rh)]];for(let[y,x,M,b,T]of _){let z=xu(y,o.id,x,M,b,T);z&&f.push(z)}}return f}function xu(o,e,t,n,r,i){let a=An(vt(r,n));if(a<.3)return null;let s=ot(vt(r,n)),l=vt(i,n),d=l[0]*s[0]+l[1]*s[1]+l[2]*s[2],c=[l[0]-s[0]*d,l[1]-s[1]*d,l[2]-s[2]*d],u=An(c);if(u<.3)return null;let p=ot(c),h=ot(Ys(s,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=ot([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/ho;return{key:o,section:e,side:t,flat:!1,o:n,eu:s,es:p,n:h,lu:a,ls:u,pitch:m,span:_=>{let y=Math.min(1,Math.max(0,_/u));return[d*y,a-(a-d)*y]},facing:[f[0],f[2]]}}function po(o,e,t,n,r,i,a,s){let l=ot(vt(r,n)),d=ot(vt(i,n)),c=ot(Ys(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let u=ot([-d[0],0,-d[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:d,n:c,lu:An(vt(r,n)),ls:An(vt(i,n)),pitch:a,span:s,facing:[u[0],u[2]]}}function Us(o,e,t,n,r,i,a){let s=r-t>=i-n,l=s?r-t:i-n,d=s?i-n:r-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,a,n],eu:s?[1,0,0]:[0,0,1],es:s?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:s?[0,1]:[1,0]}}function Ar(o){let e=o.module_w||bu,t=o.module_h||_u;return o.portrait===!1?[t,e]:[e,t]}function Ks(o){var e;return(e=o.layout)!=null&&e.length?o.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function Ir(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*ho:o.wall?Math.min(90,Math.max(0,e.tilt??0))*ho:0}function wt(o,e){let[t,n]=Ar(e),r=Ks(e),i=Math.max(1,...r),s=(r.length-1)*Gs(o,e)+n*Math.cos(Ir(o,e));return[i*t+(i-1)*fo,s]}function Gs(o,e){let[,t]=Ar(e),n=Ir(o,e);return o.wall?t*Math.cos(n)+fo:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+fo}function ku(o,e,t=!1){let[n,r]=Ar(e),i=[],a=Ir(o,e),s=r*Math.cos(a),l=Gs(o,e),d=Ks(e),c=Math.max(1,...d),u=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(m,g,_)=>[o.o[0]+o.eu[0]*m+o.es[0]*g+o.n[0]*_,o.o[1]+o.eu[1]*m+o.es[1]*g+o.n[1]*_,o.o[2]+o.eu[2]*m+o.es[2]*g+o.n[2]*_],f=(m,g)=>{if(o.unbounded)return!0;if(g<-1e-6||g>o.ls+1e-6)return!1;let[_,y]=o.span(g);return m>=_-1e-6&&m<=y+1e-6};return d.forEach((m,g)=>{let _=e.align==="right"?c-m:e.align==="center"?(c-m)/2:0;for(let y=0;y<m;y++){let x=`${g}:${y}`,M=u.has(x);if(M&&!t)continue;let b=e.u+(y+_)*(n+fo),T=e.v+g*l,z=b+n,H=T+(o.flat||o.wall?s:r);if(p){if(!(f((b+z)/2,T)&&f((b+z)/2,H)))continue}else if(![[b,T],[z,T],[z,H],[b,H]].every(([C,N])=>f(C,N)))continue;if(o.wall&&a>.001){let C=_t+r*Math.sin(a),[N,q]=e.flip?[C,_t]:[_t,C],Q=[h(b,T,N),h(z,T,N),h(z,H,q),h(b,H,q)],D=e.flip?T:H,ne=[b+.05,z-.05].map(L=>[h(L,D,0),h(L,D,C)]);i.push({corners:Q,posts:ne,cell:x,skipped:M});continue}if(!o.flat){i.push({corners:[h(b,T,_t),h(z,T,_t),h(z,H,_t),h(b,H,_t)],posts:[],cell:x,skipped:M});continue}let U=.15,E=U+r*Math.sin(a),[w,$]=e.flip?[H,T]:[T,H],P=[h(b,w,U),h(z,w,U),h(z,$,E),h(b,$,E)];i.push({corners:P,posts:[b+.05,z-.05].flatMap(C=>[[h(C,w,0),h(C,w,U)],[h(C,$,0),h(C,$,E)]]),cell:x,skipped:M})}}),i}function vt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function An(o){return Math.hypot(o[0],o[1],o[2])}function ot(o){let e=An(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function Ys(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var $u=.78,Mu=1.18;function Su(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||$u,module_h:o.h||Mu}}function Eu(o,e){let t=ku(o,Su(e))[0];if(!t)return null;let n=r=>[r[0]-o.n[0]*.05,r[1]-o.n[1]*.05,r[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function Pu(o,e,t){let n=e?Eu(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,i=(n[0][1]+n[2][1])/2,a=(n[0][2]+n[2][2])/2;for(let s of[...o.floors].sort((l,d)=>d.elevation-l.elevation)){if(s.elevation>i)continue;let l=s.rooms.find(d=>B([r,a],d.points));if(l)return{floor:s,roomId:l.id,corners:n}}return null}function Qs(o,e){var r;let t=((r=o.settings.roof)==null?void 0:r.windows)??[];if(!t.length)return[];let n=new Map(Kt(o).map(i=>[i.key,i]));return t.filter(i=>{var a;return((a=Pu(o,n.get(i.face),i))==null?void 0:a.roomId)===e})}function Js(o,e){let[t,n]=wt(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var Be=Ee`
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
`,rt=Ee`
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
  /* fingers need 40 px */
  @media (pointer: coarse) {
    .fp3d-seg button,
    .fp3d-chip,
    .fp3d-btn {
      min-height: 40px;
    }
  }
`;var Au=4,Iu=3e3,Tu=8,zu=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],Gt=o=>v`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${so(o)} />
  </svg>`,mo={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Tr=o=>v`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,zr=class extends Se{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},readOnly:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},Iu)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return A(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}get areaName(){var e,t,n;return(e=this.room)!=null&&e.area_id?(n=(t=this.hass.areas)==null?void 0:t[this.room.area_id])==null?void 0:n.name:void 0}name(e){return J(this.hass,e,this.areaName)}nameButton(e){return v`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&xe(this,e)}>${this.name(e)}</button>`}askFor(e){var t;return!((t=this.confirmEntities)!=null&&t.has(e))||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let r=()=>{var i;this.readOnly||(i=this.confirmEntities)!=null&&i.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return v`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${Y(e)}
      @click=${r}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return k;let t=ge(this.hass,e.area_id),n=this.memo,{shown:r,more:i}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?xs(this.hass,this.floor,e,this.building?Qs(this.building,e.id):[]):{shown:t,more:[]}},a=vr(this.hass,i).map(M=>M.primary),s=a.length,l=this._showAll?[...r,...a]:r,d=M=>l.filter(b=>M.includes(j(b))).map(b=>this.hass.states[b]),c=d(["light"]),u=d(["cover"]),p=d(["climate"]),h=d(["media"]),f=d(["switch","fan","lock"]),m=d(["sensor","binary"]),g=d(["camera"]);this.hasCameras=g.length>0;let _=d(["scene","script"]),y=this.facts(p),x=c.filter(M=>M.state==="on");return v`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${y.length?v`<p class="fp3d-rp-facts">${y.join(" \xB7 ")}</p>`:k}
          ${this.readOnly?v`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:k}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?k:v`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:v`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${c.length?this.section("panel_lights",c.map(M=>this.lightRow(M)),v`${x.length<c.length?v`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:c.filter(M=>!Y(M)).map(M=>M.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:k}${x.length?v`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:x.map(M=>M.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:k}`):k}
        ${u.length?this.section("panel_covers",u.map(M=>this.coverRow(M)),u.length>1?v`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:u.filter(M=>!Y(M)).map(M=>M.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:u.filter(M=>!Y(M)).map(M=>M.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:k):k}
        ${p.length?this.section("panel_climate",p.map(M=>this.climateRow(M))):k}
        ${h.length?this.section("panel_media",h.map(M=>this.mediaRow(M))):k}
        ${f.length?this.section("panel_switches",f.map(M=>this.switchRow(M))):k}
        ${g.length?this.section("panel_cameras",g.map(M=>this.cameraTile(M))):k}
        ${m.length?this.section("panel_sensors",m.map(M=>this.sensorRow(M))):k}
        ${_.length?this.section("panel_scenes",[v`<div class="fp3d-rp-scenes">
                  ${_.map(M=>v`<button
                      class="fp3d-btn"
                      ?disabled=${Y(M)}
                      @click=${()=>this.call(j(M.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:M.entity_id})}
                    >
                      ${this.name(M.entity_id)}
                    </button>`)}
                </div>`]):k}
        ${s?v`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:s})}
            </button>`:k}
      </div>
    </section>`}facts(e){var l;let t=[],n=this.room,r=(d,c)=>{var f;let u=Ze(this.hass,this.floor,n,d);if(u===null)return null;if(d==="temperature")return`${se(this.hass,Lt(this.hass,u),1)} ${Fe(this.hass)}`;let p=mr(this.hass,this.floor,n,d)[0],h=((f=this.hass.states[p])==null?void 0:f.attributes.unit_of_measurement)??c;return`${se(this.hass,u,1)} ${h}`},i=e.find(d=>typeof d.attributes.current_temperature=="number"),a=r("temperature","\xB0C");a?t.push(a):i&&((l=n.climate)==null?void 0:l.temperature)!=="none"&&t.push(`${se(this.hass,i.attributes.current_temperature,1)} ${Fe(this.hass)}`);let s=r("humidity","%");return s&&t.push(s),t}section(e,t,n=k){return v`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",r=t.supported_color_modes??[],i=r.some(p=>p!=="onoff"),a=r.includes("color_temp"),s=r.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,d=t.min_color_temp_kelvin??2200,c=t.max_color_temp_kelvin??6500,u=e.entity_id;return v`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${Gt("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&i?v`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(p.target.value)})}
          /></label>`:k}
      ${n&&a?v`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${c}
              step="50"
              .value=${String(t.color_temp_kelvin??d)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:k}
      ${n&&s?v`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${zu.map(p=>v`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:k}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,r=e.entity_id,i=Y(e);return v`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${Gt("cover")}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.call("cover","open_cover",{entity_id:r})}>${this.t("cover_open")}</button>
        ${n&Tu?v`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:r})}>${this.t("cover_stop")}</button>`:k}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.call("cover","close_cover",{entity_id:r})}>${this.t("cover_close")}</button>
      </div>
      ${n&Au&&typeof t.current_position=="number"?v`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${a=>this.call("cover","set_cover_position",{entity_id:r,position:Number(a.target.value)})}
          /></label>`:k}
      ${n&128&&typeof t.current_tilt_position=="number"?v`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_tilt_position)}
              @change=${a=>this.call("cover","set_cover_tilt_position",{entity_id:r,tilt_position:Number(a.target.value)})}
          /></label>`:n&48?v`<div class="fp3d-rp-buttons">
              ${n&16?v`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_open")}</button>`:k}
              ${n&32?v`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_close")}</button>`:k}
            </div>`:k}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,r=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,a=t.min_temp??5,s=t.max_temp??30,l=t.hvac_modes??[],d=c=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(s,Math.max(a,Math.round(c/i)*i))});return v`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${Gt("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${r!==null?v`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(r-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${se(this.hass,r,1)} ${Fe(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(r+i)}>+</button>
          </div>`:k}
      ${l.length>1?v`<div class="fp3d-rp-chips">
            ${l.map(c=>v`<button
                class="fp3d-chip"
                aria-pressed=${e.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:k}
    </div>`}stateOf(e,t=$e(this.hass,e)){var r,i;if((i=(r=this.room)==null?void 0:r.no_state)!=null&&i.includes(e.entity_id))return"";let n=j(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,r=Y(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(a=>typeof a=="string"&&a).join(" \xB7 ");return v`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${Gt("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?v`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:k}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${Tr(mo.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${Y(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${Tr(e.state==="playing"?mo.pause:mo.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${Tr(mo.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?v`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${a=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(a.target.value)/100})}
          /></label>`:k}
    </div>`}switchRow(e){let t=e.entity_id,n=j(t),r=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",a=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(r,"toggle",{entity_id:t});return v`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${Gt(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,a)}
    </div>`}cameraTile(e){var i;let t=e.attributes.entity_picture,n=t&&!Y(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=(i=this.floor)==null?void 0:i.placements.some(a=>a.entity_id===e.entity_id);return v`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&xe(this,e.entity_id)}>
        ${n?v`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:v`<span class="fp3d-rp-note">${$e(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${r?v`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${V("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:k}
    </div>`}sensorRow(e){let t=j(e.entity_id),n=t==="binary"&&e.state==="on";return v`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${Gt(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Be,rt,Ee`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",zr);var Cu={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function xt(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function Cr(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return i<=.1?0:Math.min(1,.3+i/10)}function Xs(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let r=Cu[n.state];if(!r)return null;let i=n.attributes,a=r.cloud??0;typeof i.cloud_coverage=="number"&&(a=Math.min(1,Math.max(0,i.cloud_coverage/100)));let s=r.wind??0;if(typeof i.wind_speed=="number"){let d=i.wind_speed_unit==="m/s"?i.wind_speed*3.6:i.wind_speed_unit==="mph"?i.wind_speed*1.609:i.wind_speed;s=Math.max(s,Math.min(1,d/60))}let l=Cr(o,t);return l!==null&&l>0&&(a=Math.max(a,.85)),{entity:n.entity_id,condition:n.state,rain:l??r.rain??0,snow:r.snow??0,fog:r.fog??0,cloud:a,wind:s,lightning:!!r.lightning}}function Zs(o,e){let t=new Set(e??ja);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var Ru=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),Fu=new Set(["power","plug","connectivity","running"]);function go(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return Fu.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return Ru.has(n)||n.startsWith("ob ")}function Hr(o){let e=ye(o);if(!e||e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var fe=["#3a3f47","#3a3f47"],kt=["#23262b","#23262b"],je=["#5a3b25","#5a3b25"],de=["#1f4fa8","#1f4fa8"],it=["#e3b616","#e3b616"],Z=["#2f7d3b","#2f7d3b"],el={default:{rest:fe,bio:je,paper:de,plastic:it,glass:Z,garden:Z,recycling:it,other:fe},DE:{rest:kt,bio:je,paper:de,plastic:it,glass:Z,garden:Z,recycling:it},AT:{rest:fe,bio:je,paper:[fe[0],"#c0262d"],plastic:it,glass:Z,garden:Z},CH:{rest:["#d8d8d8","#d8d8d8"],bio:Z,paper:de,plastic:fe,glass:Z,garden:Z},NL:{rest:fe,bio:Z,paper:de,plastic:["#3a3f47","#e57a1f"],glass:Z,garden:Z},BE:{rest:fe,bio:Z,paper:de,plastic:de,glass:Z,garden:Z},GB:{rest:kt,bio:["#3a3f47","#5a3b25"],paper:de,plastic:de,glass:kt,garden:je,recycling:de},US:{rest:kt,bio:Z,paper:de,plastic:de,glass:de,garden:Z,recycling:de},CA:{rest:kt,bio:Z,paper:de,plastic:de,glass:de,garden:Z,recycling:de},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:fe,bio:je,paper:[fe[0],"#e3b616"],plastic:[fe[0],"#e3b616"],recycling:[fe[0],"#e3b616"],glass:Z,garden:Z},IT:{rest:fe,bio:je,paper:de,plastic:it,glass:Z,garden:Z},ES:{rest:fe,bio:je,paper:de,plastic:it,glass:Z,garden:Z},PT:{rest:fe,bio:je,paper:de,plastic:it,glass:Z,garden:Z},DK:{rest:kt,bio:Z,paper:de,plastic:fe,glass:Z,garden:Z},SE:{rest:kt,bio:je,paper:de,plastic:fe,glass:Z,garden:Z},NO:{rest:fe,bio:je,paper:de,plastic:fe,glass:Z,garden:Z},FI:{rest:fe,bio:je,paper:de,plastic:fe,glass:Z,garden:Z}},nl="DE";function ol(o){nl=o}function rl(o){var n;let e=(n=o==null?void 0:o.config)==null?void 0:n.country;if(e)return e.toUpperCase();let t=((o==null?void 0:o.language)??"").split("-")[1];return t?t.toUpperCase():"DE"}function Hu(o,e){var t;return((t=el[e])==null?void 0:t[o])??el.default[o]??fe}function il(o,e=nl){let t=Hu(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var ju={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function Fr(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(r=>r.trim()&&n.includes(r.trim())):e==="other"?!1:ju[e].some(r=>n.includes(r))}function jr(o){let e=typeof o=="string"?o:(o==null?void 0:o.date)??(o==null?void 0:o.dateTime);if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Du(o){return o.map(e=>({day:jr(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function al(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function Dr(o,e,t=new Date,n=42){let r=new Map,i=o.callApi;if(!i)return r;let a=new Date(t.getFullYear(),t.getMonth(),t.getDate()),s=sl(a,n);return await Promise.all(e.map(async l=>{try{let d=await i.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(a.toISOString())}&end=${encodeURIComponent(s.toISOString())}`);r.set(l,Du(Array.isArray(d)?d:[]))}catch{}})),r}var Yt=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),sl=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),bo=(o,e)=>Math.round((Yt(e).getTime()-Yt(o).getTime())/864e5);function Rr(o,e,t={}){let n=t.from??14,r=t.until??12,i=e.getHours()+e.getMinutes()/60;return o===1&&i>=n||o===0&&i<r}function ll(o,e,t,n=new Date,r=3){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return[];if(i.startsWith("calendar.")){let s=Yt(n);return(t.get(i)??[]).filter(l=>l.day>=s&&Fr(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,r)}let a=Or(o,e,t,n);return a?[{day:a.day,summary:a.summary}]:[]}function Or(o,e,t,n=new Date,r={}){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return null;let a=Yt(n);if(i.startsWith("calendar.")){let c=(t.get(i)??[]).find(p=>p.day>=a&&Fr(p.summary,o.bin_kind??"rest",o.bin_match));if(!c)return null;let u=bo(a,c.day);if(u===0&&n.getHours()+n.getMinutes()/60>=(r.until??12)){let p=(t.get(i)??[]).find(h=>h.day>a&&Fr(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:bo(a,p.day),day:p.day,summary:p.summary,glow:Rr(bo(a,p.day),n,r)}}return{days:u,day:c.day,summary:c.summary,glow:Rr(u,n,r)}}let s=e.states[i];if(!s)return null;let l=Lu(s,n);if(l===null||l<0)return null;let d=sl(a,l);return{days:l,day:d,summary:String(s.attributes.friendly_name??""),glow:Rr(l,n,r)}}function Ou(o,e=new Date){let t=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o),r,i,a;if(t)[r,i,a]=[Number(t[1]),Number(t[2]),Number(t[3])];else if(n){let l=Number(n[1]),d=Number(n[3]);n[2]==="/"&&d>12&&l<=12&&([l,d]=[d,l]),a=l,i=d;let c=n[4];r=c?c.length===2?2e3+Number(c):Number(c):e.getFullYear(),!c&&new Date(r,i-1,a)<Yt(e)&&(r+=1)}else return null;if(i<1||i>12||a<1||a>31)return null;let s=new Date(r,i-1,a);return s.getMonth()===i-1?s:null}function Lu(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let r=/^\d{4}-\d{2}-\d{2}T/.test(n)?jr(n):Ou(n,e);if(r)return bo(e,r);let i=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(i))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(i))return 1;let a=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(i)??/\bin\s+(\d+)/.exec(i);if(a)return Number(a[1]);let s=i.match(/\d+/g);return s?Number(s[s.length-1]):null}var Vu=new Set(["on","open","true","detected","home"]);function tl(o){let e=o!=null&&o.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function cl(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let r=e.states[n];if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let i=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!i){let l=Number(r.state);return Vu.has(r.state.toLowerCase())||Number.isFinite(l)&&l>0}let a=tl(r),s=tl(e.states[i]);return a===null||t-a>7*864e5?!1:s===null||a>s+1e3}function dl(o){return o.type==="waste_bin"?[o.bin_source??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:qu(o)}var ul=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function Lr(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let i=n.attributes,a=String(i.problem??"").toLowerCase();return String(i.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&a.includes("moisture")&&!a.includes("high")}let r=ul(n);return r!==null&&r<(o.moisture_min??20)}function Vr(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let a=Number(t),s=n==="s"?a/60:n==="h"?a*60:a;return Math.max(0,Math.round(s))}let r=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(r)return Number(r[1])*60+Number(r[2])+Math.round(Number(r[3]??0)/60);let i=Date.parse(t);return Number.isFinite(i)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((i-e)/6e4)):null}var Nu=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function Nr(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return Nu.has(e)}function pl(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function hl(o,e,t=new Date){let n=typeof o.service=="string"&&o.service!=="none"?o.service:null,r=n?e.states[n]:void 0;if(!n||!r||r.state==="unavailable"||r.state==="unknown")return!1;if(n.startsWith("binary_sensor.")||n.startsWith("input_boolean."))return r.state==="on";let i=ul(r);if(i!==null)return i<=(o.service_min??10);let a=jr(r.state);return!!a&&a.getTime()<=Yt(t).getTime()}var at=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),fl=o=>!!o&&(o.state==="on"||o.state==="open");function vo(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let r of at(o)){let i=e.states[r];if(fl(i)&&(i!=null&&i.last_changed)&&t-Date.parse(i.last_changed)>=n)return r}return null}function ml(o,e,t=Date.now()){let n=null;for(let r of o)if(!(r.type!=="fridge"&&r.type!=="fridge_smart"))for(let i of at(r)){let a=e.states[i];if(!fl(a)||!(a!=null&&a.last_changed))continue;let s=Date.parse(a.last_changed)+(r.door_alarm??2)*6e4-t;s>0&&(n===null||s<n)&&(n=s)}return n}var _o=class{running=new Map;ended=new Map;update(e,t,n,r=Date.now()){let i=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;i===!0&&this.ended.set(e,r);let a=this.ended.get(e);return a===void 0?!1:r-a>12*36e5||n(a)?(this.ended.delete(e),!1):!0}};function qu(o){return[o.moisture??null,o.remaining??null,o.service??null]}var vl="proxmoxve";function Wu(o){let e=new Map;for(let t of Object.values(o.entities??{})){if(t.platform!==vl||!t.device_id||!t.translation_key)continue;let n=t.entity_id.slice(0,t.entity_id.indexOf("."));if(n!=="sensor"&&n!=="binary_sensor")continue;let r=e.get(t.device_id);r||e.set(t.device_id,r=new Map);let i=`${n==="binary_sensor"?"b:":""}${t.translation_key}`;r.has(i)?r.set(`${i}#${t.entity_id}`,t.entity_id):r.set(i,t.entity_id)}return e}function wo(o){return!!o&&o.state!=="unavailable"&&o.state!=="unknown"}function De(o,e){let t=e?o.states[e]:void 0;if(!wo(t))return null;let n=Number(t.state);return Number.isFinite(n)?n:null}function yo(o,e){var n;let t=(n=o.devices)==null?void 0:n[e];return(t==null?void 0:t.name_by_user)||(t==null?void 0:t.name)||e}function qr(o){let e=/^(?:qemu|lxc|vm)\s+(.*?)\s*\((\d+)\)\s*$/i.exec(o.trim());return e?{name:e[1],vmid:Number(e[2])}:{name:o.trim(),vmid:null}}var gl=new WeakMap;function yl(o){let e=o==null?void 0:o.entities;if(!e)return!1;let t=gl.get(e);return t===void 0&&gl.set(e,t=Object.values(e).some(n=>n.platform===vl)),t}function Tn(o){var r,i,a;let e=[],t=[],n=[];for(let[s,l]of Wu(o)){let d=c=>l.get(c);if(d("node_status")||d("qemu_on")||d("lxc_on")){let c=d("node_status")??d("b:status"),u=o.states[c],p=c===d("node_status")?(u==null?void 0:u.state)==="online":(u==null?void 0:u.state)==="on";e.push({deviceId:s,name:yo(o,s).replace(/^node\s+/i,""),online:p,cpu:De(o,d("cpu_used")),memory:De(o,d("memory_used_perc")),disk:De(o,d("disk_used_perc")),load:De(o,d("load_1m")),vmsOn:De(o,d("qemu_on")),lxcOn:De(o,d("lxc_on")),updates:De(o,d("updates_total")),failedTasks:De(o,d("failed_tasks_count")),entity:c})}else if(d("cpu_used")&&(d("b:status")||d("status_raw"))){let c=d("b:status")??d("status_raw"),u=o.states[c],p=c===d("b:status")?(u==null?void 0:u.state)==="on":(u==null?void 0:u.state)==="running",h=((i=(r=o.devices)==null?void 0:r[s])==null?void 0:i.model)??"",f=qr(yo(o,s)),m=/lxc/i.test(h)||/^lxc\b/i.test(yo(o,s))?"lxc":"vm",g=d("memory_used")?o.states[d("memory_used")]:void 0,_=d("uptime")?o.states[d("uptime")]:void 0,y=d("ip_address")?o.states[d("ip_address")]:void 0;t.push({deviceId:s,name:f.name,vmid:f.vmid,kind:m,running:p,cpu:p?De(o,d("cpu_used")):null,memory:p?De(o,d("memory_used_perc")):null,memoryUsed:p&&wo(g)?`${Number(g.state).toFixed(1)} ${g.attributes.unit_of_measurement??""}`.trim():null,disk:De(o,d("disk_used_perc")),ip:wo(y)?y.state:null,since:p&&wo(_)?_.state:null,problem:((a=o.states[d("b:health")??""])==null?void 0:a.state)==="on",entity:c})}else{let c=[...l].filter(([u])=>u==="b:health"||u.startsWith("b:health#")).map(([,u])=>u);c.length&&[...l.keys()].some(u=>u.startsWith("disk_size"))&&n.push({deviceId:s,name:yo(o,s),health:c})}}return t.sort((s,l)=>(s.vmid??1e9)-(l.vmid??1e9)||s.name.localeCompare(l.name)),{nodes:e,instances:t,disks:n}}function wl(o){return[...o.nodes.map(e=>e.entity),...o.instances.map(e=>e.entity),...o.disks.flatMap(e=>e.health)]}var bl=new Set;function xl(o){let e=[];for(let t of o.instances)t.running?bl.add(t.deviceId):bl.has(t.deviceId)&&e.push(t);return e}var _l=new Set;function kl(o,e){var n;let t=[];for(let r of e.disks)for(let i of r.health){let a=(n=o.states[i])==null?void 0:n.state;a==="off"?_l.add(i):a==="on"&&_l.has(i)&&t.push({disk:r,entity:i})}return t}function $l(o,e=Date.now()){let t=Math.max(0,(e-Date.parse(o))/1e3);if(!Number.isFinite(t))return"\u2013";let n=Math.floor(t/86400),r=Math.floor(t%86400/3600),i=Math.floor(t%3600/60);return n?`${n} d ${r} h`:r?`${r} h ${i} min`:`${i} min`}var Bu=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),Ml={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function Wr(o,e,t){let n=[];for(let p of e.floors)for(let h of p.rooms){let f=ge(o,h.area_id).filter(m=>{var g;return m.startsWith("binary_sensor.")&&!!Ml[String((g=o.states[m])==null?void 0:g.attributes.device_class)]});f.length&&n.push({floorId:p.id,roomId:h.id,sensors:f})}let r=Object.keys(o.states),i=e.settings.rain_warning===!1?null:xt(o,t??e.settings.weather_entity),a=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,s=V("household")?e.floors.flatMap(p=>p.furniture.filter(h=>(h.type==="fridge"||h.type==="fridge_smart")&&at(h).length).map(h=>{var f;return{floorId:p.id,roomId:((f=p.rooms.find(m=>m.points.length>=3&&B([h.x,h.z],m.points)))==null?void 0:f.id)??null,furnitureId:h.id,ids:at(h)}})):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,d=l&&o.states[l]?l:null,c=wl(Tn(o)),u=c.length?{ids:c,...Uu(e)}:null;return{rooms:n,alarms:r.filter(p=>p.startsWith("alarm_control_panel.")),weather:i,outage:a,rain:d,fridges:s,proxmox:u}}function Uu(o){for(let e of o.floors){let t=e.furniture.find(r=>r.type.endsWith(":server_rack")),n=t?e.rooms.find(r=>r.points.length>=3&&B([t.x,t.z],r.points)):void 0;if(t)return{roomId:(n==null?void 0:n.id)??null,floorId:e.id}}return{roomId:null,floorId:null}}function Br(o){var e;return[...o.rooms.flatMap(t=>t.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(t=>t.ids),...((e=o.proxmox)==null?void 0:e.ids)??[]]}function Sl(o,e,t,n){var s,l,d;let r=[];for(let c of t.rooms)for(let u of c.sensors){let p=o.states[u];(p==null?void 0:p.state)==="on"&&r.push({kind:Ml[String(p.attributes.device_class)],entity:u,roomId:c.roomId,floorId:c.floorId})}let i=t.rain?Cr(o,t.rain):null;if(i!==null?i>0:!!t.weather&&Bu.has(((s=o.states[t.weather])==null?void 0:s.state)??""))for(let c of e.floors)for(let u of c.openings){if(u.type!=="window"||u.rain_ignore)continue;let p=n.get(u.id);if(!p)continue;let h=We(o,p,"window");h.open<.5&&h.tilt<.5&&h.open2<.5&&h.tilt2<.5||r.push({kind:"window_rain",entity:p.contact??p.tilt??p.contact2??u.id,roomId:u.room_id,floorId:c.id})}t.outage&&go(o.states[t.outage])&&r.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null});for(let c of t.fridges??[]){let u=(l=e.floors.find(h=>h.id===c.floorId))==null?void 0:l.furniture.find(h=>h.id===c.furnitureId),p=u?vo(u,o):null;p&&r.push({kind:"fridge_door",entity:p,roomId:c.roomId,floorId:c.floorId})}if(t.proxmox){let{roomId:c,floorId:u}=t.proxmox,p=Tn(o);for(let h of p.nodes)h.online||r.push({kind:"pve_node_down",entity:h.entity,roomId:c,floorId:u});for(let h of kl(o,p))r.push({kind:"pve_disk",entity:h.entity,roomId:c,floorId:u});for(let h of xl(p))r.push({kind:"pve_stopped",entity:h.entity,roomId:c,floorId:u})}for(let c of t.alarms){let u=(d=o.states[c])==null?void 0:d.state;u==="triggered"?r.push({kind:"alarm",entity:c,roomId:null,floorId:null}):u==="pending"&&r.push({kind:"alarm_pending",entity:c,roomId:null,floorId:null})}return r}function El(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"pve_stopped":return[1,.62,.2];default:return[1,.2,.25]}}function Ur(o,e,t){let n=t.roomId?e.floors.flatMap(a=>a.rooms).find(a=>a.id===t.roomId):null;if(t.text!==void 0)return n?`${n.name} \xB7 ${t.text}`:t.text;let r=t.kind.startsWith("pve_")&&o?Ku(o,t):o?J(o,t.entity):t.entity,i=A(o,`alert_${t.kind}`,{name:r});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${A(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${i}`:i}function Ku(o,e){var i,a,s;let t=(a=(i=o.entities)==null?void 0:i[e.entity])==null?void 0:a.device_id,n=t?(s=o.devices)==null?void 0:s[t]:void 0,r=(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||J(o,e.entity);if(e.kind==="pve_node_down")return r.replace(/^node\s+/i,"");if(e.kind==="pve_stopped"){let l=qr(r);return l.vmid===null?l.name:`${l.name} (${l.vmid})`}return r}var He=.03,xo=o=>o&&o!=="none"?o:null;function Jt(o,e=t=>xo(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let i=e(r);if(r.type==="meter")t.grid??=i,t.gridExport??=xo(r.export);else if(r.type==="inverter"&&i&&!t.solar.includes(i))t.solar.push(i);else if(r.type==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let a=xo(r.charge);a&&!t.charge.includes(a)&&t.charge.push(a),(i||a)&&t.batteries.push({power:i,charge:a});let s=xo(r.soc);s&&!t.soc.includes(s)&&t.soc.push(s)}}return t}function Gr(o){for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}async function Rl(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),r=new Map;for(let i of e)r.set(i,((n==null?void 0:n[i])??[]).reduce((a,s)=>a+(typeof s.change=="number"?s.change:0),0));return r}catch{return null}}var Gu=.07;function ue(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function Yu(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function Rn(o,e){var i,a;if(Yu(o,e))return e;let t=(a=(i=o.entities)==null?void 0:i[e])==null?void 0:a.device_id;if(!t)return null;let n=us(o,t),r=n?yn(o,e):null;return gr(o,t).find(s=>s!==e&&(!n||r!==null&&yn(o,s)===r))??null}function Fl(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),r=[],i=new Set;for(let a of e.floors)for(let s of a.placements){let l=Rn(o,s.entity_id);!l||n.has(l)||i.has(l)||(i.add(l),r.push({id:s.entity_id,powerEntity:l,floorId:a.id,x:s.x,z:s.z,power:Math.max(0,ue(o.states[l])??0)}))}return r}function Hl(o,e,t,n=Jt(e)){let r=e.energy,i=r.grid??n.grid,a=i?ue(o.states[i],r.grid_invert):null;if(!r.grid&&n.gridExport){let m=Math.max(0,ue(o.states[n.gridExport])??0);a=Math.max(0,a??0)-m}let s=r.solar?ue(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let m=n.solar.map(g=>ue(o.states[g])).filter(g=>g!==null);s=m.length?m.reduce((g,_)=>g+_,0):null}let l=r.battery?ue(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let m=n.batteries.map(g=>{if(g.charge){let _=g.power?Math.max(0,ue(o.states[g.power])??0):0,y=Math.max(0,ue(o.states[g.charge])??0);return _-y}return g.power?ue(o.states[g.power],r.battery_invert):null}).filter(g=>g!==null);l=m.length?m.reduce((g,_)=>g+_,0):null}let c=(r.battery_soc?[r.battery_soc]:n.soc).map(m=>{var g;return Number((g=o.states[m])==null?void 0:g.state)}).filter(m=>Number.isFinite(m)),u=c.length?c.reduce((m,g)=>m+g,0)/c.length:NaN,p=r.tariff?o.states[r.tariff]:void 0,h=Number(p==null?void 0:p.state),f=r.consumption?ue(o.states[r.consumption]):null;return f!==null?f=Math.max(0,f):a!==null||s!==null||l!==null?f=Math.max(0,(a??0)+Math.max(0,s??0)+(l??0)):t.length&&(f=t.reduce((m,g)=>m+g.power,0)),{grid:a,solar:s===null?null:Math.max(0,s),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function Mt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function $t(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Qu(o,e){let t=o.length,n=o.map((r,i)=>{let a=o[(i+1)%t],s=a[0]-r[0],l=a[1]-r[1],d=Math.hypot(s,l)||1,c=-l/d,u=s/d;return{p:[r[0]+c*e[i],r[1]+u*e[i]],d:[s/d,l/d],n:[c,u]}});return o.map((r,i)=>{let a=n[(i-1+t)%t],s=n[i],l=a.d[0]*s.d[1]-a.d[1]*s.d[0];if(Math.abs(l)<1e-6)return[r[0]+s.n[0]*e[i],r[1]+s.n[1]*e[i]];let d=((s.p[0]-a.p[0])*s.d[1]-(s.p[1]-a.p[1])*s.d[0])/l;return[a.p[0]+a.d[0]*d,a.p[1]+a.d[1]*d]})}function Ju(o){return Ne(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function Yr(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:r}=Ut(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let i of o.rooms){if(i.points.length<3)continue;let{pts:a,flipped:s}=Ju(i),l=a.length,d=a.map((p,h)=>{let f=s?(l-2-h+l)%l:h,m=r.some(g=>!g.exterior&&g.sources.some(_=>_.room_id===i.id&&_.edge===f));return Gu+(m?t/2:0)}),c=Qu(a,d).map(p=>Mt(n,p)),u=c.map((p,h)=>[p,c[(h+1)%l]]);for(let[p,h]of u)$t(n,p,h);n.rings.set(i.id,u)}for(let i of r){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let a=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],s=ko(n,i.roomLeft,a),l=ko(n,i.roomRight,a);s!==null&&l!==null&&$t(n,s,l)}return n}function ko(o,e,t){let n=o.rings.get(e);if(!n)return null;let r=null;for(let a of n){let s=o.pos[a[0]],l=o.pos[a[1]],d=l[0]-s[0],c=l[1]-s[1],u=d*d+c*c||1,p=Math.min(1,Math.max(0,((t[0]-s[0])*d+(t[1]-s[1])*c)/u)),h=[s[0]+d*p,s[1]+c*p],f=Math.hypot(t[0]-h[0],t[1]-h[1]);(!r||f<r.d)&&(r={seg:a,q:h,d:f})}if(!r)return null;let i=Mt(o,r.q);return $t(o,i,r.seg[0]),$t(o,i,r.seg[1]),i}function $o(o,e,t){let n=o.pos[t],r=ko(o,e.id,n);if(r===null)return!1;let i=o.pos[r],a=o.pos[o.adj[r][0].to],s=o.pos[o.adj[r][1].to],l=Math.hypot(s[0]-a[0],s[1]-a[1])||1,d=[(s[0]-a[0])/l,(s[1]-a[1])/l],c=(n[0]-i[0])*d[0]+(n[1]-i[1])*d[1],u=(n[1]-i[1])*d[0]-(n[0]-i[0])*d[1];if(Math.abs(c)<.01||Math.abs(u)<.01)return $t(o,t,r),!0;let p=[i[0]+d[0]*c,i[1]+d[1]*c],h=[i[0]-d[1]*u,i[1]+d[0]*u],f=Mt(o,B(h,e.points)||!B(p,e.points)?h:p);return $t(o,r,f),$t(o,f,t),!0}function Cn(o,e){let t=o.rooms.filter(i=>i.points.length>=3),n=t.find(i=>B(e,i.points));if(n)return n;let r=null;for(let i of t)for(let a of i.points){let s=Math.hypot(e[0]-a[0],e[1]-a[1]);(!r||s<r.d)&&(r={room:i,d:s})}return(r==null?void 0:r.room)??null}function jl(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),r=o.pos.map(()=>!1);for(t[e]=0;;){let i=-1;for(let a=0;a<t.length;a++)!r[a]&&t[a]<1/0&&(i<0||t[a]<t[i])&&(i=a);if(i<0)break;r[i]=!0;for(let{to:a,w:s}of o.adj[i])t[i]+s<t[a]-1e-9&&(t[a]=t[i]+s,n[a]=i)}return{dist:t,prev:n}}function Pl(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Al=new WeakMap;function Xu(o,e){let t=Gr(o),n=o.floors.find(c=>c.id===t.floor_id),r=[],{wall_exterior:i,wall_interior:a}=o.settings,s=new Map,l=new Map;e.forEach((c,u)=>l.set(c.floorId,[...l.get(c.floorId)??[],u]));let d=o.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let u=c.elevation>n.elevation,p=l.get(c.id),h=Pl(p,e);r.push({floorId:n.id,a:[t.x,He,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:p,kind:h});let f=Math.abs(c.elevation-n.elevation);r.push({floorId:c.id,a:[t.x,u?-.2:c.height,t.z],b:[t.x,He,t.z],dist:f,members:p,kind:h}),s.set(c.id,f+.25)}for(let c of d){let u=Yr(c,i,a),p=Cn(c,[t.x,t.z]);if(!p)continue;let h=Mt(u,[t.x,t.z]);if(!$o(u,p,h))continue;let f=[];for(let x of l.get(c.id)){let M=e[x],b=Cn(c,[M.x,M.z]);if(!b)continue;let T=Mt(u,[M.x,M.z]);$o(u,b,T)&&f.push({node:T,member:x})}let{dist:m,prev:g}=jl(u,h),_=new Map;for(let x of f)if(Number.isFinite(m[x.node]))for(let M=x.node;g[M]>=0;M=g[M]){let b=g[M],T=`${b}>${M}`,z=_.get(T)??{a:b,b:M,members:[]};z.members.push(x.member),_.set(T,z)}let y=s.get(c.id)??0;for(let{a:x,b:M,members:b}of _.values()){let T=u.pos[x],z=u.pos[M],H=Pl(b,e);r.push({floorId:c.id,a:[T[0],He,T[1]],b:[z[0],He,z[1]],dist:y+m[x],members:b,kind:H})}}return r}function Dl({building:o,consumers:e,summary:t,battery:n,fieldPower:r,devicePower:i}){var E;let a=Gr(o);if(!a)return[];let s=o.floors.find(w=>w.id===a.floor_id);if(!s)return[];let l=w=>i==null?void 0:i.get(w),d=Kr(o,"inverter"),c=Kr(o,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=w=>{let $=null;for(let P of d)P.floorId===w.floorId&&(!$||Math.hypot(P.x-w.x,P.z-w.z)<Math.hypot($.x-w.x,$.z-w.z))&&($=P);return $},p=w=>l(w.id)??(c.length===1?t.battery??0:0),h=new Map;for(let w of c){let $=u(w);$&&h.set(w.id,$)}let f=e.map(w=>({floorId:w.floorId,x:w.x,z:w.z,kind:w.wallbox?"wallbox":"consumer",power:w.power}));for(let w of c)!h.has(w.id)&&t.battery!==null&&f.push({floorId:w.floorId,x:w.x,z:w.z,kind:"battery",power:Math.abs(p(w))});let m=`${a.floor_id}:${a.x},${a.z}|${f.map(w=>`${w.floorId}:${w.x},${w.z}:${w.kind}`).join(";")}`,g=Al.get(o);g||Al.set(o,g=new Map);let _=g.get(m);_||(_=Xu(o,f),g.clear(),g.set(m,_));let y=_.map(w=>({floorId:w.floorId,a:w.a,b:w.b,dist:w.dist,power:w.members.reduce(($,P)=>$+f[P].power,0),kind:w.kind})),x=t.grid!==null?Qr(o):null,M=o.settings.roof.cables??[],b=w=>M.find($=>$.id===w),T=(w,$)=>w.map(P=>({...P,key:$}));if(x){let w=t.grid>=0,$=b("grid"),P=$?zn(o,$,[x.end[0],s.elevation+Math.max(He,x.height),x.end[1]],[a.x,s.elevation+.4+1.1,a.z]):[...x.height>.05?[[x.end[0],x.height,x.end[1]]]:[],[x.end[0],He,x.end[1]],[x.wall[0],He,x.wall[1]],[a.x,He,a.z]],C=$?Qt(o,w?P:[...P].reverse(),Math.abs(t.grid),w?"grid":"export",s):Ll(s.id,w?P:[...P].reverse(),Math.abs(t.grid),w?"grid":"export",0);y.push(...T(C,"grid"))}if(t.battery!==null&&t.battery>0)for(let w of y)w.kind==="battery"&&([w.a,w.b]=[w.b,w.a]);let z=o.settings.roof.solar??[],H=o.settings.roof.strings??[],U=new Map;if(r&&z.length){let w=[...Kt(o),...In(o)];for(let $ of z){let P=r.get($.id)??0,C=$.string?(E=H.find(oe=>oe.id===$.string))==null?void 0:E.inverter:null,N=C?c.find(oe=>oe.id===C)??null:null,q=C&&!N?d.find(oe=>oe.id===C)??null:null;if(N){let oe=h.get(N.id);oe&&U.set(oe.id,(U.get(oe.id)??0)+P);let K=N.variant==="wall"?.5+N.h:.9,re=b(`solar:${$.id}`),Te=re?zl(o,$):null,Qe=o.floors.find(st=>st.id===N.floorId);re&&Te&&Qe?y.push(...T(Qt(o,zn(o,re,Te,[N.x,Qe.elevation+K,N.z]),P,"solar",Qe),`solar:${$.id}`)):y.push(...T(Cl(o,$,P,N,K),`solar:${$.id}`));continue}if(!q&&d.length){let oe=yt(o,$,w),K=oe?Js(oe,$):[$.u,$.v];q=d.reduce((re,Te)=>!re||Math.hypot(Te.x-K[0],Te.z-K[1])<Math.hypot(re.x-K[0],re.z-K[1])?Te:re,null)}q&&U.set(q.id,(U.get(q.id)??0)+P);let Q=q??{floorId:a.floor_id,x:a.x,z:a.z},D=q?1.1+q.h:1.5,ne=b(`solar:${$.id}`),L=ne?zl(o,$):null,ee=o.floors.find(oe=>oe.id===Q.floorId);ne&&L&&ee?y.push(...T(Qt(o,zn(o,ne,L,[Q.x,ee.elevation+D,Q.z]),P,"solar",ee),`solar:${$.id}`)):y.push(...T(Cl(o,$,P,Q,D),`solar:${$.id}`))}}else t.solar!==null&&!d.length&&y.push({floorId:s.id,a:[a.x+.08,s.height+.6,a.z+.08],b:[a.x+.08,He,a.z+.08],dist:0,power:t.solar,kind:"solar"});for(let w of d){let $=1.1+w.h,P=c.filter(q=>h.get(q.id)===w),C=l(w.id);if(C===void 0){C=U.get(w.id)??(d.length===1?t.solar??0:0);for(let q of P)C+=p(q)}let N=o.floors.find(q=>q.id===w.floorId);if(t.solar!==null||t.battery!==null){let q=b(`inv:${w.id}`),Q=q&&N?Qt(o,zn(o,q,[w.x,N.elevation+$,w.z],[a.x,s.elevation+1.5,a.z]),Math.max(0,C),"inverter",N):Tl(o,w,$,{floorId:a.floor_id,x:a.x,z:a.z},1.5,Math.max(0,C),"inverter",0);y.push(...T(Q,`inv:${w.id}`))}for(let q of P){let Q=p(q);if(t.battery===null&&l(q.id)===void 0)continue;let D=q.variant==="wall"?.5+q.h:.9,ne=b(`bat:${q.id}`),L=ne&&N?Qt(o,zn(o,ne,[w.x,N.elevation+$-.1,w.z],[q.x,N.elevation+D,q.z]),Math.abs(Q),"battery",N):Tl(o,w,$-.1,q,D,Math.abs(Q),"battery",0);y.push(...T(Q<=0?L:L.map(ee=>({...ee,a:ee.b,b:ee.a})).reverse(),`bat:${q.id}`))}}return y}function Qr(o){var h;let e=Gr(o),t=e?o.floors.find(f=>f.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:r}=o.settings,{walls:i}=Ut(t.rooms,{exterior:n,interior:r},t.walls??[]),a=Kr(o,"grid_point")[0],s=i.filter(f=>f.exterior);if(a){let f=null;for(let _ of s){let y=_.b[0]-_.a[0],x=_.b[1]-_.a[1],M=a.x-e.x,b=a.z-e.z,T=M*x-b*y;if(Math.abs(T)<1e-9)continue;let z=((_.a[0]-e.x)*x-(_.a[1]-e.z)*y)/T,H=((_.a[0]-e.x)*b-(_.a[1]-e.z)*M)/T;if(z<=0||z>1||H<0||H>1||f&&z>=f.t)continue;let U=Math.hypot(y,x)||1;f={q:[e.x+M*z,e.z+b*z],out:[x/U,-y/U],t:z}}let m=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[e.x,e.z],g=((h=o.floors.flatMap(_=>_.furniture).find(_=>_.id===a.id))==null?void 0:h.mount_y)??0;return{floorId:t.id,wall:m,end:[a.x,a.z],height:Math.max(0,g)}}let l=null;for(let f of s){let m=f.b[0]-f.a[0],g=f.b[1]-f.a[1],_=m*m+g*g||1,y=Math.min(1,Math.max(0,((e.x-f.a[0])*m+(e.z-f.a[1])*g)/_)),x=[f.a[0]+m*y,f.a[1]+g*y],M=Math.hypot(e.x-x[0],e.z-x[1]),b=Math.sqrt(_);(!l||M<l.d)&&(l={q:x,out:[g/b,-m/b],d:M})}if(!l)return null;let{q:d,out:c}=l,u=0;for(let f of o.floors)for(let m of f.outdoor??[]){let g=m.points.length;for(let _=0;_<g;_++){let y=m.points[_],x=m.points[(_+1)%g],M=x[0]-y[0],b=x[1]-y[1],T=c[0]*b-c[1]*M;if(Math.abs(T)<1e-9)continue;let z=((y[0]-d[0])*b-(y[1]-d[1])*M)/T,H=((y[0]-d[0])*c[1]-(y[1]-d[1])*c[0])/T;z>0&&H>=0&&H<=1&&(u=Math.max(u,Math.min(15,z)))}}let p=u>n+1?u:n+2.5;return{floorId:t.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*p,d[1]+c[1]*p],height:0}}function Kr(o,e){let t=[];for(let n of o.floors)for(let r of n.furniture)r.type===e&&t.push({id:r.id,type:r.type,floorId:n.id,x:r.x,z:r.z,h:r.h,variant:r.variant??null});return t}var Il=new WeakMap;function Ol(o,e,t,n){let r=`${e.id}:${t.join(",")}>${n.join(",")}`,i=Il.get(o);i||Il.set(o,i=new Map);let a=i.get(r);if(a)return a;let{wall_exterior:s,wall_interior:l}=o.settings,d=Yr(e,s,l),c=[t,n],u=Cn(e,t),p=Cn(e,n);if(u&&p){let h=Mt(d,t),f=Mt(d,n);if($o(d,u,h)&&$o(d,p,f)){let{dist:m,prev:g}=jl(d,h);if(Number.isFinite(m[f])){c.length=0;for(let _=f;_>=0;_=g[_])c.unshift(d.pos[_])}}}return i.set(r,c),c}function Tl(o,e,t,n,r,i,a,s){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let d=Ol(o,l,[e.x,e.z],[n.x,n.z]),c=[[e.x,t,e.z],...d.map(u=>[u[0],He,u[1]]),[n.x,r,n.z]];return Ll(l.id,c,i,a,s)}function Ll(o,e,t,n,r){let i=[];for(let a=0;a+1<e.length;a++){let s=e[a],l=e[a+1],d=Math.hypot(l[0]-s[0],l[1]-s[1],l[2]-s[2]);d<1e-4||(i.push({floorId:o,a:s,b:l,dist:r,power:t,kind:n}),r+=d)}return i}function zn(o,e,t,n){let r=o.floors.find(a=>a.id===e.floor_id),i=((r==null?void 0:r.elevation)??0)+Math.max(He,e.height);return[t,...e.points.map(a=>[a[0],i,a[1]]),n]}function zl(o,e){let t=yt(o,e,[...Kt(o),...In(o)]);if(!t)return null;let[n,r]=wt(t,e),i=e.u+n/2,a=t.unbounded?e.v+r/2:e.v;return[t.o[0]+t.eu[0]*i+t.es[0]*a,t.o[1]+t.eu[1]*i+t.es[1]*a,t.o[2]+t.eu[2]*i+t.es[2]*a]}function Zu(o,e,t){let{wall_exterior:n,wall_interior:r}=o.settings,i=Yr(e,n,r),a=Cn(e,t),s=a?ko(i,a.id,t):null;return s===null?t:i.pos[s]}function Qt(o,e,t,n,r){let i=[...o.floors].sort((d,c)=>d.elevation-c.elevation),a=d=>{let c=r;for(let u of i)d>=u.elevation-.01&&(c=u);return c},s=[],l=0;for(let d=0;d+1<e.length;d++){let c=e[d],u=e[d+1];if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-c[1])>.01){let f=Math.min(c[1],u[1]),m=Math.max(c[1],u[1]);for(let g of i)g.elevation>f+.01&&g.elevation<m-.01&&h.push(g.elevation);u[1]<c[1]&&h.reverse()}for(let f of[...h,u[1]]){let m=(f-c[1])/(u[1]-c[1]||1),g=Math.abs(u[1]-c[1])>.01?[c[0]+(u[0]-c[0])*m,f,c[2]+(u[2]-c[2])*m]:u,_=a((c[1]+g[1])/2),y=Math.hypot(g[0]-c[0],g[1]-c[1],g[2]-c[2]);y>1e-4&&s.push({floorId:_.id,a:[c[0],c[1]-_.elevation,c[2]],b:[g[0],g[1]-_.elevation,g[2]],dist:l,power:t,kind:n}),l+=y,c=g}}return s}function Cl(o,e,t,n,r){let i=[...Kt(o),...In(o)],a=yt(o,e,i),s=o.floors.find(g=>g.id===n.floorId);if(!a||!s)return[];let[l,d]=wt(a,e),c=(g,_)=>[a.o[0]+a.eu[0]*g+a.es[0]*_,a.o[1]+a.eu[1]*g+a.es[1]*_,a.o[2]+a.eu[2]*g+a.es[2]*_],u=e.u+l/2,p=s.elevation+He,h=[],f;if(a.unbounded){let g=c(u,e.v+d/2);f=[g[0],p,g[2]],h.push(f)}else if(a.wall){let g=c(u,e.v);f=[g[0],p,g[2]],h.push(g,f)}else{let g=c(u,e.v),_=Pr(o)??s,y=Math.max(s.elevation+.5,Math.min(g[1]-.25,_.elevation+_.height-.12));f=[g[0],y,g[2]],h.push(g)}let m=Zu(o,s,[f[0],f[2]]);h.push([m[0],f[1],m[1]]),Math.abs(f[1]-p)>.05&&h.push([m[0],p,m[1]]);for(let g of Ol(o,s,m,[n.x,n.z]).slice(1))h.push([g[0],p,g[1]]);return h.push([n.x,s.elevation+r,n.z]),Qt(o,h,t,"solar",s)}function Vl(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),r=new Array(n).fill(0),i=-1;for(let s of Object.values(o))for(let l of s){let d=typeof l.start=="number"?l.start:Date.parse(l.start),c=Math.floor((d-t.getTime())/3e5);c<0||c>=n||typeof l.mean!="number"||(r[c]+=Math.max(0,l.mean),i=Math.max(i,c))}return r.length=Math.max(i+1,n-3,1),{kwh:r.reduce((s,l)=>s+l*5/60/1e3,0),peak:Math.max(0,...r),curve:r}}async function Nl(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function Jr(o,e){let n=l=>42-(e>0?l/e*36:0),r=o.map((l,d)=>[d/288*220,n(l)]),i=r.map(([l,d],c)=>`${c?"L":"M"}${l.toFixed(1)} ${d.toFixed(1)}`).join(" "),[a,s]=r[r.length-1];return{line:i,area:`${i} L${a.toFixed(1)} 44 L0 44 Z`,endX:a,endY:s}}function ql(o){var e;return Math.max(1,o.rows*o.cols-(((e=o.skip)==null?void 0:e.length)??0))}var ep=400;function Wl(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let r=Math.min(1,(e.get(n.id)??0)/(ql(n)*(n.wp??ep)));t.set(n.id,r>.003?Math.pow(r,.6):0)}return t}function Bl(o,e,t){let n=new Map,r=e.settings.roof.solar??[],i=e.settings.roof.strings??[],a=ql,s=[],l=0,d=new Map;for(let p of r){let h=p.entity&&p.entity!=="none"?ue(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let f=p.string?i.find(g=>g.id===p.string):void 0,m=f!=null&&f.entity&&f.entity!=="none"?ue(o.states[f.entity]):null;if(f&&m!==null){d.set(f.id,[...d.get(f.id)??[],p]);continue}s.push(p)}for(let[p,h]of d){let f=i.find(_=>_.id===p),m=Math.max(0,ue(o.states[f.entity])??0),g=h.reduce((_,y)=>_+a(y),0);for(let _ of h)n.set(_.id,m*a(_)/g);l+=m}let c=Math.max(0,(t??0)-l),u=s.reduce((p,h)=>p+a(h),0);for(let p of s)n.set(p.id,u?c*a(p)/u:0);return n}var Oe={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Ul(o,e){if(o==="grid")return Oe.import;if(o==="export")return Oe.export;if(o==="solar")return Oe.solar;if(o==="battery")return Oe.battery;if(o==="wallbox")return Oe.wallbox;if(o==="inverter")return(e.solar??0)>5?Oe.solar:Oe.battery;let t=[[Math.max(0,e.grid??0),Oe.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),Oe.solar],[Math.max(0,e.battery??0),Oe.battery]],[n]=t.reduce((r,i)=>i[0]>r[0]?i:r);return n>0?t.find(r=>r[0]===n)[1]:Oe.house}var Xr=["neon","blueprint","day"],Fn={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Mo={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Kl(o,e){let t=Mo[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[r,i]=t[n],[a,s]=t[n-1];if(e<=r){let l=(e-a)/(r-a);return[s[0]+(i[0]-s[0])*l,s[1]+(i[1]-s[1])*l,s[2]+(i[2]-s[2])*l]}}return t[t.length-1][1]}function Gl(o,e,t){let n=new Map;for(let r of e.floors)for(let i of r.rooms){let a=Ze(o,r,i,t);a!==null&&n.set(i.id,a)}return n}function Yl(o){let e=Mo[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([r,i])=>`rgb(${i.map(a=>Math.round(a*255)).join(",")}) ${Math.round((r-t)/(n-t)*100)}%`).join(", ")})`}function ve(o,e){if(!ft(e))return A(o,`furn_${e}`);let t=ye(e);return t?Ea(t):A(o,"pack_missing_item")}var Eo=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function So(o){return o&&o!=="none"?o:null}function Xt(o,e){var i,a;if(e.type!=="parking")return null;let t=So(e.entity);if(t){let s=o.states[t];if(!s||!Eo.has(s.state.toLowerCase()))return null}let n=e.vehicle??null,r=So(e.type_entity);if(r&&((i=e.types)!=null&&i.length)){let s=(((a=o.states[r])==null?void 0:a.state)??"").trim().toLowerCase();if(s){let l=c=>c.trim().toLowerCase(),d=e.types.find(c=>l(c.state)===s)??e.types.find(c=>l(c.state)&&s.includes(l(c.state)));d&&(n=d.vehicle)}}return n&&ye(n)?n:null}function Zr(o,e){let t=new Map;for(let n of e.floors)for(let r of n.furniture){let i=Xt(o,r);i&&t.set(r.id,i)}return t}function Ql(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[So(t.entity),So(t.type_entity)])).filter(e=>!!e)}function Jl(o,e){let t=ye(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var Hn=1800*1e3,tp=new Set(["motion","occupancy","presence"]);function Xl(o,e){var t;return e.startsWith("binary_sensor.")&&tp.has(String((t=o.states[e])==null?void 0:t.attributes.device_class))}function jn(o,e){let t=[],n=new Set,r=(i,a,s,l)=>{n.has(i)||(n.add(i),t.push({entity:i,floorId:a,x:s,z:l}))};for(let i of e.floors)for(let a of i.placements)if(Xl(o,a.entity_id))r(a.entity_id,i.id,a.x,a.z);else if(j(a.entity_id)==="camera")for(let s of Ge(o,a.entity_id))r(s,i.id,a.x,a.z);for(let i of e.floors)for(let a of i.rooms){if(!a.area_id||a.points.length<3)continue;let[s,l]=Re(a.points);for(let d of ge(o,a.area_id))Xl(o,d)&&r(d,i.id,s,l)}return t}function Zl(o,e,t,n=Hn){let r=t-n,i=[];for(let[a,s]of Object.entries(o)){let l="";for(let d of s){let c=(d.lc??d.lu)*1e3;d.s==="on"&&l!=="on"&&c>=r&&c<=t&&i.push({entity:a,time:c}),l=d.s}}for(let a of e){let s=a.lastChanged??NaN;a.state!=="on"||!(s>=r&&s<=t)||i.some(l=>l.entity===a.entity&&Math.abs(l.time-s)<2e3)||i.push({entity:a.entity,time:s})}return i.sort((a,s)=>a.time-s.time)}function ec(o,e,t,n=Hn){let r=new Map(o.map(a=>[a.entity,a])),i=[];for(let a of e){let s=r.get(a.entity);if(!s)continue;let l=i[i.length-1];l&&l.entity===a.entity&&a.time-l.time<6e4||i.push({...s,time:a.time,age:Math.min(1,Math.max(0,(t-a.time)/n))})}return i.slice(-40)}function Po(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit"})}var tc='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Ao=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Io(o,e){let t=[],n=bt(o,e.floors),r=e.floors.length>1;for(let i of e.floors){let a=(c,u)=>i.rooms.find(p=>p.points.length>=3&&B([c,u],p.points))??null,s=(c,u)=>{var p;return[(p=a(c,u))==null?void 0:p.name,r?i.name:null].filter(Boolean).join(" \xB7 ")};for(let c of i.rooms){if(c.points.length<3)continue;let[u,p]=Re(c.points);t.push({kind:"room",name:c.name,where:r?i.name:"",floorId:i.id,roomId:c.id,entity:null,icon:null,x:u,z:p,y:0})}let l=new Set,d=(c,u,p,h)=>{var f;l.has(c)||!o.states[c]||(l.add(c),t.push({kind:"device",name:J(o,c),where:s(u,p),floorId:i.id,roomId:((f=a(u,p))==null?void 0:f.id)??null,entity:c,icon:j(c),x:u,z:p,y:h}))};for(let c of i.placements)d(c.entity_id,c.x,c.z,c.y??Vt(j(c.entity_id)??"sensor",i.height,c.mount));for(let c of i.furniture){let u=n.get(c.id),p=(u==null?void 0:u.entity)??(u==null?void 0:u.power);p&&d(p,c.x,c.z,Math.min(i.height-.3,Math.max(.5,c.h)))}}return t}function nc(o,e,t=8){let n=Ao(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let r=o.filter(s=>{let l=Ao(`${s.name} ${s.where} ${s.entity??""}`);return n.every(d=>l.includes(d))}),i=Ao(e.trim()),a=s=>(Ao(s.name).startsWith(i)?0:2)+(s.kind==="room"?0:1);return r.sort((s,l)=>a(s)-a(l)||s.name.localeCompare(l.name)).slice(0,t)}var St=new Map,ei=new Map,oc=new Map;async function np(o,e){return o.callWS({type:"neonplan3d/modules/code",pack_id:e})}async function op(o,e){let t=await np(o,e.id);if(t.api!==1)return null;let n=URL.createObjectURL(new Blob([t.code],{type:"text/javascript"}));try{let i=(await import(n)).default;if(!i||i.api!==1||typeof i.id!="string")return null;let a=oc.get(e.id);a&&URL.revokeObjectURL(a),oc.set(e.id,n);let s={id:e.id,release:t.release,module:i};return St.set(e.id,s),s}catch(r){throw URL.revokeObjectURL(n),r}}async function ti(o,e){let t=new Map(e.filter(n=>n.module&&n.module.api===1).map(n=>[n.id,n]));for(let n of[...St.keys()])t.has(n)||St.delete(n);await Promise.all([...t.values()].map(n=>{let r=St.get(n.id);if(r&&r.release===(n.release??1))return Promise.resolve(r);let i=ei.get(n.id);return i||(i=op(o,n).catch(a=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,a),null)).finally(()=>ei.delete(n.id)),ei.set(n.id,i)),i}))}async function rc(o,e){for(let t of St.values())if(t.module.voice)try{let n=await t.module.voice(o,e);if(n)return n}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed on "${o}"`,n)}return null}function ic(o){return On(e=>{var t;return(t=e.scene)==null?void 0:t.call(e,o)})}function ac(o){return On(e=>{var t;return(t=e.cards)==null?void 0:t.call(e,o)})}function sc(o){return On(e=>{var t;return(t=e.alerts)==null?void 0:t.call(e,o)})}function lc(o){return On(e=>{var t;return(t=e.watched)==null?void 0:t.call(e,o)})}function cc(o){return On(e=>{var t;return(t=e.pools)==null?void 0:t.call(e,o)})}function Dn(){return St.size>0}function On(o){let e=[];for(let t of St.values())try{e.push(...o(t.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed`,n)}return e}var rp=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],ip=[2200,2700,3200,4e3,5e3,6500],ap=["hs","rgb","rgbw","rgbww","xy"],sp=4,dc=16,uc=32,lp=128;function oi(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>ap.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function ri(o){return((o.attributes.supported_features??0)&sp)!==0&&typeof o.attributes.current_position=="number"}var ni=class extends Se{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{j(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return v`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?v`<img src=${n} alt=${J(this.hass,this.entity)} />`:v`<span class="qm-note">${$e(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return A(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:J(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){xe(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,r)=>{let i=r/t*Math.PI*2-Math.PI/2;return v`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${n}</div>`})}renderLight(e){let t=oi(e),n=e.state==="on",r=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,i=t.color?rp.map(a=>v`<button class="qm-swatch" style="background:rgb(${a.join(",")})" aria-label=${`RGB ${a.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:a})}></button>`):t.temp?ip.map(a=>v`<button class="qm-swatch" style="background:${cp(a)}" aria-label=${`${a} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:a})}></button>`):[];return v`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${r} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?v`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,r))}
            aria-label=${this.t("brightness")}
            @change=${a=>this.call("light","turn_on",{brightness_pct:Number(a.target.value)})}
          />`:k}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",r=ri(e),i=(d,c,u,p=!1)=>v`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${c} @click=${u}>${d}</button>`,a=d=>t!==null&&Math.abs(t-d)<3,s=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),a(100)),...r?[75,50].map(d=>i(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),a(d))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),a(0)),...r?[25].map(d=>i(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),a(d))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return v`<div class="qm-ring">
        ${this.ring(s)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:$e(this.hass,e)}</b>
        </button>
      </div>
      ${r?v`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:k}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&lp&&n!==null?v`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(r.target.value)})}
      /></label>`:t&(dc|uc)?v`<div class="qm-tilt-buttons">
        ${t&dc?v`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:k}
        ${t&uc?v`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:k}
      </div>`:k}renderCar(e){let t=e.entities,n=(u,p,h,f={})=>{this.hass.callService(u,p,{entity_id:h,...f})},r=t.lock,i=!!r&&r.startsWith("lock."),a=u=>/^(switch|input_boolean|fan|light)\./.test(u),s=t.climate,l=!!s&&s.startsWith("climate."),d=t.charging&&a(t.charging)?t.charging:null,c=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return v`<p class="qm-car-line">${c||$e(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${i||r&&a(r)?v`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(i?n("lock","unlock",r):n("homeassistant","turn_off",r)):i?n("lock","lock",r):n("homeassistant","turn_on",r)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:k}
        ${s?v`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",s)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:k}
        ${d?v`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",d)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:k}
        ${!i&&!s&&!d?v`<p class="qm-note">${this.t("car_no_controls")}</p>`:k}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",r=e.state==="off"||e.state==="standby",i=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,a=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),s=typeof t.entity_picture=="string"?t.entity_picture:null;return v`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${s?`background-image:url(${s})`:""} @click=${()=>this.call("media_player",r?"turn_on":n?"media_pause":"media_play")}>
          <span>${r?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${a?v`<p class="qm-media-title">${a}</p>`:k}
      ${i!==null?v`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(i)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:k}
      ${this.renderPlay(e)}`}renderPlay(e){if(!V("sound"))return k;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return k;let r=e.attributes.source;return v`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(i=>v`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:i.type,media_content_id:i.content})}>
            ▶ ${i.label}
          </button>`)}
        ${t.map(i=>v`<button class="qm-chip ${i===r?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:i})}>${i}</button>`)}
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return v`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${$e(this.hass,e)}</b>
      </button>
    </div>`}render(){var r;let e=(r=this.hass)==null?void 0:r.states[this.entity];if(!e)return k;let t=j(this.entity),n=this.car?this.renderCar(this.car):Y(e)?v`<p class="qm-note">${$e(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&V("sound")?this.renderMedia(e):this.renderToggle(e);return v`<div class="qm" role="dialog" aria-label=${J(this.hass,this.entity)}>
      <div class="qm-title">${J(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Be,Ee`
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
    `]};function cp(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,r)=>Math.round(n+(r-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",ni);var dp=new URL(import.meta.url),up=new URL("./neonplan3d-3d.js?v=e00245ce6995",dp).href,pc;function Ln(){return pc??=import(up),pc}var ii;function ai(){let o=new URL("./neonplan3d-fun.js?v=d12bd9e68671",new URL(import.meta.url)).href;return ii??=import(o).catch(e=>{throw ii=void 0,e}),ii}function hc(o,e){let t=o.points,n=t[e],r=t[(e+1)%t.length],i=Math.hypot(r[0]-n[0],r[1]-n[1])||1,a=[(r[0]-n[0])/i,(r[1]-n[1])/i],s=[-a[1],a[0]],l=[(n[0]+r[0])/2,(n[1]+r[1])/2];B([l[0]+s[0]*.02,l[1]+s[1]*.02],t)||(s=[-s[0],-s[1]]);let d=[s[1],-s[0]];return{a:n,b:r,u:a,n:s,length:i,rightward:a[0]*d[0]+a[1]*d[1]>0}}function To(o,e){let t=e[0]-o.a[0],n=e[1]-o.a[1];return{s:t*o.u[0]+n*o.u[1],d:t*o.n[0]+n*o.n[1]}}function si(o,e,t){return[o.a[0]+o.u[0]*e+o.n[0]*t,o.a[1]+o.u[1]*e+o.n[1]*t]}var pp=.45;function fc(o,e){let t=[];for(let n of e.openings){if(n.wall)continue;let r=e.rooms.find(s=>s.id===n.room_id);if(!r||n.edge>=r.points.length)continue;let{s:i,d:a}=To(o,co(r,n.edge,n.offset));Math.abs(a)>.4||i<-.05||i>o.length+.05||t.push(hp(n,i))}return t}function hp(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function mc(o,e,t,n=pp){let r=[];for(let i of e.furniture){if(i.type==="stairwell"||i.type==="parking")continue;let a=B([i.x,i.z],t.points),s=mt(i).map(h=>To(o,h)),l=Math.min(...s.map(h=>h.d)),d=Math.min(...s.map(h=>h.s)),c=Math.max(...s.map(h=>h.s)),u=To(o,[i.x,i.z]);if(!a&&u.d<=0||u.d<=0||l>n||l<-.3||c<.02||d>o.length-.02)continue;let p=me(e,i);r.push({kind:"furniture",id:i.id,s0:d,s1:c,y0:p,y1:p+i.h,d:l})}return r}var gc=.3;function Vn(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,r=o.height??gc,i=[];if(o.heights)t&&i.push([t.x,t.y,t.z]),o.points.forEach(([a,s],l)=>{var d;return i.push([a,((d=o.heights)==null?void 0:d[l])??r,s])}),n&&i.push([n.x,n.y,n.z]);else{if(!t||!n)return[];i.push([t.x,t.y,t.z],[t.x,r,t.z]);for(let[a,s]of o.points)i.push([a,r,s]);i.push([n.x,r,n.z],[n.x,n.y,n.z])}return i.filter((a,s)=>s===0||li(a,i[s-1])>.001)}function li(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function zo(o){let e=0;for(let t=1;t<o.length;t++)e+=li(o[t-1],o[t]);return e}function Co(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[r,i]=[o[n-1],o[n]],a=li(r,i);if(!(a<1e-6)){if(t<=a||n===o.length-1){let s=Math.min(1,t/a),l=[(i[0]-r[0])/a,(i[1]-r[1])/a,(i[2]-r[2])/a];return{p:[r[0]+(i[0]-r[0])*s,r[1]+(i[1]-r[1])*s,r[2]+(i[2]-r[2])*s],dir:l,seg:n-1}}t-=a}}return null}function Et(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function fp(o,e){let{w:t,d:n,h:r}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,r*.55,0]:e==="pressure"?[t*.05,r*.9,0]:null;if(o.type==="pool_filter"){let i=Math.min(t,n)/2;if(o.variant==="side6"){let l=i+.08;return e==="pump"?[l,r*.6,0]:e==="return"?[l+.06,r*.48,0]:e==="waste"?[l,r*.36,0]:null}let a=r*.89,s=i*.45+.04;return e==="pump"?[-s,a,0]:e==="return"?[s,a,0]:e==="waste"?[0,a,-s]:null}if(o.type==="pool_heat_pump"){let i=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let a=e==="in"?r*.25:r*.45;return i==="back"?[e==="in"?-t*.15:t*.15,a,-n/2-.04]:[(i==="left"?-1:1)*(t/2+.04),a,-n*.2]}return null}function bc(o,e){let t=fp(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[r,i]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*r-t[2]*i,y:t[1],z:o.z+t[0]*i+t[2]*r}}function Nn(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}function vc(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}var ci=[.25,.7,1],mp=900;function yc(o,e,t,n=r=>r){let r=[];for(let i of o){let a=n(Vn(i,t),i);if(a.length<2)continue;let s=e.get(i.id),l=(s==null?void 0:s.color)??ci,d=0;for(let c=1;c<a.length;c++){let[u,p]=[a[c-1],a[c]],h=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]);h<.01||(r.push({floorId:i.floor_id,a:u,b:p,dist:d,power:s!=null&&s.active?mp:0,color:l}),d+=h)}}return r}function Ro(o,e,t){let n=t.pool??{},r=Ft(e,t);return i=>{var d,c;let{kind:a,id:s,port:l}=Et(i);if(a==="port"){let u=(d=n.ports)==null?void 0:d.find(h=>h.id===s);if(!u)return null;let p=u.kind==="skimmer"?r-(u.depth??0):u.kind==="drain"?bn(e,t)+.03:u.kind==="inlet"?r-(u.depth??.3):.02;return{x:u.x,z:u.z,y:p}}if(a==="joint"){let u=(c=n.joints)==null?void 0:c.find(p=>p.id===s);return u?Nn(u,l):null}if(a!=="dev")return null;for(let u of o.floors){let p=u.furniture.find(g=>g.id===s);if(!p||!Wa.includes(p.type))continue;let h=l?bc(p,l):null,f=u.elevation-e.elevation;if(h)return{...h,y:h.y+me(u,p)+f};let m=p.type==="pool_filter"?p.h*.88:p.type==="pool_dosing"?.95:p.type==="pool_valve"?Ba:p.type==="pool_pump"?.2:.3;return{x:p.x,z:p.z,y:m+me(u,p)+f}}return null}}function di(o,e,t,n){let r=c=>{var h,f,m;let{kind:u,id:p}=Et(c);return u==="port"?(m=(f=(h=t.pool)==null?void 0:h.ports)==null?void 0:f.find(g=>g.id===p))==null?void 0:m.kind:void 0},i=c=>r(c)==="drain",a=c=>r(c)==="inlet"||r(c)==="skimmer",s=c=>{if(c.length<2)return c;let u=c[0],p=ui(t,[u[0],u[2]]);if(!p)return c;let h=[u[0]+p[0]*.35,u[1],u[2]+p[1]*.35],f=1;for(;f<c.length&&Math.hypot(c[f][0]-u[0],c[f][2]-u[2])<.01;)f++;let m=c.slice(f).map(_=>[..._]);for(let _=0;_<m.length-1;_++){let y=(m[_][0]-u[0])*p[0]+(m[_][2]-u[2])*p[1];if(y>=.349999)break;m[_][0]+=p[0]*(.35-y),m[_][2]+=p[1]*(.35-y)}let g=m[0]??c[c.length-1];return[u,h,[h[0],g[1],h[2]],...m]},l=c=>{if(c.length<2)return c;let u=c[0];if(!B([u[0],u[2]],t.points))return c;let p=bn(n,t)-.15,h=c.findIndex((_,y)=>y>0&&Math.hypot(_[0]-u[0],_[2]-u[2])>.01);if(h<0)return c;let f=c[h],m=[f[0],f[2]];for(let _=0;_<t.points.length;_++){let y=t.points[_],x=t.points[(_+1)%t.points.length],M=gp([u[0],u[2]],[f[0],f[2]],y,x);M&&(m=M)}let g=Math.hypot(m[0]-u[0],m[1]-u[2])>1e-6?[m[0]+(m[0]-u[0])*.02,m[1]+(m[1]-u[2])*.02]:m;return[u,[u[0],p,u[2]],[g[0],p,g[1]],[g[0],f[1],g[1]],...c.slice(h)]},d=o;return e.from&&i(e.from)&&(d=l(d)),e.to&&i(e.to)&&(d=l([...d].reverse()).reverse()),e.from&&a(e.from)&&(d=s(d)),e.to&&a(e.to)&&(d=s([...d].reverse()).reverse()),d}function ui(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let i=0;i<t.length;i++){let a=t[i],s=t[(i+1)%t.length];n+=a[0]*s[1]-s[0]*a[1]}let r=null;for(let i=0;i<t.length;i++){let a=t[i],s=t[(i+1)%t.length],l=s[0]-a[0],d=s[1]-a[1],c=Math.hypot(l,d);if(c<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-a[0])*l+(e[1]-a[1])*d)/(c*c))),p=Math.hypot(a[0]+l*u-e[0],a[1]+d*u-e[1]),h=n>0?[d/c+0,-l/c+0]:[-d/c+0,l/c+0];(!r||p<r.d)&&(r={d:p,n:h})}return r?r.n:null}function gp(o,e,t,n){let r=[e[0]-o[0],e[1]-o[1]],i=[n[0]-t[0],n[1]-t[1]],a=r[0]*i[1]-r[1]*i[0];if(Math.abs(a)<1e-9)return null;let s=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/a,l=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/a;return s>=0&&s<=1&&l>=0&&l<=1?[o[0]+r[0]*s,o[1]+r[1]*s]:null}var ke=o=>Math.round(o*1e3)/1e3;var wc=-.3;function xc(o,e,t,n,r){var g;let i=[],a=[],s=_=>e(_),l=[],d=o.from,c=[];for(let _ of o.vias){if(_.kind!=="hole"){c.push(_.kind);continue}let y=t.find(z=>z.id===_.joint),x=s(d);if(!y||!x)continue;let M=s(`joint:${y.id}:inside`),b=s(`joint:${y.id}:outside`),T=_.dir?_.dir==="out":Math.hypot(x.x-M.x,x.z-M.z)<=Math.hypot(x.x-b.x,x.z-b.z);l.push({a:d,b:`joint:${y.id}:${T?"inside":"outside"}`,fits:c}),c=[],d=`joint:${y.id}:${T?"outside":"inside"}`}let u=o.to;if(u.length>1){let _=s(d),y=u.map(s).filter(x=>!!x);if(_&&y.length===u.length){let x=y.reduce((U,E)=>U+E.x,0)/y.length,M=y.reduce((U,E)=>U+E.z,0)/y.length,b=Math.hypot(_.x-x,_.z-M)||1,T=Math.min(1,b/2)/b,z=_.y<0||y.some(U=>U.y<0),H={id:r("joint"),kind:"tee",x:ke(x+(_.x-x)*T),z:ke(M+(_.z-M)*T),y:z?wc:ke(_.y)};a.push(H),l.push({a:d,b:`joint:${H.id}:in`,fits:c}),c=[],u.forEach((U,E)=>l.push({a:`joint:${H.id}:out${E+1}`,b:U,fits:[]})),u=[]}}u.length&&l.push({a:d,b:u[0],fits:c});let p=_=>{let{kind:y,id:x,port:M}=Et(_),b=y==="joint"?a.find(T=>T.id===x):void 0;return b?Nn(b,M):s(_)},h=_=>n(_)==="source",f=_=>n(_)==="sink",m=o.to.some(h)&&!h(o.from)||f(o.from)&&!o.to.some(f);for(let _ of l){let y=p(_.a),x=p(_.b);if(!y||!x)continue;let M=bp(y,x,_c(_.a,t),_c(_.b,t)),b={id:r("pipe"),from:_.a,to:_.b,floor_id:o.floorId,points:M.map(z=>[z[0],z[2]]),heights:M.map(z=>z[1])},T=zo(Vn(b,p));b.fittings=_.fits.map((z,H)=>({id:r("fit"),kind:z,at:ke(Math.min(T/2,.4+H*.25)),...z==="valve"?{open:!0}:{}})),m&&(b={...b,from:b.to,to:b.from,points:[...b.points].reverse(),heights:[...b.heights??[]].reverse(),fittings:(g=b.fittings)==null?void 0:g.map(z=>({...z,at:ke(Math.max(0,T-z.at))}))}),i.push(b)}return{pipes:i,joints:a}}function _c(o,e){let{kind:t,id:n,port:r}=Et(o),i=t==="joint"&&r==="outside"?e.find(a=>a.id===n):void 0;return(i==null?void 0:i.kind)==="wall"?[-(i.nx??0),-(i.nz??0)]:null}function bp(o,e,t=null,n=null){let r=o.y<0||e.y<0?wc:ke(Math.max(o.y,e.y)),i=[],[a,s]=[o.x,o.z];t&&([a,s]=[ke(a+t[0]*.5),ke(s+t[1]*.5)],i.push([a,ke(o.y),s]));let[l,d]=[e.x,e.z],c=[];return n&&([l,d]=[ke(l+n[0]*.5),ke(d+n[1]*.5)],c.push([l,ke(e.y),d])),i.push([ke(a),r,ke(s)]),Math.abs(l-a)>.01&&i.push([ke(l),r,ke(s)]),Math.abs(d-s)>.01&&i.push([ke(l),r,ke(d)]),i.push(...c),i.filter((u,p)=>p===0||Math.hypot(u[0]-i[p-1][0],u[1]-i[p-1][1],u[2]-i[p-1][2])>.001)}var kc=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function _p(o,e,t){var r,i;let n=kc(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let a of e.floors)for(let s of a.rooms)if([s.name,s.area_id??"",s.area_id?((i=(r=o.areas)==null?void 0:r[s.area_id])==null?void 0:i.name)??"":""].filter(Boolean).map(kc).includes(n))return{floorId:a.id,room:s};return null}function vp(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function $c(o,e){let t=[],n=new Map;for(let r of e.presence){let i=o.states[r.person];if(!i||!r.sensor||i.state!=="home"&&i.state!=="on")continue;let a=o.states[r.sensor];if(!a)continue;let s=_p(o,e,a.state);if(!s)continue;let l=n.get(s.room.id)??0;n.set(s.room.id,l+1);let[d,c]=Re(s.room.points),u=-Math.PI/2+.9+l*1.15,p=.75,h=i.attributes.friendly_name??r.person;t.push({id:r.person,name:h,initials:vp(h),picture:i.attributes.entity_picture??null,floorId:s.floorId,roomId:s.room.id,x:d+Math.cos(u)*p,z:c+Math.sin(u)*p})}return t}function Mc(o,e,t,n){let r=new Map,i=a=>{var s;return!!a&&((s=o.states[a])==null?void 0:s.state)==="on"};for(let a of e.floors){let s=new Set;for(let d of a.rooms)for(let c of ro(o,ge(o,d.area_id)))j(c)==="light"&&s.add(c);for(let d of a.placements)j(d.entity_id)==="light"&&s.add(d.entity_id);let l=a.openings.filter(d=>{let c=t.get(d.id);if(!c)return!1;if(d.type==="garage")return(We(o,c,"garage").cover??1)<.95;if(d.type==="door")return i(c.contact)||i(c.contact2??null);let u=We(o,c,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;r.set(a.id,{rooms:a.rooms.length,lightsOn:[...s].filter(d=>{var c;return((c=o.states[d])==null?void 0:c.state)==="on"}).length,open:l,persons:n.filter(d=>d.floorId===a.id).length})}return r}function Sc(o,e){let t=[e.rooms===1?A(o,"floor_rooms_one"):A(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(A(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(A(o,"floor_open",{n:e.open})),e.persons&&t.push(A(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}function Ec(o,e,t,n=12,r=180){let i=Math.max(r,e),a=Math.max(r*.5625,t),s={cols:1,tile:Math.min(i,a*16/9)};for(let l=1;l<=Math.max(1,o);l++){let d=Math.ceil(o/l),c=(i-n*(l-1))/l,u=(a-n*(d-1))/d*16/9,p=Math.min(c,u);(p>s.tile||l===1)&&(s={cols:l,tile:p})}if(s.tile<r){let l=Math.max(1,Math.floor((i+n)/(r+n)));return{cols:Math.min(l,Math.max(1,o)),tile:r}}return{cols:s.cols,tile:Math.floor(s.tile)}}function pi(o,e,t){var H,U,E,w;let n=[...t.openings.values()].flatMap($=>[$.cover,$.contact,$.tilt,$.contact2??null,$.tilt2??null,$.position??null,$.tiltAngle??null]),r=Fs(e),i=r.filter($=>j($)==="camera").flatMap($=>Ge(o,$)),a=r.map($=>Rn(o,$)),s=e.energy,l=e.presence.flatMap($=>[$.person,$.sensor]),d=e.floors.flatMap($=>$.rooms.flatMap(P=>ge(o,P.area_id).filter(C=>j(C)==="light"))),c=[...t.furniture.values()].flatMap($=>[$.entity,$.power]),u=e.floors.flatMap($=>$.furniture.flatMap(P=>[P.state_entity??null,P.state_entity2??null,P.color_entity??null])),p=e.floors.flatMap($=>$.furniture.flatMap(P=>[P.door_left??null,P.door_right??null,P.soc??null,P.status??null,P.charge??null,P.export??null])),h=(((H=e.settings.roof)==null?void 0:H.windows)??[]).flatMap($=>[$.cover,$.contact,$.tilt]).filter($=>!!$&&$!=="none"),f=[...(((U=e.settings.roof)==null?void 0:U.solar)??[]).map($=>$.entity),...(((E=e.settings.roof)==null?void 0:E.strings)??[]).map($=>$.entity)].filter($=>!!$&&$!=="none"),m=e.floors.flatMap($=>$.furniture.filter(P=>P.type==="robot_vacuum").map(P=>{var C;return xn(o,((C=t.furniture.get(P.id))==null?void 0:C.entity)??null,P.room_sensor)})),g=e.floors.flatMap($=>$.furniture.flatMap(P=>(P.pictures??[]).flatMap(C=>[C.entity,...C.image.startsWith("camera:")?[C.image.slice(7)]:[]]))),_=t.heat?e.floors.flatMap($=>$.rooms.flatMap(P=>ge(o,P.area_id).filter(C=>C.startsWith("sensor.")))):[],y=[...Ql(e.floors),...V("auto_pro")?ks(o,e.floors):[]],x=jn(o,e).map($=>$.entity),M=V("household")?[...e.floors.flatMap($=>$.furniture.flatMap(dl)),((w=e.settings.household)==null?void 0:w.notes)??null].filter($=>!!$&&$!=="none"):[],b=e.floors.flatMap($=>$.furniture.flatMap(P=>{var C,N;return P.type==="access_point"?Object.values(fn(o,{entity:((C=t.furniture.get(P.id))==null?void 0:C.entity)??P.entity})):P.type==="water_heater"?Object.values(gn(o,{entity:((N=t.furniture.get(P.id))==null?void 0:N.entity)??P.entity})):P.type==="lamp_ceiling_fan"?[P.fan_entity??null]:P.type==="wall_switch"?[...Dt(P),no(P)]:P.type==="wall_socket"?Ot(P).flatMap(q=>[q.entity,q.power]):[]})),T=xt(o,t.weatherEntityId??e.settings.weather_entity),z=[...b,...r,...i,...n,...a,...c,...u,...p,...m,...h,...f,...g,s.grid,s.solar,s.battery,s.battery_soc,s.consumption,s.tariff,...l,...d,..._,...t.warnings,...y,...x,...M,T,"sun.sun"];return[...new Set(z.filter($=>!!$))]}var Pc=/^#[0-9a-f]{3,8}$/i;function yp(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function Ac(o){if(!o||!o.kind)return null;let e=o.color&&Pc.test(o.color)?o.color:"#0b1426",t=o.color2&&Pc.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${t})`;let n=yp(o.image);if(!n)return null;let r=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${r}), rgba(4, 8, 16, ${r})), url("${n}") center / cover no-repeat`}var hi;function Zt(){let o=new URL("./neonplan3d-voice.js?v=c668ade22980",new URL(import.meta.url)).href;return hi??=import(o).catch(e=>{throw hi=void 0,e}),hi}function Fo(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("neonplan3d.mic","1"),sessionStorage.getItem("neonplan3d.mic")==="1"}catch{return!1}}function fi(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function mi(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function Ho(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function jo(){try{sessionStorage.removeItem("neonplan3d.mic")}catch{}}var wp=.25,Ic=o=>Math.round(o*1e3)/1e3;function gi(o,e,t,n,r){let i=o.rooms.find(a=>a.points.length>=3&&B([e,t],a.points));return!i||B([n,r],i.points)?[n,r]:B([n,t],i.points)?[n,t]:B([e,r],i.points)?[e,r]:[e,t]}function Tc(o,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let i=[(n[0]-t[0])/r,(n[1]-t[1])/r],a=l=>Math.abs(-(l[0]-t[0])*i[1]+(l[1]-t[1])*i[0]),s=l=>(l[0]-t[0])*i[0]+(l[1]-t[1])*i[1];return o.rooms.some(l=>l.id!==e&&l.points.some((d,c)=>{let u=l.points[(c+1)%l.points.length];return a(d)>.02||a(u)>.02?!1:Math.min(r,Math.max(s(d),s(u)))-Math.max(0,Math.min(s(d),s(u)))>.05}))}function zc(o,e,t,n=wp){let r=o.rooms.find(d=>d.points.length>=3&&B([e.x,e.z],d.points));if(!r)return null;let i=r.points,a=Ne(i)>=0?1:-1,s=t/2,l=null;for(let d=0;d<i.length;d++){let c=i[d],u=i[(d+1)%i.length],p=Math.hypot(u[0]-c[0],u[1]-c[1]);if(p<.3)continue;let h=[(u[0]-c[0])/p,(u[1]-c[1])/p],f=[-h[1]*a,h[0]*a],m=(e.x-c[0])*h[0]+(e.z-c[1])*h[1];if(m<0||m>p)continue;let _=o.rooms.some(H=>H.id!==r.id&&H.points.some((U,E)=>{let w=H.points[(E+1)%H.points.length],$=Math.abs((U[0]-c[0])*f[0]+(U[1]-c[1])*f[1]),P=Math.abs((w[0]-c[0])*f[0]+(w[1]-c[1])*f[1]);return $<.02&&P<.02}))?s:0,y=(e.x-c[0])*f[0]+(e.z-c[1])*f[1]-_,x=Math.atan2(-f[0],f[1])*180/Math.PI,M=H=>Math.abs((e.rotation-H+540)%360-180),T=[{rotation:x,extent:e.d/2},{rotation:x+90,extent:e.w/2},{rotation:x-90,extent:e.w/2}].reduce((H,U)=>M(U.rotation)<M(H.rotation)?U:H);if(M(T.rotation)>50)continue;let z=y-T.extent;Math.abs(z)>n||l&&Math.abs(z)>=Math.abs(l.gap)||(l={x:Ic(e.x-f[0]*z),z:Ic(e.z-f[1]*z),rotation:(Math.round(T.rotation)%360+360)%360,gap:z})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function xp(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var bi={walls(o,e,t){let n=o.floors.find(i=>i.id===e),r=n==null?void 0:n.rooms.find(i=>i.id===t);return!n||!r||r.points.length<3?[]:r.points.map((i,a)=>{let s=hc(r,a),l=Tc(n,r.id,s.a,s.b),d=[...mc(s,n,r).map(c=>[c.s0,c.s1]),...fc(s,n).filter(c=>c.y0<.05).map(c=>[c.s0,c.s1])];return{roomId:r.id,edge:a,a:s.a,b:s.b,u:s.u,n:s.n,length:s.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:d}})},onWall(o,e,t){return si(xp(o),e,t)},freeSpot(o,e,t=.1){let n=i=>i>=t&&i+e<=o.length-t&&!o.taken.some(([a,s])=>i<s+.05&&i+e>a-.05),r=o.length/2-e/2;for(let i=0;i<=o.length;i+=.05){if(n(r-i))return Math.round((r-i)*100)/100;if(n(r+i))return Math.round((r+i)*100)/100}return null},nodeAt(o,e,t){let n=o.floors.find(s=>s.id===e),r=n==null?void 0:n.outdoor.find(s=>s.id===t);if(!n||!r)return()=>null;let i=Ro(o,n,r),a=r.pool??{};return s=>{let{kind:l,id:d,port:c}=Et(s),u=l==="joint"?(a.joints??[]).find(h=>h.id===d):void 0;if(u)return Nn(u,c);let p=l==="port"?(a.ports??[]).find(h=>h.id===d):void 0;return p?i(s)??{x:p.x,y:.02,z:p.z}:i(s)}},connect(o,e,t,n,r,i){var l;let a=o.floors.find(d=>d.id===e),s=a==null?void 0:a.outdoor.find(d=>d.id===t);return!a||!s?{pipes:[],joints:[]}:xc({...n,floorId:e},bi.nodeAt(o,e,t),((l=s.pool)==null?void 0:l.joints)??[],r,i)}};var Cc={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},kp={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},$p=2e4,Mp=3*6e4,_i=new Set(["unavailable","unknown",""]),Sp="neonplan3d.director";function vi(){try{return localStorage.getItem(Sp)==="1"}catch{return!1}}function Fc(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var Ep=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Hc(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(t=>{let n=o.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let r=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return Ep.test(r)}).sort()}function yi(o,e,t=Date.now()){if(!o||!e||_i.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let n=Date.parse(e.state);return Number.isFinite(n)&&t-n<3e4}return o.state==="off"&&e.state==="on"}var Rc=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function jc(o,e,t=Date.now()){return!o||!e||_i.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?yi(o,e,t):_i.has(o.state)?!1:Rc.has(e.state)&&!Rc.has(o.state)}function Dc(o,e,t,n){var c;if(n)return n;let r=o.entities??{},i=(c=r[e])==null?void 0:c.device_id,a=t.filter(u=>u.startsWith("camera.")),s=i?a.find(u=>{var p;return((p=r[u])==null?void 0:p.device_id)===i}):void 0;if(s)return s;let l=u=>{var p,h,f,m;return((p=r[u])==null?void 0:p.area_id)??((m=(f=o.devices)==null?void 0:f[((h=r[u])==null?void 0:h.device_id)??""])==null?void 0:m.area_id)??null},d=l(e);return d&&a.find(u=>l(u)===d)||null}var qn=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,t,n){let r=this.seen.has(e),i=this.seen.get(e);return this.seen.set(e,t),r&&i!==t&&n(i,t)}stopped(e,t,n){let r=this.runs.get(e);return t?(r!=null&&r.run||this.runs.set(e,{run:!0,since:n,ran:!0}),!1):!r||r.run?(this.runs.set(e,{run:!1,since:n,ran:!!(r!=null&&r.run)}),!1):r.ran&&n-r.since>=Mp?(r.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,t,n=30){let r=this.shown.get(e.key);if(r!==void 0&&t-r<kp[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&t-this.touchedAt<$p)return!1;let a=this.current;if(a&&t<a.until&&Cc[a.shot.kind]>Cc[e.kind])return!1;let s=Math.min(600,Math.max(10,n))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:t,until:t+s,touched:!1},this.shown.set(e.key,t),!0}due(e){let t=this.current;return!t||e<t.until?null:(this.current=null,{shot:t.shot,back:!t.touched})}clear(){this.current=null}};function Lc(o,e){var t;return String(e&&((t=o.states[e])==null?void 0:t.attributes.unit_of_measurement)||"m\xB3")}function Ap(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${se(o,e*1e3,0)} l`:`${se(o,e,e<10?2:0)} ${t}`}var Ip=12e4,Vc={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},Tp='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',zp='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function Nc(o){return o.fan_entity&&o.fan_entity!=="none"?o.fan_entity:null}function Cp(o){if(!o||!qe(o))return 0;let e=o.attributes.percentage;return typeof e=="number"?Math.max(.15,e/100):1}var Rp=[.35,.95,1],Fp=[1,.3,.2];function qc(o,e,t){var n;return((n=o.rooms.find(r=>r.points.length>=3&&B([e,t],r.points)))==null?void 0:n.id)??null}function Hp(o,e){var n;let t=e.action==="more_info"?e.target:(n=e.data)==null?void 0:n.entity_id;return typeof t=="string"&&qe(o.states[t])}function jp(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Dp(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}var wi=class extends Se{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},proxmoxWall:{attribute:!1},_pveFilter:{state:!0},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},_voice:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;clockTimer;flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;resizeObs=null;unsubAsk=null;voiceTimer;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];finished=new _o;appliances=new Map;directing=new qn;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this._voice=null,this._micProbe=Fo(),this._alerts=[],this._household=[],this._hhFolded=jp("neonplan3d.hhFolded"),this._binInfo=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.proxmoxWall=!1,this._pveFilter="all",this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!(e!=null&&e.connection)||!this.isConnected||(this.unsubAsk=ga(e,t=>{this.onAsk(t)}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e==null||e.then(t=>t()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{var e;document.hidden||(e=this.holoRefetch)==null||e.call(this)};disconnectedCallback(){var e,t,n,r,i;super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),(e=this.pets)==null||e.dispose(),this.pets=null,this.petsFor=null,(t=this.ghost)==null||t.dispose(),this.ghost=null,(n=this.unlistenReplay)==null||n.call(this),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,(r=this.resizeObs)==null||r.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),(i=this.viewer)==null||i.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&Zt().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",t=>{var i,a;let n=t;if(!((a=(i=n.target)==null?void 0:i.closest)!=null&&a.call(i,".fp3d-holo")))return;let r=this.renderRoot.querySelector("canvas");r&&(n.preventDefault(),r.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{var r;let n=(((r=t[0])==null?void 0:r.contentRect.width)??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Ln();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",n=>{var r,i;this._central&&!((i=(r=n.target)==null?void 0:r.closest)!=null&&i.call(r,".fp3d-central, .fp3d-central-btn"))&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,r)=>this.fire("room-tap",{floorId:n,roomId:r}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?A(this.hass,"floor_rooms_one"):A(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,r,i)=>this.onDeviceTap(n,r,i),onDeviceHold:(n,r,i)=>this.onDeviceHold(n,r,i),onRoomDoubleTap:(n,r)=>this.onRoomDoubleTap(n,r),onDeviceSwipe:(n,r,i,a,s)=>this.onDeviceSwipe(n,r,i,a,s),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,r,i)=>this.fire("furniture-move",{id:n,x:r,z:i}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,r,i)=>this.fire("device-move",{id:n,x:r,z:i}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((n,r,i,a,s,l)=>this.placeHolo(n,r,i,a,s,l)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...mn()]),this.hass&&ti(this.hass,mn()).then(()=>this.syncDevices(!0)),this.shownPacks=zt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&Da(this.building??null),e.has("hass")&&this.hass&&ol(rl(this.hass))}updated(e){var i,a;e.has("hass")&&((i=this.live)!=null&&i.el)&&(this.live.el.hass=this.hass),e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==zt()&&(this.shownPacks=zt(),t.setPacks([...mn()]),this.hass&&ti(this.hass,mn()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&t.setParked(Zr(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let s=JSON.stringify(this.startViewOf()),l=this.shownStartView!==void 0&&this.shownStartView!==s;this.shownStartView=s,t.setStartView(this.startViewOf()),t.setBuilding(this.building),l&&this.floorId===null&&t.resetView()}(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(s=>e.has(s))||this.markerMode==="room"&&e.has("roomId"),r=this.replayTicked&&!!this.replay;this.replayTicked=!1,(n||e.has("hass")||r)&&this.syncDevices(n,r&&(this.trail||this.detecting)),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("angleLock")&&t.setAngleLock(this.angleLock),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("hideRoof")&&t.setHideRoof(this.hideRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.effectiveTheme()),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,(a=this.replay)==null||a.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e,t=!1){var Ai,Ii,Ti,zi,Ci,Ri,Fi,Hi,ji;let n=this.viewer,r=this.building;if(!n||!r||!this.hass)return;let i=this.hass;(e||!this.openingLinks||this.linkedRegistry!==i.entities)&&(this.openingLinks=Nt(i,r.floors),Cs(ys(i,r.floors)),this.furnitureLinks=bt(i,r.floors),this.linkedRegistry=i.entities,this.findIndex=null,this.alertSrc=this.alerts?Wr(i,r,this.weatherEntityId):null,this.watchHousehold(i,r),this.watched=pi(i,r,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?Br(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Dn()&&(this.watched=[...new Set([...this.watched,...lc(this.sceneHost(i,r))])]),e=!0);let a=e||t||this.watched.some(S=>this.shownStates.get(S)!==i.states[S]),s=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=((Ai=this.replay)==null?void 0:Ai.seek)??0,this.seenT=((Ii=this.replay)==null?void 0:Ii.t)??0,!a)return;let l=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(S=>[S,i.states[S]])),this.scene=Dn()?ic(this.sceneHost(i,r)):[];let d=Fl(i,r),c=Rs(i,r),u=this.furnitureMarkers(i,r,new Set(c.map(S=>S.id)),new Set(d.map(S=>S.powerEntity)));d.push(...u.consumers),this.lastConsumers=d;let p=Hl(i,r,d,Jt(r,S=>{var I,F;return((F=(I=this.furnitureLinks)==null?void 0:I.get(S.id))==null?void 0:F.power)??null})),h=new Map(d.filter(S=>S.id!==S.powerEntity).map(S=>[S.id,S.power]));this.confirmSet=qt(i,r.floors);let f=this.trail?this.trailNow(i,r):[],m=V("camera_cockpit")&&!this.dimmed?this.detectionPins(i,c):[];this.detecting=m.length>0;let g=V("energy_pro"),_=new Set(V("auto_pro")?r.floors.flatMap(S=>S.furniture.filter(I=>I.type==="parking"&&I.car&&Xt(i,I)).map(I=>I.id)):[]);n.setDevices([...[...c,...u.markers,...this.lockMarkers(i,r)].map(S=>{let I=S.show==="no_power"||"energyDevice"in S&&S.energyDevice?null:h.get(S.id)??null,F={...S,power:I,powerText:I===null?void 0:ce(i,I),effect:this.dimmed?!1:S.effect},G=S.ownName&&(S.showName||this.markerNames)?S.ownName:"",R=V("sound")&&this.mediaCardUp(i,S.id)||V("auto_pro")&&!!S.furnitureId&&_.has(S.furnitureId);return{...F,pin:this.showPin(F)&&!R,full:S.show==="always"||S.full===!0,caption:G}}),...(g&&(this.flows??this._flows)&&!this.dimmed&&p.grid!==null?[this.gridPin(i,r,p.grid)]:[]).filter(S=>!!S),...m,...f.map((S,I)=>({id:`trail:${I}`,floorId:S.floorId,roomId:null,x:S.x,z:S.z,y:.3+.4*f.slice(0,I).filter(F=>F.entity===S.entity).length,icon:tc,name:J(i,S.entity),text:Po(i,S.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),n.setTrail(f,this.replay?this.robotPaths(i,r):[]),n.setPickTargets(u.targets,this.openingTargets()),n.setScreens(u.screens),n.setFridgeDoors(yr(i,r.floors)),n.setAwnings(ws(i,r.floors)),n.setProjections(this.projectedCameras(i,r)),n.setRobots(this.robotInfos(i,r));let y=new Map;for(let S of((Ti=r.settings.roof)==null?void 0:Ti.windows)??[]){let I=W=>W&&W!=="none"?W:null,F=We(i,{cover:I(S.cover),contact:I(S.contact),tilt:I(S.tilt)},"window"),G=I(S.window)?i.states[I(S.window)]:void 0,R=F.open;if(G&&!Y(G)){let W=G.attributes.current_position;R=typeof W=="number"?Math.min(1,Math.max(0,W/100)):G.state==="open"||G.state==="opening"?1:0}y.set(S.id,{open:R,tilt:F.tilt,cover:F.cover??0})}n.setRoofWindows(y),n.setParked(Zr(i,r));let x=new Map(r.floors.flatMap(S=>S.openings.map(I=>[I.id,I.type]))),M=new Map([...this.openingLinks].map(([S,I])=>[S,We(i,I,x.get(S))]));n.setOpeningStates(M,s);let b=this.alertSrc?Sl(i,r,this.alertSrc,this.openingLinks):[],T=this.alerts&&Dn()?sc(this.sceneHost(i,r)).map(S=>({kind:S.kind,entity:S.entity,roomId:S.roomId,floorId:S.floorId,text:S.text,color:S.color,quiet:!S.roomId})):[];this.setAlerts([...b,...T]),clearTimeout(this.fridgeTimer);let z=V("household")&&!this.replay?ml(r.floors.flatMap(S=>S.furniture),i):null;z!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),z+500));let H=[...c,...u.markers].map(S=>`${S.id}:${S.glow?`${S.glow.level.toFixed(1)}/${S.glow.color.map(I=>I.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...M].map(([S,I])=>`${S}:${I.open}:${I.cover===null?"-":I.cover.toFixed(1)}`).join(";");if(H!==this.thumbSig){let S=this.thumbSig==="";this.thumbSig=H,S||this.scheduleThumbs(1500)}let U=r.floors.flatMap(S=>S.furniture.filter(I=>I.type==="home_battery").map(I=>({floorId:S.id,x:I.x,z:I.z})))[0]??(r.energy.battery?r.floors.flatMap(S=>S.placements.filter(I=>I.entity_id===r.energy.battery).map(I=>({floorId:S.id,x:I.x,z:I.z})))[0]:null),E=g?Bl(i,r,p.solar):null,w=r.settings.roof.hologram??Ke,$=[...r.settings.roof.solar??[]].sort((S,I)=>I.rows*I.cols-S.rows*S.cols),P=r.settings.roof.strings??[],C=S=>{var I;return(S.string?(I=P.find(F=>F.id===S.string))==null?void 0:I.inverter:null)??null},N=w.plant_floor?"all":"house",q=(S,I,F,G)=>{var Ce,rn;let R=yt(r,S);if(!R)return null;let[W,he]=wt(R,S),te=S.u+W/2+I,ae=S.v+he/2+F,be=[R.o[0]+R.eu[0]*te+R.es[0]*ae,R.o[1]+R.eu[1]*te+R.es[1]*ae,R.o[2]+R.eu[2]*te+R.es[2]*ae],_e=((Ce=R.wall)==null?void 0:Ce.floorId)??(R.unbounded?((rn=r.floors.find(Bn=>Bn.elevation===Math.min(...r.floors.map(lt=>lt.elevation))))==null?void 0:rn.id)??r.floors[0].id:[...r.floors].sort((Bn,lt)=>lt.elevation-Bn.elevation)[0].id);return{p:[be[0]+R.n[0]*.05,be[1]+R.n[1]*.05,be[2]+R.n[2]*.05],n:[R.n[0],R.n[1],R.n[2]],floorId:_e,size:G,roof:!0,views:N}},Q=[],D=[],ne=p.grid!==null||p.battery!==null||p.solar!==null,L=w.place==="free"&&Number.isFinite(w.x)&&Number.isFinite(w.z),ee=g&&p.solar!==null&&!L?$.find(S=>S.id===w.field)??$[0]:void 0,oe=ee?C(ee):null,K=!!ee&&!!oe&&!$.some(S=>S.id!==ee.id&&C(S)===oe)&&w.right===0&&w.up===0,re=(()=>{if(!K||!ee)return 0;let S=yt(r,ee);return S?wt(S,ee)[0]/2+1.2:0})(),Te=ee?q(ee,w.right+re,w.up,w.size):null,Qe=this.devicePowers(i,r),st=g&&p.solar!==null?r.energy.solar?[r.energy.solar]:Jt(r,S=>{var I,F;return((F=(I=this.furnitureLinks)==null?void 0:I.get(S.id))==null?void 0:F.power)??null}).solar:[];if(Te)Q.push(Te),D.push({kind:"main",name:A(i,"holo_title"),w:null,dayIds:st,battery:null});else if(g&&ne&&L){let S=0,I=0,F=0,G=1/0,R=r.floors[0];for(let ae of r.floors){ae.rooms.length&&(G=Math.min(G,ae.elevation)),ae.rooms.length&&(!R.rooms.length||ae.elevation+ae.height>R.elevation+R.height)&&(R=ae);for(let be of ae.rooms)for(let[_e,Ce]of be.points)S+=_e,I+=Ce,F++}F&&(S/=F,I/=F);let W=w.x-S,he=w.z-I,te=Math.hypot(W,he);Q.push({p:[w.x,(Number.isFinite(G)?G:0)+(w.height??3),w.z],n:te>.01?[W/te,0,he/te]:[1,0,0],floorId:R.id,size:w.size,roof:!0,views:N}),D.push({kind:"main",name:A(i,"holo_title"),w:null,dayIds:st,battery:null})}else if(g&&ne&&r.floors.some(S=>S.rooms.length)){let S=-1/0,I=1/0,F=-1/0,G=0,R=r.floors[0];for(let W of r.floors){for(let he of W.rooms)for(let[te,ae]of he.points)S=Math.max(S,te),I=Math.min(I,ae),F=Math.max(F,ae);W.rooms.length&&W.elevation+W.height>G&&(G=W.elevation+W.height,R=W)}Q.push({p:[S+.6,G+.4,(I+F)/2],n:[1,0,0],floorId:R.id,size:w.size,roof:!0,views:N}),D.push({kind:"main",name:A(i,"holo_title"),w:null,dayIds:st,battery:null})}if(g&&p.solar!==null){let S=new Set;for(let I of r.floors)for(let F of I.furniture.filter(G=>G.type==="inverter")){if(F.plant_card===!1||S.has(F.id))continue;S.add(F.id);let G=$.filter(be=>C(be)===F.id),R=(ee&&F.id===oe?G.find(be=>be.id!==ee.id):null)??G[0],W=((Ci=(zi=this.furnitureLinks)==null?void 0:zi.get(F.id))==null?void 0:Ci.power)??null,he=R?q(R,F.plant_right??0,F.plant_up??0,w.size*.85):null;if(!he||!W)continue;let te=I.furniture.filter(be=>be.type==="home_battery").sort((be,_e)=>Math.hypot(be.x-F.x,be.z-F.z)-Math.hypot(_e.x-F.x,_e.z-F.z))[0],ae=te!=null&&te.soc&&te.soc!=="none"?Number((Ri=i.states[te.soc])==null?void 0:Ri.state):NaN;Q.push(he),D.push({kind:"plant",name:F.name||ve(i,F.type),w:Math.max(0,ue(i.states[W])??0),dayIds:[W],battery:te?{soc:Number.isFinite(ae)?ae:null,w:Qe.get(te.id)??null}:null})}}let Je=w.device_house===!1?"floor":"all";if(g)for(let S of r.floors){for(let I of S.furniture){if(!I.holo)continue;let F=((Hi=(Fi=this.furnitureLinks)==null?void 0:Fi.get(I.id))==null?void 0:Hi.power)??null,G=d.find(W=>W.id===I.id);if(!F&&!G)continue;let R=S.elevation+me(S,I)+I.h;Q.push({p:[I.x,R+.1,I.z],n:[0,1,0],floorId:S.id,size:w.size*.7,roof:!1,views:Je,room:qc(S,I.x,I.z)}),D.push({kind:"device",name:I.name||ve(i,I.type),w:(G==null?void 0:G.power)??(F?ue(i.states[F]):null),dayIds:F?[F]:[],battery:null})}for(let I of S.placements){if(!I.holo)continue;let F=Rn(i,I.entity_id);if(!F)continue;let G=S.elevation+(I.y??.4)+.2;Q.push({p:[I.x,G,I.z],n:[0,1,0],floorId:S.id,size:w.size*.7,roof:!1,views:Je,room:qc(S,I.x,I.z)}),D.push({kind:"device",name:I.name||J(i,I.entity_id),w:ue(i.states[F]),dayIds:[F],battery:null})}}let Me=[];if(V("sound")){let S=new Set,I=(r.settings.roof.hologram??Ke).size,F=(R,W,he,te,ae,be)=>{let _e=i.states[W];if(!_e||j(W)!=="media")return;if(S.has(W)){let ct=Me.find(Lo=>Lo.id===W);ct&&Me.push({...ct,id:`${W}#${Me.filter(Lo=>Lo.id.startsWith(`${W}#`)).length+2}`,floorId:R.id,x:he,z:te,members:[W]});return}S.add(W);let Ce=this.ro?void 0:this.mediaGrace.get(W),rn=[_e.attributes.media_title,_e.attributes.app_name,_e.attributes.source].find(ct=>typeof ct=="string"&&!!ct.trim())??"";if(!(!Y(_e)&&(_e.state==="playing"||_e.state==="paused"&&!!rn||_e.state==="on"&&!!_e.attributes.source))){Ce&&Ce.until>Date.now()?(Me.push({...Ce.source,playing:!1,level:0}),Q.push(Ce.anchor),D.push({...Ce.card,media:{...Ce.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,Ce.until-Date.now()+100))):Y(_e)||(this.mediaGrace.delete(W),Me.push({id:W,floorId:R.id,x:he,z:te,level:0,playing:!1,members:[]}));return}let lt=_e.state==="playing",Ve=_e.attributes,Di=typeof Ve.volume_level=="number"?Math.min(1,Math.max(0,Ve.volume_level)):.5,Yc=Array.isArray(Ve.group_members)?Ve.group_members.filter(ct=>ct!==W):[];Me.push({id:W,floorId:R.id,x:he,z:te,level:lt?.3+.7*Di:0,playing:lt,members:Yc});let Qc=rn||A(i,"holo_media_playing"),Oi={p:[he,R.elevation+ae+.12,te],n:[0,1,0],floorId:R.id,size:I*.7,roof:!1,views:"all"},Li={kind:"media",name:be,w:null,dayIds:[],battery:null,media:{id:W,title:Qc,artist:typeof Ve.media_artist=="string"?Ve.media_artist:typeof Ve.media_album_name=="string"?Ve.media_album_name:"",picture:typeof Ve.entity_picture=="string"?Ve.entity_picture:null,volume:Math.round(Di*100),playing:lt}};Q.push(Oi),D.push(Li),this.ro||this.mediaGrace.set(W,{until:Date.now()+45e3,card:Li,source:Me[Me.length-1],anchor:Oi})},G=(R,W)=>{var he,te;for(let ae of R.furniture){if((ae.entity!=null&&ae.entity!=="none")!==W)continue;let be=(te=(he=this.furnitureLinks)==null?void 0:he.get(ae.id))==null?void 0:te.entity;be&&F(R,be,ae.x,ae.z,me(R,ae)+ae.h,ae.name||ve(i,ae.type))}};for(let R of r.floors)G(R,!0);for(let R of r.floors)for(let W of R.placements)F(R,W.entity_id,W.x,W.z,W.y??1.1,W.name||J(i,W.entity_id));for(let R of r.floors)G(R,!1)}if(V("auto_pro")){let S=(r.settings.roof.hologram??Ke).size;for(let I of r.floors)for(let F of I.furniture){if(F.type!=="parking"||!F.car)continue;let G=Xt(i,F);if(!G)continue;let R=wn(i,F);if(R.soc===null&&R.range===null&&R.locked===null&&R.climateOn===null)continue;let W=Jl(F,G),he=me(I,F)+((W==null?void 0:W.h)??1.6);Q.push({p:[F.x,I.elevation+he+.25,F.z],n:[0,1,0],floorId:I.id,size:S*.7,roof:!1,views:"all"});let te=R.entities;D.push({kind:"car",name:F.name||ve(i,G),w:null,dayIds:[],battery:null,car:{spot:F.id,soc:R.soc,range:R.range,rangeUnit:R.rangeUnit,chargingW:R.chargingW,charging:R.charging,locked:R.locked,climateOn:R.climateOn,lock:te.lock,climate:te.climate,charge:te.charging&&/^(switch|input_boolean)\./.test(te.charging)?te.charging:null}})}}let tn=this.scene.filter(S=>S.kind==="water").map(S=>({...S,level:this.dimmed?S.level*.4:S.level}));if(n.setPools(tn),Dn()){let S=(r.settings.roof.hologram??Ke).size;for(let I of ac(this.sceneHost(i,r))){let F=r.floors.find(R=>R.id===I.anchor.floorId);if(!F)continue;let G=null;if(I.anchor.areaId){let R=F.outdoor.find(ae=>ae.id===I.anchor.areaId);if(!R||R.points.length<3)continue;let[W,he]=Re(R.points),te=R.type==="pool"?Ft(F,R):Rt(F,W,he);G=[W,F.elevation+Math.max(te,0)+(R.above?.6:1.1),he]}else if(I.anchor.furnitureId){let R=F.furniture.find(W=>W.id===I.anchor.furnitureId);if(!R)continue;G=[R.x,F.elevation+me(F,R)+R.h+.25,R.z]}G&&(Q.push({p:G,n:[0,1,0],floorId:F.id,size:S*.7,roof:!1,views:"all"}),D.push({kind:"module",name:I.title,w:null,dayIds:[],battery:null,module:I}))}}if(V("household")){let S=(r.settings.roof.hologram??Ke).size;for(let I of this.binHolos){let F=r.floors.find(G=>G.id===I.floorId);F&&(Q.push({p:[I.x,F.elevation+I.y+.04,I.z],n:[0,1,0],floorId:I.floorId,size:S*.75,roof:!1,views:"all"}),D.push({kind:"bin",name:I.name,w:null,dayIds:[],battery:null,bin:{color:I.color,when:I.when,soon:!!I.soon}}))}}n.setSound(Me);let nn=this._walk?this.walkRoomPts:null,Wn=Q.map(S=>!this._walk||!!nn&&B([S.p[0],S.p[2]],nn)),Pt=D.filter((S,I)=>Wn[I]);n.setAnchors(Q.filter((S,I)=>Wn[I])),JSON.stringify(Pt)!==JSON.stringify(this._holos)&&(this._holos=Pt),n.setSolarLevels(E&&!this.dimmed?Wl(r,E):new Map);let O=!g||!(this.flows??this._flows)||this.dimmed?[]:Dl({building:r,consumers:d,summary:p,battery:U??null,fieldPower:E,devicePower:this.devicePowers(i,r)}).map(S=>({floorId:S.floorId,a:S.a,b:S.b,dist:S.dist,power:S.power,color:Ul(S.kind,p)})),le=this.poolPipes(r);n.setFlows(this.dimmed?O:[...O,...le.flows]),n.setPipes(le.tubes);let pe=[];n.setPersons(pe);let Le=Mc(i,r,this.openingLinks,pe);n.setFloorInfo(new Map([...Le].map(([S,I])=>[S,Sc(i,I)])));let ie=(ji=i.states["sun.sun"])==null?void 0:ji.attributes,Ae=typeof(ie==null?void 0:ie.elevation)=="number"?ie.elevation:null;n.setSun(Ae!==null&&typeof(ie==null?void 0:ie.azimuth)=="number"?{elevation:Ae,azimuth:ie.azimuth}:null),this.theme==="auto"&&n.setTheme(this.effectiveTheme());let Ie=this.weather&&!this.dimmed&&V("weather")?Xs(i,xt(i,this.weatherEntityId??r.settings.weather_entity),r.settings.rain_entity):null,ze=Ie?Zs(Ie,r.settings.weather_effects):null;this.cloud=(ze==null?void 0:ze.cloud)??0,this._sky=(Ae===null?0:Math.min(1,Math.max(0,(Ae+4)/16)))*(1-.45*this.cloud);let Oo=ze?ze.sky:(r.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&V("weather")?{...ze??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:Oo}:null),this.watchLightning(!!(ze!=null&&ze.lightning)),this.applyTint();let Mi=p.grid!==null||p.solar!==null||p.battery!==null||p.tariff!==null?p:null;JSON.stringify(Mi)!==JSON.stringify(this._energy)&&(this._energy=Mi);let Si=d.some(S=>S.wallbox)?d.filter(S=>S.wallbox).reduce((S,I)=>S+I.power,0):null,Ei=r.floors.flatMap(S=>S.furniture.filter(I=>I.type==="inverter")).map(S=>{var G,R;let I=(R=(G=this.furnitureLinks)==null?void 0:G.get(S.id))==null?void 0:R.power,F=I?ue(i.states[I]):null;return F===null?null:{name:S.name||ve(i,S.type),w:Math.max(0,F)}}).filter(S=>!!S);JSON.stringify(Ei)!==JSON.stringify(this._plants)&&(this._plants=Ei),Si!==this._wallboxW&&(this._wallboxW=Si),this.watchSolarDay([...new Set(D.flatMap(S=>S.dayIds))]);let Pi=V("energy_pro");this.watchMeters(Pi?r.energy.gas??null:null,Pi?r.energy.water??null:null),l&&(this.syncMs=this.syncMs*.8+(performance.now()-l)*.2)}listenReplay(){var t;(t=this.unlistenReplay)==null||t.call(this),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{var n;this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&((n=this.viewer)==null||n.flashDevices(e.pulses)),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){var a,s,l,d,c,u;let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.findIndex??=Io(t,n)).find(p=>p.entity===e);if(r){this.goTo(r);return}let i=((s=(a=t.entities)==null?void 0:a[e])==null?void 0:s.area_id)??((u=(c=t.devices)==null?void 0:c[((d=(l=t.entities)==null?void 0:l[e])==null?void 0:d.device_id)??""])==null?void 0:u.area_id)??null;for(let p of n.floors){let h=p.openings.find(_=>{var x;let y=(x=this.openingLinks)==null?void 0:x.get(_.id);return!!y&&[y.contact,y.tilt,y.contact2,y.tilt2,y.cover].includes(e)}),f=p.rooms.find(_=>_.points.length>=3&&(h?_.id===h.room_id:!!i&&_.area_id===i));if(!f)continue;let[m,g]=Re(f.points);this.goTo({kind:"device",name:f.name,where:"",floorId:p.id,roomId:f.id,entity:e,icon:null,x:m,z:g,y:1});return}}now(){var e;return((e=this.replay)==null?void 0:e.t)??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,r=n?Nt(t,e.floors):this.openingLinks,i=n?bt(t,e.floors):this.furnitureLinks,a=Br(Wr(t,e,this.weatherEntityId)),s=pi(t,e,{openings:r,furniture:i,heat:!0,warnings:a,weatherEntityId:this.weatherEntityId}),l=V("auto_pro")?e.floors.flatMap(d=>d.furniture.filter(c=>c.type==="parking").flatMap(c=>[typeof c.entity=="string"?c.entity:null,c.car?ao(t,c).tracker:null]).filter(c=>!!c&&c.startsWith("device_tracker."))):[];return{entities:s,openings:[...r],furniture:[...i],low:this._low,cars:l,energy:V("energy_pro"),auto:V("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return k;let t=this.hass,n=t.states[e.entity],r=$e(t,n),i=j(e.entity)==="light"&&(n==null?void 0:n.state)==="on"&&r.endsWith("%")?`${A(t,"state_on")} \xB7 ${r}`:r,a=n!=null&&n.last_changed?A(t,"tt_since",{time:Po(t,Date.parse(n.last_changed))}):"";return v`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${J(t,e.entity)}</span>
      <b>${a?`${i} \xB7 ${a}`:i}</b>
    </div>`}devicePowers(e,t){var r,i;let n=new Map;for(let a of t.floors)for(let s of a.furniture){if(s.type!=="inverter"&&s.type!=="home_battery")continue;let l=(i=(r=this.furnitureLinks)==null?void 0:r.get(s.id))==null?void 0:i.power,d=s.type==="home_battery"&&s.charge&&s.charge!=="none"?ue(e.states[s.charge]):null,c=l?ue(e.states[l],s.type==="home_battery"&&t.energy.battery_invert&&d===null):null;c!==null&&d!==null?c=Math.max(0,c)-Math.max(0,d):c===null&&d!==null&&(c=-Math.max(0,d)),c!==null&&n.set(s.id,c)}return n}detectionPins(e,t){var i,a;let n=[],r=new Set(((i=this.building)==null?void 0:i.floors.flatMap(s=>s.placements.filter(l=>l.detect_pins===!1).map(l=>l.entity_id)))??[]);for(let s of t){if(!((a=s.model)!=null&&a.startsWith("camera"))||r.has(s.id))continue;let l=this.now(),d=Ge(e,s.id).filter(m=>{let g=e.states[m];return g?g.state==="on"?!0:g.state==="off"&&!!g.last_changed&&l-Date.parse(g.last_changed)<Ip:!1}),c=new Map;for(let m of d){let g=Mr(e,m);c.has(g)||c.set(g,m)}c.size>1&&c.delete("motion");let u=(s.rotation??0)*Math.PI/180,p=[-Math.sin(u),Math.cos(u)],h=s.model==="camera_ceiling",f=0;for(let[m,g]of c){let _=e.states[g],y=_!=null&&_.last_changed?Po(e,Date.parse(_.last_changed)):"";n.push({id:`detect:${g}`,floorId:s.floorId,roomId:s.roomId,x:s.x+(h?0:p[0]*1.1),z:s.z+(h?0:p[1]*1.1),y:1.4+.4*f++,icon:Vc[m]??Vc.motion,name:J(e,g),text:`${A(e,`detect_${m}`)}${y?` \xB7 ${y}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let r=Qr(t);if(!r)return null;let i=Math.abs(n)<5,a=t.settings.outage_entity;return a&&go(e.states[a])?{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:zp,name:A(e,"holo_grid"),text:A(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:Tp,name:A(e,"holo_grid"),text:i?ce(e,0):`${A(e,n<0?"energy_grid_export":"energy_grid_import")} ${ce(e,Math.abs(n))}`,active:!i,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(a=>!!a),r=this.replay?"":n.join(",");if(r===this.meterKey)return;if(this.meterKey=r,clearInterval(this.meterTimer),this.meterTimer=void 0,!r){this._meters=null;return}let i=async()=>{if(!this.hass||document.hidden)return;let a=await Rl(this.hass,n);this.meterKey===r&&a&&(this._meters={gas:e?a.get(e)??null:null,water:t?a.get(t)??null:null})};i(),this.meterTimer=setInterval(()=>{i()},3e5)}poolPipes(e){var i,a;let t=[],n=[],r=new Map(this.scene.filter(s=>s.kind==="pipeflow").map(s=>[s.areaId,s.flows]));for(let{floor:s,area:l}of vc(e.floors)){let d=l.pool;if(!((i=d.pipes)!=null&&i.length)&&!((a=d.joints)!=null&&a.length))continue;let c=d.ports??[],u=new Map(Object.entries(r.get(l.id)??{})),p=Ro(e,s,l),h=(f,m)=>di(f,m,l,s);t.push(...yc(d.pipes??[],u,p,h));for(let f of c){if(f.kind!=="inlet")continue;let m=p(`port:${f.id}`),g=m&&ui(l,[m.x,m.z]);if(!m||!g)continue;let _=(d.pipes??[]).find(x=>x.to===`port:${f.id}`),y=_?u.get(_.id):void 0;n.push({floorId:s.id,points:[[m.x+g[0]*.03,m.y,m.z+g[1]*.03],[m.x-g[0]*.09,m.y,m.z-g[1]*.09]],radius:.035,water:y!=null&&y.active?y.color:null,fittings:[]})}for(let f of d.joints??[]){if(f.kind!=="wall"&&f.kind!=="floor")continue;let m=p(`joint:${f.id}:inside`),g=p(`joint:${f.id}:outside`),_=f.kind==="floor"?.03:m.y;n.push({floorId:s.id,points:[[m.x,_,m.z],[g.x,g.y,g.z]],radius:.05,water:null,fittings:[]})}for(let f of d.pipes??[]){let m=di(Vn(f,p),f,l,s);if(m.length<2)continue;let g=u.get(f.id),_=[],y=zo(m);for(let[x,M]of[[f.from,.04],[f.to,y-.04]]){let b=x.startsWith("dev:")||x.startsWith("joint:")?Co(m,M):null;b&&_.push({kind:"sleeve",p:b.p,dir:b.dir})}for(let x of f.fittings??[]){let M=Co(m,x.at);M&&_.push({kind:x.kind,p:M.p,dir:M.dir,open:x.open!==!1})}n.push({floorId:f.floor_id,points:m,radius:.025,water:g!=null&&g.active?g.color??ci:null,fittings:_})}}return{flows:t,tubes:n}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let i=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(i===this.holoIds)return;this.holoIds=i,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let r=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let i=await Nl(this.hass,e);this.holoIds===n&&(this._rows=i)};r(),this.holoTimer=setInterval(()=>{r()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&r()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,r,i,a){var U,E,w;(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let s=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),d=((U=this._holos[e])==null?void 0:U.kind)==="main";if(!s){d&&this._holoOn&&(this._holoOn=!1);return}d&&r!==this._holoOn&&(this._holoOn=r);let c=this._holos[e],u=(((E=this.building)==null?void 0:E.settings.roof.hologram)??Ke).device_min_w??0;(c==null?void 0:c.kind)==="device"&&u>0&&(c.w??0)<u&&(r=!1);let p=!r;if(s.hidden!==p&&(s.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!r)return;if((c==null?void 0:c.kind)==="bin"){let $=i*.8;s.style.transform=`translate(${t.toFixed(1)}px, ${n.toFixed(1)}px) scale(${$.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=i*.8,f=34*h,m=46*h,g=t+(a?f:-f),_=n-m,y=this.holoSizes.get(e),x=performance.now();(!y||x-y.at>2e3)&&(y={w:s.offsetWidth||184,h:s.offsetHeight||90,at:x},this.holoSizes.set(e,y));let M=y.w*h,b=y.h*h,T=a?g:g-M,z=T+M;for(let $=0;$<6;$++){let P=this.holoBoxes.find(C=>T<C.x1+4&&z>C.x0-4&&_-b<C.y1+4&&_>C.y0-4);if(!P)break;_=P.y0-6}this.holoBoxes.push({i:e,x0:T,x1:z,y0:_-b,y1:_});let H=a||(((w=this.building)==null?void 0:w.settings.roof.hologram)??Ke).mirror!==!1;if(s.style.transform=H?`translate(${g.toFixed(1)}px, ${_.toFixed(1)}px) scale(${(a?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${T.toFixed(1)}px, ${_.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let $=l.firstElementChild,P=l.lastElementChild;$==null||$.setAttribute("x1",t.toFixed(1)),$==null||$.setAttribute("y1",n.toFixed(1)),$==null||$.setAttribute("x2",g.toFixed(1)),$==null||$.setAttribute("y2",_.toFixed(1)),P==null||P.setAttribute("cx",t.toFixed(1)),P==null||P.setAttribute("cy",n.toFixed(1))}}renderHologram(){var i,a;let e=this._energy,t=()=>this._holos.map((s,l)=>s.kind==="bin"?this.renderBinCard(s,l):k);if(!(V("energy_pro")||V("sound")||V("auto_pro")||V("pool")||V("household"))||this.roomId&&!(((i=this.building)==null?void 0:i.settings.roof.hologram)??Ke).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return V("household")?t():k;let n=this.floorId===null||(((a=this.building)==null?void 0:a.floors.length)??0)<=1,r=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&n;return this._holos.map((s,l)=>s.kind==="module"?this.renderModuleCard(s,l):s.kind==="bin"?this.renderBinCard(s,l):s.kind==="car"?this.renderCarCard(s,l):s.kind==="media"?this.renderMediaCard(s,l):s.kind==="device"?this.renderDeviceCard(s,l):r?this.renderHoloCard(s,l,e):k)}renderBinCard(e,t){let n=e.bin;return v`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${`${e.name}: ${n.when}`} style="--bin:${n.color}">
      <div class="fp3d-holo-body"><b>${n.when}</b><span>${e.name}</span></div>
    </div>`}renderCarCard(e,t){let n=this.hass,r=f=>A(n,f),i=e.car,a=!this.mediaFolded.has(i.spot),s=()=>{this.mediaFolded.has(i.spot)?this.mediaFolded.delete(i.spot):this.mediaFolded.add(i.spot),this.requestUpdate()},l=(f,m,g)=>{n.callService(f,m,{entity_id:g})},d=(f,m)=>f.startsWith("climate.")?l("climate",m?"turn_on":"turn_off",f):l("homeassistant",m?"turn_on":"turn_off",f),c=()=>{if(!i.lock)return;let f=i.lock.startsWith("lock.");if(i.locked){if(!confirm(r("car_unlock_confirm")))return;f?l("lock","unlock",i.lock):l("homeassistant","turn_off",i.lock)}else f?l("lock","lock",i.lock):l("homeassistant","turn_on",i.lock)},u=i.soc===null?"#37e0ff":i.soc>=50?"#4dff80":i.soc>=20?"#ffcc40":"#ff4d40",p=!!i.lock&&/^(lock|input_boolean|switch)\./.test(i.lock),h=!!i.climate&&/^(climate|switch|input_boolean)\./.test(i.climate);return v`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${i.charging?`\u26A1 ${r("car_charging_short")}`:i.locked===null?"":i.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b>
            <span>${i.range!==null?`${se(n,i.range,0)} ${i.rangeUnit}`:""}${i.charging&&i.chargingW?` \xB7 ${ce(n,i.chargingW)}`:""}</span>
          </div>
          ${i.soc!==null?v`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,i.soc))}%;background:${u}"></i></div>`:k}
          ${a&&!this.ro&&(p||h||i.charge)?v`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?v`<button title=${i.locked?r("car_unlock_btn"):r("car_lock_btn")} @click=${c}>${i.locked?"\u{1F512}":"\u{1F513}"}</button>`:k}
                ${h?v`<button class=${i.climateOn?"fp3d-holo-on":""} title=${r("car_climate")} @click=${()=>d(i.climate,!i.climateOn)}>❄</button>`:k}
                ${i.charge?v`<button class=${i.charging?"fp3d-holo-on":""} title=${r("car_charging")} @click=${()=>d(i.charge,!i.charging)}>⚡</button>`:k}
              </div>`:k}
        </div>
      </div>`}renderModuleCard(e,t){var s,l;let n=e.module,r=!this.mediaFolded.has(n.id),i=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},a=d=>d?`color:${d}`:"";return v`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${i}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live">${n.live??""}</span></div>
          ${n.main?v`<div class="fp3d-holo-car-main"><b style=${a(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span></div>`:k}
          ${r?(n.rows??[]).map(d=>v`<div class="fp3d-holo-mrow"><span>${d.label}</span><b style=${a(d.color)}>${d.value}</b>${d.at!==void 0?v`<i><em style="left:${d.at}%;background:${d.color??"#37e0ff"};color:${d.color??"#37e0ff"}"></em></i>`:v`<i class="fp3d-holo-mrow-none"></i>`}</div>`):k}
          ${r?(n.lines??[]).map(d=>v`<div class="fp3d-holo-mline">${d}</div>`):k}
          ${r&&((s=n.chips)!=null&&s.length)?v`<div class="fp3d-holo-chips">
                ${n.chips.map(d=>v`<div class="fp3d-holo-mline">${d.title}</div>
                    <div class="fp3d-holo-chip-row">${d.items.map(c=>v`<button class=${c.on?"fp3d-holo-on":""} title=${c.title??""} @click=${()=>c.onTap()}>${c.label}</button>`)}</div>`)}
              </div>`:k}
          ${r&&!this.ro&&((l=n.buttons)!=null&&l.length)?v`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(d=>v`<button class=${d.on?"fp3d-holo-on":""} title=${d.title??""} @click=${()=>d.onTap()}>${d.label}</button>`)}</div>`:k}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){var x,M,b;let n=this.hass,r=T=>A(n,T),i=e.media,a=!this.mediaFolded.has(i.id),s=()=>{this.mediaFolded.has(i.id)?this.mediaFolded.delete(i.id):this.mediaFolded.add(i.id),this.requestUpdate()},l=(T,z={})=>{Promise.resolve(n.callService("media_player",T,{entity_id:i.id,...z})).catch(H=>this.serviceFailed(`media_player.${T}`,H))},d={down:T=>T.currentTarget.dataset.pressed=String(T.pointerId),up:T=>z=>{let H=z.currentTarget;H.dataset.pressed===String(z.pointerId)&&(delete H.dataset.pressed,z.stopPropagation(),H.dataset.acted=String(Date.now()),T())},key:T=>z=>{let H=z.currentTarget;Date.now()-Number(H.dataset.acted??0)<700||(H.dataset.acted=String(Date.now()),T())}},c=(x=n.states[i.id])==null?void 0:x.attributes.supported_features,u=T=>typeof c!="number"||(c&T)!==0,p=this.mediaIntent.get(i.id);p&&(p.playing===i.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(i.id);let h=((M=this.mediaIntent.get(i.id))==null?void 0:M.playing)??i.playing,f=u(16384)||u(1),m=()=>{this.mediaIntent.set(i.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":u(16384)?"media_play":"media_play_pause")},g=this.mediaVolume.get(i.id);g&&(Math.abs(g.v-i.volume)<=2||Date.now()-g.at>3e4)&&this.mediaVolume.delete(i.id);let _=((b=this.mediaVolume.get(i.id))==null?void 0:b.v)??i.volume,y=(T,z)=>{this.mediaVolume.set(i.id,{v:T,at:Date.now()}),this.requestUpdate(),(z||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:T/100}))};return v`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${r("holo_media_playing")}`:r("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${i.picture?v`<img class="fp3d-holo-cover" src=${i.picture} alt="" />`:v`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${i.title}</b>${i.artist?v`<span>${i.artist}</span>`:k}</div>
        </div>
        ${a&&!this.ro?v`<div class="fp3d-holo-media-controls">
                <button aria-label=${r("previous")} ?disabled=${!u(16)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_previous_track"))} @click=${d.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${r("play_pause")} ?disabled=${h?!u(1):!f} @pointerdown=${d.down} @pointerup=${d.up(m)} @click=${d.key(m)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${r("next")} ?disabled=${!u(32)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_next_track"))} @click=${d.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(_)}
                  aria-label=${r("volume")}
                  @input=${T=>y(Number(T.target.value),!1)}
                  @change=${T=>y(Number(T.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${_} %</span>
              </div>`:k}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,r=d=>A(n,d),i=!this.holoFolded.has(t),a=this.dayOf(e),s=a&&a.curve.length>1?Jr(a.curve,a.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return v`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ce(n,e.w??0)}</b><span>${r("holo_dev_now")}</span></div>
        ${i&&a?v`<div class="fp3d-holo-sub">${r("holo_today")} <b>${se(n,a.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${ce(n,a.peak)}</b></div>`:k}
        ${i&&s?Tt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${s.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${s.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${s.endX}" cy="${s.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:k}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?Vl(t,new Date(this.now())):null}renderHoloCard(e,t,n){var g,_;let r=this.hass,i=y=>A(r,y),a=!this.holoFolded.has(t),s=this.dayOf(e),l=e.kind==="main",d=l&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,c=s&&s.curve.length>1?Jr(s.curve,s.peak):null,u=new Date(this.now()),p=(u.getHours()+u.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},f=l?n.solar??n.consumption??0:e.w??0,m=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return v`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ce(r,f)}</b><span>${i(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${a?v`${l&&this._plants.length>1?v`<div class="fp3d-holo-plants">${this._plants.map(y=>v`<span>${y.name}</span><b>${ce(r,y.w)}</b>`)}</div>`:k}
              ${s?v`<div class="fp3d-holo-sub">${i("holo_today")} <b>${se(r,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${ce(r,s.peak)}</b></div>`:k}
              ${c?Tt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${c.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${c.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${c.endX}" cy="${c.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:k}
              <div class="fp3d-holo-grid">
                ${m?v`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${i("holo_battery")}<br /><b>${m.soc!==null?`${Math.round(m.soc)} %`:ce(r,Math.abs(m.w??0))}</b>
                      ${m.w!==null&&Math.abs(m.w)>=5?v`<span>${m.w<0?"\u25B2":"\u25BC"} ${ce(r,Math.abs(m.w))}</span>`:k}
                    </div>`:k}
                ${l&&n.grid!==null?v`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${i("holo_grid")}<br /><b>${ce(r,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":i(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:k}
                ${l&&n.consumption!==null?v`<div class="fp3d-holo-cell fp3d-holo-house">${i("holo_house")}<br /><b>${ce(r,n.consumption)}</b></div>`:k}
                ${l&&this._wallboxW!==null?v`<div class="fp3d-holo-cell fp3d-holo-wb">${i("holo_wallbox")}<br /><b>${ce(r,this._wallboxW)}</b></div>`:k}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?v`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?v`<span>🔥 ${i("holo_gas")} <b>${se(r,this._meters.gas,this._meters.gas<10?2:1)} ${Lc(r,(g=this.building)==null?void 0:g.energy.gas)}</b></span>`:k}
                    ${this._meters.water!==null?v`<span>💧 ${i("holo_water")} <b>${Ap(r,this._meters.water,Lc(r,(_=this.building)==null?void 0:_.energy.water))}</b></span>`:k}
                    <span>${i("holo_today_short")}</span>
                  </div>`:k}
              ${d!==null?v`<div class="fp3d-holo-bar"><div style="width:${d}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${i("holo_autarky")}</span><b>${d} %</b></div>`:k}`:k}
      </div>
    </div>`}setAlerts(e){let t=e.map(a=>`${a.kind}:${a.entity}`),n=this.ro?[]:e.filter((a,s)=>!this.seenAlerts.has(t[s]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(a=>`${a.kind}:${a.entity}`).join()&&(this._alerts=e);let r=e.some(a=>!a.quiet);if(r&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!r||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let i=this.directorSettings();if(i!=null&&i.alerts){let a=n[0];if(this.directing.offer({kind:"alert",key:`alert:${a.kind}:${a.entity}`,entity:a.entity},Date.now(),i.hold??30)){this.directorShow(()=>this.jumpTo(a));return}}this.alertJump&&this.jumpTo(n[0])}directorSettings(){var t;let e=(t=this.building)==null?void 0:t.settings.director;return this.director&&!this.ro&&V("camera_cockpit")&&Fc(e)?e:null}direct(){let e=this.directorSettings(),t=this.hass,n=this.building;if(!e||!t||!n){this.directorSrc&&(this.directing=new qn,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let r=Date.now(),i=e.hold??30,a=`${JSON.stringify(e)}|${n.floors.map(d=>d.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==t.entities||this.directorSrc.building!==n||this.directorSrc.sig!==a){let d=[...new Set(n.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],c=e.motion??"off";this.directorSrc={registry:t.entities,building:n,sig:a,bells:(e.doorbell?Hc(t,e.doorbell_entity):[]).map(u=>({id:u,camera:Dc(t,u,d,e.doorbell_camera)})),motion:c==="off"?[]:d.filter(u=>u.startsWith("camera.")).flatMap(u=>Ge(t,u).filter(p=>c==="all"||Mr(t,p)==="person").map(p=>({sensor:p,cam:u})))}}let s=[];for(let d of this.directorSrc.bells)this.directing.edge(d.id,t.states[d.id],(c,u)=>yi(c,u,r))&&s.push({kind:"doorbell",key:`bell:${d.id}`,entity:d.id,camera:d.camera});for(let d of e.triggers??[])d.entity&&this.directing.edge(`trigger:${d.entity}`,t.states[d.entity],(c,u)=>jc(c,u,r))&&s.push({kind:"trigger",key:`trigger:${d.entity}`,entity:d.entity,camera:d.camera});for(let d of this.directorSrc.motion)this.directing.edge(d.sensor,t.states[d.sensor],(c,u)=>(c==null?void 0:c.state)==="off"&&(u==null?void 0:u.state)==="on")&&s.push({kind:"motion",key:`cam:${d.cam}`,entity:d.sensor,camera:d.cam});if(e.appliances){for(let[d,c]of this.appliances)this.directing.stopped(`app:${d}`,c.running,r)&&s.push({kind:"appliance",key:`app:${d}`,entity:d});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];s.sort((d,c)=>l.indexOf(d.kind)-l.indexOf(c.kind));for(let d of s)if(this.directing.offer(d,r,i)){this.directorShow(()=>this.directorGo(d));break}}directorShow(e){let t=this.viewer;if(!t)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:t.getView()}),t.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(e){let t=this.building;if(t){if(e.camera&&t.floors.some(n=>n.placements.some(r=>r.entity_id===e.camera))){let n=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(e.kind==="appliance"){let n=this.appliances.get(e.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),t=this.directorBack;e&&(this.directorBack=null,!(!e.back||!t)&&(this._through&&(this._through=null),this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId?setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60):this.roomId&&t.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:null}),60),setTimeout(()=>{var n,r;(n=this.viewer)==null||n.flyTo(t.view),(r=this.viewer)==null||r.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){var c;let n=this.building,r=this.hass,i=n==null?void 0:n.floors.find(u=>u.id===e),a=i?we(i).find(u=>u.id===t):void 0;if(!n||!r||!i||!a||this.ro)return;let s=new Set(ge(r,a.area_id).filter(u=>j(u)==="light"));for(let u of i.placements)j(u.entity_id)==="light"&&B([u.x,u.z],a.points)&&s.add(u.entity_id);for(let u of i.furniture){let p=(c=this.furnitureLinks.get(u.id))==null?void 0:c.entity;p&&lr(u.type)&&B([u.x,u.z],a.points)&&s.add(p)}let l=[...s].filter(u=>!this.confirmSet.has(u));if(!l.length)return;let d=l.some(u=>{var p;return((p=r.states[u])==null?void 0:p.state)==="on"});r.callService("homeassistant",d?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let r=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let s=this.heatMode,l=Gl(n,t,s);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,r=new Map([...l].map(([d,c])=>[d,Kl(s,c)]))}let i=new Map;if(this.heatMode==="values")for(let s of t.floors)for(let l of we(s)){let d=Ze(n,s,l,"temperature"),c=Ze(n,s,l,"humidity"),u=Ze(n,s,l,"co2"),p=[d!==null?`${se(n,Lt(n,d),1)} ${Fe(n)}`:null,c!==null?`${se(n,c,0)} %`:null,u!==null?`${se(n,u,0)} ppm`:null].filter(h=>!!h);p.length&&i.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){r??=new Map;let s=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let d=El(l).map(c=>c*s);if(l.roomId)r.set(l.roomId,d);else for(let c of t.floors)if(!l.floorId||c.id===l.floorId)for(let u of c.rooms)r.set(u.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(r??=new Map,r.set(this.roomFlash.roomId,[.9,.95,1]));let a=r?[...r].map(([s,l])=>`${s}:${l.map(d=>d.toFixed(2)).join(",")}`).join(";"):"";a!==this.tintSig&&(this.tintSig=a,e.setRoomTint(r))}furnitureMarkers(e,t,n,r){var g,_,y,x;let i=[],a=[],s=new Map,l=new Map,d=V("household"),c=[];this.binHolos=[];let u=new Map(this.scene.filter(M=>M.kind==="glow").map(M=>[M.furnitureId,M]));for(let M of t.floors)for(let b of M.furniture){let T=this.furnitureLinks.get(b.id),z=this.stateFaces(e,b);if(z.length&&s.set(b.id,{color:z[0].color,level:z[0].level,faces:z}),lr(b.type)){i.push(this.lampMarker(e,M,b,(T==null?void 0:T.entity)??null));let O=b.type==="lamp_ceiling_fan"?Nc(b):null;O&&i.push(this.lampMarker(e,M,b,O,!0));continue}if(b.type==="wall_switch"){let O=Dt(b);O.forEach((pe,Le)=>pe&&l.set(`${b.id}#${Le}`,`ws:${pe}`));let le=no(b);s.set(b.id,{color:[0,0,0],level:0,keys:O.map(pe=>hr(e,pe)?Rp:null),switchRing:le?gt(e.states[le]):null});continue}if(b.type==="wall_socket"){let O=typeof b.run_w=="number"&&b.run_w>0?b.run_w:5,le=null,pe=null,Le=Ot(b).map((ie,Ae)=>{ie.entity?l.set(`${b.id}#${Ae}`,`ws:${ie.entity}`):ie.power&&l.set(`${b.id}#${Ae}`,ie.power);let Ie=ie.power?ue(e.states[ie.power]):null;return ie.power&&Ie!==null&&(le=(le??0)+Math.max(0,Ie),pe??=ie.power,r.has(ie.power)||(r.add(ie.power),a.push({id:ie.entity??ie.power,powerEntity:ie.power,floorId:M.id,x:b.x,z:b.z,power:Math.max(0,Ie)}))),(ie.entity?hr(e,ie.entity):(Ie??0)>O)?Fp:null});if(s.set(b.id,{color:[0,0,0],level:0,keys:Le}),pe!==null&&le!==null&&!n.has(pe)){let ie=le;n.add(pe);let Ae=M.rooms.find(Ie=>Ie.points.length>=3&&B([b.x,b.z],Ie.points));i.push({id:pe,floorId:M.id,roomId:(Ae==null?void 0:Ae.id)??null,x:b.x,z:b.z,y:Bc(b)+me(M,b),icon:kn(b.icon||"power-socket-eu"),name:b.name||ve(e,b.type),ownName:b.name||void 0,showName:!!b.show_name,text:ce(e,ie),active:ie>O,unavailable:!1,glow:null,furnitureId:b.id,show:b.marker??void 0,fromFurniture:!0})}continue}let H=u.get(b.id);H&&s.set(b.id,{color:H.color,level:H.level});let U=(b.type==="plant"||Hr(b.type))&&!!b.moisture&&b.moisture!=="none";if(b.type==="waste_bin"||b.type==="mailbox"||U){let O=d?this.householdState(e,M,b):null;O!=null&&O.screen&&s.set(b.id,O.screen),O!=null&&O.marker&&i.push(O.marker);let le=b.type==="waste_bin"?b.bin_source:b.type==="mailbox"?b.entity:b.moisture;if(d&&typeof le=="string"&&le!=="none"&&l.set(b.id,`hh:${le}#${b.id}`),O!=null&&O.item&&c.push(O.item),!U)continue}d&&(b.service&&b.service!=="none"&&hl(b,e)&&(s.has(b.id)||s.set(b.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]}),c.push({icon:"wrench-outline",text:A(e,"hh_service",{name:b.name||ve(e,b.type)}),entity:b.service})),(b.type==="fridge"||b.type==="fridge_smart")&&vo(b,e)&&(s.set(b.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),c.push({icon:"fridge-alert-outline",text:A(e,"hh_fridge_open",{name:b.name||ve(e,b.type)}),entity:at(b)[0]??null})));let w=b.type==="parking"&&V("auto_pro")&&!!b.car?wn(e,b):null,$=b.type==="washer"||b.type==="dryer"||b.type==="dishwasher",P=b.type==="home_battery"?b.soc:b.type==="wallbox"?b.status:b.type==="parking"&&w?((g=b.car)==null?void 0:g.device)??w.entities.soc:d&&$?b.remaining??null:null,C=P&&P!=="none"?P:null,N=b.extra&&b.extra!=="none"&&e.states[b.extra]?b.extra:null,q=N?$e(e,e.states[N]):"",Q=O=>q?O?`${O} \xB7 ${q}`:q:O,D=T??(C||N?{entity:null,power:null}:void 0);if(!D)continue;let ne=b.type==="home_battery"?C??D.entity??D.power:D.entity??D.power??C??N;l.set(b.id,ne);let L=D.entity?e.states[D.entity]:void 0,ee=b.type==="water_heater"?Fa(e,gn(e,{entity:D.entity})):null,oe=b.type==="access_point"?wa(e,fn(e,{entity:D.entity})):null,K=b.type==="meter"?t.energy.grid_invert&&!b.export:b.type==="home_battery"?t.energy.battery_invert&&!b.charge:!1,re=D.power?ue(e.states[D.power],K):null,Te=b.type==="home_battery"&&b.charge&&b.charge!=="none"?b.charge:b.type==="meter"&&b.export&&b.export!=="none"?b.export:null,Qe=Te?ue(e.states[Te]):null;Qe!==null&&(re=Math.max(0,re??0)-Math.max(0,Qe)),D.power&&re!==null&&!r.has(D.power)&&(r.add(D.power),a.push({id:ne,powerEntity:D.power,floorId:M.id,x:b.x,z:b.z,power:Math.max(0,re),wallbox:b.type==="wallbox"||void 0}));let st=typeof b.run_w=="number"&&b.run_w>0?b.run_w:10,Je=(re??0)>st||(L==null?void 0:L.state)==="on"||(L==null?void 0:L.state)==="running"||br(L)&&qe(L);$&&this.appliances.set(b.id,{floorId:M.id,x:b.x,z:b.z,entity:D.entity??D.power??b.id,running:Je});let Me=null;if(d&&$){let O=b.remaining&&b.remaining!=="none"?e.states[b.remaining]:void 0,le=Vr(O),pe=Je||!D.power&&!D.entity&&(le??0)>0,Le=at(b),ie=ze=>Le.some(Oo=>{let on=e.states[Oo];return!!(on!=null&&on.last_changed)&&Date.parse(on.last_changed)>ze}),Ae=this.finished.update(b.id,pe,ie),Ie=b.name||(D.entity?J(e,D.entity):ve(e,b.type));pe?(Je||s.set(b.id,Wc(b.type)),le!==null&&(Me=A(e,"hh_left",{t:pl(le)}),c.push({icon:"timer-outline",text:`${Ie}: ${Me}`,entity:b.remaining??D.entity}))):(Nr(L)||Nr(O)||Ae)&&(Me=A(e,"hh_done"),s.set(b.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),c.push({icon:"check-circle-outline",text:A(e,"hh_finished",{name:Ie}),entity:D.entity??D.power}))}if(w&&Xt(e,b)){let O=[];if(w.soc!==null){let le=w.soc>=50?[.3,1,.5]:w.soc>=20?[1,.8,.25]:[1,.3,.25];O.push({part:"band",color:le,level:w.charging?1:.6})}if(w.locked===!1&&O.push({part:"lights",color:[1,.42,.02],level:1}),w.climateOn){let le=w.entities.climate?e.states[w.entities.climate]:void 0,pe=!!le&&(le.attributes.hvac_action==="cooling"||le.state==="cool");O.push({part:"cabin",color:pe?[.45,.8,1]:[1,.55,.22],level:.35})}O.length&&s.set(`${b.id}:vehicle`,{color:O[0].color,level:O[0].level,faces:O})}if(b.type==="radiator"&&(L&&j(L.entity_id)==="climate"||b.heat_sensor)){let O=L&&j(L.entity_id)==="climate"?L.attributes:null;if(ps(e,b.heat_sensor)??(O==null?void 0:O.hvac_action)==="heating"){let pe=O&&typeof O.temperature=="number"&&typeof O.current_temperature=="number"?O.temperature-O.current_temperature:1;s.set(b.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,pe))})}}else if(oe){let O=xa(oe);O&&s.set(b.id,{color:O,level:1,apRing:O})}else if(ee){let O=Ra(b);ee.on&&s.set(b.id,{color:ee.heating?[1,.45,.12]:[.25,.85,1],level:ee.heating?1:.55,plain:!0,dots:{n:O,lit:Math.max(0,Math.min(O,Math.round(ee.showers??0))),color:[.35,.9,1]}})}else if(b.type==="ac_unit"&&L&&j(L.entity_id)==="climate"){let O=fs(L);O&&s.set(b.id,O)}else if((b.type==="washer"||b.type==="dryer"||b.type==="dishwasher")&&Je)s.set(b.id,Wc(b.type));else if(b.type==="stove"||rr(b.type)){let O=hs(L,Je);O>0&&s.set(b.id,{color:[1,.05,.01],level:O,faces:[{part:"burners",color:[1,.05,.01],level:O}]})}let tn=ye(b.type),nn=!!tn&&!tn.light&&tn.parts.some(O=>O.glow);if(L&&nn&&V("sound")&&j(L.entity_id)==="media"&&L.state==="playing"&&!io(b.type)){let O=typeof L.attributes.volume_level=="number"?L.attributes.volume_level:.5;s.set(b.id,{color:xr(L)??[.22,.88,1],level:.5+.5*O,ring:!0,plain:!0})}if(L&&io(b.type)&&!rr(b.type)&&!(Xn(b.type)&&j(L.entity_id)==="cover")){let O=V("screens"),le=j(L.entity_id)==="light"?gt(L):null,pe=j(L.entity_id)==="media"&&["playing","on","paused","idle"].includes(L.state),Le=O&&j(L.entity_id)==="media"?xr(L):le?le.color:qe(L)||pe?[.22,.88,1]:null,ie=O&&j(L.entity_id)==="media"?L.attributes.entity_picture??null:null;Le&&s.set(b.id,{color:Le,level:L.state==="playing"?1:.6,picture:ie,ring:nn&&V("sound")&&L.state==="playing"})}if(n.has(ne))continue;n.add(ne);let Wn=D.entity?j(D.entity):null,Pt=M.rooms.find(O=>O.points.length>=3&&B([b.x,b.z],O.points));i.push({id:ne,floorId:M.id,roomId:(Pt==null?void 0:Pt.id)??null,x:b.x,z:b.z,y:Bc(b)+me(M,b),icon:b.icon?kn(b.icon):Wt(Wn??"switch"),name:b.name||(oe&&D.entity?Jn(e,D.entity):D.entity?J(e,D.entity):ve(e,b.type)),ownName:b.name||void 0,showName:!!b.show_name,text:Q(Me??(oe?this.apText(e,oe):ee?this.heaterText(e,ee):w?this.carText(e,w,!!L&&!Eo.has(L.state.toLowerCase())):b.type==="home_battery"?this.batteryText(e,C,re):b.type==="wallbox"?this.wallboxText(e,C,re):b.type==="meter"?this.meterText(e,re):L?$e(e,L):re!==null?ce(e,Math.max(0,re)):"")),active:Me?!0:oe?oe.status==="up":ee?ee.heating:w?w.charging:L?qe(L):(re??0)>(typeof b.run_w=="number"&&b.run_w>0?b.run_w:5),unavailable:L?Y(L):!1,glow:null,furnitureId:b.id,energyDevice:b.type==="inverter"||b.type==="home_battery"||b.type==="wallbox"||b.type==="meter"||!!w||!!N,show:b.marker??(w||Me?"always":void 0),fromFurniture:!0})}let p=(_=t.settings.household)==null?void 0:_.notes,h=p&&p!=="none"?e.states[p]:void 0;if(d&&h&&!Y(h)&&h.state.trim()){let M=h.state.split(/\s*(?:\||\n|;)\s*/).map(b=>b.trim()).filter(Boolean).slice(0,8);c.unshift(...M.map(b=>({icon:"pin-outline",text:b,entity:p})))}this._household=c.filter((M,b)=>c.findIndex(T=>T.text===M.text)===b),this.cameraScreens=0;let f=yr(e,t.floors),m=V("screens");for(let M of t.floors)for(let b of M.furniture){if(!m||!((y=b.pictures)!=null&&y.length)||!io(b.type)||b.type==="fridge_smart"&&((x=f.get(b.id))!=null&&x.right))continue;let T=b.pictures.find(U=>_s(e,U));if(!T)continue;let z=this.pictureUrl(T.image),H=b.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];z&&s.set(b.id,{color:H,level:1,picture:z,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:i,consumers:a,screens:s,targets:l}}watchHousehold(e,t){let n=t.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox"),r=V("household")&&n.length>0&&!this.replay,i=r?al(t.floors):[],a=i.join(",");if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let s=async()=>{i.length&&(this.pickups=await Dr(this.hass??e,i)),this.syncDevices(!0)};(a!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=a,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void s(),6e5),i.length&&Dr(e,i).then(l=>{this.pickups=l,this.syncDevices(!0)}))}householdState(e,t,n){var l,d,c,u;let r=p=>{let h=parseInt(p.slice(1),16);return[(h>>16&255)/255,(h>>8&255)/255,(h&255)/255]};if(n.type==="waste_bin"){let p=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!p)return null;let h=Or(n,e,this.pickups,new Date,{from:(d=(l=this.building)==null?void 0:l.settings.household)==null?void 0:d.bin_from,until:(u=(c=this.building)==null?void 0:c.settings.household)==null?void 0:u.bin_until});if(!h)return null;let f=h.days===0?A(e,"bin_today"):h.days===1?A(e,"bin_tomorrow"):A(e,"bin_in_days",{n:h.days}),m=r(il(n)[1]),g=Math.max(...m),y=g-Math.min(...m)<.12?[.92,.95,1]:m.map(b=>Math.min(1,b/Math.max(.001,g)*1.05)),x=n.name||A(e,`bin_kind_${n.bin_kind??"rest"}`),M=`#${y.map(b=>Math.round(b*255).toString(16).padStart(2,"0")).join("")}`;return this.binHolos.push({floorId:t.id,x:n.x,z:n.z,y:me(t,n)+n.h,name:x,color:M,when:f,soon:h.days<=1}),{item:h.days<=1?{icon:"trash-can-outline",text:`${x}: ${f}`,entity:p,hot:h.glow}:void 0}}if(n.type!=="mailbox"){let p=Lr(n,e),h=[1,.55,.12],f=n.name||ve(e,n.type);return p?(this.binHolos.push({floorId:t.id,x:n.x,z:n.z,y:me(t,n)+n.h,name:f,color:"#ff8c1f",when:A(e,"hh_thirsty"),soon:!0}),{screen:{color:h,level:.9,faces:[{part:"band",color:h,level:.9}]},item:{icon:"watering-can-outline",text:A(e,"hh_plant",{name:f}),entity:n.moisture??null,hot:!0}}):null}let i=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!i)return null;let a=cl(n,e),s=[1,.62,.15];return a&&this.binHolos.push({floorId:t.id,x:n.x,z:n.z,y:me(t,n)+n.h,name:n.name||ve(e,n.type),color:"#ffb547",when:A(e,"mailbox_post"),soon:!0}),{screen:a?{color:s,level:1,faces:[{part:"top",color:s,level:1},{part:"band",color:s,level:.8}]}:void 0,item:a?{icon:"email-alert-outline",text:n.name?`${n.name}: ${A(e,"mailbox_post")}`:A(e,"mailbox_post"),entity:i,hot:!0}:void 0}}robotPaths(e,t){var i,a;let n=this.replay;if(!n)return[];let r=[];for(let s of t.floors){let l=s.rooms.filter(d=>d.points.length>=3);for(let d of s.furniture){if(!Ct(d.type))continue;let c=((a=(i=this.furnitureLinks)==null?void 0:i.get(d.id))==null?void 0:a.entity)??null;if(!c)continue;let u=n.robotRooms(c,xn(e,c,d.room_sensor)),p=[];for(let h of u){let f=kr(e,l,h),m=f?Re(f.points):null,g=p[p.length-1];m&&(!g||g[0]!==m[0]||g[1]!==m[1])&&p.push([m[0],m[1]])}p.length&&r.push({floorId:s.id,points:p})}}return r}trailNow(e,t){let n=this.now(),r=jn(e,t),i=this.replay?this.replay.rows(r.map(s=>s.entity),n-Hn,n):this.trailRows,a=r.map(s=>{let l=e.states[s.entity];return{entity:s.entity,state:l==null?void 0:l.state,lastChanged:l!=null&&l.last_changed?Date.parse(l.last_changed):void 0}});return ec(r,Zl(i,a,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!V("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!V("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let r=jn(t,n).map(i=>i.entity);if(r.length){try{let i=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Hn).toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=i??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,t){let n=[];if(As()){let r=new Set(t.floors.flatMap(i=>i.placements.map(a=>a.entity_id)).filter(i=>j(i)==="camera"));for(let i of r){let a=e.states[i],s=a==null?void 0:a.attributes.entity_picture;!s||Y(a)||n.push({id:i,url:s.startsWith("data:")?s:`${s}${s.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t==null?void 0:t.attributes.entity_picture;return!n||Y(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),_a(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(r=>{if(n.has(r.type)||r.type.startsWith("lamp_")&&r.type!=="lamp_floor"&&r.type!=="lamp_uplight"||r.h<.04||me(e,r)>.12)return!1;let i=ye(r.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(r.type))?!1:B([r.x,r.z],t)||mt(r).some(a=>B(a,t))}).map(r=>mt(r))}robotInfos(e,t){var r,i;let n=[];for(let a of t.floors)for(let s of a.furniture){if(!Ct(s.type))continue;let l=((r=this.furnitureLinks.get(s.id))==null?void 0:r.entity)??null,d=l?(i=e.states[l])==null?void 0:i.state:void 0,c=_r(d)?"cleaning":d==="returning"?"returning":d==="error"?"error":d==="docked"||!d?"docked":"idle",u=s.rotation*Math.PI/180,p=ft(s.type),h=s.d*(p?.227:.14),f=[s.x-Math.sin(u)*h,s.z+Math.cos(u)*h],m=a.rooms.filter(x=>x.points.length>=3),_=(c==="cleaning"?$s(e,m,l,xn(e,l,s.room_sensor)):null)??m.find(x=>B(f,x.points)),y=c==="cleaning"&&_?this.robotObstacles(a,_.points):[];n.push({id:s.id,floorId:a.id,rest:f,restHeading:-u,mode:c,room:(_==null?void 0:_.points)??null,roomId:(_==null?void 0:_.id)??null,obstacles:y,...p?{inModel:p}:{}})}return n}batteryText(e,t,n){var a;let r=t?Number((a=e.states[t])==null?void 0:a.state):Number.NaN,i=[];return Number.isFinite(r)&&i.push(`${se(e,r,0)} %`),n!==null&&Math.abs(n)>=10&&i.push(`${n<0?"\u25B2":"\u25BC"} ${ce(e,Math.abs(n))}`),i.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?ce(e,0):`${A(e,t<0?"energy_grid_export":"energy_grid_import")} ${ce(e,Math.abs(t))}`}wallboxText(e,t,n){let r=t?e.states[t]:void 0,i=String((r==null?void 0:r.state)??"").toLowerCase(),a=(n??0)>50||/charg|laden|lädt/.test(i),s=r!=null&&r.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=a?A(e,"wallbox_charging"):s?A(e,"wallbox_plugged"):r&&!Y(r)&&!r.entity_id.startsWith("binary_sensor.")?$e(e,r):"",d=n!==null&&n>50?ce(e,n):"";return[l,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],r=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[i,a]of r){if(!i||i==="none")continue;let s=e.states[i];if(!s||Y(s)||!(qe(s)||s.state==="home"||s.state==="occupied"||s.state==="on"))continue;let d=j(i)==="light"?gt(s):null;n.push({part:a,color:d?d.color:[1,.71,.28],level:d?d.level:.85})}return n}carText(e,t,n){let r=a=>A(e,a);if(n||t.away!==null){let a=t.away?` \xB7 ${t.away}`:"";return`${r("car_away")}${a}`}let i=[];return t.soc!==null&&i.push(`${se(e,t.soc,0)} %`),t.range!==null&&i.push(`${se(e,t.range,0)} ${t.rangeUnit}`),t.charging?i.push(t.chargingW!==null?`\u26A1 ${ce(e,t.chargingW)}`:`\u26A1 ${r("car_charging_short")}`):t.plugged&&i.push("\u{1F50C}"),t.locked!==null&&i.push(t.locked?"\u{1F512}":"\u{1F513}"),i.join(" \xB7 ")}ceilingAt(e,t,n){var l;let i=((l=e.rooms.find(d=>d.ceiling_height&&d.points.length>=3&&B([t,n],d.points)))==null?void 0:l.ceiling_height)||e.height,a=this.building;if(!a||!(a.settings.roof.sections??[]).some(d=>Ls(d,e.elevation+i)))return i;let s=Vs(a,t,n);return s===null?i:Math.max(.5,Math.min(i,s-e.elevation))}apOf(e){var t,n;if(!this.hass||!this.building)return null;for(let r of this.building.floors)for(let i of r.furniture){if(i.type!=="access_point")continue;let a=((n=(t=this.furnitureLinks)==null?void 0:t.get(i.id))==null?void 0:n.entity)??i.entity;if(a===e)return fn(this.hass,{entity:a})}return null}apText(e,t){if(t.status==="down")return A(e,"ap_down");if(t.status==="busy")return A(e,"ap_busy");let n=[];return t.clients!==null&&n.push(A(e,t.clients===1?"ap_client":"ap_clients",{n:Math.round(t.clients)})),t.cpu!==null&&n.push(`CPU ${se(e,t.cpu,0)} %`),n.join(" \xB7 ")||A(e,"ap_up")}heaterPower(e){var t,n;if(!this.hass||!this.building||!e.startsWith("water_heater."))return null;for(let r of this.building.floors)for(let i of r.furniture){if(i.type!=="water_heater")continue;let a=((n=(t=this.furnitureLinks)==null?void 0:t.get(i.id))==null?void 0:n.entity)??i.entity;if(a===e)return gn(this.hass,{entity:a}).power}return null}heaterText(e,t){if(!t.on)return A(e,"state_off");let n=Fe(e),r=a=>`${se(e,a,0)} ${n}`,i=[t.current!==null?t.target!==null&&t.heating?`${r(t.current)} \u2192 ${r(t.target)}`:r(t.current):null];return t.showers!==null&&i.push(A(e,t.showers===1?"heater_shower":"heater_showers",{n:Math.round(t.showers)})),t.remaining!==null&&i.push(A(e,"heater_left",{min:Math.round(t.remaining)})),i.filter(Boolean).join(" \xB7 ")}lampMarker(e,t,n,r,i=!1){let a=r?e.states[r]:void 0,s=ye(n.type),l=Ya[n.type]??(s==null?void 0:s.light)??"floor",d=t.rooms.some(x=>x.points.length>=3&&B([n.x,n.z],x.points)),c=l==="strip"&&!d?Rt(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||l==="wall"||l==="strip"?me(t,n):l==="table"?to(t,n.x,n.z,n.h):l==="bollard"||l==="garden"?Rt(t,n.x,n.z):0,u=t.rooms.find(x=>x.points.length>=3&&B([n.x,n.z],x.points)),p=this.ceilingAt(t,n.x,n.z),h=(s?s.mount==="ceiling":["ceiling","ceiling_fan","downlight","spot","panel","pendant"].includes(l))&&n.mount_y==null,f=h?t.height-p:0,m=s&&h?Math.max(0,c-f):c,g=Zn.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+eo(n.type,n.h)):Math.abs(f)>.01?p:void 0,_=g??t.height,y=s?s.mount==="ceiling"?Math.max(.5,m-.15):m+n.h+.2:{ceiling:_-.3,ceiling_fan:_-.45,downlight:_-.25,spot:_-.35,panel:_-.25,pendant:Math.max(.6,_-n.h-.25),floor:m+n.h+.25,uplight:m+n.h+.25,table:m+n.h+.2,wall:m+n.h+.2,strip:n.upright?m+n.w+.15:Math.max(.3,m-.2),bollard:m+n.h+.25,garden:m+n.h+.25}[l];return{id:r??`lamp:${n.id}`,floorId:t.id,roomId:(u==null?void 0:u.id)??null,x:n.x,z:n.z,y,icon:Wt(i?"fan":"light"),name:n.name||(r?J(e,r):ve(e,n.type)),text:a?$e(e,a):"",active:a?qe(a):!1,unavailable:a?Y(a):!1,glow:i?null:a?Sr(ms(gt(a,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_scale):null,lamp:l,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,size:[n.w,n.d,n.h],base:m,top:g,pickable:!!r,furnitureId:i?`${n.id}:fan`:n.id,fanBlades:i||void 0,fanSpeed:i?Cp(a):void 0,fanStatic:n.type==="lamp_ceiling_fan"&&!i&&!Nc(n)?!0:void 0,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?m:m+n.h*.85:void 0,effect:!!a&&a.state==="on"&&typeof a.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(a.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(e){var r;if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let t=(r=this.building)==null?void 0:r.floors.find(i=>i.id===e.floorId),n=t?we(t).find(i=>i.id===this.roomId):void 0;return!!n&&B([e.x,e.z],n.points)}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let t=j(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let r=n.cover??n.contact??n.tilt;r&&e.set(t,r)}return e}scheduleThumbs(e=600){var r;clearTimeout(this.thumbTimer);let t=((r=this.building)==null?void 0:r.floors.filter(i=>i.rooms.length).length)??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return k;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),t=[...this._thumbs].sort((i,a)=>{var s,l;return(((s=this.building.floors.find(d=>d.id===a.floorId))==null?void 0:s.elevation)??0)-(((l=this.building.floors.find(d=>d.id===i.floorId))==null?void 0:l.elevation)??0)}),n=this._thumbsCompact,r=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return v`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${A(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${A(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${A(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${r}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${A(this.hass,"all_floors")}</span>
      </button>
      ${t.map(i=>v`<button class="fp3d-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${n?k:v`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(this.ro){this.onDeviceTap(e,t,n);return}let r=this.apOf(e);if(r){!r.restart||!this.hass?xe(this,e):confirm(A(this.hass,"ap_restart_confirm",{name:Jn(this.hass,e)}))&&this.hass.callService("button","press",{entity_id:r.restart});return}if(V("auto_pro")&&this.hass&&this.building)for(let a of this.building.floors)for(let s of a.furniture){if(s.type!=="parking"||!s.car)continue;let l=wn(this.hass,s);if([s.entity,s.car.device,...Object.values(l.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:l};return}}let i=j(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:t,y:n}:xe(this,e)}onDeviceSwipe(e,t,n,r,i){var l;let a=(l=this.hass)==null?void 0:l.states[e];if(this.ro)return!1;if(t==="start"){if(!a||Y(a)||this.confirmSet.has(e))return!1;let d=j(e);if(d==="light"&&oi(a).dim){let c=a.state==="on"?typeof a.attributes.brightness=="number"?Math.round(a.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:r,y:i},!0}if(d==="cover"&&ri(a)){let c=a.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:r,y:i},!0}return!1}let s=this._swipe;if(!s||s.entity!==e)return!1;if(t==="move"){let d=Math.round(Math.min(100,Math.max(0,s.start-n/220*100)));d!==s.value&&(this._swipe={...s,value:d});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>{var t;return(t=this.viewer)==null?void 0:t.focus(e.floorId,e.x,e.z,e.y,e.entity)},120)}renderBinInfo(){var l;let e=this._binInfo,t=this.hass,n=e&&((l=this.building)==null?void 0:l.floors.flatMap(d=>d.furniture).find(d=>d.id===e.furnitureId));if(!e||!t||!n)return k;let r=ll(n,t,this.pickups),i=new Date;i.setHours(0,0,0,0);let a=d=>{let c=Math.round((d.getTime()-i.getTime())/864e5);return c===0?A(t,"bin_today"):c===1?A(t,"bin_tomorrow"):d.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},s=n.name||A(t,`bin_kind_${n.bin_kind??"rest"}`);return v`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${s}</span>
      ${r.length?r.map(d=>v`<b>${a(d.day)}${d.summary&&d.summary!==s?v` <small>· ${d.summary}</small>`:k}</b>`):v`<b>${A(t,"bin_none")}</b>`}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!V("household")||this.panelOpen)return k;let e=()=>{this._hhFolded=!this._hhFolded,Dp("neonplan3d.hhFolded",this._hhFolded)};return v`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${A(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?k:this._household.map(t=>v`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):xe(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderClock(){var a;let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),k;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let t=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),r=(a=this.hass.config)==null?void 0:a.time_zone,i=s=>{try{return t.toLocaleString(n,r?{...s,timeZone:r}:s)}catch{return t.toLocaleString(n,s)}};return v`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${i({hour:"2-digit",minute:"2-digit"})}</b><span>${i({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return k;let t=this._alerts.slice(0,3);return v`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>v`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${Ur(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${Ur(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?v`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:k}
    </div>`}renderScenes(){var i,a;let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return k;let t=e.floors.flatMap(s=>we(s)).find(s=>s.id===this.roomId),n=t?ge(this.hass,t.area_id).filter(s=>j(s)==="scene"||j(s)==="script").slice(0,6):[];if(!n.length)return k;let r=t!=null&&t.area_id?(a=(i=this.hass.areas)==null?void 0:i[t.area_id])==null?void 0:a.name:void 0;return v`<div class="fp3d-scenes">
      ${n.map(s=>v`<button class="fp3d-chip" aria-pressed=${this._sceneFired===s} @click=${()=>this.runScene(s)}>${J(this.hass,s,r)}</button>`)}
    </div>`}async syncPets(){var a,s,l,d,c,u,p;let e=this.building,t=this.viewer,n=((a=e==null?void 0:e.settings.pets)==null?void 0:a.on)!==!1&&this.petsOn!==!1,r=n?((s=e==null?void 0:e.settings.pets)==null?void 0:s.list)??[]:[],i=n&&!!(e!=null&&e.floors.some(h=>h.furniture.some(f=>/:aquarium(_large)?$/.test(f.type))));if(!t||!e||!V("fun_pets")||!r.length&&!i){(l=this.pets)==null||l.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,r));return}if(!this.petsLoading){this.petsLoading=!0;try{let[h,f]=await Promise.all([ai(),Ln()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=h.startPets({lib:f.funLib,FloorMap:f.FloorMap,viewer:this.viewer,building:this.building,pets:((c=(d=this.building)==null?void 0:d.settings.pets)==null?void 0:c.on)!==!1&&this.petsOn!==!1?((p=(u=this.building)==null?void 0:u.settings.pets)==null?void 0:p.list)??[]:[],night:()=>{var m,g;return((g=(m=this.hass)==null?void 0:m.states["sun.sun"])==null?void 0:g.state)==="below_horizon"},base:(m,g)=>me(m,g),closedDoors:()=>{var _,y,x;let m=new Set,g=((_=this.hass)==null?void 0:_.states)??{};for(let M of((y=this.building)==null?void 0:y.floors)??[])for(let b of M.openings)b.type==="door"&&b.contact&&((x=g[b.contact])==null?void 0:x.state)==="off"&&m.add(b.id);return m}})}catch(h){console.error("CasaNeon: the pets failed to load",h)}finally{this.petsLoading=!1}}}async syncGhost(){var n,r;let e=this.building,t=!!e&&V("fun_halloween")&&((n=e.settings.halloween)==null?void 0:n.ghost)!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){(r=this.ghost)==null||r.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[i,a]=await Promise.all([ai(),Ln()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=i.startGhost({lib:a.funLib,viewer:this.viewer,building:this.building,night:()=>{var s,l;return((l=(s=this.hass)==null?void 0:s.states["sun.sun"])==null?void 0:l.state)==="below_horizon"}})}catch(i){console.error("CasaNeon: the ghost failed to load",i)}finally{this.ghostLoading=!1}}}async startWalk(){let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=e.floors.filter(u=>u.rooms.some(p=>p.points.length>=3)),i=(this.roomId?n.find(u=>u.rooms.some(p=>p.id===this.roomId)):void 0)??n.find(u=>u.id===this.floorId)??[...n].sort((u,p)=>Math.abs(u.elevation)-Math.abs(p.elevation))[0];if(!i)return;let a=await Ln();this._walk={room:null,hint:!0},await this.updateComplete;let s=this.renderRoot.querySelector(".fp3d-walk-surface");if(!s)return;t.setFloor(i.id,!1),t.setWallMode("auto");let l=new a.FloorMap(e,i),d=this.roomId?i.rooms.find(u=>u.id===this.roomId):void 0,c;if(d){let u=l.freeNear(Re(d.points));c={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new a.WalkCamera(t,l,s,{start:c,onRoom:u=>{this.walkRoomPts=(u==null?void 0:u.points)??null,this._walk&&(this._walk={...this._walk,room:(u==null?void 0:u.name)??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){var t;if(!this.walker&&!this._walk)return;(t=this.walker)==null||t.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return k;let e=i=>A(this.hass,i);if(!this._walk)return v`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,r=(i,a)=>{var u;if(!n)return;let s=44,l=i.clientX-n.cx,d=i.clientY-n.cy,c=Math.hypot(l,d);c>s&&([l,d]=[l/c*s,d/c*s]),a.firstElementChild.style.transform=`translate(${l}px, ${d}px)`,(u=this.walker)==null||u.setStick({x:l/s,y:d/s})};return v`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?v`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:k}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${i=>{let a=i.currentTarget,s=a.getBoundingClientRect();n={id:i.pointerId,cx:s.left+s.width/2,cy:s.top+s.height/2},a.setPointerCapture(i.pointerId),r(i,a)}}
        @pointermove=${i=>r(i,i.currentTarget)}
        @pointerup=${i=>{var a;n=null,i.currentTarget.firstElementChild.style.transform="",(a=this.walker)==null||a.setStick(null)}}
        @pointercancel=${i=>{var a;n=null,i.currentTarget.firstElementChild.style.transform="",(a=this.walker)==null||a.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return k;if(this._find===null)return v`<button class="fp3d-find-btn" title=${A(this.hass,"find")} aria-label=${A(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=nc(this.findIndex??=Io(this.hass,e),this._find);return v`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${A(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${A(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?v`<div class="fp3d-find-list">
            ${t.length?t.map(n=>v`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?so(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?v`<small>${n.where}</small>`:k}</span>
                  </button>`):v`<p>${A(this.hass,"find_none")}</p>`}
          </div>`:k}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return k;let n=(m,g)=>A(t,m,g),r=v`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return r;let i=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,a=i?[i]:e.floors,s=a.flatMap(m=>$r(t,m).lights),l=a.flatMap(m=>$r(t,m).covers),d=s.filter(m=>{var g;return((g=t.states[m])==null?void 0:g.state)==="on"}).length,c=!i,u=(m,g,_,y)=>{if(y.length){if(c&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(g,_,{entity_id:y})}},p=(m,g,_,y,x)=>v`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!x.length} @click=${()=>u(m,_,y,x)}>
        ${this._armed===m?n("central_sure"):n(g)}
      </button>`,h=(e.settings.favorites??[]).filter(m=>t.states[m]),f=this.buttons??e.settings.buttons??[];return v`${r}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <b>${i?i.name:n("central_house")}</b>
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${s.length?v` <small>${d}/${s.length}</small>`:k}</span>
          ${p("lights_on","central_on","light","turn_on",s.filter(m=>{var g;return((g=t.states[m])==null?void 0:g.state)==="off"}))}
          ${p("lights_off","central_off","light","turn_off",s.filter(m=>{var g;return((g=t.states[m])==null?void 0:g.state)==="on"}))}
        </div>
        ${l.length?v`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:k}
        <b>${n("central_favorites")}</b>
        ${h.length?v`<div class="fp3d-central-favs">
              ${h.map(m=>{let[g,_]=Ss(m),y=t.states[m],x=g==="homeassistant"&&(y==null?void 0:y.state)==="on";return v`<button
                  class="fp3d-chip"
                  aria-pressed=${x||this._sceneFired===m}
                  ?disabled=${Y(y)}
                  @click=${()=>{t.callService(g,_,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${J(t,m)}
                </button>`})}
            </div>`:f.length?k:v`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${f.length?v`<div class="fp3d-central-favs">
              ${f.map(m=>v`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${Hp(t,m)}
                  @click=${g=>{Es(t,g.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?v`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:k}${m.label}
                </button>`)}
            </div>`:k}
      </div>`}mediaCardUp(e,t){var i;let n=e.states[t];if(!n||j(t)!=="media")return!1;if(!this.ro&&(((i=this.mediaGrace.get(t))==null?void 0:i.until)??0)>Date.now()&&Y(n))return!0;let r=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(a=>typeof a=="string"&&!!a.trim());return!Y(n)&&(n.state==="playing"||n.state==="paused"&&r)}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return k;let e=A(this.hass,this.clean?"controls_show":"controls_hide");return v`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?Tt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:Tt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return k;let t=this._voice,n=(t==null?void 0:t.phase)==="wait"||(t==null?void 0:t.phase)==="listen",r=A(e,"voice_button"),i=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return v`<button class="fp3d-mic ${(t==null?void 0:t.phase)==="listen"?"fp3d-mic-on":""}" style="left:${i}px" title=${r} aria-label=${r} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${Tt`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${t?v`<div class="fp3d-mic-say ${t.phase==="error"?"fp3d-mic-err":""}" style="left:${i}px">${t.text}</div>`:k}`}sayVoice(e,t){this._voice={phase:e,text:t},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==r)return;let i=null;try{let a=await Zt();i=await this.handleSentence(t,n,a,e.text,e.speak),i===null&&this.sayVoice("error",A(t,"voice_none"))}catch(a){this.sayVoice("error",A(t,"voice_error",{msg:String((a==null?void 0:a.message)??a)}))}try{await ba(t,e.ask_id,i??"",i!==null)}catch{}}async onMic(){var i,a;let e=this.hass,t=this.building;if(!e||!t||((i=this._voice)==null?void 0:i.phase)==="wait"||((a=this._voice)==null?void 0:a.phase)==="listen")return;clearTimeout(this.voiceTimer);let n=(s,l)=>this.sayVoice(s,l);n("wait","\u2026"),this.tourToken++;let r;try{let s=window.AudioContext??window.webkitAudioContext;r=new s,r.resume()}catch{r=void 0}try{let s=await Zt(),l=await s.listenOnce(e,()=>n("listen",A(e,"voice_listen")),Ho(),r);if(!l){n("error",A(e,"voice_none"));return}if(await this.handleSentence(e,t,s,l,!0)!==null)return;n("wait",`\u201C${l}\u201D \u2026`);let d=await s.converse(e,l);n("done",d?`\u201C${l}\u201D \u2013 ${d}`:`\u201C${l}\u201D`)}catch(s){let l=s,d=(l==null?void 0:l.message)==="no_pipeline"?"voice_no_pipeline":(l==null?void 0:l.message)==="silent"?"voice_silent":(l==null?void 0:l.name)==="NotAllowedError"||(l==null?void 0:l.name)==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",d?A(e,d):A(e,"voice_error",{msg:String((l==null?void 0:l.message)??(l==null?void 0:l.name)??s)}))}}async handleSentence(e,t,n,r,i){var d,c,u;let a=(p,h)=>this.sayVoice(p,h),{devices:s,items:l}=this.spokenDevices(e,t,n.SYNONYMS);{let p=n.showTarget(r,t,s,m=>{var g,_;return m.area_id?(_=(g=e.areas)==null?void 0:g[m.area_id])==null?void 0:_.name:null});if(p){let m=p.kind==="house"?A(e,"all_floors"):p.kind==="cameras"?A(e,"camera_wall_title"):p.name;if(a("done",`\u201C${r}\u201D \u2192 ${m}`),this.directing.touch(Date.now()),p.kind==="cameras")V("camera_cockpit")?this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0})):this._proHint="camera_cockpit";else if(p.kind==="device"){let g=l.get(p.id);p.camera&&p.entity&&V("camera_cockpit")?this.lookThrough(p.entity):g&&this.goTo(g)}else p.kind==="house"?this.fire("floor-tap",{floorId:null}):p.kind==="floor"?this.fire("floor-tap",{floorId:p.floorId}):(this.floorId!==p.floorId&&this.fire("floor-tap",{floorId:p.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:p.floorId,roomId:p.roomId}),60));return A(e,"voice_showing",{name:m})}let h=this.moduleHost(e,t,n.SYNONYMS,m=>n.showTarget(m,t,s,g=>{var _,y;return g.area_id?(y=(_=e.areas)==null?void 0:_[g.area_id])==null?void 0:y.name:null})),f=await rc(r,h);if(f){a("done",f.text?`\u201C${r}\u201D \u2013 ${f.text}`:`\u201C${r}\u201D`),this.directing.touch(Date.now()),(d=f.highlight)!=null&&d.length&&((c=this.viewer)==null||c.flashDevices(f.highlight));let m=f.focus,g=f.spoken??f.text??"";if((u=f.tour)!=null&&u.length){let _=i&&f.speak!==!1?x=>n.speak(e,x,Ho()):null,y=f.spoken??f.text;return y&&_&&await _(y),this.runTour(f.tour,t,l,_),g}if(m!=null&&m.roomId&&m.floorId)this.floorId!==m.floorId&&this.fire("floor-tap",{floorId:m.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:m.floorId,roomId:m.roomId}),60);else if(m!=null&&m.floorId&&!m.entity&&!m.furnitureId)this.fire("floor-tap",{floorId:m.floorId});else if(m!=null&&m.entity||m!=null&&m.furnitureId){let _=l.get(m.entity??`furniture:${m.furnitureId}`);_&&this.goTo(_)}return f.text&&f.speak!==!1&&i&&n.speak(e,f.text,Ho()),g}}return null}spokenDevices(e,t,n){let r=this.findIndex??=Io(e,t),i=new Map(t.floors.flatMap(u=>we(u).map(p=>[p.id,p.name]))),a=[],s=[],l=new Map;for(let u of r)u.kind==="device"&&u.entity&&l.set(u.entity,u);let d=new Set;for(let u of t.floors){let p=we(u);for(let h of u.furniture){if(Op.has(h.type))continue;let f=this.furnitureLinks.get(h.id),m=(f==null?void 0:f.entity)??(f==null?void 0:f.power)??null,g=m??`furniture:${h.id}`,_=p.find(z=>z.points.length>=3&&B([h.x,h.z],z.points)),y=ve(e,h.type),x=[h.name,...h.aliases??[],y,m?J(e,m):null,...n[h.type]??[]].filter(z=>!!z),M=h.name||(m?J(e,m):y);a.push({id:g,entity:m,name:M,names:x,room:(_==null?void 0:_.name)??"",camera:!!m&&j(m)==="camera"});let b=(h.type==="plant"||Hr(h.type))&&!!h.moisture&&h.moisture!=="none",T=V("household")&&typeof h.remaining=="string"&&h.remaining!=="none"?Vr(e.states[h.remaining]):null;s.push({id:g,entity:m,name:M,names:x,room:(_==null?void 0:_.name)??"",floorId:u.id,roomId:(_==null?void 0:_.id)??null,power:(f==null?void 0:f.power)??null,type:h.type,remaining:T,thirsty:b&&V("household")?Lr(h,e):null}),m?d.add(m):l.set(g,{kind:"device",name:M,where:"",floorId:u.id,roomId:(_==null?void 0:_.id)??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(u.height-.3,Math.max(.5,h.h))})}}let c=new Map(t.floors.flatMap(u=>u.placements.map(p=>[p.entity_id,p])));for(let[u,p]of l){if(d.has(u)||u.startsWith("furniture:"))continue;let h=p.roomId&&i.get(p.roomId)||"",f=c.get(u),m=[f==null?void 0:f.name,...(f==null?void 0:f.aliases)??[],p.name].filter(g=>!!g);a.push({id:u,entity:u,name:p.name,names:m,room:h,camera:j(u)==="camera"}),s.push({id:u,entity:u,name:p.name,names:m,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:a,items:l,spoken:s}}lockMarkers(e,t){var r,i;let n=[];for(let a of t.floors)for(let s of a.openings){let l=(i=(r=this.openingLinks)==null?void 0:r.get(s.id))==null?void 0:i.lock;if(!l)continue;let d=this.openingSpot(t,s.id);if(!d)continue;let c=e.states[l];n.push({id:l,floorId:a.id,roomId:s.room_id,x:d.x,z:d.z,y:Math.min(d.y+.35,1.5),icon:Wt("lock"),name:J(e,l),text:c?$e(e,c):"",active:!!c&&(c.state==="unlocked"||c.state==="open"||c.state==="unlocking"),unavailable:!c||Y(c),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(e,t){for(let n of e.floors){let r=n.openings.find(m=>m.id===t);if(!r)continue;let i=Os(r,n.rooms,n.walls??[]);if(!i)return null;let a=i.room.points,s=a[i.edge],l=a[(i.edge+1)%a.length],d=Math.hypot(l[0]-s[0],l[1]-s[1])||1,c=[(l[0]-s[0])/d,(l[1]-s[1])/d],p=Ne(a)>0?[-c[1],c[0]]:[c[1],-c[0]],[h,f]=co(i.room,i.edge,r.offset+r.width/2);return{floorId:n.id,x:h+p[0]*.2,z:f+p[1]*.2,y:Math.max(.5,r.sill+r.height/2),theta:Math.atan2(p[0],p[1])}}return null}async runTour(e,t,n,r){var c;let i=++this.tourToken;clearTimeout(this.tourTimer);let a=e.map(u=>{if(u.openingId){let h=this.openingSpot(t,u.openingId);return h?{...h,entity:null,say:u.say,inside:!0}:null}let p=n.get(u.entity??`furniture:${u.furnitureId}`);return p?{floorId:p.floorId,x:p.x,z:p.z,y:p.y,theta:void 0,entity:p.entity,say:u.say,inside:!1}:null}).filter(u=>!!u).slice(0,8);if(!a.length)return;let s=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};s==null||s.addEventListener("pointerdown",l,{once:!0});let d=u=>new Promise(p=>this.tourTimer=setTimeout(p,u));for(let u of a){if(i!==this.tourToken||(this.floorId!==u.floorId&&(this.fire("floor-tap",{floorId:u.floorId}),await d(150)),i!==this.tourToken)||((c=this.viewer)==null||c.focus(u.floorId,u.x,u.z,u.y,u.entity,u.inside?{radius:3.2,phi:1.05,theta:u.theta}:void 0),await d(900),i!==this.tourToken))break;let p=u.say&&r?await r(u.say):!1;if(i!==this.tourToken)break;await d(p?1200:2600)}s==null||s.removeEventListener("pointerdown",l)}spokenOpenings(e,t){var i,a,s;let n=[],r=l=>A(e,l);for(let l of t.floors){let d=new Map(we(l).map(c=>[c.id,c.name]));for(let c of l.openings){let u=(i=this.openingLinks)==null?void 0:i.get(c.id);if(!u)continue;let p=c.type==="garage"?"garage":c.type==="door"?"door":"window",h=We(e,u,c.type),f=h.open>.02||h.open2>.02||c.type==="garage"&&(h.cover??0)>.02,m=!f&&(h.tilt>.02||h.tilt2>.02);for(let g of[u.contact,u.contact2,u.cover,u.tilt,u.tilt2])g&&g!=="none"&&n.push({id:c.id,entity:g,kind:p,name:r(`opening_${c.type}`),room:d.get(c.room_id)??"",floorId:l.id,roomId:c.room_id,open:f,tilted:m})}}for(let l of((a=t.settings.roof)==null?void 0:a.windows)??[]){let d=h=>h&&h!=="none"?h:null,c=We(e,{cover:d(l.cover),contact:d(l.contact),tilt:d(l.tilt)},"window"),u=c.open>.02,p=!u&&c.tilt>.02;for(let h of[l.contact,l.cover,l.tilt])h&&h!=="none"&&n.push({id:l.id,entity:h,kind:"roof_window",name:l.name||r("roof_window"),room:"",floorId:((s=t.floors[t.floors.length-1])==null?void 0:s.id)??"",roomId:null,open:u,tilted:p})}return n}sceneHost(e,t){return this.moduleHost(e,t,{},()=>null)}moduleHost(e,t,n,r){let i=null,a=()=>i??=this.spokenDevices(e,t,n).spoken,s={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>a(),findDevice:l=>{let d=r(l);return(d==null?void 0:d.kind)==="device"&&d.id?a().find(c=>c.id===d.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>{var l,d;return!!((d=(l=this.hass)==null?void 0:l.user)!=null&&d.is_admin)&&!this.ro},updateBuilding:l=>{var u;let d=this.building;if(!d||!this.hass||this.ro||!((u=this.hass.user)!=null&&u.is_admin))return;let c=structuredClone(d);l(c),this.building=c,Qn(this.hass,c).catch(p=>this.serviceFailed("neonplan3d/building/save",p))},callService:(l,d,c)=>this.hass?this.hass.callService(l,d,c):Promise.resolve(),newId:l=>Ga(l),waterLevel:(l,d)=>{var p;let c=(p=this.building)==null?void 0:p.floors.find(h=>h.id===l),u=c==null?void 0:c.outdoor.find(h=>h.id===d);return!c||!u||u.type!=="pool"?null:{y:Ft(c,u),floorY:bn(c,u)}},refresh:()=>this.requestUpdate(),plan:bi,openings:()=>this.spokenOpenings(e,t),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>{var d;return{id:l.id,entity:l.powerEntity,name:((d=a().find(c=>c.entity===l.id||c.power===l.powerEntity))==null?void 0:d.name)??J(e,l.id),watts:l.power}}).sort((l,d)=>d.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,t),cars:()=>this.spokenCars(e,t),pools:()=>cc(s),weather:()=>xt(e,this.weatherEntityId??t.settings.weather_entity)};return s}spokenAlerts(e,t){let n=new Map(t.floors.flatMap(r=>we(r).map(i=>[i.id,i.name])));return this._alerts.map(r=>({kind:r.kind,entity:r.entity,name:J(e,r.entity),room:r.roomId?n.get(r.roomId)??null:null,floorId:r.floorId,roomId:r.roomId}))}spokenCars(e,t){if(!V("auto_pro"))return[];let n=[];for(let r of t.floors)for(let i of r.furniture){if(i.type!=="parking"||!i.car)continue;let a=Xt(e,i),s=wn(e,i),l=s.entities.tracker?e.states[s.entities.tracker]:void 0,d=!!a&&!(l&&!Eo.has(l.state.toLowerCase()));n.push({name:i.name||(a?ve(e,a):ve(e,"car")),spot:i.id,floorId:r.id,present:d,away:s.away,soc:s.soc,range:s.range,rangeUnit:s.rangeUnit,charging:s.charging,chargingW:s.chargingW,plugged:s.plugged,locked:s.locked})}return n}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return k;let t=e.kind==="light"&&e.value<=0;return v`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${J(this.hass,e.entity)}</span>
      <b>${t?A(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){var a;let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!V("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let r=(a=n.floors.find(s=>s.placements.some(l=>l.entity_id===e)))==null?void 0:a.id;if(!r)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let i=this.floorId===r?0:300;i&&(this.throughFloor=r,this.fire("floor-tap",{floorId:r})),setTimeout(()=>{var s,l;((s=this._through)==null?void 0:s.entity)===e&&!((l=this.viewer)!=null&&l.lookThrough(e))&&(this._through=null)},i)}endThrough(){var t,n;let e=this._through;e&&(this._through=null,((t=this.live)==null?void 0:t.id)===e.entity&&(this.live=null),(n=this.viewer)==null||n.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?k:v`<div class="fp3d-pro" role="dialog">
      <b>${A(this.hass,"pro_title")}</b>
      <span>${A(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${A(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip" href=${Is(this._proHint)} target="_blank" rel="noopener">${A(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${A(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${A(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return k;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!V("camera_cockpit"))return v`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${A(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${A(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(c=>c.placements.map(u=>u.entity_id)).filter(c=>j(c)==="camera"))];this.watchCameras(!0);let r=c=>{let u=e.states[c],p=u==null?void 0:u.attributes.entity_picture;return p&&u&&!Y(u)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},i=c=>{let u=e.states[c];return v`${J(e,c)}${(u==null?void 0:u.state)==="recording"?v` <b>● ${A(e,"state_recording")}</b>`:k}`},a=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(a){let c=r(a),u=this.liveFor(a),p=()=>{this.throughWall=!0,t(),this.lookThrough(a)};return v`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${A(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${i(a)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${A(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(c?v`<img src=${c} alt="" />`:v`<div class="fp3d-wall-none">${A(e,"state_unavailable")}</div>`)}</div>
      </div>`}let s=this.renderRoot.querySelector(".fp3d-wall-grid");s||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:d}=Ec(n.length,(s==null?void 0:s.clientWidth)??this.clientWidth-48,(s==null?void 0:s.clientHeight)??this.clientHeight-160);return v`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${A(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${A(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${d}px); grid-auto-rows: ${Math.round(d*9/16)}px">
        ${n.map(c=>{let u=r(c),p=Ge(e,c).some(h=>{var f;return((f=e.states[h])==null?void 0:f.state)==="on"});return v`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${A(e,"camera_wall_big")} @click=${()=>this._wallBig=c}>
            ${u?v`<img src=${u} alt="" />`:v`<div class="fp3d-wall-none">${A(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${i(c)}</span>
          </button>`})}
      </div>
    </div>`}renderProxmox(){if(!this.proxmoxWall||!this.hass||this.ro)return k;let e=this.hass,t=(c,u)=>A(e,c,u),n=()=>this.dispatchEvent(new CustomEvent("proxmox-close",{bubbles:!0,composed:!0})),r=Tn(e),i=c=>c===null?"\u2013":`${se(e,c,c<10?1:0)} %`,a=(c,u)=>v`<span class="fp3d-pve-bar" title=${`${c} ${i(u)}`}
        ><span class="fp3d-pve-bar-label">${c}</span><span class="fp3d-pve-bar-track"><span class="fp3d-pve-bar-fill ${(u??0)>=85?"fp3d-pve-hot":""}" style="width: ${Math.min(100,Math.max(0,u??0))}%"></span></span><span class="fp3d-pve-bar-value">${i(u)}</span></span
      >`,s=r.instances.filter(c=>c.running).length,l=r.instances.filter(c=>this._pveFilter==="all"||this._pveFilter==="on"===c.running),d=(c,u,p)=>v`<button class="fp3d-chip" aria-pressed=${this._pveFilter===c} @click=${()=>this._pveFilter=c}>${u} · ${p}</button>`;return v`<div class="fp3d-wall fp3d-pve">
      <div class="fp3d-wall-head">
        <span>${t("pve_title")}</span>
        <span class="fp3d-wall-tools">${d("all",t("pve_all"),r.instances.length)} ${d("on",t("pve_on"),s)} ${d("off",t("pve_off"),r.instances.length-s)}</span>
        <button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      ${r.nodes.map(c=>v`<button class="fp3d-pve-node ${c.online?"":"fp3d-pve-down"}" @click=${()=>xe(this,c.entity)}>
          <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${c.online?"fp3d-pve-dot-on":"fp3d-pve-dot-bad"}"></span>${c.name} · ${t(c.online?"pve_online":"pve_offline")}</span>
          ${a(t("pve_cpu"),c.cpu)} ${a(t("pve_ram"),c.memory)} ${a(t("pve_disk"),c.disk)}
          <span class="fp3d-pve-facts">
            ${c.vmsOn!==null||c.lxcOn!==null?v`<span>${t("pve_running_counts",{vms:c.vmsOn??0,lxc:c.lxcOn??0})}</span>`:k}
            ${c.load!==null?v`<span>${t("pve_load")} ${se(e,c.load,2)}</span>`:k}
            ${c.updates?v`<span>${t("pve_updates",{n:c.updates})}</span>`:k}
            ${c.failedTasks?v`<span class="fp3d-pve-warn">${t("pve_failed",{n:c.failedTasks})}</span>`:k}
          </span>
        </button>`)}
      <div class="fp3d-pve-grid">
        ${l.length?l.map(c=>v`<button class="fp3d-pve-tile ${c.running?"":"fp3d-pve-off"} ${c.problem?"fp3d-pve-down":""}" @click=${()=>xe(this,c.entity)}>
                <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${c.problem?"fp3d-pve-dot-bad":c.running?"fp3d-pve-dot-on":""}"></span>${c.name}</span>
                <span class="fp3d-pve-sub">${c.vmid!==null?`#${c.vmid} \xB7 `:""}${t(c.kind==="vm"?"pve_vm":"pve_lxc")}${c.ip?` \xB7 ${c.ip}`:""}</span>
                ${c.running?v`${a(t("pve_cpu"),c.cpu)} ${a(t("pve_ram"),c.memory)}
                      <span class="fp3d-pve-sub">${t("pve_disk")} ${i(c.disk)}${c.memoryUsed?` \xB7 ${c.memoryUsed}`:""}${c.since?` \xB7 ${t("pve_since",{d:$l(c.since)})}`:""}</span>`:v`<span class="fp3d-pve-sub">${t(c.problem?"pve_problem":"pve_stopped")}</span>`}
              </button>`):v`<p class="fp3d-pve-sub">${t("pve_none")}</p>`}
      </div>
    </div>`}liveFor(e){var t;if(((t=this.live)==null?void 0:t.id)!==e){let n={id:e,el:null,failed:!1};this.live=n;let r=window;r.loadCardHelpers?r.loadCardHelpers().then(i=>{if(this.live!==n)return;let a=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});a.hass=this.hass,n.el=a,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}renderThrough(){var a,s;let e=this._through;if(!e||!this.hass)return k;let t=this.hass.states[e.entity],n=t==null?void 0:t.attributes.entity_picture,r=n&&!Y(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,i=(s=(a=this.building)==null?void 0:a.settings.director)!=null&&s.live?this.liveFor(e.entity):null;return v`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${i?v`<div class="fp3d-through-img fp3d-through-live">${i}</div>`:r?v`<img class="fp3d-through-img" src=${r} alt="" />`:k}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${J(this.hass,e.entity)}</span>
        <span class="fp3d-still">${i?"\u25CF Live":A(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${A(this.hass,"through_blend")}
          @input=${l=>this._blend=Number(l.target.value)/100}
        />
        <button class="fp3d-chip" title=${A(this.hass,"through_full_hint")} @click=${()=>this.throughFull(e.entity)}>⛶ ${A(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${A(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(e){let t=this.renderRoot.querySelector(".fp3d-through-img");t&&typeof t.requestFullscreen=="function"?t.requestFullscreen().catch(()=>xe(this,e)):xe(this,e)}renderMenu(){var s;let e=this._menu;if(!e||!this.hass||this.ro)return k;let t=this.renderRoot.querySelector(".fp3d-stage"),n=(t==null?void 0:t.clientWidth)??800,r=(t==null?void 0:t.clientHeight)??600,i=Math.max(8,Math.min(n-240,e.x-116)),a=Math.max(8,Math.min(r-360,e.y-170));return v`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${i}px;top:${a}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${V("sound")?((s=this.building)==null?void 0:s.settings.media_presets)??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${V("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${l=>this.lookThrough(l.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,t=0,n=0){var s;if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("hh:")){let[l,d]=e.slice(3).split("#");((s=this.building)==null?void 0:s.floors.flatMap(u=>u.furniture).find(u=>u.id===d&&u.type==="waste_bin"))?(this._binInfo={furnitureId:d,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(l,t,n):xe(this,l);return}if(e.startsWith("ws:")){let l=e.slice(3);this.ro?this.showInfo(l,t,n):(!this.confirmSet.has(l)||confirm(A(this.hass,"confirm_switch",{name:J(this.hass,l)})))&&$n(this.hass,l);return}if(this.ro){let l=this.building,d=l?l.energy.grid??Jt(l,u=>{var p,h;return((h=(p=this.furnitureLinks)==null?void 0:p.get(u.id))==null?void 0:h.power)??null}).grid:null,c=e==="grid"?d:e.startsWith("detect:")?e.slice(7):e;c&&this.showInfo(c,t,n);return}let r=this.apOf(e);if(r){r.led?(!this.confirmSet.has(e)||confirm(A(this.hass,"confirm_switch",{name:this.hass?Jn(this.hass,e):e})))&&$n(this.hass,r.led):xe(this,e);return}let i=this.heaterPower(e);if(i){(!this.confirmSet.has(e)||confirm(A(this.hass,"confirm_switch",{name:J(this.hass,e)})))&&$n(this.hass,i);return}if(e==="grid"){let l=this.building,d=l?l.energy.grid??Jt(l,c=>{var u,p;return((p=(u=this.furnitureLinks)==null?void 0:u.get(c.id))==null?void 0:p.power)??null}).grid:null;d&&xe(this,d);return}if(e.startsWith("detect:")){xe(this,e.slice(7));return}let a=j(e);if(a==="cover"||a==="camera"){this._menu={entity:e,x:t,y:n};return}if(a&&ls.has(a)){if(this.confirmSet.has(e)&&!confirm(A(this.hass,"confirm_switch",{name:J(this.hass,e)})))return;$n(this.hass,e)}else xe(this,e)}effectiveTheme(){var e,t;return this.theme!=="auto"?this.theme:((t=(e=this.hass)==null?void 0:e.states["sun.sun"])==null?void 0:t.state)==="above_horizon"?"day":"neon"}startViewOf(){var e;return this.startView??((e=this.building)==null?void 0:e.settings.start_view)??null}currentView(){var e;return((e=this.viewer)==null?void 0:e.currentView())??null}resetView(){var e;this._through=null,(e=this.viewer)==null||e.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!V("energy_pro")||!e||this.roomId||!this.showEnergy)return k;let t=r=>A(this.hass,r),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:ce(this.hass,e.consumption)}),e.grid!==null){let r=e.grid<0;n.push({cls:r?"export":"grid",label:t(r?"energy_grid_export":"energy_grid_import"),value:ce(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:ce(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let r=[e.battery!==null?ce(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:r.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${se(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),v`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?k:n.map(r=>v`<div class="fp3d-energy-item fp3d-energy-${r.cls}"><span>${r.label}</span><b>${r.value}</b></div>`)}
      ${this.flows!==null?k:v`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?k:v`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return k;let e=Mo[this.heatMode],t=this.heatMode==="temperature",n=t?Lt(this.hass,e.stops[0][0]):e.stops[0][0],r=t?Lt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=t?Fe(this.hass):e.unit,a=s=>A(this.hass,s);return v`<div class="fp3d-legend">
      <b>${a(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Yl(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${se(this.hass,n,0)} ${i}</span><span>${se(this.hass,r,0)} ${i}</span></span>
      ${this.heatValues.size?k:v`<span class="fp3d-legend-none">${a("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=Fn[this.effectiveTheme()]??Fn.neon,t=this._sky;return e.night[0].map((n,r)=>Math.round(n+(e.day[0][r]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){var s;let e=this._sky,t=(l,d)=>`rgb(${l.map((c,u)=>Math.round(c+(d[u]-c)*e)).join(",")})`,n=Fn[this.effectiveTheme()]??Fn.neon,r=Ac((s=this.building)==null?void 0:s.settings.backdrop),a=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}${r?`;background:${r}`:""}`;return v`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${a}
    >
      ${this._error?v`<p class="fp3d-error">${this._error}</p>`:k} ${this.clean?k:this.renderEnergy()} ${this.renderHologram()} ${this.clean?k:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?k:v`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?k:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderThrough()} ${this.renderCameraWall()} ${this.renderProxmox()}
      ${this.clean?k:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.renderMic()}
      ${this._micProbe&&this.hass?v`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,jo())}></fp3d-mic-probe>`:k}
      ${this.showStats&&this._stats?v`<span class="fp3d-stats"
            ><b>${this._stats.fps?A(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):A(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?v`(${this._stats.busy.map(l=>A(this.hass,`stats_busy_${l}`)).join(", ")})`:k} ·
            ${A(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${A(this.hass,this._stats.low?"stats_low":"stats_full",{r:se(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${se(this.hass,this.syncMs,1)} ms`:""}</span
          >`:k}
    </div>`}static styles=[Be,rt,Ee`
      :host {
        display: block;
        position: relative;
        min-height: 200px;
      }
      .fp3d-holo.fp3d-holo-bin {
        border-color: color-mix(in srgb, var(--bin) 70%, transparent);
        box-shadow: 0 0 18px color-mix(in srgb, var(--bin) 45%, transparent), inset 0 0 12px color-mix(in srgb, var(--bin) 25%, transparent);
        background: color-mix(in srgb, var(--bin) 14%, rgba(8, 14, 28, 0.72));
        min-width: 0;
        width: auto;
      }
      .fp3d-holo.fp3d-holo-bin {
        border-radius: 8px;
        pointer-events: none;
      }
      .fp3d-holo-bin .fp3d-holo-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: 3px 8px;
        white-space: nowrap;
      }
      .fp3d-holo.fp3d-holo-later {
        opacity: 0.72;
        box-shadow: none;
        background: rgba(8, 14, 28, 0.7);
      }
      .fp3d-holo-later b {
        text-shadow: none;
      }
      .fp3d-holo-bin b {
        font-size: 17px;
        color: var(--bin);
        text-shadow: 0 0 8px color-mix(in srgb, var(--bin) 60%, transparent);
      }
      .fp3d-holo-bin span {
        font-size: 12px;
        opacity: 0.8;
      }
      .fp3d-holo-link[style*="--bin"] line,
      .fp3d-holo-link[style*="--bin"] circle {
        stroke: var(--bin);
      }
      .fp3d-bin-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
        cursor: pointer;
      }
      .fp3d-bin-info small {
        opacity: 0.7;
        font-weight: 400;
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",wi);function ce(o,e){return Math.abs(e)>=1e3?`${se(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function Wc(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var Op=new Set(["rug","stairwell","grid_point","worktop"]);function Bc(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var xi;function Lp(){let o=new URL("./neonplan3d-timetravel.js?v=0298b1184af8",new URL(import.meta.url)).href;return xi??=import(o).catch(e=>{throw xi=void 0,e}),xi}var en=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),Lp().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("CasaNeon: time travel failed to load",t),this.host.requestUpdate()}))}stop(){var e;this.active&&(this.starting=!1,(e=this.session)==null||e.dispose(),this.session=null,this.host.requestUpdate())}hass(e){var t;return((t=this.session)==null?void 0:t.hass)??e}};function Vp(){try{return matchMedia("(hover: none) and (pointer: coarse)").matches&&!matchMedia("(any-pointer: fine)").matches}catch{return!1}}var X={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},ki=class extends Se{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_proxmox:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0}};data=new jt(this);tt=new en(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode=X.get("walls")==="cut"?"cut":"auto",this._explode=X.get("explode")!=="0",this._keepRoof=X.get("roof")==="1";let e=X.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=X.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=X.get("markers");this._markers=t==="none"||t==="all"||t==="room"?t:"important";let n=X.get("pinSize");this._pinSize=n==="small"||n==="large"?n:"normal";let r=X.get("heat");this._heat=r==="temperature"||r==="humidity"||r==="co2"||r==="values"?r:"none";let i=X.get("theme");this._theme=i==="auto"||i&&Xr.includes(i)?i:"neon";let a=X.get("clock");this._clock=a==="tl"||a==="tr"||a==="bl"||a==="br"?a:"off";let s=X.get("accent");this._accent=s&&/^#[0-9a-f]{6}$/i.test(s)?s:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let l=X.get("floor_stack");this._floorStack=l==="stacked"||l==="single"?l:"dim",this._roomNames=X.get("room_names")!=="0",this._controlsRight=X.get("controls")==="right",this._keepView=X.get("keep_view")==="1",this._angleLock=X.get("angle_lock")==="1",this._trail=X.get("trail")==="1",this._cameraWall=!1,this._proxmox=!1,this._clean=X.get("clean")==="1",this._navWrap=X.get("nav_wrap")==="1",this._optsOpen=!1,this._weather=X.get("weather")!=="0",this._director=vi(),this._micProbe=!1,this._voiceHere=fi(),this._screen=mi()}t(e,t){return A(this.hass,e,t)}willUpdate(e){var n;e.has("hass")&&this.hass&&(this.data.setHass(this.hass),(n=this.tt.session)==null||n.setLive(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(r=>r.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){var e,t;return((t=(e=this.hass)==null?void 0:e.user)==null?void 0:t.is_admin)??!1}get canEdit(){return this.isAdmin&&!Vp()}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){var r;let{floorId:t,roomId:n}=e.detail;if((((r=this.data.building)==null?void 0:r.floors.length)??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,X.set("walls",e)}setKeepRoof(e){this._keepRoof=e,X.set("roof",e?"1":"0")}setExplode(e){this._explode=e,X.set("explode",e?"1":"0")}setQuality(e){this._quality=e,X.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let i of r.floors){let a=i.furniture.find(s=>s.id===e);a&&t(a,i)}this.data.edit(r)}editDevice(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let i of r.floors){let a=i.placements.find(s=>s.entity_id===e);a&&t(a,i)}this.data.edit(r)}moveDevice(e){let{id:t,x:n,z:r}=e.detail;this.editDevice(t,(i,a)=>{let[s,l]=gi(a,i.x,i.z,n,r);Object.assign(i,{x:s,z:l})})}turnStep(){return j(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.placements=r.placements.filter(i=>i.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let t=this.data.building,n=t==null?void 0:t.floors.find(u=>u.placements.some(p=>p.entity_id===e)),r=n==null?void 0:n.placements.find(u=>u.entity_id===e);if(!n||!r)return k;let i=j(e),a=i==="light",s=i==="camera",l=r.mount==="ceiling",d=i?Vt(i,n.height,a||s?r.mount??(s?"wall":"ceiling"):null):1,c=(u,p,h,f,m,g)=>v`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${f}
          max=${m}
          .value=${String(Math.round(p*100)/100)}
          @change=${_=>{let y=parseFloat(_.target.value.replace(",","."));Number.isFinite(y)&&g(Math.min(m,Math.max(f,y)))}}
        />
      </label>`;return v`${a?v`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>v`<option value=${u} ?selected=${u===(r.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:k}
      ${s?v`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${c(this.t("camera_fov_short"),r.fov??(l?360:90),5,10,360,u=>this.editDevice(e,p=>p.fov=u))}
            ${c(this.t("camera_reach_short"),r.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,p=>p.reach=u))}
            ${c(this.t("camera_tilt_short"),r.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,p=>p.tilt=u))}`:k}
      <label class="fp3d-size" title=${this.t("marker_height")}
        >${this.t("size_short_h")}
        <input
          type="number"
          inputmode="decimal"
          step="0.05"
          min="0"
          .value=${String(Math.round((r.y??d)*100)/100)}
          @change=${u=>{let p=parseFloat(u.target.value.replace(",","."));Number.isFinite(p)&&p>=0&&this.editDevice(e,h=>h.y=Math.round(p*1e3)/1e3)}}
        />
      </label>
      ${r.y!==null?v`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:k}`}furnitureName(e){var n;let t=(n=this.data.building)==null?void 0:n.floors.flatMap(r=>r.furniture).find(r=>r.id===e);return t?ve(this.hass,t.type):""}moveFurniture(e){var a;let{id:t,x:n,z:r}=e.detail,i=((a=this.data.building)==null?void 0:a.settings.wall_interior)??.12;this.editFurniture(t,(s,l)=>{let[d,c]=gi(l,s.x,s.z,n,r);Object.assign(s,{x:d,z:c});let u=zc(l,s,i);u&&Object.assign(s,u)})}renderSizeFields(e){var l,d,c;let t=(l=this.data.building)==null?void 0:l.floors.flatMap(u=>u.furniture).find(u=>u.id===e);if(!t)return k;let n=Ui(this.hass,(d=this.data.building)==null?void 0:d.settings.units)==="imperial",r=u=>n?Ki(u):String(Math.round(u*100)/100),i=u=>n?Gi(u,"imperial"):parseFloat(u.replace(",",".")),a=(u,p)=>v`<label class="fp3d-size" title=${this.t(`size_${u}`)}
      >${p}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${r(t[u])}
        @change=${h=>{let f=i(h.target.value)??NaN;Number.isFinite(f)&&f>0&&this.editFurniture(e,m=>m[u]=Math.round(f*1e3)/1e3)}}
    /></label>`,s=(c=this.data.building)==null?void 0:c.floors.find(u=>u.furniture.some(p=>p.id===e));return v`${a("w",this.t("size_short_w"))}${a("d",this.t("size_short_d"))}${a("h",this.t("size_short_h"))}
    ${s&&Ka(t)?v`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${r(t.mount_y??me(s,t))}
              @change=${u=>{let p=i(u.target.value)??NaN;Number.isFinite(p)&&p>=0&&this.editFurniture(e,h=>h.mount_y=Math.round(p*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?v`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,u=>u.mount_y=null)}>${this.t("height_auto")}</button>`:k}`:k}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.furniture=r.furniture.filter(i=>i.id!==e);this.data.edit(n),this._selFurniture=null}rememberStartView(e=!1){var r;let t=this.data.building;if(!t)return;let n=e?null:(r=this.view3d())==null?void 0:r.currentView();!e&&!n||this.data.edit({...t,settings:{...t.settings,start_view:n??null}})}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!V("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this._proxmox=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(r,i)=>A(this.hass,r,i)})}}updated(){if(this.ttLinked||!this.data.building||!zt()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&V("time_travel")&&this.toggleTimeTravel(e)}back(){var e,t;this._roomId?this._roomId=null:this._floorId&&(((e=this.data.building)==null?void 0:e.floors.length)??0)>1?this._floorId=null:(t=this.view3d())==null||t.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop()}render(){var n;let e=this.data.building,t=this.data.saveState;return v`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._micProbe&&this.hass?v`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,jo())}></fp3d-mic-probe>`:k}
        ${this._clean&&this._mode==="view"?k:v`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>CasaNeon</h1>
          ${this.isAdmin?v`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                ${this.canEdit?v`<button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>`:k}
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}
                </button>
              </div>`:k}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&(e!=null&&e.floors.some(r=>r.rooms.length))?v`<button
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
                ${["auto","low","high"].map(r=>v`<button aria-pressed=${this._quality===r} @click=${()=>this.setQuality(r)}>${this.t(`quality_${r}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${[...Xr,"auto"].map(r=>v`<button
                      aria-pressed=${this._theme===r}
                      @click=${()=>{this._theme=r,X.set("theme",r)}}
                    >
                      ${this.t(`theme_${r}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${r=>{this._accent=r.target.value,X.set("accent",this._accent)}}
                  />
                  ${this._accent?v`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,X.set("accent","")}}
                      >
                        ↺
                      </button>`:k}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")}>
                ${["off","tl","tr","bl","br"].map(r=>v`<button aria-pressed=${this._clock===r} title=${this.t("clock")} @click=${()=>{this._clock=r,X.set("clock",r)}}>
                      ${this.t(`clock_${r}`)}
                    </button>`)}
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(r=>v`<button
                      aria-pressed=${this._markers===r}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=r,X.set("markers",r)}}
                    >
                      ${this.t(`markers_${r}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(r=>v`<button
                      aria-pressed=${this._pinSize===r}
                      @click=${()=>{this._pinSize=r,X.set("pinSize",r)}}
                    >
                      ${this.t(`pin_size_${r}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(r=>v`<button
                      aria-pressed=${this._controlsRight===r}
                      title=${this.t(r?"controls_right":"controls_left")}
                      aria-label=${this.t(r?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=r,X.set("controls",r?"right":"left")}}
                    >
                      ${r?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.isAdmin?v`<button
                        title=${`${this.t("start_view")}: ${this.t("start_view_set")}`}
                        aria-label=${this.t("start_view_set")}
                        @click=${()=>this.rememberStartView()}
                      >
                        📌
                      </button>
                      ${(n=this.data.building)!=null&&n.settings.start_view?v`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:k}`:k}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,X.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
                </button>
                <button
                  aria-pressed=${this._angleLock}
                  title=${`${this.t("angle_lock")}: ${this.t("angle_lock_hint")}`}
                  aria-label=${this.t("angle_lock")}
                  @click=${()=>{this._angleLock=!this._angleLock,X.set("angle_lock",this._angleLock?"1":"0")}}
                >
                  🔒
                </button>
                <button
                  aria-pressed=${this._stats}
                  title=${this.t("fps_title")}
                  @click=${()=>{this._stats=!this._stats,X.set("stats",this._stats?"1":"0")}}
                >
                  ${this.t("fps")}
                </button>
              </div>
              </div>`:k}
          ${this._mode==="editor"&&t!=="idle"?v`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:k}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?k:this.renderNotices()}
        ${this.data.error&&!e?v`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:k}
        ${!e&&!this.data.error?v`<p class="fp3d-message">${this.t("loading")}</p>`:k}
        ${e?this._mode==="editor"&&this.canEdit?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):k}
      </div>
    `}renderNotices(){var n;let e=this.data,t=[];if(e.needsRestart&&(e.versionGap==="frontend"?t.push(v`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(v`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(v`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let r=new Date(e.draft.savedAt).toLocaleString((n=this.hass)==null?void 0:n.language);t.push(v`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:r})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?v`<div class="fp3d-notices">${t}</div>`:k}renderExtensions(){return this._editorReady?v`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`:(pr().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),v`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?v`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @director-here=${()=>this._director=vi()}
      @voice-here=${()=>{this._voiceHere=fi(),this._screen=mi()}}
      @mic-probe=${()=>Zt().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(pr().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),v`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){var i,a;if(!e.floors.length||!e.floors.some(s=>s.rooms.length))return v`<div class="fp3d-empty">
        <p>${this.t(this.canEdit?"no_building_admin":"no_building")}</p>
        ${this.canEdit?v`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:k}
      </div>`;let t=e.floors.find(s=>s.id===this._floorId),n=t?[t]:e.floors,r=this.tt.active;return v`
      ${this._clean?k:v`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?v`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(s=>v`<button
                  class="fp3d-chip"
                  aria-pressed=${s.id===this._floorId}
                  @click=${()=>{this._floorId=s.id,this._roomId=null}}
                >
                  ${s.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:k}
        ${n.flatMap(s=>[n.length>1&&we(s).some(l=>l.name.trim())?v`<span class="fp3d-nav-floor">${s.name}</span>`:k,...we(s).filter((l,d,c)=>l.name.trim()&&!(l.outdoor&&c.findIndex(u=>u.outdoor&&u.area_id===l.area_id&&u.name===l.name)<d)).map(l=>v`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${l.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=s.id),this._roomId=l.id===this._roomId?null:l.id}}
            >
              ${l.name}
            </button>`)])}
        <button
          class="fp3d-chip fp3d-nav-toggle"
          title=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-label=${this.t(this._navWrap?"nav_row":"nav_wrap")}
          aria-pressed=${this._navWrap}
          @click=${()=>{this._navWrap=!this._navWrap,X.set("nav_wrap",this._navWrap?"1":"0")}}
        >
          ${this._navWrap?"\u2194":"\u2261"}
        </button>
      </nav>`}
      <div class="fp3d-stage-wrap ${this._roomId?"fp3d-room-open":""} ${this._controlsRight?"fp3d-side-right":""} ${r?"fp3d-tt":""}">
        <fp3d-view3d
          class="fp3d-body"
          .hass=${this.tt.hass(this.hass)}
          .replay=${((i=this.tt.session)==null?void 0:i.replay)??null}
          .building=${e}
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
          @clean-toggle=${()=>{this._clean=!this._clean,X.set("clean",this._clean?"1":"0")}}
          .weather=${this._weather}
          .director=${this._director}
          .voice=${this._voiceHere}
          .screen=${this._screen||null}
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:((a=e.floors[0])==null?void 0:a.id)??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .pinSize=${this._pinSize}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .clock=${this._clock}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!r}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${s=>this._selFurniture=s.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${s=>this._selDevice=s.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${s=>{this._floorId=s.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?v`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${s=>{var l;return(l=this.view3d())==null?void 0:l.lookThrough(s.detail.entity)}}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${r}
              .room=${e.floors.flatMap(s=>we(s)).find(s=>s.id===this._roomId)??null}
              .floor=${e.floors.find(s=>we(s).some(l=>l.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${qt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:k}
        ${this.tt.session?v`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:k}
        ${this._clean?k:v`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?v`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?v`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:k}
          ${!this._floorId&&e.settings.roof.type!=="none"?v`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:k}
          ${e.floors.length>1&&this._floorId?v`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(s=>v`<button
                      aria-pressed=${this._floorStack===s}
                      @click=${()=>{this._floorStack=s,X.set("floor_stack",s)}}
                    >
                      ${this.t(`floor_stack_short_${s}`)}
                    </button>`)}
              </div>`:k}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(s=>v`<button
                  aria-pressed=${this._heat===s}
                  @click=${()=>{this._heat=s,X.set("heat",s)}}
                >
                  ${this.t(s==="none"?"heat_off":`heat_short_${s}`)}
                </button>`)}
          </div>
          <button
            class="fp3d-chip"
            aria-pressed=${this._roomNames}
            @click=${()=>{this._roomNames=!this._roomNames,X.set("room_names",this._roomNames?"1":"0")}}
          >
            ${this.t("room_names_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._trail}
            title=${this.t("trail_hint")}
            @click=${()=>{this._trail=!this._trail,X.set("trail",this._trail?"1":"0")}}
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
          ${yl(this.hass)?v`<button
                class="fp3d-chip"
                aria-pressed=${this._proxmox}
                title=${this.t("pve_hint")}
                @click=${()=>{this._proxmox=!this._proxmox,this._proxmox&&(this._cameraWall=!1)}}
              >
                ${this.t("pve_title")}
              </button>`:k}
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,X.set("weather",this._weather?"1":"0")}}
          >
            ${V("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:k}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${r} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${V("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?v`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:k}
        </div>`}
        ${this._furnish?v`<div class="fp3d-furnish-bar">
              ${this._selFurniture?v`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,s=>s.mirror=!s.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?v`<span>${J(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:v`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:k}
      </div>
    `}static styles=[Be,rt,Ee`
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
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",ki);function Do(o,e,t=new Date){var s;if(!o||o==="off")return!1;if(o==="sun")return((s=e==null?void 0:e.states["sun.sun"])==null?void 0:s.state)==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let r=Number(n[1])*60+Number(n[2]),i=Number(n[3])*60+Number(n[4]),a=t.getHours()*60+t.getMinutes();return r<=i?a>=r&&a<i:a>=r||a<i}var Uc;function Kc(){let o=new URL("./neonplan3d-card-editor.js?v=8e4a8c22e421",new URL(import.meta.url)).href;return Uc??=import(o),Uc}function Gc(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var $i=class extends Se{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new jt(this);tt=new en(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=Gc(),this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){var n;clearTimeout(this.cleanTimer);let t=((n=this._config)==null?void 0:n.controls_hide_after)??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){var t;clearTimeout(this.idleTimer);let e=((t=this._config)==null?void 0:t.idle_return)??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!V("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:(n==null?void 0:n.quality)??"auto",speed:(n==null?void 0:n.time_travel_speed)??null,range:(n==null?void 0:n.time_travel_range)??null,t:(r,i)=>A(this.hass,r,i)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){var e,t,n,r;if((e=this.tt.session)!=null&&e.playing){this.armIdle();return}this.tt.stop(),this._roomId=((t=this._config)==null?void 0:t.room)??null,this._floorId=void 0,(n=this.view3d())==null||n.resetView(),(r=this._config)!=null&&r.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{var e;this._fullscreen=!!document.fullscreenElement&&((e=this.shadowRoot)==null?void 0:e.contains(document.fullscreenElement))===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{var t,n;let e=Math.round(((t=window.visualViewport)==null?void 0:t.height)??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),(n=this._config)!=null&&n.fill&&!this._fullscreen){let r=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(r-this._top)>1)&&(this._top=r)}};connectedCallback(){var e;super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>{var t;return this._night=Do((t=this._config)==null?void 0:t.night,this.hass)},6e4)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){var n;if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=(n=this.shadowRoot)==null?void 0:n.querySelector("ha-card"),t=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e!=null&&e.requestFullscreen?e.requestFullscreen().catch(t):t()}static async getConfigElement(){return await Kc(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=Gc(),this._heat=null,this._explode=null,this._orbit=!1,this._night=Do(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){var e;return Math.ceil((((e=this._config)==null?void 0:e.height)??420)/50)}getGridOptions(){var e,t;return{columns:"full",rows:(e=this._config)!=null&&e.fill?12:Math.ceil((((t=this._config)==null?void 0:t.height)??420)/56),min_rows:4}}willUpdate(e){var t,n;if(e.has("hass")&&this.hass){this.data.setHass(this.hass),(t=this.tt.session)==null||t.setLive(this.hass);let r=Do((n=this._config)==null?void 0:n.night,this.hass);r!==this._night&&(this._night=r)}}get canSwitch(){var e;return!((e=this._config)!=null&&e.floor)||this.thumbs}get thumbs(){var e,t;return((e=this._config)==null?void 0:e.floor_thumbs)??!((t=this._config)!=null&&t.floor)}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){var y,x,M,b,T,z,H,U,E,w,$,P,C,N,q,Q,D,ne,L,ee,oe;let e=this.data.building,t=((y=this._config)==null?void 0:y.height)??420,n=this._config;!this.roomApplied&&e&&(n!=null&&n.room)&&(this.roomApplied=!0,e.floors.some(K=>we(K).some(re=>re.id===n.room))&&(this._roomId=n.room));let r=this._floorId===void 0?(n==null?void 0:n.floor)??null:this._floorId,i=e&&e.floors.length===1?e.floors[0].id:e!=null&&e.floors.some(K=>K.id===r)?r:null,a=!!this._roomId&&(n==null?void 0:n.room_panel)===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!i&&((e==null?void 0:e.floors.length)??0)>1,s=K=>(n==null?void 0:n.controls)===!0||Array.isArray(n==null?void 0:n.controls)&&n.controls.includes(K),l=["temperature","humidity","co2"].filter(K=>s(K)),d=this._walls??(n==null?void 0:n.walls)??"auto",c=this._heat??(n==null?void 0:n.heatmap)??"none",u=this._explode??(n==null?void 0:n.explode)??!0,p=this._fullscreen?"100%":n!=null&&n.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${t}px`,h=!!e&&!this._clean&&(a||(!!(n!=null&&n.controls)||!!(n!=null&&n.time_travel))&&!(this._roomId&&n.room_panel!==!1)),f=this.tt.active,m=(n==null?void 0:n.controls_hidden)!==void 0||((n==null?void 0:n.controls_hide_after)??0)>0,g=K=>A(this.hass,K),_=/^#[0-9a-f]{6}$/i.test((n==null?void 0:n.accent)??"")?n.accent:null;return v`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${_?`--fp3d-accent:${_}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${f?"fp3d-tt":""}" style="height:${p}">
        ${e&&e.floors.some(K=>K.rooms.length)?v`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${((x=this.tt.session)==null?void 0:x.replay)??null}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${i}
              .roomId=${this._roomId}
              .wallMode=${d}
              .explode=${u}
              .keepRoof=${(n==null?void 0:n.roof_fade)===!1}
              .hideRoof=${(n==null?void 0:n.roof)===!1}
              .quality=${((M=this._config)==null?void 0:M.quality)??"auto"}
              ?showStats=${((b=this._config)==null?void 0:b.stats)??!1}
              .markerMode=${((T=this._config)==null?void 0:T.markers)??"important"}
              .pinSize=${((z=this._config)==null?void 0:z.marker_size)??"normal"}
              .markerNames=${((H=this._config)==null?void 0:H.marker_names)===!0}
              .central=${((U=this._config)==null?void 0:U.central)!==!1}
              .walkable=${((E=this._config)==null?void 0:E.walk)!==!1}
              .petsOn=${((w=this._config)==null?void 0:w.pets)!==!1}
              .ghostOn=${(($=this._config)==null?void 0:$.ghost)!==!1}
              .buttons=${((C=(P=this._config)==null?void 0:P.buttons)==null?void 0:C.map((K,re)=>({id:`card_${re}`,...K})))??null}
              .heatMode=${c}
              .theme=${((N=this._config)==null?void 0:N.theme)??"neon"}
              .clock=${((q=this._config)==null?void 0:q.clock)??null}
              .accent=${((Q=this._config)==null?void 0:Q.accent)??null}
              .showEnergy=${((D=this._config)==null?void 0:D.energy)??!0}
              .flows=${((ne=this._config)==null?void 0:ne.flows)??null}
              .holograms=${((L=this._config)==null?void 0:L.holograms)??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${(n==null?void 0:n.room_names)!==!1}
              .controlsRight=${(n==null?void 0:n.controls_side)==="right"}
              .keepView=${(n==null?void 0:n.keep_view)===!0}
              .angleLock=${(n==null?void 0:n.angle_lock)===!0}
              .floorStack=${(n==null?void 0:n.floor_stack)??"dim"}
              .panelOpen=${!!this._roomId&&(n==null?void 0:n.room_panel)!==!1}
              .alerts=${(n==null?void 0:n.alerts)!==!1}
              .householdCard=${(n==null?void 0:n.household_card)!==!1}
              .alertJump=${!!(n!=null&&n.alert_jump)}
              .director=${!!(n!=null&&n.director)}
              .voice=${!!(n!=null&&n.voice)}
              .screen=${((ee=n==null?void 0:n.screen)==null?void 0:ee.trim())||null}
              .scenes=${(n==null?void 0:n.scenes)!==!1}
              ?trail=${!!(n!=null&&n.motion_trail)}
              .cameraWall=${this._cameraWall&&!f}
              @camera-wall-close=${()=>this._cameraWall=!1}
              @camera-wall-open=${()=>this._cameraWall=!0}
              .clean=${this._clean}
              .cleanButton=${m}
              @clean-toggle=${()=>{this._clean=!this._clean,this._clean?clearTimeout(this.cleanTimer):this.armClean()}}
              .weather=${(n==null?void 0:n.weather)!==!1}
              .weatherEntityId=${(n==null?void 0:n.weather_entity)??null}
              .dimmed=${this._night}
              .autoOrbit=${this._orbit}
              .startView=${(n==null?void 0:n.start_view)??null}
              style=${f?`--fp3d-bottom-inset: ${h?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:h?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${K=>{if(this.canSwitch&&((e==null?void 0:e.floors.length)??0)>1&&K.detail.floorId&&i!==K.detail.floorId){this._floorId=K.detail.floorId,this._roomId=null;return}K.detail.roomId&&(this._roomId=K.detail.roomId===this._roomId?null:K.detail.roomId)}}
              @floor-tap=${K=>{this._floorId=K.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:v`<p class="fp3d-card-msg">${this.data.error??(e?A(this.hass,"no_building"):A(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&((oe=this._config)==null?void 0:oe.room_panel)!==!1?v`<fp3d-room-panel
              @camera-look=${K=>{var re;return(re=this.view3d())==null?void 0:re.lookThrough(K.detail.entity)}}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${f}
              .room=${e.floors.flatMap(K=>we(K)).find(K=>K.id===this._roomId)??null}
              .floor=${e.floors.find(K=>we(K).some(re=>re.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${qt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:k}
        ${h&&e?v`<div class="fp3d-card-controls">
              ${a?v`<button class="fp3d-chip" @click=${()=>this.back()}>${g("back")}</button>`:k}
              ${n!=null&&n.time_travel?v`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${f} title=${g("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${V("time_travel")?"\u23EA":"\u{1F512}"} ${g("tt_chip")}
                  </button>`:k}
              ${n!=null&&n.camera_wall?v`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${g("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${g("cameras_short")}</button>`:k}
              ${s("walls")?v`<div class="fp3d-seg">
                    <button aria-pressed=${d==="auto"} @click=${()=>this.setWalls("auto")}>${g("walls_auto")}</button>
                    <button aria-pressed=${d==="cut"} @click=${()=>this.setWalls("cut")}>${g("walls_cut")}</button>
                  </div>`:k}
              ${s("floors")&&e.floors.length>1&&!i?v`<div class="fp3d-seg">
                    <button aria-pressed=${u} @click=${()=>this._explode=!0}>${g("floors_apart")}</button>
                    <button aria-pressed=${!u} @click=${()=>this._explode=!1}>${g("floors_stacked")}</button>
                  </div>`:k}
              ${l.length?v`<div class="fp3d-seg" role="group" aria-label=${g("heatmap")}>
                    ${["none",...l].map(K=>v`<button aria-pressed=${c===K} @click=${()=>this._heat=K}>
                          ${g(K==="none"?"heat_off":`heat_short_${K}`)}
                        </button>`)}
                  </div>`:k}
            </div>`:k}
        ${this.tt.session?v`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:k}
        ${n!=null&&n.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?v`<button class="fp3d-card-full" title=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:k}
        ${n!=null&&n.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?v`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?v`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:k}
      </div>
    </ha-card>`}static styles=[Be,rt,Ee`
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
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",$i);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:A(void 0,"card_name"),description:A(void 0,"card_description"),preview:!1})}Bi();Fo();
