var En=globalThis,An=En.ShadowRoot&&(En.ShadyCSS===void 0||En.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yo=Symbol(),qi=new WeakMap,tn=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==yo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(An&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=qi.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&qi.set(e,t))}return t}toString(){return this.cssText}},Ki=r=>new tn(typeof r=="string"?r:r+"",void 0,yo),Dt=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[i+1],r[0]);return new tn(e,r,yo)},Gi=(r,t)=>{if(An)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=En.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,r.appendChild(n)}},$o=An?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Ki(e)})(r):r;var{is:tl,defineProperty:el,getOwnPropertyDescriptor:nl,getOwnPropertyNames:ol,getOwnPropertySymbols:il,getPrototypeOf:sl}=Object,zn=globalThis,Xi=zn.trustedTypes,rl=Xi?Xi.emptyScript:"",xo=zn.reactiveElementPolyfillSupport,en=(r,t)=>r,wo={toAttribute(r,t){switch(t){case Boolean:r=r?rl:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Yi=(r,t)=>!tl(r,t),Ji={attribute:!0,type:String,converter:wo,reflect:!1,useDefault:!1,hasChanged:Yi};Symbol.metadata??=Symbol("metadata"),zn.litPropertyMetadata??=new WeakMap;var Gt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ji){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&el(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:i}=nl(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:o,set(s){let a=o==null?void 0:o.call(this);i==null||i.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ji}static _$Ei(){if(this.hasOwnProperty(en("elementProperties")))return;let t=sl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(en("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(en("properties"))){let e=this.properties,n=[...ol(e),...il(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift($o(o))}else t!==void 0&&e.push($o(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gi(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var i;let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let s=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:wo).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){var i,s;let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let a=n.getPropertyOptions(o),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((i=a.converter)==null?void 0:i.fromAttribute)!==void 0?a.converter:wo;this._$Em=o;let c=l.fromAttribute(e,a.type);this[o]=c??((s=this._$Ej)==null?void 0:s.get(o))??c,this._$Em=null}}requestUpdate(t,e,n,o=!1,i){var s;if(t!==void 0){let a=this.constructor;if(o===!1&&(i=this[t]),n??=a.getPropertyOptions(t),!((n.hasChanged??Yi)(i,e)||n.useDefault&&n.reflect&&i===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(a._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[i,s]of o){let{wrapped:a}=s,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Gt.elementStyles=[],Gt.shadowRootOptions={mode:"open"},Gt[en("elementProperties")]=new Map,Gt[en("finalized")]=new Map,xo==null||xo({ReactiveElement:Gt}),(zn.reactiveElementVersions??=[]).push("2.1.2");var So=globalThis,Qi=r=>r,In=So.trustedTypes,Zi=In?In.createPolicy("lit-html",{createHTML:r=>r}):void 0,Po="$lit$",Xt=`lit$${Math.random().toFixed(9).slice(2)}$`,Eo="?"+Xt,al=`<${Eo}>`,ve=document,on=()=>ve.createComment(""),sn=r=>r===null||typeof r!="object"&&typeof r!="function",Ao=Array.isArray,ss=r=>Ao(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ko=`[ 	
\f\r]`,nn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ts=/-->/g,es=/>/g,_e=RegExp(`>|${ko}(?:([^\\s"'>=/]+)(${ko}*=${ko}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ns=/'/g,os=/"/g,rs=/^(?:script|style|textarea|title)$/i,zo=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),v=zo(1),T=zo(2),Dc=zo(3),Jt=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),is=new WeakMap,be=ve.createTreeWalker(ve,129);function as(r,t){if(!Ao(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Zi!==void 0?Zi.createHTML(t):t}var ls=(r,t)=>{let e=r.length-1,n=[],o,i=t===2?"<svg>":t===3?"<math>":"",s=nn;for(let a=0;a<e;a++){let l=r[a],c,d,p=-1,u=0;for(;u<l.length&&(s.lastIndex=u,d=s.exec(l),d!==null);)u=s.lastIndex,s===nn?d[1]==="!--"?s=ts:d[1]!==void 0?s=es:d[2]!==void 0?(rs.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=_e):d[3]!==void 0&&(s=_e):s===_e?d[0]===">"?(s=o??nn,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?_e:d[3]==='"'?os:ns):s===os||s===ns?s=_e:s===ts||s===es?s=nn:(s=_e,o=void 0);let h=s===_e&&r[a+1].startsWith("/>")?" ":"";i+=s===nn?l+al:p>=0?(n.push(c),l.slice(0,p)+Po+l.slice(p)+Xt+h):l+Xt+(p===-2?a:h)}return[as(r,i+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},rn=class r{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let i=0,s=0,a=t.length-1,l=this.parts,[c,d]=ls(t,e);if(this.el=r.createElement(c,n),be.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=be.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(Po)){let u=d[s++],h=o.getAttribute(p).split(Xt),f=/([.?@])?(.*)/.exec(u);l.push({type:1,index:i,name:f[2],strings:h,ctor:f[1]==="."?Rn:f[1]==="?"?Ln:f[1]==="@"?On:$e}),o.removeAttribute(p)}else p.startsWith(Xt)&&(l.push({type:6,index:i}),o.removeAttribute(p));if(rs.test(o.tagName)){let p=o.textContent.split(Xt),u=p.length-1;if(u>0){o.textContent=In?In.emptyScript:"";for(let h=0;h<u;h++)o.append(p[h],on()),be.nextNode(),l.push({type:2,index:++i});o.append(p[u],on())}}}else if(o.nodeType===8)if(o.data===Eo)l.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(Xt,p+1))!==-1;)l.push({type:7,index:i}),p+=Xt.length-1}i++}}static createElement(t,e){let n=ve.createElement("template");return n.innerHTML=t,n}};function ye(r,t,e=r,n){var s,a;if(t===Jt)return t;let o=n!==void 0?(s=e._$Co)==null?void 0:s[n]:e._$Cl,i=sn(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),i===void 0?o=void 0:(o=new i(r),o._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=ye(r,o._$AS(r,t.values),o,n)),t}var Fn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??ve).importNode(e,!0);be.currentNode=o;let i=be.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Re(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new Vn(i,this,t)),this._$AV.push(c),l=n[++a]}s!==(l==null?void 0:l.index)&&(i=be.nextNode(),s++)}return be.currentNode=ve,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Re=class r{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ye(this,t,e),sn(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==Jt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ss(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&sn(this._$AH)?this._$AA.nextSibling.data=t:this.T(ve.createTextNode(t)),this._$AH=t}$(t){var i;let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=rn.createElement(as(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(e);else{let s=new Fn(o,this),a=s.u(this.options);s.p(e),this.T(a),this._$AH=s}}_$AC(t){let e=is.get(t.strings);return e===void 0&&is.set(t.strings,e=new rn(t)),e}k(t){Ao(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let i of t)o===e.length?e.push(n=new r(this.O(on()),this.O(on()),this,this.options)):n=e[o],n._$AI(i),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){let o=Qi(t).nextSibling;Qi(t).remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},$e=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,i){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,e=this,n,o){let i=this.strings,s=!1;if(i===void 0)t=ye(this,t,e,0),s=!sn(t)||t!==this._$AH&&t!==Jt,s&&(this._$AH=t);else{let a=t,l,c;for(t=i[0],l=0;l<i.length-1;l++)c=ye(this,a[n+l],e,l),c===Jt&&(c=this._$AH[l]),s||=!sn(c)||c!==this._$AH[l],c===$?t=$:t!==$&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Rn=class extends $e{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},Ln=class extends $e{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},On=class extends $e{constructor(t,e,n,o,i){super(t,e,n,o,i),this.type=5}_$AI(t,e=this){if((t=ye(this,t,e,0)??$)===Jt)return;let n=this._$AH,o=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==$&&(n===$||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},Vn=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ye(this,t)}},cs={M:Po,P:Xt,A:Eo,C:1,L:ls,R:Fn,D:ss,V:ye,I:Re,H:$e,N:Ln,U:On,B:Rn,F:Vn},Mo=So.litHtmlPolyfillSupport;Mo==null||Mo(rn,Re),(So.litHtmlVersions??=[]).push("3.3.3");var ds=(r,t,e)=>{let n=(e==null?void 0:e.renderBefore)??t,o=n._$litPart$;if(o===void 0){let i=(e==null?void 0:e.renderBefore)??null;n._$litPart$=o=new Re(t.insertBefore(on(),i),i,void 0,e??{})}return o._$AI(r),o};var an=globalThis,At=class extends Gt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ds(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Jt}},ps;At._$litElement$=!0,At.finalized=!0,(ps=an.litElementHydrateSupport)==null||ps.call(an,{LitElement:At});var Io=an.litElementPolyfillSupport;Io==null||Io({LitElement:At});(an.litElementVersions??=[]).push("4.2.2");var Tn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ln=r=>(...t)=>({_$litDirective$:r,values:t}),Le=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var cn=class extends Le{constructor(t){if(super(t),this.it=$,t.type!==Tn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$||t==null)return this._t=void 0,this.it=t;if(t===Jt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};cn.directiveName="unsafeHTML",cn.resultType=1;var us=ln(cn);var{I:rd}=cs;var hs=r=>r.strings===void 0;var dn=(r,t)=>{var n;let e=r._$AN;if(e===void 0)return!1;for(let o of e)(n=o._$AO)==null||n.call(o,t,!1),dn(o,t);return!0},jn=r=>{let t,e;do{if((t=r._$AM)===void 0)break;e=t._$AN,e.delete(r),r=t}while((e==null?void 0:e.size)===0)},fs=r=>{for(let t;t=r._$AM;r=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(r))break;e.add(r),dl(t)}};function ll(r){this._$AN!==void 0?(jn(this),this._$AM=r,fs(this)):this._$AM=r}function cl(r,t=!1,e=0){let n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let i=e;i<n.length;i++)dn(n[i],!1),jn(n[i]);else n!=null&&(dn(n,!1),jn(n));else dn(this,r)}var dl=r=>{r.type==Tn.CHILD&&(r._$AP??=cl,r._$AQ??=ll)},Cn=class extends Le{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),fs(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,o;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(o=this.disconnected)==null||o.call(this)),e&&(dn(this,t),jn(this))}setValue(t){if(hs(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var Fo=new WeakMap,ms=ln(class extends Cn{render(r){return $}update(r,[t]){var n;let e=t!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=(n=r.options)==null?void 0:n.host,this.rt(this.ct=r.element)),$}rt(r){if(this.G!==void 0)if(this.isConnected||(r=void 0),typeof this.G=="function"){let t=this.ht??globalThis,e=Fo.get(t);e===void 0&&(e=new WeakMap,Fo.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){var r,t;return typeof this.G=="function"?(r=Fo.get(this.ht??globalThis))==null?void 0:r.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});async function Ro(r,t){return(await r.callWS({type:"neonplan3d/image/get",image_id:t})).data}async function Dn(r,t,e){await r.callWS({type:"neonplan3d/image/set",image_id:t,data:e})}async function gs(r){return(await r.callWS({type:"neonplan3d/history/list"})).snapshots}async function _s(r){await r.callWS({type:"neonplan3d/history/snapshot"})}async function bs(r,t){return(await r.callWS({type:"neonplan3d/history/restore",snapshot_id:t})).revision}async function vs(r,t){return r.callWS({type:"neonplan3d/packs/import",pack:t})}async function ys(r,t){await r.callWS({type:"neonplan3d/packs/remove",pack_id:t})}var pl="neonplan3d.seenOffers";function $s(r){try{localStorage.setItem(pl,JSON.stringify(r.map(t=>t.id)))}catch{}}var xs="neonplan3d.seenUpdates";function ws(r){let t=[];try{t=JSON.parse(localStorage.getItem(xs)??"[]")}catch{}return r.filter(e=>!t.includes(`${e.id}@${e.release}`))}function ks(r){try{localStorage.setItem(xs,JSON.stringify(r.map(t=>`${t.id}@${t.release}`)))}catch{}}function Ms(r,t){return t?`${r}${r.includes("?")?"&":"?"}np_coupon=${encodeURIComponent(t.code)}`:r}function Lo(r){return r.callWS({type:"neonplan3d/license/get"})}function Oo(r,t){return r.callWS({type:"neonplan3d/license/activate",key:t})}function Ss(r){return r.callWS({type:"neonplan3d/license/remove"})}function Ps(r){return r.callWS({type:"neonplan3d/license/refresh"})}function Es(r){return r.callWS({type:"neonplan3d/backup/export"})}function As(r,t,e){return r.callWS({type:"neonplan3d/backup/import",building:t,packs:e})}function zs(r,t){return r.callWS({type:"neonplan3d/packs/install",pack_id:t})}var ul=[],Vo=new Map,hl=0;function Is(r){ul=r,Vo=new Map(r.flatMap(t=>t.items.map(e=>[Oe(t.id,e.id),e]))),hl++}function Oe(r,t){return`pack:${r}:${t}`}function Ve(r){return r.startsWith("pack:")}var fl={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Fs(r){var t;return(t=gt(r))==null?void 0:t.parts.find(e=>e.screen)}function Rs(r){let t=gt(r);if(!t)return!1;let[e,n,o]=t.size;return t.parts.some(i=>{if(!i.screen)return!1;let[s,a]=[i.w*e,i.d*n,i.h*o].sort((l,c)=>c-l);return s>=.06&&a>=.06})}function gt(r){if(!Ve(r))return;let t=Vo.get(r);if(t)return t;let[,e,...n]=r.split(":"),o=fl[e];return o?Vo.get(`pack:${o}:${n.join(":")}`):void 0}function ie(r){var t;return Ht[r]??((t=gt(r))==null?void 0:t.size)??[.6,.6,.8]}function pn(r){var t,e;return Cs.has(r)||!!((t=gt(r))!=null&&t.electric)||!!((e=gt(r))!=null&&e.light)}function se(r){return r.name.es??r.name.en??Object.values(r.name)[0]??r.id}var ml={architecture:"Arquitectura y acabados",bath:"Ba\xF1o",bedroom:"Dormitorio",cinema:"Cine en casa y Hi-Fi",exclusive:"Exclusivo: frigor\xEDfico inteligente",fitness:"Fitness",garage:"Garaje y taller",garden:"Jard\xEDn y terraza",kids:"Cuarto infantil",kitchen:"Cocina",living:"Sal\xF3n",office:"Oficina y gaming",pets:"Mascotas",smarthome:"Smart home y tecnolog\xEDa",stairs:"Escaleras y barandillas",utility:"Lavadero e instalaciones",vehicles:"Veh\xEDculos",starter:"Pack de inicio",pro_auto:"Pro: Auto Pro",pro_timetravel:"Pro: Viaje en el tiempo",pro_pool:"Pro: Piscina Pro",pro_camera:"Pro: Cabina de c\xE1mara",pro_energy:"Pro: Energ\xEDa Pro",pro_screens:"Pro: Pantallas en directo",pro_sound:"Pro: Sonido y Cine",pro_weather:"Pro: Tiempo exterior"};function kt(r){let t=r.id.replace(/^mastershort\./,""),e=t.endsWith("_sample"),n=ml[e?t.slice(0,-7):t];return n?e?`${n} \u2013 muestra`:n:r.name}function zt(r,t){let e=gt(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return Ls;if(Os.has(t.type))return Math.max(0,r.height-Vs(t.type,t.h));if(t.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return js(r,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,r.height-t.h);default:return e?0:Ts(t)}}var Ds=["always","no_power","never"],Hs=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],Hn={field:null,size:1,right:0,up:0},Ws=["navigate","more_info","service","fire_dom_event"];function To(r,t,e){return r?t?!!e.lock_plan:!!r.locked:!1}var Ns=["rain","snow","fog","clouds","lightning","sky"],jo=["rain","snow","clouds","lightning","sky"],Co=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],Wn={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Do(r){return r==="hedge"||r==="fence"||r==="pergola"}var Bs=["x","-x","z","-z"];function gl(r,t,e){let n=r.slope??0;if(!n||r.type==="pool")return 0;let o=r.slope_dir??"x",i=(c,d)=>o==="x"?c:o==="-x"?-c:o==="z"?d:-d,s=1/0,a=-1/0;for(let[c,d]of r.points){let p=i(c,d);s=Math.min(s,p),a=Math.max(a,p)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(t,e)-s)/(a-s)));return n*l}function _l(r,t,e,n){return Ho(r)+(t.offset??0)+Wn[t.type]-gl(t,e,n)}function Ho(r){return r.elevation>.3?0:-.2}function Us(r,t,e){let n=(r.outdoor??[]).filter(i=>!Do(i.type)&&i.type!=="pool"&&N([t,e],i.points)),o=[...n].reverse().find(i=>i.cut)??n[0];return o?_l(r,o,t,e):Ho(r)}var qs=["filter","backwash","rinse","waste","recirculate","closed"];function Ks(r,t){let e=Ho(r)+(t.offset??0);return t.above?e+Wo(t)-.15:e+Wn.pool}function Wo(r){return r.height&&r.height>.3?r.height:1.2}function Nn(r,t,e,n,o){let i=_=>Math.round(_*1e3)/1e3,s=n-t,a=o-e,l=(t+n)/2,c=(e+o)/2;if(r==="rect")return[[t,e],[n,e],[n,o],[t,o]];let d=40;if(r==="round"){let _=Math.min(s,a)/2;return Array.from({length:d},(g,b)=>[i(l+_*Math.cos(b/d*Math.PI*2)),i(c+_*Math.sin(b/d*Math.PI*2))])}let p=s>=a,u=(p?a:s)/2,h=Math.max(0,(p?s:a)/2-u),f=[],m=d/2;for(let _=0;_<2;_++){let g=_===0?1:-1;for(let b=0;b<=m;b++){let y=-Math.PI/2+b/m*Math.PI+(_===0?0:Math.PI),M=g*h+u*Math.cos(y),P=u*Math.sin(y);f.push(p?[i(l+M),i(c+P)]:[i(l+P),i(c+M)])}}return f}var bl={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Gs=["wood","oak","tiles","carpet","stone","concrete"],Xs={type:"none",pitch:35,overhang:.4},vl={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Xs}};function Js(r,t,e){return{id:r,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var yl=2.75;function Ys(r,t){if(t!=null&&Number.isFinite(t))return Math.round(t*yl*100)/100;let e=r.reduce((n,o)=>!n||o.elevation>n.elevation?o:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function Qs(r,t,e){let n=r.rooms.flatMap(a=>a.points.map(l=>l[0])),o=r.rooms.flatMap(a=>a.points.map(l=>l[1])),i=n.length?Math.ceil(Math.max(...n))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return t.map((a,l)=>{let c=i+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:e(),name:a.name,area_id:a.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function Zs(r,t,e,n){let o=r.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[a,l]=t,c=r.x-a*(r.w/2)*i+l*(r.d/2)*s,d=r.z-a*(r.w/2)*s-l*(r.d/2)*i,p=e[0]-c,u=e[1]-d,h=g=>Math.max(.1,Math.round(g/n)*n),f=h((p*i+u*s)*a),m=h((-p*s+u*i)*l),_=g=>Math.round(g*1e3)/1e3;return{x:_(c+a*(f/2)*i-l*(m/2)*s),z:_(d+a*(f/2)*s+l*(m/2)*i),w:_(f),d:_(m)}}var No=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell"],Bo={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","stairs_u","robot_vacuum"],vehicles:["parking"]},Ot=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],tr=.3,re=["meter","inverter","home_battery","wallbox","grid_point"],er=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Ls=1.75;function Te(r){if(["lamp_ceiling","lamp_panel","lamp_pendant","stairwell","parking"].includes(r.type)||Uo.has(r.type))return!1;let t=gt(r.type);return!((t==null?void 0:t.mount)==="ceiling"&&t.light)}var Os=new Set(["lamp_downlight","lamp_spot"]);function Vs(r,t){return r==="lamp_spot"?Math.max(.06,t)+.008:.02}var Uo=new Set(["stairs","stairs_u"]);function nr(r,t,e){let n=Math.max(4,Math.round(e/.18)),o=Math.floor(n/2)+1,i=o-1,s=n-o,a=Math.min(.12,r*.06),l=(r-a)/2,c=Math.min(l,t*.45),d=(t-c)/i;return{n,k:o,steps1:i,steps2:s,gap:a,fw:l,landing:c,run:d,rise:e/n}}function It(r){var t;return er.has(r)||!!((t=gt(r))!=null&&t.light)}var $l=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function qo(r,t,e,n=0){let o=dt(r.points),i=o.x1-o.x0-2*n,s=o.z1-o.z0-2*n,a=[];for(let l=0;l<t;l++)for(let c=0;c<e;c++){let d=[Math.round((o.x0+n+i/e*(c+.5))*1e3)/1e3,Math.round((o.z0+n+s/t*(l+.5))*1e3)/1e3];N(d,r.points)&&a.push(d)}return a}function je(r,t,e){let n=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(r[0]+o*t),n(r[1]+i*t)]}function Ts(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function js(r,t,e){var o;let n=0;for(let i of r.furniture)!($l.has(i.type)||(o=gt(i.type))!=null&&o.surface)||!N([t,e],Wt(i))||(n=Math.max(n,i.h));return n}var Cs=new Set([...er,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Ht={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Ko=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Go=["standard","bars","glass_wall"];function Bn(r,t){return r.type==="door"?r.style&&Ko.includes(r.style)?r.style:t?"front":"interior":r.style&&Go.includes(r.style)?r.style:"standard"}function or(r,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let o=t==="sidelights",i=r-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),a=(i-s)/(o?2:1),l=n.sidelight_width??a,c=o?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=o?Math.max(.1,c):0;let d=i-.5;if(l+c>d){let u=Math.max(0,d)/(l+c);l*=u,c*=u}return o?{panels:[[.02,.02+l],[r-.02-c,r-.02]],x0:.02+l,x1:r-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:r-.02}:{panels:[[r-.02-l,r-.02]],x0:.02,x1:r-.02-l}}function Xo(r){return r==="front"||r==="front_glass"||r==="sidelight"||r==="sidelights"}var Un={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function qn(r){if(r.type==="garage")return"garage";if(r.type==="window"&&r.style==="glass_wall")return"glass_wall";let t=r.leaves===2;return r.type==="door"?!t&&r.style&&Xo(r.style)?"front":t?"door_double":"door":r.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function Kn(r){var t;r.energy={...bl,...r.energy??{}},r.presence=r.presence??[],r.settings={...vl,...r.settings,roof:{...Xs,...((t=r.settings)==null?void 0:t.roof)??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(o=>({...o,panel:o.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(o=>({...o,mount:o.mount??null,rotation:o.rotation??0})),e.furniture=e.furniture.map(o=>({...o,entity:o.entity??null,power:o.power??null}));let n=e.placements.filter(o=>o.entity_id.startsWith("light.")&&!o.pin);if(n.length){let o={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let i of n){let s=o[i.mount??"ceiling"],[a,l,c]=Ht[s];e.furniture.push({id:`lamp_${i.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:i.x,z:i.z,rotation:0,w:a,d:l,h:c,variant:null,entity:i.entity_id,power:null})}e.placements=e.placements.filter(i=>!i.entity_id.startsWith("light.")||i.pin)}e.openings=e.openings.map(o=>({...o,hinge:o.hinge??"left",leaves:o.leaves??1,swing:o.swing??"in",style:o.style??null,cover:o.cover??null,contact:o.contact??null,contact2:o.contact2??null,tilt:o.tilt??null}))}return r}function B(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function at(r){let t=0;for(let e=0;e<r.length;e++){let[n,o]=r[e],[i,s]=r[(e+1)%r.length];t+=n*s-i*o}return t/2}function xt(r){return Math.abs(at(r))}function Vt(r){let t=at(r);if(Math.abs(t)<1e-9){let o=r.length||1;return[r.reduce((i,s)=>i+s[0],0)/o,r.reduce((i,s)=>i+s[1],0)/o]}let e=0,n=0;for(let o=0;o<r.length;o++){let[i,s]=r[o],[a,l]=r[(o+1)%r.length],c=i*l-a*s;e+=(i+a)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function Gn(r){if(r.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=r[t],[o,i]=r[(t+1)%4];if(Math.abs(e-o)>1e-6&&Math.abs(n-i)>1e-6)return!1}return!0}function dt(r){let t=1/0,e=1/0,n=-1/0,o=-1/0;for(let[i,s]of r)t=Math.min(t,i),e=Math.min(e,s),n=Math.max(n,i),o=Math.max(o,s);return{x0:t,z0:e,x1:n,z1:o}}function Wt(r){let t=r.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),o=r.w/2,i=r.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,a])=>[r.x+s*e-a*n,r.z+s*n+a*e])}function N(r,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[i,s]=t[n],[a,l]=t[o];s>r[1]!=l>r[1]&&r[0]<(a-i)*(r[1]-s)/(l-s)+i&&(e=!e)}return e}var Jo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var ir="neonplan3d";function xl(r){let t=structuredClone(r);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function sr(r,t){return{format:ir,version:1,exported_at:new Date().toISOString(),building:t?xl(r):structuredClone(r)}}function rr(r){let t;try{t=JSON.parse(r)}catch{throw new Error("not_json")}let e=t,n=(e==null?void 0:e.format)===ir?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let o of n.floors)o.background=null;return Kn(n)}function ar(r){var e;let t=new Set;for(let n of r.floors){(e=n.background)!=null&&e.image_id&&t.add(n.background.image_id);for(let o of n.furniture)for(let i of o.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&t.add(i.image)}return[...t]}function Yo(r,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=r,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var wl={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},kl=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),Ml=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),Sl=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Xn=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],ur=new Set(["light","switch","fan"]);function hr(r){return r.slice(0,r.indexOf("."))}function J(r){return wl[hr(r)]??null}function hn(r){return r!==null&&r!=="scene"&&r!=="script"}function ke(r,t){var n,o,i;let e=(n=r.entities)==null?void 0:n[t];return e?e.area_id?e.area_id:e.device_id&&((i=(o=r.devices)==null?void 0:o[e.device_id])==null?void 0:i.area_id)||null:null}function lr(r,t){var s;let e=J(t);if(!e)return!1;let n=(s=r.entities)==null?void 0:s[t];if(n!=null&&n.hidden||n!=null&&n.entity_category)return!1;let o=r.states[t];if(!o)return!1;let i=o.attributes.device_class;return e==="sensor"?i?kl.has(i):Ml.has(String(o.attributes.unit_of_measurement??"")):e==="binary"?i?Sl.has(i):!!(n!=null&&n.area_id):!0}var Pl=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function cr(r,t){var o;if(J(t)!=="sensor")return!1;let e=(o=r.entities)==null?void 0:o[t];if(e!=null&&e.hidden||e!=null&&e.entity_category)return!1;let n=r.states[t];return!n||!n.attributes.unit_of_measurement||Pl.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Jn(n)}var Qo=null;function xe(r){var l,c;let t=Qo;if(t&&t.entities===r.entities&&t.devices===r.devices&&(t.states===r.states||(t.states=r.states,Object.keys(r.states).length===t.stateCount)))return t;let e=new Map,n=new Map,o=[],i=new Map,s=new Map;for(let d of Object.keys(r.entities??{})){let p=r.entities[d],u=p.device_id;u&&p.area_id&&(s.get(u)??s.set(u,new Set).get(u)).add(p.area_id),u&&si(r,d)&&(n.get(u)??n.set(u,[]).get(u)).push(d),u&&!p.hidden&&!p.entity_category&&(i.get(u)??i.set(u,new Set).get(u)).add(hr(d));let h=lr(r,d),f=ke(r,d);if(!f){(h||cr(r,d))&&hn(J(d))&&o.push(d);continue}h&&(e.get(f)??e.set(f,[]).get(f)).push(d)}if(r.entities)for(let d of Object.keys(r.states))r.entities[d]||(lr(r,d)||cr(r,d))&&hn(J(d))&&o.push(d);o.sort((d,p)=>Xn.indexOf(J(d))-Xn.indexOf(J(p))||st(r,d).localeCompare(st(r,p)));for(let[d,p]of e){let u=(c=(l=r.areas)==null?void 0:l[d])==null?void 0:c.name;p.sort((h,f)=>{let m=Xn.indexOf(J(h)),_=Xn.indexOf(J(f));return m-_||st(r,h,u).localeCompare(st(r,f,u))})}let a=new Set([...s].filter(([,d])=>d.size>1).map(([d])=>d));return Qo={entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,areas:e,power:n,unassigned:o,domains:i,hubs:a},Qo}function we(r,t){return!t||!r.entities?[]:xe(r).areas.get(t)??[]}function fr(r,t){return r.entities?[...xe(r).areas].filter(([e])=>e!==t).map(([e,n])=>{var o,i;return{areaId:e,name:((i=(o=r.areas)==null?void 0:o[e])==null?void 0:i.name)??e,ids:n.filter(s=>hn(J(s)))}}).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function mr(r){return r.entities?xe(r).unassigned:[]}var Zo={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},El=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Al=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function ti(r,t){var o,i,s;let e=(i=(o=r.entities)==null?void 0:o[t])==null?void 0:i.device_id,n=e&&!xe(r).hubs.has(e)?xe(r).domains.get(e):void 0;return n&&[...n].some(a=>El.has(a))?!1:!Al.test(`${t} ${((s=r.states[t])==null?void 0:s.attributes.friendly_name)??""}`)}function gr(r,t,e,n){var h;let o=(h=e.climate)==null?void 0:h[n];if(o==="none")return[];if(o)return r.states[o]?[o]:[];let i=Zo[n],s=(f,m)=>N([f,m],e.points),a=(t==null?void 0:t.placements.filter(f=>f.entity_id.startsWith("sensor.")))??[],l=a.filter(f=>s(f.x,f.z)).map(f=>f.entity_id),c=new Set(a.filter(f=>!s(f.x,f.z)).map(f=>f.entity_id)),d=[...new Set([...we(r,e.area_id).filter(f=>!c.has(f)),...l])],p=d.filter(f=>{var m;return f.startsWith("sensor.")&&((m=r.states[f])==null?void 0:m.attributes.device_class)===i&&ti(r,f)});if(p.length)return p;let u=ei[n];return u?d.filter(f=>{var m;return f.startsWith("climate.")&&typeof((m=r.states[f])==null?void 0:m.attributes[u])=="number"}):[]}var ei={temperature:"current_temperature",humidity:"current_humidity"};function _r(r,t){return!!r.entities&&xe(r).hubs.has(t)}function ni(r,t){return r.entities?xe(r).power.get(t)??[]:[]}function st(r,t,e){var i,s;let n=r.states[t],o=(n==null?void 0:n.attributes.friendly_name)??((s=(i=r.entities)==null?void 0:i[t])==null?void 0:s.name)??t;if(e&&o.length>e.length+1&&o.toLowerCase().startsWith(e.toLowerCase()+" ")){let a=o.slice(e.length+1);return a.charAt(0).toUpperCase()+a.slice(1)}return o}function Jn(r){return!r||r.state==="unavailable"||r.state==="unknown"}function br(r){return!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum"}function Yn(r,t,e=null){if(r==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(r==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(r){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function zl(r,t){let e=1/0;for(let n=0;n<t.length;n++){let o=t[n],i=t[(n+1)%t.length],s=i[0]-o[0],a=i[1]-o[1],l=s*s+a*a||1,c=Math.min(1,Math.max(0,((r[0]-o[0])*s+(r[1]-o[1])*a)/l));e=Math.min(e,Math.hypot(r[0]-o[0]-s*c,r[1]-o[1]-a*c))}return e}function vr(r,t,e=[]){if(r.points.length<3||!t.length)return[];let n=r.points,o=n.map(b=>b[0]),i=n.map(b=>b[1]),s=Math.min(...o),a=Math.min(...i),l=Math.max(...o),c=Math.max(...i),d=Math.min(l-s,c-a),p=Math.max(.1,Math.min(.25,d/8)),u=Math.min(.35,d/5),h=Vt(n),f=[];for(let b=s+p/2;b<l;b+=p)for(let y=a+p/2;y<c;y+=p){let M=[b,y];if(!N(M,n))continue;let P=zl(M,n);P<u||f.push({p:M,wall:P})}f.length||f.push({p:h,wall:0});let m=[...e],_=[],g=Math.min(.7,d/4);for(let b of t){let y=J(b)==="light",M=f[0].p,P=-1/0;for(let{p:F,wall:S}of f){let x=m.length?Math.min(...m.map(A=>Math.hypot(F[0]-A[0],F[1]-A[1]))):3,w=Math.hypot(F[0]-h[0],F[1]-h[1]),k=Math.min(x,3)*2;w<g&&!y&&(k-=10),k-=y?w*.35:S*1.2,k>P+1e-9&&(P=k,M=F)}let I=[Math.round(M[0]*100)/100,Math.round(M[1]*100)/100];m.push(I),_.push({entity_id:b,x:I[0],z:I[1],y:null,mount:null})}return _}var Il=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Fl=new Set(["garage","gate"]),Rl=new Set(["window","opening"]);function un(r,t,e=!1){let n=new Map;return t.length&&r.forEach((o,i)=>{let s=e&&t.length===1?t[0]:t[i];s&&n.set(o.id,s)}),n}function yr(r,t){let e=new Map,n=(i,s)=>i==="none"?null:i??s??null,o=(i,s,a)=>({cover:n(i.cover,s),contact:i.sensor==="handle"&&i.contact==null?null:n(i.contact,a),tilt:i.tilt==="none"?null:i.tilt,contact2:i.leaves===2&&i.contact2&&i.contact2!=="none"?i.contact2:null,tilt2:i.leaves===2&&i.tilt2&&i.tilt2!=="none"?i.tilt2:null,position:i.position&&i.position!=="none"?i.position:null,positionInverted:!!i.position_inverted,tiltAngle:i.tilt_angle&&i.tilt_angle!=="none"?i.tilt_angle:null,tiltMax:i.tilt_max??null,tiltOffset:i.tilt_offset??null,tiltInvert:!!i.tilt_invert,shut:!!i.shut,...i.contact_invert?{contactInvert:!0}:{},...i.cover_invert?{coverInvert:!0}:{}});for(let i of t){for(let s of i.rooms){let a=i.openings.filter(y=>y.room_id===s.id).sort((y,M)=>y.edge-M.edge||y.offset-M.offset);if(!a.length)continue;let l=we(r,s.area_id),c=y=>{var M;return(M=r.states[y])==null?void 0:M.attributes.device_class},d=l.filter(y=>J(y)==="cover"&&Il.has(c(y))),p=a.filter(y=>y.type==="window"),u=a.filter(y=>y.type==="door"),h=a.filter(y=>y.type==="garage"),f=un(p,d,!0),m=un(p,l.filter(y=>J(y)==="binary"&&Rl.has(c(y)))),_=un(u,l.filter(y=>J(y)==="binary"&&c(y)==="door")),g=un(h,l.filter(y=>J(y)==="cover"&&Fl.has(c(y)??""))),b=un(h,l.filter(y=>J(y)==="binary"&&c(y)==="garage_door"));for(let y of a){let M=y.type==="window"?f:y.type==="garage"?g:null,P=y.type==="window"?m:y.type==="garage"?b:_;e.set(y.id,o(y,M==null?void 0:M.get(y.id),P.get(y.id)))}}for(let s of i.openings)e.has(s.id)||e.set(s.id,o(s))}return e}var Ll=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function oi(r){if(!r||Jn(r))return null;let t=r.attributes.window_state;for(let e of[typeof t=="string"?t:null,r.state]){if(!e)continue;let n=Ll.find(([o])=>o.test(e.trim()));if(n)return n[1]}return null}function ii(r,t){var s,a;let e=new Map,n=[];for(let l of t){let c=((a=(s=r.entities)==null?void 0:s[l])==null?void 0:a.device_id)??`entity:${l}`,d=e.get(c);d||(e.set(c,d=[]),n.push(c)),d.push(l)}let o=n.map(l=>{let c=e.get(l),d=c.find(p=>{var u,h;return!((h=(u=r.entities)==null?void 0:u[p])!=null&&h.name)})??c[0];return{primary:d,others:c.filter(p=>p!==d)}}),i=new Map(t.map((l,c)=>[l,c]));return o.sort((l,c)=>i.get(l.primary)-i.get(c.primary))}function Ol(r,t){return ii(r,t).map(e=>e.primary)}var Vl={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},$r=new Set(["tv_board","tv_wall"]);function xr(r,t){let e=r.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let o=String(n).toLowerCase(),i=t.state.trim().toLowerCase();return t.state.trim()==="*"||o===i||i.length>=3&&o.includes(i)}function Qn(r){return $r.has(r)||!!Fs(r)}function Zn(r){return Qn(r)||r==="desk"||r==="fridge_smart"}var dr={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function si(r,t){var e;return t.startsWith("sensor.")&&((e=r.states[t])==null?void 0:e.attributes.device_class)==="power"}function Tl(r,t){var n,o;if(si(r,t))return t;let e=(o=(n=r.entities)==null?void 0:n[t])==null?void 0:o.device_id;return e?ni(r,e).find(i=>i!==t)??null:null}function Ce(r,t){let e=new Map;for(let n of t){let o=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let s=i.type in dr,a=s?dr[i.type]:Vl[i.type];if(!a&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&N([i.x,i.z],h.points)),c=l?Ol(r,we(r,l.area_id)):[],d=h=>`${h} ${st(r,h)}`,p=i.entity==="none"?null:i.entity??null;if(i.entity==null){let h=c.filter(f=>!o.has(f));if(s){let f=h.filter(m=>J(m)==="light");p=f.find(m=>a.test(d(m)))??f[0]??null}else if(i.type==="robot_vacuum"){let f=(l==null?void 0:l.area_id)??null;p=Object.keys(r.entities??{}).find(m=>m.startsWith("vacuum.")&&!o.has(m)&&ke(r,m)===f)??null}else if(i.type==="radiator"){let f=h.filter(m=>J(m)==="climate");p=f.find(m=>a.test(d(m)))??f[0]??null}else if(Qn(i.type)){let f=h.filter(m=>J(m)==="media");p=f.find(m=>{var _;return((_=r.states[m])==null?void 0:_.attributes.device_class)==="tv"})??f.find(m=>a==null?void 0:a.test(d(m)))??($r.has(i.type)?f[0]??null:null)}else a&&(p=h.find(f=>["switch","media","fan"].includes(J(f)??"")&&a.test(d(f)))??null);p&&o.add(p)}let u=i.power==="none"?null:i.power??null;i.power==null&&(u=p?Tl(r,p):null,!u&&a&&l&&!s&&(u=we(r,l.area_id).find(f=>si(r,f)&&!o.has(f)&&a.test(d(f)))??null),u&&o.add(u)),(p||u)&&e.set(i.id,{entity:p,power:u})}}return e}var pr=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,jl={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function wr(r,t){var p,u;let e=t.car??{},n=h=>h&&h!=="none"?h:null,o=n(e.device)??n(t.entity),i=o?(u=(p=r.entities)==null?void 0:p[o])==null?void 0:u.device_id:null,s=i&&r.entities?Object.values(r.entities).filter(h=>h.device_id===i).map(h=>h.entity_id):[],a=h=>{var f,m,_;return`${h} ${((f=r.states[h])==null?void 0:f.attributes.friendly_name)??""} ${((_=(m=r.entities)==null?void 0:m[h])==null?void 0:_.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(h,f,m)=>s.find(_=>f.includes(_.split(".")[0])&&jl[h].test(a(_))&&(!m||m(_)))??null,c=h=>{var f;return String(((f=r.states[h])==null?void 0:f.attributes.unit_of_measurement)??"")},d=h=>{var f;return String(((f=r.states[h])==null?void 0:f.attributes.device_class)??"")};return{soc:n(e.soc)??s.find(h=>h.startsWith("sensor.")&&d(h)==="battery")??l("soc",["sensor"],h=>c(h)==="%"),range:n(e.range)??l("range",["sensor"],h=>/km|mi/.test(c(h)))??l("range",["sensor"]),charging:n(e.charging)??l("charging",["sensor"],h=>/^k?W$/.test(c(h)))??l("charging",["binary_sensor","switch"]),plugged:n(e.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&d(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(e.lock)??s.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(e.climate)??s.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(e.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function kr(r,t,e){var o,i;if(e==="none")return null;if(e)return e;let n=t?(i=(o=r.entities)==null?void 0:o[t])==null?void 0:i.device_id:null;if(!n||!r.entities)return null;for(let s of Object.values(r.entities))if(!(s.device_id!==n||!s.entity_id.startsWith("sensor."))&&(pr.test(s.translation_key??"")||pr.test(s.entity_id.split(".")[1])))return s.entity_id;return null}var Y=(r,t,e,n,o="")=>T`<rect class=${o} x=${Math.min(r,e)} y=${Math.min(t,n)} width=${Math.abs(e-r)} height=${Math.abs(n-t)} />`,q=(r,t,e,n,o="")=>T`<line class=${o} x1=${r} y1=${t} x2=${e} y2=${n} />`,it=(r,t,e,n="")=>T`<circle class=${n} cx=${r} cy=${t} r=${e} />`,ri=(r,t,e,n,o="")=>T`<ellipse class=${o} cx=${r} cy=${t} rx=${e} ry=${n} />`;function ai(r,t,e){let n=[];for(let o=1;o<e;o++){let i=-r/2+r/e*o;n.push(q(i,t/2,i,t/2-Math.min(.12,t*.3)))}return n}function Mr(r,t,e,n){let o=Math.min(.24,t*.28),i=n?Math.min(.2,r*.12):0,s=[Y(-r/2,-t/2,r/2,-t/2+o,"fp3d-sym-fill")];n&&s.push(Y(-r/2,-t/2,-r/2+i,t/2,"fp3d-sym-fill"),Y(r/2-i,-t/2,r/2,t/2,"fp3d-sym-fill"));let a=r-2*i;for(let l=1;l<e;l++){let c=-r/2+i+a/e*l;s.push(q(c,-t/2+o,c,t/2-.02))}return s}function Sr(r,t,e){let n=-r/2,o=r/2,i=-t/2,s=t/2,a=Math.max(.3,Math.min(.95,t*.5,r*(e?.34:.45))),l=Math.min(.24,a*.28),c=Math.min(.2,a*.24),d=[Y(n,i,o,i+l,"fp3d-sym-fill"),Y(n,i+l,n+l,s,"fp3d-sym-fill"),Y(n+l,s-c,n+a,s,"fp3d-sym-fill")];e?d.push(Y(o-l,i+l,o,s,"fp3d-sym-fill"),Y(o-a,s-c,o-l,s,"fp3d-sym-fill")):d.push(Y(o-c,i+l,o,i+a,"fp3d-sym-fill"));let p=e?o-a:o-c;d.push(q(n+a,s-c,n+a,i+a),q(n+a,i+a,p,i+a)),e&&d.push(q(o-a,i+a,o-a,s-c));let u=n+l,h=e?o-l:o-c,f=Math.max(1,Math.round((h-u)/.62));for(let b=1;b<f;b++)d.push(q(u+(h-u)/f*b,i+l,u+(h-u)/f*b,i+a));let m=i+a,_=s-c,g=_-m<.2?0:Math.max(1,Math.round((_-m)/.62));for(let b=0;b<g;b++){let y=m+(_-m)/g*b;d.push(q(n+l,y,n+a,y)),e&&d.push(q(o-a,y,o-l,y))}return d}function Pr(r,t,e){switch(r){case"sofa":return Mr(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return Mr(t,e,1,!0);case"sofa_l":return Sr(t,e,!1);case"sofa_u":return Sr(t,e,!0);case"bench":return[Y(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[Y(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),Y(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),q(-t/2+n,-e/2+n,t/2,-e/2+n),q(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[Y(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[it(0,.03,Math.min(t,e)*.36),Y(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[it(0,0,Math.min(t,e)*.42)];case"stool":return[Y(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[Y(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return r==="desk"&&n.push(q(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,o=(t-.2)/n,i=[Y(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),q(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let s=0;s<n;s++)i.push(Y(-t/2+.13+o*s,-e/2+.12,-t/2+.07+o*(s+1),-e/2+.12+Math.min(.4,e*.18)));return i}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return ai(t,e,r==="nightstand"||r==="tall_cabinet"||r==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[Y(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...ai(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[q(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[q(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[it(-t*.22,-e*.2,n),it(t*.22,-e*.2,n*.8),it(-t*.22,e*.2,n*.8),it(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[Y(-n/2,-e/2+.1,n/2,e/2-.08),it(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[q(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[it(0,.05,Math.min(t,e)*.3),q(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[Y(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),it(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[q(-t/2,-e/2,t/2,e/2),q(t/2,-e/2,-t/2,e/2),it(0,0,.04)];case"wc":return[Y(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),ri(0,e*.1,t*.36,e*.3)];case"washbasin":return[ri(0,.03,t*.34,e*.3)];case"tv_board":return[q(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...ai(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[q(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[it(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),it(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[it(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),it(0,0,Math.min(t,e)*1.6)];case"parking":return[Y(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),q(-t*.15,e/2-.5,0,e/2-.22,"fp3d-sym-strong"),q(0,e/2-.22,t*.15,e/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[Y(-t*.45,-e/2,t*.45,-e/2+e*.3,"fp3d-sym-fill"),it(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],o=Math.max(3,Math.round(t/.1));for(let i=1;i<o;i++)n.push(q(-t/2+t/o*i,-e/2,-t/2+t/o*i,e/2));return n}case"lamp_panel":return[Y(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,o=[it(0,0,n*.9,"fp3d-sym-fill"),it(0,0,n*.3)];if(r==="lamp_ceiling"||r==="lamp_pendant")for(let i=0;i<8;i++){let s=i/8*Math.PI*2;o.push(q(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return o}case"lamp_wall":return[Y(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),ri(0,.01,t*.4,e*.4)];case"led_strip":return[q(-t/2,0,t/2,0,"fp3d-sym-strong")];case"plant":return[it(0,0,Math.min(t,e)*.46),it(0,0,Math.min(t,e)*.25)];case"rug":return[Y(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),o=[];for(let i=1;i<n;i++)o.push(q(-t/2,e/2-e/n*i,t/2,e/2-e/n*i));return o.push(q(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),q(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),q(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),o}case"stairs_u":{let{steps1:n,steps2:o,fw:i,landing:s,run:a}=nr(t,e,2.75),l=-e/2+s,c=-t/2+i,d=t/2-i,p=[q(-t/2,l,c,l),q(c,l,c,e/2),q(d,l,d,e/2)];for(let _=1;_<n;_++)p.push(q(-t/2,e/2-a*_,c,e/2-a*_));for(let _=1;_<=o;_++)p.push(q(d,l+a*_,t/2,l+a*_));let u=(-t/2+c)/2,h=(d+t/2)/2,f=-e/2+s/2,m=e/2-.15;return p.push(q(u,e/2-.1,u,f,"fp3d-sym-strong"),q(u,f,h,f,"fp3d-sym-strong"),q(h,f,h,m,"fp3d-sym-strong"),q(h-.15,m-.2,h,m,"fp3d-sym-strong"),q(h+.15,m-.2,h,m,"fp3d-sym-strong")),p}default:{let n=gt(r);return n?Cl(n,t,e):$}}}function Cl(r,t,e){var n;return(n=r.symbol)!=null&&n.length?r.symbol.map(o=>o.shape==="rect"?Y((o.x-o.w/2)*t,(o.z-o.d/2)*e,(o.x+o.w/2)*t,(o.z+o.d/2)*e,o.fill?"fp3d-sym-fill":""):o.shape==="circle"?it(o.x*t,o.z*e,o.r*Math.min(t,e)):q(o.x1*t,o.z1*e,o.x2*t,o.z2*e)):r.parts.filter(o=>o.w<.98||o.d<.98).map(o=>o.shape==="cyl"&&(o.axis??"y")==="y"?it(o.x*t,o.z*e,Math.min(o.w*t,o.d*e)/2):Y((o.x-o.w/2)*t,(o.z-o.d/2)*e,(o.x+o.w/2)*t,(o.z+o.d/2)*e))}var lt=(r,t)=>[r[0]-t[0],r[1]-t[1]],ae=(r,t)=>[r[0]+t[0],r[1]+t[1]],Yt=(r,t)=>[r[0]*t,r[1]*t],mn=(r,t)=>r[0]*t[0]+r[1]*t[1],De=(r,t)=>r[0]*t[1]-r[1]*t[0],fn=r=>Math.hypot(r[0],r[1]),Nt=r=>{let t=fn(r)||1;return[r[0]/t,r[1]/t]},Er=r=>[-r[1],r[0]],Ar=r=>[r[1],-r[0]];function vt(r,t,e=[]){let n=t.eps??.005,o=[],i=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),s=[],a=S=>{for(let x=0;x<s.length;x++)if(Math.abs(s[x][0]-S[0])<=n&&Math.abs(s[x][1]-S[1])<=n)return x;return s.push([S[0],S[1]]),s.length-1},l=[];for(let S of r){let x=S.points;if(x.length<3||Math.abs(at(x))<1e-6)continue;let w=at(x)>0,k=x.map(a);for(let A=0;A<x.length;A++){let E=k[A],L=k[(A+1)%x.length];E!==L&&l.push(w?{u:E,v:L,room:S.id,edge:A,forward:!0}:{u:L,v:E,room:S.id,edge:A,forward:!1})}}let c=i.map(S=>[a(S.a),a(S.b)]),d=new Set;for(let S of r){let x=S.points;x.length<3||(S.wall_splits??[]).forEach((w,k)=>{if(!w||k>=x.length)return;let A=x[k],E=lt(x[(k+1)%x.length],A),L=fn(E);for(let O of w)O>n&&O<L-n&&d.add(a(ae(A,Yt(E,O/L))))})}let p=[];for(let S of l){let x=s[S.u],w=s[S.v],k=lt(w,x),A=fn(k),E=Yt(k,1/A),L=[];for(let j=0;j<s.length;j++){if(j===S.u||j===S.v)continue;let R=lt(s[j],x),V=mn(R,E);V<=n||V>=A-n||Math.abs(De(E,R))<=n&&L.push({t:V,id:j})}L.sort((j,R)=>j.t-R.t);let O=[{t:0,id:S.u},...L,{t:A,id:S.v}];for(let j=0;j+1<O.length;j++){let R=O[j],V=O[j+1],H=S.forward?R.t:A-V.t,C=S.forward?V.t:A-R.t;p.push({u:R.id,v:V.id,room:S.room,edge:S.edge,t0:H,t1:C})}}let u=new Map;for(let S of p){let x=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,w=u.get(x);w||u.set(x,w=[]),w.push(S)}let h=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),f=new Map;for(let S of p){let x=`${S.room}:${S.edge}`;f.set(x,[...f.get(x)??[],S.t0].sort((w,k)=>w-k))}let m=S=>{var k,A;let x=(A=(k=r.find(E=>E.id===S.room))==null?void 0:k.wall_heights)==null?void 0:A[S.edge];if(!Array.isArray(x))return x;let w=f.get(`${S.room}:${S.edge}`)??[];return x[w.indexOf(S.t0)]??null},_=S=>{let x=S.map(m).filter(k=>typeof k=="number"&&k>0);if(x.length)return Math.min(...x);let w=S.map(k=>{var A;return(A=r.find(E=>E.id===k.room))==null?void 0:A.ceiling_height});return w.every(k=>typeof k=="number"&&k>0)?Math.max(...w):void 0},g=S=>{let x=S.map(w=>{var k,A;return(A=(k=r.find(E=>E.id===w.room))==null?void 0:k.wall_thickness)==null?void 0:A[w.edge]}).filter(w=>typeof w=="number"&&w>0);return x.length?Math.max(...x):void 0},b=S=>S.some(x=>m(x)===0),y=[],M=[];for(let S of u.values()){let x=S[0],w=S.find(k=>k!==x&&k.u===x.v&&k.v===x.u&&k.room!==x.room);for(let k of S)k!==x&&k!==w&&k.room!==x.room&&o.push(`overlap:${x.room}:${k.room}`);if(b(w?[x,w]:[x])){w&&y.push([x.room,w.room]);continue}if(w){let k=g([x,w])??t.interior;M.push({a:x.u,b:x.v,left:k/2,right:k/2,exterior:!1,roomLeft:x.room,roomRight:w.room,sources:[h(x),h(w)],height:_([x,w])})}else M.push({a:x.u,b:x.v,left:0,right:g([x])??t.exterior,exterior:!0,roomLeft:x.room,roomRight:null,sources:[h(x)],height:_([x])})}let P=S=>Nt(lt(s[S.b],s[S.a]));for(let S of M){if(S.exterior||S.free)continue;let x=new Set;for(let k of[S.a,S.b])for(let A of M)!A.exterior||A.free||A.a!==k&&A.b!==k||Math.abs(De(P(S),P(A)))>1e-6||(A.roomLeft===S.roomLeft?x.add("left"):A.roomLeft===S.roomRight&&x.add("right"));if(x.size!==1)continue;let w=S.left+S.right;x.has("left")?(S.left=0,S.right=w):(S.left=w,S.right=0)}i.forEach((S,x)=>{var j;let[w,k]=c[x];if(w===k)return;let A=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],E=((j=r.find(R=>R.points.length>=3&&N(A,R.points)))==null?void 0:j.id)??null,L=(S.thickness??t.interior)/2,O=typeof S.height=="number"&&S.height>0?S.height:void 0;M.push({free:S.id,a:w,b:k,left:L,right:L,exterior:!1,roomLeft:E,roomRight:E,sources:[],height:O})}),M=Hl(M,s,d);let I=Nl(M,s);return{walls:M.map((S,x)=>{let w=s[S.a],k=s[S.b],A=I.get(`${x}:a`),E=I.get(`${x}:b`),L=Bl([A.right,E.left,k,E.right,A.left,w],1e-6);return{id:Dl(w,k),a:[w[0],w[1]],b:[k[0],k[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:L,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{}}}),warnings:[...new Set(o)],open:y}}function Dl(r,t){let e=i=>Math.round(i*100),[n,o]=r[0]<t[0]||r[0]===t[0]&&r[1]<=t[1]?[r,t]:[t,r];return`w_${e(n[0])}_${e(n[1])}_${e(o[0])}_${e(o[1])}`}function zr(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function Hl(r,t,e=new Set){let n=r.slice(),o=!0;for(;o;){o=!1;let i=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let c=i.get(l);c||i.set(l,c=[]),c.push(a)}});for(let[s,a]of i){if(a.length!==2||e.has(s))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==s&&(l=zr(l)),c.a!==s&&(c=zr(c)),l.a===c.b)continue;let d=Nt(lt(t[l.b],t[l.a])),p=Nt(lt(t[c.b],t[c.a]));if(Math.abs(De(d,p))>1e-6||mn(d,p)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let u={...l,b:c.b,sources:Wl(l.sources,c.sources)},h=n.filter((f,m)=>m!==a[0]&&m!==a[1]);h.push(u),n.length=0,n.push(...h),o=!0;break}}return n}function Wl(r,t){let e=r.map(n=>({...n}));for(let n of t){let o=e.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,n.t0),o.t1=Math.max(o.t1,n.t1)):e.push({...n})}return e}function Nl(r,t){let e=new Map;r.forEach((o,i)=>{let s=Nt(lt(t[o.b],t[o.a])),a=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:Yt(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of a){let d=e.get(l);d||e.set(l,d=[]),d.push(c)}});let n=new Map;for(let[o,i]of e){let s=t[o];i.sort((c,d)=>c.angle-d.angle);let a=c=>({left:ae(s,Yt(Er(c.d),c.left)),right:ae(s,Yt(Ar(c.d),c.right))});for(let c of i)n.set(c.key,a(c));if(i.length<2)continue;let l=4*Math.max(...i.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<i.length;c++){let d=i[c],p=i[(c+1)%i.length],u=ae(s,Yt(Er(d.d),d.left)),h=ae(s,Yt(Ar(p.d),p.right)),f=De(d.d,p.d);if(Math.abs(f)<1e-4)continue;let m=De(lt(h,u),p.d)/f,_=ae(u,Yt(d.d,m));fn(lt(_,s))>l||(n.get(d.key).left=_,n.get(p.key).right=_)}}return n}function Bl(r,t){let e=r.filter((o,i)=>fn(lt(o,r[(i+1)%r.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let o=0;o<e.length;o++){let i=e[(o+e.length-1)%e.length],s=e[o],a=e[(o+1)%e.length],l=lt(s,i),c=lt(a,s);if(Math.abs(De(Nt(l),Nt(c)))<1e-7&&mn(l,c)>0){e=e.filter((d,p)=>p!==o),n=!0;break}}}return e}function le(r,t,e){let n=r.points[t],o=r.points[(t+1)%r.points.length],i=Nt(lt(o,n));return ae(n,Yt(i,e))}function He(r,t,e){if(r.wall){let o=e.find(a=>a.id===r.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=Nt(lt(o.b,o.a));return{room:{id:r.room_id,name:"",area_id:null,points:[o.a,o.b,ae(o.a,[-i[1],i[0]])]},edge:0}}let n=t.find(o=>o.id===r.room_id);return n&&r.edge<n.points.length?{room:n,edge:r.edge}:null}function li(r,t,e){if(!t.wall)return Ul(r,e.room,e.edge,t.offset);let n=r.find(i=>i.free===t.wall);if(!n)return null;let o=le(e.room,0,t.offset);return{wall:n,s:mn(lt(o,n.a),Nt(lt(n.b,n.a)))}}function Ul(r,t,e,n){for(let o of r){if(!o.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=le(t,e,n);return{wall:o,s:mn(lt(s,o.a),Nt(lt(o.b,o.a)))}}return null}function ci(r,t){let e=at(t)>0?1:-1,n=[...r];for(let o=0;o<t.length&&n.length;o++){let i=t[o],s=t[(o+1)%t.length],a=c=>e*((s[0]-i[0])*(c[1]-i[1])-(s[1]-i[1])*(c[0]-i[0])),l=n;n=[];for(let c=0;c<l.length;c++){let d=l[c],p=l[(c+1)%l.length],u=a(d),h=a(p);if(u>=0&&n.push(d),u>=0!=h>=0){let f=u/(u-h);n.push([d[0]+(p[0]-d[0])*f,d[1]+(p[1]-d[1])*f])}}}return n}var Ir=r=>r.length>=3?Math.abs(xt(r)):0;function ql(r,t){return r.exterior?0:r.roomLeft===t?r.left:r.roomRight===t?r.right:0}function Fr(r,t,e){let n=Ir(r.points);if(r.points.length<3)return n;let{walls:o}=vt(t.rooms,e,t.walls??[]),i=n,s=o.filter(a=>!a.free&&(a.roomLeft===r.id||a.roomRight===r.id));for(let a of o){let l=[(a.a[0]+a.b[0])/2,(a.a[1]+a.b[1])/2];if((a.free?!N(l,r.points):!s.includes(a))||(i-=Ir(ci(r.points,a.footprint)),!a.free))continue;let c=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(c<.2)continue;let d=[(a.b[0]-a.a[0])/c,(a.b[1]-a.a[1])/c],p=null;for(let u of s){let h=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1]);if(h<.2)continue;let f=[(u.b[0]-u.a[0])/h,(u.b[1]-u.a[1])/h];if(Math.abs(d[0]*f[1]-d[1]*f[0])>.05)continue;let m=Math.abs((l[0]-u.a[0])*f[1]-(l[1]-u.a[1])*f[0]),_=(a.a[0]-u.a[0])*f[0]+(a.a[1]-u.a[1])*f[1],g=(a.b[0]-u.a[0])*f[0]+(a.b[1]-u.a[1])*f[1],b=Math.min(h,Math.max(_,g))-Math.max(0,Math.min(_,g)),y=m-(a.left+a.right)/2-ql(u,r.id);b>.1&&y>0&&m<1&&(!p||y<p.gap)&&(p={gap:y,overlap:b})}p&&(i-=p.gap*p.overlap)}return Math.max(0,i)}function di(r,t){var e,n;return t==="metric"||t==="imperial"?t:((n=(e=r==null?void 0:r.config)==null?void 0:e.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function Rr(r,t){return String(Number(r.toFixed(t)))}function Me(r,t=2){let e=r<0?"-":"",n=Math.round(Math.abs(r)/.0254*(t>=2?10:1))/(t>=2?10:1),o=Math.floor(n/12+1e-9),i=n-o*12,s=Rr(i,t>=2?1:0);return o?i<.05?`${e}${o}'`:`${e}${o}' ${s}"`:`${e}${s}"`}function pi(r,t){let e=r.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,o=0,i=!1,s=!1,a=e;for(let l of e.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];i=!0,a=a.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(o+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?o+=c*.0254:d==="mm"?o+=c/1e3:d==="cm"?o+=c/100:d==="m"?o+=c:o+=t==="imperial"?c*(s?.0254:.3048):c}return!i||/[^\s+]/.test(a)?null:o}function Lr(r,t,e){return t==="imperial"?Me(r):`${e(r)} m`}function Or(r,t,e){return t==="imperial"?`${Rr(r/(.3048*.3048),1)} ft\xB2`:`${e(r)} m\xB2`}function gn(r,t){return t==="imperial"?r.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):r}var Kl=.05,Gl=.2,Xl=.12;function Jl(r){let t=[];return r.forEach((e,n)=>{let o=e.points;if(o.length<3)return;let i=at(o)>=0;for(let s=0;s<o.length;s++){let a=o[s],l=o[(s+1)%o.length],c=l[0]-a[0],d=l[1]-a[1],p=Math.hypot(c,d);if(p<.05)continue;let u=[c/p,d/p],h=i?[u[1],-u[0]]:[-u[1],u[0]];(u[1]<-1e-9||Math.abs(u[1])<=1e-9&&u[0]<0)&&(u=[-u[0],-u[1]]);let f=[-u[1],u[0]],m=a[0]*u[0]+a[1]*u[1],_=l[0]*u[0]+l[1]*u[1];t.push({room:n,index:s,dir:u,normal:f,offset:a[0]*f[0]+a[1]*f[1],outside:h[0]*f[0]+h[1]*f[1]>0?1:-1,t0:Math.min(m,_),t1:Math.max(m,_)})}}),t}function Vr(r,t=.6){let e=Jl(r),n=e.map((d,p)=>p),o=d=>n[d]===d?d:n[d]=o(n[d]),i=[];for(let d=0;d<e.length;d++)for(let p=d+1;p<e.length;p++){let u=e[d],h=e[p];if(u.room===h.room||Math.abs(u.dir[0]*h.dir[1]-u.dir[1]*h.dir[0])>Kl||u.outside===h.outside)continue;let f=(h.offset-u.offset)*u.outside;f>t||f<-Xl||Math.abs(f)<1e-4||Math.min(u.t1,h.t1)-Math.max(u.t0,h.t0)<Gl||(i.push(Math.round(f*1e3)/1e3),n[o(d)]=o(p))}if(!i.length)return{rooms:r.map(d=>({...d,points:d.points.map(p=>[p[0],p[1]])})),gaps:i};let s=new Map;e.forEach((d,p)=>{let u=o(p);if(u===p&&!e.some((f,m)=>m!==p&&o(m)===p))return;let h=s.get(u)??[];h.push(p),s.set(u,h)});let a=r.map(d=>d.points.map(()=>new Map));for(let[d,p]of s){let u=p.reduce((h,f)=>h+e[f].offset,0)/p.length;for(let h of p){let f=e[h],m=u-f.offset,_=[f.normal[0]*m,f.normal[1]*m],g=r[f.room].points.length;a[f.room][f.index].set(d,_),a[f.room][(f.index+1)%g].set(d,_)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:r.map((d,p)=>({...d,points:d.points.map((u,h)=>{let f=u[0],m=u[1];for(let[_,g]of a[p][h].values())f+=_,m+=g;return[l(f),l(m)]})})),gaps:i}}function Tr(r){let t=r.filter(n=>n>.04).sort((n,o)=>n-o);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}function jr(r,t=.05,e=.5){let n=r.map(i=>({...i,points:i.points.map(s=>[s[0],s[1]])})),o=0;for(let i=0;i<4;i++){let s=(l,c)=>n.reduce((d,p)=>d+p.points.filter(u=>Math.abs(u[l]-c)<1e-6).length,0),a=!1;for(let l of n)for(let c=0;c<l.points.length;c++){let d=l.points[c],p=l.points[(c+1)%l.points.length],u=Math.abs(p[0]-d[0]),h=Math.abs(p[1]-d[1]),f=h>1e-6&&h<=t&&u>=e?1:u>1e-6&&u<=t&&h>=e?0:null;if(f===null)continue;let[m,_]=s(f,d[f])>=s(f,p[f])?[d[f],p[f]]:[p[f],d[f]];for(let g of n)for(let b of g.points)Math.abs(b[f]-_)<1e-6&&(b[f]=m);o++,a=!0}if(!a)break}return{rooms:n,fixed:o}}var Yl=.25,to=r=>Math.round(r*1e3)/1e3;function ui(r,t,e,n,o){let i=r.rooms.find(s=>s.points.length>=3&&N([t,e],s.points));return!i||N([n,o],i.points)?[n,o]:N([n,e],i.points)?[n,e]:N([t,o],i.points)?[t,o]:[t,e]}function We(r,t,e,n){let o=Math.hypot(n[0]-e[0],n[1]-e[1]);if(o<.01)return!1;let i=[(n[0]-e[0])/o,(n[1]-e[1])/o],s=l=>Math.abs(-(l[0]-e[0])*i[1]+(l[1]-e[1])*i[0]),a=l=>(l[0]-e[0])*i[0]+(l[1]-e[1])*i[1];return r.rooms.some(l=>l.id!==t&&l.points.some((c,d)=>{let p=l.points[(d+1)%l.points.length];return s(c)>.02||s(p)>.02?!1:Math.min(o,Math.max(a(c),a(p)))-Math.max(0,Math.min(a(c),a(p)))>.05}))}function hi(r,t,e,n,o,i=.05){let s=r.rooms.find(u=>u.points.length>=3&&N([t.x,t.z],u.points));if(!s)return[e,n];let a=s.points,l=at(a)>=0?1:-1,c=Wt({...t}),d=e,p=n;for(let u=0;u<2;u++){let h=Wt({...t,x:d,z:p});for(let f=0;f<a.length;f++){let m=a[f],_=a[(f+1)%a.length],g=Math.hypot(_[0]-m[0],_[1]-m[1]);if(g<.05)continue;let b=[(_[0]-m[0])/g,(_[1]-m[1])/g],y=[-b[1]*l,b[0]*l],M=We(r,s.id,m,_)?o/2:0,P=0;h.forEach((I,F)=>{let S=(I[0]-m[0])*b[0]+(I[1]-m[1])*b[1];if(S<-.01||S>g+.01)return;let x=(I[0]-m[0])*y[0]+(I[1]-m[1])*y[1]-M,w=c[F];(w[0]-m[0])*y[0]+(w[1]-m[1])*y[1]-M<-i||x<P&&(P=x)}),P<-1e-4&&(d-=y[0]*P,p-=y[1]*P)}}return[to(d),to(p)]}function _n(r,t,e,n=Yl){let o=r.rooms.find(c=>c.points.length>=3&&N([t.x,t.z],c.points));if(!o)return null;let i=o.points,s=at(i)>=0?1:-1,a=e/2,l=null;for(let c=0;c<i.length;c++){let d=i[c],p=i[(c+1)%i.length],u=Math.hypot(p[0]-d[0],p[1]-d[1]);if(u<.3)continue;let h=[(p[0]-d[0])/u,(p[1]-d[1])/u],f=[-h[1]*s,h[0]*s],m=(t.x-d[0])*h[0]+(t.z-d[1])*h[1];if(m<0||m>u)continue;let g=r.rooms.some(S=>S.id!==o.id&&S.points.some((x,w)=>{let k=S.points[(w+1)%S.points.length],A=Math.abs((x[0]-d[0])*f[0]+(x[1]-d[1])*f[1]),E=Math.abs((k[0]-d[0])*f[0]+(k[1]-d[1])*f[1]);return A<.02&&E<.02}))?a:0,b=(t.x-d[0])*f[0]+(t.z-d[1])*f[1]-g,y=Math.atan2(-f[0],f[1])*180/Math.PI,M=S=>Math.abs((t.rotation-S+540)%360-180),I=[{rotation:y,extent:t.d/2},{rotation:y+90,extent:t.w/2},{rotation:y-90,extent:t.w/2}].reduce((S,x)=>M(x.rotation)<M(S.rotation)?x:S);if(M(I.rotation)>50)continue;let F=b-I.extent;Math.abs(F)>n||l&&Math.abs(F)>=Math.abs(l.gap)||(l={x:to(t.x-f[0]*F),z:to(t.z-f[1]*F),rotation:(Math.round(I.rotation)%360+360)%360,gap:F})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Ne(r,t){let e=r.points,n=e[t],o=e[(t+1)%e.length],i=Math.hypot(o[0]-n[0],o[1]-n[1])||1,s=[(o[0]-n[0])/i,(o[1]-n[1])/i],a=[-s[1],s[0]],l=[(n[0]+o[0])/2,(n[1]+o[1])/2];N([l[0]+a[0]*.02,l[1]+a[1]*.02],e)||(a=[-a[0],-a[1]]);let c=[a[1],-a[0]];return{a:n,b:o,u:s,n:a,length:i,rightward:s[0]*c[0]+s[1]*c[1]>0}}function pt(r,t){let e=t[0]-r.a[0],n=t[1]-r.a[1];return{s:e*r.u[0]+n*r.u[1],d:e*r.n[0]+n*r.n[1]}}function ce(r,t,e){return[r.a[0]+r.u[0]*t+r.n[0]*e,r.a[1]+r.u[1]*t+r.n[1]*e]}var Ql=.45;function fi(r,t){let e=[];for(let n of t.openings){if(n.wall)continue;let o=t.rooms.find(a=>a.id===n.room_id);if(!o||n.edge>=o.points.length)continue;let{s:i,d:s}=pt(r,le(o,n.edge,n.offset));Math.abs(s)>.4||i<-.05||i>r.length+.05||e.push(Zl(n,i))}return e}function Zl(r,t){return{kind:"opening",id:r.id,s0:t-r.width/2,s1:t+r.width/2,y0:r.sill,y1:r.sill+r.height,d:0}}function eo(r,t,e){let n=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let i=N([o.x,o.z],e.points),s=Wt(o).map(u=>pt(r,u)),a=Math.min(...s.map(u=>u.d)),l=Math.min(...s.map(u=>u.s)),c=Math.max(...s.map(u=>u.s)),d=pt(r,[o.x,o.z]);if(!i&&d.d<=0||d.d<=0||a>Ql||a<-.3||c<.02||l>r.length-.02)continue;let p=zt(t,o);n.push({kind:"furniture",id:o.id,s0:l,s1:c,y0:p,y1:p+o.h,d:a})}return n}function Cr(r,t,e){let n=o=>Math.round(o*1e3)/1e3;return{x:n(t.x+r.u[0]*e),z:n(t.z+r.u[1]*e)}}var mi=.3;function Mt(r,t){let e=r.from?t(r.from):null,n=r.to?t(r.to):null,o=r.height??mi,i=[];if(r.heights)e&&i.push([e.x,e.y,e.z]),r.points.forEach(([s,a],l)=>{var c;return i.push([s,((c=r.heights)==null?void 0:c[l])??o,a])}),n&&i.push([n.x,n.y,n.z]);else{if(!e||!n)return[];i.push([e.x,e.y,e.z],[e.x,o,e.z]);for(let[s,a]of r.points)i.push([s,o,a]);i.push([n.x,o,n.z],[n.x,n.y,n.z])}return i.filter((s,a)=>a===0||no(s,i[a-1])>.001)}function no(r,t){return Math.hypot(t[0]-r[0],t[1]-r[1],t[2]-r[2])}function gi(r){let t=0;for(let e=1;e<r.length;e++)t+=no(r[e-1],r[e]);return t}function Dr(r,t){if(r.length<2)return null;let e=Math.max(0,t);for(let n=1;n<r.length;n++){let[o,i]=[r[n-1],r[n]],s=no(o,i);if(!(s<1e-6)){if(e<=s||n===r.length-1){let a=Math.min(1,e/s),l=[(i[0]-o[0])/s,(i[1]-o[1])/s,(i[2]-o[2])/s];return{p:[o[0]+(i[0]-o[0])*a,o[1]+(i[1]-o[1])*a,o[2]+(i[2]-o[2])*a],dir:l,seg:n-1}}e-=s}}return null}function Be(r,t){let e=null,n=0;for(let o=1;o<r.length;o++){let[i,s]=[r[o-1],r[o]],a=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],l=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],c=l>0?Math.max(0,Math.min(1,((t[0]-i[0])*a[0]+(t[1]-i[1])*a[1]+(t[2]-i[2])*a[2])/l)):0,d=[i[0]+a[0]*c,i[1]+a[1]*c,i[2]+a[2]*c],p=no(d,t);(!e||p<e.d)&&(e={at:n+Math.sqrt(l)*c,d:p,seg:o-1,p:d}),n+=Math.sqrt(l)}return e}function de(r,t,e,n){let[o,i]=ce(r,t,n);return[o,e,i]}function Hr(r,t,e,n){let o=ce(r,0,t),i=ce(e,0,n),s=r.u[0]*-e.u[1]-r.u[1]*-e.u[0];if(Math.abs(s)<1e-6)return null;let a=i[0]-o[0],l=i[1]-o[1],c=(a*-e.u[1]-l*-e.u[0])/s;return[o[0]+r.u[0]*c,o[1]+r.u[1]*c]}var Wr=["top6","side6","four"];function pe(r){return r==="pool_pump"?["suction","pressure"]:r==="pool_filter"?["pump","return","waste"]:r==="pool_heat_pump"?["in","out"]:[]}function Ue(r){return r==="wall"||r==="floor"?["inside","outside"]:["in","out1","out2"]}function tt(r){let[t="",e="",n]=r.split(":");return{kind:t,id:e,port:n||null}}function Qt(r){let{kind:t,id:e}=tt(r);return t&&e?`${t}:${e}`:r}function tc(r,t){let{w:e,d:n,h:o}=r;if(r.type==="pool_pump")return t==="suction"?[e*.5,o*.55,0]:t==="pressure"?[e*.05,o*.9,0]:null;if(r.type==="pool_filter"){let i=Math.min(e,n)/2;if(r.variant==="side6"){let l=i+.08;return t==="pump"?[l,o*.6,0]:t==="return"?[l+.06,o*.48,0]:t==="waste"?[l,o*.36,0]:null}let s=o*.89,a=i*.45+.04;return t==="pump"?[-a,s,0]:t==="return"?[a,s,0]:t==="waste"?[0,s,-a]:null}return r.type==="pool_heat_pump"?t==="in"?[e/2+.04,o*.25,-n*.2]:t==="out"?[e/2+.04,o*.45,-n*.2]:null:null}function Nr(r,t){let e=tc(r,t);if(!e)return null;let n=r.rotation*Math.PI/180,[o,i]=[Math.cos(n),Math.sin(n)];return{x:r.x+e[0]*o-e[2]*i,y:e[1],z:r.z+e[0]*i+e[2]*o}}function _i(r,t){if(t==="outside"){if(r.kind==="floor")return{x:r.x,y:r.y-.3,z:r.z};if(r.kind==="wall"){let e=(r.depth??.3)+.05;return{x:r.x-(r.nx??0)*e,y:r.y,z:r.z-(r.nz??0)*e}}}return{x:r.x,y:r.y,z:r.z}}function Br(r){return r==="pressure"||r==="return"||r==="waste"||r==="out"?"source":r==="suction"||r==="pump"||r==="in"?"sink":null}function Ur(r){return r==="skimmer"||r==="drain"?"source":"sink"}function rt(r,t,e){let n=e.pool??{},o=Ks(t,e);return i=>{var c,d;let{kind:s,id:a,port:l}=tt(i);if(s==="port"){let p=(c=n.ports)==null?void 0:c.find(h=>h.id===a);if(!p)return null;let u=p.kind==="skimmer"?o:p.kind==="drain"?o-1.2:p.kind==="inlet"?o-.3:.02;return{x:p.x,z:p.z,y:u}}if(s==="joint"){let p=(d=n.joints)==null?void 0:d.find(u=>u.id===a);return p?_i(p,l):null}if(s!=="dev")return null;for(let p of r.floors){let u=p.furniture.find(m=>m.id===a);if(!u||!Ot.includes(u.type))continue;let h=l?Nr(u,l):null;if(h)return{...h,y:h.y+zt(p,u)};let f=u.type==="pool_filter"?u.h*.88:u.type==="pool_dosing"?.95:u.type==="pool_valve"?tr:u.type==="pool_pump"?.2:.3;return{x:u.x,z:u.z,y:f+zt(p,u)}}return null}}function St(r,t){if(r.heights)return r;let e=r.height??mi,n=t(r.from),o=t(r.to),i=[...n?[[n.x,n.z]]:[],...r.points,...o?[[o.x,o.z]]:[]];return{...r,points:i,heights:i.map(()=>e)}}var et=r=>Math.round(r*1e3)/1e3;function bi(r,t,e,n,o){let i=St(r,t),s=Mt(i,t),a=Be(s,e);if(!a)return null;let l={id:n,x:et(a.p[0]),z:et(a.p[2]),y:et(a.p[1])},c=bn(i,t),d=Math.max(0,Math.min(i.points.length,a.seg+1-c)),p=i.heights??[],u=i.fittings??[],h={...i,to:`joint:${n}:in`,points:i.points.slice(0,d),heights:p.slice(0,d),fittings:u.filter(m=>m.at<=a.at)},f={...i,id:o,from:`joint:${n}:out1`,points:i.points.slice(d),heights:p.slice(d),fittings:u.filter(m=>m.at>a.at).map(m=>({...m,at:et(m.at-a.at)}))};return{joint:l,first:h,second:f}}function bn(r,t){return r.from&&t(r.from)?1:0}var ec=1.6;function Kr(r,t,e){var i;let n=[],o=s=>{let a=pt(r,[s[0],s[2]]);return a.d>-.35&&a.d<ec&&a.s>-.3&&a.s<r.length+.3?a:null};for(let s of t){let a=St(s,e),l=Mt(a,e);if(l.length<2)continue;let c={id:s.id,pieces:[],points:[],fittings:[],ends:[]};for(let u=1;u<l.length;u++){let h=o(l[u-1]),f=o(l[u]);h&&f&&c.pieces.push({k:u-1,s0:h.s,y0:l[u-1][1],d0:h.d,s1:f.s,y1:l[u][1],d1:f.d})}if(!c.pieces.length)continue;let d=bn(a,e);a.points.forEach((u,h)=>{let f=l[h+d],m=f&&o(f);m&&c.points.push({i:h,s:m.s,y:f[1]})});let p=gi(l);for(let u of s.fittings??[]){let h=Math.min(p,u.at),f=(i=Dr(l,h))==null?void 0:i.p,m=f&&o(f);f&&m&&c.fittings.push({id:u.id,kind:u.kind,open:u.open!==!1,s:m.s,y:f[1]})}for(let[u,h]of[["from",l[0]],["to",l[l.length-1]]]){let f=(u==="from"?!s.from:!s.to)?o(h):null;f&&c.ends.push({end:u,s:f.s,y:h[1]})}n.push(c)}return n}var Gr=-.3;function vi(r,t,e,n,o){var _;let i=[],s=[],a=g=>t(g),l=[],c=r.from,d=[];for(let g of r.vias){if(g.kind!=="hole"){d.push(g.kind);continue}let b=e.find(F=>F.id===g.joint),y=a(c);if(!b||!y)continue;let M=a(`joint:${b.id}:inside`),P=a(`joint:${b.id}:outside`),I=g.dir?g.dir==="out":Math.hypot(y.x-M.x,y.z-M.z)<=Math.hypot(y.x-P.x,y.z-P.z);l.push({a:c,b:`joint:${b.id}:${I?"inside":"outside"}`,fits:d}),d=[],c=`joint:${b.id}:${I?"outside":"inside"}`}let p=r.to;if(p.length>1){let g=a(c),b=p.map(a).filter(y=>!!y);if(g&&b.length===p.length){let y=b.reduce((x,w)=>x+w.x,0)/b.length,M=b.reduce((x,w)=>x+w.z,0)/b.length,P=Math.hypot(g.x-y,g.z-M)||1,I=Math.min(1,P/2)/P,F=g.y<0||b.some(x=>x.y<0),S={id:o("joint"),kind:"tee",x:et(y+(g.x-y)*I),z:et(M+(g.z-M)*I),y:F?Gr:et(g.y)};s.push(S),l.push({a:c,b:`joint:${S.id}:in`,fits:d}),d=[],p.forEach((x,w)=>l.push({a:`joint:${S.id}:out${w+1}`,b:x,fits:[]})),p=[]}}p.length&&l.push({a:c,b:p[0],fits:d});let u=g=>{let{kind:b,id:y,port:M}=tt(g),P=b==="joint"?s.find(I=>I.id===y):void 0;return P?_i(P,M):a(g)},h=g=>n(g)==="source",f=g=>n(g)==="sink",m=r.to.some(h)&&!h(r.from)||f(r.from)&&!r.to.some(f);for(let g of l){let b=u(g.a),y=u(g.b);if(!b||!y)continue;let M=nc(b,y,qr(g.a,e),qr(g.b,e)),P={id:o("pipe"),from:g.a,to:g.b,floor_id:r.floorId,points:M.map(F=>[F[0],F[2]]),heights:M.map(F=>F[1])},I=gi(Mt(P,u));P.fittings=g.fits.map((F,S)=>({id:o("fit"),kind:F,at:et(Math.min(I/2,.4+S*.25)),...F==="valve"?{open:!0}:{}})),m&&(P={...P,from:P.to,to:P.from,points:[...P.points].reverse(),heights:[...P.heights??[]].reverse(),fittings:(_=P.fittings)==null?void 0:_.map(F=>({...F,at:et(Math.max(0,I-F.at))}))}),i.push(P)}return{pipes:i,joints:s}}function qr(r,t){let{kind:e,id:n,port:o}=tt(r),i=e==="joint"&&o==="outside"?t.find(s=>s.id===n):void 0;return(i==null?void 0:i.kind)==="wall"?[-(i.nx??0),-(i.nz??0)]:null}function nc(r,t,e=null,n=null){let o=r.y<0||t.y<0?Gr:et(Math.max(r.y,t.y)),i=[],[s,a]=[r.x,r.z];e&&([s,a]=[et(s+e[0]*.5),et(a+e[1]*.5)],i.push([s,et(r.y),a]));let[l,c]=[t.x,t.z],d=[];return n&&([l,c]=[et(l+n[0]*.5),et(c+n[1]*.5)],d.push([l,et(t.y),c])),i.push([et(s),o,et(a)]),Math.abs(l-s)>.01&&i.push([et(l),o,et(a)]),Math.abs(c-a)>.01&&i.push([et(l),o,et(c)]),i.push(...d),i.filter((p,u)=>u===0||Math.hypot(p[0]-i[u-1][0],p[1]-i[u-1][1],p[2]-i[u-1][2])>.001)}function Xr(r,t,e){let n=i=>{let{kind:s,id:a,port:l}=tt(i),c=s==="joint"&&(l==="inside"||l==="outside")?t.find(d=>d.id===a):void 0;return c&&(c.kind==="wall"||c.kind==="floor")?{id:a,port:l}:null},o=[];for(let i of r.filter(s=>s.from===e||s.to===e)){let s={start:e,other:"",pipes:[],holes:[],fittings:[]},a=i,l=e,c=new Set;for(;a&&!c.has(a.id);){c.add(a.id),s.pipes.push(a.id),s.fittings.push(...(a.fittings??[]).map(h=>h.kind));let d=a.from===l?a.to:a.from,p=d?n(d):null;if(!p){s.other=d;break}s.holes.push({joint:p.id,dir:p.port==="inside"?"out":"in"}),l=`joint:${p.id}:${p.port==="inside"?"outside":"inside"}`;let u=a;a=r.find(h=>h!==u&&(h.from===l||h.to===l)),a||(s.other=l)}o.push(s)}return o}function oc(r,t,e){let n=e[0]-t[0],o=e[1]-t[1],i=n*n+o*o,s=i?Math.max(0,Math.min(1,((r[0]-t[0])*n+(r[1]-t[1])*o)/i)):0;return Math.hypot(r[0]-t[0]-n*s,r[1]-t[1]-o*s)}function Jr(r,t,e=.03){return r.every(n=>N(n,t)||t.some((o,i)=>oc(n,o,t[(i+1)%t.length])<=e))}function Yr(r,t){return t&&r.states[t]?t:Object.keys(r.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}function Qr(r,t){let e=r.states[t];if(!e)return!1;let n=String(e.attributes.device_class??"");return t.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(t):t.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(e.attributes.unit_of_measurement??"")):!1}var oo=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool"],ic=["pool"];function sc(){try{return localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function Ft(r){return!ic.includes(r)||sc()}var Zr=["fridge_smart"];function ta(r){return oo.includes(r)||Zr.includes(r)}var ea=r=>(r??navigator.language).toLowerCase().startsWith("de");function Zt(r){return ea(r)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var rc={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function Se(r,t){let e=ea(r),n=e?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",o=t?rc[t]:void 0,i=o?e?o.de:o.en:"",[s,a]=i.split("#");return`${n}${s}?lang=${e?"de":"en"}${a?`#${a}`:""}`}function na(){return new Set([...oo,...Zr].filter(Ft))}function ut(r){return Ft(r)}var ac=["time_travel","pool"];function ue(r){return ac.includes(r)}var yi="https://discord.gg/SSdVVFsev7";function io(r){return(r??navigator.language).toLowerCase().startsWith("de")?"https://mastershort.de/neonplan3d/unterstuetzer/?lang=de":"https://mastershort.de/en/neonplan3d/supporters/?lang=en"}var cc=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function oa(r,t){let e=t??{},n=Object.keys(r.states),o=p=>{var u;return`${p} ${((u=r.states[p])==null?void 0:u.attributes.friendly_name)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},i=p=>{var u;return String(((u=r.states[p])==null?void 0:u.attributes.device_class)??"")},s=p=>{var u;return String(((u=r.states[p])==null?void 0:u.attributes.unit_of_measurement)??"")},a=n.filter(p=>cc.test(o(p))),l=(p,u)=>p.find(u)??null,c=(p,u)=>{let h=e[p];return h==="none"?null:h??u()},d=p=>p.split(".")[0];return{temperature:c("temperature",()=>l(a,p=>d(p)==="sensor"&&(i(p)==="temperature"||/°[CF]/.test(s(p)))&&/(wasser|water|eau|agua|acqua)/.test(o(p)))??l(a,p=>d(p)==="sensor"&&(i(p)==="temperature"||/°[CF]/.test(s(p))))),heater:c("heater",()=>l(a,p=>d(p)==="climate"||d(p)==="water_heater")??l(a,p=>/^(switch|input_boolean)$/.test(d(p))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(o(p)))),pump:c("pump",()=>l(a,p=>/^(switch|fan|input_boolean)$/.test(d(p))&&/(pump|pumpe|filter|pompe|bomba)/.test(o(p)))??l(a,p=>d(p)==="binary_sensor"&&/(pump|pumpe|filter)/.test(o(p)))),light:c("light",()=>l(a,p=>d(p)==="light")),ph:c("ph",()=>{let p=u=>d(u)==="sensor"&&(i(u)==="ph"||s(u).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(o(u)));return l(a,p)??l(n,p)}),chlorine:c("chlorine",()=>l(a,u=>d(u)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(o(u))||s(u)==="mV"))??l(n,u=>d(u)==="sensor"&&/(orp|redox|chlor)/.test(o(u)))),cover:c("cover",()=>l(a,p=>d(p)==="cover"))}}function so(r,t){let e=r[0]??t,n=1/0;for(let o=0;o<r.length;o++){let i=r[o],s=r[(o+1)%r.length],a=s[0]-i[0],l=s[1]-i[1],c=a*a+l*l,d=c>0?Math.max(0,Math.min(1,((t[0]-i[0])*a+(t[1]-i[1])*l)/c)):0,p=[i[0]+a*d,i[1]+l*d],u=Math.hypot(p[0]-t[0],p[1]-t[1]);u<n&&([e,n]=[p,u])}return e}var dc={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de NeonPlan 3D ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra NeonPlan 3D {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de NeonPlan 3D instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de NeonPlan 3D ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de NeonPlan 3D.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"NeonPlan 3D",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace.",as_furniture_pick:"Elegir mueble \u2026",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de NeonPlan 3D.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_title:"Conexi\xF3n con la tienda",license_instance:"Id de instalaci\xF3n",license_copy:"Copiar",license_copied:"Id copiado",license_activate:"Activar",license_activated:"Conectado: tus packs aparecen abajo.",license_active:"Conectado como {name} (clave {key})",license_checked:"\xFAltima comprobaci\xF3n {time}",license_refresh:"Comprobar ahora",license_refreshed:"Comprobado.",license_remove:"Desconectar",license_remove_confirm:"\xBFDesconectar de la tienda? Los packs instalados se quedan; solo dejan de llegar las actualizaciones por s\xED solas.",license_installed:"instalado \xB7 v{release}",license_update_available:"actualizaci\xF3n a v{release} disponible",license_not_installed:"a\xFAn no instalado",license_install:"Instalar",license_update:"Actualizar",license_none:"Todav\xEDa no hay packs en la cuenta.",license_hint:"La clave de licencia est\xE1 en tu pedido y en tu cuenta en mastershort.de. Introducida una vez, los packs comprados aparecen aqu\xED, se firman para esta instalaci\xF3n y se actualizan solos (se comprueba una vez al d\xEDa). Todo lo instalado sigue funcionando sin la conexi\xF3n.",license_shop:"M\xE1s packs en la tienda",license_error_invalid_key:"La tienda no conoce esta clave. Tiene la forma NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Esta clave ya est\xE1 vinculada al n\xFAmero permitido de instalaciones.",license_error_shop_unreachable:"La tienda no est\xE1 disponible ahora mismo. Los packs instalados siguen funcionando.",license_error_not_owned:"Este pack no est\xE1 en esta cuenta.",license_error_no_key:"Introduce primero la clave de licencia.",license_error_wrong_instance:"La tienda firm\xF3 el pack para otra instalaci\xF3n.",license_error_rate_limit:"La tienda est\xE1 muy solicitada ahora mismo. Int\xE9ntalo de nuevo en un minuto.",license_error_other:"No ha funcionado: {detail}",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de NeonPlan \u2013 actualiza NeonPlan 3D (HACS) y recarga la p\xE1gina.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",offers_title:"Novedades en la tienda",offers_new:"NUEVO",offers_loyalty:"Tu descuento de fidelidad: {percent} % en cada pack y extensi\xF3n Pro adicional",offers_kind_pack:"Pack de muebles",offers_kind_pro:"Extensi\xF3n Pro",offers_kind_bundle:"Lote",offers_dot:"Novedades en la tienda",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para NeonPlan 3D. Instala aqu\xED lo que has comprado con tu clave de licencia; se actualiza solo y funciona tambi\xE9n sin la conexi\xF3n.",ext_shop:"Abrir la tienda",ext_pro:"Extensiones Pro",ext_active:"activa",ext_get:"Ver en la tienda",supporter_title:"Supporter \xB7 Discord",supporter_intro:"\xA1Gracias por apoyar NeonPlan 3D! Este c\xF3digo desbloquea el rol \u{1F499} Supporter en Discord: ver\xE1s el canal #beta-feedback y probar\xE1s las nuevas extensiones primero.",supporter_open:"Abrir Discord",supporter_how:"C\xF3mo: abre Discord, escribe /supporter {code} en cualquier canal y env\xEDalo. El rol llega al instante.",beta_yours:"Beta \xB7 para ti como supporter",beta_supporters:"Beta \xB7 primero para supporters",beta_yours_hint:"Como eres supporter, puedes probar esta extensi\xF3n antes. Cu\xE9ntanos en Discord (canal #beta-feedback) qu\xE9 funciona y qu\xE9 no.",beta_supporters_hint:"Esta extensi\xF3n a\xFAn est\xE1 en beta y primero solo viene con el Supporter-Pass. Cuando est\xE9 terminada, todos podr\xE1n conseguirla en la tienda.",beta_feedback:"Opini\xF3n en Discord",beta_become:"Hazte supporter",beta_bar:"Beta \u2013 como supporter la pruebas primero. Opiniones en Discord (#beta-feedback).",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles, la conexi\xF3n con la tienda y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: NeonPlan encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro. Tras la compra aparece en Extensiones \u203A Conexi\xF3n con la tienda y se instala desde ah\xED.",pro_shop:"Ir a la tienda",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de NeonPlan 3D. Actualiza primero (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',license_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de NeonPlan 3D. Actualiza primero (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",chk_pro_get:"Desbloquear Energ\xEDa Pro (cables, m\xF3dulos, holograma)",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",pro_unlock:"Desbloquear",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas como issue en GitHub y de los deseos como discusi\xF3n: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",help_discord:"Comunidad en Discord",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en NeonPlan, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de NeonPlan 3D \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant."};function Bt(r,t,e={}){let n=dc[t]??t;for(let[o,i]of Object.entries(e))n=n.replace(`{${o}}`,String(i));return n}function Pt(r,t,e=2){return t.toLocaleString("es",{maximumFractionDigits:e})}var pc={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function vn(r){return pc[r]}function ia(r,t){var n;let e=`${t} ${String(((n=r.states[t])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(e)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(e)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(e)?"pet":"motion"}function sa(r,t){var n,o;let e=(o=(n=r.entities)==null?void 0:n[t])==null?void 0:o.device_id;return e?Object.values(r.entities??{}).filter(i=>i.device_id===e&&i.entity_id.startsWith("binary_sensor.")).map(i=>i.entity_id).filter(i=>{var s;return["motion","occupancy","presence"].includes(String((s=r.states[i])==null?void 0:s.attributes.device_class))}):[]}var te=Math.PI/180;function Tt(r){let t=Math.min(r.x0,r.x1),e=Math.max(r.x0,r.x1),n=Math.min(r.z0,r.z1),o=Math.max(r.z0,r.z1);return r.axis==="x"?{u0:t,u1:e,w:o-n,at:(i,s)=>[i,r.flip?o-s:n+s]}:{u0:n,u1:o,w:e-t,at:(i,s)=>[r.flip?e-s:t+s,i]}}function he(r){let t=Tt(r).w,e=r.eave_a,n=r.eave_b,o=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*te),i=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*te);if(r.shape==="flat"||r.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(r.shape==="pent")return{vr:t,rh:e+t*o,y:l=>e+l*o};if(r.shape==="mansard"){let l=da(t,e,n,o,i);return{vr:l.vr,rh:l.rh,y:l.y}}let s=o+i>1e-6?Math.min(t,Math.max(0,(n-e+t*i)/(o+i))):t/2,a=e+s*o;return{vr:s,rh:a,y:l=>l<=s?e+l*o:n+(t-l)*i}}var uc=.14;function aa(r,t){return!r.open&&Math.min(r.base,r.eave_a,r.eave_b)<t-.05}function la(r,t,e){let n=[];for(let o of r.settings.roof.sections??[]){if(o.open||o.shape==="flat"||o.shape==="parapet"||o.shape==="mansard")continue;let i=Tt(o),s=he(o),a=t+e+uc,l=[],c=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*te),d=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*te);c>1e-6&&l.push((a-o.eave_a)/c),o.shape==="gable"&&d>1e-6&&l.push(i.w-(a-o.eave_b)/d);for(let p of l)p<=.01||p>=i.w-.01||o.shape==="gable"&&Math.abs(s.y(p)-a)>1e-6||n.push([i.at(i.u0,p),i.at(i.u1,p)])}return n}function hc(r,t){let e=r.length;if(e<3||Math.abs(t)<1e-9)return r.map(i=>[i[0],i[1]]);let n=xt(r)>=0?1:-1,o=[];for(let i=0;i<e;i++){let s=r[(i+e-1)%e],a=r[i],l=r[(i+1)%e],c=ra([a[0]-s[0],a[1]-s[1]]),d=ra([l[0]-a[0],l[1]-a[1]]),p=[c[1]*n,-c[0]*n],u=[d[1]*n,-d[0]*n],h=p[0]+u[0],f=p[1]+u[1],m=Math.hypot(h,f);if(m<1e-6){o.push([a[0]+p[0]*t,a[1]+p[1]*t]);continue}let _=(h*p[0]+f*p[1])/m,g=Math.min(4,1/Math.max(.25,_));o.push([a[0]+h/m*t*g,a[1]+f/m*t*g])}return o}function ra(r){let t=Math.hypot(r[0],r[1])||1;return[r[0]/t,r[1]/t]}function $i(r){let t=r.map(n=>n[0]),e=r.map(n=>n[1]);return{x0:Math.min(...t),z0:Math.min(...e),x1:Math.max(...t),z1:Math.max(...e)}}function ca(r,t,e,n){let o=vt(r,{exterior:e,interior:n},t).walls.filter(p=>p.exterior&&!p.free);if(!o.length)return null;let i=p=>`${Math.round(p[0]*1e3)}:${Math.round(p[1]*1e3)}`,s=new Map,a=o.map(p=>({a:p.a,b:p.b}));for(let p of a)for(let u of[p.a,p.b])s.set(i(u),[...s.get(i(u))??[],p]);let l=new Set,c=null;for(let p of a){if(l.has(p))continue;l.add(p);let u=[p.a,p.b],h=p.b;for(;;){let f=(s.get(i(h))??[]).find(m=>!l.has(m));if(!f||(l.add(f),h=i(f.a)===i(h)?f.b:f.a,i(h)===i(u[0])))break;u.push(h)}u.length>=3&&i(h)===i(u[0])&&(!c||Math.abs(xt(u))>Math.abs(xt(c)))&&(c=u)}if(!c)return null;let d=[];for(let p=0;p<c.length;p++){let u=c[(p+c.length-1)%c.length],h=c[p],f=c[(p+1)%c.length],m=(h[0]-u[0])*(f[1]-h[1])-(h[1]-u[1])*(f[0]-h[0]);Math.abs(m)>1e-6&&d.push(h)}return d.length>=3?hc(d,e):null}var yn=Math.tan(30*te);function da(r,t,e,n,o){let i=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,o>1e-6?2.4/o:r*.3),a=t+i*n,l=e+s*o,c=Math.min(r-s,Math.max(i,(l-a+yn*(r-s+i))/(2*yn))),d=a+(c-i)*yn;return{vla:i,vlb:s,yla:a,ylb:l,vr:c,rh:d,y:u=>u<=i?t+u*n:u<=c?a+(u-i)*yn:u<=r-s?l+(r-s-u)*yn:e+(r-u)*o}}function xi(r,t){let e=Tt(r),n=he(r),o=e.w,i=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(b,y)=>[b,y,n.y(y)],d=c(a,-i),p=c(l,-i),u=c(l,o+s),h=c(a,o+s),f=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*te),m=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*te);if(r.shape==="pent"){let b=[d,p,u,h];return{faces:[b],rim:b,ridges:[[u,h]],gable:[[0,n.y(0)],[o,n.y(o)]]}}if(r.shape==="hip"||r.shape==="pyramid"){let b=r.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,o-n.vr)||o/2),y=[e.u0+b,n.vr,n.rh],M=[e.u1-b,n.vr,n.rh],P=r.shape==="pyramid"?[[d,p,y],[p,u,y],[u,h,y],[h,d,y]]:[[d,p,M,y],[y,M,u,h],[h,d,y],[p,u,M]],I=r.shape==="pyramid"?[[d,y],[h,y],[p,y],[u,y]]:[[y,M],[d,y],[h,y],[p,M],[u,M]];return{faces:P,rim:[d,p,u,h],ridges:I,gable:null}}if(r.shape==="halfhip"){let b=Math.min(n.y(0),n.y(o)),y=b+(n.rh-b)*.55,M=f>1e-6?Math.min(n.vr,(y-r.eave_a)/f):n.vr,P=m>1e-6?Math.max(n.vr,o-(y-r.eave_b)/m):n.vr,I=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,f)),F=[e.u0+I,n.vr,n.rh],S=[e.u1-I,n.vr,n.rh],x=[a,M,y],w=[a,P,y],k=[l,M,y],A=[l,P,y];return{faces:[[d,p,k,S,F,x],[F,S,A,u,h,w],[w,x,F],[k,A,S]],rim:[d,p,k,A,u,h,w,x],ridges:[[F,S],[x,F],[w,F],[k,S],[A,S]],gable:[[0,n.y(0)],[M,y],[P,y],[o,n.y(o)]]}}if(r.shape==="mansard"){let b=da(o,r.eave_a,r.eave_b,f,m),y=[a,b.vla,b.yla],M=[l,b.vla,b.yla],P=[a,o-b.vlb,b.ylb],I=[l,o-b.vlb,b.ylb],F=[a,b.vr,b.rh],S=[l,b.vr,b.rh];return{faces:[[d,p,M,y],[y,M,S,F],[F,S,I,P],[P,I,u,h]],rim:[d,p,M,S,I,u,h,P,F,y],ridges:[[F,S],[y,M],[P,I]],gable:[[0,n.y(0)],[b.vla,b.yla],[b.vr,b.rh],[o-b.vlb,b.ylb],[o,n.y(o)]]}}let _=[a,n.vr,n.rh],g=[l,n.vr,n.rh];return{faces:[[d,p,g,_],[_,g,u,h]],rim:[d,p,g,u,h,_],ridges:[[_,g]],gable:[[0,n.y(0)],[n.vr,n.rh],[o,n.y(o)]]}}function fc(r,t,e){let n=null;for(let o of r.faces){if(!N([t,e],o.map(b=>[b[0],b[1]])))continue;let[i,s]=o,a=o.slice(2).find(b=>Math.abs((s[0]-i[0])*(b[1]-i[1])-(s[1]-i[1])*(b[0]-i[0]))>1e-9);if(!a)continue;let l=s[0]-i[0],c=s[2]-i[2],d=s[1]-i[1],p=a[0]-i[0],u=a[2]-i[2],h=a[1]-i[1],f=c*h-d*u,m=d*p-l*h,_=l*u-c*p;if(Math.abs(m)<1e-9)continue;let g=i[2]-(f*(t-i[0])+_*(e-i[1]))/m;n=n===null?g:Math.min(n,g)}return n}function mc(r,t,e){let n=Math.min(r.x0,r.x1),o=Math.max(r.x0,r.x1),i=Math.min(r.z0,r.z1),s=Math.max(r.z0,r.z1);return r.axis==="x"?[t,r.flip?s-e:e-i]:[e,r.flip?o-t:t-n]}function gc(r){return{x0:Math.min(r.x0,r.x1),x1:Math.max(r.x0,r.x1),z0:Math.min(r.z0,r.z1),z1:Math.max(r.z0,r.z1)}}function pa(r,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,o=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),i=null;for(let s of r){if(s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||o(s)<o(t)*1.5)continue;let a=gc(s);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!i||o(s)<o(i))&&(i=s)}return i}function ua(r,t,e,n){let o=Tt(r),i=he(r),s=2,a=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(n??(o.u0+o.u1)/2)-s/2)),l=t==="a"?r.eave_a:r.eave_b,c=t==="a"?r.pitch_a:r.pitch_b,d=l+1.4,p=s/2*Math.tan(35*te),u=d+p,h=Math.max(.8,Math.min(o.w/2-.2,(u-l)/Math.max(.15,Math.tan(Math.min(80,c)*te)))),f=t==="a"?0:o.w-h,m=t==="a"?h:o.w,_=o.at(a,f),g=o.at(a+s,m);return{id:e,x0:Math.round(Math.min(_[0],g[0])*100)/100,z0:Math.round(Math.min(_[1],g[1])*100)/100,x1:Math.round(Math.max(_[0],g[0])*100)/100,z1:Math.round(Math.max(_[1],g[1])*100)/100,shape:"gable",axis:r.axis==="x"?"z":"x",eave_a:Math.round(d*100)/100,eave_b:Math.round(d*100)/100,pitch_a:35,pitch_b:35,base:Math.round(i.y(t==="a"?0:o.w)*100)/100,overhang:.15,dormer:!0}}function ha(r,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Tt(t),n=he(t).rh,o=xi(r,{u0:0,u1:0,a:0,b:0}),i=he(r),s=f=>{let[m,_]=e.at(f,e.w/2),[g,b]=mc(r,m,_);return fc(o,g,b)??i.y(b)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,d=a?1:-1,p=Math.abs(c-l),u=c;for(let f=.5;f<p;f+=.05)if(s(l+d*f)>=n-.02){u=l+d*f;break}if(Math.abs(u-c)<.05)return t;let h={...t};return t.axis==="x"?c===e.u1?h.x1=u:h.x0=u:c===e.u1?h.z1=u:h.z0=u,h}function fa(r,t,e){let n=Tt(t),o=r.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>t.base+.05)),i=c=>c.some(d=>o.some(p=>N(d,p.points))),s=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:i(a.map(c=>n.at(c,-s)))?0:e,b:i(a.map(c=>n.at(c,n.w+s)))?0:e,u0:i(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:i(l.map(c=>n.at(n.u1+s,c)))?0:e}}function ma(r,t,e,n,o){let i=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([t+(n-t)*a,e+(o-e)*l]);let s=r.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&i.some(c=>N(c,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function ga(r,t){let e=r.floors.filter(n=>n.rooms.length>0).sort((n,o)=>n.elevation-o.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function ro(r){return he(r).rh}function _a(r,t=e=>`roof_${e+1}`){var l;let e=((l=r.settings.roof)==null?void 0:l.pitch)??35,n=r.settings.wall_exterior,o=r.floors.filter(c=>c.rooms.some(d=>d.points.length>=3)).sort((c,d)=>d.elevation-c.elevation),i=[],s=[],a=c=>Math.round(c*1e3)/1e3;for(let c of o){let d=c.rooms.filter(M=>M.points.length>=3),p=[...new Set(d.flatMap(M=>M.points.map(P=>a(P[0]))))].sort((M,P)=>M-P),u=[...new Set(d.flatMap(M=>M.points.map(P=>a(P[1]))))].sort((M,P)=>M-P),h=p.length-1,f=u.length-1,m=(M,P)=>M.some(I=>N(P,I.points)),_=[];for(let M=0;M<f;M++){_.push([]);for(let P=0;P<h;P++){let I=[(p[P]+p[P+1])/2,(u[M]+u[M+1])/2];_[M].push(m(d,I)&&!m(s,I))}}let g=_.map(M=>M.map(()=>!1)),b=(M,P)=>_[P][M]&&!g[P][M],y=c.elevation+c.height;for(let M=0;M<f;M++)for(let P=0;P<h;P++){if(!b(P,M))continue;let I=P;for(;I+1<h&&b(I+1,M);)I++;let F=M;for(;F+1<f&&Array.from({length:I-P+1},(A,E)=>b(P+E,F+1)).every(Boolean);)F++;for(let A=M;A<=F;A++)for(let E=P;E<=I;E++)g[A][E]=!0;let S=p[P]-n,x=p[I+1]+n,w=u[M]-n,k=u[F+1]+n;Math.min(x-S,k-w)<.8||i.push({id:t(i.length),x0:a(S),z0:a(w),x1:a(x),z1:a(k),shape:"gable",axis:x-S>=k-w?"x":"z",eave_a:a(y),eave_b:a(y),pitch_a:e,pitch_b:e,base:a(y),overhang:null})}s.push(...d)}return i}var Ae=Math.PI/180,ba=1.13,wi=1.72,Rt=.025,Pe=.07,va=.25;function Ut(r,t){var n;let e=[];for(let o of r.floors){if(t&&o.id!==t)continue;let{walls:i}=vt(o.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},o.walls??[]);for(let s of i){if(!s.exterior&&!s.free)continue;let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(a,l);if(c<.5)continue;let d=l/c,p=-a/c,u=Math.min(o.height,s.height??o.height),h=((n=s.sources.find(_=>_.room_id===s.roomLeft))==null?void 0:n.edge)??null,f={floorId:o.id,room:s.roomLeft,edge:h,free:!!s.free},m=(_,g,b,y)=>e.push({key:_,section:null,side:"top",flat:!1,o:g,eu:b,es:[0,1,0],n:y,lu:c,ls:u,pitch:90,span:()=>[0,c],facing:[y[0],y[2]],wall:f});m(`wall:${o.id}:${s.id}`,[s.a[0]+d*s.right,o.elevation,s.a[1]+p*s.right],[a/c,0,l/c],[d,0,p]),s.free&&m(`wall:${o.id}:${s.id}:back`,[s.b[0]-d*s.left,o.elevation,s.b[1]-p*s.left],[-a/c,0,-l/c],[-d,0,-p])}}return e}var me="ground";function _c(r){let t=[...r.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??r.floors[0]??null}function ya(r,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],o=[-Math.sin(e),0,Math.cos(e)],i=_c(r),s=n[0]*t.u+o[0]*t.v,a=n[2]*t.u+o[2]*t.v,l=i?i.elevation+(t.base!=null?t.base:Us(i,s,a)):t.base??0;return{key:me,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function wt(r,t,e=nt(r)){return t.face===me?ya(r,t):t.face.startsWith("wall:")?Ut(r,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function $a(r,t,e){let n=Ut(r,e),o=r.settings.north??0,i=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-o;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},s=[...n].sort((l,c)=>i(c)-i(l))[0];if(!s)return null;let a={...co(s,t),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((s.lu-.8+Rt)/(wi+Rt))),a.u=Math.round((s.lu-(a.cols*wi+(a.cols-1)*Rt))/2*100)/100,a.v=Math.round(Math.max(0,s.ls-ba-.3)*100)/100,a}function Mi(r,t){let e=r.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),n=e.length?Math.max(...e.map(i=>i[0]))+3:0,o=e.length?Math.min(...e.map(i=>i[1])):0;return{id:t,face:me,u:Math.round(n*100)/100,v:Math.round(o*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(r.settings.north??0)||0,look:"black",entity:null}}function Si(r){return r.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function nt(r){let t=r.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(b=>bc(b,fa(r,b,b.overhang??t.overhang)));let e=Si(r);if(!e)return[];let n=e.rooms.flatMap(b=>b.points.map(y=>y[0])),o=e.rooms.flatMap(b=>b.points.map(y=>y[1])),i=r.settings.wall_exterior+t.overhang,s=Math.min(...n)-i,a=Math.max(...n)+i,l=Math.min(...o)-i,c=Math.max(...o)+i,d=e.elevation+e.height;if(t.type==="flat")return[xa("main",null,s,l,a,c,d+va)];let p=a-s>=c-l,u=t.ridge==="short"?!p:p,h=(u?c-l:a-s)/2,f=h*Math.tan(t.pitch*Ae),m=(b,y,M)=>u?[b,d+M,(l+c)/2+y]:[(s+a)/2+y,d+M,b],[_,g]=u?[s,a]:[l,c];return[-1,1].map(b=>ao(`main:${b<0?"a":"b"}`,null,b<0?"a":"b",m(_,b*h,0),m(g,b*h,0),m(_,0,f),t.pitch,()=>[0,g-_]))}function bc(r,t){let e=Tt(r),n=he(r),o=(m,_,g)=>{let[b,y]=e.at(m,_);return[b,g,y]},i=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(r.shape==="flat"||r.shape==="parapet"){let m=e.at(a,-i),_=e.at(l,e.w+s);return[xa(r.id,r.id,Math.min(m[0],_[0]),Math.min(m[1],_[1]),Math.max(m[0],_[0]),Math.max(m[1],_[1]),r.eave_a+va)]}if(r.shape==="pent")return[ao(`${r.id}:a`,r.id,"a",o(a,-i,n.y(-i)),o(l,-i,n.y(-i)),o(a,e.w+s,n.y(e.w+s)),r.pitch_a,()=>[0,c])];let d=r.shape==="hip"||r.shape==="pyramid",p=r.shape==="pyramid"?(e.u1-e.u0)/2:d?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,u=d?e.u0+p-a:0,h=d?l-(e.u1-p):0,f=[];if(n.vr>.3){let m=Math.hypot(n.vr+i,n.rh-n.y(-i));f.push(ao(`${r.id}:a`,r.id,"a",o(a,-i,n.y(-i)),o(l,-i,n.y(-i)),o(a,n.vr,n.rh),r.pitch_a,_=>[u*(_/m),c-h*(_/m)]))}if(e.w-n.vr>.3){let m=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));f.push(ao(`${r.id}:b`,r.id,"b",o(l,e.w+s,n.y(e.w+s)),o(a,e.w+s,n.y(e.w+s)),o(l,n.vr,n.rh),r.pitch_b,_=>[h*(_/m),c-u*(_/m)]))}if(d){let m=n.y(-i),_=n.y(e.w+s),g=[[`${r.id}:c`,"c",o(a,e.w+s,_),o(a,-i,m),o(e.u0+p,n.vr,n.rh)],[`${r.id}:d`,"d",o(l,-i,m),o(l,e.w+s,_),o(e.u1-p,n.vr,n.rh)]];for(let[b,y,M,P,I]of g){let F=vc(b,r.id,y,M,P,I);F&&f.push(F)}}return f}function vc(r,t,e,n,o,i){let s=$n(Ee(o,n));if(s<.3)return null;let a=fe(Ee(o,n)),l=Ee(i,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],d=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],p=$n(d);if(p<.3)return null;let u=fe(d),h=fe(ka(a,u));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=fe([-u[0],0,-u[2]]),m=Math.atan2(u[1],Math.hypot(u[0],u[2]))/Ae;return{key:r,section:t,side:e,flat:!1,o:n,eu:a,es:u,n:h,lu:s,ls:p,pitch:m,span:g=>{let b=Math.min(1,Math.max(0,g/p));return[c*b,s-(s-c)*b]},facing:[f[0],f[2]]}}function ao(r,t,e,n,o,i,s,a){let l=fe(Ee(o,n)),c=fe(Ee(i,n)),d=fe(ka(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=fe([-c[0],0,-c[2]]);return{key:r,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:d,lu:$n(Ee(o,n)),ls:$n(Ee(i,n)),pitch:s,span:a,facing:[p[0],p[2]]}}function xa(r,t,e,n,o,i,s){let a=o-e>=i-n,l=a?o-e:i-n,c=a?i-n:o-e;return{key:`${r}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function qe(r){let t=r.module_w||ba,e=r.module_h||wi;return r.portrait===!1?[e,t]:[t,e]}function xn(r){var t;return(t=r.layout)!=null&&t.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function Pi(r,t){return r.flat?Math.min(45,Math.max(0,t.tilt??15))*Ae:r.wall?Math.min(90,Math.max(0,t.tilt??0))*Ae:0}function Ke(r,t){let[e,n]=qe(t),o=xn(t),i=Math.max(1,...o),a=(o.length-1)*Ei(r,t)+n*Math.cos(Pi(r,t));return[i*e+(i-1)*Rt,a]}function Ei(r,t){let[,e]=qe(t),n=Pi(r,t);return r.wall?e*Math.cos(n)+Rt:r.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Rt}function ee(r,t,e=!1){let[n,o]=qe(t),i=[],s=Pi(r,t),a=o*Math.cos(s),l=Ei(r,t),c=xn(t),d=Math.max(1,...c),p=new Set(t.skip??[]),u=!!r.wall&&n>r.lu+1e-6,h=(m,_,g)=>[r.o[0]+r.eu[0]*m+r.es[0]*_+r.n[0]*g,r.o[1]+r.eu[1]*m+r.es[1]*_+r.n[1]*g,r.o[2]+r.eu[2]*m+r.es[2]*_+r.n[2]*g],f=(m,_)=>{if(r.unbounded)return!0;if(_<-1e-6||_>r.ls+1e-6)return!1;let[g,b]=r.span(_);return m>=g-1e-6&&m<=b+1e-6};return c.forEach((m,_)=>{let g=t.align==="right"?d-m:t.align==="center"?(d-m)/2:0;for(let b=0;b<m;b++){let y=`${_}:${b}`,M=p.has(y);if(M&&!e)continue;let P=t.u+(b+g)*(n+Rt),I=t.v+_*l,F=P+n,S=I+(r.flat||r.wall?a:o);if(u){if(!(f((P+F)/2,I)&&f((P+F)/2,S)))continue}else if(![[P,I],[F,I],[F,S],[P,S]].every(([L,O])=>f(L,O)))continue;if(r.wall&&s>.001){let L=Pe+o*Math.sin(s),[O,j]=t.flip?[L,Pe]:[Pe,L],R=[h(P,I,O),h(F,I,O),h(F,S,j),h(P,S,j)],V=t.flip?I:S,H=[P+.05,F-.05].map(C=>[h(C,V,0),h(C,V,L)]);i.push({corners:R,posts:H,cell:y,skipped:M});continue}if(!r.flat){i.push({corners:[h(P,I,Pe),h(F,I,Pe),h(F,S,Pe),h(P,S,Pe)],posts:[],cell:y,skipped:M});continue}let x=.15,w=x+o*Math.sin(s),[k,A]=t.flip?[S,I]:[I,S],E=[h(P,k,x),h(F,k,x),h(F,A,w),h(P,A,w)];i.push({corners:E,posts:[P+.05,F-.05].flatMap(L=>[[h(L,k,0),h(L,k,x)],[h(L,A,0),h(L,A,w)]]),cell:y,skipped:M})}}),i}function lo(r,t){let e=[r.eu[0],r.eu[2]],n=[r.es[0],r.es[2]],o=[t[0]-r.o[0],t[1]-r.o[2]],i=e[0]*n[1]-e[1]*n[0];if(Math.abs(i)<1e-9)return null;let s=(o[0]*n[1]-o[1]*n[0])/i,a=(e[0]*o[1]-e[1]*o[0])/i;if(a<0||a>r.ls)return null;let[l,c]=r.span(a);return s>=l&&s<=c?{u:s,s:a}:null}function wa(r,t){let e=null;for(let n of r){if(n.wall){let s=[t[0]-n.o[0],t[1]-n.o[2]],a=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:a,s:Number.NaN,y:-1/0});continue}let o=lo(n,t);if(!o)continue;let i=n.o[1]+n.es[1]*o.s;(!e||i>e.y)&&(e={face:n,...o,y:i})}return e?{face:e.face,u:e.u,s:e.s}:null}function Ge(r,t){if(r.unbounded)return{u:t.u,v:t.v};let[e,n]=Ke(r,t),o=s=>Math.floor(s*100+1e-6)/100;return{u:r.wall&&e>r.lu?Math.round((r.lu-e)/2*100)/100:o(Math.min(Math.max(0,t.u),Math.max(0,r.lu-e))),v:o(Math.min(Math.max(0,t.v),Math.max(0,r.ls-n)))}}function co(r,t){let e={id:t,face:r.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:r.flat?15:null,flip:!1,entity:null,look:"black"},[n]=qe(e),o=.4,i=Ei(r,e),[s,a]=r.span(r.ls/2);for(e.cols=Math.max(1,Math.floor((a-s-2*o+Rt)/(n+Rt))),e.rows=Math.max(1,Math.min(4,Math.floor((r.ls-2*o)/i)));e.cols>1&&ee(r,{...e,u:ki(r,e),v:o}).length<e.rows*e.cols;)e.cols--;return e.u=ki(r,e),e.v=o,e}function Ai(r,t){let e={...t,face:r.key,tilt:r.flat?t.tilt??15:null,rotation:null,flip:!1};return r.wall&&Object.assign(e,yc(r,e)),e.u=ki(r,e),e.v=.4,{...e,...Ge(r,e)}}function yc(r,t){let e=o=>Math.floor((r.lu+Rt+1e-6)/(qe({...t,portrait:o})[0]+Rt)),n=t.portrait===!1&&e(!1)<1?!0:t.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...xn(t)),e(n!==!1))),layout:void 0,skip:void 0}}function ki(r,t){let[e]=qe(t),n=t.cols*e+(t.cols-1)*Rt;return Math.round((r.lu-n)/2*100)/100}function zi(r,t){let e=(Math.atan2(r.facing[0],-r.facing[1])/Ae-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function po(r,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let o=(Math.atan2(n.facing[0],-n.facing[1])/Ae-t+720)%360,i=Math.cos((o-180)*Ae);return n.lu*n.ls*(1.2+i)};return[...r].sort((n,o)=>e(o)-e(n))[0]??null}function Ee(r,t){return[r[0]-t[0],r[1]-t[1],r[2]-t[2]]}function $n(r){return Math.hypot(r[0],r[1],r[2])}function fe(r){let t=$n(r)||1;return[r[0]/t,r[1]/t,r[2]/t]}function ka(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}var Ma=.78,Sa=1.18;function Xe(r){return{id:r.id,face:r.face,u:r.u,v:r.v,rows:1,cols:1,portrait:!0,module_w:r.w||Ma,module_h:r.h||Sa}}function Pa(r,t){let e=ee(r,Xe(t))[0];if(!e)return null;let n=o=>[o[0]-r.n[0]*.05,o[1]-r.n[1]*.05,o[2]-r.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Ii(r,t){let e=Ma,n=Sa,[o,i]=r.span(r.ls/2);return{id:t,face:r.key,u:Math.round((o+i-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(r.ls-n,r.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function wn(r,t,e){let n=ya(r,t),[o,i]=Ke(n,t),s=n.eu[0]*(t.u+o/2)+n.es[0]*(t.v+i/2),a=n.eu[2]*(t.u+o/2)+n.es[2]*(t.v+i/2),l=e*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],p=s*c[0]+a*c[1]-o/2,u=s*d[0]+a*d[1]-i/2,h=f=>Math.round(f*100)/100;return{u:h(p),v:h(u),rotation:(Math.round(e)%360+360)%360}}function kn(r,t){let[e,n]=Ke(r,t);return[r.o[0]+r.eu[0]*(t.u+e/2)+r.es[0]*(t.v+n/2),r.o[2]+r.eu[2]*(t.u+e/2)+r.es[2]*(t.v+n/2)]}function Fi(r,t,e){let n=e[0]*r.n[0]+e[1]*r.n[1]+e[2]*r.n[2];if(Math.abs(n)<1e-6)return null;let o=((r.o[0]-t[0])*r.n[0]+(r.o[1]-t[1])*r.n[1]+(r.o[2]-t[2])*r.n[2])/n;if(o<=0)return null;let i=[t[0]+e[0]*o-r.o[0],t[1]+e[1]*o-r.o[1],t[2]+e[2]*o-r.o[2]],s=i[0]*r.eu[0]+i[1]*r.eu[1]+i[2]*r.eu[2],a=i[0]*r.es[0]+i[1]*r.es[1]+i[2]*r.es[2];return{t:o,u:s,s:a}}function Ea(r,t,e){if(r.unbounded)return!0;if(e<0||e>r.ls)return!1;let[n,o]=r.span(e);return t>=n&&t<=o}function Aa(r,t,e,n){for(let o of ee(r,t)){let i=o.corners.map(d=>{let p=[d[0]-r.o[0],d[1]-r.o[1],d[2]-r.o[2]];return[p[0]*r.eu[0]+p[1]*r.eu[1]+p[2]*r.eu[2],p[0]*r.es[0]+p[1]*r.es[1]+p[2]*r.es[2]]}),[s,a]=[Math.min(...i.map(d=>d[0])),Math.max(...i.map(d=>d[0]))],[l,c]=[Math.min(...i.map(d=>d[1])),Math.max(...i.map(d=>d[1]))];if(e>=s-.05&&e<=a+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}var Lt=.03,uo=r=>r&&r!=="none"?r:null;function Li(r,t=e=>uo(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let o of n.furniture){let i=t(o);if(o.type==="meter")e.grid??=i,e.gridExport??=uo(o.export);else if(o.type==="inverter"&&i&&!e.solar.includes(i))e.solar.push(i);else if(o.type==="home_battery"){i&&!e.battery.includes(i)&&e.battery.push(i);let s=uo(o.charge);s&&!e.charge.includes(s)&&e.charge.push(s),(i||s)&&e.batteries.push({power:i,charge:s});let a=uo(o.soc);a&&!e.soc.includes(a)&&e.soc.push(a)}}return e}function Oi(r){for(let t of r.floors){let e=t.furniture.find(n=>n.type==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return r.energy.meter}function La(r){let t=n=>{var o,i;return((i=(o=r.energy_sources)==null?void 0:o.find(s=>s.type===n))==null?void 0:i.stat_energy_from)??null},e=n=>n&&n.startsWith("sensor.")?n:null;return{gas:e(t("gas")),water:e(t("water"))}}function ho(r,t,e="power"){var a,l;if(!t)return null;let n=(l=(a=r.entities)==null?void 0:a[t])==null?void 0:l.device_id;if(!n)return null;let o=Object.keys(r.states).filter(c=>{var d,p,u;return c.startsWith("sensor.")&&((p=(d=r.entities)==null?void 0:d[c])==null?void 0:p.device_id)===n&&((u=r.states[c])==null?void 0:u.attributes.device_class)===e});if(o.length<=1)return o[0]??null;let i=o.filter(c=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(c)),s=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return i.find(c=>s&&c.includes(s))??i[0]??o[0]}function Oa(r,t){var n,o,i,s;let e={};for(let a of t.energy_sources??[])if(a.type==="grid"){let l=((o=(n=a.flow_from)==null?void 0:n[0])==null?void 0:o.stat_energy_from)??((s=(i=a.flow_to)==null?void 0:i[0])==null?void 0:s.stat_energy_to),c=ho(r,l);c&&!e.grid&&(e.grid=c)}else if(a.type==="solar"){let l=ho(r,a.stat_energy_from);l&&!e.solar&&(e.solar=l)}else if(a.type==="battery"){let l=ho(r,a.stat_energy_from??a.stat_energy_to);l&&!e.battery&&(e.battery=l);let c=ho(r,a.stat_energy_from??a.stat_energy_to,"battery");c&&!e.battery_soc&&(e.battery_soc=c)}return e}var $c=.07;function ne(r,t=!1){if(!r)return null;let e=Number(r.state);if(!Number.isFinite(e))return null;let n=String(r.attributes.unit_of_measurement??"W"),o=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-o:o}function xc(r,t){var e;return t.startsWith("sensor.")&&((e=r.states[t])==null?void 0:e.attributes.device_class)==="power"}function Va(r,t){var i,s;if(xc(r,t))return t;let e=(s=(i=r.entities)==null?void 0:i[t])==null?void 0:s.device_id;if(!e)return null;let n=_r(r,e),o=n?ke(r,t):null;return ni(r,e).find(a=>a!==t&&(!n||o!==null&&ke(r,a)===o))??null}function Ta(r,t,e,n=Li(t)){let o=t.energy,i=o.grid??n.grid,s=i?ne(r.states[i],o.grid_invert):null;if(!o.grid&&n.gridExport){let m=Math.max(0,ne(r.states[n.gridExport])??0);s=Math.max(0,s??0)-m}let a=o.solar?ne(r.states[o.solar]):null;if(!o.solar&&n.solar.length){let m=n.solar.map(_=>ne(r.states[_])).filter(_=>_!==null);a=m.length?m.reduce((_,g)=>_+g,0):null}let l=o.battery?ne(r.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let m=n.batteries.map(_=>{if(_.charge){let g=_.power?Math.max(0,ne(r.states[_.power])??0):0,b=Math.max(0,ne(r.states[_.charge])??0);return g-b}return _.power?ne(r.states[_.power],o.battery_invert):null}).filter(_=>_!==null);l=m.length?m.reduce((_,g)=>_+g,0):null}let d=(o.battery_soc?[o.battery_soc]:n.soc).map(m=>{var _;return Number((_=r.states[m])==null?void 0:_.state)}).filter(m=>Number.isFinite(m)),p=d.length?d.reduce((m,_)=>m+_,0)/d.length:NaN,u=o.tariff?r.states[o.tariff]:void 0,h=Number(u==null?void 0:u.state),f=o.consumption?ne(r.states[o.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||a!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):e.length&&(f=e.reduce((m,_)=>m+_.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(p)?p:null,tariff:u&&Number.isFinite(h)?{value:h,unit:String(u.attributes.unit_of_measurement??"")}:null,consumption:f}}function Ie(r,t){return r.pos.push(t),r.adj.push([]),r.pos.length-1}function ze(r,t,e){let n=Math.hypot(r.pos[t][0]-r.pos[e][0],r.pos[t][1]-r.pos[e][1]);r.adj[t].push({to:e,w:n}),r.adj[e].push({to:t,w:n})}function wc(r,t){let e=r.length,n=r.map((o,i)=>{let s=r[(i+1)%e],a=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(a,l)||1,d=-l/c,p=a/c;return{p:[o[0]+d*t[i],o[1]+p*t[i]],d:[a/c,l/c],n:[d,p]}});return r.map((o,i)=>{let s=n[(i-1+e)%e],a=n[i],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[o[0]+a.n[0]*t[i],o[1]+a.n[1]*t[i]];let c=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function kc(r){return at(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function Vi(r,t,e){let n={pos:[],adj:[],rings:new Map},{walls:o}=vt(r.rooms,{exterior:t,interior:e},r.walls??[]);for(let i of r.rooms){if(i.points.length<3)continue;let{pts:s,flipped:a}=kc(i),l=s.length,c=s.map((u,h)=>{let f=a?(l-2-h+l)%l:h,m=o.some(_=>!_.exterior&&_.sources.some(g=>g.room_id===i.id&&g.edge===f));return $c+(m?e/2:0)}),d=wc(s,c).map(u=>Ie(n,u)),p=d.map((u,h)=>[u,d[(h+1)%l]]);for(let[u,h]of p)ze(n,u,h);n.rings.set(i.id,p)}for(let i of o){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],a=mo(n,i.roomLeft,s),l=mo(n,i.roomRight,s);a!==null&&l!==null&&ze(n,a,l)}return n}function mo(r,t,e){let n=r.rings.get(t);if(!n)return null;let o=null;for(let s of n){let a=r.pos[s[0]],l=r.pos[s[1]],c=l[0]-a[0],d=l[1]-a[1],p=c*c+d*d||1,u=Math.min(1,Math.max(0,((e[0]-a[0])*c+(e[1]-a[1])*d)/p)),h=[a[0]+c*u,a[1]+d*u],f=Math.hypot(e[0]-h[0],e[1]-h[1]);(!o||f<o.d)&&(o={seg:s,q:h,d:f})}if(!o)return null;let i=Ie(r,o.q);return ze(r,i,o.seg[0]),ze(r,i,o.seg[1]),i}function go(r,t,e){let n=r.pos[e],o=mo(r,t.id,n);if(o===null)return!1;let i=r.pos[o],s=r.pos[r.adj[o][0].to],a=r.pos[r.adj[o][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=[(a[0]-s[0])/l,(a[1]-s[1])/l],d=(n[0]-i[0])*c[0]+(n[1]-i[1])*c[1],p=(n[1]-i[1])*c[0]-(n[0]-i[0])*c[1];if(Math.abs(d)<.01||Math.abs(p)<.01)return ze(r,e,o),!0;let u=[i[0]+c[0]*d,i[1]+c[1]*d],h=[i[0]-c[1]*p,i[1]+c[0]*p],f=Ie(r,N(h,t.points)||!N(u,t.points)?h:u);return ze(r,o,f),ze(r,f,e),!0}function Sn(r,t){let e=r.rooms.filter(i=>i.points.length>=3),n=e.find(i=>N(t,i.points));if(n)return n;let o=null;for(let i of e)for(let s of i.points){let a=Math.hypot(t[0]-s[0],t[1]-s[1]);(!o||a<o.d)&&(o={room:i,d:a})}return(o==null?void 0:o.room)??null}function ja(r,t){let e=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),o=r.pos.map(()=>!1);for(e[t]=0;;){let i=-1;for(let s=0;s<e.length;s++)!o[s]&&e[s]<1/0&&(i<0||e[s]<e[i])&&(i=s);if(i<0)break;o[i]=!0;for(let{to:s,w:a}of r.adj[i])e[i]+a<e[s]-1e-9&&(e[s]=e[i]+a,n[s]=i)}return{dist:e,prev:n}}function za(r,t){return r.every(e=>t[e].kind==="battery")?"battery":r.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var Ia=new WeakMap;function Mc(r,t){let e=Oi(r),n=r.floors.find(d=>d.id===e.floor_id),o=[],{wall_exterior:i,wall_interior:s}=r.settings,a=new Map,l=new Map;t.forEach((d,p)=>l.set(d.floorId,[...l.get(d.floorId)??[],p]));let c=r.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let p=d.elevation>n.elevation,u=l.get(d.id),h=za(u,t);o.push({floorId:n.id,a:[e.x,Lt,e.z],b:[e.x,p?n.height:-.2,e.z],dist:0,members:u,kind:h});let f=Math.abs(d.elevation-n.elevation);o.push({floorId:d.id,a:[e.x,p?-.2:d.height,e.z],b:[e.x,Lt,e.z],dist:f,members:u,kind:h}),a.set(d.id,f+.25)}for(let d of c){let p=Vi(d,i,s),u=Sn(d,[e.x,e.z]);if(!u)continue;let h=Ie(p,[e.x,e.z]);if(!go(p,u,h))continue;let f=[];for(let y of l.get(d.id)){let M=t[y],P=Sn(d,[M.x,M.z]);if(!P)continue;let I=Ie(p,[M.x,M.z]);go(p,P,I)&&f.push({node:I,member:y})}let{dist:m,prev:_}=ja(p,h),g=new Map;for(let y of f)if(Number.isFinite(m[y.node]))for(let M=y.node;_[M]>=0;M=_[M]){let P=_[M],I=`${P}>${M}`,F=g.get(I)??{a:P,b:M,members:[]};F.members.push(y.member),g.set(I,F)}let b=a.get(d.id)??0;for(let{a:y,b:M,members:P}of g.values()){let I=p.pos[y],F=p.pos[M],S=za(P,t);o.push({floorId:d.id,a:[I[0],Lt,I[1]],b:[F[0],Lt,F[1]],dist:b+m[y],members:P,kind:S})}}return o}function Ca({building:r,consumers:t,summary:e,battery:n,fieldPower:o,devicePower:i}){var w;let s=Oi(r);if(!s)return[];let a=r.floors.find(k=>k.id===s.floor_id);if(!a)return[];let l=k=>i==null?void 0:i.get(k),c=Ri(r,"inverter"),d=Ri(r,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let p=k=>{let A=null;for(let E of c)E.floorId===k.floorId&&(!A||Math.hypot(E.x-k.x,E.z-k.z)<Math.hypot(A.x-k.x,A.z-k.z))&&(A=E);return A},u=k=>l(k.id)??(d.length===1?e.battery??0:0),h=new Map;for(let k of d){let A=p(k);A&&h.set(k.id,A)}let f=t.map(k=>({floorId:k.floorId,x:k.x,z:k.z,kind:k.wallbox?"wallbox":"consumer",power:k.power}));for(let k of d)!h.has(k.id)&&e.battery!==null&&f.push({floorId:k.floorId,x:k.x,z:k.z,kind:"battery",power:Math.abs(u(k))});let m=`${s.floor_id}:${s.x},${s.z}|${f.map(k=>`${k.floorId}:${k.x},${k.z}:${k.kind}`).join(";")}`,_=Ia.get(r);_||Ia.set(r,_=new Map);let g=_.get(m);g||(g=Mc(r,f),_.clear(),_.set(m,g));let b=g.map(k=>({floorId:k.floorId,a:k.a,b:k.b,dist:k.dist,power:k.members.reduce((A,E)=>A+f[E].power,0),kind:k.kind})),y=e.grid!==null?Ti(r):null,M=r.settings.roof.cables??[],P=k=>M.find(A=>A.id===k),I=(k,A)=>k.map(E=>({...E,key:A}));if(y){let k=e.grid>=0,A=P("grid"),E=A?fo(r,A,[y.end[0],a.elevation+Math.max(Lt,y.height),y.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...y.height>.05?[[y.end[0],y.height,y.end[1]]]:[],[y.end[0],Lt,y.end[1]],[y.wall[0],Lt,y.wall[1]],[s.x,Lt,s.z]],L=A?Mn(r,k?E:[...E].reverse(),Math.abs(e.grid),k?"grid":"export",a):Ha(a.id,k?E:[...E].reverse(),Math.abs(e.grid),k?"grid":"export",0);b.push(...I(L,"grid"))}if(e.battery!==null&&e.battery>0)for(let k of b)k.kind==="battery"&&([k.a,k.b]=[k.b,k.a]);let F=r.settings.roof.solar??[],S=r.settings.roof.strings??[],x=new Map;if(o&&F.length){let k=[...nt(r),...Ut(r)];for(let A of F){let E=o.get(A.id)??0,L=A.string?(w=S.find(W=>W.id===A.string))==null?void 0:w.inverter:null,O=L?c.find(W=>W.id===L)??null:null;if(!O&&c.length){let W=wt(r,A,k),U=W?kn(W,A):[A.u,A.v];O=c.reduce((K,X)=>!K||Math.hypot(X.x-U[0],X.z-U[1])<Math.hypot(K.x-U[0],K.z-U[1])?X:K,null)}O&&x.set(O.id,(x.get(O.id)??0)+E);let j=O??{floorId:s.floor_id,x:s.x,z:s.z},R=O?1.1+O.h:1.5,V=P(`solar:${A.id}`),H=V?Sc(r,A):null,C=r.floors.find(W=>W.id===j.floorId);V&&H&&C?b.push(...I(Mn(r,fo(r,V,H,[j.x,C.elevation+R,j.z]),E,"solar",C),`solar:${A.id}`)):b.push(...I(Ec(r,A,E,j,R),`solar:${A.id}`))}}else e.solar!==null&&!c.length&&b.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Lt,s.z+.08],dist:0,power:e.solar,kind:"solar"});for(let k of c){let A=1.1+k.h,E=d.filter(j=>h.get(j.id)===k),L=l(k.id);if(L===void 0){L=x.get(k.id)??(c.length===1?e.solar??0:0);for(let j of E)L+=u(j)}let O=r.floors.find(j=>j.id===k.floorId);if(e.solar!==null||e.battery!==null){let j=P(`inv:${k.id}`),R=j&&O?Mn(r,fo(r,j,[k.x,O.elevation+A,k.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,L),"inverter",O):Ra(r,k,A,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,L),"inverter",0);b.push(...I(R,`inv:${k.id}`))}for(let j of E){let R=u(j);if(e.battery===null&&l(j.id)===void 0)continue;let V=j.variant==="wall"?.5+j.h:.9,H=P(`bat:${j.id}`),C=H&&O?Mn(r,fo(r,H,[k.x,O.elevation+A-.1,k.z],[j.x,O.elevation+V,j.z]),Math.abs(R),"battery",O):Ra(r,k,A-.1,j,V,Math.abs(R),"battery",0);b.push(...I(R<=0?C:C.map(W=>({...W,a:W.b,b:W.a})).reverse(),`bat:${j.id}`))}}return b}function Ti(r){var h;let t=Oi(r),e=t?r.floors.find(f=>f.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:o}=r.settings,{walls:i}=vt(e.rooms,{exterior:n,interior:o},e.walls??[]),s=Ri(r,"grid_point")[0],a=i.filter(f=>f.exterior);if(s){let f=null;for(let g of a){let b=g.b[0]-g.a[0],y=g.b[1]-g.a[1],M=s.x-t.x,P=s.z-t.z,I=M*y-P*b;if(Math.abs(I)<1e-9)continue;let F=((g.a[0]-t.x)*y-(g.a[1]-t.z)*b)/I,S=((g.a[0]-t.x)*P-(g.a[1]-t.z)*M)/I;if(F<=0||F>1||S<0||S>1||f&&F>=f.t)continue;let x=Math.hypot(b,y)||1;f={q:[t.x+M*F,t.z+P*F],out:[y/x,-b/x],t:F}}let m=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[t.x,t.z],_=((h=r.floors.flatMap(g=>g.furniture).find(g=>g.id===s.id))==null?void 0:h.mount_y)??0;return{floorId:e.id,wall:m,end:[s.x,s.z],height:Math.max(0,_)}}let l=null;for(let f of a){let m=f.b[0]-f.a[0],_=f.b[1]-f.a[1],g=m*m+_*_||1,b=Math.min(1,Math.max(0,((t.x-f.a[0])*m+(t.z-f.a[1])*_)/g)),y=[f.a[0]+m*b,f.a[1]+_*b],M=Math.hypot(t.x-y[0],t.z-y[1]),P=Math.sqrt(g);(!l||M<l.d)&&(l={q:y,out:[_/P,-m/P],d:M})}if(!l)return null;let{q:c,out:d}=l,p=0;for(let f of r.floors)for(let m of f.outdoor??[]){let _=m.points.length;for(let g=0;g<_;g++){let b=m.points[g],y=m.points[(g+1)%_],M=y[0]-b[0],P=y[1]-b[1],I=d[0]*P-d[1]*M;if(Math.abs(I)<1e-9)continue;let F=((b[0]-c[0])*P-(b[1]-c[1])*M)/I,S=((b[0]-c[0])*d[1]-(b[1]-c[1])*d[0])/I;F>0&&S>=0&&S<=1&&(p=Math.max(p,Math.min(15,F)))}}let u=p>n+1?p:n+2.5;return{floorId:e.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*u,c[1]+d[1]*u],height:0}}function Ri(r,t){let e=[];for(let n of r.floors)for(let o of n.furniture)o.type===t&&e.push({id:o.id,type:o.type,floorId:n.id,x:o.x,z:o.z,h:o.h,variant:o.variant??null});return e}var Fa=new WeakMap;function Da(r,t,e,n){let o=`${t.id}:${e.join(",")}>${n.join(",")}`,i=Fa.get(r);i||Fa.set(r,i=new Map);let s=i.get(o);if(s)return s;let{wall_exterior:a,wall_interior:l}=r.settings,c=Vi(t,a,l),d=[e,n],p=Sn(t,e),u=Sn(t,n);if(p&&u){let h=Ie(c,e),f=Ie(c,n);if(go(c,p,h)&&go(c,u,f)){let{dist:m,prev:_}=ja(c,h);if(Number.isFinite(m[f])){d.length=0;for(let g=f;g>=0;g=_[g])d.unshift(c.pos[g])}}}return i.set(o,d),d}function Ra(r,t,e,n,o,i,s,a){let l=r.floors.find(p=>p.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let c=Da(r,l,[t.x,t.z],[n.x,n.z]),d=[[t.x,e,t.z],...c.map(p=>[p[0],Lt,p[1]]),[n.x,o,n.z]];return Ha(l.id,d,i,s,a)}function Ha(r,t,e,n,o){let i=[];for(let s=0;s+1<t.length;s++){let a=t[s],l=t[s+1],c=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);c<1e-4||(i.push({floorId:r,a,b:l,dist:o,power:e,kind:n}),o+=c)}return i}function fo(r,t,e,n){let o=r.floors.find(s=>s.id===t.floor_id),i=((o==null?void 0:o.elevation)??0)+Math.max(Lt,t.height);return[e,...t.points.map(s=>[s[0],i,s[1]]),n]}function Sc(r,t){let e=wt(r,t,[...nt(r),...Ut(r)]);if(!e)return null;let[n,o]=Ke(e,t),i=t.u+n/2,s=e.unbounded?t.v+o/2:t.v;return[e.o[0]+e.eu[0]*i+e.es[0]*s,e.o[1]+e.eu[1]*i+e.es[1]*s,e.o[2]+e.eu[2]*i+e.es[2]*s]}function Pc(r,t,e){let{wall_exterior:n,wall_interior:o}=r.settings,i=Vi(t,n,o),s=Sn(t,e),a=s?mo(i,s.id,e):null;return a===null?e:i.pos[a]}function Mn(r,t,e,n,o){let i=[...r.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=o;for(let p of i)c>=p.elevation-.01&&(d=p);return d},a=[],l=0;for(let c=0;c+1<t.length;c++){let d=t[c],p=t[c+1];if(Math.hypot(p[0]-d[0],p[1]-d[1],p[2]-d[2])<1e-4)continue;let h=[];if(Math.abs(p[1]-d[1])>.01){let f=Math.min(d[1],p[1]),m=Math.max(d[1],p[1]);for(let _ of i)_.elevation>f+.01&&_.elevation<m-.01&&h.push(_.elevation);p[1]<d[1]&&h.reverse()}for(let f of[...h,p[1]]){let m=(f-d[1])/(p[1]-d[1]||1),_=Math.abs(p[1]-d[1])>.01?[d[0]+(p[0]-d[0])*m,f,d[2]+(p[2]-d[2])*m]:p,g=s((d[1]+_[1])/2),b=Math.hypot(_[0]-d[0],_[1]-d[1],_[2]-d[2]);b>1e-4&&a.push({floorId:g.id,a:[d[0],d[1]-g.elevation,d[2]],b:[_[0],_[1]-g.elevation,_[2]],dist:l,power:e,kind:n}),l+=b,d=_}}return a}function Ec(r,t,e,n,o){let i=[...nt(r),...Ut(r)],s=wt(r,t,i),a=r.floors.find(_=>_.id===n.floorId);if(!s||!a)return[];let[l,c]=Ke(s,t),d=(_,g)=>[s.o[0]+s.eu[0]*_+s.es[0]*g,s.o[1]+s.eu[1]*_+s.es[1]*g,s.o[2]+s.eu[2]*_+s.es[2]*g],p=t.u+l/2,u=a.elevation+Lt,h=[],f;if(s.unbounded){let _=d(p,t.v+c/2);f=[_[0],u,_[2]],h.push(f)}else if(s.wall){let _=d(p,t.v);f=[_[0],u,_[2]],h.push(_,f)}else{let _=d(p,t.v),g=Si(r)??a,b=Math.max(a.elevation+.5,Math.min(_[1]-.25,g.elevation+g.height-.12));f=[_[0],b,_[2]],h.push(_)}let m=Pc(r,a,[f[0],f[2]]);h.push([m[0],f[1],m[1]]),Math.abs(f[1]-u)>.05&&h.push([m[0],u,m[1]]);for(let _ of Da(r,a,m,[n.x,n.z]).slice(1))h.push([_[0],u,_[1]]);return h.push([n.x,a.elevation+o,n.z]),Mn(r,h,e,"solar",a)}var Na=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Ac={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},zc={back:0,right:90,front:180,left:270};function Ba(r,t,e){let n=dt(r.points),o=n.x1-n.x0,i=n.z1-n.z0,s=Ac[t],a=[],l=(d,p,u,h,f)=>{let[m,_,g]=f??Ht[d];a.push({id:e(),type:d,x:Wa(p),z:Wa(u),rotation:h,w:m,d:_,h:g,variant:null,entity:null,power:null})},c=.02;for(let d of s.rows){let p=d.items.map(_=>({type:_.type,size:_.size??Ht[_.type]})),u=d.wall==="back"||d.wall==="front"?o:i,h=[],f=0;for(let _ of p){if(f+_.size[0]>u-.1)break;h.push(_),f+=_.size[0]}let m=d.align==="start"?.05:d.align==="end"?u-f-.05:(u-f)/2;for(let _ of h){let[g,b]=_.size,y=m+g/2,M=b/2+c;d.wall==="back"?l(_.type,n.x0+y,n.z0+M,0,_.size):d.wall==="front"?l(_.type,n.x1-y,n.z1-M,180,_.size):d.wall==="right"?l(_.type,n.x1-M,n.z0+y,90,_.size):l(_.type,n.x0+M,n.z1-y,zc.left,_.size),m+=g}}for(let d of s.free){let[p,u]=d.size??Ht[d.type],h=Math.min(n.x1-p/2-.05,Math.max(n.x0+p/2+.05,n.x0+o*d.at[0])),f=Math.min(n.z1-u/2-.05,Math.max(n.z0+u/2+.05,n.z0+i*d.at[1]));l(d.type,h,f,d.rotation,d.size)}return a}var Wa=r=>Math.round(r*1e3)/1e3;var Je=Dt`
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
`,_o=Dt`
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
`;var Ua=40,ji=class extends At{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return e.every(l=>a.includes(l))},o=this.fixed.filter(s=>!t||n(s)),i=t?this.options.filter(n):this.options;return[...o,...i.slice(0,Ua)]}get leftOut(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=t?this.options.filter(o=>e.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,n-Ua)}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[];return v`<div class="wrap">
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
    </div>`}static styles=[Je,Dt`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",ji);var Ic=new URL(import.meta.url),Fc=new URL("./neonplan3d-3d.js?v=389fdacff5e8",Ic).href,qa;function Ci(){return qa??=import(Fc),qa}function Fe(r,t){if(!Ve(t))return Bt(r,`furn_${t}`);let e=gt(t);return e?se(e):Bt(r,"pack_missing_item")}var Di=class extends At{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0},_license:{state:!0},_licenseKey:{state:!0},_licenseBusy:{state:!0},_licenseMsg:{state:!0}};licenseLoading=!1;freshUpdates=null;constructor(){super(),this._packMsg=null,this._license=null,this._licenseKey="",this._licenseBusy=null,this._licenseMsg=null}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!1}t(t,e){return Bt(this.hass,t,e)}render(){var e,n;let t=na();return v`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn fp3d-primary" href=${Zt((e=this.hass)==null?void 0:e.language)} target="_blank" rel="noopener">${this.t("ext_shop")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
          <a class="fp3d-btn" href=${Se((n=this.hass)==null?void 0:n.language,"extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      ${this.renderUpdates()} ${this.renderSupporter()} ${this.renderOffers()} ${this.renderShop()}
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${oo.filter(o=>Ft(o)).map(o=>{var i,s,a;return v`<div class="fp3d-ext-feature ${t.has(o)?"fp3d-ext-on":""} ${ue(o)?"fp3d-ext-beta":""}">
              <b>${t.has(o)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${o}`)}</b>
              ${ue(o)?v`<span class="fp3d-beta-tag">🧪 ${this.t(t.has(o)?"beta_yours":"beta_supporters")}</span>`:$}
              <span class="fp3d-sub">${this.t(`pro_feature_${o}`)}</span>
              ${ue(o)?v`<span class="fp3d-sub">${this.t(t.has(o)?"beta_yours_hint":"beta_supporters_hint")}</span>`:$}
              <span class="fp3d-ext-links">
                ${t.has(o)?v`<span class="fp3d-ext-state">${this.t("ext_active")}</span>
                      ${ue(o)?v`<a class="fp3d-ext-link" href=${yi} target="_blank" rel="noopener">💬 ${this.t("beta_feedback")}</a>`:$}`:ue(o)?v`<a class="fp3d-ext-link" href=${io((i=this.hass)==null?void 0:i.language)} target="_blank" rel="noopener">💙 ${this.t("beta_become")}</a>`:v`<a class="fp3d-ext-link" href=${Zt((s=this.hass)==null?void 0:s.language)} target="_blank" rel="noopener">${this.t("ext_get")}</a>`}
                <a class="fp3d-ext-link" href=${Se((a=this.hass)==null?void 0:a.language,o)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`})}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`}async loadLicense(){if(!(!this.hass||this.licenseLoading)){this.licenseLoading=!0;try{this._license=await Lo(this.hass)}catch{this._license=null}finally{this.licenseLoading=!1}}}async shopCall(t,e,n){this._licenseBusy=t,this._licenseMsg=null;try{this._license=await e(),n&&(this._licenseMsg={ok:!0,text:n})}catch(o){let{code:i,message:s}=o??{},a=`license_error_${i}`,l=this.t(a);this._licenseMsg={ok:!1,text:l===a?this.t("license_error_other",{detail:s??String(o)}):l}}finally{this._licenseBusy=null}}async installFromShop(t){if(!this.hass)return;let e=this.hass;await this.shopCall(t.id,async()=>{let n=await zs(e,t.id);return this._packMsg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),Lo(e)})}renderUpdates(){let t=this._license;return t!=null&&t.active?(this.freshUpdates||(this.freshUpdates=ws(t.updates??[]),ks(t.updates??[])),this.freshUpdates.length?v`<section class="fp3d-ext-card fp3d-updates">
      ${this.freshUpdates.map(e=>v`<p>✨ ${e.added>0?this.t("pack_updated_added",{name:kt(e),release:e.release,n:e.added}):this.t("pack_updated",{name:kt(e),release:e.release})}</p>`)}
    </section>`:$):$}renderSupporter(){var e;let t=(e=this._license)!=null&&e.active?this._license.supporter:null;return t?v`<section class="fp3d-ext-card fp3d-offers">
      <h3>💙 ${this.t("supporter_title")}</h3>
      <p class="fp3d-sub">${this.t("supporter_intro")}</p>
      <div class="fp3d-loyalty">
        <code>${t.code}</code>
        <button
          class="fp3d-btn"
          @click=${async()=>{try{await navigator.clipboard.writeText(`/supporter ${t.code}`),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
        >
          ${this.t("license_copy")}
        </button>
        <a class="fp3d-btn fp3d-primary" href=${yi} target="_blank" rel="noopener">💬 ${this.t("supporter_open")}</a>
      </div>
      <p class="fp3d-sub">${this.t("supporter_how",{code:t.code})}</p>
    </section>`:$}renderOffers(){let t=this._license;if(!(t!=null&&t.active))return $;let e=[...t.offers??[]].sort((o,i)=>Number(i.new)-Number(o.new)),n=t.loyalty??null;return!e.length&&!n?$:($s(e),this.dispatchEvent(new CustomEvent("offers-seen",{bubbles:!0,composed:!0})),v`<section class="fp3d-ext-card fp3d-offers">
      <h3>${this.t("offers_title")}</h3>
      ${n?v`<div class="fp3d-loyalty">
            <span>🎁 ${this.t("offers_loyalty",{percent:n.percent})}</span>
            <code>${n.code}</code>
            <button
              class="fp3d-btn"
              @click=${async()=>{try{await navigator.clipboard.writeText(n.code),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
            >
              ${this.t("license_copy")}
            </button>
          </div>`:$}
      <div class="fp3d-offer-grid">
        ${e.map(o=>v`<a class="fp3d-offer" href=${Ms(o.url,n)} target="_blank" rel="noopener">
            ${o.image?v`<img src=${o.image} alt="" loading="lazy" />`:v`<div class="fp3d-offer-ph">✦</div>`}
            <div class="fp3d-offer-body">
              <b>${kt(o)}</b>
              ${o.new?v`<span class="fp3d-offer-new">${this.t("offers_new")}</span>`:$}
              <span class="fp3d-offer-kind">${this.t(`offers_kind_${o.kind}`)}${o.price?` \xB7 ${o.price}`:""}</span>
              ${o.teaser?v`<span class="fp3d-sub">${o.teaser}</span>`:$}
            </div>
          </a>`)}
      </div>
    </section>`)}renderShop(){let t=this._license;if(!this.isAdmin||!this.hass)return $;if(!t)return this.loadLicense(),$;let e=this.hass,n=this._licenseBusy,o=t.checked_at?new Date(t.checked_at*1e3).toLocaleString(e.language):null;return v`<div class="fp3d-shop fp3d-ext-card">
      <h3>${this.t("license_title")}</h3>
      <div class="fp3d-shop-row">
        <span>${this.t("license_instance")}</span>
        <code>${t.instance}</code>
        <button
          class="fp3d-btn"
          @click=${async()=>{try{await navigator.clipboard.writeText(t.instance),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
        >
          ${this.t("license_copy")}
        </button>
      </div>
      ${t.active?v`<div class="fp3d-shop-row">
              <span>${this.t("license_active",{name:t.licensee??"",key:t.key_hint??""})}</span>
              ${o?v`<span class="fp3d-sub">${this.t("license_checked",{time:o})}</span>`:$}
              <button class="fp3d-btn" ?disabled=${!!n} @click=${()=>this.shopCall("refresh",()=>Ps(e),this.t("license_refreshed"))}>
                ${n==="refresh"?"\u2026":this.t("license_refresh")}
              </button>
              <button class="fp3d-btn fp3d-danger" ?disabled=${!!n} @click=${()=>confirm(this.t("license_remove_confirm"))&&this.shopCall("remove",()=>Ss(e))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${t.error?v`<p class="fp3d-sub fp3d-pack-error">${this.t(`license_error_${t.error}`)}</p>`:$}
            ${t.packs.length?t.packs.map(i=>{let s=i.installed===null?"install":i.installed<i.release?"update":"installed";return v`<div class="fp3d-pack">
                    <div>
                      <b>${kt(i)}</b>
                      <span class="fp3d-sub">${s==="installed"?this.t("license_installed",{release:i.release}):s==="update"?this.t("license_update_available",{release:i.release}):this.t("license_not_installed")}</span>
                    </div>
                    ${s==="installed"?$:v`<button class="fp3d-btn fp3d-primary" ?disabled=${!!n} @click=${()=>this.installFromShop(i)}>
                          ${n===i.id?"\u2026":this.t(s==="update"?"license_update":"license_install")}
                        </button>`}
                  </div>`}):v`<p class="fp3d-sub">${this.t("license_none")}</p>`}`:v`<div class="fp3d-shop-row">
            <input
              type="text"
              class="fp3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${i=>this._licenseKey=i.target.value}
              @keydown=${i=>{i.key==="Enter"&&this._licenseKey.trim()&&this.shopCall("activate",()=>Oo(e,this._licenseKey),this.t("license_activated"))}}
            />
            <button class="fp3d-btn fp3d-primary" ?disabled=${!!n||!this._licenseKey.trim()} @click=${()=>this.shopCall("activate",()=>Oo(e,this._licenseKey),this.t("license_activated"))}>
              ${n==="activate"?"\u2026":this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg?v`<p class="fp3d-sub ${this._licenseMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._licenseMsg.text}</p>`:$}
      <p class="fp3d-sub">${this.t("license_hint")} <a href=${t.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`}renderPacks(){let t=this.packs??[];return v`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${t.map(e=>{var n;return v`<div class="fp3d-pack">
          <div>
            <b>${kt(e)}</b>
            <span class="fp3d-sub">${(n=e.features)!=null&&n.length?this.t("pack_features",{publisher:e.publisher,n:e.features.length}):this.t("pack_by",{publisher:e.publisher,n:e.items.length})}</span>
            ${e.licensee?v`<span class="fp3d-sub">${this.t("pack_licensed",{name:e.licensee})}${e.release&&e.release>1?` \xB7 v${e.release}`:""}</span>`:$}
            ${(e.features??[]).some(o=>!ta(o))?v`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:$}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(e)}>${this.t("pack_remove")}</button>
        </div>`})}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${e=>this.importPackFile(e)} />
      </label>
      ${this._packMsg?v`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:$}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let o=[],i=[];for(let a of n)try{let l=await vs(this.hass,await a.text());o.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},p=`pack_error_${c}`,u=this.t(p,{detail:d??String(l)});i.push(`${a.name}: ${u===p?this.t("pack_error_other",{detail:d??String(l)}):u}`)}o.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:o.length,total:n.length})]:[];this._packMsg={ok:i.length===0,text:[...s,...o,...i].join(" \xB7 ")}}async deletePack(t){!this.hass||!confirm(this.t("pack_remove_confirm",{name:kt(t)}))||(await ys(this.hass,t.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[Je,_o,Dt`
      .fp3d-updates {
        border-color: color-mix(in srgb, var(--fp3d-accent) 60%, transparent);
        background: color-mix(in srgb, var(--fp3d-accent) 8%, transparent);
      }
      .fp3d-updates p {
        margin: 4px 0;
      }
      .fp3d-loyalty a {
        text-decoration: none;
      }
      .fp3d-loyalty {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0 12px;
        padding: 10px 12px;
        border: 1px solid color-mix(in srgb, #ffb547 55%, transparent);
        border-radius: 12px;
        background: color-mix(in srgb, #ffb547 10%, transparent);
      }
      .fp3d-loyalty code {
        font-size: 1.05em;
        font-weight: 700;
        letter-spacing: 0.04em;
      }
      .fp3d-offer-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 10px;
      }
      .fp3d-offer {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
        color: inherit;
        text-decoration: none;
        background: color-mix(in srgb, var(--fp3d-accent) 4%, transparent);
      }
      .fp3d-offer:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-offer img,
      .fp3d-offer-ph {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: cover;
      }
      .fp3d-offer-ph {
        display: grid;
        place-items: center;
        font-size: 28px;
        color: var(--fp3d-accent);
      }
      .fp3d-offer-body {
        display: flex;
        flex-direction: column;
        gap: 3px;
        padding: 10px 12px;
      }
      .fp3d-offer-new {
        align-self: flex-start;
        padding: 1px 8px;
        border-radius: 999px;
        background: #ffb547;
        color: #1a1200;
        font-size: 11px;
        font-weight: 700;
      }
      .fp3d-offer-kind {
        color: var(--fp3d-accent);
        font-size: 12px;
      }
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
      .fp3d-ext-beta {
        border-style: dashed;
      }
      .fp3d-beta-tag {
        justify-self: start;
        padding: 2px 8px;
        border-radius: 999px;
        background: color-mix(in srgb, var(--fp3d-accent) 18%, transparent);
        color: var(--fp3d-accent);
        font-size: 12px;
        font-weight: 700;
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
      .fp3d-shop {
        margin: 10px 0;
        padding: 10px 12px;
        border: 1px solid var(--fp3d-line);
        border-radius: 12px;
      }
      .fp3d-shop-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin: 6px 0;
      }
      .fp3d-shop code {
        padding: 2px 8px;
        border-radius: 6px;
        background: var(--fp3d-chrome-solid);
        font-size: 13px;
        letter-spacing: 0.08em;
        user-select: all;
      }
      .fp3d-shop-key {
        flex: 1;
        min-width: 180px;
        font-family: ui-monospace, monospace;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .fp3d-shop a {
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
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",Di);var Hi=10,Ka=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),Ga=100,Xa=/^(switch|input_boolean)\./,bo=10,z=r=>Math.round(r*1e3)/1e3,Ja=.06;function Ye(r,t,e){let[n,,o]=de(r,t,0,e);return[z(n),z(o)]}function Wi(r,t){let e=Mt(r,t),n=0;for(let o=1;o<e.length;o++)n+=Math.hypot(e[o][0]-e[o-1][0],e[o][1]-e[o-1][1],e[o][2]-e[o-1][2]);return n}var Ya={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Lc=new Set(["parking","stairwell","rug","grid_point"]),Bi=class extends At{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;cableCache=null;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neonplan3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._wallSel=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("neonplan3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let t=!1;try{t=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neonplan3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=e,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return Bt(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){var t;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),(t=this.resizeObserver)==null||t.disconnect()}willUpdate(t){var e,n;t.has("packs")&&Is(this.packs??[]),t.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(t.has("_split")&&this._split||t.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),t.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(o=>o.id===this._floorId)||(this._floorId=((e=this._doc.floors[0])==null?void 0:e.id)??null),(n=this.floor)!=null&&n.rooms.some(o=>o.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let o=e.getBoundingClientRect(),i=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-o.left)/o.width))},s=()=>{n.removeEventListener("pointermove",i),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",i),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(t){let{id:e,x:n,z:o}=t.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let a of s.floors){let l=a.furniture.find(_=>_.id===e);if(!l)continue;let[c,d]=ui(a,l.x,l.z,n,o),[p,u]=hi(a,l,c,d,i),h=_n(a,l,i),f=h?Math.hypot(h.x-l.x,h.z-l.z):1/0;Object.assign(l,{x:p,z:u});let m=_n(a,l,i);m&&Math.hypot(m.x-p,m.z-u)<=f+.01&&Object.assign(l,m)}})}onDeviceMoved3d(t){let{id:e,x:n,z:o}=t.detail;this.change(i=>{for(let s of i.floors){let a=s.placements.find(d=>d.entity_id===e);if(!a)continue;let[l,c]=ui(s,a.x,a.z,n,o);Object.assign(a,{x:l,z:c})}})}render3dBar(){var n;if(!this.isAdmin)return $;let t=this.furnitureItem,e=this.device;if(t){let o=Te(t),i=(s,a,l=.05)=>v`<label class="fp3d-3d-size" title=${this.t(`size_${s}`)}
        >${a}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${l}
          .value=${this.unit==="imperial"?Me(t[s]):String(Math.round(t[s]*100)/100)}
          @change=${c=>{let d=this.readLen(c.target.value);d!==null&&d>=l&&this.updateFurniture({[s]:Math.round(d*1e3)/1e3})}}
        />
      </label>`;return v`<div class="fp3d-3d-bar">
        <span>${Fe(this.hass,t.type)}</span>
        ${i("w",this.t("size_short_w"))} ${i("d",this.t("size_short_d"))} ${i("h",this.t("size_short_h"))}
        ${o?v`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?Me(t.mount_y??zt(this.floor,t)):String(Math.round((t.mount_y??zt(this.floor,t))*100)/100)}
                @change=${s=>{let a=this.readLen(s.target.value);a!==null&&a>=0&&this.updateFurniture({mount_y:Math.round(Math.min(Hi,a)*1e3)/1e3})}}
              />
            </label>`:$}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let o=J(e.entity_id),i=o==="light",s=o?Yn(o,((n=this.floor)==null?void 0:n.height)??2.5,i?e.mount??"ceiling":null):1;return v`<div class="fp3d-3d-bar">
        <span>${st(this.hass,e.entity_id)}</span>
        ${i?v`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(a=>v`<option value=${a} ?selected=${a===(e.mount??"ceiling")}>${this.t(`lamp_${a}`)}</option>`)}
            </select>`:$}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((e.y??s)*100)/100)}
            @change=${a=>{let l=parseFloat(a.target.value.replace(",","."));Number.isFinite(l)&&l>=0&&this.updateDevice({y:Math.round(l*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((e.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((e.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",e.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",e.entity_id)}>${this.t("delete")}</button>
      </div>`}return $}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t!=null&&t.moved&&this.pushHistory(t.base)}};grab3dStart(t){let e=this._doc,n=nt(e),o=null,i=(a,l,c,d,p=!1)=>{if(!c||p)return;let u=Fi(c,t.o,t.d);!u||!Aa(c,d,u.u,u.s)||o&&o.t<=u.t||(o={id:a,win:l,t:u.t,du:u.u-d.u,ds:u.s-d.v})};if(this._tool==="energy")for(let a of e.settings.roof.solar??[])i(a.id,!1,wt(e,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of e.settings.roof.windows??[])i(a.id,!0,n.find(l=>l.key===a.face)??null,Xe(a),!!a.locked);if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:e,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(t){var h,f;let e=this.grab3d;if(!e)return;let n=e.base,o=e.win?(h=n.settings.roof.windows)==null?void 0:h.find(m=>m.id===e.id):void 0,i=e.win?o?Xe(o):void 0:(f=n.settings.roof.solar)==null?void 0:f.find(m=>m.id===e.id);if(!i)return;let s=wt(n,i),a=s!=null&&s.unbounded?[s]:e.win?nt(n):[...nt(n),...Ut(n)],l=null;for(let m of a){let _=Fi(m,t.o,t.d);_&&Ea(m,_.u,_.s)&&(!l||_.t<l.t)&&(l={face:m,..._})}if(!l)return;let c=l.face,d=.05,p=m=>z(Math.round(m/d)*d),u=Ge(c,{...i,face:c.key,u:p(l.u-e.du),v:p(l.s-e.ds),tilt:c.flat?i.tilt??15:i.tilt});e.moved=!0,this.change(m=>{var g,b;if(e.win){let y=(g=m.settings.roof.windows)==null?void 0:g.find(M=>M.id===e.id);y&&Object.assign(y,{face:c.key,...u});return}let _=(b=m.settings.roof.solar)==null?void 0:b.find(y=>y.id===e.id);_&&Object.assign(_,{face:c.key,...u},c.flat&&_.tilt==null?{tilt:15}:{})},e.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return v`<div class="fp3d-editor-3d">
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
        .furnishTypes=${this._tool==="energy"?re:this._tool==="roof"?[]:null}
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
    </div>`}setWall3d(t){this._wall3d=t;try{localStorage.setItem("neonplan3d.walls3d",t)}catch{}}updated(){var e,n;for(let o of this.renderRoot.querySelectorAll("select option[selected]"))o.selected||(o.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>{var o;return(o=this.renderRoot.querySelector("fp3d-view3d"))==null?void 0:o.resetView()},250));let t=(e=this.floor)==null?void 0:e.background;if(t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id),(n=this.furnitureItem)!=null&&n.pictures)for(let o of this.storedPictures())!this._images[o]&&!this.loadingImages.has(o)&&this.loadImage(o)}get floor(){var t;return(t=this._doc)==null?void 0:t.floors.find(e=>e.id===this._floorId)}get room(){var t;return(t=this.floor)==null?void 0:t.rooms.find(e=>e.id===this._roomId)}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>Ga&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let o=structuredClone(e),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(t(o,i),this.setDoc(o,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){var e,n;this._doc=t,t.floors.some(o=>o.id===this._floorId)||(this._floorId=((e=t.floors[0])==null?void 0:e.id)??null),(n=this.floor)!=null&&n.rooms.some(o=>o.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:o}=this._view;return[t[0]*e+n,t[1]*e+o]}toWorld(t,e){let{scale:n,ox:o,oy:i}=this._view;return[(t-o)/n,(e-i)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){var a;let t=((a=this.floor)==null?void 0:a.rooms.flatMap(l=>l.points))??[];if(this._tool==="roof")for(let l of this._doc.settings.roof.sections??[])t.push([l.x0,l.z0],[l.x1,l.z1]);let e=t.length?dt(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,o=e.x1-e.x0+2*n,i=e.z1-e.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(e.x0+e.x1)/2*s,oy:this._size.h/2-(e.z0+e.z1)/2*s},this.fittedView=this._view}showPoint(t,e){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-t*n,oy:this._size.h/2-e*n}}zoomAt(t,e,n){let{scale:o,ox:i,oy:s}=this._view,a=Math.max(8,Math.min(600,o*t)),l=a/o;this._view={scale:a,ox:e-(e-i)*l,oy:n-(n-s)*l}}snap(t,e,n=!1){var f;if(this._guides={},n)return t;let o=bo/this._view.scale,i=((f=this.floor)==null?void 0:f.rooms)??[],s=[];for(let m of i)m.points.forEach((_,g)=>{e&&m.id===e.roomId&&(e.index===void 0||e.index===g)||s.push(_)});let a=null,l=o;for(let m of s){let _=Math.hypot(m[0]-t[0],m[1]-t[1]);_<l&&(l=_,a=m)}if(a)return this._guides={point:a},[a[0],a[1]];for(let m of i)if(!(e&&m.id===e.roomId))for(let _=0;_<m.points.length;_++){let g=m.points[_],b=m.points[(_+1)%m.points.length],y=b[0]-g[0],M=b[1]-g[1],P=y*y+M*M;if(P<1e-9)continue;let I=((t[0]-g[0])*y+(t[1]-g[1])*M)/P;if(I<=0||I>=1)continue;let F=[g[0]+I*y,g[1]+I*M],S=Math.hypot(F[0]-t[0],F[1]-t[1]),x=this._doc.settings.grid;Math.abs(M)<1e-9&&(F[0]=Math.min(Math.max(Math.round(F[0]/x)*x,Math.min(g[0],b[0])),Math.max(g[0],b[0]))),Math.abs(y)<1e-9&&(F[1]=Math.min(Math.max(Math.round(F[1]/x)*x,Math.min(g[1],b[1])),Math.max(g[1],b[1]))),S<l&&(l=S,a=F)}if(a)return this._guides={point:a},[z(a[0]),z(a[1])];let c=this._doc.settings.grid,d=[z(Math.round(t[0]/c)*c),z(Math.round(t[1]/c)*c)],p=o,u=o,h={};for(let m of s)Math.abs(m[0]-t[0])<p&&(p=Math.abs(m[0]-t[0]),d[0]=m[0],h.x=m[0]),Math.abs(m[1]-t[1])<u&&(u=Math.abs(m[1]-t[1]),d[1]=m[1],h.z=m[1]);return this._guides=h,d}onPointerDown(t){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let e=this.localPoint(t),n=t.target;this.pressStart=e,this.pressTimer=window.setTimeout(()=>{let o=this.drag;o&&"moved"in o&&o.moved||(this.drag=null,this.openContext(n,e))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"||e.kind==="aim"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){var P,I,F,S,x,w,k,A,E,L,O,j,R,V,H,C,W,U,K,X,ht,_t;t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&Ka.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let o=this.toWorld(...n),i=t.target;if(this._wallPick){this.pickWall(o);return}if(this._bgLevel&&this.isAdmin&&((P=this.floor)!=null&&P.background)){let D=[...this._bgLevel,o];D.length<2?this._bgLevel=D:this.applyBgLevel(D[0],D[1]);return}if(this.bgHandles()&&this.floor.background&&i.closest("[data-bg-rotate]")){let D=this.floor.background,ot=this._images[D.image_id],ft=D.width*((ot==null?void 0:ot.aspect)??1),qt=[D.x+D.width/2,D.z+ft/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(o[1]-qt[1],o[0]-qt[0]),rot:D.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&((I=this.floor)!=null&&I.background)){this._bgRuler=[...this._bgRuler,o];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(i.closest("[data-bg-handle]")||i.closest("[data-bg]"))){let D=this.floor.background;this.drag=i.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:o,bx:D.x,bz:D.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&((F=this.floor)!=null&&F.background)){let D=this.floor.background;if(i.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(i.closest("[data-bg]")){this.drag={kind:"bgmove",start:o,bx:D.x,bz:D.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let D=this.snap(o,void 0,t.altKey);this.drag={kind:"freewall",start:D,end:D};return}if(this._tool==="pool"&&this.poolDown(t,i,o,n))return;if(this._tool==="roof"||this._tool==="energy"){let D=(S=i.closest("[data-roof-corner]"))==null?void 0:S.getAttribute("data-roof-corner"),ot=(x=i.closest("[data-roof-vertex]"))==null?void 0:x.getAttribute("data-roof-vertex"),ft=(w=i.closest("[data-roof]"))==null?void 0:w.getAttribute("data-roof"),qt=this._tool==="energy"?(k=i.closest("[data-energy-device]"))==null?void 0:k.getAttribute("data-energy-device"):null;if(qt){this._solarId=null,this.selectItem("furniture",qt),this.drag=this.isAdmin?{kind:"furniture",id:qt,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&i.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let G=(A=i.closest("[data-cable-pt]"))==null?void 0:A.getAttribute("data-cable-pt"),Q=ct=>{var Et,bt;return!!((bt=(Et=this._doc.settings.roof.cables)==null?void 0:Et.find($t=>$t.id===ct))!=null&&bt.locked)};if(G&&this.isAdmin&&!Q(G.slice(0,G.lastIndexOf(":")))){let ct=G.lastIndexOf(":"),Et=G.slice(0,ct),bt=Number(G.slice(ct+1));if(t.detail>=2){this.change($t=>{var ge;let Ct=(ge=$t.settings.roof.cables)==null?void 0:ge.find(Kt=>Kt.id===Et);Ct&&Ct.points.length>1&&Ct.points.splice(bt,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:Et,index:bt,base:this._doc,moved:!1};return}let mt=(E=i.closest("[data-cable-line]"))==null?void 0:E.getAttribute("data-cable-line");if(mt&&this.isAdmin&&!Q(mt)){let ct=Number(((L=i.closest("[data-cable-line]"))==null?void 0:L.getAttribute("data-cable-seg"))??0),Et=this._doc;this.change(bt=>{var Ct;let $t=(Ct=bt.settings.roof.cables)==null?void 0:Ct.find(ge=>ge.id===mt);$t&&$t.points.splice(ct,0,[z(o[0]),z(o[1])])}),this.drag={kind:"cablept",id:mt,index:ct,base:Et,moved:!0};return}let Z=(O=i.closest("[data-cable]"))==null?void 0:O.getAttribute("data-cable");if(Z){if(this._cableId=Z,this.isAdmin&&this._floorId&&!((j=this._doc.settings.roof.cables)!=null&&j.some(ct=>ct.id===Z))){let ct=this._doc;this.layCable(Z);let Et=(R=this._doc.settings.roof.cables)==null?void 0:R.find($t=>$t.id===Z),bt=this.cableSegments().filter($t=>$t.key===Z);if(Et&&bt.length){let $t=[[bt[0].a[0],bt[0].a[2]],...Et.points,[bt[bt.length-1].b[0],bt[bt.length-1].b[2]]],Ct=0,ge=1/0;for(let Kt=0;Kt+1<$t.length;Kt++){let Ze=Oc(o,$t[Kt],$t[Kt+1]);Ze<ge&&(ge=Ze,Ct=Kt)}this.change(Kt=>{var Ui;let Ze=(Ui=Kt.settings.roof.cables)==null?void 0:Ui.find(Za=>Za.id===Z);Ze&&Ze.points.splice(Ct,0,[z(o[0]),z(o[1])])}),this.drag={kind:"cablept",id:Z,index:Ct,base:ct,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let jt=this._tool==="energy"?(V=i.closest("[data-solar]"))==null?void 0:V.getAttribute("data-solar"):null,Qe=this._tool==="energy"?(H=i.closest("[data-solar-turn]"))==null?void 0:H.getAttribute("data-solar-turn"):null;if(Qe&&this.isAdmin){this.drag={kind:"solarturn",id:Qe,base:this._doc,moved:!1};return}if(jt){let G=(C=i.closest("[data-cell]"))==null?void 0:C.getAttribute("data-cell");if(this._solarPick&&jt===this._solarId&&G&&this.isAdmin){this.toggleSolarCell(G),this.drag={kind:"pan",last:n};return}jt!==this._solarId&&(this._solarPick=!1),this._solarId=jt,this._roofId=null;let Q=(W=this._doc.settings.roof.solar)==null?void 0:W.find(Et=>Et.id===jt),mt=Q?wt(this._doc,Q)??void 0:void 0,Z=mt?this.faceHit(mt,o):null,ct=Q&&Z?{du:Z.u-Q.u,ds:Number.isNaN(Z.s)?0:Z.s-Q.v}:null;this.drag=this.isAdmin&&!(Q!=null&&Q.locked)?{kind:"solarmove",id:jt,start:o,startScreen:n,base:this._doc,moved:!1,grab:ct}:{kind:"pan",last:n};return}let oe=this._tool==="roof"?(U=i.closest("[data-roofwin]"))==null?void 0:U.getAttribute("data-roofwin"):null;if(oe){this._roofWinId=oe,this._roofId=null;let G=(K=this._doc.settings.roof.windows)==null?void 0:K.find(ct=>ct.id===oe),Q=G?nt(this._doc).find(ct=>ct.key===G.face):void 0,mt=Q?lo(Q,o):null,Z=G&&mt?{du:mt.u-G.u,ds:mt.s-G.v}:null;this.drag=this.isAdmin&&!(G!=null&&G.locked)?{kind:"solarmove",id:oe,start:o,startScreen:n,base:this._doc,moved:!1,grab:Z,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let Pn=this._tool==="energy"?(X=i.closest(".fp3d-energy-item"))==null?void 0:X.getAttribute("data-furniture"):null;if(Pn){this._solarId=null,this.selectItem("furniture",Pn),this.drag=this.isAdmin?{kind:"furniture",id:Pn,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(ot&&this.isAdmin){let[G,Q]=ot.split(":");this.drag={kind:"roofvertex",id:G,index:Number(Q),base:this._doc,moved:!1}}else if(D&&this.isAdmin){let[G,Q,mt]=D.split(":");this.drag={kind:"roofcorner",id:G,corner:[Q==="1"?1:0,mt==="1"?1:0],base:this._doc,moved:!1}}else if(ft){let G=this.roofFixed((ht=this._doc.settings.roof.sections)==null?void 0:ht.find(Q=>Q.id===ft));G&&this._roofId===ft&&(this._fixedHint=!0),this._roofId=ft,this.drag=this.isAdmin&&!G?{kind:"roofmove",id:ft,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let G=this.snap(o,void 0,t.altKey);this.drag={kind:"rect",start:G,end:G,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this._outdoorFree||this._tool==="hole"){let D=this.snap(o,void 0,t.altKey);this.drag={kind:"rect",start:D,end:D,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}let a=i.closest("[data-device]");if(a&&this.isAdmin){this.drag={kind:"device",entityId:a.getAttribute("data-device"),start:o,startScreen:n,base:this._doc,moved:!1};return}let l=i.closest("[data-opening]");if(l){let D=l.getAttribute("data-opening");this.selectItem("opening",D),this.drag=this.isAdmin?{kind:"opening",id:D,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let c=i.closest("[data-resize]");if(c&&this.isAdmin){let[D,ot,ft]=c.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:D,corner:[ot==="1"?1:-1,ft==="1"?1:-1],base:this._doc,moved:!1};return}let d=i.closest("[data-rotate]");if(d&&this.isAdmin){this.drag={kind:"rotate",id:d.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let p=i.closest("[data-aim]");if(p&&this.isAdmin){this.drag={kind:"aim",entityId:p.getAttribute("data-aim"),base:this._doc,moved:!1};return}let u=i.closest("[data-furniture]");if(u&&!i.closest("[data-vertex], [data-mid]")){let D=u.getAttribute("data-furniture");this.selectItem("furniture",D),this.drag=this.isAdmin?{kind:"furniture",id:D,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=i.closest("[data-vertex]"),f=i.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this._vertex=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let D=Number(f.getAttribute("data-mid")),ot=this.room.points,ft=ot[D],qt=ot[(D+1)%ot.length],jt=[z((ft[0]+qt[0])/2),z((ft[1]+qt[1])/2)],Qe=this._doc,oe=this.room.id;this.change((Pn,G)=>{let Q=G.rooms.find(Z=>Z.id===oe);Q.points.splice(D+1,0,jt),Q.wall_heights&&Q.wall_heights.splice(D+1,0,Q.wall_heights[D]??null),Q.wall_thickness&&Q.wall_thickness.splice(D+1,0,Q.wall_thickness[D]??null);let mt=Math.hypot(jt[0]-ft[0],jt[1]-ft[1]);for(let Z of G.openings)Z.room_id!==oe||Z.wall||(Z.edge>D?Z.edge+=1:Z.edge===D&&Z.offset>mt&&(Z.edge=D+1,Z.offset=z(Z.offset-mt)))},Qe,!1),this._vertex=D+1,this.drag={kind:"vertex",roomId:oe,index:D+1,base:Qe,moved:!0};return}let m=i.closest("[data-wall-end]");if(m&&this.isAdmin){let[D,ot]=m.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:D,end:ot,start:o,startScreen:n,base:this._doc,moved:!1};return}let _=i.closest("[data-free-wall]");if(_){let D=_.getAttribute("data-free-wall");this.selectItem("wall",D),this.drag=this.isAdmin?{kind:"wallmove",id:D,end:null,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let g=i.closest("[data-out-box]");if(g&&this.isAdmin){let[D,ot]=g.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:D,corner:Number(ot),base:this._doc,moved:!1};return}let b=i.closest("[data-out-vertex]");if(b&&this.isAdmin){let[D,ot]=b.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:D,index:Number(ot),base:this._doc,moved:!1};return}let y=i.closest("[data-outdoor]");if(y&&!i.closest("[data-room]")&&!this.roomAt(o)){let D=y.getAttribute("data-outdoor");this.selectItem("outdoor",D),this.drag=this.isAdmin?{kind:"outdoor",id:D,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let M=((_t=i.closest("[data-room]"))==null?void 0:_t.getAttribute("data-room"))??this.roomAt(o);if(M){M!==this._roomId&&(this._vertex=null),this.selectItem("room",M),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:M,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){var i,s,a,l,c,d,p,u,h,f,m,_,g,b,y,M,P,I,F,S;if(this.pressStart){let x=this.localPoint(t);Math.hypot(x[0]-this.pressStart[0],x[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&((i=this.drag)==null?void 0:i.kind)==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let x=this.pinchState();x&&(this.zoomAt(x.dist/Math.max(1,this.pinch.dist),...x.mid),this._view={...this._view,ox:this._view.ox+x.mid[0]-this.pinch.mid[0],oy:this._view.oy+x.mid[1]-this.pinch.mid[1]},this.pinch=x);return}let n=this.toWorld(...e),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(o.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-o.last[0],oy:this._view.oy+e[1]-o.last[1]},o.last=e;break;case"tap":(o.panning||Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])>6)&&(o.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-o.last[0],oy:this._view.oy+e[1]-o.last[1]}),o.last=e;break;case"rect":o.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let x=this.snap(n,void 0,t.altKey);t.shiftKey&&(x=Math.abs(x[0]-o.start[0])>Math.abs(x[1]-o.start[1])?[x[0],o.start[1]]:[o.start[0],x[1]]),o.end=x,this.requestUpdate();break}case"wallmove":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=(((s=o.base.floors.find(k=>k.id===this._floorId))==null?void 0:s.walls)??[]).find(k=>k.id===o.id);if(!x)return;let w;if(o.end){let k=this.snap(n,void 0,t.altKey);w=o.end==="a"?{a:k,b:x.b}:{a:x.a,b:k}}else{let k=t.altKey?.01:this._doc.settings.grid,A=Math.round((n[0]-o.start[0])/k)*k,E=Math.round((n[1]-o.start[1])/k)*k;w={a:[z(x.a[0]+A),z(x.a[1]+E)],b:[z(x.b[0]+A),z(x.b[1]+E)]}}this.change((k,A)=>Object.assign((A.walls??[]).find(E=>E.id===o.id),w),o.base,!1);break}case"vertex":{let x=this.snap(n,{roomId:o.roomId,index:o.index},t.altKey);o.moved=!0,this.change((w,k)=>{k.rooms.find(A=>A.id===o.roomId).points[o.index]=x},o.base,!1);break}case"room":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=(a=o.base.floors.find(E=>E.id===this._floorId))==null?void 0:a.rooms.find(E=>E.id===o.roomId);if(!x)return;let w=this.roomDelta(x,[n[0]-o.start[0],n[1]-o.start[1]],t.altKey),k=o.base.floors.find(E=>E.id===this._floorId),A=new Set(k.placements.filter(E=>N([E.x,E.z],x.points)).map(E=>E.entity_id));this.change((E,L)=>{let O=L.rooms.find(j=>j.id===o.roomId);O.points=x.points.map(([j,R])=>[z(j+w[0]),z(R+w[1])]),L.placements=k.placements.map(j=>A.has(j.entity_id)?{...j,x:z(j.x+w[0]),z:z(j.z+w[1])}:j)},o.base,!1);break}case"roofmove":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=t.altKey?.01:this._doc.settings.grid,w=z(Math.round((n[0]-o.start[0])/x)*x),k=z(Math.round((n[1]-o.start[1])/x)*x),A=(l=o.base.settings.roof.sections)==null?void 0:l.find(E=>E.id===o.id);if(!A)return;this.change(E=>{var O;let L=(O=E.settings.roof.sections)==null?void 0:O.find(j=>j.id===o.id);L&&(Object.assign(L,{x0:z(A.x0+w),x1:z(A.x1+w),z0:z(A.z0+k),z1:z(A.z1+k)}),A.points&&(L.points=A.points.map(([j,R])=>[z(j+w),z(R+k)])))},o.base,!1);break}case"solarturn":{o.moved=!0;let x=(c=o.base.settings.roof.solar)==null?void 0:c.find(j=>j.id===o.id),w=x?wt(o.base,x):null;if(!x||!w)return;let[k,A]=kn(w,x),E=Math.atan2(n[0]-k,-(n[1]-A))*180/Math.PI,L=t.altKey?1:15;E=Math.round(E/L)*L;let O=wn(o.base,x,E);this.change(j=>{var V;let R=(V=j.settings.roof.solar)==null?void 0:V.find(H=>H.id===o.id);R&&Object.assign(R,O)},o.base,!1);break}case"solarmove":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=o.win?(d=o.base.settings.roof.windows)==null?void 0:d.find(C=>C.id===o.id):void 0,w=o.win?x?Xe(x):void 0:(p=o.base.settings.roof.solar)==null?void 0:p.find(C=>C.id===o.id),k=o.win?nt(o.base):[...nt(o.base),...this._floorId?Ut(o.base,this._floorId):[]],A=w?wt(o.base,w,k):null;if(!w||!A)return;let E=t.altKey?.01:.05,L=C=>z(Math.round(C/E)*E),O=A.unbounded?null:wa(k,n),j=A,R,V;if(O&&o.grab)j=O.face,R=L(O.u-o.grab.du),V=Number.isNaN(O.s)?O.face.key===w.face?w.v:Math.max(0,O.face.ls-1.5):L(O.s-o.grab.ds);else{let C=n[0]-o.start[0],W=n[1]-o.start[1],U=[A.es[0],A.es[2]],K=U[0]*U[0]+U[1]*U[1]||1;R=L(w.u+C*A.eu[0]+W*A.eu[2]),V=L(w.v+(C*U[0]+W*U[1])/K)}let H=Ge(j,{...w,face:j.key,u:R,v:V,tilt:j.flat?w.tilt??15:w.tilt});this.change(C=>{var U,K;if(o.win){let X=(U=C.settings.roof.windows)==null?void 0:U.find(ht=>ht.id===o.id);X&&Object.assign(X,{face:j.key,...H});return}let W=(K=C.settings.roof.solar)==null?void 0:K.find(X=>X.id===o.id);W&&Object.assign(W,{face:j.key,...H},j.flat&&W.tilt==null?{tilt:15}:{})},o.base,!1);break}case"outbox":{o.moved=!0;let x=this.snap(n,void 0,t.altKey),w=(u=o.base.floors.find(W=>W.id===this._floorId))==null?void 0:u.outdoor.find(W=>W.id===o.id);if(!(w!=null&&w.pool_shape))return;let k=dt(w.points),E=[[k.x0,k.z0],[k.x1,k.z0],[k.x1,k.z1],[k.x0,k.z1]][(o.corner+2)%4],L=x[0]-E[0],O=x[1]-E[1];if(w.pool_shape==="round"){let W=Math.max(Math.abs(L),Math.abs(O),.5);L=Math.sign(L||1)*W,O=Math.sign(O||1)*W}else L=Math.sign(L||1)*Math.max(Math.abs(L),.5),O=Math.sign(O||1)*Math.max(Math.abs(O),.5);let j=Math.min(E[0],E[0]+L),R=Math.max(E[0],E[0]+L),V=Math.min(E[1],E[1]+O),H=Math.max(E[1],E[1]+O),C=w.pool_shape;this.change((W,U)=>{let K=U.outdoor.find(X=>X.id===o.id);K&&(K.points=Nn(C,z(j),z(V),z(R),z(H)))},o.base,!1);break}case"pipept":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change((w,k)=>{var E,L,O;let A=(O=(L=(E=k.outdoor.find(j=>j.id===o.pool))==null?void 0:E.pool)==null?void 0:L.pipes)==null?void 0:O.find(j=>j.id===o.pipe);A&&(A.points[o.index]=[z(x[0]),z(x[1])])},o.base,!1);break}case"poolport":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change((w,k)=>{var j,R;let A=k.outdoor.find(V=>V.id===o.pool),E=(R=(j=A==null?void 0:A.pool)==null?void 0:j.ports)==null?void 0:R.find(V=>V.id===o.id);if(!A||!E)return;let[L,O]=E.kind==="skimmer"||E.kind==="inlet"?so(A.points,x):x;E.x=z(L),E.z=z(O)},o.base,!1);break}case"pooljoint":{if(!o.moved&&Math.hypot(n[0]-o.start[0],n[1]-o.start[1])<.05)break;o.moved=!0;let x=(m=(f=(h=o.base.floors.flatMap(k=>k.outdoor).find(k=>k.id===o.pool))==null?void 0:h.pool)==null?void 0:f.joints)==null?void 0:m.find(k=>k.id===o.id);if(!x)break;let w=this.snap([x.x+n[0]-o.start[0],x.z+n[1]-o.start[1]],void 0,t.altKey);if(x.kind==="wall"){let k=[-(x.nz??0),x.nx??0],A=(w[0]-x.x)*k[0]+(w[1]-x.z)*k[1];w=[x.x+k[0]*A,x.z+k[1]*A]}this.change(k=>{var E,L,O;let A=(O=(L=(E=k.floors.flatMap(j=>j.outdoor).find(j=>j.id===o.pool))==null?void 0:E.pool)==null?void 0:L.joints)==null?void 0:O.find(j=>j.id===o.id);A&&([A.x,A.z]=[z(w[0]),z(w[1])])},o.base,!1);break}case"pooldev":{if(!o.moved&&Math.hypot(n[0]-o.start[0],n[1]-o.start[1])<.05)break;o.moved=!0;let x=o.base.floors.flatMap(k=>k.furniture).find(k=>k.id===o.id);if(!x)break;let w=this.snap([x.x+n[0]-o.start[0],x.z+n[1]-o.start[1]],void 0,t.altKey);this.change(k=>{let A=k.floors.flatMap(E=>E.furniture).find(E=>E.id===o.id);A&&([A.x,A.z]=[z(w[0]),z(w[1])])},o.base,!1);break}case"outvertex":{o.moved=!0;let x=this.snap(n,void 0,t.altKey),w=(_=o.base.floors.find(A=>A.id===this._floorId))==null?void 0:_.outdoor.find(A=>A.id===o.id);if(!w)return;let k=Gn(w.points);this.change((A,E)=>{let L=E.outdoor.find(V=>V.id===o.id);if(!L)return;let O=w.points.map(V=>[...V]),j=o.index,R=w.points[j];O[j]=[z(x[0]),z(x[1])],k&&w.points.forEach((V,H)=>{H!==j&&(Math.abs(V[0]-R[0])<1e-6&&(O[H][0]=z(x[0])),Math.abs(V[1]-R[1])<1e-6&&(O[H][1]=z(x[1])))}),L.points=O},o.base,!1);break}case"cablept":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(w=>{var A;let k=(A=w.settings.roof.cables)==null?void 0:A.find(E=>E.id===o.id);k&&k.points[o.index]&&(k.points[o.index]=[z(x[0]),z(x[1])])},o.base,!1);break}case"holopt":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(w=>w.settings.roof.hologram={...w.settings.roof.hologram??Hn,place:"free",x:z(x[0]),z:z(x[1])},o.base,!1);break}case"bgmove":{o.moved=!0;let x=n[0]-o.start[0],w=n[1]-o.start[1];this.change((k,A)=>{A.background&&(A.background.x=z(o.bx+x),A.background.z=z(o.bz+w))},o.base,!1);break}case"bgrotate":{o.moved=!0;let x=(g=this.floor)==null?void 0:g.background,w=x?this._images[x.image_id]:void 0;if(!x||!w)break;let k=x.width*w.aspect,A=[x.x+x.width/2,x.z+k/2],E=Math.atan2(n[1]-A[1],n[0]-A[0]),L=o.rot+(E-o.start)*180/Math.PI;L=t.shiftKey?Math.round(L/15)*15:Math.round(L*10)/10,L=((L+180)%360+360)%360-180,this.change((O,j)=>{j.background&&(j.background.rotation=L)},o.base,!1);break}case"bgscale":{o.moved=!0;let x=(b=this.floor)==null?void 0:b.background,w=x?this._images[x.image_id]:void 0;if(!x||!w)break;let[k]=this.bgLocal(x,n,w.aspect),A=Math.max(.5,z(k));this.change((E,L)=>{L.background&&(L.background.width=A)},o.base,!1);break}case"roofvertex":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(w=>{var A;let k=(A=w.settings.roof.sections)==null?void 0:A.find(E=>E.id===o.id);!(k!=null&&k.points)||o.index>=k.points.length||(k.points[o.index]=[z(x[0]),z(x[1])],Object.assign(k,$i(k.points)))},o.base,!1);break}case"roofcorner":{o.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(w=>{var A;let k=(A=w.settings.roof.sections)==null?void 0:A.find(E=>E.id===o.id);k&&(o.corner[0]?k.x1=z(x[0]):k.x0=z(x[0]),o.corner[1]?k.z1=z(x[1]):k.z0=z(x[1]))},o.base,!1);break}case"opening":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=o.base.floors.find(E=>E.id===this._floorId),w=x==null?void 0:x.openings.find(E=>E.id===o.id),k=w&&x?He(w,x.rooms,x.walls??[]):null;if(!w||!k)return;let A=this.offsetOnEdge(k.room,k.edge,n,w.width,t.altKey);this.change((E,L)=>Object.assign(L.openings.find(O=>O.id===o.id),{offset:A}),o.base,!1);break}case"furniture":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=(y=o.base.floors.find(O=>O.id===this._floorId))==null?void 0:y.furniture.find(O=>O.id===o.id);if(!x)return;let w=t.altKey?.01:this._doc.settings.grid,k=z(Math.round((x.x+n[0]-o.start[0])/w)*w),A=z(Math.round((x.z+n[1]-o.start[1])/w)*w),E=x.rotation,L=t.altKey?null:this.snapToWall({...x,x:k,z:A});L&&({x:k,z:A,rotation:E}=L),this.change((O,j)=>Object.assign(j.furniture.find(R=>R.id===o.id),{x:k,z:A,rotation:E}),o.base,!1);break}case"outdoor":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=(M=o.base.floors.find(E=>E.id===this._floorId))==null?void 0:M.outdoor.find(E=>E.id===o.id);if(!x)return;let w=t.altKey?.01:this._doc.settings.grid,k=Math.round((n[0]-o.start[0])/w)*w,A=Math.round((n[1]-o.start[1])/w)*w;this.change((E,L)=>{var j,R;let O=L.outdoor.find(V=>V.id===o.id);O.points=x.points.map(([V,H])=>[z(V+k),z(H+A)]),(j=O.pool)!=null&&j.ports&&((R=x.pool)!=null&&R.ports)&&(O.pool.ports=x.pool.ports.map(V=>({...V,x:z(V.x+k),z:z(V.z+A)})))},o.base,!1);break}case"resize":{o.moved=!0;let x=(P=o.base.floors.find(k=>k.id===this._floorId))==null?void 0:P.furniture.find(k=>k.id===o.id);if(!x)return;let w=Zs(x,o.corner,n,t.altKey?.01:this._doc.settings.grid);this.change((k,A)=>Object.assign(A.furniture.find(E=>E.id===o.id),w),o.base,!1);break}case"rotate":{o.moved=!0;let x=(I=o.base.floors.find(A=>A.id===this._floorId))==null?void 0:I.furniture.find(A=>A.id===o.id);if(!x)return;let w=Math.atan2(-(n[0]-x.x),n[1]-x.z)*180/Math.PI,k=t.altKey?1:15;w=(Math.round(w/k)*k%360+360)%360,this.change((A,E)=>Object.assign(E.furniture.find(L=>L.id===o.id),{rotation:w}),o.base,!1);break}case"aim":{o.moved=!0;let x=(F=o.base.floors.find(E=>E.id===this._floorId))==null?void 0:F.placements.find(E=>E.entity_id===o.entityId);if(!x)return;let w=Math.atan2(-(n[0]-x.x),n[1]-x.z)*180/Math.PI,k=t.altKey?1:5;w=(Math.round(w/k)*k%360+360)%360;let A=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-x.x,n[1]-x.z)*10)/10));this.change((E,L)=>Object.assign(L.placements.find(O=>O.entity_id===o.entityId),{rotation:w,reach:A}),o.base,!1);break}case"device":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let x=(S=o.base.floors.find(E=>E.id===this._floorId))==null?void 0:S.placements.find(E=>E.entity_id===o.entityId);if(!x)return;let w=t.altKey?.01:this._doc.settings.grid,k=z(Math.round((x.x+n[0]-o.start[0])/w)*w),A=z(Math.round((x.z+n[1]-o.start[1])/w)*w);this.change((E,L)=>Object.assign(L.placements.find(O=>O.entity_id===o.entityId),{x:k,z:A}),o.base,!1);break}}}onPointerUp(t){var o;if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&Ka.has(e.kind)&&"moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base);return}let n=this.localPoint(t);switch(e.kind){case"freewall":{Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1])>=.2&&this.addFreeWall(e.start,e.end),this._guides={};break}case"wallmove":e.moved&&this.pushHistory(e.base),this._guides={};break;case"rect":{let[i,s]=e.start,[a,l]=e.end;if(Math.abs(a-i)>=.2&&Math.abs(l-s)>=.2){let c=[Math.min(i,a),Math.min(s,l)],d=[Math.max(i,a),Math.max(s,l)],p=[c,[d[0],c[1]],d,[c[0],d[1]]];e.outdoor?this.addOutdoor(p):e.hole?this.addHole(c,d):e.roof?this.addRoofSection(c,d):this.addRoom(p)}this._guides={};break}case"tap":if(e.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,t.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":e.moved?this.pushHistory(e.base):(e.kind==="poolport"||e.kind==="pooljoint")&&this.openCard(e.pool,`${e.kind==="poolport"?"port":"joint"}:${e.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":e.moved&&this.pushHistory(e.base);break;case"pooldev":{e.moved?this.pushHistory(e.base):((o=this._doc.floors.flatMap(i=>i.furniture).find(i=>i.id===e.id))==null?void 0:o.type)==="pool_valve"?this.togglePoolValve(e.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${e.id}`);break}case"device":e.moved?this.pushHistory(e.base):this.selectItem("device",e.entityId);break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>Ga&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){var l;if(n)return e;let o=this._doc.settings.grid,i=[Math.round(e[0]/o)*o,Math.round(e[1]/o)*o],a=bo/this._view.scale;this._guides={};for(let c of((l=this.floor)==null?void 0:l.rooms)??[])if(c.id!==t.id)for(let d of c.points)for(let p of t.points){let u=Math.hypot(p[0]+e[0]-d[0],p[1]+e[1]-d[1]);u<a&&(a=u,i=[d[0]-p[0],d[1]-p[1]],this._guides={point:d})}return i}roomAt(t){var o,i;return((i=(((o=this.floor)==null?void 0:o.rooms)??[]).filter(s=>N(t,s.points)).sort((s,a)=>xt(s.points)-xt(a.points))[0])==null?void 0:i.id)??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[i,s]=this.toScreen(n[0]);if(Math.hypot(i-e[0],s-e[1])<14){this.closeDraft();return}}let o=n[n.length-1];o&&Math.hypot(o[0]-t[0],o[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Math.abs(xt(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=je(e,this._measureLen,t),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-o[0],n[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;e>.1&&n>.1&&(this.addRoom([t,je(t,e,"right"),je(je(t,e,"right"),n,"down"),je(t,n,"down")]),this._draft=[])}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],o=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,i=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>Pt(this.hass,a,2);return v`<section>
      <h3>${this.t("measure")}</h3>
      ${e?v`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(e[0]),z:this.m(e[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${gn(this.t("measure_length"),this.unit)}
                <input
                  class="fp3d-measure-input"
                  type=${this.unit==="imperial"?"text":"number"}
                  inputmode="decimal"
                  step="0.01"
                  min="0.05"
                  .value=${this.lenValue(this._measureLen)}
                  @change=${a=>this._measureLen=this.readLen(a.target.value)??0}
                  @keydown=${a=>{let l={ArrowRight:"right",ArrowLeft:"left",ArrowUp:"up",ArrowDown:"down"}[a.key];l?(a.preventDefault(),this.measureStep(l)):a.key==="Enter"&&this.closeDraft()}}
              /></label>
              <div class="fp3d-arrows fp3d-wide">
                ${i.map(([a,l])=>v`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?v`<ol class="fp3d-measure-list">
                  ${t.slice(1).map((a,l)=>v`<li>${this.m(Math.hypot(a[0]-t[l][0],a[1]-t[l][1]))}</li>`)}
                </ol>`:$}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?v`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(o)})}</p>`:$}`:v`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(t,e){if(!this.floor)return;let n={id:B("wall"),a:[z(t[0]),z(t[1])],b:[z(e[0]),z(e[1])],thickness:null};this.change((o,i)=>i.walls=[...i.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){var t;return this._wallId?(((t=this.floor)==null?void 0:t.walls)??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(t){let e=this._wallId;e&&this.change((n,o)=>Object.assign((o.walls??[]).find(i=>i.id===e),t))}deleteFreeWall(){let t=this._wallId;!t||!this.isAdmin||!this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(o=>o.id!==t),n.openings=n.openings.filter(o=>o.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return T`<g>${(t.walls??[]).map(e=>{let[n,o]=this.toScreen(e.a),[i,s]=this.toScreen(e.b),a=e.id===this._wallId;return T`<g data-free-wall=${e.id} class=${`fp3d-free-wall${a?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${o} x2=${i} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${o} x2=${i} y2=${s} />
      </g>
      ${a&&this.isAdmin&&!To(e,!0,this._doc.settings)?T`<g class="fp3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${o} r="16" class="fp3d-hit" /><circle cx=${n} cy=${o} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${i} cy=${s} r="16" class="fp3d-hit" /><circle cx=${i} cy=${s} r="6" /></g>`:$}`})}</g>`}renderFreeWallForm(t){var a;let e=this.isAdmin,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),o=l=>{let d=Math.max(.1,l)/(n||1);this.updateFreeWall({b:[z(t.a[0]+(t.b[0]-t.a[0])*d),z(t.a[1]+(t.b[1]-t.a[1])*d)]})},i=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],s=(l,c)=>{let d=c-i[l],p=u=>l===0?[z(u[0]+d),u[1]]:[u[0],z(u[1]+d)];this.updateFreeWall({a:p(t.a),b:p(t.b)})};return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),i[0],l=>s(0,l))} ${this.len(this.t("z"),i[1],l=>s(1,l))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,o,.01,.1)}
        ${this.len(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,l=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,l))}),.01,.02)}
        ${this.len(this.t("wall_height"),t.height??((a=this.floor)==null?void 0:a.height)??2.5,l=>{var c;return this.updateFreeWall({height:l>=(((c=this.floor)==null?void 0:c.height)??2.5)-.005?null:Math.max(.05,l)})},.05,.05)}
      </div>
      ${e?v`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:$}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:B("hole"),type:"stairwell",x:z((t[0]+e[0])/2),z:z((t[1]+e[1])/2),w:z(e[0]-t[0]),d:z(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((o,i)=>i.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(t){if(!this.floor)return;let e=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:B("outdoor"),type:e,points:t.map(([i,s])=>[z(i),z(s)])},o=e==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(o==="round"||o==="oval"){let i=dt(n.points);n.points=Nn(o,i.x0,i.z0,i.x1,i.z1),n.pool_shape=o}e==="pool"&&ut("pool")&&(n.pool={}),this.change((i,s)=>s.outdoor.push(n)),this.selectItem("outdoor",n.id),this._tool!=="pool"&&(this._tool="select")}get outdoorArea(){var t;return this._outdoorId?(t=this.floor)==null?void 0:t.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,o)=>Object.assign(o.outdoor.find(i=>i.id===e),t))}deleteOutdoor(){let t=this._outdoorId;!t||!this.isAdmin||!this.confirmFixedDelete("outdoor",t)||(this.change((e,n)=>n.outdoor=n.outdoor.filter(o=>o.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isAdmin)return;let e={...t,id:B("outdoor"),points:t.points.map(([n,o])=>[z(n+.5),z(o+.5)])};this.change((n,o)=>o.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t){if(!this.floor)return;let e=B("room"),n=this.floor.rooms.length+1;this.change((o,i)=>i.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([s,a])=>[z(s),z(a)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let o=this.selectedFix;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(Ya,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let o=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[i,s]=Ya[t.key];this.nudge(i*o,s*o)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Backspace"&&this.drawingPoints)this._draft=this._draft.slice(0,-1);else if(t.key==="Enter"&&this.drawingPoints)this.closeDraft();else if(t.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let o=this.selectedFix;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=s=>[z(s[0]+t),z(s[1]+e)];if(this._deviceId){let s=this._deviceId;if(!n.placements.some(a=>a.entity_id===s))return!1;this.change((a,l)=>{let c=l.placements.find(d=>d.entity_id===s);[c.x,c.z]=i([c.x,c.z])})}else if(this._furnitureId){let s=this._furnitureId;this.change((a,l)=>{let c=l.furniture.find(d=>d.id===s);c&&([c.x,c.z]=i([c.x,c.z]))})}else if(this._openingId){let s=this.opening,a=s?He(s,n.rooms,n.walls??[]):null;if(!s||!a)return!1;let l=a.room.points[a.edge],c=a.room.points[(a.edge+1)%a.room.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,p=(t*(c[0]-l[0])+e*(c[1]-l[1]))/d;if(Math.abs(p)<1e-9)return!0;let u=Math.min(s.width,d)/2;this.updateOpening({offset:z(Math.min(d-u,Math.max(u,s.offset+p)))})}else if(this._wallId){let s=this._wallId;this.change((a,l)=>{let c=(l.walls??[]).find(d=>d.id===s);c&&([c.a,c.b]=[i(c.a),i(c.b)])})}else if(this._outdoorId){let s=this._outdoorId;this.change((a,l)=>{let c=l.outdoor.find(d=>d.id===s);c&&(c.points=c.points.map(i))})}else if(this._roomId){let s=this._roomId,a=this._vertex,l=n.rooms.find(d=>d.id===s);if(!l)return!1;let c=new Set(n.placements.filter(d=>N([d.x,d.z],l.points)).map(d=>d.entity_id));this.change((d,p)=>{let u=p.rooms.find(h=>h.id===s);if(a!==null&&a<u.points.length){u.points[a]=i(u.points[a]);return}u.points=u.points.map(i);for(let h of p.placements)c.has(h.entity_id)&&([h.x,h.z]=i([h.x,h.z]))})}else return!1;return!0}get freeHaFloors(){var e;let t=new Set(this._doc.floors.map(n=>n.ha_floor));return Object.values(((e=this.hass)==null?void 0:e.floors)??{}).filter(n=>!t.has(n.floor_id)).sort((n,o)=>(n.level??99)-(o.level??99)||n.name.localeCompare(o.name))}unplacedAreas(t){var n;if(!t.ha_floor)return[];let e=new Set(this._doc.floors.flatMap(o=>o.rooms.map(i=>i.area_id)));return Object.values(((n=this.hass)==null?void 0:n.areas)??{}).filter(o=>o.floor_id===t.ha_floor&&!e.has(o.area_id)).sort((o,i)=>o.name.localeCompare(i.name))}addFloor(t=null){let e=this._doc.floors,n=B("floor"),o=(t==null?void 0:t.name)??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),i={...Js(n,o,Ys(e,t==null?void 0:t.level)),ha_floor:(t==null?void 0:t.floor_id)??null},s=structuredClone(this._doc),a=s.floors.findIndex(l=>l.elevation>i.elevation);s.floors.splice(a<0?s.floors.length:a,0,i),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=Qs(t,e,()=>B("room"));this.change((o,i)=>i.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(i=>i.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let o=structuredClone(this._doc);[o.floors[e],o.floors[n]]=[o.floors[n],o.floors[e]],this.setDoc(o)}deleteFloor(){var n;let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(o=>o.id!==t.id),this.setDoc(e),this._floorId=((n=e.floors[0])==null?void 0:n.id)??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||!this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let o=n.rooms.find(i=>i.id===t);n.rooms=n.rooms.filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.room_id!==t||i.wall),o&&(n.placements=n.placements.filter(i=>!N([i.x,i.z],o.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=B("room");this.change((n,o)=>o.rooms.push({...structuredClone(t),id:e,points:t.points.map(([i,s])=>[z(i+.5),z(s+.5)])})),this._roomId=e}roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?$:v`<div class="fp3d-seg fp3d-dev-source">
      ${t.map(e=>v`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
    </div>`}get roofSection(){var t;return this._roofId?(t=this._doc.settings.roof.sections)==null?void 0:t.find(e=>e.id===this._roofId):void 0}useRoofSections(t=!1){if(!this.isAdmin)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=_a(n,()=>B("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isAdmin)return;let n=ma(this._doc,t[0],t[1],e[0],e[1]),o=Math.min(...this._doc.floors.map(c=>c.elevation)),i=n===null,s=z(n??o+2.4),a=i?6:this._doc.settings.roof.pitch||35,l={id:B("roof"),x0:z(t[0]),z0:z(t[1]),x1:z(e[0]),z1:z(e[1]),shape:i?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:i?.15:null,...i?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let t=this.floor,e=this._roofId;if(!t||!e||!this.isAdmin)return;let n=ca(t.rooms,t.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let o=n.map(([i,s])=>[z(i),z(s)]);this.updateRoofSection({shape:"flat",points:o,...$i(o)})}addDormer(t){let e=this.roofSection;if(!e||!this.isAdmin)return;let n=ua(e,t,B("roof"));this.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(t){let e=this._roofId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var i;let o=(i=n.settings.roof.sections)==null?void 0:i.find(s=>s.id===e);o&&Object.assign(o,t)}))}deleteRoofSection(){let t=this._roofId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:B("roof"),x0:z(t.x0+1),x1:z(t.x1+1),z0:z(t.z0+1),z1:z(t.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return T`<g class="fp3d-roof-layer">${e.map((n,o)=>{let i=n.id===this._roofId,s=Tt(n),a=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=pa(e,n),c=l?Tt(ha(l,n)):s,d=(a??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(g=>this.toScreen(g)),p=(g,b)=>{let[y,M]=this.toScreen(g),[P,I]=this.toScreen(b);return T`<line x1=${y} y1=${M} x2=${P} y2=${I} />`},u=n.shape==="flat"||n.shape==="parapet"?null:xi(n,{u0:0,u1:0,a:0,b:0}),h=u?T`${u.ridges.map(([g,b])=>p(s.at(g[0],g[1]),s.at(b[0],b[1])))}`:$,[f,m]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),_=`${this.roofFixed(n)?"\u{1F512} ":""}${o+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(ro(n),1)}`;return T`<g data-roof=${n.id} class=${`fp3d-roof-sec${i?" fp3d-roof-sel":""}`}>
          <polygon points=${d.map(g=>g.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${h}</g>
          <text x=${f} y=${m-14}>${_}</text>
        </g>
        ${i&&this.isAdmin&&!this.roofFixed(n)&&a?a.map((g,b)=>{let[y,M]=this.toScreen(g);return T`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${b}`}><circle cx=${y} cy=${M} r="16" class="fp3d-hit" /><circle cx=${y} cy=${M} r="6" /></g>`}):$}
        ${i&&this.isAdmin&&!this.roofFixed(n)&&!a?[[0,0],[1,0],[1,1],[0,1]].map(([g,b])=>{let[y,M]=this.toScreen([g?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),b?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return T`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${g}:${b}`}><circle cx=${y} cy=${M} r="16" class="fp3d-hit" /><circle cx=${y} cy=${M} r="6" /></g>`}):$}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:lo(t,e)}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return $;let e=nt(this._doc);return T`<g class="fp3d-solar-layer">${t.map(n=>{let o=wt(this._doc,n,e);if(!o||o.wall&&o.wall.floorId!==this._floorId)return $;let i=n.id===this._solarId,s=$;if(i&&o.unbounded&&this.isAdmin&&!n.locked){let[a,l]=kn(o,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...ee(o,n,!0).flatMap(m=>m.corners.map(_=>Math.hypot(_[0]-a,_[2]-l))))*.5,[p,u]=this.toScreen([a,l]),[h,f]=this.toScreen([a+Math.sin(c)*d,l-Math.cos(c)*d]);s=T`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${p} y1=${u} x2=${h} y2=${f} />
          <circle cx=${h} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${h} cy=${f} r="8" />
          <path d="M${h-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return T`<g data-solar=${n.id} class=${`fp3d-solar${i?" fp3d-solar-sel":""}${i&&this._solarPick?" fp3d-solar-pick":""}`}>${ee(o,n,i).map(a=>{let l=o.wall?Math.max(.3,...a.corners.map(d=>(d[0]-o.o[0])*o.n[0]+(d[2]-o.o[2])*o.n[2])):0,c=o.wall?[a.corners[0],a.corners[1]].flatMap((d,p)=>{let u=[d[0],d[2]],h=[d[0]+o.n[0]*l,d[2]+o.n[2]*l];return p===0?[u,h]:[h,u]}):a.corners.map(d=>[d[0],d[2]]);return T`<polygon data-cell=${a.cell} class=${a.skipped?"fp3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return $;let e=new Map(nt(this._doc).map(n=>[n.key,n]));return T`<g class="fp3d-roofwin-layer">${t.map(n=>{let o=e.get(n.face),i=o?Pa(o,n):null;return i?T`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${i.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:$})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let t=nt(this._doc).filter(o=>!o.flat),e=po(t,this._doc.settings.north??0)??nt(this._doc)[0];if(!e)return;let n=Ii(e,B("rwin"));this.change(o=>o.settings.roof.windows=[...o.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isAdmin||this.change(n=>{var s;let o=(s=n.settings.roof.windows)==null?void 0:s.find(a=>a.id===e);if(!o)return;Object.assign(o,t);let i=nt(n).find(a=>a.key===o.face);i&&Object.assign(o,Ge(i,Xe(o)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(nt(this._doc).map(n=>[n.key,n]));return v`<section>
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
    </section>`}renderRoofWindowForm(t){let e=this.isAdmin,n=nt(this._doc),o=l=>this.updateRoofWindow(l),i=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>Ni(l)||yt(l));return v`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
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
            <select ?disabled=${!e} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&o({...Ii(c,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt,window:t.window,name:t.name})}}>
              ${n.map(l=>v`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),t.w??.78,l=>o({w:Math.max(.3,Math.min(4,z(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),t.h??1.18,l=>o({h:Math.max(.3,Math.min(4,z(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),t.u,l=>o({u:z(l)}),.05)}
          ${this.len(this.t("solar_v"),t.v,l=>o({v:z(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),t.cover??null,void 0,s,l=>o({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),t.contact??null,void 0,a,l=>o({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),t.tilt??null,void 0,a,l=>o({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),t.window??null,void 0,s,l=>o({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${t.name??""} ?disabled=${!e} maxlength="64" @change=${l=>o({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${e?v`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:$}
      </section>`}cableSegments(){var i;if(((i=this.cableCache)==null?void 0:i.doc)===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(s=>[s.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},o=[];try{o=Ca({building:t,consumers:[],summary:n,fieldPower:e}).filter(s=>s.key)}catch{o=[]}return this.cableCache={doc:t,segs:o},o}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,o)=>e(n)-e(o)||n.localeCompare(o))}cableLabel(t){let e=a=>{let l=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===a);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type==="meter"),o=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${o} \u2192 ${this.t("furn_grid_point")}`;let[i,s]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(i==="solar"){let a=this._doc.settings.roof.solar??[],l=a.findIndex(d=>d.id===s),c=a[l];return`${(c==null?void 0:c.name)||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return i==="inv"?`${e(s)} \u2192 ${o}`:`${this.t("furn_inverter")} \u2194 ${e(s)}`}layCable(t){if(!this.isAdmin||!this._floorId)return;let e=[];for(let i of this.cableSegments().filter(s=>s.key===t))for(let s of[i.a,i.b]){let a=[z(s[0]),z(s[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-a[0],l[1]-a[1])>.05)&&e.push(a)}let n=e.length>2?e.slice(1,-1):e,o=this._floorId;this.change(i=>{i.settings.roof.cables=[...(i.settings.roof.cables??[]).filter(s=>s.id!==t),{id:t,floor_id:o,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){if(!ut("energy_pro"))return $;let t=this.cableSegments();if(!t.length)return $;let e=t.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],o=this._cableId,i=[...new Set(t.map(s=>s.key))];return T`<g class="fp3d-cable-layer">${i.map(s=>{let a=n.find(_=>_.id===s),l=`fp3d-cable fp3d-cable-${s.split(":")[0]}${a?" fp3d-cable-laid":""}${s===o?" fp3d-cable-sel":""}`,c=t.filter(_=>_.key===s),d=e.filter(_=>_.key===s).map(_=>{let g=this.toScreen([_.a[0],_.a[2]]),b=this.toScreen([_.b[0],_.b[2]]);return T`<line x1=${g[0]} y1=${g[1]} x2=${b[0]} y2=${b[1]} />`});if(!(a&&s===o&&a.floor_id===this._floorId&&!a.locked))return d.length?T`<g class=${l} data-cable=${s}><g class="fp3d-cable-hit">${d}</g>${d}</g>`:$;let p=c[0],u=c[c.length-1],h=[this.toScreen([p.a[0],p.a[2]]),...a.points.map(_=>this.toScreen(_)),this.toScreen([u.b[0],u.b[2]])],f=h.slice(0,-1).map((_,g)=>T`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${g} x1=${_[0]} y1=${_[1]} x2=${h[g+1][0]} y2=${h[g+1][1]} />`),m=a.points.map((_,g)=>{let b=this.toScreen(_);return T`<g class="fp3d-vertex" data-cable-pt=${`${s}:${g}`}><circle cx=${b[0]} cy=${b[1]} r="16" class="fp3d-hit" /><circle cx=${b[0]} cy=${b[1]} r="6" /></g>`});return T`<g class=${l} data-cable=${s}>${d}${f}${m}</g>`})}</g>`}renderCableSettings(){var i;let t=this.cableKeys();if(!t.length)return $;let e=this.isAdmin,n=this._doc.settings.roof.cables??[],o=this._cableId?n.find(s=>s.id===this._cableId):void 0;return v`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${t.map(s=>v`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${s===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=s===this._cableId?null:s;let a=n.find(l=>l.id===s);this._cableId&&a&&this._doc.floors.some(l=>l.id===a.floor_id)&&(this._floorId=a.floor_id)}}
            >
              <span>${this.cableLabel(s)}${n.some(a=>a.id===s)?v` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:$}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?v`<div class="fp3d-actions">
              ${o?v`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!o.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(s=>{var l;let a=(l=s.settings.roof.cables)==null?void 0:l.find(c=>c.id===o.id);a&&(a.locked=!a.locked)})}>
                      ${o.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(s=>s.settings.roof.cables=(s.settings.roof.cables??[]).filter(a=>a.id!==this._cableId))}>${this.t("cable_auto")}</button>`:v`<button class="fp3d-btn fp3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${o?v`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),o.height,s=>this.change(a=>{var c;let l=(c=a.settings.roof.cables)==null?void 0:c.find(d=>d.id===o.id);l&&(l.height=Math.min(30,Math.max(0,z(s))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${o.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:((i=this._doc.floors.find(s=>s.id===o.floor_id))==null?void 0:i.name)??""})}</p>`:$}`:$}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return $;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,o=ut("energy_pro")&&(n==null?void 0:n.place)==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return T`<g class="fp3d-energy-markers">${o?T`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${o[0]} cy=${o[1]} r="17" />
          <text x=${o[0]} y=${o[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${o[0]} y=${o[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:$}${t.furniture.filter(i=>re.includes(i.type)).map(i=>{let[s,a]=this.toScreen([i.x,i.z]),l=i.id===this._furnitureId;return T`<g data-energy-device=${i.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${a} r="17" />
          <text x=${s} y=${a+6} class="fp3d-energy-icon">${e[i.type]??"\u26A1"}</text>
          ${l?T`<text x=${s} y=${a+32} class="fp3d-energy-name">${this.t(`furn_${i.type}`)}</text>`:$}
          <title>${this.t(`furn_${i.type}`)}</title>
        </g>`})}</g>`}faceLabel(t){if(t.key===me)return this.t("solar_ground");if(t.wall){let{floorId:i,room:s,edge:a,free:l}=t.wall,c=this._doc.floors.find(u=>u.id===i),d=c==null?void 0:c.rooms.find(u=>u.id===s),p=l?this.t("solar_wall_free"):d?`${d.name}${a!=null?` ${a+1}\u2013${(a+1)%d.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${(c==null?void 0:c.name)??""} \xB7 ${p?`${p} \xB7 `:""}${this.t(`compass_${zi(t,this._doc.settings.north??0)}`)} \xB7 ${this.m(t.lu,2)}`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(i=>i.id===t.section)+1}):this.t("solar_main");if(t.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let o=t.side==="c"||t.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${zi(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0${o}`}addSolarField(){if(!this.isAdmin)return;let t=nt(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,o=po(t.filter(s=>!e.has(s.key)),n)??po(t,n);if(!o)return;let i=co(o,B("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],i]),this._solarId=i.id,this._roofId=null}selectSolar(t){var n;this._solarId=t,this._roofId=null;let e=(n=this._doc.settings.roof.solar)==null?void 0:n.find(o=>o.id===t);e!=null&&e.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){var n;if(!this.isAdmin)return;let t=this._floorId??((n=this._doc.floors[0])==null?void 0:n.id),e=t?$a(this._doc,B("pv"),t):null;e&&(this.change(o=>o.settings.roof.solar=[...o.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isAdmin)return;let t=Mi(this._doc,B("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var s;let o=(s=n.settings.roof.solar)==null?void 0:s.find(a=>a.id===e);if(!o)return;Object.assign(o,t);let i=wt(n,o);i&&Object.assign(o,Ge(i,o))}))}setSolarString(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var a;let o=n.settings.roof,i=(a=o.solar)==null?void 0:a.find(l=>l.id===e);if(!i)return;if(t==="new"){let l=o.strings??[],c={id:B("str"),name:this.t("solar_string_n",{n:l.length+1}),entity:i.entity??null,inverter:null};o.strings=[...l,c],i.string=c.id}else i.string=t;let s=new Set((o.solar??[]).map(l=>l.string).filter(Boolean));o.strings=(o.strings??[]).filter(l=>s.has(l.id))})}updateSolarString(t){var o;let e=(o=this._doc.settings.roof.solar)==null?void 0:o.find(i=>i.id===this._solarId),n=e==null?void 0:e.string;!n||!this.isAdmin||this.change(i=>{var a;let s=(a=i.settings.roof.strings)==null?void 0:a.find(l=>l.id===n);s&&Object.assign(s,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var i;let o=(i=n.settings.roof.solar)==null?void 0:i.find(s=>s.id===e);o&&t(o)})}deleteSolar(){let t=this._solarId;!t||!this.isAdmin||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(i=>i.id!==t);let o=new Set(n.solar.map(i=>i.string).filter(Boolean));n.strings=(n.strings??[]).filter(i=>o.has(i.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=nt(this._doc),n=new Map(t.map(i=>[i.id,wt(this._doc,i,e)])),o=this.isAdmin;return v`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?v`<div class="fp3d-room-list">
            ${t.map((i,s)=>{let a=n.get(i.id),l=a?ee(a,i).length:0;return v`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(i.id)}
                >
                  <span>${i.name||`${this.t("solar_field")} ${s+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:Pt(this.hass,l*(i.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:$}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!o||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!o} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!o||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?v`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(i=>{let s=t.filter(d=>d.string===i.id),a=s.map(d=>n.get(d.id)?ee(n.get(d.id),d).length:0),l=a.reduce((d,p)=>d+p,0),c=s.reduce((d,p,u)=>d+a[u]*(p.wp??400)/1e3,0);return v`<p class="fp3d-sub">🔗 <b>${i.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:l,kwp:Pt(this.hass,c,1)})}</p>`})}`:$}
    </section>`}renderSolarForm(t){var h,f,m,_;let e=this.isAdmin,n=nt(this._doc),o=Ut(this._doc),i=wt(this._doc,t,n),s=t.face===me,a=i?ee(i,t).length:0,l=xn(t),c=l.reduce((g,b)=>g+b,0)-(((h=t.skip)==null?void 0:h.length)??0),d=this.entityOptions(g=>this.isPowerSensor(g)),p=g=>this.updateSolar(g),u=(this._doc.settings.roof.solar??[]).findIndex(g=>g.id===t.id)+1;return v`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
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
              @change=${g=>p({name:g.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${g=>{let b=g.target.value,y={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h,wp:t.wp};b===me&&p({...Mi(this._doc,t.id),...y,rows:t.rows,cols:t.cols});let M=n.find(I=>I.key===b);M&&p(Ai(M,{...t,...y}));let P=o.find(I=>I.key===b);P&&p(Ai(P,{...t,...y,rows:1}))}}
            >
              ${i?$:v`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(g=>v`<option value=${g.key} ?selected=${g.key===t.face}>${this.faceLabel(g)}</option>`)}
              <option value=${me} ?selected=${s}>${this.t("solar_ground")}</option>
              ${o.map(g=>v`<option value=${g.key} ?selected=${g.key===t.face}>${this.faceLabel(g)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,g=>{var y;let b=Math.max(1,Math.min(40,Math.round(g)));p((y=t.layout)!=null&&y.length?{layout:Array.from({length:b},(M,P)=>t.layout[P]??t.layout[t.layout.length-1]),rows:b}:{rows:b})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${(f=t.layout)!=null&&f.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${g=>{let b=g.target.value.split(/[,;\s]+/).map(y=>parseInt(y,10)).filter(y=>Number.isFinite(y)&&y>=0);b.length&&(b.length===1?p({cols:Math.max(1,Math.min(60,b[0])),layout:null,skip:null}):p({layout:b.slice(0,40).map(y=>Math.min(60,y)),rows:Math.min(40,b.length),cols:Math.max(1,...b),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${i&&!i.unbounded?v`${this.t("solar_face_size",{w:Pt(this.hass,i.lu,1),h:Pt(this.hass,i.ls,1)})} · `:$}${this.t("solar_cols_hint")}
        </p>
        ${(m=t.layout)!=null&&m.length&&new Set(t.layout).size>1?v`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(g=>v`<button aria-pressed=${(t.align??"left")===g} ?disabled=${!e} @click=${()=>p({align:g})}>${this.t(`solar_align_${g}`)}</button>`)}
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
          ${this.len(this.t("solar_module_w"),t.module_w??1.13,g=>p({module_w:Math.max(.3,Math.min(3,z(g)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),t.module_h??1.72,g=>p({module_h:Math.max(.3,Math.min(3,z(g)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),t.wp??400,g=>p({wp:Math.max(50,Math.min(1500,Math.round(g)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${(_=t.skip)!=null&&_.length?v`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>p({skip:null})}>${this.t("solar_pick_all")}</button>`:$}
        </div>
        ${this._solarPick?v`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:$}
        <div class="fp3d-form">
          ${s?v`${this.len(this.t("solar_base"),t.base??0,g=>p({base:g>.001?Math.min(60,z(g)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,g=>p(wn(this._doc,t,g)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>p(wn(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>p(wn(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:v`${this.len(this.t("solar_u"),t.u,g=>p({u:z(g)}),.05)} ${this.num(this.t(i!=null&&i.wall?"solar_v_wall":"solar_v"),t.v,g=>p({v:z(g)}),.05)}`}
          ${i!=null&&i.wall?v`${this.num(this.t("solar_tilt_wall"),t.tilt??0,g=>p({tilt:Math.max(0,Math.min(90,Math.round(g)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${g=>p({flip:g.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:$}
          ${i!=null&&i.flat?v`${this.num(this.t("solar_tilt"),t.tilt??15,g=>p({tilt:Math.max(0,Math.min(45,Math.round(g)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${g=>p({flip:g.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:$}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:a,kwp:Pt(this.hass,a*(t.wp??400)/1e3,1)})}${a<c?v` · <b>${this.t("solar_partial",{n:a,total:c})}</b>`:$}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${g=>{let b=g.target.value;this.setSolarString(b===""?null:b)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(g=>v`<option value=${g.id} ?selected=${g.id===t.string}>${g.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{var M;let g=(M=this._doc.settings.roof.strings)==null?void 0:M.find(P=>P.id===t.string);if(!g)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,d,P=>p({entity:P==="none"?null:P}));let b=this.hass?Ce(this.hass,this._doc.floors):null,y=this._doc.floors.flatMap(P=>P.furniture.filter(I=>I.type==="inverter").map(I=>({m:I,fl:P}))).map(({m:P,fl:I},F)=>{var w,k;let S=(w=b==null?void 0:b.get(P.id))==null?void 0:w.entity,x=((k=P.name)==null?void 0:k.trim())||(S&&this.hass?st(this.hass,S):"");return{id:P.id,label:`${x||`${this.t("furn_inverter")} ${F+1}`} \xB7 ${I.name}`}});return v`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${g.name} @change=${P=>this.updateSolarString({name:P.target.value.trim()||g.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),g.entity??null,void 0,d,P=>this.updateSolarString({entity:P==="none"?null:P}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${P=>this.updateSolarString({inverter:P.target.value||null})}>
                  <option value="" ?selected=${!g.inverter}>${this.t(y.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${y.map(P=>v`<option value=${P.id} ?selected=${P.id===g.inverter}>${P.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${e?v`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!i} @click=${()=>i&&p({...co(i,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:$}
      </section>`}renderRoofPanel(){var s;let t=this._doc.settings.roof,e=this.isAdmin,n=t.type==="custom"?this.roofSection:void 0,o=this._roofWinId?(s=t.windows)==null?void 0:s.find(a=>a.id===this._roofWinId):void 0;if(o)return this.renderRoofWindowForm(o);if(n)return this.renderRoofSectionForm(n);let i=t.type==="custom"?t.sections??[]:[];return v`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?v`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:v`<div class="fp3d-room-list">
              ${i.map((a,l)=>v`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=a.id}>
                    <span>${l+1} · ${a.dormer?this.t("roof_dormer"):this.t(`roof_shape_${a.shape}`)} · ${this.m(Math.abs(a.x1-a.x0),1)} × ${this.m(Math.abs(a.z1-a.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(ro(a),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(a=>a.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){var o,i;let t=this._solarId?(o=this._doc.settings.roof.solar)==null?void 0:o.find(s=>s.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?(i=this.floor)==null?void 0:i.furniture.find(s=>s.id===this._furnitureId&&re.includes(s.type)):void 0;if(e)return v`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`;let n=ut("energy_pro");return v`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():$}${n?this.renderHologramSettings():$}${this.renderProCard()}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[],e=this.isAdmin,n=this._doc.settings.roof.hologram??Hn,o=n.place==="free",i=l=>this.change(c=>c.settings.roof.hologram={...c.settings.roof.hologram??Hn,...l}),s=(l,c)=>l.name||`${this.t("solar_field")} ${c+1}`,a=()=>{let l=-1/0,c=1/0,d=-1/0;for(let u of this._doc.floors)for(let h of u.rooms)for(let[f,m]of h.points)l=Math.max(l,f),c=Math.min(c,m),d=Math.max(d,m);let p=Number.isFinite(l);i({place:"free",x:n.x??(p?z(l+2):0),z:n.z??(p?z((c+d)/2):0),height:n.height??3})};return v`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!e} @change=${l=>l.target.value==="free"?a():i({place:"field"})}>
            <option value="field" ?selected=${!o}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${o}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${o?v`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>i({x:z(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>i({z:z(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>i({height:Math.min(60,Math.max(0,z(l)))}),.25,0)}`:t.length?v`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!e} @change=${l=>i({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${t.map((l,c)=>v`<option value=${l.id} ?selected=${l.id===n.field}>${s(l,c)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>i({right:Math.min(30,Math.max(-30,z(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>i({up:Math.min(30,Math.max(-30,z(l)))}),.25)}`:v`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>i({size:Math.min(3,Math.max(.3,z(l)))}),.1,.3)}
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
    </section>`}isPowerSensor(t){var n,o;if(!yt(t))return!1;let e=(o=(n=this.hass)==null?void 0:n.states[t])==null?void 0:o.attributes;return(e==null?void 0:e.device_class)==="power"||(e==null?void 0:e.unit_of_measurement)==="W"||(e==null?void 0:e.unit_of_measurement)==="kW"}devicePower(t,e){var n;return t.power&&t.power!=="none"?t.power:((n=e.get(t.id))==null?void 0:n.power)??null}renderEnergyChecklist(){var g;let t=this._doc,e=this.hass?Ce(this.hass,t.floors):new Map,n=t.floors.flatMap(b=>b.furniture.map(y=>({m:y,fl:b}))),o=b=>n.filter(y=>y.m.type===b),i=b=>{this._floorId=b.fl.id,this._solarId=null,this.selectItem("furniture",b.m.id),this.showPoint(b.m.x,b.m.z)},s=t.settings.roof.solar??[],a=o("meter"),l=o("inverter"),c=o("home_battery"),d=o("grid_point"),p=!!t.energy.grid||a.some(b=>this.devicePower(b.m,e)),u=!!t.energy.solar||l.length>0&&l.every(b=>this.devicePower(b.m,e)),h=c.every(b=>this.devicePower(b.m,e)&&b.m.soc&&b.m.soc!=="none")||!!t.energy.battery,f=ut("energy_pro"),m=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},a.length?{state:p?"ok":"todo",label:this.t(p?"chk_meter":"chk_meter_sensor"),action:()=>i(a[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:u?"ok":"todo",label:this.t(u?"chk_inverter":"chk_inverter_sensor"),action:()=>i(l.find(b=>!this.devicePower(b.m,e))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},c.length?{state:h?"ok":"todo",label:this.t(h?"chk_battery":"chk_battery_sensor"),action:()=>i(c[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},d.length?{state:"ok",label:this.t("chk_grid"),action:()=>i(d[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},f?{state:"ok",label:this.t("chk_pro_active")}:{state:"opt",label:this.t("chk_pro_get"),href:Zt((g=this.hass)==null?void 0:g.language)}],_=m.filter(b=>b.state==="ok").length;return v`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${_}/${m.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${m.map(b=>b.href?v`<a class="fp3d-chk fp3d-chk-${b.state}" href=${b.href} target="_blank" rel="noopener"><span>${b.state==="ok"?"\u2713":b.state==="todo"?"\u25CB":"\xB7"}</span>${b.label}</a>`:v`<button class="fp3d-chk fp3d-chk-${b.state}" ?disabled=${!this.isAdmin&&!!b.action&&b.state!=="ok"} @click=${b.action}><span>${b.state==="ok"?"\u2713":b.state==="todo"?"\u25CB":"\xB7"}</span>${b.label}</button>`)}
    </section>`}renderHelpLinks(){return v`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
        <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
      </div>
    </section>`}renderProCard(){var n;let t=(n=this.hass)==null?void 0:n.language;if(ut("energy_pro"))return v`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${Se(t,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let e=new URL("./images/solar-pro.jpg",import.meta.url).href;return v`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b><a class="fp3d-btn fp3d-primary" href=${Zt(t)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
      <img src=${e} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${Se(t,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isAdmin)return;if(t==="grid_point"){let b=Ti(this._doc),[y,M,P]=ie(t),[I,F]=b?b.end:this.toWorld(this._size.w/2,this._size.h/2),S={id:B("furniture"),type:t,x:z(I),z:z(F),rotation:0,w:y,d:M,h:P,variant:null};this.change((x,w)=>w.furniture.push(S)),this.selectItem("furniture",S.id),this.showPoint(S.x,S.z);return}let n=b=>{var y,M,P;return`${b.name} ${b.area_id&&((P=(M=(y=this.hass)==null?void 0:y.areas)==null?void 0:M[b.area_id])==null?void 0:P.name)||""} ${b.area_id??""}`.toLowerCase()},o=e.rooms.filter(b=>b.points.length>=3),i=b=>o.find(y=>b.test(n(y))),s=o.find(b=>e.furniture.some(y=>y.type==="parking"&&N([y.x,y.z],b.points))),a=i(/garage|carport/)??s,l=i(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=i(/flur|diele|eingang|hall|entr|lobby/),d=(t==="wallbox"?a:t==="meter"?l??c??a:l??a)??this.room??o.sort((b,y)=>Math.abs(at(y.points))-Math.abs(at(b.points)))[0],[p,u,h]=ie(t),[f,m]=d?Vt(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[b,y]=Vt(d.points),M=null,P=new Set(e.openings.filter(S=>S.room_id===d.id).map(S=>S.edge)),I=d.points.some((S,x)=>!P.has(x));d.points.forEach((S,x)=>{if(I&&P.has(x))return;let w=d.points[(x+1)%d.points.length],k=Math.hypot(w[0]-S[0],w[1]-S[1]);if(M&&k<=M.l)return;let A=(S[0]+w[0])/2,E=(S[1]+w[1])/2,L=-(w[1]-S[1])/k,O=(w[0]-S[0])/k;(b-A)*L+(y-E)*O<0&&([L,O]=[-L,-O]),M={mx:A,mz:E,nx:L,nz:O,l:k}});let F=M;F&&([f,m]=[F.mx+F.nx*(u/2+.25),F.mz+F.nz*(u/2+.25)])}let _={id:B("furniture"),type:t,x:z(f),z:z(m),rotation:0,w:p,d:u,h,variant:null},g=d?_n({...e,furniture:[...e.furniture,_]},_,this._doc.settings.wall_interior):null;g&&Object.assign(_,{x:z(g.x),z:z(g.z),rotation:g.rotation}),this.change((b,y)=>y.furniture.push(_)),this.selectItem("furniture",_.id),this.showPoint(_.x,_.z)}renderEnergyDevices(){let t=this.isAdmin,e=this._doc.floors.flatMap(n=>n.furniture.filter(o=>re.includes(o.type)).map(o=>({fl:n,m:o})));return v`<section>
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
        ${re.map(n=>v`<button
            class="fp3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(t){let e=this.isAdmin,n=h=>this.updateRoofSection(h),o=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[i,s]=t.flip?[o[1],o[0]]:o,a=t.shape==="flat"||t.shape==="parapet",l=t.shape==="pent",c=h=>h.findIndex(f=>f.id===t.id)+1,d=(h,f,m,_=.05,g=0)=>this.len(h,f,b=>m(Math.max(g,z(b))),_,g),p=(h,f,m)=>this.num(h,f,_=>m(Math.max(0,z(_))),1,0),u=!!this._doc.settings.lock_plan;return v`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
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
          <select ?disabled=${!e} @change=${h=>n({shape:h.target.value})}>
            ${Hs.map(h=>v`<option value=${h} ?selected=${t.shape===h}>${this.t(`roof_shape_${h}`)}</option>`)}
          </select>
        </label>
        ${a?$:v`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${h=>n({open:h.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${a?d(this.t("roof_height"),t.eave_a,h=>n({eave_a:h,eave_b:h})):v`${d(`${this.t("roof_eave")} ${l?"":i}`,t.eave_a,h=>n({eave_a:h}))}
              ${l?$:d(`${this.t("roof_eave")} ${s}`,t.eave_b,h=>n({eave_b:h}))}
              ${p(`${this.t("roof_pitch_short")} ${l?"":i}`,t.pitch_a,h=>n({pitch_a:Math.min(75,h)}))}
              ${l?$:p(`${this.t("roof_pitch_short")} ${s}`,t.pitch_b,h=>n({pitch_b:Math.min(75,h)}))}`}
          ${d(this.t("roof_base"),t.base,h=>n({base:h}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!e}
              @change=${h=>{let f=this._doc.floors.find(g=>g.id===h.target.value);if(!f)return;let m=z(f.elevation+f.height),_=m-t.base;n({base:m,eave_a:z(t.eave_a+_),eave_b:z(t.eave_b+_)})}}
            >
              ${[...this._doc.floors].filter(h=>h.rooms.length).sort((h,f)=>f.elevation-h.elevation).map(h=>{var f;return v`<option value=${h.id} ?selected=${((f=ga(this._doc,t))==null?void 0:f.id)===h.id}>${h.name}</option>`})}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,h=>n({overhang:Math.min(2,h)}),.05,0)}
        </div>
        ${a&&e?v`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${t.points?v`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:$}
            </div>
            <p class="fp3d-sub">${this.t(t.points?"roof_points_hint":"roof_outline_hint")}</p>`:$}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(ro(t),2)} · ${this.t("roof_section_hint")}</p>
        ${e?v`<div class="fp3d-actions">
              ${a?$:v`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!a&&!t.dormer&&!t.open?v`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${i}</button>
                  ${l?$:v`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:$}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:$}
      </section>`}fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(o=>o.id===n);case"opening":return t.openings.find(o=>o.id===n);case"furniture":return t.furniture.find(o=>o.id===n);case"device":return t.placements.find(o=>o.entity_id===n);case"wall":return(t.walls??[]).find(o=>o.id===n);case"outdoor":return t.outdoor.find(o=>o.id===n)}}isFixedItem(t,e){return To(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isAdmin||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);n||(this._fixedHint=!1),this.change((o,i)=>{let s=this.fixItem(i,t,e);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(t=>t.settings.lock_plan=!t.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(t){t.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(t.target,this.localPoint(t)))}openContext(t,e){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...e),o=f=>{var m;return((m=t.closest(`[${f}]`))==null?void 0:m.getAttribute(f))??null},i=null,s=o("data-device"),a=o("data-opening"),l=t.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),d=o("data-outdoor"),p=o("data-room")??this.roomAt(n);if(s?i=["device",s]:a?i=["opening",a]:l?i=["furniture",l]:c?i=["wall",c]:d&&!p?i=["outdoor",d]:p&&(i=["room",p]),!i){this._ctx=null;return}let[u,h]=i;this.selectItem(u,h),(u==="opening"||u==="furniture")&&(this._roomId=this._roomId??p),this._ctx={x:e[0],y:e[1],kind:u,id:h}}deleteItem(t,e){if(t==="device"){if(!this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return $;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),o=Math.max(4,Math.min(t.x,((n==null?void 0:n.clientWidth)??800)-190)),i=Math.max(4,Math.min(t.y,((n==null?void 0:n.clientHeight)??600)-190)),s=a=>()=>{this._ctx=null,a()};return v`<div class="fp3d-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?v`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:v`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?v`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:$}
      ${t.kind==="furniture"?v`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${s(()=>{var l;let a=(l=this.floor)==null?void 0:l.furniture.find(c=>c.id===t.id);a&&this.openWallViewFor(a)})}>▦ ${this.t("wall_view")}</button>`:$}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isAdmin)return $;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?v`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:$;let n=this.isFixedItem(t,e);return v`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){var n,o,i;if(this._notice=null,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._deviceId=t==="device"?e:null,t==="device"&&e){let s=(n=this.floor)==null?void 0:n.placements.find(a=>a.entity_id===e);this._roomId=(s&&this.roomAt([s.x,s.z]))??this._roomId}t==="opening"&&e&&(this._roomId=((i=(o=this.floor)==null?void 0:o.openings.find(s=>s.id===e))==null?void 0:i.room_id)??this._roomId)}get opening(){var t;return this._openingId?(t=this.floor)==null?void 0:t.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){var t;return this._furnitureId?(t=this.floor)==null?void 0:t.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,o,i){let s=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,c=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l,d=i?.01:this._doc.settings.grid,p=Math.min(o,l)/2;return z(Math.min(l-p,Math.max(p,Math.round(c/d)*d)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let o=null;for(let m of n.walls??[]){let _=He({room_id:"",edge:0,wall:m.id},n.rooms,n.walls??[]);if(!_)continue;let[g,b]=this.toScreen(m.a),[y,M]=this.toScreen(m.b),P=(y-g)**2+(M-b)**2||1,I=Math.min(1,Math.max(0,((e[0]-g)*(y-g)+(e[1]-b)*(M-b))/P)),F=Math.hypot(e[0]-g-(y-g)*I,e[1]-b-(M-b)*I),S=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],x=n.rooms.find(w=>w.points.length>=3&&N(S,w.points));F<bo*2.2&&(!o||F-1<o.d)&&(o={room:_.room,edge:0,d:F-1,wall:m.id,roomId:(x==null?void 0:x.id)??m.id})}for(let m of n.rooms)for(let _=0;_<m.points.length;_++){let[g,b]=this.toScreen(m.points[_]),[y,M]=this.toScreen(m.points[(_+1)%m.points.length]),P=(y-g)**2+(M-b)**2||1,I=Math.min(1,Math.max(0,((e[0]-g)*(y-g)+(e[1]-b)*(M-b))/P)),F=Math.hypot(e[0]-g-(y-g)*I,e[1]-b-(M-b)*I),S=F-(m.id===this._roomId?.5:0);F<bo*2.2&&(!o||S<o.d)&&(o={room:m,edge:_,d:S})}if(!o)return!1;let{room:i,edge:s,wall:a}=o,l=i.points[s],c=i.points[(s+1)%i.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),p=Un[t],u=p.type,h=z(Math.min(p.width,Math.max(.3,d-.1))),f={id:B("opening"),room_id:o.roomId??i.id,edge:s,...a?{wall:a}:{},offset:this.offsetOnEdge(i,s,this.toWorld(...e),h,!1),width:h,type:u,sill:p.sill,height:p.height,hinge:"left",leaves:p.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((m,_)=>_.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}setOpeningPreset(t,e){let n=Un[e];this._openingPreset=e;let o=qn(t)===e,i="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:i,...o?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,o)=>Object.assign(o.openings.find(i=>i.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||!this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(o=>o.id!==t)),this._openingId=null)}glowScaleField(t,e){return v`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((t??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let o=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;e(Math.abs(o-1)<.001?null:o)}}
    /></label>`}furnitureFor(t){let e=J(t),n=[...No.map(s=>({type:s,label:this.t(`furn_${s}`)})),...(this.packs??[]).flatMap(s=>s.items.map(a=>({type:Oe(s.id,a.id),label:`${se(a)} \xB7 ${kt(s)}`})))],o=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,i=s=>e==="light"?It(s):e==="climate"?s==="radiator":t.startsWith("vacuum.")?s==="robot_vacuum"||Ve(s)&&s.endsWith(":robot_vacuum"):e==="media"?Zn(s)||pn(s)&&o.test(s):pn(s)&&!It(s);return n.filter(s=>i(s.type)).sort((s,a)=>s.label.localeCompare(a.label))}vehicleToSpot(t){if(!this.isAdmin)return;let[e,n,o]=ie("parking"),i={id:B("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,z(t.w+.5)),d:Math.max(n,z(t.d+.4)),h:o,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}};this.change((s,a)=>{a.furniture=a.furniture.filter(l=>l.id!==t.id),a.furniture.push(i)}),this.selectItem("furniture",i.id)}deviceToFurniture(t,e){if(!this.isAdmin)return;let[n,o,i]=ie(e),s={id:B("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:o,h:i,variant:null,entity:t.entity_id,name:t.name??null,...t.locked?{locked:!0}:{}};this.change((a,l)=>{l.placements=l.placements.filter(c=>c.entity_id!==t.entity_id),l.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(t){let e=t.entity;if(!this.isAdmin||!e||e==="none")return;let n={entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,...t.name?{name:t.name}:{},...e.startsWith("light.")?{pin:!0}:{}};this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==t.id),i.placements.some(s=>s.entity_id===e)||i.placements.push(n)}),this._furnitureId=null,this.selectItem("device",e)}renderAsFurniture(t){if(!this.isAdmin)return $;let e=this.furnitureFor(t.entity_id);return e.length?v`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let o=n.target.value;o&&this.deviceToFurniture(t,o)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${e.map(n=>v`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:$}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,o,i]=ie(t),s=this._doc.floors.filter(h=>h.elevation>e.elevation).sort((h,f)=>h.elevation-f.elevation)[0],a=Uo.has(t)?z(s?s.elevation-e.elevation:e.height+.25):i,l=this.room,[c,d]=l?Vt(l.points):this.toWorld(this._size.w/2,this._size.h/2),p=0;if(t==="parking"&&l){let h=e.openings.find(g=>g.room_id===l.id&&g.type==="garage"),f=h?l.points[h.edge]:null,m=h?l.points[(h.edge+1)%l.points.length]:null,_=dt(l.points);p=(f&&m?Math.abs(m[1]-f[1])>Math.abs(m[0]-f[0]):_.x1-_.x0>_.z1-_.z0)?90:0}let u={id:B("furniture"),type:t,x:z(c),z:z(d),rotation:p,w:n,d:o,h:a,variant:null};this.change((h,f)=>f.furniture.push(u)),this.selectItem("furniture",u.id),this.showPoint(u.x,u.z)}snapToWall(t){return this.floor?_n(this.floor,t,this._doc.settings.wall_interior):null}updateFurniture(t){let e=this._furnitureId;this.change((n,o)=>Object.assign(o.furniture.find(i=>i.id===e),t))}mirrorFurniture(){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({mirror:!t.mirror})}rotateFurniture(t){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;!t||!this.isAdmin||!this.confirmFixedDelete("furniture",t)||(this.change((e,n)=>n.furniture=n.furniture.filter(o=>o.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:B("furniture"),x:z(t.x+.3),z:z(t.z+.3)};this.change((n,o)=>o.furniture.push(e)),this.selectItem("furniture",e.id)}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let n=new Set(t);this.change((o,i)=>{for(let a of o.floors)a.placements=a.placements.filter(l=>!n.has(l.entity_id)),a.furniture=a.furniture.filter(l=>!(It(l.type)&&l.entity&&n.has(l.entity)));let s=[...i.placements.map(a=>[a.x,a.z]),...i.furniture.filter(a=>It(a.type)).map(a=>[a.x,a.z])];for(let a of vr(e,t,s)){if(!a.entity_id.startsWith("light.")){i.placements.push(a);continue}let[l,c,d]=Ht.lamp_ceiling;i.furniture.push({id:B("furniture"),type:"lamp_ceiling",x:a.x,z:a.z,rotation:0,w:l,d:c,h:d,variant:null,entity:a.entity_id,power:null})}})}get device(){var t;return this._deviceId?(t=this.floor)==null?void 0:t.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,o)=>Object.assign(o.placements.find(i=>i.entity_id===e),t))}centreDevice(){var s;let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=(s=this.floor)==null?void 0:s.rooms.find(a=>a.id===e);if(!t||!n)return;let[o,i]=Vt(n.points);this.updateDevice({x:z(o),z:z(i)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(p=>J(p.entity_id)==="light"&&(p.mount??"ceiling")==="ceiling"&&N([p.x,p.z],t.points));if(n.length<2)return;let o=dt(t.points),i=o.x1-o.x0,s=o.z1-o.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*i/Math.max(.1,s)))),l=Math.ceil(n.length/a),c=n.map((p,u)=>{let h=Math.floor(u/a),f=h===l-1?n.length-a*(l-1):a,m=u-h*a;return[z(o.x0+i/f*(m+.5)),z(o.z0+s/l*(h+.5))]}),d=n.map(p=>p.entity_id);this.change((p,u)=>{d.forEach((h,f)=>Object.assign(u.placements.find(m=>m.entity_id===h),{x:c[f][0],z:c[f][1]}))})}straightenFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,fixed:n}=jr(t.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((o,i)=>i.rooms=e),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=Vr(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let o=Tr(n);this.change((i,s)=>{s.rooms=e,o&&(i.settings.wall_interior=o)}),this._notice=o?this.t("gaps_closed_wall",{n:n.length,t:Pt(this.hass,o,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(o=>o.entity_id!==t),n.furniture=n.furniture.filter(o=>!(It(o.type)&&o.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,o=(t-1+n)%n;this.change((i,s)=>{let a=s.rooms.find(l=>l.id===e.id);a.points.splice(t,1),a.wall_heights&&a.wall_heights.splice(t,1),a.wall_thickness&&a.wall_thickness.splice(t,1),s.openings=s.openings.filter(l=>l.room_id!==e.id||l.wall||l.edge!==t&&l.edge!==o).map(l=>l.room_id===e.id&&!l.wall&&l.edge>t?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(t,e){if(!this.isAdmin||!t&&!e)return;let n=i=>[z(i[0]+t),z(i[1]+e)],o=i=>{for(let s of i.rooms)s.points=s.points.map(n);for(let s of i.furniture)s.x=z(s.x+t),s.z=z(s.z+e);for(let s of i.placements)s.x=z(s.x+t),s.z=z(s.z+e);for(let s of i.outdoor)s.points=s.points.map(n);for(let s of i.walls??[])s.a=n(s.a),s.b=n(s.b);i.background&&(i.background.x=z(i.background.x+t),i.background.z=z(i.background.z+e))};this._shiftAll?this.change(i=>{for(let s of i.floors)o(s);this.moveHouseExtras(i,n)}):this.change((i,s)=>o(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(t,e){for(let o of t.settings.roof.sections??[]){let i=[e([o.x0,o.z0]),e([o.x1,o.z0]),e([o.x1,o.z1]),e([o.x0,o.z1])];o.x0=Math.min(...i.map(s=>s[0])),o.x1=Math.max(...i.map(s=>s[0])),o.z0=Math.min(...i.map(s=>s[1])),o.z1=Math.max(...i.map(s=>s[1])),o.points&&(o.points=o.points.map(e))}for(let o of t.settings.roof.cables??[])o.points=o.points.map(e);t.energy.meter&&([t.energy.meter.x,t.energy.meter.z]=e([t.energy.meter.x,t.energy.meter.z]));let n=t.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=e([n.x,n.z]))}turnFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let e=(this._shiftAll?this._doc.floors:[t]).flatMap(c=>c.rooms.flatMap(d=>d.points));if(!e.length)return;let n=e.map(c=>c[0]),o=e.map(c=>c[1]),i=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...o)+Math.max(...o))/2,a=c=>[z(i-(c[1]-s)),z(s+(c[0]-i))],l=c=>{for(let d of c.rooms)d.points=d.points.map(a);for(let d of c.furniture)[d.x,d.z]=a([d.x,d.z]),d.rotation=(d.rotation+90)%360;for(let d of c.placements)[d.x,d.z]=a([d.x,d.z]),d.rotation=((d.rotation??0)+90)%360;for(let d of c.outdoor)d.points=d.points.map(a);for(let d of c.walls??[])d.a=a(d.a),d.b=a(d.b);c.background&&([c.background.x,c.background.z]=a([c.background.x,c.background.z]),c.background.rotation=((c.background.rotation??0)+90)%360)};this._shiftAll?this.change(c=>{for(let d of c.floors)l(d);this.moveHouseExtras(c,a)}):this.change((c,d)=>l(d))}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,o)=>Object.assign(o.rooms.find(i=>i.id===e),t))}setArea(t){var i,s,a;let e=this.room;if(!e)return;let n=t?(s=(i=this.hass)==null?void 0:i.areas)==null?void 0:s[t]:void 0,o=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(((a=this.hass)==null?void 0:a.areas)??{}).some(l=>l.name===e.name);this.updateRoom({area_id:t||null,...n&&o?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let o=dt(n.points),{x0:i,z0:s,x1:a,z1:l}=o;t==="x"&&([i,a]=[e,e+(a-i)]),t==="z"&&([s,l]=[e,e+(l-s)]),t==="w"&&e>.05&&(a=i+e),t==="d"&&e>.05&&(l=s+e),this.updateRoom({points:[[z(i),z(s)],[z(a),z(s)],[z(a),z(l)],[z(i),z(l)]]})}setPoint(t,e,n){let o=this.room;if(!o||!Number.isFinite(n))return;let i=o.points.map(s=>[...s]);i[t][e]=z(n),this.updateRoom({points:i})}async loadImage(t){this.loadingImages.add(t);try{let e=await Ro(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){var d,p;let e=t.target,n=(d=e.files)==null?void 0:d[0];if(e.value="",!n)return;let o=await createImageBitmap(n),i=Math.min(1,2048/Math.max(o.width,o.height)),s=document.createElement("canvas");s.width=Math.round(o.width*i),s.height=Math.round(o.height*i),s.getContext("2d").drawImage(o,0,0,s.width,s.height);let a=s.toDataURL("image/jpeg",.85),l=B("img");await Dn(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:s.height/s.width}};let c=(p=this.floor)!=null&&p.rooms.length?dt(this.floor.rooms.flatMap(u=>u.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,z(c.x1-c.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?vt(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return v`
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
                  ${Ft("pool")?v`<div class="fp3d-seg" role="group">
                        <button aria-pressed=${!!this._pipeMode} title=${this.t("pool_pipe_draw_hint")} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null,this._draft=[])}>〰 ${this.t("pool_pipe_draw")}</button>
                      </div>`:$}`:$}
            ${this._tool==="outdoor"?v`<label class="fp3d-outdoor-type" title=${this.t("outdoor_draw_type_hint")}
                    >${this.t("outdoor_draw_type")}
                    <select
                      @change=${n=>{this._outdoorType=n.target.value,this._outdoorType==="pool"&&(this._outdoorFree=this._poolShape==="free"),this._draft=[]}}
                    >
                      ${Co.filter(n=>n!=="pool").map(n=>v`<option value=${n} ?selected=${n===(this._outdoorType??"lawn")}>${this.t(`out_${n}`)}</option>`)}
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
              ${this._tool==="roof"?T`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?T`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&t&&Ft("pool")?this.renderPoolPlan(t):$} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${t?this._wallPick?this.t("hint_wall_pick"):this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this._outdoorFree?this.t("hint_outdoor_free"):this._tool==="pool"&&this._jointPlace?this.t("hint_joint_place"):this._tool==="pool"&&this._pipeMode?this.t(this.poolArea?this._pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool"):this._tool==="pool"&&Ft("pool")?this.t("hint_pool_tech"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?v`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:$}
          ${this._split?this.render3d():$}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}renderBackground(t){let e=t==null?void 0:t.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return $;let[o,i]=this.toScreen([e.x,e.z]),s=e.width*this._view.scale,a=s*n.aspect,l=e.rotation??0,c=this.bgHandles();return T`<g transform="rotate(${l} ${o+s/2} ${i+a/2})">
      <image href=${n.url} x=${o} y=${i} width=${s} height=${a} opacity=${e.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
      ${c?T`<rect class="fp3d-bg-frame" x=${o} y=${i} width=${s} height=${a} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${o+s} cy=${i+a} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${o+s/2} y1=${i} x2=${o+s/2} y2=${i-30} />
            <circle cx=${o+s/2} cy=${i-30} r="16" class="fp3d-hit" />
            <circle cx=${o+s/2} cy=${i-30} r="8" />
            <path d="M${o+s/2-4} ${i-31}a4 4 0 1 1 2 3.5" />
          </g>`:$}
    </g>${this.renderBgRuler()}`}bgHandles(){var t;return!!((t=this.floor)!=null&&t.background)&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){var n;let t=(n=this._bgLevel)!=null&&n.length?this._bgLevel:this._bgRuler;if(!(t!=null&&t.length))return $;let e=t.map(o=>this.toScreen(o));return T`<g class="fp3d-bg-ruler">
      ${e.length===2?T`<line x1=${e[0][0]} y1=${e[0][1]} x2=${e[1][0]} y2=${e[1][1]} />`:$}
      ${e.map(([o,i])=>T`<circle cx=${o} cy=${i} r="6" />`)}
    </g>`}applyBgLevel(t,e){var h;let n=(h=this.floor)==null?void 0:h.background,o=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!o||Math.hypot(e[0]-t[0],e[1]-t[1])<.05)return;let i=Math.atan2(e[1]-t[1],e[0]-t[0]),s=Math.round(i/(Math.PI/2))*(Math.PI/2)-i;if(Math.abs(s)<1e-4)return;let a=n.width*o.aspect,l=[n.x+n.width/2,n.z+a/2],c=l[0]-t[0],d=l[1]-t[1],p=[t[0]+c*Math.cos(s)-d*Math.sin(s),t[1]+c*Math.sin(s)+d*Math.cos(s)],u=(n.rotation??0)+s*180/Math.PI;u=Math.round((((u+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:u,x:z(p[0]-n.width/2),z:z(p[1]-a/2)}})}applyBgRuler(t){let e=this.floor,n=e==null?void 0:e.background,o=this._bgRuler,i=n?this._images[n.image_id]:void 0;if(!n||!i||!o||o.length<2||!(t>0))return;let s=Math.hypot(o[1][0]-o[0][0],o[1][1]-o[0][1]);if(s<1e-4)return;let a=t/s,l=n.width*i.aspect,c=[n.x+n.width/2,n.z+l/2],d=o[0],p=[d[0]+a*(c[0]-d[0]),d[1]+a*(c[1]-d[1])],u=n.width*a,h=l*a;this.updateFloor({background:{...n,width:z(u),x:z(p[0]-u/2),z:z(p[1]-h/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(t,e,n){let o=t.width*n,i=t.x+t.width/2,s=t.z+o/2,a=-(t.rotation??0)*Math.PI/180,l=e[0]-i,c=e[1]-s;return[i+l*Math.cos(a)-c*Math.sin(a)-t.x,s+l*Math.sin(a)+c*Math.cos(a)-t.z]}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,o=t>=90?.1:t>=30?.5:1,i=t>=20?1:5,[s,a]=this.toWorld(0,0),[l,c]=this.toWorld(e,n),d=[],p=(f,m)=>{for(let _=Math.ceil(s/f)*f;_<=l;_+=f){let g=this.toScreen([_,0])[0];d.push(T`<line class=${m} x1=${g} y1="0" x2=${g} y2=${n} />`)}for(let _=Math.ceil(a/f)*f;_<=c;_+=f){let g=this.toScreen([0,_])[1];d.push(T`<line class=${m} x1="0" y1=${g} x2=${e} y2=${g} />`)}};o<i&&p(o,"fp3d-grid-minor"),p(i,"fp3d-grid-major");let[u,h]=this.toScreen([0,0]);return d.push(T`<circle class="fp3d-origin" cx=${u} cy=${h} r="3" />`),T`<g pointer-events="none">${d}</g>`}renderGhost(){var n;let t=((n=this._doc)==null?void 0:n.floors.findIndex(o=>o.id===this._floorId))??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?T`<g pointer-events="none">${e.rooms.map(o=>T`<polygon class="fp3d-ghost" points=${o.points.map(i=>this.toScreen(i).join(",")).join(" ")} />`)}</g>`:$}renderWalls(t){var n;let e=((n=this.floor)==null?void 0:n.height)??2.5;return T`<g pointer-events="none">${t.map(o=>{let i=o.height!==void 0&&o.height<e-.01,s=`fp3d-wall${o.exterior?" fp3d-wall-ext":""}${i?" fp3d-wall-low":""}`;return T`<polygon class=${s} points=${o.footprint.map(a=>this.toScreen(a).join(",")).join(" ")} />`})}</g>`}edgeParts(t,e){let n=this.floor;if(!n)return[0];let i=vt(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(a=>a.room_id===t.id&&a.edge===e).map(a=>a.t0));return i.length?[...new Set(i)].sort((s,a)=>s-a):[0]}setEdgeHeight(t,e,n,o){let i=this.floor;if(!i||!this.isAdmin)return;if(o!==void 0){let l=this.edgeParts(t,e).length;this.change((c,d)=>{let p=d.rooms.find(m=>m.id===t.id);if(!p)return;let u=(p.wall_heights??[]).slice(0,p.points.length);for(;u.length<p.points.length;)u.push(null);let h=u[e],f=Array.isArray(h)?[...h]:new Array(l).fill(typeof h=="number"?h:null);for(;f.length<l;)f.push(null);f[o]=n,u[e]=f.every(m=>m===f[0])?f[0]:f,p.wall_heights=u.every(m=>m===null)?void 0:u});return}let a=vt(i.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},i.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===t.id&&c.edge===e)).flatMap(l=>l.sources);a.some(l=>l.room_id===t.id&&l.edge===e)||a.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((l,c)=>{for(let d of a){let p=c.rooms.find(h=>h.id===d.room_id);if(!p)continue;let u=(p.wall_heights??[]).slice(0,p.points.length);for(;u.length<p.points.length;)u.push(null);u[d.edge]=n,p.wall_heights=u.every(h=>h===null)?void 0:u}})}renderCameraDetections(t){if(!this.hass)return $;let e=this.hass,n=sa(e,t),o=[...new Set(n.map(s=>ia(e,s)))],i=ut("camera_cockpit");return v`<p class="fp3d-sub fp3d-wide">
      ${n.length?v`${i?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:o.map(s=>this.t(`detect_${s}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(t,e,n){if(!this.isAdmin)return;let o=t.points,i=Math.hypot(o[(e+1)%o.length][0]-o[e][0],o[(e+1)%o.length][1]-o[e][1]),s=this.edgeParts(t,e),a=n===void 0?0:s[n],l=n===void 0?i:s[n+1]??i;if(l-a<.4)return;let c=Math.round((a+l)/2*100)/100;this.change((d,p)=>{var m;let u=p.rooms.find(_=>_.id===t.id);if(!u)return;let h=(u.wall_splits??[]).slice(0,u.points.length);for(;h.length<u.points.length;)h.push(null);h[e]=[...h[e]??[],c].sort((_,g)=>_-g),u.wall_splits=h;let f=(m=u.wall_heights)==null?void 0:m[e];if(Array.isArray(f)){let _=n??0;f.splice(_+1,0,f[_]??null)}})}moveSplit(t,e,n,o){let i=t.points,s=Math.hypot(i[(e+1)%i.length][0]-i[e][0],i[(e+1)%i.length][1]-i[e][1]),a=this.edgeParts(t,e).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(s-.1,Math.round(o*100)/100));a.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{var f;let p=d.rooms.find(m=>m.id===t.id),u=(f=p==null?void 0:p.wall_splits)==null?void 0:f[e];if(!u)return;let h=u.findIndex(m=>Math.abs(m-n)<.001);h>=0&&(u[h]=l),u.sort((m,_)=>m-_)})}joinSplit(t,e,n,o){this.change((i,s)=>{var d,p;let a=s.rooms.find(u=>u.id===t.id);if(!((d=a==null?void 0:a.wall_splits)!=null&&d[e]))return;let l=a.wall_splits[e].filter(u=>Math.abs(u-n)>.001);a.wall_splits[e]=l.length?l:null,a.wall_splits.every(u=>!u)&&(a.wall_splits=void 0);let c=(p=a.wall_heights)==null?void 0:p[e];Array.isArray(c)&&(c.splice(o,1),c.every(u=>u===c[0])&&(a.wall_heights[e]=c[0]??null))})}renderSplitMarks(t){let e=t.points;return T`${(t.wall_splits??[]).flatMap((n,o)=>{if(!n||o>=e.length)return[];let i=e[o],s=e[(o+1)%e.length],a=Math.hypot(s[0]-i[0],s[1]-i[1])||1,l=(s[0]-i[0])/a,c=(s[1]-i[1])/a;return n.map(d=>{let[p,u]=this.toScreen([i[0]+l*d,i[1]+c*d]);return T`<line class="fp3d-split-mark" x1=${p-c*7} y1=${u+l*7} x2=${p+c*7} y2=${u-l*7} />`})})}`}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length,o=this._doc.settings,i=new Set;for(let a of vt(this.floor.rooms,{exterior:o.wall_exterior,interior:o.wall_interior},this.floor.walls??[]).walls)if(a.exterior)for(let l of a.sources)l.room_id===t.id&&i.add(l.edge);let s=(a,l)=>this.change((c,d)=>{let p=d.rooms.find(h=>h.id===t.id);if(!p)return;let u=(p.wall_thickness??[]).slice(0,p.points.length);for(;u.length<p.points.length;)u.push(null);u[a]=l,p.wall_thickness=u.every(h=>h===null)?void 0:u});return v`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${t.points.flatMap((a,l)=>{var _;let c=t.points[(l+1)%n],d=Math.hypot(c[0]-a[0],c[1]-a[1]),p=((_=t.wall_heights)==null?void 0:_[l])??null,u=()=>this._edgeHi=l,h=()=>this._edgeHi=null,f=this.edgeParts(t,l);return(f.length>1?f.map((g,b)=>b):[void 0]).map(g=>{var P,I,F;let b=g===void 0?Array.isArray(p)?p[0]??null:p:Array.isArray(p)?p[g]??null:p,y=g===void 0?d:(f[g+1]??d)-f[g],M=S=>this.setEdgeHeight(t,l,S,g);return v`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${b!==null?" fp3d-edge-low":""}"
            @mouseenter=${u}
            @mouseleave=${h}
            @focusin=${u}
            @focusout=${h}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${g===void 0?"":` \xB7 ${this.t("wall_part",{n:g+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(y,2)}</span
              ></span
            >
            ${b===0?v`<span class="fp3d-muted">${this.t("wall_none")}</span>`:this.len(this.t("wall_height"),b??e,S=>M(S>=e-.005?null:Math.max(.05,S)),.05,.05)}
            ${this.isAdmin&&b!==null?v`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>M(null)}>↥</button>`:$}
            ${this.isAdmin&&b!==0?v`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>M(0)}>${this.t("wall_none")}</button>`:$}
            ${this.isAdmin&&y>=.4?v`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(t,l,g)}>✂</button>`:$}
            ${(g===void 0||g===0)&&b!==0?v`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(t.id,l)}>▦</button>`:$}
            ${(g===void 0||g===0)&&b!==0?v`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),((P=t.wall_thickness)==null?void 0:P[l])??(i.has(l)?o.wall_exterior:o.wall_interior),S=>{let x=i.has(l)?o.wall_exterior:o.wall_interior,w=Math.min(1.5,Math.max(.02,Math.round(S*1e3)/1e3));s(l,Math.abs(w-x)<5e-4?null:w)},.01,.02)}
                  ${this.isAdmin&&((I=t.wall_thickness)==null?void 0:I[l])!=null?v`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:$}</span
                >`:$}
            ${g!==void 0&&g>0&&(((F=t.wall_splits)==null?void 0:F[l])??[]).some(S=>Math.abs(S-f[g])<.001)?v`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),f[g],S=>this.moveSplit(t,l,f[g],S),.05,.1)}
                  ${this.isAdmin?v`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(t,l,f[g],g)}>⨉</button>`:$}</span
                >`:$}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!e||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return $;if(e.pool_shape){let n=dt(e.points),o=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return T`${o.map((i,s)=>{let[a,l]=this.toScreen(i);return T`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${e.id}:${s}`}><circle cx=${a} cy=${l} r="16" class="fp3d-hit" /><rect x=${a-5} y=${l-5} width="10" height="10" /></g>`})}`}return T`${e.points.map((n,o)=>{let[i,s]=this.toScreen(n);return T`<g class="fp3d-vertex" data-out-vertex=${`${e.id}:${o}`}><circle cx=${i} cy=${s} r="16" class="fp3d-hit" /><circle cx=${i} cy=${s} r="6" /></g>`})}`}renderOutdoor(t){return T`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[o,i]=this.toScreen(Vt(e.points)),s=dt(e.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return T`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?T`<text x=${o} y=${i+4}>${this.t(`out_${e.type}`)}</text>`:$}
      </g>`})}</g>`}renderOutdoorForm(t){let e=this.isAdmin,n=Gn(t.points),o=dt(t.points),i=(s,a)=>{let{x0:l,z0:c,x1:d,z1:p}=o;s==="x"&&([l,d]=[a,a+(d-l)]),s==="z"&&([c,p]=[a,a+(p-c)]),s==="w"&&(d=l+Math.max(.1,a)),s==="d"&&(p=c+Math.max(.1,a)),this.updateOutdoor({points:[[l,c],[d,c],[d,p],[l,p]].map(([u,h])=>[z(u),z(h)])})};return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${Co.map(s=>v`<option value=${s} ?selected=${s===t.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?v`${this.len(this.t("x"),o.x0,s=>i("x",s))} ${this.len(this.t("z"),o.z0,s=>i("z",s))}
            ${this.len(this.t("width"),o.x1-o.x0,s=>i("w",s),.01,.1)} ${this.len(this.t("depth"),o.z1-o.z0,s=>i("d",s),.01,.1)}`:$}
        ${Do(t.type)?this.len(this.t("outdoor_height"),t.height??Wn[t.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,z(s)))}),.05,.1):t.type==="balcony"?this.len(this.t("balcony_rail"),t.height??1,s=>this.updateOutdoor({height:Math.min(2,Math.max(.4,z(s)))}),.05,.4):$}
        ${this.len(this.t("outdoor_offset"),t.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,z(s)))||null}),.05)}
        ${t.type!=="pool"?v`${this.len(this.t("outdoor_slope"),t.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,z(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!e} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${Bs.map(s=>v`<option value=${s} ?selected=${s===(t.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
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
    </section>`}openWallView(t,e,n=null){this._wallView={roomId:t,edge:e},this._wallSel=n,this.wallDrag=null}openWallViewFor(t){let e=this.floor;if(!e)return;let n=e.rooms.find(s=>s.points.length>=3&&N([t.x,t.z],s.points));if(!n)return;let o=-1,i=1/0;n.points.forEach((s,a)=>{let l=n.points[(a+1)%n.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1])||1,d=Math.max(0,Math.min(1,((t.x-s[0])*(l[0]-s[0])+(t.z-s[1])*(l[1]-s[1]))/(c*c))),p=Math.hypot(t.x-(s[0]+(l[0]-s[0])*d),t.z-(s[1]+(l[1]-s[1])*d));p<i&&(i=p,o=a)}),o>=0&&this.openWallView(n.id,o,t.id)}openRoomWalls(t){let e=this.floor;if(!e)return;let n=0,o=-1;t.points.forEach((i,s)=>{let a=eo(Ne(t,s),e,t).length;a>o&&(o=a,n=s)}),this.openWallView(t.id,n)}setWallView3d(t){this._wallView3d=t,this.wall3dKey="";try{localStorage.setItem("neonplan3d.wall3d",t?"1":"0")}catch{}}setupWall3d(t,e,n){let o=`${e.id}|${n}`;if(this.wall3dKey===o&&this.wall3dEl===t)return;let i=this.wall3dEl!==t;this.wall3dKey=o,this.wall3dEl=t,i&&t.addEventListener("pointerdown",s=>this.runDown3d(s),{capture:!0}),(async()=>{var h;let s;for(let f=0;f<120&&!(s=t.viewer);f++)await new Promise(m=>setTimeout(m,50));i&&await new Promise(f=>setTimeout(f,250));let a=this.floor;if(!s||!a||this.wall3dKey!==o)return;if(!s.__npWall){s.__npWall=!0,s.updateWalls=function(){for(let m of this.floors)m.mask.standing.value=65535,m.mask.glass.value=0},s.labels.style.display="none";let f=new CSSStyleSheet;f.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),t.shadowRoot&&(t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,f]),s.camera.fov=58,s.camera.updateProjectionMatrix(),s.controls.minRadius=.6,s.controls.leftDragTurns=!1}let l=Ne(e,n),c=Math.max(1.5,...e.points.map(f=>pt(l,f).d)),d=ce(l,l.length/2,0),p=a.elevation+(((h=s.floorMap.get(a.id))==null?void 0:h.y)??0)+1.15;s.controls.maxRadius=Math.max(1.4,c-.25);let u=s.getView();u.target.set(d[0],p,d[1]),s.flyTo({...u,radius:Math.max(1.2,Math.min(c*.8,c-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},i?0:650),s.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let t=()=>{var h,f;this.liftRaf=0;let e=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!(e!=null&&e.isConnected)||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(t),!n))return;let o=this.floor,i=this._wallSel?o==null?void 0:o.furniture.find(m=>m.id===this._wallSel):void 0,s=e.viewer;if(!i||!o||!s||!Te(i)||i.locked){n.hidden=!0;return}let a=zt(o,i),l=o.elevation+(((h=s.floorMap.get(o.id))==null?void 0:h.y)??0)+a+i.h,c=s.camera.position.clone().set(i.x,l+.12,i.z).project(s.camera);if(c.z>1){n.hidden=!0;return}n.hidden=!1;let d=e.getBoundingClientRect(),p=((f=n.offsetParent)==null?void 0:f.getBoundingClientRect())??d;n.style.transform=`translate(${d.left-p.left+(c.x+1)/2*d.width}px, ${d.top-p.top+(1-c.y)/2*d.height}px)`;let u=n.querySelector("b");u&&(u.textContent=this.m(Math.round(a*100)/100,2))};this.liftRaf=requestAnimationFrame(t)}liftDown(t){let e=this.floor,n=this._wallSel?e==null?void 0:e.furniture.find(d=>d.id===this._wallSel):void 0,o=this.wall3dEl,i=o==null?void 0:o.viewer;if(!e||!n||!i||!this.isAdmin)return;t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId);let s=Math.hypot(i.camera.position.x-n.x,i.camera.position.z-n.z)||1,a=this.wall3dEl.clientHeight||1,l=e.rooms.find(d=>d.points.length>=3&&N([n.x,n.z],d.points)),c=Math.max(e.height,(l==null?void 0:l.ceiling_height)??0);this.lift={id:n.id,y:zt(e,n),startY:t.clientY,perPx:2*s*Math.tan(i.camera.fov*Math.PI/360)/a,base:this._doc,top:Math.max(0,c-n.h),moved:!1}}liftMove(t){var s;let e=this.lift,n=this._wallView?(s=this.floor)==null?void 0:s.rooms.find(a=>a.id===this._wallView.roomId):void 0;if(!e||!n)return;let o=(e.startY-t.clientY)*e.perPx;if(!e.moved&&Math.abs(t.clientY-e.startY)<3)return;e.moved=!0;let i=Math.min(e.top,Math.max(0,Math.round((e.y+o)*100)/100));this.moveOnWall(Ne(n,this._wallView.edge),e.id,0,i,e.base,!1)}liftUp(){let t=this.lift;this.lift=null,t!=null&&t.moved&&this.pushHistory(t.base)}wallPickTip=[0,0];toggleWallPick(t){var o;let e=(o=t.closest(".fp3d-toolbar"))==null?void 0:o.getBoundingClientRect(),n=t.getBoundingClientRect();this.wallPickTip=e?[n.left-e.left+n.width/2,n.bottom-e.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(t){let e=this.floor;if(!e)return;let n=null;for(let o of e.rooms){if(o.points.length<3)continue;let i=N(t,o.points)?-.25:0;o.points.forEach((s,a)=>{let l=o.points[(a+1)%o.points.length],c=(l[0]-s[0])**2+(l[1]-s[1])**2||1,d=Math.max(0,Math.min(1,((t[0]-s[0])*(l[0]-s[0])+(t[1]-s[1])*(l[1]-s[1]))/c)),p=Math.hypot(t[0]-(s[0]+(l[0]-s[0])*d),t[1]-(s[1]+(l[1]-s[1])*d));p<.6&&(!n||p+i<n.d)&&(n={room:o,edge:a,d:p+i})})}if(!n){let o=e.rooms.find(i=>i.points.length>=3&&N(t,i.points));if(!o)return;this._wallPick=!1,this.openRoomWalls(o);return}this._wallPick=!1,this.openWallView(n.room.id,n.edge)}turnOnWall(t,e){let n=this._doc.settings.wall_interior;this.change((o,i)=>{let s=i.furniture.find(c=>c.id===t);if(!s)return;s.rotation=Math.round((e%360+360)%360);let[a,l]=hi(i,s,s.x,s.z,n,.6);Object.assign(s,{x:a,z:l})})}moveFromWall(t,e,n){this.change((o,i)=>{let s=i.furniture.find(a=>a.id===e);s&&(s.x=Math.round((s.x+t.n[0]*n)*1e3)/1e3,s.z=Math.round((s.z+t.n[1]*n)*1e3)/1e3)})}moveOnWall(t,e,n,o,i=this._doc,s=!0){this.change((a,l)=>{let c=l.furniture.find(d=>d.id===e);c&&(Object.assign(c,Cr(t,c,n)),o!==null&&(c.mount_y=Math.round(Math.min(Hi,Math.max(0,o))*1e3)/1e3))},i,s)}wallTurn(t,e){let n=Math.atan2(-t.n[0],t.n[1])*180/Math.PI;return((e.rotation-n)%360+360)%360}wallPicKey(t,e){return`${e.type}|${e.w}|${e.d}|${e.h}|${e.variant??""}|${Math.round(this.wallTurn(t,e))}`}async askWallPics(t,e){let n=e.filter(o=>!this.wallPicsAsked.has(this.wallPicKey(t,o)));if(n.length){for(let o of n)this.wallPicsAsked.add(this.wallPicKey(t,o));try{let o=await Ci();for(let i of n){let s=o.furnitureFront({type:i.type,w:i.w,d:i.d,h:i.h,variant:i.variant,lamp:Jo[i.type]??null},this.wallTurn(t,i),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(t,i),s)}}catch{}this._wallPicTick++}}renderWallView(){var j;let t=this._wallView,e=this.floor,n=t?e==null?void 0:e.rooms.find(R=>R.id===t.roomId):void 0;if(!t||!e||!n||t.edge>=n.points.length)return $;let o=n.points.length,i=Ne(n,t.edge),s=i.length,a=Math.max(e.height,n.ceiling_height??0),l=eo(i,e,n),c=fi(i,e),d=R=>i.rightward?R:s-R,p=(R,V)=>[Math.min(d(R),d(V)),Math.abs(V-R)],u=R=>a-R,h=this.isAdmin,f=this._wallSel?e.furniture.find(R=>R.id===this._wallSel):void 0,m=f?l.find(R=>R.id===f.id)??(()=>{let R=Wt(f).map(H=>pt(i,H)),V=zt(e,f);return{kind:"furniture",id:f.id,s0:Math.min(...R.map(H=>H.s)),s1:Math.max(...R.map(H=>H.s)),y0:V,y1:V+f.h,d:Math.min(...R.map(H=>H.d))}})():null,_=!!f&&Te(f),g=R=>this.m(R,2),b=R=>{let V=R.currentTarget.closest("svg"),H=V.createSVGPoint();return H.x=R.clientX,H.y=R.clientY,H.matrixTransform(V.getScreenCTM().inverse())},y=R=>[0,s,...l.filter(V=>V.id!==R).flatMap(V=>[V.s0,V.s1]),...c.flatMap(V=>[V.s0,V.s1])],M=(R,V)=>{if(!h)return;R.stopPropagation();let H=l.find(U=>U.id===V),C=e.furniture.find(U=>U.id===V),W=b(R);R.currentTarget.closest("svg").setPointerCapture(R.pointerId),this.wallDrag={id:V,x:W.x,y:W.y,base:this._doc,s0:H.s0,y0:H.y0,lift:!!C&&Te(C),moved:!1},this._wallSel=V,this._runSel=null},P=R=>{let V=this.wallDrag;if(!V)return;let H=b(R),C=H.x-V.x,W=V.y-H.y;if(!V.moved&&Math.hypot(C,W)<.02)return;V.moved=!0;let U=l.find(_t=>_t.id===V.id),K=U?U.s1-U.s0:0,X=V.s0+(i.rightward?C:-C);if(X=Math.round(X*100)/100,!R.altKey)for(let _t of y(V.id))Math.abs(X-_t)<.04?X=_t:Math.abs(X+K-_t)<.04&&(X=_t-K);let ht=V.lift?Math.round((V.y0+W)*100)/100:null;this.moveOnWall(i,V.id,X-V.s0,ht,V.base,!1)},I=()=>{let R=this.wallDrag;this.wallDrag=null,R!=null&&R.moved&&this.pushHistory(R.base)},F=R=>{if(this._runMode&&(R.key==="Escape"||R.key==="Enter")){R.preventDefault(),R.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(R.key==="Escape"){this._wallView=null;return}if(!m&&(R.key==="ArrowLeft"||R.key==="ArrowRight")){R.preventDefault(),A(R.key==="ArrowLeft"?w:x);return}if(!m||!h||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(R.key)||R.target.closest("input, select, textarea"))return;R.preventDefault();let V=R.shiftKey?.1:.01,H=R.key==="ArrowRight"?V:R.key==="ArrowLeft"?-V:0,C=i.rightward?H:-H,W=R.key==="ArrowUp"?V:R.key==="ArrowDown"?-V:0;this.moveOnWall(i,m.id,C,_&&W?m.y0+W:null)},S=m?(()=>{let[R,V]=p(m.s0,m.s1),H=u(m.y0),C=Math.min(a+.25,u(0)+.25);return T`<g class="fp3d-wv-dims">
            ${R>.03?T`<line x1="0" y1=${C} x2=${R} y2=${C} /><text x=${R/2} y=${C-.05}>${g(R)}</text>`:$}
            ${s-R-V>.03?T`<line x1=${R+V} y1=${C} x2=${s} y2=${C} /><text x=${R+V+(s-R-V)/2} y=${C-.05}>${g(s-R-V)}</text>`:$}
            ${m.y0>.03?T`<line x1=${R+V/2} y1=${H} x2=${R+V/2} y2=${a} /><text x=${R+V/2+.05} y=${(H+a)/2} class="fp3d-wv-up">${g(m.y0)}</text>`:$}
          </g>`})():$,x=(t.edge+(i.rightward?1:-1)+o)%o,w=(t.edge+(i.rightward?-1:1)+o)%o,k=R=>this.t("wall_n",{a:R+1,b:(R+1)%o+1}),A=R=>this.openWallView(n.id,R);this._wallPicTick,this.askWallPics(i,l.map(R=>e.furniture.find(V=>V.id===R.id)).filter(R=>!!R));let E=Math.max(.09,Math.min(.16,s/40)),L=this.canLayRuns?this.runPool:void 0,O=this.runCtx3d=L?{frame:i,floor:e,room:n,key:`${n.id}|${t.edge}`,L:s,H:a,gap:(We(e,n.id,i.a,i.b)?this._doc.settings.wall_interior/2:0)+Ja,runs:Kr(i,(((j=L.pool)==null?void 0:j.pipes)??[]).filter(R=>R.floor_id===e.id),rt(this._doc,e,L)),pool:L,pt:R=>{let V=b(R);return{s:i.rightward?V.x:s-V.x,y:a-V.y}}}:null;return v`<div class="fp3d-wv-veil" @click=${R=>R.target===R.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${F}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${k(w)}`} @click=${()=>A(w)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:t.edge+1,b:(t.edge+1)%o+1})} · ${this.m(s,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${k(x)}`} @click=${()=>A(x)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${O&&h?v`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:$}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(i,n,O)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${k(w)}`} @click=${()=>A(w)}>‹<small>${k(w)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${k(x)}`} @click=${()=>A(x)}>›<small>${k(x)}</small></button>
        ${this._wallView3d?v`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${ms(R=>R&&this.setupWall3d(R,n,t.edge))}
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
              ?furnish=${h}
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
              @furniture-select=${R=>this._wallSel=R.detail.id}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${R=>this.liftDown(R)} @pointermove=${R=>this.liftMove(R)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:v`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""}"
          viewBox="${-.5} ${-.35} ${s+1} ${a+.9}"
          preserveAspectRatio="xMidYMid meet"
          @pointerdown=${R=>{O&&this._runMode?this.runDown(R,O):this._runSel&&(this._runSel=null)}}
          @pointermove=${R=>{if(P(R),O&&this.jointDrag)this.jointMove(R,O);else if(O&&this.fitDrag)this.fittingMove(R,O);else if(O&&this.runDrag)this.runPointMove(R,O);else if(O&&this._runMode==="draw"&&this._runDraft){let V=O.pt(R);this.runHover=[V.s,V.y],this.requestUpdate()}}}
          @pointerup=${()=>{I(),this.runPointUp(),this.fittingUp(O);let R=this.jointDrag;this.jointDrag=null,R!=null&&R.moved?this.pushHistory(R.base):R&&O&&this.openCard(O.pool.id,`joint:${R.id}`)}}
          @pointercancel=${()=>{I(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${E}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${s} height=${a} />
          ${Array.from({length:Math.floor(a/.5)},(R,V)=>T`<line class="fp3d-wv-grid" x1="0" x2=${s} y1=${u((V+1)*.5)} y2=${u((V+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${u((V+1)*.5)+.03}>${((V+1)*.5).toFixed(1)}</text>`)}
          ${c.map(R=>{let[V,H]=p(R.s0,R.s1),C=e.openings.find(U=>U.id===R.id),W=(C==null?void 0:C.type)==="window"?this.t("opening_window"):(C==null?void 0:C.type)==="garage"?this.t("opening_garage"):this.t("opening_door");return T`<rect class="fp3d-wv-hole ${(C==null?void 0:C.type)==="window"?"fp3d-wv-window":""}" x=${V} y=${u(R.y1)} width=${H} height=${R.y1-R.y0} />
              ${H>E*3.5?T`<text class="fp3d-wv-hole-label" x=${V+H/2} y=${u(R.y1)+E*1.3} style="font-size:${E*.85}px">${W}</text>`:$}`})}
          ${l.map(R=>{let[V,H]=p(R.s0,R.s1),C=e.furniture.find(ht=>ht.id===R.id),W=C.name||Fe(this.hass,C.type),U=R.y1-R.y0,K=this.wallPics.get(this.wallPicKey(i,C)),X=d(pt(i,[C.x,C.z]).s);return T`<g class="fp3d-wv-item ${K?"fp3d-wv-pic":""} ${R.id===this._wallSel?"fp3d-wv-sel":""}" @pointerdown=${ht=>M(ht,R.id)} @dblclick=${()=>{this._wallView=null,this.selectItem("furniture",R.id)}}>
              ${K?T`<image href=${K.url} x=${X+K.x0} y=${u(R.y0+K.y1)} width=${K.x1-K.x0} height=${K.y1-K.y0} preserveAspectRatio="none" />`:$}
              <rect x=${V} y=${u(R.y1)} width=${H} height=${Math.max(.02,U)}><title>${W}</title></rect>
              ${!K&&H>E*3&&U>E*1.4?T`<text x=${V+H/2} y=${u(R.y1)+Math.min(U/2,E*1.6)+E*.35} style="font-size:${E}px">${W}</text>`:$}
            </g>`})}
          ${S}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${s+.3} y1=${a} y2=${a} />
          ${O?this.renderRuns(O,d,u):$}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${O&&(this._runMode||this._runSel&&!m)?this.renderRunFoot(O):m&&f?v`<b>${f.name||Fe(this.hass,f.type)}</b>
                ${this.fixButton("furniture",m.id)}
                ${O&&Ot.includes(f.type)?v`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(O.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:$}
                ${f.locked&&h?v`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:$}
                ${this.len(this.t("wall_view_left"),Math.round(p(m.s0,m.s1)[0]*1e3)/1e3,R=>{let V=R-p(m.s0,m.s1)[0];this.moveOnWall(i,m.id,i.rightward?V:-V,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,m.d)*1e3)/1e3,R=>this.moveFromWall(i,m.id,R-m.d),.01,0)}
                ${_?this.len(this.t("mount_height"),Math.round(m.y0*1e3)/1e3,R=>this.moveOnWall(i,m.id,0,R),.01,0):v`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${h&&!f.locked?v`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,R=>this.turnOnWall(f.id,R),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:$}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",m.id)}}>${this.t("wall_view_form")}</button>`:v`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
        </div>
      </div>
    </div>`}addOnWall(t,e,n){let o=this.floor;if(!o||!this.isAdmin)return;let[i,s,a]=ie(t),l=[...eo(e,o,n).map(m=>[m.s0,m.s1]),...fi(e,o).filter(m=>m.y0<.05).map(m=>[m.s0,m.s1])],c=Math.max(0,e.length/2-i/2);for(let m=.1;m+i<=e.length-.05;m+=.05)if(!l.some(([_,g])=>m<g+.05&&m+i>_-.05)){c=m;break}let d=We(o,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,[p,u]=ce(e,c+i/2,d+s/2+.01),h=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),f={id:B("furniture"),type:t,x:z(p),z:z(u),rotation:h,w:i,d:s,h:a,variant:null};this.change((m,_)=>_.furniture.push(f)),this._runSel=null,this._runMode=null,this._wallSel=f.id}renderWallKit(t,e,n){let o=!!n,i=ut("energy_pro");if(!this.isAdmin||!o&&!i)return $;let s=l=>v`<button class="fp3d-btn" @click=${()=>this.addOnWall(l,t,e)}>+ ${this.t(`furn_${l}`)}</button>`,a=(l,c)=>v`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,l)}>+ ${this.t(c)}</button>`;return v`<aside class="fp3d-wv-kit">
      ${o?v`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${a("valve","wall_run_valve")} ${a("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(l=>v`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?null:l}}>+ ${this.t(`wall_kit_${l}`)}</button>`)}`:$}
      ${i?v`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`:$}
    </aside>`}get runPool(){var t;return this.poolArea??((t=this.floor)==null?void 0:t.outdoor.find(e=>e.type==="pool"&&e.points.length>=3))}get canLayRuns(){return Ft("pool")&&!!this.runPool}runFrame(t){var i;let[e,n]=t.split("|"),o=(i=this.floor)==null?void 0:i.rooms.find(s=>s.id===e);return o&&Number(n)<o.points.length?Ne(o,Number(n)):null}docWithDraft(){let t=this._runDraft;if(!t||!this._wallView)return this._doc;let e=[...t.from||!t.anchor?[]:[t.anchor],...t.pts];if(!e.length)return this._doc;let n=structuredClone(this._doc),o=n.floors.find(a=>a.outdoor.some(l=>l.id===t.pool)),i=o==null?void 0:o.outdoor.find(a=>a.id===t.pool);if(!o||!i)return this._doc;i.pool??={};let s={id:"__draft",from:t.from,to:"",floor_id:o.id,points:e.map(a=>[a[0],a[2]]),heights:e.map(a=>a[1])};return i.pool.pipes=[...i.pool.pipes??[],s],n}runLast(t,e){var i,s;if(t.pts.length)return t.pts[t.pts.length-1];if(t.fromT)return t.fromT;let n=rt(this._doc,e.floor,e.pool);if(t.extend){let a=(s=(i=e.pool.pool)==null?void 0:i.pipes)==null?void 0:s.find(c=>c.id===t.extend.pipe),l=a?Mt(a,n):[];return(t.extend.end==="to"?l[l.length-1]:l[0])??null}let o=n(t.from);return o?[o.x,o.y,o.z]:null}runPick(t,e,n,o=!1){var l;if(!o){for(let c of t.runs)for(let d of c.ends)if(Math.hypot(d.s-e,d.y-n)<.12)return{end:{pipe:c.id,end:d.end}}}let i=rt(this._doc,t.floor,t.pool),s=null,a=[...t.floor.furniture.filter(c=>Ot.includes(c.type)).flatMap(c=>pe(c.type).length?pe(c.type).map(d=>`dev:${c.id}:${d}`):[`dev:${c.id}`]),...(((l=t.pool.pool)==null?void 0:l.joints)??[]).map(c=>c.kind==="wall"||c.kind==="floor"?`joint:${c.id}:inside`:`joint:${c.id}`)];for(let c of o?[]:a){let d=i(c);if(!d)continue;let p=pt(t.frame,[d.x,d.z]);if(p.d<-.3||p.d>1.6)continue;let u=Math.hypot(p.s-e,d.y-n);u<.12&&(!s||u<s.d)&&(s={node:c,d:u})}if(s)return{node:s.node};for(let c of t.runs)for(let d of c.pieces){let[p,u]=[d.s1-d.s0,d.y1-d.y0],h=p*p+u*u,f=h>0?Math.max(0,Math.min(1,((e-d.s0)*p+(n-d.y0)*u)/h)):0,[m,_]=[d.s0+p*f,d.y0+u*f];if(Math.hypot(m-e,_-n)<.07)return{pipe:{id:c.id,p:de(t.frame,m,_,d.d0+(d.d1-d.d0)*f)}}}return{}}runDown(t,e){if(!this._runMode||!this.isAdmin)return;t.stopPropagation();let{s:n,y:o}=e.pt(t);this.runAt(e,n,o,t.altKey,t.detail,null)}runDown3d(t){var b,y;let e=this.runCtx3d;if(!this._runMode||!e||t.button!==0||!this.isAdmin||!this._wallView3d)return;let n=(b=this.wall3dEl)==null?void 0:b.viewer;if(!n)return;t.stopPropagation(),t.preventDefault();let o=n.renderer.domElement.getBoundingClientRect(),[i,s]=[t.clientX-o.left,t.clientY-o.top],a=n.furnitureIdAt(i,s),l=a?e.floor.furniture.find(M=>M.id===a&&Ot.includes(M.type)):void 0,c=n.pointerRay(i,s),d=ce(e.frame,0,e.gap),p=e.frame.n,u=c.d[0]*p[0]+c.d[2]*p[1];if(Math.abs(u)<1e-6)return;let h=((d[0]-c.o[0])*p[0]+(d[1]-c.o[2])*p[1])/u;if(h<=0&&!l)return;let f=[c.o[0]+c.d[0]*h,c.o[1]+c.d[1]*h,c.o[2]+c.d[2]*h],m=e.floor.elevation+(((y=n.floorMap.get(e.floor.id))==null?void 0:y.y)??0),_=rt(this._doc,e.floor,e.pool),g=()=>{let M=pe(l.type);if(!M.length)return`dev:${l.id}`;let P=I=>{let F=_(I),S=[F.x-c.o[0],F.y+m-c.o[1],F.z-c.o[2]],x=S[0]*c.d[0]+S[1]*c.d[1]+S[2]*c.d[2];return Math.hypot(S[0]-c.d[0]*x,S[1]-c.d[1]*x,S[2]-c.d[2]*x)};return M.map(I=>`dev:${l.id}:${I}`).sort((I,F)=>P(I)-P(F))[0]};this.runAt(e,pt(e.frame,[f[0],f[2]]).s,f[1]-m,t.altKey,t.detail,l&&this._runMode==="draw"?g():null)}runAt(t,e,n,o,i,s){let a=this._runMode;if(!a)return;if(a==="hole_wall"||a==="hole_floor"||a==="tee"||a==="y")return this.placeJoint(t,a,e,n);let l=s?{node:s}:this.runPick(t,e,n,a!=="draw");if(a!=="draw"){l.pipe&&this.addFitting(t,l.pipe.id,l.pipe.p,a),this._runMode=null;return}let c=this._runDraft;if(!c){let d={pool:t.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:t.key,d:t.gap},p;l.end?p={...d,extend:l.end}:l.node?p={...d,from:l.node}:l.pipe?p={...d,fromT:l.pipe.p}:p={...d,pts:[de(t.frame,Math.round(e*20)/20,Math.round(n*20)/20,t.gap)]},this._runDraft={...p,anchor:this.runLast({...p,pts:[]},t)};return}if(i>=2)return this.finishRun("",null);if(l.node&&l.node!==c.from)return this.finishRun(l.node,null);if(l.pipe)return this.finishRun("",l.pipe.p);this._runDraft={...c,pts:[...c.pts,...this.runStep(c,t,e,n,o)],wall:t.key,d:t.gap}}runStep(t,e,n,o,i){let s=Math.round(n*20)/20,a=Math.round(o*20)/20,l=[],c=this.runLast(t,e);if(c&&t.wall!==e.key){let d=this.runFrame(t.wall),p=d&&Hr(d,t.d,e.frame,e.gap);p&&(c=[z(p[0]),c[1],z(p[1])],l.push(c))}if(c&&!i){let d=pt(e.frame,[c[0],c[2]]);d.d>-.35&&d.d<.6&&(Math.abs(s-d.s)<Math.abs(a-c[1])?s=d.s:a=c[1])}return l.push(de(e.frame,s,a,e.gap)),l.map(d=>[z(d[0]),z(d[1]),z(d[2])])}finishRun(t,e,n=[],o){let i=this._runDraft,s=this.floor;if(this._runDraft=null,!i||!s)return;let a=[...i.pts,...n];if(!a.length&&!e&&(!t||t===i.from)&&!i.fromT)return;let l=null;this.changePool(i.pool,(c,d)=>{let p=c.joints??=[],u=c.pipes??=[],h=rt(this._doc,s,d),f=S=>{let x=S.startsWith("joint:")?p.find(w=>`joint:${w.id}`===S):void 0;return x?{x:x.x,z:x.z,y:x.y}:h(S)},m=S=>{let x=null;for(let k of u){let A=Be(Mt(k,f),S);A&&A.d<.12&&(!x||A.d<x.d)&&(x={pipe:k,d:A.d})}let w=x&&bi(x.pipe,f,S,B("joint"),B("pipe"));return!x||!w?"":(p.push(w.joint),u.splice(u.indexOf(x.pipe),1,w.first,w.second),`joint:${w.joint.id}:out2`)},_=(S,x=[])=>{let{kind:w,id:k,port:A}=tt(S),E=w==="joint"&&!A?p.find(j=>j.id===k):void 0;if(!E||!E.kind)return S;if(E.kind==="wall"||E.kind==="floor")return`joint:${k}:inside`;let L=new Set([...u.flatMap(j=>[j.from,j.to]),...x]),O=Ue(E.kind).find(j=>!L.has(`joint:${k}:${j}`));return O?`joint:${k}:${O}`:S},g=i.fromT?m(i.fromT):_(i.from),b=e?m(e):_(t,[g]),y=a.map(S=>[z(S[0]),z(S[2])]),M=a.map(S=>z(S[1])),P=i.extend,I=P&&u.find(S=>S.id===P.pipe);if(P&&I){Object.assign(I,St(I,f)),P.end==="to"?(I.points=[...I.points,...y],I.heights=[...I.heights??[],...M],I.to=b):(I.points=[...y.reverse(),...I.points],I.heights=[...M.reverse(),...I.heights??[]],I.from=b),o!==void 0&&(I.height=o),l=I.id;return}let F={id:B("pipe"),from:g,to:b,floor_id:s.id,points:y,heights:M,height:o??M[M.length-1]??null};u.push(F),l=F.id}),l&&(this._runSel={pipe:l,pt:null}),this._runMode=null}placeJoint(t,e,n,o){let i=t.gap-Ja,s=Math.round(n*100)/100,a=Math.round(o*100)/100,l=We(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c;if(e==="hole_wall"){let[d,p]=Ye(t.frame,s,i);c={id:B("joint"),kind:"wall",x:d,z:p,y:Math.max(.05,a),nx:z(t.frame.n[0]),nz:z(t.frame.n[1]),depth:z(l)}}else if(e==="hole_floor"){let[d,p]=Ye(t.frame,s,t.gap);c={id:B("joint"),kind:"floor",x:d,z:p,y:0}}else{let[d,p]=Ye(t.frame,s,t.gap);c={id:B("joint"),kind:e,x:d,z:p,y:a}}this.changePool(t.pool.id,d=>d.joints=[...d.joints??[],c]),this._runMode=null}runOut(t,e){let n=this._runDraft,o=n&&this.runLast(n,t);if(!n||!o)return;if(e==="down")return this.finishRun("",null,[[o[0],-.3,o[2]]],-.3);let i=pt(t.frame,[o[0],o[2]]),s=We(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,a=de(t.frame,i.s,o[1],-(s+.15));this.finishRun("",null,[[z(a[0]),o[1],z(a[2])]],o[1])}addFitting(t,e,n,o){let i=rt(this._doc,t.floor,t.pool);this.changePool(t.pool.id,s=>{var c;let a=(c=s.pipes)==null?void 0:c.find(d=>d.id===e),l=a&&Be(Mt(a,i),n);!a||!l||(a.fittings=[...a.fittings??[],{id:B("fit"),kind:o,at:z(l.at),...o==="valve"?{open:!0}:{}}])}),this._runSel={pipe:e,pt:null}}runPieceDown(t,e,n,o){var h,f;if(this._runMode)return;if(t.stopPropagation(),this._wallSel=null,((h=this._runSel)==null?void 0:h.pipe)!==n.id||!this.isAdmin){this._runSel={pipe:n.id,pt:null};return}let{s:i,y:s}=e.pt(t),a=n.pieces.find(m=>m.k===o),l=Math.hypot(a.s1-a.s0,a.y1-a.y0)>0?Math.hypot(i-a.s0,s-a.y0)/Math.hypot(a.s1-a.s0,a.y1-a.y0):0,c=a.d0+(a.d1-a.d0)*Math.min(1,l),d=this._doc,p=rt(d,e.floor,e.pool),u=-1;this.changePool(e.pool.id,m=>{var g;let _=(g=m.pipes)==null?void 0:g.find(b=>b.id===n.id);_&&(Object.assign(_,St(_,p)),u=Math.max(0,Math.min(_.points.length,o+1-bn(_,p))),_.points.splice(u,0,Ye(e.frame,i,c)),_.heights.splice(u,0,z(s)))}),!(u<0)&&(this._runSel={pipe:n.id,pt:u},this.runDrag={pipe:n.id,i:u,d:c,base:d,moved:!0},(f=t.currentTarget.closest("svg"))==null||f.setPointerCapture(t.pointerId))}runPointDown(t,e,n,o){var c,d,p;if(this._runMode||!this.isAdmin)return;t.stopPropagation();let i=rt(this._doc,e.floor,e.pool);if(t.detail>=2){this.changePool(e.pool.id,u=>{var f;let h=(f=u.pipes)==null?void 0:f.find(m=>m.id===n);h&&(Object.assign(h,St(h,i)),h.points.splice(o,1),h.heights.splice(o,1))}),this._runSel={pipe:n,pt:null};return}let s=(d=(c=e.pool.pool)==null?void 0:c.pipes)==null?void 0:d.find(u=>u.id===n),a=s&&St(s,i),l=a==null?void 0:a.points[o];l&&(this._runSel={pipe:n,pt:o},this.runDrag={pipe:n,i:o,d:pt(e.frame,l).d,base:this._doc,moved:!1},(p=t.currentTarget.closest("svg"))==null||p.setPointerCapture(t.pointerId))}runPointMove(t,e){var d,p;let n=this.runDrag;if(!n)return;let{s:o,y:i}=e.pt(t);o=Math.round(o*100)/100,i=Math.round(i*100)/100;let s=rt(n.base,e.floor,e.pool),a=n.base.floors.flatMap(u=>u.outdoor).find(u=>u.id===e.pool.id),l=(p=(d=a==null?void 0:a.pool)==null?void 0:d.pipes)==null?void 0:p.find(u=>u.id===n.pipe);if(!l)return;let c=St(l,s);if(!t.altKey){let u=Mt(c,s),h=bn(c,s);for(let f of[u[n.i+h-1],u[n.i+h+1]]){if(!f)continue;let m=pt(e.frame,[f[0],f[2]]);Math.abs(m.s-o)<.04&&(o=z(m.s)),Math.abs(f[1]-i)<.04&&(i=z(f[1]))}}n.moved=!0,this.change((u,h)=>{var m,_,g;let f=(g=(_=(m=h.outdoor.find(b=>b.id===e.pool.id))==null?void 0:m.pool)==null?void 0:_.pipes)==null?void 0:g.find(b=>b.id===n.pipe);f&&(Object.assign(f,St(f,s)),f.points[n.i]=Ye(e.frame,o,n.d),f.heights[n.i]=i)},n.base,!1)}runPointUp(){let t=this.runDrag;this.runDrag=null,t!=null&&t.moved&&this.pushHistory(t.base)}fittingDown(t,e,n,o){var i;if(!(this._runMode||!this.isAdmin)){if(t.stopPropagation(),this._runSel={pipe:n,pt:null},t.detail>=2){this.changePool(e.pool.id,s=>{var l;let a=(l=s.pipes)==null?void 0:l.find(c=>c.id===n);a!=null&&a.fittings&&(a.fittings=a.fittings.filter(c=>c.id!==o))});return}this.fitDrag={pipe:n,id:o,base:this._doc,moved:!1,x:t.clientX,y:t.clientY},(i=t.currentTarget.closest("svg"))==null||i.setPointerCapture(t.pointerId)}}jointDown(t,e,n){var o;this._runMode||!this.isAdmin||(t.stopPropagation(),this.jointDrag={id:e,d:n,base:this._doc,moved:!1},(o=t.currentTarget.closest("svg"))==null||o.setPointerCapture(t.pointerId))}jointMove(t,e){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:o,y:i}=e.pt(t),s=t.altKey?o:Math.round(o*100)/100,a=t.altKey?i:Math.round(i*100)/100;this.change((l,c)=>{var p,u,h;let d=(h=(u=(p=c.outdoor.find(f=>f.id===e.pool.id))==null?void 0:p.pool)==null?void 0:u.joints)==null?void 0:h.find(f=>f.id===n.id);d&&([d.x,d.z]=Ye(e.frame,s,n.d),d.kind!=="floor"&&(d.y=Math.max(d.kind==="wall"?.05:-1,z(a))))},n.base,!1)}fittingMove(t,e){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)<4)return;n.moved=!0;let{s:o,y:i}=e.pt(t),s=e.runs.find(d=>d.id===n.pipe);if(!s)return;let a=null;for(let d of s.pieces){let[p,u]=[d.s1-d.s0,d.y1-d.y0],h=p*p+u*u,f=h>0?Math.max(0,Math.min(1,((o-d.s0)*p+(i-d.y0)*u)/h)):0,[m,_]=[d.s0+p*f,d.y0+u*f],g=Math.hypot(m-o,_-i);(!a||g<a.d)&&(a={p:de(e.frame,m,_,d.d0+(d.d1-d.d0)*f),d:g})}if(!a)return;let l=rt(n.base,e.floor,e.pool),c=a.p;this.change((d,p)=>{var m,_,g,b;let u=(g=(_=(m=p.outdoor.find(y=>y.id===e.pool.id))==null?void 0:m.pool)==null?void 0:_.pipes)==null?void 0:g.find(y=>y.id===n.pipe),h=(b=u==null?void 0:u.fittings)==null?void 0:b.find(y=>y.id===n.id),f=u&&Be(Mt(u,l),c);h&&f&&(h.at=z(f.at))},n.base,!1)}fittingUp(t){let e=this.fitDrag;if(this.fitDrag=null,!!e){if(e.moved)return this.pushHistory(e.base);t&&this.changePool(t.pool.id,n=>{var i,s,a;let o=(a=(s=(i=n.pipes)==null?void 0:i.find(l=>l.id===e.pipe))==null?void 0:s.fittings)==null?void 0:a.find(l=>l.id===e.id);(o==null?void 0:o.kind)==="valve"&&(o.open=o.open===!1)})}}kitFitting(t,e){this._runDraft=null;let n=t&&this._runSel?t.runs.find(i=>i.id===this._runSel.pipe):void 0;if(!t||!n||!n.pieces.length){this._runMode=this._runMode===e?null:e;return}let o=[...n.pieces].sort((i,s)=>Math.hypot(s.s1-s.s0,s.y1-s.y0)-Math.hypot(i.s1-i.s0,i.y1-i.y0))[0];this.addFitting(t,n.id,de(t.frame,(o.s0+o.s1)/2,(o.y0+o.y1)/2,(o.d0+o.d1)/2),e),this._runMode=null}renderRuns(t,e,n){var f,m;let o=(f=this._runSel)==null?void 0:f.pipe,i=_=>{let g=pt(t.frame,[_[0],_[2]]);return`${e(g.s)},${n(_[1])}`},s=this._runDraft,a=s&&this.runLast(s,t),l=s?[...s.fromT||s.extend||s.from?[this.runLast({...s,pts:[]},t)]:[],...s.pts].filter(_=>!!_):[],c=this.runHover,d=rt(this._doc,t.floor,t.pool),p={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},u=(_,g,b="",y)=>{let M=d(_),P=M&&pt(t.frame,[M.x,M.z]);return M&&P&&P.d>-.6&&P.d<1.6&&P.s>-.2&&P.s<t.L+.2?[T`<g class="fp3d-wv-node ${b} ${y?"fp3d-wv-joint":""}" transform="translate(${e(P.s)} ${n(M.y)})" @pointerdown=${I=>y&&this.jointDown(I,y,P.d)}>
              <circle r="0.05" /><text y="0.11">${g}</text><title>${this.poolNodeLabel(t.pool,_)}</title>
            </g>`]:[]},h=[...t.floor.furniture.flatMap(_=>{if(p[_.type]===void 0)return[];let g=pe(_.type);return g.length?g.flatMap(b=>u(`dev:${_.id}:${b}`,this.t(`port_${b}`))):u(`dev:${_.id}`,p[_.type])}),...(((m=t.pool.pool)==null?void 0:m.joints)??[]).flatMap(_=>_.kind==="wall"||_.kind==="floor"?u(`joint:${_.id}:inside`,this.jointLabel(t.pool,_.id),"fp3d-wv-hole-mark",_.id):u(`joint:${_.id}`,this.jointLabel(t.pool,_.id),"",_.id))];return T`<g class="fp3d-wv-runs">
      ${h}
      ${t.runs.map(_=>T`<g class="fp3d-wv-run ${_.id===o?"fp3d-wv-run-sel":""}">
          ${_.pieces.map(g=>T`<line class=${g.y0<-.01&&g.y1<-.01?"fp3d-wv-under":""} x1=${e(g.s0)} y1=${n(g.y0)} x2=${e(g.s1)} y2=${n(g.y1)} @pointerdown=${b=>this.runPieceDown(b,t,_,g.k)} />`)}
          ${_.ends.map(g=>T`<circle class="fp3d-wv-end" cx=${e(g.s)} cy=${n(g.y)} r="0.035" />`)}
          ${_.fittings.map(g=>g.kind==="valve"?T`<g class="fp3d-wv-valve ${g.open?"":"fp3d-wv-shut"}" transform="translate(${e(g.s)} ${n(g.y)})" @pointerdown=${b=>this.fittingDown(b,t,_.id,g.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${g.open?.11:0} y2=${g.open?0:-.11} />
                </g>`:T`<rect class="fp3d-wv-sight" x=${e(g.s)-.06} y=${n(g.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${b=>this.fittingDown(b,t,_.id,g.id)} />`)}
          ${_.id===o?_.points.map(g=>{var b;return T`<circle class="fp3d-wv-runpt ${((b=this._runSel)==null?void 0:b.pt)===g.i?"fp3d-on":""}" cx=${e(g.s)} cy=${n(g.y)} r="0.04" @pointerdown=${y=>this.runPointDown(y,t,_.id,g.i)} />`}):$}
        </g>`)}
      ${l.length?T`<polyline class="fp3d-wv-draft" points=${l.map(i).join(" ")} />`:$}
      ${a&&c?T`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${i(a).split(",")[0]} y1=${i(a).split(",")[1]} x2=${e(c[0])} y2=${n(c[1])} />`:$}
    </g>`}renderRunFoot(t){var p,u,h;let e=this._runMode,n=this._runDraft;if(e==="hole_wall"||e==="hole_floor"||e==="tee"||e==="y")return v`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="valve"||e==="sight")return v`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="draw")return v`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?v`<button class="fp3d-btn" @click=${()=>this.runOut(t,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(t,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:$}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let o=this._runSel,i=o&&((u=(p=t.pool.pool)==null?void 0:p.pipes)==null?void 0:u.find(f=>f.id===o.pipe));if(!o||!i)return $;let s=rt(this._doc,t.floor,t.pool),a=St(i,s),l=o.pt,c=this.isAdmin,d=i.to?i.from?null:"from":"to";return v`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&((h=a.heights)==null?void 0:h[l])!==void 0?this.len(this.t("wall_run_pt"),a.heights[l]??0,f=>this.changePool(t.pool.id,m=>{var g;let _=(g=m.pipes)==null?void 0:g.find(b=>b.id===i.id);_&&(Object.assign(_,St(_,s)),_.heights[l]=Math.min(10,Math.max(-5,z(f))))}),.01):$}
      ${c?v`<button class="fp3d-btn" @click=${()=>this.kitFitting(t,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(t,"sight")}>${this.t("wall_run_sight")}</button>
            ${d?v`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let f={pool:t.pool.id,from:"",fromT:null,extend:{pipe:i.id,end:d},pts:[],anchor:null,wall:t.key,d:t.gap};this._runDraft={...f,anchor:this.runLast(f,t)}}}>${this.t("wall_run_more")}</button>`:$}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.pool.id,f=>{var _,g;let m=(_=f.pipes)==null?void 0:_.find(b=>b.id===i.id);m&&(Object.assign(m,St(m,s)),[m.from,m.to,m.points,m.heights]=[m.to,m.from,[...m.points].reverse(),[...m.heights??[]].reverse()],m.fittings=(g=m.fittings)==null?void 0:g.map(b=>({...b,at:z(Math.max(0,Wi(m,s)-b.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(t.pool.id,f=>f.pipes=(f.pipes??[]).filter(m=>m.id!==i.id)),this._runSel=null}}>${this.t("delete")}</button>`:$}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){var n;let t=this.outdoorArea;if((t==null?void 0:t.type)==="pool")return t;let e=((n=this.floor)==null?void 0:n.outdoor.filter(o=>o.type==="pool"))??[];return e.length===1?e[0]:void 0}poolDown(t,e,n,o){var p,u,h,f,m,_,g,b,y,M,P;let i=this.floor;if(!i)return!1;let s=this.poolArea,a=((p=e.closest("[data-pool-node]"))==null?void 0:p.getAttribute("data-pool-node"))??null;if(this._jointPlace&&s)return this.isAdmin&&this.placeJointPlan(s,this._jointPlace,n,((u=e.closest("[data-pipe]"))==null?void 0:u.getAttribute("data-pipe"))??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isAdmin)return!0;if(!s){let F=i.outdoor.find(S=>S.type==="pool"&&S.points.length>=3&&N(n,S.points));return F&&(this.selectItem("outdoor",F.id),this._tool="pool",this._pipeMode=!0),!0}let I=(h=e.closest("[data-pipe-end]"))==null?void 0:h.getAttribute("data-pipe-end");if(I&&!this._pipeDraft){let[F,S]=I.split("|"),x=(m=(f=s.pool)==null?void 0:f.pipes)==null?void 0:m.find(k=>k.id===F),w=x&&(S==="to"?x.points[x.points.length-1]:x.points[0]);w&&(this._pipeDraft={from:"",points:[],extend:{pipe:F,end:S,at:w}})}else if(a){let F=this._pipeDraft;F?F.extend?(this.extendPipe(s,F.extend,a,F.points),this._pipeDraft=null):a!==F.from&&(this.addPipe(s.id,F.from,a,F.points),this._pipeDraft=null):this._pipeDraft={from:a,points:[]}}else if(this._pipeDraft){let F=this.snap(n,void 0,t.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[z(F[0]),z(F[1])]]}}return!0}let l=I=>[I.slice(0,I.lastIndexOf(":")),Number(I.slice(I.lastIndexOf(":")+1))];if(s&&this.isAdmin){let I=(_=e.closest("[data-pipe-pt]"))==null?void 0:_.getAttribute("data-pipe-pt");if(I){let[S,x]=l(I);return t.detail>=2?this.change((w,k)=>{var E,L,O,j;let A=(O=(L=(E=k.outdoor.find(R=>R.id===s.id))==null?void 0:E.pool)==null?void 0:L.pipes)==null?void 0:O.find(R=>R.id===S);A==null||A.points.splice(x,1),(j=A==null?void 0:A.heights)==null||j.splice(x,1)}):this.drag={kind:"pipept",pool:s.id,pipe:S,index:x,base:this._doc,moved:!1},!0}let F=(g=e.closest("[data-pipe-seg]"))==null?void 0:g.getAttribute("data-pipe-seg");if(F){let[S,x]=l(F),w=this.snap(n,void 0,t.altKey);return this.change((k,A)=>{var L,O,j,R;let E=(j=(O=(L=A.outdoor.find(V=>V.id===s.id))==null?void 0:L.pool)==null?void 0:O.pipes)==null?void 0:j.find(V=>V.id===S);E==null||E.points.splice(x,0,[z(w[0]),z(w[1])]),(R=E==null?void 0:E.heights)==null||R.splice(x,0,E.heights[x-1]??E.heights[x]??null)}),this._pipeId=S,this.drag={kind:"pipept",pool:s.id,pipe:S,index:x,base:this._doc,moved:!1},!0}}let c=(b=e.closest("[data-pipe]"))==null?void 0:b.getAttribute("data-pipe");if(c)return this._pipeId=c,!0;if(a&&s&&this.isAdmin)return a.startsWith("port:")?this.drag={kind:"poolport",pool:s.id,id:a.slice(5),base:this._doc,moved:!1}:a.startsWith("joint:")?this.drag={kind:"pooljoint",pool:s.id,id:tt(a).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:a.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let I=(y=e.closest("[data-out-box]"))==null?void 0:y.getAttribute("data-out-box");if(I){let[S,x]=l(I);return this.drag={kind:"outbox",id:S,corner:x,base:this._doc,moved:!1},!0}let F=(M=e.closest("[data-out-vertex]"))==null?void 0:M.getAttribute("data-out-vertex");if(F){let[S,x]=l(F);return this.drag={kind:"outvertex",id:S,index:x,base:this._doc,moved:!1},!0}}let d=(P=e.closest("[data-outdoor]"))==null?void 0:P.getAttribute("data-outdoor");return d&&i.outdoor.some(I=>I.id===d&&I.type==="pool")?(this.selectItem("outdoor",d),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:d,start:n,startScreen:o,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(t,e){this.change((n,o)=>{let i=o.outdoor.find(s=>s.id===t);i&&(i.pool??={},e(i.pool,i))})}extendPipe(t,e,n,o){let i=this.floor;if(!i)return;let s=rt(this._doc,i,t);n=this.jointEnd(t,n,o[o.length-1]),this.changePool(t.id,a=>{var d,p;let l=(d=a.pipes)==null?void 0:d.find(u=>u.id===e.pipe);if(!l)return;Object.assign(l,St(l,s));let c=l.heights??[];if(e.end==="to"){let u=c[c.length-1]??l.height??null;l.points=[...l.points,...o],l.heights=[...c,...o.map(()=>u)],l.to=n}else{let u=Wi(l,s),h=c[0]??l.height??null;l.points=[...[...o].reverse(),...l.points],l.heights=[...o.map(()=>h),...c],l.from=n;let f=Wi(l,s)-u;l.fittings=(p=l.fittings)==null?void 0:p.map(m=>({...m,at:z(m.at+f)}))}}),this._pipeId=e.pipe}jointEnd(t,e,n,o=[]){var p,u,h;let{kind:i,id:s,port:a}=tt(e),l=i==="joint"&&!a?(u=(p=t.pool)==null?void 0:p.joints)==null?void 0:u.find(f=>f.id===s):void 0;if(!l)return e;if(l.kind==="wall"||l.kind==="floor"){let f=this._doc.floors.find(b=>b.outdoor.some(y=>y.id===t.id)),m=f&&rt(this._doc,f,t),[_,g]=[m==null?void 0:m(`joint:${s}:inside`),m==null?void 0:m(`joint:${s}:outside`)];return!n||!_||!g?`joint:${s}:inside`:`joint:${s}:${Math.hypot(n[0]-_.x,n[1]-_.z)<=Math.hypot(n[0]-g.x,n[1]-g.z)?"inside":"outside"}`}let c=new Set([...(((h=t.pool)==null?void 0:h.pipes)??[]).flatMap(f=>[f.from,f.to]),...o]),d=Ue(l.kind).find(f=>!c.has(`joint:${s}:${f}`));return d?`joint:${s}:${d}`:e}addPipe(t,e,n,o){let i=this.floor;if(!i)return;let s=i.outdoor.find(l=>l.id===t);s&&(e=this.jointEnd(s,e,o[0]),n=this.jointEnd(s,n,o[o.length-1],[e]));let a={id:B("pipe"),from:e,to:n,floor_id:i.id,points:o};this.changePool(t,l=>l.pipes=[...l.pipes??[],a]),this._pipeId=a.id}addPoolPort(t){var u;let e=this.poolArea;if(!e||!this.isAdmin)return;let n=((u=e.pool)==null?void 0:u.ports)??[],o=e.points.length,i=h=>{let f=e.points[h%o],m=e.points[(h+1)%o];return[(f[0]+m[0])/2,(f[1]+m[1])/2]},[s,a]=Vt(e.points),l=this._doc.floors.flatMap(h=>h.furniture).find(h=>h.type==="pool_filter"||h.type==="pool_pump"),c=n.filter(h=>h.kind==="inlet").length,d=t==="skimmer"?so(e.points,i(0)):t==="inlet"?so(e.points,i(Math.floor(o/2)+c*Math.max(1,Math.floor(o/8)))):t==="drain"?[s,a]:l?[l.x+.8,l.z]:[s,a+3],p={id:B("port"),kind:t,x:z(d[0]),z:z(d[1])};this.changePool(e.id,h=>h.ports=[...n,p])}addPoolDevice(t){let e=this.poolArea;this.addEnergyDevice(t),e&&this.selectItem("outdoor",e.id),this._tool="pool"}deletePoolDevice(t){this.change(e=>{var n;for(let o of e.floors){o.furniture=o.furniture.filter(i=>i.id!==t);for(let i of o.outdoor)(n=i.pool)!=null&&n.pipes&&(i.pool.pipes=i.pool.pipes.filter(s=>s.from!==`dev:${t}`&&s.to!==`dev:${t}`))}})}deletePoolPort(t,e){this.changePool(t,n=>{n.ports=(n.ports??[]).filter(o=>o.id!==e),n.pipes=(n.pipes??[]).filter(o=>o.from!==`port:${e}`&&o.to!==`port:${e}`)})}togglePoolValve(t){let e=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===t);!e||e.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let o=n.floors.flatMap(i=>i.furniture).find(i=>i.id===t);o&&(o.valve_open=o.valve_open===!1?null:!1)})}setPoolDevice(t,e){this.change(n=>{let o=n.floors.flatMap(i=>i.furniture).find(i=>i.id===t);o&&Object.assign(o,e)})}portText(t){let{kind:e,port:n}=tt(t),o={in:"A",out1:"B",out2:"C"};return e==="joint"&&n&&o[n]?`${this.t("card_port")} ${o[n]}`:n?this.t(`port_${n}`):""}openCard(t,e){this._card={pool:t,part:e},this._cardJoin=null}partPorts(t,e){var i,s;let{kind:n,id:o}=tt(e);if(n==="joint"){let a=(s=(i=t.pool)==null?void 0:i.joints)==null?void 0:s.find(l=>l.id===o);return a?Ue(a.kind).map(l=>`${e}:${l}`):[]}if(n==="dev"){let a=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===o),l=a?pe(a.type):[];return l.length?l.map(c=>`${e}:${c}`):[e]}return[e]}partStatus(t,e){var i;let n=((i=t.pool)==null?void 0:i.pipes)??[],o=this.partPorts(t,e);return[o.filter(s=>n.some(a=>a.from===s||a.to===s)).length,o.length]}cardConnect(t,e,n,o){var p,u;let i=this._doc.floors.find(h=>h.outdoor.some(f=>f.id===t.id));if(!i||!n)return;let s=rt(this._doc,i,t),a=((p=t.pool)==null?void 0:p.ports)??[],l=h=>{var g;let{kind:f,id:m,port:_}=tt(h);return f==="port"?Ur(((g=a.find(b=>b.id===m))==null?void 0:g.kind)??"inlet"):f==="dev"?Br(_):null},c=this.jointEnd(t,n,void 0,[e]),d=vi({from:e,vias:o,to:[c],floorId:i.id},s,((u=t.pool)==null?void 0:u.joints)??[],l,h=>B(h));this.changePool(t.id,h=>{h.joints=[...h.joints??[],...d.joints],h.pipes=[...h.pipes??[],...d.pipes]}),this._cardJoin=null}cardDisconnect(t,e){this.changePool(t.id,n=>n.pipes=(n.pipes??[]).filter(o=>!e.pipes.includes(o.id)))}cardReroute(t,e){var f,m;let n=((f=t.pool)==null?void 0:f.pipes)??[],o=n.find(_=>_.id===e.pipes[0]);if(!o||!e.other)return;let i=o.from===e.start,s=[...e.holes.map(_=>({kind:"hole",joint:_.joint,dir:_.dir})),...e.fittings.map(_=>({kind:_}))],a=this._doc.floors.find(_=>_.outdoor.some(g=>g.id===t.id));if(!a)return;let l={...t,pool:{...t.pool,pipes:n.filter(_=>!e.pipes.includes(_.id))}},c=rt(this._doc,a,l),d=i?e.start:e.other,p=i?e.other:e.start,u=i?s:[...e.holes].reverse().map(_=>({kind:"hole",joint:_.joint,dir:_.dir==="in"?"out":"in"})).concat(e.fittings.map(_=>({kind:_}))),h=vi({from:d,vias:u,to:[p],floorId:a.id},c,((m=t.pool)==null?void 0:m.joints)??[],()=>null,_=>B(_));this.changePool(t.id,_=>{_.pipes=[...(_.pipes??[]).filter(g=>!e.pipes.includes(g.id)),...h.pipes]})}renderPartCard(){var F,S,x,w,k,A;let t=this._card,e=t?this._doc.floors.flatMap(E=>E.outdoor).find(E=>E.id===t.pool):void 0;if(!t||!e)return $;let n=this.isAdmin,{kind:o,id:i}=tt(t.part),s=o==="joint"?(S=(F=e.pool)==null?void 0:F.joints)==null?void 0:S.find(E=>E.id===i):void 0,a=o==="dev"?this._doc.floors.flatMap(E=>E.furniture).find(E=>E.id===i):void 0,l=o==="port"?(w=(x=e.pool)==null?void 0:x.ports)==null?void 0:w.find(E=>E.id===i):void 0;if(!s&&!a&&!l)return $;let c=((k=e.pool)==null?void 0:k.pipes)??[],d=((A=e.pool)==null?void 0:A.joints)??[],p=this.partPorts(e,t.part),u=this.poolEnds(e).filter(E=>Qt(E.node)!==t.part&&!E.used),h=d.filter(E=>E.kind==="wall"||E.kind==="floor"),f=E=>this.poolNodeLabel(e,E),m=E=>tt(E).port?this.portText(E):this.t("card_port"),_=E=>E.kind==="hole"?this.t(E.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(e,E.joint)}):this.t(E.kind==="valve"?"wall_run_valve":"wall_run_sight"),g=()=>{this._card=null,this._cardJoin=null},b=()=>s?[s.x,s.z]:a?[a.x,a.z]:l?[l.x,l.z]:null,y=p.map(E=>{var j;let L=Xr(c,d,E),O=((j=this._cardJoin)==null?void 0:j.port)===E?this._cardJoin:null;return v`<div class="fp3d-pc-row ${L.length?"fp3d-on":""}">
        <b>${m(E)}</b>
        <div class="fp3d-pc-conns">
          ${L.map(R=>v`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...R.holes.map(V=>_({kind:"hole",joint:V.joint,dir:V.dir})),...R.fittings.map(V=>_({kind:V}))].map(V=>v`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${V}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${R.other?v`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(e.id,Qt(R.other))}>${f(R.other)}</button>`:v`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?v`<span class="fp3d-pc-tools">
                    ${R.other?v`<button class="fp3d-btn" @click=${()=>this.cardReroute(e,R)}>${this.t("card_reroute")}</button>`:$}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(e,R)}>${this.t("card_disconnect")}</button>
                  </span>`:$}
            </div>`)}
          ${n&&(!L.length||p.length===1)?O?this.renderJoinPicker(e,E,O,u,h,_):v`<button class="fp3d-btn ${L.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:E,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:$}
        </div>
      </div>`}),[M,P]=this.partStatus(e,t.part),I=b();return v`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${E=>E.target===E.currentTarget&&g()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${E=>E.key==="Escape"&&g()}>
        <div class="fp3d-wv-head">
          ${s&&n?v`<input
                class="fp3d-pc-name"
                .value=${s.name??""}
                placeholder=${this.jointLabel(e,s.id)}
                title=${this.t("joint_name")}
                @change=${E=>{let L=E.target.value.trim().slice(0,60);this.changePool(e.id,O=>{var R;let j=(R=O.joints)==null?void 0:R.find(V=>V.id===s.id);j&&(j.name=L||null)})}}
              />`:v`<b class="fp3d-pc-title">${f(t.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:M,b:P})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${g}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(e,t.part,p)}
          <div class="fp3d-pc-rows">${y}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${I?v`<button class="fp3d-btn" @click=${()=>{g(),this._wallView=null,this._tool="pool",this.showPoint(I[0],I[1])}}>${this.t("card_show_plan")}</button>`:$}
          ${I&&!l?v`<button class="fp3d-btn" @click=${()=>{g(),this.pickWall(I)}}>▦ ${this.t("card_show_wall")}</button>`:$}
          <span class="fp3d-wv-grow"></span>
          ${n?v`<button class="fp3d-btn fp3d-danger" @click=${()=>{g(),a?this.deletePoolDevice(a.id):l?this.deletePoolPort(e.id,l.id):s&&this.changePool(e.id,E=>{E.joints=(E.joints??[]).filter(L=>L.id!==s.id),E.pipes=(E.pipes??[]).filter(L=>Qt(L.from)!==t.part&&Qt(L.to)!==t.part)})}}>${this.t("delete")}</button>`:$}
        </div>
      </div>
    </div>`}renderJoinPicker(t,e,n,o,i,s){let a=u=>{var _,g;let{kind:h,id:f}=tt(u);if(h==="port")return"pool";if(h==="dev")return"tech";let m=(g=(_=t.pool)==null?void 0:_.joints)==null?void 0:g.find(b=>b.id===f);return(m==null?void 0:m.kind)==="wall"||(m==null?void 0:m.kind)==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(u=>({g:u,items:o.filter(h=>a(h.node)===u)})).filter(u=>u.items.length),c=u=>this._cardJoin={...n,...u},d=u=>c({vias:[...n.vias,u]}),p=new Set(n.vias.flatMap(u=>u.kind==="hole"?[u.joint]:[]));return v`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(t,e)}</span>
        ${n.vias.map((u,h)=>v`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>c({vias:n.vias.filter((f,m)=>m!==h)})}>${s(u)} <i>✕</i></button>`)}
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
            ${l.map(({g:u,items:h})=>v`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${u}`)}</span>
                <div class="fp3d-pc-picks">${h.map(f=>v`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>c({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(t,e,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(t,e,n){var f,m,_;let o=((f=t.pool)==null?void 0:f.pipes)??[],i=g=>o.some(b=>b.from===g||b.to===g),{kind:s,id:a}=tt(e),l=s==="joint"?(_=(m=t.pool)==null?void 0:m.joints)==null?void 0:_.find(g=>g.id===a):void 0,c=s==="dev"?this._doc.floors.flatMap(g=>g.furniture).find(g=>g.id===a):void 0,d={},p=$,u=(l==null?void 0:l.kind)??(c?c.type:"port");u==="tee"?(Object.assign(d,{in:[20,60],out1:[180,60],out2:[100,130]}),p=T`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):u==="y"?(Object.assign(d,{in:[20,70],out1:[180,25],out2:[180,115]}),p=T`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):u==="wall"||u==="floor"?(Object.assign(d,{outside:[20,70],inside:[180,70]}),p=T`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):u==="pool_pump"?(Object.assign(d,{suction:[20,95],pressure:[110,10]}),p=T`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):u==="pool_filter"?(Object.assign(d,{pump:[20,40],return:[180,40],waste:[100,4]}),p=T`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):u==="pool_heat_pump"?(Object.assign(d,{in:[180,95],out:[180,45]}),p=T`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(d[""]=[180,70],p=T`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let h=u==="pool_filter"?[100,41]:u==="pool_pump"?[100,85]:[100,70];return v`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(g=>{let b=tt(g).port??"",y=d[b]??d[""]??[180,70],M=i(g);return T`<g class="fp3d-pc-stub ${M?"fp3d-on":""}" @click=${()=>this.isAdmin&&!M&&(this._cardJoin={port:g,to:"",vias:[]})}>
          <line x1=${h[0]} y1=${h[1]} x2=${y[0]} y2=${y[1]} />
          <circle cx=${y[0]} cy=${y[1]} r="7" />
          <title>${b?this.portText(g):""}</title>
        </g>`})}
      ${p}
      ${n.map(g=>{let b=tt(g).port,y=d[b??""]??[180,70];return b?T`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,y[0]))} y=${y[1]<70?y[1]+20:y[1]-12}>${this.portText(g)}</text>`:$})}
    </svg>`}jointLabel(t,e){var a,l;let n=((a=t.pool)==null?void 0:a.joints)??[],o=n.find(c=>c.id===e);if(!o)return this.t("pool_loose_end");let i=c=>c==="wall"||c==="floor"?"hole":c??"tee";if((l=o.name)!=null&&l.trim())return o.name.trim();let s=n.filter(c=>i(c.kind)===i(o.kind));return`${this.t(`joint_${o.kind??"tee"}`,{n:s.indexOf(o)+1})}`}poolEnds(t){var i,s,a;let e=((i=t.pool)==null?void 0:i.pipes)??[],n=l=>e.some(c=>c.from===l||c.to===l),o=[];for(let l of((s=t.pool)==null?void 0:s.ports)??[])o.push({node:`port:${l.id}`,label:this.poolNodeLabel(t,`port:${l.id}`),used:!1});for(let l of this._doc.floors.flatMap(c=>c.furniture).filter(c=>Ot.includes(c.type)&&c.type!=="pool_valve")){let c=pe(l.type);for(let d of c.length?c.map(p=>`dev:${l.id}:${p}`):[`dev:${l.id}`])o.push({node:d,label:this.poolNodeLabel(t,d),used:c.length>0&&n(d)})}for(let l of((a=t.pool)==null?void 0:a.joints)??[])for(let c of Ue(l.kind)){let d=`joint:${l.id}:${c}`;o.push({node:d,label:this.poolNodeLabel(t,d),used:n(d)})}return o}placeJointPlan(t,e,n,o){var d,p;let i=this.floor;if(!i)return;let s=rt(this._doc,i,t),a=o?(p=(d=t.pool)==null?void 0:d.pipes)==null?void 0:p.find(u=>u.id===o):void 0;if(a){let u=Mt(a,s),h=null;for(let m=1;m<u.length;m++){let[_,g]=[u[m-1],u[m]],[b,y]=[g[0]-_[0],g[2]-_[2]],M=b*b+y*y,P=M>0?Math.max(0,Math.min(1,((n[0]-_[0])*b+(n[1]-_[2])*y)/M)):0,I=[_[0]+b*P,_[1]+(g[1]-_[1])*P,_[2]+y*P],F=Math.hypot(I[0]-n[0],I[2]-n[1]);(!h||F<h.d)&&(h={p:I,d:F})}let f=h&&bi(a,s,h.p,B("joint"),B("pipe"));if(f){this.changePool(t.id,m=>{m.joints=[...m.joints??[],{...f.joint,kind:e}],m.pipes=(m.pipes??[]).flatMap(_=>_.id===a.id?[{...f.first,to:`joint:${f.joint.id}:in`},{...f.second,from:`joint:${f.joint.id}:out1`}]:[_])});return}}let l=i.rooms.some(u=>u.points.length>=3&&N(n,u.points)),c=this.snap(n);this.changePool(t.id,u=>u.joints=[...u.joints??[],{id:B("joint"),kind:e,x:z(c[0]),z:z(c[1]),y:l?.5:-.3}])}poolNodePos(t,e){var i,s;if(!e)return null;let n=this._doc.floors.find(a=>a.outdoor.some(l=>l.id===t.id));if(e.startsWith("joint:")||e.split(":").length>2){let a=n&&rt(this._doc,n,t)(e);return a?[a.x,a.z]:null}if(e.startsWith("port:")){let a=(s=(i=t.pool)==null?void 0:i.ports)==null?void 0:s.find(l=>l.id===e.slice(5));return a?[a.x,a.z]:null}let o=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.id===e.slice(4));return o?[o.x,o.z]:null}poolNodeLabel(t,e){var c;let{kind:n,id:o,port:i}=tt(e);if(!e)return this.t("pool_loose_end");if(i||n==="joint"){let d=n==="joint"?this.jointLabel(t,o):this.poolNodeLabel(t,`${n}:${o}`);return i?`${d} \xB7 ${this.portText(e)}`:d}if(e.startsWith("port:")){let d=((c=t.pool)==null?void 0:c.ports)??[],p=d.find(h=>h.id===e.slice(5));if(!p)return"?";let u=d.filter(h=>h.kind===p.kind);return`${this.t(`pool_port_${p.kind}`)}${u.length>1?` ${u.indexOf(p)+1}`:""}`}let s=this._doc.floors.flatMap(d=>d.furniture).filter(d=>Ot.includes(d.type)),a=s.find(d=>d.id===e.slice(4));if(!a)return"?";let l=s.filter(d=>d.type===a.type);return`${a.name||this.t(`furn_${a.type}`)}${l.length>1&&!a.name?` ${l.indexOf(a)+1}`:""}`}renderPoolPlan(t){var h,f,m,_;let e=this.poolArea,n=t.furniture.filter(g=>Ot.includes(g.type)),o={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},i=e?(((h=e.pool)==null?void 0:h.pipes)??[]).filter(g=>g.floor_id===t.id):[],s=i.map(g=>{let b=this.poolNodePos(e,g.from),y=this.poolNodePos(e,g.to);if((!b||!y)&&!g.heights)return $;let M=b?1:0,P=[...b?[b]:[],...g.points,...y?[y]:[]].map(L=>this.toScreen(L));if(P.length<2)return $;let I=g.id===this._pipeId,F=0;for(let L=1;L<P.length-1;L++)Math.hypot(P[L+1][0]-P[L][0],P[L+1][1]-P[L][1])>Math.hypot(P[F+1][0]-P[F][0],P[F+1][1]-P[F][1])&&(F=L);let[S,x]=P[F],[w,k]=P[F+1],A=Math.atan2(k-x,w-S)*180/Math.PI,E=P.map(L=>L.join(",")).join(" ");return T`<g data-pipe=${g.id}>
        <polyline class="fp3d-pipe-hit" points=${E} />
        <polyline class="fp3d-pipe ${I?"fp3d-pipe-sel":""}" points=${E} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(S+w)/2} ${(x+k)/2}) rotate(${A})`} />
        ${I&&this.isAdmin?T`${P.slice(0,-1).map((L,O)=>T`<line class="fp3d-pipe-seg" data-pipe-seg=${`${g.id}:${O+1-M}`} x1=${L[0]} y1=${L[1]} x2=${P[O+1][0]} y2=${P[O+1][1]} />`)}
              ${g.points.map((L,O)=>{let[j,R]=this.toScreen(L);return T`<g class="fp3d-vertex" data-pipe-pt=${`${g.id}:${O}`}><circle cx=${j} cy=${R} r="14" class="fp3d-hit" /><circle cx=${j} cy=${R} r="5" /></g>`})}`:$}
      </g>`}),a=(g,b,y,M,P)=>{let[I,F]=this.toScreen(b);return T`<g class="fp3d-pool-node ${M}" data-pool-node=${g}><title>${P}</title><circle cx=${I} cy=${F} r="16" class="fp3d-hit" /><circle cx=${I} cy=${F} r="10" /><text x=${I} y=${F}>${y}</text></g>`},l=e?(((f=e.pool)==null?void 0:f.ports)??[]).map(g=>a(`port:${g.id}`,[g.x,g.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[g.kind],`fp3d-pool-port-${g.kind}`,this.poolNodeLabel(e,`port:${g.id}`))):[],c=n.map(g=>a(`dev:${g.id}`,[g.x,g.z],g.type==="pool_valve"?g.valve_open===!1?"\u2715":"":o[g.type],`fp3d-pool-dev ${g.type==="pool_valve"&&g.valve_open===!1?"fp3d-pool-closed":""}`,e?this.poolNodeLabel(e,`dev:${g.id}`):g.type)),d=$;if(e&&this._pipeDraft){let g=((m=this._pipeDraft.extend)==null?void 0:m.at)??this.poolNodePos(e,this._pipeDraft.from);if(g){let b=[g,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(y=>this.toScreen(y).join(",")).join(" ");d=T`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${b} />`}}let p=e?(((_=e.pool)==null?void 0:_.joints)??[]).map(g=>a(`joint:${g.id}`,[g.x,g.z],g.kind==="wall"||g.kind==="floor"?"\u25CE":g.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(e,g.id))):[],u=i.flatMap(g=>g.heights&&g.points.length?["from","to"].filter(b=>!g[b]).map(b=>{let[y,M]=this.toScreen(b==="to"?g.points[g.points.length-1]:g.points[0]);return T`<g class="fp3d-pipe-end" data-pipe-end=${`${g.id}|${b}`}><circle cx=${y} cy=${M} r="14" class="fp3d-hit" /><circle cx=${y} cy=${M} r="6" /></g>`}):[]);return T`<g class="fp3d-pool-plan">${s}${d}${p}${u}${l}${c}</g>`}renderPoolPanel(t){let e=(t==null?void 0:t.outdoor.filter(o=>o.type==="pool"))??[],n=this.poolArea;return n?v`${e.length>1?v`<section>
            <div class="fp3d-seg">${e.map((o,i)=>v`<button aria-pressed=${o.id===n.id} @click=${()=>this.selectItem("outdoor",o.id)}>🏊 ${i+1}</button>`)}</div>
          </section>`:$}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:v`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(e.length?"pool_choose":"pool_tool_empty")}</p>
        ${e.length?v`<div class="fp3d-actions">${e.map((o,i)=>v`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",o.id)}>🏊 ${this.t("out_pool")} ${e.length>1?i+1:""}</button>`)}</div>`:$}
      </section>`}renderPoolTech(t){var a,l,c;if(!Ft("pool"))return $;let e=this.isAdmin,n=((a=t.pool)==null?void 0:a.ports)??[],o=((l=t.pool)==null?void 0:l.pipes)??[],i=this._doc.floors.flatMap(d=>d.furniture).filter(d=>Ot.includes(d.type)),s=o.find(d=>d.id===this._pipeId);return v`<section>
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
            <span class="fp3d-ports">${pe(d.type).map(p=>v`<i class=${o.some(u=>u.from===`dev:${d.id}:${p}`||u.to===`dev:${d.id}:${p}`)?"fp3d-on":""}>${this.t(`port_${p}`)}</i>`)}</span>
            ${d.type==="pool_filter"?v`<select ?disabled=${!e} title=${this.t("pool_valve_type")} @change=${p=>this.setPoolDevice(d.id,{variant:p.target.value==="top6"?null:p.target.value})}>
                    ${Wr.map(p=>v`<option value=${p} ?selected=${(d.variant??"top6")===p}>${this.t(`valve_${p}`)}</option>`)}
                  </select>
                  <select ?disabled=${!e} title=${this.t("pool_valve_position")} @change=${p=>this.setPoolDevice(d.id,{valve_position:p.target.value})}>
                  ${qs.map(p=>v`<option value=${p} ?selected=${(d.valve_position??"filter")===p}>${this.t(`valve_${p}`)}</option>`)}
                </select>`:d.type==="pool_valve"?v`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${d.valve_open!==!1} ?disabled=${!e} @change=${p=>this.setPoolDevice(d.id,{valve_open:p.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:$}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(d.id)}>✕</button>
          </div>`)}
        ${(((c=t.pool)==null?void 0:c.joints)??[]).map(d=>v`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`joint:${d.id}`)}>${this.jointLabel(t,d.id)}</button>
            <span class="fp3d-ports">${Ue(d.kind).map(p=>{let u=`joint:${d.id}:${p}`,h=o.some(f=>f.from===u||f.to===u||(d.kind??"tee")!=="wall"&&(d.kind??"tee")!=="floor"&&Qt(f.from)===`joint:${d.id}`&&!tt(f.from).port&&p==="in");return v`<i class=${h?"fp3d-on":""} title=${this.portText(u)}>${this.portText(u)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,p=>{p.joints=(p.joints??[]).filter(u=>u.id!==d.id),p.pipes=(p.pipes??[]).filter(u=>Qt(u.from)!==`joint:${d.id}`&&Qt(u.to)!==`joint:${d.id}`)})}>✕</button>
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
            <button class="fp3d-btn" ?disabled=${!e} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.id,p=>{var h;let u=(h=p.pipes)==null?void 0:h.find(f=>f.id===d.id);u&&([u.from,u.to,u.points]=[u.to,u.from,[...u.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,p=>p.pipes=(p.pipes??[]).filter(u=>u.id!==d.id))}>✕</button>
          </div>`)}
        ${s?v`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),s.height??.3,d=>this.changePool(t.id,p=>{var h;let u=(h=p.pipes)==null?void 0:h.find(f=>f.id===s.id);u&&(u.height=Math.min(10,Math.max(-5,z(d))))}),.05)}
            </div>`:$}
        ${ut("pool")||!Ft("pool")?$:v`<p class="fp3d-sub">${this.t("pool_pipes_pro")}</p>`}
      </section>`}renderPoolShape(t){let e=this.isAdmin,n=dt(t.points),o=t.pool_shape,i=(l,c,d,p)=>o&&this.updateOutdoor({points:Nn(o,l,c,d,p)}),s=(n.x0+n.x1)/2,a=(n.z0+n.z1)/2;return v`${o==="round"?v`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let c=Math.max(.5,l)/2;i(s-c,a-c,s+c,a+c)},.01,1)}`:o==="oval"?v`${this.len(this.t("width"),n.x1-n.x0,l=>i(s-Math.max(1,l)/2,n.z0,s+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>i(n.x0,a-Math.max(1,l)/2,n.x1,a+Math.max(1,l)/2),.01,1)}`:$}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!t.above} ?disabled=${!e} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${t.above?this.len(this.t("pool_height"),Wo(t),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,z(l)))}),.05,.4):$}`}renderPoolPro(t){var l;let e=(l=this.hass)==null?void 0:l.language;if(!Ft("pool"))return $;if(!ut("pool")){let c=ue("pool");return v`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head">
          <b>🏊 ${this.t("pro_name_pool")}</b>
          <a class="fp3d-btn fp3d-primary" href=${c?io(e):Zt(e)} target="_blank" rel="noopener">${this.t(c?"beta_become":"pro_unlock")}</a>
        </div>
        <p class="fp3d-sub">${this.t("pool_teaser")}</p>
      </section>`}if(!this.hass)return $;let n=t.pool??{},o=oa(this.hass,{}),i=c=>this.updateOutdoor({pool:{...n,...c}}),s=(c,d,p)=>this.entitySelect(this.t(d),n[c]??null,o[c]??void 0,this.entityOptions(p),u=>i({[c]:u==="none"?"none":u})),a=c=>c.startsWith("sensor.");return v`<section>
      <h3>🏊 ${this.t("pro_name_pool")}</h3>
      <p class="fp3d-sub">${this.t("pool_pro_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${s("temperature","pool_temperature",c=>/^(sensor|climate|water_heater)\./.test(c))}
        ${s("heater","pool_heater",c=>/^(climate|water_heater|switch|input_boolean)\./.test(c))}
        ${s("pump","pool_pump",c=>/^(switch|fan|input_boolean|binary_sensor|sensor)\./.test(c))}
        ${s("light","pool_light",c=>/^(light|switch)\./.test(c))}
        ${s("ph","pool_ph",a)}
        ${s("chlorine","pool_chlorine_role",a)}
        ${s("cover","pool_cover",c=>c.startsWith("cover."))}
      </div>
      ${t.pool?$:v`<button class="fp3d-btn fp3d-primary" ?disabled=${!this.isAdmin} @click=${()=>this.updateOutdoor({pool:{}})}>${this.t("pool_activate")}</button>`}
    </section>`}renderRooms(t){return T`
      <g>${t.rooms.map(e=>{let n=e.points.map(o=>this.toScreen(o).join(",")).join(" ");return T`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,o]=this.toScreen(Vt(e.points));return T`<text class="fp3d-room-name" x=${n} y=${o-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${o+14}>${this.area(xt(e.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return $;let[n,o]=this.toScreen(t.points[e]),[i,s]=this.toScreen(t.points[(e+1)%t.points.length]);return T`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${o} x2=${i} y2=${s} />`}renderMeter(t){var i;let e=(i=this._doc.energy)==null?void 0:i.meter;if(!e||e.floor_id!==t.id)return $;let[n,o]=this.toScreen([e.x,e.z]);return T`<g class="fp3d-meter" transform="translate(${n} ${o})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale;return T`<g>${t.furniture.map(n=>{var m,_;let o=n.id===this._furnitureId,[i,s]=this.toScreen([n.x,n.z]),a=Math.min(n.w,n.d)*e>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/e),[d,p]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[u,h]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),f=It(n.type)&&!!n.entity&&n.entity!=="none"&&((_=(m=this.hass)==null?void 0:m.states[n.entity])==null?void 0:_.state)==="on";return T`<g data-furniture=${n.id} class=${`fp3d-furn${o?" fp3d-furn-sel":""}${f?" fp3d-furn-lit":""}${re.includes(n.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${i} ${s}) rotate(${n.rotation}) scale(${n.mirror?-e:e} ${e})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${Pr(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${a?T`<text x=${i} y=${s+4}>${Fe(this.hass,n.type)}</text>`:$}
      </g>
      ${o&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,b])=>{let[y,M]=this.toScreen([n.x+g*n.w*Math.cos(l)/2-b*n.d*Math.sin(l)/2,n.z+g*n.w*Math.sin(l)/2+b*n.d*Math.cos(l)/2]);return T`<g class="fp3d-resize" data-resize=${`${n.id}:${g}:${b}`}>
              <circle cx=${y} cy=${M} r="14" class="fp3d-hit" />
              <rect x=${y-5} y=${M-5} width="10" height="10" rx="2" />
            </g>`}):$}
      ${o?(()=>{let[g,b]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/e),n.z-Math.cos(l)*(n.d/2+18/e)]);return T`<text class="fp3d-dim" x=${g} y=${b+4}>${this.m(n.w,2)} × ${this.m(n.d,2)}</text>`})():$}
      ${o&&n.locked?T`<text class="fp3d-lock" x=${d} y=${p+5}>🔒</text>`:$}
      ${o&&this.isAdmin&&!n.locked?T`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${u} y1=${h} x2=${d} y2=${p} />
            <circle cx=${d} cy=${p} r="16" class="fp3d-hit" />
            <circle cx=${d} cy=${p} r="8" />
            <path d="M${d-4} ${p-1}a4 4 0 1 1 2 3.5" />
          </g>`:$}`})}</g>`}renderOpenings(t,e){return T`<g>${t.openings.map(n=>{let o=He(n,t.rooms,t.walls??[]);if(!o)return $;let{room:i,edge:s}=o,a=li(e,n,o),l=le(i,s,n.offset-n.width/2),c=le(i,s,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),p=(c[1]-l[1])/(n.width||1),u=at(i.points)>=0?1:-1,h=[-p*u,d*u],f=[.06,.06];a&&(f=a.wall.free||a.wall.roomLeft===i.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let m=(S,x)=>this.toScreen([S[0]+h[0]*x,S[1]+h[1]*x]),_=[m(l,f[0]+.01),m(c,f[0]+.01),m(c,-f[1]-.01),m(l,-f[1]-.01)],g=n.id===this._openingId,b=Bn(n,(a==null?void 0:a.wall.exterior)??!1),y=n.type==="door"&&Xo(b),M=`fp3d-open fp3d-open-${n.type}${y?" fp3d-open-front":""}${g?" fp3d-open-sel":""}`,P;if(n.type==="garage"){let S=m(l,f[0]-.04),x=m(c,f[0]-.04),w=m(l,f[0]+Math.min(2,n.height)),k=m(c,f[0]+Math.min(2,n.height));P=T`<line x1=${S[0]} y1=${S[1]} x2=${x[0]} y2=${x[1]} />
          <path class="fp3d-open-track" d="M${S[0]} ${S[1]}L${w[0]} ${w[1]}M${x[0]} ${x[1]}L${k[0]} ${k[1]}" />`}else if(n.type==="door"){let S=n.swing==="out",x=S?-f[1]:f[0],w=n.hinge==="left"==u>0,k=n.leaves===2,A=l,E=c,L=[],O=or(n.width,b,w,n);if(O){let W=U=>U<=.02?l:U>=n.width-.02?c:le(i,s,n.offset-n.width/2+U);A=W(O.x0),E=W(O.x1),L=O.panels.map(([U,K])=>[W(U),W(K)])}let j=[(A[0]+E[0])/2,(A[1]+E[1])/2],R=(k?.5:1)*Math.hypot(E[0]-A[0],E[1]-A[1]),V=(f[0]-f[1])/2,H=L.map(([W,U])=>{let K=m(W,V+.035),X=m(U,V+.035),ht=m(W,V-.035),_t=m(U,V-.035);return T`<line class="fp3d-open-pane" x1=${K[0]} y1=${K[1]} x2=${X[0]} y2=${X[1]} /><line class="fp3d-open-pane" x1=${ht[0]} y1=${ht[1]} x2=${_t[0]} y2=${_t[1]} />`}),C=(W,U)=>{let[K,X]=m(W,x),[ht,_t]=m(U,x),D=m(W,x+(S?-R:R)),ot=R*this._view.scale,ft=(D[0]-K)*(_t-X)-(D[1]-X)*(ht-K);return T`<path d="M${K} ${X}L${D[0]} ${D[1]}A${ot} ${ot} 0 0 ${ft>0?1:0} ${ht} ${_t}" />`};P=T`${H}${b==="passage"?T`<line class="fp3d-open-passage" x1=${m(l,V)[0]} y1=${m(l,V)[1]} x2=${m(c,V)[0]} y2=${m(c,V)[1]} />`:b==="sliding"?T`<line x1=${m(A,x)[0]} y1=${m(A,x)[1]} x2=${m(E,x)[0]} y2=${m(E,x)[1]} />`:k?T`${C(A,j)}${C(E,j)}`:C(w?A:E,w?E:A)}`}else{let S=(f[0]-f[1])/2,x=m(l,S+.035),w=m(c,S+.035),k=m(l,S-.035),A=m(c,S-.035),E=[(l[0]+c[0])/2,(l[1]+c[1])/2],L=m(E,f[0]),O=m(E,-f[1]);P=T`<line x1=${x[0]} y1=${x[1]} x2=${w[0]} y2=${w[1]} /><line x1=${k[0]} y1=${k[1]} x2=${A[0]} y2=${A[1]} />${n.leaves===2?T`<line x1=${L[0]} y1=${L[1]} x2=${O[0]} y2=${O[1]} />`:$}`}let I=m(l,(f[0]-f[1])/2),F=m(c,(f[0]-f[1])/2);return T`<g data-opening=${n.id} class=${M}>
        <line class="fp3d-open-hit" x1=${I[0]} y1=${I[1]} x2=${F[0]} y2=${F[1]} />
        <polygon class="fp3d-open-gap" points=${_.map(S=>S.join(",")).join(" ")} />
        ${P}
      </g>`})}</g>`}renderDevices(t){return T`<g>${t.placements.map(e=>{var c,d;let n=J(e.entity_id);if(!n)return $;let[o,i]=this.toScreen([e.x,e.z]),s=((d=(c=this.hass)==null?void 0:c.states[e.entity_id])==null?void 0:d.state)==="on",a=e.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return T`${n==="camera"?this.renderCameraWedge(e,a):$}<g data-device=${e.entity_id} class=${l} transform="translate(${o} ${i})">
        <title>${st(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${vn(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&e.locked?T`<text class="fp3d-lock" x=${o+16} y=${i-12}>🔒</text>`:$}`})}</g>`}renderCameraWedge(t,e){let n=t.mount==="ceiling",o=t.fov??(n?360:90),i=t.reach??(n?3:4.5),s=(t.rotation??0)*Math.PI/180,a=(y,M)=>this.toScreen([t.x-Math.sin(s+y)*M,t.z+Math.cos(s+y)*M]),[l,c]=this.toScreen([t.x,t.z]),d=Math.min(o,359.9)*Math.PI/180/2,[p,u]=a(-d,i),[h,f]=a(d,i),m=i*this._view.scale,_=o>=360?"":`M${l} ${c}L${p} ${u}A${m} ${m} 0 ${d>Math.PI/2?1:0} 1 ${h} ${f}Z`,[g,b]=a(0,i);return T`<g class="fp3d-wedge ${e?"fp3d-wedge-sel":""}">
      ${o>=360?T`<circle cx=${l} cy=${c} r=${m} />`:T`<path d=${_} />`}
      ${e&&this.isAdmin&&!t.locked?T`<g class="fp3d-rotate" data-aim=${t.entity_id}>
            <line x1=${l} y1=${c} x2=${g} y2=${b} />
            <circle cx=${g} cy=${b} r="16" class="fp3d-hit" />
            <circle cx=${g} cy=${b} r="8" />
            <path d="M${g-4} ${b-1}a4 4 0 1 1 2 3.5" />
          </g>`:$}
    </g>`}renderHandles(t){let e=t.points,n=e.length,o=e.map((s,a)=>{let l=e[(a+1)%n],[c,d]=this.toScreen(s),[p,u]=this.toScreen(l),h=Math.hypot(l[0]-s[0],l[1]-s[1]),f=(c+p)/2,m=(d+u)/2,[_,g]=this.toScreen(Vt(e)),b=-(u-d),y=p-c,M=Math.hypot(b,y)||1;b/=M,y/=M,b*(f-_)+y*(m-g)<0&&(b=-b,y=-y);let P=Math.hypot(p-c,u-d);return T`
        ${P>50?Math.abs(b)>Math.abs(y)?T`<text class="fp3d-dim" style="text-anchor:${b>0?"start":"end"}" x=${f+b*13} y=${m+y*13+4}>${this.m(h,2)}</text>`:T`<text class="fp3d-dim" x=${f+b*16} y=${m+y*16+4}>${this.m(h,2)}</text>`:$}
        ${P>36?T`<g data-mid=${a} class="fp3d-mid"><circle cx=${f} cy=${m} r="14" class="fp3d-hit" /><circle cx=${f} cy=${m} r="6" /><path d="M${f-3} ${m}h6M${f} ${m-3}v6" /></g>`:$}
      `}),i=e.map((s,a)=>{let[l,c]=this.toScreen(s);return T`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${c-9}>${a+1}</text>`});return T`<g>${o}${i}</g>`}renderDraft(){let t=this.drag;if((t==null?void 0:t.kind)==="freewall"){let[o,i]=this.toScreen(t.start),[s,a]=this.toScreen(t.end),l=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return T`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${o} y1=${i} x2=${s} y2=${a} />
        <text class="fp3d-dim" x=${(o+s)/2} y=${(i+a)/2-10}>${this.m(l,2)}</text>
      </g>`}if((t==null?void 0:t.kind)==="rect"){let[o,i]=this.toScreen(t.start),[s,a]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),c=Math.abs(t.end[1]-t.start[1]);return T`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(o,s)} y=${Math.min(i,a)} width=${Math.abs(s-o)} height=${Math.abs(a-i)} />
        <text class="fp3d-dim" x=${(o+s)/2} y=${Math.min(i,a)-8}>${this.m(l,2)} × ${this.m(c,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return $;let e=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=e.map(o=>this.toScreen(o));return T`<g pointer-events="none">
      ${n.length>1?T`<polyline class="fp3d-draft" points=${n.map(o=>o.join(",")).join(" ")} />`:$}
      ${n.slice(1).map((o,i)=>{let s=n[i];return Math.hypot(o[0]-s[0],o[1]-s[1])<30?$:T`<text class="fp3d-dim" x=${(s[0]+o[0])/2} y=${(s[1]+o[1])/2-6}>${this.m(Math.hypot(e[i+1][0]-e[i][0],e[i+1][1]-e[i][1]),2)}</text>`})}
      ${this._draft.map((o,i)=>{let[s,a]=this.toScreen(o);return T`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${a} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?T`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:$}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return T`<g pointer-events="none">
      ${t.x!==void 0?T`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:$}
      ${t.z!==void 0?T`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:$}
      ${t.point?T`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:$}
    </g>`}get unit(){return di(this.hass,this._doc.settings.units)}m(t,e=2){return Lr(t,this.unit,n=>Pt(this.hass,n,e))}area(t){return Or(Math.abs(t),this.unit,e=>Pt(this.hass,e,1))}lenValue(t){return this.unit==="imperial"?Me(t):String(z(t))}readLen(t){if(this.unit==="imperial")return pi(t,"imperial");let e=parseFloat(t.replace(",","."));return Number.isFinite(e)?e:null}len(t,e,n,o=.01,i){return this.unit!=="imperial"?this.num(t,e,n,o,i):v`<label class="fp3d-field"
      >${gn(t,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${Me(e)}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=s.target,l=pi(a.value,"imperial");l!==null?n(i!==void 0?Math.max(i,l):l):a.value=Me(e)}}
    /></label>`}num(t,e,n,o=.01,i){return v`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${o}
        min=${i??$}
        .value=${String(z(e))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
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
    </div>`}renderSide(t){var a,l,c,d;let e=((a=this._doc)==null?void 0:a.floors)??[],n=this.room,o=this.isAdmin,i=Object.values(((l=this.hass)==null?void 0:l.areas)??{}).sort((p,u)=>p.name.localeCompare(u.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(t);if(this._tool==="furniture"&&t&&o)return v`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):$} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?v`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:(n==null?void 0:n.name)??""})}</button>
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
            <span>${this.t(`preset_${qn(o)}`)}</span><span class="fp3d-muted">${this.m(o.width,2)}</span>
          </button>`)}
      </div>
    </details>`:$}renderRoomForm(t,e){let n=this.isAdmin,o=Gn(t.points),i=dt(t.points);return v`<section>
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
            ${Gs.map(s=>v`<option value=${s} ?selected=${s===t.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${o?v`${this.len(this.t("x"),i.x0,s=>this.setRect("x",s))} ${this.len(this.t("z"),i.z0,s=>this.setRect("z",s))}
            ${this.len(this.t("width"),i.x1-i.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.len(this.t("depth"),i.z1-i.z0,s=>this.setRect("d",s),.01,.05)}`:$}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${gn(this.t("room_ceiling"),this.unit)}
          <input
            type=${this.unit==="imperial"?"text":"number"}
            step="0.05"
            min="1"
            placeholder=${this.floor?this.lenValue(this.floor.height):""}
            .value=${t.ceiling_height!=null?this.lenValue(t.ceiling_height):""}
            ?disabled=${!n}
            @change=${s=>{let a=s.target.value.trim(),l=a===""?null:this.readLen(a);this.updateRoom({ceiling_height:l===null||l<=0?null:Math.min(30,Math.max(1,l))})}}
        /></label>
        <p class="fp3d-sub fp3d-wide">${this.t("room_ceiling_hint")}</p>
      </div>
      <div class="fp3d-actions">
        <button class="fp3d-btn" title=${this.t("room_start_view_hint")} ?disabled=${!n} @click=${()=>this.rememberRoomView()}>${this.t("room_start_view")}</button>
        ${t.start_view?v`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:$}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(xt(t.points)),n:this.area(Fr(t,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{var s;(s=navigator.clipboard)==null?void 0:s.writeText(t.id).catch(()=>{})}}>${t.id}</code></p>
      ${this.renderEdgeHeights(t)} ${this.renderRoomClimate(t)} ${this.renderRoomOpenings(t)}
      <details class="fp3d-points" ?open=${!o}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((s,a)=>v`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.len(this.t("x"),s[0],l=>this.setPoint(a,0,l))} ${this.len(this.t("z"),s[1],l=>this.setPoint(a,1,l))}
            ${n?v`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
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
            ${Na.map(s=>v`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:$}
    </section>`}applyPackage(t,e){if(!this.isAdmin)return;let n=Ba(t,e,()=>B("furniture"));this.change((o,i)=>i.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=dt(t.points),n=this.hass?we(this.hass,t.area_id).filter(o=>o.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,o,i]=Ht[e.type],s=qo(t,e.rows,e.cols).map(([a,l])=>({id:B("furniture"),type:e.type,x:a,z:l,rotation:0,w:n,d:o,h:i,variant:null,entity:e.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(t){let e=this._spots,n=qo(t,e.rows,e.cols).length,o=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),i=s=>this._spots={...e,...s};return v`<div class="fp3d-form fp3d-spot-form">
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
        ${n?us(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):$}
      </span></label
    >`}markerSelect(t,e){return v`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${Ds.map(n=>v`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t){var n;let e=o=>{var a,l,c,d,p,u,h,f;let i=(l=(a=this.hass)==null?void 0:a.entities)==null?void 0:l[o],s=(i==null?void 0:i.area_id)??(i!=null&&i.device_id?(p=(d=(c=this.hass)==null?void 0:c.devices)==null?void 0:d[i.device_id])==null?void 0:p.area_id:null);return s?(f=(h=(u=this.hass)==null?void 0:u.areas)==null?void 0:h[s])==null?void 0:f.name:void 0};return Object.keys(((n=this.hass)==null?void 0:n.states)??{}).filter(t).map(o=>({id:o,label:`${st(this.hass,o)}${e(o)?` \xB7 ${e(o)}`:""}`})).sort((o,i)=>o.label.localeCompare(i.label))}entitySelect(t,e,n,o,i){let s=n===void 0?null:n?this.t("entity_auto",{name:st(this.hass,n)}):this.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return v`<label class="fp3d-field fp3d-wide"
      >${t}
      <fp3d-entity-picker
        .options=${o}
        .fixed=${a}
        .value=${e===null?s!==null?"__auto":"none":e}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(t){var i;let e=this.floor,n=e?He(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let o=vt(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return((i=li(o.walls,t,n))==null?void 0:i.wall.exterior)??!1}renderSidelightFields(t){if(t.type!=="door")return $;let e=Bn(t,this.openingIsExterior(t));if(e!=="sidelight"&&e!=="sidelights")return $;let n=this.isAdmin,o=(i,s)=>v`<label class="fp3d-field"
      >${this.t(s)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${t[i]==null?"":String(t[i])}
        ?disabled=${!n}
        @change=${a=>{let l=Number(a.target.value);this.updateOpening({[i]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return e==="sidelight"?v`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!t.sidelight_hinge} ?disabled=${!n} @change=${i=>this.updateOpening({sidelight_hinge:i.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${o("sidelight_width","sidelight_width")}`:v`${o("sidelight_width","sidelight_width_left")} ${o("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(t){let e=t.type==="door"?Ko:Go,n=Bn({type:t.type,style:null},this.openingIsExterior(t)),o=t.style&&e.includes(t.style)?t.style:"";return v`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${i=>this.updateOpening({style:i.target.value||null})}>
        <option value="" ?selected=${!o}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(i=>v`<option value=${i} ?selected=${i===o}>${this.t(`style_${i}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",o=t.type==="garage",i=g=>{var y;if(!this.hass)return null;let b=structuredClone(this._doc.floors);for(let M of b)for(let P of M.openings)P.id===t.id&&(P[g]=null);return((y=yr(this.hass,b).get(t.id))==null?void 0:y[g])??null},s=g=>{var b,y;return(y=(b=this.hass)==null?void 0:b.states[g])==null?void 0:y.attributes.device_class},a=this.entityOptions(g=>g.startsWith("cover.")),l=this.entityOptions(g=>{var b,y;return/^(sensor|number|input_number)\./.test(g)&&Number.isFinite(Number((y=(b=this.hass)==null?void 0:b.states[g])==null?void 0:y.state))}),c=this.entityOptions(g=>{var b;return g.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(g)??"")||yt(g)&&oi((b=this.hass)==null?void 0:b.states[g])!==null}),d=this.entityOptions(g=>{var y;let b=(y=this.hass)==null?void 0:y.states[g];return g.startsWith("binary_sensor.")?typeof(b==null?void 0:b.attributes.window_state)=="string":yt(g)&&(oi(b)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${g} ${st(this.hass,g)}`))}),p=this.entityOptions(g=>g.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(g)??"")),u=o?this.entityOptions(g=>g.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(g)??"")||Xa.test(g)):c,h=o&&Xa.test(t.contact??"")&&!(t.cover&&t.cover!=="none")&&!i("cover"),f=g=>{let b=g===1,y=b?t.tilt:t.tilt2??null,M=b?t.contact:t.contact2,P=(b?t.sensor:t.sensor2)??(y&&y!=="none"?"contact_tilt":"contact"),I=F=>this.updateOpening(b?{contact:F}:{contact2:F==="none"?null:F});return v`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${F=>{let S=F.target.value,x=S==="contact_tilt"?{}:b?{tilt:null}:{tilt2:null};this.updateOpening({...b?{sensor:S}:{sensor2:S},...x})}}
          >
            ${["contact","handle","contact_tilt"].map(F=>v`<option value=${F} ?selected=${F===P}>${this.t(`sensor_kind_${F}`)}</option>`)}
          </select></label
        >
        ${P==="handle"?this.entitySelect(this.t("handle_entity"),M,void 0,d,F=>I(F==="none"?b?"none":null:F)):this.entitySelect(this.t("contact_entity"),M,b?i("contact"):void 0,p,I)}
        ${P==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),y,void 0,c,F=>this.updateOpening(b?{tilt:F==="none"?null:F}:{tilt2:F==="none"?null:F})):$}
        ${b?v`${this.entitySelect(this.t("tilt_angle_entity"),t.tilt_angle??null,void 0,this.entityOptions(F=>yt(F)),F=>this.updateOpening({tilt_angle:F==="none"?null:F}))}
            ${t.tilt_angle&&t.tilt_angle!=="none"?v`${this.num(this.t("tilt_angle_max"),t.tilt_max??15,F=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,F))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),t.tilt_offset??0,F=>this.updateOpening({tilt_offset:F}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!t.tilt_invert} ?disabled=${!e} @change=${F=>this.updateOpening({tilt_invert:F.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:$}`:$}`},m=qn(t),_=t.type==="door";return v`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${m}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?v`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Un).map(g=>v`<button class="fp3d-chip" aria-pressed=${g===m} @click=${()=>this.setOpeningPreset(t,g)}>${this.t(`preset_${g}`)}</button>`)}
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
        ${this.len(this.t("width"),t.width,g=>this.updateOpening({width:Math.max(.3,g)}),.01,.3)}
        ${this.len(this.t("opening_position"),t.offset,g=>this.updateOpening({offset:Math.max(0,g)}),.01,0)}
        ${n?this.len(this.t("sill"),t.sill,g=>this.updateOpening({sill:Math.max(0,g)}),.01,0):$}
        ${this.len(this.t("opening_height"),t.height,g=>this.updateOpening({height:Math.max(.3,g)}),.01,.3)}
        ${o?$:this.renderStyleSelect(t)}
        ${this.renderSidelightFields(t)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${g=>this.updateOpening({mark:g.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${o?$:v`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${g=>this.updateOpening({hinge:g.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||o||_?this.entitySelect(this.t(n?"cover_entity":"door_cover"),t.cover,i("cover"),a,g=>this.updateOpening({cover:g})):$}
        ${(n||o||_)&&t.cover!=="none"&&(t.cover||i("cover"))?v`${this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,l,g=>this.updateOpening({position:g==="none"?null:g}))}
              ${t.position?v`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${g=>this.updateOpening({position_inverted:g.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:$}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_invert_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.cover_invert} @change=${g=>this.updateOpening({cover_invert:g.target.checked||void 0})} />
                ${this.t("cover_invert")}</label
              >
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${g=>this.updateOpening({confirm:g.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:$}
        ${n?v`${t.leaves===2?v`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:$}
              ${f(1)} ${t.leaves===2?v`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${f(2)}`:$}`:v`${this.entitySelect(this.t(o?"garage_contact":t.leaves===2?"contact_main":"contact_entity"),t.contact,i("contact"),u,g=>this.updateOpening({contact:g}))}
              ${h?v`<label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                    ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${g=>this.updateOpening({confirm:g.target.checked})} />
                    ${this.t("device_confirm")}</label
                  >`:$}
              ${t.leaves===2&&!o?this.entitySelect(this.t("contact_second"),t.contact2,void 0,c,g=>this.updateOpening({contact2:g==="none"?null:g})):$}
              ${_?v`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!t.shut} ?disabled=${!e} @change=${g=>this.updateOpening({shut:g.target.checked})} />
                    ${this.t("door_shut")}</label
                  >`:$}`}
        ${t.contact!=="none"&&(t.contact||t.contact2||i("contact"))?v`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!t.contact_invert} ?disabled=${!e} @change=${g=>this.updateOpening({contact_invert:g.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:$}
        ${t.type==="window"?v`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!t.rain_ignore} ?disabled=${!e} @change=${g=>this.updateOpening({rain_ignore:g.target.checked||void 0})} />
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
            ${No.map(n=>v`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).filter(n=>n.items.length).map(n=>v`<optgroup label=${kt(n)}>
                ${n.items.map(o=>{let i=Oe(n.id,o.id);return v`<option value=${i} ?selected=${i===t.type}>${se(o)}</option>`})}
              </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(n=>t.type.startsWith(`pack:${n.id}:`))?v`<option value=${t.type} selected>${Fe(this.hass,t.type)}</option>`:$}
          </select></label
        >
        ${this.len(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.len(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.len(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.len(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.len(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${It(t.type)?$:v`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!t.mirror} ?disabled=${!e} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${t.type==="led_strip"?v`${this.num(this.t("strip_tilt"),t.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!t.upright} ?disabled=${!e} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:$}
        ${Te(t)&&this.floor?v`${this.len(this.t("mount_height"),t.mount_y??zt(this.floor,t),n=>this.updateFurniture({mount_y:Math.min(Hi,Math.max(0,n))}),.01,0)}
              ${t.mount_y!=null?v`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:$}`:$}
      </div>
      ${t.type==="stairs"?v`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:$}
      ${t.type==="stairs_u"?v`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:$}
      ${t.type==="stairwell"?v`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&(Jr(Wt(t),n.points)||xt(ci(n.points,Wt(t)))>.01))?v`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:$}`:$}
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
      ${pn(t.type)?this.renderFurnitureLinks(t):Lc.has(t.type)?$:v`<div class="fp3d-form fp3d-links">${this.renderStateLinks(t)}</div>`} ${t.type==="parking"?this.renderParkingForm(t):$}
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
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=Oa(this.hass,t),n=0,o=a=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===a),i=(a,l,c)=>{if(!c)return;let d=o(a);if(!d&&this.floor&&(this.addEnergyDevice(a),d=o(a)),!d||d[l]&&d[l]!=="none")return;let p=d.id;this.change(u=>{let h=u.floors.flatMap(f=>f.furniture).find(f=>f.id===p);h&&(h[l]=c)}),n++};i("meter","power",e.grid),i("inverter","power",e.solar),i("home_battery","power",e.battery),i("home_battery","soc",e.battery_soc);let s=La(t);for(let a of["gas","water"])s[a]&&!this._doc.energy[a]&&(this.setEnergy({[a]:s[a]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let t=this._doc.energy,e=this.isAdmin,n=(m,_)=>{var g,b;return(b=(g=this.hass)==null?void 0:g.states[m])==null?void 0:b.attributes[_]},o=this.entityOptions(m=>this.isPowerSensor(m)),i=this.entityOptions(m=>yt(m)&&n(m,"device_class")==="battery"),s=this.entityOptions(m=>yt(m)&&(n(m,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(m,"unit_of_measurement")??""))),a=m=>_=>this.setEnergy({[m]:_==="none"?null:_}),l=m=>this.entityOptions(_=>yt(_)&&(n(_,"device_class")===m||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(_,"unit_of_measurement")??""))),c=this.hass?Ce(this.hass,this._doc.floors):new Map,d=Li(this._doc,m=>this.devicePower(m,c)),p=this.hass?Ta(this.hass,this._doc,[],d):null,u=!!p&&(p.solar??0)<20,h=u&&p.grid!==null&&p.grid<-50,f=u&&p.battery!==null&&p.battery<-50&&(p.grid??0)<=0;return v`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${h?v`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({grid_invert:!t.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:$}
      ${f?v`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({battery_invert:!t.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:$}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),t.grid,d.grid,o,a("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} ?disabled=${!e} @change=${m=>this.setEnergy({grid_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,d.solar[0]??null,o,a("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,d.battery[0]??null,o,a("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} ?disabled=${!e} @change=${m=>this.setEnergy({battery_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,d.soc[0]??null,i,a("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),t.consumption,null,o,a("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,s,a("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),t.gas??null,void 0,l("gas"),m=>this.setEnergy({gas:m==="none"?null:m}))}
        ${this.entitySelect(this.t("energy_water_meter"),t.water??null,void 0,l("water"),m=>this.setEnergy({water:m==="none"?null:m}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!e||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?v`<p class="fp3d-sub">${this._energyNote}</p>`:$}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(t){let e=t.elevation+t.height;if(!(this._doc.settings.roof.sections??[]).some(i=>aa(i,e)))return $;let o={settings:this._doc.settings};return T`${[1.5,2].map(i=>la(o,t.elevation,i).map(([s,a])=>{let[l,c]=this.toScreen(s),[d,p]=this.toScreen(a);return T`<line class="fp3d-headroom" x1=${l} y1=${c} x2=${d} y2=${p} />
          <text class="fp3d-headroom-label" x=${(l+d)/2} y=${(c+p)/2-4}>${this.m(i,1)}</text>`}))}`}renderFavorites(){let t=this._doc.settings.favorites??[],e=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>e.includes(s.split(".")[0])&&!t.includes(s)),o=s=>this.change(a=>a.settings.favorites=s.length?s:void 0),i=(s,a)=>{let l=[...t],[c]=l.splice(s,1);l.splice(Math.max(0,Math.min(l.length,s+a)),0,c),o(l)};return v`<details class="fp3d-section">
      <summary>${this.t("favorites")}${t.length?v` <span class="fp3d-lib-count">${t.length}</span>`:$}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${t.map((s,a)=>v`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${st(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${a===0} @click=${()=>i(a,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${a===t.length-1} @click=${()=>i(a,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>o(t.filter(l=>l!==s))}>✕</button>
        </div>`)}
      ${t.length<40?v`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!t.includes(s)&&o([...t,s])})}
          </div>`:$}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let t=this._doc.settings.media_presets??[],e=o=>this.change(i=>i.settings.media_presets=o.length?o:void 0),n=(o,i)=>e(t.map((s,a)=>a===o?{...s,...i}:s));return v`<h4>${this.t("presets")}</h4>
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
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((s,a)=>a!==i))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<30?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:B("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:$}`}renderOwnButtons(){let t=this._doc.settings.buttons??[],e=i=>this.change(s=>s.settings.buttons=i.length?i:void 0),n=(i,s)=>e(t.map((a,l)=>l===i?{...a,...s}:a)),o={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return v`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${t.map((i,s)=>v`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${a=>n(s,{label:a.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${a=>n(s,{action:a.target.value})}>
              ${Ws.map(a=>v`<option value=${a} ?selected=${a===i.action}>${this.t(`own_action_${a}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(i.icon??null,a=>n(s,{icon:a}))}
          ${i.action!=="fire_dom_event"?v`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${i.action}`)}
                <input type="text" .value=${i.target??""} placeholder=${o[i.action]} @change=${a=>n(s,{target:a.target.value.trim()||null})}
              /></label>`:$}
          ${i.action==="service"||i.action==="fire_dom_event"?v`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${i.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${i.data?JSON.stringify(i.data,null,1):""}
                  @change=${a=>{a.target.setCustomValidity("");let l=a.target.value.trim();if(!l)return n(s,{data:null});try{let c=JSON.parse(l);c&&typeof c=="object"&&!Array.isArray(c)&&n(s,{data:c})}catch{a.target.setCustomValidity(this.t("own_data_bad")),a.target.reportValidity()}}}
                ></textarea></label
              >`:$}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>e([...t.slice(0,s-1),i,t[s-1],...t.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((a,l)=>l!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<20?v`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:B("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:$}`}paneView(){let t=this.renderRoot.querySelector("fp3d-view3d"),e=t==null?void 0:t.currentView();if(!e)return null;let n=e.target;return{theta:z(e.theta),phi:z(e.phi),radius:z(e.radius),...n?{target:{x:z(n.x),y:z(n.y),z:z(n.z)}}:{}}}rememberFloorView(){let t=this.paneView();if(!t){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:t})}rememberRoomView(){let t=this.paneView();if(!t){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:t})}renderStartView(){let t=this._doc.settings.start_view??null,e=()=>{let n=this.paneView();n&&this.change(o=>o.settings.start_view=n)};return v`<details class="fp3d-section">
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
    </details>`}renderPresenceSettings(){var o;let t=Object.keys(((o=this.hass)==null?void 0:o.states)??{}).filter(i=>i.startsWith("person.")).sort(),e=i=>{let s=i.slice(7),a=this.entityOptions(c=>yt(c)),l=c=>c.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(c);return[...a.filter(c=>l(c.id)),...a.filter(c=>!l(c.id))]},n=(i,s)=>{let a=structuredClone(this._doc);a.presence=a.presence.filter(l=>l.person!==i),s&&s!=="none"&&a.presence.push({person:i,sensor:s}),this.setDoc(a)};return v`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(i=>{var s;return this.entitySelect(`${st(this.hass,i)} \xB7 ${this.t("presence_sensor")}`,((s=this._doc.presence.find(a=>a.person===i))==null?void 0:s.sensor)??null,void 0,e(i),a=>n(i,a))}):v`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
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
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderFurnitureLinks(t){var d;if(!this.hass)return $;let e=this.hass,n=p=>{var h;let u=structuredClone(this._doc.floors);for(let f of u)for(let m of f.furniture)m.id===t.id&&(m[p]=null);return((h=Ce(e,u).get(t.id))==null?void 0:h[p])??null},o=Qn(t.type),i=o&&(!Ve(t.type)||Rs(t.type)),s=It(t.type),a=this.entityOptions(p=>s?/^(light|switch|input_boolean)\./.test(p):i?/^(media_player|switch|input_boolean|light)\./.test(p):t.type==="radiator"?p.startsWith("climate."):t.type==="robot_vacuum"?p.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(p)||br(e.states[p])),l=this.entityOptions(p=>this.isPowerSensor(p)),c=t.type==="fridge_smart"?this.entityOptions(p=>p.startsWith("binary_sensor.")):[];return v`<div class="fp3d-form fp3d-links">
        ${t.type==="grid_point"?v`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(s?"furn_entity_light":i?"furn_entity_tv":t.type==="radiator"?"furn_entity_climate":t.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),t.entity??null,n("entity"),a,p=>this.updateFurniture({entity:p}))}
        ${!s&&!re.includes(t.type)&&!Zn(t.type)?this.renderStateLinks(t):$}
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
              ${t.plant_card!==!1?v`${this.len(this.t("holo_right"),t.plant_right??0,p=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,z(p)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),t.plant_up??0,p=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,z(p)))||void 0}),.25)}`:$}`:$}
      </div>
      ${t.type==="meter"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),t.export??null,void 0,l,p=>this.updateFurniture({export:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:$}
      ${t.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let p=(this._doc.settings.roof.strings??[]).filter(u=>u.inverter===t.id).map(u=>u.name);return v`<p class="fp3d-sub fp3d-wide">${p.length?this.t("inverter_strings",{names:p.join(", ")}):this.t("inverter_strings_none")}</p>`})():$}
      ${t.type==="home_battery"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(p=>{var u,h;return yt(p)&&(((u=e.states[p])==null?void 0:u.attributes.device_class)==="battery"||((h=e.states[p])==null?void 0:h.attributes.unit_of_measurement)==="%")}),p=>this.updateFurniture({soc:p==="none"?null:p}))}
            ${this.entitySelect(this.t("furn_charge"),t.charge??null,void 0,l,p=>this.updateFurniture({charge:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:$}
      ${t.type==="wallbox"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(p=>Ni(p)||yt(p)),p=>this.updateFurniture({status:p==="none"?null:p}))}
          </div>`:$}
      ${!s||t.entity?v`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({confirm:p.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(t.marker??null,p=>this.updateFurniture({marker:p}))}${this.iconInput(t.icon,p=>this.updateFurniture({icon:p}))}</div>`:$}
      ${t.type==="robot_vacuum"?v`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,kr(e,((d=Ce(e,this._doc.floors).get(t.id))==null?void 0:d.entity)??null,null),this.entityOptions(p=>yt(p)),p=>this.updateFurniture({room_sensor:p}))}
          </div>`:$}
      ${t.type==="fridge_smart"?v`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,c,p=>this.updateFurniture({door_left:p}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,c,p=>this.updateFurniture({door_right:p}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:$}
      ${Zn(t.type)?this.renderPictureRules(t):$}
      <p class="fp3d-sub">${this.t(s?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":o?"furn_links_hint_tv":t.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){var g;let e=this.isAdmin,n=(this.packs??[]).flatMap(b=>b.items.filter(y=>y.vehicle).map(y=>({id:Oe(b.id,y.id),label:`${se(y)} \xB7 ${kt(b)}`}))),o=b=>{var y,M;return b.startsWith("device_tracker.")?((M=(y=this.hass)==null?void 0:y.states[b])==null?void 0:M.attributes.source_type)==="router"?2:0:1},i=this.entityOptions(b=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(b)).sort((b,y)=>o(b.id)-o(y.id)),s=this.entityOptions(b=>/^(sensor|input_select|select|input_text)\./.test(b)),a=t.type_entity?(g=this.hass)==null?void 0:g.states[t.type_entity]:void 0,l=Array.isArray(a==null?void 0:a.attributes.options)?a.attributes.options:[],c=t.types??[],d=b=>this.updateFurniture({types:b}),p=(b,y)=>v`<select ?disabled=${!e} @change=${M=>y(M.target.value||null)}>
        <option value="" ?selected=${!b}>${this.t("parking_vehicle_none")}</option>
        ${n.map(M=>v`<option value=${M.id} ?selected=${M.id===b}>${M.label}</option>`)}
      </select>`,u=this.floor,h=u==null?void 0:u.rooms.find(b=>b.points.length>=3&&N([t.x,t.z],b.points)),f=t.vehicle?gt(t.vehicle):void 0,m=f?f.size[2]*(t.scale??1):0,_=!!h&&!!u&&m>u.height+1e-6;return v`<div class="fp3d-form fp3d-links">
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
                    @change=${M=>d(c.map((P,I)=>I===y?{...P,state:M.target.value}:P))}
                  />
                  ${p(b.vehicle,M=>d(c.map((P,I)=>I===y?{...P,vehicle:M??""}:P)))}
                  <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>d(c.filter((M,P)=>P!==y))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(b=>v`<option value=${b}></option>`)}</datalist>
              ${e?v`<button class="fp3d-btn" @click=${()=>{var b;return d([...c,{state:l[c.length]??"",vehicle:((b=n[0])==null?void 0:b.id)??""}])}}>${this.t("parking_add_type")}</button>`:$}
            </div>`:$}
      </div>
      ${_?v`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Pt(this.hass,m,2),room:Pt(this.hass,u.height,2)})}</p>`:$}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(t)}`}renderCarForm(t){var c;let e=(c=this.hass)==null?void 0:c.language;if(!ut("auto_pro"))return v`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b><a class="fp3d-btn fp3d-primary" href=${Zt(e)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return $;let n=this.hass,o=t.car??{},i=wr(n,{entity:t.entity,car:{device:o.device}}),s=d=>this.updateFurniture({car:{...o,...d}}),a=this.entityOptions(d=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(d)),l=(d,p,u)=>this.entitySelect(this.t(p),o[d]??null,i[d],u,h=>s({[d]:h==="none"?"none":h}));return v`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),o.device??null,void 0,a,d=>s({device:d==="none"?null:d}))}
        ${l("soc","car_soc",this.entityOptions(d=>yt(d)))}
        ${l("range","car_range",this.entityOptions(d=>yt(d)))}
        ${l("charging","car_charging",this.entityOptions(d=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(d)))}
        ${l("plugged","car_plugged",this.entityOptions(d=>Ni(d)))}
        ${l("lock","car_lock",this.entityOptions(d=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(d)))}
        ${l("climate","car_climate",this.entityOptions(d=>/^(climate|switch|binary_sensor|input_boolean)\./.test(d)))}
        ${l("tracker","car_tracker",this.entityOptions(d=>d.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(t){let e=new Set(this._libOpen);e.has(t)?e.delete(t):e.add(t),this._libOpen=e;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...e]))}catch{}}librarySection(t,e,n,o){let i=vo(o).split(/\s+/).filter(Boolean),s=i.length?n.filter(l=>{let c=vo(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${e}`);return i.every(d=>c.includes(d))}):n;if(o&&!s.length)return $;let a=o?!0:this._libOpen.has(t);return v`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${a} @click=${()=>this.toggleLibrary(t)}>
        <span class="fp3d-lib-caret">${a?"\u25BE":"\u25B8"}</span>${e} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${a?v`<div class="fp3d-library">${s.map(l=>this.libraryButton(l.type,l.label))}</div>`:$}`}libraryHasHits(t){let e=vo(t).split(/\s+/).filter(Boolean);return[...Object.entries(Bo).flatMap(([o,i])=>i.map(s=>`${this.t(`furn_${s}`)} ${Bt(Qa,`furn_${s}`)} ${s.replace(/_/g," ")} ${this.t(`furn_group_${o}`)}`)),...(this.packs??[]).flatMap(o=>o.items.map(i=>`${se(i)} ${Object.values(i.name).join(" ")} ${i.id.replace(/_/g," ")} ${o.name} ${kt(o)}`))].some(o=>{let i=vo(o);return e.every(s=>i.includes(s))})}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let o of n.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!t.includes(o.image)&&t.push(o.image);return t}renderPictureRules(t){var g,b;let e=this.isAdmin,n=t.pictures??[];if(!ut("screens"))return v`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${Zt((g=this.hass)==null?void 0:g.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${Se((b=this.hass)==null?void 0:b.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let o=y=>this.updateFurniture({pictures:y}),i=this.entityOptions(()=>!0),s=y=>["string","number","boolean"].includes(typeof y),a=y=>{var M,P;return Object.entries(((P=(M=this.hass)==null?void 0:M.states[y])==null?void 0:P.attributes)??{}).filter(([I,F])=>s(F)&&I!=="friendly_name"&&I!=="icon").map(([I])=>I)},l=(y,M)=>{var I;let P=(I=this.hass)==null?void 0:I.states[y];return P?String((M?P.attributes[M]:P.state)??""):""},c=(y,M)=>{var F;let P=(F=this.hass)==null?void 0:F.states[y],I=!M&&Array.isArray(P==null?void 0:P.attributes.options)?P.attributes.options:[];return I.length?I:[l(y,M)]},d=y=>`${y.entity}\0${y.attribute??""}`,p=[];n.forEach((y,M)=>{let P=p.find(I=>d(I)===d(y));P?P.rows.push(M):p.push({entity:y.entity,attribute:y.attribute??null,rows:[M]})});let u=(y,M)=>o(n.map((P,I)=>y.rows.includes(I)?{...P,...M}:P)),h=(y,M)=>o(n.map((P,I)=>I===y?{...P,...M}:P)),f=this.storedPictures(),m=this.entityOptions(y=>y.startsWith("camera.")),_=y=>y.image.startsWith("camera:")?y.image.slice(7):null;return v`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?v`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${y=>this.updateFurniture({screen_bg:y.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:$}
      ${p.map(y=>v`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${i}
            .value=${y.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${M=>{M.stopPropagation(),u(y,{entity:M.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${M=>{let P=M.target.value||null,I=l(y.entity,P);o(n.map((F,S)=>y.rows.includes(S)?{...F,attribute:P,state:y.rows[0]===S?I:F.state}:F))}}
          >
            <option value="" ?selected=${!y.attribute}>${this.t("picture_state_of")}</option>
            ${a(y.entity).map(M=>v`<option value=${M} ?selected=${M===y.attribute}>${M}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(y.entity,y.attribute)||"\u2013"})}</span>
          ${y.rows.map(M=>{var F,S;let P=n[M],I=!!this.hass&&xr(this.hass,P);return v`<div class="fp3d-picture-row ${I?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${M}"
                placeholder=${this.t("picture_state")}
                .value=${P.state}
                ?disabled=${!e}
                @change=${x=>h(M,{state:x.target.value})}
              />
              <datalist id="fp3d-picture-states-${M}"><option value="*"></option>${c(y.entity,y.attribute).map(x=>v`<option value=${x}></option>`)}</datalist>
              ${this._images[P.image]?v`<img class="fp3d-picture-thumb" src=${this._images[P.image].url} alt="" /> `:$}
              ${_(P)&&((S=(F=this.hass)==null?void 0:F.states[_(P)])!=null&&S.attributes.entity_picture)?v`<img class="fp3d-picture-thumb" src=${String(this.hass.states[_(P)].attributes.entity_picture)} alt="" />`:$}
              <label class="fp3d-btn fp3d-picture-pick">
                ${P.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${x=>{this.uploadPicture(x,t,M)}} />
              </label>
              ${f.filter(x=>x!==P.image).length?v`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(x=>x!==P.image&&this._images[x]).map(x=>v`<button class="fp3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>h(M,{image:x})}><img src=${this._images[x].url} alt="" /></button>`)}
                  </div>`:$}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(P.image)?P.image:""}
                ?disabled=${!e}
                @change=${x=>{let w=x.target.value.trim();w&&h(M,{image:w})}}
              />
              ${m.length?v`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${m}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${_(P)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${x=>{x.stopPropagation(),x.detail.value!=="none"?h(M,{image:`camera:${x.detail.value}`}):_(P)&&h(M,{image:""})}}
                  ></fp3d-entity-picker>`:$}
              <span class="fp3d-sub">${I?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>o(n.filter((x,w)=>w!==M))}>✕</button>
            </div>`})}
          ${e?v`<button class="fp3d-btn" @click=${()=>o([...n,{entity:y.entity,attribute:y.attribute,state:l(y.entity,y.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:$}
        </div>`)}
      ${e?v`<button class="fp3d-btn" @click=${()=>{var y;return o([...n,{entity:((y=i[0])==null?void 0:y.id)??"",attribute:null,state:"on",image:""}])}}>${this.t("picture_add_entity")}</button>`:$}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){var u,h;let o=t.target,i=(u=o.files)==null?void 0:u[0];if(o.value="",!i)return;let s=await createImageBitmap(i),a=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*a),l.height=Math.round(s.height*a),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let c=l.toDataURL(i.type==="image/png"?"image/png":"image/jpeg",.85),d=B("pic");await Dn(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let p=((h=this.furnitureItem)==null?void 0:h.id)===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:p.map((f,m)=>m===n?{...f,image:d}:f)})}renderFurnitureLibrary(){let t=this.room,e=this._furnQuery.trim().toLowerCase();return v`<section>
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
      ${Object.entries(Bo).map(([n,o])=>this.librarySection(`group:${n}`,this.t(`furn_group_${n}`),[...o,...n==="kitchen"&&ut("fridge_smart")?["fridge_smart"]:[]].map(i=>({type:i,label:this.t(`furn_${i}`),search:Bt(Qa,`furn_${i}`)})),e))}
      ${(this.packs??[]).filter(n=>n.items.length).map(n=>this.librarySection(`pack:${n.id}`,kt(n),n.items.map(o=>({type:Oe(n.id,o.id),label:se(o),search:Object.values(o.name).join(" ")})),e))}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(t,e){let n=i=>{this.showPreview(t,i.currentTarget)},o=It(t)?"light":pn(t)?"switch":null;return v`<button
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
            <path d=${vn(o)} />
          </svg>`:$}
    </button>`}async showPreview(t,e){var i;let n=e.getBoundingClientRect(),o={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...o};try{let s=await Ci(),[a,l,c]=ie(t),d=s.furniturePreview({type:t,w:a,d:l,h:c,variant:null,lamp:Jo[t]??null},180,this.packs??[]);((i=this._preview)==null?void 0:i.type)===t&&(this._preview={type:t,url:d,...o})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?v`<div class="fp3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?v`<img src=${t.url} alt="" />`:v`<span class="fp3d-preview-wait"></span>`}
      <b>${Fe(this.hass,t.type)}</b>
    </div>`:$}renderDeviceForm(t){var a;let e=this.isAdmin,n=J(t.entity_id),o=n==="light",i=t.mount??"ceiling",s=n?Yn(n,((a=this.floor)==null?void 0:a.height)??2.5,o?i:null):1;return v`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?vn(n):""} />
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
        ${n&&ur.has(n)?v`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${l=>this.updateDevice({confirm:l.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:$}
        ${ut("energy_pro")&&Va(this.hass,t.entity_id)?v`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
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
    </section>`}renderDeviceList(t){var P,I,F,S,x;let e=this.isAdmin,n=this.hass,o=t.area_id?(I=(P=n==null?void 0:n.areas)==null?void 0:P[t.area_id])==null?void 0:I.name:void 0,i=n?we(n,t.area_id).filter(w=>hn(J(w))):[],s=new Set([...((F=this.floor)==null?void 0:F.placements.filter(w=>N([w.x,w.z],t.points)).map(w=>w.entity_id))??[],...((S=this.floor)==null?void 0:S.furniture.filter(w=>It(w.type)&&w.entity&&N([w.x,w.z],t.points)).map(w=>w.entity))??[]]),a=n?ii(n,i):[],l=a.map(w=>w.primary).filter(w=>!s.has(w)),c=this._deviceQuery.trim().toLowerCase(),d=w=>!c||st(n,w,o).toLowerCase().includes(c)||w.includes(c),p=(x=this.floor)==null?void 0:x.placements.filter(w=>J(w.entity_id)==="light"&&(w.mount??"ceiling")==="ceiling"&&N([w.x,w.z],t.points)).length,u=new Set(t.panel??[]),h=new Set(t.hidden??[]),f=new Set(t.no_state??[]),m=new Map;for(let w of this._doc.floors)for(let k of[...w.placements.map(A=>[A.entity_id,A.x,A.z]),...w.furniture.filter(A=>It(A.type)&&A.entity).map(A=>[A.entity,A.x,A.z])]){let A=w.rooms.find(E=>N([k[1],k[2]],E.points));A&&A.id!==t.id&&m.set(k[0],A.name)}let _=(w,k=!1,A=o)=>{let E=s.has(w),L=E?void 0:m.get(w);return v`<div class="fp3d-row fp3d-dev-row ${k?"fp3d-dev-extra":""} ${h.has(w)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${E?"":"fp3d-muted"}" ?disabled=${!E} @click=${()=>this.selectItem("device",w)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${vn(J(w))} />
          </svg>
          <span>${st(n,w,A)}${L?v`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:L})}</small>`:$}</span>
        </button>
        ${e&&!k?v`<button
              class="fp3d-pin ${h.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${h.has(w)}
              title=${this.t(h.has(w)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:h.has(w)?[...h].filter(O=>O!==w):[...h,w]})}
            >
              ${h.has(w)?"\u{1F648}":"\u{1F441}"}
            </button>`:$}
        ${e&&!k&&!h.has(w)?v`<button
              class="fp3d-pin ${f.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(w)}
              title=${this.t(f.has(w)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:f.has(w)?[...f].filter(O=>O!==w):[...f,w]})}
            >
              ${f.has(w)?"\u2205":"Aa"}
            </button>`:$}
        ${e&&!E?v`<button
              class="fp3d-pin ${u.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${u.has(w)}
              title=${this.t(u.has(w)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:u.has(w)?[...u].filter(O=>O!==w):[...u,w]})}
            >
              ${u.has(w)?"\u2605":"\u2606"}
            </button>`:$}
        ${e?E?v`<button class="fp3d-link" @click=${()=>this.removeDevice(w)}>${this.t("devices_remove")}</button>`:v`<button class="fp3d-link" @click=${()=>this.placeDevices([w])}>${this.t("devices_place")}</button>`:$}
      </div>`},g=e?this._devSource:"area",b=w=>{this._devSource=w,this._deviceQuery=""},y=v`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${w=>this._deviceQuery=w.target.value}
    />`,M=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return v`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?v`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${g==="area"} @click=${()=>b("area")}>${this.t("devices_src_area")}${i.length?` (${a.length})`:""}</button>
            <button aria-pressed=${g==="other"} @click=${()=>b("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${g==="none"} @click=${()=>b("none")}>${this.t("devices_src_none")}</button>
          </div>`:$}
      ${g!=="area"?v`${y}${this.renderDeviceExtras(t,_,g)}`:t.area_id?i.length?v`${e&&(p??0)>=2?v`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:$}
              ${i.length>8?y:$}
              <div class="fp3d-room-list">
                ${a.map(w=>{let k=w.others.filter(d),A=this._expanded.has(w.primary)||!!c&&k.length>0;return!d(w.primary)&&!k.length?$:v`${_(w.primary)}
                  ${w.others.length?v`<button
                        class="fp3d-more"
                        @click=${()=>{let E=new Set(this._expanded);E.has(w.primary)?E.delete(w.primary):E.add(w.primary),this._expanded=E}}
                      >
                        ${A?this.t("devices_less"):this.t("devices_more",{n:w.others.length})}
                      </button>`:$}
                  ${A?(c?k:w.others).map(E=>_(E,!0)):$}`})}
              </div>
              ${e&&l.length>1?v`<button class="fp3d-link fp3d-place-all" @click=${M}>${this.t("devices_place_all_n",{n:l.length})}</button>`:$}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:v`<p class="fp3d-sub">${this.t("devices_none")}</p>`:v`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(t,e,n){let o=this.hass;if(!o)return $;let i=50,s=this._deviceQuery.trim().toLowerCase(),a=(d,p)=>!s||`${st(o,d,p)} ${d} ${p??""}`.toLowerCase().includes(s),l=d=>d>0?v`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:$;if(n==="other"){let d=0,p=0,u=fr(o,t.area_id).map(h=>{let f=h.ids.filter(_=>a(_,h.name)),m=f.slice(0,Math.max(0,i-d));return d+=m.length,p+=f.length-m.length,m.length?v`<div class="fp3d-dev-area">${h.name}</div>${m.map(_=>e(_,!1,h.name))}`:$});return d?v`<div class="fp3d-room-list">${u}</div>${l(p)}`:v`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=mr(o).filter(d=>a(d));return c.length?v`<div class="fp3d-room-list">${c.slice(0,i).map(d=>e(d))}</div>${l(c.length-Math.min(c.length,i))}`:v`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(t){let e=this.hass;if(!e)return $;let n=(s,a)=>{let l={...t.climate??{},[s]:a},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},o=!!t.climate&&Object.values(t.climate).some(s=>s!=null),i=(s,a)=>{var u;let l=Zo[s],c=gr(e,this.floor??null,{...t,climate:null},s),d=ei[s],p=this.entityOptions(h=>{var f,m;return yt(h)&&((f=e.states[h])==null?void 0:f.attributes.device_class)===l||!!d&&h.startsWith("climate.")&&typeof((m=e.states[h])==null?void 0:m.attributes[d])=="number"}).map(h=>({...h,rank:(ke(e,h.id)===t.area_id?0:1)+(ti(e,h.id)?0:2)})).sort((h,f)=>h.rank-f.rank).map(({id:h,label:f})=>({id:h,label:f}));return this.entitySelect(a,((u=t.climate)==null?void 0:u[s])??null,c[0]??null,p,h=>n(s,h))};return v`<details class="fp3d-points" ?open=${o}>
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
                            >${gn(this.t("bg_ruler_length"),this.unit)}
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
    </details>`}async loadHistory(){if(this.hass)try{this._history=await gs(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await bs(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await Es(this.hass),e={};for(let o of ar(t.building))try{e[o]=await Ro(this.hass,o)}catch{}let n=new Date().toISOString().slice(0,10);Yo(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...t,exported_at:new Date().toISOString(),images:e}))}catch(t){alert(this.t("backup_import_error",{error:String((t==null?void 0:t.message)??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){var i,s;let e=t.target,n=(i=e.files)==null?void 0:i[0];if(e.value="",!n||!this.hass)return;let o;try{o=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if((o==null?void 0:o.format)!=="neonplan3d-backup"||!o.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let a=await As(this.hass,o.building,o.packs??[]),l=0;for(let[d,p]of Object.entries(o.images??{}))try{await Dn(this.hass,d,p),l++}catch{}this.setDoc(Kn(a.building)),this._floorId=((s=a.building.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let c=a.skipped.length?` ${this.t("backup_full_skipped",{packs:a.skipped.map(d=>d.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:a.packs,pictures:l})+c}catch(a){let{code:l,message:c}=a??{};alert(this.t("backup_import_error",{error:c??l??String(a)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);Yo(`neonplan3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(sr(this._doc,t),null,2))}async importPlan(t){var i,s;let e=t.target,n=(i=e.files)==null?void 0:i[0];if(e.value="",!n||!this.hass)return;let o;try{o=rr(await n.text())}catch(a){let l=a.message;alert(l==="not_json"?this.t("import_error_not_json"):l==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:l}));return}confirm(this.t("backup_import_confirm"))&&(await _s(this.hass).catch(()=>{}),this.setDoc(o),this._floorId=((s=o.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){var e;return new Date(t.saved_at*1e3).toLocaleString((e=this.hass)==null?void 0:e.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return v`<details
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
            <option value="auto" ?selected=${!t.units}>${this.t("units_auto",{unit:this.t(di(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
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
        ${this.hass?this.entitySelect(this.t("weather_entity"),t.weather_entity??null,Yr(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>e({weather_entity:n})):$}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${Ns.map(n=>{let o=t.weather_effects??jo;return v`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${o.includes(n)}
              @change=${i=>{let s=i.target.checked;e({weather_effects:s?[...new Set([...o,n])]:o.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.rain_warning!==!1} @change=${n=>e({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
        ${this.hass?v`${this.entitySelect(this.t("rain_entity"),t.rain_entity??null,void 0,this.entityOptions(n=>Qr(this.hass,n)),n=>e({rain_entity:n==="none"?null:n}))}
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
    </details>`}static styles=[Je,_o,Dt`
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",Bi);function Oc(r,t,e){let n=e[0]-t[0],o=e[1]-t[1],i=n*n+o*o||1,s=Math.min(1,Math.max(0,((r[0]-t[0])*n+(r[1]-t[1])*o)/i));return Math.hypot(r[0]-t[0]-n*s,r[1]-t[1]-o*s)}function vo(r){return r.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Qa={language:"en"};function yt(r){return/^(sensor|input_number|number)\./.test(r)}function Ni(r){return/^(binary_sensor|input_boolean)\./.test(r)}export{Bi as Fp3dEditor};
