var Sn=globalThis,Pn=Sn.ShadowRoot&&(Sn.ShadyCSS===void 0||Sn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_o=Symbol(),Di=new WeakMap,Ze=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==_o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Pn&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Di.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Di.set(e,t))}return t}toString(){return this.cssText}},Hi=a=>new Ze(typeof a=="string"?a:a+"",void 0,_o),Ct=(a,...t)=>{let e=a.length===1?a[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+a[i+1],a[0]);return new Ze(e,a,_o)},Wi=(a,t)=>{if(Pn)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=Sn.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,a.appendChild(n)}},bo=Pn?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Hi(e)})(a):a;var{is:Da,defineProperty:Ha,getOwnPropertyDescriptor:Wa,getOwnPropertyNames:Na,getOwnPropertySymbols:Ba,getPrototypeOf:qa}=Object,En=globalThis,Ni=En.trustedTypes,Ua=Ni?Ni.emptyScript:"",vo=En.reactiveElementPolyfillSupport,Xe=(a,t)=>a,yo={toAttribute(a,t){switch(t){case Boolean:a=a?Ua:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},qi=(a,t)=>!Da(a,t),Bi={attribute:!0,type:String,converter:yo,reflect:!1,useDefault:!1,hasChanged:qi};Symbol.metadata??=Symbol("metadata"),En.litPropertyMetadata??=new WeakMap;var Kt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Bi){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&Ha(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:i}=Wa(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:o,set(s){let r=o==null?void 0:o.call(this);i==null||i.call(this,s),this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Bi}static _$Ei(){if(this.hasOwnProperty(Xe("elementProperties")))return;let t=qa(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xe("properties"))){let e=this.properties,n=[...Na(e),...Ba(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(bo(o))}else t!==void 0&&e.push(bo(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Wi(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var i;let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:yo).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){var i,s;let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let r=n.getPropertyOptions(o),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)==null?void 0:i.fromAttribute)!==void 0?r.converter:yo;this._$Em=o;let c=l.fromAttribute(e,r.type);this[o]=c??((s=this._$Ej)==null?void 0:s.get(o))??c,this._$Em=null}}requestUpdate(t,e,n,o=!1,i){var s;if(t!==void 0){let r=this.constructor;if(o===!1&&(i=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??qi)(i,e)||n.useDefault&&n.reflect&&i===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[i,s]of o){let{wrapped:r}=s,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Kt.elementStyles=[],Kt.shadowRootOptions={mode:"open"},Kt[Xe("elementProperties")]=new Map,Kt[Xe("finalized")]=new Map,vo==null||vo({ReactiveElement:Kt}),(En.reactiveElementVersions??=[]).push("2.1.2");var wo=globalThis,Ui=a=>a,An=wo.trustedTypes,Ki=An?An.createPolicy("lit-html",{createHTML:a=>a}):void 0,ko="$lit$",Gt=`lit$${Math.random().toFixed(9).slice(2)}$`,Mo="?"+Gt,Ka=`<${Mo}>`,_e=document,en=()=>_e.createComment(""),nn=a=>a===null||typeof a!="object"&&typeof a!="function",So=Array.isArray,Xi=a=>So(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",$o=`[ 	
\f\r]`,tn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gi=/-->/g,Ji=/>/g,me=RegExp(`>|${$o}(?:([^\\s"'>=/]+)(${$o}*=${$o}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yi=/'/g,Qi=/"/g,ts=/^(?:script|style|textarea|title)$/i,Po=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),v=Po(1),T=Po(2),kc=Po(3),Jt=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Zi=new WeakMap,ge=_e.createTreeWalker(_e,129);function es(a,t){if(!So(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ki!==void 0?Ki.createHTML(t):t}var ns=(a,t)=>{let e=a.length-1,n=[],o,i=t===2?"<svg>":t===3?"<math>":"",s=tn;for(let r=0;r<e;r++){let l=a[r],c,d,p=-1,u=0;for(;u<l.length&&(s.lastIndex=u,d=s.exec(l),d!==null);)u=s.lastIndex,s===tn?d[1]==="!--"?s=Gi:d[1]!==void 0?s=Ji:d[2]!==void 0?(ts.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=me):d[3]!==void 0&&(s=me):s===me?d[0]===">"?(s=o??tn,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?me:d[3]==='"'?Qi:Yi):s===Qi||s===Yi?s=me:s===Gi||s===Ji?s=tn:(s=me,o=void 0);let f=s===me&&a[r+1].startsWith("/>")?" ":"";i+=s===tn?l+Ka:p>=0?(n.push(c),l.slice(0,p)+ko+l.slice(p)+Gt+f):l+Gt+(p===-2?r:f)}return[es(a,i+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},on=class a{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let i=0,s=0,r=t.length-1,l=this.parts,[c,d]=ns(t,e);if(this.el=a.createElement(c,n),ge.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=ge.nextNode())!==null&&l.length<r;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(ko)){let u=d[s++],f=o.getAttribute(p).split(Gt),m=/([.?@])?(.*)/.exec(u);l.push({type:1,index:i,name:m[2],strings:f,ctor:m[1]==="."?In:m[1]==="?"?Fn:m[1]==="@"?Rn:ve}),o.removeAttribute(p)}else p.startsWith(Gt)&&(l.push({type:6,index:i}),o.removeAttribute(p));if(ts.test(o.tagName)){let p=o.textContent.split(Gt),u=p.length-1;if(u>0){o.textContent=An?An.emptyScript:"";for(let f=0;f<u;f++)o.append(p[f],en()),ge.nextNode(),l.push({type:2,index:++i});o.append(p[u],en())}}}else if(o.nodeType===8)if(o.data===Mo)l.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(Gt,p+1))!==-1;)l.push({type:7,index:i}),p+=Gt.length-1}i++}}static createElement(t,e){let n=_e.createElement("template");return n.innerHTML=t,n}};function be(a,t,e=a,n){var s,r;if(t===Jt)return t;let o=n!==void 0?(s=e._$Co)==null?void 0:s[n]:e._$Cl,i=nn(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((r=o==null?void 0:o._$AO)==null||r.call(o,!1),i===void 0?o=void 0:(o=new i(a),o._$AT(a,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=be(a,o._$AS(a,t.values),o,n)),t}var zn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??_e).importNode(e,!0);ge.currentNode=o;let i=ge.nextNode(),s=0,r=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Ie(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new On(i,this,t)),this._$AV.push(c),l=n[++r]}s!==(l==null?void 0:l.index)&&(i=ge.nextNode(),s++)}return ge.currentNode=_e,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Ie=class a{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=be(this,t,e),nn(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==Jt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xi(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&nn(this._$AH)?this._$AA.nextSibling.data=t:this.T(_e.createTextNode(t)),this._$AH=t}$(t){var i;let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=on.createElement(es(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(e);else{let s=new zn(o,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Zi.get(t.strings);return e===void 0&&Zi.set(t.strings,e=new on(t)),e}k(t){So(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let i of t)o===e.length?e.push(n=new a(this.O(en()),this.O(en()),this,this.options)):n=e[o],n._$AI(i),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){let o=Ui(t).nextSibling;Ui(t).remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},ve=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,i){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,e=this,n,o){let i=this.strings,s=!1;if(i===void 0)t=be(this,t,e,0),s=!nn(t)||t!==this._$AH&&t!==Jt,s&&(this._$AH=t);else{let r=t,l,c;for(t=i[0],l=0;l<i.length-1;l++)c=be(this,r[n+l],e,l),c===Jt&&(c=this._$AH[l]),s||=!nn(c)||c!==this._$AH[l],c===$?t=$:t!==$&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},In=class extends ve{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},Fn=class extends ve{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},Rn=class extends ve{constructor(t,e,n,o,i){super(t,e,n,o,i),this.type=5}_$AI(t,e=this){if((t=be(this,t,e,0)??$)===Jt)return;let n=this._$AH,o=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==$&&(n===$||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},On=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){be(this,t)}},os={M:ko,P:Gt,A:Mo,C:1,L:ns,R:zn,D:Xi,V:be,I:Ie,H:ve,N:Fn,U:Rn,B:In,F:On},xo=wo.litHtmlPolyfillSupport;xo==null||xo(on,Ie),(wo.litHtmlVersions??=[]).push("3.3.3");var is=(a,t,e)=>{let n=(e==null?void 0:e.renderBefore)??t,o=n._$litPart$;if(o===void 0){let i=(e==null?void 0:e.renderBefore)??null;n._$litPart$=o=new Ie(t.insertBefore(en(),i),i,void 0,e??{})}return o._$AI(a),o};var sn=globalThis,Et=class extends Kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=is(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Jt}},ss;Et._$litElement$=!0,Et.finalized=!0,(ss=sn.litElementHydrateSupport)==null||ss.call(sn,{LitElement:Et});var Eo=sn.litElementPolyfillSupport;Eo==null||Eo({LitElement:Et});(sn.litElementVersions??=[]).push("4.2.2");var Ln={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},rn=a=>(...t)=>({_$litDirective$:a,values:t}),Fe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var an=class extends Fe{constructor(t){if(super(t),this.it=$,t.type!==Ln.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$||t==null)return this._t=void 0,this.it=t;if(t===Jt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};an.directiveName="unsafeHTML",an.resultType=1;var rs=rn(an);var{I:Bc}=os;var as=a=>a.strings===void 0;var ln=(a,t)=>{var n;let e=a._$AN;if(e===void 0)return!1;for(let o of e)(n=o._$AO)==null||n.call(o,t,!1),ln(o,t);return!0},Vn=a=>{let t,e;do{if((t=a._$AM)===void 0)break;e=t._$AN,e.delete(a),a=t}while((e==null?void 0:e.size)===0)},ls=a=>{for(let t;t=a._$AM;a=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(a))break;e.add(a),Ya(t)}};function Ga(a){this._$AN!==void 0?(Vn(this),this._$AM=a,ls(this)):this._$AM=a}function Ja(a,t=!1,e=0){let n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let i=e;i<n.length;i++)ln(n[i],!1),Vn(n[i]);else n!=null&&(ln(n,!1),Vn(n));else ln(this,a)}var Ya=a=>{a.type==Ln.CHILD&&(a._$AP??=Ja,a._$AQ??=Ga)},Tn=class extends Fe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),ls(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),e&&(ln(this,t),Vn(this))}setValue(t){if(as(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var Ao=new WeakMap,cs=rn(class extends Tn{render(a){return $}update(a,[t]){var n;let e=t!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=(n=a.options)==null?void 0:n.host,this.rt(this.ct=a.element)),$}rt(a){if(this.G!==void 0)if(this.isConnected||(a=void 0),typeof this.G=="function"){let t=this.ht??globalThis,e=Ao.get(t);e===void 0&&(e=new WeakMap,Ao.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,a),a!==void 0&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){var a,t;return typeof this.G=="function"?(a=Ao.get(this.ht??globalThis))==null?void 0:a.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});async function zo(a,t){return(await a.callWS({type:"neonplan3d/image/get",image_id:t})).data}async function jn(a,t,e){await a.callWS({type:"neonplan3d/image/set",image_id:t,data:e})}async function ds(a){return(await a.callWS({type:"neonplan3d/history/list"})).snapshots}async function ps(a){await a.callWS({type:"neonplan3d/history/snapshot"})}async function us(a,t){return(await a.callWS({type:"neonplan3d/history/restore",snapshot_id:t})).revision}async function hs(a,t){return a.callWS({type:"neonplan3d/packs/import",pack:t})}async function fs(a,t){await a.callWS({type:"neonplan3d/packs/remove",pack_id:t})}function ms(a){return a.callWS({type:"neonplan3d/backup/export"})}function gs(a,t,e){return a.callWS({type:"neonplan3d/backup/import",building:t,packs:e})}var Qa=[],Io=new Map,Za=0;function _s(a){Qa=a,Io=new Map(a.flatMap(t=>t.items.map(e=>[Re(t.id,e.id),e]))),Za++}function Re(a,t){return`pack:${a}:${t}`}function Oe(a){return a.startsWith("pack:")}var Xa={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function bs(a){var t;return(t=gt(a))==null?void 0:t.parts.find(e=>e.screen)}function vs(a){let t=gt(a);if(!t)return!1;let[e,n,o]=t.size;return t.parts.some(i=>{if(!i.screen)return!1;let[s,r]=[i.w*e,i.d*n,i.h*o].sort((l,c)=>c-l);return s>=.06&&r>=.06})}function gt(a){if(!Oe(a))return;let t=Io.get(a);if(t)return t;let[,e,...n]=a.split(":"),o=Xa[e];return o?Io.get(`pack:${o}:${n.join(":")}`):void 0}function oe(a){var t;return Dt[a]??((t=gt(a))==null?void 0:t.size)??[.6,.6,.8]}function cn(a){var t,e;return Ms.has(a)||!!((t=gt(a))!=null&&t.electric)||!!((e=gt(a))!=null&&e.light)}function ie(a){return a.name.es??a.name.en??Object.values(a.name)[0]??a.id}var tl={architecture:"Arquitectura y acabados",bath:"Ba\xF1o",bedroom:"Dormitorio",cinema:"Cine en casa y Hi-Fi",exclusive:"Exclusivo: frigor\xEDfico inteligente",fitness:"Fitness",garage:"Garaje y taller",garden:"Jard\xEDn y terraza",kids:"Cuarto infantil",kitchen:"Cocina",living:"Sal\xF3n",office:"Oficina y gaming",pets:"Mascotas",smarthome:"Smart home y tecnolog\xEDa",stairs:"Escaleras y barandillas",utility:"Lavadero e instalaciones",vehicles:"Veh\xEDculos",starter:"Pack de inicio",pro_auto:"Pro: Auto Pro",pro_timetravel:"Pro: Viaje en el tiempo",pro_pool:"Pro: Piscina Pro",pro_camera:"Pro: Cabina de c\xE1mara",pro_energy:"Pro: Energ\xEDa Pro",pro_screens:"Pro: Pantallas en directo",pro_sound:"Pro: Sonido y Cine",pro_weather:"Pro: Tiempo exterior"};function Yt(a){let t=a.id.replace(/^mastershort\./,""),e=t.endsWith("_sample"),n=tl[e?t.slice(0,-7):t];return n?e?`${n} \u2013 muestra`:n:a.name}function At(a,t){let e=gt(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return ys;if($s.has(t.type))return Math.max(0,a.height-xs(t.type,t.h));if(t.type==="led_strip")return Math.max(0,a.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return ks(a,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,a.height-t.h);default:return e?0:ws(t)}}var Ss=["always","no_power","never"],Ps=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Cn={field:null,size:1,right:0,up:0},Es=["navigate","more_info","service","fire_dom_event"];function Fo(a,t,e){return a?t?!!e.lock_plan:!!a.locked:!1}var As=["rain","snow","fog","clouds","lightning","sky"],Ro=["rain","snow","clouds","lightning","sky"],Oo=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],Dn={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Lo(a){return a==="hedge"||a==="fence"||a==="pergola"}var zs=["x","-x","z","-z"];function el(a,t,e){let n=a.slope??0;if(!n||a.type==="pool")return 0;let o=a.slope_dir??"x",i=(c,d)=>o==="x"?c:o==="-x"?-c:o==="z"?d:-d,s=1/0,r=-1/0;for(let[c,d]of a.points){let p=i(c,d);s=Math.min(s,p),r=Math.max(r,p)}if(r-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(t,e)-s)/(r-s)));return n*l}function nl(a,t,e,n){return Vo(a)+(t.offset??0)+Dn[t.type]-el(t,e,n)}function Vo(a){return a.elevation>.3?0:-.2}function Is(a,t,e){let n=(a.outdoor??[]).filter(i=>!Lo(i.type)&&i.type!=="pool"&&N([t,e],i.points)),o=[...n].reverse().find(i=>i.cut)??n[0];return o?nl(a,o,t,e):Vo(a)}var Fs=["filter","backwash","rinse","waste","recirculate","closed"];function Rs(a,t){let e=Vo(a)+(t.offset??0);return t.above?e+To(t)-.15:e+Dn.pool}function To(a){return a.height&&a.height>.3?a.height:1.2}function Hn(a,t,e,n,o){let i=_=>Math.round(_*1e3)/1e3,s=n-t,r=o-e,l=(t+n)/2,c=(e+o)/2;if(a==="rect")return[[t,e],[n,e],[n,o],[t,o]];let d=40;if(a==="round"){let _=Math.min(s,r)/2;return Array.from({length:d},(h,b)=>[i(l+_*Math.cos(b/d*Math.PI*2)),i(c+_*Math.sin(b/d*Math.PI*2))])}let p=s>=r,u=(p?r:s)/2,f=Math.max(0,(p?s:r)/2-u),m=[],g=d/2;for(let _=0;_<2;_++){let h=_===0?1:-1;for(let b=0;b<=g;b++){let y=-Math.PI/2+b/g*Math.PI+(_===0?0:Math.PI),S=h*f+u*Math.cos(y),E=u*Math.sin(y);m.push(p?[i(l+S),i(c+E)]:[i(l+E),i(c+S)])}}return m}var ol={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Os=["wood","oak","tiles","carpet","stone","concrete"],Ls={type:"none",pitch:35,overhang:.4},il={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Ls}};function Vs(a,t,e){return{id:a,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var sl=2.75;function Ts(a,t){if(t!=null&&Number.isFinite(t))return Math.round(t*sl*100)/100;let e=a.reduce((n,o)=>!n||o.elevation>n.elevation?o:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function js(a,t,e){let n=a.rooms.flatMap(r=>r.points.map(l=>l[0])),o=a.rooms.flatMap(r=>r.points.map(l=>l[1])),i=n.length?Math.ceil(Math.max(...n))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return t.map((r,l)=>{let c=i+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:e(),name:r.name,area_id:r.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function Cs(a,t,e,n){let o=a.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[r,l]=t,c=a.x-r*(a.w/2)*i+l*(a.d/2)*s,d=a.z-r*(a.w/2)*s-l*(a.d/2)*i,p=e[0]-c,u=e[1]-d,f=h=>Math.max(.1,Math.round(h/n)*n),m=f((p*i+u*s)*r),g=f((-p*s+u*i)*l),_=h=>Math.round(h*1e3)/1e3;return{x:_(c+r*(m/2)*i-l*(g/2)*s),z:_(d+r*(m/2)*s+l*(g/2)*i),w:_(m),d:_(g)}}var jo=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell"],Co={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","stairs_u","robot_vacuum"],vehicles:["parking"]},Ot=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Ds=.3,se=["meter","inverter","home_battery","wallbox","grid_point"],Hs=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),ys=1.75;function Le(a){if(["lamp_ceiling","lamp_panel","lamp_pendant","stairwell","parking"].includes(a.type)||Do.has(a.type))return!1;let t=gt(a.type);return!((t==null?void 0:t.mount)==="ceiling"&&t.light)}var $s=new Set(["lamp_downlight","lamp_spot"]);function xs(a,t){return a==="lamp_spot"?Math.max(.06,t)+.008:.02}var Do=new Set(["stairs","stairs_u"]);function Ws(a,t,e){let n=Math.max(4,Math.round(e/.18)),o=Math.floor(n/2)+1,i=o-1,s=n-o,r=Math.min(.12,a*.06),l=(a-r)/2,c=Math.min(l,t*.45),d=(t-c)/i;return{n,k:o,steps1:i,steps2:s,gap:r,fw:l,landing:c,run:d,rise:e/n}}function zt(a){var t;return Hs.has(a)||!!((t=gt(a))!=null&&t.light)}var rl=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Ho(a,t,e,n=0){let o=dt(a.points),i=o.x1-o.x0-2*n,s=o.z1-o.z0-2*n,r=[];for(let l=0;l<t;l++)for(let c=0;c<e;c++){let d=[Math.round((o.x0+n+i/e*(c+.5))*1e3)/1e3,Math.round((o.z0+n+s/t*(l+.5))*1e3)/1e3];N(d,a.points)&&r.push(d)}return r}function Ve(a,t,e){let n=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(a[0]+o*t),n(a[1]+i*t)]}function ws(a){switch(a.type){case"home_battery":return a.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-a.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function ks(a,t,e){var o;let n=0;for(let i of a.furniture)!(rl.has(i.type)||(o=gt(i.type))!=null&&o.surface)||!N([t,e],Ht(i))||(n=Math.max(n,i.h));return n}var Ms=new Set([...Hs,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Dt={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Wo=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],No=["standard","bars","glass_wall"];function Wn(a,t){return a.type==="door"?a.style&&Wo.includes(a.style)?a.style:t?"front":"interior":a.style&&No.includes(a.style)?a.style:"standard"}function Ns(a,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let o=t==="sidelights",i=a-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),r=(i-s)/(o?2:1),l=n.sidelight_width??r,c=o?n.sidelight_width2??n.sidelight_width??r:0;l=Math.max(.1,l),c=o?Math.max(.1,c):0;let d=i-.5;if(l+c>d){let u=Math.max(0,d)/(l+c);l*=u,c*=u}return o?{panels:[[.02,.02+l],[a-.02-c,a-.02]],x0:.02+l,x1:a-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:a-.02}:{panels:[[a-.02-l,a-.02]],x0:.02,x1:a-.02-l}}function Bo(a){return a==="front"||a==="front_glass"||a==="sidelight"||a==="sidelights"}var Nn={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function Bn(a){if(a.type==="garage")return"garage";if(a.type==="window"&&a.style==="glass_wall")return"glass_wall";let t=a.leaves===2;return a.type==="door"?!t&&a.style&&Bo(a.style)?"front":t?"door_double":"door":a.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function qn(a){var t;a.energy={...ol,...a.energy??{}},a.presence=a.presence??[],a.settings={...il,...a.settings,roof:{...Ls,...((t=a.settings)==null?void 0:t.roof)??{}}};for(let e of a.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(o=>({...o,panel:o.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(o=>({...o,mount:o.mount??null,rotation:o.rotation??0})),e.furniture=e.furniture.map(o=>({...o,entity:o.entity??null,power:o.power??null}));let n=e.placements.filter(o=>o.entity_id.startsWith("light.")&&!o.pin);if(n.length){let o={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of n){let s=o[i.mount??"ceiling"],[r,l,c]=Dt[s];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:i.x,z:i.z,rotation:0,w:r,d:l,h:c,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(o=>({...o,hinge:o.hinge??"left",leaves:o.leaves??1,swing:o.swing??"in",style:o.style??null,cover:o.cover??null,contact:o.contact??null,contact2:o.contact2??null,tilt:o.tilt??null}))}return a}function B(a){return`${a}_${Math.random().toString(36).slice(2,10)}`}function at(a){let t=0;for(let e=0;e<a.length;e++){let[n,o]=a[e],[i,s]=a[(e+1)%a.length];t+=n*s-i*o}return t/2}function xt(a){return Math.abs(at(a))}function Lt(a){let t=at(a);if(Math.abs(t)<1e-9){let o=a.length||1;return[a.reduce((i,s)=>i+s[0],0)/o,a.reduce((i,s)=>i+s[1],0)/o]}let e=0,n=0;for(let o=0;o<a.length;o++){let[i,s]=a[o],[r,l]=a[(o+1)%a.length],c=i*l-r*s;e+=(i+r)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function Un(a){if(a.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=a[t],[o,i]=a[(t+1)%4];if(Math.abs(e-o)>1e-6&&Math.abs(n-i)>1e-6)return!1}return!0}function dt(a){let t=1/0,e=1/0,n=-1/0,o=-1/0;for(let[i,s]of a)t=Math.min(t,i),e=Math.min(e,s),n=Math.max(n,i),o=Math.max(o,s);return{x0:t,z0:e,x1:n,z1:o}}function Ht(a){let t=a.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),o=a.w/2,i=a.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,r])=>[a.x+s*e-r*n,a.z+s*n+r*e])}function N(a,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[i,s]=t[n],[r,l]=t[o];s>a[1]!=l>a[1]&&a[0]<(r-i)*(a[1]-s)/(l-s)+i&&(e=!e)}return e}var qo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Bs="neonplan3d";function al(a){let t=structuredClone(a);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function qs(a,t){return{format:Bs,version:1,exported_at:new Date().toISOString(),building:t?al(a):structuredClone(a)}}function Us(a){let t;try{t=JSON.parse(a)}catch{throw new Error("not_json")}let e=t,n=(e==null?void 0:e.format)===Bs?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let o of n.floors)o.background=null;return qn(n)}function Ks(a){var e;let t=new Set;for(let n of a.floors){(e=n.background)!=null&&e.image_id&&t.add(n.background.image_id);for(let o of n.furniture)for(let i of o.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&t.add(i.image)}return[...t]}function Uo(a,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=a,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var ll={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},cl=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),dl=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),pl=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Kn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Zs=new Set(["light","switch","fan"]);function Xs(a){return a.slice(0,a.indexOf("."))}function Y(a){return ll[Xs(a)]??null}function pn(a){return a!==null&&a!=="scene"&&a!=="script"}function xe(a,t){var n,o,i;let e=(n=a.entities)==null?void 0:n[t];return e?e.area_id?e.area_id:e.device_id&&((i=(o=a.devices)==null?void 0:o[e.device_id])==null?void 0:i.area_id)||null:null}function Gs(a,t){var s;let e=Y(t);if(!e)return!1;let n=(s=a.entities)==null?void 0:s[t];if(n!=null&&n.hidden||n!=null&&n.entity_category)return!1;let o=a.states[t];if(!o)return!1;let i=o.attributes.device_class;return e==="sensor"?i?cl.has(i):dl.has(String(o.attributes.unit_of_measurement??"")):e==="binary"?i?pl.has(i):!!(n!=null&&n.area_id):!0}var ul=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Js(a,t){var o;if(Y(t)!=="sensor")return!1;let e=(o=a.entities)==null?void 0:o[t];if(e!=null&&e.hidden||e!=null&&e.entity_category)return!1;let n=a.states[t];return!n||!n.attributes.unit_of_measurement||ul.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Gn(n)}var Ko=null;function ye(a){var l,c;let t=Ko;if(t&&t.entities===a.entities&&t.devices===a.devices&&(t.states===a.states||(t.states=a.states,Object.keys(a.states).length===t.stateCount)))return t;let e=new Map,n=new Map,o=[],i=new Map,s=new Map;for(let d of Object.keys(a.entities??{})){let p=a.entities[d],u=p.device_id;u&&p.area_id&&(s.get(u)??s.set(u,new Set).get(u)).add(p.area_id),u&&ti(a,d)&&(n.get(u)??n.set(u,[]).get(u)).push(d),u&&!p.hidden&&!p.entity_category&&(i.get(u)??i.set(u,new Set).get(u)).add(Xs(d));let f=Gs(a,d),m=xe(a,d);if(!m){(f||Js(a,d))&&pn(Y(d))&&o.push(d);continue}f&&(e.get(m)??e.set(m,[]).get(m)).push(d)}if(a.entities)for(let d of Object.keys(a.states))a.entities[d]||(Gs(a,d)||Js(a,d))&&pn(Y(d))&&o.push(d);o.sort((d,p)=>Kn.indexOf(Y(d))-Kn.indexOf(Y(p))||st(a,d).localeCompare(st(a,p)));for(let[d,p]of e){let u=(c=(l=a.areas)==null?void 0:l[d])==null?void 0:c.name;p.sort((f,m)=>{let g=Kn.indexOf(Y(f)),_=Kn.indexOf(Y(m));return g-_||st(a,f,u).localeCompare(st(a,m,u))})}let r=new Set([...s].filter(([,d])=>d.size>1).map(([d])=>d));return Ko={entities:a.entities,devices:a.devices,states:a.states,stateCount:Object.keys(a.states).length,areas:e,power:n,unassigned:o,domains:i,hubs:r},Ko}function $e(a,t){return!t||!a.entities?[]:ye(a).areas.get(t)??[]}function tr(a,t){return a.entities?[...ye(a).areas].filter(([e])=>e!==t).map(([e,n])=>{var o,i;return{areaId:e,name:((i=(o=a.areas)==null?void 0:o[e])==null?void 0:i.name)??e,ids:n.filter(s=>pn(Y(s)))}}).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function er(a){return a.entities?ye(a).unassigned:[]}var Go={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},hl=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),fl=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Jo(a,t){var o,i,s;let e=(i=(o=a.entities)==null?void 0:o[t])==null?void 0:i.device_id,n=e&&!ye(a).hubs.has(e)?ye(a).domains.get(e):void 0;return n&&[...n].some(r=>hl.has(r))?!1:!fl.test(`${t} ${((s=a.states[t])==null?void 0:s.attributes.friendly_name)??""}`)}function nr(a,t,e,n){var f;let o=(f=e.climate)==null?void 0:f[n];if(o==="none")return[];if(o)return a.states[o]?[o]:[];let i=Go[n],s=(m,g)=>N([m,g],e.points),r=(t==null?void 0:t.placements.filter(m=>m.entity_id.startsWith("sensor.")))??[],l=r.filter(m=>s(m.x,m.z)).map(m=>m.entity_id),c=new Set(r.filter(m=>!s(m.x,m.z)).map(m=>m.entity_id)),d=[...new Set([...$e(a,e.area_id).filter(m=>!c.has(m)),...l])],p=d.filter(m=>{var g;return m.startsWith("sensor.")&&((g=a.states[m])==null?void 0:g.attributes.device_class)===i&&Jo(a,m)});if(p.length)return p;let u=Yo[n];return u?d.filter(m=>{var g;return m.startsWith("climate.")&&typeof((g=a.states[m])==null?void 0:g.attributes[u])=="number"}):[]}var Yo={temperature:"current_temperature",humidity:"current_humidity"};function or(a,t){return!!a.entities&&ye(a).hubs.has(t)}function Qo(a,t){return a.entities?ye(a).power.get(t)??[]:[]}function st(a,t,e){var i,s;let n=a.states[t],o=(n==null?void 0:n.attributes.friendly_name)??((s=(i=a.entities)==null?void 0:i[t])==null?void 0:s.name)??t;if(e&&o.length>e.length+1&&o.toLowerCase().startsWith(e.toLowerCase()+" ")){let r=o.slice(e.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return o}function Gn(a){return!a||a.state==="unavailable"||a.state==="unknown"}function ir(a){return!!a&&a.entity_id.startsWith("sensor.")&&a.attributes.device_class==="enum"}function Jn(a,t,e=null){if(a==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(a==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(a){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function ml(a,t){let e=1/0;for(let n=0;n<t.length;n++){let o=t[n],i=t[(n+1)%t.length],s=i[0]-o[0],r=i[1]-o[1],l=s*s+r*r||1,c=Math.min(1,Math.max(0,((a[0]-o[0])*s+(a[1]-o[1])*r)/l));e=Math.min(e,Math.hypot(a[0]-o[0]-s*c,a[1]-o[1]-r*c))}return e}function sr(a,t,e=[]){if(a.points.length<3||!t.length)return[];let n=a.points,o=n.map(b=>b[0]),i=n.map(b=>b[1]),s=Math.min(...o),r=Math.min(...i),l=Math.max(...o),c=Math.max(...i),d=Math.min(l-s,c-r),p=Math.max(.1,Math.min(.25,d/8)),u=Math.min(.35,d/5),f=Lt(n),m=[];for(let b=s+p/2;b<l;b+=p)for(let y=r+p/2;y<c;y+=p){let S=[b,y];if(!N(S,n))continue;let E=ml(S,n);E<u||m.push({p:S,wall:E})}m.length||m.push({p:f,wall:0});let g=[...e],_=[],h=Math.min(.7,d/4);for(let b of t){let y=Y(b)==="light",S=m[0].p,E=-1/0;for(let{p:z,wall:M}of m){let x=g.length?Math.min(...g.map(A=>Math.hypot(z[0]-A[0],z[1]-A[1]))):3,w=Math.hypot(z[0]-f[0],z[1]-f[1]),k=Math.min(x,3)*2;w<h&&!y&&(k-=10),k-=y?w*.35:M*1.2,k>E+1e-9&&(E=k,S=z)}let R=[Math.round(S[0]*100)/100,Math.round(S[1]*100)/100];g.push(R),_.push({entity_id:b,x:R[0],z:R[1],y:null,mount:null})}return _}var gl=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),_l=new Set(["garage","gate"]),bl=new Set(["window","opening"]);function dn(a,t,e=!1){let n=new Map;return t.length&&a.forEach((o,i)=>{let s=e&&t.length===1?t[0]:t[i];s&&n.set(o.id,s)}),n}function rr(a,t){let e=new Map,n=(i,s)=>i==="none"?null:i??s??null,o=(i,s,r)=>({cover:n(i.cover,s),contact:i.sensor==="handle"&&i.contact==null?null:n(i.contact,r),tilt:i.tilt==="none"?null:i.tilt,contact2:i.leaves===2&&i.contact2&&i.contact2!=="none"?i.contact2:null,tilt2:i.leaves===2&&i.tilt2&&i.tilt2!=="none"?i.tilt2:null,position:i.position&&i.position!=="none"?i.position:null,positionInverted:!!i.position_inverted,tiltAngle:i.tilt_angle&&i.tilt_angle!=="none"?i.tilt_angle:null,tiltMax:i.tilt_max??null,tiltOffset:i.tilt_offset??null,tiltInvert:!!i.tilt_invert,shut:!!i.shut,...i.contact_invert?{contactInvert:!0}:{},...i.cover_invert?{coverInvert:!0}:{}});for(let i of t){for(let s of i.rooms){let r=i.openings.filter(y=>y.room_id===s.id).sort((y,S)=>y.edge-S.edge||y.offset-S.offset);if(!r.length)continue;let l=$e(a,s.area_id),c=y=>{var S;return(S=a.states[y])==null?void 0:S.attributes.device_class},d=l.filter(y=>Y(y)==="cover"&&gl.has(c(y))),p=r.filter(y=>y.type==="window"),u=r.filter(y=>y.type==="door"),f=r.filter(y=>y.type==="garage"),m=dn(p,d,!0),g=dn(p,l.filter(y=>Y(y)==="binary"&&bl.has(c(y)))),_=dn(u,l.filter(y=>Y(y)==="binary"&&c(y)==="door")),h=dn(f,l.filter(y=>Y(y)==="cover"&&_l.has(c(y)??""))),b=dn(f,l.filter(y=>Y(y)==="binary"&&c(y)==="garage_door"));for(let y of r){let S=y.type==="window"?m:y.type==="garage"?h:null,E=y.type==="window"?g:y.type==="garage"?b:_;e.set(y.id,o(y,S==null?void 0:S.get(y.id),E.get(y.id)))}}for(let s of i.openings)e.has(s.id)||e.set(s.id,o(s))}return e}var vl=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Zo(a){if(!a||Gn(a))return null;let t=a.attributes.window_state;for(let e of[typeof t=="string"?t:null,a.state]){if(!e)continue;let n=vl.find(([o])=>o.test(e.trim()));if(n)return n[1]}return null}function Xo(a,t){var s,r;let e=new Map,n=[];for(let l of t){let c=((r=(s=a.entities)==null?void 0:s[l])==null?void 0:r.device_id)??`entity:${l}`,d=e.get(c);d||(e.set(c,d=[]),n.push(c)),d.push(l)}let o=n.map(l=>{let c=e.get(l),d=c.find(p=>{var u,f;return!((f=(u=a.entities)==null?void 0:u[p])!=null&&f.name)})??c[0];return{primary:d,others:c.filter(p=>p!==d)}}),i=new Map(t.map((l,c)=>[l,c]));return o.sort((l,c)=>i.get(l.primary)-i.get(c.primary))}function yl(a,t){return Xo(a,t).map(e=>e.primary)}var $l={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},ar=new Set(["tv_board","tv_wall"]);function lr(a,t){let e=a.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let o=String(n).toLowerCase(),i=t.state.trim().toLowerCase();return t.state.trim()==="*"||o===i||i.length>=3&&o.includes(i)}function Yn(a){return ar.has(a)||!!bs(a)}function Qn(a){return Yn(a)||a==="desk"||a==="fridge_smart"}var Ys={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function ti(a,t){var e;return t.startsWith("sensor.")&&((e=a.states[t])==null?void 0:e.attributes.device_class)==="power"}function xl(a,t){var n,o;if(ti(a,t))return t;let e=(o=(n=a.entities)==null?void 0:n[t])==null?void 0:o.device_id;return e?Qo(a,e).find(i=>i!==t)??null:null}function Te(a,t){let e=new Map;for(let n of t){let o=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let s=i.type in Ys,r=s?Ys[i.type]:$l[i.type];if(!r&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(f=>f.points.length>=3&&N([i.x,i.z],f.points)),c=l?yl(a,$e(a,l.area_id)):[],d=f=>`${f} ${st(a,f)}`,p=i.entity==="none"?null:i.entity??null;if(i.entity==null){let f=c.filter(m=>!o.has(m));if(s){let m=f.filter(g=>Y(g)==="light");p=m.find(g=>r.test(d(g)))??m[0]??null}else if(i.type==="robot_vacuum"){let m=(l==null?void 0:l.area_id)??null;p=Object.keys(a.entities??{}).find(g=>g.startsWith("vacuum.")&&!o.has(g)&&xe(a,g)===m)??null}else if(i.type==="radiator"){let m=f.filter(g=>Y(g)==="climate");p=m.find(g=>r.test(d(g)))??m[0]??null}else if(Yn(i.type)){let m=f.filter(g=>Y(g)==="media");p=m.find(g=>{var _;return((_=a.states[g])==null?void 0:_.attributes.device_class)==="tv"})??m.find(g=>r==null?void 0:r.test(d(g)))??(ar.has(i.type)?m[0]??null:null)}else r&&(p=f.find(m=>["switch","media","fan"].includes(Y(m)??"")&&r.test(d(m)))??null);p&&o.add(p)}let u=i.power==="none"?null:i.power??null;i.power==null&&(u=p?xl(a,p):null,!u&&r&&l&&!s&&(u=$e(a,l.area_id).find(m=>ti(a,m)&&!o.has(m)&&r.test(d(m)))??null),u&&o.add(u)),(p||u)&&e.set(i.id,{entity:p,power:u})}}return e}var Qs=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,wl={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function cr(a,t){var p,u;let e=t.car??{},n=f=>f&&f!=="none"?f:null,o=n(e.device)??n(t.entity),i=o?(u=(p=a.entities)==null?void 0:p[o])==null?void 0:u.device_id:null,s=i&&a.entities?Object.values(a.entities).filter(f=>f.device_id===i).map(f=>f.entity_id):[],r=f=>{var m,g,_;return`${f} ${((m=a.states[f])==null?void 0:m.attributes.friendly_name)??""} ${((_=(g=a.entities)==null?void 0:g[f])==null?void 0:_.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(f,m,g)=>s.find(_=>m.includes(_.split(".")[0])&&wl[f].test(r(_))&&(!g||g(_)))??null,c=f=>{var m;return String(((m=a.states[f])==null?void 0:m.attributes.unit_of_measurement)??"")},d=f=>{var m;return String(((m=a.states[f])==null?void 0:m.attributes.device_class)??"")};return{soc:n(e.soc)??s.find(f=>f.startsWith("sensor.")&&d(f)==="battery")??l("soc",["sensor"],f=>c(f)==="%"),range:n(e.range)??l("range",["sensor"],f=>/km|mi/.test(c(f)))??l("range",["sensor"]),charging:n(e.charging)??l("charging",["sensor"],f=>/^k?W$/.test(c(f)))??l("charging",["binary_sensor","switch"]),plugged:n(e.plugged)??s.find(f=>f.startsWith("binary_sensor.")&&d(f)==="plug")??l("plugged",["binary_sensor"]),lock:n(e.lock)??s.find(f=>f.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(e.climate)??s.find(f=>f.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(e.tracker)??s.find(f=>f.startsWith("device_tracker."))??null}}function dr(a,t,e){var o,i;if(e==="none")return null;if(e)return e;let n=t?(i=(o=a.entities)==null?void 0:o[t])==null?void 0:i.device_id:null;if(!n||!a.entities)return null;for(let s of Object.values(a.entities))if(!(s.device_id!==n||!s.entity_id.startsWith("sensor."))&&(Qs.test(s.translation_key??"")||Qs.test(s.entity_id.split(".")[1])))return s.entity_id;return null}var Q=(a,t,e,n,o="")=>T`<rect class=${o} x=${Math.min(a,e)} y=${Math.min(t,n)} width=${Math.abs(e-a)} height=${Math.abs(n-t)} />`,U=(a,t,e,n,o="")=>T`<line class=${o} x1=${a} y1=${t} x2=${e} y2=${n} />`,it=(a,t,e,n="")=>T`<circle class=${n} cx=${a} cy=${t} r=${e} />`,ei=(a,t,e,n,o="")=>T`<ellipse class=${o} cx=${a} cy=${t} rx=${e} ry=${n} />`;function ni(a,t,e){let n=[];for(let o=1;o<e;o++){let i=-a/2+a/e*o;n.push(U(i,t/2,i,t/2-Math.min(.12,t*.3)))}return n}function pr(a,t,e,n){let o=Math.min(.24,t*.28),i=n?Math.min(.2,a*.12):0,s=[Q(-a/2,-t/2,a/2,-t/2+o,"fp3d-sym-fill")];n&&s.push(Q(-a/2,-t/2,-a/2+i,t/2,"fp3d-sym-fill"),Q(a/2-i,-t/2,a/2,t/2,"fp3d-sym-fill"));let r=a-2*i;for(let l=1;l<e;l++){let c=-a/2+i+r/e*l;s.push(U(c,-t/2+o,c,t/2-.02))}return s}function ur(a,t,e){let n=-a/2,o=a/2,i=-t/2,s=t/2,r=Math.max(.3,Math.min(.95,t*.5,a*(e?.34:.45))),l=Math.min(.24,r*.28),c=Math.min(.2,r*.24),d=[Q(n,i,o,i+l,"fp3d-sym-fill"),Q(n,i+l,n+l,s,"fp3d-sym-fill"),Q(n+l,s-c,n+r,s,"fp3d-sym-fill")];e?d.push(Q(o-l,i+l,o,s,"fp3d-sym-fill"),Q(o-r,s-c,o-l,s,"fp3d-sym-fill")):d.push(Q(o-c,i+l,o,i+r,"fp3d-sym-fill"));let p=e?o-r:o-c;d.push(U(n+r,s-c,n+r,i+r),U(n+r,i+r,p,i+r)),e&&d.push(U(o-r,i+r,o-r,s-c));let u=n+l,f=e?o-l:o-c,m=Math.max(1,Math.round((f-u)/.62));for(let b=1;b<m;b++)d.push(U(u+(f-u)/m*b,i+l,u+(f-u)/m*b,i+r));let g=i+r,_=s-c,h=_-g<.2?0:Math.max(1,Math.round((_-g)/.62));for(let b=0;b<h;b++){let y=g+(_-g)/h*b;d.push(U(n+l,y,n+r,y)),e&&d.push(U(o-r,y,o-l,y))}return d}function hr(a,t,e){switch(a){case"sofa":return pr(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return pr(t,e,1,!0);case"sofa_l":return ur(t,e,!1);case"sofa_u":return ur(t,e,!0);case"bench":return[Q(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[Q(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),Q(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),U(-t/2+n,-e/2+n,t/2,-e/2+n),U(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[Q(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[it(0,.03,Math.min(t,e)*.36),Q(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[it(0,0,Math.min(t,e)*.42)];case"stool":return[Q(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[Q(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return a==="desk"&&n.push(U(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,o=(t-.2)/n,i=[Q(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),U(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let s=0;s<n;s++)i.push(Q(-t/2+.13+o*s,-e/2+.12,-t/2+.07+o*(s+1),-e/2+.12+Math.min(.4,e*.18)));return i}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return ni(t,e,a==="nightstand"||a==="tall_cabinet"||a==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[Q(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...ni(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[U(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[U(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[it(-t*.22,-e*.2,n),it(t*.22,-e*.2,n*.8),it(-t*.22,e*.2,n*.8),it(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[Q(-n/2,-e/2+.1,n/2,e/2-.08),it(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[U(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[it(0,.05,Math.min(t,e)*.3),U(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[Q(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),it(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[U(-t/2,-e/2,t/2,e/2),U(t/2,-e/2,-t/2,e/2),it(0,0,.04)];case"wc":return[Q(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),ei(0,e*.1,t*.36,e*.3)];case"washbasin":return[ei(0,.03,t*.34,e*.3)];case"tv_board":return[U(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...ni(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[U(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[it(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),it(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[it(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),it(0,0,Math.min(t,e)*1.6)];case"parking":return[Q(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),U(-t*.15,e/2-.5,0,e/2-.22,"fp3d-sym-strong"),U(0,e/2-.22,t*.15,e/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[Q(-t*.45,-e/2,t*.45,-e/2+e*.3,"fp3d-sym-fill"),it(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],o=Math.max(3,Math.round(t/.1));for(let i=1;i<o;i++)n.push(U(-t/2+t/o*i,-e/2,-t/2+t/o*i,e/2));return n}case"lamp_panel":return[Q(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,o=[it(0,0,n*.9,"fp3d-sym-fill"),it(0,0,n*.3)];if(a==="lamp_ceiling"||a==="lamp_pendant")for(let i=0;i<8;i++){let s=i/8*Math.PI*2;o.push(U(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return o}case"lamp_wall":return[Q(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),ei(0,.01,t*.4,e*.4)];case"led_strip":return[U(-t/2,0,t/2,0,"fp3d-sym-strong")];case"plant":return[it(0,0,Math.min(t,e)*.46),it(0,0,Math.min(t,e)*.25)];case"rug":return[Q(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),o=[];for(let i=1;i<n;i++)o.push(U(-t/2,e/2-e/n*i,t/2,e/2-e/n*i));return o.push(U(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),U(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),U(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),o}case"stairs_u":{let{steps1:n,steps2:o,fw:i,landing:s,run:r}=Ws(t,e,2.75),l=-e/2+s,c=-t/2+i,d=t/2-i,p=[U(-t/2,l,c,l),U(c,l,c,e/2),U(d,l,d,e/2)];for(let _=1;_<n;_++)p.push(U(-t/2,e/2-r*_,c,e/2-r*_));for(let _=1;_<=o;_++)p.push(U(d,l+r*_,t/2,l+r*_));let u=(-t/2+c)/2,f=(d+t/2)/2,m=-e/2+s/2,g=e/2-.15;return p.push(U(u,e/2-.1,u,m,"fp3d-sym-strong"),U(u,m,f,m,"fp3d-sym-strong"),U(f,m,f,g,"fp3d-sym-strong"),U(f-.15,g-.2,f,g,"fp3d-sym-strong"),U(f+.15,g-.2,f,g,"fp3d-sym-strong")),p}default:{let n=gt(a);return n?kl(n,t,e):$}}}function kl(a,t,e){var n;return(n=a.symbol)!=null&&n.length?a.symbol.map(o=>o.shape==="rect"?Q((o.x-o.w/2)*t,(o.z-o.d/2)*e,(o.x+o.w/2)*t,(o.z+o.d/2)*e,o.fill?"fp3d-sym-fill":""):o.shape==="circle"?it(o.x*t,o.z*e,o.r*Math.min(t,e)):U(o.x1*t,o.z1*e,o.x2*t,o.z2*e)):a.parts.filter(o=>o.w<.98||o.d<.98).map(o=>o.shape==="cyl"&&(o.axis??"y")==="y"?it(o.x*t,o.z*e,Math.min(o.w*t,o.d*e)/2):Q((o.x-o.w/2)*t,(o.z-o.d/2)*e,(o.x+o.w/2)*t,(o.z+o.d/2)*e))}var lt=(a,t)=>[a[0]-t[0],a[1]-t[1]],re=(a,t)=>[a[0]+t[0],a[1]+t[1]],Qt=(a,t)=>[a[0]*t,a[1]*t],hn=(a,t)=>a[0]*t[0]+a[1]*t[1],je=(a,t)=>a[0]*t[1]-a[1]*t[0],un=a=>Math.hypot(a[0],a[1]),Wt=a=>{let t=un(a)||1;return[a[0]/t,a[1]/t]},fr=a=>[-a[1],a[0]],mr=a=>[a[1],-a[0]];function vt(a,t,e=[]){let n=t.eps??.005,o=[],i=e.filter(M=>Math.hypot(M.b[0]-M.a[0],M.b[1]-M.a[1])>.05),s=[],r=M=>{for(let x=0;x<s.length;x++)if(Math.abs(s[x][0]-M[0])<=n&&Math.abs(s[x][1]-M[1])<=n)return x;return s.push([M[0],M[1]]),s.length-1},l=[];for(let M of a){let x=M.points;if(x.length<3||Math.abs(at(x))<1e-6)continue;let w=at(x)>0,k=x.map(r);for(let A=0;A<x.length;A++){let P=k[A],O=k[(A+1)%x.length];P!==O&&l.push(w?{u:P,v:O,room:M.id,edge:A,forward:!0}:{u:O,v:P,room:M.id,edge:A,forward:!1})}}let c=i.map(M=>[r(M.a),r(M.b)]),d=new Set;for(let M of a){let x=M.points;x.length<3||(M.wall_splits??[]).forEach((w,k)=>{if(!w||k>=x.length)return;let A=x[k],P=lt(x[(k+1)%x.length],A),O=un(P);for(let L of w)L>n&&L<O-n&&d.add(r(re(A,Qt(P,L/O))))})}let p=[];for(let M of l){let x=s[M.u],w=s[M.v],k=lt(w,x),A=un(k),P=Qt(k,1/A),O=[];for(let j=0;j<s.length;j++){if(j===M.u||j===M.v)continue;let F=lt(s[j],x),V=hn(F,P);V<=n||V>=A-n||Math.abs(je(P,F))<=n&&O.push({t:V,id:j})}O.sort((j,F)=>j.t-F.t);let L=[{t:0,id:M.u},...O,{t:A,id:M.v}];for(let j=0;j+1<L.length;j++){let F=L[j],V=L[j+1],H=M.forward?F.t:A-V.t,C=M.forward?V.t:A-F.t;p.push({u:F.id,v:V.id,room:M.room,edge:M.edge,t0:H,t1:C})}}let u=new Map;for(let M of p){let x=M.u<M.v?`${M.u}-${M.v}`:`${M.v}-${M.u}`,w=u.get(x);w||u.set(x,w=[]),w.push(M)}let f=M=>({room_id:M.room,edge:M.edge,t0:M.t0,t1:M.t1}),m=new Map;for(let M of p){let x=`${M.room}:${M.edge}`;m.set(x,[...m.get(x)??[],M.t0].sort((w,k)=>w-k))}let g=M=>{var k,A;let x=(A=(k=a.find(P=>P.id===M.room))==null?void 0:k.wall_heights)==null?void 0:A[M.edge];if(!Array.isArray(x))return x;let w=m.get(`${M.room}:${M.edge}`)??[];return x[w.indexOf(M.t0)]??null},_=M=>{let x=M.map(g).filter(k=>typeof k=="number"&&k>0);if(x.length)return Math.min(...x);let w=M.map(k=>{var A;return(A=a.find(P=>P.id===k.room))==null?void 0:A.ceiling_height});return w.every(k=>typeof k=="number"&&k>0)?Math.max(...w):void 0},h=M=>{let x=M.map(w=>{var k,A;return(A=(k=a.find(P=>P.id===w.room))==null?void 0:k.wall_thickness)==null?void 0:A[w.edge]}).filter(w=>typeof w=="number"&&w>0);return x.length?Math.max(...x):void 0},b=M=>M.some(x=>g(x)===0),y=[],S=[];for(let M of u.values()){let x=M[0],w=M.find(k=>k!==x&&k.u===x.v&&k.v===x.u&&k.room!==x.room);for(let k of M)k!==x&&k!==w&&k.room!==x.room&&o.push(`overlap:${x.room}:${k.room}`);if(b(w?[x,w]:[x])){w&&y.push([x.room,w.room]);continue}if(w){let k=h([x,w])??t.interior;S.push({a:x.u,b:x.v,left:k/2,right:k/2,exterior:!1,roomLeft:x.room,roomRight:w.room,sources:[f(x),f(w)],height:_([x,w])})}else S.push({a:x.u,b:x.v,left:0,right:h([x])??t.exterior,exterior:!0,roomLeft:x.room,roomRight:null,sources:[f(x)],height:_([x])})}let E=M=>Wt(lt(s[M.b],s[M.a]));for(let M of S){if(M.exterior||M.free)continue;let x=new Set;for(let k of[M.a,M.b])for(let A of S)!A.exterior||A.free||A.a!==k&&A.b!==k||Math.abs(je(E(M),E(A)))>1e-6||(A.roomLeft===M.roomLeft?x.add("left"):A.roomLeft===M.roomRight&&x.add("right"));if(x.size!==1)continue;let w=M.left+M.right;x.has("left")?(M.left=0,M.right=w):(M.left=w,M.right=0)}i.forEach((M,x)=>{var j;let[w,k]=c[x];if(w===k)return;let A=[(M.a[0]+M.b[0])/2,(M.a[1]+M.b[1])/2],P=((j=a.find(F=>F.points.length>=3&&N(A,F.points)))==null?void 0:j.id)??null,O=(M.thickness??t.interior)/2,L=typeof M.height=="number"&&M.height>0?M.height:void 0;S.push({free:M.id,a:w,b:k,left:O,right:O,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:L})}),S=Sl(S,s,d);let R=El(S,s);return{walls:S.map((M,x)=>{let w=s[M.a],k=s[M.b],A=R.get(`${x}:a`),P=R.get(`${x}:b`),O=Al([A.right,P.left,k,P.right,A.left,w],1e-6);return{id:Ml(w,k),a:[w[0],w[1]],b:[k[0],k[1]],left:M.left,right:M.right,exterior:M.exterior,roomLeft:M.roomLeft,roomRight:M.roomRight,sources:M.sources,footprint:O,...M.free?{free:M.free}:{},...M.height!==void 0?{height:M.height}:{}}}),warnings:[...new Set(o)],open:y}}function Ml(a,t){let e=i=>Math.round(i*100),[n,o]=a[0]<t[0]||a[0]===t[0]&&a[1]<=t[1]?[a,t]:[t,a];return`w_${e(n[0])}_${e(n[1])}_${e(o[0])}_${e(o[1])}`}function gr(a){return{...a,a:a.b,b:a.a,left:a.right,right:a.left,roomLeft:a.roomRight,roomRight:a.roomLeft}}function Sl(a,t,e=new Set){let n=a.slice(),o=!0;for(;o;){o=!1;let i=new Map;n.forEach((s,r)=>{for(let l of[s.a,s.b]){let c=i.get(l);c||i.set(l,c=[]),c.push(r)}});for(let[s,r]of i){if(r.length!==2||e.has(s))continue;let l=n[r[0]],c=n[r[1]];if(l.b!==s&&(l=gr(l)),c.a!==s&&(c=gr(c)),l.a===c.b)continue;let d=Wt(lt(t[l.b],t[l.a])),p=Wt(lt(t[c.b],t[c.a]));if(Math.abs(je(d,p))>1e-6||hn(d,p)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let u={...l,b:c.b,sources:Pl(l.sources,c.sources)},f=n.filter((m,g)=>g!==r[0]&&g!==r[1]);f.push(u),n.length=0,n.push(...f),o=!0;break}}return n}function Pl(a,t){let e=a.map(n=>({...n}));for(let n of t){let o=e.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,n.t0),o.t1=Math.max(o.t1,n.t1)):e.push({...n})}return e}function El(a,t){let e=new Map;a.forEach((o,i)=>{let s=Wt(lt(t[o.b],t[o.a])),r=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:Qt(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of r){let d=e.get(l);d||e.set(l,d=[]),d.push(c)}});let n=new Map;for(let[o,i]of e){let s=t[o];i.sort((c,d)=>c.angle-d.angle);let r=c=>({left:re(s,Qt(fr(c.d),c.left)),right:re(s,Qt(mr(c.d),c.right))});for(let c of i)n.set(c.key,r(c));if(i.length<2)continue;let l=4*Math.max(...i.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<i.length;c++){let d=i[c],p=i[(c+1)%i.length],u=re(s,Qt(fr(d.d),d.left)),f=re(s,Qt(mr(p.d),p.right)),m=je(d.d,p.d);if(Math.abs(m)<1e-4)continue;let g=je(lt(f,u),p.d)/m,_=re(u,Qt(d.d,g));un(lt(_,s))>l||(n.get(d.key).left=_,n.get(p.key).right=_)}}return n}function Al(a,t){let e=a.filter((o,i)=>un(lt(o,a[(i+1)%a.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let o=0;o<e.length;o++){let i=e[(o+e.length-1)%e.length],s=e[o],r=e[(o+1)%e.length],l=lt(s,i),c=lt(r,s);if(Math.abs(je(Wt(l),Wt(c)))<1e-7&&hn(l,c)>0){e=e.filter((d,p)=>p!==o),n=!0;break}}}return e}function ae(a,t,e){let n=a.points[t],o=a.points[(t+1)%a.points.length],i=Wt(lt(o,n));return re(n,Qt(i,e))}function Ce(a,t,e){if(a.wall){let o=e.find(r=>r.id===a.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=Wt(lt(o.b,o.a));return{room:{id:a.room_id,name:"",area_id:null,points:[o.a,o.b,re(o.a,[-i[1],i[0]])]},edge:0}}let n=t.find(o=>o.id===a.room_id);return n&&a.edge<n.points.length?{room:n,edge:a.edge}:null}function oi(a,t,e){if(!t.wall)return zl(a,e.room,e.edge,t.offset);let n=a.find(i=>i.free===t.wall);if(!n)return null;let o=ae(e.room,0,t.offset);return{wall:n,s:hn(lt(o,n.a),Wt(lt(n.b,n.a)))}}function zl(a,t,e,n){for(let o of a){if(!o.sources.find(r=>r.room_id===t.id&&r.edge===e&&n>=r.t0-1e-6&&n<=r.t1+1e-6))continue;let s=ae(t,e,n);return{wall:o,s:hn(lt(s,o.a),Wt(lt(o.b,o.a)))}}return null}function ii(a,t){let e=at(t)>0?1:-1,n=[...a];for(let o=0;o<t.length&&n.length;o++){let i=t[o],s=t[(o+1)%t.length],r=c=>e*((s[0]-i[0])*(c[1]-i[1])-(s[1]-i[1])*(c[0]-i[0])),l=n;n=[];for(let c=0;c<l.length;c++){let d=l[c],p=l[(c+1)%l.length],u=r(d),f=r(p);if(u>=0&&n.push(d),u>=0!=f>=0){let m=u/(u-f);n.push([d[0]+(p[0]-d[0])*m,d[1]+(p[1]-d[1])*m])}}}return n}var _r=a=>a.length>=3?Math.abs(xt(a)):0;function Il(a,t){return a.exterior?0:a.roomLeft===t?a.left:a.roomRight===t?a.right:0}function br(a,t,e){let n=_r(a.points);if(a.points.length<3)return n;let{walls:o}=vt(t.rooms,e,t.walls??[]),i=n,s=o.filter(r=>!r.free&&(r.roomLeft===a.id||r.roomRight===a.id));for(let r of o){let l=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2];if((r.free?!N(l,a.points):!s.includes(r))||(i-=_r(ii(a.points,r.footprint)),!r.free))continue;let c=Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1]);if(c<.2)continue;let d=[(r.b[0]-r.a[0])/c,(r.b[1]-r.a[1])/c],p=null;for(let u of s){let f=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1]);if(f<.2)continue;let m=[(u.b[0]-u.a[0])/f,(u.b[1]-u.a[1])/f];if(Math.abs(d[0]*m[1]-d[1]*m[0])>.05)continue;let g=Math.abs((l[0]-u.a[0])*m[1]-(l[1]-u.a[1])*m[0]),_=(r.a[0]-u.a[0])*m[0]+(r.a[1]-u.a[1])*m[1],h=(r.b[0]-u.a[0])*m[0]+(r.b[1]-u.a[1])*m[1],b=Math.min(f,Math.max(_,h))-Math.max(0,Math.min(_,h)),y=g-(r.left+r.right)/2-Il(u,a.id);b>.1&&y>0&&g<1&&(!p||y<p.gap)&&(p={gap:y,overlap:b})}p&&(i-=p.gap*p.overlap)}return Math.max(0,i)}function si(a,t){var e,n;return t==="metric"||t==="imperial"?t:((n=(e=a==null?void 0:a.config)==null?void 0:e.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function vr(a,t){return String(Number(a.toFixed(t)))}function we(a,t=2){let e=a<0?"-":"",n=Math.round(Math.abs(a)/.0254*(t>=2?10:1))/(t>=2?10:1),o=Math.floor(n/12+1e-9),i=n-o*12,s=vr(i,t>=2?1:0);return o?i<.05?`${e}${o}'`:`${e}${o}' ${s}"`:`${e}${s}"`}function ri(a,t){let e=a.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,o=0,i=!1,s=!1,r=e;for(let l of e.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];i=!0,r=r.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(o+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?o+=c*.0254:d==="mm"?o+=c/1e3:d==="cm"?o+=c/100:d==="m"?o+=c:o+=t==="imperial"?c*(s?.0254:.3048):c}return!i||/[^\s+]/.test(r)?null:o}function yr(a,t,e){return t==="imperial"?we(a):`${e(a)} m`}function $r(a,t,e){return t==="imperial"?`${vr(a/(.3048*.3048),1)} ft\xB2`:`${e(a)} m\xB2`}function fn(a,t){return t==="imperial"?a.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):a}var Fl=.05,Rl=.2,Ol=.12;function Ll(a){let t=[];return a.forEach((e,n)=>{let o=e.points;if(o.length<3)return;let i=at(o)>=0;for(let s=0;s<o.length;s++){let r=o[s],l=o[(s+1)%o.length],c=l[0]-r[0],d=l[1]-r[1],p=Math.hypot(c,d);if(p<.05)continue;let u=[c/p,d/p],f=i?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let m=[-u[1],u[0]],g=r[0]*u[0]+r[1]*u[1],_=l[0]*u[0]+l[1]*u[1];t.push({room:n,index:s,dir:u,normal:m,offset:r[0]*m[0]+r[1]*m[1],outside:f[0]*m[0]+f[1]*m[1]>0?1:-1,t0:Math.min(g,_),t1:Math.max(g,_)})}}),t}function xr(a,t=.6){let e=Ll(a),n=e.map((d,p)=>p),o=d=>n[d]===d?d:n[d]=o(n[d]),i=[];for(let d=0;d<e.length;d++)for(let p=d+1;p<e.length;p++){let u=e[d],f=e[p];if(u.room===f.room||Math.abs(u.dir[0]*f.dir[1]-u.dir[1]*f.dir[0])>Fl||u.outside===f.outside)continue;let m=(f.offset-u.offset)*u.outside;m>t||m<-Ol||Math.abs(m)<1e-4||Math.min(u.t1,f.t1)-Math.max(u.t0,f.t0)<Rl||(i.push(Math.round(m*1e3)/1e3),n[o(d)]=o(p))}if(!i.length)return{rooms:a.map(d=>({...d,points:d.points.map(p=>[p[0],p[1]])})),gaps:i};let s=new Map;e.forEach((d,p)=>{let u=o(p);if(u===p&&!e.some((m,g)=>g!==p&&o(g)===p))return;let f=s.get(u)??[];f.push(p),s.set(u,f)});let r=a.map(d=>d.points.map(()=>new Map));for(let[d,p]of s){let u=p.reduce((f,m)=>f+e[m].offset,0)/p.length;for(let f of p){let m=e[f],g=u-m.offset,_=[m.normal[0]*g,m.normal[1]*g],h=a[m.room].points.length;r[m.room][m.index].set(d,_),r[m.room][(m.index+1)%h].set(d,_)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:a.map((d,p)=>({...d,points:d.points.map((u,f)=>{let m=u[0],g=u[1];for(let[_,h]of r[p][f].values())m+=_,g+=h;return[l(m),l(g)]})})),gaps:i}}function wr(a){let t=a.filter(n=>n>.04).sort((n,o)=>n-o);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}function kr(a,t=.05,e=.5){let n=a.map(i=>({...i,points:i.points.map(s=>[s[0],s[1]])})),o=0;for(let i=0;i<4;i++){let s=(l,c)=>n.reduce((d,p)=>d+p.points.filter(u=>Math.abs(u[l]-c)<1e-6).length,0),r=!1;for(let l of n)for(let c=0;c<l.points.length;c++){let d=l.points[c],p=l.points[(c+1)%l.points.length],u=Math.abs(p[0]-d[0]),f=Math.abs(p[1]-d[1]),m=f>1e-6&&f<=t&&u>=e?1:u>1e-6&&u<=t&&f>=e?0:null;if(m===null)continue;let[g,_]=s(m,d[m])>=s(m,p[m])?[d[m],p[m]]:[p[m],d[m]];for(let h of n)for(let b of h.points)Math.abs(b[m]-_)<1e-6&&(b[m]=g);o++,r=!0}if(!r)break}return{rooms:n,fixed:o}}var Vl=.25,Zn=a=>Math.round(a*1e3)/1e3;function ai(a,t,e,n,o){let i=a.rooms.find(s=>s.points.length>=3&&N([t,e],s.points));return!i||N([n,o],i.points)?[n,o]:N([n,e],i.points)?[n,e]:N([t,o],i.points)?[t,o]:[t,e]}function De(a,t,e,n){let o=Math.hypot(n[0]-e[0],n[1]-e[1]);if(o<.01)return!1;let i=[(n[0]-e[0])/o,(n[1]-e[1])/o],s=l=>Math.abs(-(l[0]-e[0])*i[1]+(l[1]-e[1])*i[0]),r=l=>(l[0]-e[0])*i[0]+(l[1]-e[1])*i[1];return a.rooms.some(l=>l.id!==t&&l.points.some((c,d)=>{let p=l.points[(d+1)%l.points.length];return s(c)>.02||s(p)>.02?!1:Math.min(o,Math.max(r(c),r(p)))-Math.max(0,Math.min(r(c),r(p)))>.05}))}function li(a,t,e,n,o,i=.05){let s=a.rooms.find(u=>u.points.length>=3&&N([t.x,t.z],u.points));if(!s)return[e,n];let r=s.points,l=at(r)>=0?1:-1,c=Ht({...t}),d=e,p=n;for(let u=0;u<2;u++){let f=Ht({...t,x:d,z:p});for(let m=0;m<r.length;m++){let g=r[m],_=r[(m+1)%r.length],h=Math.hypot(_[0]-g[0],_[1]-g[1]);if(h<.05)continue;let b=[(_[0]-g[0])/h,(_[1]-g[1])/h],y=[-b[1]*l,b[0]*l],S=De(a,s.id,g,_)?o/2:0,E=0;f.forEach((R,z)=>{let M=(R[0]-g[0])*b[0]+(R[1]-g[1])*b[1];if(M<-.01||M>h+.01)return;let x=(R[0]-g[0])*y[0]+(R[1]-g[1])*y[1]-S,w=c[z];(w[0]-g[0])*y[0]+(w[1]-g[1])*y[1]-S<-i||x<E&&(E=x)}),E<-1e-4&&(d-=y[0]*E,p-=y[1]*E)}}return[Zn(d),Zn(p)]}function mn(a,t,e,n=Vl){let o=a.rooms.find(c=>c.points.length>=3&&N([t.x,t.z],c.points));if(!o)return null;let i=o.points,s=at(i)>=0?1:-1,r=e/2,l=null;for(let c=0;c<i.length;c++){let d=i[c],p=i[(c+1)%i.length],u=Math.hypot(p[0]-d[0],p[1]-d[1]);if(u<.3)continue;let f=[(p[0]-d[0])/u,(p[1]-d[1])/u],m=[-f[1]*s,f[0]*s],g=(t.x-d[0])*f[0]+(t.z-d[1])*f[1];if(g<0||g>u)continue;let h=a.rooms.some(M=>M.id!==o.id&&M.points.some((x,w)=>{let k=M.points[(w+1)%M.points.length],A=Math.abs((x[0]-d[0])*m[0]+(x[1]-d[1])*m[1]),P=Math.abs((k[0]-d[0])*m[0]+(k[1]-d[1])*m[1]);return A<.02&&P<.02}))?r:0,b=(t.x-d[0])*m[0]+(t.z-d[1])*m[1]-h,y=Math.atan2(-m[0],m[1])*180/Math.PI,S=M=>Math.abs((t.rotation-M+540)%360-180),R=[{rotation:y,extent:t.d/2},{rotation:y+90,extent:t.w/2},{rotation:y-90,extent:t.w/2}].reduce((M,x)=>S(x.rotation)<S(M.rotation)?x:M);if(S(R.rotation)>50)continue;let z=b-R.extent;Math.abs(z)>n||l&&Math.abs(z)>=Math.abs(l.gap)||(l={x:Zn(t.x-m[0]*z),z:Zn(t.z-m[1]*z),rotation:(Math.round(R.rotation)%360+360)%360,gap:z})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function He(a,t){let e=a.points,n=e[t],o=e[(t+1)%e.length],i=Math.hypot(o[0]-n[0],o[1]-n[1])||1,s=[(o[0]-n[0])/i,(o[1]-n[1])/i],r=[-s[1],s[0]],l=[(n[0]+o[0])/2,(n[1]+o[1])/2];N([l[0]+r[0]*.02,l[1]+r[1]*.02],e)||(r=[-r[0],-r[1]]);let c=[r[1],-r[0]];return{a:n,b:o,u:s,n:r,length:i,rightward:s[0]*c[0]+s[1]*c[1]>0}}function pt(a,t){let e=t[0]-a.a[0],n=t[1]-a.a[1];return{s:e*a.u[0]+n*a.u[1],d:e*a.n[0]+n*a.n[1]}}function le(a,t,e){return[a.a[0]+a.u[0]*t+a.n[0]*e,a.a[1]+a.u[1]*t+a.n[1]*e]}var Tl=.45;function ci(a,t){let e=[];for(let n of t.openings){if(n.wall)continue;let o=t.rooms.find(r=>r.id===n.room_id);if(!o||n.edge>=o.points.length)continue;let{s:i,d:s}=pt(a,ae(o,n.edge,n.offset));Math.abs(s)>.4||i<-.05||i>a.length+.05||e.push(jl(n,i))}return e}function jl(a,t){return{kind:"opening",id:a.id,s0:t-a.width/2,s1:t+a.width/2,y0:a.sill,y1:a.sill+a.height,d:0}}function Xn(a,t,e){let n=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let i=N([o.x,o.z],e.points),s=Ht(o).map(u=>pt(a,u)),r=Math.min(...s.map(u=>u.d)),l=Math.min(...s.map(u=>u.s)),c=Math.max(...s.map(u=>u.s)),d=pt(a,[o.x,o.z]);if(!i&&d.d<=0||d.d<=0||r>Tl||r<-.3||c<.02||l>a.length-.02)continue;let p=At(t,o);n.push({kind:"furniture",id:o.id,s0:l,s1:c,y0:p,y1:p+o.h,d:r})}return n}function Mr(a,t,e){let n=o=>Math.round(o*1e3)/1e3;return{x:n(t.x+a.u[0]*e),z:n(t.z+a.u[1]*e)}}var di=.3;function kt(a,t){let e=a.from?t(a.from):null,n=a.to?t(a.to):null,o=a.height??di,i=[];if(a.heights)e&&i.push([e.x,e.y,e.z]),a.points.forEach(([s,r],l)=>{var c;return i.push([s,((c=a.heights)==null?void 0:c[l])??o,r])}),n&&i.push([n.x,n.y,n.z]);else{if(!e||!n)return[];i.push([e.x,e.y,e.z],[e.x,o,e.z]);for(let[s,r]of a.points)i.push([s,o,r]);i.push([n.x,o,n.z],[n.x,n.y,n.z])}return i.filter((s,r)=>r===0||to(s,i[r-1])>.001)}function to(a,t){return Math.hypot(t[0]-a[0],t[1]-a[1],t[2]-a[2])}function pi(a){let t=0;for(let e=1;e<a.length;e++)t+=to(a[e-1],a[e]);return t}function Sr(a,t){if(a.length<2)return null;let e=Math.max(0,t);for(let n=1;n<a.length;n++){let[o,i]=[a[n-1],a[n]],s=to(o,i);if(!(s<1e-6)){if(e<=s||n===a.length-1){let r=Math.min(1,e/s),l=[(i[0]-o[0])/s,(i[1]-o[1])/s,(i[2]-o[2])/s];return{p:[o[0]+(i[0]-o[0])*r,o[1]+(i[1]-o[1])*r,o[2]+(i[2]-o[2])*r],dir:l,seg:n-1}}e-=s}}return null}function We(a,t){let e=null,n=0;for(let o=1;o<a.length;o++){let[i,s]=[a[o-1],a[o]],r=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],l=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],c=l>0?Math.max(0,Math.min(1,((t[0]-i[0])*r[0]+(t[1]-i[1])*r[1]+(t[2]-i[2])*r[2])/l)):0,d=[i[0]+r[0]*c,i[1]+r[1]*c,i[2]+r[2]*c],p=to(d,t);(!e||p<e.d)&&(e={at:n+Math.sqrt(l)*c,d:p,seg:o-1,p:d}),n+=Math.sqrt(l)}return e}function ce(a,t,e,n){let[o,i]=le(a,t,n);return[o,e,i]}function Pr(a,t,e,n){let o=le(a,0,t),i=le(e,0,n),s=a.u[0]*-e.u[1]-a.u[1]*-e.u[0];if(Math.abs(s)<1e-6)return null;let r=i[0]-o[0],l=i[1]-o[1],c=(r*-e.u[1]-l*-e.u[0])/s;return[o[0]+a.u[0]*c,o[1]+a.u[1]*c]}var Er=["top6","side6","four"];function de(a){return a==="pool_pump"?["suction","pressure"]:a==="pool_filter"?["pump","return","waste"]:a==="pool_heat_pump"?["in","out"]:[]}function Ne(a){return a==="wall"||a==="floor"?["inside","outside"]:["in","out1","out2"]}function tt(a){let[t="",e="",n]=a.split(":");return{kind:t,id:e,port:n||null}}function Zt(a){let{kind:t,id:e}=tt(a);return t&&e?`${t}:${e}`:a}function Cl(a,t){let{w:e,d:n,h:o}=a;if(a.type==="pool_pump")return t==="suction"?[e*.5,o*.55,0]:t==="pressure"?[e*.05,o*.9,0]:null;if(a.type==="pool_filter"){let i=Math.min(e,n)/2;if(a.variant==="side6"){let l=i+.08;return t==="pump"?[l,o*.6,0]:t==="return"?[l+.06,o*.48,0]:t==="waste"?[l,o*.36,0]:null}let s=o*.89,r=i*.45+.04;return t==="pump"?[-r,s,0]:t==="return"?[r,s,0]:t==="waste"?[0,s,-r]:null}return a.type==="pool_heat_pump"?t==="in"?[e/2+.04,o*.25,-n*.2]:t==="out"?[e/2+.04,o*.45,-n*.2]:null:null}function Ar(a,t){let e=Cl(a,t);if(!e)return null;let n=a.rotation*Math.PI/180,[o,i]=[Math.cos(n),Math.sin(n)];return{x:a.x+e[0]*o-e[2]*i,y:e[1],z:a.z+e[0]*i+e[2]*o}}function ui(a,t){if(t==="outside"){if(a.kind==="floor")return{x:a.x,y:a.y-.3,z:a.z};if(a.kind==="wall"){let e=(a.depth??.3)+.05;return{x:a.x-(a.nx??0)*e,y:a.y,z:a.z-(a.nz??0)*e}}}return{x:a.x,y:a.y,z:a.z}}function zr(a){return a==="pressure"||a==="return"||a==="waste"||a==="out"?"source":a==="suction"||a==="pump"||a==="in"?"sink":null}function Ir(a){return a==="skimmer"||a==="drain"?"source":"sink"}function rt(a,t,e){let n=e.pool??{},o=Rs(t,e);return i=>{var c,d;let{kind:s,id:r,port:l}=tt(i);if(s==="port"){let p=(c=n.ports)==null?void 0:c.find(f=>f.id===r);if(!p)return null;let u=p.kind==="skimmer"?o:p.kind==="drain"?o-1.2:p.kind==="inlet"?o-.3:.02;return{x:p.x,z:p.z,y:u}}if(s==="joint"){let p=(d=n.joints)==null?void 0:d.find(u=>u.id===r);return p?ui(p,l):null}if(s!=="dev")return null;for(let p of a.floors){let u=p.furniture.find(g=>g.id===r);if(!u||!Ot.includes(u.type))continue;let f=l?Ar(u,l):null;if(f)return{...f,y:f.y+At(p,u)};let m=u.type==="pool_filter"?u.h*.88:u.type==="pool_dosing"?.95:u.type==="pool_valve"?Ds:u.type==="pool_pump"?.2:.3;return{x:u.x,z:u.z,y:m+At(p,u)}}return null}}function Mt(a,t){if(a.heights)return a;let e=a.height??di,n=t(a.from),o=t(a.to),i=[...n?[[n.x,n.z]]:[],...a.points,...o?[[o.x,o.z]]:[]];return{...a,points:i,heights:i.map(()=>e)}}var et=a=>Math.round(a*1e3)/1e3;function hi(a,t,e,n,o){let i=Mt(a,t),s=kt(i,t),r=We(s,e);if(!r)return null;let l={id:n,x:et(r.p[0]),z:et(r.p[2]),y:et(r.p[1])},c=gn(i,t),d=Math.max(0,Math.min(i.points.length,r.seg+1-c)),p=i.heights??[],u=i.fittings??[],f={...i,to:`joint:${n}:in`,points:i.points.slice(0,d),heights:p.slice(0,d),fittings:u.filter(g=>g.at<=r.at)},m={...i,id:o,from:`joint:${n}:out1`,points:i.points.slice(d),heights:p.slice(d),fittings:u.filter(g=>g.at>r.at).map(g=>({...g,at:et(g.at-r.at)}))};return{joint:l,first:f,second:m}}function gn(a,t){return a.from&&t(a.from)?1:0}var Dl=1.6;function Rr(a,t,e){var i;let n=[],o=s=>{let r=pt(a,[s[0],s[2]]);return r.d>-.35&&r.d<Dl&&r.s>-.3&&r.s<a.length+.3?r:null};for(let s of t){let r=Mt(s,e),l=kt(r,e);if(l.length<2)continue;let c={id:s.id,pieces:[],points:[],fittings:[],ends:[]};for(let u=1;u<l.length;u++){let f=o(l[u-1]),m=o(l[u]);f&&m&&c.pieces.push({k:u-1,s0:f.s,y0:l[u-1][1],d0:f.d,s1:m.s,y1:l[u][1],d1:m.d})}if(!c.pieces.length)continue;let d=gn(r,e);r.points.forEach((u,f)=>{let m=l[f+d],g=m&&o(m);g&&c.points.push({i:f,s:g.s,y:m[1]})});let p=pi(l);for(let u of s.fittings??[]){let f=Math.min(p,u.at),m=(i=Sr(l,f))==null?void 0:i.p,g=m&&o(m);m&&g&&c.fittings.push({id:u.id,kind:u.kind,open:u.open!==!1,s:g.s,y:m[1]})}for(let[u,f]of[["from",l[0]],["to",l[l.length-1]]]){let m=(u==="from"?!s.from:!s.to)?o(f):null;m&&c.ends.push({end:u,s:m.s,y:f[1]})}n.push(c)}return n}var Or=-.3;function fi(a,t,e,n,o){var _;let i=[],s=[],r=h=>t(h),l=[],c=a.from,d=[];for(let h of a.vias){if(h.kind!=="hole"){d.push(h.kind);continue}let b=e.find(z=>z.id===h.joint),y=r(c);if(!b||!y)continue;let S=r(`joint:${b.id}:inside`),E=r(`joint:${b.id}:outside`),R=h.dir?h.dir==="out":Math.hypot(y.x-S.x,y.z-S.z)<=Math.hypot(y.x-E.x,y.z-E.z);l.push({a:c,b:`joint:${b.id}:${R?"inside":"outside"}`,fits:d}),d=[],c=`joint:${b.id}:${R?"outside":"inside"}`}let p=a.to;if(p.length>1){let h=r(c),b=p.map(r).filter(y=>!!y);if(h&&b.length===p.length){let y=b.reduce((x,w)=>x+w.x,0)/b.length,S=b.reduce((x,w)=>x+w.z,0)/b.length,E=Math.hypot(h.x-y,h.z-S)||1,R=Math.min(1,E/2)/E,z=h.y<0||b.some(x=>x.y<0),M={id:o("joint"),kind:"tee",x:et(y+(h.x-y)*R),z:et(S+(h.z-S)*R),y:z?Or:et(h.y)};s.push(M),l.push({a:c,b:`joint:${M.id}:in`,fits:d}),d=[],p.forEach((x,w)=>l.push({a:`joint:${M.id}:out${w+1}`,b:x,fits:[]})),p=[]}}p.length&&l.push({a:c,b:p[0],fits:d});let u=h=>{let{kind:b,id:y,port:S}=tt(h),E=b==="joint"?s.find(R=>R.id===y):void 0;return E?ui(E,S):r(h)},f=h=>n(h)==="source",m=h=>n(h)==="sink",g=a.to.some(f)&&!f(a.from)||m(a.from)&&!a.to.some(m);for(let h of l){let b=u(h.a),y=u(h.b);if(!b||!y)continue;let S=Hl(b,y,Fr(h.a,e),Fr(h.b,e)),E={id:o("pipe"),from:h.a,to:h.b,floor_id:a.floorId,points:S.map(z=>[z[0],z[2]]),heights:S.map(z=>z[1])},R=pi(kt(E,u));E.fittings=h.fits.map((z,M)=>({id:o("fit"),kind:z,at:et(Math.min(R/2,.4+M*.25)),...z==="valve"?{open:!0}:{}})),g&&(E={...E,from:E.to,to:E.from,points:[...E.points].reverse(),heights:[...E.heights??[]].reverse(),fittings:(_=E.fittings)==null?void 0:_.map(z=>({...z,at:et(Math.max(0,R-z.at))}))}),i.push(E)}return{pipes:i,joints:s}}function Fr(a,t){let{kind:e,id:n,port:o}=tt(a),i=e==="joint"&&o==="outside"?t.find(s=>s.id===n):void 0;return(i==null?void 0:i.kind)==="wall"?[-(i.nx??0),-(i.nz??0)]:null}function Hl(a,t,e=null,n=null){let o=a.y<0||t.y<0?Or:et(Math.max(a.y,t.y)),i=[],[s,r]=[a.x,a.z];e&&([s,r]=[et(s+e[0]*.5),et(r+e[1]*.5)],i.push([s,et(a.y),r]));let[l,c]=[t.x,t.z],d=[];return n&&([l,c]=[et(l+n[0]*.5),et(c+n[1]*.5)],d.push([l,et(t.y),c])),i.push([et(s),o,et(r)]),Math.abs(l-s)>.01&&i.push([et(l),o,et(r)]),Math.abs(c-r)>.01&&i.push([et(l),o,et(c)]),i.push(...d),i.filter((p,u)=>u===0||Math.hypot(p[0]-i[u-1][0],p[1]-i[u-1][1],p[2]-i[u-1][2])>.001)}function Lr(a,t,e){let n=i=>{let{kind:s,id:r,port:l}=tt(i),c=s==="joint"&&(l==="inside"||l==="outside")?t.find(d=>d.id===r):void 0;return c&&(c.kind==="wall"||c.kind==="floor")?{id:r,port:l}:null},o=[];for(let i of a.filter(s=>s.from===e||s.to===e)){let s={start:e,other:"",pipes:[],holes:[],fittings:[]},r=i,l=e,c=new Set;for(;r&&!c.has(r.id);){c.add(r.id),s.pipes.push(r.id),s.fittings.push(...(r.fittings??[]).map(f=>f.kind));let d=r.from===l?r.to:r.from,p=d?n(d):null;if(!p){s.other=d;break}s.holes.push({joint:p.id,dir:p.port==="inside"?"out":"in"}),l=`joint:${p.id}:${p.port==="inside"?"outside":"inside"}`;let u=r;r=a.find(f=>f!==u&&(f.from===l||f.to===l)),r||(s.other=l)}o.push(s)}return o}function Wl(a,t,e){let n=e[0]-t[0],o=e[1]-t[1],i=n*n+o*o,s=i?Math.max(0,Math.min(1,((a[0]-t[0])*n+(a[1]-t[1])*o)/i)):0;return Math.hypot(a[0]-t[0]-n*s,a[1]-t[1]-o*s)}function Vr(a,t,e=.03){return a.every(n=>N(n,t)||t.some((o,i)=>Wl(n,o,t[(i+1)%t.length])<=e))}function Tr(a,t){return t&&a.states[t]?t:Object.keys(a.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}function jr(a,t){let e=a.states[t];if(!e)return!1;let n=String(e.attributes.device_class??"");return t.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(t):t.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(e.attributes.unit_of_measurement??"")):!1}var eo=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool"],Nl=["pool"];function Bl(){try{return localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function It(a){return!Nl.includes(a)||Bl()}var Dr=["fridge_smart"];function Hr(a){return eo.includes(a)||Dr.includes(a)}var Cr="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",ql={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",extensions:"7-extensions-shop-and-furniture-packs"};function ke(a){let t=a?ql[a]:void 0;return t?`${Cr}#${t}`:Cr}function Wr(){return new Set([...eo,...Dr].filter(It))}function ut(a){return It(a)}var Kl=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function Nr(a,t){let e=t??{},n=Object.keys(a.states),o=p=>{var u;return`${p} ${((u=a.states[p])==null?void 0:u.attributes.friendly_name)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},i=p=>{var u;return String(((u=a.states[p])==null?void 0:u.attributes.device_class)??"")},s=p=>{var u;return String(((u=a.states[p])==null?void 0:u.attributes.unit_of_measurement)??"")},r=n.filter(p=>Kl.test(o(p))),l=(p,u)=>p.find(u)??null,c=(p,u)=>{let f=e[p];return f==="none"?null:f??u()},d=p=>p.split(".")[0];return{temperature:c("temperature",()=>l(r,p=>d(p)==="sensor"&&(i(p)==="temperature"||/°[CF]/.test(s(p)))&&/(wasser|water|eau|agua|acqua)/.test(o(p)))??l(r,p=>d(p)==="sensor"&&(i(p)==="temperature"||/°[CF]/.test(s(p))))),heater:c("heater",()=>l(r,p=>d(p)==="climate"||d(p)==="water_heater")??l(r,p=>/^(switch|input_boolean)$/.test(d(p))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(o(p)))),pump:c("pump",()=>l(r,p=>/^(switch|fan|input_boolean)$/.test(d(p))&&/(pump|pumpe|filter|pompe|bomba)/.test(o(p)))??l(r,p=>d(p)==="binary_sensor"&&/(pump|pumpe|filter)/.test(o(p)))),light:c("light",()=>l(r,p=>d(p)==="light")),ph:c("ph",()=>{let p=u=>d(u)==="sensor"&&(i(u)==="ph"||s(u).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(o(u)));return l(r,p)??l(n,p)}),chlorine:c("chlorine",()=>l(r,u=>d(u)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(o(u))||s(u)==="mV"))??l(n,u=>d(u)==="sensor"&&/(orp|redox|chlor)/.test(o(u)))),cover:c("cover",()=>l(r,p=>d(p)==="cover"))}}function no(a,t){let e=a[0]??t,n=1/0;for(let o=0;o<a.length;o++){let i=a[o],s=a[(o+1)%a.length],r=s[0]-i[0],l=s[1]-i[1],c=r*r+l*l,d=c>0?Math.max(0,Math.min(1,((t[0]-i[0])*r+(t[1]-i[1])*l)/c)):0,p=[i[0]+r*d,i[1]+l*d],u=Math.hypot(p[0]-t[0],p[1]-t[1]);u<n&&([e,n]=[p,u])}return e}var Gl={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de CasaNeon ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de CasaNeon.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace.",as_furniture_pick:"Elegir mueble \u2026",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de CasaNeon.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_copy:"Copiar",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon \u2013 actualiza CasaNeon (HACS) y recarga la p\xE1gina.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para CasaNeon. Importa aqu\xED tus propios packs (.fp3dpack).",ext_pro:"Extensiones Pro",ext_active:"activa",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: CasaNeon encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas y prop\xF3n ideas como issue en GitHub: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant."};function Nt(a,t,e={}){let n=Gl[t]??t;for(let[o,i]of Object.entries(e))n=n.replace(`{${o}}`,String(i));return n}function St(a,t,e=2){return t.toLocaleString("es",{maximumFractionDigits:e})}var Jl={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function _n(a){return Jl[a]}function Br(a,t){var n;let e=`${t} ${String(((n=a.states[t])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(e)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(e)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(e)?"pet":"motion"}function qr(a,t){var n,o;let e=(o=(n=a.entities)==null?void 0:n[t])==null?void 0:o.device_id;return e?Object.values(a.entities??{}).filter(i=>i.device_id===e&&i.entity_id.startsWith("binary_sensor.")).map(i=>i.entity_id).filter(i=>{var s;return["motion","occupancy","presence"].includes(String((s=a.states[i])==null?void 0:s.attributes.device_class))}):[]}var Xt=Math.PI/180;function Vt(a){let t=Math.min(a.x0,a.x1),e=Math.max(a.x0,a.x1),n=Math.min(a.z0,a.z1),o=Math.max(a.z0,a.z1);return a.axis==="x"?{u0:t,u1:e,w:o-n,at:(i,s)=>[i,a.flip?o-s:n+s]}:{u0:n,u1:o,w:e-t,at:(i,s)=>[a.flip?e-s:t+s,i]}}function pe(a){let t=Vt(a).w,e=a.eave_a,n=a.eave_b,o=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*Xt),i=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*Xt);if(a.shape==="flat"||a.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(a.shape==="pent")return{vr:t,rh:e+t*o,y:l=>e+l*o};if(a.shape==="mansard"){let l=Yr(t,e,n,o,i);return{vr:l.vr,rh:l.rh,y:l.y}}let s=o+i>1e-6?Math.min(t,Math.max(0,(n-e+t*i)/(o+i))):t/2,r=e+s*o;return{vr:s,rh:r,y:l=>l<=s?e+l*o:n+(t-l)*i}}var Yl=.14;function Kr(a,t){return!a.open&&Math.min(a.base,a.eave_a,a.eave_b)<t-.05}function Gr(a,t,e){let n=[];for(let o of a.settings.roof.sections??[]){if(o.open||o.shape==="flat"||o.shape==="parapet"||o.shape==="mansard")continue;let i=Vt(o),s=pe(o),r=t+e+Yl,l=[],c=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*Xt),d=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*Xt);c>1e-6&&l.push((r-o.eave_a)/c),o.shape==="gable"&&d>1e-6&&l.push(i.w-(r-o.eave_b)/d);for(let p of l)p<=.01||p>=i.w-.01||o.shape==="gable"&&Math.abs(s.y(p)-r)>1e-6||n.push([i.at(i.u0,p),i.at(i.u1,p)])}return n}function Ql(a,t){let e=a.length;if(e<3||Math.abs(t)<1e-9)return a.map(i=>[i[0],i[1]]);let n=xt(a)>=0?1:-1,o=[];for(let i=0;i<e;i++){let s=a[(i+e-1)%e],r=a[i],l=a[(i+1)%e],c=Ur([r[0]-s[0],r[1]-s[1]]),d=Ur([l[0]-r[0],l[1]-r[1]]),p=[c[1]*n,-c[0]*n],u=[d[1]*n,-d[0]*n],f=p[0]+u[0],m=p[1]+u[1],g=Math.hypot(f,m);if(g<1e-6){o.push([r[0]+p[0]*t,r[1]+p[1]*t]);continue}let _=(f*p[0]+m*p[1])/g,h=Math.min(4,1/Math.max(.25,_));o.push([r[0]+f/g*t*h,r[1]+m/g*t*h])}return o}function Ur(a){let t=Math.hypot(a[0],a[1])||1;return[a[0]/t,a[1]/t]}function mi(a){let t=a.map(n=>n[0]),e=a.map(n=>n[1]);return{x0:Math.min(...t),z0:Math.min(...e),x1:Math.max(...t),z1:Math.max(...e)}}function Jr(a,t,e,n){let o=vt(a,{exterior:e,interior:n},t).walls.filter(p=>p.exterior&&!p.free);if(!o.length)return null;let i=p=>`${Math.round(p[0]*1e3)}:${Math.round(p[1]*1e3)}`,s=new Map,r=o.map(p=>({a:p.a,b:p.b}));for(let p of r)for(let u of[p.a,p.b])s.set(i(u),[...s.get(i(u))??[],p]);let l=new Set,c=null;for(let p of r){if(l.has(p))continue;l.add(p);let u=[p.a,p.b],f=p.b;for(;;){let m=(s.get(i(f))??[]).find(g=>!l.has(g));if(!m||(l.add(m),f=i(m.a)===i(f)?m.b:m.a,i(f)===i(u[0])))break;u.push(f)}u.length>=3&&i(f)===i(u[0])&&(!c||Math.abs(xt(u))>Math.abs(xt(c)))&&(c=u)}if(!c)return null;let d=[];for(let p=0;p<c.length;p++){let u=c[(p+c.length-1)%c.length],f=c[p],m=c[(p+1)%c.length],g=(f[0]-u[0])*(m[1]-f[1])-(f[1]-u[1])*(m[0]-f[0]);Math.abs(g)>1e-6&&d.push(f)}return d.length>=3?Ql(d,e):null}var bn=Math.tan(30*Xt);function Yr(a,t,e,n,o){let i=Math.min(a*.3,n>1e-6?2.4/n:a*.3),s=Math.min(a*.3,o>1e-6?2.4/o:a*.3),r=t+i*n,l=e+s*o,c=Math.min(a-s,Math.max(i,(l-r+bn*(a-s+i))/(2*bn))),d=r+(c-i)*bn;return{vla:i,vlb:s,yla:r,ylb:l,vr:c,rh:d,y:u=>u<=i?t+u*n:u<=c?r+(u-i)*bn:u<=a-s?l+(a-s-u)*bn:e+(a-u)*o}}function gi(a,t){let e=Vt(a),n=pe(a),o=e.w,i=Math.max(0,t.a),s=Math.max(0,t.b),r=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(b,y)=>[b,y,n.y(y)],d=c(r,-i),p=c(l,-i),u=c(l,o+s),f=c(r,o+s),m=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*Xt),g=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*Xt);if(a.shape==="pent"){let b=[d,p,u,f];return{faces:[b],rim:b,ridges:[[u,f]],gable:[[0,n.y(0)],[o,n.y(o)]]}}if(a.shape==="hip"||a.shape==="pyramid"){let b=a.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,o-n.vr)||o/2),y=[e.u0+b,n.vr,n.rh],S=[e.u1-b,n.vr,n.rh],E=a.shape==="pyramid"?[[d,p,y],[p,u,y],[u,f,y],[f,d,y]]:[[d,p,S,y],[y,S,u,f],[f,d,y],[p,u,S]],R=a.shape==="pyramid"?[[d,y],[f,y],[p,y],[u,y]]:[[y,S],[d,y],[f,y],[p,S],[u,S]];return{faces:E,rim:[d,p,u,f],ridges:R,gable:null}}if(a.shape==="halfhip"){let b=Math.min(n.y(0),n.y(o)),y=b+(n.rh-b)*.55,S=m>1e-6?Math.min(n.vr,(y-a.eave_a)/m):n.vr,E=g>1e-6?Math.max(n.vr,o-(y-a.eave_b)/g):n.vr,R=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,m)),z=[e.u0+R,n.vr,n.rh],M=[e.u1-R,n.vr,n.rh],x=[r,S,y],w=[r,E,y],k=[l,S,y],A=[l,E,y];return{faces:[[d,p,k,M,z,x],[z,M,A,u,f,w],[w,x,z],[k,A,M]],rim:[d,p,k,A,u,f,w,x],ridges:[[z,M],[x,z],[w,z],[k,M],[A,M]],gable:[[0,n.y(0)],[S,y],[E,y],[o,n.y(o)]]}}if(a.shape==="mansard"){let b=Yr(o,a.eave_a,a.eave_b,m,g),y=[r,b.vla,b.yla],S=[l,b.vla,b.yla],E=[r,o-b.vlb,b.ylb],R=[l,o-b.vlb,b.ylb],z=[r,b.vr,b.rh],M=[l,b.vr,b.rh];return{faces:[[d,p,S,y],[y,S,M,z],[z,M,R,E],[E,R,u,f]],rim:[d,p,S,M,R,u,f,E,z,y],ridges:[[z,M],[y,S],[E,R]],gable:[[0,n.y(0)],[b.vla,b.yla],[b.vr,b.rh],[o-b.vlb,b.ylb],[o,n.y(o)]]}}let _=[r,n.vr,n.rh],h=[l,n.vr,n.rh];return{faces:[[d,p,h,_],[_,h,u,f]],rim:[d,p,h,u,f,_],ridges:[[_,h]],gable:[[0,n.y(0)],[n.vr,n.rh],[o,n.y(o)]]}}function Zl(a,t,e){let n=null;for(let o of a.faces){if(!N([t,e],o.map(b=>[b[0],b[1]])))continue;let[i,s]=o,r=o.slice(2).find(b=>Math.abs((s[0]-i[0])*(b[1]-i[1])-(s[1]-i[1])*(b[0]-i[0]))>1e-9);if(!r)continue;let l=s[0]-i[0],c=s[2]-i[2],d=s[1]-i[1],p=r[0]-i[0],u=r[2]-i[2],f=r[1]-i[1],m=c*f-d*u,g=d*p-l*f,_=l*u-c*p;if(Math.abs(g)<1e-9)continue;let h=i[2]-(m*(t-i[0])+_*(e-i[1]))/g;n=n===null?h:Math.min(n,h)}return n}function Xl(a,t,e){let n=Math.min(a.x0,a.x1),o=Math.max(a.x0,a.x1),i=Math.min(a.z0,a.z1),s=Math.max(a.z0,a.z1);return a.axis==="x"?[t,a.flip?s-e:e-i]:[e,a.flip?o-t:t-n]}function tc(a){return{x0:Math.min(a.x0,a.x1),x1:Math.max(a.x0,a.x1),z0:Math.min(a.z0,a.z1),z1:Math.max(a.z0,a.z1)}}function Qr(a,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,o=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),i=null;for(let s of a){if(s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||o(s)<o(t)*1.5)continue;let r=tc(s);e<r.x0||e>r.x1||n<r.z0||n>r.z1||(!i||o(s)<o(i))&&(i=s)}return i}function Zr(a,t,e,n){let o=Vt(a),i=pe(a),s=2,r=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(n??(o.u0+o.u1)/2)-s/2)),l=t==="a"?a.eave_a:a.eave_b,c=t==="a"?a.pitch_a:a.pitch_b,d=l+1.4,p=s/2*Math.tan(35*Xt),u=d+p,f=Math.max(.8,Math.min(o.w/2-.2,(u-l)/Math.max(.15,Math.tan(Math.min(80,c)*Xt)))),m=t==="a"?0:o.w-f,g=t==="a"?f:o.w,_=o.at(r,m),h=o.at(r+s,g);return{id:e,x0:Math.round(Math.min(_[0],h[0])*100)/100,z0:Math.round(Math.min(_[1],h[1])*100)/100,x1:Math.round(Math.max(_[0],h[0])*100)/100,z1:Math.round(Math.max(_[1],h[1])*100)/100,shape:"gable",axis:a.axis==="x"?"z":"x",eave_a:Math.round(d*100)/100,eave_b:Math.round(d*100)/100,pitch_a:35,pitch_b:35,base:Math.round(i.y(t==="a"?0:o.w)*100)/100,overhang:.15,dormer:!0}}function Xr(a,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Vt(t),n=pe(t).rh,o=gi(a,{u0:0,u1:0,a:0,b:0}),i=pe(a),s=m=>{let[g,_]=e.at(m,e.w/2),[h,b]=Xl(a,g,_);return Zl(o,h,b)??i.y(b)},r=s(e.u0)<=s(e.u1),l=r?e.u0:e.u1,c=r?e.u1:e.u0,d=r?1:-1,p=Math.abs(c-l),u=c;for(let m=.5;m<p;m+=.05)if(s(l+d*m)>=n-.02){u=l+d*m;break}if(Math.abs(u-c)<.05)return t;let f={...t};return t.axis==="x"?c===e.u1?f.x1=u:f.x0=u:c===e.u1?f.z1=u:f.z0=u,f}function ta(a,t,e){let n=Vt(t),o=a.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>t.base+.05)),i=c=>c.some(d=>o.some(p=>N(d,p.points))),s=.35,r=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:i(r.map(c=>n.at(c,-s)))?0:e,b:i(r.map(c=>n.at(c,n.w+s)))?0:e,u0:i(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:i(l.map(c=>n.at(n.u1+s,c)))?0:e}}function ea(a,t,e,n,o){let i=[];for(let r of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([t+(n-t)*r,e+(o-e)*l]);let s=a.floors.filter(r=>r.rooms.some(l=>l.points.length>=3&&i.some(c=>N(c,l.points)))).map(r=>r.elevation+r.height);return s.length?Math.max(...s):null}function na(a,t){let e=a.floors.filter(n=>n.rooms.length>0).sort((n,o)=>n.elevation-o.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function oo(a){return pe(a).rh}function oa(a,t=e=>`roof_${e+1}`){var l;let e=((l=a.settings.roof)==null?void 0:l.pitch)??35,n=a.settings.wall_exterior,o=a.floors.filter(c=>c.rooms.some(d=>d.points.length>=3)).sort((c,d)=>d.elevation-c.elevation),i=[],s=[],r=c=>Math.round(c*1e3)/1e3;for(let c of o){let d=c.rooms.filter(S=>S.points.length>=3),p=[...new Set(d.flatMap(S=>S.points.map(E=>r(E[0]))))].sort((S,E)=>S-E),u=[...new Set(d.flatMap(S=>S.points.map(E=>r(E[1]))))].sort((S,E)=>S-E),f=p.length-1,m=u.length-1,g=(S,E)=>S.some(R=>N(E,R.points)),_=[];for(let S=0;S<m;S++){_.push([]);for(let E=0;E<f;E++){let R=[(p[E]+p[E+1])/2,(u[S]+u[S+1])/2];_[S].push(g(d,R)&&!g(s,R))}}let h=_.map(S=>S.map(()=>!1)),b=(S,E)=>_[E][S]&&!h[E][S],y=c.elevation+c.height;for(let S=0;S<m;S++)for(let E=0;E<f;E++){if(!b(E,S))continue;let R=E;for(;R+1<f&&b(R+1,S);)R++;let z=S;for(;z+1<m&&Array.from({length:R-E+1},(A,P)=>b(E+P,z+1)).every(Boolean);)z++;for(let A=S;A<=z;A++)for(let P=E;P<=R;P++)h[A][P]=!0;let M=p[E]-n,x=p[R+1]+n,w=u[S]-n,k=u[z+1]+n;Math.min(x-M,k-w)<.8||i.push({id:t(i.length),x0:r(M),z0:r(w),x1:r(x),z1:r(k),shape:"gable",axis:x-M>=k-w?"x":"z",eave_a:r(y),eave_b:r(y),pitch_a:e,pitch_b:e,base:r(y),overhang:null})}s.push(...d)}return i}var Pe=Math.PI/180,ia=1.13,_i=1.72,Ft=.025,Me=.07,sa=.25;function Bt(a,t){var n;let e=[];for(let o of a.floors){if(t&&o.id!==t)continue;let{walls:i}=vt(o.rooms,{exterior:a.settings.wall_exterior,interior:a.settings.wall_interior},o.walls??[]);for(let s of i){if(!s.exterior&&!s.free)continue;let r=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(r,l);if(c<.5)continue;let d=l/c,p=-r/c,u=Math.min(o.height,s.height??o.height),f=((n=s.sources.find(_=>_.room_id===s.roomLeft))==null?void 0:n.edge)??null,m={floorId:o.id,room:s.roomLeft,edge:f,free:!!s.free},g=(_,h,b,y)=>e.push({key:_,section:null,side:"top",flat:!1,o:h,eu:b,es:[0,1,0],n:y,lu:c,ls:u,pitch:90,span:()=>[0,c],facing:[y[0],y[2]],wall:m});g(`wall:${o.id}:${s.id}`,[s.a[0]+d*s.right,o.elevation,s.a[1]+p*s.right],[r/c,0,l/c],[d,0,p]),s.free&&g(`wall:${o.id}:${s.id}:back`,[s.b[0]-d*s.left,o.elevation,s.b[1]-p*s.left],[-r/c,0,-l/c],[-d,0,-p])}}return e}var he="ground";function ec(a){let t=[...a.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??a.floors[0]??null}function ra(a,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],o=[-Math.sin(e),0,Math.cos(e)],i=ec(a),s=n[0]*t.u+o[0]*t.v,r=n[2]*t.u+o[2]*t.v,l=i?i.elevation+(t.base!=null?t.base:Is(i,s,r)):t.base??0;return{key:he,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function wt(a,t,e=nt(a)){return t.face===he?ra(a,t):t.face.startsWith("wall:")?Bt(a,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function aa(a,t,e){let n=Bt(a,e),o=a.settings.north??0,i=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-o;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},s=[...n].sort((l,c)=>i(c)-i(l))[0];if(!s)return null;let r={...ro(s,t),portrait:!1,rows:1};return r.cols=Math.max(1,Math.floor((s.lu-.8+Ft)/(_i+Ft))),r.u=Math.round((s.lu-(r.cols*_i+(r.cols-1)*Ft))/2*100)/100,r.v=Math.round(Math.max(0,s.ls-ia-.3)*100)/100,r}function vi(a,t){let e=a.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),n=e.length?Math.max(...e.map(i=>i[0]))+3:0,o=e.length?Math.min(...e.map(i=>i[1])):0;return{id:t,face:he,u:Math.round(n*100)/100,v:Math.round(o*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(a.settings.north??0)||0,look:"black",entity:null}}function yi(a){return a.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function nt(a){let t=a.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(b=>nc(b,ta(a,b,b.overhang??t.overhang)));let e=yi(a);if(!e)return[];let n=e.rooms.flatMap(b=>b.points.map(y=>y[0])),o=e.rooms.flatMap(b=>b.points.map(y=>y[1])),i=a.settings.wall_exterior+t.overhang,s=Math.min(...n)-i,r=Math.max(...n)+i,l=Math.min(...o)-i,c=Math.max(...o)+i,d=e.elevation+e.height;if(t.type==="flat")return[la("main",null,s,l,r,c,d+sa)];let p=r-s>=c-l,u=t.ridge==="short"?!p:p,f=(u?c-l:r-s)/2,m=f*Math.tan(t.pitch*Pe),g=(b,y,S)=>u?[b,d+S,(l+c)/2+y]:[(s+r)/2+y,d+S,b],[_,h]=u?[s,r]:[l,c];return[-1,1].map(b=>io(`main:${b<0?"a":"b"}`,null,b<0?"a":"b",g(_,b*f,0),g(h,b*f,0),g(_,0,m),t.pitch,()=>[0,h-_]))}function nc(a,t){let e=Vt(a),n=pe(a),o=(g,_,h)=>{let[b,y]=e.at(g,_);return[b,h,y]},i=Math.max(0,t.a),s=Math.max(0,t.b),r=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-r;if(a.shape==="flat"||a.shape==="parapet"){let g=e.at(r,-i),_=e.at(l,e.w+s);return[la(a.id,a.id,Math.min(g[0],_[0]),Math.min(g[1],_[1]),Math.max(g[0],_[0]),Math.max(g[1],_[1]),a.eave_a+sa)]}if(a.shape==="pent")return[io(`${a.id}:a`,a.id,"a",o(r,-i,n.y(-i)),o(l,-i,n.y(-i)),o(r,e.w+s,n.y(e.w+s)),a.pitch_a,()=>[0,c])];let d=a.shape==="hip"||a.shape==="pyramid",p=a.shape==="pyramid"?(e.u1-e.u0)/2:d?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,u=d?e.u0+p-r:0,f=d?l-(e.u1-p):0,m=[];if(n.vr>.3){let g=Math.hypot(n.vr+i,n.rh-n.y(-i));m.push(io(`${a.id}:a`,a.id,"a",o(r,-i,n.y(-i)),o(l,-i,n.y(-i)),o(r,n.vr,n.rh),a.pitch_a,_=>[u*(_/g),c-f*(_/g)]))}if(e.w-n.vr>.3){let g=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));m.push(io(`${a.id}:b`,a.id,"b",o(l,e.w+s,n.y(e.w+s)),o(r,e.w+s,n.y(e.w+s)),o(l,n.vr,n.rh),a.pitch_b,_=>[f*(_/g),c-u*(_/g)]))}if(d){let g=n.y(-i),_=n.y(e.w+s),h=[[`${a.id}:c`,"c",o(r,e.w+s,_),o(r,-i,g),o(e.u0+p,n.vr,n.rh)],[`${a.id}:d`,"d",o(l,-i,g),o(l,e.w+s,_),o(e.u1-p,n.vr,n.rh)]];for(let[b,y,S,E,R]of h){let z=oc(b,a.id,y,S,E,R);z&&m.push(z)}}return m}function oc(a,t,e,n,o,i){let s=vn(Se(o,n));if(s<.3)return null;let r=ue(Se(o,n)),l=Se(i,n),c=l[0]*r[0]+l[1]*r[1]+l[2]*r[2],d=[l[0]-r[0]*c,l[1]-r[1]*c,l[2]-r[2]*c],p=vn(d);if(p<.3)return null;let u=ue(d),f=ue(da(r,u));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let m=ue([-u[0],0,-u[2]]),g=Math.atan2(u[1],Math.hypot(u[0],u[2]))/Pe;return{key:a,section:t,side:e,flat:!1,o:n,eu:r,es:u,n:f,lu:s,ls:p,pitch:g,span:h=>{let b=Math.min(1,Math.max(0,h/p));return[c*b,s-(s-c)*b]},facing:[m[0],m[2]]}}function io(a,t,e,n,o,i,s,r){let l=ue(Se(o,n)),c=ue(Se(i,n)),d=ue(da(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=ue([-c[0],0,-c[2]]);return{key:a,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:d,lu:vn(Se(o,n)),ls:vn(Se(i,n)),pitch:s,span:r,facing:[p[0],p[2]]}}function la(a,t,e,n,o,i,s){let r=o-e>=i-n,l=r?o-e:i-n,c=r?i-n:o-e;return{key:`${a}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:r?[1,0,0]:[0,0,1],es:r?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:r?[0,1]:[1,0]}}function Be(a){let t=a.module_w||ia,e=a.module_h||_i;return a.portrait===!1?[e,t]:[t,e]}function yn(a){var t;return(t=a.layout)!=null&&t.length?a.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,a.rows)},()=>Math.max(1,a.cols))}function $i(a,t){return a.flat?Math.min(45,Math.max(0,t.tilt??15))*Pe:a.wall?Math.min(90,Math.max(0,t.tilt??0))*Pe:0}function qe(a,t){let[e,n]=Be(t),o=yn(t),i=Math.max(1,...o),r=(o.length-1)*xi(a,t)+n*Math.cos($i(a,t));return[i*e+(i-1)*Ft,r]}function xi(a,t){let[,e]=Be(t),n=$i(a,t);return a.wall?e*Math.cos(n)+Ft:a.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Ft}function te(a,t,e=!1){let[n,o]=Be(t),i=[],s=$i(a,t),r=o*Math.cos(s),l=xi(a,t),c=yn(t),d=Math.max(1,...c),p=new Set(t.skip??[]),u=!!a.wall&&n>a.lu+1e-6,f=(g,_,h)=>[a.o[0]+a.eu[0]*g+a.es[0]*_+a.n[0]*h,a.o[1]+a.eu[1]*g+a.es[1]*_+a.n[1]*h,a.o[2]+a.eu[2]*g+a.es[2]*_+a.n[2]*h],m=(g,_)=>{if(a.unbounded)return!0;if(_<-1e-6||_>a.ls+1e-6)return!1;let[h,b]=a.span(_);return g>=h-1e-6&&g<=b+1e-6};return c.forEach((g,_)=>{let h=t.align==="right"?d-g:t.align==="center"?(d-g)/2:0;for(let b=0;b<g;b++){let y=`${_}:${b}`,S=p.has(y);if(S&&!e)continue;let E=t.u+(b+h)*(n+Ft),R=t.v+_*l,z=E+n,M=R+(a.flat||a.wall?r:o);if(u){if(!(m((E+z)/2,R)&&m((E+z)/2,M)))continue}else if(![[E,R],[z,R],[z,M],[E,M]].every(([O,L])=>m(O,L)))continue;if(a.wall&&s>.001){let O=Me+o*Math.sin(s),[L,j]=t.flip?[O,Me]:[Me,O],F=[f(E,R,L),f(z,R,L),f(z,M,j),f(E,M,j)],V=t.flip?R:M,H=[E+.05,z-.05].map(C=>[f(C,V,0),f(C,V,O)]);i.push({corners:F,posts:H,cell:y,skipped:S});continue}if(!a.flat){i.push({corners:[f(E,R,Me),f(z,R,Me),f(z,M,Me),f(E,M,Me)],posts:[],cell:y,skipped:S});continue}let x=.15,w=x+o*Math.sin(s),[k,A]=t.flip?[M,R]:[R,M],P=[f(E,k,x),f(z,k,x),f(z,A,w),f(E,A,w)];i.push({corners:P,posts:[E+.05,z-.05].flatMap(O=>[[f(O,k,0),f(O,k,x)],[f(O,A,0),f(O,A,w)]]),cell:y,skipped:S})}}),i}function so(a,t){let e=[a.eu[0],a.eu[2]],n=[a.es[0],a.es[2]],o=[t[0]-a.o[0],t[1]-a.o[2]],i=e[0]*n[1]-e[1]*n[0];if(Math.abs(i)<1e-9)return null;let s=(o[0]*n[1]-o[1]*n[0])/i,r=(e[0]*o[1]-e[1]*o[0])/i;if(r<0||r>a.ls)return null;let[l,c]=a.span(r);return s>=l&&s<=c?{u:s,s:r}:null}function ca(a,t){let e=null;for(let n of a){if(n.wall){let s=[t[0]-n.o[0],t[1]-n.o[2]],r=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(r>=0&&r<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:r,s:Number.NaN};r>=0&&r<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:r,s:Number.NaN,y:-1/0});continue}let o=so(n,t);if(!o)continue;let i=n.o[1]+n.es[1]*o.s;(!e||i>e.y)&&(e={face:n,...o,y:i})}return e?{face:e.face,u:e.u,s:e.s}:null}function Ue(a,t){if(a.unbounded)return{u:t.u,v:t.v};let[e,n]=qe(a,t),o=s=>Math.floor(s*100+1e-6)/100;return{u:a.wall&&e>a.lu?Math.round((a.lu-e)/2*100)/100:o(Math.min(Math.max(0,t.u),Math.max(0,a.lu-e))),v:o(Math.min(Math.max(0,t.v),Math.max(0,a.ls-n)))}}function ro(a,t){let e={id:t,face:a.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:a.flat?15:null,flip:!1,entity:null,look:"black"},[n]=Be(e),o=.4,i=xi(a,e),[s,r]=a.span(a.ls/2);for(e.cols=Math.max(1,Math.floor((r-s-2*o+Ft)/(n+Ft))),e.rows=Math.max(1,Math.min(4,Math.floor((a.ls-2*o)/i)));e.cols>1&&te(a,{...e,u:bi(a,e),v:o}).length<e.rows*e.cols;)e.cols--;return e.u=bi(a,e),e.v=o,e}function wi(a,t){let e={...t,face:a.key,tilt:a.flat?t.tilt??15:null,rotation:null,flip:!1};return a.wall&&Object.assign(e,ic(a,e)),e.u=bi(a,e),e.v=.4,{...e,...Ue(a,e)}}function ic(a,t){let e=o=>Math.floor((a.lu+Ft+1e-6)/(Be({...t,portrait:o})[0]+Ft)),n=t.portrait===!1&&e(!1)<1?!0:t.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...yn(t)),e(n!==!1))),layout:void 0,skip:void 0}}function bi(a,t){let[e]=Be(t),n=t.cols*e+(t.cols-1)*Ft;return Math.round((a.lu-n)/2*100)/100}function ki(a,t){let e=(Math.atan2(a.facing[0],-a.facing[1])/Pe-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function ao(a,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let o=(Math.atan2(n.facing[0],-n.facing[1])/Pe-t+720)%360,i=Math.cos((o-180)*Pe);return n.lu*n.ls*(1.2+i)};return[...a].sort((n,o)=>e(o)-e(n))[0]??null}function Se(a,t){return[a[0]-t[0],a[1]-t[1],a[2]-t[2]]}function vn(a){return Math.hypot(a[0],a[1],a[2])}function ue(a){let t=vn(a)||1;return[a[0]/t,a[1]/t,a[2]/t]}function da(a,t){return[a[1]*t[2]-a[2]*t[1],a[2]*t[0]-a[0]*t[2],a[0]*t[1]-a[1]*t[0]]}var pa=.78,ua=1.18;function Ke(a){return{id:a.id,face:a.face,u:a.u,v:a.v,rows:1,cols:1,portrait:!0,module_w:a.w||pa,module_h:a.h||ua}}function ha(a,t){let e=te(a,Ke(t))[0];if(!e)return null;let n=o=>[o[0]-a.n[0]*.05,o[1]-a.n[1]*.05,o[2]-a.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Mi(a,t){let e=pa,n=ua,[o,i]=a.span(a.ls/2);return{id:t,face:a.key,u:Math.round((o+i-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(a.ls-n,a.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function $n(a,t,e){let n=ra(a,t),[o,i]=qe(n,t),s=n.eu[0]*(t.u+o/2)+n.es[0]*(t.v+i/2),r=n.eu[2]*(t.u+o/2)+n.es[2]*(t.v+i/2),l=e*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],p=s*c[0]+r*c[1]-o/2,u=s*d[0]+r*d[1]-i/2,f=m=>Math.round(m*100)/100;return{u:f(p),v:f(u),rotation:(Math.round(e)%360+360)%360}}function xn(a,t){let[e,n]=qe(a,t);return[a.o[0]+a.eu[0]*(t.u+e/2)+a.es[0]*(t.v+n/2),a.o[2]+a.eu[2]*(t.u+e/2)+a.es[2]*(t.v+n/2)]}function Si(a,t,e){let n=e[0]*a.n[0]+e[1]*a.n[1]+e[2]*a.n[2];if(Math.abs(n)<1e-6)return null;let o=((a.o[0]-t[0])*a.n[0]+(a.o[1]-t[1])*a.n[1]+(a.o[2]-t[2])*a.n[2])/n;if(o<=0)return null;let i=[t[0]+e[0]*o-a.o[0],t[1]+e[1]*o-a.o[1],t[2]+e[2]*o-a.o[2]],s=i[0]*a.eu[0]+i[1]*a.eu[1]+i[2]*a.eu[2],r=i[0]*a.es[0]+i[1]*a.es[1]+i[2]*a.es[2];return{t:o,u:s,s:r}}function fa(a,t,e){if(a.unbounded)return!0;if(e<0||e>a.ls)return!1;let[n,o]=a.span(e);return t>=n&&t<=o}function ma(a,t,e,n){for(let o of te(a,t)){let i=o.corners.map(d=>{let p=[d[0]-a.o[0],d[1]-a.o[1],d[2]-a.o[2]];return[p[0]*a.eu[0]+p[1]*a.eu[1]+p[2]*a.eu[2],p[0]*a.es[0]+p[1]*a.es[1]+p[2]*a.es[2]]}),[s,r]=[Math.min(...i.map(d=>d[0])),Math.max(...i.map(d=>d[0]))],[l,c]=[Math.min(...i.map(d=>d[1])),Math.max(...i.map(d=>d[1]))];if(e>=s-.05&&e<=r+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}var Rt=.03,lo=a=>a&&a!=="none"?a:null;function Ei(a,t=e=>lo(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of a.floors)for(let o of n.furniture){let i=t(o);if(o.type==="meter")e.grid??=i,e.gridExport??=lo(o.export);else if(o.type==="inverter"&&i&&!e.solar.includes(i))e.solar.push(i);else if(o.type==="home_battery"){i&&!e.battery.includes(i)&&e.battery.push(i);let s=lo(o.charge);s&&!e.charge.includes(s)&&e.charge.push(s),(i||s)&&e.batteries.push({power:i,charge:s});let r=lo(o.soc);r&&!e.soc.includes(r)&&e.soc.push(r)}}return e}function Ai(a){for(let t of a.floors){let e=t.furniture.find(n=>n.type==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return a.energy.meter}function ya(a){let t=n=>{var o,i;return((i=(o=a.energy_sources)==null?void 0:o.find(s=>s.type===n))==null?void 0:i.stat_energy_from)??null},e=n=>n&&n.startsWith("sensor.")?n:null;return{gas:e(t("gas")),water:e(t("water"))}}function co(a,t,e="power"){var r,l;if(!t)return null;let n=(l=(r=a.entities)==null?void 0:r[t])==null?void 0:l.device_id;if(!n)return null;let o=Object.keys(a.states).filter(c=>{var d,p,u;return c.startsWith("sensor.")&&((p=(d=a.entities)==null?void 0:d[c])==null?void 0:p.device_id)===n&&((u=a.states[c])==null?void 0:u.attributes.device_class)===e});if(o.length<=1)return o[0]??null;let i=o.filter(c=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(c)),s=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return i.find(c=>s&&c.includes(s))??i[0]??o[0]}function $a(a,t){var n,o,i,s;let e={};for(let r of t.energy_sources??[])if(r.type==="grid"){let l=((o=(n=r.flow_from)==null?void 0:n[0])==null?void 0:o.stat_energy_from)??((s=(i=r.flow_to)==null?void 0:i[0])==null?void 0:s.stat_energy_to),c=co(a,l);c&&!e.grid&&(e.grid=c)}else if(r.type==="solar"){let l=co(a,r.stat_energy_from);l&&!e.solar&&(e.solar=l)}else if(r.type==="battery"){let l=co(a,r.stat_energy_from??r.stat_energy_to);l&&!e.battery&&(e.battery=l);let c=co(a,r.stat_energy_from??r.stat_energy_to,"battery");c&&!e.battery_soc&&(e.battery_soc=c)}return e}var sc=.07;function ee(a,t=!1){if(!a)return null;let e=Number(a.state);if(!Number.isFinite(e))return null;let n=String(a.attributes.unit_of_measurement??"W"),o=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-o:o}function rc(a,t){var e;return t.startsWith("sensor.")&&((e=a.states[t])==null?void 0:e.attributes.device_class)==="power"}function xa(a,t){var i,s;if(rc(a,t))return t;let e=(s=(i=a.entities)==null?void 0:i[t])==null?void 0:s.device_id;if(!e)return null;let n=or(a,e),o=n?xe(a,t):null;return Qo(a,e).find(r=>r!==t&&(!n||o!==null&&xe(a,r)===o))??null}function wa(a,t,e,n=Ei(t)){let o=t.energy,i=o.grid??n.grid,s=i?ee(a.states[i],o.grid_invert):null;if(!o.grid&&n.gridExport){let g=Math.max(0,ee(a.states[n.gridExport])??0);s=Math.max(0,s??0)-g}let r=o.solar?ee(a.states[o.solar]):null;if(!o.solar&&n.solar.length){let g=n.solar.map(_=>ee(a.states[_])).filter(_=>_!==null);r=g.length?g.reduce((_,h)=>_+h,0):null}let l=o.battery?ee(a.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let g=n.batteries.map(_=>{if(_.charge){let h=_.power?Math.max(0,ee(a.states[_.power])??0):0,b=Math.max(0,ee(a.states[_.charge])??0);return h-b}return _.power?ee(a.states[_.power],o.battery_invert):null}).filter(_=>_!==null);l=g.length?g.reduce((_,h)=>_+h,0):null}let d=(o.battery_soc?[o.battery_soc]:n.soc).map(g=>{var _;return Number((_=a.states[g])==null?void 0:_.state)}).filter(g=>Number.isFinite(g)),p=d.length?d.reduce((g,_)=>g+_,0)/d.length:NaN,u=o.tariff?a.states[o.tariff]:void 0,f=Number(u==null?void 0:u.state),m=o.consumption?ee(a.states[o.consumption]):null;return m!==null?m=Math.max(0,m):s!==null||r!==null||l!==null?m=Math.max(0,(s??0)+Math.max(0,r??0)+(l??0)):e.length&&(m=e.reduce((g,_)=>g+_.power,0)),{grid:s,solar:r===null?null:Math.max(0,r),battery:l,soc:Number.isFinite(p)?p:null,tariff:u&&Number.isFinite(f)?{value:f,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:m}}function Ae(a,t){return a.pos.push(t),a.adj.push([]),a.pos.length-1}function Ee(a,t,e){let n=Math.hypot(a.pos[t][0]-a.pos[e][0],a.pos[t][1]-a.pos[e][1]);a.adj[t].push({to:e,w:n}),a.adj[e].push({to:t,w:n})}function ac(a,t){let e=a.length,n=a.map((o,i)=>{let s=a[(i+1)%e],r=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(r,l)||1,d=-l/c,p=r/c;return{p:[o[0]+d*t[i],o[1]+p*t[i]],d:[r/c,l/c],n:[d,p]}});return a.map((o,i)=>{let s=n[(i-1+e)%e],r=n[i],l=s.d[0]*r.d[1]-s.d[1]*r.d[0];if(Math.abs(l)<1e-6)return[o[0]+r.n[0]*t[i],o[1]+r.n[1]*t[i]];let c=((r.p[0]-s.p[0])*r.d[1]-(r.p[1]-s.p[1])*r.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function lc(a){return at(a.points)>=0?{pts:a.points,flipped:!1}:{pts:[...a.points].reverse(),flipped:!0}}function zi(a,t,e){let n={pos:[],adj:[],rings:new Map},{walls:o}=vt(a.rooms,{exterior:t,interior:e},a.walls??[]);for(let i of a.rooms){if(i.points.length<3)continue;let{pts:s,flipped:r}=lc(i),l=s.length,c=s.map((u,f)=>{let m=r?(l-2-f+l)%l:f,g=o.some(_=>!_.exterior&&_.sources.some(h=>h.room_id===i.id&&h.edge===m));return sc+(g?e/2:0)}),d=ac(s,c).map(u=>Ae(n,u)),p=d.map((u,f)=>[u,d[(f+1)%l]]);for(let[u,f]of p)Ee(n,u,f);n.rings.set(i.id,p)}for(let i of o){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],r=uo(n,i.roomLeft,s),l=uo(n,i.roomRight,s);r!==null&&l!==null&&Ee(n,r,l)}return n}function uo(a,t,e){let n=a.rings.get(t);if(!n)return null;let o=null;for(let s of n){let r=a.pos[s[0]],l=a.pos[s[1]],c=l[0]-r[0],d=l[1]-r[1],p=c*c+d*d||1,u=Math.min(1,Math.max(0,((e[0]-r[0])*c+(e[1]-r[1])*d)/p)),f=[r[0]+c*u,r[1]+d*u],m=Math.hypot(e[0]-f[0],e[1]-f[1]);(!o||m<o.d)&&(o={seg:s,q:f,d:m})}if(!o)return null;let i=Ae(a,o.q);return Ee(a,i,o.seg[0]),Ee(a,i,o.seg[1]),i}function ho(a,t,e){let n=a.pos[e],o=uo(a,t.id,n);if(o===null)return!1;let i=a.pos[o],s=a.pos[a.adj[o][0].to],r=a.pos[a.adj[o][1].to],l=Math.hypot(r[0]-s[0],r[1]-s[1])||1,c=[(r[0]-s[0])/l,(r[1]-s[1])/l],d=(n[0]-i[0])*c[0]+(n[1]-i[1])*c[1],p=(n[1]-i[1])*c[0]-(n[0]-i[0])*c[1];if(Math.abs(d)<.01||Math.abs(p)<.01)return Ee(a,e,o),!0;let u=[i[0]+c[0]*d,i[1]+c[1]*d],f=[i[0]-c[1]*p,i[1]+c[0]*p],m=Ae(a,N(f,t.points)||!N(u,t.points)?f:u);return Ee(a,o,m),Ee(a,m,e),!0}function kn(a,t){let e=a.rooms.filter(i=>i.points.length>=3),n=e.find(i=>N(t,i.points));if(n)return n;let o=null;for(let i of e)for(let s of i.points){let r=Math.hypot(t[0]-s[0],t[1]-s[1]);(!o||r<o.d)&&(o={room:i,d:r})}return(o==null?void 0:o.room)??null}function ka(a,t){let e=a.pos.map(()=>1/0),n=a.pos.map(()=>-1),o=a.pos.map(()=>!1);for(e[t]=0;;){let i=-1;for(let s=0;s<e.length;s++)!o[s]&&e[s]<1/0&&(i<0||e[s]<e[i])&&(i=s);if(i<0)break;o[i]=!0;for(let{to:s,w:r}of a.adj[i])e[i]+r<e[s]-1e-9&&(e[s]=e[i]+r,n[s]=i)}return{dist:e,prev:n}}function ga(a,t){return a.every(e=>t[e].kind==="battery")?"battery":a.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var _a=new WeakMap;function cc(a,t){let e=Ai(a),n=a.floors.find(d=>d.id===e.floor_id),o=[],{wall_exterior:i,wall_interior:s}=a.settings,r=new Map,l=new Map;t.forEach((d,p)=>l.set(d.floorId,[...l.get(d.floorId)??[],p]));let c=a.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let p=d.elevation>n.elevation,u=l.get(d.id),f=ga(u,t);o.push({floorId:n.id,a:[e.x,Rt,e.z],b:[e.x,p?n.height:-.2,e.z],dist:0,members:u,kind:f});let m=Math.abs(d.elevation-n.elevation);o.push({floorId:d.id,a:[e.x,p?-.2:d.height,e.z],b:[e.x,Rt,e.z],dist:m,members:u,kind:f}),r.set(d.id,m+.25)}for(let d of c){let p=zi(d,i,s),u=kn(d,[e.x,e.z]);if(!u)continue;let f=Ae(p,[e.x,e.z]);if(!ho(p,u,f))continue;let m=[];for(let y of l.get(d.id)){let S=t[y],E=kn(d,[S.x,S.z]);if(!E)continue;let R=Ae(p,[S.x,S.z]);ho(p,E,R)&&m.push({node:R,member:y})}let{dist:g,prev:_}=ka(p,f),h=new Map;for(let y of m)if(Number.isFinite(g[y.node]))for(let S=y.node;_[S]>=0;S=_[S]){let E=_[S],R=`${E}>${S}`,z=h.get(R)??{a:E,b:S,members:[]};z.members.push(y.member),h.set(R,z)}let b=r.get(d.id)??0;for(let{a:y,b:S,members:E}of h.values()){let R=p.pos[y],z=p.pos[S],M=ga(E,t);o.push({floorId:d.id,a:[R[0],Rt,R[1]],b:[z[0],Rt,z[1]],dist:b+g[y],members:E,kind:M})}}return o}function Ma({building:a,consumers:t,summary:e,battery:n,fieldPower:o,devicePower:i}){var w;let s=Ai(a);if(!s)return[];let r=a.floors.find(k=>k.id===s.floor_id);if(!r)return[];let l=k=>i==null?void 0:i.get(k),c=Pi(a,"inverter"),d=Pi(a,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let p=k=>{let A=null;for(let P of c)P.floorId===k.floorId&&(!A||Math.hypot(P.x-k.x,P.z-k.z)<Math.hypot(A.x-k.x,A.z-k.z))&&(A=P);return A},u=k=>l(k.id)??(d.length===1?e.battery??0:0),f=new Map;for(let k of d){let A=p(k);A&&f.set(k.id,A)}let m=t.map(k=>({floorId:k.floorId,x:k.x,z:k.z,kind:k.wallbox?"wallbox":"consumer",power:k.power}));for(let k of d)!f.has(k.id)&&e.battery!==null&&m.push({floorId:k.floorId,x:k.x,z:k.z,kind:"battery",power:Math.abs(u(k))});let g=`${s.floor_id}:${s.x},${s.z}|${m.map(k=>`${k.floorId}:${k.x},${k.z}:${k.kind}`).join(";")}`,_=_a.get(a);_||_a.set(a,_=new Map);let h=_.get(g);h||(h=cc(a,m),_.clear(),_.set(g,h));let b=h.map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.members.reduce((A,P)=>A+m[P].power,0),kind:k.kind})),y=e.grid!==null?Ii(a):null,S=a.settings.roof.cables??[],E=k=>S.find(A=>A.id===k),R=(k,A)=>k.map(P=>({...P,key:A}));if(y){let k=e.grid>=0,A=E("grid"),P=A?po(a,A,[y.end[0],r.elevation+Math.max(Rt,y.height),y.end[1]],[s.x,r.elevation+.4+1.1,s.z]):[...y.height>.05?[[y.end[0],y.height,y.end[1]]]:[],[y.end[0],Rt,y.end[1]],[y.wall[0],Rt,y.wall[1]],[s.x,Rt,s.z]],O=A?wn(a,k?P:[...P].reverse(),Math.abs(e.grid),k?"grid":"export",r):Pa(r.id,k?P:[...P].reverse(),Math.abs(e.grid),k?"grid":"export",0);b.push(...R(O,"grid"))}if(e.battery!==null&&e.battery>0)for(let k of b)k.kind==="battery"&&([k.a,k.b]=[k.b,k.a]);let z=a.settings.roof.solar??[],M=a.settings.roof.strings??[],x=new Map;if(o&&z.length){let k=[...nt(a),...Bt(a)];for(let A of z){let P=o.get(A.id)??0,O=A.string?(w=M.find(W=>W.id===A.string))==null?void 0:w.inverter:null,L=O?c.find(W=>W.id===O)??null:null;if(!L&&c.length){let W=wt(a,A,k),q=W?xn(W,A):[A.u,A.v];L=c.reduce((K,J)=>!K||Math.hypot(J.x-q[0],J.z-q[1])<Math.hypot(K.x-q[0],K.z-q[1])?J:K,null)}L&&x.set(L.id,(x.get(L.id)??0)+P);let j=L??{floorId:s.floor_id,x:s.x,z:s.z},F=L?1.1+L.h:1.5,V=E(`solar:${A.id}`),H=V?dc(a,A):null,C=a.floors.find(W=>W.id===j.floorId);V&&H&&C?b.push(...R(wn(a,po(a,V,H,[j.x,C.elevation+F,j.z]),P,"solar",C),`solar:${A.id}`)):b.push(...R(uc(a,A,P,j,F),`solar:${A.id}`))}}else e.solar!==null&&!c.length&&b.push({floorId:r.id,a:[s.x+.08,r.height+.6,s.z+.08],b:[s.x+.08,Rt,s.z+.08],dist:0,power:e.solar,kind:"solar"});for(let k of c){let A=1.1+k.h,P=d.filter(j=>f.get(j.id)===k),O=l(k.id);if(O===void 0){O=x.get(k.id)??(c.length===1?e.solar??0:0);for(let j of P)O+=u(j)}let L=a.floors.find(j=>j.id===k.floorId);if(e.solar!==null||e.battery!==null){let j=E(`inv:${k.id}`),F=j&&L?wn(a,po(a,j,[k.x,L.elevation+A,k.z],[s.x,r.elevation+1.5,s.z]),Math.max(0,O),"inverter",L):va(a,k,A,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,O),"inverter",0);b.push(...R(F,`inv:${k.id}`))}for(let j of P){let F=u(j);if(e.battery===null&&l(j.id)===void 0)continue;let V=j.variant==="wall"?.5+j.h:.9,H=E(`bat:${j.id}`),C=H&&L?wn(a,po(a,H,[k.x,L.elevation+A-.1,k.z],[j.x,L.elevation+V,j.z]),Math.abs(F),"battery",L):va(a,k,A-.1,j,V,Math.abs(F),"battery",0);b.push(...R(F<=0?C:C.map(W=>({...W,a:W.b,b:W.a})).reverse(),`bat:${j.id}`))}}return b}function Ii(a){var f;let t=Ai(a),e=t?a.floors.find(m=>m.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:o}=a.settings,{walls:i}=vt(e.rooms,{exterior:n,interior:o},e.walls??[]),s=Pi(a,"grid_point")[0],r=i.filter(m=>m.exterior);if(s){let m=null;for(let h of r){let b=h.b[0]-h.a[0],y=h.b[1]-h.a[1],S=s.x-t.x,E=s.z-t.z,R=S*y-E*b;if(Math.abs(R)<1e-9)continue;let z=((h.a[0]-t.x)*y-(h.a[1]-t.z)*b)/R,M=((h.a[0]-t.x)*E-(h.a[1]-t.z)*S)/R;if(z<=0||z>1||M<0||M>1||m&&z>=m.t)continue;let x=Math.hypot(b,y)||1;m={q:[t.x+S*z,t.z+E*z],out:[y/x,-b/x],t:z}}let g=m?[m.q[0]+m.out[0]*(n/2+.05),m.q[1]+m.out[1]*(n/2+.05)]:[t.x,t.z],_=((f=a.floors.flatMap(h=>h.furniture).find(h=>h.id===s.id))==null?void 0:f.mount_y)??0;return{floorId:e.id,wall:g,end:[s.x,s.z],height:Math.max(0,_)}}let l=null;for(let m of r){let g=m.b[0]-m.a[0],_=m.b[1]-m.a[1],h=g*g+_*_||1,b=Math.min(1,Math.max(0,((t.x-m.a[0])*g+(t.z-m.a[1])*_)/h)),y=[m.a[0]+g*b,m.a[1]+_*b],S=Math.hypot(t.x-y[0],t.z-y[1]),E=Math.sqrt(h);(!l||S<l.d)&&(l={q:y,out:[_/E,-g/E],d:S})}if(!l)return null;let{q:c,out:d}=l,p=0;for(let m of a.floors)for(let g of m.outdoor??[]){let _=g.points.length;for(let h=0;h<_;h++){let b=g.points[h],y=g.points[(h+1)%_],S=y[0]-b[0],E=y[1]-b[1],R=d[0]*E-d[1]*S;if(Math.abs(R)<1e-9)continue;let z=((b[0]-c[0])*E-(b[1]-c[1])*S)/R,M=((b[0]-c[0])*d[1]-(b[1]-c[1])*d[0])/R;z>0&&M>=0&&M<=1&&(p=Math.max(p,Math.min(15,z)))}}let u=p>n+1?p:n+2.5;return{floorId:e.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*u,c[1]+d[1]*u],height:0}}function Pi(a,t){let e=[];for(let n of a.floors)for(let o of n.furniture)o.type===t&&e.push({id:o.id,type:o.type,floorId:n.id,x:o.x,z:o.z,h:o.h,variant:o.variant??null});return e}var ba=new WeakMap;function Sa(a,t,e,n){let o=`${t.id}:${e.join(",")}>${n.join(",")}`,i=ba.get(a);i||ba.set(a,i=new Map);let s=i.get(o);if(s)return s;let{wall_exterior:r,wall_interior:l}=a.settings,c=zi(t,r,l),d=[e,n],p=kn(t,e),u=kn(t,n);if(p&&u){let f=Ae(c,e),m=Ae(c,n);if(ho(c,p,f)&&ho(c,u,m)){let{dist:g,prev:_}=ka(c,f);if(Number.isFinite(g[m])){d.length=0;for(let h=m;h>=0;h=_[h])d.unshift(c.pos[h])}}}return i.set(o,d),d}function va(a,t,e,n,o,i,s,r){let l=a.floors.find(p=>p.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let c=Sa(a,l,[t.x,t.z],[n.x,n.z]),d=[[t.x,e,t.z],...c.map(p=>[p[0],Rt,p[1]]),[n.x,o,n.z]];return Pa(l.id,d,i,s,r)}function Pa(a,t,e,n,o){let i=[];for(let s=0;s+1<t.length;s++){let r=t[s],l=t[s+1],c=Math.hypot(l[0]-r[0],l[1]-r[1],l[2]-r[2]);c<1e-4||(i.push({floorId:a,a:r,b:l,dist:o,power:e,kind:n}),o+=c)}return i}function po(a,t,e,n){let o=a.floors.find(s=>s.id===t.floor_id),i=((o==null?void 0:o.elevation)??0)+Math.max(Rt,t.height);return[e,...t.points.map(s=>[s[0],i,s[1]]),n]}function dc(a,t){let e=wt(a,t,[...nt(a),...Bt(a)]);if(!e)return null;let[n,o]=qe(e,t),i=t.u+n/2,s=e.unbounded?t.v+o/2:t.v;return[e.o[0]+e.eu[0]*i+e.es[0]*s,e.o[1]+e.eu[1]*i+e.es[1]*s,e.o[2]+e.eu[2]*i+e.es[2]*s]}function pc(a,t,e){let{wall_exterior:n,wall_interior:o}=a.settings,i=zi(t,n,o),s=kn(t,e),r=s?uo(i,s.id,e):null;return r===null?e:i.pos[r]}function wn(a,t,e,n,o){let i=[...a.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=o;for(let p of i)c>=p.elevation-.01&&(d=p);return d},r=[],l=0;for(let c=0;c+1<t.length;c++){let d=t[c],p=t[c+1];if(Math.hypot(p[0]-d[0],p[1]-d[1],p[2]-d[2])<1e-4)continue;let f=[];if(Math.abs(p[1]-d[1])>.01){let m=Math.min(d[1],p[1]),g=Math.max(d[1],p[1]);for(let _ of i)_.elevation>m+.01&&_.elevation<g-.01&&f.push(_.elevation);p[1]<d[1]&&f.reverse()}for(let m of[...f,p[1]]){let g=(m-d[1])/(p[1]-d[1]||1),_=Math.abs(p[1]-d[1])>.01?[d[0]+(p[0]-d[0])*g,m,d[2]+(p[2]-d[2])*g]:p,h=s((d[1]+_[1])/2),b=Math.hypot(_[0]-d[0],_[1]-d[1],_[2]-d[2]);b>1e-4&&r.push({floorId:h.id,a:[d[0],d[1]-h.elevation,d[2]],b:[_[0],_[1]-h.elevation,_[2]],dist:l,power:e,kind:n}),l+=b,d=_}}return r}function uc(a,t,e,n,o){let i=[...nt(a),...Bt(a)],s=wt(a,t,i),r=a.floors.find(_=>_.id===n.floorId);if(!s||!r)return[];let[l,c]=qe(s,t),d=(_,h)=>[s.o[0]+s.eu[0]*_+s.es[0]*h,s.o[1]+s.eu[1]*_+s.es[1]*h,s.o[2]+s.eu[2]*_+s.es[2]*h],p=t.u+l/2,u=r.elevation+Rt,f=[],m;if(s.unbounded){let _=d(p,t.v+c/2);m=[_[0],u,_[2]],f.push(m)}else if(s.wall){let _=d(p,t.v);m=[_[0],u,_[2]],f.push(_,m)}else{let _=d(p,t.v),h=yi(a)??r,b=Math.max(r.elevation+.5,Math.min(_[1]-.25,h.elevation+h.height-.12));m=[_[0],b,_[2]],f.push(_)}let g=pc(a,r,[m[0],m[2]]);f.push([g[0],m[1],g[1]]),Math.abs(m[1]-u)>.05&&f.push([g[0],u,g[1]]);for(let _ of Sa(a,r,g,[n.x,n.z]).slice(1))f.push([_[0],u,_[1]]);return f.push([n.x,r.elevation+o,n.z]),wn(a,f,e,"solar",r)}var Aa=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],hc={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},fc={back:0,right:90,front:180,left:270};function za(a,t,e){let n=dt(a.points),o=n.x1-n.x0,i=n.z1-n.z0,s=hc[t],r=[],l=(d,p,u,f,m)=>{let[g,_,h]=m??Dt[d];r.push({id:e(),type:d,x:Ea(p),z:Ea(u),rotation:f,w:g,d:_,h,variant:null,entity:null,power:null})},c=.02;for(let d of s.rows){let p=d.items.map(_=>({type:_.type,size:_.size??Dt[_.type]})),u=d.wall==="back"||d.wall==="front"?o:i,f=[],m=0;for(let _ of p){if(m+_.size[0]>u-.1)break;f.push(_),m+=_.size[0]}let g=d.align==="start"?.05:d.align==="end"?u-m-.05:(u-m)/2;for(let _ of f){let[h,b]=_.size,y=g+h/2,S=b/2+c;d.wall==="back"?l(_.type,n.x0+y,n.z0+S,0,_.size):d.wall==="front"?l(_.type,n.x1-y,n.z1-S,180,_.size):d.wall==="right"?l(_.type,n.x1-S,n.z0+y,90,_.size):l(_.type,n.x0+S,n.z1-y,fc.left,_.size),g+=h}}for(let d of s.free){let[p,u]=d.size??Dt[d.type],f=Math.min(n.x1-p/2-.05,Math.max(n.x0+p/2+.05,n.x0+o*d.at[0])),m=Math.min(n.z1-u/2-.05,Math.max(n.z0+u/2+.05,n.z0+i*d.at[1]));l(d.type,f,m,d.rotation,d.size)}return r}var Ea=a=>Math.round(a*1e3)/1e3;var Ge=Ct`
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
`,fo=Ct`
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
`;var Ia=40,Fi=class extends Et{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=s=>{let r=`${s.label} ${s.id}`.toLowerCase();return e.every(l=>r.includes(l))},o=this.fixed.filter(s=>!t||n(s)),i=t?this.options.filter(n):this.options;return[...o,...i.slice(0,Ia)]}get leftOut(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=t?this.options.filter(o=>e.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,n-Ia)}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[];return v`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${t?t.label:this.placeholder}
        .value=${this._open?this._query:(t==null?void 0:t.label)??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${n=>{this._query=n.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?v`<ul class="list" role="listbox">
            ${e.length?$:v`<li class="empty">–</li>`}
            ${e.map((n,o)=>v`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${o===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${i=>i.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?v`<small>${n.id}</small>`:$}
              </li>`)}
            ${this.leftOut>0?v`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:$}
          </ul>`:$}
    </div>`}static styles=[Ge,Ct`
      :host {
        display: block;
        position: relative;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        padding: 8px 10px;
      }
      input::placeholder {
        color: var(--fp3d-text);
        opacity: 0.9;
      }
      input:focus::placeholder {
        color: var(--fp3d-muted);
      }
      input:focus {
        outline: 2px solid var(--fp3d-accent);
        outline-offset: -1px;
      }
      .list {
        position: absolute;
        left: 0;
        right: 0;
        top: calc(100% + 4px);
        z-index: 20;
        margin: 0;
        padding: 4px;
        list-style: none;
        max-height: 280px;
        overflow-y: auto;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        box-shadow: var(--fp3d-shadow);
      }
      li {
        display: flex;
        flex-direction: column;
        gap: 1px;
        padding: 6px 8px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13.5px;
      }
      li small {
        color: var(--fp3d-muted);
        font-size: 11px;
      }
      li.cursor,
      li:hover {
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
      }
      li.chosen {
        color: var(--fp3d-accent);
      }
      li.empty {
        color: var(--fp3d-muted);
        cursor: default;
      }
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",Fi);var mc=new URL(import.meta.url),gc=new URL("./neonplan3d-3d.js?v=389fdacff5e8",mc).href,Fa;function Ri(){return Fa??=import(gc),Fa}function ze(a,t){if(!Oe(t))return Nt(a,`furn_${t}`);let e=gt(t);return e?ie(e):Nt(a,"pack_missing_item")}var Oi=class extends Et{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0}};constructor(){super(),this._packMsg=null}t(t,e){return Nt(this.hass,t,e)}render(){let t=Wr();return v`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new?labels=enhancement" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href=${ke("extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${eo.filter(e=>It(e)).map(e=>v`<div class="fp3d-ext-feature ${t.has(e)?"fp3d-ext-on":""}">
              <b>${t.has(e)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${e}`)}</b>
              <span class="fp3d-sub">${this.t(`pro_feature_${e}`)}</span>
              <span class="fp3d-ext-links">
                ${t.has(e)?v`<span class="fp3d-ext-state">${this.t("ext_active")}</span>`:$}
                <a class="fp3d-ext-link" href=${ke(e)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`}renderPacks(){let t=this.packs??[];return v`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${t.map(e=>{var n;return v`<div class="fp3d-pack">
          <div>
            <b>${Yt(e)}</b>
            <span class="fp3d-sub">${(n=e.features)!=null&&n.length?this.t("pack_features",{publisher:e.publisher,n:e.features.length}):this.t("pack_by",{publisher:e.publisher,n:e.items.length})}</span>
            ${e.licensee?v`<span class="fp3d-sub">${this.t("pack_licensed",{name:e.licensee})}${e.release&&e.release>1?` \xB7 v${e.release}`:""}</span>`:$}
            ${(e.features??[]).some(o=>!Hr(o))?v`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:$}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(e)}>${this.t("pack_remove")}</button>
        </div>`})}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${e=>this.importPackFile(e)} />
      </label>
      ${this._packMsg?v`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:$}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let o=[],i=[];for(let r of n)try{let l=await hs(this.hass,await r.text());o.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},p=`pack_error_${c}`,u=this.t(p,{detail:d??String(l)});i.push(`${r.name}: ${u===p?this.t("pack_error_other",{detail:d??String(l)}):u}`)}o.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:o.length,total:n.length})]:[];this._packMsg={ok:i.length===0,text:[...s,...o,...i].join(" \xB7 ")}}async deletePack(t){!this.hass||!confirm(this.t("pack_remove_confirm",{name:Yt(t)}))||(await fs(this.hass,t.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[Ge,fo,Ct`
      :host {
        display: block;
        overflow: auto;
      }
      .fp3d-ext {
        max-width: 920px;
        margin: 0 auto;
        padding: 20px 16px 40px;
        display: grid;
        gap: 16px;
      }
      .fp3d-ext-head {
        display: grid;
        gap: 8px;
        justify-items: start;
      }
      .fp3d-ext-head a {
        text-decoration: none;
      }
      .fp3d-ext-actions,
      .fp3d-ext-links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
      }
      .fp3d-ext-head h2 {
        margin: 0;
        font-size: 22px;
      }
      .fp3d-ext-card {
        padding: 14px 16px;
        border: 1px solid var(--fp3d-line);
        border-radius: 14px;
        background: var(--fp3d-chrome);
      }
      .fp3d-ext-card h3 {
        margin: 0 0 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-soft);
      }
      .fp3d-ext-pro {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 10px;
      }
      .fp3d-ext-feature {
        display: grid;
        gap: 6px;
        align-content: start;
        padding: 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-ext-on {
        border-color: var(--fp3d-accent);
      }
      .fp3d-ext-state {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-ext-link {
        color: var(--fp3d-accent);
        font-weight: 600;
        font-size: 13px;
      }
      .fp3d-sub {
        color: var(--fp3d-soft);
        font-size: 13px;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-pack {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 8px 0;
        border-bottom: 1px solid var(--fp3d-line);
      }
      .fp3d-pack div {
        display: grid;
        gap: 2px;
      }
      .fp3d-pack-import {
        display: block;
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
      }
      .fp3d-pack-error {
        color: var(--fp3d-danger);
      }
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",Oi);var Li=10,Ra=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),Oa=100,La=/^(switch|input_boolean)\./,mo=10,I=a=>Math.round(a*1e3)/1e3,Va=.06;function Je(a,t,e){let[n,,o]=ce(a,t,0,e);return[I(n),I(o)]}function Vi(a,t){let e=kt(a,t),n=0;for(let o=1;o<e.length;o++)n+=Math.hypot(e[o][0]-e[o-1][0],e[o][1]-e[o-1][1],e[o][2]-e[o-1][2]);return n}var Ta={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},bc=new Set(["parking","stairwell","rug","grid_point"]),ji=class extends Et{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;cableCache=null;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neonplan3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._wallSel=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("neonplan3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let t=!1;try{t=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neonplan3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=e,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return Nt(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){var t;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),(t=this.resizeObserver)==null||t.disconnect()}willUpdate(t){var e,n;t.has("packs")&&_s(this.packs??[]),t.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(t.has("_split")&&this._split||t.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),t.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(o=>o.id===this._floorId)||(this._floorId=((e=this._doc.floors[0])==null?void 0:e.id)??null),(n=this.floor)!=null&&n.rooms.some(o=>o.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let o=e.getBoundingClientRect(),i=r=>{this._splitRatio=Math.min(.8,Math.max(.2,(r.clientX-o.left)/o.width))},s=()=>{n.removeEventListener("pointermove",i),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",i),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(t){let{id:e,x:n,z:o}=t.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let r of s.floors){let l=r.furniture.find(_=>_.id===e);if(!l)continue;let[c,d]=ai(r,l.x,l.z,n,o),[p,u]=li(r,l,c,d,i),f=mn(r,l,i),m=f?Math.hypot(f.x-l.x,f.z-l.z):1/0;Object.assign(l,{x:p,z:u});let g=mn(r,l,i);g&&Math.hypot(g.x-p,g.z-u)<=m+.01&&Object.assign(l,g)}})}onDeviceMoved3d(t){let{id:e,x:n,z:o}=t.detail;this.change(i=>{for(let s of i.floors){let r=s.placements.find(d=>d.entity_id===e);if(!r)continue;let[l,c]=ai(s,r.x,r.z,n,o);Object.assign(r,{x:l,z:c})}})}render3dBar(){var n;if(!this.isAdmin)return $;let t=this.furnitureItem,e=this.device;if(t){let o=Le(t),i=(s,r,l=.05)=>v`<label class="fp3d-3d-size" title=${this.t(`size_${s}`)}
        >${r}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${l}
          .value=${this.unit==="imperial"?we(t[s]):String(Math.round(t[s]*100)/100)}
          @change=${c=>{let d=this.readLen(c.target.value);d!==null&&d>=l&&this.updateFurniture({[s]:Math.round(d*1e3)/1e3})}}
        />
      </label>`;return v`<div class="fp3d-3d-bar">
        <span>${ze(this.hass,t.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${o?v`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?we(t.mount_y??At(this.floor,t)):String(Math.round((t.mount_y??At(this.floor,t))*100)/100)}
                @change=${s=>{let r=this.readLen(s.target.value);r!==null&&r>=0&&this.updateFurniture({mount_y:Math.round(Math.min(Li,r)*1e3)/1e3})}}
              />
            </label>`:$}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let o=Y(e.entity_id),i=o==="light",s=o?Jn(o,((n=this.floor)==null?void 0:n.height)??2.5,i?e.mount??"ceiling":null):1;return v`<div class="fp3d-3d-bar">
        <span>${st(this.hass,e.entity_id)}</span>
        ${i?v`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(r=>v`<option value=${r} ?selected=${r===(e.mount??"ceiling")}>${this.t(`lamp_${r}`)}</option>`)}
            </select>`:$}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((e.y??s)*100)/100)}
            @change=${r=>{let l=parseFloat(r.target.value.replace(",","."));Number.isFinite(l)&&l>=0&&this.updateDevice({y:Math.round(l*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((e.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((e.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",e.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",e.entity_id)}>${this.t("delete")}</button>
      </div>`}return $}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t!=null&&t.moved&&this.pushHistory(t.base)}};grab3dStart(t){let e=this._doc,n=nt(e),o=null,i=(r,l,c,d,p=!1)=>{if(!c||p)return;let u=Si(c,t.o,t.d);!u||!ma(c,d,u.u,u.s)||o&&o.t<=u.t||(o={id:r,win:l,t:u.t,du:u.u-d.u,ds:u.s-d.v})};if(this._tool==="energy")for(let r of e.settings.roof.solar??[])i(r.id,!1,wt(e,r,n),r,!!r.locked);if(this._tool==="roof")for(let r of e.settings.roof.windows??[])i(r.id,!0,n.find(l=>l.key===r.face)??null,Ke(r),!!r.locked);if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:e,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(t){var f,m;let e=this.grab3d;if(!e)return;let n=e.base,o=e.win?(f=n.settings.roof.windows)==null?void 0:f.find(g=>g.id===e.id):void 0,i=e.win?o?Ke(o):void 0:(m=n.settings.roof.solar)==null?void 0:m.find(g=>g.id===e.id);if(!i)return;let s=wt(n,i),r=s!=null&&s.unbounded?[s]:e.win?nt(n):[...nt(n),...Bt(n)],l=null;for(let g of r){let _=Si(g,t.o,t.d);_&&fa(g,_.u,_.s)&&(!l||_.t<l.t)&&(l={face:g,..._})}if(!l)return;let c=l.face,d=.05,p=g=>I(Math.round(g/d)*d),u=Ue(c,{...i,face:c.key,u:p(l.u-e.du),v:p(l.s-e.ds),tilt:c.flat?i.tilt??15:i.tilt});e.moved=!0,this.change(g=>{var h,b;if(e.win){let y=(h=g.settings.roof.windows)==null?void 0:h.find(S=>S.id===e.id);y&&Object.assign(y,{face:c.key,...u});return}let _=(b=g.settings.roof.solar)==null?void 0:b.find(y=>y.id===e.id);_&&Object.assign(_,{face:c.key,...u},c.flat&&_.tilt==null?{tilt:15}:{})},e.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return v`<div class="fp3d-editor-3d">
      ${this.houseTool?$:v`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this.setWall3d("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this.setWall3d("cut")}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <fp3d-view3d
              .walkable=${!1}
        .hass=${this.hass}
        .building=${this._doc3d}
        .floorId=${this.houseTool?null:this._floorId}
        .roomId=${null}
        .wallMode=${this.houseTool?"auto":this._wall3d}
        .explode=${!1}
        .keepRoof=${this._tool==="roof"||this._tool==="energy"}
        .markerMode=${"important"}
        .heatMode=${"none"}
        .theme=${"neon"}
        .packs=${this.packs}
        .showEnergy=${!1}
        .holograms=${this._tool==="energy"?!0:null}
        .flows=${!1}
        ?furnish=${this.isAdmin}
        .surfaceGrab=${this.isAdmin&&this.houseTool?this.surfaceGrabber:null}
        .furnishTypes=${this._tool==="energy"?se:this._tool==="roof"?[]:null}
        .selectedFurniture=${this._furnitureId}
        .selectedDevice=${this._deviceId}
        .quality=${"auto"}
        .floorThumbs=${!1}
        .roomLabels=${!0}
        .floorStack=${this.houseTool?"stacked":"single"}
        .panelOpen=${!1}
        .alerts=${!1}
        .scenes=${!1}
        @furniture-select=${t=>{t.detail.id?this.selectFrom3d("furniture",t.detail.id):this._furnitureId&&this.selectFrom3d("furniture",null)}}
        @furniture-move=${this.onFurnitureMoved3d}
        @device-select=${t=>{t.detail.id?this.selectFrom3d("device",t.detail.id):this._deviceId&&this.selectFrom3d("device",null)}}
        @device-move=${this.onDeviceMoved3d}
        @floor-tap=${t=>{t.detail.floorId&&(this._floorId=t.detail.floorId),this._sideOpen=!1}}
        @room-tap=${t=>{t.detail.floorId&&(this._floorId=t.detail.floorId),t.detail.roomId?this.selectFrom3d("room",t.detail.roomId):this._sideOpen=!1}}
      ></fp3d-view3d>
    </div>`}setWall3d(t){this._wall3d=t;try{localStorage.setItem("neonplan3d.walls3d",t)}catch{}}updated(){var e,n;for(let o of this.renderRoot.querySelectorAll("select option[selected]"))o.selected||(o.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>{var o;return(o=this.renderRoot.querySelector("fp3d-view3d"))==null?void 0:o.resetView()},250));let t=(e=this.floor)==null?void 0:e.background;if(t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id),(n=this.furnitureItem)!=null&&n.pictures)for(let o of this.storedPictures())!this._images[o]&&!this.loadingImages.has(o)&&this.loadImage(o)}get floor(){var t;return(t=this._doc)==null?void 0:t.floors.find(e=>e.id===this._floorId)}get room(){var t;return(t=this.floor)==null?void 0:t.rooms.find(e=>e.id===this._roomId)}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>Oa&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let o=structuredClone(e),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(t(o,i),this.setDoc(o,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){var e,n;this._doc=t,t.floors.some(o=>o.id===this._floorId)||(this._floorId=((e=t.floors[0])==null?void 0:e.id)??null),(n=this.floor)!=null&&n.rooms.some(o=>o.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:o}=this._view;return[t[0]*e+n,t[1]*e+o]}toWorld(t,e){let{scale:n,ox:o,oy:i}=this._view;return[(t-o)/n,(e-i)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){var r;let t=((r=this.floor)==null?void 0:r.rooms.flatMap(l=>l.points))??[];if(this._tool==="roof")for(let l of this._doc.settings.roof.sections??[])t.push([l.x0,l.z0],[l.x1,l.z1]);let e=t.length?dt(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,o=e.x1-e.x0+2*n,i=e.z1-e.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(e.x0+e.x1)/2*s,oy:this._size.h/2-(e.z0+e.z1)/2*s},this.fittedView=this._view}showPoint(t,e){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-t*n,oy:this._size.h/2-e*n}}zoomAt(t,e,n){let{scale:o,ox:i,oy:s}=this._view,r=Math.max(8,Math.min(600,o*t)),l=r/o;this._view={scale:r,ox:e-(e-i)*l,oy:n-(n-s)*l}}snap(t,e,n=!1){var m;if(this._guides={},n)return t;let o=mo/this._view.scale,i=((m=this.floor)==null?void 0:m.rooms)??[],s=[];for(let g of i)g.points.forEach((_,h)=>{e&&g.id===e.roomId&&(e.index===void 0||e.index===h)||s.push(_)});let r=null,l=o;for(let g of s){let _=Math.hypot(g[0]-t[0],g[1]-t[1]);_<l&&(l=_,r=g)}if(r)return this._guides={point:r},[r[0],r[1]];for(let g of i)if(!(e&&g.id===e.roomId))for(let _=0;_<g.points.length;_++){let h=g.points[_],b=g.points[(_+1)%g.points.length],y=b[0]-h[0],S=b[1]-h[1],E=y*y+S*S;if(E<1e-9)continue;let R=((t[0]-h[0])*y+(t[1]-h[1])*S)/E;if(R<=0||R>=1)continue;let z=[h[0]+R*y,h[1]+R*S],M=Math.hypot(z[0]-t[0],z[1]-t[1]),x=this._doc.settings.grid;Math.abs(S)<1e-9&&(z[0]=Math.min(Math.max(Math.round(z[0]/x)*x,Math.min(h[0],b[0])),Math.max(h[0],b[0]))),Math.abs(y)<1e-9&&(z[1]=Math.min(Math.max(Math.round(z[1]/x)*x,Math.min(h[1],b[1])),Math.max(h[1],b[1]))),M<l&&(l=M,r=z)}if(r)return this._guides={point:r},[I(r[0]),I(r[1])];let c=this._doc.settings.grid,d=[I(Math.round(t[0]/c)*c),I(Math.round(t[1]/c)*c)],p=o,u=o,f={};for(let g of s)Math.abs(g[0]-t[0])<p&&(p=Math.abs(g[0]-t[0]),d[0]=g[0],f.x=g[0]),Math.abs(g[1]-t[1])<u&&(u=Math.abs(g[1]-t[1]),d[1]=g[1],f.z=g[1]);return this._guides=f,d}onPointerDown(t){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let e=this.localPoint(t),n=t.target;this.pressStart=e,this.pressTimer=window.setTimeout(()=>{let o=this.drag;o&&"moved"in o&&o.moved||(this.drag=null,this.openContext(n,e))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"||e.kind==="aim"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){var E,R,z,M,x,w,k,A,P,O,L,j,F,V,H,C,W,q,K,J,ht,_t;t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&Ra.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let o=this.toWorld(...n),i=t.target;if(this._wallPick){this.pickWall(o);return}if(this._bgLevel&&this.isAdmin&&((E=this.floor)!=null&&E.background)){let D=[...this._bgLevel,o];D.length<2?this._bgLevel=D:this.applyBgLevel(D[0],D[1]);return}if(this.bgHandles()&&this.floor.background&&i.closest("[data-bg-rotate]")){let D=this.floor.background,ot=this._images[D.image_id],ft=D.width*((ot==null?void 0:ot.aspect)??1),qt=[D.x+D.width/2,D.z+ft/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(o[1]-qt[1],o[0]-qt[0]),rot:D.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&((R=this.floor)!=null&&R.background)){this._bgRuler=[...this._bgRuler,o];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(i.closest("[data-bg-handle]")||i.closest("[data-bg]"))){let D=this.floor.background;this.drag=i.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:o,bx:D.x,bz:D.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&((z=this.floor)!=null&&z.background)){let D=this.floor.background;if(i.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(i.closest("[data-bg]")){this.drag={kind:"bgmove",start:o,bx:D.x,bz:D.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let D=this.snap(o,void 0,t.altKey);this.drag={kind:"freewall",start:D,end:D};return}if(this._tool==="pool"&&this.poolDown(t,i,o,n))return;if(this._tool==="roof"||this._tool==="energy"){let D=(M=i.closest("[data-roof-corner]"))==null?void 0:M.getAttribute("data-roof-corner"),ot=(x=i.closest("[data-roof-vertex]"))==null?void 0:x.getAttribute("data-roof-vertex"),ft=(w=i.closest("[data-roof]"))==null?void 0:w.getAttribute("data-roof"),qt=this._tool==="energy"?(k=i.closest("[data-energy-device]"))==null?void 0:k.getAttribute("data-energy-device"):null;if(qt){this._solarId=null,this.selectItem("furniture",qt),this.drag=this.isAdmin?{kind:"furniture",id:qt,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&i.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let G=(A=i.closest("[data-cable-pt]"))==null?void 0:A.getAttribute("data-cable-pt"),Z=ct=>{var Pt,bt;return!!((bt=(Pt=this._doc.settings.roof.cables)==null?void 0:Pt.find($t=>$t.id===ct))!=null&&bt.locked)};if(G&&this.isAdmin&&!Z(G.slice(0,G.lastIndexOf(":")))){let ct=G.lastIndexOf(":"),Pt=G.slice(0,ct),bt=Number(G.slice(ct+1));if(t.detail>=2){this.change($t=>{var fe;let jt=(fe=$t.settings.roof.cables)==null?void 0:fe.find(Ut=>Ut.id===Pt);jt&&jt.points.length>1&&jt.points.splice(bt,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:Pt,index:bt,base:this._doc,moved:!1};return}let mt=(P=i.closest("[data-cable-line]"))==null?void 0:P.getAttribute("data-cable-line");if(mt&&this.isAdmin&&!Z(mt)){let ct=Number(((O=i.closest("[data-cable-line]"))==null?void 0:O.getAttribute("data-cable-seg"))??0),Pt=this._doc;this.change(bt=>{var jt;let $t=(jt=bt.settings.roof.cables)==null?void 0:jt.find(fe=>fe.id===mt);$t&&$t.points.splice(ct,0,[I(o[0]),I(o[1])])}),this.drag={kind:"cablept",id:mt,index:ct,base:Pt,moved:!0};return}let X=(L=i.closest("[data-cable]"))==null?void 0:L.getAttribute("data-cable");if(X){if(this._cableId=X,this.isAdmin&&this._floorId&&!((j=this._doc.settings.roof.cables)!=null&&j.some(ct=>ct.id===X))){let ct=this._doc;this.layCable(X);let Pt=(F=this._doc.settings.roof.cables)==null?void 0:F.find($t=>$t.id===X),bt=this.cableSegments().filter($t=>$t.key===X);if(Pt&&bt.length){let $t=[[bt[0].a[0],bt[0].a[2]],...Pt.points,[bt[bt.length-1].b[0],bt[bt.length-1].b[2]]],jt=0,fe=1/0;for(let Ut=0;Ut+1<$t.length;Ut++){let Qe=vc(o,$t[Ut],$t[Ut+1]);Qe<fe&&(fe=Qe,jt=Ut)}this.change(Ut=>{var Ci;let Qe=(Ci=Ut.settings.roof.cables)==null?void 0:Ci.find(Ca=>Ca.id===X);Qe&&Qe.points.splice(jt,0,[I(o[0]),I(o[1])])}),this.drag={kind:"cablept",id:X,index:jt,base:ct,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let Tt=this._tool==="energy"?(V=i.closest("[data-solar]"))==null?void 0:V.getAttribute("data-solar"):null,Ye=this._tool==="energy"?(H=i.closest("[data-solar-turn]"))==null?void 0:H.getAttribute("data-solar-turn"):null;if(Ye&&this.isAdmin){this.drag={kind:"solarturn",id:Ye,base:this._doc,moved:!1};return}if(Tt){let G=(C=i.closest("[data-cell]"))==null?void 0:C.getAttribute("data-cell");if(this._solarPick&&Tt===this._solarId&&G&&this.isAdmin){this.toggleSolarCell(G),this.drag={kind:"pan",last:n};return}Tt!==this._solarId&&(this._solarPick=!1),this._solarId=Tt,this._roofId=null;let Z=(W=this._doc.settings.roof.solar)==null?void 0:W.find(Pt=>Pt.id===Tt),mt=Z?wt(this._doc,Z)??void 0:void 0,X=mt?this.faceHit(mt,o):null,ct=Z&&X?{du:X.u-Z.u,ds:Number.isNaN(X.s)?0:X.s-Z.v}:null;this.drag=this.isAdmin&&!(Z!=null&&Z.locked)?{kind:"solarmove",id:Tt,start:o,startScreen:n,base:this._doc,moved:!1,grab:ct}:{kind:"pan",last:n};return}let ne=this._tool==="roof"?(q=i.closest("[data-roofwin]"))==null?void 0:q.getAttribute("data-roofwin"):null;if(ne){this._roofWinId=ne,this._roofId=null;let G=(K=this._doc.settings.roof.windows)==null?void 0:K.find(ct=>ct.id===ne),Z=G?nt(this._doc).find(ct=>ct.key===G.face):void 0,mt=Z?so(Z,o):null,X=G&&mt?{du:mt.u-G.u,ds:mt.s-G.v}:null;this.drag=this.isAdmin&&!(G!=null&&G.locked)?{kind:"solarmove",id:ne,start:o,startScreen:n,base:this._doc,moved:!1,grab:X,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let Mn=this._tool==="energy"?(J=i.closest(".fp3d-energy-item"))==null?void 0:J.getAttribute("data-furniture"):null;if(Mn){this._solarId=null,this.selectItem("furniture",Mn),this.drag=this.isAdmin?{kind:"furniture",id:Mn,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(ot&&this.isAdmin){let[G,Z]=ot.split(":");this.drag={kind:"roofvertex",id:G,index:Number(Z),base:this._doc,moved:!1}}else if(D&&this.isAdmin){let[G,Z,mt]=D.split(":");this.drag={kind:"roofcorner",id:G,corner:[Z==="1"?1:0,mt==="1"?1:0],base:this._doc,moved:!1}}else if(ft){let G=this.roofFixed((ht=this._doc.settings.roof.sections)==null?void 0:ht.find(Z=>Z.id===ft));G&&this._roofId===ft&&(this._fixedHint=!0),this._roofId=ft,this.drag=this.isAdmin&&!G?{kind:"roofmove",id:ft,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let G=this.snap(o,void 0,t.altKey);this.drag={kind:"rect",start:G,end:G,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this._outdoorFree||this._tool==="hole"){let D=this.snap(o,void 0,t.altKey);this.drag={kind:"rect",start:D,end:D,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}let r=i.closest("[data-device]");if(r&&this.isAdmin){this.drag={kind:"device",entityId:r.getAttribute("data-device"),start:o,startScreen:n,base:this._doc,moved:!1};return}let l=i.closest("[data-opening]");if(l){let D=l.getAttribute("data-opening");this.selectItem("opening",D),this.drag=this.isAdmin?{kind:"opening",id:D,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let c=i.closest("[data-resize]");if(c&&this.isAdmin){let[D,ot,ft]=c.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:D,corner:[ot==="1"?1:-1,ft==="1"?1:-1],base:this._doc,moved:!1};return}let d=i.closest("[data-rotate]");if(d&&this.isAdmin){this.drag={kind:"rotate",id:d.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let p=i.closest("[data-aim]");if(p&&this.isAdmin){this.drag={kind:"aim",entityId:p.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=i.closest("[data-furniture]");if(u&&!i.closest("[data-vertex], [data-mid]")){let D=u.getAttribute("data-furniture");this.selectItem("furniture",D),this.drag=this.isAdmin?{kind:"furniture",id:D,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let f=i.closest("[data-vertex]"),m=i.closest("[data-mid]");if(f&&this.room&&this.isAdmin){this._vertex=Number(f.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(m&&this.room&&this.isAdmin){let D=Number(m.getAttribute("data-mid")),ot=this.room.points,ft=ot[D],qt=ot[(D+1)%ot.length],Tt=[I((ft[0]+qt[0])/2),I((ft[1]+qt[1])/2)],Ye=this._doc,ne=this.room.id;this.change((Mn,G)=>{let Z=G.rooms.find(X=>X.id===ne);Z.points.splice(D+1,0,Tt),Z.wall_heights&&Z.wall_heights.splice(D+1,0,Z.wall_heights[D]??null),Z.wall_thickness&&Z.wall_thickness.splice(D+1,0,Z.wall_thickness[D]??null);let mt=Math.hypot(Tt[0]-ft[0],Tt[1]-ft[1]);for(let X of G.openings)X.room_id!==ne||X.wall||(X.edge>D?X.edge+=1:X.edge===D&&X.offset>mt&&(X.edge=D+1,X.offset=I(X.offset-mt)))},Ye,!1),this._vertex=D+1,this.drag={kind:"vertex",roomId:ne,index:D+1,base:Ye,moved:!0};return}let g=i.closest("[data-wall-end]");if(g&&this.isAdmin){let[D,ot]=g.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:D,end:ot,start:o,startScreen:n,base:this._doc,moved:!1};return}let _=i.closest("[data-free-wall]");if(_){let D=_.getAttribute("data-free-wall");this.selectItem("wall",D),this.drag=this.isAdmin?{kind:"wallmove",id:D,end:null,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=i.closest("[data-out-box]");if(h&&this.isAdmin){let[D,ot]=h.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:D,corner:Number(ot),base:this._doc,moved:!1};return}let b=i.closest("[data-out-vertex]");if(b&&this.isAdmin){let[D,ot]=b.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:D,index:Number(ot),base:this._doc,moved:!1};return}let y=i.closest("[data-outdoor]");if(y&&!i.closest("[data-room]")&&!this.roomAt(o)){let D=y.getAttribute("data-outdoor");this.selectItem("outdoor",D),this.drag=this.isAdmin?{kind:"outdoor",id:D,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let S=((_t=i.closest("[data-room]"))==null?void 0:_t.getAttribute("data-room"))??this.roomAt(o);if(S){S!==this._roomId&&(this._vertex=null),this.selectItem("room",S),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:S,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){var i,s,r,l,c,d,p,u,f,m,g,_,h,b,y,S,E,R,z,M;if(this.pressStart){let x=this.localPoint(t);Math.hypot(x[0]-this.pressStart[0],x[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&((i=this.drag)==null?void 0:i.kind)==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let x=this.pinchState();x&&(this.zoomAt(x.dist/Math.max(1,this.pinch.dist),...x.mid),this._view={...this._view,ox:this._view.ox+x.mid[0]-this.pinch.mid[0],oy:this._view.oy+x.mid[1]-this.pinch.mid[1]},this.pinch=x);return}let n=this.toWorld(...e),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(o.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-o.last[0],oy:this._view.oy+e[1]-o.last[1]},o.last=e;break;case"tap":(o.panning||Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])>6)&&(o.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-o.last[0],oy:this._view.oy+e[1]-o.last[1]}),o.last=e;break;case"rect":o.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let x=this.snap(n,void 0,t.altKey);t.shiftKey&&(x=Math.abs(x[0]-o.start[0])>Math.abs(x[1]-o.start[1])?[x[0],o.start[1]]:[o.start[0],x[1]]),o.end=x,this.requestUpdate();break}case"wallmove":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=(((s=o.base.floors.find(k=>k.id===this._floorId))==null?void 0:s.walls)??[]).find(k=>k.id===o.id);if(!x)return;let w;if(o.end){let k=this.snap(n,void 0,t.altKey);w=o.end==="a"?{a:k,b:x.b}:{a:x.a,b:k}}else{let k=t.altKey?.01:this._doc.settings.grid,A=Math.round((n[0]-o.start[0])/k)*k,P=Math.round((n[1]-o.start[1])/k)*k;w={a:[I(x.a[0]+A),I(x.a[1]+P)],b:[I(x.b[0]+A),I(x.b[1]+P)]}}this.change((k,A)=>Object.assign((A.walls??[]).find(P=>P.id===o.id),w),o.base,!1);break}case"vertex":{let x=this.snap(n,{roomId:o.roomId,index:o.index},t.altKey);o.moved=!0,this.change((w,k)=>{k.rooms.find(A=>A.id===o.roomId).points[o.index]=x},o.base,!1);break}case"room":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=(r=o.base.floors.find(P=>P.id===this._floorId))==null?void 0:r.rooms.find(P=>P.id===o.roomId);if(!x)return;let w=this.roomDelta(x,[n[0]-o.start[0],n[1]-o.start[1]],t.altKey),k=o.base.floors.find(P=>P.id===this._floorId),A=new Set(k.placements.filter(P=>N([P.x,P.z],x.points)).map(P=>P.entity_id));this.change((P,O)=>{let L=O.rooms.find(j=>j.id===o.roomId);L.points=x.points.map(([j,F])=>[I(j+w[0]),I(F+w[1])]),O.placements=k.placements.map(j=>A.has(j.entity_id)?{...j,x:I(j.x+w[0]),z:I(j.z+w[1])}:j)},o.base,!1);break}case"roofmove":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=t.altKey?.01:this._doc.settings.grid,w=I(Math.round((n[0]-o.start[0])/x)*x),k=I(Math.round((n[1]-o.start[1])/x)*x),A=(l=o.base.settings.roof.sections)==null?void 0:l.find(P=>P.id===o.id);if(!A)return;this.change(P=>{var L;let O=(L=P.settings.roof.sections)==null?void 0:L.find(j=>j.id===o.id);O&&(Object.assign(O,{x0:I(A.x0+w),x1:I(A.x1+w),z0:I(A.z0+k),z1:I(A.z1+k)}),A.points&&(O.points=A.points.map(([j,F])=>[I(j+w),I(F+k)])))},o.base,!1);break}case"solarturn":{o.moved=!0;let x=(c=o.base.settings.roof.solar)==null?void 0:c.find(j=>j.id===o.id),w=x?wt(o.base,x):null;if(!x||!w)return;let[k,A]=xn(w,x),P=Math.atan2(n[0]-k,-(n[1]-A))*180/Math.PI,O=t.altKey?1:15;P=Math.round(P/O)*O;let L=$n(o.base,x,P);this.change(j=>{var V;let F=(V=j.settings.roof.solar)==null?void 0:V.find(H=>H.id===o.id);F&&Object.assign(F,L)},o.base,!1);break}case"solarmove":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=o.win?(d=o.base.settings.roof.windows)==null?void 0:d.find(C=>C.id===o.id):void 0,w=o.win?x?Ke(x):void 0:(p=o.base.settings.roof.solar)==null?void 0:p.find(C=>C.id===o.id),k=o.win?nt(o.base):[...nt(o.base),...this._floorId?Bt(o.base,this._floorId):[]],A=w?wt(o.base,w,k):null;if(!w||!A)return;let P=t.altKey?.01:.05,O=C=>I(Math.round(C/P)*P),L=A.unbounded?null:ca(k,n),j=A,F,V;if(L&&o.grab)j=L.face,F=O(L.u-o.grab.du),V=Number.isNaN(L.s)?L.face.key===w.face?w.v:Math.max(0,L.face.ls-1.5):O(L.s-o.grab.ds);else{let C=n[0]-o.start[0],W=n[1]-o.start[1],q=[A.es[0],A.es[2]],K=q[0]*q[0]+q[1]*q[1]||1;F=O(w.u+C*A.eu[0]+W*A.eu[2]),V=O(w.v+(C*q[0]+W*q[1])/K)}let H=Ue(j,{...w,face:j.key,u:F,v:V,tilt:j.flat?w.tilt??15:w.tilt});this.change(C=>{var q,K;if(o.win){let J=(q=C.settings.roof.windows)==null?void 0:q.find(ht=>ht.id===o.id);J&&Object.assign(J,{face:j.key,...H});return}let W=(K=C.settings.roof.solar)==null?void 0:K.find(J=>J.id===o.id);W&&Object.assign(W,{face:j.key,...H},j.flat&&W.tilt==null?{tilt:15}:{})},o.base,!1);break}case"outbox":{o.moved=!0;let x=this.snap(n,void 0,t.altKey),w=(u=o.base.floors.find(W=>W.id===this._floorId))==null?void 0:u.outdoor.find(W=>W.id===o.id);if(!(w!=null&&w.pool_shape))return;let k=dt(w.points),P=[[k.x0,k.z0],[k.x1,k.z0],[k.x1,k.z1],[k.x0,k.z1]][(o.corner+2)%4],O=x[0]-P[0],L=x[1]-P[1];if(w.pool_shape==="round"){let W=Math.max(Math.abs(O),Math.abs(L),.5);O=Math.sign(O||1)*W,L=Math.sign(L||1)*W}else O=Math.sign(O||1)*Math.max(Math.abs(O),.5),L=Math.sign(L||1)*Math.max(Math.abs(L),.5);let j=Math.min(P[0],P[0]+O),F=Math.max(P[0],P[0]+O),V=Math.min(P[1],P[1]+L),H=Math.max(P[1],P[1]+L),C=w.pool_shape;this.change((W,q)=>{let K=q.outdoor.find(J=>J.id===o.id);K&&(K.points=Hn(C,I(j),I(V),I(F),I(H)))},o.base,!1);break}case"pipept":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change((w,k)=>{var P,O,L;let A=(L=(O=(P=k.outdoor.find(j=>j.id===o.pool))==null?void 0:P.pool)==null?void 0:O.pipes)==null?void 0:L.find(j=>j.id===o.pipe);A&&(A.points[o.index]=[I(x[0]),I(x[1])])},o.base,!1);break}case"poolport":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change((w,k)=>{var j,F;let A=k.outdoor.find(V=>V.id===o.pool),P=(F=(j=A==null?void 0:A.pool)==null?void 0:j.ports)==null?void 0:F.find(V=>V.id===o.id);if(!A||!P)return;let[O,L]=P.kind==="skimmer"||P.kind==="inlet"?no(A.points,x):x;P.x=I(O),P.z=I(L)},o.base,!1);break}case"pooljoint":{if(!o.moved&&Math.hypot(n[0]-o.start[0],n[1]-o.start[1])<.05)break;o.moved=!0;let x=(g=(m=(f=o.base.floors.flatMap(k=>k.outdoor).find(k=>k.id===o.pool))==null?void 0:f.pool)==null?void 0:m.joints)==null?void 0:g.find(k=>k.id===o.id);if(!x)break;let w=this.snap([x.x+n[0]-o.start[0],x.z+n[1]-o.start[1]],void 0,t.altKey);if(x.kind==="wall"){let k=[-(x.nz??0),x.nx??0],A=(w[0]-x.x)*k[0]+(w[1]-x.z)*k[1];w=[x.x+k[0]*A,x.z+k[1]*A]}this.change(k=>{var P,O,L;let A=(L=(O=(P=k.floors.flatMap(j=>j.outdoor).find(j=>j.id===o.pool))==null?void 0:P.pool)==null?void 0:O.joints)==null?void 0:L.find(j=>j.id===o.id);A&&([A.x,A.z]=[I(w[0]),I(w[1])])},o.base,!1);break}case"pooldev":{if(!o.moved&&Math.hypot(n[0]-o.start[0],n[1]-o.start[1])<.05)break;o.moved=!0;let x=o.base.floors.flatMap(k=>k.furniture).find(k=>k.id===o.id);if(!x)break;let w=this.snap([x.x+n[0]-o.start[0],x.z+n[1]-o.start[1]],void 0,t.altKey);this.change(k=>{let A=k.floors.flatMap(P=>P.furniture).find(P=>P.id===o.id);A&&([A.x,A.z]=[I(w[0]),I(w[1])])},o.base,!1);break}case"outvertex":{o.moved=!0;let x=this.snap(n,void 0,t.altKey),w=(_=o.base.floors.find(A=>A.id===this._floorId))==null?void 0:_.outdoor.find(A=>A.id===o.id);if(!w)return;let k=Un(w.points);this.change((A,P)=>{let O=P.outdoor.find(V=>V.id===o.id);if(!O)return;let L=w.points.map(V=>[...V]),j=o.index,F=w.points[j];L[j]=[I(x[0]),I(x[1])],k&&w.points.forEach((V,H)=>{H!==j&&(Math.abs(V[0]-F[0])<1e-6&&(L[H][0]=I(x[0])),Math.abs(V[1]-F[1])<1e-6&&(L[H][1]=I(x[1])))}),O.points=L},o.base,!1);break}case"cablept":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(w=>{var A;let k=(A=w.settings.roof.cables)==null?void 0:A.find(P=>P.id===o.id);k&&k.points[o.index]&&(k.points[o.index]=[I(x[0]),I(x[1])])},o.base,!1);break}case"holopt":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(w=>w.settings.roof.hologram={...w.settings.roof.hologram??Cn,place:"free",x:I(x[0]),z:I(x[1])},o.base,!1);break}case"bgmove":{o.moved=!0;let x=n[0]-o.start[0],w=n[1]-o.start[1];this.change((k,A)=>{A.background&&(A.background.x=I(o.bx+x),A.background.z=I(o.bz+w))},o.base,!1);break}case"bgrotate":{o.moved=!0;let x=(h=this.floor)==null?void 0:h.background,w=x?this._images[x.image_id]:void 0;if(!x||!w)break;let k=x.width*w.aspect,A=[x.x+x.width/2,x.z+k/2],P=Math.atan2(n[1]-A[1],n[0]-A[0]),O=o.rot+(P-o.start)*180/Math.PI;O=t.shiftKey?Math.round(O/15)*15:Math.round(O*10)/10,O=((O+180)%360+360)%360-180,this.change((L,j)=>{j.background&&(j.background.rotation=O)},o.base,!1);break}case"bgscale":{o.moved=!0;let x=(b=this.floor)==null?void 0:b.background,w=x?this._images[x.image_id]:void 0;if(!x||!w)break;let[k]=this.bgLocal(x,n,w.aspect),A=Math.max(.5,I(k));this.change((P,O)=>{O.background&&(O.background.width=A)},o.base,!1);break}case"roofvertex":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(w=>{var A;let k=(A=w.settings.roof.sections)==null?void 0:A.find(P=>P.id===o.id);!(k!=null&&k.points)||o.index>=k.points.length||(k.points[o.index]=[I(x[0]),I(x[1])],Object.assign(k,mi(k.points)))},o.base,!1);break}case"roofcorner":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(w=>{var A;let k=(A=w.settings.roof.sections)==null?void 0:A.find(P=>P.id===o.id);k&&(o.corner[0]?k.x1=I(x[0]):k.x0=I(x[0]),o.corner[1]?k.z1=I(x[1]):k.z0=I(x[1]))},o.base,!1);break}case"opening":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=o.base.floors.find(P=>P.id===this._floorId),w=x==null?void 0:x.openings.find(P=>P.id===o.id),k=w&&x?Ce(w,x.rooms,x.walls??[]):null;if(!w||!k)return;let A=this.offsetOnEdge(k.room,k.edge,n,w.width,t.altKey);this.change((P,O)=>Object.assign(O.openings.find(L=>L.id===o.id),{offset:A}),o.base,!1);break}case"furniture":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=(y=o.base.floors.find(L=>L.id===this._floorId))==null?void 0:y.furniture.find(L=>L.id===o.id);if(!x)return;let w=t.altKey?.01:this._doc.settings.grid,k=I(Math.round((x.x+n[0]-o.start[0])/w)*w),A=I(Math.round((x.z+n[1]-o.start[1])/w)*w),P=x.rotation,O=t.altKey?null:this.snapToWall({...x,x:k,z:A});O&&({x:k,z:A,rotation:P}=O),this.change((L,j)=>Object.assign(j.furniture.find(F=>F.id===o.id),{x:k,z:A,rotation:P}),o.base,!1);break}case"outdoor":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=(S=o.base.floors.find(P=>P.id===this._floorId))==null?void 0:S.outdoor.find(P=>P.id===o.id);if(!x)return;let w=t.altKey?.01:this._doc.settings.grid,k=Math.round((n[0]-o.start[0])/w)*w,A=Math.round((n[1]-o.start[1])/w)*w;this.change((P,O)=>{var j,F;let L=O.outdoor.find(V=>V.id===o.id);L.points=x.points.map(([V,H])=>[I(V+k),I(H+A)]),(j=L.pool)!=null&&j.ports&&((F=x.pool)!=null&&F.ports)&&(L.pool.ports=x.pool.ports.map(V=>({...V,x:I(V.x+k),z:I(V.z+A)})))},o.base,!1);break}case"resize":{o.moved=!0;let x=(E=o.base.floors.find(k=>k.id===this._floorId))==null?void 0:E.furniture.find(k=>k.id===o.id);if(!x)return;let w=Cs(x,o.corner,n,t.altKey?.01:this._doc.settings.grid);this.change((k,A)=>Object.assign(A.furniture.find(P=>P.id===o.id),w),o.base,!1);break}case"rotate":{o.moved=!0;let x=(R=o.base.floors.find(A=>A.id===this._floorId))==null?void 0:R.furniture.find(A=>A.id===o.id);if(!x)return;let w=Math.atan2(-(n[0]-x.x),n[1]-x.z)*180/Math.PI,k=t.altKey?1:15;w=(Math.round(w/k)*k%360+360)%360,this.change((A,P)=>Object.assign(P.furniture.find(O=>O.id===o.id),{rotation:w}),o.base,!1);break}case"aim":{o.moved=!0;let x=(z=o.base.floors.find(P=>P.id===this._floorId))==null?void 0:z.placements.find(P=>P.entity_id===o.entityId);if(!x)return;let w=Math.atan2(-(n[0]-x.x),n[1]-x.z)*180/Math.PI,k=t.altKey?1:5;w=(Math.round(w/k)*k%360+360)%360;let A=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-x.x,n[1]-x.z)*10)/10));this.change((P,O)=>Object.assign(O.placements.find(L=>L.entity_id===o.entityId),{rotation:w,reach:A}),o.base,!1);break}case"device":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=(M=o.base.floors.find(P=>P.id===this._floorId))==null?void 0:M.placements.find(P=>P.entity_id===o.entityId);if(!x)return;let w=t.altKey?.01:this._doc.settings.grid,k=I(Math.round((x.x+n[0]-o.start[0])/w)*w),A=I(Math.round((x.z+n[1]-o.start[1])/w)*w);this.change((P,O)=>Object.assign(O.placements.find(L=>L.entity_id===o.entityId),{x:k,z:A}),o.base,!1);break}}}onPointerUp(t){var o;if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&Ra.has(e.kind)&&"moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base);return}let n=this.localPoint(t);switch(e.kind){case"freewall":{Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1])>=.2&&this.addFreeWall(e.start,e.end),this._guides={};break}case"wallmove":e.moved&&this.pushHistory(e.base),this._guides={};break;case"rect":{let[i,s]=e.start,[r,l]=e.end;if(Math.abs(r-i)>=.2&&Math.abs(l-s)>=.2){let c=[Math.min(i,r),Math.min(s,l)],d=[Math.max(i,r),Math.max(s,l)],p=[c,[d[0],c[1]],d,[c[0],d[1]]];e.outdoor?this.addOutdoor(p):e.hole?this.addHole(c,d):e.roof?this.addRoofSection(c,d):this.addRoom(p)}this._guides={};break}case"tap":if(e.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,t.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":e.moved?this.pushHistory(e.base):(e.kind==="poolport"||e.kind==="pooljoint")&&this.openCard(e.pool,`${e.kind==="poolport"?"port":"joint"}:${e.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":e.moved&&this.pushHistory(e.base);break;case"pooldev":{e.moved?this.pushHistory(e.base):((o=this._doc.floors.flatMap(i=>i.furniture).find(i=>i.id===e.id))==null?void 0:o.type)==="pool_valve"?this.togglePoolValve(e.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${e.id}`);break}case"device":e.moved?this.pushHistory(e.base):this.selectItem("device",e.entityId);break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>Oa&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){var l;if(n)return e;let o=this._doc.settings.grid,i=[Math.round(e[0]/o)*o,Math.round(e[1]/o)*o],r=mo/this._view.scale;this._guides={};for(let c of((l=this.floor)==null?void 0:l.rooms)??[])if(c.id!==t.id)for(let d of c.points)for(let p of t.points){let u=Math.hypot(p[0]+e[0]-d[0],p[1]+e[1]-d[1]);u<r&&(r=u,i=[d[0]-p[0],d[1]-p[1]],this._guides={point:d})}return i}roomAt(t){var o,i;return((i=(((o=this.floor)==null?void 0:o.rooms)??[]).filter(s=>N(t,s.points)).sort((s,r)=>xt(s.points)-xt(r.points))[0])==null?void 0:i.id)??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[i,s]=this.toScreen(n[0]);if(Math.hypot(i-e[0],s-e[1])<14){this.closeDraft();return}}let o=n[n.length-1];o&&Math.hypot(o[0]-t[0],o[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Math.abs(xt(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=Ve(e,this._measureLen,t),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-o[0],n[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;e>.1&&n>.1&&(this.addRoom([t,Ve(t,e,"right"),Ve(Ve(t,e,"right"),n,"down"),Ve(t,n,"down")]),this._draft=[])}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],o=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,i=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=r=>St(this.hass,r,2);return v`<section>
      <h3>${this.t("measure")}</h3>
      ${e?v`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(e[0]),z:this.m(e[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${fn(this.t("measure_length"),this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit==="imperial"?"text":"number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${this.lenValue(this._measureLen)}
                  @change=${r=>this._measureLen=this.readLen(r.target.value)??0}
                  @keydown=${r=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[r.key];l?(r.preventDefault(),this.measureStep(l)):r.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${i.map(([r,l])=>v`<button class="fp3d-btn fp3d-arrow-${r}" title=${this.t(`dir_${r}`)} @click=${()=>this.measureStep(r)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?v`<ol class="fp3d-measure-list">
                  ${t.slice(1).map((r,l)=>v`<li>${this.m(Math.hypot(r[0]-t[l][0],r[1]-t[l][1]))}</li>`)}
                </ol>`:$}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?v`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(o)})}</p>`:$}`:v`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],r=>this._rectSize=[Math.max(.1,r),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],r=>this._rectSize=[this._rectSize[0],Math.max(.1,r)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(t,e){if(!this.floor)return;let n={id:B("wall"),a:[I(t[0]),I(t[1])],b:[I(e[0]),I(e[1])],thickness:null};this.change((o,i)=>i.walls=[...i.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){var t;return this._wallId?(((t=this.floor)==null?void 0:t.walls)??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(t){let e=this._wallId;e&&this.change((n,o)=>Object.assign((o.walls??[]).find(i=>i.id===e),t))}deleteFreeWall(){let t=this._wallId;!t||!this.isAdmin||!this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(o=>o.id!==t),n.openings=n.openings.filter(o=>o.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return T`<g>${(t.walls??[]).map(e=>{let[n,o]=this.toScreen(e.a),[i,s]=this.toScreen(e.b),r=e.id===this._wallId;return T`<g data-free-wall=${e.id} class=${`fp3d-free-wall${r?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${o} x2=${i} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${o} x2=${i} y2=${s} />
      </g>
      ${r&&this.isAdmin&&!Fo(e,!0,this._doc.settings)?T`<g class="fp3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${o} r="16" class="fp3d-hit" /><circle cx=${n} cy=${o} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${i} cy=${s} r="16" class="fp3d-hit" /><circle cx=${i} cy=${s} r="6" /></g>`:$}`})}</g>`}renderFreeWallForm(t){var r;let e=this.isAdmin,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),o=l=>{let d=Math.max(.1,l)/(n||1);this.updateFreeWall({b:[I(t.a[0]+(t.b[0]-t.a[0])*d),I(t.a[1]+(t.b[1]-t.a[1])*d)]})},i=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],s=(l,c)=>{let d=c-i[l],p=u=>l===0?[I(u[0]+d),u[1]]:[u[0],I(u[1]+d)];this.updateFreeWall({a:p(t.a),b:p(t.b)})};return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),i[0],l=>s(0,l))} ${this.len(this.t("z"),i[1],l=>s(1,l))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,o,.01,.1)}
        ${this.len(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,l=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,l))}),.01,.02)}
        ${this.len(this.t("wall_height"),t.height??((r=this.floor)==null?void 0:r.height)??2.5,l=>{var c;return this.updateFreeWall({height:l>=(((c=this.floor)==null?void 0:c.height)??2.5)-.005?null:Math.max(.05,l)})},.05,.05)}
      </div>
      ${e?v`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:$}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:B("hole"),type:"stairwell",x:I((t[0]+e[0])/2),z:I((t[1]+e[1])/2),w:I(e[0]-t[0]),d:I(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((o,i)=>i.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(t){if(!this.floor)return;let e=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:B("outdoor"),type:e,points:t.map(([i,s])=>[I(i),I(s)])},o=e==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(o==="round"||o==="oval"){let i=dt(n.points);n.points=Hn(o,i.x0,i.z0,i.x1,i.z1),n.pool_shape=o}e==="pool"&&ut("pool")&&(n.pool={}),this.change((i,s)=>s.outdoor.push(n)),this.selectItem("outdoor",n.id),this._tool!=="pool"&&(this._tool="select")}get outdoorArea(){var t;return this._outdoorId?(t=this.floor)==null?void 0:t.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,o)=>Object.assign(o.outdoor.find(i=>i.id===e),t))}deleteOutdoor(){let t=this._outdoorId;!t||!this.isAdmin||!this.confirmFixedDelete("outdoor",t)||(this.change((e,n)=>n.outdoor=n.outdoor.filter(o=>o.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isAdmin)return;let e={...t,id:B("outdoor"),points:t.points.map(([n,o])=>[I(n+.5),I(o+.5)])};this.change((n,o)=>o.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t){if(!this.floor)return;let e=B("room"),n=this.floor.rooms.length+1;this.change((o,i)=>i.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([s,r])=>[I(s),I(r)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let o=this.selectedFix;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(Ta,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let o=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[i,s]=Ta[t.key];this.nudge(i*o,s*o)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Backspace"&&this.drawingPoints)this._draft=this._draft.slice(0,-1);else if(t.key==="Enter"&&this.drawingPoints)this.closeDraft();else if(t.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let o=this.selectedFix;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=s=>[I(s[0]+t),I(s[1]+e)];if(this._deviceId){let s=this._deviceId;if(!n.placements.some(r=>r.entity_id===s))return!1;this.change((r,l)=>{let c=l.placements.find(d=>d.entity_id===s);[c.x,c.z]=i([c.x,c.z])})}else if(this._furnitureId){let s=this._furnitureId;this.change((r,l)=>{let c=l.furniture.find(d=>d.id===s);c&&([c.x,c.z]=i([c.x,c.z]))})}else if(this._openingId){let s=this.opening,r=s?Ce(s,n.rooms,n.walls??[]):null;if(!s||!r)return!1;let l=r.room.points[r.edge],c=r.room.points[(r.edge+1)%r.room.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,p=(t*(c[0]-l[0])+e*(c[1]-l[1]))/d;if(Math.abs(p)<1e-9)return!0;let u=Math.min(s.width,d)/2;this.updateOpening({offset:I(Math.min(d-u,Math.max(u,s.offset+p)))})}else if(this._wallId){let s=this._wallId;this.change((r,l)=>{let c=(l.walls??[]).find(d=>d.id===s);c&&([c.a,c.b]=[i(c.a),i(c.b)])})}else if(this._outdoorId){let s=this._outdoorId;this.change((r,l)=>{let c=l.outdoor.find(d=>d.id===s);c&&(c.points=c.points.map(i))})}else if(this._roomId){let s=this._roomId,r=this._vertex,l=n.rooms.find(d=>d.id===s);if(!l)return!1;let c=new Set(n.placements.filter(d=>N([d.x,d.z],l.points)).map(d=>d.entity_id));this.change((d,p)=>{let u=p.rooms.find(f=>f.id===s);if(r!==null&&r<u.points.length){u.points[r]=i(u.points[r]);return}u.points=u.points.map(i);for(let f of p.placements)c.has(f.entity_id)&&([f.x,f.z]=i([f.x,f.z]))})}else return!1;return!0}get freeHaFloors(){var e;let t=new Set(this._doc.floors.map(n=>n.ha_floor));return Object.values(((e=this.hass)==null?void 0:e.floors)??{}).filter(n=>!t.has(n.floor_id)).sort((n,o)=>(n.level??99)-(o.level??99)||n.name.localeCompare(o.name))}unplacedAreas(t){var n;if(!t.ha_floor)return[];let e=new Set(this._doc.floors.flatMap(o=>o.rooms.map(i=>i.area_id)));return Object.values(((n=this.hass)==null?void 0:n.areas)??{}).filter(o=>o.floor_id===t.ha_floor&&!e.has(o.area_id)).sort((o,i)=>o.name.localeCompare(i.name))}addFloor(t=null){let e=this._doc.floors,n=B("floor"),o=(t==null?void 0:t.name)??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),i={...Vs(n,o,Ts(e,t==null?void 0:t.level)),ha_floor:(t==null?void 0:t.floor_id)??null},s=structuredClone(this._doc),r=s.floors.findIndex(l=>l.elevation>i.elevation);s.floors.splice(r<0?s.floors.length:r,0,i),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=js(t,e,()=>B("room"));this.change((o,i)=>i.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(i=>i.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let o=structuredClone(this._doc);[o.floors[e],o.floors[n]]=[o.floors[n],o.floors[e]],this.setDoc(o)}deleteFloor(){var n;let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(o=>o.id!==t.id),this.setDoc(e),this._floorId=((n=e.floors[0])==null?void 0:n.id)??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||!this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let o=n.rooms.find(i=>i.id===t);n.rooms=n.rooms.filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.room_id!==t||i.wall),o&&(n.placements=n.placements.filter(i=>!N([i.x,i.z],o.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=B("room");this.change((n,o)=>o.rooms.push({...structuredClone(t),id:e,points:t.points.map(([i,s])=>[I(i+.5),I(s+.5)])})),this._roomId=e}roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?$:v`<div class="fp3d-seg fp3d-dev-source">
      ${t.map(e=>v`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
    </div>`}get roofSection(){var t;return this._roofId?(t=this._doc.settings.roof.sections)==null?void 0:t.find(e=>e.id===this._roofId):void 0}useRoofSections(t=!1){if(!this.isAdmin)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=oa(n,()=>B("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isAdmin)return;let n=ea(this._doc,t[0],t[1],e[0],e[1]),o=Math.min(...this._doc.floors.map(c=>c.elevation)),i=n===null,s=I(n??o+2.4),r=i?6:this._doc.settings.roof.pitch||35,l={id:B("roof"),x0:I(t[0]),z0:I(t[1]),x1:I(e[0]),z1:I(e[1]),shape:i?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:r,pitch_b:r,base:s,overhang:i?.15:null,...i?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let t=this.floor,e=this._roofId;if(!t||!e||!this.isAdmin)return;let n=Jr(t.rooms,t.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let o=n.map(([i,s])=>[I(i),I(s)]);this.updateRoofSection({shape:"flat",points:o,...mi(o)})}addDormer(t){let e=this.roofSection;if(!e||!this.isAdmin)return;let n=Zr(e,t,B("roof"));this.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(t){let e=this._roofId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var i;let o=(i=n.settings.roof.sections)==null?void 0:i.find(s=>s.id===e);o&&Object.assign(o,t)}))}deleteRoofSection(){let t=this._roofId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:B("roof"),x0:I(t.x0+1),x1:I(t.x1+1),z0:I(t.z0+1),z1:I(t.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return T`<g class="fp3d-roof-layer">${e.map((n,o)=>{let i=n.id===this._roofId,s=Vt(n),r=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=Qr(e,n),c=l?Vt(Xr(l,n)):s,d=(r??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(h=>this.toScreen(h)),p=(h,b)=>{let[y,S]=this.toScreen(h),[E,R]=this.toScreen(b);return T`<line x1=${y} y1=${S} x2=${E} y2=${R} />`},u=n.shape==="flat"||n.shape==="parapet"?null:gi(n,{u0:0,u1:0,a:0,b:0}),f=u?T`${u.ridges.map(([h,b])=>p(s.at(h[0],h[1]),s.at(b[0],b[1])))}`:$,[m,g]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),_=`${this.roofFixed(n)?"\u{1F512} ":""}${o+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(oo(n),1)}`;return T`<g data-roof=${n.id} class=${`fp3d-roof-sec${i?" fp3d-roof-sel":""}`}>
          <polygon points=${d.map(h=>h.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${f}</g>
          <text x=${m} y=${g-14}>${_}</text>
        </g>
        ${i&&this.isAdmin&&!this.roofFixed(n)&&r?r.map((h,b)=>{let[y,S]=this.toScreen(h);return T`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${b}`}><circle cx=${y} cy=${S} r="16" class="fp3d-hit" /><circle cx=${y} cy=${S} r="6" /></g>`}):$}
        ${i&&this.isAdmin&&!this.roofFixed(n)&&!r?[[0,0],[1,0],[1,1],[0,1]].map(([h,b])=>{let[y,S]=this.toScreen([h?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),b?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return T`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${h}:${b}`}><circle cx=${y} cy=${S} r="16" class="fp3d-hit" /><circle cx=${y} cy=${S} r="6" /></g>`}):$}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:so(t,e)}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return $;let e=nt(this._doc);return T`<g class="fp3d-solar-layer">${t.map(n=>{let o=wt(this._doc,n,e);if(!o||o.wall&&o.wall.floorId!==this._floorId)return $;let i=n.id===this._solarId,s=$;if(i&&o.unbounded&&this.isAdmin&&!n.locked){let[r,l]=xn(o,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...te(o,n,!0).flatMap(g=>g.corners.map(_=>Math.hypot(_[0]-r,_[2]-l))))*.5,[p,u]=this.toScreen([r,l]),[f,m]=this.toScreen([r+Math.sin(c)*d,l-Math.cos(c)*d]);s=T`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${p} y1=${u} x2=${f} y2=${m} />
          <circle cx=${f} cy=${m} r="16" class="fp3d-hit" />
          <circle cx=${f} cy=${m} r="8" />
          <path d="M${f-4} ${m-1}a4 4 0 1 1 2 3.5" />
        </g>`}return T`<g data-solar=${n.id} class=${`fp3d-solar${i?" fp3d-solar-sel":""}${i&&this._solarPick?" fp3d-solar-pick":""}`}>${te(o,n,i).map(r=>{let l=o.wall?Math.max(.3,...r.corners.map(d=>(d[0]-o.o[0])*o.n[0]+(d[2]-o.o[2])*o.n[2])):0,c=o.wall?[r.corners[0],r.corners[1]].flatMap((d,p)=>{let u=[d[0],d[2]],f=[d[0]+o.n[0]*l,d[2]+o.n[2]*l];return p===0?[u,f]:[f,u]}):r.corners.map(d=>[d[0],d[2]]);return T`<polygon data-cell=${r.cell} class=${r.skipped?"fp3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return $;let e=new Map(nt(this._doc).map(n=>[n.key,n]));return T`<g class="fp3d-roofwin-layer">${t.map(n=>{let o=e.get(n.face),i=o?ha(o,n):null;return i?T`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${i.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:$})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let t=nt(this._doc).filter(o=>!o.flat),e=ao(t,this._doc.settings.north??0)??nt(this._doc)[0];if(!e)return;let n=Mi(e,B("rwin"));this.change(o=>o.settings.roof.windows=[...o.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isAdmin||this.change(n=>{var s;let o=(s=n.settings.roof.windows)==null?void 0:s.find(r=>r.id===e);if(!o)return;Object.assign(o,t);let i=nt(n).find(r=>r.key===o.face);i&&Object.assign(o,Ue(i,Ke(o)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(nt(this._doc).map(n=>[n.key,n]));return v`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?v`<div class="fp3d-room-list">
            ${t.map((n,o)=>{let i=e.get(n.face);return v`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${o+1} · ${i?this.faceLabel(i):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:$}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isAdmin,n=nt(this._doc),o=l=>this.updateRoofWindow(l),i=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),r=this.entityOptions(l=>Ti(l)||yt(l));return v`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${i}</h3>
          ${e?v`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>o({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:$}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&o({...Mi(c,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt,window:t.window,name:t.name})}}>
              ${n.map(l=>v`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),t.w??.78,l=>o({w:Math.max(.3,Math.min(4,I(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),t.h??1.18,l=>o({h:Math.max(.3,Math.min(4,I(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),t.u,l=>o({u:I(l)}),.05)}
          ${this.len(this.t("solar_v"),t.v,l=>o({v:I(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),t.cover??null,void 0,s,l=>o({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),t.contact??null,void 0,r,l=>o({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),t.tilt??null,void 0,r,l=>o({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),t.window??null,void 0,s,l=>o({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${t.name??""} ?disabled=${!e} maxlength="64" @change=${l=>o({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${e?v`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:$}
      </section>`}cableSegments(){var i;if(((i=this.cableCache)==null?void 0:i.doc)===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(s=>[s.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},o=[];try{o=Ma({building:t,consumers:[],summary:n,fieldPower:e}).filter(s=>s.key)}catch{o=[]}return this.cableCache={doc:t,segs:o},o}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,o)=>e(n)-e(o)||n.localeCompare(o))}cableLabel(t){let e=r=>{let l=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===r);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.type==="meter"),o=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${o} \u2192 ${this.t("furn_grid_point")}`;let[i,s]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(i==="solar"){let r=this._doc.settings.roof.solar??[],l=r.findIndex(d=>d.id===s),c=r[l];return`${(c==null?void 0:c.name)||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return i==="inv"?`${e(s)} \u2192 ${o}`:`${this.t("furn_inverter")} \u2194 ${e(s)}`}layCable(t){if(!this.isAdmin||!this._floorId)return;let e=[];for(let i of this.cableSegments().filter(s=>s.key===t))for(let s of[i.a,i.b]){let r=[I(s[0]),I(s[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-r[0],l[1]-r[1])>.05)&&e.push(r)}let n=e.length>2?e.slice(1,-1):e,o=this._floorId;this.change(i=>{i.settings.roof.cables=[...(i.settings.roof.cables??[]).filter(s=>s.id!==t),{id:t,floor_id:o,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){if(!ut("energy_pro"))return $;let t=this.cableSegments();if(!t.length)return $;let e=t.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],o=this._cableId,i=[...new Set(t.map(s=>s.key))];return T`<g class="fp3d-cable-layer">${i.map(s=>{let r=n.find(_=>_.id===s),l=`fp3d-cable fp3d-cable-${s.split(":")[0]}${r?" fp3d-cable-laid":""}${s===o?" fp3d-cable-sel":""}`,c=t.filter(_=>_.key===s),d=e.filter(_=>_.key===s).map(_=>{let h=this.toScreen([_.a[0],_.a[2]]),b=this.toScreen([_.b[0],_.b[2]]);return T`<line x1=${h[0]} y1=${h[1]} x2=${b[0]} y2=${b[1]} />`});if(!(r&&s===o&&r.floor_id===this._floorId&&!r.locked))return d.length?T`<g class=${l} data-cable=${s}><g class="fp3d-cable-hit">${d}</g>${d}</g>`:$;let p=c[0],u=c[c.length-1],f=[this.toScreen([p.a[0],p.a[2]]),...r.points.map(_=>this.toScreen(_)),this.toScreen([u.b[0],u.b[2]])],m=f.slice(0,-1).map((_,h)=>T`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${h} x1=${_[0]} y1=${_[1]} x2=${f[h+1][0]} y2=${f[h+1][1]} />`),g=r.points.map((_,h)=>{let b=this.toScreen(_);return T`<g class="fp3d-vertex" data-cable-pt=${`${s}:${h}`}><circle cx=${b[0]} cy=${b[1]} r="16" class="fp3d-hit" /><circle cx=${b[0]} cy=${b[1]} r="6" /></g>`});return T`<g class=${l} data-cable=${s}>${d}${m}${g}</g>`})}</g>`}renderCableSettings(){var i;let t=this.cableKeys();if(!t.length)return $;let e=this.isAdmin,n=this._doc.settings.roof.cables??[],o=this._cableId?n.find(s=>s.id===this._cableId):void 0;return v`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${t.map(s=>v`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${s===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=s===this._cableId?null:s;let r=n.find(l=>l.id===s);this._cableId&&r&&this._doc.floors.some(l=>l.id===r.floor_id)&&(this._floorId=r.floor_id)}}
            >
              <span>${this.cableLabel(s)}${n.some(r=>r.id===s)?v` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:$}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?v`<div class="fp3d-actions">
              ${o?v`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!o.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(s=>{var l;let r=(l=s.settings.roof.cables)==null?void 0:l.find(c=>c.id===o.id);r&&(r.locked=!r.locked)})}>
                      ${o.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(s=>s.settings.roof.cables=(s.settings.roof.cables??[]).filter(r=>r.id!==this._cableId))}>${this.t("cable_auto")}</button>`:v`<button class="fp3d-btn fp3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${o?v`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),o.height,s=>this.change(r=>{var c;let l=(c=r.settings.roof.cables)==null?void 0:c.find(d=>d.id===o.id);l&&(l.height=Math.min(30,Math.max(0,I(s))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${o.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:((i=this._doc.floors.find(s=>s.id===o.floor_id))==null?void 0:i.name)??""})}</p>`:$}`:$}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return $;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,o=ut("energy_pro")&&(n==null?void 0:n.place)==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return T`<g class="fp3d-energy-markers">${o?T`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${o[0]} cy=${o[1]} r="17" />
          <text x=${o[0]} y=${o[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${o[0]} y=${o[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:$}${t.furniture.filter(i=>se.includes(i.type)).map(i=>{let[s,r]=this.toScreen([i.x,i.z]),l=i.id===this._furnitureId;return T`<g data-energy-device=${i.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${r} r="17" />
          <text x=${s} y=${r+6} class="fp3d-energy-icon">${e[i.type]??"\u26A1"}</text>
          ${l?T`<text x=${s} y=${r+32} class="fp3d-energy-name">${this.t(`furn_${i.type}`)}</text>`:$}
          <title>${this.t(`furn_${i.type}`)}</title>
        </g>`})}</g>`}faceLabel(t){if(t.key===he)return this.t("solar_ground");if(t.wall){let{floorId:i,room:s,edge:r,free:l}=t.wall,c=this._doc.floors.find(u=>u.id===i),d=c==null?void 0:c.rooms.find(u=>u.id===s),p=l?this.t("solar_wall_free"):d?`${d.name}${r!=null?` ${r+1}\u2013${(r+1)%d.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${(c==null?void 0:c.name)??""} \xB7 ${p?`${p} \xB7 `:""}${this.t(`compass_${ki(t,this._doc.settings.north??0)}`)} \xB7 ${this.m(t.lu,2)}`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(i=>i.id===t.section)+1}):this.t("solar_main");if(t.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let o=t.side==="c"||t.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${ki(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0${o}`}addSolarField(){if(!this.isAdmin)return;let t=nt(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,o=ao(t.filter(s=>!e.has(s.key)),n)??ao(t,n);if(!o)return;let i=ro(o,B("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],i]),this._solarId=i.id,this._roofId=null}selectSolar(t){var n;this._solarId=t,this._roofId=null;let e=(n=this._doc.settings.roof.solar)==null?void 0:n.find(o=>o.id===t);e!=null&&e.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){var n;if(!this.isAdmin)return;let t=this._floorId??((n=this._doc.floors[0])==null?void 0:n.id),e=t?aa(this._doc,B("pv"),t):null;e&&(this.change(o=>o.settings.roof.solar=[...o.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isAdmin)return;let t=vi(this._doc,B("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var s;let o=(s=n.settings.roof.solar)==null?void 0:s.find(r=>r.id===e);if(!o)return;Object.assign(o,t);let i=wt(n,o);i&&Object.assign(o,Ue(i,o))}))}setSolarString(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var r;let o=n.settings.roof,i=(r=o.solar)==null?void 0:r.find(l=>l.id===e);if(!i)return;if(t==="new"){let l=o.strings??[],c={id:B("str"),name:this.t("solar_string_n",{n:l.length+1}),entity:i.entity??null,inverter:null};o.strings=[...l,c],i.string=c.id}else i.string=t;let s=new Set((o.solar??[]).map(l=>l.string).filter(Boolean));o.strings=(o.strings??[]).filter(l=>s.has(l.id))})}updateSolarString(t){var o;let e=(o=this._doc.settings.roof.solar)==null?void 0:o.find(i=>i.id===this._solarId),n=e==null?void 0:e.string;!n||!this.isAdmin||this.change(i=>{var r;let s=(r=i.settings.roof.strings)==null?void 0:r.find(l=>l.id===n);s&&Object.assign(s,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var i;let o=(i=n.settings.roof.solar)==null?void 0:i.find(s=>s.id===e);o&&t(o)})}deleteSolar(){let t=this._solarId;!t||!this.isAdmin||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(i=>i.id!==t);let o=new Set(n.solar.map(i=>i.string).filter(Boolean));n.strings=(n.strings??[]).filter(i=>o.has(i.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=nt(this._doc),n=new Map(t.map(i=>[i.id,wt(this._doc,i,e)])),o=this.isAdmin;return v`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?v`<div class="fp3d-room-list">
            ${t.map((i,s)=>{let r=n.get(i.id),l=r?te(r,i).length:0;return v`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(i.id)}
                >
                  <span>${i.name||`${this.t("solar_field")} ${s+1}`} · ${r?this.faceLabel(r):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:St(this.hass,l*(i.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:$}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!o||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!o} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!o||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?v`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(i=>{let s=t.filter(d=>d.string===i.id),r=s.map(d=>n.get(d.id)?te(n.get(d.id),d).length:0),l=r.reduce((d,p)=>d+p,0),c=s.reduce((d,p,u)=>d+r[u]*(p.wp??400)/1e3,0);return v`<p class="fp3d-sub">🔗 <b>${i.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:l,kwp:St(this.hass,c,1)})}</p>`})}`:$}
    </section>`}renderSolarForm(t){var f,m,g,_;let e=this.isAdmin,n=nt(this._doc),o=Bt(this._doc),i=wt(this._doc,t,n),s=t.face===he,r=i?te(i,t).length:0,l=yn(t),c=l.reduce((h,b)=>h+b,0)-(((f=t.skip)==null?void 0:f.length)??0),d=this.entityOptions(h=>this.isPowerSensor(h)),p=h=>this.updateSolar(h),u=(this._doc.settings.roof.solar??[]).findIndex(h=>h.id===t.id)+1;return v`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${u}`}</h3>
          ${e?v`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:$}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!e}
              .value=${t.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${h=>p({name:h.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${h=>{let b=h.target.value,y={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h,wp:t.wp};b===he&&p({...vi(this._doc,t.id),...y,rows:t.rows,cols:t.cols});let S=n.find(R=>R.key===b);S&&p(wi(S,{...t,...y}));let E=o.find(R=>R.key===b);E&&p(wi(E,{...t,...y,rows:1}))}}
            >
              ${i?$:v`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(h=>v`<option value=${h.key} ?selected=${h.key===t.face}>${this.faceLabel(h)}</option>`)}
              <option value=${he} ?selected=${s}>${this.t("solar_ground")}</option>
              ${o.map(h=>v`<option value=${h.key} ?selected=${h.key===t.face}>${this.faceLabel(h)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,h=>{var y;let b=Math.max(1,Math.min(40,Math.round(h)));p((y=t.layout)!=null&&y.length?{layout:Array.from({length:b},(S,E)=>t.layout[E]??t.layout[t.layout.length-1]),rows:b}:{rows:b})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${(m=t.layout)!=null&&m.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${h=>{let b=h.target.value.split(/[,;\s]+/).map(y=>parseInt(y,10)).filter(y=>Number.isFinite(y)&&y>=0);b.length&&(b.length===1?p({cols:Math.max(1,Math.min(60,b[0])),layout:null,skip:null}):p({layout:b.slice(0,40).map(y=>Math.min(60,y)),rows:Math.min(40,b.length),cols:Math.max(1,...b),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${i&&!i.unbounded?v`${this.t("solar_face_size",{w:St(this.hass,i.lu,1),h:St(this.hass,i.ls,1)})} · `:$}${this.t("solar_cols_hint")}
        </p>
        ${(g=t.layout)!=null&&g.length&&new Set(t.layout).size>1?v`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(h=>v`<button aria-pressed=${(t.align??"left")===h} ?disabled=${!e} @click=${()=>p({align:h})}>${this.t(`solar_align_${h}`)}</button>`)}
            </div>`:$}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.portrait!==!1} ?disabled=${!e} @click=${()=>p({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${t.portrait===!1} ?disabled=${!e} @click=${()=>p({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.look!=="blue"} ?disabled=${!e} @click=${()=>p({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${t.look==="blue"} ?disabled=${!e} @click=${()=>p({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"),t.module_w??1.13,h=>p({module_w:Math.max(.3,Math.min(3,I(h)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),t.module_h??1.72,h=>p({module_h:Math.max(.3,Math.min(3,I(h)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),t.wp??400,h=>p({wp:Math.max(50,Math.min(1500,Math.round(h)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${(_=t.skip)!=null&&_.length?v`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>p({skip:null})}>${this.t("solar_pick_all")}</button>`:$}
        </div>
        ${this._solarPick?v`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:$}
        <div class="fp3d-form">
          ${s?v`${this.len(this.t("solar_base"),t.base??0,h=>p({base:h>.001?Math.min(60,I(h)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,h=>p($n(this._doc,t,h)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>p($n(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>p($n(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:v`${this.len(this.t("solar_u"),t.u,h=>p({u:I(h)}),.05)} ${this.num(this.t(i!=null&&i.wall?"solar_v_wall":"solar_v"),t.v,h=>p({v:I(h)}),.05)}`}
          ${i!=null&&i.wall?v`${this.num(this.t("solar_tilt_wall"),t.tilt??0,h=>p({tilt:Math.max(0,Math.min(90,Math.round(h)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${h=>p({flip:h.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:$}
          ${i!=null&&i.flat?v`${this.num(this.t("solar_tilt"),t.tilt??15,h=>p({tilt:Math.max(0,Math.min(45,Math.round(h)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${h=>p({flip:h.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:$}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:r,kwp:St(this.hass,r*(t.wp??400)/1e3,1)})}${r<c?v` · <b>${this.t("solar_partial",{n:r,total:c})}</b>`:$}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${h=>{let b=h.target.value;this.setSolarString(b===""?null:b)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(h=>v`<option value=${h.id} ?selected=${h.id===t.string}>${h.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{var S;let h=(S=this._doc.settings.roof.strings)==null?void 0:S.find(E=>E.id===t.string);if(!h)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,d,E=>p({entity:E==="none"?null:E}));let b=this.hass?Te(this.hass,this._doc.floors):null,y=this._doc.floors.flatMap(E=>E.furniture.filter(R=>R.type==="inverter").map(R=>({m:R,fl:E}))).map(({m:E,fl:R},z)=>{var w,k;let M=(w=b==null?void 0:b.get(E.id))==null?void 0:w.entity,x=((k=E.name)==null?void 0:k.trim())||(M&&this.hass?st(this.hass,M):"");return{id:E.id,label:`${x||`${this.t("furn_inverter")} ${z+1}`} \xB7 ${R.name}`}});return v`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${h.name} @change=${E=>this.updateSolarString({name:E.target.value.trim()||h.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),h.entity??null,void 0,d,E=>this.updateSolarString({entity:E==="none"?null:E}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${E=>this.updateSolarString({inverter:E.target.value||null})}>
                  <option value="" ?selected=${!h.inverter}>${this.t(y.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${y.map(E=>v`<option value=${E.id} ?selected=${E.id===h.inverter}>${E.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${e?v`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!i} @click=${()=>i&&p({...ro(i,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:$}
      </section>`}renderRoofPanel(){var s;let t=this._doc.settings.roof,e=this.isAdmin,n=t.type==="custom"?this.roofSection:void 0,o=this._roofWinId?(s=t.windows)==null?void 0:s.find(r=>r.id===this._roofWinId):void 0;if(o)return this.renderRoofWindowForm(o);if(n)return this.renderRoofSectionForm(n);let i=t.type==="custom"?t.sections??[]:[];return v`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?v`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:v`<div class="fp3d-room-list">
              ${i.map((r,l)=>v`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=r.id}>
                    <span>${l+1} · ${r.dormer?this.t("roof_dormer"):this.t(`roof_shape_${r.shape}`)} · ${this.m(Math.abs(r.x1-r.x0),1)} × ${this.m(Math.abs(r.z1-r.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(oo(r),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(r=>r.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){var o,i;let t=this._solarId?(o=this._doc.settings.roof.solar)==null?void 0:o.find(s=>s.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?(i=this.floor)==null?void 0:i.furniture.find(s=>s.id===this._furnitureId&&se.includes(s.type)):void 0;if(e)return v`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`;let n=ut("energy_pro");return v`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():$}${n?this.renderHologramSettings():$}${this.renderProCard()}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[],e=this.isAdmin,n=this._doc.settings.roof.hologram??Cn,o=n.place==="free",i=l=>this.change(c=>c.settings.roof.hologram={...c.settings.roof.hologram??Cn,...l}),s=(l,c)=>l.name||`${this.t("solar_field")} ${c+1}`,r=()=>{let l=-1/0,c=1/0,d=-1/0;for(let u of this._doc.floors)for(let f of u.rooms)for(let[m,g]of f.points)l=Math.max(l,m),c=Math.min(c,g),d=Math.max(d,g);let p=Number.isFinite(l);i({place:"free",x:n.x??(p?I(l+2):0),z:n.z??(p?I((c+d)/2):0),height:n.height??3})};return v`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!e} @change=${l=>l.target.value==="free"?r():i({place:"field"})}>
            <option value="field" ?selected=${!o}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${o}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${o?v`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>i({x:I(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>i({z:I(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>i({height:Math.min(60,Math.max(0,I(l)))}),.25,0)}`:t.length?v`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!e} @change=${l=>i({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${t.map((l,c)=>v`<option value=${l.id} ?selected=${l.id===n.field}>${s(l,c)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>i({right:Math.min(30,Math.max(-30,I(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>i({up:Math.min(30,Math.max(-30,I(l)))}),.25)}`:v`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>i({size:Math.min(3,Math.max(.3,I(l)))}),.1,.3)}
        ${this.num(this.t("holo_device_min_w"),n.device_min_w??0,l=>i({device_min_w:Math.max(0,Math.round(l))}),1,0)}
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_house_hint")}
          ><input type="checkbox" .checked=${n.device_house!==!1} ?disabled=${!e} @change=${l=>i({device_house:l.target.checked?void 0:!1})} />
          ${this.t("holo_device_house")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_room_hint")}
          ><input type="checkbox" .checked=${!!n.device_room} ?disabled=${!e} @change=${l=>i({device_room:l.target.checked||void 0})} />
          ${this.t("holo_device_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_plant_floor_hint")}
          ><input type="checkbox" .checked=${!!n.plant_floor} ?disabled=${!e} @change=${l=>i({plant_floor:l.target.checked||void 0})} />
          ${this.t("holo_plant_floor")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_mirror_hint")}
          ><input type="checkbox" .checked=${n.mirror!==!1} ?disabled=${!e} @change=${l=>i({mirror:l.target.checked?void 0:!1})} />
          ${this.t("holo_mirror")}</label
        >
      </div>
    </section>`}isPowerSensor(t){var n,o;if(!yt(t))return!1;let e=(o=(n=this.hass)==null?void 0:n.states[t])==null?void 0:o.attributes;return(e==null?void 0:e.device_class)==="power"||(e==null?void 0:e.unit_of_measurement)==="W"||(e==null?void 0:e.unit_of_measurement)==="kW"}devicePower(t,e){var n;return t.power&&t.power!=="none"?t.power:((n=e.get(t.id))==null?void 0:n.power)??null}renderEnergyChecklist(){let t=this._doc,e=this.hass?Te(this.hass,t.floors):new Map,n=t.floors.flatMap(h=>h.furniture.map(b=>({m:b,fl:h}))),o=h=>n.filter(b=>b.m.type===h),i=h=>{this._floorId=h.fl.id,this._solarId=null,this.selectItem("furniture",h.m.id),this.showPoint(h.m.x,h.m.z)},s=t.settings.roof.solar??[],r=o("meter"),l=o("inverter"),c=o("home_battery"),d=o("grid_point"),p=!!t.energy.grid||r.some(h=>this.devicePower(h.m,e)),u=!!t.energy.solar||l.length>0&&l.every(h=>this.devicePower(h.m,e)),f=c.every(h=>this.devicePower(h.m,e)&&h.m.soc&&h.m.soc!=="none")||!!t.energy.battery,m=ut("energy_pro"),g=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},r.length?{state:p?"ok":"todo",label:this.t(p?"chk_meter":"chk_meter_sensor"),action:()=>i(r[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:u?"ok":"todo",label:this.t(u?"chk_inverter":"chk_inverter_sensor"),action:()=>i(l.find(h=>!this.devicePower(h.m,e))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},c.length?{state:f?"ok":"todo",label:this.t(f?"chk_battery":"chk_battery_sensor"),action:()=>i(c[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},d.length?{state:"ok",label:this.t("chk_grid"),action:()=>i(d[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},...m?[{state:"ok",label:this.t("chk_pro_active")}]:[]],_=g.filter(h=>h.state==="ok").length;return v`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${_}/${g.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${g.map(h=>h.href?v`<a class="fp3d-chk fp3d-chk-${h.state}" href=${h.href} target="_blank" rel="noopener"><span>${h.state==="ok"?"\u2713":h.state==="todo"?"\u25CB":"\xB7"}</span>${h.label}</a>`:v`<button class="fp3d-chk fp3d-chk-${h.state}" ?disabled=${!this.isAdmin&&!!h.action&&h.state!=="ok"} @click=${h.action}><span>${h.state==="ok"?"\u2713":h.state==="todo"?"\u25CB":"\xB7"}</span>${h.label}</button>`)}
    </section>`}renderHelpLinks(){return v`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new?labels=enhancement" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
      </div>
    </section>`}renderProCard(){if(ut("energy_pro"))return v`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${ke("energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return v`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${ke("energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isAdmin)return;if(t==="grid_point"){let b=Ii(this._doc),[y,S,E]=oe(t),[R,z]=b?b.end:this.toWorld(this._size.w/2,this._size.h/2),M={id:B("furniture"),type:t,x:I(R),z:I(z),rotation:0,w:y,d:S,h:E,variant:null};this.change((x,w)=>w.furniture.push(M)),this.selectItem("furniture",M.id),this.showPoint(M.x,M.z);return}let n=b=>{var y,S,E;return`${b.name} ${b.area_id&&((E=(S=(y=this.hass)==null?void 0:y.areas)==null?void 0:S[b.area_id])==null?void 0:E.name)||""} ${b.area_id??""}`.toLowerCase()},o=e.rooms.filter(b=>b.points.length>=3),i=b=>o.find(y=>b.test(n(y))),s=o.find(b=>e.furniture.some(y=>y.type==="parking"&&N([y.x,y.z],b.points))),r=i(/garage|carport/)??s,l=i(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=i(/flur|diele|eingang|hall|entr|lobby/),d=(t==="wallbox"?r:t==="meter"?l??c??r:l??r)??this.room??o.sort((b,y)=>Math.abs(at(y.points))-Math.abs(at(b.points)))[0],[p,u,f]=oe(t),[m,g]=d?Lt(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[b,y]=Lt(d.points),S=null,E=new Set(e.openings.filter(M=>M.room_id===d.id).map(M=>M.edge)),R=d.points.some((M,x)=>!E.has(x));d.points.forEach((M,x)=>{if(R&&E.has(x))return;let w=d.points[(x+1)%d.points.length],k=Math.hypot(w[0]-M[0],w[1]-M[1]);if(S&&k<=S.l)return;let A=(M[0]+w[0])/2,P=(M[1]+w[1])/2,O=-(w[1]-M[1])/k,L=(w[0]-M[0])/k;(b-A)*O+(y-P)*L<0&&([O,L]=[-O,-L]),S={mx:A,mz:P,nx:O,nz:L,l:k}});let z=S;z&&([m,g]=[z.mx+z.nx*(u/2+.25),z.mz+z.nz*(u/2+.25)])}let _={id:B("furniture"),type:t,x:I(m),z:I(g),rotation:0,w:p,d:u,h:f,variant:null},h=d?mn({...e,furniture:[...e.furniture,_]},_,this._doc.settings.wall_interior):null;h&&Object.assign(_,{x:I(h.x),z:I(h.z),rotation:h.rotation}),this.change((b,y)=>y.furniture.push(_)),this.selectItem("furniture",_.id),this.showPoint(_.x,_.z)}renderEnergyDevices(){let t=this.isAdmin,e=this._doc.floors.flatMap(n=>n.furniture.filter(o=>se.includes(o.type)).map(o=>({fl:n,m:o})));return v`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${e.length?v`<div class="fp3d-room-list">
            ${e.map(({fl:n,m:o})=>v`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}}
                >
                  <span>${o.name||this.t(`furn_${o.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:$}
      <div class="fp3d-actions">
        ${se.map(n=>v`<button
            class="fp3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(t){let e=this.isAdmin,n=f=>this.updateRoofSection(f),o=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[i,s]=t.flip?[o[1],o[0]]:o,r=t.shape==="flat"||t.shape==="parapet",l=t.shape==="pent",c=f=>f.findIndex(m=>m.id===t.id)+1,d=(f,m,g,_=.05,h=0)=>this.len(f,m,b=>g(Math.max(h,I(b))),_,h),p=(f,m,g)=>this.num(f,m,_=>g(Math.max(0,I(_))),1,0),u=!!this._doc.settings.lock_plan;return v`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${t.dormer?this.t("roof_dormer"):this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${e?u?v`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:v`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:$}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!e} @change=${f=>n({shape:f.target.value})}>
            ${Ps.map(f=>v`<option value=${f} ?selected=${t.shape===f}>${this.t(`roof_shape_${f}`)}</option>`)}
          </select>
        </label>
        ${r?$:v`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${f=>n({open:f.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${r?d(this.t("roof_height"),t.eave_a,f=>n({eave_a:f,eave_b:f})):v`${d(`${this.t("roof_eave")} ${l?"":i}`,t.eave_a,f=>n({eave_a:f}))}
              ${l?$:d(`${this.t("roof_eave")} ${s}`,t.eave_b,f=>n({eave_b:f}))}
              ${p(`${this.t("roof_pitch_short")} ${l?"":i}`,t.pitch_a,f=>n({pitch_a:Math.min(75,f)}))}
              ${l?$:p(`${this.t("roof_pitch_short")} ${s}`,t.pitch_b,f=>n({pitch_b:Math.min(75,f)}))}`}
          ${d(this.t("roof_base"),t.base,f=>n({base:f}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!e}
              @change=${f=>{let m=this._doc.floors.find(h=>h.id===f.target.value);if(!m)return;let g=I(m.elevation+m.height),_=g-t.base;n({base:g,eave_a:I(t.eave_a+_),eave_b:I(t.eave_b+_)})}}
            >
              ${[...this._doc.floors].filter(f=>f.rooms.length).sort((f,m)=>m.elevation-f.elevation).map(f=>{var m;return v`<option value=${f.id} ?selected=${((m=na(this._doc,t))==null?void 0:m.id)===f.id}>${f.name}</option>`})}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,f=>n({overhang:Math.min(2,f)}),.05,0)}
        </div>
        ${r&&e?v`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${t.points?v`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:$}
            </div>
            <p class="fp3d-sub">${this.t(t.points?"roof_points_hint":"roof_outline_hint")}</p>`:$}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(oo(t),2)} · ${this.t("roof_section_hint")}</p>
        ${e?v`<div class="fp3d-actions">
              ${r?$:v`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!r&&!t.dormer&&!t.open?v`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${i}</button>
                  ${l?$:v`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:$}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:$}
      </section>`}fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(o=>o.id===n);case"opening":return t.openings.find(o=>o.id===n);case"furniture":return t.furniture.find(o=>o.id===n);case"device":return t.placements.find(o=>o.entity_id===n);case"wall":return(t.walls??[]).find(o=>o.id===n);case"outdoor":return t.outdoor.find(o=>o.id===n)}}isFixedItem(t,e){return Fo(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isAdmin||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);n||(this._fixedHint=!1),this.change((o,i)=>{let s=this.fixItem(i,t,e);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(t=>t.settings.lock_plan=!t.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(t){t.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(t.target,this.localPoint(t)))}openContext(t,e){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...e),o=m=>{var g;return((g=t.closest(`[${m}]`))==null?void 0:g.getAttribute(m))??null},i=null,s=o("data-device"),r=o("data-opening"),l=t.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),d=o("data-outdoor"),p=o("data-room")??this.roomAt(n);if(s?i=["device",s]:r?i=["opening",r]:l?i=["furniture",l]:c?i=["wall",c]:d&&!p?i=["outdoor",d]:p&&(i=["room",p]),!i){this._ctx=null;return}let[u,f]=i;this.selectItem(u,f),(u==="opening"||u==="furniture")&&(this._roomId=this._roomId??p),this._ctx={x:e[0],y:e[1],kind:u,id:f}}deleteItem(t,e){if(t==="device"){if(!this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return $;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),o=Math.max(4,Math.min(t.x,((n==null?void 0:n.clientWidth)??800)-190)),i=Math.max(4,Math.min(t.y,((n==null?void 0:n.clientHeight)??600)-190)),s=r=>()=>{this._ctx=null,r()};return v`<div class="fp3d-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${r=>r.stopPropagation()} @contextmenu=${r=>r.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?v`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:v`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?v`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:$}
      ${t.kind==="furniture"?v`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${s(()=>{var l;let r=(l=this.floor)==null?void 0:l.furniture.find(c=>c.id===t.id);r&&this.openWallViewFor(r)})}>▦ ${this.t("wall_view")}</button>`:$}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isAdmin)return $;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?v`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:$;let n=this.isFixedItem(t,e);return v`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){var n,o,i;if(this._notice=null,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._deviceId=t==="device"?e:null,t==="device"&&e){let s=(n=this.floor)==null?void 0:n.placements.find(r=>r.entity_id===e);this._roomId=(s&&this.roomAt([s.x,s.z]))??this._roomId}t==="opening"&&e&&(this._roomId=((i=(o=this.floor)==null?void 0:o.openings.find(s=>s.id===e))==null?void 0:i.room_id)??this._roomId)}get opening(){var t;return this._openingId?(t=this.floor)==null?void 0:t.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){var t;return this._furnitureId?(t=this.floor)==null?void 0:t.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,o,i){let s=t.points[e],r=t.points[(e+1)%t.points.length],l=Math.hypot(r[0]-s[0],r[1]-s[1])||1,c=((n[0]-s[0])*(r[0]-s[0])+(n[1]-s[1])*(r[1]-s[1]))/l,d=i?.01:this._doc.settings.grid,p=Math.min(o,l)/2;return I(Math.min(l-p,Math.max(p,Math.round(c/d)*d)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let o=null;for(let g of n.walls??[]){let _=Ce({room_id:"",edge:0,wall:g.id},n.rooms,n.walls??[]);if(!_)continue;let[h,b]=this.toScreen(g.a),[y,S]=this.toScreen(g.b),E=(y-h)**2+(S-b)**2||1,R=Math.min(1,Math.max(0,((e[0]-h)*(y-h)+(e[1]-b)*(S-b))/E)),z=Math.hypot(e[0]-h-(y-h)*R,e[1]-b-(S-b)*R),M=[(g.a[0]+g.b[0])/2,(g.a[1]+g.b[1])/2],x=n.rooms.find(w=>w.points.length>=3&&N(M,w.points));z<mo*2.2&&(!o||z-1<o.d)&&(o={room:_.room,edge:0,d:z-1,wall:g.id,roomId:(x==null?void 0:x.id)??g.id})}for(let g of n.rooms)for(let _=0;_<g.points.length;_++){let[h,b]=this.toScreen(g.points[_]),[y,S]=this.toScreen(g.points[(_+1)%g.points.length]),E=(y-h)**2+(S-b)**2||1,R=Math.min(1,Math.max(0,((e[0]-h)*(y-h)+(e[1]-b)*(S-b))/E)),z=Math.hypot(e[0]-h-(y-h)*R,e[1]-b-(S-b)*R),M=z-(g.id===this._roomId?.5:0);z<mo*2.2&&(!o||M<o.d)&&(o={room:g,edge:_,d:M})}if(!o)return!1;let{room:i,edge:s,wall:r}=o,l=i.points[s],c=i.points[(s+1)%i.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),p=Nn[t],u=p.type,f=I(Math.min(p.width,Math.max(.3,d-.1))),m={id:B("opening"),room_id:o.roomId??i.id,edge:s,...r?{wall:r}:{},offset:this.offsetOnEdge(i,s,this.toWorld(...e),f,!1),width:f,type:u,sill:p.sill,height:p.height,hinge:"left",leaves:p.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((g,_)=>_.openings.push(m)),this._tool="select",this.selectItem("opening",m.id),!0}setOpeningPreset(t,e){let n=Nn[e];this._openingPreset=e;let o=Bn(t)===e,i="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:i,...o?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,o)=>Object.assign(o.openings.find(i=>i.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||!this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(o=>o.id!==t)),this._openingId=null)}glowScaleField(t,e){return v`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((t??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let o=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;e(Math.abs(o-1)<.001?null:o)}}
    /></label>`}furnitureFor(t){let e=Y(t),n=[...jo.map(s=>({type:s,label:this.t(`furn_${s}`)})),...(this.packs??[]).flatMap(s=>s.items.map(r=>({type:Re(s.id,r.id),label:`${ie(r)} \xB7 ${Yt(s)}`})))],o=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,i=s=>e==="light"?zt(s):e==="climate"?s==="radiator":t.startsWith("vacuum.")?s==="robot_vacuum"||Oe(s)&&s.endsWith(":robot_vacuum"):e==="media"?Qn(s)||cn(s)&&o.test(s):cn(s)&&!zt(s);return n.filter(s=>i(s.type)).sort((s,r)=>s.label.localeCompare(r.label))}vehicleToSpot(t){if(!this.isAdmin)return;let[e,n,o]=oe("parking"),i={id:B("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,I(t.w+.5)),d:Math.max(n,I(t.d+.4)),h:o,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}};this.change((s,r)=>{r.furniture=r.furniture.filter(l=>l.id!==t.id),r.furniture.push(i)}),this.selectItem("furniture",i.id)}deviceToFurniture(t,e){if(!this.isAdmin)return;let[n,o,i]=oe(e),s={id:B("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:o,h:i,variant:null,entity:t.entity_id,name:t.name??null,...t.locked?{locked:!0}:{}};this.change((r,l)=>{l.placements=l.placements.filter(c=>c.entity_id!==t.entity_id),l.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(t){let e=t.entity;if(!this.isAdmin||!e||e==="none")return;let n={entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,...t.name?{name:t.name}:{},...e.startsWith("light.")?{pin:!0}:{}};this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==t.id),i.placements.some(s=>s.entity_id===e)||i.placements.push(n)}),this._furnitureId=null,this.selectItem("device",e)}renderAsFurniture(t){if(!this.isAdmin)return $;let e=this.furnitureFor(t.entity_id);return e.length?v`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let o=n.target.value;o&&this.deviceToFurniture(t,o)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${e.map(n=>v`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:$}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,o,i]=oe(t),s=this._doc.floors.filter(f=>f.elevation>e.elevation).sort((f,m)=>f.elevation-m.elevation)[0],r=Do.has(t)?I(s?s.elevation-e.elevation:e.height+.25):i,l=this.room,[c,d]=l?Lt(l.points):this.toWorld(this._size.w/2,this._size.h/2),p=0;if(t==="parking"&&l){let f=e.openings.find(h=>h.room_id===l.id&&h.type==="garage"),m=f?l.points[f.edge]:null,g=f?l.points[(f.edge+1)%l.points.length]:null,_=dt(l.points);p=(m&&g?Math.abs(g[1]-m[1])>Math.abs(g[0]-m[0]):_.x1-_.x0>_.z1-_.z0)?90:0}let u={id:B("furniture"),type:t,x:I(c),z:I(d),rotation:p,w:n,d:o,h:r,variant:null};this.change((f,m)=>m.furniture.push(u)),this.selectItem("furniture",u.id),this.showPoint(u.x,u.z)}snapToWall(t){return this.floor?mn(this.floor,t,this._doc.settings.wall_interior):null}updateFurniture(t){let e=this._furnitureId;this.change((n,o)=>Object.assign(o.furniture.find(i=>i.id===e),t))}mirrorFurniture(){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({mirror:!t.mirror})}rotateFurniture(t){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;!t||!this.isAdmin||!this.confirmFixedDelete("furniture",t)||(this.change((e,n)=>n.furniture=n.furniture.filter(o=>o.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:B("furniture"),x:I(t.x+.3),z:I(t.z+.3)};this.change((n,o)=>o.furniture.push(e)),this.selectItem("furniture",e.id)}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let n=new Set(t);this.change((o,i)=>{for(let r of o.floors)r.placements=r.placements.filter(l=>!n.has(l.entity_id)),r.furniture=r.furniture.filter(l=>!(zt(l.type)&&l.entity&&n.has(l.entity)));let s=[...i.placements.map(r=>[r.x,r.z]),...i.furniture.filter(r=>zt(r.type)).map(r=>[r.x,r.z])];for(let r of sr(e,t,s)){if(!r.entity_id.startsWith("light.")){i.placements.push(r);continue}let[l,c,d]=Dt.lamp_ceiling;i.furniture.push({id:B("furniture"),type:"lamp_ceiling",x:r.x,z:r.z,rotation:0,w:l,d:c,h:d,variant:null,entity:r.entity_id,power:null})}})}get device(){var t;return this._deviceId?(t=this.floor)==null?void 0:t.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,o)=>Object.assign(o.placements.find(i=>i.entity_id===e),t))}centreDevice(){var s;let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=(s=this.floor)==null?void 0:s.rooms.find(r=>r.id===e);if(!t||!n)return;let[o,i]=Lt(n.points);this.updateDevice({x:I(o),z:I(i)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(p=>Y(p.entity_id)==="light"&&(p.mount??"ceiling")==="ceiling"&&N([p.x,p.z],t.points));if(n.length<2)return;let o=dt(t.points),i=o.x1-o.x0,s=o.z1-o.z0,r=Math.max(1,Math.round(Math.sqrt(n.length*i/Math.max(.1,s)))),l=Math.ceil(n.length/r),c=n.map((p,u)=>{let f=Math.floor(u/r),m=f===l-1?n.length-r*(l-1):r,g=u-f*r;return[I(o.x0+i/m*(g+.5)),I(o.z0+s/l*(f+.5))]}),d=n.map(p=>p.entity_id);this.change((p,u)=>{d.forEach((f,m)=>Object.assign(u.placements.find(g=>g.entity_id===f),{x:c[m][0],z:c[m][1]}))})}straightenFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,fixed:n}=kr(t.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((o,i)=>i.rooms=e),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=xr(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let o=wr(n);this.change((i,s)=>{s.rooms=e,o&&(i.settings.wall_interior=o)}),this._notice=o?this.t("gaps_closed_wall",{n:n.length,t:St(this.hass,o,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(o=>o.entity_id!==t),n.furniture=n.furniture.filter(o=>!(zt(o.type)&&o.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,o=(t-1+n)%n;this.change((i,s)=>{let r=s.rooms.find(l=>l.id===e.id);r.points.splice(t,1),r.wall_heights&&r.wall_heights.splice(t,1),r.wall_thickness&&r.wall_thickness.splice(t,1),s.openings=s.openings.filter(l=>l.room_id!==e.id||l.wall||l.edge!==t&&l.edge!==o).map(l=>l.room_id===e.id&&!l.wall&&l.edge>t?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(t,e){if(!this.isAdmin||!t&&!e)return;let n=i=>[I(i[0]+t),I(i[1]+e)],o=i=>{for(let s of i.rooms)s.points=s.points.map(n);for(let s of i.furniture)s.x=I(s.x+t),s.z=I(s.z+e);for(let s of i.placements)s.x=I(s.x+t),s.z=I(s.z+e);for(let s of i.outdoor)s.points=s.points.map(n);for(let s of i.walls??[])s.a=n(s.a),s.b=n(s.b);i.background&&(i.background.x=I(i.background.x+t),i.background.z=I(i.background.z+e))};this._shiftAll?this.change(i=>{for(let s of i.floors)o(s);this.moveHouseExtras(i,n)}):this.change((i,s)=>o(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(t,e){for(let o of t.settings.roof.sections??[]){let i=[e([o.x0,o.z0]),e([o.x1,o.z0]),e([o.x1,o.z1]),e([o.x0,o.z1])];o.x0=Math.min(...i.map(s=>s[0])),o.x1=Math.max(...i.map(s=>s[0])),o.z0=Math.min(...i.map(s=>s[1])),o.z1=Math.max(...i.map(s=>s[1])),o.points&&(o.points=o.points.map(e))}for(let o of t.settings.roof.cables??[])o.points=o.points.map(e);t.energy.meter&&([t.energy.meter.x,t.energy.meter.z]=e([t.energy.meter.x,t.energy.meter.z]));let n=t.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=e([n.x,n.z]))}turnFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let e=(this._shiftAll?this._doc.floors:[t]).flatMap(c=>c.rooms.flatMap(d=>d.points));if(!e.length)return;let n=e.map(c=>c[0]),o=e.map(c=>c[1]),i=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...o)+Math.max(...o))/2,r=c=>[I(i-(c[1]-s)),I(s+(c[0]-i))],l=c=>{for(let d of c.rooms)d.points=d.points.map(r);for(let d of c.furniture)[d.x,d.z]=r([d.x,d.z]),d.rotation=(d.rotation+90)%360;for(let d of c.placements)[d.x,d.z]=r([d.x,d.z]),d.rotation=((d.rotation??0)+90)%360;for(let d of c.outdoor)d.points=d.points.map(r);for(let d of c.walls??[])d.a=r(d.a),d.b=r(d.b);c.background&&([c.background.x,c.background.z]=r([c.background.x,c.background.z]),c.background.rotation=((c.background.rotation??0)+90)%360)};this._shiftAll?this.change(c=>{for(let d of c.floors)l(d);this.moveHouseExtras(c,r)}):this.change((c,d)=>l(d))}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,o)=>Object.assign(o.rooms.find(i=>i.id===e),t))}setArea(t){var i,s,r;let e=this.room;if(!e)return;let n=t?(s=(i=this.hass)==null?void 0:i.areas)==null?void 0:s[t]:void 0,o=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(((r=this.hass)==null?void 0:r.areas)??{}).some(l=>l.name===e.name);this.updateRoom({area_id:t||null,...n&&o?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let o=dt(n.points),{x0:i,z0:s,x1:r,z1:l}=o;t==="x"&&([i,r]=[e,e+(r-i)]),t==="z"&&([s,l]=[e,e+(l-s)]),t==="w"&&e>.05&&(r=i+e),t==="d"&&e>.05&&(l=s+e),this.updateRoom({points:[[I(i),I(s)],[I(r),I(s)],[I(r),I(l)],[I(i),I(l)]]})}setPoint(t,e,n){let o=this.room;if(!o||!Number.isFinite(n))return;let i=o.points.map(s=>[...s]);i[t][e]=I(n),this.updateRoom({points:i})}async loadImage(t){this.loadingImages.add(t);try{let e=await zo(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){var d,p;let e=t.target,n=(d=e.files)==null?void 0:d[0];if(e.value="",!n)return;let o=await createImageBitmap(n),i=Math.min(1,2048/Math.max(o.width,o.height)),s=document.createElement("canvas");s.width=Math.round(o.width*i),s.height=Math.round(o.height*i),s.getContext("2d").drawImage(o,0,0,s.width,s.height);let r=s.toDataURL("image/jpeg",.85),l=B("img");await jn(this.hass,l,r),this._images={...this._images,[l]:{url:r,aspect:s.height/s.width}};let c=(p=this.floor)!=null&&p.rooms.length?dt(this.floor.rooms.flatMap(u=>u.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,I(c.x1-c.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?vt(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return v`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?v`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:$}
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","pool","hole","roof","energy"].map(n=>v`<button
                  aria-pressed=${this._tool===n}
                  ?disabled=${!t||!this.isAdmin&&n!=="select"}
                  @click=${()=>{var o;if(this._tool=n,this._draft=[],this._cursor=null,this._pipeMode=!1,this._pipeDraft=null,n==="pool"&&((o=this.outdoorArea)==null?void 0:o.type)!=="pool"){let i=t==null?void 0:t.outdoor.find(s=>s.type==="pool");i&&this.selectItem("outdoor",i.id)}this._sideOpen=n!=="select"}}
                >
                  ${this.t(`tool_${n}`)}
                </button>`)}
            </div>
            <div class="fp3d-seg">
              <button ?disabled=${!this._canUndo} @click=${()=>this.undo()} title="Ctrl+Z">${this.t("undo")}</button>
              <button ?disabled=${!this._canRedo} @click=${()=>this.redo()} title="Ctrl+Y">${this.t("redo")}</button>
              <button @click=${()=>this.fit()}>${this.t("fit")}</button>
              <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>this.toggleSplit()}>${this.t("split_3d")}</button>
              <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${n=>this.toggleWallPick(n.currentTarget)}>▦ ${this.t("wall_view")}</button>
              ${this.isAdmin?v`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:$}
            </div>
            ${this._tool==="pool"?v`<div class="fp3d-seg" role="group" aria-label=${this.t("pool_shape")}>
                    ${["rect","round","oval","free"].map(n=>v`<button
                          aria-pressed=${!this._pipeMode&&(this._poolShape??"rect")===n}
                          @click=${()=>(this._poolShape=n,this._outdoorFree=n==="free",this._pipeMode=!1,this._pipeDraft=null,this._draft=[])}
                        >
                          ${n==="rect"?"\u25AD":n==="round"?"\u25EF":n==="oval"?"\u2B2D":"\u270E"} ${this.t(`pool_shape_${n}`)}
                        </button>`)}
                  </div>
                  ${It("pool")?v`<div class="fp3d-seg" role="group">
                        <button aria-pressed=${!!this._pipeMode} title=${this.t("pool_pipe_draw_hint")} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null,this._draft=[])}>〰 ${this.t("pool_pipe_draw")}</button>
                      </div>`:$}`:$}
            ${this._tool==="outdoor"?v`<label class="fp3d-outdoor-type" title=${this.t("outdoor_draw_type_hint")}
                    >${this.t("outdoor_draw_type")}
                    <select
                      @change=${n=>{this._outdoorType=n.target.value,this._outdoorType==="pool"&&(this._outdoorFree=this._poolShape==="free"),this._draft=[]}}
                    >
                      ${Oo.filter(n=>n!=="pool").map(n=>v`<option value=${n} ?selected=${n===(this._outdoorType??"lawn")}>${this.t(`out_${n}`)}</option>`)}
                    </select></label
                  >
                  ${v`<div class="fp3d-seg" role="group" aria-label=${this.t("tool_outdoor")}>
                        <button aria-pressed=${!this._outdoorFree} @click=${()=>(this._outdoorFree=!1,this._draft=[])}>▭ ${this.t("outdoor_shape_rect")}</button>
                        <button aria-pressed=${this._outdoorFree} @click=${()=>(this._outdoorFree=!0,this._draft=[])}>✎ ${this.t("outdoor_shape_free")}</button>
                      </div>`}`:$}
            ${e!=null&&e.warnings.length?v`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:$}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint?v`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${()=>{this._phoneHint=!1;try{localStorage.setItem("neonplan3d.phoneHint","0")}catch{}}}
                  >
                    ✕
                  </button>
                </div>`:$}
            ${this.houseTool?v`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:$}
            <svg
              class="fp3d-plan fp3d-tool-${this._tool}"
              @pointerdown=${this.onPointerDown}
              @pointermove=${this.onPointerMove}
              @pointerup=${this.onPointerUp}
              @pointercancel=${this.onPointerUp}
              @pointerleave=${()=>{this.drag||(this._cursor=null)}}
              @wheel=${this.onWheel}
              @contextmenu=${this.onContextMenu}
            >
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):$}
              ${t?this.renderOutdoor(t):$} ${t?this.renderRooms(t):$} ${t?this.renderFurniture(t):$}
              ${t?this.renderFreeWalls(t):$}
              ${t&&e?this.renderOpenings(t,e.walls):$} ${t?this.renderMeter(t):$}
              ${t&&this._tool==="select"?this.renderDevices(t):$}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):$}
              ${t?this.renderOutdoorHandles(t):$}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):$}
              ${t?this.renderHeadroom(t):$}
              ${this._tool==="roof"?T`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?T`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&t&&It("pool")?this.renderPoolPlan(t):$} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${t?this._wallPick?this.t("hint_wall_pick"):this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this._outdoorFree?this.t("hint_outdoor_free"):this._tool==="pool"&&this._jointPlace?this.t("hint_joint_place"):this._tool==="pool"&&this._pipeMode?this.t(this.poolArea?this._pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool"):this._tool==="pool"&&It("pool")?this.t("hint_pool_tech"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?v`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:$}
          ${this._split?this.render3d():$}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}renderBackground(t){let e=t==null?void 0:t.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return $;let[o,i]=this.toScreen([e.x,e.z]),s=e.width*this._view.scale,r=s*n.aspect,l=e.rotation??0,c=this.bgHandles();return T`<g transform="rotate(${l} ${o+s/2} ${i+r/2})">
      <image href=${n.url} x=${o} y=${i} width=${s} height=${r} opacity=${e.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
      ${c?T`<rect class="fp3d-bg-frame" x=${o} y=${i} width=${s} height=${r} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${o+s} cy=${i+r} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${o+s/2} y1=${i} x2=${o+s/2} y2=${i-30} />
            <circle cx=${o+s/2} cy=${i-30} r="16" class="fp3d-hit" />
            <circle cx=${o+s/2} cy=${i-30} r="8" />
            <path d="M${o+s/2-4} ${i-31}a4 4 0 1 1 2 3.5" />
          </g>`:$}
    </g>${this.renderBgRuler()}`}bgHandles(){var t;return!!((t=this.floor)!=null&&t.background)&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){var n;let t=(n=this._bgLevel)!=null&&n.length?this._bgLevel:this._bgRuler;if(!(t!=null&&t.length))return $;let e=t.map(o=>this.toScreen(o));return T`<g class="fp3d-bg-ruler">
      ${e.length===2?T`<line x1=${e[0][0]} y1=${e[0][1]} x2=${e[1][0]} y2=${e[1][1]} />`:$}
      ${e.map(([o,i])=>T`<circle cx=${o} cy=${i} r="6" />`)}
    </g>`}applyBgLevel(t,e){var f;let n=(f=this.floor)==null?void 0:f.background,o=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!o||Math.hypot(e[0]-t[0],e[1]-t[1])<.05)return;let i=Math.atan2(e[1]-t[1],e[0]-t[0]),s=Math.round(i/(Math.PI/2))*(Math.PI/2)-i;if(Math.abs(s)<1e-4)return;let r=n.width*o.aspect,l=[n.x+n.width/2,n.z+r/2],c=l[0]-t[0],d=l[1]-t[1],p=[t[0]+c*Math.cos(s)-d*Math.sin(s),t[1]+c*Math.sin(s)+d*Math.cos(s)],u=(n.rotation??0)+s*180/Math.PI;u=Math.round((((u+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:u,x:I(p[0]-n.width/2),z:I(p[1]-r/2)}})}applyBgRuler(t){let e=this.floor,n=e==null?void 0:e.background,o=this._bgRuler,i=n?this._images[n.image_id]:void 0;if(!n||!i||!o||o.length<2||!(t>0))return;let s=Math.hypot(o[1][0]-o[0][0],o[1][1]-o[0][1]);if(s<1e-4)return;let r=t/s,l=n.width*i.aspect,c=[n.x+n.width/2,n.z+l/2],d=o[0],p=[d[0]+r*(c[0]-d[0]),d[1]+r*(c[1]-d[1])],u=n.width*r,f=l*r;this.updateFloor({background:{...n,width:I(u),x:I(p[0]-u/2),z:I(p[1]-f/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(t,e,n){let o=t.width*n,i=t.x+t.width/2,s=t.z+o/2,r=-(t.rotation??0)*Math.PI/180,l=e[0]-i,c=e[1]-s;return[i+l*Math.cos(r)-c*Math.sin(r)-t.x,s+l*Math.sin(r)+c*Math.cos(r)-t.z]}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,o=t>=90?.1:t>=30?.5:1,i=t>=20?1:5,[s,r]=this.toWorld(0,0),[l,c]=this.toWorld(e,n),d=[],p=(m,g)=>{for(let _=Math.ceil(s/m)*m;_<=l;_+=m){let h=this.toScreen([_,0])[0];d.push(T`<line class=${g} x1=${h} y1="0" x2=${h} y2=${n} />`)}for(let _=Math.ceil(r/m)*m;_<=c;_+=m){let h=this.toScreen([0,_])[1];d.push(T`<line class=${g} x1="0" y1=${h} x2=${e} y2=${h} />`)}};o<i&&p(o,"fp3d-grid-minor"),p(i,"fp3d-grid-major");let[u,f]=this.toScreen([0,0]);return d.push(T`<circle class="fp3d-origin" cx=${u} cy=${f} r="3" />`),T`<g pointer-events="none">${d}</g>`}renderGhost(){var n;let t=((n=this._doc)==null?void 0:n.floors.findIndex(o=>o.id===this._floorId))??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?T`<g pointer-events="none">${e.rooms.map(o=>T`<polygon class="fp3d-ghost" points=${o.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:$}renderWalls(t){var n;let e=((n=this.floor)==null?void 0:n.height)??2.5;return T`<g pointer-events="none">${t.map(o=>{let i=o.height!==void 0&&o.height<e-.01,s=`fp3d-wall${o.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return T`<polygon class=${s} points=${o.footprint.map(r=>this.toScreen(r).join(",")).join(" ")} />`})}</g>`}edgeParts(t,e){let n=this.floor;if(!n)return[0];let i=vt(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(r=>r.room_id===t.id&&r.edge===e).map(r=>r.t0));return i.length?[...new Set(i)].sort((s,r)=>s-r):[0]}setEdgeHeight(t,e,n,o){let i=this.floor;if(!i||!this.isAdmin)return;if(o!==void 0){let l=this.edgeParts(t,e).length;this.change((c,d)=>{let p=d.rooms.find(g=>g.id===t.id);if(!p)return;let u=(p.wall_heights??[]).slice(0,p.points.length);for(;u.length<p.points.length;)u.push(null);let f=u[e],m=Array.isArray(f)?[...f]:new Array(l).fill(typeof f=="number"?f:null);for(;m.length<l;)m.push(null);m[o]=n,u[e]=m.every(g=>g===m[0])?m[0]:m,p.wall_heights=u.every(g=>g===null)?void 0:u});return}let r=vt(i.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},i.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===t.id&&c.edge===e)).flatMap(l=>l.sources);r.some(l=>l.room_id===t.id&&l.edge===e)||r.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((l,c)=>{for(let d of r){let p=c.rooms.find(f=>f.id===d.room_id);if(!p)continue;let u=(p.wall_heights??[]).slice(0,p.points.length);for(;u.length<p.points.length;)u.push(null);u[d.edge]=n,p.wall_heights=u.every(f=>f===null)?void 0:u}})}renderCameraDetections(t){if(!this.hass)return $;let e=this.hass,n=qr(e,t),o=[...new Set(n.map(s=>Br(e,s)))],i=ut("camera_cockpit");return v`<p class="fp3d-sub fp3d-wide">
      ${n.length?v`${i?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:o.map(s=>this.t(`detect_${s}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(t,e,n){if(!this.isAdmin)return;let o=t.points,i=Math.hypot(o[(e+1)%o.length][0]-o[e][0],o[(e+1)%o.length][1]-o[e][1]),s=this.edgeParts(t,e),r=n===void 0?0:s[n],l=n===void 0?i:s[n+1]??i;if(l-r<.4)return;let c=Math.round((r+l)/2*100)/100;this.change((d,p)=>{var g;let u=p.rooms.find(_=>_.id===t.id);if(!u)return;let f=(u.wall_splits??[]).slice(0,u.points.length);for(;f.length<u.points.length;)f.push(null);f[e]=[...f[e]??[],c].sort((_,h)=>_-h),u.wall_splits=f;let m=(g=u.wall_heights)==null?void 0:g[e];if(Array.isArray(m)){let _=n??0;m.splice(_+1,0,m[_]??null)}})}moveSplit(t,e,n,o){let i=t.points,s=Math.hypot(i[(e+1)%i.length][0]-i[e][0],i[(e+1)%i.length][1]-i[e][1]),r=this.edgeParts(t,e).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(s-.1,Math.round(o*100)/100));r.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{var m;let p=d.rooms.find(g=>g.id===t.id),u=(m=p==null?void 0:p.wall_splits)==null?void 0:m[e];if(!u)return;let f=u.findIndex(g=>Math.abs(g-n)<.001);f>=0&&(u[f]=l),u.sort((g,_)=>g-_)})}joinSplit(t,e,n,o){this.change((i,s)=>{var d,p;let r=s.rooms.find(u=>u.id===t.id);if(!((d=r==null?void 0:r.wall_splits)!=null&&d[e]))return;let l=r.wall_splits[e].filter(u=>Math.abs(u-n)>.001);r.wall_splits[e]=l.length?l:null,r.wall_splits.every(u=>!u)&&(r.wall_splits=void 0);let c=(p=r.wall_heights)==null?void 0:p[e];Array.isArray(c)&&(c.splice(o,1),c.every(u=>u===c[0])&&(r.wall_heights[e]=c[0]??null))})}renderSplitMarks(t){let e=t.points;return T`${(t.wall_splits??[]).flatMap((n,o)=>{if(!n||o>=e.length)return[];let i=e[o],s=e[(o+1)%e.length],r=Math.hypot(s[0]-i[0],s[1]-i[1])||1,l=(s[0]-i[0])/r,c=(s[1]-i[1])/r;return n.map(d=>{let[p,u]=this.toScreen([i[0]+l*d,i[1]+c*d]);return T`<line class="fp3d-split-mark" x1=${p-c*7} y1=${u+l*7} x2=${p+c*7} y2=${u-l*7} />`})})}`}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length,o=this._doc.settings,i=new Set;for(let r of vt(this.floor.rooms,{exterior:o.wall_exterior,interior:o.wall_interior},this.floor.walls??[]).walls)if(r.exterior)for(let l of r.sources)l.room_id===t.id&&i.add(l.edge);let s=(r,l)=>this.change((c,d)=>{let p=d.rooms.find(f=>f.id===t.id);if(!p)return;let u=(p.wall_thickness??[]).slice(0,p.points.length);for(;u.length<p.points.length;)u.push(null);u[r]=l,p.wall_thickness=u.every(f=>f===null)?void 0:u});return v`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${t.points.flatMap((r,l)=>{var _;let c=t.points[(l+1)%n],d=Math.hypot(c[0]-r[0],c[1]-r[1]),p=((_=t.wall_heights)==null?void 0:_[l])??null,u=()=>this._edgeHi=l,f=()=>this._edgeHi=null,m=this.edgeParts(t,l);return(m.length>1?m.map((h,b)=>b):[void 0]).map(h=>{var E,R,z;let b=h===void 0?Array.isArray(p)?p[0]??null:p:Array.isArray(p)?p[h]??null:p,y=h===void 0?d:(m[h+1]??d)-m[h],S=M=>this.setEdgeHeight(t,l,M,h);return v`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${b!==null?" fp3d-edge-low":""}"
            @mouseenter=${u}
            @mouseleave=${f}
            @focusin=${u}
            @focusout=${f}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${h===void 0?"":` \xB7 ${this.t("wall_part",{n:h+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(y,2)}</span
              ></span
            >
            ${b===0?v`<span class="fp3d-muted">${this.t("wall_none")}</span>`:this.len(this.t("wall_height"),b??e,M=>S(M>=e-.005?null:Math.max(.05,M)),.05,.05)}
            ${this.isAdmin&&b!==null?v`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>S(null)}>↥</button>`:$}
            ${this.isAdmin&&b!==0?v`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>S(0)}>${this.t("wall_none")}</button>`:$}
            ${this.isAdmin&&y>=.4?v`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(t,l,h)}>✂</button>`:$}
            ${(h===void 0||h===0)&&b!==0?v`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(t.id,l)}>▦</button>`:$}
            ${(h===void 0||h===0)&&b!==0?v`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),((E=t.wall_thickness)==null?void 0:E[l])??(i.has(l)?o.wall_exterior:o.wall_interior),M=>{let x=i.has(l)?o.wall_exterior:o.wall_interior,w=Math.min(1.5,Math.max(.02,Math.round(M*1e3)/1e3));s(l,Math.abs(w-x)<5e-4?null:w)},.01,.02)}
                  ${this.isAdmin&&((R=t.wall_thickness)==null?void 0:R[l])!=null?v`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:$}</span
                >`:$}
            ${h!==void 0&&h>0&&(((z=t.wall_splits)==null?void 0:z[l])??[]).some(M=>Math.abs(M-m[h])<.001)?v`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),m[h],M=>this.moveSplit(t,l,m[h],M),.05,.1)}
                  ${this.isAdmin?v`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(t,l,m[h],h)}>⨉</button>`:$}</span
                >`:$}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!e||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return $;if(e.pool_shape){let n=dt(e.points),o=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return T`${o.map((i,s)=>{let[r,l]=this.toScreen(i);return T`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${e.id}:${s}`}><circle cx=${r} cy=${l} r="16" class="fp3d-hit" /><rect x=${r-5} y=${l-5} width="10" height="10" /></g>`})}`}return T`${e.points.map((n,o)=>{let[i,s]=this.toScreen(n);return T`<g class="fp3d-vertex" data-out-vertex=${`${e.id}:${o}`}><circle cx=${i} cy=${s} r="16" class="fp3d-hit" /><circle cx=${i} cy=${s} r="6" /></g>`})}`}renderOutdoor(t){return T`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[o,i]=this.toScreen(Lt(e.points)),s=dt(e.points),r=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return T`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${r?T`<text x=${o} y=${i+4}>${this.t(`out_${e.type}`)}</text>`:$}
      </g>`})}</g>`}renderOutdoorForm(t){let e=this.isAdmin,n=Un(t.points),o=dt(t.points),i=(s,r)=>{let{x0:l,z0:c,x1:d,z1:p}=o;s==="x"&&([l,d]=[r,r+(d-l)]),s==="z"&&([c,p]=[r,r+(p-c)]),s==="w"&&(d=l+Math.max(.1,r)),s==="d"&&(p=c+Math.max(.1,r)),this.updateOutdoor({points:[[l,c],[d,c],[d,p],[l,p]].map(([u,f])=>[I(u),I(f)])})};return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${Oo.map(s=>v`<option value=${s} ?selected=${s===t.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?v`${this.len(this.t("x"),o.x0,s=>i("x",s))} ${this.len(this.t("z"),o.z0,s=>i("z",s))}
            ${this.len(this.t("width"),o.x1-o.x0,s=>i("w",s),.01,.1)} ${this.len(this.t("depth"),o.z1-o.z0,s=>i("d",s),.01,.1)}`:$}
        ${Lo(t.type)?this.len(this.t("outdoor_height"),t.height??Dn[t.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,I(s)))}),.05,.1):t.type==="balcony"?this.len(this.t("balcony_rail"),t.height??1,s=>this.updateOutdoor({height:Math.min(2,Math.max(.4,I(s)))}),.05,.4):$}
        ${this.len(this.t("outdoor_offset"),t.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,I(s)))||null}),.05)}
        ${t.type!=="pool"?v`${this.len(this.t("outdoor_slope"),t.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,I(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!e} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${zs.map(s=>v`<option value=${s} ?selected=${s===(t.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:$}
        ${t.type==="pool"?this.renderPoolShape(t):$}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${t.outline!==!1} ?disabled=${!e} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${t.type==="fence"||t.type==="pergola"?v`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:$}
        ${t.type==="pergola"?v`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.bracing} ?disabled=${!e} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!t.cut} ?disabled=${!e} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${t.slope?v`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:$}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${t.type==="pool"?this.renderPoolPro(t):$}
      ${e?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:$}
    </section>`}openWallView(t,e,n=null){this._wallView={roomId:t,edge:e},this._wallSel=n,this.wallDrag=null}openWallViewFor(t){let e=this.floor;if(!e)return;let n=e.rooms.find(s=>s.points.length>=3&&N([t.x,t.z],s.points));if(!n)return;let o=-1,i=1/0;n.points.forEach((s,r)=>{let l=n.points[(r+1)%n.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1])||1,d=Math.max(0,Math.min(1,((t.x-s[0])*(l[0]-s[0])+(t.z-s[1])*(l[1]-s[1]))/(c*c))),p=Math.hypot(t.x-(s[0]+(l[0]-s[0])*d),t.z-(s[1]+(l[1]-s[1])*d));p<i&&(i=p,o=r)}),o>=0&&this.openWallView(n.id,o,t.id)}openRoomWalls(t){let e=this.floor;if(!e)return;let n=0,o=-1;t.points.forEach((i,s)=>{let r=Xn(He(t,s),e,t).length;r>o&&(o=r,n=s)}),this.openWallView(t.id,n)}setWallView3d(t){this._wallView3d=t,this.wall3dKey="";try{localStorage.setItem("neonplan3d.wall3d",t?"1":"0")}catch{}}setupWall3d(t,e,n){let o=`${e.id}|${n}`;if(this.wall3dKey===o&&this.wall3dEl===t)return;let i=this.wall3dEl!==t;this.wall3dKey=o,this.wall3dEl=t,i&&t.addEventListener("pointerdown",s=>this.runDown3d(s),{capture:!0}),(async()=>{var f;let s;for(let m=0;m<120&&!(s=t.viewer);m++)await new Promise(g=>setTimeout(g,50));i&&await new Promise(m=>setTimeout(m,250));let r=this.floor;if(!s||!r||this.wall3dKey!==o)return;if(!s.__npWall){s.__npWall=!0,s.updateWalls=function(){for(let g of this.floors)g.mask.standing.value=65535,g.mask.glass.value=0},s.labels.style.display="none";let m=new CSSStyleSheet;m.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),t.shadowRoot&&(t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,m]),s.camera.fov=58,s.camera.updateProjectionMatrix(),s.controls.minRadius=.6,s.controls.leftDragTurns=!1}let l=He(e,n),c=Math.max(1.5,...e.points.map(m=>pt(l,m).d)),d=le(l,l.length/2,0),p=r.elevation+(((f=s.floorMap.get(r.id))==null?void 0:f.y)??0)+1.15;s.controls.maxRadius=Math.max(1.4,c-.25);let u=s.getView();u.target.set(d[0],p,d[1]),s.flyTo({...u,radius:Math.max(1.2,Math.min(c*.8,c-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},i?0:650),s.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let t=()=>{var f,m;this.liftRaf=0;let e=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!(e!=null&&e.isConnected)||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(t),!n))return;let o=this.floor,i=this._wallSel?o==null?void 0:o.furniture.find(g=>g.id===this._wallSel):void 0,s=e.viewer;if(!i||!o||!s||!Le(i)||i.locked){n.hidden=!0;return}let r=At(o,i),l=o.elevation+(((f=s.floorMap.get(o.id))==null?void 0:f.y)??0)+r+i.h,c=s.camera.position.clone().set(i.x,l+.12,i.z).project(s.camera);if(c.z>1){n.hidden=!0;return}n.hidden=!1;let d=e.getBoundingClientRect(),p=((m=n.offsetParent)==null?void 0:m.getBoundingClientRect())??d;n.style.transform=`translate(${d.left-p.left+(c.x+1)/2*d.width}px, ${d.top-p.top+(1-c.y)/2*d.height}px)`;let u=n.querySelector("b");u&&(u.textContent=this.m(Math.round(r*100)/100,2))};this.liftRaf=requestAnimationFrame(t)}liftDown(t){let e=this.floor,n=this._wallSel?e==null?void 0:e.furniture.find(d=>d.id===this._wallSel):void 0,o=this.wall3dEl,i=o==null?void 0:o.viewer;if(!e||!n||!i||!this.isAdmin)return;t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId);let s=Math.hypot(i.camera.position.x-n.x,i.camera.position.z-n.z)||1,r=this.wall3dEl.clientHeight||1,l=e.rooms.find(d=>d.points.length>=3&&N([n.x,n.z],d.points)),c=Math.max(e.height,(l==null?void 0:l.ceiling_height)??0);this.lift={id:n.id,y:At(e,n),startY:t.clientY,perPx:2*s*Math.tan(i.camera.fov*Math.PI/360)/r,base:this._doc,top:Math.max(0,c-n.h),moved:!1}}liftMove(t){var s;let e=this.lift,n=this._wallView?(s=this.floor)==null?void 0:s.rooms.find(r=>r.id===this._wallView.roomId):void 0;if(!e||!n)return;let o=(e.startY-t.clientY)*e.perPx;if(!e.moved&&Math.abs(t.clientY-e.startY)<3)return;e.moved=!0;let i=Math.min(e.top,Math.max(0,Math.round((e.y+o)*100)/100));this.moveOnWall(He(n,this._wallView.edge),e.id,0,i,e.base,!1)}liftUp(){let t=this.lift;this.lift=null,t!=null&&t.moved&&this.pushHistory(t.base)}wallPickTip=[0,0];toggleWallPick(t){var o;let e=(o=t.closest(".fp3d-toolbar"))==null?void 0:o.getBoundingClientRect(),n=t.getBoundingClientRect();this.wallPickTip=e?[n.left-e.left+n.width/2,n.bottom-e.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(t){let e=this.floor;if(!e)return;let n=null;for(let o of e.rooms){if(o.points.length<3)continue;let i=N(t,o.points)?-.25:0;o.points.forEach((s,r)=>{let l=o.points[(r+1)%o.points.length],c=(l[0]-s[0])**2+(l[1]-s[1])**2||1,d=Math.max(0,Math.min(1,((t[0]-s[0])*(l[0]-s[0])+(t[1]-s[1])*(l[1]-s[1]))/c)),p=Math.hypot(t[0]-(s[0]+(l[0]-s[0])*d),t[1]-(s[1]+(l[1]-s[1])*d));p<.6&&(!n||p+i<n.d)&&(n={room:o,edge:r,d:p+i})})}if(!n){let o=e.rooms.find(i=>i.points.length>=3&&N(t,i.points));if(!o)return;this._wallPick=!1,this.openRoomWalls(o);return}this._wallPick=!1,this.openWallView(n.room.id,n.edge)}turnOnWall(t,e){let n=this._doc.settings.wall_interior;this.change((o,i)=>{let s=i.furniture.find(c=>c.id===t);if(!s)return;s.rotation=Math.round((e%360+360)%360);let[r,l]=li(i,s,s.x,s.z,n,.6);Object.assign(s,{x:r,z:l})})}moveFromWall(t,e,n){this.change((o,i)=>{let s=i.furniture.find(r=>r.id===e);s&&(s.x=Math.round((s.x+t.n[0]*n)*1e3)/1e3,s.z=Math.round((s.z+t.n[1]*n)*1e3)/1e3)})}moveOnWall(t,e,n,o,i=this._doc,s=!0){this.change((r,l)=>{let c=l.furniture.find(d=>d.id===e);c&&(Object.assign(c,Mr(t,c,n)),o!==null&&(c.mount_y=Math.round(Math.min(Li,Math.max(0,o))*1e3)/1e3))},i,s)}wallTurn(t,e){let n=Math.atan2(-t.n[0],t.n[1])*180/Math.PI;return((e.rotation-n)%360+360)%360}wallPicKey(t,e){return`${e.type}|${e.w}|${e.d}|${e.h}|${e.variant??""}|${Math.round(this.wallTurn(t,e))}`}async askWallPics(t,e){let n=e.filter(o=>!this.wallPicsAsked.has(this.wallPicKey(t,o)));if(n.length){for(let o of n)this.wallPicsAsked.add(this.wallPicKey(t,o));try{let o=await Ri();for(let i of n){let s=o.furnitureFront({type:i.type,w:i.w,d:i.d,h:i.h,variant:i.variant,lamp:qo[i.type]??null},this.wallTurn(t,i),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(t,i),s)}}catch{}this._wallPicTick++}}renderWallView(){var j;let t=this._wallView,e=this.floor,n=t?e==null?void 0:e.rooms.find(F=>F.id===t.roomId):void 0;if(!t||!e||!n||t.edge>=n.points.length)return $;let o=n.points.length,i=He(n,t.edge),s=i.length,r=Math.max(e.height,n.ceiling_height??0),l=Xn(i,e,n),c=ci(i,e),d=F=>i.rightward?F:s-F,p=(F,V)=>[Math.min(d(F),d(V)),Math.abs(V-F)],u=F=>r-F,f=this.isAdmin,m=this._wallSel?e.furniture.find(F=>F.id===this._wallSel):void 0,g=m?l.find(F=>F.id===m.id)??(()=>{let F=Ht(m).map(H=>pt(i,H)),V=At(e,m);return{kind:"furniture",id:m.id,s0:Math.min(...F.map(H=>H.s)),s1:Math.max(...F.map(H=>H.s)),y0:V,y1:V+m.h,d:Math.min(...F.map(H=>H.d))}})():null,_=!!m&&Le(m),h=F=>this.m(F,2),b=F=>{let V=F.currentTarget.closest("svg"),H=V.createSVGPoint();return H.x=F.clientX,H.y=F.clientY,H.matrixTransform(V.getScreenCTM().inverse())},y=F=>[0,s,...l.filter(V=>V.id!==F).flatMap(V=>[V.s0,V.s1]),...c.flatMap(V=>[V.s0,V.s1])],S=(F,V)=>{if(!f)return;F.stopPropagation();let H=l.find(q=>q.id===V),C=e.furniture.find(q=>q.id===V),W=b(F);F.currentTarget.closest("svg").setPointerCapture(F.pointerId),this.wallDrag={id:V,x:W.x,y:W.y,base:this._doc,s0:H.s0,y0:H.y0,lift:!!C&&Le(C),moved:!1},this._wallSel=V,this._runSel=null},E=F=>{let V=this.wallDrag;if(!V)return;let H=b(F),C=H.x-V.x,W=V.y-H.y;if(!V.moved&&Math.hypot(C,W)<.02)return;V.moved=!0;let q=l.find(_t=>_t.id===V.id),K=q?q.s1-q.s0:0,J=V.s0+(i.rightward?C:-C);if(J=Math.round(J*100)/100,!F.altKey)for(let _t of y(V.id))Math.abs(J-_t)<.04?J=_t:Math.abs(J+K-_t)<.04&&(J=_t-K);let ht=V.lift?Math.round((V.y0+W)*100)/100:null;this.moveOnWall(i,V.id,J-V.s0,ht,V.base,!1)},R=()=>{let F=this.wallDrag;this.wallDrag=null,F!=null&&F.moved&&this.pushHistory(F.base)},z=F=>{if(this._runMode&&(F.key==="Escape"||F.key==="Enter")){F.preventDefault(),F.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(F.key==="Escape"){this._wallView=null;return}if(!g&&(F.key==="ArrowLeft"||F.key==="ArrowRight")){F.preventDefault(),A(F.key==="ArrowLeft"?w:x);return}if(!g||!f||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(F.key)||F.target.closest("input, select, textarea"))return;F.preventDefault();let V=F.shiftKey?.1:.01,H=F.key==="ArrowRight"?V:F.key==="ArrowLeft"?-V:0,C=i.rightward?H:-H,W=F.key==="ArrowUp"?V:F.key==="ArrowDown"?-V:0;this.moveOnWall(i,g.id,C,_&&W?g.y0+W:null)},M=g?(()=>{let[F,V]=p(g.s0,g.s1),H=u(g.y0),C=Math.min(r+.25,u(0)+.25);return T`<g class="fp3d-wv-dims">
            ${F>.03?T`<line x1="0" y1=${C} x2=${F} y2=${C} /><text x=${F/2} y=${C-.05}>${h(F)}</text>`:$}
            ${s-F-V>.03?T`<line x1=${F+V} y1=${C} x2=${s} y2=${C} /><text x=${F+V+(s-F-V)/2} y=${C-.05}>${h(s-F-V)}</text>`:$}
            ${g.y0>.03?T`<line x1=${F+V/2} y1=${H} x2=${F+V/2} y2=${r} /><text x=${F+V/2+.05} y=${(H+r)/2} class="fp3d-wv-up">${h(g.y0)}</text>`:$}
          </g>`})():$,x=(t.edge+(i.rightward?1:-1)+o)%o,w=(t.edge+(i.rightward?-1:1)+o)%o,k=F=>this.t("wall_n",{a:F+1,b:(F+1)%o+1}),A=F=>this.openWallView(n.id,F);this._wallPicTick,this.askWallPics(i,l.map(F=>e.furniture.find(V=>V.id===F.id)).filter(F=>!!F));let P=Math.max(.09,Math.min(.16,s/40)),O=this.canLayRuns?this.runPool:void 0,L=this.runCtx3d=O?{frame:i,floor:e,room:n,key:`${n.id}|${t.edge}`,L:s,H:r,gap:(De(e,n.id,i.a,i.b)?this._doc.settings.wall_interior/2:0)+Va,runs:Rr(i,(((j=O.pool)==null?void 0:j.pipes)??[]).filter(F=>F.floor_id===e.id),rt(this._doc,e,O)),pool:O,pt:F=>{let V=b(F);return{s:i.rightward?V.x:s-V.x,y:r-V.y}}}:null;return v`<div class="fp3d-wv-veil" @click=${F=>F.target===F.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${z}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${k(w)}`} @click=${()=>A(w)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:t.edge+1,b:(t.edge+1)%o+1})} · ${this.m(s,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${k(x)}`} @click=${()=>A(x)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${L&&f?v`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:$}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(i,n,L)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${k(w)}`} @click=${()=>A(w)}>‹<small>${k(w)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${k(x)}`} @click=${()=>A(x)}>›<small>${k(x)}</small></button>
        ${this._wallView3d?v`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${cs(F=>F&&this.setupWall3d(F,n,t.edge))}
              .hass=${this.hass}
              .building=${this._doc3d}
              .floorId=${this._floorId}
              .roomId=${null}
              .wallMode=${"auto"}
              .explode=${!1}
              .markerMode=${"none"}
              .heatMode=${"none"}
              .theme=${"neon"}
              .packs=${this.packs}
              .showEnergy=${!1}
              .holograms=${!1}
              .flows=${!1}
              ?furnish=${f}
              .furnishTypes=${null}
              .selectedFurniture=${this._wallSel}
              .quality=${"auto"}
              .floorThumbs=${!1}
              .roomLabels=${!1}
              .floorStack=${"single"}
              .panelOpen=${!1}
              .alerts=${!1}
              .scenes=${!1}
              .central=${!1}
              @furniture-select=${F=>this._wallSel=F.detail.id}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${F=>this.liftDown(F)} @pointermove=${F=>this.liftMove(F)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:v`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""}"
          viewBox="${-.5} ${-.35} ${s+1} ${r+.9}"
          preserveAspectRatio="xMidYMid meet"
          @pointerdown=${F=>{L&&this._runMode?this.runDown(F,L):this._runSel&&(this._runSel=null)}}
          @pointermove=${F=>{if(E(F),L&&this.jointDrag)this.jointMove(F,L);else if(L&&this.fitDrag)this.fittingMove(F,L);else if(L&&this.runDrag)this.runPointMove(F,L);else if(L&&this._runMode==="draw"&&this._runDraft){let V=L.pt(F);this.runHover=[V.s,V.y],this.requestUpdate()}}}
          @pointerup=${()=>{R(),this.runPointUp(),this.fittingUp(L);let F=this.jointDrag;this.jointDrag=null,F!=null&&F.moved?this.pushHistory(F.base):F&&L&&this.openCard(L.pool.id,`joint:${F.id}`)}}
          @pointercancel=${()=>{R(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${P}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${s} height=${r} />
          ${Array.from({length:Math.floor(r/.5)},(F,V)=>T`<line class="fp3d-wv-grid" x1="0" x2=${s} y1=${u((V+1)*.5)} y2=${u((V+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${u((V+1)*.5)+.03}>${((V+1)*.5).toFixed(1)}</text>`)}
          ${c.map(F=>{let[V,H]=p(F.s0,F.s1),C=e.openings.find(q=>q.id===F.id),W=(C==null?void 0:C.type)==="window"?this.t("opening_window"):(C==null?void 0:C.type)==="garage"?this.t("opening_garage"):this.t("opening_door");return T`<rect class="fp3d-wv-hole ${(C==null?void 0:C.type)==="window"?"fp3d-wv-window":""}" x=${V} y=${u(F.y1)} width=${H} height=${F.y1-F.y0} />
              ${H>P*3.5?T`<text class="fp3d-wv-hole-label" x=${V+H/2} y=${u(F.y1)+P*1.3} style="font-size:${P*.85}px">${W}</text>`:$}`})}
          ${l.map(F=>{let[V,H]=p(F.s0,F.s1),C=e.furniture.find(ht=>ht.id===F.id),W=C.name||ze(this.hass,C.type),q=F.y1-F.y0,K=this.wallPics.get(this.wallPicKey(i,C)),J=d(pt(i,[C.x,C.z]).s);return T`<g class="fp3d-wv-item ${K?"fp3d-wv-pic":""} ${F.id===this._wallSel?"fp3d-wv-sel":""}" @pointerdown=${ht=>S(ht,F.id)} @dblclick=${()=>{this._wallView=null,this.selectItem("furniture",F.id)}}>
              ${K?T`<image href=${K.url} x=${J+K.x0} y=${u(F.y0+K.y1)} width=${K.x1-K.x0} height=${K.y1-K.y0} preserveAspectRatio="none" />`:$}
              <rect x=${V} y=${u(F.y1)} width=${H} height=${Math.max(.02,q)}><title>${W}</title></rect>
              ${!K&&H>P*3&&q>P*1.4?T`<text x=${V+H/2} y=${u(F.y1)+Math.min(q/2,P*1.6)+P*.35} style="font-size:${P}px">${W}</text>`:$}
            </g>`})}
          ${M}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${s+.3} y1=${r} y2=${r} />
          ${L?this.renderRuns(L,d,u):$}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${L&&(this._runMode||this._runSel&&!g)?this.renderRunFoot(L):g&&m?v`<b>${m.name||ze(this.hass,m.type)}</b>
                ${this.fixButton("furniture",g.id)}
                ${L&&Ot.includes(m.type)?v`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(L.pool.id,`dev:${m.id}`)}>${this.t("card_open")}</button>`:$}
                ${m.locked&&f?v`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:$}
                ${this.len(this.t("wall_view_left"),Math.round(p(g.s0,g.s1)[0]*1e3)/1e3,F=>{let V=F-p(g.s0,g.s1)[0];this.moveOnWall(i,g.id,i.rightward?V:-V,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,g.d)*1e3)/1e3,F=>this.moveFromWall(i,g.id,F-g.d),.01,0)}
                ${_?this.len(this.t("mount_height"),Math.round(g.y0*1e3)/1e3,F=>this.moveOnWall(i,g.id,0,F),.01,0):v`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${f&&!m.locked?v`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(m.id,m.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),m.rotation,F=>this.turnOnWall(m.id,F),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(m.id,m.rotation+45)}>↻ 45°</button>
                    </span>`:$}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",g.id)}}>${this.t("wall_view_form")}</button>`:v`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
        </div>
      </div>
    </div>`}addOnWall(t,e,n){let o=this.floor;if(!o||!this.isAdmin)return;let[i,s,r]=oe(t),l=[...Xn(e,o,n).map(g=>[g.s0,g.s1]),...ci(e,o).filter(g=>g.y0<.05).map(g=>[g.s0,g.s1])],c=Math.max(0,e.length/2-i/2);for(let g=.1;g+i<=e.length-.05;g+=.05)if(!l.some(([_,h])=>g<h+.05&&g+i>_-.05)){c=g;break}let d=De(o,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,[p,u]=le(e,c+i/2,d+s/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),m={id:B("furniture"),type:t,x:I(p),z:I(u),rotation:f,w:i,d:s,h:r,variant:null};this.change((g,_)=>_.furniture.push(m)),this._runSel=null,this._runMode=null,this._wallSel=m.id}renderWallKit(t,e,n){let o=!!n,i=ut("energy_pro");if(!this.isAdmin||!o&&!i)return $;let s=l=>v`<button class="fp3d-btn" @click=${()=>this.addOnWall(l,t,e)}>+ ${this.t(`furn_${l}`)}</button>`,r=(l,c)=>v`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,l)}>+ ${this.t(c)}</button>`;return v`<aside class="fp3d-wv-kit">
      ${o?v`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${r("valve","wall_run_valve")} ${r("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(l=>v`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?null:l}}>+ ${this.t(`wall_kit_${l}`)}</button>`)}`:$}
      ${i?v`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`:$}
    </aside>`}get runPool(){var t;return this.poolArea??((t=this.floor)==null?void 0:t.outdoor.find(e=>e.type==="pool"&&e.points.length>=3))}get canLayRuns(){return It("pool")&&!!this.runPool}runFrame(t){var i;let[e,n]=t.split("|"),o=(i=this.floor)==null?void 0:i.rooms.find(s=>s.id===e);return o&&Number(n)<o.points.length?He(o,Number(n)):null}docWithDraft(){let t=this._runDraft;if(!t||!this._wallView)return this._doc;let e=[...t.from||!t.anchor?[]:[t.anchor],...t.pts];if(!e.length)return this._doc;let n=structuredClone(this._doc),o=n.floors.find(r=>r.outdoor.some(l=>l.id===t.pool)),i=o==null?void 0:o.outdoor.find(r=>r.id===t.pool);if(!o||!i)return this._doc;i.pool??={};let s={id:"__draft",from:t.from,to:"",floor_id:o.id,points:e.map(r=>[r[0],r[2]]),heights:e.map(r=>r[1])};return i.pool.pipes=[...i.pool.pipes??[],s],n}runLast(t,e){var i,s;if(t.pts.length)return t.pts[t.pts.length-1];if(t.fromT)return t.fromT;let n=rt(this._doc,e.floor,e.pool);if(t.extend){let r=(s=(i=e.pool.pool)==null?void 0:i.pipes)==null?void 0:s.find(c=>c.id===t.extend.pipe),l=r?kt(r,n):[];return(t.extend.end==="to"?l[l.length-1]:l[0])??null}let o=n(t.from);return o?[o.x,o.y,o.z]:null}runPick(t,e,n,o=!1){var l;if(!o){for(let c of t.runs)for(let d of c.ends)if(Math.hypot(d.s-e,d.y-n)<.12)return{end:{pipe:c.id,end:d.end}}}let i=rt(this._doc,t.floor,t.pool),s=null,r=[...t.floor.furniture.filter(c=>Ot.includes(c.type)).flatMap(c=>de(c.type).length?de(c.type).map(d=>`dev:${c.id}:${d}`):[`dev:${c.id}`]),...(((l=t.pool.pool)==null?void 0:l.joints)??[]).map(c=>c.kind==="wall"||c.kind==="floor"?`joint:${c.id}:inside`:`joint:${c.id}`)];for(let c of o?[]:r){let d=i(c);if(!d)continue;let p=pt(t.frame,[d.x,d.z]);if(p.d<-.3||p.d>1.6)continue;let u=Math.hypot(p.s-e,d.y-n);u<.12&&(!s||u<s.d)&&(s={node:c,d:u})}if(s)return{node:s.node};for(let c of t.runs)for(let d of c.pieces){let[p,u]=[d.s1-d.s0,d.y1-d.y0],f=p*p+u*u,m=f>0?Math.max(0,Math.min(1,((e-d.s0)*p+(n-d.y0)*u)/f)):0,[g,_]=[d.s0+p*m,d.y0+u*m];if(Math.hypot(g-e,_-n)<.07)return{pipe:{id:c.id,p:ce(t.frame,g,_,d.d0+(d.d1-d.d0)*m)}}}return{}}runDown(t,e){if(!this._runMode||!this.isAdmin)return;t.stopPropagation();let{s:n,y:o}=e.pt(t);this.runAt(e,n,o,t.altKey,t.detail,null)}runDown3d(t){var b,y;let e=this.runCtx3d;if(!this._runMode||!e||t.button!==0||!this.isAdmin||!this._wallView3d)return;let n=(b=this.wall3dEl)==null?void 0:b.viewer;if(!n)return;t.stopPropagation(),t.preventDefault();let o=n.renderer.domElement.getBoundingClientRect(),[i,s]=[t.clientX-o.left,t.clientY-o.top],r=n.furnitureIdAt(i,s),l=r?e.floor.furniture.find(S=>S.id===r&&Ot.includes(S.type)):void 0,c=n.pointerRay(i,s),d=le(e.frame,0,e.gap),p=e.frame.n,u=c.d[0]*p[0]+c.d[2]*p[1];if(Math.abs(u)<1e-6)return;let f=((d[0]-c.o[0])*p[0]+(d[1]-c.o[2])*p[1])/u;if(f<=0&&!l)return;let m=[c.o[0]+c.d[0]*f,c.o[1]+c.d[1]*f,c.o[2]+c.d[2]*f],g=e.floor.elevation+(((y=n.floorMap.get(e.floor.id))==null?void 0:y.y)??0),_=rt(this._doc,e.floor,e.pool),h=()=>{let S=de(l.type);if(!S.length)return`dev:${l.id}`;let E=R=>{let z=_(R),M=[z.x-c.o[0],z.y+g-c.o[1],z.z-c.o[2]],x=M[0]*c.d[0]+M[1]*c.d[1]+M[2]*c.d[2];return Math.hypot(M[0]-c.d[0]*x,M[1]-c.d[1]*x,M[2]-c.d[2]*x)};return S.map(R=>`dev:${l.id}:${R}`).sort((R,z)=>E(R)-E(z))[0]};this.runAt(e,pt(e.frame,[m[0],m[2]]).s,m[1]-g,t.altKey,t.detail,l&&this._runMode==="draw"?h():null)}runAt(t,e,n,o,i,s){let r=this._runMode;if(!r)return;if(r==="hole_wall"||r==="hole_floor"||r==="tee"||r==="y")return this.placeJoint(t,r,e,n);let l=s?{node:s}:this.runPick(t,e,n,r!=="draw");if(r!=="draw"){l.pipe&&this.addFitting(t,l.pipe.id,l.pipe.p,r),this._runMode=null;return}let c=this._runDraft;if(!c){let d={pool:t.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:t.key,d:t.gap},p;l.end?p={...d,extend:l.end}:l.node?p={...d,from:l.node}:l.pipe?p={...d,fromT:l.pipe.p}:p={...d,pts:[ce(t.frame,Math.round(e*20)/20,Math.round(n*20)/20,t.gap)]},this._runDraft={...p,anchor:this.runLast({...p,pts:[]},t)};return}if(i>=2)return this.finishRun("",null);if(l.node&&l.node!==c.from)return this.finishRun(l.node,null);if(l.pipe)return this.finishRun("",l.pipe.p);this._runDraft={...c,pts:[...c.pts,...this.runStep(c,t,e,n,o)],wall:t.key,d:t.gap}}runStep(t,e,n,o,i){let s=Math.round(n*20)/20,r=Math.round(o*20)/20,l=[],c=this.runLast(t,e);if(c&&t.wall!==e.key){let d=this.runFrame(t.wall),p=d&&Pr(d,t.d,e.frame,e.gap);p&&(c=[I(p[0]),c[1],I(p[1])],l.push(c))}if(c&&!i){let d=pt(e.frame,[c[0],c[2]]);d.d>-.35&&d.d<.6&&(Math.abs(s-d.s)<Math.abs(r-c[1])?s=d.s:r=c[1])}return l.push(ce(e.frame,s,r,e.gap)),l.map(d=>[I(d[0]),I(d[1]),I(d[2])])}finishRun(t,e,n=[],o){let i=this._runDraft,s=this.floor;if(this._runDraft=null,!i||!s)return;let r=[...i.pts,...n];if(!r.length&&!e&&(!t||t===i.from)&&!i.fromT)return;let l=null;this.changePool(i.pool,(c,d)=>{let p=c.joints??=[],u=c.pipes??=[],f=rt(this._doc,s,d),m=M=>{let x=M.startsWith("joint:")?p.find(w=>`joint:${w.id}`===M):void 0;return x?{x:x.x,z:x.z,y:x.y}:f(M)},g=M=>{let x=null;for(let k of u){let A=We(kt(k,m),M);A&&A.d<.12&&(!x||A.d<x.d)&&(x={pipe:k,d:A.d})}let w=x&&hi(x.pipe,m,M,B("joint"),B("pipe"));return!x||!w?"":(p.push(w.joint),u.splice(u.indexOf(x.pipe),1,w.first,w.second),`joint:${w.joint.id}:out2`)},_=(M,x=[])=>{let{kind:w,id:k,port:A}=tt(M),P=w==="joint"&&!A?p.find(j=>j.id===k):void 0;if(!P||!P.kind)return M;if(P.kind==="wall"||P.kind==="floor")return`joint:${k}:inside`;let O=new Set([...u.flatMap(j=>[j.from,j.to]),...x]),L=Ne(P.kind).find(j=>!O.has(`joint:${k}:${j}`));return L?`joint:${k}:${L}`:M},h=i.fromT?g(i.fromT):_(i.from),b=e?g(e):_(t,[h]),y=r.map(M=>[I(M[0]),I(M[2])]),S=r.map(M=>I(M[1])),E=i.extend,R=E&&u.find(M=>M.id===E.pipe);if(E&&R){Object.assign(R,Mt(R,m)),E.end==="to"?(R.points=[...R.points,...y],R.heights=[...R.heights??[],...S],R.to=b):(R.points=[...y.reverse(),...R.points],R.heights=[...S.reverse(),...R.heights??[]],R.from=b),o!==void 0&&(R.height=o),l=R.id;return}let z={id:B("pipe"),from:h,to:b,floor_id:s.id,points:y,heights:S,height:o??S[S.length-1]??null};u.push(z),l=z.id}),l&&(this._runSel={pipe:l,pt:null}),this._runMode=null}placeJoint(t,e,n,o){let i=t.gap-Va,s=Math.round(n*100)/100,r=Math.round(o*100)/100,l=De(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c;if(e==="hole_wall"){let[d,p]=Je(t.frame,s,i);c={id:B("joint"),kind:"wall",x:d,z:p,y:Math.max(.05,r),nx:I(t.frame.n[0]),nz:I(t.frame.n[1]),depth:I(l)}}else if(e==="hole_floor"){let[d,p]=Je(t.frame,s,t.gap);c={id:B("joint"),kind:"floor",x:d,z:p,y:0}}else{let[d,p]=Je(t.frame,s,t.gap);c={id:B("joint"),kind:e,x:d,z:p,y:r}}this.changePool(t.pool.id,d=>d.joints=[...d.joints??[],c]),this._runMode=null}runOut(t,e){let n=this._runDraft,o=n&&this.runLast(n,t);if(!n||!o)return;if(e==="down")return this.finishRun("",null,[[o[0],-.3,o[2]]],-.3);let i=pt(t.frame,[o[0],o[2]]),s=De(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,r=ce(t.frame,i.s,o[1],-(s+.15));this.finishRun("",null,[[I(r[0]),o[1],I(r[2])]],o[1])}addFitting(t,e,n,o){let i=rt(this._doc,t.floor,t.pool);this.changePool(t.pool.id,s=>{var c;let r=(c=s.pipes)==null?void 0:c.find(d=>d.id===e),l=r&&We(kt(r,i),n);!r||!l||(r.fittings=[...r.fittings??[],{id:B("fit"),kind:o,at:I(l.at),...o==="valve"?{open:!0}:{}}])}),this._runSel={pipe:e,pt:null}}runPieceDown(t,e,n,o){var f,m;if(this._runMode)return;if(t.stopPropagation(),this._wallSel=null,((f=this._runSel)==null?void 0:f.pipe)!==n.id||!this.isAdmin){this._runSel={pipe:n.id,pt:null};return}let{s:i,y:s}=e.pt(t),r=n.pieces.find(g=>g.k===o),l=Math.hypot(r.s1-r.s0,r.y1-r.y0)>0?Math.hypot(i-r.s0,s-r.y0)/Math.hypot(r.s1-r.s0,r.y1-r.y0):0,c=r.d0+(r.d1-r.d0)*Math.min(1,l),d=this._doc,p=rt(d,e.floor,e.pool),u=-1;this.changePool(e.pool.id,g=>{var h;let _=(h=g.pipes)==null?void 0:h.find(b=>b.id===n.id);_&&(Object.assign(_,Mt(_,p)),u=Math.max(0,Math.min(_.points.length,o+1-gn(_,p))),_.points.splice(u,0,Je(e.frame,i,c)),_.heights.splice(u,0,I(s)))}),!(u<0)&&(this._runSel={pipe:n.id,pt:u},this.runDrag={pipe:n.id,i:u,d:c,base:d,moved:!0},(m=t.currentTarget.closest("svg"))==null||m.setPointerCapture(t.pointerId))}runPointDown(t,e,n,o){var c,d,p;if(this._runMode||!this.isAdmin)return;t.stopPropagation();let i=rt(this._doc,e.floor,e.pool);if(t.detail>=2){this.changePool(e.pool.id,u=>{var m;let f=(m=u.pipes)==null?void 0:m.find(g=>g.id===n);f&&(Object.assign(f,Mt(f,i)),f.points.splice(o,1),f.heights.splice(o,1))}),this._runSel={pipe:n,pt:null};return}let s=(d=(c=e.pool.pool)==null?void 0:c.pipes)==null?void 0:d.find(u=>u.id===n),r=s&&Mt(s,i),l=r==null?void 0:r.points[o];l&&(this._runSel={pipe:n,pt:o},this.runDrag={pipe:n,i:o,d:pt(e.frame,l).d,base:this._doc,moved:!1},(p=t.currentTarget.closest("svg"))==null||p.setPointerCapture(t.pointerId))}runPointMove(t,e){var d,p;let n=this.runDrag;if(!n)return;let{s:o,y:i}=e.pt(t);o=Math.round(o*100)/100,i=Math.round(i*100)/100;let s=rt(n.base,e.floor,e.pool),r=n.base.floors.flatMap(u=>u.outdoor).find(u=>u.id===e.pool.id),l=(p=(d=r==null?void 0:r.pool)==null?void 0:d.pipes)==null?void 0:p.find(u=>u.id===n.pipe);if(!l)return;let c=Mt(l,s);if(!t.altKey){let u=kt(c,s),f=gn(c,s);for(let m of[u[n.i+f-1],u[n.i+f+1]]){if(!m)continue;let g=pt(e.frame,[m[0],m[2]]);Math.abs(g.s-o)<.04&&(o=I(g.s)),Math.abs(m[1]-i)<.04&&(i=I(m[1]))}}n.moved=!0,this.change((u,f)=>{var g,_,h;let m=(h=(_=(g=f.outdoor.find(b=>b.id===e.pool.id))==null?void 0:g.pool)==null?void 0:_.pipes)==null?void 0:h.find(b=>b.id===n.pipe);m&&(Object.assign(m,Mt(m,s)),m.points[n.i]=Je(e.frame,o,n.d),m.heights[n.i]=i)},n.base,!1)}runPointUp(){let t=this.runDrag;this.runDrag=null,t!=null&&t.moved&&this.pushHistory(t.base)}fittingDown(t,e,n,o){var i;if(!(this._runMode||!this.isAdmin)){if(t.stopPropagation(),this._runSel={pipe:n,pt:null},t.detail>=2){this.changePool(e.pool.id,s=>{var l;let r=(l=s.pipes)==null?void 0:l.find(c=>c.id===n);r!=null&&r.fittings&&(r.fittings=r.fittings.filter(c=>c.id!==o))});return}this.fitDrag={pipe:n,id:o,base:this._doc,moved:!1,x:t.clientX,y:t.clientY},(i=t.currentTarget.closest("svg"))==null||i.setPointerCapture(t.pointerId)}}jointDown(t,e,n){var o;this._runMode||!this.isAdmin||(t.stopPropagation(),this.jointDrag={id:e,d:n,base:this._doc,moved:!1},(o=t.currentTarget.closest("svg"))==null||o.setPointerCapture(t.pointerId))}jointMove(t,e){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:o,y:i}=e.pt(t),s=t.altKey?o:Math.round(o*100)/100,r=t.altKey?i:Math.round(i*100)/100;this.change((l,c)=>{var p,u,f;let d=(f=(u=(p=c.outdoor.find(m=>m.id===e.pool.id))==null?void 0:p.pool)==null?void 0:u.joints)==null?void 0:f.find(m=>m.id===n.id);d&&([d.x,d.z]=Je(e.frame,s,n.d),d.kind!=="floor"&&(d.y=Math.max(d.kind==="wall"?.05:-1,I(r))))},n.base,!1)}fittingMove(t,e){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)<4)return;n.moved=!0;let{s:o,y:i}=e.pt(t),s=e.runs.find(d=>d.id===n.pipe);if(!s)return;let r=null;for(let d of s.pieces){let[p,u]=[d.s1-d.s0,d.y1-d.y0],f=p*p+u*u,m=f>0?Math.max(0,Math.min(1,((o-d.s0)*p+(i-d.y0)*u)/f)):0,[g,_]=[d.s0+p*m,d.y0+u*m],h=Math.hypot(g-o,_-i);(!r||h<r.d)&&(r={p:ce(e.frame,g,_,d.d0+(d.d1-d.d0)*m),d:h})}if(!r)return;let l=rt(n.base,e.floor,e.pool),c=r.p;this.change((d,p)=>{var g,_,h,b;let u=(h=(_=(g=p.outdoor.find(y=>y.id===e.pool.id))==null?void 0:g.pool)==null?void 0:_.pipes)==null?void 0:h.find(y=>y.id===n.pipe),f=(b=u==null?void 0:u.fittings)==null?void 0:b.find(y=>y.id===n.id),m=u&&We(kt(u,l),c);f&&m&&(f.at=I(m.at))},n.base,!1)}fittingUp(t){let e=this.fitDrag;if(this.fitDrag=null,!!e){if(e.moved)return this.pushHistory(e.base);t&&this.changePool(t.pool.id,n=>{var i,s,r;let o=(r=(s=(i=n.pipes)==null?void 0:i.find(l=>l.id===e.pipe))==null?void 0:s.fittings)==null?void 0:r.find(l=>l.id===e.id);(o==null?void 0:o.kind)==="valve"&&(o.open=o.open===!1)})}}kitFitting(t,e){this._runDraft=null;let n=t&&this._runSel?t.runs.find(i=>i.id===this._runSel.pipe):void 0;if(!t||!n||!n.pieces.length){this._runMode=this._runMode===e?null:e;return}let o=[...n.pieces].sort((i,s)=>Math.hypot(s.s1-s.s0,s.y1-s.y0)-Math.hypot(i.s1-i.s0,i.y1-i.y0))[0];this.addFitting(t,n.id,ce(t.frame,(o.s0+o.s1)/2,(o.y0+o.y1)/2,(o.d0+o.d1)/2),e),this._runMode=null}renderRuns(t,e,n){var m,g;let o=(m=this._runSel)==null?void 0:m.pipe,i=_=>{let h=pt(t.frame,[_[0],_[2]]);return`${e(h.s)},${n(_[1])}`},s=this._runDraft,r=s&&this.runLast(s,t),l=s?[...s.fromT||s.extend||s.from?[this.runLast({...s,pts:[]},t)]:[],...s.pts].filter(_=>!!_):[],c=this.runHover,d=rt(this._doc,t.floor,t.pool),p={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},u=(_,h,b="",y)=>{let S=d(_),E=S&&pt(t.frame,[S.x,S.z]);return S&&E&&E.d>-.6&&E.d<1.6&&E.s>-.2&&E.s<t.L+.2?[T`<g class="fp3d-wv-node ${b} ${y?"fp3d-wv-joint":""}" transform="translate(${e(E.s)} ${n(S.y)})" @pointerdown=${R=>y&&this.jointDown(R,y,E.d)}>
              <circle r="0.05" /><text y="0.11">${h}</text><title>${this.poolNodeLabel(t.pool,_)}</title>
            </g>`]:[]},f=[...t.floor.furniture.flatMap(_=>{if(p[_.type]===void 0)return[];let h=de(_.type);return h.length?h.flatMap(b=>u(`dev:${_.id}:${b}`,this.t(`port_${b}`))):u(`dev:${_.id}`,p[_.type])}),...(((g=t.pool.pool)==null?void 0:g.joints)??[]).flatMap(_=>_.kind==="wall"||_.kind==="floor"?u(`joint:${_.id}:inside`,this.jointLabel(t.pool,_.id),"fp3d-wv-hole-mark",_.id):u(`joint:${_.id}`,this.jointLabel(t.pool,_.id),"",_.id))];return T`<g class="fp3d-wv-runs">
      ${f}
      ${t.runs.map(_=>T`<g class="fp3d-wv-run ${_.id===o?"fp3d-wv-run-sel":""}">
          ${_.pieces.map(h=>T`<line class=${h.y0<-.01&&h.y1<-.01?"fp3d-wv-under":""} x1=${e(h.s0)} y1=${n(h.y0)} x2=${e(h.s1)} y2=${n(h.y1)} @pointerdown=${b=>this.runPieceDown(b,t,_,h.k)} />`)}
          ${_.ends.map(h=>T`<circle class="fp3d-wv-end" cx=${e(h.s)} cy=${n(h.y)} r="0.035" />`)}
          ${_.fittings.map(h=>h.kind==="valve"?T`<g class="fp3d-wv-valve ${h.open?"":"fp3d-wv-shut"}" transform="translate(${e(h.s)} ${n(h.y)})" @pointerdown=${b=>this.fittingDown(b,t,_.id,h.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${h.open?.11:0} y2=${h.open?0:-.11} />
                </g>`:T`<rect class="fp3d-wv-sight" x=${e(h.s)-.06} y=${n(h.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${b=>this.fittingDown(b,t,_.id,h.id)} />`)}
          ${_.id===o?_.points.map(h=>{var b;return T`<circle class="fp3d-wv-runpt ${((b=this._runSel)==null?void 0:b.pt)===h.i?"fp3d-on":""}" cx=${e(h.s)} cy=${n(h.y)} r="0.04" @pointerdown=${y=>this.runPointDown(y,t,_.id,h.i)} />`}):$}
        </g>`)}
      ${l.length?T`<polyline class="fp3d-wv-draft" points=${l.map(i).join(" ")} />`:$}
      ${r&&c?T`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${i(r).split(",")[0]} y1=${i(r).split(",")[1]} x2=${e(c[0])} y2=${n(c[1])} />`:$}
    </g>`}renderRunFoot(t){var p,u,f;let e=this._runMode,n=this._runDraft;if(e==="hole_wall"||e==="hole_floor"||e==="tee"||e==="y")return v`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="valve"||e==="sight")return v`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="draw")return v`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?v`<button class="fp3d-btn" @click=${()=>this.runOut(t,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(t,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:$}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let o=this._runSel,i=o&&((u=(p=t.pool.pool)==null?void 0:p.pipes)==null?void 0:u.find(m=>m.id===o.pipe));if(!o||!i)return $;let s=rt(this._doc,t.floor,t.pool),r=Mt(i,s),l=o.pt,c=this.isAdmin,d=i.to?i.from?null:"from":"to";return v`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&((f=r.heights)==null?void 0:f[l])!==void 0?this.len(this.t("wall_run_pt"),r.heights[l]??0,m=>this.changePool(t.pool.id,g=>{var h;let _=(h=g.pipes)==null?void 0:h.find(b=>b.id===i.id);_&&(Object.assign(_,Mt(_,s)),_.heights[l]=Math.min(10,Math.max(-5,I(m))))}),.01):$}
      ${c?v`<button class="fp3d-btn" @click=${()=>this.kitFitting(t,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(t,"sight")}>${this.t("wall_run_sight")}</button>
            ${d?v`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let m={pool:t.pool.id,from:"",fromT:null,extend:{pipe:i.id,end:d},pts:[],anchor:null,wall:t.key,d:t.gap};this._runDraft={...m,anchor:this.runLast(m,t)}}}>${this.t("wall_run_more")}</button>`:$}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.pool.id,m=>{var _,h;let g=(_=m.pipes)==null?void 0:_.find(b=>b.id===i.id);g&&(Object.assign(g,Mt(g,s)),[g.from,g.to,g.points,g.heights]=[g.to,g.from,[...g.points].reverse(),[...g.heights??[]].reverse()],g.fittings=(h=g.fittings)==null?void 0:h.map(b=>({...b,at:I(Math.max(0,Vi(g,s)-b.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(t.pool.id,m=>m.pipes=(m.pipes??[]).filter(g=>g.id!==i.id)),this._runSel=null}}>${this.t("delete")}</button>`:$}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){var n;let t=this.outdoorArea;if((t==null?void 0:t.type)==="pool")return t;let e=((n=this.floor)==null?void 0:n.outdoor.filter(o=>o.type==="pool"))??[];return e.length===1?e[0]:void 0}poolDown(t,e,n,o){var p,u,f,m,g,_,h,b,y,S,E;let i=this.floor;if(!i)return!1;let s=this.poolArea,r=((p=e.closest("[data-pool-node]"))==null?void 0:p.getAttribute("data-pool-node"))??null;if(this._jointPlace&&s)return this.isAdmin&&this.placeJointPlan(s,this._jointPlace,n,((u=e.closest("[data-pipe]"))==null?void 0:u.getAttribute("data-pipe"))??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isAdmin)return!0;if(!s){let z=i.outdoor.find(M=>M.type==="pool"&&M.points.length>=3&&N(n,M.points));return z&&(this.selectItem("outdoor",z.id),this._tool="pool",this._pipeMode=!0),!0}let R=(f=e.closest("[data-pipe-end]"))==null?void 0:f.getAttribute("data-pipe-end");if(R&&!this._pipeDraft){let[z,M]=R.split("|"),x=(g=(m=s.pool)==null?void 0:m.pipes)==null?void 0:g.find(k=>k.id===z),w=x&&(M==="to"?x.points[x.points.length-1]:x.points[0]);w&&(this._pipeDraft={from:"",points:[],extend:{pipe:z,end:M,at:w}})}else if(r){let z=this._pipeDraft;z?z.extend?(this.extendPipe(s,z.extend,r,z.points),this._pipeDraft=null):r!==z.from&&(this.addPipe(s.id,z.from,r,z.points),this._pipeDraft=null):this._pipeDraft={from:r,points:[]}}else if(this._pipeDraft){let z=this.snap(n,void 0,t.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[I(z[0]),I(z[1])]]}}return!0}let l=R=>[R.slice(0,R.lastIndexOf(":")),Number(R.slice(R.lastIndexOf(":")+1))];if(s&&this.isAdmin){let R=(_=e.closest("[data-pipe-pt]"))==null?void 0:_.getAttribute("data-pipe-pt");if(R){let[M,x]=l(R);return t.detail>=2?this.change((w,k)=>{var P,O,L,j;let A=(L=(O=(P=k.outdoor.find(F=>F.id===s.id))==null?void 0:P.pool)==null?void 0:O.pipes)==null?void 0:L.find(F=>F.id===M);A==null||A.points.splice(x,1),(j=A==null?void 0:A.heights)==null||j.splice(x,1)}):this.drag={kind:"pipept",pool:s.id,pipe:M,index:x,base:this._doc,moved:!1},!0}let z=(h=e.closest("[data-pipe-seg]"))==null?void 0:h.getAttribute("data-pipe-seg");if(z){let[M,x]=l(z),w=this.snap(n,void 0,t.altKey);return this.change((k,A)=>{var O,L,j,F;let P=(j=(L=(O=A.outdoor.find(V=>V.id===s.id))==null?void 0:O.pool)==null?void 0:L.pipes)==null?void 0:j.find(V=>V.id===M);P==null||P.points.splice(x,0,[I(w[0]),I(w[1])]),(F=P==null?void 0:P.heights)==null||F.splice(x,0,P.heights[x-1]??P.heights[x]??null)}),this._pipeId=M,this.drag={kind:"pipept",pool:s.id,pipe:M,index:x,base:this._doc,moved:!1},!0}}let c=(b=e.closest("[data-pipe]"))==null?void 0:b.getAttribute("data-pipe");if(c)return this._pipeId=c,!0;if(r&&s&&this.isAdmin)return r.startsWith("port:")?this.drag={kind:"poolport",pool:s.id,id:r.slice(5),base:this._doc,moved:!1}:r.startsWith("joint:")?this.drag={kind:"pooljoint",pool:s.id,id:tt(r).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:r.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let R=(y=e.closest("[data-out-box]"))==null?void 0:y.getAttribute("data-out-box");if(R){let[M,x]=l(R);return this.drag={kind:"outbox",id:M,corner:x,base:this._doc,moved:!1},!0}let z=(S=e.closest("[data-out-vertex]"))==null?void 0:S.getAttribute("data-out-vertex");if(z){let[M,x]=l(z);return this.drag={kind:"outvertex",id:M,index:x,base:this._doc,moved:!1},!0}}let d=(E=e.closest("[data-outdoor]"))==null?void 0:E.getAttribute("data-outdoor");return d&&i.outdoor.some(R=>R.id===d&&R.type==="pool")?(this.selectItem("outdoor",d),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:d,start:n,startScreen:o,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(t,e){this.change((n,o)=>{let i=o.outdoor.find(s=>s.id===t);i&&(i.pool??={},e(i.pool,i))})}extendPipe(t,e,n,o){let i=this.floor;if(!i)return;let s=rt(this._doc,i,t);n=this.jointEnd(t,n,o[o.length-1]),this.changePool(t.id,r=>{var d,p;let l=(d=r.pipes)==null?void 0:d.find(u=>u.id===e.pipe);if(!l)return;Object.assign(l,Mt(l,s));let c=l.heights??[];if(e.end==="to"){let u=c[c.length-1]??l.height??null;l.points=[...l.points,...o],l.heights=[...c,...o.map(()=>u)],l.to=n}else{let u=Vi(l,s),f=c[0]??l.height??null;l.points=[...[...o].reverse(),...l.points],l.heights=[...o.map(()=>f),...c],l.from=n;let m=Vi(l,s)-u;l.fittings=(p=l.fittings)==null?void 0:p.map(g=>({...g,at:I(g.at+m)}))}}),this._pipeId=e.pipe}jointEnd(t,e,n,o=[]){var p,u,f;let{kind:i,id:s,port:r}=tt(e),l=i==="joint"&&!r?(u=(p=t.pool)==null?void 0:p.joints)==null?void 0:u.find(m=>m.id===s):void 0;if(!l)return e;if(l.kind==="wall"||l.kind==="floor"){let m=this._doc.floors.find(b=>b.outdoor.some(y=>y.id===t.id)),g=m&&rt(this._doc,m,t),[_,h]=[g==null?void 0:g(`joint:${s}:inside`),g==null?void 0:g(`joint:${s}:outside`)];return!n||!_||!h?`joint:${s}:inside`:`joint:${s}:${Math.hypot(n[0]-_.x,n[1]-_.z)<=Math.hypot(n[0]-h.x,n[1]-h.z)?"inside":"outside"}`}let c=new Set([...(((f=t.pool)==null?void 0:f.pipes)??[]).flatMap(m=>[m.from,m.to]),...o]),d=Ne(l.kind).find(m=>!c.has(`joint:${s}:${m}`));return d?`joint:${s}:${d}`:e}addPipe(t,e,n,o){let i=this.floor;if(!i)return;let s=i.outdoor.find(l=>l.id===t);s&&(e=this.jointEnd(s,e,o[0]),n=this.jointEnd(s,n,o[o.length-1],[e]));let r={id:B("pipe"),from:e,to:n,floor_id:i.id,points:o};this.changePool(t,l=>l.pipes=[...l.pipes??[],r]),this._pipeId=r.id}addPoolPort(t){var u;let e=this.poolArea;if(!e||!this.isAdmin)return;let n=((u=e.pool)==null?void 0:u.ports)??[],o=e.points.length,i=f=>{let m=e.points[f%o],g=e.points[(f+1)%o];return[(m[0]+g[0])/2,(m[1]+g[1])/2]},[s,r]=Lt(e.points),l=this._doc.floors.flatMap(f=>f.furniture).find(f=>f.type==="pool_filter"||f.type==="pool_pump"),c=n.filter(f=>f.kind==="inlet").length,d=t==="skimmer"?no(e.points,i(0)):t==="inlet"?no(e.points,i(Math.floor(o/2)+c*Math.max(1,Math.floor(o/8)))):t==="drain"?[s,r]:l?[l.x+.8,l.z]:[s,r+3],p={id:B("port"),kind:t,x:I(d[0]),z:I(d[1])};this.changePool(e.id,f=>f.ports=[...n,p])}addPoolDevice(t){let e=this.poolArea;this.addEnergyDevice(t),e&&this.selectItem("outdoor",e.id),this._tool="pool"}deletePoolDevice(t){this.change(e=>{var n;for(let o of e.floors){o.furniture=o.furniture.filter(i=>i.id!==t);for(let i of o.outdoor)(n=i.pool)!=null&&n.pipes&&(i.pool.pipes=i.pool.pipes.filter(s=>s.from!==`dev:${t}`&&s.to!==`dev:${t}`))}})}deletePoolPort(t,e){this.changePool(t,n=>{n.ports=(n.ports??[]).filter(o=>o.id!==e),n.pipes=(n.pipes??[]).filter(o=>o.from!==`port:${e}`&&o.to!==`port:${e}`)})}togglePoolValve(t){let e=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===t);!e||e.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let o=n.floors.flatMap(i=>i.furniture).find(i=>i.id===t);o&&(o.valve_open=o.valve_open===!1?null:!1)})}setPoolDevice(t,e){this.change(n=>{let o=n.floors.flatMap(i=>i.furniture).find(i=>i.id===t);o&&Object.assign(o,e)})}portText(t){let{kind:e,port:n}=tt(t),o={in:"A",out1:"B",out2:"C"};return e==="joint"&&n&&o[n]?`${this.t("card_port")} ${o[n]}`:n?this.t(`port_${n}`):""}openCard(t,e){this._card={pool:t,part:e},this._cardJoin=null}partPorts(t,e){var i,s;let{kind:n,id:o}=tt(e);if(n==="joint"){let r=(s=(i=t.pool)==null?void 0:i.joints)==null?void 0:s.find(l=>l.id===o);return r?Ne(r.kind).map(l=>`${e}:${l}`):[]}if(n==="dev"){let r=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===o),l=r?de(r.type):[];return l.length?l.map(c=>`${e}:${c}`):[e]}return[e]}partStatus(t,e){var i;let n=((i=t.pool)==null?void 0:i.pipes)??[],o=this.partPorts(t,e);return[o.filter(s=>n.some(r=>r.from===s||r.to===s)).length,o.length]}cardConnect(t,e,n,o){var p,u;let i=this._doc.floors.find(f=>f.outdoor.some(m=>m.id===t.id));if(!i||!n)return;let s=rt(this._doc,i,t),r=((p=t.pool)==null?void 0:p.ports)??[],l=f=>{var h;let{kind:m,id:g,port:_}=tt(f);return m==="port"?Ir(((h=r.find(b=>b.id===g))==null?void 0:h.kind)??"inlet"):m==="dev"?zr(_):null},c=this.jointEnd(t,n,void 0,[e]),d=fi({from:e,vias:o,to:[c],floorId:i.id},s,((u=t.pool)==null?void 0:u.joints)??[],l,f=>B(f));this.changePool(t.id,f=>{f.joints=[...f.joints??[],...d.joints],f.pipes=[...f.pipes??[],...d.pipes]}),this._cardJoin=null}cardDisconnect(t,e){this.changePool(t.id,n=>n.pipes=(n.pipes??[]).filter(o=>!e.pipes.includes(o.id)))}cardReroute(t,e){var m,g;let n=((m=t.pool)==null?void 0:m.pipes)??[],o=n.find(_=>_.id===e.pipes[0]);if(!o||!e.other)return;let i=o.from===e.start,s=[...e.holes.map(_=>({kind:"hole",joint:_.joint,dir:_.dir})),...e.fittings.map(_=>({kind:_}))],r=this._doc.floors.find(_=>_.outdoor.some(h=>h.id===t.id));if(!r)return;let l={...t,pool:{...t.pool,pipes:n.filter(_=>!e.pipes.includes(_.id))}},c=rt(this._doc,r,l),d=i?e.start:e.other,p=i?e.other:e.start,u=i?s:[...e.holes].reverse().map(_=>({kind:"hole",joint:_.joint,dir:_.dir==="in"?"out":"in"})).concat(e.fittings.map(_=>({kind:_}))),f=fi({from:d,vias:u,to:[p],floorId:r.id},c,((g=t.pool)==null?void 0:g.joints)??[],()=>null,_=>B(_));this.changePool(t.id,_=>{_.pipes=[...(_.pipes??[]).filter(h=>!e.pipes.includes(h.id)),...f.pipes]})}renderPartCard(){var z,M,x,w,k,A;let t=this._card,e=t?this._doc.floors.flatMap(P=>P.outdoor).find(P=>P.id===t.pool):void 0;if(!t||!e)return $;let n=this.isAdmin,{kind:o,id:i}=tt(t.part),s=o==="joint"?(M=(z=e.pool)==null?void 0:z.joints)==null?void 0:M.find(P=>P.id===i):void 0,r=o==="dev"?this._doc.floors.flatMap(P=>P.furniture).find(P=>P.id===i):void 0,l=o==="port"?(w=(x=e.pool)==null?void 0:x.ports)==null?void 0:w.find(P=>P.id===i):void 0;if(!s&&!r&&!l)return $;let c=((k=e.pool)==null?void 0:k.pipes)??[],d=((A=e.pool)==null?void 0:A.joints)??[],p=this.partPorts(e,t.part),u=this.poolEnds(e).filter(P=>Zt(P.node)!==t.part&&!P.used),f=d.filter(P=>P.kind==="wall"||P.kind==="floor"),m=P=>this.poolNodeLabel(e,P),g=P=>tt(P).port?this.portText(P):this.t("card_port"),_=P=>P.kind==="hole"?this.t(P.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(e,P.joint)}):this.t(P.kind==="valve"?"wall_run_valve":"wall_run_sight"),h=()=>{this._card=null,this._cardJoin=null},b=()=>s?[s.x,s.z]:r?[r.x,r.z]:l?[l.x,l.z]:null,y=p.map(P=>{var j;let O=Lr(c,d,P),L=((j=this._cardJoin)==null?void 0:j.port)===P?this._cardJoin:null;return v`<div class="fp3d-pc-row ${O.length?"fp3d-on":""}">
        <b>${g(P)}</b>
        <div class="fp3d-pc-conns">
          ${O.map(F=>v`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...F.holes.map(V=>_({kind:"hole",joint:V.joint,dir:V.dir})),...F.fittings.map(V=>_({kind:V}))].map(V=>v`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${V}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${F.other?v`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(e.id,Zt(F.other))}>${m(F.other)}</button>`:v`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?v`<span class="fp3d-pc-tools">
                    ${F.other?v`<button class="fp3d-btn" @click=${()=>this.cardReroute(e,F)}>${this.t("card_reroute")}</button>`:$}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(e,F)}>${this.t("card_disconnect")}</button>
                  </span>`:$}
            </div>`)}
          ${n&&(!O.length||p.length===1)?L?this.renderJoinPicker(e,P,L,u,f,_):v`<button class="fp3d-btn ${O.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:P,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:$}
        </div>
      </div>`}),[S,E]=this.partStatus(e,t.part),R=b();return v`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${P=>P.target===P.currentTarget&&h()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${P=>P.key==="Escape"&&h()}>
        <div class="fp3d-wv-head">
          ${s&&n?v`<input
                class="fp3d-pc-name"
                .value=${s.name??""}
                placeholder=${this.jointLabel(e,s.id)}
                title=${this.t("joint_name")}
                @change=${P=>{let O=P.target.value.trim().slice(0,60);this.changePool(e.id,L=>{var F;let j=(F=L.joints)==null?void 0:F.find(V=>V.id===s.id);j&&(j.name=O||null)})}}
              />`:v`<b class="fp3d-pc-title">${m(t.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:S,b:E})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${h}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(e,t.part,p)}
          <div class="fp3d-pc-rows">${y}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${R?v`<button class="fp3d-btn" @click=${()=>{h(),this._wallView=null,this._tool="pool",this.showPoint(R[0],R[1])}}>${this.t("card_show_plan")}</button>`:$}
          ${R&&!l?v`<button class="fp3d-btn" @click=${()=>{h(),this.pickWall(R)}}>▦ ${this.t("card_show_wall")}</button>`:$}
          <span class="fp3d-wv-grow"></span>
          ${n?v`<button class="fp3d-btn fp3d-danger" @click=${()=>{h(),r?this.deletePoolDevice(r.id):l?this.deletePoolPort(e.id,l.id):s&&this.changePool(e.id,P=>{P.joints=(P.joints??[]).filter(O=>O.id!==s.id),P.pipes=(P.pipes??[]).filter(O=>Zt(O.from)!==t.part&&Zt(O.to)!==t.part)})}}>${this.t("delete")}</button>`:$}
        </div>
      </div>
    </div>`}renderJoinPicker(t,e,n,o,i,s){let r=u=>{var _,h;let{kind:f,id:m}=tt(u);if(f==="port")return"pool";if(f==="dev")return"tech";let g=(h=(_=t.pool)==null?void 0:_.joints)==null?void 0:h.find(b=>b.id===m);return(g==null?void 0:g.kind)==="wall"||(g==null?void 0:g.kind)==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(u=>({g:u,items:o.filter(f=>r(f.node)===u)})).filter(u=>u.items.length),c=u=>this._cardJoin={...n,...u},d=u=>c({vias:[...n.vias,u]}),p=new Set(n.vias.flatMap(u=>u.kind==="hole"?[u.joint]:[]));return v`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(t,e)}</span>
        ${n.vias.map((u,f)=>v`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>c({vias:n.vias.filter((m,g)=>g!==f)})}>${s(u)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?v`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>c({to:""})}>${this.poolNodeLabel(t,n.to)} <i>✕</i></button>`:v`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?$:v`<div class="fp3d-pc-steps">
            ${i.some(u=>!p.has(u.id))?v`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${i.filter(u=>!p.has(u.id)).map(u=>v`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(t,u.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:u.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:u.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:$}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${l.map(({g:u,items:f})=>v`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${u}`)}</span>
                <div class="fp3d-pc-picks">${f.map(m=>v`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>c({to:m.node})}>${m.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(t,e,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(t,e,n){var m,g,_;let o=((m=t.pool)==null?void 0:m.pipes)??[],i=h=>o.some(b=>b.from===h||b.to===h),{kind:s,id:r}=tt(e),l=s==="joint"?(_=(g=t.pool)==null?void 0:g.joints)==null?void 0:_.find(h=>h.id===r):void 0,c=s==="dev"?this._doc.floors.flatMap(h=>h.furniture).find(h=>h.id===r):void 0,d={},p=$,u=(l==null?void 0:l.kind)??(c?c.type:"port");u==="tee"?(Object.assign(d,{in:[20,60],out1:[180,60],out2:[100,130]}),p=T`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):u==="y"?(Object.assign(d,{in:[20,70],out1:[180,25],out2:[180,115]}),p=T`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):u==="wall"||u==="floor"?(Object.assign(d,{outside:[20,70],inside:[180,70]}),p=T`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):u==="pool_pump"?(Object.assign(d,{suction:[20,95],pressure:[110,10]}),p=T`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):u==="pool_filter"?(Object.assign(d,{pump:[20,40],return:[180,40],waste:[100,4]}),p=T`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):u==="pool_heat_pump"?(Object.assign(d,{in:[180,95],out:[180,45]}),p=T`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(d[""]=[180,70],p=T`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let f=u==="pool_filter"?[100,41]:u==="pool_pump"?[100,85]:[100,70];return v`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(h=>{let b=tt(h).port??"",y=d[b]??d[""]??[180,70],S=i(h);return T`<g class="fp3d-pc-stub ${S?"fp3d-on":""}" @click=${()=>this.isAdmin&&!S&&(this._cardJoin={port:h,to:"",vias:[]})}>
          <line x1=${f[0]} y1=${f[1]} x2=${y[0]} y2=${y[1]} />
          <circle cx=${y[0]} cy=${y[1]} r="7" />
          <title>${b?this.portText(h):""}</title>
        </g>`})}
      ${p}
      ${n.map(h=>{let b=tt(h).port,y=d[b??""]??[180,70];return b?T`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,y[0]))} y=${y[1]<70?y[1]+20:y[1]-12}>${this.portText(h)}</text>`:$})}
    </svg>`}jointLabel(t,e){var r,l;let n=((r=t.pool)==null?void 0:r.joints)??[],o=n.find(c=>c.id===e);if(!o)return this.t("pool_loose_end");let i=c=>c==="wall"||c==="floor"?"hole":c??"tee";if((l=o.name)!=null&&l.trim())return o.name.trim();let s=n.filter(c=>i(c.kind)===i(o.kind));return`${this.t(`joint_${o.kind??"tee"}`,{n:s.indexOf(o)+1})}`}poolEnds(t){var i,s,r;let e=((i=t.pool)==null?void 0:i.pipes)??[],n=l=>e.some(c=>c.from===l||c.to===l),o=[];for(let l of((s=t.pool)==null?void 0:s.ports)??[])o.push({node:`port:${l.id}`,label:this.poolNodeLabel(t,`port:${l.id}`),used:!1});for(let l of this._doc.floors.flatMap(c=>c.furniture).filter(c=>Ot.includes(c.type)&&c.type!=="pool_valve")){let c=de(l.type);for(let d of c.length?c.map(p=>`dev:${l.id}:${p}`):[`dev:${l.id}`])o.push({node:d,label:this.poolNodeLabel(t,d),used:c.length>0&&n(d)})}for(let l of((r=t.pool)==null?void 0:r.joints)??[])for(let c of Ne(l.kind)){let d=`joint:${l.id}:${c}`;o.push({node:d,label:this.poolNodeLabel(t,d),used:n(d)})}return o}placeJointPlan(t,e,n,o){var d,p;let i=this.floor;if(!i)return;let s=rt(this._doc,i,t),r=o?(p=(d=t.pool)==null?void 0:d.pipes)==null?void 0:p.find(u=>u.id===o):void 0;if(r){let u=kt(r,s),f=null;for(let g=1;g<u.length;g++){let[_,h]=[u[g-1],u[g]],[b,y]=[h[0]-_[0],h[2]-_[2]],S=b*b+y*y,E=S>0?Math.max(0,Math.min(1,((n[0]-_[0])*b+(n[1]-_[2])*y)/S)):0,R=[_[0]+b*E,_[1]+(h[1]-_[1])*E,_[2]+y*E],z=Math.hypot(R[0]-n[0],R[2]-n[1]);(!f||z<f.d)&&(f={p:R,d:z})}let m=f&&hi(r,s,f.p,B("joint"),B("pipe"));if(m){this.changePool(t.id,g=>{g.joints=[...g.joints??[],{...m.joint,kind:e}],g.pipes=(g.pipes??[]).flatMap(_=>_.id===r.id?[{...m.first,to:`joint:${m.joint.id}:in`},{...m.second,from:`joint:${m.joint.id}:out1`}]:[_])});return}}let l=i.rooms.some(u=>u.points.length>=3&&N(n,u.points)),c=this.snap(n);this.changePool(t.id,u=>u.joints=[...u.joints??[],{id:B("joint"),kind:e,x:I(c[0]),z:I(c[1]),y:l?.5:-.3}])}poolNodePos(t,e){var i,s;if(!e)return null;let n=this._doc.floors.find(r=>r.outdoor.some(l=>l.id===t.id));if(e.startsWith("joint:")||e.split(":").length>2){let r=n&&rt(this._doc,n,t)(e);return r?[r.x,r.z]:null}if(e.startsWith("port:")){let r=(s=(i=t.pool)==null?void 0:i.ports)==null?void 0:s.find(l=>l.id===e.slice(5));return r?[r.x,r.z]:null}let o=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.id===e.slice(4));return o?[o.x,o.z]:null}poolNodeLabel(t,e){var c;let{kind:n,id:o,port:i}=tt(e);if(!e)return this.t("pool_loose_end");if(i||n==="joint"){let d=n==="joint"?this.jointLabel(t,o):this.poolNodeLabel(t,`${n}:${o}`);return i?`${d} \xB7 ${this.portText(e)}`:d}if(e.startsWith("port:")){let d=((c=t.pool)==null?void 0:c.ports)??[],p=d.find(f=>f.id===e.slice(5));if(!p)return"?";let u=d.filter(f=>f.kind===p.kind);return`${this.t(`pool_port_${p.kind}`)}${u.length>1?` ${u.indexOf(p)+1}`:""}`}let s=this._doc.floors.flatMap(d=>d.furniture).filter(d=>Ot.includes(d.type)),r=s.find(d=>d.id===e.slice(4));if(!r)return"?";let l=s.filter(d=>d.type===r.type);return`${r.name||this.t(`furn_${r.type}`)}${l.length>1&&!r.name?` ${l.indexOf(r)+1}`:""}`}renderPoolPlan(t){var f,m,g,_;let e=this.poolArea,n=t.furniture.filter(h=>Ot.includes(h.type)),o={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},i=e?(((f=e.pool)==null?void 0:f.pipes)??[]).filter(h=>h.floor_id===t.id):[],s=i.map(h=>{let b=this.poolNodePos(e,h.from),y=this.poolNodePos(e,h.to);if((!b||!y)&&!h.heights)return $;let S=b?1:0,E=[...b?[b]:[],...h.points,...y?[y]:[]].map(O=>this.toScreen(O));if(E.length<2)return $;let R=h.id===this._pipeId,z=0;for(let O=1;O<E.length-1;O++)Math.hypot(E[O+1][0]-E[O][0],E[O+1][1]-E[O][1])>Math.hypot(E[z+1][0]-E[z][0],E[z+1][1]-E[z][1])&&(z=O);let[M,x]=E[z],[w,k]=E[z+1],A=Math.atan2(k-x,w-M)*180/Math.PI,P=E.map(O=>O.join(",")).join(" ");return T`<g data-pipe=${h.id}>
        <polyline class="fp3d-pipe-hit" points=${P} />
        <polyline class="fp3d-pipe ${R?"fp3d-pipe-sel":""}" points=${P} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(M+w)/2} ${(x+k)/2}) rotate(${A})`} />
        ${R&&this.isAdmin?T`${E.slice(0,-1).map((O,L)=>T`<line class="fp3d-pipe-seg" data-pipe-seg=${`${h.id}:${L+1-S}`} x1=${O[0]} y1=${O[1]} x2=${E[L+1][0]} y2=${E[L+1][1]} />`)}
              ${h.points.map((O,L)=>{let[j,F]=this.toScreen(O);return T`<g class="fp3d-vertex" data-pipe-pt=${`${h.id}:${L}`}><circle cx=${j} cy=${F} r="14" class="fp3d-hit" /><circle cx=${j} cy=${F} r="5" /></g>`})}`:$}
      </g>`}),r=(h,b,y,S,E)=>{let[R,z]=this.toScreen(b);return T`<g class="fp3d-pool-node ${S}" data-pool-node=${h}><title>${E}</title><circle cx=${R} cy=${z} r="16" class="fp3d-hit" /><circle cx=${R} cy=${z} r="10" /><text x=${R} y=${z}>${y}</text></g>`},l=e?(((m=e.pool)==null?void 0:m.ports)??[]).map(h=>r(`port:${h.id}`,[h.x,h.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[h.kind],`fp3d-pool-port-${h.kind}`,this.poolNodeLabel(e,`port:${h.id}`))):[],c=n.map(h=>r(`dev:${h.id}`,[h.x,h.z],h.type==="pool_valve"?h.valve_open===!1?"\u2715":"":o[h.type],`fp3d-pool-dev ${h.type==="pool_valve"&&h.valve_open===!1?"fp3d-pool-closed":""}`,e?this.poolNodeLabel(e,`dev:${h.id}`):h.type)),d=$;if(e&&this._pipeDraft){let h=((g=this._pipeDraft.extend)==null?void 0:g.at)??this.poolNodePos(e,this._pipeDraft.from);if(h){let b=[h,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(y=>this.toScreen(y).join(",")).join(" ");d=T`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${b} />`}}let p=e?(((_=e.pool)==null?void 0:_.joints)??[]).map(h=>r(`joint:${h.id}`,[h.x,h.z],h.kind==="wall"||h.kind==="floor"?"\u25CE":h.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(e,h.id))):[],u=i.flatMap(h=>h.heights&&h.points.length?["from","to"].filter(b=>!h[b]).map(b=>{let[y,S]=this.toScreen(b==="to"?h.points[h.points.length-1]:h.points[0]);return T`<g class="fp3d-pipe-end" data-pipe-end=${`${h.id}|${b}`}><circle cx=${y} cy=${S} r="14" class="fp3d-hit" /><circle cx=${y} cy=${S} r="6" /></g>`}):[]);return T`<g class="fp3d-pool-plan">${s}${d}${p}${u}${l}${c}</g>`}renderPoolPanel(t){let e=(t==null?void 0:t.outdoor.filter(o=>o.type==="pool"))??[],n=this.poolArea;return n?v`${e.length>1?v`<section>
            <div class="fp3d-seg">${e.map((o,i)=>v`<button aria-pressed=${o.id===n.id} @click=${()=>this.selectItem("outdoor",o.id)}>🏊 ${i+1}</button>`)}</div>
          </section>`:$}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:v`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(e.length?"pool_choose":"pool_tool_empty")}</p>
        ${e.length?v`<div class="fp3d-actions">${e.map((o,i)=>v`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",o.id)}>🏊 ${this.t("out_pool")} ${e.length>1?i+1:""}</button>`)}</div>`:$}
      </section>`}renderPoolTech(t){var r,l,c;if(!It("pool"))return $;let e=this.isAdmin,n=((r=t.pool)==null?void 0:r.ports)??[],o=((l=t.pool)==null?void 0:l.pipes)??[],i=this._doc.floors.flatMap(d=>d.furniture).filter(d=>Ot.includes(d.type)),s=o.find(d=>d.id===this._pipeId);return v`<section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(d=>v`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolPort(d)}>+ ${this.t(`pool_port_${d}`)}</button>`)}
        </div>
        ${n.map(d=>v`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`port:${d.id}`)}>${this.poolNodeLabel(t,`port:${d.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(t,`port:${d.id}`)[0]?"\u2713":"\u25CB"}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolPort(t.id,d.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${Ot.filter(d=>d!=="pool_valve").map(d=>v`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolDevice(d)}>+ ${this.t(`furn_${d}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${i.map(d=>v`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`dev:${d.id}`)}>${this.poolNodeLabel(t,`dev:${d.id}`)}</button>
            <span class="fp3d-ports">${de(d.type).map(p=>v`<i class=${o.some(u=>u.from===`dev:${d.id}:${p}`||u.to===`dev:${d.id}:${p}`)?"fp3d-on":""}>${this.t(`port_${p}`)}</i>`)}</span>
            ${d.type==="pool_filter"?v`<select ?disabled=${!e} title=${this.t("pool_valve_type")} @change=${p=>this.setPoolDevice(d.id,{variant:p.target.value==="top6"?null:p.target.value})}>
                    ${Er.map(p=>v`<option value=${p} ?selected=${(d.variant??"top6")===p}>${this.t(`valve_${p}`)}</option>`)}
                  </select>
                  <select ?disabled=${!e} title=${this.t("pool_valve_position")} @change=${p=>this.setPoolDevice(d.id,{valve_position:p.target.value})}>
                  ${Fs.map(p=>v`<option value=${p} ?selected=${(d.valve_position??"filter")===p}>${this.t(`valve_${p}`)}</option>`)}
                </select>`:d.type==="pool_valve"?v`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${d.valve_open!==!1} ?disabled=${!e} @change=${p=>this.setPoolDevice(d.id,{valve_open:p.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:$}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(d.id)}>✕</button>
          </div>`)}
        ${(((c=t.pool)==null?void 0:c.joints)??[]).map(d=>v`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`joint:${d.id}`)}>${this.jointLabel(t,d.id)}</button>
            <span class="fp3d-ports">${Ne(d.kind).map(p=>{let u=`joint:${d.id}:${p}`,f=o.some(m=>m.from===u||m.to===u||(d.kind??"tee")!=="wall"&&(d.kind??"tee")!=="floor"&&Zt(m.from)===`joint:${d.id}`&&!tt(m.from).port&&p==="in");return v`<i class=${f?"fp3d-on":""} title=${this.portText(u)}>${this.portText(u)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,p=>{p.joints=(p.joints??[]).filter(u=>u.id!==d.id),p.pipes=(p.pipes??[]).filter(u=>Zt(u.from)!==`joint:${d.id}`&&Zt(u.to)!==`joint:${d.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!e} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${o.map(d=>v`<div class="fp3d-pool-row ${d.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=d.id}>${this.poolNodeLabel(t,d.from)} → ${this.poolNodeLabel(t,d.to)}</button>
            <button class="fp3d-btn" ?disabled=${!e} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.id,p=>{var f;let u=(f=p.pipes)==null?void 0:f.find(m=>m.id===d.id);u&&([u.from,u.to,u.points]=[u.to,u.from,[...u.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,p=>p.pipes=(p.pipes??[]).filter(u=>u.id!==d.id))}>✕</button>
          </div>`)}
        ${s?v`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),s.height??.3,d=>this.changePool(t.id,p=>{var f;let u=(f=p.pipes)==null?void 0:f.find(m=>m.id===s.id);u&&(u.height=Math.min(10,Math.max(-5,I(d))))}),.05)}
            </div>`:$}
        ${ut("pool")||!It("pool")?$:v`<p class="fp3d-sub">${this.t("pool_pipes_pro")}</p>`}
      </section>`}renderPoolShape(t){let e=this.isAdmin,n=dt(t.points),o=t.pool_shape,i=(l,c,d,p)=>o&&this.updateOutdoor({points:Hn(o,l,c,d,p)}),s=(n.x0+n.x1)/2,r=(n.z0+n.z1)/2;return v`${o==="round"?v`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let c=Math.max(.5,l)/2;i(s-c,r-c,s+c,r+c)},.01,1)}`:o==="oval"?v`${this.len(this.t("width"),n.x1-n.x0,l=>i(s-Math.max(1,l)/2,n.z0,s+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>i(n.x0,r-Math.max(1,l)/2,n.x1,r+Math.max(1,l)/2),.01,1)}`:$}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!t.above} ?disabled=${!e} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${t.above?this.len(this.t("pool_height"),To(t),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,I(l)))}),.05,.4):$}`}renderPoolPro(t){if(!It("pool"))return $;if(!ut("pool"))return v`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🏊 ${this.t("pro_name_pool")}</b></div>
        <p class="fp3d-sub">${this.t("pool_teaser")}</p>
      </section>`;if(!this.hass)return $;let e=t.pool??{},n=Nr(this.hass,{}),o=r=>this.updateOutdoor({pool:{...e,...r}}),i=(r,l,c)=>this.entitySelect(this.t(l),e[r]??null,n[r]??void 0,this.entityOptions(c),d=>o({[r]:d==="none"?"none":d})),s=r=>r.startsWith("sensor.");return v`<section>
      <h3>🏊 ${this.t("pro_name_pool")}</h3>
      <p class="fp3d-sub">${this.t("pool_pro_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${i("temperature","pool_temperature",r=>/^(sensor|climate|water_heater)\./.test(r))}
        ${i("heater","pool_heater",r=>/^(climate|water_heater|switch|input_boolean)\./.test(r))}
        ${i("pump","pool_pump",r=>/^(switch|fan|input_boolean|binary_sensor|sensor)\./.test(r))}
        ${i("light","pool_light",r=>/^(light|switch)\./.test(r))}
        ${i("ph","pool_ph",s)}
        ${i("chlorine","pool_chlorine_role",s)}
        ${i("cover","pool_cover",r=>r.startsWith("cover."))}
      </div>
      ${t.pool?$:v`<button class="fp3d-btn fp3d-primary" ?disabled=${!this.isAdmin} @click=${()=>this.updateOutdoor({pool:{}})}>${this.t("pool_activate")}</button>`}
    </section>`}renderRooms(t){return T`
      <g>${t.rooms.map(e=>{let n=e.points.map(o=>this.toScreen(o).join(",")).join(" ");return T`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,o]=this.toScreen(Lt(e.points));return T`<text class="fp3d-room-name" x=${n} y=${o-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${o+14}>${this.area(xt(e.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return $;let[n,o]=this.toScreen(t.points[e]),[i,s]=this.toScreen(t.points[(e+1)%t.points.length]);return T`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${o} x2=${i} y2=${s} />`}renderMeter(t){var i;let e=(i=this._doc.energy)==null?void 0:i.meter;if(!e||e.floor_id!==t.id)return $;let[n,o]=this.toScreen([e.x,e.z]);return T`<g class="fp3d-meter" transform="translate(${n} ${o})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale;return T`<g>${t.furniture.map(n=>{var g,_;let o=n.id===this._furnitureId,[i,s]=this.toScreen([n.x,n.z]),r=Math.min(n.w,n.d)*e>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/e),[d,p]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[u,f]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),m=zt(n.type)&&!!n.entity&&n.entity!=="none"&&((_=(g=this.hass)==null?void 0:g.states[n.entity])==null?void 0:_.state)==="on";return T`<g data-furniture=${n.id} class=${`fp3d-furn${o?" fp3d-furn-sel":""}${m?" fp3d-furn-lit":""}${se.includes(n.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${i} ${s}) rotate(${n.rotation}) scale(${n.mirror?-e:e} ${e})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${hr(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${r?T`<text x=${i} y=${s+4}>${ze(this.hass,n.type)}</text>`:$}
      </g>
      ${o&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,b])=>{let[y,S]=this.toScreen([n.x+h*n.w*Math.cos(l)/2-b*n.d*Math.sin(l)/2,n.z+h*n.w*Math.sin(l)/2+b*n.d*Math.cos(l)/2]);return T`<g class="fp3d-resize" data-resize=${`${n.id}:${h}:${b}`}>
              <circle cx=${y} cy=${S} r="14" class="fp3d-hit" />
              <rect x=${y-5} y=${S-5} width="10" height="10" rx="2" />
            </g>`}):$}
      ${o?(()=>{let[h,b]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/e),n.z-Math.cos(l)*(n.d/2+18/e)]);return T`<text class="fp3d-dim" x=${h} y=${b+4}>${this.m(n.w,2)} × ${this.m(n.d,2)}</text>`})():$}
      ${o&&n.locked?T`<text class="fp3d-lock" x=${d} y=${p+5}>🔒</text>`:$}
      ${o&&this.isAdmin&&!n.locked?T`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${u} y1=${f} x2=${d} y2=${p} />
            <circle cx=${d} cy=${p} r="16" class="fp3d-hit" />
            <circle cx=${d} cy=${p} r="8" />
            <path d="M${d-4} ${p-1}a4 4 0 1 1 2 3.5" />
          </g>`:$}`})}</g>`}renderOpenings(t,e){return T`<g>${t.openings.map(n=>{let o=Ce(n,t.rooms,t.walls??[]);if(!o)return $;let{room:i,edge:s}=o,r=oi(e,n,o),l=ae(i,s,n.offset-n.width/2),c=ae(i,s,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),p=(c[1]-l[1])/(n.width||1),u=at(i.points)>=0?1:-1,f=[-p*u,d*u],m=[.06,.06];r&&(m=r.wall.free||r.wall.roomLeft===i.id?[r.wall.left,r.wall.right]:[r.wall.right,r.wall.left]);let g=(M,x)=>this.toScreen([M[0]+f[0]*x,M[1]+f[1]*x]),_=[g(l,m[0]+.01),g(c,m[0]+.01),g(c,-m[1]-.01),g(l,-m[1]-.01)],h=n.id===this._openingId,b=Wn(n,(r==null?void 0:r.wall.exterior)??!1),y=n.type==="door"&&Bo(b),S=`fp3d-open fp3d-open-${n.type}${y?" fp3d-open-front":""}${h?" fp3d-open-sel":""}`,E;if(n.type==="garage"){let M=g(l,m[0]-.04),x=g(c,m[0]-.04),w=g(l,m[0]+Math.min(2,n.height)),k=g(c,m[0]+Math.min(2,n.height));E=T`<line x1=${M[0]} y1=${M[1]} x2=${x[0]} y2=${x[1]} />
          <path class="fp3d-open-track" d="M${M[0]} ${M[1]}L${w[0]} ${w[1]}M${x[0]} ${x[1]}L${k[0]} ${k[1]}" />`}else if(n.type==="door"){let M=n.swing==="out",x=M?-m[1]:m[0],w=n.hinge==="left"==u>0,k=n.leaves===2,A=l,P=c,O=[],L=Ns(n.width,b,w,n);if(L){let W=q=>q<=.02?l:q>=n.width-.02?c:ae(i,s,n.offset-n.width/2+q);A=W(L.x0),P=W(L.x1),O=L.panels.map(([q,K])=>[W(q),W(K)])}let j=[(A[0]+P[0])/2,(A[1]+P[1])/2],F=(k?.5:1)*Math.hypot(P[0]-A[0],P[1]-A[1]),V=(m[0]-m[1])/2,H=O.map(([W,q])=>{let K=g(W,V+.035),J=g(q,V+.035),ht=g(W,V-.035),_t=g(q,V-.035);return T`<line class="fp3d-open-pane" x1=${K[0]} y1=${K[1]} x2=${J[0]} y2=${J[1]} /><line class="fp3d-open-pane" x1=${ht[0]} y1=${ht[1]} x2=${_t[0]} y2=${_t[1]} />`}),C=(W,q)=>{let[K,J]=g(W,x),[ht,_t]=g(q,x),D=g(W,x+(M?-F:F)),ot=F*this._view.scale,ft=(D[0]-K)*(_t-J)-(D[1]-J)*(ht-K);return T`<path d="M${K} ${J}L${D[0]} ${D[1]}A${ot} ${ot} 0 0 ${ft>0?1:0} ${ht} ${_t}" />`};E=T`${H}${b==="passage"?T`<line class="fp3d-open-passage" x1=${g(l,V)[0]} y1=${g(l,V)[1]} x2=${g(c,V)[0]} y2=${g(c,V)[1]} />`:b==="sliding"?T`<line x1=${g(A,x)[0]} y1=${g(A,x)[1]} x2=${g(P,x)[0]} y2=${g(P,x)[1]} />`:k?T`${C(A,j)}${C(P,j)}`:C(w?A:P,w?P:A)}`}else{let M=(m[0]-m[1])/2,x=g(l,M+.035),w=g(c,M+.035),k=g(l,M-.035),A=g(c,M-.035),P=[(l[0]+c[0])/2,(l[1]+c[1])/2],O=g(P,m[0]),L=g(P,-m[1]);E=T`<line x1=${x[0]} y1=${x[1]} x2=${w[0]} y2=${w[1]} /><line x1=${k[0]} y1=${k[1]} x2=${A[0]} y2=${A[1]} />${n.leaves===2?T`<line x1=${O[0]} y1=${O[1]} x2=${L[0]} y2=${L[1]} />`:$}`}let R=g(l,(m[0]-m[1])/2),z=g(c,(m[0]-m[1])/2);return T`<g data-opening=${n.id} class=${S}>
        <line class="fp3d-open-hit" x1=${R[0]} y1=${R[1]} x2=${z[0]} y2=${z[1]} />
        <polygon class="fp3d-open-gap" points=${_.map(M=>M.join(",")).join(" ")} />
        ${E}
      </g>`})}</g>`}renderDevices(t){return T`<g>${t.placements.map(e=>{var c,d;let n=Y(e.entity_id);if(!n)return $;let[o,i]=this.toScreen([e.x,e.z]),s=((d=(c=this.hass)==null?void 0:c.states[e.entity_id])==null?void 0:d.state)==="on",r=e.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${r?" fp3d-device-sel":""}`;return T`${n==="camera"?this.renderCameraWedge(e,r):$}<g data-device=${e.entity_id} class=${l} transform="translate(${o} ${i})">
        <title>${st(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${_n(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${r&&e.locked?T`<text class="fp3d-lock" x=${o+16} y=${i-12}>🔒</text>`:$}`})}</g>`}renderCameraWedge(t,e){let n=t.mount==="ceiling",o=t.fov??(n?360:90),i=t.reach??(n?3:4.5),s=(t.rotation??0)*Math.PI/180,r=(y,S)=>this.toScreen([t.x-Math.sin(s+y)*S,t.z+Math.cos(s+y)*S]),[l,c]=this.toScreen([t.x,t.z]),d=Math.min(o,359.9)*Math.PI/180/2,[p,u]=r(-d,i),[f,m]=r(d,i),g=i*this._view.scale,_=o>=360?"":`M${l} ${c}L${p} ${u}A${g} ${g} 0 ${d>Math.PI/2?1:0} 1 ${f} ${m}Z`,[h,b]=r(0,i);return T`<g class="fp3d-wedge ${e?"fp3d-wedge-sel":""}">
      ${o>=360?T`<circle cx=${l} cy=${c} r=${g} />`:T`<path d=${_} />`}
      ${e&&this.isAdmin&&!t.locked?T`<g class="fp3d-rotate" data-aim=${t.entity_id}>
            <line x1=${l} y1=${c} x2=${h} y2=${b} />
            <circle cx=${h} cy=${b} r="16" class="fp3d-hit" />
            <circle cx=${h} cy=${b} r="8" />
            <path d="M${h-4} ${b-1}a4 4 0 1 1 2 3.5" />
          </g>`:$}
    </g>`}renderHandles(t){let e=t.points,n=e.length,o=e.map((s,r)=>{let l=e[(r+1)%n],[c,d]=this.toScreen(s),[p,u]=this.toScreen(l),f=Math.hypot(l[0]-s[0],l[1]-s[1]),m=(c+p)/2,g=(d+u)/2,[_,h]=this.toScreen(Lt(e)),b=-(u-d),y=p-c,S=Math.hypot(b,y)||1;b/=S,y/=S,b*(m-_)+y*(g-h)<0&&(b=-b,y=-y);let E=Math.hypot(p-c,u-d);return T`
        ${E>50?Math.abs(b)>Math.abs(y)?T`<text class="fp3d-dim" style="text-anchor:${b>0?"start":"end"}" x=${m+b*13} y=${g+y*13+4}>${this.m(f,2)}</text>`:T`<text class="fp3d-dim" x=${m+b*16} y=${g+y*16+4}>${this.m(f,2)}</text>`:$}
        ${E>36?T`<g data-mid=${r} class="fp3d-mid"><circle cx=${m} cy=${g} r="14" class="fp3d-hit" /><circle cx=${m} cy=${g} r="6" /><path d="M${m-3} ${g}h6M${m} ${g-3}v6" /></g>`:$}
      `}),i=e.map((s,r)=>{let[l,c]=this.toScreen(s);return T`<g data-vertex=${r} class=${r===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${c-9}>${r+1}</text>`});return T`<g>${o}${i}</g>`}renderDraft(){let t=this.drag;if((t==null?void 0:t.kind)==="freewall"){let[o,i]=this.toScreen(t.start),[s,r]=this.toScreen(t.end),l=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return T`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${o} y1=${i} x2=${s} y2=${r} />
        <text class="fp3d-dim" x=${(o+s)/2} y=${(i+r)/2-10}>${this.m(l,2)}</text>
      </g>`}if((t==null?void 0:t.kind)==="rect"){let[o,i]=this.toScreen(t.start),[s,r]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),c=Math.abs(t.end[1]-t.start[1]);return T`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(o,s)} y=${Math.min(i,r)} width=${Math.abs(s-o)} height=${Math.abs(r-i)} />
        <text class="fp3d-dim" x=${(o+s)/2} y=${Math.min(i,r)-8}>${this.m(l,2)} × ${this.m(c,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return $;let e=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=e.map(o=>this.toScreen(o));return T`<g pointer-events="none">
      ${n.length>1?T`<polyline class="fp3d-draft" points=${n.map(o=>o.join(",")).join(" ")} />`:$}
      ${n.slice(1).map((o,i)=>{let s=n[i];return Math.hypot(o[0]-s[0],o[1]-s[1])<30?$:T`<text class="fp3d-dim" x=${(s[0]+o[0])/2} y=${(s[1]+o[1])/2-6}>${this.m(Math.hypot(e[i+1][0]-e[i][0],e[i+1][1]-e[i][1]),2)}</text>`})}
      ${this._draft.map((o,i)=>{let[s,r]=this.toScreen(o);return T`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${r} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?T`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:$}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return T`<g pointer-events="none">
      ${t.x!==void 0?T`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:$}
      ${t.z!==void 0?T`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:$}
      ${t.point?T`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:$}
    </g>`}get unit(){return si(this.hass,this._doc.settings.units)}m(t,e=2){return yr(t,this.unit,n=>St(this.hass,n,e))}area(t){return $r(Math.abs(t),this.unit,e=>St(this.hass,e,1))}lenValue(t){return this.unit==="imperial"?we(t):String(I(t))}readLen(t){if(this.unit==="imperial")return ri(t,"imperial");let e=parseFloat(t.replace(",","."));return Number.isFinite(e)?e:null}len(t,e,n,o=.01,i){return this.unit!=="imperial"?this.num(t,e,n,o,i):v`<label class="fp3d-field"
      >${fn(t,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${we(e)}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=s.target,l=ri(r.value,"imperial");l!==null?n(i!==void 0?Math.max(i,l):l):r.value=we(e)}}
    /></label>`}num(t,e,n,o=.01,i){return v`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${o}
        min=${i??$}
        .value=${String(I(e))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=parseFloat(s.target.value.replace(",","."));Number.isFinite(r)&&n(r)}}
    /></label>`}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",t?"1":"0")}catch{}}renderAside(t){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?v`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:v`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?v`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:$}
        <button class="fp3d-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="fp3d-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:v`<aside class="fp3d-side">${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){return!this._split||this.narrow?$:v`<div class="fp3d-pin-row">
      ${t?v`<button class="fp3d-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:$}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(t){var r,l,c,d;let e=((r=this._doc)==null?void 0:r.floors)??[],n=this.room,o=this.isAdmin,i=Object.values(((l=this.hass)==null?void 0:l.areas)??{}).sort((p,u)=>p.name.localeCompare(u.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(t);if(this._tool==="furniture"&&t&&o)return v`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):$} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?v`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:(n==null?void 0:n.name)??""})}</button>
        ${s}`:n&&this._tool!=="measure"?v`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,i)} ${this.renderDeviceList(n)}`:v`
      ${o?$:v`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...e].reverse().map(p=>v`<button
              class="fp3d-chip"
              aria-pressed=${p.id===this._floorId}
              @click=${()=>{this._floorId=p.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${p.name}
            </button>`)}
          ${o?v`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:$}
        </div>
        ${o&&this._floorMenu?v`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(p=>v`<button class="fp3d-btn" @click=${()=>this.addFloor(p)}>
                  ${p.name}${p.level!=null?v` <span class="fp3d-sub">· ${this.t("level",{n:p.level})}</span>`:$}
                </button>`)}
              <button class="fp3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:$}
        ${t?v`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!o} @change=${p=>this.updateFloor({name:p.target.value})}
              /></label>
              ${this.len(this.t("elevation"),t.elevation,p=>this.updateFloor({elevation:p}))}
              ${o?v`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${p=>this._shiftX=Number(p.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${p=>this._shiftZ=Number(p.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${t.start_view?v`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:$}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${p=>this._shiftAll=p.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:$}
              ${this.len(this.t("height"),t.height,p=>this.updateFloor({height:Math.max(1,p)}),.05,1)}
              ${Object.keys(((c=this.hass)==null?void 0:c.floors)??{}).length?v`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!o} @change=${p=>this.updateFloor({ha_floor:p.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(((d=this.hass)==null?void 0:d.floors)??{}).filter(p=>p.floor_id===t.ha_floor||!e.some(u=>u.ha_floor===p.floor_id)).map(p=>v`<option value=${p.floor_id} ?selected=${p.floor_id===t.ha_floor}>${p.name}</option>`)}
                    </select></label
                  >`:$}
              ${o&&this.unplacedAreas(t).length?v`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                  </div>`:$}
              ${o?v`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFloor()}>${this.t("delete_floor")}</button>
                  </div>
                  <div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("gaps_hint")} ?disabled=${t.rooms.length<2} @click=${()=>this.closeFloorGaps()}>
                      ${this.t("gaps_close")}
                    </button>
                    <button class="fp3d-btn" title=${this.t("straighten_hint")} ?disabled=${!t.rooms.length} @click=${()=>this.straightenFloor()}>
                      ${this.t("straighten")}
                    </button>
                  </div>
                  ${this._notice?v`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:$}`:$}
            </div>`:$}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?v`${this.renderRoomForm(n,i)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):$}
      ${o?this.renderStartView():$} ${o?this.renderFavorites():$}
      ${this.renderHelpLinks()}
      ${o&&!1?this.renderPresenceSettings():$}
      ${t&&o?this.renderBackgroundForm(t):$} ${o?this.renderSettings():$}
      ${o?this.renderBackup():$}
    `}renderRoomList(t){return t.rooms.length?v`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map(e=>v`<button class="fp3d-row" @click=${()=>this.selectItem("room",e.id)}>
            <span>${e.name}</span><span class="fp3d-muted">${this.area(xt(e.points))}</span>
          </button>`)}
      </div>
    </section>`:$}renderRoomOpenings(t){var n;let e=(((n=this.floor)==null?void 0:n.openings)??[]).filter(o=>o.room_id===t.id);return e.length?v`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${e.length})</summary>
      <div class="fp3d-room-list">
        ${e.map(o=>v`<button class="fp3d-row" @click=${()=>{var i;return this.selectItem("opening",o.id),(i=this.renderRoot.querySelector(".fp3d-side"))==null?void 0:i.scrollTo(0,0)}}>
            <span>${this.t(`preset_${Bn(o)}`)}</span><span class="fp3d-muted">${this.m(o.width,2)}</span>
          </button>`)}
      </div>
    </details>`:$}renderRoomForm(t,e){let n=this.isAdmin,o=Un(t.points),i=dt(t.points);return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",t.id)}</div>
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${()=>this.openRoomWalls(t)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(s=>v`<option value=${s.area_id} ?selected=${s.area_id===t.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${Os.map(s=>v`<option value=${s} ?selected=${s===t.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${o?v`${this.len(this.t("x"),i.x0,s=>this.setRect("x",s))} ${this.len(this.t("z"),i.z0,s=>this.setRect("z",s))}
            ${this.len(this.t("width"),i.x1-i.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.len(this.t("depth"),i.z1-i.z0,s=>this.setRect("d",s),.01,.05)}`:$}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${fn(this.t("room_ceiling"),this.unit)}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            step="0.05"
            min="1"
            placeholder=${this.floor?this.lenValue(this.floor.height):""}
            .value=${t.ceiling_height!=null?this.lenValue(t.ceiling_height):""}
            ?disabled=${!n}
            @change=${s=>{let r=s.target.value.trim(),l=r===""?null:this.readLen(r);this.updateRoom({ceiling_height:l===null||l<=0?null:Math.min(30,Math.max(1,l))})}}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!n} @click=${()=>this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${t.start_view?v`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:$}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(xt(t.points)),n:this.area(br(t,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{var s;(s=navigator.clipboard)==null?void 0:s.writeText(t.id).catch(()=>{})}}>${t.id}</code></p>
      ${this.renderEdgeHeights(t)} ${this.renderRoomClimate(t)} ${this.renderRoomOpenings(t)}
      <details class="fp3d-points" ?open=${!o}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((s,r)=>v`<div class="fp3d-point ${r===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${r+1}</span>
            ${this.len(this.t("x"),s[0],l=>this.setPoint(r,0,l))} ${this.len(this.t("z"),s[1],l=>this.setPoint(r,1,l))}
            ${n?v`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(r)}>
                  ×
                </button>`:$}
          </div>`)}
      </details>
      ${n?v`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:$}
      ${this._spots?this.renderSpotForm(t):$}
      ${this._packages?v`<div class="fp3d-packages">
            ${Aa.map(s=>v`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:$}
    </section>`}applyPackage(t,e){if(!this.isAdmin)return;let n=za(t,e,()=>B("furniture"));this.change((o,i)=>i.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=dt(t.points),n=this.hass?$e(this.hass,t.area_id).filter(o=>o.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,o,i]=Dt[e.type],s=Ho(t,e.rows,e.cols).map(([r,l])=>({id:B("furniture"),type:e.type,x:r,z:l,rotation:0,w:n,d:o,h:i,variant:null,entity:e.entity??"none",power:null}));this.change((r,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(t){let e=this._spots,n=Ho(t,e.rows,e.cols).length,o=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),i=s=>this._spots={...e,...s};return v`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>i({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>v`<option value=${s} ?selected=${s===e.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),e.cols,s=>i({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),e.rows,s=>i({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),e.entity,void 0,o,s=>i({entity:s==="none"?null:s}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(t)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}iconInput(t,e){let n=t?t.startsWith("mdi:")?t:`mdi:${t}`:"";return v`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${t??""} ?disabled=${!this.isAdmin} @change=${o=>e(o.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?rs(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):$}
      </span></label
    >`}markerSelect(t,e){return v`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${Ss.map(n=>v`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t){var n;let e=o=>{var r,l,c,d,p,u,f,m;let i=(l=(r=this.hass)==null?void 0:r.entities)==null?void 0:l[o],s=(i==null?void 0:i.area_id)??(i!=null&&i.device_id?(p=(d=(c=this.hass)==null?void 0:c.devices)==null?void 0:d[i.device_id])==null?void 0:p.area_id:null);return s?(m=(f=(u=this.hass)==null?void 0:u.areas)==null?void 0:f[s])==null?void 0:m.name:void 0};return Object.keys(((n=this.hass)==null?void 0:n.states)??{}).filter(t).map(o=>({id:o,label:`${st(this.hass,o)}${e(o)?` \xB7 ${e(o)}`:""}`})).sort((o,i)=>o.label.localeCompare(i.label))}entitySelect(t,e,n,o,i){let s=n===void 0?null:n?this.t("entity_auto",{name:st(this.hass,n)}):this.t("entity_auto_none"),r=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return v`<label class="fp3d-field fp3d-wide"
      >${t}
      <fp3d-entity-picker
        .options=${o}
        .fixed=${r}
        .value=${e===null?s!==null?"__auto":"none":e}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(t){var i;let e=this.floor,n=e?Ce(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let o=vt(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return((i=oi(o.walls,t,n))==null?void 0:i.wall.exterior)??!1}renderSidelightFields(t){if(t.type!=="door")return $;let e=Wn(t,this.openingIsExterior(t));if(e!=="sidelight"&&e!=="sidelights")return $;let n=this.isAdmin,o=(i,s)=>v`<label class="fp3d-field"
      >${this.t(s)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${t[i]==null?"":String(t[i])}
        ?disabled=${!n}
        @change=${r=>{let l=Number(r.target.value);this.updateOpening({[i]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return e==="sidelight"?v`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!t.sidelight_hinge} ?disabled=${!n} @change=${i=>this.updateOpening({sidelight_hinge:i.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${o("sidelight_width","sidelight_width")}`:v`${o("sidelight_width","sidelight_width_left")} ${o("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(t){let e=t.type==="door"?Wo:No,n=Wn({type:t.type,style:null},this.openingIsExterior(t)),o=t.style&&e.includes(t.style)?t.style:"";return v`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${i=>this.updateOpening({style:i.target.value||null})}>
        <option value="" ?selected=${!o}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(i=>v`<option value=${i} ?selected=${i===o}>${this.t(`style_${i}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",o=t.type==="garage",i=h=>{var y;if(!this.hass)return null;let b=structuredClone(this._doc.floors);for(let S of b)for(let E of S.openings)E.id===t.id&&(E[h]=null);return((y=rr(this.hass,b).get(t.id))==null?void 0:y[h])??null},s=h=>{var b,y;return(y=(b=this.hass)==null?void 0:b.states[h])==null?void 0:y.attributes.device_class},r=this.entityOptions(h=>h.startsWith("cover.")),l=this.entityOptions(h=>{var b,y;return/^(sensor|number|input_number)\./.test(h)&&Number.isFinite(Number((y=(b=this.hass)==null?void 0:b.states[h])==null?void 0:y.state))}),c=this.entityOptions(h=>{var b;return h.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(h)??"")||yt(h)&&Zo((b=this.hass)==null?void 0:b.states[h])!==null}),d=this.entityOptions(h=>{var y;let b=(y=this.hass)==null?void 0:y.states[h];return h.startsWith("binary_sensor.")?typeof(b==null?void 0:b.attributes.window_state)=="string":yt(h)&&(Zo(b)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${h} ${st(this.hass,h)}`))}),p=this.entityOptions(h=>h.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(h)??"")),u=o?this.entityOptions(h=>h.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(h)??"")||La.test(h)):c,f=o&&La.test(t.contact??"")&&!(t.cover&&t.cover!=="none")&&!i("cover"),m=h=>{let b=h===1,y=b?t.tilt:t.tilt2??null,S=b?t.contact:t.contact2,E=(b?t.sensor:t.sensor2)??(y&&y!=="none"?"contact_tilt":"contact"),R=z=>this.updateOpening(b?{contact:z}:{contact2:z==="none"?null:z});return v`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${z=>{let M=z.target.value,x=M==="contact_tilt"?{}:b?{tilt:null}:{tilt2:null};this.updateOpening({...b?{sensor:M}:{sensor2:M},...x})}}
          >
            ${["contact","handle","contact_tilt"].map(z=>v`<option value=${z} ?selected=${z===E}>${this.t(`sensor_kind_${z}`)}</option>`)}
          </select></label
        >
        ${E==="handle"?this.entitySelect(this.t("handle_entity"),S,void 0,d,z=>R(z==="none"?b?"none":null:z)):this.entitySelect(this.t("contact_entity"),S,b?i("contact"):void 0,p,R)}
        ${E==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),y,void 0,c,z=>this.updateOpening(b?{tilt:z==="none"?null:z}:{tilt2:z==="none"?null:z})):$}
        ${b?v`${this.entitySelect(this.t("tilt_angle_entity"),t.tilt_angle??null,void 0,this.entityOptions(z=>yt(z)),z=>this.updateOpening({tilt_angle:z==="none"?null:z}))}
            ${t.tilt_angle&&t.tilt_angle!=="none"?v`${this.num(this.t("tilt_angle_max"),t.tilt_max??15,z=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,z))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),t.tilt_offset??0,z=>this.updateOpening({tilt_offset:z}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!t.tilt_invert} ?disabled=${!e} @change=${z=>this.updateOpening({tilt_invert:z.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:$}`:$}`},g=Bn(t),_=t.type==="door";return v`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${g}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?v`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Nn).map(h=>v`<button class="fp3d-chip" aria-pressed=${h===g} @click=${()=>this.setOpeningPreset(t,h)}>${this.t(`preset_${h}`)}</button>`)}
          </div>`:$}
      ${e&&!o?v`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${_?v`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:$}
          </div>`:$}
      <div class="fp3d-form">
        ${this.len(this.t("width"),t.width,h=>this.updateOpening({width:Math.max(.3,h)}),.01,.3)}
        ${this.len(this.t("opening_position"),t.offset,h=>this.updateOpening({offset:Math.max(0,h)}),.01,0)}
        ${n?this.len(this.t("sill"),t.sill,h=>this.updateOpening({sill:Math.max(0,h)}),.01,0):$}
        ${this.len(this.t("opening_height"),t.height,h=>this.updateOpening({height:Math.max(.3,h)}),.01,.3)}
        ${o?$:this.renderStyleSelect(t)}
        ${this.renderSidelightFields(t)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${h=>this.updateOpening({mark:h.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${o?$:v`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${h=>this.updateOpening({hinge:h.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||o||_?this.entitySelect(this.t(n?"cover_entity":"door_cover"),t.cover,i("cover"),r,h=>this.updateOpening({cover:h})):$}
        ${(n||o||_)&&t.cover!=="none"&&(t.cover||i("cover"))?v`${this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,l,h=>this.updateOpening({position:h==="none"?null:h}))}
              ${t.position?v`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${h=>this.updateOpening({position_inverted:h.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:$}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_invert_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.cover_invert} @change=${h=>this.updateOpening({cover_invert:h.target.checked||void 0})} />
                ${this.t("cover_invert")}</label
              >
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${h=>this.updateOpening({confirm:h.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:$}
        ${n?v`${t.leaves===2?v`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:$}
              ${m(1)} ${t.leaves===2?v`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${m(2)}`:$}`:v`${this.entitySelect(this.t(o?"garage_contact":t.leaves===2?"contact_main":"contact_entity"),t.contact,i("contact"),u,h=>this.updateOpening({contact:h}))}
              ${f?v`<label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                    ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${h=>this.updateOpening({confirm:h.target.checked})} />
                    ${this.t("device_confirm")}</label
                  >`:$}
              ${t.leaves===2&&!o?this.entitySelect(this.t("contact_second"),t.contact2,void 0,c,h=>this.updateOpening({contact2:h==="none"?null:h})):$}
              ${_?v`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!t.shut} ?disabled=${!e} @change=${h=>this.updateOpening({shut:h.target.checked})} />
                    ${this.t("door_shut")}</label
                  >`:$}`}
        ${t.contact!=="none"&&(t.contact||t.contact2||i("contact"))?v`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!t.contact_invert} ?disabled=${!e} @change=${h=>this.updateOpening({contact_invert:h.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:$}
        ${t.type==="window"?v`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!t.rain_ignore} ?disabled=${!e} @change=${h=>this.updateOpening({rain_ignore:h.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:$}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":o?"garage_hint":"door_hint")}</p>
      ${e?v`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:$}
    </section>`}renderFurnitureForm(t){let e=this.isAdmin;return v`<section>
      <div class="fp3d-h3row"><h3>${t.name||this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${t.name??""} ?disabled=${!e} placeholder=${this.t(`furn_${t.type}`)===`furn_${t.type}`?"":this.t(`furn_${t.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        ${t.name?v`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:$}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${jo.map(n=>v`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).filter(n=>n.items.length).map(n=>v`<optgroup label=${Yt(n)}>
                ${n.items.map(o=>{let i=Re(n.id,o.id);return v`<option value=${i} ?selected=${i===t.type}>${ie(o)}</option>`})}
              </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(n=>t.type.startsWith(`pack:${n.id}:`))?v`<option value=${t.type} selected>${ze(this.hass,t.type)}</option>`:$}
          </select></label
        >
        ${this.len(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.len(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.len(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.len(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.len(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${zt(t.type)?$:v`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!t.mirror} ?disabled=${!e} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${t.type==="led_strip"?v`${this.num(this.t("strip_tilt"),t.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!t.upright} ?disabled=${!e} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:$}
        ${Le(t)&&this.floor?v`${this.len(this.t("mount_height"),t.mount_y??At(this.floor,t),n=>this.updateFurniture({mount_y:Math.min(Li,Math.max(0,n))}),.01,0)}
              ${t.mount_y!=null?v`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:$}`:$}
      </div>
      ${t.type==="stairs"?v`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:$}
      ${t.type==="stairs_u"?v`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:$}
      ${t.type==="stairwell"?v`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&(Vr(Ht(t),n.points)||xt(ii(n.points,Ht(t)))>.01))?v`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:$}`:$}
      ${t.type==="inverter"||t.type==="home_battery"?v`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(t.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>v`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`${t.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:$}
      ${t.type==="lamp_pendant"?v`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>v`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:$}
      ${cn(t.type)?this.renderFurnitureLinks(t):bc.has(t.type)?$:v`<div class="fp3d-form fp3d-links">${this.renderStateLinks(t)}</div>`} ${t.type==="parking"?this.renderParkingForm(t):$}
      ${t.type.startsWith("pack:mastershort.vehicles:")&&this.isAdmin?v`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(t)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:$}
      ${e?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(t)}>▦ ${this.t("wall_view")}</button>
            ${t.entity&&t.entity!=="none"&&t.type!=="parking"?v`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(t)}>${this.t("as_device")}</button>`:$}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:$}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=$a(this.hass,t),n=0,o=r=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===r),i=(r,l,c)=>{if(!c)return;let d=o(r);if(!d&&this.floor&&(this.addEnergyDevice(r),d=o(r)),!d||d[l]&&d[l]!=="none")return;let p=d.id;this.change(u=>{let f=u.floors.flatMap(m=>m.furniture).find(m=>m.id===p);f&&(f[l]=c)}),n++};i("meter","power",e.grid),i("inverter","power",e.solar),i("home_battery","power",e.battery),i("home_battery","soc",e.battery_soc);let s=ya(t);for(let r of["gas","water"])s[r]&&!this._doc.energy[r]&&(this.setEnergy({[r]:s[r]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let t=this._doc.energy,e=this.isAdmin,n=(g,_)=>{var h,b;return(b=(h=this.hass)==null?void 0:h.states[g])==null?void 0:b.attributes[_]},o=this.entityOptions(g=>this.isPowerSensor(g)),i=this.entityOptions(g=>yt(g)&&n(g,"device_class")==="battery"),s=this.entityOptions(g=>yt(g)&&(n(g,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(g,"unit_of_measurement")??""))),r=g=>_=>this.setEnergy({[g]:_==="none"?null:_}),l=g=>this.entityOptions(_=>yt(_)&&(n(_,"device_class")===g||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(_,"unit_of_measurement")??""))),c=this.hass?Te(this.hass,this._doc.floors):new Map,d=Ei(this._doc,g=>this.devicePower(g,c)),p=this.hass?wa(this.hass,this._doc,[],d):null,u=!!p&&(p.solar??0)<20,f=u&&p.grid!==null&&p.grid<-50,m=u&&p.battery!==null&&p.battery<-50&&(p.grid??0)<=0;return v`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${f?v`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({grid_invert:!t.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:$}
      ${m?v`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({battery_invert:!t.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:$}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),t.grid,d.grid,o,r("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} ?disabled=${!e} @change=${g=>this.setEnergy({grid_invert:g.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,d.solar[0]??null,o,r("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,d.battery[0]??null,o,r("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} ?disabled=${!e} @change=${g=>this.setEnergy({battery_invert:g.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,d.soc[0]??null,i,r("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),t.consumption,null,o,r("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,s,r("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),t.gas??null,void 0,l("gas"),g=>this.setEnergy({gas:g==="none"?null:g}))}
        ${this.entitySelect(this.t("energy_water_meter"),t.water??null,void 0,l("water"),g=>this.setEnergy({water:g==="none"?null:g}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!e||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?v`<p class="fp3d-sub">${this._energyNote}</p>`:$}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(t){let e=t.elevation+t.height;if(!(this._doc.settings.roof.sections??[]).some(i=>Kr(i,e)))return $;let o={settings:this._doc.settings};return T`${[1.5,2].map(i=>Gr(o,t.elevation,i).map(([s,r])=>{let[l,c]=this.toScreen(s),[d,p]=this.toScreen(r);return T`<line class="fp3d-headroom" x1=${l} y1=${c} x2=${d} y2=${p} />
          <text class="fp3d-headroom-label" x=${(l+d)/2} y=${(c+p)/2-4}>${this.m(i,1)}</text>`}))}`}renderFavorites(){let t=this._doc.settings.favorites??[],e=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>e.includes(s.split(".")[0])&&!t.includes(s)),o=s=>this.change(r=>r.settings.favorites=s.length?s:void 0),i=(s,r)=>{let l=[...t],[c]=l.splice(s,1);l.splice(Math.max(0,Math.min(l.length,s+r)),0,c),o(l)};return v`<details class="fp3d-section">
      <summary>${this.t("favorites")}${t.length?v` <span class="fp3d-lib-count">${t.length}</span>`:$}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${t.map((s,r)=>v`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${st(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${r===0} @click=${()=>i(r,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${r===t.length-1} @click=${()=>i(r,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>o(t.filter(l=>l!==s))}>✕</button>
        </div>`)}
      ${t.length<40?v`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!t.includes(s)&&o([...t,s])})}
          </div>`:$}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let t=this._doc.settings.media_presets??[],e=o=>this.change(i=>i.settings.media_presets=o.length?o:void 0),n=(o,i)=>e(t.map((s,r)=>r===o?{...s,...i}:s));return v`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(o=>v`<option value=${o}></option>`)}
      </datalist>
      ${t.map((o,i)=>v`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${o.label} @change=${s=>n(i,{label:s.target.value.trim()||"Radio"})}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${o.type} @change=${s=>n(i,{type:s.target.value.trim()||"music"})}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${o.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${s=>n(i,{content:s.target.value.trim()})}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((s,r)=>r!==i))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<30?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:B("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:$}`}renderOwnButtons(){let t=this._doc.settings.buttons??[],e=i=>this.change(s=>s.settings.buttons=i.length?i:void 0),n=(i,s)=>e(t.map((r,l)=>l===i?{...r,...s}:r)),o={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return v`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${t.map((i,s)=>v`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${r=>n(s,{label:r.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${r=>n(s,{action:r.target.value})}>
              ${Es.map(r=>v`<option value=${r} ?selected=${r===i.action}>${this.t(`own_action_${r}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(i.icon??null,r=>n(s,{icon:r}))}
          ${i.action!=="fire_dom_event"?v`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${i.action}`)}
                <input type="text" .value=${i.target??""} placeholder=${o[i.action]} @change=${r=>n(s,{target:r.target.value.trim()||null})}
              /></label>`:$}
          ${i.action==="service"||i.action==="fire_dom_event"?v`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${i.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${i.data?JSON.stringify(i.data,null,1):""}
                  @change=${r=>{r.target.setCustomValidity("");let l=r.target.value.trim();if(!l)return n(s,{data:null});try{let c=JSON.parse(l);c&&typeof c=="object"&&!Array.isArray(c)&&n(s,{data:c})}catch{r.target.setCustomValidity(this.t("own_data_bad")),r.target.reportValidity()}}}
                ></textarea></label
              >`:$}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>e([...t.slice(0,s-1),i,t[s-1],...t.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((r,l)=>l!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<20?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:B("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:$}`}paneView(){let t=this.renderRoot.querySelector("fp3d-view3d"),e=t==null?void 0:t.currentView();if(!e)return null;let n=e.target;return{theta:I(e.theta),phi:I(e.phi),radius:I(e.radius),...n?{target:{x:I(n.x),y:I(n.y),z:I(n.z)}}:{}}}rememberFloorView(){let t=this.paneView();if(!t){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:t})}rememberRoomView(){let t=this.paneView();if(!t){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:t})}renderStartView(){let t=this._doc.settings.start_view??null,e=()=>{let n=this.paneView();n&&this.change(o=>o.settings.start_view=n)};return v`<details class="fp3d-section">
      <summary>${this.t("start_view")}</summary>
      <p class="fp3d-sub">${this.t("start_view_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" @click=${e}>${this.t("start_view_set")}</button>
        ${t?v`<button class="fp3d-btn" @click=${()=>this.change(n=>n.settings.start_view=null)}>${this.t("start_view_reset")}</button>`:$}
      </div>
      ${t?v`<p class="fp3d-sub">${this.t("start_view_saved")}</p>
            <p class="fp3d-sub">${this.t("start_view_card")}</p>
            <code class="fp3d-code"
              >start_view: { theta: ${t.theta}, phi: ${t.phi}, radius: ${t.radius}${t.target?`, target: { x: ${t.target.x}, y: ${t.target.y}, z: ${t.target.z} }`:""} }</code
            >`:$}
    </details>`}renderPresenceSettings(){var o;let t=Object.keys(((o=this.hass)==null?void 0:o.states)??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let s=i.slice(7),r=this.entityOptions(c=>yt(c)),l=c=>c.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(c);return[...r.filter(c=>l(c.id)),...r.filter(c=>!l(c.id))]},n=(i,s)=>{let r=structuredClone(this._doc);r.presence=r.presence.filter(l=>l.person!==i),s&&s!=="none"&&r.presence.push({person:i,sensor:s}),this.setDoc(r)};return v`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(i=>{var s;return this.entitySelect(`${st(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,((s=this._doc.presence.find(r=>r.person===i))==null?void 0:s.sensor)??null,void 0,e(i),r=>n(i,r))}):v`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderStateLinks(t){return v`${this.entitySelect(this.t("furn_state_entity"),t.state_entity??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture({state_entity:e==="none"?null:e}))}
              ${t.state_entity&&t.state_entity!=="none"?v`${this.entitySelect(this.t("furn_state_entity2"),t.state_entity2??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture({state_entity2:e==="none"?null:e}))}
                    ${t.state_entity2&&t.state_entity2!=="none"?v`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${e=>this.updateFurniture({state_split:e.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${t.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${t.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:$}`:$}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderFurnitureLinks(t){var d;if(!this.hass)return $;let e=this.hass,n=p=>{var f;let u=structuredClone(this._doc.floors);for(let m of u)for(let g of m.furniture)g.id===t.id&&(g[p]=null);return((f=Te(e,u).get(t.id))==null?void 0:f[p])??null},o=Yn(t.type),i=o&&(!Oe(t.type)||vs(t.type)),s=zt(t.type),r=this.entityOptions(p=>s?/^(light|switch|input_boolean)\./.test(p):i?/^(media_player|switch|input_boolean|light)\./.test(p):t.type==="radiator"?p.startsWith("climate."):t.type==="robot_vacuum"?p.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(p)||ir(e.states[p])),l=this.entityOptions(p=>this.isPowerSensor(p)),c=t.type==="fridge_smart"?this.entityOptions(p=>p.startsWith("binary_sensor.")):[];return v`<div class="fp3d-form fp3d-links">
        ${t.type==="grid_point"?v`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(s?"furn_entity_light":i?"furn_entity_tv":t.type==="radiator"?"furn_entity_climate":t.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),t.entity??null,n("entity"),r,p=>this.updateFurniture({entity:p}))}
        ${!s&&!se.includes(t.type)&&!Qn(t.type)?this.renderStateLinks(t):$}
        ${s&&t.entity&&t.entity!=="none"?v`${this.entitySelect(this.t("furn_color_entity"),t.color_entity??null,void 0,this.entityOptions(p=>p.startsWith("light.")&&p!==t.entity),p=>this.updateFurniture({color_entity:p==="none"?null:p}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:$}
        ${s?this.glowScaleField(t.glow_scale,p=>this.updateFurniture({glow_scale:p})):$}
        ${s||t.type==="grid_point"?$:this.entitySelect(this.t(t.type==="meter"?"energy_grid":t.type==="inverter"?"energy_solar_sensor":t.type==="home_battery"?"energy_battery_sensor":"furn_power"),t.power??null,n("power"),l,p=>this.updateFurniture({power:p}))}
        ${ut("energy_pro")&&!s&&!["grid_point","meter","inverter","home_battery"].includes(t.type)?v`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({holo:p.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:ut("energy_pro")&&t.type==="inverter"?v`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${t.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({plant_card:p.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${t.plant_card!==!1?v`${this.len(this.t("holo_right"),t.plant_right??0,p=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,I(p)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),t.plant_up??0,p=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,I(p)))||void 0}),.25)}`:$}`:$}
      </div>
      ${t.type==="meter"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),t.export??null,void 0,l,p=>this.updateFurniture({export:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:$}
      ${t.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let p=(this._doc.settings.roof.strings??[]).filter(u=>u.inverter===t.id).map(u=>u.name);return v`<p class="fp3d-sub fp3d-wide">${p.length?this.t("inverter_strings",{names:p.join(", ")}):this.t("inverter_strings_none")}</p>`})():$}
      ${t.type==="home_battery"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(p=>{var u,f;return yt(p)&&(((u=e.states[p])==null?void 0:u.attributes.device_class)==="battery"||((f=e.states[p])==null?void 0:f.attributes.unit_of_measurement)==="%")}),p=>this.updateFurniture({soc:p==="none"?null:p}))}
            ${this.entitySelect(this.t("furn_charge"),t.charge??null,void 0,l,p=>this.updateFurniture({charge:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:$}
      ${t.type==="wallbox"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(p=>Ti(p)||yt(p)),p=>this.updateFurniture({status:p==="none"?null:p}))}
          </div>`:$}
      ${!s||t.entity?v`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({confirm:p.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(t.marker??null,p=>this.updateFurniture({marker:p}))}${this.iconInput(t.icon,p=>this.updateFurniture({icon:p}))}</div>`:$}
      ${t.type==="robot_vacuum"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,dr(e,((d=Te(e,this._doc.floors).get(t.id))==null?void 0:d.entity)??null,null),this.entityOptions(p=>yt(p)),p=>this.updateFurniture({room_sensor:p}))}
          </div>`:$}
      ${t.type==="fridge_smart"?v`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,c,p=>this.updateFurniture({door_left:p}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,c,p=>this.updateFurniture({door_right:p}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:$}
      ${Qn(t.type)?this.renderPictureRules(t):$}
      <p class="fp3d-sub">${this.t(s?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":o?"furn_links_hint_tv":t.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){var h;let e=this.isAdmin,n=(this.packs??[]).flatMap(b=>b.items.filter(y=>y.vehicle).map(y=>({id:Re(b.id,y.id),label:`${ie(y)} \xB7 ${Yt(b)}`}))),o=b=>{var y,S;return b.startsWith("device_tracker.")?((S=(y=this.hass)==null?void 0:y.states[b])==null?void 0:S.attributes.source_type)==="router"?2:0:1},i=this.entityOptions(b=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(b)).sort((b,y)=>o(b.id)-o(y.id)),s=this.entityOptions(b=>/^(sensor|input_select|select|input_text)\./.test(b)),r=t.type_entity?(h=this.hass)==null?void 0:h.states[t.type_entity]:void 0,l=Array.isArray(r==null?void 0:r.attributes.options)?r.attributes.options:[],c=t.types??[],d=b=>this.updateFurniture({types:b}),p=(b,y)=>v`<select ?disabled=${!e} @change=${S=>y(S.target.value||null)}>
        <option value="" ?selected=${!b}>${this.t("parking_vehicle_none")}</option>
        ${n.map(S=>v`<option value=${S.id} ?selected=${S.id===b}>${S.label}</option>`)}
      </select>`,u=this.floor,f=u==null?void 0:u.rooms.find(b=>b.points.length>=3&&N([t.x,t.z],b.points)),m=t.vehicle?gt(t.vehicle):void 0,g=m?m.size[2]*(t.scale??1):0,_=!!f&&!!u&&g>u.height+1e-6;return v`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,i,b=>this.updateFurniture({entity:b==="none"?null:b}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${p(t.vehicle??null,b=>this.updateFurniture({vehicle:b}))}</label>
        ${n.length?$:v`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),b=>this.updateFurniture({scale:Math.min(150,Math.max(30,b))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,s,b=>this.updateFurniture({type_entity:b==="none"?null:b}))}
        ${t.type_entity?v`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${c.map((b,y)=>v`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${b.state}
                    ?disabled=${!e}
                    @change=${S=>d(c.map((E,R)=>R===y?{...E,state:S.target.value}:E))}
                  />
                  ${p(b.vehicle,S=>d(c.map((E,R)=>R===y?{...E,vehicle:S??""}:E)))}
                  <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>d(c.filter((S,E)=>E!==y))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(b=>v`<option value=${b}></option>`)}</datalist>
              ${e?v`<button class="fp3d-btn" @click=${()=>{var b;return d([...c,{state:l[c.length]??"",vehicle:((b=n[0])==null?void 0:b.id)??""}])}}>${this.t("parking_add_type")}</button>`:$}
            </div>`:$}
      </div>
      ${_?v`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:St(this.hass,g,2),room:St(this.hass,u.height,2)})}</p>`:$}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(t)}`}renderCarForm(t){if(!ut("auto_pro"))return v`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return $;let e=this.hass,n=t.car??{},o=cr(e,{entity:t.entity,car:{device:n.device}}),i=l=>this.updateFurniture({car:{...n,...l}}),s=this.entityOptions(l=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(l)),r=(l,c,d)=>this.entitySelect(this.t(c),n[l]??null,o[l],d,p=>i({[l]:p==="none"?"none":p}));return v`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),n.device??null,void 0,s,l=>i({device:l==="none"?null:l}))}
        ${r("soc","car_soc",this.entityOptions(l=>yt(l)))}
        ${r("range","car_range",this.entityOptions(l=>yt(l)))}
        ${r("charging","car_charging",this.entityOptions(l=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(l)))}
        ${r("plugged","car_plugged",this.entityOptions(l=>Ti(l)))}
        ${r("lock","car_lock",this.entityOptions(l=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(l)))}
        ${r("climate","car_climate",this.entityOptions(l=>/^(climate|switch|binary_sensor|input_boolean)\./.test(l)))}
        ${r("tracker","car_tracker",this.entityOptions(l=>l.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(t){let e=new Set(this._libOpen);e.has(t)?e.delete(t):e.add(t),this._libOpen=e;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...e]))}catch{}}librarySection(t,e,n,o){let i=go(o).split(/\s+/).filter(Boolean),s=i.length?n.filter(l=>{let c=go(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${e}`);return i.every(d=>c.includes(d))}):n;if(o&&!s.length)return $;let r=o?!0:this._libOpen.has(t);return v`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${r} @click=${()=>this.toggleLibrary(t)}>
        <span class="fp3d-lib-caret">${r?"\u25BE":"\u25B8"}</span>${e} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${r?v`<div class="fp3d-library">${s.map(l=>this.libraryButton(l.type,l.label))}</div>`:$}`}libraryHasHits(t){let e=go(t).split(/\s+/).filter(Boolean);return[...Object.entries(Co).flatMap(([o,i])=>i.map(s=>`${this.t(`furn_${s}`)} ${Nt(ja,`furn_${s}`)} ${s.replace(/_/g," ")} ${this.t(`furn_group_${o}`)}`)),...(this.packs??[]).flatMap(o=>o.items.map(i=>`${ie(i)} ${Object.values(i.name).join(" ")} ${i.id.replace(/_/g," ")} ${o.name} ${Yt(o)}`))].some(o=>{let i=go(o);return e.every(s=>i.includes(s))})}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let o of n.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!t.includes(o.image)&&t.push(o.image);return t}renderPictureRules(t){let e=this.isAdmin,n=t.pictures??[];if(!ut("screens"))return v`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${ke("screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let o=h=>this.updateFurniture({pictures:h}),i=this.entityOptions(()=>!0),s=h=>["string","number","boolean"].includes(typeof h),r=h=>{var b,y;return Object.entries(((y=(b=this.hass)==null?void 0:b.states[h])==null?void 0:y.attributes)??{}).filter(([S,E])=>s(E)&&S!=="friendly_name"&&S!=="icon").map(([S])=>S)},l=(h,b)=>{var S;let y=(S=this.hass)==null?void 0:S.states[h];return y?String((b?y.attributes[b]:y.state)??""):""},c=(h,b)=>{var E;let y=(E=this.hass)==null?void 0:E.states[h],S=!b&&Array.isArray(y==null?void 0:y.attributes.options)?y.attributes.options:[];return S.length?S:[l(h,b)]},d=h=>`${h.entity}\0${h.attribute??""}`,p=[];n.forEach((h,b)=>{let y=p.find(S=>d(S)===d(h));y?y.rows.push(b):p.push({entity:h.entity,attribute:h.attribute??null,rows:[b]})});let u=(h,b)=>o(n.map((y,S)=>h.rows.includes(S)?{...y,...b}:y)),f=(h,b)=>o(n.map((y,S)=>S===h?{...y,...b}:y)),m=this.storedPictures(),g=this.entityOptions(h=>h.startsWith("camera.")),_=h=>h.image.startsWith("camera:")?h.image.slice(7):null;return v`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?v`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${h=>this.updateFurniture({screen_bg:h.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:$}
      ${p.map(h=>v`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${i}
            .value=${h.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${b=>{b.stopPropagation(),u(h,{entity:b.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${b=>{let y=b.target.value||null,S=l(h.entity,y);o(n.map((E,R)=>h.rows.includes(R)?{...E,attribute:y,state:h.rows[0]===R?S:E.state}:E))}}
          >
            <option value="" ?selected=${!h.attribute}>${this.t("picture_state_of")}</option>
            ${r(h.entity).map(b=>v`<option value=${b} ?selected=${b===h.attribute}>${b}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(h.entity,h.attribute)||"\u2013"})}</span>
          ${h.rows.map(b=>{var E,R;let y=n[b],S=!!this.hass&&lr(this.hass,y);return v`<div class="fp3d-picture-row ${S?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${b}"
                placeholder=${this.t("picture_state")}
                .value=${y.state}
                ?disabled=${!e}
                @change=${z=>f(b,{state:z.target.value})}
              />
              <datalist id="fp3d-picture-states-${b}"><option value="*"></option>${c(h.entity,h.attribute).map(z=>v`<option value=${z}></option>`)}</datalist>
              ${this._images[y.image]?v`<img class="fp3d-picture-thumb" src=${this._images[y.image].url} alt="" /> `:$}
              ${_(y)&&((R=(E=this.hass)==null?void 0:E.states[_(y)])!=null&&R.attributes.entity_picture)?v`<img class="fp3d-picture-thumb" src=${String(this.hass.states[_(y)].attributes.entity_picture)} alt="" />`:$}
              <label class="fp3d-btn fp3d-picture-pick">
                ${y.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${z=>{this.uploadPicture(z,t,b)}} />
              </label>
              ${m.filter(z=>z!==y.image).length?v`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${m.filter(z=>z!==y.image&&this._images[z]).map(z=>v`<button class="fp3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>f(b,{image:z})}><img src=${this._images[z].url} alt="" /></button>`)}
                  </div>`:$}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(y.image)?y.image:""}
                ?disabled=${!e}
                @change=${z=>{let M=z.target.value.trim();M&&f(b,{image:M})}}
              />
              ${g.length?v`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${g}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${_(y)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${z=>{z.stopPropagation(),z.detail.value!=="none"?f(b,{image:`camera:${z.detail.value}`}):_(y)&&f(b,{image:""})}}
                  ></fp3d-entity-picker>`:$}
              <span class="fp3d-sub">${S?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>o(n.filter((z,M)=>M!==b))}>✕</button>
            </div>`})}
          ${e?v`<button class="fp3d-btn" @click=${()=>o([...n,{entity:h.entity,attribute:h.attribute,state:l(h.entity,h.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:$}
        </div>`)}
      ${e?v`<button class="fp3d-btn" @click=${()=>{var h;return o([...n,{entity:((h=i[0])==null?void 0:h.id)??"",attribute:null,state:"on",image:""}])}}>${this.t("picture_add_entity")}</button>`:$}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){var u,f;let o=t.target,i=(u=o.files)==null?void 0:u[0];if(o.value="",!i)return;let s=await createImageBitmap(i),r=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*r),l.height=Math.round(s.height*r),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let c=l.toDataURL(i.type==="image/png"?"image/png":"image/jpeg",.85),d=B("pic");await jn(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let p=((f=this.furnitureItem)==null?void 0:f.id)===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:p.map((m,g)=>g===n?{...m,image:d}:m)})}renderFurnitureLibrary(){let t=this.room,e=this._furnQuery.trim().toLowerCase();return v`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${t?this.t("furniture_into",{room:t.name}):this.t("furniture_pick_room")}</p>
      <input
        class="fp3d-search"
        type="search"
        placeholder=${this.t("furniture_search")}
        .value=${this._furnQuery}
        @input=${n=>this._furnQuery=n.target.value}
        @keydown=${n=>{n.key==="Escape"&&(this._furnQuery="")}}
      />
      ${e&&!this.libraryHasHits(e)?v`<p class="fp3d-sub">${this.t("furniture_search_none")}</p>`:$}
      ${Object.entries(Co).map(([n,o])=>this.librarySection(`group:${n}`,this.t(`furn_group_${n}`),[...o,...n==="kitchen"&&ut("fridge_smart")?["fridge_smart"]:[]].map(i=>({type:i,label:this.t(`furn_${i}`),search:Nt(ja,`furn_${i}`)})),e))}
      ${(this.packs??[]).filter(n=>n.items.length).map(n=>this.librarySection(`pack:${n.id}`,Yt(n),n.items.map(o=>({type:Re(n.id,o.id),label:ie(o),search:Object.values(o.name).join(" ")})),e))}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(t,e){let n=i=>{this.showPreview(t,i.currentTarget)},o=zt(t)?"light":cn(t)?"switch":null;return v`<button
      class="fp3d-btn ${o?"fp3d-lib-electric":""}"
      title=${o?this.t(o==="light"?"lib_badge_light":"lib_badge_electric"):e}
      @click=${()=>this.addFurniture(t)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${e}
      ${o?v`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${_n(o)} />
          </svg>`:$}
    </button>`}async showPreview(t,e){var i;let n=e.getBoundingClientRect(),o={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...o};try{let s=await Ri(),[r,l,c]=oe(t),d=s.furniturePreview({type:t,w:r,d:l,h:c,variant:null,lamp:qo[t]??null},180,this.packs??[]);((i=this._preview)==null?void 0:i.type)===t&&(this._preview={type:t,url:d,...o})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?v`<div class="fp3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?v`<img src=${t.url} alt="" />`:v`<span class="fp3d-preview-wait"></span>`}
      <b>${ze(this.hass,t.type)}</b>
    </div>`:$}renderDeviceForm(t){var r;let e=this.isAdmin,n=Y(t.entity_id),o=n==="light",i=t.mount??"ceiling",s=n?Jn(n,((r=this.floor)==null?void 0:r.height)??2.5,o?i:null):1;return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?_n(n):""} />
        </svg>
        ${st(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${o?v`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${l=>this.updateDevice({mount:l.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(l=>v`<option value=${l} ?selected=${l===i}>${this.t(`lamp_${l}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(t.glow_scale,l=>this.updateDevice({glow_scale:l}))}`:n==="camera"?v`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!e} @change=${l=>this.updateDevice({mount:l.target.value,y:null})}>
                  <option value="wall" ?selected=${(t.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${t.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:$}
        ${this.len(this.t("x"),t.x,l=>this.updateDevice({x:l}))} ${this.len(this.t("z"),t.z,l=>this.updateDevice({z:l}))}
        ${this.len(this.t("marker_height"),t.y??s,l=>this.updateDevice({y:Math.max(0,l)}),.05,0)}
        ${this.num(this.t("rotation"),t.rotation??0,l=>this.updateDevice({rotation:(l%360+360)%360}),1)}
        ${n==="camera"?v`${this.num(this.t("camera_fov"),t.fov??(t.mount==="ceiling"?360:90),l=>this.updateDevice({fov:Math.min(360,Math.max(10,l))}),5,10)}
            ${this.len(this.t("camera_reach"),t.reach??(t.mount==="ceiling"?3:4.5),l=>this.updateDevice({reach:Math.min(50,Math.max(.5,l))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),t.tilt??(t.mount==="ceiling"?65:20),l=>this.updateDevice({tilt:Math.min(90,Math.max(0,l))}),5,0)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${t.cone!==!1} ?disabled=${!e} @change=${l=>this.updateDevice({cone:l.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_pins_hint")}
              ><input type="checkbox" .checked=${t.detect_pins!==!1} ?disabled=${!e} @change=${l=>this.updateDevice({detect_pins:l.target.checked?null:!1})} />
              ${this.t("camera_detect_pins")}</label
            >
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(t.entity_id)}`:$}
        ${n&&Zs.has(n)?v`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${l=>this.updateDevice({confirm:l.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:$}
        ${ut("energy_pro")&&xa(this.hass,t.entity_id)?v`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!e} @change=${l=>this.updateDevice({holo:l.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:$}
        ${this.markerSelect(t.marker??null,l=>this.updateDevice({marker:l}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${t.name??""} ?disabled=${!e} maxlength="60" placeholder=${st(this.hass,t.entity_id)} @change=${l=>this.updateDevice({name:l.target.value.trim()||null})}
        /></label>
        ${t.name?v`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${l=>this.updateDevice({show_name:l.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:$}
        ${this.iconInput(t.icon,l=>this.updateDevice({icon:l}))}
      </div>
      ${e?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?v`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:$}
            ${this.renderAsFurniture(t)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:$}
    </section>`}renderDeviceList(t){var E,R,z,M,x;let e=this.isAdmin,n=this.hass,o=t.area_id?(R=(E=n==null?void 0:n.areas)==null?void 0:E[t.area_id])==null?void 0:R.name:void 0,i=n?$e(n,t.area_id).filter(w=>pn(Y(w))):[],s=new Set([...((z=this.floor)==null?void 0:z.placements.filter(w=>N([w.x,w.z],t.points)).map(w=>w.entity_id))??[],...((M=this.floor)==null?void 0:M.furniture.filter(w=>zt(w.type)&&w.entity&&N([w.x,w.z],t.points)).map(w=>w.entity))??[]]),r=n?Xo(n,i):[],l=r.map(w=>w.primary).filter(w=>!s.has(w)),c=this._deviceQuery.trim().toLowerCase(),d=w=>!c||st(n,w,o).toLowerCase().includes(c)||w.includes(c),p=(x=this.floor)==null?void 0:x.placements.filter(w=>Y(w.entity_id)==="light"&&(w.mount??"ceiling")==="ceiling"&&N([w.x,w.z],t.points)).length,u=new Set(t.panel??[]),f=new Set(t.hidden??[]),m=new Set(t.no_state??[]),g=new Map;for(let w of this._doc.floors)for(let k of[...w.placements.map(A=>[A.entity_id,A.x,A.z]),...w.furniture.filter(A=>zt(A.type)&&A.entity).map(A=>[A.entity,A.x,A.z])]){let A=w.rooms.find(P=>N([k[1],k[2]],P.points));A&&A.id!==t.id&&g.set(k[0],A.name)}let _=(w,k=!1,A=o)=>{let P=s.has(w),O=P?void 0:g.get(w);return v`<div class="fp3d-row fp3d-dev-row ${k?"fp3d-dev-extra":""} ${f.has(w)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${P?"":"fp3d-muted"}" ?disabled=${!P} @click=${()=>this.selectItem("device",w)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${_n(Y(w))} />
          </svg>
          <span>${st(n,w,A)}${O?v`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:O})}</small>`:$}</span>
        </button>
        ${e&&!k?v`<button
              class="fp3d-pin ${f.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(w)}
              title=${this.t(f.has(w)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:f.has(w)?[...f].filter(L=>L!==w):[...f,w]})}
            >
              ${f.has(w)?"\u{1F648}":"\u{1F441}"}
            </button>`:$}
        ${e&&!k&&!f.has(w)?v`<button
              class="fp3d-pin ${m.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${m.has(w)}
              title=${this.t(m.has(w)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:m.has(w)?[...m].filter(L=>L!==w):[...m,w]})}
            >
              ${m.has(w)?"\u2205":"Aa"}
            </button>`:$}
        ${e&&!P?v`<button
              class="fp3d-pin ${u.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${u.has(w)}
              title=${this.t(u.has(w)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:u.has(w)?[...u].filter(L=>L!==w):[...u,w]})}
            >
              ${u.has(w)?"\u2605":"\u2606"}
            </button>`:$}
        ${e?P?v`<button class="fp3d-link" @click=${()=>this.removeDevice(w)}>${this.t("devices_remove")}</button>`:v`<button class="fp3d-link" @click=${()=>this.placeDevices([w])}>${this.t("devices_place")}</button>`:$}
      </div>`},h=e?this._devSource:"area",b=w=>{this._devSource=w,this._deviceQuery=""},y=v`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${w=>this._deviceQuery=w.target.value}
    />`,S=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return v`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?v`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${h==="area"} @click=${()=>b("area")}>${this.t("devices_src_area")}${i.length?` (${r.length})`:""}</button>
            <button aria-pressed=${h==="other"} @click=${()=>b("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${h==="none"} @click=${()=>b("none")}>${this.t("devices_src_none")}</button>
          </div>`:$}
      ${h!=="area"?v`${y}${this.renderDeviceExtras(t,_,h)}`:t.area_id?i.length?v`${e&&(p??0)>=2?v`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:$}
              ${i.length>8?y:$}
              <div class="fp3d-room-list">
                ${r.map(w=>{let k=w.others.filter(d),A=this._expanded.has(w.primary)||!!c&&k.length>0;return!d(w.primary)&&!k.length?$:v`${_(w.primary)}
                  ${w.others.length?v`<button
                        class="fp3d-more"
                        @click=${()=>{let P=new Set(this._expanded);P.has(w.primary)?P.delete(w.primary):P.add(w.primary),this._expanded=P}}
                      >
                        ${A?this.t("devices_less"):this.t("devices_more",{n:w.others.length})}
                      </button>`:$}
                  ${A?(c?k:w.others).map(P=>_(P,!0)):$}`})}
              </div>
              ${e&&l.length>1?v`<button class="fp3d-link fp3d-place-all" @click=${S}>${this.t("devices_place_all_n",{n:l.length})}</button>`:$}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:v`<p class="fp3d-sub">${this.t("devices_none")}</p>`:v`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(t,e,n){let o=this.hass;if(!o)return $;let i=50,s=this._deviceQuery.trim().toLowerCase(),r=(d,p)=>!s||`${st(o,d,p)} ${d} ${p??""}`.toLowerCase().includes(s),l=d=>d>0?v`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:$;if(n==="other"){let d=0,p=0,u=tr(o,t.area_id).map(f=>{let m=f.ids.filter(_=>r(_,f.name)),g=m.slice(0,Math.max(0,i-d));return d+=g.length,p+=m.length-g.length,g.length?v`<div class="fp3d-dev-area">${f.name}</div>${g.map(_=>e(_,!1,f.name))}`:$});return d?v`<div class="fp3d-room-list">${u}</div>${l(p)}`:v`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=er(o).filter(d=>r(d));return c.length?v`<div class="fp3d-room-list">${c.slice(0,i).map(d=>e(d))}</div>${l(c.length-Math.min(c.length,i))}`:v`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(t){let e=this.hass;if(!e)return $;let n=(s,r)=>{let l={...t.climate??{},[s]:r},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},o=!!t.climate&&Object.values(t.climate).some(s=>s!=null),i=(s,r)=>{var u;let l=Go[s],c=nr(e,this.floor??null,{...t,climate:null},s),d=Yo[s],p=this.entityOptions(f=>{var m,g;return yt(f)&&((m=e.states[f])==null?void 0:m.attributes.device_class)===l||!!d&&f.startsWith("climate.")&&typeof((g=e.states[f])==null?void 0:g.attributes[d])=="number"}).map(f=>({...f,rank:(xe(e,f.id)===t.area_id?0:1)+(Jo(e,f.id)?0:2)})).sort((f,m)=>f.rank-m.rank).map(({id:f,label:m})=>({id:f,label:m}));return this.entitySelect(r,((u=t.climate)==null?void 0:u[s])??null,c[0]??null,p,f=>n(s,f))};return v`<details class="fp3d-points" ?open=${o}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${i("temperature",this.t("climate_temperature"))} ${i("humidity",this.t("climate_humidity"))} ${i("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(t){let e=t.background;return v`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?v`${this.len(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
              ${this.len(this.t("z"),e.z,n=>this.updateFloor({background:{...e,z:n}}))}
              ${this.len(this.t("background_width"),e.width,n=>this.updateFloor({background:{...e,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),e.rotation??0,n=>this.updateFloor({background:{...e,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isAdmin?v`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel?"fp3d-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?v`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:$}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?v`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:v`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${fn(this.t("bg_ruler_length"),this.unit)}
                            <input type=${this.unit==="imperial"?"text":"number"} min="0.01" step="0.01" .value=${this._bgRulerLen?this.lenValue(this._bgRulerLen):""} @input=${n=>this._bgRulerLen=this.readLen(n.target.value)??0} @keydown=${n=>n.key==="Enter"&&this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen>0)} @click=${()=>this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`:$}`:$}
              <label class="fp3d-field"
                >${this.t("background_opacity")}
                <input
                  type="range"
                  min="0.05"
                  max="1"
                  step="0.05"
                  .value=${String(e.opacity)}
                  @change=${n=>this.updateFloor({background:{...e,opacity:parseFloat(n.target.value)}})}
              /></label>
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:$}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await ds(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await us(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await ms(this.hass),e={};for(let o of Ks(t.building))try{e[o]=await zo(this.hass,o)}catch{}let n=new Date().toISOString().slice(0,10);Uo(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...t,exported_at:new Date().toISOString(),images:e}))}catch(t){alert(this.t("backup_import_error",{error:String((t==null?void 0:t.message)??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){var i,s;let e=t.target,n=(i=e.files)==null?void 0:i[0];if(e.value="",!n||!this.hass)return;let o;try{o=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if((o==null?void 0:o.format)!=="neonplan3d-backup"||!o.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let r=await gs(this.hass,o.building,o.packs??[]),l=0;for(let[d,p]of Object.entries(o.images??{}))try{await jn(this.hass,d,p),l++}catch{}this.setDoc(qn(r.building)),this._floorId=((s=r.building.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let c=r.skipped.length?` ${this.t("backup_full_skipped",{packs:r.skipped.map(d=>d.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:r.packs,pictures:l})+c}catch(r){let{code:l,message:c}=r??{};alert(this.t("backup_import_error",{error:c??l??String(r)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);Uo(`neonplan3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(qs(this._doc,t),null,2))}async importPlan(t){var i,s;let e=t.target,n=(i=e.files)==null?void 0:i[0];if(e.value="",!n||!this.hass)return;let o;try{o=Us(await n.text())}catch(r){let l=r.message;alert(l==="not_json"?this.t("import_error_not_json"):l==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:l}));return}confirm(this.t("backup_import_confirm"))&&(await ps(this.hass).catch(()=>{}),this.setDoc(o),this._floorId=((s=o.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){var e;return new Date(t.saved_at*1e3).toLocaleString((e=this.hass)==null?void 0:e.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return v`<details
      class="fp3d-section"
      @toggle=${t=>{t.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?v`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?v`<div class="fp3d-room-list">
              ${this._history.map(t=>v`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(t)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:t.rooms,furniture:t.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(t)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:v`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("backup_file")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.exportPlan(!1)}>${this.t("backup_export")}</button>
        <button class="fp3d-btn" title=${this.t("backup_export_share_hint")} @click=${()=>this.exportPlan(!0)}>${this.t("backup_export_share")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_import")}<input type="file" accept="application/json,.json" @change=${this.importPlan}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_hint")}</p>
      <h4 class="fp3d-lib-head">${this.t("backup_full")}</h4>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${this._backupBusy} @click=${()=>this.exportBackup()}>${this._backupBusy?"\u2026":this.t("backup_full_export")}</button>
        <label class="fp3d-btn fp3d-upload"
          >${this.t("backup_full_import")}<input type="file" accept="application/json,.json" @change=${this.importBackup}
        /></label>
      </div>
      <p class="fp3d-sub">${this.t("backup_full_hint")}</p>
    </details>`}renderSettings(){let t=this._doc.settings,e=n=>{let o=structuredClone(this._doc);Object.assign(o.settings,n),this.setDoc(o)};return v`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),t.wall_exterior,n=>e({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("wall_interior"),t.wall_interior,n=>e({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("grid"),t.grid,n=>e({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${n=>{let o=n.target.value;e({units:o==="metric"||o==="imperial"?o:null})}}>
            <option value="auto" ?selected=${!t.units}>${this.t("units_auto",{unit:this.t(si(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
            <option value="metric" ?selected=${t.units==="metric"}>${this.t("units_metric")}</option>
            <option value="imperial" ?selected=${t.units==="imperial"}>${this.t("units_imperial")}</option>
          </select></label
        >
        ${this.num(this.t("north"),t.north,n=>e({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let o=n.target.value;o==="custom"?(this.useRoofSections(),this._tool="roof"):e({roof:{...t.roof,type:o}})}}
          >
            ${["none","flat","gable","custom"].map(n=>v`<option value=${n} ?selected=${n===t.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${t.roof.type==="gable"?v`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>e({roof:{...t.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${t.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${t.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:$}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):$}
        ${t.roof.type!=="none"?this.len(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):$}
        ${this.hass?this.entitySelect(this.t("weather_entity"),t.weather_entity??null,Tr(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>e({weather_entity:n})):$}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${As.map(n=>{let o=t.weather_effects??Ro;return v`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${o.includes(n)}
              @change=${i=>{let s=i.target.checked;e({weather_effects:s?[...new Set([...o,n])]:o.filter(r=>r!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.rain_warning!==!1} @change=${n=>e({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
        ${this.hass?v`${this.entitySelect(this.t("rain_entity"),t.rain_entity??null,void 0,this.entityOptions(n=>jr(this.hass,n)),n=>e({rain_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("rain_entity_hint")}</p>`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${t.alert_names!==!1} @change=${n=>e({alert_names:n.target.checked})} />
          ${this.t("alert_names")}</label
        >
        ${this.hass?v`${this.entitySelect(this.t("outage_entity"),t.outage_entity??null,void 0,this.entityOptions(n=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(n)),n=>e({outage_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${t.sun_patches!==!1} @change=${n=>e({sun_patches:n.target.checked})} />
          ${this.t("sun_patches")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[Ge,fo,Ct`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 320px;
        height: 100%;
        min-height: 0;
      }
      .fp3d-editor:has(> .fp3d-side-strip) {
        grid-template-columns: 1fr 52px;
      }
      .fp3d-side-strip {
        padding: 10px 6px;
        gap: 8px;
        align-items: center;
      }
      .fp3d-strip-btn {
        width: 40px;
        height: 40px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font-size: 18px;
        cursor: pointer;
      }
      .fp3d-strip-hot {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-side-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: min(340px, 60%);
        z-index: 6;
        box-shadow: -12px 0 32px rgba(0, 0, 0, 0.45);
      }
      .fp3d-pin-row {
        display: flex;
        gap: 8px;
        justify-content: flex-end;
      }
      .fp3d-3d-size {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        color: var(--fp3d-muted);
        font-size: 12px;
      }
      .fp3d-3d-size input {
        width: 58px;
        padding: 4px 6px;
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-3d-select {
        font: inherit;
        color: var(--fp3d-text);
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 4px 10px;
      }
      .fp3d-editor.fp3d-narrow {
        grid-template-columns: 1fr;
        grid-template-rows: minmax(360px, 62vh) auto;
        height: auto;
      }
      .fp3d-main {
        display: grid;
        grid-template-rows: auto 1fr;
        /* the column never grows with a wide toolbar (that would push the plan under the sidebar) */
        grid-template-columns: minmax(0, 1fr);
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        align-items: center;
        padding: 10px 12px;
      }
      .fp3d-pick-tip {
        position: absolute;
        z-index: 5;
        transform: translateX(-50%);
        white-space: nowrap;
        padding: 8px 12px;
        border-radius: 10px;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
        font-size: 13px;
        box-shadow: 0 6px 22px rgba(0, 0, 0, 0.45), 0 0 16px rgba(55, 224, 255, 0.45);
        cursor: pointer;
        animation: fp3d-tip-in 0.18s ease-out;
      }
      .fp3d-pick-tip::before {
        content: "";
        position: absolute;
        left: 50%;
        top: -6px;
        margin-left: -6px;
        border: 6px solid transparent;
        border-top: 0;
        border-bottom-color: var(--fp3d-accent);
      }
      @keyframes fp3d-tip-in {
        from {
          opacity: 0;
          transform: translate(-50%, -4px);
        }
      }
      /* the tool row scrolls sideways when it is wider than the plan (it must never push into the sidebar) */
      .fp3d-toolbar > .fp3d-seg {
        max-width: 100%;
        overflow-x: auto;
        scrollbar-width: none;
      }
      .fp3d-toolbar > .fp3d-seg::-webkit-scrollbar {
        display: none;
      }
      .fp3d-toolbar > .fp3d-seg > button {
        flex: none;
      }
      .fp3d-warn {
        color: var(--fp3d-warm);
        font-size: 12.5px;
      }
      .fp3d-picture-group {
        display: grid;
        gap: 6px;
        margin: 6px 0 10px;
        padding: 8px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
      }
      .fp3d-picture-group > select {
        min-width: 0;
      }
      .fp3d-picture-row {
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 6px;
        align-items: center;
        padding: 6px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--fp3d-line) 40%, transparent);
      }
      .fp3d-picture-row input[type="url"] {
        grid-column: 1 / -1;
        min-width: 0;
      }
      .fp3d-picture-row > .fp3d-sub,
      .fp3d-picture-row > .fp3d-picture-camera {
        grid-column: 1 / -1;
      }
      .fp3d-picture-row.fp3d-rule-hit {
        outline: 1px solid var(--fp3d-accent);
      }
      .fp3d-rule-now {
        grid-column: 1 / -1;
      }
      .fp3d-rule-hit {
        color: var(--fp3d-accent);
      }
      .fp3d-picture-reuse {
        grid-column: 1 / -1;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .fp3d-picture-reuse-btn {
        padding: 2px;
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        cursor: pointer;
      }
      .fp3d-picture-reuse-btn img {
        display: block;
        height: 28px;
        max-width: 60px;
        object-fit: contain;
      }
      .fp3d-picture-reuse-btn:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-picture-thumb {
        max-height: 60px;
        max-width: 100%;
        border-radius: 6px;
        justify-self: start;
      }
      .fp3d-picture-pick {
        justify-self: start;
      }
      .fp3d-parking-row {
        display: flex;
        gap: 6px;
        align-items: center;
        margin: 4px 0;
      }
      .fp3d-parking-row input,
      .fp3d-parking-row select {
        flex: 1;
        min-width: 0;
      }
      .fp3d-stage-pair {
        display: flex;
        min-height: 0;
        min-width: 0;
      }
      .fp3d-stage-pair > .fp3d-canvas-wrap {
        flex: 1 1 var(--fp3d-split, 55%);
        min-width: 0;
      }
      .fp3d-split > .fp3d-canvas-wrap {
        flex: 0 0 var(--fp3d-split, 55%);
      }
      .fp3d-split-handle {
        flex: 0 0 8px;
        cursor: col-resize;
        background: var(--fp3d-line);
        touch-action: none;
      }
      .fp3d-split-handle:hover {
        background: var(--fp3d-accent);
      }
      .fp3d-editor-3d {
        position: relative;
        flex: 1 1 0;
        min-width: 240px;
        min-height: 0;
        border-left: 1px solid var(--fp3d-line);
        container-type: size;
        container-name: fp3d;
      }
      .fp3d-editor-3d fp3d-view3d {
        display: block;
        height: 100%;
      }
      .fp3d-3d-walls {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 3;
      }
      .fp3d-3d-bar {
        position: absolute;
        left: 50%;
        bottom: 12px;
        transform: translateX(-50%);
        z-index: 3;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 8px;
        max-width: calc(100% - 24px);
        padding: 6px 8px 6px 14px;
        border-radius: 999px;
        background: var(--fp3d-chrome);
        box-shadow: var(--fp3d-shadow);
        font-size: 13px;
      }
      .fp3d-danger-chip {
        color: var(--fp3d-danger, #ff6b7a);
      }
      .fp3d-narrow .fp3d-stage-pair.fp3d-split {
        flex-direction: column;
      }
      .fp3d-narrow .fp3d-split > .fp3d-canvas-wrap {
        flex: 1 1 auto;
      }
      .fp3d-narrow .fp3d-editor-3d {
        flex: 0 0 42%;
        min-width: 0;
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-canvas-wrap {
        position: relative;
        min-height: 0;
        overflow: hidden;
        background: radial-gradient(ellipse at 50% 35%, var(--fp3d-bg2), var(--fp3d-bg) 75%);
      }
      svg.fp3d-plan {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        touch-action: none;
        user-select: none;
        -webkit-user-select: none;
        cursor: default;
      }
      svg.fp3d-tool-rect,
      svg.fp3d-tool-polygon {
        cursor: crosshair;
      }
      .fp3d-grid-minor {
        stroke: rgba(55, 224, 255, 0.05);
        stroke-width: 1;
      }
      .fp3d-grid-major {
        stroke: rgba(91, 124, 255, 0.16);
        stroke-width: 1;
      }
      .fp3d-origin {
        fill: rgba(91, 124, 255, 0.5);
      }
      .fp3d-ghost {
        fill: none;
        stroke: rgba(138, 155, 184, 0.35);
        stroke-dasharray: 4 4;
      }
      .fp3d-wall {
        fill: #1b2a47;
      }
      .fp3d-wall-ext {
        fill: #22345a;
      }
      .fp3d-room {
        fill: rgba(55, 224, 255, 0.05);
        stroke: rgba(55, 224, 255, 0.75);
        stroke-width: 1.5;
        stroke-linejoin: round;
        cursor: pointer;
      }
      .fp3d-room:hover {
        fill: rgba(55, 224, 255, 0.09);
      }
      .fp3d-room-sel {
        fill: rgba(55, 224, 255, 0.14);
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
      }
      .fp3d-room-name {
        fill: var(--fp3d-text);
        font: 600 13px var(--fp3d-title-font);
        text-anchor: middle;
      }
      .fp3d-room-area {
        fill: var(--fp3d-muted);
        font: 500 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-dim {
        fill: var(--fp3d-accent);
        font: 600 11.5px var(--fp3d-font);
        text-anchor: middle;
        font-variant-numeric: tabular-nums;
        paint-order: stroke;
        stroke: var(--fp3d-bg);
        stroke-width: 3px;
      }
      .fp3d-vertex circle:not(.fp3d-hit) {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-vertex-sel circle:not(.fp3d-hit) {
        fill: var(--fp3d-accent);
      }
      .fp3d-vertex,
      .fp3d-mid {
        cursor: grab;
      }
      .fp3d-hit {
        fill: transparent;
      }
      .fp3d-mid circle:not(.fp3d-hit) {
        fill: rgba(91, 124, 255, 0.35);
        stroke: var(--fp3d-soft);
      }
      .fp3d-mid path {
        stroke: var(--fp3d-text);
        stroke-width: 1.5;
      }
      .fp3d-draft {
        fill: rgba(255, 181, 71, 0.08);
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      polyline.fp3d-draft {
        fill: none;
      }
      .fp3d-draft-pt {
        fill: var(--fp3d-warm);
      }
      .fp3d-draft-first {
        fill: transparent;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
      }
      .fp3d-cursor {
        fill: var(--fp3d-warm);
      }
      .fp3d-guide {
        stroke: rgba(255, 95, 210, 0.55);
        stroke-dasharray: 3 5;
      }
      .fp3d-snap {
        fill: none;
        stroke: #ff5fd2;
        stroke-width: 2;
      }
      .fp3d-hint {
        position: absolute;
        left: 12px;
        right: 12px;
        bottom: 8px;
        margin: 0;
        font-size: 12px;
        color: var(--fp3d-muted);
        pointer-events: none;
      }
      .fp3d-side {
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      .fp3d-narrow .fp3d-side {
        border-left: none;
        border-top: 1px solid var(--fp3d-line);
      }
      h3,
      summary {
        margin: 0 0 8px;
        font-size: 11.5px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fp3d-muted);
        font-weight: 600;
      }
      summary {
        cursor: pointer;
        margin: 0;
      }
      details[open] > summary {
        margin-bottom: 8px;
      }
      .fp3d-floor-list,
      .fp3d-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-floor-list .fp3d-chip {
        box-shadow: none;
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin-top: 10px;
      }
      .fp3d-wide {
        grid-column: 1 / -1;
      }
      .fp3d-room-list {
        display: grid;
        gap: 2px;
      }
      .fp3d-row {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: none;
        border-bottom: 1px solid var(--fp3d-line);
        padding: 9px 2px;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-row:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-check {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-check input {
        accent-color: var(--fp3d-accent);
      }
      .fp3d-meter rect {
        fill: #2a2a10;
        stroke: #ffc633;
        stroke-width: 1.5;
      }
      .fp3d-meter path {
        fill: #ffc633;
      }
      .fp3d-packages {
        display: grid;
        gap: 6px;
        margin-top: 10px;
      }
      .fp3d-packages .fp3d-btn {
        display: grid;
        text-align: left;
        gap: 2px;
      }
      .fp3d-packages .fp3d-btn span {
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-arrows {
        display: grid;
        grid-template-columns: repeat(3, 52px);
        grid-template-areas: ". up ." "left . right" ". down .";
        gap: 6px;
        justify-content: center;
      }
      .fp3d-arrows .fp3d-btn {
        font-size: 20px;
        padding: 6px 0;
      }
      .fp3d-arrow-up {
        grid-area: up;
      }
      .fp3d-arrow-left {
        grid-area: left;
      }
      .fp3d-arrow-right {
        grid-area: right;
      }
      .fp3d-arrow-down {
        grid-area: down;
      }
      .fp3d-measure-list {
        margin: 8px 0;
        padding-left: 22px;
        color: var(--fp3d-muted);
        font-size: 13px;
        font-variant-numeric: tabular-nums;
      }
      .fp3d-library {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(118px, 1fr));
        gap: 6px;
        margin-top: 8px;
      }
      .fp3d-library .fp3d-btn {
        font-weight: 500;
        font-size: 13px;
      }
      /* the background picture while it is edited: a dashed frame and a corner handle */
      .fp3d-bg-frame {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-bg-handle {
        fill: var(--fp3d-accent);
        stroke: #041018;
        stroke-width: 2;
        cursor: nwse-resize;
      }
      .fp3d-furn-body {
        fill: rgba(91, 124, 255, 0.1);
        stroke: rgba(91, 124, 255, 0.55);
        stroke-width: 1.2;
        vector-effect: non-scaling-stroke;
        cursor: grab;
      }
      .fp3d-furn-sym * {
        fill: none;
        stroke: rgba(150, 175, 255, 0.55);
        stroke-width: 1;
        vector-effect: non-scaling-stroke;
        pointer-events: none;
      }
      .fp3d-furn-sym .fp3d-sym-fill {
        fill: rgba(91, 124, 255, 0.28);
      }
      .fp3d-furn-sym .fp3d-sym-strong {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-out polygon {
        fill: rgba(91, 124, 255, 0.06);
        stroke: rgba(91, 124, 255, 0.4);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        cursor: grab;
      }
      .fp3d-out-lawn polygon,
      .fp3d-out-bed polygon,
      .fp3d-out-wild polygon,
      .fp3d-out-hedge polygon {
        fill: rgba(61, 224, 160, 0.1);
        stroke: rgba(61, 224, 160, 0.5);
      }
      .fp3d-out-pool polygon {
        fill: rgba(55, 224, 255, 0.18);
        stroke: var(--fp3d-accent);
      }
      .fp3d-out-terrace polygon {
        fill: rgba(150, 130, 255, 0.12);
      }
      .fp3d-free-wall {
        cursor: grab;
      }
      .fp3d-vertex-no {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 700;
        pointer-events: none;
      }
      /* the wall view: a room's wall from the front, furniture on it to slide along and up */
      .fp3d-wv-veil {
        position: fixed;
        inset: 0;
        z-index: 60;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(3, 6, 12, 0.6);
      }
      .fp3d-wv {
        width: min(1100px, 100%);
        max-height: calc(100vh - 32px);
        display: grid;
        grid-template-rows: auto minmax(0, 1fr) auto;
        gap: 10px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-wv-head,
      .fp3d-wv-foot {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
      }
      .fp3d-wv-foot .fp3d-field {
        width: 170px;
      }
      .fp3d-wv-grow {
        flex: 1;
      }
      .fp3d-pipe-end circle:not(.fp3d-hit) {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pipe-end {
        cursor: pointer;
      }
      .fp3d-pool-joint {
        fill: #8a929c;
        stroke: var(--fp3d-bg, #0b1220);
        stroke-width: 1.5;
        pointer-events: none;
      }
      .fp3d-wv-node circle {
        fill: rgba(55, 224, 255, 0.12);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-node text {
        fill: var(--fp3d-accent);
        font-size: 0.055px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-wv-hole-mark circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-dasharray: none;
        stroke-width: 0.02;
      }
      .fp3d-wv-hole-mark text {
        fill: var(--fp3d-warm);
      }
      .fp3d-pc-veil {
        z-index: 70;
      }
      .fp3d-pc {
        width: min(760px, 100%);
        max-height: calc(100vh - 32px);
        overflow: auto;
        display: grid;
        gap: 12px;
        padding: 14px 16px;
        border-radius: 16px;
        background: var(--fp3d-chrome-solid);
        border: 1px solid var(--fp3d-line);
        box-shadow: var(--fp3d-shadow);
        outline: none;
      }
      .fp3d-pc-title {
        font-size: 17px;
      }
      .fp3d-pc-name {
        font: inherit;
        font-size: 17px;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 8px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
        min-width: 0;
        flex: 1;
        max-width: 320px;
      }
      .fp3d-pc-body {
        display: grid;
        grid-template-columns: 220px minmax(0, 1fr);
        gap: 14px;
        align-items: start;
      }
      @media (max-width: 640px) {
        .fp3d-pc-body {
          grid-template-columns: 1fr;
        }
      }
      .fp3d-pc-draw {
        width: 100%;
        border-radius: 12px;
        background: rgba(120, 170, 255, 0.05);
        border: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-body-shape {
        fill: #2a313a;
        stroke: #8a929c;
        stroke-width: 2;
      }
      .fp3d-pc-fan {
        fill: none;
        stroke: #8a929c;
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-wall {
        fill: rgba(120, 170, 255, 0.18);
        stroke: var(--fp3d-line);
      }
      .fp3d-pc-side {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
      }
      .fp3d-pc-stub line {
        stroke: #8a929c;
        stroke-width: 10;
        stroke-dasharray: 6 4;
      }
      .fp3d-pc-stub circle {
        fill: #0b1220;
        stroke: var(--fp3d-warm);
        stroke-width: 2;
        stroke-dasharray: 3 2;
      }
      .fp3d-pc-stub {
        cursor: pointer;
      }
      .fp3d-pc-stub.fp3d-on line {
        stroke: #8a929c;
        stroke-dasharray: none;
      }
      .fp3d-pc-stub.fp3d-on circle {
        fill: var(--fp3d-accent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      .fp3d-pc-label {
        fill: var(--fp3d-text, #dfe7f5);
        font-size: 11px;
        font-weight: 700;
        text-anchor: middle;
      }
      .fp3d-pc-rows {
        display: grid;
        gap: 8px;
      }
      .fp3d-pc-row {
        display: grid;
        grid-template-columns: 110px minmax(0, 1fr);
        gap: 8px;
        padding: 8px 10px;
        border-radius: 10px;
        border: 1px dashed var(--fp3d-line);
      }
      .fp3d-pc-row.fp3d-on {
        border-style: solid;
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-conns,
      .fp3d-pc-join {
        display: grid;
        gap: 6px;
      }
      .fp3d-pc-conn {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-tools {
        display: inline-flex;
        gap: 6px;
        margin-left: auto;
      }
      .fp3d-pc-chain {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .fp3d-pc-arrow {
        color: var(--fp3d-accent);
        font-weight: 800;
      }
      .fp3d-pc-tile {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.05);
        color: var(--fp3d-text);
      }
      button.fp3d-pc-tile {
        cursor: pointer;
      }
      .fp3d-pc-tile i {
        font-style: normal;
        opacity: 0.6;
        margin-left: 4px;
      }
      .fp3d-pc-start {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-pc-stop {
        border-color: #2f8cff;
      }
      .fp3d-pc-end {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-next {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-steps {
        display: grid;
        gap: 6px;
        padding-top: 4px;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-pc-target {
        border-color: rgba(55, 224, 255, 0.45);
      }
      .fp3d-pc-join {
        padding: 10px;
        border-radius: 10px;
        background: rgba(120, 170, 255, 0.05);
      }
      .fp3d-pc-step {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
        margin-top: 4px;
      }
      .fp3d-pc-group {
        display: grid;
        gap: 4px;
      }
      .fp3d-pc-glabel {
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-picks {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
      }
      .fp3d-pc-pick {
        font: inherit;
        font-size: 13px;
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line);
        background: rgba(255, 255, 255, 0.04);
        color: var(--fp3d-text);
        cursor: pointer;
      }
      .fp3d-pc-pick:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-pc-pick.fp3d-on {
        background: var(--fp3d-accent);
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-weight: 700;
      }
      .fp3d-pc-hole {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        font-size: 13px;
      }
      .fp3d-pc-hole > span {
        min-width: 120px;
      }
      .fp3d-pc-via {
        border-style: dashed;
        color: var(--fp3d-muted);
      }
      .fp3d-pc-open {
        border-style: dashed;
      }
      .fp3d-joint-name {
        flex: 1;
        min-width: 90px;
        font: inherit;
        font-size: 13px;
        padding: 3px 6px;
        border-radius: 6px;
        border: 1px solid var(--fp3d-line);
        background: transparent;
        color: inherit;
      }
      .fp3d-ports {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 3px;
      }
      .fp3d-ports i {
        font-style: normal;
        font-size: 10px;
        padding: 1px 5px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-line);
        color: var(--fp3d-muted);
      }
      .fp3d-ports i.fp3d-on {
        border-style: solid;
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-top: 4px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        padding: 3px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-accent);
        background: transparent;
        color: var(--fp3d-accent);
        cursor: pointer;
      }
      .fp3d-wv-node {
        pointer-events: none;
      }
      .fp3d-wv-joint {
        pointer-events: auto;
        cursor: move;
      }
      .fp3d-wv-run line {
        stroke: #8a929c;
        stroke-width: 0.05;
        stroke-linecap: round;
        cursor: pointer;
      }
      .fp3d-wv-run line.fp3d-wv-under {
        stroke: #5a616b;
        stroke-dasharray: 0.06 0.05;
      }
      .fp3d-wv-run-sel line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-runpt {
        fill: var(--fp3d-bg, #0b1220);
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        cursor: move;
      }
      .fp3d-wv-runpt.fp3d-on {
        fill: var(--fp3d-accent);
      }
      .fp3d-wv-end {
        fill: none;
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.02 0.015;
      }
      .fp3d-wv-valve circle {
        fill: #3c4148;
        stroke: #2f8cff;
        stroke-width: 0.012;
        cursor: grab;
      }
      .fp3d-wv-valve line {
        stroke: #2f8cff;
        stroke-width: 0.025;
        stroke-linecap: round;
        pointer-events: none;
      }
      .fp3d-wv-shut circle {
        stroke: #ff5a6e;
      }
      .fp3d-wv-sight {
        fill: rgba(140, 220, 255, 0.55);
        stroke: #4a4f56;
        stroke-width: 0.012;
        cursor: pointer;
      }
      .fp3d-wv-draft {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.05;
        stroke-linecap: round;
        stroke-linejoin: round;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-wv-rubber {
        stroke-dasharray: 0.05 0.04;
        opacity: 0.5;
      }
      .fp3d-wv-drawing {
        cursor: crosshair;
      }
      .fp3d-wv-drawing .fp3d-wv-item {
        pointer-events: none;
      }
      .fp3d-wv-svg {
        width: 100%;
        height: min(62vh, 560px);
        touch-action: none;
        user-select: none;
        font-family: var(--fp3d-font);
      }
      .fp3d-wv-wall {
        fill: rgba(120, 170, 255, 0.06);
        stroke: var(--fp3d-soft);
        stroke-width: 0.015;
      }
      .fp3d-wv-grid {
        stroke: var(--fp3d-line);
        stroke-width: 0.006;
      }
      .fp3d-wv-scale {
        fill: var(--fp3d-muted);
        font-size: 0.09px;
        text-anchor: end;
      }
      .fp3d-wv-floor {
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-hole {
        fill: var(--fp3d-bg);
        stroke: var(--fp3d-muted);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-window {
        fill: rgba(55, 224, 255, 0.12);
      }
      .fp3d-wv-item {
        cursor: grab;
      }
      .fp3d-wv-item rect {
        fill: rgba(91, 124, 255, 0.28);
        stroke: var(--fp3d-soft);
        stroke-width: 0.012;
      }
      .fp3d-wv-item text {
        fill: var(--fp3d-text);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-open {
        width: 100%;
        justify-content: center;
        margin: 2px 0 10px;
      }
      .fp3d-wv-turn {
        display: inline-flex;
        align-items: end;
        gap: 6px;
      }
      .fp3d-wv-turn .fp3d-field {
        width: 76px;
      }
      .fp3d-wv-lift {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        margin: -46px 0 0 -22px;
        display: grid;
        justify-items: center;
        gap: 2px;
        cursor: ns-resize;
        touch-action: none;
        user-select: none;
      }
      .fp3d-wv-lift[hidden] {
        display: none;
      }
      .fp3d-wv-lift span {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
        font-size: 24px;
        font-weight: 800;
        box-shadow: 0 0 18px rgba(55, 224, 255, 0.55);
      }
      .fp3d-wv-lift b {
        font-size: 12px;
        color: var(--fp3d-warm);
        background: rgba(7, 11, 20, 0.85);
        padding: 1px 6px;
        border-radius: 8px;
      }
      .fp3d-wv-3d {
        display: block;
        width: 100%;
        height: min(62vh, 560px);
        border-radius: 12px;
        overflow: hidden;
      }
      .fp3d-wv-pic rect {
        fill: transparent;
        stroke: transparent;
      }
      .fp3d-wv-pic:hover rect {
        stroke: var(--fp3d-soft);
      }
      .fp3d-wv-body {
        display: flex;
        gap: 8px;
        min-height: 0;
      }
      .fp3d-wv-kit {
        flex: none;
        width: 150px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        overflow-y: auto;
        max-height: min(62vh, 560px);
      }
      .fp3d-wv-kit h4 {
        margin: 4px 0 0;
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-kit .fp3d-btn {
        justify-content: flex-start;
        text-align: left;
      }
      @media (max-width: 700px) {
        .fp3d-wv-body {
          flex-direction: column;
        }
        .fp3d-wv-kit {
          width: auto;
          flex-direction: row;
          flex-wrap: wrap;
          max-height: none;
        }
      }
      .fp3d-wv-stage {
        flex: 1;
        min-width: 0;
        position: relative;
        min-height: 0;
        padding: 0 60px;
      }
      .fp3d-wv-side {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        display: grid;
        justify-items: center;
        gap: 2px;
        width: 54px;
        padding: 10px 0;
        border-radius: 14px;
        border: 1px solid var(--fp3d-line);
        background: rgba(14, 21, 38, 0.82);
        color: var(--fp3d-accent);
        font-size: 30px;
        line-height: 1;
        cursor: pointer;
      }
      .fp3d-wv-side small {
        font-size: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-side:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-wv-left {
        left: 0;
      }
      .fp3d-wv-right {
        right: 0;
      }
      .fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.3);
        stroke: var(--fp3d-accent);
        stroke-width: 0.02;
      }
      .fp3d-wv-pic.fp3d-wv-sel rect {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wv-dims line {
        stroke: var(--fp3d-warm);
        stroke-width: 0.012;
        stroke-dasharray: 0.03 0.02;
      }
      .fp3d-wv-dims text {
        fill: var(--fp3d-warm);
        font-size: 0.11px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.035px;
      }
      .fp3d-wv-item text,
      .fp3d-wv-hole-label {
        paint-order: stroke;
        stroke: var(--fp3d-chrome-solid);
        stroke-width: 0.025px;
      }
      .fp3d-wv-hole-label {
        fill: var(--fp3d-muted);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-dims text.fp3d-wv-up {
        text-anchor: start;
      }
      .fp3d-edge-box {
        margin: 12px 0;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 45%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, var(--fp3d-accent) 6%, transparent);
      }
      .fp3d-edge-box h4 {
        margin: 0 0 4px;
        color: var(--fp3d-accent);
        font-size: 13px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      /* a wall row: name and length, the height, then the buttons (full height, no wall, cut) in one line;
         a split point gets a line of its own below */
      .fp3d-edge-height {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: end;
        padding: 4px 6px;
        margin: 0 -6px;
        border-radius: 8px;
      }
      .fp3d-edge-height > span:first-child {
        flex: 1 1 84px;
        min-width: 84px;
      }
      .fp3d-edge-height > .fp3d-field {
        flex: 1 1 90px;
        min-width: 0;
      }
      .fp3d-edge-height > .fp3d-muted {
        flex: 1 1 90px;
        align-self: center;
      }
      .fp3d-edge-height > .fp3d-btn {
        flex: 0 0 auto;
        white-space: nowrap;
        padding-left: 10px;
        padding-right: 10px;
      }
      .fp3d-edge-height > .fp3d-split-row {
        flex: 1 1 100%;
        display: flex;
        gap: 6px;
        align-items: end;
      }
      .fp3d-edge-height > .fp3d-split-row > .fp3d-field {
        flex: 1;
      }
      .fp3d-edge-on {
        background: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
      }
      .fp3d-edge-low b {
        color: var(--fp3d-accent);
      }
      .fp3d-wall-low {
        opacity: 0.55;
      }
      .fp3d-dev-source {
        display: flex;
        margin: 8px 0;
      }
      .fp3d-dev-source button {
        flex: 1 1 0;
        min-width: 0;
        padding: 6px 4px;
        font-size: 12px;
        line-height: 1.2;
        white-space: normal;
        text-align: center;
        border-radius: 10px;
      }
      .fp3d-place-all {
        margin: 10px 0 0;
      }
      .fp3d-roof-sec polygon {
        fill: color-mix(in srgb, #ffb547 10%, transparent);
        stroke: #ffb547;
        stroke-width: 2;
        stroke-dasharray: 8 6;
        cursor: move;
      }
      .fp3d-roof-sel polygon {
        fill: color-mix(in srgb, var(--fp3d-accent) 14%, transparent);
        stroke: var(--fp3d-accent);
        stroke-dasharray: none;
      }
      /* solar modules: dark blue panes with a light frame, so they do not look like a selected room */
      .fp3d-roofwin polygon {
        fill: color-mix(in srgb, #2b6b8f 70%, transparent);
        stroke: #e3e9f5;
        stroke-width: 2;
        cursor: move;
      }
      .fp3d-roofwin-sel polygon {
        stroke: #ffd75a;
      }
      .fp3d-tool-energy .fp3d-roof-layer {
        opacity: 0.45;
      }
      .fp3d-tool-energy .fp3d-energy-item {
        pointer-events: auto;
      }
      /* the cables in the energy tool: faint automatic ways, solid laid ones */
      .fp3d-cable line {
        stroke: #ffd75a;
        stroke-width: 2;
        stroke-dasharray: 5 4;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-cable-bat line {
        stroke: #5dffb0;
      }
      .fp3d-cable-grid line {
        stroke: #4ff6ff;
      }
      .fp3d-cable-hit line {
        stroke-width: 12;
        opacity: 0;
        pointer-events: stroke;
        cursor: pointer;
      }
      .fp3d-cable-laid line {
        stroke-dasharray: none;
        opacity: 0.9;
      }
      .fp3d-cable-sel line {
        stroke-width: 2.5;
        opacity: 1;
        filter: drop-shadow(0 0 4px currentColor);
      }
      .fp3d-cable-sel .fp3d-cable-piece {
        stroke-width: 14;
        opacity: 0;
        pointer-events: stroke;
        cursor: copy;
      }
      .fp3d-cable .fp3d-vertex circle {
        pointer-events: auto;
      }
      .fp3d-energy-marker {
        cursor: move;
      }
      .fp3d-checklist .fp3d-chk {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin: 2px 0;
        padding: 6px 8px;
        border: 0;
        border-radius: 8px;
        background: transparent;
        color: inherit;
        font: inherit;
        text-align: left;
        text-decoration: none;
        cursor: pointer;
      }
      .fp3d-checklist .fp3d-chk:hover {
        background: rgba(127, 127, 127, 0.12);
      }
      .fp3d-checklist .fp3d-chk span {
        width: 18px;
        text-align: center;
        font-weight: 700;
      }
      .fp3d-chk-ok span {
        color: #59ff8c;
      }
      .fp3d-chk-todo span {
        color: #ffc633;
      }
      .fp3d-chk-opt {
        opacity: 0.75;
      }
      .fp3d-teaser-on {
        border-color: rgba(89, 255, 140, 0.5);
      }
      .fp3d-teaser {
        margin-top: 12px;
        padding: 12px;
        border-radius: 14px;
        border: 1px solid color-mix(in srgb, #ffd75a 45%, transparent);
        background: linear-gradient(160deg, color-mix(in srgb, #ffd75a 10%, transparent), transparent 60%);
      }
      .fp3d-teaser-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      .fp3d-teaser-soon {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        color: #0b1426;
        background: #ffd75a;
        border-radius: 999px;
        padding: 2px 8px;
        white-space: nowrap;
      }
      .fp3d-teaser img {
        display: block;
        width: 100%;
        border-radius: 10px;
        border: 1px solid color-mix(in srgb, var(--fp3d-accent) 40%, transparent);
      }
      .fp3d-teaser ul {
        margin: 8px 0 4px;
        padding-left: 18px;
        font-size: 13px;
      }
      /* the roof and energy tools say what can be moved there (everything else is locked) */
      .fp3d-phone-hint {
        display: none;
      }
      @media (max-width: 600px) {
        .fp3d-phone-hint {
          position: absolute;
          top: 8px;
          left: 8px;
          /* the plan may be wider than the phone: stay on the screen */
          width: calc(min(100%, 100vw) - 16px);
          box-sizing: border-box;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 6px 6px 12px;
          border-radius: 12px;
          background: var(--fp3d-chrome-solid);
          border: 1px solid var(--fp3d-accent);
          font-size: 13px;
        }
      }
      .fp3d-tool-note {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        max-width: calc(100% - 24px);
        padding: 5px 12px;
        border-radius: 999px;
        background: color-mix(in srgb, #0b1426 85%, transparent);
        border: 1px solid color-mix(in srgb, #ffd75a 60%, transparent);
        color: #ffe7a3;
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      .fp3d-energy-marker circle {
        fill: color-mix(in srgb, #0b1426 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-holo-pt circle {
        stroke: #c9a4ff;
        cursor: grab;
      }
      .fp3d-holo-pt .fp3d-energy-name {
        fill: #c9a4ff;
      }
      .fp3d-energy-marker-sel circle {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
        fill: color-mix(in srgb, var(--fp3d-accent) 25%, #0b1426);
      }
      .fp3d-energy-marker text {
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-energy-icon {
        font-size: 17px;
      }
      .fp3d-energy-name {
        font-size: 11px;
        font-weight: 700;
        fill: #ffd75a;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.65);
        stroke-width: 3px;
      }
      .fp3d-solar polygon {
        fill: color-mix(in srgb, #1b3a8f 75%, transparent);
        stroke: #9fb8ff;
        stroke-width: 1.5;
        cursor: move;
      }
      .fp3d-solar-sel polygon {
        fill: color-mix(in srgb, #1b3a8f 80%, transparent);
        stroke: #ffd75a;
        stroke-width: 2;
      }
      .fp3d-solar polygon.fp3d-solar-off {
        fill: transparent;
        stroke-dasharray: 4 4;
        stroke-width: 1.5;
      }
      .fp3d-solar-pick polygon {
        cursor: pointer;
      }
      .fp3d-roof-ridge line {
        stroke: #ffb547;
        stroke-width: 2.5;
        pointer-events: none;
      }
      .fp3d-roof-sel .fp3d-roof-ridge line {
        stroke: var(--fp3d-accent);
      }
      .fp3d-roof-sec text {
        fill: #ffd28a;
        font-size: 12px;
        font-weight: 700;
        text-anchor: middle;
        paint-order: stroke;
        stroke: rgba(0, 0, 0, 0.6);
        stroke-width: 3px;
        pointer-events: none;
      }
      .fp3d-tool-energy .fp3d-room,
      .fp3d-tool-energy [data-furniture],
      .fp3d-tool-energy [data-device],
      .fp3d-tool-energy [data-opening],
      .fp3d-tool-energy [data-free-wall],
      .fp3d-tool-energy [data-outdoor],
      .fp3d-tool-energy .fp3d-roof-layer,
      .fp3d-tool-roof .fp3d-room,
      .fp3d-tool-roof [data-furniture],
      .fp3d-tool-roof [data-device],
      .fp3d-tool-roof [data-opening],
      .fp3d-tool-roof [data-free-wall],
      .fp3d-tool-roof [data-outdoor] {
        pointer-events: none;
      }
      .fp3d-dev-area {
        margin: 10px 0 2px;
        color: var(--fp3d-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .fp3d-h3row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      .fp3d-h3row h3 {
        margin-bottom: 0;
      }
      .fp3d-fix {
        min-height: 30px;
        padding: 4px 10px;
        font-size: 13px;
      }
      .fp3d-pipe,
      .fp3d-pipe-hit {
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-pipe {
        stroke: #37a8ff;
        stroke-width: 3;
        opacity: 0.85;
        pointer-events: none;
      }
      .fp3d-pipe-sel {
        stroke-width: 5;
        opacity: 1;
        filter: drop-shadow(0 0 4px #37a8ff);
      }
      .fp3d-pipe-draft {
        stroke-dasharray: 6 5;
      }
      .fp3d-pipe-hit {
        stroke: transparent;
        stroke-width: 16;
        cursor: pointer;
      }
      .fp3d-pipe-seg {
        stroke: transparent;
        stroke-width: 14;
        cursor: copy;
      }
      .fp3d-pipe-arrow {
        fill: #37a8ff;
        pointer-events: none;
      }
      .fp3d-pool-node {
        cursor: grab;
      }
      .fp3d-pool-node circle:not(.fp3d-hit) {
        fill: #0b1a2e;
        stroke: #37e0ff;
        stroke-width: 2;
      }
      .fp3d-pool-node.fp3d-pool-dev circle:not(.fp3d-hit) {
        stroke: #5b7cff;
      }
      .fp3d-pool-node.fp3d-pool-closed circle:not(.fp3d-hit) {
        stroke: #ff4d40;
      }
      .fp3d-pool-node text {
        fill: #e6f6ff;
        font-size: 10px;
        font-weight: 700;
        text-anchor: middle;
        dominant-baseline: central;
        pointer-events: none;
      }
      .fp3d-conn {
        grid-template-columns: 1fr;
      }
      .fp3d-conn select {
        width: 100%;
      }
      .fp3d-pool-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
        margin: 4px 0;
        font-size: 13px;
      }
      .fp3d-pool-row > span,
      .fp3d-pool-row > .fp3d-link {
        flex: 1;
        text-align: left;
      }
      .fp3d-pool-row-sel {
        background: rgba(55, 224, 255, 0.1);
        border-radius: 8px;
        box-shadow: inset 3px 0 0 var(--fp3d-accent);
        padding-left: 6px;
      }
      .fp3d-outdoor-type {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 13px;
        color: var(--fp3d-muted);
      }
      .fp3d-outdoor-type select {
        min-height: 34px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line, rgba(160, 200, 255, 0.25));
        background: var(--fp3d-chrome);
        color: var(--fp3d-text);
        font: inherit;
        font-weight: 600;
      }
      .fp3d-fix[aria-pressed="true"] {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lock {
        font-size: 13px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-hint-fixed {
        color: var(--fp3d-accent);
      }
      .fp3d-ctx {
        position: absolute;
        z-index: 5;
        display: flex;
        flex-direction: column;
        min-width: 170px;
        padding: 4px;
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        background: var(--fp3d-panel, #111a2e);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
      }
      .fp3d-ctx button {
        padding: 8px 12px;
        border: none;
        border-radius: 7px;
        background: none;
        color: inherit;
        font: inherit;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-ctx button:hover:not(:disabled) {
        background: color-mix(in srgb, var(--fp3d-accent) 16%, transparent);
      }
      .fp3d-ctx button:disabled {
        opacity: 0.45;
        cursor: default;
      }
      .fp3d-ctx-danger {
        color: var(--fp3d-danger, #ff6b7a) !important;
      }
      .fp3d-edge-hi {
        stroke: var(--fp3d-accent);
        stroke-width: 6;
        stroke-linecap: round;
        filter: drop-shadow(0 0 6px var(--fp3d-accent));
      }
      .fp3d-room-id code {
        user-select: all;
        cursor: copy;
      }
      .fp3d-open .fp3d-open-hit {
        stroke: transparent;
        stroke-width: 26;
      }
      .fp3d-free-wall .fp3d-hit {
        stroke: transparent;
        stroke-width: 18;
      }
      .fp3d-free-wall-line {
        stroke: transparent;
        stroke-width: 1;
      }
      .fp3d-free-wall-sel .fp3d-free-wall-line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: 6 4;
      }
      .fp3d-draft-wall {
        stroke-width: 4;
      }
      .fp3d-open-passage {
        stroke-dasharray: 4 4;
      }
      .fp3d-out-sel polygon {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
        stroke-dasharray: none;
      }
      .fp3d-out text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-lit .fp3d-furn-body {
        fill: rgba(255, 181, 71, 0.35);
        stroke: var(--fp3d-warm);
      }
      .fp3d-rotate {
        cursor: grab;
      }
      .fp3d-preview {
        position: fixed;
        z-index: 20;
        width: 180px;
        padding: 8px 8px 10px;
        border-radius: 16px;
        background: radial-gradient(circle at 50% 40%, #1d2c4d, #0b1222 75%);
        box-shadow: var(--fp3d-shadow), 0 0 0 1px var(--fp3d-line);
        text-align: center;
        pointer-events: none;
        animation: fp3d-pop 120ms ease-out;
      }
      @keyframes fp3d-pop {
        from {
          opacity: 0;
          transform: translateX(8px);
        }
      }
      .fp3d-preview img,
      .fp3d-preview-wait {
        display: block;
        width: 164px;
        height: 164px;
      }
      .fp3d-preview-wait {
        margin: 0 auto;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
      }
      .fp3d-preview b {
        display: block;
        margin-top: 2px;
        font-size: 13px;
        color: #e8eeff;
      }
      .fp3d-lib-badge {
        margin-left: 4px;
        color: #37e0ff;
        vertical-align: -2px;
      }
      .fp3d-ext-teaser {
        display: grid;
        gap: 6px;
        margin: 12px 0;
        padding: 12px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 12px;
        background: linear-gradient(135deg, rgba(55, 224, 255, 0.08), rgba(91, 124, 255, 0.08));
      }
      .fp3d-pin {
        border: 0;
        background: none;
        padding: 2px 6px;
        font-size: 17px;
        line-height: 1;
        color: var(--fp3d-muted);
        cursor: pointer;
      }
      .fp3d-pin-on {
        color: var(--fp3d-warm);
      }
      .fp3d-back {
        margin-bottom: 12px;
      }
      .fp3d-presets {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 10px;
      }
      .fp3d-resize {
        cursor: nwse-resize;
      }
      .fp3d-resize rect {
        fill: var(--fp3d-accent);
        stroke: #0b1222;
        stroke-width: 1.5;
      }
      .fp3d-code {
        display: block;
        font: 12px/1.4 ui-monospace, Menlo, Consolas, monospace;
        padding: 6px 8px;
        border-radius: 8px;
        background: rgba(127, 127, 127, 0.12);
        user-select: all;
        word-break: break-all;
      }
      .fp3d-shift {
        display: flex;
        align-items: center;
        gap: 6px;
        flex-wrap: wrap;
      }
      .fp3d-shift input {
        width: 5.5em;
      }
      .fp3d-headroom {
        stroke: rgba(255, 214, 90, 0.55);
        stroke-width: 1;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-headroom-label {
        font-size: 10px;
        fill: rgba(255, 214, 90, 0.75);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-split-mark {
        stroke: rgba(55, 224, 255, 0.9);
        stroke-width: 2;
        pointer-events: none;
      }
      .fp3d-floor-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin: 8px 0;
        padding: 10px;
        border-radius: 12px;
        background: rgba(127, 127, 127, 0.1);
        max-width: 100%;
        box-sizing: border-box;
      }
      .fp3d-icon-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .fp3d-icon-row input {
        flex: 1;
        min-width: 0;
      }
      .fp3d-icon-row ha-icon {
        --mdc-icon-size: 22px;
        color: var(--fp3d-accent);
      }
      .fp3d-floor-menu .fp3d-btn {
        text-align: left;
        width: 100%;
        min-width: 0;
        white-space: normal;
        overflow-wrap: anywhere;
      }
      .fp3d-rotate line {
        stroke: var(--fp3d-accent);
        stroke-dasharray: 3 3;
      }
      .fp3d-rotate circle:not(.fp3d-hit) {
        fill: #0b1222;
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-rotate path {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-linecap: round;
      }
      .fp3d-lib-toggle {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        padding: 6px 0;
        border: 0;
        background: none;
        font: inherit;
        cursor: pointer;
        text-align: left;
      }
      .fp3d-lib-toggle:hover {
        color: var(--fp3d-text);
      }
      .fp3d-lib-caret {
        width: 12px;
        color: var(--fp3d-accent);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 500;
        letter-spacing: 0;
        text-transform: none;
        opacity: 0.7;
      }
      .fp3d-lib-head {
        margin: 10px 0 0;
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: var(--fp3d-muted);
      }
      .fp3d-furn-front {
        stroke: var(--fp3d-accent);
        stroke-width: 2.5;
        vector-effect: non-scaling-stroke;
        opacity: 0.8;
        pointer-events: none;
      }
      .fp3d-furn text {
        fill: var(--fp3d-muted);
        font-size: 11px;
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-furn-sel .fp3d-furn-body {
        fill: rgba(55, 224, 255, 0.16);
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open {
        cursor: grab;
      }
      .fp3d-open-gap {
        fill: #0b1222;
        stroke: none;
      }
      .fp3d-open path,
      .fp3d-open line {
        fill: none;
        stroke-width: 1.6;
        stroke-linecap: round;
      }
      .fp3d-open-door path {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 3 3;
      }
      .fp3d-open-front path,
      .fp3d-open-door line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
        stroke-dasharray: none;
      }
      .fp3d-open-door line.fp3d-open-pane {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-garage line {
        stroke: var(--fp3d-warm);
        stroke-width: 3;
      }
      .fp3d-open-track {
        stroke: var(--fp3d-warm);
        stroke-dasharray: 4 4;
        opacity: 0.6;
      }
      .fp3d-open-window line {
        stroke: var(--fp3d-accent);
        stroke-width: 2;
      }
      .fp3d-open-sel .fp3d-open-gap {
        fill: rgba(55, 224, 255, 0.25);
      }
      .fp3d-open-sel path,
      .fp3d-open-sel line {
        stroke-width: 2.4;
      }
      .fp3d-bg-rotate {
        cursor: grab;
      }
      .fp3d-bg-ruler line {
        stroke: #ffb020;
        stroke-width: 2.5;
        stroke-dasharray: 6 4;
      }
      .fp3d-bg-ruler circle {
        fill: #ffb020;
        stroke: #1a1000;
        stroke-width: 1.5;
      }
      .fp3d-own-button {
        padding: 10px 0;
        border-top: 1px solid var(--fp3d-line);
      }
      .fp3d-own-button textarea {
        font: 12px/1.4 ui-monospace, monospace;
        width: 100%;
        box-sizing: border-box;
        padding: 6px 8px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        background-color: var(--fp3d-panel, #0d1424);
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 7px 9px;
        margin: 2px 0 6px;
      }
      .fp3d-more {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-muted);
        background: none;
        border: none;
        text-align: left;
        padding: 2px 26px 8px;
        cursor: pointer;
      }
      .fp3d-more:hover {
        color: var(--fp3d-accent);
      }
      .fp3d-dev-hidden .fp3d-dev-name {
        opacity: 0.45;
        text-decoration: line-through;
      }
      .fp3d-dev-extra {
        padding-left: 18px;
        font-size: 13px;
      }
      .fp3d-dev-title {
        display: flex;
        align-items: center;
        gap: 8px;
        margin: 0 0 8px;
        font-weight: 600;
      }
      .fp3d-notice {
        color: var(--fp3d-accent);
      }
      .fp3d-device-sel circle:not(.fp3d-hit) {
        stroke: var(--fp3d-accent);
        stroke-width: 3;
      }
      .fp3d-dev-row {
        align-items: center;
        cursor: default;
      }
      .fp3d-dev-row:hover {
        color: var(--fp3d-text);
      }
      .fp3d-dev-name {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-width: 0;
        font: inherit;
        color: inherit;
        background: none;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-dev-name:disabled {
        cursor: default;
      }
      .fp3d-dev-name span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-dev-name svg {
        flex: none;
      }
      .fp3d-link {
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-accent);
        background: none;
        border: none;
        padding: 4px 2px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-wide-btn {
        width: 100%;
        margin-bottom: 6px;
      }
      .fp3d-device {
        cursor: grab;
      }
      .fp3d-wedge path,
      .fp3d-wedge circle:not(.fp3d-hit) {
        fill: rgba(55, 224, 255, 0.12);
        stroke: rgba(55, 224, 255, 0.45);
        stroke-width: 1;
        pointer-events: none;
      }
      .fp3d-wedge-sel path,
      .fp3d-wedge-sel > circle {
        fill: rgba(55, 224, 255, 0.2);
        stroke: var(--fp3d-accent);
      }
      .fp3d-wedge .fp3d-rotate circle {
        pointer-events: auto;
      }
      .fp3d-device circle:not(.fp3d-hit) {
        fill: #111a2e;
        stroke: var(--fp3d-soft);
        stroke-width: 1.5;
        vector-effect: non-scaling-stroke;
      }
      .fp3d-device path {
        fill: none;
        stroke: var(--fp3d-text);
        stroke-width: 2.6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .fp3d-device-on circle:not(.fp3d-hit) {
        fill: var(--fp3d-warm);
        stroke: var(--fp3d-warm);
      }
      .fp3d-device-on path {
        stroke: #2a1a00;
      }
      .fp3d-muted {
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-points {
        margin: 12px 0;
      }
      .fp3d-point {
        display: grid;
        grid-template-columns: 18px 1fr 1fr auto;
        gap: 6px;
        align-items: end;
        padding: 4px 0;
      }
      .fp3d-point-sel .fp3d-muted {
        color: var(--fp3d-accent);
      }
      .fp3d-point .fp3d-btn {
        min-height: 34px;
        padding: 4px 10px;
      }
      .fp3d-upload {
        position: relative;
        text-align: center;
        overflow: hidden;
      }
      .fp3d-upload input {
        position: absolute;
        inset: 0;
        opacity: 0;
        cursor: pointer;
      }
      .fp3d-sub {
        margin: 8px 0 0;
        font-size: 12.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-note {
        margin: 0;
        font-size: 12.5px;
        color: var(--fp3d-warm);
      }
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",ji);function vc(a,t,e){let n=e[0]-t[0],o=e[1]-t[1],i=n*n+o*o||1,s=Math.min(1,Math.max(0,((a[0]-t[0])*n+(a[1]-t[1])*o)/i));return Math.hypot(a[0]-t[0]-n*s,a[1]-t[1]-o*s)}function go(a){return a.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var ja={language:"en"};function yt(a){return/^(sensor|input_number|number)\./.test(a)}function Ti(a){return/^(binary_sensor|input_boolean)\./.test(a)}export{ji as Fp3dEditor};
