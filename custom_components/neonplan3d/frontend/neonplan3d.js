Array.prototype.at||Object.defineProperty(Array.prototype,"at",{configurable:!0,writable:!0,value:function(e){let t=Math.trunc(e)||0;return this[t<0?this.length+t:t]}});typeof globalThis.structuredClone!="function"&&(globalThis.structuredClone=o=>o===void 0?o:JSON.parse(JSON.stringify(o)));var Ea=new URL(import.meta.url),$a=Ea.searchParams.get("v"),Ma=o=>new URL(`./fonts/${o}${$a?`?v=${$a}`:""}`,Ea).href,Sa="U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD";function Pa(){if(typeof document>"u"||document.getElementById("fp3d-fonts"))return;let o=document.createElement("style");o.id="fp3d-fonts",o.textContent=`
@font-face{font-family:"Figtree";font-style:normal;font-display:swap;font-weight:300 900;src:url(${Ma("figtree.woff2")}) format("woff2");unicode-range:${Sa}}
@font-face{font-family:"Bricolage Grotesque";font-style:normal;font-display:swap;font-weight:200 800;src:url(${Ma("bricolage-grotesque.woff2")}) format("woff2");unicode-range:${Sa}}`,document.head.append(o)}function Ia(o,e){var t,n;return e==="metric"||e==="imperial"?e:((n=(t=o==null?void 0:o.config)==null?void 0:t.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function hu(o,e){return String(Number(o.toFixed(e)))}function Aa(o,e=2){let t=o<0?"-":"",n=Math.round(Math.abs(o)/.0254*(e>=2?10:1))/(e>=2?10:1),r=Math.floor(n/12+1e-9),i=n-r*12,a=hu(i,e>=2?1:0);return r?i<.05?`${t}${r}'`:`${t}${r}' ${a}"`:`${t}${a}"`}function Ta(o,e){let t=o.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!t)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,r=0,i=!1,a=!1,s=t;for(let l of t.matchAll(n)){let u=Number(l[1]);if(!Number.isFinite(u))return null;let c=l[2];i=!0,s=s.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(r+=u*.3048,a=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?r+=u*.0254:c==="mm"?r+=u/1e3:c==="cm"?r+=u/100:c==="m"?r+=u:r+=e==="imperial"?u*(a?.0254:.3048):u}return!i||/[^\s+]/.test(s)?null:r}function kn(o){var t;let e=(t=o==null?void 0:o.locale)==null?void 0:t.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let n=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return n?{hourCycle:n==="h11"||n==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var io=globalThis,ao=io.ShadowRoot&&(io.ShadyCSS===void 0||io.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ir=Symbol(),za=new WeakMap,$n=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ir)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ao&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=za.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&za.set(t,e))}return e}toString(){return this.cssText}},Ca=o=>new $n(typeof o=="string"?o:o+"",void 0,ir),Ae=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new $n(t,o,ir)},Ra=(o,e)=>{if(ao)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=io.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},ar=ao?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Ca(t)})(o):o;var{is:fu,defineProperty:mu,getOwnPropertyDescriptor:gu,getOwnPropertyNames:bu,getOwnPropertySymbols:_u,getPrototypeOf:vu}=Object,so=globalThis,Fa=so.trustedTypes,yu=Fa?Fa.emptyScript:"",sr=so.reactiveElementPolyfillSupport,Mn=(o,e)=>o,lr={toAttribute(o,e){switch(e){case Boolean:o=o?yu:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},La=(o,e)=>!fu(o,e),Ha={attribute:!0,type:String,converter:lr,reflect:!1,useDefault:!1,hasChanged:La};Symbol.metadata??=Symbol("metadata"),so.litPropertyMetadata??=new WeakMap;var Qe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ha){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&mu(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=gu(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:r,set(a){let s=r==null?void 0:r.call(this);i==null||i.call(this,a),this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ha}static _$Ei(){if(this.hasOwnProperty(Mn("elementProperties")))return;let e=vu(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Mn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Mn("properties"))){let t=this.properties,n=[...bu(t),..._u(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(ar(r))}else e!==void 0&&t.push(ar(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ra(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var i;let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let a=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:lr).toAttribute(t,n.type);this._$Em=e,a==null?this.removeAttribute(r):this.setAttribute(r,a),this._$Em=null}}_$AK(e,t){var i,a;let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let s=n.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)==null?void 0:i.fromAttribute)!==void 0?s.converter:lr;this._$Em=r;let u=l.fromAttribute(t,s.type);this[r]=u??((a=this._$Ej)==null?void 0:a.get(r))??u,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){var a;if(e!==void 0){let s=this.constructor;if(r===!1&&(i=this[e]),n??=s.getPropertyOptions(e),!((n.hasChanged??La)(i,t)||n.useDefault&&n.reflect&&i===((a=this._$Ej)==null?void 0:a.get(e))&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,a]of this._$Ep)this[i]=a;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,a]of r){let{wrapped:s}=a,l=this[i];s!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,a,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Qe.elementStyles=[],Qe.shadowRootOptions={mode:"open"},Qe[Mn("elementProperties")]=new Map,Qe[Mn("finalized")]=new Map,sr==null||sr({ReactiveElement:Qe}),(so.reactiveElementVersions??=[]).push("2.1.2");var gr=globalThis,Oa=o=>o,lo=gr.trustedTypes,Da=lo?lo.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ba="$lit$",nt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ua="?"+nt,wu=`<${Ua}>`,kt=document,En=()=>kt.createComment(""),Pn=o=>o===null||typeof o!="object"&&typeof o!="function",br=Array.isArray,xu=o=>br(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",cr=`[ 	
\f\r]`,Sn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ja=/-->/g,Va=/>/g,wt=RegExp(`>|${cr}(?:([^\\s"'>=/]+)(${cr}*=${cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Na=/'/g,qa=/"/g,Ga=/^(?:script|style|textarea|title)$/i,_r=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),_=_r(1),Mt=_r(2),Vf=_r(3),$t=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Wa=new WeakMap,xt=kt.createTreeWalker(kt,129);function Ka(o,e){if(!br(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Da!==void 0?Da.createHTML(e):e}var ku=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",a=Sn;for(let s=0;s<t;s++){let l=o[s],u,c,d=-1,p=0;for(;p<l.length&&(a.lastIndex=p,c=a.exec(l),c!==null);)p=a.lastIndex,a===Sn?c[1]==="!--"?a=ja:c[1]!==void 0?a=Va:c[2]!==void 0?(Ga.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=wt):c[3]!==void 0&&(a=wt):a===wt?c[0]===">"?(a=r??Sn,d=-1):c[1]===void 0?d=-2:(d=a.lastIndex-c[2].length,u=c[1],a=c[3]===void 0?wt:c[3]==='"'?qa:Na):a===qa||a===Na?a=wt:a===ja||a===Va?a=Sn:(a=wt,r=void 0);let h=a===wt&&o[s+1].startsWith("/>")?" ":"";i+=a===Sn?l+wu:d>=0?(n.push(u),l.slice(0,d)+Ba+l.slice(d)+nt+h):l+nt+(d===-2?s:h)}return[Ka(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},In=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,a=0,s=e.length-1,l=this.parts,[u,c]=ku(e,t);if(this.el=o.createElement(u,n),xt.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=xt.nextNode())!==null&&l.length<s;){if(r.nodeType===1){if(r.hasAttributes())for(let d of r.getAttributeNames())if(d.endsWith(Ba)){let p=c[a++],h=r.getAttribute(d).split(nt),m=/([.?@])?(.*)/.exec(p);l.push({type:1,index:i,name:m[2],strings:h,ctor:m[1]==="."?pr:m[1]==="?"?hr:m[1]==="@"?fr:Ut}),r.removeAttribute(d)}else d.startsWith(nt)&&(l.push({type:6,index:i}),r.removeAttribute(d));if(Ga.test(r.tagName)){let d=r.textContent.split(nt),p=d.length-1;if(p>0){r.textContent=lo?lo.emptyScript:"";for(let h=0;h<p;h++)r.append(d[h],En()),xt.nextNode(),l.push({type:2,index:++i});r.append(d[p],En())}}}else if(r.nodeType===8)if(r.data===Ua)l.push({type:2,index:i});else{let d=-1;for(;(d=r.data.indexOf(nt,d+1))!==-1;)l.push({type:7,index:i}),d+=nt.length-1}i++}}static createElement(e,t){let n=kt.createElement("template");return n.innerHTML=e,n}};function Bt(o,e,t=o,n){var a,s;if(e===$t)return e;let r=n!==void 0?(a=t._$Co)==null?void 0:a[n]:t._$Cl,i=Pn(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((s=r==null?void 0:r._$AO)==null||s.call(r,!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=Bt(o,r._$AS(o,e.values),r,n)),e}var ur=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??kt).importNode(t,!0);xt.currentNode=r;let i=xt.nextNode(),a=0,s=0,l=n[0];for(;l!==void 0;){if(a===l.index){let u;l.type===2?u=new An(i,i.nextSibling,this,e):l.type===1?u=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(u=new mr(i,this,e)),this._$AV.push(u),l=n[++s]}a!==(l==null?void 0:l.index)&&(i=xt.nextNode(),a++)}return xt.currentNode=kt,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},An=class o{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Bt(this,e,t),Pn(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==$t&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xu(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Pn(this._$AH)?this._$AA.nextSibling.data=e:this.T(kt.createTextNode(e)),this._$AH=e}$(e){var i;let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=In.createElement(Ka(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{let a=new ur(r,this),s=a.u(this.options);a.p(t),this.T(s),this._$AH=a}}_$AC(e){let t=Wa.get(e.strings);return t===void 0&&Wa.set(e.strings,t=new In(e)),t}k(e){br(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(En()),this.O(En()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let r=Oa(e).nextSibling;Oa(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Ut=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=Bt(this,e,t,0),a=!Pn(e)||e!==this._$AH&&e!==$t,a&&(this._$AH=e);else{let s=e,l,u;for(e=i[0],l=0;l<i.length-1;l++)u=Bt(this,s[n+l],t,l),u===$t&&(u=this._$AH[l]),a||=!Pn(u)||u!==this._$AH[l],u===x?e=x:e!==x&&(e+=(u??"")+i[l+1]),this._$AH[l]=u}a&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},pr=class extends Ut{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},hr=class extends Ut{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},fr=class extends Ut{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=Bt(this,e,t,0)??x)===$t)return;let n=this._$AH,r=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==x&&(n===x||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},mr=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Bt(this,e)}};var dr=gr.litHtmlPolyfillSupport;dr==null||dr(In,An),(gr.litHtmlVersions??=[]).push("3.3.3");var Ya=(o,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,r=n._$litPart$;if(r===void 0){let i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new An(e.insertBefore(En(),i),i,void 0,t??{})}return r._$AI(o),r};var Tn=globalThis,Ie=class extends Qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ya(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return $t}},Qa;Ie._$litElement$=!0,Ie.finalized=!0,(Qa=Tn.litElementHydrateSupport)==null||Qa.call(Tn,{LitElement:Ie});var vr=Tn.litElementPolyfillSupport;vr==null||vr({LitElement:Ie});(Tn.litElementVersions??=[]).push("4.2.2");async function Ja(o){return o.callWS({type:"neonplan3d/building/get"})}async function zn(o,e){return(await o.callWS({type:"neonplan3d/building/save",building:e})).revision}function Xa(o,e){return o.connection.subscribeMessage(t=>e(t.revision),{type:"neonplan3d/building/subscribe"})}function Za(o,e,t){return o.connection.subscribeMessage(n=>{"announce"in n?t==null||t(n.announce):e(n)},{type:"neonplan3d/voice/subscribe",...t?{announce:!0}:{}})}async function es(o,e,t,n){return(await o.callWS({type:"neonplan3d/voice/answer",ask_id:e,text:t,answered:n})).taken}async function ts(o,e){return(await o.callWS({type:"neonplan3d/image/get",image_id:e})).data}async function ns(o){return(await o.callWS({type:"neonplan3d/packs/list"})).packs}var os=2.1;var $u=new Set(["pending","firmware_mismatch","upgrading","provisioning","adopting","deleting"]),Mu=new Set(["disconnected","heartbeat_missed","inform_error","adoption_failed","isolated"]);function Su(o,e){var n,r;let t=e&&e!=="none"?(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id:null;return t&&o.entities?Object.values(o.entities).filter(i=>i.device_id===t).map(i=>i.entity_id):[]}function Eu(o){let e=o==null?void 0:o.attributes.options;return Array.isArray(e)&&e.includes("connected")&&e.includes("disconnected")}function Cn(o,e){let t=Su(o,e.entity),n=i=>{var a,s,l;return`${i} ${((a=o.states[i])==null?void 0:a.attributes.friendly_name)??""} ${((l=(s=o.entities)==null?void 0:s[i])==null?void 0:l.translation_key)??""}`.toLowerCase()},r=i=>t.find(a=>a.startsWith("sensor.")&&i.test(n(a)))??null;return{state:t.find(i=>i.startsWith("sensor.")&&Eu(o.states[i]))??null,clients:r(/clients|clientes/),led:t.find(i=>i.startsWith("light."))??null,cpu:r(/cpu/),memory:r(/memor/),restart:t.find(i=>{var a;return i.startsWith("button.")&&(((a=o.states[i])==null?void 0:a.attributes.device_class)==="restart"||/restart|reinici/.test(n(i)))})??null}}var yr=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function rs(o,e){var r;let t=e.state?o.states[e.state]:void 0;return t?{status:Mu.has(t.state)||t.state==="unavailable"?"down":$u.has(t.state)?"busy":"up",led:e.led?((r=o.states[e.led])==null?void 0:r.state)==="on":!0,clients:yr(e.clients?o.states[e.clients]:void 0),cpu:yr(e.cpu?o.states[e.cpu]:void 0),memory:yr(e.memory?o.states[e.memory]:void 0)}:null}function co(o,e){var r,i,a,s;let t=(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id,n=t?(a=o.devices)==null?void 0:a[t]:void 0;return(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||((s=o.states[e])==null?void 0:s.attributes.friendly_name)||e}function is(o){return o.status==="down"?[1,.22,.25]:o.status==="busy"?[1,.65,.15]:o.led?[.35,.65,1]:null}function Pu(o){return o.shape==="cyl"&&(o.axis??"y")==="y"&&o.y>.9&&o.h<.02}function kr(o){let e=we(o);return!!e&&/(hob|cooker|stove|herd)/.test(o)&&e.parts.filter(Pu).length>=2}var as=[],xr=new Map,ss=0;function ls(o){as=o,xr=new Map(o.flatMap(e=>e.items.map(t=>[Iu(e.id,t.id),t]))),ss++}function Gt(){return as}function Kt(){return ss}function Iu(o,e){return`pack:${o}:${e}`}function ot(o){return o.startsWith("pack:")}function uo(o){return ot(o)?o.endsWith(":curtain_motor")?"curtain":o.endsWith(":screen_roll")?"screen":null:null}function Yt(o){return o==="robot_vacuum"||ot(o)&&o.endsWith(":robot_vacuum")}function Au(o){return o.z>.05}function cs(o){let e=((o==null?void 0:o.parts)??[]).filter(t=>t.shape==="cyl"&&Au(t));return e.length?e.reduce((t,n)=>n.w*n.d>t.w*t.d?n:t).z:.227}function ds(o){return ot(o)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(o)}var Tu={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function us(o){var e;return(e=we(o))==null?void 0:e.parts.find(t=>t.screen)}function we(o){if(!ot(o))return;let e=xr.get(o);if(e)return e;let[,t,...n]=o.split(":"),r=Tu[t];return r?xr.get(`pack:${r}:${n.join(":")}`):void 0}function ps(o){return o.name.es??o.name.en??Object.values(o.name)[0]??o.id}var zu={architecture:"Arquitectura y acabados",balcony:"Balc\xF3n y espacios peque\xF1os",bath:"Ba\xF1o",cabinet_kit:"Armarios y estanter\xEDas \u2013 kit",deco:"Decoraci\xF3n y plantas",dining_hall:"Comedor y recibidor",fun_halloween:"Pack divertido: Halloween",fun_pets:"Pack divertido: Mascotas",bedroom:"Dormitorio",cinema:"Cine en casa y Hi-Fi",exclusive:"Exclusivo: frigor\xEDfico inteligente",fitness:"Fitness",garage:"Garaje y taller",garden:"Jard\xEDn y terraza",kids:"Cuarto infantil",kitchen:"Cocina",living:"Sal\xF3n",office:"Oficina y gaming",pets:"Mascotas",smarthome:"Smart home y tecnolog\xEDa",stairs:"Escaleras y barandillas",utility:"Lavadero e instalaciones",vehicles:"Veh\xEDculos",starter:"Pack de inicio",pro_auto:"Pro: Auto Pro",pro_timetravel:"Pro: Viaje en el tiempo",pro_pool:"Pro: Piscina Pro",pro_camera:"Pro: Cabina de c\xE1mara",pro_energy:"Pro: Energ\xEDa Pro",pro_screens:"Pro: Pantallas en directo",pro_sound:"Pro: Sonido y Cine",pro_weather:"Pro: Tiempo exterior",pro_heat:"Pro: Calor Pro",pro_household:"Pro: Hogar Pro"};function hs(o){let e=o.id.replace(/^mastershort\./,""),t=e.endsWith("_sample"),n=zu[t?e.slice(0,-7):e];return n?t?`${n} \u2013 muestra`:n:o.name}function fe(o,e){let t=we(e.type);if(e.mount_y!=null)return e.mount_y;if(e.type==="lamp_wall")return fs;if(e.type==="access_point")return e.variant==="wall"?os:Math.max(0,o.height-Math.max(.005,e.h));if(po.has(e.type))return Math.max(0,o.height-ho(e.type,e.h));if(e.type==="led_strip")return Math.max(0,o.height-.04-Math.max(.02,e.h));switch(t==null?void 0:t.mount){case"surface":return wr(o,e)+fo(o,e.x,e.z,e.h);case"wall":return t.wall_y??1;case"ceiling":return Math.max(0,o.height-e.h);default:return t?wr(o,e):ms(e)||wr(o,e)}}function wr(o,e){let t=o.rooms.filter(n=>n.points.length>=3);return!t.length||t.some(n=>U([e.x,e.z],n.points))?0:Je(o,e.x,e.z)}var _s={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},im=Object.keys(_s),vs=1;function Ru(o){return o.variant&&_s[o.variant]?o.variant:"80"}function ys(o){return{30:1,50:2,80:3,100:4}[Ru(o)]??3}function Rn(o,e){var s,l;let t=e.entity&&e.entity!=="none"?e.entity:null,n=t?(l=(s=o.entities)==null?void 0:s[t])==null?void 0:l.device_id:null,r=n&&o.entities?Object.values(o.entities).filter(u=>u.device_id===n).map(u=>u.entity_id):[],i=u=>{var c,d,p;return`${u} ${((c=o.states[u])==null?void 0:c.attributes.friendly_name)??""} ${((p=(d=o.entities)==null?void 0:d[u])==null?void 0:p.translation_key)??""}`.toLowerCase()},a=(u,c,d)=>r.find(p=>p.startsWith(`${u}.`)&&c.test(i(p))&&!(d&&d.test(i(p))))??null;return{heater:t,heating:a("binary_sensor",/heating|calentando|heizt/),showers:a("sensor",/shower|ducha|dusch/),remaining:a("sensor",/remaining|restante|restzeit/),power:a("switch",/power|encendid|_on\b/,/eco|legionella/),eco:a("switch",/\beco/)}}var bs=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function ws(o,e){var l,u,c;let t=e.heater?o.states[e.heater]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;let n=e.power?(l=o.states[e.power])==null?void 0:l.state:void 0,r=n!==void 0?n==="on":t.state!=="off",i=t.attributes,a=r&&(e.heating?((u=o.states[e.heating])==null?void 0:u.state)==="on":i.hvac_action==="heating"),s=bs(e.remaining?o.states[e.remaining]:void 0);return{on:r,heating:a,current:typeof i.current_temperature=="number"?i.current_temperature:null,target:typeof i.temperature=="number"?i.temperature:null,showers:bs(e.showers?o.states[e.showers]:void 0),remaining:a&&s!==null&&s>0?s:null,eco:e.eco?((c=o.states[e.eco])==null?void 0:c.state)==="on":!1}}var Ue={field:null,size:1,right:0,up:0};var ks=["rain","snow","clouds","lightning","sky"];var Fu={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Mr(o){return o==="hedge"||o==="fence"||o==="pergola"}function Sr(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!Mr(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function ge(o){return[...o.rooms,...Sr(o)]}function Hu(o,e,t){let n=o.slope??0;if(!n||o.type==="pool")return 0;let r=o.slope_dir??"x",i=(u,c)=>r==="x"?u:r==="-x"?-u:r==="z"?c:-c,a=1/0,s=-1/0;for(let[u,c]of o.points){let d=i(u,c);a=Math.min(a,d),s=Math.max(s,d)}if(s-a<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(e,t)-a)/(s-a)));return n*l}function Lu(o,e,t,n){return Ss(o,e)+Fu[e.type]-Ou(o,e,t,n)}var Er=-.2,$r={set:!1,level:Er};function $s(o){let e=(o==null?void 0:o.settings.terrain)??null;$r={set:(e==null?void 0:e.level)!=null,level:(e==null?void 0:e.level)??Er}}function Ms(o){return o.elevation>.3?0:$r.set?$r.level-o.elevation:Er}function Ss(o,e){return Ms(o)+(e.offset??0)}function Ou(o,e,t,n){return e.type==="pool"?0:Hu(e,t,n)}function Je(o,e,t){let n=(o.outdoor??[]).filter(i=>!Mr(i.type)&&i.type!=="pool"&&U([e,t],i.points)),r=[...n].reverse().find(i=>i.cut)??n[0];return r?Lu(o,r,e,t):Ms(o)}function Es(o,e){return Ss(o,e)+(e.above?Ps(e):Math.min(2,Math.max(-.3,e.rim??.06)))}function Du(o){return o.depth&&o.depth>=.3?Math.min(5,o.depth):o.above?Ps(o):1.5}function ju(o,e){return e.above?!1:(o.outdoor??[]).some(t=>t!==e&&t.type!=="pool"&&!Mr(t.type)&&!t.cut&&t.points.length>=3&&e.points.every(n=>U(n,t.points)))}function Fn(o,e){return!e.above&&!ju(o,e)?Qt(o,e)-.05:Es(o,e)-Du(e)}function Qt(o,e){return Es(o,e)-.15}function Ps(o){return o.height&&o.height>.3?o.height:1.2}var Vu={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null};var Is={type:"none",pitch:35,overhang:.4},Nu={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Is}};var As=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Ts=.3;var zs=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),fs=1.75;function Cs(o){if(["lamp_ceiling_fan","lamp_pendant","stairwell","parking"].includes(o.type)||Pr.has(o.type))return!1;let e=we(o.type);return!((e==null?void 0:e.mount)==="ceiling"&&e.light&&e.light!=="panel")}var po=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function ho(o,e){return o==="lamp_spot"?Math.max(.06,e)+.008:o==="lamp_ceiling"||o==="lamp_panel"?Math.max(.02,e)+.005:.02}var Pr=new Set(["stairs","stairs_u"]);function Ir(o){var e;return zs.has(o)||!!((e=we(o))!=null&&e.light)}var qu=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var Wu=1.05,Bu=.3;function ms(o){switch(o.type){case"home_battery":return o.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-o.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return o.variant==="bank"?.75:o.variant==="pole"||o.variant==="pillar"||o.variant==="parcel"?0:1;case"wall_switch":return Wu;case"wall_socket":return Bu;case"water_heater":return vs;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var xs=.04,Uu=1.2;function fo(o,e,t,n=0){var i;let r=0;for(let a of o.furniture)!(qu.has(a.type)||(i=we(a.type))!=null&&i.surface)||!U([e,t],St(a))||a.type==="worktop"&&n>0&&a.h-xs>=Uu&&n<=a.h-xs-.02||(r=Math.max(r,a.h));return r}var Cu=new Set([...zs,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),gs={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_ceiling_fan:[1.2,1.2,.35],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.086,.05,.086],wall_socket:[.086,.05,.086],water_heater:[.506,.275,1.066],access_point:[.16,.16,.035],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Gu=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Ku=["standard","bars","glass_wall"];function Yu(o,e){return o.type==="door"?o.style&&Gu.includes(o.style)?o.style:e?"front":"interior":o.style&&Ku.includes(o.style)?o.style:"standard"}function Qu(o,e,t,n){if(e!=="sidelight"&&e!=="sidelights")return null;let r=e==="sidelights",i=o-.04,a=Math.min(1.05,Math.max(.6,i-(r?.6:.3))),s=(i-a)/(r?2:1),l=n.sidelight_width??s,u=r?n.sidelight_width2??n.sidelight_width??s:0;l=Math.max(.1,l),u=r?Math.max(.1,u):0;let c=i-.5;if(l+u>c){let p=Math.max(0,c)/(l+u);l*=p,u*=p}return r?{panels:[[.02,.02+l],[o-.02-u,o-.02]],x0:.02+l,x1:o-.02-u}:(t?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:o-.02}:{panels:[[o-.02-l,o-.02]],x0:.02,x1:o-.02-l}}function Rs(o,e){let t=o.width,n=Qu(t,Yu(o,!1),e,o),r=(n==null?void 0:n.x0)??0,i=(n==null?void 0:n.x1)??t;return o.leaves!==2?(r+i)/2:e?r+(i-r)/4:i-(i-r)/4}function Ar(o){var e;o.energy={...Vu,...o.energy??{}},o.presence=o.presence??[],o.settings={...Nu,...o.settings,roof:{...Is,...((e=o.settings)==null?void 0:e.roof)??{}}};for(let t of o.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(r=>({...r,panel:r.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(r=>({...r,mount:r.mount??null,rotation:r.rotation??0})),t.furniture=t.furniture.map(r=>({...r,entity:r.entity??null,power:r.power??null}));let n=t.placements.filter(r=>r.entity_id.startsWith("light.")&&!r.pin);if(n.length){let r={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of n){let a=r[i.mount??"ceiling"],[s,l,u]=gs[a];t.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:a,x:i.x,z:i.z,rotation:0,w:s,d:l,h:u,variant:null,entity:i.entity_id,power:null})}t.placements=t.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}t.openings=t.openings.map(r=>({...r,hinge:r.hinge??"left",leaves:r.leaves??1,swing:r.swing??"in",style:r.style??null,cover:r.cover??null,contact:r.contact??null,contact2:r.contact2??null,tilt:r.tilt??null}))}return o}function Fs(o){return`${o}_${Math.random().toString(36).slice(2,10)}`}function je(o){let e=0;for(let t=0;t<o.length;t++){let[n,r]=o[t],[i,a]=o[(t+1)%o.length];e+=n*a-i*r}return e/2}function Hs(o){return Math.abs(je(o))}function Te(o){let e=je(o);if(Math.abs(e)<1e-9){let r=o.length||1;return[o.reduce((i,a)=>i+a[0],0)/r,o.reduce((i,a)=>i+a[1],0)/r]}let t=0,n=0;for(let r=0;r<o.length;r++){let[i,a]=o[r],[s,l]=o[(r+1)%o.length],u=i*l-s*a;t+=(i+s)*u,n+=(a+l)*u}return[t/(6*e),n/(6*e)]}function St(o){let e=o.rotation*Math.PI/180,t=Math.cos(e),n=Math.sin(e),r=o.w/2,i=o.d/2;return[[-r,-i],[r,-i],[r,i],[-r,i]].map(([a,s])=>[o.x+a*t-s*n,o.z+a*n+s*t])}function U(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,a]=e[n],[s,l]=e[r];a>o[1]!=l>o[1]&&o[0]<(s-i)*(o[1]-a)/(l-a)+i&&(t=!t)}return t}var Ls={lamp_ceiling:"ceiling",lamp_ceiling_fan:"ceiling_fan",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Ju=700,zr="neonplan3d.unsaved",Jt="1.23.0",Ds="floorplan-3d.unsaved";function Xu(){try{let o=localStorage.getItem(zr)??localStorage.getItem(Ds);return o?JSON.parse(o):null}catch{return null}}function Tr(o){try{o?localStorage.setItem(zr,JSON.stringify(o)):(localStorage.removeItem(zr),localStorage.removeItem(Ds))}catch{}}var Xt=class{building=null;error=null;saveState="idle";saveError=null;backendVersion=null;draft=null;packs=[];packsLoaded=!1;host;hass=null;revision=-1;ownRevisions=new Set;unsubscribe=null;saveTimer;pending=null;saving=null;connected=!1;constructor(e){this.host=e,e.addController(this)}setHass(e){let t=this.hass===null;this.hass=e,t&&this.connected&&this.start()}hostConnected(){this.connected=!0,this.hass&&this.start()}hostDisconnected(){var e;this.connected=!1,this.flush(),(e=this.unsubscribe)==null||e.call(this),this.unsubscribe=null}edit(e){this.building=e,this.pending=e,clearTimeout(this.saveTimer),this.saveTimer=setTimeout(()=>{this.flush()},Ju),this.host.requestUpdate()}get frontendVersion(){return Jt}get versionGap(){return!this.backendVersion||Jt==="dev"||this.backendVersion===Jt?null:Zu(this.backendVersion,Jt)>0?"frontend":"backend"}get needsRestart(){return this.saveError&&/extra keys not allowed/i.test(this.saveError)?!0:!!this.backendVersion&&Jt!=="dev"&&this.backendVersion!==Jt}restoreDraft(){let e=this.draft;this.draft=null,e&&this.edit(Ar(e.building))}discardDraft(){this.draft=null,Tr(null),this.host.requestUpdate()}async flush(){clearTimeout(this.saveTimer),this.saving&&await this.saving;let e=this.pending;if(!(!e||!this.hass)){this.pending=null;for(let t of e.floors)for(let n of t.furniture)n.mount_y!=null&&n.mount_y>10&&(n.mount_y=10);this.saveState="saving",this.host.requestUpdate(),this.saving=(async()=>{try{let t=await zn(this.hass,e);this.ownRevisions.add(t),this.revision=t,this.saveState=this.pending?"saving":"saved",this.saveError=null,Tr(null)}catch(t){this.saveState="error",this.saveError=Os(t),Tr({building:e,savedAt:Date.now()})}this.host.requestUpdate()})(),await this.saving,this.saving=null}}async start(){if(this.hass&&(await Promise.all([this.reloadPacks(),this.reload()]),!this.unsubscribe&&this.connected))try{this.unsubscribe=await Xa(this.hass,e=>{this.ownRevisions.has(e)||e===this.revision||this.pending||this.saving||this.reload()})}catch{}}async reloadPacks(){if(this.hass){try{this.packs=await ns(this.hass)}catch{this.packs=[]}ls(this.packs),this.packsLoaded=!0,this.host.requestUpdate()}}async reload(){if(this.hass){try{let e=await Ja(this.hass);this.building=Ar(e.building),this.backendVersion=e.version??null,this.draft===null&&!this.pending&&(this.draft=Xu()),this.revision=e.revision,this.error=null}catch(e){this.error=Os(e)}this.host.requestUpdate()}}};function Os(o){return o&&typeof o=="object"&&"message"in o?String(o.message):String(o)}function Zu(o,e){let t=o.split(/[.-]/).map(r=>Number.parseInt(r,10)||0),n=e.split(/[.-]/).map(r=>Number.parseInt(r,10)||0);for(let r=0;r<Math.max(t.length,n.length);r++){let i=(t[r]??0)-(n[r]??0);if(i)return i}return 0}var js;function Cr(){let o=new URL("./neonplan3d-editor.js?v=6e105a61ff16",new URL(import.meta.url)).href;return js??=import(o),js}function Zt(o){let e=(o.switch_keys??[]).slice(0,4).map(t=>t&&t!=="none"?t:null);return e.length?e:[null]}var Vs=o=>o&&o!=="none"?o:null;function en(o){let e=(o.socket_outlets??[]).slice(0,4).map(t=>({entity:Vs(t==null?void 0:t.entity),power:Vs(t==null?void 0:t.power)}));return e.length?e:[{entity:null,power:null}]}function mo(o){return o.switch_ring&&o.switch_ring!=="none"?o.switch_ring:null}function Rr(o,e){var n;let t=e?(n=o.states[e])==null?void 0:n.state:void 0;return t==="on"||t==="open"||t==="opening"}var ep={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},tp=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),np=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),op=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),go=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Qs=new Set(["light","switch","fan"]);function Js(o){return o.slice(0,o.indexOf("."))}function V(o){return ep[Js(o)]??null}function Ns(o){return o!==null&&o!=="scene"&&o!=="script"}var rp=new Set(["shutter","garage","gate","door","curtain","awning","window","shade"]);function bo(o){return!o||!(((o.attributes.supported_features??0)|0)&48)?!1:typeof o.attributes.current_tilt_position=="number"||!rp.has(String(o.attributes.device_class??""))}function ip(o,e){var r;let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let i=(r=o.devices)==null?void 0:r[n];if(!i)return null;if(i.area_id)return i.area_id;n=i.parent_device_id}return null}function ze(o,e){var n;let t=(n=o.entities)==null?void 0:n[e];return t?t.area_id?t.area_id:ip(o,t.device_id):null}function _o(o,e){var n;let t=(n=o.entities)==null?void 0:n[e];return!!t&&(!!t.hidden||!!t.hidden_by||!!t.disabled_by)}function qs(o,e){var s;let t=V(e);if(!t)return!1;let n=(s=o.entities)==null?void 0:s[e];if(_o(o,e)||n!=null&&n.entity_category)return!1;let r=o.states[e];if(!r)return!1;let i=r.attributes.device_class,a=String(r.attributes.unit_of_measurement??"");return t==="sensor"?i?tp.has(i)||i==="voltage"&&a==="mV":np.has(a):t==="binary"?i?op.has(i):!!(n!=null&&n.area_id):!0}var ap=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Ws(o,e){var r;if(V(e)!=="sensor")return!1;let t=(r=o.entities)==null?void 0:r[e];if(_o(o,e)||t!=null&&t.entity_category)return!1;let n=o.states[e];return!n||!n.attributes.unit_of_measurement||ap.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||X(n)}var Fr=null;function Ln(o){var l,u;let e=Fr;if(e&&e.entities===o.entities&&e.devices===o.devices&&(e.states===o.states||(e.states=o.states,Object.keys(o.states).length===e.stateCount)))return e;let t=new Map,n=new Map,r=[],i=new Map,a=new Map;for(let c of Object.keys(o.entities??{})){let d=o.entities[c],p=d.device_id;p&&d.area_id&&(a.get(p)??a.set(p,new Set).get(p)).add(d.area_id),p&&qr(o,c)&&(n.get(p)??n.set(p,[]).get(p)).push(c),p&&!_o(o,c)&&!d.entity_category&&(i.get(p)??i.set(p,new Set).get(p)).add(Js(c));let h=qs(o,c),m=ze(o,c);if(!m){(h||Ws(o,c))&&Ns(V(c))&&r.push(c);continue}h&&(t.get(m)??t.set(m,[]).get(m)).push(c)}if(o.entities)for(let c of Object.keys(o.states))o.entities[c]||(qs(o,c)||Ws(o,c))&&Ns(V(c))&&r.push(c);r.sort((c,d)=>go.indexOf(V(c))-go.indexOf(V(d))||Q(o,c).localeCompare(Q(o,d)));for(let[c,d]of t){let p=(u=(l=o.areas)==null?void 0:l[c])==null?void 0:u.name;d.sort((h,m)=>{let g=go.indexOf(V(h)),f=go.indexOf(V(m));return g-f||Q(o,h,p).localeCompare(Q(o,m,p))})}let s=new Set([...a].filter(([,c])=>c.size>1).map(([c])=>c));return Fr={entities:o.entities,devices:o.devices,states:o.states,stateCount:Object.keys(o.states).length,areas:t,power:n,unassigned:r,domains:i,hubs:s},Fr}function _e(o,e){return!e||!o.entities?[]:Ln(o).areas.get(e)??[]}var sp={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},lp=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),cp=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function dp(o,e){var r,i,a;let t=(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id,n=t&&!Ln(o).hubs.has(t)?Ln(o).domains.get(t):void 0;return n&&[...n].some(s=>lp.has(s))?!1:!cp.test(`${e} ${((a=o.states[e])==null?void 0:a.attributes.friendly_name)??""}`)}function Hr(o,e,t,n){var h;let r=(h=t.climate)==null?void 0:h[n];if(r==="none")return[];if(r)return o.states[r]?[r]:[];let i=sp[n],a=(m,g)=>U([m,g],t.points),s=(e==null?void 0:e.placements.filter(m=>m.entity_id.startsWith("sensor.")))??[],l=s.filter(m=>a(m.x,m.z)).map(m=>m.entity_id),u=new Set(s.filter(m=>!a(m.x,m.z)).map(m=>m.entity_id)),c=[...new Set([..._e(o,t.area_id).filter(m=>!u.has(m)),...l])],d=c.filter(m=>{var g;return m.startsWith("sensor.")&&((g=o.states[m])==null?void 0:g.attributes.device_class)===i&&(t.outdoor||dp(o,m))});if(d.length)return d;let p=Xs[n];return p?c.filter(m=>{var g;return m.startsWith("climate.")&&typeof((g=o.states[m])==null?void 0:g.attributes[p])=="number"}):[]}var Xs={temperature:"current_temperature",humidity:"current_humidity"};function up(o,e,t){let n=o.states[e];if(e.startsWith("climate.")){let i=Xs[t],a=i?Number(n==null?void 0:n.attributes[i]):Number.NaN;return t==="temperature"?Bs(a,Ve(o)):a}let r=Number(n==null?void 0:n.state);return t==="temperature"?Bs(r,n==null?void 0:n.attributes.unit_of_measurement):r}function Ve(o){var e,t;return((t=(e=o.config)==null?void 0:e.unit_system)==null?void 0:t.temperature)==="\xB0F"?"\xB0F":"\xB0C"}function Bs(o,e){return e==="\xB0F"?(o-32)*5/9:e==="K"?o-273.15:o}function tn(o,e){return Ve(o)==="\xB0F"?e*9/5+32:e}function rt(o,e,t,n){let r=Hr(o,e,t,n).map(i=>up(o,i,n)).filter(i=>Number.isFinite(i));return r.length?r.reduce((i,a)=>i+a,0)/r.length:null}function Zs(o,e){return!!o.entities&&Ln(o).hubs.has(e)}function Lr(o,e){return o.entities?Ln(o).power.get(e)??[]:[]}function Q(o,e,t){var i,a;let n=o.states[e],r=(n==null?void 0:n.attributes.friendly_name)??((a=(i=o.entities)==null?void 0:i[e])==null?void 0:a.name)??e;if(t&&r.length>t.length+1&&r.toLowerCase().startsWith(t.toLowerCase()+" ")){let s=r.slice(t.length+1);return s.charAt(0).toUpperCase()+s.slice(1)}return r}function el(o,e){if(!e||e==="none")return null;let t=o.states[e];if(!t||X(t))return null;let n=t.state.toLowerCase();if(["on","open","opened","heating","heat","true","active","running"].includes(n))return!0;if(["off","closed","idle","false","inactive","standby"].includes(n))return!1;let r=Number(n);return Number.isFinite(r)?r>0:null}function X(o){return!o||o.state==="unavailable"||o.state==="unknown"}var pp=new Set(["run","cooking","running","printing","prepare","preparing","slicing","heating","busy","working","active","washing","rinsing","spinning","drying","cleaning","in_progress","in progress","on"]);function Or(o){return!!o&&o.entity_id.startsWith("sensor.")&&o.attributes.device_class==="enum"}function Dr(o){return o?o==="cleaning"||/clean|sweep|mop/.test(o.toLowerCase()):!1}function Ge(o){if(!o)return!1;if(o.entity_id.startsWith("vacuum."))return Dr(o.state)||o.state==="returning";switch(V(o.entity_id)){case"light":case"switch":case"fan":case"binary":return o.state==="on";case"cover":return o.state==="open"||o.state==="opening";case"climate":return o.attributes.hvac_action==="heating"||o.attributes.hvac_action==="cooling";case"media":return o.state==="playing";case"lock":return o.state==="unlocked"||o.state==="open";case"sensor":return Or(o)&&pp.has(String(o.state).toLowerCase());default:return!1}}function tl(o,e){if(!o||X(o))return e?1:0;let t=String(o.state).toLowerCase();return e||t==="run"||t==="cooking"||t==="on"?1:t==="ready"||t==="standby"||t==="pause"||t==="paused"?.3:0}function nl(o){if(!o||X(o))return null;let e=String(o.state).toLowerCase();if(e==="off")return null;let t=String(o.attributes.hvac_action??"").toLowerCase(),n=e==="heat"?[1,.32,.12]:e==="cool"?[.3,.65,1]:e==="dry"?[1,.85,.3]:e==="fan_only"?[.85,.92,1]:[.3,1,.5],r=["heating","cooling","drying","fan"].includes(t);return{color:n,level:r||!t?1:.45}}function ol(o,e){if(!o||!e||!/^#[0-9a-f]{6}$/i.test(e))return o;let t=[1,3,5].map(s=>parseInt(e.slice(s,s+2),16)/255),n=s=>{let l=Math.max(...s),u=Math.min(...s),c=l-u;return l<=0||c/l<.25?[-1,0]:[(l===s[0]?((s[1]-s[2])/c+6)%6:l===s[1]?(s[2]-s[0])/c+2:(s[0]-s[1])/c+4)*60,c/l]},[r]=n(t),[i]=n(o.color);if(r<0||i<0)return r<0&&i<0?o:null;let a=Math.abs(r-i);return Math.min(a,360-a)<=30?o:null}function Et(o,e){if(!o||o.state!=="on")return null;let t=e&&!["unavailable","unknown"].includes(e.state)?e.attributes:o.attributes,n=typeof t.brightness=="number"?.2+.8*Math.sqrt(Math.min(1,Math.max(0,t.brightness/255))):1,r=t.rgb_color,i;return r&&t.color_mode!=="color_temp"&&t.color_mode!=="brightness"&&t.color_mode!=="onoff"?i=[r[0]/255,r[1]/255,r[2]/255]:typeof t.color_temp_kelvin=="number"?i=hp(t.color_temp_kelvin):i=[1,.71,.28],{color:i,level:n}}function hp(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=[1,.66,.26],n=[.78,.9,1];return[t[0]+(n[0]-t[0])*e,t[1]+(n[1]-t[1])*e,t[2]+(n[2]-t[2])*e]}function nn(o,e,t=null){if(o==="camera")return t==="ceiling"?Math.max(.5,e-.05):2.2;if(o==="light"&&t){if(t==="floor")return 1.95;if(t==="table")return 1.25;if(t==="wall")return 1.95}switch(o){case"light":return Math.max(.5,e-.25);case"cover":return Math.min(2,e-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}var fp=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),mp=new Set(["garage","gate"]),gp=new Set(["window","opening"]);function Hn(o,e,t=!1){let n=new Map;return e.length&&o.forEach((r,i)=>{let a=t&&e.length===1?e[0]:e[i];a&&n.set(r.id,a)}),n}function on(o,e){let t=new Map,n=(i,a)=>i==="none"?null:i??a??null,r=(i,a,s)=>{let l=n(i.cover,a);return{cover:l,contact:i.sensor==="handle"&&i.contact==null?null:n(i.contact,s),tilt:i.tilt==="none"?null:i.tilt,contact2:i.leaves===2&&i.contact2&&i.contact2!=="none"?i.contact2:null,lock:(i.type==="door"||i.type==="window"&&i.sill<=.01)&&i.lock&&i.lock!=="none"?i.lock:null,tilt2:i.leaves===2&&i.tilt2&&i.tilt2!=="none"?i.tilt2:null,position:l&&V(l)==="cover"&&i.position&&i.position!=="none"?i.position:null,positionInverted:!!i.position_inverted,tiltAngle:i.tilt_angle&&i.tilt_angle!=="none"?i.tilt_angle:null,tiltMax:i.tilt_max??null,tiltOffset:i.tilt_offset??null,tiltInvert:!!i.tilt_invert,shut:!!i.shut,...i.contact_invert?{contactInvert:!0}:{},...i.cover_invert?{coverInvert:!0}:{}}};for(let i of e){for(let a of i.rooms){let s=i.openings.filter(y=>y.room_id===a.id).sort((y,S)=>y.edge-S.edge||y.offset-S.offset);if(!s.length)continue;let l=_e(o,a.area_id),u=y=>{var S;return(S=o.states[y])==null?void 0:S.attributes.device_class},c=l.filter(y=>V(y)==="cover"&&fp.has(u(y))),d=s.filter(y=>y.type==="window"),p=s.filter(y=>y.type==="door"),h=s.filter(y=>y.type==="garage"),m=Hn(d,c,!0),g=Hn(d,l.filter(y=>V(y)==="binary"&&gp.has(u(y)))),f=Hn(p,l.filter(y=>V(y)==="binary"&&u(y)==="door")),b=Hn(h,l.filter(y=>V(y)==="cover"&&mp.has(u(y)??""))),w=Hn(h,l.filter(y=>V(y)==="binary"&&u(y)==="garage_door"));for(let y of s){let S=y.type==="window"?m:y.type==="garage"?b:null,P=y.type==="window"?g:y.type==="garage"?w:f;t.set(y.id,r(y,S==null?void 0:S.get(y.id),P.get(y.id)))}}for(let a of i.openings)t.has(a.id)||t.set(a.id,r(a))}return t}var bp=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function _p(o){if(!o||X(o))return null;let e=o.attributes.window_state;for(let t of[typeof e=="string"?e:null,o.state]){if(!t)continue;let n=bp.find(([r])=>r.test(t.trim()));if(n)return n[1]}return null}var vp=new Set(["unlocked","unlocking","open","opening"]);function jr(o){return!!o&&/^(switch|button|input_button)\./.test(o)}var yp=.5;function Xe(o,e,t="window"){var w;e.cover&&jr(e.cover)&&(e={...e,cover:null,position:null});let n=e.lock?o.states[e.lock]:void 0,r=n&&vp.has(n.state)?{unlocked:!0}:{},i=y=>{var S;return!!y&&((S=o.states[y])==null?void 0:S.state)==="on"},a=y=>!!y&&!!o.states[y]&&!X(o.states[y]),s=y=>y?_p(o.states[y]):null,l=y=>{let S=s(y);return e.contactInvert&&y&&y!==e.tilt&&y!==e.tilt2&&S!=="tilted"&&S?S==="open"?"closed":"open":S},u=i(e.tilt2)||l(e.tilt2)==="tilted"||l(e.contact2)==="tilted",c=l(e.contact2)==="open"&&!u?1:0,d=i(e.tilt)||l(e.tilt)==="tilted"||l(e.contact)==="tilted",p=d?1:0,h=e.tiltAngle?Number((w=o.states[e.tiltAngle])==null?void 0:w.state):NaN;if(Number.isFinite(h)){let y=(h-(e.tiltOffset??0))*(e.tiltInvert?-1:1);p=Math.min(1,Math.max(0,y/(e.tiltMax||15))),p<.08&&(p=0),d=p>0}let m=l(e.contact)==="open"&&!d?1:0,g=null,f=e.cover?o.states[e.cover]:void 0,b=rl(o,e.position);if(b!==null)g=e.positionInverted?b:1-b;else if(f&&!X(f)){let y=f.attributes.current_position;typeof y=="number"?g=1-Math.min(100,Math.max(0,y))/100:g=f.state==="closed"?1:f.state==="opening"||f.state==="closing"?.5:0,e.coverInvert&&(g=1-g)}else e.cover&&(g=0);if(t==="door"){let y=l(e.contact);return g!==null&&f&&hl.has(String(f.attributes.device_class??""))?{open:y===null?1-g:y==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:null,sensed:!0,...r}:{open:y===null?e.shut?0:yp:y==="closed"?0:1,open2:l(e.contact2)==="open"?1:0,tilt:0,tilt2:0,cover:g,sensed:y!==null||g!==null,...r}}if(t==="garage"){let y=l(e.contact),S=g!==null||y!==null;return g===null&&(g=y===null||y==="closed"?1:0),{open:0,open2:0,tilt:0,tilt2:0,cover:g,sensed:S}}return{open:m,open2:c,tilt:p,tilt2:u?1:0,cover:g,sensed:a(e.contact)||a(e.tilt)||Number.isFinite(h),...r}}function rl(o,e){let t=e?o.states[e]:void 0;if(!t||X(t))return null;let n=Number(t.state);if(!Number.isFinite(n))return null;let r=t.attributes.unit_of_measurement==="%"||n>1;return Math.min(1,Math.max(0,r?n/100:n))}function Vr(o,e){var a,s;let t=new Map,n=[];for(let l of e){let u=V(l)==="camera"?`camera:${l}`:((s=(a=o.entities)==null?void 0:a[l])==null?void 0:s.device_id)??`entity:${l}`,c=t.get(u);c||(t.set(u,c=[]),n.push(u)),c.push(l)}let r=n.map(l=>{let u=t.get(l),c=u.find(d=>{var p,h;return!((h=(p=o.entities)==null?void 0:p[d])!=null&&h.name)})??u[0];return{primary:c,others:u.filter(d=>d!==c)}}),i=new Map(e.map((l,u)=>[l,u]));return r.sort((l,u)=>i.get(l.primary)-i.get(u.primary))}function vo(o,e){return Vr(o,e).map(t=>t.primary)}var Us={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},il=new Set(["tv_board","tv_wall"]);function al(o,e){let t=o.states[e.entity];if(!t)return!1;let n=e.attribute?t.attributes[e.attribute]:t.state;if(n==null)return!1;let r=String(n).toLowerCase(),i=e.state.trim().toLowerCase();return e.state.trim()==="*"||r===i||i.length>=3&&r.includes(i)}function sl(o){return il.has(o)||!!us(o)}function yo(o){return sl(o)||o==="desk"||o==="fridge_smart"}function rn(o,e){var i;let t=new Set,n=Pt(o,e),r=e.some(a=>a.openings.some(s=>s.confirm))?on(o,e):null;for(let a of e){for(let s of a.placements)s.confirm&&t.add(s.entity_id);for(let s of a.openings){let l=s.confirm?r==null?void 0:r.get(s.id):null;l!=null&&l.cover&&l.cover!=="none"?t.add(l.cover):s.type==="garage"&&(l!=null&&l.contact)&&V(l.contact)==="switch"&&t.add(l.contact)}for(let s of a.furniture){if(s.confirm&&s.type==="wall_switch")for(let u of Zt(s))u&&t.add(u);if(s.confirm&&s.type==="wall_socket")for(let u of en(s))u.entity&&t.add(u.entity);let l=s.confirm?(i=n.get(s.id))==null?void 0:i.entity:null;l&&l!=="none"&&t.add(l)}}return t}function ll(o,e){let t=new Set;if(!e.some(n=>n.openings.some(r=>r.cover_invert)))return t;for(let n of on(o,e).values())n.coverInvert&&n.cover&&t.add(n.cover);return t}function cl(o,e){let t=new Map;for(let n of e)for(let r of n.furniture){if(r.type!=="awning"&&!uo(r.type))continue;let i=r.entity&&r.entity!=="none"?r.entity:null,a=i?o.states[i]:void 0,s=r.awning_time??20;if(!a||X(a)){t.set(r.id,{out:0,moving:0,time:s});continue}let l=p=>r.awning_invert?1-p:p,u=rl(o,r.awning_position&&r.awning_position!=="none"?r.awning_position:null),c=a.attributes.current_position,d=a.state==="opening"?r.awning_invert?-1:1:a.state==="closing"?r.awning_invert?1:-1:0;u!==null?t.set(r.id,{out:l(u),moving:0,time:s}):typeof c=="number"&&Number.isFinite(c)?t.set(r.id,{out:l(Math.min(1,Math.max(0,c/100))),moving:0,time:s}):d?t.set(r.id,{out:null,moving:d,time:s}):t.set(r.id,{out:l(a.state==="open"||a.state==="on"?1:0),moving:0,time:s})}for(let n of e)for(let r of n.outdoor??[])if(r.type==="fence")for(let i of r.gates??[])t.set(i.id,wp(o,i));return t}function wp(o,e){let t=e.time??(e.kind==="slide"?15:4),n=s=>s&&s!=="none"?o.states[s]:void 0,r=n(e.contact);if(r&&!X(r))return{out:null,moving:r.state==="on"||r.state==="open"?1:-1,time:t,settled:!0};let i=n(e.entity);if(!i||X(i))return{out:null,moving:-1,time:t,settled:!0};let a=i.attributes.current_position;return typeof a=="number"&&Number.isFinite(a)?{out:Math.min(1,Math.max(0,a/100)),moving:0,time:t}:i.state==="opening"?{out:null,moving:1,time:t}:i.state==="closing"?{out:null,moving:-1,time:t}:{out:null,moving:i.state==="open"||i.state==="on"?1:-1,time:t,settled:!0}}function Nr(o,e){let t=r=>{var a;if(!r||r==="none")return!1;let i=(a=o.states[r])==null?void 0:a.state;return i==="on"||i==="open"},n=new Map;for(let r of e)for(let i of r.furniture)i.type==="fridge_smart"&&n.set(i.id,{left:t(i.door_left),right:t(i.door_right)});return n}var Gs={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function qr(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function xp(o,e){var n,r;if(qr(o,e))return e;let t=(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id;return t?Lr(o,t).find(i=>i!==e)??null:null}function Pt(o,e){let t=new Map;for(let n of e){let r=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let a=i.type in Gs,s=a?Gs[i.type]:Us[i.type]??(Yt(i.type)?Us.robot_vacuum:void 0);if(!s&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&U([i.x,i.z],h.points))??(i.type==="awning"?Sr(n).find(h=>U([i.x,i.z],h.points)):void 0),u=l?vo(o,_e(o,l.area_id)):[],c=h=>`${h} ${Q(o,h)}`,d=i.entity==="none"?null:i.entity??null;if(i.entity==null){let h=u.filter(m=>!r.has(m));if(a){let m=h.filter(g=>V(g)==="light");d=m.find(g=>s.test(c(g)))??m[0]??null}else if(Yt(i.type)){let m=(l==null?void 0:l.area_id)??null;d=Object.keys(o.entities??{}).find(g=>g.startsWith("vacuum.")&&!r.has(g)&&!_o(o,g)&&ze(o,g)===m)??null}else if(i.type==="radiator"||i.type==="ac_unit"){let m=h.filter(g=>V(g)==="climate");d=m.find(g=>s.test(c(g)))??m[0]??null}else if(sl(i.type)){let m=h.filter(g=>V(g)==="media");d=m.find(g=>{var f;return((f=o.states[g])==null?void 0:f.attributes.device_class)==="tv"})??m.find(g=>s==null?void 0:s.test(c(g)))??(il.has(i.type)?m[0]??null:null)}else i.type==="awning"?d=h.find(m=>{var g;return m.startsWith("cover.")&&((s==null?void 0:s.test(c(m)))||((g=o.states[m])==null?void 0:g.attributes.device_class)==="awning")})??null:s&&(d=h.find(m=>["switch","media","fan"].includes(V(m)??"")&&s.test(c(m)))??null);d&&r.add(d)}let p=i.power==="none"?null:i.power??null;i.power==null&&(p=d?xp(o,d):null,!p&&s&&l&&!a&&(p=_e(o,l.area_id).find(m=>qr(o,m)&&!r.has(m)&&s.test(c(m)))??null),p&&r.add(p)),(d||p)&&t.set(i.id,{entity:d,power:p})}}return t}function Wr(o){if(!o||o.state==="off"||o.state==="standby"||X(o))return null;let e=o.attributes,t=`${e.app_name??""} ${e.source??""} ${e.app_id??""}`.toLowerCase();return t.includes("netflix")?[.9,.04,.08]:t.includes("youtube")?[1,.1,.15]:t.includes("prime")||t.includes("amazon")?[.1,.6,.95]:t.includes("disney")?[.2,.35,1]:t.includes("spotify")?[.12,.85,.4]:t.includes("zdf")||t.includes("ard")||t.includes("mediathek")?[1,.5,.1]:[.22,.88,1]}function dl(o,e,t,n=[]){let r=(d,p)=>U([d,p],t.points),i=Pt(o,[e]),a=on(o,[e]),s=[...e.placements.filter(d=>r(d.x,d.z)).map(d=>d.entity_id),...e.furniture.filter(d=>r(d.x,d.z)).flatMap(d=>{var p,h;return[(p=i.get(d.id))==null?void 0:p.entity,(h=i.get(d.id))==null?void 0:h.power]}),...e.openings.filter(d=>d.room_id===t.id).flatMap(d=>{let p=a.get(d.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(d=>[d.window,d.cover,d.contact,d.tilt]),...t.panel??[]].filter(d=>!!d&&!!o.states[d]),l=new Set(t.hidden??[]),u=[...new Set(s)].filter(d=>!l.has(d)),c=new Set(u);return{shown:u,more:_e(o,t.area_id).filter(d=>!c.has(d)&&!l.has(d))}}var Ks=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,kp={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function wo(o,e){var d,p;let t=e.car??{},n=h=>h&&h!=="none"?h:null,r=n(t.device)??n(e.entity),i=r?(p=(d=o.entities)==null?void 0:d[r])==null?void 0:p.device_id:null,a=i&&o.entities?Object.values(o.entities).filter(h=>h.device_id===i).map(h=>h.entity_id):[],s=h=>{var m,g,f;return`${h} ${((m=o.states[h])==null?void 0:m.attributes.friendly_name)??""} ${((f=(g=o.entities)==null?void 0:g[h])==null?void 0:f.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(h,m,g)=>a.find(f=>m.includes(f.split(".")[0])&&kp[h].test(s(f))&&(!g||g(f)))??null,u=h=>{var m;return String(((m=o.states[h])==null?void 0:m.attributes.unit_of_measurement)??"")},c=h=>{var m;return String(((m=o.states[h])==null?void 0:m.attributes.device_class)??"")};return{soc:n(t.soc)??a.find(h=>h.startsWith("sensor.")&&c(h)==="battery")??l("soc",["sensor"],h=>u(h)==="%"),range:n(t.range)??l("range",["sensor"],h=>/km|mi/.test(u(h)))??l("range",["sensor"]),charging:n(t.charging)??l("charging",["sensor"],h=>/^k?W$/.test(u(h)))??l("charging",["binary_sensor","switch"]),plugged:n(t.plugged)??a.find(h=>h.startsWith("binary_sensor.")&&c(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(t.lock)??a.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(t.climate)??a.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(t.tracker)??a.find(h=>h.startsWith("device_tracker."))??null}}function $p(o){let e=o.entity_id,t=String(o.state).toLowerCase().trim();return e.startsWith("lock.")?t==="locked":e.startsWith("binary_sensor.")?o.attributes.device_class==="lock"?t==="off":t==="on":e.startsWith("sensor.")?/^(locked|secured|double_locked|verriegelt|gesichert|abgeschlossen)$/.test(t)?!0:/^(unlocked|unsecured|selective_locked|partially_locked|open|entriegelt|offen|unverriegelt)$/.test(t)?!1:null:t==="on"}function On(o,e){var f;let t=wo(o,e),n=b=>b?o.states[b]:void 0,r=b=>{var y;let w=Number((y=n(b))==null?void 0:y.state);return b&&Number.isFinite(w)?w:null},i=r(t.soc),a=r(t.range),s=n(t.charging),l=String((s==null?void 0:s.attributes.unit_of_measurement)??""),u=s&&/^k?W$/.test(l)?(r(t.charging)??0)*(l==="kW"?1e3:1):null,c=u!==null?u>50:!!s&&["on","charging","laden"].includes(s.state.toLowerCase()),d=n(t.plugged),p=n(t.lock),h=n(t.climate),m=n(t.tracker),g=(m==null?void 0:m.state.toLowerCase())??"";return{entities:t,soc:i!==null?Math.max(0,Math.min(100,i)):null,range:a,rangeUnit:String(((f=n(t.range))==null?void 0:f.attributes.unit_of_measurement)??"km"),chargingW:u,charging:c,plugged:d?d.state==="on":null,locked:p?$p(p):null,climateOn:h?h.entity_id.startsWith("climate.")?h.state!=="off"&&h.state!=="unavailable":h.state==="on":null,away:m&&g!=="home"&&!X(m)?g==="not_home"?"":m.state:null}}function ul(o,e){return e.flatMap(t=>t.furniture.filter(n=>n.type==="parking"&&n.car).flatMap(n=>Object.values(wo(o,n)))).filter(t=>!!t)}function Dn(o,e,t){var r,i;if(t==="none")return null;if(t)return t;let n=e?(i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.device_id:null;if(!n||!o.entities)return null;for(let a of Object.values(o.entities))if(!(a.device_id!==n||!a.entity_id.startsWith("sensor."))&&(Ks.test(a.translation_key??"")||Ks.test(a.entity_id.split(".")[1])))return a.entity_id;return null}function Ys(o){return o.toLowerCase().replace(/ä/g,"a").replace(/ö/g,"o").replace(/ü/g,"u").replace(/ß/g,"ss").replace(/ae/g,"a").replace(/oe/g,"o").replace(/ue/g,"u").normalize("NFD").replace(/[^a-z0-9]/g,"")}function pl(o,e,t,n){var i,a;let r=t?(i=o.states[t])==null?void 0:i.attributes:void 0;for(let s of[n?(a=o.states[n])==null?void 0:a.state:void 0,r==null?void 0:r.current_room,r==null?void 0:r.room,r==null?void 0:r.current_segment]){let l=Br(o,e,s);if(l)return l}return null}function Br(o,e,t){if(typeof t!="string"||!t||t==="unknown"||t==="unavailable")return null;let n=Ys(t);if(!n)return null;let r=i=>{var a,s;return[i.name,i.area_id??"",i.area_id&&((s=(a=o.areas)==null?void 0:a[i.area_id])==null?void 0:s.name)||""].map(Ys).filter(Boolean)};return e.find(i=>r(i).includes(n))??e.find(i=>r(i).some(a=>a.length>=3&&(a.includes(n)||n.includes(a))))??null}var hl=new Set(["garage","gate","door"]);function Ur(o,e){let t=new Set,n=new Set,r=i=>{if(!i||i==="none"||!o.states[i])return;let a=V(i);a==="light"?t.add(i):a==="cover"&&!hl.has(String(o.states[i].attributes.device_class??""))&&n.add(i)};for(let i of e.rooms){let a=new Set(i.hidden??[]);for(let s of vo(o,_e(o,i.area_id)))a.has(s)||r(s)}for(let i of e.placements)r(i.entity_id);for(let i of e.furniture)r(i.entity);return{lights:[...t],covers:[...n]}}function fl(o){let e=o.split(".")[0];return e==="scene"||e==="script"?[e,"turn_on"]:e==="automation"?[e,"trigger"]:e==="button"||e==="input_button"?[e,"press"]:["homeassistant","toggle"]}function ml(o,e,t){var r;let n=((r=t.target)==null?void 0:r.trim())??"";if(t.action==="navigate"&&n)history.pushState(null,"",n),window.dispatchEvent(new CustomEvent("location-changed",{detail:{replace:!1}}));else if(t.action==="more_info"&&n)e.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:n},bubbles:!0,composed:!0}));else if(t.action==="service"&&n.includes(".")){let[i,a]=n.split(".",2);o.callService(i,a,t.data??{})}else t.action==="fire_dom_event"&&e.dispatchEvent(new CustomEvent("ll-custom",{detail:t.data??{},bubbles:!0,composed:!0}))}var Mp={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",plain_off:"Con muebles",plain_on:"Solo plano",plain_hint:"Solo plano: paredes, puertas, ventanas y escaleras sin muebles; los dispositivos se quedan.",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",floor_order_hint:"Solo cambia el orden de las plantas en la lista y en las miniaturas. D\xF3nde est\xE1 una planta en la casa 3D lo decide su \xABaltura sobre el suelo\xBB.",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de CasaNeon ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de CasaNeon.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_detect_choose:"Elegir t\xFA mismo los sensores de detecci\xF3n",camera_detect_choose_hint:"Solo cuentan los sensores marcados para los pines, el rastro de movimiento y la direcci\xF3n en vivo \u2013 tambi\xE9n sensores de otro dispositivo, p. ej. el sensor de personas de Frigate para una c\xE1mara Reolink. Sin la marca, CasaNeon usa todos los sensores del dispositivo de la c\xE1mara.",camera_detect_add:"A\xF1adir un sensor",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",view_settings:"Ajustes",view_settings_admin:"Solo los administradores pueden cambiar estos ajustes; se aplican a toda la casa.",view_settings_look:"Aspecto",glass_size:"Tama\xF1o de las tarjetas de cristal",glass_size_hint:"Energ\xEDa, bomba de calor, coche, dispositivos y las dem\xE1s tarjetas de cristal de la vista 3D",view_settings_alerts:"Avisos",view_settings_control:"Manejo",view_settings_more:"El resto de ajustes est\xE1 en el editor, en \u2699 Ajustes.",lines_add:"A\xF1adir",lines_new:"Nueva entrada \u2026",sheet_mic:"Hablar",sheet_listening:"Escuchando\u2026",sheet_mic_failed:"No se entendi\xF3 nada: el micr\xF3fono necesita HTTPS y una canalizaci\xF3n de voz con reconocimiento.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace. Una c\xE1mara conserva su marcador con todos sus ajustes; el modelo solo se a\xF1ade.",as_furniture_pick:"Elegir mueble \u2026",camera_look_builtin:"Modelo de c\xE1mara est\xE1ndar",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",sun_shadow:"Recorrido del sol y sombra de la casa",tap_in_room:"Accionar dispositivos solo en la habitaci\xF3n abierta",tap_in_room_hint:"En la vista de la casa y de la planta, un toque en un dispositivo abre su habitaci\xF3n en vez de accionarlo, as\xED un toque pensado para la planta no mueve una persiana por error. En la habitaci\xF3n abierta todo sigue igual; una pulsaci\xF3n larga abre el men\xFA en cualquier sitio.",right_click_back:"El clic derecho retrocede un nivel",right_click_back_hint:"Un clic derecho corto en la vista 3D cierra la habitaci\xF3n o vuelve de la planta a la casa. Desactivado: un clic derecho funciona como un clic.",sun_shadow_hint:"Un arco sobre la casa muestra el recorrido del sol hoy con amanecer y atardecer, y la sombra de la casa se dibuja en el suelo y se mueve con el sol. Necesita la orientaci\xF3n norte; en el nivel \xABTableta\xBB solo el arco.",sun_arc:"Arco solar alrededor de",sun_arc_house:"la casa",sun_arc_plot:"toda la parcela",sun_arc_hint:"D\xF3nde est\xE1n el arco solar y el anillo de la br\xFAjula: alrededor de la casa (por defecto) o alrededor de todo lo dibujado \u2013 habitaciones, zonas exteriores, vallas y paredes libres.",window_glow:"Las ventanas iluminan fuera de noche",window_glow_hint:"Cuando est\xE1 oscuro, la luz de las habitaciones encendidas sale por las ventanas como un brillo c\xE1lido sobre el c\xE9sped y la terraza \u2013 en el color de la luz de la habitaci\xF3n, m\xE1s tenue tras persianas bajadas.",gpu_safe_note:"En este navegador, el arco del sol, la sombra de la casa y el brillo de las ventanas de noche est\xE1n desactivados: los gr\xE1ficos se perdieron justo despu\xE9s de arrancar. La pr\xF3xima versi\xF3n de CasaNeon lo intentar\xE1 de nuevo.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",alert_contact_unavailable:"Contacto no disponible: {name}",alert_short_contact_unavailable:"Contacto no disponible",alert_unavailable:"Avisar si un contacto de ventana o puerta no est\xE1 disponible",alert_unavailable_hint:"Si un contacto lleva 10 minutos \xABno disponible\xBB (pila agotada, sin cobertura), la ventana parece cerrada en 3D sin saberlo. Entonces aparece un aviso.",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de CasaNeon.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_plain:"Solo plano (sin muebles)",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_copy:"Copiar",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon \u2013 actualiza CasaNeon (HACS) y recarga la p\xE1gina.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para CasaNeon. Importa aqu\xED tus propios packs (.fp3dpack).",ext_pro:"Extensiones Pro",ext_active:"activa",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",card_room:"Habitaci\xF3n inicial",card_room_none:"Ninguna (planta o casa)",card_walk:"Permitir el recorrido",card_walk_hint:"El bot\xF3n para recorrer la casa a la altura de los ojos",card_tt_range:"El viaje en el tiempo empieza",card_tt_range_24h:"hace 24 horas",card_tt_range_7d:"hace una semana",card_tt_speed:"Velocidad de reproducci\xF3n",card_tt_speed_day:"1 d\xEDa en 6 s",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: CasaNeon encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia ahora",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_hub:"Punto de uni\xF3n de cables definido",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas y prop\xF3n ideas como issue en GitHub: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",furn_cable_to_grid:"El cable termina en la acometida",furn_cable_to_grid_hint:"Energ\xEDa Pro: el cable de este inversor va a la acometida en lugar del contador \u2013 por ejemplo cuando el inversor y la acometida est\xE1n lejos del cuadro el\xE9ctrico.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",gate_hint:"Puertas en la valla: un hueco en un lado, como una puerta en una pared. Con una entidad, la puerta tambi\xE9n se abre en 3D y un toque sobre ella la acciona.",gate_n:"Puerta {n}",gate_edge:"Lado",gate_edge_n:"Lado {n} ({len} m)",gate_kind:"Tipo",gate_kind_swing:"Portillo (una hoja)",gate_kind_double:"Puerta de dos hojas",gate_kind_slide:"Puerta corredera",gate_at:"Centro desde el inicio del lado",gate_flip:"Bisagra en el otro lado",gate_flip_slide:"Se abre hacia el otro lado",gate_outward:"Se abre hacia fuera",gate_entity:"Motor o interruptor",gate_contact:"Contacto (abierto/cerrado)",gate_time:"Tiempo de recorrido (s)",gate_remove:"Quitar puerta",gate_add:"+ Puerta en la valla",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_turn:"Giro",roof_turn_hint:"Gira esta parte del tejado en el plano (sentido horario), p. ej. para un ala en \xE1ngulo. Las buhardillas y hastiales encima giran con ella. 0\xB0 = como antes.",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_overhang_sides:"Alero por lado",roof_overhang_sides_hint:"Fijar t\xFA mismo el alero de cada lado. Desactivado: autom\xE1tico \u2013 sin alero donde el fald\xF3n toca una parte m\xE1s alta de la casa.",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_angle:"\xC1ngulo de apertura",door_angle_hint:"Cu\xE1nto queda abierta la puerta en 3D: sin sensor siempre, con sensor en cuanto indica abierta. Por defecto: medio abierta sin sensor, totalmente abierta con \xE9l.",door_angle_default:"Por defecto",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_meter_reading:"Lectura del contador (m\xB3 o litros)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_hub:"Punto de uni\xF3n de cables",energy_hub_point:"Los cables se unen en un punto propio",energy_hub_point_hint:"Energ\xEDa Pro: todos los cables van a este punto (p. ej. el cuadro el\xE9ctrico) en lugar del contador \u2013 \xFAtil cuando el contador est\xE1 en la acometida.",energy_hub_set:"Poner el punto en el plano",energy_hub_tap:"Toca el plano donde se unen los cables.",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant.",show_menu:"Mostrar",tool_menu:"Herramienta",floor_label:"Planta:",floor_settings:"Ajustes de la planta",floor_settings_of:"Planta {floor}",floor_none_hint:"A\xF1ade tu primera planta arriba con \xABPlanta\xBB \u2192 \xABA\xF1adir planta\xBB.",tool_group_build:"Construir",tool_group_outside:"Exterior",tool_room:"Habitaci\xF3n",view_menu:"Vista",fit_hint:"Mostrar todo el plano de la planta (con el jard\xEDn al dibujar el exterior)",tech_open:"Dibujar la sala t\xE9cnica",tech_open_hint:"Despu\xE9s toca en el plano la pared donde est\xE1 tu instalaci\xF3n.",tech_step:"Paso {n}",tech_step_feed:"Toca \xAB{name}\xBB a la izquierda y luego el punto de la pared por donde entra la tuber\xEDa (abajo del todo: desde el suelo).",tech_step_devices:"Toca la bomba y el filtro de arena a la izquierda: se colocan junto a la pared. La bomba de calor y la dosificaci\xF3n si las tienes.",tech_step_line:"Traza una l\xEDnea: de \xAB{a}\xBB a \xAB{b}\xBB. Pulsa en uno y arrastra hasta el otro.",tech_step_loose:"Un tubo acaba suelto: prol\xF3ngalo hasta un equipo o una tuber\xEDa, o b\xF3rralo (\u270B Seleccionar).",tech_step_drawing:"Sigue arrastrando o toca punto a punto: la l\xEDnea termina en un equipo, una tuber\xEDa o un tubo.",tech_step_fit:"Toca el tubo donde va la v\xE1lvula (el visor): se ilumina en naranja.",tech_mode:"Sala t\xE9cnica",tech_mode_hint:"Dibuja la sala t\xE9cnica en esta pared: entra las tuber\xEDas de la piscina, coloca los equipos, traza los tubos",tech_draw:"Dibujar",tech_pick:"Seleccionar",pool_delete_confirm:"\xBFEliminar la piscina con sus {n} tubos?",tech_erase:"Borrar",tech_erase_hint:"Toca un tubo, una v\xE1lvula de bola, una mirilla o un agujero y se elimina. \xBFLo dibujaste mal? Deshacer tambi\xE9n ayuda.",tech_feeds:"Tuber\xEDas de la piscina",tech_devices:"Equipos",tech_fittings:"Valvuler\xEDa",tech_hint:"Trazar una l\xEDnea: toca un equipo, una tuber\xEDa o un tubo y arrastra hasta el siguiente (o punto a punto). Sobre un tubo crea una T. CasaNeon sabe solo hacia d\xF3nde va el agua y qu\xE9 conexi\xF3n del equipo usar.",tech_no_ports:"Coloca primero el skimmer, el sumidero y las boquillas con la herramienta Piscina.",tech_ok:"Todo conectado: el agua circula.",tech_issue_loose:"{n} extremos sueltos",tech_issue_port:"{name} sin conectar",tech_issue_feed:"{name} a\xFAn no entrado",tech_feed_place:"Toca donde la tuber\xEDa entra en la sala: abajo del todo, desde el suelo; m\xE1s arriba, por la pared.",tech_start:"Toca un equipo o una tuber\xEDa y traza una l\xEDnea.",feed_skimmer:"Skimmer",feed_drain:"Sumidero",feed_inlet:"Boquillas",feed_waste:"Desag\xFCe (lavado)",hp_ports:"Conexiones",hp_side_right:"derecha",hp_side_left:"izquierda",hp_side_back:"detr\xE1s",pool_depth:"Profundidad del vaso (m)",pool_rim:"Borde sobre el c\xE9sped (m)",pool_depth_hint:"Profundidad: del borde al fondo. Una piscina de 1,50 m que sobresale 20 cm: profundidad 1,50, borde 0,20. El agua queda 15 cm bajo el borde.",pool_depth_ground:"La profundidad se ve en 3D en cuanto la piscina est\xE1 en un c\xE9sped, una terraza u otra zona; sin suelo alrededor, el vaso se ver\xEDa desde fuera.",pool_port_depth:"Prof.",pool_port_depth_hint:"Profundidad bajo la l\xEDnea de agua (m): boquillas normalmente 0,30, el skimmer en la l\xEDnea de agua",pool_valves:"V\xE1lvulas",pool_valve_shut:"cerrada",pool_valve_toggle:"Toca para cambiar: tal como est\xE1 la v\xE1lvula de verdad",pool_joint:"Uni\xF3n",block_some_fixed:"\u{1F512} Una pieza est\xE1 fijada: el bloque solo se mueve cuando todas est\xE9n liberadas.",unfix_all:"Liberar todo",wv_block_all:"Bloque entero",wv_block_one:"Solo esta pieza",wv_gap:"Hueco: {w} \u2013 esto cabe:",wv_gap_hint:"Toca un lugar libre de la pared: aqu\xED aparece lo que cabe.",wv_kit_title:"A la pared",wv_recent:"Usados recientemente",wv_none_fits:"Nada cabe en este hueco.",wv_cat_base:"Muebles bajos y aparadores",wv_cat_hang:"Colgados",wv_cat_tall:"Armarios altos",wv_cat_living:"Sentarse y dormir",wv_cat_light:"Luces",wv_cat_pack:"De tus packs",wv_cat_energy:"Energ\xEDa",block_title:"Bloque de muebles",multi_title:"{n} muebles seleccionados",block_hint:"Un clic selecciona todo el bloque, arrastrar lo mueve. Una sola pieza: t\xF3cala dos veces o elige su nombre abajo.",multi_hint:"May\xFAs + clic a\xF1ade o quita muebles, May\xFAs + arrastrar en una zona vac\xEDa dibuja un marco. Mu\xE9velos, g\xEDralos o c\xF3pialos juntos, o \xFAnelos en un bloque.",block_part_edit:"Editar solo esta pieza",block_break:"Deshacer bloque",block_make:"Unir en un bloque",multi_mode:"Seleccionar varios (tocar a\xF1ade, arrastrar dibuja un marco)",block_part:"Parte de un bloque.",block_select:"Seleccionar todo el bloque",block_delete:"\xBFEliminar {n} muebles?",block_delete_fixed:"\xBFEliminar {n} muebles? Algunos est\xE1n fijados.",wall_zoom_hint:"Zoom: rueda del rat\xF3n o dos dedos",wall_zoom_all:"Pared entera",card_pets:"Mostrar las mascotas",card_ghost:"Mostrar el fantasma de Halloween",card_ghost_hint:"Pack divertido Halloween: el fantasma flota tambi\xE9n por la casa de esta tarjeta (p. ej. desact\xEDvalo en la tableta de pared)",card_pets_hint:"Pack divertido Mascotas: mostrar los animales configurados en esta tarjeta (p. ej. desact\xEDvalos en la tableta de pared)",fun_title:"Packs divertidos",fun_intro:"Extras solo por diversi\xF3n; act\xEDvalos y desact\xEDvalos aqu\xED.",fun_name_pets:"Mascotas",fun_feature_pets:"Un gato, un perro o un conejo vive en tu casa 3D: recorre las habitaciones, se tumba en el sof\xE1, la cama o la alfombra y duerme por la noche.",fun_name_halloween:"Halloween",fun_feature_halloween:"Un fantasma que de vez en cuando flota por la casa.",halloween_ghost:"Dejar flotar al fantasma",pets_show:"Mostrar las mascotas",pet_add:"A\xF1adir una mascota",pet_name:"Nombre",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Gato",pet_kind_dog:"\u{1F436} Perro",pet_kind_rabbit:"\u{1F430} Conejo",pet_fur:"Pelaje",pet_fur_orange:"Pelirrojo",pet_fur_tabby:"Atigrado",pet_fur_black:"Negro",pet_fur_white:"Blanco",pet_fur_grey:"Gris",pet_fur_brown:"Marr\xF3n",pet_fur_calico:"Tricolor",pet_fur_golden:"Dorado",pet_fur_cream:"Crema",pet_breed:"Raza",pet_breed_dachshund:"Teckel",pet_breed_pug:"Carlino",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Pastor",pet_floor:"Planta",pet_floor_auto:"Planta baja",tt_ev_camera:"La c\xE1mara detecta movimiento: {name}",terrain:"Terreno",terrain_hint:"D\xF3nde est\xE1 el terreno alrededor de la casa. Lo que queda por debajo (un s\xF3tano, la parte baja de un semis\xF3tano) est\xE1 bajo tierra en 3D; c\xE9spedes, caminos y terrazas est\xE1n sobre el terreno.",terrain_level:"Altura del terreno (m, planta baja = 0)",terrain_earth:"Mostrar los s\xF3tanos bajo tierra",terrain_earth_hint:"Las plantas por debajo del terreno est\xE1n bajo tierra; abre una y la ver\xE1s como en una excavaci\xF3n. Desactivado: quedan sueltas como antes.",terrain_cellar_hint:"Semis\xF3tano: baja la altura del terreno tanto como deba asomar el s\xF3tano, p. ej. \u22121,2 m. Las ventanas de s\xF3tano bajo el terreno reciben un patio ingl\xE9s.",terrain_no_cellar_hint:"Un s\xF3tano es una planta con elevaci\xF3n negativa, p. ej. \u22122,6 m.",terrain_reset:"Restablecer el terreno",cellar_window:"Ventana de s\xF3tano",well:"Patio ingl\xE9s",well_hint:"Esta ventana est\xE1 bajo el nivel del terreno: en 3D recibe un patio ingl\xE9s con rejilla. Desm\xE1rcalo para no tener ninguno, p. ej. si por fuera pasa un camino.",well_rim:"Borde sobre el terreno (m)",well_depth:"Profundidad desde la pared (m)",cellar_window_hint:"Peque\xF1a y arriba en la pared: 100 \xD7 50 cm, 25 cm bajo el techo. Bajo el terreno recibe en 3D un patio ingl\xE9s con rejilla.",side_fold_hint:"Estrechar la barra lateral: m\xE1s espacio para el plano",furn_ac_unit:"Aire acondicionado (de pared)",furn_awning:"Toldo",furn_group_outdoor:"Terraza y balc\xF3n",bin_from:"Brillar desde (hora, el d\xEDa antes)",bin_until:"hasta (hora, d\xEDa de recogida)",bin_none:"Sin recogida a la vista",hh_title:"Hoy en casa",hh_left:"quedan {t}",hh_done:"\xA1Listo!",hh_finished:"{name} ha terminado",hh_thirsty:"Sed",hh_plant:"{name} necesita agua",hh_service:"{name}: mantenimiento pendiente",hh_fridge_open:"{name} est\xE1 abierto",alert_fridge_door:"Nevera abierta: {name}",alert_short_fridge_door:"Nevera abierta",hh_moisture:"Planta (plant.*) o sensor de humedad",hh_moisture_min:"Sed por debajo de (%)",hh_remaining:"Tiempo restante (sensor)",hh_door:"Sensor de puerta",hh_fridge_door:"Sensor de puerta",hh_appliance_hint:"Mientras funciona, su marcador muestra el tiempo restante; despu\xE9s \xAB\xA1Listo!\xBB hasta que se abre la puerta o vuelve a funcionar.",hh_door_alarm:"Avisar tras (minutos abierto)",hh_service_entity:"Consumible / mantenimiento (sensor)",hh_service_min:"Pendiente desde (\u2264 % o d\xEDas)",hh_service_hint:"P. ej. filtro, sal o abrillantador: un sensor binario (activo = pendiente), un n\xFAmero (% o d\xEDas restantes) o una fecha. Si toca, el aparato brilla en amarillo y aparece en \xABHoy en casa\xBB.",hh_teaser_plant:"Con Hogar Pro la planta muestra cu\xE1ndo necesita agua.",hh_teaser_appliance:"Con Hogar Pro el aparato muestra su tiempo restante y \xAB\xA1Listo!\xBB hasta que se abre la puerta.",hh_teaser_fridge:"Con Hogar Pro CasaNeon avisa cuando la puerta de la nevera est\xE1 abierta demasiado tiempo.",card_household:"Hoy en casa",card_household_hint:"Hogar Pro: tarjeta con contenedores, correo, aparatos terminados, plantas sedientas y mantenimiento",furn_waste_bin:"Contenedor de basura",furn_mailbox:"Buz\xF3n",furn_wall_switch:"Interruptor de pared",furn_water_heater:"Termo el\xE9ctrico",stair_open:"Abierta por debajo (losa inclinada)",stair_open_hint:"Los pelda\xF1os van sobre una losa que sigue la pendiente: el hueco de debajo queda libre, con techo inclinado, y cabe otro tramo o un mueble debajo.",furn_access_point:"Punto de acceso Wi-Fi",ap_entity:"Punto de acceso",ap_mount:"Montaje",ap_ceiling:"Techo",ap_wall:"Pared",ap_hint:"Elige el punto de acceso por su nombre; su estado, clientes, LED, CPU, memoria y bot\xF3n de reinicio se buscan en el mismo dispositivo (UniFi Network).",ap_gestures:"En 3D: tocar enciende o apaga su LED; mantener pulsado lo reinicia (pregunta antes). El anillo brilla azul conectado con el LED encendido, rojo si est\xE1 desconectado y \xE1mbar mientras se actualiza.",ap_role_state:"estado",ap_role_clients:"clientes",ap_role_led:"LED",ap_role_cpu:"CPU",ap_role_memory:"memoria",ap_role_restart:"reinicio",ap_client:"{n} cliente",ap_clients:"{n} clientes",ap_down:"Desconectado",ap_busy:"Actualizando",ap_up:"Conectado",ap_restart_confirm:"\xBFReiniciar {name}? Sus clientes perder\xE1n el Wi-Fi un par de minutos.",heater_entity:"Calentador (water_heater)",heater_capacity:"Capacidad",heater_found:"Encontrado en el mismo dispositivo:",heater_hint:"Elige su entidad water_heater; lo dem\xE1s (si calienta, duchas, tiempo restante, encendido, eco) se busca solo en el mismo dispositivo.",heater_role_heating:"calentando",heater_role_showers:"duchas",heater_role_remaining:"tiempo restante",heater_role_power:"encendido",heater_role_eco:"eco",heater_gestures:"En 3D: tocar lo enciende o apaga; mantener pulsado abre su ficha para regular la temperatura y el modo.",heater_gestures_no_power:"En 3D: tocar o mantener pulsado abre su ficha para regular la temperatura y el modo (no se encontr\xF3 un interruptor de encendido).",heater_shower:"{n} ducha",heater_showers:"{n} duchas",heater_left:"{min} min para agua caliente",furn_lamp_ceiling_fan:"Ventilador de techo con luz",furn_fan_entity:"Entidad del ventilador",ceiling_fan_hint:"La luz es la entidad del elemento de arriba: el motor y la pantalla la encienden. Las aspas conmutan el ventilador por separado y giran mientras funciona, m\xE1s r\xE1pido cuanto mayor es su velocidad.",furn_wall_socket:"Enchufe de pared",furn_group_electric:"Electricidad",socket_count:"Enchufes",socket_n:"Enchufe {n}",socket_switch:"Encender y apagar con (opcional)",socket_power:"Medidor de consumo (W, opcional)",socket_hint:"Un enchufe con interruptor (enchufe inteligente) se enciende y apaga al tocarlo en 3D y su peque\xF1o LED muestra que est\xE1 encendido. Con medidor de consumo cuenta en el balance de energ\xEDa y su pin muestra los vatios de todos sus enchufes. Para ponerlo sobre una encimera, sube su \xABAltura sobre el suelo\xBB.",switch_keys:"Teclas",switch_key:"Entidad de la tecla",switch_key_n:"Tecla {n}",switch_ring:"Anillo de luz (color de)",switch_ring_hint:"Para interruptores con luz alrededor (p. ej. Sonoff TX Ultimate): elige la luz que da su color y brillo; el anillo brilla en la pared alrededor de la placa mientras esa luz est\xE1 encendida.",switch_hint:"Cada tecla conmuta su entidad al tocarla en 3D (una persiana se abre o se cierra) y su LED se enciende mientras est\xE1 encendida o abierta.",furn_group_household:"Hogar",bin_shape:"Forma",bin_shape_bin120:"Contenedor con ruedas 120 l",bin_shape_bin240:"Contenedor con ruedas 240 l",bin_shape_bin1100:"Contenedor 1100 l",bin_shape_multi:"Contenedor con varios compartimentos",bin_shape_bag:"Bolsa",bin_shape_caddy:"Cubo",bin_shape_underground:"Contenedor soterrado",bin_kind:"Residuo",bin_kind_rest:"Resto",bin_kind_bio:"Org\xE1nico",bin_kind_paper:"Papel",bin_kind_plastic:"Envases",bin_kind_glass:"Vidrio",bin_kind_garden:"Restos de poda",bin_kind_recycling:"Reciclaje",bin_kind_other:"Otro",bin_color:"Color",bin_lid:"Tapa",bin_source:"Calendario de recogida o sensor",bin_match:"Palabra del calendario (vac\xEDo: seg\xFAn el residuo)",bin_hint:"El contenedor brilla desde la hora elegida del d\xEDa anterior hasta la hora del d\xEDa de recogida (para todos); su marcador indica \xABHoy\xBB o \xABMa\xF1ana\xBB, al tocarlo muestra las pr\xF3ximas recogidas. En un calendario (p. ej. Waste Collection Schedule) se buscan las palabras de su residuo; un sensor puede dar los d\xEDas o la fecha.",bin_today:"Hoy",bin_tomorrow:"Ma\xF1ana",bin_in_days:"en {n} d\xEDas",mailbox_shape:"Forma",mailbox_shape_wall:"Buz\xF3n de pared",mailbox_shape_pole:"Buz\xF3n en poste (con bandera)",mailbox_shape_pillar:"Buz\xF3n de pie con portaperi\xF3dicos",mailbox_shape_parcel:"Buz\xF3n de paquetes",mailbox_shape_bank:"Buzones agrupados",mailbox_entity:"Sensor de correo (trampilla o indicador)",mailbox_door:"Sensor de la puerta de recogida (opcional)",mailbox_hint:"Con un indicador (p. ej. un input_boolean \xABcorreo\xBB que activa una automatizaci\xF3n) el buz\xF3n brilla mientras est\xE1 activo. Con trampilla y puerta de recogida brilla cuando ha llegado correo despu\xE9s del \xFAltimo vaciado.",mailbox_post:"Correo",pro_name_household:"Hogar Pro",pro_feature_household:"Hogar Pro: contenedores que brillan la v\xEDspera de la recogida, buz\xF3n con correo, plantas con sed; lavadora, secadora y lavavajillas muestran el tiempo restante y \xAB\xA1Listo!\xBB; filtros y consumibles pendientes en amarillo; aviso de nevera abierta; tarjeta \xABHoy en casa\xBB; adem\xE1s la nevera inteligente (americana, puertas con sensores)",household_teaser_bin:"Con Hogar Pro el contenedor brilla la v\xEDspera de la recogida, seg\xFAn tu calendario.",household_teaser_mail:"Con Hogar Pro el buz\xF3n brilla en cuanto hay correo, hasta que se vac\xEDa.",awning_cover:"Toldo (cover)",motor_cover:"Motor (cover)",curtain_side:"Se abre hacia",curtain_side_both:"ambos lados",curtain_side_left:"izquierda (vista de frente)",curtain_side_right:"derecha (vista de frente)",motor_time:"Tiempo de recorrido (s)",motor_invert_hint:"Para covers que indican 100 % con la cortina cerrada o la pantalla abajo.",awning_pitch:"Inclinaci\xF3n (\xB0)",awning_time:"Tiempo de salida completa (s)",awning_position:"Sensor de posici\xF3n (opcional)",awning_valance:"Fald\xF3n (borde de lona delantero)",awning_invert:"Invertir el sentido",awning_invert_hint:"Para covers que informan 100 % cuando el toldo est\xE1 recogido.",awning_kind:"Tipo",awning_kind_arm:"Toldo de brazos articulados (terraza)",awning_kind_drop:"Toldo de brazo invisible / punto recto (balc\xF3n, ventana)",awning_kind_vertical:"Toldo vertical / ZIP (ventana, balc\xF3n)",awning_kind_pergola:"Toldo de p\xE9rgola / galer\xEDa acristalada",awning_kind_side:"Toldo lateral (privacidad)",awning_kind_arm_hint:"El cl\xE1sico sobre la terraza: los brazos articulados empujan la lona hacia fuera con una ligera pendiente. Fondo = salida.",awning_kind_drop_hint:"Los brazos giran desde la pared hacia delante y hacia abajo, la lona se tensa inclinada delante. Fondo = longitud de los brazos, Inclinaci\xF3n = cu\xE1nto bajan los brazos por debajo de la horizontal.",awning_kind_vertical_hint:"La lona baja en vertical por gu\xEDas laterales hasta el suelo \u2013 delante de una ventana, la barandilla de un balc\xF3n o el frente de una p\xE9rgola. Altura sobre el suelo = borde inferior del cofre.",awning_kind_pergola_hint:"Un marco fijo con postes delante; la lona se extiende por encima de sus gu\xEDas. Fondo = hasta los postes, Inclinaci\xF3n = pendiente del techo.",awning_kind_side_hint:"Un poste con la lona enrollada a la izquierda, la lona se extiende en horizontal hacia la derecha hasta el poste opuesto. Ancho = extensi\xF3n, Altura sobre el suelo = altura de la lona.",awning_hint:"Ancho = el toldo a lo largo de la pared, fondo = su salida totalmente extendido; la parte trasera del marco va contra la fachada, la altura sobre el suelo es la parte inferior del cofre. Si el cover informa su posici\xF3n mientras se mueve, el toldo sale despacio en 3D; si solo dice abriendo/cerrando, se mueve seg\xFAn el tiempo de salida.",furn_only_color:"Brillar solo en un color",furn_only_color_pick:"Color",furn_only_color_hint:"La l\xE1mpara solo brilla mientras la luz muestra aproximadamente este color, p. ej. amarillo para \xABagua\xBB en el lavabo. Los dem\xE1s colores de la misma luz quedan oscuros aqu\xED.",furn_run_w:"En marcha desde (vatios)",furn_run_w_hint:"A partir de cu\xE1ntos vatios en el sensor de potencia el aparato cuenta como en marcha y brilla (vac\xEDo: 10 W). Para aparatos tras un enchufe inteligente que consumen unos vatios en espera, p. ej. 100.",roof_window_float:"Mostrar sobre la habitaci\xF3n sin el tejado",roof_window_float_hint:"Cuando el tejado se desvanece al acercarte a una planta o una habitaci\xF3n, la ventana se queda en su sitio sobre la habitaci\xF3n: abierta, abatida, con su persiana. Funciona sobre las habitaciones de la planta en la que se apoya el tejado; donde la pendiente baja sobre una planta inferior, las ventanas se quedan en el tejado. Desactivado: solo se ve en el tejado.",tech_ask:"Tubo colocado: \xBFsigue hasta la piscina? Entonces aqu\xED va un pasamuros con su salida al exterior:",tech_ask_loose:"Dejarlo abierto",tech_step_tee:"Toca el tubo donde va la derivaci\xF3n: se corta ah\xED y desde la T trazas la siguiente l\xEDnea.",side_resize:"Arrastra para ensanchar o estrechar la barra lateral",furn_extra:"Valor extra junto al s\xEDmbolo (sensor, p. ej. temperatura del agua)",settings_house:"Casa",settings_weather:"Tiempo y avisos",roof_basics:"Forma del tejado",through_full:"Pantalla completa",through_full_hint:"La imagen de la c\xE1mara en toda la pantalla (Esc o Atr\xE1s para salir). Donde el navegador no puede, se abre la vista de c\xE1mara de Home Assistant, tambi\xE9n con sonido.",director:"Director en directo",director_hint:"Una pantalla muestra sola lo que pasa en casa: suena el timbre y la vista vuela a la puerta y mira por su c\xE1mara. Cada evento est\xE1 apagado hasta que lo actives.",director_here:"Activar en este dispositivo",director_here_hint:"Solo para este navegador, p. ej. la tablet de la pared. En una tarjeta del dashboard el director se activa en los ajustes de la tarjeta.",director_doorbell:"Suena el timbre: volar a la puerta y mirar por la c\xE1mara",director_doorbell_entity:"Timbre",director_doorbell_camera:"C\xE1mara de la puerta",director_no_doorbell:"No se encontr\xF3 ning\xFAn timbre. Elige la entidad event o binary_sensor de tu timbre.",director_motion:"Una c\xE1mara ve a alguien",director_appliances:"Lavadora, secadora o lavavajillas terminados",director_alerts:"Aviso nuevo (humo, agua, alarma, ventana abierta con lluvia \u2026)",director_hold:"Volver tras (segundos)",director_back_hint:"Despu\xE9s la vista vuelve a donde estaba, salvo que alguien haya tocado la pantalla mientras tanto. A quien est\xE9 usando la tablet solo le interrumpen el timbre y los avisos. Con el timbre se queda el doble de tiempo.",voice:"Control por voz",voice_hint:"Un bot\xF3n de micr\xF3fono abajo a la izquierda en la vista 3D: t\xF3calo y habla. \xABMuestra el sal\xF3n\xBB, \xABplanta de arriba\xBB o \xABtoda la casa\xBB muestran el sitio; lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist de Home Assistant.",voice_here:"Activar en este dispositivo",aliases:"Otros nombres para la voz",aliases_hint:"Otros nombres separados por comas, para pedir la \xABSmart TV Pro\xBB como \xABtele del sal\xF3n\xBB o \xABtele\xBB. Los usan el control por voz y la b\xFAsqueda.",aliases_placeholder:"p. ej. tele del sal\xF3n, tele",voice_understands:"Qu\xE9 entiende CasaNeon",voice_examples:"\xABMuestra el sal\xF3n\xBB|\xABVe a la planta de arriba\xBB|\xABMuestra toda la casa\xBB|\xABMuestra la lavadora\xBB / \xAB\xBFD\xF3nde est\xE1 la secadora?\xBB|\xABMuestra la c\xE1mara de la entrada\xBB|\xABMuestra las c\xE1maras\xBB|Todo lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist",voice_needs:"Necesita https, permiso para el micr\xF3fono (en Fully Kiosk: Web Content Settings \u2192 acceso al micr\xF3fono) y una pipeline de Assist con voz a texto. En una tarjeta del dashboard el bot\xF3n se activa en los ajustes de la tarjeta.",voice_showing:"Mostrando {name}.",screen_name:"Nombre de pantalla (para Assist)",screen_name_placeholder:"p. ej. Cocina",screen_name_hint:"Preguntar a Assist (\xABMuestra el sal\xF3n\xBB) o una automatizaci\xF3n que llame al servicio neonplan3d.ask llega a todas las vistas de CasaNeon abiertas. Si el servicio nombra una pantalla, solo reacciona la vista con ese nombre.",voice_room:"Habitaci\xF3n de este dispositivo (para \xABaqu\xED\xBB)",voice_room_none:"Ninguna (como antes)",voice_room_hint:"Si la tableta est\xE1 en una habitaci\xF3n, bastan frases sin nombre de habitaci\xF3n: \xABEnciende la luz\xBB, \xABApaga la luz aqu\xED\xBB o \xABBaja las persianas\xBB se aplican entonces a esa habitaci\xF3n. Si nombras una habitaci\xF3n, cuenta esa. Puedes elegir las habitaciones que tienen un \xE1rea de Home Assistant. Un dispositivo de voz como el Voice PE no lo necesita, ya conoce su \xE1rea.",card_voice_area:"Habitaci\xF3n para \xABaqu\xED\xBB",card_voice_area_none:"Ninguna (ajuste del dispositivo)",card_voice_area_hint:"Si la tableta con este panel est\xE1 en una habitaci\xF3n, las frases sin nombre de habitaci\xF3n (\xABEnciende la luz\xBB, \xABApaga la luz aqu\xED\xBB) se aplican a esta \xE1rea. Sin elegir, cuenta la habitaci\xF3n ajustada en el propio dispositivo.",voice_button:"Hablar",voice_listen:"Escuchando \u2026",voice_none:"No se entendi\xF3 nada",voice_silent:"El micr\xF3fono solo da silencio. Normalmente lo tiene otra app: en Fully Kiosk desactiva la detecci\xF3n ac\xFAstica de movimiento (Motion Detection \u2192 Acoustic Detection) y recarga.",voice_no_pipeline:"No hay voz a texto configurada en Assist (Ajustes \u2192 Asistentes de voz).",voice_denied:"Micr\xF3fono no permitido: solo funciona con https y con el permiso en el navegador o en Fully Kiosk.",voice_error:"Control por voz: {msg}",card_voice:"Control por voz (bot\xF3n de micr\xF3fono)",card_voice_hint:"\xABMuestra el sal\xF3n\xBB muestra la habitaci\xF3n; las dem\xE1s frases van a Assist. Necesita https y el micr\xF3fono permitido",director_mic_test:"\u{1F399}\uFE0F Probar el micr\xF3fono",director_mic_hint:"Comprueba https, el micr\xF3fono y la voz a texto de Assist en este dispositivo y muestra qu\xE9 habitaci\xF3n abrir\xEDa una frase. No se acciona nada.",voice_pipeline:"Pipeline de Assist en este dispositivo",voice_sentences:"Frases para Assist",voice_sentences_hint:"Lo que Assist pasa a CasaNeon. Preguntas como \xAB\xBFQu\xE9 ventanas est\xE1n abiertas?\xBB las contesta si no Home Assistant; \xABPregunta a la casa qu\xE9 ventanas est\xE1n abiertas\xBB siempre llega a CasaNeon.",voice_pipeline_preferred:"La preferida en Home Assistant",voice_pipeline_no_stt:"sin voz a texto",backdrop:"Fondo",backdrop_kind:"Detr\xE1s de la casa",backdrop_color:"Un color",backdrop_top:"Color arriba",backdrop_bottom:"Color abajo",backdrop_image_url:"Direcci\xF3n de la imagen",backdrop_dim:"Oscurecer",backdrop_image_bad:"Esta direcci\xF3n no sirve: https://\u2026 o una ruta como /local/fondo.jpg",backdrop_hint:"Pon la imagen en config/www de Home Assistant; entonces es /local/nombre.jpg. Oscurecer mantiene legibles las l\xEDneas de ne\xF3n. No cuesta rendimiento, tampoco en tablets antiguas.",director_live:"Imagen en directo al mirar por la c\xE1mara",director_live_hint:"En vez de una foto cada pocos segundos corre el v\xEDdeo de la c\xE1mara (con el reproductor de Home Assistant). Necesita m\xE1s potencia: mejor desactivado en tablets muy antiguas.",director_triggers:"Disparadores propios",director_triggers_hint:"Cuando una de estas entidades se enciende o se abre (un segundo timbre, el port\xF3n del garaje, la puerta del jard\xEDn), la vista vuela all\xED y mira por la c\xE1mara elegida (sin c\xE1mara: al dispositivo).",director_trigger_entity:"Disparador",director_trigger_add:"+ A\xF1adir disparador",card_director:"Director en directo (cabina de c\xE1maras)",card_director_hint:"La tarjeta muestra sola lo que pasa. Qu\xE9 eventos, lo eliges en el editor en \xABDirector en directo\xBB.",card_roof:"Mostrar el tejado",card_roof_hint:"Desactivado: la casa se ve sin tejado, como si no lo tuviera, con las habitaciones abiertas (los campos solares del tejado desaparecen con \xE9l)",room_order_up:"Subir la habitaci\xF3n (antes en la barra de habitaciones)",room_order_down:"Bajar la habitaci\xF3n (despu\xE9s en la barra de habitaciones)",outdoor_area_hint:"Con un \xE1rea, la superficie funciona como una habitaci\xF3n: un toque en 3D la abre con los dispositivos del \xE1rea, aparece en la barra de habitaciones y lleva su nombre.",angle_lock:"Bloqueo 3D",angle_lock_hint:"El \xE1ngulo queda fijo: arrastrar desplaza la vista y el zoom sigue funcionando; nadie gira la casa sin querer.",strip_rise:"Inclinaci\xF3n (\xB0)",strip_rise_hint:"La tira sube a lo largo, p. ej. por la escalera o un pasamanos (~35\u201340\xB0). Su altura sobre el suelo es entonces la de su centro.",wall_slope:"Inclinada",wall_slope_hint:"Pared inclinada: una altura propia en cada esquina y el borde superior recto entre ellas (un cobertizo, una pendiente, ventanas altas en el lado alto). Ventanas y puertas quedan por debajo del borde.",wall_slope_start:"Altura en la esquina {n} (m)",wall_slope_end:"Altura en la esquina {n} (m)",theme_auto:"Auto (D\xEDa/Ne\xF3n seg\xFAn el sol)",markers_room:"En la habitaci\xF3n",pin_size:"Tama\xF1o de los s\xEDmbolos",pin_size_small:"Peque\xF1o",pin_size_normal:"Normal",pin_size_large:"Grande",hh_notes:"Tabl\xF3n (ayudante de texto)",hh_notes_hint:"Un ayudante de texto (input_text) o sensor cuyo texto aparece en \xABHoy en casa\xBB; separa varias l\xEDneas con |. Las automatizaciones escriben en \xE9l (\xABel paquete est\xE1 en el garaje\xBB) y la tarjeta lo muestra.",heat_sensor:"Calefacci\xF3n (sensor)",heat_sensor_hint:"Si el termostato no dice si calienta (las v\xE1lvulas Tuya informan un \xABwork state\xBB), elige aqu\xED ese sensor: encendido/abierto/calentando o una apertura mayor de 0 % hace brillar el radiador.",door_lock:"Cerradura inteligente",door_lock_hint:"La cerradura de la puerta (Nuki, Aqara \u2026): un pin en la puerta muestra cerrada o abierta; un toque la cierra o la abre.",clock:"Reloj",clock_off:"Desactivado",clock_tl:"\u2196 reloj",clock_tr:"\u2197 reloj",clock_bl:"\u2199 reloj",clock_br:"\u2198 reloj",editor_floor:"Planta inicial del editor",editor_floor_auto:"La primera de la lista",editor_floor_hint:"La planta con la que se abre el editor.",director_motion_off:"Desactivado",director_motion_person:"Solo personas",director_motion_all:"Cualquier movimiento",voice_sentences_distinct:"Solo las inequ\xEDvocas (\xABMuestra \u2026\xBB, \xABPregunta a la casa \u2026\xBB, \xABCasa, \u2026\xBB)",voice_sentences_all:"Todas las preguntas (tambi\xE9n las que Home Assistant contesta por s\xED mismo)",voice_sentences_off:"Ninguna (predeterminado \u2013 sin archivo de frases)",backdrop_look:"El cielo del aspecto (por defecto)",backdrop_gradient:"Degradado",backdrop_image:"Imagen",voice_sentences_kept:"Has cambiado t\xFA el archivo de frases de {langs} \u2013 CasaNeon no lo toca.",voice_sentences_failed:"No se pudo escribir el archivo de frases.",voice_sentences_file:"CasaNeon solo crea el archivo custom_sentences/<idioma>/neonplan3d.yaml cuando eliges frases aqu\xED. Un archivo que hayas cambiado nunca se sobrescribe; al quitar la integraci\xF3n se borra el archivo de CasaNeon.",roof_end:"Extremo",roof_end_auto:"seg\xFAn la forma",roof_end_gable:"Hastial",roof_end_hint:"C\xF3mo termina la cumbrera en este extremo: hastial (muro vertical), fald\xF3n o media cadera; por ejemplo, un fald\xF3n solo en un lado.",devices_hide_all:"Ocultar los {n} en el panel de la habitaci\xF3n",devices_show_all:"Mostrar de nuevo los {n}",sill_board:"Alf\xE9izar",sill_board_hint:"Autom\xE1tico: a partir de 30 cm de antepecho, alf\xE9izar por dentro y por fuera; ninguno en una ventana que se apoya directamente sobre otra (montante, frente acristalado dividido).",sill_board_auto:"autom\xE1tico",sill_board_none:"ninguno",sill_board_inside:"solo dentro",sill_board_outside:"solo fuera",lib_room_all:"Todas las habitaciones",lib_room_living:"Sal\xF3n",lib_room_dining:"Comedor",lib_room_kitchen:"Cocina",lib_room_bedroom:"Dormitorio",lib_room_kids:"Ni\xF1os",lib_room_bath:"Ba\xF1o",lib_room_office:"Oficina",lib_room_hall:"Pasillo",lib_room_utility:"Lavadero",lib_room_garage:"Garaje",lib_room_garden:"Jard\xEDn",lib_room_hobby:"Hobby y fitness",lib_kind_sofa:"Sof\xE1s",lib_kind_seating:"Asientos",lib_kind_table:"Mesas",lib_kind_storage:"Armarios y estanter\xEDas",lib_kind_bed:"Camas",lib_kind_kitchen:"Cocina",lib_kind_appliance:"Electrodom\xE9sticos",lib_kind_bath:"Ba\xF1o",lib_kind_lamp:"Luces",lib_kind_media:"TV y audio",lib_kind_office:"Oficina",lib_kind_tech:"T\xE9cnica y hogar inteligente",lib_kind_heating:"Calefacci\xF3n y clima",lib_kind_energy:"Energ\xEDa",lib_kind_household:"Hogar",lib_kind_deco:"Decoraci\xF3n",lib_kind_plant:"Plantas",lib_kind_outdoor:"Jard\xEDn y exterior",lib_kind_kids:"Ni\xF1os",lib_kind_sport:"Fitness",lib_kind_pets:"Mascotas",lib_kind_vehicle:"Veh\xEDculos",lib_kind_stairs:"Escaleras y barandillas",lib_kind_architecture:"Arquitectura",lib_recent:"Usados recientemente",lib_favorites:"Favoritos",lib_fav_add:"A\xF1adir a favoritos",lib_fav_remove:"Quitar de favoritos",lib_chip_electric:"Vinculable",lib_chip_light:"Ilumina",lib_chip_outdoor:"Exterior",lib_more:"Mostrar {n} m\xE1s",lib_basic:"B\xE1sico",lib_sizes:"{n} tama\xF1os",lib_hint_room:"Sugerido para la habitaci\xF3n abierta \u2013 cambia arriba.",persons:"Personas",locate:"Localizaci\xF3n",bin_out:"Sacado (ayudante)",bin_out_hint:"Opcional: encendido mientras el cubo est\xE1 fuera (input_boolean, interruptor o sensor binario). Entonces deja de brillar y su etiqueta dice \xABsacado \u2713\xBB; tocar el cubo conmuta un ayudante o interruptor. Una automatizaci\xF3n nocturna lo restablece.",bin_out_done:"sacado \u2713",bin_out_mark:"Marcar como sacado",bin_next_only:"Etiquetar solo la pr\xF3xima recogida",bin_days:"Mostrar etiquetas solo \u2026 d\xEDas antes",bin_days_always:"siempre",bin_tags_hint:"Para todos los cubos. Los cubos sin etiqueta siguen en \xABHoy en casa\xBB y muestran sus recogidas al tocarlos.",hh_service2:"{name}: {what} pendiente",hh_service2_entity:"Segundo mantenimiento (p. ej. base)",hh_service2_min:"Segundo pendiente desde (\u2264 % o d\xEDas)",door_lock_btn:"Bloquear",door_unlock_btn:"Desbloquear",door_lock_confirm:"\xBFSeguro que quieres bloquear {name}?",door_unlock_confirm:"\xBFSeguro que quieres desbloquear {name}?",garage_pulse_hint:"Un interruptor o bot\xF3n como motor: un toque en la puerta da un impulso (el interruptor se enciende, el bot\xF3n se pulsa); si la puerta est\xE1 abierta lo indica el contacto.",pin_standby:"En espera"};function T(o,e,t={}){let n=Mp[e]??e;for(let[r,i]of Object.entries(t))n=n.replace(`{${r}}`,String(i));return n}function ie(o,e,t=2){return e.toLocaleString("es",{maximumFractionDigits:t})}var Sp=["pool"];function Gr(){try{let o=new URLSearchParams(location.search).get("fp3d_lab");return o==="1"?localStorage.setItem("neonplan3d.lab","1"):o==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function bl(){try{let o=new URLSearchParams(location.search).get("fp3d_projection");return o==="1"?localStorage.setItem("neonplan3d.projection","1"):o==="0"&&localStorage.removeItem("neonplan3d.projection"),localStorage.getItem("neonplan3d.projection")==="1"}catch{return!1}}function jn(o){return!Sp.includes(o)||Gr()}var gl="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",Ep={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function _l(o){let e=o?Ep[o]:void 0;return e?`${gl}#${e}`:gl}function W(o){return jn(o)}function Yr(o){return(o==null?void 0:o.settings.person_look)??"figure"}function xo(o){return Yr(o)!=="off"}var vl=["#ff5fd2","#37e0ff","#ffb84d","#7dff8a","#b18cff","#ff7a6b","#4dd2c0","#f5e663"];function Kr(o){let e=0;for(let t of o)e=e*31+t.charCodeAt(0)>>>0;return vl[e%vl.length]}var yl=o=>o.toLowerCase().replace(/[_\-]+/g," ").replace(/\s+/g," ").trim();function Pp(o,e,t){var r,i;let n=yl(t);if(!n||n==="unknown"||n==="unavailable"||n==="not home"||n==="away")return null;for(let a of e.floors)for(let s of a.rooms)if([s.name,s.area_id??"",s.area_id?((i=(r=o.areas)==null?void 0:r[s.area_id])==null?void 0:i.name)??"":""].filter(Boolean).map(yl).includes(n))return{floorId:a.id,room:s};return null}function wl(o){let e=o.trim().split(/\s+/).filter(Boolean);return e.length?(e.length>1?e[0][0]+e[e.length-1][0]:e[0].slice(0,2)).toUpperCase():"?"}function Ip(o){return!["home","on","unknown","unavailable",""].includes(o)}function xl(o,e){let t=[],n=new Map;for(let r of e.presence){let i=o.states[r.person];if(!i||!r.sensor||i.state!=="home"&&i.state!=="on")continue;let a=o.states[r.sensor];if(!a)continue;let s=Pp(o,e,a.state);if(!s)continue;let l=n.get(s.room.id)??0;n.set(s.room.id,l+1);let[u,c]=Te(s.room.points),d=-Math.PI/2+.9+l*1.15,p=.75,h=i.attributes.friendly_name??r.person;t.push({id:r.person,name:h,initials:wl(h),picture:i.attributes.entity_picture??null,floorId:s.floorId,roomId:s.room.id,x:u+Math.cos(d)*p,z:c+Math.sin(d)*p})}return t}function ko(o,e,t=new Set,n=Date.now()){let r=[];for(let[d,p]of Object.entries(o.states)){let h=p.attributes;if(!d.startsWith("sensor.")||h.neonplan_locate!==!0||typeof h.room_id!="string")continue;let m=null;for(let b of e.floors){let w=ge(b).find(y=>y.id===h.room_id);w&&(m={floorId:b.id,room:w})}if(!m)continue;let g=typeof h.last_seen=="string"?Date.parse(h.last_seen):NaN,f=typeof h.since=="string"?Date.parse(h.since):NaN;r.push({entityId:d,name:typeof h.device_name=="string"?h.device_name:d,person:typeof h.person=="string"?h.person:null,floorId:m.floorId,room:m.room,seen:Number.isFinite(g)?g:0,since:Number.isFinite(f)?f:0,probability:typeof h.probability=="number"?h.probability:0,worn:h.wearable===!0})}let i=[],a=new Map,s=new Map,l=(d,p)=>{let h=a.get(d.room.id)??0;if(a.set(d.room.id,h+1),!p.thing){let b=s.get(d.room.id);b||s.set(d.room.id,b=Rp(o,e,d.floorId,d.room));let w=b.shift();if(w){i.push({...p,floorId:d.floorId,roomId:d.room.id,x:w[0],z:w[1]});return}}let[m,g]=Te(d.room.points),f=-Math.PI/2+.9+h*1.15;i.push({...p,floorId:d.floorId,roomId:d.room.id,x:m+Math.cos(f)*.75,z:g+Math.sin(f)*.75})},u=(d,p)=>l(d,{id:d.entityId,name:d.name,initials:d.name.slice(0,1).toUpperCase(),picture:null,color:p,entity:d.entityId,tag:d.name,thing:!0}),c=new Map;for(let d of r)d.person?c.set(d.person,[...c.get(d.person)??[],d]):u(d,Kr(d.entityId));for(let[d,p]of c){if(t.has(d))continue;let h=o.states[d];if(h&&Ip(h.state))continue;let m=S=>S.reduce((P,I)=>I.seen>P.seen?I:P),g=p.filter(S=>S.worn&&n-S.seen<12e4),f=m(g.length?g:p),b=S=>n-S.seen<3e4&&n-f.seen<3e4&&S.since>=f.since-12e4,w=null;if(f.worn){let S=p.filter(I=>!I.worn&&I.room.id!==f.room.id&&b(I)),P=S.length?S.reduce((I,v)=>v.probability>I.probability?v:I):null;P&&n-f.since>=6e5&&P.since>f.since+12e4?(w=f,f=P):P&&P.probability>f.probability+.15&&(f=P)}let y=(h==null?void 0:h.attributes.friendly_name)??f.name;l(f,{id:d,name:y,initials:wl(y),picture:(h==null?void 0:h.attributes.entity_picture)??null,color:Kr(d),entity:f.entityId,tag:y.split(/\s+/)[0]});for(let S of p)S===f||S.room.id===f.room.id||S!==w&&(S.worn&&n-S.seen<12e4||b(S))||u(S,Kr(d))}return i}var Ap=[[/sofa|couch|corner|chesterfield|recamiere|chaise|^module_/,["sofa","couch","wohnlandschaft","ecksofa","eckcouch"]],[/armchair|club_chair|wingback|recliner|lounge_chair|cocktail_chair|rocking_chair|bean_bag/,["sessel","armchair","ohrensessel","relaxsessel","chair"]],[/bed/,["bett","bed"]],[/^dining/,["esstisch","essen","essbereich","dining","tisch","table"]],[/^coffee/,["couchtisch"]],[/desk/,["schreibtisch","desk","arbeitsplatz","office"]]],Tp=["terrasse","garten","balkon","aussen","draussen","terrace","garden","patio","balcony","outside"];function zp(o,e){let t=[],[n,r]=Te(e.points),i=(a,s)=>a.points.some((l,u)=>{let c=a.points[(u+1)%a.points.length],[d,p]=[c[0]-l[0],c[1]-l[1]],h=d*d+p*p||1,m=Math.max(0,Math.min(1,((s[0]-l[0])*d+(s[1]-l[1])*p)/h));return Math.hypot(l[0]+m*d-s[0],l[1]+m*p-s[1])<.3});for(let a of o.openings){if(a.wall||a.type==="window"&&a.sill>.3||a.type==="garage")continue;let s=o.rooms.find(m=>m.id===a.room_id);if(!s)continue;let l=s.points[a.edge],u=s.points[(a.edge+1)%s.points.length];if(!l||!u)continue;let c=Math.hypot(u[0]-l[0],u[1]-l[1])||1,d=[l[0]+(u[0]-l[0])*a.offset/c,l[1]+(u[1]-l[1])*a.offset/c];if(!i(e,d))continue;let p=o.rooms.find(m=>m.id!==e.id&&i(m,d)),h=.6/(Math.hypot(n-d[0],r-d[1])||1);t.push({to:p?an(p.name):null,spot:[d[0]+(n-d[0])*h,d[1]+(r-d[1])*h]})}return t}var Cp=["praesenz","presence","occupancy","anwesenheit","belegt","zone","bereich","raum","room","rest","sensor","fp2"],an=o=>o.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").split(/[^a-z0-9]+/).filter(e=>e.length>1);function Rp(o,e,t,n){var u,c;let r=e.floors.find(d=>d.id===t);if(!r||!n.area_id)return[];let i=r.furniture.filter(d=>U([d.x,d.z],n.points)),a=zp(r,n),s=[],l=new Set([...an(n.name),...an(((c=(u=o.areas)==null?void 0:u[n.area_id])==null?void 0:c.name)??""),...an(n.area_id),...Cp]);for(let[d,p]of Object.entries(o.states)){if(!d.startsWith("binary_sensor.")||p.state!=="on")continue;let h=p.attributes.device_class;if(h!=="occupancy"&&h!=="presence"||ze(o,d)!==n.area_id)continue;let g=new Set(an(String(p.attributes.friendly_name??d.slice(14))).filter(y=>!l.has(y))),f=i.find(y=>y.name&&an(y.name).some(S=>g.has(S))||Ap.some(([S,P])=>S.test(y.type.split(":").pop()??"")&&P.some(I=>g.has(I)))),b=f?null:a.find(y=>y.to?y.to.some(S=>g.has(S)):[...g].some(S=>Tp.some(P=>S.includes(P)))),w=f?[f.x,f.z]:b?b.spot:null;w&&!s.some(([y,S])=>y===w[0]&&S===w[1])&&s.push(w)}return s}function kl(o,e,t,n){let r=new Map,i=a=>{var s;return!!a&&((s=o.states[a])==null?void 0:s.state)==="on"};for(let a of e.floors){let s=new Set;for(let u of a.rooms)for(let c of vo(o,_e(o,u.area_id)))V(c)==="light"&&s.add(c);for(let u of a.placements)V(u.entity_id)==="light"&&s.add(u.entity_id);let l=a.openings.filter(u=>{let c=t.get(u.id);if(!c)return!1;if(u.type==="garage")return(Xe(o,c,"garage").cover??1)<.95;if(u.type==="door")return i(c.contact)||i(c.contact2??null);let d=Xe(o,c,"window");return d.open>.5||d.tilt>.5||d.open2>.5||d.tilt2>.5}).length;r.set(a.id,{rooms:a.rooms.length,lightsOn:[...s].filter(u=>{var c;return((c=o.states[u])==null?void 0:c.state)==="on"}).length,open:l,persons:n.filter(u=>u.floorId===a.id).length})}return r}function $l(o,e){let t=[e.rooms===1?T(o,"floor_rooms_one"):T(o,"floor_rooms",{n:e.rooms})];return e.lightsOn&&t.push(T(o,"floor_lights",{n:e.lightsOn})),e.open&&t.push(T(o,"floor_open",{n:e.open})),e.persons&&t.push(T(o,"floor_persons",{n:e.persons})),t.join(" \xB7 ")}var Ml={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function $o(o){return Ml[o]}function sn(o){return`<ha-icon icon="mdi:${o.replace(/^mdi:/,"").replace(/[^a-z0-9-]/gi,"")}" style="--mdc-icon-size:18px"></ha-icon>`}function ln(o){return`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${Ml[o]}"/></svg>`}var it=(o,e)=>T(o,e),Sl=new Set;function El(o){Sl=o}var Fp={open:"closed",closed:"open",opening:"closing",closing:"opening"};function $e(o,e){var n,r;if(!e||X(e))return it(o,"state_unavailable");let t=e.attributes;switch(V(e.entity_id)){case"light":return e.state!=="on"?it(o,"state_off"):typeof t.brightness=="number"?`${Math.round(t.brightness/255*100)} %`:it(o,"state_on");case"switch":case"fan":return it(o,e.state==="on"?"state_on":"state_off");case"cover":{let i=Sl.has(e.entity_id);return typeof t.current_position=="number"&&e.state!=="opening"&&e.state!=="closing"?`${i?100-t.current_position:t.current_position} %`:Mo(o,i?Fp[e.state]??e.state:e.state)}case"climate":{let i=typeof t.current_temperature=="number"?`${ie(o,t.current_temperature,1)} ${o?Ve(o):"\xB0C"}`:null;return e.state==="off"?i?`${i} \xB7 ${it(o,"state_off")}`:it(o,"state_off"):i??Mo(o,e.state)}case"media":{let i=e.state==="playing"||e.state==="paused"||e.state==="on"||e.state==="idle",a=[t.app_name,t.media_title,t.source].find(s=>typeof s=="string"&&s);return i&&a?a:Mo(o,e.state)}case"lock":case"camera":return Mo(o,e.state);case"binary":return["door","window","opening","garage_door"].includes(t.device_class)?it(o,e.state==="on"?"state_open":"state_closed"):it(o,e.state==="on"?"state_detected":"state_clear");case"sensor":{let i=Number(e.state),a=t.unit_of_measurement??"",s=((r=(n=o==null?void 0:o.entities)==null?void 0:n[e.entity_id])==null?void 0:r.display_precision)??1;return Number.isFinite(i)?`${ie(o,i,s)}${a?` ${a}`:""}`:e.state}default:return""}}function Mo(o,e){let t=`state_${e}`,n=T(o,t);return n===t?e:n}function Pl(o,e){var r,i;let t=[],n=new Set(e.floors.flatMap(a=>a.furniture.map(s=>s.look_of).filter(s=>!!s)));for(let a of e.floors)for(let s of a.placements){let l=V(s.entity_id),u=o.states[s.entity_id];if(!l||!u)continue;let c=a.rooms.find(p=>p.points.length>=3&&U([s.x,s.z],p.points))??null,d=c!=null&&c.area_id?(i=(r=o.areas)==null?void 0:r[c.area_id])==null?void 0:i.name:void 0;t.push({id:s.entity_id,floorId:a.id,roomId:(c==null?void 0:c.id)??null,x:s.x,z:s.z,y:s.y??nn(l,a.height,s.mount??null),lamp:l==="light"?s.mount??"ceiling":null,model:l==="camera"?s.mount==="ceiling"?"camera_ceiling":"camera_wall":void 0,...l==="camera"&&n.has(s.entity_id)?{ownLook:!0}:{},motion:l==="camera"?Hp(o,s.entity_id):void 0,fov:s.fov??void 0,reach:s.reach??void 0,tilt:s.tilt??void 0,rotation:s.rotation??0,icon:s.icon?sn(s.icon):ln(l),cone:l==="camera"&&s.cone===!1?!1:void 0,name:s.name||Q(o,s.entity_id,d),ownName:s.name||void 0,showName:!!s.show_name,text:$e(o,u),active:Ge(u),unavailable:X(u),glow:l==="light"?Jr(Et(u),s.glow_scale):null,show:s.marker??void 0,fixed:!!s.locked})}return t}function Qr(o,e){var n;let t=`${e} ${String(((n=o.states[e])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(t)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(t)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(t)?"pet":"motion"}function Hp(o,e){return Ze(o,e).some(t=>{var n;return((n=o.states[t])==null?void 0:n.state)==="on"})}var Il=new Map;function Al(o){Il=new Map((o==null?void 0:o.floors.flatMap(e=>e.placements.filter(t=>Array.isArray(t.detect_sensors)).map(t=>[t.entity_id,t.detect_sensors])))??[])}function Ze(o,e){return Il.get(e)??Lp(o,e)}function Lp(o,e){var n,r;let t=(r=(n=o.entities)==null?void 0:n[e])==null?void 0:r.device_id;return t?Object.values(o.entities??{}).filter(i=>i.device_id===t&&i.entity_id.startsWith("binary_sensor.")).map(i=>i.entity_id).filter(i=>{var a;return["motion","occupancy","presence"].includes(String((a=o.states[i])==null?void 0:a.attributes.device_class))}):[]}function Tl(o){return o.floors.flatMap(e=>e.placements.map(t=>t.entity_id))}function xe(o,e){o.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}function cn(o,e){let t=e.slice(0,e.indexOf("."));return o.callService(t,"toggle",{entity_id:e})}function Jr(o,e){return!o||e==null||e===1?o:{...o,level:Math.max(.02,Math.min(1.5,o.level*e))}}var Ce=(o,e)=>[o[0]-e[0],o[1]-e[1]],at=(o,e)=>[o[0]+e[0],o[1]+e[1]],et=(o,e)=>[o[0]*e,o[1]*e],Xr=(o,e)=>o[0]*e[0]+o[1]*e[1],dn=(o,e)=>o[0]*e[1]-o[1]*e[0],Vn=o=>Math.hypot(o[0],o[1]),st=o=>{let e=Vn(o)||1;return[o[0]/e,o[1]/e]},zl=o=>[-o[1],o[0]],Cl=o=>[o[1],-o[0]];function un(o,e,t=[]){let n=e.eps??.005,r=[],i=t.filter(A=>Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1])>.05),a=[],s=A=>{for(let M=0;M<a.length;M++)if(Math.abs(a[M][0]-A[0])<=n&&Math.abs(a[M][1]-A[1])<=n)return M;return a.push([A[0],A[1]]),a.length-1},l=[];for(let A of o){let M=A.points;if(M.length<3||Math.abs(je(M))<1e-6)continue;let $=je(M)>0,E=M.map(s);for(let C=0;C<M.length;C++){let j=E[C],N=E[(C+1)%M.length];j!==N&&l.push($?{u:j,v:N,room:A.id,edge:C,forward:!0}:{u:N,v:j,room:A.id,edge:C,forward:!1})}}let u=i.map(A=>[s(A.a),s(A.b)]),c=new Set;for(let A of o){let M=A.points;M.length<3||(A.wall_splits??[]).forEach(($,E)=>{if(!$||E>=M.length)return;let C=M[E],j=Ce(M[(E+1)%M.length],C),N=Vn(j);for(let J of $)J>n&&J<N-n&&c.add(s(at(C,et(j,J/N))))})}let d=[];for(let A of l){let M=a[A.u],$=a[A.v],E=Ce($,M),C=Vn(E),j=et(E,1/C),N=[];for(let F=0;F<a.length;F++){if(F===A.u||F===A.v)continue;let B=Ce(a[F],M),q=Xr(B,j);q<=n||q>=C-n||Math.abs(dn(j,B))<=n&&N.push({t:q,id:F})}N.sort((F,B)=>F.t-B.t);let J=[{t:0,id:A.u},...N,{t:C,id:A.v}];for(let F=0;F+1<J.length;F++){let B=J[F],q=J[F+1],ne=A.forward?B.t:C-q.t,H=A.forward?q.t:C-B.t;d.push({u:B.id,v:q.id,room:A.room,edge:A.edge,t0:ne,t1:H})}}let p=new Map;for(let A of d){let M=A.u<A.v?`${A.u}-${A.v}`:`${A.v}-${A.u}`,$=p.get(M);$||p.set(M,$=[]),$.push(A)}let h=A=>({room_id:A.room,edge:A.edge,t0:A.t0,t1:A.t1}),m=new Map;for(let A of d){let M=`${A.room}:${A.edge}`;m.set(M,[...m.get(M)??[],A.t0].sort(($,E)=>$-E))}let g=A=>{var E,C;let M=(C=(E=o.find(j=>j.id===A.room))==null?void 0:E.wall_heights)==null?void 0:C[A.edge];if(!Array.isArray(M))return M;let $=m.get(`${A.room}:${A.edge}`)??[];return M[$.indexOf(A.t0)]??null},f=A=>{let M=A.map(g).filter(E=>typeof E=="number"&&E>0);if(M.length)return Math.min(...M);let $=A.map(E=>{var C;return(C=o.find(j=>j.id===E.room))==null?void 0:C.ceiling_height});return $.every(E=>typeof E=="number"&&E>0)?Math.max(...$):void 0},b=A=>{let M=A.map($=>{var E,C;return(C=(E=o.find(j=>j.id===$.room))==null?void 0:E.wall_thickness)==null?void 0:C[$.edge]}).filter($=>typeof $=="number"&&$>0);return M.length?Math.max(...M):void 0},w=A=>{var M;for(let $ of A){let E=o.find(J=>J.id===$.room),C=(M=E==null?void 0:E.wall_slopes)==null?void 0:M[$.edge];if(!E||!C)continue;let j=E.points[$.edge],N=E.points[($.edge+1)%E.points.length];return{p:[j[0],j[1]],q:[N[0],N[1]],h0:Math.max(.05,C[0]),h1:Math.max(.05,C[1])}}},y=A=>A.some(M=>g(M)===0),S=A=>{let M=w(A);return M?{height:Math.max(M.h0,M.h1),slope:M}:{height:f(A)}},P=[],I=[];for(let A of p.values()){let M=A[0],$=A.find(E=>E!==M&&E.u===M.v&&E.v===M.u&&E.room!==M.room);for(let E of A)E!==M&&E!==$&&E.room!==M.room&&r.push(`overlap:${M.room}:${E.room}`);if(y($?[M,$]:[M])){$&&P.push([M.room,$.room]);continue}if($){let E=b([M,$])??e.interior;I.push({a:M.u,b:M.v,left:E/2,right:E/2,exterior:!1,roomLeft:M.room,roomRight:$.room,sources:[h(M),h($)],...S([M,$])})}else I.push({a:M.u,b:M.v,left:0,right:b([M])??e.exterior,exterior:!0,roomLeft:M.room,roomRight:null,sources:[h(M)],...S([M])})}let v=A=>st(Ce(a[A.b],a[A.a]));for(let A of I){if(A.exterior||A.free)continue;let M=new Set;for(let E of[A.a,A.b])for(let C of I)!C.exterior||C.free||C.a!==E&&C.b!==E||Math.abs(dn(v(A),v(C)))>1e-6||(C.roomLeft===A.roomLeft?M.add("left"):C.roomLeft===A.roomRight&&M.add("right"));if(M.size!==1)continue;let $=A.left+A.right;M.has("left")?(A.left=0,A.right=$):(A.left=$,A.right=0)}i.forEach((A,M)=>{var q;let[$,E]=u[M];if($===E)return;let C=[(A.a[0]+A.b[0])/2,(A.a[1]+A.b[1])/2],j=((q=o.find(ne=>ne.points.length>=3&&U(C,ne.points)))==null?void 0:q.id)??null,N=(A.thickness??e.interior)/2,J=typeof A.height=="number"&&A.height>0?A.height:void 0,F=A.slope,B=F?{p:[A.a[0],A.a[1]],q:[A.b[0],A.b[1]],h0:Math.max(.05,F[0]),h1:Math.max(.05,F[1])}:void 0;I.push({free:A.id,a:$,b:E,left:N,right:N,exterior:!1,roomLeft:j,roomRight:j,sources:[],...B?{height:Math.max(B.h0,B.h1),slope:B}:{height:J}})}),I=Dp(I,a,c);let O=Vp(I,a);return{walls:I.map((A,M)=>{let $=a[A.a],E=a[A.b],C=O.get(`${M}:a`),j=O.get(`${M}:b`),N=Np([C.right,j.left,E,j.right,C.left,$],1e-6);return{id:Op($,E),a:[$[0],$[1]],b:[E[0],E[1]],left:A.left,right:A.right,exterior:A.exterior,roomLeft:A.roomLeft,roomRight:A.roomRight,sources:A.sources,footprint:N,...A.free?{free:A.free}:{},...A.height!==void 0?{height:A.height}:{},...A.slope?{slope:A.slope}:{}}}),warnings:[...new Set(r)],open:P}}function Op(o,e){let t=i=>Math.round(i*100),[n,r]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Rl(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Dp(o,e,t=new Set){let n=o.slice(),r=!0;for(;r;){r=!1;let i=new Map;n.forEach((a,s)=>{for(let l of[a.a,a.b]){let u=i.get(l);u||i.set(l,u=[]),u.push(s)}});for(let[a,s]of i){if(s.length!==2||t.has(a))continue;let l=n[s[0]],u=n[s[1]];if(l.b!==a&&(l=Rl(l)),u.a!==a&&(u=Rl(u)),l.a===u.b)continue;let c=st(Ce(e[l.b],e[l.a])),d=st(Ce(e[u.b],e[u.a]));if(Math.abs(dn(c,d))>1e-6||Xr(c,d)<=0||l.free||u.free||l.height!==u.height||l.slope||u.slope||l.exterior!==u.exterior||l.roomLeft!==u.roomLeft||l.roomRight!==u.roomRight||Math.abs(l.left-u.left)>1e-9||Math.abs(l.right-u.right)>1e-9)continue;let p={...l,b:u.b,sources:jp(l.sources,u.sources)},h=n.filter((m,g)=>g!==s[0]&&g!==s[1]);h.push(p),n.length=0,n.push(...h),r=!0;break}}return n}function jp(o,e){let t=o.map(n=>({...n}));for(let n of e){let r=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Vp(o,e){let t=new Map;o.forEach((r,i)=>{let a=st(Ce(e[r.b],e[r.a])),s=[[r.a,{key:`${i}:a`,d:a,left:r.left,right:r.right,angle:Math.atan2(a[1],a[0])}],[r.b,{key:`${i}:b`,d:et(a,-1),left:r.right,right:r.left,angle:Math.atan2(-a[1],-a[0])}]];for(let[l,u]of s){let c=t.get(l);c||t.set(l,c=[]),c.push(u)}});let n=new Map;for(let[r,i]of t){let a=e[r];i.sort((u,c)=>u.angle-c.angle);let s=u=>({left:at(a,et(zl(u.d),u.left)),right:at(a,et(Cl(u.d),u.right))});for(let u of i)n.set(u.key,s(u));if(i.length<2)continue;let l=4*Math.max(...i.map(u=>Math.max(u.left,u.right)))+1e-9;for(let u=0;u<i.length;u++){let c=i[u],d=i[(u+1)%i.length],p=at(a,et(zl(c.d),c.left)),h=at(a,et(Cl(d.d),d.right)),m=dn(c.d,d.d);if(Math.abs(m)<1e-4)continue;let g=dn(Ce(h,p),d.d)/m,f=at(p,et(c.d,g));Vn(Ce(f,a))>l||(n.get(c.key).left=f,n.get(d.key).right=f)}}return n}function Np(o,e){let t=o.filter((r,i)=>Vn(Ce(r,o[(i+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let i=t[(r+t.length-1)%t.length],a=t[r],s=t[(r+1)%t.length],l=Ce(a,i),u=Ce(s,a);if(Math.abs(dn(st(l),st(u)))<1e-7&&Xr(l,u)>0){t=t.filter((c,d)=>d!==r),n=!0;break}}}return t}function So(o,e,t){let n=o.points[e],r=o.points[(e+1)%o.points.length],i=st(Ce(r,n));return at(n,et(i,t))}function Fl(o,e,t){if(o.wall){let r=t.find(s=>s.id===o.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let i=st(Ce(r.b,r.a));return{room:{id:o.room_id,name:"",area_id:null,points:[r.a,r.b,at(r.a,[-i[1],i[0]])]},edge:0}}let n=e.find(r=>r.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}var lt=Math.PI/180;function Ll(o){let e=o.rotation??0;if(!e||o.points&&o.points.length>=3)return null;let t=e*lt;return{p:o.pivot??[(o.x0+o.x1)/2,(o.z0+o.z1)/2],c:Math.cos(t),s:Math.sin(t)}}function Ol(o,e,t=!1){if(!o)return e;let n=e[0]-o.p[0],r=e[1]-o.p[1],i=t?-o.s:o.s;return[o.p[0]+n*o.c-r*i,o.p[1]+n*i+r*o.c]}function It(o){let e=Math.min(o.x0,o.x1),t=Math.max(o.x0,o.x1),n=Math.min(o.z0,o.z1),r=Math.max(o.z0,o.z1),i=Ll(o),a=o.axis==="x"?(l,u)=>[l,o.flip?r-u:n+u]:(l,u)=>[o.flip?t-u:e+u,l],s=i?(l,u)=>Ol(i,a(l,u)):a;return o.axis==="x"?{u0:e,u1:t,w:r-n,at:s}:{u0:n,u1:r,w:t-e,at:s}}function qp(o,e,t,n=1e-6){let[r,i]=ql(o,e,t),a=It({...o,rotation:0});return r>=a.u0-n&&r<=a.u1+n&&i>=-n&&i<=a.w+n}function pn(o){let e=It(o).w,t=o.eave_a,n=o.eave_b,r=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*lt),i=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*lt);if(o.shape==="flat"||o.shape==="parapet")return{vr:e/2,rh:t,y:()=>t};if(o.shape==="pent")return{vr:e,rh:t+e*r,y:l=>t+l*r};if(o.shape==="mansard"){let l=Nl(e,t,n,r,i);return{vr:l.vr,rh:l.rh,y:l.y}}let a=r+i>1e-6?Math.min(e,Math.max(0,(n-t+e*i)/(r+i))):e/2,s=t+a*r;return{vr:a,rh:s,y:l=>l<=a?t+l*r:n+(e-l)*i}}function Zr(o){let e=o.settings.roof;return e.type===void 0||e.type==="custom"?e.sections??[]:[]}var Dl=.14;function jl(o,e){return!o.open&&Math.min(o.base,o.eave_a,o.eave_b)<e-.05}function ei(o,e){return pn(o).rh-Dl>e+.01}function Vl(o,e,t,n){let r=null,i=Math.max(0,o.settings.roof.overhang??0);for(let a of Zr(o)){if(a.open||n!==void 0&&!ei(a,n)||!qp(a,e,t)||a.points&&a.points.length>=3&&!U([e,t],a.points))continue;let[s,l]=ql(a,e,t),u=a.shape==="flat"||a.shape==="parapet",c=Math.max(0,a.overhang??i),p=((u?null:Up(Bp(a,{u0:c,u1:c,a:c,b:c}),s,l))??pn(a).y(l))-Dl;r=r===null?p:Math.max(r,p)}return r}function Wp(o,e){let t=o.length;if(t<3||Math.abs(e)<1e-9)return o.map(i=>[i[0],i[1]]);let n=Hs(o)>=0?1:-1,r=[];for(let i=0;i<t;i++){let a=o[(i+t-1)%t],s=o[i],l=o[(i+1)%t],u=Hl([s[0]-a[0],s[1]-a[1]]),c=Hl([l[0]-s[0],l[1]-s[1]]),d=[u[1]*n,-u[0]*n],p=[c[1]*n,-c[0]*n],h=d[0]+p[0],m=d[1]+p[1],g=Math.hypot(h,m);if(g<1e-6){r.push([s[0]+d[0]*e,s[1]+d[1]*e]);continue}let f=(h*d[0]+m*d[1])/g,b=Math.min(4,1/Math.max(.25,f));r.push([s[0]+h/g*e*b,s[1]+m/g*e*b])}return r}function Hl(o){let e=Math.hypot(o[0],o[1])||1;return[o[0]/e,o[1]/e]}var Nn=Math.tan(30*lt);function Nl(o,e,t,n,r){let i=Math.min(o*.3,n>1e-6?2.4/n:o*.3),a=Math.min(o*.3,r>1e-6?2.4/r:o*.3),s=e+i*n,l=t+a*r,u=Math.min(o-a,Math.max(i,(l-s+Nn*(o-a+i))/(2*Nn))),c=s+(u-i)*Nn;return{vla:i,vlb:a,yla:s,ylb:l,vr:u,rh:c,y:p=>p<=i?e+p*n:p<=u?s+(p-i)*Nn:p<=o-a?l+(o-a-p)*Nn:t+(o-p)*r}}function Bp(o,e){let t=It(o),n=pn(o),r=t.w,i=Math.max(0,e.a),a=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),u=(F,B)=>[F,B,n.y(B)],c=u(s,-i),d=u(l,-i),p=u(l,r+a),h=u(s,r+a),m=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*lt),g=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*lt);if(o.shape==="pent"){let F=[c,d,p,h],B=[[0,n.y(0)],[r,n.y(r)]];return{faces:[F],rim:F,ridges:[[p,h]],gable:B,gables:[B,B]}}if(o.shape==="pyramid"){let F=[(t.u0+t.u1)/2,n.vr,n.rh];return{faces:[[c,d,F],[d,p,F],[p,h,F],[h,c,F]],rim:[c,d,p,h],ridges:[[c,F],[h,F],[d,F],[p,F]],gable:null,gables:[null,null]}}if(o.shape==="mansard"){let F=Nl(r,o.eave_a,o.eave_b,m,g),B=[[0,n.y(0)],[F.vla,F.yla],[F.vr,F.rh],[r-F.vlb,F.ylb],[r,n.y(r)]],q=[s,F.vla,F.yla],ne=[l,F.vla,F.yla],H=[s,r-F.vlb,F.ylb],se=[l,r-F.vlb,F.ylb],G=[s,F.vr,F.rh],le=[l,F.vr,F.rh];return{faces:[[c,d,ne,q],[q,ne,le,G],[G,le,se,H],[H,se,p,h]],rim:[c,d,ne,le,se,p,h,H,G,q],ridges:[[G,le],[q,ne],[H,se]],gable:B,gables:[B,B]}}let[f,b]=ti(o)??["gable","gable"],w=ni(o,[f,b]),y=f==="gable"?[s,n.vr,n.rh]:[t.u0+w.d0,n.vr,n.rh],S=b==="gable"?[l,n.vr,n.rh]:[t.u1-w.d1,n.vr,n.rh],P=[s,w.vah,w.yh],I=[s,w.vbh,w.yh],v=[l,w.vah,w.yh],O=[l,w.vbh,w.yh],K=f==="halfhip",A=b==="halfhip",M=[[c,d,...A?[v]:[],S,y,...K?[P]:[]],[y,S,...A?[O]:[],p,h,...K?[I]:[]]];f==="hip"&&M.push([h,c,y]),K&&M.push([I,P,y]),b==="hip"&&M.push([d,p,S]),A&&M.push([v,O,S]);let $=[c,d,...b==="gable"?[S]:A?[v,O]:[],p,h,...f==="gable"?[y]:K?[I,P]:[]],E=[[y,S]];f==="hip"&&E.push([c,y],[h,y]),K&&E.push([P,y],[I,y]),b==="hip"&&E.push([d,S],[p,S]),A&&E.push([v,S],[O,S]);let C=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],j=[[0,n.y(0)],[w.vah,w.yh],[w.vbh,w.yh],[r,n.y(r)]],N=F=>F==="gable"?C:F==="halfhip"?j:null,J=[N(f),N(b)];return{faces:M,rim:$,ridges:E,gable:J[0]??J[1],gables:J}}function ti(o){if(o.shape!=="gable"&&o.shape!=="hip"&&o.shape!=="halfhip")return null;let e=o.shape,t=n=>n==="gable"||n==="hip"||n==="halfhip"?n:e;return[t(o.end_u0),t(o.end_u1)]}function ni(o,e){let t=It(o),n=pn(o),r=t.w,i=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*lt),a=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*lt),s=t.u1-t.u0,l=e[0]!=="gable"&&e[1]!=="gable"?s/2:s,u=Math.min(n.y(0),n.y(r)),c=u+(n.rh-u)*.55,d=i>1e-6?Math.min(n.vr,(c-o.eave_a)/i):n.vr,p=a>1e-6?Math.max(n.vr,r-(c-o.eave_b)/a):n.vr,h=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),m=Math.min(l-.1,(n.rh-c)/Math.max(.2,i)),g=f=>f==="hip"?h:f==="halfhip"?m:0;return{d0:g(e[0]),d1:g(e[1]),yh:c,vah:d,vbh:p}}function Up(o,e,t){let n=null;for(let r of o.faces){if(!U([e,t],r.map(w=>[w[0],w[1]])))continue;let[i,a]=r,s=r.slice(2).find(w=>Math.abs((a[0]-i[0])*(w[1]-i[1])-(a[1]-i[1])*(w[0]-i[0]))>1e-9);if(!s)continue;let l=a[0]-i[0],u=a[2]-i[2],c=a[1]-i[1],d=s[0]-i[0],p=s[2]-i[2],h=s[1]-i[1],m=u*h-c*p,g=c*d-l*h,f=l*p-u*d;if(Math.abs(g)<1e-9)continue;let b=i[2]-(m*(e-i[0])+f*(t-i[1]))/g;n=n===null?b:Math.min(n,b)}return n}function ql(o,e,t){let[n,r]=Ol(Ll(o),[e,t],!0),i=Math.min(o.x0,o.x1),a=Math.max(o.x0,o.x1),s=Math.min(o.z0,o.z1),l=Math.max(o.z0,o.z1);return o.axis==="x"?[n,o.flip?l-r:r-s]:[r,o.flip?a-n:n-i]}function Wl(o,e,t){let n=It(e),r=o.floors.flatMap(g=>g.rooms.filter(f=>f.points.length>=3&&g.elevation+g.height>e.base+.05)),i=o.settings.wall_exterior,a=r.map(g=>Wp(g.points,Math.max(i,...(g.wall_thickness??[]).map(f=>f??0))+.01)),s=.35,l=(g,f)=>{if(r.some(w=>U(g(s),w.points)))return!0;let b=g(-Math.min(.3,f/2));return a.some(w=>!U(b,w)&&[.05,.2,s].some(y=>U(g(y),w)))},u=[.15,.5,.85],c=u.map(g=>n.u0+(n.u1-n.u0)*g),d=u.map(g=>n.w*g),p=g=>g==="a"?c.some(f=>l(b=>n.at(f,-b),n.w)):g==="b"?c.some(f=>l(b=>n.at(f,n.w+b),n.w)):g==="u0"?d.some(f=>l(b=>n.at(n.u0-b,f),n.u1-n.u0)):d.some(f=>l(b=>n.at(n.u1+b,f),n.u1-n.u0)),h=e.overhang_sides??null,m=(g,f)=>{let b=h==null?void 0:h[g];return typeof b=="number"?Math.max(0,b):p(f)?0:t};return{a:m(0,"a"),b:m(1,"b"),u0:m(2,"u0"),u1:m(3,"u1")}}var Po=Math.PI/180,Gp=1.13,Kp=1.72,Io=.025,At=.07,Bl=.25;function Wn(o,e){var n;let t=[];for(let r of o.floors){if(e&&r.id!==e)continue;let{walls:i}=un(r.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},r.walls??[]);for(let a of i){if(!a.exterior&&!a.free)continue;let s=a.b[0]-a.a[0],l=a.b[1]-a.a[1],u=Math.hypot(s,l);if(u<.5)continue;let c=l/u,d=-s/u,p=Math.min(r.height,a.height??r.height),h=((n=a.sources.find(f=>f.room_id===a.roomLeft))==null?void 0:n.edge)??null,m={floorId:r.id,room:a.roomLeft,edge:h,free:!!a.free},g=(f,b,w,y)=>t.push({key:f,section:null,side:"top",flat:!1,o:b,eu:w,es:[0,1,0],n:y,lu:u,ls:p,pitch:90,span:()=>[0,u],facing:[y[0],y[2]],wall:m});g(`wall:${r.id}:${a.id}`,[a.a[0]+c*a.right,r.elevation,a.a[1]+d*a.right],[s/u,0,l/u],[c,0,d]),a.free&&g(`wall:${r.id}:${a.id}:back`,[a.b[0]-c*a.left,r.elevation,a.b[1]-d*a.left],[-s/u,0,-l/u],[-c,0,-d])}}return t}var Ul="ground";function Yp(o){let e=[...o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3))].sort((t,n)=>t.elevation-n.elevation);return e.find(t=>t.elevation>-.5)??e[0]??o.floors[0]??null}function Qp(o,e){let t=(e.rotation??0)*Math.PI/180,n=[Math.cos(t),0,Math.sin(t)],r=[-Math.sin(t),0,Math.cos(t)],i=Yp(o),a=n[0]*e.u+r[0]*e.v,s=n[2]*e.u+r[2]*e.v,l=i?i.elevation+(e.base!=null?e.base:Je(i,a,s)):e.base??0;return{key:Ul,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function zt(o,e,t=dt(o)){return e.face===Ul?Qp(o,e):e.face.startsWith("wall:")?Wn(o,e.face.split(":")[1]).find(n=>n.key===e.face)??null:t.find(n=>n.key===e.face)??null}function oi(o){return o.floors.filter(t=>t.rooms.some(n=>n.points.length>=3)).sort((t,n)=>n.elevation-t.elevation)[0]??null}function dt(o){let e=o.settings.roof;if(!e||e.type==="none")return[];if(e.type==="custom")return(e.sections??[]).flatMap(w=>Jp(w,Wl(o,w,w.overhang??e.overhang)));let t=oi(o);if(!t)return[];let n=t.rooms.flatMap(w=>w.points.map(y=>y[0])),r=t.rooms.flatMap(w=>w.points.map(y=>y[1])),i=o.settings.wall_exterior+e.overhang,a=Math.min(...n)-i,s=Math.max(...n)+i,l=Math.min(...r)-i,u=Math.max(...r)+i,c=t.elevation+t.height;if(e.type==="flat")return[Gl("main",null,a,l,s,u,c+Bl)];let d=s-a>=u-l,p=e.ridge==="short"?!d:d,h=(p?u-l:s-a)/2,m=h*Math.tan(e.pitch*Po),g=(w,y,S)=>p?[w,c+S,(l+u)/2+y]:[(a+s)/2+y,c+S,w],[f,b]=p?[a,s]:[l,u];return[-1,1].map(w=>Eo(`main:${w<0?"a":"b"}`,null,w<0?"a":"b",g(f,w*h,0),g(b,w*h,0),g(f,0,m),e.pitch,()=>[0,b-f]))}function Jp(o,e){let t=It(o),n=pn(o),r=(y,S,P)=>{let[I,v]=t.at(y,S);return[I,P,v]},i=Math.max(0,e.a),a=Math.max(0,e.b),s=t.u0-Math.max(0,e.u0),l=t.u1+Math.max(0,e.u1),u=l-s;if(o.shape==="flat"||o.shape==="parapet"){let y=t.at(s,-i),S=t.at(l,t.w+a);return[Gl(o.id,o.id,Math.min(y[0],S[0]),Math.min(y[1],S[1]),Math.max(y[0],S[0]),Math.max(y[1],S[1]),o.eave_a+Bl)]}if(o.shape==="pent")return[Eo(`${o.id}:a`,o.id,"a",r(s,-i,n.y(-i)),r(l,-i,n.y(-i)),r(s,t.w+a,n.y(t.w+a)),o.pitch_a,()=>[0,u])];let c=ti(o),d=c?ni(o,c):null,p=o.shape==="pyramid"||(c==null?void 0:c[0])==="hip",h=o.shape==="pyramid"||(c==null?void 0:c[1])==="hip",m=o.shape==="pyramid"?(t.u1-t.u0)/2:p?d.d0:0,g=o.shape==="pyramid"?(t.u1-t.u0)/2:h?d.d1:0,f=p?t.u0+m-s:0,b=h?l-(t.u1-g):0,w=[];if(n.vr>.3){let y=Math.hypot(n.vr+i,n.rh-n.y(-i));w.push(Eo(`${o.id}:a`,o.id,"a",r(s,-i,n.y(-i)),r(l,-i,n.y(-i)),r(s,n.vr,n.rh),o.pitch_a,S=>[f*(S/y),u-b*(S/y)]))}if(t.w-n.vr>.3){let y=Math.hypot(t.w+a-n.vr,n.rh-n.y(t.w+a));w.push(Eo(`${o.id}:b`,o.id,"b",r(l,t.w+a,n.y(t.w+a)),r(s,t.w+a,n.y(t.w+a)),r(l,n.vr,n.rh),o.pitch_b,S=>[b*(S/y),u-f*(S/y)]))}if(p||h){let y=n.y(-i),S=n.y(t.w+a),P=[];p&&P.push([`${o.id}:c`,"c",r(s,t.w+a,S),r(s,-i,y),r(t.u0+m,n.vr,n.rh)]),h&&P.push([`${o.id}:d`,"d",r(l,-i,y),r(l,t.w+a,S),r(t.u1-g,n.vr,n.rh)]);for(let[I,v,O,K,A]of P){let M=Xp(I,o.id,v,O,K,A);M&&w.push(M)}}return w}function Xp(o,e,t,n,r,i){let a=qn(Tt(r,n));if(a<.3)return null;let s=ct(Tt(r,n)),l=Tt(i,n),u=l[0]*s[0]+l[1]*s[1]+l[2]*s[2],c=[l[0]-s[0]*u,l[1]-s[1]*u,l[2]-s[2]*u],d=qn(c);if(d<.3)return null;let p=ct(c),h=ct(Ql(s,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let m=ct([-p[0],0,-p[2]]),g=Math.atan2(p[1],Math.hypot(p[0],p[2]))/Po;return{key:o,section:e,side:t,flat:!1,o:n,eu:s,es:p,n:h,lu:a,ls:d,pitch:g,span:b=>{let w=Math.min(1,Math.max(0,b/d));return[u*w,a-(a-u)*w]},facing:[m[0],m[2]]}}function Eo(o,e,t,n,r,i,a,s){let l=ct(Tt(r,n)),u=ct(Tt(i,n)),c=ct(Ql(l,u));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let d=ct([-u[0],0,-u[2]]);return{key:o,section:e,side:t,flat:!1,o:n,eu:l,es:u,n:c,lu:qn(Tt(r,n)),ls:qn(Tt(i,n)),pitch:a,span:s,facing:[d[0],d[2]]}}function Gl(o,e,t,n,r,i,a){let s=r-t>=i-n,l=s?r-t:i-n,u=s?i-n:r-t;return{key:`${o}:top`,section:e,side:"top",flat:!0,o:[t,a,n],eu:s?[1,0,0]:[0,0,1],es:s?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:u,pitch:0,span:()=>[0,l],facing:s?[0,1]:[1,0]}}function ri(o){let e=o.module_w||Gp,t=o.module_h||Kp;return o.portrait===!1?[t,e]:[e,t]}function Kl(o){var e;return(e=o.layout)!=null&&e.length?o.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,o.rows)},()=>Math.max(1,o.cols))}function ii(o,e){return o.flat?Math.min(45,Math.max(0,e.tilt??15))*Po:o.wall?Math.min(90,Math.max(0,e.tilt??0))*Po:0}function Ct(o,e){let[t,n]=ri(e),r=Kl(e),i=Math.max(1,...r),s=(r.length-1)*Yl(o,e)+n*Math.cos(ii(o,e));return[i*t+(i-1)*Io,s]}function Yl(o,e){let[,t]=ri(e),n=ii(o,e);return o.wall?t*Math.cos(n)+Io:o.flat?t*Math.cos(n)+Math.max(.3,2*t*Math.sin(n)):t+Io}function Zp(o,e,t=!1){let[n,r]=ri(e),i=[],a=ii(o,e),s=r*Math.cos(a),l=Yl(o,e),u=Kl(e),c=Math.max(1,...u),d=new Set(e.skip??[]),p=!!o.wall&&n>o.lu+1e-6,h=(g,f,b)=>[o.o[0]+o.eu[0]*g+o.es[0]*f+o.n[0]*b,o.o[1]+o.eu[1]*g+o.es[1]*f+o.n[1]*b,o.o[2]+o.eu[2]*g+o.es[2]*f+o.n[2]*b],m=(g,f)=>{if(o.unbounded)return!0;if(f<-1e-6||f>o.ls+1e-6)return!1;let[b,w]=o.span(f);return g>=b-1e-6&&g<=w+1e-6};return u.forEach((g,f)=>{let b=e.align==="right"?c-g:e.align==="center"?(c-g)/2:0;for(let w=0;w<g;w++){let y=`${f}:${w}`,S=d.has(y);if(S&&!t)continue;let P=e.u+(w+b)*(n+Io),I=e.v+f*l,v=P+n,O=I+(o.flat||o.wall?s:r);if(p){if(!(m((P+v)/2,I)&&m((P+v)/2,O)))continue}else if(![[P,I],[v,I],[v,O],[P,O]].every(([C,j])=>m(C,j)))continue;if(o.wall&&a>.001){let C=At+r*Math.sin(a),[j,N]=e.flip?[C,At]:[At,C],J=[h(P,I,j),h(v,I,j),h(v,O,N),h(P,O,N)],F=e.flip?I:O,B=[P+.05,v-.05].map(q=>[h(q,F,0),h(q,F,C)]);i.push({corners:J,posts:B,cell:y,skipped:S});continue}if(!o.flat){i.push({corners:[h(P,I,At),h(v,I,At),h(v,O,At),h(P,O,At)],posts:[],cell:y,skipped:S});continue}let K=.15,A=K+r*Math.sin(a),[M,$]=e.flip?[O,I]:[I,O],E=[h(P,M,K),h(v,M,K),h(v,$,A),h(P,$,A)];i.push({corners:E,posts:[P+.05,v-.05].flatMap(C=>[[h(C,M,0),h(C,M,K)],[h(C,$,0),h(C,$,A)]]),cell:y,skipped:S})}}),i}function Tt(o,e){return[o[0]-e[0],o[1]-e[1],o[2]-e[2]]}function qn(o){return Math.hypot(o[0],o[1],o[2])}function ct(o){let e=qn(o)||1;return[o[0]/e,o[1]/e,o[2]/e]}function Ql(o,e){return[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]]}var eh=.78,th=1.18;function nh(o){return{id:o.id,face:o.face,u:o.u,v:o.v,rows:1,cols:1,portrait:!0,module_w:o.w||eh,module_h:o.h||th}}function oh(o,e){let t=Zp(o,nh(e))[0];if(!t)return null;let n=r=>[r[0]-o.n[0]*.05,r[1]-o.n[1]*.05,r[2]-o.n[2]*.05];return[n(t.corners[0]),n(t.corners[1]),n(t.corners[2]),n(t.corners[3])]}function ai(o,e,t){let n=e?oh(e,t):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,i=(n[0][1]+n[2][1])/2,a=(n[0][2]+n[2][2])/2;for(let s of[...o.floors].sort((l,u)=>u.elevation-l.elevation)){if(s.elevation>i)continue;let l=s.rooms.find(u=>U([r,a],u.points));if(l)return{floor:s,roomId:l.id,corners:n}}return null}function Jl(o,e){var r;let t=((r=o.settings.roof)==null?void 0:r.windows)??[];if(!t.length)return[];let n=new Map(dt(o).map(i=>[i.key,i]));return t.filter(i=>{var a;return((a=ai(o,n.get(i.face),i))==null?void 0:a.roomId)===e})}function Xl(o,e){let[t,n]=Ct(o,e);return[o.o[0]+o.eu[0]*(e.u+t/2)+o.es[0]*(e.v+n/2),o.o[2]+o.eu[2]*(e.u+t/2)+o.es[2]*(e.v+n/2)]}var Ke=Ae`
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
`,ut=Ae`
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
`;var rh=4,ih=3e3,ah=8,sh=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[255,95,210],[120,255,150]],hn=o=>_`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d=${$o(o)} />
  </svg>`,Ao={previous:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z"},si=o=>_`<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,li=class extends Ie{static properties={hass:{attribute:!1},room:{attribute:!1},floor:{attribute:!1},building:{attribute:!1},confirmEntities:{attribute:!1},sheets:{attribute:!1},readOnly:{type:Boolean},_showAll:{state:!0},_tick:{state:!0}};cameraTimer;memo=null;hasCameras=!1;constructor(){super(),this.room=null,this.floor=null,this.building=null,this.sheets=null,this.readOnly=!1,this._showAll=!1,this._tick=0}connectedCallback(){super.connectedCallback(),this.cameraTimer=setInterval(()=>{this.hasCameras&&!document.hidden&&this._tick++},ih)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.cameraTimer)}t(e,t){return T(this.hass,e,t)}call(e,t,n){this.readOnly||this.hass.callService(e,t,n)}get areaName(){var e,t,n;return(e=this.room)!=null&&e.area_id?(n=(t=this.hass.areas)==null?void 0:t[this.room.area_id])==null?void 0:n.name:void 0}name(e){return Q(this.hass,e,this.areaName)}nameButton(e){return _`<button class="fp3d-rp-name" title=${this.t("details")} @click=${()=>!this.readOnly&&xe(this,e)}>${this.name(e)}</button>`}askFor(e){var t;return!((t=this.confirmEntities)!=null&&t.has(e))||confirm(this.t("confirm_switch",{name:this.name(e)}))}toggle(e,t,n){let r=()=>{var i;this.readOnly||(i=this.confirmEntities)!=null&&i.has(e.entity_id)&&!confirm(this.t("confirm_switch",{name:this.name(e.entity_id)}))||n()};return _`<button
      class="fp3d-switch"
      role="switch"
      aria-checked=${t?"true":"false"}
      aria-label=${this.name(e.entity_id)}
      ?disabled=${X(e)}
      @click=${r}
    ></button>`}renderHere(e){if(!this.building||!jn("locate")||!xo(this.building))return x;let t=ko(this.hass,this.building).filter(n=>n.roomId===e.id);return t.length?_`<p class="fp3d-rp-facts fp3d-rp-here">
      ${t.map((n,r)=>_`${r?", ":""}<span style="color:${n.color}">●</span> ${n.name}`)}
    </p>`:x}render(){var S;let e=this.room;if(!e||!this.hass)return x;let t=_e(this.hass,e.area_id),n=this.memo,{shown:r,more:i}=n&&n.entities===this.hass.entities&&n.floor===this.floor&&n.building===this.building&&n.room===e?n:this.memo={entities:this.hass.entities,floor:this.floor,building:this.building,room:e,...this.floor?dl(this.hass,this.floor,e,this.building?Jl(this.building,e.id):[]):{shown:t,more:[]}},a=Vr(this.hass,i).map(P=>P.primary),s=a.length,l=this._showAll?[...r,...a]:r,u=P=>l.filter(I=>P.includes(V(I))).map(I=>this.hass.states[I]).filter(I=>!!I),c=u(["light"]),d=u(["cover"]),p=u(["climate"]),h=u(["media"]),m=u(["switch","fan","lock"]),g=u(["sensor","binary"]),f=u(["camera"]);this.hasCameras=f.length>0;let b=u(["scene","script"]),w=this.facts(p),y=c.filter(P=>P.state==="on");return _`<section class="fp3d-rp ${this.readOnly?"fp3d-rp-ro":""}" aria-label=${e.name}>
      <header class="fp3d-rp-head">
        <div>
          <h2>${e.name}</h2>
          ${w.length?_`<p class="fp3d-rp-facts">${w.join(" \xB7 ")}</p>`:x}
          ${this.renderHere(e)}
          ${this.readOnly?_`<p class="fp3d-rp-facts fp3d-rp-ro-note">⏪ ${this.t("tt_readonly")}</p>`:x}
          ${(S=this.sheets)!=null&&S.length&&!this.readOnly?_`<div class="fp3d-rp-sheets">
                ${this.sheets.map(P=>_`<button class="fp3d-rp-sheet" @click=${()=>this.dispatchEvent(new CustomEvent("sheet-open",{detail:{id:P.id},bubbles:!0,composed:!0}))}>
                    <span aria-hidden="true">${P.icon}</span>${P.title}
                  </button>`)}
              </div>`:x}
        </div>
        <button class="fp3d-rp-close" aria-label=${this.t("close")} @click=${()=>this.fire("close")}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div class="fp3d-rp-body">
        ${e.area_id?l.length?x:_`<p class="fp3d-rp-note">${this.t("panel_empty")}</p>`:_`<p class="fp3d-rp-note">${this.t("panel_no_area")}</p>`}
        ${c.length?this.section("panel_lights",c.map(P=>this.lightRow(P)),_`${y.length<c.length?_`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_on",{entity_id:c.filter(P=>!X(P)).map(P=>P.entity_id)})}>
                    ${this.t("panel_all_on")}
                  </button>`:x}${y.length?_`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("light","turn_off",{entity_id:y.map(P=>P.entity_id)})}>
                    ${this.t("panel_all_off")}
                  </button>`:x}`):x}
        ${d.length?this.section("panel_covers",d.map(P=>this.coverRow(P)),d.length>1?_`<button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","open_cover",{entity_id:d.filter(P=>!X(P)).map(P=>P.entity_id)})}>
                      ${this.t("panel_all_open")}</button
                    ><button class="fp3d-btn fp3d-rp-small" @click=${()=>this.call("cover","close_cover",{entity_id:d.filter(P=>!X(P)).map(P=>P.entity_id)})}>
                      ${this.t("panel_all_close")}
                    </button>`:x):x}
        ${p.length?this.section("panel_climate",p.map(P=>this.climateRow(P))):x}
        ${h.length?this.section("panel_media",h.map(P=>this.mediaRow(P))):x}
        ${m.length?this.section("panel_switches",m.map(P=>this.switchRow(P))):x}
        ${f.length?this.section("panel_cameras",f.map(P=>this.cameraTile(P))):x}
        ${g.length?this.section("panel_sensors",g.map(P=>this.sensorRow(P))):x}
        ${b.length?this.section("panel_scenes",[_`<div class="fp3d-rp-scenes">
                  ${b.map(P=>_`<button
                      class="fp3d-btn"
                      ?disabled=${X(P)}
                      @click=${()=>this.call(V(P.entity_id)==="scene"?"scene":"script","turn_on",{entity_id:P.entity_id})}
                    >
                      ${this.name(P.entity_id)}
                    </button>`)}
                </div>`]):x}
        ${s?_`<button class="fp3d-btn fp3d-rp-small fp3d-rp-more" @click=${()=>this._showAll=!this._showAll}>
              ${this._showAll?this.t("panel_less"):this.t("panel_more",{n:s})}
            </button>`:x}
      </div>
    </section>`}facts(e){var l;let t=[],n=this.room,r=(u,c)=>{var m;let d=rt(this.hass,this.floor,n,u);if(d===null)return null;if(u==="temperature")return`${ie(this.hass,tn(this.hass,d),1)} ${Ve(this.hass)}`;let p=Hr(this.hass,this.floor,n,u)[0],h=((m=this.hass.states[p])==null?void 0:m.attributes.unit_of_measurement)??c;return`${ie(this.hass,d,1)} ${h}`},i=e.find(u=>typeof u.attributes.current_temperature=="number"),a=r("temperature","\xB0C");a?t.push(a):i&&((l=n.climate)==null?void 0:l.temperature)!=="none"&&t.push(`${ie(this.hass,i.attributes.current_temperature,1)} ${Ve(this.hass)}`);let s=r("humidity","%");return s&&t.push(s),t}section(e,t,n=x){return _`<div class="fp3d-rp-sec">
      <div class="fp3d-rp-sec-head"><h3>${this.t(e)}</h3>${n}</div>
      ${t}
    </div>`}lightRow(e){let t=e.attributes,n=e.state==="on",r=t.supported_color_modes??[],i=r.some(p=>p!=="onoff"),a=r.includes("color_temp"),s=r.some(p=>["hs","rgb","rgbw","rgbww","xy"].includes(p)),l=typeof t.brightness=="number"?Math.round(t.brightness/255*100):100,u=t.min_color_temp_kelvin??2200,c=t.max_color_temp_kelvin??6500,d=e.entity_id;return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${hn("light")}</span>
      ${this.nameButton(d)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,n,()=>this.call("light","toggle",{entity_id:d}))}
      ${n&&i?_`<label class="fp3d-rp-slider"
            ><span>${this.t("brightness")}</span>
            <input
              type="range"
              min="1"
              max="100"
              .value=${String(l)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,brightness_pct:Number(p.target.value)})}
          /></label>`:x}
      ${n&&a?_`<label class="fp3d-rp-slider fp3d-rp-ct"
            ><span>${this.t("color_temp")}</span>
            <input
              type="range"
              min=${u}
              max=${c}
              step="50"
              .value=${String(t.color_temp_kelvin??u)}
              @change=${p=>this.call("light","turn_on",{entity_id:d,color_temp_kelvin:Number(p.target.value)})}
          /></label>`:x}
      ${n&&s?_`<div class="fp3d-rp-swatches" role="group" aria-label=${this.t("color")}>
            ${sh.map(p=>_`<button
                class="fp3d-rp-swatch"
                style="--c: rgb(${p.join(",")})"
                aria-label="rgb(${p.join(", ")})"
                @click=${()=>this.call("light","turn_on",{entity_id:d,rgb_color:p})}
              ></button>`)}
          </div>`:x}
    </div>`}coverRow(e){var a;let t=e.attributes,n=t.supported_features??0,r=e.entity_id,i=X(e);return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon">${hn("cover")}</span>
      ${this.nameButton(r)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      <div class="fp3d-rp-buttons">
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.call("cover","open_cover",{entity_id:r})}>${this.t("cover_open")}</button>
        ${n&ah?_`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","stop_cover",{entity_id:r})}>${this.t("cover_stop")}</button>`:x}
        <button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.askFor(r)&&this.call("cover","close_cover",{entity_id:r})}>${this.t("cover_close")}</button>
      </div>
      ${n&rh&&typeof t.current_position=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("position")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_position)}
              @change=${s=>this.call("cover","set_cover_position",{entity_id:r,position:Number(s.target.value)})}
          /></label>`:x}
      ${n&128&&typeof t.current_tilt_position=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("cover_tilt")}</span>
            <input
              type="range"
              min="0"
              max="100"
              ?disabled=${i}
              .value=${String(t.current_tilt_position)}
              @change=${s=>this.call("cover","set_cover_tilt_position",{entity_id:r,tilt_position:Number(s.target.value)})}
          /></label>`:bo((a=this.hass)==null?void 0:a.states[r])?_`<div class="fp3d-rp-buttons">
              ${n&16?_`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","open_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_open")}</button>`:x}
              ${n&32?_`<button class="fp3d-btn fp3d-rp-small" ?disabled=${i} @click=${()=>this.call("cover","close_cover_tilt",{entity_id:r})}>${this.t("cover_tilt_close")}</button>`:x}
            </div>`:x}
    </div>`}climateRow(e){let t=e.attributes,n=e.entity_id,r=typeof t.temperature=="number"?t.temperature:null,i=t.target_temp_step??.5,a=t.min_temp??5,s=t.max_temp??30,l=t.hvac_modes??[],u=c=>this.call("climate","set_temperature",{entity_id:n,temperature:Math.min(s,Math.max(a,Math.round(c/i)*i))});return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${t.hvac_action==="heating"?"fp3d-rp-on":""}">${hn("climate")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${r!==null?_`<div class="fp3d-rp-stepper fp3d-rp-wide">
            <button class="fp3d-btn" aria-label=${this.t("temp_down")} @click=${()=>u(r-i)}>−</button>
            <span><small>${this.t("target_temp")}</small> ${ie(this.hass,r,1)} ${Ve(this.hass)}</span>
            <button class="fp3d-btn" aria-label=${this.t("temp_up")} @click=${()=>u(r+i)}>+</button>
          </div>`:x}
      ${l.length>1?_`<div class="fp3d-rp-chips">
            ${l.map(c=>_`<button
                class="fp3d-chip"
                aria-pressed=${e.state===c}
                @click=${()=>this.call("climate","set_hvac_mode",{entity_id:n,hvac_mode:c})}
              >
                ${this.stateLabel(c)}
              </button>`)}
          </div>`:x}
    </div>`}stateOf(e,t=$e(this.hass,e)){var r,i;if((i=(r=this.room)==null?void 0:r.no_state)!=null&&i.includes(e.entity_id))return"";let n=V(e.entity_id);return e.state==="unknown"&&n!=="sensor"&&n!=="binary"?"":t}stateLabel(e){let t=`state_${e}`,n=this.t(t);return n===t?e:n}mediaRow(e){let t=e.attributes,n=e.entity_id,r=X(e)||e.state==="off",i=[t.media_title,t.media_artist].filter(a=>typeof a=="string"&&a).join(" \xB7 ");return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${e.state==="playing"?"fp3d-rp-on":""}">${hn("media")}</span>
      ${this.nameButton(n)}
      <span class="fp3d-rp-state">${this.stateOf(e,this.stateLabel(e.state))}</span>
      ${i?_`<p class="fp3d-rp-media fp3d-rp-wide">${i}</p>`:x}
      <div class="fp3d-rp-buttons fp3d-rp-wide">
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track",{entity_id:n})}>
          ${si(Ao.previous)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("play_pause")} ?disabled=${X(e)} @click=${()=>this.call("media_player",e.state==="playing"?"media_pause":"media_play",{entity_id:n})}>
          ${si(e.state==="playing"?Ao.pause:Ao.play)}
        </button>
        <button class="fp3d-btn fp3d-rp-small" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track",{entity_id:n})}>
          ${si(Ao.next)}
        </button>
      </div>
      ${typeof t.volume_level=="number"?_`<label class="fp3d-rp-slider"
            ><span>${this.t("volume")}</span>
            <input
              type="range"
              min="0"
              max="100"
              .value=${String(Math.round(t.volume_level*100))}
              @change=${a=>this.call("media_player","volume_set",{entity_id:n,volume_level:Number(a.target.value)/100})}
          /></label>`:x}
    </div>`}switchRow(e){let t=e.entity_id,n=V(t),r=t.slice(0,t.indexOf(".")),i=n==="lock"?e.state==="unlocked"||e.state==="open":e.state==="on",a=()=>n==="lock"?this.call("lock",i?"lock":"unlock",{entity_id:t}):this.call(r,"toggle",{entity_id:t});return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${i?"fp3d-rp-on":""}">${hn(n)}</span>
      ${this.nameButton(t)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
      ${this.toggle(e,i,a)}
    </div>`}cameraTile(e){var i;let t=e.attributes.entity_picture,n=t&&!X(e)?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null,r=(i=this.floor)==null?void 0:i.placements.some(a=>a.entity_id===e.entity_id);return _`<div class="fp3d-rp-camera-wrap">
      <button class="fp3d-rp-camera" title=${this.t("camera_live")} @click=${()=>!this.readOnly&&xe(this,e.entity_id)}>
        ${n?_`<img src=${n} alt=${this.name(e.entity_id)} loading="lazy" />`:_`<span class="fp3d-rp-note">${$e(this.hass,e)}</span>`}
        <span class="fp3d-rp-camera-name">${this.name(e.entity_id)}</span>
      </button>
      ${r?_`<button
            class="fp3d-rp-look"
            title=${this.t("through_camera")}
            @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:e.entity_id},bubbles:!0,composed:!0}))}
          >
            ${W("camera_cockpit")?"":"\u{1F512} "}${this.t("through_camera")}
          </button>`:x}
    </div>`}sensorRow(e){let t=V(e.entity_id),n=t==="binary"&&e.state==="on";return _`<div class="fp3d-rp-row">
      <span class="fp3d-rp-icon ${n?"fp3d-rp-on":""}">${hn(t)}</span>
      ${this.nameButton(e.entity_id)}
      <span class="fp3d-rp-state">${this.stateOf(e)}</span>
    </div>`}fire(e){this.dispatchEvent(new CustomEvent(e,{bubbles:!0,composed:!0}))}static styles=[Ke,ut,Ae`
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
    `]};customElements.get("fp3d-room-panel")||customElements.define("fp3d-room-panel",li);function Zl(o,e,t,n,r=!1){let i=a=>{let s=a==null?void 0:a.value.trim();!a||!s||(a.value="",n([...o,s]))};return _`<div class="fp3d-lines ${r?"fp3d-wide":""}" role="group" aria-label=${t.label}>
    ${t.label}
    ${o.map((a,s)=>_`<div class="fp3d-lines-row">
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
  </div>`}var lh={"clear-night":{},sunny:{},partlycloudy:{cloud:.45},cloudy:{cloud:.9},fog:{fog:1,cloud:.6},hail:{rain:.8,cloud:1},lightning:{lightning:!0,cloud:.9},"lightning-rainy":{rain:.8,lightning:!0,cloud:1},pouring:{rain:1,cloud:1},rainy:{rain:.55,cloud:.85},snowy:{snow:.8,cloud:.9},"snowy-rainy":{rain:.35,snow:.5,cloud:1},windy:{wind:.8,cloud:.2},"windy-variant":{wind:.8,cloud:.7},exceptional:{cloud:.5}};function Rt(o,e){return e&&o.states[e]?e:Object.keys(o.states).filter(t=>t.startsWith("weather.")).sort()[0]??null}function ci(o,e){let t=e?o.states[e]:void 0;if(!t||t.state==="unavailable"||t.state==="unknown")return null;if(t.entity_id.startsWith("binary_sensor."))return t.state==="on"?.6:0;let n=Number(t.state);if(!Number.isFinite(n))return null;let i=String(t.attributes.unit_of_measurement??"").startsWith("in")?n*25.4:n;return i<=.1?0:Math.min(1,.3+i/10)}function ec(o,e,t){let n=e?o.states[e]:void 0;if(!n||n.state==="unavailable"||n.state==="unknown")return null;let r=lh[n.state];if(!r)return null;let i=n.attributes,a=r.cloud??0;typeof i.cloud_coverage=="number"&&(a=Math.min(1,Math.max(0,i.cloud_coverage/100)));let s=r.wind??0;if(typeof i.wind_speed=="number"){let u=i.wind_speed_unit==="m/s"?i.wind_speed*3.6:i.wind_speed_unit==="mph"?i.wind_speed*1.609:i.wind_speed;s=Math.max(s,Math.min(1,u/60))}let l=ci(o,t);return l!==null&&l>0&&(a=Math.max(a,.85)),{entity:n.entity_id,condition:n.state,rain:l??r.rain??0,snow:r.snow??0,fog:r.fog??0,cloud:a,wind:s,lightning:!!r.lightning}}function tc(o,e){let t=new Set(e??ks);return{...o,rain:t.has("rain")?o.rain:0,snow:t.has("snow")?o.snow:0,fog:t.has("fog")?o.fog:0,cloud:t.has("clouds")?o.cloud:0,lightning:t.has("lightning")&&o.lightning,sky:t.has("sky")}}var ch=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),dh=new Set(["power","plug","connectivity","running"]);function To(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return dh.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return ch.has(n)||n.startsWith("ob ")}function pi(o){let e=we(o);if(!e)return!1;if(uh.test([e.id,...e.tags??[],...Object.values(e.name??{})].join(" ")))return!e.light||/plant|pflanz/i.test(e.id);if(e.light)return!1;let t=e.parts.filter(n=>n.color==="plant").length;return t>0&&t+e.parts.filter(n=>n.color==="pot").length>=e.parts.length/2}var uh=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i;var ve=["#3a3f47","#3a3f47"],Ft=["#23262b","#23262b"],Ne=["#5a3b25","#5a3b25"],pe=["#1f4fa8","#1f4fa8"],pt=["#e3b616","#e3b616"],te=["#2f7d3b","#2f7d3b"],nc={default:{rest:ve,bio:Ne,paper:pe,plastic:pt,glass:te,garden:te,recycling:pt,other:ve},DE:{rest:Ft,bio:Ne,paper:pe,plastic:pt,glass:te,garden:te,recycling:pt},AT:{rest:ve,bio:Ne,paper:[ve[0],"#c0262d"],plastic:pt,glass:te,garden:te},CH:{rest:["#d8d8d8","#d8d8d8"],bio:te,paper:pe,plastic:ve,glass:te,garden:te},NL:{rest:ve,bio:te,paper:pe,plastic:["#3a3f47","#e57a1f"],glass:te,garden:te},BE:{rest:ve,bio:te,paper:pe,plastic:pe,glass:te,garden:te},GB:{rest:Ft,bio:["#3a3f47","#5a3b25"],paper:pe,plastic:pe,glass:Ft,garden:Ne,recycling:pe},US:{rest:Ft,bio:te,paper:pe,plastic:pe,glass:pe,garden:te,recycling:pe},CA:{rest:Ft,bio:te,paper:pe,plastic:pe,glass:pe,garden:te,recycling:pe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:ve,bio:Ne,paper:[ve[0],"#e3b616"],plastic:[ve[0],"#e3b616"],recycling:[ve[0],"#e3b616"],glass:te,garden:te},IT:{rest:ve,bio:Ne,paper:pe,plastic:pt,glass:te,garden:te},ES:{rest:ve,bio:Ne,paper:pe,plastic:pt,glass:te,garden:te},PT:{rest:ve,bio:Ne,paper:pe,plastic:pt,glass:te,garden:te},DK:{rest:Ft,bio:te,paper:pe,plastic:ve,glass:te,garden:te},SE:{rest:Ft,bio:Ne,paper:pe,plastic:ve,glass:te,garden:te},NO:{rest:ve,bio:Ne,paper:pe,plastic:ve,glass:te,garden:te},FI:{rest:ve,bio:Ne,paper:pe,plastic:ve,glass:te,garden:te}},ic="DE";function ac(o){ic=o}function sc(o){var n;let e=(n=o==null?void 0:o.config)==null?void 0:n.country;if(e)return e.toUpperCase();let t=((o==null?void 0:o.language)??"").split("-")[1];return t?t.toUpperCase():"DE"}function ph(o,e){var t;return((t=nc[e])==null?void 0:t[o])??nc.default[o]??ve}function lc(o,e=ic){let t=ph(o.bin_kind??"rest",e),n=o.bin_color||t[0];return[n,o.bin_lid||(o.bin_color?n:t[1])]}var hh={rest:["rest","hausm\xFCll","hausmuell","general","garbage","trash","refuse","landfill","residual","black bin","grijs","ordures","m\xE9nag","indifferenzia","secco","residu","restavfall","sekaj\xE4te","sekajate","dagrenovation","hushold","kommunal","zmieszane","sm\u011Bsn","smesn","vegyes","rifiut","basura","resto","lixo","indiferenciad","\u5176\u4ED6\u5783\u573E"],bio:["bio","organic","food","gft","vgf","compost","kompost","organico","organique","umido","matavfall","bioj\xE4te","biojate","madaffald","bioaffald","bioodpad","organik","org\xE1nic","organic","\u53A8\u4F59"],paper:["papier","paper","papp","karton","cardboard","carta","cart\xF3n","carton","pap\xEDr","paperi","papper","pap ","pap\xEDr","papel","makulatur","\u7EB8"],plastic:["gelb","gelbe","verpackung","lvp","plastic","plastik","plastica","pmd","emballage","packaging","envases","embalag","muovi","f\xF6rpackning","forpackning","emballasje","obaly","m\u0171anyag","tworzyw","\u5851\u6599"],glass:["glas","glass","verre","vetro","vidrio","vidro","lasi","sklo","\xFCveg","szk\u0142o","\u73BB\u7483"],garden:["garten","gr\xFCn","gruen","baum","laub","garden","yard","green waste","tuin","snoei","sfalci","potature","d\xE9chets verts","dechets verts","jard\xEDn","jardin","tr\xE4dg\xE5rd","tradgard","have","puutarha","zahrad","z\xF6ld","zielone"],recycling:["recycl","wertstoff","recyclage","riciclo","reciclaje","kierr\xE4tys","\xE5tervinning","genbrug","gjenvinning","\u53EF\u56DE\u6536"]};function ui(o,e,t){let n=` ${o.toLowerCase()} `;return t&&t.trim()?t.toLowerCase().split(/[,;|]/).some(r=>r.trim()&&n.includes(r.trim())):e==="other"?!1:hh[e].some(r=>n.includes(r))}function hi(o){let e=typeof o=="string"?o:(o==null?void 0:o.date)??(o==null?void 0:o.dateTime);if(!e)return null;let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),n=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return Number.isNaN(n.getTime())?null:new Date(n.getFullYear(),n.getMonth(),n.getDate())}function fh(o){return o.map(e=>({day:hi(e.start),summary:String(e.summary??"")})).filter(e=>!!e.day).sort((e,t)=>e.day.getTime()-t.day.getTime())}function cc(o){let e=new Set;for(let t of o.flatMap(n=>n.furniture))t.type==="waste_bin"&&typeof t.bin_source=="string"&&t.bin_source.startsWith("calendar.")&&e.add(t.bin_source);return[...e]}async function fi(o,e,t=new Date,n=42){let r=new Map,i=o.callApi;if(!i)return r;let a=new Date(t.getFullYear(),t.getMonth(),t.getDate()),s=dc(a,n);return await Promise.all(e.map(async l=>{try{let u=await i.call(o,"GET",`calendars/${l}?start=${encodeURIComponent(a.toISOString())}&end=${encodeURIComponent(s.toISOString())}`);r.set(l,fh(Array.isArray(u)?u:[]))}catch{}})),r}var fn=o=>new Date(o.getFullYear(),o.getMonth(),o.getDate()),dc=(o,e)=>new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),zo=(o,e)=>Math.round((fn(e).getTime()-fn(o).getTime())/864e5);function di(o,e,t={}){let n=t.from??14,r=t.until??12,i=e.getHours()+e.getMinutes()/60;return o===1&&i>=n||o===0&&i<r}function uc(o,e,t,n=new Date,r=3){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return[];if(i.startsWith("calendar.")){let s=fn(n);return(t.get(i)??[]).filter(l=>l.day>=s&&ui(l.summary,o.bin_kind??"rest",o.bin_match)).slice(0,r)}let a=mi(o,e,t,n);return a?[{day:a.day,summary:a.summary}]:[]}function mi(o,e,t,n=new Date,r={}){let i=typeof o.bin_source=="string"&&o.bin_source!=="none"?o.bin_source:null;if(!i)return null;let a=fn(n);if(i.startsWith("calendar.")){let c=(t.get(i)??[]).find(p=>p.day>=a&&ui(p.summary,o.bin_kind??"rest",o.bin_match));if(!c)return null;let d=zo(a,c.day);if(d===0&&n.getHours()+n.getMinutes()/60>=(r.until??12)){let p=(t.get(i)??[]).find(h=>h.day>a&&ui(h.summary,o.bin_kind??"rest",o.bin_match));if(p)return{days:zo(a,p.day),day:p.day,summary:p.summary,glow:di(zo(a,p.day),n,r)}}return{days:d,day:c.day,summary:c.summary,glow:di(d,n,r)}}let s=e.states[i];if(!s)return null;let l=bh(s,n);if(l===null||l<0)return null;let u=dc(a,l);return{days:l,day:u,summary:String(s.attributes.friendly_name??""),glow:di(l,n,r)}}function mh(o,e){let t=typeof o=="string"&&o!=="none"?o:null,n=t?e.states[t]:void 0;return!!n&&mc.has(String(n.state).toLowerCase())}function gi(o,e){return mh(o.bin_out,e)}function pc(o){return typeof o.bin_out=="string"&&/^(input_boolean|switch)\./.test(o.bin_out)}function hc(o,e=.3){let t=o.filter(s=>!s.icon),n=t.map((s,l)=>l),r=s=>n[s]===s?s:n[s]=r(n[s]);for(let s=0;s<t.length;s++)for(let l=s+1;l<t.length;l++){let u=t[s],c=t[l];u.floorId===c.floorId&&Math.hypot(u.x-c.x,u.z-c.z)<=u.r+c.r+e&&(n[r(l)]=r(s))}let i=new Map;t.forEach((s,l)=>i.set(r(l),[...i.get(r(l))??[],s]));let a=[];for(let s of i.values())s.sort((l,u)=>l.days-u.days||l.name.localeCompare(u.name)),a.push({floorId:s[0].floorId,x:s.reduce((l,u)=>l+u.x,0)/s.length,z:s.reduce((l,u)=>l+u.z,0)/s.length,y:Math.max(...s.map(l=>l.y)),lines:s});for(let s of o)s.icon&&a.push({floorId:s.floorId,x:s.x,z:s.z,y:s.y,lines:[s]});return a}function fc(o,e={}){let t=typeof e.ahead=="number"&&e.ahead>=0?e.ahead:null,n=o.length?Math.min(...o.map(r=>r.days)):0;return new Set(o.filter(r=>(t===null||r.days<=t)&&(!e.nextOnly||r.days===n)).map(r=>r.id))}function gh(o,e=new Date){let t=/(\d{4})-(\d{1,2})-(\d{1,2})/.exec(o),n=/(?:^|[^\d])(\d{1,2})([./])(\d{1,2})\2(\d{4}|\d{2})?(?![\d])/.exec(o),r,i,a;if(t)[r,i,a]=[Number(t[1]),Number(t[2]),Number(t[3])];else if(n){let l=Number(n[1]),u=Number(n[3]);n[2]==="/"&&u>12&&l<=12&&([l,u]=[u,l]),a=l,i=u;let c=n[4];r=c?c.length===2?2e3+Number(c):Number(c):e.getFullYear(),!c&&new Date(r,i-1,a)<fn(e)&&(r+=1)}else return null;if(i<1||i>12||a<1||a>31)return null;let s=new Date(r,i-1,a);return s.getMonth()===i-1?s:null}function bh(o,e=new Date){let t=o.attributes;if(typeof t.daysTo=="number")return t.daysTo;let n=String(o.state).trim();if(/^-?\d+(\.\d+)?$/.test(n))return Math.round(Number(n));let r=/^\d{4}-\d{2}-\d{2}T/.test(n)?hi(n):gh(n,e);if(r)return zo(e,r);let i=n.toLowerCase();if(/(^|\s)(heute|today|vandaag|aujourd|oggi|hoy|hoje|idag|i dag|tänään|dnes|ma$|dziś|dzis|今天)/.test(i))return 0;if(/(^|\s)(morgen|tomorrow|demain|domani|mañana|amanhã|imorgon|i morgen|huomenna|zítra|holnap|jutro|明天)/.test(i))return 1;let a=/(\d+)\s*(tag|day|dag|jour|giorn|día|dia|päiv|paiv|den|dn|nap|天)/.exec(i)??/\bin\s+(\d+)/.exec(i);if(a)return Number(a[1]);let s=i.match(/\d+/g);return s?Number(s[s.length-1]):null}var mc=new Set(["on","open","true","detected","home"]);function oc(o){let e=o!=null&&o.last_changed?Date.parse(o.last_changed):NaN;return Number.isFinite(e)?e:null}function gc(o,e,t=Date.now()){let n=typeof o.entity=="string"&&o.entity!=="none"?o.entity:null;if(!n)return!1;let r=e.states[n];if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let i=typeof o.mailbox_door=="string"&&o.mailbox_door!=="none"?o.mailbox_door:null;if(!i){let l=Number(r.state);return mc.has(r.state.toLowerCase())||Number.isFinite(l)&&l>0}let a=oc(r),s=oc(e.states[i]);return a===null||t-a>7*864e5?!1:s===null||a>s+1e3}function bc(o){return o.type==="waste_bin"?[o.bin_source??null,o.bin_out??null]:o.type==="mailbox"?[o.entity??null,o.mailbox_door??null]:yh(o)}var _c=o=>{let e=o?Number(o.state):NaN;return Number.isFinite(e)?e:null};function bi(o,e){let t=typeof o.moisture=="string"&&o.moisture!=="none"?o.moisture:null,n=t?e.states[t]:void 0;if(!t||!n)return!1;if(t.startsWith("plant.")){let i=n.attributes,a=String(i.problem??"").toLowerCase();return String(i.moisture_status??"").toLowerCase()==="low"||n.state==="problem"&&a.includes("moisture")&&!a.includes("high")}let r=_c(n);return r!==null&&r<(o.moisture_min??20)}function _i(o,e=Date.now()){if(!o||o.state==="unavailable"||o.state==="unknown")return null;let t=String(o.state).trim(),n=String(o.attributes.unit_of_measurement??"min").toLowerCase();if(/^-?\d+(\.\d+)?$/.test(t)){let a=Number(t),s=n==="s"?a/60:n==="h"?a*60:a;return Math.max(0,Math.round(s))}let r=/^(\d+):(\d{2})(?::(\d{2}))?$/.exec(t);if(r)return Number(r[1])*60+Number(r[2])+Math.round(Number(r[3]??0)/60);let i=Date.parse(t);return Number.isFinite(i)&&/\d{4}-\d{2}-\d{2}T/.test(t)?Math.max(0,Math.round((i-e)/6e4)):null}var _h=new Set(["finished","end","ended","done","complete","completed","program_finished","programfinished","fertig","beendet","ende","termine","finito","klaar","klar","valmis"]);function vi(o){if(!o)return!1;let e=String(o.state).toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g,"").replace(/\s+/g,"_");return _h.has(e)}var vh=new Set(["off","idle","standby","stand_by","ready","inactive","sleep","sleeping","power_off","aus","bereit","unavailable"]);function yi(o,e,t){let n=o?String(o.state).toLowerCase().replace(/\s+/g,"_"):null;if(n!==null&&vh.has(n))return!0;let r=!!o&&/^(switch|input_boolean|light)\./.test(o.entity_id),i=!!o&&!r&&n!==null&&(n==="on"||/run|wash|dry|rinse|spin|clean|läuft|laeuft|betrieb/.test(n));return e!==null&&e<=t&&!i}function vc(o){return o>=60?`${Math.floor(o/60)}:${String(o%60).padStart(2,"0")} h`:`${o} min`}function rc(o,e,t,n){let r=typeof o=="string"&&o!=="none"?o:null,i=r?t.states[r]:void 0;if(!r||!i||i.state==="unavailable"||i.state==="unknown")return!1;if(r.startsWith("binary_sensor.")||r.startsWith("input_boolean."))return i.state==="on";let a=_c(i);if(a!==null)return a<=(e??10);let s=hi(i.state);return!!s&&s.getTime()<=fn(n).getTime()}function yc(o,e,t=new Date){let n=[];return rc(o.service,o.service_min,e,t)&&n.push(o.service),o.service2!==o.service&&rc(o.service2,o.service2_min,e,t)&&n.push(o.service2),n}var ht=o=>[o.door_left,o.door_right].filter(e=>typeof e=="string"&&e!=="none"),wc=o=>!!o&&(o.state==="on"||o.state==="open");function Ro(o,e,t=Date.now()){let n=(o.door_alarm??2)*6e4;for(let r of ht(o)){let i=e.states[r];if(wc(i)&&(i!=null&&i.last_changed)&&t-Date.parse(i.last_changed)>=n)return r}return null}function xc(o,e,t=Date.now()){let n=null;for(let r of o)if(!(r.type!=="fridge"&&r.type!=="fridge_smart"))for(let i of ht(r)){let a=e.states[i];if(!wc(a)||!(a!=null&&a.last_changed))continue;let s=Date.parse(a.last_changed)+(r.door_alarm??2)*6e4-t;s>0&&(n===null||s<n)&&(n=s)}return n}var Co=class{running=new Map;ended=new Map;update(e,t,n,r=Date.now()){let i=this.running.get(e);if(this.running.set(e,t),t)return this.ended.delete(e),!1;i===!0&&this.ended.set(e,r);let a=this.ended.get(e);return a===void 0?!1:r-a>12*36e5||n(a)?(this.ended.delete(e),!1):!0}};function yh(o){return[o.moisture??null,o.remaining??null,o.service??null,o.service2??null]}var Sc="proxmoxve";function wh(o){let e=new Map;for(let t of Object.values(o.entities??{})){if(t.platform!==Sc||!t.device_id||!t.translation_key)continue;let n=t.entity_id.slice(0,t.entity_id.indexOf("."));if(n!=="sensor"&&n!=="binary_sensor")continue;let r=e.get(t.device_id);r||e.set(t.device_id,r=new Map);let i=`${n==="binary_sensor"?"b:":""}${t.translation_key}`;r.has(i)?r.set(`${i}#${t.entity_id}`,t.entity_id):r.set(i,t.entity_id)}return e}function Ho(o){return!!o&&o.state!=="unavailable"&&o.state!=="unknown"}function qe(o,e){let t=e?o.states[e]:void 0;if(!Ho(t))return null;let n=Number(t.state);return Number.isFinite(n)?n:null}function Fo(o,e){var n;let t=(n=o.devices)==null?void 0:n[e];return(t==null?void 0:t.name_by_user)||(t==null?void 0:t.name)||e}function wi(o){let e=/^(?:qemu|lxc|vm)\s+(.*?)\s*\((\d+)\)\s*$/i.exec(o.trim());return e?{name:e[1],vmid:Number(e[2])}:{name:o.trim(),vmid:null}}var kc=new WeakMap;function Ec(o){let e=o==null?void 0:o.entities;if(!e)return!1;let t=kc.get(e);return t===void 0&&kc.set(e,t=Object.values(e).some(n=>n.platform===Sc)),t}function Bn(o){var r,i,a;let e=[],t=[],n=[];for(let[s,l]of wh(o)){let u=c=>l.get(c);if(u("node_status")||u("qemu_on")||u("lxc_on")){let c=u("node_status")??u("b:status"),d=o.states[c],p=c===u("node_status")?(d==null?void 0:d.state)==="online":(d==null?void 0:d.state)==="on";e.push({deviceId:s,name:Fo(o,s).replace(/^node\s+/i,""),online:p,cpu:qe(o,u("cpu_used")),memory:qe(o,u("memory_used_perc")),disk:qe(o,u("disk_used_perc")),load:qe(o,u("load_1m")),vmsOn:qe(o,u("qemu_on")),lxcOn:qe(o,u("lxc_on")),updates:qe(o,u("updates_total")),failedTasks:qe(o,u("failed_tasks_count")),entity:c})}else if(u("cpu_used")&&(u("b:status")||u("status_raw"))){let c=u("b:status")??u("status_raw"),d=o.states[c],p=c===u("b:status")?(d==null?void 0:d.state)==="on":(d==null?void 0:d.state)==="running",h=((i=(r=o.devices)==null?void 0:r[s])==null?void 0:i.model)??"",m=wi(Fo(o,s)),g=/lxc/i.test(h)||/^lxc\b/i.test(Fo(o,s))?"lxc":"vm",f=u("memory_used")?o.states[u("memory_used")]:void 0,b=u("uptime")?o.states[u("uptime")]:void 0,w=u("ip_address")?o.states[u("ip_address")]:void 0;t.push({deviceId:s,name:m.name,vmid:m.vmid,kind:g,running:p,cpu:p?qe(o,u("cpu_used")):null,memory:p?qe(o,u("memory_used_perc")):null,memoryUsed:p&&Ho(f)?`${Number(f.state).toFixed(1)} ${f.attributes.unit_of_measurement??""}`.trim():null,disk:qe(o,u("disk_used_perc")),ip:Ho(w)?w.state:null,since:p&&Ho(b)?b.state:null,problem:((a=o.states[u("b:health")??""])==null?void 0:a.state)==="on",entity:c})}else{let c=[...l].filter(([d])=>d==="b:health"||d.startsWith("b:health#")).map(([,d])=>d);c.length&&[...l.keys()].some(d=>d.startsWith("disk_size"))&&n.push({deviceId:s,name:Fo(o,s),health:c})}}return t.sort((s,l)=>(s.vmid??1e9)-(l.vmid??1e9)||s.name.localeCompare(l.name)),{nodes:e,instances:t,disks:n}}function Pc(o){return[...o.nodes.map(e=>e.entity),...o.instances.map(e=>e.entity),...o.disks.flatMap(e=>e.health)]}var $c=new Set;function Ic(o){let e=[];for(let t of o.instances)t.running?$c.add(t.deviceId):$c.has(t.deviceId)&&e.push(t);return e}var Mc=new Set;function Ac(o,e){var n;let t=[];for(let r of e.disks)for(let i of r.health){let a=(n=o.states[i])==null?void 0:n.state;a==="off"?Mc.add(i):a==="on"&&Mc.has(i)&&t.push({disk:r,entity:i})}return t}function Tc(o,e=Date.now()){let t=Math.max(0,(e-Date.parse(o))/1e3);if(!Number.isFinite(t))return"\u2013";let n=Math.floor(t/86400),r=Math.floor(t%86400/3600),i=Math.floor(t%3600/60);return n?`${n} d ${r} h`:r?`${r} h ${i} min`:`${i} min`}var xh=10*6e4,kh=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),zc={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"};function xi(o,e,t){let n=[];for(let p of e.floors)for(let h of p.rooms){let m=_e(o,h.area_id).filter(g=>{var f;return g.startsWith("binary_sensor.")&&!!zc[String((f=o.states[g])==null?void 0:f.attributes.device_class)]});m.length&&n.push({floorId:p.id,roomId:h.id,sensors:m})}let r=Object.keys(o.states),i=e.settings.rain_warning===!1?null:Rt(o,t??e.settings.weather_entity),a=e.settings.outage_entity&&o.states[e.settings.outage_entity]?e.settings.outage_entity:null,s=W("household")?e.floors.flatMap(p=>p.furniture.filter(h=>(h.type==="fridge"||h.type==="fridge_smart")&&ht(h).length).map(h=>{var m;return{floorId:p.id,roomId:((m=p.rooms.find(g=>g.points.length>=3&&U([h.x,h.z],g.points)))==null?void 0:m.id)??null,furnitureId:h.id,ids:ht(h)}})):[],l=e.settings.rain_warning===!1?null:e.settings.rain_entity,u=l&&o.states[l]?l:null,c=Pc(Bn(o)),d=c.length?{ids:c,...$h(e)}:null;return{rooms:n,alarms:r.filter(p=>p.startsWith("alarm_control_panel.")),weather:i,outage:a,rain:u,fridges:s,proxmox:d}}function $h(o){for(let e of o.floors){let t=e.furniture.find(r=>r.type.endsWith(":server_rack")),n=t?e.rooms.find(r=>r.points.length>=3&&U([t.x,t.z],r.points)):void 0;if(t)return{roomId:(n==null?void 0:n.id)??null,floorId:e.id}}return{roomId:null,floorId:null}}function ki(o){var e;return[...o.rooms.flatMap(t=>t.sensors),...o.alarms,...o.weather?[o.weather]:[],...o.outage?[o.outage]:[],...o.rain?[o.rain]:[],...(o.fridges??[]).flatMap(t=>t.ids),...((e=o.proxmox)==null?void 0:e.ids)??[]]}function Cc(o,e,t,n){var s,l,u;let r=[];for(let c of t.rooms)for(let d of c.sensors){let p=o.states[d];(p==null?void 0:p.state)==="on"&&r.push({kind:zc[String(p.attributes.device_class)],entity:d,roomId:c.roomId,floorId:c.floorId})}let i=t.rain?ci(o,t.rain):null;if(i!==null?i>0:!!t.weather&&kh.has(((s=o.states[t.weather])==null?void 0:s.state)??""))for(let c of e.floors)for(let d of c.openings){if(d.type!=="window"||d.rain_ignore)continue;let p=n.get(d.id);if(!p)continue;let h=Xe(o,p,"window");h.open<.5&&h.tilt<.5&&h.open2<.5&&h.tilt2<.5||r.push({kind:"window_rain",entity:p.contact??p.tilt??p.contact2??d.id,roomId:d.room_id,floorId:c.id})}if(t.outage&&To(o.states[t.outage])&&r.push({kind:"power_outage",entity:t.outage,roomId:null,floorId:null}),e.settings.alert_unavailable){let c=Date.now(),d=new Set;for(let p of e.floors)for(let h of p.openings){let m=n.get(h.id);if(m)for(let g of[m.contact,m.tilt,m.contact2,m.tilt2]){if(!g||d.has(g))continue;let f=o.states[g];if(!f||f.state!=="unavailable"&&f.state!=="unknown")continue;let b=Date.parse(f.last_changed??"");Number.isFinite(b)&&c-b<xh||(d.add(g),r.push({kind:"contact_unavailable",entity:g,roomId:h.room_id,floorId:p.id}))}}}for(let c of t.fridges??[]){let d=(l=e.floors.find(h=>h.id===c.floorId))==null?void 0:l.furniture.find(h=>h.id===c.furnitureId),p=d?Ro(d,o):null;p&&r.push({kind:"fridge_door",entity:p,roomId:c.roomId,floorId:c.floorId})}if(t.proxmox){let{roomId:c,floorId:d}=t.proxmox,p=Bn(o);for(let h of p.nodes)h.online||r.push({kind:"pve_node_down",entity:h.entity,roomId:c,floorId:d});for(let h of Ac(o,p))r.push({kind:"pve_disk",entity:h.entity,roomId:c,floorId:d});for(let h of Ic(p))r.push({kind:"pve_stopped",entity:h.entity,roomId:c,floorId:d})}for(let c of t.alarms){let d=(u=o.states[c])==null?void 0:u.state;d==="triggered"?r.push({kind:"alarm",entity:c,roomId:null,floorId:null}):d==="pending"&&r.push({kind:"alarm_pending",entity:c,roomId:null,floorId:null})}return r}function Rc(o){if(o.color)return o.color;switch(o.kind){case"water":return[.2,.6,1];case"window_rain":return[.35,.72,1];case"alarm_pending":return[1,.62,.2];case"power_outage":return[1,.78,.2];case"fridge_door":return[.45,.85,1];case"pve_stopped":return[1,.62,.2];case"contact_unavailable":return[.72,.62,1];default:return[1,.2,.25]}}function $i(o,e,t){let n=t.roomId?e.floors.flatMap(a=>a.rooms).find(a=>a.id===t.roomId):null;if(t.text!==void 0)return n?`${n.name} \xB7 ${t.text}`:t.text;let r=t.kind.startsWith("pve_")&&o?Mh(o,t):o?Q(o,t.entity):t.entity,i=T(o,`alert_${t.kind}`,{name:r});return n?e.settings.alert_names===!1?`${n.name} \xB7 ${T(o,`alert_short_${t.kind}`)}`:`${n.name} \xB7 ${i}`:i}function Mh(o,e){var i,a,s;let t=(a=(i=o.entities)==null?void 0:i[e.entity])==null?void 0:a.device_id,n=t?(s=o.devices)==null?void 0:s[t]:void 0,r=(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||Q(o,e.entity);if(e.kind==="pve_node_down")return r.replace(/^node\s+/i,"");if(e.kind==="pve_stopped"){let l=wi(r);return l.vmid===null?l.name:`${l.name} (${l.vmid})`}return r}var Le=.03,Lo=o=>o&&o!=="none"?o:null;function gn(o,e=t=>Lo(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let r of n.furniture){let i=e(r);if(r.type==="meter")t.grid??=i,t.gridExport??=Lo(r.export);else if(r.type==="inverter"&&i&&!t.solar.includes(i))t.solar.push(i);else if(r.type==="home_battery"){i&&!t.battery.includes(i)&&t.battery.push(i);let a=Lo(r.charge);a&&!t.charge.includes(a)&&t.charge.push(a),(i||a)&&t.batteries.push({power:i,charge:a});let s=Lo(r.soc);s&&!t.soc.includes(s)&&t.soc.push(s)}}return t}function Si(o){if(Sh(o))return o.energy.meter;for(let e of o.floors){let t=e.furniture.find(n=>n.type==="meter");if(t)return{floor_id:e.id,x:t.x,z:t.z}}return o.energy.meter}function Sh(o){let e=o.energy.meter;return!!o.energy.hub_point&&!!e&&o.floors.some(t=>t.id===e.floor_id)}async function Vc(o,e){let t=new Date;t.setHours(0,0,0,0);try{let n=await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"hour",types:["change"]}),r=new Map;for(let i of e)r.set(i,((n==null?void 0:n[i])??[]).reduce((a,s)=>a+(typeof s.change=="number"?s.change:0),0));return r}catch{return null}}var Nc=.07;function he(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),r=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-r:r}function Eh(o,e){var t;return e.startsWith("sensor.")&&((t=o.states[e])==null?void 0:t.attributes.device_class)==="power"}function Yn(o,e){var l,u;if(Eh(o,e))return e;let t=(u=(l=o.entities)==null?void 0:l[e])==null?void 0:u.device_id;if(!t)return null;let n=Zs(o,t),r=ze(o,e),i=Lr(o,t).filter(c=>c!==e),a=`sensor.${e.slice(e.indexOf(".")+1)}_power`;if(i.includes(a))return a;let s=i.find(c=>r!==null&&ze(o,c)===r);return s||n?s??null:i.find(c=>r===null||ze(o,c)===null||ze(o,c)===r)??null}function qc(o,e){let t=e.energy,n=new Set([t.grid,t.solar,t.battery].filter(Boolean)),r=[],i=new Set;for(let a of e.floors)for(let s of a.placements){let l=Yn(o,s.entity_id);!l||n.has(l)||i.has(l)||(i.add(l),r.push({id:s.entity_id,powerEntity:l,floorId:a.id,x:s.x,z:s.z,power:Math.max(0,he(o.states[l])??0)}))}return r}function Wc(o,e,t,n=gn(e)){let r=e.energy,i=r.grid??n.grid,a=i?he(o.states[i],r.grid_invert):null;if(!r.grid&&n.gridExport){let g=Math.max(0,he(o.states[n.gridExport])??0);a=Math.max(0,a??0)-g}let s=r.solar?he(o.states[r.solar]):null;if(!r.solar&&n.solar.length){let g=n.solar.map(f=>he(o.states[f])).filter(f=>f!==null);s=g.length?g.reduce((f,b)=>f+b,0):null}let l=r.battery?he(o.states[r.battery],r.battery_invert):null;if(!r.battery&&n.batteries.length){let g=n.batteries.map(f=>{if(f.charge){let b=f.power?Math.max(0,he(o.states[f.power])??0):0,w=Math.max(0,he(o.states[f.charge])??0);return b-w}return f.power?he(o.states[f.power],r.battery_invert):null}).filter(f=>f!==null);l=g.length?g.reduce((f,b)=>f+b,0):null}let c=(r.battery_soc?[r.battery_soc]:n.soc).map(g=>{var f;return Number((f=o.states[g])==null?void 0:f.state)}).filter(g=>Number.isFinite(g)),d=c.length?c.reduce((g,f)=>g+f,0)/c.length:NaN,p=r.tariff?o.states[r.tariff]:void 0,h=Number(p==null?void 0:p.state),m=r.consumption?he(o.states[r.consumption]):null;return m!==null?m=Math.max(0,m):a!==null||s!==null||l!==null?m=Math.max(0,(a??0)+Math.max(0,s??0)+(l??0)):t.length&&(m=t.reduce((g,f)=>g+f.power,0)),{grid:a,solar:s===null?null:Math.max(0,s),battery:l,soc:Number.isFinite(d)?d:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:m}}function Ht(o,e){return o.pos.push(e),o.adj.push([]),o.pos.length-1}function ft(o,e,t){let n=Math.hypot(o.pos[e][0]-o.pos[t][0],o.pos[e][1]-o.pos[t][1]);o.adj[e].push({to:t,w:n}),o.adj[t].push({to:e,w:n})}function Ph(o,e){let t=o.length,n=o.map((r,i)=>{let a=o[(i+1)%t],s=a[0]-r[0],l=a[1]-r[1],u=Math.hypot(s,l)||1,c=-l/u,d=s/u;return{p:[r[0]+c*e[i],r[1]+d*e[i]],d:[s/u,l/u],n:[c,d]}});return o.map((r,i)=>{let a=n[(i-1+t)%t],s=n[i],l=a.d[0]*s.d[1]-a.d[1]*s.d[0];if(Math.abs(l)<1e-6)return[r[0]+s.n[0]*e[i],r[1]+s.n[1]*e[i]];let u=((s.p[0]-a.p[0])*s.d[1]-(s.p[1]-a.p[1])*s.d[0])/l;return[a.p[0]+a.d[0]*u,a.p[1]+a.d[1]*u]})}function Ih(o){return je(o.points)>=0?{pts:o.points,flipped:!1}:{pts:[...o.points].reverse(),flipped:!0}}function Ei(o,e,t){let n={pos:[],adj:[],rings:new Map},{walls:r}=un(o.rooms,{exterior:e,interior:t},o.walls??[]);for(let i of o.rooms){if(i.points.length<3)continue;let{pts:a,flipped:s}=Ih(i),l=a.length,u=a.map((p,h)=>{let m=s?(l-2-h+l)%l:h,g=r.some(f=>!f.exterior&&f.sources.some(b=>b.room_id===i.id&&b.edge===m));return Nc+(g?t/2:0)}),c=Ph(a,u).map(p=>Ht(n,p)),d=c.map((p,h)=>[p,c[(h+1)%l]]);for(let[p,h]of d)ft(n,p,h);n.rings.set(i.id,d)}for(let i of r){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let a=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],s=Gn(n,i.roomLeft,a),l=Gn(n,i.roomRight,a);s!==null&&l!==null&&ft(n,s,l)}return Th(n),n}var Ah=1;function Th(o){let e=[...o.rings.entries()];for(;;){let t=new Array(o.pos.length).fill(-1),n=0;for(let a=0;a<o.pos.length;a++){if(t[a]>=0)continue;let s=[a];for(t[a]=n;s.length;)for(let{to:l}of o.adj[s.pop()])t[l]<0&&(s.push(l),t[l]=n);n++}if(n<2)return;let r=null;for(let[,a]of e)for(let s of new Set(a.flat()))for(let[l,u]of e)if(t[u[0][0]]!==t[s])for(let[c,d]of u){let p=o.pos[s],h=o.pos[c],m=o.pos[d],g=m[0]-h[0],f=m[1]-h[1],b=Math.min(1,Math.max(0,((p[0]-h[0])*g+(p[1]-h[1])*f)/(g*g+f*f||1))),w=Math.hypot(p[0]-h[0]-g*b,p[1]-h[1]-f*b);(!r||w<r.d)&&(r={a:s,room:l,d:w})}if(!r||r.d>Ah+2*Nc)return;let i=Gn(o,r.room,o.pos[r.a]);if(i===null)return;ft(o,r.a,i)}}function Gn(o,e,t){let n=o.rings.get(e);if(!n)return null;let r=null;for(let a of n){let s=o.pos[a[0]],l=o.pos[a[1]],u=l[0]-s[0],c=l[1]-s[1],d=u*u+c*c||1,p=Math.min(1,Math.max(0,((t[0]-s[0])*u+(t[1]-s[1])*c)/d)),h=[s[0]+u*p,s[1]+c*p],m=Math.hypot(t[0]-h[0],t[1]-h[1]);(!r||m<r.d)&&(r={seg:a,q:h,d:m})}if(!r)return null;let i=Ht(o,r.q);return ft(o,i,r.seg[0]),ft(o,i,r.seg[1]),i}function Oo(o,e,t){let n=o.pos[t],r=Gn(o,e.id,n);if(r===null)return!1;let i=o.pos[r],a=o.pos[o.adj[r][0].to],s=o.pos[o.adj[r][1].to],l=Math.hypot(s[0]-a[0],s[1]-a[1])||1,u=[(s[0]-a[0])/l,(s[1]-a[1])/l],c=(n[0]-i[0])*u[0]+(n[1]-i[1])*u[1],d=(n[1]-i[1])*u[0]-(n[0]-i[0])*u[1];if(Math.abs(c)<.01||Math.abs(d)<.01)return ft(o,t,r),!0;let p=[i[0]+u[0]*c,i[1]+u[1]*c],h=[i[0]-u[1]*d,i[1]+u[0]*d],m=Ht(o,U(h,e.points)||!U(p,e.points)?h:p);return ft(o,r,m),ft(o,m,t),!0}function Kn(o,e){let t=o.rooms.filter(i=>i.points.length>=3),n=t.find(i=>U(e,i.points));if(n)return n;let r=null;for(let i of t)for(let a of i.points){let s=Math.hypot(e[0]-a[0],e[1]-a[1]);(!r||s<r.d)&&(r={room:i,d:s})}return(r==null?void 0:r.room)??null}function Bc(o,e){let t=o.pos.map(()=>1/0),n=o.pos.map(()=>-1),r=o.pos.map(()=>!1);for(t[e]=0;;){let i=-1;for(let a=0;a<t.length;a++)!r[a]&&t[a]<1/0&&(i<0||t[a]<t[i])&&(i=a);if(i<0)break;r[i]=!0;for(let{to:a,w:s}of o.adj[i])t[i]+s<t[a]-1e-9&&(t[a]=t[i]+s,n[a]=i)}return{dist:t,prev:n}}function Fc(o,e){return o.every(t=>e[t].kind==="battery")?"battery":o.every(t=>e[t].kind==="wallbox")?"wallbox":"consumer"}var Hc=new WeakMap;function zh(o,e){let t=Si(o),n=o.floors.find(c=>c.id===t.floor_id),r=[],{wall_exterior:i,wall_interior:a}=o.settings,s=new Map,l=new Map;e.forEach((c,d)=>l.set(c.floorId,[...l.get(c.floorId)??[],d]));let u=o.floors.filter(c=>l.has(c.id));for(let c of u){if(c.id===n.id)continue;let d=c.elevation>n.elevation,p=l.get(c.id),h=Fc(p,e);r.push({floorId:n.id,a:[t.x,Le,t.z],b:[t.x,d?n.height:-.2,t.z],dist:0,members:p,kind:h});let m=Math.abs(c.elevation-n.elevation);r.push({floorId:c.id,a:[t.x,d?-.2:c.height,t.z],b:[t.x,Le,t.z],dist:m,members:p,kind:h}),s.set(c.id,m+.25)}for(let c of u){let d=Ei(c,i,a),p=Kn(c,[t.x,t.z]);if(!p)continue;let h=Ht(d,[t.x,t.z]);if(!Oo(d,p,h))continue;let m=[];for(let y of l.get(c.id)){let S=e[y],P=Kn(c,[S.x,S.z]);if(!P)continue;let I=Ht(d,[S.x,S.z]);Oo(d,P,I)&&m.push({node:I,member:y})}let{dist:g,prev:f}=Bc(d,h),b=new Map;for(let y of m)if(Number.isFinite(g[y.node]))for(let S=y.node;f[S]>=0;S=f[S]){let P=f[S],I=`${P}>${S}`,v=b.get(I)??{a:P,b:S,members:[]};v.members.push(y.member),b.set(I,v)}let w=s.get(c.id)??0;for(let{a:y,b:S,members:P}of b.values()){let I=d.pos[y],v=d.pos[S],O=Fc(P,e);r.push({floorId:c.id,a:[I[0],Le,I[1]],b:[v[0],Le,v[1]],dist:w+g[y],members:P,kind:O})}}return r}function Uc({building:o,consumers:e,summary:t,battery:n,fieldPower:r,devicePower:i}){var A;let a=Si(o);if(!a)return[];let s=o.floors.find(M=>M.id===a.floor_id);if(!s)return[];let l=M=>i==null?void 0:i.get(M),u=Mi(o,"inverter"),c=Mi(o,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let d=M=>{let $=null;for(let E of u)E.floorId===M.floorId&&(!$||Math.hypot(E.x-M.x,E.z-M.z)<Math.hypot($.x-M.x,$.z-M.z))&&($=E);return $},p=M=>l(M.id)??(c.length===1?t.battery??0:0),h=new Map;for(let M of c){let $=d(M);$&&h.set(M.id,$)}let m=e.map(M=>({floorId:M.floorId,x:M.x,z:M.z,kind:M.wallbox?"wallbox":"consumer",power:M.power}));for(let M of c)!h.has(M.id)&&t.battery!==null&&m.push({floorId:M.floorId,x:M.x,z:M.z,kind:"battery",power:Math.abs(p(M))});let g=`${a.floor_id}:${a.x},${a.z}|${m.map(M=>`${M.floorId}:${M.x},${M.z}:${M.kind}`).join(";")}`,f=Hc.get(o);f||Hc.set(o,f=new Map);let b=f.get(g);b||(b=zh(o,m),f.clear(),f.set(g,b));let w=b.map(M=>({floorId:M.floorId,a:M.a,b:M.b,dist:M.dist,power:M.members.reduce(($,E)=>$+m[E].power,0),kind:M.kind})),y=t.grid!==null?Do(o):null,S=o.settings.roof.cables??[],P=M=>S.find($=>$.id===M),I=(M,$)=>M.map(E=>({...E,key:$}));if(y){let M=t.grid>=0,$=P("grid"),E=$?Un(o,$,[y.end[0],s.elevation+Math.max(Le,y.height),y.end[1]],[a.x,s.elevation+.4+1.1,a.z]):[...y.height>.05?[[y.end[0],y.height,y.end[1]]]:[],[y.end[0],Le,y.end[1]],[y.wall[0],Le,y.wall[1]],[a.x,Le,a.z]],C=$?mn(o,M?E:[...E].reverse(),Math.abs(t.grid),M?"grid":"export",s):Kc(s.id,M?E:[...E].reverse(),Math.abs(t.grid),M?"grid":"export",0);w.push(...I(C,"grid"))}if(t.battery!==null&&t.battery>0)for(let M of w)M.kind==="battery"&&([M.a,M.b]=[M.b,M.a]);let v=o.settings.roof.solar??[],O=o.settings.roof.strings??[],K=new Map;if(r&&v.length){let M=[...dt(o),...Wn(o)];for(let $ of v){let E=r.get($.id)??0,C=$.string?(A=O.find(H=>H.id===$.string))==null?void 0:A.inverter:null,j=C?c.find(H=>H.id===C)??null:null,N=C&&!j?u.find(H=>H.id===C)??null:null;if(j){let H=h.get(j.id);H&&K.set(H.id,(K.get(H.id)??0)+E);let se=j.variant==="wall"?.5+j.h:.9,G=P(`solar:${$.id}`),le=G?Dc(o,$):null,be=o.floors.find(Vt=>Vt.id===j.floorId);G&&le&&be?w.push(...I(mn(o,Un(o,G,le,[j.x,be.elevation+se,j.z]),E,"solar",be),`solar:${$.id}`)):w.push(...I(jc(o,$,E,j,se),`solar:${$.id}`));continue}if(!N&&u.length){let H=zt(o,$,M),se=H?Xl(H,$):[$.u,$.v];N=u.reduce((G,le)=>!G||Math.hypot(le.x-se[0],le.z-se[1])<Math.hypot(G.x-se[0],G.z-se[1])?le:G,null)}N&&K.set(N.id,(K.get(N.id)??0)+E);let J=N??{floorId:a.floor_id,x:a.x,z:a.z},F=N?1.1+N.h:1.5,B=P(`solar:${$.id}`),q=B?Dc(o,$):null,ne=o.floors.find(H=>H.id===J.floorId);B&&q&&ne?w.push(...I(mn(o,Un(o,B,q,[J.x,ne.elevation+F,J.z]),E,"solar",ne),`solar:${$.id}`)):w.push(...I(jc(o,$,E,J,F),`solar:${$.id}`))}}else t.solar!==null&&!u.length&&w.push({floorId:s.id,a:[a.x+.08,s.height+.6,a.z+.08],b:[a.x+.08,Le,a.z+.08],dist:0,power:t.solar,kind:"solar"});for(let M of u){let $=1.1+M.h,E=c.filter(N=>h.get(N.id)===M),C=l(M.id);if(C===void 0){C=K.get(M.id)??(u.length===1?t.solar??0:0);for(let N of E)C+=p(N)}let j=o.floors.find(N=>N.id===M.floorId);if(t.solar!==null||t.battery!==null){let N=P(`inv:${M.id}`),J=Ch(o,M.id)?Do(o):null,F=J?{floorId:J.floorId,x:J.end[0],z:J.end[1],y:Math.max(Le,J.height)}:{floorId:a.floor_id,x:a.x,z:a.z,y:1.5},B=J?o.floors.find(ne=>ne.id===J.floorId)??s:s,q=N&&j?mn(o,Un(o,N,[M.x,j.elevation+$,M.z],[F.x,B.elevation+F.y,F.z]),Math.max(0,C),"inverter",j):Oc(o,M,$,F,F.y,Math.max(0,C),"inverter",0);w.push(...I(q,`inv:${M.id}`))}for(let N of E){let J=p(N);if(t.battery===null&&l(N.id)===void 0)continue;let F=N.variant==="wall"?.5+N.h:.9,B=P(`bat:${N.id}`),q=B&&j?mn(o,Un(o,B,[M.x,j.elevation+$-.1,M.z],[N.x,j.elevation+F,N.z]),Math.abs(J),"battery",j):Oc(o,M,$-.1,N,F,Math.abs(J),"battery",0);w.push(...I(J<=0?q:q.map(ne=>({...ne,a:ne.b,b:ne.a})).reverse(),`bat:${N.id}`))}}return w}function Do(o){var h;let e=Si(o),t=e?o.floors.find(m=>m.id===e.floor_id):void 0;if(!e||!t)return null;let{wall_exterior:n,wall_interior:r}=o.settings,{walls:i}=un(t.rooms,{exterior:n,interior:r},t.walls??[]),a=Mi(o,"grid_point")[0],s=i.filter(m=>m.exterior);if(a){let m=null;for(let b of s){let w=b.b[0]-b.a[0],y=b.b[1]-b.a[1],S=a.x-e.x,P=a.z-e.z,I=S*y-P*w;if(Math.abs(I)<1e-9)continue;let v=((b.a[0]-e.x)*y-(b.a[1]-e.z)*w)/I,O=((b.a[0]-e.x)*P-(b.a[1]-e.z)*S)/I;if(v<=0||v>1||O<0||O>1||m&&v>=m.t)continue;let K=Math.hypot(w,y)||1;m={q:[e.x+S*v,e.z+P*v],out:[y/K,-w/K],t:v}}let g=m?[m.q[0]+m.out[0]*(n/2+.05),m.q[1]+m.out[1]*(n/2+.05)]:[e.x,e.z],f=((h=o.floors.flatMap(b=>b.furniture).find(b=>b.id===a.id))==null?void 0:h.mount_y)??0;return{floorId:t.id,wall:g,end:[a.x,a.z],height:Math.max(0,f)}}let l=null;for(let m of s){let g=m.b[0]-m.a[0],f=m.b[1]-m.a[1],b=g*g+f*f||1,w=Math.min(1,Math.max(0,((e.x-m.a[0])*g+(e.z-m.a[1])*f)/b)),y=[m.a[0]+g*w,m.a[1]+f*w],S=Math.hypot(e.x-y[0],e.z-y[1]),P=Math.sqrt(b);(!l||S<l.d)&&(l={q:y,out:[f/P,-g/P],d:S})}if(!l)return null;let{q:u,out:c}=l,d=0;for(let m of o.floors)for(let g of m.outdoor??[]){let f=g.points.length;for(let b=0;b<f;b++){let w=g.points[b],y=g.points[(b+1)%f],S=y[0]-w[0],P=y[1]-w[1],I=c[0]*P-c[1]*S;if(Math.abs(I)<1e-9)continue;let v=((w[0]-u[0])*P-(w[1]-u[1])*S)/I,O=((w[0]-u[0])*c[1]-(w[1]-u[1])*c[0])/I;v>0&&O>=0&&O<=1&&(d=Math.max(d,Math.min(15,v)))}}let p=d>n+1?d:n+2.5;return{floorId:t.id,wall:[u[0]+c[0]*(n/2+.05),u[1]+c[1]*(n/2+.05)],end:[u[0]+c[0]*p,u[1]+c[1]*p],height:0}}function Ch(o,e){return o.floors.some(t=>t.furniture.some(n=>n.id===e&&n.type==="inverter"&&n.cable_to==="grid"))}function Mi(o,e){let t=[];for(let n of o.floors)for(let r of n.furniture)r.type===e&&t.push({id:r.id,type:r.type,floorId:n.id,x:r.x,z:r.z,h:r.h,variant:r.variant??null});return t}var Lc=new WeakMap;function Gc(o,e,t,n){let r=`${e.id}:${t.join(",")}>${n.join(",")}`,i=Lc.get(o);i||Lc.set(o,i=new Map);let a=i.get(r);if(a)return a;let{wall_exterior:s,wall_interior:l}=o.settings,u=Ei(e,s,l),c=[t,n],d=Kn(e,t),p=Kn(e,n);if(d&&p){let h=Ht(u,t),m=Ht(u,n);if(Oo(u,d,h)&&Oo(u,p,m)){let{dist:g,prev:f}=Bc(u,h);if(Number.isFinite(g[m])){c.length=0;for(let b=m;b>=0;b=f[b])c.unshift(u.pos[b])}}}return i.set(r,c),c}function Oc(o,e,t,n,r,i,a,s){let l=o.floors.find(d=>d.id===e.floorId);if(!l||e.floorId!==n.floorId)return[];let u=Gc(o,l,[e.x,e.z],[n.x,n.z]),c=[[e.x,t,e.z],...u.map(d=>[d[0],Le,d[1]]),[n.x,r,n.z]];return Kc(l.id,c,i,a,s)}function Kc(o,e,t,n,r){let i=[];for(let a=0;a+1<e.length;a++){let s=e[a],l=e[a+1],u=Math.hypot(l[0]-s[0],l[1]-s[1],l[2]-s[2]);u<1e-4||(i.push({floorId:o,a:s,b:l,dist:r,power:t,kind:n}),r+=u)}return i}function Un(o,e,t,n){let r=o.floors.find(a=>a.id===e.floor_id),i=((r==null?void 0:r.elevation)??0)+Math.max(Le,e.height);return[t,...e.points.map(a=>[a[0],i,a[1]]),n]}function Dc(o,e){let t=zt(o,e,[...dt(o),...Wn(o)]);if(!t)return null;let[n,r]=Ct(t,e),i=e.u+n/2,a=t.unbounded?e.v+r/2:e.v;return[t.o[0]+t.eu[0]*i+t.es[0]*a,t.o[1]+t.eu[1]*i+t.es[1]*a,t.o[2]+t.eu[2]*i+t.es[2]*a]}function Rh(o,e,t){let{wall_exterior:n,wall_interior:r}=o.settings,i=Ei(e,n,r),a=Kn(e,t),s=a?Gn(i,a.id,t):null;return s===null?t:i.pos[s]}function mn(o,e,t,n,r){let i=[...o.floors].sort((u,c)=>u.elevation-c.elevation),a=u=>{let c=r;for(let d of i)u>=d.elevation-.01&&(c=d);return c},s=[],l=0;for(let u=0;u+1<e.length;u++){let c=e[u],d=e[u+1];if(Math.hypot(d[0]-c[0],d[1]-c[1],d[2]-c[2])<1e-4)continue;let h=[];if(Math.abs(d[1]-c[1])>.01){let m=Math.min(c[1],d[1]),g=Math.max(c[1],d[1]);for(let f of i)f.elevation>m+.01&&f.elevation<g-.01&&h.push(f.elevation);d[1]<c[1]&&h.reverse()}for(let m of[...h,d[1]]){let g=(m-c[1])/(d[1]-c[1]||1),f=Math.abs(d[1]-c[1])>.01?[c[0]+(d[0]-c[0])*g,m,c[2]+(d[2]-c[2])*g]:d,b=a((c[1]+f[1])/2),w=Math.hypot(f[0]-c[0],f[1]-c[1],f[2]-c[2]);w>1e-4&&s.push({floorId:b.id,a:[c[0],c[1]-b.elevation,c[2]],b:[f[0],f[1]-b.elevation,f[2]],dist:l,power:t,kind:n}),l+=w,c=f}}return s}function jc(o,e,t,n,r){let i=[...dt(o),...Wn(o)],a=zt(o,e,i),s=o.floors.find(f=>f.id===n.floorId);if(!a||!s)return[];let[l,u]=Ct(a,e),c=(f,b)=>[a.o[0]+a.eu[0]*f+a.es[0]*b,a.o[1]+a.eu[1]*f+a.es[1]*b,a.o[2]+a.eu[2]*f+a.es[2]*b],d=e.u+l/2,p=s.elevation+Le,h=[],m;if(a.unbounded){let f=c(d,e.v+u/2);m=[f[0],p,f[2]],h.push(m)}else if(a.wall){let f=c(d,e.v);m=[f[0],p,f[2]],h.push(f,m)}else{let f=c(d,e.v),b=oi(o)??s,w=Math.max(s.elevation+.5,Math.min(f[1]-.25,b.elevation+b.height-.12));m=[f[0],w,f[2]],h.push(f)}let g=Rh(o,s,[m[0],m[2]]);h.push([g[0],m[1],g[1]]),Math.abs(m[1]-p)>.05&&h.push([g[0],p,g[1]]);for(let f of Gc(o,s,g,[n.x,n.z]).slice(1))h.push([f[0],p,f[1]]);return h.push([n.x,s.elevation+r,n.z]),mn(o,h,t,"solar",s)}function Yc(o,e=new Date){let t=new Date(e);t.setHours(0,0,0,0);let n=Math.max(1,Math.floor((e.getTime()-t.getTime())/3e5)+1),r=new Array(n).fill(0),i=-1;for(let s of Object.values(o))for(let l of s){let u=typeof l.start=="number"?l.start:Date.parse(l.start),c=Math.floor((u-t.getTime())/3e5);c<0||c>=n||typeof l.mean!="number"||(r[c]+=Math.max(0,l.mean),i=Math.max(i,c))}return r.length=Math.max(i+1,n-3,1),{kwh:r.reduce((s,l)=>s+l*5/60/1e3,0),peak:Math.max(0,...r),curve:r}}async function Qc(o,e){let t=new Date;t.setHours(0,0,0,0);try{return await o.callWS({type:"recorder/statistics_during_period",start_time:t.toISOString(),statistic_ids:e,period:"5minute",types:["mean"]})??{}}catch{return null}}function Pi(o,e){let n=l=>42-(e>0?l/e*36:0),r=o.map((l,u)=>[u/288*220,n(l)]),i=r.map(([l,u],c)=>`${c?"L":"M"}${l.toFixed(1)} ${u.toFixed(1)}`).join(" "),[a,s]=r[r.length-1];return{line:i,area:`${i} L${a.toFixed(1)} 44 L0 44 Z`,endX:a,endY:s}}function Jc(o){var e;return Math.max(1,o.rows*o.cols-(((e=o.skip)==null?void 0:e.length)??0))}var Fh=400;function Xc(o,e){let t=new Map;for(let n of o.settings.roof.solar??[]){let r=Math.min(1,(e.get(n.id)??0)/(Jc(n)*(n.wp??Fh)));t.set(n.id,r>.003?Math.pow(r,.6):0)}return t}function Zc(o,e,t){let n=new Map,r=e.settings.roof.solar??[],i=e.settings.roof.strings??[],a=Jc,s=[],l=0,u=new Map;for(let p of r){let h=p.entity&&p.entity!=="none"?he(o.states[p.entity]):null;if(h!==null){n.set(p.id,Math.max(0,h)),l+=Math.max(0,h);continue}let m=p.string?i.find(f=>f.id===p.string):void 0,g=m!=null&&m.entity&&m.entity!=="none"?he(o.states[m.entity]):null;if(m&&g!==null){u.set(m.id,[...u.get(m.id)??[],p]);continue}s.push(p)}for(let[p,h]of u){let m=i.find(b=>b.id===p),g=Math.max(0,he(o.states[m.entity])??0),f=h.reduce((b,w)=>b+a(w),0);for(let b of h)n.set(b.id,g*a(b)/f);l+=g}let c=Math.max(0,(t??0)-l),d=s.reduce((p,h)=>p+a(h),0);for(let p of s)n.set(p.id,d?c*a(p)/d:0);return n}var We={solar:[1,.78,.2],battery:[.25,1,.6],wallbox:[.3,.75,1],house:[.6,.72,1],export:[.2,.95,1],import:[1,.3,.65]};function ed(o,e){if(o==="grid")return We.import;if(o==="export")return We.export;if(o==="solar")return We.solar;if(o==="battery")return We.battery;if(o==="wallbox")return We.wallbox;if(o==="inverter")return(e.solar??0)>5?We.solar:We.battery;let t=[[Math.max(0,e.grid??0),We.house],[Math.max(0,(e.solar??0)-Math.max(0,-(e.grid??0))-Math.max(0,-(e.battery??0))),We.solar],[Math.max(0,e.battery??0),We.battery]],[n]=t.reduce((r,i)=>i[0]>r[0]?i:r);return n>0?t.find(r=>r[0]===n)[1]:We.house}var Ii=["neon","blueprint","day"],Qn={neon:{night:[[11,17,32],[7,11,20]],day:[[26,44,78],[12,20,36]]},blueprint:{night:[[26,70,130],[10,38,78]],day:[[34,86,150],[14,48,96]]},day:{night:[[214,224,238],[176,190,210]],day:[[242,246,251],[205,216,230]]}};var jo={temperature:{deviceClass:"temperature",unit:"\xB0C",stops:[[17,[.24,.48,1]],[20.5,[.2,.9,.7]],[23,[1,.75,.25]],[25.5,[1,.32,.2]]]},humidity:{deviceClass:"humidity",unit:"%",stops:[[30,[1,.6,.2]],[45,[.3,.9,.5]],[60,[.2,.8,1]],[75,[.3,.4,1]]]},co2:{deviceClass:"carbon_dioxide",unit:"ppm",stops:[[450,[.3,.9,.5]],[800,[1,.85,.3]],[1200,[1,.5,.2]],[1600,[1,.25,.25]]]}};function td(o,e){let t=jo[o].stops;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++){let[r,i]=t[n],[a,s]=t[n-1];if(e<=r){let l=(e-a)/(r-a);return[s[0]+(i[0]-s[0])*l,s[1]+(i[1]-s[1])*l,s[2]+(i[2]-s[2])*l]}}return t[t.length-1][1]}function nd(o,e,t){let n=new Map;for(let r of e.floors)for(let i of r.rooms){let a=rt(o,r,i,t);a!==null&&n.set(i.id,a)}return n}function od(o){let e=jo[o].stops,t=e[0][0],n=e[e.length-1][0];return`linear-gradient(90deg, ${e.map(([r,i])=>`rgb(${i.map(a=>Math.round(a*255)).join(",")}) ${Math.round((r-t)/(n-t)*100)}%`).join(", ")})`}function Me(o,e){if(!ot(e))return T(o,`furn_${e}`);let t=we(e);return t?ps(t):T(o,"pack_missing_item")}var No=new Set(["on","home","true","present","occupied","detected","parked","yes","1"]);function Vo(o){return o&&o!=="none"?o:null}function bn(o,e){var i,a;if(e.type!=="parking")return null;let t=Vo(e.entity);if(t){let s=o.states[t];if(!s||!No.has(s.state.toLowerCase()))return null}let n=e.vehicle??null,r=Vo(e.type_entity);if(r&&((i=e.types)!=null&&i.length)){let s=(((a=o.states[r])==null?void 0:a.state)??"").trim().toLowerCase();if(s){let l=c=>c.trim().toLowerCase(),u=e.types.find(c=>l(c.state)===s)??e.types.find(c=>l(c.state)&&s.includes(l(c.state)));u&&(n=u.vehicle)}}return n&&we(n)?n:null}function Ai(o,e){let t=new Map;for(let n of e.floors)for(let r of n.furniture){let i=bn(o,r);i&&t.set(r.id,i)}return t}function rd(o){return o.flatMap(e=>e.furniture.filter(t=>t.type==="parking").flatMap(t=>[Vo(t.entity),Vo(t.type_entity)])).filter(e=>!!e)}function id(o,e){let t=we(e);if(!t)return null;let n=o.scale??1;return{id:`${o.id}:vehicle`,type:e,x:o.x,z:o.z,rotation:o.rotation,w:t.size[0]*n,d:t.size[1]*n,h:t.size[2]*n,variant:null,entity:null,power:null}}var Jn=1800*1e3,Hh=new Set(["motion","occupancy","presence"]);function ad(o,e){var t;return e.startsWith("binary_sensor.")&&Hh.has(String((t=o.states[e])==null?void 0:t.attributes.device_class))}function Xn(o,e){let t=[],n=new Set,r=(i,a,s,l)=>{n.has(i)||(n.add(i),t.push({entity:i,floorId:a,x:s,z:l}))};for(let i of e.floors)for(let a of i.placements)if(ad(o,a.entity_id))r(a.entity_id,i.id,a.x,a.z);else if(V(a.entity_id)==="camera")for(let s of Ze(o,a.entity_id))r(s,i.id,a.x,a.z);for(let i of e.floors)for(let a of i.rooms){if(!a.area_id||a.points.length<3)continue;let[s,l]=Te(a.points);for(let u of _e(o,a.area_id))ad(o,u)&&r(u,i.id,s,l)}return t}function sd(o,e,t,n=Jn){let r=t-n,i=[];for(let[a,s]of Object.entries(o)){let l="";for(let u of s){let c=(u.lc??u.lu)*1e3;u.s==="on"&&l!=="on"&&c>=r&&c<=t&&i.push({entity:a,time:c}),l=u.s}}for(let a of e){let s=a.lastChanged??NaN;a.state!=="on"||!(s>=r&&s<=t)||i.some(l=>l.entity===a.entity&&Math.abs(l.time-s)<2e3)||i.push({entity:a.entity,time:s})}return i.sort((a,s)=>a.time-s.time)}function ld(o,e,t,n=Jn){let r=new Map(o.map(a=>[a.entity,a])),i=[];for(let a of e){let s=r.get(a.entity);if(!s)continue;let l=i[i.length-1];l&&l.entity===a.entity&&a.time-l.time<6e4||i.push({...s,time:a.time,age:Math.min(1,Math.max(0,(t-a.time)/n))})}return i.slice(-40)}function qo(o,e){return new Date(e).toLocaleTimeString(o.language,{hour:"2-digit",minute:"2-digit",...kn(o)})}var cd='<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>';var Wo=o=>o.toLocaleLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"");function Bo(o,e){let t=[],n=Pt(o,e.floors),r=e.floors.length>1;for(let i of e.floors){let a=(c,d)=>i.rooms.find(p=>p.points.length>=3&&U([c,d],p.points))??null,s=(c,d)=>{var p;return[(p=a(c,d))==null?void 0:p.name,r?i.name:null].filter(Boolean).join(" \xB7 ")};for(let c of i.rooms){if(c.points.length<3)continue;let[d,p]=Te(c.points);t.push({kind:"room",name:c.name,where:r?i.name:"",floorId:i.id,roomId:c.id,entity:null,icon:null,x:d,z:p,y:0})}let l=new Set,u=(c,d,p,h)=>{var m;l.has(c)||!o.states[c]||(l.add(c),t.push({kind:"device",name:Q(o,c),where:s(d,p),floorId:i.id,roomId:((m=a(d,p))==null?void 0:m.id)??null,entity:c,icon:V(c),x:d,z:p,y:h}))};for(let c of i.placements)u(c.entity_id,c.x,c.z,c.y??nn(V(c.entity_id)??"sensor",i.height,c.mount));for(let c of i.furniture){let d=n.get(c.id),p=(d==null?void 0:d.entity)??(d==null?void 0:d.power);p&&u(p,c.x,c.z,Math.min(i.height-.3,Math.max(.5,c.h)))}}return t}function dd(o,e,t=8){let n=Wo(e).split(/\s+/).filter(Boolean);if(!n.length)return[];let r=o.filter(s=>{let l=Wo(`${s.name} ${s.where} ${s.entity??""}`);return n.every(u=>l.includes(u))}),i=Wo(e.trim()),a=s=>(Wo(s.name).startsWith(i)?0:2)+(s.kind==="room"?0:1);return r.sort((s,l)=>a(s)-a(l)||s.name.localeCompare(l.name)).slice(0,t)}var tt=new Map,Ti=new Map,ud=new Map;async function Lh(o,e){return o.callWS({type:"neonplan3d/modules/code",pack_id:e})}async function Oh(o,e){let t=await Lh(o,e.id);if(t.api!==1)return null;let n=URL.createObjectURL(new Blob([t.code],{type:"text/javascript"}));try{let i=(await import(n)).default;if(!i||i.api!==1||typeof i.id!="string")return null;let a=ud.get(e.id);a&&URL.revokeObjectURL(a),ud.set(e.id,n);let s={id:e.id,release:t.release,module:i};return tt.set(e.id,s),s}catch(r){throw URL.revokeObjectURL(n),r}}async function zi(o,e){let t=new Map(e.filter(n=>n.module&&n.module.api===1&&n.module.approved===!0).map(n=>[n.id,n]));for(let n of[...tt.keys()])t.has(n)||tt.delete(n);await Promise.all([...t.values()].map(n=>{let r=tt.get(n.id);if(r&&r.release===(n.release??1))return Promise.resolve(r);let i=Ti.get(n.id);return i||(i=Oh(o,n).catch(a=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,a),null)).finally(()=>Ti.delete(n.id)),Ti.set(n.id,i)),i}))}async function pd(o,e){for(let t of tt.values())if(t.module.voice)try{let n=await t.module.voice(o,e);if(n)return n}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed on "${o}"`,n)}return null}function hd(o){return Ot(e=>{var t;return(t=e.scene)==null?void 0:t.call(e,o)})}function fd(o){return Ot(e=>{var t;return(t=e.cards)==null?void 0:t.call(e,o)})}function md(o){return Ot(e=>{var t;return(t=e.alerts)==null?void 0:t.call(e,o)})}function gd(o){return Ot(e=>{var t;return(t=e.watched)==null?void 0:t.call(e,o)})}function Ci(o,e){return Ot(t=>{var n;return(n=t.roomSheets)==null?void 0:n.call(t,o,e)})}function Ri(o){return Ot(e=>{var t;return(t=e.menuSheets)==null?void 0:t.call(e,o)})}function Fi(){return[...tt.values()].filter(o=>!!o.module.settings).map(o=>o.id)}function bd(o,e){let t=tt.get(o);if(!(t!=null&&t.module.settings))return[];try{return t.module.settings(e)??[]}catch(n){return console.warn(`NeonPlan 3D: module ${t.id} failed`,n),[]}}function _d(o){return Ot(e=>{var t;return(t=e.pools)==null?void 0:t.call(e,o)})}function Lt(){return tt.size>0}function Ot(o){let e=[];for(let t of tt.values())try{e.push(...o(t.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${t.id} failed`,n)}return e}function yd(o,e,t){let n=o.filter(l=>Number.isFinite(l));if(n.length<2)return"";let r=Math.min(...n),a=Math.max(...n)-r||1,s=l=>Math.round(l*10)/10;return n.map((l,u)=>`${s(u/(n.length-1)*e)},${s(t-1-(l-r)/a*(t-2))}`).join(" ")}function vd(o,e){if(!o.length)return[.25,.7,1];if(o.length===1)return o[0];let t=Math.min(1,Math.max(0,e))*(o.length-1),n=Math.min(o.length-2,Math.floor(t)),r=t-n,[i,a]=[o[n],o[n+1]];return[i[0]+(a[0]-i[0])*r,i[1]+(a[1]-i[1])*r,i[2]+(a[2]-i[2])*r]}function wd(o){let e=[];for(let t of o){let n=t.points;if(n.length<2)continue;let r=[],i=0;for(let l=1;l<n.length;l++){let u=Math.hypot(n[l][0]-n[l-1][0],n[l][1]-n[l-1][1],n[l][2]-n[l-1][2]);r.push(u),i+=u}if(i<.01)continue;let a=t.colors.length===n.length,s=0;for(let l=1;l<n.length;l++){let u=r[l-1];if(u<.005)continue;let c=a?vd([t.colors[l-1],t.colors[l]],.5):vd(t.colors,(s+u/2)/i);e.push({floorId:t.floorId,a:[...n[l-1]],b:[...n[l]],dist:s,power:Math.max(0,t.flow),color:c,...t.width?{width:Math.min(3,Math.max(.5,t.width))}:{},...t.look==="pipe"?{pipe:!0}:{},...t.views==="house"?{house:!0}:t.views==="floor"?{floor:!0}:{}}),s+=u}}return e}function xd(o){return o&&[...o].length<=4&&!/[<>&"'\\\sA-Za-z0-9]/.test(o)?o:null}function kd(o){return o&&o.length<2e3&&/^[MmLlHhVvCcSsQqTtAaZz0-9 .,-]+$/.test(o)?o:null}function Uo(o,e){return(o??[]).filter(t=>!e||!t.minor)}var Dh=[[255,181,71],[255,236,210],[55,224,255],[91,124,255],[190,90,255],[255,95,210],[255,70,70],[120,255,150]],jh=[2200,2700,3200,4e3,5e3,6500],Vh=["hs","rgb","rgbw","rgbww","xy"],Nh=4,qh=16,Wh=32,Bh=128;function Li(o){let e=o.attributes.supported_color_modes??[],t=e.some(n=>Vh.includes(n));return{dim:e.some(n=>n!=="onoff"),color:t,temp:e.includes("color_temp")}}function Oi(o){return((o.attributes.supported_features??0)&Nh)!==0&&typeof o.attributes.current_position=="number"}var Hi=class extends Ie{static properties={hass:{attribute:!1},entity:{attribute:!1},car:{attribute:!1},presets:{attribute:!1},confirmSwitch:{type:Boolean},doorLock:{type:Boolean},pro:{type:Boolean},low:{type:Boolean,reflect:!0},_tick:{state:!0}};tickTimer;connectedCallback(){super.connectedCallback(),this._tick=0,this.tickTimer=setInterval(()=>{V(this.entity)==="camera"&&!document.hidden&&this._tick++},3e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.tickTimer)}renderCamera(e){let t=e.attributes.entity_picture,n=t?t.startsWith("data:")?t:`${t}${t.includes("?")?"&":"?"}fp3d=${this._tick}`:null;return _`<button class="qm-camera" title=${this.t("camera_live")} @click=${()=>this.details()}>
        ${n?_`<img src=${n} alt=${Q(this.hass,this.entity)} />`:_`<span class="qm-note">${$e(this.hass,e)}</span>`}
      </button>
      <button class="qm-details qm-look" @click=${()=>this.dispatchEvent(new CustomEvent("camera-look",{detail:{entity:this.entity},bubbles:!0,composed:!0}))}>
        ${this.pro?"":"\u{1F512} "}${this.t("through_camera")}
      </button>`}t(e,t){return T(this.hass,e,t)}ask(){return!this.confirmSwitch||confirm(this.t("confirm_switch",{name:Q(this.hass,this.entity)}))}call(e,t,n={}){this.hass.callService(e,t,{entity_id:this.entity,...n})}close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}details(){xe(this,this.entity),this.close()}ring(e){let t=e.length;return e.map((n,r)=>{let i=r/t*Math.PI*2-Math.PI/2;return _`<div class="qm-at" style="left:${50+Math.cos(i)*39}%;top:${50+Math.sin(i)*39}%">${n}</div>`})}renderLight(e){let t=Li(e),n=e.state==="on",r=n&&typeof e.attributes.brightness=="number"?Math.round(e.attributes.brightness/2.55):n?100:0,i=t.color?Dh.map(a=>_`<button class="qm-swatch" style="background:rgb(${a.join(",")})" aria-label=${`RGB ${a.join(", ")}`} @click=${()=>this.call("light","turn_on",{rgb_color:a})}></button>`):t.temp?jh.map(a=>_`<button class="qm-swatch" style="background:${Uh(a)}" aria-label=${`${a} K`} @click=${()=>this.call("light","turn_on",{color_temp_kelvin:a})}></button>`):[];return _`<div class="qm-ring ${i.length?"":"qm-ring-small"}">
        ${this.ring(i)}
        <button class="qm-power ${n?"qm-on":""}" aria-pressed=${n} @click=${()=>this.ask()&&this.call("light","toggle")}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
          <b>${n?`${r} %`:this.t("qm_off")}</b>
        </button>
      </div>
      ${t.dim?_`<input
            class="qm-slider"
            type="range"
            min="1"
            max="100"
            .value=${String(Math.max(1,r))}
            aria-label=${this.t("brightness")}
            @change=${a=>this.call("light","turn_on",{brightness_pct:Number(a.target.value)})}
          />`:x}`}renderCover(e){let t=typeof e.attributes.current_position=="number"?e.attributes.current_position:null,n=e.state==="opening"||e.state==="closing",r=Oi(e),i=(u,c,d,p=!1)=>_`<button class="qm-swatch qm-slot ${p?"qm-slot-on":""}" aria-label=${c} @click=${d}>${u}</button>`,a=u=>t!==null&&Math.abs(t-u)<3,s=[i("\u25B2",this.t("cover_open"),()=>this.ask()&&this.call("cover","open_cover"),a(100)),...r?[75,50].map(u=>i(`${u}`,`${u} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:u}),a(u))):[],i("\u25BC",this.t("cover_close"),()=>this.ask()&&this.call("cover","close_cover"),a(0)),...r?[25].map(u=>i(`${u}`,`${u} %`,()=>this.ask()&&this.call("cover","set_cover_position",{position:u}),a(u))):[],i("\u25A0",this.t("cover_stop"),()=>this.call("cover","stop_cover"),n)],l=t===null?e.state==="closed"?100:0:100-t;return _`<div class="qm-ring">
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
      ${r?_`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(t??0)}
            aria-label=${this.t("position")}
            @change=${u=>this.call("cover","set_cover_position",{position:Number(u.target.value)})}
          />`:x}
      ${this.renderTilt(e)}`}renderTilt(e){let t=(e.attributes.supported_features??0)|0,n=typeof e.attributes.current_tilt_position=="number"?e.attributes.current_tilt_position:null;return t&Bh&&n!==null?_`<label class="qm-tilt"
        ><span>${this.t("cover_tilt")} · ${n} %</span>
        <input
          class="qm-slider"
          type="range"
          min="0"
          max="100"
          .value=${String(n)}
          aria-label=${this.t("cover_tilt")}
          @change=${r=>this.call("cover","set_cover_tilt_position",{tilt_position:Number(r.target.value)})}
      /></label>`:bo(e)?_`<div class="qm-tilt-buttons">
        ${t&qh?_`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","open_cover_tilt")}>${this.t("cover_tilt_open")}</button>`:x}
        ${t&Wh?_`<button class="qm-swatch qm-slot" @click=${()=>this.call("cover","close_cover_tilt")}>${this.t("cover_tilt_close")}</button>`:x}
      </div>`:x}renderCar(e){let t=e.entities,n=(d,p,h,m={})=>{this.hass.callService(d,p,{entity_id:h,...m})},r=t.lock,i=!!r&&r.startsWith("lock."),a=d=>/^(switch|input_boolean|fan|light)\./.test(d),s=t.climate,l=!!s&&s.startsWith("climate."),u=t.charging&&a(t.charging)?t.charging:null,c=[e.soc!==null?`${Math.round(e.soc)} %`:null,e.range!==null?`${Math.round(e.range)} ${e.rangeUnit}`:null,e.charging?`\u26A1 ${this.t("car_charging_short")}`:e.plugged?"\u{1F50C}":null].filter(Boolean).join(" \xB7 ");return _`<p class="qm-car-line">${c||$e(this.hass,this.hass.states[this.entity])}</p>
      <div class="qm-car">
        ${i||r&&a(r)?_`<button
              class="qm-swatch qm-slot ${e.locked?"qm-slot-on":""}"
              @click=${()=>e.locked?confirm(this.t("car_unlock_confirm"))&&(i?n("lock","unlock",r):n("homeassistant","turn_off",r)):i?n("lock","lock",r):n("homeassistant","turn_on",r)}
            >
              ${e.locked?`\u{1F513} ${this.t("car_unlock_btn")}`:`\u{1F512} ${this.t("car_lock_btn")}`}
            </button>`:x}
        ${s?_`<button class="qm-swatch qm-slot ${e.climateOn?"qm-slot-on":""}" @click=${()=>n(l?"climate":"homeassistant",e.climateOn?"turn_off":"turn_on",s)}>
              ${e.climateOn?`\u2744 ${this.t("car_climate_off")}`:`\u{1F321} ${this.t("car_climate_on")}`}
            </button>`:x}
        ${u?_`<button class="qm-swatch qm-slot ${e.charging?"qm-slot-on":""}" @click=${()=>n("homeassistant",e.charging?"turn_off":"turn_on",u)}>
              ${e.charging?`\u23F9 ${this.t("car_charge_stop")}`:`\u26A1 ${this.t("car_charge_start")}`}
            </button>`:x}
        ${!i&&!s&&!u?_`<p class="qm-note">${this.t("car_no_controls")}</p>`:x}
      </div>`}renderMedia(e){let t=e.attributes,n=e.state==="playing",r=e.state==="off"||e.state==="standby",i=typeof t.volume_level=="number"?Math.round(t.volume_level*100):null,a=[t.media_title,t.media_artist].filter(l=>typeof l=="string"&&l).join(" \xB7 "),s=typeof t.entity_picture=="string"?t.entity_picture:null;return _`<div class="qm-media">
        <button class="qm-swatch qm-slot" aria-label=${this.t("previous")} ?disabled=${r} @click=${()=>this.call("media_player","media_previous_track")}>⏮</button>
        <button class="qm-power qm-media-main ${n?"qm-on":""}" aria-label=${this.t("play_pause")} style=${s?`background-image:url(${s})`:""} @click=${()=>this.call("media_player",r?"turn_on":n?"media_pause":"media_play")}>
          <span>${r?"\u23FB":n?"\u23F8":"\u25B6"}</span>
        </button>
        <button class="qm-swatch qm-slot" aria-label=${this.t("next")} ?disabled=${r} @click=${()=>this.call("media_player","media_next_track")}>⏭</button>
      </div>
      ${a?_`<p class="qm-media-title">${a}</p>`:x}
      ${i!==null?_`<input
            class="qm-slider"
            type="range"
            min="0"
            max="100"
            .value=${String(i)}
            aria-label=${this.t("volume")}
            @change=${l=>this.call("media_player","volume_set",{volume_level:Number(l.target.value)/100})}
          />`:x}
      ${this.renderPlay(e)}`}renderPlay(e){if(!W("sound"))return x;let t=Array.isArray(e.attributes.source_list)?e.attributes.source_list.slice(0,10):[],n=this.presets??[];if(!t.length&&!n.length)return x;let r=e.attributes.source;return _`<p class="qm-play-head">${this.t("media_play_head")}</p>
      <div class="qm-play">
        ${n.map(i=>_`<button class="qm-chip" @click=${()=>this.call("media_player","play_media",{media_content_type:i.type,media_content_id:i.content})}>
            ▶ ${i.label}
          </button>`)}
        ${t.map(i=>_`<button class="qm-chip ${i===r?"qm-chip-on":""}" @click=${()=>this.call("media_player","select_source",{source:i})}>${i}</button>`)}
      </div>`}renderDoorLock(e){let t=e.state==="locked"||e.state==="locking"||e.state==="jammed",n=Q(this.hass,this.entity),r=()=>{confirm(this.t(t?"door_unlock_confirm":"door_lock_confirm",{name:n}))&&(this.call("lock",t?"unlock":"lock"),this.close())};return _`<p class="qm-car-line">${$e(this.hass,e)}</p>
      <div class="qm-car">
        <button class="qm-swatch qm-slot ${t?"qm-slot-on":""}" @click=${r}>${t?`\u{1F513} ${this.t("door_unlock_btn")}`:`\u{1F512} ${this.t("door_lock_btn")}`}</button>
      </div>`}renderToggle(e){let t=e.state==="on"||e.state==="unlocked"||e.state==="playing",n=e.entity_id.split(".")[0];return _`<div class="qm-ring qm-ring-small">
      <button
        class="qm-power ${t?"qm-on":""}"
        aria-pressed=${t}
        @click=${()=>this.ask()&&(n==="lock"?this.call("lock",t?"lock":"unlock"):this.call("homeassistant","toggle"))}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 3v8M6.3 6.8a8 8 0 1 0 11.4 0" /></svg>
        <b>${$e(this.hass,e)}</b>
      </button>
    </div>`}render(){var r;let e=(r=this.hass)==null?void 0:r.states[this.entity];if(!e)return x;let t=V(this.entity),n=this.car?this.renderCar(this.car):X(e)?_`<p class="qm-note">${$e(this.hass,e)}</p>`:this.doorLock&&t==="lock"?this.renderDoorLock(e):t==="light"?this.renderLight(e):t==="cover"?this.renderCover(e):t==="camera"?this.renderCamera(e):t==="media"&&W("sound")?this.renderMedia(e):this.renderToggle(e);return _`<div class="qm" role="dialog" aria-label=${Q(this.hass,this.entity)}>
      <div class="qm-title">${Q(this.hass,this.entity)}</div>
      ${n}
      <button class="qm-details" @click=${()=>this.details()}>${this.t("details")} …</button>
    </div>`}static styles=[Ke,Ae`
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
    `]};function Uh(o){let e=Math.min(1,Math.max(0,(o-2200)/4300)),t=(n,r)=>Math.round(n+(r-n)*e);return`rgb(${t(255,200)},${t(170,225)},${t(80,255)})`}customElements.get("fp3d-quick-menu")||customElements.define("fp3d-quick-menu",Hi);var Gh=new URL(import.meta.url),Kh=new URL("./neonplan3d-3d.js?v=629a8fccdf57",Gh).href,$d;function Zn(){return $d??=import(Kh),$d}var Di;function ji(){let o=new URL("./neonplan3d-fun.js?v=0964254a34c8",new URL(import.meta.url)).href;return Di??=import(o).catch(e=>{throw Di=void 0,e}),Di}function Md(o,e){let t=o.points,n=t[e],r=t[(e+1)%t.length],i=Math.hypot(r[0]-n[0],r[1]-n[1])||1,a=[(r[0]-n[0])/i,(r[1]-n[1])/i],s=[-a[1],a[0]],l=[(n[0]+r[0])/2,(n[1]+r[1])/2];U([l[0]+s[0]*.02,l[1]+s[1]*.02],t)||(s=[-s[0],-s[1]]);let u=[s[1],-s[0]];return{a:n,b:r,u:a,n:s,length:i,rightward:a[0]*u[0]+a[1]*u[1]>0}}function Go(o,e){let t=e[0]-o.a[0],n=e[1]-o.a[1];return{s:t*o.u[0]+n*o.u[1],d:t*o.n[0]+n*o.n[1]}}function Vi(o,e,t){return[o.a[0]+o.u[0]*e+o.n[0]*t,o.a[1]+o.u[1]*e+o.n[1]*t]}var Yh=.45;function Sd(o,e){let t=[];for(let n of e.openings){if(n.wall)continue;let r=e.rooms.find(s=>s.id===n.room_id);if(!r||n.edge>=r.points.length)continue;let{s:i,d:a}=Go(o,So(r,n.edge,n.offset));Math.abs(a)>.4||i<-.05||i>o.length+.05||t.push(Qh(n,i))}return t}function Qh(o,e){return{kind:"opening",id:o.id,s0:e-o.width/2,s1:e+o.width/2,y0:o.sill,y1:o.sill+o.height,d:0}}function Ed(o,e,t,n=Yh){let r=[];for(let i of e.furniture){if(i.type==="stairwell"||i.type==="parking")continue;let a=U([i.x,i.z],t.points),s=St(i).map(h=>Go(o,h)),l=Math.min(...s.map(h=>h.d)),u=Math.min(...s.map(h=>h.s)),c=Math.max(...s.map(h=>h.s)),d=Go(o,[i.x,i.z]);if(!a&&d.d<=0||d.d<=0||l>n||l<-.3||c<.02||u>o.length-.02)continue;let p=fe(e,i);r.push({kind:"furniture",id:i.id,s0:u,s1:c,y0:p,y1:p+i.h,d:l})}return r}var Pd=.3;function eo(o,e){let t=o.from?e(o.from):null,n=o.to?e(o.to):null,r=o.height??Pd,i=[];if(o.heights)t&&i.push([t.x,t.y,t.z]),o.points.forEach(([a,s],l)=>{var u;return i.push([a,((u=o.heights)==null?void 0:u[l])??r,s])}),n&&i.push([n.x,n.y,n.z]);else{if(!t||!n)return[];i.push([t.x,t.y,t.z],[t.x,r,t.z]);for(let[a,s]of o.points)i.push([a,r,s]);i.push([n.x,r,n.z],[n.x,n.y,n.z])}return i.filter((a,s)=>s===0||Ni(a,i[s-1])>.001)}function Ni(o,e){return Math.hypot(e[0]-o[0],e[1]-o[1],e[2]-o[2])}function Ko(o){let e=0;for(let t=1;t<o.length;t++)e+=Ni(o[t-1],o[t]);return e}function Yo(o,e){if(o.length<2)return null;let t=Math.max(0,e);for(let n=1;n<o.length;n++){let[r,i]=[o[n-1],o[n]],a=Ni(r,i);if(!(a<1e-6)){if(t<=a||n===o.length-1){let s=Math.min(1,t/a),l=[(i[0]-r[0])/a,(i[1]-r[1])/a,(i[2]-r[2])/a];return{p:[r[0]+(i[0]-r[0])*s,r[1]+(i[1]-r[1])*s,r[2]+(i[2]-r[2])*s],dir:l,seg:n-1}}t-=a}}return null}function Dt(o){let[e="",t="",n]=o.split(":");return{kind:e,id:t,port:n||null}}function Jh(o,e){let{w:t,d:n,h:r}=o;if(o.type==="pool_pump")return e==="suction"?[t*.5,r*.55,0]:e==="pressure"?[t*.05,r*.9,0]:null;if(o.type==="pool_filter"){let i=Math.min(t,n)/2;if(o.variant==="side6"){let l=i+.08;return e==="pump"?[l,r*.6,0]:e==="return"?[l+.06,r*.48,0]:e==="waste"?[l,r*.36,0]:null}let a=r*.89,s=i*.45+.04;return e==="pump"?[-s,a,0]:e==="return"?[s,a,0]:e==="waste"?[0,a,-s]:null}if(o.type==="pool_heat_pump"){let i=o.variant==="left"||o.variant==="back"?o.variant:"right";if(e!=="in"&&e!=="out")return null;let a=e==="in"?r*.25:r*.45;return i==="back"?[e==="in"?-t*.15:t*.15,a,-n/2-.04]:[(i==="left"?-1:1)*(t/2+.04),a,-n*.2]}return null}function Id(o,e){let t=Jh(o,e);if(!t)return null;let n=o.rotation*Math.PI/180,[r,i]=[Math.cos(n),Math.sin(n)];return{x:o.x+t[0]*r-t[2]*i,y:t[1],z:o.z+t[0]*i+t[2]*r}}function to(o,e){if(e==="outside"){if(o.kind==="floor")return{x:o.x,y:o.y-.3,z:o.z};if(o.kind==="wall"){let t=(o.depth??.3)+.05;return{x:o.x-(o.nx??0)*t,y:o.y,z:o.z-(o.nz??0)*t}}}return{x:o.x,y:o.y,z:o.z}}function Td(o){return o.flatMap(e=>(e.outdoor??[]).filter(t=>t.type==="pool"&&t.pool&&t.points.length>=3).map(t=>({floor:e,area:t})))}var qi=[.25,.7,1],Xh=900;function zd(o,e,t,n=r=>r){let r=[];for(let i of o){let a=n(eo(i,t),i);if(a.length<2)continue;let s=e.get(i.id),l=(s==null?void 0:s.color)??qi,u=0;for(let c=1;c<a.length;c++){let[d,p]=[a[c-1],a[c]],h=Math.hypot(p[0]-d[0],p[1]-d[1],p[2]-d[2]);h<.01||(r.push({floorId:i.floor_id,a:d,b:p,dist:u,power:s!=null&&s.active?Xh:0,color:l}),u+=h)}}return r}function Qo(o,e,t){let n=t.pool??{},r=Qt(e,t);return i=>{var u,c;let{kind:a,id:s,port:l}=Dt(i);if(a==="port"){let d=(u=n.ports)==null?void 0:u.find(h=>h.id===s);if(!d)return null;let p=d.kind==="skimmer"?r-(d.depth??0):d.kind==="drain"?Fn(e,t)+.03:d.kind==="inlet"?r-(d.depth??.3):.02;return{x:d.x,z:d.z,y:p}}if(a==="joint"){let d=(c=n.joints)==null?void 0:c.find(p=>p.id===s);return d?to(d,l):null}if(a!=="dev")return null;for(let d of o.floors){let p=d.furniture.find(f=>f.id===s);if(!p||!As.includes(p.type))continue;let h=l?Id(p,l):null,m=d.elevation-e.elevation;if(h)return{...h,y:h.y+fe(d,p)+m};let g=p.type==="pool_filter"?p.h*.88:p.type==="pool_dosing"?.95:p.type==="pool_valve"?Ts:p.type==="pool_pump"?.2:.3;return{x:p.x,z:p.z,y:g+fe(d,p)+m}}return null}}function Wi(o,e,t,n){let r=c=>{var h,m,g;let{kind:d,id:p}=Dt(c);return d==="port"?(g=(m=(h=t.pool)==null?void 0:h.ports)==null?void 0:m.find(f=>f.id===p))==null?void 0:g.kind:void 0},i=c=>r(c)==="drain",a=c=>r(c)==="inlet"||r(c)==="skimmer",s=c=>{if(c.length<2)return c;let d=c[0],p=Bi(t,[d[0],d[2]]);if(!p)return c;let h=[d[0]+p[0]*.35,d[1],d[2]+p[1]*.35],m=1;for(;m<c.length&&Math.hypot(c[m][0]-d[0],c[m][2]-d[2])<.01;)m++;let g=c.slice(m).map(b=>[...b]);for(let b=0;b<g.length-1;b++){let w=(g[b][0]-d[0])*p[0]+(g[b][2]-d[2])*p[1];if(w>=.349999)break;g[b][0]+=p[0]*(.35-w),g[b][2]+=p[1]*(.35-w)}let f=g[0]??c[c.length-1];return[d,h,[h[0],f[1],h[2]],...g]},l=c=>{if(c.length<2)return c;let d=c[0];if(!U([d[0],d[2]],t.points))return c;let p=Fn(n,t)-.15,h=c.findIndex((b,w)=>w>0&&Math.hypot(b[0]-d[0],b[2]-d[2])>.01);if(h<0)return c;let m=c[h],g=[m[0],m[2]];for(let b=0;b<t.points.length;b++){let w=t.points[b],y=t.points[(b+1)%t.points.length],S=Zh([d[0],d[2]],[m[0],m[2]],w,y);S&&(g=S)}let f=Math.hypot(g[0]-d[0],g[1]-d[2])>1e-6?[g[0]+(g[0]-d[0])*.02,g[1]+(g[1]-d[2])*.02]:g;return[d,[d[0],p,d[2]],[f[0],p,f[1]],[f[0],m[1],f[1]],...c.slice(h)]},u=o;return e.from&&i(e.from)&&(u=l(u)),e.to&&i(e.to)&&(u=l([...u].reverse()).reverse()),e.from&&a(e.from)&&(u=s(u)),e.to&&a(e.to)&&(u=s([...u].reverse()).reverse()),u}function Bi(o,e){let t=o.points;if(t.length<3)return null;let n=0;for(let i=0;i<t.length;i++){let a=t[i],s=t[(i+1)%t.length];n+=a[0]*s[1]-s[0]*a[1]}let r=null;for(let i=0;i<t.length;i++){let a=t[i],s=t[(i+1)%t.length],l=s[0]-a[0],u=s[1]-a[1],c=Math.hypot(l,u);if(c<1e-6)continue;let d=Math.max(0,Math.min(1,((e[0]-a[0])*l+(e[1]-a[1])*u)/(c*c))),p=Math.hypot(a[0]+l*d-e[0],a[1]+u*d-e[1]),h=n>0?[u/c+0,-l/c+0]:[-u/c+0,l/c+0];(!r||p<r.d)&&(r={d:p,n:h})}return r?r.n:null}function Zh(o,e,t,n){let r=[e[0]-o[0],e[1]-o[1]],i=[n[0]-t[0],n[1]-t[1]],a=r[0]*i[1]-r[1]*i[0];if(Math.abs(a)<1e-9)return null;let s=((t[0]-o[0])*i[1]-(t[1]-o[1])*i[0])/a,l=((t[0]-o[0])*r[1]-(t[1]-o[1])*r[0])/a;return s>=0&&s<=1&&l>=0&&l<=1?[o[0]+r[0]*s,o[1]+r[1]*s]:null}var Ee=o=>Math.round(o*1e3)/1e3;var Cd=-.3;function Rd(o,e,t,n,r){var f;let i=[],a=[],s=b=>e(b),l=[],u=o.from,c=[];for(let b of o.vias){if(b.kind!=="hole"){c.push(b.kind);continue}let w=t.find(v=>v.id===b.joint),y=s(u);if(!w||!y)continue;let S=s(`joint:${w.id}:inside`),P=s(`joint:${w.id}:outside`),I=b.dir?b.dir==="out":Math.hypot(y.x-S.x,y.z-S.z)<=Math.hypot(y.x-P.x,y.z-P.z);l.push({a:u,b:`joint:${w.id}:${I?"inside":"outside"}`,fits:c}),c=[],u=`joint:${w.id}:${I?"outside":"inside"}`}let d=o.to;if(d.length>1){let b=s(u),w=d.map(s).filter(y=>!!y);if(b&&w.length===d.length){let y=w.reduce((K,A)=>K+A.x,0)/w.length,S=w.reduce((K,A)=>K+A.z,0)/w.length,P=Math.hypot(b.x-y,b.z-S)||1,I=Math.min(1,P/2)/P,v=b.y<0||w.some(K=>K.y<0),O={id:r("joint"),kind:"tee",x:Ee(y+(b.x-y)*I),z:Ee(S+(b.z-S)*I),y:v?Cd:Ee(b.y)};a.push(O),l.push({a:u,b:`joint:${O.id}:in`,fits:c}),c=[],d.forEach((K,A)=>l.push({a:`joint:${O.id}:out${A+1}`,b:K,fits:[]})),d=[]}}d.length&&l.push({a:u,b:d[0],fits:c});let p=b=>{let{kind:w,id:y,port:S}=Dt(b),P=w==="joint"?a.find(I=>I.id===y):void 0;return P?to(P,S):s(b)},h=b=>n(b)==="source",m=b=>n(b)==="sink",g=o.to.some(h)&&!h(o.from)||m(o.from)&&!o.to.some(m);for(let b of l){let w=p(b.a),y=p(b.b);if(!w||!y)continue;let S=ef(w,y,Ad(b.a,t),Ad(b.b,t)),P={id:r("pipe"),from:b.a,to:b.b,floor_id:o.floorId,points:S.map(v=>[v[0],v[2]]),heights:S.map(v=>v[1])},I=Ko(eo(P,p));P.fittings=b.fits.map((v,O)=>({id:r("fit"),kind:v,at:Ee(Math.min(I/2,.4+O*.25)),...v==="valve"?{open:!0}:{}})),g&&(P={...P,from:P.to,to:P.from,points:[...P.points].reverse(),heights:[...P.heights??[]].reverse(),fittings:(f=P.fittings)==null?void 0:f.map(v=>({...v,at:Ee(Math.max(0,I-v.at))}))}),i.push(P)}return{pipes:i,joints:a}}function Ad(o,e){let{kind:t,id:n,port:r}=Dt(o),i=t==="joint"&&r==="outside"?e.find(a=>a.id===n):void 0;return(i==null?void 0:i.kind)==="wall"?[-(i.nx??0),-(i.nz??0)]:null}function ef(o,e,t=null,n=null){let r=o.y<0||e.y<0?Cd:Ee(Math.max(o.y,e.y)),i=[],[a,s]=[o.x,o.z];t&&([a,s]=[Ee(a+t[0]*.5),Ee(s+t[1]*.5)],i.push([a,Ee(o.y),s]));let[l,u]=[e.x,e.z],c=[];return n&&([l,u]=[Ee(l+n[0]*.5),Ee(u+n[1]*.5)],c.push([l,Ee(e.y),u])),i.push([Ee(a),r,Ee(s)]),Math.abs(l-a)>.01&&i.push([Ee(l),r,Ee(s)]),Math.abs(u-s)>.01&&i.push([Ee(l),r,Ee(u)]),i.push(...c),i.filter((d,p)=>p===0||Math.hypot(d[0]-i[p-1][0],d[1]-i[p-1][1],d[2]-i[p-1][2])>.001)}var tf=2e3;function Fd(o){return Math.max(0,tf-o)}var Hd="neonplan3d.gpu_lost",Jo="1.23.0";function Ld(){try{return typeof localStorage>"u"?null:localStorage}catch{return null}}function Ui(o,e=Ld()){try{return!!e&&e.getItem(Hd)===o}catch{return!1}}function Od(o,e,t,n,r=Ld()){if(n||t-e>2e4||t<e||!r)return!1;try{return r.setItem(Hd,o),!0}catch{return!1}}function Dd(o,e,t,n=12,r=180){let i=Math.max(r,e),a=Math.max(r*.5625,t),s={cols:1,tile:Math.min(i,a*16/9)};for(let l=1;l<=Math.max(1,o);l++){let u=Math.ceil(o/l),c=(i-n*(l-1))/l,d=(a-n*(u-1))/u*16/9,p=Math.min(c,d);(p>s.tile||l===1)&&(s={cols:l,tile:p})}if(s.tile<r){let l=Math.max(1,Math.floor((i+n)/(r+n)));return{cols:Math.min(l,Math.max(1,o)),tile:r}}return{cols:s.cols,tile:Math.floor(s.tile)}}function Gi(o,e,t){var O,K,A,M;let n=[...t.openings.values()].flatMap($=>[$.cover,$.contact,$.tilt,$.contact2??null,$.tilt2??null,$.position??null,$.tiltAngle??null,$.lock??null]),r=Tl(e),i=r.filter($=>V($)==="camera").flatMap($=>Ze(o,$)),a=r.map($=>Yn(o,$)),s=e.energy,l=e.presence.flatMap($=>[$.person,$.sensor]),u=e.floors.flatMap($=>$.rooms.flatMap(E=>_e(o,E.area_id).filter(C=>V(C)==="light"))),c=[...t.furniture.values()].flatMap($=>[$.entity,$.power]),d=e.floors.flatMap($=>$.furniture.flatMap(E=>[E.state_entity??null,E.state_entity2??null,E.color_entity??null])),p=e.floors.flatMap($=>$.furniture.flatMap(E=>[E.door_left??null,E.door_right??null,E.soc??null,E.status??null,E.charge??null,E.export??null])),h=(((O=e.settings.roof)==null?void 0:O.windows)??[]).flatMap($=>[$.cover,$.contact,$.tilt]).filter($=>!!$&&$!=="none"),m=[...(((K=e.settings.roof)==null?void 0:K.solar)??[]).map($=>$.entity),...(((A=e.settings.roof)==null?void 0:A.strings)??[]).map($=>$.entity)].filter($=>!!$&&$!=="none"),g=e.floors.flatMap($=>$.furniture.filter(E=>E.type==="robot_vacuum").map(E=>{var C;return Dn(o,((C=t.furniture.get(E.id))==null?void 0:C.entity)??null,E.room_sensor)})),f=e.floors.flatMap($=>$.furniture.flatMap(E=>(E.pictures??[]).flatMap(C=>[C.entity,...C.image.startsWith("camera:")?[C.image.slice(7)]:[]]))),b=t.heat?e.floors.flatMap($=>$.rooms.flatMap(E=>_e(o,E.area_id).filter(C=>C.startsWith("sensor.")))):[],w=[...rd(e.floors),...W("auto_pro")?ul(o,e.floors):[]],y=Xn(o,e).map($=>$.entity),S=W("household")?[...e.floors.flatMap($=>$.furniture.flatMap(bc)),((M=e.settings.household)==null?void 0:M.notes)??null].filter($=>!!$&&$!=="none"):[],P=e.floors.flatMap($=>$.furniture.flatMap(E=>{var C,j;return E.type==="access_point"?Object.values(Cn(o,{entity:((C=t.furniture.get(E.id))==null?void 0:C.entity)??E.entity})):E.type==="water_heater"?Object.values(Rn(o,{entity:((j=t.furniture.get(E.id))==null?void 0:j.entity)??E.entity})):E.type==="lamp_ceiling_fan"?[E.fan_entity??null]:E.type==="wall_switch"?[...Zt(E),mo(E)]:E.type==="wall_socket"?en(E).flatMap(N=>[N.entity,N.power]):[]})),I=Rt(o,t.weatherEntityId??e.settings.weather_entity),v=[...P,...r,...i,...n,...a,...c,...d,...p,...g,...h,...m,...f,s.grid,s.solar,s.battery,s.battery_soc,s.consumption,s.tariff,...l,...u,...b,...t.warnings,...w,...y,...S,I,"sun.sun"];return[...new Set(v.filter($=>!!$))]}var jd=/^#[0-9a-f]{3,8}$/i;function nf(o){let e=(o??"").trim();return!e||/["'()\\\s]/.test(e)?null:/^(https?:\/\/|\/)/i.test(e)||/^data:image\//i.test(e)?e:null}function Vd(o){if(!o||!o.kind)return null;let e=o.color&&jd.test(o.color)?o.color:"#0b1426",t=o.color2&&jd.test(o.color2)?o.color2:"#03060c";if(o.kind==="color")return e;if(o.kind==="gradient")return`linear-gradient(180deg, ${e}, ${t})`;let n=nf(o.image);if(!n)return null;let r=Math.min(.9,Math.max(0,o.dim??.45));return`linear-gradient(rgba(4, 8, 16, ${r}), rgba(4, 8, 16, ${r})), url("${n}") center / cover no-repeat`}var Ki;function mt(){let o=new URL("./neonplan3d-voice.js?v=291d6eac1d92",new URL(import.meta.url)).href;return Ki??=import(o).catch(e=>{throw Ki=void 0,e}),Ki}function Xo(){try{return/[?&#]fp3d_mic=1\b/.test(location.href)&&sessionStorage.setItem("neonplan3d.mic","1"),sessionStorage.getItem("neonplan3d.mic")==="1"}catch{return!1}}function Yi(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function Qi(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function jt(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function Nd(){try{return localStorage.getItem("neonplan3d.voiceArea")}catch{return null}}function Zo(){try{sessionStorage.removeItem("neonplan3d.mic")}catch{}}var of=.25,qd=o=>Math.round(o*1e3)/1e3;function Ji(o,e,t,n,r){let i=o.rooms.find(a=>a.points.length>=3&&U([e,t],a.points));return!i||U([n,r],i.points)?[n,r]:U([n,t],i.points)?[n,t]:U([e,r],i.points)?[e,r]:[e,t]}function Wd(o,e,t,n){let r=Math.hypot(n[0]-t[0],n[1]-t[1]);if(r<.01)return!1;let i=[(n[0]-t[0])/r,(n[1]-t[1])/r],a=l=>Math.abs(-(l[0]-t[0])*i[1]+(l[1]-t[1])*i[0]),s=l=>(l[0]-t[0])*i[0]+(l[1]-t[1])*i[1];return o.rooms.some(l=>l.id!==e&&l.points.some((u,c)=>{let d=l.points[(c+1)%l.points.length];return a(u)>.02||a(d)>.02?!1:Math.min(r,Math.max(s(u),s(d)))-Math.max(0,Math.min(s(u),s(d)))>.05}))}function Bd(o,e,t,n=of){let r=o.rooms.find(u=>u.points.length>=3&&U([e.x,e.z],u.points));if(!r)return null;let i=r.points,a=je(i)>=0?1:-1,s=t/2,l=null;for(let u=0;u<i.length;u++){let c=i[u],d=i[(u+1)%i.length],p=Math.hypot(d[0]-c[0],d[1]-c[1]);if(p<.3)continue;let h=[(d[0]-c[0])/p,(d[1]-c[1])/p],m=[-h[1]*a,h[0]*a],g=(e.x-c[0])*h[0]+(e.z-c[1])*h[1];if(g<0||g>p)continue;let b=o.rooms.some(O=>O.id!==r.id&&O.points.some((K,A)=>{let M=O.points[(A+1)%O.points.length],$=Math.abs((K[0]-c[0])*m[0]+(K[1]-c[1])*m[1]),E=Math.abs((M[0]-c[0])*m[0]+(M[1]-c[1])*m[1]);return $<.02&&E<.02}))?s:0,w=(e.x-c[0])*m[0]+(e.z-c[1])*m[1]-b,y=Math.atan2(-m[0],m[1])*180/Math.PI,S=O=>Math.abs((e.rotation-O+540)%360-180),I=[{rotation:y,extent:e.d/2},{rotation:y+90,extent:e.w/2},{rotation:y-90,extent:e.w/2}].reduce((O,K)=>S(K.rotation)<S(O.rotation)?K:O);if(S(I.rotation)>50)continue;let v=w-I.extent;Math.abs(v)>n||l&&Math.abs(v)>=Math.abs(l.gap)||(l={x:qd(e.x-m[0]*v),z:qd(e.z-m[1]*v),rotation:(Math.round(I.rotation)%360+360)%360,gap:v})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function rf(o){return{a:o.a,b:o.b,u:o.u,n:o.n,length:o.length,rightward:!0}}var Xi={walls(o,e,t){let n=o.floors.find(i=>i.id===e),r=n==null?void 0:n.rooms.find(i=>i.id===t);return!n||!r||r.points.length<3?[]:r.points.map((i,a)=>{let s=Md(r,a),l=Wd(n,r.id,s.a,s.b),u=[...Ed(s,n,r).map(c=>[c.s0,c.s1]),...Sd(s,n).filter(c=>c.y0<.05).map(c=>[c.s0,c.s1])];return{roomId:r.id,edge:a,a:s.a,b:s.b,u:s.u,n:s.n,length:s.length,shared:l,thickness:l?o.settings.wall_interior:o.settings.wall_exterior,taken:u}})},onWall(o,e,t){return Vi(rf(o),e,t)},freeSpot(o,e,t=.1){let n=i=>i>=t&&i+e<=o.length-t&&!o.taken.some(([a,s])=>i<s+.05&&i+e>a-.05),r=o.length/2-e/2;for(let i=0;i<=o.length;i+=.05){if(n(r-i))return Math.round((r-i)*100)/100;if(n(r+i))return Math.round((r+i)*100)/100}return null},nodeAt(o,e,t){let n=o.floors.find(s=>s.id===e),r=n==null?void 0:n.outdoor.find(s=>s.id===t);if(!n||!r)return()=>null;let i=Qo(o,n,r),a=r.pool??{};return s=>{let{kind:l,id:u,port:c}=Dt(s),d=l==="joint"?(a.joints??[]).find(h=>h.id===u):void 0;if(d)return to(d,c);let p=l==="port"?(a.ports??[]).find(h=>h.id===u):void 0;return p?i(s)??{x:p.x,y:.02,z:p.z}:i(s)}},connect(o,e,t,n,r,i){var l;let a=o.floors.find(u=>u.id===e),s=a==null?void 0:a.outdoor.find(u=>u.id===t);return!a||!s?{pipes:[],joints:[]}:Rd({...n,floorId:e},Xi.nodeAt(o,e,t),((l=s.pool)==null?void 0:l.joints)??[],r,i)}};var er=30,af=10,sf=600,Ud={alert:3,doorbell:2,trigger:1.5,motion:1,appliance:0},lf={alert:0,doorbell:2e4,trigger:3e4,motion:12e4,appliance:6e4},cf=2e4,df=3*6e4,Zi=new Set(["unavailable","unknown",""]),uf="neonplan3d.director";function ea(){try{return localStorage.getItem(uf)==="1"}catch{return!1}}function Kd(o){return!!o&&!!(o.doorbell||o.motion&&o.motion!=="off"||o.appliances||o.alerts||(o.triggers??[]).some(e=>e.entity))}var pf=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Yd(o,e){return e?o.states[e]?[e]:[]:Object.keys(o.states).filter(t=>{let n=o.states[t];if(t.startsWith("event."))return n.attributes.device_class==="doorbell";if(!t.startsWith("binary_sensor."))return!1;let r=`${t} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return pf.test(r)}).sort()}function ta(o,e,t=Date.now()){if(!o||!e||Zi.has(e.state)||o.state===e.state)return!1;if(e.entity_id.startsWith("event.")){let n=Date.parse(e.state);return Number.isFinite(n)&&t-n<3e4}return o.state==="off"&&e.state==="on"}var Gd=new Set(["on","open","opening","unlocked","unlocking","detected","home","playing","triggered"]);function Qd(o,e,t=Date.now()){return!o||!e||Zi.has(e.state)||o.state===e.state?!1:e.entity_id.startsWith("event.")?ta(o,e,t):Zi.has(o.state)?!1:Gd.has(e.state)&&!Gd.has(o.state)}function Jd(o,e,t,n){var c;if(n)return n;let r=o.entities??{},i=(c=r[e])==null?void 0:c.device_id,a=t.filter(d=>d.startsWith("camera.")),s=i?a.find(d=>{var p;return((p=r[d])==null?void 0:p.device_id)===i}):void 0;if(s)return s;let l=d=>ze(o,d),u=l(e);return u&&a.find(d=>l(d)===u)||null}var no=class{seen=new Map;runs=new Map;shown=new Map;touchedAt=-1/0;current=null;edge(e,t,n){let r=this.seen.has(e),i=this.seen.get(e);return this.seen.set(e,t),r&&i!==t&&n(i,t)}stopped(e,t,n){let r=this.runs.get(e);return t?(r!=null&&r.run||this.runs.set(e,{run:!0,since:n,ran:!0}),!1):!r||r.run?(this.runs.set(e,{run:!1,since:n,ran:!!(r!=null&&r.run)}),!1):r.ran&&n-r.since>=df?(r.ran=!1,!0):!1}resting(){for(let e of this.runs.values())if(!e.run&&e.ran)return!0;return!1}touch(e){this.touchedAt=e,this.current&&(this.current.touched=!0)}offer(e,t,n=er){let r=this.shown.get(e.key);if(r!==void 0&&t-r<lf[e.kind]||!(e.kind==="alert"||e.kind==="doorbell")&&t-this.touchedAt<cf)return!1;let a=this.current;if(a&&t<a.until&&Ud[a.shot.kind]>Ud[e.kind])return!1;let s=Math.min(sf,Math.max(af,n))*(e.kind==="doorbell"?2:1)*1e3;return this.current={shot:e,since:t,until:t+s,touched:!1},this.shown.set(e.key,t),!0}due(e){let t=this.current;return!t||e<t.until?null:(this.current=null,{shot:t.shot,back:!t.touched})}clear(){this.current=null}};var Se=Math.PI/180,tr=-.833;function hf(o,e,t){let n=(o/864e5+24405875e-1-2451545)/36525,r=((280.46646+n*(36000.76983+n*3032e-7))%360+360)%360,i=357.52911+n*(35999.05029-1537e-7*n),a=.016708634-n*(42037e-9+1267e-10*n),s=Math.sin(i*Se)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*i*Se)*(.019993-101e-6*n)+Math.sin(3*i*Se)*289e-6,l=125.04-1934.136*n,u=r+s-.00569-.00478*Math.sin(l*Se),d=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(l*Se),p=Math.asin(Math.sin(d*Se)*Math.sin(u*Se)),h=Math.tan(d/2*Se)**2,m=4*(h*Math.sin(2*r*Se)-2*a*Math.sin(i*Se)+4*a*h*Math.sin(i*Se)*Math.cos(2*r*Se)-.5*h*h*Math.sin(4*r*Se)-1.25*a*a*Math.sin(2*i*Se))/Se,g=new Date(o),w=(((g.getUTCHours()*60+g.getUTCMinutes()+g.getUTCSeconds()/60+m+4*t)%1440+1440)%1440/4-180)*Se,y=e*Se,S=Math.sin(y)*Math.sin(p)+Math.cos(y)*Math.cos(p)*Math.cos(w),P=90-Math.acos(Math.min(1,Math.max(-1,S)))/Se;return{azimuth:(Math.atan2(Math.sin(w),Math.cos(w)*Math.sin(y)-Math.tan(p)*Math.cos(y))/Se+180+360)%360,elevation:P}}function Xd(o,e,t){let n=new Date(o);n.setHours(0,0,0,0);let r=n.getTime(),i=10*6e4,a=d=>({...hf(d,e,t),t:d}),s=[],l=null,u=null,c=a(r);for(let d=r+i;d<=r+24*36e5;d+=i){let p=a(d),h=p.elevation>tr,m=c.elevation>tr;if(h!==m){let g=c.t,f=p.t;for(let w=0;w<12;w++){let y=(g+f)/2;a(y).elevation>tr===m?g=y:f=y}let b=a(Math.round((g+f)/2));h?(l??=b,s.push(b)):(u=b,s.push(b))}h&&s.push(p),c=p}return!l&&s.length&&a(r).elevation>tr&&s.unshift(a(r)),{points:s,rise:l,set:u}}function Zd(o,e){var t;return String(e&&((t=o.states[e])==null?void 0:t.attributes.unit_of_measurement)||"m\xB3")}function mf(o,e){return _`<svg class="fp3d-holo-spark" viewBox="0 0 120 22" preserveAspectRatio="none" aria-hidden="true">${Mt`<polyline points=${yd(o,120,22)} style=${`stroke:${e}`} />`}</svg>`}function gf(o,e,t){return(t==="m\xB3"||t==="m3")&&e<10?`${ie(o,e*1e3,0)} l`:`${ie(o,e,e<10?2:0)} ${t}`}var bf=12e4,_f=600*1e3,eu={person:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-3 7h6a2 2 0 0 1 2 2v6h-2v6H9v-6H7v-6a2 2 0 0 1 2-2"/></svg>',car:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 2 2v5h-2v2h-3v-2H8v2H5v-2H3v-5a2 2 0 0 1 2-2m1.1 0h11.8l-1-3H7.1zM6.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/></svg>',pet:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M8.3 3.5a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2m7.4 0a2 1.6 0 1 1 0 3.2 2 1.6 0 0 1 0-3.2M4.5 8a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3m15 0a1.8 1.5 0 1 1 0 3 1.8 1.5 0 0 1 0-3M12 10c2.5 0 4.6 1.9 5.3 4.3.6 2 .2 3.7-1.3 4.5-1.4.8-2.6-.2-4-.2s-2.6 1-4 .2c-1.5-.8-1.9-2.5-1.3-4.5C7.4 11.9 9.5 10 12 10"/></svg>',motion:'<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13.5 5.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9.8 8.9 7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6z"/></svg>'},vf='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>',yf='<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/><path d="M3 3l18 18"/></svg>';function tu(o){return o.fan_entity&&o.fan_entity!=="none"?o.fan_entity:null}function wf(o){if(!o||!Ge(o))return 0;let e=o.attributes.percentage;return typeof e=="number"?Math.max(.15,e/100):1}var xf=[.35,.95,1],kf=[1,.3,.2];function na(o,e,t){var n;return((n=o.rooms.find(r=>r.points.length>=3&&U([e,t],r.points)))==null?void 0:n.id)??null}function $f(o,e){var n;let t=e.action==="more_info"?e.target:(n=e.data)==null?void 0:n.entity_id;return typeof t=="string"&&Ge(o.states[t])}function Mf(o){try{return localStorage.getItem(o)==="1"}catch{return!1}}function Sf(o,e){try{localStorage.setItem(o,e?"1":"0")}catch{}}function nu(o,e){let t=a=>a&&a!=="none"?a:null,n=Xe(o,{cover:t(e.cover),contact:t(e.contact),tilt:t(e.tilt)},"window"),r=t(e.window)?o.states[t(e.window)]:void 0,i=n.open;if(r&&!X(r)){let a=r.attributes.current_position;i=typeof a=="number"?Math.min(1,Math.max(0,a/100)):r.state==="open"||r.state==="opening"?1:0}return{open:i,tilt:n.tilt,cover:n.cover??0}}var ou=new Set;async function Ef(){let o=window.AudioContext??window.webkitAudioContext;if(!o)return;let e=new o;try{if(await Promise.race([e.resume(),new Promise(n=>setTimeout(n,300))]),e.state!=="running")return;let t=e.currentTime;for(let[n,r]of[[784,0],[523,.45]]){let i=e.createOscillator(),a=e.createGain();i.frequency.value=n,a.gain.setValueAtTime(1e-4,t+r),a.gain.exponentialRampToValueAtTime(.3,t+r+.02),a.gain.exponentialRampToValueAtTime(1e-4,t+r+.9),i.connect(a).connect(e.destination),i.start(t+r),i.stop(t+r+.95)}await new Promise(n=>setTimeout(n,1300))}finally{e.close().catch(()=>{})}}var oa=class extends Ie{static properties={hass:{attribute:!1},building:{attribute:!1},floorId:{attribute:!1},roomId:{attribute:!1},wallMode:{attribute:!1},explode:{type:Boolean},keepRoof:{attribute:!1},plain:{attribute:!1},markerMode:{attribute:!1},pinSize:{attribute:!1},markerNames:{attribute:!1},heatMode:{attribute:!1},theme:{attribute:!1},clock:{attribute:!1},_clockTick:{state:!0},accent:{attribute:!1},packs:{attribute:!1},showEnergy:{attribute:!1},flows:{attribute:!1},holograms:{attribute:!1},furnish:{type:Boolean},surfaceGrab:{attribute:!1},furnishTypes:{attribute:!1},trail:{type:Boolean},cameraWall:{attribute:!1},proxmoxWall:{attribute:!1},_pveFilter:{state:!0},weather:{type:Boolean},weatherEntityId:{attribute:!1},_flash:{state:!0},_proHint:{state:!0},selectedFurniture:{attribute:!1},selectedSet:{attribute:!1},selectedDevice:{attribute:!1},_sky:{state:!0},quality:{attribute:!1},showStats:{type:Boolean},_stats:{state:!0},_error:{state:!0},_energy:{state:!0},_holos:{state:!0},_rows:{state:!0},_meters:{state:!0},_holoOpen:{state:!0},_wallboxW:{state:!0},_plants:{state:!0},_holoOn:{state:!0},_flows:{state:!0},_holoShow:{state:!0},_swipe:{state:!0},_menu:{state:!0},_through:{state:!0},_blend:{state:!0},_wallBig:{state:!0},_find:{state:!0},_walk:{state:!0},walkable:{attribute:!1},pivotMark:{attribute:!1},petsOn:{attribute:!1},ghostOn:{attribute:!1},_central:{state:!0},_sheet:{state:!0},_settingsOpen:{state:!0},_note:{state:!0},_thumbsCompact:{state:!0},_armed:{state:!0},central:{attribute:!1},buttons:{attribute:!1},_thumbs:{state:!0},floorThumbs:{attribute:!1},clean:{attribute:!1},cleanButton:{attribute:!1},roomLabels:{attribute:!1},floorStack:{attribute:!1},panelOpen:{attribute:!1},controlsRight:{attribute:!1},keepView:{attribute:!1},angleLock:{attribute:!1},alerts:{attribute:!1},alertJump:{attribute:!1},director:{attribute:!1},hideRoof:{attribute:!1},voice:{attribute:!1},screen:{attribute:!1},voiceArea:{attribute:!1},_voice:{state:!0},_announce:{state:!0},scenes:{attribute:!1},dimmed:{attribute:!1},autoOrbit:{attribute:!1},startView:{attribute:!1},_low:{state:!0},_micProbe:{state:!0},_narrowStage:{state:!0},_alerts:{state:!0},_household:{state:!0},_hhFolded:{state:!0},_binInfo:{state:!0},householdCard:{attribute:!1},_sceneFired:{state:!0},replay:{attribute:!1},_info:{state:!0}};infoTimer;seenSeek=0;seenT=0;replayTicked=!1;seenFocus=0;unlistenReplay=null;detecting=!1;syncMs=0;clockTimer;flashTimer;cloud=0;sunPathKey="";sunPathCache=null;confirmSet=new Set;trailRows={};trailTimer;holoTimer;holoFolded=new Set;mediaFolded=new Set;cardPing=null;cardPingTimer;mediaGrace=new Map;mediaGraceTimer;mediaVolume=new Map;mediaIntent=new Map;scene=[];volumeSent=0;holoIds="";holoFetched=0;holoRefetch=null;shownStartView;throughWall=!1;live=null;resizeObs=null;unsubAsk=null;voiceTimer;announceTimer;binInfoTimer;alertSrc=null;alertTimer;seenAlerts=new Set;roomFlash=null;findIndex=null;lastConsumers=[];tourToken=0;tourTimer;tintSig="";thumbTimer;thumbSig="";thumbsAt=0;noteTimer;lastPersons=[];armTimer;walker=null;pets=null;petsFor=null;petsLoading=!1;ghost=null;ghostLoading=!1;walkKeys=null;walkRoomPts=null;swipeSent=0;swipeTimer;viewer=null;starting=!1;shownStates=new Map;shownPacks=-1;openingLinks=null;linkedRegistry;furnitureLinks=new Map;pickups=new Map;pickupKey="";householdTimer;binHolos=[];finished=new Co;appliances=new Map;directing=new no;directorTimer;restTimer;directorSrc=null;directorBack=null;fridgeTimer;sensorTimer;moduleTimer;lastSync=0;heatValues=new Map;watched=[];pictureUrls=new Map;cameraTick=0;cameraTimer;cameraScreens=0;throughFloor=null;constructor(){super(),this.building=null,this.replay=null,this._info=null,this.floorId=null,this.roomId=null,this.wallMode="auto",this.explode=!0,this.keepRoof=!1,this.plain=!1,this.markerMode="important",this.pinSize="normal",this.heatMode="none",this.theme="neon",this.clock=null,this._clockTick=0,this.accent=null,this.furnish=!1,this.trail=!1,this.weather=!0,this.weatherEntityId=null,this._flash=!1,this._proHint=null,this.showEnergy=!0,this.flows=null,this.selectedFurniture=null,this.selectedSet=[],this.selectedDevice=null,this._sky=0,this.quality="auto",this.showStats=!1,this._stats=null,this._error=null,this._energy=null,this._holos=[],this._rows=null,this._holoOpen=!0,this._wallboxW=null,this._plants=[],this._holoOn=!1,this._swipe=null,this._menu=null,this._through=null,this._wallBig=null,this._blend=.6,this._find=null,this._central=!1,this._sheet=null,this._settingsOpen=!1,this._note=null;try{this._thumbsCompact=localStorage.getItem("neonplan3d.thumbs_compact")==="1"}catch{this._thumbsCompact=!1}this._armed=null,this.central=!0,this.walkable=!0,this.pivotMark=!1,this.petsOn=!0,this.ghostOn=!0,this._walk=!1,this.buttons=null,this._thumbs=[],this.floorThumbs=!0,this.clean=!1,this.cleanButton=!1,this.roomLabels=!0,this.floorStack="dim",this._low=!1,this.panelOpen=!1,this.controlsRight=!1,this.keepView=!1,this.angleLock=!1,this._narrowStage=!1,this.alerts=!0,this.alertJump=!1,this.director=!1,this.hideRoof=!1,this.voice=!1,this.screen=null,this.voiceArea=null,this._voice=null,this._micProbe=Xo(),this._alerts=[],this._household=[],this._hhFolded=Mf("neonplan3d.hhFolded"),this._binInfo=null,this.householdCard=!0,this.scenes=!0,this._sceneFired=null,this.dimmed=!1,this.autoOrbit=!1,this.startView=null,this.cameraWall=!1,this.proxmoxWall=!1,this._pveFilter="all",this.holograms=null;try{this._flows=localStorage.getItem("neonplan3d.flows")==="1",this._holoShow=localStorage.getItem("neonplan3d.holos")!=="0"}catch{this._flows=!1,this._holoShow=!0}}connectedCallback(){super.connectedCallback(),this.listenReplay(),this.hasUpdated&&(this.observeStage(),this.viewer||this.start(),this.watchTrail()),document.addEventListener("visibilitychange",this.onVisible),this.watchAsk()}watchAsk(){let e=this.hass;this.unsubAsk||!(e!=null&&e.connection)||!this.isConnected||(this.unsubAsk=Za(e,t=>{this.onAsk(t)},t=>{this.onAnnounce(t)}).catch(()=>(this.unsubAsk=null,async()=>{})))}unwatchAsk(){let e=this.unsubAsk;this.unsubAsk=null,e==null||e.then(t=>t()).catch(()=>{})}keepTouch=e=>{e.stopPropagation()};onVisible=()=>{var e;document.hidden||(e=this.holoRefetch)==null||e.call(this)};disconnectedCallback(){var e,t,n,r,i;super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onVisible),this.stopWalk(),(e=this.pets)==null||e.dispose(),this.pets=null,this.petsFor=null,(t=this.ghost)==null||t.dispose(),this.ghost=null,(n=this.unlistenReplay)==null||n.call(this),this.unlistenReplay=null,this.unwatchAsk(),clearInterval(this.clockTimer),this.clockTimer=void 0,(r=this.resizeObs)==null||r.disconnect(),this.resizeObs=null,clearInterval(this.alertTimer),this.alertTimer=void 0,clearInterval(this.cameraTimer),this.cameraTimer=void 0,this.live=null,clearInterval(this.trailTimer),this.trailTimer=void 0,clearInterval(this.holoTimer),this.holoTimer=void 0,clearInterval(this.householdTimer),this.householdTimer=void 0,clearTimeout(this.fridgeTimer),clearTimeout(this.sensorTimer),this.sensorTimer=void 0,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),clearTimeout(this.voiceTimer),this.directing.clear(),this.pickupKey="",this.holoIds="",clearTimeout(this.flashTimer),this.flashTimer=void 0,clearTimeout(this.infoTimer),(i=this.viewer)==null||i.dispose(),this.viewer=null}firstUpdated(){this.observeStage(),this._micProbe&&mt().catch(()=>this._micProbe=!1);let e=()=>this.directing.touch(Date.now());this.addEventListener("pointerdown",e,{passive:!0}),this.addEventListener("wheel",e,{passive:!0}),this.renderRoot.addEventListener("wheel",t=>{var i,a;let n=t;if(!((a=(i=n.target)==null?void 0:i.closest)!=null&&a.call(i,".fp3d-holo")))return;let r=this.renderRoot.querySelector("canvas");r&&(n.preventDefault(),r.dispatchEvent(new WheelEvent("wheel",n)))},{passive:!1}),this.start()}observeStage(){let e=this.renderRoot.querySelector(".fp3d-stage");!e||this.resizeObs||typeof ResizeObserver!="function"||(this.resizeObs=new ResizeObserver(t=>{var r;let n=(((r=t[0])==null?void 0:r.contentRect.width)??1e3)<700;n!==this._narrowStage&&(this._narrowStage=n,this.scheduleThumbs())}),this.resizeObs.observe(e))}async start(){if(!(this.starting||this.viewer)){this.starting=!0;try{let e=await Zn();if(!this.isConnected)return;let t=this.renderRoot.querySelector(".fp3d-stage");t.addEventListener("pointerdown",r=>{var i,a;this._central&&!((a=(i=r.target)==null?void 0:i.closest)!=null&&a.call(i,".fp3d-central, .fp3d-central-btn"))&&(this._central=!1),this._info&&(this._info=null)});let n=Date.now();this.viewer=e.createViewer(t,{quality:this.quality,explode:this.explode,safeFx:Ui(Jo),onContextLost:()=>Od(Jo,n,Date.now(),document.hidden),onRoomTap:(r,i)=>this.fire("room-tap",{floorId:r,roomId:i}),onFloorTap:r=>this.fire("floor-tap",{floorId:r}),floorInfo:r=>r.rooms.length===1?T(this.hass,"floor_rooms_one"):T(this.hass,"floor_rooms",{n:r.rooms.length}),onBack:()=>this.fire("back",{}),onDeviceTap:(r,i,a)=>this.onDeviceTap(r,i,a),onDeviceHold:(r,i,a)=>this.onDeviceHold(r,i,a),onRoomDoubleTap:(r,i)=>this.onRoomDoubleTap(r,i),onDeviceSwipe:(r,i,a,s,l)=>this.onDeviceSwipe(r,i,a,s,l),onFurnitureSelect:r=>this.fire("furniture-select",{id:r}),onFurnitureMove:(r,i,a)=>this.fire("furniture-move",{id:r,x:i,z:a}),onDeviceSelect:r=>this.fire("device-select",{id:r}),onDeviceMove:(r,i,a)=>this.fire("device-move",{id:r,x:i,z:a}),onStats:r=>{this.showStats&&(this._stats=r)}}),this.viewer.setWallMode(this.wallMode),this.viewer.setKeepView(this.keepView),this.viewer.setAngleLock(this.angleLock),this.viewer.setTheme(this.effectiveTheme()),this.viewer.setAccent(this.accent??null),this.viewer.setFurnishMode(this.furnish),this.viewer.setSurfaceGrab(this.surfaceGrab??null),this.viewer.setFurnishTypes(this.furnishTypes??null),this.viewer.setAnchorCallback((r,i,a,s,l,u)=>this.placeHolo(r,i,a,s,l,u)),this.viewer.setFloorStack(this.floorStack),this.viewer.setStats(this.showStats),this.viewer.setAutoOrbit(this.autoOrbit?.06:0),this.viewer.setKeepRoof(this.keepRoof),this.viewer.setHideRoof(this.hideRoof),this._low=this.viewer.low,this.viewer.setPacks([...Gt()]),this.hass&&zi(this.hass,Gt()).then(()=>this.syncDevices(!0)),this.shownPacks=Kt(),this.building&&(this.shownStartView=JSON.stringify(this.startViewOf()),this.viewer.setStartView(this.startViewOf()),this.viewer.setBuilding(this.shownBuilding())),this.scheduleThumbs(),this.syncDevices(!0),this.syncPets(),this.syncGhost(),this.viewer.setFloor(this.floorId,!1),this.roomId&&this.viewer.selectRoom(this.roomId)}catch(e){this._error=String(e)}finally{this.starting=!1}}}willUpdate(e){e.has("building")&&($s(this.building??null),Al(this.building)),e.has("hass")&&this.hass&&ac(sc(this.hass))}updated(e){var i,a;e.has("hass")&&((i=this.live)!=null&&i.el)&&(this.live.el.hass=this.hass),e.has("hass")&&this.watchAsk(),this._central&&(e.has("roomId")&&e.get("roomId")!==void 0||e.has("floorId")&&e.get("floorId")!==void 0)&&(this._central=!1);let t=this.viewer;if(!t)return;if(this._through&&(e.has("roomId")||e.has("floorId"))&&(this.floorId===this.throughFloor?this.throughFloor=null:this._through=null),this.shownPacks!==Kt()&&(this.shownPacks=Kt(),t.setPacks([...Gt()]),this.hass&&zi(this.hass,Gt()).then(()=>this.syncDevices(!0)),this.hass&&this.building&&t.setParked(Ai(this.hass,this.building)),this.syncDevices(!0)),e.has("building")&&this.building){let s=JSON.stringify(this.startViewOf()),l=this.shownStartView!==void 0&&this.shownStartView!==s;this.shownStartView=s,t.setStartView(this.startViewOf()),t.setBuilding(this.shownBuilding()),l&&this.floorId===null&&t.resetView()}else e.has("plain")&&e.get("plain")!==void 0&&this.building&&t.setBuilding(this.shownBuilding());(e.has("building")||e.has("packs")||e.has("petsOn"))&&this.syncPets(),(e.has("building")||e.has("packs")||e.has("ghostOn"))&&this.syncGhost(),e.has("startView")&&e.get("startView")!==void 0&&(t.setStartView(this.startViewOf()),this.floorId===null&&t.resetView()),(e.has("building")||e.has("theme")||e.has("floorThumbs")||e.has("packs"))&&this.scheduleThumbs();let n=["building","markerMode","heatMode","flows","alerts","dimmed"].some(s=>e.has(s))||this.markerMode==="room"&&e.has("roomId"),r=this.replayTicked&&!!this.replay;this.replayTicked=!1,(n||e.has("hass")||r)&&this.syncDevices(n,r&&(this.trail||this.detecting)),(e.has("hass")||e.has("director"))&&this.direct(),e.has("autoOrbit")&&t.setAutoOrbit(this.autoOrbit?.06:0),(e.has("_thumbs")||e.has("_narrowStage"))&&t.setLabelInset(this._thumbs.length?this.narrowThumbs?136:184:0),e.has("floorId")&&t.setFloor(this.floorId),e.has("roomId")&&(this.roomId||e.get("roomId"))&&t.selectRoom(this.roomId),e.has("wallMode")&&t.setWallMode(this.wallMode),e.has("keepView")&&t.setKeepView(this.keepView),e.has("angleLock")&&t.setAngleLock(this.angleLock),e.has("explode")&&t.setExplode(this.explode),e.has("keepRoof")&&t.setKeepRoof(this.keepRoof),e.has("hideRoof")&&t.setHideRoof(this.hideRoof),e.has("floorStack")&&t.setFloorStack(this.floorStack),e.has("theme")&&t.setTheme(this.effectiveTheme()),e.has("accent")&&t.setAccent(this.accent??null),e.has("surfaceGrab")&&t.setSurfaceGrab(this.surfaceGrab??null),e.has("furnishTypes")&&t.setFurnishTypes(this.furnishTypes??null),e.has("furnish")&&(t.setFurnishMode(this.furnish),this.syncDevices(!0)),e.has("selectedFurniture")&&t.selectFurniture(this.selectedFurniture),e.has("selectedSet")&&t.selectFurnitureSet(this.selectedSet??[]),e.has("selectedDevice")&&t.setSelectedDevice(this.selectedDevice),(e.has("trail")||e.has("replay"))&&this.watchTrail(),e.has("replay")&&(this.listenReplay(),this.replay||(this._info=null)),(e.has("weather")||e.has("weatherEntityId"))&&this.syncDevices(!0),e.has("quality")&&e.get("quality")!==void 0&&(t.setQuality(this.quality),this._low=t.low,(a=this.replay)==null||a.setQuality(this.quality,t.low)),e.has("showStats")&&t.setStats(this.showStats),e.has("building")&&(this.findIndex=null)}syncDevices(e,t=!1){var pa,ha,fa,ma,ga,ba,_a,va,ya;let n=this.viewer,r=this.building;if(!n||!r||!this.hass)return;let i=this.hass;(e||!this.openingLinks||this.linkedRegistry!==i.entities)&&(this.openingLinks=on(i,r.floors),El(ll(i,r.floors)),this.furnitureLinks=Pt(i,r.floors),this.linkedRegistry=i.entities,this.findIndex=null,this.alertSrc=this.alerts?xi(i,r,this.weatherEntityId):null,this.watchHousehold(i,r),this.watched=Gi(i,r,{openings:this.openingLinks,furniture:this.furnitureLinks,heat:this.heatMode!=="none"||this.roomLabels,warnings:this.alertSrc?ki(this.alertSrc):[],weatherEntityId:this.weatherEntityId}),Lt()&&(this.watched=[...new Set([...this.watched,...gd(this.sceneHost(i,r))])]),e=!0);let a=e||t,s=!a;if(!a){for(let k of this.watched)if(this.shownStates.get(k)!==i.states[k]&&(a=!0,!k.startsWith("sensor."))){s=!1;break}}let l=!!this.replay&&this.replay.seek!==this.seenSeek;if(this.seenSeek=((pa=this.replay)==null?void 0:pa.seek)??0,this.seenT=((ha=this.replay)==null?void 0:ha.t)??0,!a)return;if(s&&this._low&&!this.replay){let k=Fd(performance.now()-this.lastSync);if(k>0){this.sensorTimer??=setTimeout(()=>{this.sensorTimer=void 0,this.syncDevices(!1)},k);return}}this.lastSync=performance.now();let u=this.showStats?performance.now():0;this.shownStates=new Map(this.watched.map(k=>[k,i.states[k]])),this.scene=Lt()?hd(this.sceneHost(i,r)):[];let c=qc(i,r),d=Pl(i,r),p=this.furnitureMarkers(i,r,new Set(d.map(k=>k.id)),new Set(c.map(k=>k.powerEntity)));c.push(...p.consumers),this.lastConsumers=c;let h=Wc(i,r,c,gn(r,k=>{var z,L;return((L=(z=this.furnitureLinks)==null?void 0:z.get(k.id))==null?void 0:L.power)??null})),m=new Map(c.filter(k=>k.id!==k.powerEntity).map(k=>[k.id,k.power]));this.confirmSet=rn(i,r.floors);let g=this.trail?this.trailNow(i,r):[],f=W("camera_cockpit")&&!this.dimmed?this.detectionPins(i,d):[];this.detecting=f.length>0;let b=W("energy_pro"),w=new Set(W("auto_pro")?r.floors.flatMap(k=>k.furniture.filter(z=>z.type==="parking"&&z.car&&bn(i,z)).map(z=>z.id)):[]);n.setDevices([...[...d,...p.markers,...this.lockMarkers(i,r)].map(k=>{let z=k.show==="no_power"||"energyDevice"in k&&k.energyDevice||"standby"in k&&k.standby?null:m.get(k.id)??null,L={...k,power:z,powerText:z===null?void 0:de(i,z),effect:this.dimmed?!1:k.effect},Z=k.ownName&&(k.showName||this.markerNames)?k.ownName:"",R=W("sound")&&this.mediaCardUp(i,k.id)||W("auto_pro")&&!!k.furnitureId&&w.has(k.furnitureId);return{...L,pin:this.showPin(L)&&!R,full:k.show==="always"||k.full===!0,caption:Z}}),...(b&&(this.flows??this._flows)&&!this.dimmed&&h.grid!==null?[this.gridPin(i,r,h.grid)]:[]).filter(k=>!!k),...f,...g.map((k,z)=>({id:`trail:${z}`,floorId:k.floorId,roomId:null,x:k.x,z:k.z,y:.3+.4*g.slice(0,z).filter(L=>L.entity===k.entity).length,icon:cd,name:Q(i,k.entity),text:qo(i,k.time),active:!1,unavailable:!1,glow:null,pin:!0})),...this.moduleMarkers(r)]);for(let k of this.scene)k.kind==="marker"&&k.card&&k.furnitureId&&!p.targets.has(k.furnitureId)&&p.targets.set(k.furnitureId,`module:${k.id}`);n.setTrail(g,this.replay?this.robotPaths(i,r):[]),n.setPickTargets(p.targets,this.openingTargets()),n.setScreens(p.screens),n.setFridgeDoors(Nr(i,r.floors)),n.setAwnings(cl(i,r.floors)),n.setProjections(this.projectedCameras(i,r)),n.setRobots(this.robotInfos(i,r));let y=new Map;for(let k of((fa=r.settings.roof)==null?void 0:fa.windows)??[])y.set(k.id,nu(i,k));n.setRoofWindows(y),n.setParked(Ai(i,r));let S=new Map(r.floors.flatMap(k=>k.openings.map(z=>[z.id,z.type]))),P=new Map([...this.openingLinks].map(([k,z])=>[k,Xe(i,z,S.get(k))]));n.setOpeningStates(P,l);let I=this.alertSrc?Cc(i,r,this.alertSrc,this.openingLinks):[],v=this.alerts&&Lt()?md(this.sceneHost(i,r)).map(k=>({kind:k.kind,entity:k.entity,roomId:k.roomId,floorId:k.floorId,text:k.text,color:k.color,quiet:!k.roomId})):[];this.setAlerts([...I,...v]),clearTimeout(this.fridgeTimer);let O=W("household")&&!this.replay?xc(r.floors.flatMap(k=>k.furniture),i):null;O!==null&&(this.fridgeTimer=setTimeout(()=>this.syncDevices(!0),O+500));let K=[...d,...p.markers].map(k=>`${k.id}:${k.glow?`${k.glow.level.toFixed(1)}/${k.glow.color.map(z=>z.toFixed(1)).join("/")}`:0}`).join(";")+"|"+[...P].map(([k,z])=>`${k}:${z.open}:${z.cover===null?"-":z.cover.toFixed(1)}`).join(";");if(K!==this.thumbSig){let k=this.thumbSig==="";this.thumbSig=K,k||this.scheduleThumbs(1500)}let A=r.floors.flatMap(k=>k.furniture.filter(z=>z.type==="home_battery").map(z=>({floorId:k.id,x:z.x,z:z.z})))[0]??(r.energy.battery?r.floors.flatMap(k=>k.placements.filter(z=>z.entity_id===r.energy.battery).map(z=>({floorId:k.id,x:z.x,z:z.z})))[0]:null),M=b?Zc(i,r,h.solar):null,$=r.settings.roof.hologram??Ue,E=[...r.settings.roof.solar??[]].sort((k,z)=>z.rows*z.cols-k.rows*k.cols),C=r.settings.roof.strings??[],j=k=>{var z;return(k.string?(z=C.find(L=>L.id===k.string))==null?void 0:z.inverter:null)??null},N=$.plant_floor?"all":"house",J=(k,z,L,Z)=>{var De,xn;let R=zt(r,k);if(!R)return null;let[Y,me]=Ct(R,k),re=k.u+Y/2+z,ae=k.v+me/2+L,ke=[R.o[0]+R.eu[0]*re+R.es[0]*ae,R.o[1]+R.eu[1]*re+R.es[1]*ae,R.o[2]+R.eu[2]*re+R.es[2]*ae],ye=((De=R.wall)==null?void 0:De.floorId)??(R.unbounded?((xn=r.floors.find(ro=>ro.elevation===Math.min(...r.floors.map(vt=>vt.elevation))))==null?void 0:xn.id)??r.floors[0].id:[...r.floors].sort((ro,vt)=>vt.elevation-ro.elevation)[0].id);return{p:[ke[0]+R.n[0]*.05,ke[1]+R.n[1]*.05,ke[2]+R.n[2]*.05],n:[R.n[0],R.n[1],R.n[2]],floorId:ye,size:Z,roof:!0,views:N}},F=[],B=[],q=h.grid!==null||h.battery!==null||h.solar!==null,ne=$.place==="free"&&Number.isFinite($.x)&&Number.isFinite($.z),H=b&&h.solar!==null&&!ne?E.find(k=>k.id===$.field)??E[0]:void 0,se=H?j(H):null,G=!!H&&!!se&&!E.some(k=>k.id!==H.id&&j(k)===se)&&$.right===0&&$.up===0,le=(()=>{if(!G||!H)return 0;let k=zt(r,H);return k?Ct(k,H)[0]/2+1.2:0})(),be=H?J(H,$.right+le,$.up,$.size):null,Vt=this.devicePowers(i,r),Nt=b&&h.solar!==null?r.energy.solar?[r.energy.solar]:gn(r,k=>{var z,L;return((L=(z=this.furnitureLinks)==null?void 0:z.get(k.id))==null?void 0:L.power)??null}).solar:[];if(be)F.push(be),B.push({kind:"main",name:T(i,"holo_title"),w:null,dayIds:Nt,battery:null});else if(b&&q&&ne){let k=0,z=0,L=0,Z=1/0,R=r.floors[0];for(let ae of r.floors){ae.rooms.length&&(Z=Math.min(Z,ae.elevation)),ae.rooms.length&&(!R.rooms.length||ae.elevation+ae.height>R.elevation+R.height)&&(R=ae);for(let ke of ae.rooms)for(let[ye,De]of ke.points)k+=ye,z+=De,L++}L&&(k/=L,z/=L);let Y=$.x-k,me=$.z-z,re=Math.hypot(Y,me);F.push({p:[$.x,(Number.isFinite(Z)?Z:0)+($.height??3),$.z],n:re>.01?[Y/re,0,me/re]:[1,0,0],floorId:R.id,size:$.size,roof:!0,views:N}),B.push({kind:"main",name:T(i,"holo_title"),w:null,dayIds:Nt,battery:null})}else if(b&&q&&r.floors.some(k=>k.rooms.length)){let k=-1/0,z=1/0,L=-1/0,Z=0,R=r.floors[0];for(let Y of r.floors){for(let me of Y.rooms)for(let[re,ae]of me.points)k=Math.max(k,re),z=Math.min(z,ae),L=Math.max(L,ae);Y.rooms.length&&Y.elevation+Y.height>Z&&(Z=Y.elevation+Y.height,R=Y)}F.push({p:[k+.6,Z+.4,(z+L)/2],n:[1,0,0],floorId:R.id,size:$.size,roof:!0,views:N}),B.push({kind:"main",name:T(i,"holo_title"),w:null,dayIds:Nt,battery:null})}if(b&&h.solar!==null){let k=new Set;for(let z of r.floors)for(let L of z.furniture.filter(Z=>Z.type==="inverter")){if(L.plant_card===!1||k.has(L.id))continue;k.add(L.id);let Z=E.filter(ke=>j(ke)===L.id),R=(H&&L.id===se?Z.find(ke=>ke.id!==H.id):null)??Z[0],Y=((ga=(ma=this.furnitureLinks)==null?void 0:ma.get(L.id))==null?void 0:ga.power)??null,me=R?J(R,L.plant_right??0,L.plant_up??0,$.size*.85):null;if(!me||!Y)continue;let re=z.furniture.filter(ke=>ke.type==="home_battery").sort((ke,ye)=>Math.hypot(ke.x-L.x,ke.z-L.z)-Math.hypot(ye.x-L.x,ye.z-L.z))[0],ae=re!=null&&re.soc&&re.soc!=="none"?Number((ba=i.states[re.soc])==null?void 0:ba.state):NaN;F.push(me),B.push({kind:"plant",name:L.name||Me(i,L.type),w:Math.max(0,he(i.states[Y])??0),dayIds:[Y],battery:re?{soc:Number.isFinite(ae)?ae:null,w:Vt.get(re.id)??null}:null})}}let vn=$.device_house===!1?"floor":"all";if(b)for(let k of r.floors){for(let z of k.furniture){if(!z.holo)continue;let L=((va=(_a=this.furnitureLinks)==null?void 0:_a.get(z.id))==null?void 0:va.power)??null,Z=c.find(Y=>Y.id===z.id);if(!L&&!Z)continue;let R=k.elevation+fe(k,z)+z.h;F.push({p:[z.x,R+.1,z.z],n:[0,1,0],floorId:k.id,size:$.size*.7,roof:!1,views:vn,room:na(k,z.x,z.z)}),B.push({kind:"device",name:z.name||Me(i,z.type),w:(Z==null?void 0:Z.power)??(L?he(i.states[L]):null),dayIds:L?[L]:[],battery:null})}for(let z of k.placements){if(!z.holo)continue;let L=Yn(i,z.entity_id);if(!L)continue;let Z=k.elevation+(z.y??.4)+.2;F.push({p:[z.x,Z,z.z],n:[0,1,0],floorId:k.id,size:$.size*.7,roof:!1,views:vn,room:na(k,z.x,z.z)}),B.push({kind:"device",name:z.name||Q(i,z.entity_id),w:he(i.states[L]),dayIds:[L],battery:null})}}let Re=[];if(W("sound")){let k=new Set,z=(r.settings.roof.hologram??Ue).size,L=(R,Y,me,re,ae,ke)=>{let ye=i.states[Y];if(!ye||V(Y)!=="media")return;if(k.has(Y)){let yt=Re.find(rr=>rr.id===Y);yt&&Re.push({...yt,id:`${Y}#${Re.filter(rr=>rr.id.startsWith(`${Y}#`)).length+2}`,floorId:R.id,x:me,z:re,members:[Y]});return}k.add(Y);let De=this.ro?void 0:this.mediaGrace.get(Y),xn=[ye.attributes.media_title,ye.attributes.app_name,ye.attributes.source].find(yt=>typeof yt=="string"&&!!yt.trim())??"";if(!(!X(ye)&&(ye.state==="playing"||ye.state==="paused"&&!!xn&&this.pausedRecently(ye)||ye.state==="on"&&!!ye.attributes.source))){De&&De.until>Date.now()?(Re.push({...De.source,playing:!1,level:0}),F.push(De.anchor),B.push({...De.card,media:{...De.card.media,playing:!1}}),clearTimeout(this.mediaGraceTimer),this.mediaGraceTimer=setTimeout(()=>this.syncDevices(!0),Math.max(500,De.until-Date.now()+100))):X(ye)||(this.mediaGrace.delete(Y),Re.push({id:Y,floorId:R.id,x:me,z:re,level:0,playing:!1,members:[]}));return}let vt=ye.state==="playing",Be=ye.attributes,wa=typeof Be.volume_level=="number"?Math.min(1,Math.max(0,Be.volume_level)):.5,uu=Array.isArray(Be.group_members)?Be.group_members.filter(yt=>yt!==Y):[];Re.push({id:Y,floorId:R.id,x:me,z:re,level:vt?.3+.7*wa:0,playing:vt,members:uu});let pu=xn||T(i,"holo_media_playing"),xa={p:[me,R.elevation+ae+.12,re],n:[0,1,0],floorId:R.id,size:z*.7,roof:!1,views:"all"},ka={kind:"media",name:ke,w:null,dayIds:[],battery:null,media:{id:Y,title:pu,artist:typeof Be.media_artist=="string"?Be.media_artist:typeof Be.media_album_name=="string"?Be.media_album_name:"",picture:typeof Be.entity_picture=="string"?Be.entity_picture:null,volume:Math.round(wa*100),playing:vt}};F.push(xa),B.push(ka),this.ro||this.mediaGrace.set(Y,{until:Date.now()+45e3,card:ka,source:Re[Re.length-1],anchor:xa})},Z=(R,Y)=>{var me,re;for(let ae of R.furniture){if((ae.entity!=null&&ae.entity!=="none")!==Y)continue;let ke=(re=(me=this.furnitureLinks)==null?void 0:me.get(ae.id))==null?void 0:re.entity;ke&&L(R,ke,ae.x,ae.z,fe(R,ae)+ae.h,ae.name||Me(i,ae.type))}};for(let R of r.floors)Z(R,!0);for(let R of r.floors)for(let Y of R.placements)L(R,Y.entity_id,Y.x,Y.z,Y.y??1.1,Y.name||Q(i,Y.entity_id));for(let R of r.floors)Z(R,!1)}if(W("auto_pro")){let k=(r.settings.roof.hologram??Ue).size;for(let z of r.floors)for(let L of z.furniture){if(L.type!=="parking"||!L.car)continue;let Z=bn(i,L);if(!Z)continue;let R=On(i,L);if(R.soc===null&&R.range===null&&R.locked===null&&R.climateOn===null)continue;let Y=id(L,Z),me=fe(z,L)+((Y==null?void 0:Y.h)??1.6);F.push({p:[L.x,z.elevation+me+.25,L.z],n:[0,1,0],floorId:z.id,size:k*.7,roof:!1,views:"all"});let re=R.entities;B.push({kind:"car",name:L.name||Me(i,Z),w:null,dayIds:[],battery:null,car:{spot:L.id,soc:R.soc,range:R.range,rangeUnit:R.rangeUnit,chargingW:R.chargingW,charging:R.charging,locked:R.locked,climateOn:R.climateOn,lock:re.lock,climate:re.climate,charge:re.charging&&/^(switch|input_boolean)\./.test(re.charging)?re.charging:null}})}}let bt=this.scene.filter(k=>k.kind==="water").map(k=>({...k,level:this.dimmed?k.level*.4:k.level}));if(n.setPools(bt),Lt()){let k=(r.settings.roof.hologram??Ue).size;for(let z of fd(this.sceneHost(i,r))){let L=r.floors.find(R=>R.id===z.anchor.floorId);if(!L)continue;let Z=null;if(z.anchor.areaId){let R=L.outdoor.find(ae=>ae.id===z.anchor.areaId);if(!R||R.points.length<3)continue;let[Y,me]=Te(R.points),re=R.type==="pool"?Qt(L,R):Je(L,Y,me);Z=[Y,L.elevation+Math.max(re,0)+(R.above?.6:1.1),me]}else if(z.anchor.furnitureId){let R=L.furniture.find(Y=>Y.id===z.anchor.furnitureId);if(!R)continue;Z=[R.x,L.elevation+fe(L,R)+R.h+.25,R.z]}Z&&(F.push({p:Z,n:[0,1,0],floorId:L.id,size:k*.7,roof:!1,views:"all"}),B.push({kind:"module",name:z.title,w:null,dayIds:[],battery:null,module:z}))}for(let z of this.scene){if(z.kind!=="tag")continue;let L=r.floors.find(Z=>Z.id===z.floorId);L&&(F.push({p:[z.at[0],L.elevation+z.at[1],z.at[2]],n:[0,1,0],floorId:L.id,size:k*.75,roof:!1,views:z.views??"all"}),B.push({kind:"bin",name:z.sub??"",w:null,dayIds:[],battery:null,bin:{lines:[{color:z.color??"#37e0ff",when:z.text,name:z.sub??"",soon:!0,out:!1}],soon:!0,icon:null},tag:!0}))}}if(W("household")){let k=(r.settings.roof.hologram??Ue).size;for(let z of hc(this.binHolos)){let L=r.floors.find(R=>R.id===z.floorId);if(!L)continue;F.push({p:[z.x,L.elevation+z.y+.04,z.z],n:[0,1,0],floorId:z.floorId,size:k*.75,roof:!1,views:"all",room:na(L,z.x,z.z)});let Z=z.lines.map(R=>({color:R.color,when:R.when,name:R.name,soon:!!R.soon&&!R.out,out:!!R.out}));B.push({kind:"bin",name:z.lines.map(R=>R.name).join(", "),w:null,dayIds:[],battery:null,bin:{lines:Z,soon:Z.some(R=>R.soon),icon:z.lines.length===1?z.lines[0].icon??null:null}})}}n.setSound(Re);let Ye=this._walk?this.walkRoomPts:null,qt=F.map(k=>!this._walk||!!Ye&&U([k.p[0],k.p[2]],Ye)),yn=B.filter((k,z)=>qt[z]);n.setAnchors(F.filter((k,z)=>qt[z])),JSON.stringify(yn)!==JSON.stringify(this._holos)&&(this._holos=yn),n.setSolarLevels(M&&!this.dimmed?Xc(r,M):new Map);let oo=!b||!(this.flows??this._flows)||this.dimmed?[]:Uc({building:r,consumers:c,summary:h,battery:A??null,fieldPower:M,devicePower:this.devicePowers(i,r)}).map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.power,color:ed(k.kind,h)})),Wt=this.poolPipes(r),_t=this.scene.filter(k=>k.kind==="line");n.setFlows(this.dimmed?oo:[...oo,...Wt.flows,...wd(_t)]),n.setPipes(Wt.tubes),n.setPatches(this.scene.filter(k=>k.kind==="patch").map(k=>({floorId:k.floorId,points:k.points,y:k.y,color:k.color,opacity:this.dimmed?k.opacity*.4:k.opacity,...k.glow?{glow:!0}:{}})));let D=[],oe=jn("locate")&&xo(r)?[...D,...ko(i,r,new Set(D.map(k=>k.id)))]:D;n.setPersonLook(Yr(r)==="pin"?"pin":"figure"),n.setPersons(oe),this.lastPersons=oe.map(k=>({floorId:k.floorId,roomId:k.roomId}));let ue=kl(i,r,this.openingLinks,oe);n.setFloorInfo(new Map([...ue].map(([k,z])=>[k,$l(i,z)])));let Pe=(ya=i.states["sun.sun"])==null?void 0:ya.attributes,ce=typeof(Pe==null?void 0:Pe.elevation)=="number"?Pe.elevation:null;n.setSun(ce!==null&&typeof(Pe==null?void 0:Pe.azimuth)=="number"?{elevation:ce,azimuth:Pe.azimuth}:null);let Fe=k=>T(i,k).charAt(0).toUpperCase();n.setSunPath(this.sunPathToday(i),[Fe("compass_n"),Fe("compass_e"),Fe("compass_s"),Fe("compass_w")],kn(i)),this.theme==="auto"&&n.setTheme(this.effectiveTheme());let He=this.weather&&!this.dimmed&&W("weather")?ec(i,Rt(i,this.weatherEntityId??r.settings.weather_entity),r.settings.rain_entity):null,Oe=He?tc(He,r.settings.weather_effects):null;this.cloud=(Oe==null?void 0:Oe.cloud)??0,this._sky=(ce===null?0:Math.min(1,Math.max(0,(ce+4)/16)))*(1-.45*this.cloud);let or=Oe?Oe.sky:(r.settings.weather_effects??["sky"]).includes("sky");n.setWeather(this.weather&&!this.dimmed&&W("weather")?{...Oe??{rain:0,snow:0,fog:0,cloud:0,wind:0},sky:this.skyColor(),disc:or}:null),this.watchLightning(!!(Oe!=null&&Oe.lightning)),this.applyTint();let la=h.grid!==null||h.solar!==null||h.battery!==null||h.tariff!==null?h:null;JSON.stringify(la)!==JSON.stringify(this._energy)&&(this._energy=la);let ca=c.some(k=>k.wallbox)?c.filter(k=>k.wallbox).reduce((k,z)=>k+z.power,0):null,da=r.floors.flatMap(k=>k.furniture.filter(z=>z.type==="inverter")).map(k=>{var Z,R;let z=(R=(Z=this.furnitureLinks)==null?void 0:Z.get(k.id))==null?void 0:R.power,L=z?he(i.states[z]):null;return L===null?null:{name:k.name||Me(i,k.type),w:Math.max(0,L)}}).filter(k=>!!k);JSON.stringify(da)!==JSON.stringify(this._plants)&&(this._plants=da),ca!==this._wallboxW&&(this._wallboxW=ca),this.watchSolarDay([...new Set(B.flatMap(k=>k.dayIds))]);let ua=W("energy_pro");this.watchMeters(ua?r.energy.gas??null:null,ua?r.energy.water??null:null),u&&(this.syncMs=this.syncMs*.8+(performance.now()-u)*.2)}listenReplay(){var t;(t=this.unlistenReplay)==null||t.call(this),this.unlistenReplay=null;let e=this.replay;!e||!this.isConnected||(this.seenT=e.t,this.seenFocus=e.focusSeq,this.unlistenReplay=e.listen(()=>{var n;this.replay===e&&(e.focusSeq!==this.seenFocus&&(this.seenFocus=e.focusSeq,e.focus&&this.showEntity(e.focus)),!(e.t===this.seenT&&e.seek===this.seenSeek)&&(e.pulses.length&&((n=this.viewer)==null||n.flashDevices(e.pulses)),this.seenT=e.t,!(e.seek===this.seenSeek&&!this.trail&&!this.detecting&&!this._holos.length)&&(this.replayTicked=!0,this.requestUpdate())))}))}showEntity(e){let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.findIndex??=Bo(t,n)).find(a=>a.entity===e);if(r){this.goTo(r);return}let i=ze(t,e);for(let a of n.floors){let s=a.openings.find(d=>{var h;let p=(h=this.openingLinks)==null?void 0:h.get(d.id);return!!p&&[p.contact,p.tilt,p.contact2,p.tilt2,p.cover].includes(e)}),l=a.rooms.find(d=>d.points.length>=3&&(s?d.id===s.room_id:!!i&&d.area_id===i));if(!l)continue;let[u,c]=Te(l.points);this.goTo({kind:"device",name:l.name,where:"",floorId:a.id,roomId:l.id,entity:e,icon:null,x:u,z:c,y:1});return}}now(){var e;return((e=this.replay)==null?void 0:e.t)??Date.now()}get ro(){return!!this.replay}historyEntities(){let e=this.building,t=this.hass;if(!e||!t)return{entities:[],openings:[],furniture:[],low:this._low};let n=!this.openingLinks||this.linkedRegistry!==t.entities,r=n?on(t,e.floors):this.openingLinks,i=n?Pt(t,e.floors):this.furnitureLinks,a=ki(xi(t,e,this.weatherEntityId)),s=Gi(t,e,{openings:r,furniture:i,heat:!0,warnings:a,weatherEntityId:this.weatherEntityId}),l=W("auto_pro")?e.floors.flatMap(u=>u.furniture.filter(c=>c.type==="parking").flatMap(c=>[typeof c.entity=="string"?c.entity:null,c.car?wo(t,c).tracker:null]).filter(c=>!!c&&c.startsWith("device_tracker."))):[];return{entities:s,openings:[...r],furniture:[...i],low:this._low,cars:l,energy:W("energy_pro"),auto:W("auto_pro")}}proHint(e){this._proHint=e}showInfo(e,t,n){this._menu=null,this._info={entity:e,x:t,y:n},clearTimeout(this.infoTimer),this.infoTimer=setTimeout(()=>this._info=null,4e3)}renderInfo(){let e=this._info;if(!e||!this.hass)return x;let t=this.hass,n=t.states[e.entity],r=$e(t,n),i=V(e.entity)==="light"&&(n==null?void 0:n.state)==="on"&&r.endsWith("%")?`${T(t,"state_on")} \xB7 ${r}`:r,a=n!=null&&n.last_changed?T(t,"tt_since",{time:qo(t,Date.parse(n.last_changed))}):"";return _`<div class="fp3d-swipe fp3d-info" style="left:${e.x}px;top:${e.y}px">
      <span>${Q(t,e.entity)}</span>
      <b>${a?`${i} \xB7 ${a}`:i}</b>
    </div>`}devicePowers(e,t){var r,i;let n=new Map;for(let a of t.floors)for(let s of a.furniture){if(s.type!=="inverter"&&s.type!=="home_battery")continue;let l=(i=(r=this.furnitureLinks)==null?void 0:r.get(s.id))==null?void 0:i.power,u=s.type==="home_battery"&&s.charge&&s.charge!=="none"?he(e.states[s.charge]):null,c=l?he(e.states[l],s.type==="home_battery"&&t.energy.battery_invert&&u===null):null;c!==null&&u!==null?c=Math.max(0,c)-Math.max(0,u):c===null&&u!==null&&(c=-Math.max(0,u)),c!==null&&n.set(s.id,c)}return n}detectionPins(e,t){var i,a;let n=[],r=new Set(((i=this.building)==null?void 0:i.floors.flatMap(s=>s.placements.filter(l=>l.detect_pins===!1).map(l=>l.entity_id)))??[]);for(let s of t){if(!((a=s.model)!=null&&a.startsWith("camera"))||r.has(s.id))continue;let l=this.now(),u=Ze(e,s.id).filter(g=>{let f=e.states[g];return f?f.state==="on"?!0:f.state==="off"&&!!f.last_changed&&l-Date.parse(f.last_changed)<bf:!1}),c=new Map;for(let g of u){let f=Qr(e,g);c.has(f)||c.set(f,g)}c.size>1&&c.delete("motion");let d=(s.rotation??0)*Math.PI/180,p=[-Math.sin(d),Math.cos(d)],h=s.model==="camera_ceiling",m=0;for(let[g,f]of c){let b=e.states[f],w=b!=null&&b.last_changed?qo(e,Date.parse(b.last_changed)):"";n.push({id:`detect:${f}`,floorId:s.floorId,roomId:s.roomId,x:s.x+(h?0:p[0]*1.1),z:s.z+(h?0:p[1]*1.1),y:1.4+.4*m++,icon:eu[g]??eu.motion,name:Q(e,f),text:`${T(e,`detect_${g}`)}${w?` \xB7 ${w}`:""}`,active:!0,unavailable:!1,glow:null,pin:!0})}}return n}gridPin(e,t,n){let r=Do(t);if(!r)return null;let i=Math.abs(n)<5,a=t.settings.outage_entity;return a&&To(e.states[a])?{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:yf,name:T(e,"holo_grid"),text:T(e,"power_outage"),active:!0,unavailable:!1,glow:null,pin:!0}:{id:"grid",floorId:r.floorId,roomId:null,x:r.end[0],z:r.end[1],y:.9+r.height,icon:vf,name:T(e,"holo_grid"),text:i?de(e,0):`${T(e,n<0?"energy_grid_export":"energy_grid_import")} ${de(e,Math.abs(n))}`,active:!i,unavailable:!1,glow:null,pin:!0}}meterKey="";meterTimer;watchMeters(e,t){let n=[e,t].filter(a=>!!a),r=this.replay?"":n.join(",");if(r===this.meterKey)return;if(this.meterKey=r,clearInterval(this.meterTimer),this.meterTimer=void 0,!r){this._meters=null;return}let i=async()=>{if(!this.hass||document.hidden)return;let a=await Vc(this.hass,n);this.meterKey===r&&a&&(this._meters={gas:e?a.get(e)??null:null,water:t?a.get(t)??null:null})};i(),this.meterTimer=setInterval(()=>{i()},3e5)}poolPipes(e){var i,a;let t=[],n=[],r=new Map(this.scene.filter(s=>s.kind==="pipeflow").map(s=>[s.areaId,s.flows]));for(let{floor:s,area:l}of Td(e.floors)){let u=l.pool;if(!((i=u.pipes)!=null&&i.length)&&!((a=u.joints)!=null&&a.length))continue;let c=u.ports??[],d=new Map(Object.entries(r.get(l.id)??{})),p=Qo(e,s,l),h=(m,g)=>Wi(m,g,l,s);t.push(...zd(u.pipes??[],d,p,h));for(let m of c){if(m.kind!=="inlet")continue;let g=p(`port:${m.id}`),f=g&&Bi(l,[g.x,g.z]);if(!g||!f)continue;let b=(u.pipes??[]).find(y=>y.to===`port:${m.id}`),w=b?d.get(b.id):void 0;n.push({floorId:s.id,points:[[g.x+f[0]*.03,g.y,g.z+f[1]*.03],[g.x-f[0]*.09,g.y,g.z-f[1]*.09]],radius:.035,water:w!=null&&w.active?w.color:null,fittings:[]})}for(let m of u.joints??[]){if(m.kind!=="wall"&&m.kind!=="floor")continue;let g=p(`joint:${m.id}:inside`),f=p(`joint:${m.id}:outside`),b=m.kind==="floor"?.03:g.y;n.push({floorId:s.id,points:[[g.x,b,g.z],[f.x,f.y,f.z]],radius:.05,water:null,fittings:[]})}for(let m of u.pipes??[]){let g=Wi(eo(m,p),m,l,s);if(g.length<2)continue;let f=d.get(m.id),b=[],w=Ko(g);for(let[y,S]of[[m.from,.04],[m.to,w-.04]]){let P=y.startsWith("dev:")||y.startsWith("joint:")?Yo(g,S):null;P&&b.push({kind:"sleeve",p:P.p,dir:P.dir})}for(let y of m.fittings??[]){let S=Yo(g,y.at);S&&b.push({kind:y.kind,p:S.p,dir:S.dir,open:y.open!==!1})}n.push({floorId:m.floor_id,points:g,radius:.025,water:f!=null&&f.active?f.color??qi:null,fittings:b})}}return{flows:t,tubes:n}}watchSolarDay(e){let t=this.replay;if(t){clearInterval(this.holoTimer),this.holoTimer=void 0;let i=`tt|${e.join(",")}|${Math.floor(t.t/3e5)}`;if(i===this.holoIds)return;this.holoIds=i,this._rows=e.length?t.stats(e,new Date(t.t).setHours(0,0,0,0),t.t+1):null;return}let n=e.join(",");if(n===this.holoIds)return;if(this.holoIds=n,clearInterval(this.holoTimer),this.holoTimer=void 0,!e.length){this._rows=null;return}let r=async()=>{if(!this.hass||document.hidden)return;this.holoFetched=Date.now();let i=await Qc(this.hass,e);this.holoIds===n&&(this._rows=i)};r(),this.holoTimer=setInterval(()=>{r()},3e5),this.holoRefetch=()=>{Date.now()-this.holoFetched>3e5&&r()}}holoBoxes=[];holoSizes=new Map;placeHolo(e,t,n,r,i,a){var K,A,M,$;(!this.holoBoxes.length||e<=this.holoBoxes[this.holoBoxes.length-1].i)&&(this.holoBoxes=[]);let s=this.renderRoot.querySelector(`.fp3d-holo[data-holo="${e}"]`),l=this.renderRoot.querySelector(`.fp3d-holo-link[data-holo="${e}"]`),u=((K=this._holos[e])==null?void 0:K.kind)==="main";if(!s){u&&this._holoOn&&(this._holoOn=!1);return}u&&r!==this._holoOn&&(this._holoOn=r);let c=this._holos[e],d=(((A=this.building)==null?void 0:A.settings.roof.hologram)??Ue).device_min_w??0;(c==null?void 0:c.kind)==="device"&&d>0&&(c.w??0)<d&&(r=!1);let p=!r;if(s.hidden!==p&&(s.hidden=p),l&&l.hasAttribute("hidden")!==p&&l.toggleAttribute("hidden",p),!r)return;if((c==null?void 0:c.kind)==="bin"){let E=Math.max(.6,i*.8),C=!!((M=c.bin)!=null&&M.icon)&&i*.8<.62;s.classList.contains("fp3d-holo-far")!==C&&(s.classList.toggle("fp3d-holo-far",C),this.holoSizes.delete(e)),C&&(E=1);let j=this.holoSizes.get(e),N=performance.now();(!j||N-j.at>2e3)&&(j={w:s.offsetWidth||90,h:s.offsetHeight||40,at:N},this.holoSizes.set(e,j));let J=j.w*E,F=j.h*E,B=n;for(let q=0;q<6;q++){let ne=this.holoBoxes.find(H=>t-J/2<H.x1+3&&t+J/2>H.x0-3&&B-F<H.y1+3&&B>H.y0-3);if(!ne)break;B=ne.y0-4}this.holoBoxes.push({i:e,x0:t-J/2,x1:t+J/2,y0:B-F,y1:B}),s.style.transform=`translate(${t.toFixed(1)}px, ${B.toFixed(1)}px) scale(${E.toFixed(3)}) translate(-50%, -100%)`,l&&!l.hasAttribute("hidden")&&l.toggleAttribute("hidden",!0);return}let h=i*.8,m=34*h,g=46*h,f=t+(a?m:-m),b=n-g,w=this.holoSizes.get(e),y=performance.now();(!w||y-w.at>2e3)&&(w={w:s.offsetWidth||184,h:s.offsetHeight||90,at:y},this.holoSizes.set(e,w));let S=w.w*h,P=w.h*h,I=a?f:f-S,v=I+S;for(let E=0;E<6;E++){let C=this.holoBoxes.find(j=>I<j.x1+4&&v>j.x0-4&&b-P<j.y1+4&&b>j.y0-4);if(!C)break;b=C.y0-6}this.holoBoxes.push({i:e,x0:I,x1:v,y0:b-P,y1:b});let O=a||((($=this.building)==null?void 0:$.settings.roof.hologram)??Ue).mirror!==!1;if(s.style.transform=O?`translate(${f.toFixed(1)}px, ${b.toFixed(1)}px) scale(${(a?h:-h).toFixed(3)}, ${h.toFixed(3)}) translate(0, -100%)`:`translate(${I.toFixed(1)}px, ${b.toFixed(1)}px) scale(${h.toFixed(3)}) translate(0, -100%)`,l){let E=l.firstElementChild,C=l.lastElementChild;E==null||E.setAttribute("x1",t.toFixed(1)),E==null||E.setAttribute("y1",n.toFixed(1)),E==null||E.setAttribute("x2",f.toFixed(1)),E==null||E.setAttribute("y2",b.toFixed(1)),C==null||C.setAttribute("cx",t.toFixed(1)),C==null||C.setAttribute("cy",n.toFixed(1))}}renderHologram(){var a,s;let e=this._energy,t=()=>this._holos.map((l,u)=>l.kind==="bin"?this.renderBinCard(l,u):x),n=this._holos.some(l=>l.kind==="module"||l.tag);if(!(n||W("energy_pro")||W("sound")||W("auto_pro")||W("pool")||W("household"))||this.roomId&&!(((a=this.building)==null?void 0:a.settings.roof.hologram)??Ue).device_room||!(this.showEnergy||this.holograms)||!this.holoVisible())return W("household")||n?t():x;let r=this.floorId===null||(((s=this.building)==null?void 0:s.floors.length)??0)<=1,i=!!e&&(e.solar!==null||e.grid!==null||e.battery!==null)&&r;return this._holos.map((l,u)=>l.kind==="module"?this.renderModuleCard(l,u):l.kind==="bin"?this.renderBinCard(l,u):l.kind==="car"?this.renderCarCard(l,u):l.kind==="media"?this.renderMediaCard(l,u):l.kind==="device"?this.renderDeviceCard(l,u):i?this.renderHoloCard(l,u,e):x)}renderBinCard(e,t){let n=e.bin,r=n.lines.length===1?n.lines[0]:null,i=n.lines.map(a=>`${a.name}: ${a.when}`).join(", ");return _`<div class="fp3d-holo fp3d-holo-bin ${n.soon?"":"fp3d-holo-later"} ${r!=null&&r.out?"fp3d-holo-out":""} ${r?"":"fp3d-holo-multi"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="note" aria-label=${i} style="--bin:${n.lines[0].color}">
      ${n.icon?_`<span class="fp3d-holo-sym" aria-hidden="true"
            ><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"
              ><path d=${n.icon==="mail"?"M3.5 6.5h17v11h-17z M3.5 7l8.5 6.5L20.5 7":"M12 21v-9 M12 12c0-4.5 3-7 8-7 0 4.5-3 7-8 7z M12 14.5c0-3.5-2.4-6-6.5-6 0 3.5 2.4 6 6.5 6z M8 21h8"} /></svg
          ></span>`:x}
      ${r?_`<div class="fp3d-holo-body"><b>${r.when}</b><span>${r.name}</span></div>`:_`<div class="fp3d-holo-body fp3d-holo-lines">
            ${n.lines.map(a=>_`<div class="fp3d-holo-line ${a.soon?"":"fp3d-holo-line-later"} ${a.out?"fp3d-holo-line-out":""}" style="--bin:${a.color}"><b>${a.when}</b><span>${a.name}</span></div>`)}
          </div>`}
    </div>`}renderCarCard(e,t){let n=this.hass,r=m=>T(n,m),i=e.car,a=!this.mediaFolded.has(i.spot),s=()=>{this.mediaFolded.has(i.spot)?this.mediaFolded.delete(i.spot):this.mediaFolded.add(i.spot),this.requestUpdate()},l=(m,g,f)=>{n.callService(m,g,{entity_id:f})},u=(m,g)=>m.startsWith("climate.")?l("climate",g?"turn_on":"turn_off",m):l("homeassistant",g?"turn_on":"turn_off",m),c=()=>{if(!i.lock)return;let m=i.lock.startsWith("lock.");if(i.locked){if(!confirm(r("car_unlock_confirm")))return;m?l("lock","unlock",i.lock):l("homeassistant","turn_off",i.lock)}else m?l("lock","lock",i.lock):l("homeassistant","turn_on",i.lock)},d=i.soc===null?"#37e0ff":i.soc>=50?"#4dff80":i.soc>=20?"#ffcc40":"#ff4d40",p=!!i.lock&&/^(lock|input_boolean|switch)\./.test(i.lock),h=!!i.climate&&/^(climate|switch|input_boolean)\./.test(i.climate);return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-car ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}>
            <span>🚗 ${e.name}</span><span class="fp3d-holo-live">${i.charging?`\u26A1 ${r("car_charging_short")}`:i.locked===null?"":i.locked?"\u{1F512}":"\u{1F513}"}</span>
          </div>
          <div class="fp3d-holo-car-main">
            <b style="color:${d}">${i.soc!==null?`${Math.round(i.soc)} %`:"\u2013"}</b>
            <span>${i.range!==null?`${ie(n,i.range,0)} ${i.rangeUnit}`:""}${i.charging&&i.chargingW?` \xB7 ${de(n,i.chargingW)}`:""}</span>
          </div>
          ${i.soc!==null?_`<div class="fp3d-holo-car-bar"><i style="width:${Math.max(2,Math.min(100,i.soc))}%;background:${d}"></i></div>`:x}
          ${a&&!this.ro&&(p||h||i.charge)?_`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">
                ${p?_`<button title=${i.locked?r("car_unlock_btn"):r("car_lock_btn")} @click=${c}>${i.locked?"\u{1F512}":"\u{1F513}"}</button>`:x}
                ${h?_`<button class=${i.climateOn?"fp3d-holo-on":""} title=${r("car_climate")} @click=${()=>u(i.climate,!i.climateOn)}>❄</button>`:x}
                ${i.charge?_`<button class=${i.charging?"fp3d-holo-on":""} title=${r("car_charging")} @click=${()=>u(i.charge,!i.charging)}>⚡</button>`:x}
              </div>`:x}
        </div>
      </div>`}renderModuleCard(e,t){var h,m,g;let n=e.module,r=!this.mediaFolded.has(n.id),i=()=>{this.mediaFolded.has(n.id)?this.mediaFolded.delete(n.id):this.mediaFolded.add(n.id),this.requestUpdate()},a=f=>f?`color:${f}`:"",s=this._low||this.clientWidth<600,l=Uo(n.rows,s),u=Uo(n.cells,s),c=n.chain?Uo(n.chain.items,s):[],d=n.spark&&n.spark.values.length>1&&!(s&&n.spark.minor)?n.spark:null,p=!!(n.chain||(h=n.cells)!=null&&h.length||n.status);return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-mod ${p?"fp3d-holo-mod-wide":""} ${this.cardPing===n.id?"fp3d-holo-ping":""} ${r?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${n.title}>
        <div class="fp3d-holo-sheen"></div>
        <div class="fp3d-holo-scan"></div>
        <div class="fp3d-holo-body">
          <div class="fp3d-holo-head" role="button" tabindex="0" @click=${i}><span>${n.icon} ${n.title}</span><span class="fp3d-holo-live" style=${a(n.liveColor)}>${n.live??""}</span></div>
          ${n.status?_`<div class="fp3d-holo-status" style=${n.status.color?`--st:${n.status.color}`:""}>
                ${n.status.icon?_`<i>${n.status.icon}</i>`:x}<b>${n.status.text}</b>${n.status.since?_`<span>${n.status.since}</span>`:x}
              </div>`:x}
          ${n.main?_`<div class="fp3d-holo-car-main fp3d-holo-mod-main">
                <b style=${a(n.main.color)}>${n.main.text}</b><span>${n.main.sub??""}</span>
                ${n.main.side?_`<em style=${a(n.main.side.color)}><b>${n.main.side.text}</b>${n.main.side.sub?_`<small>${n.main.side.sub}</small>`:x}</em>`:x}
              </div>`:x}
          ${r&&c.length?_`<div class="fp3d-holo-chain">
                  ${c.map((f,b)=>_`${b?_`<s>→</s>`:x}<div><small>${f.label}</small><b style=${a(f.color)}>${f.value}</b></div>`)}
                </div>
                ${n.chain.note?_`<div class="fp3d-holo-chain-note" style=${a(n.chain.noteColor)}>${n.chain.note}</div>`:x}`:x}
          ${r?l.map(f=>_`<div class="fp3d-holo-mrow"><span>${f.label}</span><b style=${a(f.color)}>${f.value}</b>${f.at!==void 0?f.fill?_`<i class="fp3d-holo-mrow-fill"><s style="width:${f.at}%;background:${f.color??"#37e0ff"}"></s></i>`:_`<i><em style="left:${f.at}%;background:${f.color??"#37e0ff"};color:${f.color??"#37e0ff"}"></em></i>`:_`<i class="fp3d-holo-mrow-none"></i>`}</div>`):x}
          ${r&&u.length?_`<div class="fp3d-holo-cells">${u.map(f=>_`<div><small>${f.label}</small><b style=${a(f.color)}>${f.value}</b></div>`)}</div>`:x}
          ${r&&n.hint?_`<div class="fp3d-holo-hint" style=${n.hint.color?`--hint:${n.hint.color}`:""}>${n.hint.text}</div>`:x}
          ${r?(n.lines??[]).map(f=>_`<div class="fp3d-holo-mline">${f}</div>`):x}
          ${r&&d?_`${d.label?_`<div class="fp3d-holo-spark-label">${d.label}</div>`:x}${mf(d.values,d.color??"#ffb347")}`:x}
          ${r&&((m=n.chips)!=null&&m.length)?_`<div class="fp3d-holo-chips">
                ${n.chips.map(f=>_`<div class="fp3d-holo-mline">${f.title}</div>
                    <div class="fp3d-holo-chip-row">${f.items.map(b=>_`<button class=${b.on?"fp3d-holo-on":""} title=${b.title??""} @click=${()=>b.onTap()}>${b.label}</button>`)}</div>`)}
              </div>`:x}
          ${r&&!this.ro&&((g=n.buttons)!=null&&g.length)?_`<div class="fp3d-holo-media-controls fp3d-holo-car-controls">${n.buttons.map(f=>_`<button class=${f.on?"fp3d-holo-on":""} title=${f.title??""} @click=${()=>f.onTap()}>${f.label}</button>`)}</div>`:x}
        </div>
      </div>`}serviceFailed(e,t){let n=t&&typeof t=="object"&&"message"in t?String(t.message):String(t);this.dispatchEvent(new CustomEvent("hass-notification",{detail:{message:`${e}: ${n}`},bubbles:!0,composed:!0}))}renderMediaCard(e,t){var y,S,P;let n=this.hass,r=I=>T(n,I),i=e.media,a=!this.mediaFolded.has(i.id),s=()=>{this.mediaFolded.has(i.id)?this.mediaFolded.delete(i.id):this.mediaFolded.add(i.id),this.requestUpdate()},l=(I,v={})=>{Promise.resolve(n.callService("media_player",I,{entity_id:i.id,...v})).catch(O=>this.serviceFailed(`media_player.${I}`,O))},u={down:I=>I.currentTarget.dataset.pressed=String(I.pointerId),up:I=>v=>{let O=v.currentTarget;O.dataset.pressed===String(v.pointerId)&&(delete O.dataset.pressed,v.stopPropagation(),O.dataset.acted=String(Date.now()),I())},key:I=>v=>{let O=v.currentTarget;Date.now()-Number(O.dataset.acted??0)<700||(O.dataset.acted=String(Date.now()),I())}},c=(y=n.states[i.id])==null?void 0:y.attributes.supported_features,d=I=>typeof c!="number"||(c&I)!==0,p=this.mediaIntent.get(i.id);p&&(p.playing===i.playing||Date.now()-p.at>3e4)&&this.mediaIntent.delete(i.id);let h=((S=this.mediaIntent.get(i.id))==null?void 0:S.playing)??i.playing,m=d(16384)||d(1),g=()=>{this.mediaIntent.set(i.id,{playing:!h,at:Date.now()}),this.requestUpdate(),l(h?"media_pause":d(16384)?"media_play":"media_play_pause")},f=this.mediaVolume.get(i.id);f&&(Math.abs(f.v-i.volume)<=2||Date.now()-f.at>3e4)&&this.mediaVolume.delete(i.id);let b=((P=this.mediaVolume.get(i.id))==null?void 0:P.v)??i.volume,w=(I,v)=>{this.mediaVolume.set(i.id,{v:I,at:Date.now()}),this.requestUpdate(),(v||Date.now()-this.volumeSent>350)&&(this.volumeSent=Date.now(),l("volume_set",{volume_level:I/100}))};return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev fp3d-holo-media ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="group" aria-label=${e.name}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head" role="button" tabindex="0" @click=${s}><span>♪ ${e.name}</span><span class="fp3d-holo-live">${h?`\u25CF ${r("holo_media_playing")}`:r("holo_media_paused")}</span></div>
        <div class="fp3d-holo-track">
          ${i.picture?_`<img class="fp3d-holo-cover" src=${i.picture} alt="" />`:_`<span class="fp3d-holo-cover fp3d-holo-cover-none">♪</span>`}
          <div class="fp3d-holo-titles"><b>${i.title}</b>${i.artist?_`<span>${i.artist}</span>`:x}</div>
        </div>
        ${a&&!this.ro?_`<div class="fp3d-holo-media-controls">
                <button aria-label=${r("previous")} ?disabled=${!d(16)} @pointerdown=${u.down} @pointerup=${u.up(()=>l("media_previous_track"))} @click=${u.key(()=>l("media_previous_track"))}>⏮</button>
                <button aria-label=${r("play_pause")} ?disabled=${h?!d(1):!m} @pointerdown=${u.down} @pointerup=${u.up(g)} @click=${u.key(g)}>${h?"\u23F8":"\u25B6"}</button>
                <button aria-label=${r("next")} ?disabled=${!d(32)} @pointerdown=${u.down} @pointerup=${u.up(()=>l("media_next_track"))} @click=${u.key(()=>l("media_next_track"))}>⏭</button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  .value=${String(b)}
                  aria-label=${r("volume")}
                  @input=${I=>w(Number(I.target.value),!1)}
                  @change=${I=>w(Number(I.target.value),!0)}
                />
                <span class="fp3d-holo-vol">${b} %</span>
              </div>`:x}
      </div>
    </div>`}renderDeviceCard(e,t){let n=this.hass,r=u=>T(n,u),i=!this.holoFolded.has(t),a=this.dayOf(e),s=a&&a.curve.length>1?Pi(a.curve,a.peak):null,l=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()};return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo fp3d-holo-dev ${i?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${l}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>⚡ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${r("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${de(n,e.w??0)}</b><span>${r("holo_dev_now")}</span></div>
        ${i&&a?_`<div class="fp3d-holo-sub">${r("holo_today")} <b>${ie(n,a.kwh,1)} kWh</b> · ${r("holo_peak")} <b>${de(n,a.peak)}</b></div>`:x}
        ${i&&s?Mt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="156" height="30">
              <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7fe8ff" stop-opacity=".5"/><stop offset="1" stop-color="#7fe8ff" stop-opacity="0"/></linearGradient></defs>
              <path d="${s.area}" fill="url(#fp3dHoloG${t})"/>
              <path d="${s.line}" fill="none" stroke="#a8f0ff" stroke-width="2"/>
              <circle cx="${s.endX}" cy="${s.endY}" r="3.5" fill="#fff" stroke="#7fe8ff" stroke-width="2"/>
              <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
            </svg>`:x}
      </div>
    </div>`}dayOf(e){if(!this._rows||!e.dayIds.length)return null;let t=Object.fromEntries(e.dayIds.filter(n=>this._rows[n]).map(n=>[n,this._rows[n]]));return Object.keys(t).length?Yc(t,new Date(this.now())):null}renderHoloCard(e,t,n){var f,b;let r=this.hass,i=w=>T(r,w),a=!this.holoFolded.has(t),s=this.dayOf(e),l=e.kind==="main",u=l&&n.grid!==null&&n.consumption!==null&&n.consumption>0?Math.round(Math.min(100,Math.max(0,(1-Math.max(0,n.grid)/n.consumption)*100))):null,c=s&&s.curve.length>1?Pi(s.curve,s.peak):null,d=new Date(this.now()),p=(d.getHours()+d.getMinutes()/60)/24*220,h=()=>{this.holoFolded.has(t)?this.holoFolded.delete(t):this.holoFolded.add(t),this.requestUpdate()},m=l?n.solar??n.consumption??0:e.w??0,g=l?n.battery!==null||n.soc!==null?{soc:n.soc,w:n.battery}:null:e.battery;return _`<svg class="fp3d-holo-link" data-holo=${t} hidden aria-hidden="true"><line x1="0" y1="0" x2="0" y2="0" /><circle cx="0" cy="0" r="3" /></svg>
      <div class="fp3d-holo ${a?"":"fp3d-holo-min"} ${this._low?"fp3d-holo-plain":""}" data-holo=${t} hidden role="button" tabindex="0" aria-label=${e.name} @click=${h}>
      <div class="fp3d-holo-sheen"></div>
      <div class="fp3d-holo-scan"></div>
      <div class="fp3d-holo-body">
        <div class="fp3d-holo-head"><span>☀ ${e.name}</span><span class="fp3d-holo-live">${this.replay?"\u23EA":`\u25CF ${i("holo_live")}`}</span></div>
        <div class="fp3d-holo-big"><b>${de(r,m)}</b><span>${i(l&&n.solar===null?"holo_house_now":"holo_pv_now")}</span></div>
        ${a?_`${l&&this._plants.length>1?_`<div class="fp3d-holo-plants">${this._plants.map(w=>_`<span>${w.name}</span><b>${de(r,w.w)}</b>`)}</div>`:x}
              ${s?_`<div class="fp3d-holo-sub">${i("holo_today")} <b>${ie(r,s.kwh,1)} kWh</b> · ${i("holo_peak")} <b>${de(r,s.peak)}</b></div>`:x}
              ${c?Mt`<svg class="fp3d-holo-curve" viewBox="0 0 220 44" width="208" height="38">
                    <defs><linearGradient id="fp3dHoloG${t}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#ffd75a" stop-opacity=".5"/><stop offset="1" stop-color="#ffd75a" stop-opacity="0"/></linearGradient></defs>
                    <path d="${c.area}" fill="url(#fp3dHoloG${t})"/>
                    <path d="${c.line}" fill="none" stroke="#ffe27a" stroke-width="2"/>
                    <circle cx="${c.endX}" cy="${c.endY}" r="3.5" fill="#fff" stroke="#ffd75a" stroke-width="2"/>
                    <line x1="0" y1="43.5" x2="220" y2="43.5" stroke="rgba(160,240,255,.35)"/>
                    <line x1="${p}" y1="2" x2="${p}" y2="43" stroke="rgba(160,240,255,.18)" stroke-dasharray="2 3"/>
                  </svg>`:x}
              <div class="fp3d-holo-grid">
                ${g?_`<div class="fp3d-holo-cell fp3d-holo-bat">
                      ${i("holo_battery")}<br /><b>${g.soc!==null?`${Math.round(g.soc)} %`:de(r,Math.abs(g.w??0))}</b>
                      ${g.w!==null&&Math.abs(g.w)>=5?_`<span>${g.w<0?"\u25B2":"\u25BC"} ${de(r,Math.abs(g.w))}</span>`:x}
                    </div>`:x}
                ${l&&n.grid!==null?_`<div class="fp3d-holo-cell ${n.grid<-5?"fp3d-holo-exp":"fp3d-holo-imp"}">
                      ${i("holo_grid")}<br /><b>${de(r,Math.abs(n.grid))}</b> <span>${Math.abs(n.grid)<5?"":i(n.grid<0?"energy_grid_export":"energy_grid_import")}</span>
                    </div>`:x}
                ${l&&n.consumption!==null?_`<div class="fp3d-holo-cell fp3d-holo-house">${i("holo_house")}<br /><b>${de(r,n.consumption)}</b></div>`:x}
                ${l&&this._wallboxW!==null?_`<div class="fp3d-holo-cell fp3d-holo-wb">${i("holo_wallbox")}<br /><b>${de(r,this._wallboxW)}</b></div>`:x}
              </div>
              ${l&&this._meters&&(this._meters.gas!==null||this._meters.water!==null)?_`<div class="fp3d-holo-sub fp3d-holo-meters">
                    ${this._meters.gas!==null?_`<span>🔥 ${i("holo_gas")} <b>${ie(r,this._meters.gas,this._meters.gas<10?2:1)} ${Zd(r,(f=this.building)==null?void 0:f.energy.gas)}</b></span>`:x}
                    ${this._meters.water!==null?_`<span>💧 ${i("holo_water")} <b>${gf(r,this._meters.water,Zd(r,(b=this.building)==null?void 0:b.energy.water))}</b></span>`:x}
                    <span>${i("holo_today_short")}</span>
                  </div>`:x}
              ${u!==null?_`<div class="fp3d-holo-bar"><div style="width:${u}%"></div></div>
                    <div class="fp3d-holo-foot"><span>${i("holo_autarky")}</span><b>${u} %</b></div>`:x}`:x}
      </div>
    </div>`}setAlerts(e){let t=e.map(a=>`${a.kind}:${a.entity}`),n=this.ro?[]:e.filter((a,s)=>!this.seenAlerts.has(t[s]));this.ro||(this.seenAlerts=new Set(t)),t.join()!==this._alerts.map(a=>`${a.kind}:${a.entity}`).join()&&(this._alerts=e);let r=e.some(a=>!a.quiet);if(r&&!this.alertTimer&&!this.ro&&(this.alertTimer=setInterval(()=>!document.hidden&&this.applyTint(),this._low?200:100)),(!r||this.ro)&&this.alertTimer&&(clearInterval(this.alertTimer),this.alertTimer=void 0),!n.length)return;let i=this.directorSettings();if(i!=null&&i.alerts){let a=n[0];if(this.directing.offer({kind:"alert",key:`alert:${a.kind}:${a.entity}`,entity:a.entity},Date.now(),i.hold??er)){this.directorShow(()=>this.jumpTo(a));return}}this.alertJump&&this.jumpTo(n[0])}directorSettings(){var t;let e=(t=this.building)==null?void 0:t.settings.director;return this.director&&!this.ro&&W("camera_cockpit")&&Kd(e)?e:null}direct(){let e=this.directorSettings(),t=this.hass,n=this.building;if(!e||!t||!n){this.directorSrc&&(this.directing=new no,this.directorSrc=null,clearTimeout(this.directorTimer),clearTimeout(this.restTimer),this.directorBack=null);return}let r=Date.now(),i=e.hold??er,a=`${JSON.stringify(e)}|${n.floors.map(u=>u.placements.length).join()}`;if(!this.directorSrc||this.directorSrc.registry!==t.entities||this.directorSrc.building!==n||this.directorSrc.sig!==a){let u=[...new Set(n.floors.flatMap(d=>d.placements.map(p=>p.entity_id)))],c=e.motion??"off";this.directorSrc={registry:t.entities,building:n,sig:a,bells:(e.doorbell?Yd(t,e.doorbell_entity):[]).map(d=>({id:d,camera:Jd(t,d,u,e.doorbell_camera)})),motion:c==="off"?[]:u.filter(d=>d.startsWith("camera.")).flatMap(d=>Ze(t,d).filter(p=>c==="all"||Qr(t,p)==="person").map(p=>({sensor:p,cam:d})))}}let s=[];for(let u of this.directorSrc.bells)this.directing.edge(u.id,t.states[u.id],(c,d)=>ta(c,d,r))&&s.push({kind:"doorbell",key:`bell:${u.id}`,entity:u.id,camera:u.camera});for(let u of e.triggers??[])u.entity&&this.directing.edge(`trigger:${u.entity}`,t.states[u.entity],(c,d)=>Qd(c,d,r))&&s.push({kind:"trigger",key:`trigger:${u.entity}`,entity:u.entity,camera:u.camera});for(let u of this.directorSrc.motion)this.directing.edge(u.sensor,t.states[u.sensor],(c,d)=>(c==null?void 0:c.state)==="off"&&(d==null?void 0:d.state)==="on")&&s.push({kind:"motion",key:`cam:${u.cam}`,entity:u.sensor,camera:u.cam});if(e.appliances){for(let[u,c]of this.appliances)this.directing.stopped(`app:${u}`,c.running,r)&&s.push({kind:"appliance",key:`app:${u}`,entity:u});clearTimeout(this.restTimer),this.directing.resting()&&(this.restTimer=setTimeout(()=>this.direct(),6e4))}let l=["doorbell","trigger","motion","appliance"];s.sort((u,c)=>l.indexOf(u.kind)-l.indexOf(c.kind));for(let u of s)if(this.directing.offer(u,r,i)){this.directorShow(()=>this.directorGo(u));break}}directorShow(e){let t=this.viewer;if(!t)return;this.directorBack||(this.directorBack={floorId:this.floorId,roomId:this.roomId,view:t.getView()}),t.setAutoOrbit(0),e(),clearTimeout(this.directorTimer);let n=this.directing.current;n&&(this.directorTimer=setTimeout(()=>this.directorDue(),Math.max(0,n.until-Date.now())+50))}directorGo(e){let t=this.building;if(t){if(e.camera&&t.floors.some(n=>n.placements.some(r=>r.entity_id===e.camera))){let n=e.camera;this.roomId?(this.fire("room-tap",{floorId:this.floorId,roomId:this.roomId}),setTimeout(()=>this.lookThrough(n),250)):this.lookThrough(n);return}if(e.kind==="appliance"){let n=this.appliances.get(e.key.slice(4));n&&this.goTo({kind:"device",name:"",where:"",floorId:n.floorId,roomId:null,entity:n.entity,icon:null,x:n.x,z:n.z,y:1});return}this.showEntity(e.entity)}}directorDue(){let e=this.directing.due(Date.now()),t=this.directorBack;e&&(this.directorBack=null,!(!e.back||!t)&&(this._through&&(this._through=null),this.floorId!==t.floorId&&this.fire("floor-tap",{floorId:t.floorId}),t.roomId?setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:t.roomId}),60):this.roomId&&t.floorId&&setTimeout(()=>this.fire("room-tap",{floorId:t.floorId,roomId:null}),60),setTimeout(()=>{var n,r;(n=this.viewer)==null||n.flyTo(t.view),(r=this.viewer)==null||r.setAutoOrbit(this.autoOrbit?.06:0)},400)))}jumpTo(e){if(!e.floorId){this.fire("floor-tap",{floorId:null});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),e.roomId&&setTimeout(()=>this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId}),60)}onRoomDoubleTap(e,t){var c;let n=this.building,r=this.hass,i=n==null?void 0:n.floors.find(d=>d.id===e),a=i?ge(i).find(d=>d.id===t):void 0;if(!n||!r||!i||!a||this.ro)return;let s=new Set(_e(r,a.area_id).filter(d=>V(d)==="light"));for(let d of i.placements)V(d.entity_id)==="light"&&U([d.x,d.z],a.points)&&s.add(d.entity_id);for(let d of i.furniture){let p=(c=this.furnitureLinks.get(d.id))==null?void 0:c.entity;p&&Ir(d.type)&&U([d.x,d.z],a.points)&&s.add(p)}let l=[...s].filter(d=>!this.confirmSet.has(d));if(!l.length)return;let u=l.some(d=>{var p;return((p=r.states[d])==null?void 0:p.state)==="on"});r.callService("homeassistant",u?"turn_off":"turn_on",{entity_id:l}),this.roomFlash={roomId:t,until:performance.now()+350},this.applyTint(),setTimeout(()=>{this.roomFlash=null,this.applyTint()},380)}runScene(e){this.ro||(this.hass.callService(e.split(".")[0],"turn_on",{entity_id:e}),this._sceneFired=e,setTimeout(()=>this._sceneFired=null,600))}applyTint(){let e=this.viewer,t=this.building,n=this.hass;if(!e||!t||!n)return;let r=null;if(this.heatMode!=="none"&&this.heatMode!=="values"){let s=this.heatMode,l=nd(n,t,s);!l.size!=!this.heatValues.size&&this.requestUpdate(),this.heatValues=l,r=new Map([...l].map(([u,c])=>[u,td(s,c)]))}let i=new Map;if(this.heatMode==="values")for(let s of t.floors)for(let l of ge(s)){let u=rt(n,s,l,"temperature"),c=rt(n,s,l,"humidity"),d=rt(n,s,l,"co2"),p=[u!==null?`${ie(n,tn(n,u),1)} ${Ve(n)}`:null,c!==null?`${ie(n,c,0)} %`:null,d!==null?`${ie(n,d,0)} ppm`:null].filter(h=>!!h);p.length&&i.set(l.id,p.join(" \xB7 "))}if(e.setRoomInfo(i),this._alerts.length){r??=new Map;let s=this.ro?1:.55+.45*Math.sin(performance.now()/160);for(let l of this._alerts){if(l.quiet)continue;let u=Rc(l).map(c=>c*s);if(l.roomId)r.set(l.roomId,u);else for(let c of t.floors)if(!l.floorId||c.id===l.floorId)for(let d of c.rooms)r.set(d.id,u)}}this.roomFlash&&performance.now()<this.roomFlash.until&&(r??=new Map,r.set(this.roomFlash.roomId,[.9,.95,1]));let a=r?[...r].map(([s,l])=>`${s}:${l.map(u=>u.toFixed(2)).join(",")}`).join(";"):"";a!==this.tintSig&&(this.tintSig=a,e.setRoomTint(r))}furnitureMarkers(e,t,n,r){var w,y,S,P;let i=[],a=[],s=new Map,l=new Map,u=new Set(n),c=W("household"),d=[];this.binHolos=[];let p=new Map(this.scene.filter(I=>I.kind==="glow").map(I=>[I.furnitureId,I]));for(let I of t.floors)for(let v of I.furniture){let O=this.furnitureLinks.get(v.id),K=this.stateFaces(e,v);if(K.length&&s.set(v.id,{color:K[0].color,level:K[0].level,faces:K}),Ir(v.type)){i.push(this.lampMarker(e,I,v,(O==null?void 0:O.entity)??null));let D=v.type==="lamp_ceiling_fan"?tu(v):null;D&&i.push(this.lampMarker(e,I,v,D,!0));continue}if(v.type==="wall_switch"){let D=Zt(v);D.forEach((ue,Pe)=>ue&&l.set(`${v.id}#${Pe}`,`ws:${ue}`));let oe=mo(v);s.set(v.id,{color:[0,0,0],level:0,keys:D.map(ue=>Rr(e,ue)?xf:null),switchRing:oe?Et(e.states[oe]):null});continue}if(v.type==="wall_socket"){let D=typeof v.run_w=="number"&&v.run_w>0?v.run_w:5,oe=null,ue=null,Pe=en(v).map((ce,Fe)=>{ce.entity?l.set(`${v.id}#${Fe}`,`ws:${ce.entity}`):ce.power&&l.set(`${v.id}#${Fe}`,ce.power);let He=ce.power?he(e.states[ce.power]):null;return ce.power&&He!==null&&(oe=(oe??0)+Math.max(0,He),ue??=ce.power,r.has(ce.power)||(r.add(ce.power),a.push({id:ce.entity??ce.power,powerEntity:ce.power,floorId:I.id,x:v.x,z:v.z,power:Math.max(0,He)}))),(ce.entity?Rr(e,ce.entity):(He??0)>D)?kf:null});if(s.set(v.id,{color:[0,0,0],level:0,keys:Pe}),ue!==null&&oe!==null&&!n.has(ue)){let ce=oe;n.add(ue);let Fe=I.rooms.find(He=>He.points.length>=3&&U([v.x,v.z],He.points));i.push({id:ue,floorId:I.id,roomId:(Fe==null?void 0:Fe.id)??null,x:v.x,z:v.z,y:iu(v)+fe(I,v),icon:sn(v.icon||"power-socket-eu"),name:v.name||Me(e,v.type),ownName:v.name||void 0,showName:!!v.show_name,text:de(e,ce),active:ce>D,unavailable:!1,glow:null,furnitureId:v.id,show:v.marker??void 0,fromFurniture:!0})}continue}let A=p.get(v.id);A&&s.set(v.id,{color:A.color,level:A.level});let M=(v.type==="plant"||pi(v.type))&&!!v.moisture&&v.moisture!=="none";if(v.type==="waste_bin"||v.type==="mailbox"||M){let D=c?this.householdState(e,I,v):null;D!=null&&D.screen&&s.set(v.id,D.screen),D!=null&&D.marker&&i.push(D.marker);let oe=v.type==="waste_bin"?v.bin_source:v.type==="mailbox"?v.entity:v.moisture;if(c&&typeof oe=="string"&&oe!=="none"&&l.set(v.id,`hh:${oe}#${v.id}`),D!=null&&D.item&&d.push(D.item),!M)continue}if(c){let D=yc(v,e);D.length&&!s.has(v.id)&&s.set(v.id,{color:[1,.8,.2],level:.8,faces:[{part:"top",color:[1,.8,.2],level:.8}]});for(let oe of D){let ue=v.name||Me(e,v.type);d.push({icon:"wrench-outline",text:oe===v.service?T(e,"hh_service",{name:ue}):T(e,"hh_service2",{name:ue,what:Q(e,oe)}),entity:oe})}(v.type==="fridge"||v.type==="fridge_smart")&&Ro(v,e)&&(s.set(v.id,{color:[.45,.85,1],level:1,faces:[{part:"band",color:[.45,.85,1],level:1}]}),d.push({icon:"fridge-alert-outline",text:T(e,"hh_fridge_open",{name:v.name||Me(e,v.type)}),entity:ht(v)[0]??null}))}let E=v.type==="parking"&&W("auto_pro")&&!!v.car?On(e,v):null,C=v.type==="washer"||v.type==="dryer"||v.type==="dishwasher",j=v.type==="home_battery"?v.soc:v.type==="wallbox"?v.status:v.type==="parking"&&E?((w=v.car)==null?void 0:w.device)??E.entities.soc:c&&C?v.remaining??null:null,N=j&&j!=="none"?j:null,J=v.extra&&v.extra!=="none"&&e.states[v.extra]?v.extra:null,F=J?$e(e,e.states[J]):"",B=D=>F?D?`${D} \xB7 ${F}`:F:D,q=O??(N||J?{entity:null,power:null}:void 0);if(!q)continue;let ne=v.type==="home_battery"?N??q.entity??q.power:q.entity??q.power??N??J;l.set(v.id,ne);let H=q.entity?e.states[q.entity]:void 0,se=v.type==="water_heater"?ws(e,Rn(e,{entity:q.entity})):null,G=v.type==="access_point"?rs(e,Cn(e,{entity:q.entity})):null,le=v.type==="meter"?t.energy.grid_invert&&!v.export:v.type==="home_battery"?t.energy.battery_invert&&!v.charge:!1,be=q.power?he(e.states[q.power],le):null,Vt=v.type==="home_battery"&&v.charge&&v.charge!=="none"?v.charge:v.type==="meter"&&v.export&&v.export!=="none"?v.export:null,Nt=Vt?he(e.states[Vt]):null;Nt!==null&&(be=Math.max(0,be??0)-Math.max(0,Nt)),q.power&&be!==null&&!r.has(q.power)&&(r.add(q.power),a.push({id:ne,powerEntity:q.power,floorId:I.id,x:v.x,z:v.z,power:Math.max(0,be),wallbox:v.type==="wallbox"||void 0}));let vn=typeof v.run_w=="number"&&v.run_w>0?v.run_w:10,Re=typeof v.run_w=="number"&&v.run_w>0&&be!==null&&be<=v.run_w,bt=(be??0)>vn||(H==null?void 0:H.state)==="on"||(H==null?void 0:H.state)==="running"||Or(H)&&Ge(H);C&&this.appliances.set(v.id,{floorId:I.id,x:v.x,z:v.z,entity:q.entity??q.power??v.id,running:bt});let Ye=null;if(c&&C){let D=v.remaining&&v.remaining!=="none"?e.states[v.remaining]:void 0,oe=_i(D),ue=bt||!q.power&&!q.entity&&(oe??0)>0,Pe=ht(v),ce=Oe=>Pe.some(or=>{let wn=e.states[or];return!!(wn!=null&&wn.last_changed)&&Date.parse(wn.last_changed)>Oe}),Fe=this.finished.update(v.id,ue,ce),He=v.name||(q.entity?Q(e,q.entity):Me(e,v.type));ue?(bt||s.set(v.id,ru(v.type)),oe!==null&&!yi(H,q.power?be:null,vn)&&(Ye=T(e,"hh_left",{t:vc(oe)}),d.push({icon:"timer-outline",text:`${He}: ${Ye}`,entity:v.remaining??q.entity}))):(vi(H)||vi(D)||Fe)&&(Ye=T(e,"hh_done"),s.set(v.id,{color:[.35,1,.55],level:.9,faces:[{part:"top",color:[.35,1,.55],level:.9}]}),d.push({icon:"check-circle-outline",text:T(e,"hh_finished",{name:He}),entity:q.entity??q.power}))}if(E&&bn(e,v)){let D=[];if(E.soc!==null){let oe=E.soc>=50?[.3,1,.5]:E.soc>=20?[1,.8,.25]:[1,.3,.25];D.push({part:"band",color:oe,level:E.charging?1:.6})}if(E.locked===!1&&D.push({part:"lights",color:[1,.42,.02],level:1}),E.climateOn){let oe=E.entities.climate?e.states[E.entities.climate]:void 0,ue=!!oe&&(oe.attributes.hvac_action==="cooling"||oe.state==="cool");D.push({part:"cabin",color:ue?[.45,.8,1]:[1,.55,.22],level:.35})}D.length&&s.set(`${v.id}:vehicle`,{color:D[0].color,level:D[0].level,faces:D})}if(v.type==="radiator"&&(H&&V(H.entity_id)==="climate"||v.heat_sensor)){let D=H&&V(H.entity_id)==="climate"?H.attributes:null;if(el(e,v.heat_sensor)??(D==null?void 0:D.hvac_action)==="heating"){let ue=D&&typeof D.temperature=="number"&&typeof D.current_temperature=="number"?D.temperature-D.current_temperature:1;s.set(v.id,{color:[1,.42,.1],level:Math.min(1,.45+.25*Math.max(0,ue))})}else p.has(v.id)&&s.delete(v.id)}else if(G){let D=is(G);D&&s.set(v.id,{color:D,level:1,apRing:D})}else if(se){let D=ys(v);se.on&&s.set(v.id,{color:se.heating?[1,.45,.12]:[.25,.85,1],level:se.heating?1:.55,plain:!0,dots:{n:D,lit:Math.max(0,Math.min(D,Math.round(se.showers??0))),color:[.35,.9,1]}})}else if(v.type==="ac_unit"&&H&&V(H.entity_id)==="climate"){let D=nl(H);D&&s.set(v.id,D)}else if((v.type==="washer"||v.type==="dryer"||v.type==="dishwasher")&&bt)s.set(v.id,ru(v.type));else if(v.type==="stove"||kr(v.type)){let D=tl(H,bt);D>0&&s.set(v.id,{color:[1,.05,.01],level:D,faces:[{part:"burners",color:[1,.05,.01],level:D}]})}let qt=we(v.type),yn=!!qt&&!qt.light&&qt.parts.some(D=>D.glow);if(H&&yn&&W("sound")&&V(H.entity_id)==="media"&&H.state==="playing"&&!yo(v.type)){let D=typeof H.attributes.volume_level=="number"?H.attributes.volume_level:.5;s.set(v.id,{color:Wr(H)??[.22,.88,1],level:.5+.5*D,ring:!0,plain:!0})}if(H&&yo(v.type)&&!kr(v.type)&&!(uo(v.type)&&V(H.entity_id)==="cover")){let D=W("screens"),oe=V(H.entity_id)==="light"?Et(H):null,ue=V(H.entity_id)==="media"&&["playing","on","paused","idle"].includes(H.state),Pe=D&&V(H.entity_id)==="media"?Wr(H):oe?oe.color:Ge(H)||ue?[.22,.88,1]:null,ce=D&&V(H.entity_id)==="media"?H.attributes.entity_picture??null:null;Pe&&s.set(v.id,{color:Pe,level:H.state==="playing"?1:.6,picture:ce,ring:yn&&W("sound")&&H.state==="playing"})}if(u.has(ne))continue;n.add(ne);let oo=q.entity?V(q.entity):null,Wt=I.rooms.find(D=>D.points.length>=3&&U([v.x,v.z],D.points)),_t=H&&ds(v.type)&&H.entity_id.startsWith("water_heater.")?Pf(e,H):null;i.push({id:ne,floorId:I.id,roomId:(Wt==null?void 0:Wt.id)??null,x:v.x,z:v.z,y:iu(v)+fe(I,v),icon:v.icon?sn(v.icon):_t?sn("water-boiler"):ln(oo??"switch"),name:v.name||(G&&q.entity?co(e,q.entity):q.entity?Q(e,q.entity):Me(e,v.type)),ownName:v.name||void 0,showName:!!v.show_name,text:B(Ye??(G?this.apText(e,G):se?this.heaterText(e,se):E?this.carText(e,E,!!H&&!No.has(H.state.toLowerCase())):v.type==="home_battery"?this.batteryText(e,N,be):v.type==="wallbox"?this.wallboxText(e,N,be):v.type==="meter"?this.meterText(e,be):_t?_t.text:H?$e(e,H):Re?T(e,"pin_standby"):be!==null?de(e,Math.max(0,be)):"")),active:Ye?!0:G?G.status==="up":se?se.heating:E?E.charging:_t?_t.on:H?Ge(H):(be??0)>(typeof v.run_w=="number"&&v.run_w>0?v.run_w:5),unavailable:H?X(H):!1,glow:null,furnitureId:v.id,energyDevice:v.type==="inverter"||v.type==="home_battery"||v.type==="wallbox"||v.type==="meter"||!!E||!!J,...Re?{standby:Re}:{},show:v.marker??(E||Ye?"always":void 0),fromFurniture:!0})}let h=t.settings.household;if(h!=null&&h.bin_next_only||typeof(h==null?void 0:h.bin_days)=="number"){let I=fc(this.binHolos.filter(v=>!v.icon),{nextOnly:h.bin_next_only,ahead:h.bin_days});this.binHolos=this.binHolos.filter(v=>v.icon||I.has(v.id))}let m=(y=t.settings.household)==null?void 0:y.notes,g=m&&m!=="none"?e.states[m]:void 0;if(c&&g&&!X(g)&&g.state.trim()){let I=g.state.split(/\s*(?:\||\n|;)\s*/).map(v=>v.trim()).filter(Boolean).slice(0,8);d.unshift(...I.map(v=>({icon:"pin-outline",text:v,entity:m})))}this._household=d.filter((I,v)=>d.findIndex(O=>O.text===I.text)===v),this.cameraScreens=0;let f=Nr(e,t.floors),b=W("screens");for(let I of t.floors)for(let v of I.furniture){if(!b||!((S=v.pictures)!=null&&S.length)||!yo(v.type)||v.type==="fridge_smart"&&((P=f.get(v.id))!=null&&P.right))continue;let O=v.pictures.find(M=>al(e,M));if(!O)continue;let K=this.pictureUrl(O.image),A=v.screen_bg==="white"?[.92,.94,1]:[.08,.08,.1];K&&s.set(v.id,{color:A,level:1,picture:K,plain:!0})}for(let I of p.values())I.top?s.set(I.furnitureId,{color:I.color,level:I.level,faces:[{part:"strata",color:I.color,top:I.top,level:I.level}]}):I.band&&s.set(I.furnitureId,{color:I.color,level:I.level,faces:[{part:"band",color:I.color,level:I.level}]});return this.watchCameras(this.cameraScreens>0||!!this._through||this.cameraWall||this.projecting),{markers:i,consumers:a,screens:s,targets:l}}watchHousehold(e,t){let n=t.floors.flatMap(l=>l.furniture).filter(l=>l.type==="waste_bin"||l.type==="mailbox"),r=W("household")&&n.length>0&&!this.replay,i=r?cc(t.floors):[],a=i.join(",");if(!r){clearInterval(this.householdTimer),this.householdTimer=void 0,this.pickupKey="";return}let s=async()=>{i.length&&(this.pickups=await fi(this.hass??e,i)),this.syncDevices(!0)};(a!==this.pickupKey||!this.householdTimer)&&(this.pickupKey=a,clearInterval(this.householdTimer),this.householdTimer=setInterval(()=>!document.hidden&&void s(),6e5),i.length&&fi(e,i).then(l=>{this.pickups=l,this.syncDevices(!0)}))}householdState(e,t,n){var l,u,c,d;let r=p=>{let h=parseInt(p.slice(1),16);return[(h>>16&255)/255,(h>>8&255)/255,(h&255)/255]};if(n.type==="waste_bin"){let p=typeof n.bin_source=="string"&&n.bin_source!=="none"?n.bin_source:null;if(!p)return null;let h=mi(n,e,this.pickups,new Date,{from:(u=(l=this.building)==null?void 0:l.settings.household)==null?void 0:u.bin_from,until:(d=(c=this.building)==null?void 0:c.settings.household)==null?void 0:d.bin_until});if(!h)return null;let m=h.days===0?T(e,"bin_today"):h.days===1?T(e,"bin_tomorrow"):T(e,"bin_in_days",{n:h.days}),g=r(lc(n)[1]),f=Math.max(...g),w=f-Math.min(...g)<.12?[.92,.95,1]:g.map(v=>Math.min(1,v/Math.max(.001,f)*1.05)),y=n.name||T(e,`bin_kind_${n.bin_kind??"rest"}`),S=gi(n,e),P=`#${w.map(v=>Math.round(v*255).toString(16).padStart(2,"0")).join("")}`,I=S?T(e,"bin_out_done"):m;return this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:fe(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:y,color:P,when:I,soon:h.days<=1&&!S,days:h.days,out:S}),{item:h.days<=1?{icon:S?"check-circle-outline":"trash-can-outline",text:`${y}: ${I}`,entity:p,hot:h.glow&&!S}:void 0}}if(n.type!=="mailbox"){let p=bi(n,e),h=[1,.55,.12],m=n.name||Me(e,n.type);return p?(this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:fe(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:m,color:"#ff8c1f",when:T(e,"hh_thirsty"),soon:!0,days:-1,icon:"plant"}),{screen:{color:h,level:.9,faces:[{part:"band",color:h,level:.9}]},item:{icon:"watering-can-outline",text:T(e,"hh_plant",{name:m}),entity:n.moisture??null,hot:!0}}):null}let i=typeof n.entity=="string"&&n.entity!=="none"?n.entity:null;if(!i)return null;let a=gc(n,e),s=[1,.62,.15];return a&&this.binHolos.push({id:n.id,floorId:t.id,x:n.x,z:n.z,y:fe(t,n)+n.h,r:Math.max(n.w,n.d)/2,name:n.name||Me(e,n.type),color:"#ffb547",when:T(e,"mailbox_post"),soon:!0,days:-1,icon:"mail"}),{screen:a?{color:s,level:1,faces:[{part:"top",color:s,level:1},{part:"band",color:s,level:.8}]}:void 0,item:a?{icon:"email-alert-outline",text:n.name?`${n.name}: ${T(e,"mailbox_post")}`:T(e,"mailbox_post"),entity:i,hot:!0}:void 0}}robotPaths(e,t){var i,a;let n=this.replay;if(!n)return[];let r=[];for(let s of t.floors){let l=s.rooms.filter(u=>u.points.length>=3);for(let u of s.furniture){if(!Yt(u.type))continue;let c=((a=(i=this.furnitureLinks)==null?void 0:i.get(u.id))==null?void 0:a.entity)??null;if(!c)continue;let d=n.robotRooms(c,Dn(e,c,u.room_sensor)),p=[];for(let h of d){let m=Br(e,l,h),g=m?Te(m.points):null,f=p[p.length-1];g&&(!f||f[0]!==g[0]||f[1]!==g[1])&&p.push([g[0],g[1]])}p.length&&r.push({floorId:s.id,points:p})}}return r}trailNow(e,t){let n=this.now(),r=Xn(e,t),i=this.replay?this.replay.rows(r.map(s=>s.entity),n-Jn,n):this.trailRows,a=r.map(s=>{let l=e.states[s.entity];return{entity:s.entity,state:l==null?void 0:l.state,lastChanged:l!=null&&l.last_changed?Date.parse(l.last_changed):void 0}});return ld(r,sd(i,a,n),n)}watchTrail(){if(clearInterval(this.trailTimer),this.trailTimer=void 0,this.trail&&!W("camera_cockpit")&&(this._proHint="camera_cockpit"),!this.trail||!W("camera_cockpit")||this.replay){this.trailRows={},this.syncDevices(!0);return}let e=async()=>{let t=this.hass,n=this.building;if(!t||!n||document.hidden)return;let r=Xn(t,n).map(i=>i.entity);if(r.length){try{let i=await t.callWS({type:"history/history_during_period",start_time:new Date(Date.now()-Jn).toISOString(),entity_ids:r,minimal_response:!0,no_attributes:!0,significant_changes_only:!1});this.trailRows=i??{}}catch{this.trailRows={}}this.syncDevices(!0)}};e(),this.trailTimer=setInterval(()=>{e()},6e4)}projecting=!1;projectedCameras(e,t){let n=[];if(bl()){let r=new Set(t.floors.flatMap(i=>i.placements.map(a=>a.entity_id)).filter(i=>V(i)==="camera"));for(let i of r){let a=e.states[i],s=a==null?void 0:a.attributes.entity_picture;!s||X(a)||n.push({id:i,url:s.startsWith("data:")?s:`${s}${s.includes("?")?"&":"?"}fp3d=${this.cameraTick}`})}}return this.projecting=n.length>0,n}watchCameras(e){e&&!this.cameraTimer?this.cameraTimer=setInterval(()=>{document.hidden||(this.cameraTick++,this.syncDevices(!0),(this._through||this.cameraWall)&&this.requestUpdate())},this._low?1e4:5e3):!e&&this.cameraTimer&&(clearInterval(this.cameraTimer),this.cameraTimer=void 0)}pictureUrl(e){if(/^https?:\/\//.test(e))return e;if(e.startsWith("camera:")){let t=this.hass.states[e.slice(7)],n=t==null?void 0:t.attributes.entity_picture;return!n||X(t)?null:(this.cameraScreens++,n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`)}return this.pictureUrls.has(e)?this.pictureUrls.get(e)??null:(this.pictureUrls.set(e,null),ts(this.hass,e).then(t=>{this.pictureUrls.set(e,t),this.syncDevices(!0)},()=>{}),null)}robotObstacles(e,t){let n=new Set(["rug","worktop","table","table_round","coffee_table","chair","office_chair","stool","bar_stool","bench","desk","robot_vacuum","parking","stairwell","radiator","ac_unit","tv_wall","kitchen_wall","led_strip"]);return e.furniture.filter(r=>{if(n.has(r.type)||r.type.startsWith("lamp_")&&r.type!=="lamp_floor"&&r.type!=="lamp_uplight"||r.h<.04||fe(e,r)>.12)return!1;let i=we(r.type);return i&&(i.hole||/table|desk|chair|stool|bench|rug|carpet|mat$/.test(r.type))?!1:U([r.x,r.z],t)||St(r).some(a=>U(a,t))}).map(r=>St(r))}robotInfos(e,t){var r,i;let n=[];for(let a of t.floors)for(let s of a.furniture){if(!Yt(s.type))continue;let l=((r=this.furnitureLinks.get(s.id))==null?void 0:r.entity)??null,u=l?(i=e.states[l])==null?void 0:i.state:void 0,c=Dr(u)?"cleaning":u==="returning"?"returning":u==="error"?"error":u==="docked"||!u?"docked":"idle",d=s.rotation*Math.PI/180,p=ot(s.type),h=s.d*(p?cs(we(s.type)):.14),m=[s.x-Math.sin(d)*h,s.z+Math.cos(d)*h],g=a.rooms.filter(y=>y.points.length>=3),b=(c==="cleaning"?pl(e,g,l,Dn(e,l,s.room_sensor)):null)??g.find(y=>U(m,y.points)),w=c==="cleaning"&&b?this.robotObstacles(a,b.points):[];n.push({id:s.id,floorId:a.id,rest:m,restHeading:-d,mode:c,room:(b==null?void 0:b.points)??null,roomId:(b==null?void 0:b.id)??null,obstacles:w,...p?{model:{type:s.type,w:s.w,d:s.d,h:s.h}}:{}})}return n}batteryText(e,t,n){var a;let r=t?Number((a=e.states[t])==null?void 0:a.state):Number.NaN,i=[];return Number.isFinite(r)&&i.push(`${ie(e,r,0)} %`),n!==null&&Math.abs(n)>=10&&i.push(`${n<0?"\u25B2":"\u25BC"} ${de(e,Math.abs(n))}`),i.join(" \xB7 ")}meterText(e,t){return t===null?"":Math.abs(t)<5?de(e,0):`${T(e,t<0?"energy_grid_export":"energy_grid_import")} ${de(e,Math.abs(t))}`}wallboxText(e,t,n){let r=t?e.states[t]:void 0,i=String((r==null?void 0:r.state)??"").toLowerCase(),a=(n??0)>50||/charg|laden|lädt/.test(i),s=r!=null&&r.entity_id.startsWith("binary_sensor.")?i==="on":/connect|plug|ready|angesteckt|verbunden|wait|paused|suspend/.test(i),l=a?T(e,"wallbox_charging"):s?T(e,"wallbox_plugged"):r&&!X(r)&&!r.entity_id.startsWith("binary_sensor.")?$e(e,r):"",u=n!==null&&n>50?de(e,n):"";return[l,u].filter(Boolean).join(" \xB7 ")}stateFaces(e,t){let n=[],r=t.state_entity&&t.state_entity!=="none"&&t.state_entity2&&t.state_entity2!=="none"?[[t.state_entity,t.state_split==="top_bottom"?"bottom":"left"],[t.state_entity2,t.state_split==="top_bottom"?"top":"right"]]:[[t.state_entity,"all"]];for(let[i,a]of r){if(!i||i==="none")continue;let s=e.states[i];if(!s||X(s)||!(Ge(s)||s.state==="home"||s.state==="occupied"||s.state==="on"))continue;let u=V(i)==="light"?Et(s):null;n.push({part:a,color:u?u.color:[1,.71,.28],level:u?u.level:.85})}return n}carText(e,t,n){let r=a=>T(e,a);if(n||t.away!==null){let a=t.away?` \xB7 ${t.away}`:"";return`${r("car_away")}${a}`}let i=[];return t.soc!==null&&i.push(`${ie(e,t.soc,0)} %`),t.range!==null&&i.push(`${ie(e,t.range,0)} ${t.rangeUnit}`),t.charging?i.push(t.chargingW!==null?`\u26A1 ${de(e,t.chargingW)}`:`\u26A1 ${r("car_charging_short")}`):t.plugged&&i.push("\u{1F50C}"),t.locked!==null&&i.push(t.locked?"\u{1F512}":"\u{1F513}"),i.join(" \xB7 ")}ceilingAt(e,t,n){var l;let i=((l=e.rooms.find(u=>u.ceiling_height&&u.points.length>=3&&U([t,n],u.points)))==null?void 0:l.ceiling_height)||e.height,a=this.building;if(!a||!Zr(a).some(u=>jl(u,e.elevation+i)&&ei(u,e.elevation)))return i;let s=Vl(a,t,n,e.elevation);return s===null?i:Math.max(.5,Math.min(i,s-e.elevation))}apOf(e){var t,n;if(!this.hass||!this.building)return null;for(let r of this.building.floors)for(let i of r.furniture){if(i.type!=="access_point")continue;let a=((n=(t=this.furnitureLinks)==null?void 0:t.get(i.id))==null?void 0:n.entity)??i.entity;if(a===e)return Cn(this.hass,{entity:a})}return null}apText(e,t){if(t.status==="down")return T(e,"ap_down");if(t.status==="busy")return T(e,"ap_busy");let n=[];return t.clients!==null&&n.push(T(e,t.clients===1?"ap_client":"ap_clients",{n:Math.round(t.clients)})),t.cpu!==null&&n.push(`CPU ${ie(e,t.cpu,0)} %`),n.join(" \xB7 ")||T(e,"ap_up")}heaterPower(e){var t,n;if(!this.hass||!this.building||!e.startsWith("water_heater."))return null;for(let r of this.building.floors)for(let i of r.furniture){if(i.type!=="water_heater")continue;let a=((n=(t=this.furnitureLinks)==null?void 0:t.get(i.id))==null?void 0:n.entity)??i.entity;if(a===e)return Rn(this.hass,{entity:a}).power}return null}heaterText(e,t){if(!t.on)return T(e,"state_off");let n=Ve(e),r=a=>`${ie(e,a,0)} ${n}`,i=[t.current!==null?t.target!==null&&t.heating?`${r(t.current)} \u2192 ${r(t.target)}`:r(t.current):null];return t.showers!==null&&i.push(T(e,t.showers===1?"heater_shower":"heater_showers",{n:Math.round(t.showers)})),t.remaining!==null&&i.push(T(e,"heater_left",{min:Math.round(t.remaining)})),i.filter(Boolean).join(" \xB7 ")}lampMarker(e,t,n,r,i=!1){let a=r?e.states[r]:void 0,s=we(n.type),l=Ls[n.type]??(s==null?void 0:s.light)??"floor",u=t.rooms.some(y=>y.points.length>=3&&U([n.x,n.z],y.points)),c=l==="strip"&&!u?Je(t,n.x,n.z)+(n.mount_y??0):n.mount_y!=null&&!s?n.mount_y:s||l==="wall"||l==="strip"?fe(t,n):l==="table"?fo(t,n.x,n.z,n.h):l==="bollard"||l==="garden"?Je(t,n.x,n.z):0,d=t.rooms.find(y=>y.points.length>=3&&U([n.x,n.z],y.points)),p=this.ceilingAt(t,n.x,n.z),h=(s?s.mount==="ceiling":["ceiling","ceiling_fan","downlight","spot","panel","pendant"].includes(l))&&n.mount_y==null,m=h?t.height-p:0,g=s&&h?Math.max(0,c-m):c,f=po.has(n.type)&&n.mount_y!=null?Math.min(t.height,n.mount_y+ho(n.type,n.h)):Math.abs(m)>.01?p:void 0,b=f??t.height,w=s?s.mount==="ceiling"?Math.max(.5,g-.15):g+n.h+.2:{ceiling:b-.3,ceiling_fan:b-.45,downlight:b-.25,spot:b-.35,panel:b-.25,pendant:Math.max(.6,b-n.h-.25),floor:g+n.h+.25,uplight:g+n.h+.25,table:g+n.h+.2,wall:g+n.h+.2,strip:n.upright?g+n.w+.15:Math.max(.3,g-.2),bollard:g+n.h+.25,garden:g+n.h+.25}[l];return{id:r??`lamp:${n.id}`,floorId:t.id,roomId:(d==null?void 0:d.id)??null,x:n.x,z:n.z,y:w,icon:ln(i?"fan":"light"),name:n.name||(r?Q(e,r):Me(e,n.type)),text:a?$e(e,a):"",active:a?Ge(a):!1,unavailable:a?X(a):!1,glow:i?null:a?Jr(ol(Et(a,n.color_entity&&n.color_entity!=="none"?e.states[n.color_entity]:void 0),n.only_color),n.glow_scale):null,lamp:l,rotation:n.rotation,mirror:!!n.mirror,roll:n.tilt??0,upright:!!n.upright,rise:n.rise??0,size:[n.w,n.d,n.h],base:g,top:f,pickable:!!r,furnitureId:i?`${n.id}:fan`:n.id,fanBlades:i||void 0,fanSpeed:i?wf(a):void 0,fanStatic:n.type==="lamp_ceiling_fan"&&!i&&!tu(n)?!0:void 0,pack:s?n.type:null,lightY:s?s.mount==="ceiling"?g:g+n.h*.85:void 0,effect:!!a&&a.state==="on"&&typeof a.attributes.effect=="string"&&!/^(none|off|solid|static|normal|white|colou?r|rgb|manual|default|-|)$/i.test(a.attributes.effect.trim()),variant:n.variant,show:n.marker??void 0,fromFurniture:!0}}inOpenRoom(e){var r;if(!this.roomId)return!1;if(e.roomId)return e.roomId===this.roomId;let t=(r=this.building)==null?void 0:r.floors.find(i=>i.id===e.floorId),n=t?ge(t).find(i=>i.id===this.roomId):void 0;return!!n&&U([e.x,e.z],n.points)}showPin(e){if(this.furnish&&!e.fromFurniture)return!0;if(e.show==="never"||this.markerMode==="none")return!1;if(e.show==="always"||this.markerMode==="all")return!0;if(this.markerMode==="room")return this.inOpenRoom(e);if(e.lamp||e.model)return!1;let t=V(e.id);return t==="light"?!1:e.fromFurniture?(e.power??0)>=1||t==="media"&&e.active||!!e.energyDevice&&!!e.text:!0}openingTargets(){let e=new Map;for(let[t,n]of this.openingLinks??[]){if(n.lock&&!n.cover||jr(n.cover)){e.set(t,`opening:${t}`);continue}let r=n.cover??n.contact??n.tilt;r&&e.set(t,r)}return e}scheduleThumbs(e=600){var r;clearTimeout(this.thumbTimer);let t=((r=this.building)==null?void 0:r.floors.filter(i=>i.rooms.length).length)??0;if(!this.floorThumbs||t<2){this._thumbs=[];return}let n=Math.max(e,this.thumbsAt+(this._low?8e3:4e3)-Date.now());this.thumbTimer=setTimeout(()=>{if(!(!this.viewer||this.dimmed&&this._thumbs.length)){if(document.hidden){this.scheduleThumbs(3e3);return}this.thumbsAt=Date.now(),this._thumbs=this.viewer.floorThumbnails(this.narrowThumbs?104:150,this.narrowThumbs?78:112)}},n)}get narrowThumbs(){return this._narrowStage}renderThumbs(){if(!this._thumbs.length||!this.building)return x;let e=new Map(this.building.floors.map(i=>[i.id,i.name])),t=[...this._thumbs].sort((i,a)=>{var s,l;return(((s=this.building.floors.find(u=>u.id===a.floorId))==null?void 0:s.elevation)??0)-(((l=this.building.floors.find(u=>u.id===i.floorId))==null?void 0:l.elevation)??0)}),n=this._thumbsCompact,r=()=>{this._thumbsCompact=!n;try{localStorage.setItem("neonplan3d.thumbs_compact",this._thumbsCompact?"1":"0")}catch{}};return _`<nav class="fp3d-thumbs ${this.narrowThumbs?"fp3d-thumbs-small":""} ${n?"fp3d-thumbs-compact":""}" aria-label=${T(this.hass,"floors")}>
      <button class="fp3d-thumbs-fold" title=${T(this.hass,n?"thumbs_show":"thumbs_fold")} aria-label=${T(this.hass,n?"thumbs_show":"thumbs_fold")} @click=${r}>${n?"\u25B8":"\u25C2"}</button>
      <button class="fp3d-thumb fp3d-thumb-house" aria-pressed=${this.floorId===null} @click=${()=>this.fire("floor-tap",{floorId:null})}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 11l9-7 9 7M5 10v10h14V10" /></svg>
        <span>${T(this.hass,"all_floors")}</span>
      </button>
      ${t.map(i=>_`<button class="fp3d-thumb" aria-pressed=${this.floorId===i.floorId} @click=${()=>this.fire("floor-tap",{floorId:i.floorId})}>
          ${n?x:_`<img src=${i.url} alt="" />`}
          <span>${e.get(i.floorId)??""}</span>
        </button>`)}
    </nav>`}onDeviceHold(e,t,n){if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!0);if(this.ro){this.onDeviceTap(e,t,n);return}let r=this.apOf(e);if(r){!r.restart||!this.hass?xe(this,e):confirm(T(this.hass,"ap_restart_confirm",{name:co(this.hass,e)}))&&this.hass.callService("button","press",{entity_id:r.restart});return}if(W("auto_pro")&&this.hass&&this.building)for(let a of this.building.floors)for(let s of a.furniture){if(s.type!=="parking"||!s.car)continue;let l=On(this.hass,s);if([s.entity,s.car.device,...Object.values(l.entities)].filter(c=>!!c&&c!=="none").includes(e)){this._menu={entity:e,x:t,y:n,car:l};return}}let i=V(e);i==="light"||i==="cover"||i==="switch"||i==="fan"||i==="lock"||i==="camera"?this._menu={entity:e,x:t,y:n}:xe(this,e)}onDeviceSwipe(e,t,n,r,i){var l;let a=(l=this.hass)==null?void 0:l.states[e];if(this.ro)return!1;if(t==="start"){if(!a||X(a)||this.confirmSet.has(e))return!1;let u=V(e);if(u==="light"&&Li(a).dim){let c=a.state==="on"?typeof a.attributes.brightness=="number"?Math.round(a.attributes.brightness/2.55):100:0;return this._swipe={entity:e,kind:"light",start:c,value:c,x:r,y:i},!0}if(u==="cover"&&Oi(a)){let c=a.attributes.current_position;return this._swipe={entity:e,kind:"cover",start:c,value:c,x:r,y:i},!0}return!1}let s=this._swipe;if(!s||s.entity!==e)return!1;if(t==="move"){let u=Math.round(Math.min(100,Math.max(0,s.start-n/220*100)));u!==s.value&&(this._swipe={...s,value:u});let c=performance.now();c-this.swipeSent>350&&(this.swipeSent=c,this.applySwipe())}else this.applySwipe(),clearTimeout(this.swipeTimer),this.swipeTimer=setTimeout(()=>this._swipe=null,700);return!0}applySwipe(){let e=this._swipe;!e||!this.hass||(e.kind==="light"?e.value<=0?this.hass.callService("light","turn_off",{entity_id:e.entity}):this.hass.callService("light","turn_on",{entity_id:e.entity,brightness_pct:e.value}):this.hass.callService("cover","set_cover_position",{entity_id:e.entity,position:e.value}))}goTo(e){if(this._find=null,e.kind==="room"){this.fire("room-tap",{floorId:e.floorId,roomId:e.roomId});return}this.floorId!==e.floorId&&this.fire("floor-tap",{floorId:e.floorId}),setTimeout(()=>{var t;return(t=this.viewer)==null?void 0:t.focus(e.floorId,e.x,e.z,e.y,e.entity)},120)}renderBinInfo(){var c;let e=this._binInfo,t=this.hass,n=e&&((c=this.building)==null?void 0:c.floors.flatMap(d=>d.furniture).find(d=>d.id===e.furnitureId));if(!e||!t||!n)return x;let r=uc(n,t,this.pickups),i=new Date;i.setHours(0,0,0,0);let a=d=>{let p=Math.round((d.getTime()-i.getTime())/864e5);return p===0?T(t,"bin_today"):p===1?T(t,"bin_tomorrow"):d.toLocaleDateString(t.language||void 0,{weekday:"short",day:"numeric",month:"numeric"})},s=n.name||T(t,`bin_kind_${n.bin_kind??"rest"}`),l=gi(n,t),u=d=>{d.stopPropagation(),typeof n.bin_out=="string"&&cn(t,n.bin_out),clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)};return _`<div class="fp3d-swipe fp3d-info fp3d-bin-info" style="left:${e.x}px;top:${e.y}px" @click=${()=>this._binInfo=null}>
      <span>🗑 ${s}</span>
      ${r.length?r.map(d=>_`<b>${a(d.day)}${d.summary&&d.summary!==s?_` <small>· ${d.summary}</small>`:x}</b>`):_`<b>${T(t,"bin_none")}</b>`}
      ${pc(n)&&!this.ro?_`<button class="fp3d-bin-out ${l?"fp3d-bin-out-on":""}" aria-pressed=${l} @click=${u}>${l?T(t,"bin_out_done"):T(t,"bin_out_mark")}</button>`:l?_`<small>${T(t,"bin_out_done")}</small>`:x}
    </div>`}renderHousehold(){if(!this._household.length||!this.householdCard||!W("household")||this.panelOpen)return x;let e=()=>{this._hhFolded=!this._hhFolded,Sf("neonplan3d.hhFolded",this._hhFolded)};return _`<div class="fp3d-hh ${this._hhFolded?"fp3d-hh-folded":""}">
      <button class="fp3d-hh-head" aria-expanded=${!this._hhFolded} @click=${e}>🏠 ${T(this.hass,"hh_title")} <b>${this._household.length}</b></button>
      ${this._hhFolded?x:this._household.map(t=>_`<button class="fp3d-hh-row ${t.hot?"fp3d-hh-hot":""}" ?disabled=${!t.entity} @click=${()=>t.entity&&(this.ro?this.showInfo(t.entity,0,0):xe(this,t.entity))}>
              <span class="fp3d-hh-icon"><ha-icon icon=${`mdi:${t.icon}`} style="--mdc-icon-size:18px"></ha-icon></span><span>${t.text}</span>
            </button>`)}
    </div>`}renderClock(){var a;let e=this.clock;if(!e||e==="off"||!this.hass)return this.clockTimer&&(clearInterval(this.clockTimer),this.clockTimer=void 0),x;this.clockTimer??=setInterval(()=>this._clockTick=Date.now(),3e4);let t=new Date(this.now()),n=(this.hass.language||"en").replace("_","-"),r=(a=this.hass.config)==null?void 0:a.time_zone,i=s=>{try{return t.toLocaleString(n,r?{...s,timeZone:r}:s)}catch{return t.toLocaleString(n,s)}};return _`<div class="fp3d-clock fp3d-clock-${e}" aria-hidden="true"><b>${i({hour:"2-digit",minute:"2-digit",...kn(this.hass)})}</b><span>${i({weekday:"short",day:"numeric",month:"short"})}</span></div>`}renderAlerts(){let e=this.building;if(!this._alerts.length||!e)return x;let t=this._alerts.slice(0,3);return _`<div class="fp3d-alert-banner" role="alert">
      ${t.map(n=>_`<button class="fp3d-alert fp3d-alert-${n.kind}" title=${$i(this.hass,e,n)} @click=${()=>this.jumpTo(n)}>${$i(this.hass,e,n)}</button>`)}
      ${this._alerts.length>3?_`<span class="fp3d-alert-more">+${this._alerts.length-3}</span>`:x}
    </div>`}renderScenes(){var i,a;let e=this.building;if(!this.scenes||!this.roomId||this.panelOpen||!e||!this.hass||this.ro)return x;let t=e.floors.flatMap(s=>ge(s)).find(s=>s.id===this.roomId),n=t?_e(this.hass,t.area_id).filter(s=>V(s)==="scene"||V(s)==="script").slice(0,6):[];if(!n.length)return x;let r=t!=null&&t.area_id?(a=(i=this.hass.areas)==null?void 0:i[t.area_id])==null?void 0:a.name:void 0;return _`<div class="fp3d-scenes">
      ${n.map(s=>_`<button class="fp3d-chip" aria-pressed=${this._sceneFired===s} @click=${()=>this.runScene(s)}>${Q(this.hass,s,r)}</button>`)}
    </div>`}async syncPets(){var a,s,l,u,c,d,p;let e=this.building,t=this.viewer,n=((a=e==null?void 0:e.settings.pets)==null?void 0:a.on)!==!1&&this.petsOn!==!1,r=n?((s=e==null?void 0:e.settings.pets)==null?void 0:s.list)??[]:[],i=n&&!!(e!=null&&e.floors.some(h=>h.furniture.some(m=>/:aquarium(_large)?$/.test(m.type))));if(!t||!e||!W("fun_pets")||!r.length&&!i){(l=this.pets)==null||l.dispose(),this.pets=null,this.petsFor=null;return}if(this.pets){this.petsFor!==e&&(this.petsFor=e,this.pets.update(e,r));return}if(!this.petsLoading){this.petsLoading=!0;try{let[h,m]=await Promise.all([ji(),Zn()]);if(!this.viewer||this.pets)return;this.petsFor=this.building,this.pets=h.startPets({lib:m.funLib,FloorMap:m.FloorMap,viewer:this.viewer,building:this.building,pets:((c=(u=this.building)==null?void 0:u.settings.pets)==null?void 0:c.on)!==!1&&this.petsOn!==!1?((p=(d=this.building)==null?void 0:d.settings.pets)==null?void 0:p.list)??[]:[],night:()=>{var g,f;return((f=(g=this.hass)==null?void 0:g.states["sun.sun"])==null?void 0:f.state)==="below_horizon"},base:(g,f)=>fe(g,f),closedDoors:()=>{var b,w,y;let g=new Set,f=((b=this.hass)==null?void 0:b.states)??{};for(let S of((w=this.building)==null?void 0:w.floors)??[])for(let P of S.openings)P.type==="door"&&P.contact&&((y=f[P.contact])==null?void 0:y.state)==="off"&&g.add(P.id);return g}})}catch(h){console.error("CasaNeon: the pets failed to load",h)}finally{this.petsLoading=!1}}}async syncGhost(){var n,r;let e=this.building,t=!!e&&W("fun_halloween")&&((n=e.settings.halloween)==null?void 0:n.ghost)!==!1&&this.ghostOn!==!1;if(!this.viewer||!t){(r=this.ghost)==null||r.dispose(),this.ghost=null;return}if(this.ghost){this.ghost.update(e);return}if(!this.ghostLoading){this.ghostLoading=!0;try{let[i,a]=await Promise.all([ji(),Zn()]);if(!this.viewer||this.ghost||!this.building)return;this.ghost=i.startGhost({lib:a.funLib,viewer:this.viewer,building:this.building,night:()=>{var s,l;return((l=(s=this.hass)==null?void 0:s.states["sun.sun"])==null?void 0:l.state)==="below_horizon"}})}catch(i){console.error("CasaNeon: the ghost failed to load",i)}finally{this.ghostLoading=!1}}}async startWalk(){let e=this.building,t=this.viewer;if(!e||!t||this._walk)return;let n=e.floors.filter(d=>d.rooms.some(p=>p.points.length>=3)),i=(this.roomId?n.find(d=>d.rooms.some(p=>p.id===this.roomId)):void 0)??n.find(d=>d.id===this.floorId)??[...n].sort((d,p)=>Math.abs(d.elevation)-Math.abs(p.elevation))[0];if(!i)return;let a=await Zn();this._walk={room:null,hint:!0},await this.updateComplete;let s=this.renderRoot.querySelector(".fp3d-walk-surface");if(!s)return;t.setFloor(i.id,!1),t.setWallMode("auto");let l=new a.FloorMap(e,i),u=this.roomId?i.rooms.find(d=>d.id===this.roomId):void 0,c;if(u){let d=l.freeNear(Te(u.points));c={x:d[0],z:d[1],yaw:l.openYaw(d),pitch:-.05}}this.walker=new a.WalkCamera(t,l,s,{start:c,onRoom:d=>{this.walkRoomPts=(d==null?void 0:d.points)??null,this._walk&&(this._walk={...this._walk,room:(d==null?void 0:d.name)??null}),this.syncDevices(!0)}}),this.walkKeys=d=>{d.key==="Escape"&&this.stopWalk()},window.addEventListener("keydown",this.walkKeys),setTimeout(()=>{this._walk&&(this._walk={...this._walk,hint:!1})},9e3)}stopWalk(){var t;if(!this.walker&&!this._walk)return;(t=this.walker)==null||t.dispose(),this.walker=null,this.walkKeys&&window.removeEventListener("keydown",this.walkKeys),this.walkKeys=null,this._walk=!1,this.walkRoomPts=null;let e=this.viewer;e&&(e.setWallMode(this.wallMode),e.setFloor(this.floorId,!0)),this.syncDevices(!0)}renderWalk(){if(!this.walkable||this.ro||!this.building||!this.hass)return x;let e=i=>T(this.hass,i);if(!this._walk)return _`<button class="fp3d-walk-btn" title=${e("walk_start")} aria-label=${e("walk_start")} @click=${()=>{this.startWalk()}}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4.5" r="1.8" /><path d="m9 20 2.5-6 2.5 2.5V21M7.5 11l3-3.5 3.5 1.5 2 3.5M11.5 14l1-5" /></svg>
        <span>${e("walk_title")}</span>
      </button>`;let t=this._walk,n=null,r=(i,a)=>{var d;if(!n)return;let s=44,l=i.clientX-n.cx,u=i.clientY-n.cy,c=Math.hypot(l,u);c>s&&([l,u]=[l/c*s,u/c*s]),a.firstElementChild.style.transform=`translate(${l}px, ${u}px)`,(d=this.walker)==null||d.setStick({x:l/s,y:u/s})};return _`<div class="fp3d-walk-surface"></div>
      <div class="fp3d-walk-top">
        <span class="fp3d-walk-room">🚶 ${t.room??e("walk_title")}</span>
        <button class="fp3d-walk-exit" @click=${()=>this.stopWalk()}>✕ ${e("walk_end")}</button>
      </div>
      ${t.hint?_`<div class="fp3d-walk-hint">${e("walk_hint")}</div>`:x}
      <div
        class="fp3d-walk-stick"
        @pointerdown=${i=>{let a=i.currentTarget,s=a.getBoundingClientRect();n={id:i.pointerId,cx:s.left+s.width/2,cy:s.top+s.height/2},a.setPointerCapture(i.pointerId),r(i,a)}}
        @pointermove=${i=>r(i,i.currentTarget)}
        @pointerup=${i=>{var a;n=null,i.currentTarget.firstElementChild.style.transform="",(a=this.walker)==null||a.setStick(null)}}
        @pointercancel=${i=>{var a;n=null,i.currentTarget.firstElementChild.style.transform="",(a=this.walker)==null||a.setStick(null)}}
      >
        <span></span>
      </div>`}renderFind(){let e=this.building;if(!e||!this.hass)return x;if(this._find===null)return _`<button class="fp3d-find-btn" title=${T(this.hass,"find")} aria-label=${T(this.hass,"find")} @click=${()=>this._find=""}>
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4.5 4.5" /></svg>
      </button>`;let t=dd(this.findIndex??=Bo(this.hass,e),this._find);return _`<div class="fp3d-find">
      <input
        type="search"
        placeholder=${T(this.hass,"find_placeholder")}
        .value=${this._find}
        @input=${n=>this._find=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._find=null),n.key==="Enter"&&t[0]&&this.goTo(t[0])}}
      />
      <button class="fp3d-find-close" aria-label=${T(this.hass,"close")} @click=${()=>this._find=null}>✕</button>
      ${this._find.trim()?_`<div class="fp3d-find-list">
            ${t.length?t.map(n=>_`<button @click=${()=>this.goTo(n)}>
                    <span class="fp3d-find-icon"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d=${n.icon?$o(n.icon):"M4 10l8-6 8 6v10H4z"} /></svg></span>
                    <span><b>${n.name}</b>${n.where?_`<small>${n.where}</small>`:x}</span>
                  </button>`):_`<p>${T(this.hass,"find_none")}</p>`}
          </div>`:x}
    </div>`}renderCentral(){let e=this.building,t=this.hass;if(!e||!t||!this.central||this._find!==null||this.ro)return x;let n=(f,b)=>T(t,f,b),r=_`<button
      class="fp3d-central-btn ${this._central?"fp3d-central-on":""}"
      title=${n("central")}
      aria-label=${n("central")}
      aria-expanded=${this._central}
      @click=${()=>{this._central=!this._central,this._armed=null}}
    >
      <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" /></svg>
    </button>`;if(!this._central)return r;let i=this.floorId?e.floors.find(f=>f.id===this.floorId):void 0,a=i?[i]:e.floors,s=a.flatMap(f=>Ur(t,f).lights),l=a.flatMap(f=>Ur(t,f).covers),u=s.filter(f=>{var b;return((b=t.states[f])==null?void 0:b.state)==="on"}).length,c=!i,d=(f,b,w,y)=>{if(y.length){if(c&&this._armed!==f){this._armed=f,clearTimeout(this.armTimer),this.armTimer=setTimeout(()=>this._armed=null,3500);return}this._armed=null,t.callService(b,w,{entity_id:y})}},p=(f,b,w,y,S)=>_`<button class="fp3d-btn ${this._armed===f?"fp3d-central-armed":""}" ?disabled=${!S.length} @click=${()=>d(f,w,y,S)}>
        ${this._armed===f?n("central_sure"):n(b)}
      </button>`,h=(e.settings.favorites??[]).filter(f=>t.states[f]),m=this.buttons??e.settings.buttons??[],g=Lt()?Ri(this.sceneHost(t,e)):[];return _`${r}
      <div class="fp3d-central" role="dialog" aria-label=${n("central")}>
        <div class="fp3d-central-top">
          <b>${i?i.name:n("central_house")}</b>
          <button class="fp3d-btn fp3d-central-gear" title=${n("view_settings")} aria-label=${n("view_settings")} @click=${()=>{this._central=!1,this._settingsOpen=!0}}>⚙ ${n("view_settings")}</button>
        </div>
        ${g.length?_`<div class="fp3d-central-favs">
              ${g.map(f=>_`<button class="fp3d-chip" @click=${()=>{this._central=!1,this._sheet={id:f.id,floorId:null,roomId:null}}}><span aria-hidden="true">${f.icon}</span> ${f.title}</button>`)}
            </div>`:x}
        <div class="fp3d-central-row">
          <span>${n("central_lights")}${s.length?_` <small>${u}/${s.length}</small>`:x}</span>
          ${p("lights_on","central_on","light","turn_on",s.filter(f=>{var b;return((b=t.states[f])==null?void 0:b.state)==="off"}))}
          ${p("lights_off","central_off","light","turn_off",s.filter(f=>{var b;return((b=t.states[f])==null?void 0:b.state)==="on"}))}
        </div>
        ${l.length?_`<div class="fp3d-central-row">
              <span>${n("central_covers")} <small>${l.length}</small></span>
              ${p("covers_open","central_open","cover","open_cover",l)}
              ${p("covers_close","central_close","cover","close_cover",l)}
            </div>`:x}
        <b>${n("central_favorites")}</b>
        ${h.length?_`<div class="fp3d-central-favs">
              ${h.map(f=>{let[b,w]=fl(f),y=t.states[f],S=b==="homeassistant"&&(y==null?void 0:y.state)==="on";return _`<button
                  class="fp3d-chip"
                  aria-pressed=${S||this._sceneFired===f}
                  ?disabled=${X(y)}
                  @click=${()=>{t.callService(b,w,{entity_id:f}),this._sceneFired=f,setTimeout(()=>this._sceneFired=null,600)}}
                >
                  ${Q(t,f)}
                </button>`})}
            </div>`:m.length?x:_`<p class="fp3d-central-hint">${n("central_no_favorites")}</p>`}
        ${m.length?_`<div class="fp3d-central-favs">
              ${m.map(f=>_`<button
                  class="fp3d-chip fp3d-own-btn"
                  aria-pressed=${$f(t,f)}
                  @click=${b=>{ml(t,b.currentTarget,f),f.action!=="service"&&(this._central=!1)}}
                >
                  ${f.icon?_`<ha-icon .icon=${f.icon.startsWith("mdi:")?f.icon:`mdi:${f.icon}`}></ha-icon>`:x}${f.label}
                </button>`)}
            </div>`:x}
      </div>`}mediaCardUp(e,t){var i;let n=e.states[t];if(!n||V(t)!=="media")return!1;if(!this.ro&&(((i=this.mediaGrace.get(t))==null?void 0:i.until)??0)>Date.now()&&X(n))return!0;let r=[n.attributes.media_title,n.attributes.app_name,n.attributes.source].some(a=>typeof a=="string"&&!!a.trim());return!X(n)&&(n.state==="playing"||n.state==="paused"&&r&&this.pausedRecently(n))}pausedRecently(e){let t=Date.parse(e.last_changed??"");if(!Number.isFinite(t))return!0;let n=t+_f-Date.now();if(n<=0)return!1;let r=Date.now()+n+500;return(!this.pausedTimer||r<this.pausedDue)&&(clearTimeout(this.pausedTimer),this.pausedDue=r,this.pausedTimer=setTimeout(()=>{this.pausedTimer=void 0,this.syncDevices(!0)},n+500)),!0}pausedTimer;pausedDue=0;renderEye(){if(!this.cleanButton||!this.hass||this._find!==null&&!this.clean)return x;let e=T(this.hass,this.clean?"controls_show":"controls_hide");return _`<button
      class="fp3d-eye ${this.clean?"fp3d-eye-clean":""}"
      title=${e}
      aria-label=${e}
      aria-pressed=${this.clean}
      @click=${()=>this.dispatchEvent(new CustomEvent("clean-toggle",{bubbles:!0,composed:!0}))}
    >
      ${this.clean?Mt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 6a9.8 9.8 0 0 1 9 6 9.8 9.8 0 0 1-9 6 9.8 9.8 0 0 1-9-6 9.8 9.8 0 0 1 9-6m0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4" /></svg>`:Mt`<svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M2.4 3.8 3.8 2.4l17.8 17.8-1.4 1.4-3.3-3.3A10.5 10.5 0 0 1 12 19a9.8 9.8 0 0 1-9-6 10.3 10.3 0 0 1 3.6-4.3L2.4 3.8M12 7a4 4 0 0 1 4 4c0 .5-.1 1-.3 1.5l-5.2-5.2c.5-.2 1-.3 1.5-.3m-4 4a4 4 0 0 0 5.5 3.7l-5.2-5.2c-.2.5-.3 1-.3 1.5m4-7a9.8 9.8 0 0 1 9 6 10 10 0 0 1-2.6 3.6l-1.4-1.4A8 8 0 0 0 18.8 12 8 8 0 0 0 9.6 7.2L8 5.6A10.3 10.3 0 0 1 12 4" /></svg>`}
    </button>`}renderMic(){let e=this.hass;if(!this.voice||!e||this.ro||this._walk)return x;let t=this._voice,n=(t==null?void 0:t.phase)==="wait"||(t==null?void 0:t.phase)==="listen",r=T(e,"voice_button"),i=this.cleanButton&&!(this._find!==null&&!this.clean)?this.clean?56:100:56;return _`<button class="fp3d-mic ${(t==null?void 0:t.phase)==="listen"?"fp3d-mic-on":""}" style="left:${i}px" title=${r} aria-label=${r} ?disabled=${n} @click=${()=>{this.onMic()}}>
        ${Mt`<svg viewBox="0 0 24 24" width="28" height="28"><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3m7 9c0 3.5-2.6 6.4-6 6.9V21h-2v-3.1c-3.4-.5-6-3.4-6-6.9h2a5 5 0 0 0 10 0h2Z" /></svg>`}
      </button>
      ${t?_`<div class="fp3d-mic-say ${t.phase==="error"?"fp3d-mic-err":""}" style="left:${i}px">${t.text}</div>`:x}`}sayVoice(e,t){this._voice={phase:e,text:t},clearTimeout(this.voiceTimer),(e==="done"||e==="error")&&(this.voiceTimer=setTimeout(()=>this._voice=null,e==="error"?9e3:6e3))}async onAsk(e){var a;let t=this.hass,n=this.building;if(!t||!n)return;let r=(this.screen??"").trim().toLowerCase();if(e.screen&&e.screen.trim().toLowerCase()!==r)return;if(e.show_rooms){(!e.admins_only||(a=t.user)!=null&&a.is_admin)&&this.showRooms(n,e.show_rooms);return}let i=null;try{let s=await mt();i=await this.handleSentence(t,n,s,e.text,e.speak),i===null&&this.sayVoice("error",T(t,"voice_none"))}catch(s){this.sayVoice("error",T(t,"voice_error",{msg:String((s==null?void 0:s.message)??s)}))}try{await es(t,e.ask_id,i??"",i!==null)}catch{}}async onAnnounce(e){let t=this.hass;if(!t)return;let n=(this.screen??"").trim().toLowerCase();if(!(e.screens.length&&!e.screens.some(r=>r.trim().toLowerCase()===n))&&!ou.has(e.id)){ou.add(e.id),this._announce=e.message,clearTimeout(this.announceTimer),this.announceTimer=setTimeout(()=>this._announce=null,12e3);try{await Ef(),await(await mt()).speak(t,e.message,jt())}catch{}}}async onMic(){var i,a;let e=this.hass,t=this.building;if(!e||!t||((i=this._voice)==null?void 0:i.phase)==="wait"||((a=this._voice)==null?void 0:a.phase)==="listen")return;clearTimeout(this.voiceTimer);let n=(s,l)=>this.sayVoice(s,l);n("wait","\u2026"),this.tourToken++;let r;try{let s=window.AudioContext??window.webkitAudioContext;r=new s,r.resume().catch(()=>{})}catch{r=void 0}try{let s=await mt(),l=await s.listenOnce(e,()=>n("listen",T(e,"voice_listen")),jt(),r);if(!l){n("error",T(e,"voice_none"));return}if(await this.handleSentence(e,t,s,l,!0)!==null)return;n("wait",`\u201C${l}\u201D \u2026`);let u=await s.converse(e,l,this.voiceArea??Nd());n("done",u?`\u201C${l}\u201D \u2013 ${u}`:`\u201C${l}\u201D`)}catch(s){let l=s,u=(l==null?void 0:l.message)==="no_pipeline"?"voice_no_pipeline":(l==null?void 0:l.message)==="silent"?"voice_silent":(l==null?void 0:l.name)==="NotAllowedError"||(l==null?void 0:l.name)==="SecurityError"||!window.isSecureContext?"voice_denied":null;n("error",u?T(e,u):T(e,"voice_error",{msg:String((l==null?void 0:l.message)??(l==null?void 0:l.name)??s)}))}}async handleSentence(e,t,n,r,i){var u,c,d,p;let a=(h,m)=>this.sayVoice(h,m),{devices:s,items:l}=this.spokenDevices(e,t,n.SYNONYMS);{let h=n.showTarget(r,t,s,b=>{var w,y;return b.area_id?(y=(w=e.areas)==null?void 0:w[b.area_id])==null?void 0:y.name:null});if(h){let b=h.kind==="house"?T(e,"all_floors"):h.kind==="cameras"?T(e,"camera_wall_title"):h.name;if(a("done",`\u201C${r}\u201D \u2192 ${b}`),this.directing.touch(Date.now()),h.kind==="cameras")W("camera_cockpit")?this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0})):this._proHint="camera_cockpit";else if(h.kind==="device"){let w=l.get(h.id);h.camera&&h.entity&&W("camera_cockpit")?this.lookThrough(h.entity):w&&this.goTo(w)}else h.kind==="house"?this.fire("floor-tap",{floorId:null}):h.kind==="floor"?this.fire("floor-tap",{floorId:h.floorId}):(this.floorId!==h.floorId&&this.fire("floor-tap",{floorId:h.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:h.floorId,roomId:h.roomId}),60));return T(e,"voice_showing",{name:b})}let m=await e.callWS({type:"neonplan3d/locate/ask",text:r,language:e.language}).catch(()=>null);if(m)return a("done",`\u201C${r}\u201D \u2013 ${m.text}`),m.rooms.length&&(!m.admins_only||(u=e.user)!=null&&u.is_admin)&&this.showRooms(t,m.rooms),i&&n.speak(e,m.text,jt()),m.text;let g=this.moduleHost(e,t,n.SYNONYMS,b=>n.showTarget(b,t,s,w=>{var y,S;return w.area_id?(S=(y=e.areas)==null?void 0:y[w.area_id])==null?void 0:S.name:null})),f=await pd(r,g);if(f){a("done",f.text?`\u201C${r}\u201D \u2013 ${f.text}`:`\u201C${r}\u201D`),this.directing.touch(Date.now()),(c=f.highlight)!=null&&c.length&&((d=this.viewer)==null||d.flashDevices(f.highlight));let b=f.focus,w=f.spoken??f.text??"";if((p=f.tour)!=null&&p.length){let y=i&&f.speak!==!1?P=>n.speak(e,P,jt()):null,S=f.spoken??f.text;return S&&y&&await y(S),this.runTour(f.tour,t,l,y),w}if(b!=null&&b.roomId&&b.floorId)this.floorId!==b.floorId&&this.fire("floor-tap",{floorId:b.floorId}),setTimeout(()=>this.fire("room-tap",{floorId:b.floorId,roomId:b.roomId}),60);else if(b!=null&&b.floorId&&!b.entity&&!b.furnitureId)this.fire("floor-tap",{floorId:b.floorId});else if(b!=null&&b.entity||b!=null&&b.furnitureId){let y=l.get(b.entity??`furniture:${b.furnitureId}`);y&&this.goTo(y)}return f.text&&f.speak!==!1&&i&&n.speak(e,f.text,jt()),w}}return null}spokenDevices(e,t,n){let r=this.findIndex??=Bo(e,t),i=new Map(t.floors.flatMap(d=>ge(d).map(p=>[p.id,p.name]))),a=[],s=[],l=new Map;for(let d of r)d.kind==="device"&&d.entity&&l.set(d.entity,d);let u=new Set;for(let d of t.floors){let p=ge(d);for(let h of d.furniture){if(If.has(h.type))continue;let m=this.furnitureLinks.get(h.id),g=(m==null?void 0:m.entity)??(m==null?void 0:m.power)??null,f=g??`furniture:${h.id}`,b=p.find(O=>O.points.length>=3&&U([h.x,h.z],O.points)),w=Me(e,h.type),y=[h.name,...h.aliases??[],w,g?Q(e,g):null,...n[h.type]??[]].filter(O=>!!O),S=h.name||(g?Q(e,g):w);a.push({id:f,entity:g,name:S,names:y,room:(b==null?void 0:b.name)??"",camera:!!g&&V(g)==="camera"});let P=(h.type==="plant"||pi(h.type))&&!!h.moisture&&h.moisture!=="none",I=yi(m!=null&&m.entity?e.states[m.entity]:void 0,m!=null&&m.power?he(e.states[m.power]):null,typeof h.run_w=="number"&&h.run_w>0?h.run_w:10),v=W("household")&&typeof h.remaining=="string"&&h.remaining!=="none"&&!I?_i(e.states[h.remaining]):null;s.push({id:f,entity:g,name:S,names:y,room:(b==null?void 0:b.name)??"",floorId:d.id,roomId:(b==null?void 0:b.id)??null,power:(m==null?void 0:m.power)??null,type:h.type,remaining:v,thirsty:P&&W("household")?bi(h,e):null}),g?u.add(g):l.set(f,{kind:"device",name:S,where:"",floorId:d.id,roomId:(b==null?void 0:b.id)??null,entity:null,icon:null,x:h.x,z:h.z,y:Math.min(d.height-.3,Math.max(.5,h.h))})}}let c=new Map(t.floors.flatMap(d=>d.placements.map(p=>[p.entity_id,p])));for(let[d,p]of l){if(u.has(d)||d.startsWith("furniture:"))continue;let h=p.roomId&&i.get(p.roomId)||"",m=c.get(d),g=[m==null?void 0:m.name,...(m==null?void 0:m.aliases)??[],p.name].filter(f=>!!f);a.push({id:d,entity:d,name:p.name,names:g,room:h,camera:V(d)==="camera"}),s.push({id:d,entity:d,name:p.name,names:g,room:h,floorId:p.floorId,roomId:p.roomId,power:null,type:"device"})}return{devices:a,items:l,spoken:s}}lockMarkers(e,t){var r,i;let n=[];for(let a of t.floors)for(let s of a.openings){let l=(i=(r=this.openingLinks)==null?void 0:r.get(s.id))==null?void 0:i.lock;if(!l)continue;let u=this.openingSpot(t,s.id,!0);if(!u)continue;let c=e.states[l];n.push({id:l,floorId:a.id,roomId:s.room_id,x:u.x,z:u.z,y:Math.min(u.y+.35,1.5),icon:ln("lock"),name:Q(e,l),text:c?$e(e,c):"",active:!!c&&(c.state==="unlocked"||c.state==="open"||c.state==="unlocking"),unavailable:!c||X(c),glow:null,full:!0,fromFurniture:!1})}return n}openingSpot(e,t,n=!1){for(let r of e.floors){let i=r.openings.find(b=>b.id===t);if(!i)continue;let a=Fl(i,r.rooms,r.walls??[]);if(!a)return null;let s=a.room.points,l=s[a.edge],u=s[(a.edge+1)%s.length],c=Math.hypot(u[0]-l[0],u[1]-l[1])||1,d=[(u[0]-l[0])/c,(u[1]-l[1])/c],h=je(s)>0?[-d[1],d[0]]:[d[1],-d[0]],m=i.offset;if(n){let b=d[0]*h[1]-d[1]*h[0]>0;m=i.offset-i.width/2+Rs(i,i.hinge==="left"===b)}let[g,f]=So(a.room,a.edge,m);return{floorId:r.id,x:g+h[0]*.2,z:f+h[1]*.2,y:Math.max(.5,i.sill+i.height/2),theta:Math.atan2(h[0],h[1])}}return null}async showRooms(e,t){let n=t.map(l=>{var u;return{roomId:l,floorId:(u=e.floors.find(c=>c.rooms.some(d=>d.id===l)))==null?void 0:u.id}}).filter(l=>!!l.floorId).slice(0,8);if(!n.length)return;let r=++this.tourToken;clearTimeout(this.tourTimer),this.directing.touch(Date.now());let i=this.renderRoot.querySelector(".fp3d-stage"),a=()=>{this.tourToken++,clearTimeout(this.tourTimer)};i==null||i.addEventListener("pointerdown",a,{once:!0});let s=l=>new Promise(u=>this.tourTimer=setTimeout(u,l));for(let[l,u]of n.entries()){if(r!==this.tourToken||(this.floorId!==u.floorId&&(this.fire("floor-tap",{floorId:u.floorId}),await s(150)),r!==this.tourToken))break;this.roomId!==u.roomId&&this.fire("room-tap",{floorId:u.floorId,roomId:u.roomId}),this.directing.touch(Date.now()),l<n.length-1&&await s(4e3)}i==null||i.removeEventListener("pointerdown",a)}async runTour(e,t,n,r){var c;let i=++this.tourToken;clearTimeout(this.tourTimer);let a=e.map(d=>{if(d.openingId){let h=this.openingSpot(t,d.openingId);return h?{...h,entity:null,say:d.say,inside:!0}:null}let p=n.get(d.entity??`furniture:${d.furnitureId}`);return p?{floorId:p.floorId,x:p.x,z:p.z,y:p.y,theta:void 0,entity:p.entity,say:d.say,inside:!1}:null}).filter(d=>!!d).slice(0,8);if(!a.length)return;let s=this.renderRoot.querySelector(".fp3d-stage"),l=()=>{this.tourToken++,clearTimeout(this.tourTimer)};s==null||s.addEventListener("pointerdown",l,{once:!0});let u=d=>new Promise(p=>this.tourTimer=setTimeout(p,d));for(let d of a){if(i!==this.tourToken||(this.floorId!==d.floorId&&(this.fire("floor-tap",{floorId:d.floorId}),await u(150)),i!==this.tourToken)||((c=this.viewer)==null||c.focus(d.floorId,d.x,d.z,d.y,d.entity,d.inside?{radius:3.2,phi:1.05,theta:d.theta}:void 0),await u(900),i!==this.tourToken))break;let p=d.say&&r?await r(d.say):!1;if(i!==this.tourToken)break;await u(p?1200:2600)}s==null||s.removeEventListener("pointerdown",l)}spokenOpenings(e,t){var s,l,u;let n=[],r=c=>T(e,c);for(let c of t.floors){let d=new Map(ge(c).map(p=>[p.id,p.name]));for(let p of c.openings){let h=(s=this.openingLinks)==null?void 0:s.get(p.id);if(!h)continue;let m=p.type==="garage"?"garage":p.type==="door"?"door":"window",g=Xe(e,h,p.type),f=g.open>.02||g.open2>.02||p.type==="garage"&&(g.cover??0)>.02,b=!f&&(g.tilt>.02||g.tilt2>.02);for(let w of[h.contact,h.contact2,h.cover,h.tilt,h.tilt2])w&&w!=="none"&&n.push({id:p.id,entity:w,kind:m,name:r(`opening_${p.type}`),room:d.get(p.room_id)??"",floorId:c.id,roomId:p.room_id,open:f,tilted:b})}}let i=((l=t.settings.roof)==null?void 0:l.windows)??[],a=i.length?new Map(dt(t).map(c=>[c.key,c])):null;for(let c of i){let d=nu(e,c),p=d.open>.02,h=!p&&d.tilt>.02,m=[c.window,c.contact,c.cover,c.tilt].filter(y=>!!y&&y!=="none"),g=(u=m.map(y=>ze(e,y)).filter(y=>!!y).map(y=>t.floors.flatMap(S=>S.rooms.filter(P=>P.area_id===y).map(P=>({floor:S,room:P})))).find(y=>y.length===1))==null?void 0:u[0],f=g?null:ai(t,a==null?void 0:a.get(c.face),c),b=(g==null?void 0:g.floor)??(f==null?void 0:f.floor)??t.floors[t.floors.length-1],w=(g==null?void 0:g.room)??(f?b==null?void 0:b.rooms.find(y=>y.id===f.roomId):void 0);for(let y of m)n.push({id:c.id,entity:y,kind:"roof_window",name:c.name||r("roof_window"),room:(w==null?void 0:w.name)??"",floorId:(b==null?void 0:b.id)??"",roomId:(w==null?void 0:w.id)??null,open:p,tilted:h})}return n}sceneHost(e,t){return this.moduleHost(e,t,{},()=>null)}moduleHost(e,t,n,r){let i=null,a=()=>i??=this.spokenDevices(e,t,n).spoken,s={api:1,hass:()=>this.hass,building:()=>this.building,language:()=>e.language||"en",devices:()=>a(),findDevice:l=>{let u=r(l);return(u==null?void 0:u.kind)==="device"&&u.id?a().find(c=>c.id===u.id)??null:null},dimmed:()=>this.dimmed,canEdit:()=>{var l,u;return!!((u=(l=this.hass)==null?void 0:l.user)!=null&&u.is_admin)&&!this.ro},updateBuilding:l=>{var d;let u=this.building;if(!u||!this.hass||this.ro||!((d=this.hass.user)!=null&&d.is_admin))return;let c=structuredClone(u);l(c),this.building=c,zn(this.hass,c).catch(p=>this.serviceFailed("neonplan3d/building/save",p))},callService:(l,u,c)=>this.hass?this.hass.callService(l,u,c):Promise.resolve(),newId:l=>Fs(l),waterLevel:(l,u)=>{var p;let c=(p=this.building)==null?void 0:p.floors.find(h=>h.id===l),d=c==null?void 0:c.outdoor.find(h=>h.id===u);return!c||!d||d.type!=="pool"?null:{y:Qt(c,d),floorY:Fn(c,d)}},groundAt:(l,u,c)=>{var p;let d=(p=this.building)==null?void 0:p.floors.find(h=>h.id===l);return d?Je(d,u,c):0},refresh:()=>{this.requestUpdate(),this.moduleTimer??=setTimeout(()=>{this.moduleTimer=void 0,this.syncDevices(!1,!0)},50)},plan:Xi,openings:()=>this.spokenOpenings(e,t),energy:()=>this._energy?{consumption:this._energy.consumption,solar:this._energy.solar,grid:this._energy.grid,battery:this._energy.battery,soc:this._energy.soc}:null,consumers:()=>[...this.lastConsumers].map(l=>{var u;return{id:l.id,entity:l.powerEntity,name:((u=a().find(c=>c.entity===l.id||c.power===l.powerEntity))==null?void 0:u.name)??Q(e,l.id),watts:l.power}}).sort((l,u)=>u.watts-l.watts),household:()=>this._household.map(l=>({text:l.text,entity:l.entity,hot:!!l.hot})),alerts:()=>this.spokenAlerts(e,t),cars:()=>this.spokenCars(e,t),pools:()=>_d(s),weather:()=>Rt(e,this.weatherEntityId??t.settings.weather_entity),listen:async l=>{try{return(await(await mt()).listenOnce(e,l,jt())).trim()||null}catch{return null}},notify:l=>this.showNote(l),occupied:()=>this.occupiedRooms(e,t),speakers:()=>this.planSpeakers(e,t)};return s}showNote(e){this._note=e,clearTimeout(this.noteTimer),this.noteTimer=setTimeout(()=>this._note=null,3500)}occupiedRooms(e,t){let n=new Map;for(let r of this.lastPersons)r.roomId&&n.set(r.roomId,r);for(let r of t.floors)for(let i of r.rooms){if(n.has(i.id)||!i.area_id)continue;_e(e,i.area_id).some(s=>{let l=e.states[s];return s.startsWith("binary_sensor.")&&(l==null?void 0:l.state)==="on"&&["presence","occupancy","motion"].includes(String(l.attributes.device_class))})&&n.set(i.id,{floorId:r.id,roomId:i.id})}return[...n.values()]}planSpeakers(e,t){let n=[],r=new Set;for(let i of t.floors){let a=(s,l)=>{var u;return((u=ge(i).find(c=>c.points.length>=3&&U([s,l],c.points)))==null?void 0:u.id)??null};for(let s of i.placements)!s.entity_id.startsWith("media_player.")||r.has(s.entity_id)||!e.states[s.entity_id]||(r.add(s.entity_id),n.push({entity:s.entity_id,name:Q(e,s.entity_id),floorId:i.id,roomId:a(s.x,s.z),at:[s.x,s.z],top:s.y??1.1}));for(let s of i.furniture){let l=s.entity;!l||!l.startsWith("media_player.")||r.has(l)||!e.states[l]||(r.add(l),n.push({entity:l,name:Q(e,l),floorId:i.id,roomId:a(s.x,s.z),furnitureId:s.id,at:[s.x,s.z],top:fe(i,s)+s.h}))}}return n}roomSheets(e){let t=this.hass,n=this.building;if(!t||!n||this.ro||!Lt())return[];let r=n.floors.find(i=>ge(i).some(a=>a.id===e));return r?Ci(this.sceneHost(t,n),{floorId:r.id,roomId:e}).map(i=>({id:i.id,icon:i.icon,title:i.title})):[]}plainOf=null;shownBuilding(){var r;let e=this.building;if(!e||!this.plain)return e;if(((r=this.plainOf)==null?void 0:r.from)===e)return this.plainOf.to;let t=i=>{var a;return Pr.has(i.type)||i.type==="stairwell"||!!((a=we(i.type))!=null&&a.hole)},n={...e,floors:e.floors.map(i=>({...i,furniture:i.furniture.filter(t)}))};return this.plainOf={from:e,to:n},n}openRoomSheet(e,t){var r;let n=(r=this.building)==null?void 0:r.floors.find(i=>i.rooms.some(a=>a.id===e));this._sheet={id:t,floorId:(n==null?void 0:n.id)??null,roomId:e}}currentSheet(e,t){let n=this._sheet;if(!n)return null;let r=this.sceneHost(e,t);return(n.roomId&&n.floorId?Ci(r,{floorId:n.floorId,roomId:n.roomId}):Ri(r)).find(a=>a.id===n.id)??null}renderSheet(){var c,d,p;let e=this.hass,t=this.building;if(!e||!t||!this._sheet)return x;let n=this.currentSheet(e,t);if(!n)return x;let r=h=>T(e,h),i=this._sheet.roomId?t.floors.flatMap(h=>h.rooms).find(h=>h.id===this._sheet.roomId):void 0,a=()=>this._sheet=null,s=async h=>{a();try{await h()}catch(m){console.warn("NeonPlan 3D: module sheet failed",m)}},l=()=>{let h=this.renderRoot.querySelector(".fp3d-sheet-input"),m=h==null?void 0:h.value.trim();m&&n.input&&s(()=>n.input.onSubmit(m))},u=async()=>{var f,b;let h=this.renderRoot.querySelector(".fp3d-sheet-input");if(!h)return;h.placeholder=r("sheet_listening");let m=this.sceneHost(e,t),g=await((f=m.listen)==null?void 0:f.call(m,()=>h.placeholder=r("sheet_listening")));h.placeholder=((b=n.input)==null?void 0:b.placeholder)??"",g?h.value=g:this.showNote(r("sheet_mic_failed"))};return _`<div class="fp3d-sheet-backdrop" @click=${a}></div>
      <div class="fp3d-sheet" role="dialog" aria-label=${n.title}>
        <header>
          <b><span aria-hidden="true">${n.icon}</span> ${n.title}${i?` \xB7 ${i.name}`:""}</b>
          <button class="fp3d-sheet-x" aria-label=${r("close")} @click=${a}>✕</button>
        </header>
        ${n.choice?_`<div class="fp3d-sheet-choice">
              ${n.choice.options.map(h=>_`<button class="fp3d-chip" aria-pressed=${h.id===n.choice.value} @click=${()=>{n.choice.set(h.id),this.requestUpdate()}}>${h.label}</button>`)}
            </div>`:x}
        ${(c=n.chips)!=null&&c.length?_`<div class="fp3d-sheet-chips">${n.chips.map(h=>_`<button class="fp3d-sheet-chip" @click=${()=>{s(()=>h.onTap())}}>${h.label}</button>`)}</div>`:x}
        ${n.input?_`<div class="fp3d-sheet-row">
              <input class="fp3d-sheet-input" placeholder=${n.input.placeholder} @keydown=${h=>h.key==="Enter"&&l()} />
              ${n.input.mic?_`<button class="fp3d-btn fp3d-sheet-mic" title=${r("sheet_mic")} aria-label=${r("sheet_mic")} @click=${()=>{u()}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" /></svg>
                  </button>`:x}
              <button class="fp3d-btn fp3d-primary" @click=${l}>${n.input.button}</button>
            </div>`:x}
        ${(d=n.lines)!=null&&d.length?_`<div class="fp3d-sheet-lines">${n.lines.map(h=>_`<p>${h}</p>`)}</div>`:x}
        ${(p=e.user)!=null&&p.is_admin&&!this.ro&&Fi().length?_`<button class="fp3d-sheet-gear" @click=${()=>{a(),this._settingsOpen=!0,this.updateComplete.then(()=>{var h;return(h=this.renderRoot.querySelector(".fp3d-set-module"))==null?void 0:h.scrollIntoView({block:"start"})})}}>⚙ ${r("view_settings")}</button>`:x}
      </div>`}setPlanSettings(e){var r,i;let t=this.building;if(!t||!((i=(r=this.hass)==null?void 0:r.user)!=null&&i.is_admin)||this.ro)return;let n=structuredClone(t);Object.assign(n.settings,e),this.building=n,zn(this.hass,n).catch(a=>this.serviceFailed("neonplan3d/building/save",a))}renderSettings(){var c;let e=this.hass,t=this.building;if(!e||!t||!this._settingsOpen)return x;let n=d=>T(e,d),r=!!((c=e.user)!=null&&c.is_admin)&&!this.ro,i=t.settings,a=(d,p,h,m)=>_`<label class="fp3d-set-check" title=${m?n(m):""}
        ><input type="checkbox" .checked=${p} ?disabled=${!r} @change=${g=>this.setPlanSettings(h(g.target.checked))} /> ${n(d)}</label
      >`,s=this.sceneHost(e,t),l=Gt(),u=Fi().map(d=>{let p=bd(d,s);if(!p.length||p[0].kind==="heading")return p;let h=l.find(g=>g.id===d);return[{kind:"heading",text:h?hs(h).replace(/^(Modul|Module):\s*/i,""):d},...p]}).filter(d=>d.length);return _`<div class="fp3d-sheet-backdrop" @click=${()=>this._settingsOpen=!1}></div>
      <div class="fp3d-sheet fp3d-settings" role="dialog" aria-label=${n("view_settings")}>
        <header>
          <b>⚙ ${n("view_settings")}</b>
          <button class="fp3d-sheet-x" aria-label=${n("close")} @click=${()=>this._settingsOpen=!1}>✕</button>
        </header>
        ${r?x:_`<p class="fp3d-set-note">${n("view_settings_admin")}</p>`}
        <h4>${n("view_settings_look")}</h4>
        ${a("sun_shadow",i.sun_shadow!==!1,d=>({sun_shadow:d}),"sun_shadow_hint")}
        ${i.sun_shadow!==!1?_`<label class="fp3d-set-field" title=${n("sun_arc_hint")}
              >${n("sun_arc")}
              <select ?disabled=${!r} @change=${d=>this.setPlanSettings({sun_arc:d.target.value==="plot"?"plot":null})}>
                <option value="house" ?selected=${i.sun_arc!=="plot"}>${n("sun_arc_house")}</option>
                <option value="plot" ?selected=${i.sun_arc==="plot"}>${n("sun_arc_plot")}</option>
              </select></label
            >`:x}
        ${a("window_glow",i.window_glow!==!1,d=>({window_glow:d}),"window_glow_hint")}
        ${Ui(Jo)?_`<p class="fp3d-set-note">${n("gpu_safe_note")}</p>`:x}
        ${a("sun_patches",i.sun_patches!==!1,d=>({sun_patches:d}))}
        ${this.renderGlassSize(n,r,i)}
        <h4>${n("view_settings_control")}</h4>
        ${a("tap_in_room",!!i.tap_in_room,d=>({tap_in_room:d}),"tap_in_room_hint")}
        ${a("right_click_back",!!i.right_click_back,d=>({right_click_back:d}),"right_click_back_hint")}
        <h4>${n("view_settings_alerts")}</h4>
        ${a("rain_warning",i.rain_warning!==!1,d=>({rain_warning:d}))}
        ${a("alert_unavailable",!!i.alert_unavailable,d=>({alert_unavailable:d}))}
        ${a("alert_names",i.alert_names!==!1,d=>({alert_names:d}))}
        ${u.map(d=>_`<div class="fp3d-set-module">${d.map(p=>this.renderViewField(e,p,r))}</div>`)}
        <p class="fp3d-set-note">${n("view_settings_more")}</p>
      </div>`}renderGlassSize(e,t,n){let r=n.roof.hologram??Ue,i=[.75,1,1.25,1.5,2],a=i.includes(r.size)?i:[...i,r.size].sort((s,l)=>s-l);return _`<label class="fp3d-set-field" title=${e("glass_size_hint")}
      >${e("glass_size")}
      <select ?disabled=${!t} @change=${s=>this.setPlanSettings({roof:{...n.roof,hologram:{...r,size:Number(s.target.value)}}})}>
        ${a.map(s=>_`<option value=${s} ?selected=${s===r.size}>${Math.round(s*100)} %</option>`)}
      </select></label
    >`}renderViewField(e,t,n){switch(t.kind){case"heading":return _`<h4>${t.text}</h4>`;case"text":return _`<p class="fp3d-set-note">${t.text}</p>`;case"check":return _`<label class="fp3d-set-check"><input type="checkbox" .checked=${t.value} ?disabled=${!n} @change=${r=>t.set(r.target.checked)} /> ${t.label}</label>`;case"select":return _`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${r=>t.set(r.target.value)}>
            ${t.options.map(r=>_`<option value=${r.id} ?selected=${r.id===t.value}>${r.label}</option>`)}
          </select></label
        >`;case"entity":{let r=Object.keys(e.states).filter(i=>t.filter(i)).sort((i,a)=>Q(e,i).localeCompare(Q(e,a)));return _`<label class="fp3d-set-field"
          >${t.label}
          <select ?disabled=${!n} @change=${i=>{let a=i.target.value;t.set(a===""?null:a)}}>
            <option value="" ?selected=${!t.value}>${t.auto?T(e,"entity_auto",{name:Q(e,t.auto)}):"\u2014"}</option>
            ${r.map(i=>_`<option value=${i} ?selected=${i===t.value}>${Q(e,i)}</option>`)}
          </select></label
        >`}case"lines":return Zl(t.value,!n,{label:t.label,placeholder:t.placeholder??T(e,"lines_new"),add:T(e,"lines_add"),remove:T(e,"delete")},r=>t.set(r));case"button":return _`<button class="fp3d-btn ${t.primary?"fp3d-primary":""}" ?disabled=${!n} title=${t.title??""} @click=${()=>t.onTap()}>${t.label}</button>`}}renderNote(){return this._note?_`<div class="fp3d-note" role="status">${this._note}</div>`:x}spokenAlerts(e,t){let n=new Map(t.floors.flatMap(r=>ge(r).map(i=>[i.id,i.name])));return this._alerts.map(r=>({kind:r.kind,entity:r.entity,name:Q(e,r.entity),...r.text?{text:r.text}:{},room:r.roomId?n.get(r.roomId)??null:null,floorId:r.floorId,roomId:r.roomId}))}spokenCars(e,t){if(!W("auto_pro"))return[];let n=[];for(let r of t.floors)for(let i of r.furniture){if(i.type!=="parking"||!i.car)continue;let a=bn(e,i),s=On(e,i),l=s.entities.tracker?e.states[s.entities.tracker]:void 0,u=!!a&&!(l&&!No.has(l.state.toLowerCase()));n.push({name:i.name||(a?Me(e,a):Me(e,"car")),spot:i.id,floorId:r.id,present:u,away:s.away,soc:s.soc,range:s.range,rangeUnit:s.rangeUnit,charging:s.charging,chargingW:s.chargingW,plugged:s.plugged,locked:s.locked})}return n}renderSwipe(){let e=this._swipe;if(!e||!this.hass)return x;let t=e.kind==="light"&&e.value<=0;return _`<div class="fp3d-swipe" style="left:${e.x}px;top:${e.y}px">
      <span>${Q(this.hass,e.entity)}</span>
      <b>${t?T(this.hass,"swipe_off"):`${e.value} %`}</b>
      <i><em style="height:${e.value}%"></em></i>
    </div>`}lookThrough(e){var a;let t=this.viewer,n=this.building;if(!t||!n||this.ro)return;if(!W("camera_cockpit")){this._menu=null,this._proHint="camera_cockpit";return}let r=(a=n.floors.find(s=>s.placements.some(l=>l.entity_id===e)))==null?void 0:a.id;if(!r)return;this._menu=null,this._through?this._through={...this._through,entity:e}:this._through={entity:e,back:t.getView()},this.watchCameras(!0);let i=this.floorId===r?0:300;i&&(this.throughFloor=r,this.fire("floor-tap",{floorId:r})),setTimeout(()=>{var s,l;((s=this._through)==null?void 0:s.entity)===e&&!((l=this.viewer)!=null&&l.lookThrough(e))&&(this._through=null)},i)}endThrough(){var t,n;let e=this._through;e&&(this._through=null,((t=this.live)==null?void 0:t.id)===e.entity&&(this.live=null),(n=this.viewer)==null||n.flyTo(e.back),this.throughWall&&(this.throughWall=!1,this.dispatchEvent(new CustomEvent("camera-wall-open",{bubbles:!0,composed:!0}))))}renderProHint(){return!this._proHint||!this.hass?x:_`<div class="fp3d-pro" role="dialog">
      <b>${T(this.hass,"pro_title")}</b>
      <span>${T(this.hass,`pro_feature_${this._proHint}`)}</span>
      <span class="fp3d-sub">${T(this.hass,"pro_locked")}</span>
      <div>
        <a class="fp3d-chip" href=${_l(this._proHint)} target="_blank" rel="noopener">${T(this.hass,"manual_more")}</a>
        <button class="fp3d-chip" @click=${()=>(this._proHint=null,this.fire("open-extensions",null))}>${T(this.hass,"ext_tab")}</button>
        <button class="fp3d-chip" @click=${()=>this._proHint=null}>${T(this.hass,"close")}</button>
      </div>
    </div>`}renderCameraWall(){if(!this.cameraWall||!this.hass||!this.building||this.ro)return x;let e=this.hass,t=()=>{this._wallBig=null,this.live=null,this.dispatchEvent(new CustomEvent("camera-wall-close",{bubbles:!0,composed:!0}))};if(!W("camera_cockpit"))return _`<div class="fp3d-wall">
        <div class="fp3d-wall-head"><span>${T(e,"camera_wall_title")}</span><button class="fp3d-chip" @click=${t}>✕</button></div>
        <p class="fp3d-wall-pro">🔒 ${T(e,"pro_feature_camera_cockpit")}</p>
      </div>`;let n=[...new Set(this.building.floors.flatMap(c=>c.placements.map(d=>d.entity_id)).filter(c=>V(c)==="camera"))];this.watchCameras(!0);let r=c=>{let d=e.states[c],p=d==null?void 0:d.attributes.entity_picture;return p&&d&&!X(d)?p.startsWith("data:")?p:`${p}${p.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null},i=c=>{let d=e.states[c];return _`${Q(e,c)}${(d==null?void 0:d.state)==="recording"?_` <b>● ${T(e,"state_recording")}</b>`:x}`},a=this._wallBig&&n.includes(this._wallBig)?this._wallBig:null;if(a){let c=r(a),d=this.liveFor(a),p=()=>{this.throughWall=!0,t(),this.lookThrough(a)};return _`<div class="fp3d-wall">
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
        <div class="fp3d-wall-big">${d??(c?_`<img src=${c} alt="" />`:_`<div class="fp3d-wall-none">${T(e,"state_unavailable")}</div>`)}</div>
      </div>`}let s=this.renderRoot.querySelector(".fp3d-wall-grid");s||requestAnimationFrame(()=>this.requestUpdate());let{cols:l,tile:u}=Dd(n.length,(s==null?void 0:s.clientWidth)??this.clientWidth-48,(s==null?void 0:s.clientHeight)??this.clientHeight-160);return _`<div class="fp3d-wall">
      <div class="fp3d-wall-head">
        <span>${T(e,"camera_wall_title")} · ${n.length} <span class="fp3d-still">${T(e,"camera_still",{s:this._low?10:5})}</span></span>
        <button class="fp3d-chip" aria-label="✕" @click=${t}>✕</button>
      </div>
      <div class="fp3d-wall-grid" style="grid-template-columns: repeat(${l}, ${u}px); grid-auto-rows: ${Math.round(u*9/16)}px">
        ${n.map(c=>{let d=r(c),p=Ze(e,c).some(h=>{var m;return((m=e.states[h])==null?void 0:m.state)==="on"});return _`<button class="fp3d-wall-cam ${p?"fp3d-wall-seen":""}" title=${T(e,"camera_wall_big")} @click=${()=>this._wallBig=c}>
            ${d?_`<img src=${d} alt="" />`:_`<div class="fp3d-wall-none">${T(e,"state_unavailable")}</div>`}
            <span class="fp3d-wall-name">${i(c)}</span>
          </button>`})}
      </div>
    </div>`}renderProxmox(){if(!this.proxmoxWall||!this.hass||this.ro)return x;let e=this.hass,t=(c,d)=>T(e,c,d),n=()=>this.dispatchEvent(new CustomEvent("proxmox-close",{bubbles:!0,composed:!0})),r=Bn(e),i=c=>c===null?"\u2013":`${ie(e,c,c<10?1:0)} %`,a=(c,d)=>_`<span class="fp3d-pve-bar" title=${`${c} ${i(d)}`}
        ><span class="fp3d-pve-bar-label">${c}</span><span class="fp3d-pve-bar-track"><span class="fp3d-pve-bar-fill ${(d??0)>=85?"fp3d-pve-hot":""}" style="width: ${Math.min(100,Math.max(0,d??0))}%"></span></span><span class="fp3d-pve-bar-value">${i(d)}</span></span
      >`,s=r.instances.filter(c=>c.running).length,l=r.instances.filter(c=>this._pveFilter==="all"||this._pveFilter==="on"===c.running),u=(c,d,p)=>_`<button class="fp3d-chip" aria-pressed=${this._pveFilter===c} @click=${()=>this._pveFilter=c}>${d} · ${p}</button>`;return _`<div class="fp3d-wall fp3d-pve">
      <div class="fp3d-wall-head">
        <span>${t("pve_title")}</span>
        <span class="fp3d-wall-tools">${u("all",t("pve_all"),r.instances.length)} ${u("on",t("pve_on"),s)} ${u("off",t("pve_off"),r.instances.length-s)}</span>
        <button class="fp3d-chip" aria-label="✕" @click=${n}>✕</button>
      </div>
      ${r.nodes.map(c=>_`<button class="fp3d-pve-node ${c.online?"":"fp3d-pve-down"}" @click=${()=>xe(this,c.entity)}>
          <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${c.online?"fp3d-pve-dot-on":"fp3d-pve-dot-bad"}"></span>${c.name} · ${t(c.online?"pve_online":"pve_offline")}</span>
          ${a(t("pve_cpu"),c.cpu)} ${a(t("pve_ram"),c.memory)} ${a(t("pve_disk"),c.disk)}
          <span class="fp3d-pve-facts">
            ${c.vmsOn!==null||c.lxcOn!==null?_`<span>${t("pve_running_counts",{vms:c.vmsOn??0,lxc:c.lxcOn??0})}</span>`:x}
            ${c.load!==null?_`<span>${t("pve_load")} ${ie(e,c.load,2)}</span>`:x}
            ${c.updates?_`<span>${t("pve_updates",{n:c.updates})}</span>`:x}
            ${c.failedTasks?_`<span class="fp3d-pve-warn">${t("pve_failed",{n:c.failedTasks})}</span>`:x}
          </span>
        </button>`)}
      <div class="fp3d-pve-grid">
        ${l.length?l.map(c=>_`<button class="fp3d-pve-tile ${c.running?"":"fp3d-pve-off"} ${c.problem?"fp3d-pve-down":""}" @click=${()=>xe(this,c.entity)}>
                <span class="fp3d-pve-name"><span class="fp3d-pve-dot ${c.problem?"fp3d-pve-dot-bad":c.running?"fp3d-pve-dot-on":""}"></span>${c.name}</span>
                <span class="fp3d-pve-sub">${c.vmid!==null?`#${c.vmid} \xB7 `:""}${t(c.kind==="vm"?"pve_vm":"pve_lxc")}${c.ip?` \xB7 ${c.ip}`:""}</span>
                ${c.running?_`${a(t("pve_cpu"),c.cpu)} ${a(t("pve_ram"),c.memory)}
                      <span class="fp3d-pve-sub">${t("pve_disk")} ${i(c.disk)}${c.memoryUsed?` \xB7 ${c.memoryUsed}`:""}${c.since?` \xB7 ${t("pve_since",{d:Tc(c.since)})}`:""}</span>`:_`<span class="fp3d-pve-sub">${t(c.problem?"pve_problem":"pve_stopped")}</span>`}
              </button>`):_`<p class="fp3d-pve-sub">${t("pve_none")}</p>`}
      </div>
    </div>`}liveFor(e){var t;if(((t=this.live)==null?void 0:t.id)!==e){let n={id:e,el:null,failed:!1};this.live=n;let r=window;r.loadCardHelpers?r.loadCardHelpers().then(i=>{if(this.live!==n)return;let a=i.createCardElement({type:"picture-entity",entity:e,camera_view:"live",show_name:!1,show_state:!1,tap_action:{action:"none"},hold_action:{action:"none"}});a.hass=this.hass,n.el=a,this.requestUpdate()}).catch(()=>{n.failed=!0,this.requestUpdate()}):n.failed=!0}return this.live.el}renderThrough(){var a,s;let e=this._through;if(!e||!this.hass)return x;let t=this.hass.states[e.entity],n=t==null?void 0:t.attributes.entity_picture,r=n&&!X(t)?n.startsWith("data:")?n:`${n}${n.includes("?")?"&":"?"}fp3d=${this.cameraTick}`:null,i=(s=(a=this.building)==null?void 0:a.settings.director)!=null&&s.live?this.liveFor(e.entity):null;return _`<div class="fp3d-through" style="--fp3d-blend:${this._blend}">
      ${i?_`<div class="fp3d-through-img fp3d-through-live">${i}</div>`:r?_`<img class="fp3d-through-img" src=${r} alt="" />`:x}
      <div class="fp3d-through-bar">
        <span class="fp3d-through-name">${Q(this.hass,e.entity)}</span>
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
    </div>`}throughFull(e){let t=this.renderRoot.querySelector(".fp3d-through-img");t&&typeof t.requestFullscreen=="function"?t.requestFullscreen().catch(()=>xe(this,e)):xe(this,e)}renderMenu(){var s;let e=this._menu;if(!e||!this.hass||this.ro)return x;let t=this.renderRoot.querySelector(".fp3d-stage"),n=(t==null?void 0:t.clientWidth)??800,r=(t==null?void 0:t.clientHeight)??600,i=Math.max(8,Math.min(n-240,e.x-116)),a=Math.max(8,Math.min(r-360,e.y-170));return _`<div class="fp3d-menu-backdrop" @click=${()=>this._menu=null}></div>
      <fp3d-quick-menu
        style="left:${i}px;top:${a}px"
        ?low=${this._low}
        .hass=${this.hass}
        .entity=${e.entity}
        .car=${e.car??null}
        ?doorLock=${!!e.doorLock}
        .presets=${W("sound")?((s=this.building)==null?void 0:s.settings.media_presets)??[]:[]}
        ?confirmSwitch=${this.confirmSet.has(e.entity)}
        ?pro=${W("camera_cockpit")}
        @close=${()=>this._menu=null}
        @camera-look=${l=>this.lookThrough(l.detail.entity)}
      ></fp3d-quick-menu>`}moduleMarkers(e){var n;let t=[];for(let r of this.scene){if(r.kind!=="marker")continue;let i=e.floors.find(d=>d.id===r.floorId),a=r.furnitureId?i==null?void 0:i.furniture.find(d=>d.id===r.furnitureId):void 0;if(!i||!a&&!r.at)continue;let[s,l]=a?[a.x,a.z]:r.at,u=kd(r.path),c=xd(r.emoji);t.push({id:`module:${r.id}`,floorId:i.id,roomId:((n=i.rooms.find(d=>d.points.length>=3&&U([s,l],d.points)))==null?void 0:n.id)??null,x:s,z:l,y:r.y??(a?fe(i,a)+a.h*.6:1.2),icon:c?`<span style="font-size:18px;line-height:1" aria-hidden="true">${c}</span>`:u?`<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${u}"/></svg>`:"",name:r.name,text:r.text??"",active:!!r.active&&!this.dimmed,unavailable:!1,glow:r.color&&r.active&&!this.dimmed?{color:r.color,level:1}:null,pin:!0,full:!0,...a?{furnitureId:a.id}:{}})}return t}openModuleCard(e){var i,a;let t=this.scene.find(s=>s.kind==="marker"&&s.id===e);if(!t)return;if(t.sheet){this.openRoomSheet(t.sheet.roomId,t.sheet.id);return}t.card&&(this.mediaFolded.delete(t.card),this.cardPing=t.card,clearTimeout(this.cardPingTimer),this.cardPingTimer=setTimeout(()=>{this.cardPing=null,this.requestUpdate()},2600),this.requestUpdate());let n=(i=this.building)==null?void 0:i.floors.find(s=>s.id===t.floorId),r=n==null?void 0:n.furniture.find(s=>s.id===t.furnitureId);n&&r&&((a=this.viewer)==null||a.focus(n.id,r.x,r.z,fe(n,r)+r.h*.6,`module:${t.id}`))}onDeviceTap(e,t=0,n=0){var s;if(e.startsWith("trail:")||e.startsWith("lamp:"))return;if(e.startsWith("module:"))return this.openModuleCard(e.slice(7));if(e.startsWith("opening:"))return this.onOpeningTap(e.slice(8),t,n,!1);if(e.startsWith("hh:")){let[l,u]=e.slice(3).split("#");((s=this.building)==null?void 0:s.floors.flatMap(d=>d.furniture).find(d=>d.id===u&&d.type==="waste_bin"))?(this._binInfo={furnitureId:u,x:t,y:n},clearTimeout(this.binInfoTimer),this.binInfoTimer=setTimeout(()=>this._binInfo=null,6e3)):this.ro?this.showInfo(l,t,n):xe(this,l);return}if(e.startsWith("ws:")){let l=e.slice(3);this.ro?this.showInfo(l,t,n):(!this.confirmSet.has(l)||confirm(T(this.hass,"confirm_switch",{name:Q(this.hass,l)})))&&cn(this.hass,l);return}if(this.ro){let l=this.building,u=l?l.energy.grid??gn(l,d=>{var p,h;return((h=(p=this.furnitureLinks)==null?void 0:p.get(d.id))==null?void 0:h.power)??null}).grid:null,c=e==="grid"?u:e.startsWith("detect:")?e.slice(7):e;c&&this.showInfo(c,t,n);return}let r=this.apOf(e);if(r){r.led?(!this.confirmSet.has(e)||confirm(T(this.hass,"confirm_switch",{name:this.hass?co(this.hass,e):e})))&&cn(this.hass,r.led):xe(this,e);return}let i=this.heaterPower(e);if(i){(!this.confirmSet.has(e)||confirm(T(this.hass,"confirm_switch",{name:Q(this.hass,e)})))&&cn(this.hass,i);return}if(e==="grid"){let l=this.building,u=l?l.energy.grid??gn(l,c=>{var d,p;return((p=(d=this.furnitureLinks)==null?void 0:d.get(c.id))==null?void 0:p.power)??null}).grid:null;u&&xe(this,u);return}if(e.startsWith("detect:")){xe(this,e.slice(7));return}let a=V(e);if(a==="cover"||a==="camera"){this._menu={entity:e,x:t,y:n};return}if(a&&Qs.has(a)){if(this.confirmSet.has(e)&&!confirm(T(this.hass,"confirm_switch",{name:Q(this.hass,e)})))return;cn(this.hass,e)}else xe(this,e)}onOpeningTap(e,t,n,r){var u;let i=(u=this.openingLinks)==null?void 0:u.get(e);if(!i||!this.hass)return;if(i.lock&&!i.cover){this.ro?this.showInfo(i.lock,t,n):this._menu={entity:i.lock,x:t,y:n,doorLock:!0};return}let a=i.cover;if(!a)return;if(this.ro){this.showInfo(i.contact??a,t,n);return}if(r){xe(this,a);return}let s=this.hass.states[a];if(!s||X(s)){xe(this,a);return}if(this.confirmSet.has(a)&&!confirm(T(this.hass,"confirm_switch",{name:Q(this.hass,a)})))return;let[l]=a.split(".");this.hass.callService(l,l==="switch"?"turn_on":"press",{entity_id:a})}effectiveTheme(){var e,t;return this.theme!=="auto"?this.theme:((t=(e=this.hass)==null?void 0:e.states["sun.sun"])==null?void 0:t.state)==="above_horizon"?"day":"neon"}startViewOf(){var e;return this.startView??((e=this.building)==null?void 0:e.settings.start_view)??null}currentView(){var e;return((e=this.viewer)==null?void 0:e.currentView())??null}resetView(){var e;this._through=null,(e=this.viewer)==null||e.resetView()}fire(e,t){this.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0}))}toggleHolos(){this._holoShow=!this._holoShow;try{localStorage.setItem("neonplan3d.holos",this._holoShow?"1":"0")}catch{}}holoVisible(){return this.holograms??this._holoShow}toggleFlows(){this._flows=!this._flows;try{localStorage.setItem("neonplan3d.flows",this._flows?"1":"0")}catch{}this.syncDevices(!0)}renderEnergy(){let e=this._energy;if(!W("energy_pro")||!e||this.roomId||!this.showEnergy)return x;let t=r=>T(this.hass,r),n=[];if(e.consumption!==null&&n.push({cls:"total",label:t("energy_consumption"),value:de(this.hass,e.consumption)}),e.grid!==null){let r=e.grid<0;n.push({cls:r?"export":"grid",label:t(r?"energy_grid_export":"energy_grid_import"),value:de(this.hass,Math.abs(e.grid))})}if(e.solar!==null&&n.push({cls:"solar",label:t("energy_solar"),value:de(this.hass,e.solar)}),e.battery!==null||e.soc!==null){let r=[e.battery!==null?de(this.hass,Math.abs(e.battery)):null,e.soc!==null?`${Math.round(e.soc)} %`:null].filter(Boolean);n.push({cls:"battery",label:t("energy_battery"),value:r.join(" \xB7 ")})}return e.tariff&&n.push({cls:"tariff",label:t("energy_tariff"),value:`${ie(this.hass,e.tariff.value,3)} ${e.tariff.unit}`.trim()}),_`<div class="fp3d-energy" aria-live="off">
      ${this._holoOn?x:n.map(r=>_`<div class="fp3d-energy-item fp3d-energy-${r.cls}"><span>${r.label}</span><b>${r.value}</b></div>`)}
      ${this.flows!==null?x:_`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._flows} title=${`${t("flows_hint")} (${t(this._flows?"flow_on":"flow_off")})`} aria-label=${t("flows")} @click=${()=>this.toggleFlows()}>
        <span>${t("flows")}</span><b>⚡</b>
      </button>`}
      ${this.holograms!==null||!this._holos.length?x:_`<button class="fp3d-energy-item fp3d-flow-toggle" aria-pressed=${this._holoShow} title=${t("holos_hint")} aria-label=${t("holos")} @click=${()=>this.toggleHolos()}>
        <span>${t("holos")}</span><b>◫</b>
      </button>`}
    </div>`}renderLegend(){if(this.heatMode==="none"||this.heatMode==="values")return x;let e=jo[this.heatMode],t=this.heatMode==="temperature",n=t?tn(this.hass,e.stops[0][0]):e.stops[0][0],r=t?tn(this.hass,e.stops[e.stops.length-1][0]):e.stops[e.stops.length-1][0],i=t?Ve(this.hass):e.unit,a=s=>T(this.hass,s);return _`<div class="fp3d-legend">
      <b>${a(`heat_${this.heatMode}`)}</b>
      <span class="fp3d-legend-bar" style="background:${od(this.heatMode)}"></span>
      <span class="fp3d-legend-range"><span>${ie(this.hass,n,0)} ${i}</span><span>${ie(this.hass,r,0)} ${i}</span></span>
      ${this.heatValues.size?x:_`<span class="fp3d-legend-none">${a("heat_none_found")}</span>`}
    </div>`}sunPathToday(e){var i,a;let t=(i=e.config)==null?void 0:i.latitude,n=(a=e.config)==null?void 0:a.longitude;if(typeof t!="number"||typeof n!="number")return null;let r=`${new Date().toDateString()},${t},${n}`;return this.sunPathKey!==r&&(this.sunPathKey=r,this.sunPathCache=Xd(Date.now(),t,n)),this.sunPathCache}skyColor(){let e=Qn[this.effectiveTheme()]??Qn.neon,t=this._sky;return e.night[0].map((n,r)=>Math.round(n+(e.day[0][r]-n)*t))}watchLightning(e){if(!e){clearTimeout(this.flashTimer),this.flashTimer=void 0;return}if(this.flashTimer)return;let t=()=>{this.flashTimer=setTimeout(()=>{document.hidden||(this._flash=!0,setTimeout(()=>this._flash=!1,140)),t()},5e3+Math.random()*9e3)};t()}render(){var s;let e=this._sky,t=(l,u)=>`rgb(${l.map((c,d)=>Math.round(c+(u[d]-c)*e)).join(",")})`,n=Qn[this.effectiveTheme()]??Qn.neon,r=Vd((s=this.building)==null?void 0:s.settings.backdrop),a=`--fp3d-pin-k:${this.pinSize==="small"?.8:this.pinSize==="large"?1.25:1};--fp3d-sky:${t(n.night[0],n.day[0])};--fp3d-ground:${t(n.night[1],n.day[1])}${r?`;background:${r}`:""}`;return _`<div
      @touchstart=${this.keepTouch}
      @touchmove=${this.keepTouch}
      @touchend=${this.keepTouch}
      class="fp3d-stage ${this.roomLabels?"":"fp3d-no-room-names"} ${this._low?"fp3d-low":""} ${this.panelOpen?"fp3d-panel-open":""} ${this.controlsRight?"fp3d-side-right":""} ${this._alerts.length?"fp3d-has-alerts":""} ${this._through?"fp3d-through-on":""} ${this._flash?"fp3d-flash":""} ${this.replay?"fp3d-replay":""}"
      style=${a}
    >
      ${this._error?_`<p class="fp3d-error">${this._error}</p>`:x} ${this.clean?x:this.renderEnergy()} ${this.renderHologram()} ${this.clean?x:this.renderLegend()}
      ${this.renderClock()} ${this.renderAlerts()} ${this.clean||this._walk?x:_`${this.renderHousehold()} ${this.renderThumbs()} ${this.renderScenes()} ${this.renderFind()} ${this.renderCentral()}`} ${this.clean?x:this.renderWalk()} ${this.renderSwipe()} ${this.renderInfo()} ${this.renderBinInfo()} ${this.renderThrough()} ${this.renderCameraWall()} ${this.renderProxmox()} ${this.renderSheet()} ${this.renderSettings()} ${this.renderNote()}
      ${this.clean?x:this.renderProHint()} ${this.renderMenu()} ${this.renderEye()}
      ${this.renderMic()}
      ${this._announce?_`<div class="fp3d-announce" role="status" @click=${()=>this._announce=null}>📢 ${this._announce}</div>`:x}
      ${this.pivotMark&&!this._walk?_`<span class="fp3d-pivot" aria-hidden="true"></span>`:x}
      ${this._micProbe&&this.hass?_`<fp3d-mic-probe .hass=${this.hass} .building=${this.building} @close=${()=>(this._micProbe=!1,Zo())}></fp3d-mic-probe>`:x}
      ${this.showStats&&this._stats?_`<span class="fp3d-stats"
            ><b>${this._stats.fps?T(this.hass,"stats_fps",{fps:this._stats.fps,ms:this._stats.worstMs}):T(this.hass,"stats_idle")}</b>
            ${this._stats.busy.length?_`(${this._stats.busy.map(l=>T(this.hass,`stats_busy_${l}`)).join(", ")})`:x} ·
            ${T(this.hass,"stats",{calls:this._stats.calls,tris:this._stats.triangles.toLocaleString()})} ·
            ${T(this.hass,this._stats.low?"stats_low":"stats_full",{r:ie(this.hass,this._stats.pixelRatio,2)})}${this.syncMs?` \xB7 sync ${ie(this.hass,this.syncMs,1)} ms`:""}</span
          >`:x}
    </div>`}static styles=[Ke,ut,Ae`
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
    `]};customElements.get("fp3d-view3d")||customElements.define("fp3d-view3d",oa);function Pf(o,e){let t=e.attributes.current_temperature,n=typeof t=="number"&&Number.isFinite(t)?`${ie(o,Math.round(t))} \xB0C`:"",r=!["off","unavailable","unknown"].includes(e.state);return{text:[$e(o,e),n].filter(Boolean).join(" \xB7 "),on:r}}function de(o,e){return Math.abs(e)>=1e3?`${ie(o,e/1e3,1)} kW`:`${Math.round(e)} W`}function ru(o){let e=[.3,.85,1];return o==="washer"||o==="dryer"?{color:e,level:.8,faces:[{part:"drum",color:e,level:.8}]}:{color:e,level:.8}}var If=new Set(["rug","stairwell","grid_point","worktop"]);function iu(o){return o.type==="tv_board"?o.h+.9:o.type==="tv_wall"||o.type==="kitchen_wall"?o.h+.25:o.h+.35}var ra;function au(){let o=new URL("./neonplan3d-locate.js?v=f415cc64ec9c",new URL(import.meta.url)).href;return ra??=import(o).catch(e=>{throw ra=void 0,e}),ra}var Af=`
.fp3d-loclab{position:fixed;right:8px;bottom:8px;z-index:9999;max-width:min(360px,calc(100vw - 16px));max-height:70vh;overflow:auto;
background:#0b1120f2;color:#e6f7ff;border:1px solid #37e0ff66;border-radius:12px;padding:10px;font:13px system-ui,sans-serif;box-shadow:0 6px 30px #0008}
.fp3d-loclab h4{margin:0 0 6px;font-size:13px;display:flex;justify-content:space-between;gap:8px;cursor:pointer}
.fp3d-loclab button{font:inherit;color:#e6f7ff;background:#16233d;border:1px solid #37e0ff55;border-radius:8px;padding:7px 9px;margin:2px;cursor:pointer}
.fp3d-loclab button.on{background:#37e0ff;color:#04121c;font-weight:700}
.fp3d-loclab .rec{background:#d6336c;border-color:#d6336c}
.fp3d-loclab small{opacity:.75}
.fp3d-loclab .fl{margin:6px 0 2px;opacity:.7;font-size:11px;text-transform:uppercase}`;function su(o){let e=document.createElement("style");e.textContent=Af;let t=document.createElement("div");t.className="fp3d-loclab",document.body.append(e,t);let n=null,r="",i=!0,a=async(u,c={})=>{let d=o().hass;if(d){try{n=await d.callWS({type:"neonplan3d/locate/rec",action:u,...c}),r=""}catch(p){r=p.message??String(p)}s()}},s=()=>{var g;let u=o().building,c=n,d=((g=c==null?void 0:c.mark)==null?void 0:g.room)??null,p=`<h4 data-a="toggle"><span>\u{1F4E1} Localizaci\xF3n \xB7 Grabaci\xF3n (laboratorio)</span><span>${i?"\u25BE":"\u25B8"}</span></h4>`;if(!i){t.innerHTML=p;return}let h=((c==null?void 0:c.devices)??[]).map(f=>{let b=f.t?Math.round(Date.now()/1e3-f.t):null;return`<div>\u231A ${gt(f.title)}: ${b===null?"<small>a\xFAn sin se\xF1al</small>":`${f.rssi} dBm \xB7 ${gt(f.scanner??"")} <small>hace ${b} s</small>`}</div>`}).join(""),m=((u==null?void 0:u.floors)??[]).map(f=>`<div class="fl">${gt(f.name)}</div>`+f.rooms.map(b=>`<button data-room="${gt(b.id)}" data-name="${gt(b.name)}" class="${d===b.id?"on":""}">${gt(b.name)}</button>`).join("")).join("");t.innerHTML=`${p}
      <div><button data-a="setup">\u2699 Configurar localizaci\xF3n</button></div>
      <div>${c!=null&&c.running?`<button class="rec" data-a="stop">\u25A0 Parar</button> <small>${Math.floor(c.seconds/60)}:${String(c.seconds%60).padStart(2,"0")} \xB7 ${c.lines} l\xEDneas</small>`:'<button data-a="start">\u25CF Empezar grabaci\xF3n</button>'}</div>
      ${r?`<div style="color:#ff8fa3">${gt(r)}</div>`:""}
      ${h||(c?"<div><small>No hay claves de iPhone/Watch (Private BLE Device) en HA; se graba todo igualmente.</small></div>":"")}
      ${c!=null&&c.mark?`<div style="margin-top:6px">\u23F1 desde hace <b>${Tf(Date.now()/1e3-c.mark.t)}</b> en <b>${gt(c.mark.name)}</b> ${Date.now()/1e3-c.mark.t>=120?"\u2713 2 min conseguidos":""}</div>`:""}
      <div class="fl">Ahora estoy en \u2026</div>
      <button data-room="" class="${d?"":"on"}">\u{1F6B6} de camino / en ninguna parte</button>
      ${m}`};t.addEventListener("click",u=>{let c=u.target.closest("button,h4");if(!c)return;let d=c.dataset.a;if(d==="toggle")i=!i,s();else if(d==="start")a("start",{note:"lab walk"});else if(d==="stop")a("stop");else if(d==="setup"){let{hass:p,building:h}=o();p&&h&&au().then(m=>m.openLocateSetup(p,h,()=>o().hass))}else c.dataset.room!==void 0&&a("mark",c.dataset.room?{room:c.dataset.room,name:c.dataset.name}:{room:null})}),a("status");let l=window.setInterval(()=>{a("status")},1e3);return()=>{window.clearInterval(l),t.remove(),e.remove()}}function Tf(o){let e=Math.max(0,Math.round(o));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function gt(o){return o.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}var ia;function zf(){let o=new URL("./neonplan3d-timetravel.js?v=c70c3863f78f",new URL(import.meta.url)).href;return ia??=import(o).catch(e=>{throw ia=void 0,e}),ia}var _n=class{session=null;starting=!1;host;constructor(e){this.host=e}get active(){return this.starting||!!this.session}start(e){this.active||(this.starting=!0,this.host.requestUpdate(),zf().then(t=>{this.starting&&(this.starting=!1,this.session=t.startTimeTravel({...e,onChange:()=>this.host.requestUpdate(),onExit:()=>this.stop()}),this.host.requestUpdate())},t=>{this.starting=!1,console.error("CasaNeon: time travel failed to load",t),this.host.requestUpdate()}))}stop(){var e;this.active&&(this.starting=!1,(e=this.session)==null||e.dispose(),this.session=null,this.host.requestUpdate())}hass(e){var t;return((t=this.session)==null?void 0:t.hass)??e}};function Cf(){try{return matchMedia("(hover: none) and (pointer: coarse)").matches&&!matchMedia("(any-pointer: fine)").matches}catch{return!1}}var Rf={tl:"\u2196",tr:"\u2197",bl:"\u2199",br:"\u2198"},ee={get(o){try{return localStorage.getItem(`neonplan3d.${o}`)}catch{return null}},set(o,e){try{localStorage.setItem(`neonplan3d.${o}`,e)}catch{}}},aa=class extends Ie{static properties={hass:{attribute:!1},narrow:{type:Boolean},route:{attribute:!1},panel:{attribute:!1},_mode:{state:!0},_showOpen:{state:!0},_editorReady:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_wallMode:{state:!0},_explode:{state:!0},_keepRoof:{state:!0},_plain:{state:!0},_quality:{state:!0},_stats:{state:!0},_markers:{state:!0},_pinSize:{state:!0},_heat:{state:!0},_theme:{state:!0},_clock:{state:!0},_furnish:{state:!0},_selFurniture:{state:!0},_selDevice:{state:!0},_floorStack:{state:!0},_roomNames:{state:!0},_controlsRight:{state:!0},_keepView:{state:!0},_angleLock:{state:!0},_trail:{state:!0},_cameraWall:{state:!0},_proxmox:{state:!0},_clean:{state:!0},_navWrap:{state:!0},_optsOpen:{state:!0},_pinHover:{state:!0},_accent:{state:!0},_weather:{state:!0},_director:{state:!0},_micProbe:{state:!0},_voiceHere:{state:!0},_screen:{state:!0}};data=new Xt(this);locateLab=null;tt=new _n(this);ttLinked=!1;constructor(){super(),this.narrow=!1,this._mode="view",this._showOpen=!1,this._editorReady=!!customElements.get("fp3d-editor"),this._floorId=null,this._roomId=null,this._wallMode=ee.get("walls")==="cut"?"cut":"auto",this._explode=ee.get("explode")!=="0",this._keepRoof=ee.get("roof")==="1",this._plain=ee.get("plain")==="1";let e=ee.get("quality");this._quality=e==="low"||e==="high"?e:"auto",this._stats=ee.get("stats")==="1"||new URLSearchParams(location.search).has("fp3d_stats");let t=ee.get("markers");this._markers=t==="none"||t==="all"||t==="room"?t:"important";let n=ee.get("pinSize");this._pinSize=n==="small"||n==="large"?n:"normal";let r=ee.get("heat");this._heat=r==="temperature"||r==="humidity"||r==="co2"||r==="values"?r:"none";let i=ee.get("theme");this._theme=i==="auto"||i&&Ii.includes(i)?i:"neon";let a=ee.get("clock");this._clock=a==="tl"||a==="tr"||a==="bl"||a==="br"?a:"off";let s=ee.get("accent");this._accent=s&&/^#[0-9a-f]{6}$/i.test(s)?s:null,this._furnish=!1,this._selFurniture=null,this._selDevice=null;let l=ee.get("floor_stack");this._floorStack=l==="stacked"||l==="single"?l:"dim",this._roomNames=ee.get("room_names")!=="0",this._controlsRight=ee.get("controls")==="right",this._keepView=ee.get("keep_view")==="1",this._angleLock=ee.get("angle_lock")==="1",this._trail=ee.get("trail")==="1",this._cameraWall=!1,this._proxmox=!1,this._clean=ee.get("clean")==="1",this._navWrap=ee.get("nav_wrap")==="1",this._optsOpen=!1,this._pinHover=!1,this._weather=ee.get("weather")!=="0",this._director=ea(),this._micProbe=!1,this._voiceHere=Yi(),this._screen=Qi()}t(e,t){return T(this.hass,e,t)}willUpdate(e){var n;e.has("hass")&&this.hass&&(this.data.setHass(this.hass),(n=this.tt.session)==null||n.setLive(this.hass));let t=this.data.building;t&&this._floorId&&!t.floors.some(r=>r.id===this._floorId)&&(this._floorId=null,this._roomId=null)}get isAdmin(){var e,t;return((t=(e=this.hass)==null?void 0:e.user)==null?void 0:t.is_admin)??!1}get canEdit(){return this.isAdmin&&!Cf()}setMode(e){e!==this._mode&&(this.tt.stop(),e==="view"&&this.data.flush(),this._mode=e)}onRoomTap(e){var r;let{floorId:t,roomId:n}=e.detail;if((((r=this.data.building)==null?void 0:r.floors.length)??0)>1&&t&&this._floorId!==t){this._floorId=t,this._roomId=null;return}n&&(this._roomId=n===this._roomId?null:n)}setWallMode(e){this._wallMode=e,ee.set("walls",e)}setPlain(e){this._plain=e,ee.set("plain",e?"1":"0")}setKeepRoof(e){this._keepRoof=e,ee.set("roof",e?"1":"0")}setExplode(e){this._explode=e,ee.set("explode",e?"1":"0")}setQuality(e){this._quality=e,ee.set("quality",e)}editFurniture(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let i of r.floors){let a=i.furniture.find(s=>s.id===e);a&&t(a,i)}this.data.edit(r)}editDevice(e,t){let n=this.data.building;if(!n)return;let r=structuredClone(n);for(let i of r.floors){let a=i.placements.find(s=>s.entity_id===e);a&&t(a,i)}this.data.edit(r)}moveDevice(e){let{id:t,x:n,z:r}=e.detail;this.editDevice(t,(i,a)=>{let[s,l]=Ji(a,i.x,i.z,n,r);Object.assign(i,{x:s,z:l})})}turnStep(){return V(this._selDevice??"")==="camera"?15:45}turnDevice(e){this._selDevice&&this.editDevice(this._selDevice,t=>t.rotation=(((t.rotation??0)+e)%360+360)%360)}deleteDevice(){let e=this._selDevice,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.placements=r.placements.filter(i=>i.entity_id!==e);this.data.edit(n),this._selDevice=null}renderDeviceFields(e){let t=this.data.building,n=t==null?void 0:t.floors.find(d=>d.placements.some(p=>p.entity_id===e)),r=n==null?void 0:n.placements.find(d=>d.entity_id===e);if(!n||!r)return x;let i=V(e),a=i==="light",s=i==="camera",l=r.mount==="ceiling",u=i?nn(i,n.height,a||s?r.mount??(s?"wall":"ceiling"):null):1,c=(d,p,h,m,g,f)=>_`<label class="fp3d-size" title=${d}
        >${d}
        <input
          type="number"
          inputmode="decimal"
          step=${h}
          min=${m}
          max=${g}
          .value=${String(Math.round(p*100)/100)}
          @change=${b=>{let w=parseFloat(b.target.value.replace(",","."));Number.isFinite(w)&&f(Math.min(g,Math.max(m,w)))}}
        />
      </label>`;return _`${a?_`<select class="fp3d-size-select" title=${this.t("lamp_mount")} @change=${d=>this.editDevice(e,p=>Object.assign(p,{mount:d.target.value,y:null}))}>
            ${["ceiling","floor","table","wall"].map(d=>_`<option value=${d} ?selected=${d===(r.mount??"ceiling")}>${this.t(`lamp_${d}`)}</option>`)}
          </select>`:x}
      ${s?_`<select class="fp3d-size-select" title=${this.t("camera_mount")} @change=${d=>this.editDevice(e,p=>Object.assign(p,{mount:d.target.value,y:null}))}>
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
      ${r.y!==null?_`<button class="fp3d-chip" @click=${()=>this.editDevice(e,d=>d.y=null)}>${this.t("height_auto")}</button>`:x}`}furnitureName(e){var n;let t=(n=this.data.building)==null?void 0:n.floors.flatMap(r=>r.furniture).find(r=>r.id===e);return t?Me(this.hass,t.type):""}moveFurniture(e){var a;let{id:t,x:n,z:r}=e.detail,i=((a=this.data.building)==null?void 0:a.settings.wall_interior)??.12;this.editFurniture(t,(s,l)=>{let[u,c]=Ji(l,s.x,s.z,n,r);Object.assign(s,{x:u,z:c});let d=Bd(l,s,i);d&&Object.assign(s,d)})}renderSizeFields(e){var l,u,c;let t=(l=this.data.building)==null?void 0:l.floors.flatMap(d=>d.furniture).find(d=>d.id===e);if(!t)return x;let n=Ia(this.hass,(u=this.data.building)==null?void 0:u.settings.units)==="imperial",r=d=>n?Aa(d):String(Math.round(d*100)/100),i=d=>n?Ta(d,"imperial"):parseFloat(d.replace(",",".")),a=(d,p)=>_`<label class="fp3d-size" title=${this.t(`size_${d}`)}
      >${p}
      <input
        type=${n?"text":"number"}
        inputmode="decimal"
        step="0.05"
        min="0.05"
        .value=${r(t[d])}
        @change=${h=>{let m=i(h.target.value)??NaN;Number.isFinite(m)&&m>0&&this.editFurniture(e,g=>g[d]=Math.round(m*1e3)/1e3)}}
    /></label>`,s=(c=this.data.building)==null?void 0:c.floors.find(d=>d.furniture.some(p=>p.id===e));return _`${a("w",this.t("size_short_w"))}${a("d",this.t("size_short_d"))}${a("h",this.t("size_short_h"))}
    ${s&&Cs(t)?_`<label class="fp3d-size" title=${this.t("mount_height")}
            >↕
            <input
              type=${n?"text":"number"}
              inputmode="decimal"
              step="0.05"
              min="0"
              .value=${r(t.mount_y??fe(s,t))}
              @change=${d=>{let p=i(d.target.value)??NaN;Number.isFinite(p)&&p>=0&&this.editFurniture(e,h=>h.mount_y=Math.round(p*1e3)/1e3)}}
          /></label>
          ${t.mount_y!=null?_`<button class="fp3d-chip" @click=${()=>this.editFurniture(e,d=>d.mount_y=null)}>${this.t("height_auto")}</button>`:x}`:x}`}turnFurniture(e){this._selFurniture&&this.editFurniture(this._selFurniture,t=>t.rotation=((t.rotation+e)%360+360)%360)}deleteFurniture(){let e=this._selFurniture,t=this.data.building;if(!e||!t)return;let n=structuredClone(t);for(let r of n.floors)r.furniture=r.furniture.filter(i=>i.id!==e);this.data.edit(n),this._selFurniture=null}rememberStartView(e=!1){var r;let t=this.data.building;if(!t)return;let n=e?null:(r=this.view3d())==null?void 0:r.currentView();!e&&!n||this.data.edit({...t,settings:{...t.settings,start_view:n??null}})}view3d(){return this.renderRoot.querySelector("fp3d-view3d")}toggleTimeTravel(e=null){if(this.tt.active){this.tt.stop();return}let t=this.view3d(),n=this.data.building;if(!(!t||!n||!this.hass)){if(!W("time_travel")){t.proHint("time_travel");return}this._furnish=!1,this._cameraWall=!1,this._proxmox=!1,this.tt.start({live:this.hass,building:n,spec:t.historyEntities(),quality:this._quality,at:e,t:(r,i)=>T(this.hass,r,i)})}}updated(){var t,n;if(!this.locateLab&&((n=(t=this.hass)==null?void 0:t.user)!=null&&n.is_admin)&&this.data.building&&Gr()&&(this.locateLab=su(()=>({hass:this.hass,building:this.data.building}))),this.ttLinked||!this.data.building||!Kt()||this._mode!=="view"||!this.view3d())return;this.ttLinked=!0;let e=new URLSearchParams(location.search).get("tt");e!==null&&W("time_travel")&&this.toggleTimeTravel(e)}back(){var e,t;this._roomId?this._roomId=null:this._floorId&&(((e=this.data.building)==null?void 0:e.floors.length)??0)>1?this._floorId=null:(t=this.view3d())==null||t.resetView()}onKey=e=>{e.key!=="Escape"||this._mode!=="view"||(this.tt.active?this.tt.stop():this.back())};connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),new URLSearchParams(location.search).get("tab")==="extensions"&&(this._mode="extensions")}disconnectedCallback(){var e;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.tt.stop(),(e=this.locateLab)==null||e.call(this),this.locateLab=null}render(){var n;let e=this.data.building,t=this.data.saveState;return _`
      <div class="fp3d-app ${this._clean&&this._mode==="view"?"fp3d-clean":""}" style=${this._accent?`--fp3d-accent:${this._accent}`:""}>
        ${this._micProbe&&this.hass?_`<fp3d-mic-probe .hass=${this.hass} .building=${e} @close=${()=>(this._micProbe=!1,Zo())}></fp3d-mic-probe>`:x}
        ${this._clean&&this._mode==="view"?x:_`<header class="fp3d-header">
          <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}></ha-menu-button>
          <h1>CasaNeon</h1>
          ${this.isAdmin?_`<div class="fp3d-seg" role="tablist">
                <button role="tab" aria-pressed=${this._mode==="view"} @click=${()=>this.setMode("view")}>${this.t("view")}</button>
                ${this.canEdit?_`<button role="tab" aria-pressed=${this._mode==="editor"} @click=${()=>this.setMode("editor")}>${this.t("editor")}</button>`:x}
                <button role="tab" class="fp3d-tab-ext" aria-pressed=${this._mode==="extensions"} @click=${()=>this.setMode("extensions")}>
                  ✦ ${this.t("ext_tab")}
                </button>
              </div>`:x}
          <span class="fp3d-grow"></span>
          ${this._mode==="view"&&(e!=null&&e.floors.some(r=>r.rooms.length))?_`<button
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
                ${["auto","low","high"].map(r=>_`<button aria-pressed=${this._quality===r} @click=${()=>this.setQuality(r)}>${this.t(`quality_${r}`)}</button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("theme")}>
                ${[...Ii,"auto"].map(r=>_`<button
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
                  ${this._accent?_`<button
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
                ${["off","tl","tr","bl","br"].map(r=>_`<button aria-pressed=${this._clock===r} title=${this.t(`clock_${r}`)} aria-label=${this.t(`clock_${r}`)} @click=${()=>{this._clock=r,ee.set("clock",r)}}>
                      ${r==="off"?this.t("clock_off"):Rf[r]}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("markers")}>
                ${["none","room","important","all"].map(r=>_`<button
                      aria-pressed=${this._markers===r}
                      title=${this.t("markers")}
                      @click=${()=>{this._markers=r,ee.set("markers",r)}}
                    >
                      ${this.t(`markers_${r}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("pin_size")} title=${this.t("pin_size")}>
                ${["small","normal","large"].map(r=>_`<button
                      aria-pressed=${this._pinSize===r}
                      @click=${()=>{this._pinSize=r,ee.set("pinSize",r)}}
                    >
                      ${this.t(`pin_size_${r}`)}
                    </button>`)}
              </div>
              <div class="fp3d-seg fp3d-quality" role="group" aria-label=${this.t("controls_side")} title=${this.t("controls_side")}>
                ${[!1,!0].map(r=>_`<button
                      aria-pressed=${this._controlsRight===r}
                      title=${this.t(r?"controls_right":"controls_left")}
                      aria-label=${this.t(r?"controls_right":"controls_left")}
                      @click=${()=>{this._controlsRight=r,ee.set("controls",r?"right":"left")}}
                    >
                      ${r?"\u25E8":"\u25E7"}
                    </button>`)}
                ${this.isAdmin?_`<button
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
                      ${(n=this.data.building)!=null&&n.settings.start_view?_`<button title=${`${this.t("start_view")}: ${this.t("start_view_reset")}`} aria-label=${this.t("start_view_reset")} @click=${()=>this.rememberStartView(!0)}>📌✕</button>`:x}`:x}
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
          ${this._mode==="editor"&&t!=="idle"?_`<span class="fp3d-save fp3d-save-${t}">${this.t(t==="saving"?"saving":t==="saved"?"saved":"save_error")}</span>`:x}
          <span class="fp3d-version" title=${this.t("version_hint",{backend:this.data.backendVersion??"?"})}>v${this.data.frontendVersion}</span>
        </header>`}
        ${this._clean&&this._mode==="view"?x:this.renderNotices()}
        ${this.data.error&&!e?_`<p class="fp3d-message">${this.t("load_error")}: ${this.data.error}</p>`:x}
        ${!e&&!this.data.error?_`<p class="fp3d-message">${this.t("loading")}</p>`:x}
        ${e?this._mode==="editor"&&this.canEdit?this.renderEditor(e):this._mode==="extensions"&&this.isAdmin?this.renderExtensions():this.renderView(e):x}
      </div>
    `}renderNotices(){var n;let e=this.data,t=[];if(e.needsRestart&&(e.versionGap==="frontend"?t.push(_`<div class="fp3d-notice fp3d-notice-warn">
            ${this.t("needs_reload",{frontend:e.frontendVersion,backend:e.backendVersion??"?"})}
            <button class="fp3d-btn" @click=${()=>location.reload()}>${this.t("reload_page")}</button>
          </div>`):t.push(_`<div class="fp3d-notice fp3d-notice-warn">${e.backendVersion?this.t("needs_restart",{version:e.backendVersion,frontend:e.frontendVersion}):this.t("needs_restart_old")}</div>`)),e.saveState==="error"&&e.saveError&&t.push(_`<div class="fp3d-notice fp3d-notice-error">${this.t("save_failed_detail",{error:e.saveError})}</div>`),e.draft&&this.isAdmin){let r=new Date(e.draft.savedAt).toLocaleString((n=this.hass)==null?void 0:n.language);t.push(_`<div class="fp3d-notice">
          <span>${this.t("draft_found",{time:r})}</span>
          <button class="fp3d-btn fp3d-primary" @click=${()=>e.restoreDraft()}>${this.t("draft_restore")}</button>
          <button class="fp3d-btn" @click=${()=>e.discardDraft()}>${this.t("draft_discard")}</button>
        </div>`)}return t.length?_`<div class="fp3d-notices">${t}</div>`:x}renderExtensions(){return this._editorReady?_`<fp3d-extensions
      class="fp3d-body"
      .hass=${this.hass}
      .packs=${this.data.packs}
      .building=${this.data.building}
      @building-edit=${e=>this.data.edit(e.detail)}
      @packs-changed=${()=>{this.data.reloadPacks()}}
    ></fp3d-extensions>`:(Cr().then(()=>this._editorReady=!0,e=>this.data.error=String(e)),_`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}renderEditor(e){return this._editorReady?_`<fp3d-editor
      class="fp3d-body"
      .hass=${this.hass}
      .building=${e}
      .narrow=${this.narrow}
      .packs=${this.data.packs}
      @packs-changed=${()=>{this.data.reloadPacks()}}
      @director-here=${()=>this._director=ea()}
      @voice-here=${()=>{this._voiceHere=Yi(),this._screen=Qi()}}
      @mic-probe=${()=>mt().then(()=>this._micProbe=!0).catch(()=>{})}
      @open-extensions=${()=>this.setMode("extensions")}
      @building-changed=${t=>this.data.edit(t.detail.building)}
    ></fp3d-editor>`:(Cr().then(()=>this._editorReady=!0,t=>this.data.error=String(t)),_`<div class="fp3d-empty"><p>${this.t("loading")}</p></div>`)}onNavWheel=e=>{if(this._navWrap||!e.deltaY||e.deltaX)return;let t=e.currentTarget;t.scrollWidth<=t.clientWidth||(t.scrollLeft+=e.deltaY,e.preventDefault())};renderView(e){var i,a,s;if(!e.floors.length||!e.floors.some(l=>l.rooms.length))return _`<div class="fp3d-empty">
        <p>${this.t(this.canEdit?"no_building_admin":"no_building")}</p>
        ${this.canEdit?_`<button class="fp3d-btn fp3d-primary" @click=${()=>this.setMode("editor")}>${this.t("open_editor")}</button>
              <p class="fp3d-phone-only">${this.t("phone_hint")}</p>`:x}
      </div>`;let t=e.floors.find(l=>l.id===this._floorId),n=t?[t]:e.floors,r=this.tt.active;return _`
      ${this._clean?x:_`<nav class="fp3d-nav ${this._navWrap?"fp3d-nav-wrap":""}" @wheel=${this.onNavWheel}>
        ${e.floors.length>1?_`<button class="fp3d-chip" aria-pressed=${this._floorId===null} @click=${()=>{this._floorId=null,this._roomId=null}}>
                ${this.t("all_floors")}
              </button>
              ${[...e.floors].reverse().map(l=>_`<button
                  class="fp3d-chip"
                  aria-pressed=${l.id===this._floorId}
                  @click=${()=>{this._floorId=l.id,this._roomId=null}}
                >
                  ${l.name}
                </button>`)}
              <span class="fp3d-sep"></span>`:x}
        ${n.flatMap(l=>[n.length>1&&ge(l).some(u=>u.name.trim())?_`<span class="fp3d-nav-floor">${l.name}</span>`:x,...ge(l).filter((u,c,d)=>u.name.trim()&&!(u.outdoor&&d.findIndex(p=>p.outdoor&&p.area_id===u.area_id&&p.name===u.name)<c)).map(u=>_`<button
              class="fp3d-chip fp3d-room-chip"
              aria-pressed=${u.id===this._roomId}
              @click=${()=>{e.floors.length>1&&(this._floorId=l.id),this._roomId=u.id===this._roomId?null:u.id}}
            >
              ${u.name}
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
          .pivotMark=${this._pinHover}
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
          .plain=${this._plain}
          .markerMode=${this._markers}
          .pinSize=${this._pinSize}
          .heatMode=${this._heat}
          .theme=${this._theme}
          .clock=${this._clock}
          .accent=${this._accent}
          ?furnish=${this._furnish&&!r}
          .selectedFurniture=${this._selFurniture}
          @furniture-select=${l=>this._selFurniture=l.detail.id}
          @furniture-move=${this.moveFurniture}
          @device-select=${l=>this._selDevice=l.detail.id}
          @device-move=${this.moveDevice}
          .quality=${this._quality}
          ?showStats=${this._stats}
          @room-tap=${this.onRoomTap}
          @open-extensions=${()=>this.setMode("extensions")}
          @floor-tap=${l=>{this._floorId=l.detail.floorId,this._roomId=null}}
          @back=${()=>this.back()}
        ></fp3d-view3d>
        ${this._roomId?_`<fp3d-room-panel
              class="fp3d-room-panel"
              @camera-look=${l=>{var u;return(u=this.view3d())==null?void 0:u.lookThrough(l.detail.entity)}}
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${r}
              .room=${e.floors.flatMap(l=>ge(l)).find(l=>l.id===this._roomId)??null}
              .floor=${e.floors.find(l=>ge(l).some(u=>u.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${rn(this.hass,e.floors)}
              .sheets=${this._roomId?((s=this.view3d())==null?void 0:s.roomSheets(this._roomId))??null:null}
              @sheet-open=${l=>{var u;return this._roomId&&((u=this.view3d())==null?void 0:u.openRoomSheet(this._roomId,l.detail.id))}}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:x}
        ${this.tt.session?_`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:x}
        ${this._clean?x:_`<div class="fp3d-overlay">
          <div class="fp3d-show-wrap">
            <button class="fp3d-chip" aria-haspopup="true" aria-expanded=${this._showOpen} @click=${()=>this._showOpen=!this._showOpen}>${this.t("show_menu")} <span class="fp3d-caret">▾</span></button>
            ${this._showOpen?_`<div class="fp3d-show-veil" @click=${()=>this._showOpen=!1}></div>
                  <div class="fp3d-show-panel">
          <div class="fp3d-seg">
            <button aria-pressed=${this._wallMode==="auto"} @click=${()=>this.setWallMode("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wallMode==="cut"} @click=${()=>this.setWallMode("cut")}>${this.t("walls_cut")}</button>
          </div>
          <div class="fp3d-seg" title=${this.t("plain_hint")}>
            <button aria-pressed=${!this._plain} @click=${()=>this.setPlain(!1)}>${this.t("plain_off")}</button>
            <button aria-pressed=${this._plain} @click=${()=>this.setPlain(!0)}>${this.t("plain_on")}</button>
          </div>
          ${e.floors.length>1&&!this._floorId?_`<div class="fp3d-seg">
                <button aria-pressed=${this._explode} @click=${()=>this.setExplode(!0)}>${this.t("floors_apart")}</button>
                <button aria-pressed=${!this._explode} @click=${()=>this.setExplode(!1)}>${this.t("floors_stacked")}</button>
              </div>`:x}
          ${!this._floorId&&e.settings.roof.type!=="none"?_`<div class="fp3d-seg">
                <button aria-pressed=${this._keepRoof} title=${this.t("roof_keep_hint")} @click=${()=>this.setKeepRoof(!this._keepRoof)}>${this.t("roof_keep")}</button>
              </div>`:x}
          ${e.floors.length>1&&this._floorId?_`<div class="fp3d-seg" role="group" aria-label=${this.t("card_floor_stack")}>
                ${["dim","stacked","single"].map(l=>_`<button
                      aria-pressed=${this._floorStack===l}
                      @click=${()=>{this._floorStack=l,ee.set("floor_stack",l)}}
                    >
                      ${this.t(`floor_stack_short_${l}`)}
                    </button>`)}
              </div>`:x}
          <div class="fp3d-seg" role="group" aria-label=${this.t("heatmap")}>
            ${["none","temperature","humidity","co2","values"].map(l=>_`<button
                  aria-pressed=${this._heat===l}
                  @click=${()=>{this._heat=l,ee.set("heat",l)}}
                >
                  ${this.t(l==="none"?"heat_off":`heat_short_${l}`)}
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
            ${W("camera_cockpit")?"":"\u{1F512} "}${this.t("trail_short")}
          </button>
          <button
            class="fp3d-chip"
            aria-pressed=${this._cameraWall}
            title=${this.t("camera_wall_hint")}
            @click=${()=>{this._cameraWall=!this._cameraWall,this._cameraWall&&(this._proxmox=!1)}}
          >
            ${W("camera_cockpit")?"":"\u{1F512} "}${this.t("cameras_short")}
          </button>
          ${Ec(this.hass)?_`<button
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
            ${W("weather")?"":"\u{1F512} "}${this.t("weather_short")}
          </button>
                  </div>`:x}
          </div>
          <button class="fp3d-chip fp3d-tt-chip" aria-pressed=${r} title=${this.t("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
            ${W("time_travel")?"\u23EA":"\u{1F512}"} ${this.t("tt_chip")}
          </button>
          ${this._roomId||this._floorId&&e.floors.length>1?_`<button class="fp3d-chip" @click=${()=>this.back()}>${this.t("back")}</button>`:x}
        </div>`}
        ${this._furnish?_`<div class="fp3d-furnish-bar">
              ${this._selFurniture?_`<span>${this.furnitureName(this._selFurniture)}</span>
                    ${this.renderSizeFields(this._selFurniture)}
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(-45)}>↺ 45°</button>
                    <button class="fp3d-chip" @click=${()=>this.turnFurniture(45)}>↻ 45°</button>
                    <button class="fp3d-chip" title=${this.t("furn_mirror_hint")} @click=${()=>this.editFurniture(this._selFurniture,l=>l.mirror=!l.mirror)}>⇋ ${this.t("furn_mirror")}</button>
                    <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>`:this._selDevice?_`<span>${Q(this.hass,this._selDevice)}</span>
                      ${this.renderDeviceFields(this._selDevice)}
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(-this.turnStep())}>↺ ${this.turnStep()}°</button>
                      <button class="fp3d-chip" @click=${()=>this.turnDevice(this.turnStep())}>↻ ${this.turnStep()}°</button>
                      <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteDevice()}>${this.t("delete")}</button>`:_`<span>${this.t("furnish_hint")}</span>`}
              <button class="fp3d-chip fp3d-chip-on" @click=${()=>(this._furnish=!1,this._selFurniture=null,this._selDevice=null)}>${this.t("done")}</button>
            </div>`:x}
      </div>
    `}static styles=[Ke,ut,Ae`
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
    `]};customElements.get("neonplan3d-panel")||customElements.define("neonplan3d-panel",aa);function nr(o,e,t=new Date){var s;if(!o||o==="off")return!1;if(o==="sun")return((s=e==null?void 0:e.states["sun.sun"])==null?void 0:s.state)==="below_horizon";let n=/^(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})$/.exec(o.trim());if(!n)return!1;let r=Number(n[1])*60+Number(n[2]),i=Number(n[3])*60+Number(n[4]),a=t.getHours()*60+t.getMinutes();return r<=i?a>=r&&a<i:a>=r||a<i}var lu;function cu(){let o=new URL("./neonplan3d-card-editor.js?v=fb460924cf81",new URL(import.meta.url)).href;return lu??=import(o),lu}function du(){try{let o=localStorage.getItem("neonplan3d.card_walls");return o==="auto"||o==="cut"?o:null}catch{return null}}var sa=class extends Ie{static properties={hass:{attribute:!1},_config:{state:!0},_roomId:{state:!0},_floorId:{state:!0},_walls:{state:!0},_heat:{state:!0},_explode:{state:!0},_fullscreen:{state:!0},_pseudoFull:{state:!0},_vh:{state:!0},_top:{state:!0},_cameraWall:{state:!0},_clean:{state:!0},_night:{state:!0},_orbit:{state:!0}};roomApplied=!1;cleanTimer;idleTimer;nightTimer;data=new Xt(this);tt=new _n(this);constructor(){super(),this._roomId=null,this._floorId=void 0,this._walls=du(),this._heat=null,this._explode=null,this._fullscreen=!1,this._pseudoFull=!1,this._vh=window.innerHeight,this._top=null,this._cameraWall=!1,this._clean=!1,this._night=!1,this._orbit=!1}touch=()=>{this._orbit&&(this._orbit=!1),this.armIdle(),this.armClean(!0)};armClean(e=!1){var n;clearTimeout(this.cleanTimer);let t=((n=this._config)==null?void 0:n.controls_hide_after)??0;t>0&&(e&&this._clean&&(this._clean=!1),this.cleanTimer=setTimeout(()=>this._clean=!0,t*1e3))}armIdle(){var t;clearTimeout(this.idleTimer);let e=((t=this._config)==null?void 0:t.idle_return)??0;e>0&&(this.idleTimer=setTimeout(()=>this.returnHome(),e*1e3))}view3d(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("fp3d-view3d")}toggleTimeTravel(){if(this.tt.active){this.tt.stop();return}let e=this.view3d(),t=this.data.building;if(!e||!t||!this.hass)return;if(!W("time_travel")){e.proHint("time_travel");return}this._cameraWall=!1;let n=this._config;this.tt.start({live:this.hass,building:t,spec:e.historyEntities(),quality:(n==null?void 0:n.quality)??"auto",speed:(n==null?void 0:n.time_travel_speed)??null,range:(n==null?void 0:n.time_travel_range)??null,t:(r,i)=>T(this.hass,r,i)})}onKey=e=>{e.key==="Escape"&&this.tt.stop(),this.touch()};returnHome(){var e,t,n,r;if((e=this.tt.session)!=null&&e.playing){this.armIdle();return}this.tt.stop(),this._roomId=((t=this._config)==null?void 0:t.room)??null,this._floorId=void 0,(n=this.view3d())==null||n.resetView(),(r=this._config)!=null&&r.idle_orbit&&(this._orbit=!0)}openDashboard(e){history.pushState(null,"",e),window.dispatchEvent(new CustomEvent("location-changed",{bubbles:!0,composed:!0,detail:{replace:!1}}))}onFullscreen=()=>{var e;this._fullscreen=!!document.fullscreenElement&&((e=this.shadowRoot)==null?void 0:e.contains(document.fullscreenElement))===!0,requestAnimationFrame(this.onViewport)};onViewport=()=>{var t,n;let e=Math.round(((t=window.visualViewport)==null?void 0:t.height)??window.innerHeight);if(Math.abs(e-this._vh)>1&&(this._vh=e),(n=this._config)!=null&&n.fill&&!this._fullscreen){let r=Math.round(this.getBoundingClientRect().top+window.scrollY);(this._top===null||Math.abs(r-this._top)>1)&&(this._top=r)}};connectedCallback(){var e;super.connectedCallback(),document.addEventListener("fullscreenchange",this.onFullscreen),window.addEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.addEventListener("resize",this.onViewport),requestAnimationFrame(this.onViewport),setTimeout(this.onViewport,600),this.armIdle(),this.nightTimer=setInterval(()=>{var t;return this._night=nr((t=this._config)==null?void 0:t.night,this.hass)},6e4)}disconnectedCallback(){var e;super.disconnectedCallback(),document.removeEventListener("fullscreenchange",this.onFullscreen),window.removeEventListener("resize",this.onViewport),(e=window.visualViewport)==null||e.removeEventListener("resize",this.onViewport),this.tt.stop(),clearTimeout(this.cleanTimer),clearTimeout(this.idleTimer),clearInterval(this.nightTimer)}toggleFullscreen(){var n;if(this._pseudoFull){this._pseudoFull=!1,this._fullscreen=!1,requestAnimationFrame(this.onViewport);return}if(document.fullscreenElement){document.exitFullscreen();return}let e=(n=this.shadowRoot)==null?void 0:n.querySelector("ha-card"),t=()=>{this._pseudoFull=!0,this._fullscreen=!0,requestAnimationFrame(this.onViewport)};e!=null&&e.requestFullscreen?e.requestFullscreen().catch(t):t()}static async getConfigElement(){return await cu(),document.createElement("neonplan3d-card-editor")}static getStubConfig(){return{type:"custom:neonplan3d-card"}}setWalls(e){this._walls=e;try{localStorage.setItem("neonplan3d.card_walls",e)}catch{}}setConfig(e){if(e.height!==void 0&&!(e.height>100))throw new Error("height must be a number of pixels above 100");this._config=e,this._floorId=void 0,this._walls=du(),this._heat=null,this._explode=null,this._orbit=!1,this._night=nr(e.night,this.hass),this._clean=e.controls_hidden===!0,this.armClean(),this.armIdle()}getCardSize(){var e;return Math.ceil((((e=this._config)==null?void 0:e.height)??420)/50)}getGridOptions(){var e,t;return{columns:"full",rows:(e=this._config)!=null&&e.fill?12:Math.ceil((((t=this._config)==null?void 0:t.height)??420)/56),min_rows:4}}willUpdate(e){var t,n;if(e.has("hass")&&this.hass){this.data.setHass(this.hass),(t=this.tt.session)==null||t.setLive(this.hass);let r=nr((n=this._config)==null?void 0:n.night,this.hass);r!==this._night&&(this._night=r)}}get canSwitch(){var e;return!((e=this._config)!=null&&e.floor)||this.thumbs}get thumbs(){var e,t;return((e=this._config)==null?void 0:e.floor_thumbs)??!((t=this._config)!=null&&t.floor)}currentFloor(){var n;let e=this.data.building,t=this._floorId===void 0?((n=this._config)==null?void 0:n.floor)??null:this._floorId;return e&&e.floors.length===1?e.floors[0].id:e!=null&&e.floors.some(r=>r.id===t)?t:null}back(){this._roomId?this._roomId=null:this.canSwitch&&(this._floorId=null)}render(){var b,w,y,S,P,I,v,O,K,A,M,$,E,C,j,N,J,F,B,q,ne,H,se;let e=this.data.building,t=((b=this._config)==null?void 0:b.height)??420,n=this._config;!this.roomApplied&&e&&(n!=null&&n.room)&&(this.roomApplied=!0,e.floors.some(G=>ge(G).some(le=>le.id===n.room))&&(this._roomId=n.room));let r=this.currentFloor(),i=!!this._roomId&&(n==null?void 0:n.room_panel)===!1||!this.thumbs&&this.canSwitch&&!this._roomId&&!!r&&((e==null?void 0:e.floors.length)??0)>1,a=G=>(n==null?void 0:n.controls)===!0||Array.isArray(n==null?void 0:n.controls)&&n.controls.includes(G),s=["temperature","humidity","co2"].filter(G=>a(G)),l=this._walls??(n==null?void 0:n.walls)??"auto",u=this._heat??(n==null?void 0:n.heatmap)??"none",c=this._explode??(n==null?void 0:n.explode)??!0,d=this._fullscreen?"100%":n!=null&&n.fill?this._top!==null?`${Math.max(240,this._vh-this._top-2)}px`:"calc(100vh - var(--header-height, 56px) - 2px)":`${t}px`,p=!!e&&!this._clean&&(i||(!!(n!=null&&n.controls)||!!(n!=null&&n.time_travel))&&!(this._roomId&&n.room_panel!==!1)),h=this.tt.active,m=(n==null?void 0:n.controls_hidden)!==void 0||((n==null?void 0:n.controls_hide_after)??0)>0,g=G=>T(this.hass,G),f=/^#[0-9a-f]{6}$/i.test((n==null?void 0:n.accent)??"")?n.accent:null;return _`<ha-card class="${this._night?"fp3d-night":""} ${this._pseudoFull?"fp3d-pseudo-full":""}" style=${f?`--fp3d-accent:${f}`:""} @pointerdown=${this.touch} @keydown=${this.onKey} @wheel=${this.touch}>
      <div class="fp3d-card-body ${h?"fp3d-tt":""}" style="height:${d}">
        ${e&&e.floors.some(G=>G.rooms.length)?_`<fp3d-view3d
              .hass=${this.tt.hass(this.hass)}
              .replay=${((w=this.tt.session)==null?void 0:w.replay)??null}
              .building=${e}
              .packs=${this.data.packs}
              .floorId=${r}
              .roomId=${this._roomId}
              .wallMode=${l}
              .explode=${c}
              .keepRoof=${(n==null?void 0:n.roof_fade)===!1}
              .plain=${(n==null?void 0:n.plain)===!0}
              .hideRoof=${(n==null?void 0:n.roof)===!1}
              .quality=${((y=this._config)==null?void 0:y.quality)??"auto"}
              ?showStats=${((S=this._config)==null?void 0:S.stats)??!1}
              .markerMode=${((P=this._config)==null?void 0:P.markers)??"important"}
              .pinSize=${((I=this._config)==null?void 0:I.marker_size)??"normal"}
              .markerNames=${((v=this._config)==null?void 0:v.marker_names)===!0}
              .central=${((O=this._config)==null?void 0:O.central)!==!1}
              .walkable=${((K=this._config)==null?void 0:K.walk)!==!1}
              .petsOn=${((A=this._config)==null?void 0:A.pets)!==!1}
              .ghostOn=${((M=this._config)==null?void 0:M.ghost)!==!1}
              .buttons=${((E=($=this._config)==null?void 0:$.buttons)==null?void 0:E.map((G,le)=>({id:`card_${le}`,...G})))??null}
              .heatMode=${u}
              .theme=${((C=this._config)==null?void 0:C.theme)??"neon"}
              .clock=${((j=this._config)==null?void 0:j.clock)??null}
              .accent=${((N=this._config)==null?void 0:N.accent)??null}
              .showEnergy=${((J=this._config)==null?void 0:J.energy)??!0}
              .flows=${((F=this._config)==null?void 0:F.flows)??null}
              .holograms=${((B=this._config)==null?void 0:B.holograms)??null}
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
              .screen=${((q=n==null?void 0:n.screen)==null?void 0:q.trim())||null}
              .voiceArea=${((ne=n==null?void 0:n.voice_area)==null?void 0:ne.trim())||null}
              @open-extensions=${()=>this.openDashboard("/neonplan3d?tab=extensions")}
              .scenes=${(n==null?void 0:n.scenes)!==!1}
              ?trail=${!!(n!=null&&n.motion_trail)}
              .cameraWall=${this._cameraWall&&!h}
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
              style=${h?`--fp3d-bottom-inset: ${p?"calc(52px + var(--fp3d-tt-h))":"var(--fp3d-tt-h)"}`:p?"--fp3d-bottom-inset: 52px":""}
              @room-tap=${G=>{if(this.canSwitch&&((e==null?void 0:e.floors.length)??0)>1&&G.detail.floorId&&this.currentFloor()!==G.detail.floorId){this._floorId=G.detail.floorId,this._roomId=null;return}G.detail.roomId&&(this._roomId=G.detail.roomId===this._roomId?null:G.detail.roomId)}}
              @floor-tap=${G=>{this._floorId=G.detail.floorId,this._roomId=null}}
              @back=${()=>this.back()}
            ></fp3d-view3d>`:_`<p class="fp3d-card-msg">${this.data.error??(e?T(this.hass,"no_building"):T(this.hass,"loading"))}</p>`}
        ${this._roomId&&e&&((H=this._config)==null?void 0:H.room_panel)!==!1?_`<fp3d-room-panel
              @camera-look=${G=>{var le;return(le=this.view3d())==null?void 0:le.lookThrough(G.detail.entity)}}
              class="fp3d-card-panel"
              .hass=${this.tt.hass(this.hass)}
              ?readOnly=${h}
              .room=${e.floors.flatMap(G=>ge(G)).find(G=>G.id===this._roomId)??null}
              .floor=${e.floors.find(G=>ge(G).some(le=>le.id===this._roomId))??null}
              .building=${e}
              .confirmEntities=${rn(this.hass,e.floors)}
              .sheets=${this._roomId?((se=this.view3d())==null?void 0:se.roomSheets(this._roomId))??null:null}
              @sheet-open=${G=>{var le;return this._roomId&&((le=this.view3d())==null?void 0:le.openRoomSheet(this._roomId,G.detail.id))}}
              @close=${()=>this._roomId=null}
            ></fp3d-room-panel>`:x}
        ${p&&e?_`<div class="fp3d-card-controls">
              ${i?_`<button class="fp3d-chip" @click=${()=>this.back()}>${g("back")}</button>`:x}
              ${n!=null&&n.time_travel?_`<button class="fp3d-chip fp3d-tt-chip" aria-pressed=${h} title=${g("tt_hint")} @click=${()=>this.toggleTimeTravel()}>
                    ${W("time_travel")?"\u23EA":"\u{1F512}"} ${g("tt_chip")}
                  </button>`:x}
              ${n!=null&&n.camera_wall?_`<button class="fp3d-chip" aria-pressed=${this._cameraWall} title=${g("camera_wall_hint")} @click=${()=>this._cameraWall=!this._cameraWall}>${g("cameras_short")}</button>`:x}
              ${a("walls")?_`<div class="fp3d-seg">
                    <button aria-pressed=${l==="auto"} @click=${()=>this.setWalls("auto")}>${g("walls_auto")}</button>
                    <button aria-pressed=${l==="cut"} @click=${()=>this.setWalls("cut")}>${g("walls_cut")}</button>
                  </div>`:x}
              ${a("floors")&&e.floors.length>1&&!r?_`<div class="fp3d-seg">
                    <button aria-pressed=${c} @click=${()=>this._explode=!0}>${g("floors_apart")}</button>
                    <button aria-pressed=${!c} @click=${()=>this._explode=!1}>${g("floors_stacked")}</button>
                  </div>`:x}
              ${s.length?_`<div class="fp3d-seg" role="group" aria-label=${g("heatmap")}>
                    ${["none",...s].map(G=>_`<button aria-pressed=${u===G} @click=${()=>this._heat=G}>
                          ${g(G==="none"?"heat_off":`heat_short_${G}`)}
                        </button>`)}
                  </div>`:x}
            </div>`:x}
        ${this.tt.session?_`<fp3d-time-bar .session=${this.tt.session}></fp3d-time-bar>`:x}
        ${n!=null&&n.fullscreen_button&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?_`<button class="fp3d-card-full" title=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} aria-label=${g(this._fullscreen?"fullscreen_exit":"fullscreen")} @click=${()=>this.toggleFullscreen()}>
              ${this._fullscreen?"\u2715":"\u26F6"}
            </button>`:x}
        ${n!=null&&n.dashboard&&!this._clean&&!(this._roomId&&n.room_panel!==!1)?_`<button class="fp3d-card-full fp3d-card-dash ${n.fullscreen_button?"fp3d-card-dash-2":""}" title=${n.dashboard_label||n.dashboard} aria-label=${n.dashboard_label||n.dashboard} @click=${()=>this.openDashboard(n.dashboard)}>
              ${n.dashboard_label?_`<span>${n.dashboard_label}</span>`:"\u2302"}
            </button>`:x}
      </div>
    </ha-card>`}static styles=[Ke,ut,Ae`
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
    `]};if(!customElements.get("neonplan3d-card")){customElements.define("neonplan3d-card",sa);let o=window;o.customCards=o.customCards??[],o.customCards.push({type:"neonplan3d-card",name:T(void 0,"card_name"),description:T(void 0,"card_description"),preview:!1})}Pa();Xo();
