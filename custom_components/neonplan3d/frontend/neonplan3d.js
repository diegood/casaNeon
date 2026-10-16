Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var ba=new URL(import.meta.url),fa=ba.searchParams.get("v"),ma=o=>new URL(`./fonts/${o}${fa?`?v=${fa}`:""}`,ba).href,ga="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function _a(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${ma("figtree.woff2")}) format("woff2");unicode-range:${ga}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${ma("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${ga}}`,document.head.append(o)}function va(o,e){var t,n;return e==="metric"||e==="imperial"?e:((n=(t=o==null?void 0:o.config)==null?void 0:t.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function Gl(o,e){return String(Number(o.toFixed(e)))}function ya(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),r=Math.floor(n/12+1e-9),a=n-r*12,i=Gl(a,e>=2?1:0);return r?a<.05?`${t}${r}'`:`${t}${r}' ${i}"`:`${t}${i}"`}function wa(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,r=0,a=!1,i=!1,s=t;for(let c of t.matchAll(n)){let d=Number(c[1]);if(!Number.isFinite(d))return null;let l=c[2];a=!0,s=s.replace(c[0],""),l==="feet"||l==="foot"||l==="ft"||l==="'"?(r+=d*.3048,i=!0):l==="inches"||l==="inch"||l==="in"||l==='"'?r+=d*.0254:l==="mm"?r+=d/1e3:l==="cm"?r+=d/100:l==="m"?r+=d:r+=e==="imperial"?d*(i?.0254:.3048):d}return!a||/[^\s+]/.test(s)?null:r}var zn=globalThis,Cn=zn.ShadowRoot&&(zn.ShadyCSS===void 0||zn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wo=Symbol(),xa=new WeakMap,Gt=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==wo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Cn&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=xa.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&xa.set(t,e))}return e}toString(){return this.cssText}},ka=o=>new Gt(typeof o=="string"?o:o+"",void 0,wo),we=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[a+1],o[0]);return new Gt(t,o,wo)},$a=(o,e)=>{if(Cn)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=zn.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},xo=Cn?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ka(t)})(o):o;var{is:Yl,defineProperty:Ql,getOwnPropertyDescriptor:Jl,getOwnPropertyNames:Xl,getOwnPropertySymbols:Zl,getPrototypeOf:ec}=Object,Fn=globalThis,Ma=Fn.trustedTypes,tc=Ma?Ma.emptyScript:"",ko=Fn.reactiveElementPolyfillSupport,Yt=(o,e)=>o,$o={toAttribute(o,e){switch(e){case Boolean:o=o?tc:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Ea=(o,e)=>!Yl(o,e),Sa={attribute:!0,type:String,converter:$o,reflect:!1,useDefault:!1,hasChanged:Ea};Symbol.metadata??=Symbol("metadata"),Fn.litPropertyMetadata??=new WeakMap;var Ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Sa){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Ql(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:a}=Jl(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:r,set(i){let s=r==null?void 0:r.call(this);a==null||a.call(this,i),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Sa}static _$Ei(){if(this.hasOwnProperty(Yt("elementProperties")))return;let e=ec(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Yt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Yt("properties"))){let t=this.properties,n=[...Xl(t),...Zl(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(xo(r))}else e!==void 0&&t.push(xo(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $a(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var a;let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:$o).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){var a,i;let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let s=n.getPropertyOptions(r),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:$o;this._$Em=r;let d=c.fromAttribute(t,s.type);this[r]=d??((i=this._$Ej)==null?void 0:i.get(r))??d,this._$Em=null}}requestUpdate(e,t,n,r=!1,a){var i;if(e!==void 0){let s=this.constructor;if(r===!1&&(a=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??Ea)(a,t)||n.useDefault&&n.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:a},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),a!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[a,i]of r){let{wrapped:s}=i,c=this[a];s!==!0||this._$AL.has(a)||c===void 0||this.C(a,void 0,i,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var a;return(a=r.hostUpdate)==null?void 0:a.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ve.elementStyles=[],Ve.shadowRootOptions={mode:"open"},Ve[Yt("elementProperties")]=new Map,Ve[Yt("finalized")]=new Map,ko==null||ko({ReactiveElement:Ve}),(Fn.reactiveElementVersions??=[]).push("2.1.2");var zo=globalThis,Pa=o=>o,Rn=zo.trustedTypes,Aa=Rn?Rn.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ra="$lit$",Ne=`lit$${Math.random().toFixed(9).slice(2)}$`,Ha="?"+Ne,nc=`<${Ha}>`,rt=document,Jt=()=>rt.createComment(""),Xt=o=>o===null||typeof o!="object"&&typeof o!="function",Co=Array.isArray,oc=o=>Co(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Mo=`[ 	
\f\r]`,Qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ia=/-->/g,Ta=/>/g,nt=RegExp(`>|${Mo}(?:([^\\s"'>=/]+)(${Mo}*=${Mo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),za=/'/g,Ca=/"/g,ja=/^(?:script|style|textarea|title)$/i,Fo=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),y=Fo(1),tn=Fo(2),Mu=Fo(3),at=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Fa=new WeakMap,ot=rt.createTreeWalker(rt,129);function Oa(o,e){if(!Co(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Aa!==void 0?Aa.createHTML(e):e}var rc=(o,e)=>{let t=o.length-1,n=[],r,a=e===2?"<svg>":e===3?"<math>":"",i=Qt;for(let s=0;s<t;s++){let c=o[s],d,l,u=-1,p=0;for(;p<c.length&&(i.lastIndex=p,l=i.exec(c),l!==null);)p=i.lastIndex,i===Qt?l[1]==="!--"?i=Ia:l[1]!==void 0?i=Ta:l[2]!==void 0?(ja.test(l[2])&&(r=RegExp("</"+l[2],"g")),i=nt):l[3]!==void 0&&(i=nt):i===nt?l[0]===">"?(i=r??Qt,u=-1):l[1]===void 0?u=-2:(u=i.lastIndex-l[2].length,d=l[1],i=l[3]===void 0?nt:l[3]==='"'?Ca:za):i===Ca||i===za?i=nt:i===Ia||i===Ta?i=Qt:(i=nt,r=void 0);let h=i===nt&&o[s+1].startsWith("/>")?" ":"";a+=i===Qt?c+nc:u>=0?(n.push(d),c.slice(0,u)+Ra+c.slice(u)+Ne+h):c+Ne+(u===-2?s:h)}return[Oa(o,a+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Zt=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let a=0,i=0,s=e.length-1,c=this.parts,[d,l]=rc(e,t);if(this.el=o.createElement(d,n),ot.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=ot.nextNode())!==null&&c.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(Ra)){let p=l[i++],h=r.getAttribute(u).split(Ne),f=/([.?@])?(.*)/.exec(p);c.push({type:1,index:a,name:f[2],strings:h,ctor:f[1]==="."?Po:f[1]==="?"?Ao:f[1]==="@"?Io:wt}),r.removeAttribute(u)}else u.startsWith(Ne)&&(c.push({type:6,index:a}),r.removeAttribute(u));if(ja.test(r.tagName)){let u=r.textContent.split(Ne),p=u.length-1;if(p>0){r.textContent=Rn?Rn.emptyScript:"";for(let h=0;h<p;h++)r.append(u[h],Jt()),ot.nextNode(),c.push({type:2,index:++a});r.append(u[p],Jt())}}}else if(r.nodeType===8)if(r.data===Ha)c.push({type:2,index:a});else{let u=-1;for(;(u=r.data.indexOf(Ne,u+1))!==-1;)c.push({type:7,index:a}),u+=Ne.length-1}a++}}static createElement(e,t){let n=rt.createElement("template");return n.innerHTML=e,n}};function yt(o,e,t=o,n){var i,s;if(e===at)return e;let r=n!==void 0?(i=t._$Co)==null?void 0:i[n]:t._$Cl,a=Xt(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==a&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),a===void 0?r=void 0:(r=new a(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=yt(o,r._$AS(o,e.values),r,n)),e}var Eo=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??rt).importNode(t,!0);ot.currentNode=r;let a=ot.nextNode(),i=0,s=0,c=n[0];for(;c!==void 0;){if(i===c.index){let d;c.type===2?d=new en(a,a.nextSibling,this,e):c.type===1?d=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(d=new To(a,this,e)),this._$AV.push(d),c=n[++s]}i!==(c==null?void 0:c.index)&&(a=ot.nextNode(),i++)}return ot.currentNode=rt,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},en=class o{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=yt(this,e,t),Xt(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==at&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):oc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&Xt(this._$AH)?this._$AA.nextSibling.data=e:this.T(rt.createTextNode(e)),this._$AH=e}$(e){var a;let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Zt.createElement(Oa(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===r)this._$AH.p(t);else{let i=new Eo(r,this),s=i.u(this.options);i.p(t),this.T(s),this._$AH=i}}_$AC(e){let t=Fa.get(e.strings);return t===void 0&&Fa.set(e.strings,t=new Zt(e)),t}k(e){Co(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let a of e)r===t.length?t.push(n=new o(this.O(Jt()),this.O(Jt()),this,this.options)):n=t[r],n._$AI(a),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let r=Pa(e).nextSibling;Pa(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},wt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,a){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=k}_$AI(e,t=this,n,r){let a=this.strings,i=!1;if(a===void 0)e=yt(this,e,t,0),i=!Xt(e)||e!==this._$AH&&e!==at,i&&(this._$AH=e);else{let s=e,c,d;for(e=a[0],c=0;c<a.length-1;c++)d=yt(this,s[n+c],t,c),d===at&&(d=this._$AH[c]),i||=!Xt(d)||d!==this._$AH[c],d===k?e=k:e!==k&&(e+=(d??"")+a[c+1]),this._$AH[c]=d}i&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Po=class extends wt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},Ao=class extends wt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},Io=class extends wt{constructor(e,t,n,r,a){super(e,t,n,r,a),this.type=5}_$AI(e,t=this){if((e=yt(this,e,t,0)??k)===at)return;let n=this._$AH,r=e===k&&n!==k||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==k&&(n===k||r);r&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},To=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){yt(this,e)}};var So=zo.litHtmlPolyfillSupport;So==null||So(Zt,en),(zo.litHtmlVersions??=[]).push("3.3.3");var Va=(o,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,r=n._$litPart$;if(r===void 0){let a=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new en(e.insertBefore(Jt(),a),a,void 0,t??{})}return r._$AI(o),r};var nn=globalThis,ge=class extends Ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Va(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return at}},La;ge._$litElement$=!0,ge.finalized=!0,(La=nn.litElementHydrateSupport)==null||La.call(nn,{LitElement:ge});var Ro=nn.litElementPolyfillSupport;Ro==null||Ro({LitElement:ge});(nn.litElementVersions??=[]).push("4.2.2");async function Da(o){return o.callWS({type:"neonplan3d/building/get"})}async function Hn(o,e){return(await o.callWS({type:"neonplan3d/building/save",building:e})).revision}function Na(o,e){return o.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}async function qa(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function Wa(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}function ac(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function jo(o){let e=fe(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(ac).length>=2}var Ba=[],Ho=new Map,Ua=0;function Ka(o){Ba=o,Ho=new Map(o.flatMap(e=>e.items.map(t=>[ic(e.id,t.id),t]))),Ua++}function Oo(){return Ba}function xt(){return Ua}function ic(o,e){return`pack:${o}:${e}`}function it(o){return o.startsWith("pack:")}function jn(o){return it(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function kt(o){return o==="robot_vacuum"||it(o)&&o.endsWith(":robot_vacuum")}var sc={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Ga(o){var e;return(e=fe(o))==null?void 0:e.parts.find(t=>t.screen)}function fe(o){if(!it(o))return;let e=Ho.get(o);if(e)return e;let[,t,...n]=o.split(":"),r=sc[t];return r?Ho.get(`pack:${r}:${n.join(":")}`):void 0}function Ya(o){return o.name.es??o.name.en??Object.values(o.name)[0]??o.id}function me(o,e){let t=fe(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Qa;if(On.has(e.type))return Math.max(0,o.height-Vn(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t==null?void 0:t.mount){case"surface":return Ln(o,e.x,e.z);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?0:Ja(e)}}var Le={field:null,size:1,right:0,up:0};var Za=["rain","snow","clouds","lightning","sky"];var cc={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function ei(o){return o==="hedge"||o==="fence"||o==="pergola"}function dc(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let r=o.slope_dir??"x",a=(d,l)=>r==="x"?d:r==="-x"?-d:r==="z"?l:-l,i=1/0,s=-1/0;for(let[d,l]of o.points){let u=a(d,l);i=Math.min(i,u),s=Math.max(s,u)}if(s-i<1e-6)return 0;let c=Math.min(1,Math.max(0,(a(e,t)-i)/(s-i)));return n*c}function uc(o,e,t,n){return oi(o,e)+cc[e.type]-pc(o,e,t,n)}var Lo=-.2,Vo={set:!1,level:Lo};function ti(o){let e=(o==null?void 0:o.settings.terrain)??null;Vo={set:(e==null?void 0:e.level)!=null,level:(e==null?void 0:e.level)??Lo}}function ni(o){return o.elevation>.3?0:Vo.set?Vo.level-o.elevation:Lo}function oi(o,e){return ni(o)+(e.offset??0)}function pc(o,e,t,n){return e.type==="pool"?0:dc(e,t,n)}function on(o,e,t){let n=(o.outdoor??[]).filter(a=>!ei(a.type)&&a.type!=="pool"&&G([e,t],a.points)),r=[...n].reverse().find(a=>a.cut)??n[0];return r?uc(o,r,e,t):ni(o)}function ri(o,e){return oi(o,e)+(e.above?ai(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function hc(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?ai(o):1.5}function fc(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!ei(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>G(n,t.points)))}function rn(o,e){return!e.above&&!fc(o,e)?an(o,e)-.05:ri(o,e)-hc(e)}function an(o,e){return ri(o,e)-.15}function ai(o){return o.height&&o.height>.3?o.height:1.2}var mc={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var ii={type:"none",pitch:35,overhang:.4},gc={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...ii}};var sn=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],si=.3;var li=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Qa=1.75;function ci(o){if(["lamp_ceiling","lamp_panel","lamp_pendant","stairwell","parking"].includes(o.type)||bc.has(o.type))return!1;let e=fe(o.type);return!((e==null?void 0:e.mount)==="ceiling"&&e.light)}var On=new Set(["lamp_downlight","lamp_spot"]);function Vn(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:.02}var bc=new Set(["stairs","stairs_u"]);function Do(o){var e;return li.has(o)||!!((e=fe(o))!=null&&e.light)}var _c=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var vc=1.05;function Ja(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return vc;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Ln(o,e,t){var r;let n=0;for(let a of o.furniture)!(_c.has(a.type)||(r=fe(a.type))!=null&&r.surface)||!G([e,t],$t(a))||(n=Math.max(n,a.h));return n}var lc=new Set([...li,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Xa={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.086,.05,.086],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};function No(o){var e;o.energy={...mc,...o.energy??{}},o.presence=o.presence??[],o.settings={...gc,...o.settings,roof:{...ii,...((e=o.settings)==null?void 0:e.roof)??{}}};for(let t of o.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(r=>({...r,panel:r.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),t.furniture=t.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=t.placements.filter(r=>r.entity_id.startsWith("light.")&&!r.pin);if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let a of n){let i=r[a.mount??"ceiling"],[s,c,d]=Xa[i];t.furniture.push({id:`lamp_${a.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:a.x,z:a.z,rotation:0,w:s,d:c,h:d,variant:null,entity:a.entity_id,power:null})}t.placements=t.placements.filter(a=>!a.entity_id.startsWith("light.")||a.pin)}t.openings=t.openings.map(r=>({...r,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return o}function qe(o){let e=0;for(let t=0;t<o.length;t++){let[n,r]=o[t],[a,i]=o[(t+1)%o.length];e+=n*i-a*r}return e/2}function Pe(o){let e=qe(o);if(Math.abs(e)<1e-9){let r=o.length||1;return[o.reduce((a,i)=>a+i[0],0)/r,o.reduce((a,i)=>a+i[1],0)/r]}let t=0,n=0;for(let r=0;r<o.length;r++){let[a,i]=o[r],[s,c]=o[(r+1)%o.length],d=a*c-s*i;t+=(a+s)*d,n+=(i+c)*d}return[t/(6*e),n/(6*e)]}function $t(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=o.w/2,a=o.d/2;return[[-r,-a],[r,-a],[r,a],[-r,a]].map(([i,s])=>[o.x+i*t-s*n,o.z+i*n+s*t])}function G(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[a,i]=e[n],[s,c]=e[r];i>o[1]!=c>o[1]&&o[0]<(s-a)*(o[1]-i)/(c-i)+a&&(t=!t)}return t}var di={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var yc=700,Wo="neonplan3d.unsaved",Mt="1.18.1",pi="floorplan-3d.unsaved";function wc(){try{let o=localStorage.getItem(Wo)??localStorage.getItem(pi);return o?JSON.parse(o):null}catch{return null}}function qo(o){try{o?localStorage.setItem(Wo,JSON.stringify(o)):(localStorage.removeItem(Wo),localStorage.removeItem(pi))}catch{}}var St=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){var e;this.connected=!1,this.flush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},yc),this.host.requestUpdate()}get frontendVersion(){return Mt}get versionGap(){return!this.backendVersion||Mt==="dev"||this.backendVersion===Mt?null:xc(this.backendVersion,Mt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Mt!=="dev"&&this.backendVersion!==Mt}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(No(e.building))}discardDraft(){this.draft=null,qo(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!(!e||!this.hass)){this.pending=null;for(let t of e.floors)for(let n of t.furniture)n.mount_y!=null&&n.mount_y>10&&(n.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await Hn(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,qo(null)}catch(t){this.saveState="error",this.saveError=ui(t),qo({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Na(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await Wa(this.hass)}catch{this.packs=[]}Ka(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Da(this.hass);this.building=No(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=wc()),this.revision=e.revision,this.error=null}catch(e){this.error=ui(e)}this.host.requestUpdate()}}};function ui(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function xc(o,e){let t=o.split(/[.-]/).map(r=>Number.parseInt(r,10)||0),n=e.split(/[.-]/).map(r=>Number.parseInt(r,10)||0);for(let r=0;r<Math.max(t.length,n.length);r++){let a=(t[r]??0)-(n[r]??0);if(a)return a}return 0}var hi;function Bo(){let o=new URL("./neonplan3d-editor.js?v=9aac1908489a",new URL(import.meta.url)).href;return hi??=import(o),hi}function Et(o){let e=(o.switch_keys??[]).slice(0,4).map(t=>t&&t!=="none"?t:null);return e.length?e:[null]}function fi(o,e){var n;let t=e?(n=o.states[e])==null?void 0:n.state:void 0;return t==="on"||t==="open"||t==="opening"}var kc={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},$c=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Mc=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Sc=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Dn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],ki=new Set(["light","switch","fan"]);function $i(o){return o.slice(0,o.indexOf("."))}function O(o){return kc[$i(o)]??null}function mi(o){return o!==null&&o!=="scene"&&o!=="script"}function dn(o,e){var n,r,a;let t=(n=o.entities)==null?void 0:n[e];return t?t.area_id?t.area_id:t.device_id&&((a=(r=o.devices)==null?void 0:r[t.device_id])==null?void 0:a.area_id)||null:null}function gi(o,e){var i;let t=O(e);if(!t)return!1;let n=(i=o.entities)==null?void 0:i[e];if(n!=null&&n.hidden||n!=null&&n.entity_category)return!1;let r=o.states[e];if(!r)return!1;let a=r.attributes.device_class;return t==="sensor"?a?$c.has(a):Mc.has(String(r.attributes.unit_of_measurement??"")):t==="binary"?a?Sc.has(a):!!(n!=null&&n.area_id):!0}var Ec=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function bi(o,e){var r;if(O(e)!=="sensor")return!1;let t=(r=o.entities)==null?void 0:r[e];if(t!=null&&t.hidden||t!=null&&t.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||Ec.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Y(n)}var Uo=null;function cn(o){var c,d;let e=Uo;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,r=[],a=new Map,i=new Map;for(let l of Object.keys(o.entities??{})){let u=o.entities[l],p=u.device_id;p&&u.area_id&&(i.get(p)??i.set(p,new Set).get(p)).add(u.area_id),p&&Zo(o,l)&&(n.get(p)??n.set(p,[]).get(p)).push(l),p&&!u.hidden&&!u.entity_category&&(a.get(p)??a.set(p,new Set).get(p)).add($i(l));let h=gi(o,l),f=dn(o,l);if(!f){(h||bi(o,l))&&mi(O(l))&&r.push(l);continue}h&&(t.get(f)??t.set(f,[]).get(f)).push(l)}if(o.entities)for(let l of Object.keys(o.states))o.entities[l]||(gi(o,l)||bi(o,l))&&mi(O(l))&&r.push(l);r.sort((l,u)=>Dn.indexOf(O(l))-Dn.indexOf(O(u))||Q(o,l).localeCompare(Q(o,u)));for(let[l,u]of t){let p=(d=(c=o.areas)==null?void 0:c[l])==null?void 0:d.name;u.sort((h,f)=>{let m=Dn.indexOf(O(h)),b=Dn.indexOf(O(f));return m-b||Q(o,h,p).localeCompare(Q(o,f,p))})}let s=new Set([...i].filter(([,l])=>l.size>1).map(([l])=>l));return Uo={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:r,domains:a,hubs:s},Uo}function de(o,e){return!e||!o.entities?[]:cn(o).areas.get(e)??[]}var Pc={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ac=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Ic=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Tc(o,e){var r,a,i;let t=(a=(r=o.entities)==null?void 0:r[e])==null?void 0:a.device_id,n=t&&!cn(o).hubs.has(t)?cn(o).domains.get(t):void 0;return n&&[...n].some(s=>Ac.has(s))?!1:!Ic.test(`${e} ${((i=o.states[e])==null?void 0:i.attributes.friendly_name)??""}`)}function Ko(o,e,t,n){var h;let r=(h=t.climate)==null?void 0:h[n];if(r==="none")return[];if(r)return o.states[r]?[r]:[];let a=Pc[n],i=(f,m)=>G([f,m],t.points),s=(e==null?void 0:e.placements.filter(f=>f.entity_id.startsWith("sensor.")))??[],c=s.filter(f=>i(f.x,f.z)).map(f=>f.entity_id),d=new Set(s.filter(f=>!i(f.x,f.z)).map(f=>f.entity_id)),l=[...new Set([...de(o,t.area_id).filter(f=>!d.has(f)),...c])],u=l.filter(f=>{var m;return f.startsWith("sensor.")&&((m=o.states[f])==null?void 0:m.attributes.device_class)===a&&Tc(o,f)});if(u.length)return u;let p=Mi[n];return p?l.filter(f=>{var m;return f.startsWith("climate.")&&typeof((m=o.states[f])==null?void 0:m.attributes[p])=="number"}):[]}var Mi={temperature:"current_temperature",humidity:"current_humidity"};function zc(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let a=Mi[t],i=a?Number(n==null?void 0:n.attributes[a]):Number.NaN;return t==="temperature"?_i(i,Ce(o)):i}let r=Number(n==null?void 0:n.state);return t==="temperature"?_i(r,n==null?void 0:n.attributes.unit_of_measurement):r}function Ce(o){var e,t;return((t=(e=o.config)==null?void 0:e.unit_system)==null?void 0:t.temperature)==="\xB0F"?"\xB0F":"\xB0C"}function _i(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function Pt(o,e){return Ce(o)==="\xB0F"?e*9/5+32:e}function We(o,e,t,n){let r=Ko(o,e,t,n).map(a=>zc(o,a,n)).filter(a=>Number.isFinite(a));return r.length?r.reduce((a,i)=>a+i,0)/r.length:null}function Si(o,e){return!!o.entities&&cn(o).hubs.has(e)}function Go(o,e){return o.entities?cn(o).power.get(e)??[]:[]}function Q(o,e,t){var a,i;let n=o.states[e],r=(n==null?void 0:n.attributes.friendly_name)??((i=(a=o.entities)==null?void 0:a[e])==null?void 0:i.name)??e;if(t&&r.length>t.length+1&&r.toLowerCase().startsWith(t.toLowerCase()+" ")){let s=r.slice(t.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return r}function Y(o){return!o||o.state==="unavailable"||o.state==="unknown"}var Cc=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Yo(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Qo(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function De(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Qo(o.state)||o.state==="returning";switch(O(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return Yo(o)&&Cc.has(String(o.state).toLowerCase());default:return!1}}function Ei(o,e){if(!o||Y(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function Pi(o){if(!o||Y(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],r=["heating","cooling","drying","fan"].includes(t);return{color:n,level:r||!t?1:.45}}function Ai(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(s=>parseInt(e.slice(s,s+2),16)/255),n=s=>{let c=Math.max(...s),d=Math.min(...s),l=c-d;return c<=0||l/c<.25?[-1,0]:[(c===s[0]?((s[1]-s[2])/l+6)%6:c===s[1]?(s[2]-s[0])/l+2:(s[0]-s[1])/l+4)*60,l/c]},[r]=n(t),[a]=n(o.color);if(r<0||a<0)return r<0&&a<0?o:null;let i=Math.abs(r-a);return Math.min(i,360-i)<=30?o:null}function Be(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,a;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?a=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?a=Fc(t.color_temp_kelvin):a=[1,.71,.28],{color:a,level:n}}function Fc(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function At(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Rc=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Hc=new Set(["garage","gate"]),jc=new Set(["window","opening"]);function ln(o,e,t=!1){let n=new Map;return e.length&&o.forEach((r,a)=>{let i=t&&e.length===1?e[0]:e[a];i&&n.set(r.id,i)}),n}function It(o,e){let t=new Map,n=(a,i)=>a==="none"?null:a??i??null,r=(a,i,s)=>({cover:n(a.cover,i),contact:a.sensor==="handle"&&a.contact==null?null:n(a.contact,s),tilt:a.tilt==="none"?null:a.tilt,contact2:a.leaves===2&&a.contact2&&a.contact2!=="none"?a.contact2:null,tilt2:a.leaves===2&&a.tilt2&&a.tilt2!=="none"?a.tilt2:null,position:a.position&&a.position!=="none"?a.position:null,positionInverted:!!a.position_inverted,tiltAngle:a.tilt_angle&&a.tilt_angle!=="none"?a.tilt_angle:null,tiltMax:a.tilt_max??null,tiltOffset:a.tilt_offset??null,tiltInvert:!!a.tilt_invert,shut:!!a.shut,...a.contact_invert?{contactInvert:!0}:{},...a.cover_invert?{coverInvert:!0}:{}});for(let a of e){for(let i of a.rooms){let s=a.openings.filter(v=>v.room_id===i.id).sort((v,$)=>v.edge-$.edge||v.offset-$.offset);if(!s.length)continue;let c=de(o,i.area_id),d=v=>{var $;return($=o.states[v])==null?void 0:$.attributes.device_class},l=c.filter(v=>O(v)==="cover"&&Rc.has(d(v))),u=s.filter(v=>v.type==="window"),p=s.filter(v=>v.type==="door"),h=s.filter(v=>v.type==="garage"),f=ln(u,l,!0),m=ln(u,c.filter(v=>O(v)==="binary"&&jc.has(d(v)))),b=ln(p,c.filter(v=>O(v)==="binary"&&d(v)==="door")),_=ln(h,c.filter(v=>O(v)==="cover"&&Hc.has(d(v)??""))),w=ln(h,c.filter(v=>O(v)==="binary"&&d(v)==="garage_door"));for(let v of s){let $=v.type==="window"?f:v.type==="garage"?_:null,A=v.type==="window"?m:v.type==="garage"?w:b;t.set(v.id,r(v,$==null?void 0:$.get(v.id),A.get(v.id)))}}for(let i of a.openings)t.has(i.id)||t.set(i.id,r(i))}return t}var Oc=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Vc(o){if(!o||Y(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=Oc.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var Lc=.5;function Ue(o,e,t="window"){var b;let n=_=>{var w;return!!_&&((w=o.states[_])==null?void 0:w.state)==="on"},r=_=>!!_&&!!o.states[_]&&!Y(o.states[_]),a=_=>_?Vc(o.states[_]):null,i=_=>{let w=a(_);return e.contactInvert&&_&&_!==e.tilt&&_!==e.tilt2&&w!=="tilted"&&w?w==="open"?"closed":"open":w},s=n(e.tilt2)||i(e.tilt2)==="tilted"||i(e.contact2)==="tilted",c=i(e.contact2)==="open"&&!s?1:0,d=n(e.tilt)||i(e.tilt)==="tilted"||i(e.contact)==="tilted",l=d?1:0,u=e.tiltAngle?Number((b=o.states[e.tiltAngle])==null?void 0:b.state):NaN;if(Number.isFinite(u)){let _=(u-(e.tiltOffset??0))*(e.tiltInvert?-1:1);l=Math.min(1,Math.max(0,_/(e.tiltMax||15))),l<.08&&(l=0),d=l>0}let p=i(e.contact)==="open"&&!d?1:0,h=null,f=e.cover?o.states[e.cover]:void 0,m=Ii(o,e.position);if(m!==null)h=e.positionInverted?m:1-m;else if(f&&!Y(f)){let _=f.attributes.current_position;typeof _=="number"?h=1-Math.min(100,Math.max(0,_))/100:h=f.state==="closed"?1:f.state==="opening"||f.state==="closing"?.5:0,e.coverInvert&&(h=1-h)}else e.cover&&(h=0);if(t==="door"){let _=i(e.contact);return h!==null&&f&&Vi.has(String(f.attributes.device_class??""))?{open:_===null?1-h:_==="closed"?0:1,open2:i(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0}:{open:_===null?e.shut?0:Lc:_==="closed"?0:1,open2:i(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:h,sensed:_!==null||h!==null}}if(t==="garage"){let _=i(e.contact),w=h!==null||_!==null;return h===null&&(h=_===null||_==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:h,sensed:w}}return{open:p,open2:c,tilt:l,tilt2:s?1:0,cover:h,sensed:r(e.contact)||r(e.tilt)||Number.isFinite(u)}}function Ii(o,e){let t=e?o.states[e]:void 0;if(!t||Y(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function Jo(o,e){var i,s;let t=new Map,n=[];for(let c of e){let d=O(c)==="camera"?`camera:${c}`:((s=(i=o.entities)==null?void 0:i[c])==null?void 0:s.device_id)??`entity:${c}`,l=t.get(d);l||(t.set(d,l=[]),n.push(d)),l.push(c)}let r=n.map(c=>{let d=t.get(c),l=d.find(u=>{var p,h;return!((h=(p=o.entities)==null?void 0:p[u])!=null&&h.name)})??d[0];return{primary:l,others:d.filter(u=>u!==l)}}),a=new Map(e.map((c,d)=>[c,d]));return r.sort((c,d)=>a.get(c.primary)-a.get(d.primary))}function Nn(o,e){return Jo(o,e).map(t=>t.primary)}var vi={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Ti=new Set(["tv_board","tv_wall"]);function zi(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let r=String(n).toLowerCase(),a=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===a||a.length>=3&&r.includes(a)}function Ci(o){return Ti.has(o)||!!Ga(o)}function qn(o){return Ci(o)||o==="desk"||o==="fridge_smart"}function Tt(o,e){var a;let t=new Set,n=st(o,e),r=e.some(i=>i.openings.some(s=>s.confirm))?It(o,e):null;for(let i of e){for(let s of i.placements)s.confirm&&t.add(s.entity_id);for(let s of i.openings){let c=s.confirm?r==null?void 0:r.get(s.id):null;c!=null&&c.cover&&c.cover!=="none"?t.add(c.cover):s.type==="garage"&&(c!=null&&c.contact)&&O(c.contact)==="switch"&&t.add(c.contact)}for(let s of i.furniture){if(s.confirm&&s.type==="wall_switch")for(let d of Et(s))d&&t.add(d);let c=s.confirm?(a=n.get(s.id))==null?void 0:a.entity:null;c&&c!=="none"&&t.add(c)}}return t}function Fi(o,e){let t=new Set;if(!e.some(n=>n.openings.some(r=>r.cover_invert)))return t;for(let n of It(o,e).values())n.coverInvert&&n.cover&&t.add(n.cover);return t}function Ri(o,e){let t=new Map;for(let n of e)for(let r of n.furniture){if(r.type!=="awning"&&!jn(r.type))continue;let a=r.entity&&r.entity!=="none"?r.entity:null,i=a?o.states[a]:void 0,s=r.awning_time??20;if(!i||Y(i)){t.set(r.id,{out:0,moving:0,time:s});continue}let c=p=>r.awning_invert?1-p:p,d=Ii(o,r.awning_position&&r.awning_position!=="none"?r.awning_position:null),l=i.attributes.current_position,u=i.state==="opening"?r.awning_invert?-1:1:i.state==="closing"?r.awning_invert?1:-1:0;d!==null?t.set(r.id,{out:c(d),moving:0,time:s}):typeof l=="number"&&Number.isFinite(l)?t.set(r.id,{out:c(Math.min(1,Math.max(0,l/100))),moving:0,time:s}):u?t.set(r.id,{out:null,moving:u,time:s}):t.set(r.id,{out:c(i.state==="open"||i.state==="on"?1:0),moving:0,time:s})}return t}function Xo(o,e){let t=r=>{var i;if(!r||r==="none")return!1;let a=(i=o.states[r])==null?void 0:i.state;return a==="on"||a==="open"},n=new Map;for(let r of e)for(let a of r.furniture)a.type==="fridge_smart"&&n.set(a.id,{left:t(a.door_left),right:t(a.door_right)});return n}var yi={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Zo(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function Dc(o,e){var n,r;if(Zo(o,e))return e;let t=(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id;return t?Go(o,t).find(a=>a!==e)??null:null}function st(o,e){let t=new Map;for(let n of e){let r=new Set([...n.furniture.flatMap(a=>[a.entity,a.power]),...n.placements.map(a=>a.entity_id)].filter(a=>!!a&&a!=="none"));for(let a of n.furniture){let i=a.type in yi,s=i?yi[a.type]:vi[a.type]??(kt(a.type)?vi.robot_vacuum:void 0);if(!s&&a.entity==null&&a.power==null)continue;let c=n.rooms.find(h=>h.points.length>=3&&G([a.x,a.z],h.points)),d=c?Nn(o,de(o,c.area_id)):[],l=h=>`${h} ${Q(o,h)}`,u=a.entity==="none"?null:a.entity??null;if(a.entity==null){let h=d.filter(f=>!r.has(f));if(i){let f=h.filter(m=>O(m)==="light");u=f.find(m=>s.test(l(m)))??f[0]??null}else if(kt(a.type)){let f=(c==null?void 0:c.area_id)??null;u=Object.keys(o.entities??{}).find(m=>m.startsWith("vacuum.")&&!r.has(m)&&dn(o,m)===f)??null}else if(a.type==="radiator"||a.type==="ac_unit"){let f=h.filter(m=>O(m)==="climate");u=f.find(m=>s.test(l(m)))??f[0]??null}else if(Ci(a.type)){let f=h.filter(m=>O(m)==="media");u=f.find(m=>{var b;return((b=o.states[m])==null?void 0:b.attributes.device_class)==="tv"})??f.find(m=>s==null?void 0:s.test(l(m)))??(Ti.has(a.type)?f[0]??null:null)}else s&&(u=h.find(f=>["switch","media","fan"].includes(O(f)??"")&&s.test(l(f)))??null);u&&r.add(u)}let p=a.power==="none"?null:a.power??null;a.power==null&&(p=u?Dc(o,u):null,!p&&s&&c&&!i&&(p=de(o,c.area_id).find(f=>Zo(o,f)&&!r.has(f)&&s.test(l(f)))??null),p&&r.add(p)),(u||p)&&t.set(a.id,{entity:u,power:p})}}return t}function er(o){if(!o||o.state==="off"||o.state==="standby"||Y(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function Hi(o,e,t,n=[]){let r=(u,p)=>G([u,p],t.points),a=st(o,[e]),i=It(o,[e]),s=[...e.placements.filter(u=>r(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>r(u.x,u.z)).flatMap(u=>{var p,h;return[(p=a.get(u.id))==null?void 0:p.entity,(h=a.get(u.id))==null?void 0:h.power]}),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let p=i.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...t.panel??[]].filter(u=>!!u&&!!o.states[u]),c=new Set(t.hidden??[]),d=[...new Set(s)].filter(u=>!c.has(u)),l=new Set(d);return{shown:d,more:de(o,t.area_id).filter(u=>!l.has(u)&&!c.has(u))}}var wi=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Nc={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Wn(o,e){var u,p;let t=e.car??{},n=h=>h&&h!=="none"?h:null,r=n(t.device)??n(e.entity),a=r?(p=(u=o.entities)==null?void 0:u[r])==null?void 0:p.device_id:null,i=a&&o.entities?Object.values(o.entities).filter(h=>h.device_id===a).map(h=>h.entity_id):[],s=h=>{var f,m,b;return`${h} ${((f=o.states[h])==null?void 0:f.attributes.friendly_name)??""} ${((b=(m=o.entities)==null?void 0:m[h])==null?void 0:b.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},c=(h,f,m)=>i.find(b=>f.includes(b.split(".")[0])&&Nc[h].test(s(b))&&(!m||m(b)))??null,d=h=>{var f;return String(((f=o.states[h])==null?void 0:f.attributes.unit_of_measurement)??"")},l=h=>{var f;return String(((f=o.states[h])==null?void 0:f.attributes.device_class)??"")};return{soc:n(t.soc)??i.find(h=>h.startsWith("sensor.")&&l(h)==="battery")??c("soc",["sensor"],h=>d(h)==="%"),range:n(t.range)??c("range",["sensor"],h=>/km|mi/.test(d(h)))??c("range",["sensor"]),charging:n(t.charging)??c("charging",["sensor"],h=>/^k?W$/.test(d(h)))??c("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??i.find(h=>h.startsWith("binary_sensor.")&&l(h)==="plug")??c("plugged",["binary_sensor"]),lock:n(t.lock)??i.find(h=>h.startsWith("lock."))??c("lock",["binary_sensor"]),climate:n(t.climate)??i.find(h=>h.startsWith("climate."))??c("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??i.find(h=>h.startsWith("device_tracker."))??null}}function qc(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function Bn(o,e){var b;let t=Wn(o,e),n=_=>_?o.states[_]:void 0,r=_=>{var v;let w=Number((v=n(_))==null?void 0:v.state);return _&&Number.isFinite(w)?w:null},a=r(t.soc),i=r(t.range),s=n(t.charging),c=String((s==null?void 0:s.attributes.unit_of_measurement)??""),d=s&&/^k?W$/.test(c)?(r(t.charging)??0)*(c==="kW"?1e3:1):null,l=d!==null?d>50:!!s&&["on","charging","laden"].includes(s.state.toLowerCase()),u=n(t.plugged),p=n(t.lock),h=n(t.climate),f=n(t.tracker),m=(f==null?void 0:f.state.toLowerCase())??"";return{entities:t,soc:a!==null?Math.max(0,Math.min(100,a)):null,range:i,rangeUnit:String(((b=n(t.range))==null?void 0:b.attributes.unit_of_measurement)??"km"),chargingW:d,charging:l,plugged:u?u.state==="on":null,locked:p?qc(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:f&&m!=="home"&&!Y(f)?m==="not_home"?"":f.state:null}}function ji(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(Wn(o,n)))).filter(t=>!!t)}function un(o,e,t){var r,a;if(t==="none")return null;if(t)return t;let n=e?(a=(r=o.entities)==null?void 0:r[e])==null?void 0:a.device_id:null;if(!n||!o.entities)return null;for(let i of Object.values(o.entities))if(!(i.device_id!==n||!i.entity_id.startsWith("sensor."))&&(wi.test(i.translation_key??"")||wi.test(i.entity_id.split(".")[1])))return i.entity_id;return null}function xi(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Oi(o,e,t,n){var a,i;let r=t?(a=o.states[t])==null?void 0:a.attributes:void 0;for(let s of[n?(i=o.states[n])==null?void 0:i.state:void 0,r==null?void 0:r.current_room,r==null?void 0:r.room,r==null?void 0:r.current_segment]){let c=tr(o,e,s);if(c)return c}return null}function tr(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=xi(t);if(!n)return null;let r=a=>{var i,s;return[a.name,a.area_id??"",a.area_id&&((s=(i=o.areas)==null?void 0:i[a.area_id])==null?void 0:s.name)||""].map(xi).filter(Boolean)};return e.find(a=>r(a).includes(n))??e.find(a=>r(a).some(i=>i.length>=3&&(i.includes(n)||n.includes(i))))??null}var Vi=new Set(["garage","gate","door"]);function nr(o,e){let t=new Set,n=new Set,r=a=>{if(!a||a==="none"||!o.states[a])return;let i=O(a);i==="light"?t.add(a):i==="cover"&&!Vi.has(String(o.states[a].attributes.device_class??""))&&n.add(a)};for(let a of e.rooms){let i=new Set(a.hidden??[]);for(let s of Nn(o,de(o,a.area_id)))i.has(s)||r(s)}for(let a of e.placements)r(a.entity_id);for(let a of e.furniture)r(a.entity);return{lights:[...t],covers:[...n]}}function Li(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Di(o,e,t){var r;let n=((r=t.target)==null?void 0:r.trim())??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[a,i]=n.split(".",2);o.callService(a,i,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var Wc={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de CasaNeon ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de CasaNeon.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace.",as_furniture_pick:"Elegir mueble \u2026",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de CasaNeon.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_copy:"Copiar",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon \u2013 actualiza CasaNeon (HACS) y recarga la p\xE1gina.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para CasaNeon. Importa aqu\xED tus propios packs (.fp3dpack).",ext_pro:"Extensiones Pro",ext_active:"activa",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: CasaNeon encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas y prop\xF3n ideas como issue en GitHub: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant.",show_menu:"Mostrar",tool_menu:"Herramienta",floor_label:"Planta:",floor_settings:"Ajustes de la planta",floor_settings_of:"Planta {floor}",floor_none_hint:"A\xF1ade tu primera planta arriba con \xABPlanta\xBB \u2192 \xABA\xF1adir planta\xBB.",tool_group_build:"Construir",tool_group_outside:"Exterior",tool_room:"Habitaci\xF3n",view_menu:"Vista",fit_hint:"Mostrar todo el plano de la planta (con el jard\xEDn al dibujar el exterior)",tech_open:"Dibujar la sala t\xE9cnica",tech_open_hint:"Despu\xE9s toca en el plano la pared donde est\xE1 tu instalaci\xF3n.",tech_step:"Paso {n}",tech_step_feed:"Toca \xAB{name}\xBB a la izquierda y luego el punto de la pared por donde entra la tuber\xEDa (abajo del todo: desde el suelo).",tech_step_devices:"Toca la bomba y el filtro de arena a la izquierda: se colocan junto a la pared. La bomba de calor y la dosificaci\xF3n si las tienes.",tech_step_line:"Traza una l\xEDnea: de \xAB{a}\xBB a \xAB{b}\xBB. Pulsa en uno y arrastra hasta el otro.",tech_step_loose:"Un tubo acaba suelto: prol\xF3ngalo hasta un equipo o una tuber\xEDa, o b\xF3rralo (\u270B Seleccionar).",tech_step_drawing:"Sigue arrastrando o toca punto a punto: la l\xEDnea termina en un equipo, una tuber\xEDa o un tubo.",tech_step_fit:"Toca el tubo donde va la v\xE1lvula (el visor): se ilumina en naranja.",tech_mode:"Sala t\xE9cnica",tech_mode_hint:"Dibuja la sala t\xE9cnica en esta pared: entra las tuber\xEDas de la piscina, coloca los equipos, traza los tubos",tech_draw:"Dibujar",tech_pick:"Seleccionar",pool_delete_confirm:"\xBFEliminar la piscina con sus {n} tubos?",tech_erase:"Borrar",tech_erase_hint:"Toca un tubo, una v\xE1lvula de bola, una mirilla o un agujero y se elimina. \xBFLo dibujaste mal? Deshacer tambi\xE9n ayuda.",tech_feeds:"Tuber\xEDas de la piscina",tech_devices:"Equipos",tech_fittings:"Valvuler\xEDa",tech_hint:"Trazar una l\xEDnea: toca un equipo, una tuber\xEDa o un tubo y arrastra hasta el siguiente (o punto a punto). Sobre un tubo crea una T. CasaNeon sabe solo hacia d\xF3nde va el agua y qu\xE9 conexi\xF3n del equipo usar.",tech_no_ports:"Coloca primero el skimmer, el sumidero y las boquillas con la herramienta Piscina.",tech_ok:"Todo conectado: el agua circula.",tech_issue_loose:"{n} extremos sueltos",tech_issue_port:"{name} sin conectar",tech_issue_feed:"{name} a\xFAn no entrado",tech_feed_place:"Toca donde la tuber\xEDa entra en la sala: abajo del todo, desde el suelo; m\xE1s arriba, por la pared.",tech_start:"Toca un equipo o una tuber\xEDa y traza una l\xEDnea.",feed_skimmer:"Skimmer",feed_drain:"Sumidero",feed_inlet:"Boquillas",feed_waste:"Desag\xFCe (lavado)",hp_ports:"Conexiones",hp_side_right:"derecha",hp_side_left:"izquierda",hp_side_back:"detr\xE1s",pool_depth:"Profundidad del vaso (m)",pool_rim:"Borde sobre el c\xE9sped (m)",pool_depth_hint:"Profundidad: del borde al fondo. Una piscina de 1,50 m que sobresale 20 cm: profundidad 1,50, borde 0,20. El agua queda 15 cm bajo el borde.",pool_depth_ground:"La profundidad se ve en 3D en cuanto la piscina est\xE1 en un c\xE9sped, una terraza u otra zona; sin suelo alrededor, el vaso se ver\xEDa desde fuera.",pool_port_depth:"Prof.",pool_port_depth_hint:"Profundidad bajo la l\xEDnea de agua (m): boquillas normalmente 0,30, el skimmer en la l\xEDnea de agua",pool_valves:"V\xE1lvulas",pool_valve_shut:"cerrada",pool_valve_toggle:"Toca para cambiar: tal como est\xE1 la v\xE1lvula de verdad",pool_joint:"Uni\xF3n",block_some_fixed:"\u{1F512} Una pieza est\xE1 fijada: el bloque solo se mueve cuando todas est\xE9n liberadas.",unfix_all:"Liberar todo",wv_block_all:"Bloque entero",wv_block_one:"Solo esta pieza",wv_gap:"Hueco: {w} \u2013 esto cabe:",wv_gap_hint:"Toca un lugar libre de la pared: aqu\xED aparece lo que cabe.",wv_kit_title:"A la pared",wv_recent:"Usados recientemente",wv_none_fits:"Nada cabe en este hueco.",wv_cat_base:"Muebles bajos y aparadores",wv_cat_hang:"Colgados",wv_cat_tall:"Armarios altos",wv_cat_living:"Sentarse y dormir",wv_cat_light:"Luces",wv_cat_pack:"De tus packs",wv_cat_energy:"Energ\xEDa",block_title:"Bloque de muebles",multi_title:"{n} muebles seleccionados",block_hint:"Un clic selecciona todo el bloque, arrastrar lo mueve. Una sola pieza: t\xF3cala dos veces o elige su nombre abajo.",multi_hint:"May\xFAs + clic a\xF1ade o quita muebles, May\xFAs + arrastrar en una zona vac\xEDa dibuja un marco. Mu\xE9velos, g\xEDralos o c\xF3pialos juntos, o \xFAnelos en un bloque.",block_part_edit:"Editar solo esta pieza",block_break:"Deshacer bloque",block_make:"Unir en un bloque",multi_mode:"Seleccionar varios (tocar a\xF1ade, arrastrar dibuja un marco)",block_part:"Parte de un bloque.",block_select:"Seleccionar todo el bloque",block_delete:"\xBFEliminar {n} muebles?",block_delete_fixed:"\xBFEliminar {n} muebles? Algunos est\xE1n fijados.",wall_zoom_hint:"Zoom: rueda del rat\xF3n o dos dedos",wall_zoom_all:"Pared entera",card_pets:"Mostrar las mascotas",card_ghost:"Mostrar el fantasma de Halloween",card_ghost_hint:"Pack divertido Halloween: el fantasma flota tambi\xE9n por la casa de esta tarjeta (p. ej. desact\xEDvalo en la tableta de pared)",card_pets_hint:"Pack divertido Mascotas: mostrar los animales configurados en esta tarjeta (p. ej. desact\xEDvalos en la tableta de pared)",fun_title:"Packs divertidos",fun_intro:"Extras solo por diversi\xF3n; act\xEDvalos y desact\xEDvalos aqu\xED.",fun_name_pets:"Mascotas",fun_feature_pets:"Un gato, un perro o un conejo vive en tu casa 3D: recorre las habitaciones, se tumba en el sof\xE1, la cama o la alfombra y duerme por la noche.",fun_name_halloween:"Halloween",fun_feature_halloween:"Un fantasma que de vez en cuando flota por la casa.",halloween_ghost:"Dejar flotar al fantasma",pets_show:"Mostrar las mascotas",pet_add:"A\xF1adir una mascota",pet_name:"Nombre",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Gato",pet_kind_dog:"\u{1F436} Perro",pet_kind_rabbit:"\u{1F430} Conejo",pet_fur:"Pelaje",pet_fur_orange:"Pelirrojo",pet_fur_tabby:"Atigrado",pet_fur_black:"Negro",pet_fur_white:"Blanco",pet_fur_grey:"Gris",pet_fur_brown:"Marr\xF3n",pet_fur_calico:"Tricolor",pet_fur_golden:"Dorado",pet_fur_cream:"Crema",pet_breed:"Raza",pet_breed_dachshund:"Teckel",pet_breed_pug:"Carlino",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Pastor",pet_floor:"Planta",pet_floor_auto:"Planta baja",tt_ev_camera:"La c\xE1mara detecta movimiento: {name}",terrain:"Terreno",terrain_hint:"D\xF3nde est\xE1 el terreno alrededor de la casa. Lo que queda por debajo (un s\xF3tano, la parte baja de un semis\xF3tano) est\xE1 bajo tierra en 3D; c\xE9spedes, caminos y terrazas est\xE1n sobre el terreno.",terrain_level:"Altura del terreno (m, planta baja = 0)",terrain_earth:"Mostrar los s\xF3tanos bajo tierra",terrain_earth_hint:"Las plantas por debajo del terreno est\xE1n bajo tierra; abre una y la ver\xE1s como en una excavaci\xF3n. Desactivado: quedan sueltas como antes.",terrain_cellar_hint:"Semis\xF3tano: baja la altura del terreno tanto como deba asomar el s\xF3tano, p. ej. \u22121,2 m. Las ventanas de s\xF3tano bajo el terreno reciben un patio ingl\xE9s.",terrain_no_cellar_hint:"Un s\xF3tano es una planta con elevaci\xF3n negativa, p. ej. \u22122,6 m.",terrain_reset:"Restablecer el terreno",cellar_window:"Ventana de s\xF3tano",well:"Patio ingl\xE9s",well_hint:"Esta ventana est\xE1 bajo el nivel del terreno: en 3D recibe un patio ingl\xE9s con rejilla. Desm\xE1rcalo para no tener ninguno, p. ej. si por fuera pasa un camino.",well_rim:"Borde sobre el terreno (m)",cellar_window_hint:"Peque\xF1a y arriba en la pared: 100 \xD7 50 cm, 25 cm bajo el techo. Bajo el terreno recibe en 3D un patio ingl\xE9s con rejilla.",side_fold_hint:"Estrechar la barra lateral: m\xE1s espacio para el plano",furn_ac_unit:"Aire acondicionado (de pared)",furn_awning:"Toldo",furn_group_outdoor:"Terraza y balc\xF3n",bin_from:"Brillar desde (hora, el d\xEDa antes)",bin_until:"hasta (hora, d\xEDa de recogida)",bin_none:"Sin recogida a la vista",hh_title:"Hoy en casa",hh_left:"quedan {t}",hh_done:"\xA1Listo!",hh_finished:"{name} ha terminado",hh_thirsty:"Sed",hh_plant:"{name} necesita agua",hh_service:"{name}: mantenimiento pendiente",hh_fridge_open:"{name} est\xE1 abierto",alert_fridge_door:"Nevera abierta: {name}",alert_short_fridge_door:"Nevera abierta",hh_moisture:"Planta (plant.*) o sensor de humedad",hh_moisture_min:"Sed por debajo de (%)",hh_remaining:"Tiempo restante (sensor)",hh_door:"Sensor de puerta",hh_fridge_door:"Sensor de puerta",hh_appliance_hint:"Mientras funciona, su marcador muestra el tiempo restante; despu\xE9s \xAB\xA1Listo!\xBB hasta que se abre la puerta o vuelve a funcionar.",hh_door_alarm:"Avisar tras (minutos abierto)",hh_service_entity:"Consumible / mantenimiento (sensor)",hh_service_min:"Pendiente desde (\u2264 % o d\xEDas)",hh_service_hint:"P. ej. filtro, sal o abrillantador: un sensor binario (activo = pendiente), un n\xFAmero (% o d\xEDas restantes) o una fecha. Si toca, el aparato brilla en amarillo y aparece en \xABHoy en casa\xBB.",hh_teaser_plant:"Con Hogar Pro la planta muestra cu\xE1ndo necesita agua.",hh_teaser_appliance:"Con Hogar Pro el aparato muestra su tiempo restante y \xAB\xA1Listo!\xBB hasta que se abre la puerta.",hh_teaser_fridge:"Con Hogar Pro CasaNeon avisa cuando la puerta de la nevera est\xE1 abierta demasiado tiempo.",card_household:"Hoy en casa",card_household_hint:"Hogar Pro: tarjeta con contenedores, correo, aparatos terminados, plantas sedientas y mantenimiento",furn_waste_bin:"Contenedor de basura",furn_mailbox:"Buz\xF3n",furn_wall_switch:"Interruptor de pared",switch_keys:"Teclas",switch_key:"Entidad de la tecla",switch_key_n:"Tecla {n}",switch_hint:"Cada tecla conmuta su entidad al tocarla en 3D (una persiana se abre o se cierra) y su LED se enciende mientras est\xE1 encendida o abierta.",furn_group_household:"Hogar",bin_shape:"Forma",bin_shape_bin120:"Contenedor con ruedas 120 l",bin_shape_bin240:"Contenedor con ruedas 240 l",bin_shape_bin1100:"Contenedor 1100 l",bin_shape_multi:"Contenedor con varios compartimentos",bin_shape_bag:"Bolsa",bin_shape_caddy:"Cubo",bin_shape_underground:"Contenedor soterrado",bin_kind:"Residuo",bin_kind_rest:"Resto",bin_kind_bio:"Org\xE1nico",bin_kind_paper:"Papel",bin_kind_plastic:"Envases",bin_kind_glass:"Vidrio",bin_kind_garden:"Restos de poda",bin_kind_recycling:"Reciclaje",bin_kind_other:"Otro",bin_color:"Color",bin_lid:"Tapa",bin_source:"Calendario de recogida o sensor",bin_match:"Palabra del calendario (vac\xEDo: seg\xFAn el residuo)",bin_hint:"El contenedor brilla desde la hora elegida del d\xEDa anterior hasta la hora del d\xEDa de recogida (para todos); su marcador indica \xABHoy\xBB o \xABMa\xF1ana\xBB, al tocarlo muestra las pr\xF3ximas recogidas. En un calendario (p. ej. Waste Collection Schedule) se buscan las palabras de su residuo; un sensor puede dar los d\xEDas o la fecha.",bin_today:"Hoy",bin_tomorrow:"Ma\xF1ana",bin_in_days:"en {n} d\xEDas",mailbox_shape:"Forma",mailbox_shape_wall:"Buz\xF3n de pared",mailbox_shape_pole:"Buz\xF3n en poste (con bandera)",mailbox_shape_pillar:"Buz\xF3n de pie con portaperi\xF3dicos",mailbox_shape_parcel:"Buz\xF3n de paquetes",mailbox_shape_bank:"Buzones agrupados",mailbox_entity:"Sensor de correo (trampilla o indicador)",mailbox_door:"Sensor de la puerta de recogida (opcional)",mailbox_hint:"Con un indicador (p. ej. un input_boolean \xABcorreo\xBB que activa una automatizaci\xF3n) el buz\xF3n brilla mientras est\xE1 activo. Con trampilla y puerta de recogida brilla cuando ha llegado correo despu\xE9s del \xFAltimo vaciado.",mailbox_post:"Correo",pro_name_household:"Hogar Pro",pro_feature_household:"Hogar Pro: contenedores que brillan la v\xEDspera de la recogida, buz\xF3n con correo, plantas con sed; lavadora, secadora y lavavajillas muestran el tiempo restante y \xAB\xA1Listo!\xBB; filtros y consumibles pendientes en amarillo; aviso de nevera abierta; tarjeta \xABHoy en casa\xBB; adem\xE1s la nevera inteligente (americana, puertas con sensores)",household_teaser_bin:"Con Hogar Pro el contenedor brilla la v\xEDspera de la recogida, seg\xFAn tu calendario.",household_teaser_mail:"Con Hogar Pro el buz\xF3n brilla en cuanto hay correo, hasta que se vac\xEDa.",awning_cover:"Toldo (cover)",motor_cover:"Motor (cover)",curtain_side:"Se abre hacia",curtain_side_both:"ambos lados",curtain_side_left:"izquierda (vista de frente)",curtain_side_right:"derecha (vista de frente)",motor_time:"Tiempo de recorrido (s)",motor_invert_hint:"Para covers que indican 100 % con la cortina cerrada o la pantalla abajo.",awning_pitch:"Inclinaci\xF3n (\xB0)",awning_time:"Tiempo de salida completa (s)",awning_position:"Sensor de posici\xF3n (opcional)",awning_valance:"Fald\xF3n (borde de lona delantero)",awning_invert:"Invertir el sentido",awning_invert_hint:"Para covers que informan 100 % cuando el toldo est\xE1 recogido.",awning_kind:"Tipo",awning_kind_arm:"Toldo de brazos articulados (terraza)",awning_kind_drop:"Toldo de brazo invisible / punto recto (balc\xF3n, ventana)",awning_kind_vertical:"Toldo vertical / ZIP (ventana, balc\xF3n)",awning_kind_pergola:"Toldo de p\xE9rgola / galer\xEDa acristalada",awning_kind_side:"Toldo lateral (privacidad)",awning_kind_arm_hint:"El cl\xE1sico sobre la terraza: los brazos articulados empujan la lona hacia fuera con una ligera pendiente. Fondo = salida.",awning_kind_drop_hint:"Los brazos giran desde la pared hacia delante y hacia abajo, la lona se tensa inclinada delante. Fondo = longitud de los brazos, Inclinaci\xF3n = cu\xE1nto bajan los brazos por debajo de la horizontal.",awning_kind_vertical_hint:"La lona baja en vertical por gu\xEDas laterales hasta el suelo \u2013 delante de una ventana, la barandilla de un balc\xF3n o el frente de una p\xE9rgola. Altura sobre el suelo = borde inferior del cofre.",awning_kind_pergola_hint:"Un marco fijo con postes delante; la lona se extiende por encima de sus gu\xEDas. Fondo = hasta los postes, Inclinaci\xF3n = pendiente del techo.",awning_kind_side_hint:"Un poste con la lona enrollada a la izquierda, la lona se extiende en horizontal hacia la derecha hasta el poste opuesto. Ancho = extensi\xF3n, Altura sobre el suelo = altura de la lona.",awning_hint:"Ancho = el toldo a lo largo de la pared, fondo = su salida totalmente extendido; la parte trasera del marco va contra la fachada, la altura sobre el suelo es la parte inferior del cofre. Si el cover informa su posici\xF3n mientras se mueve, el toldo sale despacio en 3D; si solo dice abriendo/cerrando, se mueve seg\xFAn el tiempo de salida.",furn_only_color:"Brillar solo en un color",furn_only_color_pick:"Color",furn_only_color_hint:"La l\xE1mpara solo brilla mientras la luz muestra aproximadamente este color, p. ej. amarillo para \xABagua\xBB en el lavabo. Los dem\xE1s colores de la misma luz quedan oscuros aqu\xED.",furn_run_w:"En marcha desde (vatios)",furn_run_w_hint:"A partir de cu\xE1ntos vatios en el sensor de potencia el aparato cuenta como en marcha y brilla (vac\xEDo: 10 W). Para aparatos tras un enchufe inteligente que consumen unos vatios en espera, p. ej. 100.",roof_window_float:"Mostrar sobre la habitaci\xF3n sin el tejado",roof_window_float_hint:"Cuando el tejado se desvanece al acercarte a una planta o una habitaci\xF3n, la ventana se queda en su sitio sobre la habitaci\xF3n: abierta, abatida, con su persiana. Funciona sobre las habitaciones de la planta en la que se apoya el tejado; donde la pendiente baja sobre una planta inferior, las ventanas se quedan en el tejado. Desactivado: solo se ve en el tejado."};function C(o,e,t={}){let n=Wc[e]??e;for(let[r,a]of Object.entries(t))n=n.replace(`{${r}}`,String(a));return n}function ne(o,e,t=2){return e.toLocaleString("es",{maximumFractionDigits:t})}var Bc=["pool"];function Uc(){try{return localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function Kc(o){return!Bc.includes(o)||Uc()}var Ni="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",Gc={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function qi(o){let e=o?Gc[o]:void 0;return e?`${Ni}#${e}`:Ni}function L(o){return Kc(o)}var Wi={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Un(o){return Wi[o]}function Kn(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function pn(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Wi[o]}"/></svg>`}var Ke=(o,e)=>C(o,e),Bi=new Set;function Ui(o){Bi=o}var Yc={open:"closed",closed:"open",opening:"closing",closing:"opening"};function ve(o,e){var n,r;if(!e||Y(e))return Ke(o,"state_unavailable");let t=e.attributes;switch(O(e.entity_id)){case"light":return e.state!=="on"?Ke(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:Ke(o,"state_on");case"switch":case"fan":return Ke(o,e.state==="on"?"state_on":"state_off");case"cover":{let a=Bi.has(e.entity_id);return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${a?100-t.current_position:t.current_position} %`:Gn(o,a?Yc[e.state]??e.state:e.state)}case"climate":{let a=typeof t.current_temperature=="number"?`${ne(o,t.current_temperature,1)} ${o?Ce(o):"\xB0C"}`:null;return e.state==="off"?a?`${a} \xB7 ${Ke(o,"state_off")}`:Ke(o,"state_off"):a??Gn(o,e.state)}case"media":{let a=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",i=[t.app_name,t.media_title,t.source].find(s=>typeof s=="string"&&s);return a&&i?i:Gn(o,e.state)}case"lock":case"camera":return Gn(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?Ke(o,e.state==="on"?"state_open":"state_closed"):Ke(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let a=Number(e.state),i=t.unit_of_measurement??"",s=((r=(n=o==null?void 0:o.entities)==null?void 0:n[e.entity_id])==null?void 0:r.display_precision)??1;return Number.isFinite(a)?`${ne(o,a,s)}${i?` ${i}`:""}`:e.state}default:return""}}function Gn(o,e){let t=`state_${e}`,n=C(o,t);return n===t?e:n}function Ki(o,e){var n,r;let t=[];for(let a of e.floors)for(let i of a.placements){let s=O(i.entity_id),c=o.states[i.entity_id];if(!s||!c)continue;let d=a.rooms.find(u=>u.points.length>=3&&G([i.x,i.z],u.points))??null,l=d!=null&&d.area_id?(r=(n=o.areas)==null?void 0:n[d.area_id])==null?void 0:r.name:void 0;t.push({id:i.entity_id,floorId:a.id,roomId:(d==null?void 0:d.id)??null,x:i.x,z:i.z,y:i.y??At(s,a.height,i.mount??null),lamp:s==="light"?i.mount??"ceiling":null,model:s==="camera"?i.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:s==="camera"?Qc(o,i.entity_id):void 0,fov:i.fov??void 0,reach:i.reach??void 0,tilt:i.tilt??void 0,rotation:i.rotation??0,icon:i.icon?Kn(i.icon):pn(s),cone:s==="camera"&&i.cone===!1?!1:void 0,name:i.name||Q(o,i.entity_id,l),ownName:i.name||void 0,showName:!!i.show_name,text:ve(o,c),active:De(c),unavailable:Y(c),glow:s==="light"?rr(Be(c),i.glow_scale):null,show:i.marker??void 0,fixed:!!i.locked})}return t}function Gi(o,e){var n;let t=`${e} ${String(((n=o.states[e])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Qc(o,e){return Ge(o,e).some(t=>{var n;return((n=o.states[t])==null?void 0:n.state)==="on"})}function Ge(o,e){var n,r;let t=(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id;return t?Object.values(o.entities??{}).filter(a=>a.device_id===t&&a.entity_id.startsWith("binary_sensor.")).map(a=>a.entity_id).filter(a=>{var i;return["motion","occupancy","presence"].includes(String((i=o.states[a])==null?void 0:i.attributes.device_class))}):[]}function Yi(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function xe(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function or(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function rr(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}var Ae=(o,e)=>[o[0]-e[0],o[1]-e[1]],zt=(o,e)=>[o[0]+e[0],o[1]+e[1]],Ye=(o,e)=>[o[0]*e,o[1]*e],ar=(o,e)=>o[0]*e[0]+o[1]*e[1],Ct=(o,e)=>o[0]*e[1]-o[1]*e[0],hn=o=>Math.hypot(o[0],o[1]),Ft=o=>{let e=hn(o)||1;return[o[0]/e,o[1]/e]},Qi=o=>[-o[1],o[0]],Ji=o=>[o[1],-o[0]];function Rt(o,e,t=[]){let n=e.eps??.005,r=[],a=t.filter(g=>Math.hypot(g.b[0]-g.a[0],g.b[1]-g.a[1])>.05),i=[],s=g=>{for(let M=0;M<i.length;M++)if(Math.abs(i[M][0]-g[0])<=n&&Math.abs(i[M][1]-g[1])<=n)return M;return i.push([g[0],g[1]]),i.length-1},c=[];for(let g of o){let M=g.points;if(M.length<3||Math.abs(qe(M))<1e-6)continue;let T=qe(M)>0,x=M.map(s);for(let S=0;S<M.length;S++){let F=x[S],W=x[(S+1)%M.length];F!==W&&c.push(T?{u:F,v:W,room:g.id,edge:S,forward:!0}:{u:W,v:F,room:g.id,edge:S,forward:!1})}}let d=a.map(g=>[s(g.a),s(g.b)]),l=new Set;for(let g of o){let M=g.points;M.length<3||(g.wall_splits??[]).forEach((T,x)=>{if(!T||x>=M.length)return;let S=M[x],F=Ae(M[(x+1)%M.length],S),W=hn(F);for(let B of T)B>n&&B<W-n&&l.add(s(zt(S,Ye(F,B/W))))})}let u=[];for(let g of c){let M=i[g.u],T=i[g.v],x=Ae(T,M),S=hn(x),F=Ye(x,1/S),W=[];for(let j=0;j<i.length;j++){if(j===g.u||j===g.v)continue;let q=Ae(i[j],M),oe=ar(q,F);oe<=n||oe>=S-n||Math.abs(Ct(F,q))<=n&&W.push({t:oe,id:j})}W.sort((j,q)=>j.t-q.t);let B=[{t:0,id:g.u},...W,{t:S,id:g.v}];for(let j=0;j+1<B.length;j++){let q=B[j],oe=B[j+1],V=g.forward?q.t:S-oe.t,U=g.forward?oe.t:S-q.t;u.push({u:q.id,v:oe.id,room:g.room,edge:g.edge,t0:V,t1:U})}}let p=new Map;for(let g of u){let M=g.u<g.v?`${g.u}-${g.v}`:`${g.v}-${g.u}`,T=p.get(M);T||p.set(M,T=[]),T.push(g)}let h=g=>({room_id:g.room,edge:g.edge,t0:g.t0,t1:g.t1}),f=new Map;for(let g of u){let M=`${g.room}:${g.edge}`;f.set(M,[...f.get(M)??[],g.t0].sort((T,x)=>T-x))}let m=g=>{var x,S;let M=(S=(x=o.find(F=>F.id===g.room))==null?void 0:x.wall_heights)==null?void 0:S[g.edge];if(!Array.isArray(M))return M;let T=f.get(`${g.room}:${g.edge}`)??[];return M[T.indexOf(g.t0)]??null},b=g=>{let M=g.map(m).filter(x=>typeof x=="number"&&x>0);if(M.length)return Math.min(...M);let T=g.map(x=>{var S;return(S=o.find(F=>F.id===x.room))==null?void 0:S.ceiling_height});return T.every(x=>typeof x=="number"&&x>0)?Math.max(...T):void 0},_=g=>{let M=g.map(T=>{var x,S;return(S=(x=o.find(F=>F.id===T.room))==null?void 0:x.wall_thickness)==null?void 0:S[T.edge]}).filter(T=>typeof T=="number"&&T>0);return M.length?Math.max(...M):void 0},w=g=>g.some(M=>m(M)===0),v=[],$=[];for(let g of p.values()){let M=g[0],T=g.find(x=>x!==M&&x.u===M.v&&x.v===M.u&&x.room!==M.room);for(let x of g)x!==M&&x!==T&&x.room!==M.room&&r.push(`overlap:${M.room}:${x.room}`);if(w(T?[M,T]:[M])){T&&v.push([M.room,T.room]);continue}if(T){let x=_([M,T])??e.interior;$.push({a:M.u,b:M.v,left:x/2,right:x/2,exterior:!1,roomLeft:M.room,roomRight:T.room,sources:[h(M),h(T)],height:b([M,T])})}else $.push({a:M.u,b:M.v,left:0,right:_([M])??e.exterior,exterior:!0,roomLeft:M.room,roomRight:null,sources:[h(M)],height:b([M])})}let A=g=>Ft(Ae(i[g.b],i[g.a]));for(let g of $){if(g.exterior||g.free)continue;let M=new Set;for(let x of[g.a,g.b])for(let S of $)!S.exterior||S.free||S.a!==x&&S.b!==x||Math.abs(Ct(A(g),A(S)))>1e-6||(S.roomLeft===g.roomLeft?M.add("left"):S.roomLeft===g.roomRight&&M.add("right"));if(M.size!==1)continue;let T=g.left+g.right;M.has("left")?(g.left=0,g.right=T):(g.left=T,g.right=0)}a.forEach((g,M)=>{var j;let[T,x]=d[M];if(T===x)return;let S=[(g.a[0]+g.b[0])/2,(g.a[1]+g.b[1])/2],F=((j=o.find(q=>q.points.length>=3&&G(S,q.points)))==null?void 0:j.id)??null,W=(g.thickness??e.interior)/2,B=typeof g.height=="number"&&g.height>0?g.height:void 0;$.push({free:g.id,a:T,b:x,left:W,right:W,exterior:!1,roomLeft:F,roomRight:F,sources:[],height:B})}),$=Xc($,i,l);let P=ed($,i);return{walls:$.map((g,M)=>{let T=i[g.a],x=i[g.b],S=P.get(`${M}:a`),F=P.get(`${M}:b`),W=td([S.right,F.left,x,F.right,S.left,T],1e-6);return{id:Jc(T,x),a:[T[0],T[1]],b:[x[0],x[1]],left:g.left,right:g.right,exterior:g.exterior,roomLeft:g.roomLeft,roomRight:g.roomRight,sources:g.sources,footprint:W,...g.free?{free:g.free}:{},...g.height!==void 0?{height:g.height}:{}}}),warnings:[...new Set(r)],open:v}}function Jc(o,e){let t=a=>Math.round(a*100),[n,r]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Xi(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Xc(o,e,t=new Set){let n=o.slice(),r=!0;for(;r;){r=!1;let a=new Map;n.forEach((i,s)=>{for(let c of[i.a,i.b]){let d=a.get(c);d||a.set(c,d=[]),d.push(s)}});for(let[i,s]of a){if(s.length!==2||t.has(i))continue;let c=n[s[0]],d=n[s[1]];if(c.b!==i&&(c=Xi(c)),d.a!==i&&(d=Xi(d)),c.a===d.b)continue;let l=Ft(Ae(e[c.b],e[c.a])),u=Ft(Ae(e[d.b],e[d.a]));if(Math.abs(Ct(l,u))>1e-6||ar(l,u)<=0||c.free||d.free||c.height!==d.height||c.exterior!==d.exterior||c.roomLeft!==d.roomLeft||c.roomRight!==d.roomRight||Math.abs(c.left-d.left)>1e-9||Math.abs(c.right-d.right)>1e-9)continue;let p={...c,b:d.b,sources:Zc(c.sources,d.sources)},h=n.filter((f,m)=>m!==s[0]&&m!==s[1]);h.push(p),n.length=0,n.push(...h),r=!0;break}}return n}function Zc(o,e){let t=o.map(n=>({...n}));for(let n of e){let r=t.find(a=>a.room_id===n.room_id&&a.edge===n.edge&&(Math.abs(a.t1-n.t0)<1e-6||Math.abs(n.t1-a.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function ed(o,e){let t=new Map;o.forEach((r,a)=>{let i=Ft(Ae(e[r.b],e[r.a])),s=[[r.a,{key:`${a}:a`,d:i,left:r.left,right:r.right,angle:Math.atan2(i[1],i[0])}],[r.b,{key:`${a}:b`,d:Ye(i,-1),left:r.right,right:r.left,angle:Math.atan2(-i[1],-i[0])}]];for(let[c,d]of s){let l=t.get(c);l||t.set(c,l=[]),l.push(d)}});let n=new Map;for(let[r,a]of t){let i=e[r];a.sort((d,l)=>d.angle-l.angle);let s=d=>({left:zt(i,Ye(Qi(d.d),d.left)),right:zt(i,Ye(Ji(d.d),d.right))});for(let d of a)n.set(d.key,s(d));if(a.length<2)continue;let c=4*Math.max(...a.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<a.length;d++){let l=a[d],u=a[(d+1)%a.length],p=zt(i,Ye(Qi(l.d),l.left)),h=zt(i,Ye(Ji(u.d),u.right)),f=Ct(l.d,u.d);if(Math.abs(f)<1e-4)continue;let m=Ct(Ae(h,p),u.d)/f,b=zt(p,Ye(l.d,m));hn(Ae(b,i))>c||(n.get(l.key).left=b,n.get(u.key).right=b)}}return n}function td(o,e){let t=o.filter((r,a)=>hn(Ae(r,o[(a+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let a=t[(r+t.length-1)%t.length],i=t[r],s=t[(r+1)%t.length],c=Ae(i,a),d=Ae(s,i);if(Math.abs(Ct(Ft(c),Ft(d)))<1e-7&&ar(c,d)>0){t=t.filter((l,u)=>u!==r),n=!0;break}}}return t}var mn=Math.PI/180;function gn(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),r=Math.max(o.z0,o.z1);return o.axis==="x"?{u0:e,u1:t,w:r-n,at:(a,i)=>[a,o.flip?r-i:n+i]}:{u0:n,u1:r,w:t-e,at:(a,i)=>[o.flip?t-i:e+i,a]}}function Yn(o){let e=gn(o).w,t=o.eave_a,n=o.eave_b,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*mn),a=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*mn);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*r,y:c=>t+c*r};if(o.shape==="mansard"){let c=ts(e,t,n,r,a);return{vr:c.vr,rh:c.rh,y:c.y}}let i=r+a>1e-6?Math.min(e,Math.max(0,(n-t+e*a)/(r+a))):e/2,s=t+i*r;return{vr:i,rh:s,y:c=>c<=i?t+c*r:n+(e-c)*a}}var nd=.14;function Zi(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function es(o,e,t){let n=null,r=Math.max(0,o.settings.roof.overhang??0);for(let a of o.settings.roof.sections??[]){if(a.open)continue;let i=Math.min(a.x0,a.x1),s=Math.max(a.x0,a.x1),c=Math.min(a.z0,a.z1),d=Math.max(a.z0,a.z1);if(e<i-1e-6||e>s+1e-6||t<c-1e-6||t>d+1e-6||a.points&&a.points.length>=3&&!G([e,t],a.points))continue;let[l,u]=ad(a,e,t),p=a.shape==="flat"||a.shape==="parapet",h=Math.max(0,a.overhang??r),m=((p?null:rd(od(a,{u0:h,u1:h,a:h,b:h}),l,u))??Yn(a).y(u))-nd;n=n===null?m:Math.max(n,m)}return n}var fn=Math.tan(30*mn);function ts(o,e,t,n,r){let a=Math.min(o*.3,n>1e-6?2.4/n:o*.3),i=Math.min(o*.3,r>1e-6?2.4/r:o*.3),s=e+a*n,c=t+i*r,d=Math.min(o-i,Math.max(a,(c-s+fn*(o-i+a))/(2*fn))),l=s+(d-a)*fn;return{vla:a,vlb:i,yla:s,ylb:c,vr:d,rh:l,y:p=>p<=a?e+p*n:p<=d?s+(p-a)*fn:p<=o-i?c+(o-i-p)*fn:t+(o-p)*r}}function od(o,e){let t=gn(o),n=Yn(o),r=t.w,a=Math.max(0,e.a),i=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),c=t.u1+Math.max(0,e.u1),d=(w,v)=>[w,v,n.y(v)],l=d(s,-a),u=d(c,-a),p=d(c,r+i),h=d(s,r+i),f=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*mn),m=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*mn);if(o.shape==="pent"){let w=[l,u,p,h];return{faces:[w],rim:w,ridges:[[p,h]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(o.shape==="hip"||o.shape==="pyramid"){let w=o.shape==="pyramid"?(t.u1-t.u0)/2:Math.min((t.u1-t.u0)/2,Math.min(n.vr,r-n.vr)||r/2),v=[t.u0+w,n.vr,n.rh],$=[t.u1-w,n.vr,n.rh],A=o.shape==="pyramid"?[[l,u,v],[u,p,v],[p,h,v],[h,l,v]]:[[l,u,$,v],[v,$,p,h],[h,l,v],[u,p,$]],P=o.shape==="pyramid"?[[l,v],[h,v],[u,v],[p,v]]:[[v,$],[l,v],[h,v],[u,$],[p,$]];return{faces:A,rim:[l,u,p,h],ridges:P,gable:null}}if(o.shape==="halfhip"){let w=Math.min(n.y(0),n.y(r)),v=w+(n.rh-w)*.55,$=f>1e-6?Math.min(n.vr,(v-o.eave_a)/f):n.vr,A=m>1e-6?Math.max(n.vr,r-(v-o.eave_b)/m):n.vr,P=Math.min((t.u1-t.u0)/2-.1,(n.rh-v)/Math.max(.2,f)),I=[t.u0+P,n.vr,n.rh],g=[t.u1-P,n.vr,n.rh],M=[s,$,v],T=[s,A,v],x=[c,$,v],S=[c,A,v];return{faces:[[l,u,x,g,I,M],[I,g,S,p,h,T],[T,M,I],[x,S,g]],rim:[l,u,x,S,p,h,T,M],ridges:[[I,g],[M,I],[T,I],[x,g],[S,g]],gable:[[0,n.y(0)],[$,v],[A,v],[r,n.y(r)]]}}if(o.shape==="mansard"){let w=ts(r,o.eave_a,o.eave_b,f,m),v=[s,w.vla,w.yla],$=[c,w.vla,w.yla],A=[s,r-w.vlb,w.ylb],P=[c,r-w.vlb,w.ylb],I=[s,w.vr,w.rh],g=[c,w.vr,w.rh];return{faces:[[l,u,$,v],[v,$,g,I],[I,g,P,A],[A,P,p,h]],rim:[l,u,$,g,P,p,h,A,I,v],ridges:[[I,g],[v,$],[A,P]],gable:[[0,n.y(0)],[w.vla,w.yla],[w.vr,w.rh],[r-w.vlb,w.ylb],[r,n.y(r)]]}}let b=[s,n.vr,n.rh],_=[c,n.vr,n.rh];return{faces:[[l,u,_,b],[b,_,p,h]],rim:[l,u,_,p,h,b],ridges:[[b,_]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function rd(o,e,t){let n=null;for(let r of o.faces){if(!G([e,t],r.map(w=>[w[0],w[1]])))continue;let[a,i]=r,s=r.slice(2).find(w=>Math.abs((i[0]-a[0])*(w[1]-a[1])-(i[1]-a[1])*(w[0]-a[0]))>1e-9);if(!s)continue;let c=i[0]-a[0],d=i[2]-a[2],l=i[1]-a[1],u=s[0]-a[0],p=s[2]-a[2],h=s[1]-a[1],f=d*h-l*p,m=l*u-c*h,b=c*p-d*u;if(Math.abs(m)<1e-9)continue;let _=a[2]-(f*(e-a[0])+b*(t-a[1]))/m;n=n===null?_:Math.min(n,_)}return n}function ad(o,e,t){let n=Math.min(o.x0,o.x1),r=Math.max(o.x0,o.x1),a=Math.min(o.z0,o.z1),i=Math.max(o.z0,o.z1);return o.axis==="x"?[e,o.flip?i-t:t-a]:[t,o.flip?r-e:e-n]}function ns(o,e,t){let n=gn(e),r=o.floors.flatMap(d=>d.rooms.filter(l=>l.points.length>=3&&d.elevation+d.height>e.base+.05)),a=d=>d.some(l=>r.some(u=>G(l,u.points))),i=.35,s=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),c=[.15,.5,.85].map(d=>n.w*d);return{a:a(s.map(d=>n.at(d,-i)))?0:t,b:a(s.map(d=>n.at(d,n.w+i)))?0:t,u0:a(c.map(d=>n.at(n.u0-i,d)))?0:t,u1:a(c.map(d=>n.at(n.u1+i,d)))?0:t}}var Jn=Math.PI/180,id=1.13,sd=1.72,Xn=.025,lt=.07,os=.25;function _n(o,e){var n;let t=[];for(let r of o.floors){if(e&&r.id!==e)continue;let{walls:a}=Rt(r.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},r.walls??[]);for(let i of a){if(!i.exterior&&!i.free)continue;let s=i.b[0]-i.a[0],c=i.b[1]-i.a[1],d=Math.hypot(s,c);if(d<.5)continue;let l=c/d,u=-s/d,p=Math.min(r.height,i.height??r.height),h=((n=i.sources.find(b=>b.room_id===i.roomLeft))==null?void 0:n.edge)??null,f={floorId:r.id,room:i.roomLeft,edge:h,free:!!i.free},m=(b,_,w,v)=>t.push({key:b,section:null,side:"top",flat:!1,o:_,eu:w,es:[0,1,0],n:v,lu:d,ls:p,pitch:90,span:()=>[0,d],facing:[v[0],v[2]],wall:f});m(`wall:${r.id}:${i.id}`,[i.a[0]+l*i.right,r.elevation,i.a[1]+u*i.right],[s/d,0,c/d],[l,0,u]),i.free&&m(`wall:${r.id}:${i.id}:back`,[i.b[0]-l*i.left,r.elevation,i.b[1]-u*i.left],[-s/d,0,-c/d],[-l,0,-u])}}return t}var rs="ground";function ld(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function cd(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],a=ld(o),i=n[0]*e.u+r[0]*e.v,s=n[2]*e.u+r[2]*e.v,c=a?a.elevation+(e.base!=null?e.base:on(a,i,s)):e.base??0;return{key:rs,section:null,side:"top",flat:!0,o:[0,c,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function dt(o,e,t=Ht(o)){return e.face===rs?cd(o,e):e.face.startsWith("wall:")?_n(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function ir(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function Ht(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>dd(w,ns(o,w,w.overhang??e.overhang)));let t=ir(o);if(!t)return[];let n=t.rooms.flatMap(w=>w.points.map(v=>v[0])),r=t.rooms.flatMap(w=>w.points.map(v=>v[1])),a=o.settings.wall_exterior+e.overhang,i=Math.min(...n)-a,s=Math.max(...n)+a,c=Math.min(...r)-a,d=Math.max(...r)+a,l=t.elevation+t.height;if(e.type==="flat")return[as("main",null,i,c,s,d,l+os)];let u=s-i>=d-c,p=e.ridge==="short"?!u:u,h=(p?d-c:s-i)/2,f=h*Math.tan(e.pitch*Jn),m=(w,v,$)=>p?[w,l+$,(c+d)/2+v]:[(i+s)/2+v,l+$,w],[b,_]=p?[i,s]:[c,d];return[-1,1].map(w=>Qn(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",m(b,w*h,0),m(_,w*h,0),m(b,0,f),e.pitch,()=>[0,_-b]))}function dd(o,e){let t=gn(o),n=Yn(o),r=(m,b,_)=>{let[w,v]=t.at(m,b);return[w,_,v]},a=Math.max(0,e.a),i=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),c=t.u1+Math.max(0,e.u1),d=c-s;if(o.shape==="flat"||o.shape==="parapet"){let m=t.at(s,-a),b=t.at(c,t.w+i);return[as(o.id,o.id,Math.min(m[0],b[0]),Math.min(m[1],b[1]),Math.max(m[0],b[0]),Math.max(m[1],b[1]),o.eave_a+os)]}if(o.shape==="pent")return[Qn(`${o.id}:a`,o.id,"a",r(s,-a,n.y(-a)),r(c,-a,n.y(-a)),r(s,t.w+i,n.y(t.w+i)),o.pitch_a,()=>[0,d])];let l=o.shape==="hip"||o.shape==="pyramid",u=o.shape==="pyramid"?(t.u1-t.u0)/2:l?Math.min((t.u1-t.u0)/2,Math.min(n.vr,t.w-n.vr)||t.w/2):0,p=l?t.u0+u-s:0,h=l?c-(t.u1-u):0,f=[];if(n.vr>.3){let m=Math.hypot(n.vr+a,n.rh-n.y(-a));f.push(Qn(`${o.id}:a`,o.id,"a",r(s,-a,n.y(-a)),r(c,-a,n.y(-a)),r(s,n.vr,n.rh),o.pitch_a,b=>[p*(b/m),d-h*(b/m)]))}if(t.w-n.vr>.3){let m=Math.hypot(t.w+i-n.vr,n.rh-n.y(t.w+i));f.push(Qn(`${o.id}:b`,o.id,"b",r(c,t.w+i,n.y(t.w+i)),r(s,t.w+i,n.y(t.w+i)),r(c,n.vr,n.rh),o.pitch_b,b=>[h*(b/m),d-p*(b/m)]))}if(l){let m=n.y(-a),b=n.y(t.w+i),_=[[`${o.id}:c`,"c",r(s,t.w+i,b),r(s,-a,m),r(t.u0+u,n.vr,n.rh)],[`${o.id}:d`,"d",r(c,-a,m),r(c,t.w+i,b),r(t.u1-u,n.vr,n.rh)]];for(let[w,v,$,A,P]of _){let I=ud(w,o.id,v,$,A,P);I&&f.push(I)}}return f}function ud(o,e,t,n,r,a){let i=bn(ct(r,n));if(i<.3)return null;let s=Qe(ct(r,n)),c=ct(a,n),d=c[0]*s[0]+c[1]*s[1]+c[2]*s[2],l=[c[0]-s[0]*d,c[1]-s[1]*d,c[2]-s[2]*d],u=bn(l);if(u<.3)return null;let p=Qe(l),h=Qe(ls(s,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=Qe([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/Jn;return{key:o,section:e,side:t,flat:!1,o:n,eu:s,es:p,n:h,lu:i,ls:u,pitch:m,span:_=>{let w=Math.min(1,Math.max(0,_/u));return[d*w,i-(i-d)*w]},facing:[f[0],f[2]]}}function Qn(o,e,t,n,r,a,i,s){let c=Qe(ct(r,n)),d=Qe(ct(a,n)),l=Qe(ls(c,d));l[1]<0&&(l=[-l[0],-l[1],-l[2]]);let u=Qe([-d[0],0,-d[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:c,es:d,n:l,lu:bn(ct(r,n)),ls:bn(ct(a,n)),pitch:i,span:s,facing:[u[0],u[2]]}}function as(o,e,t,n,r,a,i){let s=r-t>=a-n,c=s?r-t:a-n,d=s?a-n:r-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,i,n],eu:s?[1,0,0]:[0,0,1],es:s?[0,0,1]:[1,0,0],n:[0,1,0],lu:c,ls:d,pitch:0,span:()=>[0,c],facing:s?[0,1]:[1,0]}}function sr(o){let e=o.module_w||id,t=o.module_h||sd;return o.portrait===!1?[t,e]:[e,t]}function is(o){var e;return(e=o.layout)!=null&&e.length?o.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function lr(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*Jn:o.wall?Math.min(90,Math.max(0,e.tilt??0))*Jn:0}function ut(o,e){let[t,n]=sr(e),r=is(e),a=Math.max(1,...r),s=(r.length-1)*ss(o,e)+n*Math.cos(lr(o,e));return[a*t+(a-1)*Xn,s]}function ss(o,e){let[,t]=sr(e),n=lr(o,e);return o.wall?t*Math.cos(n)+Xn:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Xn}function pd(o,e,t=!1){let[n,r]=sr(e),a=[],i=lr(o,e),s=r*Math.cos(i),c=ss(o,e),d=is(e),l=Math.max(1,...d),u=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(m,b,_)=>[o.o[0]+o.eu[0]*m+o.es[0]*b+o.n[0]*_,o.o[1]+o.eu[1]*m+o.es[1]*b+o.n[1]*_,o.o[2]+o.eu[2]*m+o.es[2]*b+o.n[2]*_],f=(m,b)=>{if(o.unbounded)return!0;if(b<-1e-6||b>o.ls+1e-6)return!1;let[_,w]=o.span(b);return m>=_-1e-6&&m<=w+1e-6};return d.forEach((m,b)=>{let _=e.align==="right"?l-m:e.align==="center"?(l-m)/2:0;for(let w=0;w<m;w++){let v=`${b}:${w}`,$=u.has(v);if($&&!t)continue;let A=e.u+(w+_)*(n+Xn),P=e.v+b*c,I=A+n,g=P+(o.flat||o.wall?s:r);if(p){if(!(f((A+I)/2,P)&&f((A+I)/2,g)))continue}else if(![[A,P],[I,P],[I,g],[A,g]].every(([W,B])=>f(W,B)))continue;if(o.wall&&i>.001){let W=lt+r*Math.sin(i),[B,j]=e.flip?[W,lt]:[lt,W],q=[h(A,P,B),h(I,P,B),h(I,g,j),h(A,g,j)],oe=e.flip?P:g,V=[A+.05,I-.05].map(U=>[h(U,oe,0),h(U,oe,W)]);a.push({corners:q,posts:V,cell:v,skipped:$});continue}if(!o.flat){a.push({corners:[h(A,P,lt),h(I,P,lt),h(I,g,lt),h(A,g,lt)],posts:[],cell:v,skipped:$});continue}let M=.15,T=M+r*Math.sin(i),[x,S]=e.flip?[g,P]:[P,g],F=[h(A,x,M),h(I,x,M),h(I,S,T),h(A,S,T)];a.push({corners:F,posts:[A+.05,I-.05].flatMap(W=>[[h(W,x,0),h(W,x,M)],[h(W,S,0),h(W,S,T)]]),cell:v,skipped:$})}}),a}function ct(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function bn(o){return Math.hypot(o[0],o[1],o[2])}function Qe(o){let e=bn(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function ls(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var hd=.78,fd=1.18;function md(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||hd,module_h:o.h||fd}}function gd(o,e){let t=pd(o,md(e))[0];if(!t)return null;let n=r=>[r[0]-o.n[0]*.05,r[1]-o.n[1]*.05,r[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function bd(o,e,t){let n=e?gd(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,a=(n[0][1]+n[2][1])/2,i=(n[0][2]+n[2][2])/2;for(let s of[...o.floors].sort((c,d)=>d.elevation-c.elevation)){if(s.elevation>a)continue;let c=s.rooms.find(d=>G([r,i],d.points));if(c)return{floor:s,roomId:c.id,corners:n}}return null}function cs(o,e){var r;let t=((r=o.settings.roof)==null?void 0:r.windows)??[];if(!t.length)return[];let n=new Map(Ht(o).map(a=>[a.key,a]));return t.filter(a=>{var i;return((i=bd(o,n.get(a.face),a))==null?void 0:i.roomId)===e})}function ds(o,e){let[t,n]=ut(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var Oe=we`
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
`,Je=we`
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
`;var _d=4,vd=3e3,yd=8,wd=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],jt=o=>y`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${Un(o)} />
  </svg>`,Zn={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},cr=o=>y`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,dr=class extends ge{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},readOnly:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},vd)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return C(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}get areaName(){var e,t,n;return(e=this.room)!=null&&e.area_id?(n=(t=this.hass.areas)==null?void 0:t[this.room.area_id])==null?void 0:n.name:void 0}name(e){return Q(this.hass,e,this.areaName)}nameButton(e){return y`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&xe(this,e)}>${this.name(e)}</button>`}askFor(e){var t;return!((t=this.confirmEntities)!=null&&t.has(e))||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let r=()=>{var a;this.readOnly||(a=this.confirmEntities)!=null&&a.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return y`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${Y(e)}
      @click=${r}
    ></button>`}render(){let e=this.room;if(!e||!this.hass)return k;let t=de(this.hass,e.area_id),n=this.memo,{shown:r,more:a}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?Hi(this.hass,this.floor,e,this.building?cs(this.building,e.id):[]):{shown:t,more:[]}},i=Jo(this.hass,a).map($=>$.primary),s=i.length,c=this._showAll?[...r,...i]:r,d=$=>c.filter(A=>$.includes(O(A))).map(A=>this.hass.states[A]),l=d(["light"]),u=d(["cover"]),p=d(["climate"]),h=d(["media"]),f=d(["switch","fan","lock"]),m=d(["sensor","binary"]),b=d(["camera"]);this.hasCameras=b.length>0;let _=d(["scene","script"]),w=this.facts(p),v=l.filter($=>$.state==="on");return y`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${w.length?y`<p class="fp3d-rp-facts">${w.join(" \xB7 ")}</p>`:k}
          ${this.readOnly?y`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:k}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?c.length?k:y`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:y`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${l.length?this.section("panel_lights",l.map($=>this.lightRow($)),y`${v.length<l.length?y`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:l.filter($=>!Y($)).map($=>$.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:k}${v.length?y`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:v.map($=>$.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:k}`):k}
        ${u.length?this.section("panel_covers",u.map($=>this.coverRow($)),u.length>1?y`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:u.filter($=>!Y($)).map($=>$.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:u.filter($=>!Y($)).map($=>$.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:k):k}
        ${p.length?this.section("panel_climate",p.map($=>this.climateRow($))):k}
        ${h.length?this.section("panel_media",h.map($=>this.mediaRow($))):k}
        ${f.length?this.section("panel_switches",f.map($=>this.switchRow($))):k}
        ${b.length?this.section("panel_cameras",b.map($=>this.cameraTile($))):k}
        ${m.length?this.section("panel_sensors",m.map($=>this.sensorRow($))):k}
        ${_.length?this.section("panel_scenes",[y`<div class="fp3d-rp-scenes">
                  ${_.map($=>y`<button
                      class="fp3d-btn"
                      ?disabled=${Y($)}
                      @click=${()=>this.call(O($.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:$.entity_id})}
                    >
                      ${this.name($.entity_id)}
                    </button>`)}
                </div>`]):k}
        ${s?y`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:s})}
            </button>`:k}
      </div>
    </section>`}facts(e){var c;let t=[],n=this.room,r=(d,l)=>{var f;let u=We(this.hass,this.floor,n,d);if(u===null)return null;if(d==="temperature")return`${ne(this.hass,Pt(this.hass,u),1)} ${Ce(this.hass)}`;let p=Ko(this.hass,this.floor,n,d)[0],h=((f=this.hass.states[p])==null?void 0:f.attributes.unit_of_measurement)??l;return`${ne(this.hass,u,1)} ${h}`},a=e.find(d=>typeof d.attributes.current_temperature=="number"),i=r("temperature","\xB0C");i?t.push(i):a&&((c=n.climate)==null?void 0:c.temperature)!=="none"&&t.push(`${ne(this.hass,a.attributes.current_temperature,1)} ${Ce(this.hass)}`);let s=r("humidity","%");return s&&t.push(s),t}section(e,t,n=k){return y`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",r=t.supported_color_modes??[],a=r.some(p=>p!=="onoff"),i=r.includes("color_temp"),s=r.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),c=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,d=t.min_color_temp_kelvin??2200,l=t.max_color_temp_kelvin??6500,u=e.entity_id;return y`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${jt("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&a?y`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(c)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(p.target.value)})}
          /></label>`:k}
      ${n&&i?y`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${l}
              step="50"
              .value=${String(t.color_temp_kelvin??d)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:k}
      ${n&&s?y`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${wd.map(p=>y`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:k}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,r=e.entity_id,a=Y(e);return y`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${jt("cover")}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${a} @click=${()=>this.askFor(r)&&this.call("cover","open_cover",{entity_id:r})}>${this.t("cover_open")}</button>
        ${n&yd?y`<button class="fp3d-btn fp3d-rp-small" ?disabled=${a} @click=${()=>this.call("cover","stop_cover",{entity_id:r})}>${this.t("cover_stop")}</button>`:k}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${a} @click=${()=>this.askFor(r)&&this.call("cover","close_cover",{entity_id:r})}>${this.t("cover_close")}</button>
      </div>
      ${n&_d&&typeof t.current_position=="number"?y`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${a}
              .value=${String(t.current_position)}
              @change=${i=>this.call("cover","set_cover_position",{entity_id:r,position:Number(i.target.value)})}
          /></label>`:k}
      ${n&128&&typeof t.current_tilt_position=="number"?y`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${a}
              .value=${String(t.current_tilt_position)}
              @change=${i=>this.call("cover","set_cover_tilt_position",{entity_id:r,tilt_position:Number(i.target.value)})}
          /></label>`:n&48?y`<div class="fp3d-rp-buttons">
              ${n&16?y`<button class="fp3d-btn fp3d-rp-small" ?disabled=${a} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_open")}</button>`:k}
              ${n&32?y`<button class="fp3d-btn fp3d-rp-small" ?disabled=${a} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_close")}</button>`:k}
            </div>`:k}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,r=typeof t.temperature=="number"?t.temperature:null,a=t.target_temp_step??.5,i=t.min_temp??5,s=t.max_temp??30,c=t.hvac_modes??[],d=l=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(s,Math.max(i,Math.round(l/a)*a))});return y`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${jt("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${r!==null?y`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(r-a)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${ne(this.hass,r,1)} ${Ce(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(r+a)}>+</button>
          </div>`:k}
      ${c.length>1?y`<div class="fp3d-rp-chips">
            ${c.map(l=>y`<button
                class="fp3d-chip"
                aria-pressed=${e.state===l}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:l})}
              >
                ${this.stateLabel(l)}
              </button>`)}
          </div>`:k}
    </div>`}stateOf(e,t=ve(this.hass,e)){var r,a;if((a=(r=this.room)==null?void 0:r.no_state)!=null&&a.includes(e.entity_id))return"";let n=O(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,r=Y(e)||e.state==="off",a=[t.media_title,t.media_artist].filter(i=>typeof i=="string"&&i).join(" \xB7 ");return y`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${jt("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${a?y`<p class="fp3d-rp-media fp3d-rp-wide">${a}</p>`:k}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${cr(Zn.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${Y(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${cr(e.state==="playing"?Zn.pause:Zn.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${cr(Zn.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?y`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${i=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(i.target.value)/100})}
          /></label>`:k}
    </div>`}switchRow(e){let t=e.entity_id,n=O(t),r=t.slice(0,t.indexOf(".")),a=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",i=()=>n==="lock"?this.call("lock",a?"lock":"unlock",{entity_id:t}):this.call(r,"toggle",{entity_id:t});return y`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${a?"fp3d-rp-on":""}">${jt(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,a,i)}
    </div>`}cameraTile(e){var a;let t=e.attributes.entity_picture,n=t&&!Y(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=(a=this.floor)==null?void 0:a.placements.some(i=>i.entity_id===e.entity_id);return y`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&xe(this,e.entity_id)}>
        ${n?y`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:y`<span class="fp3d-rp-note">${ve(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${r?y`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${L("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:k}
    </div>`}sensorRow(e){let t=O(e.entity_id),n=t==="binary"&&e.state==="on";return y`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${jt(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Oe,Je,we`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",dr);var xd={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Ot(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function ur(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let a=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return a<=.1?0:Math.min(1,.3+a/10)}function us(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let r=xd[n.state];if(!r)return null;let a=n.attributes,i=r.cloud??0;typeof a.cloud_coverage=="number"&&(i=Math.min(1,Math.max(0,a.cloud_coverage/100)));let s=r.wind??0;if(typeof a.wind_speed=="number"){let d=a.wind_speed_unit==="m/s"?a.wind_speed*3.6:a.wind_speed_unit==="mph"?a.wind_speed*1.609:a.wind_speed;s=Math.max(s,Math.min(1,d/60))}let c=ur(o,t);return c!==null&&c>0&&(i=Math.max(i,.85)),{entity:n.entity_id,condition:n.state,rain:c??r.rain??0,snow:r.snow??0,fog:r.fog??0,cloud:i,wind:s,lightning:!!r.lightning}}function ps(o,e){let t=new Set(e??Za);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var kd=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function hs(o,e){let[t,n,r,a]=o==="ph"?[7,7.4,6.8,7.8]:o==="orp"?[650,800,600,850]:[.3,1.5,.1,3];return e>=t&&e<=n?"ok":e>=r&&e<=a?"warn":"bad"}function to(o,e){let t=e??{},n=Object.keys(o.states),r=u=>{var p;return`${u} ${((p=o.states[u])==null?void 0:p.attributes.friendly_name)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},a=u=>{var p;return String(((p=o.states[u])==null?void 0:p.attributes.device_class)??"")},i=u=>{var p;return String(((p=o.states[u])==null?void 0:p.attributes.unit_of_measurement)??"")},s=n.filter(u=>kd.test(r(u))),c=(u,p)=>u.find(p)??null,d=(u,p)=>{let h=t[u];return h==="none"?null:h??p()},l=u=>u.split(".")[0];return{temperature:d("temperature",()=>c(s,u=>l(u)==="sensor"&&(a(u)==="temperature"||/°[CF]/.test(i(u)))&&/(wasser|water|eau|agua|acqua)/.test(r(u)))??c(s,u=>l(u)==="sensor"&&(a(u)==="temperature"||/°[CF]/.test(i(u))))),heater:d("heater",()=>c(s,u=>l(u)==="climate"||l(u)==="water_heater")??c(s,u=>/^(switch|input_boolean)$/.test(l(u))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(r(u)))),pump:d("pump",()=>c(s,u=>/^(switch|fan|input_boolean)$/.test(l(u))&&/(pump|pumpe|filter|pompe|bomba)/.test(r(u)))??c(s,u=>l(u)==="binary_sensor"&&/(pump|pumpe|filter)/.test(r(u)))),light:d("light",()=>c(s,u=>l(u)==="light")),ph:d("ph",()=>{let u=p=>l(p)==="sensor"&&(a(p)==="ph"||i(p).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(r(p)));return c(s,u)??c(n,u)}),chlorine:d("chlorine",()=>c(s,p=>l(p)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(r(p))||i(p)==="mV"))??c(n,p=>l(p)==="sensor"&&/(orp|redox|chlor)/.test(r(p)))),cover:d("cover",()=>c(s,u=>l(u)==="cover"))}}function eo(o){if(!o||Y(o))return null;let e=Number(o.state);return o.state!==""&&Number.isFinite(e)?e:null}function Vt(o,e){let t={...o??{}},n=r=>{for(let a of e)for(let i of a.furniture)if(i.type===r&&i.entity&&i.entity!=="none")return i.entity};return t.pump||(t.pump=n("pool_pump")),t.heater||(t.heater=n("pool_heat_pump")),t}function pt(o,e){var $,A;let t=to(o,e),n=P=>P?o.states[P]:void 0,r=n(t.heater),a=n(t.temperature),i=eo(a),s=String((a==null?void 0:a.attributes.unit_of_measurement)??"");i===null&&r&&typeof r.attributes.current_temperature=="number"&&(i=r.attributes.current_temperature),s||(s=String(((A=($=o.config)==null?void 0:$.unit_system)==null?void 0:A.temperature)??"\xB0C"));let c=null;if(r&&t.heater&&!Y(r)){let P=r.attributes,I=t.heater.startsWith("climate.")?"climate":t.heater.startsWith("water_heater.")?"water_heater":"switch",g=I==="switch"?r.state==="on":r.state!=="off",M=String(P.hvac_action??""),T=typeof P.temperature=="number"?P.temperature:null,x=I==="switch"?g:M?M==="heating":g&&T!==null&&i!==null&&i<T-.2;c={id:t.heater,kind:I,on:g,heating:x,target:T,step:typeof P.target_temp_step=="number"?P.target_temp_step:.5,min:typeof P.min_temp=="number"?P.min_temp:10,max:typeof P.max_temp=="number"?P.max_temp:40}}let d=null,l=n(t.pump);if(l&&t.pump&&!Y(l)){let P=t.pump.startsWith("sensor.")?eo(l):null,I=String(l.attributes.unit_of_measurement??"")==="kW",g=P===null?null:I?P*1e3:P;d={id:t.pump,on:g!==null?g>20:l.state==="on",watts:g,switchable:/^(switch|fan|input_boolean)\./.test(t.pump)}}let u=null,p=n(t.light);if(p&&t.light&&!Y(p)){let P=t.light.startsWith("light.")?Be(p):p.state==="on"?{color:[.3,.75,1],level:1}:null;u={id:t.light,on:!!P,color:(P==null?void 0:P.color)??[.3,.75,1],level:(P==null?void 0:P.level)??0}}let h=eo(n(t.ph)),f=n(t.chlorine),m=eo(f),b=String((f==null?void 0:f.attributes.unit_of_measurement)??""),_=b==="mV"||m!==null&&m>50,w=null,v=n(t.cover);if(v&&t.cover&&!Y(v)){let P=v.attributes.current_position,I=typeof P=="number"?1-Math.max(0,Math.min(100,P))/100:v.state==="closed"?1:v.state==="open"?0:.5;w={id:t.cover,closed:I,moving:v.state==="opening"||v.state==="closing"}}return{entities:t,temp:i,unit:s||"\xB0C",heater:c,pump:d,light:u,ph:h===null?null:{value:h,range:hs("ph",h)},chlorine:m===null?null:{value:m,unit:_?"mV":b||"mg/l",orp:_,range:hs(_?"orp":"chlorine",m)},cover:w}}function ht(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}function fs(o,e){return ht(e).flatMap(({area:t})=>Object.values(to(o,t.pool)).filter(n=>!!n))}function ms(o){var n;if((n=o.light)!=null&&n.on)return{color:o.light.color,level:.35+.65*o.light.level};if(o.temp===null)return{color:[.1,.45,.8],level:.18};let e=o.unit.includes("F")?(o.temp-32)*5/9:o.temp,t=Math.max(0,Math.min(1,(e-14)/16));return{color:[.08+.1*t,.35+.45*t,.85-.1*t],level:.16+.12*t}}var $d=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),Md=new Set(["power","plug","connectivity","running"]);function no(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return Md.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return $d.has(n)||n.startsWith("ob ")}function _s(o){let e=fe(o);if(!e||e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var ce=["#3a3f47","#3a3f47"],ft=["#23262b","#23262b"],Fe=["#5a3b25","#5a3b25"],ae=["#1f4fa8","#1f4fa8"],Xe=["#e3b616","#e3b616"],J=["#2f7d3b","#2f7d3b"],gs={default:{rest:ce,bio:Fe,paper:ae,plastic:Xe,glass:J,garden:J,recycling:Xe,other:ce},DE:{rest:ft,bio:Fe,paper:ae,plastic:Xe,glass:J,garden:J,recycling:Xe},AT:{rest:ce,bio:Fe,paper:[ce[0],"#c0262d"],plastic:Xe,glass:J,garden:J},CH:{rest:["#d8d8d8","#d8d8d8"],bio:J,paper:ae,plastic:ce,glass:J,garden:J},NL:{rest:ce,bio:J,paper:ae,plastic:["#3a3f47","#e57a1f"],glass:J,garden:J},BE:{rest:ce,bio:J,paper:ae,plastic:ae,glass:J,garden:J},GB:{rest:ft,bio:["#3a3f47","#5a3b25"],paper:ae,plastic:ae,glass:ft,garden:Fe,recycling:ae},US:{rest:ft,bio:J,paper:ae,plastic:ae,glass:ae,garden:J,recycling:ae},CA:{rest:ft,bio:J,paper:ae,plastic:ae,glass:ae,garden:J,recycling:ae},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:ce,bio:Fe,paper:[ce[0],"#e3b616"],plastic:[ce[0],"#e3b616"],recycling:[ce[0],"#e3b616"],glass:J,garden:J},IT:{rest:ce,bio:Fe,paper:ae,plastic:Xe,glass:J,garden:J},ES:{rest:ce,bio:Fe,paper:ae,plastic:Xe,glass:J,garden:J},PT:{rest:ce,bio:Fe,paper:ae,plastic:Xe,glass:J,garden:J},DK:{rest:ft,bio:J,paper:ae,plastic:ce,glass:J,garden:J},SE:{rest:ft,bio:Fe,paper:ae,plastic:ce,glass:J,garden:J},NO:{rest:ce,bio:Fe,paper:ae,plastic:ce,glass:J,garden:J},FI:{rest:ce,bio:Fe,paper:ae,plastic:ce,glass:J,garden:J}},vs="DE";function ys(o){vs=o}function ws(o){var n;let e=(n=o==null?void 0:o.config)==null?void 0:n.country;if(e)return e.toUpperCase();let t=((o==null?void 0:o.language)??"").split("-")[1];return t?t.toUpperCase():"DE"}function Sd(o,e){var t;return((t=gs[e])==null?void 0:t[o])??gs.default[o]??ce}function xs(o,e=vs){let t=Sd(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var Ed={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function hr(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(r=>r.trim()&&n.includes(r.trim())):e==="other"?!1:Ed[e].some(r=>n.includes(r))}function fr(o){let e=typeof o=="string"?o:(o==null?void 0:o.date)??(o==null?void 0:o.dateTime);if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Pd(o){return o.map(e=>({day:fr(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function ks(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function mr(o,e,t=new Date,n=10){let r=new Map,a=o.callApi;if(!a)return r;let i=new Date(t.getFullYear(),t.getMonth(),t.getDate()),s=new Date(i.getTime()+n*864e5);return await Promise.all(e.map(async c=>{try{let d=await a.call(o,"GET",`calendars/${c}?start=${encodeURIComponent(i.toISOString())}&end=${encodeURIComponent(s.toISOString())}`);r.set(c,Pd(Array.isArray(d)?d:[]))}catch{}})),r}var vn=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),oo=(o,e)=>Math.round((vn(e).getTime()-vn(o).getTime())/864e5);function pr(o,e,t={}){let n=t.from??14,r=t.until??12,a=e.getHours()+e.getMinutes()/60;return o===1&&a>=n||o===0&&a<r}function $s(o,e,t,n=new Date,r=3){let a=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!a)return[];if(a.startsWith("calendar.")){let s=vn(n);return(t.get(a)??[]).filter(c=>c.day>=s&&hr(c.summary,o.bin_kind??"rest",o.bin_match)).slice(0,r)}let i=gr(o,e,t,n);return i?[{day:i.day,summary:i.summary}]:[]}function gr(o,e,t,n=new Date,r={}){let a=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!a)return null;let i=vn(n);if(a.startsWith("calendar.")){let l=(t.get(a)??[]).find(p=>p.day>=i&&hr(p.summary,o.bin_kind??"rest",o.bin_match));if(!l)return null;let u=oo(i,l.day);if(u===0&&n.getHours()+n.getMinutes()/60>=(r.until??12)){let p=(t.get(a)??[]).find(h=>h.day>i&&hr(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:oo(i,p.day),day:p.day,summary:p.summary,glow:pr(oo(i,p.day),n,r)}}return{days:u,day:l.day,summary:l.summary,glow:pr(u,n,r)}}let s=e.states[a];if(!s)return null;let c=Ad(s,n);if(c===null||c<0)return null;let d=new Date(i.getTime()+c*864e5);return{days:c,day:d,summary:String(s.attributes.friendly_name??""),glow:pr(c,n,r)}}function Ad(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let r=fr(n);if(r)return oo(e,r);let a=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(a))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(a))return 1;let i=/(\d+)/.exec(a);return i?Number(i[1]):null}var Id=new Set(["on","open","true","detected","home"]);function bs(o){let e=o!=null&&o.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function Ms(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let r=e.states[n];if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let a=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!a){let c=Number(r.state);return Id.has(r.state.toLowerCase())||Number.isFinite(c)&&c>0}let i=bs(r),s=bs(e.states[a]);return i===null||t-i>7*864e5?!1:s===null||i>s+1e3}function Ss(o){return o.type==="waste_bin"?[o.bin_source??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:zd(o)}var Es=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function Ps(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let a=n.attributes,i=String(a.problem??"").toLowerCase();return String(a.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&i.includes("moisture")&&!i.includes("high")}let r=Es(n);return r!==null&&r<(o.moisture_min??20)}function As(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let i=Number(t),s=n==="s"?i/60:n==="h"?i*60:i;return Math.max(0,Math.round(s))}let r=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(r)return Number(r[1])*60+Number(r[2])+Math.round(Number(r[3]??0)/60);let a=Date.parse(t);return Number.isFinite(a)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((a-e)/6e4)):null}var Td=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function br(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return Td.has(e)}function Is(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function Ts(o,e,t=new Date){let n=typeof o.service=="string"&&o.service!=="none"?o.service:null,r=n?e.states[n]:void 0;if(!n||!r||r.state==="unavailable"||r.state==="unknown")return!1;if(n.startsWith("binary_sensor.")||n.startsWith("input_boolean."))return r.state==="on";let a=Es(r);if(a!==null)return a<=(o.service_min??10);let i=fr(r.state);return!!i&&i.getTime()<=vn(t).getTime()}var Ze=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),zs=o=>!!o&&(o.state==="on"||o.state==="open");function ao(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let r of Ze(o)){let a=e.states[r];if(zs(a)&&(a!=null&&a.last_changed)&&t-Date.parse(a.last_changed)>=n)return r}return null}function Cs(o,e,t=Date.now()){let n=null;for(let r of o)if(!(r.type!=="fridge"&&r.type!=="fridge_smart"))for(let a of Ze(r)){let i=e.states[a];if(!zs(i)||!(i!=null&&i.last_changed))continue;let s=Date.parse(i.last_changed)+(r.door_alarm??2)*6e4-t;s>0&&(n===null||s<n)&&(n=s)}return n}var ro=class{running=new Map;ended=new Map;update(e,t,n,r=Date.now()){let a=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;a===!0&&this.ended.set(e,r);let i=this.ended.get(e);return i===void 0?!1:r-i>12*36e5||n(i)?(this.ended.delete(e),!1):!0}};function zd(o){return[o.moisture??null,o.remaining??null,o.service??null]}var js="proxmoxve";function Cd(o){let e=new Map;for(let t of Object.values(o.entities??{})){if(t.platform!==js||!t.device_id||!t.translation_key)continue;let n=t.entity_id.slice(0,t.entity_id.indexOf("."));if(n!=="sensor"&&n!=="binary_sensor")continue;let r=e.get(t.device_id);r||e.set(t.device_id,r=new Map);let a=`${n==="binary_sensor"?"b:":""}${t.translation_key}`;r.has(a)?r.set(`${a}#${t.entity_id}`,t.entity_id):r.set(a,t.entity_id)}return e}function so(o){return!!o&&o.state!=="unavailable"&&o.state!=="unknown"}function Re(o,e){let t=e?o.states[e]:void 0;if(!so(t))return null;let n=Number(t.state);return Number.isFinite(n)?n:null}function io(o,e){var n;let t=(n=o.devices)==null?void 0:n[e];return(t==null?void 0:t.name_by_user)||(t==null?void 0:t.name)||e}function _r(o){let e=/^(?:qemu|lxc|vm)\s+(.*?)\s*\((\d+)\)\s*$/i.exec(o.trim());return e?{name:e[1],vmid:Number(e[2])}:{name:o.trim(),vmid:null}}var Fs=new WeakMap;function Os(o){let e=o==null?void 0:o.entities;if(!e)return!1;let t=Fs.get(e);return t===void 0&&Fs.set(e,t=Object.values(e).some(n=>n.platform===js)),t}function yn(o){var r,a,i;let e=[],t=[],n=[];for(let[s,c]of Cd(o)){let d=l=>c.get(l);if(d("node_status")||d("qemu_on")||d("lxc_on")){let l=d("node_status")??d("b:status"),u=o.states[l],p=l===d("node_status")?(u==null?void 0:u.state)==="online":(u==null?void 0:u.state)==="on";e.push({deviceId:s,name:io(o,s).replace(/^node\s+/i,""),online:p,cpu:Re(o,d("cpu_used")),memory:Re(o,d("memory_used_perc")),disk:Re(o,d("disk_used_perc")),load:Re(o,d("load_1m")),vmsOn:Re(o,d("qemu_on")),lxcOn:Re(o,d("lxc_on")),updates:Re(o,d("updates_total")),failedTasks:Re(o,d("failed_tasks_count")),entity:l})}else if(d("cpu_used")&&(d("b:status")||d("status_raw"))){let l=d("b:status")??d("status_raw"),u=o.states[l],p=l===d("b:status")?(u==null?void 0:u.state)==="on":(u==null?void 0:u.state)==="running",h=((a=(r=o.devices)==null?void 0:r[s])==null?void 0:a.model)??"",f=_r(io(o,s)),m=/lxc/i.test(h)||/^lxc\b/i.test(io(o,s))?"lxc":"vm",b=d("memory_used")?o.states[d("memory_used")]:void 0,_=d("uptime")?o.states[d("uptime")]:void 0,w=d("ip_address")?o.states[d("ip_address")]:void 0;t.push({deviceId:s,name:f.name,vmid:f.vmid,kind:m,running:p,cpu:p?Re(o,d("cpu_used")):null,memory:p?Re(o,d("memory_used_perc")):null,memoryUsed:p&&so(b)?`${Number(b.state).toFixed(1)} ${b.attributes.unit_of_measurement??""}`.trim():null,disk:Re(o,d("disk_used_perc")),ip:so(w)?w.state:null,since:p&&so(_)?_.state:null,problem:((i=o.states[d("b:health")??""])==null?void 0:i.state)==="on",entity:l})}else{let l=[...c].filter(([u])=>u==="b:health"||u.startsWith("b:health#")).map(([,u])=>u);l.length&&[...c.keys()].some(u=>u.startsWith("disk_size"))&&n.push({deviceId:s,name:io(o,s),health:l})}}return t.sort((s,c)=>(s.vmid??1e9)-(c.vmid??1e9)||s.name.localeCompare(c.name)),{nodes:e,instances:t,disks:n}}function Vs(o){return[...o.nodes.map(e=>e.entity),...o.instances.map(e=>e.entity),...o.disks.flatMap(e=>e.health)]}var Rs=new Set;function Ls(o){let e=[];for(let t of o.instances)t.running?Rs.add(t.deviceId):Rs.has(t.deviceId)&&e.push(t);return e}var Hs=new Set;function Ds(o,e){var n;let t=[];for(let r of e.disks)for(let a of r.health){let i=(n=o.states[a])==null?void 0:n.state;i==="off"?Hs.add(a):i==="on"&&Hs.has(a)&&t.push({disk:r,entity:a})}return t}function Ns(o,e=Date.now()){let t=Math.max(0,(e-Date.parse(o))/1e3);if(!Number.isFinite(t))return"\u2013";let n=Math.floor(t/86400),r=Math.floor(t%86400/3600),a=Math.floor(t%3600/60);return n?`${n} d ${r} h`:r?`${r} h ${a} min`:`${a} min`}var Fd=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),qs={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function vr(o,e,t){let n=[];for(let h of e.floors)for(let f of h.rooms){let m=de(o,f.area_id).filter(b=>{var _;return b.startsWith("binary_sensor.")&&!!qs[String((_=o.states[b])==null?void 0:_.attributes.device_class)]});m.length&&n.push({floorId:h.id,roomId:f.id,sensors:m})}let r=Object.keys(o.states),a=e.settings.rain_warning===!1?null:Ot(o,t??e.settings.weather_entity),i=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,s=L("pool")?ht(e.floors).map(({floor:h,area:f})=>({floorId:h.id,areaId:f.id,ids:Object.values(to(o,f.pool)).filter(m=>!!m)})):[],c=L("household")?e.floors.flatMap(h=>h.furniture.filter(f=>(f.type==="fridge"||f.type==="fridge_smart")&&Ze(f).length).map(f=>{var m;return{floorId:h.id,roomId:((m=h.rooms.find(b=>b.points.length>=3&&G([f.x,f.z],b.points)))==null?void 0:m.id)??null,furnitureId:f.id,ids:Ze(f)}})):[],d=e.settings.rain_warning===!1?null:e.settings.rain_entity,l=d&&o.states[d]?d:null,u=Vs(yn(o)),p=u.length?{ids:u,...Rd(e)}:null;return{rooms:n,alarms:r.filter(h=>h.startsWith("alarm_control_panel.")),weather:a,outage:i,pools:s,rain:l,fridges:c,proxmox:p}}function Rd(o){for(let e of o.floors){let t=e.furniture.find(r=>r.type.endsWith(":server_rack")),n=t?e.rooms.find(r=>r.points.length>=3&&G([t.x,t.z],r.points)):void 0;if(t)return{roomId:(n==null?void 0:n.id)??null,floorId:e.id}}return{roomId:null,floorId:null}}function yr(o){var e;return[...o.rooms.flatMap(t=>t.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.pools??[]).flatMap(t=>t.ids),...(o.fridges??[]).flatMap(t=>t.ids),...((e=o.proxmox)==null?void 0:e.ids)??[]]}function Ws(o,e,t,n){var s,c,d,l,u,p,h,f;let r=[];for(let m of t.rooms)for(let b of m.sensors){let _=o.states[b];(_==null?void 0:_.state)==="on"&&r.push({kind:qs[String(_.attributes.device_class)],entity:b,roomId:m.roomId,floorId:m.floorId})}let a=t.rain?ur(o,t.rain):null;if(a!==null?a>0:!!t.weather&&Fd.has(((s=o.states[t.weather])==null?void 0:s.state)??""))for(let m of e.floors)for(let b of m.openings){if(b.type!=="window"||b.rain_ignore)continue;let _=n.get(b.id);if(!_)continue;let w=Ue(o,_,"window");w.open<.5&&w.tilt<.5&&w.open2<.5&&w.tilt2<.5||r.push({kind:"window_rain",entity:_.contact??_.tilt??_.contact2??b.id,roomId:b.room_id,floorId:m.id})}t.outage&&no(o.states[t.outage])&&r.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null});for(let m of t.pools??[]){let b=(d=(c=e.floors.find(v=>v.id===m.floorId))==null?void 0:c.outdoor)==null?void 0:d.find(v=>v.id===m.areaId);if(!b)continue;let _=pt(o,Vt(b.pool,e.floors));((l=_.ph)==null?void 0:l.range)==="bad"&&_.entities.ph&&r.push({kind:"pool_ph",entity:_.entities.ph,roomId:null,floorId:m.floorId}),((u=_.chlorine)==null?void 0:u.range)==="bad"&&_.entities.chlorine&&r.push({kind:"pool_chlorine",entity:_.entities.chlorine,roomId:null,floorId:m.floorId});let w=_.temp===null?null:_.unit.includes("F")?(_.temp-32)*5/9:_.temp;w!==null&&w<=3&&!((p=_.pump)!=null&&p.on)&&r.push({kind:"pool_frost",entity:_.entities.temperature??_.entities.heater??m.areaId,roomId:null,floorId:m.floorId})}for(let m of t.fridges??[]){let b=(h=e.floors.find(w=>w.id===m.floorId))==null?void 0:h.furniture.find(w=>w.id===m.furnitureId),_=b?ao(b,o):null;_&&r.push({kind:"fridge_door",entity:_,roomId:m.roomId,floorId:m.floorId})}if(t.proxmox){let{roomId:m,floorId:b}=t.proxmox,_=yn(o);for(let w of _.nodes)w.online||r.push({kind:"pve_node_down",entity:w.entity,roomId:m,floorId:b});for(let w of Ds(o,_))r.push({kind:"pve_disk",entity:w.entity,roomId:m,floorId:b});for(let w of Ls(_))r.push({kind:"pve_stopped",entity:w.entity,roomId:m,floorId:b})}for(let m of t.alarms){let b=(f=o.states[m])==null?void 0:f.state;b==="triggered"?r.push({kind:"alarm",entity:m,roomId:null,floorId:null}):b==="pending"&&r.push({kind:"alarm_pending",entity:m,roomId:null,floorId:null})}return r}function Bs(o){switch(o){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"pool_ph":case"pool_chlorine":return[1,.62,.2];case"pool_frost":return[.55,.8,1];case"fridge_door":return[.45,.85,1];case"pve_stopped":return[1,.62,.2];default:return[1,.2,.25]}}function wr(o,e,t){let n=t.roomId?e.floors.flatMap(s=>s.rooms).find(s=>s.id===t.roomId):null,r=o==null?void 0:o.states[t.entity],a=t.kind.startsWith("pool_")&&r?`${r.state}${r.attributes.unit_of_measurement?` ${r.attributes.unit_of_measurement}`:""}`:t.kind.startsWith("pve_")&&o?Hd(o,t):o?Q(o,t.entity):t.entity,i=C(o,`alert_${t.kind}`,{name:a});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${C(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${i}`:i}function Hd(o,e){var a,i,s;let t=(i=(a=o.entities)==null?void 0:a[e.entity])==null?void 0:i.device_id,n=t?(s=o.devices)==null?void 0:s[t]:void 0,r=(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||Q(o,e.entity);if(e.kind==="pve_node_down")return r.replace(/^node\s+/i,"");if(e.kind==="pve_stopped"){let c=_r(r);return c.vmid===null?c.name:`${c.name} (${c.vmid})`}return r}var Ie=.03,lo=o=>o&&o!=="none"?o:null;function Dt(o,e=t=>lo(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let a=e(r);if(r.type==="meter")t.grid??=a,t.gridExport??=lo(r.export);else if(r.type==="inverter"&&a&&!t.solar.includes(a))t.solar.push(a);else if(r.type==="home_battery"){a&&!t.battery.includes(a)&&t.battery.push(a);let i=lo(r.charge);i&&!t.charge.includes(i)&&t.charge.push(i),(a||i)&&t.batteries.push({power:a,charge:i});let s=lo(r.soc);s&&!t.soc.includes(s)&&t.soc.push(s)}}return t}function kr(o){for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}async function Xs(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),r=new Map;for(let a of e)r.set(a,((n==null?void 0:n[a])??[]).reduce((i,s)=>i+(typeof s.change=="number"?s.change:0),0));return r}catch{return null}}var jd=.07;function le(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function Od(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function kn(o,e){var a,i;if(Od(o,e))return e;let t=(i=(a=o.entities)==null?void 0:a[e])==null?void 0:i.device_id;if(!t)return null;let n=Si(o,t),r=n?dn(o,e):null;return Go(o,t).find(s=>s!==e&&(!n||r!==null&&dn(o,s)===r))??null}function Zs(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),r=[],a=new Set;for(let i of e.floors)for(let s of i.placements){let c=kn(o,s.entity_id);!c||n.has(c)||a.has(c)||(a.add(c),r.push({id:s.entity_id,powerEntity:c,floorId:i.id,x:s.x,z:s.z,power:Math.max(0,le(o.states[c])??0)}))}return r}function el(o,e,t,n=Dt(e)){let r=e.energy,a=r.grid??n.grid,i=a?le(o.states[a],r.grid_invert):null;if(!r.grid&&n.gridExport){let m=Math.max(0,le(o.states[n.gridExport])??0);i=Math.max(0,i??0)-m}let s=r.solar?le(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let m=n.solar.map(b=>le(o.states[b])).filter(b=>b!==null);s=m.length?m.reduce((b,_)=>b+_,0):null}let c=r.battery?le(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let m=n.batteries.map(b=>{if(b.charge){let _=b.power?Math.max(0,le(o.states[b.power])??0):0,w=Math.max(0,le(o.states[b.charge])??0);return _-w}return b.power?le(o.states[b.power],r.battery_invert):null}).filter(b=>b!==null);c=m.length?m.reduce((b,_)=>b+_,0):null}let l=(r.battery_soc?[r.battery_soc]:n.soc).map(m=>{var b;return Number((b=o.states[m])==null?void 0:b.state)}).filter(m=>Number.isFinite(m)),u=l.length?l.reduce((m,b)=>m+b,0)/l.length:NaN,p=r.tariff?o.states[r.tariff]:void 0,h=Number(p==null?void 0:p.state),f=r.consumption?le(o.states[r.consumption]):null;return f!==null?f=Math.max(0,f):i!==null||s!==null||c!==null?f=Math.max(0,(i??0)+Math.max(0,s??0)+(c??0)):t.length&&(f=t.reduce((m,b)=>m+b.power,0)),{grid:i,solar:s===null?null:Math.max(0,s),battery:c,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function gt(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function mt(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Vd(o,e){let t=o.length,n=o.map((r,a)=>{let i=o[(a+1)%t],s=i[0]-r[0],c=i[1]-r[1],d=Math.hypot(s,c)||1,l=-c/d,u=s/d;return{p:[r[0]+l*e[a],r[1]+u*e[a]],d:[s/d,c/d],n:[l,u]}});return o.map((r,a)=>{let i=n[(a-1+t)%t],s=n[a],c=i.d[0]*s.d[1]-i.d[1]*s.d[0];if(Math.abs(c)<1e-6)return[r[0]+s.n[0]*e[a],r[1]+s.n[1]*e[a]];let d=((s.p[0]-i.p[0])*s.d[1]-(s.p[1]-i.p[1])*s.d[0])/c;return[i.p[0]+i.d[0]*d,i.p[1]+i.d[1]*d]})}function Ld(o){return qe(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function $r(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:r}=Rt(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let a of o.rooms){if(a.points.length<3)continue;let{pts:i,flipped:s}=Ld(a),c=i.length,d=i.map((p,h)=>{let f=s?(c-2-h+c)%c:h,m=r.some(b=>!b.exterior&&b.sources.some(_=>_.room_id===a.id&&_.edge===f));return jd+(m?t/2:0)}),l=Vd(i,d).map(p=>gt(n,p)),u=l.map((p,h)=>[p,l[(h+1)%c]]);for(let[p,h]of u)mt(n,p,h);n.rings.set(a.id,u)}for(let a of r){if(a.exterior||!a.roomLeft||!a.roomRight)continue;let i=[(a.a[0]+a.b[0])/2,(a.a[1]+a.b[1])/2],s=co(n,a.roomLeft,i),c=co(n,a.roomRight,i);s!==null&&c!==null&&mt(n,s,c)}return n}function co(o,e,t){let n=o.rings.get(e);if(!n)return null;let r=null;for(let i of n){let s=o.pos[i[0]],c=o.pos[i[1]],d=c[0]-s[0],l=c[1]-s[1],u=d*d+l*l||1,p=Math.min(1,Math.max(0,((t[0]-s[0])*d+(t[1]-s[1])*l)/u)),h=[s[0]+d*p,s[1]+l*p],f=Math.hypot(t[0]-h[0],t[1]-h[1]);(!r||f<r.d)&&(r={seg:i,q:h,d:f})}if(!r)return null;let a=gt(o,r.q);return mt(o,a,r.seg[0]),mt(o,a,r.seg[1]),a}function uo(o,e,t){let n=o.pos[t],r=co(o,e.id,n);if(r===null)return!1;let a=o.pos[r],i=o.pos[o.adj[r][0].to],s=o.pos[o.adj[r][1].to],c=Math.hypot(s[0]-i[0],s[1]-i[1])||1,d=[(s[0]-i[0])/c,(s[1]-i[1])/c],l=(n[0]-a[0])*d[0]+(n[1]-a[1])*d[1],u=(n[1]-a[1])*d[0]-(n[0]-a[0])*d[1];if(Math.abs(l)<.01||Math.abs(u)<.01)return mt(o,t,r),!0;let p=[a[0]+d[0]*l,a[1]+d[1]*l],h=[a[0]-d[1]*u,a[1]+d[0]*u],f=gt(o,G(h,e.points)||!G(p,e.points)?h:p);return mt(o,r,f),mt(o,f,t),!0}function xn(o,e){let t=o.rooms.filter(a=>a.points.length>=3),n=t.find(a=>G(e,a.points));if(n)return n;let r=null;for(let a of t)for(let i of a.points){let s=Math.hypot(e[0]-i[0],e[1]-i[1]);(!r||s<r.d)&&(r={room:a,d:s})}return(r==null?void 0:r.room)??null}function tl(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),r=o.pos.map(()=>!1);for(t[e]=0;;){let a=-1;for(let i=0;i<t.length;i++)!r[i]&&t[i]<1/0&&(a<0||t[i]<t[a])&&(a=i);if(a<0)break;r[a]=!0;for(let{to:i,w:s}of o.adj[a])t[a]+s<t[i]-1e-9&&(t[i]=t[a]+s,n[i]=a)}return{dist:t,prev:n}}function Us(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Ks=new WeakMap;function Dd(o,e){let t=kr(o),n=o.floors.find(l=>l.id===t.floor_id),r=[],{wall_exterior:a,wall_interior:i}=o.settings,s=new Map,c=new Map;e.forEach((l,u)=>c.set(l.floorId,[...c.get(l.floorId)??[],u]));let d=o.floors.filter(l=>c.has(l.id));for(let l of d){if(l.id===n.id)continue;let u=l.elevation>n.elevation,p=c.get(l.id),h=Us(p,e);r.push({floorId:n.id,a:[t.x,Ie,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:p,kind:h});let f=Math.abs(l.elevation-n.elevation);r.push({floorId:l.id,a:[t.x,u?-.2:l.height,t.z],b:[t.x,Ie,t.z],dist:f,members:p,kind:h}),s.set(l.id,f+.25)}for(let l of d){let u=$r(l,a,i),p=xn(l,[t.x,t.z]);if(!p)continue;let h=gt(u,[t.x,t.z]);if(!uo(u,p,h))continue;let f=[];for(let v of c.get(l.id)){let $=e[v],A=xn(l,[$.x,$.z]);if(!A)continue;let P=gt(u,[$.x,$.z]);uo(u,A,P)&&f.push({node:P,member:v})}let{dist:m,prev:b}=tl(u,h),_=new Map;for(let v of f)if(Number.isFinite(m[v.node]))for(let $=v.node;b[$]>=0;$=b[$]){let A=b[$],P=`${A}>${$}`,I=_.get(P)??{a:A,b:$,members:[]};I.members.push(v.member),_.set(P,I)}let w=s.get(l.id)??0;for(let{a:v,b:$,members:A}of _.values()){let P=u.pos[v],I=u.pos[$],g=Us(A,e);r.push({floorId:l.id,a:[P[0],Ie,P[1]],b:[I[0],Ie,I[1]],dist:w+m[v],members:A,kind:g})}}return r}function nl({building:o,consumers:e,summary:t,battery:n,fieldPower:r,devicePower:a}){var T;let i=kr(o);if(!i)return[];let s=o.floors.find(x=>x.id===i.floor_id);if(!s)return[];let c=x=>a==null?void 0:a.get(x),d=xr(o,"inverter"),l=xr(o,"home_battery");!l.length&&n&&l.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=x=>{let S=null;for(let F of d)F.floorId===x.floorId&&(!S||Math.hypot(F.x-x.x,F.z-x.z)<Math.hypot(S.x-x.x,S.z-x.z))&&(S=F);return S},p=x=>c(x.id)??(l.length===1?t.battery??0:0),h=new Map;for(let x of l){let S=u(x);S&&h.set(x.id,S)}let f=e.map(x=>({floorId:x.floorId,x:x.x,z:x.z,kind:x.wallbox?"wallbox":"consumer",power:x.power}));for(let x of l)!h.has(x.id)&&t.battery!==null&&f.push({floorId:x.floorId,x:x.x,z:x.z,kind:"battery",power:Math.abs(p(x))});let m=`${i.floor_id}:${i.x},${i.z}|${f.map(x=>`${x.floorId}:${x.x},${x.z}:${x.kind}`).join(";")}`,b=Ks.get(o);b||Ks.set(o,b=new Map);let _=b.get(m);_||(_=Dd(o,f),b.clear(),b.set(m,_));let w=_.map(x=>({floorId:x.floorId,a:x.a,b:x.b,dist:x.dist,power:x.members.reduce((S,F)=>S+f[F].power,0),kind:x.kind})),v=t.grid!==null?Mr(o):null,$=o.settings.roof.cables??[],A=x=>$.find(S=>S.id===x),P=(x,S)=>x.map(F=>({...F,key:S}));if(v){let x=t.grid>=0,S=A("grid"),F=S?wn(o,S,[v.end[0],s.elevation+Math.max(Ie,v.height),v.end[1]],[i.x,s.elevation+.4+1.1,i.z]):[...v.height>.05?[[v.end[0],v.height,v.end[1]]]:[],[v.end[0],Ie,v.end[1]],[v.wall[0],Ie,v.wall[1]],[i.x,Ie,i.z]],W=S?Lt(o,x?F:[...F].reverse(),Math.abs(t.grid),x?"grid":"export",s):rl(s.id,x?F:[...F].reverse(),Math.abs(t.grid),x?"grid":"export",0);w.push(...P(W,"grid"))}if(t.battery!==null&&t.battery>0)for(let x of w)x.kind==="battery"&&([x.a,x.b]=[x.b,x.a]);let I=o.settings.roof.solar??[],g=o.settings.roof.strings??[],M=new Map;if(r&&I.length){let x=[...Ht(o),..._n(o)];for(let S of I){let F=r.get(S.id)??0,W=S.string?(T=g.find(ue=>ue.id===S.string))==null?void 0:T.inverter:null,B=W?l.find(ue=>ue.id===W)??null:null,j=W&&!B?d.find(ue=>ue.id===W)??null:null;if(B){let ue=h.get(B.id);ue&&M.set(ue.id,(M.get(ue.id)??0)+F);let ke=B.variant==="wall"?.5+B.h:.9,Me=A(`solar:${S.id}`),be=Me?Qs(o,S):null,$e=o.floors.find(_e=>_e.id===B.floorId);Me&&be&&$e?w.push(...P(Lt(o,wn(o,Me,be,[B.x,$e.elevation+ke,B.z]),F,"solar",$e),`solar:${S.id}`)):w.push(...P(Js(o,S,F,B,ke),`solar:${S.id}`));continue}if(!j&&d.length){let ue=dt(o,S,x),ke=ue?ds(ue,S):[S.u,S.v];j=d.reduce((Me,be)=>!Me||Math.hypot(be.x-ke[0],be.z-ke[1])<Math.hypot(Me.x-ke[0],Me.z-ke[1])?be:Me,null)}j&&M.set(j.id,(M.get(j.id)??0)+F);let q=j??{floorId:i.floor_id,x:i.x,z:i.z},oe=j?1.1+j.h:1.5,V=A(`solar:${S.id}`),U=V?Qs(o,S):null,te=o.floors.find(ue=>ue.id===q.floorId);V&&U&&te?w.push(...P(Lt(o,wn(o,V,U,[q.x,te.elevation+oe,q.z]),F,"solar",te),`solar:${S.id}`)):w.push(...P(Js(o,S,F,q,oe),`solar:${S.id}`))}}else t.solar!==null&&!d.length&&w.push({floorId:s.id,a:[i.x+.08,s.height+.6,i.z+.08],b:[i.x+.08,Ie,i.z+.08],dist:0,power:t.solar,kind:"solar"});for(let x of d){let S=1.1+x.h,F=l.filter(j=>h.get(j.id)===x),W=c(x.id);if(W===void 0){W=M.get(x.id)??(d.length===1?t.solar??0:0);for(let j of F)W+=p(j)}let B=o.floors.find(j=>j.id===x.floorId);if(t.solar!==null||t.battery!==null){let j=A(`inv:${x.id}`),q=j&&B?Lt(o,wn(o,j,[x.x,B.elevation+S,x.z],[i.x,s.elevation+1.5,i.z]),Math.max(0,W),"inverter",B):Ys(o,x,S,{floorId:i.floor_id,x:i.x,z:i.z},1.5,Math.max(0,W),"inverter",0);w.push(...P(q,`inv:${x.id}`))}for(let j of F){let q=p(j);if(t.battery===null&&c(j.id)===void 0)continue;let oe=j.variant==="wall"?.5+j.h:.9,V=A(`bat:${j.id}`),U=V&&B?Lt(o,wn(o,V,[x.x,B.elevation+S-.1,x.z],[j.x,B.elevation+oe,j.z]),Math.abs(q),"battery",B):Ys(o,x,S-.1,j,oe,Math.abs(q),"battery",0);w.push(...P(q<=0?U:U.map(te=>({...te,a:te.b,b:te.a})).reverse(),`bat:${j.id}`))}}return w}function Mr(o){var h;let e=kr(o),t=e?o.floors.find(f=>f.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:r}=o.settings,{walls:a}=Rt(t.rooms,{exterior:n,interior:r},t.walls??[]),i=xr(o,"grid_point")[0],s=a.filter(f=>f.exterior);if(i){let f=null;for(let _ of s){let w=_.b[0]-_.a[0],v=_.b[1]-_.a[1],$=i.x-e.x,A=i.z-e.z,P=$*v-A*w;if(Math.abs(P)<1e-9)continue;let I=((_.a[0]-e.x)*v-(_.a[1]-e.z)*w)/P,g=((_.a[0]-e.x)*A-(_.a[1]-e.z)*$)/P;if(I<=0||I>1||g<0||g>1||f&&I>=f.t)continue;let M=Math.hypot(w,v)||1;f={q:[e.x+$*I,e.z+A*I],out:[v/M,-w/M],t:I}}let m=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[e.x,e.z],b=((h=o.floors.flatMap(_=>_.furniture).find(_=>_.id===i.id))==null?void 0:h.mount_y)??0;return{floorId:t.id,wall:m,end:[i.x,i.z],height:Math.max(0,b)}}let c=null;for(let f of s){let m=f.b[0]-f.a[0],b=f.b[1]-f.a[1],_=m*m+b*b||1,w=Math.min(1,Math.max(0,((e.x-f.a[0])*m+(e.z-f.a[1])*b)/_)),v=[f.a[0]+m*w,f.a[1]+b*w],$=Math.hypot(e.x-v[0],e.z-v[1]),A=Math.sqrt(_);(!c||$<c.d)&&(c={q:v,out:[b/A,-m/A],d:$})}if(!c)return null;let{q:d,out:l}=c,u=0;for(let f of o.floors)for(let m of f.outdoor??[]){let b=m.points.length;for(let _=0;_<b;_++){let w=m.points[_],v=m.points[(_+1)%b],$=v[0]-w[0],A=v[1]-w[1],P=l[0]*A-l[1]*$;if(Math.abs(P)<1e-9)continue;let I=((w[0]-d[0])*A-(w[1]-d[1])*$)/P,g=((w[0]-d[0])*l[1]-(w[1]-d[1])*l[0])/P;I>0&&g>=0&&g<=1&&(u=Math.max(u,Math.min(15,I)))}}let p=u>n+1?u:n+2.5;return{floorId:t.id,wall:[d[0]+l[0]*(n/2+.05),d[1]+l[1]*(n/2+.05)],end:[d[0]+l[0]*p,d[1]+l[1]*p],height:0}}function xr(o,e){let t=[];for(let n of o.floors)for(let r of n.furniture)r.type===e&&t.push({id:r.id,type:r.type,floorId:n.id,x:r.x,z:r.z,h:r.h,variant:r.variant??null});return t}var Gs=new WeakMap;function ol(o,e,t,n){let r=`${e.id}:${t.join(",")}>${n.join(",")}`,a=Gs.get(o);a||Gs.set(o,a=new Map);let i=a.get(r);if(i)return i;let{wall_exterior:s,wall_interior:c}=o.settings,d=$r(e,s,c),l=[t,n],u=xn(e,t),p=xn(e,n);if(u&&p){let h=gt(d,t),f=gt(d,n);if(uo(d,u,h)&&uo(d,p,f)){let{dist:m,prev:b}=tl(d,h);if(Number.isFinite(m[f])){l.length=0;for(let _=f;_>=0;_=b[_])l.unshift(d.pos[_])}}}return a.set(r,l),l}function Ys(o,e,t,n,r,a,i,s){let c=o.floors.find(u=>u.id===e.floorId);if(!c||e.floorId!==n.floorId)return[];let d=ol(o,c,[e.x,e.z],[n.x,n.z]),l=[[e.x,t,e.z],...d.map(u=>[u[0],Ie,u[1]]),[n.x,r,n.z]];return rl(c.id,l,a,i,s)}function rl(o,e,t,n,r){let a=[];for(let i=0;i+1<e.length;i++){let s=e[i],c=e[i+1],d=Math.hypot(c[0]-s[0],c[1]-s[1],c[2]-s[2]);d<1e-4||(a.push({floorId:o,a:s,b:c,dist:r,power:t,kind:n}),r+=d)}return a}function wn(o,e,t,n){let r=o.floors.find(i=>i.id===e.floor_id),a=((r==null?void 0:r.elevation)??0)+Math.max(Ie,e.height);return[t,...e.points.map(i=>[i[0],a,i[1]]),n]}function Qs(o,e){let t=dt(o,e,[...Ht(o),..._n(o)]);if(!t)return null;let[n,r]=ut(t,e),a=e.u+n/2,i=t.unbounded?e.v+r/2:e.v;return[t.o[0]+t.eu[0]*a+t.es[0]*i,t.o[1]+t.eu[1]*a+t.es[1]*i,t.o[2]+t.eu[2]*a+t.es[2]*i]}function Nd(o,e,t){let{wall_exterior:n,wall_interior:r}=o.settings,a=$r(e,n,r),i=xn(e,t),s=i?co(a,i.id,t):null;return s===null?t:a.pos[s]}function Lt(o,e,t,n,r){let a=[...o.floors].sort((d,l)=>d.elevation-l.elevation),i=d=>{let l=r;for(let u of a)d>=u.elevation-.01&&(l=u);return l},s=[],c=0;for(let d=0;d+1<e.length;d++){let l=e[d],u=e[d+1];if(Math.hypot(u[0]-l[0],u[1]-l[1],u[2]-l[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-l[1])>.01){let f=Math.min(l[1],u[1]),m=Math.max(l[1],u[1]);for(let b of a)b.elevation>f+.01&&b.elevation<m-.01&&h.push(b.elevation);u[1]<l[1]&&h.reverse()}for(let f of[...h,u[1]]){let m=(f-l[1])/(u[1]-l[1]||1),b=Math.abs(u[1]-l[1])>.01?[l[0]+(u[0]-l[0])*m,f,l[2]+(u[2]-l[2])*m]:u,_=i((l[1]+b[1])/2),w=Math.hypot(b[0]-l[0],b[1]-l[1],b[2]-l[2]);w>1e-4&&s.push({floorId:_.id,a:[l[0],l[1]-_.elevation,l[2]],b:[b[0],b[1]-_.elevation,b[2]],dist:c,power:t,kind:n}),c+=w,l=b}}return s}function Js(o,e,t,n,r){let a=[...Ht(o),..._n(o)],i=dt(o,e,a),s=o.floors.find(b=>b.id===n.floorId);if(!i||!s)return[];let[c,d]=ut(i,e),l=(b,_)=>[i.o[0]+i.eu[0]*b+i.es[0]*_,i.o[1]+i.eu[1]*b+i.es[1]*_,i.o[2]+i.eu[2]*b+i.es[2]*_],u=e.u+c/2,p=s.elevation+Ie,h=[],f;if(i.unbounded){let b=l(u,e.v+d/2);f=[b[0],p,b[2]],h.push(f)}else if(i.wall){let b=l(u,e.v);f=[b[0],p,b[2]],h.push(b,f)}else{let b=l(u,e.v),_=ir(o)??s,w=Math.max(s.elevation+.5,Math.min(b[1]-.25,_.elevation+_.height-.12));f=[b[0],w,b[2]],h.push(b)}let m=Nd(o,s,[f[0],f[2]]);h.push([m[0],f[1],m[1]]),Math.abs(f[1]-p)>.05&&h.push([m[0],p,m[1]]);for(let b of ol(o,s,m,[n.x,n.z]).slice(1))h.push([b[0],p,b[1]]);return h.push([n.x,s.elevation+r,n.z]),Lt(o,h,t,"solar",s)}function al(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),r=new Array(n).fill(0),a=-1;for(let s of Object.values(o))for(let c of s){let d=typeof c.start=="number"?c.start:Date.parse(c.start),l=Math.floor((d-t.getTime())/3e5);l<0||l>=n||typeof c.mean!="number"||(r[l]+=Math.max(0,c.mean),a=Math.max(a,l))}return r.length=Math.max(a+1,n-3,1),{kwh:r.reduce((s,c)=>s+c*5/60/1e3,0),peak:Math.max(0,...r),curve:r}}async function il(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function Sr(o,e){let n=c=>42-(e>0?c/e*36:0),r=o.map((c,d)=>[d/288*220,n(c)]),a=r.map(([c,d],l)=>`${l?"L":"M"}${c.toFixed(1)} ${d.toFixed(1)}`).join(" "),[i,s]=r[r.length-1];return{line:a,area:`${a} L${i.toFixed(1)} 44 L0 44 Z`,endX:i,endY:s}}function sl(o){var e;return Math.max(1,o.rows*o.cols-(((e=o.skip)==null?void 0:e.length)??0))}var qd=400;function ll(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let r=Math.min(1,(e.get(n.id)??0)/(sl(n)*(n.wp??qd)));t.set(n.id,r>.003?Math.pow(r,.6):0)}return t}function cl(o,e,t){let n=new Map,r=e.settings.roof.solar??[],a=e.settings.roof.strings??[],i=sl,s=[],c=0,d=new Map;for(let p of r){let h=p.entity&&p.entity!=="none"?le(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),c+=Math.max(0,h);continue}let f=p.string?a.find(b=>b.id===p.string):void 0,m=f!=null&&f.entity&&f.entity!=="none"?le(o.states[f.entity]):null;if(f&&m!==null){d.set(f.id,[...d.get(f.id)??[],p]);continue}s.push(p)}for(let[p,h]of d){let f=a.find(_=>_.id===p),m=Math.max(0,le(o.states[f.entity])??0),b=h.reduce((_,w)=>_+i(w),0);for(let _ of h)n.set(_.id,m*i(_)/b);c+=m}let l=Math.max(0,(t??0)-c),u=s.reduce((p,h)=>p+i(h),0);for(let p of s)n.set(p.id,u?l*i(p)/u:0);return n}var He={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function dl(o,e){if(o==="grid")return He.import;if(o==="export")return He.export;if(o==="solar")return He.solar;if(o==="battery")return He.battery;if(o==="wallbox")return He.wallbox;if(o==="inverter")return(e.solar??0)>5?He.solar:He.battery;let t=[[Math.max(0,e.grid??0),He.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),He.solar],[Math.max(0,e.battery??0),He.battery]],[n]=t.reduce((r,a)=>a[0]>r[0]?a:r);return n>0?t.find(r=>r[0]===n)[1]:He.house}var Er=["neon","blueprint","day"],$n={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var po={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function ul(o,e){let t=po[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[r,a]=t[n],[i,s]=t[n-1];if(e<=r){let c=(e-i)/(r-i);return[s[0]+(a[0]-s[0])*c,s[1]+(a[1]-s[1])*c,s[2]+(a[2]-s[2])*c]}}return t[t.length-1][1]}function pl(o,e,t){let n=new Map;for(let r of e.floors)for(let a of r.rooms){let i=We(o,r,a,t);i!==null&&n.set(a.id,i)}return n}function hl(o){let e=po[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([r,a])=>`rgb(${a.map(i=>Math.round(i*255)).join(",")}) ${Math.round((r-t)/(n-t)*100)}%`).join(", ")})`}function ye(o,e){if(!it(e))return C(o,`furn_${e}`);let t=fe(e);return t?Ya(t):C(o,"pack_missing_item")}var Pr=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function ho(o){return o&&o!=="none"?o:null}function Mn(o,e){var a,i;if(e.type!=="parking")return null;let t=ho(e.entity);if(t){let s=o.states[t];if(!s||!Pr.has(s.state.toLowerCase()))return null}let n=e.vehicle??null,r=ho(e.type_entity);if(r&&((a=e.types)!=null&&a.length)){let s=(((i=o.states[r])==null?void 0:i.state)??"").trim().toLowerCase();if(s){let c=l=>l.trim().toLowerCase(),d=e.types.find(l=>c(l.state)===s)??e.types.find(l=>c(l.state)&&s.includes(c(l.state)));d&&(n=d.vehicle)}}return n&&fe(n)?n:null}function Ar(o,e){let t=new Map;for(let n of e.floors)for(let r of n.furniture){let a=Mn(o,r);a&&t.set(r.id,a)}return t}function fl(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[ho(t.entity),ho(t.type_entity)])).filter(e=>!!e)}function ml(o,e){let t=fe(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var Sn=1800*1e3,Wd=new Set(["motion","occupancy","presence"]);function gl(o,e){var t;return e.startsWith("binary_sensor.")&&Wd.has(String((t=o.states[e])==null?void 0:t.attributes.device_class))}function En(o,e){let t=[],n=new Set,r=(a,i,s,c)=>{n.has(a)||(n.add(a),t.push({entity:a,floorId:i,x:s,z:c}))};for(let a of e.floors)for(let i of a.placements)if(gl(o,i.entity_id))r(i.entity_id,a.id,i.x,i.z);else if(O(i.entity_id)==="camera")for(let s of Ge(o,i.entity_id))r(s,a.id,i.x,i.z);for(let a of e.floors)for(let i of a.rooms){if(!i.area_id||i.points.length<3)continue;let[s,c]=Pe(i.points);for(let d of de(o,i.area_id))gl(o,d)&&r(d,a.id,s,c)}return t}function bl(o,e,t,n=Sn){let r=t-n,a=[];for(let[i,s]of Object.entries(o)){let c="";for(let d of s){let l=(d.lc??d.lu)*1e3;d.s==="on"&&c!=="on"&&l>=r&&l<=t&&a.push({entity:i,time:l}),c=d.s}}for(let i of e){let s=i.lastChanged??NaN;i.state!=="on"||!(s>=r&&s<=t)||a.some(c=>c.entity===i.entity&&Math.abs(c.time-s)<2e3)||a.push({entity:i.entity,time:s})}return a.sort((i,s)=>i.time-s.time)}function _l(o,e,t,n=Sn){let r=new Map(o.map(i=>[i.entity,i])),a=[];for(let i of e){let s=r.get(i.entity);if(!s)continue;let c=a[a.length-1];c&&c.entity===i.entity&&i.time-c.time<6e4||a.push({...s,time:i.time,age:Math.min(1,Math.max(0,(t-i.time)/n))})}return a.slice(-40)}function fo(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit"})}var vl='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var mo=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Ir(o,e){let t=[],n=st(o,e.floors),r=e.floors.length>1;for(let a of e.floors){let i=(l,u)=>a.rooms.find(p=>p.points.length>=3&&G([l,u],p.points))??null,s=(l,u)=>{var p;return[(p=i(l,u))==null?void 0:p.name,r?a.name:null].filter(Boolean).join(" \xB7 ")};for(let l of a.rooms){if(l.points.length<3)continue;let[u,p]=Pe(l.points);t.push({kind:"room",name:l.name,where:r?a.name:"",floorId:a.id,roomId:l.id,entity:null,icon:null,x:u,z:p,y:0})}let c=new Set,d=(l,u,p,h)=>{var f;c.has(l)||!o.states[l]||(c.add(l),t.push({kind:"device",name:Q(o,l),where:s(u,p),floorId:a.id,roomId:((f=i(u,p))==null?void 0:f.id)??null,entity:l,icon:O(l),x:u,z:p,y:h}))};for(let l of a.placements)d(l.entity_id,l.x,l.z,l.y??At(O(l.entity_id)??"sensor",a.height,l.mount));for(let l of a.furniture){let u=n.get(l.id),p=(u==null?void 0:u.entity)??(u==null?void 0:u.power);p&&d(p,l.x,l.z,Math.min(a.height-.3,Math.max(.5,l.h)))}}return t}function yl(o,e,t=8){let n=mo(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let r=o.filter(s=>{let c=mo(`${s.name} ${s.where} ${s.entity??""}`);return n.every(d=>c.includes(d))}),a=mo(e.trim()),i=s=>(mo(s.name).startsWith(a)?0:2)+(s.kind==="room"?0:1);return r.sort((s,c)=>i(s)-i(c)||s.name.localeCompare(c.name)).slice(0,t)}var Bd=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Ud=[2200,2700,3200,4e3,5e3,6500],Kd=["hs","rgb","rgbw","rgbww","xy"],Gd=4,wl=16,xl=32,Yd=128;function zr(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>Kd.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Cr(o){return((o.attributes.supported_features??0)&Gd)!==0&&typeof o.attributes.current_position=="number"}var Tr=class extends ge{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{O(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return y`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?y`<img src=${n} alt=${Q(this.hass,this.entity)} />`:y`<span class="qm-note">${ve(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return C(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:Q(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){xe(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,r)=>{let a=r/t*Math.PI*2-Math.PI/2;return y`<div class="qm-at" style="left:${50+Math.cos(a)*39}%;top:${50+Math.sin(a)*39}%">${n}</div>`})}renderLight(e){let t=zr(e),n=e.state==="on",r=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,a=t.color?Bd.map(i=>y`<button class="qm-swatch" style="background:rgb(${i.join(",")})" aria-label=${`RGB ${i.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:i})}></button>`):t.temp?Ud.map(i=>y`<button class="qm-swatch" style="background:${Qd(i)}" aria-label=${`${i} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:i})}></button>`):[];return y`<div class="qm-ring ${a.length?"":"qm-ring-small"}">
        ${this.ring(a)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${r} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?y`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,r))}
            aria-label=${this.t("brightness")}
            @change=${i=>this.call("light","turn_on",{brightness_pct:Number(i.target.value)})}
          />`:k}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",r=Cr(e),a=(d,l,u,p=!1)=>y`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${l} @click=${u}>${d}</button>`,i=d=>t!==null&&Math.abs(t-d)<3,s=[a("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),i(100)),...r?[75,50].map(d=>a(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),i(d))):[],a("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),i(0)),...r?[25].map(d=>a(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),i(d))):[],a("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],c=t===null?e.state==="closed"?100:0:100-t;return y`<div class="qm-ring">
        ${this.ring(s)}
        <button
          class="qm-power qm-blind ${c<100?"qm-on":""}"
          style="--closed:${c}%"
          aria-label=${n?this.t("cover_stop"):c>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",c>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:ve(this.hass,e)}</b>
        </button>
      </div>
      ${r?y`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:k}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Yd&&n!==null?y`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(r.target.value)})}
      /></label>`:t&(wl|xl)?y`<div class="qm-tilt-buttons">
        ${t&wl?y`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:k}
        ${t&xl?y`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:k}
      </div>`:k}renderCar(e){let t=e.entities,n=(u,p,h,f={})=>{this.hass.callService(u,p,{entity_id:h,...f})},r=t.lock,a=!!r&&r.startsWith("lock."),i=u=>/^(switch|input_boolean|fan|light)\./.test(u),s=t.climate,c=!!s&&s.startsWith("climate."),d=t.charging&&i(t.charging)?t.charging:null,l=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return y`<p class="qm-car-line">${l||ve(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${a||r&&i(r)?y`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(a?n("lock","unlock",r):n("homeassistant","turn_off",r)):a?n("lock","lock",r):n("homeassistant","turn_on",r)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:k}
        ${s?y`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(c?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",s)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:k}
        ${d?y`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",d)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:k}
        ${!a&&!s&&!d?y`<p class="qm-note">${this.t("car_no_controls")}</p>`:k}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",r=e.state==="off"||e.state==="standby",a=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,i=[t.media_title,t.media_artist].filter(c=>typeof c=="string"&&c).join(" \xB7 "),s=typeof t.entity_picture=="string"?t.entity_picture:null;return y`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${s?`background-image:url(${s})`:""} @click=${()=>this.call("media_player",r?"turn_on":n?"media_pause":"media_play")}>
          <span>${r?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${i?y`<p class="qm-media-title">${i}</p>`:k}
      ${a!==null?y`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(a)}
            aria-label=${this.t("volume")}
            @change=${c=>this.call("media_player","volume_set",{volume_level:Number(c.target.value)/100})}
          />`:k}
      ${this.renderPlay(e)}`}renderPlay(e){if(!L("sound"))return k;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return k;let r=e.attributes.source;return y`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(a=>y`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:a.type,media_content_id:a.content})}>
            ▶ ${a.label}
          </button>`)}
        ${t.map(a=>y`<button class="qm-chip ${a===r?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:a})}>${a}</button>`)}
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return y`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${ve(this.hass,e)}</b>
      </button>
    </div>`}render(){var r;let e=(r=this.hass)==null?void 0:r.states[this.entity];if(!e)return k;let t=O(this.entity),n=this.car?this.renderCar(this.car):Y(e)?y`<p class="qm-note">${ve(this.hass,e)}</p>`:t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&L("sound")?this.renderMedia(e):this.renderToggle(e);return y`<div class="qm" role="dialog" aria-label=${Q(this.hass,this.entity)}>
      <div class="qm-title">${Q(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Oe,we`
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
    `]};function Qd(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,r)=>Math.round(n+(r-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Tr);var Jd=new URL(import.meta.url),Xd=new URL("./neonplan3d-3d.js?v=6ca0649fba85",Jd).href,kl;function Pn(){return kl??=import(Xd),kl}var Fr;function Rr(){let o=new URL("./neonplan3d-fun.js?v=0e3e69e101a8",new URL(import.meta.url)).href;return Fr??=import(o).catch(e=>{throw Fr=void 0,e}),Fr}var $l=.3;function An(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,r=o.height??$l,a=[];if(o.heights)t&&a.push([t.x,t.y,t.z]),o.points.forEach(([i,s],c)=>{var d;return a.push([i,((d=o.heights)==null?void 0:d[c])??r,s])}),n&&a.push([n.x,n.y,n.z]);else{if(!t||!n)return[];a.push([t.x,t.y,t.z],[t.x,r,t.z]);for(let[i,s]of o.points)a.push([i,r,s]);a.push([n.x,r,n.z],[n.x,n.y,n.z])}return a.filter((i,s)=>s===0||Hr(i,a[s-1])>.001)}function Hr(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function jr(o){let e=0;for(let t=1;t<o.length;t++)e+=Hr(o[t-1],o[t]);return e}function go(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[r,a]=[o[n-1],o[n]],i=Hr(r,a);if(!(i<1e-6)){if(t<=i||n===o.length-1){let s=Math.min(1,t/i),c=[(a[0]-r[0])/i,(a[1]-r[1])/i,(a[2]-r[2])/i];return{p:[r[0]+(a[0]-r[0])*s,r[1]+(a[1]-r[1])*s,r[2]+(a[2]-r[2])*s],dir:c,seg:n-1}}t-=i}}return null}function Nt(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function Or(o){let{kind:e,id:t}=Nt(o);return e&&t?`${e}:${t}`:o}function Zd(o,e){let{w:t,d:n,h:r}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,r*.55,0]:e==="pressure"?[t*.05,r*.9,0]:null;if(o.type==="pool_filter"){let a=Math.min(t,n)/2;if(o.variant==="side6"){let c=a+.08;return e==="pump"?[c,r*.6,0]:e==="return"?[c+.06,r*.48,0]:e==="waste"?[c,r*.36,0]:null}let i=r*.89,s=a*.45+.04;return e==="pump"?[-s,i,0]:e==="return"?[s,i,0]:e==="waste"?[0,i,-s]:null}if(o.type==="pool_heat_pump"){let a=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let i=e==="in"?r*.25:r*.45;return a==="back"?[e==="in"?-t*.15:t*.15,i,-n/2-.04]:[(a==="left"?-1:1)*(t/2+.04),i,-n*.2]}return null}function Ml(o,e){let t=Zd(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[r,a]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*r-t[2]*a,y:t[1],z:o.z+t[0]*a+t[2]*r}}function Sl(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}var El=new Set(["skimmer","drain"]),Vr=new Set(["backwash","rinse","waste"]),Pl=o=>`port:${o}`,Al=o=>`dev:${o}`,Lr=o=>{var e;return!!((e=o.fittings)!=null&&e.some(t=>t.kind==="valve"&&t.open===!1))};function Il(o){let e=new Map(o.pipes.map(v=>[v.id,{active:!1,warm:!1,waste:!1}]));if(!o.pumpOn)return e;let t=new Map(o.pipes.map(v=>[v.id,Nt(v.from).port])),n=o.pipes.map(v=>({...v,from:v.from?Or(v.from):`loose:${v.id}:a`,to:v.to?Or(v.to):`loose:${v.id}:b`})),r=new Map(o.devices.map(v=>[Al(v.id),v])),a=new Map(o.ports.map(v=>[Pl(v.id),v])),i=v=>{let $=r.get(v);return!!$&&$.type==="pool_valve"&&$.open===!1},s=new Map,c=new Map;for(let v of n)s.set(v.from,[...s.get(v.from)??[],v]),c.set(v.to,[...c.get(v.to)??[],v]);let d=v=>{var $;return(($=a.get(v))==null?void 0:$.kind)==="waste"},l=v=>{var $;return(($=r.get(v))==null?void 0:$.type)==="pool_heat_pump"},u=new Map,p=(v,$=new Set)=>{let A=u.get(v.id);if(A)return A;if($.has(v.id))return{heat:!1,waste:!1};$.add(v.id);let P=l(v.to),I=d(v.to);if(!P||!I)for(let M of s.get(v.to)??[]){let T=p(M,$);P||=T.heat,I||=T.waste}let g={heat:P,waste:I};return u.set(v.id,g),g},h=o.devices.filter(v=>v.type==="pool_pump").map(v=>Al(v.id)),f=h.length?h:o.ports.filter(v=>El.has(v.kind)).map(v=>Pl(v.id)),m=new Set,b=(v,$,A)=>{let P=`${v}|${$}|${A}`;if(m.has(P)||(m.add(P),i(v)))return;let I=s.get(v)??[],g=r.get(v);if((g==null?void 0:g.type)==="pool_filter"){let M=g.valve??"filter";if(M==="closed")return;let T=Vr.has(M)?"waste":"return";I=I.filter(x=>{let S=t.get(x.id);return S?S===T:p(x).waste===Vr.has(M)}),Vr.has(M)&&(A=!0)}else if(I.length>1){I=I.filter(x=>!i(x.to)&&!Lr(x));let M=I.filter(x=>p(x).heat),T=I.filter(x=>!p(x).heat);M.length&&T.length&&(I=o.heaterOn?M:T)}(g==null?void 0:g.type)==="pool_heat_pump"&&o.heating&&($=!0);for(let M of I){if(i(M.to)||Lr(M))continue;let T=e.get(M.id);T.active=!0,T.warm||=$,T.waste||=A,b(M.to,$,A)}},_=new Set,w=v=>{for(let $ of c.get(v)??[])_.has($.id)||i($.from)||Lr($)||(_.add($.id),w($.from))};if(h.length){for(let $ of h)w($);let v=($,A=new Set)=>{var P;return A.has($.id)?!1:(A.add($.id),El.has(((P=a.get($.from))==null?void 0:P.kind)??"")?!0:(c.get($.from)??[]).some(I=>_.has(I.id)&&v(I,A)))};for(let $ of _){let A=n.find(P=>P.id===$);v(A)&&(e.get($).active=!0)}}for(let v of f)b(v,!1,!1);return e}var eu=[.25,.7,1],tu=[1,.45,.18],nu=[.75,.6,.35],ou=900;function bo(o){return o!=null&&o.waste?nu:o!=null&&o.warm?tu:eu}function Tl(o,e,t,n=r=>r){let r=[];for(let a of o){let i=n(An(a,t),a);if(i.length<2)continue;let s=e.get(a.id),c=bo(s),d=0;for(let l=1;l<i.length;l++){let[u,p]=[i[l-1],i[l]],h=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]);h<.01||(r.push({floorId:a.floor_id,a:u,b:p,dist:d,power:s!=null&&s.active?ou:0,color:c}),d+=h)}}return r}function zl(o,e,t){let n=t.pool??{},r=an(e,t);return a=>{var d,l;let{kind:i,id:s,port:c}=Nt(a);if(i==="port"){let u=(d=n.ports)==null?void 0:d.find(h=>h.id===s);if(!u)return null;let p=u.kind==="skimmer"?r-(u.depth??0):u.kind==="drain"?rn(e,t)+.03:u.kind==="inlet"?r-(u.depth??.3):.02;return{x:u.x,z:u.z,y:p}}if(i==="joint"){let u=(l=n.joints)==null?void 0:l.find(p=>p.id===s);return u?Sl(u,c):null}if(i!=="dev")return null;for(let u of o.floors){let p=u.furniture.find(b=>b.id===s);if(!p||!sn.includes(p.type))continue;let h=c?Ml(p,c):null,f=u.elevation-e.elevation;if(h)return{...h,y:h.y+me(u,p)+f};let m=p.type==="pool_filter"?p.h*.88:p.type==="pool_dosing"?.95:p.type==="pool_valve"?si:p.type==="pool_pump"?.2:.3;return{x:p.x,z:p.z,y:m+me(u,p)+f}}return null}}function Dr(o,e,t,n){let r=l=>{var h,f,m;let{kind:u,id:p}=Nt(l);return u==="port"?(m=(f=(h=t.pool)==null?void 0:h.ports)==null?void 0:f.find(b=>b.id===p))==null?void 0:m.kind:void 0},a=l=>r(l)==="drain",i=l=>r(l)==="inlet"||r(l)==="skimmer",s=l=>{if(l.length<2)return l;let u=l[0],p=Nr(t,[u[0],u[2]]);if(!p)return l;let h=[u[0]+p[0]*.35,u[1],u[2]+p[1]*.35],f=1;for(;f<l.length&&Math.hypot(l[f][0]-u[0],l[f][2]-u[2])<.01;)f++;let m=l.slice(f).map(_=>[..._]);for(let _=0;_<m.length-1;_++){let w=(m[_][0]-u[0])*p[0]+(m[_][2]-u[2])*p[1];if(w>=.349999)break;m[_][0]+=p[0]*(.35-w),m[_][2]+=p[1]*(.35-w)}let b=m[0]??l[l.length-1];return[u,h,[h[0],b[1],h[2]],...m]},c=l=>{if(l.length<2)return l;let u=l[0];if(!G([u[0],u[2]],t.points))return l;let p=rn(n,t)-.15,h=l.findIndex((_,w)=>w>0&&Math.hypot(_[0]-u[0],_[2]-u[2])>.01);if(h<0)return l;let f=l[h],m=[f[0],f[2]];for(let _=0;_<t.points.length;_++){let w=t.points[_],v=t.points[(_+1)%t.points.length],$=ru([u[0],u[2]],[f[0],f[2]],w,v);$&&(m=$)}let b=Math.hypot(m[0]-u[0],m[1]-u[2])>1e-6?[m[0]+(m[0]-u[0])*.02,m[1]+(m[1]-u[2])*.02]:m;return[u,[u[0],p,u[2]],[b[0],p,b[1]],[b[0],f[1],b[1]],...l.slice(h)]},d=o;return e.from&&a(e.from)&&(d=c(d)),e.to&&a(e.to)&&(d=c([...d].reverse()).reverse()),e.from&&i(e.from)&&(d=s(d)),e.to&&i(e.to)&&(d=s([...d].reverse()).reverse()),d}function Nr(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let a=0;a<t.length;a++){let i=t[a],s=t[(a+1)%t.length];n+=i[0]*s[1]-s[0]*i[1]}let r=null;for(let a=0;a<t.length;a++){let i=t[a],s=t[(a+1)%t.length],c=s[0]-i[0],d=s[1]-i[1],l=Math.hypot(c,d);if(l<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-i[0])*c+(e[1]-i[1])*d)/(l*l))),p=Math.hypot(i[0]+c*u-e[0],i[1]+d*u-e[1]),h=n>0?[d/l+0,-c/l+0]:[-d/l+0,c/l+0];(!r||p<r.d)&&(r={d:p,n:h})}return r?r.n:null}function ru(o,e,t,n){let r=[e[0]-o[0],e[1]-o[1]],a=[n[0]-t[0],n[1]-t[1]],i=r[0]*a[1]-r[1]*a[0];if(Math.abs(i)<1e-9)return null;let s=((t[0]-o[0])*a[1]-(t[1]-o[1])*a[0])/i,c=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/i;return s>=0&&s<=1&&c>=0&&c<=1?[o[0]+r[0]*s,o[1]+r[1]*s]:null}var Cl=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function au(o,e,t){var r,a;let n=Cl(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let i of e.floors)for(let s of i.rooms)if([s.name,s.area_id??"",s.area_id?((a=(r=o.areas)==null?void 0:r[s.area_id])==null?void 0:a.name)??"":""].filter(Boolean).map(Cl).includes(n))return{floorId:i.id,room:s};return null}function iu(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Fl(o,e){let t=[],n=new Map;for(let r of e.presence){let a=o.states[r.person];if(!a||!r.sensor||a.state!=="home"&&a.state!=="on")continue;let i=o.states[r.sensor];if(!i)continue;let s=au(o,e,i.state);if(!s)continue;let c=n.get(s.room.id)??0;n.set(s.room.id,c+1);let[d,l]=Pe(s.room.points),u=-Math.PI/2+.9+c*1.15,p=.75,h=a.attributes.friendly_name??r.person;t.push({id:r.person,name:h,initials:iu(h),picture:a.attributes.entity_picture??null,floorId:s.floorId,roomId:s.room.id,x:d+Math.cos(u)*p,z:l+Math.sin(u)*p})}return t}function Rl(o,e,t,n){let r=new Map,a=i=>{var s;return!!i&&((s=o.states[i])==null?void 0:s.state)==="on"};for(let i of e.floors){let s=new Set;for(let d of i.rooms)for(let l of Nn(o,de(o,d.area_id)))O(l)==="light"&&s.add(l);for(let d of i.placements)O(d.entity_id)==="light"&&s.add(d.entity_id);let c=i.openings.filter(d=>{let l=t.get(d.id);if(!l)return!1;if(d.type==="garage")return(Ue(o,l,"garage").cover??1)<.95;if(d.type==="door")return a(l.contact)||a(l.contact2??null);let u=Ue(o,l,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;r.set(i.id,{rooms:i.rooms.length,lightsOn:[...s].filter(d=>{var l;return((l=o.states[d])==null?void 0:l.state)==="on"}).length,open:c,persons:n.filter(d=>d.floorId===i.id).length})}return r}function Hl(o,e){let t=[e.rooms===1?C(o,"floor_rooms_one"):C(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(C(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(C(o,"floor_open",{n:e.open})),e.persons&&t.push(C(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}function jl(o,e,t,n=12,r=180){let a=Math.max(r,e),i=Math.max(r*.5625,t),s={cols:1,tile:Math.min(a,i*16/9)};for(let c=1;c<=Math.max(1,o);c++){let d=Math.ceil(o/c),l=(a-n*(c-1))/c,u=(i-n*(d-1))/d*16/9,p=Math.min(l,u);(p>s.tile||c===1)&&(s={cols:c,tile:p})}if(s.tile<r){let c=Math.max(1,Math.floor((a+n)/(r+n)));return{cols:Math.min(c,Math.max(1,o)),tile:r}}return{cols:s.cols,tile:Math.floor(s.tile)}}function qr(o,e,t){var g,M,T;let n=[...t.openings.values()].flatMap(x=>[x.cover,x.contact,x.tilt,x.contact2??null,x.tilt2??null,x.position??null,x.tiltAngle??null]),r=Yi(e),a=r.filter(x=>O(x)==="camera").flatMap(x=>Ge(o,x)),i=r.map(x=>kn(o,x)),s=e.energy,c=e.presence.flatMap(x=>[x.person,x.sensor]),d=e.floors.flatMap(x=>x.rooms.flatMap(S=>de(o,S.area_id).filter(F=>O(F)==="light"))),l=[...t.furniture.values()].flatMap(x=>[x.entity,x.power]),u=e.floors.flatMap(x=>x.furniture.flatMap(S=>[S.state_entity??null,S.state_entity2??null,S.color_entity??null])),p=e.floors.flatMap(x=>x.furniture.flatMap(S=>[S.door_left??null,S.door_right??null,S.soc??null,S.status??null,S.charge??null,S.export??null])),h=(((g=e.settings.roof)==null?void 0:g.windows)??[]).flatMap(x=>[x.cover,x.contact,x.tilt]).filter(x=>!!x&&x!=="none"),f=[...(((M=e.settings.roof)==null?void 0:M.solar)??[]).map(x=>x.entity),...(((T=e.settings.roof)==null?void 0:T.strings)??[]).map(x=>x.entity)].filter(x=>!!x&&x!=="none"),m=e.floors.flatMap(x=>x.furniture.filter(S=>S.type==="robot_vacuum").map(S=>{var F;return un(o,((F=t.furniture.get(S.id))==null?void 0:F.entity)??null,S.room_sensor)})),b=e.floors.flatMap(x=>x.furniture.flatMap(S=>(S.pictures??[]).flatMap(F=>[F.entity,...F.image.startsWith("camera:")?[F.image.slice(7)]:[]]))),_=t.heat?e.floors.flatMap(x=>x.rooms.flatMap(S=>de(o,S.area_id).filter(F=>F.startsWith("sensor.")))):[],w=[...fl(e.floors),...L("auto_pro")?ji(o,e.floors):[],...L("pool")?fs(o,e.floors):[]],v=En(o,e).map(x=>x.entity),$=L("household")?e.floors.flatMap(x=>x.furniture.flatMap(Ss)).filter(x=>x!=="none"):[],A=e.floors.flatMap(x=>x.furniture.flatMap(S=>S.type==="wall_switch"?Et(S):[])),P=Ot(o,t.weatherEntityId??e.settings.weather_entity),I=[...A,...r,...a,...n,...i,...l,...u,...p,...m,...h,...f,...b,s.grid,s.solar,s.battery,s.battery_soc,s.consumption,s.tariff,...c,...d,..._,...t.warnings,...w,...v,...$,P,"sun.sun"];return[...new Set(I.filter(x=>!!x))]}function Ol(o,e){var t;return String(e&&((t=o.states[e])==null?void 0:t.attributes.unit_of_measurement)||"m\xB3")}function lu(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${ne(o,e*1e3,0)} l`:`${ne(o,e,e<10?2:0)} ${t}`}var cu=12e4,Vl={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},du='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',uu='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>',pu=[.35,.95,1];function Ll(o,e,t){var n;return((n=o.rooms.find(r=>r.points.length>=3&&G([e,t],r.points)))==null?void 0:n.id)??null}function hu(o,e){var n;let t=e.action==="more_info"?e.target:(n=e.data)==null?void 0:n.entity_id;return typeof t=="string"&&De(o.states[t])}function fu(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function mu(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}var Wr=class extends ge{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},proxmoxWall:{attribute:!1},_pveFilter:{state:!0},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;poolTarget=new Map;volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;resizeObs=null;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];finished=new ro;fridgeTimer;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.heatMode="none",this.theme="neon",this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this._alerts=[],this._household=[],this._hhFolded=fu("neonplan3d.hhFolded"),this._binInfo=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.proxmoxWall=!1,this._pveFilter="all",this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible)}onVisible=()=>{var e;document.hidden||(e=this.holoRefetch)==null||e.call(this)};disconnectedCallback(){var e,t,n,r,a;super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),(e=this.pets)==null||e.dispose(),this.pets=null,this.petsFor=null,(t=this.ghost)==null||t.dispose(),this.ghost=null,(n=this.unlistenReplay)==null||n.call(this),this.unlistenReplay=null,(r=this.resizeObs)==null||r.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),(a=this.viewer)==null||a.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this.renderRoot.addEventListener("wheel",e=>{var r,a;let t=e;if(!((a=(r=t.target)==null?void 0:r.closest)!=null&&a.call(r,".fp3d-holo")))return;let n=this.renderRoot.querySelector("canvas");n&&(t.preventDefault(),n.dispatchEvent(new WheelEvent("wheel",t)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{var r;let n=(((r=t[0])==null?void 0:r.contentRect.width)??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Pn();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",n=>{var r,a;this._central&&!((a=(r=n.target)==null?void 0:r.closest)!=null&&a.call(r,".fp3d-central, .fp3d-central-btn"))&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,r)=>this.fire("room-tap",{floorId:n,roomId:r}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?C(this.hass,"floor_rooms_one"):C(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,r,a)=>this.onDeviceTap(n,r,a),onDeviceHold:(n,r,a)=>this.onDeviceHold(n,r,a),onRoomDoubleTap:(n,r)=>this.onRoomDoubleTap(n,r),onDeviceSwipe:(n,r,a,i,s)=>this.onDeviceSwipe(n,r,a,i,s),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,r,a)=>this.fire("furniture-move",{id:n,x:r,z:a}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,r,a)=>this.fire("device-move",{id:n,x:r,z:a}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setTheme(this.theme),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((n,r,a,i,s,c)=>this.placeHolo(n,r,a,i,s,c)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this._low=this.viewer.low,this.viewer.setPacks([...Oo()]),this.shownPacks=xt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&ti(this.building??null),e.has("hass")&&this.hass&&ys(ws(this.hass))}updated(e){var a,i;e.has("hass")&&((a=this.live)!=null&&a.el)&&(this.live.el.hass=this.hass),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==xt()&&(this.shownPacks=xt(),t.setPacks([...Oo()]),this.hass&&this.building&&t.setParked(Ar(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let s=JSON.stringify(this.startViewOf()),c=this.shownStartView!==void 0&&this.shownStartView!==s;this.shownStartView=s,t.setStartView(this.startViewOf()),t.setBuilding(this.building),c&&this.floorId===null&&t.resetView()}(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(s=>e.has(s)),r=this.replayTicked&&!!this.replay;this.replayTicked=!1,(n||e.has("hass")||r)&&this.syncDevices(n,r&&(this.trail||this.detecting)),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.theme),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,(i=this.replay)==null||i.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e,t=!1){var Zr,ea,ta,na,oa,ra,aa,ia,sa,la,ca,da;let n=this.viewer,r=this.building;if(!n||!r||!this.hass)return;let a=this.hass;(e||!this.openingLinks||this.linkedRegistry!==a.entities)&&(this.openingLinks=It(a,r.floors),Ui(Fi(a,r.floors)),this.furnitureLinks=st(a,r.floors),this.linkedRegistry=a.entities,this.findIndex=null,this.alertSrc=this.alerts?vr(a,r,this.weatherEntityId):null,this.watchHousehold(a,r),this.watched=qr(a,r,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?yr(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),e=!0);let i=e||t||this.watched.some(E=>this.shownStates.get(E)!==a.states[E]),s=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=((Zr=this.replay)==null?void 0:Zr.seek)??0,this.seenT=((ea=this.replay)==null?void 0:ea.t)??0,!i)return;let c=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(E=>[E,a.states[E]]));let d=Zs(a,r),l=Ki(a,r),u=this.furnitureMarkers(a,r,new Set(l.map(E=>E.id)),new Set(d.map(E=>E.powerEntity)));d.push(...u.consumers);let p=el(a,r,d,Dt(r,E=>{var z,R;return((R=(z=this.furnitureLinks)==null?void 0:z.get(E.id))==null?void 0:R.power)??null})),h=new Map(d.filter(E=>E.id!==E.powerEntity).map(E=>[E.id,E.power]));this.confirmSet=Tt(a,r.floors);let f=this.trail?this.trailNow(a,r):[],m=L("camera_cockpit")&&!this.dimmed?this.detectionPins(a,l):[];this.detecting=m.length>0;let b=L("energy_pro"),_=new Set(L("auto_pro")?r.floors.flatMap(E=>E.furniture.filter(z=>z.type==="parking"&&z.car&&Mn(a,z)).map(z=>z.id)):[]);n.setDevices([...[...l,...u.markers].map(E=>{let z=E.show==="no_power"||"energyDevice"in E&&E.energyDevice?null:h.get(E.id)??null,R={...E,power:z,powerText:z===null?void 0:ie(a,z),effect:this.dimmed?!1:E.effect},K=E.ownName&&(E.showName||this.markerNames)?E.ownName:"",H=L("sound")&&this.mediaCardUp(a,E.id)||L("auto_pro")&&!!E.furnitureId&&_.has(E.furnitureId);return{...R,pin:this.showPin(R)&&!H,full:E.show==="always",caption:K}}),...(b&&(this.flows??this._flows)&&!this.dimmed&&p.grid!==null?[this.gridPin(a,r,p.grid)]:[]).filter(E=>!!E),...m,...f.map((E,z)=>({id:`trail:${z}`,floorId:E.floorId,roomId:null,x:E.x,z:E.z,y:.3+.4*f.slice(0,z).filter(R=>R.entity===E.entity).length,icon:vl,name:Q(a,E.entity),text:fo(a,E.time),active:!1,unavailable:!1,glow:null,pin:!0}))]),n.setTrail(f,this.replay?this.robotPaths(a,r):[]),n.setPickTargets(u.targets,this.openingTargets()),n.setScreens(u.screens),n.setFridgeDoors(Xo(a,r.floors)),n.setAwnings(Ri(a,r.floors)),n.setRobots(this.robotInfos(a,r));let w=new Map;for(let E of((ta=r.settings.roof)==null?void 0:ta.windows)??[]){let z=D=>D&&D!=="none"?D:null,R=Ue(a,{cover:z(E.cover),contact:z(E.contact),tilt:z(E.tilt)},"window"),K=z(E.window)?a.states[z(E.window)]:void 0,H=R.open;if(K&&!Y(K)){let D=K.attributes.current_position;H=typeof D=="number"?Math.min(1,Math.max(0,D/100)):K.state==="open"||K.state==="opening"?1:0}w.set(E.id,{open:H,tilt:R.tilt,cover:R.cover??0})}n.setRoofWindows(w),n.setParked(Ar(a,r));let v=new Map(r.floors.flatMap(E=>E.openings.map(z=>[z.id,z.type]))),$=new Map([...this.openingLinks].map(([E,z])=>[E,Ue(a,z,v.get(E))]));n.setOpeningStates($,s),this.setAlerts(this.alertSrc?Ws(a,r,this.alertSrc,this.openingLinks):[]),clearTimeout(this.fridgeTimer);let A=L("household")&&!this.replay?Cs(r.floors.flatMap(E=>E.furniture),a):null;A!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),A+500));let P=[...l,...u.markers].map(E=>`${E.id}:${E.glow?`${E.glow.level.toFixed(1)}/${E.glow.color.map(z=>z.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...$].map(([E,z])=>`${E}:${z.open}:${z.cover===null?"-":z.cover.toFixed(1)}`).join(";");if(P!==this.thumbSig){let E=this.thumbSig==="";this.thumbSig=P,E||this.scheduleThumbs(1500)}let I=r.floors.flatMap(E=>E.furniture.filter(z=>z.type==="home_battery").map(z=>({floorId:E.id,x:z.x,z:z.z})))[0]??(r.energy.battery?r.floors.flatMap(E=>E.placements.filter(z=>z.entity_id===r.energy.battery).map(z=>({floorId:E.id,x:z.x,z:z.z})))[0]:null),g=b?cl(a,r,p.solar):null,M=r.settings.roof.hologram??Le,T=[...r.settings.roof.solar??[]].sort((E,z)=>z.rows*z.cols-E.rows*E.cols),x=r.settings.roof.strings??[],S=E=>{var z;return(E.string?(z=x.find(R=>R.id===E.string))==null?void 0:z.inverter:null)??null},F=M.plant_floor?"all":"house",W=(E,z,R,K)=>{var Ee,Kt;let H=dt(r,E);if(!H)return null;let[D,se]=ut(H,E),Z=E.u+D/2+z,ee=E.v+se/2+R,pe=[H.o[0]+H.eu[0]*Z+H.es[0]*ee,H.o[1]+H.eu[1]*Z+H.es[1]*ee,H.o[2]+H.eu[2]*Z+H.es[2]*ee],he=((Ee=H.wall)==null?void 0:Ee.floorId)??(H.unbounded?((Kt=r.floors.find(Tn=>Tn.elevation===Math.min(...r.floors.map(et=>et.elevation))))==null?void 0:Kt.id)??r.floors[0].id:[...r.floors].sort((Tn,et)=>et.elevation-Tn.elevation)[0].id);return{p:[pe[0]+H.n[0]*.05,pe[1]+H.n[1]*.05,pe[2]+H.n[2]*.05],n:[H.n[0],H.n[1],H.n[2]],floorId:he,size:K,roof:!0,views:F}},B=[],j=[],q=p.grid!==null||p.battery!==null||p.solar!==null,oe=M.place==="free"&&Number.isFinite(M.x)&&Number.isFinite(M.z),V=b&&p.solar!==null&&!oe?T.find(E=>E.id===M.field)??T[0]:void 0,U=V?S(V):null,te=!!V&&!!U&&!T.some(E=>E.id!==V.id&&S(E)===U)&&M.right===0&&M.up===0,ue=(()=>{if(!te||!V)return 0;let E=dt(r,V);return E?ut(E,V)[0]/2+1.2:0})(),ke=V?W(V,M.right+ue,M.up,M.size):null,Me=this.devicePowers(a,r),be=b&&p.solar!==null?r.energy.solar?[r.energy.solar]:Dt(r,E=>{var z,R;return((R=(z=this.furnitureLinks)==null?void 0:z.get(E.id))==null?void 0:R.power)??null}).solar:[];if(ke)B.push(ke),j.push({kind:"main",name:C(a,"holo_title"),w:null,dayIds:be,battery:null});else if(b&&q&&oe){let E=0,z=0,R=0,K=1/0,H=r.floors[0];for(let ee of r.floors){ee.rooms.length&&(K=Math.min(K,ee.elevation)),ee.rooms.length&&(!H.rooms.length||ee.elevation+ee.height>H.elevation+H.height)&&(H=ee);for(let pe of ee.rooms)for(let[he,Ee]of pe.points)E+=he,z+=Ee,R++}R&&(E/=R,z/=R);let D=M.x-E,se=M.z-z,Z=Math.hypot(D,se);B.push({p:[M.x,(Number.isFinite(K)?K:0)+(M.height??3),M.z],n:Z>.01?[D/Z,0,se/Z]:[1,0,0],floorId:H.id,size:M.size,roof:!0,views:F}),j.push({kind:"main",name:C(a,"holo_title"),w:null,dayIds:be,battery:null})}else if(b&&q&&r.floors.some(E=>E.rooms.length)){let E=-1/0,z=1/0,R=-1/0,K=0,H=r.floors[0];for(let D of r.floors){for(let se of D.rooms)for(let[Z,ee]of se.points)E=Math.max(E,Z),z=Math.min(z,ee),R=Math.max(R,ee);D.rooms.length&&D.elevation+D.height>K&&(K=D.elevation+D.height,H=D)}B.push({p:[E+.6,K+.4,(z+R)/2],n:[1,0,0],floorId:H.id,size:M.size,roof:!0,views:F}),j.push({kind:"main",name:C(a,"holo_title"),w:null,dayIds:be,battery:null})}if(b&&p.solar!==null){let E=new Set;for(let z of r.floors)for(let R of z.furniture.filter(K=>K.type==="inverter")){if(R.plant_card===!1||E.has(R.id))continue;E.add(R.id);let K=T.filter(pe=>S(pe)===R.id),H=(V&&R.id===U?K.find(pe=>pe.id!==V.id):null)??K[0],D=((oa=(na=this.furnitureLinks)==null?void 0:na.get(R.id))==null?void 0:oa.power)??null,se=H?W(H,R.plant_right??0,R.plant_up??0,M.size*.85):null;if(!se||!D)continue;let Z=z.furniture.filter(pe=>pe.type==="home_battery").sort((pe,he)=>Math.hypot(pe.x-R.x,pe.z-R.z)-Math.hypot(he.x-R.x,he.z-R.z))[0],ee=Z!=null&&Z.soc&&Z.soc!=="none"?Number((ra=a.states[Z.soc])==null?void 0:ra.state):NaN;B.push(se),j.push({kind:"plant",name:R.name||ye(a,R.type),w:Math.max(0,le(a.states[D])??0),dayIds:[D],battery:Z?{soc:Number.isFinite(ee)?ee:null,w:Me.get(Z.id)??null}:null})}}let $e=M.device_house===!1?"floor":"all";if(b)for(let E of r.floors){for(let z of E.furniture){if(!z.holo)continue;let R=((ia=(aa=this.furnitureLinks)==null?void 0:aa.get(z.id))==null?void 0:ia.power)??null,K=d.find(D=>D.id===z.id);if(!R&&!K)continue;let H=E.elevation+me(E,z)+z.h;B.push({p:[z.x,H+.1,z.z],n:[0,1,0],floorId:E.id,size:M.size*.7,roof:!1,views:$e,room:Ll(E,z.x,z.z)}),j.push({kind:"device",name:z.name||ye(a,z.type),w:(K==null?void 0:K.power)??(R?le(a.states[R]):null),dayIds:R?[R]:[],battery:null})}for(let z of E.placements){if(!z.holo)continue;let R=kn(a,z.entity_id);if(!R)continue;let K=E.elevation+(z.y??.4)+.2;B.push({p:[z.x,K,z.z],n:[0,1,0],floorId:E.id,size:M.size*.7,roof:!1,views:$e,room:Ll(E,z.x,z.z)}),j.push({kind:"device",name:z.name||Q(a,z.entity_id),w:le(a.states[R]),dayIds:[R],battery:null})}}let _e=[];if(L("sound")){let E=new Set,z=(r.settings.roof.hologram??Le).size,R=(H,D,se,Z,ee,pe)=>{let he=a.states[D];if(!he||O(D)!=="media")return;if(E.has(D)){let tt=_e.find(yo=>yo.id===D);tt&&_e.push({...tt,id:`${D}#${_e.filter(yo=>yo.id.startsWith(`${D}#`)).length+2}`,floorId:H.id,x:se,z:Z,members:[D]});return}E.add(D);let Ee=this.ro?void 0:this.mediaGrace.get(D),Kt=[he.attributes.media_title,he.attributes.app_name,he.attributes.source].find(tt=>typeof tt=="string"&&!!tt.trim())??"";if(!(!Y(he)&&(he.state==="playing"||he.state==="paused"&&!!Kt||he.state==="on"&&!!he.attributes.source))){Ee&&Ee.until>Date.now()?(_e.push({...Ee.source,playing:!1,level:0}),B.push(Ee.anchor),j.push({...Ee.card,media:{...Ee.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,Ee.until-Date.now()+100))):Y(he)||(this.mediaGrace.delete(D),_e.push({id:D,floorId:H.id,x:se,z:Z,level:0,playing:!1,members:[]}));return}let et=he.state==="playing",je=he.attributes,ua=typeof je.volume_level=="number"?Math.min(1,Math.max(0,je.volume_level)):.5,Ul=Array.isArray(je.group_members)?je.group_members.filter(tt=>tt!==D):[];_e.push({id:D,floorId:H.id,x:se,z:Z,level:et?.3+.7*ua:0,playing:et,members:Ul});let Kl=Kt||C(a,"holo_media_playing"),pa={p:[se,H.elevation+ee+.12,Z],n:[0,1,0],floorId:H.id,size:z*.7,roof:!1,views:"all"},ha={kind:"media",name:pe,w:null,dayIds:[],battery:null,media:{id:D,title:Kl,artist:typeof je.media_artist=="string"?je.media_artist:typeof je.media_album_name=="string"?je.media_album_name:"",picture:typeof je.entity_picture=="string"?je.entity_picture:null,volume:Math.round(ua*100),playing:et}};B.push(pa),j.push(ha),this.ro||this.mediaGrace.set(D,{until:Date.now()+45e3,card:ha,source:_e[_e.length-1],anchor:pa})},K=(H,D)=>{var se,Z;for(let ee of H.furniture){if((ee.entity!=null&&ee.entity!=="none")!==D)continue;let pe=(Z=(se=this.furnitureLinks)==null?void 0:se.get(ee.id))==null?void 0:Z.entity;pe&&R(H,pe,ee.x,ee.z,me(H,ee)+ee.h,ee.name||ye(a,ee.type))}};for(let H of r.floors)K(H,!0);for(let H of r.floors)for(let D of H.placements)R(H,D.entity_id,D.x,D.z,D.y??1.1,D.name||Q(a,D.entity_id));for(let H of r.floors)K(H,!1)}if(L("auto_pro")){let E=(r.settings.roof.hologram??Le).size;for(let z of r.floors)for(let R of z.furniture){if(R.type!=="parking"||!R.car)continue;let K=Mn(a,R);if(!K)continue;let H=Bn(a,R);if(H.soc===null&&H.range===null&&H.locked===null&&H.climateOn===null)continue;let D=ml(R,K),se=me(z,R)+((D==null?void 0:D.h)??1.6);B.push({p:[R.x,z.elevation+se+.25,R.z],n:[0,1,0],floorId:z.id,size:E*.7,roof:!1,views:"all"});let Z=H.entities;j.push({kind:"car",name:R.name||ye(a,K),w:null,dayIds:[],battery:null,car:{spot:R.id,soc:H.soc,range:H.range,rangeUnit:H.rangeUnit,chargingW:H.chargingW,charging:H.charging,locked:H.locked,climateOn:H.climateOn,lock:Z.lock,climate:Z.climate,charge:Z.charging&&/^(switch|input_boolean)\./.test(Z.charging)?Z.charging:null}})}}if(L("pool")){let E=(r.settings.roof.hologram??Le).size,z=[];for(let{floor:R,area:K}of ht(r.floors)){let H=pt(a,Vt(K.pool,r.floors));if(!Object.values(H.entities).some(Boolean))continue;let D=ms(H),se=an(R,K);z.push({id:K.id,floorId:R.id,points:K.points,y:se,color:D.color,level:this.dimmed?D.level*.4:D.level,floorY:rn(R,K),flow:!!((sa=H.pump)!=null&&sa.on),heat:!!((la=H.heater)!=null&&la.heating),cover:((ca=H.cover)==null?void 0:ca.closed)??0});let[Z,ee]=Pe(K.points);B.push({p:[Z,R.elevation+Math.max(se,0)+(K.above?.6:1.1),ee],n:[0,1,0],floorId:R.id,size:E*.7,roof:!1,views:"all"}),j.push({kind:"pool",name:C(a,"out_pool"),w:null,dayIds:[],battery:null,pool:{area:K.id,state:H}})}n.setPools(z)}else n.setPools([]);if(L("household")){let E=(r.settings.roof.hologram??Le).size;for(let z of this.binHolos){let R=r.floors.find(K=>K.id===z.floorId);R&&(B.push({p:[z.x,R.elevation+z.y+.04,z.z],n:[0,1,0],floorId:z.floorId,size:E*.75,roof:!1,views:"all"}),j.push({kind:"bin",name:z.name,w:null,dayIds:[],battery:null,bin:{color:z.color,when:z.when,soon:!!z.soon}}))}}n.setSound(_e);let Wt=this._walk?this.walkRoomPts:null,In=B.map(E=>!this._walk||!!Wt&&G([E.p[0],E.p[2]],Wt)),bt=j.filter((E,z)=>In[z]);n.setAnchors(B.filter((E,z)=>In[z])),JSON.stringify(bt)!==JSON.stringify(this._holos)&&(this._holos=bt),n.setSolarLevels(g&&!this.dimmed?ll(r,g):new Map);let N=!b||!(this.flows??this._flows)||this.dimmed?[]:nl({building:r,consumers:d,summary:p,battery:I??null,fieldPower:g,devicePower:this.devicePowers(a,r)}).map(E=>({floorId:E.floorId,a:E.a,b:E.b,dist:E.dist,power:E.power,color:dl(E.kind,p)})),re=this.poolPipes(a,r);n.setFlows(this.dimmed?N:[...N,...re.flows]),n.setPipes(re.tubes);let Te=[];n.setPersons(Te);let _t=Rl(a,r,this.openingLinks,Te);n.setFloorInfo(new Map([..._t].map(([E,z])=>[E,Hl(a,z)])));let Se=(da=a.states["sun.sun"])==null?void 0:da.attributes,vt=typeof(Se==null?void 0:Se.elevation)=="number"?Se.elevation:null;n.setSun(vt!==null&&typeof(Se==null?void 0:Se.azimuth)=="number"?{elevation:vt,azimuth:Se.azimuth}:null);let Bt=this.weather&&!this.dimmed&&L("weather")?us(a,Ot(a,this.weatherEntityId??r.settings.weather_entity),r.settings.rain_entity):null,ze=Bt?ps(Bt,r.settings.weather_effects):null;this.cloud=(ze==null?void 0:ze.cloud)??0,this._sky=(vt===null?0:Math.min(1,Math.max(0,(vt+4)/16)))*(1-.45*this.cloud);let vo=ze?ze.sky:(r.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&L("weather")?{...ze??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:vo}:null),this.watchLightning(!!(ze!=null&&ze.lightning)),this.applyTint();let Yr=p.grid!==null||p.solar!==null||p.battery!==null||p.tariff!==null?p:null;JSON.stringify(Yr)!==JSON.stringify(this._energy)&&(this._energy=Yr);let Qr=d.some(E=>E.wallbox)?d.filter(E=>E.wallbox).reduce((E,z)=>E+z.power,0):null,Jr=r.floors.flatMap(E=>E.furniture.filter(z=>z.type==="inverter")).map(E=>{var K,H;let z=(H=(K=this.furnitureLinks)==null?void 0:K.get(E.id))==null?void 0:H.power,R=z?le(a.states[z]):null;return R===null?null:{name:E.name||ye(a,E.type),w:Math.max(0,R)}}).filter(E=>!!E);JSON.stringify(Jr)!==JSON.stringify(this._plants)&&(this._plants=Jr),Qr!==this._wallboxW&&(this._wallboxW=Qr),this.watchSolarDay([...new Set(j.flatMap(E=>E.dayIds))]);let Xr=L("energy_pro");this.watchMeters(Xr?r.energy.gas??null:null,Xr?r.energy.water??null:null),c&&(this.syncMs=this.syncMs*.8+(performance.now()-c)*.2)}listenReplay(){var t;(t=this.unlistenReplay)==null||t.call(this),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{var n;this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&((n=this.viewer)==null||n.flashDevices(e.pulses)),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){var i,s,c,d,l,u;let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.findIndex??=Ir(t,n)).find(p=>p.entity===e);if(r){this.goTo(r);return}let a=((s=(i=t.entities)==null?void 0:i[e])==null?void 0:s.area_id)??((u=(l=t.devices)==null?void 0:l[((d=(c=t.entities)==null?void 0:c[e])==null?void 0:d.device_id)??""])==null?void 0:u.area_id)??null;for(let p of n.floors){let h=p.openings.find(_=>{var v;let w=(v=this.openingLinks)==null?void 0:v.get(_.id);return!!w&&[w.contact,w.tilt,w.contact2,w.tilt2,w.cover].includes(e)}),f=p.rooms.find(_=>_.points.length>=3&&(h?_.id===h.room_id:!!a&&_.area_id===a));if(!f)continue;let[m,b]=Pe(f.points);this.goTo({kind:"device",name:f.name,where:"",floorId:p.id,roomId:f.id,entity:e,icon:null,x:m,z:b,y:1});return}}now(){var e;return((e=this.replay)==null?void 0:e.t)??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,r=n?It(t,e.floors):this.openingLinks,a=n?st(t,e.floors):this.furnitureLinks,i=yr(vr(t,e,this.weatherEntityId)),s=qr(t,e,{openings:r,furniture:a,heat:!0,warnings:i,weatherEntityId:this.weatherEntityId}),c=L("auto_pro")?e.floors.flatMap(d=>d.furniture.filter(l=>l.type==="parking").flatMap(l=>[typeof l.entity=="string"?l.entity:null,l.car?Wn(t,l).tracker:null]).filter(l=>!!l&&l.startsWith("device_tracker."))):[];return{entities:s,openings:[...r],furniture:[...a],low:this._low,cars:c,energy:L("energy_pro"),auto:L("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return k;let t=this.hass,n=t.states[e.entity],r=ve(t,n),a=O(e.entity)==="light"&&(n==null?void 0:n.state)==="on"&&r.endsWith("%")?`${C(t,"state_on")} \xB7 ${r}`:r,i=n!=null&&n.last_changed?C(t,"tt_since",{time:fo(t,Date.parse(n.last_changed))}):"";return y`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${Q(t,e.entity)}</span>
      <b>${i?`${a} \xB7 ${i}`:a}</b>
    </div>`}devicePowers(e,t){var r,a;let n=new Map;for(let i of t.floors)for(let s of i.furniture){if(s.type!=="inverter"&&s.type!=="home_battery")continue;let c=(a=(r=this.furnitureLinks)==null?void 0:r.get(s.id))==null?void 0:a.power,d=s.type==="home_battery"&&s.charge&&s.charge!=="none"?le(e.states[s.charge]):null,l=c?le(e.states[c],s.type==="home_battery"&&t.energy.battery_invert&&d===null):null;l!==null&&d!==null?l=Math.max(0,l)-Math.max(0,d):l===null&&d!==null&&(l=-Math.max(0,d)),l!==null&&n.set(s.id,l)}return n}detectionPins(e,t){var a,i;let n=[],r=new Set(((a=this.building)==null?void 0:a.floors.flatMap(s=>s.placements.filter(c=>c.detect_pins===!1).map(c=>c.entity_id)))??[]);for(let s of t){if(!((i=s.model)!=null&&i.startsWith("camera"))||r.has(s.id))continue;let c=this.now(),d=Ge(e,s.id).filter(m=>{let b=e.states[m];return b?b.state==="on"?!0:b.state==="off"&&!!b.last_changed&&c-Date.parse(b.last_changed)<cu:!1}),l=new Map;for(let m of d){let b=Gi(e,m);l.has(b)||l.set(b,m)}l.size>1&&l.delete("motion");let u=(s.rotation??0)*Math.PI/180,p=[-Math.sin(u),Math.cos(u)],h=s.model==="camera_ceiling",f=0;for(let[m,b]of l){let _=e.states[b],w=_!=null&&_.last_changed?fo(e,Date.parse(_.last_changed)):"";n.push({id:`detect:${b}`,floorId:s.floorId,roomId:s.roomId,x:s.x+(h?0:p[0]*1.1),z:s.z+(h?0:p[1]*1.1),y:1.4+.4*f++,icon:Vl[m]??Vl.motion,name:Q(e,b),text:`${C(e,`detect_${m}`)}${w?` \xB7 ${w}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let r=Mr(t);if(!r)return null;let a=Math.abs(n)<5,i=t.settings.outage_entity;return i&&no(e.states[i])?{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:uu,name:C(e,"holo_grid"),text:C(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:du,name:C(e,"holo_grid"),text:a?ie(e,0):`${C(e,n<0?"energy_grid_export":"energy_grid_import")} ${ie(e,Math.abs(n))}`,active:!a,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(i=>!!i),r=this.replay?"":n.join(",");if(r===this.meterKey)return;if(this.meterKey=r,clearInterval(this.meterTimer),this.meterTimer=void 0,!r){this._meters=null;return}let a=async()=>{if(!this.hass||document.hidden)return;let i=await Xs(this.hass,n);this.meterKey===r&&i&&(this._meters={gas:e?i.get(e)??null:null,water:t?i.get(t)??null:null})};a(),this.meterTimer=setInterval(()=>{a()},3e5)}poolPipes(e,t){var c,d,l,u,p;let n=L("pool"),a=[...new Map(t.floors.flatMap(h=>h.furniture.filter(f=>sn.includes(f.type)).map(f=>[f.id,f]))).values()].map(h=>({id:h.id,type:h.type,open:h.valve_open!==!1,valve:h.valve_position??null})),i=[],s=[];for(let{floor:h,area:f}of ht(t.floors)){let m=f.pool;if(!((c=m.pipes)!=null&&c.length)&&!((d=m.joints)!=null&&d.length))continue;let b=pt(e,Vt(m,t.floors)),_=m.ports??[],w=Il({pipes:m.pipes??[],ports:_,devices:a,pumpOn:n&&!!((l=b.pump)!=null&&l.on),heaterOn:!!((u=b.heater)!=null&&u.on),heating:!!((p=b.heater)!=null&&p.heating)}),v=zl(t,h,f),$=(A,P)=>Dr(A,P,f,h);i.push(...Tl(m.pipes??[],w,v,$));for(let A of _){if(A.kind!=="inlet")continue;let P=v(`port:${A.id}`),I=P&&Nr(f,[P.x,P.z]);if(!P||!I)continue;let g=(m.pipes??[]).find(T=>T.to===`port:${A.id}`),M=g?w.get(g.id):void 0;s.push({floorId:h.id,points:[[P.x+I[0]*.03,P.y,P.z+I[1]*.03],[P.x-I[0]*.09,P.y,P.z-I[1]*.09]],radius:.035,water:M!=null&&M.active?bo(M):null,fittings:[]})}for(let A of m.joints??[]){if(A.kind!=="wall"&&A.kind!=="floor")continue;let P=v(`joint:${A.id}:inside`),I=v(`joint:${A.id}:outside`),g=A.kind==="floor"?.03:P.y;s.push({floorId:h.id,points:[[P.x,g,P.z],[I.x,I.y,I.z]],radius:.05,water:null,fittings:[]})}for(let A of m.pipes??[]){let P=Dr(An(A,v),A,f,h);if(P.length<2)continue;let I=w.get(A.id),g=[],M=jr(P);for(let[T,x]of[[A.from,.04],[A.to,M-.04]]){let S=T.startsWith("dev:")||T.startsWith("joint:")?go(P,x):null;S&&g.push({kind:"sleeve",p:S.p,dir:S.dir})}for(let T of A.fittings??[]){let x=go(P,T.at);x&&g.push({kind:T.kind,p:x.p,dir:x.dir,open:T.open!==!1})}s.push({floorId:A.floor_id,points:P,radius:.025,water:I!=null&&I.active?bo(I):null,fittings:g})}}return{flows:i,tubes:s}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let a=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(a===this.holoIds)return;this.holoIds=a,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let r=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let a=await il(this.hass,e);this.holoIds===n&&(this._rows=a)};r(),this.holoTimer=setInterval(()=>{r()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&r()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,r,a,i){var M,T,x;(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let s=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),c=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),d=((M=this._holos[e])==null?void 0:M.kind)==="main";if(!s){d&&this._holoOn&&(this._holoOn=!1);return}d&&r!==this._holoOn&&(this._holoOn=r);let l=this._holos[e],u=(((T=this.building)==null?void 0:T.settings.roof.hologram)??Le).device_min_w??0;(l==null?void 0:l.kind)==="device"&&u>0&&(l.w??0)<u&&(r=!1);let p=!r;if(s.hidden!==p&&(s.hidden=p),c&&c.hasAttribute("hidden")!==p&&c.toggleAttribute("hidden",p),!r)return;if((l==null?void 0:l.kind)==="bin"){let S=a*.8;s.style.transform=`translate(${t.toFixed(1)}px, ${n.toFixed(1)}px) scale(${S.toFixed(3)}) translate(-50%, -100%)`,c&&!c.hasAttribute("hidden")&&c.toggleAttribute("hidden",!0);return}let h=a*.8,f=34*h,m=46*h,b=t+(i?f:-f),_=n-m,w=this.holoSizes.get(e),v=performance.now();(!w||v-w.at>2e3)&&(w={w:s.offsetWidth||184,h:s.offsetHeight||90,at:v},this.holoSizes.set(e,w));let $=w.w*h,A=w.h*h,P=i?b:b-$,I=P+$;for(let S=0;S<6;S++){let F=this.holoBoxes.find(W=>P<W.x1+4&&I>W.x0-4&&_-A<W.y1+4&&_>W.y0-4);if(!F)break;_=F.y0-6}this.holoBoxes.push({i:e,x0:P,x1:I,y0:_-A,y1:_});let g=i||(((x=this.building)==null?void 0:x.settings.roof.hologram)??Le).mirror!==!1;if(s.style.transform=g?`translate(${b.toFixed(1)}px, ${_.toFixed(1)}px) scale(${(i?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${P.toFixed(1)}px, ${_.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,c){let S=c.firstElementChild,F=c.lastElementChild;S==null||S.setAttribute("x1",t.toFixed(1)),S==null||S.setAttribute("y1",n.toFixed(1)),S==null||S.setAttribute("x2",b.toFixed(1)),S==null||S.setAttribute("y2",_.toFixed(1)),F==null||F.setAttribute("cx",t.toFixed(1)),F==null||F.setAttribute("cy",n.toFixed(1))}}renderHologram(){var a,i;let e=this._energy,t=()=>this._holos.map((s,c)=>s.kind==="bin"?this.renderBinCard(s,c):k);if(!(L("energy_pro")||L("sound")||L("auto_pro")||L("pool")||L("household"))||this.roomId&&!(((a=this.building)==null?void 0:a.settings.roof.hologram)??Le).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return L("household")?t():k;let n=this.floorId===null||(((i=this.building)==null?void 0:i.floors.length)??0)<=1,r=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&n;return this._holos.map((s,c)=>s.kind==="pool"?this.renderPoolCard(s,c):s.kind==="bin"?this.renderBinCard(s,c):s.kind==="car"?this.renderCarCard(s,c):s.kind==="media"?this.renderMediaCard(s,c):s.kind==="device"?this.renderDeviceCard(s,c):r?this.renderHoloCard(s,c,e):k)}renderBinCard(e,t){let n=e.bin;return y`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${`${e.name}: ${n.when}`} style="--bin:${n.color}">
      <div class="fp3d-holo-body"><b>${n.when}</b><span>${e.name}</span></div>
    </div>`}renderCarCard(e,t){let n=this.hass,r=f=>C(n,f),a=e.car,i=!this.mediaFolded.has(a.spot),s=()=>{this.mediaFolded.has(a.spot)?this.mediaFolded.delete(a.spot):this.mediaFolded.add(a.spot),this.requestUpdate()},c=(f,m,b)=>{n.callService(f,m,{entity_id:b})},d=(f,m)=>f.startsWith("climate.")?c("climate",m?"turn_on":"turn_off",f):c("homeassistant",m?"turn_on":"turn_off",f),l=()=>{if(!a.lock)return;let f=a.lock.startsWith("lock.");if(a.locked){if(!confirm(r("car_unlock_confirm")))return;f?c("lock","unlock",a.lock):c("homeassistant","turn_off",a.lock)}else f?c("lock","lock",a.lock):c("homeassistant","turn_on",a.lock)},u=a.soc===null?"#37e0ff":a.soc>=50?"#4dff80":a.soc>=20?"#ffcc40":"#ff4d40",p=!!a.lock&&/^(lock|input_boolean|switch)\./.test(a.lock),h=!!a.climate&&/^(climate|switch|input_boolean)\./.test(a.climate);return y`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${a.charging?`\u26A1 ${r("car_charging_short")}`:a.locked===null?"":a.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${a.soc!==null?`${Math.round(a.soc)} %`:"\u2013"}</b>
            <span>${a.range!==null?`${ne(n,a.range,0)} ${a.rangeUnit}`:""}${a.charging&&a.chargingW?` \xB7 ${ie(n,a.chargingW)}`:""}</span>
          </div>
          ${a.soc!==null?y`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,a.soc))}%;background:${u}"></i></div>`:k}
          ${i&&!this.ro&&(p||h||a.charge)?y`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?y`<button title=${a.locked?r("car_unlock_btn"):r("car_lock_btn")} @click=${l}>${a.locked?"\u{1F512}":"\u{1F513}"}</button>`:k}
                ${h?y`<button class=${a.climateOn?"fp3d-holo-on":""} title=${r("car_climate")} @click=${()=>d(a.climate,!a.climateOn)}>❄</button>`:k}
                ${a.charge?y`<button class=${a.charging?"fp3d-holo-on":""} title=${r("car_charging")} @click=${()=>d(a.charge,!a.charging)}>⚡</button>`:k}
              </div>`:k}
        </div>
      </div>`}renderPoolCard(e,t){var P,I,g,M;let n=this.hass,r=T=>C(n,T),{area:a,state:i}=e.pool,s=!this.mediaFolded.has(a),c=()=>{this.mediaFolded.has(a)?this.mediaFolded.delete(a):this.mediaFolded.add(a),this.requestUpdate()},d=(T,x,S,F={})=>{n.callService(T,x,{entity_id:S,...F})},l=i.heater,u=l?this.poolTarget.get(l.id):void 0;u&&l&&(l.target!==null&&Math.abs(u.v-l.target)<.01||Date.now()-u.at>3e4)&&this.poolTarget.delete(l.id);let p=(l&&((P=this.poolTarget.get(l.id))==null?void 0:P.v))??(l==null?void 0:l.target)??null,h=T=>{if(!l||l.kind==="switch")return;let x=Math.min(l.max,Math.max(l.min,Math.round(T/l.step)*l.step));this.poolTarget.set(l.id,{v:x,at:Date.now()}),this.requestUpdate(),d(l.kind,"set_temperature",l.id,{temperature:x})},f=(T,x)=>ne(n,T,x),m=i.temp===null?null:i.unit.includes("F")?(i.temp-32)*5/9:i.temp,b=m===null?"#37e0ff":m<20?"#5ab4ff":m<26?"#37e0ff":m<31?"#4dff9a":"#ffb347",_=T=>T==="ok"?"#4dff80":T==="warn"?"#ffcc40":"#ff4d40",w=(T,x,S)=>Math.max(3,Math.min(97,(T-x)/(S-x)*100)),v=(T,x,S,F)=>y`<div class="fp3d-holo-pool-chem"><span>${T}</span><b style="color:${_(S)}">${x}</b><i><em style="left:${F}%;background:${_(S)};color:${_(S)}"></em></i></div>`,$=l!=null&&l.heating?`\u{1F525} ${r("pool_heating")}`:(I=i.pump)!=null&&I.on?`\u3030 ${r("pool_pump_on")}`:"",A=T=>T.closed>.98?r("pool_cover_closed"):T.closed<.02?r("pool_cover_open"):`${Math.round(T.closed*100)} % ${r("pool_cover_closed_part")}`;return y`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-pool ${s?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${c}><span>🏊 ${e.name}</span><span class="fp3d-holo-live">${$}</span></div>
          <div class="fp3d-holo-car-main">
            <b style="color:${b}">${i.temp!==null?`${f(i.temp,1)} ${i.unit}`:"\u2013"}</b>
            <span>${l&&p!==null&&l.kind!=="switch"?`\u2192 ${f(p,1)} ${i.unit}`:l?l.on?r("pool_heater_on"):r("pool_heater_off"):""}</span>
          </div>
          ${s&&i.ph?v("pH",f(i.ph.value,2),i.ph.range,w(i.ph.value,6.6,8)):k}
          ${s&&i.chlorine?v(i.chlorine.orp?r("pool_orp"):r("pool_chlorine"),`${f(i.chlorine.value,i.chlorine.orp?0:2)} ${i.chlorine.unit}`,i.chlorine.range,i.chlorine.orp?w(i.chlorine.value,500,900):w(i.chlorine.value,0,3)):k}
          ${s&&i.cover?y`<div class="fp3d-holo-pool-line">${r("pool_cover")}: ${A(i.cover)}</div>`:k}
          ${s?this.renderPoolValves(a):k}
          ${s&&!this.ro&&(l||(g=i.pump)!=null&&g.switchable||i.light||i.cover)?y`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${l&&l.kind!=="switch"&&p!==null?y`<button title=${r("pool_colder")} @click=${()=>h(p-l.step)}>−</button
                    ><button title=${r("pool_warmer")} @click=${()=>h(p+l.step)}>+</button>`:k}
                ${l?y`<button class=${l.on?"fp3d-holo-on":""} title=${r("pool_heater")} @click=${()=>l.kind==="switch"?d("homeassistant",l.on?"turn_off":"turn_on",l.id):d(l.kind,l.on?"turn_off":"turn_on",l.id)}>🔥</button>`:k}
                ${(M=i.pump)!=null&&M.switchable?y`<button class=${i.pump.on?"fp3d-holo-on":""} title=${r("pool_pump")} @click=${()=>d("homeassistant",i.pump.on?"turn_off":"turn_on",i.pump.id)}>〰</button>`:k}
                ${i.light?y`<button class=${i.light.on?"fp3d-holo-on":""} title=${r("pool_light")} @click=${()=>d("homeassistant","toggle",i.light.id)}>💡</button>`:k}
                ${i.cover?y`<button
                      title=${i.cover.moving?r("pool_cover_stop"):i.cover.closed>.5?r("pool_cover_open_btn"):r("pool_cover_close_btn")}
                      @click=${()=>d("cover",i.cover.moving?"stop_cover":i.cover.closed>.5?"open_cover":"close_cover",i.cover.id)}
                    >
                      ${i.cover.moving?"\u23F9":i.cover.closed>.5?"\u25B2":"\u25BC"}
                    </button>`:k}
              </div>`:k}
        </div>
      </div>`}renderPoolValves(e){var m,b;let t=this.building,n=this.hass;if(!t||!L("pool")||!((m=n==null?void 0:n.user)!=null&&m.is_admin)||this.ro)return k;let r=_=>C(n,_),a=t.floors.find(_=>_.outdoor.some(w=>w.id===e)),i=(b=a==null?void 0:a.outdoor.find(_=>_.id===e))==null?void 0:b.pool;if(!a||!i)return k;let s=_=>{var $,A,P;let[w,v]=_.split(":");if(w==="port"){let I=($=i.ports)==null?void 0:$.find(g=>g.id===v);return I?r(`pool_port_${I.kind}`):"?"}if(w==="joint")return((P=(A=i.joints)==null?void 0:A.find(I=>I.id===v))==null?void 0:P.name)||r("pool_joint");if(w==="dev"){let I=a.furniture.find(g=>g.id===v);return I?I.name||r(`furn_${I.type}`):"?"}return"\u2026"},c=(i.pipes??[]).flatMap(_=>(_.fittings??[]).filter(w=>w.kind==="valve").map(w=>({pipe:_,f:w}))),d=a.furniture.filter(_=>_.type==="pool_valve"),l=a.furniture.find(_=>_.type==="pool_filter");if(!c.length&&!d.length&&!l)return k;let u=_=>{let w=structuredClone(t);_(w),this.building=w,Hn(n,w).catch(v=>this.serviceFailed("neonplan3d/building/save",v))},p=_=>_.floors.find(w=>w.id===a.id).outdoor.find(w=>w.id===e).pool,h=(_,w,v)=>y`<button class="fp3d-holo-valve ${_?"fp3d-holo-on":""}" title=${r("pool_valve_toggle")} @click=${v}><i>${_?"\u25CF":"\u25CB"}</i>${w}<small>${r(_?"pool_valve_open":"pool_valve_shut")}</small></button>`,f=["filter","backwash","rinse","recirculate","waste","closed"];return y`<div class="fp3d-holo-valves">
      ${l?y`<div class="fp3d-holo-pool-line">${r("furn_pool_filter")}</div>
            <div class="fp3d-holo-valve-pos">
              ${f.map(_=>y`<button class=${(l.valve_position??"filter")===_?"fp3d-holo-on":""} @click=${()=>u(w=>w.floors.find(v=>v.id===a.id).furniture.find(v=>v.id===l.id).valve_position=_==="filter"?null:_)}>${r(`valve_${_}`)}</button>`)}
            </div>`:k}
      ${c.length||d.length?y`<div class="fp3d-holo-pool-line">${r("pool_valves")}</div>`:k}
      ${c.map(({pipe:_,f:w})=>h(w.open!==!1,`${s(_.from)} \u2192 ${s(_.to)}`,()=>u(v=>{var A,P,I;let $=(I=(P=(A=p(v).pipes)==null?void 0:A.find(g=>g.id===_.id))==null?void 0:P.fittings)==null?void 0:I.find(g=>g.id===w.id);$&&($.open=w.open===!1)})))}
      ${d.map(_=>h(_.valve_open!==!1,_.name||r("furn_pool_valve"),()=>u(w=>{let v=w.floors.find($=>$.id===a.id).furniture.find($=>$.id===_.id);v&&(v.valve_open=_.valve_open===!1)})))}
    </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){var w,v,$;let n=this.hass,r=A=>C(n,A),a=e.media,i=!this.mediaFolded.has(a.id),s=()=>{this.mediaFolded.has(a.id)?this.mediaFolded.delete(a.id):this.mediaFolded.add(a.id),this.requestUpdate()},c=(A,P={})=>{Promise.resolve(n.callService("media_player",A,{entity_id:a.id,...P})).catch(I=>this.serviceFailed(`media_player.${A}`,I))},d={down:A=>A.currentTarget.dataset.pressed=String(A.pointerId),up:A=>P=>{let I=P.currentTarget;I.dataset.pressed===String(P.pointerId)&&(delete I.dataset.pressed,P.stopPropagation(),I.dataset.acted=String(Date.now()),A())},key:A=>P=>{let I=P.currentTarget;Date.now()-Number(I.dataset.acted??0)<700||(I.dataset.acted=String(Date.now()),A())}},l=(w=n.states[a.id])==null?void 0:w.attributes.supported_features,u=A=>typeof l!="number"||(l&A)!==0,p=this.mediaIntent.get(a.id);p&&(p.playing===a.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(a.id);let h=((v=this.mediaIntent.get(a.id))==null?void 0:v.playing)??a.playing,f=()=>{this.mediaIntent.set(a.id,{playing:!h,at:Date.now()}),this.requestUpdate(),c(h?"media_pause":"media_play")},m=this.mediaVolume.get(a.id);m&&(Math.abs(m.v-a.volume)<=2||Date.now()-m.at>3e4)&&this.mediaVolume.delete(a.id);let b=(($=this.mediaVolume.get(a.id))==null?void 0:$.v)??a.volume,_=(A,P)=>{this.mediaVolume.set(a.id,{v:A,at:Date.now()}),this.requestUpdate(),(P||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),c("volume_set",{volume_level:A/100}))};return y`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${r("holo_media_playing")}`:r("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${a.picture?y`<img class="fp3d-holo-cover" src=${a.picture} alt="" />`:y`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${a.title}</b>${a.artist?y`<span>${a.artist}</span>`:k}</div>
        </div>
        ${i&&!this.ro?y`<div class="fp3d-holo-media-controls">
                <button aria-label=${r("previous")} ?disabled=${!u(16)} @pointerdown=${d.down} @pointerup=${d.up(()=>c("media_previous_track"))} @click=${d.key(()=>c("media_previous_track"))}>⏮</button>
                <button aria-label=${r("play_pause")} ?disabled=${h?!u(1):!u(16384)} @pointerdown=${d.down} @pointerup=${d.up(f)} @click=${d.key(f)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${r("next")} ?disabled=${!u(32)} @pointerdown=${d.down} @pointerup=${d.up(()=>c("media_next_track"))} @click=${d.key(()=>c("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(b)}
                  aria-label=${r("volume")}
                  @input=${A=>_(Number(A.target.value),!1)}
                  @change=${A=>_(Number(A.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${b} %</span>
              </div>`:k}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,r=d=>C(n,d),a=!this.holoFolded.has(t),i=this.dayOf(e),s=i&&i.curve.length>1?Sr(i.curve,i.peak):null,c=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return y`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${c}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ie(n,e.w??0)}</b><span>${r("holo_dev_now")}</span></div>
        ${a&&i?y`<div class="fp3d-holo-sub">${r("holo_today")} <b>${ne(n,i.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${ie(n,i.peak)}</b></div>`:k}
        ${a&&s?tn`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${s.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${s.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${s.endX}" cy="${s.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:k}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?al(t,new Date(this.now())):null}renderHoloCard(e,t,n){var b,_;let r=this.hass,a=w=>C(r,w),i=!this.holoFolded.has(t),s=this.dayOf(e),c=e.kind==="main",d=c&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid??0)/n.consumption)*100))):null,l=s&&s.curve.length>1?Sr(s.curve,s.peak):null,u=new Date(this.now()),p=(u.getHours()+u.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},f=c?n.solar??n.consumption??0:e.w??0,m=c?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return y`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${a("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ie(r,f)}</b><span>${a(c&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${i?y`${c&&this._plants.length>1?y`<div class="fp3d-holo-plants">${this._plants.map(w=>y`<span>${w.name}</span><b>${ie(r,w.w)}</b>`)}</div>`:k}
              ${s?y`<div class="fp3d-holo-sub">${a("holo_today")} <b>${ne(r,s.kwh,1)} kWh</b> · ${a("holo_peak")} <b>${ie(r,s.peak)}</b></div>`:k}
              ${l?tn`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${l.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${l.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${l.endX}" cy="${l.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:k}
              <div class="fp3d-holo-grid">
                ${m?y`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${a("holo_battery")}<br /><b>${m.soc!==null?`${Math.round(m.soc)} %`:ie(r,Math.abs(m.w??0))}</b>
                      ${m.w!==null&&Math.abs(m.w)>=5?y`<span>${m.w<0?"\u25B2":"\u25BC"} ${ie(r,Math.abs(m.w))}</span>`:k}
                    </div>`:k}
                ${c&&n.grid!==null?y`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${a("holo_grid")}<br /><b>${ie(r,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":a(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:k}
                ${c&&n.consumption!==null?y`<div class="fp3d-holo-cell fp3d-holo-house">${a("holo_house")}<br /><b>${ie(r,n.consumption)}</b></div>`:k}
                ${c&&this._wallboxW!==null?y`<div class="fp3d-holo-cell fp3d-holo-wb">${a("holo_wallbox")}<br /><b>${ie(r,this._wallboxW)}</b></div>`:k}
              </div>
              ${c&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?y`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?y`<span>🔥 ${a("holo_gas")} <b>${ne(r,this._meters.gas,this._meters.gas<10?2:1)} ${Ol(r,(b=this.building)==null?void 0:b.energy.gas)}</b></span>`:k}
                    ${this._meters.water!==null?y`<span>💧 ${a("holo_water")} <b>${lu(r,this._meters.water,Ol(r,(_=this.building)==null?void 0:_.energy.water))}</b></span>`:k}
                    <span>${a("holo_today_short")}</span>
                  </div>`:k}
              ${d!==null?y`<div class="fp3d-holo-bar"><div style="width:${d}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${a("holo_autarky")}</span><b>${d} %</b></div>`:k}`:k}
      </div>
    </div>`}setAlerts(e){let t=e.map(a=>`${a.kind}:${a.entity}`),n=this.ro?[]:e.filter((a,i)=>!this.seenAlerts.has(t[i]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(a=>`${a.kind}:${a.entity}`).join()&&(this._alerts=e);let r=e.some(a=>!a.kind.startsWith("pool_"));r&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!r||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),n.length&&this.alertJump&&this.jumpTo(n[0])}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){var l;let n=this.building,r=this.hass,a=n==null?void 0:n.floors.find(u=>u.id===e),i=a==null?void 0:a.rooms.find(u=>u.id===t);if(!n||!r||!a||!i||this.ro)return;let s=new Set(de(r,i.area_id).filter(u=>O(u)==="light"));for(let u of a.placements)O(u.entity_id)==="light"&&G([u.x,u.z],i.points)&&s.add(u.entity_id);for(let u of a.furniture){let p=(l=this.furnitureLinks.get(u.id))==null?void 0:l.entity;p&&Do(u.type)&&G([u.x,u.z],i.points)&&s.add(p)}let c=[...s].filter(u=>!this.confirmSet.has(u));if(!c.length)return;let d=c.some(u=>{var p;return((p=r.states[u])==null?void 0:p.state)==="on"});r.callService("homeassistant",d?"turn_off":"turn_on",{entity_id:c}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let r=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let s=this.heatMode,c=pl(n,t,s);!c.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=c,r=new Map([...c].map(([d,l])=>[d,ul(s,l)]))}let a=new Map;if(this.heatMode==="values")for(let s of t.floors)for(let c of s.rooms){let d=We(n,s,c,"temperature"),l=We(n,s,c,"humidity"),u=We(n,s,c,"co2"),p=[d!==null?`${ne(n,Pt(n,d),1)} ${Ce(n)}`:null,l!==null?`${ne(n,l,0)} %`:null,u!==null?`${ne(n,u,0)} ppm`:null].filter(h=>!!h);p.length&&a.set(c.id,p.join(" \xB7 "))}if(e.setRoomInfo(a),this._alerts.length){r??=new Map;let s=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let c of this._alerts){if(c.kind.startsWith("pool_"))continue;let d=Bs(c.kind).map(l=>l*s);if(c.roomId)r.set(c.roomId,d);else for(let l of t.floors)if(!c.floorId||l.id===c.floorId)for(let u of l.rooms)r.set(u.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(r??=new Map,r.set(this.roomFlash.roomId,[.9,.95,1]));let i=r?[...r].map(([s,c])=>`${s}:${c.map(d=>d.toFixed(2)).join(",")}`).join(";"):"";i!==this.tintSig&&(this.tintSig=i,e.setRoomTint(r))}furnitureMarkers(e,t,n,r){var m,b,_,w,v,$,A,P;let a=[],i=[],s=new Map,c=new Map,d=L("household"),l=[];this.binHolos=[];let u=L("pool")?ht(t.floors)[0]:void 0,p=u&&this.building?pt(e,Vt(u.area.pool,this.building.floors)):u?pt(e,u.area.pool):null;for(let I of t.floors)for(let g of I.furniture){let M=this.furnitureLinks.get(g.id),T=this.stateFaces(e,g);if(T.length&&s.set(g.id,{color:T[0].color,level:T[0].level,faces:T}),Do(g.type)){a.push(this.lampMarker(e,I,g,(M==null?void 0:M.entity)??null));continue}if(g.type==="wall_switch"){let N=Et(g);N.forEach((re,Te)=>re&&c.set(`${g.id}#${Te}`,`ws:${re}`)),s.set(g.id,{color:[0,0,0],level:0,keys:N.map(re=>fi(e,re)?pu:null)});continue}if(p&&sn.includes(g.type)){let N=g.valve_position??"filter";g.type==="pool_pump"&&((m=p.pump)!=null&&m.on)?s.set(g.id,{color:[.3,.8,1],level:.85}):g.type==="pool_heat_pump"&&((b=p.heater)!=null&&b.heating)?s.set(g.id,{color:[1,.45,.15],level:.85}):g.type==="pool_heat_pump"&&((_=p.heater)!=null&&_.on)?s.set(g.id,{color:[.3,.8,1],level:.35}):g.type==="pool_filter"?s.set(g.id,N==="closed"?{color:[1,.3,.25],level:.6}:N==="filter"||N==="recirculate"?{color:[.3,1,.6],level:(w=p.pump)!=null&&w.on?.8:.3}:{color:[1,.62,.2],level:.85}):g.type==="pool_dosing"&&((v=p.pump)!=null&&v.on)&&s.set(g.id,{color:[.6,.9,1],level:.5})}let x=(g.type==="plant"||_s(g.type))&&!!g.moisture&&g.moisture!=="none";if(g.type==="waste_bin"||g.type==="mailbox"||x){let N=d?this.householdState(e,I,g):null;N!=null&&N.screen&&s.set(g.id,N.screen),N!=null&&N.marker&&a.push(N.marker);let re=g.type==="waste_bin"?g.bin_source:g.type==="mailbox"?g.entity:g.moisture;if(d&&typeof re=="string"&&re!=="none"&&c.set(g.id,`hh:${re}#${g.id}`),N!=null&&N.item&&l.push(N.item),!x)continue}d&&(g.service&&g.service!=="none"&&Ts(g,e)&&(s.has(g.id)||s.set(g.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]}),l.push({icon:"wrench-outline",text:C(e,"hh_service",{name:g.name||ye(e,g.type)}),entity:g.service})),(g.type==="fridge"||g.type==="fridge_smart")&&ao(g,e)&&(s.set(g.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),l.push({icon:"fridge-alert-outline",text:C(e,"hh_fridge_open",{name:g.name||ye(e,g.type)}),entity:Ze(g)[0]??null})));let F=g.type==="parking"&&L("auto_pro")&&!!g.car?Bn(e,g):null,W=g.type==="washer"||g.type==="dryer"||g.type==="dishwasher",B=g.type==="home_battery"?g.soc:g.type==="wallbox"?g.status:g.type==="parking"&&F?(($=g.car)==null?void 0:$.device)??F.entities.soc:d&&W?g.remaining??null:null,j=B&&B!=="none"?B:null,q=M??(j?{entity:null,power:null}:void 0);if(!q)continue;let oe=g.type==="home_battery"?j??q.entity??q.power:q.entity??q.power??j;c.set(g.id,oe);let V=q.entity?e.states[q.entity]:void 0,U=g.type==="meter"?t.energy.grid_invert&&!g.export:g.type==="home_battery"?t.energy.battery_invert&&!g.charge:!1,te=q.power?le(e.states[q.power],U):null,ue=g.type==="home_battery"&&g.charge&&g.charge!=="none"?g.charge:g.type==="meter"&&g.export&&g.export!=="none"?g.export:null,ke=ue?le(e.states[ue]):null;ke!==null&&(te=Math.max(0,te??0)-Math.max(0,ke)),q.power&&te!==null&&!r.has(q.power)&&(r.add(q.power),i.push({id:oe,powerEntity:q.power,floorId:I.id,x:g.x,z:g.z,power:Math.max(0,te),wallbox:g.type==="wallbox"||void 0}));let Me=typeof g.run_w=="number"&&g.run_w>0?g.run_w:10,be=(te??0)>Me||(V==null?void 0:V.state)==="on"||(V==null?void 0:V.state)==="running"||Yo(V)&&De(V),$e=null;if(d&&W){let N=g.remaining&&g.remaining!=="none"?e.states[g.remaining]:void 0,re=As(N),Te=be||!q.power&&!q.entity&&(re??0)>0,_t=Ze(g),Se=ze=>_t.some(vo=>{let Ut=e.states[vo];return!!(Ut!=null&&Ut.last_changed)&&Date.parse(Ut.last_changed)>ze}),vt=this.finished.update(g.id,Te,Se),Bt=g.name||(q.entity?Q(e,q.entity):ye(e,g.type));Te?(be||s.set(g.id,{color:[.3,.85,1],level:.8}),re!==null&&($e=C(e,"hh_left",{t:Is(re)}),l.push({icon:"timer-outline",text:`${Bt}: ${$e}`,entity:g.remaining??q.entity}))):(br(V)||br(N)||vt)&&($e=C(e,"hh_done"),s.set(g.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),l.push({icon:"check-circle-outline",text:C(e,"hh_finished",{name:Bt}),entity:q.entity??q.power}))}if(F&&Mn(e,g)){let N=[];if(F.soc!==null){let re=F.soc>=50?[.3,1,.5]:F.soc>=20?[1,.8,.25]:[1,.3,.25];N.push({part:"band",color:re,level:F.charging?1:.6})}if(F.locked===!1&&N.push({part:"lights",color:[1,.42,.02],level:1}),F.climateOn){let re=F.entities.climate?e.states[F.entities.climate]:void 0,Te=!!re&&(re.attributes.hvac_action==="cooling"||re.state==="cool");N.push({part:"cabin",color:Te?[.45,.8,1]:[1,.55,.22],level:.35})}N.length&&s.set(`${g.id}:vehicle`,{color:N[0].color,level:N[0].level,faces:N})}if(g.type==="radiator"&&V&&O(V.entity_id)==="climate"){let N=V.attributes;if(N.hvac_action==="heating"){let re=typeof N.temperature=="number"&&typeof N.current_temperature=="number"?N.temperature-N.current_temperature:1;s.set(g.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,re))})}}else if(g.type==="ac_unit"&&V&&O(V.entity_id)==="climate"){let N=Pi(V);N&&s.set(g.id,N)}else if((g.type==="washer"||g.type==="dryer"||g.type==="dishwasher")&&be)s.set(g.id,{color:[.3,.85,1],level:.8});else if(g.type==="stove"||jo(g.type)){let N=Ei(V,be);N>0&&s.set(g.id,{color:[1,.05,.01],level:N,faces:[{part:"burners",color:[1,.05,.01],level:N}]})}let _e=fe(g.type),Wt=!!_e&&!_e.light&&_e.parts.some(N=>N.glow);if(V&&Wt&&L("sound")&&O(V.entity_id)==="media"&&V.state==="playing"&&!qn(g.type)){let N=typeof V.attributes.volume_level=="number"?V.attributes.volume_level:.5;s.set(g.id,{color:er(V)??[.22,.88,1],level:.5+.5*N,ring:!0,plain:!0})}if(V&&qn(g.type)&&!jo(g.type)&&!(jn(g.type)&&O(V.entity_id)==="cover")){let N=L("screens"),re=O(V.entity_id)==="light"?Be(V):null,Te=O(V.entity_id)==="media"&&["playing","on","paused","idle"].includes(V.state),_t=N&&O(V.entity_id)==="media"?er(V):re?re.color:De(V)||Te?[.22,.88,1]:null,Se=N&&O(V.entity_id)==="media"?V.attributes.entity_picture??null:null;_t&&s.set(g.id,{color:_t,level:V.state==="playing"?1:.6,picture:Se,ring:Wt&&L("sound")&&V.state==="playing"})}if(n.has(oe))continue;n.add(oe);let In=q.entity?O(q.entity):null,bt=I.rooms.find(N=>N.points.length>=3&&G([g.x,g.z],N.points));a.push({id:oe,floorId:I.id,roomId:(bt==null?void 0:bt.id)??null,x:g.x,z:g.z,y:gu(g)+me(I,g),icon:g.icon?Kn(g.icon):pn(In??"switch"),name:g.name||(q.entity?Q(e,q.entity):ye(e,g.type)),ownName:g.name||void 0,showName:!!g.show_name,text:$e??(F?this.carText(e,F,!!V&&!Pr.has(V.state.toLowerCase())):g.type==="home_battery"?this.batteryText(e,j,te):g.type==="wallbox"?this.wallboxText(e,j,te):g.type==="meter"?this.meterText(e,te):V?ve(e,V):te!==null?ie(e,Math.max(0,te)):""),active:$e?!0:F?F.charging:V?De(V):(te??0)>(typeof g.run_w=="number"&&g.run_w>0?g.run_w:5),unavailable:V?Y(V):!1,glow:null,furnitureId:g.id,energyDevice:g.type==="inverter"||g.type==="home_battery"||g.type==="wallbox"||g.type==="meter"||!!F,show:g.marker??(F||$e?"always":void 0),fromFurniture:!0})}this._household=l.filter((I,g)=>l.findIndex(M=>M.text===I.text)===g),this.cameraScreens=0;let h=Xo(e,t.floors),f=L("screens");for(let I of t.floors)for(let g of I.furniture){if(!f||!((A=g.pictures)!=null&&A.length)||!qn(g.type)||g.type==="fridge_smart"&&((P=h.get(g.id))!=null&&P.right))continue;let M=g.pictures.find(S=>zi(e,S));if(!M)continue;let T=this.pictureUrl(M.image),x=g.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];T&&s.set(g.id,{color:x,level:1,picture:T,plain:!0})}return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall),{markers:a,consumers:i,screens:s,targets:c}}watchHousehold(e,t){let n=t.floors.flatMap(c=>c.furniture).filter(c=>c.type==="waste_bin"||c.type==="mailbox"),r=L("household")&&n.length>0&&!this.replay,a=r?ks(t.floors):[],i=a.join(",");if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let s=async()=>{a.length&&(this.pickups=await mr(this.hass??e,a)),this.syncDevices(!0)};(i!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=i,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void s(),6e5),a.length&&mr(e,a).then(c=>{this.pickups=c,this.syncDevices(!0)}))}householdState(e,t,n){var c,d,l,u;let r=p=>{let h=parseInt(p.slice(1),16);return[(h>>16&255)/255,(h>>8&255)/255,(h&255)/255]};if(n.type==="waste_bin"){let p=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!p)return null;let h=gr(n,e,this.pickups,new Date,{from:(d=(c=this.building)==null?void 0:c.settings.household)==null?void 0:d.bin_from,until:(u=(l=this.building)==null?void 0:l.settings.household)==null?void 0:u.bin_until});if(!h)return null;let f=h.days===0?C(e,"bin_today"):h.days===1?C(e,"bin_tomorrow"):C(e,"bin_in_days",{n:h.days}),m=r(xs(n)[1]),b=Math.max(...m),w=b-Math.min(...m)<.12?[.92,.95,1]:m.map(A=>Math.min(1,A/Math.max(.001,b)*1.05)),v=n.name||C(e,`bin_kind_${n.bin_kind??"rest"}`),$=`#${w.map(A=>Math.round(A*255).toString(16).padStart(2,"0")).join("")}`;return this.binHolos.push({floorId:t.id,x:n.x,z:n.z,y:me(t,n)+n.h,name:v,color:$,when:f,soon:h.days<=1}),{item:h.days<=1?{icon:"trash-can-outline",text:`${v}: ${f}`,entity:p,hot:h.glow}:void 0}}if(n.type!=="mailbox"){let p=Ps(n,e),h=[1,.55,.12],f=n.name||ye(e,n.type);return p?(this.binHolos.push({floorId:t.id,x:n.x,z:n.z,y:me(t,n)+n.h,name:f,color:"#ff8c1f",when:C(e,"hh_thirsty"),soon:!0}),{screen:{color:h,level:.9,faces:[{part:"band",color:h,level:.9}]},item:{icon:"watering-can-outline",text:C(e,"hh_plant",{name:f}),entity:n.moisture??null,hot:!0}}):null}let a=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!a)return null;let i=Ms(n,e),s=[1,.62,.15];return i&&this.binHolos.push({floorId:t.id,x:n.x,z:n.z,y:me(t,n)+n.h,name:n.name||ye(e,n.type),color:"#ffb547",when:C(e,"mailbox_post"),soon:!0}),{screen:i?{color:s,level:1,faces:[{part:"top",color:s,level:1},{part:"band",color:s,level:.8}]}:void 0,item:i?{icon:"email-alert-outline",text:n.name?`${n.name}: ${C(e,"mailbox_post")}`:C(e,"mailbox_post"),entity:a,hot:!0}:void 0}}robotPaths(e,t){var a,i;let n=this.replay;if(!n)return[];let r=[];for(let s of t.floors){let c=s.rooms.filter(d=>d.points.length>=3);for(let d of s.furniture){if(!kt(d.type))continue;let l=((i=(a=this.furnitureLinks)==null?void 0:a.get(d.id))==null?void 0:i.entity)??null;if(!l)continue;let u=n.robotRooms(l,un(e,l,d.room_sensor)),p=[];for(let h of u){let f=tr(e,c,h),m=f?Pe(f.points):null,b=p[p.length-1];m&&(!b||b[0]!==m[0]||b[1]!==m[1])&&p.push([m[0],m[1]])}p.length&&r.push({floorId:s.id,points:p})}}return r}trailNow(e,t){let n=this.now(),r=En(e,t),a=this.replay?this.replay.rows(r.map(s=>s.entity),n-Sn,n):this.trailRows,i=r.map(s=>{let c=e.states[s.entity];return{entity:s.entity,state:c==null?void 0:c.state,lastChanged:c!=null&&c.last_changed?Date.parse(c.last_changed):void 0}});return _l(r,bl(a,i,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!L("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!L("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let r=En(t,n).map(a=>a.entity);if(r.length){try{let a=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Sn).toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=a??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t==null?void 0:t.attributes.entity_picture;return!n||Y(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),qa(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(r=>{if(n.has(r.type)||r.type.startsWith("lamp_")&&r.type!=="lamp_floor"&&r.type!=="lamp_uplight"||r.h<.04||me(e,r)>.12)return!1;let a=fe(r.type);return a&&(a.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(r.type))?!1:G([r.x,r.z],t)||$t(r).some(i=>G(i,t))}).map(r=>$t(r))}robotInfos(e,t){var r,a;let n=[];for(let i of t.floors)for(let s of i.furniture){if(!kt(s.type))continue;let c=((r=this.furnitureLinks.get(s.id))==null?void 0:r.entity)??null,d=c?(a=e.states[c])==null?void 0:a.state:void 0,l=Qo(d)?"cleaning":d==="returning"?"returning":d==="error"?"error":d==="docked"||!d?"docked":"idle",u=s.rotation*Math.PI/180,p=it(s.type),h=s.d*(p?.227:.14),f=[s.x-Math.sin(u)*h,s.z+Math.cos(u)*h],m=i.rooms.filter(v=>v.points.length>=3),_=(l==="cleaning"?Oi(e,m,c,un(e,c,s.room_sensor)):null)??m.find(v=>G(f,v.points)),w=l==="cleaning"&&_?this.robotObstacles(i,_.points):[];n.push({id:s.id,floorId:i.id,rest:f,restHeading:-u,mode:l,room:(_==null?void 0:_.points)??null,roomId:(_==null?void 0:_.id)??null,obstacles:w,...p?{inModel:p}:{}})}return n}batteryText(e,t,n){var i;let r=t?Number((i=e.states[t])==null?void 0:i.state):Number.NaN,a=[];return Number.isFinite(r)&&a.push(`${ne(e,r,0)} %`),n!==null&&Math.abs(n)>=10&&a.push(`${n<0?"\u25B2":"\u25BC"} ${ie(e,Math.abs(n))}`),a.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?ie(e,0):`${C(e,t<0?"energy_grid_export":"energy_grid_import")} ${ie(e,Math.abs(t))}`}wallboxText(e,t,n){let r=t?e.states[t]:void 0,a=String((r==null?void 0:r.state)??"").toLowerCase(),i=(n??0)>50||/charg|laden|lädt/.test(a),s=r!=null&&r.entity_id.startsWith("binary_sensor.")?a==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(a),c=i?C(e,"wallbox_charging"):s?C(e,"wallbox_plugged"):r&&!Y(r)&&!r.entity_id.startsWith("binary_sensor.")?ve(e,r):"",d=n!==null&&n>50?ie(e,n):"";return[c,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],r=t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[a,i]of r){if(!a||a==="none")continue;let s=e.states[a];if(!s||Y(s)||!(De(s)||s.state==="home"||s.state==="occupied"||s.state==="on"))continue;let d=O(a)==="light"?Be(s):null;n.push({part:i,color:d?d.color:[1,.71,.28],level:d?d.level:.85})}return n}carText(e,t,n){let r=i=>C(e,i);if(n||t.away!==null){let i=t.away?` \xB7 ${t.away}`:"";return`${r("car_away")}${i}`}let a=[];return t.soc!==null&&a.push(`${ne(e,t.soc,0)} %`),t.range!==null&&a.push(`${ne(e,t.range,0)} ${t.rangeUnit}`),t.charging?a.push(t.chargingW!==null?`\u26A1 ${ie(e,t.chargingW)}`:`\u26A1 ${r("car_charging_short")}`):t.plugged&&a.push("\u{1F50C}"),t.locked!==null&&a.push(t.locked?"\u{1F512}":"\u{1F513}"),a.join(" \xB7 ")}ceilingAt(e,t,n){var c;let a=((c=e.rooms.find(d=>d.ceiling_height&&d.points.length>=3&&G([t,n],d.points)))==null?void 0:c.ceiling_height)||e.height,i=this.building;if(!i||!(i.settings.roof.sections??[]).some(d=>Zi(d,e.elevation+a)))return a;let s=es(i,t,n);return s===null?a:Math.max(.5,Math.min(a,s-e.elevation))}lampMarker(e,t,n,r){let a=r?e.states[r]:void 0,i=fe(n.type),s=di[n.type]??(i==null?void 0:i.light)??"floor",c=t.rooms.some(w=>w.points.length>=3&&G([n.x,n.z],w.points)),d=s==="strip"&&!c?on(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!i?n.mount_y:i||s==="wall"||s==="strip"?me(t,n):s==="table"?Ln(t,n.x,n.z):s==="bollard"||s==="garden"?on(t,n.x,n.z):0,l=t.rooms.find(w=>w.points.length>=3&&G([n.x,n.z],w.points)),u=this.ceilingAt(t,n.x,n.z),p=(i?i.mount==="ceiling":["ceiling","downlight","spot","panel","pendant"].includes(s))&&n.mount_y==null,h=p?t.height-u:0,f=i&&p?Math.max(0,d-h):d,m=On.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+Vn(n.type,n.h)):Math.abs(h)>.01?u:void 0,b=m??t.height,_=i?i.mount==="ceiling"?Math.max(.5,f-.15):f+n.h+.2:{ceiling:b-.3,downlight:b-.25,spot:b-.35,panel:b-.25,pendant:Math.max(.6,b-n.h-.25),floor:f+n.h+.25,uplight:f+n.h+.25,table:f+n.h+.2,wall:f+n.h+.2,strip:n.upright?f+n.w+.15:Math.max(.3,f-.2),bollard:f+n.h+.25,garden:f+n.h+.25}[s];return{id:r??`lamp:${n.id}`,floorId:t.id,roomId:(l==null?void 0:l.id)??null,x:n.x,z:n.z,y:_,icon:pn("light"),name:n.name||(r?Q(e,r):ye(e,n.type)),text:a?ve(e,a):"",active:a?De(a):!1,unavailable:a?Y(a):!1,glow:a?rr(Ai(Be(a,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_scale):null,lamp:s,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,size:[n.w,n.d,n.h],base:f,top:m,pickable:!!r,furnitureId:n.id,pack:i?n.type:null,lightY:i?i.mount==="ceiling"?f:f+n.h*.85:void 0,effect:!!a&&a.state==="on"&&typeof a.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(a.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(e.lamp||e.model)return!1;let t=O(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){let r=n.cover??n.contact??n.tilt;r&&e.set(t,r)}return e}scheduleThumbs(e=600){var r;clearTimeout(this.thumbTimer);let t=((r=this.building)==null?void 0:r.floors.filter(a=>a.rooms.length).length)??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return k;let e=new Map(this.building.floors.map(a=>[a.id,a.name])),t=[...this._thumbs].sort((a,i)=>{var s,c;return(((s=this.building.floors.find(d=>d.id===i.floorId))==null?void 0:s.elevation)??0)-(((c=this.building.floors.find(d=>d.id===a.floorId))==null?void 0:c.elevation)??0)}),n=this._thumbsCompact,r=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return y`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${C(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${C(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${C(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${r}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${C(this.hass,"all_floors")}</span>
      </button>
      ${t.map(a=>y`<button class="fp3d-thumb" aria-pressed=${this.floorId===a.floorId} @click=${()=>this.fire("floor-tap",{floorId:a.floorId})}>
          ${n?k:y`<img src=${a.url} alt="" />`}
          <span>${e.get(a.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(this.ro){this.onDeviceTap(e,t,n);return}if(L("auto_pro")&&this.hass&&this.building)for(let a of this.building.floors)for(let i of a.furniture){if(i.type!=="parking"||!i.car)continue;let s=Bn(this.hass,i);if([i.entity,i.car.device,...Object.values(s.entities)].filter(d=>!!d&&d!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:s};return}}let r=O(e);r==="light"||r==="cover"||r==="switch"||r==="fan"||r==="lock"||r==="camera"?this._menu={entity:e,x:t,y:n}:xe(this,e)}onDeviceSwipe(e,t,n,r,a){var c;let i=(c=this.hass)==null?void 0:c.states[e];if(this.ro)return!1;if(t==="start"){if(!i||Y(i)||this.confirmSet.has(e))return!1;let d=O(e);if(d==="light"&&zr(i).dim){let l=i.state==="on"?typeof i.attributes.brightness=="number"?Math.round(i.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:l,value:l,x:r,y:a},!0}if(d==="cover"&&Cr(i)){let l=i.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:l,value:l,x:r,y:a},!0}return!1}let s=this._swipe;if(!s||s.entity!==e)return!1;if(t==="move"){let d=Math.round(Math.min(100,Math.max(0,s.start-n/220*100)));d!==s.value&&(this._swipe={...s,value:d});let l=performance.now();l-this.swipeSent>350&&(this.swipeSent=l,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>{var t;return(t=this.viewer)==null?void 0:t.focus(e.floorId,e.x,e.z,e.y,e.entity)},120)}renderBinInfo(){var c;let e=this._binInfo,t=this.hass,n=e&&((c=this.building)==null?void 0:c.floors.flatMap(d=>d.furniture).find(d=>d.id===e.furnitureId));if(!e||!t||!n)return k;let r=$s(n,t,this.pickups),a=new Date;a.setHours(0,0,0,0);let i=d=>{let l=Math.round((d.getTime()-a.getTime())/864e5);return l===0?C(t,"bin_today"):l===1?C(t,"bin_tomorrow"):d.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},s=n.name||C(t,`bin_kind_${n.bin_kind??"rest"}`);return y`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${s}</span>
      ${r.length?r.map(d=>y`<b>${i(d.day)}${d.summary&&d.summary!==s?y` <small>· ${d.summary}</small>`:k}</b>`):y`<b>${C(t,"bin_none")}</b>`}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!L("household")||this.panelOpen)return k;let e=()=>{this._hhFolded=!this._hhFolded,mu("neonplan3d.hhFolded",this._hhFolded)};return y`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${C(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?k:this._household.map(t=>y`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):xe(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return k;let t=this._alerts.slice(0,3);return y`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>y`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${wr(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${wr(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?y`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:k}
    </div>`}renderScenes(){var a,i;let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return k;let t=e.floors.flatMap(s=>s.rooms).find(s=>s.id===this.roomId),n=t?de(this.hass,t.area_id).filter(s=>O(s)==="scene"||O(s)==="script").slice(0,6):[];if(!n.length)return k;let r=t!=null&&t.area_id?(i=(a=this.hass.areas)==null?void 0:a[t.area_id])==null?void 0:i.name:void 0;return y`<div class="fp3d-scenes">
      ${n.map(s=>y`<button class="fp3d-chip" aria-pressed=${this._sceneFired===s} @click=${()=>this.runScene(s)}>${Q(this.hass,s,r)}</button>`)}
    </div>`}async syncPets(){var i,s,c,d,l,u,p;let e=this.building,t=this.viewer,n=((i=e==null?void 0:e.settings.pets)==null?void 0:i.on)!==!1&&this.petsOn!==!1,r=n?((s=e==null?void 0:e.settings.pets)==null?void 0:s.list)??[]:[],a=n&&!!(e!=null&&e.floors.some(h=>h.furniture.some(f=>/:aquarium(_large)?$/.test(f.type))));if(!t||!e||!L("fun_pets")||!r.length&&!a){(c=this.pets)==null||c.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,r));return}if(!this.petsLoading){this.petsLoading=!0;try{let[h,f]=await Promise.all([Rr(),Pn()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=h.startPets({lib:f.funLib,FloorMap:f.FloorMap,viewer:this.viewer,building:this.building,pets:((l=(d=this.building)==null?void 0:d.settings.pets)==null?void 0:l.on)!==!1&&this.petsOn!==!1?((p=(u=this.building)==null?void 0:u.settings.pets)==null?void 0:p.list)??[]:[],night:()=>{var m,b;return((b=(m=this.hass)==null?void 0:m.states["sun.sun"])==null?void 0:b.state)==="below_horizon"},base:(m,b)=>me(m,b),closedDoors:()=>{var _,w,v;let m=new Set,b=((_=this.hass)==null?void 0:_.states)??{};for(let $ of((w=this.building)==null?void 0:w.floors)??[])for(let A of $.openings)A.type==="door"&&A.contact&&((v=b[A.contact])==null?void 0:v.state)==="off"&&m.add(A.id);return m}})}catch(h){console.error("CasaNeon: the pets failed to load",h)}finally{this.petsLoading=!1}}}async syncGhost(){var n,r;let e=this.building,t=!!e&&L("fun_halloween")&&((n=e.settings.halloween)==null?void 0:n.ghost)!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){(r=this.ghost)==null||r.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[a,i]=await Promise.all([Rr(),Pn()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=a.startGhost({lib:i.funLib,viewer:this.viewer,building:this.building,night:()=>{var s,c;return((c=(s=this.hass)==null?void 0:s.states["sun.sun"])==null?void 0:c.state)==="below_horizon"}})}catch(a){console.error("CasaNeon: the ghost failed to load",a)}finally{this.ghostLoading=!1}}}async startWalk(){let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=e.floors.filter(u=>u.rooms.some(p=>p.points.length>=3)),a=(this.roomId?n.find(u=>u.rooms.some(p=>p.id===this.roomId)):void 0)??n.find(u=>u.id===this.floorId)??[...n].sort((u,p)=>Math.abs(u.elevation)-Math.abs(p.elevation))[0];if(!a)return;let i=await Pn();this._walk={room:null,hint:!0},await this.updateComplete;let s=this.renderRoot.querySelector(".fp3d-walk-surface");if(!s)return;t.setFloor(a.id,!1),t.setWallMode("auto");let c=new i.FloorMap(e,a),d=this.roomId?a.rooms.find(u=>u.id===this.roomId):void 0,l;if(d){let u=c.freeNear(Pe(d.points));l={x:u[0],z:u[1],yaw:c.openYaw(u),pitch:-.05}}this.walker=new i.WalkCamera(t,c,s,{start:l,onRoom:u=>{this.walkRoomPts=(u==null?void 0:u.points)??null,this._walk&&(this._walk={...this._walk,room:(u==null?void 0:u.name)??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){var t;if(!this.walker&&!this._walk)return;(t=this.walker)==null||t.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return k;let e=a=>C(this.hass,a);if(!this._walk)return y`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,r=(a,i)=>{var u;if(!n)return;let s=44,c=a.clientX-n.cx,d=a.clientY-n.cy,l=Math.hypot(c,d);l>s&&([c,d]=[c/l*s,d/l*s]),i.firstElementChild.style.transform=`translate(${c}px, ${d}px)`,(u=this.walker)==null||u.setStick({x:c/s,y:d/s})};return y`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?y`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:k}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${a=>{let i=a.currentTarget,s=i.getBoundingClientRect();n={id:a.pointerId,cx:s.left+s.width/2,cy:s.top+s.height/2},i.setPointerCapture(a.pointerId),r(a,i)}}
        @pointermove=${a=>r(a,a.currentTarget)}
        @pointerup=${a=>{var i;n=null,a.currentTarget.firstElementChild.style.transform="",(i=this.walker)==null||i.setStick(null)}}
        @pointercancel=${a=>{var i;n=null,a.currentTarget.firstElementChild.style.transform="",(i=this.walker)==null||i.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return k;if(this._find===null)return y`<button class="fp3d-find-btn" title=${C(this.hass,"find")} aria-label=${C(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=yl(this.findIndex??=Ir(this.hass,e),this._find);return y`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${C(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${C(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?y`<div class="fp3d-find-list">
            ${t.length?t.map(n=>y`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?Un(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?y`<small>${n.where}</small>`:k}</span>
                  </button>`):y`<p>${C(this.hass,"find_none")}</p>`}
          </div>`:k}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return k;let n=(m,b)=>C(t,m,b),r=y`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return r;let a=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,i=a?[a]:e.floors,s=i.flatMap(m=>nr(t,m).lights),c=i.flatMap(m=>nr(t,m).covers),d=s.filter(m=>{var b;return((b=t.states[m])==null?void 0:b.state)==="on"}).length,l=!a,u=(m,b,_,w)=>{if(w.length){if(l&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(b,_,{entity_id:w})}},p=(m,b,_,w,v)=>y`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!v.length} @click=${()=>u(m,_,w,v)}>
        ${this._armed===m?n("central_sure"):n(b)}
      </button>`,h=(e.settings.favorites??[]).filter(m=>t.states[m]),f=this.buttons??e.settings.buttons??[];return y`${r}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <b>${a?a.name:n("central_house")}</b>
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${s.length?y` <small>${d}/${s.length}</small>`:k}</span>
          ${p("lights_on","central_on","light","turn_on",s.filter(m=>{var b;return((b=t.states[m])==null?void 0:b.state)==="off"}))}
          ${p("lights_off","central_off","light","turn_off",s.filter(m=>{var b;return((b=t.states[m])==null?void 0:b.state)==="on"}))}
        </div>
        ${c.length?y`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${c.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",c)}
              ${p("covers_close","central_close","cover","close_cover",c)}
            </div>`:k}
        <b>${n("central_favorites")}</b>
        ${h.length?y`<div class="fp3d-central-favs">
              ${h.map(m=>{let[b,_]=Li(m),w=t.states[m],v=b==="homeassistant"&&(w==null?void 0:w.state)==="on";return y`<button
                  class="fp3d-chip"
                  aria-pressed=${v||this._sceneFired===m}
                  ?disabled=${Y(w)}
                  @click=${()=>{t.callService(b,_,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${Q(t,m)}
                </button>`})}
            </div>`:f.length?k:y`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${f.length?y`<div class="fp3d-central-favs">
              ${f.map(m=>y`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${hu(t,m)}
                  @click=${b=>{Di(t,b.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?y`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:k}${m.label}
                </button>`)}
            </div>`:k}
      </div>`}mediaCardUp(e,t){var a;let n=e.states[t];if(!n||O(t)!=="media")return!1;if(!this.ro&&(((a=this.mediaGrace.get(t))==null?void 0:a.until)??0)>Date.now()&&Y(n))return!0;let r=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(i=>typeof i=="string"&&!!i.trim());return!Y(n)&&(n.state==="playing"||n.state==="paused"&&r)}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return k;let e=C(this.hass,this.clean?"controls_show":"controls_hide");return y`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?tn`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:tn`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return k;let t=e.kind==="light"&&e.value<=0;return y`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${Q(this.hass,e.entity)}</span>
      <b>${t?C(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){var i;let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!L("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let r=(i=n.floors.find(s=>s.placements.some(c=>c.entity_id===e)))==null?void 0:i.id;if(!r)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let a=this.floorId===r?0:300;a&&(this.throughFloor=r,this.fire("floor-tap",{floorId:r})),setTimeout(()=>{var s,c;((s=this._through)==null?void 0:s.entity)===e&&!((c=this.viewer)!=null&&c.lookThrough(e))&&(this._through=null)},a)}endThrough(){var t;let e=this._through;e&&(this._through=null,(t=this.viewer)==null||t.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?k:y`<div class="fp3d-pro" role="dialog">
      <b>${C(this.hass,"pro_title")}</b>
      <span>${C(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${C(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip" href=${qi(this._proHint)} target="_blank" rel="noopener">${C(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${C(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${C(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return k;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!L("camera_cockpit"))return y`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${C(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${C(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(l=>l.placements.map(u=>u.entity_id)).filter(l=>O(l)==="camera"))];this.watchCameras(!0);let r=l=>{let u=e.states[l],p=u==null?void 0:u.attributes.entity_picture;return p&&u&&!Y(u)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},a=l=>{let u=e.states[l];return y`${Q(e,l)}${(u==null?void 0:u.state)==="recording"?y` <b>● ${C(e,"state_recording")}</b>`:k}`},i=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(i){let l=r(i),u=this.liveFor(i),p=()=>{this.throughWall=!0,t(),this.lookThrough(i)};return y`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${C(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${a(i)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${C(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(l?y`<img src=${l} alt="" />`:y`<div class="fp3d-wall-none">${C(e,"state_unavailable")}</div>`)}</div>
      </div>`}let s=this.renderRoot.querySelector(".fp3d-wall-grid");s||requestAnimationFrame(()=>this.requestUpdate());let{cols:c,tile:d}=jl(n.length,(s==null?void 0:s.clientWidth)??this.clientWidth-48,(s==null?void 0:s.clientHeight)??this.clientHeight-160);return y`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${C(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${C(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${c}, ${d}px); grid-auto-rows: ${Math.round(d*9/16)}px">
        ${n.map(l=>{let u=r(l),p=Ge(e,l).some(h=>{var f;return((f=e.states[h])==null?void 0:f.state)==="on"});return y`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${C(e,"camera_wall_big")} @click=${()=>this._wallBig=l}>
            ${u?y`<img src=${u} alt="" />`:y`<div class="fp3d-wall-none">${C(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${a(l)}</span>
          </button>`})}
      </div>
    </div>`}renderProxmox(){if(!this.proxmoxWall||!this.hass||this.ro)return k;let e=this.hass,t=(l,u)=>C(e,l,u),n=()=>this.dispatchEvent(new CustomEvent("proxmox-close",{bubbles:!0,composed:!0})),r=yn(e),a=l=>l===null?"\u2013":`${ne(e,l,l<10?1:0)} %`,i=(l,u)=>y`<span class="fp3d-pve-bar" title=${`${l} ${a(u)}`}
        ><span class="fp3d-pve-bar-label">${l}</span><span class="fp3d-pve-bar-track"><span class="fp3d-pve-bar-fill ${(u??0)>=85?"fp3d-pve-hot":""}" style="width: ${Math.min(100,Math.max(0,u??0))}%"></span></span><span class="fp3d-pve-bar-value">${a(u)}</span></span
      >`,s=r.instances.filter(l=>l.running).length,c=r.instances.filter(l=>this._pveFilter==="all"||this._pveFilter==="on"===l.running),d=(l,u,p)=>y`<button class="fp3d-chip" aria-pressed=${this._pveFilter===l} @click=${()=>this._pveFilter=l}>${u} · ${p}</button>`;return y`<div class="fp3d-wall fp3d-pve">
      <div class="fp3d-wall-head">
        <span>${t("pve_title")}</span>
        <span class="fp3d-wall-tools">${d("all",t("pve_all"),r.instances.length)} ${d("on",t("pve_on"),s)} ${d("off",t("pve_off"),r.instances.length-s)}</span>
        <button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      ${r.nodes.map(l=>y`<button class="fp3d-pve-node ${l.online?"":"fp3d-pve-down"}" @click=${()=>xe(this,l.entity)}>
          <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${l.online?"fp3d-pve-dot-on":"fp3d-pve-dot-bad"}"></span>${l.name} · ${t(l.online?"pve_online":"pve_offline")}</span>
          ${i(t("pve_cpu"),l.cpu)} ${i(t("pve_ram"),l.memory)} ${i(t("pve_disk"),l.disk)}
          <span class="fp3d-pve-facts">
            ${l.vmsOn!==null||l.lxcOn!==null?y`<span>${t("pve_running_counts",{vms:l.vmsOn??0,lxc:l.lxcOn??0})}</span>`:k}
            ${l.load!==null?y`<span>${t("pve_load")} ${ne(e,l.load,2)}</span>`:k}
            ${l.updates?y`<span>${t("pve_updates",{n:l.updates})}</span>`:k}
            ${l.failedTasks?y`<span class="fp3d-pve-warn">${t("pve_failed",{n:l.failedTasks})}</span>`:k}
          </span>
        </button>`)}
      <div class="fp3d-pve-grid">
        ${c.length?c.map(l=>y`<button class="fp3d-pve-tile ${l.running?"":"fp3d-pve-off"} ${l.problem?"fp3d-pve-down":""}" @click=${()=>xe(this,l.entity)}>
                <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${l.problem?"fp3d-pve-dot-bad":l.running?"fp3d-pve-dot-on":""}"></span>${l.name}</span>
                <span class="fp3d-pve-sub">${l.vmid!==null?`#${l.vmid} \xB7 `:""}${t(l.kind==="vm"?"pve_vm":"pve_lxc")}${l.ip?` \xB7 ${l.ip}`:""}</span>
                ${l.running?y`${i(t("pve_cpu"),l.cpu)} ${i(t("pve_ram"),l.memory)}
                      <span class="fp3d-pve-sub">${t("pve_disk")} ${a(l.disk)}${l.memoryUsed?` \xB7 ${l.memoryUsed}`:""}${l.since?` \xB7 ${t("pve_since",{d:Ns(l.since)})}`:""}</span>`:y`<span class="fp3d-pve-sub">${t(l.problem?"pve_problem":"pve_stopped")}</span>`}
              </button>`):y`<p class="fp3d-pve-sub">${t("pve_none")}</p>`}
      </div>
    </div>`}liveFor(e){var t;if(((t=this.live)==null?void 0:t.id)!==e){let n={id:e,el:null,failed:!1};this.live=n;let r=window;r.loadCardHelpers?r.loadCardHelpers().then(a=>{if(this.live!==n)return;let i=a.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});i.hass=this.hass,n.el=i,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}renderThrough(){let e=this._through;if(!e||!this.hass)return k;let t=this.hass.states[e.entity],n=t==null?void 0:t.attributes.entity_picture,r=n&&!Y(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null;return y`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${r?y`<img class="fp3d-through-img" src=${r} alt="" />`:k}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${Q(this.hass,e.entity)}</span>
        <span class="fp3d-still">${C(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${C(this.hass,"through_blend")}
          @input=${a=>this._blend=Number(a.target.value)/100}
        />
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${C(this.hass,"through_back")}</button>
      </div>
    </div>`}renderMenu(){var s;let e=this._menu;if(!e||!this.hass||this.ro)return k;let t=this.renderRoot.querySelector(".fp3d-stage"),n=(t==null?void 0:t.clientWidth)??800,r=(t==null?void 0:t.clientHeight)??600,a=Math.max(8,Math.min(n-240,e.x-116)),i=Math.max(8,Math.min(r-360,e.y-170));return y`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${a}px;top:${i}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        .presets=${L("sound")?((s=this.building)==null?void 0:s.settings.media_presets)??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${L("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${c=>this.lookThrough(c.detail.entity)}
      ></fp3d-quick-menu>`}onDeviceTap(e,t=0,n=0){var a;if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("hh:")){let[i,s]=e.slice(3).split("#");((a=this.building)==null?void 0:a.floors.flatMap(d=>d.furniture).find(d=>d.id===s&&d.type==="waste_bin"))?(this._binInfo={furnitureId:s,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(i,t,n):xe(this,i);return}if(e.startsWith("ws:")){let i=e.slice(3);this.ro?this.showInfo(i,t,n):(!this.confirmSet.has(i)||confirm(C(this.hass,"confirm_switch",{name:Q(this.hass,i)})))&&or(this.hass,i);return}if(this.ro){let i=this.building,s=i?i.energy.grid??Dt(i,d=>{var l,u;return((u=(l=this.furnitureLinks)==null?void 0:l.get(d.id))==null?void 0:u.power)??null}).grid:null,c=e==="grid"?s:e.startsWith("detect:")?e.slice(7):e;c&&this.showInfo(c,t,n);return}if(e==="grid"){let i=this.building,s=i?i.energy.grid??Dt(i,c=>{var d,l;return((l=(d=this.furnitureLinks)==null?void 0:d.get(c.id))==null?void 0:l.power)??null}).grid:null;s&&xe(this,s);return}if(e.startsWith("detect:")){xe(this,e.slice(7));return}let r=O(e);if(r==="cover"||r==="camera"){this._menu={entity:e,x:t,y:n};return}if(r&&ki.has(r)){if(this.confirmSet.has(e)&&!confirm(C(this.hass,"confirm_switch",{name:Q(this.hass,e)})))return;or(this.hass,e)}else xe(this,e)}startViewOf(){var e;return this.startView??((e=this.building)==null?void 0:e.settings.start_view)??null}currentView(){var e;return((e=this.viewer)==null?void 0:e.currentView())??null}resetView(){var e;this._through=null,(e=this.viewer)==null||e.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!L("energy_pro")||!e||this.roomId||!this.showEnergy)return k;let t=r=>C(this.hass,r),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:ie(this.hass,e.consumption)}),e.grid!==null){let r=e.grid<0;n.push({cls:r?"export":"grid",label:t(r?"energy_grid_export":"energy_grid_import"),value:ie(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:ie(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let r=[e.battery!==null?ie(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:r.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${ne(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),y`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?k:n.map(r=>y`<div class="fp3d-energy-item fp3d-energy-${r.cls}"><span>${r.label}</span><b>${r.value}</b></div>`)}
      ${this.flows!==null?k:y`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?k:y`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return k;let e=po[this.heatMode],t=this.heatMode==="temperature",n=t?Pt(this.hass,e.stops[0][0]):e.stops[0][0],r=t?Pt(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],a=t?Ce(this.hass):e.unit,i=s=>C(this.hass,s);return y`<div class="fp3d-legend">
      <b>${i(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${hl(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${ne(this.hass,n,0)} ${a}</span><span>${ne(this.hass,r,0)} ${a}</span></span>
      ${this.heatValues.size?k:y`<span class="fp3d-legend-none">${i("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=$n[this.theme]??$n.neon,t=this._sky;return e.night[0].map((n,r)=>Math.round(n+(e.day[0][r]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){let e=this._sky,t=(a,i)=>`rgb(${a.map((s,c)=>Math.round(s+(i[c]-s)*e)).join(",")})`,n=$n[this.theme]??$n.neon,r=`--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}`;return y`<div
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${r}
    >
      ${this._error?y`<p class="fp3d-error">${this._error}</p>`:k} ${this.clean?k:this.renderEnergy()} ${this.renderHologram()} ${this.clean?k:this.renderLegend()}
      ${this.renderAlerts()} ${this.clean||this._walk?k:y`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?k:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderThrough()} ${this.renderCameraWall()} ${this.renderProxmox()}
      ${this.clean?k:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.showStats&&this._stats?y`<span class="fp3d-stats"
            ><b>${this._stats.fps?C(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):C(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?y`(${this._stats.busy.map(a=>C(this.hass,`stats_busy_${a}`)).join(", ")})`:k} ·
            ${C(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${C(this.hass,this._stats.low?"stats_low":"stats_full",{r:ne(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${ne(this.hass,this.syncMs,1)} ms`:""}</span
          >`:k}
    </div>`}static styles=[Oe,Je,we`
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
      /* Pool Pro: ball valves and the six-way valve, set by hand */
      .fp3d-holo-valves {
        display: grid;
        gap: 4px;
        margin-top: 4px;
        max-height: 220px;
        overflow-y: auto;
        pointer-events: auto;
      }
      .fp3d-holo-valve,
      .fp3d-holo-valve-pos button {
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
      .fp3d-holo-valve {
        display: grid;
        grid-template-columns: 14px 1fr auto;
        gap: 6px;
        align-items: center;
      }
      .fp3d-holo-valve i {
        font-style: normal;
        color: #ff6b5a;
      }
      .fp3d-holo-valve.fp3d-holo-on i {
        color: #4dff9a;
      }
      .fp3d-holo-valve small {
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Wr);function ie(o,e){return Math.abs(e)>=1e3?`${ne(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function gu(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var bu=.25,Dl=o=>Math.round(o*1e3)/1e3;function Br(o,e,t,n,r){let a=o.rooms.find(i=>i.points.length>=3&&G([e,t],i.points));return!a||G([n,r],a.points)?[n,r]:G([n,t],a.points)?[n,t]:G([e,r],a.points)?[e,r]:[e,t]}function Nl(o,e,t,n=bu){let r=o.rooms.find(d=>d.points.length>=3&&G([e.x,e.z],d.points));if(!r)return null;let a=r.points,i=qe(a)>=0?1:-1,s=t/2,c=null;for(let d=0;d<a.length;d++){let l=a[d],u=a[(d+1)%a.length],p=Math.hypot(u[0]-l[0],u[1]-l[1]);if(p<.3)continue;let h=[(u[0]-l[0])/p,(u[1]-l[1])/p],f=[-h[1]*i,h[0]*i],m=(e.x-l[0])*h[0]+(e.z-l[1])*h[1];if(m<0||m>p)continue;let _=o.rooms.some(g=>g.id!==r.id&&g.points.some((M,T)=>{let x=g.points[(T+1)%g.points.length],S=Math.abs((M[0]-l[0])*f[0]+(M[1]-l[1])*f[1]),F=Math.abs((x[0]-l[0])*f[0]+(x[1]-l[1])*f[1]);return S<.02&&F<.02}))?s:0,w=(e.x-l[0])*f[0]+(e.z-l[1])*f[1]-_,v=Math.atan2(-f[0],f[1])*180/Math.PI,$=g=>Math.abs((e.rotation-g+540)%360-180),P=[{rotation:v,extent:e.d/2},{rotation:v+90,extent:e.w/2},{rotation:v-90,extent:e.w/2}].reduce((g,M)=>$(M.rotation)<$(g.rotation)?M:g);if($(P.rotation)>50)continue;let I=w-P.extent;Math.abs(I)>n||c&&Math.abs(I)>=Math.abs(c.gap)||(c={x:Dl(e.x-f[0]*I),z:Dl(e.z-f[1]*I),rotation:(Math.round(P.rotation)%360+360)%360,gap:I})}return c?{x:c.x,z:c.z,rotation:c.rotation}:null}var Ur;function _u(){let o=new URL("./neonplan3d-timetravel.js?v=914231be13b7",new URL(import.meta.url)).href;return Ur??=import(o).catch(e=>{throw Ur=void 0,e}),Ur}var qt=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),_u().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("CasaNeon: time travel failed to load",t),this.host.requestUpdate()}))}stop(){var e;this.active&&(this.starting=!1,(e=this.session)==null||e.dispose(),this.session=null,this.host.requestUpdate())}hass(e){var t;return((t=this.session)==null?void 0:t.hass)??e}};var X={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},Kr=class extends ge{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_heat:{state:!0},_theme:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_proxmox:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_accent:{state:!0},_weather:{state:!0}};data=new St(this);tt=new qt(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode=X.get("walls")==="cut"?"cut":"auto",this._explode=X.get("explode")!=="0",this._keepRoof=X.get("roof")==="1";let e=X.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=X.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=X.get("markers");this._markers=t==="none"||t==="all"?t:"important";let n=X.get("heat");this._heat=n==="temperature"||n==="humidity"||n==="co2"||n==="values"?n:"none";let r=X.get("theme");this._theme=r&&Er.includes(r)?r:"neon";let a=X.get("accent");this._accent=a&&/^#[0-9a-f]{6}$/i.test(a)?a:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let i=X.get("floor_stack");this._floorStack=i==="stacked"||i==="single"?i:"dim",this._roomNames=X.get("room_names")!=="0",this._controlsRight=X.get("controls")==="right",this._keepView=X.get("keep_view")==="1",this._trail=X.get("trail")==="1",this._cameraWall=!1,this._proxmox=!1,this._clean=X.get("clean")==="1",this._navWrap=X.get("nav_wrap")==="1",this._optsOpen=!1,this._weather=X.get("weather")!=="0"}t(e,t){return C(this.hass,e,t)}willUpdate(e){var n;e.has("hass")&&this.hass&&(this.data.setHass(this.hass),(n=this.tt.session)==null||n.setLive(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(r=>r.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){var e,t;return((t=(e=this.hass)==null?void 0:e.user)==null?void 0:t.is_admin)??!1}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){var r;let{floorId:t,roomId:n}=e.detail;if((((r=this.data.building)==null?void 0:r.floors.length)??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,X.set("walls",e)}setKeepRoof(e){this._keepRoof=e,X.set("roof",e?"1":"0")}setExplode(e){this._explode=e,X.set("explode",e?"1":"0")}setQuality(e){this._quality=e,X.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let a of r.floors){let i=a.furniture.find(s=>s.id===e);i&&t(i,a)}this.data.edit(r)}editDevice(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let a of r.floors){let i=a.placements.find(s=>s.entity_id===e);i&&t(i,a)}this.data.edit(r)}moveDevice(e){let{id:t,x:n,z:r}=e.detail;this.editDevice(t,(a,i)=>{let[s,c]=Br(i,a.x,a.z,n,r);Object.assign(a,{x:s,z:c})})}turnStep(){return O(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.placements=r.placements.filter(a=>a.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let t=this.data.building,n=t==null?void 0:t.floors.find(u=>u.placements.some(p=>p.entity_id===e)),r=n==null?void 0:n.placements.find(u=>u.entity_id===e);if(!n||!r)return k;let a=O(e),i=a==="light",s=a==="camera",c=r.mount==="ceiling",d=a?At(a,n.height,i||s?r.mount??(s?"wall":"ceiling"):null):1,l=(u,p,h,f,m,b)=>y`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${f}
          max=${m}
          .value=${String(Math.round(p*100)/100)}
          @change=${_=>{let w=parseFloat(_.target.value.replace(",","."));Number.isFinite(w)&&b(Math.min(m,Math.max(f,w)))}}
        />
      </label>`;return y`${i?y`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>y`<option value=${u} ?selected=${u===(r.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:k}
      ${s?y`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!c}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${c}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${l(this.t("camera_fov_short"),r.fov??(c?360:90),5,10,360,u=>this.editDevice(e,p=>p.fov=u))}
            ${l(this.t("camera_reach_short"),r.reach??(c?3:4.5),.5,.5,50,u=>this.editDevice(e,p=>p.reach=u))}
            ${l(this.t("camera_tilt_short"),r.tilt??(c?65:20),5,0,90,u=>this.editDevice(e,p=>p.tilt=u))}`:k}
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
      ${r.y!==null?y`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:k}`}furnitureName(e){var n;let t=(n=this.data.building)==null?void 0:n.floors.flatMap(r=>r.furniture).find(r=>r.id===e);return t?ye(this.hass,t.type):""}moveFurniture(e){var i;let{id:t,x:n,z:r}=e.detail,a=((i=this.data.building)==null?void 0:i.settings.wall_interior)??.12;this.editFurniture(t,(s,c)=>{let[d,l]=Br(c,s.x,s.z,n,r);Object.assign(s,{x:d,z:l});let u=Nl(c,s,a);u&&Object.assign(s,u)})}renderSizeFields(e){var c,d,l;let t=(c=this.data.building)==null?void 0:c.floors.flatMap(u=>u.furniture).find(u=>u.id===e);if(!t)return k;let n=va(this.hass,(d=this.data.building)==null?void 0:d.settings.units)==="imperial",r=u=>n?ya(u):String(Math.round(u*100)/100),a=u=>n?wa(u,"imperial"):parseFloat(u.replace(",",".")),i=(u,p)=>y`<label class="fp3d-size" title=${this.t(`size_${u}`)}
      >${p}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${r(t[u])}
        @change=${h=>{let f=a(h.target.value)??NaN;Number.isFinite(f)&&f>0&&this.editFurniture(e,m=>m[u]=Math.round(f*1e3)/1e3)}}
    /></label>`,s=(l=this.data.building)==null?void 0:l.floors.find(u=>u.furniture.some(p=>p.id===e));return y`${i("w",this.t("size_short_w"))}${i("d",this.t("size_short_d"))}${i("h",this.t("size_short_h"))}
    ${s&&ci(t)?y`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${r(t.mount_y??me(s,t))}
              @change=${u=>{let p=a(u.target.value)??NaN;Number.isFinite(p)&&p>=0&&this.editFurniture(e,h=>h.mount_y=Math.round(p*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?y`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,u=>u.mount_y=null)}>${this.t("height_auto")}</button>`:k}`:k}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.furniture=r.furniture.filter(a=>a.id!==e);this.data.edit(n),this._selFurniture=null}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!L("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this._proxmox=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(r,a)=>C(this.hass,r,a)})}}updated(){if(this.ttLinked||!this.data.building||!xt()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&L("time_travel")&&this.toggleTimeTravel(e)}back(){var e,t;this._roomId?this._roomId=null:this._floorId&&(((e=this.data.building)==null?void 0:e.floors.length)??0)>1?this._floorId=null:(t=this.view3d())==null||t.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop()}render(){let e=this.data.building,t=this.data.saveState;return y`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._clean&&this._mode==="view"?k:y`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>CasaNeon</h1>
          ${this.isAdmin?y`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                <button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}
                </button>
              </div>`:k}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&(e!=null&&e.floors.some(n=>n.rooms.length))?y`<button
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
                ${["auto","low","high"].map(n=>y`<button aria-pressed=${this._quality===n} @click=${()=>this.setQuality(n)}>${this.t(`quality_${n}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${Er.map(n=>y`<button
                      aria-pressed=${this._theme===n}
                      @click=${()=>{this._theme=n,X.set("theme",n)}}
                    >
                      ${this.t(`theme_${n}`)}
                    </button>`)}
                <label class="fp3d-accent-pick" title=${this.t("accent_hint")}>
                  <input
                    type="color"
                    .value=${this._accent??"#37e0ff"}
                    aria-label=${this.t("accent")}
                    @input=${n=>{this._accent=n.target.value,X.set("accent",this._accent)}}
                  />
                  ${this._accent?y`<button
                        class="fp3d-accent-reset"
                        title=${this.t("accent_reset")}
                        aria-label=${this.t("accent_reset")}
                        @click=${()=>{this._accent=null,X.set("accent","")}}
                      >
                        ↺
                      </button>`:k}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","important","all"].map(n=>y`<button
                      aria-pressed=${this._markers===n}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=n,X.set("markers",n)}}
                    >
                      ${this.t(`markers_${n}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(n=>y`<button
                      aria-pressed=${this._controlsRight===n}
                      title=${this.t(n?"controls_right":"controls_left")}
                      aria-label=${this.t(n?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=n,X.set("controls",n?"right":"left")}}
                    >
                      ${n?"\u25E8":"\u25E7"}
                    </button>`)}
                <button
                  aria-pressed=${this._keepView}
                  title=${`${this.t("keep_view")}: ${this.t("keep_view_hint")}`}
                  aria-label=${this.t("keep_view")}
                  @click=${()=>{this._keepView=!this._keepView,X.set("keep_view",this._keepView?"1":"0")}}
                >
                  ⌖
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
          ${this._mode==="editor"&&t!=="idle"?y`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:k}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?k:this.renderNotices()}
        ${this.data.error&&!e?y`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:k}
        ${!e&&!this.data.error?y`<p class="fp3d-message">${this.t("loading")}</p>`:k}
        ${e?this._mode==="editor"&&this.isAdmin?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):k}
      </div>
    `}renderNotices(){var n;let e=this.data,t=[];if(e.needsRestart&&(e.versionGap==="frontend"?t.push(y`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(y`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(y`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let r=new Date(e.draft.savedAt).toLocaleString((n=this.hass)==null?void 0:n.language);t.push(y`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:r})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?y`<div class="fp3d-notices">${t}</div>`:k}renderExtensions(){return this._editorReady?y`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`:(Bo().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),y`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?y`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(Bo().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),y`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){var a,i;if(!e.floors.length||!e.floors.some(s=>s.rooms.length))return y`<div class="fp3d-empty">
        <p>${this.t(this.isAdmin?"no_building_admin":"no_building")}</p>
        ${this.isAdmin?y`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:k}
      </div>`;let t=e.floors.find(s=>s.id===this._floorId),n=t?[t]:e.floors,r=this.tt.active;return y`
      ${this._clean?k:y`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?y`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(s=>y`<button
                  class="fp3d-chip"
                  aria-pressed=${s.id===this._floorId}
                  @click=${()=>{this._floorId=s.id,this._roomId=null}}
                >
                  ${s.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:k}
        ${n.flatMap(s=>[n.length>1&&s.rooms.some(c=>c.name.trim())?y`<span class="fp3d-nav-floor">${s.name}</span>`:k,...s.rooms.filter(c=>c.name.trim()).map(c=>y`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${c.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=s.id),this._roomId=c.id===this._roomId?null:c.id}}
            >
              ${c.name}
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
          .replay=${((a=this.tt.session)==null?void 0:a.replay)??null}
          .building=${e}
          .packs=${this.data.packs}
          .floorStack=${this._floorStack}
          .roomLabels=${this._roomNames}
          .controlsRight=${this._controlsRight}
          .keepView=${this._keepView}
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
          .panelOpen=${!!this._roomId}
          .floorId=${e.floors.length>1?this._floorId:((i=e.floors[0])==null?void 0:i.id)??null}
          .roomId=${this._roomId}
          .wallMode=${this._wallMode}
          .explode=${this._explode}
          .keepRoof=${this._keepRoof}
          .markerMode=${this._markers}
          .heatMode=${this._heat}
          .theme=${this._theme}
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
        ${this._roomId?y`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${s=>{var c;return(c=this.view3d())==null?void 0:c.lookThrough(s.detail.entity)}}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${r}
              .room=${e.floors.flatMap(s=>s.rooms).find(s=>s.id===this._roomId)??null}
              .floor=${e.floors.find(s=>s.rooms.some(c=>c.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${Tt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:k}
        ${this.tt.session?y`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:k}
        ${this._clean?k:y`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?y`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?y`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:k}
          ${!this._floorId&&e.settings.roof.type!=="none"?y`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:k}
          ${e.floors.length>1&&this._floorId?y`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(s=>y`<button
                      aria-pressed=${this._floorStack===s}
                      @click=${()=>{this._floorStack=s,X.set("floor_stack",s)}}
                    >
                      ${this.t(`floor_stack_short_${s}`)}
                    </button>`)}
              </div>`:k}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(s=>y`<button
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
            ${L("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>{this._cameraWall=!this._cameraWall,this._cameraWall&&(this._proxmox=!1)}}
          >
            ${L("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          ${Os(this.hass)?y`<button
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
            ${L("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:k}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${r} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${L("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?y`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:k}
        </div>`}
        ${this._furnish?y`<div class="fp3d-furnish-bar">
              ${this._selFurniture?y`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,s=>s.mirror=!s.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?y`<span>${Q(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:y`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:k}
      </div>
    `}static styles=[Oe,Je,we`
      :host {
        display: block;
        /* HA gives the custom panel's parent no explicit height, so 100% collapses. The parent may pad itself by the
           screen's safe areas (notches; some themes set them on every screen): those are taken off, or the panel is
           taller than the window and its bottom is cut off (#529). */
        height: calc(100vh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
        height: calc(100dvh - var(--safe-area-inset-top, 0px) - var(--safe-area-inset-bottom, 0px));
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
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",Kr);function _o(o,e,t=new Date){var s;if(!o||o==="off")return!1;if(o==="sun")return((s=e==null?void 0:e.states["sun.sun"])==null?void 0:s.state)==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let r=Number(n[1])*60+Number(n[2]),a=Number(n[3])*60+Number(n[4]),i=t.getHours()*60+t.getMinutes();return r<=a?i>=r&&i<a:i>=r||i<a}var ql;function Wl(){let o=new URL("./neonplan3d-card-editor.js?v=3a0901ba4b1b",new URL(import.meta.url)).href;return ql??=import(o),ql}function Bl(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var Gr=class extends ge{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new St(this);tt=new qt(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=Bl(),this._heat=null,this._explode=null,this._fullscreen=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){var n;clearTimeout(this.cleanTimer);let t=((n=this._config)==null?void 0:n.controls_hide_after)??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){var t;clearTimeout(this.idleTimer);let e=((t=this._config)==null?void 0:t.idle_return)??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!L("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:(n==null?void 0:n.quality)??"auto",speed:(n==null?void 0:n.time_travel_speed)??null,range:(n==null?void 0:n.time_travel_range)??null,t:(r,a)=>C(this.hass,r,a)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){var e,t,n,r;if((e=this.tt.session)!=null&&e.playing){this.armIdle();return}this.tt.stop(),this._roomId=((t=this._config)==null?void 0:t.room)??null,this._floorId=void 0,(n=this.view3d())==null||n.resetView(),(r=this._config)!=null&&r.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{var e;this._fullscreen=!!document.fullscreenElement&&((e=this.shadowRoot)==null?void 0:e.contains(document.fullscreenElement))===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{var t,n;let e=Math.round(((t=window.visualViewport)==null?void 0:t.height)??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),(n=this._config)!=null&&n.fill&&!this._fullscreen){let r=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(r-this._top)>1)&&(this._top=r)}};connectedCallback(){var e;super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>{var t;return this._night=_o((t=this._config)==null?void 0:t.night,this.hass)},6e4)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){var e,t,n;document.fullscreenElement?document.exitFullscreen():(n=(t=(e=this.shadowRoot)==null?void 0:e.querySelector("ha-card"))==null?void 0:t.requestFullscreen)==null||n.call(t)}static async getConfigElement(){return await Wl(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=Bl(),this._heat=null,this._explode=null,this._orbit=!1,this._night=_o(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){var e;return Math.ceil((((e=this._config)==null?void 0:e.height)??420)/50)}getGridOptions(){var e,t;return{columns:"full",rows:(e=this._config)!=null&&e.fill?12:Math.ceil((((t=this._config)==null?void 0:t.height)??420)/56),min_rows:4}}willUpdate(e){var t,n;if(e.has("hass")&&this.hass){this.data.setHass(this.hass),(t=this.tt.session)==null||t.setLive(this.hass);let r=_o((n=this._config)==null?void 0:n.night,this.hass);r!==this._night&&(this._night=r)}}get canSwitch(){var e;return!((e=this._config)!=null&&e.floor)||this.thumbs}get thumbs(){var e,t;return((e=this._config)==null?void 0:e.floor_thumbs)??!((t=this._config)!=null&&t.floor)}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){var w,v,$,A,P,I,g,M,T,x,S,F,W,B,j,q,oe,V;let e=this.data.building,t=((w=this._config)==null?void 0:w.height)??420,n=this._config;!this.roomApplied&&e&&(n!=null&&n.room)&&(this.roomApplied=!0,e.floors.some(U=>U.rooms.some(te=>te.id===n.room))&&(this._roomId=n.room));let r=this._floorId===void 0?(n==null?void 0:n.floor)??null:this._floorId,a=e&&e.floors.length===1?e.floors[0].id:e!=null&&e.floors.some(U=>U.id===r)?r:null,i=!!this._roomId&&(n==null?void 0:n.room_panel)===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!a&&((e==null?void 0:e.floors.length)??0)>1,s=U=>(n==null?void 0:n.controls)===!0||Array.isArray(n==null?void 0:n.controls)&&n.controls.includes(U),c=["temperature","humidity","co2"].filter(U=>s(U)),d=this._walls??(n==null?void 0:n.walls)??"auto",l=this._heat??(n==null?void 0:n.heatmap)??"none",u=this._explode??(n==null?void 0:n.explode)??!0,p=this._fullscreen?"100%":n!=null&&n.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${t}px`,h=!!e&&!this._clean&&(i||(!!(n!=null&&n.controls)||!!(n!=null&&n.time_travel))&&!(this._roomId&&n.room_panel!==!1)),f=this.tt.active,m=(n==null?void 0:n.controls_hidden)!==void 0||((n==null?void 0:n.controls_hide_after)??0)>0,b=U=>C(this.hass,U),_=/^#[0-9a-f]{6}$/i.test((n==null?void 0:n.accent)??"")?n.accent:null;return y`<ha-card class=${this._night?"fp3d-night":""} style=${_?`--fp3d-accent:${_}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${f?"fp3d-tt":""}" style="height:${p}">
        ${e&&e.floors.some(U=>U.rooms.length)?y`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${((v=this.tt.session)==null?void 0:v.replay)??null}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${a}
              .roomId=${this._roomId}
              .wallMode=${d}
              .explode=${u}
              .keepRoof=${(n==null?void 0:n.roof_fade)===!1}
              .quality=${(($=this._config)==null?void 0:$.quality)??"auto"}
              ?showStats=${((A=this._config)==null?void 0:A.stats)??!1}
              .markerMode=${((P=this._config)==null?void 0:P.markers)??"important"}
              .markerNames=${((I=this._config)==null?void 0:I.marker_names)===!0}
              .central=${((g=this._config)==null?void 0:g.central)!==!1}
              .walkable=${((M=this._config)==null?void 0:M.walk)!==!1}
              .petsOn=${((T=this._config)==null?void 0:T.pets)!==!1}
              .ghostOn=${((x=this._config)==null?void 0:x.ghost)!==!1}
              .buttons=${((F=(S=this._config)==null?void 0:S.buttons)==null?void 0:F.map((U,te)=>({id:`card_${te}`,...U})))??null}
              .heatMode=${l}
              .theme=${((W=this._config)==null?void 0:W.theme)??"neon"}
              .accent=${((B=this._config)==null?void 0:B.accent)??null}
              .showEnergy=${((j=this._config)==null?void 0:j.energy)??!0}
              .flows=${((q=this._config)==null?void 0:q.flows)??null}
              .holograms=${((oe=this._config)==null?void 0:oe.holograms)??null}
              .floorThumbs=${this.thumbs}
              .roomLabels=${(n==null?void 0:n.room_names)!==!1}
              .controlsRight=${(n==null?void 0:n.controls_side)==="right"}
              .keepView=${(n==null?void 0:n.keep_view)===!0}
              .floorStack=${(n==null?void 0:n.floor_stack)??"dim"}
              .panelOpen=${!!this._roomId&&(n==null?void 0:n.room_panel)!==!1}
              .alerts=${(n==null?void 0:n.alerts)!==!1}
              .householdCard=${(n==null?void 0:n.household_card)!==!1}
              .alertJump=${!!(n!=null&&n.alert_jump)}
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
              @room-tap=${U=>{if(this.canSwitch&&((e==null?void 0:e.floors.length)??0)>1&&U.detail.floorId&&a!==U.detail.floorId){this._floorId=U.detail.floorId,this._roomId=null;return}U.detail.roomId&&(this._roomId=U.detail.roomId===this._roomId?null:U.detail.roomId)}}
              @floor-tap=${U=>{this._floorId=U.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:y`<p class="fp3d-card-msg">${this.data.error??(e?C(this.hass,"no_building"):C(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&((V=this._config)==null?void 0:V.room_panel)!==!1?y`<fp3d-room-panel
              @camera-look=${U=>{var te;return(te=this.view3d())==null?void 0:te.lookThrough(U.detail.entity)}}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${f}
              .room=${e.floors.flatMap(U=>U.rooms).find(U=>U.id===this._roomId)??null}
              .floor=${e.floors.find(U=>U.rooms.some(te=>te.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${Tt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:k}
        ${h&&e?y`<div class="fp3d-card-controls">
              ${i?y`<button class="fp3d-chip" @click=${()=>this.back()}>${b("back")}</button>`:k}
              ${n!=null&&n.time_travel?y`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${f} title=${b("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${L("time_travel")?"\u23EA":"\u{1F512}"} ${b("tt_chip")}
                  </button>`:k}
              ${n!=null&&n.camera_wall?y`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${b("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${b("cameras_short")}</button>`:k}
              ${s("walls")?y`<div class="fp3d-seg">
                    <button aria-pressed=${d==="auto"} @click=${()=>this.setWalls("auto")}>${b("walls_auto")}</button>
                    <button aria-pressed=${d==="cut"} @click=${()=>this.setWalls("cut")}>${b("walls_cut")}</button>
                  </div>`:k}
              ${s("floors")&&e.floors.length>1&&!a?y`<div class="fp3d-seg">
                    <button aria-pressed=${u} @click=${()=>this._explode=!0}>${b("floors_apart")}</button>
                    <button aria-pressed=${!u} @click=${()=>this._explode=!1}>${b("floors_stacked")}</button>
                  </div>`:k}
              ${c.length?y`<div class="fp3d-seg" role="group" aria-label=${b("heatmap")}>
                    ${["none",...c].map(U=>y`<button aria-pressed=${l===U} @click=${()=>this._heat=U}>
                          ${b(U==="none"?"heat_off":`heat_short_${U}`)}
                        </button>`)}
                  </div>`:k}
            </div>`:k}
        ${this.tt.session?y`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:k}
        ${n!=null&&n.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?y`<button class="fp3d-card-full" title=${b(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${b(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:k}
        ${n!=null&&n.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?y`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?y`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:k}
      </div>
    </ha-card>`}static styles=[Oe,Je,we`
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
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",Gr);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:C(void 0,"card_name"),description:C(void 0,"card_description"),preview:!1})}_a();
