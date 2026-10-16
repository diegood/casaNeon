var qn=globalThis,Kn=qn.ShadowRoot&&(qn.ShadyCSS===void 0||qn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ki=Symbol(),xs=new WeakMap,gn=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ki)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Kn&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=xs.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&xs.set(e,t))}return t}toString(){return this.cssText}},ks=a=>new gn(typeof a=="string"?a:a+"",void 0,Ki),ie=(a,...t)=>{let e=a.length===1?a[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[o+1],a[0]);return new gn(e,a,Ki)},Ms=(a,t)=>{if(Kn)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=qn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,a.appendChild(n)}},Ui=Kn?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return ks(e)})(a):a;var{is:Ul,defineProperty:Gl,getOwnPropertyDescriptor:Yl,getOwnPropertyNames:Jl,getOwnPropertySymbols:Ql,getPrototypeOf:Zl}=Object,Un=globalThis,Ss=Un.trustedTypes,Xl=Ss?Ss.emptyScript:"",Gi=Un.reactiveElementPolyfillSupport,_n=(a,t)=>a,Yi={toAttribute(a,t){switch(t){case Boolean:a=a?Xl:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},Es=(a,t)=>!Ul(a,t),Ps={attribute:!0,type:String,converter:Yi,reflect:!1,useDefault:!1,hasChanged:Es};Symbol.metadata??=Symbol("metadata"),Un.litPropertyMetadata??=new WeakMap;var ce=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ps){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&Gl(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:o}=Yl(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let r=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ps}static _$Ei(){if(this.hasOwnProperty(_n("elementProperties")))return;let t=Zl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_n("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_n("properties"))){let e=this.properties,n=[...Jl(e),...Ql(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Ui(i))}else t!==void 0&&e.push(Ui(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ms(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var o;let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:Yi).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){var o,s;let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:Yi;this._$Em=i;let d=l.fromAttribute(e,r.type);this[i]=d??((s=this._$Ej)==null?void 0:s.get(i))??d,this._$Em=null}}requestUpdate(t,e,n,i=!1,o){var s;if(t!==void 0){let r=this.constructor;if(i===!1&&(o=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??Es)(o,e)||n.useDefault&&n.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,s]of i){let{wrapped:r}=s,l=this[o];r!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ce.elementStyles=[],ce.shadowRootOptions={mode:"open"},ce[_n("elementProperties")]=new Map,ce[_n("finalized")]=new Map,Gi==null||Gi({ReactiveElement:ce}),(Un.reactiveElementVersions??=[]).push("2.1.2");var Zi=globalThis,As=a=>a,Gn=Zi.trustedTypes,zs=Gn?Gn.createPolicy("lit-html",{createHTML:a=>a}):void 0,Xi="$lit$",de=`lit$${Math.random().toFixed(9).slice(2)}$`,to="?"+de,tc=`<${to}>`,Fe=document,vn=()=>Fe.createComment(""),yn=a=>a===null||typeof a!="object"&&typeof a!="function",eo=Array.isArray,js=a=>eo(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",Ji=`[ 	
\f\r]`,bn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Is=/-->/g,Fs=/>/g,ze=RegExp(`>|${Ji}(?:([^\\s"'>=/]+)(${Ji}*=${Ji}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rs=/'/g,Ts=/"/g,Ls=/^(?:script|style|textarea|title)$/i,no=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),b=no(1),C=no(2),Ld=no(3),ue=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Os=new WeakMap,Ie=Fe.createTreeWalker(Fe,129);function Cs(a,t){if(!eo(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return zs!==void 0?zs.createHTML(t):t}var Vs=(a,t)=>{let e=a.length-1,n=[],i,o=t===2?"<svg>":t===3?"<math>":"",s=bn;for(let r=0;r<e;r++){let l=a[r],d,c,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===bn?c[1]==="!--"?s=Is:c[1]!==void 0?s=Fs:c[2]!==void 0?(Ls.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=ze):c[3]!==void 0&&(s=ze):s===ze?c[0]===">"?(s=i??bn,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?ze:c[3]==='"'?Ts:Rs):s===Ts||s===Rs?s=ze:s===Is||s===Fs?s=bn:(s=ze,i=void 0);let h=s===ze&&a[r+1].startsWith("/>")?" ":"";o+=s===bn?l+tc:u>=0?(n.push(d),l.slice(0,u)+Xi+l.slice(u)+de+h):l+de+(u===-2?r:h)}return[Cs(a,o+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},$n=class a{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,s=0,r=t.length-1,l=this.parts,[d,c]=Vs(t,e);if(this.el=a.createElement(d,n),Ie.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Ie.nextNode())!==null&&l.length<r;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(Xi)){let p=c[s++],h=i.getAttribute(u).split(de),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:f[2],strings:h,ctor:f[1]==="."?Jn:f[1]==="?"?Qn:f[1]==="@"?Zn:Te}),i.removeAttribute(u)}else u.startsWith(de)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(Ls.test(i.tagName)){let u=i.textContent.split(de),p=u.length-1;if(p>0){i.textContent=Gn?Gn.emptyScript:"";for(let h=0;h<p;h++)i.append(u[h],vn()),Ie.nextNode(),l.push({type:2,index:++o});i.append(u[p],vn())}}}else if(i.nodeType===8)if(i.data===to)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(de,u+1))!==-1;)l.push({type:7,index:o}),u+=de.length-1}o++}}static createElement(t,e){let n=Fe.createElement("template");return n.innerHTML=t,n}};function Re(a,t,e=a,n){var s,r;if(t===ue)return t;let i=n!==void 0?(s=e._$Co)==null?void 0:s[n]:e._$Cl,o=yn(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((r=i==null?void 0:i._$AO)==null||r.call(i,!1),o===void 0?i=void 0:(i=new o(a),i._$AT(a,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=Re(a,i._$AS(a,t.values),i,n)),t}var Yn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??Fe).importNode(e,!0);Ie.currentNode=i;let o=Ie.nextNode(),s=0,r=0,l=n[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new Je(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new Xn(o,this,t)),this._$AV.push(d),l=n[++r]}s!==(l==null?void 0:l.index)&&(o=Ie.nextNode(),s++)}return Ie.currentNode=Fe,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},Je=class a{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Re(this,t,e),yn(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==ue&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):js(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&yn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Fe.createTextNode(t)),this._$AH=t}$(t){var o;let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=$n.createElement(Cs(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{let s=new Yn(i,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Os.get(t.strings);return e===void 0&&Os.set(t.strings,e=new $n(t)),e}k(t){eo(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let o of t)i===e.length?e.push(n=new a(this.O(vn()),this.O(vn()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){let i=As(t).nextSibling;As(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},Te=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,e=this,n,i){let o=this.strings,s=!1;if(o===void 0)t=Re(this,t,e,0),s=!yn(t)||t!==this._$AH&&t!==ue,s&&(this._$AH=t);else{let r=t,l,d;for(t=o[0],l=0;l<o.length-1;l++)d=Re(this,r[n+l],e,l),d===ue&&(d=this._$AH[l]),s||=!yn(d)||d!==this._$AH[l],d===$?t=$:t!==$&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}s&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Jn=class extends Te{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},Qn=class extends Te{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},Zn=class extends Te{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=Re(this,t,e,0)??$)===ue)return;let n=this._$AH,i=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==$&&(n===$||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},Xn=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Re(this,t)}},Ds={M:Xi,P:de,A:to,C:1,L:Vs,R:Yn,D:js,V:Re,I:Je,H:Te,N:Qn,U:Zn,B:Jn,F:Xn},Qi=Zi.litHtmlPolyfillSupport;Qi==null||Qi($n,Je),(Zi.litHtmlVersions??=[]).push("3.3.3");var Hs=(a,t,e)=>{let n=(e==null?void 0:e.renderBefore)??t,i=n._$litPart$;if(i===void 0){let o=(e==null?void 0:e.renderBefore)??null;n._$litPart$=i=new Je(t.insertBefore(vn(),o),o,void 0,e??{})}return i._$AI(a),i};var wn=globalThis,Ut=class extends ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Hs(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ue}},Ws;Ut._$litElement$=!0,Ut.finalized=!0,(Ws=wn.litElementHydrateSupport)==null||Ws.call(wn,{LitElement:Ut});var io=wn.litElementPolyfillSupport;io==null||io({LitElement:Ut});(wn.litElementVersions??=[]).push("4.2.2");var ti={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xn=a=>(...t)=>({_$litDirective$:a,values:t}),Qe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var kn=class extends Qe{constructor(t){if(super(t),this.it=$,t.type!==ti.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$||t==null)return this._t=void 0,this.it=t;if(t===ue)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};kn.directiveName="unsafeHTML",kn.resultType=1;var Ns=xn(kn);var{I:iu}=Ds;var Bs=a=>a.strings===void 0;var Mn=(a,t)=>{var n;let e=a._$AN;if(e===void 0)return!1;for(let i of e)(n=i._$AO)==null||n.call(i,t,!1),Mn(i,t);return!0},ei=a=>{let t,e;do{if((t=a._$AM)===void 0)break;e=t._$AN,e.delete(a),a=t}while((e==null?void 0:e.size)===0)},qs=a=>{for(let t;t=a._$AM;a=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(a))break;e.add(a),ic(t)}};function ec(a){this._$AN!==void 0?(ei(this),this._$AM=a,qs(this)):this._$AM=a}function nc(a,t=!1,e=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=e;o<n.length;o++)Mn(n[o],!1),ei(n[o]);else n!=null&&(Mn(n,!1),ei(n));else Mn(this,a)}var ic=a=>{a.type==ti.CHILD&&(a._$AP??=nc,a._$AQ??=ec)},ni=class extends Qe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),qs(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),e&&(Mn(this,t),ei(this))}setValue(t){if(Bs(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var oo=new WeakMap,Ks=xn(class extends ni{render(a){return $}update(a,[t]){var n;let e=t!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=(n=a.options)==null?void 0:n.host,this.rt(this.ct=a.element)),$}rt(a){if(this.G!==void 0)if(this.isConnected||(a=void 0),typeof this.G=="function"){let t=this.ht??globalThis,e=oo.get(t);e===void 0&&(e=new WeakMap,oo.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,a),a!==void 0&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){var a,t;return typeof this.G=="function"?(a=oo.get(this.ht??globalThis))==null?void 0:a.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});async function so(a,t){return(await a.callWS({type:"neonplan3d/image/get",image_id:t})).data}async function ii(a,t,e){await a.callWS({type:"neonplan3d/image/set",image_id:t,data:e})}async function Us(a){return(await a.callWS({type:"neonplan3d/history/list"})).snapshots}async function Gs(a){await a.callWS({type:"neonplan3d/history/snapshot"})}async function Ys(a,t){return(await a.callWS({type:"neonplan3d/history/restore",snapshot_id:t})).revision}async function Js(a,t){return a.callWS({type:"neonplan3d/packs/import",pack:t})}async function Qs(a,t){await a.callWS({type:"neonplan3d/packs/remove",pack_id:t})}function Zs(a){return a.callWS({type:"neonplan3d/backup/export"})}function Xs(a,t,e){return a.callWS({type:"neonplan3d/backup/import",building:t,packs:e})}var oc=[],ro=new Map,sc=0;function tr(a){oc=a,ro=new Map(a.flatMap(t=>t.items.map(e=>[Oe(t.id,e.id),e]))),sc++}function Oe(a,t){return`pack:${a}:${t}`}function je(a){return a.startsWith("pack:")}function Le(a){return je(a)?a.endsWith(":curtain_motor")?"curtain":a.endsWith(":screen_roll")?"screen":null:null}function pe(a){return a==="robot_vacuum"||je(a)&&a.endsWith(":robot_vacuum")}var rc={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function er(a){var t;return(t=yt(a))==null?void 0:t.parts.find(e=>e.screen)}function nr(a){let t=yt(a);if(!t)return!1;let[e,n,i]=t.size;return t.parts.some(o=>{if(!o.screen)return!1;let[s,r]=[o.w*e,o.d*n,o.h*i].sort((l,d)=>d-l);return s>=.06&&r>=.06})}function yt(a){if(!je(a))return;let t=ro.get(a);if(t)return t;let[,e,...n]=a.split(":"),i=rc[e];return i?ro.get(`pack:${i}:${n.join(":")}`):void 0}function Wt(a){var t;return se[a]??((t=yt(a))==null?void 0:t.size)??[.6,.6,.8]}function Ze(a){var t,e;return lr.has(a)||!!((t=yt(a))!=null&&t.electric)||!!((e=yt(a))!=null&&e.light)}function oe(a){return a.name.es??a.name.en??Object.values(a.name)[0]??a.id}var ac={architecture:"Arquitectura y acabados",bath:"Ba\xF1o",bedroom:"Dormitorio",cinema:"Cine en casa y Hi-Fi",exclusive:"Exclusivo: frigor\xEDfico inteligente",fitness:"Fitness",garage:"Garaje y taller",garden:"Jard\xEDn y terraza",kids:"Cuarto infantil",kitchen:"Cocina",living:"Sal\xF3n",office:"Oficina y gaming",pets:"Mascotas",smarthome:"Smart home y tecnolog\xEDa",stairs:"Escaleras y barandillas",utility:"Lavadero e instalaciones",vehicles:"Veh\xEDculos",starter:"Pack de inicio",pro_auto:"Pro: Auto Pro",pro_timetravel:"Pro: Viaje en el tiempo",pro_pool:"Pro: Piscina Pro",pro_camera:"Pro: Cabina de c\xE1mara",pro_energy:"Pro: Energ\xEDa Pro",pro_screens:"Pro: Pantallas en directo",pro_sound:"Pro: Sonido y Cine",pro_weather:"Pro: Tiempo exterior"};function he(a){let t=a.id.replace(/^mastershort\./,""),e=t.endsWith("_sample"),n=ac[e?t.slice(0,-7):t];return n?e?`${n} \u2013 muestra`:n:a.name}function Rt(a,t){let e=yt(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return ir;if(or.has(t.type))return Math.max(0,a.height-sr(t.type,t.h));if(t.type==="led_strip")return Math.max(0,a.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return ar(a,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,a.height-t.h);default:return e?0:rr(t)}}var cr=["always","no_power","never"],dr=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],oi={field:null,size:1,right:0,up:0},ur=["navigate","more_info","service","fire_dom_event"];var Sn={cat:["orange","tabby","black","white","grey","calico","cream"],dog:["golden","cream","brown","black","white","grey"],rabbit:["white","grey","brown","black","cream"]},pr=["dachshund","pug","terrier","labrador","shepherd"];function lo(a,t,e){return a?t?!!e.lock_plan:!!a.locked:!1}var hr=["rain","snow","fog","clouds","lightning","sky"],co=["rain","snow","clouds","lightning","sky"],uo=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],po={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function si(a){return a==="hedge"||a==="fence"||a==="pergola"}var fr=["x","-x","z","-z"];function lc(a,t,e){let n=a.slope??0;if(!n||a.type==="pool")return 0;let i=a.slope_dir??"x",o=(d,c)=>i==="x"?d:i==="-x"?-d:i==="z"?c:-c,s=1/0,r=-1/0;for(let[d,c]of a.points){let u=o(d,c);s=Math.min(s,u),r=Math.max(r,u)}if(r-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(r-s)));return n*l}function cc(a,t,e,n){return gr(a,t)+po[t.type]-dc(a,t,e,n)}var ho=-.2,ao={set:!1,level:ho};function mr(a){let t=(a==null?void 0:a.settings.terrain)??null;ao={set:(t==null?void 0:t.level)!=null,level:(t==null?void 0:t.level)??ho}}function ri(a){return a.elevation>.3?0:ao.set?ao.level-a.elevation:ho}function gr(a,t){return ri(a)+(t.offset??0)}function dc(a,t,e,n){return t.type==="pool"?0:lc(t,e,n)}function _r(a,t,e){let n=(a.outdoor??[]).filter(o=>!si(o.type)&&o.type!=="pool"&&Y([t,e],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?cc(a,i,t,e):ri(a)}var br=["filter","backwash","rinse","waste","recirculate","closed"];function vr(a,t){return gr(a,t)+(t.above?ai(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function fo(a){return a.depth&&a.depth>=.3?Math.min(5,a.depth):a.above?ai(a):1.5}function mo(a,t){return t.above?!1:(a.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!si(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Y(n,e.points)))}function yr(a,t){return!t.above&&!mo(a,t)?go(a,t)-.05:vr(a,t)-fo(t)}function go(a,t){return vr(a,t)-.15}function ai(a){return a.height&&a.height>.3?a.height:1.2}function li(a,t,e,n,i){let o=_=>Math.round(_*1e3)/1e3,s=n-t,r=i-e,l=(t+n)/2,d=(e+i)/2;if(a==="rect")return[[t,e],[n,e],[n,i],[t,i]];let c=40;if(a==="round"){let _=Math.min(s,r)/2;return Array.from({length:c},(m,v)=>[o(l+_*Math.cos(v/c*Math.PI*2)),o(d+_*Math.sin(v/c*Math.PI*2))])}let u=s>=r,p=(u?r:s)/2,h=Math.max(0,(u?s:r)/2-p),f=[],g=c/2;for(let _=0;_<2;_++){let m=_===0?1:-1;for(let v=0;v<=g;v++){let y=-Math.PI/2+v/g*Math.PI+(_===0?0:Math.PI),w=m*h+p*Math.cos(y),P=p*Math.sin(y);f.push(u?[o(l+w),o(d+P)]:[o(l+P),o(d+w)])}}return f}var uc={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},$r=["wood","oak","tiles","carpet","stone","concrete"],wr={type:"none",pitch:35,overhang:.4},pc={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...wr}};function xr(a,t,e){return{id:a,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var hc=2.75;function kr(a,t){if(t!=null&&Number.isFinite(t))return Math.round(t*hc*100)/100;let e=a.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function Mr(a,t,e){let n=a.rooms.flatMap(r=>r.points.map(l=>l[0])),i=a.rooms.flatMap(r=>r.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return t.map((r,l)=>{let d=o+l%3*4.5,c=s+Math.floor(l/3)*3.5;return{id:e(),name:r.name,area_id:r.area_id,points:[[d,c],[d+4,c],[d+4,c+3],[d,c+3]],floor_material:"wood"}})}function Sr(a,t,e,n){let i=a.rotation*Math.PI/180,o=Math.cos(i),s=Math.sin(i),[r,l]=t,d=a.x-r*(a.w/2)*o+l*(a.d/2)*s,c=a.z-r*(a.w/2)*s-l*(a.d/2)*o,u=e[0]-d,p=e[1]-c,h=m=>Math.max(.1,Math.round(m/n)*n),f=h((u*o+p*s)*r),g=h((-u*s+p*o)*l),_=m=>Math.round(m*1e3)/1e3;return{x:_(d+r*(f/2)*o-l*(g/2)*s),z:_(c+r*(f/2)*s+l*(g/2)*o),w:_(f),d:_(g)}}var ci=["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","ac_unit","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell","awning","waste_bin","mailbox","wall_switch","wall_socket"],di={lights:["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","ac_unit","stairs","stairs_u","robot_vacuum"],vehicles:["parking"],outdoor:["awning"],household:["waste_bin","mailbox"],electric:["wall_switch","wall_socket"]},St=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Pr=.3,fe=["meter","inverter","home_battery","wallbox","grid_point"],Er=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),ir=1.75;function re(a){if(["lamp_ceiling","lamp_ceiling_fan","lamp_panel","lamp_pendant","stairwell","parking"].includes(a.type)||_o.has(a.type))return!1;let t=yt(a.type);return!((t==null?void 0:t.mount)==="ceiling"&&t.light)}var or=new Set(["lamp_downlight","lamp_spot"]);function sr(a,t){return a==="lamp_spot"?Math.max(.06,t)+.008:.02}var _o=new Set(["stairs","stairs_u"]);function Ar(a,t,e){let n=Math.max(4,Math.round(e/.18)),i=Math.floor(n/2)+1,o=i-1,s=n-i,r=Math.min(.12,a*.06),l=(a-r)/2,d=Math.min(l,t*.45),c=(t-d)/o;return{n,k:i,steps1:o,steps2:s,gap:r,fw:l,landing:d,run:c,rise:e/n}}function Gt(a){var t;return Er.has(a)||!!((t=yt(a))!=null&&t.light)}var fc=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function bo(a,t,e,n=0){let i=At(a.points),o=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,r=[];for(let l=0;l<t;l++)for(let d=0;d<e;d++){let c=[Math.round((i.x0+n+o/e*(d+.5))*1e3)/1e3,Math.round((i.z0+n+s/t*(l+.5))*1e3)/1e3];Y(c,a.points)&&r.push(c)}return r}function Xe(a,t,e){let n=s=>Math.round(s*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(a[0]+i*t),n(a[1]+o*t)]}var mc=1.05,gc=.3;function rr(a){switch(a.type){case"home_battery":return a.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-a.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return a.variant==="bank"?.75:a.variant==="pole"||a.variant==="pillar"||a.variant==="parcel"?0:1;case"wall_switch":return mc;case"wall_socket":return gc;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function ar(a,t,e){var i;let n=0;for(let o of a.furniture)!(fc.has(o.type)||(i=yt(o.type))!=null&&i.surface)||!Y([t,e],Nt(o))||(n=Math.max(n,o.h));return n}var lr=new Set([...Er,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),se={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_ceiling_fan:[1.2,1.2,.35],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.086,.05,.086],wall_socket:[.086,.05,.086],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var vo=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],yo=["standard","bars","glass_wall"];function ui(a,t){return a.type==="door"?a.style&&vo.includes(a.style)?a.style:t?"front":"interior":a.style&&yo.includes(a.style)?a.style:"standard"}function zr(a,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let i=t==="sidelights",o=a-.04,s=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),r=(o-s)/(i?2:1),l=n.sidelight_width??r,d=i?n.sidelight_width2??n.sidelight_width??r:0;l=Math.max(.1,l),d=i?Math.max(.1,d):0;let c=o-.5;if(l+d>c){let p=Math.max(0,c)/(l+d);l*=p,d*=p}return i?{panels:[[.02,.02+l],[a-.02-d,a-.02]],x0:.02+l,x1:a-.02-d}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:a-.02}:{panels:[[a-.02-l,a-.02]],x0:.02,x1:a-.02-l}}function $o(a){return a==="front"||a==="front_glass"||a==="sidelight"||a==="sidelights"}var pi={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function hi(a){if(a.type==="garage")return"garage";if(a.type==="window"&&a.style==="glass_wall")return"glass_wall";let t=a.leaves===2;return a.type==="door"?!t&&a.style&&$o(a.style)?"front":t?"door_double":"door":a.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function fi(a){var t;a.energy={...uc,...a.energy??{}},a.presence=a.presence??[],a.settings={...pc,...a.settings,roof:{...wr,...((t=a.settings)==null?void 0:t.roof)??{}}};for(let e of a.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(i=>({...i,panel:i.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(i=>({...i,mount:i.mount??null,rotation:i.rotation??0})),e.furniture=e.furniture.map(i=>({...i,entity:i.entity??null,power:i.power??null}));let n=e.placements.filter(i=>i.entity_id.startsWith("light.")&&!i.pin);if(n.length){let i={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let s=i[o.mount??"ceiling"],[r,l,d]=se[s];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:o.x,z:o.z,rotation:0,w:r,d:l,h:d,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light.")||o.pin)}e.openings=e.openings.map(i=>({...i,hinge:i.hinge??"left",leaves:i.leaves??1,swing:i.swing??"in",style:i.style??null,cover:i.cover??null,contact:i.contact??null,contact2:i.contact2??null,tilt:i.tilt??null}))}return a}function U(a){return`${a}_${Math.random().toString(36).slice(2,10)}`}function Pt(a){let t=0;for(let e=0;e<a.length;e++){let[n,i]=a[e],[o,s]=a[(e+1)%a.length];t+=n*s-o*i}return t/2}function Ct(a){return Math.abs(Pt(a))}function Xt(a){let t=Pt(a);if(Math.abs(t)<1e-9){let i=a.length||1;return[a.reduce((o,s)=>o+s[0],0)/i,a.reduce((o,s)=>o+s[1],0)/i]}let e=0,n=0;for(let i=0;i<a.length;i++){let[o,s]=a[i],[r,l]=a[(i+1)%a.length],d=o*l-r*s;e+=(o+r)*d,n+=(s+l)*d}return[e/(6*t),n/(6*t)]}function mi(a){if(a.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=a[t],[i,o]=a[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function At(a){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[o,s]of a)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),i=Math.max(i,s);return{x0:t,z0:e,x1:n,z1:i}}function Nt(a){let t=a.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=a.w/2,o=a.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,r])=>[a.x+s*e-r*n,a.z+s*n+r*e])}function Y(a,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[o,s]=t[n],[r,l]=t[i];s>a[1]!=l>a[1]&&a[0]<(r-o)*(a[1]-s)/(l-s)+o&&(e=!e)}return e}var gi={lamp_ceiling:"ceiling",lamp_ceiling_fan:"ceiling_fan",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Ir="neonplan3d";function _c(a){let t=structuredClone(a);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function Fr(a,t){return{format:Ir,version:1,exported_at:new Date().toISOString(),building:t?_c(a):structuredClone(a)}}function Rr(a){let t;try{t=JSON.parse(a)}catch{throw new Error("not_json")}let e=t,n=(e==null?void 0:e.format)===Ir?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return fi(n)}function Tr(a){var e;let t=new Set;for(let n of a.floors){(e=n.background)!=null&&e.image_id&&t.add(n.background.image_id);for(let i of n.furniture)for(let o of i.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&t.add(o.image)}return[...t]}function wo(a,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=a,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var jr=/^(light|switch|input_boolean|fan|cover)\./;function xo(a){let t=(a.switch_keys??[]).slice(0,4).map(e=>e&&e!=="none"?e:null);return t.length?t:[null]}var Lr=/^(switch|input_boolean|light)\./,Or=a=>a&&a!=="none"?a:null;function ko(a){let t=(a.socket_outlets??[]).slice(0,4).map(e=>({entity:Or(e==null?void 0:e.entity),power:Or(e==null?void 0:e.power)}));return t.length?t:[{entity:null,power:null}]}function Mo(a){return Math.round((.086+.071*(Math.max(1,Math.min(4,a))-1))*1e3)/1e3}function Cr(a){return a.switch_ring&&a.switch_ring!=="none"?a.switch_ring:null}var bc={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},vc=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),yc=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),$c=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),_i=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Br=new Set(["light","switch","fan"]);function qr(a){return a.slice(0,a.indexOf("."))}function lt(a){return bc[qr(a)]??null}function En(a){return a!==null&&a!=="scene"&&a!=="script"}function De(a,t){var n,i,o;let e=(n=a.entities)==null?void 0:n[t];return e?e.area_id?e.area_id:e.device_id&&((o=(i=a.devices)==null?void 0:i[e.device_id])==null?void 0:o.area_id)||null:null}function Vr(a,t){var s;let e=lt(t);if(!e)return!1;let n=(s=a.entities)==null?void 0:s[t];if(n!=null&&n.hidden||n!=null&&n.entity_category)return!1;let i=a.states[t];if(!i)return!1;let o=i.attributes.device_class;return e==="sensor"?o?vc.has(o):yc.has(String(i.attributes.unit_of_measurement??"")):e==="binary"?o?$c.has(o):!!(n!=null&&n.area_id):!0}var wc=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Dr(a,t){var i;if(lt(t)!=="sensor")return!1;let e=(i=a.entities)==null?void 0:i[t];if(e!=null&&e.hidden||e!=null&&e.entity_category)return!1;let n=a.states[t];return!n||!n.attributes.unit_of_measurement||wc.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||bi(n)}var So=null;function Ce(a){var l,d;let t=So;if(t&&t.entities===a.entities&&t.devices===a.devices&&(t.states===a.states||(t.states=a.states,Object.keys(a.states).length===t.stateCount)))return t;let e=new Map,n=new Map,i=[],o=new Map,s=new Map;for(let c of Object.keys(a.entities??{})){let u=a.entities[c],p=u.device_id;p&&u.area_id&&(s.get(p)??s.set(p,new Set).get(p)).add(u.area_id),p&&Ro(a,c)&&(n.get(p)??n.set(p,[]).get(p)).push(c),p&&!u.hidden&&!u.entity_category&&(o.get(p)??o.set(p,new Set).get(p)).add(qr(c));let h=Vr(a,c),f=De(a,c);if(!f){(h||Dr(a,c))&&En(lt(c))&&i.push(c);continue}h&&(e.get(f)??e.set(f,[]).get(f)).push(c)}if(a.entities)for(let c of Object.keys(a.states))a.entities[c]||(Vr(a,c)||Dr(a,c))&&En(lt(c))&&i.push(c);i.sort((c,u)=>_i.indexOf(lt(c))-_i.indexOf(lt(u))||Mt(a,c).localeCompare(Mt(a,u)));for(let[c,u]of e){let p=(d=(l=a.areas)==null?void 0:l[c])==null?void 0:d.name;u.sort((h,f)=>{let g=_i.indexOf(lt(h)),_=_i.indexOf(lt(f));return g-_||Mt(a,h,p).localeCompare(Mt(a,f,p))})}let r=new Set([...s].filter(([,c])=>c.size>1).map(([c])=>c));return So={entities:a.entities,devices:a.devices,states:a.states,stateCount:Object.keys(a.states).length,areas:e,power:n,unassigned:i,domains:o,hubs:r},So}function Ve(a,t){return!t||!a.entities?[]:Ce(a).areas.get(t)??[]}function Kr(a,t){return a.entities?[...Ce(a).areas].filter(([e])=>e!==t).map(([e,n])=>{var i,o;return{areaId:e,name:((o=(i=a.areas)==null?void 0:i[e])==null?void 0:o.name)??e,ids:n.filter(s=>En(lt(s)))}}).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function Ur(a){return a.entities?Ce(a).unassigned:[]}var Po={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},xc=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),kc=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Eo(a,t){var i,o,s;let e=(o=(i=a.entities)==null?void 0:i[t])==null?void 0:o.device_id,n=e&&!Ce(a).hubs.has(e)?Ce(a).domains.get(e):void 0;return n&&[...n].some(r=>xc.has(r))?!1:!kc.test(`${t} ${((s=a.states[t])==null?void 0:s.attributes.friendly_name)??""}`)}function Gr(a,t,e,n){var h;let i=(h=e.climate)==null?void 0:h[n];if(i==="none")return[];if(i)return a.states[i]?[i]:[];let o=Po[n],s=(f,g)=>Y([f,g],e.points),r=(t==null?void 0:t.placements.filter(f=>f.entity_id.startsWith("sensor.")))??[],l=r.filter(f=>s(f.x,f.z)).map(f=>f.entity_id),d=new Set(r.filter(f=>!s(f.x,f.z)).map(f=>f.entity_id)),c=[...new Set([...Ve(a,e.area_id).filter(f=>!d.has(f)),...l])],u=c.filter(f=>{var g;return f.startsWith("sensor.")&&((g=a.states[f])==null?void 0:g.attributes.device_class)===o&&Eo(a,f)});if(u.length)return u;let p=Ao[n];return p?c.filter(f=>{var g;return f.startsWith("climate.")&&typeof((g=a.states[f])==null?void 0:g.attributes[p])=="number"}):[]}var Ao={temperature:"current_temperature",humidity:"current_humidity"};function Yr(a,t){return!!a.entities&&Ce(a).hubs.has(t)}function zo(a,t){return a.entities?Ce(a).power.get(t)??[]:[]}function Mt(a,t,e){var o,s;let n=a.states[t],i=(n==null?void 0:n.attributes.friendly_name)??((s=(o=a.entities)==null?void 0:o[t])==null?void 0:s.name)??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let r=i.slice(e.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function bi(a){return!a||a.state==="unavailable"||a.state==="unknown"}function Jr(a){return!!a&&a.entity_id.startsWith("sensor.")&&a.attributes.device_class==="enum"}function vi(a,t,e=null){if(a==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(a==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(a){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function Mc(a,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],o=t[(n+1)%t.length],s=o[0]-i[0],r=o[1]-i[1],l=s*s+r*r||1,d=Math.min(1,Math.max(0,((a[0]-i[0])*s+(a[1]-i[1])*r)/l));e=Math.min(e,Math.hypot(a[0]-i[0]-s*d,a[1]-i[1]-r*d))}return e}function Qr(a,t,e=[]){if(a.points.length<3||!t.length)return[];let n=a.points,i=n.map(v=>v[0]),o=n.map(v=>v[1]),s=Math.min(...i),r=Math.min(...o),l=Math.max(...i),d=Math.max(...o),c=Math.min(l-s,d-r),u=Math.max(.1,Math.min(.25,c/8)),p=Math.min(.35,c/5),h=Xt(n),f=[];for(let v=s+u/2;v<l;v+=u)for(let y=r+u/2;y<d;y+=u){let w=[v,y];if(!Y(w,n))continue;let P=Mc(w,n);P<p||f.push({p:w,wall:P})}f.length||f.push({p:h,wall:0});let g=[...e],_=[],m=Math.min(.7,c/4);for(let v of t){let y=lt(v)==="light",w=f[0].p,P=-1/0;for(let{p:E,wall:S}of f){let x=g.length?Math.min(...g.map(I=>Math.hypot(E[0]-I[0],E[1]-I[1]))):3,k=Math.hypot(E[0]-h[0],E[1]-h[1]),M=Math.min(x,3)*2;k<m&&!y&&(M-=10),M-=y?k*.35:S*1.2,M>P+1e-9&&(P=M,w=E)}let z=[Math.round(w[0]*100)/100,Math.round(w[1]*100)/100];g.push(z),_.push({entity_id:v,x:z[0],z:z[1],y:null,mount:null})}return _}var Sc=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Pc=new Set(["garage","gate"]),Ec=new Set(["window","opening"]);function Pn(a,t,e=!1){let n=new Map;return t.length&&a.forEach((i,o)=>{let s=e&&t.length===1?t[0]:t[o];s&&n.set(i.id,s)}),n}function Zr(a,t){let e=new Map,n=(o,s)=>o==="none"?null:o??s??null,i=(o,s,r)=>({cover:n(o.cover,s),contact:o.sensor==="handle"&&o.contact==null?null:n(o.contact,r),tilt:o.tilt==="none"?null:o.tilt,contact2:o.leaves===2&&o.contact2&&o.contact2!=="none"?o.contact2:null,tilt2:o.leaves===2&&o.tilt2&&o.tilt2!=="none"?o.tilt2:null,position:o.position&&o.position!=="none"?o.position:null,positionInverted:!!o.position_inverted,tiltAngle:o.tilt_angle&&o.tilt_angle!=="none"?o.tilt_angle:null,tiltMax:o.tilt_max??null,tiltOffset:o.tilt_offset??null,tiltInvert:!!o.tilt_invert,shut:!!o.shut,...o.contact_invert?{contactInvert:!0}:{},...o.cover_invert?{coverInvert:!0}:{}});for(let o of t){for(let s of o.rooms){let r=o.openings.filter(y=>y.room_id===s.id).sort((y,w)=>y.edge-w.edge||y.offset-w.offset);if(!r.length)continue;let l=Ve(a,s.area_id),d=y=>{var w;return(w=a.states[y])==null?void 0:w.attributes.device_class},c=l.filter(y=>lt(y)==="cover"&&Sc.has(d(y))),u=r.filter(y=>y.type==="window"),p=r.filter(y=>y.type==="door"),h=r.filter(y=>y.type==="garage"),f=Pn(u,c,!0),g=Pn(u,l.filter(y=>lt(y)==="binary"&&Ec.has(d(y)))),_=Pn(p,l.filter(y=>lt(y)==="binary"&&d(y)==="door")),m=Pn(h,l.filter(y=>lt(y)==="cover"&&Pc.has(d(y)??""))),v=Pn(h,l.filter(y=>lt(y)==="binary"&&d(y)==="garage_door"));for(let y of r){let w=y.type==="window"?f:y.type==="garage"?m:null,P=y.type==="window"?g:y.type==="garage"?v:_;e.set(y.id,i(y,w==null?void 0:w.get(y.id),P.get(y.id)))}}for(let s of o.openings)e.has(s.id)||e.set(s.id,i(s))}return e}var Ac=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Io(a){if(!a||bi(a))return null;let t=a.attributes.window_state;for(let e of[typeof t=="string"?t:null,a.state]){if(!e)continue;let n=Ac.find(([i])=>i.test(e.trim()));if(n)return n[1]}return null}function Fo(a,t){var s,r;let e=new Map,n=[];for(let l of t){let d=lt(l)==="camera"?`camera:${l}`:((r=(s=a.entities)==null?void 0:s[l])==null?void 0:r.device_id)??`entity:${l}`,c=e.get(d);c||(e.set(d,c=[]),n.push(d)),c.push(l)}let i=n.map(l=>{let d=e.get(l),c=d.find(u=>{var p,h;return!((h=(p=a.entities)==null?void 0:p[u])!=null&&h.name)})??d[0];return{primary:c,others:d.filter(u=>u!==c)}}),o=new Map(t.map((l,d)=>[l,d]));return i.sort((l,d)=>o.get(l.primary)-o.get(d.primary))}function zc(a,t){return Fo(a,t).map(e=>e.primary)}var Hr={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},Xr=new Set(["tv_board","tv_wall"]);function ta(a,t){let e=a.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=t.state.trim().toLowerCase();return t.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function yi(a){return Xr.has(a)||!!er(a)}function $i(a){return yi(a)||a==="desk"||a==="fridge_smart"}var Wr={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Ro(a,t){var e;return t.startsWith("sensor.")&&((e=a.states[t])==null?void 0:e.attributes.device_class)==="power"}function Ic(a,t){var n,i;if(Ro(a,t))return t;let e=(i=(n=a.entities)==null?void 0:n[t])==null?void 0:i.device_id;return e?zo(a,e).find(o=>o!==t)??null:null}function tn(a,t){let e=new Map;for(let n of t){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in Wr,r=s?Wr[o.type]:Hr[o.type]??(pe(o.type)?Hr.robot_vacuum:void 0);if(!r&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&Y([o.x,o.z],h.points)),d=l?zc(a,Ve(a,l.area_id)):[],c=h=>`${h} ${Mt(a,h)}`,u=o.entity==="none"?null:o.entity??null;if(o.entity==null){let h=d.filter(f=>!i.has(f));if(s){let f=h.filter(g=>lt(g)==="light");u=f.find(g=>r.test(c(g)))??f[0]??null}else if(pe(o.type)){let f=(l==null?void 0:l.area_id)??null;u=Object.keys(a.entities??{}).find(g=>g.startsWith("vacuum.")&&!i.has(g)&&De(a,g)===f)??null}else if(o.type==="radiator"||o.type==="ac_unit"){let f=h.filter(g=>lt(g)==="climate");u=f.find(g=>r.test(c(g)))??f[0]??null}else if(yi(o.type)){let f=h.filter(g=>lt(g)==="media");u=f.find(g=>{var _;return((_=a.states[g])==null?void 0:_.attributes.device_class)==="tv"})??f.find(g=>r==null?void 0:r.test(c(g)))??(Xr.has(o.type)?f[0]??null:null)}else r&&(u=h.find(f=>["switch","media","fan"].includes(lt(f)??"")&&r.test(c(f)))??null);u&&i.add(u)}let p=o.power==="none"?null:o.power??null;o.power==null&&(p=u?Ic(a,u):null,!p&&r&&l&&!s&&(p=Ve(a,l.area_id).find(f=>Ro(a,f)&&!i.has(f)&&r.test(c(f)))??null),p&&i.add(p)),(u||p)&&e.set(o.id,{entity:u,power:p})}}return e}var Nr=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,Fc={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function ea(a,t){var u,p;let e=t.car??{},n=h=>h&&h!=="none"?h:null,i=n(e.device)??n(t.entity),o=i?(p=(u=a.entities)==null?void 0:u[i])==null?void 0:p.device_id:null,s=o&&a.entities?Object.values(a.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],r=h=>{var f,g,_;return`${h} ${((f=a.states[h])==null?void 0:f.attributes.friendly_name)??""} ${((_=(g=a.entities)==null?void 0:g[h])==null?void 0:_.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(h,f,g)=>s.find(_=>f.includes(_.split(".")[0])&&Fc[h].test(r(_))&&(!g||g(_)))??null,d=h=>{var f;return String(((f=a.states[h])==null?void 0:f.attributes.unit_of_measurement)??"")},c=h=>{var f;return String(((f=a.states[h])==null?void 0:f.attributes.device_class)??"")};return{soc:n(e.soc)??s.find(h=>h.startsWith("sensor.")&&c(h)==="battery")??l("soc",["sensor"],h=>d(h)==="%"),range:n(e.range)??l("range",["sensor"],h=>/km|mi/.test(d(h)))??l("range",["sensor"]),charging:n(e.charging)??l("charging",["sensor"],h=>/^k?W$/.test(d(h)))??l("charging",["binary_sensor","switch"]),plugged:n(e.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&c(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(e.lock)??s.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(e.climate)??s.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(e.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function na(a,t,e){var i,o;if(e==="none")return null;if(e)return e;let n=t?(o=(i=a.entities)==null?void 0:i[t])==null?void 0:o.device_id:null;if(!n||!a.entities)return null;for(let s of Object.values(a.entities))if(!(s.device_id!==n||!s.entity_id.startsWith("sensor."))&&(Nr.test(s.translation_key??"")||Nr.test(s.entity_id.split(".")[1])))return s.entity_id;return null}var dt=(a,t,e,n,i="")=>C`<rect class=${i} x=${Math.min(a,e)} y=${Math.min(t,n)} width=${Math.abs(e-a)} height=${Math.abs(n-t)} />`,it=(a,t,e,n,i="")=>C`<line class=${i} x1=${a} y1=${t} x2=${e} y2=${n} />`,$t=(a,t,e,n="")=>C`<circle class=${n} cx=${a} cy=${t} r=${e} />`,To=(a,t,e,n,i="")=>C`<ellipse class=${i} cx=${a} cy=${t} rx=${e} ry=${n} />`;function Oo(a,t,e){let n=[];for(let i=1;i<e;i++){let o=-a/2+a/e*i;n.push(it(o,t/2,o,t/2-Math.min(.12,t*.3)))}return n}function ia(a,t,e,n){let i=Math.min(.24,t*.28),o=n?Math.min(.2,a*.12):0,s=[dt(-a/2,-t/2,a/2,-t/2+i,"fp3d-sym-fill")];n&&s.push(dt(-a/2,-t/2,-a/2+o,t/2,"fp3d-sym-fill"),dt(a/2-o,-t/2,a/2,t/2,"fp3d-sym-fill"));let r=a-2*o;for(let l=1;l<e;l++){let d=-a/2+o+r/e*l;s.push(it(d,-t/2+i,d,t/2-.02))}return s}function oa(a,t,e){let n=-a/2,i=a/2,o=-t/2,s=t/2,r=Math.max(.3,Math.min(.95,t*.5,a*(e?.34:.45))),l=Math.min(.24,r*.28),d=Math.min(.2,r*.24),c=[dt(n,o,i,o+l,"fp3d-sym-fill"),dt(n,o+l,n+l,s,"fp3d-sym-fill"),dt(n+l,s-d,n+r,s,"fp3d-sym-fill")];e?c.push(dt(i-l,o+l,i,s,"fp3d-sym-fill"),dt(i-r,s-d,i-l,s,"fp3d-sym-fill")):c.push(dt(i-d,o+l,i,o+r,"fp3d-sym-fill"));let u=e?i-r:i-d;c.push(it(n+r,s-d,n+r,o+r),it(n+r,o+r,u,o+r)),e&&c.push(it(i-r,o+r,i-r,s-d));let p=n+l,h=e?i-l:i-d,f=Math.max(1,Math.round((h-p)/.62));for(let v=1;v<f;v++)c.push(it(p+(h-p)/f*v,o+l,p+(h-p)/f*v,o+r));let g=o+r,_=s-d,m=_-g<.2?0:Math.max(1,Math.round((_-g)/.62));for(let v=0;v<m;v++){let y=g+(_-g)/m*v;c.push(it(n+l,y,n+r,y)),e&&c.push(it(i-r,y,i-l,y))}return c}function sa(a,t,e){switch(a){case"sofa":return ia(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return ia(t,e,1,!0);case"sofa_l":return oa(t,e,!1);case"sofa_u":return oa(t,e,!0);case"bench":return[dt(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[dt(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),dt(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),it(-t/2+n,-e/2+n,t/2,-e/2+n),it(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[dt(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[$t(0,.03,Math.min(t,e)*.36),dt(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[$t(0,0,Math.min(t,e)*.42)];case"stool":return[dt(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[dt(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return a==="desk"&&n.push(it(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,o=[dt(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),it(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let s=0;s<n;s++)o.push(dt(-t/2+.13+i*s,-e/2+.12,-t/2+.07+i*(s+1),-e/2+.12+Math.min(.4,e*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Oo(t,e,a==="nightstand"||a==="tall_cabinet"||a==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[dt(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...Oo(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[it(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[it(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[$t(-t*.22,-e*.2,n),$t(t*.22,-e*.2,n*.8),$t(-t*.22,e*.2,n*.8),$t(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[dt(-n/2,-e/2+.1,n/2,e/2-.08),$t(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[it(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[$t(0,.05,Math.min(t,e)*.3),it(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[dt(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),$t(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[it(-t/2,-e/2,t/2,e/2),it(t/2,-e/2,-t/2,e/2),$t(0,0,.04)];case"wc":return[dt(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),To(0,e*.1,t*.36,e*.3)];case"washbasin":return[To(0,.03,t*.34,e*.3)];case"tv_board":return[it(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...Oo(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[it(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[$t(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),$t(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[$t(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),$t(0,0,Math.min(t,e)*1.6)];case"parking":return[dt(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),it(-t*.15,e/2-.5,0,e/2-.22,"fp3d-sym-strong"),it(0,e/2-.22,t*.15,e/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[dt(-t*.45,-e/2,t*.45,-e/2+e*.3,"fp3d-sym-fill"),$t(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(t/.1));for(let o=1;o<i;o++)n.push(it(-t/2+t/i*o,-e/2,-t/2+t/i*o,e/2));return n}case"lamp_panel":return[dt(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_ceiling_fan":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[$t(0,0,n*.9,"fp3d-sym-fill"),$t(0,0,n*.3)];if(a==="lamp_ceiling"||a==="lamp_pendant"||a==="lamp_ceiling_fan")for(let o=0;o<8;o++){let s=o/8*Math.PI*2;i.push(it(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[dt(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),To(0,.01,t*.4,e*.4)];case"led_strip":return[it(-t/2,0,t/2,0,"fp3d-sym-strong")];case"plant":return[$t(0,0,Math.min(t,e)*.46),$t(0,0,Math.min(t,e)*.25)];case"rug":return[dt(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let o=1;o<n;o++)i.push(it(-t/2,e/2-e/n*o,t/2,e/2-e/n*o));return i.push(it(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),it(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),it(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:o,landing:s,run:r}=Ar(t,e,2.75),l=-e/2+s,d=-t/2+o,c=t/2-o,u=[it(-t/2,l,d,l),it(d,l,d,e/2),it(c,l,c,e/2)];for(let _=1;_<n;_++)u.push(it(-t/2,e/2-r*_,d,e/2-r*_));for(let _=1;_<=i;_++)u.push(it(c,l+r*_,t/2,l+r*_));let p=(-t/2+d)/2,h=(c+t/2)/2,f=-e/2+s/2,g=e/2-.15;return u.push(it(p,e/2-.1,p,f,"fp3d-sym-strong"),it(p,f,h,f,"fp3d-sym-strong"),it(h,f,h,g,"fp3d-sym-strong"),it(h-.15,g-.2,h,g,"fp3d-sym-strong"),it(h+.15,g-.2,h,g,"fp3d-sym-strong")),u}default:{let n=yt(a);return n?Rc(n,t,e):$}}}function Rc(a,t,e){var n;return(n=a.symbol)!=null&&n.length?a.symbol.map(i=>i.shape==="rect"?dt((i.x-i.w/2)*t,(i.z-i.d/2)*e,(i.x+i.w/2)*t,(i.z+i.d/2)*e,i.fill?"fp3d-sym-fill":""):i.shape==="circle"?$t(i.x*t,i.z*e,i.r*Math.min(t,e)):it(i.x1*t,i.z1*e,i.x2*t,i.z2*e)):a.parts.filter(i=>i.w<.98||i.d<.98).map(i=>i.shape==="cyl"&&(i.axis??"y")==="y"?$t(i.x*t,i.z*e,Math.min(i.w*t,i.d*e)/2):dt((i.x-i.w/2)*t,(i.z-i.d/2)*e,(i.x+i.w/2)*t,(i.z+i.d/2)*e))}var Et=(a,t)=>[a[0]-t[0],a[1]-t[1]],we=(a,t)=>[a[0]+t[0],a[1]+t[1]],me=(a,t)=>[a[0]*t,a[1]*t],zn=(a,t)=>a[0]*t[0]+a[1]*t[1],en=(a,t)=>a[0]*t[1]-a[1]*t[0],An=a=>Math.hypot(a[0],a[1]),ae=a=>{let t=An(a)||1;return[a[0]/t,a[1]/t]},ra=a=>[-a[1],a[0]],aa=a=>[a[1],-a[0]];function Tt(a,t,e=[]){let n=t.eps??.005,i=[],o=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),s=[],r=S=>{for(let x=0;x<s.length;x++)if(Math.abs(s[x][0]-S[0])<=n&&Math.abs(s[x][1]-S[1])<=n)return x;return s.push([S[0],S[1]]),s.length-1},l=[];for(let S of a){let x=S.points;if(x.length<3||Math.abs(Pt(x))<1e-6)continue;let k=Pt(x)>0,M=x.map(r);for(let I=0;I<x.length;I++){let A=M[I],j=M[(I+1)%x.length];A!==j&&l.push(k?{u:A,v:j,room:S.id,edge:I,forward:!0}:{u:j,v:A,room:S.id,edge:I,forward:!1})}}let d=o.map(S=>[r(S.a),r(S.b)]),c=new Set;for(let S of a){let x=S.points;x.length<3||(S.wall_splits??[]).forEach((k,M)=>{if(!k||M>=x.length)return;let I=x[M],A=Et(x[(M+1)%x.length],I),j=An(A);for(let O of k)O>n&&O<j-n&&c.add(r(we(I,me(A,O/j))))})}let u=[];for(let S of l){let x=s[S.u],k=s[S.v],M=Et(k,x),I=An(M),A=me(M,1/I),j=[];for(let L=0;L<s.length;L++){if(L===S.u||L===S.v)continue;let D=Et(s[L],x),W=zn(D,A);W<=n||W>=I-n||Math.abs(en(A,D))<=n&&j.push({t:W,id:L})}j.sort((L,D)=>L.t-D.t);let O=[{t:0,id:S.u},...j,{t:I,id:S.v}];for(let L=0;L+1<O.length;L++){let D=O[L],W=O[L+1],tt=S.forward?D.t:I-W.t,Q=S.forward?W.t:I-D.t;u.push({u:D.id,v:W.id,room:S.room,edge:S.edge,t0:tt,t1:Q})}}let p=new Map;for(let S of u){let x=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,k=p.get(x);k||p.set(x,k=[]),k.push(S)}let h=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),f=new Map;for(let S of u){let x=`${S.room}:${S.edge}`;f.set(x,[...f.get(x)??[],S.t0].sort((k,M)=>k-M))}let g=S=>{var M,I;let x=(I=(M=a.find(A=>A.id===S.room))==null?void 0:M.wall_heights)==null?void 0:I[S.edge];if(!Array.isArray(x))return x;let k=f.get(`${S.room}:${S.edge}`)??[];return x[k.indexOf(S.t0)]??null},_=S=>{let x=S.map(g).filter(M=>typeof M=="number"&&M>0);if(x.length)return Math.min(...x);let k=S.map(M=>{var I;return(I=a.find(A=>A.id===M.room))==null?void 0:I.ceiling_height});return k.every(M=>typeof M=="number"&&M>0)?Math.max(...k):void 0},m=S=>{let x=S.map(k=>{var M,I;return(I=(M=a.find(A=>A.id===k.room))==null?void 0:M.wall_thickness)==null?void 0:I[k.edge]}).filter(k=>typeof k=="number"&&k>0);return x.length?Math.max(...x):void 0},v=S=>S.some(x=>g(x)===0),y=[],w=[];for(let S of p.values()){let x=S[0],k=S.find(M=>M!==x&&M.u===x.v&&M.v===x.u&&M.room!==x.room);for(let M of S)M!==x&&M!==k&&M.room!==x.room&&i.push(`overlap:${x.room}:${M.room}`);if(v(k?[x,k]:[x])){k&&y.push([x.room,k.room]);continue}if(k){let M=m([x,k])??t.interior;w.push({a:x.u,b:x.v,left:M/2,right:M/2,exterior:!1,roomLeft:x.room,roomRight:k.room,sources:[h(x),h(k)],height:_([x,k])})}else w.push({a:x.u,b:x.v,left:0,right:m([x])??t.exterior,exterior:!0,roomLeft:x.room,roomRight:null,sources:[h(x)],height:_([x])})}let P=S=>ae(Et(s[S.b],s[S.a]));for(let S of w){if(S.exterior||S.free)continue;let x=new Set;for(let M of[S.a,S.b])for(let I of w)!I.exterior||I.free||I.a!==M&&I.b!==M||Math.abs(en(P(S),P(I)))>1e-6||(I.roomLeft===S.roomLeft?x.add("left"):I.roomLeft===S.roomRight&&x.add("right"));if(x.size!==1)continue;let k=S.left+S.right;x.has("left")?(S.left=0,S.right=k):(S.left=k,S.right=0)}o.forEach((S,x)=>{var L;let[k,M]=d[x];if(k===M)return;let I=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],A=((L=a.find(D=>D.points.length>=3&&Y(I,D.points)))==null?void 0:L.id)??null,j=(S.thickness??t.interior)/2,O=typeof S.height=="number"&&S.height>0?S.height:void 0;w.push({free:S.id,a:k,b:M,left:j,right:j,exterior:!1,roomLeft:A,roomRight:A,sources:[],height:O})}),w=Oc(w,s,c);let z=Lc(w,s);return{walls:w.map((S,x)=>{let k=s[S.a],M=s[S.b],I=z.get(`${x}:a`),A=z.get(`${x}:b`),j=Cc([I.right,A.left,M,A.right,I.left,k],1e-6);return{id:Tc(k,M),a:[k[0],k[1]],b:[M[0],M[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:j,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{}}}),warnings:[...new Set(i)],open:y}}function Tc(a,t){let e=o=>Math.round(o*100),[n,i]=a[0]<t[0]||a[0]===t[0]&&a[1]<=t[1]?[a,t]:[t,a];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function la(a){return{...a,a:a.b,b:a.a,left:a.right,right:a.left,roomLeft:a.roomRight,roomRight:a.roomLeft}}function Oc(a,t,e=new Set){let n=a.slice(),i=!0;for(;i;){i=!1;let o=new Map;n.forEach((s,r)=>{for(let l of[s.a,s.b]){let d=o.get(l);d||o.set(l,d=[]),d.push(r)}});for(let[s,r]of o){if(r.length!==2||e.has(s))continue;let l=n[r[0]],d=n[r[1]];if(l.b!==s&&(l=la(l)),d.a!==s&&(d=la(d)),l.a===d.b)continue;let c=ae(Et(t[l.b],t[l.a])),u=ae(Et(t[d.b],t[d.a]));if(Math.abs(en(c,u))>1e-6||zn(c,u)<=0||l.free||d.free||l.height!==d.height||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let p={...l,b:d.b,sources:jc(l.sources,d.sources)},h=n.filter((f,g)=>g!==r[0]&&g!==r[1]);h.push(p),n.length=0,n.push(...h),i=!0;break}}return n}function jc(a,t){let e=a.map(n=>({...n}));for(let n of t){let i=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function Lc(a,t){let e=new Map;a.forEach((i,o)=>{let s=ae(Et(t[i.b],t[i.a])),r=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:me(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,d]of r){let c=e.get(l);c||e.set(l,c=[]),c.push(d)}});let n=new Map;for(let[i,o]of e){let s=t[i];o.sort((d,c)=>d.angle-c.angle);let r=d=>({left:we(s,me(ra(d.d),d.left)),right:we(s,me(aa(d.d),d.right))});for(let d of o)n.set(d.key,r(d));if(o.length<2)continue;let l=4*Math.max(...o.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<o.length;d++){let c=o[d],u=o[(d+1)%o.length],p=we(s,me(ra(c.d),c.left)),h=we(s,me(aa(u.d),u.right)),f=en(c.d,u.d);if(Math.abs(f)<1e-4)continue;let g=en(Et(h,p),u.d)/f,_=we(p,me(c.d,g));An(Et(_,s))>l||(n.get(c.key).left=_,n.get(u.key).right=_)}}return n}function Cc(a,t){let e=a.filter((i,o)=>An(Et(i,a[(o+1)%a.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let o=e[(i+e.length-1)%e.length],s=e[i],r=e[(i+1)%e.length],l=Et(s,o),d=Et(r,s);if(Math.abs(en(ae(l),ae(d)))<1e-7&&zn(l,d)>0){e=e.filter((c,u)=>u!==i),n=!0;break}}}return e}function xe(a,t,e){let n=a.points[t],i=a.points[(t+1)%a.points.length],o=ae(Et(i,n));return we(n,me(o,e))}function nn(a,t,e){if(a.wall){let i=e.find(r=>r.id===a.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=ae(Et(i.b,i.a));return{room:{id:a.room_id,name:"",area_id:null,points:[i.a,i.b,we(i.a,[-o[1],o[0]])]},edge:0}}let n=t.find(i=>i.id===a.room_id);return n&&a.edge<n.points.length?{room:n,edge:a.edge}:null}function jo(a,t,e){if(!t.wall)return Vc(a,e.room,e.edge,t.offset);let n=a.find(o=>o.free===t.wall);if(!n)return null;let i=xe(e.room,0,t.offset);return{wall:n,s:zn(Et(i,n.a),ae(Et(n.b,n.a)))}}function Vc(a,t,e,n){for(let i of a){if(!i.sources.find(r=>r.room_id===t.id&&r.edge===e&&n>=r.t0-1e-6&&n<=r.t1+1e-6))continue;let s=xe(t,e,n);return{wall:i,s:zn(Et(s,i.a),ae(Et(i.b,i.a)))}}return null}function Lo(a,t){let e=Pt(t)>0?1:-1,n=[...a];for(let i=0;i<t.length&&n.length;i++){let o=t[i],s=t[(i+1)%t.length],r=d=>e*((s[0]-o[0])*(d[1]-o[1])-(s[1]-o[1])*(d[0]-o[0])),l=n;n=[];for(let d=0;d<l.length;d++){let c=l[d],u=l[(d+1)%l.length],p=r(c),h=r(u);if(p>=0&&n.push(c),p>=0!=h>=0){let f=p/(p-h);n.push([c[0]+(u[0]-c[0])*f,c[1]+(u[1]-c[1])*f])}}}return n}var ca=a=>a.length>=3?Math.abs(Ct(a)):0;function Dc(a,t){return a.exterior?0:a.roomLeft===t?a.left:a.roomRight===t?a.right:0}function da(a,t,e){let n=ca(a.points);if(a.points.length<3)return n;let{walls:i}=Tt(t.rooms,e,t.walls??[]),o=n,s=i.filter(r=>!r.free&&(r.roomLeft===a.id||r.roomRight===a.id));for(let r of i){let l=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2];if((r.free?!Y(l,a.points):!s.includes(r))||(o-=ca(Lo(a.points,r.footprint)),!r.free))continue;let d=Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1]);if(d<.2)continue;let c=[(r.b[0]-r.a[0])/d,(r.b[1]-r.a[1])/d],u=null;for(let p of s){let h=Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1]);if(h<.2)continue;let f=[(p.b[0]-p.a[0])/h,(p.b[1]-p.a[1])/h];if(Math.abs(c[0]*f[1]-c[1]*f[0])>.05)continue;let g=Math.abs((l[0]-p.a[0])*f[1]-(l[1]-p.a[1])*f[0]),_=(r.a[0]-p.a[0])*f[0]+(r.a[1]-p.a[1])*f[1],m=(r.b[0]-p.a[0])*f[0]+(r.b[1]-p.a[1])*f[1],v=Math.min(h,Math.max(_,m))-Math.max(0,Math.min(_,m)),y=g-(r.left+r.right)/2-Dc(p,a.id);v>.1&&y>0&&g<1&&(!u||y<u.gap)&&(u={gap:y,overlap:v})}u&&(o-=u.gap*u.overlap)}return Math.max(0,o)}function Co(a,t){var e,n;return t==="metric"||t==="imperial"?t:((n=(e=a==null?void 0:a.config)==null?void 0:e.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function ua(a,t){return String(Number(a.toFixed(t)))}function He(a,t=2){let e=a<0?"-":"",n=Math.round(Math.abs(a)/.0254*(t>=2?10:1))/(t>=2?10:1),i=Math.floor(n/12+1e-9),o=n-i*12,s=ua(o,t>=2?1:0);return i?o<.05?`${e}${i}'`:`${e}${i}' ${s}"`:`${e}${s}"`}function Vo(a,t){let e=a.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,s=!1,r=e;for(let l of e.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];o=!0,r=r.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(i+=d*.3048,s=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?i+=d*.0254:c==="mm"?i+=d/1e3:c==="cm"?i+=d/100:c==="m"?i+=d:i+=t==="imperial"?d*(s?.0254:.3048):d}return!o||/[^\s+]/.test(r)?null:i}function pa(a,t,e){return t==="imperial"?He(a):`${e(a)} m`}function ha(a,t,e){return t==="imperial"?`${ua(a/(.3048*.3048),1)} ft\xB2`:`${e(a)} m\xB2`}function In(a,t){return t==="imperial"?a.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):a}var Hc=.05,Wc=.2,Nc=.12;function Bc(a){let t=[];return a.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let o=Pt(i)>=0;for(let s=0;s<i.length;s++){let r=i[s],l=i[(s+1)%i.length],d=l[0]-r[0],c=l[1]-r[1],u=Math.hypot(d,c);if(u<.05)continue;let p=[d/u,c/u],h=o?[p[1],-p[0]]:[-p[1],p[0]];(p[1]<-1e-9||Math.abs(p[1])<=1e-9&&p[0]<0)&&(p=[-p[0],-p[1]]);let f=[-p[1],p[0]],g=r[0]*p[0]+r[1]*p[1],_=l[0]*p[0]+l[1]*p[1];t.push({room:n,index:s,dir:p,normal:f,offset:r[0]*f[0]+r[1]*f[1],outside:h[0]*f[0]+h[1]*f[1]>0?1:-1,t0:Math.min(g,_),t1:Math.max(g,_)})}}),t}function fa(a,t=.6){let e=Bc(a),n=e.map((c,u)=>u),i=c=>n[c]===c?c:n[c]=i(n[c]),o=[];for(let c=0;c<e.length;c++)for(let u=c+1;u<e.length;u++){let p=e[c],h=e[u];if(p.room===h.room||Math.abs(p.dir[0]*h.dir[1]-p.dir[1]*h.dir[0])>Hc||p.outside===h.outside)continue;let f=(h.offset-p.offset)*p.outside;f>t||f<-Nc||Math.abs(f)<1e-4||Math.min(p.t1,h.t1)-Math.max(p.t0,h.t0)<Wc||(o.push(Math.round(f*1e3)/1e3),n[i(c)]=i(u))}if(!o.length)return{rooms:a.map(c=>({...c,points:c.points.map(u=>[u[0],u[1]])})),gaps:o};let s=new Map;e.forEach((c,u)=>{let p=i(u);if(p===u&&!e.some((f,g)=>g!==u&&i(g)===u))return;let h=s.get(p)??[];h.push(u),s.set(p,h)});let r=a.map(c=>c.points.map(()=>new Map));for(let[c,u]of s){let p=u.reduce((h,f)=>h+e[f].offset,0)/u.length;for(let h of u){let f=e[h],g=p-f.offset,_=[f.normal[0]*g,f.normal[1]*g],m=a[f.room].points.length;r[f.room][f.index].set(c,_),r[f.room][(f.index+1)%m].set(c,_)}}let l=c=>Math.round(c*1e3)/1e3;return{rooms:a.map((c,u)=>({...c,points:c.points.map((p,h)=>{let f=p[0],g=p[1];for(let[_,m]of r[u][h].values())f+=_,g+=m;return[l(f),l(g)]})})),gaps:o}}function ma(a){let t=a.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}function ga(a,t=.05,e=.5){let n=a.map(o=>({...o,points:o.points.map(s=>[s[0],s[1]])})),i=0;for(let o=0;o<4;o++){let s=(l,d)=>n.reduce((c,u)=>c+u.points.filter(p=>Math.abs(p[l]-d)<1e-6).length,0),r=!1;for(let l of n)for(let d=0;d<l.points.length;d++){let c=l.points[d],u=l.points[(d+1)%l.points.length],p=Math.abs(u[0]-c[0]),h=Math.abs(u[1]-c[1]),f=h>1e-6&&h<=t&&p>=e?1:p>1e-6&&p<=t&&h>=e?0:null;if(f===null)continue;let[g,_]=s(f,c[f])>=s(f,u[f])?[c[f],u[f]]:[u[f],c[f]];for(let m of n)for(let v of m.points)Math.abs(v[f]-_)<1e-6&&(v[f]=g);i++,r=!0}if(!r)break}return{rooms:n,fixed:i}}var qc=.25,wi=a=>Math.round(a*1e3)/1e3;function Do(a,t,e,n,i){let o=a.rooms.find(s=>s.points.length>=3&&Y([t,e],s.points));return!o||Y([n,i],o.points)?[n,i]:Y([n,e],o.points)?[n,e]:Y([t,i],o.points)?[t,i]:[t,e]}function ke(a,t,e,n){let i=Math.hypot(n[0]-e[0],n[1]-e[1]);if(i<.01)return!1;let o=[(n[0]-e[0])/i,(n[1]-e[1])/i],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),r=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return a.rooms.some(l=>l.id!==t&&l.points.some((d,c)=>{let u=l.points[(c+1)%l.points.length];return s(d)>.02||s(u)>.02?!1:Math.min(i,Math.max(r(d),r(u)))-Math.max(0,Math.min(r(d),r(u)))>.05}))}function Ho(a,t,e,n,i,o=.05){let s=a.rooms.find(p=>p.points.length>=3&&Y([t.x,t.z],p.points));if(!s)return[e,n];let r=s.points,l=Pt(r)>=0?1:-1,d=Nt({...t}),c=e,u=n;for(let p=0;p<2;p++){let h=Nt({...t,x:c,z:u});for(let f=0;f<r.length;f++){let g=r[f],_=r[(f+1)%r.length],m=Math.hypot(_[0]-g[0],_[1]-g[1]);if(m<.05)continue;let v=[(_[0]-g[0])/m,(_[1]-g[1])/m],y=[-v[1]*l,v[0]*l],w=ke(a,s.id,g,_)?i/2:0,P=0;h.forEach((z,E)=>{let S=(z[0]-g[0])*v[0]+(z[1]-g[1])*v[1];if(S<-.01||S>m+.01)return;let x=(z[0]-g[0])*y[0]+(z[1]-g[1])*y[1]-w,k=d[E];(k[0]-g[0])*y[0]+(k[1]-g[1])*y[1]-w<-o||x<P&&(P=x)}),P<-1e-4&&(c-=y[0]*P,u-=y[1]*P)}}return[wi(c),wi(u)]}function Fn(a,t,e,n=qc){let i=a.rooms.find(d=>d.points.length>=3&&Y([t.x,t.z],d.points));if(!i)return null;let o=i.points,s=Pt(o)>=0?1:-1,r=e/2,l=null;for(let d=0;d<o.length;d++){let c=o[d],u=o[(d+1)%o.length],p=Math.hypot(u[0]-c[0],u[1]-c[1]);if(p<.3)continue;let h=[(u[0]-c[0])/p,(u[1]-c[1])/p],f=[-h[1]*s,h[0]*s],g=(t.x-c[0])*h[0]+(t.z-c[1])*h[1];if(g<0||g>p)continue;let m=a.rooms.some(S=>S.id!==i.id&&S.points.some((x,k)=>{let M=S.points[(k+1)%S.points.length],I=Math.abs((x[0]-c[0])*f[0]+(x[1]-c[1])*f[1]),A=Math.abs((M[0]-c[0])*f[0]+(M[1]-c[1])*f[1]);return I<.02&&A<.02}))?r:0,v=(t.x-c[0])*f[0]+(t.z-c[1])*f[1]-m,y=Math.atan2(-f[0],f[1])*180/Math.PI,w=S=>Math.abs((t.rotation-S+540)%360-180),z=[{rotation:y,extent:t.d/2},{rotation:y+90,extent:t.w/2},{rotation:y-90,extent:t.w/2}].reduce((S,x)=>w(x.rotation)<w(S.rotation)?x:S);if(w(z.rotation)>50)continue;let E=v-z.extent;Math.abs(E)>n||l&&Math.abs(E)>=Math.abs(l.gap)||(l={x:wi(t.x-f[0]*E),z:wi(t.z-f[1]*E),rotation:(Math.round(z.rotation)%360+360)%360,gap:E})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function on(a,t){let e=a.points,n=e[t],i=e[(t+1)%e.length],o=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/o,(i[1]-n[1])/o],r=[-s[1],s[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];Y([l[0]+r[0]*.02,l[1]+r[1]*.02],e)||(r=[-r[0],-r[1]]);let d=[r[1],-r[0]];return{a:n,b:i,u:s,n:r,length:o,rightward:s[0]*d[0]+s[1]*d[1]>0}}function _t(a,t){let e=t[0]-a.a[0],n=t[1]-a.a[1];return{s:e*a.u[0]+n*a.u[1],d:e*a.n[0]+n*a.n[1]}}function ge(a,t,e){return[a.a[0]+a.u[0]*t+a.n[0]*e,a.a[1]+a.u[1]*t+a.n[1]*e]}var Kc=.45;function xi(a,t){let e=[];for(let n of t.openings){if(n.wall)continue;let i=t.rooms.find(r=>r.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:o,d:s}=_t(a,xe(i,n.edge,n.offset));Math.abs(s)>.4||o<-.05||o>a.length+.05||e.push(Uc(n,o))}return e}function Uc(a,t){return{kind:"opening",id:a.id,s0:t-a.width/2,s1:t+a.width/2,y0:a.sill,y1:a.sill+a.height,d:0}}function sn(a,t,e,n=Kc){let i=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let s=Y([o.x,o.z],e.points),r=Nt(o).map(h=>_t(a,h)),l=Math.min(...r.map(h=>h.d)),d=Math.min(...r.map(h=>h.s)),c=Math.max(...r.map(h=>h.s)),u=_t(a,[o.x,o.z]);if(!s&&u.d<=0||u.d<=0||l>n||l<-.3||c<.02||d>a.length-.02)continue;let p=Rt(t,o);i.push({kind:"furniture",id:o.id,s0:d,s1:c,y0:p,y1:p+o.h,d:l})}return i}function ki(a,t,e){let n=i=>Math.round(i*1e3)/1e3;return{x:n(t.x+a.u[0]*e),z:n(t.z+a.u[1]*e)}}var Wo=.3;function Bt(a,t){let e=a.from?t(a.from):null,n=a.to?t(a.to):null,i=a.height??Wo,o=[];if(a.heights)e&&o.push([e.x,e.y,e.z]),a.points.forEach(([s,r],l)=>{var d;return o.push([s,((d=a.heights)==null?void 0:d[l])??i,r])}),n&&o.push([n.x,n.y,n.z]);else{if(!e||!n)return[];o.push([e.x,e.y,e.z],[e.x,i,e.z]);for(let[s,r]of a.points)o.push([s,i,r]);o.push([n.x,i,n.z],[n.x,n.y,n.z])}return o.filter((s,r)=>r===0||Mi(s,o[r-1])>.001)}function Mi(a,t){return Math.hypot(t[0]-a[0],t[1]-a[1],t[2]-a[2])}function No(a){let t=0;for(let e=1;e<a.length;e++)t+=Mi(a[e-1],a[e]);return t}function _a(a,t){if(a.length<2)return null;let e=Math.max(0,t);for(let n=1;n<a.length;n++){let[i,o]=[a[n-1],a[n]],s=Mi(i,o);if(!(s<1e-6)){if(e<=s||n===a.length-1){let r=Math.min(1,e/s),l=[(o[0]-i[0])/s,(o[1]-i[1])/s,(o[2]-i[2])/s];return{p:[i[0]+(o[0]-i[0])*r,i[1]+(o[1]-i[1])*r,i[2]+(o[2]-i[2])*r],dir:l,seg:n-1}}e-=s}}return null}function rn(a,t){let e=null,n=0;for(let i=1;i<a.length;i++){let[o,s]=[a[i-1],a[i]],r=[s[0]-o[0],s[1]-o[1],s[2]-o[2]],l=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],d=l>0?Math.max(0,Math.min(1,((t[0]-o[0])*r[0]+(t[1]-o[1])*r[1]+(t[2]-o[2])*r[2])/l)):0,c=[o[0]+r[0]*d,o[1]+r[1]*d,o[2]+r[2]*d],u=Mi(c,t);(!e||u<e.d)&&(e={at:n+Math.sqrt(l)*d,d:u,seg:i-1,p:c}),n+=Math.sqrt(l)}return e}function _e(a,t,e,n){let[i,o]=ge(a,t,n);return[i,e,o]}function ba(a,t,e,n){let i=ge(a,0,t),o=ge(e,0,n),s=a.u[0]*-e.u[1]-a.u[1]*-e.u[0];if(Math.abs(s)<1e-6)return null;let r=o[0]-i[0],l=o[1]-i[1],d=(r*-e.u[1]-l*-e.u[0])/s;return[i[0]+a.u[0]*d,i[1]+a.u[1]*d]}var va=["top6","side6","four"];function te(a){return a==="pool_pump"?["suction","pressure"]:a==="pool_filter"?["pump","return","waste"]:a==="pool_heat_pump"?["in","out"]:[]}function an(a){return a==="wall"||a==="floor"?["inside","outside"]:["in","out1","out2"]}function at(a){let[t="",e="",n]=a.split(":");return{kind:t,id:e,port:n||null}}function wt(a){let{kind:t,id:e}=at(a);return t&&e?`${t}:${e}`:a}function Gc(a,t){let{w:e,d:n,h:i}=a;if(a.type==="pool_pump")return t==="suction"?[e*.5,i*.55,0]:t==="pressure"?[e*.05,i*.9,0]:null;if(a.type==="pool_filter"){let o=Math.min(e,n)/2;if(a.variant==="side6"){let l=o+.08;return t==="pump"?[l,i*.6,0]:t==="return"?[l+.06,i*.48,0]:t==="waste"?[l,i*.36,0]:null}let s=i*.89,r=o*.45+.04;return t==="pump"?[-r,s,0]:t==="return"?[r,s,0]:t==="waste"?[0,s,-r]:null}if(a.type==="pool_heat_pump"){let o=a.variant==="left"||a.variant==="back"?a.variant:"right";if(t!=="in"&&t!=="out")return null;let s=t==="in"?i*.25:i*.45;return o==="back"?[t==="in"?-e*.15:e*.15,s,-n/2-.04]:[(o==="left"?-1:1)*(e/2+.04),s,-n*.2]}return null}function ya(a,t){let e=Gc(a,t);if(!e)return null;let n=a.rotation*Math.PI/180,[i,o]=[Math.cos(n),Math.sin(n)];return{x:a.x+e[0]*i-e[2]*o,y:e[1],z:a.z+e[0]*o+e[2]*i}}function ln(a,t){if(t==="outside"){if(a.kind==="floor")return{x:a.x,y:a.y-.3,z:a.z};if(a.kind==="wall"){let e=(a.depth??.3)+.05;return{x:a.x-(a.nx??0)*e,y:a.y,z:a.z-(a.nz??0)*e}}}return{x:a.x,y:a.y,z:a.z}}function Rn(a){return a==="pressure"||a==="return"||a==="waste"||a==="out"?"source":a==="suction"||a==="pump"||a==="in"?"sink":null}function Tn(a){return a==="skimmer"||a==="drain"?"source":"sink"}function gt(a,t,e){let n=e.pool??{},i=go(t,e);return o=>{var d,c;let{kind:s,id:r,port:l}=at(o);if(s==="port"){let u=(d=n.ports)==null?void 0:d.find(h=>h.id===r);if(!u)return null;let p=u.kind==="skimmer"?i-(u.depth??0):u.kind==="drain"?yr(t,e)+.03:u.kind==="inlet"?i-(u.depth??.3):.02;return{x:u.x,z:u.z,y:p}}if(s==="joint"){let u=(c=n.joints)==null?void 0:c.find(p=>p.id===r);return u?ln(u,l):null}if(s!=="dev")return null;for(let u of a.floors){let p=u.furniture.find(_=>_.id===r);if(!p||!St.includes(p.type))continue;let h=l?ya(p,l):null,f=u.elevation-t.elevation;if(h)return{...h,y:h.y+Rt(u,p)+f};let g=p.type==="pool_filter"?p.h*.88:p.type==="pool_dosing"?.95:p.type==="pool_valve"?Pr:p.type==="pool_pump"?.2:.3;return{x:p.x,z:p.z,y:g+Rt(u,p)+f}}return null}}function qt(a,t){if(a.heights)return a;let e=a.height??Wo,n=t(a.from),i=t(a.to),o=[...n?[[n.x,n.z]]:[],...a.points,...i?[[i.x,i.z]]:[]];return{...a,points:o,heights:o.map(()=>e)}}var bt=a=>Math.round(a*1e3)/1e3;function Bo(a,t,e,n,i){let o=qt(a,t),s=Bt(o,t),r=rn(s,e);if(!r)return null;let l={id:n,x:bt(r.p[0]),z:bt(r.p[2]),y:bt(r.p[1])},d=On(o,t),c=Math.max(0,Math.min(o.points.length,r.seg+1-d)),u=o.heights??[],p=o.fittings??[],h={...o,to:`joint:${n}:in`,points:o.points.slice(0,c),heights:u.slice(0,c),fittings:p.filter(g=>g.at<=r.at)},f={...o,id:i,from:`joint:${n}:out1`,points:o.points.slice(c),heights:u.slice(c),fittings:p.filter(g=>g.at>r.at).map(g=>({...g,at:bt(g.at-r.at)}))};return{joint:l,first:h,second:f}}function On(a,t){return a.from&&t(a.from)?1:0}var Yc=1.6;function wa(a,t,e){var o;let n=[],i=s=>{let r=_t(a,[s[0],s[2]]);return r.d>-.35&&r.d<Yc&&r.s>-.3&&r.s<a.length+.3?r:null};for(let s of t){let r=qt(s,e),l=Bt(r,e);if(l.length<2)continue;let d={id:s.id,pieces:[],points:[],fittings:[],ends:[]};for(let p=1;p<l.length;p++){let h=i(l[p-1]),f=i(l[p]);h&&f&&d.pieces.push({k:p-1,s0:h.s,y0:l[p-1][1],d0:h.d,s1:f.s,y1:l[p][1],d1:f.d})}if(!d.pieces.length)continue;let c=On(r,e);r.points.forEach((p,h)=>{let f=l[h+c],g=f&&i(f);g&&d.points.push({i:h,s:g.s,y:f[1]})});let u=No(l);for(let p of s.fittings??[]){let h=Math.min(u,p.at),f=(o=_a(l,h))==null?void 0:o.p,g=f&&i(f);f&&g&&d.fittings.push({id:p.id,kind:p.kind,open:p.open!==!1,s:g.s,y:f[1]})}for(let[p,h]of[["from",l[0]],["to",l[l.length-1]]]){let f=(p==="from"?!s.from:!s.to)?i(h):null;f&&d.ends.push({end:p,s:f.s,y:h[1]})}n.push(d)}return n}var xa=-.3;function Si(a,t,e,n,i){var _;let o=[],s=[],r=m=>t(m),l=[],d=a.from,c=[];for(let m of a.vias){if(m.kind!=="hole"){c.push(m.kind);continue}let v=e.find(E=>E.id===m.joint),y=r(d);if(!v||!y)continue;let w=r(`joint:${v.id}:inside`),P=r(`joint:${v.id}:outside`),z=m.dir?m.dir==="out":Math.hypot(y.x-w.x,y.z-w.z)<=Math.hypot(y.x-P.x,y.z-P.z);l.push({a:d,b:`joint:${v.id}:${z?"inside":"outside"}`,fits:c}),c=[],d=`joint:${v.id}:${z?"outside":"inside"}`}let u=a.to;if(u.length>1){let m=r(d),v=u.map(r).filter(y=>!!y);if(m&&v.length===u.length){let y=v.reduce((x,k)=>x+k.x,0)/v.length,w=v.reduce((x,k)=>x+k.z,0)/v.length,P=Math.hypot(m.x-y,m.z-w)||1,z=Math.min(1,P/2)/P,E=m.y<0||v.some(x=>x.y<0),S={id:i("joint"),kind:"tee",x:bt(y+(m.x-y)*z),z:bt(w+(m.z-w)*z),y:E?xa:bt(m.y)};s.push(S),l.push({a:d,b:`joint:${S.id}:in`,fits:c}),c=[],u.forEach((x,k)=>l.push({a:`joint:${S.id}:out${k+1}`,b:x,fits:[]})),u=[]}}u.length&&l.push({a:d,b:u[0],fits:c});let p=m=>{let{kind:v,id:y,port:w}=at(m),P=v==="joint"?s.find(z=>z.id===y):void 0;return P?ln(P,w):r(m)},h=m=>n(m)==="source",f=m=>n(m)==="sink",g=a.to.some(h)&&!h(a.from)||f(a.from)&&!a.to.some(f);for(let m of l){let v=p(m.a),y=p(m.b);if(!v||!y)continue;let w=Jc(v,y,$a(m.a,e),$a(m.b,e)),P={id:i("pipe"),from:m.a,to:m.b,floor_id:a.floorId,points:w.map(E=>[E[0],E[2]]),heights:w.map(E=>E[1])},z=No(Bt(P,p));P.fittings=m.fits.map((E,S)=>({id:i("fit"),kind:E,at:bt(Math.min(z/2,.4+S*.25)),...E==="valve"?{open:!0}:{}})),g&&(P={...P,from:P.to,to:P.from,points:[...P.points].reverse(),heights:[...P.heights??[]].reverse(),fittings:(_=P.fittings)==null?void 0:_.map(E=>({...E,at:bt(Math.max(0,z-E.at))}))}),o.push(P)}return{pipes:o,joints:s}}function $a(a,t){let{kind:e,id:n,port:i}=at(a),o=e==="joint"&&i==="outside"?t.find(s=>s.id===n):void 0;return(o==null?void 0:o.kind)==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function Jc(a,t,e=null,n=null){let i=a.y<0||t.y<0?xa:bt(Math.max(a.y,t.y)),o=[],[s,r]=[a.x,a.z];e&&([s,r]=[bt(s+e[0]*.5),bt(r+e[1]*.5)],o.push([s,bt(a.y),r]));let[l,d]=[t.x,t.z],c=[];return n&&([l,d]=[bt(l+n[0]*.5),bt(d+n[1]*.5)],c.push([l,bt(t.y),d])),o.push([bt(s),i,bt(r)]),Math.abs(l-s)>.01&&o.push([bt(l),i,bt(r)]),Math.abs(d-r)>.01&&o.push([bt(l),i,bt(d)]),o.push(...c),o.filter((u,p)=>p===0||Math.hypot(u[0]-o[p-1][0],u[1]-o[p-1][1],u[2]-o[p-1][2])>.001)}function ka(a,t,e){let n=o=>{let{kind:s,id:r,port:l}=at(o),d=s==="joint"&&(l==="inside"||l==="outside")?t.find(c=>c.id===r):void 0;return d&&(d.kind==="wall"||d.kind==="floor")?{id:r,port:l}:null},i=[];for(let o of a.filter(s=>s.from===e||s.to===e)){let s={start:e,other:"",pipes:[],holes:[],fittings:[]},r=o,l=e,d=new Set;for(;r&&!d.has(r.id);){d.add(r.id),s.pipes.push(r.id),s.fittings.push(...(r.fittings??[]).map(h=>h.kind));let c=r.from===l?r.to:r.from,u=c?n(c):null;if(!u){s.other=c;break}s.holes.push({joint:u.id,dir:u.port==="inside"?"out":"in"}),l=`joint:${u.id}:${u.port==="inside"?"outside":"inside"}`;let p=r;r=a.find(h=>h!==p&&(h.from===l||h.to===l)),r||(s.other=l)}i.push(s)}return i}function jn(a,t,e){var c,u;let n=t.pool??{},i=n.pipes??[],{kind:o,id:s,port:r}=at(a);if(o==="port"){let p=(c=n.ports)==null?void 0:c.find(h=>h.id===s);return p?Tn(p.kind):null}if(o==="dev")return r?Rn(r):null;if(o!=="joint")return null;let l=(u=n.joints)==null?void 0:u.find(p=>p.id===s);if(!l)return null;if(l.kind==="wall"||l.kind==="floor"){let p=`joint:${s}:${r==="outside"?"inside":"outside"}`,h=i.find(g=>g.from===p||g.to===p);if(h)return h.to===p?"source":"sink";let f=Qc(i,n.joints??[],p);return f?jn(f,t,e):null}let d=`joint:${s}`;return Zc(d,i,e)?"sink":i.some(p=>wt(p.to)===d)?"source":null}function Qc(a,t,e){let n=e,i=new Set;for(;;){let o=a.find(u=>!i.has(u.id)&&(u.from===n||u.to===n));if(!o)return"";i.add(o.id);let s=o.from===n?o.to:o.from,{kind:r,id:l,port:d}=at(s),c=r==="joint"?t.find(u=>u.id===l):void 0;if(c&&(c.kind==="wall"||c.kind==="floor")&&(d==="inside"||d==="outside")){n=`joint:${l}:${d==="inside"?"outside":"inside"}`;continue}return s}}function Zc(a,t,e){let n=new Set(e.filter(s=>s.type==="pool_pump").map(s=>`dev:${s.id}`)),i=new Set,o=s=>n.has(s)?!0:i.has(s)?!1:(i.add(s),t.filter(r=>wt(r.from)===s).some(r=>o(wt(r.to))));return t.filter(s=>wt(s.from)===a).some(s=>o(wt(s.to)))}function Ma(a,t,e,n=[]){if(!te(a).length)return null;let o=t==="source",s=a==="pool_pump"?o?["suction","pressure"]:["pressure","suction"]:a==="pool_filter"?o?["pump","return","waste"]:e?["waste","return","pump"]:["return","waste","pump"]:o?["in","out"]:["out","in"],r=s.filter(l=>Rn(l)===(o?"sink":"source"));return r.find(l=>!n.includes(l))??r[0]??s[0]}function Sa(a,t,e){return(t==="sink"||e==="source")&&t!=="source"&&e!=="sink"?{...a,from:a.to,to:a.from,points:[...a.points].reverse(),heights:a.heights?[...a.heights].reverse():a.heights}:a}function qo(a,t){let e=a.pool??{},n=e.pipes??[],i=[];for(let s of n)s.from||i.push({kind:"loose",node:s.id}),s.to||i.push({kind:"loose",node:s.id});let o=new Set(n.flatMap(s=>[s.from,s.to]));for(let s of t){if(!["pool_pump","pool_filter","pool_heat_pump"].includes(s.type))continue;let r=te(s.type).filter(d=>!(s.type==="pool_filter"&&d==="waste"&&!(e.ports??[]).some(c=>c.kind==="waste"))),l=[...o].some(d=>wt(d)===`dev:${s.id}`);if(!(s.type==="pool_heat_pump"&&!l))for(let d of r)!o.has(`dev:${s.id}:${d}`)&&!o.has(`dev:${s.id}`)&&i.push({kind:"port",node:`dev:${s.id}:${d}`})}for(let s of["skimmer","drain","inlet"])(e.ports??[]).filter(l=>l.kind===s).some(l=>!o.has(`port:${l.id}`))&&i.push({kind:"feed",node:s});return i}function Ko(a,t){let e=a.pool??{},n=(e.ports??[]).filter(o=>o.kind===t),i=new Set((e.pipes??[]).flatMap(o=>[o.from,o.to]));return n.length>0&&n.every(o=>i.has(`port:${o.id}`))}function Xc(a,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i,s=o?Math.max(0,Math.min(1,((a[0]-t[0])*n+(a[1]-t[1])*i)/o)):0;return Math.hypot(a[0]-t[0]-n*s,a[1]-t[1]-i*s)}function Pa(a,t,e=.03){return a.every(n=>Y(n,t)||t.some((i,o)=>Xc(n,i,t[(o+1)%t.length])<=e))}function Ea(a,t){return t&&a.states[t]?t:Object.keys(a.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}function Aa(a,t){let e=a.states[t];if(!e)return!1;let n=String(e.attributes.device_class??"");return t.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(t):t.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(e.attributes.unit_of_measurement??"")):!1}var Pi=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],Ei=["fun_pets","fun_halloween"],td=["pool"];function Uo(){try{return localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function Vt(a){return!td.includes(a)||Uo()}var Ia=["fridge_smart"];function Fa(a){return Pi.includes(a)||Ia.includes(a)||Ei.includes(a)}var za="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",ed={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function We(a){let t=a?ed[a]:void 0;return t?`${za}#${t}`:za}function Ra(){return new Set([...Pi,...Ia,...Ei].filter(Vt))}function ft(a){return Vt(a)}function Oa(a){let t=yt(a);if(!t||t.light)return!1;let e=t.parts.filter(n=>n.color==="plant").length;return e>0&&e+t.parts.filter(n=>n.color==="pot").length>=t.parts.length/2}var Go=["bin120","bin240","bin1100","multi","bag","caddy","underground"],ja=["rest","bio","paper","plastic","glass","garden","recycling","other"],Yo=["wall","pole","pillar","parcel","bank"],La={bin120:[.48,.55,.93],bin240:[.58,.73,1.07],bin1100:[1.37,1.07,1.45],multi:[.6,.75,1.07],bag:[.42,.32,.62],caddy:[.3,.26,.32],underground:[1,1,1.15]},Ca={wall:[.38,.14,.34],pole:[.24,.5,1.15],pillar:[.42,.36,1.3],parcel:[.6,.55,1.1],bank:[.95,.3,.7]};function Va(a){return Go.includes(a.variant??"")?a.variant:"bin240"}function Da(a){return Yo.includes(a.variant??"")?a.variant:"wall"}var xt=["#3a3f47","#3a3f47"],Ne=["#23262b","#23262b"],ee=["#5a3b25","#5a3b25"],mt=["#1f4fa8","#1f4fa8"],Me=["#e3b616","#e3b616"],st=["#2f7d3b","#2f7d3b"],Ta={default:{rest:xt,bio:ee,paper:mt,plastic:Me,glass:st,garden:st,recycling:Me,other:xt},DE:{rest:Ne,bio:ee,paper:mt,plastic:Me,glass:st,garden:st,recycling:Me},AT:{rest:xt,bio:ee,paper:[xt[0],"#c0262d"],plastic:Me,glass:st,garden:st},CH:{rest:["#d8d8d8","#d8d8d8"],bio:st,paper:mt,plastic:xt,glass:st,garden:st},NL:{rest:xt,bio:st,paper:mt,plastic:["#3a3f47","#e57a1f"],glass:st,garden:st},BE:{rest:xt,bio:st,paper:mt,plastic:mt,glass:st,garden:st},GB:{rest:Ne,bio:["#3a3f47","#5a3b25"],paper:mt,plastic:mt,glass:Ne,garden:ee,recycling:mt},US:{rest:Ne,bio:st,paper:mt,plastic:mt,glass:mt,garden:st,recycling:mt},CA:{rest:Ne,bio:st,paper:mt,plastic:mt,glass:mt,garden:st,recycling:mt},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:xt,bio:ee,paper:[xt[0],"#e3b616"],plastic:[xt[0],"#e3b616"],recycling:[xt[0],"#e3b616"],glass:st,garden:st},IT:{rest:xt,bio:ee,paper:mt,plastic:Me,glass:st,garden:st},ES:{rest:xt,bio:ee,paper:mt,plastic:Me,glass:st,garden:st},PT:{rest:xt,bio:ee,paper:mt,plastic:Me,glass:st,garden:st},DK:{rest:Ne,bio:st,paper:mt,plastic:xt,glass:st,garden:st},SE:{rest:Ne,bio:ee,paper:mt,plastic:xt,glass:st,garden:st},NO:{rest:xt,bio:ee,paper:mt,plastic:xt,glass:st,garden:st},FI:{rest:xt,bio:ee,paper:mt,plastic:xt,glass:st,garden:st}},Ha="DE";function Wa(){return Ha}function Jo(a,t){var e;return((e=Ta[t])==null?void 0:e[a])??Ta.default[a]??xt}function Na(a,t=Ha){let e=Jo(a.bin_kind??"rest",t),n=a.bin_color||e[0];return[n,a.bin_lid||(a.bin_color?n:e[1])]}var id=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function Ba(a,t){let e=t??{},n=Object.keys(a.states),i=u=>{var p;return`${u} ${((p=a.states[u])==null?void 0:p.attributes.friendly_name)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},o=u=>{var p;return String(((p=a.states[u])==null?void 0:p.attributes.device_class)??"")},s=u=>{var p;return String(((p=a.states[u])==null?void 0:p.attributes.unit_of_measurement)??"")},r=n.filter(u=>id.test(i(u))),l=(u,p)=>u.find(p)??null,d=(u,p)=>{let h=e[u];return h==="none"?null:h??p()},c=u=>u.split(".")[0];return{temperature:d("temperature",()=>l(r,u=>c(u)==="sensor"&&(o(u)==="temperature"||/°[CF]/.test(s(u)))&&/(wasser|water|eau|agua|acqua)/.test(i(u)))??l(r,u=>c(u)==="sensor"&&(o(u)==="temperature"||/°[CF]/.test(s(u))))),heater:d("heater",()=>l(r,u=>c(u)==="climate"||c(u)==="water_heater")??l(r,u=>/^(switch|input_boolean)$/.test(c(u))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(i(u)))),pump:d("pump",()=>l(r,u=>/^(switch|fan|input_boolean)$/.test(c(u))&&/(pump|pumpe|filter|pompe|bomba)/.test(i(u)))??l(r,u=>c(u)==="binary_sensor"&&/(pump|pumpe|filter)/.test(i(u)))),light:d("light",()=>l(r,u=>c(u)==="light")),ph:d("ph",()=>{let u=p=>c(p)==="sensor"&&(o(p)==="ph"||s(p).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(i(p)));return l(r,u)??l(n,u)}),chlorine:d("chlorine",()=>l(r,p=>c(p)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(i(p))||s(p)==="mV"))??l(n,p=>c(p)==="sensor"&&/(orp|redox|chlor)/.test(i(p)))),cover:d("cover",()=>l(r,u=>c(u)==="cover"))}}var qa=new Set(["skimmer","drain"]),Qo=new Set(["backwash","rinse","waste"]),Ka=a=>`port:${a}`,Ua=a=>`dev:${a}`,Zo=a=>{var t;return!!((t=a.fittings)!=null&&t.some(e=>e.kind==="valve"&&e.open===!1))};function Ga(a){let t=new Map(a.pipes.map(y=>[y.id,{active:!1,warm:!1,waste:!1}]));if(!a.pumpOn)return t;let e=new Map(a.pipes.map(y=>[y.id,at(y.from).port])),n=a.pipes.map(y=>({...y,from:y.from?wt(y.from):`loose:${y.id}:a`,to:y.to?wt(y.to):`loose:${y.id}:b`})),i=new Map(a.devices.map(y=>[Ua(y.id),y])),o=new Map(a.ports.map(y=>[Ka(y.id),y])),s=y=>{let w=i.get(y);return!!w&&w.type==="pool_valve"&&w.open===!1},r=new Map,l=new Map;for(let y of n)r.set(y.from,[...r.get(y.from)??[],y]),l.set(y.to,[...l.get(y.to)??[],y]);let d=y=>{var w;return((w=o.get(y))==null?void 0:w.kind)==="waste"},c=y=>{var w;return((w=i.get(y))==null?void 0:w.type)==="pool_heat_pump"},u=new Map,p=(y,w=new Set)=>{let P=u.get(y.id);if(P)return P;if(w.has(y.id))return{heat:!1,waste:!1};w.add(y.id);let z=c(y.to),E=d(y.to);if(!z||!E)for(let x of r.get(y.to)??[]){let k=p(x,w);z||=k.heat,E||=k.waste}let S={heat:z,waste:E};return u.set(y.id,S),S},h=a.devices.filter(y=>y.type==="pool_pump").map(y=>Ua(y.id)),f=h.length?h:a.ports.filter(y=>qa.has(y.kind)).map(y=>Ka(y.id)),g=new Set,_=(y,w,P)=>{let z=`${y}|${w}|${P}`;if(g.has(z)||(g.add(z),s(y)))return;let E=r.get(y)??[],S=i.get(y);if((S==null?void 0:S.type)==="pool_filter"){let x=S.valve??"filter";if(x==="closed")return;let k=Qo.has(x)?"waste":"return";E=E.filter(M=>{let I=e.get(M.id);return I?I===k:p(M).waste===Qo.has(x)}),Qo.has(x)&&(P=!0)}else if(E.length>1){E=E.filter(M=>!s(M.to)&&!Zo(M));let x=E.filter(M=>p(M).heat),k=E.filter(M=>!p(M).heat);x.length&&k.length&&(E=a.heaterOn?x:k)}(S==null?void 0:S.type)==="pool_heat_pump"&&a.heating&&(w=!0);for(let x of E){if(s(x.to)||Zo(x))continue;let k=t.get(x.id);k.active=!0,k.warm||=w,k.waste||=P,_(x.to,w,P)}},m=new Set,v=y=>{for(let w of l.get(y)??[])m.has(w.id)||s(w.from)||Zo(w)||(m.add(w.id),v(w.from))};if(h.length){for(let w of h)v(w);let y=(w,P=new Set)=>{var z;return P.has(w.id)?!1:(P.add(w.id),qa.has(((z=o.get(w.from))==null?void 0:z.kind)??"")?!0:(l.get(w.from)??[]).some(E=>m.has(E.id)&&y(E,P)))};for(let w of m){let P=n.find(z=>z.id===w);y(P)&&(t.get(w).active=!0)}}for(let y of f)_(y,!1,!1);return t}var od=[.25,.7,1],sd=[1,.45,.18],rd=[.75,.6,.35];function Ya(a){return a!=null&&a.waste?rd:a!=null&&a.warm?sd:od}function Ai(a,t){let e=a[0]??t,n=1/0;for(let i=0;i<a.length;i++){let o=a[i],s=a[(i+1)%a.length],r=s[0]-o[0],l=s[1]-o[1],d=r*r+l*l,c=d>0?Math.max(0,Math.min(1,((t[0]-o[0])*r+(t[1]-o[1])*l)/d)):0,u=[o[0]+r*c,o[1]+l*c],p=Math.hypot(u[0]-t[0],u[1]-t[1]);p<n&&([e,n]=[u,p])}return e}var ad={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de CasaNeon ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de CasaNeon.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace.",as_furniture_pick:"Elegir mueble \u2026",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de CasaNeon.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_copy:"Copiar",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon \u2013 actualiza CasaNeon (HACS) y recarga la p\xE1gina.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para CasaNeon. Importa aqu\xED tus propios packs (.fp3dpack).",ext_pro:"Extensiones Pro",ext_active:"activa",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: CasaNeon encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas y prop\xF3n ideas como issue en GitHub: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant.",show_menu:"Mostrar",tool_menu:"Herramienta",floor_label:"Planta:",floor_settings:"Ajustes de la planta",floor_settings_of:"Planta {floor}",floor_none_hint:"A\xF1ade tu primera planta arriba con \xABPlanta\xBB \u2192 \xABA\xF1adir planta\xBB.",tool_group_build:"Construir",tool_group_outside:"Exterior",tool_room:"Habitaci\xF3n",view_menu:"Vista",fit_hint:"Mostrar todo el plano de la planta (con el jard\xEDn al dibujar el exterior)",tech_open:"Dibujar la sala t\xE9cnica",tech_open_hint:"Despu\xE9s toca en el plano la pared donde est\xE1 tu instalaci\xF3n.",tech_step:"Paso {n}",tech_step_feed:"Toca \xAB{name}\xBB a la izquierda y luego el punto de la pared por donde entra la tuber\xEDa (abajo del todo: desde el suelo).",tech_step_devices:"Toca la bomba y el filtro de arena a la izquierda: se colocan junto a la pared. La bomba de calor y la dosificaci\xF3n si las tienes.",tech_step_line:"Traza una l\xEDnea: de \xAB{a}\xBB a \xAB{b}\xBB. Pulsa en uno y arrastra hasta el otro.",tech_step_loose:"Un tubo acaba suelto: prol\xF3ngalo hasta un equipo o una tuber\xEDa, o b\xF3rralo (\u270B Seleccionar).",tech_step_drawing:"Sigue arrastrando o toca punto a punto: la l\xEDnea termina en un equipo, una tuber\xEDa o un tubo.",tech_step_fit:"Toca el tubo donde va la v\xE1lvula (el visor): se ilumina en naranja.",tech_mode:"Sala t\xE9cnica",tech_mode_hint:"Dibuja la sala t\xE9cnica en esta pared: entra las tuber\xEDas de la piscina, coloca los equipos, traza los tubos",tech_draw:"Dibujar",tech_pick:"Seleccionar",pool_delete_confirm:"\xBFEliminar la piscina con sus {n} tubos?",tech_erase:"Borrar",tech_erase_hint:"Toca un tubo, una v\xE1lvula de bola, una mirilla o un agujero y se elimina. \xBFLo dibujaste mal? Deshacer tambi\xE9n ayuda.",tech_feeds:"Tuber\xEDas de la piscina",tech_devices:"Equipos",tech_fittings:"Valvuler\xEDa",tech_hint:"Trazar una l\xEDnea: toca un equipo, una tuber\xEDa o un tubo y arrastra hasta el siguiente (o punto a punto). Sobre un tubo crea una T. CasaNeon sabe solo hacia d\xF3nde va el agua y qu\xE9 conexi\xF3n del equipo usar.",tech_no_ports:"Coloca primero el skimmer, el sumidero y las boquillas con la herramienta Piscina.",tech_ok:"Todo conectado: el agua circula.",tech_issue_loose:"{n} extremos sueltos",tech_issue_port:"{name} sin conectar",tech_issue_feed:"{name} a\xFAn no entrado",tech_feed_place:"Toca donde la tuber\xEDa entra en la sala: abajo del todo, desde el suelo; m\xE1s arriba, por la pared.",tech_start:"Toca un equipo o una tuber\xEDa y traza una l\xEDnea.",feed_skimmer:"Skimmer",feed_drain:"Sumidero",feed_inlet:"Boquillas",feed_waste:"Desag\xFCe (lavado)",hp_ports:"Conexiones",hp_side_right:"derecha",hp_side_left:"izquierda",hp_side_back:"detr\xE1s",pool_depth:"Profundidad del vaso (m)",pool_rim:"Borde sobre el c\xE9sped (m)",pool_depth_hint:"Profundidad: del borde al fondo. Una piscina de 1,50 m que sobresale 20 cm: profundidad 1,50, borde 0,20. El agua queda 15 cm bajo el borde.",pool_depth_ground:"La profundidad se ve en 3D en cuanto la piscina est\xE1 en un c\xE9sped, una terraza u otra zona; sin suelo alrededor, el vaso se ver\xEDa desde fuera.",pool_port_depth:"Prof.",pool_port_depth_hint:"Profundidad bajo la l\xEDnea de agua (m): boquillas normalmente 0,30, el skimmer en la l\xEDnea de agua",pool_valves:"V\xE1lvulas",pool_valve_shut:"cerrada",pool_valve_toggle:"Toca para cambiar: tal como est\xE1 la v\xE1lvula de verdad",pool_joint:"Uni\xF3n",block_some_fixed:"\u{1F512} Una pieza est\xE1 fijada: el bloque solo se mueve cuando todas est\xE9n liberadas.",unfix_all:"Liberar todo",wv_block_all:"Bloque entero",wv_block_one:"Solo esta pieza",wv_gap:"Hueco: {w} \u2013 esto cabe:",wv_gap_hint:"Toca un lugar libre de la pared: aqu\xED aparece lo que cabe.",wv_kit_title:"A la pared",wv_recent:"Usados recientemente",wv_none_fits:"Nada cabe en este hueco.",wv_cat_base:"Muebles bajos y aparadores",wv_cat_hang:"Colgados",wv_cat_tall:"Armarios altos",wv_cat_living:"Sentarse y dormir",wv_cat_light:"Luces",wv_cat_pack:"De tus packs",wv_cat_energy:"Energ\xEDa",block_title:"Bloque de muebles",multi_title:"{n} muebles seleccionados",block_hint:"Un clic selecciona todo el bloque, arrastrar lo mueve. Una sola pieza: t\xF3cala dos veces o elige su nombre abajo.",multi_hint:"May\xFAs + clic a\xF1ade o quita muebles, May\xFAs + arrastrar en una zona vac\xEDa dibuja un marco. Mu\xE9velos, g\xEDralos o c\xF3pialos juntos, o \xFAnelos en un bloque.",block_part_edit:"Editar solo esta pieza",block_break:"Deshacer bloque",block_make:"Unir en un bloque",multi_mode:"Seleccionar varios (tocar a\xF1ade, arrastrar dibuja un marco)",block_part:"Parte de un bloque.",block_select:"Seleccionar todo el bloque",block_delete:"\xBFEliminar {n} muebles?",block_delete_fixed:"\xBFEliminar {n} muebles? Algunos est\xE1n fijados.",wall_zoom_hint:"Zoom: rueda del rat\xF3n o dos dedos",wall_zoom_all:"Pared entera",card_pets:"Mostrar las mascotas",card_ghost:"Mostrar el fantasma de Halloween",card_ghost_hint:"Pack divertido Halloween: el fantasma flota tambi\xE9n por la casa de esta tarjeta (p. ej. desact\xEDvalo en la tableta de pared)",card_pets_hint:"Pack divertido Mascotas: mostrar los animales configurados en esta tarjeta (p. ej. desact\xEDvalos en la tableta de pared)",fun_title:"Packs divertidos",fun_intro:"Extras solo por diversi\xF3n; act\xEDvalos y desact\xEDvalos aqu\xED.",fun_name_pets:"Mascotas",fun_feature_pets:"Un gato, un perro o un conejo vive en tu casa 3D: recorre las habitaciones, se tumba en el sof\xE1, la cama o la alfombra y duerme por la noche.",fun_name_halloween:"Halloween",fun_feature_halloween:"Un fantasma que de vez en cuando flota por la casa.",halloween_ghost:"Dejar flotar al fantasma",pets_show:"Mostrar las mascotas",pet_add:"A\xF1adir una mascota",pet_name:"Nombre",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Gato",pet_kind_dog:"\u{1F436} Perro",pet_kind_rabbit:"\u{1F430} Conejo",pet_fur:"Pelaje",pet_fur_orange:"Pelirrojo",pet_fur_tabby:"Atigrado",pet_fur_black:"Negro",pet_fur_white:"Blanco",pet_fur_grey:"Gris",pet_fur_brown:"Marr\xF3n",pet_fur_calico:"Tricolor",pet_fur_golden:"Dorado",pet_fur_cream:"Crema",pet_breed:"Raza",pet_breed_dachshund:"Teckel",pet_breed_pug:"Carlino",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Pastor",pet_floor:"Planta",pet_floor_auto:"Planta baja",tt_ev_camera:"La c\xE1mara detecta movimiento: {name}",terrain:"Terreno",terrain_hint:"D\xF3nde est\xE1 el terreno alrededor de la casa. Lo que queda por debajo (un s\xF3tano, la parte baja de un semis\xF3tano) est\xE1 bajo tierra en 3D; c\xE9spedes, caminos y terrazas est\xE1n sobre el terreno.",terrain_level:"Altura del terreno (m, planta baja = 0)",terrain_earth:"Mostrar los s\xF3tanos bajo tierra",terrain_earth_hint:"Las plantas por debajo del terreno est\xE1n bajo tierra; abre una y la ver\xE1s como en una excavaci\xF3n. Desactivado: quedan sueltas como antes.",terrain_cellar_hint:"Semis\xF3tano: baja la altura del terreno tanto como deba asomar el s\xF3tano, p. ej. \u22121,2 m. Las ventanas de s\xF3tano bajo el terreno reciben un patio ingl\xE9s.",terrain_no_cellar_hint:"Un s\xF3tano es una planta con elevaci\xF3n negativa, p. ej. \u22122,6 m.",terrain_reset:"Restablecer el terreno",cellar_window:"Ventana de s\xF3tano",well:"Patio ingl\xE9s",well_hint:"Esta ventana est\xE1 bajo el nivel del terreno: en 3D recibe un patio ingl\xE9s con rejilla. Desm\xE1rcalo para no tener ninguno, p. ej. si por fuera pasa un camino.",well_rim:"Borde sobre el terreno (m)",cellar_window_hint:"Peque\xF1a y arriba en la pared: 100 \xD7 50 cm, 25 cm bajo el techo. Bajo el terreno recibe en 3D un patio ingl\xE9s con rejilla.",side_fold_hint:"Estrechar la barra lateral: m\xE1s espacio para el plano",furn_ac_unit:"Aire acondicionado (de pared)",furn_awning:"Toldo",furn_group_outdoor:"Terraza y balc\xF3n",bin_from:"Brillar desde (hora, el d\xEDa antes)",bin_until:"hasta (hora, d\xEDa de recogida)",bin_none:"Sin recogida a la vista",hh_title:"Hoy en casa",hh_left:"quedan {t}",hh_done:"\xA1Listo!",hh_finished:"{name} ha terminado",hh_thirsty:"Sed",hh_plant:"{name} necesita agua",hh_service:"{name}: mantenimiento pendiente",hh_fridge_open:"{name} est\xE1 abierto",alert_fridge_door:"Nevera abierta: {name}",alert_short_fridge_door:"Nevera abierta",hh_moisture:"Planta (plant.*) o sensor de humedad",hh_moisture_min:"Sed por debajo de (%)",hh_remaining:"Tiempo restante (sensor)",hh_door:"Sensor de puerta",hh_fridge_door:"Sensor de puerta",hh_appliance_hint:"Mientras funciona, su marcador muestra el tiempo restante; despu\xE9s \xAB\xA1Listo!\xBB hasta que se abre la puerta o vuelve a funcionar.",hh_door_alarm:"Avisar tras (minutos abierto)",hh_service_entity:"Consumible / mantenimiento (sensor)",hh_service_min:"Pendiente desde (\u2264 % o d\xEDas)",hh_service_hint:"P. ej. filtro, sal o abrillantador: un sensor binario (activo = pendiente), un n\xFAmero (% o d\xEDas restantes) o una fecha. Si toca, el aparato brilla en amarillo y aparece en \xABHoy en casa\xBB.",hh_teaser_plant:"Con Hogar Pro la planta muestra cu\xE1ndo necesita agua.",hh_teaser_appliance:"Con Hogar Pro el aparato muestra su tiempo restante y \xAB\xA1Listo!\xBB hasta que se abre la puerta.",hh_teaser_fridge:"Con Hogar Pro CasaNeon avisa cuando la puerta de la nevera est\xE1 abierta demasiado tiempo.",card_household:"Hoy en casa",card_household_hint:"Hogar Pro: tarjeta con contenedores, correo, aparatos terminados, plantas sedientas y mantenimiento",furn_waste_bin:"Contenedor de basura",furn_mailbox:"Buz\xF3n",furn_wall_switch:"Interruptor de pared",furn_lamp_ceiling_fan:"Ventilador de techo con luz",furn_fan_entity:"Entidad del ventilador",ceiling_fan_hint:"La luz es la entidad del elemento de arriba: el motor y la pantalla la encienden. Las aspas conmutan el ventilador por separado y giran mientras funciona, m\xE1s r\xE1pido cuanto mayor es su velocidad.",furn_wall_socket:"Enchufe de pared",furn_group_electric:"Electricidad",socket_count:"Enchufes",socket_n:"Enchufe {n}",socket_switch:"Encender y apagar con (opcional)",socket_power:"Medidor de consumo (W, opcional)",socket_hint:"Un enchufe con interruptor (enchufe inteligente) se enciende y apaga al tocarlo en 3D y su peque\xF1o LED muestra que est\xE1 encendido. Con medidor de consumo cuenta en el balance de energ\xEDa y su pin muestra los vatios de todos sus enchufes. Para ponerlo sobre una encimera, sube su \xABAltura sobre el suelo\xBB.",switch_keys:"Teclas",switch_key:"Entidad de la tecla",switch_key_n:"Tecla {n}",switch_ring:"Anillo de luz (color de)",switch_ring_hint:"Para interruptores con luz alrededor (p. ej. Sonoff TX Ultimate): elige la luz que da su color y brillo; el anillo brilla en la pared alrededor de la placa mientras esa luz est\xE1 encendida.",switch_hint:"Cada tecla conmuta su entidad al tocarla en 3D (una persiana se abre o se cierra) y su LED se enciende mientras est\xE1 encendida o abierta.",furn_group_household:"Hogar",bin_shape:"Forma",bin_shape_bin120:"Contenedor con ruedas 120 l",bin_shape_bin240:"Contenedor con ruedas 240 l",bin_shape_bin1100:"Contenedor 1100 l",bin_shape_multi:"Contenedor con varios compartimentos",bin_shape_bag:"Bolsa",bin_shape_caddy:"Cubo",bin_shape_underground:"Contenedor soterrado",bin_kind:"Residuo",bin_kind_rest:"Resto",bin_kind_bio:"Org\xE1nico",bin_kind_paper:"Papel",bin_kind_plastic:"Envases",bin_kind_glass:"Vidrio",bin_kind_garden:"Restos de poda",bin_kind_recycling:"Reciclaje",bin_kind_other:"Otro",bin_color:"Color",bin_lid:"Tapa",bin_source:"Calendario de recogida o sensor",bin_match:"Palabra del calendario (vac\xEDo: seg\xFAn el residuo)",bin_hint:"El contenedor brilla desde la hora elegida del d\xEDa anterior hasta la hora del d\xEDa de recogida (para todos); su marcador indica \xABHoy\xBB o \xABMa\xF1ana\xBB, al tocarlo muestra las pr\xF3ximas recogidas. En un calendario (p. ej. Waste Collection Schedule) se buscan las palabras de su residuo; un sensor puede dar los d\xEDas o la fecha.",bin_today:"Hoy",bin_tomorrow:"Ma\xF1ana",bin_in_days:"en {n} d\xEDas",mailbox_shape:"Forma",mailbox_shape_wall:"Buz\xF3n de pared",mailbox_shape_pole:"Buz\xF3n en poste (con bandera)",mailbox_shape_pillar:"Buz\xF3n de pie con portaperi\xF3dicos",mailbox_shape_parcel:"Buz\xF3n de paquetes",mailbox_shape_bank:"Buzones agrupados",mailbox_entity:"Sensor de correo (trampilla o indicador)",mailbox_door:"Sensor de la puerta de recogida (opcional)",mailbox_hint:"Con un indicador (p. ej. un input_boolean \xABcorreo\xBB que activa una automatizaci\xF3n) el buz\xF3n brilla mientras est\xE1 activo. Con trampilla y puerta de recogida brilla cuando ha llegado correo despu\xE9s del \xFAltimo vaciado.",mailbox_post:"Correo",pro_name_household:"Hogar Pro",pro_feature_household:"Hogar Pro: contenedores que brillan la v\xEDspera de la recogida, buz\xF3n con correo, plantas con sed; lavadora, secadora y lavavajillas muestran el tiempo restante y \xAB\xA1Listo!\xBB; filtros y consumibles pendientes en amarillo; aviso de nevera abierta; tarjeta \xABHoy en casa\xBB; adem\xE1s la nevera inteligente (americana, puertas con sensores)",household_teaser_bin:"Con Hogar Pro el contenedor brilla la v\xEDspera de la recogida, seg\xFAn tu calendario.",household_teaser_mail:"Con Hogar Pro el buz\xF3n brilla en cuanto hay correo, hasta que se vac\xEDa.",awning_cover:"Toldo (cover)",motor_cover:"Motor (cover)",curtain_side:"Se abre hacia",curtain_side_both:"ambos lados",curtain_side_left:"izquierda (vista de frente)",curtain_side_right:"derecha (vista de frente)",motor_time:"Tiempo de recorrido (s)",motor_invert_hint:"Para covers que indican 100 % con la cortina cerrada o la pantalla abajo.",awning_pitch:"Inclinaci\xF3n (\xB0)",awning_time:"Tiempo de salida completa (s)",awning_position:"Sensor de posici\xF3n (opcional)",awning_valance:"Fald\xF3n (borde de lona delantero)",awning_invert:"Invertir el sentido",awning_invert_hint:"Para covers que informan 100 % cuando el toldo est\xE1 recogido.",awning_kind:"Tipo",awning_kind_arm:"Toldo de brazos articulados (terraza)",awning_kind_drop:"Toldo de brazo invisible / punto recto (balc\xF3n, ventana)",awning_kind_vertical:"Toldo vertical / ZIP (ventana, balc\xF3n)",awning_kind_pergola:"Toldo de p\xE9rgola / galer\xEDa acristalada",awning_kind_side:"Toldo lateral (privacidad)",awning_kind_arm_hint:"El cl\xE1sico sobre la terraza: los brazos articulados empujan la lona hacia fuera con una ligera pendiente. Fondo = salida.",awning_kind_drop_hint:"Los brazos giran desde la pared hacia delante y hacia abajo, la lona se tensa inclinada delante. Fondo = longitud de los brazos, Inclinaci\xF3n = cu\xE1nto bajan los brazos por debajo de la horizontal.",awning_kind_vertical_hint:"La lona baja en vertical por gu\xEDas laterales hasta el suelo \u2013 delante de una ventana, la barandilla de un balc\xF3n o el frente de una p\xE9rgola. Altura sobre el suelo = borde inferior del cofre.",awning_kind_pergola_hint:"Un marco fijo con postes delante; la lona se extiende por encima de sus gu\xEDas. Fondo = hasta los postes, Inclinaci\xF3n = pendiente del techo.",awning_kind_side_hint:"Un poste con la lona enrollada a la izquierda, la lona se extiende en horizontal hacia la derecha hasta el poste opuesto. Ancho = extensi\xF3n, Altura sobre el suelo = altura de la lona.",awning_hint:"Ancho = el toldo a lo largo de la pared, fondo = su salida totalmente extendido; la parte trasera del marco va contra la fachada, la altura sobre el suelo es la parte inferior del cofre. Si el cover informa su posici\xF3n mientras se mueve, el toldo sale despacio en 3D; si solo dice abriendo/cerrando, se mueve seg\xFAn el tiempo de salida.",furn_only_color:"Brillar solo en un color",furn_only_color_pick:"Color",furn_only_color_hint:"La l\xE1mpara solo brilla mientras la luz muestra aproximadamente este color, p. ej. amarillo para \xABagua\xBB en el lavabo. Los dem\xE1s colores de la misma luz quedan oscuros aqu\xED.",furn_run_w:"En marcha desde (vatios)",furn_run_w_hint:"A partir de cu\xE1ntos vatios en el sensor de potencia el aparato cuenta como en marcha y brilla (vac\xEDo: 10 W). Para aparatos tras un enchufe inteligente que consumen unos vatios en espera, p. ej. 100.",roof_window_float:"Mostrar sobre la habitaci\xF3n sin el tejado",roof_window_float_hint:"Cuando el tejado se desvanece al acercarte a una planta o una habitaci\xF3n, la ventana se queda en su sitio sobre la habitaci\xF3n: abierta, abatida, con su persiana. Funciona sobre las habitaciones de la planta en la que se apoya el tejado; donde la pendiente baja sobre una planta inferior, las ventanas se quedan en el tejado. Desactivado: solo se ve en el tejado."};function Yt(a,t,e={}){let n=ad[t]??t;for(let[i,o]of Object.entries(e))n=n.replace(`{${i}}`,String(o));return n}function Kt(a,t,e=2){return t.toLocaleString("es",{maximumFractionDigits:e})}var ld={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Ln(a){return ld[a]}function Ja(a,t){var n;let e=`${t} ${String(((n=a.states[t])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(e)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(e)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(e)?"pet":"motion"}function Qa(a,t){var n,i;let e=(i=(n=a.entities)==null?void 0:n[t])==null?void 0:i.device_id;return e?Object.values(a.entities??{}).filter(o=>o.device_id===e&&o.entity_id.startsWith("binary_sensor.")).map(o=>o.entity_id).filter(o=>{var s;return["motion","occupancy","presence"].includes(String((s=a.states[o])==null?void 0:s.attributes.device_class))}):[]}var be=Math.PI/180;function ne(a){let t=Math.min(a.x0,a.x1),e=Math.max(a.x0,a.x1),n=Math.min(a.z0,a.z1),i=Math.max(a.z0,a.z1);return a.axis==="x"?{u0:t,u1:e,w:i-n,at:(o,s)=>[o,a.flip?i-s:n+s]}:{u0:n,u1:i,w:e-t,at:(o,s)=>[a.flip?e-s:t+s,o]}}function Se(a){let t=ne(a).w,e=a.eave_a,n=a.eave_b,i=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*be),o=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*be);if(a.shape==="flat"||a.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(a.shape==="pent")return{vr:t,rh:e+t*i,y:l=>e+l*i};if(a.shape==="mansard"){let l=nl(t,e,n,i,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(i+o))):t/2,r=e+s*i;return{vr:s,rh:r,y:l=>l<=s?e+l*i:n+(t-l)*o}}var cd=.14;function Xa(a,t){return!a.open&&Math.min(a.base,a.eave_a,a.eave_b)<t-.05}function tl(a,t,e){let n=[];for(let i of a.settings.roof.sections??[]){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let o=ne(i),s=Se(i),r=t+e+cd,l=[],d=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*be),c=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*be);d>1e-6&&l.push((r-i.eave_a)/d),i.shape==="gable"&&c>1e-6&&l.push(o.w-(r-i.eave_b)/c);for(let u of l)u<=.01||u>=o.w-.01||i.shape==="gable"&&Math.abs(s.y(u)-r)>1e-6||n.push([o.at(o.u0,u),o.at(o.u1,u)])}return n}function dd(a,t){let e=a.length;if(e<3||Math.abs(t)<1e-9)return a.map(o=>[o[0],o[1]]);let n=Ct(a)>=0?1:-1,i=[];for(let o=0;o<e;o++){let s=a[(o+e-1)%e],r=a[o],l=a[(o+1)%e],d=Za([r[0]-s[0],r[1]-s[1]]),c=Za([l[0]-r[0],l[1]-r[1]]),u=[d[1]*n,-d[0]*n],p=[c[1]*n,-c[0]*n],h=u[0]+p[0],f=u[1]+p[1],g=Math.hypot(h,f);if(g<1e-6){i.push([r[0]+u[0]*t,r[1]+u[1]*t]);continue}let _=(h*u[0]+f*u[1])/g,m=Math.min(4,1/Math.max(.25,_));i.push([r[0]+h/g*t*m,r[1]+f/g*t*m])}return i}function Za(a){let t=Math.hypot(a[0],a[1])||1;return[a[0]/t,a[1]/t]}function Xo(a){let t=a.map(n=>n[0]),e=a.map(n=>n[1]);return{x0:Math.min(...t),z0:Math.min(...e),x1:Math.max(...t),z1:Math.max(...e)}}function el(a,t,e,n){let i=Tt(a,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!i.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,r=i.map(u=>({a:u.a,b:u.b}));for(let u of r)for(let p of[u.a,u.b])s.set(o(p),[...s.get(o(p))??[],u]);let l=new Set,d=null;for(let u of r){if(l.has(u))continue;l.add(u);let p=[u.a,u.b],h=u.b;for(;;){let f=(s.get(o(h))??[]).find(g=>!l.has(g));if(!f||(l.add(f),h=o(f.a)===o(h)?f.b:f.a,o(h)===o(p[0])))break;p.push(h)}p.length>=3&&o(h)===o(p[0])&&(!d||Math.abs(Ct(p))>Math.abs(Ct(d)))&&(d=p)}if(!d)return null;let c=[];for(let u=0;u<d.length;u++){let p=d[(u+d.length-1)%d.length],h=d[u],f=d[(u+1)%d.length],g=(h[0]-p[0])*(f[1]-h[1])-(h[1]-p[1])*(f[0]-h[0]);Math.abs(g)>1e-6&&c.push(h)}return c.length>=3?dd(c,e):null}var Cn=Math.tan(30*be);function nl(a,t,e,n,i){let o=Math.min(a*.3,n>1e-6?2.4/n:a*.3),s=Math.min(a*.3,i>1e-6?2.4/i:a*.3),r=t+o*n,l=e+s*i,d=Math.min(a-s,Math.max(o,(l-r+Cn*(a-s+o))/(2*Cn))),c=r+(d-o)*Cn;return{vla:o,vlb:s,yla:r,ylb:l,vr:d,rh:c,y:p=>p<=o?t+p*n:p<=d?r+(p-o)*Cn:p<=a-s?l+(a-s-p)*Cn:e+(a-p)*i}}function ts(a,t){let e=ne(a),n=Se(a),i=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),r=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),d=(v,y)=>[v,y,n.y(y)],c=d(r,-o),u=d(l,-o),p=d(l,i+s),h=d(r,i+s),f=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*be),g=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*be);if(a.shape==="pent"){let v=[c,u,p,h];return{faces:[v],rim:v,ridges:[[p,h]],gable:[[0,n.y(0)],[i,n.y(i)]]}}if(a.shape==="hip"||a.shape==="pyramid"){let v=a.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,i-n.vr)||i/2),y=[e.u0+v,n.vr,n.rh],w=[e.u1-v,n.vr,n.rh],P=a.shape==="pyramid"?[[c,u,y],[u,p,y],[p,h,y],[h,c,y]]:[[c,u,w,y],[y,w,p,h],[h,c,y],[u,p,w]],z=a.shape==="pyramid"?[[c,y],[h,y],[u,y],[p,y]]:[[y,w],[c,y],[h,y],[u,w],[p,w]];return{faces:P,rim:[c,u,p,h],ridges:z,gable:null}}if(a.shape==="halfhip"){let v=Math.min(n.y(0),n.y(i)),y=v+(n.rh-v)*.55,w=f>1e-6?Math.min(n.vr,(y-a.eave_a)/f):n.vr,P=g>1e-6?Math.max(n.vr,i-(y-a.eave_b)/g):n.vr,z=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,f)),E=[e.u0+z,n.vr,n.rh],S=[e.u1-z,n.vr,n.rh],x=[r,w,y],k=[r,P,y],M=[l,w,y],I=[l,P,y];return{faces:[[c,u,M,S,E,x],[E,S,I,p,h,k],[k,x,E],[M,I,S]],rim:[c,u,M,I,p,h,k,x],ridges:[[E,S],[x,E],[k,E],[M,S],[I,S]],gable:[[0,n.y(0)],[w,y],[P,y],[i,n.y(i)]]}}if(a.shape==="mansard"){let v=nl(i,a.eave_a,a.eave_b,f,g),y=[r,v.vla,v.yla],w=[l,v.vla,v.yla],P=[r,i-v.vlb,v.ylb],z=[l,i-v.vlb,v.ylb],E=[r,v.vr,v.rh],S=[l,v.vr,v.rh];return{faces:[[c,u,w,y],[y,w,S,E],[E,S,z,P],[P,z,p,h]],rim:[c,u,w,S,z,p,h,P,E,y],ridges:[[E,S],[y,w],[P,z]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[i-v.vlb,v.ylb],[i,n.y(i)]]}}let _=[r,n.vr,n.rh],m=[l,n.vr,n.rh];return{faces:[[c,u,m,_],[_,m,p,h]],rim:[c,u,m,p,h,_],ridges:[[_,m]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}function ud(a,t,e){let n=null;for(let i of a.faces){if(!Y([t,e],i.map(v=>[v[0],v[1]])))continue;let[o,s]=i,r=i.slice(2).find(v=>Math.abs((s[0]-o[0])*(v[1]-o[1])-(s[1]-o[1])*(v[0]-o[0]))>1e-9);if(!r)continue;let l=s[0]-o[0],d=s[2]-o[2],c=s[1]-o[1],u=r[0]-o[0],p=r[2]-o[2],h=r[1]-o[1],f=d*h-c*p,g=c*u-l*h,_=l*p-d*u;if(Math.abs(g)<1e-9)continue;let m=o[2]-(f*(t-o[0])+_*(e-o[1]))/g;n=n===null?m:Math.min(n,m)}return n}function pd(a,t,e){let n=Math.min(a.x0,a.x1),i=Math.max(a.x0,a.x1),o=Math.min(a.z0,a.z1),s=Math.max(a.z0,a.z1);return a.axis==="x"?[t,a.flip?s-e:e-o]:[e,a.flip?i-t:t-n]}function hd(a){return{x0:Math.min(a.x0,a.x1),x1:Math.max(a.x0,a.x1),z0:Math.min(a.z0,a.z1),z1:Math.max(a.z0,a.z1)}}function il(a,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of a){if(s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||i(s)<i(t)*1.5)continue;let r=hd(s);e<r.x0||e>r.x1||n<r.z0||n>r.z1||(!o||i(s)<i(o))&&(o=s)}return o}function ol(a,t,e,n){let i=ne(a),o=Se(a),s=2,r=Math.max(i.u0+.3,Math.min(i.u1-s-.3,(n??(i.u0+i.u1)/2)-s/2)),l=t==="a"?a.eave_a:a.eave_b,d=t==="a"?a.pitch_a:a.pitch_b,c=l+1.4,u=s/2*Math.tan(35*be),p=c+u,h=Math.max(.8,Math.min(i.w/2-.2,(p-l)/Math.max(.15,Math.tan(Math.min(80,d)*be)))),f=t==="a"?0:i.w-h,g=t==="a"?h:i.w,_=i.at(r,f),m=i.at(r+s,g);return{id:e,x0:Math.round(Math.min(_[0],m[0])*100)/100,z0:Math.round(Math.min(_[1],m[1])*100)/100,x1:Math.round(Math.max(_[0],m[0])*100)/100,z1:Math.round(Math.max(_[1],m[1])*100)/100,shape:"gable",axis:a.axis==="x"?"z":"x",eave_a:Math.round(c*100)/100,eave_b:Math.round(c*100)/100,pitch_a:35,pitch_b:35,base:Math.round(o.y(t==="a"?0:i.w)*100)/100,overhang:.15,dormer:!0}}function sl(a,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=ne(t),n=Se(t).rh,i=ts(a,{u0:0,u1:0,a:0,b:0}),o=Se(a),s=f=>{let[g,_]=e.at(f,e.w/2),[m,v]=pd(a,g,_);return ud(i,m,v)??o.y(v)},r=s(e.u0)<=s(e.u1),l=r?e.u0:e.u1,d=r?e.u1:e.u0,c=r?1:-1,u=Math.abs(d-l),p=d;for(let f=.5;f<u;f+=.05)if(s(l+c*f)>=n-.02){p=l+c*f;break}if(Math.abs(p-d)<.05)return t;let h={...t};return t.axis==="x"?d===e.u1?h.x1=p:h.x0=p:d===e.u1?h.z1=p:h.z0=p,h}function rl(a,t,e){let n=ne(t),i=a.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>t.base+.05)),o=d=>d.some(c=>i.some(u=>Y(c,u.points))),s=.35,r=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:o(r.map(d=>n.at(d,-s)))?0:e,b:o(r.map(d=>n.at(d,n.w+s)))?0:e,u0:o(l.map(d=>n.at(n.u0-s,d)))?0:e,u1:o(l.map(d=>n.at(n.u1+s,d)))?0:e}}function al(a,t,e,n,i){let o=[];for(let r of[.2,.5,.8])for(let l of[.2,.5,.8])o.push([t+(n-t)*r,e+(i-e)*l]);let s=a.floors.filter(r=>r.rooms.some(l=>l.points.length>=3&&o.some(d=>Y(d,l.points)))).map(r=>r.elevation+r.height);return s.length?Math.max(...s):null}function ll(a,t){let e=a.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function zi(a){return Se(a).rh}function cl(a,t=e=>`roof_${e+1}`){var l;let e=((l=a.settings.roof)==null?void 0:l.pitch)??35,n=a.settings.wall_exterior,i=a.floors.filter(d=>d.rooms.some(c=>c.points.length>=3)).sort((d,c)=>c.elevation-d.elevation),o=[],s=[],r=d=>Math.round(d*1e3)/1e3;for(let d of i){let c=d.rooms.filter(w=>w.points.length>=3),u=[...new Set(c.flatMap(w=>w.points.map(P=>r(P[0]))))].sort((w,P)=>w-P),p=[...new Set(c.flatMap(w=>w.points.map(P=>r(P[1]))))].sort((w,P)=>w-P),h=u.length-1,f=p.length-1,g=(w,P)=>w.some(z=>Y(P,z.points)),_=[];for(let w=0;w<f;w++){_.push([]);for(let P=0;P<h;P++){let z=[(u[P]+u[P+1])/2,(p[w]+p[w+1])/2];_[w].push(g(c,z)&&!g(s,z))}}let m=_.map(w=>w.map(()=>!1)),v=(w,P)=>_[P][w]&&!m[P][w],y=d.elevation+d.height;for(let w=0;w<f;w++)for(let P=0;P<h;P++){if(!v(P,w))continue;let z=P;for(;z+1<h&&v(z+1,w);)z++;let E=w;for(;E+1<f&&Array.from({length:z-P+1},(I,A)=>v(P+A,E+1)).every(Boolean);)E++;for(let I=w;I<=E;I++)for(let A=P;A<=z;A++)m[I][A]=!0;let S=u[P]-n,x=u[z+1]+n,k=p[w]-n,M=p[E+1]+n;Math.min(x-S,M-k)<.8||o.push({id:t(o.length),x0:r(S),z0:r(k),x1:r(x),z1:r(M),shape:"gable",axis:x-S>=M-k?"x":"z",eave_a:r(y),eave_b:r(y),pitch_a:e,pitch_b:e,base:r(y),overhang:null})}s.push(...c)}return o}var Ke=Math.PI/180,dl=1.13,es=1.72,Jt=.025,Be=.07,ul=.25;function le(a,t){var n;let e=[];for(let i of a.floors){if(t&&i.id!==t)continue;let{walls:o}=Tt(i.rooms,{exterior:a.settings.wall_exterior,interior:a.settings.wall_interior},i.walls??[]);for(let s of o){if(!s.exterior&&!s.free)continue;let r=s.b[0]-s.a[0],l=s.b[1]-s.a[1],d=Math.hypot(r,l);if(d<.5)continue;let c=l/d,u=-r/d,p=Math.min(i.height,s.height??i.height),h=((n=s.sources.find(_=>_.room_id===s.roomLeft))==null?void 0:n.edge)??null,f={floorId:i.id,room:s.roomLeft,edge:h,free:!!s.free},g=(_,m,v,y)=>e.push({key:_,section:null,side:"top",flat:!1,o:m,eu:v,es:[0,1,0],n:y,lu:d,ls:p,pitch:90,span:()=>[0,d],facing:[y[0],y[2]],wall:f});g(`wall:${i.id}:${s.id}`,[s.a[0]+c*s.right,i.elevation,s.a[1]+u*s.right],[r/d,0,l/d],[c,0,u]),s.free&&g(`wall:${i.id}:${s.id}:back`,[s.b[0]-c*s.left,i.elevation,s.b[1]-u*s.left],[-r/d,0,-l/d],[-c,0,-u])}}return e}var Ee="ground";function fd(a){let t=[...a.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??a.floors[0]??null}function pl(a,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],i=[-Math.sin(e),0,Math.cos(e)],o=fd(a),s=n[0]*t.u+i[0]*t.v,r=n[2]*t.u+i[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:_r(o,s,r)):t.base??0;return{key:Ee,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Dt(a,t,e=vt(a)){return t.face===Ee?pl(a,t):t.face.startsWith("wall:")?le(a,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function hl(a,t,e){let n=le(a,e),i=a.settings.north??0,o=l=>{let d=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((d-180)*Math.PI/180))},s=[...n].sort((l,d)=>o(d)-o(l))[0];if(!s)return null;let r={...Ri(s,t),portrait:!1,rows:1};return r.cols=Math.max(1,Math.floor((s.lu-.8+Jt)/(es+Jt))),r.u=Math.round((s.lu-(r.cols*es+(r.cols-1)*Jt))/2*100)/100,r.v=Math.round(Math.max(0,s.ls-dl-.3)*100)/100,r}function is(a,t){let e=a.floors.flatMap(o=>o.rooms.flatMap(s=>s.points)),n=e.length?Math.max(...e.map(o=>o[0]))+3:0,i=e.length?Math.min(...e.map(o=>o[1])):0;return{id:t,face:Ee,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(a.settings.north??0)||0,look:"black",entity:null}}function os(a){return a.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function vt(a){let t=a.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>md(v,rl(a,v,v.overhang??t.overhang)));let e=os(a);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map(y=>y[0])),i=e.rooms.flatMap(v=>v.points.map(y=>y[1])),o=a.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,r=Math.max(...n)+o,l=Math.min(...i)-o,d=Math.max(...i)+o,c=e.elevation+e.height;if(t.type==="flat")return[fl("main",null,s,l,r,d,c+ul)];let u=r-s>=d-l,p=t.ridge==="short"?!u:u,h=(p?d-l:r-s)/2,f=h*Math.tan(t.pitch*Ke),g=(v,y,w)=>p?[v,c+w,(l+d)/2+y]:[(s+r)/2+y,c+w,v],[_,m]=p?[s,r]:[l,d];return[-1,1].map(v=>Ii(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",g(_,v*h,0),g(m,v*h,0),g(_,0,f),t.pitch,()=>[0,m-_]))}function md(a,t){let e=ne(a),n=Se(a),i=(g,_,m)=>{let[v,y]=e.at(g,_);return[v,m,y]},o=Math.max(0,t.a),s=Math.max(0,t.b),r=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),d=l-r;if(a.shape==="flat"||a.shape==="parapet"){let g=e.at(r,-o),_=e.at(l,e.w+s);return[fl(a.id,a.id,Math.min(g[0],_[0]),Math.min(g[1],_[1]),Math.max(g[0],_[0]),Math.max(g[1],_[1]),a.eave_a+ul)]}if(a.shape==="pent")return[Ii(`${a.id}:a`,a.id,"a",i(r,-o,n.y(-o)),i(l,-o,n.y(-o)),i(r,e.w+s,n.y(e.w+s)),a.pitch_a,()=>[0,d])];let c=a.shape==="hip"||a.shape==="pyramid",u=a.shape==="pyramid"?(e.u1-e.u0)/2:c?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,p=c?e.u0+u-r:0,h=c?l-(e.u1-u):0,f=[];if(n.vr>.3){let g=Math.hypot(n.vr+o,n.rh-n.y(-o));f.push(Ii(`${a.id}:a`,a.id,"a",i(r,-o,n.y(-o)),i(l,-o,n.y(-o)),i(r,n.vr,n.rh),a.pitch_a,_=>[p*(_/g),d-h*(_/g)]))}if(e.w-n.vr>.3){let g=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));f.push(Ii(`${a.id}:b`,a.id,"b",i(l,e.w+s,n.y(e.w+s)),i(r,e.w+s,n.y(e.w+s)),i(l,n.vr,n.rh),a.pitch_b,_=>[h*(_/g),d-p*(_/g)]))}if(c){let g=n.y(-o),_=n.y(e.w+s),m=[[`${a.id}:c`,"c",i(r,e.w+s,_),i(r,-o,g),i(e.u0+u,n.vr,n.rh)],[`${a.id}:d`,"d",i(l,-o,g),i(l,e.w+s,_),i(e.u1-u,n.vr,n.rh)]];for(let[v,y,w,P,z]of m){let E=gd(v,a.id,y,w,P,z);E&&f.push(E)}}return f}function gd(a,t,e,n,i,o){let s=Vn(qe(i,n));if(s<.3)return null;let r=Pe(qe(i,n)),l=qe(o,n),d=l[0]*r[0]+l[1]*r[1]+l[2]*r[2],c=[l[0]-r[0]*d,l[1]-r[1]*d,l[2]-r[2]*d],u=Vn(c);if(u<.3)return null;let p=Pe(c),h=Pe(gl(r,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=Pe([-p[0],0,-p[2]]),g=Math.atan2(p[1],Math.hypot(p[0],p[2]))/Ke;return{key:a,section:t,side:e,flat:!1,o:n,eu:r,es:p,n:h,lu:s,ls:u,pitch:g,span:m=>{let v=Math.min(1,Math.max(0,m/u));return[d*v,s-(s-d)*v]},facing:[f[0],f[2]]}}function Ii(a,t,e,n,i,o,s,r){let l=Pe(qe(i,n)),d=Pe(qe(o,n)),c=Pe(gl(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let u=Pe([-d[0],0,-d[2]]);return{key:a,section:t,side:e,flat:!1,o:n,eu:l,es:d,n:c,lu:Vn(qe(i,n)),ls:Vn(qe(o,n)),pitch:s,span:r,facing:[u[0],u[2]]}}function fl(a,t,e,n,i,o,s){let r=i-e>=o-n,l=r?i-e:o-n,d=r?o-n:i-e;return{key:`${a}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:r?[1,0,0]:[0,0,1],es:r?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:r?[0,1]:[1,0]}}function cn(a){let t=a.module_w||dl,e=a.module_h||es;return a.portrait===!1?[e,t]:[t,e]}function Dn(a){var t;return(t=a.layout)!=null&&t.length?a.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,a.rows)},()=>Math.max(1,a.cols))}function ss(a,t){return a.flat?Math.min(45,Math.max(0,t.tilt??15))*Ke:a.wall?Math.min(90,Math.max(0,t.tilt??0))*Ke:0}function dn(a,t){let[e,n]=cn(t),i=Dn(t),o=Math.max(1,...i),r=(i.length-1)*rs(a,t)+n*Math.cos(ss(a,t));return[o*e+(o-1)*Jt,r]}function rs(a,t){let[,e]=cn(t),n=ss(a,t);return a.wall?e*Math.cos(n)+Jt:a.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Jt}function ve(a,t,e=!1){let[n,i]=cn(t),o=[],s=ss(a,t),r=i*Math.cos(s),l=rs(a,t),d=Dn(t),c=Math.max(1,...d),u=new Set(t.skip??[]),p=!!a.wall&&n>a.lu+1e-6,h=(g,_,m)=>[a.o[0]+a.eu[0]*g+a.es[0]*_+a.n[0]*m,a.o[1]+a.eu[1]*g+a.es[1]*_+a.n[1]*m,a.o[2]+a.eu[2]*g+a.es[2]*_+a.n[2]*m],f=(g,_)=>{if(a.unbounded)return!0;if(_<-1e-6||_>a.ls+1e-6)return!1;let[m,v]=a.span(_);return g>=m-1e-6&&g<=v+1e-6};return d.forEach((g,_)=>{let m=t.align==="right"?c-g:t.align==="center"?(c-g)/2:0;for(let v=0;v<g;v++){let y=`${_}:${v}`,w=u.has(y);if(w&&!e)continue;let P=t.u+(v+m)*(n+Jt),z=t.v+_*l,E=P+n,S=z+(a.flat||a.wall?r:i);if(p){if(!(f((P+E)/2,z)&&f((P+E)/2,S)))continue}else if(![[P,z],[E,z],[E,S],[P,S]].every(([j,O])=>f(j,O)))continue;if(a.wall&&s>.001){let j=Be+i*Math.sin(s),[O,L]=t.flip?[j,Be]:[Be,j],D=[h(P,z,O),h(E,z,O),h(E,S,L),h(P,S,L)],W=t.flip?z:S,tt=[P+.05,E-.05].map(Q=>[h(Q,W,0),h(Q,W,j)]);o.push({corners:D,posts:tt,cell:y,skipped:w});continue}if(!a.flat){o.push({corners:[h(P,z,Be),h(E,z,Be),h(E,S,Be),h(P,S,Be)],posts:[],cell:y,skipped:w});continue}let x=.15,k=x+i*Math.sin(s),[M,I]=t.flip?[S,z]:[z,S],A=[h(P,M,x),h(E,M,x),h(E,I,k),h(P,I,k)];o.push({corners:A,posts:[P+.05,E-.05].flatMap(j=>[[h(j,M,0),h(j,M,x)],[h(j,I,0),h(j,I,k)]]),cell:y,skipped:w})}}),o}function Fi(a,t){let e=[a.eu[0],a.eu[2]],n=[a.es[0],a.es[2]],i=[t[0]-a.o[0],t[1]-a.o[2]],o=e[0]*n[1]-e[1]*n[0];if(Math.abs(o)<1e-9)return null;let s=(i[0]*n[1]-i[1]*n[0])/o,r=(e[0]*i[1]-e[1]*i[0])/o;if(r<0||r>a.ls)return null;let[l,d]=a.span(r);return s>=l&&s<=d?{u:s,s:r}:null}function ml(a,t){let e=null;for(let n of a){if(n.wall){let s=[t[0]-n.o[0],t[1]-n.o[2]],r=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(r>=0&&r<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:r,s:Number.NaN};r>=0&&r<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:r,s:Number.NaN,y:-1/0});continue}let i=Fi(n,t);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!e||o>e.y)&&(e={face:n,...i,y:o})}return e?{face:e.face,u:e.u,s:e.s}:null}function un(a,t){if(a.unbounded)return{u:t.u,v:t.v};let[e,n]=dn(a,t),i=s=>Math.floor(s*100+1e-6)/100;return{u:a.wall&&e>a.lu?Math.round((a.lu-e)/2*100)/100:i(Math.min(Math.max(0,t.u),Math.max(0,a.lu-e))),v:i(Math.min(Math.max(0,t.v),Math.max(0,a.ls-n)))}}function Ri(a,t){let e={id:t,face:a.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:a.flat?15:null,flip:!1,entity:null,look:"black"},[n]=cn(e),i=.4,o=rs(a,e),[s,r]=a.span(a.ls/2);for(e.cols=Math.max(1,Math.floor((r-s-2*i+Jt)/(n+Jt))),e.rows=Math.max(1,Math.min(4,Math.floor((a.ls-2*i)/o)));e.cols>1&&ve(a,{...e,u:ns(a,e),v:i}).length<e.rows*e.cols;)e.cols--;return e.u=ns(a,e),e.v=i,e}function as(a,t){let e={...t,face:a.key,tilt:a.flat?t.tilt??15:null,rotation:null,flip:!1};return a.wall&&Object.assign(e,_d(a,e)),e.u=ns(a,e),e.v=.4,{...e,...un(a,e)}}function _d(a,t){let e=i=>Math.floor((a.lu+Jt+1e-6)/(cn({...t,portrait:i})[0]+Jt)),n=t.portrait===!1&&e(!1)<1?!0:t.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...Dn(t)),e(n!==!1))),layout:void 0,skip:void 0}}function ns(a,t){let[e]=cn(t),n=t.cols*e+(t.cols-1)*Jt;return Math.round((a.lu-n)/2*100)/100}function ls(a,t){let e=(Math.atan2(a.facing[0],-a.facing[1])/Ke-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function Ti(a,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Ke-t+720)%360,o=Math.cos((i-180)*Ke);return n.lu*n.ls*(1.2+o)};return[...a].sort((n,i)=>e(i)-e(n))[0]??null}function qe(a,t){return[a[0]-t[0],a[1]-t[1],a[2]-t[2]]}function Vn(a){return Math.hypot(a[0],a[1],a[2])}function Pe(a){let t=Vn(a)||1;return[a[0]/t,a[1]/t,a[2]/t]}function gl(a,t){return[a[1]*t[2]-a[2]*t[1],a[2]*t[0]-a[0]*t[2],a[0]*t[1]-a[1]*t[0]]}var _l=.78,bl=1.18;function pn(a){return{id:a.id,face:a.face,u:a.u,v:a.v,rows:1,cols:1,portrait:!0,module_w:a.w||_l,module_h:a.h||bl}}function vl(a,t){let e=ve(a,pn(t))[0];if(!e)return null;let n=i=>[i[0]-a.n[0]*.05,i[1]-a.n[1]*.05,i[2]-a.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function cs(a,t){let e=_l,n=bl,[i,o]=a.span(a.ls/2);return{id:t,face:a.key,u:Math.round((i+o-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(a.ls-n,a.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function Hn(a,t,e){let n=pl(a,t),[i,o]=dn(n,t),s=n.eu[0]*(t.u+i/2)+n.es[0]*(t.v+o/2),r=n.eu[2]*(t.u+i/2)+n.es[2]*(t.v+o/2),l=e*Math.PI/180,d=[Math.cos(l),Math.sin(l)],c=[-Math.sin(l),Math.cos(l)],u=s*d[0]+r*d[1]-i/2,p=s*c[0]+r*c[1]-o/2,h=f=>Math.round(f*100)/100;return{u:h(u),v:h(p),rotation:(Math.round(e)%360+360)%360}}function Wn(a,t){let[e,n]=dn(a,t);return[a.o[0]+a.eu[0]*(t.u+e/2)+a.es[0]*(t.v+n/2),a.o[2]+a.eu[2]*(t.u+e/2)+a.es[2]*(t.v+n/2)]}function ds(a,t,e){let n=e[0]*a.n[0]+e[1]*a.n[1]+e[2]*a.n[2];if(Math.abs(n)<1e-6)return null;let i=((a.o[0]-t[0])*a.n[0]+(a.o[1]-t[1])*a.n[1]+(a.o[2]-t[2])*a.n[2])/n;if(i<=0)return null;let o=[t[0]+e[0]*i-a.o[0],t[1]+e[1]*i-a.o[1],t[2]+e[2]*i-a.o[2]],s=o[0]*a.eu[0]+o[1]*a.eu[1]+o[2]*a.eu[2],r=o[0]*a.es[0]+o[1]*a.es[1]+o[2]*a.es[2];return{t:i,u:s,s:r}}function yl(a,t,e){if(a.unbounded)return!0;if(e<0||e>a.ls)return!1;let[n,i]=a.span(e);return t>=n&&t<=i}function $l(a,t,e,n){for(let i of ve(a,t)){let o=i.corners.map(c=>{let u=[c[0]-a.o[0],c[1]-a.o[1],c[2]-a.o[2]];return[u[0]*a.eu[0]+u[1]*a.eu[1]+u[2]*a.eu[2],u[0]*a.es[0]+u[1]*a.es[1]+u[2]*a.es[2]]}),[s,r]=[Math.min(...o.map(c=>c[0])),Math.max(...o.map(c=>c[0]))],[l,d]=[Math.min(...o.map(c=>c[1])),Math.max(...o.map(c=>c[1]))];if(e>=s-.05&&e<=r+.05&&n>=l-.05&&n<=d+.05)return!0}return!1}var Qt=.03,Oi=a=>a&&a!=="none"?a:null;function ps(a,t=e=>Oi(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of a.floors)for(let i of n.furniture){let o=t(i);if(i.type==="meter")e.grid??=o,e.gridExport??=Oi(i.export);else if(i.type==="inverter"&&o&&!e.solar.includes(o))e.solar.push(o);else if(i.type==="home_battery"){o&&!e.battery.includes(o)&&e.battery.push(o);let s=Oi(i.charge);s&&!e.charge.includes(s)&&e.charge.push(s),(o||s)&&e.batteries.push({power:o,charge:s});let r=Oi(i.soc);r&&!e.soc.includes(r)&&e.soc.push(r)}}return e}function hs(a){for(let t of a.floors){let e=t.furniture.find(n=>n.type==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return a.energy.meter}function El(a){let t=n=>{var i,o;return((o=(i=a.energy_sources)==null?void 0:i.find(s=>s.type===n))==null?void 0:o.stat_energy_from)??null},e=n=>n&&n.startsWith("sensor.")?n:null;return{gas:e(t("gas")),water:e(t("water"))}}function ji(a,t,e="power"){var r,l;if(!t)return null;let n=(l=(r=a.entities)==null?void 0:r[t])==null?void 0:l.device_id;if(!n)return null;let i=Object.keys(a.states).filter(d=>{var c,u,p;return d.startsWith("sensor.")&&((u=(c=a.entities)==null?void 0:c[d])==null?void 0:u.device_id)===n&&((p=a.states[d])==null?void 0:p.attributes.device_class)===e});if(i.length<=1)return i[0]??null;let o=i.filter(d=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(d)),s=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return o.find(d=>s&&d.includes(s))??o[0]??i[0]}function Al(a,t){var n,i,o,s;let e={};for(let r of t.energy_sources??[])if(r.type==="grid"){let l=((i=(n=r.flow_from)==null?void 0:n[0])==null?void 0:i.stat_energy_from)??((s=(o=r.flow_to)==null?void 0:o[0])==null?void 0:s.stat_energy_to),d=ji(a,l);d&&!e.grid&&(e.grid=d)}else if(r.type==="solar"){let l=ji(a,r.stat_energy_from);l&&!e.solar&&(e.solar=l)}else if(r.type==="battery"){let l=ji(a,r.stat_energy_from??r.stat_energy_to);l&&!e.battery&&(e.battery=l);let d=ji(a,r.stat_energy_from??r.stat_energy_to,"battery");d&&!e.battery_soc&&(e.battery_soc=d)}return e}var bd=.07;function ye(a,t=!1){if(!a)return null;let e=Number(a.state);if(!Number.isFinite(e))return null;let n=String(a.attributes.unit_of_measurement??"W"),i=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-i:i}function vd(a,t){var e;return t.startsWith("sensor.")&&((e=a.states[t])==null?void 0:e.attributes.device_class)==="power"}function zl(a,t){var o,s;if(vd(a,t))return t;let e=(s=(o=a.entities)==null?void 0:o[t])==null?void 0:s.device_id;if(!e)return null;let n=Yr(a,e),i=n?De(a,t):null;return zo(a,e).find(r=>r!==t&&(!n||i!==null&&De(a,r)===i))??null}function Il(a,t,e,n=ps(t)){let i=t.energy,o=i.grid??n.grid,s=o?ye(a.states[o],i.grid_invert):null;if(!i.grid&&n.gridExport){let g=Math.max(0,ye(a.states[n.gridExport])??0);s=Math.max(0,s??0)-g}let r=i.solar?ye(a.states[i.solar]):null;if(!i.solar&&n.solar.length){let g=n.solar.map(_=>ye(a.states[_])).filter(_=>_!==null);r=g.length?g.reduce((_,m)=>_+m,0):null}let l=i.battery?ye(a.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let g=n.batteries.map(_=>{if(_.charge){let m=_.power?Math.max(0,ye(a.states[_.power])??0):0,v=Math.max(0,ye(a.states[_.charge])??0);return m-v}return _.power?ye(a.states[_.power],i.battery_invert):null}).filter(_=>_!==null);l=g.length?g.reduce((_,m)=>_+m,0):null}let c=(i.battery_soc?[i.battery_soc]:n.soc).map(g=>{var _;return Number((_=a.states[g])==null?void 0:_.state)}).filter(g=>Number.isFinite(g)),u=c.length?c.reduce((g,_)=>g+_,0)/c.length:NaN,p=i.tariff?a.states[i.tariff]:void 0,h=Number(p==null?void 0:p.state),f=i.consumption?ye(a.states[i.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||r!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,r??0)+(l??0)):e.length&&(f=e.reduce((g,_)=>g+_.power,0)),{grid:s,solar:r===null?null:Math.max(0,r),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function Ge(a,t){return a.pos.push(t),a.adj.push([]),a.pos.length-1}function Ue(a,t,e){let n=Math.hypot(a.pos[t][0]-a.pos[e][0],a.pos[t][1]-a.pos[e][1]);a.adj[t].push({to:e,w:n}),a.adj[e].push({to:t,w:n})}function yd(a,t){let e=a.length,n=a.map((i,o)=>{let s=a[(o+1)%e],r=s[0]-i[0],l=s[1]-i[1],d=Math.hypot(r,l)||1,c=-l/d,u=r/d;return{p:[i[0]+c*t[o],i[1]+u*t[o]],d:[r/d,l/d],n:[c,u]}});return a.map((i,o)=>{let s=n[(o-1+e)%e],r=n[o],l=s.d[0]*r.d[1]-s.d[1]*r.d[0];if(Math.abs(l)<1e-6)return[i[0]+r.n[0]*t[o],i[1]+r.n[1]*t[o]];let d=((r.p[0]-s.p[0])*r.d[1]-(r.p[1]-s.p[1])*r.d[0])/l;return[s.p[0]+s.d[0]*d,s.p[1]+s.d[1]*d]})}function $d(a){return Pt(a.points)>=0?{pts:a.points,flipped:!1}:{pts:[...a.points].reverse(),flipped:!0}}function fs(a,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=Tt(a.rooms,{exterior:t,interior:e},a.walls??[]);for(let o of a.rooms){if(o.points.length<3)continue;let{pts:s,flipped:r}=$d(o),l=s.length,d=s.map((p,h)=>{let f=r?(l-2-h+l)%l:h,g=i.some(_=>!_.exterior&&_.sources.some(m=>m.room_id===o.id&&m.edge===f));return bd+(g?e/2:0)}),c=yd(s,d).map(p=>Ge(n,p)),u=c.map((p,h)=>[p,c[(h+1)%l]]);for(let[p,h]of u)Ue(n,p,h);n.rings.set(o.id,u)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],r=Li(n,o.roomLeft,s),l=Li(n,o.roomRight,s);r!==null&&l!==null&&Ue(n,r,l)}return n}function Li(a,t,e){let n=a.rings.get(t);if(!n)return null;let i=null;for(let s of n){let r=a.pos[s[0]],l=a.pos[s[1]],d=l[0]-r[0],c=l[1]-r[1],u=d*d+c*c||1,p=Math.min(1,Math.max(0,((e[0]-r[0])*d+(e[1]-r[1])*c)/u)),h=[r[0]+d*p,r[1]+c*p],f=Math.hypot(e[0]-h[0],e[1]-h[1]);(!i||f<i.d)&&(i={seg:s,q:h,d:f})}if(!i)return null;let o=Ge(a,i.q);return Ue(a,o,i.seg[0]),Ue(a,o,i.seg[1]),o}function Ci(a,t,e){let n=a.pos[e],i=Li(a,t.id,n);if(i===null)return!1;let o=a.pos[i],s=a.pos[a.adj[i][0].to],r=a.pos[a.adj[i][1].to],l=Math.hypot(r[0]-s[0],r[1]-s[1])||1,d=[(r[0]-s[0])/l,(r[1]-s[1])/l],c=(n[0]-o[0])*d[0]+(n[1]-o[1])*d[1],u=(n[1]-o[1])*d[0]-(n[0]-o[0])*d[1];if(Math.abs(c)<.01||Math.abs(u)<.01)return Ue(a,e,i),!0;let p=[o[0]+d[0]*c,o[1]+d[1]*c],h=[o[0]-d[1]*u,o[1]+d[0]*u],f=Ge(a,Y(h,t.points)||!Y(p,t.points)?h:p);return Ue(a,i,f),Ue(a,f,e),!0}function Bn(a,t){let e=a.rooms.filter(o=>o.points.length>=3),n=e.find(o=>Y(t,o.points));if(n)return n;let i=null;for(let o of e)for(let s of o.points){let r=Math.hypot(t[0]-s[0],t[1]-s[1]);(!i||r<i.d)&&(i={room:o,d:r})}return(i==null?void 0:i.room)??null}function Fl(a,t){let e=a.pos.map(()=>1/0),n=a.pos.map(()=>-1),i=a.pos.map(()=>!1);for(e[t]=0;;){let o=-1;for(let s=0;s<e.length;s++)!i[s]&&e[s]<1/0&&(o<0||e[s]<e[o])&&(o=s);if(o<0)break;i[o]=!0;for(let{to:s,w:r}of a.adj[o])e[o]+r<e[s]-1e-9&&(e[s]=e[o]+r,n[s]=o)}return{dist:e,prev:n}}function wl(a,t){return a.every(e=>t[e].kind==="battery")?"battery":a.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var xl=new WeakMap;function wd(a,t){let e=hs(a),n=a.floors.find(c=>c.id===e.floor_id),i=[],{wall_exterior:o,wall_interior:s}=a.settings,r=new Map,l=new Map;t.forEach((c,u)=>l.set(c.floorId,[...l.get(c.floorId)??[],u]));let d=a.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let u=c.elevation>n.elevation,p=l.get(c.id),h=wl(p,t);i.push({floorId:n.id,a:[e.x,Qt,e.z],b:[e.x,u?n.height:-.2,e.z],dist:0,members:p,kind:h});let f=Math.abs(c.elevation-n.elevation);i.push({floorId:c.id,a:[e.x,u?-.2:c.height,e.z],b:[e.x,Qt,e.z],dist:f,members:p,kind:h}),r.set(c.id,f+.25)}for(let c of d){let u=fs(c,o,s),p=Bn(c,[e.x,e.z]);if(!p)continue;let h=Ge(u,[e.x,e.z]);if(!Ci(u,p,h))continue;let f=[];for(let y of l.get(c.id)){let w=t[y],P=Bn(c,[w.x,w.z]);if(!P)continue;let z=Ge(u,[w.x,w.z]);Ci(u,P,z)&&f.push({node:z,member:y})}let{dist:g,prev:_}=Fl(u,h),m=new Map;for(let y of f)if(Number.isFinite(g[y.node]))for(let w=y.node;_[w]>=0;w=_[w]){let P=_[w],z=`${P}>${w}`,E=m.get(z)??{a:P,b:w,members:[]};E.members.push(y.member),m.set(z,E)}let v=r.get(c.id)??0;for(let{a:y,b:w,members:P}of m.values()){let z=u.pos[y],E=u.pos[w],S=wl(P,t);i.push({floorId:c.id,a:[z[0],Qt,z[1]],b:[E[0],Qt,E[1]],dist:v+g[y],members:P,kind:S})}}return i}function Rl({building:a,consumers:t,summary:e,battery:n,fieldPower:i,devicePower:o}){var k;let s=hs(a);if(!s)return[];let r=a.floors.find(M=>M.id===s.floor_id);if(!r)return[];let l=M=>o==null?void 0:o.get(M),d=us(a,"inverter"),c=us(a,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=M=>{let I=null;for(let A of d)A.floorId===M.floorId&&(!I||Math.hypot(A.x-M.x,A.z-M.z)<Math.hypot(I.x-M.x,I.z-M.z))&&(I=A);return I},p=M=>l(M.id)??(c.length===1?e.battery??0:0),h=new Map;for(let M of c){let I=u(M);I&&h.set(M.id,I)}let f=t.map(M=>({floorId:M.floorId,x:M.x,z:M.z,kind:M.wallbox?"wallbox":"consumer",power:M.power}));for(let M of c)!h.has(M.id)&&e.battery!==null&&f.push({floorId:M.floorId,x:M.x,z:M.z,kind:"battery",power:Math.abs(p(M))});let g=`${s.floor_id}:${s.x},${s.z}|${f.map(M=>`${M.floorId}:${M.x},${M.z}:${M.kind}`).join(";")}`,_=xl.get(a);_||xl.set(a,_=new Map);let m=_.get(g);m||(m=wd(a,f),_.clear(),_.set(g,m));let v=m.map(M=>({floorId:M.floorId,a:M.a,b:M.b,dist:M.dist,power:M.members.reduce((I,A)=>I+f[A].power,0),kind:M.kind})),y=e.grid!==null?ms(a):null,w=a.settings.roof.cables??[],P=M=>w.find(I=>I.id===M),z=(M,I)=>M.map(A=>({...A,key:I}));if(y){let M=e.grid>=0,I=P("grid"),A=I?Nn(a,I,[y.end[0],r.elevation+Math.max(Qt,y.height),y.end[1]],[s.x,r.elevation+.4+1.1,s.z]):[...y.height>.05?[[y.end[0],y.height,y.end[1]]]:[],[y.end[0],Qt,y.end[1]],[y.wall[0],Qt,y.wall[1]],[s.x,Qt,s.z]],j=I?hn(a,M?A:[...A].reverse(),Math.abs(e.grid),M?"grid":"export",r):Ol(r.id,M?A:[...A].reverse(),Math.abs(e.grid),M?"grid":"export",0);v.push(...z(j,"grid"))}if(e.battery!==null&&e.battery>0)for(let M of v)M.kind==="battery"&&([M.a,M.b]=[M.b,M.a]);let E=a.settings.roof.solar??[],S=a.settings.roof.strings??[],x=new Map;if(i&&E.length){let M=[...vt(a),...le(a)];for(let I of E){let A=i.get(I.id)??0,j=I.string?(k=S.find(G=>G.id===I.string))==null?void 0:k.inverter:null,O=j?c.find(G=>G.id===j)??null:null,L=j&&!O?d.find(G=>G.id===j)??null:null;if(O){let G=h.get(O.id);G&&x.set(G.id,(x.get(G.id)??0)+A);let ot=O.variant==="wall"?.5+O.h:.9,q=P(`solar:${I.id}`),ht=q?Sl(a,I):null,zt=a.floors.find(Zt=>Zt.id===O.floorId);q&&ht&&zt?v.push(...z(hn(a,Nn(a,q,ht,[O.x,zt.elevation+ot,O.z]),A,"solar",zt),`solar:${I.id}`)):v.push(...z(Pl(a,I,A,O,ot),`solar:${I.id}`));continue}if(!L&&d.length){let G=Dt(a,I,M),ot=G?Wn(G,I):[I.u,I.v];L=d.reduce((q,ht)=>!q||Math.hypot(ht.x-ot[0],ht.z-ot[1])<Math.hypot(q.x-ot[0],q.z-ot[1])?ht:q,null)}L&&x.set(L.id,(x.get(L.id)??0)+A);let D=L??{floorId:s.floor_id,x:s.x,z:s.z},W=L?1.1+L.h:1.5,tt=P(`solar:${I.id}`),Q=tt?Sl(a,I):null,X=a.floors.find(G=>G.id===D.floorId);tt&&Q&&X?v.push(...z(hn(a,Nn(a,tt,Q,[D.x,X.elevation+W,D.z]),A,"solar",X),`solar:${I.id}`)):v.push(...z(Pl(a,I,A,D,W),`solar:${I.id}`))}}else e.solar!==null&&!d.length&&v.push({floorId:r.id,a:[s.x+.08,r.height+.6,s.z+.08],b:[s.x+.08,Qt,s.z+.08],dist:0,power:e.solar,kind:"solar"});for(let M of d){let I=1.1+M.h,A=c.filter(L=>h.get(L.id)===M),j=l(M.id);if(j===void 0){j=x.get(M.id)??(d.length===1?e.solar??0:0);for(let L of A)j+=p(L)}let O=a.floors.find(L=>L.id===M.floorId);if(e.solar!==null||e.battery!==null){let L=P(`inv:${M.id}`),D=L&&O?hn(a,Nn(a,L,[M.x,O.elevation+I,M.z],[s.x,r.elevation+1.5,s.z]),Math.max(0,j),"inverter",O):Ml(a,M,I,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,j),"inverter",0);v.push(...z(D,`inv:${M.id}`))}for(let L of A){let D=p(L);if(e.battery===null&&l(L.id)===void 0)continue;let W=L.variant==="wall"?.5+L.h:.9,tt=P(`bat:${L.id}`),Q=tt&&O?hn(a,Nn(a,tt,[M.x,O.elevation+I-.1,M.z],[L.x,O.elevation+W,L.z]),Math.abs(D),"battery",O):Ml(a,M,I-.1,L,W,Math.abs(D),"battery",0);v.push(...z(D<=0?Q:Q.map(X=>({...X,a:X.b,b:X.a})).reverse(),`bat:${L.id}`))}}return v}function ms(a){var h;let t=hs(a),e=t?a.floors.find(f=>f.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:i}=a.settings,{walls:o}=Tt(e.rooms,{exterior:n,interior:i},e.walls??[]),s=us(a,"grid_point")[0],r=o.filter(f=>f.exterior);if(s){let f=null;for(let m of r){let v=m.b[0]-m.a[0],y=m.b[1]-m.a[1],w=s.x-t.x,P=s.z-t.z,z=w*y-P*v;if(Math.abs(z)<1e-9)continue;let E=((m.a[0]-t.x)*y-(m.a[1]-t.z)*v)/z,S=((m.a[0]-t.x)*P-(m.a[1]-t.z)*w)/z;if(E<=0||E>1||S<0||S>1||f&&E>=f.t)continue;let x=Math.hypot(v,y)||1;f={q:[t.x+w*E,t.z+P*E],out:[y/x,-v/x],t:E}}let g=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[t.x,t.z],_=((h=a.floors.flatMap(m=>m.furniture).find(m=>m.id===s.id))==null?void 0:h.mount_y)??0;return{floorId:e.id,wall:g,end:[s.x,s.z],height:Math.max(0,_)}}let l=null;for(let f of r){let g=f.b[0]-f.a[0],_=f.b[1]-f.a[1],m=g*g+_*_||1,v=Math.min(1,Math.max(0,((t.x-f.a[0])*g+(t.z-f.a[1])*_)/m)),y=[f.a[0]+g*v,f.a[1]+_*v],w=Math.hypot(t.x-y[0],t.z-y[1]),P=Math.sqrt(m);(!l||w<l.d)&&(l={q:y,out:[_/P,-g/P],d:w})}if(!l)return null;let{q:d,out:c}=l,u=0;for(let f of a.floors)for(let g of f.outdoor??[]){let _=g.points.length;for(let m=0;m<_;m++){let v=g.points[m],y=g.points[(m+1)%_],w=y[0]-v[0],P=y[1]-v[1],z=c[0]*P-c[1]*w;if(Math.abs(z)<1e-9)continue;let E=((v[0]-d[0])*P-(v[1]-d[1])*w)/z,S=((v[0]-d[0])*c[1]-(v[1]-d[1])*c[0])/z;E>0&&S>=0&&S<=1&&(u=Math.max(u,Math.min(15,E)))}}let p=u>n+1?u:n+2.5;return{floorId:e.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*p,d[1]+c[1]*p],height:0}}function us(a,t){let e=[];for(let n of a.floors)for(let i of n.furniture)i.type===t&&e.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return e}var kl=new WeakMap;function Tl(a,t,e,n){let i=`${t.id}:${e.join(",")}>${n.join(",")}`,o=kl.get(a);o||kl.set(a,o=new Map);let s=o.get(i);if(s)return s;let{wall_exterior:r,wall_interior:l}=a.settings,d=fs(t,r,l),c=[e,n],u=Bn(t,e),p=Bn(t,n);if(u&&p){let h=Ge(d,e),f=Ge(d,n);if(Ci(d,u,h)&&Ci(d,p,f)){let{dist:g,prev:_}=Fl(d,h);if(Number.isFinite(g[f])){c.length=0;for(let m=f;m>=0;m=_[m])c.unshift(d.pos[m])}}}return o.set(i,c),c}function Ml(a,t,e,n,i,o,s,r){let l=a.floors.find(u=>u.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let d=Tl(a,l,[t.x,t.z],[n.x,n.z]),c=[[t.x,e,t.z],...d.map(u=>[u[0],Qt,u[1]]),[n.x,i,n.z]];return Ol(l.id,c,o,s,r)}function Ol(a,t,e,n,i){let o=[];for(let s=0;s+1<t.length;s++){let r=t[s],l=t[s+1],d=Math.hypot(l[0]-r[0],l[1]-r[1],l[2]-r[2]);d<1e-4||(o.push({floorId:a,a:r,b:l,dist:i,power:e,kind:n}),i+=d)}return o}function Nn(a,t,e,n){let i=a.floors.find(s=>s.id===t.floor_id),o=((i==null?void 0:i.elevation)??0)+Math.max(Qt,t.height);return[e,...t.points.map(s=>[s[0],o,s[1]]),n]}function Sl(a,t){let e=Dt(a,t,[...vt(a),...le(a)]);if(!e)return null;let[n,i]=dn(e,t),o=t.u+n/2,s=e.unbounded?t.v+i/2:t.v;return[e.o[0]+e.eu[0]*o+e.es[0]*s,e.o[1]+e.eu[1]*o+e.es[1]*s,e.o[2]+e.eu[2]*o+e.es[2]*s]}function xd(a,t,e){let{wall_exterior:n,wall_interior:i}=a.settings,o=fs(t,n,i),s=Bn(t,e),r=s?Li(o,s.id,e):null;return r===null?e:o.pos[r]}function hn(a,t,e,n,i){let o=[...a.floors].sort((d,c)=>d.elevation-c.elevation),s=d=>{let c=i;for(let u of o)d>=u.elevation-.01&&(c=u);return c},r=[],l=0;for(let d=0;d+1<t.length;d++){let c=t[d],u=t[d+1];if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-c[1])>.01){let f=Math.min(c[1],u[1]),g=Math.max(c[1],u[1]);for(let _ of o)_.elevation>f+.01&&_.elevation<g-.01&&h.push(_.elevation);u[1]<c[1]&&h.reverse()}for(let f of[...h,u[1]]){let g=(f-c[1])/(u[1]-c[1]||1),_=Math.abs(u[1]-c[1])>.01?[c[0]+(u[0]-c[0])*g,f,c[2]+(u[2]-c[2])*g]:u,m=s((c[1]+_[1])/2),v=Math.hypot(_[0]-c[0],_[1]-c[1],_[2]-c[2]);v>1e-4&&r.push({floorId:m.id,a:[c[0],c[1]-m.elevation,c[2]],b:[_[0],_[1]-m.elevation,_[2]],dist:l,power:e,kind:n}),l+=v,c=_}}return r}function Pl(a,t,e,n,i){let o=[...vt(a),...le(a)],s=Dt(a,t,o),r=a.floors.find(_=>_.id===n.floorId);if(!s||!r)return[];let[l,d]=dn(s,t),c=(_,m)=>[s.o[0]+s.eu[0]*_+s.es[0]*m,s.o[1]+s.eu[1]*_+s.es[1]*m,s.o[2]+s.eu[2]*_+s.es[2]*m],u=t.u+l/2,p=r.elevation+Qt,h=[],f;if(s.unbounded){let _=c(u,t.v+d/2);f=[_[0],p,_[2]],h.push(f)}else if(s.wall){let _=c(u,t.v);f=[_[0],p,_[2]],h.push(_,f)}else{let _=c(u,t.v),m=os(a)??r,v=Math.max(r.elevation+.5,Math.min(_[1]-.25,m.elevation+m.height-.12));f=[_[0],v,_[2]],h.push(_)}let g=xd(a,r,[f[0],f[2]]);h.push([g[0],f[1],g[1]]),Math.abs(f[1]-p)>.05&&h.push([g[0],p,g[1]]);for(let _ of Tl(a,r,g,[n.x,n.z]).slice(1))h.push([_[0],p,_[1]]);return h.push([n.x,r.elevation+i,n.z]),hn(a,h,e,"solar",r)}var Ll=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],kd={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Md={back:0,right:90,front:180,left:270};function Cl(a,t,e){let n=At(a.points),i=n.x1-n.x0,o=n.z1-n.z0,s=kd[t],r=[],l=(c,u,p,h,f)=>{let[g,_,m]=f??se[c];r.push({id:e(),type:c,x:jl(u),z:jl(p),rotation:h,w:g,d:_,h:m,variant:null,entity:null,power:null})},d=.02;for(let c of s.rows){let u=c.items.map(_=>({type:_.type,size:_.size??se[_.type]})),p=c.wall==="back"||c.wall==="front"?i:o,h=[],f=0;for(let _ of u){if(f+_.size[0]>p-.1)break;h.push(_),f+=_.size[0]}let g=c.align==="start"?.05:c.align==="end"?p-f-.05:(p-f)/2;for(let _ of h){let[m,v]=_.size,y=g+m/2,w=v/2+d;c.wall==="back"?l(_.type,n.x0+y,n.z0+w,0,_.size):c.wall==="front"?l(_.type,n.x1-y,n.z1-w,180,_.size):c.wall==="right"?l(_.type,n.x1-w,n.z0+y,90,_.size):l(_.type,n.x0+w,n.z1-y,Md.left,_.size),g+=m}}for(let c of s.free){let[u,p]=c.size??se[c.type],h=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*c.at[0])),f=Math.min(n.z1-p/2-.05,Math.max(n.z0+p/2+.05,n.z0+o*c.at[1]));l(c.type,h,f,c.rotation,c.size)}return r}var jl=a=>Math.round(a*1e3)/1e3;var fn=ie`
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
`,Vi=ie`
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
`;var Vl=40,gs=class extends Ut{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=s=>{let r=`${s.label} ${s.id}`.toLowerCase();return e.every(l=>r.includes(l))},i=this.fixed.filter(s=>!t||n(s)),o=t?this.options.filter(n):this.options;return[...i,...o.slice(0,Vl)]}get leftOut(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=t?this.options.filter(i=>e.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-Vl)}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[];return b`<div class="wrap">
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
      ${this._open?b`<ul class="list" role="listbox">
            ${e.length?$:b`<li class="empty">–</li>`}
            ${e.map((n,i)=>b`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?b`<small>${n.id}</small>`:$}
              </li>`)}
            ${this.leftOut>0?b`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:$}
          </ul>`:$}
    </div>`}static styles=[fn,ie`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",gs);var Sd=new URL(import.meta.url),Pd=new URL("./neonplan3d-3d.js?v=e35272f45273",Sd).href,Dl;function Di(){return Dl??=import(Pd),Dl}function Ae(a,t){if(!je(t))return Yt(a,`furn_${t}`);let e=yt(t);return e?oe(e):Yt(a,"pack_missing_item")}var _s=class extends Ut{static properties={hass:{attribute:!1},packs:{attribute:!1},building:{attribute:!1},_packMsg:{state:!0}};constructor(){super(),this._packMsg=null}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!1}t(t,e){return Yt(this.hass,t,e)}render(){let t=Ra();return b`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new?labels=enhancement" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href=${We("extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${Pi.filter(e=>Vt(e)).map(e=>b`<div class="fp3d-ext-feature ${t.has(e)?"fp3d-ext-on":""}">
              <b>${t.has(e)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${e}`)}</b>
              <span class="fp3d-sub">${this.t(`pro_feature_${e}`)}</span>
              <span class="fp3d-ext-links">
                ${t.has(e)?b`<span class="fp3d-ext-state">${this.t("ext_active")}</span>`:$}
                <a class="fp3d-ext-link" href=${We(e)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderFun(t)} ${this.renderPacks()}
    </div>`}editBuilding(t){if(!this.building)return;let e=structuredClone(this.building);t(e),this.dispatchEvent(new CustomEvent("building-edit",{detail:e,bubbles:!0,composed:!0}))}renderFun(t){var d,c;let e=Ei.filter(u=>t.has(u));if(!e.length)return $;let n=((d=this.building)==null?void 0:d.settings.pets)??null,i=(n==null?void 0:n.list)??[],o=(n==null?void 0:n.on)!==!1,s=(((c=this.building)==null?void 0:c.floors)??[]).filter(u=>u.rooms.length).sort((u,p)=>u.elevation-p.elevation),r=u=>this.editBuilding(p=>{var f,g;let h={on:((f=p.settings.pets)==null?void 0:f.on)!==!1,list:[...((g=p.settings.pets)==null?void 0:g.list)??[]]};u(h),p.settings.pets=h}),l=(u,p)=>r(h=>h.list=h.list.map(f=>f.id===u?{...f,...p}:f));return b`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${e.map(u=>u==="fun_halloween"?this.renderHalloween():b`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>✓ ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isAdmin&&this.building?b`<label class="fp3d-check"><input type="checkbox" .checked=${o} @change=${p=>r(h=>h.on=p.target.checked)} /> ${this.t("pets_show")}</label>
                    ${i.map(p=>b`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${h=>{let f=h.target.value,g=Sn[f];l(p.id,{kind:f,fur:g.includes(p.fur)?p.fur:g[0],breed:f==="dog"?p.breed??"labrador":null})}}
                        >
                          ${["cat","dog","rabbit"].map(h=>b`<option value=${h} ?selected=${p.kind===h}>${this.t(`pet_kind_${h}`)}</option>`)}
                        </select>
                        ${p.kind==="dog"?b`<select aria-label=${this.t("pet_breed")} @change=${h=>l(p.id,{breed:h.target.value})}>
                              ${pr.map(h=>b`<option value=${h} ?selected=${(p.breed??"labrador")===h}>${this.t(`pet_breed_${h}`)}</option>`)}
                            </select>`:$}
                        <input type="text" maxlength="30" .value=${p.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${h=>l(p.id,{name:h.target.value.trim()})} />
                        <select aria-label=${this.t("pet_fur")} @change=${h=>l(p.id,{fur:h.target.value})}>
                          ${Sn[p.kind].map(h=>b`<option value=${h} ?selected=${p.fur===h}>${this.t(`pet_fur_${h}`)}</option>`)}
                        </select>
                        ${s.length>1?b`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${h=>l(p.id,{floor_id:h.target.value||null})}>
                              ${s.map((h,f)=>b`<option value=${f===0?"":h.id} ?selected=${(p.floor_id??s[0].id)===h.id}>🏠 ${h.name}</option>`)}
                            </select>`:$}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${()=>r(h=>h.list=h.list.filter(f=>f.id!==p.id))}>✕</button>
                      </div>`)}
                    ${i.length<8?b`<button class="fp3d-btn" @click=${()=>r(p=>p.list.push({id:`pet_${Date.now().toString(36)}`,kind:"cat",name:"",fur:Sn.cat[p.list.length%Sn.cat.length]}))}>+ ${this.t("pet_add")}</button>`:$}`:$}
            </div>`)}
    </section>`}renderHalloween(){var e,n;let t=((n=(e=this.building)==null?void 0:e.settings.halloween)==null?void 0:n.ghost)!==!1;return b`<div class="fp3d-ext-feature fp3d-ext-on">
      <b>✓ 🎃 ${this.t("fun_name_halloween")}</b>
      <span class="fp3d-sub">${this.t("fun_feature_halloween")}</span>
      ${this.isAdmin&&this.building?b`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${t}
              @change=${i=>this.editBuilding(o=>o.settings.halloween={...o.settings.halloween??{},ghost:i.target.checked})}
            />
            ${this.t("halloween_ghost")}</label
          >`:$}
    </div>`}renderPacks(){let t=this.packs??[];return b`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${t.map(e=>{var n;return b`<div class="fp3d-pack">
          <div>
            <b>${he(e)}</b>
            <span class="fp3d-sub">${(n=e.features)!=null&&n.length?this.t("pack_features",{publisher:e.publisher,n:e.features.length}):this.t("pack_by",{publisher:e.publisher,n:e.items.length})}</span>
            ${e.licensee?b`<span class="fp3d-sub">${this.t("pack_licensed",{name:e.licensee})}${e.release&&e.release>1?` \xB7 v${e.release}`:""}</span>`:$}
            ${(e.features??[]).some(i=>!Fa(i))?b`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:$}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(e)}>${this.t("pack_remove")}</button>
        </div>`})}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${e=>this.importPackFile(e)} />
      </label>
      ${this._packMsg?b`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:$}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let i=[],o=[];for(let r of n)try{let l=await Js(this.hass,await r.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:d,message:c}=l??{},u=`pack_error_${d}`,p=this.t(u,{detail:c??String(l)});o.push(`${r.name}: ${p===u?this.t("pack_error_other",{detail:c??String(l)}):p}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...s,...i,...o].join(" \xB7 ")}}async deletePack(t){!this.hass||!confirm(this.t("pack_remove_confirm",{name:he(t)}))||(await Qs(this.hass,t.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[fn,Vi,ie`
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
      .fp3d-pet-row {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
        margin-top: 6px;
      }
      .fp3d-pet-row input[type="text"],
      .fp3d-pet-row select {
        padding: 6px 10px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.25));
        background: rgba(4, 8, 18, 0.6);
        color: inherit;
        font: inherit;
      }
      .fp3d-pet-row input[type="text"] {
        flex: 1;
        min-width: 110px;
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
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",_s);var Hi=10,Wl=new Set(["vertex","room","device","opening","furniture","furnset","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),Nl=100,Bl=/^(switch|input_boolean)\./,bs={base:["kitchen","sink","stove","dishwasher","sideboard","dresser","tv_board","nightstand","washbasin","washer","dryer","worktop","desk"],hang:["kitchen_wall","tv_wall","shelf","lamp_wall","radiator","ac_unit","led_strip"],tall:["kitchen_tall","fridge","wardrobe","tall_cabinet","shelf","coat_rack"],living:["sofa","armchair","bed","bunk_bed","bench","corner_bench","plant"],light:["lamp_wall","lamp_floor","led_strip","lamp_table","wall_switch"]},Ad=new Set(["kitchen_wall","tv_wall","lamp_wall","shelf","led_strip","ac_unit"]),Wi=new Set(["kitchen","kitchen_wall","kitchen_tall","sideboard","dresser","tv_board","worktop","wardrobe","tall_cabinet","shelf","desk"]),zd={kitchen:.15,kitchen_wall:.2,kitchen_tall:.3,sideboard:.4,dresser:.4,tv_board:.6,worktop:.1,wardrobe:.4,tall_cabinet:.3,shelf:.25,desk:.6},Ni=10,F=a=>Math.round(a*1e3)/1e3,vs=.06;function Ye(a,t,e){let[n,,i]=_e(a,t,0,e);return[F(n),F(i)]}function ys(a,t){let e=Bt(a,t),n=0;for(let i=1;i<e.length;i++)n+=Math.hypot(e[i][0]-e[i-1][0],e[i][1]-e[i-1][1],e[i][2]-e[i-1][2]);return n}var ql={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Id=new Set(["parking","stairwell","rug","grid_point","waste_bin","mailbox","wall_switch","wall_socket"]),ws=class extends Ut{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideMin:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_multi:{state:!0},_single:{state:!0},_multiMode:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallMulti:{state:!0},_wallSingle:{state:!0},_wallGap:{state:!0},_wallCat:{state:!0},_wallQuery:{state:!0},_wallFrame:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_techMode:{state:!0},_feedKind:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_toolMenu:{state:!0},_toolOpen:{state:!0},_viewMenu:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;lastFurnTap=null;shiftHeld=!1;onShift=t=>this.shiftHeld=t.shiftKey;kitPics=new Map;kitPicsAsked=new Set;cableCache=null;techPress=null;wvZoom=null;wvTouch=new Map;wvPinch=null;wvTap=null;wvScale=1;techPick=!1;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallResize=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._multi=[],this._single=!1,this._multiMode=!1,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let i=localStorage.getItem("neonplan3d.library");i&&(this._libOpen=new Set(JSON.parse(i)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._techMode=!1,this._feedKind=null,this._wallSel=null,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallCat=null,this._wallQuery="",this._wallFrame=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("neonplan3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let t=!1;try{t=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let i=Number(localStorage.getItem("neonplan3d.editorSplit"));i>=20&&i<=80&&(this._splitRatio=i/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=e;let n=!1;try{n=localStorage.getItem("neonplan3d.sideMin")==="1"}catch{}this._sideMin=n,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._toolMenu=null,this._toolOpen=null,this._viewMenu=!1,this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return Yt(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onShift)}disconnectedCallback(){var t;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onShift),(t=this.resizeObserver)==null||t.disconnect()}willUpdate(t){var e,n;t.has("packs")&&tr(this.packs??[]),t.has("_doc")&&mr(this._doc),t.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(t.has("_split")&&this._split||t.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),t.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(i=>i.id===this._floorId)||(this._floorId=((e=this._doc.floors[0])==null?void 0:e.id)??null),(n=this.floor)!=null&&n.rooms.some(i=>i.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let i=e.getBoundingClientRect(),o=r=>{this._splitRatio=Math.min(.8,Math.max(.2,(r.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(t){var l;let{id:e,x:n,z:i}=t.detail,o=this._doc.settings.wall_interior,s=this._wallView?this.wallSelection():this._furnitureId?this.selection():[],r=s.includes(e)&&s.length>1?s:[];if(r.length){let d=(l=this.floor)==null?void 0:l.furniture.find(h=>h.id===e);if(!d||r.some(h=>this.isFixedItem("furniture",h)))return;let c=F(n-d.x),u=F(i-d.z),p=new Set(r);this.change((h,f)=>{for(let g of f.furniture)p.has(g.id)&&Object.assign(g,{x:F(g.x+c),z:F(g.z+u)})});return}this.change(d=>{for(let c of d.floors){let u=c.furniture.find(y=>y.id===e);if(!u)continue;let[p,h]=Do(c,u.x,u.z,n,i),[f,g]=Ho(c,u,p,h,o),_=Fn(c,u,o),m=_?Math.hypot(_.x-u.x,_.z-u.z):1/0;Object.assign(u,{x:f,z:g});let v=Fn(c,u,o);v&&Math.hypot(v.x-f,v.z-g)<=m+.01&&Object.assign(u,v)}})}onDeviceMoved3d(t){let{id:e,x:n,z:i}=t.detail;this.change(o=>{for(let s of o.floors){let r=s.placements.find(c=>c.entity_id===e);if(!r)continue;let[l,d]=Do(s,r.x,r.z,n,i);Object.assign(r,{x:l,z:d})}})}render3dBar(){var n;if(!this.isAdmin)return $;let t=this.furnitureItem,e=this.device;if(t){let i=re(t),o=(s,r,l=.05)=>b`<label class="fp3d-3d-size" title=${this.t(`size_${s}`)}
        >${r}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${l}
          .value=${this.unit==="imperial"?He(t[s]):String(Math.round(t[s]*100)/100)}
          @change=${d=>{let c=this.readLen(d.target.value);c!==null&&c>=l&&this.updateFurniture({[s]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return b`<div class="fp3d-3d-bar">
        <span>${Ae(this.hass,t.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${i?b`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?He(t.mount_y??Rt(this.floor,t)):String(Math.round((t.mount_y??Rt(this.floor,t))*100)/100)}
                @change=${s=>{let r=this.readLen(s.target.value);r!==null&&r>=0&&this.updateFurniture({mount_y:Math.round(Math.min(Hi,r)*1e3)/1e3})}}
              />
            </label>`:$}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let i=lt(e.entity_id),o=i==="light",s=i?vi(i,((n=this.floor)==null?void 0:n.height)??2.5,o?e.mount??"ceiling":null):1;return b`<div class="fp3d-3d-bar">
        <span>${Mt(this.hass,e.entity_id)}</span>
        ${o?b`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(r=>b`<option value=${r} ?selected=${r===(e.mount??"ceiling")}>${this.t(`lamp_${r}`)}</option>`)}
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
      </div>`}return $}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t!=null&&t.moved&&this.pushHistory(t.base)}};grab3dStart(t){let e=this._doc,n=vt(e),i=null,o=(r,l,d,c,u=!1)=>{if(!d||u)return;let p=ds(d,t.o,t.d);!p||!$l(d,c,p.u,p.s)||i&&i.t<=p.t||(i={id:r,win:l,t:p.t,du:p.u-c.u,ds:p.s-c.v})};if(this._tool==="energy")for(let r of e.settings.roof.solar??[])o(r.id,!1,Dt(e,r,n),r,!!r.locked);if(this._tool==="roof")for(let r of e.settings.roof.windows??[])o(r.id,!0,n.find(l=>l.key===r.face)??null,pn(r),!!r.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:e,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(t){var h,f;let e=this.grab3d;if(!e)return;let n=e.base,i=e.win?(h=n.settings.roof.windows)==null?void 0:h.find(g=>g.id===e.id):void 0,o=e.win?i?pn(i):void 0:(f=n.settings.roof.solar)==null?void 0:f.find(g=>g.id===e.id);if(!o)return;let s=Dt(n,o),r=s!=null&&s.unbounded?[s]:e.win?vt(n):[...vt(n),...le(n)],l=null;for(let g of r){let _=ds(g,t.o,t.d);_&&yl(g,_.u,_.s)&&(!l||_.t<l.t)&&(l={face:g,..._})}if(!l)return;let d=l.face,c=.05,u=g=>F(Math.round(g/c)*c),p=un(d,{...o,face:d.key,u:u(l.u-e.du),v:u(l.s-e.ds),tilt:d.flat?o.tilt??15:o.tilt});e.moved=!0,this.change(g=>{var m,v;if(e.win){let y=(m=g.settings.roof.windows)==null?void 0:m.find(w=>w.id===e.id);y&&Object.assign(y,{face:d.key,...p});return}let _=(v=g.settings.roof.solar)==null?void 0:v.find(y=>y.id===e.id);_&&Object.assign(_,{face:d.key,...p},d.flat&&_.tilt==null?{tilt:15}:{})},e.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return b`<div class="fp3d-editor-3d">
      ${this.houseTool?$:b`<div class="fp3d-seg fp3d-3d-walls">
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
        .furnishTypes=${this._tool==="energy"?fe:this._tool==="roof"?[]:null}
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
    </div>`}setWall3d(t){this._wall3d=t;try{localStorage.setItem("neonplan3d.walls3d",t)}catch{}}updated(){var e,n;for(let i of this.renderRoot.querySelectorAll("select option[selected]"))i.selected||(i.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>{var i;return(i=this.renderRoot.querySelector("fp3d-view3d"))==null?void 0:i.resetView()},250));let t=(e=this.floor)==null?void 0:e.background;if(t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id),(n=this.furnitureItem)!=null&&n.pictures)for(let i of this.storedPictures())!this._images[i]&&!this.loadingImages.has(i)&&this.loadImage(i)}get floor(){var t;return(t=this._doc)==null?void 0:t.floors.find(e=>e.id===this._floorId)}get room(){var t;return(t=this.floor)==null?void 0:t.rooms.find(e=>e.id===this._roomId)}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>Nl&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),o=i.floors.find(s=>s.id===this._floorId);!o&&this._floorId||(t(i,o),this.setDoc(i,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){var e,n;this._doc=t,t.floors.some(i=>i.id===this._floorId)||(this._floorId=((e=t.floors[0])==null?void 0:e.id)??null),(n=this.floor)!=null&&n.rooms.some(i=>i.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:o}=this._view;return[(t-i)/n,(e-o)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){var r,l;let t=((r=this.floor)==null?void 0:r.rooms.flatMap(d=>d.points))??[];if(this._tool==="outdoor"||this._tool==="pool")for(let d of((l=this.floor)==null?void 0:l.outdoor)??[])t.push(...d.points);if(this._tool==="roof")for(let d of this._doc.settings.roof.sections??[])t.push([d.x0,d.z0],[d.x1,d.z1]);let e=t.length?At(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=e.x1-e.x0+2*n,o=e.z1-e.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:s,ox:this._size.w/2-(e.x0+e.x1)/2*s,oy:this._size.h/2-(e.z0+e.z1)/2*s},this.fittedView=this._view}showPoint(t,e){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-t*n,oy:this._size.h/2-e*n}}zoomAt(t,e,n){let{scale:i,ox:o,oy:s}=this._view,r=Math.max(8,Math.min(600,i*t)),l=r/i;this._view={scale:r,ox:e-(e-o)*l,oy:n-(n-s)*l}}snap(t,e,n=!1){var f;if(this._guides={},n)return t;let i=Ni/this._view.scale,o=((f=this.floor)==null?void 0:f.rooms)??[],s=[];for(let g of o)g.points.forEach((_,m)=>{e&&g.id===e.roomId&&(e.index===void 0||e.index===m)||s.push(_)});let r=null,l=i;for(let g of s){let _=Math.hypot(g[0]-t[0],g[1]-t[1]);_<l&&(l=_,r=g)}if(r)return this._guides={point:r},[r[0],r[1]];for(let g of o)if(!(e&&g.id===e.roomId))for(let _=0;_<g.points.length;_++){let m=g.points[_],v=g.points[(_+1)%g.points.length],y=v[0]-m[0],w=v[1]-m[1],P=y*y+w*w;if(P<1e-9)continue;let z=((t[0]-m[0])*y+(t[1]-m[1])*w)/P;if(z<=0||z>=1)continue;let E=[m[0]+z*y,m[1]+z*w],S=Math.hypot(E[0]-t[0],E[1]-t[1]),x=this._doc.settings.grid;Math.abs(w)<1e-9&&(E[0]=Math.min(Math.max(Math.round(E[0]/x)*x,Math.min(m[0],v[0])),Math.max(m[0],v[0]))),Math.abs(y)<1e-9&&(E[1]=Math.min(Math.max(Math.round(E[1]/x)*x,Math.min(m[1],v[1])),Math.max(m[1],v[1]))),S<l&&(l=S,r=E)}if(r)return this._guides={point:r},[F(r[0]),F(r[1])];let d=this._doc.settings.grid,c=[F(Math.round(t[0]/d)*d),F(Math.round(t[1]/d)*d)],u=i,p=i,h={};for(let g of s)Math.abs(g[0]-t[0])<u&&(u=Math.abs(g[0]-t[0]),c[0]=g[0],h.x=g[0]),Math.abs(g[1]-t[1])<p&&(p=Math.abs(g[1]-t[1]),c[1]=g[1],h.z=g[1]);return this._guides=h,c}onPointerDown(t){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let e=this.localPoint(t),n=t.target;this.pressStart=e,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,e))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"||e.kind==="aim"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="furnset"?n=["furniture",e.ids.find(i=>this.isFixedItem("furniture",i))??e.ids[0]]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){var P,z,E,S,x,k,M,I,A,j,O,L,D,W,tt,Q,X,G,ot,q,ht,zt,Zt;t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&Wl.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){t.button===2&&(this.rightPress={at:n,target:t.target,moved:!1}),this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=t.target;if(this._wallPick){this.pickWall(i);return}if(this._bgLevel&&this.isAdmin&&((P=this.floor)!=null&&P.background)){let B=[...this._bgLevel,i];B.length<2?this._bgLevel=B:this.applyBgLevel(B[0],B[1]);return}if(this.bgHandles()&&this.floor.background&&o.closest("[data-bg-rotate]")){let B=this.floor.background,ut=this._images[B.image_id],J=B.width*((ut==null?void 0:ut.aspect)??1),It=[B.x+B.width/2,B.z+J/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-It[1],i[0]-It[0]),rot:B.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&((z=this.floor)!=null&&z.background)){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let B=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:B.x,bz:B.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&((E=this.floor)!=null&&E.background)){let B=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:B.x,bz:B.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let B=this.snap(i,void 0,t.altKey);this.drag={kind:"freewall",start:B,end:B};return}if(this._tool==="pool"&&this.poolDown(t,o,i,n))return;if(this._tool==="roof"||this._tool==="energy"){let B=(S=o.closest("[data-roof-corner]"))==null?void 0:S.getAttribute("data-roof-corner"),ut=(x=o.closest("[data-roof-vertex]"))==null?void 0:x.getAttribute("data-roof-vertex"),J=(k=o.closest("[data-roof]"))==null?void 0:k.getAttribute("data-roof"),It=this._tool==="energy"?(M=o.closest("[data-energy-device]"))==null?void 0:M.getAttribute("data-energy-device"):null;if(It){this._solarId=null,this.selectItem("furniture",It),this.drag=this.isAdmin?{kind:"furniture",id:It,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&o.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let V=(I=o.closest("[data-cable-pt]"))==null?void 0:I.getAttribute("data-cable-pt"),N=Z=>{var et,rt;return!!((rt=(et=this._doc.settings.roof.cables)==null?void 0:et.find(pt=>pt.id===Z))!=null&&rt.locked)};if(V&&this.isAdmin&&!N(V.slice(0,V.lastIndexOf(":")))){let Z=V.lastIndexOf(":"),et=V.slice(0,Z),rt=Number(V.slice(Z+1));if(this.doubleTap(t,`cable:${V}`)){this.change(pt=>{var jt;let ct=(jt=pt.settings.roof.cables)==null?void 0:jt.find(Lt=>Lt.id===et);ct&&ct.points.length>1&&ct.points.splice(rt,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:et,index:rt,base:this._doc,moved:!1};return}let nt=(A=o.closest("[data-cable-line]"))==null?void 0:A.getAttribute("data-cable-line");if(nt&&this.isAdmin&&!N(nt)){let Z=Number(((j=o.closest("[data-cable-line]"))==null?void 0:j.getAttribute("data-cable-seg"))??0),et=this._doc;this.change(rt=>{var ct;let pt=(ct=rt.settings.roof.cables)==null?void 0:ct.find(jt=>jt.id===nt);pt&&pt.points.splice(Z,0,[F(i[0]),F(i[1])])}),this.drag={kind:"cablept",id:nt,index:Z,base:et,moved:!0};return}let K=(O=o.closest("[data-cable]"))==null?void 0:O.getAttribute("data-cable");if(K){if(this._cableId=K,this.isAdmin&&this._floorId&&!((L=this._doc.settings.roof.cables)!=null&&L.some(Z=>Z.id===K))){let Z=this._doc;this.layCable(K);let et=(D=this._doc.settings.roof.cables)==null?void 0:D.find(pt=>pt.id===K),rt=this.cableSegments().filter(pt=>pt.key===K);if(et&&rt.length){let pt=[[rt[0].a[0],rt[0].a[2]],...et.points,[rt[rt.length-1].b[0],rt[rt.length-1].b[2]]],ct=0,jt=1/0;for(let Lt=0;Lt+1<pt.length;Lt++){let kt=Fd(i,pt[Lt],pt[Lt+1]);kt<jt&&(jt=kt,ct=Lt)}this.change(Lt=>{var Ht;let kt=(Ht=Lt.settings.roof.cables)==null?void 0:Ht.find($e=>$e.id===K);kt&&kt.points.splice(ct,0,[F(i[0]),F(i[1])])}),this.drag={kind:"cablept",id:K,index:ct,base:Z,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let Ft=this._tool==="energy"?(W=o.closest("[data-solar]"))==null?void 0:W.getAttribute("data-solar"):null,R=this._tool==="energy"?(tt=o.closest("[data-solar-turn]"))==null?void 0:tt.getAttribute("data-solar-turn"):null;if(R&&this.isAdmin){this.drag={kind:"solarturn",id:R,base:this._doc,moved:!1};return}if(Ft){let V=(Q=o.closest("[data-cell]"))==null?void 0:Q.getAttribute("data-cell");if(this._solarPick&&Ft===this._solarId&&V&&this.isAdmin){this.toggleSolarCell(V),this.drag={kind:"pan",last:n};return}Ft!==this._solarId&&(this._solarPick=!1),this._solarId=Ft,this._roofId=null;let N=(X=this._doc.settings.roof.solar)==null?void 0:X.find(et=>et.id===Ft),nt=N?Dt(this._doc,N)??void 0:void 0,K=nt?this.faceHit(nt,i):null,Z=N&&K?{du:K.u-N.u,ds:Number.isNaN(K.s)?0:K.s-N.v}:null;this.drag=this.isAdmin&&!(N!=null&&N.locked)?{kind:"solarmove",id:Ft,start:i,startScreen:n,base:this._doc,moved:!1,grab:Z}:{kind:"pan",last:n};return}let T=this._tool==="roof"?(G=o.closest("[data-roofwin]"))==null?void 0:G.getAttribute("data-roofwin"):null;if(T){this._roofWinId=T,this._roofId=null;let V=(ot=this._doc.settings.roof.windows)==null?void 0:ot.find(Z=>Z.id===T),N=V?vt(this._doc).find(Z=>Z.key===V.face):void 0,nt=N?Fi(N,i):null,K=V&&nt?{du:nt.u-V.u,ds:nt.s-V.v}:null;this.drag=this.isAdmin&&!(V!=null&&V.locked)?{kind:"solarmove",id:T,start:i,startScreen:n,base:this._doc,moved:!1,grab:K,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let H=this._tool==="energy"?(q=o.closest(".fp3d-energy-item"))==null?void 0:q.getAttribute("data-furniture"):null;if(H){this._solarId=null,this.selectItem("furniture",H),this.drag=this.isAdmin?{kind:"furniture",id:H,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(ut&&this.isAdmin){let[V,N]=ut.split(":");this.drag={kind:"roofvertex",id:V,index:Number(N),base:this._doc,moved:!1}}else if(B&&this.isAdmin){let[V,N,nt]=B.split(":");this.drag={kind:"roofcorner",id:V,corner:[N==="1"?1:0,nt==="1"?1:0],base:this._doc,moved:!1}}else if(J){let V=this.roofFixed((ht=this._doc.settings.roof.sections)==null?void 0:ht.find(N=>N.id===J));V&&this._roofId===J&&(this._fixedHint=!0),this._roofId=J,this.drag=this.isAdmin&&!V?{kind:"roofmove",id:J,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let V=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:V,end:V,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this._outdoorFree||this._tool==="hole"){let B=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:B,end:B,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this.isAdmin&&(this._tool==="select"||this._tool==="furniture")&&(t.shiftKey||this._multiMode)){let B=o.closest("[data-furniture]");B?(this.toggleMulti(B.getAttribute("data-furniture")),this.drag=null):this.drag={kind:"marquee",start:i,end:i,add:!0};return}let r=o.closest("[data-device]");if(r&&this.isAdmin){this.drag={kind:"device",entityId:r.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let l=o.closest("[data-opening]");if(l){let B=l.getAttribute("data-opening");this.selectItem("opening",B),this.drag=this.isAdmin?{kind:"opening",id:B,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let d=o.closest("[data-resize]");if(d&&this.isAdmin){let[B,ut,J]=d.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:B,corner:[ut==="1"?1:-1,J==="1"?1:-1],base:this._doc,moved:!1};return}let c=o.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let u=o.closest("[data-aim]");if(u&&this.isAdmin){this.drag={kind:"aim",entityId:u.getAttribute("data-aim"),base:this._doc,moved:!1};return}let p=o.closest("[data-furniture]");if(p&&!o.closest("[data-vertex], [data-mid]")){let B=p.getAttribute("data-furniture"),ut=Date.now(),J=((zt=this.lastFurnTap)==null?void 0:zt.id)===B&&ut-this.lastFurnTap.t<400;this.lastFurnTap={id:B,t:ut};let It=this.floor.furniture.find(R=>R.id===B);J&&(It!=null&&It.group)?(this.selectItem("furniture",B),this._single=!0):(!this.selection().includes(B)||this._single)&&this.selectItem("furniture",B);let Ft=this.selection();this.drag=this.isAdmin?Ft.length>1?{kind:"furnset",ids:Ft,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"furniture",id:B,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=o.closest("[data-vertex]"),f=o.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this._vertex=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let B=Number(f.getAttribute("data-mid")),ut=this.room.points,J=ut[B],It=ut[(B+1)%ut.length],Ft=[F((J[0]+It[0])/2),F((J[1]+It[1])/2)],R=this._doc,T=this.room.id;this.change((H,V)=>{let N=V.rooms.find(K=>K.id===T);N.points.splice(B+1,0,Ft),N.wall_heights&&N.wall_heights.splice(B+1,0,N.wall_heights[B]??null),N.wall_thickness&&N.wall_thickness.splice(B+1,0,N.wall_thickness[B]??null);let nt=Math.hypot(Ft[0]-J[0],Ft[1]-J[1]);for(let K of V.openings)K.room_id!==T||K.wall||(K.edge>B?K.edge+=1:K.edge===B&&K.offset>nt&&(K.edge=B+1,K.offset=F(K.offset-nt)))},R,!1),this._vertex=B+1,this.drag={kind:"vertex",roomId:T,index:B+1,base:R,moved:!0};return}let g=o.closest("[data-wall-end]");if(g&&this.isAdmin){let[B,ut]=g.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:B,end:ut,start:i,startScreen:n,base:this._doc,moved:!1};return}let _=o.closest("[data-free-wall]");if(_){let B=_.getAttribute("data-free-wall");this.selectItem("wall",B),this.drag=this.isAdmin?{kind:"wallmove",id:B,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let m=o.closest("[data-out-box]");if(m&&this.isAdmin){let[B,ut]=m.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:B,corner:Number(ut),base:this._doc,moved:!1};return}let v=o.closest("[data-out-vertex]");if(v&&this.isAdmin){let[B,ut]=v.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:B,index:Number(ut),base:this._doc,moved:!1};return}let y=o.closest("[data-outdoor]");if(y&&!o.closest("[data-room]")&&!this.roomAt(i)){let B=y.getAttribute("data-outdoor");this.selectItem("outdoor",B),this.drag=this.isAdmin?{kind:"outdoor",id:B,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let w=((Zt=o.closest("[data-room]"))==null?void 0:Zt.getAttribute("data-room"))??this.roomAt(i);if(w){w!==this._roomId&&(this._vertex=null),this.selectItem("room",w),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:w,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){var o,s,r,l,d,c,u,p,h,f,g,_,m,v,y,w,P,z,E,S;if(this.rightPress&&!this.rightPress.moved){let x=this.localPoint(t);Math.hypot(x[0]-this.rightPress.at[0],x[1]-this.rightPress.at[1])>5&&(this.rightPress.moved=!0)}if(this.pressStart){let x=this.localPoint(t);Math.hypot(x[0]-this.pressStart[0],x[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&((o=this.drag)==null?void 0:o.kind)==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let x=this.pinchState();x&&(this.zoomAt(x.dist/Math.max(1,this.pinch.dist),...x.mid),this._view={...this._view,ox:this._view.ox+x.mid[0]-this.pinch.mid[0],oy:this._view.oy+x.mid[1]-this.pinch.mid[1]},this.pinch=x);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let x=this.snap(n,void 0,t.altKey);t.shiftKey&&(x=Math.abs(x[0]-i.start[0])>Math.abs(x[1]-i.start[1])?[x[0],i.start[1]]:[i.start[0],x[1]]),i.end=x,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let x=(((s=i.base.floors.find(M=>M.id===this._floorId))==null?void 0:s.walls)??[]).find(M=>M.id===i.id);if(!x)return;let k;if(i.end){let M=this.snap(n,void 0,t.altKey);k=i.end==="a"?{a:M,b:x.b}:{a:x.a,b:M}}else{let M=t.altKey?.01:this._doc.settings.grid,I=Math.round((n[0]-i.start[0])/M)*M,A=Math.round((n[1]-i.start[1])/M)*M;k={a:[F(x.a[0]+I),F(x.a[1]+A)],b:[F(x.b[0]+I),F(x.b[1]+A)]}}this.change((M,I)=>Object.assign((I.walls??[]).find(A=>A.id===i.id),k),i.base,!1);break}case"vertex":{let x=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((k,M)=>{M.rooms.find(I=>I.id===i.roomId).points[i.index]=x},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let x=(r=i.base.floors.find(A=>A.id===this._floorId))==null?void 0:r.rooms.find(A=>A.id===i.roomId);if(!x)return;let k=this.roomDelta(x,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),M=i.base.floors.find(A=>A.id===this._floorId),I=new Set(M.placements.filter(A=>Y([A.x,A.z],x.points)).map(A=>A.entity_id));this.change((A,j)=>{let O=j.rooms.find(L=>L.id===i.roomId);O.points=x.points.map(([L,D])=>[F(L+k[0]),F(D+k[1])]),j.placements=M.placements.map(L=>I.has(L.entity_id)?{...L,x:F(L.x+k[0]),z:F(L.z+k[1])}:L)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let x=t.altKey?.01:this._doc.settings.grid,k=F(Math.round((n[0]-i.start[0])/x)*x),M=F(Math.round((n[1]-i.start[1])/x)*x),I=(l=i.base.settings.roof.sections)==null?void 0:l.find(A=>A.id===i.id);if(!I)return;this.change(A=>{var O;let j=(O=A.settings.roof.sections)==null?void 0:O.find(L=>L.id===i.id);j&&(Object.assign(j,{x0:F(I.x0+k),x1:F(I.x1+k),z0:F(I.z0+M),z1:F(I.z1+M)}),I.points&&(j.points=I.points.map(([L,D])=>[F(L+k),F(D+M)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let x=(d=i.base.settings.roof.solar)==null?void 0:d.find(L=>L.id===i.id),k=x?Dt(i.base,x):null;if(!x||!k)return;let[M,I]=Wn(k,x),A=Math.atan2(n[0]-M,-(n[1]-I))*180/Math.PI,j=t.altKey?1:15;A=Math.round(A/j)*j;let O=Hn(i.base,x,A);this.change(L=>{var W;let D=(W=L.settings.roof.solar)==null?void 0:W.find(tt=>tt.id===i.id);D&&Object.assign(D,O)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let x=i.win?(c=i.base.settings.roof.windows)==null?void 0:c.find(Q=>Q.id===i.id):void 0,k=i.win?x?pn(x):void 0:(u=i.base.settings.roof.solar)==null?void 0:u.find(Q=>Q.id===i.id),M=i.win?vt(i.base):[...vt(i.base),...this._floorId?le(i.base,this._floorId):[]],I=k?Dt(i.base,k,M):null;if(!k||!I)return;let A=t.altKey?.01:.05,j=Q=>F(Math.round(Q/A)*A),O=I.unbounded?null:ml(M,n),L=I,D,W;if(O&&i.grab)L=O.face,D=j(O.u-i.grab.du),W=Number.isNaN(O.s)?O.face.key===k.face?k.v:Math.max(0,O.face.ls-1.5):j(O.s-i.grab.ds);else{let Q=n[0]-i.start[0],X=n[1]-i.start[1],G=[I.es[0],I.es[2]],ot=G[0]*G[0]+G[1]*G[1]||1;D=j(k.u+Q*I.eu[0]+X*I.eu[2]),W=j(k.v+(Q*G[0]+X*G[1])/ot)}let tt=un(L,{...k,face:L.key,u:D,v:W,tilt:L.flat?k.tilt??15:k.tilt});this.change(Q=>{var G,ot;if(i.win){let q=(G=Q.settings.roof.windows)==null?void 0:G.find(ht=>ht.id===i.id);q&&Object.assign(q,{face:L.key,...tt});return}let X=(ot=Q.settings.roof.solar)==null?void 0:ot.find(q=>q.id===i.id);X&&Object.assign(X,{face:L.key,...tt},L.flat&&X.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outbox":{i.moved=!0;let x=this.snap(n,void 0,t.altKey),k=(p=i.base.floors.find(X=>X.id===this._floorId))==null?void 0:p.outdoor.find(X=>X.id===i.id);if(!(k!=null&&k.pool_shape))return;let M=At(k.points),A=[[M.x0,M.z0],[M.x1,M.z0],[M.x1,M.z1],[M.x0,M.z1]][(i.corner+2)%4],j=x[0]-A[0],O=x[1]-A[1];if(k.pool_shape==="round"){let X=Math.max(Math.abs(j),Math.abs(O),.5);j=Math.sign(j||1)*X,O=Math.sign(O||1)*X}else j=Math.sign(j||1)*Math.max(Math.abs(j),.5),O=Math.sign(O||1)*Math.max(Math.abs(O),.5);let L=Math.min(A[0],A[0]+j),D=Math.max(A[0],A[0]+j),W=Math.min(A[1],A[1]+O),tt=Math.max(A[1],A[1]+O),Q=k.pool_shape;this.change((X,G)=>{let ot=G.outdoor.find(q=>q.id===i.id);ot&&(ot.points=li(Q,F(L),F(W),F(D),F(tt)))},i.base,!1);break}case"pipept":{i.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change((k,M)=>{var A,j,O;let I=(O=(j=(A=M.outdoor.find(L=>L.id===i.pool))==null?void 0:A.pool)==null?void 0:j.pipes)==null?void 0:O.find(L=>L.id===i.pipe);I&&(I.points[i.index]=[F(x[0]),F(x[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change((k,M)=>{var L,D;let I=M.outdoor.find(W=>W.id===i.pool),A=(D=(L=I==null?void 0:I.pool)==null?void 0:L.ports)==null?void 0:D.find(W=>W.id===i.id);if(!I||!A)return;let[j,O]=A.kind==="skimmer"||A.kind==="inlet"?Ai(I.points,x):x;A.x=F(j),A.z=F(O)},i.base,!1);break}case"pooljoint":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let x=(g=(f=(h=i.base.floors.flatMap(M=>M.outdoor).find(M=>M.id===i.pool))==null?void 0:h.pool)==null?void 0:f.joints)==null?void 0:g.find(M=>M.id===i.id);if(!x)break;let k=this.snap([x.x+n[0]-i.start[0],x.z+n[1]-i.start[1]],void 0,t.altKey);if(x.kind==="wall"){let M=[-(x.nz??0),x.nx??0],I=(k[0]-x.x)*M[0]+(k[1]-x.z)*M[1];k=[x.x+M[0]*I,x.z+M[1]*I]}this.change(M=>{var A,j,O;let I=(O=(j=(A=M.floors.flatMap(L=>L.outdoor).find(L=>L.id===i.pool))==null?void 0:A.pool)==null?void 0:j.joints)==null?void 0:O.find(L=>L.id===i.id);I&&([I.x,I.z]=[F(k[0]),F(k[1])])},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let x=i.base.floors.flatMap(M=>M.furniture).find(M=>M.id===i.id);if(!x)break;let k=this.snap([x.x+n[0]-i.start[0],x.z+n[1]-i.start[1]],void 0,t.altKey);this.change(M=>{let I=M.floors.flatMap(A=>A.furniture).find(A=>A.id===i.id);I&&([I.x,I.z]=[F(k[0]),F(k[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let x=this.snap(n,void 0,t.altKey),k=(_=i.base.floors.find(I=>I.id===this._floorId))==null?void 0:_.outdoor.find(I=>I.id===i.id);if(!k)return;let M=mi(k.points);this.change((I,A)=>{let j=A.outdoor.find(W=>W.id===i.id);if(!j)return;let O=k.points.map(W=>[...W]),L=i.index,D=k.points[L];O[L]=[F(x[0]),F(x[1])],M&&k.points.forEach((W,tt)=>{tt!==L&&(Math.abs(W[0]-D[0])<1e-6&&(O[tt][0]=F(x[0])),Math.abs(W[1]-D[1])<1e-6&&(O[tt][1]=F(x[1])))}),j.points=O},i.base,!1);break}case"cablept":{i.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(k=>{var I;let M=(I=k.settings.roof.cables)==null?void 0:I.find(A=>A.id===i.id);M&&M.points[i.index]&&(M.points[i.index]=[F(x[0]),F(x[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(k=>k.settings.roof.hologram={...k.settings.roof.hologram??oi,place:"free",x:F(x[0]),z:F(x[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let x=n[0]-i.start[0],k=n[1]-i.start[1];this.change((M,I)=>{I.background&&(I.background.x=F(i.bx+x),I.background.z=F(i.bz+k))},i.base,!1);break}case"bgrotate":{i.moved=!0;let x=(m=this.floor)==null?void 0:m.background,k=x?this._images[x.image_id]:void 0;if(!x||!k)break;let M=x.width*k.aspect,I=[x.x+x.width/2,x.z+M/2],A=Math.atan2(n[1]-I[1],n[0]-I[0]),j=i.rot+(A-i.start)*180/Math.PI;j=t.shiftKey?Math.round(j/15)*15:Math.round(j*10)/10,j=((j+180)%360+360)%360-180,this.change((O,L)=>{L.background&&(L.background.rotation=j)},i.base,!1);break}case"bgscale":{i.moved=!0;let x=(v=this.floor)==null?void 0:v.background,k=x?this._images[x.image_id]:void 0;if(!x||!k)break;let[M]=this.bgLocal(x,n,k.aspect),I=Math.max(.5,F(M));this.change((A,j)=>{j.background&&(j.background.width=I)},i.base,!1);break}case"roofvertex":{i.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(k=>{var I;let M=(I=k.settings.roof.sections)==null?void 0:I.find(A=>A.id===i.id);!(M!=null&&M.points)||i.index>=M.points.length||(M.points[i.index]=[F(x[0]),F(x[1])],Object.assign(M,Xo(M.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let x=this.snap(n,void 0,t.altKey);this.change(k=>{var I;let M=(I=k.settings.roof.sections)==null?void 0:I.find(A=>A.id===i.id);M&&(i.corner[0]?M.x1=F(x[0]):M.x0=F(x[0]),i.corner[1]?M.z1=F(x[1]):M.z0=F(x[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let x=i.base.floors.find(A=>A.id===this._floorId),k=x==null?void 0:x.openings.find(A=>A.id===i.id),M=k&&x?nn(k,x.rooms,x.walls??[]):null;if(!k||!M)return;let I=this.offsetOnEdge(M.room,M.edge,n,k.width,t.altKey);this.change((A,j)=>Object.assign(j.openings.find(O=>O.id===i.id),{offset:I}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let x=(y=i.base.floors.find(O=>O.id===this._floorId))==null?void 0:y.furniture.find(O=>O.id===i.id);if(!x)return;let k=t.altKey?.01:this._doc.settings.grid,M=F(Math.round((x.x+n[0]-i.start[0])/k)*k),I=F(Math.round((x.z+n[1]-i.start[1])/k)*k),A=x.rotation,j=t.altKey?null:this.snapToWall({...x,x:M,z:I});j&&({x:M,z:I,rotation:A}=j),this.change((O,L)=>Object.assign(L.furniture.find(D=>D.id===i.id),{x:M,z:I,rotation:A}),i.base,!1);break}case"furnset":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let x=t.altKey?.01:this._doc.settings.grid,k=F(Math.round((n[0]-i.start[0])/x)*x),M=F(Math.round((n[1]-i.start[1])/x)*x),I=new Set(i.ids);this.change((A,j)=>{for(let O of j.furniture)I.has(O.id)&&Object.assign(O,{x:F(O.x+k),z:F(O.z+M)})},i.base,!1);break}case"marquee":i.end=n,this.requestUpdate();break;case"outdoor":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let x=(w=i.base.floors.find(A=>A.id===this._floorId))==null?void 0:w.outdoor.find(A=>A.id===i.id);if(!x)return;let k=t.altKey?.01:this._doc.settings.grid,M=Math.round((n[0]-i.start[0])/k)*k,I=Math.round((n[1]-i.start[1])/k)*k;this.change((A,j)=>{var L,D;let O=j.outdoor.find(W=>W.id===i.id);O.points=x.points.map(([W,tt])=>[F(W+M),F(tt+I)]),(L=O.pool)!=null&&L.ports&&((D=x.pool)!=null&&D.ports)&&(O.pool.ports=x.pool.ports.map(W=>({...W,x:F(W.x+M),z:F(W.z+I)})))},i.base,!1);break}case"resize":{i.moved=!0;let x=(P=i.base.floors.find(M=>M.id===this._floorId))==null?void 0:P.furniture.find(M=>M.id===i.id);if(!x)return;let k=Sr(x,i.corner,n,t.altKey?.01:this._doc.settings.grid);this.change((M,I)=>Object.assign(I.furniture.find(A=>A.id===i.id),k),i.base,!1);break}case"rotate":{i.moved=!0;let x=(z=i.base.floors.find(I=>I.id===this._floorId))==null?void 0:z.furniture.find(I=>I.id===i.id);if(!x)return;let k=Math.atan2(-(n[0]-x.x),n[1]-x.z)*180/Math.PI,M=t.altKey?1:15;k=(Math.round(k/M)*M%360+360)%360,this.change((I,A)=>Object.assign(A.furniture.find(j=>j.id===i.id),{rotation:k}),i.base,!1);break}case"aim":{i.moved=!0;let x=(E=i.base.floors.find(A=>A.id===this._floorId))==null?void 0:E.placements.find(A=>A.entity_id===i.entityId);if(!x)return;let k=Math.atan2(-(n[0]-x.x),n[1]-x.z)*180/Math.PI,M=t.altKey?1:5;k=(Math.round(k/M)*M%360+360)%360;let I=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-x.x,n[1]-x.z)*10)/10));this.change((A,j)=>Object.assign(j.placements.find(O=>O.entity_id===i.entityId),{rotation:k,reach:I}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let x=(S=i.base.floors.find(A=>A.id===this._floorId))==null?void 0:S.placements.find(A=>A.entity_id===i.entityId);if(!x)return;let k=t.altKey?.01:this._doc.settings.grid,M=F(Math.round((x.x+n[0]-i.start[0])/k)*k),I=F(Math.round((x.z+n[1]-i.start[1])/k)*k);this.change((A,j)=>Object.assign(j.placements.find(O=>O.entity_id===i.entityId),{x:M,z:I}),i.base,!1);break}}}onPointerUp(t){var o,s;let e=this.rightPress;if(this.rightPress=null,e&&t.button===2&&(this.rightUp=performance.now(),!e.moved&&t.type!=="pointercancel"&&(this._tool==="select"||this._tool==="furniture")&&this.openContext(e.target,e.at)),clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||t.type==="pointercancel"){n&&Wl.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let i=this.localPoint(t);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[r,l]=n.start,[d,c]=n.end;if(Math.abs(d-r)>=.2&&Math.abs(c-l)>=.2){let u=[Math.min(r,d),Math.min(l,c)],p=[Math.max(r,d),Math.max(l,c)],h=[u,[p[0],u[1]],p,[u[0],p[1]]];n.outdoor?this.addOutdoor(h):n.hole?this.addHole(u,p):n.roof?this.addRoofSection(u,p):this.addRoom(h)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...i),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...i),void 0,t.altKey),i);break;case"marquee":{let[r,l]=[Math.min(n.start[0],n.end[0]),Math.max(n.start[0],n.end[0])],[d,c]=[Math.min(n.start[1],n.end[1]),Math.max(n.start[1],n.end[1])],u=(((o=this.floor)==null?void 0:o.furniture)??[]).filter(p=>p.x>=r&&p.x<=l&&p.z>=d&&p.z<=c).map(p=>p.id);u.length&&this.setMulti([...new Set([...this.selection(),...this.withGroups(u)])]);break}case"opening":case"furniture":case"furnset":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":n.moved?this.pushHistory(n.base):(n.kind==="poolport"||n.kind==="pooljoint")&&this.openCard(n.pool,`${n.kind==="poolport"?"port":"joint"}:${n.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"pooldev":{n.moved?this.pushHistory(n.base):((s=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.id===n.id))==null?void 0:s.type)==="pool_valve"?this.togglePoolValve(n.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${n.id}`);break}case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>Nl&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){var l;if(n)return e;let i=this._doc.settings.grid,o=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],r=Ni/this._view.scale;this._guides={};for(let d of((l=this.floor)==null?void 0:l.rooms)??[])if(d.id!==t.id)for(let c of d.points)for(let u of t.points){let p=Math.hypot(u[0]+e[0]-c[0],u[1]+e[1]-c[1]);p<r&&(r=p,o=[c[0]-u[0],c[1]-u[1]],this._guides={point:c})}return o}roomAt(t){var i,o;return((o=(((i=this.floor)==null?void 0:i.rooms)??[]).filter(s=>Y(t,s.points)).sort((s,r)=>Ct(s.points)-Ct(r.points))[0])==null?void 0:o.id)??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[o,s]=this.toScreen(n[0]);if(Math.hypot(o-e[0],s-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Math.abs(Ct(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=Xe(e,this._measureLen,t),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;e>.1&&n>.1&&(this.addRoom([t,Xe(t,e,"right"),Xe(Xe(t,e,"right"),n,"down"),Xe(t,n,"down")]),this._draft=[])}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],i=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=r=>Kt(this.hass,r,2);return b`<section>
      <h3>${this.t("measure")}</h3>
      ${e?b`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(e[0]),z:this.m(e[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${In(this.t("measure_length"),this.unit)}
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
                ${o.map(([r,l])=>b`<button class="fp3d-btn fp3d-arrow-${r}" title=${this.t(`dir_${r}`)} @click=${()=>this.measureStep(r)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?b`<ol class="fp3d-measure-list">
                  ${t.slice(1).map((r,l)=>b`<li>${this.m(Math.hypot(r[0]-t[l][0],r[1]-t[l][1]))}</li>`)}
                </ol>`:$}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?b`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:$}`:b`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],r=>this._rectSize=[Math.max(.1,r),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],r=>this._rectSize=[this._rectSize[0],Math.max(.1,r)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(t,e){if(!this.floor)return;let n={id:U("wall"),a:[F(t[0]),F(t[1])],b:[F(e[0]),F(e[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){var t;return this._wallId?(((t=this.floor)==null?void 0:t.walls)??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(t){let e=this._wallId;e&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===e),t))}deleteFreeWall(){let t=this._wallId;!t||!this.isAdmin||!this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return C`<g>${(t.walls??[]).map(e=>{let[n,i]=this.toScreen(e.a),[o,s]=this.toScreen(e.b),r=e.id===this._wallId;return C`<g data-free-wall=${e.id} class=${`fp3d-free-wall${r?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${o} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${s} />
      </g>
      ${r&&this.isAdmin&&!lo(e,!0,this._doc.settings)?C`<g class="fp3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`:$}`})}</g>`}renderFreeWallForm(t){var r;let e=this.isAdmin,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),i=l=>{let c=Math.max(.1,l)/(n||1);this.updateFreeWall({b:[F(t.a[0]+(t.b[0]-t.a[0])*c),F(t.a[1]+(t.b[1]-t.a[1])*c)]})},o=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],s=(l,d)=>{let c=d-o[l],u=p=>l===0?[F(p[0]+c),p[1]]:[p[0],F(p[1]+c)];this.updateFreeWall({a:u(t.a),b:u(t.b)})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),o[0],l=>s(0,l))} ${this.len(this.t("z"),o[1],l=>s(1,l))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,l=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,l))}),.01,.02)}
        ${this.len(this.t("wall_height"),t.height??((r=this.floor)==null?void 0:r.height)??2.5,l=>{var d;return this.updateFreeWall({height:l>=(((d=this.floor)==null?void 0:d.height)??2.5)-.005?null:Math.max(.05,l)})},.05,.05)}
      </div>
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:$}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:U("hole"),type:"stairwell",x:F((t[0]+e[0])/2),z:F((t[1]+e[1])/2),w:F(e[0]-t[0]),d:F(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}addOutdoor(t){if(!this.floor)return;let e=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:U("outdoor"),type:e,points:t.map(([o,s])=>[F(o),F(s)])},i=e==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(i==="round"||i==="oval"){let o=At(n.points);n.points=li(i,o.x0,o.z0,o.x1,o.z1),n.pool_shape=i}e==="pool"&&ft("pool")&&(n.pool={}),this.change((o,s)=>s.outdoor.push(n)),this.selectItem("outdoor",n.id)}get outdoorArea(){var t;return this._outdoorId?(t=this.floor)==null?void 0:t.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(o=>o.id===e),t))}deleteOutdoor(){var i,o,s;let t=this._outdoorId;if(!t||!this.isAdmin||!this.confirmFixedDelete("outdoor",t))return;let e=(i=this.floor)==null?void 0:i.outdoor.find(r=>r.id===t),n=((s=(o=e==null?void 0:e.pool)==null?void 0:o.pipes)==null?void 0:s.length)??0;(e==null?void 0:e.type)==="pool"&&n&&!confirm(this.t("pool_delete_confirm",{n}))||(this.change((r,l)=>l.outdoor=l.outdoor.filter(d=>d.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isAdmin)return;let e={...t,id:U("outdoor"),points:t.points.map(([n,i])=>[F(n+.5),F(i+.5)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t){if(!this.floor)return;let e=U("room"),n=this.floor.rooms.length+1;this.change((i,o)=>o.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([s,r])=>[F(s),F(r)]),floor_material:"wood"})),this._roomId=e,this._vertex=null}onKey=t=>{if(this.shiftHeld=t.shiftKey,t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;if(!(this._wallView&&!(n&&["z","y"].includes(t.key.toLowerCase())))){if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this._furnitureId?this.duplicateFurniture():this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&this._furnitureId&&this.selection().length>1)this.lockSelection(!this.selection().every(i=>this.isFixedItem("furniture",i)));else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.hasOwn(ql,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[o,s]=ql[t.key];this.nudge(o*i,s*i)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Backspace"&&this.drawingPoints)this._draft=this._draft.slice(0,-1);else if(t.key==="Enter"&&this.drawingPoints)this.closeDraft();else if(t.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}}};nudge(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix,o=this._furnitureId?this.selection():[];if(i&&this.isFixedItem(i.kind,i.id)||o.some(r=>this.isFixedItem("furniture",r)))return this._fixedHint=!0,!0;let s=r=>[F(r[0]+t),F(r[1]+e)];if(o.length>1){let r=new Set(o);return this.change((l,d)=>{for(let c of d.furniture)r.has(c.id)&&([c.x,c.z]=s([c.x,c.z]))}),!0}if(this._deviceId){let r=this._deviceId;if(!n.placements.some(l=>l.entity_id===r))return!1;this.change((l,d)=>{let c=d.placements.find(u=>u.entity_id===r);[c.x,c.z]=s([c.x,c.z])})}else if(this._furnitureId){let r=this._furnitureId;this.change((l,d)=>{let c=d.furniture.find(u=>u.id===r);c&&([c.x,c.z]=s([c.x,c.z]))})}else if(this._openingId){let r=this.opening,l=r?nn(r,n.rooms,n.walls??[]):null;if(!r||!l)return!1;let d=l.room.points[l.edge],c=l.room.points[(l.edge+1)%l.room.points.length],u=Math.hypot(c[0]-d[0],c[1]-d[1])||1,p=(t*(c[0]-d[0])+e*(c[1]-d[1]))/u;if(Math.abs(p)<1e-9)return!0;let h=Math.min(r.width,u)/2;this.updateOpening({offset:F(Math.min(u-h,Math.max(h,r.offset+p)))})}else if(this._wallId){let r=this._wallId;this.change((l,d)=>{let c=(d.walls??[]).find(u=>u.id===r);c&&([c.a,c.b]=[s(c.a),s(c.b)])})}else if(this._outdoorId){let r=this._outdoorId;this.change((l,d)=>{let c=d.outdoor.find(u=>u.id===r);c&&(c.points=c.points.map(s))})}else if(this._roomId){let r=this._roomId,l=this._vertex,d=n.rooms.find(u=>u.id===r);if(!d)return!1;let c=new Set(n.placements.filter(u=>Y([u.x,u.z],d.points)).map(u=>u.entity_id));this.change((u,p)=>{let h=p.rooms.find(f=>f.id===r);if(l!==null&&l<h.points.length){h.points[l]=s(h.points[l]);return}h.points=h.points.map(s);for(let f of p.placements)c.has(f.entity_id)&&([f.x,f.z]=s([f.x,f.z]))})}else return!1;return!0}get freeHaFloors(){var e;let t=new Set(this._doc.floors.map(n=>n.ha_floor));return Object.values(((e=this.hass)==null?void 0:e.floors)??{}).filter(n=>!t.has(n.floor_id)).sort((n,i)=>(n.level??99)-(i.level??99)||n.name.localeCompare(i.name))}unplacedAreas(t){var n;if(!t.ha_floor)return[];let e=new Set(this._doc.floors.flatMap(i=>i.rooms.map(o=>o.area_id)));return Object.values(((n=this.hass)==null?void 0:n.areas)??{}).filter(i=>i.floor_id===t.ha_floor&&!e.has(i.area_id)).sort((i,o)=>i.name.localeCompare(o.name))}addFloor(t=null){let e=this._doc.floors,n=U("floor"),i=(t==null?void 0:t.name)??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),o={...xr(n,i,kr(e,t==null?void 0:t.level)),ha_floor:(t==null?void 0:t.floor_id)??null},s=structuredClone(this._doc),r=s.floors.findIndex(l=>l.elevation>o.elevation);s.floors.splice(r<0?s.floors.length:r,0,o),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=Mr(t,e,()=>U("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(o=>o.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}deleteFloor(){var n;let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(i=>i.id!==t.id),this.setDoc(e),this._floorId=((n=e.floors[0])==null?void 0:n.id)??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||!this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let i=n.rooms.find(o=>o.id===t);n.rooms=n.rooms.filter(o=>o.id!==t),n.openings=n.openings.filter(o=>o.room_id!==t||o.wall),i&&(n.placements=n.placements.filter(o=>!Y([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=U("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([o,s])=>[F(o+.5),F(s+.5)])})),this._roomId=e}roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?$:b`<div class="fp3d-seg fp3d-dev-source">
      ${t.map(e=>b`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
    </div>`}get roofSection(){var t;return this._roofId?(t=this._doc.settings.roof.sections)==null?void 0:t.find(e=>e.id===this._roofId):void 0}useRoofSections(t=!1){if(!this.isAdmin)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=cl(n,()=>U("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isAdmin)return;let n=al(this._doc,t[0],t[1],e[0],e[1]),i=Math.min(...this._doc.floors.map(d=>d.elevation)),o=n===null,s=F(n??i+2.4),r=o?6:this._doc.settings.roof.pitch||35,l={id:U("roof"),x0:F(t[0]),z0:F(t[1]),x1:F(e[0]),z1:F(e[1]),shape:o?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:r,pitch_b:r,base:s,overhang:o?.15:null,...o?{open:!0}:{}};this.change(d=>{d.settings.roof.type="custom",d.settings.roof.sections=[...d.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let t=this.floor,e=this._roofId;if(!t||!e||!this.isAdmin)return;let n=el(t.rooms,t.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([o,s])=>[F(o),F(s)]);this.updateRoofSection({shape:"flat",points:i,...Xo(i)})}addDormer(t){let e=this.roofSection;if(!e||!this.isAdmin)return;let n=ol(e,t,U("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(t){let e=this._roofId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var o;let i=(o=n.settings.roof.sections)==null?void 0:o.find(s=>s.id===e);i&&Object.assign(i,t)}))}deleteRoofSection(){let t=this._roofId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:U("roof"),x0:F(t.x0+1),x1:F(t.x1+1),z0:F(t.z0+1),z1:F(t.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return C`<g class="fp3d-roof-layer">${e.map((n,i)=>{let o=n.id===this._roofId,s=ne(n),r=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=il(e,n),d=l?ne(sl(l,n)):s,c=(r??[d.at(d.u0,0),d.at(d.u1,0),d.at(d.u1,d.w),d.at(d.u0,d.w)]).map(m=>this.toScreen(m)),u=(m,v)=>{let[y,w]=this.toScreen(m),[P,z]=this.toScreen(v);return C`<line x1=${y} y1=${w} x2=${P} y2=${z} />`},p=n.shape==="flat"||n.shape==="parapet"?null:ts(n,{u0:0,u1:0,a:0,b:0}),h=p?C`${p.ridges.map(([m,v])=>u(s.at(m[0],m[1]),s.at(v[0],v[1])))}`:$,[f,g]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),_=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(zi(n),1)}`;return C`<g data-roof=${n.id} class=${`fp3d-roof-sec${o?" fp3d-roof-sel":""}`}>
          <polygon points=${c.map(m=>m.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${h}</g>
          <text x=${f} y=${g-14}>${_}</text>
        </g>
        ${o&&this.isAdmin&&!this.roofFixed(n)&&r?r.map((m,v)=>{let[y,w]=this.toScreen(m);return C`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${v}`}><circle cx=${y} cy=${w} r="16" class="fp3d-hit" /><circle cx=${y} cy=${w} r="6" /></g>`}):$}
        ${o&&this.isAdmin&&!this.roofFixed(n)&&!r?[[0,0],[1,0],[1,1],[0,1]].map(([m,v])=>{let[y,w]=this.toScreen([m?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),v?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return C`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${m}:${v}`}><circle cx=${y} cy=${w} r="16" class="fp3d-hit" /><circle cx=${y} cy=${w} r="6" /></g>`}):$}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:Fi(t,e)}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return $;let e=vt(this._doc);return C`<g class="fp3d-solar-layer">${t.map(n=>{let i=Dt(this._doc,n,e);if(!i||i.wall&&i.wall.floorId!==this._floorId)return $;let o=n.id===this._solarId,s=$;if(o&&i.unbounded&&this.isAdmin&&!n.locked){let[r,l]=Wn(i,n),d=(n.rotation??0)*Math.PI/180,c=.9+Math.max(...ve(i,n,!0).flatMap(g=>g.corners.map(_=>Math.hypot(_[0]-r,_[2]-l))))*.5,[u,p]=this.toScreen([r,l]),[h,f]=this.toScreen([r+Math.sin(d)*c,l-Math.cos(d)*c]);s=C`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${u} y1=${p} x2=${h} y2=${f} />
          <circle cx=${h} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${h} cy=${f} r="8" />
          <path d="M${h-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return C`<g data-solar=${n.id} class=${`fp3d-solar${o?" fp3d-solar-sel":""}${o&&this._solarPick?" fp3d-solar-pick":""}`}>${ve(i,n,o).map(r=>{let l=i.wall?Math.max(.3,...r.corners.map(c=>(c[0]-i.o[0])*i.n[0]+(c[2]-i.o[2])*i.n[2])):0,d=i.wall?[r.corners[0],r.corners[1]].flatMap((c,u)=>{let p=[c[0],c[2]],h=[c[0]+i.n[0]*l,c[2]+i.n[2]*l];return u===0?[p,h]:[h,p]}):r.corners.map(c=>[c[0],c[2]]);return C`<polygon data-cell=${r.cell} class=${r.skipped?"fp3d-solar-off":""} points=${d.map(c=>this.toScreen(c).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return $;let e=new Map(vt(this._doc).map(n=>[n.key,n]));return C`<g class="fp3d-roofwin-layer">${t.map(n=>{let i=e.get(n.face),o=i?vl(i,n):null;return o?C`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${o.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:$})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let t=vt(this._doc).filter(i=>!i.flat),e=Ti(t,this._doc.settings.north??0)??vt(this._doc)[0];if(!e)return;let n=cs(e,U("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isAdmin||this.change(n=>{var s;let i=(s=n.settings.roof.windows)==null?void 0:s.find(r=>r.id===e);if(!i)return;Object.assign(i,t);let o=vt(n).find(r=>r.key===i.face);o&&Object.assign(i,un(o,pn(i)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(vt(this._doc).map(n=>[n.key,n]));return b`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?b`<div class="fp3d-room-list">
            ${t.map((n,i)=>{let o=e.get(n.face);return b`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:$}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isAdmin,n=vt(this._doc),i=l=>this.updateRoofWindow(l),o=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),r=this.entityOptions(l=>$s(l)||Ot(l));return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${e?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:$}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let d=n.find(c=>c.key===l.target.value);d&&i({...cs(d,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt,window:t.window,name:t.name,float:t.float})}}>
              ${n.map(l=>b`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),t.w??.78,l=>i({w:Math.max(.3,Math.min(4,F(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),t.h??1.18,l=>i({h:Math.max(.3,Math.min(4,F(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),t.u,l=>i({u:F(l)}),.05)}
          ${this.len(this.t("solar_v"),t.v,l=>i({v:F(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),t.cover??null,void 0,s,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),t.contact??null,void 0,r,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),t.tilt??null,void 0,r,l=>i({tilt:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_motor"),t.window??null,void 0,s,l=>i({window:l==="none"?null:l}))}
          <label class="fp3d-field fp3d-wide"
            >${this.t("roof_window_name")}
            <input .value=${t.name??""} ?disabled=${!e} maxlength="64" @change=${l=>i({name:l.target.value.trim()||null})}
          /></label>
        </div>
        <label class="fp3d-check"
          ><input type="checkbox" ?disabled=${!e} .checked=${!!t.float} @change=${l=>i({float:l.target.checked||void 0})} />
          ${this.t("roof_window_float")}</label
        >
        <p class="fp3d-sub">${this.t("roof_window_float_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_motor_hint")}</p>
        <p class="fp3d-sub">${this.t("roof_window_hint")}</p>
        ${e?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:$}
      </section>`}cableSegments(){var o;if(((o=this.cableCache)==null?void 0:o.doc)===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(s=>[s.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=Rl({building:t,consumers:[],summary:n,fieldPower:e}).filter(s=>s.key)}catch{i=[]}return this.cableCache={doc:t,segs:i},i}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,i)=>e(n)-e(i)||n.localeCompare(i))}cableLabel(t){let e=r=>{let l=this._doc.floors.flatMap(d=>d.furniture).find(d=>d.id===r);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.type==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[o,s]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(o==="solar"){let r=this._doc.settings.roof.solar??[],l=r.findIndex(c=>c.id===s),d=r[l];return`${(d==null?void 0:d.name)||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return o==="inv"?`${e(s)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${e(s)}`}layCable(t){if(!this.isAdmin||!this._floorId)return;let e=[];for(let o of this.cableSegments().filter(s=>s.key===t))for(let s of[o.a,o.b]){let r=[F(s[0]),F(s[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-r[0],l[1]-r[1])>.05)&&e.push(r)}let n=e.length>2?e.slice(1,-1):e,i=this._floorId;this.change(o=>{o.settings.roof.cables=[...(o.settings.roof.cables??[]).filter(s=>s.id!==t),{id:t,floor_id:i,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){if(!ft("energy_pro"))return $;let t=this.cableSegments();if(!t.length)return $;let e=t.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,o=[...new Set(t.map(s=>s.key))];return C`<g class="fp3d-cable-layer">${o.map(s=>{let r=n.find(_=>_.id===s),l=`fp3d-cable fp3d-cable-${s.split(":")[0]}${r?" fp3d-cable-laid":""}${s===i?" fp3d-cable-sel":""}`,d=t.filter(_=>_.key===s),c=e.filter(_=>_.key===s).map(_=>{let m=this.toScreen([_.a[0],_.a[2]]),v=this.toScreen([_.b[0],_.b[2]]);return C`<line x1=${m[0]} y1=${m[1]} x2=${v[0]} y2=${v[1]} />`});if(!(r&&s===i&&r.floor_id===this._floorId&&!r.locked))return c.length?C`<g class=${l} data-cable=${s}><g class="fp3d-cable-hit">${c}</g>${c}</g>`:$;let u=d[0],p=d[d.length-1],h=[this.toScreen([u.a[0],u.a[2]]),...r.points.map(_=>this.toScreen(_)),this.toScreen([p.b[0],p.b[2]])],f=h.slice(0,-1).map((_,m)=>C`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${m} x1=${_[0]} y1=${_[1]} x2=${h[m+1][0]} y2=${h[m+1][1]} />`),g=r.points.map((_,m)=>{let v=this.toScreen(_);return C`<g class="fp3d-vertex" data-cable-pt=${`${s}:${m}`}><circle cx=${v[0]} cy=${v[1]} r="16" class="fp3d-hit" /><circle cx=${v[0]} cy=${v[1]} r="6" /></g>`});return C`<g class=${l} data-cable=${s}>${c}${f}${g}</g>`})}</g>`}renderCableSettings(){var o;let t=this.cableKeys();if(!t.length)return $;let e=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(s=>s.id===this._cableId):void 0;return b`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${t.map(s=>b`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${s===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=s===this._cableId?null:s;let r=n.find(l=>l.id===s);this._cableId&&r&&this._doc.floors.some(l=>l.id===r.floor_id)&&(this._floorId=r.floor_id)}}
            >
              <span>${this.cableLabel(s)}${n.some(r=>r.id===s)?b` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:$}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?b`<div class="fp3d-actions">
              ${i?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(s=>{var l;let r=(l=s.settings.roof.cables)==null?void 0:l.find(d=>d.id===i.id);r&&(r.locked=!r.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(s=>s.settings.roof.cables=(s.settings.roof.cables??[]).filter(r=>r.id!==this._cableId))}>${this.t("cable_auto")}</button>`:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?b`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,s=>this.change(r=>{var d;let l=(d=r.settings.roof.cables)==null?void 0:d.find(c=>c.id===i.id);l&&(l.height=Math.min(30,Math.max(0,F(s))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:((o=this._doc.floors.find(s=>s.id===i.floor_id))==null?void 0:o.name)??""})}</p>`:$}`:$}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return $;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,i=ft("energy_pro")&&(n==null?void 0:n.place)==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return C`<g class="fp3d-energy-markers">${i?C`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:$}${t.furniture.filter(o=>fe.includes(o.type)).map(o=>{let[s,r]=this.toScreen([o.x,o.z]),l=o.id===this._furnitureId;return C`<g data-energy-device=${o.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${r} r="17" />
          <text x=${s} y=${r+6} class="fp3d-energy-icon">${e[o.type]??"\u26A1"}</text>
          ${l?C`<text x=${s} y=${r+32} class="fp3d-energy-name">${this.t(`furn_${o.type}`)}</text>`:$}
          <title>${this.t(`furn_${o.type}`)}</title>
        </g>`})}</g>`}faceLabel(t){if(t.key===Ee)return this.t("solar_ground");if(t.wall){let{floorId:o,room:s,edge:r,free:l}=t.wall,d=this._doc.floors.find(p=>p.id===o),c=d==null?void 0:d.rooms.find(p=>p.id===s),u=l?this.t("solar_wall_free"):c?`${c.name}${r!=null?` ${r+1}\u2013${(r+1)%c.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${(d==null?void 0:d.name)??""} \xB7 ${u?`${u} \xB7 `:""}${this.t(`compass_${ls(t,this._doc.settings.north??0)}`)} \xB7 ${this.m(t.lu,2)}`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(o=>o.id===t.section)+1}):this.t("solar_main");if(t.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=t.side==="c"||t.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${ls(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0${i}`}addSolarField(){if(!this.isAdmin)return;let t=vt(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,i=Ti(t.filter(s=>!e.has(s.key)),n)??Ti(t,n);if(!i)return;let o=Ri(i,U("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(t){var n;this._solarId=t,this._roofId=null;let e=(n=this._doc.settings.roof.solar)==null?void 0:n.find(i=>i.id===t);e!=null&&e.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){var n;if(!this.isAdmin)return;let t=this._floorId??((n=this._doc.floors[0])==null?void 0:n.id),e=t?hl(this._doc,U("pv"),t):null;e&&(this.change(i=>i.settings.roof.solar=[...i.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isAdmin)return;let t=is(this._doc,U("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var s;let i=(s=n.settings.roof.solar)==null?void 0:s.find(r=>r.id===e);if(!i)return;Object.assign(i,t);let o=Dt(n,i);o&&Object.assign(i,un(o,i))}))}setSolarString(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var r;let i=n.settings.roof,o=(r=i.solar)==null?void 0:r.find(l=>l.id===e);if(!o)return;if(t==="new"){let l=i.strings??[],d={id:U("str"),name:this.t("solar_string_n",{n:l.length+1}),entity:o.entity??null,inverter:null};i.strings=[...l,d],o.string=d.id}else o.string=t;let s=new Set((i.solar??[]).map(l=>l.string).filter(Boolean));i.strings=(i.strings??[]).filter(l=>s.has(l.id))})}updateSolarString(t){var i;let e=(i=this._doc.settings.roof.solar)==null?void 0:i.find(o=>o.id===this._solarId),n=e==null?void 0:e.string;!n||!this.isAdmin||this.change(o=>{var r;let s=(r=o.settings.roof.strings)==null?void 0:r.find(l=>l.id===n);s&&Object.assign(s,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var o;let i=(o=n.settings.roof.solar)==null?void 0:o.find(s=>s.id===e);i&&t(i)})}deleteSolar(){let t=this._solarId;!t||!this.isAdmin||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==t);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=vt(this._doc),n=new Map(t.map(o=>[o.id,Dt(this._doc,o,e)])),i=this.isAdmin;return b`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?b`<div class="fp3d-room-list">
            ${t.map((o,s)=>{let r=n.get(o.id),l=r?ve(r,o).length:0;return b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(o.id)}
                >
                  <span>${o.name||`${this.t("solar_field")} ${s+1}`} · ${r?this.faceLabel(r):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:Kt(this.hass,l*(o.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:$}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?b`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(o=>{let s=t.filter(c=>c.string===o.id),r=s.map(c=>n.get(c.id)?ve(n.get(c.id),c).length:0),l=r.reduce((c,u)=>c+u,0),d=s.reduce((c,u,p)=>c+r[p]*(u.wp??400)/1e3,0);return b`<p class="fp3d-sub">🔗 <b>${o.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:l,kwp:Kt(this.hass,d,1)})}</p>`})}`:$}
    </section>`}renderSolarForm(t){var h,f,g,_;let e=this.isAdmin,n=vt(this._doc),i=le(this._doc),o=Dt(this._doc,t,n),s=t.face===Ee,r=o?ve(o,t).length:0,l=Dn(t),d=l.reduce((m,v)=>m+v,0)-(((h=t.skip)==null?void 0:h.length)??0),c=this.entityOptions(m=>this.isPowerSensor(m)),u=m=>this.updateSolar(m),p=(this._doc.settings.roof.solar??[]).findIndex(m=>m.id===t.id)+1;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${p}`}</h3>
          ${e?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!t.locked})}>
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
              @change=${m=>u({name:m.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${m=>{let v=m.target.value,y={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h,wp:t.wp};v===Ee&&u({...is(this._doc,t.id),...y,rows:t.rows,cols:t.cols});let w=n.find(z=>z.key===v);w&&u(as(w,{...t,...y}));let P=i.find(z=>z.key===v);P&&u(as(P,{...t,...y,rows:1}))}}
            >
              ${o?$:b`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(m=>b`<option value=${m.key} ?selected=${m.key===t.face}>${this.faceLabel(m)}</option>`)}
              <option value=${Ee} ?selected=${s}>${this.t("solar_ground")}</option>
              ${i.map(m=>b`<option value=${m.key} ?selected=${m.key===t.face}>${this.faceLabel(m)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,m=>{var y;let v=Math.max(1,Math.min(40,Math.round(m)));u((y=t.layout)!=null&&y.length?{layout:Array.from({length:v},(w,P)=>t.layout[P]??t.layout[t.layout.length-1]),rows:v}:{rows:v})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${(f=t.layout)!=null&&f.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${m=>{let v=m.target.value.split(/[,;\s]+/).map(y=>parseInt(y,10)).filter(y=>Number.isFinite(y)&&y>=0);v.length&&(v.length===1?u({cols:Math.max(1,Math.min(60,v[0])),layout:null,skip:null}):u({layout:v.slice(0,40).map(y=>Math.min(60,y)),rows:Math.min(40,v.length),cols:Math.max(1,...v),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${o&&!o.unbounded?b`${this.t("solar_face_size",{w:Kt(this.hass,o.lu,1),h:Kt(this.hass,o.ls,1)})} · `:$}${this.t("solar_cols_hint")}
        </p>
        ${(g=t.layout)!=null&&g.length&&new Set(t.layout).size>1?b`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(m=>b`<button aria-pressed=${(t.align??"left")===m} ?disabled=${!e} @click=${()=>u({align:m})}>${this.t(`solar_align_${m}`)}</button>`)}
            </div>`:$}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.portrait!==!1} ?disabled=${!e} @click=${()=>u({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${t.portrait===!1} ?disabled=${!e} @click=${()=>u({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.look!=="blue"} ?disabled=${!e} @click=${()=>u({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${t.look==="blue"} ?disabled=${!e} @click=${()=>u({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"),t.module_w??1.13,m=>u({module_w:Math.max(.3,Math.min(3,F(m)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),t.module_h??1.72,m=>u({module_h:Math.max(.3,Math.min(3,F(m)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),t.wp??400,m=>u({wp:Math.max(50,Math.min(1500,Math.round(m)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${(_=t.skip)!=null&&_.length?b`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:$}
        </div>
        ${this._solarPick?b`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:$}
        <div class="fp3d-form">
          ${s?b`${this.len(this.t("solar_base"),t.base??0,m=>u({base:m>.001?Math.min(60,F(m)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,m=>u(Hn(this._doc,t,m)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Hn(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Hn(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:b`${this.len(this.t("solar_u"),t.u,m=>u({u:F(m)}),.05)} ${this.num(this.t(o!=null&&o.wall?"solar_v_wall":"solar_v"),t.v,m=>u({v:F(m)}),.05)}`}
          ${o!=null&&o.wall?b`${this.num(this.t("solar_tilt_wall"),t.tilt??0,m=>u({tilt:Math.max(0,Math.min(90,Math.round(m)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${m=>u({flip:m.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:$}
          ${o!=null&&o.flat?b`${this.num(this.t("solar_tilt"),t.tilt??15,m=>u({tilt:Math.max(0,Math.min(45,Math.round(m)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${m=>u({flip:m.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:$}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:r,kwp:Kt(this.hass,r*(t.wp??400)/1e3,1)})}${r<d?b` · <b>${this.t("solar_partial",{n:r,total:d})}</b>`:$}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${m=>{let v=m.target.value;this.setSolarString(v===""?null:v)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(m=>b`<option value=${m.id} ?selected=${m.id===t.string}>${m.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{var P;let m=(P=this._doc.settings.roof.strings)==null?void 0:P.find(z=>z.id===t.string);if(!m)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,c,z=>u({entity:z==="none"?null:z}));let v=this.hass?tn(this.hass,this._doc.floors):null,y=z=>this._doc.floors.flatMap(E=>E.furniture.filter(S=>S.type===z).map(S=>({m:S,fl:E}))).map(({m:E,fl:S},x)=>{var I,A;let k=(I=v==null?void 0:v.get(E.id))==null?void 0:I.entity,M=((A=E.name)==null?void 0:A.trim())||(k&&this.hass?Mt(this.hass,k):"");return{id:E.id,label:`${M||`${this.t(`furn_${z}`)} ${x+1}`} \xB7 ${S.name}`}}),w=[...y("inverter"),...y("home_battery")];return b`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${m.name} @change=${z=>this.updateSolarString({name:z.target.value.trim()||m.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),m.entity??null,void 0,c,z=>this.updateSolarString({entity:z==="none"?null:z}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${z=>this.updateSolarString({inverter:z.target.value||null})}>
                  <option value="" ?selected=${!m.inverter}>${this.t(w.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${w.map(z=>b`<option value=${z.id} ?selected=${z.id===m.inverter}>${z.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${e?b`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!o} @click=${()=>o&&u({...Ri(o,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:$}
      </section>`}renderRoofPanel(){var s;let t=this._doc.settings.roof,e=this.isAdmin,n=t.type==="custom"?this.roofSection:void 0,i=this._roofWinId?(s=t.windows)==null?void 0:s.find(r=>r.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=t.type==="custom"?t.sections??[]:[];return b`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:b`<div class="fp3d-room-list">
              ${o.map((r,l)=>b`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=r.id}>
                    <span>${l+1} · ${r.dormer?this.t("roof_dormer"):this.t(`roof_shape_${r.shape}`)} · ${this.m(Math.abs(r.x1-r.x0),1)} × ${this.m(Math.abs(r.z1-r.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(zi(r),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(r=>r.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){var i,o;let t=this._solarId?(i=this._doc.settings.roof.solar)==null?void 0:i.find(s=>s.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?(o=this.floor)==null?void 0:o.furniture.find(s=>s.id===this._furnitureId&&fe.includes(s.type)):void 0;if(e)return b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`;let n=ft("energy_pro");return b`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():$}${n?this.renderHologramSettings():$}${this.renderProCard()}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[],e=this.isAdmin,n=this._doc.settings.roof.hologram??oi,i=n.place==="free",o=l=>this.change(d=>d.settings.roof.hologram={...d.settings.roof.hologram??oi,...l}),s=(l,d)=>l.name||`${this.t("solar_field")} ${d+1}`,r=()=>{let l=-1/0,d=1/0,c=-1/0;for(let p of this._doc.floors)for(let h of p.rooms)for(let[f,g]of h.points)l=Math.max(l,f),d=Math.min(d,g),c=Math.max(c,g);let u=Number.isFinite(l);o({place:"free",x:n.x??(u?F(l+2):0),z:n.z??(u?F((d+c)/2):0),height:n.height??3})};return b`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!e} @change=${l=>l.target.value==="free"?r():o({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?b`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>o({x:F(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>o({z:F(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>o({height:Math.min(60,Math.max(0,F(l)))}),.25,0)}`:t.length?b`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!e} @change=${l=>o({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${t.map((l,d)=>b`<option value=${l.id} ?selected=${l.id===n.field}>${s(l,d)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>o({right:Math.min(30,Math.max(-30,F(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>o({up:Math.min(30,Math.max(-30,F(l)))}),.25)}`:b`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>o({size:Math.min(3,Math.max(.3,F(l)))}),.1,.3)}
        ${this.num(this.t("holo_device_min_w"),n.device_min_w??0,l=>o({device_min_w:Math.max(0,Math.round(l))}),1,0)}
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_house_hint")}
          ><input type="checkbox" .checked=${n.device_house!==!1} ?disabled=${!e} @change=${l=>o({device_house:l.target.checked?void 0:!1})} />
          ${this.t("holo_device_house")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_device_room_hint")}
          ><input type="checkbox" .checked=${!!n.device_room} ?disabled=${!e} @change=${l=>o({device_room:l.target.checked||void 0})} />
          ${this.t("holo_device_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_plant_floor_hint")}
          ><input type="checkbox" .checked=${!!n.plant_floor} ?disabled=${!e} @change=${l=>o({plant_floor:l.target.checked||void 0})} />
          ${this.t("holo_plant_floor")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("holo_mirror_hint")}
          ><input type="checkbox" .checked=${n.mirror!==!1} ?disabled=${!e} @change=${l=>o({mirror:l.target.checked?void 0:!1})} />
          ${this.t("holo_mirror")}</label
        >
      </div>
    </section>`}isPowerSensor(t){var n,i;if(!Ot(t))return!1;let e=(i=(n=this.hass)==null?void 0:n.states[t])==null?void 0:i.attributes;return(e==null?void 0:e.device_class)==="power"||(e==null?void 0:e.unit_of_measurement)==="W"||(e==null?void 0:e.unit_of_measurement)==="kW"}devicePower(t,e){var n;return t.power&&t.power!=="none"?t.power:((n=e.get(t.id))==null?void 0:n.power)??null}renderEnergyChecklist(){let t=this._doc,e=this.hass?tn(this.hass,t.floors):new Map,n=t.floors.flatMap(m=>m.furniture.map(v=>({m:v,fl:m}))),i=m=>n.filter(v=>v.m.type===m),o=m=>{this._floorId=m.fl.id,this._solarId=null,this.selectItem("furniture",m.m.id),this.showPoint(m.m.x,m.m.z)},s=t.settings.roof.solar??[],r=i("meter"),l=i("inverter"),d=i("home_battery"),c=i("grid_point"),u=!!t.energy.grid||r.some(m=>this.devicePower(m.m,e)),p=!!t.energy.solar||l.length>0&&l.every(m=>this.devicePower(m.m,e)),h=d.every(m=>this.devicePower(m.m,e)&&m.m.soc&&m.m.soc!=="none")||!!t.energy.battery,f=ft("energy_pro"),g=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},r.length?{state:u?"ok":"todo",label:this.t(u?"chk_meter":"chk_meter_sensor"),action:()=>o(r[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:p?"ok":"todo",label:this.t(p?"chk_inverter":"chk_inverter_sensor"),action:()=>o(l.find(m=>!this.devicePower(m.m,e))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},d.length?{state:h?"ok":"todo",label:this.t(h?"chk_battery":"chk_battery_sensor"),action:()=>o(d[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},c.length?{state:"ok",label:this.t("chk_grid"),action:()=>o(c[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},...f?[{state:"ok",label:this.t("chk_pro_active")}]:[]],_=g.filter(m=>m.state==="ok").length;return b`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${_}/${g.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${g.map(m=>m.href?b`<a class="fp3d-chk fp3d-chk-${m.state}" href=${m.href} target="_blank" rel="noopener"><span>${m.state==="ok"?"\u2713":m.state==="todo"?"\u25CB":"\xB7"}</span>${m.label}</a>`:b`<button class="fp3d-chk fp3d-chk-${m.state}" ?disabled=${!this.isAdmin&&!!m.action&&m.state!=="ok"} @click=${m.action}><span>${m.state==="ok"?"\u2713":m.state==="todo"?"\u25CB":"\xB7"}</span>${m.label}</button>`)}
    </section>`}renderHelpLinks(){return b`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new?labels=enhancement" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
      </div>
    </section>`}renderProCard(){if(ft("energy_pro"))return b`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${We("energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return b`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${We("energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isAdmin)return;if(t==="grid_point"){let v=ms(this._doc),[y,w,P]=Wt(t),[z,E]=v?v.end:this.toWorld(this._size.w/2,this._size.h/2),S={id:U("furniture"),type:t,x:F(z),z:F(E),rotation:0,w:y,d:w,h:P,variant:null};this.change((x,k)=>k.furniture.push(S)),this.selectItem("furniture",S.id),this.showPoint(S.x,S.z);return}let n=v=>{var y,w,P;return`${v.name} ${v.area_id&&((P=(w=(y=this.hass)==null?void 0:y.areas)==null?void 0:w[v.area_id])==null?void 0:P.name)||""} ${v.area_id??""}`.toLowerCase()},i=e.rooms.filter(v=>v.points.length>=3),o=v=>i.find(y=>v.test(n(y))),s=i.find(v=>e.furniture.some(y=>y.type==="parking"&&Y([y.x,y.z],v.points))),r=o(/garage|carport/)??s,l=o(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),d=o(/flur|diele|eingang|hall|entr|lobby/),c=(t==="wallbox"?r:t==="meter"?l??d??r:l??r)??this.room??i.sort((v,y)=>Math.abs(Pt(y.points))-Math.abs(Pt(v.points)))[0],[u,p,h]=Wt(t),[f,g]=c?Xt(c.points):this.toWorld(this._size.w/2,this._size.h/2);if(c){let[v,y]=Xt(c.points),w=null,P=new Set(e.openings.filter(S=>S.room_id===c.id).map(S=>S.edge)),z=c.points.some((S,x)=>!P.has(x));c.points.forEach((S,x)=>{if(z&&P.has(x))return;let k=c.points[(x+1)%c.points.length],M=Math.hypot(k[0]-S[0],k[1]-S[1]);if(w&&M<=w.l)return;let I=(S[0]+k[0])/2,A=(S[1]+k[1])/2,j=-(k[1]-S[1])/M,O=(k[0]-S[0])/M;(v-I)*j+(y-A)*O<0&&([j,O]=[-j,-O]),w={mx:I,mz:A,nx:j,nz:O,l:M}});let E=w;E&&([f,g]=[E.mx+E.nx*(p/2+.25),E.mz+E.nz*(p/2+.25)])}let _={id:U("furniture"),type:t,x:F(f),z:F(g),rotation:0,w:u,d:p,h,variant:null},m=c?Fn({...e,furniture:[...e.furniture,_]},_,this._doc.settings.wall_interior):null;m&&Object.assign(_,{x:F(m.x),z:F(m.z),rotation:m.rotation}),this.change((v,y)=>y.furniture.push(_)),this.selectItem("furniture",_.id),this.showPoint(_.x,_.z)}renderEnergyDevices(){let t=this.isAdmin,e=this._doc.floors.flatMap(n=>n.furniture.filter(i=>fe.includes(i.type)).map(i=>({fl:n,m:i})));return b`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${e.length?b`<div class="fp3d-room-list">
            ${e.map(({fl:n,m:i})=>b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:$}
      <div class="fp3d-actions">
        ${fe.map(n=>b`<button
            class="fp3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(t){let e=this.isAdmin,n=h=>this.updateRoofSection(h),i=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[o,s]=t.flip?[i[1],i[0]]:i,r=t.shape==="flat"||t.shape==="parapet",l=t.shape==="pent",d=h=>h.findIndex(f=>f.id===t.id)+1,c=(h,f,g,_=.05,m=0)=>this.len(h,f,v=>g(Math.max(m,F(v))),_,m),u=(h,f,g)=>this.num(h,f,_=>g(Math.max(0,F(_))),1,0),p=!!this._doc.settings.lock_plan;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${t.dormer?this.t("roof_dormer"):this.t("roof_section")} ${d(this._doc.settings.roof.sections??[])}</h3>
          ${e?p?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:$}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!e} @change=${h=>n({shape:h.target.value})}>
            ${dr.map(h=>b`<option value=${h} ?selected=${t.shape===h}>${this.t(`roof_shape_${h}`)}</option>`)}
          </select>
        </label>
        ${r?$:b`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${h=>n({open:h.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${r?c(this.t("roof_height"),t.eave_a,h=>n({eave_a:h,eave_b:h})):b`${c(`${this.t("roof_eave")} ${l?"":o}`,t.eave_a,h=>n({eave_a:h}))}
              ${l?$:c(`${this.t("roof_eave")} ${s}`,t.eave_b,h=>n({eave_b:h}))}
              ${u(`${this.t("roof_pitch_short")} ${l?"":o}`,t.pitch_a,h=>n({pitch_a:Math.min(75,h)}))}
              ${l?$:u(`${this.t("roof_pitch_short")} ${s}`,t.pitch_b,h=>n({pitch_b:Math.min(75,h)}))}`}
          ${c(this.t("roof_base"),t.base,h=>n({base:h}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!e}
              @change=${h=>{let f=this._doc.floors.find(m=>m.id===h.target.value);if(!f)return;let g=F(f.elevation+f.height),_=g-t.base;n({base:g,eave_a:F(t.eave_a+_),eave_b:F(t.eave_b+_)})}}
            >
              ${[...this._doc.floors].filter(h=>h.rooms.length).sort((h,f)=>f.elevation-h.elevation).map(h=>{var f;return b`<option value=${h.id} ?selected=${((f=ll(this._doc,t))==null?void 0:f.id)===h.id}>${h.name}</option>`})}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${c(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,h=>n({overhang:Math.min(2,h)}),.05,0)}
        </div>
        ${r&&e?b`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${t.points?b`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:$}
            </div>
            <p class="fp3d-sub">${this.t(t.points?"roof_points_hint":"roof_outline_hint")}</p>`:$}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(zi(t),2)} · ${this.t("roof_section_hint")}</p>
        ${e?b`<div class="fp3d-actions">
              ${r?$:b`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!r&&!t.dormer&&!t.open?b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${o}</button>
                  ${l?$:b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:$}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:$}
      </section>`}fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(i=>i.id===n);case"opening":return t.openings.find(i=>i.id===n);case"furniture":return t.furniture.find(i=>i.id===n);case"device":return t.placements.find(i=>i.entity_id===n);case"wall":return(t.walls??[]).find(i=>i.id===n);case"outdoor":return t.outdoor.find(i=>i.id===n)}}isFixedItem(t,e){return lo(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isAdmin||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);n||(this._fixedHint=!1),this.change((i,o)=>{let s=this.fixItem(o,t,e);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(t=>t.settings.lock_plan=!t.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(t){t.preventDefault(),!(this.rightPress||performance.now()-this.rightUp<600)&&(this._tool!=="select"&&this._tool!=="furniture"||(this.drag=null,this.openContext(t.target,this.localPoint(t))))}openContext(t,e){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...e),i=f=>{var g;return((g=t.closest(`[${f}]`))==null?void 0:g.getAttribute(f))??null},o=null,s=i("data-device"),r=i("data-opening"),l=t.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),d=i("data-free-wall"),c=i("data-outdoor"),u=i("data-room")??this.roomAt(n);if(s?o=["device",s]:r?o=["opening",r]:l?o=["furniture",l]:d?o=["wall",d]:c&&!u?o=["outdoor",c]:u&&(o=["room",u]),!o){this._ctx=null;return}let[p,h]=o;this.selectItem(p,h),(p==="opening"||p==="furniture")&&(this._roomId=this._roomId??u),this._ctx={x:e[0],y:e[1],kind:p,id:h}}deleteItem(t,e){if(t==="device"){if(!this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return $;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(t.x,((n==null?void 0:n.clientWidth)??800)-190)),o=Math.max(4,Math.min(t.y,((n==null?void 0:n.clientHeight)??600)-190)),s=r=>()=>{this._ctx=null,r()};return b`<div class="fp3d-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${r=>r.stopPropagation()} @contextmenu=${r=>r.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?b`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:b`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?b`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:$}
      ${t.kind==="furniture"?b`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${s(()=>{var l;let r=(l=this.floor)==null?void 0:l.furniture.find(d=>d.id===t.id);r&&this.openWallViewFor(r)})}>▦ ${this.t("wall_view")}</button>`:$}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isAdmin)return $;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:$;let n=this.isFixedItem(t,e);return b`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){var n,i,o;if(this._notice=null,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._multi=[],this._single=!1,this._deviceId=t==="device"?e:null,t==="device"&&e){let s=(n=this.floor)==null?void 0:n.placements.find(r=>r.entity_id===e);this._roomId=(s&&this.roomAt([s.x,s.z]))??this._roomId}t==="opening"&&e&&(this._roomId=((o=(i=this.floor)==null?void 0:i.openings.find(s=>s.id===e))==null?void 0:o.room_id)??this._roomId)}get opening(){var t;return this._openingId?(t=this.floor)==null?void 0:t.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){var t;return this._furnitureId?(t=this.floor)==null?void 0:t.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,o){let s=t.points[e],r=t.points[(e+1)%t.points.length],l=Math.hypot(r[0]-s[0],r[1]-s[1])||1,d=((n[0]-s[0])*(r[0]-s[0])+(n[1]-s[1])*(r[1]-s[1]))/l,c=o?.01:this._doc.settings.grid,u=Math.min(i,l)/2;return F(Math.min(l-u,Math.max(u,Math.round(d/c)*c)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let g of n.walls??[]){let _=nn({room_id:"",edge:0,wall:g.id},n.rooms,n.walls??[]);if(!_)continue;let[m,v]=this.toScreen(g.a),[y,w]=this.toScreen(g.b),P=(y-m)**2+(w-v)**2||1,z=Math.min(1,Math.max(0,((e[0]-m)*(y-m)+(e[1]-v)*(w-v))/P)),E=Math.hypot(e[0]-m-(y-m)*z,e[1]-v-(w-v)*z),S=[(g.a[0]+g.b[0])/2,(g.a[1]+g.b[1])/2],x=n.rooms.find(k=>k.points.length>=3&&Y(S,k.points));E<Ni*2.2&&(!i||E-1<i.d)&&(i={room:_.room,edge:0,d:E-1,wall:g.id,roomId:(x==null?void 0:x.id)??g.id})}for(let g of n.rooms)for(let _=0;_<g.points.length;_++){let[m,v]=this.toScreen(g.points[_]),[y,w]=this.toScreen(g.points[(_+1)%g.points.length]),P=(y-m)**2+(w-v)**2||1,z=Math.min(1,Math.max(0,((e[0]-m)*(y-m)+(e[1]-v)*(w-v))/P)),E=Math.hypot(e[0]-m-(y-m)*z,e[1]-v-(w-v)*z),S=E-(g.id===this._roomId?.5:0);E<Ni*2.2&&(!i||S<i.d)&&(i={room:g,edge:_,d:S})}if(!i)return!1;let{room:o,edge:s,wall:r}=i,l=o.points[s],d=o.points[(s+1)%o.points.length],c=Math.hypot(d[0]-l[0],d[1]-l[1]),u=pi[t],p=u.type,h=F(Math.min(u.width,Math.max(.3,c-.1))),f={id:U("opening"),room_id:i.roomId??o.id,edge:s,...r?{wall:r}:{},offset:this.offsetOnEdge(o,s,this.toWorld(...e),h,!1),width:h,type:p,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((g,_)=>_.openings.push(f)),this.selectItem("opening",f.id),!0}setOpeningPreset(t,e){let n=pi[e];this._openingPreset=e;let i=hi(t)===e,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(o=>o.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||!this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}glowScaleField(t,e){return b`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((t??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;e(Math.abs(i-1)<.001?null:i)}}
    /></label>`}typeChoices(t){let e=new Set(Object.values(di).flat());return(ft("fridge_smart")||ft("household"))&&e.add("fridge_smart"),ci.filter(n=>e.has(n)||n===t)}furnitureFor(t){let e=lt(t),n=[...ci.map(s=>({type:s,label:this.t(`furn_${s}`)})),...(this.packs??[]).flatMap(s=>s.items.map(r=>({type:Oe(s.id,r.id),label:`${oe(r)} \xB7 ${he(s)}`})))],i=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,o=s=>e==="light"?Gt(s):e==="climate"?s==="radiator"||s==="ac_unit":t.startsWith("vacuum.")?pe(s):e==="media"?$i(s)||Ze(s)&&i.test(s):Ze(s)&&!Gt(s);return n.filter(s=>o(s.type)).sort((s,r)=>s.label.localeCompare(r.label))}vehicleToSpot(t){if(!this.isAdmin)return;let[e,n,i]=Wt("parking"),o={id:U("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,F(t.w+.5)),d:Math.max(n,F(t.d+.4)),h:i,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}};this.change((s,r)=>{r.furniture=r.furniture.filter(l=>l.id!==t.id),r.furniture.push(o)}),this.selectItem("furniture",o.id)}deviceToFurniture(t,e){if(!this.isAdmin)return;let[n,i,o]=Wt(e),s={id:U("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:i,h:o,variant:null,entity:t.entity_id,name:t.name??null,...t.locked?{locked:!0}:{}};this.change((r,l)=>{l.placements=l.placements.filter(d=>d.entity_id!==t.entity_id),l.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(t){let e=t.entity;if(!this.isAdmin||!e||e==="none")return;let n={entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,...t.name?{name:t.name}:{},...e.startsWith("light.")?{pin:!0}:{}};this.change((i,o)=>{o.furniture=o.furniture.filter(s=>s.id!==t.id),o.placements.some(s=>s.entity_id===e)||o.placements.push(n)}),this._furnitureId=null,this.selectItem("device",e)}renderAsFurniture(t){if(!this.isAdmin)return $;let e=this.furnitureFor(t.entity_id);return e.length?b`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let i=n.target.value;i&&this.deviceToFurniture(t,i)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${e.map(n=>b`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:$}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,i,o]=Wt(t),s=this._doc.floors.filter(h=>h.elevation>e.elevation).sort((h,f)=>h.elevation-f.elevation)[0],r=_o.has(t)?F(s?s.elevation-e.elevation:e.height+.25):o,l=this.room,[d,c]=l?Xt(l.points):this.toWorld(this._size.w/2,this._size.h/2),u=0;if(t==="parking"&&l){let h=e.openings.find(m=>m.room_id===l.id&&m.type==="garage"),f=h?l.points[h.edge]:null,g=h?l.points[(h.edge+1)%l.points.length]:null,_=At(l.points);u=(f&&g?Math.abs(g[1]-f[1])>Math.abs(g[0]-f[0]):_.x1-_.x0>_.z1-_.z0)?90:0}let p={id:U("furniture"),type:t,x:F(d),z:F(c),rotation:u,w:n,d:i,h:r,variant:null};this.change((h,f)=>f.furniture.push(p)),this.selectItem("furniture",p.id),this.showPoint(p.x,p.z)}snapToWall(t){return this.floor?Fn(this.floor,t,this._doc.settings.wall_interior):null}updateFurniture(t){let e=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(o=>o.id===e),t))}mirrorFurniture(){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({mirror:!t.mirror})}rotateFurniture(t){let e=this.furnitureItem;if(!e||!this.isAdmin)return;if(this.selection().length>1)return this.rotateSelection(t);this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;if(!t||!this.isAdmin)return;let e=this.selection();if(e.length>1){let n=e.some(o=>this.isFixedItem("furniture",o));if(!confirm(this.t(n?"block_delete_fixed":"block_delete",{n:e.length})))return;let i=new Set(e);this.change((o,s)=>s.furniture=s.furniture.filter(r=>!i.has(r.id))),this.selectItem("room",this._roomId);return}this.confirmFixedDelete("furniture",t)&&(this.change((n,i)=>i.furniture=i.furniture.filter(o=>o.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e=this.selection();if(e.length>1){let i=this.floor.furniture.filter(r=>e.includes(r.id)),o=new Map,s=i.map(r=>({...structuredClone(r),id:U("furniture"),x:F(r.x+.3),z:F(r.z+.3),group:r.group?o.get(r.group)??o.set(r.group,U("block")).get(r.group):null,locked:null}));this.change((r,l)=>l.furniture.push(...s)),this.setMulti(s.map(r=>r.id));return}let n={...structuredClone(t),id:U("furniture"),x:F(t.x+.3),z:F(t.z+.3),group:this._single?t.group:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}selection(){var e;if(this._multi.length)return this._multi;let t=this.furnitureItem;return t?t.group&&!this._single?(((e=this.floor)==null?void 0:e.furniture)??[]).filter(n=>n.group===t.group).map(n=>n.id):[t.id]:[]}withGroups(t){var n,i;let e=new Set((((n=this.floor)==null?void 0:n.furniture)??[]).filter(o=>t.includes(o.id)&&o.group).map(o=>o.group));return[...new Set([...t,...(((i=this.floor)==null?void 0:i.furniture)??[]).filter(o=>o.group&&e.has(o.group)).map(o=>o.id)])]}setMulti(t){if(!t.length)return this.selectItem("room",this._roomId);this.selectItem("furniture",t[0]);let e=this.selection();t.length>1&&!(t.length===e.length&&t.every(n=>e.includes(n)))&&(this._multi=t)}toggleMulti(t){let e=this._furnitureId?this.selection():[],n=this.withGroups([t]),i=e.includes(t)?e.filter(o=>!n.includes(o)):[...new Set([...e,...n])];this.setMulti(i)}selectionCentre(t){var o;let e=(((o=this.floor)==null?void 0:o.furniture)??[]).filter(s=>t.includes(s.id)),n=e.map(s=>s.x),i=e.map(s=>s.z);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...i)+Math.max(...i))/2]}rotateSelection(t){let e=this.selection();if(e.some(d=>this.isFixedItem("furniture",d))){this._fixedHint=!0;return}let[n,i]=this.selectionCentre(e),o=t*Math.PI/180,s=Math.round(Math.cos(o)*1e6)/1e6,r=Math.round(Math.sin(o)*1e6)/1e6,l=new Set(e);this.change((d,c)=>{for(let u of c.furniture){if(!l.has(u.id))continue;let p=u.x-n,h=u.z-i;Object.assign(u,{x:F(n+p*s-h*r),z:F(i+p*r+h*s),rotation:((u.rotation+t)%360+360)%360})}})}groupSelection(){let t=new Set(this.selection());if(t.size<2)return;let e=U("block");this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=e)}),this._multi=[],this._single=!1}ungroupSelection(){let t=this.selection(),e=new Set(t);this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=null)}),t.length>1&&(this._multi=t)}lockSelection(t){let e=new Set(this.selection());this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.locked=t||null)})}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let n=new Set(t);this.change((i,o)=>{for(let r of i.floors)r.placements=r.placements.filter(l=>!n.has(l.entity_id)),r.furniture=r.furniture.filter(l=>!(Gt(l.type)&&l.entity&&n.has(l.entity)));let s=[...o.placements.map(r=>[r.x,r.z]),...o.furniture.filter(r=>Gt(r.type)).map(r=>[r.x,r.z])];for(let r of Qr(e,t,s)){if(!r.entity_id.startsWith("light.")){o.placements.push(r);continue}let[l,d,c]=se.lamp_ceiling;o.furniture.push({id:U("furniture"),type:"lamp_ceiling",x:r.x,z:r.z,rotation:0,w:l,d,h:c,variant:null,entity:r.entity_id,power:null})}})}get device(){var t;return this._deviceId?(t=this.floor)==null?void 0:t.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(o=>o.entity_id===e),t))}centreDevice(){var s;let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=(s=this.floor)==null?void 0:s.rooms.find(r=>r.id===e);if(!t||!n)return;let[i,o]=Xt(n.points);this.updateDevice({x:F(i),z:F(o)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(u=>lt(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&Y([u.x,u.z],t.points));if(n.length<2)return;let i=At(t.points),o=i.x1-i.x0,s=i.z1-i.z0,r=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,s)))),l=Math.ceil(n.length/r),d=n.map((u,p)=>{let h=Math.floor(p/r),f=h===l-1?n.length-r*(l-1):r,g=p-h*r;return[F(i.x0+o/f*(g+.5)),F(i.z0+s/l*(h+.5))]}),c=n.map(u=>u.entity_id);this.change((u,p)=>{c.forEach((h,f)=>Object.assign(p.placements.find(g=>g.entity_id===h),{x:d[f][0],z:d[f][1]}))})}straightenFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,fixed:n}=ga(t.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((i,o)=>o.rooms=e),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=fa(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=ma(n);this.change((o,s)=>{s.rooms=e,i&&(o.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:Kt(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(Gt(i.type)&&i.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n;this.change((o,s)=>{let r=s.rooms.find(l=>l.id===e.id);r.points.splice(t,1),r.wall_heights&&r.wall_heights.splice(t,1),r.wall_thickness&&r.wall_thickness.splice(t,1),s.openings=s.openings.filter(l=>l.room_id!==e.id||l.wall||l.edge!==t&&l.edge!==i).map(l=>l.room_id===e.id&&!l.wall&&l.edge>t?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(t,e){if(!this.isAdmin||!t&&!e)return;let n=o=>[F(o[0]+t),F(o[1]+e)],i=o=>{for(let s of o.rooms)s.points=s.points.map(n);for(let s of o.furniture)s.x=F(s.x+t),s.z=F(s.z+e);for(let s of o.placements)s.x=F(s.x+t),s.z=F(s.z+e);for(let s of o.outdoor)s.points=s.points.map(n);for(let s of o.walls??[])s.a=n(s.a),s.b=n(s.b);o.background&&(o.background.x=F(o.background.x+t),o.background.z=F(o.background.z+e))};this._shiftAll?this.change(o=>{for(let s of o.floors)i(s);this.moveHouseExtras(o,n)}):this.change((o,s)=>i(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(t,e){for(let i of t.settings.roof.sections??[]){let o=[e([i.x0,i.z0]),e([i.x1,i.z0]),e([i.x1,i.z1]),e([i.x0,i.z1])];i.x0=Math.min(...o.map(s=>s[0])),i.x1=Math.max(...o.map(s=>s[0])),i.z0=Math.min(...o.map(s=>s[1])),i.z1=Math.max(...o.map(s=>s[1])),i.points&&(i.points=i.points.map(e))}for(let i of t.settings.roof.cables??[])i.points=i.points.map(e);t.energy.meter&&([t.energy.meter.x,t.energy.meter.z]=e([t.energy.meter.x,t.energy.meter.z]));let n=t.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=e([n.x,n.z]))}turnFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let e=(this._shiftAll?this._doc.floors:[t]).flatMap(d=>d.rooms.flatMap(c=>c.points));if(!e.length)return;let n=e.map(d=>d[0]),i=e.map(d=>d[1]),o=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...i)+Math.max(...i))/2,r=d=>[F(o-(d[1]-s)),F(s+(d[0]-o))],l=d=>{for(let c of d.rooms)c.points=c.points.map(r);for(let c of d.furniture)[c.x,c.z]=r([c.x,c.z]),c.rotation=(c.rotation+90)%360;for(let c of d.placements)[c.x,c.z]=r([c.x,c.z]),c.rotation=((c.rotation??0)+90)%360;for(let c of d.outdoor)c.points=c.points.map(r);for(let c of d.walls??[])c.a=r(c.a),c.b=r(c.b);d.background&&([d.background.x,d.background.z]=r([d.background.x,d.background.z]),d.background.rotation=((d.background.rotation??0)+90)%360)};this._shiftAll?this.change(d=>{for(let c of d.floors)l(c);this.moveHouseExtras(d,r)}):this.change((d,c)=>l(c))}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(o=>o.id===e),t))}setArea(t){var o,s,r;let e=this.room;if(!e)return;let n=t?(s=(o=this.hass)==null?void 0:o.areas)==null?void 0:s[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(((r=this.hass)==null?void 0:r.areas)??{}).some(l=>l.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=At(n.points),{x0:o,z0:s,x1:r,z1:l}=i;t==="x"&&([o,r]=[e,e+(r-o)]),t==="z"&&([s,l]=[e,e+(l-s)]),t==="w"&&e>.05&&(r=o+e),t==="d"&&e>.05&&(l=s+e),this.updateRoom({points:[[F(o),F(s)],[F(r),F(s)],[F(r),F(l)],[F(o),F(l)]]})}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(s=>[...s]);o[t][e]=F(n),this.updateRoom({points:o})}async loadImage(t){this.loadingImages.add(t);try{let e=await so(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){var c,u;let e=t.target,n=(c=e.files)==null?void 0:c[0];if(e.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*o),s.height=Math.round(i.height*o),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let r=s.toDataURL("image/jpeg",.85),l=U("img");await ii(this.hass,l,r),this._images={...this._images,[l]:{url:r,aspect:s.height/s.width}};let d=(u=this.floor)!=null&&u.rooms.length?At(this.floor.rooms.flatMap(p=>p.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,F(d.x1-d.x0)):12,opacity:.5}})}selectFloor(t){this._floorId=t,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}renderFloorMenu(){let t=this._doc.floors,e=this.floor,n=this.isAdmin,i=this._toolMenu==="floor",o=()=>(this._toolMenu=null,this._floorMenu=!1);return b`<div class="fp3d-seg fp3d-seg-menu">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${i} @click=${()=>(this._toolMenu=i?null:"floor",this._floorMenu=!1,this._viewMenu=!1)}>
          <span class="fp3d-menu-label">${this.t("floor_label")}</span> ${(e==null?void 0:e.name)??this.t("floors")} <span class="fp3d-caret">▾</span>
        </button>
        ${i?b`<div class="fp3d-menu-veil" @click=${o}></div>
              <div class="fp3d-menu" role="menu">
                ${[...t].reverse().map(s=>b`<button role="menuitem" class="fp3d-menu-item ${s.id===this._floorId?"fp3d-menu-on":""}" @click=${()=>(o(),this.selectFloor(s.id))}>
                    ${s.name}<span class="fp3d-menu-more">${s.id===this._floorId?"\u2713":""}</span>
                  </button>`)}
                ${n?b`<div class="fp3d-menu-sep"></div>
                      <button
                        role="menuitem"
                        class="fp3d-menu-item"
                        aria-expanded=${this.freeHaFloors.length?this._floorMenu:$}
                        @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:(o(),this.addFloor())}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length?b`<span class="fp3d-menu-more">${this._floorMenu?"\u25BE":"\u25B8"}</span>`:$}
                      </button>
                      ${this._floorMenu?b`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map(s=>b`<button class="fp3d-chip" @click=${()=>(o(),this.addFloor(s))}>${s.name}</button>`)}
                            <button class="fp3d-chip" @click=${()=>(o(),this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`:$}
                      ${e?b`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${()=>{o(),this.setTool("select"),this.selectItem("room",null),this._sideOpen=!0}}
                          >
                            ${this.t("floor_settings")}
                          </button>`:$}`:$}
              </div>`:$}
      </div>
    </div>`}setTool(t){var n;let e=this.floor;if(this._tool=t,this._draft=[],this._cursor=null,this._pipeMode=!1,this._pipeDraft=null,t==="pool"&&((n=this.outdoorArea)==null?void 0:n.type)!=="pool"){let i=e==null?void 0:e.outdoor.find(o=>o.type==="pool");i&&this.selectItem("outdoor",i.id)}this.setSideFolded(!1)}renderToolBar(t){let e=this.isAdmin,n=!t||!e,i=uo.filter(h=>h!=="pool"),o={tool:"rect",label:this.t("tool_room"),choices:()=>[{label:this.t("tool_rect"),on:this._tool==="rect",pick:()=>this.setTool("rect")},{label:this.t("tool_polygon"),on:this._tool==="polygon",pick:()=>this.setTool("polygon")},{label:this.t("tool_measure"),on:this._tool==="measure",pick:()=>this.setTool("measure")}]},s={tool:"outdoor",label:this.t("tool_outdoor"),choices:()=>[...i.map(h=>({label:this.t(`out_${h}`),on:this._tool==="outdoor"&&(this._outdoorType??"lawn")===h,pick:()=>{this.setTool("outdoor"),this._outdoorType=h}})),{label:this.t("outdoor_shape_rect"),on:this._tool==="outdoor"&&!this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!1)},{label:this.t("outdoor_shape_free"),on:this._tool==="outdoor"&&this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!0)}]},r={tool:"pool",label:this.t("tool_pool"),choices:()=>[...["rect","round","oval","free"].map(h=>({label:this.t(`pool_shape_${h}`),on:this._tool==="pool"&&!this._pipeMode&&(this._poolShape??"rect")===h,pick:()=>{this.setTool("pool"),this._poolShape=h,this._outdoorFree=h==="free"}})),...Vt("pool")?[{label:this.t("pool_pipe_draw"),on:this._tool==="pool"&&!!this._pipeMode,pick:()=>(this.setTool("pool"),this._pipeMode=!0)}]:[]]},l=[{id:"build",label:this.t("tool_group_build"),entries:[o,{tool:"wall",label:this.t("tool_wall")},{tool:"opening",label:this.t("tool_opening")},{tool:"hole",label:this.t("tool_hole")},{tool:"roof",label:this.t("tool_roof")}]},{id:"outside",label:this.t("tool_group_outside"),entries:[s,r]}],d=h=>h.tool===this._tool||h===o&&(this._tool==="polygon"||this._tool==="measure"),c=h=>h===r?this._pipeMode?this.t("pool_pipe_draw"):this.t(`pool_shape_${this._poolShape??"rect"}`):h===s?this.t(`out_${this._outdoorType??"lawn"}`):h===o?this.t(`tool_${this._tool}`):"",u=()=>(this._toolMenu=null,this._toolOpen=null),p=(h,f)=>b`<button aria-pressed=${this._tool===h} ?disabled=${n} @click=${()=>(u(),this.setTool(h))}>${f}</button>`;return b`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool==="select"} ?disabled=${!t} @click=${()=>(u(),this.setTool("select"))}>${this.t("tool_select")}</button>
        ${l.map(h=>{let f=h.entries.find(d),g=this._toolMenu===h.id,_=f?`${f.label}${c(f)?`: ${c(f)}`:""}`:h.label;return b`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!f} aria-haspopup="menu" aria-expanded=${g} ?disabled=${n} @click=${()=>(this._toolMenu=g?null:h.id,this._toolOpen=null,this._viewMenu=!1)}>
              ${_} <span class="fp3d-caret">▾</span>
            </button>
            ${g?b`<div class="fp3d-menu-veil" @click=${u}></div>
                  <div class="fp3d-menu" role="menu">
                    ${h.entries.map(m=>{var w;let v=((w=m.choices)==null?void 0:w.call(m))??[],y=this._toolOpen===m.tool;return b`<button
                          role="menuitem"
                          class="fp3d-menu-item ${d(m)?"fp3d-menu-on":""}"
                          aria-expanded=${v.length?y:$}
                          @click=${()=>{v.length?this._toolOpen=y?null:m.tool:(this.setTool(m.tool),u())}}
                        >
                          ${m.label}${v.length?b`<span class="fp3d-menu-more">${y?"\u25BE":"\u25B8"}</span>`:$}
                        </button>
                        ${y?b`<div class="fp3d-menu-sub">
                              ${v.map(P=>b`<button
                                    class="fp3d-chip ${P.on?"fp3d-menu-on":""}"
                                    @click=${()=>{P.pick(),this._draft=[],u()}}
                                  >
                                    ${P.label}
                                  </button>`)}
                            </div>`:$}`})}
                  </div>`:$}
          </div>`})}
        ${p("furniture",this.t("tool_furniture"))} ${p("energy",this.t("tool_energy"))}
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button class="fp3d-undo" ?disabled=${!this._canUndo} @click=${()=>this.undo()} title=${`${this.t("undo")} (Ctrl+Z)`} aria-label=${this.t("undo")}>↶</button>
        <button class="fp3d-undo" ?disabled=${!this._canRedo} @click=${()=>this.redo()} title=${`${this.t("redo")} (Ctrl+Y)`} aria-label=${this.t("redo")}>↷</button>
      </div>
      <div class="fp3d-seg fp3d-seg-menu">
        <button aria-pressed=${this._split} title=${this.t("split_3d_hint")} @click=${()=>(u(),this.toggleSplit())}>${this.t("split_3d")}</button>
        <button aria-pressed=${this._wallPick} title=${this.t("wall_view_open")} @click=${h=>(u(),this.toggleWallPick(h.currentTarget))}>${this.t("wall_view")}</button>
        <button title=${this.t("fit_hint")} @click=${()=>(u(),this.fit())}>${this.t("fit")}</button>
      </div>`}render(){let t=this.floor,e=t?Tt(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return b`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?b`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:$}
            ${this.renderFloorMenu()} ${this.renderToolBar(t)}
            ${e!=null&&e.warnings.length?b`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:$}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint?b`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${()=>{this._phoneHint=!1;try{localStorage.setItem("neonplan3d.phoneHint","0")}catch{}}}
                  >
                    ✕
                  </button>
                </div>`:$}
            ${this.houseTool?b`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:$}
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
              ${this._tool==="roof"?C`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?C`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&t&&Vt("pool")?this.renderPoolPlan(t):$} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${t?this._wallPick?this.t("hint_wall_pick"):this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this._outdoorFree?this.t("hint_outdoor_free"):this._tool==="pool"&&this._jointPlace?this.t("hint_joint_place"):this._tool==="pool"&&this._pipeMode?this.t(this.poolArea?this._pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool"):this._tool==="pool"&&Vt("pool")?this.t("hint_pool_tech"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?b`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:$}
          ${this._split?this.render3d():$}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}renderBackground(t){let e=t==null?void 0:t.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return $;let[i,o]=this.toScreen([e.x,e.z]),s=e.width*this._view.scale,r=s*n.aspect,l=e.rotation??0,d=this.bgHandles();return C`<g transform="rotate(${l} ${i+s/2} ${o+r/2})">
      <image href=${n.url} x=${i} y=${o} width=${s} height=${r} opacity=${e.opacity} preserveAspectRatio="none" pointer-events=${d?"auto":"none"} data-bg="1" style=${d?"cursor:move":""} />
      ${d?C`<rect class="fp3d-bg-frame" x=${i} y=${o} width=${s} height=${r} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+s} cy=${o+r} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+s/2} y1=${o} x2=${i+s/2} y2=${o-30} />
            <circle cx=${i+s/2} cy=${o-30} r="16" class="fp3d-hit" />
            <circle cx=${i+s/2} cy=${o-30} r="8" />
            <path d="M${i+s/2-4} ${o-31}a4 4 0 1 1 2 3.5" />
          </g>`:$}
    </g>${this.renderBgRuler()}`}bgHandles(){var t;return!!((t=this.floor)!=null&&t.background)&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){var n;let t=(n=this._bgLevel)!=null&&n.length?this._bgLevel:this._bgRuler;if(!(t!=null&&t.length))return $;let e=t.map(i=>this.toScreen(i));return C`<g class="fp3d-bg-ruler">
      ${e.length===2?C`<line x1=${e[0][0]} y1=${e[0][1]} x2=${e[1][0]} y2=${e[1][1]} />`:$}
      ${e.map(([i,o])=>C`<circle cx=${i} cy=${o} r="6" />`)}
    </g>`}applyBgLevel(t,e){var h;let n=(h=this.floor)==null?void 0:h.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(e[0]-t[0],e[1]-t[1])<.05)return;let o=Math.atan2(e[1]-t[1],e[0]-t[0]),s=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(s)<1e-4)return;let r=n.width*i.aspect,l=[n.x+n.width/2,n.z+r/2],d=l[0]-t[0],c=l[1]-t[1],u=[t[0]+d*Math.cos(s)-c*Math.sin(s),t[1]+d*Math.sin(s)+c*Math.cos(s)],p=(n.rotation??0)+s*180/Math.PI;p=Math.round((((p+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:p,x:F(u[0]-n.width/2),z:F(u[1]-r/2)}})}applyBgRuler(t){let e=this.floor,n=e==null?void 0:e.background,i=this._bgRuler,o=n?this._images[n.image_id]:void 0;if(!n||!o||!i||i.length<2||!(t>0))return;let s=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(s<1e-4)return;let r=t/s,l=n.width*o.aspect,d=[n.x+n.width/2,n.z+l/2],c=i[0],u=[c[0]+r*(d[0]-c[0]),c[1]+r*(d[1]-c[1])],p=n.width*r,h=l*r;this.updateFloor({background:{...n,width:F(p),x:F(u[0]-p/2),z:F(u[1]-h/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(t,e,n){let i=t.width*n,o=t.x+t.width/2,s=t.z+i/2,r=-(t.rotation??0)*Math.PI/180,l=e[0]-o,d=e[1]-s;return[o+l*Math.cos(r)-d*Math.sin(r)-t.x,s+l*Math.sin(r)+d*Math.cos(r)-t.z]}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,o=t>=20?1:5,[s,r]=this.toWorld(0,0),[l,d]=this.toWorld(e,n),c=[],u=(f,g)=>{for(let _=Math.ceil(s/f)*f;_<=l;_+=f){let m=this.toScreen([_,0])[0];c.push(C`<line class=${g} x1=${m} y1="0" x2=${m} y2=${n} />`)}for(let _=Math.ceil(r/f)*f;_<=d;_+=f){let m=this.toScreen([0,_])[1];c.push(C`<line class=${g} x1="0" y1=${m} x2=${e} y2=${m} />`)}};i<o&&u(i,"fp3d-grid-minor"),u(o,"fp3d-grid-major");let[p,h]=this.toScreen([0,0]);return c.push(C`<circle class="fp3d-origin" cx=${p} cy=${h} r="3" />`),C`<g pointer-events="none">${c}</g>`}renderGhost(){var n;let t=((n=this._doc)==null?void 0:n.floors.findIndex(i=>i.id===this._floorId))??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?C`<g pointer-events="none">${e.rooms.map(i=>C`<polygon class="fp3d-ghost" points=${i.points.map(o=>this.toScreen(o).join(",")).join(" ")} />`)}</g>`:$}renderWalls(t){var n;let e=((n=this.floor)==null?void 0:n.height)??2.5;return C`<g pointer-events="none">${t.map(i=>{let o=i.height!==void 0&&i.height<e-.01,s=`fp3d-wall${i.exterior?" fp3d-wall-ext":""}${o?" fp3d-wall-low":""}`;return C`<polygon class=${s} points=${i.footprint.map(r=>this.toScreen(r).join(",")).join(" ")} />`})}</g>`}edgeParts(t,e){let n=this.floor;if(!n)return[0];let o=Tt(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(r=>r.room_id===t.id&&r.edge===e).map(r=>r.t0));return o.length?[...new Set(o)].sort((s,r)=>s-r):[0]}setEdgeHeight(t,e,n,i){let o=this.floor;if(!o||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(t,e).length;this.change((d,c)=>{let u=c.rooms.find(g=>g.id===t.id);if(!u)return;let p=(u.wall_heights??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);let h=p[e],f=Array.isArray(h)?[...h]:new Array(l).fill(typeof h=="number"?h:null);for(;f.length<l;)f.push(null);f[i]=n,p[e]=f.every(g=>g===f[0])?f[0]:f,u.wall_heights=p.every(g=>g===null)?void 0:p});return}let r=Tt(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(l=>l.sources.some(d=>d.room_id===t.id&&d.edge===e)).flatMap(l=>l.sources);r.some(l=>l.room_id===t.id&&l.edge===e)||r.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((l,d)=>{for(let c of r){let u=d.rooms.find(h=>h.id===c.room_id);if(!u)continue;let p=(u.wall_heights??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[c.edge]=n,u.wall_heights=p.every(h=>h===null)?void 0:p}})}renderCameraDetections(t){if(!this.hass)return $;let e=this.hass,n=Qa(e,t),i=[...new Set(n.map(s=>Ja(e,s)))],o=ft("camera_cockpit");return b`<p class="fp3d-sub fp3d-wide">
      ${n.length?b`${o?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:i.map(s=>this.t(`detect_${s}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(t,e,n){if(!this.isAdmin)return;let i=t.points,o=Math.hypot(i[(e+1)%i.length][0]-i[e][0],i[(e+1)%i.length][1]-i[e][1]),s=this.edgeParts(t,e),r=n===void 0?0:s[n],l=n===void 0?o:s[n+1]??o;if(l-r<.4)return;let d=Math.round((r+l)/2*100)/100;this.change((c,u)=>{var g;let p=u.rooms.find(_=>_.id===t.id);if(!p)return;let h=(p.wall_splits??[]).slice(0,p.points.length);for(;h.length<p.points.length;)h.push(null);h[e]=[...h[e]??[],d].sort((_,m)=>_-m),p.wall_splits=h;let f=(g=p.wall_heights)==null?void 0:g[e];if(Array.isArray(f)){let _=n??0;f.splice(_+1,0,f[_]??null)}})}moveSplit(t,e,n,i){let o=t.points,s=Math.hypot(o[(e+1)%o.length][0]-o[e][0],o[(e+1)%o.length][1]-o[e][1]),r=this.edgeParts(t,e).filter(d=>Math.abs(d-n)>.001&&d>0),l=Math.max(.1,Math.min(s-.1,Math.round(i*100)/100));r.some(d=>Math.abs(d-l)<.1)&&(l=n),this.change((d,c)=>{var f;let u=c.rooms.find(g=>g.id===t.id),p=(f=u==null?void 0:u.wall_splits)==null?void 0:f[e];if(!p)return;let h=p.findIndex(g=>Math.abs(g-n)<.001);h>=0&&(p[h]=l),p.sort((g,_)=>g-_)})}joinSplit(t,e,n,i){this.change((o,s)=>{var c,u;let r=s.rooms.find(p=>p.id===t.id);if(!((c=r==null?void 0:r.wall_splits)!=null&&c[e]))return;let l=r.wall_splits[e].filter(p=>Math.abs(p-n)>.001);r.wall_splits[e]=l.length?l:null,r.wall_splits.every(p=>!p)&&(r.wall_splits=void 0);let d=(u=r.wall_heights)==null?void 0:u[e];Array.isArray(d)&&(d.splice(i,1),d.every(p=>p===d[0])&&(r.wall_heights[e]=d[0]??null))})}renderSplitMarks(t){let e=t.points;return C`${(t.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=e.length)return[];let o=e[i],s=e[(i+1)%e.length],r=Math.hypot(s[0]-o[0],s[1]-o[1])||1,l=(s[0]-o[0])/r,d=(s[1]-o[1])/r;return n.map(c=>{let[u,p]=this.toScreen([o[0]+l*c,o[1]+d*c]);return C`<line class="fp3d-split-mark" x1=${u-d*7} y1=${p+l*7} x2=${u+d*7} y2=${p-l*7} />`})})}`}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length,i=this._doc.settings,o=new Set;for(let r of Tt(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(r.exterior)for(let l of r.sources)l.room_id===t.id&&o.add(l.edge);let s=(r,l)=>this.change((d,c)=>{let u=c.rooms.find(h=>h.id===t.id);if(!u)return;let p=(u.wall_thickness??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[r]=l,u.wall_thickness=p.every(h=>h===null)?void 0:p});return b`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${t.points.flatMap((r,l)=>{var _;let d=t.points[(l+1)%n],c=Math.hypot(d[0]-r[0],d[1]-r[1]),u=((_=t.wall_heights)==null?void 0:_[l])??null,p=()=>this._edgeHi=l,h=()=>this._edgeHi=null,f=this.edgeParts(t,l);return(f.length>1?f.map((m,v)=>v):[void 0]).map(m=>{var P,z,E;let v=m===void 0?Array.isArray(u)?u[0]??null:u:Array.isArray(u)?u[m]??null:u,y=m===void 0?c:(f[m+1]??c)-f[m],w=S=>this.setEdgeHeight(t,l,S,m);return b`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${v!==null?" fp3d-edge-low":""}"
            @mouseenter=${p}
            @mouseleave=${h}
            @focusin=${p}
            @focusout=${h}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${m===void 0?"":` \xB7 ${this.t("wall_part",{n:m+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(y,2)}</span
              ></span
            >
            ${v===0?b`<span class="fp3d-muted">${this.t("wall_none")}</span>`:this.len(this.t("wall_height"),v??e,S=>w(S>=e-.005?null:Math.max(.05,S)),.05,.05)}
            ${this.isAdmin&&v!==null?b`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>w(null)}>↥</button>`:$}
            ${this.isAdmin&&v!==0?b`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>w(0)}>${this.t("wall_none")}</button>`:$}
            ${this.isAdmin&&y>=.4?b`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(t,l,m)}>✂</button>`:$}
            ${(m===void 0||m===0)&&v!==0?b`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(t.id,l)}>▦</button>`:$}
            ${(m===void 0||m===0)&&v!==0?b`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),((P=t.wall_thickness)==null?void 0:P[l])??(o.has(l)?i.wall_exterior:i.wall_interior),S=>{let x=o.has(l)?i.wall_exterior:i.wall_interior,k=Math.min(1.5,Math.max(.02,Math.round(S*1e3)/1e3));s(l,Math.abs(k-x)<5e-4?null:k)},.01,.02)}
                  ${this.isAdmin&&((z=t.wall_thickness)==null?void 0:z[l])!=null?b`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:$}</span
                >`:$}
            ${m!==void 0&&m>0&&(((E=t.wall_splits)==null?void 0:E[l])??[]).some(S=>Math.abs(S-f[m])<.001)?b`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),f[m],S=>this.moveSplit(t,l,f[m],S),.05,.1)}
                  ${this.isAdmin?b`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(t,l,f[m],m)}>⨉</button>`:$}</span
                >`:$}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!e||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return $;if(e.pool_shape){let n=At(e.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return C`${i.map((o,s)=>{let[r,l]=this.toScreen(o);return C`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${e.id}:${s}`}><circle cx=${r} cy=${l} r="16" class="fp3d-hit" /><rect x=${r-5} y=${l-5} width="10" height="10" /></g>`})}`}return C`${e.points.map((n,i)=>{let[o,s]=this.toScreen(n);return C`<g class="fp3d-vertex" data-out-vertex=${`${e.id}:${i}`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`})}`}renderOutdoor(t){return C`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(Xt(e.points)),s=At(e.points),r=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return C`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${r?C`<text x=${i} y=${o+4}>${this.t(`out_${e.type}`)}</text>`:$}
      </g>`})}</g>`}renderOutdoorForm(t){let e=this.isAdmin,n=mi(t.points),i=At(t.points),o=(s,r)=>{let{x0:l,z0:d,x1:c,z1:u}=i;s==="x"&&([l,c]=[r,r+(c-l)]),s==="z"&&([d,u]=[r,r+(u-d)]),s==="w"&&(c=l+Math.max(.1,r)),s==="d"&&(u=d+Math.max(.1,r)),this.updateOutdoor({points:[[l,d],[c,d],[c,u],[l,u]].map(([p,h])=>[F(p),F(h)])})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${uo.map(s=>b`<option value=${s} ?selected=${s===t.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?b`${this.len(this.t("x"),i.x0,s=>o("x",s))} ${this.len(this.t("z"),i.z0,s=>o("z",s))}
            ${this.len(this.t("width"),i.x1-i.x0,s=>o("w",s),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,s=>o("d",s),.01,.1)}`:$}
        ${si(t.type)?this.len(this.t("outdoor_height"),t.height??po[t.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,F(s)))}),.05,.1):t.type==="balcony"?this.len(this.t("balcony_rail"),t.height??1,s=>this.updateOutdoor({height:Math.min(2,Math.max(.4,F(s)))}),.05,.4):$}
        ${this.len(this.t("outdoor_offset"),t.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,F(s)))||null}),.05)}
        ${t.type!=="pool"?b`${this.len(this.t("outdoor_slope"),t.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,F(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!e} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${fr.map(s=>b`<option value=${s} ?selected=${s===(t.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:$}
        ${t.type==="pool"?this.renderPoolShape(t):$}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${t.outline!==!1} ?disabled=${!e} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${t.type==="fence"||t.type==="pergola"?b`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:$}
        ${t.type==="pergola"?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.bracing} ?disabled=${!e} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!t.cut} ?disabled=${!e} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${t.slope?b`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:$}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${t.type==="pool"?this.renderPoolPro(t):$}
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:$}
    </section>`}openWallView(t,e,n=null){this._wallView={roomId:t,edge:e},this._wallSel=n,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallFrame=null,this.wallDrag=null}wallSelection(){var e,n;if(this._wallMulti.length)return this._wallMulti;let t=this._wallSel?(e=this.floor)==null?void 0:e.furniture.find(i=>i.id===this._wallSel):void 0;return t?t.group&&!this._wallSingle?(((n=this.floor)==null?void 0:n.furniture)??[]).filter(i=>i.group===t.group).map(i=>i.id):[t.id]:[]}wallToggle(t){let e=this.wallSelection(),n=this.withGroups([t]),i=e.includes(t)?e.filter(o=>!n.includes(o)):[...new Set([...e,...n])];this.wallChoose(i,t)}wallChoose(t,e=t[0]??null){this._wallSingle=!1,this._wallSel=t.length?e&&t.includes(e)?e:t[0]:null,this._wallMulti=[];let n=this.wallSelection();t.length>1&&!(t.length===n.length&&t.every(i=>n.includes(i)))&&(this._wallMulti=t),this._wallGap=null}moveSetOnWall(t,e,n,i,o=this._doc,s=!0){let r=new Set(e);this.change((l,d)=>{for(let c of d.furniture)r.has(c.id)&&(Object.assign(c,ki(t,c,n)),i!==null&&re(c)&&(c.mount_y=Math.round(Math.min(Hi,Math.max(0,Rt(d,c)+i))*1e3)/1e3))},o,s)}wallGapAt(t,e,n,i,o){let s=o<1.2,r=t.length,l=[...sn(t,e,n).filter(u=>s?u.y0<1:u.y1>1.2).map(u=>[u.s0,u.s1]),...xi(t,e).filter(u=>s?u.y0<.9:u.y1>1.2).map(u=>[u.s0,u.s1])];if(l.some(([u,p])=>i>u&&i<p))return null;let d=Math.max(0,...l.filter(([,u])=>u<=i).map(([,u])=>u)),c=Math.min(r,...l.filter(([u])=>u>=i).map(([u])=>u));return c-d>=.1?{s0:Math.round(d*1e3)/1e3,s1:Math.round(c*1e3)/1e3,low:s}:null}openWallViewFor(t){let e=this.floor;if(!e)return;let n=e.rooms.find(s=>s.points.length>=3&&Y([t.x,t.z],s.points));if(!n)return;let i=-1,o=1/0;n.points.forEach((s,r)=>{let l=n.points[(r+1)%n.points.length],d=Math.hypot(l[0]-s[0],l[1]-s[1])||1,c=Math.max(0,Math.min(1,((t.x-s[0])*(l[0]-s[0])+(t.z-s[1])*(l[1]-s[1]))/(d*d))),u=Math.hypot(t.x-(s[0]+(l[0]-s[0])*c),t.z-(s[1]+(l[1]-s[1])*c));u<o&&(o=u,i=r)}),i>=0&&this.openWallView(n.id,i,t.id)}openRoomWalls(t){let e=this.floor;if(!e)return;let n=0,i=-1;t.points.forEach((o,s)=>{let r=sn(on(t,s),e,t).length;r>i&&(i=r,n=s)}),this.openWallView(t.id,n)}setWallView3d(t){this._wallView3d=t,this.wall3dKey="";try{localStorage.setItem("neonplan3d.wall3d",t?"1":"0")}catch{}}setupWall3d(t,e,n){let i=`${e.id}|${n}`;if(this.wall3dKey===i&&this.wall3dEl===t)return;let o=this.wall3dEl!==t;this.wall3dKey=i,this.wall3dEl=t,o&&t.addEventListener("pointerdown",s=>this.runDown3d(s),{capture:!0}),(async()=>{var h;let s;for(let f=0;f<120&&!(s=t.viewer);f++)await new Promise(g=>setTimeout(g,50));o&&await new Promise(f=>setTimeout(f,250));let r=this.floor;if(!s||!r||this.wall3dKey!==i)return;if(!s.__npWall){s.__npWall=!0,s.updateWalls=function(){for(let g of this.floors)g.mask.standing.value=65535,g.mask.glass.value=0},s.labels.style.display="none";let f=new CSSStyleSheet;f.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),t.shadowRoot&&(t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,f]),s.camera.fov=58,s.camera.updateProjectionMatrix(),s.controls.minRadius=.6,s.controls.leftDragTurns=!1}let l=on(e,n),d=Math.max(1.5,...e.points.map(f=>_t(l,f).d)),c=ge(l,l.length/2,0),u=r.elevation+(((h=s.floorMap.get(r.id))==null?void 0:h.y)??0)+1.15;s.controls.maxRadius=Math.max(1.4,d-.25);let p=s.getView();p.target.set(c[0],u,c[1]),s.flyTo({...p,radius:Math.max(1.2,Math.min(d*.8,d-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},o?0:650),s.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let t=()=>{var h,f;this.liftRaf=0;let e=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!(e!=null&&e.isConnected)||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(t),!n))return;let i=this.floor,o=this._wallSel?i==null?void 0:i.furniture.find(g=>g.id===this._wallSel):void 0,s=e.viewer;if(!o||!i||!s||!re(o)||o.locked){n.hidden=!0;return}let r=Rt(i,o),l=i.elevation+(((h=s.floorMap.get(i.id))==null?void 0:h.y)??0)+r+o.h,d=s.camera.position.clone().set(o.x,l+.12,o.z).project(s.camera);if(d.z>1){n.hidden=!0;return}n.hidden=!1;let c=e.getBoundingClientRect(),u=((f=n.offsetParent)==null?void 0:f.getBoundingClientRect())??c;n.style.transform=`translate(${c.left-u.left+(d.x+1)/2*c.width}px, ${c.top-u.top+(1-d.y)/2*c.height}px)`;let p=n.querySelector("b");p&&(p.textContent=this.m(Math.round(r*100)/100,2))};this.liftRaf=requestAnimationFrame(t)}liftDown(t){let e=this.floor,n=this._wallSel?e==null?void 0:e.furniture.find(c=>c.id===this._wallSel):void 0,i=this.wall3dEl,o=i==null?void 0:i.viewer;if(!e||!n||!o||!this.isAdmin)return;t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId);let s=Math.hypot(o.camera.position.x-n.x,o.camera.position.z-n.z)||1,r=this.wall3dEl.clientHeight||1,l=e.rooms.find(c=>c.points.length>=3&&Y([n.x,n.z],c.points)),d=Math.max(e.height,(l==null?void 0:l.ceiling_height)??0);this.lift={id:n.id,y:Rt(e,n),startY:t.clientY,perPx:2*s*Math.tan(o.camera.fov*Math.PI/360)/r,base:this._doc,top:Math.max(0,d-n.h),moved:!1}}liftMove(t){var s;let e=this.lift,n=this._wallView?(s=this.floor)==null?void 0:s.rooms.find(r=>r.id===this._wallView.roomId):void 0;if(!e||!n)return;let i=(e.startY-t.clientY)*e.perPx;if(!e.moved&&Math.abs(t.clientY-e.startY)<3)return;e.moved=!0;let o=Math.min(e.top,Math.max(0,Math.round((e.y+i)*100)/100));this.moveOnWall(on(n,this._wallView.edge),e.id,0,o,e.base,!1)}liftUp(){let t=this.lift;this.lift=null,t!=null&&t.moved&&this.pushHistory(t.base)}wallPickTip=[0,0];toggleWallPick(t){var i;let e=(i=t.closest(".fp3d-toolbar"))==null?void 0:i.getBoundingClientRect(),n=t.getBoundingClientRect();this.wallPickTip=e?[n.left-e.left+n.width/2,n.bottom-e.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(t){let e=this.floor;if(!e)return;let n=null;for(let i of e.rooms){if(i.points.length<3)continue;let o=Y(t,i.points)?-.25:0;i.points.forEach((s,r)=>{let l=i.points[(r+1)%i.points.length],d=(l[0]-s[0])**2+(l[1]-s[1])**2||1,c=Math.max(0,Math.min(1,((t[0]-s[0])*(l[0]-s[0])+(t[1]-s[1])*(l[1]-s[1]))/d)),u=Math.hypot(t[0]-(s[0]+(l[0]-s[0])*c),t[1]-(s[1]+(l[1]-s[1])*c));u<.6&&(!n||u+o<n.d)&&(n={room:i,edge:r,d:u+o})})}if(!n){let i=e.rooms.find(o=>o.points.length>=3&&Y(t,o.points));if(!i)return;this._wallPick=!1,this.openRoomWalls(i),this.techPick&&this.enterTech();return}this._wallPick=!1,this.openWallView(n.room.id,n.edge),this.techPick&&this.enterTech()}techDoc3d(){var n;let t=this._doc3d;if(((n=this.techDocCache)==null?void 0:n.src)===t)return this.techDocCache.doc;let e={...t,floors:t.floors.map(i=>({...i,furniture:i.furniture.filter(o=>St.includes(o.type))}))};return this.techDocCache={src:t,doc:e},e}techDocCache=null;enterTech(){this.techPick=!1,this._techMode=!0,this._wallSel=null,this._wallMulti=[],this._runSel=null,this._runDraft=null,this._feedKind=null,this._runMode="draw"}turnOnWall(t,e){let n=this._doc.settings.wall_interior;this.change((i,o)=>{let s=o.furniture.find(d=>d.id===t);if(!s)return;s.rotation=Math.round((e%360+360)%360);let[r,l]=Ho(o,s,s.x,s.z,n,.6);Object.assign(s,{x:r,z:l})})}moveFromWall(t,e,n){this.change((i,o)=>{let s=o.furniture.find(r=>r.id===e);s&&(s.x=Math.round((s.x+t.n[0]*n)*1e3)/1e3,s.z=Math.round((s.z+t.n[1]*n)*1e3)/1e3)})}moveOnWall(t,e,n,i,o=this._doc,s=!0){this.change((r,l)=>{let d=l.furniture.find(c=>c.id===e);d&&(Object.assign(d,ki(t,d,n)),i!==null&&(d.mount_y=Math.round(Math.min(Hi,Math.max(0,i))*1e3)/1e3))},o,s)}alongAxis(t,e){let n=this.wallTurn(t,e)*Math.PI/180;return Math.abs(Math.sin(n))<.05?"w":Math.abs(Math.cos(n))<.05?"d":null}resizeOnWall(t,e,n,i,o,s,r=this._doc,l=!0){this.change((d,c)=>{let u=c.furniture.find(h=>h.id===e);if(!u)return;let p=this.alongAxis(t,u);if(n!==null&&i!==null&&p&&i-n>=.05){let h=Nt(u).map(g=>_t(t,g).s),f=(Math.min(...h)+Math.max(...h))/2;u[p]=F(i-n),Object.assign(u,ki(t,u,(n+i)/2-f))}if(o!==null||s!==null){let h=Rt(c,u),f=o??h,g=s??h+u.h;if(g-f<.03)return;u.h=F(g-f),o!==null&&re(u)&&(u.mount_y=F(Math.max(0,f)))}},r,l)}wallTurn(t,e){let n=Math.atan2(-t.n[0],t.n[1])*180/Math.PI;return((e.rotation-n)%360+360)%360}wallPicKey(t,e){return`${e.type}|${e.w}|${e.d}|${e.h}|${e.variant??""}|${Math.round(this.wallTurn(t,e))}`}async askWallPics(t,e){let n=e.filter(i=>!this.wallPicsAsked.has(this.wallPicKey(t,i)));if(n.length){for(let i of n)this.wallPicsAsked.add(this.wallPicKey(t,i));try{let i=await Di();for(let o of n){let s=i.furnitureFront({type:o.type,w:o.w,d:o.d,h:o.h,variant:o.variant,lamp:gi[o.type]??null},this.wallTurn(t,o),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(t,o),s)}}catch{}this._wallPicTick++}}renderWallView(){var It,Ft;let t=this._wallView,e=this.floor,n=t?e==null?void 0:e.rooms.find(R=>R.id===t.roomId):void 0;if(!t||!e||!n||t.edge>=n.points.length)return $;let i=n.points.length,o=on(n,t.edge),s=o.length,r=Math.max(e.height,n.ceiling_height??0),l=this._techMode?sn(o,e,n,1.6).filter(R=>{var T;return St.includes(((T=e.furniture.find(H=>H.id===R.id))==null?void 0:T.type)??"")}):sn(o,e,n),d=xi(o,e),c=R=>o.rightward?R:s-R,u=(R,T)=>[Math.min(c(R),c(T)),Math.abs(T-R)],p=R=>r-R,h=this.isAdmin,f=this._wallSel?e.furniture.find(R=>R.id===this._wallSel):void 0,g=f?l.find(R=>R.id===f.id)??(()=>{let R=Nt(f).map(H=>_t(o,H)),T=Rt(e,f);return{kind:"furniture",id:f.id,s0:Math.min(...R.map(H=>H.s)),s1:Math.max(...R.map(H=>H.s)),y0:T,y1:T+f.h,d:Math.min(...R.map(H=>H.d))}})():null,_=!!f&&re(f),m=this.wallSelection(),v=m.length>1,y=l.filter(R=>m.includes(R.id)),w=y.length?{s0:Math.min(...y.map(R=>R.s0)),s1:Math.max(...y.map(R=>R.s1)),y0:Math.min(...y.map(R=>R.y0)),y1:Math.max(...y.map(R=>R.y1))}:null,P=R=>this.m(R,2),z=R=>{let T=R.currentTarget.closest("svg"),H=T.createSVGPoint();return H.x=R.clientX,H.y=R.clientY,H.matrixTransform(T.getScreenCTM().inverse())},E=R=>[0,s,...l.filter(T=>!R.includes(T.id)).flatMap(T=>[T.s0,T.s1]),...d.flatMap(T=>[T.s0,T.s1])],S=(R,T)=>{if(!h)return;if(J&&this._runMode){this.techPress=J.pt(R),this.runDown(R,J);return}if(R.stopPropagation(),this._runSel=null,R.shiftKey||this._multiMode){this.wallToggle(T);return}(!this.wallSelection().includes(T)||this._wallSingle)&&this.wallChoose([T]);let H=this.wallSelection(),V=z(R);R.currentTarget.closest("svg").setPointerCapture(R.pointerId);let N=l.filter(Z=>H.includes(Z.id));if(H.length>1&&H.some(Z=>this.isFixedItem("furniture",Z)))return;if(H.length>1&&N.length){let Z=Math.min(...N.map(et=>et.s0));this.wallDrag={id:T,ids:H,w:Math.max(...N.map(et=>et.s1))-Z,x:V.x,y:V.y,base:this._doc,s0:Z,y0:0,lift:N.every(et=>{let rt=e.furniture.find(pt=>pt.id===et.id);return!!rt&&re(rt)}),moved:!1};return}let nt=l.find(Z=>Z.id===T),K=e.furniture.find(Z=>Z.id===T);this.wallDrag={id:T,x:V.x,y:V.y,base:this._doc,s0:nt.s0,y0:nt.y0,lift:!!K&&re(K),moved:!1}},x=R=>{if(!h||this._runMode)return;let T=z(R);if(R.shiftKey||this._multiMode){R.currentTarget.closest("svg").setPointerCapture(R.pointerId),this._wallFrame={x0:T.x,y0:T.y,x1:T.x,y1:T.y};return}this._wallSel=null,this._wallMulti=[],this._wallSingle=!1;let H=o.rightward?T.x:s-T.x;this._wallGap=H>=0&&H<=s&&T.y>=0&&T.y<=r?this.wallGapAt(o,e,n,H,r-T.y):null},k=R=>{let T=this.wallResize;if(T){let ct=z(R);T.moved=!0;let jt=E([T.id]).map(kt=>c(kt)),Lt=kt=>{if(kt=Math.round(kt*100)/100,!R.altKey){for(let Ht of jt)if(Math.abs(kt-Ht)<.04)return Ht}return kt};if(T.side==="l"||T.side==="r"){let kt=T.side==="l"?Math.min(Lt(ct.x),T.x1-.1):T.x0,Ht=T.side==="r"?Math.max(Lt(ct.x),T.x0+.1):T.x1,[$e,qi]=o.rightward?[kt,Ht]:[s-Ht,s-kt];this.resizeOnWall(o,T.id,$e,qi,null,null,T.base,!1)}else{let kt=Math.round((r-ct.y)*100)/100;T.side==="t"?this.resizeOnWall(o,T.id,null,null,null,Math.max(T.y0+.05,Math.min(r,kt)),T.base,!1):this.resizeOnWall(o,T.id,null,null,Math.max(0,Math.min(T.y1-.05,kt)),null,T.base,!1)}return}let H=this._wallFrame;if(H){let ct=z(R);this._wallFrame={...H,x1:ct.x,y1:ct.y};return}let V=this.wallDrag;if(!V)return;let N=z(R),nt=N.x-V.x,K=V.y-N.y;if(!V.moved&&Math.hypot(nt,K)<.02)return;V.moved=!0;let Z=l.find(ct=>ct.id===V.id),et=V.ids?V.w??0:Z?Z.s1-Z.s0:0,rt=V.s0+(o.rightward?nt:-nt);if(rt=Math.round(rt*100)/100,!R.altKey)for(let ct of E(V.ids??[V.id]))Math.abs(rt-ct)<.04?rt=ct:Math.abs(rt+et-ct)<.04&&(rt=ct-et);if(V.ids){this.moveSetOnWall(o,V.ids,rt-V.s0,V.lift?Math.round(K*100)/100:null,V.base,!1);return}let pt=V.lift?Math.round((V.y0+K)*100)/100:null;this.moveOnWall(o,V.id,rt-V.s0,pt,V.base,!1)},M=()=>{let R=this.wallResize;if(R){this.wallResize=null,R.moved&&this.pushHistory(R.base);return}let T=this._wallFrame;if(T){this._wallFrame=null;let[V,N]=[Math.min(T.x0,T.x1),Math.max(T.x0,T.x1)],[nt,K]=[Math.min(T.y0,T.y1),Math.max(T.y0,T.y1)],Z=l.filter(et=>{let[rt,pt]=u(et.s0,et.s1),ct=rt+pt/2,jt=p((et.y0+et.y1)/2);return ct>=V&&ct<=N&&jt>=nt&&jt<=K}).map(et=>et.id);Z.length&&this.wallChoose([...new Set([...this.wallSelection(),...this.withGroups(Z)])]);return}let H=this.wallDrag;this.wallDrag=null,H!=null&&H.moved&&this.pushHistory(H.base)},I=R=>{if(this._runMode&&(R.key==="Escape"||R.key==="Enter")){R.preventDefault(),R.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(R.key==="Escape"){this._wallView=null;return}if((R.key==="Delete"||R.key==="Backspace")&&h&&J&&this._runSel&&!m.length&&!R.target.closest("input, select, textarea")){R.preventDefault();let nt=this._runSel.pipe;this.changePool(J.pool.id,K=>K.pipes=(K.pipes??[]).filter(Z=>Z.id!==nt)),this._runSel=null;return}if((R.key==="Delete"||R.key==="Backspace")&&h&&m.length&&!R.target.closest("input, select, textarea")){R.preventDefault(),this.deleteOnWall(m);return}if(!g&&(R.key==="ArrowLeft"||R.key==="ArrowRight")){R.preventDefault(),W(R.key==="ArrowLeft"?L:O);return}if(!g||!h||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(R.key)||R.target.closest("input, select, textarea"))return;R.preventDefault();let T=R.shiftKey?.1:.01,H=R.key==="ArrowRight"?T:R.key==="ArrowLeft"?-T:0,V=o.rightward?H:-H,N=R.key==="ArrowUp"?T:R.key==="ArrowDown"?-T:0;if(v)return this.moveSetOnWall(o,m,V,N||null);this.moveOnWall(o,g.id,V,_&&N?g.y0+N:null)},A=v&&w?w:g,j=A?(()=>{let R=A,[T,H]=u(R.s0,R.s1),V=p(R.y0),N=Math.min(r+.25,p(0)+.25);return C`<g class="fp3d-wv-dims">
            ${T>.03?C`<line x1="0" y1=${N} x2=${T} y2=${N} /><text x=${T/2} y=${N-.05}>${P(T)}</text>`:$}
            ${s-T-H>.03?C`<line x1=${T+H} y1=${N} x2=${s} y2=${N} /><text x=${T+H+(s-T-H)/2} y=${N-.05}>${P(s-T-H)}</text>`:$}
            ${R.y0>.03?C`<line x1=${T+H/2} y1=${V} x2=${T+H/2} y2=${r} /><text x=${T+H/2+.05} y=${(V+r)/2} class="fp3d-wv-up">${P(R.y0)}</text>`:$}
          </g>`})():$,O=(t.edge+(o.rightward?1:-1)+i)%i,L=(t.edge+(o.rightward?-1:1)+i)%i,D=R=>this.t("wall_n",{a:R+1,b:(R+1)%i+1}),W=R=>this.openWallView(n.id,R);this._wallPicTick,this.askWallPics(o,l.map(R=>e.furniture.find(T=>T.id===R.id)).filter(R=>!!R));let tt=`${n.id}:${t.edge}`,Q=((It=this.wvZoom)==null?void 0:It.key)===tt?this.wvZoom:null,X=s+1,G=r+.9,ot=(R,T,H)=>{let V=Math.min(8,Math.max(1,R)),N=X/V,nt=G/V;return{k:V,w:N,h:nt,x0:Math.min(-.5+X-N,Math.max(-.5,T)),y0:Math.min(-.35+G-nt,Math.max(-.35,H))}},q=ot((Q==null?void 0:Q.k)??1,(Q==null?void 0:Q.x0)??-.5,(Q==null?void 0:Q.y0)??-.35),ht=(R,T,H)=>{let V=ot(R,T,H);this.wvZoom=V.k<=1.001?null:{key:tt,k:V.k,x0:V.x0,y0:V.y0},this.requestUpdate()},zt=(R,T,H)=>{let V=Math.min(8,Math.max(1,H));ht(V,R-(R-q.x0)*q.k/V,T-(T-q.y0)*q.k/V)},Zt=R=>{let T=this.wvPinch,[H,V]=[...this.wvTouch.values()],N=Math.hypot(H.x-V.x,H.y-V.y),nt=(H.x+V.x)/2,K=(H.y+V.y)/2,Z=R.getBoundingClientRect(),et=X/T.k,rt=G/T.k,pt=Math.min(Z.width/et,Z.height/rt),ct=Z.left+(Z.width-et*pt)/2,jt=Z.top+(Z.height-rt*pt)/2,Lt=T.x0+(T.mx-ct)/pt,kt=T.y0+(T.my-jt)/pt,Ht=Math.min(8,Math.max(1,T.k*N/Math.max(1,T.d))),$e=pt*(Ht/T.k),qi=Z.left+(Z.width-X/Ht*$e)/2,Kl=Z.top+(Z.height-G/Ht*$e)/2;ht(Ht,Lt-(nt-qi)/$e,kt-(K-Kl)/$e)};this.wvScale=1/Math.sqrt(q.k);let B=Math.max(.09,Math.min(.16,s/40))*this.wvScale,ut=this.canLayRuns?this.runPool:void 0,J=this.runCtx3d=ut?{frame:o,floor:e,room:n,key:`${n.id}|${t.edge}`,L:s,H:r,gap:(ke(e,n.id,o.a,o.b)?this._doc.settings.wall_interior/2:0)+vs,runs:wa(o,(((Ft=ut.pool)==null?void 0:Ft.pipes)??[]).filter(R=>R.floor_id===e.id),gt(this._doc,e,ut)),pool:ut,pt:R=>{let T=z(R);return{s:o.rightward?T.x:s-T.x,y:r-T.y}}}:null;return b`<div class="fp3d-wv-veil" @click=${R=>R.target===R.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${I}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${D(L)}`} @click=${()=>W(L)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:t.edge+1,b:(t.edge+1)%i+1})} · ${this.m(s,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${D(O)}`} @click=${()=>W(O)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${h&&ft("pool")&&Vt("pool")&&this.runPool?b`<button class="fp3d-btn ${this._techMode?"fp3d-primary":""}" title=${this.t("tech_mode_hint")} @click=${()=>{this._techMode?(this._techMode=!1,this._runDraft=null,this._feedKind=null,this._runMode=null):this.enterTech()}}>🛠 ${this.t("tech_mode")}</button>`:$}
          ${J&&h&&!this._techMode?b`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:$}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(o,n,J)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${D(L)}`} @click=${()=>W(L)}>‹<small>${D(L)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${D(O)}`} @click=${()=>W(O)}>›<small>${D(O)}</small></button>
          ${this._wallView3d?$:b`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${()=>zt(q.x0+q.w/2,q.y0+q.h/2,q.k*1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${q.k<=1.001} @click=${()=>zt(q.x0+q.w/2,q.y0+q.h/2,q.k/1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${q.k<=1.001} @click=${()=>ht(1,-.5,-.35)}>⤢</button>
                ${q.k>1.001?b`<button class="fp3d-btn" aria-label="←" @click=${()=>ht(q.k,q.x0-q.w*.3,q.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${()=>ht(q.k,q.x0+q.w*.3,q.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${()=>ht(q.k,q.x0,q.y0-q.h*.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${()=>ht(q.k,q.x0,q.y0+q.h*.3)}>↓</button>`:$}
              </div>`}
        ${this._wallView3d?b`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${Ks(R=>R&&this.setupWall3d(R,n,t.edge))}
              .hass=${this.hass}
              .building=${this._techMode?this.techDoc3d():this._doc3d}
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
              .selectedSet=${m}
              .quality=${"auto"}
              .floorThumbs=${!1}
              .roomLabels=${!1}
              .floorStack=${"single"}
              .panelOpen=${!1}
              .alerts=${!1}
              .scenes=${!1}
              .central=${!1}
              @furniture-select=${R=>{let T=R.detail.id;T&&(this.shiftHeld||this._multiMode)?this.wallToggle(T):T?!this.wallSelection().includes(T)||this._wallSingle?this.wallChoose([T]):this._wallSel=T:this.wallChoose([])}}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${R=>this.liftDown(R)} @pointermove=${R=>this.liftMove(R)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:b`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""} ${this._runMode==="valve"||this._runMode==="sight"?"fp3d-wv-fitmode":""} ${this._runMode==="erase"?"fp3d-wv-fitmode fp3d-wv-erase":""}"
          viewBox="${q.x0} ${q.y0} ${q.w} ${q.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${R=>{R.preventDefault();let T=R.currentTarget,H=T.createSVGPoint();H.x=R.clientX,H.y=R.clientY;let V=H.matrixTransform(T.getScreenCTM().inverse());zt(V.x,V.y,q.k*Math.exp(-R.deltaY*.0015))}}
          @pointerdown=${R=>{if(R.pointerType==="touch"){if(this.wvTouch.set(R.pointerId,{x:R.clientX,y:R.clientY}),this.wvTouch.size===2){let[T,H]=[...this.wvTouch.values()];this.wvPinch={d:Math.hypot(T.x-H.x,T.y-H.y),mx:(T.x+H.x)/2,my:(T.y+H.y)/2,k:q.k,x0:q.x0,y0:q.y0},this.wvTap=null,this.techPress=null,M(),this.runPointUp(),this.fitDrag=null,this.jointDrag=null;return}if(this.wvPinch)return;if(J&&this._runMode&&this.isAdmin){R.stopPropagation();let T=J.pt(R);this.wvTap=T,this.techPress=T;return}}J&&this._runMode?(this.techPress=J.pt(R),this.runDown(R,J)):this._runSel?this._runSel=null:x(R)}}
          @pointermove=${R=>{if(this.wvTouch.has(R.pointerId)&&this.wvTouch.set(R.pointerId,{x:R.clientX,y:R.clientY}),this.wvPinch){this.wvTouch.size===2&&Zt(R.currentTarget);return}if(k(R),J&&this.jointDrag)this.jointMove(R,J);else if(J&&this.fitDrag)this.fittingMove(R,J);else if(J&&this.runDrag)this.runPointMove(R,J);else if(J&&this._runMode==="draw"&&this._runDraft){let T=J.pt(R);this.runHover=[T.s,T.y],this.requestUpdate()}}}
          @pointerup=${R=>{if(this.wvTouch.delete(R.pointerId),this.wvPinch){this.wvTouch.size||(this.wvPinch=null);return}let T=this.wvTap;this.wvTap=null,T&&J&&this._runMode&&this.runAt(J,T.s,T.y,!1,1,null);let H=this.techPress;if(this.techPress=null,J&&this._techMode&&this._runMode==="draw"&&this._runDraft&&H){let N=J.pt(R);Math.hypot(N.s-H.s,N.y-H.y)>.12&&this.runAt(J,N.s,N.y,R.altKey,1,null)}M(),this.runPointUp(),this.fittingUp(J);let V=this.jointDrag;this.jointDrag=null,V!=null&&V.moved?this.pushHistory(V.base):V&&J&&this.openCard(J.pool.id,`joint:${V.id}`)}}
          @pointercancel=${R=>{this.wvTouch.delete(R.pointerId),this.wvTouch.size||(this.wvPinch=null),this.wvTap=null,this.techPress=null,M(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${B}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${s} height=${r} />
          ${Array.from({length:Math.floor(r/.5)},(R,T)=>C`<line class="fp3d-wv-grid" x1="0" x2=${s} y1=${p((T+1)*.5)} y2=${p((T+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${p((T+1)*.5)+.03}>${((T+1)*.5).toFixed(1)}</text>`)}
          ${d.map(R=>{let[T,H]=u(R.s0,R.s1),V=e.openings.find(nt=>nt.id===R.id),N=(V==null?void 0:V.type)==="window"?this.t("opening_window"):(V==null?void 0:V.type)==="garage"?this.t("opening_garage"):this.t("opening_door");return C`<rect class="fp3d-wv-hole ${(V==null?void 0:V.type)==="window"?"fp3d-wv-window":""}" x=${T} y=${p(R.y1)} width=${H} height=${R.y1-R.y0} />
              ${H>B*3.5?C`<text class="fp3d-wv-hole-label" x=${T+H/2} y=${p(R.y1)+B*1.3} style="font-size:${B*.85}px">${N}</text>`:$}`})}
          ${l.map(R=>{let[T,H]=u(R.s0,R.s1),V=e.furniture.find(et=>et.id===R.id),N=V.name||Ae(this.hass,V.type),nt=R.y1-R.y0,K=this.wallPics.get(this.wallPicKey(o,V)),Z=c(_t(o,[V.x,V.z]).s);return C`<g class="fp3d-wv-item ${K?"fp3d-wv-pic":""} ${R.id===this._wallSel||m.includes(R.id)?"fp3d-wv-sel":""}" @pointerdown=${et=>S(et,R.id)} @dblclick=${()=>{let et=e.furniture.find(rt=>rt.id===R.id);if(et!=null&&et.group&&!this._wallSingle){this.wallChoose([R.id]),this._wallSingle=!0;return}this._wallView=null,this.selectItem("furniture",R.id)}}>
              ${K?C`<image href=${K.url} x=${Z+K.x0} y=${p(R.y0+K.y1)} width=${K.x1-K.x0} height=${K.y1-K.y0} preserveAspectRatio="none" />`:$}
              <rect x=${T} y=${p(R.y1)} width=${H} height=${Math.max(.02,nt)}><title>${N}</title></rect>
              ${!K&&H>B*3&&nt>B*1.4?C`<text x=${T+H/2} y=${p(R.y1)+Math.min(nt/2,B*1.6)+B*.35} style="font-size:${B}px">${N}</text>`:$}
            </g>`})}
          ${j}
          ${g&&f&&!v&&h&&!f.locked&&l.some(R=>R.id===g.id)?(()=>{let[R,T]=u(g.s0,g.s1),H=p(g.y1),V=p(g.y0),N=B*.75,nt=this.alongAxis(o,f),K=Z=>et=>{et.stopPropagation(),et.currentTarget.closest("svg").setPointerCapture(et.pointerId),this.wallResize={id:g.id,side:Z,x0:R,x1:R+T,y0:g.y0,y1:g.y1,base:this._doc,moved:!1}};return C`<g class="fp3d-wv-handles">
                  ${nt?C`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${R-N/2} y=${(H+V)/2-N} width=${N} height=${N*2} rx=${N/3} @pointerdown=${K("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${R+T-N/2} y=${(H+V)/2-N} width=${N} height=${N*2} rx=${N/3} @pointerdown=${K("r")} />`:$}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${R+T/2-N} y=${H-N/2} width=${N*2} height=${N} rx=${N/3} @pointerdown=${K("t")} />
                  ${g.y0>.05&&re(f)?C`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${R+T/2-N} y=${V-N/2} width=${N*2} height=${N} rx=${N/3} @pointerdown=${K("b")} />`:$}
                  <text class="fp3d-wv-size" x=${R+T/2} y=${H-N*.9} style="font-size:${B*.85}px">${P(g.s1-g.s0)} × ${P(g.y1-g.y0)}</text>
                </g>`})():$}
          ${v&&w?(()=>{let[R,T]=u(w.s0,w.s1),H=!this._wallMulti.length;return C`<g class=${`fp3d-wv-setframe${H?" fp3d-wv-setblock":""}`}><rect x=${R-.03} y=${p(w.y1)-.03} width=${T+.06} height=${w.y1-w.y0+.06} /><text x=${R} y=${p(w.y1)-.07} style="font-size:${B*.85}px">${H?`\u25A3 ${this.t("block_title")} \xB7 ${m.length}`:this.t("multi_title",{n:m.length})}</text></g>`})():$}
          ${this._wallGap?(()=>{let R=this._wallGap,[T,H]=u(R.s0,R.s1),V=R.low?Math.min(r,.9):Math.min(r,2.2),N=R.low?0:1.3;return C`<g class="fp3d-wv-gap"><rect x=${T} y=${p(V)} width=${H} height=${V-N} /><text x=${T+H/2} y=${p((V+N)/2)} style="font-size:${B}px">${P(H)}</text></g>`})():$}
          ${this._wallFrame?C`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0,this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0,this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1-this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1-this._wallFrame.y0)} />`:$}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${s+.3} y1=${r} y2=${r} />
          ${J?this.renderRuns(J,c,p):$}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${J&&this._techMode&&!this._runDraft&&!this._runSel&&!g&&(this._runMode==="draw"||this._runMode==="feed")?b`<span class="fp3d-muted">${this.t(this._runMode==="feed"?"tech_feed_place":"tech_start")}</span> ${this.renderTechIssues(J)}`:J&&(this._runMode||this._runSel&&!g)?this.renderRunFoot(J):v&&h?this.renderWallSetFoot(o,m,w,u):g&&f?b`<b>${f.name||Ae(this.hass,f.type)}</b>
                ${this.fixButton("furniture",g.id)}
                ${f.group&&h?b`<button class="fp3d-btn" title=${this.t("block_select")} @click=${()=>{this._wallSingle=!1,this.requestUpdate()}}>▣ ${this.t("wv_block_all")}</button>`:$}
                ${J&&St.includes(f.type)?b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(J.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:$}
                ${f.locked&&h?b`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:$}
                ${this.len(this.t("wall_view_left"),Math.round(u(g.s0,g.s1)[0]*1e3)/1e3,R=>{let T=R-u(g.s0,g.s1)[0];this.moveOnWall(o,g.id,o.rightward?T:-T,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,g.d)*1e3)/1e3,R=>this.moveFromWall(o,g.id,R-g.d),.01,0)}
                ${h&&!f.locked&&this.alongAxis(o,f)?this.len(this.t("width"),Math.round((g.s1-g.s0)*1e3)/1e3,R=>{let T=Math.max(.05,R);o.rightward?this.resizeOnWall(o,g.id,g.s0,g.s0+T,null,null):this.resizeOnWall(o,g.id,g.s1-T,g.s1,null,null)},.01,.05):$}
                ${h&&!f.locked?this.len(this.t("height_m"),Math.round((g.y1-g.y0)*1e3)/1e3,R=>this.resizeOnWall(o,g.id,null,null,null,g.y0+Math.max(.03,R)),.01,.03):$}
                ${_?this.len(this.t("mount_height"),Math.round(g.y0*1e3)/1e3,R=>this.moveOnWall(o,g.id,0,R),.01,0):b`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${h&&!f.locked?b`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,R=>this.turnOnWall(f.id,R),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:$}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",g.id)}}>${this.t("wall_view_form")}</button>
                ${h?b`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall([g.id])}>${this.t("delete")}</button>`:$}`:b`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
          ${h&&!this._techMode?this.renderMultiToggle():$}
        </div>
      </div>
    </div>`}renderWallSetFoot(t,e,n,i){let o=!this._wallMulti.length,s=e.every(l=>this.isFixedItem("furniture",l)),r=!s&&e.some(l=>this.isFixedItem("furniture",l));return b`<b>${o?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</b>
      ${r?b`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>`:$}
      ${o?b`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${()=>this._wallSingle=!0}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${()=>{let l=this._wallSel;this._wallMulti=e,this.ungroupSelectionOf(e),this._wallSel=l}}>${this.t("block_break")}</button>`:b`<button class="fp3d-btn fp3d-primary" @click=${()=>{this.groupIds(e),this._wallMulti=[]}}>▣ ${this.t("block_make")}</button>`}
      ${n?this.len(this.t("wall_view_left"),Math.round(i(n.s0,n.s1)[0]*1e3)/1e3,l=>{let d=l-i(n.s0,n.s1)[0];this.moveSetOnWall(t,e,t.rightward?d:-d,null)},.01,0):$}
      <button class="fp3d-btn ${r?"fp3d-primary":""}" @click=${()=>{let l=new Set(e),d=!s&&!r;this.change((c,u)=>{for(let p of u.furniture)l.has(p.id)&&(p.locked=d||null)})}}>${s?`\u{1F513} ${this.t("unfix")}`:r?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall(e)}>${this.t("delete")}</button>`}deleteOnWall(t){if(!t.length||!this.isAdmin)return;if(t.length>1){if(!confirm(this.t(t.some(n=>this.isFixedItem("furniture",n))?"block_delete_fixed":"block_delete",{n:t.length})))return}else if(!this.confirmFixedDelete("furniture",t[0]))return;let e=new Set(t);this.change((n,i)=>i.furniture=i.furniture.filter(o=>!e.has(o.id))),this._wallSel=null,this._wallMulti=[],this._wallSingle=!1}groupIds(t){let e=new Set(t),n=U("block");this.change((i,o)=>{for(let s of o.furniture)e.has(s.id)&&(s.group=n)})}ungroupSelectionOf(t){let e=new Set(t);this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=null)})}addOnWall(t,e,n){let i=this.floor;if(!i||!this.isAdmin)return;this.rememberWallType(t);let o=this._wallGap;if(o)return this.addIntoGap(t,e,n,o);let[s,r,l]=Wt(t),d=[...sn(e,i,n).map(_=>[_.s0,_.s1]),...xi(e,i).filter(_=>_.y0<.05).map(_=>[_.s0,_.s1])],c=Math.max(0,e.length/2-s/2);for(let _=.1;_+s<=e.length-.05;_+=.05)if(!d.some(([m,v])=>_<v+.05&&_+s>m-.05)){c=_;break}let u=ke(i,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,[p,h]=ge(e,c+s/2,u+r/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),g={id:U("furniture"),type:t,x:F(p),z:F(h),rotation:f,w:s,d:r,h:l,variant:null};this.change((_,m)=>m.furniture.push(g)),this._runSel=null,this._runMode=null,this._wallSel=g.id}addIntoGap(t,e,n,i){let o=this.floor,s=i.s1-i.s0,[r,l,d]=Wt(t);Wi.has(t)&&(r>s+.005||s-r<.1)&&(r=Math.round(s*1e3)/1e3);let c=ke(o,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,u=i.s0+Math.min(r,s)/2,[p,h]=ge(e,u,c+l/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),g={id:U("furniture"),type:t,x:F(p),z:F(h),rotation:f,w:r,d:l,h:d,variant:null};this.change((_,m)=>m.furniture.push(g)),this._wallGap=null,this._wallSel=g.id,this._wallMulti=[]}rememberWallType(t){try{let e=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");localStorage.setItem("neonplan3d.wallRecent",JSON.stringify([t,...e.filter(n=>n!==t)].slice(0,6)))}catch{}}wallRecent(){try{let t=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"&&(ci.includes(e)||!!yt(e))):[]}catch{return[]}}renderWallFurniture(t,e){let n=this._wallGap,i=n?n.s1-n.s0:0,o=mn(this._wallQuery.trim()),s=this._wallCat,r=(this.packs??[]).flatMap(_=>_.items.filter(m=>!m.light&&!m.vehicle&&!m.hole&&m.mount!=="ceiling").map(m=>({type:Oe(_.id,m.id),label:oe(m),search:`${Object.values(m.name).join(" ")} ${_.name}`,wall:m.mount==="wall"}))),l=_=>this.t(`furn_${_}`),d=[];s==="pack"?d=r:s==="energy"?d=["meter","inverter","home_battery","wallbox"].map(_=>({type:_,label:l(_),search:""})):s?d=(bs[s]??[]).map(_=>({type:_,label:l(_),search:Yt(Bi,`furn_${_}`)})):o||n?d=[...Object.values(bs).flat().filter((_,m,v)=>v.indexOf(_)===m).map(_=>({type:_,label:l(_),search:Yt(Bi,`furn_${_}`)})),...r]:this.wallRecent().length||(d=bs.base.map(_=>({type:_,label:l(_),search:""})));let c=o.split(/\s+/).filter(Boolean),u=c.length?d.filter(_=>c.every(m=>mn(`${_.label} ${_.search} ${_.type.replace(/[_:.]/g," ")}`).includes(m))):d;if(n){let _=(m,v)=>v||Ad.has(m);u=u.filter(m=>_(m.type,m.wall)===!n.low).filter(m=>Wt(m.type)[0]<=i+.01||Wi.has(m.type)&&i>=(zd[m.type]??.2)).sort((m,v)=>{let y=w=>Wi.has(w)?1:Math.min(1,Wt(w)[0]/i);return y(v.type)-y(m.type)||Number(m.type.startsWith("pack:"))-Number(v.type.startsWith("pack:"))})}let p=!s&&!o&&!n?this.wallRecent():[],h=[["base","\u25AD"],["hang","\u2594"],["tall","\u25AF"],["living","\u{1F6CB}"],["light","\u{1F4A1}"],...(this.packs??[]).some(_=>_.items.length)?[["pack","\u{1F9E9}"]]:[],...ft("energy_pro")?[["energy","\u26A1"]]:[]],f=[...p,...u.slice(0,40).map(_=>_.type)];this.askKitPics(f),this._wallPicTick;let g=(_,m)=>{let v=Wt(_)[0],y=n&&Wi.has(_)&&(v>i+.005||i-v<.1),w=this.kitPics.get(_);return b`<button class="fp3d-wv-tile" title=${m} @click=${()=>this.addOnWall(_,t,e)}>
        <span class="fp3d-wv-tile-pic">${w?b`<img src=${w} alt="" />`:b`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${m}</span>
        <small class=${y?"fp3d-wv-fit":""}>${y?`\u2194 ${this.m(i,2)}`:this.m(v,2)}</small>
      </button>`};return b`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${h.map(([_,m])=>b`<button class="fp3d-wv-cat ${s===_?"fp3d-on":""}" title=${this.t(`wv_cat_${_}`)} @click=${()=>this._wallCat=s===_?null:_}><span>${m}</span>${this.t(`wv_cat_${_}`)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${_=>this._wallQuery=_.target.value} />
      ${n?b`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap",{w:this.m(i,2)})} <button class="fp3d-link" @click=${()=>this._wallGap=null}>✕</button></p>`:!s&&!o?b`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`:$}
      ${s?b`<h4>${this.t(`wv_cat_${s}`)}</h4>`:$}
      ${p.length?b`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${p.map(_=>g(_,yt(_)?oe(yt(_)):l(_)))}</div>`:$}
      ${(s||o||n)&&!u.length?b`<p class="fp3d-sub">${this.t(n?"wv_none_fits":"furniture_search_none")}</p>`:$}
      <div class="fp3d-wv-tiles">${u.slice(0,40).map(_=>g(_.type,_.label))}</div>
    </aside>`}async askKitPics(t){let e=t.filter(n=>!this.kitPicsAsked.has(n));if(e.length){for(let n of e)this.kitPicsAsked.add(n);try{let n=await Di();for(let i of e){let[o,s,r]=Wt(i);this.kitPics.set(i,n.furniturePreview({type:i,w:o,d:s,h:r,variant:null,lamp:gi[i]??null},120,this.packs??[]))}}catch{}this._wallPicTick++}}renderWallKit(t,e,n){let i=!!n,o=ft("energy_pro");if(!i)return this.isAdmin?this.renderWallFurniture(t,e):$;if(this._techMode&&n)return this.renderTechKit(t,e,n);if(!this.isAdmin||!i&&!o)return $;let s=l=>b`<button class="fp3d-btn" @click=${()=>this.addOnWall(l,t,e)}>+ ${this.t(`furn_${l}`)}</button>`,r=(l,d)=>b`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,l)}>+ ${this.t(d)}</button>`;return b`<aside class="fp3d-wv-kit">
      ${i?b`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${r("valve","wall_run_valve")} ${r("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(l=>b`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?null:l}}>+ ${this.t(`wall_kit_${l}`)}</button>`)}`:$}
      ${o?b`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`:$}
    </aside>`}get runPool(){var t;return this.poolArea??((t=this.floor)==null?void 0:t.outdoor.find(e=>e.type==="pool"&&e.points.length>=3))}get canLayRuns(){return(Uo()||this._techMode)&&!!this.runPool}runFrame(t){var o;let[e,n]=t.split("|"),i=(o=this.floor)==null?void 0:o.rooms.find(s=>s.id===e);return i&&Number(n)<i.points.length?on(i,Number(n)):null}docWithDraft(){let t=this._runDraft;if(!t||!this._wallView)return this._doc;let e=[...t.from||!t.anchor?[]:[t.anchor],...t.pts];if(!e.length)return this._doc;let n=structuredClone(this._doc),i=n.floors.find(r=>r.outdoor.some(l=>l.id===t.pool)),o=i==null?void 0:i.outdoor.find(r=>r.id===t.pool);if(!i||!o)return this._doc;o.pool??={};let s={id:"__draft",from:t.from,to:"",floor_id:i.id,points:e.map(r=>[r[0],r[2]]),heights:e.map(r=>r[1])};return o.pool.pipes=[...o.pool.pipes??[],s],n}runLast(t,e){var o,s;if(t.pts.length)return t.pts[t.pts.length-1];if(t.fromT)return t.fromT;let n=gt(this._doc,e.floor,e.pool);if(t.extend){let r=(s=(o=e.pool.pool)==null?void 0:o.pipes)==null?void 0:s.find(d=>d.id===t.extend.pipe),l=r?Bt(r,n):[];return(t.extend.end==="to"?l[l.length-1]:l[0])??null}let i=n(t.from);return i?[i.x,i.y,i.z]:null}runPick(t,e,n,i=!1){var l;if(!i){for(let d of t.runs)for(let c of d.ends)if(Math.hypot(c.s-e,c.y-n)<.12)return{end:{pipe:d.id,end:c.end}}}let o=gt(this._doc,t.floor,t.pool),s=null,r=[...t.floor.furniture.filter(d=>St.includes(d.type)).flatMap(d=>te(d.type).length?te(d.type).map(c=>`dev:${d.id}:${c}`):[`dev:${d.id}`]),...(((l=t.pool.pool)==null?void 0:l.joints)??[]).map(d=>d.kind==="wall"||d.kind==="floor"?`joint:${d.id}:inside`:`joint:${d.id}`)];for(let d of i?[]:r){let c=o(d);if(!c)continue;let u=_t(t.frame,[c.x,c.z]);if(u.d<-.3||u.d>1.6)continue;let p=Math.hypot(u.s-e,c.y-n);p<.12&&(!s||p<s.d)&&(s={node:d,d:p})}if(s)return{node:s.node};if(this._techMode&&!i){let d=t.floor.furniture.find(c=>{if(!St.includes(c.type)||c.type==="pool_valve")return!1;let u=Nt(c).map(h=>_t(t.frame,h));if(Math.min(...u.map(h=>h.d))>1.6||Math.max(...u.map(h=>h.d))<-.3)return!1;let p=Rt(t.floor,c);return Math.min(...u.map(h=>h.s))-.03<=e&&e<=Math.max(...u.map(h=>h.s))+.03&&p-.03<=n&&n<=p+c.h+.03});if(d)return{node:`dev:${d.id}`}}for(let d of t.runs)for(let c of d.pieces){let[u,p]=[c.s1-c.s0,c.y1-c.y0],h=u*u+p*p,f=h>0?Math.max(0,Math.min(1,((e-c.s0)*u+(n-c.y0)*p)/h)):0,[g,_]=[c.s0+u*f,c.y0+p*f];if(Math.hypot(g-e,_-n)<(i?.16:.07))return{pipe:{id:d.id,p:_e(t.frame,g,_,c.d0+(c.d1-c.d0)*f)}}}return{}}eraseAt(t,e,n){var l;let i=(d,c,u)=>Math.hypot(d-e,c-n)<u;for(let d of t.runs)for(let c of d.fittings)if(i(c.s,c.y,.1*Math.max(1,this.wvScale))){this.changePool(t.pool.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===d.id);p&&(p.fittings=(p.fittings??[]).filter(f=>f.id!==c.id))});return}let o=gt(this._doc,t.floor,t.pool),s=(((l=t.pool.pool)==null?void 0:l.joints)??[]).find(d=>{let c=d.kind==="wall"||d.kind==="floor"?`joint:${d.id}:inside`:`joint:${d.id}`,u=o(c);if(!u)return!1;let p=_t(t.frame,[u.x,u.z]);return p.d>-.3&&p.d<1.6&&i(p.s,u.y,.1)});if(s){let d=`joint:${s.id}`;this.changePool(t.pool.id,c=>{c.joints=(c.joints??[]).filter(u=>u.id!==s.id),c.pipes=(c.pipes??[]).filter(u=>wt(u.from)!==d&&wt(u.to)!==d)}),this._runSel=null;return}let r=this.runPick(t,e,n,!0);if(r.pipe){let d=r.pipe.id;this.changePool(t.pool.id,c=>c.pipes=(c.pipes??[]).filter(u=>u.id!==d)),this._runSel=null}}runDown(t,e){if(!this._runMode||!this.isAdmin)return;t.stopPropagation();let{s:n,y:i}=e.pt(t);this.runAt(e,n,i,t.altKey,t.detail,null)}runDown3d(t){var v,y;let e=this.runCtx3d;if(!this._runMode||!e||t.button!==0||!this.isAdmin||!this._wallView3d)return;let n=(v=this.wall3dEl)==null?void 0:v.viewer;if(!n)return;t.stopPropagation(),t.preventDefault();let i=n.renderer.domElement.getBoundingClientRect(),[o,s]=[t.clientX-i.left,t.clientY-i.top],r=n.furnitureIdAt(o,s),l=r?e.floor.furniture.find(w=>w.id===r&&St.includes(w.type)):void 0,d=n.pointerRay(o,s),c=ge(e.frame,0,e.gap),u=e.frame.n,p=d.d[0]*u[0]+d.d[2]*u[1];if(Math.abs(p)<1e-6)return;let h=((c[0]-d.o[0])*u[0]+(c[1]-d.o[2])*u[1])/p;if(h<=0&&!l)return;let f=[d.o[0]+d.d[0]*h,d.o[1]+d.d[1]*h,d.o[2]+d.d[2]*h],g=e.floor.elevation+(((y=n.floorMap.get(e.floor.id))==null?void 0:y.y)??0),_=gt(this._doc,e.floor,e.pool),m=()=>{let w=te(l.type);if(!w.length)return`dev:${l.id}`;let P=z=>{let E=_(z),S=[E.x-d.o[0],E.y+g-d.o[1],E.z-d.o[2]],x=S[0]*d.d[0]+S[1]*d.d[1]+S[2]*d.d[2];return Math.hypot(S[0]-d.d[0]*x,S[1]-d.d[1]*x,S[2]-d.d[2]*x)};return w.map(z=>`dev:${l.id}:${z}`).sort((z,E)=>P(z)-P(E))[0]};this.runAt(e,_t(e.frame,[f[0],f[2]]).s,f[1]-g,t.altKey,t.detail,l&&this._runMode==="draw"?m():null)}runAt(t,e,n,i,o,s){let r=this._runMode;if(!r)return;if(r==="hole_wall"||r==="hole_floor"||r==="tee"||r==="y")return this.placeJoint(t,r,e,n);if(r==="feed")return this.placeFeed(t,e,n);if(r==="erase")return this.eraseAt(t,e,n);let l=s?{node:s}:this.runPick(t,e,n,r!=="draw");if(r!=="draw"){l.pipe&&this.addFitting(t,l.pipe.id,l.pipe.p,r),this._runMode=this._techMode?"draw":null,this._techMode&&(this._runSel=null);return}let d=this._runDraft;if(!d){let c={pool:t.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:t.key,d:t.gap},u;l.end?u={...c,extend:l.end}:l.node?u={...c,from:l.node}:l.pipe?u={...c,fromT:l.pipe.p}:u={...c,pts:[_e(t.frame,Math.round(e*20)/20,Math.round(n*20)/20,t.gap)]},this._runDraft={...u,anchor:this.runLast({...u,pts:[]},t)};return}if(o>=2)return this.finishRun("",null);if(l.node&&l.node!==d.from)return this.finishRun(l.node,null);if(l.pipe)return this.finishRun("",l.pipe.p);this._runDraft={...d,pts:[...d.pts,...this.runStep(d,t,e,n,i)],wall:t.key,d:t.gap}}runStep(t,e,n,i,o){let s=Math.round(n*20)/20,r=Math.round(i*20)/20,l=[],d=this.runLast(t,e);if(d&&t.wall!==e.key){let c=this.runFrame(t.wall),u=c&&ba(c,t.d,e.frame,e.gap);u&&(d=[F(u[0]),d[1],F(u[1])],l.push(d))}if(d&&!o){let c=_t(e.frame,[d[0],d[2]]);c.d>-.35&&c.d<.6&&(Math.abs(s-c.s)<Math.abs(r-d[1])?s=c.s:r=d[1])}return l.push(_e(e.frame,s,r,e.gap)),l.map(c=>[F(c[0]),F(c[1]),F(c[2])])}finishRun(t,e,n=[],i){var u;let o=this._runDraft,s=this.floor;if(this._runDraft=null,!o||!s)return;let r=[...o.pts,...n],l=this._techMode?this.runFrame(o.wall):null,d=this._techMode?(u=this.floor)==null?void 0:u.outdoor.find(p=>p.id===o.pool):void 0;if(l&&d&&!n.length&&(t||e)){let p=r.length?r[r.length-1]:(()=>{let f=o.from?gt(this._doc,s,d)(o.from):null;return f?[f.x,f.y,f.z]:o.fromT})(),h=e?{x:e[0],y:e[1],z:e[2]}:gt(this._doc,s,d)(t);if(p&&h){let f=_t(l,[p[0],p[2]]),g=_t(l,[h.x,h.z]);Math.abs(f.s-g.s)>.03&&Math.abs(p[1]-h.y)>.03&&r.push(_e(l,g.s,p[1],o.d))}}if(!r.length&&!e&&(!t||t===o.from)&&!o.fromT)return;let c=null;this.changePool(o.pool,(p,h)=>{let f=p.joints??=[],g=p.pipes??=[],_=gt(this._doc,s,h),m=O=>{let L=O.startsWith("joint:")?f.find(D=>`joint:${D.id}`===O):void 0;return L?{x:L.x,z:L.z,y:L.y}:_(O)},v=O=>{let L=null;for(let W of g){let tt=rn(Bt(W,m),O);tt&&tt.d<.12&&(!L||tt.d<L.d)&&(L={pipe:W,d:tt.d})}let D=L&&Bo(L.pipe,m,O,U("joint"),U("pipe"));return!L||!D?"":(f.push(D.joint),g.splice(g.indexOf(L.pipe),1,D.first,D.second),`joint:${D.joint.id}:out2`)},y=(O,L=[])=>{let{kind:D,id:W,port:tt}=at(O),Q=D==="joint"&&!tt?f.find(ot=>ot.id===W):void 0;if(!Q||!Q.kind)return O;if(Q.kind==="wall"||Q.kind==="floor")return`joint:${W}:inside`;let X=new Set([...g.flatMap(ot=>[ot.from,ot.to]),...L]),G=an(Q.kind).find(ot=>!X.has(`joint:${W}:${ot}`));return G?`joint:${W}:${G}`:O},w=o.fromT?v(o.fromT):y(o.from),P=e?v(e):y(t,[w]),z=s.furniture.filter(O=>St.includes(O.type)).map(O=>({id:O.id,type:O.type})),E=O=>g.flatMap(L=>[L.from,L.to]).filter(L=>wt(L)===O).map(L=>at(L).port).filter(L=>!!L),S=O=>{var W,tt,Q,X;let{kind:L,id:D}=at(O);return L==="port"?((Q=(tt=(W=h.pool)==null?void 0:W.ports)==null?void 0:tt.find(G=>G.id===D))==null?void 0:Q.kind)==="waste":L==="joint"&&/kanal|waste|abwasser|backwash/i.test(((X=f.find(G=>G.id===D))==null?void 0:X.name)??"")},x=(O,L)=>{var G;let{kind:D,id:W,port:tt}=at(O);if(D!=="dev"||tt)return O;let Q=((G=s.furniture.find(ot=>ot.id===W))==null?void 0:G.type)??"",X=Ma(Q,L?jn(L,h,z):null,S(L),E(`dev:${W}`));return X?`dev:${W}:${X}`:O};w=x(w,P),P=x(P,w);let k=r.map(O=>[F(O[0]),F(O[2])]),M=r.map(O=>F(O[1])),I=o.extend,A=I&&g.find(O=>O.id===I.pipe);if(I&&A){Object.assign(A,qt(A,m)),I.end==="to"?(A.points=[...A.points,...k],A.heights=[...A.heights??[],...M],A.to=P):(A.points=[...k.reverse(),...A.points],A.heights=[...M.reverse(),...A.heights??[]],A.from=P),i!==void 0&&(A.height=i),c=A.id;return}let j={id:U("pipe"),from:w,to:P,floor_id:s.id,points:k,heights:M,height:i??M[M.length-1]??null};j=Sa(j,w?jn(w,h,z):null,P?jn(P,h,z):null),g.push(j),c=j.id}),c&&!this._techMode&&(this._runSel={pipe:c,pt:null}),this._runMode=this._techMode?"draw":null}placeFeed(t,e,n){let i=this._feedKind,o=this.floor;if(this._feedKind=null,this._runMode="draw",!i||!o)return;let s=Math.round(e*20)/20,r=n<.25,l=t.gap-vs,d=ke(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c=this.t(`feed_${i}`),[u,p]=Ye(t.frame,s,r?t.gap:l),h=r?{id:U("joint"),kind:"floor",x:u,z:p,y:0,name:c}:{id:U("joint"),kind:"wall",x:u,z:p,y:Math.round(n*20)/20,nx:F(t.frame.n[0]),nz:F(t.frame.n[1]),depth:F(d),name:c};this.changePool(t.pool.id,(f,g)=>{f.joints=[...f.joints??[],h];let _=(f.ports??[]).filter(P=>P.kind===i);if(i==="waste"&&!_.length){let P=ln(h,"outside"),z={id:U("port"),kind:"waste",x:F(P.x-t.frame.n[0]*1),z:F(P.z-t.frame.n[1]*1)};f.ports=[...f.ports??[],z],_=[z]}if(!_.length)return;let m=gt(this._doc,o,g),v=P=>{let{kind:z,id:E,port:S}=at(P),x=z==="joint"?(f.joints??[]).find(M=>M.id===E):void 0;if(x)return ln(x,S);let k=z==="port"?(f.ports??[]).find(M=>M.id===E):void 0;return k?m(P)??{x:k.x,y:.02,z:k.z}:m(P)},y=P=>{let{kind:z,id:E}=at(P);if(z==="port"){let S=(f.ports??[]).find(x=>x.id===E);return S?Tn(S.kind):null}return null},w=Si({from:`joint:${h.id}:outside`,vias:[],to:_.map(P=>`port:${P.id}`),floorId:o.id},v,f.joints??[],y,P=>U(P));f.joints=[...f.joints??[],...w.joints],f.pipes=[...f.pipes??[],...w.pipes]})}renderTechKit(t,e,n){var l;let i=n.pool,o=d=>b`<button class="fp3d-wv-tile" @click=${()=>this.addOnWall(d,t,e)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(d)?b`<img src=${this.kitPics.get(d)} alt="" />`:b`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${d}`)}</span>
    </button>`;this.askKitPics(["pool_pump","pool_filter","pool_heat_pump","pool_dosing"]);let s=["skimmer","drain","inlet","waste"].filter(d=>{var c;return d==="waste"||(((c=i.pool)==null?void 0:c.ports)??[]).some(u=>u.kind===d)}),r=(d,c)=>b`<button class="fp3d-btn ${this._runMode===d?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===d?"draw":d}}>+ ${this.t(c)}</button>`;return b`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${this.renderTechStep(n)}
      <div class="fp3d-seg fp3d-tech-pen" role="group">
        <button aria-pressed=${this._runMode==="draw"} @click=${()=>{this._runMode="draw",this._runSel=null}}><span>✏</span>${this.t("tech_draw")}</button>
        <button aria-pressed=${this._runMode!=="draw"&&this._runMode!=="feed"&&this._runMode!=="erase"} @click=${()=>{this._runDraft=null,this._runMode=null}}><span>✋</span>${this.t("tech_pick")}</button>
        <button aria-pressed=${this._runMode==="erase"} title=${this.t("tech_erase_hint")} @click=${()=>{this._runDraft=null,this._runSel=null,this._feedKind=null,this._runMode=this._runMode==="erase"?"draw":"erase"}}><span>🧽</span>${this.t("tech_erase")}</button>
      </div>
      <button class="fp3d-btn fp3d-tech-undo" ?disabled=${!this._canUndo} title="Ctrl+Z" @click=${()=>{this._runDraft=null,this.undo()}}>↶ ${this.t("undo")}</button>
      <h4>${this.t("tech_feeds")}</h4>
      ${s.map(d=>{let c=Ko(i,d);return b`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind===d?"fp3d-primary":""} ${c?"fp3d-on":""}" ?disabled=${c} @click=${()=>{this._runDraft=null,this._feedKind=this._feedKind===d?null:d,this._runMode=this._feedKind?"feed":"draw"}}><i>${d==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${d}`)}${c?b`<small>✓</small>`:$}</button>`})}
      ${(((l=i.pool)==null?void 0:l.ports)??[]).some(d=>d.kind!=="waste")?$:b`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>`}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(o)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${r("valve","wall_run_valve")} ${r("sight","wall_run_sight")}
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`}renderTechStep(t){var p;let e=t.pool,n=((p=e.pool)==null?void 0:p.ports)??[],i=t.floor.furniture.filter(h=>St.includes(h.type)),o=(h,f)=>b`<div class="fp3d-tech-step ${h===null?"fp3d-done":""}"><b>${h===null?"\u2713":this.t("tech_step",{n:h})}</b>${f}</div>`;if(this._runMode==="feed")return o(1,this.t("tech_feed_place"));if(this._runMode==="erase")return b`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;if(this._runMode==="valve"||this._runMode==="sight")return o(4,this.t("tech_step_fit"));if(this._runDraft)return o(3,this.t("tech_step_drawing"));if(!n.some(h=>h.kind!=="waste"))return o(1,this.t("tech_no_ports"));let s=["skimmer","drain","inlet"].find(h=>n.some(f=>f.kind===h)&&!Ko(e,h));if(s)return o(1,this.t("tech_step_feed",{name:this.t(`feed_${s}`)}));let r=i.find(h=>h.type==="pool_pump"),l=i.find(h=>h.type==="pool_filter");if(!r||!l)return o(2,this.t("tech_step_devices"));let d=qo(e,i.map(h=>({id:h.id,type:h.type}))),c=h=>this.poolNodeLabel(e,h),u=d.find(h=>h.kind==="port");if(u){let{port:h}=at(u.node),f={suction:this.t("feed_skimmer"),pressure:c(`dev:${l.id}:pump`),pump:c(`dev:${r.id}:pressure`),return:i.some(g=>g.type==="pool_heat_pump")?this.t("furn_pool_heat_pump"):this.t("feed_inlet"),waste:this.t("feed_waste"),in:c(`dev:${l.id}:return`),out:this.t("feed_inlet")};return o(3,this.t("tech_step_line",{a:h?f[h]??"\u2026":"\u2026",b:c(u.node)}))}return d.some(h=>h.kind==="loose")?o(3,this.t("tech_step_loose")):o(null,this.t("tech_ok"))}renderTechIssues(t){let e=t.floor.furniture.filter(s=>St.includes(s.type)).map(s=>({id:s.id,type:s.type})),n=qo(t.pool,e);if(!n.length)return b`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;let i=n.filter(s=>s.kind==="loose").length,o=[...i?[this.t("tech_issue_loose",{n:i})]:[],...n.filter(s=>s.kind==="port").map(s=>this.t("tech_issue_port",{name:this.poolNodeLabel(t.pool,s.node)})),...n.filter(s=>s.kind==="feed").map(s=>this.t("tech_issue_feed",{name:this.t(`feed_${s.node}`)}))];return b`<span class="fp3d-tech-issues">⚠ ${o.slice(0,4).join(" \xB7 ")}${o.length>4?" \u2026":""}</span>`}placeJoint(t,e,n,i){let o=t.gap-vs,s=Math.round(n*100)/100,r=Math.round(i*100)/100,l=ke(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,d;if(e==="hole_wall"){let[c,u]=Ye(t.frame,s,o);d={id:U("joint"),kind:"wall",x:c,z:u,y:Math.max(.05,r),nx:F(t.frame.n[0]),nz:F(t.frame.n[1]),depth:F(l)}}else if(e==="hole_floor"){let[c,u]=Ye(t.frame,s,t.gap);d={id:U("joint"),kind:"floor",x:c,z:u,y:0}}else{let[c,u]=Ye(t.frame,s,t.gap);d={id:U("joint"),kind:e,x:c,z:u,y:r}}this.changePool(t.pool.id,c=>c.joints=[...c.joints??[],d]),this._runMode=null}runOut(t,e){let n=this._runDraft,i=n&&this.runLast(n,t);if(!n||!i)return;if(e==="down")return this.finishRun("",null,[[i[0],-.3,i[2]]],-.3);let o=_t(t.frame,[i[0],i[2]]),s=ke(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,r=_e(t.frame,o.s,i[1],-(s+.15));this.finishRun("",null,[[F(r[0]),i[1],F(r[2])]],i[1])}addFitting(t,e,n,i){let o=gt(this._doc,t.floor,t.pool);this.changePool(t.pool.id,s=>{var d;let r=(d=s.pipes)==null?void 0:d.find(c=>c.id===e),l=r&&rn(Bt(r,o),n);!r||!l||(r.fittings=[...r.fittings??[],{id:U("fit"),kind:i,at:F(l.at),...i==="valve"?{open:!0}:{}}])}),this._runSel={pipe:e,pt:null}}runPieceDown(t,e,n,i){var h,f;if(this._runMode)return;if(t.stopPropagation(),this._wallSel=null,((h=this._runSel)==null?void 0:h.pipe)!==n.id||!this.isAdmin){this._runSel={pipe:n.id,pt:null};return}let{s:o,y:s}=e.pt(t),r=n.pieces.find(g=>g.k===i),l=Math.hypot(r.s1-r.s0,r.y1-r.y0)>0?Math.hypot(o-r.s0,s-r.y0)/Math.hypot(r.s1-r.s0,r.y1-r.y0):0,d=r.d0+(r.d1-r.d0)*Math.min(1,l),c=this._doc,u=gt(c,e.floor,e.pool),p=-1;this.changePool(e.pool.id,g=>{var m;let _=(m=g.pipes)==null?void 0:m.find(v=>v.id===n.id);_&&(Object.assign(_,qt(_,u)),p=Math.max(0,Math.min(_.points.length,i+1-On(_,u))),_.points.splice(p,0,Ye(e.frame,o,d)),_.heights.splice(p,0,F(s)))}),!(p<0)&&(this._runSel={pipe:n.id,pt:p},this.runDrag={pipe:n.id,i:p,d,base:c,moved:!0},(f=t.currentTarget.closest("svg"))==null||f.setPointerCapture(t.pointerId))}runPointDown(t,e,n,i){var d,c,u;if(this._runMode||!this.isAdmin)return;t.stopPropagation();let o=gt(this._doc,e.floor,e.pool);if(this.doubleTap(t,`runpt:${n}:${i}`)){this.changePool(e.pool.id,p=>{var f;let h=(f=p.pipes)==null?void 0:f.find(g=>g.id===n);h&&(Object.assign(h,qt(h,o)),h.points.splice(i,1),h.heights.splice(i,1))}),this._runSel={pipe:n,pt:null};return}let s=(c=(d=e.pool.pool)==null?void 0:d.pipes)==null?void 0:c.find(p=>p.id===n),r=s&&qt(s,o),l=r==null?void 0:r.points[i];l&&(this._runSel={pipe:n,pt:i},this.runDrag={pipe:n,i,d:_t(e.frame,l).d,base:this._doc,moved:!1},(u=t.currentTarget.closest("svg"))==null||u.setPointerCapture(t.pointerId))}runPointMove(t,e){var c,u;let n=this.runDrag;if(!n)return;let{s:i,y:o}=e.pt(t);i=Math.round(i*100)/100,o=Math.round(o*100)/100;let s=gt(n.base,e.floor,e.pool),r=n.base.floors.flatMap(p=>p.outdoor).find(p=>p.id===e.pool.id),l=(u=(c=r==null?void 0:r.pool)==null?void 0:c.pipes)==null?void 0:u.find(p=>p.id===n.pipe);if(!l)return;let d=qt(l,s);if(!t.altKey){let p=Bt(d,s),h=On(d,s);for(let f of[p[n.i+h-1],p[n.i+h+1]]){if(!f)continue;let g=_t(e.frame,[f[0],f[2]]);Math.abs(g.s-i)<.04&&(i=F(g.s)),Math.abs(f[1]-o)<.04&&(o=F(f[1]))}}n.moved=!0,this.change((p,h)=>{var g,_,m;let f=(m=(_=(g=h.outdoor.find(v=>v.id===e.pool.id))==null?void 0:g.pool)==null?void 0:_.pipes)==null?void 0:m.find(v=>v.id===n.pipe);f&&(Object.assign(f,qt(f,s)),f.points[n.i]=Ye(e.frame,i,n.d),f.heights[n.i]=o)},n.base,!1)}runPointUp(){let t=this.runDrag;this.runDrag=null,t!=null&&t.moved&&this.pushHistory(t.base)}fittingDown(t,e,n,i){var o;if(!(this._runMode||!this.isAdmin)){if(t.stopPropagation(),this._runSel={pipe:n,pt:null},this.doubleTap(t,`fitting:${i}`)){this.changePool(e.pool.id,s=>{var l;let r=(l=s.pipes)==null?void 0:l.find(d=>d.id===n);r!=null&&r.fittings&&(r.fittings=r.fittings.filter(d=>d.id!==i))});return}this.fitDrag={pipe:n,id:i,base:this._doc,moved:!1,x:t.clientX,y:t.clientY},(o=t.currentTarget.closest("svg"))==null||o.setPointerCapture(t.pointerId)}}jointDown(t,e,n){var i;this._runMode||!this.isAdmin||(t.stopPropagation(),this.jointDrag={id:e,d:n,base:this._doc,moved:!1},(i=t.currentTarget.closest("svg"))==null||i.setPointerCapture(t.pointerId))}jointMove(t,e){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:i,y:o}=e.pt(t),s=t.altKey?i:Math.round(i*100)/100,r=t.altKey?o:Math.round(o*100)/100;this.change((l,d)=>{var u,p,h;let c=(h=(p=(u=d.outdoor.find(f=>f.id===e.pool.id))==null?void 0:u.pool)==null?void 0:p.joints)==null?void 0:h.find(f=>f.id===n.id);c&&([c.x,c.z]=Ye(e.frame,s,n.d),c.kind!=="floor"&&(c.y=Math.max(c.kind==="wall"?.05:-1,F(r))))},n.base,!1)}fittingMove(t,e){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)<4)return;n.moved=!0;let{s:i,y:o}=e.pt(t),s=e.runs.find(c=>c.id===n.pipe);if(!s)return;let r=null;for(let c of s.pieces){let[u,p]=[c.s1-c.s0,c.y1-c.y0],h=u*u+p*p,f=h>0?Math.max(0,Math.min(1,((i-c.s0)*u+(o-c.y0)*p)/h)):0,[g,_]=[c.s0+u*f,c.y0+p*f],m=Math.hypot(g-i,_-o);(!r||m<r.d)&&(r={p:_e(e.frame,g,_,c.d0+(c.d1-c.d0)*f),d:m})}if(!r)return;let l=gt(n.base,e.floor,e.pool),d=r.p;this.change((c,u)=>{var g,_,m,v;let p=(m=(_=(g=u.outdoor.find(y=>y.id===e.pool.id))==null?void 0:g.pool)==null?void 0:_.pipes)==null?void 0:m.find(y=>y.id===n.pipe),h=(v=p==null?void 0:p.fittings)==null?void 0:v.find(y=>y.id===n.id),f=p&&rn(Bt(p,l),d);h&&f&&(h.at=F(f.at))},n.base,!1)}fittingUp(t){let e=this.fitDrag;if(this.fitDrag=null,!!e){if(e.moved)return this.pushHistory(e.base);t&&this.changePool(t.pool.id,n=>{var o,s,r;let i=(r=(s=(o=n.pipes)==null?void 0:o.find(l=>l.id===e.pipe))==null?void 0:s.fittings)==null?void 0:r.find(l=>l.id===e.id);(i==null?void 0:i.kind)==="valve"&&(i.open=i.open===!1)})}}kitFitting(t,e){this._runDraft=null;let n=t&&this._runSel?t.runs.find(o=>o.id===this._runSel.pipe):void 0;if(!t||!n||!n.pieces.length){this._runMode=this._runMode===e?null:e;return}let i=[...n.pieces].sort((o,s)=>Math.hypot(s.s1-s.s0,s.y1-s.y0)-Math.hypot(o.s1-o.s0,o.y1-o.y0))[0];this.addFitting(t,n.id,_e(t.frame,(i.s0+i.s1)/2,(i.y0+i.y1)/2,(i.d0+i.d1)/2),e),this._runMode=null}renderRuns(t,e,n){var _,m,v,y;let i=(_=this._runSel)==null?void 0:_.pipe,o=w=>{let P=_t(t.frame,[w[0],w[2]]);return`${e(P.s)},${n(w[1])}`},s=this._runDraft,r=s&&this.runLast(s,t),l=s?[...s.fromT||s.extend||s.from?[this.runLast({...s,pts:[]},t)]:[],...s.pts].filter(w=>!!w):[],d=this.runHover,c=gt(this._doc,t.floor,t.pool),u={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},p=(w,P,z="",E)=>{let S=c(w),x=S&&_t(t.frame,[S.x,S.z]);return S&&x&&x.d>-.6&&x.d<1.6&&x.s>-.2&&x.s<t.L+.2?[C`<g class="fp3d-wv-node ${z} ${E?"fp3d-wv-joint":""}" transform="translate(${e(x.s)} ${n(S.y)}) scale(${this.wvScale})" @pointerdown=${k=>E&&this.jointDown(k,E,x.d)}>
              <circle r="0.05" /><text y="0.11">${P}</text><title>${this.poolNodeLabel(t.pool,w)}</title>
            </g>`]:[]},h=[...t.floor.furniture.flatMap(w=>{if(u[w.type]===void 0)return[];let P=te(w.type);return P.length?P.flatMap(z=>p(`dev:${w.id}:${z}`,this.t(`port_${z}`))):p(`dev:${w.id}`,u[w.type])}),...(((m=t.pool.pool)==null?void 0:m.joints)??[]).flatMap(w=>w.kind==="wall"||w.kind==="floor"?p(`joint:${w.id}:inside`,this.jointLabel(t.pool,w.id),"fp3d-wv-hole-mark",w.id):p(`joint:${w.id}`,this.jointLabel(t.pool,w.id),"",w.id))],f=this._techMode?Ga({pipes:((v=t.pool.pool)==null?void 0:v.pipes)??[],ports:((y=t.pool.pool)==null?void 0:y.ports)??[],devices:this._doc.floors.flatMap(w=>w.furniture).filter(w=>St.includes(w.type)).map(w=>({id:w.id,type:w.type,open:w.valve_open!==!1,valve:w.valve_position??null})),pumpOn:!0,heaterOn:!1,heating:!1}):null,g=w=>{let P=f==null?void 0:f.get(w);if(!(P!=null&&P.active))return"";let[z,E,S]=Ya(P).map(x=>Math.round(x*255));return`stroke: rgb(${z}, ${E}, ${S}); stroke-opacity: 0.95`};return C`<g class="fp3d-wv-runs">
      ${h}
      ${t.runs.map(w=>{var P;return C`<g class="fp3d-wv-run ${w.id===i?"fp3d-wv-run-sel":""} ${f&&!((P=f.get(w.id))!=null&&P.active)?"fp3d-wv-dry":""}">
          ${w.pieces.map(z=>C`<line class=${z.y0<-.01&&z.y1<-.01?"fp3d-wv-under":""} style=${g(w.id)} x1=${e(z.s0)} y1=${n(z.y0)} x2=${e(z.s1)} y2=${n(z.y1)} @pointerdown=${E=>this.runPieceDown(E,t,w,z.k)} />`)}
          ${w.ends.map(z=>C`<circle class="fp3d-wv-end" cx=${e(z.s)} cy=${n(z.y)} r="0.035" />`)}
          ${w.fittings.map(z=>z.kind==="valve"?C`<g class="fp3d-wv-valve ${z.open?"":"fp3d-wv-shut"}" transform="translate(${e(z.s)} ${n(z.y)}) scale(${this.wvScale})" @pointerdown=${E=>this.fittingDown(E,t,w.id,z.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${z.open?.11:0} y2=${z.open?0:-.11} />
                </g>`:C`<rect class="fp3d-wv-sight" x=${e(z.s)-.06} y=${n(z.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${E=>this.fittingDown(E,t,w.id,z.id)} />`)}
          ${w.id===i?w.points.map(z=>{var E;return C`<circle class="fp3d-wv-runpt ${((E=this._runSel)==null?void 0:E.pt)===z.i?"fp3d-on":""}" cx=${e(z.s)} cy=${n(z.y)} r="0.04" @pointerdown=${S=>this.runPointDown(S,t,w.id,z.i)} />`}):$}
        </g>`})}
      ${l.length?C`<polyline class="fp3d-wv-draft" points=${l.map(o).join(" ")} />`:$}
      ${r&&d?C`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${o(r).split(",")[0]} y1=${o(r).split(",")[1]} x2=${e(d[0])} y2=${n(d[1])} />`:$}
    </g>`}renderRunFoot(t){var u,p,h;let e=this._runMode,n=this._runDraft;if(e==="hole_wall"||e==="hole_floor"||e==="tee"||e==="y")return b`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="valve"||e==="sight")return b`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="draw")return b`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?b`<button class="fp3d-btn" @click=${()=>this.runOut(t,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(t,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:$}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let i=this._runSel,o=i&&((p=(u=t.pool.pool)==null?void 0:u.pipes)==null?void 0:p.find(f=>f.id===i.pipe));if(!i||!o)return $;let s=gt(this._doc,t.floor,t.pool),r=qt(o,s),l=i.pt,d=this.isAdmin,c=o.to?o.from?null:"from":"to";return b`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&((h=r.heights)==null?void 0:h[l])!==void 0?this.len(this.t("wall_run_pt"),r.heights[l]??0,f=>this.changePool(t.pool.id,g=>{var m;let _=(m=g.pipes)==null?void 0:m.find(v=>v.id===o.id);_&&(Object.assign(_,qt(_,s)),_.heights[l]=Math.min(10,Math.max(-5,F(f))))}),.01):$}
      ${d?b`<button class="fp3d-btn" @click=${()=>this.kitFitting(t,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(t,"sight")}>${this.t("wall_run_sight")}</button>
            ${c?b`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let f={pool:t.pool.id,from:"",fromT:null,extend:{pipe:o.id,end:c},pts:[],anchor:null,wall:t.key,d:t.gap};this._runDraft={...f,anchor:this.runLast(f,t)}}}>${this.t("wall_run_more")}</button>`:$}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.pool.id,f=>{var _,m;let g=(_=f.pipes)==null?void 0:_.find(v=>v.id===o.id);g&&(Object.assign(g,qt(g,s)),[g.from,g.to,g.points,g.heights]=[g.to,g.from,[...g.points].reverse(),[...g.heights??[]].reverse()],g.fittings=(m=g.fittings)==null?void 0:m.map(v=>({...v,at:F(Math.max(0,ys(g,s)-v.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(t.pool.id,f=>f.pipes=(f.pipes??[]).filter(g=>g.id!==o.id)),this._runSel=null}}>${this.t("delete")}</button>`:$}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){var n;let t=this.outdoorArea;if((t==null?void 0:t.type)==="pool")return t;let e=((n=this.floor)==null?void 0:n.outdoor.filter(i=>i.type==="pool"))??[];return e.length===1?e[0]:void 0}poolDown(t,e,n,i){var u,p,h,f,g,_,m,v,y,w,P;let o=this.floor;if(!o)return!1;let s=this.poolArea,r=((u=e.closest("[data-pool-node]"))==null?void 0:u.getAttribute("data-pool-node"))??null;if(this._jointPlace&&s)return this.isAdmin&&this.placeJointPlan(s,this._jointPlace,n,((p=e.closest("[data-pipe]"))==null?void 0:p.getAttribute("data-pipe"))??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isAdmin)return!0;if(!s){let E=o.outdoor.find(S=>S.type==="pool"&&S.points.length>=3&&Y(n,S.points));return E&&(this.selectItem("outdoor",E.id),this._tool="pool",this._pipeMode=!0),!0}let z=(h=e.closest("[data-pipe-end]"))==null?void 0:h.getAttribute("data-pipe-end");if(z&&!this._pipeDraft){let[E,S]=z.split("|"),x=(g=(f=s.pool)==null?void 0:f.pipes)==null?void 0:g.find(M=>M.id===E),k=x&&(S==="to"?x.points[x.points.length-1]:x.points[0]);k&&(this._pipeDraft={from:"",points:[],extend:{pipe:E,end:S,at:k}})}else if(r){let E=this._pipeDraft;E?E.extend?(this.extendPipe(s,E.extend,r,E.points),this._pipeDraft=null):r!==E.from&&(this.addPipe(s.id,E.from,r,E.points),this._pipeDraft=null):this._pipeDraft={from:r,points:[]}}else if(this._pipeDraft){let E=this.snap(n,void 0,t.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[F(E[0]),F(E[1])]]}}return!0}let l=z=>[z.slice(0,z.lastIndexOf(":")),Number(z.slice(z.lastIndexOf(":")+1))];if(s&&this.isAdmin){let z=(_=e.closest("[data-pipe-pt]"))==null?void 0:_.getAttribute("data-pipe-pt");if(z){let[S,x]=l(z);return this.doubleTap(t,`pipept:${z}`)?this.change((k,M)=>{var A,j,O,L;let I=(O=(j=(A=M.outdoor.find(D=>D.id===s.id))==null?void 0:A.pool)==null?void 0:j.pipes)==null?void 0:O.find(D=>D.id===S);I==null||I.points.splice(x,1),(L=I==null?void 0:I.heights)==null||L.splice(x,1)}):this.drag={kind:"pipept",pool:s.id,pipe:S,index:x,base:this._doc,moved:!1},!0}let E=(m=e.closest("[data-pipe-seg]"))==null?void 0:m.getAttribute("data-pipe-seg");if(E){let[S,x]=l(E),k=this.snap(n,void 0,t.altKey);return this.change((M,I)=>{var j,O,L,D;let A=(L=(O=(j=I.outdoor.find(W=>W.id===s.id))==null?void 0:j.pool)==null?void 0:O.pipes)==null?void 0:L.find(W=>W.id===S);A==null||A.points.splice(x,0,[F(k[0]),F(k[1])]),(D=A==null?void 0:A.heights)==null||D.splice(x,0,A.heights[x-1]??A.heights[x]??null)}),this._pipeId=S,this.drag={kind:"pipept",pool:s.id,pipe:S,index:x,base:this._doc,moved:!1},!0}}let d=(v=e.closest("[data-pipe]"))==null?void 0:v.getAttribute("data-pipe");if(d)return this._pipeId=d,!0;if(r&&s&&this.isAdmin)return r.startsWith("port:")?this.drag={kind:"poolport",pool:s.id,id:r.slice(5),base:this._doc,moved:!1}:r.startsWith("joint:")?this.drag={kind:"pooljoint",pool:s.id,id:at(r).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:r.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let z=(y=e.closest("[data-out-box]"))==null?void 0:y.getAttribute("data-out-box");if(z){let[S,x]=l(z);return this.drag={kind:"outbox",id:S,corner:x,base:this._doc,moved:!1},!0}let E=(w=e.closest("[data-out-vertex]"))==null?void 0:w.getAttribute("data-out-vertex");if(E){let[S,x]=l(E);return this.drag={kind:"outvertex",id:S,index:x,base:this._doc,moved:!1},!0}}let c=(P=e.closest("[data-outdoor]"))==null?void 0:P.getAttribute("data-outdoor");return c&&o.outdoor.some(z=>z.id===c&&z.type==="pool")?(this.selectItem("outdoor",c),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:c,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(t,e){this.change((n,i)=>{let o=i.outdoor.find(s=>s.id===t);o&&(o.pool??={},e(o.pool,o))})}extendPipe(t,e,n,i){let o=this.floor;if(!o)return;let s=gt(this._doc,o,t);n=this.jointEnd(t,n,i[i.length-1]),this.changePool(t.id,r=>{var c,u;let l=(c=r.pipes)==null?void 0:c.find(p=>p.id===e.pipe);if(!l)return;Object.assign(l,qt(l,s));let d=l.heights??[];if(e.end==="to"){let p=d[d.length-1]??l.height??null;l.points=[...l.points,...i],l.heights=[...d,...i.map(()=>p)],l.to=n}else{let p=ys(l,s),h=d[0]??l.height??null;l.points=[...[...i].reverse(),...l.points],l.heights=[...i.map(()=>h),...d],l.from=n;let f=ys(l,s)-p;l.fittings=(u=l.fittings)==null?void 0:u.map(g=>({...g,at:F(g.at+f)}))}}),this._pipeId=e.pipe}jointEnd(t,e,n,i=[]){var u,p,h;let{kind:o,id:s,port:r}=at(e),l=o==="joint"&&!r?(p=(u=t.pool)==null?void 0:u.joints)==null?void 0:p.find(f=>f.id===s):void 0;if(!l)return e;if(l.kind==="wall"||l.kind==="floor"){let f=this._doc.floors.find(v=>v.outdoor.some(y=>y.id===t.id)),g=f&&gt(this._doc,f,t),[_,m]=[g==null?void 0:g(`joint:${s}:inside`),g==null?void 0:g(`joint:${s}:outside`)];return!n||!_||!m?`joint:${s}:inside`:`joint:${s}:${Math.hypot(n[0]-_.x,n[1]-_.z)<=Math.hypot(n[0]-m.x,n[1]-m.z)?"inside":"outside"}`}let d=new Set([...(((h=t.pool)==null?void 0:h.pipes)??[]).flatMap(f=>[f.from,f.to]),...i]),c=an(l.kind).find(f=>!d.has(`joint:${s}:${f}`));return c?`joint:${s}:${c}`:e}addPipe(t,e,n,i){let o=this.floor;if(!o)return;let s=o.outdoor.find(l=>l.id===t);s&&(e=this.jointEnd(s,e,i[0]),n=this.jointEnd(s,n,i[i.length-1],[e]));let r={id:U("pipe"),from:e,to:n,floor_id:o.id,points:i};this.changePool(t,l=>l.pipes=[...l.pipes??[],r]),this._pipeId=r.id}addPoolPort(t){var p;let e=this.poolArea;if(!e||!this.isAdmin)return;let n=((p=e.pool)==null?void 0:p.ports)??[],i=e.points.length,o=h=>{let f=e.points[h%i],g=e.points[(h+1)%i];return[(f[0]+g[0])/2,(f[1]+g[1])/2]},[s,r]=Xt(e.points),l=this._doc.floors.flatMap(h=>h.furniture).find(h=>h.type==="pool_filter"||h.type==="pool_pump"),d=n.filter(h=>h.kind==="inlet").length,c=t==="skimmer"?Ai(e.points,o(0)):t==="inlet"?Ai(e.points,o(Math.floor(i/2)+d*Math.max(1,Math.floor(i/8)))):t==="drain"?[s,r]:l?[l.x+.8,l.z]:[s,r+3],u={id:U("port"),kind:t,x:F(c[0]),z:F(c[1])};this.changePool(e.id,h=>h.ports=[...n,u])}addPoolDevice(t){let e=this.poolArea;this.addEnergyDevice(t),e&&this.selectItem("outdoor",e.id),this._tool="pool"}deletePoolDevice(t){this.change(e=>{var n;for(let i of e.floors){i.furniture=i.furniture.filter(o=>o.id!==t);for(let o of i.outdoor)(n=o.pool)!=null&&n.pipes&&(o.pool.pipes=o.pool.pipes.filter(s=>s.from!==`dev:${t}`&&s.to!==`dev:${t}`))}})}deletePoolPort(t,e){this.changePool(t,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==e),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${e}`&&i.to!==`port:${e}`)})}togglePoolValve(t){let e=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===t);!e||e.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===t);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(t,e){this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===t);i&&Object.assign(i,e)})}portText(t){let{kind:e,port:n}=at(t),i={in:"A",out1:"B",out2:"C"};return e==="joint"&&n&&i[n]?`${this.t("card_port")} ${i[n]}`:n?this.t(`port_${n}`):""}openCard(t,e){this._card={pool:t,part:e},this._cardJoin=null}partPorts(t,e){var o,s;let{kind:n,id:i}=at(e);if(n==="joint"){let r=(s=(o=t.pool)==null?void 0:o.joints)==null?void 0:s.find(l=>l.id===i);return r?an(r.kind).map(l=>`${e}:${l}`):[]}if(n==="dev"){let r=this._doc.floors.flatMap(d=>d.furniture).find(d=>d.id===i),l=r?te(r.type):[];return l.length?l.map(d=>`${e}:${d}`):[e]}return[e]}partStatus(t,e){var o;let n=((o=t.pool)==null?void 0:o.pipes)??[],i=this.partPorts(t,e);return[i.filter(s=>n.some(r=>r.from===s||r.to===s)).length,i.length]}cardConnect(t,e,n,i){var u,p;let o=this._doc.floors.find(h=>h.outdoor.some(f=>f.id===t.id));if(!o||!n)return;let s=gt(this._doc,o,t),r=((u=t.pool)==null?void 0:u.ports)??[],l=h=>{var m;let{kind:f,id:g,port:_}=at(h);return f==="port"?Tn(((m=r.find(v=>v.id===g))==null?void 0:m.kind)??"inlet"):f==="dev"?Rn(_):null},d=this.jointEnd(t,n,void 0,[e]),c=Si({from:e,vias:i,to:[d],floorId:o.id},s,((p=t.pool)==null?void 0:p.joints)??[],l,h=>U(h));this.changePool(t.id,h=>{h.joints=[...h.joints??[],...c.joints],h.pipes=[...h.pipes??[],...c.pipes]}),this._cardJoin=null}cardDisconnect(t,e){this.changePool(t.id,n=>n.pipes=(n.pipes??[]).filter(i=>!e.pipes.includes(i.id)))}cardReroute(t,e){var f,g;let n=((f=t.pool)==null?void 0:f.pipes)??[],i=n.find(_=>_.id===e.pipes[0]);if(!i||!e.other)return;let o=i.from===e.start,s=[...e.holes.map(_=>({kind:"hole",joint:_.joint,dir:_.dir})),...e.fittings.map(_=>({kind:_}))],r=this._doc.floors.find(_=>_.outdoor.some(m=>m.id===t.id));if(!r)return;let l={...t,pool:{...t.pool,pipes:n.filter(_=>!e.pipes.includes(_.id))}},d=gt(this._doc,r,l),c=o?e.start:e.other,u=o?e.other:e.start,p=o?s:[...e.holes].reverse().map(_=>({kind:"hole",joint:_.joint,dir:_.dir==="in"?"out":"in"})).concat(e.fittings.map(_=>({kind:_}))),h=Si({from:c,vias:p,to:[u],floorId:r.id},d,((g=t.pool)==null?void 0:g.joints)??[],()=>null,_=>U(_));this.changePool(t.id,_=>{_.pipes=[...(_.pipes??[]).filter(m=>!e.pipes.includes(m.id)),...h.pipes]})}renderPartCard(){var E,S,x,k,M,I;let t=this._card,e=t?this._doc.floors.flatMap(A=>A.outdoor).find(A=>A.id===t.pool):void 0;if(!t||!e)return $;let n=this.isAdmin,{kind:i,id:o}=at(t.part),s=i==="joint"?(S=(E=e.pool)==null?void 0:E.joints)==null?void 0:S.find(A=>A.id===o):void 0,r=i==="dev"?this._doc.floors.flatMap(A=>A.furniture).find(A=>A.id===o):void 0,l=i==="port"?(k=(x=e.pool)==null?void 0:x.ports)==null?void 0:k.find(A=>A.id===o):void 0;if(!s&&!r&&!l)return $;let d=((M=e.pool)==null?void 0:M.pipes)??[],c=((I=e.pool)==null?void 0:I.joints)??[],u=this.partPorts(e,t.part),p=this.poolEnds(e).filter(A=>wt(A.node)!==t.part&&!A.used),h=c.filter(A=>A.kind==="wall"||A.kind==="floor"),f=A=>this.poolNodeLabel(e,A),g=A=>at(A).port?this.portText(A):this.t("card_port"),_=A=>A.kind==="hole"?this.t(A.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(e,A.joint)}):this.t(A.kind==="valve"?"wall_run_valve":"wall_run_sight"),m=()=>{this._card=null,this._cardJoin=null},v=()=>s?[s.x,s.z]:r?[r.x,r.z]:l?[l.x,l.z]:null,y=u.map(A=>{var L;let j=ka(d,c,A),O=((L=this._cardJoin)==null?void 0:L.port)===A?this._cardJoin:null;return b`<div class="fp3d-pc-row ${j.length?"fp3d-on":""}">
        <b>${g(A)}</b>
        <div class="fp3d-pc-conns">
          ${j.map(D=>b`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...D.holes.map(W=>_({kind:"hole",joint:W.joint,dir:W.dir})),...D.fittings.map(W=>_({kind:W}))].map(W=>b`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${W}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${D.other?b`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(e.id,wt(D.other))}>${f(D.other)}</button>`:b`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?b`<span class="fp3d-pc-tools">
                    ${D.other?b`<button class="fp3d-btn" @click=${()=>this.cardReroute(e,D)}>${this.t("card_reroute")}</button>`:$}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(e,D)}>${this.t("card_disconnect")}</button>
                  </span>`:$}
            </div>`)}
          ${n&&(!j.length||u.length===1)?O?this.renderJoinPicker(e,A,O,p,h,_):b`<button class="fp3d-btn ${j.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:A,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:$}
        </div>
      </div>`}),[w,P]=this.partStatus(e,t.part),z=v();return b`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${A=>A.target===A.currentTarget&&m()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${A=>A.key==="Escape"&&m()}>
        <div class="fp3d-wv-head">
          ${s&&n?b`<input
                class="fp3d-pc-name"
                .value=${s.name??""}
                placeholder=${this.jointLabel(e,s.id)}
                title=${this.t("joint_name")}
                @change=${A=>{let j=A.target.value.trim().slice(0,60);this.changePool(e.id,O=>{var D;let L=(D=O.joints)==null?void 0:D.find(W=>W.id===s.id);L&&(L.name=j||null)})}}
              />`:b`<b class="fp3d-pc-title">${f(t.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:w,b:P})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${m}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(e,t.part,u)}
          <div class="fp3d-pc-rows">${y}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${z?b`<button class="fp3d-btn" @click=${()=>{m(),this._wallView=null,this._tool="pool",this.showPoint(z[0],z[1])}}>${this.t("card_show_plan")}</button>`:$}
          ${z&&!l?b`<button class="fp3d-btn" @click=${()=>{m(),this.pickWall(z)}}>▦ ${this.t("card_show_wall")}</button>`:$}
          <span class="fp3d-wv-grow"></span>
          ${n?b`<button class="fp3d-btn fp3d-danger" @click=${()=>{m(),r?this.deletePoolDevice(r.id):l?this.deletePoolPort(e.id,l.id):s&&this.changePool(e.id,A=>{A.joints=(A.joints??[]).filter(j=>j.id!==s.id),A.pipes=(A.pipes??[]).filter(j=>wt(j.from)!==t.part&&wt(j.to)!==t.part)})}}>${this.t("delete")}</button>`:$}
        </div>
      </div>
    </div>`}renderJoinPicker(t,e,n,i,o,s){let r=p=>{var _,m;let{kind:h,id:f}=at(p);if(h==="port")return"pool";if(h==="dev")return"tech";let g=(m=(_=t.pool)==null?void 0:_.joints)==null?void 0:m.find(v=>v.id===f);return(g==null?void 0:g.kind)==="wall"||(g==null?void 0:g.kind)==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(p=>({g:p,items:i.filter(h=>r(h.node)===p)})).filter(p=>p.items.length),d=p=>this._cardJoin={...n,...p},c=p=>d({vias:[...n.vias,p]}),u=new Set(n.vias.flatMap(p=>p.kind==="hole"?[p.joint]:[]));return b`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(t,e)}</span>
        ${n.vias.map((p,h)=>b`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>d({vias:n.vias.filter((f,g)=>g!==h)})}>${s(p)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?b`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>d({to:""})}>${this.poolNodeLabel(t,n.to)} <i>✕</i></button>`:b`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?$:b`<div class="fp3d-pc-steps">
            ${o.some(p=>!u.has(p.id))?b`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${o.filter(p=>!u.has(p.id)).map(p=>b`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(t,p.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>c({kind:"hole",joint:p.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>c({kind:"hole",joint:p.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:$}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>c({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>c({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${l.map(({g:p,items:h})=>b`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${p}`)}</span>
                <div class="fp3d-pc-picks">${h.map(f=>b`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>d({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(t,e,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(t,e,n){var f,g,_;let i=((f=t.pool)==null?void 0:f.pipes)??[],o=m=>i.some(v=>v.from===m||v.to===m),{kind:s,id:r}=at(e),l=s==="joint"?(_=(g=t.pool)==null?void 0:g.joints)==null?void 0:_.find(m=>m.id===r):void 0,d=s==="dev"?this._doc.floors.flatMap(m=>m.furniture).find(m=>m.id===r):void 0,c={},u=$,p=(l==null?void 0:l.kind)??(d?d.type:"port");p==="tee"?(Object.assign(c,{in:[20,60],out1:[180,60],out2:[100,130]}),u=C`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):p==="y"?(Object.assign(c,{in:[20,70],out1:[180,25],out2:[180,115]}),u=C`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):p==="wall"||p==="floor"?(Object.assign(c,{outside:[20,70],inside:[180,70]}),u=C`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):p==="pool_pump"?(Object.assign(c,{suction:[20,95],pressure:[110,10]}),u=C`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):p==="pool_filter"?(Object.assign(c,{pump:[20,40],return:[180,40],waste:[100,4]}),u=C`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):p==="pool_heat_pump"?(Object.assign(c,{in:[180,95],out:[180,45]}),u=C`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(c[""]=[180,70],u=C`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let h=p==="pool_filter"?[100,41]:p==="pool_pump"?[100,85]:[100,70];return b`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(m=>{let v=at(m).port??"",y=c[v]??c[""]??[180,70],w=o(m);return C`<g class="fp3d-pc-stub ${w?"fp3d-on":""}" @click=${()=>this.isAdmin&&!w&&(this._cardJoin={port:m,to:"",vias:[]})}>
          <line x1=${h[0]} y1=${h[1]} x2=${y[0]} y2=${y[1]} />
          <circle cx=${y[0]} cy=${y[1]} r="7" />
          <title>${v?this.portText(m):""}</title>
        </g>`})}
      ${u}
      ${n.map(m=>{let v=at(m).port,y=c[v??""]??[180,70];return v?C`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,y[0]))} y=${y[1]<70?y[1]+20:y[1]-12}>${this.portText(m)}</text>`:$})}
    </svg>`}jointLabel(t,e){var r,l;let n=((r=t.pool)==null?void 0:r.joints)??[],i=n.find(d=>d.id===e);if(!i)return this.t("pool_loose_end");let o=d=>d==="wall"||d==="floor"?"hole":d??"tee";if((l=i.name)!=null&&l.trim())return i.name.trim();let s=n.filter(d=>o(d.kind)===o(i.kind));return`${this.t(`joint_${i.kind??"tee"}`,{n:s.indexOf(i)+1})}`}poolEnds(t){var o,s,r;let e=((o=t.pool)==null?void 0:o.pipes)??[],n=l=>e.some(d=>d.from===l||d.to===l),i=[];for(let l of((s=t.pool)==null?void 0:s.ports)??[])i.push({node:`port:${l.id}`,label:this.poolNodeLabel(t,`port:${l.id}`),used:!1});for(let l of this._doc.floors.flatMap(d=>d.furniture).filter(d=>St.includes(d.type)&&d.type!=="pool_valve")){let d=te(l.type);for(let c of d.length?d.map(u=>`dev:${l.id}:${u}`):[`dev:${l.id}`])i.push({node:c,label:this.poolNodeLabel(t,c),used:d.length>0&&n(c)})}for(let l of((r=t.pool)==null?void 0:r.joints)??[])for(let d of an(l.kind)){let c=`joint:${l.id}:${d}`;i.push({node:c,label:this.poolNodeLabel(t,c),used:n(c)})}return i}placeJointPlan(t,e,n,i){var c,u;let o=this.floor;if(!o)return;let s=gt(this._doc,o,t),r=i?(u=(c=t.pool)==null?void 0:c.pipes)==null?void 0:u.find(p=>p.id===i):void 0;if(r){let p=Bt(r,s),h=null;for(let g=1;g<p.length;g++){let[_,m]=[p[g-1],p[g]],[v,y]=[m[0]-_[0],m[2]-_[2]],w=v*v+y*y,P=w>0?Math.max(0,Math.min(1,((n[0]-_[0])*v+(n[1]-_[2])*y)/w)):0,z=[_[0]+v*P,_[1]+(m[1]-_[1])*P,_[2]+y*P],E=Math.hypot(z[0]-n[0],z[2]-n[1]);(!h||E<h.d)&&(h={p:z,d:E})}let f=h&&Bo(r,s,h.p,U("joint"),U("pipe"));if(f){this.changePool(t.id,g=>{g.joints=[...g.joints??[],{...f.joint,kind:e}],g.pipes=(g.pipes??[]).flatMap(_=>_.id===r.id?[{...f.first,to:`joint:${f.joint.id}:in`},{...f.second,from:`joint:${f.joint.id}:out1`}]:[_])});return}}let l=o.rooms.some(p=>p.points.length>=3&&Y(n,p.points)),d=this.snap(n);this.changePool(t.id,p=>p.joints=[...p.joints??[],{id:U("joint"),kind:e,x:F(d[0]),z:F(d[1]),y:l?.5:-.3}])}poolNodePos(t,e){var o,s;if(!e)return null;let n=this._doc.floors.find(r=>r.outdoor.some(l=>l.id===t.id));if(e.startsWith("joint:")||e.split(":").length>2){let r=n&&gt(this._doc,n,t)(e);return r?[r.x,r.z]:null}if(e.startsWith("port:")){let r=(s=(o=t.pool)==null?void 0:o.ports)==null?void 0:s.find(l=>l.id===e.slice(5));return r?[r.x,r.z]:null}let i=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.id===e.slice(4));return i?[i.x,i.z]:null}poolNodeLabel(t,e){var d;let{kind:n,id:i,port:o}=at(e);if(!e)return this.t("pool_loose_end");if(o||n==="joint"){let c=n==="joint"?this.jointLabel(t,i):this.poolNodeLabel(t,`${n}:${i}`);return o?`${c} \xB7 ${this.portText(e)}`:c}if(e.startsWith("port:")){let c=((d=t.pool)==null?void 0:d.ports)??[],u=c.find(h=>h.id===e.slice(5));if(!u)return"?";let p=c.filter(h=>h.kind===u.kind);return`${this.t(`pool_port_${u.kind}`)}${p.length>1?` ${p.indexOf(u)+1}`:""}`}let s=this._doc.floors.flatMap(c=>c.furniture).filter(c=>St.includes(c.type)),r=s.find(c=>c.id===e.slice(4));if(!r)return"?";let l=s.filter(c=>c.type===r.type);return`${r.name||this.t(`furn_${r.type}`)}${l.length>1&&!r.name?` ${l.indexOf(r)+1}`:""}`}renderPoolPlan(t){var h,f,g,_;let e=this.poolArea,n=t.furniture.filter(m=>St.includes(m.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},o=e?(((h=e.pool)==null?void 0:h.pipes)??[]).filter(m=>m.floor_id===t.id):[],s=o.map(m=>{let v=this.poolNodePos(e,m.from),y=this.poolNodePos(e,m.to);if((!v||!y)&&!m.heights)return $;let w=v?1:0,P=[...v?[v]:[],...m.points,...y?[y]:[]].map(j=>this.toScreen(j));if(P.length<2)return $;let z=m.id===this._pipeId,E=0;for(let j=1;j<P.length-1;j++)Math.hypot(P[j+1][0]-P[j][0],P[j+1][1]-P[j][1])>Math.hypot(P[E+1][0]-P[E][0],P[E+1][1]-P[E][1])&&(E=j);let[S,x]=P[E],[k,M]=P[E+1],I=Math.atan2(M-x,k-S)*180/Math.PI,A=P.map(j=>j.join(",")).join(" ");return C`<g data-pipe=${m.id}>
        <polyline class="fp3d-pipe-hit" points=${A} />
        <polyline class="fp3d-pipe ${z?"fp3d-pipe-sel":""}" points=${A} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(S+k)/2} ${(x+M)/2}) rotate(${I})`} />
        ${z&&this.isAdmin?C`${P.slice(0,-1).map((j,O)=>C`<line class="fp3d-pipe-seg" data-pipe-seg=${`${m.id}:${O+1-w}`} x1=${j[0]} y1=${j[1]} x2=${P[O+1][0]} y2=${P[O+1][1]} />`)}
              ${m.points.map((j,O)=>{let[L,D]=this.toScreen(j);return C`<g class="fp3d-vertex" data-pipe-pt=${`${m.id}:${O}`}><circle cx=${L} cy=${D} r="14" class="fp3d-hit" /><circle cx=${L} cy=${D} r="5" /></g>`})}`:$}
      </g>`}),r=(m,v,y,w,P)=>{let[z,E]=this.toScreen(v);return C`<g class="fp3d-pool-node ${w}" data-pool-node=${m}><title>${P}</title><circle cx=${z} cy=${E} r="16" class="fp3d-hit" /><circle cx=${z} cy=${E} r="10" /><text x=${z} y=${E}>${y}</text></g>`},l=e?(((f=e.pool)==null?void 0:f.ports)??[]).map(m=>r(`port:${m.id}`,[m.x,m.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[m.kind],`fp3d-pool-port-${m.kind}`,this.poolNodeLabel(e,`port:${m.id}`))):[],d=n.map(m=>r(`dev:${m.id}`,[m.x,m.z],m.type==="pool_valve"?m.valve_open===!1?"\u2715":"":i[m.type],`fp3d-pool-dev ${m.type==="pool_valve"&&m.valve_open===!1?"fp3d-pool-closed":""}`,e?this.poolNodeLabel(e,`dev:${m.id}`):m.type)),c=$;if(e&&this._pipeDraft){let m=((g=this._pipeDraft.extend)==null?void 0:g.at)??this.poolNodePos(e,this._pipeDraft.from);if(m){let v=[m,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(y=>this.toScreen(y).join(",")).join(" ");c=C`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${v} />`}}let u=e?(((_=e.pool)==null?void 0:_.joints)??[]).map(m=>r(`joint:${m.id}`,[m.x,m.z],m.kind==="wall"||m.kind==="floor"?"\u25CE":m.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(e,m.id))):[],p=o.flatMap(m=>m.heights&&m.points.length?["from","to"].filter(v=>!m[v]).map(v=>{let[y,w]=this.toScreen(v==="to"?m.points[m.points.length-1]:m.points[0]);return C`<g class="fp3d-pipe-end" data-pipe-end=${`${m.id}|${v}`}><circle cx=${y} cy=${w} r="14" class="fp3d-hit" /><circle cx=${y} cy=${w} r="6" /></g>`}):[]);return C`<g class="fp3d-pool-plan">${s}${c}${u}${p}${l}${d}</g>`}renderPoolPanel(t){let e=(t==null?void 0:t.outdoor.filter(i=>i.type==="pool"))??[],n=this.poolArea;return n?b`${e.length>1?b`<section>
            <div class="fp3d-seg">${e.map((i,o)=>b`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${o+1}</button>`)}</div>
          </section>`:$}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:b`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(e.length?"pool_choose":"pool_tool_empty")}</p>
        ${e.length?b`<div class="fp3d-actions">${e.map((i,o)=>b`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${e.length>1?o+1:""}</button>`)}</div>`:$}
      </section>`}renderPoolTech(t){var r,l,d;if(!Vt("pool"))return $;let e=this.isAdmin,n=((r=t.pool)==null?void 0:r.ports)??[],i=((l=t.pool)==null?void 0:l.pipes)??[],o=this._doc.floors.flatMap(c=>c.furniture).filter(c=>St.includes(c.type)),s=i.find(c=>c.id===this._pipeId);return b`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!e} title=${this.t("tech_open_hint")} @click=${()=>{this.techPick=!0,this._wallPick=!0}}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(c=>b`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolPort(c)}>+ ${this.t(`pool_port_${c}`)}</button>`)}
        </div>
        ${n.map(c=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`port:${c.id}`)}>${this.poolNodeLabel(t,`port:${c.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(t,`port:${c.id}`)[0]?"\u2713":"\u25CB"}</span>
            ${c.kind==="inlet"||c.kind==="skimmer"?b`<label class="fp3d-pool-depth" title=${this.t("pool_port_depth_hint")}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(c.depth??(c.kind==="inlet"?.3:0))} ?disabled=${!e} @change=${u=>{let p=Number(u.target.value.replace(",","."));Number.isFinite(p)&&this.change((h,f)=>{var _,m,v;let g=(v=(m=(_=f.outdoor.find(y=>y.id===t.id))==null?void 0:_.pool)==null?void 0:m.ports)==null?void 0:v.find(y=>y.id===c.id);g&&(g.depth=Math.min(3,Math.max(0,F(p))))})}} />m</label
                >`:$}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolPort(t.id,c.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${St.filter(c=>c!=="pool_valve").map(c=>b`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolDevice(c)}>+ ${this.t(`furn_${c}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${o.map(c=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`dev:${c.id}`)}>${this.poolNodeLabel(t,`dev:${c.id}`)}</button>
            <span class="fp3d-ports">${te(c.type).map(u=>b`<i class=${i.some(p=>p.from===`dev:${c.id}:${u}`||p.to===`dev:${c.id}:${u}`)?"fp3d-on":""}>${this.t(`port_${u}`)}</i>`)}</span>
            ${c.type==="pool_filter"?b`<select ?disabled=${!e} title=${this.t("pool_valve_type")} @change=${u=>this.setPoolDevice(c.id,{variant:u.target.value==="top6"?null:u.target.value})}>
                    ${va.map(u=>b`<option value=${u} ?selected=${(c.variant??"top6")===u}>${this.t(`valve_${u}`)}</option>`)}
                  </select>
                  <select ?disabled=${!e} title=${this.t("pool_valve_position")} @change=${u=>this.setPoolDevice(c.id,{valve_position:u.target.value})}>
                  ${br.map(u=>b`<option value=${u} ?selected=${(c.valve_position??"filter")===u}>${this.t(`valve_${u}`)}</option>`)}
                </select>`:c.type==="pool_heat_pump"?b`<select ?disabled=${!e} title=${this.t("hp_ports")} @change=${u=>this.setPoolDevice(c.id,{variant:u.target.value==="right"?null:u.target.value})}>
                    ${["right","left","back"].map(u=>b`<option value=${u} ?selected=${(c.variant??"right")===u}>${this.t("hp_ports")}: ${this.t(`hp_side_${u}`)}</option>`)}
                  </select>`:c.type==="pool_valve"?b`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${c.valve_open!==!1} ?disabled=${!e} @change=${u=>this.setPoolDevice(c.id,{valve_open:u.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:$}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(c.id)}>✕</button>
          </div>`)}
        ${(((d=t.pool)==null?void 0:d.joints)??[]).map(c=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`joint:${c.id}`)}>${this.jointLabel(t,c.id)}</button>
            <span class="fp3d-ports">${an(c.kind).map(u=>{let p=`joint:${c.id}:${u}`,h=i.some(f=>f.from===p||f.to===p||(c.kind??"tee")!=="wall"&&(c.kind??"tee")!=="floor"&&wt(f.from)===`joint:${c.id}`&&!at(f.from).port&&u==="in");return b`<i class=${h?"fp3d-on":""} title=${this.portText(p)}>${this.portText(p)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,u=>{u.joints=(u.joints??[]).filter(p=>p.id!==c.id),u.pipes=(u.pipes??[]).filter(p=>wt(p.from)!==`joint:${c.id}`&&wt(p.to)!==`joint:${c.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!e} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(c=>b`<div class="fp3d-pool-row ${c.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=c.id}>${this.poolNodeLabel(t,c.from)} → ${this.poolNodeLabel(t,c.to)}</button>
            <button class="fp3d-btn" ?disabled=${!e} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===c.id);p&&([p.from,p.to,p.points]=[p.to,p.from,[...p.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,u=>u.pipes=(u.pipes??[]).filter(p=>p.id!==c.id))}>✕</button>
          </div>`)}
        ${s?b`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),s.height??.3,c=>this.changePool(t.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===s.id);p&&(p.height=Math.min(10,Math.max(-5,F(c))))}),.05)}
            </div>`:$}
        ${ft("pool")||!Vt("pool")?$:b`<p class="fp3d-sub">${this.t("pool_pipes_pro")}</p>`}
      </section>`}renderPoolShape(t){let e=this.isAdmin,n=At(t.points),i=t.pool_shape,o=(l,d,c,u)=>i&&this.updateOutdoor({points:li(i,l,d,c,u)}),s=(n.x0+n.x1)/2,r=(n.z0+n.z1)/2;return b`${i==="round"?b`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let d=Math.max(.5,l)/2;o(s-d,r-d,s+d,r+d)},.01,1)}`:i==="oval"?b`${this.len(this.t("width"),n.x1-n.x0,l=>o(s-Math.max(1,l)/2,n.z0,s+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>o(n.x0,r-Math.max(1,l)/2,n.x1,r+Math.max(1,l)/2),.01,1)}`:$}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!t.above} ?disabled=${!e} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${t.above?this.len(this.t("pool_height"),ai(t),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,F(l)))}),.05,.4):$}
      ${this.len(this.t("pool_depth"),fo(t),l=>this.updateOutdoor({depth:Math.min(5,Math.max(.3,F(l)))}),.05,.3)}
      ${t.above?$:this.len(this.t("pool_rim"),t.rim??.06,l=>this.updateOutdoor({rim:Math.min(2,Math.max(-.3,F(l)))}),.01,-.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!t.above&&this.floor&&!mo(this.floor,t)?b`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>`:$}`}renderPoolPro(t){if(!Vt("pool"))return $;if(!ft("pool"))return b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🏊 ${this.t("pro_name_pool")}</b></div>
        <p class="fp3d-sub">${this.t("pool_teaser")}</p>
      </section>`;if(!this.hass)return $;let e=t.pool??{},n=Ba(this.hass,{}),i=r=>this.updateOutdoor({pool:{...e,...r}}),o=(r,l,d)=>this.entitySelect(this.t(l),e[r]??null,n[r]??void 0,this.entityOptions(d),c=>i({[r]:c==="none"?"none":c})),s=r=>r.startsWith("sensor.");return b`<section>
      <h3>🏊 ${this.t("pro_name_pool")}</h3>
      <p class="fp3d-sub">${this.t("pool_pro_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${o("temperature","pool_temperature",r=>/^(sensor|climate|water_heater)\./.test(r))}
        ${o("heater","pool_heater",r=>/^(climate|water_heater|switch|input_boolean)\./.test(r))}
        ${o("pump","pool_pump",r=>/^(switch|fan|input_boolean|binary_sensor|sensor)\./.test(r))}
        ${o("light","pool_light",r=>/^(light|switch)\./.test(r))}
        ${o("ph","pool_ph",s)}
        ${o("chlorine","pool_chlorine_role",s)}
        ${o("cover","pool_cover",r=>r.startsWith("cover."))}
      </div>
      ${t.pool?$:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!this.isAdmin} @click=${()=>this.updateOutdoor({pool:{}})}>${this.t("pool_activate")}</button>`}
    </section>`}renderRooms(t){return C`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return C`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(Xt(e.points));return C`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(Ct(e.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return $;let[n,i]=this.toScreen(t.points[e]),[o,s]=this.toScreen(t.points[(e+1)%t.points.length]);return C`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${s} />`}renderMeter(t){var o;let e=(o=this._doc.energy)==null?void 0:o.meter;if(!e||e.floor_id!==t.id)return $;let[n,i]=this.toScreen([e.x,e.z]);return C`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale,n=this._furnitureId?this.selection():[],i=n.length>1;return C`<g>${this.renderSelectionFrame(t,n)}${t.furniture.map(o=>{var v,y;let s=n.includes(o.id),r=o.id===this._furnitureId&&!i,[l,d]=this.toScreen([o.x,o.z]),c=Math.min(o.w,o.d)*e>44,u=o.rotation*Math.PI/180,p=o.d/2+Math.max(.3,26/e),[h,f]=this.toScreen([o.x-Math.sin(u)*p,o.z+Math.cos(u)*p]),[g,_]=this.toScreen([o.x-Math.sin(u)*(o.d/2),o.z+Math.cos(u)*(o.d/2)]),m=Gt(o.type)&&!!o.entity&&o.entity!=="none"&&((y=(v=this.hass)==null?void 0:v.states[o.entity])==null?void 0:y.state)==="on";return C`<g data-furniture=${o.id} class=${`fp3d-furn${r||s?" fp3d-furn-sel":""}${m?" fp3d-furn-lit":""}${fe.includes(o.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${l} ${d}) rotate(${o.rotation}) scale(${o.mirror?-e:e} ${e})">
          <rect class="fp3d-furn-body" x=${-o.w/2} y=${-o.d/2} width=${o.w} height=${o.d} />
          <g class="fp3d-furn-sym">${sa(o.type,o.w,o.d)}</g>
          <line class="fp3d-furn-front" x1=${-o.w/2} y1=${o.d/2} x2=${o.w/2} y2=${o.d/2} />
        </g>
        ${c?C`<text x=${l} y=${d+4}>${Ae(this.hass,o.type)}</text>`:$}
      </g>
      ${r&&this.isAdmin&&!o.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([w,P])=>{let[z,E]=this.toScreen([o.x+w*o.w*Math.cos(u)/2-P*o.d*Math.sin(u)/2,o.z+w*o.w*Math.sin(u)/2+P*o.d*Math.cos(u)/2]);return C`<g class="fp3d-resize" data-resize=${`${o.id}:${w}:${P}`}>
              <circle cx=${z} cy=${E} r="14" class="fp3d-hit" />
              <rect x=${z-5} y=${E-5} width="10" height="10" rx="2" />
            </g>`}):$}
      ${r?(()=>{let[w,P]=this.toScreen([o.x+Math.sin(u)*(o.d/2+18/e),o.z-Math.cos(u)*(o.d/2+18/e)]);return C`<text class="fp3d-dim" x=${w} y=${P+4}>${this.m(o.w,2)} × ${this.m(o.d,2)}</text>`})():$}
      ${r&&o.locked?C`<text class="fp3d-lock" x=${h} y=${f+5}>🔒</text>`:$}
      ${r&&this.isAdmin&&!o.locked?C`<g class="fp3d-rotate" data-rotate=${o.id}>
            <line x1=${g} y1=${_} x2=${h} y2=${f} />
            <circle cx=${h} cy=${f} r="16" class="fp3d-hit" />
            <circle cx=${h} cy=${f} r="8" />
            <path d="M${h-4} ${f-1}a4 4 0 1 1 2 3.5" />
          </g>`:$}`})}</g>`}renderSelectionFrame(t,e){let n=this.drag,i=(n==null?void 0:n.kind)==="marquee"?C`<rect class="fp3d-marquee" x=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[0]))} y=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[1]))} width=${Math.abs(this.toScreen(n.end)[0]-this.toScreen(n.start)[0])} height=${Math.abs(this.toScreen(n.end)[1]-this.toScreen(n.start)[1])} />`:$;if(e.length<2)return i;let o=t.furniture.filter(u=>e.includes(u.id)).flatMap(u=>Nt(u));if(!o.length)return i;let[s,r]=this.toScreen([Math.min(...o.map(u=>u[0])),Math.min(...o.map(u=>u[1]))]),[l,d]=this.toScreen([Math.max(...o.map(u=>u[0])),Math.max(...o.map(u=>u[1]))]),c=!this._multi.length;return C`${i}<g class=${`fp3d-selframe${c?" fp3d-selframe-block":""}`}>
      <rect x=${s-6} y=${r-6} width=${l-s+12} height=${d-r+12} rx="6" />
      <text x=${s-4} y=${r-12}>${c?`\u25A3 ${this.t("block_title")} \xB7 ${e.length}`:this.t("multi_title",{n:e.length})}</text>
    </g>`}renderBlockForm(){var s,r;let t=this.selection(),e=(((s=this.floor)==null?void 0:s.furniture)??[]).filter(l=>t.includes(l.id)),n=!this._multi.length&&!!((r=e[0])!=null&&r.group),i=e.every(l=>this.isFixedItem("furniture",l.id)),o=!i&&e.some(l=>this.isFixedItem("furniture",l.id));return b`<section>
      <div class="fp3d-h3row"><h3>${n?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</h3></div>
      <p class="fp3d-sub">${this.t(n?"block_hint":"multi_hint")}</p>
      ${o?b`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>`:$}
      <div class="fp3d-block-parts">
        ${e.map(l=>b`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${()=>{this.selectItem("furniture",l.id),this._single=!!l.group}}>${l.name||Ae(this.hass,l.type)}</button>`)}
      </div>
      <div class="fp3d-actions">
        ${n?b`<button class="fp3d-btn" @click=${()=>this.ungroupSelection()}>${this.t("block_break")}</button>`:b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
        <button class="fp3d-btn ${o?"fp3d-primary":""}" @click=${()=>this.lockSelection(!i&&!o)}>${i?`\u{1F513} ${this.t("unfix")}`:o?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`}renderMultiToggle(){return b`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${t=>this._multiMode=t.target.checked} /> ${this.t("multi_mode")}</label>`}renderOpenings(t,e){return C`<g>${t.openings.map(n=>{let i=nn(n,t.rooms,t.walls??[]);if(!i)return $;let{room:o,edge:s}=i,r=jo(e,n,i),l=xe(o,s,n.offset-n.width/2),d=xe(o,s,n.offset+n.width/2),c=(d[0]-l[0])/(n.width||1),u=(d[1]-l[1])/(n.width||1),p=Pt(o.points)>=0?1:-1,h=[-u*p,c*p],f=[.06,.06];r&&(f=r.wall.free||r.wall.roomLeft===o.id?[r.wall.left,r.wall.right]:[r.wall.right,r.wall.left]);let g=(S,x)=>this.toScreen([S[0]+h[0]*x,S[1]+h[1]*x]),_=[g(l,f[0]+.01),g(d,f[0]+.01),g(d,-f[1]-.01),g(l,-f[1]-.01)],m=n.id===this._openingId,v=ui(n,(r==null?void 0:r.wall.exterior)??!1),y=n.type==="door"&&$o(v),w=`fp3d-open fp3d-open-${n.type}${y?" fp3d-open-front":""}${m?" fp3d-open-sel":""}`,P;if(n.type==="garage"){let S=g(l,f[0]-.04),x=g(d,f[0]-.04),k=g(l,f[0]+Math.min(2,n.height)),M=g(d,f[0]+Math.min(2,n.height));P=C`<line x1=${S[0]} y1=${S[1]} x2=${x[0]} y2=${x[1]} />
          <path class="fp3d-open-track" d="M${S[0]} ${S[1]}L${k[0]} ${k[1]}M${x[0]} ${x[1]}L${M[0]} ${M[1]}" />`}else if(n.type==="door"){let S=n.swing==="out",x=S?-f[1]:f[0],k=n.hinge==="left"==p>0,M=n.leaves===2,I=l,A=d,j=[],O=zr(n.width,v,k,n);if(O){let X=G=>G<=.02?l:G>=n.width-.02?d:xe(o,s,n.offset-n.width/2+G);I=X(O.x0),A=X(O.x1),j=O.panels.map(([G,ot])=>[X(G),X(ot)])}let L=[(I[0]+A[0])/2,(I[1]+A[1])/2],D=(M?.5:1)*Math.hypot(A[0]-I[0],A[1]-I[1]),W=(f[0]-f[1])/2,tt=j.map(([X,G])=>{let ot=g(X,W+.035),q=g(G,W+.035),ht=g(X,W-.035),zt=g(G,W-.035);return C`<line class="fp3d-open-pane" x1=${ot[0]} y1=${ot[1]} x2=${q[0]} y2=${q[1]} /><line class="fp3d-open-pane" x1=${ht[0]} y1=${ht[1]} x2=${zt[0]} y2=${zt[1]} />`}),Q=(X,G)=>{let[ot,q]=g(X,x),[ht,zt]=g(G,x),Zt=g(X,x+(S?-D:D)),B=D*this._view.scale,ut=(Zt[0]-ot)*(zt-q)-(Zt[1]-q)*(ht-ot);return C`<path d="M${ot} ${q}L${Zt[0]} ${Zt[1]}A${B} ${B} 0 0 ${ut>0?1:0} ${ht} ${zt}" />`};P=C`${tt}${v==="passage"?C`<line class="fp3d-open-passage" x1=${g(l,W)[0]} y1=${g(l,W)[1]} x2=${g(d,W)[0]} y2=${g(d,W)[1]} />`:v==="sliding"?C`<line x1=${g(I,x)[0]} y1=${g(I,x)[1]} x2=${g(A,x)[0]} y2=${g(A,x)[1]} />`:M?C`${Q(I,L)}${Q(A,L)}`:Q(k?I:A,k?A:I)}`}else{let S=(f[0]-f[1])/2,x=g(l,S+.035),k=g(d,S+.035),M=g(l,S-.035),I=g(d,S-.035),A=[(l[0]+d[0])/2,(l[1]+d[1])/2],j=g(A,f[0]),O=g(A,-f[1]);P=C`<line x1=${x[0]} y1=${x[1]} x2=${k[0]} y2=${k[1]} /><line x1=${M[0]} y1=${M[1]} x2=${I[0]} y2=${I[1]} />${n.leaves===2?C`<line x1=${j[0]} y1=${j[1]} x2=${O[0]} y2=${O[1]} />`:$}`}let z=g(l,(f[0]-f[1])/2),E=g(d,(f[0]-f[1])/2);return C`<g data-opening=${n.id} class=${w}>
        <line class="fp3d-open-hit" x1=${z[0]} y1=${z[1]} x2=${E[0]} y2=${E[1]} />
        <polygon class="fp3d-open-gap" points=${_.map(S=>S.join(",")).join(" ")} />
        ${P}
      </g>`})}</g>`}renderDevices(t){return C`<g>${t.placements.map(e=>{var d,c;let n=lt(e.entity_id);if(!n)return $;let[i,o]=this.toScreen([e.x,e.z]),s=((c=(d=this.hass)==null?void 0:d.states[e.entity_id])==null?void 0:c.state)==="on",r=e.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${r?" fp3d-device-sel":""}`;return C`${n==="camera"?this.renderCameraWedge(e,r):$}<g data-device=${e.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${Mt(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Ln(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${r&&e.locked?C`<text class="fp3d-lock" x=${i+16} y=${o-12}>🔒</text>`:$}`})}</g>`}renderCameraWedge(t,e){let n=t.mount==="ceiling",i=t.fov??(n?360:90),o=t.reach??(n?3:4.5),s=(t.rotation??0)*Math.PI/180,r=(y,w)=>this.toScreen([t.x-Math.sin(s+y)*w,t.z+Math.cos(s+y)*w]),[l,d]=this.toScreen([t.x,t.z]),c=Math.min(i,359.9)*Math.PI/180/2,[u,p]=r(-c,o),[h,f]=r(c,o),g=o*this._view.scale,_=i>=360?"":`M${l} ${d}L${u} ${p}A${g} ${g} 0 ${c>Math.PI/2?1:0} 1 ${h} ${f}Z`,[m,v]=r(0,o);return C`<g class="fp3d-wedge ${e?"fp3d-wedge-sel":""}">
      ${i>=360?C`<circle cx=${l} cy=${d} r=${g} />`:C`<path d=${_} />`}
      ${e&&this.isAdmin&&!t.locked?C`<g class="fp3d-rotate" data-aim=${t.entity_id}>
            <line x1=${l} y1=${d} x2=${m} y2=${v} />
            <circle cx=${m} cy=${v} r="16" class="fp3d-hit" />
            <circle cx=${m} cy=${v} r="8" />
            <path d="M${m-4} ${v-1}a4 4 0 1 1 2 3.5" />
          </g>`:$}
    </g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((s,r)=>{let l=e[(r+1)%n],[d,c]=this.toScreen(s),[u,p]=this.toScreen(l),h=Math.hypot(l[0]-s[0],l[1]-s[1]),f=(d+u)/2,g=(c+p)/2,[_,m]=this.toScreen(Xt(e)),v=-(p-c),y=u-d,w=Math.hypot(v,y)||1;v/=w,y/=w,v*(f-_)+y*(g-m)<0&&(v=-v,y=-y);let P=Math.hypot(u-d,p-c);return C`
        ${P>50?Math.abs(v)>Math.abs(y)?C`<text class="fp3d-dim" style="text-anchor:${v>0?"start":"end"}" x=${f+v*13} y=${g+y*13+4}>${this.m(h,2)}</text>`:C`<text class="fp3d-dim" x=${f+v*16} y=${g+y*16+4}>${this.m(h,2)}</text>`:$}
        ${P>36?C`<g data-mid=${r} class="fp3d-mid"><circle cx=${f} cy=${g} r="14" class="fp3d-hit" /><circle cx=${f} cy=${g} r="6" /><path d="M${f-3} ${g}h6M${f} ${g-3}v6" /></g>`:$}
      `}),o=e.map((s,r)=>{let[l,d]=this.toScreen(s);return C`<g data-vertex=${r} class=${r===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${d-9}>${r+1}</text>`});return C`<g>${i}${o}</g>`}renderDraft(){let t=this.drag;if((t==null?void 0:t.kind)==="freewall"){let[i,o]=this.toScreen(t.start),[s,r]=this.toScreen(t.end),l=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return C`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${i} y1=${o} x2=${s} y2=${r} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${(o+r)/2-10}>${this.m(l,2)}</text>
      </g>`}if((t==null?void 0:t.kind)==="rect"){let[i,o]=this.toScreen(t.start),[s,r]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),d=Math.abs(t.end[1]-t.start[1]);return C`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,s)} y=${Math.min(o,r)} width=${Math.abs(s-i)} height=${Math.abs(r-o)} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${Math.min(o,r)-8}>${this.m(l,2)} × ${this.m(d,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return $;let e=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=e.map(i=>this.toScreen(i));return C`<g pointer-events="none">
      ${n.length>1?C`<polyline class="fp3d-draft" points=${n.map(i=>i.join(",")).join(" ")} />`:$}
      ${n.slice(1).map((i,o)=>{let s=n[o];return Math.hypot(i[0]-s[0],i[1]-s[1])<30?$:C`<text class="fp3d-dim" x=${(s[0]+i[0])/2} y=${(s[1]+i[1])/2-6}>${this.m(Math.hypot(e[o+1][0]-e[o][0],e[o+1][1]-e[o][1]),2)}</text>`})}
      ${this._draft.map((i,o)=>{let[s,r]=this.toScreen(i);return C`<circle class=${o===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${r} r=${o===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?C`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:$}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return C`<g pointer-events="none">
      ${t.x!==void 0?C`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:$}
      ${t.z!==void 0?C`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:$}
      ${t.point?C`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:$}
    </g>`}get unit(){return Co(this.hass,this._doc.settings.units)}m(t,e=2){return pa(t,this.unit,n=>Kt(this.hass,n,e))}area(t){return ha(Math.abs(t),this.unit,e=>Kt(this.hass,e,1))}lenValue(t){return this.unit==="imperial"?He(t):String(F(t))}readLen(t){if(this.unit==="imperial")return Vo(t,"imperial");let e=parseFloat(t.replace(",","."));return Number.isFinite(e)?e:null}len(t,e,n,i=.01,o){return this.unit!=="imperial"?this.num(t,e,n,i,o):b`<label class="fp3d-field"
      >${In(t,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${He(e)}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=s.target,l=Vo(r.value,"imperial");l!==null?n(o!==void 0?Math.max(o,l):l):r.value=He(e)}}
    /></label>`}num(t,e,n,i=.01,o){return b`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${o??$}
        .value=${String(F(e))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=parseFloat(s.target.value.replace(",","."));Number.isFinite(r)&&n(r)}}
    /></label>`}rightPress=null;rightUp=-1e9;lastTap=null;doubleTap(t,e){var o;let n=performance.now(),i=t.detail>=2||((o=this.lastTap)==null?void 0:o.key)===e&&n-this.lastTap.at<450;return this.lastTap=i?null:{key:e,at:n},i}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",t?"1":"0")}catch{}}setSideFolded(t){if(this._split&&!this._sidePinned){this._sideOpen=!t;return}this._sideMin=t;try{localStorage.setItem("neonplan3d.sideMin",t?"1":"0")}catch{}}renderAside(t){let e=this._split&&!this._sidePinned&&!this.narrow;return!this.narrow&&(e?!this._sideOpen:this._sideMin)?b`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this.setSideFolded(!1)}>‹</button>
        ${this._furnitureId||this._deviceId||this._openingId||this._roomId?b`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this.setSideFolded(!1)}>⚙</button>`:$}
      </aside>`:e?b`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:b`<aside class="fp3d-side">${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){if(this.narrow)return $;let e=b`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${()=>this.setSideFolded(!0)}>${this.t("side_close")} ›</button>`;return this._split?b`<div class="fp3d-pin-row">
      ${e}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`:b`<div class="fp3d-pin-row">${e}</div>`}renderSide(t){var r,l,d,c;let e=((r=this._doc)==null?void 0:r.floors)??[],n=this.room,i=this.isAdmin,o=Object.values(((l=this.hass)==null?void 0:l.areas)??{}).sort((u,p)=>u.name.localeCompare(p.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(t);if(this._tool==="furniture"&&t&&i)return b`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):$} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:(n==null?void 0:n.name)??""})}</button>
        ${s}`:n&&this._tool!=="measure"?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:b`
      ${i?$:b`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${t?this.t("floor_settings_of",{floor:t.name}):this.t("floors")}</h3>
        ${e.length?$:b`<p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${i&&t?b`<button class="fp3d-btn" aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
              ${this.t(this._doc.settings.lock_plan?"plan_unlock":"plan_lock")}
            </button>`:$}
        ${t?b`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${u=>this.updateFloor({name:u.target.value})}
              /></label>
              ${this.len(this.t("elevation"),t.elevation,u=>this.updateFloor({elevation:u}))}
              ${i?b`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${u=>this._shiftX=Number(u.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${u=>this._shiftZ=Number(u.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${t.start_view?b`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:$}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${u=>this._shiftAll=u.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:$}
              ${this.len(this.t("height"),t.height,u=>this.updateFloor({height:Math.max(1,u)}),.05,1)}
              ${Object.keys(((d=this.hass)==null?void 0:d.floors)??{}).length?b`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${u=>this.updateFloor({ha_floor:u.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(((c=this.hass)==null?void 0:c.floors)??{}).filter(u=>u.floor_id===t.ha_floor||!e.some(p=>p.ha_floor===u.floor_id)).map(u=>b`<option value=${u.floor_id} ?selected=${u.floor_id===t.ha_floor}>${u.name}</option>`)}
                    </select></label
                  >`:$}
              ${i&&this.unplacedAreas(t).length?b`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                  </div>`:$}
              ${i?b`<div class="fp3d-actions fp3d-wide">
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
                  ${this._notice?b`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:$}`:$}
            </div>`:$}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?b`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):$}
      ${i?this.renderStartView():$} ${i?this.renderFavorites():$}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():$}
      ${t&&i?this.renderBackgroundForm(t):$} ${i?this.renderSettings():$} ${i?this.renderTerrain():$}
      ${i?this.renderBackup():$}
    `}renderRoomList(t){return t.rooms.length?b`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map(e=>b`<button class="fp3d-row" @click=${()=>this.selectItem("room",e.id)}>
            <span>${e.name}</span><span class="fp3d-muted">${this.area(Ct(e.points))}</span>
          </button>`)}
      </div>
    </section>`:$}renderRoomOpenings(t){var n;let e=(((n=this.floor)==null?void 0:n.openings)??[]).filter(i=>i.room_id===t.id);return e.length?b`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${e.length})</summary>
      <div class="fp3d-room-list">
        ${e.map(i=>b`<button class="fp3d-row" @click=${()=>{var o;return this.selectItem("opening",i.id),(o=this.renderRoot.querySelector(".fp3d-side"))==null?void 0:o.scrollTo(0,0)}}>
            <span>${this.t(`preset_${hi(i)}`)}</span><span class="fp3d-muted">${this.m(i.width,2)}</span>
          </button>`)}
      </div>
    </details>`:$}renderRoomForm(t,e){let n=this.isAdmin,i=mi(t.points),o=At(t.points);return b`<section>
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
            ${e.map(s=>b`<option value=${s.area_id} ?selected=${s.area_id===t.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${$r.map(s=>b`<option value=${s} ?selected=${s===t.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?b`${this.len(this.t("x"),o.x0,s=>this.setRect("x",s))} ${this.len(this.t("z"),o.z0,s=>this.setRect("z",s))}
            ${this.len(this.t("width"),o.x1-o.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.len(this.t("depth"),o.z1-o.z0,s=>this.setRect("d",s),.01,.05)}`:$}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${In(this.t("room_ceiling"),this.unit)}
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
        ${t.start_view?b`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:$}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(Ct(t.points)),n:this.area(da(t,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{var s;(s=navigator.clipboard)==null?void 0:s.writeText(t.id).catch(()=>{})}}>${t.id}</code></p>
      ${this.renderEdgeHeights(t)} ${this.renderRoomClimate(t)} ${this.renderRoomOpenings(t)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((s,r)=>b`<div class="fp3d-point ${r===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${r+1}</span>
            ${this.len(this.t("x"),s[0],l=>this.setPoint(r,0,l))} ${this.len(this.t("z"),s[1],l=>this.setPoint(r,1,l))}
            ${n?b`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(r)}>
                  ×
                </button>`:$}
          </div>`)}
      </details>
      ${n?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:$}
      ${this._spots?this.renderSpotForm(t):$}
      ${this._packages?b`<div class="fp3d-packages">
            ${Ll.map(s=>b`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:$}
    </section>`}applyPackage(t,e){if(!this.isAdmin)return;let n=Cl(t,e,()=>U("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=At(t.points),n=this.hass?Ve(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,i,o]=se[e.type],s=bo(t,e.rows,e.cols).map(([r,l])=>({id:U("furniture"),type:e.type,x:r,z:l,rotation:0,w:n,d:i,h:o,variant:null,entity:e.entity??"none",power:null}));this.change((r,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(t){let e=this._spots,n=bo(t,e.rows,e.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),o=s=>this._spots={...e,...s};return b`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>o({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>b`<option value=${s} ?selected=${s===e.type}>${this.t(`furn_${s}`)}</option>`)}
        </select></label
      >
      ${this.num(this.t("spots_cols"),e.cols,s=>o({cols:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.num(this.t("spots_rows"),e.rows,s=>o({rows:Math.max(1,Math.min(12,Math.round(s)))}),1,1)}
      ${this.entitySelect(this.t("furn_entity_light"),e.entity,void 0,i,s=>o({entity:s==="none"?null:s}))}
      <div class="fp3d-actions fp3d-wide">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n} @click=${()=>this.placeSpots(t)}>${this.t("spots_add",{n})}</button>
        <button class="fp3d-btn" @click=${()=>this._spots=null}>${this.t("cancel")}</button>
      </div>
      <p class="fp3d-sub fp3d-wide">${this.t("spots_hint")}</p>
    </div>`}iconInput(t,e){let n=t?t.startsWith("mdi:")?t:`mdi:${t}`:"";return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${t??""} ?disabled=${!this.isAdmin} @change=${i=>e(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?Ns(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):$}
      </span></label
    >`}markerSelect(t,e){return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${cr.map(n=>b`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t){var n;let e=i=>{var r,l,d,c,u,p,h,f;let o=(l=(r=this.hass)==null?void 0:r.entities)==null?void 0:l[i],s=(o==null?void 0:o.area_id)??(o!=null&&o.device_id?(u=(c=(d=this.hass)==null?void 0:d.devices)==null?void 0:c[o.device_id])==null?void 0:u.area_id:null);return s?(f=(h=(p=this.hass)==null?void 0:p.areas)==null?void 0:h[s])==null?void 0:f.name:void 0};return Object.keys(((n=this.hass)==null?void 0:n.states)??{}).filter(t).map(i=>({id:i,label:`${Mt(this.hass,i)}${e(i)?` \xB7 ${e(i)}`:""}`})).sort((i,o)=>i.label.localeCompare(o.label))}entitySelect(t,e,n,i,o){let s=n===void 0?null:n?this.t("entity_auto",{name:Mt(this.hass,n)}):this.t("entity_auto_none"),r=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return b`<label class="fp3d-field fp3d-wide"
      >${t}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${r}
        .value=${e===null?s!==null?"__auto":"none":e}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${d=>{d.stopPropagation(),o(d.detail.value==="__auto"?null:d.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(t){var o;let e=this.floor,n=e?nn(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let i=Tt(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return((o=jo(i.walls,t,n))==null?void 0:o.wall.exterior)??!1}renderSidelightFields(t){if(t.type!=="door")return $;let e=ui(t,this.openingIsExterior(t));if(e!=="sidelight"&&e!=="sidelights")return $;let n=this.isAdmin,i=(o,s)=>b`<label class="fp3d-field"
      >${this.t(s)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${t[o]==null?"":String(t[o])}
        ?disabled=${!n}
        @change=${r=>{let l=Number(r.target.value);this.updateOpening({[o]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return e==="sidelight"?b`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!t.sidelight_hinge} ?disabled=${!n} @change=${o=>this.updateOpening({sidelight_hinge:o.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:b`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(t){let e=t.type==="door"?vo:yo,n=ui({type:t.type,style:null},this.openingIsExterior(t)),i=t.style&&e.includes(t.style)?t.style:"";return b`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(o=>b`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",i=t.type==="garage",o=m=>{var y;if(!this.hass)return null;let v=structuredClone(this._doc.floors);for(let w of v)for(let P of w.openings)P.id===t.id&&(P[m]=null);return((y=Zr(this.hass,v).get(t.id))==null?void 0:y[m])??null},s=m=>{var v,y;return(y=(v=this.hass)==null?void 0:v.states[m])==null?void 0:y.attributes.device_class},r=this.entityOptions(m=>m.startsWith("cover.")),l=this.entityOptions(m=>{var v,y;return/^(sensor|number|input_number)\./.test(m)&&Number.isFinite(Number((y=(v=this.hass)==null?void 0:v.states[m])==null?void 0:y.state))}),d=this.entityOptions(m=>{var v;return m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(m)??"")||Ot(m)&&Io((v=this.hass)==null?void 0:v.states[m])!==null||i&&/^(switch|input_boolean)\./.test(m)}),c=this.entityOptions(m=>{var y;let v=(y=this.hass)==null?void 0:y.states[m];return m.startsWith("binary_sensor.")?typeof(v==null?void 0:v.attributes.window_state)=="string":Ot(m)&&(Io(v)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${m} ${Mt(this.hass,m)}`))}),u=this.entityOptions(m=>m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(m)??"")),p=i?this.entityOptions(m=>m.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(m)??"")||Bl.test(m)):d,h=i&&Bl.test(t.contact??"")&&!(t.cover&&t.cover!=="none")&&!o("cover"),f=m=>{let v=m===1,y=v?t.tilt:t.tilt2??null,w=v?t.contact:t.contact2,P=(v?t.sensor:t.sensor2)??(y&&y!=="none"?"contact_tilt":"contact"),z=E=>this.updateOpening(v?{contact:E}:{contact2:E==="none"?null:E});return b`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${E=>{let S=E.target.value,x=S==="contact_tilt"?{}:v?{tilt:null}:{tilt2:null};this.updateOpening({...v?{sensor:S}:{sensor2:S},...x})}}
          >
            ${["contact","handle","contact_tilt"].map(E=>b`<option value=${E} ?selected=${E===P}>${this.t(`sensor_kind_${E}`)}</option>`)}
          </select></label
        >
        ${P==="handle"?this.entitySelect(this.t("handle_entity"),w,void 0,c,E=>z(E==="none"?v?"none":null:E)):this.entitySelect(this.t("contact_entity"),w,v?o("contact"):void 0,u,z)}
        ${P==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),y,void 0,d,E=>this.updateOpening(v?{tilt:E==="none"?null:E}:{tilt2:E==="none"?null:E})):$}
        ${v?b`${this.entitySelect(this.t("tilt_angle_entity"),t.tilt_angle??null,void 0,this.entityOptions(E=>Ot(E)),E=>this.updateOpening({tilt_angle:E==="none"?null:E}))}
            ${t.tilt_angle&&t.tilt_angle!=="none"?b`${this.num(this.t("tilt_angle_max"),t.tilt_max??15,E=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,E))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),t.tilt_offset??0,E=>this.updateOpening({tilt_offset:E}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!t.tilt_invert} ?disabled=${!e} @change=${E=>this.updateOpening({tilt_invert:E.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:$}`:$}`},g=hi(t),_=t.type==="door";return b`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${g}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?b`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(pi).map(m=>b`<button class="fp3d-chip" aria-pressed=${m===g} @click=${()=>this.setOpeningPreset(t,m)}>${this.t(`preset_${m}`)}</button>`)}
          </div>`:$}
      ${e&&!i?b`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${_||n&&t.sill<.1?b`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:$}
          </div>`:$}
      <div class="fp3d-form">
        ${this.len(this.t("width"),t.width,m=>this.updateOpening({width:Math.max(.3,m)}),.01,.3)}
        ${this.len(this.t("opening_position"),t.offset,m=>this.updateOpening({offset:Math.max(0,m)}),.01,0)}
        ${n?this.len(this.t("sill"),t.sill,m=>this.updateOpening({sill:Math.max(0,m)}),.01,0):$}
        ${this.len(this.t("opening_height"),t.height,m=>this.updateOpening({height:Math.max(.3,m)}),.01,.3)}
        ${n&&this.isAdmin?b`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${()=>{var v;let m=((v=this.floor)==null?void 0:v.height)??2.5;this.updateOpening({width:1,height:.5,sill:Math.max(0,Math.round((m-.75)*100)/100)})}}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`:$}
        ${i?$:this.renderStyleSelect(t)}
        ${this.renderSidelightFields(t)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${m=>this.updateOpening({mark:m.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?$:b`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${m=>this.updateOpening({hinge:m.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||_?this.entitySelect(this.t(n?"cover_entity":"door_cover"),t.cover,o("cover"),r,m=>this.updateOpening({cover:m})):$}
        ${(n||i||_)&&t.cover!=="none"&&(t.cover||o("cover"))?b`${this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,l,m=>this.updateOpening({position:m==="none"?null:m}))}
              ${t.position?b`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${m=>this.updateOpening({position_inverted:m.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:$}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_invert_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.cover_invert} @change=${m=>this.updateOpening({cover_invert:m.target.checked||void 0})} />
                ${this.t("cover_invert")}</label
              >
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${m=>this.updateOpening({confirm:m.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:$}
        ${n?b`${t.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:$}
              ${f(1)} ${t.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${f(2)}`:$}`:b`${this.entitySelect(this.t(i?"garage_contact":t.leaves===2?"contact_main":"contact_entity"),t.contact,o("contact"),p,m=>this.updateOpening({contact:m}))}
              ${h?b`<label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                    ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${m=>this.updateOpening({confirm:m.target.checked})} />
                    ${this.t("device_confirm")}</label
                  >`:$}
              ${t.leaves===2&&!i?this.entitySelect(this.t("contact_second"),t.contact2,void 0,d,m=>this.updateOpening({contact2:m==="none"?null:m})):$}
              ${_?b`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!t.shut} ?disabled=${!e} @change=${m=>this.updateOpening({shut:m.target.checked})} />
                    ${this.t("door_shut")}</label
                  >`:$}`}
        ${t.contact!=="none"&&(t.contact||t.contact2||o("contact"))?b`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!t.contact_invert} ?disabled=${!e} @change=${m=>this.updateOpening({contact_invert:m.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:$}
        ${t.type==="window"&&this.floor&&t.sill<ri(this.floor)-.05?b`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${t.well!==!1} ?disabled=${!e} @change=${m=>this.updateOpening({well:m.target.checked?void 0:!1})} />
                ${this.t("well")}</label
              >
              ${t.well!==!1?this.len(this.t("well_rim"),t.well_rim??0,m=>this.updateOpening({well_rim:Math.max(-.3,Math.min(1,m))||null}),.01,-.3):$}`:$}
        ${t.type==="window"?b`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!t.rain_ignore} ?disabled=${!e} @change=${m=>this.updateOpening({rain_ignore:m.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:$}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:$}
    </section>`}renderFurnitureForm(t){if(this.selection().length>1)return this.renderBlockForm();let e=this.isAdmin;return b`<section>
      <div class="fp3d-h3row"><h3>${t.name||this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
      ${t.group?b`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${()=>{this._single=!1,this.requestUpdate()}}>${this.t("block_select")}</button></p>`:$}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${t.name??""} ?disabled=${!e} placeholder=${this.t(`furn_${t.type}`)===`furn_${t.type}`?"":this.t(`furn_${t.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        ${t.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:$}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${this.typeChoices(t.type).map(n=>b`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).filter(n=>n.items.length).map(n=>b`<optgroup label=${he(n)}>
                ${n.items.map(i=>{let o=Oe(n.id,i.id);return b`<option value=${o} ?selected=${o===t.type}>${oe(i)}</option>`})}
              </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(n=>t.type.startsWith(`pack:${n.id}:`))?b`<option value=${t.type} selected>${Ae(this.hass,t.type)}</option>`:$}
          </select></label
        >
        ${this.len(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.len(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.len(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.01,n)}),.01,.01)}
        ${this.len(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.01,n)}),.01,.01)}
        ${this.len(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${Gt(t.type)?$:b`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!t.mirror} ?disabled=${!e} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${t.type==="led_strip"?b`${this.num(this.t("strip_tilt"),t.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!t.upright} ?disabled=${!e} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:$}
        ${re(t)&&this.floor?b`${this.len(this.t("mount_height"),t.mount_y??Rt(this.floor,t),n=>this.updateFurniture({mount_y:Math.min(Hi,Math.max(0,n))}),.01,0)}
              ${t.mount_y!=null?b`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:$}`:$}
      </div>
      ${t.type==="stairs"?b`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:$}
      ${t.type==="stairs_u"?b`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:$}
      ${t.type==="stairwell"?b`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&(Pa(Nt(t),n.points)||Ct(Lo(n.points,Nt(t)))>.01))?b`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:$}`:$}
      ${t.type==="inverter"||t.type==="home_battery"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(t.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>b`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`${t.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:$}
      ${t.type==="lamp_pendant"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>b`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:$}
      ${t.type==="lamp_ceiling_fan"?b`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_fan_entity"),t.fan_entity??null,void 0,this.entityOptions(n=>n.startsWith("fan.")),n=>this.updateFurniture({fan_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("ceiling_fan_hint")}</p>
            </div>`:$}
      ${Ze(t.type)?this.renderFurnitureLinks(t):Id.has(t.type)?$:b`<div class="fp3d-form fp3d-links">${this.renderStateLinks(t)}</div>`} ${t.type==="parking"?this.renderParkingForm(t):$} ${t.type==="wall_switch"?this.renderWallSwitchForm(t):t.type==="wall_socket"?this.renderWallSocketForm(t):$} ${t.type==="waste_bin"||t.type==="mailbox"?this.renderHouseholdForm(t):this.renderHouseholdExtras(t)}
      ${t.type.startsWith("pack:mastershort.vehicles:")&&this.isAdmin?b`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(t)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:$}
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(t)}>▦ ${this.t("wall_view")}</button>
            ${t.entity&&t.entity!=="none"&&t.type!=="parking"?b`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(t)}>${this.t("as_device")}</button>`:$}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`:$}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=Al(this.hass,t),n=0,i=r=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===r),o=(r,l,d)=>{if(!d)return;let c=i(r);if(!c&&this.floor&&(this.addEnergyDevice(r),c=i(r)),!c||c[l]&&c[l]!=="none")return;let u=c.id;this.change(p=>{let h=p.floors.flatMap(f=>f.furniture).find(f=>f.id===u);h&&(h[l]=d)}),n++};o("meter","power",e.grid),o("inverter","power",e.solar),o("home_battery","power",e.battery),o("home_battery","soc",e.battery_soc);let s=El(t);for(let r of["gas","water"])s[r]&&!this._doc.energy[r]&&(this.setEnergy({[r]:s[r]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let t=this._doc.energy,e=this.isAdmin,n=(g,_)=>{var m,v;return(v=(m=this.hass)==null?void 0:m.states[g])==null?void 0:v.attributes[_]},i=this.entityOptions(g=>this.isPowerSensor(g)),o=this.entityOptions(g=>Ot(g)&&n(g,"device_class")==="battery"),s=this.entityOptions(g=>Ot(g)&&(n(g,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(g,"unit_of_measurement")??""))),r=g=>_=>this.setEnergy({[g]:_==="none"?null:_}),l=g=>this.entityOptions(_=>Ot(_)&&(n(_,"device_class")===g||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(_,"unit_of_measurement")??""))),d=this.hass?tn(this.hass,this._doc.floors):new Map,c=ps(this._doc,g=>this.devicePower(g,d)),u=this.hass?Il(this.hass,this._doc,[],c):null,p=!!u&&(u.solar??0)<20,h=p&&u.grid!==null&&u.grid<-50,f=p&&u.battery!==null&&u.battery<-50&&(u.grid??0)<=0;return b`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${h?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({grid_invert:!t.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:$}
      ${f?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({battery_invert:!t.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:$}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),t.grid,c.grid,i,r("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} ?disabled=${!e} @change=${g=>this.setEnergy({grid_invert:g.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,c.solar[0]??null,i,r("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,c.battery[0]??null,i,r("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} ?disabled=${!e} @change=${g=>this.setEnergy({battery_invert:g.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,c.soc[0]??null,o,r("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),t.consumption,null,i,r("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,s,r("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),t.gas??null,void 0,l("gas"),g=>this.setEnergy({gas:g==="none"?null:g}))}
        ${this.entitySelect(this.t("energy_water_meter"),t.water??null,void 0,l("water"),g=>this.setEnergy({water:g==="none"?null:g}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!e||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?b`<p class="fp3d-sub">${this._energyNote}</p>`:$}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(t){let e=t.elevation+t.height;if(!(this._doc.settings.roof.sections??[]).some(o=>Xa(o,e)))return $;let i={settings:this._doc.settings};return C`${[1.5,2].map(o=>tl(i,t.elevation,o).map(([s,r])=>{let[l,d]=this.toScreen(s),[c,u]=this.toScreen(r);return C`<line class="fp3d-headroom" x1=${l} y1=${d} x2=${c} y2=${u} />
          <text class="fp3d-headroom-label" x=${(l+c)/2} y=${(d+u)/2-4}>${this.m(o,1)}</text>`}))}`}renderFavorites(){let t=this._doc.settings.favorites??[],e=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>e.includes(s.split(".")[0])&&!t.includes(s)),i=s=>this.change(r=>r.settings.favorites=s.length?s:void 0),o=(s,r)=>{let l=[...t],[d]=l.splice(s,1);l.splice(Math.max(0,Math.min(l.length,s+r)),0,d),i(l)};return b`<details class="fp3d-section">
      <summary>${this.t("favorites")}${t.length?b` <span class="fp3d-lib-count">${t.length}</span>`:$}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${t.map((s,r)=>b`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${Mt(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${r===0} @click=${()=>o(r,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${r===t.length-1} @click=${()=>o(r,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(t.filter(l=>l!==s))}>✕</button>
        </div>`)}
      ${t.length<40?b`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!t.includes(s)&&i([...t,s])})}
          </div>`:$}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let t=this._doc.settings.media_presets??[],e=i=>this.change(o=>o.settings.media_presets=i.length?i:void 0),n=(i,o)=>e(t.map((s,r)=>r===i?{...s,...o}:s));return b`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>b`<option value=${i}></option>`)}
      </datalist>
      ${t.map((i,o)=>b`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${s=>n(o,{label:s.target.value.trim()||"Radio"})}
          /></label>
          <label class="fp3d-field" title=${this.t("preset_type_hint")}
            >${this.t("preset_type")}
            <input type="text" list="fp3d-preset-types" .value=${i.type} @change=${s=>n(o,{type:s.target.value.trim()||"music"})}
          /></label>
          <label class="fp3d-field fp3d-wide" title=${this.t("preset_content_hint")}
            >${this.t("preset_content")}
            <input type="text" .value=${i.content} placeholder="https://… · spotify:playlist:… · Rock Antenne" @change=${s=>n(o,{content:s.target.value.trim()})}
          /></label>
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((s,r)=>r!==o))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<30?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:U("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:$}`}renderOwnButtons(){let t=this._doc.settings.buttons??[],e=o=>this.change(s=>s.settings.buttons=o.length?o:void 0),n=(o,s)=>e(t.map((r,l)=>l===o?{...r,...s}:r)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return b`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${t.map((o,s)=>b`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${o.label} @change=${r=>n(s,{label:r.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${r=>n(s,{action:r.target.value})}>
              ${ur.map(r=>b`<option value=${r} ?selected=${r===o.action}>${this.t(`own_action_${r}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(o.icon??null,r=>n(s,{icon:r}))}
          ${o.action!=="fire_dom_event"?b`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${o.action}`)}
                <input type="text" .value=${o.target??""} placeholder=${i[o.action]} @change=${r=>n(s,{target:r.target.value.trim()||null})}
              /></label>`:$}
          ${o.action==="service"||o.action==="fire_dom_event"?b`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${o.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${o.data?JSON.stringify(o.data,null,1):""}
                  @change=${r=>{r.target.setCustomValidity("");let l=r.target.value.trim();if(!l)return n(s,{data:null});try{let d=JSON.parse(l);d&&typeof d=="object"&&!Array.isArray(d)&&n(s,{data:d})}catch{r.target.setCustomValidity(this.t("own_data_bad")),r.target.reportValidity()}}}
                ></textarea></label
              >`:$}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>e([...t.slice(0,s-1),o,t[s-1],...t.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((r,l)=>l!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<20?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:U("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:$}`}paneView(){let t=this.renderRoot.querySelector("fp3d-view3d"),e=t==null?void 0:t.currentView();if(!e)return null;let n=e.target;return{theta:F(e.theta),phi:F(e.phi),radius:F(e.radius),...n?{target:{x:F(n.x),y:F(n.y),z:F(n.z)}}:{}}}rememberFloorView(){let t=this.paneView();if(!t){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:t})}rememberRoomView(){let t=this.paneView();if(!t){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:t})}renderStartView(){let t=this._doc.settings.start_view??null,e=()=>{let n=this.paneView();n&&this.change(i=>i.settings.start_view=n)};return b`<details class="fp3d-section">
      <summary>${this.t("start_view")}</summary>
      <p class="fp3d-sub">${this.t("start_view_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" @click=${e}>${this.t("start_view_set")}</button>
        ${t?b`<button class="fp3d-btn" @click=${()=>this.change(n=>n.settings.start_view=null)}>${this.t("start_view_reset")}</button>`:$}
      </div>
      ${t?b`<p class="fp3d-sub">${this.t("start_view_saved")}</p>
            <p class="fp3d-sub">${this.t("start_view_card")}</p>
            <code class="fp3d-code"
              >start_view: { theta: ${t.theta}, phi: ${t.phi}, radius: ${t.radius}${t.target?`, target: { x: ${t.target.x}, y: ${t.target.y}, z: ${t.target.z} }`:""} }</code
            >`:$}
    </details>`}renderPresenceSettings(){var i;let t=Object.keys(((i=this.hass)==null?void 0:i.states)??{}).filter(o=>o.startsWith("person.")).sort(),e=o=>{let s=o.slice(7),r=this.entityOptions(d=>Ot(d)),l=d=>d.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(d);return[...r.filter(d=>l(d.id)),...r.filter(d=>!l(d.id))]},n=(o,s)=>{let r=structuredClone(this._doc);r.presence=r.presence.filter(l=>l.person!==o),s&&s!=="none"&&r.presence.push({person:o,sensor:s}),this.setDoc(r)};return b`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(o=>{var s;return this.entitySelect(`${Mt(this.hass,o)} \xB7 ${this.t("presence_sensor")}`,((s=this._doc.presence.find(r=>r.person===o))==null?void 0:s.sensor)??null,void 0,e(o),r=>n(o,r))}):b`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderStateLinks(t){return b`${this.entitySelect(this.t("furn_state_entity"),t.state_entity??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture({state_entity:e==="none"?null:e}))}
              ${t.state_entity&&t.state_entity!=="none"?b`${this.entitySelect(this.t("furn_state_entity2"),t.state_entity2??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture({state_entity2:e==="none"?null:e}))}
                    ${t.state_entity2&&t.state_entity2!=="none"?b`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${e=>this.updateFurniture({state_split:e.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${t.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${t.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:$}`:$}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderWallSwitchForm(t){let e=this.isAdmin,n=xo(t),i=this.entityOptions(s=>jr.test(s)),o=s=>{let r=Array.from({length:s},(l,d)=>n[d]??null);this.updateFurniture({switch_keys:r,w:Mo(s)})};return b`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field fp3d-wide"
        >${this.t("switch_keys")}
        <select ?disabled=${!e} @change=${s=>o(Number(s.target.value))}>
          ${Array.from({length:4},(s,r)=>r+1).map(s=>b`<option value=${s} ?selected=${n.length===s}>${s}</option>`)}
        </select></label
      >
      ${n.map((s,r)=>this.entitySelect(this.t(n.length>1?"switch_key_n":"switch_key",{n:r+1}),s,void 0,i,l=>this.updateFurniture({switch_keys:n.map((d,c)=>c===r?l==="none"?null:l:d)})))}
      ${this.entitySelect(this.t("switch_ring"),Cr(t),void 0,this.entityOptions(s=>s.startsWith("light.")),s=>this.updateFurniture({switch_ring:s==="none"?null:s}))}
      <p class="fp3d-sub fp3d-wide">${this.t("switch_ring_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${s=>this.updateFurniture({confirm:s.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("switch_hint")}</p>
    </div>`}renderWallSocketForm(t){let e=this.isAdmin,n=ko(t),i=this.entityOptions(l=>Lr.test(l)),o=this.entityOptions(l=>this.isPowerSensor(l)),s=(l,d)=>this.updateFurniture({socket_outlets:n.map((c,u)=>u===l?{...c,...d}:c)}),r=l=>this.updateFurniture({socket_outlets:Array.from({length:l},(d,c)=>n[c]??{entity:null,power:null}),w:Mo(l)});return b`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field fp3d-wide"
        >${this.t("socket_count")}
        <select ?disabled=${!e} @change=${l=>r(Number(l.target.value))}>
          ${Array.from({length:4},(l,d)=>d+1).map(l=>b`<option value=${l} ?selected=${n.length===l}>${l}</option>`)}
        </select></label
      >
      ${n.map((l,d)=>b`${n.length>1?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("socket_n",{n:d+1})}</h4>`:$}
          ${this.entitySelect(this.t("socket_switch"),l.entity,void 0,i,c=>s(d,{entity:c==="none"?null:c}))}
          ${this.entitySelect(this.t("socket_power"),l.power,void 0,o,c=>s(d,{power:c==="none"?null:c}))}`)}
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${l=>this.updateFurniture({confirm:l.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("socket_hint")}</p>
    </div>`}setHousehold(t){let e=structuredClone(this._doc);e.settings.household={...e.settings.household??{},...t},this.setDoc(e)}renderHouseholdForm(t){var d,c;let e=this.isAdmin,n=ft("household"),i=!n&&Vt("household")?b`<section class="fp3d-teaser fp3d-wide">
          <div class="fp3d-teaser-head"><b>🏠 ${this.t("pro_name_household")}</b></div>
          <p class="fp3d-sub">${this.t(t.type==="waste_bin"?"household_teaser_bin":"household_teaser_mail")}</p>
        </section>`:$,o=(u,p,h,f,g)=>b`<label class="fp3d-field fp3d-wide"
        >${u}
        <select ?disabled=${!e} @change=${_=>g(_.target.value)}>
          ${h.map(_=>b`<option value=${_} ?selected=${_===p}>${this.t(f(_))}</option>`)}
        </select></label
      >`;if(t.type==="waste_bin"){let u=Va(t),p=t.bin_kind??"rest",[h,f]=Na(t),g=this.entityOptions(_=>_.startsWith("calendar.")||_.startsWith("sensor."));return b`<div class="fp3d-form fp3d-links">
        ${o(this.t("bin_shape"),u,Go,_=>`bin_shape_${_}`,_=>{let[m,v,y]=La[_];this.updateFurniture({variant:_==="bin240"?null:_,w:m,d:v,h:y})})}
        ${o(this.t("bin_kind"),p,ja,_=>`bin_kind_${_}`,_=>{let[m,v]=Jo(_,Wa());this.updateFurniture({bin_kind:_,bin_color:m,bin_lid:v===m?null:v})})}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${h} ?disabled=${!e} @change=${_=>this.updateFurniture({bin_color:_.target.value})}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${f} ?disabled=${!e} @change=${_=>this.updateFurniture({bin_lid:_.target.value})}
        /></label>
        ${n?b`${this.entitySelect(this.t("bin_source"),t.bin_source??null,void 0,g,_=>this.updateFurniture({bin_source:_==="none"?null:_}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${t.bin_match??""} placeholder=${this.t(`bin_kind_${p}`)} ?disabled=${!e}
                  @change=${_=>this.updateFurniture({bin_match:_.target.value.trim()||null})} /></label>
              ${this.num(this.t("bin_from"),((d=this._doc.settings.household)==null?void 0:d.bin_from)??14,_=>this.setHousehold({bin_from:Math.max(0,Math.min(24,_))}),.5)}
              ${this.num(this.t("bin_until"),((c=this._doc.settings.household)==null?void 0:c.bin_until)??12,_=>this.setHousehold({bin_until:Math.max(0,Math.min(24,_))}),.5)}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_hint")}</p>`:i}
      </div>`}let s=Da(t),r=this.entityOptions(u=>["binary_sensor.","input_boolean.","sensor.","counter.","input_number."].some(p=>u.startsWith(p))),l=this.entityOptions(u=>u.startsWith("binary_sensor."));return b`<div class="fp3d-form fp3d-links">
      ${o(this.t("mailbox_shape"),s,Yo,u=>`mailbox_shape_${u}`,u=>{let[p,h,f]=Ca[u];this.updateFurniture({variant:u==="wall"?null:u,w:p,d:h,h:f})})}
      ${n?b`${this.entitySelect(this.t("mailbox_entity"),typeof t.entity=="string"&&t.entity!=="none"?t.entity:null,void 0,r,u=>this.updateFurniture({entity:u??"none"}))}
            ${this.entitySelect(this.t("mailbox_door"),t.mailbox_door??null,void 0,l,u=>this.updateFurniture({mailbox_door:u==="none"?null:u}))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`:i}
    </div>`}renderHouseholdExtras(t){let e=t.type==="plant"||Oa(t.type),n=t.type==="washer"||t.type==="dryer"||t.type==="dishwasher",i=t.type==="fridge"||t.type==="fridge_smart",o=Ze(t.type);if(!e&&!o)return $;if(!ft("household"))return!Vt("household")||!(e||n||i)?$:b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🏠 ${this.t("pro_name_household")}</b></div>
        <p class="fp3d-sub">${this.t(e?"hh_teaser_plant":i?"hh_teaser_fridge":"hh_teaser_appliance")}</p>
      </section>`;let s=this.entityOptions(c=>c.startsWith("sensor.")),r=this.entityOptions(c=>c.startsWith("binary_sensor.")),l=this.entityOptions(c=>["sensor.","binary_sensor.","input_boolean.","input_datetime.","input_number."].some(u=>c.startsWith(u))),d=c=>c==="none"?null:c;return b`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("pro_name_household")}</b></p>
      ${e?b`${this.entitySelect(this.t("hh_moisture"),t.moisture??null,void 0,this.entityOptions(c=>c.startsWith("plant.")||c.startsWith("sensor.")),c=>this.updateFurniture({moisture:d(c)}))}
            ${this.num(this.t("hh_moisture_min"),t.moisture_min??20,c=>this.updateFurniture({moisture_min:Math.max(0,Math.min(100,Math.round(c)))}),1)}`:$}
      ${n?b`${this.entitySelect(this.t("hh_remaining"),t.remaining??null,void 0,s,c=>this.updateFurniture({remaining:d(c)}))}
            ${this.entitySelect(this.t("hh_door"),t.door_left??null,void 0,r,c=>this.updateFurniture({door_left:d(c)}))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`:$}
      ${i?b`${t.type==="fridge"?this.entitySelect(this.t("hh_fridge_door"),t.door_left??null,void 0,r,c=>this.updateFurniture({door_left:d(c)})):$}
            ${this.num(this.t("hh_door_alarm"),t.door_alarm??2,c=>this.updateFurniture({door_alarm:Math.max(.5,Math.min(120,c))}),.5)}`:$}
      ${o?b`${this.entitySelect(this.t("hh_service_entity"),t.service??null,void 0,l,c=>this.updateFurniture({service:d(c)}))}
            ${t.service&&t.service!=="none"?this.num(this.t("hh_service_min"),t.service_min??10,c=>this.updateFurniture({service_min:Math.max(0,c)}),1):$}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`:$}
    </div>`}renderAwningFields(t){let e=this.isAdmin,n=this.entityOptions(s=>s.startsWith("sensor.")||s.startsWith("input_number.")||s.startsWith("number.")),i={arm:{w:3,d:2.5,y:2.3,pitch:null},drop:{w:2.4,d:1.2,y:2.3,pitch:20},vertical:{w:2,d:.2,y:2.3,pitch:null},pergola:{w:4,d:3.5,y:2.6,pitch:6},side:{w:3,d:.2,y:1.8,pitch:null}},o=t.variant??"arm";return b`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!e}
          @change=${s=>{let r=s.target.value,l=i[r];this.updateFurniture({variant:r==="arm"?null:r,w:l.w,d:l.d,mount_y:l.y,awning_pitch:l.pitch})}}
        >
          ${Object.keys(i).map(s=>b`<option value=${s} ?selected=${o===s}>${this.t(`awning_kind_${s}`)}</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${this.t(`awning_kind_${o}_hint`)}</p>
      ${o==="vertical"||o==="side"?$:this.num(this.t("awning_pitch"),t.awning_pitch??12,s=>this.updateFurniture({awning_pitch:Math.max(0,Math.min(80,Math.round(s)))}),1)}
      ${this.num(this.t("awning_time"),t.awning_time??20,s=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(s)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,s=>this.updateFurniture({awning_position:s==="none"?null:s}))}
      <label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${t.awning_valance!==!1} ?disabled=${!e} @change=${s=>this.updateFurniture({awning_valance:s.target.checked})} />
        ${this.t("awning_valance")}</label
      >
      <label class="fp3d-check fp3d-wide" title=${this.t("awning_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${s=>this.updateFurniture({awning_invert:s.target.checked})} />
        ${this.t("awning_invert")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`}renderMotionFields(t){let e=this.isAdmin,n=this.entityOptions(o=>o.startsWith("sensor.")||o.startsWith("input_number.")||o.startsWith("number.")),i=t.variant==="left"||t.variant==="right"?t.variant:"both";return b`${Le(t.type)==="curtain"?b`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!e} @change=${o=>{let s=o.target.value;this.updateFurniture({variant:s==="both"?null:s})}}>
              ${["both","left","right"].map(o=>b`<option value=${o} ?selected=${i===o}>${this.t(`curtain_side_${o}`)}</option>`)}
            </select></label
          >`:$}
      ${this.num(this.t("motor_time"),t.awning_time??20,o=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(o)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,o=>this.updateFurniture({awning_position:o==="none"?null:o}))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${o=>this.updateFurniture({awning_invert:o.target.checked})} />
        ${this.t("awning_invert")}</label
      >`}renderFurnitureLinks(t){var u;let e=new Set(["smoke","gas","carbon_monoxide","heat","moisture","safety","sound","problem"]);if(!this.hass)return $;let n=this.hass,i=p=>{var f;let h=structuredClone(this._doc.floors);for(let g of h)for(let _ of g.furniture)_.id===t.id&&(_[p]=null);return((f=tn(n,h).get(t.id))==null?void 0:f[p])??null},o=yi(t.type),s=o&&(!je(t.type)||nr(t.type)),r=Gt(t.type),l=this.entityOptions(p=>{var h;return r?/^(light|switch|input_boolean)\./.test(p):s?/^(media_player|switch|input_boolean|light)\./.test(p)||Le(t.type)==="screen"&&p.startsWith("cover."):t.type==="awning"?p.startsWith("cover."):Le(t.type)==="curtain"?/^(cover|switch|input_boolean)\./.test(p):t.type==="radiator"||t.type==="ac_unit"?p.startsWith("climate."):pe(t.type)?p.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(p)||Jr(n.states[p])||p.startsWith("binary_sensor.")&&(t.type.endsWith("smoke_detector")||e.has(String(((h=n.states[p])==null?void 0:h.attributes.device_class)??"")))}),d=this.entityOptions(p=>this.isPowerSensor(p)),c=t.type==="fridge_smart"?this.entityOptions(p=>p.startsWith("binary_sensor.")):[];return b`<div class="fp3d-form fp3d-links">
        ${t.type==="grid_point"?b`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(r?"furn_entity_light":Le(t.type)?"motor_cover":s?"furn_entity_tv":t.type==="awning"?"awning_cover":t.type==="radiator"||t.type==="ac_unit"?"furn_entity_climate":pe(t.type)?"furn_entity_vacuum":"furn_entity"),t.entity??null,i("entity"),l,p=>this.updateFurniture({entity:p}))}
        ${t.type==="awning"?this.renderAwningFields(t):Le(t.type)?this.renderMotionFields(t):$}
        ${!r&&!fe.includes(t.type)&&!$i(t.type)?this.renderStateLinks(t):$}
        ${r&&t.entity&&t.entity!=="none"?b`${this.entitySelect(this.t("furn_color_entity"),t.color_entity??null,void 0,this.entityOptions(p=>p.startsWith("light.")&&p!==t.entity),p=>this.updateFurniture({color_entity:p==="none"?null:p}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:$}
        ${r?this.glowScaleField(t.glow_scale,p=>this.updateFurniture({glow_scale:p})):$}
        ${r&&t.entity&&t.entity!=="none"?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!t.only_color} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({only_color:p.target.checked?"#ffd400":null})} />
                ${this.t("furn_only_color")}</label
              >
              ${t.only_color?b`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${t.only_color} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({only_color:p.target.value})} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`:$}`:$}
        ${r||t.type==="grid_point"?$:this.entitySelect(this.t(t.type==="meter"?"energy_grid":t.type==="inverter"?"energy_solar_sensor":t.type==="home_battery"?"energy_battery_sensor":"furn_power"),t.power??null,i("power"),d,p=>this.updateFurniture({power:p}))}
        ${!r&&t.power&&t.power!=="none"&&!fe.includes(t.type)?b`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
              >${this.t("furn_run_w")}
              <input
                type="number"
                min="1"
                max="5000"
                step="5"
                placeholder="10"
                .value=${t.run_w?String(t.run_w):""}
                ?disabled=${!this.isAdmin}
                @change=${p=>{let h=Number(p.target.value);this.updateFurniture({run_w:h>0?Math.min(5e3,Math.round(h)):null})}}
            /></label>`:$}
        ${ft("energy_pro")&&!r&&!["grid_point","meter","inverter","home_battery"].includes(t.type)?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({holo:p.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:ft("energy_pro")&&t.type==="inverter"?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${t.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({plant_card:p.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${t.plant_card!==!1?b`${this.len(this.t("holo_right"),t.plant_right??0,p=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,F(p)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),t.plant_up??0,p=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,F(p)))||void 0}),.25)}`:$}`:$}
      </div>
      ${t.type==="meter"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),t.export??null,void 0,d,p=>this.updateFurniture({export:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:$}
      ${t.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let p=(this._doc.settings.roof.strings??[]).filter(h=>h.inverter===t.id).map(h=>h.name);return b`<p class="fp3d-sub fp3d-wide">${p.length?this.t("inverter_strings",{names:p.join(", ")}):this.t("inverter_strings_none")}</p>`})():$}
      ${t.type==="home_battery"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(p=>{var h,f;return Ot(p)&&(((h=n.states[p])==null?void 0:h.attributes.device_class)==="battery"||((f=n.states[p])==null?void 0:f.attributes.unit_of_measurement)==="%")}),p=>this.updateFurniture({soc:p==="none"?null:p}))}
            ${this.entitySelect(this.t("furn_charge"),t.charge??null,void 0,d,p=>this.updateFurniture({charge:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:$}
      ${t.type==="wallbox"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(p=>$s(p)||Ot(p)),p=>this.updateFurniture({status:p==="none"?null:p}))}
          </div>`:$}
      ${!r||t.entity?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({confirm:p.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(t.marker??null,p=>this.updateFurniture({marker:p}))}${this.iconInput(t.icon,p=>this.updateFurniture({icon:p}))}</div>`:$}
      ${pe(t.type)?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,na(n,((u=tn(n,this._doc.floors).get(t.id))==null?void 0:u.entity)??null,null),this.entityOptions(p=>Ot(p)),p=>this.updateFurniture({room_sensor:p}))}
          </div>`:$}
      ${t.type==="fridge_smart"?b`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,c,p=>this.updateFurniture({door_left:p}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,c,p=>this.updateFurniture({door_right:p}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:$}
      ${$i(t.type)?this.renderPictureRules(t):$}
      <p class="fp3d-sub">${this.t(r?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":o?"furn_links_hint_tv":pe(t.type)?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){var m;let e=this.isAdmin,n=(this.packs??[]).flatMap(v=>v.items.filter(y=>y.vehicle).map(y=>({id:Oe(v.id,y.id),label:`${oe(y)} \xB7 ${he(v)}`}))),i=v=>{var y,w;return v.startsWith("device_tracker.")?((w=(y=this.hass)==null?void 0:y.states[v])==null?void 0:w.attributes.source_type)==="router"?2:0:1},o=this.entityOptions(v=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(v)).sort((v,y)=>i(v.id)-i(y.id)),s=this.entityOptions(v=>/^(sensor|input_select|select|input_text)\./.test(v)),r=t.type_entity?(m=this.hass)==null?void 0:m.states[t.type_entity]:void 0,l=Array.isArray(r==null?void 0:r.attributes.options)?r.attributes.options:[],d=t.types??[],c=v=>this.updateFurniture({types:v}),u=(v,y)=>b`<select ?disabled=${!e} @change=${w=>y(w.target.value||null)}>
        <option value="" ?selected=${!v}>${this.t("parking_vehicle_none")}</option>
        ${n.map(w=>b`<option value=${w.id} ?selected=${w.id===v}>${w.label}</option>`)}
      </select>`,p=this.floor,h=p==null?void 0:p.rooms.find(v=>v.points.length>=3&&Y([t.x,t.z],v.points)),f=t.vehicle?yt(t.vehicle):void 0,g=f?f.size[2]*(t.scale??1):0,_=!!h&&!!p&&g>p.height+1e-6;return b`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,o,v=>this.updateFurniture({entity:v==="none"?null:v}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${u(t.vehicle??null,v=>this.updateFurniture({vehicle:v}))}</label>
        ${n.length?$:b`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),v=>this.updateFurniture({scale:Math.min(150,Math.max(30,v))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,s,v=>this.updateFurniture({type_entity:v==="none"?null:v}))}
        ${t.type_entity?b`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${d.map((v,y)=>b`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${v.state}
                    ?disabled=${!e}
                    @change=${w=>c(d.map((P,z)=>z===y?{...P,state:w.target.value}:P))}
                  />
                  ${u(v.vehicle,w=>c(d.map((P,z)=>z===y?{...P,vehicle:w??""}:P)))}
                  <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>c(d.filter((w,P)=>P!==y))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(v=>b`<option value=${v}></option>`)}</datalist>
              ${e?b`<button class="fp3d-btn" @click=${()=>{var v;return c([...d,{state:l[d.length]??"",vehicle:((v=n[0])==null?void 0:v.id)??""}])}}>${this.t("parking_add_type")}</button>`:$}
            </div>`:$}
      </div>
      ${_?b`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Kt(this.hass,g,2),room:Kt(this.hass,p.height,2)})}</p>`:$}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(t)}`}renderCarForm(t){if(!ft("auto_pro"))return b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return $;let e=this.hass,n=t.car??{},i=ea(e,{entity:t.entity,car:{device:n.device}}),o=l=>this.updateFurniture({car:{...n,...l}}),s=this.entityOptions(l=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(l)),r=(l,d,c)=>this.entitySelect(this.t(d),n[l]??null,i[l],c,u=>o({[l]:u==="none"?"none":u}));return b`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),n.device??null,void 0,s,l=>o({device:l==="none"?null:l}))}
        ${r("soc","car_soc",this.entityOptions(l=>Ot(l)))}
        ${r("range","car_range",this.entityOptions(l=>Ot(l)))}
        ${r("charging","car_charging",this.entityOptions(l=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(l)))}
        ${r("plugged","car_plugged",this.entityOptions(l=>$s(l)))}
        ${r("lock","car_lock",this.entityOptions(l=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(l)))}
        ${r("climate","car_climate",this.entityOptions(l=>/^(climate|switch|binary_sensor|input_boolean)\./.test(l)))}
        ${r("tracker","car_tracker",this.entityOptions(l=>l.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(t){let e=new Set(this._libOpen);e.has(t)?e.delete(t):e.add(t),this._libOpen=e;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...e]))}catch{}}librarySection(t,e,n,i){let o=mn(i).split(/\s+/).filter(Boolean),s=o.length?n.filter(l=>{let d=mn(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${e}`);return o.every(c=>d.includes(c))}):n;if(i&&!s.length)return $;let r=i?!0:this._libOpen.has(t);return b`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${r} @click=${()=>this.toggleLibrary(t)}>
        <span class="fp3d-lib-caret">${r?"\u25BE":"\u25B8"}</span>${e} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${r?b`<div class="fp3d-library">${s.map(l=>this.libraryButton(l.type,l.label))}</div>`:$}`}libraryHasHits(t){let e=mn(t).split(/\s+/).filter(Boolean);return[...Object.entries(di).flatMap(([i,o])=>o.map(s=>`${this.t(`furn_${s}`)} ${Yt(Bi,`furn_${s}`)} ${s.replace(/_/g," ")} ${this.t(`furn_group_${i}`)}`)),...(this.packs??[]).flatMap(i=>i.items.map(o=>`${oe(o)} ${Object.values(o.name).join(" ")} ${o.id.replace(/_/g," ")} ${i.name} ${he(i)}`))].some(i=>{let o=mn(i);return e.every(s=>o.includes(s))})}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!t.includes(i.image)&&t.push(i.image);return t}renderPictureRules(t){let e=this.isAdmin,n=t.pictures??[];if(!ft("screens"))return b`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${We("screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=m=>this.updateFurniture({pictures:m}),o=this.entityOptions(()=>!0),s=m=>["string","number","boolean"].includes(typeof m),r=m=>{var v,y;return Object.entries(((y=(v=this.hass)==null?void 0:v.states[m])==null?void 0:y.attributes)??{}).filter(([w,P])=>s(P)&&w!=="friendly_name"&&w!=="icon").map(([w])=>w)},l=(m,v)=>{var w;let y=(w=this.hass)==null?void 0:w.states[m];return y?String((v?y.attributes[v]:y.state)??""):""},d=(m,v)=>{var P;let y=(P=this.hass)==null?void 0:P.states[m],w=!v&&Array.isArray(y==null?void 0:y.attributes.options)?y.attributes.options:[];return w.length?w:[l(m,v)]},c=m=>`${m.entity}\0${m.attribute??""}`,u=[];n.forEach((m,v)=>{let y=u.find(w=>c(w)===c(m));y?y.rows.push(v):u.push({entity:m.entity,attribute:m.attribute??null,rows:[v]})});let p=(m,v)=>i(n.map((y,w)=>m.rows.includes(w)?{...y,...v}:y)),h=(m,v)=>i(n.map((y,w)=>w===m?{...y,...v}:y)),f=this.storedPictures(),g=this.entityOptions(m=>m.startsWith("camera.")),_=m=>m.image.startsWith("camera:")?m.image.slice(7):null;return b`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?b`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${m=>this.updateFurniture({screen_bg:m.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:$}
      ${u.map(m=>b`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${o}
            .value=${m.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${v=>{v.stopPropagation(),p(m,{entity:v.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${v=>{let y=v.target.value||null,w=l(m.entity,y);i(n.map((P,z)=>m.rows.includes(z)?{...P,attribute:y,state:m.rows[0]===z?w:P.state}:P))}}
          >
            <option value="" ?selected=${!m.attribute}>${this.t("picture_state_of")}</option>
            ${r(m.entity).map(v=>b`<option value=${v} ?selected=${v===m.attribute}>${v}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(m.entity,m.attribute)||"\u2013"})}</span>
          ${m.rows.map(v=>{var P,z;let y=n[v],w=!!this.hass&&ta(this.hass,y);return b`<div class="fp3d-picture-row ${w?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${v}"
                placeholder=${this.t("picture_state")}
                .value=${y.state}
                ?disabled=${!e}
                @change=${E=>h(v,{state:E.target.value})}
              />
              <datalist id="fp3d-picture-states-${v}"><option value="*"></option>${d(m.entity,m.attribute).map(E=>b`<option value=${E}></option>`)}</datalist>
              ${this._images[y.image]?b`<img class="fp3d-picture-thumb" src=${this._images[y.image].url} alt="" /> `:$}
              ${_(y)&&((z=(P=this.hass)==null?void 0:P.states[_(y)])!=null&&z.attributes.entity_picture)?b`<img class="fp3d-picture-thumb" src=${String(this.hass.states[_(y)].attributes.entity_picture)} alt="" />`:$}
              <label class="fp3d-btn fp3d-picture-pick">
                ${y.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${E=>{this.uploadPicture(E,t,v)}} />
              </label>
              ${f.filter(E=>E!==y.image).length?b`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(E=>E!==y.image&&this._images[E]).map(E=>b`<button class="fp3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>h(v,{image:E})}><img src=${this._images[E].url} alt="" /></button>`)}
                  </div>`:$}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(y.image)?y.image:""}
                ?disabled=${!e}
                @change=${E=>{let S=E.target.value.trim();S&&h(v,{image:S})}}
              />
              ${g.length?b`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${g}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${_(y)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${E=>{E.stopPropagation(),E.detail.value!=="none"?h(v,{image:`camera:${E.detail.value}`}):_(y)&&h(v,{image:""})}}
                  ></fp3d-entity-picker>`:$}
              <span class="fp3d-sub">${w?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>i(n.filter((E,S)=>S!==v))}>✕</button>
            </div>`})}
          ${e?b`<button class="fp3d-btn" @click=${()=>i([...n,{entity:m.entity,attribute:m.attribute,state:l(m.entity,m.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:$}
        </div>`)}
      ${e?b`<button class="fp3d-btn" @click=${()=>{var m;return i([...n,{entity:((m=o[0])==null?void 0:m.id)??"",attribute:null,state:"on",image:""}])}}>${this.t("picture_add_entity")}</button>`:$}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){var p,h;let i=t.target,o=(p=i.files)==null?void 0:p[0];if(i.value="",!o)return;let s=await createImageBitmap(o),r=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*r),l.height=Math.round(s.height*r),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let d=l.toDataURL(o.type==="image/png"?"image/png":"image/jpeg",.85),c=U("pic");await ii(this.hass,c,d),this._images={...this._images,[c]:{url:d,aspect:l.height/l.width}};let u=((h=this.furnitureItem)==null?void 0:h.id)===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:u.map((f,g)=>g===n?{...f,image:c}:f)})}renderFurnitureLibrary(){let t=this.room,e=this._furnQuery.trim().toLowerCase();return b`<section>
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
      ${e&&!this.libraryHasHits(e)?b`<p class="fp3d-sub">${this.t("furniture_search_none")}</p>`:$}
      ${Object.entries(di).map(([n,i])=>this.librarySection(`group:${n}`,this.t(`furn_group_${n}`),[...i,...n==="kitchen"&&(ft("fridge_smart")||ft("household"))?["fridge_smart"]:[]].map(o=>({type:o,label:this.t(`furn_${o}`),search:Yt(Bi,`furn_${o}`)})),e))}
      ${(this.packs??[]).filter(n=>n.items.length).map(n=>this.librarySection(`pack:${n.id}`,he(n),n.items.map(i=>({type:Oe(n.id,i.id),label:oe(i),search:Object.values(i.name).join(" ")})),e))}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(t,e){let n=o=>{this.showPreview(t,o.currentTarget)},i=Gt(t)?"light":Ze(t)?"switch":null;return b`<button
      class="fp3d-btn ${i?"fp3d-lib-electric":""}"
      title=${i?this.t(i==="light"?"lib_badge_light":"lib_badge_electric"):e}
      @click=${()=>this.addFurniture(t)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${e}
      ${i?b`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Ln(i)} />
          </svg>`:$}
    </button>`}async showPreview(t,e){var o;let n=e.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...i};try{let s=await Di(),[r,l,d]=Wt(t),c=s.furniturePreview({type:t,w:r,d:l,h:d,variant:null,lamp:gi[t]??null},180,this.packs??[]);((o=this._preview)==null?void 0:o.type)===t&&(this._preview={type:t,url:c,...i})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?b`<div class="fp3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?b`<img src=${t.url} alt="" />`:b`<span class="fp3d-preview-wait"></span>`}
      <b>${Ae(this.hass,t.type)}</b>
    </div>`:$}renderDeviceForm(t){var r;let e=this.isAdmin,n=lt(t.entity_id),i=n==="light",o=t.mount??"ceiling",s=n?vi(n,((r=this.floor)==null?void 0:r.height)??2.5,i?o:null):1;return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Ln(n):""} />
        </svg>
        ${Mt(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?b`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${l=>this.updateDevice({mount:l.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(l=>b`<option value=${l} ?selected=${l===o}>${this.t(`lamp_${l}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(t.glow_scale,l=>this.updateDevice({glow_scale:l}))}`:n==="camera"?b`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!e} @change=${l=>this.updateDevice({mount:l.target.value,y:null})}>
                  <option value="wall" ?selected=${(t.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${t.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:$}
        ${this.len(this.t("x"),t.x,l=>this.updateDevice({x:l}))} ${this.len(this.t("z"),t.z,l=>this.updateDevice({z:l}))}
        ${this.len(this.t("marker_height"),t.y??s,l=>this.updateDevice({y:Math.max(0,l)}),.05,0)}
        ${this.num(this.t("rotation"),t.rotation??0,l=>this.updateDevice({rotation:(l%360+360)%360}),1)}
        ${n==="camera"?b`${this.num(this.t("camera_fov"),t.fov??(t.mount==="ceiling"?360:90),l=>this.updateDevice({fov:Math.min(360,Math.max(10,l))}),5,10)}
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
        ${n&&Br.has(n)?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${l=>this.updateDevice({confirm:l.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:$}
        ${ft("energy_pro")&&zl(this.hass,t.entity_id)?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!e} @change=${l=>this.updateDevice({holo:l.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:$}
        ${this.markerSelect(t.marker??null,l=>this.updateDevice({marker:l}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${t.name??""} ?disabled=${!e} maxlength="60" placeholder=${Mt(this.hass,t.entity_id)} @change=${l=>this.updateDevice({name:l.target.value.trim()||null})}
        /></label>
        ${t.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${l=>this.updateDevice({show_name:l.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:$}
        ${this.iconInput(t.icon,l=>this.updateDevice({icon:l}))}
      </div>
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?b`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:$}
            ${this.renderAsFurniture(t)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:$}
    </section>`}renderDeviceList(t){var P,z,E,S,x;let e=this.isAdmin,n=this.hass,i=t.area_id?(z=(P=n==null?void 0:n.areas)==null?void 0:P[t.area_id])==null?void 0:z.name:void 0,o=n?Ve(n,t.area_id).filter(k=>En(lt(k))):[],s=new Set([...((E=this.floor)==null?void 0:E.placements.filter(k=>Y([k.x,k.z],t.points)).map(k=>k.entity_id))??[],...((S=this.floor)==null?void 0:S.furniture.filter(k=>Gt(k.type)&&k.entity&&Y([k.x,k.z],t.points)).map(k=>k.entity))??[]]),r=n?Fo(n,o):[],l=r.map(k=>k.primary).filter(k=>!s.has(k)),d=this._deviceQuery.trim().toLowerCase(),c=k=>!d||Mt(n,k,i).toLowerCase().includes(d)||k.includes(d),u=(x=this.floor)==null?void 0:x.placements.filter(k=>lt(k.entity_id)==="light"&&(k.mount??"ceiling")==="ceiling"&&Y([k.x,k.z],t.points)).length,p=new Set(t.panel??[]),h=new Set(t.hidden??[]),f=new Set(t.no_state??[]),g=new Map;for(let k of this._doc.floors)for(let M of[...k.placements.map(I=>[I.entity_id,I.x,I.z]),...k.furniture.filter(I=>Gt(I.type)&&I.entity).map(I=>[I.entity,I.x,I.z])]){let I=k.rooms.find(A=>Y([M[1],M[2]],A.points));I&&I.id!==t.id&&g.set(M[0],I.name)}let _=(k,M=!1,I=i)=>{let A=s.has(k),j=A?void 0:g.get(k);return b`<div class="fp3d-row fp3d-dev-row ${M?"fp3d-dev-extra":""} ${h.has(k)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${A?"":"fp3d-muted"}" ?disabled=${!A} @click=${()=>this.selectItem("device",k)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Ln(lt(k))} />
          </svg>
          <span>${Mt(n,k,I)}${j?b`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:j})}</small>`:$}</span>
        </button>
        ${e&&!M?b`<button
              class="fp3d-pin ${h.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${h.has(k)}
              title=${this.t(h.has(k)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:h.has(k)?[...h].filter(O=>O!==k):[...h,k]})}
            >
              ${h.has(k)?"\u{1F648}":"\u{1F441}"}
            </button>`:$}
        ${e&&!M&&!h.has(k)?b`<button
              class="fp3d-pin ${f.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(k)}
              title=${this.t(f.has(k)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:f.has(k)?[...f].filter(O=>O!==k):[...f,k]})}
            >
              ${f.has(k)?"\u2205":"Aa"}
            </button>`:$}
        ${e&&!A?b`<button
              class="fp3d-pin ${p.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${p.has(k)}
              title=${this.t(p.has(k)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:p.has(k)?[...p].filter(O=>O!==k):[...p,k]})}
            >
              ${p.has(k)?"\u2605":"\u2606"}
            </button>`:$}
        ${e?A?b`<button class="fp3d-link" @click=${()=>this.removeDevice(k)}>${this.t("devices_remove")}</button>`:b`<button class="fp3d-link" @click=${()=>this.placeDevices([k])}>${this.t("devices_place")}</button>`:$}
      </div>`},m=e?this._devSource:"area",v=k=>{this._devSource=k,this._deviceQuery=""},y=b`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${k=>this._deviceQuery=k.target.value}
    />`,w=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return b`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?b`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${m==="area"} @click=${()=>v("area")}>${this.t("devices_src_area")}${o.length?` (${r.length})`:""}</button>
            <button aria-pressed=${m==="other"} @click=${()=>v("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${m==="none"} @click=${()=>v("none")}>${this.t("devices_src_none")}</button>
          </div>`:$}
      ${m!=="area"?b`${y}${this.renderDeviceExtras(t,_,m)}`:t.area_id?o.length?b`${e&&(u??0)>=2?b`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:$}
              ${o.length>8?y:$}
              <div class="fp3d-room-list">
                ${r.map(k=>{let M=k.others.filter(c),I=this._expanded.has(k.primary)||!!d&&M.length>0;return!c(k.primary)&&!M.length?$:b`${_(k.primary)}
                  ${k.others.length?b`<button
                        class="fp3d-more"
                        @click=${()=>{let A=new Set(this._expanded);A.has(k.primary)?A.delete(k.primary):A.add(k.primary),this._expanded=A}}
                      >
                        ${I?this.t("devices_less"):this.t("devices_more",{n:k.others.length})}
                      </button>`:$}
                  ${I?(d?M:k.others).map(A=>_(A,!0)):$}`})}
              </div>
              ${e&&l.length>1?b`<button class="fp3d-link fp3d-place-all" @click=${w}>${this.t("devices_place_all_n",{n:l.length})}</button>`:$}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(t,e,n){let i=this.hass;if(!i)return $;let o=50,s=this._deviceQuery.trim().toLowerCase(),r=(c,u)=>!s||`${Mt(i,c,u)} ${c} ${u??""}`.toLowerCase().includes(s),l=c=>c>0?b`<p class="fp3d-sub">${this.t("devices_narrow",{n:c})}</p>`:$;if(n==="other"){let c=0,u=0,p=Kr(i,t.area_id).map(h=>{let f=h.ids.filter(_=>r(_,h.name)),g=f.slice(0,Math.max(0,o-c));return c+=g.length,u+=f.length-g.length,g.length?b`<div class="fp3d-dev-area">${h.name}</div>${g.map(_=>e(_,!1,h.name))}`:$});return c?b`<div class="fp3d-room-list">${p}</div>${l(u)}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let d=Ur(i).filter(c=>r(c));return d.length?b`<div class="fp3d-room-list">${d.slice(0,o).map(c=>e(c))}</div>${l(d.length-Math.min(d.length,o))}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(t){let e=this.hass;if(!e)return $;let n=(s,r)=>{let l={...t.climate??{},[s]:r},d=Object.values(l).every(c=>c==null);this.updateRoom({climate:d?null:l})},i=!!t.climate&&Object.values(t.climate).some(s=>s!=null),o=(s,r)=>{var p;let l=Po[s],d=Gr(e,this.floor??null,{...t,climate:null},s),c=Ao[s],u=this.entityOptions(h=>{var f,g;return Ot(h)&&((f=e.states[h])==null?void 0:f.attributes.device_class)===l||!!c&&h.startsWith("climate.")&&typeof((g=e.states[h])==null?void 0:g.attributes[c])=="number"}).map(h=>({...h,rank:(De(e,h.id)===t.area_id?0:1)+(Eo(e,h.id)?0:2)})).sort((h,f)=>h.rank-f.rank).map(({id:h,label:f})=>({id:h,label:f}));return this.entitySelect(r,((p=t.climate)==null?void 0:p[s])??null,d[0]??null,u,h=>n(s,h))};return b`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(t){let e=t.background;return b`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?b`${this.len(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
              ${this.len(this.t("z"),e.z,n=>this.updateFloor({background:{...e,z:n}}))}
              ${this.len(this.t("background_width"),e.width,n=>this.updateFloor({background:{...e,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),e.rotation??0,n=>this.updateFloor({background:{...e,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isAdmin?b`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel?"fp3d-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?b`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:$}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?b`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:b`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${In(this.t("bg_ruler_length"),this.unit)}
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
    </details>`}async loadHistory(){if(this.hass)try{this._history=await Us(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await Ys(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await Zs(this.hass),e={};for(let i of Tr(t.building))try{e[i]=await so(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);wo(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...t,exported_at:new Date().toISOString(),images:e}))}catch(t){alert(this.t("backup_import_error",{error:String((t==null?void 0:t.message)??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){var o,s;let e=t.target,n=(o=e.files)==null?void 0:o[0];if(e.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if((i==null?void 0:i.format)!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let r=await Xs(this.hass,i.building,i.packs??[]),l=0;for(let[c,u]of Object.entries(i.images??{}))try{await ii(this.hass,c,u),l++}catch{}this.setDoc(fi(r.building)),this._floorId=((s=r.building.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let d=r.skipped.length?` ${this.t("backup_full_skipped",{packs:r.skipped.map(c=>c.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:r.packs,pictures:l})+d}catch(r){let{code:l,message:d}=r??{};alert(this.t("backup_import_error",{error:d??l??String(r)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);wo(`neonplan3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(Fr(this._doc,t),null,2))}async importPlan(t){var o,s;let e=t.target,n=(o=e.files)==null?void 0:o[0];if(e.value="",!n||!this.hass)return;let i;try{i=Rr(await n.text())}catch(r){let l=r.message;alert(l==="not_json"?this.t("import_error_not_json"):l==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:l}));return}confirm(this.t("backup_import_confirm"))&&(await Gs(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=((s=i.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){var e;return new Date(t.saved_at*1e3).toLocaleString((e=this.hass)==null?void 0:e.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return b`<details
      class="fp3d-section"
      @toggle=${t=>{t.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?b`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?b`<div class="fp3d-room-list">
              ${this._history.map(t=>b`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(t)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:t.rooms,furniture:t.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(t)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:b`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
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
    </details>`}renderTerrain(){let t=this._doc.settings.terrain??{},e=i=>{let o=structuredClone(this._doc);o.settings.terrain={...o.settings.terrain??{},...i},this.setDoc(o)},n=this._doc.floors.some(i=>i.elevation<-.3);return b`<details class="fp3d-section">
      <summary>⛰ ${this.t("terrain")}</summary>
      <p class="fp3d-sub">${this.t("terrain_hint")}</p>
      <div class="fp3d-form">
        ${this.len(this.t("terrain_level"),t.level??-.2,i=>e({level:Math.max(-20,Math.min(20,i))}),.05)}
        <label class="fp3d-check fp3d-wide" title=${this.t("terrain_earth_hint")}
          ><input type="checkbox" .checked=${t.earth!==!1} @change=${i=>e({earth:i.target.checked})} />
          ${this.t("terrain_earth")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t(n?"terrain_cellar_hint":"terrain_no_cellar_hint")}</p>
      ${t.level!=null?b`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>e({level:null})}>${this.t("terrain_reset")}</button></div>`:$}
    </details>`}renderSettings(){let t=this._doc.settings,e=n=>{let i=structuredClone(this._doc);Object.assign(i.settings,n),this.setDoc(i)};return b`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),t.wall_exterior,n=>e({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("wall_interior"),t.wall_interior,n=>e({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("grid"),t.grid,n=>e({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${n=>{let i=n.target.value;e({units:i==="metric"||i==="imperial"?i:null})}}>
            <option value="auto" ?selected=${!t.units}>${this.t("units_auto",{unit:this.t(Co(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
            <option value="metric" ?selected=${t.units==="metric"}>${this.t("units_metric")}</option>
            <option value="imperial" ?selected=${t.units==="imperial"}>${this.t("units_imperial")}</option>
          </select></label
        >
        ${this.num(this.t("north"),t.north,n=>e({north:(Math.round(n)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):e({roof:{...t.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>b`<option value=${n} ?selected=${n===t.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${t.roof.type==="gable"?b`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>e({roof:{...t.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${t.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${t.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:$}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):$}
        ${t.roof.type!=="none"?this.len(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):$}
        ${this.hass?this.entitySelect(this.t("weather_entity"),t.weather_entity??null,Ea(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>e({weather_entity:n})):$}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${hr.map(n=>{let i=t.weather_effects??co;return b`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${o=>{let s=o.target.checked;e({weather_effects:s?[...new Set([...i,n])]:i.filter(r=>r!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.rain_warning!==!1} @change=${n=>e({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
        ${this.hass?b`${this.entitySelect(this.t("rain_entity"),t.rain_entity??null,void 0,this.entityOptions(n=>Aa(this.hass,n)),n=>e({rain_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("rain_entity_hint")}</p>`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${t.alert_names!==!1} @change=${n=>e({alert_names:n.target.checked})} />
          ${this.t("alert_names")}</label
        >
        ${this.hass?b`${this.entitySelect(this.t("outage_entity"),t.outage_entity??null,void 0,this.entityOptions(n=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(n)),n=>e({outage_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${t.sun_patches!==!1} @change=${n=>e({sun_patches:n.target.checked})} />
          ${this.t("sun_patches")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[fn,Vi,ie`
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
        /* open over the 3D pane: above the toolbar too, so its buttons never sit on the sidebar's */
        z-index: 30;
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
        /* nothing of the plan column reaches over the sidebar (its menus still hang down) */
        overflow-x: clip;
        display: grid;
        grid-template-rows: auto 1fr;
        /* the column never grows with a wide toolbar (that would push the plan under the sidebar) */
        grid-template-columns: minmax(0, 1fr);
        min-height: 0;
        min-width: 0;
      }
      .fp3d-toolbar {
        position: relative;
        /* its menus open over the plan below */
        z-index: 20;
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
        overflow: hidden;
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
      .fp3d-side:not(.fp3d-side-overlay) {
        position: relative;
        z-index: 7;
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
      /* the opt-in reports: the exact JSON they send */
      .fp3d-wv.fp3d-diag {
        width: min(640px, 100%);
        grid-template-rows: auto minmax(0, 1fr) auto auto;
      }
      .fp3d-diag-json {
        margin: 0;
        overflow: auto;
        padding: 10px;
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.3);
        font-size: 12px;
        line-height: 1.4;
        white-space: pre;
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
      .fp3d-wv-fitmode .fp3d-wv-run line {
        cursor: copy;
        stroke-width: 0.05 !important;
      }
      .fp3d-wv-fitmode .fp3d-wv-run line:hover {
        stroke: #ffb547 !important;
      }
      .fp3d-tech-step {
        border: 1px solid #ffb547;
        background: rgba(255, 181, 71, 0.1);
        border-radius: 10px;
        padding: 8px 10px;
        font-size: 12.5px;
        line-height: 1.35;
      }
      .fp3d-tech-step b {
        display: block;
        color: #ffb547;
        font-size: 11px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 2px;
      }
      .fp3d-tech-step.fp3d-done {
        border-color: #4dff9a;
        background: rgba(77, 255, 154, 0.08);
      }
      .fp3d-tech-step.fp3d-done b {
        color: #4dff9a;
      }
      .fp3d-wv-dry line {
        stroke-dasharray: 0.04 0.03;
      }
      .fp3d-wv-erase {
        cursor: not-allowed;
      }
      .fp3d-wv-erase .fp3d-wv-run:hover line,
      .fp3d-wv-erase .fp3d-wv-valve:hover circle,
      .fp3d-wv-erase .fp3d-wv-sight:hover,
      .fp3d-wv-erase .fp3d-wv-joint:hover circle {
        stroke: #ff4d6d;
      }
      .fp3d-tech-step.fp3d-tech-erasing {
        border-color: #ff4d6d;
        background: rgba(255, 77, 109, 0.12);
      }
      .fp3d-tech-undo {
        justify-self: start;
      }
      .fp3d-tech-kit .fp3d-tech-pen {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .fp3d-tech-kit .fp3d-tech-pen button {
        display: grid;
        justify-items: center;
        gap: 2px;
        padding: 6px 2px;
        font-size: 0.82em;
        white-space: nowrap;
      }
      .fp3d-tech-feed {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      .fp3d-tech-feed i {
        font-style: normal;
      }
      .fp3d-tech-feed small {
        margin-left: auto;
        color: #4dff9a;
      }
      .fp3d-tech-feed.fp3d-on {
        opacity: 0.75;
      }
      .fp3d-tech-ok {
        color: #4dff9a;
        font-weight: 600;
      }
      .fp3d-tech-issues {
        color: #ffb547;
        font-size: 12.5px;
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
        width: 236px;
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
      .fp3d-wv-cats {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4px;
      }
      .fp3d-wv-cat {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 6px 8px;
        border-radius: 10px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        font-size: 12px;
        text-align: left;
        cursor: pointer;
        line-height: 1.15;
      }
      .fp3d-wv-cat span {
        font-size: 15px;
        width: 18px;
        text-align: center;
        flex: none;
      }
      .fp3d-wv-cat.fp3d-on {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.14);
        color: #fff;
      }
      .fp3d-wv-tiles {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
      }
      .fp3d-wv-tile {
        display: grid;
        grid-template-rows: auto auto auto;
        justify-items: center;
        gap: 2px;
        padding: 6px 4px;
        border-radius: 12px;
        border: 1px solid var(--fp3d-line, rgba(91, 124, 255, 0.25));
        background: rgba(255, 255, 255, 0.03);
        color: var(--fp3d-text, #d6ecff);
        font: inherit;
        cursor: pointer;
        text-align: center;
      }
      .fp3d-wv-tile:hover {
        border-color: var(--fp3d-accent);
        background: rgba(55, 224, 255, 0.08);
      }
      .fp3d-wv-tile-pic {
        width: 72px;
        height: 60px;
        display: grid;
        place-items: center;
      }
      .fp3d-wv-tile-pic img {
        max-width: 72px;
        max-height: 60px;
      }
      .fp3d-wv-tile-pic i {
        width: 36px;
        height: 28px;
        border-radius: 6px;
        border: 1px dashed var(--fp3d-muted);
        opacity: 0.4;
      }
      .fp3d-wv-tile-name {
        font-size: 11.5px;
        font-weight: 600;
        line-height: 1.15;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
      .fp3d-wv-tile small {
        font-size: 10.5px;
        color: var(--fp3d-muted);
      }
      .fp3d-wv-tile small.fp3d-wv-fit {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-kit .fp3d-search {
        width: 100%;
        box-sizing: border-box;
      }
      .fp3d-wv-kit .fp3d-wv-pick {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 6px;
        height: auto;
        min-height: 32px;
        line-height: 1.2;
        font-size: 12.5px;
      }
      .fp3d-wv-pick small {
        color: var(--fp3d-muted);
        white-space: nowrap;
      }
      .fp3d-wv-gapnote {
        color: var(--fp3d-accent);
      }
      .fp3d-wv-setframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 0.012;
        stroke-dasharray: 0.05 0.03;
        pointer-events: none;
      }
      .fp3d-wv-setblock rect {
        stroke: #ffb547;
      }
      .fp3d-wv-setframe text {
        fill: var(--fp3d-accent);
        pointer-events: none;
      }
      .fp3d-wv-setblock text {
        fill: #ffb547;
      }
      .fp3d-wv-gap rect {
        fill: rgba(55, 224, 255, 0.1);
        stroke: var(--fp3d-accent);
        stroke-width: 0.01;
        stroke-dasharray: 0.04 0.03;
        pointer-events: none;
      }
      .fp3d-wv-gap text {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        pointer-events: none;
      }
      .fp3d-wv-handle {
        fill: var(--fp3d-accent);
        stroke: #06101c;
        stroke-width: 0.006;
        cursor: ew-resize;
      }
      .fp3d-wv-handle.fp3d-wv-ns {
        cursor: ns-resize;
      }
      .fp3d-wv-size {
        fill: var(--fp3d-accent);
        text-anchor: middle;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-wv-fixnote {
        color: #ffb547;
        font-size: 12.5px;
      }
      .fp3d-pool-depth {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-pool-depth input {
        width: 58px;
        padding: 3px 5px;
      }
      .fp3d-wv-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 0.008;
        stroke-dasharray: 0.03 0.02;
        pointer-events: none;
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
      /* a group with a menu lets it hang out below (the others scroll sideways on a narrow screen) */
      .fp3d-seg.fp3d-seg-menu {
        overflow: visible;
        /* too narrow for a group: its buttons wrap (they never reach over the sidebar) */
        flex-wrap: wrap;
        max-width: 100%;
      }
      .fp3d-seg > button.fp3d-undo {
        font-size: 20px;
        line-height: 1;
        padding-inline: 12px;
      }
      .fp3d-menu-wrap {
        position: relative;
        display: inline-flex;
      }
      .fp3d-menu-veil {
        position: fixed;
        inset: 0;
        z-index: 29;
      }
      .fp3d-menu {
        position: absolute;
        top: calc(100% + 6px);
        left: 0;
        z-index: 30;
        min-width: 230px;
        max-height: 70vh;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        padding: 6px;
        border-radius: 14px;
        background: var(--fp3d-chrome-solid, #0d1628);
        box-shadow: var(--fp3d-shadow);
        border: 1px solid var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-right {
        left: auto;
        right: 0;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
        padding: 9px 12px;
        border-radius: 10px;
        color: var(--fp3d-text);
        background: none;
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-item:hover {
        background: rgba(120, 190, 255, 0.12);
      }
      .fp3d-seg .fp3d-menu .fp3d-menu-on {
        color: var(--fp3d-accent);
        font-weight: 700;
      }
      .fp3d-menu-icon {
        width: 22px;
        text-align: center;
      }
      .fp3d-menu-more {
        margin-left: auto;
        color: var(--fp3d-muted);
      }
      .fp3d-caret {
        font-size: 0.8em;
        opacity: 0.7;
      }
      .fp3d-menu-label {
        color: var(--fp3d-muted);
        font-weight: 500;
      }
      .fp3d-menu-sep {
        height: 1px;
        margin: 4px 6px;
        background: var(--fp3d-line, rgba(120, 190, 255, 0.22));
      }
      .fp3d-menu-sub {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        padding: 2px 8px 8px 16px;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-chip {
        min-height: 30px;
        padding: 5px 11px;
        font-size: 0.92em;
      }
      .fp3d-seg .fp3d-menu-sub .fp3d-menu-on {
        background: var(--fp3d-accent);
        color: var(--fp3d-accent-text);
      }
      .fp3d-wv-zoom {
        position: absolute;
        right: 64px;
        bottom: 6px;
        z-index: 1;
        display: flex;
        gap: 4px;
      }
      .fp3d-wv-zoom .fp3d-btn {
        min-width: 34px;
        padding: 4px 8px;
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
      /* furniture blocks and multi selections: a dashed frame with its name, the frame being drawn */
      .fp3d-selframe rect {
        fill: none;
        stroke: var(--fp3d-accent);
        stroke-width: 1.5;
        stroke-dasharray: 6 4;
        pointer-events: none;
      }
      .fp3d-selframe-block rect {
        stroke: #ffb547;
      }
      .fp3d-selframe text {
        fill: var(--fp3d-accent);
        font-size: 11px;
        font-weight: 600;
        pointer-events: none;
      }
      .fp3d-selframe-block text {
        fill: #ffb547;
      }
      .fp3d-marquee {
        fill: rgba(55, 224, 255, 0.08);
        stroke: var(--fp3d-accent);
        stroke-width: 1;
        stroke-dasharray: 4 3;
        pointer-events: none;
      }
      .fp3d-block-parts {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 6px 0 10px;
      }
      .fp3d-block-note {
        display: flex;
        gap: 6px;
        align-items: center;
        flex-wrap: wrap;
      }
      .fp3d-multi-toggle {
        margin-top: 8px;
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",ws);function Fd(a,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i||1,s=Math.min(1,Math.max(0,((a[0]-t[0])*n+(a[1]-t[1])*i)/o));return Math.hypot(a[0]-t[0]-n*s,a[1]-t[1]-i*s)}function mn(a){return a.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Bi={language:"en"};function Ot(a){return/^(sensor|input_number|number)\./.test(a)}function $s(a){return/^(binary_sensor|input_boolean)\./.test(a)}export{ws as Fp3dEditor};
