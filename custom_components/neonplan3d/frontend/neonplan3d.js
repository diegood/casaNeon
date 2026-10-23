Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var ua=new URL(import.meta.url),la=ua.searchParams.get("v"),ca=o=>new URL(`./fonts/${o}${la?`?v=${la}`:""}`,ua).href,da="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function pa(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${ca("figtree.woff2")}) format("woff2");unicode-range:${da}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${ca("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${da}}`,document.head.append(o)}function ha(o,e){var t,n;return e==="metric"||e==="imperial"?e:((n=(t=o==null?void 0:o.config)==null?void 0:t.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function Hd(o,e){return String(Number(o.toFixed(e)))}function fa(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),r=Math.floor(n/12+1e-9),i=n-r*12,a=Hd(i,e>=2?1:0);return r?i<.05?`${t}${r}'`:`${t}${r}' ${a}"`:`${t}${a}"`}function ma(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,r=0,i=!1,a=!1,s=t;for(let l of t.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];i=!0,s=s.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(r+=d*.3048,a=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?r+=d*.0254:c==="mm"?r+=d/1e3:c==="cm"?r+=d/100:c==="m"?r+=d:r+=e==="imperial"?d*(a?.0254:.3048):d}return!i||/[^\s+]/.test(s)?null:r}var Zn=globalThis,eo=Zn.ShadowRoot&&(Zn.ShadyCSS===void 0||Zn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qo=Symbol(),ga=new WeakMap,mn=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Qo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(eo&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=ga.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ga.set(t,e))}return e}toString(){return this.cssText}},ba=o=>new mn(typeof o=="string"?o:o+"",void 0,Qo),Ie=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new mn(t,o,Qo)},_a=(o,e)=>{if(eo)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=Zn.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},Jo=eo?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ba(t)})(o):o;var{is:Ld,defineProperty:Od,getOwnPropertyDescriptor:Dd,getOwnPropertyNames:jd,getOwnPropertySymbols:Vd,getPrototypeOf:Nd}=Object,to=globalThis,va=to.trustedTypes,qd=va?va.emptyScript:"",Xo=to.reactiveElementPolyfillSupport,gn=(o,e)=>o,Zo={toAttribute(o,e){switch(e){case Boolean:o=o?qd:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},wa=(o,e)=>!Ld(o,e),ya={attribute:!0,type:String,converter:Zo,reflect:!1,useDefault:!1,hasChanged:wa};Symbol.metadata??=Symbol("metadata"),to.litPropertyMetadata??=new WeakMap;var Ke=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ya){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Od(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=Dd(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let s=r==null?void 0:r.call(this);i==null||i.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ya}static _$Ei(){if(this.hasOwnProperty(gn("elementProperties")))return;let e=Nd(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(gn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gn("properties"))){let t=this.properties,n=[...jd(t),...Vd(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(Jo(r))}else e!==void 0&&t.push(Jo(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _a(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var i;let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:Zo).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){var i,a;let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let s=n.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:Zo;this._$Em=r;let d=l.fromAttribute(t,s.type);this[r]=d??((a=this._$Ej)==null?void 0:a.get(r))??d,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){var a;if(e!==void 0){let s=this.constructor;if(r===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??wa)(i,t)||n.useDefault&&n.reflect&&i===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,a]of r){let{wrapped:s}=a,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Ke.elementStyles=[],Ke.shadowRootOptions={mode:"open"},Ke[gn("elementProperties")]=new Map,Ke[gn("finalized")]=new Map,Xo==null||Xo({ReactiveElement:Ke}),(to.reactiveElementVersions??=[]).push("2.1.2");var sr=globalThis,xa=o=>o,no=sr.trustedTypes,ka=no?no.createPolicy("lit-html",{createHTML:o=>o}):void 0,Aa="$lit$",Je=`lit$${Math.random().toFixed(9).slice(2)}$`,Ia="?"+Je,Wd=`<${Ia}>`,mt=document,_n=()=>mt.createComment(""),vn=o=>o===null||typeof o!="object"&&typeof o!="function",lr=Array.isArray,Bd=o=>lr(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",er=`[ 	
\f\r]`,bn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$a=/-->/g,Ma=/>/g,ht=RegExp(`>|${er}(?:([^\\s"'>=/]+)(${er}*=${er}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sa=/'/g,Ea=/"/g,Ta=/^(?:script|style|textarea|title)$/i,cr=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),b=cr(1),bt=cr(2),Vh=cr(3),gt=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Pa=new WeakMap,ft=mt.createTreeWalker(mt,129);function za(o,e){if(!lr(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ka!==void 0?ka.createHTML(e):e}var Ud=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",a=bn;for(let s=0;s<t;s++){let l=o[s],d,c,u=-1,p=0;for(;p<l.length&&(a.lastIndex=p,c=a.exec(l),c!==null);)p=a.lastIndex,a===bn?c[1]==="!--"?a=$a:c[1]!==void 0?a=Ma:c[2]!==void 0?(Ta.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=ht):c[3]!==void 0&&(a=ht):a===ht?c[0]===">"?(a=r??bn,u=-1):c[1]===void 0?u=-2:(u=a.lastIndex-c[2].length,d=c[1],a=c[3]===void 0?ht:c[3]==='"'?Ea:Sa):a===Ea||a===Sa?a=ht:a===$a||a===Ma?a=bn:(a=ht,r=void 0);let h=a===ht&&o[s+1].startsWith("/>")?" ":"";i+=a===bn?l+Wd:u>=0?(n.push(d),l.slice(0,u)+Aa+l.slice(u)+Je+h):l+Je+(u===-2?s:h)}return[za(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},yn=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,a=0,s=e.length-1,l=this.parts,[d,c]=Ud(e,t);if(this.el=o.createElement(d,n),ft.currentNode=this.el.content,t===2||t===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(r=ft.nextNode())!==null&&l.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(let u of r.getAttributeNames())if(u.endsWith(Aa)){let p=c[a++],h=r.getAttribute(u).split(Je),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:f[2],strings:h,ctor:f[1]==="."?or:f[1]==="?"?rr:f[1]==="@"?ir:Ot}),r.removeAttribute(u)}else u.startsWith(Je)&&(l.push({type:6,index:i}),r.removeAttribute(u));if(Ta.test(r.tagName)){let u=r.textContent.split(Je),p=u.length-1;if(p>0){r.textContent=no?no.emptyScript:"";for(let h=0;h<p;h++)r.append(u[h],_n()),ft.nextNode(),l.push({type:2,index:++i});r.append(u[p],_n())}}}else if(r.nodeType===8)if(r.data===Ia)l.push({type:2,index:i});else{let u=-1;for(;(u=r.data.indexOf(Je,u+1))!==-1;)l.push({type:7,index:i}),u+=Je.length-1}i++}}static createElement(e,t){let n=mt.createElement("template");return n.innerHTML=e,n}};function Lt(o,e,t=o,n){var a,s;if(e===gt)return e;let r=n!==void 0?(a=t._$Co)==null?void 0:a[n]:t._$Cl,i=vn(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=Lt(o,r._$AS(o,e.values),r,n)),e}var nr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??mt).importNode(t,!0);ft.currentNode=r;let i=ft.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new wn(i,i.nextSibling,this,e):l.type===1?d=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(d=new ar(i,this,e)),this._$AV.push(d),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=ft.nextNode(),a++)}return ft.currentNode=mt,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},wn=class o{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Lt(this,e,t),vn(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==gt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Bd(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&vn(this._$AH)?this._$AA.nextSibling.data=e:this.T(mt.createTextNode(e)),this._$AH=e}$(e){var i;let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=yn.createElement(za(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{let a=new nr(r,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(e){let t=Pa.get(e.strings);return t===void 0&&Pa.set(e.strings,t=new yn(e)),t}k(e){lr(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(_n()),this.O(_n()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let r=xa(e).nextSibling;xa(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Ot=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Lt(this,e,t,0),a=!vn(e)||e!==this._$AH&&e!==gt,a&&(this._$AH=e);else{let s=e,l,d;for(e=i[0],l=0;l<i.length-1;l++)d=Lt(this,s[n+l],t,l),d===gt&&(d=this._$AH[l]),a||=!vn(d)||d!==this._$AH[l],d===w?e=w:e!==w&&(e+=(d??"")+i[l+1]),this._$AH[l]=d}a&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},or=class extends Ot{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},rr=class extends Ot{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},ir=class extends Ot{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Lt(this,e,t,0)??w)===gt)return;let n=this._$AH,r=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==w&&(n===w||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},ar=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Lt(this,e)}};var tr=sr.litHtmlPolyfillSupport;tr==null||tr(yn,wn),(sr.litHtmlVersions??=[]).push("3.3.3");var Ca=(o,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,r=n._$litPart$;if(r===void 0){let i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new wn(e.insertBefore(_n(),i),i,void 0,t??{})}return r._$AI(o),r};var xn=globalThis,Pe=class extends Ke{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ca(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return gt}},Ra;Pe._$litElement$=!0,Pe.finalized=!0,(Ra=xn.litElementHydrateSupport)==null||Ra.call(xn,{LitElement:Pe});var dr=xn.litElementPolyfillSupport;dr==null||dr({LitElement:Pe});(xn.litElementVersions??=[]).push("4.2.2");async function Fa(o){return o.callWS({type:"neonplan3d/building/get"})}async function oo(o,e){return(await o.callWS({type:"neonplan3d/building/save",building:e})).revision}function Ha(o,e){return o.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}function La(o,e){return o.connection.subscribeMessage(e,{type:"neonplan3d/voice/subscribe"})}async function Oa(o,e,t,n){return(await o.callWS({type:"neonplan3d/voice/answer",ask_id:e,text:t,answered:n})).taken}async function Da(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function ja(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var Va=2.1;var Kd=new Set(["pending","firmware_mismatch","upgrading","provisioning","adopting","deleting"]),Gd=new Set(["disconnected","heartbeat_missed","inform_error","adoption_failed","isolated"]);function Yd(o,e){var n,r;let t=e&&e!=="none"?(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id:null;return t&&o.entities?Object.values(o.entities).filter(i=>i.device_id===t).map(i=>i.entity_id):[]}function Qd(o){let e=o==null?void 0:o.attributes.options;return Array.isArray(e)&&e.includes("connected")&&e.includes("disconnected")}function kn(o,e){let t=Yd(o,e.entity),n=i=>{var a,s,l;return`${i} ${((a=o.states[i])==null?void 0:a.attributes.friendly_name)??""} ${((l=(s=o.entities)==null?void 0:s[i])==null?void 0:l.translation_key)??""}`.toLowerCase()},r=i=>t.find(a=>a.startsWith("sensor.")&&i.test(n(a)))??null;return{state:t.find(i=>i.startsWith("sensor.")&&Qd(o.states[i]))??null,clients:r(/clients|clientes/),led:t.find(i=>i.startsWith("light."))??null,cpu:r(/cpu/),memory:r(/memor/),restart:t.find(i=>{var a;return i.startsWith("button.")&&(((a=o.states[i])==null?void 0:a.attributes.device_class)==="restart"||/restart|reinici/.test(n(i)))})??null}}var ur=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function Na(o,e){var r;let t=e.state?o.states[e.state]:void 0;return t?{status:Gd.has(t.state)||t.state==="unavailable"?"down":Kd.has(t.state)?"busy":"up",led:e.led?((r=o.states[e.led])==null?void 0:r.state)==="on":!0,clients:ur(e.clients?o.states[e.clients]:void 0),cpu:ur(e.cpu?o.states[e.cpu]:void 0),memory:ur(e.memory?o.states[e.memory]:void 0)}:null}function ro(o,e){var r,i,a,s;let t=(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id,n=t?(a=o.devices)==null?void 0:a[t]:void 0;return(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||((s=o.states[e])==null?void 0:s.attributes.friendly_name)||e}function qa(o){return o.status==="down"?[1,.22,.25]:o.status==="busy"?[1,.65,.15]:o.led?[.35,.65,1]:null}function Jd(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function hr(o){let e=xe(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(Jd).length>=2}var Wa=[],pr=new Map,Ba=0;function Ua(o){Wa=o,pr=new Map(o.flatMap(e=>e.items.map(t=>[Xd(e.id,t.id),t]))),Ba++}function $n(){return Wa}function Dt(){return Ba}function Xd(o,e){return`pack:${o}:${e}`}function Xe(o){return o.startsWith("pack:")}function io(o){return Xe(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function jt(o){return o==="robot_vacuum"||Xe(o)&&o.endsWith(":robot_vacuum")}function Zd(o){return o.z>.05}function Ka(o){let e=((o==null?void 0:o.parts)??[]).filter(t=>t.shape==="cyl"&&Zd(t));return e.length?e.reduce((t,n)=>n.w*n.d>t.w*t.d?n:t).z:.227}function Ga(o){return Xe(o)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(o)}var eu={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Ya(o){var e;return(e=xe(o))==null?void 0:e.parts.find(t=>t.screen)}function xe(o){if(!Xe(o))return;let e=pr.get(o);if(e)return e;let[,t,...n]=o.split(":"),r=eu[t];return r?pr.get(`pack:${r}:${n.join(":")}`):void 0}function Qa(o){return o.name.es??o.name.en??Object.values(o.name)[0]??o.id}function fe(o,e){let t=xe(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return Ja;if(e.type==="access_point")return e.variant==="wall"?Va:Math.max(0,o.height-Math.max(.005,e.h));if(ao.has(e.type))return Math.max(0,o.height-so(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t==null?void 0:t.mount){case"surface":return lo(o,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?0:Xa(e)}}var ts={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},af=Object.keys(ts),ns=1;function nu(o){return o.variant&&ts[o.variant]?o.variant:"80"}function os(o){return{30:1,50:2,80:3,100:4}[nu(o)]??3}function Mn(o,e){var s,l;let t=e.entity&&e.entity!=="none"?e.entity:null,n=t?(l=(s=o.entities)==null?void 0:s[t])==null?void 0:l.device_id:null,r=n&&o.entities?Object.values(o.entities).filter(d=>d.device_id===n).map(d=>d.entity_id):[],i=d=>{var c,u,p;return`${d} ${((c=o.states[d])==null?void 0:c.attributes.friendly_name)??""} ${((p=(u=o.entities)==null?void 0:u[d])==null?void 0:p.translation_key)??""}`.toLowerCase()},a=(d,c,u)=>r.find(p=>p.startsWith(`${d}.`)&&c.test(i(p))&&!(u&&u.test(i(p))))??null;return{heater:t,heating:a("binary_sensor",/heating|calentando|heizt/),showers:a("sensor",/shower|ducha|dusch/),remaining:a("sensor",/remaining|restante|restzeit/),power:a("switch",/power|encendid|_on\b/,/eco|legionella/),eco:a("switch",/\beco/)}}var es=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function rs(o,e){var l,d,c;let t=e.heater?o.states[e.heater]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=e.power?(l=o.states[e.power])==null?void 0:l.state:void 0,r=n!==void 0?n==="on":t.state!=="off",i=t.attributes,a=r&&(e.heating?((d=o.states[e.heating])==null?void 0:d.state)==="on":i.hvac_action==="heating"),s=es(e.remaining?o.states[e.remaining]:void 0);return{on:r,heating:a,current:typeof i.current_temperature=="number"?i.current_temperature:null,target:typeof i.temperature=="number"?i.temperature:null,showers:es(e.showers?o.states[e.showers]:void 0),remaining:a&&s!==null&&s>0?s:null,eco:e.eco?((c=o.states[e.eco])==null?void 0:c.state)==="on":!1}}var Ge={field:null,size:1,right:0,up:0};var as=["rain","snow","clouds","lightning","sky"];var ou={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function mr(o){return o==="hedge"||o==="fence"||o==="pergola"}function gr(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!mr(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function Me(o){return[...o.rooms,...gr(o)]}function ru(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let r=o.slope_dir??"x",i=(d,c)=>r==="x"?d:r==="-x"?-d:r==="z"?c:-c,a=1/0,s=-1/0;for(let[d,c]of o.points){let u=i(d,c);a=Math.min(a,u),s=Math.max(s,u)}if(s-a<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-a)/(s-a)));return n*l}function iu(o,e,t,n){return cs(o,e)+ou[e.type]-au(o,e,t,n)}var br=-.2,fr={set:!1,level:br};function ss(o){let e=(o==null?void 0:o.settings.terrain)??null;fr={set:(e==null?void 0:e.level)!=null,level:(e==null?void 0:e.level)??br}}function ls(o){return o.elevation>.3?0:fr.set?fr.level-o.elevation:br}function cs(o,e){return ls(o)+(e.offset??0)}function au(o,e,t,n){return e.type==="pool"?0:ru(e,t,n)}function _t(o,e,t){let n=(o.outdoor??[]).filter(i=>!mr(i.type)&&i.type!=="pool"&&Y([e,t],i.points)),r=[...n].reverse().find(i=>i.cut)??n[0];return r?iu(o,r,e,t):ls(o)}function ds(o,e){return cs(o,e)+(e.above?us(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function su(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?us(o):1.5}function lu(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!mr(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>Y(n,t.points)))}function Sn(o,e){return!e.above&&!lu(o,e)?Vt(o,e)-.05:ds(o,e)-su(e)}function Vt(o,e){return ds(o,e)-.15}function us(o){return o.height&&o.height>.3?o.height:1.2}var cu={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var ps={type:"none",pitch:35,overhang:.4},du={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...ps}};var hs=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],fs=.3;var ms=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Ja=1.75;function gs(o){if(["lamp_ceiling_fan","lamp_pendant","stairwell","parking"].includes(o.type)||uu.has(o.type))return!1;let e=xe(o.type);return!((e==null?void 0:e.mount)==="ceiling"&&e.light&&e.light!=="panel")}var ao=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function so(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var uu=new Set(["stairs","stairs_u"]);function _r(o){var e;return ms.has(o)||!!((e=xe(o))!=null&&e.light)}var pu=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var hu=1.05,fu=.3;function Xa(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return hu;case"wall_socket":return fu;case"water_heater":return ns;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var is=.04,mu=1.2;function lo(o,e,t,n=0){var i;let r=0;for(let a of o.furniture)!(pu.has(a.type)||(i=xe(a.type))!=null&&i.surface)||!Y([e,t],vt(a))||a.type==="worktop"&&n>0&&a.h-is>=mu&&n<=a.h-is-.02||(r=Math.max(r,a.h));return r}var tu=new Set([...ms,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Za={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_ceiling_fan:[1.2,1.2,.35],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.086,.05,.086],wall_socket:[.086,.05,.086],water_heater:[.506,.275,1.066],access_point:[.16,.16,.035],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var gu=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],bu=["standard","bars","glass_wall"];function _u(o,e){return o.type==="door"?o.style&&gu.includes(o.style)?o.style:e?"front":"interior":o.style&&bu.includes(o.style)?o.style:"standard"}function vu(o,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",i=o-.04,a=Math.min(1.05,Math.max(.6,i-(r?.6:.3))),s=(i-a)/(r?2:1),l=n.sidelight_width??s,d=r?n.sidelight_width2??n.sidelight_width??s:0;l=Math.max(.1,l),d=r?Math.max(.1,d):0;let c=i-.5;if(l+d>c){let p=Math.max(0,c)/(l+d);l*=p,d*=p}return r?{panels:[[.02,.02+l],[o-.02-d,o-.02]],x0:.02+l,x1:o-.02-d}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function bs(o,e){let t=o.width,n=vu(t,_u(o,!1),e,o),r=(n==null?void 0:n.x0)??0,i=(n==null?void 0:n.x1)??t;return o.leaves!==2?(r+i)/2:e?r+(i-r)/4:i-(i-r)/4}function vr(o){var e;o.energy={...cu,...o.energy??{}},o.presence=o.presence??[],o.settings={...du,...o.settings,roof:{...ps,...((e=o.settings)==null?void 0:e.roof)??{}}};for(let t of o.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(r=>({...r,panel:r.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),t.furniture=t.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=t.placements.filter(r=>r.entity_id.startsWith("light.")&&!r.pin);if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of n){let a=r[i.mount??"ceiling"],[s,l,d]=Za[a];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:a,x:i.x,z:i.z,rotation:0,w:s,d:l,h:d,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}t.openings=t.openings.map(r=>({...r,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return o}function _s(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function Oe(o){let e=0;for(let t=0;t<o.length;t++){let[n,r]=o[t],[i,a]=o[(t+1)%o.length];e+=n*a-i*r}return e/2}function Ce(o){let e=Oe(o);if(Math.abs(e)<1e-9){let r=o.length||1;return[o.reduce((i,a)=>i+a[0],0)/r,o.reduce((i,a)=>i+a[1],0)/r]}let t=0,n=0;for(let r=0;r<o.length;r++){let[i,a]=o[r],[s,l]=o[(r+1)%o.length],d=i*l-s*a;t+=(i+s)*d,n+=(a+l)*d}return[t/(6*e),n/(6*e)]}function vt(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=o.w/2,i=o.d/2;return[[-r,-i],[r,-i],[r,i],[-r,i]].map(([a,s])=>[o.x+a*t-s*n,o.z+a*n+s*t])}function Y(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,a]=e[n],[s,l]=e[r];a>o[1]!=l>o[1]&&o[0]<(s-i)*(o[1]-a)/(l-a)+i&&(t=!t)}return t}var vs={lamp_ceiling:"ceiling",lamp_ceiling_fan:"ceiling_fan",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var yu=700,wr="neonplan3d.unsaved",Nt="1.23.0",ws="floorplan-3d.unsaved";function wu(){try{let o=localStorage.getItem(wr)??localStorage.getItem(ws);return o?JSON.parse(o):null}catch{return null}}function yr(o){try{o?localStorage.setItem(wr,JSON.stringify(o)):(localStorage.removeItem(wr),localStorage.removeItem(ws))}catch{}}var qt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){var e;this.connected=!1,this.flush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},yu),this.host.requestUpdate()}get frontendVersion(){return Nt}get versionGap(){return!this.backendVersion||Nt==="dev"||this.backendVersion===Nt?null:xu(this.backendVersion,Nt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Nt!=="dev"&&this.backendVersion!==Nt}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(vr(e.building))}discardDraft(){this.draft=null,yr(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!(!e||!this.hass)){this.pending=null;for(let t of e.floors)for(let n of t.furniture)n.mount_y!=null&&n.mount_y>10&&(n.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await oo(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,yr(null)}catch(t){this.saveState="error",this.saveError=ys(t),yr({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Ha(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await ja(this.hass)}catch{this.packs=[]}Ua(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Fa(this.hass);this.building=vr(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=wu()),this.revision=e.revision,this.error=null}catch(e){this.error=ys(e)}this.host.requestUpdate()}}};function ys(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function xu(o,e){let t=o.split(/[.-]/).map(r=>Number.parseInt(r,10)||0),n=e.split(/[.-]/).map(r=>Number.parseInt(r,10)||0);for(let r=0;r<Math.max(t.length,n.length);r++){let i=(t[r]??0)-(n[r]??0);if(i)return i}return 0}var xs;function xr(){let o=new URL("./neonplan3d-editor.js?v=044759abdcea",new URL(import.meta.url)).href;return xs??=import(o),xs}function Wt(o){let e=(o.switch_keys??[]).slice(0,4).map(t=>t&&t!=="none"?t:null);return e.length?e:[null]}var ks=o=>o&&o!=="none"?o:null;function Bt(o){let e=(o.socket_outlets??[]).slice(0,4).map(t=>({entity:ks(t==null?void 0:t.entity),power:ks(t==null?void 0:t.power)}));return e.length?e:[{entity:null,power:null}]}function co(o){return o.switch_ring&&o.switch_ring!=="none"?o.switch_ring:null}function kr(o,e){var n;let t=e?(n=o.states[e])==null?void 0:n.state:void 0;return t==="on"||t==="open"||t==="opening"}var ku={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},$u=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),Mu=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),Su=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),uo=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],zs=new Set(["light","switch","fan"]);function Cs(o){return o.slice(0,o.indexOf("."))}function V(o){return ku[Cs(o)]??null}function $s(o){return o!==null&&o!=="scene"&&o!=="script"}function An(o,e){var n,r,i;let t=(n=o.entities)==null?void 0:n[e];return t?t.area_id?t.area_id:t.device_id&&((i=(r=o.devices)==null?void 0:r[t.device_id])==null?void 0:i.area_id)||null:null}function po(o,e){var n;let t=(n=o.entities)==null?void 0:n[e];return!!t&&(!!t.hidden||!!t.hidden_by||!!t.disabled_by)}function Ms(o,e){var a;let t=V(e);if(!t)return!1;let n=(a=o.entities)==null?void 0:a[e];if(po(o,e)||n!=null&&n.entity_category)return!1;let r=o.states[e];if(!r)return!1;let i=r.attributes.device_class;return t==="sensor"?i?$u.has(i):Mu.has(String(r.attributes.unit_of_measurement??"")):t==="binary"?i?Su.has(i):!!(n!=null&&n.area_id):!0}var Eu=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Ss(o,e){var r;if(V(e)!=="sensor")return!1;let t=(r=o.entities)==null?void 0:r[e];if(po(o,e)||t!=null&&t.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||Eu.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Z(n)}var $r=null;function Pn(o){var l,d;let e=$r;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,r=[],i=new Map,a=new Map;for(let c of Object.keys(o.entities??{})){let u=o.entities[c],p=u.device_id;p&&u.area_id&&(a.get(p)??a.set(p,new Set).get(p)).add(u.area_id),p&&zr(o,c)&&(n.get(p)??n.set(p,[]).get(p)).push(c),p&&!po(o,c)&&!u.entity_category&&(i.get(p)??i.set(p,new Set).get(p)).add(Cs(c));let h=Ms(o,c),f=An(o,c);if(!f){(h||Ss(o,c))&&$s(V(c))&&r.push(c);continue}h&&(t.get(f)??t.set(f,[]).get(f)).push(c)}if(o.entities)for(let c of Object.keys(o.states))o.entities[c]||(Ms(o,c)||Ss(o,c))&&$s(V(c))&&r.push(c);r.sort((c,u)=>uo.indexOf(V(c))-uo.indexOf(V(u))||J(o,c).localeCompare(J(o,u)));for(let[c,u]of t){let p=(d=(l=o.areas)==null?void 0:l[c])==null?void 0:d.name;u.sort((h,f)=>{let m=uo.indexOf(V(h)),g=uo.indexOf(V(f));return m-g||J(o,h,p).localeCompare(J(o,f,p))})}let s=new Set([...a].filter(([,c])=>c.size>1).map(([c])=>c));return $r={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:r,domains:i,hubs:s},$r}function _e(o,e){return!e||!o.entities?[]:Pn(o).areas.get(e)??[]}var Pu={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Au=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Iu=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Tu(o,e){var r,i,a;let t=(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id,n=t&&!Pn(o).hubs.has(t)?Pn(o).domains.get(t):void 0;return n&&[...n].some(s=>Au.has(s))?!1:!Iu.test(`${e} ${((a=o.states[e])==null?void 0:a.attributes.friendly_name)??""}`)}function Mr(o,e,t,n){var h;let r=(h=t.climate)==null?void 0:h[n];if(r==="none")return[];if(r)return o.states[r]?[r]:[];let i=Pu[n],a=(f,m)=>Y([f,m],t.points),s=(e==null?void 0:e.placements.filter(f=>f.entity_id.startsWith("sensor.")))??[],l=s.filter(f=>a(f.x,f.z)).map(f=>f.entity_id),d=new Set(s.filter(f=>!a(f.x,f.z)).map(f=>f.entity_id)),c=[...new Set([..._e(o,t.area_id).filter(f=>!d.has(f)),...l])],u=c.filter(f=>{var m;return f.startsWith("sensor.")&&((m=o.states[f])==null?void 0:m.attributes.device_class)===i&&(t.outdoor||Tu(o,f))});if(u.length)return u;let p=Rs[n];return p?c.filter(f=>{var m;return f.startsWith("climate.")&&typeof((m=o.states[f])==null?void 0:m.attributes[p])=="number"}):[]}var Rs={temperature:"current_temperature",humidity:"current_humidity"};function zu(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let i=Rs[t],a=i?Number(n==null?void 0:n.attributes[i]):Number.NaN;return t==="temperature"?Es(a,Fe(o)):a}let r=Number(n==null?void 0:n.state);return t==="temperature"?Es(r,n==null?void 0:n.attributes.unit_of_measurement):r}function Fe(o){var e,t;return((t=(e=o.config)==null?void 0:e.unit_system)==null?void 0:t.temperature)==="\xB0F"?"\xB0F":"\xB0C"}function Es(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function Ut(o,e){return Fe(o)==="\xB0F"?e*9/5+32:e}function Ze(o,e,t,n){let r=Mr(o,e,t,n).map(i=>zu(o,i,n)).filter(i=>Number.isFinite(i));return r.length?r.reduce((i,a)=>i+a,0)/r.length:null}function Fs(o,e){return!!o.entities&&Pn(o).hubs.has(e)}function Sr(o,e){return o.entities?Pn(o).power.get(e)??[]:[]}function J(o,e,t){var i,a;let n=o.states[e],r=(n==null?void 0:n.attributes.friendly_name)??((a=(i=o.entities)==null?void 0:i[e])==null?void 0:a.name)??e;if(t&&r.length>t.length+1&&r.toLowerCase().startsWith(t.toLowerCase()+" ")){let s=r.slice(t.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return r}function Hs(o,e){if(!e||e==="none")return null;let t=o.states[e];if(!t||Z(t))return null;let n=t.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(n))return!0;if(["off","closed","idle","false","inactive","standby"].includes(n))return!1;let r=Number(n);return Number.isFinite(r)?r>0:null}function Z(o){return!o||o.state==="unavailable"||o.state==="unknown"}var Cu=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Er(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Pr(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function qe(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Pr(o.state)||o.state==="returning";switch(V(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return Er(o)&&Cu.has(String(o.state).toLowerCase());default:return!1}}function Ls(o,e){if(!o||Z(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function Os(o){if(!o||Z(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],r=["heating","cooling","drying","fan"].includes(t);return{color:n,level:r||!t?1:.45}}function Ds(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(s=>parseInt(e.slice(s,s+2),16)/255),n=s=>{let l=Math.max(...s),d=Math.min(...s),c=l-d;return l<=0||c/l<.25?[-1,0]:[(l===s[0]?((s[1]-s[2])/c+6)%6:l===s[1]?(s[2]-s[0])/c+2:(s[0]-s[1])/c+4)*60,c/l]},[r]=n(t),[i]=n(o.color);if(r<0||i<0)return r<0&&i<0?o:null;let a=Math.abs(r-i);return Math.min(a,360-a)<=30?o:null}function yt(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,i;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?i=Ru(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:n}}function Ru(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function Kt(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var Fu=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Hu=new Set(["garage","gate"]),Lu=new Set(["window","opening"]);function En(o,e,t=!1){let n=new Map;return e.length&&o.forEach((r,i)=>{let a=t&&e.length===1?e[0]:e[i];a&&n.set(r.id,a)}),n}function Gt(o,e){let t=new Map,n=(i,a)=>i==="none"?null:i??a??null,r=(i,a,s)=>{let l=n(i.cover,a);return{cover:l,contact:i.sensor==="handle"&&i.contact==null?null:n(i.contact,s),tilt:i.tilt==="none"?null:i.tilt,contact2:i.leaves===2&&i.contact2&&i.contact2!=="none"?i.contact2:null,lock:(i.type==="door"||i.type==="window"&&i.sill<=.01)&&i.lock&&i.lock!=="none"?i.lock:null,tilt2:i.leaves===2&&i.tilt2&&i.tilt2!=="none"?i.tilt2:null,position:l&&V(l)==="cover"&&i.position&&i.position!=="none"?i.position:null,positionInverted:!!i.position_inverted,tiltAngle:i.tilt_angle&&i.tilt_angle!=="none"?i.tilt_angle:null,tiltMax:i.tilt_max??null,tiltOffset:i.tilt_offset??null,tiltInvert:!!i.tilt_invert,shut:!!i.shut,...i.contact_invert?{contactInvert:!0}:{},...i.cover_invert?{coverInvert:!0}:{}}};for(let i of e){for(let a of i.rooms){let s=i.openings.filter(y=>y.room_id===a.id).sort((y,S)=>y.edge-S.edge||y.offset-S.offset);if(!s.length)continue;let l=_e(o,a.area_id),d=y=>{var S;return(S=o.states[y])==null?void 0:S.attributes.device_class},c=l.filter(y=>V(y)==="cover"&&Fu.has(d(y))),u=s.filter(y=>y.type==="window"),p=s.filter(y=>y.type==="door"),h=s.filter(y=>y.type==="garage"),f=En(u,c,!0),m=En(u,l.filter(y=>V(y)==="binary"&&Lu.has(d(y)))),g=En(p,l.filter(y=>V(y)==="binary"&&d(y)==="door")),_=En(h,l.filter(y=>V(y)==="cover"&&Hu.has(d(y)??""))),x=En(h,l.filter(y=>V(y)==="binary"&&d(y)==="garage_door"));for(let y of s){let S=y.type==="window"?f:y.type==="garage"?_:null,z=y.type==="window"?m:y.type==="garage"?x:g;t.set(y.id,r(y,S==null?void 0:S.get(y.id),z.get(y.id)))}}for(let a of i.openings)t.has(a.id)||t.set(a.id,r(a))}return t}var Ou=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Du(o){if(!o||Z(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=Ou.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var ju=new Set(["unlocked","unlocking","open","opening"]);function Ar(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var Vu=.5;function We(o,e,t="window"){var x;e.cover&&Ar(e.cover)&&(e={...e,cover:null,position:null});let n=e.lock?o.states[e.lock]:void 0,r=n&&ju.has(n.state)?{unlocked:!0}:{},i=y=>{var S;return!!y&&((S=o.states[y])==null?void 0:S.state)==="on"},a=y=>!!y&&!!o.states[y]&&!Z(o.states[y]),s=y=>y?Du(o.states[y]):null,l=y=>{let S=s(y);return e.contactInvert&&y&&y!==e.tilt&&y!==e.tilt2&&S!=="tilted"&&S?S==="open"?"closed":"open":S},d=i(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",c=l(e.contact2)==="open"&&!d?1:0,u=i(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",p=u?1:0,h=e.tiltAngle?Number((x=o.states[e.tiltAngle])==null?void 0:x.state):NaN;if(Number.isFinite(h)){let y=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);p=Math.min(1,Math.max(0,y/(e.tiltMax||15))),p<.08&&(p=0),u=p>0}let f=l(e.contact)==="open"&&!u?1:0,m=null,g=e.cover?o.states[e.cover]:void 0,_=js(o,e.position);if(_!==null)m=e.positionInverted?_:1-_;else if(g&&!Z(g)){let y=g.attributes.current_position;typeof y=="number"?m=1-Math.min(100,Math.max(0,y))/100:m=g.state==="closed"?1:g.state==="opening"||g.state==="closing"?.5:0,e.coverInvert&&(m=1-m)}else e.cover&&(m=0);if(t==="door"){let y=l(e.contact);return m!==null&&g&&Ys.has(String(g.attributes.device_class??""))?{open:y===null?1-m:y==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...r}:{open:y===null?e.shut?0:Vu:y==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:m,sensed:y!==null||m!==null,...r}}if(t==="garage"){let y=l(e.contact),S=m!==null||y!==null;return m===null&&(m=y===null||y==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:m,sensed:S}}return{open:f,open2:c,tilt:p,tilt2:d?1:0,cover:m,sensed:a(e.contact)||a(e.tilt)||Number.isFinite(h),...r}}function js(o,e){let t=e?o.states[e]:void 0;if(!t||Z(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function Ir(o,e){var a,s;let t=new Map,n=[];for(let l of e){let d=V(l)==="camera"?`camera:${l}`:((s=(a=o.entities)==null?void 0:a[l])==null?void 0:s.device_id)??`entity:${l}`,c=t.get(d);c||(t.set(d,c=[]),n.push(d)),c.push(l)}let r=n.map(l=>{let d=t.get(l),c=d.find(u=>{var p,h;return!((h=(p=o.entities)==null?void 0:p[u])!=null&&h.name)})??d[0];return{primary:c,others:d.filter(u=>u!==c)}}),i=new Map(e.map((l,d)=>[l,d]));return r.sort((l,d)=>i.get(l.primary)-i.get(d.primary))}function ho(o,e){return Ir(o,e).map(t=>t.primary)}var Ps={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Vs=new Set(["tv_board","tv_wall"]);function Ns(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let r=String(n).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===i||i.length>=3&&r.includes(i)}function qs(o){return Vs.has(o)||!!Ya(o)}function fo(o){return qs(o)||o==="desk"||o==="fridge_smart"}function Yt(o,e){var i;let t=new Set,n=wt(o,e),r=e.some(a=>a.openings.some(s=>s.confirm))?Gt(o,e):null;for(let a of e){for(let s of a.placements)s.confirm&&t.add(s.entity_id);for(let s of a.openings){let l=s.confirm?r==null?void 0:r.get(s.id):null;l!=null&&l.cover&&l.cover!=="none"?t.add(l.cover):s.type==="garage"&&(l!=null&&l.contact)&&V(l.contact)==="switch"&&t.add(l.contact)}for(let s of a.furniture){if(s.confirm&&s.type==="wall_switch")for(let d of Wt(s))d&&t.add(d);if(s.confirm&&s.type==="wall_socket")for(let d of Bt(s))d.entity&&t.add(d.entity);let l=s.confirm?(i=n.get(s.id))==null?void 0:i.entity:null;l&&l!=="none"&&t.add(l)}}return t}function Ws(o,e){let t=new Set;if(!e.some(n=>n.openings.some(r=>r.cover_invert)))return t;for(let n of Gt(o,e).values())n.coverInvert&&n.cover&&t.add(n.cover);return t}function Bs(o,e){let t=new Map;for(let n of e)for(let r of n.furniture){if(r.type!=="awning"&&!io(r.type))continue;let i=r.entity&&r.entity!=="none"?r.entity:null,a=i?o.states[i]:void 0,s=r.awning_time??20;if(!a||Z(a)){t.set(r.id,{out:0,moving:0,time:s});continue}let l=p=>r.awning_invert?1-p:p,d=js(o,r.awning_position&&r.awning_position!=="none"?r.awning_position:null),c=a.attributes.current_position,u=a.state==="opening"?r.awning_invert?-1:1:a.state==="closing"?r.awning_invert?1:-1:0;d!==null?t.set(r.id,{out:l(d),moving:0,time:s}):typeof c=="number"&&Number.isFinite(c)?t.set(r.id,{out:l(Math.min(1,Math.max(0,c/100))),moving:0,time:s}):u?t.set(r.id,{out:null,moving:u,time:s}):t.set(r.id,{out:l(a.state==="open"||a.state==="on"?1:0),moving:0,time:s})}return t}function Tr(o,e){let t=r=>{var a;if(!r||r==="none")return!1;let i=(a=o.states[r])==null?void 0:a.state;return i==="on"||i==="open"},n=new Map;for(let r of e)for(let i of r.furniture)i.type==="fridge_smart"&&n.set(i.id,{left:t(i.door_left),right:t(i.door_right)});return n}var As={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function zr(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function Nu(o,e){var n,r;if(zr(o,e))return e;let t=(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id;return t?Sr(o,t).find(i=>i!==e)??null:null}function wt(o,e){let t=new Map;for(let n of e){let r=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let a=i.type in As,s=a?As[i.type]:Ps[i.type]??(jt(i.type)?Ps.robot_vacuum:void 0);if(!s&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&Y([i.x,i.z],h.points))??(i.type==="awning"?gr(n).find(h=>Y([i.x,i.z],h.points)):void 0),d=l?ho(o,_e(o,l.area_id)):[],c=h=>`${h} ${J(o,h)}`,u=i.entity==="none"?null:i.entity??null;if(i.entity==null){let h=d.filter(f=>!r.has(f));if(a){let f=h.filter(m=>V(m)==="light");u=f.find(m=>s.test(c(m)))??f[0]??null}else if(jt(i.type)){let f=(l==null?void 0:l.area_id)??null;u=Object.keys(o.entities??{}).find(m=>m.startsWith("vacuum.")&&!r.has(m)&&!po(o,m)&&An(o,m)===f)??null}else if(i.type==="radiator"||i.type==="ac_unit"){let f=h.filter(m=>V(m)==="climate");u=f.find(m=>s.test(c(m)))??f[0]??null}else if(qs(i.type)){let f=h.filter(m=>V(m)==="media");u=f.find(m=>{var g;return((g=o.states[m])==null?void 0:g.attributes.device_class)==="tv"})??f.find(m=>s==null?void 0:s.test(c(m)))??(Vs.has(i.type)?f[0]??null:null)}else i.type==="awning"?u=h.find(f=>{var m;return f.startsWith("cover.")&&((s==null?void 0:s.test(c(f)))||((m=o.states[f])==null?void 0:m.attributes.device_class)==="awning")})??null:s&&(u=h.find(f=>["switch","media","fan"].includes(V(f)??"")&&s.test(c(f)))??null);u&&r.add(u)}let p=i.power==="none"?null:i.power??null;i.power==null&&(p=u?Nu(o,u):null,!p&&s&&l&&!a&&(p=_e(o,l.area_id).find(f=>zr(o,f)&&!r.has(f)&&s.test(c(f)))??null),p&&r.add(p)),(u||p)&&t.set(i.id,{entity:u,power:p})}}return t}function Cr(o){if(!o||o.state==="off"||o.state==="standby"||Z(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function Us(o,e,t,n=[]){let r=(u,p)=>Y([u,p],t.points),i=wt(o,[e]),a=Gt(o,[e]),s=[...e.placements.filter(u=>r(u.x,u.z)).map(u=>u.entity_id),...e.furniture.filter(u=>r(u.x,u.z)).flatMap(u=>{var p,h;return[(p=i.get(u.id))==null?void 0:p.entity,(h=i.get(u.id))==null?void 0:h.power]}),...e.openings.filter(u=>u.room_id===t.id).flatMap(u=>{let p=a.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...t.panel??[]].filter(u=>!!u&&!!o.states[u]),l=new Set(t.hidden??[]),d=[...new Set(s)].filter(u=>!l.has(u)),c=new Set(d);return{shown:d,more:_e(o,t.area_id).filter(u=>!c.has(u)&&!l.has(u))}}var Is=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,qu={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function mo(o,e){var u,p;let t=e.car??{},n=h=>h&&h!=="none"?h:null,r=n(t.device)??n(e.entity),i=r?(p=(u=o.entities)==null?void 0:u[r])==null?void 0:p.device_id:null,a=i&&o.entities?Object.values(o.entities).filter(h=>h.device_id===i).map(h=>h.entity_id):[],s=h=>{var f,m,g;return`${h} ${((f=o.states[h])==null?void 0:f.attributes.friendly_name)??""} ${((g=(m=o.entities)==null?void 0:m[h])==null?void 0:g.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(h,f,m)=>a.find(g=>f.includes(g.split(".")[0])&&qu[h].test(s(g))&&(!m||m(g)))??null,d=h=>{var f;return String(((f=o.states[h])==null?void 0:f.attributes.unit_of_measurement)??"")},c=h=>{var f;return String(((f=o.states[h])==null?void 0:f.attributes.device_class)??"")};return{soc:n(t.soc)??a.find(h=>h.startsWith("sensor.")&&c(h)==="battery")??l("soc",["sensor"],h=>d(h)==="%"),range:n(t.range)??l("range",["sensor"],h=>/km|mi/.test(d(h)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],h=>/^k?W$/.test(d(h)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??a.find(h=>h.startsWith("binary_sensor.")&&c(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??a.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??a.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??a.find(h=>h.startsWith("device_tracker."))??null}}function Wu(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function In(o,e){var g;let t=mo(o,e),n=_=>_?o.states[_]:void 0,r=_=>{var y;let x=Number((y=n(_))==null?void 0:y.state);return _&&Number.isFinite(x)?x:null},i=r(t.soc),a=r(t.range),s=n(t.charging),l=String((s==null?void 0:s.attributes.unit_of_measurement)??""),d=s&&/^k?W$/.test(l)?(r(t.charging)??0)*(l==="kW"?1e3:1):null,c=d!==null?d>50:!!s&&["on","charging","laden"].includes(s.state.toLowerCase()),u=n(t.plugged),p=n(t.lock),h=n(t.climate),f=n(t.tracker),m=(f==null?void 0:f.state.toLowerCase())??"";return{entities:t,soc:i!==null?Math.max(0,Math.min(100,i)):null,range:a,rangeUnit:String(((g=n(t.range))==null?void 0:g.attributes.unit_of_measurement)??"km"),chargingW:d,charging:c,plugged:u?u.state==="on":null,locked:p?Wu(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:f&&m!=="home"&&!Z(f)?m==="not_home"?"":f.state:null}}function Ks(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(mo(o,n)))).filter(t=>!!t)}function Tn(o,e,t){var r,i;if(t==="none")return null;if(t)return t;let n=e?(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id:null;if(!n||!o.entities)return null;for(let a of Object.values(o.entities))if(!(a.device_id!==n||!a.entity_id.startsWith("sensor."))&&(Is.test(a.translation_key??"")||Is.test(a.entity_id.split(".")[1])))return a.entity_id;return null}function Ts(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function Gs(o,e,t,n){var i,a;let r=t?(i=o.states[t])==null?void 0:i.attributes:void 0;for(let s of[n?(a=o.states[n])==null?void 0:a.state:void 0,r==null?void 0:r.current_room,r==null?void 0:r.room,r==null?void 0:r.current_segment]){let l=Rr(o,e,s);if(l)return l}return null}function Rr(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=Ts(t);if(!n)return null;let r=i=>{var a,s;return[i.name,i.area_id??"",i.area_id&&((s=(a=o.areas)==null?void 0:a[i.area_id])==null?void 0:s.name)||""].map(Ts).filter(Boolean)};return e.find(i=>r(i).includes(n))??e.find(i=>r(i).some(a=>a.length>=3&&(a.includes(n)||n.includes(a))))??null}var Ys=new Set(["garage","gate","door"]);function Fr(o,e){let t=new Set,n=new Set,r=i=>{if(!i||i==="none"||!o.states[i])return;let a=V(i);a==="light"?t.add(i):a==="cover"&&!Ys.has(String(o.states[i].attributes.device_class??""))&&n.add(i)};for(let i of e.rooms){let a=new Set(i.hidden??[]);for(let s of ho(o,_e(o,i.area_id)))a.has(s)||r(s)}for(let i of e.placements)r(i.entity_id);for(let i of e.furniture)r(i.entity);return{lights:[...t],covers:[...n]}}function Qs(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function Js(o,e,t){var r;let n=((r=t.target)==null?void 0:r.trim())??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[i,a]=n.split(".",2);o.callService(i,a,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var Bu={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de CasaNeon ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de CasaNeon.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace.",as_furniture_pick:"Elegir mueble \u2026",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de CasaNeon.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_copy:"Copiar",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon \u2013 actualiza CasaNeon (HACS) y recarga la p\xE1gina.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para CasaNeon. Importa aqu\xED tus propios packs (.fp3dpack).",ext_pro:"Extensiones Pro",ext_active:"activa",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: CasaNeon encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia ahora",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas y prop\xF3n ideas como issue en GitHub: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant.",show_menu:"Mostrar",tool_menu:"Herramienta",floor_label:"Planta:",floor_settings:"Ajustes de la planta",floor_settings_of:"Planta {floor}",floor_none_hint:"A\xF1ade tu primera planta arriba con \xABPlanta\xBB \u2192 \xABA\xF1adir planta\xBB.",tool_group_build:"Construir",tool_group_outside:"Exterior",tool_room:"Habitaci\xF3n",view_menu:"Vista",fit_hint:"Mostrar todo el plano de la planta (con el jard\xEDn al dibujar el exterior)",tech_open:"Dibujar la sala t\xE9cnica",tech_open_hint:"Despu\xE9s toca en el plano la pared donde est\xE1 tu instalaci\xF3n.",tech_step:"Paso {n}",tech_step_feed:"Toca \xAB{name}\xBB a la izquierda y luego el punto de la pared por donde entra la tuber\xEDa (abajo del todo: desde el suelo).",tech_step_devices:"Toca la bomba y el filtro de arena a la izquierda: se colocan junto a la pared. La bomba de calor y la dosificaci\xF3n si las tienes.",tech_step_line:"Traza una l\xEDnea: de \xAB{a}\xBB a \xAB{b}\xBB. Pulsa en uno y arrastra hasta el otro.",tech_step_loose:"Un tubo acaba suelto: prol\xF3ngalo hasta un equipo o una tuber\xEDa, o b\xF3rralo (\u270B Seleccionar).",tech_step_drawing:"Sigue arrastrando o toca punto a punto: la l\xEDnea termina en un equipo, una tuber\xEDa o un tubo.",tech_step_fit:"Toca el tubo donde va la v\xE1lvula (el visor): se ilumina en naranja.",tech_mode:"Sala t\xE9cnica",tech_mode_hint:"Dibuja la sala t\xE9cnica en esta pared: entra las tuber\xEDas de la piscina, coloca los equipos, traza los tubos",tech_draw:"Dibujar",tech_pick:"Seleccionar",pool_delete_confirm:"\xBFEliminar la piscina con sus {n} tubos?",tech_erase:"Borrar",tech_erase_hint:"Toca un tubo, una v\xE1lvula de bola, una mirilla o un agujero y se elimina. \xBFLo dibujaste mal? Deshacer tambi\xE9n ayuda.",tech_feeds:"Tuber\xEDas de la piscina",tech_devices:"Equipos",tech_fittings:"Valvuler\xEDa",tech_hint:"Trazar una l\xEDnea: toca un equipo, una tuber\xEDa o un tubo y arrastra hasta el siguiente (o punto a punto). Sobre un tubo crea una T. CasaNeon sabe solo hacia d\xF3nde va el agua y qu\xE9 conexi\xF3n del equipo usar.",tech_no_ports:"Coloca primero el skimmer, el sumidero y las boquillas con la herramienta Piscina.",tech_ok:"Todo conectado: el agua circula.",tech_issue_loose:"{n} extremos sueltos",tech_issue_port:"{name} sin conectar",tech_issue_feed:"{name} a\xFAn no entrado",tech_feed_place:"Toca donde la tuber\xEDa entra en la sala: abajo del todo, desde el suelo; m\xE1s arriba, por la pared.",tech_start:"Toca un equipo o una tuber\xEDa y traza una l\xEDnea.",feed_skimmer:"Skimmer",feed_drain:"Sumidero",feed_inlet:"Boquillas",feed_waste:"Desag\xFCe (lavado)",hp_ports:"Conexiones",hp_side_right:"derecha",hp_side_left:"izquierda",hp_side_back:"detr\xE1s",pool_depth:"Profundidad del vaso (m)",pool_rim:"Borde sobre el c\xE9sped (m)",pool_depth_hint:"Profundidad: del borde al fondo. Una piscina de 1,50 m que sobresale 20 cm: profundidad 1,50, borde 0,20. El agua queda 15 cm bajo el borde.",pool_depth_ground:"La profundidad se ve en 3D en cuanto la piscina est\xE1 en un c\xE9sped, una terraza u otra zona; sin suelo alrededor, el vaso se ver\xEDa desde fuera.",pool_port_depth:"Prof.",pool_port_depth_hint:"Profundidad bajo la l\xEDnea de agua (m): boquillas normalmente 0,30, el skimmer en la l\xEDnea de agua",pool_valves:"V\xE1lvulas",pool_valve_shut:"cerrada",pool_valve_toggle:"Toca para cambiar: tal como est\xE1 la v\xE1lvula de verdad",pool_joint:"Uni\xF3n",block_some_fixed:"\u{1F512} Una pieza est\xE1 fijada: el bloque solo se mueve cuando todas est\xE9n liberadas.",unfix_all:"Liberar todo",wv_block_all:"Bloque entero",wv_block_one:"Solo esta pieza",wv_gap:"Hueco: {w} \u2013 esto cabe:",wv_gap_hint:"Toca un lugar libre de la pared: aqu\xED aparece lo que cabe.",wv_kit_title:"A la pared",wv_recent:"Usados recientemente",wv_none_fits:"Nada cabe en este hueco.",wv_cat_base:"Muebles bajos y aparadores",wv_cat_hang:"Colgados",wv_cat_tall:"Armarios altos",wv_cat_living:"Sentarse y dormir",wv_cat_light:"Luces",wv_cat_pack:"De tus packs",wv_cat_energy:"Energ\xEDa",block_title:"Bloque de muebles",multi_title:"{n} muebles seleccionados",block_hint:"Un clic selecciona todo el bloque, arrastrar lo mueve. Una sola pieza: t\xF3cala dos veces o elige su nombre abajo.",multi_hint:"May\xFAs + clic a\xF1ade o quita muebles, May\xFAs + arrastrar en una zona vac\xEDa dibuja un marco. Mu\xE9velos, g\xEDralos o c\xF3pialos juntos, o \xFAnelos en un bloque.",block_part_edit:"Editar solo esta pieza",block_break:"Deshacer bloque",block_make:"Unir en un bloque",multi_mode:"Seleccionar varios (tocar a\xF1ade, arrastrar dibuja un marco)",block_part:"Parte de un bloque.",block_select:"Seleccionar todo el bloque",block_delete:"\xBFEliminar {n} muebles?",block_delete_fixed:"\xBFEliminar {n} muebles? Algunos est\xE1n fijados.",wall_zoom_hint:"Zoom: rueda del rat\xF3n o dos dedos",wall_zoom_all:"Pared entera",card_pets:"Mostrar las mascotas",card_ghost:"Mostrar el fantasma de Halloween",card_ghost_hint:"Pack divertido Halloween: el fantasma flota tambi\xE9n por la casa de esta tarjeta (p. ej. desact\xEDvalo en la tableta de pared)",card_pets_hint:"Pack divertido Mascotas: mostrar los animales configurados en esta tarjeta (p. ej. desact\xEDvalos en la tableta de pared)",fun_title:"Packs divertidos",fun_intro:"Extras solo por diversi\xF3n; act\xEDvalos y desact\xEDvalos aqu\xED.",fun_name_pets:"Mascotas",fun_feature_pets:"Un gato, un perro o un conejo vive en tu casa 3D: recorre las habitaciones, se tumba en el sof\xE1, la cama o la alfombra y duerme por la noche.",fun_name_halloween:"Halloween",fun_feature_halloween:"Un fantasma que de vez en cuando flota por la casa.",halloween_ghost:"Dejar flotar al fantasma",pets_show:"Mostrar las mascotas",pet_add:"A\xF1adir una mascota",pet_name:"Nombre",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Gato",pet_kind_dog:"\u{1F436} Perro",pet_kind_rabbit:"\u{1F430} Conejo",pet_fur:"Pelaje",pet_fur_orange:"Pelirrojo",pet_fur_tabby:"Atigrado",pet_fur_black:"Negro",pet_fur_white:"Blanco",pet_fur_grey:"Gris",pet_fur_brown:"Marr\xF3n",pet_fur_calico:"Tricolor",pet_fur_golden:"Dorado",pet_fur_cream:"Crema",pet_breed:"Raza",pet_breed_dachshund:"Teckel",pet_breed_pug:"Carlino",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Pastor",pet_floor:"Planta",pet_floor_auto:"Planta baja",tt_ev_camera:"La c\xE1mara detecta movimiento: {name}",terrain:"Terreno",terrain_hint:"D\xF3nde est\xE1 el terreno alrededor de la casa. Lo que queda por debajo (un s\xF3tano, la parte baja de un semis\xF3tano) est\xE1 bajo tierra en 3D; c\xE9spedes, caminos y terrazas est\xE1n sobre el terreno.",terrain_level:"Altura del terreno (m, planta baja = 0)",terrain_earth:"Mostrar los s\xF3tanos bajo tierra",terrain_earth_hint:"Las plantas por debajo del terreno est\xE1n bajo tierra; abre una y la ver\xE1s como en una excavaci\xF3n. Desactivado: quedan sueltas como antes.",terrain_cellar_hint:"Semis\xF3tano: baja la altura del terreno tanto como deba asomar el s\xF3tano, p. ej. \u22121,2 m. Las ventanas de s\xF3tano bajo el terreno reciben un patio ingl\xE9s.",terrain_no_cellar_hint:"Un s\xF3tano es una planta con elevaci\xF3n negativa, p. ej. \u22122,6 m.",terrain_reset:"Restablecer el terreno",cellar_window:"Ventana de s\xF3tano",well:"Patio ingl\xE9s",well_hint:"Esta ventana est\xE1 bajo el nivel del terreno: en 3D recibe un patio ingl\xE9s con rejilla. Desm\xE1rcalo para no tener ninguno, p. ej. si por fuera pasa un camino.",well_rim:"Borde sobre el terreno (m)",cellar_window_hint:"Peque\xF1a y arriba en la pared: 100 \xD7 50 cm, 25 cm bajo el techo. Bajo el terreno recibe en 3D un patio ingl\xE9s con rejilla.",side_fold_hint:"Estrechar la barra lateral: m\xE1s espacio para el plano",furn_ac_unit:"Aire acondicionado (de pared)",furn_awning:"Toldo",furn_group_outdoor:"Terraza y balc\xF3n",bin_from:"Brillar desde (hora, el d\xEDa antes)",bin_until:"hasta (hora, d\xEDa de recogida)",bin_none:"Sin recogida a la vista",hh_title:"Hoy en casa",hh_left:"quedan {t}",hh_done:"\xA1Listo!",hh_finished:"{name} ha terminado",hh_thirsty:"Sed",hh_plant:"{name} necesita agua",hh_service:"{name}: mantenimiento pendiente",hh_fridge_open:"{name} est\xE1 abierto",alert_fridge_door:"Nevera abierta: {name}",alert_short_fridge_door:"Nevera abierta",hh_moisture:"Planta (plant.*) o sensor de humedad",hh_moisture_min:"Sed por debajo de (%)",hh_remaining:"Tiempo restante (sensor)",hh_door:"Sensor de puerta",hh_fridge_door:"Sensor de puerta",hh_appliance_hint:"Mientras funciona, su marcador muestra el tiempo restante; despu\xE9s \xAB\xA1Listo!\xBB hasta que se abre la puerta o vuelve a funcionar.",hh_door_alarm:"Avisar tras (minutos abierto)",hh_service_entity:"Consumible / mantenimiento (sensor)",hh_service_min:"Pendiente desde (\u2264 % o d\xEDas)",hh_service_hint:"P. ej. filtro, sal o abrillantador: un sensor binario (activo = pendiente), un n\xFAmero (% o d\xEDas restantes) o una fecha. Si toca, el aparato brilla en amarillo y aparece en \xABHoy en casa\xBB.",hh_teaser_plant:"Con Hogar Pro la planta muestra cu\xE1ndo necesita agua.",hh_teaser_appliance:"Con Hogar Pro el aparato muestra su tiempo restante y \xAB\xA1Listo!\xBB hasta que se abre la puerta.",hh_teaser_fridge:"Con Hogar Pro CasaNeon avisa cuando la puerta de la nevera est\xE1 abierta demasiado tiempo.",card_household:"Hoy en casa",card_household_hint:"Hogar Pro: tarjeta con contenedores, correo, aparatos terminados, plantas sedientas y mantenimiento",furn_waste_bin:"Contenedor de basura",furn_mailbox:"Buz\xF3n",furn_wall_switch:"Interruptor de pared",furn_water_heater:"Termo el\xE9ctrico",stair_open:"Abierta por debajo (losa inclinada)",stair_open_hint:"Los pelda\xF1os van sobre una losa que sigue la pendiente: el hueco de debajo queda libre, con techo inclinado, y cabe otro tramo o un mueble debajo.",furn_access_point:"Punto de acceso Wi-Fi",ap_entity:"Punto de acceso",ap_mount:"Montaje",ap_ceiling:"Techo",ap_wall:"Pared",ap_hint:"Elige el punto de acceso por su nombre; su estado, clientes, LED, CPU, memoria y bot\xF3n de reinicio se buscan en el mismo dispositivo (UniFi Network).",ap_gestures:"En 3D: tocar enciende o apaga su LED; mantener pulsado lo reinicia (pregunta antes). El anillo brilla azul conectado con el LED encendido, rojo si est\xE1 desconectado y \xE1mbar mientras se actualiza.",ap_role_state:"estado",ap_role_clients:"clientes",ap_role_led:"LED",ap_role_cpu:"CPU",ap_role_memory:"memoria",ap_role_restart:"reinicio",ap_client:"{n} cliente",ap_clients:"{n} clientes",ap_down:"Desconectado",ap_busy:"Actualizando",ap_up:"Conectado",ap_restart_confirm:"\xBFReiniciar {name}? Sus clientes perder\xE1n el Wi-Fi un par de minutos.",heater_entity:"Calentador (water_heater)",heater_capacity:"Capacidad",heater_found:"Encontrado en el mismo dispositivo:",heater_hint:"Elige su entidad water_heater; lo dem\xE1s (si calienta, duchas, tiempo restante, encendido, eco) se busca solo en el mismo dispositivo.",heater_role_heating:"calentando",heater_role_showers:"duchas",heater_role_remaining:"tiempo restante",heater_role_power:"encendido",heater_role_eco:"eco",heater_gestures:"En 3D: tocar lo enciende o apaga; mantener pulsado abre su ficha para regular la temperatura y el modo.",heater_gestures_no_power:"En 3D: tocar o mantener pulsado abre su ficha para regular la temperatura y el modo (no se encontr\xF3 un interruptor de encendido).",heater_shower:"{n} ducha",heater_showers:"{n} duchas",heater_left:"{min} min para agua caliente",furn_lamp_ceiling_fan:"Ventilador de techo con luz",furn_fan_entity:"Entidad del ventilador",ceiling_fan_hint:"La luz es la entidad del elemento de arriba: el motor y la pantalla la encienden. Las aspas conmutan el ventilador por separado y giran mientras funciona, m\xE1s r\xE1pido cuanto mayor es su velocidad.",furn_wall_socket:"Enchufe de pared",furn_group_electric:"Electricidad",socket_count:"Enchufes",socket_n:"Enchufe {n}",socket_switch:"Encender y apagar con (opcional)",socket_power:"Medidor de consumo (W, opcional)",socket_hint:"Un enchufe con interruptor (enchufe inteligente) se enciende y apaga al tocarlo en 3D y su peque\xF1o LED muestra que est\xE1 encendido. Con medidor de consumo cuenta en el balance de energ\xEDa y su pin muestra los vatios de todos sus enchufes. Para ponerlo sobre una encimera, sube su \xABAltura sobre el suelo\xBB.",switch_keys:"Teclas",switch_key:"Entidad de la tecla",switch_key_n:"Tecla {n}",switch_ring:"Anillo de luz (color de)",switch_ring_hint:"Para interruptores con luz alrededor (p. ej. Sonoff TX Ultimate): elige la luz que da su color y brillo; el anillo brilla en la pared alrededor de la placa mientras esa luz est\xE1 encendida.",switch_hint:"Cada tecla conmuta su entidad al tocarla en 3D (una persiana se abre o se cierra) y su LED se enciende mientras est\xE1 encendida o abierta.",furn_group_household:"Hogar",bin_shape:"Forma",bin_shape_bin120:"Contenedor con ruedas 120 l",bin_shape_bin240:"Contenedor con ruedas 240 l",bin_shape_bin1100:"Contenedor 1100 l",bin_shape_multi:"Contenedor con varios compartimentos",bin_shape_bag:"Bolsa",bin_shape_caddy:"Cubo",bin_shape_underground:"Contenedor soterrado",bin_kind:"Residuo",bin_kind_rest:"Resto",bin_kind_bio:"Org\xE1nico",bin_kind_paper:"Papel",bin_kind_plastic:"Envases",bin_kind_glass:"Vidrio",bin_kind_garden:"Restos de poda",bin_kind_recycling:"Reciclaje",bin_kind_other:"Otro",bin_color:"Color",bin_lid:"Tapa",bin_source:"Calendario de recogida o sensor",bin_match:"Palabra del calendario (vac\xEDo: seg\xFAn el residuo)",bin_hint:"El contenedor brilla desde la hora elegida del d\xEDa anterior hasta la hora del d\xEDa de recogida (para todos); su marcador indica \xABHoy\xBB o \xABMa\xF1ana\xBB, al tocarlo muestra las pr\xF3ximas recogidas. En un calendario (p. ej. Waste Collection Schedule) se buscan las palabras de su residuo; un sensor puede dar los d\xEDas o la fecha.",bin_today:"Hoy",bin_tomorrow:"Ma\xF1ana",bin_in_days:"en {n} d\xEDas",mailbox_shape:"Forma",mailbox_shape_wall:"Buz\xF3n de pared",mailbox_shape_pole:"Buz\xF3n en poste (con bandera)",mailbox_shape_pillar:"Buz\xF3n de pie con portaperi\xF3dicos",mailbox_shape_parcel:"Buz\xF3n de paquetes",mailbox_shape_bank:"Buzones agrupados",mailbox_entity:"Sensor de correo (trampilla o indicador)",mailbox_door:"Sensor de la puerta de recogida (opcional)",mailbox_hint:"Con un indicador (p. ej. un input_boolean \xABcorreo\xBB que activa una automatizaci\xF3n) el buz\xF3n brilla mientras est\xE1 activo. Con trampilla y puerta de recogida brilla cuando ha llegado correo despu\xE9s del \xFAltimo vaciado.",mailbox_post:"Correo",pro_name_household:"Hogar Pro",pro_feature_household:"Hogar Pro: contenedores que brillan la v\xEDspera de la recogida, buz\xF3n con correo, plantas con sed; lavadora, secadora y lavavajillas muestran el tiempo restante y \xAB\xA1Listo!\xBB; filtros y consumibles pendientes en amarillo; aviso de nevera abierta; tarjeta \xABHoy en casa\xBB; adem\xE1s la nevera inteligente (americana, puertas con sensores)",household_teaser_bin:"Con Hogar Pro el contenedor brilla la v\xEDspera de la recogida, seg\xFAn tu calendario.",household_teaser_mail:"Con Hogar Pro el buz\xF3n brilla en cuanto hay correo, hasta que se vac\xEDa.",awning_cover:"Toldo (cover)",motor_cover:"Motor (cover)",curtain_side:"Se abre hacia",curtain_side_both:"ambos lados",curtain_side_left:"izquierda (vista de frente)",curtain_side_right:"derecha (vista de frente)",motor_time:"Tiempo de recorrido (s)",motor_invert_hint:"Para covers que indican 100 % con la cortina cerrada o la pantalla abajo.",awning_pitch:"Inclinaci\xF3n (\xB0)",awning_time:"Tiempo de salida completa (s)",awning_position:"Sensor de posici\xF3n (opcional)",awning_valance:"Fald\xF3n (borde de lona delantero)",awning_invert:"Invertir el sentido",awning_invert_hint:"Para covers que informan 100 % cuando el toldo est\xE1 recogido.",awning_kind:"Tipo",awning_kind_arm:"Toldo de brazos articulados (terraza)",awning_kind_drop:"Toldo de brazo invisible / punto recto (balc\xF3n, ventana)",awning_kind_vertical:"Toldo vertical / ZIP (ventana, balc\xF3n)",awning_kind_pergola:"Toldo de p\xE9rgola / galer\xEDa acristalada",awning_kind_side:"Toldo lateral (privacidad)",awning_kind_arm_hint:"El cl\xE1sico sobre la terraza: los brazos articulados empujan la lona hacia fuera con una ligera pendiente. Fondo = salida.",awning_kind_drop_hint:"Los brazos giran desde la pared hacia delante y hacia abajo, la lona se tensa inclinada delante. Fondo = longitud de los brazos, Inclinaci\xF3n = cu\xE1nto bajan los brazos por debajo de la horizontal.",awning_kind_vertical_hint:"La lona baja en vertical por gu\xEDas laterales hasta el suelo \u2013 delante de una ventana, la barandilla de un balc\xF3n o el frente de una p\xE9rgola. Altura sobre el suelo = borde inferior del cofre.",awning_kind_pergola_hint:"Un marco fijo con postes delante; la lona se extiende por encima de sus gu\xEDas. Fondo = hasta los postes, Inclinaci\xF3n = pendiente del techo.",awning_kind_side_hint:"Un poste con la lona enrollada a la izquierda, la lona se extiende en horizontal hacia la derecha hasta el poste opuesto. Ancho = extensi\xF3n, Altura sobre el suelo = altura de la lona.",awning_hint:"Ancho = el toldo a lo largo de la pared, fondo = su salida totalmente extendido; la parte trasera del marco va contra la fachada, la altura sobre el suelo es la parte inferior del cofre. Si el cover informa su posici\xF3n mientras se mueve, el toldo sale despacio en 3D; si solo dice abriendo/cerrando, se mueve seg\xFAn el tiempo de salida.",furn_only_color:"Brillar solo en un color",furn_only_color_pick:"Color",furn_only_color_hint:"La l\xE1mpara solo brilla mientras la luz muestra aproximadamente este color, p. ej. amarillo para \xABagua\xBB en el lavabo. Los dem\xE1s colores de la misma luz quedan oscuros aqu\xED.",furn_run_w:"En marcha desde (vatios)",furn_run_w_hint:"A partir de cu\xE1ntos vatios en el sensor de potencia el aparato cuenta como en marcha y brilla (vac\xEDo: 10 W). Para aparatos tras un enchufe inteligente que consumen unos vatios en espera, p. ej. 100.",roof_window_float:"Mostrar sobre la habitaci\xF3n sin el tejado",roof_window_float_hint:"Cuando el tejado se desvanece al acercarte a una planta o una habitaci\xF3n, la ventana se queda en su sitio sobre la habitaci\xF3n: abierta, abatida, con su persiana. Funciona sobre las habitaciones de la planta en la que se apoya el tejado; donde la pendiente baja sobre una planta inferior, las ventanas se quedan en el tejado. Desactivado: solo se ve en el tejado.",tech_ask:"Tubo colocado: \xBFsigue hasta la piscina? Entonces aqu\xED va un pasamuros con su salida al exterior:",tech_ask_loose:"Dejarlo abierto",tech_step_tee:"Toca el tubo donde va la derivaci\xF3n: se corta ah\xED y desde la T trazas la siguiente l\xEDnea.",side_resize:"Arrastra para ensanchar o estrechar la barra lateral",furn_extra:"Valor extra junto al s\xEDmbolo (sensor, p. ej. temperatura del agua)",settings_house:"Casa",settings_weather:"Tiempo y avisos",roof_basics:"Forma del tejado",through_full:"Pantalla completa",through_full_hint:"La imagen de la c\xE1mara en toda la pantalla (Esc o Atr\xE1s para salir). Donde el navegador no puede, se abre la vista de c\xE1mara de Home Assistant, tambi\xE9n con sonido.",director:"Director en directo",director_hint:"Una pantalla muestra sola lo que pasa en casa: suena el timbre y la vista vuela a la puerta y mira por su c\xE1mara. Cada evento est\xE1 apagado hasta que lo actives.",director_here:"Activar en este dispositivo",director_here_hint:"Solo para este navegador, p. ej. la tablet de la pared. En una tarjeta del dashboard el director se activa en los ajustes de la tarjeta.",director_doorbell:"Suena el timbre: volar a la puerta y mirar por la c\xE1mara",director_doorbell_entity:"Timbre",director_doorbell_camera:"C\xE1mara de la puerta",director_no_doorbell:"No se encontr\xF3 ning\xFAn timbre. Elige la entidad event o binary_sensor de tu timbre.",director_motion:"Una c\xE1mara ve a alguien",director_appliances:"Lavadora, secadora o lavavajillas terminados",director_alerts:"Aviso nuevo (humo, agua, alarma, ventana abierta con lluvia \u2026)",director_hold:"Volver tras (segundos)",director_back_hint:"Despu\xE9s la vista vuelve a donde estaba, salvo que alguien haya tocado la pantalla mientras tanto. A quien est\xE9 usando la tablet solo le interrumpen el timbre y los avisos. Con el timbre se queda el doble de tiempo.",voice:"Control por voz",voice_hint:"Un bot\xF3n de micr\xF3fono abajo a la izquierda en la vista 3D: t\xF3calo y habla. \xABMuestra el sal\xF3n\xBB, \xABplanta de arriba\xBB o \xABtoda la casa\xBB muestran el sitio; lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist de Home Assistant.",voice_here:"Activar en este dispositivo",aliases:"Otros nombres para la voz",aliases_hint:"Otros nombres separados por comas, para pedir la \xABSmart TV Pro\xBB como \xABtele del sal\xF3n\xBB o \xABtele\xBB. Los usan el control por voz y la b\xFAsqueda.",aliases_placeholder:"p. ej. tele del sal\xF3n, tele",voice_understands:"Qu\xE9 entiende CasaNeon",voice_examples:"\xABMuestra el sal\xF3n\xBB|\xABVe a la planta de arriba\xBB|\xABMuestra toda la casa\xBB|\xABMuestra la lavadora\xBB / \xAB\xBFD\xF3nde est\xE1 la secadora?\xBB|\xABMuestra la c\xE1mara de la entrada\xBB|\xABMuestra las c\xE1maras\xBB|Todo lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist",voice_needs:"Necesita https, permiso para el micr\xF3fono (en Fully Kiosk: Web Content Settings \u2192 acceso al micr\xF3fono) y una pipeline de Assist con voz a texto. En una tarjeta del dashboard el bot\xF3n se activa en los ajustes de la tarjeta.",voice_showing:"Mostrando {name}.",screen_name:"Nombre de pantalla (para Assist)",screen_name_placeholder:"p. ej. Cocina",screen_name_hint:"Preguntar a Assist (\xABMuestra el sal\xF3n\xBB) o una automatizaci\xF3n que llame al servicio neonplan3d.ask llega a todas las vistas de CasaNeon abiertas. Si el servicio nombra una pantalla, solo reacciona la vista con ese nombre.",voice_button:"Hablar",voice_listen:"Escuchando \u2026",voice_none:"No se entendi\xF3 nada",voice_silent:"El micr\xF3fono solo da silencio. Normalmente lo tiene otra app: en Fully Kiosk desactiva la detecci\xF3n ac\xFAstica de movimiento (Motion Detection \u2192 Acoustic Detection) y recarga.",voice_no_pipeline:"No hay voz a texto configurada en Assist (Ajustes \u2192 Asistentes de voz).",voice_denied:"Micr\xF3fono no permitido: solo funciona con https y con el permiso en el navegador o en Fully Kiosk.",voice_error:"Control por voz: {msg}",card_voice:"Control por voz (bot\xF3n de micr\xF3fono)",card_voice_hint:"\xABMuestra el sal\xF3n\xBB muestra la habitaci\xF3n; las dem\xE1s frases van a Assist. Necesita https y el micr\xF3fono permitido",director_mic_test:"\u{1F399}\uFE0F Probar el micr\xF3fono",director_mic_hint:"Comprueba https, el micr\xF3fono y la voz a texto de Assist en este dispositivo y muestra qu\xE9 habitaci\xF3n abrir\xEDa una frase. No se acciona nada.",voice_pipeline:"Pipeline de Assist en este dispositivo",voice_sentences:"Frases para Assist",voice_sentences_hint:"Lo que Assist pasa a CasaNeon. Preguntas como \xAB\xBFQu\xE9 ventanas est\xE1n abiertas?\xBB las contesta si no Home Assistant; \xABPregunta a la casa qu\xE9 ventanas est\xE1n abiertas\xBB siempre llega a CasaNeon.",voice_pipeline_preferred:"La preferida en Home Assistant",voice_pipeline_no_stt:"sin voz a texto",backdrop:"Fondo",backdrop_kind:"Detr\xE1s de la casa",backdrop_color:"Un color",backdrop_top:"Color arriba",backdrop_bottom:"Color abajo",backdrop_image_url:"Direcci\xF3n de la imagen",backdrop_dim:"Oscurecer",backdrop_image_bad:"Esta direcci\xF3n no sirve: https://\u2026 o una ruta como /local/fondo.jpg",backdrop_hint:"Pon la imagen en config/www de Home Assistant; entonces es /local/nombre.jpg. Oscurecer mantiene legibles las l\xEDneas de ne\xF3n. No cuesta rendimiento, tampoco en tablets antiguas.",director_live:"Imagen en directo al mirar por la c\xE1mara",director_live_hint:"En vez de una foto cada pocos segundos corre el v\xEDdeo de la c\xE1mara (con el reproductor de Home Assistant). Necesita m\xE1s potencia: mejor desactivado en tablets muy antiguas.",director_triggers:"Disparadores propios",director_triggers_hint:"Cuando una de estas entidades se enciende o se abre (un segundo timbre, el port\xF3n del garaje, la puerta del jard\xEDn), la vista vuela all\xED y mira por la c\xE1mara elegida (sin c\xE1mara: al dispositivo).",director_trigger_entity:"Disparador",director_trigger_add:"+ A\xF1adir disparador",card_director:"Director en directo (cabina de c\xE1maras)",card_director_hint:"La tarjeta muestra sola lo que pasa. Qu\xE9 eventos, lo eliges en el editor en \xABDirector en directo\xBB.",card_roof:"Mostrar el tejado",card_roof_hint:"Desactivado: la casa se ve sin tejado, como si no lo tuviera, con las habitaciones abiertas (los campos solares del tejado desaparecen con \xE9l)",room_order_up:"Subir la habitaci\xF3n (antes en la barra de habitaciones)",room_order_down:"Bajar la habitaci\xF3n (despu\xE9s en la barra de habitaciones)",outdoor_area_hint:"Con un \xE1rea, la superficie funciona como una habitaci\xF3n: un toque en 3D la abre con los dispositivos del \xE1rea, aparece en la barra de habitaciones y lleva su nombre.",angle_lock:"Bloqueo 3D",angle_lock_hint:"El \xE1ngulo queda fijo: arrastrar desplaza la vista y el zoom sigue funcionando; nadie gira la casa sin querer.",strip_rise:"Inclinaci\xF3n (\xB0)",strip_rise_hint:"La tira sube a lo largo, p. ej. por la escalera o un pasamanos (~35\u201340\xB0). Su altura sobre el suelo es entonces la de su centro.",wall_slope:"Inclinada",wall_slope_hint:"Pared inclinada: una altura propia en cada esquina y el borde superior recto entre ellas (un cobertizo, una pendiente, ventanas altas en el lado alto). Ventanas y puertas quedan por debajo del borde.",wall_slope_start:"Altura en la esquina {n} (m)",wall_slope_end:"Altura en la esquina {n} (m)",theme_auto:"Auto (D\xEDa/Ne\xF3n seg\xFAn el sol)",markers_room:"En la habitaci\xF3n",pin_size:"Tama\xF1o de los s\xEDmbolos",pin_size_small:"Peque\xF1o",pin_size_normal:"Normal",pin_size_large:"Grande",hh_notes:"Tabl\xF3n (ayudante de texto)",hh_notes_hint:"Un ayudante de texto (input_text) o sensor cuyo texto aparece en \xABHoy en casa\xBB; separa varias l\xEDneas con |. Las automatizaciones escriben en \xE9l (\xABel paquete est\xE1 en el garaje\xBB) y la tarjeta lo muestra.",heat_sensor:"Calefacci\xF3n (sensor)",heat_sensor_hint:"Si el termostato no dice si calienta (las v\xE1lvulas Tuya informan un \xABwork state\xBB), elige aqu\xED ese sensor: encendido/abierto/calentando o una apertura mayor de 0 % hace brillar el radiador.",door_lock:"Cerradura inteligente",door_lock_hint:"La cerradura de la puerta (Nuki, Aqara \u2026): un pin en la puerta muestra cerrada o abierta; un toque la cierra o la abre.",clock:"Reloj",clock_off:"Desactivado",clock_tl:"\u2196 reloj",clock_tr:"\u2197 reloj",clock_bl:"\u2199 reloj",clock_br:"\u2198 reloj",editor_floor:"Planta inicial del editor",editor_floor_auto:"La primera de la lista",editor_floor_hint:"La planta con la que se abre el editor.",director_motion_off:"Desactivado",director_motion_person:"Solo personas",director_motion_all:"Cualquier movimiento",voice_sentences_distinct:"Solo las inequ\xEDvocas (\xABMuestra \u2026\xBB, \xABPregunta a la casa \u2026\xBB, \xABCasa, \u2026\xBB)",voice_sentences_all:"Todas las preguntas (tambi\xE9n las que Home Assistant contesta por s\xED mismo)",voice_sentences_off:"Ninguna (predeterminado \u2013 sin archivo de frases)",backdrop_look:"El cielo del aspecto (por defecto)",backdrop_gradient:"Degradado",backdrop_image:"Imagen",voice_sentences_kept:"Has cambiado t\xFA el archivo de frases de {langs} \u2013 CasaNeon no lo toca.",voice_sentences_failed:"No se pudo escribir el archivo de frases.",voice_sentences_file:"CasaNeon solo crea el archivo custom_sentences/<idioma>/neonplan3d.yaml cuando eliges frases aqu\xED. Un archivo que hayas cambiado nunca se sobrescribe; al quitar la integraci\xF3n se borra el archivo de CasaNeon.",roof_end:"Extremo",roof_end_auto:"seg\xFAn la forma",roof_end_gable:"Hastial",roof_end_hint:"C\xF3mo termina la cumbrera en este extremo: hastial (muro vertical), fald\xF3n o media cadera; por ejemplo, un fald\xF3n solo en un lado.",devices_hide_all:"Ocultar los {n} en el panel de la habitaci\xF3n",devices_show_all:"Mostrar de nuevo los {n}",sill_board:"Alf\xE9izar",sill_board_hint:"Autom\xE1tico: a partir de 30 cm de antepecho, alf\xE9izar por dentro y por fuera; ninguno en una ventana que se apoya directamente sobre otra (montante, frente acristalado dividido).",sill_board_auto:"autom\xE1tico",sill_board_none:"ninguno",sill_board_inside:"solo dentro",sill_board_outside:"solo fuera",lib_room_all:"Todas las habitaciones",lib_room_living:"Sal\xF3n",lib_room_dining:"Comedor",lib_room_kitchen:"Cocina",lib_room_bedroom:"Dormitorio",lib_room_kids:"Ni\xF1os",lib_room_bath:"Ba\xF1o",lib_room_office:"Oficina",lib_room_hall:"Pasillo",lib_room_utility:"Lavadero",lib_room_garage:"Garaje",lib_room_garden:"Jard\xEDn",lib_room_hobby:"Hobby y fitness",lib_kind_sofa:"Sof\xE1s",lib_kind_seating:"Asientos",lib_kind_table:"Mesas",lib_kind_storage:"Armarios y estanter\xEDas",lib_kind_bed:"Camas",lib_kind_kitchen:"Cocina",lib_kind_appliance:"Electrodom\xE9sticos",lib_kind_bath:"Ba\xF1o",lib_kind_lamp:"Luces",lib_kind_media:"TV y audio",lib_kind_office:"Oficina",lib_kind_tech:"T\xE9cnica y hogar inteligente",lib_kind_heating:"Calefacci\xF3n y clima",lib_kind_energy:"Energ\xEDa",lib_kind_household:"Hogar",lib_kind_deco:"Decoraci\xF3n",lib_kind_plant:"Plantas",lib_kind_outdoor:"Jard\xEDn y exterior",lib_kind_kids:"Ni\xF1os",lib_kind_sport:"Fitness",lib_kind_pets:"Mascotas",lib_kind_vehicle:"Veh\xEDculos",lib_kind_stairs:"Escaleras y barandillas",lib_kind_architecture:"Arquitectura",lib_recent:"Usados recientemente",lib_favorites:"Favoritos",lib_fav_add:"A\xF1adir a favoritos",lib_fav_remove:"Quitar de favoritos",lib_chip_electric:"Vinculable",lib_chip_light:"Ilumina",lib_chip_outdoor:"Exterior",lib_more:"Mostrar {n} m\xE1s",lib_basic:"B\xE1sico",lib_sizes:"{n} tama\xF1os",lib_hint_room:"Sugerido para la habitaci\xF3n abierta \u2013 cambia arriba.",persons:"Personas",locate:"Localizaci\xF3n",bin_out:"Sacado (ayudante)",bin_out_hint:"Opcional: encendido mientras el cubo est\xE1 fuera (input_boolean, interruptor o sensor binario). Entonces deja de brillar y su etiqueta dice \xABsacado \u2713\xBB; tocar el cubo conmuta un ayudante o interruptor. Una automatizaci\xF3n nocturna lo restablece.",bin_out_done:"sacado \u2713",bin_out_mark:"Marcar como sacado",bin_next_only:"Etiquetar solo la pr\xF3xima recogida",bin_days:"Mostrar etiquetas solo \u2026 d\xEDas antes",bin_days_always:"siempre",bin_tags_hint:"Para todos los cubos. Los cubos sin etiqueta siguen en \xABHoy en casa\xBB y muestran sus recogidas al tocarlos.",hh_service2:"{name}: {what} pendiente",hh_service2_entity:"Segundo mantenimiento (p. ej. base)",hh_service2_min:"Segundo pendiente desde (\u2264 % o d\xEDas)",door_lock_btn:"Bloquear",door_unlock_btn:"Desbloquear",door_lock_confirm:"\xBFSeguro que quieres bloquear {name}?",door_unlock_confirm:"\xBFSeguro que quieres desbloquear {name}?",garage_pulse_hint:"Un interruptor o bot\xF3n como motor: un toque en la puerta da un impulso (el interruptor se enciende, el bot\xF3n se pulsa); si la puerta est\xE1 abierta lo indica el contacto.",pin_standby:"En espera"};function I(o,e,t={}){let n=Bu[e]??e;for(let[r,i]of Object.entries(t))n=n.replace(`{${r}}`,String(i));return n}function ie(o,e,t=2){return e.toLocaleString("es",{maximumFractionDigits:t})}var Uu=["pool"];function Hr(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("neonplan3d.lab","1"):o==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function Zs(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("neonplan3d.projection","1"):o==="0"&&localStorage.removeItem("neonplan3d.projection"),localStorage.getItem("neonplan3d.projection")==="1"}catch{return!1}}function zn(o){return!Uu.includes(o)||Hr()}var Xs="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",Ku={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function el(o){let e=o?Ku[o]:void 0;return e?`${Xs}#${e}`:Xs}function q(o){return zn(o)}function Or(o){return(o==null?void 0:o.settings.person_look)??"figure"}function go(o){return Or(o)!=="off"}var tl=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function Lr(o){let e=0;for(let t of o)e=e*31+t.charCodeAt(0)>>>0;return tl[e%tl.length]}var nl=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Gu(o,e,t){var r,i;let n=nl(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let a of e.floors)for(let s of a.rooms)if([s.name,s.area_id??"",s.area_id?((i=(r=o.areas)==null?void 0:r[s.area_id])==null?void 0:i.name)??"":""].filter(Boolean).map(nl).includes(n))return{floorId:a.id,room:s};return null}function ol(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function rl(o,e){let t=[],n=new Map;for(let r of e.presence){let i=o.states[r.person];if(!i||!r.sensor||i.state!=="home"&&i.state!=="on")continue;let a=o.states[r.sensor];if(!a)continue;let s=Gu(o,e,a.state);if(!s)continue;let l=n.get(s.room.id)??0;n.set(s.room.id,l+1);let[d,c]=Ce(s.room.points),u=-Math.PI/2+.9+l*1.15,p=.75,h=i.attributes.friendly_name??r.person;t.push({id:r.person,name:h,initials:ol(h),picture:i.attributes.entity_picture??null,floorId:s.floorId,roomId:s.room.id,x:d+Math.cos(u)*p,z:c+Math.sin(u)*p})}return t}function bo(o,e,t=new Set,n=Date.now()){let r=[];for(let[c,u]of Object.entries(o.states)){let p=u.attributes;if(!c.startsWith("sensor.")||p.neonplan_locate!==!0||typeof p.room_id!="string")continue;let h=null;for(let m of e.floors){let g=m.rooms.find(_=>_.id===p.room_id);g&&(h={floorId:m.id,room:g})}if(!h)continue;let f=typeof p.last_seen=="string"?Date.parse(p.last_seen):NaN;r.push({entityId:c,name:typeof p.device_name=="string"?p.device_name:c,person:typeof p.person=="string"?p.person:null,floorId:h.floorId,room:h.room,seen:Number.isFinite(f)?f:0,worn:p.wearable===!0})}let i=[],a=new Map,s=(c,u)=>{let p=a.get(c.room.id)??0;a.set(c.room.id,p+1);let[h,f]=Ce(c.room.points),m=-Math.PI/2+.9+p*1.15;i.push({...u,floorId:c.floorId,roomId:c.room.id,x:h+Math.cos(m)*.75,z:f+Math.sin(m)*.75})},l=(c,u)=>s(c,{id:c.entityId,name:c.name,initials:c.name.slice(0,1).toUpperCase(),picture:null,color:u,entity:c.entityId,tag:c.name,thing:!0}),d=new Map;for(let c of r)c.person?d.set(c.person,[...d.get(c.person)??[],c]):l(c,Lr(c.entityId));for(let[c,u]of d){if(t.has(c))continue;let p=o.states[c];if(p&&p.state!=="home"&&p.state!=="on")continue;let h=u.filter(g=>g.worn&&n-g.seen<12e4),f=(h.length?h:u).reduce((g,_)=>_.seen>g.seen?_:g),m=(p==null?void 0:p.attributes.friendly_name)??f.name;s(f,{id:c,name:m,initials:ol(m),picture:(p==null?void 0:p.attributes.entity_picture)??null,color:Lr(c),entity:f.entityId,tag:m.split(/\s+/)[0]});for(let g of u)g!==f&&g.room.id!==f.room.id&&l(g,Lr(c))}return i}function il(o,e,t,n){let r=new Map,i=a=>{var s;return!!a&&((s=o.states[a])==null?void 0:s.state)==="on"};for(let a of e.floors){let s=new Set;for(let d of a.rooms)for(let c of ho(o,_e(o,d.area_id)))V(c)==="light"&&s.add(c);for(let d of a.placements)V(d.entity_id)==="light"&&s.add(d.entity_id);let l=a.openings.filter(d=>{let c=t.get(d.id);if(!c)return!1;if(d.type==="garage")return(We(o,c,"garage").cover??1)<.95;if(d.type==="door")return i(c.contact)||i(c.contact2??null);let u=We(o,c,"window");return u.open>.5||u.tilt>.5||u.open2>.5||u.tilt2>.5}).length;r.set(a.id,{rooms:a.rooms.length,lightsOn:[...s].filter(d=>{var c;return((c=o.states[d])==null?void 0:c.state)==="on"}).length,open:l,persons:n.filter(d=>d.floorId===a.id).length})}return r}function al(o,e){let t=[e.rooms===1?I(o,"floor_rooms_one"):I(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(I(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(I(o,"floor_open",{n:e.open})),e.persons&&t.push(I(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var sl={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function _o(o){return sl[o]}function Qt(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function Jt(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${sl[o]}"/></svg>`}var et=(o,e)=>I(o,e),ll=new Set;function cl(o){ll=o}var Yu={open:"closed",closed:"open",opening:"closing",closing:"opening"};function ke(o,e){var n,r;if(!e||Z(e))return et(o,"state_unavailable");let t=e.attributes;switch(V(e.entity_id)){case"light":return e.state!=="on"?et(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:et(o,"state_on");case"switch":case"fan":return et(o,e.state==="on"?"state_on":"state_off");case"cover":{let i=ll.has(e.entity_id);return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${i?100-t.current_position:t.current_position} %`:vo(o,i?Yu[e.state]??e.state:e.state)}case"climate":{let i=typeof t.current_temperature=="number"?`${ie(o,t.current_temperature,1)} ${o?Fe(o):"\xB0C"}`:null;return e.state==="off"?i?`${i} \xB7 ${et(o,"state_off")}`:et(o,"state_off"):i??vo(o,e.state)}case"media":{let i=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",a=[t.app_name,t.media_title,t.source].find(s=>typeof s=="string"&&s);return i&&a?a:vo(o,e.state)}case"lock":case"camera":return vo(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?et(o,e.state==="on"?"state_open":"state_closed"):et(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let i=Number(e.state),a=t.unit_of_measurement??"",s=((r=(n=o==null?void 0:o.entities)==null?void 0:n[e.entity_id])==null?void 0:r.display_precision)??1;return Number.isFinite(i)?`${ie(o,i,s)}${a?` ${a}`:""}`:e.state}default:return""}}function vo(o,e){let t=`state_${e}`,n=I(o,t);return n===t?e:n}function dl(o,e){var n,r;let t=[];for(let i of e.floors)for(let a of i.placements){let s=V(a.entity_id),l=o.states[a.entity_id];if(!s||!l)continue;let d=i.rooms.find(u=>u.points.length>=3&&Y([a.x,a.z],u.points))??null,c=d!=null&&d.area_id?(r=(n=o.areas)==null?void 0:n[d.area_id])==null?void 0:r.name:void 0;t.push({id:a.entity_id,floorId:i.id,roomId:(d==null?void 0:d.id)??null,x:a.x,z:a.z,y:a.y??Kt(s,i.height,a.mount??null),lamp:s==="light"?a.mount??"ceiling":null,model:s==="camera"?a.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,motion:s==="camera"?Qu(o,a.entity_id):void 0,fov:a.fov??void 0,reach:a.reach??void 0,tilt:a.tilt??void 0,rotation:a.rotation??0,icon:a.icon?Qt(a.icon):Jt(s),cone:s==="camera"&&a.cone===!1?!1:void 0,name:a.name||J(o,a.entity_id,c),ownName:a.name||void 0,showName:!!a.show_name,text:ke(o,l),active:qe(l),unavailable:Z(l),glow:s==="light"?jr(yt(l),a.glow_scale):null,show:a.marker??void 0,fixed:!!a.locked})}return t}function Dr(o,e){var n;let t=`${e} ${String(((n=o.states[e])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Qu(o,e){return Ye(o,e).some(t=>{var n;return((n=o.states[t])==null?void 0:n.state)==="on"})}function Ye(o,e){var n,r;let t=(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id;return t?Object.values(o.entities??{}).filter(i=>i.device_id===t&&i.entity_id.startsWith("binary_sensor.")).map(i=>i.entity_id).filter(i=>{var a;return["motion","occupancy","presence"].includes(String((a=o.states[i])==null?void 0:a.attributes.device_class))}):[]}function ul(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function ve(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function Xt(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function jr(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}var Te=(o,e)=>[o[0]-e[0],o[1]-e[1]],tt=(o,e)=>[o[0]+e[0],o[1]+e[1]],Qe=(o,e)=>[o[0]*e,o[1]*e],Vr=(o,e)=>o[0]*e[0]+o[1]*e[1],Zt=(o,e)=>o[0]*e[1]-o[1]*e[0],Cn=o=>Math.hypot(o[0],o[1]),nt=o=>{let e=Cn(o)||1;return[o[0]/e,o[1]/e]},pl=o=>[-o[1],o[0]],hl=o=>[o[1],-o[0]];function en(o,e,t=[]){let n=e.eps??.005,r=[],i=t.filter(P=>Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1])>.05),a=[],s=P=>{for(let M=0;M<a.length;M++)if(Math.abs(a[M][0]-P[0])<=n&&Math.abs(a[M][1]-P[1])<=n)return M;return a.push([P[0],P[1]]),a.length-1},l=[];for(let P of o){let M=P.points;if(M.length<3||Math.abs(Oe(M))<1e-6)continue;let $=Oe(M)>0,E=M.map(s);for(let C=0;C<M.length;C++){let j=E[C],N=E[(C+1)%M.length];j!==N&&l.push($?{u:j,v:N,room:P.id,edge:C,forward:!0}:{u:N,v:j,room:P.id,edge:C,forward:!1})}}let d=i.map(P=>[s(P.a),s(P.b)]),c=new Set;for(let P of o){let M=P.points;M.length<3||(P.wall_splits??[]).forEach(($,E)=>{if(!$||E>=M.length)return;let C=M[E],j=Te(M[(E+1)%M.length],C),N=Cn(j);for(let X of $)X>n&&X<N-n&&c.add(s(tt(C,Qe(j,X/N))))})}let u=[];for(let P of l){let M=a[P.u],$=a[P.v],E=Te($,M),C=Cn(E),j=Qe(E,1/C),N=[];for(let H=0;H<a.length;H++){if(H===P.u||H===P.v)continue;let K=Te(a[H],M),W=Vr(K,j);W<=n||W>=C-n||Math.abs(Zt(j,K))<=n&&N.push({t:W,id:H})}N.sort((H,K)=>H.t-K.t);let X=[{t:0,id:P.u},...N,{t:C,id:P.v}];for(let H=0;H+1<X.length;H++){let K=X[H],W=X[H+1],se=P.forward?K.t:C-W.t,F=P.forward?W.t:C-K.t;u.push({u:K.id,v:W.id,room:P.room,edge:P.edge,t0:se,t1:F})}}let p=new Map;for(let P of u){let M=P.u<P.v?`${P.u}-${P.v}`:`${P.v}-${P.u}`,$=p.get(M);$||p.set(M,$=[]),$.push(P)}let h=P=>({room_id:P.room,edge:P.edge,t0:P.t0,t1:P.t1}),f=new Map;for(let P of u){let M=`${P.room}:${P.edge}`;f.set(M,[...f.get(M)??[],P.t0].sort(($,E)=>$-E))}let m=P=>{var E,C;let M=(C=(E=o.find(j=>j.id===P.room))==null?void 0:E.wall_heights)==null?void 0:C[P.edge];if(!Array.isArray(M))return M;let $=f.get(`${P.room}:${P.edge}`)??[];return M[$.indexOf(P.t0)]??null},g=P=>{let M=P.map(m).filter(E=>typeof E=="number"&&E>0);if(M.length)return Math.min(...M);let $=P.map(E=>{var C;return(C=o.find(j=>j.id===E.room))==null?void 0:C.ceiling_height});return $.every(E=>typeof E=="number"&&E>0)?Math.max(...$):void 0},_=P=>{let M=P.map($=>{var E,C;return(C=(E=o.find(j=>j.id===$.room))==null?void 0:E.wall_thickness)==null?void 0:C[$.edge]}).filter($=>typeof $=="number"&&$>0);return M.length?Math.max(...M):void 0},x=P=>{var M;for(let $ of P){let E=o.find(X=>X.id===$.room),C=(M=E==null?void 0:E.wall_slopes)==null?void 0:M[$.edge];if(!E||!C)continue;let j=E.points[$.edge],N=E.points[($.edge+1)%E.points.length];return{p:[j[0],j[1]],q:[N[0],N[1]],h0:Math.max(.05,C[0]),h1:Math.max(.05,C[1])}}},y=P=>P.some(M=>m(M)===0),S=P=>{let M=x(P);return M?{height:Math.max(M.h0,M.h1),slope:M}:{height:g(P)}},z=[],A=[];for(let P of p.values()){let M=P[0],$=P.find(E=>E!==M&&E.u===M.v&&E.v===M.u&&E.room!==M.room);for(let E of P)E!==M&&E!==$&&E.room!==M.room&&r.push(`overlap:${M.room}:${E.room}`);if(y($?[M,$]:[M])){$&&z.push([M.room,$.room]);continue}if($){let E=_([M,$])??e.interior;A.push({a:M.u,b:M.v,left:E/2,right:E/2,exterior:!1,roomLeft:M.room,roomRight:$.room,sources:[h(M),h($)],...S([M,$])})}else A.push({a:M.u,b:M.v,left:0,right:_([M])??e.exterior,exterior:!0,roomLeft:M.room,roomRight:null,sources:[h(M)],...S([M])})}let v=P=>nt(Te(a[P.b],a[P.a]));for(let P of A){if(P.exterior||P.free)continue;let M=new Set;for(let E of[P.a,P.b])for(let C of A)!C.exterior||C.free||C.a!==E&&C.b!==E||Math.abs(Zt(v(P),v(C)))>1e-6||(C.roomLeft===P.roomLeft?M.add("left"):C.roomLeft===P.roomRight&&M.add("right"));if(M.size!==1)continue;let $=P.left+P.right;M.has("left")?(P.left=0,P.right=$):(P.left=$,P.right=0)}i.forEach((P,M)=>{var H;let[$,E]=d[M];if($===E)return;let C=[(P.a[0]+P.b[0])/2,(P.a[1]+P.b[1])/2],j=((H=o.find(K=>K.points.length>=3&&Y(C,K.points)))==null?void 0:H.id)??null,N=(P.thickness??e.interior)/2,X=typeof P.height=="number"&&P.height>0?P.height:void 0;A.push({free:P.id,a:$,b:E,left:N,right:N,exterior:!1,roomLeft:j,roomRight:j,sources:[],height:X})}),A=Xu(A,a,c);let O=ep(A,a);return{walls:A.map((P,M)=>{let $=a[P.a],E=a[P.b],C=O.get(`${M}:a`),j=O.get(`${M}:b`),N=tp([C.right,j.left,E,j.right,C.left,$],1e-6);return{id:Ju($,E),a:[$[0],$[1]],b:[E[0],E[1]],left:P.left,right:P.right,exterior:P.exterior,roomLeft:P.roomLeft,roomRight:P.roomRight,sources:P.sources,footprint:N,...P.free?{free:P.free}:{},...P.height!==void 0?{height:P.height}:{},...P.slope?{slope:P.slope}:{}}}),warnings:[...new Set(r)],open:z}}function Ju(o,e){let t=i=>Math.round(i*100),[n,r]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function fl(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Xu(o,e,t=new Set){let n=o.slice(),r=!0;for(;r;){r=!1;let i=new Map;n.forEach((a,s)=>{for(let l of[a.a,a.b]){let d=i.get(l);d||i.set(l,d=[]),d.push(s)}});for(let[a,s]of i){if(s.length!==2||t.has(a))continue;let l=n[s[0]],d=n[s[1]];if(l.b!==a&&(l=fl(l)),d.a!==a&&(d=fl(d)),l.a===d.b)continue;let c=nt(Te(e[l.b],e[l.a])),u=nt(Te(e[d.b],e[d.a]));if(Math.abs(Zt(c,u))>1e-6||Vr(c,u)<=0||l.free||d.free||l.height!==d.height||l.slope||d.slope||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let p={...l,b:d.b,sources:Zu(l.sources,d.sources)},h=n.filter((f,m)=>m!==s[0]&&m!==s[1]);h.push(p),n.length=0,n.push(...h),r=!0;break}}return n}function Zu(o,e){let t=o.map(n=>({...n}));for(let n of e){let r=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function ep(o,e){let t=new Map;o.forEach((r,i)=>{let a=nt(Te(e[r.b],e[r.a])),s=[[r.a,{key:`${i}:a`,d:a,left:r.left,right:r.right,angle:Math.atan2(a[1],a[0])}],[r.b,{key:`${i}:b`,d:Qe(a,-1),left:r.right,right:r.left,angle:Math.atan2(-a[1],-a[0])}]];for(let[l,d]of s){let c=t.get(l);c||t.set(l,c=[]),c.push(d)}});let n=new Map;for(let[r,i]of t){let a=e[r];i.sort((d,c)=>d.angle-c.angle);let s=d=>({left:tt(a,Qe(pl(d.d),d.left)),right:tt(a,Qe(hl(d.d),d.right))});for(let d of i)n.set(d.key,s(d));if(i.length<2)continue;let l=4*Math.max(...i.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<i.length;d++){let c=i[d],u=i[(d+1)%i.length],p=tt(a,Qe(pl(c.d),c.left)),h=tt(a,Qe(hl(u.d),u.right)),f=Zt(c.d,u.d);if(Math.abs(f)<1e-4)continue;let m=Zt(Te(h,p),u.d)/f,g=tt(p,Qe(c.d,m));Cn(Te(g,a))>l||(n.get(c.key).left=g,n.get(u.key).right=g)}}return n}function tp(o,e){let t=o.filter((r,i)=>Cn(Te(r,o[(i+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let i=t[(r+t.length-1)%t.length],a=t[r],s=t[(r+1)%t.length],l=Te(a,i),d=Te(s,a);if(Math.abs(Zt(nt(l),nt(d)))<1e-7&&Vr(l,d)>0){t=t.filter((c,u)=>u!==r),n=!0;break}}}return t}function yo(o,e,t){let n=o.points[e],r=o.points[(e+1)%o.points.length],i=nt(Te(r,n));return tt(n,Qe(i,t))}function ml(o,e,t){if(o.wall){let r=t.find(s=>s.id===o.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let i=nt(Te(r.b,r.a));return{room:{id:o.room_id,name:"",area_id:null,points:[r.a,r.b,tt(r.a,[-i[1],i[0]])]},edge:0}}let n=e.find(r=>r.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}var xt=Math.PI/180;function tn(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),r=Math.max(o.z0,o.z1);return o.axis==="x"?{u0:e,u1:t,w:r-n,at:(i,a)=>[i,o.flip?r-a:n+a]}:{u0:n,u1:r,w:t-e,at:(i,a)=>[o.flip?t-a:e+a,i]}}function nn(o){let e=tn(o).w,t=o.eave_a,n=o.eave_b,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xt),i=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xt);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(o.shape==="mansard"){let l=vl(e,t,n,r,i);return{vr:l.vr,rh:l.rh,y:l.y}}let a=r+i>1e-6?Math.min(e,Math.max(0,(n-t+e*i)/(r+i))):e/2,s=t+a*r;return{vr:a,rh:s,y:l=>l<=a?t+l*r:n+(e-l)*i}}function Nr(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var gl=.14;function bl(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function qr(o,e){return nn(o).rh-gl>e+.01}function _l(o,e,t,n){let r=null,i=Math.max(0,o.settings.roof.overhang??0);for(let a of Nr(o)){if(a.open||n!==void 0&&!qr(a,n))continue;let s=Math.min(a.x0,a.x1),l=Math.max(a.x0,a.x1),d=Math.min(a.z0,a.z1),c=Math.max(a.z0,a.z1);if(e<s-1e-6||e>l+1e-6||t<d-1e-6||t>c+1e-6||a.points&&a.points.length>=3&&!Y([e,t],a.points))continue;let[u,p]=rp(a,e,t),h=a.shape==="flat"||a.shape==="parapet",f=Math.max(0,a.overhang??i),g=((h?null:op(np(a,{u0:f,u1:f,a:f,b:f}),u,p))??nn(a).y(p))-gl;r=r===null?g:Math.max(r,g)}return r}var Rn=Math.tan(30*xt);function vl(o,e,t,n,r){let i=Math.min(o*.3,n>1e-6?2.4/n:o*.3),a=Math.min(o*.3,r>1e-6?2.4/r:o*.3),s=e+i*n,l=t+a*r,d=Math.min(o-a,Math.max(i,(l-s+Rn*(o-a+i))/(2*Rn))),c=s+(d-i)*Rn;return{vla:i,vlb:a,yla:s,ylb:l,vr:d,rh:c,y:p=>p<=i?e+p*n:p<=d?s+(p-i)*Rn:p<=o-a?l+(o-a-p)*Rn:t+(o-p)*r}}function np(o,e){let t=tn(o),n=nn(o),r=t.w,i=Math.max(0,e.a),a=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=(H,K)=>[H,K,n.y(K)],c=d(s,-i),u=d(l,-i),p=d(l,r+a),h=d(s,r+a),f=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xt),m=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xt);if(o.shape==="pent"){let H=[c,u,p,h],K=[[0,n.y(0)],[r,n.y(r)]];return{faces:[H],rim:H,ridges:[[p,h]],gable:K,gables:[K,K]}}if(o.shape==="pyramid"){let H=[(t.u0+t.u1)/2,n.vr,n.rh];return{faces:[[c,u,H],[u,p,H],[p,h,H],[h,c,H]],rim:[c,u,p,h],ridges:[[c,H],[h,H],[u,H],[p,H]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let H=vl(r,o.eave_a,o.eave_b,f,m),K=[[0,n.y(0)],[H.vla,H.yla],[H.vr,H.rh],[r-H.vlb,H.ylb],[r,n.y(r)]],W=[s,H.vla,H.yla],se=[l,H.vla,H.yla],F=[s,r-H.vlb,H.ylb],B=[l,r-H.vlb,H.ylb],oe=[s,H.vr,H.rh],Ae=[l,H.vr,H.rh];return{faces:[[c,u,se,W],[W,se,Ae,oe],[oe,Ae,B,F],[F,B,p,h]],rim:[c,u,se,Ae,B,p,h,F,oe,W],ridges:[[oe,Ae],[W,se],[F,B]],gable:K,gables:[K,K]}}let[g,_]=Wr(o)??["gable","gable"],x=Br(o,[g,_]),y=g==="gable"?[s,n.vr,n.rh]:[t.u0+x.d0,n.vr,n.rh],S=_==="gable"?[l,n.vr,n.rh]:[t.u1-x.d1,n.vr,n.rh],z=[s,x.vah,x.yh],A=[s,x.vbh,x.yh],v=[l,x.vah,x.yh],O=[l,x.vbh,x.yh],G=g==="halfhip",P=_==="halfhip",M=[[c,u,...P?[v]:[],S,y,...G?[z]:[]],[y,S,...P?[O]:[],p,h,...G?[A]:[]]];g==="hip"&&M.push([h,c,y]),G&&M.push([A,z,y]),_==="hip"&&M.push([u,p,S]),P&&M.push([v,O,S]);let $=[c,u,..._==="gable"?[S]:P?[v,O]:[],p,h,...g==="gable"?[y]:G?[A,z]:[]],E=[[y,S]];g==="hip"&&E.push([c,y],[h,y]),G&&E.push([z,y],[A,y]),_==="hip"&&E.push([u,S],[p,S]),P&&E.push([v,S],[O,S]);let C=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],j=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],N=H=>H==="gable"?C:H==="halfhip"?j:null,X=[N(g),N(_)];return{faces:M,rim:$,ridges:E,gable:X[0]??X[1],gables:X}}function Wr(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,t=n=>n==="gable"||n==="hip"||n==="halfhip"?n:e;return[t(o.end_u0),t(o.end_u1)]}function Br(o,e){let t=tn(o),n=nn(o),r=t.w,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*xt),a=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*xt),s=t.u1-t.u0,l=e[0]!=="gable"&&e[1]!=="gable"?s/2:s,d=Math.min(n.y(0),n.y(r)),c=d+(n.rh-d)*.55,u=i>1e-6?Math.min(n.vr,(c-o.eave_a)/i):n.vr,p=a>1e-6?Math.max(n.vr,r-(c-o.eave_b)/a):n.vr,h=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),f=Math.min(l-.1,(n.rh-c)/Math.max(.2,i)),m=g=>g==="hip"?h:g==="halfhip"?f:0;return{d0:m(e[0]),d1:m(e[1]),yh:c,vah:u,vbh:p}}function op(o,e,t){let n=null;for(let r of o.faces){if(!Y([e,t],r.map(x=>[x[0],x[1]])))continue;let[i,a]=r,s=r.slice(2).find(x=>Math.abs((a[0]-i[0])*(x[1]-i[1])-(a[1]-i[1])*(x[0]-i[0]))>1e-9);if(!s)continue;let l=a[0]-i[0],d=a[2]-i[2],c=a[1]-i[1],u=s[0]-i[0],p=s[2]-i[2],h=s[1]-i[1],f=d*h-c*p,m=c*u-l*h,g=l*p-d*u;if(Math.abs(m)<1e-9)continue;let _=i[2]-(f*(e-i[0])+g*(t-i[1]))/m;n=n===null?_:Math.min(n,_)}return n}function rp(o,e,t){let n=Math.min(o.x0,o.x1),r=Math.max(o.x0,o.x1),i=Math.min(o.z0,o.z1),a=Math.max(o.z0,o.z1);return o.axis==="x"?[e,o.flip?a-t:t-i]:[t,o.flip?r-e:e-n]}function yl(o,e,t){let n=tn(e),r=o.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>e.base+.05)),i=d=>d.some(c=>r.some(u=>Y(c,u.points))),a=.35,s=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:i(s.map(d=>n.at(d,-a)))?0:t,b:i(s.map(d=>n.at(d,n.w+a)))?0:t,u0:i(l.map(d=>n.at(n.u0-a,d)))?0:t,u1:i(l.map(d=>n.at(n.u1+a,d)))?0:t}}var xo=Math.PI/180,ip=1.13,ap=1.72,ko=.025,kt=.07,wl=.25;function Hn(o,e){var n;let t=[];for(let r of o.floors){if(e&&r.id!==e)continue;let{walls:i}=en(r.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},r.walls??[]);for(let a of i){if(!a.exterior&&!a.free)continue;let s=a.b[0]-a.a[0],l=a.b[1]-a.a[1],d=Math.hypot(s,l);if(d<.5)continue;let c=l/d,u=-s/d,p=Math.min(r.height,a.height??r.height),h=((n=a.sources.find(g=>g.room_id===a.roomLeft))==null?void 0:n.edge)??null,f={floorId:r.id,room:a.roomLeft,edge:h,free:!!a.free},m=(g,_,x,y)=>t.push({key:g,section:null,side:"top",flat:!1,o:_,eu:x,es:[0,1,0],n:y,lu:d,ls:p,pitch:90,span:()=>[0,d],facing:[y[0],y[2]],wall:f});m(`wall:${r.id}:${a.id}`,[a.a[0]+c*a.right,r.elevation,a.a[1]+u*a.right],[s/d,0,l/d],[c,0,u]),a.free&&m(`wall:${r.id}:${a.id}:back`,[a.b[0]-c*a.left,r.elevation,a.b[1]-u*a.left],[-s/d,0,-l/d],[-c,0,-u])}}return t}var xl="ground";function sp(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function lp(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],i=sp(o),a=n[0]*e.u+r[0]*e.v,s=n[2]*e.u+r[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:_t(i,a,s)):e.base??0;return{key:xl,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function Mt(o,e,t=on(o)){return e.face===xl?lp(o,e):e.face.startsWith("wall:")?Hn(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function Ur(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function on(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(x=>cp(x,yl(o,x,x.overhang??e.overhang)));let t=Ur(o);if(!t)return[];let n=t.rooms.flatMap(x=>x.points.map(y=>y[0])),r=t.rooms.flatMap(x=>x.points.map(y=>y[1])),i=o.settings.wall_exterior+e.overhang,a=Math.min(...n)-i,s=Math.max(...n)+i,l=Math.min(...r)-i,d=Math.max(...r)+i,c=t.elevation+t.height;if(e.type==="flat")return[kl("main",null,a,l,s,d,c+wl)];let u=s-a>=d-l,p=e.ridge==="short"?!u:u,h=(p?d-l:s-a)/2,f=h*Math.tan(e.pitch*xo),m=(x,y,S)=>p?[x,c+S,(l+d)/2+y]:[(a+s)/2+y,c+S,x],[g,_]=p?[a,s]:[l,d];return[-1,1].map(x=>wo(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",m(g,x*h,0),m(_,x*h,0),m(g,0,f),e.pitch,()=>[0,_-g]))}function cp(o,e){let t=tn(o),n=nn(o),r=(y,S,z)=>{let[A,v]=t.at(y,S);return[A,z,v]},i=Math.max(0,e.a),a=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),d=l-s;if(o.shape==="flat"||o.shape==="parapet"){let y=t.at(s,-i),S=t.at(l,t.w+a);return[kl(o.id,o.id,Math.min(y[0],S[0]),Math.min(y[1],S[1]),Math.max(y[0],S[0]),Math.max(y[1],S[1]),o.eave_a+wl)]}if(o.shape==="pent")return[wo(`${o.id}:a`,o.id,"a",r(s,-i,n.y(-i)),r(l,-i,n.y(-i)),r(s,t.w+a,n.y(t.w+a)),o.pitch_a,()=>[0,d])];let c=Wr(o),u=c?Br(o,c):null,p=o.shape==="pyramid"||(c==null?void 0:c[0])==="hip",h=o.shape==="pyramid"||(c==null?void 0:c[1])==="hip",f=o.shape==="pyramid"?(t.u1-t.u0)/2:p?u.d0:0,m=o.shape==="pyramid"?(t.u1-t.u0)/2:h?u.d1:0,g=p?t.u0+f-s:0,_=h?l-(t.u1-m):0,x=[];if(n.vr>.3){let y=Math.hypot(n.vr+i,n.rh-n.y(-i));x.push(wo(`${o.id}:a`,o.id,"a",r(s,-i,n.y(-i)),r(l,-i,n.y(-i)),r(s,n.vr,n.rh),o.pitch_a,S=>[g*(S/y),d-_*(S/y)]))}if(t.w-n.vr>.3){let y=Math.hypot(t.w+a-n.vr,n.rh-n.y(t.w+a));x.push(wo(`${o.id}:b`,o.id,"b",r(l,t.w+a,n.y(t.w+a)),r(s,t.w+a,n.y(t.w+a)),r(l,n.vr,n.rh),o.pitch_b,S=>[_*(S/y),d-g*(S/y)]))}if(p||h){let y=n.y(-i),S=n.y(t.w+a),z=[];p&&z.push([`${o.id}:c`,"c",r(s,t.w+a,S),r(s,-i,y),r(t.u0+f,n.vr,n.rh)]),h&&z.push([`${o.id}:d`,"d",r(l,-i,y),r(l,t.w+a,S),r(t.u1-m,n.vr,n.rh)]);for(let[A,v,O,G,P]of z){let M=dp(A,o.id,v,O,G,P);M&&x.push(M)}}return x}function dp(o,e,t,n,r,i){let a=Fn($t(r,n));if(a<.3)return null;let s=ot($t(r,n)),l=$t(i,n),d=l[0]*s[0]+l[1]*s[1]+l[2]*s[2],c=[l[0]-s[0]*d,l[1]-s[1]*d,l[2]-s[2]*d],u=Fn(c);if(u<.3)return null;let p=ot(c),h=ot(Sl(s,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=ot([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/xo;return{key:o,section:e,side:t,flat:!1,o:n,eu:s,es:p,n:h,lu:a,ls:u,pitch:m,span:_=>{let x=Math.min(1,Math.max(0,_/u));return[d*x,a-(a-d)*x]},facing:[f[0],f[2]]}}function wo(o,e,t,n,r,i,a,s){let l=ot($t(r,n)),d=ot($t(i,n)),c=ot(Sl(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let u=ot([-d[0],0,-d[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:d,n:c,lu:Fn($t(r,n)),ls:Fn($t(i,n)),pitch:a,span:s,facing:[u[0],u[2]]}}function kl(o,e,t,n,r,i,a){let s=r-t>=i-n,l=s?r-t:i-n,d=s?i-n:r-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,a,n],eu:s?[1,0,0]:[0,0,1],es:s?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:s?[0,1]:[1,0]}}function Kr(o){let e=o.module_w||ip,t=o.module_h||ap;return o.portrait===!1?[t,e]:[e,t]}function $l(o){var e;return(e=o.layout)!=null&&e.length?o.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function Gr(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*xo:o.wall?Math.min(90,Math.max(0,e.tilt??0))*xo:0}function St(o,e){let[t,n]=Kr(e),r=$l(e),i=Math.max(1,...r),s=(r.length-1)*Ml(o,e)+n*Math.cos(Gr(o,e));return[i*t+(i-1)*ko,s]}function Ml(o,e){let[,t]=Kr(e),n=Gr(o,e);return o.wall?t*Math.cos(n)+ko:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+ko}function up(o,e,t=!1){let[n,r]=Kr(e),i=[],a=Gr(o,e),s=r*Math.cos(a),l=Ml(o,e),d=$l(e),c=Math.max(1,...d),u=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(m,g,_)=>[o.o[0]+o.eu[0]*m+o.es[0]*g+o.n[0]*_,o.o[1]+o.eu[1]*m+o.es[1]*g+o.n[1]*_,o.o[2]+o.eu[2]*m+o.es[2]*g+o.n[2]*_],f=(m,g)=>{if(o.unbounded)return!0;if(g<-1e-6||g>o.ls+1e-6)return!1;let[_,x]=o.span(g);return m>=_-1e-6&&m<=x+1e-6};return d.forEach((m,g)=>{let _=e.align==="right"?c-m:e.align==="center"?(c-m)/2:0;for(let x=0;x<m;x++){let y=`${g}:${x}`,S=u.has(y);if(S&&!t)continue;let z=e.u+(x+_)*(n+ko),A=e.v+g*l,v=z+n,O=A+(o.flat||o.wall?s:r);if(p){if(!(f((z+v)/2,A)&&f((z+v)/2,O)))continue}else if(![[z,A],[v,A],[v,O],[z,O]].every(([C,j])=>f(C,j)))continue;if(o.wall&&a>.001){let C=kt+r*Math.sin(a),[j,N]=e.flip?[C,kt]:[kt,C],X=[h(z,A,j),h(v,A,j),h(v,O,N),h(z,O,N)],H=e.flip?A:O,K=[z+.05,v-.05].map(W=>[h(W,H,0),h(W,H,C)]);i.push({corners:X,posts:K,cell:y,skipped:S});continue}if(!o.flat){i.push({corners:[h(z,A,kt),h(v,A,kt),h(v,O,kt),h(z,O,kt)],posts:[],cell:y,skipped:S});continue}let G=.15,P=G+r*Math.sin(a),[M,$]=e.flip?[O,A]:[A,O],E=[h(z,M,G),h(v,M,G),h(v,$,P),h(z,$,P)];i.push({corners:E,posts:[z+.05,v-.05].flatMap(C=>[[h(C,M,0),h(C,M,G)],[h(C,$,0),h(C,$,P)]]),cell:y,skipped:S})}}),i}function $t(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function Fn(o){return Math.hypot(o[0],o[1],o[2])}function ot(o){let e=Fn(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function Sl(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var pp=.78,hp=1.18;function fp(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||pp,module_h:o.h||hp}}function mp(o,e){let t=up(o,fp(e))[0];if(!t)return null;let n=r=>[r[0]-o.n[0]*.05,r[1]-o.n[1]*.05,r[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function gp(o,e,t){let n=e?mp(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,i=(n[0][1]+n[2][1])/2,a=(n[0][2]+n[2][2])/2;for(let s of[...o.floors].sort((l,d)=>d.elevation-l.elevation)){if(s.elevation>i)continue;let l=s.rooms.find(d=>Y([r,a],d.points));if(l)return{floor:s,roomId:l.id,corners:n}}return null}function El(o,e){var r;let t=((r=o.settings.roof)==null?void 0:r.windows)??[];if(!t.length)return[];let n=new Map(on(o).map(i=>[i.key,i]));return t.filter(i=>{var a;return((a=gp(o,n.get(i.face),i))==null?void 0:a.roomId)===e})}function Pl(o,e){let[t,n]=St(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var Be=Ie`
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
`,rt=Ie`
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
`;var bp=4,_p=3e3,vp=8,yp=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],rn=o=>b`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${_o(o)} />
  </svg>`,$o={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},Yr=o=>b`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,Qr=class extends Pe{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},readOnly:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},_p)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return I(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}get areaName(){var e,t,n;return(e=this.room)!=null&&e.area_id?(n=(t=this.hass.areas)==null?void 0:t[this.room.area_id])==null?void 0:n.name:void 0}name(e){return J(this.hass,e,this.areaName)}nameButton(e){return b`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&ve(this,e)}>${this.name(e)}</button>`}askFor(e){var t;return!((t=this.confirmEntities)!=null&&t.has(e))||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let r=()=>{var i;this.readOnly||(i=this.confirmEntities)!=null&&i.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return b`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${Z(e)}
      @click=${r}
    ></button>`}renderHere(e){if(!this.building||!zn("locate")||!go(this.building))return w;let t=bo(this.hass,this.building).filter(n=>n.roomId===e.id);return t.length?b`<p class="fp3d-rp-facts fp3d-rp-here">
      ${t.map((n,r)=>b`${r?", ":""}<span style="color:${n.color}">●</span> ${n.name}`)}
    </p>`:w}render(){let e=this.room;if(!e||!this.hass)return w;let t=_e(this.hass,e.area_id),n=this.memo,{shown:r,more:i}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?Us(this.hass,this.floor,e,this.building?El(this.building,e.id):[]):{shown:t,more:[]}},a=Ir(this.hass,i).map(S=>S.primary),s=a.length,l=this._showAll?[...r,...a]:r,d=S=>l.filter(z=>S.includes(V(z))).map(z=>this.hass.states[z]),c=d(["light"]),u=d(["cover"]),p=d(["climate"]),h=d(["media"]),f=d(["switch","fan","lock"]),m=d(["sensor","binary"]),g=d(["camera"]);this.hasCameras=g.length>0;let _=d(["scene","script"]),x=this.facts(p),y=c.filter(S=>S.state==="on");return b`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${x.length?b`<p class="fp3d-rp-facts">${x.join(" \xB7 ")}</p>`:w}
          ${this.renderHere(e)}
          ${this.readOnly?b`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:w}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?w:b`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:b`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${c.length?this.section("panel_lights",c.map(S=>this.lightRow(S)),b`${y.length<c.length?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:c.filter(S=>!Z(S)).map(S=>S.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:w}${y.length?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:y.map(S=>S.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:w}`):w}
        ${u.length?this.section("panel_covers",u.map(S=>this.coverRow(S)),u.length>1?b`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:u.filter(S=>!Z(S)).map(S=>S.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:u.filter(S=>!Z(S)).map(S=>S.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:w):w}
        ${p.length?this.section("panel_climate",p.map(S=>this.climateRow(S))):w}
        ${h.length?this.section("panel_media",h.map(S=>this.mediaRow(S))):w}
        ${f.length?this.section("panel_switches",f.map(S=>this.switchRow(S))):w}
        ${g.length?this.section("panel_cameras",g.map(S=>this.cameraTile(S))):w}
        ${m.length?this.section("panel_sensors",m.map(S=>this.sensorRow(S))):w}
        ${_.length?this.section("panel_scenes",[b`<div class="fp3d-rp-scenes">
                  ${_.map(S=>b`<button
                      class="fp3d-btn"
                      ?disabled=${Z(S)}
                      @click=${()=>this.call(V(S.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:S.entity_id})}
                    >
                      ${this.name(S.entity_id)}
                    </button>`)}
                </div>`]):w}
        ${s?b`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:s})}
            </button>`:w}
      </div>
    </section>`}facts(e){var l;let t=[],n=this.room,r=(d,c)=>{var f;let u=Ze(this.hass,this.floor,n,d);if(u===null)return null;if(d==="temperature")return`${ie(this.hass,Ut(this.hass,u),1)} ${Fe(this.hass)}`;let p=Mr(this.hass,this.floor,n,d)[0],h=((f=this.hass.states[p])==null?void 0:f.attributes.unit_of_measurement)??c;return`${ie(this.hass,u,1)} ${h}`},i=e.find(d=>typeof d.attributes.current_temperature=="number"),a=r("temperature","\xB0C");a?t.push(a):i&&((l=n.climate)==null?void 0:l.temperature)!=="none"&&t.push(`${ie(this.hass,i.attributes.current_temperature,1)} ${Fe(this.hass)}`);let s=r("humidity","%");return s&&t.push(s),t}section(e,t,n=w){return b`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",r=t.supported_color_modes??[],i=r.some(p=>p!=="onoff"),a=r.includes("color_temp"),s=r.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,d=t.min_color_temp_kelvin??2200,c=t.max_color_temp_kelvin??6500,u=e.entity_id;return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${rn("light")}</span>
      ${this.nameButton(u)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:u}))}
      ${n&&i?b`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,brightness_pct:Number(p.target.value)})}
          /></label>`:w}
      ${n&&a?b`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${d}
              max=${c}
              step="50"
              .value=${String(t.color_temp_kelvin??d)}
              @change=${p=>this.call("light","turn_on",{entity_id:u,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:w}
      ${n&&s?b`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${yp.map(p=>b`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:u,rgb_color:p})}
              ></button>`)}
          </div>`:w}
    </div>`}coverRow(e){let t=e.attributes,n=t.supported_features??0,r=e.entity_id,i=Z(e);return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${rn("cover")}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.call("cover","open_cover",{entity_id:r})}>${this.t("cover_open")}</button>
        ${n&vp?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:r})}>${this.t("cover_stop")}</button>`:w}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.call("cover","close_cover",{entity_id:r})}>${this.t("cover_close")}</button>
      </div>
      ${n&bp&&typeof t.current_position=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${a=>this.call("cover","set_cover_position",{entity_id:r,position:Number(a.target.value)})}
          /></label>`:w}
      ${n&128&&typeof t.current_tilt_position=="number"?b`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_tilt_position)}
              @change=${a=>this.call("cover","set_cover_tilt_position",{entity_id:r,tilt_position:Number(a.target.value)})}
          /></label>`:n&48?b`<div class="fp3d-rp-buttons">
              ${n&16?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_open")}</button>`:w}
              ${n&32?b`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_close")}</button>`:w}
            </div>`:w}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,r=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,a=t.min_temp??5,s=t.max_temp??30,l=t.hvac_modes??[],d=c=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(s,Math.max(a,Math.round(c/i)*i))});return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${rn("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${r!==null?b`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>d(r-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${ie(this.hass,r,1)} ${Fe(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>d(r+i)}>+</button>
          </div>`:w}
      ${l.length>1?b`<div class="fp3d-rp-chips">
            ${l.map(c=>b`<button
                class="fp3d-chip"
                aria-pressed=${e.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:w}
    </div>`}stateOf(e,t=ke(this.hass,e)){var r,i;if((i=(r=this.room)==null?void 0:r.no_state)!=null&&i.includes(e.entity_id))return"";let n=V(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,r=Z(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(a=>typeof a=="string"&&a).join(" \xB7 ");return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${rn("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?b`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:w}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${Yr($o.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${Z(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${Yr(e.state==="playing"?$o.pause:$o.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${Yr($o.next)}
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
          /></label>`:w}
    </div>`}switchRow(e){let t=e.entity_id,n=V(t),r=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",a=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(r,"toggle",{entity_id:t});return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${rn(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,a)}
    </div>`}cameraTile(e){var i;let t=e.attributes.entity_picture,n=t&&!Z(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=(i=this.floor)==null?void 0:i.placements.some(a=>a.entity_id===e.entity_id);return b`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&ve(this,e.entity_id)}>
        ${n?b`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:b`<span class="fp3d-rp-note">${ke(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${r?b`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${q("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:w}
    </div>`}sensorRow(e){let t=V(e.entity_id),n=t==="binary"&&e.state==="on";return b`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${rn(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Be,rt,Ie`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",Qr);var wp={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Et(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function Jr(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return i<=.1?0:Math.min(1,.3+i/10)}function Al(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let r=wp[n.state];if(!r)return null;let i=n.attributes,a=r.cloud??0;typeof i.cloud_coverage=="number"&&(a=Math.min(1,Math.max(0,i.cloud_coverage/100)));let s=r.wind??0;if(typeof i.wind_speed=="number"){let d=i.wind_speed_unit==="m/s"?i.wind_speed*3.6:i.wind_speed_unit==="mph"?i.wind_speed*1.609:i.wind_speed;s=Math.max(s,Math.min(1,d/60))}let l=Jr(o,t);return l!==null&&l>0&&(a=Math.max(a,.85)),{entity:n.entity_id,condition:n.state,rain:l??r.rain??0,snow:r.snow??0,fog:r.fog??0,cloud:a,wind:s,lightning:!!r.lightning}}function Il(o,e){let t=new Set(e??as);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var xp=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),kp=new Set(["power","plug","connectivity","running"]);function Mo(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return kp.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return xp.has(n)||n.startsWith("ob ")}function ei(o){let e=xe(o);if(!e||e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var ge=["#3a3f47","#3a3f47"],Pt=["#23262b","#23262b"],De=["#5a3b25","#5a3b25"],ue=["#1f4fa8","#1f4fa8"],it=["#e3b616","#e3b616"],te=["#2f7d3b","#2f7d3b"],Tl={default:{rest:ge,bio:De,paper:ue,plastic:it,glass:te,garden:te,recycling:it,other:ge},DE:{rest:Pt,bio:De,paper:ue,plastic:it,glass:te,garden:te,recycling:it},AT:{rest:ge,bio:De,paper:[ge[0],"#c0262d"],plastic:it,glass:te,garden:te},CH:{rest:["#d8d8d8","#d8d8d8"],bio:te,paper:ue,plastic:ge,glass:te,garden:te},NL:{rest:ge,bio:te,paper:ue,plastic:["#3a3f47","#e57a1f"],glass:te,garden:te},BE:{rest:ge,bio:te,paper:ue,plastic:ue,glass:te,garden:te},GB:{rest:Pt,bio:["#3a3f47","#5a3b25"],paper:ue,plastic:ue,glass:Pt,garden:De,recycling:ue},US:{rest:Pt,bio:te,paper:ue,plastic:ue,glass:ue,garden:te,recycling:ue},CA:{rest:Pt,bio:te,paper:ue,plastic:ue,glass:ue,garden:te,recycling:ue},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:ge,bio:De,paper:[ge[0],"#e3b616"],plastic:[ge[0],"#e3b616"],recycling:[ge[0],"#e3b616"],glass:te,garden:te},IT:{rest:ge,bio:De,paper:ue,plastic:it,glass:te,garden:te},ES:{rest:ge,bio:De,paper:ue,plastic:it,glass:te,garden:te},PT:{rest:ge,bio:De,paper:ue,plastic:it,glass:te,garden:te},DK:{rest:Pt,bio:te,paper:ue,plastic:ge,glass:te,garden:te},SE:{rest:Pt,bio:De,paper:ue,plastic:ge,glass:te,garden:te},NO:{rest:ge,bio:De,paper:ue,plastic:ge,glass:te,garden:te},FI:{rest:ge,bio:De,paper:ue,plastic:ge,glass:te,garden:te}},Rl="DE";function Fl(o){Rl=o}function Hl(o){var n;let e=(n=o==null?void 0:o.config)==null?void 0:n.country;if(e)return e.toUpperCase();let t=((o==null?void 0:o.language)??"").split("-")[1];return t?t.toUpperCase():"DE"}function $p(o,e){var t;return((t=Tl[e])==null?void 0:t[o])??Tl.default[o]??ge}function Ll(o,e=Rl){let t=$p(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var Mp={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function Zr(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(r=>r.trim()&&n.includes(r.trim())):e==="other"?!1:Mp[e].some(r=>n.includes(r))}function ti(o){let e=typeof o=="string"?o:(o==null?void 0:o.date)??(o==null?void 0:o.dateTime);if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function Sp(o){return o.map(e=>({day:ti(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function Ol(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function ni(o,e,t=new Date,n=42){let r=new Map,i=o.callApi;if(!i)return r;let a=new Date(t.getFullYear(),t.getMonth(),t.getDate()),s=Dl(a,n);return await Promise.all(e.map(async l=>{try{let d=await i.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(a.toISOString())}&end=${encodeURIComponent(s.toISOString())}`);r.set(l,Sp(Array.isArray(d)?d:[]))}catch{}})),r}var an=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),Dl=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),So=(o,e)=>Math.round((an(e).getTime()-an(o).getTime())/864e5);function Xr(o,e,t={}){let n=t.from??14,r=t.until??12,i=e.getHours()+e.getMinutes()/60;return o===1&&i>=n||o===0&&i<r}function jl(o,e,t,n=new Date,r=3){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return[];if(i.startsWith("calendar.")){let s=an(n);return(t.get(i)??[]).filter(l=>l.day>=s&&Zr(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,r)}let a=oi(o,e,t,n);return a?[{day:a.day,summary:a.summary}]:[]}function oi(o,e,t,n=new Date,r={}){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return null;let a=an(n);if(i.startsWith("calendar.")){let c=(t.get(i)??[]).find(p=>p.day>=a&&Zr(p.summary,o.bin_kind??"rest",o.bin_match));if(!c)return null;let u=So(a,c.day);if(u===0&&n.getHours()+n.getMinutes()/60>=(r.until??12)){let p=(t.get(i)??[]).find(h=>h.day>a&&Zr(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:So(a,p.day),day:p.day,summary:p.summary,glow:Xr(So(a,p.day),n,r)}}return{days:u,day:c.day,summary:c.summary,glow:Xr(u,n,r)}}let s=e.states[i];if(!s)return null;let l=Ap(s,n);if(l===null||l<0)return null;let d=Dl(a,l);return{days:l,day:d,summary:String(s.attributes.friendly_name??""),glow:Xr(l,n,r)}}function Ep(o,e){let t=typeof o=="string"&&o!=="none"?o:null,n=t?e.states[t]:void 0;return!!n&&Wl.has(String(n.state).toLowerCase())}function ri(o,e){return Ep(o.bin_out,e)}function Vl(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function Nl(o,e=.3){let t=o.filter(s=>!s.icon),n=t.map((s,l)=>l),r=s=>n[s]===s?s:n[s]=r(n[s]);for(let s=0;s<t.length;s++)for(let l=s+1;l<t.length;l++){let d=t[s],c=t[l];d.floorId===c.floorId&&Math.hypot(d.x-c.x,d.z-c.z)<=d.r+c.r+e&&(n[r(l)]=r(s))}let i=new Map;t.forEach((s,l)=>i.set(r(l),[...i.get(r(l))??[],s]));let a=[];for(let s of i.values())s.sort((l,d)=>l.days-d.days||l.name.localeCompare(d.name)),a.push({floorId:s[0].floorId,x:s.reduce((l,d)=>l+d.x,0)/s.length,z:s.reduce((l,d)=>l+d.z,0)/s.length,y:Math.max(...s.map(l=>l.y)),lines:s});for(let s of o)s.icon&&a.push({floorId:s.floorId,x:s.x,z:s.z,y:s.y,lines:[s]});return a}function ql(o,e={}){let t=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,n=o.length?Math.min(...o.map(r=>r.days)):0;return new Set(o.filter(r=>(t===null||r.days<=t)&&(!e.nextOnly||r.days===n)).map(r=>r.id))}function Pp(o,e=new Date){let t=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o),r,i,a;if(t)[r,i,a]=[Number(t[1]),Number(t[2]),Number(t[3])];else if(n){let l=Number(n[1]),d=Number(n[3]);n[2]==="/"&&d>12&&l<=12&&([l,d]=[d,l]),a=l,i=d;let c=n[4];r=c?c.length===2?2e3+Number(c):Number(c):e.getFullYear(),!c&&new Date(r,i-1,a)<an(e)&&(r+=1)}else return null;if(i<1||i>12||a<1||a>31)return null;let s=new Date(r,i-1,a);return s.getMonth()===i-1?s:null}function Ap(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let r=/^\d{4}-\d{2}-\d{2}T/.test(n)?ti(n):Pp(n,e);if(r)return So(e,r);let i=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(i))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(i))return 1;let a=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(i)??/\bin\s+(\d+)/.exec(i);if(a)return Number(a[1]);let s=i.match(/\d+/g);return s?Number(s[s.length-1]):null}var Wl=new Set(["on","open","true","detected","home"]);function zl(o){let e=o!=null&&o.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function Bl(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let r=e.states[n];if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let i=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!i){let l=Number(r.state);return Wl.has(r.state.toLowerCase())||Number.isFinite(l)&&l>0}let a=zl(r),s=zl(e.states[i]);return a===null||t-a>7*864e5?!1:s===null||a>s+1e3}function Ul(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:zp(o)}var Kl=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function ii(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let i=n.attributes,a=String(i.problem??"").toLowerCase();return String(i.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&a.includes("moisture")&&!a.includes("high")}let r=Kl(n);return r!==null&&r<(o.moisture_min??20)}function ai(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let a=Number(t),s=n==="s"?a/60:n==="h"?a*60:a;return Math.max(0,Math.round(s))}let r=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(r)return Number(r[1])*60+Number(r[2])+Math.round(Number(r[3]??0)/60);let i=Date.parse(t);return Number.isFinite(i)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((i-e)/6e4)):null}var Ip=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function si(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return Ip.has(e)}var Tp=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function li(o,e,t){let n=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(n!==null&&Tp.has(n))return!0;let r=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),i=!!o&&!r&&n!==null&&(n==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(n));return e!==null&&e<=t&&!i}function Gl(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function Cl(o,e,t,n){let r=typeof o=="string"&&o!=="none"?o:null,i=r?t.states[r]:void 0;if(!r||!i||i.state==="unavailable"||i.state==="unknown")return!1;if(r.startsWith("binary_sensor.")||r.startsWith("input_boolean."))return i.state==="on";let a=Kl(i);if(a!==null)return a<=(e??10);let s=ti(i.state);return!!s&&s.getTime()<=an(n).getTime()}function Yl(o,e,t=new Date){let n=[];return Cl(o.service,o.service_min,e,t)&&n.push(o.service),o.service2!==o.service&&Cl(o.service2,o.service2_min,e,t)&&n.push(o.service2),n}var at=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),Ql=o=>!!o&&(o.state==="on"||o.state==="open");function Po(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let r of at(o)){let i=e.states[r];if(Ql(i)&&(i!=null&&i.last_changed)&&t-Date.parse(i.last_changed)>=n)return r}return null}function Jl(o,e,t=Date.now()){let n=null;for(let r of o)if(!(r.type!=="fridge"&&r.type!=="fridge_smart"))for(let i of at(r)){let a=e.states[i];if(!Ql(a)||!(a!=null&&a.last_changed))continue;let s=Date.parse(a.last_changed)+(r.door_alarm??2)*6e4-t;s>0&&(n===null||s<n)&&(n=s)}return n}var Eo=class{running=new Map;ended=new Map;update(e,t,n,r=Date.now()){let i=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;i===!0&&this.ended.set(e,r);let a=this.ended.get(e);return a===void 0?!1:r-a>12*36e5||n(a)?(this.ended.delete(e),!1):!0}};function zp(o){return[o.moisture??null,o.remaining??null,o.service??null,o.service2??null]}var tc="proxmoxve";function Cp(o){let e=new Map;for(let t of Object.values(o.entities??{})){if(t.platform!==tc||!t.device_id||!t.translation_key)continue;let n=t.entity_id.slice(0,t.entity_id.indexOf("."));if(n!=="sensor"&&n!=="binary_sensor")continue;let r=e.get(t.device_id);r||e.set(t.device_id,r=new Map);let i=`${n==="binary_sensor"?"b:":""}${t.translation_key}`;r.has(i)?r.set(`${i}#${t.entity_id}`,t.entity_id):r.set(i,t.entity_id)}return e}function Io(o){return!!o&&o.state!=="unavailable"&&o.state!=="unknown"}function je(o,e){let t=e?o.states[e]:void 0;if(!Io(t))return null;let n=Number(t.state);return Number.isFinite(n)?n:null}function Ao(o,e){var n;let t=(n=o.devices)==null?void 0:n[e];return(t==null?void 0:t.name_by_user)||(t==null?void 0:t.name)||e}function ci(o){let e=/^(?:qemu|lxc|vm)\s+(.*?)\s*\((\d+)\)\s*$/i.exec(o.trim());return e?{name:e[1],vmid:Number(e[2])}:{name:o.trim(),vmid:null}}var Xl=new WeakMap;function nc(o){let e=o==null?void 0:o.entities;if(!e)return!1;let t=Xl.get(e);return t===void 0&&Xl.set(e,t=Object.values(e).some(n=>n.platform===tc)),t}function Ln(o){var r,i,a;let e=[],t=[],n=[];for(let[s,l]of Cp(o)){let d=c=>l.get(c);if(d("node_status")||d("qemu_on")||d("lxc_on")){let c=d("node_status")??d("b:status"),u=o.states[c],p=c===d("node_status")?(u==null?void 0:u.state)==="online":(u==null?void 0:u.state)==="on";e.push({deviceId:s,name:Ao(o,s).replace(/^node\s+/i,""),online:p,cpu:je(o,d("cpu_used")),memory:je(o,d("memory_used_perc")),disk:je(o,d("disk_used_perc")),load:je(o,d("load_1m")),vmsOn:je(o,d("qemu_on")),lxcOn:je(o,d("lxc_on")),updates:je(o,d("updates_total")),failedTasks:je(o,d("failed_tasks_count")),entity:c})}else if(d("cpu_used")&&(d("b:status")||d("status_raw"))){let c=d("b:status")??d("status_raw"),u=o.states[c],p=c===d("b:status")?(u==null?void 0:u.state)==="on":(u==null?void 0:u.state)==="running",h=((i=(r=o.devices)==null?void 0:r[s])==null?void 0:i.model)??"",f=ci(Ao(o,s)),m=/lxc/i.test(h)||/^lxc\b/i.test(Ao(o,s))?"lxc":"vm",g=d("memory_used")?o.states[d("memory_used")]:void 0,_=d("uptime")?o.states[d("uptime")]:void 0,x=d("ip_address")?o.states[d("ip_address")]:void 0;t.push({deviceId:s,name:f.name,vmid:f.vmid,kind:m,running:p,cpu:p?je(o,d("cpu_used")):null,memory:p?je(o,d("memory_used_perc")):null,memoryUsed:p&&Io(g)?`${Number(g.state).toFixed(1)} ${g.attributes.unit_of_measurement??""}`.trim():null,disk:je(o,d("disk_used_perc")),ip:Io(x)?x.state:null,since:p&&Io(_)?_.state:null,problem:((a=o.states[d("b:health")??""])==null?void 0:a.state)==="on",entity:c})}else{let c=[...l].filter(([u])=>u==="b:health"||u.startsWith("b:health#")).map(([,u])=>u);c.length&&[...l.keys()].some(u=>u.startsWith("disk_size"))&&n.push({deviceId:s,name:Ao(o,s),health:c})}}return t.sort((s,l)=>(s.vmid??1e9)-(l.vmid??1e9)||s.name.localeCompare(l.name)),{nodes:e,instances:t,disks:n}}function oc(o){return[...o.nodes.map(e=>e.entity),...o.instances.map(e=>e.entity),...o.disks.flatMap(e=>e.health)]}var Zl=new Set;function rc(o){let e=[];for(let t of o.instances)t.running?Zl.add(t.deviceId):Zl.has(t.deviceId)&&e.push(t);return e}var ec=new Set;function ic(o,e){var n;let t=[];for(let r of e.disks)for(let i of r.health){let a=(n=o.states[i])==null?void 0:n.state;a==="off"?ec.add(i):a==="on"&&ec.has(i)&&t.push({disk:r,entity:i})}return t}function ac(o,e=Date.now()){let t=Math.max(0,(e-Date.parse(o))/1e3);if(!Number.isFinite(t))return"\u2013";let n=Math.floor(t/86400),r=Math.floor(t%86400/3600),i=Math.floor(t%3600/60);return n?`${n} d ${r} h`:r?`${r} h ${i} min`:`${i} min`}var Rp=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),sc={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function di(o,e,t){let n=[];for(let p of e.floors)for(let h of p.rooms){let f=_e(o,h.area_id).filter(m=>{var g;return m.startsWith("binary_sensor.")&&!!sc[String((g=o.states[m])==null?void 0:g.attributes.device_class)]});f.length&&n.push({floorId:p.id,roomId:h.id,sensors:f})}let r=Object.keys(o.states),i=e.settings.rain_warning===!1?null:Et(o,t??e.settings.weather_entity),a=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,s=q("household")?e.floors.flatMap(p=>p.furniture.filter(h=>(h.type==="fridge"||h.type==="fridge_smart")&&at(h).length).map(h=>{var f;return{floorId:p.id,roomId:((f=p.rooms.find(m=>m.points.length>=3&&Y([h.x,h.z],m.points)))==null?void 0:f.id)??null,furnitureId:h.id,ids:at(h)}})):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,d=l&&o.states[l]?l:null,c=oc(Ln(o)),u=c.length?{ids:c,...Fp(e)}:null;return{rooms:n,alarms:r.filter(p=>p.startsWith("alarm_control_panel.")),weather:i,outage:a,rain:d,fridges:s,proxmox:u}}function Fp(o){for(let e of o.floors){let t=e.furniture.find(r=>r.type.endsWith(":server_rack")),n=t?e.rooms.find(r=>r.points.length>=3&&Y([t.x,t.z],r.points)):void 0;if(t)return{roomId:(n==null?void 0:n.id)??null,floorId:e.id}}return{roomId:null,floorId:null}}function ui(o){var e;return[...o.rooms.flatMap(t=>t.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(t=>t.ids),...((e=o.proxmox)==null?void 0:e.ids)??[]]}function lc(o,e,t,n){var s,l,d;let r=[];for(let c of t.rooms)for(let u of c.sensors){let p=o.states[u];(p==null?void 0:p.state)==="on"&&r.push({kind:sc[String(p.attributes.device_class)],entity:u,roomId:c.roomId,floorId:c.floorId})}let i=t.rain?Jr(o,t.rain):null;if(i!==null?i>0:!!t.weather&&Rp.has(((s=o.states[t.weather])==null?void 0:s.state)??""))for(let c of e.floors)for(let u of c.openings){if(u.type!=="window"||u.rain_ignore)continue;let p=n.get(u.id);if(!p)continue;let h=We(o,p,"window");h.open<.5&&h.tilt<.5&&h.open2<.5&&h.tilt2<.5||r.push({kind:"window_rain",entity:p.contact??p.tilt??p.contact2??u.id,roomId:u.room_id,floorId:c.id})}t.outage&&Mo(o.states[t.outage])&&r.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null});for(let c of t.fridges??[]){let u=(l=e.floors.find(h=>h.id===c.floorId))==null?void 0:l.furniture.find(h=>h.id===c.furnitureId),p=u?Po(u,o):null;p&&r.push({kind:"fridge_door",entity:p,roomId:c.roomId,floorId:c.floorId})}if(t.proxmox){let{roomId:c,floorId:u}=t.proxmox,p=Ln(o);for(let h of p.nodes)h.online||r.push({kind:"pve_node_down",entity:h.entity,roomId:c,floorId:u});for(let h of ic(o,p))r.push({kind:"pve_disk",entity:h.entity,roomId:c,floorId:u});for(let h of rc(p))r.push({kind:"pve_stopped",entity:h.entity,roomId:c,floorId:u})}for(let c of t.alarms){let u=(d=o.states[c])==null?void 0:d.state;u==="triggered"?r.push({kind:"alarm",entity:c,roomId:null,floorId:null}):u==="pending"&&r.push({kind:"alarm_pending",entity:c,roomId:null,floorId:null})}return r}function cc(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"pve_stopped":return[1,.62,.2];default:return[1,.2,.25]}}function pi(o,e,t){let n=t.roomId?e.floors.flatMap(a=>a.rooms).find(a=>a.id===t.roomId):null;if(t.text!==void 0)return n?`${n.name} \xB7 ${t.text}`:t.text;let r=t.kind.startsWith("pve_")&&o?Hp(o,t):o?J(o,t.entity):t.entity,i=I(o,`alert_${t.kind}`,{name:r});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${I(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${i}`:i}function Hp(o,e){var i,a,s;let t=(a=(i=o.entities)==null?void 0:i[e.entity])==null?void 0:a.device_id,n=t?(s=o.devices)==null?void 0:s[t]:void 0,r=(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||J(o,e.entity);if(e.kind==="pve_node_down")return r.replace(/^node\s+/i,"");if(e.kind==="pve_stopped"){let l=ci(r);return l.vmid===null?l.name:`${l.name} (${l.vmid})`}return r}var He=.03,To=o=>o&&o!=="none"?o:null;function ln(o,e=t=>To(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let i=e(r);if(r.type==="meter")t.grid??=i,t.gridExport??=To(r.export);else if(r.type==="inverter"&&i&&!t.solar.includes(i))t.solar.push(i);else if(r.type==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let a=To(r.charge);a&&!t.charge.includes(a)&&t.charge.push(a),(i||a)&&t.batteries.push({power:i,charge:a});let s=To(r.soc);s&&!t.soc.includes(s)&&t.soc.push(s)}}return t}function fi(o){for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}async function gc(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),r=new Map;for(let i of e)r.set(i,((n==null?void 0:n[i])??[]).reduce((a,s)=>a+(typeof s.change=="number"?s.change:0),0));return r}catch{return null}}var Lp=.07;function pe(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function Op(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function jn(o,e){var i,a;if(Op(o,e))return e;let t=(a=(i=o.entities)==null?void 0:i[e])==null?void 0:a.device_id;if(!t)return null;let n=Fs(o,t),r=n?An(o,e):null;return Sr(o,t).find(s=>s!==e&&(!n||r!==null&&An(o,s)===r))??null}function bc(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),r=[],i=new Set;for(let a of e.floors)for(let s of a.placements){let l=jn(o,s.entity_id);!l||n.has(l)||i.has(l)||(i.add(l),r.push({id:s.entity_id,powerEntity:l,floorId:a.id,x:s.x,z:s.z,power:Math.max(0,pe(o.states[l])??0)}))}return r}function _c(o,e,t,n=ln(e)){let r=e.energy,i=r.grid??n.grid,a=i?pe(o.states[i],r.grid_invert):null;if(!r.grid&&n.gridExport){let m=Math.max(0,pe(o.states[n.gridExport])??0);a=Math.max(0,a??0)-m}let s=r.solar?pe(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let m=n.solar.map(g=>pe(o.states[g])).filter(g=>g!==null);s=m.length?m.reduce((g,_)=>g+_,0):null}let l=r.battery?pe(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let m=n.batteries.map(g=>{if(g.charge){let _=g.power?Math.max(0,pe(o.states[g.power])??0):0,x=Math.max(0,pe(o.states[g.charge])??0);return _-x}return g.power?pe(o.states[g.power],r.battery_invert):null}).filter(g=>g!==null);l=m.length?m.reduce((g,_)=>g+_,0):null}let c=(r.battery_soc?[r.battery_soc]:n.soc).map(m=>{var g;return Number((g=o.states[m])==null?void 0:g.state)}).filter(m=>Number.isFinite(m)),u=c.length?c.reduce((m,g)=>m+g,0)/c.length:NaN,p=r.tariff?o.states[r.tariff]:void 0,h=Number(p==null?void 0:p.state),f=r.consumption?pe(o.states[r.consumption]):null;return f!==null?f=Math.max(0,f):a!==null||s!==null||l!==null?f=Math.max(0,(a??0)+Math.max(0,s??0)+(l??0)):t.length&&(f=t.reduce((m,g)=>m+g.power,0)),{grid:a,solar:s===null?null:Math.max(0,s),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function It(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function At(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Dp(o,e){let t=o.length,n=o.map((r,i)=>{let a=o[(i+1)%t],s=a[0]-r[0],l=a[1]-r[1],d=Math.hypot(s,l)||1,c=-l/d,u=s/d;return{p:[r[0]+c*e[i],r[1]+u*e[i]],d:[s/d,l/d],n:[c,u]}});return o.map((r,i)=>{let a=n[(i-1+t)%t],s=n[i],l=a.d[0]*s.d[1]-a.d[1]*s.d[0];if(Math.abs(l)<1e-6)return[r[0]+s.n[0]*e[i],r[1]+s.n[1]*e[i]];let d=((s.p[0]-a.p[0])*s.d[1]-(s.p[1]-a.p[1])*s.d[0])/l;return[a.p[0]+a.d[0]*d,a.p[1]+a.d[1]*d]})}function jp(o){return Oe(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function mi(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:r}=en(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let i of o.rooms){if(i.points.length<3)continue;let{pts:a,flipped:s}=jp(i),l=a.length,d=a.map((p,h)=>{let f=s?(l-2-h+l)%l:h,m=r.some(g=>!g.exterior&&g.sources.some(_=>_.room_id===i.id&&_.edge===f));return Lp+(m?t/2:0)}),c=Dp(a,d).map(p=>It(n,p)),u=c.map((p,h)=>[p,c[(h+1)%l]]);for(let[p,h]of u)At(n,p,h);n.rings.set(i.id,u)}for(let i of r){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let a=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],s=zo(n,i.roomLeft,a),l=zo(n,i.roomRight,a);s!==null&&l!==null&&At(n,s,l)}return n}function zo(o,e,t){let n=o.rings.get(e);if(!n)return null;let r=null;for(let a of n){let s=o.pos[a[0]],l=o.pos[a[1]],d=l[0]-s[0],c=l[1]-s[1],u=d*d+c*c||1,p=Math.min(1,Math.max(0,((t[0]-s[0])*d+(t[1]-s[1])*c)/u)),h=[s[0]+d*p,s[1]+c*p],f=Math.hypot(t[0]-h[0],t[1]-h[1]);(!r||f<r.d)&&(r={seg:a,q:h,d:f})}if(!r)return null;let i=It(o,r.q);return At(o,i,r.seg[0]),At(o,i,r.seg[1]),i}function Co(o,e,t){let n=o.pos[t],r=zo(o,e.id,n);if(r===null)return!1;let i=o.pos[r],a=o.pos[o.adj[r][0].to],s=o.pos[o.adj[r][1].to],l=Math.hypot(s[0]-a[0],s[1]-a[1])||1,d=[(s[0]-a[0])/l,(s[1]-a[1])/l],c=(n[0]-i[0])*d[0]+(n[1]-i[1])*d[1],u=(n[1]-i[1])*d[0]-(n[0]-i[0])*d[1];if(Math.abs(c)<.01||Math.abs(u)<.01)return At(o,t,r),!0;let p=[i[0]+d[0]*c,i[1]+d[1]*c],h=[i[0]-d[1]*u,i[1]+d[0]*u],f=It(o,Y(h,e.points)||!Y(p,e.points)?h:p);return At(o,r,f),At(o,f,t),!0}function Dn(o,e){let t=o.rooms.filter(i=>i.points.length>=3),n=t.find(i=>Y(e,i.points));if(n)return n;let r=null;for(let i of t)for(let a of i.points){let s=Math.hypot(e[0]-a[0],e[1]-a[1]);(!r||s<r.d)&&(r={room:i,d:s})}return(r==null?void 0:r.room)??null}function vc(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),r=o.pos.map(()=>!1);for(t[e]=0;;){let i=-1;for(let a=0;a<t.length;a++)!r[a]&&t[a]<1/0&&(i<0||t[a]<t[i])&&(i=a);if(i<0)break;r[i]=!0;for(let{to:a,w:s}of o.adj[i])t[i]+s<t[a]-1e-9&&(t[a]=t[i]+s,n[a]=i)}return{dist:t,prev:n}}function dc(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var uc=new WeakMap;function Vp(o,e){let t=fi(o),n=o.floors.find(c=>c.id===t.floor_id),r=[],{wall_exterior:i,wall_interior:a}=o.settings,s=new Map,l=new Map;e.forEach((c,u)=>l.set(c.floorId,[...l.get(c.floorId)??[],u]));let d=o.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let u=c.elevation>n.elevation,p=l.get(c.id),h=dc(p,e);r.push({floorId:n.id,a:[t.x,He,t.z],b:[t.x,u?n.height:-.2,t.z],dist:0,members:p,kind:h});let f=Math.abs(c.elevation-n.elevation);r.push({floorId:c.id,a:[t.x,u?-.2:c.height,t.z],b:[t.x,He,t.z],dist:f,members:p,kind:h}),s.set(c.id,f+.25)}for(let c of d){let u=mi(c,i,a),p=Dn(c,[t.x,t.z]);if(!p)continue;let h=It(u,[t.x,t.z]);if(!Co(u,p,h))continue;let f=[];for(let y of l.get(c.id)){let S=e[y],z=Dn(c,[S.x,S.z]);if(!z)continue;let A=It(u,[S.x,S.z]);Co(u,z,A)&&f.push({node:A,member:y})}let{dist:m,prev:g}=vc(u,h),_=new Map;for(let y of f)if(Number.isFinite(m[y.node]))for(let S=y.node;g[S]>=0;S=g[S]){let z=g[S],A=`${z}>${S}`,v=_.get(A)??{a:z,b:S,members:[]};v.members.push(y.member),_.set(A,v)}let x=s.get(c.id)??0;for(let{a:y,b:S,members:z}of _.values()){let A=u.pos[y],v=u.pos[S],O=dc(z,e);r.push({floorId:c.id,a:[A[0],He,A[1]],b:[v[0],He,v[1]],dist:x+m[y],members:z,kind:O})}}return r}function yc({building:o,consumers:e,summary:t,battery:n,fieldPower:r,devicePower:i}){var P;let a=fi(o);if(!a)return[];let s=o.floors.find(M=>M.id===a.floor_id);if(!s)return[];let l=M=>i==null?void 0:i.get(M),d=hi(o,"inverter"),c=hi(o,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=M=>{let $=null;for(let E of d)E.floorId===M.floorId&&(!$||Math.hypot(E.x-M.x,E.z-M.z)<Math.hypot($.x-M.x,$.z-M.z))&&($=E);return $},p=M=>l(M.id)??(c.length===1?t.battery??0:0),h=new Map;for(let M of c){let $=u(M);$&&h.set(M.id,$)}let f=e.map(M=>({floorId:M.floorId,x:M.x,z:M.z,kind:M.wallbox?"wallbox":"consumer",power:M.power}));for(let M of c)!h.has(M.id)&&t.battery!==null&&f.push({floorId:M.floorId,x:M.x,z:M.z,kind:"battery",power:Math.abs(p(M))});let m=`${a.floor_id}:${a.x},${a.z}|${f.map(M=>`${M.floorId}:${M.x},${M.z}:${M.kind}`).join(";")}`,g=uc.get(o);g||uc.set(o,g=new Map);let _=g.get(m);_||(_=Vp(o,f),g.clear(),g.set(m,_));let x=_.map(M=>({floorId:M.floorId,a:M.a,b:M.b,dist:M.dist,power:M.members.reduce(($,E)=>$+f[E].power,0),kind:M.kind})),y=t.grid!==null?gi(o):null,S=o.settings.roof.cables??[],z=M=>S.find($=>$.id===M),A=(M,$)=>M.map(E=>({...E,key:$}));if(y){let M=t.grid>=0,$=z("grid"),E=$?On(o,$,[y.end[0],s.elevation+Math.max(He,y.height),y.end[1]],[a.x,s.elevation+.4+1.1,a.z]):[...y.height>.05?[[y.end[0],y.height,y.end[1]]]:[],[y.end[0],He,y.end[1]],[y.wall[0],He,y.wall[1]],[a.x,He,a.z]],C=$?sn(o,M?E:[...E].reverse(),Math.abs(t.grid),M?"grid":"export",s):xc(s.id,M?E:[...E].reverse(),Math.abs(t.grid),M?"grid":"export",0);x.push(...A(C,"grid"))}if(t.battery!==null&&t.battery>0)for(let M of x)M.kind==="battery"&&([M.a,M.b]=[M.b,M.a]);let v=o.settings.roof.solar??[],O=o.settings.roof.strings??[],G=new Map;if(r&&v.length){let M=[...on(o),...Hn(o)];for(let $ of v){let E=r.get($.id)??0,C=$.string?(P=O.find(F=>F.id===$.string))==null?void 0:P.inverter:null,j=C?c.find(F=>F.id===C)??null:null,N=C&&!j?d.find(F=>F.id===C)??null:null;if(j){let F=h.get(j.id);F&&G.set(F.id,(G.get(F.id)??0)+E);let B=j.variant==="wall"?.5+j.h:.9,oe=z(`solar:${$.id}`),Ae=oe?fc(o,$):null,me=o.floors.find(Ct=>Ct.id===j.floorId);oe&&Ae&&me?x.push(...A(sn(o,On(o,oe,Ae,[j.x,me.elevation+B,j.z]),E,"solar",me),`solar:${$.id}`)):x.push(...A(mc(o,$,E,j,B),`solar:${$.id}`));continue}if(!N&&d.length){let F=Mt(o,$,M),B=F?Pl(F,$):[$.u,$.v];N=d.reduce((oe,Ae)=>!oe||Math.hypot(Ae.x-B[0],Ae.z-B[1])<Math.hypot(oe.x-B[0],oe.z-B[1])?Ae:oe,null)}N&&G.set(N.id,(G.get(N.id)??0)+E);let X=N??{floorId:a.floor_id,x:a.x,z:a.z},H=N?1.1+N.h:1.5,K=z(`solar:${$.id}`),W=K?fc(o,$):null,se=o.floors.find(F=>F.id===X.floorId);K&&W&&se?x.push(...A(sn(o,On(o,K,W,[X.x,se.elevation+H,X.z]),E,"solar",se),`solar:${$.id}`)):x.push(...A(mc(o,$,E,X,H),`solar:${$.id}`))}}else t.solar!==null&&!d.length&&x.push({floorId:s.id,a:[a.x+.08,s.height+.6,a.z+.08],b:[a.x+.08,He,a.z+.08],dist:0,power:t.solar,kind:"solar"});for(let M of d){let $=1.1+M.h,E=c.filter(N=>h.get(N.id)===M),C=l(M.id);if(C===void 0){C=G.get(M.id)??(d.length===1?t.solar??0:0);for(let N of E)C+=p(N)}let j=o.floors.find(N=>N.id===M.floorId);if(t.solar!==null||t.battery!==null){let N=z(`inv:${M.id}`),X=N&&j?sn(o,On(o,N,[M.x,j.elevation+$,M.z],[a.x,s.elevation+1.5,a.z]),Math.max(0,C),"inverter",j):hc(o,M,$,{floorId:a.floor_id,x:a.x,z:a.z},1.5,Math.max(0,C),"inverter",0);x.push(...A(X,`inv:${M.id}`))}for(let N of E){let X=p(N);if(t.battery===null&&l(N.id)===void 0)continue;let H=N.variant==="wall"?.5+N.h:.9,K=z(`bat:${N.id}`),W=K&&j?sn(o,On(o,K,[M.x,j.elevation+$-.1,M.z],[N.x,j.elevation+H,N.z]),Math.abs(X),"battery",j):hc(o,M,$-.1,N,H,Math.abs(X),"battery",0);x.push(...A(X<=0?W:W.map(se=>({...se,a:se.b,b:se.a})).reverse(),`bat:${N.id}`))}}return x}function gi(o){var h;let e=fi(o),t=e?o.floors.find(f=>f.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:r}=o.settings,{walls:i}=en(t.rooms,{exterior:n,interior:r},t.walls??[]),a=hi(o,"grid_point")[0],s=i.filter(f=>f.exterior);if(a){let f=null;for(let _ of s){let x=_.b[0]-_.a[0],y=_.b[1]-_.a[1],S=a.x-e.x,z=a.z-e.z,A=S*y-z*x;if(Math.abs(A)<1e-9)continue;let v=((_.a[0]-e.x)*y-(_.a[1]-e.z)*x)/A,O=((_.a[0]-e.x)*z-(_.a[1]-e.z)*S)/A;if(v<=0||v>1||O<0||O>1||f&&v>=f.t)continue;let G=Math.hypot(x,y)||1;f={q:[e.x+S*v,e.z+z*v],out:[y/G,-x/G],t:v}}let m=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[e.x,e.z],g=((h=o.floors.flatMap(_=>_.furniture).find(_=>_.id===a.id))==null?void 0:h.mount_y)??0;return{floorId:t.id,wall:m,end:[a.x,a.z],height:Math.max(0,g)}}let l=null;for(let f of s){let m=f.b[0]-f.a[0],g=f.b[1]-f.a[1],_=m*m+g*g||1,x=Math.min(1,Math.max(0,((e.x-f.a[0])*m+(e.z-f.a[1])*g)/_)),y=[f.a[0]+m*x,f.a[1]+g*x],S=Math.hypot(e.x-y[0],e.z-y[1]),z=Math.sqrt(_);(!l||S<l.d)&&(l={q:y,out:[g/z,-m/z],d:S})}if(!l)return null;let{q:d,out:c}=l,u=0;for(let f of o.floors)for(let m of f.outdoor??[]){let g=m.points.length;for(let _=0;_<g;_++){let x=m.points[_],y=m.points[(_+1)%g],S=y[0]-x[0],z=y[1]-x[1],A=c[0]*z-c[1]*S;if(Math.abs(A)<1e-9)continue;let v=((x[0]-d[0])*z-(x[1]-d[1])*S)/A,O=((x[0]-d[0])*c[1]-(x[1]-d[1])*c[0])/A;v>0&&O>=0&&O<=1&&(u=Math.max(u,Math.min(15,v)))}}let p=u>n+1?u:n+2.5;return{floorId:t.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*p,d[1]+c[1]*p],height:0}}function hi(o,e){let t=[];for(let n of o.floors)for(let r of n.furniture)r.type===e&&t.push({id:r.id,type:r.type,floorId:n.id,x:r.x,z:r.z,h:r.h,variant:r.variant??null});return t}var pc=new WeakMap;function wc(o,e,t,n){let r=`${e.id}:${t.join(",")}>${n.join(",")}`,i=pc.get(o);i||pc.set(o,i=new Map);let a=i.get(r);if(a)return a;let{wall_exterior:s,wall_interior:l}=o.settings,d=mi(e,s,l),c=[t,n],u=Dn(e,t),p=Dn(e,n);if(u&&p){let h=It(d,t),f=It(d,n);if(Co(d,u,h)&&Co(d,p,f)){let{dist:m,prev:g}=vc(d,h);if(Number.isFinite(m[f])){c.length=0;for(let _=f;_>=0;_=g[_])c.unshift(d.pos[_])}}}return i.set(r,c),c}function hc(o,e,t,n,r,i,a,s){let l=o.floors.find(u=>u.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let d=wc(o,l,[e.x,e.z],[n.x,n.z]),c=[[e.x,t,e.z],...d.map(u=>[u[0],He,u[1]]),[n.x,r,n.z]];return xc(l.id,c,i,a,s)}function xc(o,e,t,n,r){let i=[];for(let a=0;a+1<e.length;a++){let s=e[a],l=e[a+1],d=Math.hypot(l[0]-s[0],l[1]-s[1],l[2]-s[2]);d<1e-4||(i.push({floorId:o,a:s,b:l,dist:r,power:t,kind:n}),r+=d)}return i}function On(o,e,t,n){let r=o.floors.find(a=>a.id===e.floor_id),i=((r==null?void 0:r.elevation)??0)+Math.max(He,e.height);return[t,...e.points.map(a=>[a[0],i,a[1]]),n]}function fc(o,e){let t=Mt(o,e,[...on(o),...Hn(o)]);if(!t)return null;let[n,r]=St(t,e),i=e.u+n/2,a=t.unbounded?e.v+r/2:e.v;return[t.o[0]+t.eu[0]*i+t.es[0]*a,t.o[1]+t.eu[1]*i+t.es[1]*a,t.o[2]+t.eu[2]*i+t.es[2]*a]}function Np(o,e,t){let{wall_exterior:n,wall_interior:r}=o.settings,i=mi(e,n,r),a=Dn(e,t),s=a?zo(i,a.id,t):null;return s===null?t:i.pos[s]}function sn(o,e,t,n,r){let i=[...o.floors].sort((d,c)=>d.elevation-c.elevation),a=d=>{let c=r;for(let u of i)d>=u.elevation-.01&&(c=u);return c},s=[],l=0;for(let d=0;d+1<e.length;d++){let c=e[d],u=e[d+1];if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-c[1])>.01){let f=Math.min(c[1],u[1]),m=Math.max(c[1],u[1]);for(let g of i)g.elevation>f+.01&&g.elevation<m-.01&&h.push(g.elevation);u[1]<c[1]&&h.reverse()}for(let f of[...h,u[1]]){let m=(f-c[1])/(u[1]-c[1]||1),g=Math.abs(u[1]-c[1])>.01?[c[0]+(u[0]-c[0])*m,f,c[2]+(u[2]-c[2])*m]:u,_=a((c[1]+g[1])/2),x=Math.hypot(g[0]-c[0],g[1]-c[1],g[2]-c[2]);x>1e-4&&s.push({floorId:_.id,a:[c[0],c[1]-_.elevation,c[2]],b:[g[0],g[1]-_.elevation,g[2]],dist:l,power:t,kind:n}),l+=x,c=g}}return s}function mc(o,e,t,n,r){let i=[...on(o),...Hn(o)],a=Mt(o,e,i),s=o.floors.find(g=>g.id===n.floorId);if(!a||!s)return[];let[l,d]=St(a,e),c=(g,_)=>[a.o[0]+a.eu[0]*g+a.es[0]*_,a.o[1]+a.eu[1]*g+a.es[1]*_,a.o[2]+a.eu[2]*g+a.es[2]*_],u=e.u+l/2,p=s.elevation+He,h=[],f;if(a.unbounded){let g=c(u,e.v+d/2);f=[g[0],p,g[2]],h.push(f)}else if(a.wall){let g=c(u,e.v);f=[g[0],p,g[2]],h.push(g,f)}else{let g=c(u,e.v),_=Ur(o)??s,x=Math.max(s.elevation+.5,Math.min(g[1]-.25,_.elevation+_.height-.12));f=[g[0],x,g[2]],h.push(g)}let m=Np(o,s,[f[0],f[2]]);h.push([m[0],f[1],m[1]]),Math.abs(f[1]-p)>.05&&h.push([m[0],p,m[1]]);for(let g of wc(o,s,m,[n.x,n.z]).slice(1))h.push([g[0],p,g[1]]);return h.push([n.x,s.elevation+r,n.z]),sn(o,h,t,"solar",s)}function kc(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),r=new Array(n).fill(0),i=-1;for(let s of Object.values(o))for(let l of s){let d=typeof l.start=="number"?l.start:Date.parse(l.start),c=Math.floor((d-t.getTime())/3e5);c<0||c>=n||typeof l.mean!="number"||(r[c]+=Math.max(0,l.mean),i=Math.max(i,c))}return r.length=Math.max(i+1,n-3,1),{kwh:r.reduce((s,l)=>s+l*5/60/1e3,0),peak:Math.max(0,...r),curve:r}}async function $c(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function bi(o,e){let n=l=>42-(e>0?l/e*36:0),r=o.map((l,d)=>[d/288*220,n(l)]),i=r.map(([l,d],c)=>`${c?"L":"M"}${l.toFixed(1)} ${d.toFixed(1)}`).join(" "),[a,s]=r[r.length-1];return{line:i,area:`${i} L${a.toFixed(1)} 44 L0 44 Z`,endX:a,endY:s}}function Mc(o){var e;return Math.max(1,o.rows*o.cols-(((e=o.skip)==null?void 0:e.length)??0))}var qp=400;function Sc(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let r=Math.min(1,(e.get(n.id)??0)/(Mc(n)*(n.wp??qp)));t.set(n.id,r>.003?Math.pow(r,.6):0)}return t}function Ec(o,e,t){let n=new Map,r=e.settings.roof.solar??[],i=e.settings.roof.strings??[],a=Mc,s=[],l=0,d=new Map;for(let p of r){let h=p.entity&&p.entity!=="none"?pe(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let f=p.string?i.find(g=>g.id===p.string):void 0,m=f!=null&&f.entity&&f.entity!=="none"?pe(o.states[f.entity]):null;if(f&&m!==null){d.set(f.id,[...d.get(f.id)??[],p]);continue}s.push(p)}for(let[p,h]of d){let f=i.find(_=>_.id===p),m=Math.max(0,pe(o.states[f.entity])??0),g=h.reduce((_,x)=>_+a(x),0);for(let _ of h)n.set(_.id,m*a(_)/g);l+=m}let c=Math.max(0,(t??0)-l),u=s.reduce((p,h)=>p+a(h),0);for(let p of s)n.set(p.id,u?c*a(p)/u:0);return n}var Ve={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function Pc(o,e){if(o==="grid")return Ve.import;if(o==="export")return Ve.export;if(o==="solar")return Ve.solar;if(o==="battery")return Ve.battery;if(o==="wallbox")return Ve.wallbox;if(o==="inverter")return(e.solar??0)>5?Ve.solar:Ve.battery;let t=[[Math.max(0,e.grid??0),Ve.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),Ve.solar],[Math.max(0,e.battery??0),Ve.battery]],[n]=t.reduce((r,i)=>i[0]>r[0]?i:r);return n>0?t.find(r=>r[0]===n)[1]:Ve.house}var _i=["neon","blueprint","day"],Vn={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var Ro={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function Ac(o,e){let t=Ro[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[r,i]=t[n],[a,s]=t[n-1];if(e<=r){let l=(e-a)/(r-a);return[s[0]+(i[0]-s[0])*l,s[1]+(i[1]-s[1])*l,s[2]+(i[2]-s[2])*l]}}return t[t.length-1][1]}function Ic(o,e,t){let n=new Map;for(let r of e.floors)for(let i of r.rooms){let a=Ze(o,r,i,t);a!==null&&n.set(i.id,a)}return n}function Tc(o){let e=Ro[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([r,i])=>`rgb(${i.map(a=>Math.round(a*255)).join(",")}) ${Math.round((r-t)/(n-t)*100)}%`).join(", ")})`}function $e(o,e){if(!Xe(e))return I(o,`furn_${e}`);let t=xe(e);return t?Qa(t):I(o,"pack_missing_item")}var Ho=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Fo(o){return o&&o!=="none"?o:null}function cn(o,e){var i,a;if(e.type!=="parking")return null;let t=Fo(e.entity);if(t){let s=o.states[t];if(!s||!Ho.has(s.state.toLowerCase()))return null}let n=e.vehicle??null,r=Fo(e.type_entity);if(r&&((i=e.types)!=null&&i.length)){let s=(((a=o.states[r])==null?void 0:a.state)??"").trim().toLowerCase();if(s){let l=c=>c.trim().toLowerCase(),d=e.types.find(c=>l(c.state)===s)??e.types.find(c=>l(c.state)&&s.includes(l(c.state)));d&&(n=d.vehicle)}}return n&&xe(n)?n:null}function vi(o,e){let t=new Map;for(let n of e.floors)for(let r of n.furniture){let i=cn(o,r);i&&t.set(r.id,i)}return t}function zc(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[Fo(t.entity),Fo(t.type_entity)])).filter(e=>!!e)}function Cc(o,e){let t=xe(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var Nn=1800*1e3,Wp=new Set(["motion","occupancy","presence"]);function Rc(o,e){var t;return e.startsWith("binary_sensor.")&&Wp.has(String((t=o.states[e])==null?void 0:t.attributes.device_class))}function qn(o,e){let t=[],n=new Set,r=(i,a,s,l)=>{n.has(i)||(n.add(i),t.push({entity:i,floorId:a,x:s,z:l}))};for(let i of e.floors)for(let a of i.placements)if(Rc(o,a.entity_id))r(a.entity_id,i.id,a.x,a.z);else if(V(a.entity_id)==="camera")for(let s of Ye(o,a.entity_id))r(s,i.id,a.x,a.z);for(let i of e.floors)for(let a of i.rooms){if(!a.area_id||a.points.length<3)continue;let[s,l]=Ce(a.points);for(let d of _e(o,a.area_id))Rc(o,d)&&r(d,i.id,s,l)}return t}function Fc(o,e,t,n=Nn){let r=t-n,i=[];for(let[a,s]of Object.entries(o)){let l="";for(let d of s){let c=(d.lc??d.lu)*1e3;d.s==="on"&&l!=="on"&&c>=r&&c<=t&&i.push({entity:a,time:c}),l=d.s}}for(let a of e){let s=a.lastChanged??NaN;a.state!=="on"||!(s>=r&&s<=t)||i.some(l=>l.entity===a.entity&&Math.abs(l.time-s)<2e3)||i.push({entity:a.entity,time:s})}return i.sort((a,s)=>a.time-s.time)}function Hc(o,e,t,n=Nn){let r=new Map(o.map(a=>[a.entity,a])),i=[];for(let a of e){let s=r.get(a.entity);if(!s)continue;let l=i[i.length-1];l&&l.entity===a.entity&&a.time-l.time<6e4||i.push({...s,time:a.time,age:Math.min(1,Math.max(0,(t-a.time)/n))})}return i.slice(-40)}function Lo(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit"})}var Lc='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Oo=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Do(o,e){let t=[],n=wt(o,e.floors),r=e.floors.length>1;for(let i of e.floors){let a=(c,u)=>i.rooms.find(p=>p.points.length>=3&&Y([c,u],p.points))??null,s=(c,u)=>{var p;return[(p=a(c,u))==null?void 0:p.name,r?i.name:null].filter(Boolean).join(" \xB7 ")};for(let c of i.rooms){if(c.points.length<3)continue;let[u,p]=Ce(c.points);t.push({kind:"room",name:c.name,where:r?i.name:"",floorId:i.id,roomId:c.id,entity:null,icon:null,x:u,z:p,y:0})}let l=new Set,d=(c,u,p,h)=>{var f;l.has(c)||!o.states[c]||(l.add(c),t.push({kind:"device",name:J(o,c),where:s(u,p),floorId:i.id,roomId:((f=a(u,p))==null?void 0:f.id)??null,entity:c,icon:V(c),x:u,z:p,y:h}))};for(let c of i.placements)d(c.entity_id,c.x,c.z,c.y??Kt(V(c.entity_id)??"sensor",i.height,c.mount));for(let c of i.furniture){let u=n.get(c.id),p=(u==null?void 0:u.entity)??(u==null?void 0:u.power);p&&d(p,c.x,c.z,Math.min(i.height-.3,Math.max(.5,c.h)))}}return t}function Oc(o,e,t=8){let n=Oo(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let r=o.filter(s=>{let l=Oo(`${s.name} ${s.where} ${s.entity??""}`);return n.every(d=>l.includes(d))}),i=Oo(e.trim()),a=s=>(Oo(s.name).startsWith(i)?0:2)+(s.kind==="room"?0:1);return r.sort((s,l)=>a(s)-a(l)||s.name.localeCompare(l.name)).slice(0,t)}var Tt=new Map,yi=new Map,Dc=new Map;async function Bp(o,e){return o.callWS({type:"neonplan3d/modules/code",pack_id:e})}async function Up(o,e){let t=await Bp(o,e.id);if(t.api!==1)return null;let n=URL.createObjectURL(new Blob([t.code],{type:"text/javascript"}));try{let i=(await import(n)).default;if(!i||i.api!==1||typeof i.id!="string")return null;let a=Dc.get(e.id);a&&URL.revokeObjectURL(a),Dc.set(e.id,n);let s={id:e.id,release:t.release,module:i};return Tt.set(e.id,s),s}catch(r){throw URL.revokeObjectURL(n),r}}async function wi(o,e){let t=new Map(e.filter(n=>n.module&&n.module.api===1&&n.module.approved===!0).map(n=>[n.id,n]));for(let n of[...Tt.keys()])t.has(n)||Tt.delete(n);await Promise.all([...t.values()].map(n=>{let r=Tt.get(n.id);if(r&&r.release===(n.release??1))return Promise.resolve(r);let i=yi.get(n.id);return i||(i=Up(o,n).catch(a=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,a),null)).finally(()=>yi.delete(n.id)),yi.set(n.id,i)),i}))}async function jc(o,e){for(let t of Tt.values())if(t.module.voice)try{let n=await t.module.voice(o,e);if(n)return n}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed on "${o}"`,n)}return null}function Vc(o){return Bn(e=>{var t;return(t=e.scene)==null?void 0:t.call(e,o)})}function Nc(o){return Bn(e=>{var t;return(t=e.cards)==null?void 0:t.call(e,o)})}function qc(o){return Bn(e=>{var t;return(t=e.alerts)==null?void 0:t.call(e,o)})}function Wc(o){return Bn(e=>{var t;return(t=e.watched)==null?void 0:t.call(e,o)})}function Bc(o){return Bn(e=>{var t;return(t=e.pools)==null?void 0:t.call(e,o)})}function Wn(){return Tt.size>0}function Bn(o){let e=[];for(let t of Tt.values())try{e.push(...o(t.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed`,n)}return e}function Kc(o,e,t){let n=o.filter(l=>Number.isFinite(l));if(n.length<2)return"";let r=Math.min(...n),a=Math.max(...n)-r||1,s=l=>Math.round(l*10)/10;return n.map((l,d)=>`${s(d/(n.length-1)*e)},${s(t-1-(l-r)/a*(t-2))}`).join(" ")}function Uc(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let t=Math.min(1,Math.max(0,e))*(o.length-1),n=Math.min(o.length-2,Math.floor(t)),r=t-n,[i,a]=[o[n],o[n+1]];return[i[0]+(a[0]-i[0])*r,i[1]+(a[1]-i[1])*r,i[2]+(a[2]-i[2])*r]}function Gc(o){let e=[];for(let t of o){let n=t.points;if(n.length<2)continue;let r=[],i=0;for(let l=1;l<n.length;l++){let d=Math.hypot(n[l][0]-n[l-1][0],n[l][1]-n[l-1][1],n[l][2]-n[l-1][2]);r.push(d),i+=d}if(i<.01)continue;let a=t.colors.length===n.length,s=0;for(let l=1;l<n.length;l++){let d=r[l-1];if(d<.005)continue;let c=a?Uc([t.colors[l-1],t.colors[l]],.5):Uc(t.colors,(s+d/2)/i);e.push({floorId:t.floorId,a:[...n[l-1]],b:[...n[l]],dist:s,power:Math.max(0,t.flow),color:c,...t.width?{width:Math.min(3,Math.max(.5,t.width))}:{},...t.look==="pipe"?{pipe:!0}:{},...t.views==="house"?{house:!0}:t.views==="floor"?{floor:!0}:{}}),s+=d}}return e}function Yc(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function jo(o,e){return(o??[]).filter(t=>!e||!t.minor)}var Kp=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],Gp=[2200,2700,3200,4e3,5e3,6500],Yp=["hs","rgb","rgbw","rgbww","xy"],Qp=4,Qc=16,Jc=32,Jp=128;function ki(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>Yp.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function $i(o){return((o.attributes.supported_features??0)&Qp)!==0&&typeof o.attributes.current_position=="number"}var xi=class extends Pe{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{V(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return b`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?b`<img src=${n} alt=${J(this.hass,this.entity)} />`:b`<span class="qm-note">${ke(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return I(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:J(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){ve(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,r)=>{let i=r/t*Math.PI*2-Math.PI/2;return b`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${n}</div>`})}renderLight(e){let t=ki(e),n=e.state==="on",r=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,i=t.color?Kp.map(a=>b`<button class="qm-swatch" style="background:rgb(${a.join(",")})" aria-label=${`RGB ${a.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:a})}></button>`):t.temp?Gp.map(a=>b`<button class="qm-swatch" style="background:${Xp(a)}" aria-label=${`${a} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:a})}></button>`):[];return b`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
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
          />`:w}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",r=$i(e),i=(d,c,u,p=!1)=>b`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${c} @click=${u}>${d}</button>`,a=d=>t!==null&&Math.abs(t-d)<3,s=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),a(100)),...r?[75,50].map(d=>i(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),a(d))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),a(0)),...r?[25].map(d=>i(`${d}`,`${d} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:d}),a(d))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return b`<div class="qm-ring">
        ${this.ring(s)}
        <button
          class="qm-power qm-blind ${l<100?"qm-on":""}"
          style="--closed:${l}%"
          aria-label=${n?this.t("cover_stop"):l>50?this.t("cover_open"):this.t("cover_close")}
          @click=${()=>n?this.call("cover","stop_cover"):this.ask()&&this.call("cover",l>50?"open_cover":"close_cover")}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 4h16M5 4v15M19 4v15M7 8h10M7 12h10M7 16h10" /></svg>
          <b>${t!==null?`${t} %`:ke(this.hass,e)}</b>
        </button>
      </div>
      ${r?b`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${d=>this.call("cover","set_cover_position",{position:Number(d.target.value)})}
          />`:w}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Jp&&n!==null?b`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(r.target.value)})}
      /></label>`:t&(Qc|Jc)?b`<div class="qm-tilt-buttons">
        ${t&Qc?b`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:w}
        ${t&Jc?b`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:w}
      </div>`:w}renderCar(e){let t=e.entities,n=(u,p,h,f={})=>{this.hass.callService(u,p,{entity_id:h,...f})},r=t.lock,i=!!r&&r.startsWith("lock."),a=u=>/^(switch|input_boolean|fan|light)\./.test(u),s=t.climate,l=!!s&&s.startsWith("climate."),d=t.charging&&a(t.charging)?t.charging:null,c=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return b`<p class="qm-car-line">${c||ke(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${i||r&&a(r)?b`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(i?n("lock","unlock",r):n("homeassistant","turn_off",r)):i?n("lock","lock",r):n("homeassistant","turn_on",r)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:w}
        ${s?b`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",s)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:w}
        ${d?b`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",d)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:w}
        ${!i&&!s&&!d?b`<p class="qm-note">${this.t("car_no_controls")}</p>`:w}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",r=e.state==="off"||e.state==="standby",i=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,a=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),s=typeof t.entity_picture=="string"?t.entity_picture:null;return b`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${s?`background-image:url(${s})`:""} @click=${()=>this.call("media_player",r?"turn_on":n?"media_pause":"media_play")}>
          <span>${r?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${a?b`<p class="qm-media-title">${a}</p>`:w}
      ${i!==null?b`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(i)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:w}
      ${this.renderPlay(e)}`}renderPlay(e){if(!q("sound"))return w;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return w;let r=e.attributes.source;return b`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(i=>b`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:i.type,media_content_id:i.content})}>
            ▶ ${i.label}
          </button>`)}
        ${t.map(i=>b`<button class="qm-chip ${i===r?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:i})}>${i}</button>`)}
      </div>`}renderDoorLock(e){let t=e.state==="locked"||e.state==="locking"||e.state==="jammed",n=J(this.hass,this.entity),r=()=>{confirm(this.t(t?"door_unlock_confirm":"door_lock_confirm",{name:n}))&&(this.call("lock",t?"unlock":"lock"),this.close())};return b`<p class="qm-car-line">${ke(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${t?"qm-slot-on":""}" @click=${r}>${t?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return b`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${ke(this.hass,e)}</b>
      </button>
    </div>`}render(){var r;let e=(r=this.hass)==null?void 0:r.states[this.entity];if(!e)return w;let t=V(this.entity),n=this.car?this.renderCar(this.car):Z(e)?b`<p class="qm-note">${ke(this.hass,e)}</p>`:this.doorLock&&t==="lock"?this.renderDoorLock(e):t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&q("sound")?this.renderMedia(e):this.renderToggle(e);return b`<div class="qm" role="dialog" aria-label=${J(this.hass,this.entity)}>
      <div class="qm-title">${J(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Be,Ie`
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
    `]};function Xp(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,r)=>Math.round(n+(r-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",xi);var Zp=new URL(import.meta.url),eh=new URL("./neonplan3d-3d.js?v=b21e57bc4e3d",Zp).href,Xc;function Un(){return Xc??=import(eh),Xc}var Mi;function Si(){let o=new URL("./neonplan3d-fun.js?v=ffdc4748eea7",new URL(import.meta.url)).href;return Mi??=import(o).catch(e=>{throw Mi=void 0,e}),Mi}function Zc(o,e){let t=o.points,n=t[e],r=t[(e+1)%t.length],i=Math.hypot(r[0]-n[0],r[1]-n[1])||1,a=[(r[0]-n[0])/i,(r[1]-n[1])/i],s=[-a[1],a[0]],l=[(n[0]+r[0])/2,(n[1]+r[1])/2];Y([l[0]+s[0]*.02,l[1]+s[1]*.02],t)||(s=[-s[0],-s[1]]);let d=[s[1],-s[0]];return{a:n,b:r,u:a,n:s,length:i,rightward:a[0]*d[0]+a[1]*d[1]>0}}function Vo(o,e){let t=e[0]-o.a[0],n=e[1]-o.a[1];return{s:t*o.u[0]+n*o.u[1],d:t*o.n[0]+n*o.n[1]}}function Ei(o,e,t){return[o.a[0]+o.u[0]*e+o.n[0]*t,o.a[1]+o.u[1]*e+o.n[1]*t]}var th=.45;function ed(o,e){let t=[];for(let n of e.openings){if(n.wall)continue;let r=e.rooms.find(s=>s.id===n.room_id);if(!r||n.edge>=r.points.length)continue;let{s:i,d:a}=Vo(o,yo(r,n.edge,n.offset));Math.abs(a)>.4||i<-.05||i>o.length+.05||t.push(nh(n,i))}return t}function nh(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function td(o,e,t,n=th){let r=[];for(let i of e.furniture){if(i.type==="stairwell"||i.type==="parking")continue;let a=Y([i.x,i.z],t.points),s=vt(i).map(h=>Vo(o,h)),l=Math.min(...s.map(h=>h.d)),d=Math.min(...s.map(h=>h.s)),c=Math.max(...s.map(h=>h.s)),u=Vo(o,[i.x,i.z]);if(!a&&u.d<=0||u.d<=0||l>n||l<-.3||c<.02||d>o.length-.02)continue;let p=fe(e,i);r.push({kind:"furniture",id:i.id,s0:d,s1:c,y0:p,y1:p+i.h,d:l})}return r}var nd=.3;function Kn(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,r=o.height??nd,i=[];if(o.heights)t&&i.push([t.x,t.y,t.z]),o.points.forEach(([a,s],l)=>{var d;return i.push([a,((d=o.heights)==null?void 0:d[l])??r,s])}),n&&i.push([n.x,n.y,n.z]);else{if(!t||!n)return[];i.push([t.x,t.y,t.z],[t.x,r,t.z]);for(let[a,s]of o.points)i.push([a,r,s]);i.push([n.x,r,n.z],[n.x,n.y,n.z])}return i.filter((a,s)=>s===0||Pi(a,i[s-1])>.001)}function Pi(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function No(o){let e=0;for(let t=1;t<o.length;t++)e+=Pi(o[t-1],o[t]);return e}function qo(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[r,i]=[o[n-1],o[n]],a=Pi(r,i);if(!(a<1e-6)){if(t<=a||n===o.length-1){let s=Math.min(1,t/a),l=[(i[0]-r[0])/a,(i[1]-r[1])/a,(i[2]-r[2])/a];return{p:[r[0]+(i[0]-r[0])*s,r[1]+(i[1]-r[1])*s,r[2]+(i[2]-r[2])*s],dir:l,seg:n-1}}t-=a}}return null}function zt(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function oh(o,e){let{w:t,d:n,h:r}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,r*.55,0]:e==="pressure"?[t*.05,r*.9,0]:null;if(o.type==="pool_filter"){let i=Math.min(t,n)/2;if(o.variant==="side6"){let l=i+.08;return e==="pump"?[l,r*.6,0]:e==="return"?[l+.06,r*.48,0]:e==="waste"?[l,r*.36,0]:null}let a=r*.89,s=i*.45+.04;return e==="pump"?[-s,a,0]:e==="return"?[s,a,0]:e==="waste"?[0,a,-s]:null}if(o.type==="pool_heat_pump"){let i=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let a=e==="in"?r*.25:r*.45;return i==="back"?[e==="in"?-t*.15:t*.15,a,-n/2-.04]:[(i==="left"?-1:1)*(t/2+.04),a,-n*.2]}return null}function od(o,e){let t=oh(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[r,i]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*r-t[2]*i,y:t[1],z:o.z+t[0]*i+t[2]*r}}function Gn(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}function id(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}var Ai=[.25,.7,1],rh=900;function ad(o,e,t,n=r=>r){let r=[];for(let i of o){let a=n(Kn(i,t),i);if(a.length<2)continue;let s=e.get(i.id),l=(s==null?void 0:s.color)??Ai,d=0;for(let c=1;c<a.length;c++){let[u,p]=[a[c-1],a[c]],h=Math.hypot(p[0]-u[0],p[1]-u[1],p[2]-u[2]);h<.01||(r.push({floorId:i.floor_id,a:u,b:p,dist:d,power:s!=null&&s.active?rh:0,color:l}),d+=h)}}return r}function Wo(o,e,t){let n=t.pool??{},r=Vt(e,t);return i=>{var d,c;let{kind:a,id:s,port:l}=zt(i);if(a==="port"){let u=(d=n.ports)==null?void 0:d.find(h=>h.id===s);if(!u)return null;let p=u.kind==="skimmer"?r-(u.depth??0):u.kind==="drain"?Sn(e,t)+.03:u.kind==="inlet"?r-(u.depth??.3):.02;return{x:u.x,z:u.z,y:p}}if(a==="joint"){let u=(c=n.joints)==null?void 0:c.find(p=>p.id===s);return u?Gn(u,l):null}if(a!=="dev")return null;for(let u of o.floors){let p=u.furniture.find(g=>g.id===s);if(!p||!hs.includes(p.type))continue;let h=l?od(p,l):null,f=u.elevation-e.elevation;if(h)return{...h,y:h.y+fe(u,p)+f};let m=p.type==="pool_filter"?p.h*.88:p.type==="pool_dosing"?.95:p.type==="pool_valve"?fs:p.type==="pool_pump"?.2:.3;return{x:p.x,z:p.z,y:m+fe(u,p)+f}}return null}}function Ii(o,e,t,n){let r=c=>{var h,f,m;let{kind:u,id:p}=zt(c);return u==="port"?(m=(f=(h=t.pool)==null?void 0:h.ports)==null?void 0:f.find(g=>g.id===p))==null?void 0:m.kind:void 0},i=c=>r(c)==="drain",a=c=>r(c)==="inlet"||r(c)==="skimmer",s=c=>{if(c.length<2)return c;let u=c[0],p=Ti(t,[u[0],u[2]]);if(!p)return c;let h=[u[0]+p[0]*.35,u[1],u[2]+p[1]*.35],f=1;for(;f<c.length&&Math.hypot(c[f][0]-u[0],c[f][2]-u[2])<.01;)f++;let m=c.slice(f).map(_=>[..._]);for(let _=0;_<m.length-1;_++){let x=(m[_][0]-u[0])*p[0]+(m[_][2]-u[2])*p[1];if(x>=.349999)break;m[_][0]+=p[0]*(.35-x),m[_][2]+=p[1]*(.35-x)}let g=m[0]??c[c.length-1];return[u,h,[h[0],g[1],h[2]],...m]},l=c=>{if(c.length<2)return c;let u=c[0];if(!Y([u[0],u[2]],t.points))return c;let p=Sn(n,t)-.15,h=c.findIndex((_,x)=>x>0&&Math.hypot(_[0]-u[0],_[2]-u[2])>.01);if(h<0)return c;let f=c[h],m=[f[0],f[2]];for(let _=0;_<t.points.length;_++){let x=t.points[_],y=t.points[(_+1)%t.points.length],S=ih([u[0],u[2]],[f[0],f[2]],x,y);S&&(m=S)}let g=Math.hypot(m[0]-u[0],m[1]-u[2])>1e-6?[m[0]+(m[0]-u[0])*.02,m[1]+(m[1]-u[2])*.02]:m;return[u,[u[0],p,u[2]],[g[0],p,g[1]],[g[0],f[1],g[1]],...c.slice(h)]},d=o;return e.from&&i(e.from)&&(d=l(d)),e.to&&i(e.to)&&(d=l([...d].reverse()).reverse()),e.from&&a(e.from)&&(d=s(d)),e.to&&a(e.to)&&(d=s([...d].reverse()).reverse()),d}function Ti(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let i=0;i<t.length;i++){let a=t[i],s=t[(i+1)%t.length];n+=a[0]*s[1]-s[0]*a[1]}let r=null;for(let i=0;i<t.length;i++){let a=t[i],s=t[(i+1)%t.length],l=s[0]-a[0],d=s[1]-a[1],c=Math.hypot(l,d);if(c<1e-6)continue;let u=Math.max(0,Math.min(1,((e[0]-a[0])*l+(e[1]-a[1])*d)/(c*c))),p=Math.hypot(a[0]+l*u-e[0],a[1]+d*u-e[1]),h=n>0?[d/c+0,-l/c+0]:[-d/c+0,l/c+0];(!r||p<r.d)&&(r={d:p,n:h})}return r?r.n:null}function ih(o,e,t,n){let r=[e[0]-o[0],e[1]-o[1]],i=[n[0]-t[0],n[1]-t[1]],a=r[0]*i[1]-r[1]*i[0];if(Math.abs(a)<1e-9)return null;let s=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/a,l=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/a;return s>=0&&s<=1&&l>=0&&l<=1?[o[0]+r[0]*s,o[1]+r[1]*s]:null}var Se=o=>Math.round(o*1e3)/1e3;var sd=-.3;function ld(o,e,t,n,r){var g;let i=[],a=[],s=_=>e(_),l=[],d=o.from,c=[];for(let _ of o.vias){if(_.kind!=="hole"){c.push(_.kind);continue}let x=t.find(v=>v.id===_.joint),y=s(d);if(!x||!y)continue;let S=s(`joint:${x.id}:inside`),z=s(`joint:${x.id}:outside`),A=_.dir?_.dir==="out":Math.hypot(y.x-S.x,y.z-S.z)<=Math.hypot(y.x-z.x,y.z-z.z);l.push({a:d,b:`joint:${x.id}:${A?"inside":"outside"}`,fits:c}),c=[],d=`joint:${x.id}:${A?"outside":"inside"}`}let u=o.to;if(u.length>1){let _=s(d),x=u.map(s).filter(y=>!!y);if(_&&x.length===u.length){let y=x.reduce((G,P)=>G+P.x,0)/x.length,S=x.reduce((G,P)=>G+P.z,0)/x.length,z=Math.hypot(_.x-y,_.z-S)||1,A=Math.min(1,z/2)/z,v=_.y<0||x.some(G=>G.y<0),O={id:r("joint"),kind:"tee",x:Se(y+(_.x-y)*A),z:Se(S+(_.z-S)*A),y:v?sd:Se(_.y)};a.push(O),l.push({a:d,b:`joint:${O.id}:in`,fits:c}),c=[],u.forEach((G,P)=>l.push({a:`joint:${O.id}:out${P+1}`,b:G,fits:[]})),u=[]}}u.length&&l.push({a:d,b:u[0],fits:c});let p=_=>{let{kind:x,id:y,port:S}=zt(_),z=x==="joint"?a.find(A=>A.id===y):void 0;return z?Gn(z,S):s(_)},h=_=>n(_)==="source",f=_=>n(_)==="sink",m=o.to.some(h)&&!h(o.from)||f(o.from)&&!o.to.some(f);for(let _ of l){let x=p(_.a),y=p(_.b);if(!x||!y)continue;let S=ah(x,y,rd(_.a,t),rd(_.b,t)),z={id:r("pipe"),from:_.a,to:_.b,floor_id:o.floorId,points:S.map(v=>[v[0],v[2]]),heights:S.map(v=>v[1])},A=No(Kn(z,p));z.fittings=_.fits.map((v,O)=>({id:r("fit"),kind:v,at:Se(Math.min(A/2,.4+O*.25)),...v==="valve"?{open:!0}:{}})),m&&(z={...z,from:z.to,to:z.from,points:[...z.points].reverse(),heights:[...z.heights??[]].reverse(),fittings:(g=z.fittings)==null?void 0:g.map(v=>({...v,at:Se(Math.max(0,A-v.at))}))}),i.push(z)}return{pipes:i,joints:a}}function rd(o,e){let{kind:t,id:n,port:r}=zt(o),i=t==="joint"&&r==="outside"?e.find(a=>a.id===n):void 0;return(i==null?void 0:i.kind)==="wall"?[-(i.nx??0),-(i.nz??0)]:null}function ah(o,e,t=null,n=null){let r=o.y<0||e.y<0?sd:Se(Math.max(o.y,e.y)),i=[],[a,s]=[o.x,o.z];t&&([a,s]=[Se(a+t[0]*.5),Se(s+t[1]*.5)],i.push([a,Se(o.y),s]));let[l,d]=[e.x,e.z],c=[];return n&&([l,d]=[Se(l+n[0]*.5),Se(d+n[1]*.5)],c.push([l,Se(e.y),d])),i.push([Se(a),r,Se(s)]),Math.abs(l-a)>.01&&i.push([Se(l),r,Se(s)]),Math.abs(d-s)>.01&&i.push([Se(l),r,Se(d)]),i.push(...c),i.filter((u,p)=>p===0||Math.hypot(u[0]-i[p-1][0],u[1]-i[p-1][1],u[2]-i[p-1][2])>.001)}var sh=2e3;function cd(o){return Math.max(0,sh-o)}function dd(o,e,t,n=12,r=180){let i=Math.max(r,e),a=Math.max(r*.5625,t),s={cols:1,tile:Math.min(i,a*16/9)};for(let l=1;l<=Math.max(1,o);l++){let d=Math.ceil(o/l),c=(i-n*(l-1))/l,u=(a-n*(d-1))/d*16/9,p=Math.min(c,u);(p>s.tile||l===1)&&(s={cols:l,tile:p})}if(s.tile<r){let l=Math.max(1,Math.floor((i+n)/(r+n)));return{cols:Math.min(l,Math.max(1,o)),tile:r}}return{cols:s.cols,tile:Math.floor(s.tile)}}function zi(o,e,t){var O,G,P,M;let n=[...t.openings.values()].flatMap($=>[$.cover,$.contact,$.tilt,$.contact2??null,$.tilt2??null,$.position??null,$.tiltAngle??null,$.lock??null]),r=ul(e),i=r.filter($=>V($)==="camera").flatMap($=>Ye(o,$)),a=r.map($=>jn(o,$)),s=e.energy,l=e.presence.flatMap($=>[$.person,$.sensor]),d=e.floors.flatMap($=>$.rooms.flatMap(E=>_e(o,E.area_id).filter(C=>V(C)==="light"))),c=[...t.furniture.values()].flatMap($=>[$.entity,$.power]),u=e.floors.flatMap($=>$.furniture.flatMap(E=>[E.state_entity??null,E.state_entity2??null,E.color_entity??null])),p=e.floors.flatMap($=>$.furniture.flatMap(E=>[E.door_left??null,E.door_right??null,E.soc??null,E.status??null,E.charge??null,E.export??null])),h=(((O=e.settings.roof)==null?void 0:O.windows)??[]).flatMap($=>[$.cover,$.contact,$.tilt]).filter($=>!!$&&$!=="none"),f=[...(((G=e.settings.roof)==null?void 0:G.solar)??[]).map($=>$.entity),...(((P=e.settings.roof)==null?void 0:P.strings)??[]).map($=>$.entity)].filter($=>!!$&&$!=="none"),m=e.floors.flatMap($=>$.furniture.filter(E=>E.type==="robot_vacuum").map(E=>{var C;return Tn(o,((C=t.furniture.get(E.id))==null?void 0:C.entity)??null,E.room_sensor)})),g=e.floors.flatMap($=>$.furniture.flatMap(E=>(E.pictures??[]).flatMap(C=>[C.entity,...C.image.startsWith("camera:")?[C.image.slice(7)]:[]]))),_=t.heat?e.floors.flatMap($=>$.rooms.flatMap(E=>_e(o,E.area_id).filter(C=>C.startsWith("sensor.")))):[],x=[...zc(e.floors),...q("auto_pro")?Ks(o,e.floors):[]],y=qn(o,e).map($=>$.entity),S=q("household")?[...e.floors.flatMap($=>$.furniture.flatMap(Ul)),((M=e.settings.household)==null?void 0:M.notes)??null].filter($=>!!$&&$!=="none"):[],z=e.floors.flatMap($=>$.furniture.flatMap(E=>{var C,j;return E.type==="access_point"?Object.values(kn(o,{entity:((C=t.furniture.get(E.id))==null?void 0:C.entity)??E.entity})):E.type==="water_heater"?Object.values(Mn(o,{entity:((j=t.furniture.get(E.id))==null?void 0:j.entity)??E.entity})):E.type==="lamp_ceiling_fan"?[E.fan_entity??null]:E.type==="wall_switch"?[...Wt(E),co(E)]:E.type==="wall_socket"?Bt(E).flatMap(N=>[N.entity,N.power]):[]})),A=Et(o,t.weatherEntityId??e.settings.weather_entity),v=[...z,...r,...i,...n,...a,...c,...u,...p,...m,...h,...f,...g,s.grid,s.solar,s.battery,s.battery_soc,s.consumption,s.tariff,...l,...d,..._,...t.warnings,...x,...y,...S,A,"sun.sun"];return[...new Set(v.filter($=>!!$))]}var ud=/^#[0-9a-f]{3,8}$/i;function lh(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function pd(o){if(!o||!o.kind)return null;let e=o.color&&ud.test(o.color)?o.color:"#0b1426",t=o.color2&&ud.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${t})`;let n=lh(o.image);if(!n)return null;let r=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${r}), rgba(4, 8, 16, ${r})), url("${n}") center / cover no-repeat`}var Ci;function dn(){let o=new URL("./neonplan3d-voice.js?v=c9e223595194",new URL(import.meta.url)).href;return Ci??=import(o).catch(e=>{throw Ci=void 0,e}),Ci}function Bo(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("neonplan3d.mic","1"),sessionStorage.getItem("neonplan3d.mic")==="1"}catch{return!1}}function Ri(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function Fi(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function Uo(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function Ko(){try{sessionStorage.removeItem("neonplan3d.mic")}catch{}}var ch=.25,hd=o=>Math.round(o*1e3)/1e3;function Hi(o,e,t,n,r){let i=o.rooms.find(a=>a.points.length>=3&&Y([e,t],a.points));return!i||Y([n,r],i.points)?[n,r]:Y([n,t],i.points)?[n,t]:Y([e,r],i.points)?[e,r]:[e,t]}function fd(o,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let i=[(n[0]-t[0])/r,(n[1]-t[1])/r],a=l=>Math.abs(-(l[0]-t[0])*i[1]+(l[1]-t[1])*i[0]),s=l=>(l[0]-t[0])*i[0]+(l[1]-t[1])*i[1];return o.rooms.some(l=>l.id!==e&&l.points.some((d,c)=>{let u=l.points[(c+1)%l.points.length];return a(d)>.02||a(u)>.02?!1:Math.min(r,Math.max(s(d),s(u)))-Math.max(0,Math.min(s(d),s(u)))>.05}))}function md(o,e,t,n=ch){let r=o.rooms.find(d=>d.points.length>=3&&Y([e.x,e.z],d.points));if(!r)return null;let i=r.points,a=Oe(i)>=0?1:-1,s=t/2,l=null;for(let d=0;d<i.length;d++){let c=i[d],u=i[(d+1)%i.length],p=Math.hypot(u[0]-c[0],u[1]-c[1]);if(p<.3)continue;let h=[(u[0]-c[0])/p,(u[1]-c[1])/p],f=[-h[1]*a,h[0]*a],m=(e.x-c[0])*h[0]+(e.z-c[1])*h[1];if(m<0||m>p)continue;let _=o.rooms.some(O=>O.id!==r.id&&O.points.some((G,P)=>{let M=O.points[(P+1)%O.points.length],$=Math.abs((G[0]-c[0])*f[0]+(G[1]-c[1])*f[1]),E=Math.abs((M[0]-c[0])*f[0]+(M[1]-c[1])*f[1]);return $<.02&&E<.02}))?s:0,x=(e.x-c[0])*f[0]+(e.z-c[1])*f[1]-_,y=Math.atan2(-f[0],f[1])*180/Math.PI,S=O=>Math.abs((e.rotation-O+540)%360-180),A=[{rotation:y,extent:e.d/2},{rotation:y+90,extent:e.w/2},{rotation:y-90,extent:e.w/2}].reduce((O,G)=>S(G.rotation)<S(O.rotation)?G:O);if(S(A.rotation)>50)continue;let v=x-A.extent;Math.abs(v)>n||l&&Math.abs(v)>=Math.abs(l.gap)||(l={x:hd(e.x-f[0]*v),z:hd(e.z-f[1]*v),rotation:(Math.round(A.rotation)%360+360)%360,gap:v})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function dh(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var Li={walls(o,e,t){let n=o.floors.find(i=>i.id===e),r=n==null?void 0:n.rooms.find(i=>i.id===t);return!n||!r||r.points.length<3?[]:r.points.map((i,a)=>{let s=Zc(r,a),l=fd(n,r.id,s.a,s.b),d=[...td(s,n,r).map(c=>[c.s0,c.s1]),...ed(s,n).filter(c=>c.y0<.05).map(c=>[c.s0,c.s1])];return{roomId:r.id,edge:a,a:s.a,b:s.b,u:s.u,n:s.n,length:s.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:d}})},onWall(o,e,t){return Ei(dh(o),e,t)},freeSpot(o,e,t=.1){let n=i=>i>=t&&i+e<=o.length-t&&!o.taken.some(([a,s])=>i<s+.05&&i+e>a-.05),r=o.length/2-e/2;for(let i=0;i<=o.length;i+=.05){if(n(r-i))return Math.round((r-i)*100)/100;if(n(r+i))return Math.round((r+i)*100)/100}return null},nodeAt(o,e,t){let n=o.floors.find(s=>s.id===e),r=n==null?void 0:n.outdoor.find(s=>s.id===t);if(!n||!r)return()=>null;let i=Wo(o,n,r),a=r.pool??{};return s=>{let{kind:l,id:d,port:c}=zt(s),u=l==="joint"?(a.joints??[]).find(h=>h.id===d):void 0;if(u)return Gn(u,c);let p=l==="port"?(a.ports??[]).find(h=>h.id===d):void 0;return p?i(s)??{x:p.x,y:.02,z:p.z}:i(s)}},connect(o,e,t,n,r,i){var l;let a=o.floors.find(d=>d.id===e),s=a==null?void 0:a.outdoor.find(d=>d.id===t);return!a||!s?{pipes:[],joints:[]}:ld({...n,floorId:e},Li.nodeAt(o,e,t),((l=s.pool)==null?void 0:l.joints)??[],r,i)}};var gd={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},uh={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},ph=2e4,hh=3*6e4,Oi=new Set(["unavailable","unknown",""]),fh="neonplan3d.director";function Di(){try{return localStorage.getItem(fh)==="1"}catch{return!1}}function _d(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var mh=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function vd(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(t=>{let n=o.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let r=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return mh.test(r)}).sort()}function ji(o,e,t=Date.now()){if(!o||!e||Oi.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let n=Date.parse(e.state);return Number.isFinite(n)&&t-n<3e4}return o.state==="off"&&e.state==="on"}var bd=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function yd(o,e,t=Date.now()){return!o||!e||Oi.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?ji(o,e,t):Oi.has(o.state)?!1:bd.has(e.state)&&!bd.has(o.state)}function wd(o,e,t,n){var c;if(n)return n;let r=o.entities??{},i=(c=r[e])==null?void 0:c.device_id,a=t.filter(u=>u.startsWith("camera.")),s=i?a.find(u=>{var p;return((p=r[u])==null?void 0:p.device_id)===i}):void 0;if(s)return s;let l=u=>{var p,h,f,m;return((p=r[u])==null?void 0:p.area_id)??((m=(f=o.devices)==null?void 0:f[((h=r[u])==null?void 0:h.device_id)??""])==null?void 0:m.area_id)??null},d=l(e);return d&&a.find(u=>l(u)===d)||null}var Yn=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,t,n){let r=this.seen.has(e),i=this.seen.get(e);return this.seen.set(e,t),r&&i!==t&&n(i,t)}stopped(e,t,n){let r=this.runs.get(e);return t?(r!=null&&r.run||this.runs.set(e,{run:!0,since:n,ran:!0}),!1):!r||r.run?(this.runs.set(e,{run:!1,since:n,ran:!!(r!=null&&r.run)}),!1):r.ran&&n-r.since>=hh?(r.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,t,n=30){let r=this.shown.get(e.key);if(r!==void 0&&t-r<uh[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&t-this.touchedAt<ph)return!1;let a=this.current;if(a&&t<a.until&&gd[a.shot.kind]>gd[e.kind])return!1;let s=Math.min(600,Math.max(10,n))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:t,until:t+s,touched:!1},this.shown.set(e.key,t),!0}due(e){let t=this.current;return!t||e<t.until?null:(this.current=null,{shot:t.shot,back:!t.touched})}clear(){this.current=null}};function kd(o,e){var t;return String(e&&((t=o.states[e])==null?void 0:t.attributes.unit_of_measurement)||"m\xB3")}function bh(o,e){return b`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${bt`<polyline points=${Kc(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function _h(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${ie(o,e*1e3,0)} l`:`${ie(o,e,e<10?2:0)} ${t}`}var vh=12e4,$d={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},yh='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',wh='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function Md(o){return o.fan_entity&&o.fan_entity!=="none"?o.fan_entity:null}function xh(o){if(!o||!qe(o))return 0;let e=o.attributes.percentage;return typeof e=="number"?Math.max(.15,e/100):1}var kh=[.35,.95,1],$h=[1,.3,.2];function Sd(o,e,t){var n;return((n=o.rooms.find(r=>r.points.length>=3&&Y([e,t],r.points)))==null?void 0:n.id)??null}function Mh(o,e){var n;let t=e.action==="more_info"?e.target:(n=e.data)==null?void 0:n.entity_id;return typeof t=="string"&&qe(o.states[t])}function Sh(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Eh(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}var Vi=class extends Pe{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},proxmoxWall:{attribute:!1},_pveFilter:{state:!0},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},_voice:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;clockTimer;flashTimer;cloud=0;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;resizeObs=null;unsubAsk=null;voiceTimer;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];finished=new Eo;appliances=new Map;directing=new Yn;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this._voice=null,this._micProbe=Bo(),this._alerts=[],this._household=[],this._hhFolded=Sh("neonplan3d.hhFolded"),this._binInfo=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.proxmoxWall=!1,this._pveFilter="all",this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!(e!=null&&e.connection)||!this.isConnected||(this.unsubAsk=La(e,t=>{this.onAsk(t)}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e==null||e.then(t=>t()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{var e;document.hidden||(e=this.holoRefetch)==null||e.call(this)};disconnectedCallback(){var e,t,n,r,i;super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),(e=this.pets)==null||e.dispose(),this.pets=null,this.petsFor=null,(t=this.ghost)==null||t.dispose(),this.ghost=null,(n=this.unlistenReplay)==null||n.call(this),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,(r=this.resizeObs)==null||r.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),(i=this.viewer)==null||i.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&dn().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",t=>{var i,a;let n=t;if(!((a=(i=n.target)==null?void 0:i.closest)!=null&&a.call(i,".fp3d-holo")))return;let r=this.renderRoot.querySelector("canvas");r&&(n.preventDefault(),r.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{var r;let n=(((r=t[0])==null?void 0:r.contentRect.width)??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Un();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",n=>{var r,i;this._central&&!((i=(r=n.target)==null?void 0:r.closest)!=null&&i.call(r,".fp3d-central, .fp3d-central-btn"))&&(this._central=!1),this._info&&(this._info=null)}),this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,onRoomTap:(n,r)=>this.fire("room-tap",{floorId:n,roomId:r}),onFloorTap:n=>this.fire("floor-tap",{floorId:n}),floorInfo:n=>n.rooms.length===1?I(this.hass,"floor_rooms_one"):I(this.hass,"floor_rooms",{n:n.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(n,r,i)=>this.onDeviceTap(n,r,i),onDeviceHold:(n,r,i)=>this.onDeviceHold(n,r,i),onRoomDoubleTap:(n,r)=>this.onRoomDoubleTap(n,r),onDeviceSwipe:(n,r,i,a,s)=>this.onDeviceSwipe(n,r,i,a,s),onFurnitureSelect:n=>this.fire("furniture-select",{id:n}),onFurnitureMove:(n,r,i)=>this.fire("furniture-move",{id:n,x:r,z:i}),onDeviceSelect:n=>this.fire("device-select",{id:n}),onDeviceMove:(n,r,i)=>this.fire("device-move",{id:n,x:r,z:i}),onStats:n=>{this.showStats&&(this._stats=n)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((n,r,i,a,s,l)=>this.placeHolo(n,r,i,a,s,l)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...$n()]),this.hass&&wi(this.hass,$n()).then(()=>this.syncDevices(!0)),this.shownPacks=Dt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.building)),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&ss(this.building??null),e.has("hass")&&this.hass&&Fl(Hl(this.hass))}updated(e){var i,a;e.has("hass")&&((i=this.live)!=null&&i.el)&&(this.live.el.hass=this.hass),e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Dt()&&(this.shownPacks=Dt(),t.setPacks([...$n()]),this.hass&&wi(this.hass,$n()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&t.setParked(vi(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let s=JSON.stringify(this.startViewOf()),l=this.shownStartView!==void 0&&this.shownStartView!==s;this.shownStartView=s,t.setStartView(this.startViewOf()),t.setBuilding(this.building),l&&this.floorId===null&&t.resetView()}(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(s=>e.has(s))||this.markerMode==="room"&&e.has("roomId"),r=this.replayTicked&&!!this.replay;this.replayTicked=!1,(n||e.has("hass")||r)&&this.syncDevices(n,r&&(this.trail||this.detecting)),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("angleLock")&&t.setAngleLock(this.angleLock),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("hideRoof")&&t.setHideRoof(this.hideRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.effectiveTheme()),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,(a=this.replay)==null||a.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e,t=!1){var Qi,Ji,Xi,Zi,ea,ta,na,oa,ra;let n=this.viewer,r=this.building;if(!n||!r||!this.hass)return;let i=this.hass;(e||!this.openingLinks||this.linkedRegistry!==i.entities)&&(this.openingLinks=Gt(i,r.floors),cl(Ws(i,r.floors)),this.furnitureLinks=wt(i,r.floors),this.linkedRegistry=i.entities,this.findIndex=null,this.alertSrc=this.alerts?di(i,r,this.weatherEntityId):null,this.watchHousehold(i,r),this.watched=zi(i,r,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?ui(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Wn()&&(this.watched=[...new Set([...this.watched,...Wc(this.sceneHost(i,r))])]),e=!0);let a=e||t,s=!a;if(!a){for(let k of this.watched)if(this.shownStates.get(k)!==i.states[k]&&(a=!0,!k.startsWith("sensor."))){s=!1;break}}let l=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=((Qi=this.replay)==null?void 0:Qi.seek)??0,this.seenT=((Ji=this.replay)==null?void 0:Ji.t)??0,!a)return;if(s&&this._low&&!this.replay){let k=cd(performance.now()-this.lastSync);if(k>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},k);return}}this.lastSync=performance.now();let d=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(k=>[k,i.states[k]])),this.scene=Wn()?Vc(this.sceneHost(i,r)):[];let c=bc(i,r),u=dl(i,r),p=this.furnitureMarkers(i,r,new Set(u.map(k=>k.id)),new Set(c.map(k=>k.powerEntity)));c.push(...p.consumers),this.lastConsumers=c;let h=_c(i,r,c,ln(r,k=>{var T,L;return((L=(T=this.furnitureLinks)==null?void 0:T.get(k.id))==null?void 0:L.power)??null})),f=new Map(c.filter(k=>k.id!==k.powerEntity).map(k=>[k.id,k.power]));this.confirmSet=Yt(i,r.floors);let m=this.trail?this.trailNow(i,r):[],g=q("camera_cockpit")&&!this.dimmed?this.detectionPins(i,u):[];this.detecting=g.length>0;let _=q("energy_pro"),x=new Set(q("auto_pro")?r.floors.flatMap(k=>k.furniture.filter(T=>T.type==="parking"&&T.car&&cn(i,T)).map(T=>T.id)):[]);n.setDevices([...[...u,...p.markers,...this.lockMarkers(i,r)].map(k=>{let T=k.show==="no_power"||"energyDevice"in k&&k.energyDevice||"standby"in k&&k.standby?null:f.get(k.id)??null,L={...k,power:T,powerText:T===null?void 0:ce(i,T),effect:this.dimmed?!1:k.effect},Q=k.ownName&&(k.showName||this.markerNames)?k.ownName:"",R=q("sound")&&this.mediaCardUp(i,k.id)||q("auto_pro")&&!!k.furnitureId&&x.has(k.furnitureId);return{...L,pin:this.showPin(L)&&!R,full:k.show==="always"||k.full===!0,caption:Q}}),...(_&&(this.flows??this._flows)&&!this.dimmed&&h.grid!==null?[this.gridPin(i,r,h.grid)]:[]).filter(k=>!!k),...g,...m.map((k,T)=>({id:`trail:${T}`,floorId:k.floorId,roomId:null,x:k.x,z:k.z,y:.3+.4*m.slice(0,T).filter(L=>L.entity===k.entity).length,icon:Lc,name:J(i,k.entity),text:Lo(i,k.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(r)]);for(let k of this.scene)k.kind==="marker"&&k.card&&!p.targets.has(k.furnitureId)&&p.targets.set(k.furnitureId,`module:${k.id}`);n.setTrail(m,this.replay?this.robotPaths(i,r):[]),n.setPickTargets(p.targets,this.openingTargets()),n.setScreens(p.screens),n.setFridgeDoors(Tr(i,r.floors)),n.setAwnings(Bs(i,r.floors)),n.setProjections(this.projectedCameras(i,r)),n.setRobots(this.robotInfos(i,r));let y=new Map;for(let k of((Xi=r.settings.roof)==null?void 0:Xi.windows)??[]){let T=U=>U&&U!=="none"?U:null,L=We(i,{cover:T(k.cover),contact:T(k.contact),tilt:T(k.tilt)},"window"),Q=T(k.window)?i.states[T(k.window)]:void 0,R=L.open;if(Q&&!Z(Q)){let U=Q.attributes.current_position;R=typeof U=="number"?Math.min(1,Math.max(0,U/100)):Q.state==="open"||Q.state==="opening"?1:0}y.set(k.id,{open:R,tilt:L.tilt,cover:L.cover??0})}n.setRoofWindows(y),n.setParked(vi(i,r));let S=new Map(r.floors.flatMap(k=>k.openings.map(T=>[T.id,T.type]))),z=new Map([...this.openingLinks].map(([k,T])=>[k,We(i,T,S.get(k))]));n.setOpeningStates(z,l);let A=this.alertSrc?lc(i,r,this.alertSrc,this.openingLinks):[],v=this.alerts&&Wn()?qc(this.sceneHost(i,r)).map(k=>({kind:k.kind,entity:k.entity,roomId:k.roomId,floorId:k.floorId,text:k.text,color:k.color,quiet:!k.roomId})):[];this.setAlerts([...A,...v]),clearTimeout(this.fridgeTimer);let O=q("household")&&!this.replay?Jl(r.floors.flatMap(k=>k.furniture),i):null;O!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),O+500));let G=[...u,...p.markers].map(k=>`${k.id}:${k.glow?`${k.glow.level.toFixed(1)}/${k.glow.color.map(T=>T.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...z].map(([k,T])=>`${k}:${T.open}:${T.cover===null?"-":T.cover.toFixed(1)}`).join(";");if(G!==this.thumbSig){let k=this.thumbSig==="";this.thumbSig=G,k||this.scheduleThumbs(1500)}let P=r.floors.flatMap(k=>k.furniture.filter(T=>T.type==="home_battery").map(T=>({floorId:k.id,x:T.x,z:T.z})))[0]??(r.energy.battery?r.floors.flatMap(k=>k.placements.filter(T=>T.entity_id===r.energy.battery).map(T=>({floorId:k.id,x:T.x,z:T.z})))[0]:null),M=_?Ec(i,r,h.solar):null,$=r.settings.roof.hologram??Ge,E=[...r.settings.roof.solar??[]].sort((k,T)=>T.rows*T.cols-k.rows*k.cols),C=r.settings.roof.strings??[],j=k=>{var T;return(k.string?(T=C.find(L=>L.id===k.string))==null?void 0:T.inverter:null)??null},N=$.plant_floor?"all":"house",X=(k,T,L,Q)=>{var Re,fn;let R=Mt(r,k);if(!R)return null;let[U,he]=St(R,k),ne=k.u+U/2+T,ae=k.v+he/2+L,ye=[R.o[0]+R.eu[0]*ne+R.es[0]*ae,R.o[1]+R.eu[1]*ne+R.es[1]*ae,R.o[2]+R.eu[2]*ne+R.es[2]*ae],we=((Re=R.wall)==null?void 0:Re.floorId)??(R.unbounded?((fn=r.floors.find(Xn=>Xn.elevation===Math.min(...r.floors.map(ut=>ut.elevation))))==null?void 0:fn.id)??r.floors[0].id:[...r.floors].sort((Xn,ut)=>ut.elevation-Xn.elevation)[0].id);return{p:[ye[0]+R.n[0]*.05,ye[1]+R.n[1]*.05,ye[2]+R.n[2]*.05],n:[R.n[0],R.n[1],R.n[2]],floorId:we,size:Q,roof:!0,views:N}},H=[],K=[],W=h.grid!==null||h.battery!==null||h.solar!==null,se=$.place==="free"&&Number.isFinite($.x)&&Number.isFinite($.z),F=_&&h.solar!==null&&!se?E.find(k=>k.id===$.field)??E[0]:void 0,B=F?j(F):null,oe=!!F&&!!B&&!E.some(k=>k.id!==F.id&&j(k)===B)&&$.right===0&&$.up===0,Ae=(()=>{if(!oe||!F)return 0;let k=Mt(r,F);return k?St(k,F)[0]/2+1.2:0})(),me=F?X(F,$.right+Ae,$.up,$.size):null,Ct=this.devicePowers(i,r),Rt=_&&h.solar!==null?r.energy.solar?[r.energy.solar]:ln(r,k=>{var T,L;return((L=(T=this.furnitureLinks)==null?void 0:T.get(k.id))==null?void 0:L.power)??null}).solar:[];if(me)H.push(me),K.push({kind:"main",name:I(i,"holo_title"),w:null,dayIds:Rt,battery:null});else if(_&&W&&se){let k=0,T=0,L=0,Q=1/0,R=r.floors[0];for(let ae of r.floors){ae.rooms.length&&(Q=Math.min(Q,ae.elevation)),ae.rooms.length&&(!R.rooms.length||ae.elevation+ae.height>R.elevation+R.height)&&(R=ae);for(let ye of ae.rooms)for(let[we,Re]of ye.points)k+=we,T+=Re,L++}L&&(k/=L,T/=L);let U=$.x-k,he=$.z-T,ne=Math.hypot(U,he);H.push({p:[$.x,(Number.isFinite(Q)?Q:0)+($.height??3),$.z],n:ne>.01?[U/ne,0,he/ne]:[1,0,0],floorId:R.id,size:$.size,roof:!0,views:N}),K.push({kind:"main",name:I(i,"holo_title"),w:null,dayIds:Rt,battery:null})}else if(_&&W&&r.floors.some(k=>k.rooms.length)){let k=-1/0,T=1/0,L=-1/0,Q=0,R=r.floors[0];for(let U of r.floors){for(let he of U.rooms)for(let[ne,ae]of he.points)k=Math.max(k,ne),T=Math.min(T,ae),L=Math.max(L,ae);U.rooms.length&&U.elevation+U.height>Q&&(Q=U.elevation+U.height,R=U)}H.push({p:[k+.6,Q+.4,(T+L)/2],n:[1,0,0],floorId:R.id,size:$.size,roof:!0,views:N}),K.push({kind:"main",name:I(i,"holo_title"),w:null,dayIds:Rt,battery:null})}if(_&&h.solar!==null){let k=new Set;for(let T of r.floors)for(let L of T.furniture.filter(Q=>Q.type==="inverter")){if(L.plant_card===!1||k.has(L.id))continue;k.add(L.id);let Q=E.filter(ye=>j(ye)===L.id),R=(F&&L.id===B?Q.find(ye=>ye.id!==F.id):null)??Q[0],U=((ea=(Zi=this.furnitureLinks)==null?void 0:Zi.get(L.id))==null?void 0:ea.power)??null,he=R?X(R,L.plant_right??0,L.plant_up??0,$.size*.85):null;if(!he||!U)continue;let ne=T.furniture.filter(ye=>ye.type==="home_battery").sort((ye,we)=>Math.hypot(ye.x-L.x,ye.z-L.z)-Math.hypot(we.x-L.x,we.z-L.z))[0],ae=ne!=null&&ne.soc&&ne.soc!=="none"?Number((ta=i.states[ne.soc])==null?void 0:ta.state):NaN;H.push(he),K.push({kind:"plant",name:L.name||$e(i,L.type),w:Math.max(0,pe(i.states[U])??0),dayIds:[U],battery:ne?{soc:Number.isFinite(ae)?ae:null,w:Ct.get(ne.id)??null}:null})}}let pn=$.device_house===!1?"floor":"all";if(_)for(let k of r.floors){for(let T of k.furniture){if(!T.holo)continue;let L=((oa=(na=this.furnitureLinks)==null?void 0:na.get(T.id))==null?void 0:oa.power)??null,Q=c.find(U=>U.id===T.id);if(!L&&!Q)continue;let R=k.elevation+fe(k,T)+T.h;H.push({p:[T.x,R+.1,T.z],n:[0,1,0],floorId:k.id,size:$.size*.7,roof:!1,views:pn,room:Sd(k,T.x,T.z)}),K.push({kind:"device",name:T.name||$e(i,T.type),w:(Q==null?void 0:Q.power)??(L?pe(i.states[L]):null),dayIds:L?[L]:[],battery:null})}for(let T of k.placements){if(!T.holo)continue;let L=jn(i,T.entity_id);if(!L)continue;let Q=k.elevation+(T.y??.4)+.2;H.push({p:[T.x,Q,T.z],n:[0,1,0],floorId:k.id,size:$.size*.7,roof:!1,views:pn,room:Sd(k,T.x,T.z)}),K.push({kind:"device",name:T.name||J(i,T.entity_id),w:pe(i.states[L]),dayIds:[L],battery:null})}}let ze=[];if(q("sound")){let k=new Set,T=(r.settings.roof.hologram??Ge).size,L=(R,U,he,ne,ae,ye)=>{let we=i.states[U];if(!we||V(U)!=="media")return;if(k.has(U)){let pt=ze.find(Yo=>Yo.id===U);pt&&ze.push({...pt,id:`${U}#${ze.filter(Yo=>Yo.id.startsWith(`${U}#`)).length+2}`,floorId:R.id,x:he,z:ne,members:[U]});return}k.add(U);let Re=this.ro?void 0:this.mediaGrace.get(U),fn=[we.attributes.media_title,we.attributes.app_name,we.attributes.source].find(pt=>typeof pt=="string"&&!!pt.trim())??"";if(!(!Z(we)&&(we.state==="playing"||we.state==="paused"&&!!fn||we.state==="on"&&!!we.attributes.source))){Re&&Re.until>Date.now()?(ze.push({...Re.source,playing:!1,level:0}),H.push(Re.anchor),K.push({...Re.card,media:{...Re.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,Re.until-Date.now()+100))):Z(we)||(this.mediaGrace.delete(U),ze.push({id:U,floorId:R.id,x:he,z:ne,level:0,playing:!1,members:[]}));return}let ut=we.state==="playing",Ne=we.attributes,ia=typeof Ne.volume_level=="number"?Math.min(1,Math.max(0,Ne.volume_level)):.5,Rd=Array.isArray(Ne.group_members)?Ne.group_members.filter(pt=>pt!==U):[];ze.push({id:U,floorId:R.id,x:he,z:ne,level:ut?.3+.7*ia:0,playing:ut,members:Rd});let Fd=fn||I(i,"holo_media_playing"),aa={p:[he,R.elevation+ae+.12,ne],n:[0,1,0],floorId:R.id,size:T*.7,roof:!1,views:"all"},sa={kind:"media",name:ye,w:null,dayIds:[],battery:null,media:{id:U,title:Fd,artist:typeof Ne.media_artist=="string"?Ne.media_artist:typeof Ne.media_album_name=="string"?Ne.media_album_name:"",picture:typeof Ne.entity_picture=="string"?Ne.entity_picture:null,volume:Math.round(ia*100),playing:ut}};H.push(aa),K.push(sa),this.ro||this.mediaGrace.set(U,{until:Date.now()+45e3,card:sa,source:ze[ze.length-1],anchor:aa})},Q=(R,U)=>{var he,ne;for(let ae of R.furniture){if((ae.entity!=null&&ae.entity!=="none")!==U)continue;let ye=(ne=(he=this.furnitureLinks)==null?void 0:he.get(ae.id))==null?void 0:ne.entity;ye&&L(R,ye,ae.x,ae.z,fe(R,ae)+ae.h,ae.name||$e(i,ae.type))}};for(let R of r.floors)Q(R,!0);for(let R of r.floors)for(let U of R.placements)L(R,U.entity_id,U.x,U.z,U.y??1.1,U.name||J(i,U.entity_id));for(let R of r.floors)Q(R,!1)}if(q("auto_pro")){let k=(r.settings.roof.hologram??Ge).size;for(let T of r.floors)for(let L of T.furniture){if(L.type!=="parking"||!L.car)continue;let Q=cn(i,L);if(!Q)continue;let R=In(i,L);if(R.soc===null&&R.range===null&&R.locked===null&&R.climateOn===null)continue;let U=Cc(L,Q),he=fe(T,L)+((U==null?void 0:U.h)??1.6);H.push({p:[L.x,T.elevation+he+.25,L.z],n:[0,1,0],floorId:T.id,size:k*.7,roof:!1,views:"all"});let ne=R.entities;K.push({kind:"car",name:L.name||$e(i,Q),w:null,dayIds:[],battery:null,car:{spot:L.id,soc:R.soc,range:R.range,rangeUnit:R.rangeUnit,chargingW:R.chargingW,charging:R.charging,locked:R.locked,climateOn:R.climateOn,lock:ne.lock,climate:ne.climate,charge:ne.charging&&/^(switch|input_boolean)\./.test(ne.charging)?ne.charging:null}})}}let lt=this.scene.filter(k=>k.kind==="water").map(k=>({...k,level:this.dimmed?k.level*.4:k.level}));if(n.setPools(lt),Wn()){let k=(r.settings.roof.hologram??Ge).size;for(let T of Nc(this.sceneHost(i,r))){let L=r.floors.find(R=>R.id===T.anchor.floorId);if(!L)continue;let Q=null;if(T.anchor.areaId){let R=L.outdoor.find(ae=>ae.id===T.anchor.areaId);if(!R||R.points.length<3)continue;let[U,he]=Ce(R.points),ne=R.type==="pool"?Vt(L,R):_t(L,U,he);Q=[U,L.elevation+Math.max(ne,0)+(R.above?.6:1.1),he]}else if(T.anchor.furnitureId){let R=L.furniture.find(U=>U.id===T.anchor.furnitureId);if(!R)continue;Q=[R.x,L.elevation+fe(L,R)+R.h+.25,R.z]}Q&&(H.push({p:Q,n:[0,1,0],floorId:L.id,size:k*.7,roof:!1,views:"all"}),K.push({kind:"module",name:T.title,w:null,dayIds:[],battery:null,module:T}))}for(let T of this.scene){if(T.kind!=="tag")continue;let L=r.floors.find(Q=>Q.id===T.floorId);L&&(H.push({p:[T.at[0],L.elevation+T.at[1],T.at[2]],n:[0,1,0],floorId:L.id,size:k*.75,roof:!1,views:T.views??"all"}),K.push({kind:"bin",name:T.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:T.color??"#37e0ff",when:T.text,name:T.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}if(q("household")){let k=(r.settings.roof.hologram??Ge).size;for(let T of Nl(this.binHolos)){let L=r.floors.find(R=>R.id===T.floorId);if(!L)continue;H.push({p:[T.x,L.elevation+T.y+.04,T.z],n:[0,1,0],floorId:T.floorId,size:k*.75,roof:!1,views:"all"});let Q=T.lines.map(R=>({color:R.color,when:R.when,name:R.name,soon:!!R.soon&&!R.out,out:!!R.out}));K.push({kind:"bin",name:T.lines.map(R=>R.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:Q,soon:Q.some(R=>R.soon),icon:T.lines.length===1?T.lines[0].icon??null:null}})}}n.setSound(ze);let Ue=this._walk?this.walkRoomPts:null,Ft=H.map(k=>!this._walk||!!Ue&&Y([k.p[0],k.p[2]],Ue)),hn=K.filter((k,T)=>Ft[T]);n.setAnchors(H.filter((k,T)=>Ft[T])),JSON.stringify(hn)!==JSON.stringify(this._holos)&&(this._holos=hn),n.setSolarLevels(M&&!this.dimmed?Sc(r,M):new Map);let Qn=!_||!(this.flows??this._flows)||this.dimmed?[]:yc({building:r,consumers:c,summary:h,battery:P??null,fieldPower:M,devicePower:this.devicePowers(i,r)}).map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.power,color:Pc(k.kind,h)})),Ht=this.poolPipes(r),ct=this.scene.filter(k=>k.kind==="line");n.setFlows(this.dimmed?Qn:[...Qn,...Ht.flows,...Gc(ct)]),n.setPipes(Ht.tubes),n.setPatches(this.scene.filter(k=>k.kind==="patch").map(k=>({floorId:k.floorId,points:k.points,y:k.y,color:k.color,opacity:this.dimmed?k.opacity*.4:k.opacity,...k.glow?{glow:!0}:{}})));let D=[],re=zn("locate")&&go(r)?[...D,...bo(i,r,new Set(D.map(k=>k.id)))]:D;n.setPersonLook(Or(r)==="pin"?"pin":"figure"),n.setPersons(re);let de=il(i,r,this.openingLinks,re);n.setFloorInfo(new Map([...de].map(([k,T])=>[k,al(i,T)])));let Ee=(ra=i.states["sun.sun"])==null?void 0:ra.attributes,le=typeof(Ee==null?void 0:Ee.elevation)=="number"?Ee.elevation:null;n.setSun(le!==null&&typeof(Ee==null?void 0:Ee.azimuth)=="number"?{elevation:le,azimuth:Ee.azimuth}:null),this.theme==="auto"&&n.setTheme(this.effectiveTheme());let Le=this.weather&&!this.dimmed&&q("weather")?Al(i,Et(i,this.weatherEntityId??r.settings.weather_entity),r.settings.rain_entity):null,be=Le?Il(Le,r.settings.weather_effects):null;this.cloud=(be==null?void 0:be.cloud)??0,this._sky=(le===null?0:Math.min(1,Math.max(0,(le+4)/16)))*(1-.45*this.cloud);let Jn=be?be.sky:(r.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&q("weather")?{...be??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:Jn}:null),this.watchLightning(!!(be!=null&&be.lightning)),this.applyTint();let dt=h.grid!==null||h.solar!==null||h.battery!==null||h.tariff!==null?h:null;JSON.stringify(dt)!==JSON.stringify(this._energy)&&(this._energy=dt);let Ki=c.some(k=>k.wallbox)?c.filter(k=>k.wallbox).reduce((k,T)=>k+T.power,0):null,Gi=r.floors.flatMap(k=>k.furniture.filter(T=>T.type==="inverter")).map(k=>{var Q,R;let T=(R=(Q=this.furnitureLinks)==null?void 0:Q.get(k.id))==null?void 0:R.power,L=T?pe(i.states[T]):null;return L===null?null:{name:k.name||$e(i,k.type),w:Math.max(0,L)}}).filter(k=>!!k);JSON.stringify(Gi)!==JSON.stringify(this._plants)&&(this._plants=Gi),Ki!==this._wallboxW&&(this._wallboxW=Ki),this.watchSolarDay([...new Set(K.flatMap(k=>k.dayIds))]);let Yi=q("energy_pro");this.watchMeters(Yi?r.energy.gas??null:null,Yi?r.energy.water??null:null),d&&(this.syncMs=this.syncMs*.8+(performance.now()-d)*.2)}listenReplay(){var t;(t=this.unlistenReplay)==null||t.call(this),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{var n;this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&((n=this.viewer)==null||n.flashDevices(e.pulses)),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){var a,s,l,d,c,u;let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.findIndex??=Do(t,n)).find(p=>p.entity===e);if(r){this.goTo(r);return}let i=((s=(a=t.entities)==null?void 0:a[e])==null?void 0:s.area_id)??((u=(c=t.devices)==null?void 0:c[((d=(l=t.entities)==null?void 0:l[e])==null?void 0:d.device_id)??""])==null?void 0:u.area_id)??null;for(let p of n.floors){let h=p.openings.find(_=>{var y;let x=(y=this.openingLinks)==null?void 0:y.get(_.id);return!!x&&[x.contact,x.tilt,x.contact2,x.tilt2,x.cover].includes(e)}),f=p.rooms.find(_=>_.points.length>=3&&(h?_.id===h.room_id:!!i&&_.area_id===i));if(!f)continue;let[m,g]=Ce(f.points);this.goTo({kind:"device",name:f.name,where:"",floorId:p.id,roomId:f.id,entity:e,icon:null,x:m,z:g,y:1});return}}now(){var e;return((e=this.replay)==null?void 0:e.t)??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,r=n?Gt(t,e.floors):this.openingLinks,i=n?wt(t,e.floors):this.furnitureLinks,a=ui(di(t,e,this.weatherEntityId)),s=zi(t,e,{openings:r,furniture:i,heat:!0,warnings:a,weatherEntityId:this.weatherEntityId}),l=q("auto_pro")?e.floors.flatMap(d=>d.furniture.filter(c=>c.type==="parking").flatMap(c=>[typeof c.entity=="string"?c.entity:null,c.car?mo(t,c).tracker:null]).filter(c=>!!c&&c.startsWith("device_tracker."))):[];return{entities:s,openings:[...r],furniture:[...i],low:this._low,cars:l,energy:q("energy_pro"),auto:q("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return w;let t=this.hass,n=t.states[e.entity],r=ke(t,n),i=V(e.entity)==="light"&&(n==null?void 0:n.state)==="on"&&r.endsWith("%")?`${I(t,"state_on")} \xB7 ${r}`:r,a=n!=null&&n.last_changed?I(t,"tt_since",{time:Lo(t,Date.parse(n.last_changed))}):"";return b`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${J(t,e.entity)}</span>
      <b>${a?`${i} \xB7 ${a}`:i}</b>
    </div>`}devicePowers(e,t){var r,i;let n=new Map;for(let a of t.floors)for(let s of a.furniture){if(s.type!=="inverter"&&s.type!=="home_battery")continue;let l=(i=(r=this.furnitureLinks)==null?void 0:r.get(s.id))==null?void 0:i.power,d=s.type==="home_battery"&&s.charge&&s.charge!=="none"?pe(e.states[s.charge]):null,c=l?pe(e.states[l],s.type==="home_battery"&&t.energy.battery_invert&&d===null):null;c!==null&&d!==null?c=Math.max(0,c)-Math.max(0,d):c===null&&d!==null&&(c=-Math.max(0,d)),c!==null&&n.set(s.id,c)}return n}detectionPins(e,t){var i,a;let n=[],r=new Set(((i=this.building)==null?void 0:i.floors.flatMap(s=>s.placements.filter(l=>l.detect_pins===!1).map(l=>l.entity_id)))??[]);for(let s of t){if(!((a=s.model)!=null&&a.startsWith("camera"))||r.has(s.id))continue;let l=this.now(),d=Ye(e,s.id).filter(m=>{let g=e.states[m];return g?g.state==="on"?!0:g.state==="off"&&!!g.last_changed&&l-Date.parse(g.last_changed)<vh:!1}),c=new Map;for(let m of d){let g=Dr(e,m);c.has(g)||c.set(g,m)}c.size>1&&c.delete("motion");let u=(s.rotation??0)*Math.PI/180,p=[-Math.sin(u),Math.cos(u)],h=s.model==="camera_ceiling",f=0;for(let[m,g]of c){let _=e.states[g],x=_!=null&&_.last_changed?Lo(e,Date.parse(_.last_changed)):"";n.push({id:`detect:${g}`,floorId:s.floorId,roomId:s.roomId,x:s.x+(h?0:p[0]*1.1),z:s.z+(h?0:p[1]*1.1),y:1.4+.4*f++,icon:$d[m]??$d.motion,name:J(e,g),text:`${I(e,`detect_${m}`)}${x?` \xB7 ${x}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let r=gi(t);if(!r)return null;let i=Math.abs(n)<5,a=t.settings.outage_entity;return a&&Mo(e.states[a])?{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:wh,name:I(e,"holo_grid"),text:I(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:yh,name:I(e,"holo_grid"),text:i?ce(e,0):`${I(e,n<0?"energy_grid_export":"energy_grid_import")} ${ce(e,Math.abs(n))}`,active:!i,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(a=>!!a),r=this.replay?"":n.join(",");if(r===this.meterKey)return;if(this.meterKey=r,clearInterval(this.meterTimer),this.meterTimer=void 0,!r){this._meters=null;return}let i=async()=>{if(!this.hass||document.hidden)return;let a=await gc(this.hass,n);this.meterKey===r&&a&&(this._meters={gas:e?a.get(e)??null:null,water:t?a.get(t)??null:null})};i(),this.meterTimer=setInterval(()=>{i()},3e5)}poolPipes(e){var i,a;let t=[],n=[],r=new Map(this.scene.filter(s=>s.kind==="pipeflow").map(s=>[s.areaId,s.flows]));for(let{floor:s,area:l}of id(e.floors)){let d=l.pool;if(!((i=d.pipes)!=null&&i.length)&&!((a=d.joints)!=null&&a.length))continue;let c=d.ports??[],u=new Map(Object.entries(r.get(l.id)??{})),p=Wo(e,s,l),h=(f,m)=>Ii(f,m,l,s);t.push(...ad(d.pipes??[],u,p,h));for(let f of c){if(f.kind!=="inlet")continue;let m=p(`port:${f.id}`),g=m&&Ti(l,[m.x,m.z]);if(!m||!g)continue;let _=(d.pipes??[]).find(y=>y.to===`port:${f.id}`),x=_?u.get(_.id):void 0;n.push({floorId:s.id,points:[[m.x+g[0]*.03,m.y,m.z+g[1]*.03],[m.x-g[0]*.09,m.y,m.z-g[1]*.09]],radius:.035,water:x!=null&&x.active?x.color:null,fittings:[]})}for(let f of d.joints??[]){if(f.kind!=="wall"&&f.kind!=="floor")continue;let m=p(`joint:${f.id}:inside`),g=p(`joint:${f.id}:outside`),_=f.kind==="floor"?.03:m.y;n.push({floorId:s.id,points:[[m.x,_,m.z],[g.x,g.y,g.z]],radius:.05,water:null,fittings:[]})}for(let f of d.pipes??[]){let m=Ii(Kn(f,p),f,l,s);if(m.length<2)continue;let g=u.get(f.id),_=[],x=No(m);for(let[y,S]of[[f.from,.04],[f.to,x-.04]]){let z=y.startsWith("dev:")||y.startsWith("joint:")?qo(m,S):null;z&&_.push({kind:"sleeve",p:z.p,dir:z.dir})}for(let y of f.fittings??[]){let S=qo(m,y.at);S&&_.push({kind:y.kind,p:S.p,dir:S.dir,open:y.open!==!1})}n.push({floorId:f.floor_id,points:m,radius:.025,water:g!=null&&g.active?g.color??Ai:null,fittings:_})}}return{flows:t,tubes:n}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let i=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(i===this.holoIds)return;this.holoIds=i,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let r=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let i=await $c(this.hass,e);this.holoIds===n&&(this._rows=i)};r(),this.holoTimer=setInterval(()=>{r()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&r()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,r,i,a){var G,P,M,$;(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let s=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),d=((G=this._holos[e])==null?void 0:G.kind)==="main";if(!s){d&&this._holoOn&&(this._holoOn=!1);return}d&&r!==this._holoOn&&(this._holoOn=r);let c=this._holos[e],u=(((P=this.building)==null?void 0:P.settings.roof.hologram)??Ge).device_min_w??0;(c==null?void 0:c.kind)==="device"&&u>0&&(c.w??0)<u&&(r=!1);let p=!r;if(s.hidden!==p&&(s.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!r)return;if((c==null?void 0:c.kind)==="bin"){let E=Math.max(.6,i*.8),C=!!((M=c.bin)!=null&&M.icon)&&i*.8<.62;s.classList.contains("fp3d-holo-far")!==C&&(s.classList.toggle("fp3d-holo-far",C),this.holoSizes.delete(e)),C&&(E=1);let j=this.holoSizes.get(e),N=performance.now();(!j||N-j.at>2e3)&&(j={w:s.offsetWidth||90,h:s.offsetHeight||40,at:N},this.holoSizes.set(e,j));let X=j.w*E,H=j.h*E,K=n;for(let W=0;W<6;W++){let se=this.holoBoxes.find(F=>t-X/2<F.x1+3&&t+X/2>F.x0-3&&K-H<F.y1+3&&K>F.y0-3);if(!se)break;K=se.y0-4}this.holoBoxes.push({i:e,x0:t-X/2,x1:t+X/2,y0:K-H,y1:K}),s.style.transform=`translate(${t.toFixed(1)}px, ${K.toFixed(1)}px) scale(${E.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=i*.8,f=34*h,m=46*h,g=t+(a?f:-f),_=n-m,x=this.holoSizes.get(e),y=performance.now();(!x||y-x.at>2e3)&&(x={w:s.offsetWidth||184,h:s.offsetHeight||90,at:y},this.holoSizes.set(e,x));let S=x.w*h,z=x.h*h,A=a?g:g-S,v=A+S;for(let E=0;E<6;E++){let C=this.holoBoxes.find(j=>A<j.x1+4&&v>j.x0-4&&_-z<j.y1+4&&_>j.y0-4);if(!C)break;_=C.y0-6}this.holoBoxes.push({i:e,x0:A,x1:v,y0:_-z,y1:_});let O=a||((($=this.building)==null?void 0:$.settings.roof.hologram)??Ge).mirror!==!1;if(s.style.transform=O?`translate(${g.toFixed(1)}px, ${_.toFixed(1)}px) scale(${(a?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${A.toFixed(1)}px, ${_.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let E=l.firstElementChild,C=l.lastElementChild;E==null||E.setAttribute("x1",t.toFixed(1)),E==null||E.setAttribute("y1",n.toFixed(1)),E==null||E.setAttribute("x2",g.toFixed(1)),E==null||E.setAttribute("y2",_.toFixed(1)),C==null||C.setAttribute("cx",t.toFixed(1)),C==null||C.setAttribute("cy",n.toFixed(1))}}renderHologram(){var a,s;let e=this._energy,t=()=>this._holos.map((l,d)=>l.kind==="bin"?this.renderBinCard(l,d):w),n=this._holos.some(l=>l.kind==="module"||l.tag);if(!(n||q("energy_pro")||q("sound")||q("auto_pro")||q("pool")||q("household"))||this.roomId&&!(((a=this.building)==null?void 0:a.settings.roof.hologram)??Ge).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return q("household")||n?t():w;let r=this.floorId===null||(((s=this.building)==null?void 0:s.floors.length)??0)<=1,i=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&r;return this._holos.map((l,d)=>l.kind==="module"?this.renderModuleCard(l,d):l.kind==="bin"?this.renderBinCard(l,d):l.kind==="car"?this.renderCarCard(l,d):l.kind==="media"?this.renderMediaCard(l,d):l.kind==="device"?this.renderDeviceCard(l,d):i?this.renderHoloCard(l,d,e):w)}renderBinCard(e,t){let n=e.bin,r=n.lines.length===1?n.lines[0]:null,i=n.lines.map(a=>`${a.name}: ${a.when}`).join(", ");return b`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${r!=null&&r.out?"fp3d-holo-out":""} ${r?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${i} style="--bin:${n.lines[0].color}">
      ${n.icon?b`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${n.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:w}
      ${r?b`<div class="fp3d-holo-body"><b>${r.when}</b><span>${r.name}</span></div>`:b`<div class="fp3d-holo-body fp3d-holo-lines">
            ${n.lines.map(a=>b`<div class="fp3d-holo-line ${a.soon?"":"fp3d-holo-line-later"} ${a.out?"fp3d-holo-line-out":""}" style="--bin:${a.color}"><b>${a.when}</b><span>${a.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,t){let n=this.hass,r=f=>I(n,f),i=e.car,a=!this.mediaFolded.has(i.spot),s=()=>{this.mediaFolded.has(i.spot)?this.mediaFolded.delete(i.spot):this.mediaFolded.add(i.spot),this.requestUpdate()},l=(f,m,g)=>{n.callService(f,m,{entity_id:g})},d=(f,m)=>f.startsWith("climate.")?l("climate",m?"turn_on":"turn_off",f):l("homeassistant",m?"turn_on":"turn_off",f),c=()=>{if(!i.lock)return;let f=i.lock.startsWith("lock.");if(i.locked){if(!confirm(r("car_unlock_confirm")))return;f?l("lock","unlock",i.lock):l("homeassistant","turn_off",i.lock)}else f?l("lock","lock",i.lock):l("homeassistant","turn_on",i.lock)},u=i.soc===null?"#37e0ff":i.soc>=50?"#4dff80":i.soc>=20?"#ffcc40":"#ff4d40",p=!!i.lock&&/^(lock|input_boolean|switch)\./.test(i.lock),h=!!i.climate&&/^(climate|switch|input_boolean)\./.test(i.climate);return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${i.charging?`\u26A1 ${r("car_charging_short")}`:i.locked===null?"":i.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${u}">${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b>
            <span>${i.range!==null?`${ie(n,i.range,0)} ${i.rangeUnit}`:""}${i.charging&&i.chargingW?` \xB7 ${ce(n,i.chargingW)}`:""}</span>
          </div>
          ${i.soc!==null?b`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,i.soc))}%;background:${u}"></i></div>`:w}
          ${a&&!this.ro&&(p||h||i.charge)?b`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?b`<button title=${i.locked?r("car_unlock_btn"):r("car_lock_btn")} @click=${c}>${i.locked?"\u{1F512}":"\u{1F513}"}</button>`:w}
                ${h?b`<button class=${i.climateOn?"fp3d-holo-on":""} title=${r("car_climate")} @click=${()=>d(i.climate,!i.climateOn)}>❄</button>`:w}
                ${i.charge?b`<button class=${i.charging?"fp3d-holo-on":""} title=${r("car_charging")} @click=${()=>d(i.charge,!i.charging)}>⚡</button>`:w}
              </div>`:w}
        </div>
      </div>`}renderModuleCard(e,t){var h,f,m;let n=e.module,r=!this.mediaFolded.has(n.id),i=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},a=g=>g?`color:${g}`:"",s=this._low||this.clientWidth<600,l=jo(n.rows,s),d=jo(n.cells,s),c=n.chain?jo(n.chain.items,s):[],u=n.spark&&n.spark.values.length>1&&!(s&&n.spark.minor)?n.spark:null,p=!!(n.chain||(h=n.cells)!=null&&h.length||n.status);return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${p?"fp3d-holo-mod-wide":""} ${this.cardPing===n.id?"fp3d-holo-ping":""} ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${i}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live" style=${a(n.liveColor)}>${n.live??""}</span></div>
          ${n.status?b`<div class="fp3d-holo-status" style=${n.status.color?`--st:${n.status.color}`:""}>
                ${n.status.icon?b`<i>${n.status.icon}</i>`:w}<b>${n.status.text}</b>${n.status.since?b`<span>${n.status.since}</span>`:w}
              </div>`:w}
          ${n.main?b`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${a(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span>
                ${n.main.side?b`<em style=${a(n.main.side.color)}><b>${n.main.side.text}</b>${n.main.side.sub?b`<small>${n.main.side.sub}</small>`:w}</em>`:w}
              </div>`:w}
          ${r&&c.length?b`<div class="fp3d-holo-chain">
                  ${c.map((g,_)=>b`${_?b`<s>→</s>`:w}<div><small>${g.label}</small><b style=${a(g.color)}>${g.value}</b></div>`)}
                </div>
                ${n.chain.note?b`<div class="fp3d-holo-chain-note" style=${a(n.chain.noteColor)}>${n.chain.note}</div>`:w}`:w}
          ${r?l.map(g=>b`<div class="fp3d-holo-mrow"><span>${g.label}</span><b style=${a(g.color)}>${g.value}</b>${g.at!==void 0?g.fill?b`<i class="fp3d-holo-mrow-fill"><s style="width:${g.at}%;background:${g.color??"#37e0ff"}"></s></i>`:b`<i><em style="left:${g.at}%;background:${g.color??"#37e0ff"};color:${g.color??"#37e0ff"}"></em></i>`:b`<i class="fp3d-holo-mrow-none"></i>`}</div>`):w}
          ${r&&d.length?b`<div class="fp3d-holo-cells">${d.map(g=>b`<div><small>${g.label}</small><b style=${a(g.color)}>${g.value}</b></div>`)}</div>`:w}
          ${r&&n.hint?b`<div class="fp3d-holo-hint" style=${n.hint.color?`--hint:${n.hint.color}`:""}>${n.hint.text}</div>`:w}
          ${r?(n.lines??[]).map(g=>b`<div class="fp3d-holo-mline">${g}</div>`):w}
          ${r&&u?b`${u.label?b`<div class="fp3d-holo-spark-label">${u.label}</div>`:w}${bh(u.values,u.color??"#ffb347")}`:w}
          ${r&&((f=n.chips)!=null&&f.length)?b`<div class="fp3d-holo-chips">
                ${n.chips.map(g=>b`<div class="fp3d-holo-mline">${g.title}</div>
                    <div class="fp3d-holo-chip-row">${g.items.map(_=>b`<button class=${_.on?"fp3d-holo-on":""} title=${_.title??""} @click=${()=>_.onTap()}>${_.label}</button>`)}</div>`)}
              </div>`:w}
          ${r&&!this.ro&&((m=n.buttons)!=null&&m.length)?b`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(g=>b`<button class=${g.on?"fp3d-holo-on":""} title=${g.title??""} @click=${()=>g.onTap()}>${g.label}</button>`)}</div>`:w}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){var y,S,z;let n=this.hass,r=A=>I(n,A),i=e.media,a=!this.mediaFolded.has(i.id),s=()=>{this.mediaFolded.has(i.id)?this.mediaFolded.delete(i.id):this.mediaFolded.add(i.id),this.requestUpdate()},l=(A,v={})=>{Promise.resolve(n.callService("media_player",A,{entity_id:i.id,...v})).catch(O=>this.serviceFailed(`media_player.${A}`,O))},d={down:A=>A.currentTarget.dataset.pressed=String(A.pointerId),up:A=>v=>{let O=v.currentTarget;O.dataset.pressed===String(v.pointerId)&&(delete O.dataset.pressed,v.stopPropagation(),O.dataset.acted=String(Date.now()),A())},key:A=>v=>{let O=v.currentTarget;Date.now()-Number(O.dataset.acted??0)<700||(O.dataset.acted=String(Date.now()),A())}},c=(y=n.states[i.id])==null?void 0:y.attributes.supported_features,u=A=>typeof c!="number"||(c&A)!==0,p=this.mediaIntent.get(i.id);p&&(p.playing===i.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(i.id);let h=((S=this.mediaIntent.get(i.id))==null?void 0:S.playing)??i.playing,f=u(16384)||u(1),m=()=>{this.mediaIntent.set(i.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":u(16384)?"media_play":"media_play_pause")},g=this.mediaVolume.get(i.id);g&&(Math.abs(g.v-i.volume)<=2||Date.now()-g.at>3e4)&&this.mediaVolume.delete(i.id);let _=((z=this.mediaVolume.get(i.id))==null?void 0:z.v)??i.volume,x=(A,v)=>{this.mediaVolume.set(i.id,{v:A,at:Date.now()}),this.requestUpdate(),(v||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:A/100}))};return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${r("holo_media_playing")}`:r("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${i.picture?b`<img class="fp3d-holo-cover" src=${i.picture} alt="" />`:b`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${i.title}</b>${i.artist?b`<span>${i.artist}</span>`:w}</div>
        </div>
        ${a&&!this.ro?b`<div class="fp3d-holo-media-controls">
                <button aria-label=${r("previous")} ?disabled=${!u(16)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_previous_track"))} @click=${d.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${r("play_pause")} ?disabled=${h?!u(1):!f} @pointerdown=${d.down} @pointerup=${d.up(m)} @click=${d.key(m)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${r("next")} ?disabled=${!u(32)} @pointerdown=${d.down} @pointerup=${d.up(()=>l("media_next_track"))} @click=${d.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(_)}
                  aria-label=${r("volume")}
                  @input=${A=>x(Number(A.target.value),!1)}
                  @change=${A=>x(Number(A.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${_} %</span>
              </div>`:w}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,r=d=>I(n,d),i=!this.holoFolded.has(t),a=this.dayOf(e),s=a&&a.curve.length>1?bi(a.curve,a.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ce(n,e.w??0)}</b><span>${r("holo_dev_now")}</span></div>
        ${i&&a?b`<div class="fp3d-holo-sub">${r("holo_today")} <b>${ie(n,a.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${ce(n,a.peak)}</b></div>`:w}
        ${i&&s?bt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${s.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${s.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${s.endX}" cy="${s.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:w}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?kc(t,new Date(this.now())):null}renderHoloCard(e,t,n){var g,_;let r=this.hass,i=x=>I(r,x),a=!this.holoFolded.has(t),s=this.dayOf(e),l=e.kind==="main",d=l&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,c=s&&s.curve.length>1?bi(s.curve,s.peak):null,u=new Date(this.now()),p=(u.getHours()+u.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},f=l?n.solar??n.consumption??0:e.w??0,m=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return b`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${ce(r,f)}</b><span>${i(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${a?b`${l&&this._plants.length>1?b`<div class="fp3d-holo-plants">${this._plants.map(x=>b`<span>${x.name}</span><b>${ce(r,x.w)}</b>`)}</div>`:w}
              ${s?b`<div class="fp3d-holo-sub">${i("holo_today")} <b>${ie(r,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${ce(r,s.peak)}</b></div>`:w}
              ${c?bt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${c.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${c.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${c.endX}" cy="${c.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:w}
              <div class="fp3d-holo-grid">
                ${m?b`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${i("holo_battery")}<br /><b>${m.soc!==null?`${Math.round(m.soc)} %`:ce(r,Math.abs(m.w??0))}</b>
                      ${m.w!==null&&Math.abs(m.w)>=5?b`<span>${m.w<0?"\u25B2":"\u25BC"} ${ce(r,Math.abs(m.w))}</span>`:w}
                    </div>`:w}
                ${l&&n.grid!==null?b`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${i("holo_grid")}<br /><b>${ce(r,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":i(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:w}
                ${l&&n.consumption!==null?b`<div class="fp3d-holo-cell fp3d-holo-house">${i("holo_house")}<br /><b>${ce(r,n.consumption)}</b></div>`:w}
                ${l&&this._wallboxW!==null?b`<div class="fp3d-holo-cell fp3d-holo-wb">${i("holo_wallbox")}<br /><b>${ce(r,this._wallboxW)}</b></div>`:w}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?b`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?b`<span>🔥 ${i("holo_gas")} <b>${ie(r,this._meters.gas,this._meters.gas<10?2:1)} ${kd(r,(g=this.building)==null?void 0:g.energy.gas)}</b></span>`:w}
                    ${this._meters.water!==null?b`<span>💧 ${i("holo_water")} <b>${_h(r,this._meters.water,kd(r,(_=this.building)==null?void 0:_.energy.water))}</b></span>`:w}
                    <span>${i("holo_today_short")}</span>
                  </div>`:w}
              ${d!==null?b`<div class="fp3d-holo-bar"><div style="width:${d}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${i("holo_autarky")}</span><b>${d} %</b></div>`:w}`:w}
      </div>
    </div>`}setAlerts(e){let t=e.map(a=>`${a.kind}:${a.entity}`),n=this.ro?[]:e.filter((a,s)=>!this.seenAlerts.has(t[s]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(a=>`${a.kind}:${a.entity}`).join()&&(this._alerts=e);let r=e.some(a=>!a.quiet);if(r&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!r||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let i=this.directorSettings();if(i!=null&&i.alerts){let a=n[0];if(this.directing.offer({kind:"alert",key:`alert:${a.kind}:${a.entity}`,entity:a.entity},Date.now(),i.hold??30)){this.directorShow(()=>this.jumpTo(a));return}}this.alertJump&&this.jumpTo(n[0])}directorSettings(){var t;let e=(t=this.building)==null?void 0:t.settings.director;return this.director&&!this.ro&&q("camera_cockpit")&&_d(e)?e:null}direct(){let e=this.directorSettings(),t=this.hass,n=this.building;if(!e||!t||!n){this.directorSrc&&(this.directing=new Yn,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let r=Date.now(),i=e.hold??30,a=`${JSON.stringify(e)}|${n.floors.map(d=>d.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==t.entities||this.directorSrc.building!==n||this.directorSrc.sig!==a){let d=[...new Set(n.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],c=e.motion??"off";this.directorSrc={registry:t.entities,building:n,sig:a,bells:(e.doorbell?vd(t,e.doorbell_entity):[]).map(u=>({id:u,camera:wd(t,u,d,e.doorbell_camera)})),motion:c==="off"?[]:d.filter(u=>u.startsWith("camera.")).flatMap(u=>Ye(t,u).filter(p=>c==="all"||Dr(t,p)==="person").map(p=>({sensor:p,cam:u})))}}let s=[];for(let d of this.directorSrc.bells)this.directing.edge(d.id,t.states[d.id],(c,u)=>ji(c,u,r))&&s.push({kind:"doorbell",key:`bell:${d.id}`,entity:d.id,camera:d.camera});for(let d of e.triggers??[])d.entity&&this.directing.edge(`trigger:${d.entity}`,t.states[d.entity],(c,u)=>yd(c,u,r))&&s.push({kind:"trigger",key:`trigger:${d.entity}`,entity:d.entity,camera:d.camera});for(let d of this.directorSrc.motion)this.directing.edge(d.sensor,t.states[d.sensor],(c,u)=>(c==null?void 0:c.state)==="off"&&(u==null?void 0:u.state)==="on")&&s.push({kind:"motion",key:`cam:${d.cam}`,entity:d.sensor,camera:d.cam});if(e.appliances){for(let[d,c]of this.appliances)this.directing.stopped(`app:${d}`,c.running,r)&&s.push({kind:"appliance",key:`app:${d}`,entity:d});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];s.sort((d,c)=>l.indexOf(d.kind)-l.indexOf(c.kind));for(let d of s)if(this.directing.offer(d,r,i)){this.directorShow(()=>this.directorGo(d));break}}directorShow(e){let t=this.viewer;if(!t)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:t.getView()}),t.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(e){let t=this.building;if(t){if(e.camera&&t.floors.some(n=>n.placements.some(r=>r.entity_id===e.camera))){let n=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(e.kind==="appliance"){let n=this.appliances.get(e.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),t=this.directorBack;e&&(this.directorBack=null,!(!e.back||!t)&&(this._through&&(this._through=null),this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId?setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60):this.roomId&&t.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:null}),60),setTimeout(()=>{var n,r;(n=this.viewer)==null||n.flyTo(t.view),(r=this.viewer)==null||r.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){var c;let n=this.building,r=this.hass,i=n==null?void 0:n.floors.find(u=>u.id===e),a=i?Me(i).find(u=>u.id===t):void 0;if(!n||!r||!i||!a||this.ro)return;let s=new Set(_e(r,a.area_id).filter(u=>V(u)==="light"));for(let u of i.placements)V(u.entity_id)==="light"&&Y([u.x,u.z],a.points)&&s.add(u.entity_id);for(let u of i.furniture){let p=(c=this.furnitureLinks.get(u.id))==null?void 0:c.entity;p&&_r(u.type)&&Y([u.x,u.z],a.points)&&s.add(p)}let l=[...s].filter(u=>!this.confirmSet.has(u));if(!l.length)return;let d=l.some(u=>{var p;return((p=r.states[u])==null?void 0:p.state)==="on"});r.callService("homeassistant",d?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let r=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let s=this.heatMode,l=Ic(n,t,s);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,r=new Map([...l].map(([d,c])=>[d,Ac(s,c)]))}let i=new Map;if(this.heatMode==="values")for(let s of t.floors)for(let l of Me(s)){let d=Ze(n,s,l,"temperature"),c=Ze(n,s,l,"humidity"),u=Ze(n,s,l,"co2"),p=[d!==null?`${ie(n,Ut(n,d),1)} ${Fe(n)}`:null,c!==null?`${ie(n,c,0)} %`:null,u!==null?`${ie(n,u,0)} ppm`:null].filter(h=>!!h);p.length&&i.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){r??=new Map;let s=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let d=cc(l).map(c=>c*s);if(l.roomId)r.set(l.roomId,d);else for(let c of t.floors)if(!l.floorId||c.id===l.floorId)for(let u of c.rooms)r.set(u.id,d)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(r??=new Map,r.set(this.roomFlash.roomId,[.9,.95,1]));let a=r?[...r].map(([s,l])=>`${s}:${l.map(d=>d.toFixed(2)).join(",")}`).join(";"):"";a!==this.tintSig&&(this.tintSig=a,e.setRoomTint(r))}furnitureMarkers(e,t,n,r){var x,y,S,z;let i=[],a=[],s=new Map,l=new Map,d=new Set(n),c=q("household"),u=[];this.binHolos=[];let p=new Map(this.scene.filter(A=>A.kind==="glow").map(A=>[A.furnitureId,A]));for(let A of t.floors)for(let v of A.furniture){let O=this.furnitureLinks.get(v.id),G=this.stateFaces(e,v);if(G.length&&s.set(v.id,{color:G[0].color,level:G[0].level,faces:G}),_r(v.type)){i.push(this.lampMarker(e,A,v,(O==null?void 0:O.entity)??null));let D=v.type==="lamp_ceiling_fan"?Md(v):null;D&&i.push(this.lampMarker(e,A,v,D,!0));continue}if(v.type==="wall_switch"){let D=Wt(v);D.forEach((de,Ee)=>de&&l.set(`${v.id}#${Ee}`,`ws:${de}`));let re=co(v);s.set(v.id,{color:[0,0,0],level:0,keys:D.map(de=>kr(e,de)?kh:null),switchRing:re?yt(e.states[re]):null});continue}if(v.type==="wall_socket"){let D=typeof v.run_w=="number"&&v.run_w>0?v.run_w:5,re=null,de=null,Ee=Bt(v).map((le,Le)=>{le.entity?l.set(`${v.id}#${Le}`,`ws:${le.entity}`):le.power&&l.set(`${v.id}#${Le}`,le.power);let be=le.power?pe(e.states[le.power]):null;return le.power&&be!==null&&(re=(re??0)+Math.max(0,be),de??=le.power,r.has(le.power)||(r.add(le.power),a.push({id:le.entity??le.power,powerEntity:le.power,floorId:A.id,x:v.x,z:v.z,power:Math.max(0,be)}))),(le.entity?kr(e,le.entity):(be??0)>D)?$h:null});if(s.set(v.id,{color:[0,0,0],level:0,keys:Ee}),de!==null&&re!==null&&!n.has(de)){let le=re;n.add(de);let Le=A.rooms.find(be=>be.points.length>=3&&Y([v.x,v.z],be.points));i.push({id:de,floorId:A.id,roomId:(Le==null?void 0:Le.id)??null,x:v.x,z:v.z,y:Pd(v)+fe(A,v),icon:Qt(v.icon||"power-socket-eu"),name:v.name||$e(e,v.type),ownName:v.name||void 0,showName:!!v.show_name,text:ce(e,le),active:le>D,unavailable:!1,glow:null,furnitureId:v.id,show:v.marker??void 0,fromFurniture:!0})}continue}let P=p.get(v.id);P&&s.set(v.id,{color:P.color,level:P.level});let M=(v.type==="plant"||ei(v.type))&&!!v.moisture&&v.moisture!=="none";if(v.type==="waste_bin"||v.type==="mailbox"||M){let D=c?this.householdState(e,A,v):null;D!=null&&D.screen&&s.set(v.id,D.screen),D!=null&&D.marker&&i.push(D.marker);let re=v.type==="waste_bin"?v.bin_source:v.type==="mailbox"?v.entity:v.moisture;if(c&&typeof re=="string"&&re!=="none"&&l.set(v.id,`hh:${re}#${v.id}`),D!=null&&D.item&&u.push(D.item),!M)continue}if(c){let D=Yl(v,e);D.length&&!s.has(v.id)&&s.set(v.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let re of D){let de=v.name||$e(e,v.type);u.push({icon:"wrench-outline",text:re===v.service?I(e,"hh_service",{name:de}):I(e,"hh_service2",{name:de,what:J(e,re)}),entity:re})}(v.type==="fridge"||v.type==="fridge_smart")&&Po(v,e)&&(s.set(v.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),u.push({icon:"fridge-alert-outline",text:I(e,"hh_fridge_open",{name:v.name||$e(e,v.type)}),entity:at(v)[0]??null}))}let E=v.type==="parking"&&q("auto_pro")&&!!v.car?In(e,v):null,C=v.type==="washer"||v.type==="dryer"||v.type==="dishwasher",j=v.type==="home_battery"?v.soc:v.type==="wallbox"?v.status:v.type==="parking"&&E?((x=v.car)==null?void 0:x.device)??E.entities.soc:c&&C?v.remaining??null:null,N=j&&j!=="none"?j:null,X=v.extra&&v.extra!=="none"&&e.states[v.extra]?v.extra:null,H=X?ke(e,e.states[X]):"",K=D=>H?D?`${D} \xB7 ${H}`:H:D,W=O??(N||X?{entity:null,power:null}:void 0);if(!W)continue;let se=v.type==="home_battery"?N??W.entity??W.power:W.entity??W.power??N??X;l.set(v.id,se);let F=W.entity?e.states[W.entity]:void 0,B=v.type==="water_heater"?rs(e,Mn(e,{entity:W.entity})):null,oe=v.type==="access_point"?Na(e,kn(e,{entity:W.entity})):null,Ae=v.type==="meter"?t.energy.grid_invert&&!v.export:v.type==="home_battery"?t.energy.battery_invert&&!v.charge:!1,me=W.power?pe(e.states[W.power],Ae):null,Ct=v.type==="home_battery"&&v.charge&&v.charge!=="none"?v.charge:v.type==="meter"&&v.export&&v.export!=="none"?v.export:null,Rt=Ct?pe(e.states[Ct]):null;Rt!==null&&(me=Math.max(0,me??0)-Math.max(0,Rt)),W.power&&me!==null&&!r.has(W.power)&&(r.add(W.power),a.push({id:se,powerEntity:W.power,floorId:A.id,x:v.x,z:v.z,power:Math.max(0,me),wallbox:v.type==="wallbox"||void 0}));let pn=typeof v.run_w=="number"&&v.run_w>0?v.run_w:10,ze=typeof v.run_w=="number"&&v.run_w>0&&me!==null&&me<=v.run_w,lt=(me??0)>pn||(F==null?void 0:F.state)==="on"||(F==null?void 0:F.state)==="running"||Er(F)&&qe(F);C&&this.appliances.set(v.id,{floorId:A.id,x:v.x,z:v.z,entity:W.entity??W.power??v.id,running:lt});let Ue=null;if(c&&C){let D=v.remaining&&v.remaining!=="none"?e.states[v.remaining]:void 0,re=ai(D),de=lt||!W.power&&!W.entity&&(re??0)>0,Ee=at(v),le=Jn=>Ee.some(Ui=>{let dt=e.states[Ui];return!!(dt!=null&&dt.last_changed)&&Date.parse(dt.last_changed)>Jn}),Le=this.finished.update(v.id,de,le),be=v.name||(W.entity?J(e,W.entity):$e(e,v.type));de?(lt||s.set(v.id,Ed(v.type)),re!==null&&!li(F,W.power?me:null,pn)&&(Ue=I(e,"hh_left",{t:Gl(re)}),u.push({icon:"timer-outline",text:`${be}: ${Ue}`,entity:v.remaining??W.entity}))):(si(F)||si(D)||Le)&&(Ue=I(e,"hh_done"),s.set(v.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),u.push({icon:"check-circle-outline",text:I(e,"hh_finished",{name:be}),entity:W.entity??W.power}))}if(E&&cn(e,v)){let D=[];if(E.soc!==null){let re=E.soc>=50?[.3,1,.5]:E.soc>=20?[1,.8,.25]:[1,.3,.25];D.push({part:"band",color:re,level:E.charging?1:.6})}if(E.locked===!1&&D.push({part:"lights",color:[1,.42,.02],level:1}),E.climateOn){let re=E.entities.climate?e.states[E.entities.climate]:void 0,de=!!re&&(re.attributes.hvac_action==="cooling"||re.state==="cool");D.push({part:"cabin",color:de?[.45,.8,1]:[1,.55,.22],level:.35})}D.length&&s.set(`${v.id}:vehicle`,{color:D[0].color,level:D[0].level,faces:D})}if(v.type==="radiator"&&(F&&V(F.entity_id)==="climate"||v.heat_sensor)){let D=F&&V(F.entity_id)==="climate"?F.attributes:null;if(Hs(e,v.heat_sensor)??(D==null?void 0:D.hvac_action)==="heating"){let de=D&&typeof D.temperature=="number"&&typeof D.current_temperature=="number"?D.temperature-D.current_temperature:1;s.set(v.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,de))})}else p.has(v.id)&&s.delete(v.id)}else if(oe){let D=qa(oe);D&&s.set(v.id,{color:D,level:1,apRing:D})}else if(B){let D=os(v);B.on&&s.set(v.id,{color:B.heating?[1,.45,.12]:[.25,.85,1],level:B.heating?1:.55,plain:!0,dots:{n:D,lit:Math.max(0,Math.min(D,Math.round(B.showers??0))),color:[.35,.9,1]}})}else if(v.type==="ac_unit"&&F&&V(F.entity_id)==="climate"){let D=Os(F);D&&s.set(v.id,D)}else if((v.type==="washer"||v.type==="dryer"||v.type==="dishwasher")&&lt)s.set(v.id,Ed(v.type));else if(v.type==="stove"||hr(v.type)){let D=Ls(F,lt);D>0&&s.set(v.id,{color:[1,.05,.01],level:D,faces:[{part:"burners",color:[1,.05,.01],level:D}]})}let Ft=xe(v.type),hn=!!Ft&&!Ft.light&&Ft.parts.some(D=>D.glow);if(F&&hn&&q("sound")&&V(F.entity_id)==="media"&&F.state==="playing"&&!fo(v.type)){let D=typeof F.attributes.volume_level=="number"?F.attributes.volume_level:.5;s.set(v.id,{color:Cr(F)??[.22,.88,1],level:.5+.5*D,ring:!0,plain:!0})}if(F&&fo(v.type)&&!hr(v.type)&&!(io(v.type)&&V(F.entity_id)==="cover")){let D=q("screens"),re=V(F.entity_id)==="light"?yt(F):null,de=V(F.entity_id)==="media"&&["playing","on","paused","idle"].includes(F.state),Ee=D&&V(F.entity_id)==="media"?Cr(F):re?re.color:qe(F)||de?[.22,.88,1]:null,le=D&&V(F.entity_id)==="media"?F.attributes.entity_picture??null:null;Ee&&s.set(v.id,{color:Ee,level:F.state==="playing"?1:.6,picture:le,ring:hn&&q("sound")&&F.state==="playing"})}if(d.has(se))continue;n.add(se);let Qn=W.entity?V(W.entity):null,Ht=A.rooms.find(D=>D.points.length>=3&&Y([v.x,v.z],D.points)),ct=F&&Ga(v.type)&&F.entity_id.startsWith("water_heater.")?Ph(e,F):null;i.push({id:se,floorId:A.id,roomId:(Ht==null?void 0:Ht.id)??null,x:v.x,z:v.z,y:Pd(v)+fe(A,v),icon:v.icon?Qt(v.icon):ct?Qt("water-boiler"):Jt(Qn??"switch"),name:v.name||(oe&&W.entity?ro(e,W.entity):W.entity?J(e,W.entity):$e(e,v.type)),ownName:v.name||void 0,showName:!!v.show_name,text:K(Ue??(oe?this.apText(e,oe):B?this.heaterText(e,B):E?this.carText(e,E,!!F&&!Ho.has(F.state.toLowerCase())):v.type==="home_battery"?this.batteryText(e,N,me):v.type==="wallbox"?this.wallboxText(e,N,me):v.type==="meter"?this.meterText(e,me):ct?ct.text:F?ke(e,F):ze?I(e,"pin_standby"):me!==null?ce(e,Math.max(0,me)):"")),active:Ue?!0:oe?oe.status==="up":B?B.heating:E?E.charging:ct?ct.on:F?qe(F):(me??0)>(typeof v.run_w=="number"&&v.run_w>0?v.run_w:5),unavailable:F?Z(F):!1,glow:null,furnitureId:v.id,energyDevice:v.type==="inverter"||v.type==="home_battery"||v.type==="wallbox"||v.type==="meter"||!!E||!!X,...ze?{standby:ze}:{},show:v.marker??(E||Ue?"always":void 0),fromFurniture:!0})}let h=t.settings.household;if(h!=null&&h.bin_next_only||typeof(h==null?void 0:h.bin_days)=="number"){let A=ql(this.binHolos.filter(v=>!v.icon),{nextOnly:h.bin_next_only,ahead:h.bin_days});this.binHolos=this.binHolos.filter(v=>v.icon||A.has(v.id))}let f=(y=t.settings.household)==null?void 0:y.notes,m=f&&f!=="none"?e.states[f]:void 0;if(c&&m&&!Z(m)&&m.state.trim()){let A=m.state.split(/\s*(?:\||\n|;)\s*/).map(v=>v.trim()).filter(Boolean).slice(0,8);u.unshift(...A.map(v=>({icon:"pin-outline",text:v,entity:f})))}this._household=u.filter((A,v)=>u.findIndex(O=>O.text===A.text)===v),this.cameraScreens=0;let g=Tr(e,t.floors),_=q("screens");for(let A of t.floors)for(let v of A.furniture){if(!_||!((S=v.pictures)!=null&&S.length)||!fo(v.type)||v.type==="fridge_smart"&&((z=g.get(v.id))!=null&&z.right))continue;let O=v.pictures.find(M=>Ns(e,M));if(!O)continue;let G=this.pictureUrl(O.image),P=v.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];G&&s.set(v.id,{color:P,level:1,picture:G,plain:!0})}for(let A of p.values())A.top?s.set(A.furnitureId,{color:A.color,level:A.level,faces:[{part:"strata",color:A.color,top:A.top,level:A.level}]}):A.band&&s.set(A.furnitureId,{color:A.color,level:A.level,faces:[{part:"band",color:A.color,level:A.level}]});return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:i,consumers:a,screens:s,targets:l}}watchHousehold(e,t){let n=t.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox"),r=q("household")&&n.length>0&&!this.replay,i=r?Ol(t.floors):[],a=i.join(",");if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let s=async()=>{i.length&&(this.pickups=await ni(this.hass??e,i)),this.syncDevices(!0)};(a!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=a,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void s(),6e5),i.length&&ni(e,i).then(l=>{this.pickups=l,this.syncDevices(!0)}))}householdState(e,t,n){var l,d,c,u;let r=p=>{let h=parseInt(p.slice(1),16);return[(h>>16&255)/255,(h>>8&255)/255,(h&255)/255]};if(n.type==="waste_bin"){let p=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!p)return null;let h=oi(n,e,this.pickups,new Date,{from:(d=(l=this.building)==null?void 0:l.settings.household)==null?void 0:d.bin_from,until:(u=(c=this.building)==null?void 0:c.settings.household)==null?void 0:u.bin_until});if(!h)return null;let f=h.days===0?I(e,"bin_today"):h.days===1?I(e,"bin_tomorrow"):I(e,"bin_in_days",{n:h.days}),m=r(Ll(n)[1]),g=Math.max(...m),x=g-Math.min(...m)<.12?[.92,.95,1]:m.map(v=>Math.min(1,v/Math.max(.001,g)*1.05)),y=n.name||I(e,`bin_kind_${n.bin_kind??"rest"}`),S=ri(n,e),z=`#${x.map(v=>Math.round(v*255).toString(16).padStart(2,"0")).join("")}`,A=S?I(e,"bin_out_done"):f;return this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:fe(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:y,color:z,when:A,soon:h.days<=1&&!S,days:h.days,out:S}),{item:h.days<=1?{icon:S?"check-circle-outline":"trash-can-outline",text:`${y}: ${A}`,entity:p,hot:h.glow&&!S}:void 0}}if(n.type!=="mailbox"){let p=ii(n,e),h=[1,.55,.12],f=n.name||$e(e,n.type);return p?(this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:fe(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:f,color:"#ff8c1f",when:I(e,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:h,level:.9,faces:[{part:"band",color:h,level:.9}]},item:{icon:"watering-can-outline",text:I(e,"hh_plant",{name:f}),entity:n.moisture??null,hot:!0}}):null}let i=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!i)return null;let a=Bl(n,e),s=[1,.62,.15];return a&&this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:fe(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:n.name||$e(e,n.type),color:"#ffb547",when:I(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:a?{color:s,level:1,faces:[{part:"top",color:s,level:1},{part:"band",color:s,level:.8}]}:void 0,item:a?{icon:"email-alert-outline",text:n.name?`${n.name}: ${I(e,"mailbox_post")}`:I(e,"mailbox_post"),entity:i,hot:!0}:void 0}}robotPaths(e,t){var i,a;let n=this.replay;if(!n)return[];let r=[];for(let s of t.floors){let l=s.rooms.filter(d=>d.points.length>=3);for(let d of s.furniture){if(!jt(d.type))continue;let c=((a=(i=this.furnitureLinks)==null?void 0:i.get(d.id))==null?void 0:a.entity)??null;if(!c)continue;let u=n.robotRooms(c,Tn(e,c,d.room_sensor)),p=[];for(let h of u){let f=Rr(e,l,h),m=f?Ce(f.points):null,g=p[p.length-1];m&&(!g||g[0]!==m[0]||g[1]!==m[1])&&p.push([m[0],m[1]])}p.length&&r.push({floorId:s.id,points:p})}}return r}trailNow(e,t){let n=this.now(),r=qn(e,t),i=this.replay?this.replay.rows(r.map(s=>s.entity),n-Nn,n):this.trailRows,a=r.map(s=>{let l=e.states[s.entity];return{entity:s.entity,state:l==null?void 0:l.state,lastChanged:l!=null&&l.last_changed?Date.parse(l.last_changed):void 0}});return Hc(r,Fc(i,a,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!q("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!q("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let r=qn(t,n).map(i=>i.entity);if(r.length){try{let i=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Nn).toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=i??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,t){let n=[];if(Zs()){let r=new Set(t.floors.flatMap(i=>i.placements.map(a=>a.entity_id)).filter(i=>V(i)==="camera"));for(let i of r){let a=e.states[i],s=a==null?void 0:a.attributes.entity_picture;!s||Z(a)||n.push({id:i,url:s.startsWith("data:")?s:`${s}${s.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t==null?void 0:t.attributes.entity_picture;return!n||Z(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),Da(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(r=>{if(n.has(r.type)||r.type.startsWith("lamp_")&&r.type!=="lamp_floor"&&r.type!=="lamp_uplight"||r.h<.04||fe(e,r)>.12)return!1;let i=xe(r.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(r.type))?!1:Y([r.x,r.z],t)||vt(r).some(a=>Y(a,t))}).map(r=>vt(r))}robotInfos(e,t){var r,i;let n=[];for(let a of t.floors)for(let s of a.furniture){if(!jt(s.type))continue;let l=((r=this.furnitureLinks.get(s.id))==null?void 0:r.entity)??null,d=l?(i=e.states[l])==null?void 0:i.state:void 0,c=Pr(d)?"cleaning":d==="returning"?"returning":d==="error"?"error":d==="docked"||!d?"docked":"idle",u=s.rotation*Math.PI/180,p=Xe(s.type),h=s.d*(p?Ka(xe(s.type)):.14),f=[s.x-Math.sin(u)*h,s.z+Math.cos(u)*h],m=a.rooms.filter(y=>y.points.length>=3),_=(c==="cleaning"?Gs(e,m,l,Tn(e,l,s.room_sensor)):null)??m.find(y=>Y(f,y.points)),x=c==="cleaning"&&_?this.robotObstacles(a,_.points):[];n.push({id:s.id,floorId:a.id,rest:f,restHeading:-u,mode:c,room:(_==null?void 0:_.points)??null,roomId:(_==null?void 0:_.id)??null,obstacles:x,...p?{model:{type:s.type,w:s.w,d:s.d,h:s.h}}:{}})}return n}batteryText(e,t,n){var a;let r=t?Number((a=e.states[t])==null?void 0:a.state):Number.NaN,i=[];return Number.isFinite(r)&&i.push(`${ie(e,r,0)} %`),n!==null&&Math.abs(n)>=10&&i.push(`${n<0?"\u25B2":"\u25BC"} ${ce(e,Math.abs(n))}`),i.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?ce(e,0):`${I(e,t<0?"energy_grid_export":"energy_grid_import")} ${ce(e,Math.abs(t))}`}wallboxText(e,t,n){let r=t?e.states[t]:void 0,i=String((r==null?void 0:r.state)??"").toLowerCase(),a=(n??0)>50||/charg|laden|lädt/.test(i),s=r!=null&&r.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=a?I(e,"wallbox_charging"):s?I(e,"wallbox_plugged"):r&&!Z(r)&&!r.entity_id.startsWith("binary_sensor.")?ke(e,r):"",d=n!==null&&n>50?ce(e,n):"";return[l,d].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],r=t.state_entity&&t.state_entity!=="none"&&t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[i,a]of r){if(!i||i==="none")continue;let s=e.states[i];if(!s||Z(s)||!(qe(s)||s.state==="home"||s.state==="occupied"||s.state==="on"))continue;let d=V(i)==="light"?yt(s):null;n.push({part:a,color:d?d.color:[1,.71,.28],level:d?d.level:.85})}return n}carText(e,t,n){let r=a=>I(e,a);if(n||t.away!==null){let a=t.away?` \xB7 ${t.away}`:"";return`${r("car_away")}${a}`}let i=[];return t.soc!==null&&i.push(`${ie(e,t.soc,0)} %`),t.range!==null&&i.push(`${ie(e,t.range,0)} ${t.rangeUnit}`),t.charging?i.push(t.chargingW!==null?`\u26A1 ${ce(e,t.chargingW)}`:`\u26A1 ${r("car_charging_short")}`):t.plugged&&i.push("\u{1F50C}"),t.locked!==null&&i.push(t.locked?"\u{1F512}":"\u{1F513}"),i.join(" \xB7 ")}ceilingAt(e,t,n){var l;let i=((l=e.rooms.find(d=>d.ceiling_height&&d.points.length>=3&&Y([t,n],d.points)))==null?void 0:l.ceiling_height)||e.height,a=this.building;if(!a||!Nr(a).some(d=>bl(d,e.elevation+i)&&qr(d,e.elevation)))return i;let s=_l(a,t,n,e.elevation);return s===null?i:Math.max(.5,Math.min(i,s-e.elevation))}apOf(e){var t,n;if(!this.hass||!this.building)return null;for(let r of this.building.floors)for(let i of r.furniture){if(i.type!=="access_point")continue;let a=((n=(t=this.furnitureLinks)==null?void 0:t.get(i.id))==null?void 0:n.entity)??i.entity;if(a===e)return kn(this.hass,{entity:a})}return null}apText(e,t){if(t.status==="down")return I(e,"ap_down");if(t.status==="busy")return I(e,"ap_busy");let n=[];return t.clients!==null&&n.push(I(e,t.clients===1?"ap_client":"ap_clients",{n:Math.round(t.clients)})),t.cpu!==null&&n.push(`CPU ${ie(e,t.cpu,0)} %`),n.join(" \xB7 ")||I(e,"ap_up")}heaterPower(e){var t,n;if(!this.hass||!this.building||!e.startsWith("water_heater."))return null;for(let r of this.building.floors)for(let i of r.furniture){if(i.type!=="water_heater")continue;let a=((n=(t=this.furnitureLinks)==null?void 0:t.get(i.id))==null?void 0:n.entity)??i.entity;if(a===e)return Mn(this.hass,{entity:a}).power}return null}heaterText(e,t){if(!t.on)return I(e,"state_off");let n=Fe(e),r=a=>`${ie(e,a,0)} ${n}`,i=[t.current!==null?t.target!==null&&t.heating?`${r(t.current)} \u2192 ${r(t.target)}`:r(t.current):null];return t.showers!==null&&i.push(I(e,t.showers===1?"heater_shower":"heater_showers",{n:Math.round(t.showers)})),t.remaining!==null&&i.push(I(e,"heater_left",{min:Math.round(t.remaining)})),i.filter(Boolean).join(" \xB7 ")}lampMarker(e,t,n,r,i=!1){let a=r?e.states[r]:void 0,s=xe(n.type),l=vs[n.type]??(s==null?void 0:s.light)??"floor",d=t.rooms.some(y=>y.points.length>=3&&Y([n.x,n.z],y.points)),c=l==="strip"&&!d?_t(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||l==="wall"||l==="strip"?fe(t,n):l==="table"?lo(t,n.x,n.z,n.h):l==="bollard"||l==="garden"?_t(t,n.x,n.z):0,u=t.rooms.find(y=>y.points.length>=3&&Y([n.x,n.z],y.points)),p=this.ceilingAt(t,n.x,n.z),h=(s?s.mount==="ceiling":["ceiling","ceiling_fan","downlight","spot","panel","pendant"].includes(l))&&n.mount_y==null,f=h?t.height-p:0,m=s&&h?Math.max(0,c-f):c,g=ao.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+so(n.type,n.h)):Math.abs(f)>.01?p:void 0,_=g??t.height,x=s?s.mount==="ceiling"?Math.max(.5,m-.15):m+n.h+.2:{ceiling:_-.3,ceiling_fan:_-.45,downlight:_-.25,spot:_-.35,panel:_-.25,pendant:Math.max(.6,_-n.h-.25),floor:m+n.h+.25,uplight:m+n.h+.25,table:m+n.h+.2,wall:m+n.h+.2,strip:n.upright?m+n.w+.15:Math.max(.3,m-.2),bollard:m+n.h+.25,garden:m+n.h+.25}[l];return{id:r??`lamp:${n.id}`,floorId:t.id,roomId:(u==null?void 0:u.id)??null,x:n.x,z:n.z,y:x,icon:Jt(i?"fan":"light"),name:n.name||(r?J(e,r):$e(e,n.type)),text:a?ke(e,a):"",active:a?qe(a):!1,unavailable:a?Z(a):!1,glow:i?null:a?jr(Ds(yt(a,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_scale):null,lamp:l,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,size:[n.w,n.d,n.h],base:m,top:g,pickable:!!r,furnitureId:i?`${n.id}:fan`:n.id,fanBlades:i||void 0,fanSpeed:i?xh(a):void 0,fanStatic:n.type==="lamp_ceiling_fan"&&!i&&!Md(n)?!0:void 0,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?m:m+n.h*.85:void 0,effect:!!a&&a.state==="on"&&typeof a.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(a.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(e){var r;if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let t=(r=this.building)==null?void 0:r.floors.find(i=>i.id===e.floorId),n=t?Me(t).find(i=>i.id===this.roomId):void 0;return!!n&&Y([e.x,e.z],n.points)}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let t=V(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){if(n.lock&&!n.cover||Ar(n.cover)){e.set(t,`opening:${t}`);continue}let r=n.cover??n.contact??n.tilt;r&&e.set(t,r)}return e}scheduleThumbs(e=600){var r;clearTimeout(this.thumbTimer);let t=((r=this.building)==null?void 0:r.floors.filter(i=>i.rooms.length).length)??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return w;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),t=[...this._thumbs].sort((i,a)=>{var s,l;return(((s=this.building.floors.find(d=>d.id===a.floorId))==null?void 0:s.elevation)??0)-(((l=this.building.floors.find(d=>d.id===i.floorId))==null?void 0:l.elevation)??0)}),n=this._thumbsCompact,r=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return b`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${I(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${I(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${I(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${r}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${I(this.hass,"all_floors")}</span>
      </button>
      ${t.map(i=>b`<button class="fp3d-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${n?w:b`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!0);if(this.ro){this.onDeviceTap(e,t,n);return}let r=this.apOf(e);if(r){!r.restart||!this.hass?ve(this,e):confirm(I(this.hass,"ap_restart_confirm",{name:ro(this.hass,e)}))&&this.hass.callService("button","press",{entity_id:r.restart});return}if(q("auto_pro")&&this.hass&&this.building)for(let a of this.building.floors)for(let s of a.furniture){if(s.type!=="parking"||!s.car)continue;let l=In(this.hass,s);if([s.entity,s.car.device,...Object.values(l.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:l};return}}let i=V(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:t,y:n}:ve(this,e)}onDeviceSwipe(e,t,n,r,i){var l;let a=(l=this.hass)==null?void 0:l.states[e];if(this.ro)return!1;if(t==="start"){if(!a||Z(a)||this.confirmSet.has(e))return!1;let d=V(e);if(d==="light"&&ki(a).dim){let c=a.state==="on"?typeof a.attributes.brightness=="number"?Math.round(a.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:r,y:i},!0}if(d==="cover"&&$i(a)){let c=a.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:r,y:i},!0}return!1}let s=this._swipe;if(!s||s.entity!==e)return!1;if(t==="move"){let d=Math.round(Math.min(100,Math.max(0,s.start-n/220*100)));d!==s.value&&(this._swipe={...s,value:d});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>{var t;return(t=this.viewer)==null?void 0:t.focus(e.floorId,e.x,e.z,e.y,e.entity)},120)}renderBinInfo(){var c;let e=this._binInfo,t=this.hass,n=e&&((c=this.building)==null?void 0:c.floors.flatMap(u=>u.furniture).find(u=>u.id===e.furnitureId));if(!e||!t||!n)return w;let r=jl(n,t,this.pickups),i=new Date;i.setHours(0,0,0,0);let a=u=>{let p=Math.round((u.getTime()-i.getTime())/864e5);return p===0?I(t,"bin_today"):p===1?I(t,"bin_tomorrow"):u.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},s=n.name||I(t,`bin_kind_${n.bin_kind??"rest"}`),l=ri(n,t),d=u=>{u.stopPropagation(),typeof n.bin_out=="string"&&Xt(t,n.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return b`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${s}</span>
      ${r.length?r.map(u=>b`<b>${a(u.day)}${u.summary&&u.summary!==s?b` <small>· ${u.summary}</small>`:w}</b>`):b`<b>${I(t,"bin_none")}</b>`}
      ${Vl(n)&&!this.ro?b`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${d}>${l?I(t,"bin_out_done"):I(t,"bin_out_mark")}</button>`:l?b`<small>${I(t,"bin_out_done")}</small>`:w}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!q("household")||this.panelOpen)return w;let e=()=>{this._hhFolded=!this._hhFolded,Eh("neonplan3d.hhFolded",this._hhFolded)};return b`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${I(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?w:this._household.map(t=>b`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):ve(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderClock(){var a;let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),w;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let t=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),r=(a=this.hass.config)==null?void 0:a.time_zone,i=s=>{try{return t.toLocaleString(n,r?{...s,timeZone:r}:s)}catch{return t.toLocaleString(n,s)}};return b`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${i({hour:"2-digit",minute:"2-digit"})}</b><span>${i({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return w;let t=this._alerts.slice(0,3);return b`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>b`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${pi(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${pi(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?b`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:w}
    </div>`}renderScenes(){var i,a;let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return w;let t=e.floors.flatMap(s=>Me(s)).find(s=>s.id===this.roomId),n=t?_e(this.hass,t.area_id).filter(s=>V(s)==="scene"||V(s)==="script").slice(0,6):[];if(!n.length)return w;let r=t!=null&&t.area_id?(a=(i=this.hass.areas)==null?void 0:i[t.area_id])==null?void 0:a.name:void 0;return b`<div class="fp3d-scenes">
      ${n.map(s=>b`<button class="fp3d-chip" aria-pressed=${this._sceneFired===s} @click=${()=>this.runScene(s)}>${J(this.hass,s,r)}</button>`)}
    </div>`}async syncPets(){var a,s,l,d,c,u,p;let e=this.building,t=this.viewer,n=((a=e==null?void 0:e.settings.pets)==null?void 0:a.on)!==!1&&this.petsOn!==!1,r=n?((s=e==null?void 0:e.settings.pets)==null?void 0:s.list)??[]:[],i=n&&!!(e!=null&&e.floors.some(h=>h.furniture.some(f=>/:aquarium(_large)?$/.test(f.type))));if(!t||!e||!q("fun_pets")||!r.length&&!i){(l=this.pets)==null||l.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,r));return}if(!this.petsLoading){this.petsLoading=!0;try{let[h,f]=await Promise.all([Si(),Un()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=h.startPets({lib:f.funLib,FloorMap:f.FloorMap,viewer:this.viewer,building:this.building,pets:((c=(d=this.building)==null?void 0:d.settings.pets)==null?void 0:c.on)!==!1&&this.petsOn!==!1?((p=(u=this.building)==null?void 0:u.settings.pets)==null?void 0:p.list)??[]:[],night:()=>{var m,g;return((g=(m=this.hass)==null?void 0:m.states["sun.sun"])==null?void 0:g.state)==="below_horizon"},base:(m,g)=>fe(m,g),closedDoors:()=>{var _,x,y;let m=new Set,g=((_=this.hass)==null?void 0:_.states)??{};for(let S of((x=this.building)==null?void 0:x.floors)??[])for(let z of S.openings)z.type==="door"&&z.contact&&((y=g[z.contact])==null?void 0:y.state)==="off"&&m.add(z.id);return m}})}catch(h){console.error("CasaNeon: the pets failed to load",h)}finally{this.petsLoading=!1}}}async syncGhost(){var n,r;let e=this.building,t=!!e&&q("fun_halloween")&&((n=e.settings.halloween)==null?void 0:n.ghost)!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){(r=this.ghost)==null||r.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[i,a]=await Promise.all([Si(),Un()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=i.startGhost({lib:a.funLib,viewer:this.viewer,building:this.building,night:()=>{var s,l;return((l=(s=this.hass)==null?void 0:s.states["sun.sun"])==null?void 0:l.state)==="below_horizon"}})}catch(i){console.error("CasaNeon: the ghost failed to load",i)}finally{this.ghostLoading=!1}}}async startWalk(){let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=e.floors.filter(u=>u.rooms.some(p=>p.points.length>=3)),i=(this.roomId?n.find(u=>u.rooms.some(p=>p.id===this.roomId)):void 0)??n.find(u=>u.id===this.floorId)??[...n].sort((u,p)=>Math.abs(u.elevation)-Math.abs(p.elevation))[0];if(!i)return;let a=await Un();this._walk={room:null,hint:!0},await this.updateComplete;let s=this.renderRoot.querySelector(".fp3d-walk-surface");if(!s)return;t.setFloor(i.id,!1),t.setWallMode("auto");let l=new a.FloorMap(e,i),d=this.roomId?i.rooms.find(u=>u.id===this.roomId):void 0,c;if(d){let u=l.freeNear(Ce(d.points));c={x:u[0],z:u[1],yaw:l.openYaw(u),pitch:-.05}}this.walker=new a.WalkCamera(t,l,s,{start:c,onRoom:u=>{this.walkRoomPts=(u==null?void 0:u.points)??null,this._walk&&(this._walk={...this._walk,room:(u==null?void 0:u.name)??null}),this.syncDevices(!0)}}),this.walkKeys=u=>{u.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){var t;if(!this.walker&&!this._walk)return;(t=this.walker)==null||t.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return w;let e=i=>I(this.hass,i);if(!this._walk)return b`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,r=(i,a)=>{var u;if(!n)return;let s=44,l=i.clientX-n.cx,d=i.clientY-n.cy,c=Math.hypot(l,d);c>s&&([l,d]=[l/c*s,d/c*s]),a.firstElementChild.style.transform=`translate(${l}px, ${d}px)`,(u=this.walker)==null||u.setStick({x:l/s,y:d/s})};return b`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?b`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:w}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${i=>{let a=i.currentTarget,s=a.getBoundingClientRect();n={id:i.pointerId,cx:s.left+s.width/2,cy:s.top+s.height/2},a.setPointerCapture(i.pointerId),r(i,a)}}
        @pointermove=${i=>r(i,i.currentTarget)}
        @pointerup=${i=>{var a;n=null,i.currentTarget.firstElementChild.style.transform="",(a=this.walker)==null||a.setStick(null)}}
        @pointercancel=${i=>{var a;n=null,i.currentTarget.firstElementChild.style.transform="",(a=this.walker)==null||a.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return w;if(this._find===null)return b`<button class="fp3d-find-btn" title=${I(this.hass,"find")} aria-label=${I(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=Oc(this.findIndex??=Do(this.hass,e),this._find);return b`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${I(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${I(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?b`<div class="fp3d-find-list">
            ${t.length?t.map(n=>b`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?_o(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?b`<small>${n.where}</small>`:w}</span>
                  </button>`):b`<p>${I(this.hass,"find_none")}</p>`}
          </div>`:w}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return w;let n=(m,g)=>I(t,m,g),r=b`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return r;let i=this.floorId?e.floors.find(m=>m.id===this.floorId):void 0,a=i?[i]:e.floors,s=a.flatMap(m=>Fr(t,m).lights),l=a.flatMap(m=>Fr(t,m).covers),d=s.filter(m=>{var g;return((g=t.states[m])==null?void 0:g.state)==="on"}).length,c=!i,u=(m,g,_,x)=>{if(x.length){if(c&&this._armed!==m){this._armed=m,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(g,_,{entity_id:x})}},p=(m,g,_,x,y)=>b`<button class="fp3d-btn ${this._armed===m?"fp3d-central-armed":""}" ?disabled=${!y.length} @click=${()=>u(m,_,x,y)}>
        ${this._armed===m?n("central_sure"):n(g)}
      </button>`,h=(e.settings.favorites??[]).filter(m=>t.states[m]),f=this.buttons??e.settings.buttons??[];return b`${r}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <b>${i?i.name:n("central_house")}</b>
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${s.length?b` <small>${d}/${s.length}</small>`:w}</span>
          ${p("lights_on","central_on","light","turn_on",s.filter(m=>{var g;return((g=t.states[m])==null?void 0:g.state)==="off"}))}
          ${p("lights_off","central_off","light","turn_off",s.filter(m=>{var g;return((g=t.states[m])==null?void 0:g.state)==="on"}))}
        </div>
        ${l.length?b`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:w}
        <b>${n("central_favorites")}</b>
        ${h.length?b`<div class="fp3d-central-favs">
              ${h.map(m=>{let[g,_]=Qs(m),x=t.states[m],y=g==="homeassistant"&&(x==null?void 0:x.state)==="on";return b`<button
                  class="fp3d-chip"
                  aria-pressed=${y||this._sceneFired===m}
                  ?disabled=${Z(x)}
                  @click=${()=>{t.callService(g,_,{entity_id:m}),this._sceneFired=m,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${J(t,m)}
                </button>`})}
            </div>`:f.length?w:b`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${f.length?b`<div class="fp3d-central-favs">
              ${f.map(m=>b`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${Mh(t,m)}
                  @click=${g=>{Js(t,g.currentTarget,m),m.action!=="service"&&(this._central=!1)}}
                >
                  ${m.icon?b`<ha-icon .icon=${m.icon.startsWith("mdi:")?m.icon:`mdi:${m.icon}`}></ha-icon>`:w}${m.label}
                </button>`)}
            </div>`:w}
      </div>`}mediaCardUp(e,t){var i;let n=e.states[t];if(!n||V(t)!=="media")return!1;if(!this.ro&&(((i=this.mediaGrace.get(t))==null?void 0:i.until)??0)>Date.now()&&Z(n))return!0;let r=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(a=>typeof a=="string"&&!!a.trim());return!Z(n)&&(n.state==="playing"||n.state==="paused"&&r)}renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return w;let e=I(this.hass,this.clean?"controls_show":"controls_hide");return b`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?bt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:bt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return w;let t=this._voice,n=(t==null?void 0:t.phase)==="wait"||(t==null?void 0:t.phase)==="listen",r=I(e,"voice_button"),i=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return b`<button class="fp3d-mic ${(t==null?void 0:t.phase)==="listen"?"fp3d-mic-on":""}" style="left:${i}px" title=${r} aria-label=${r} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${bt`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${t?b`<div class="fp3d-mic-say ${t.phase==="error"?"fp3d-mic-err":""}" style="left:${i}px">${t.text}</div>`:w}`}sayVoice(e,t){this._voice={phase:e,text:t},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==r)return;let i=null;try{let a=await dn();i=await this.handleSentence(t,n,a,e.text,e.speak),i===null&&this.sayVoice("error",I(t,"voice_none"))}catch(a){this.sayVoice("error",I(t,"voice_error",{msg:String((a==null?void 0:a.message)??a)}))}try{await Oa(t,e.ask_id,i??"",i!==null)}catch{}}async onMic(){var i,a;let e=this.hass,t=this.building;if(!e||!t||((i=this._voice)==null?void 0:i.phase)==="wait"||((a=this._voice)==null?void 0:a.phase)==="listen")return;clearTimeout(this.voiceTimer);let n=(s,l)=>this.sayVoice(s,l);n("wait","\u2026"),this.tourToken++;let r;try{let s=window.AudioContext??window.webkitAudioContext;r=new s,r.resume()}catch{r=void 0}try{let s=await dn(),l=await s.listenOnce(e,()=>n("listen",I(e,"voice_listen")),Uo(),r);if(!l){n("error",I(e,"voice_none"));return}if(await this.handleSentence(e,t,s,l,!0)!==null)return;n("wait",`\u201C${l}\u201D \u2026`);let d=await s.converse(e,l);n("done",d?`\u201C${l}\u201D \u2013 ${d}`:`\u201C${l}\u201D`)}catch(s){let l=s,d=(l==null?void 0:l.message)==="no_pipeline"?"voice_no_pipeline":(l==null?void 0:l.message)==="silent"?"voice_silent":(l==null?void 0:l.name)==="NotAllowedError"||(l==null?void 0:l.name)==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",d?I(e,d):I(e,"voice_error",{msg:String((l==null?void 0:l.message)??(l==null?void 0:l.name)??s)}))}}async handleSentence(e,t,n,r,i){var d,c,u;let a=(p,h)=>this.sayVoice(p,h),{devices:s,items:l}=this.spokenDevices(e,t,n.SYNONYMS);{let p=n.showTarget(r,t,s,m=>{var g,_;return m.area_id?(_=(g=e.areas)==null?void 0:g[m.area_id])==null?void 0:_.name:null});if(p){let m=p.kind==="house"?I(e,"all_floors"):p.kind==="cameras"?I(e,"camera_wall_title"):p.name;if(a("done",`\u201C${r}\u201D \u2192 ${m}`),this.directing.touch(Date.now()),p.kind==="cameras")q("camera_cockpit")?this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0})):this._proHint="camera_cockpit";else if(p.kind==="device"){let g=l.get(p.id);p.camera&&p.entity&&q("camera_cockpit")?this.lookThrough(p.entity):g&&this.goTo(g)}else p.kind==="house"?this.fire("floor-tap",{floorId:null}):p.kind==="floor"?this.fire("floor-tap",{floorId:p.floorId}):(this.floorId!==p.floorId&&this.fire("floor-tap",{floorId:p.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:p.floorId,roomId:p.roomId}),60));return I(e,"voice_showing",{name:m})}let h=this.moduleHost(e,t,n.SYNONYMS,m=>n.showTarget(m,t,s,g=>{var _,x;return g.area_id?(x=(_=e.areas)==null?void 0:_[g.area_id])==null?void 0:x.name:null})),f=await jc(r,h);if(f){a("done",f.text?`\u201C${r}\u201D \u2013 ${f.text}`:`\u201C${r}\u201D`),this.directing.touch(Date.now()),(d=f.highlight)!=null&&d.length&&((c=this.viewer)==null||c.flashDevices(f.highlight));let m=f.focus,g=f.spoken??f.text??"";if((u=f.tour)!=null&&u.length){let _=i&&f.speak!==!1?y=>n.speak(e,y,Uo()):null,x=f.spoken??f.text;return x&&_&&await _(x),this.runTour(f.tour,t,l,_),g}if(m!=null&&m.roomId&&m.floorId)this.floorId!==m.floorId&&this.fire("floor-tap",{floorId:m.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:m.floorId,roomId:m.roomId}),60);else if(m!=null&&m.floorId&&!m.entity&&!m.furnitureId)this.fire("floor-tap",{floorId:m.floorId});else if(m!=null&&m.entity||m!=null&&m.furnitureId){let _=l.get(m.entity??`furniture:${m.furnitureId}`);_&&this.goTo(_)}return f.text&&f.speak!==!1&&i&&n.speak(e,f.text,Uo()),g}}return null}spokenDevices(e,t,n){let r=this.findIndex??=Do(e,t),i=new Map(t.floors.flatMap(u=>Me(u).map(p=>[p.id,p.name]))),a=[],s=[],l=new Map;for(let u of r)u.kind==="device"&&u.entity&&l.set(u.entity,u);let d=new Set;for(let u of t.floors){let p=Me(u);for(let h of u.furniture){if(Ah.has(h.type))continue;let f=this.furnitureLinks.get(h.id),m=(f==null?void 0:f.entity)??(f==null?void 0:f.power)??null,g=m??`furniture:${h.id}`,_=p.find(O=>O.points.length>=3&&Y([h.x,h.z],O.points)),x=$e(e,h.type),y=[h.name,...h.aliases??[],x,m?J(e,m):null,...n[h.type]??[]].filter(O=>!!O),S=h.name||(m?J(e,m):x);a.push({id:g,entity:m,name:S,names:y,room:(_==null?void 0:_.name)??"",camera:!!m&&V(m)==="camera"});let z=(h.type==="plant"||ei(h.type))&&!!h.moisture&&h.moisture!=="none",A=li(f!=null&&f.entity?e.states[f.entity]:void 0,f!=null&&f.power?pe(e.states[f.power]):null,typeof h.run_w=="number"&&h.run_w>0?h.run_w:10),v=q("household")&&typeof h.remaining=="string"&&h.remaining!=="none"&&!A?ai(e.states[h.remaining]):null;s.push({id:g,entity:m,name:S,names:y,room:(_==null?void 0:_.name)??"",floorId:u.id,roomId:(_==null?void 0:_.id)??null,power:(f==null?void 0:f.power)??null,type:h.type,remaining:v,thirsty:z&&q("household")?ii(h,e):null}),m?d.add(m):l.set(g,{kind:"device",name:S,where:"",floorId:u.id,roomId:(_==null?void 0:_.id)??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(u.height-.3,Math.max(.5,h.h))})}}let c=new Map(t.floors.flatMap(u=>u.placements.map(p=>[p.entity_id,p])));for(let[u,p]of l){if(d.has(u)||u.startsWith("furniture:"))continue;let h=p.roomId&&i.get(p.roomId)||"",f=c.get(u),m=[f==null?void 0:f.name,...(f==null?void 0:f.aliases)??[],p.name].filter(g=>!!g);a.push({id:u,entity:u,name:p.name,names:m,room:h,camera:V(u)==="camera"}),s.push({id:u,entity:u,name:p.name,names:m,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:a,items:l,spoken:s}}lockMarkers(e,t){var r,i;let n=[];for(let a of t.floors)for(let s of a.openings){let l=(i=(r=this.openingLinks)==null?void 0:r.get(s.id))==null?void 0:i.lock;if(!l)continue;let d=this.openingSpot(t,s.id,!0);if(!d)continue;let c=e.states[l];n.push({id:l,floorId:a.id,roomId:s.room_id,x:d.x,z:d.z,y:Math.min(d.y+.35,1.5),icon:Jt("lock"),name:J(e,l),text:c?ke(e,c):"",active:!!c&&(c.state==="unlocked"||c.state==="open"||c.state==="unlocking"),unavailable:!c||Z(c),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(e,t,n=!1){for(let r of e.floors){let i=r.openings.find(_=>_.id===t);if(!i)continue;let a=ml(i,r.rooms,r.walls??[]);if(!a)return null;let s=a.room.points,l=s[a.edge],d=s[(a.edge+1)%s.length],c=Math.hypot(d[0]-l[0],d[1]-l[1])||1,u=[(d[0]-l[0])/c,(d[1]-l[1])/c],h=Oe(s)>0?[-u[1],u[0]]:[u[1],-u[0]],f=i.offset;if(n){let _=u[0]*h[1]-u[1]*h[0]>0;f=i.offset-i.width/2+bs(i,i.hinge==="left"===_)}let[m,g]=yo(a.room,a.edge,f);return{floorId:r.id,x:m+h[0]*.2,z:g+h[1]*.2,y:Math.max(.5,i.sill+i.height/2),theta:Math.atan2(h[0],h[1])}}return null}async runTour(e,t,n,r){var c;let i=++this.tourToken;clearTimeout(this.tourTimer);let a=e.map(u=>{if(u.openingId){let h=this.openingSpot(t,u.openingId);return h?{...h,entity:null,say:u.say,inside:!0}:null}let p=n.get(u.entity??`furniture:${u.furnitureId}`);return p?{floorId:p.floorId,x:p.x,z:p.z,y:p.y,theta:void 0,entity:p.entity,say:u.say,inside:!1}:null}).filter(u=>!!u).slice(0,8);if(!a.length)return;let s=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};s==null||s.addEventListener("pointerdown",l,{once:!0});let d=u=>new Promise(p=>this.tourTimer=setTimeout(p,u));for(let u of a){if(i!==this.tourToken||(this.floorId!==u.floorId&&(this.fire("floor-tap",{floorId:u.floorId}),await d(150)),i!==this.tourToken)||((c=this.viewer)==null||c.focus(u.floorId,u.x,u.z,u.y,u.entity,u.inside?{radius:3.2,phi:1.05,theta:u.theta}:void 0),await d(900),i!==this.tourToken))break;let p=u.say&&r?await r(u.say):!1;if(i!==this.tourToken)break;await d(p?1200:2600)}s==null||s.removeEventListener("pointerdown",l)}spokenOpenings(e,t){var i,a,s;let n=[],r=l=>I(e,l);for(let l of t.floors){let d=new Map(Me(l).map(c=>[c.id,c.name]));for(let c of l.openings){let u=(i=this.openingLinks)==null?void 0:i.get(c.id);if(!u)continue;let p=c.type==="garage"?"garage":c.type==="door"?"door":"window",h=We(e,u,c.type),f=h.open>.02||h.open2>.02||c.type==="garage"&&(h.cover??0)>.02,m=!f&&(h.tilt>.02||h.tilt2>.02);for(let g of[u.contact,u.contact2,u.cover,u.tilt,u.tilt2])g&&g!=="none"&&n.push({id:c.id,entity:g,kind:p,name:r(`opening_${c.type}`),room:d.get(c.room_id)??"",floorId:l.id,roomId:c.room_id,open:f,tilted:m})}}for(let l of((a=t.settings.roof)==null?void 0:a.windows)??[]){let d=h=>h&&h!=="none"?h:null,c=We(e,{cover:d(l.cover),contact:d(l.contact),tilt:d(l.tilt)},"window"),u=c.open>.02,p=!u&&c.tilt>.02;for(let h of[l.contact,l.cover,l.tilt])h&&h!=="none"&&n.push({id:l.id,entity:h,kind:"roof_window",name:l.name||r("roof_window"),room:"",floorId:((s=t.floors[t.floors.length-1])==null?void 0:s.id)??"",roomId:null,open:u,tilted:p})}return n}sceneHost(e,t){return this.moduleHost(e,t,{},()=>null)}moduleHost(e,t,n,r){let i=null,a=()=>i??=this.spokenDevices(e,t,n).spoken,s={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>a(),findDevice:l=>{let d=r(l);return(d==null?void 0:d.kind)==="device"&&d.id?a().find(c=>c.id===d.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>{var l,d;return!!((d=(l=this.hass)==null?void 0:l.user)!=null&&d.is_admin)&&!this.ro},updateBuilding:l=>{var u;let d=this.building;if(!d||!this.hass||this.ro||!((u=this.hass.user)!=null&&u.is_admin))return;let c=structuredClone(d);l(c),this.building=c,oo(this.hass,c).catch(p=>this.serviceFailed("neonplan3d/building/save",p))},callService:(l,d,c)=>this.hass?this.hass.callService(l,d,c):Promise.resolve(),newId:l=>_s(l),waterLevel:(l,d)=>{var p;let c=(p=this.building)==null?void 0:p.floors.find(h=>h.id===l),u=c==null?void 0:c.outdoor.find(h=>h.id===d);return!c||!u||u.type!=="pool"?null:{y:Vt(c,u),floorY:Sn(c,u)}},groundAt:(l,d,c)=>{var p;let u=(p=this.building)==null?void 0:p.floors.find(h=>h.id===l);return u?_t(u,d,c):0},refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:Li,openings:()=>this.spokenOpenings(e,t),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>{var d;return{id:l.id,entity:l.powerEntity,name:((d=a().find(c=>c.entity===l.id||c.power===l.powerEntity))==null?void 0:d.name)??J(e,l.id),watts:l.power}}).sort((l,d)=>d.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,t),cars:()=>this.spokenCars(e,t),pools:()=>Bc(s),weather:()=>Et(e,this.weatherEntityId??t.settings.weather_entity)};return s}spokenAlerts(e,t){let n=new Map(t.floors.flatMap(r=>Me(r).map(i=>[i.id,i.name])));return this._alerts.map(r=>({kind:r.kind,entity:r.entity,name:J(e,r.entity),...r.text?{text:r.text}:{},room:r.roomId?n.get(r.roomId)??null:null,floorId:r.floorId,roomId:r.roomId}))}spokenCars(e,t){if(!q("auto_pro"))return[];let n=[];for(let r of t.floors)for(let i of r.furniture){if(i.type!=="parking"||!i.car)continue;let a=cn(e,i),s=In(e,i),l=s.entities.tracker?e.states[s.entities.tracker]:void 0,d=!!a&&!(l&&!Ho.has(l.state.toLowerCase()));n.push({name:i.name||(a?$e(e,a):$e(e,"car")),spot:i.id,floorId:r.id,present:d,away:s.away,soc:s.soc,range:s.range,rangeUnit:s.rangeUnit,charging:s.charging,chargingW:s.chargingW,plugged:s.plugged,locked:s.locked})}return n}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return w;let t=e.kind==="light"&&e.value<=0;return b`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${J(this.hass,e.entity)}</span>
      <b>${t?I(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){var a;let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!q("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let r=(a=n.floors.find(s=>s.placements.some(l=>l.entity_id===e)))==null?void 0:a.id;if(!r)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let i=this.floorId===r?0:300;i&&(this.throughFloor=r,this.fire("floor-tap",{floorId:r})),setTimeout(()=>{var s,l;((s=this._through)==null?void 0:s.entity)===e&&!((l=this.viewer)!=null&&l.lookThrough(e))&&(this._through=null)},i)}endThrough(){var t,n;let e=this._through;e&&(this._through=null,((t=this.live)==null?void 0:t.id)===e.entity&&(this.live=null),(n=this.viewer)==null||n.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?w:b`<div class="fp3d-pro" role="dialog">
      <b>${I(this.hass,"pro_title")}</b>
      <span>${I(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${I(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip" href=${el(this._proHint)} target="_blank" rel="noopener">${I(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${I(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${I(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return w;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!q("camera_cockpit"))return b`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${I(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${I(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(c=>c.placements.map(u=>u.entity_id)).filter(c=>V(c)==="camera"))];this.watchCameras(!0);let r=c=>{let u=e.states[c],p=u==null?void 0:u.attributes.entity_picture;return p&&u&&!Z(u)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},i=c=>{let u=e.states[c];return b`${J(e,c)}${(u==null?void 0:u.state)==="recording"?b` <b>● ${I(e,"state_recording")}</b>`:w}`},a=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(a){let c=r(a),u=this.liveFor(a),p=()=>{this.throughWall=!0,t(),this.lookThrough(a)};return b`<div class="fp3d-wall">
        <div class="fp3d-wall-head">
          <button
            class="fp3d-chip"
            @click=${()=>{this._wallBig=null,this.live=null}}
          >
            ‹ ${I(e,"camera_wall_all")}
          </button>
          <span class="fp3d-wall-title">${i(a)}</span>
          <span class="fp3d-wall-tools"><button class="fp3d-chip" @click=${p}>${I(e,"through_camera")}</button><button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button></span>
        </div>
        <div class="fp3d-wall-big">${u??(c?b`<img src=${c} alt="" />`:b`<div class="fp3d-wall-none">${I(e,"state_unavailable")}</div>`)}</div>
      </div>`}let s=this.renderRoot.querySelector(".fp3d-wall-grid");s||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:d}=dd(n.length,(s==null?void 0:s.clientWidth)??this.clientWidth-48,(s==null?void 0:s.clientHeight)??this.clientHeight-160);return b`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${I(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${I(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${d}px); grid-auto-rows: ${Math.round(d*9/16)}px">
        ${n.map(c=>{let u=r(c),p=Ye(e,c).some(h=>{var f;return((f=e.states[h])==null?void 0:f.state)==="on"});return b`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${I(e,"camera_wall_big")} @click=${()=>this._wallBig=c}>
            ${u?b`<img src=${u} alt="" />`:b`<div class="fp3d-wall-none">${I(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${i(c)}</span>
          </button>`})}
      </div>
    </div>`}renderProxmox(){if(!this.proxmoxWall||!this.hass||this.ro)return w;let e=this.hass,t=(c,u)=>I(e,c,u),n=()=>this.dispatchEvent(new CustomEvent("proxmox-close",{bubbles:!0,composed:!0})),r=Ln(e),i=c=>c===null?"\u2013":`${ie(e,c,c<10?1:0)} %`,a=(c,u)=>b`<span class="fp3d-pve-bar" title=${`${c} ${i(u)}`}
        ><span class="fp3d-pve-bar-label">${c}</span><span class="fp3d-pve-bar-track"><span class="fp3d-pve-bar-fill ${(u??0)>=85?"fp3d-pve-hot":""}" style="width: ${Math.min(100,Math.max(0,u??0))}%"></span></span><span class="fp3d-pve-bar-value">${i(u)}</span></span
      >`,s=r.instances.filter(c=>c.running).length,l=r.instances.filter(c=>this._pveFilter==="all"||this._pveFilter==="on"===c.running),d=(c,u,p)=>b`<button class="fp3d-chip" aria-pressed=${this._pveFilter===c} @click=${()=>this._pveFilter=c}>${u} · ${p}</button>`;return b`<div class="fp3d-wall fp3d-pve">
      <div class="fp3d-wall-head">
        <span>${t("pve_title")}</span>
        <span class="fp3d-wall-tools">${d("all",t("pve_all"),r.instances.length)} ${d("on",t("pve_on"),s)} ${d("off",t("pve_off"),r.instances.length-s)}</span>
        <button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      ${r.nodes.map(c=>b`<button class="fp3d-pve-node ${c.online?"":"fp3d-pve-down"}" @click=${()=>ve(this,c.entity)}>
          <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${c.online?"fp3d-pve-dot-on":"fp3d-pve-dot-bad"}"></span>${c.name} · ${t(c.online?"pve_online":"pve_offline")}</span>
          ${a(t("pve_cpu"),c.cpu)} ${a(t("pve_ram"),c.memory)} ${a(t("pve_disk"),c.disk)}
          <span class="fp3d-pve-facts">
            ${c.vmsOn!==null||c.lxcOn!==null?b`<span>${t("pve_running_counts",{vms:c.vmsOn??0,lxc:c.lxcOn??0})}</span>`:w}
            ${c.load!==null?b`<span>${t("pve_load")} ${ie(e,c.load,2)}</span>`:w}
            ${c.updates?b`<span>${t("pve_updates",{n:c.updates})}</span>`:w}
            ${c.failedTasks?b`<span class="fp3d-pve-warn">${t("pve_failed",{n:c.failedTasks})}</span>`:w}
          </span>
        </button>`)}
      <div class="fp3d-pve-grid">
        ${l.length?l.map(c=>b`<button class="fp3d-pve-tile ${c.running?"":"fp3d-pve-off"} ${c.problem?"fp3d-pve-down":""}" @click=${()=>ve(this,c.entity)}>
                <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${c.problem?"fp3d-pve-dot-bad":c.running?"fp3d-pve-dot-on":""}"></span>${c.name}</span>
                <span class="fp3d-pve-sub">${c.vmid!==null?`#${c.vmid} \xB7 `:""}${t(c.kind==="vm"?"pve_vm":"pve_lxc")}${c.ip?` \xB7 ${c.ip}`:""}</span>
                ${c.running?b`${a(t("pve_cpu"),c.cpu)} ${a(t("pve_ram"),c.memory)}
                      <span class="fp3d-pve-sub">${t("pve_disk")} ${i(c.disk)}${c.memoryUsed?` \xB7 ${c.memoryUsed}`:""}${c.since?` \xB7 ${t("pve_since",{d:ac(c.since)})}`:""}</span>`:b`<span class="fp3d-pve-sub">${t(c.problem?"pve_problem":"pve_stopped")}</span>`}
              </button>`):b`<p class="fp3d-pve-sub">${t("pve_none")}</p>`}
      </div>
    </div>`}liveFor(e){var t;if(((t=this.live)==null?void 0:t.id)!==e){let n={id:e,el:null,failed:!1};this.live=n;let r=window;r.loadCardHelpers?r.loadCardHelpers().then(i=>{if(this.live!==n)return;let a=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});a.hass=this.hass,n.el=a,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}renderThrough(){var a,s;let e=this._through;if(!e||!this.hass)return w;let t=this.hass.states[e.entity],n=t==null?void 0:t.attributes.entity_picture,r=n&&!Z(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,i=(s=(a=this.building)==null?void 0:a.settings.director)!=null&&s.live?this.liveFor(e.entity):null;return b`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${i?b`<div class="fp3d-through-img fp3d-through-live">${i}</div>`:r?b`<img class="fp3d-through-img" src=${r} alt="" />`:w}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${J(this.hass,e.entity)}</span>
        <span class="fp3d-still">${i?"\u25CF Live":I(this.hass,"camera_still",{s:this._low?10:5})}</span>
        <input
          type="range"
          min="0"
          max="100"
          .value=${String(Math.round(this._blend*100))}
          aria-label=${I(this.hass,"through_blend")}
          @input=${l=>this._blend=Number(l.target.value)/100}
        />
        <button class="fp3d-chip" title=${I(this.hass,"through_full_hint")} @click=${()=>this.throughFull(e.entity)}>⛶ ${I(this.hass,"through_full")}</button>
        <button class="fp3d-chip" @click=${()=>this.endThrough()}>${I(this.hass,"through_back")}</button>
      </div>
    </div>`}throughFull(e){let t=this.renderRoot.querySelector(".fp3d-through-img");t&&typeof t.requestFullscreen=="function"?t.requestFullscreen().catch(()=>ve(this,e)):ve(this,e)}renderMenu(){var s;let e=this._menu;if(!e||!this.hass||this.ro)return w;let t=this.renderRoot.querySelector(".fp3d-stage"),n=(t==null?void 0:t.clientWidth)??800,r=(t==null?void 0:t.clientHeight)??600,i=Math.max(8,Math.min(n-240,e.x-116)),a=Math.max(8,Math.min(r-360,e.y-170));return b`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${i}px;top:${a}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        .presets=${q("sound")?((s=this.building)==null?void 0:s.settings.media_presets)??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${q("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${l=>this.lookThrough(l.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){var n;let t=[];for(let r of this.scene){if(r.kind!=="marker")continue;let i=e.floors.find(l=>l.id===r.floorId),a=i==null?void 0:i.furniture.find(l=>l.id===r.furnitureId);if(!i||!a)continue;let s=Yc(r.path);t.push({id:`module:${r.id}`,floorId:i.id,roomId:((n=i.rooms.find(l=>l.points.length>=3&&Y([a.x,a.z],l.points)))==null?void 0:n.id)??null,x:a.x,z:a.z,y:r.y??fe(i,a)+a.h*.6,icon:s?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${s}"/></svg>`:"",name:r.name,text:r.text??"",active:!!r.active&&!this.dimmed,unavailable:!1,glow:r.color&&r.active&&!this.dimmed?{color:r.color,level:1}:null,pin:!0,full:!0,furnitureId:a.id})}return t}openModuleCard(e){var i,a;let t=this.scene.find(s=>s.kind==="marker"&&s.id===e);if(!t)return;t.card&&(this.mediaFolded.delete(t.card),this.cardPing=t.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let n=(i=this.building)==null?void 0:i.floors.find(s=>s.id===t.floorId),r=n==null?void 0:n.furniture.find(s=>s.id===t.furnitureId);n&&r&&((a=this.viewer)==null||a.focus(n.id,r.x,r.z,fe(n,r)+r.h*.6,`module:${t.id}`))}onDeviceTap(e,t=0,n=0){var s;if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!1);if(e.startsWith("hh:")){let[l,d]=e.slice(3).split("#");((s=this.building)==null?void 0:s.floors.flatMap(u=>u.furniture).find(u=>u.id===d&&u.type==="waste_bin"))?(this._binInfo={furnitureId:d,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(l,t,n):ve(this,l);return}if(e.startsWith("ws:")){let l=e.slice(3);this.ro?this.showInfo(l,t,n):(!this.confirmSet.has(l)||confirm(I(this.hass,"confirm_switch",{name:J(this.hass,l)})))&&Xt(this.hass,l);return}if(this.ro){let l=this.building,d=l?l.energy.grid??ln(l,u=>{var p,h;return((h=(p=this.furnitureLinks)==null?void 0:p.get(u.id))==null?void 0:h.power)??null}).grid:null,c=e==="grid"?d:e.startsWith("detect:")?e.slice(7):e;c&&this.showInfo(c,t,n);return}let r=this.apOf(e);if(r){r.led?(!this.confirmSet.has(e)||confirm(I(this.hass,"confirm_switch",{name:this.hass?ro(this.hass,e):e})))&&Xt(this.hass,r.led):ve(this,e);return}let i=this.heaterPower(e);if(i){(!this.confirmSet.has(e)||confirm(I(this.hass,"confirm_switch",{name:J(this.hass,e)})))&&Xt(this.hass,i);return}if(e==="grid"){let l=this.building,d=l?l.energy.grid??ln(l,c=>{var u,p;return((p=(u=this.furnitureLinks)==null?void 0:u.get(c.id))==null?void 0:p.power)??null}).grid:null;d&&ve(this,d);return}if(e.startsWith("detect:")){ve(this,e.slice(7));return}let a=V(e);if(a==="cover"||a==="camera"){this._menu={entity:e,x:t,y:n};return}if(a&&zs.has(a)){if(this.confirmSet.has(e)&&!confirm(I(this.hass,"confirm_switch",{name:J(this.hass,e)})))return;Xt(this.hass,e)}else ve(this,e)}onOpeningTap(e,t,n,r){var d;let i=(d=this.openingLinks)==null?void 0:d.get(e);if(!i||!this.hass)return;if(i.lock&&!i.cover){this.ro?this.showInfo(i.lock,t,n):this._menu={entity:i.lock,x:t,y:n,doorLock:!0};return}let a=i.cover;if(!a)return;if(this.ro){this.showInfo(i.contact??a,t,n);return}if(r){ve(this,a);return}let s=this.hass.states[a];if(!s||Z(s)){ve(this,a);return}if(this.confirmSet.has(a)&&!confirm(I(this.hass,"confirm_switch",{name:J(this.hass,a)})))return;let[l]=a.split(".");this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:a})}effectiveTheme(){var e,t;return this.theme!=="auto"?this.theme:((t=(e=this.hass)==null?void 0:e.states["sun.sun"])==null?void 0:t.state)==="above_horizon"?"day":"neon"}startViewOf(){var e;return this.startView??((e=this.building)==null?void 0:e.settings.start_view)??null}currentView(){var e;return((e=this.viewer)==null?void 0:e.currentView())??null}resetView(){var e;this._through=null,(e=this.viewer)==null||e.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!q("energy_pro")||!e||this.roomId||!this.showEnergy)return w;let t=r=>I(this.hass,r),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:ce(this.hass,e.consumption)}),e.grid!==null){let r=e.grid<0;n.push({cls:r?"export":"grid",label:t(r?"energy_grid_export":"energy_grid_import"),value:ce(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:ce(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let r=[e.battery!==null?ce(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:r.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${ie(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),b`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?w:n.map(r=>b`<div class="fp3d-energy-item fp3d-energy-${r.cls}"><span>${r.label}</span><b>${r.value}</b></div>`)}
      ${this.flows!==null?w:b`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?w:b`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return w;let e=Ro[this.heatMode],t=this.heatMode==="temperature",n=t?Ut(this.hass,e.stops[0][0]):e.stops[0][0],r=t?Ut(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=t?Fe(this.hass):e.unit,a=s=>I(this.hass,s);return b`<div class="fp3d-legend">
      <b>${a(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${Tc(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${ie(this.hass,n,0)} ${i}</span><span>${ie(this.hass,r,0)} ${i}</span></span>
      ${this.heatValues.size?w:b`<span class="fp3d-legend-none">${a("heat_none_found")}</span>`}
    </div>`}skyColor(){let e=Vn[this.effectiveTheme()]??Vn.neon,t=this._sky;return e.night[0].map((n,r)=>Math.round(n+(e.day[0][r]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){var s;let e=this._sky,t=(l,d)=>`rgb(${l.map((c,u)=>Math.round(c+(d[u]-c)*e)).join(",")})`,n=Vn[this.effectiveTheme()]??Vn.neon,r=pd((s=this.building)==null?void 0:s.settings.backdrop),a=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}${r?`;background:${r}`:""}`;return b`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${a}
    >
      ${this._error?b`<p class="fp3d-error">${this._error}</p>`:w} ${this.clean?w:this.renderEnergy()} ${this.renderHologram()} ${this.clean?w:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?w:b`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?w:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderThrough()} ${this.renderCameraWall()} ${this.renderProxmox()}
      ${this.clean?w:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.renderMic()}
      ${this._micProbe&&this.hass?b`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,Ko())}></fp3d-mic-probe>`:w}
      ${this.showStats&&this._stats?b`<span class="fp3d-stats"
            ><b>${this._stats.fps?I(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):I(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?b`(${this._stats.busy.map(l=>I(this.hass,`stats_busy_${l}`)).join(", ")})`:w} ·
            ${I(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${I(this.hass,this._stats.low?"stats_low":"stats_full",{r:ie(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${ie(this.hass,this.syncMs,1)} ms`:""}</span
          >`:w}
    </div>`}static styles=[Be,rt,Ie`
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",Vi);function Ph(o,e){let t=e.attributes.current_temperature,n=typeof t=="number"&&Number.isFinite(t)?`${ie(o,Math.round(t))} \xB0C`:"",r=!["off","unavailable","unknown"].includes(e.state);return{text:[ke(o,e),n].filter(Boolean).join(" \xB7 "),on:r}}function ce(o,e){return Math.abs(e)>=1e3?`${ie(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function Ed(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var Ah=new Set(["rug","stairwell","grid_point","worktop"]);function Pd(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var Ni;function Ad(){let o=new URL("./neonplan3d-locate.js?v=eb2fbc574bce",new URL(import.meta.url)).href;return Ni??=import(o).catch(e=>{throw Ni=void 0,e}),Ni}var Ih=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function Id(o){let e=document.createElement("style");e.textContent=Ih;let t=document.createElement("div");t.className="fp3d-loclab",document.body.append(e,t);let n=null,r="",i=!0,a=async(d,c={})=>{let u=o().hass;if(u){try{n=await u.callWS({type:"neonplan3d/locate/rec",action:d,...c}),r=""}catch(p){r=p.message??String(p)}s()}},s=()=>{var m;let d=o().building,c=n,u=((m=c==null?void 0:c.mark)==null?void 0:m.room)??null,p=`<h4 data-a="toggle"><span>\u{1F4E1} Localizaci\xF3n \xB7 Grabaci\xF3n (laboratorio)</span><span>${i?"\u25BE":"\u25B8"}</span></h4>`;if(!i){t.innerHTML=p;return}let h=((c==null?void 0:c.devices)??[]).map(g=>{let _=g.t?Math.round(Date.now()/1e3-g.t):null;return`<div>\u231A ${st(g.title)}: ${_===null?"<small>a\xFAn sin se\xF1al</small>":`${g.rssi} dBm \xB7 ${st(g.scanner??"")} <small>hace ${_} s</small>`}</div>`}).join(""),f=((d==null?void 0:d.floors)??[]).map(g=>`<div class="fl">${st(g.name)}</div>`+g.rooms.map(_=>`<button data-room="${st(_.id)}" data-name="${st(_.name)}" class="${u===_.id?"on":""}">${st(_.name)}</button>`).join("")).join("");t.innerHTML=`${p}
      <div><button data-a="setup">\u2699 Configurar localizaci\xF3n</button></div>
      <div>${c!=null&&c.running?`<button class="rec" data-a="stop">\u25A0 Parar</button> <small>${Math.floor(c.seconds/60)}:${String(c.seconds%60).padStart(2,"0")} \xB7 ${c.lines} l\xEDneas</small>`:'<button data-a="start">\u25CF Empezar grabaci\xF3n</button>'}</div>
      ${r?`<div style="color:#ff8fa3">${st(r)}</div>`:""}
      ${h||(c?"<div><small>No hay claves de iPhone/Watch (Private BLE Device) en HA; se graba todo igualmente.</small></div>":"")}
      ${c!=null&&c.mark?`<div style="margin-top:6px">\u23F1 desde hace <b>${Th(Date.now()/1e3-c.mark.t)}</b> en <b>${st(c.mark.name)}</b> ${Date.now()/1e3-c.mark.t>=120?"\u2713 2 min conseguidos":""}</div>`:""}
      <div class="fl">Ahora estoy en \u2026</div>
      <button data-room="" class="${u?"":"on"}">\u{1F6B6} de camino / en ninguna parte</button>
      ${f}`};t.addEventListener("click",d=>{let c=d.target.closest("button,h4");if(!c)return;let u=c.dataset.a;if(u==="toggle")i=!i,s();else if(u==="start")a("start",{note:"lab walk"});else if(u==="stop")a("stop");else if(u==="setup"){let{hass:p,building:h}=o();p&&h&&Ad().then(f=>f.openLocateSetup(p,h,()=>o().hass))}else c.dataset.room!==void 0&&a("mark",c.dataset.room?{room:c.dataset.room,name:c.dataset.name}:{room:null})}),a("status");let l=window.setInterval(()=>{a("status")},1e3);return()=>{window.clearInterval(l),t.remove(),e.remove()}}function Th(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function st(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var qi;function zh(){let o=new URL("./neonplan3d-timetravel.js?v=41c7e1fc7f80",new URL(import.meta.url)).href;return qi??=import(o).catch(e=>{throw qi=void 0,e}),qi}var un=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),zh().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("CasaNeon: time travel failed to load",t),this.host.requestUpdate()}))}stop(){var e;this.active&&(this.starting=!1,(e=this.session)==null||e.dispose(),this.session=null,this.host.requestUpdate())}hass(e){var t;return((t=this.session)==null?void 0:t.hass)??e}};function Ch(){try{return matchMedia("(hover: none) and (pointer: coarse)").matches&&!matchMedia("(any-pointer: fine)").matches}catch{return!1}}var Rh={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"},ee={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},Wi=class extends Pe{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_proxmox:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0}};data=new qt(this);locateLab=null;tt=new un(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode=ee.get("walls")==="cut"?"cut":"auto",this._explode=ee.get("explode")!=="0",this._keepRoof=ee.get("roof")==="1";let e=ee.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=ee.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=ee.get("markers");this._markers=t==="none"||t==="all"||t==="room"?t:"important";let n=ee.get("pinSize");this._pinSize=n==="small"||n==="large"?n:"normal";let r=ee.get("heat");this._heat=r==="temperature"||r==="humidity"||r==="co2"||r==="values"?r:"none";let i=ee.get("theme");this._theme=i==="auto"||i&&_i.includes(i)?i:"neon";let a=ee.get("clock");this._clock=a==="tl"||a==="tr"||a==="bl"||a==="br"?a:"off";let s=ee.get("accent");this._accent=s&&/^#[0-9a-f]{6}$/i.test(s)?s:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let l=ee.get("floor_stack");this._floorStack=l==="stacked"||l==="single"?l:"dim",this._roomNames=ee.get("room_names")!=="0",this._controlsRight=ee.get("controls")==="right",this._keepView=ee.get("keep_view")==="1",this._angleLock=ee.get("angle_lock")==="1",this._trail=ee.get("trail")==="1",this._cameraWall=!1,this._proxmox=!1,this._clean=ee.get("clean")==="1",this._navWrap=ee.get("nav_wrap")==="1",this._optsOpen=!1,this._weather=ee.get("weather")!=="0",this._director=Di(),this._micProbe=!1,this._voiceHere=Ri(),this._screen=Fi()}t(e,t){return I(this.hass,e,t)}willUpdate(e){var n;e.has("hass")&&this.hass&&(this.data.setHass(this.hass),(n=this.tt.session)==null||n.setLive(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(r=>r.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){var e,t;return((t=(e=this.hass)==null?void 0:e.user)==null?void 0:t.is_admin)??!1}get canEdit(){return this.isAdmin&&!Ch()}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){var r;let{floorId:t,roomId:n}=e.detail;if((((r=this.data.building)==null?void 0:r.floors.length)??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,ee.set("walls",e)}setKeepRoof(e){this._keepRoof=e,ee.set("roof",e?"1":"0")}setExplode(e){this._explode=e,ee.set("explode",e?"1":"0")}setQuality(e){this._quality=e,ee.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let i of r.floors){let a=i.furniture.find(s=>s.id===e);a&&t(a,i)}this.data.edit(r)}editDevice(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let i of r.floors){let a=i.placements.find(s=>s.entity_id===e);a&&t(a,i)}this.data.edit(r)}moveDevice(e){let{id:t,x:n,z:r}=e.detail;this.editDevice(t,(i,a)=>{let[s,l]=Hi(a,i.x,i.z,n,r);Object.assign(i,{x:s,z:l})})}turnStep(){return V(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.placements=r.placements.filter(i=>i.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let t=this.data.building,n=t==null?void 0:t.floors.find(u=>u.placements.some(p=>p.entity_id===e)),r=n==null?void 0:n.placements.find(u=>u.entity_id===e);if(!n||!r)return w;let i=V(e),a=i==="light",s=i==="camera",l=r.mount==="ceiling",d=i?Kt(i,n.height,a||s?r.mount??(s?"wall":"ceiling"):null):1,c=(u,p,h,f,m,g)=>b`<label class="fp3d-size" title=${u}
        >${u}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${f}
          max=${m}
          .value=${String(Math.round(p*100)/100)}
          @change=${_=>{let x=parseFloat(_.target.value.replace(",","."));Number.isFinite(x)&&g(Math.min(m,Math.max(f,x)))}}
        />
      </label>`;return b`${a?b`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(u=>b`<option value=${u} ?selected=${u===(r.mount??"ceiling")}>${this.t(`lamp_${u}`)}</option>`)}
          </select>`:w}
      ${s?b`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${u=>this.editDevice(e,p=>Object.assign(p,{mount:u.target.value,y:null}))}>
              <option value="wall" ?selected=${!l}>${this.t("camera_mount_wall")}</option>
              <option value="ceiling" ?selected=${l}>${this.t("camera_mount_ceiling")}</option>
            </select>
            ${c(this.t("camera_fov_short"),r.fov??(l?360:90),5,10,360,u=>this.editDevice(e,p=>p.fov=u))}
            ${c(this.t("camera_reach_short"),r.reach??(l?3:4.5),.5,.5,50,u=>this.editDevice(e,p=>p.reach=u))}
            ${c(this.t("camera_tilt_short"),r.tilt??(l?65:20),5,0,90,u=>this.editDevice(e,p=>p.tilt=u))}`:w}
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
      ${r.y!==null?b`<button class="fp3d-chip" @click=${()=>this.editDevice(e,u=>u.y=null)}>${this.t("height_auto")}</button>`:w}`}furnitureName(e){var n;let t=(n=this.data.building)==null?void 0:n.floors.flatMap(r=>r.furniture).find(r=>r.id===e);return t?$e(this.hass,t.type):""}moveFurniture(e){var a;let{id:t,x:n,z:r}=e.detail,i=((a=this.data.building)==null?void 0:a.settings.wall_interior)??.12;this.editFurniture(t,(s,l)=>{let[d,c]=Hi(l,s.x,s.z,n,r);Object.assign(s,{x:d,z:c});let u=md(l,s,i);u&&Object.assign(s,u)})}renderSizeFields(e){var l,d,c;let t=(l=this.data.building)==null?void 0:l.floors.flatMap(u=>u.furniture).find(u=>u.id===e);if(!t)return w;let n=ha(this.hass,(d=this.data.building)==null?void 0:d.settings.units)==="imperial",r=u=>n?fa(u):String(Math.round(u*100)/100),i=u=>n?ma(u,"imperial"):parseFloat(u.replace(",",".")),a=(u,p)=>b`<label class="fp3d-size" title=${this.t(`size_${u}`)}
      >${p}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${r(t[u])}
        @change=${h=>{let f=i(h.target.value)??NaN;Number.isFinite(f)&&f>0&&this.editFurniture(e,m=>m[u]=Math.round(f*1e3)/1e3)}}
    /></label>`,s=(c=this.data.building)==null?void 0:c.floors.find(u=>u.furniture.some(p=>p.id===e));return b`${a("w",this.t("size_short_w"))}${a("d",this.t("size_short_d"))}${a("h",this.t("size_short_h"))}
    ${s&&gs(t)?b`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${r(t.mount_y??fe(s,t))}
              @change=${u=>{let p=i(u.target.value)??NaN;Number.isFinite(p)&&p>=0&&this.editFurniture(e,h=>h.mount_y=Math.round(p*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?b`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,u=>u.mount_y=null)}>${this.t("height_auto")}</button>`:w}`:w}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.furniture=r.furniture.filter(i=>i.id!==e);this.data.edit(n),this._selFurniture=null}rememberStartView(e=!1){var r;let t=this.data.building;if(!t)return;let n=e?null:(r=this.view3d())==null?void 0:r.currentView();!e&&!n||this.data.edit({...t,settings:{...t.settings,start_view:n??null}})}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!q("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this._proxmox=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(r,i)=>I(this.hass,r,i)})}}updated(){var t,n;if(!this.locateLab&&((n=(t=this.hass)==null?void 0:t.user)!=null&&n.is_admin)&&this.data.building&&Hr()&&(this.locateLab=Id(()=>({hass:this.hass,building:this.data.building}))),this.ttLinked||!this.data.building||!Dt()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&q("time_travel")&&this.toggleTimeTravel(e)}back(){var e,t;this._roomId?this._roomId=null:this._floorId&&(((e=this.data.building)==null?void 0:e.floors.length)??0)>1?this._floorId=null:(t=this.view3d())==null||t.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop(),(e=this.locateLab)==null||e.call(this),this.locateLab=null}render(){var n;let e=this.data.building,t=this.data.saveState;return b`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._micProbe&&this.hass?b`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,Ko())}></fp3d-mic-probe>`:w}
        ${this._clean&&this._mode==="view"?w:b`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>CasaNeon</h1>
          ${this.isAdmin?b`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                ${this.canEdit?b`<button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>`:w}
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}
                </button>
              </div>`:w}
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
                ${[..._i,"auto"].map(r=>b`<button
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
                      </button>`:w}
                </label>
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("clock")} title=${this.t("clock")}>
                <span class="fp3d-seg-label" aria-hidden="true">🕐</span>
                ${["off","tl","tr","bl","br"].map(r=>b`<button aria-pressed=${this._clock===r} title=${this.t(`clock_${r}`)} aria-label=${this.t(`clock_${r}`)} @click=${()=>{this._clock=r,ee.set("clock",r)}}>
                      ${r==="off"?this.t("clock_off"):Rh[r]}
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
                      >
                        📌
                      </button>
                      ${(n=this.data.building)!=null&&n.settings.start_view?b`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:w}`:w}
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
              </div>`:w}
          ${this._mode==="editor"&&t!=="idle"?b`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:w}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?w:this.renderNotices()}
        ${this.data.error&&!e?b`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:w}
        ${!e&&!this.data.error?b`<p class="fp3d-message">${this.t("loading")}</p>`:w}
        ${e?this._mode==="editor"&&this.canEdit?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):w}
      </div>
    `}renderNotices(){var n;let e=this.data,t=[];if(e.needsRestart&&(e.versionGap==="frontend"?t.push(b`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(b`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(b`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let r=new Date(e.draft.savedAt).toLocaleString((n=this.hass)==null?void 0:n.language);t.push(b`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:r})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?b`<div class="fp3d-notices">${t}</div>`:w}renderExtensions(){return this._editorReady?b`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`:(xr().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),b`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?b`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @director-here=${()=>this._director=Di()}
      @voice-here=${()=>{this._voiceHere=Ri(),this._screen=Fi()}}
      @mic-probe=${()=>dn().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(xr().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),b`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){var i,a;if(!e.floors.length||!e.floors.some(s=>s.rooms.length))return b`<div class="fp3d-empty">
        <p>${this.t(this.canEdit?"no_building_admin":"no_building")}</p>
        ${this.canEdit?b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:w}
      </div>`;let t=e.floors.find(s=>s.id===this._floorId),n=t?[t]:e.floors,r=this.tt.active;return b`
      ${this._clean?w:b`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?b`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(s=>b`<button
                  class="fp3d-chip"
                  aria-pressed=${s.id===this._floorId}
                  @click=${()=>{this._floorId=s.id,this._roomId=null}}
                >
                  ${s.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:w}
        ${n.flatMap(s=>[n.length>1&&Me(s).some(l=>l.name.trim())?b`<span class="fp3d-nav-floor">${s.name}</span>`:w,...Me(s).filter((l,d,c)=>l.name.trim()&&!(l.outdoor&&c.findIndex(u=>u.outdoor&&u.area_id===l.area_id&&u.name===l.name)<d)).map(l=>b`<button
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
          @click=${()=>{this._navWrap=!this._navWrap,ee.set("nav_wrap",this._navWrap?"1":"0")}}
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
          @clean-toggle=${()=>{this._clean=!this._clean,ee.set("clean",this._clean?"1":"0")}}
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
        ${this._roomId?b`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${s=>{var l;return(l=this.view3d())==null?void 0:l.lookThrough(s.detail.entity)}}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${r}
              .room=${e.floors.flatMap(s=>Me(s)).find(s=>s.id===this._roomId)??null}
              .floor=${e.floors.find(s=>Me(s).some(l=>l.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${Yt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:w}
        ${this.tt.session?b`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:w}
        ${this._clean?w:b`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?b`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?b`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:w}
          ${!this._floorId&&e.settings.roof.type!=="none"?b`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:w}
          ${e.floors.length>1&&this._floorId?b`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(s=>b`<button
                      aria-pressed=${this._floorStack===s}
                      @click=${()=>{this._floorStack=s,ee.set("floor_stack",s)}}
                    >
                      ${this.t(`floor_stack_short_${s}`)}
                    </button>`)}
              </div>`:w}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(s=>b`<button
                  aria-pressed=${this._heat===s}
                  @click=${()=>{this._heat=s,ee.set("heat",s)}}
                >
                  ${this.t(s==="none"?"heat_off":`heat_short_${s}`)}
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
          ${nc(this.hass)?b`<button
                class="fp3d-chip"
                aria-pressed=${this._proxmox}
                title=${this.t("pve_hint")}
                @click=${()=>{this._proxmox=!this._proxmox,this._proxmox&&(this._cameraWall=!1)}}
              >
                ${this.t("pve_title")}
              </button>`:w}
          <button
            class="fp3d-chip"
            aria-pressed=${this._weather}
            title=${this.t("weather_hint")}
            @click=${()=>{this._weather=!this._weather,ee.set("weather",this._weather?"1":"0")}}
          >
            ${q("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:w}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${r} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${q("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?b`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:w}
        </div>`}
        ${this._furnish?b`<div class="fp3d-furnish-bar">
              ${this._selFurniture?b`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,s=>s.mirror=!s.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?b`<span>${J(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:b`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:w}
      </div>
    `}static styles=[Be,rt,Ie`
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
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",Wi);function Go(o,e,t=new Date){var s;if(!o||o==="off")return!1;if(o==="sun")return((s=e==null?void 0:e.states["sun.sun"])==null?void 0:s.state)==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let r=Number(n[1])*60+Number(n[2]),i=Number(n[3])*60+Number(n[4]),a=t.getHours()*60+t.getMinutes();return r<=i?a>=r&&a<i:a>=r||a<i}var Td;function zd(){let o=new URL("./neonplan3d-card-editor.js?v=ea6316bfb97d",new URL(import.meta.url)).href;return Td??=import(o),Td}function Cd(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var Bi=class extends Pe{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new qt(this);tt=new un(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=Cd(),this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){var n;clearTimeout(this.cleanTimer);let t=((n=this._config)==null?void 0:n.controls_hide_after)??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){var t;clearTimeout(this.idleTimer);let e=((t=this._config)==null?void 0:t.idle_return)??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!q("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:(n==null?void 0:n.quality)??"auto",speed:(n==null?void 0:n.time_travel_speed)??null,range:(n==null?void 0:n.time_travel_range)??null,t:(r,i)=>I(this.hass,r,i)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){var e,t,n,r;if((e=this.tt.session)!=null&&e.playing){this.armIdle();return}this.tt.stop(),this._roomId=((t=this._config)==null?void 0:t.room)??null,this._floorId=void 0,(n=this.view3d())==null||n.resetView(),(r=this._config)!=null&&r.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{var e;this._fullscreen=!!document.fullscreenElement&&((e=this.shadowRoot)==null?void 0:e.contains(document.fullscreenElement))===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{var t,n;let e=Math.round(((t=window.visualViewport)==null?void 0:t.height)??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),(n=this._config)!=null&&n.fill&&!this._fullscreen){let r=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(r-this._top)>1)&&(this._top=r)}};connectedCallback(){var e;super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>{var t;return this._night=Go((t=this._config)==null?void 0:t.night,this.hass)},6e4)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){var n;if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=(n=this.shadowRoot)==null?void 0:n.querySelector("ha-card"),t=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e!=null&&e.requestFullscreen?e.requestFullscreen().catch(t):t()}static async getConfigElement(){return await zd(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=Cd(),this._heat=null,this._explode=null,this._orbit=!1,this._night=Go(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){var e;return Math.ceil((((e=this._config)==null?void 0:e.height)??420)/50)}getGridOptions(){var e,t;return{columns:"full",rows:(e=this._config)!=null&&e.fill?12:Math.ceil((((t=this._config)==null?void 0:t.height)??420)/56),min_rows:4}}willUpdate(e){var t,n;if(e.has("hass")&&this.hass){this.data.setHass(this.hass),(t=this.tt.session)==null||t.setLive(this.hass);let r=Go((n=this._config)==null?void 0:n.night,this.hass);r!==this._night&&(this._night=r)}}get canSwitch(){var e;return!((e=this._config)!=null&&e.floor)||this.thumbs}get thumbs(){var e,t;return((e=this._config)==null?void 0:e.floor_thumbs)??!((t=this._config)!=null&&t.floor)}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){var x,y,S,z,A,v,O,G,P,M,$,E,C,j,N,X,H,K,W,se,F;let e=this.data.building,t=((x=this._config)==null?void 0:x.height)??420,n=this._config;!this.roomApplied&&e&&(n!=null&&n.room)&&(this.roomApplied=!0,e.floors.some(B=>Me(B).some(oe=>oe.id===n.room))&&(this._roomId=n.room));let r=this._floorId===void 0?(n==null?void 0:n.floor)??null:this._floorId,i=e&&e.floors.length===1?e.floors[0].id:e!=null&&e.floors.some(B=>B.id===r)?r:null,a=!!this._roomId&&(n==null?void 0:n.room_panel)===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!i&&((e==null?void 0:e.floors.length)??0)>1,s=B=>(n==null?void 0:n.controls)===!0||Array.isArray(n==null?void 0:n.controls)&&n.controls.includes(B),l=["temperature","humidity","co2"].filter(B=>s(B)),d=this._walls??(n==null?void 0:n.walls)??"auto",c=this._heat??(n==null?void 0:n.heatmap)??"none",u=this._explode??(n==null?void 0:n.explode)??!0,p=this._fullscreen?"100%":n!=null&&n.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${t}px`,h=!!e&&!this._clean&&(a||(!!(n!=null&&n.controls)||!!(n!=null&&n.time_travel))&&!(this._roomId&&n.room_panel!==!1)),f=this.tt.active,m=(n==null?void 0:n.controls_hidden)!==void 0||((n==null?void 0:n.controls_hide_after)??0)>0,g=B=>I(this.hass,B),_=/^#[0-9a-f]{6}$/i.test((n==null?void 0:n.accent)??"")?n.accent:null;return b`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${_?`--fp3d-accent:${_}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${f?"fp3d-tt":""}" style="height:${p}">
        ${e&&e.floors.some(B=>B.rooms.length)?b`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${((y=this.tt.session)==null?void 0:y.replay)??null}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${i}
              .roomId=${this._roomId}
              .wallMode=${d}
              .explode=${u}
              .keepRoof=${(n==null?void 0:n.roof_fade)===!1}
              .hideRoof=${(n==null?void 0:n.roof)===!1}
              .quality=${((S=this._config)==null?void 0:S.quality)??"auto"}
              ?showStats=${((z=this._config)==null?void 0:z.stats)??!1}
              .markerMode=${((A=this._config)==null?void 0:A.markers)??"important"}
              .pinSize=${((v=this._config)==null?void 0:v.marker_size)??"normal"}
              .markerNames=${((O=this._config)==null?void 0:O.marker_names)===!0}
              .central=${((G=this._config)==null?void 0:G.central)!==!1}
              .walkable=${((P=this._config)==null?void 0:P.walk)!==!1}
              .petsOn=${((M=this._config)==null?void 0:M.pets)!==!1}
              .ghostOn=${(($=this._config)==null?void 0:$.ghost)!==!1}
              .buttons=${((C=(E=this._config)==null?void 0:E.buttons)==null?void 0:C.map((B,oe)=>({id:`card_${oe}`,...B})))??null}
              .heatMode=${c}
              .theme=${((j=this._config)==null?void 0:j.theme)??"neon"}
              .clock=${((N=this._config)==null?void 0:N.clock)??null}
              .accent=${((X=this._config)==null?void 0:X.accent)??null}
              .showEnergy=${((H=this._config)==null?void 0:H.energy)??!0}
              .flows=${((K=this._config)==null?void 0:K.flows)??null}
              .holograms=${((W=this._config)==null?void 0:W.holograms)??null}
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
              .screen=${((se=n==null?void 0:n.screen)==null?void 0:se.trim())||null}
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
              @room-tap=${B=>{if(this.canSwitch&&((e==null?void 0:e.floors.length)??0)>1&&B.detail.floorId&&i!==B.detail.floorId){this._floorId=B.detail.floorId,this._roomId=null;return}B.detail.roomId&&(this._roomId=B.detail.roomId===this._roomId?null:B.detail.roomId)}}
              @floor-tap=${B=>{this._floorId=B.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:b`<p class="fp3d-card-msg">${this.data.error??(e?I(this.hass,"no_building"):I(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&((F=this._config)==null?void 0:F.room_panel)!==!1?b`<fp3d-room-panel
              @camera-look=${B=>{var oe;return(oe=this.view3d())==null?void 0:oe.lookThrough(B.detail.entity)}}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${f}
              .room=${e.floors.flatMap(B=>Me(B)).find(B=>B.id===this._roomId)??null}
              .floor=${e.floors.find(B=>Me(B).some(oe=>oe.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${Yt(this.hass,e.floors)}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:w}
        ${h&&e?b`<div class="fp3d-card-controls">
              ${a?b`<button class="fp3d-chip" @click=${()=>this.back()}>${g("back")}</button>`:w}
              ${n!=null&&n.time_travel?b`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${f} title=${g("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${q("time_travel")?"\u23EA":"\u{1F512}"} ${g("tt_chip")}
                  </button>`:w}
              ${n!=null&&n.camera_wall?b`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${g("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${g("cameras_short")}</button>`:w}
              ${s("walls")?b`<div class="fp3d-seg">
                    <button aria-pressed=${d==="auto"} @click=${()=>this.setWalls("auto")}>${g("walls_auto")}</button>
                    <button aria-pressed=${d==="cut"} @click=${()=>this.setWalls("cut")}>${g("walls_cut")}</button>
                  </div>`:w}
              ${s("floors")&&e.floors.length>1&&!i?b`<div class="fp3d-seg">
                    <button aria-pressed=${u} @click=${()=>this._explode=!0}>${g("floors_apart")}</button>
                    <button aria-pressed=${!u} @click=${()=>this._explode=!1}>${g("floors_stacked")}</button>
                  </div>`:w}
              ${l.length?b`<div class="fp3d-seg" role="group" aria-label=${g("heatmap")}>
                    ${["none",...l].map(B=>b`<button aria-pressed=${c===B} @click=${()=>this._heat=B}>
                          ${g(B==="none"?"heat_off":`heat_short_${B}`)}
                        </button>`)}
                  </div>`:w}
            </div>`:w}
        ${this.tt.session?b`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:w}
        ${n!=null&&n.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?b`<button class="fp3d-card-full" title=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:w}
        ${n!=null&&n.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?b`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?b`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:w}
      </div>
    </ha-card>`}static styles=[Be,rt,Ie`
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
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",Bi);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:I(void 0,"card_name"),description:I(void 0,"card_description"),preview:!1})}pa();Bo();
