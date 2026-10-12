var ln=globalThis,cn=ln.ShadowRoot&&(ln.ShadyCSS===void 0||ln.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Zn=Symbol(),ki=new WeakMap,Oe=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Zn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(cn&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=ki.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&ki.set(e,t))}return t}toString(){return this.cssText}},Mi=a=>new Oe(typeof a=="string"?a:a+"",void 0,Zn),St=(a,...t)=>{let e=a.length===1?a[0]:t.reduce((n,o,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+a[i+1],a[0]);return new Oe(e,a,Zn)},Si=(a,t)=>{if(cn)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=ln.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,a.appendChild(n)}},to=cn?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Mi(e)})(a):a;var{is:Ia,defineProperty:Fa,getOwnPropertyDescriptor:Ra,getOwnPropertyNames:La,getOwnPropertySymbols:Oa,getPrototypeOf:Va}=Object,dn=globalThis,Pi=dn.trustedTypes,Ta=Pi?Pi.emptyScript:"",ja=dn.reactiveElementPolyfillSupport,Ve=(a,t)=>a,eo={toAttribute(a,t){switch(t){case Boolean:a=a?Ta:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},Ai=(a,t)=>!Ia(a,t),Ei={attribute:!0,type:String,converter:eo,reflect:!1,useDefault:!1,hasChanged:Ai};Symbol.metadata??=Symbol("metadata"),dn.litPropertyMetadata??=new WeakMap;var Ft=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ei){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&Fa(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:i}=Ra(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:o,set(s){let r=o?.call(this);i?.call(this,s),this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ei}static _$Ei(){if(this.hasOwnProperty(Ve("elementProperties")))return;let t=Va(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ve("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ve("properties"))){let e=this.properties,n=[...La(e),...Oa(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(to(o))}else t!==void 0&&e.push(to(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Si(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute!==void 0?n.converter:eo).toAttribute(e,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let i=n.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:eo;this._$Em=o;let r=s.fromAttribute(e,i.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(t,e,n,o=!1,i){if(t!==void 0){let s=this.constructor;if(o===!1&&(i=this[t]),n??=s.getPropertyOptions(t),!((n.hasChanged??Ai)(i,e)||n.useDefault&&n.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:i},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[o,i]of n){let{wrapped:s}=i,r=this[o];s!==!0||this._$AL.has(o)||r===void 0||this.C(o,void 0,i,r)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Ft.elementStyles=[],Ft.shadowRootOptions={mode:"open"},Ft[Ve("elementProperties")]=new Map,Ft[Ve("finalized")]=new Map,ja?.({ReactiveElement:Ft}),(dn.reactiveElementVersions??=[]).push("2.1.2");var oo=globalThis,zi=a=>a,pn=oo.trustedTypes,Ii=pn?pn.createPolicy("lit-html",{createHTML:a=>a}):void 0,io="$lit$",Rt=`lit$${Math.random().toFixed(9).slice(2)}$`,so="?"+Rt,Ca=`<${so}>`,ee=document,je=()=>ee.createComment(""),Ce=a=>a===null||typeof a!="object"&&typeof a!="function",ro=Array.isArray,Ti=a=>ro(a)||typeof a?.[Symbol.iterator]=="function",no=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fi=/-->/g,Ri=/>/g,Zt=RegExp(`>|${no}(?:([^\\s"'>=/]+)(${no}*=${no}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Li=/'/g,Oi=/"/g,ji=/^(?:script|style|textarea|title)$/i,ao=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),b=ao(1),F=ao(2),yc=ao(3),Lt=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Vi=new WeakMap,te=ee.createTreeWalker(ee,129);function Ci(a,t){if(!ro(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ii!==void 0?Ii.createHTML(t):t}var Di=(a,t)=>{let e=a.length-1,n=[],o,i=t===2?"<svg>":t===3?"<math>":"",s=Te;for(let r=0;r<e;r++){let l=a[r],c,d,p=-1,h=0;for(;h<l.length&&(s.lastIndex=h,d=s.exec(l),d!==null);)h=s.lastIndex,s===Te?d[1]==="!--"?s=Fi:d[1]!==void 0?s=Ri:d[2]!==void 0?(ji.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=Zt):d[3]!==void 0&&(s=Zt):s===Zt?d[0]===">"?(s=o??Te,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Zt:d[3]==='"'?Oi:Li):s===Oi||s===Li?s=Zt:s===Fi||s===Ri?s=Te:(s=Zt,o=void 0);let u=s===Zt&&a[r+1].startsWith("/>")?" ":"";i+=s===Te?l+Ca:p>=0?(n.push(c),l.slice(0,p)+io+l.slice(p)+Rt+u):l+Rt+(p===-2?r:u)}return[Ci(a,i+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},De=class a{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let i=0,s=0,r=t.length-1,l=this.parts,[c,d]=Di(t,e);if(this.el=a.createElement(c,n),te.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=te.nextNode())!==null&&l.length<r;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(io)){let h=d[s++],u=o.getAttribute(p).split(Rt),f=/([.?@])?(.*)/.exec(h);l.push({type:1,index:i,name:f[2],strings:u,ctor:f[1]==="."?hn:f[1]==="?"?fn:f[1]==="@"?mn:oe}),o.removeAttribute(p)}else p.startsWith(Rt)&&(l.push({type:6,index:i}),o.removeAttribute(p));if(ji.test(o.tagName)){let p=o.textContent.split(Rt),h=p.length-1;if(h>0){o.textContent=pn?pn.emptyScript:"";for(let u=0;u<h;u++)o.append(p[u],je()),te.nextNode(),l.push({type:2,index:++i});o.append(p[h],je())}}}else if(o.nodeType===8)if(o.data===so)l.push({type:2,index:i});else{let p=-1;for(;(p=o.data.indexOf(Rt,p+1))!==-1;)l.push({type:7,index:i}),p+=Rt.length-1}i++}}static createElement(t,e){let n=ee.createElement("template");return n.innerHTML=t,n}};function ne(a,t,e=a,n){if(t===Lt)return t;let o=n!==void 0?e._$Co?.[n]:e._$Cl,i=Ce(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(a),o._$AT(a,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=ne(a,o._$AS(a,t.values),o,n)),t}var un=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=(t?.creationScope??ee).importNode(e,!0);te.currentNode=o;let i=te.nextNode(),s=0,r=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new me(i,i.nextSibling,this,t):l.type===1?c=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(c=new gn(i,this,t)),this._$AV.push(c),l=n[++r]}s!==l?.index&&(i=te.nextNode(),s++)}return te.currentNode=ee,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},me=class a{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ne(this,t,e),Ce(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==Lt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ti(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&Ce(this._$AH)?this._$AA.nextSibling.data=t:this.T(ee.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=De.createElement(Ci(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(e);else{let i=new un(o,this),s=i.u(this.options);i.p(e),this.T(s),this._$AH=i}}_$AC(t){let e=Vi.get(t.strings);return e===void 0&&Vi.set(t.strings,e=new De(t)),e}k(t){ro(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let i of t)o===e.length?e.push(n=new a(this.O(je()),this.O(je()),this,this.options)):n=e[o],n._$AI(i),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let n=zi(t).nextSibling;zi(t).remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},oe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,i){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(t,e=this,n,o){let i=this.strings,s=!1;if(i===void 0)t=ne(this,t,e,0),s=!Ce(t)||t!==this._$AH&&t!==Lt,s&&(this._$AH=t);else{let r=t,l,c;for(t=i[0],l=0;l<i.length-1;l++)c=ne(this,r[n+l],e,l),c===Lt&&(c=this._$AH[l]),s||=!Ce(c)||c!==this._$AH[l],c===y?t=y:t!==y&&(t+=(c??"")+i[l+1]),this._$AH[l]=c}s&&!o&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},hn=class extends oe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},fn=class extends oe{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},mn=class extends oe{constructor(t,e,n,o,i){super(t,e,n,o,i),this.type=5}_$AI(t,e=this){if((t=ne(this,t,e,0)??y)===Lt)return;let n=this._$AH,o=t===y&&n!==y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,i=t!==y&&(n===y||o);o&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},gn=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ne(this,t)}},Hi={M:io,P:Rt,A:so,C:1,L:Di,R:un,D:Ti,V:ne,I:me,H:oe,N:fn,U:mn,B:hn,F:gn},Da=oo.litHtmlPolyfillSupport;Da?.(De,me),(oo.litHtmlVersions??=[]).push("3.3.3");var Wi=(a,t,e)=>{let n=e?.renderBefore??t,o=n._$litPart$;if(o===void 0){let i=e?.renderBefore??null;n._$litPart$=o=new me(t.insertBefore(je(),i),i,void 0,e??{})}return o._$AI(a),o};var lo=globalThis,_t=class extends Ft{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Wi(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Lt}};_t._$litElement$=!0,_t.finalized=!0,lo.litElementHydrateSupport?.({LitElement:_t});var Ha=lo.litElementPolyfillSupport;Ha?.({LitElement:_t});(lo.litElementVersions??=[]).push("4.2.2");var _n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},He=a=>(...t)=>({_$litDirective$:a,values:t}),ge=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var We=class extends ge{constructor(t){if(super(t),this.it=y,t.type!==_n.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===Lt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};We.directiveName="unsafeHTML",We.resultType=1;var Ni=He(We);var{I:Dc}=Hi;var Bi=a=>a.strings===void 0;var Ne=(a,t)=>{let e=a._$AN;if(e===void 0)return!1;for(let n of e)n._$AO?.(t,!1),Ne(n,t);return!0},bn=a=>{let t,e;do{if((t=a._$AM)===void 0)break;e=t._$AN,e.delete(a),a=t}while(e?.size===0)},qi=a=>{for(let t;t=a._$AM;a=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(a))break;e.add(a),Ba(t)}};function Wa(a){this._$AN!==void 0?(bn(this),this._$AM=a,qi(this)):this._$AM=a}function Na(a,t=!1,e=0){let n=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(t)if(Array.isArray(n))for(let i=e;i<n.length;i++)Ne(n[i],!1),bn(n[i]);else n!=null&&(Ne(n,!1),bn(n));else Ne(this,a)}var Ba=a=>{a.type==_n.CHILD&&(a._$AP??=Na,a._$AQ??=Wa)},vn=class extends ge{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),qi(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(Ne(this,t),bn(this))}setValue(t){if(Bi(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var co=new WeakMap,Ui=He(class extends vn{render(a){return y}update(a,[t]){let e=t!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=a.options?.host,this.rt(this.ct=a.element)),y}rt(a){if(this.G!==void 0)if(this.isConnected||(a=void 0),typeof this.G=="function"){let t=this.ht??globalThis,e=co.get(t);e===void 0&&(e=new WeakMap,co.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,a),a!==void 0&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){return typeof this.G=="function"?co.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});async function po(a,t){return(await a.callWS({type:"neonplan3d/image/get",image_id:t})).data}async function yn(a,t,e){await a.callWS({type:"neonplan3d/image/set",image_id:t,data:e})}async function Ki(a){return(await a.callWS({type:"neonplan3d/history/list"})).snapshots}async function Gi(a){await a.callWS({type:"neonplan3d/history/snapshot"})}async function Xi(a,t){return(await a.callWS({type:"neonplan3d/history/restore",snapshot_id:t})).revision}async function Ji(a,t){return a.callWS({type:"neonplan3d/packs/import",pack:t})}async function Yi(a,t){await a.callWS({type:"neonplan3d/packs/remove",pack_id:t})}var qa="neonplan3d.seenOffers";function Qi(a){try{localStorage.setItem(qa,JSON.stringify(a.map(t=>t.id)))}catch{}}var Zi="neonplan3d.seenUpdates";function ts(a){let t=[];try{t=JSON.parse(localStorage.getItem(Zi)??"[]")}catch{}return a.filter(e=>!t.includes(`${e.id}@${e.release}`))}function es(a){try{localStorage.setItem(Zi,JSON.stringify(a.map(t=>`${t.id}@${t.release}`)))}catch{}}function ns(a,t){return t?`${a}${a.includes("?")?"&":"?"}np_coupon=${encodeURIComponent(t.code)}`:a}function uo(a){return a.callWS({type:"neonplan3d/license/get"})}function ho(a,t){return a.callWS({type:"neonplan3d/license/activate",key:t})}function os(a){return a.callWS({type:"neonplan3d/license/remove"})}function is(a){return a.callWS({type:"neonplan3d/license/refresh"})}function ss(a){return a.callWS({type:"neonplan3d/backup/export"})}function rs(a,t,e){return a.callWS({type:"neonplan3d/backup/import",building:t,packs:e})}function as(a,t){return a.callWS({type:"neonplan3d/packs/install",pack_id:t})}var Ua=[],fo=new Map,Ka=0;function ls(a){Ua=a,fo=new Map(a.flatMap(t=>t.items.map(e=>[_e(t.id,e.id),e]))),Ka++}function _e(a,t){return`pack:${a}:${t}`}function be(a){return a.startsWith("pack:")}var Ga={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function cs(a){return at(a)?.parts.find(t=>t.screen)}function ds(a){let t=at(a);if(!t)return!1;let[e,n,o]=t.size;return t.parts.some(i=>{if(!i.screen)return!1;let[s,r]=[i.w*e,i.d*n,i.h*o].sort((l,c)=>c-l);return s>=.06&&r>=.06})}function at(a){if(!be(a))return;let t=fo.get(a);if(t)return t;let[,e,...n]=a.split(":"),o=Ga[e];return o?fo.get(`pack:${o}:${n.join(":")}`):void 0}function Ht(a){return Pt[a]??at(a)?.size??[.6,.6,.8]}function Be(a){return gs.has(a)||!!at(a)?.electric||!!at(a)?.light}function Wt(a){return a.name.es??a.name.en??Object.values(a.name)[0]??a.id}var Xa={architecture:"Arquitectura y acabados",bath:"Ba\xF1o",bedroom:"Dormitorio",cinema:"Cine en casa y Hi-Fi",exclusive:"Exclusivo: frigor\xEDfico inteligente",fitness:"Fitness",garage:"Garaje y taller",garden:"Jard\xEDn y terraza",kids:"Cuarto infantil",kitchen:"Cocina",living:"Sal\xF3n",office:"Oficina y gaming",pets:"Mascotas",smarthome:"Smart home y tecnolog\xEDa",stairs:"Escaleras y barandillas",utility:"Lavadero e instalaciones",vehicles:"Veh\xEDculos",starter:"Pack de inicio",pro_auto:"Pro: Auto Pro",pro_timetravel:"Pro: Viaje en el tiempo",pro_pool:"Pro: Piscina Pro",pro_camera:"Pro: Cabina de c\xE1mara",pro_energy:"Pro: Energ\xEDa Pro",pro_screens:"Pro: Pantallas en directo",pro_sound:"Pro: Sonido y Cine",pro_weather:"Pro: Tiempo exterior"};function ht(a){let t=a.id.replace(/^mastershort\./,""),e=t.endsWith("_sample"),n=Xa[e?t.slice(0,-7):t];return n?e?`${n} \u2013 muestra`:n:a.name}function bt(a,t){let e=at(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return ps;if(us.has(t.type))return Math.max(0,a.height-hs(t.type,t.h));if(t.type==="led_strip")return Math.max(0,a.height-.04-Math.max(.02,t.h));switch(e?.mount){case"surface":return ms(a,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,a.height-t.h);default:return e?0:fs(t)}}var _s=["always","no_power","never"],bs=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],$n={field:null,size:1,right:0,up:0},vs=["navigate","more_info","service","fire_dom_event"];function mo(a,t,e){return a?t?!!e.lock_plan:!!a.locked:!1}var ys=["rain","snow","fog","clouds","lightning","sky"],go=["rain","snow","clouds","lightning","sky"],_o=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],xn={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function bo(a){return a==="hedge"||a==="fence"||a==="pergola"}var $s=["x","-x","z","-z"];function Ja(a,t,e){let n=a.slope??0;if(!n||a.type==="pool")return 0;let o=a.slope_dir??"x",i=(c,d)=>o==="x"?c:o==="-x"?-c:o==="z"?d:-d,s=1/0,r=-1/0;for(let[c,d]of a.points){let p=i(c,d);s=Math.min(s,p),r=Math.max(r,p)}if(r-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(i(t,e)-s)/(r-s)));return n*l}function Ya(a,t,e,n){return vo(a)+(t.offset??0)+xn[t.type]-Ja(t,e,n)}function vo(a){return a.elevation>.3?0:-.2}function xs(a,t,e){let n=(a.outdoor??[]).filter(i=>!bo(i.type)&&i.type!=="pool"&&C([t,e],i.points)),o=[...n].reverse().find(i=>i.cut)??n[0];return o?Ya(a,o,t,e):vo(a)}var ws=["filter","backwash","rinse","waste","recirculate","closed"];function ks(a,t){let e=vo(a)+(t.offset??0);return t.above?e+yo(t)-.15:e+xn.pool}function yo(a){return a.height&&a.height>.3?a.height:1.2}function wn(a,t,e,n,o){let i=g=>Math.round(g*1e3)/1e3,s=n-t,r=o-e,l=(t+n)/2,c=(e+o)/2;if(a==="rect")return[[t,e],[n,e],[n,o],[t,o]];let d=40;if(a==="round"){let g=Math.min(s,r)/2;return Array.from({length:d},(_,v)=>[i(l+g*Math.cos(v/d*Math.PI*2)),i(c+g*Math.sin(v/d*Math.PI*2))])}let p=s>=r,h=(p?r:s)/2,u=Math.max(0,(p?s:r)/2-h),f=[],m=d/2;for(let g=0;g<2;g++){let _=g===0?1:-1;for(let v=0;v<=m;v++){let $=-Math.PI/2+v/m*Math.PI+(g===0?0:Math.PI),k=_*u+h*Math.cos($),x=h*Math.sin($);f.push(p?[i(l+k),i(c+x)]:[i(l+x),i(c+k)])}}return f}var Qa={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Ms=["wood","oak","tiles","carpet","stone","concrete"],Ss={type:"none",pitch:35,overhang:.4},Za={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Ss}};function Ps(a,t,e){return{id:a,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var tl=2.75;function Es(a,t){if(t!=null&&Number.isFinite(t))return Math.round(t*tl*100)/100;let e=a.reduce((n,o)=>!n||o.elevation>n.elevation?o:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function As(a,t,e){let n=a.rooms.flatMap(r=>r.points.map(l=>l[0])),o=a.rooms.flatMap(r=>r.points.map(l=>l[1])),i=n.length?Math.ceil(Math.max(...n))+1:0,s=o.length?Math.floor(Math.min(...o)):0;return t.map((r,l)=>{let c=i+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:e(),name:r.name,area_id:r.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function zs(a,t,e,n){let o=a.rotation*Math.PI/180,i=Math.cos(o),s=Math.sin(o),[r,l]=t,c=a.x-r*(a.w/2)*i+l*(a.d/2)*s,d=a.z-r*(a.w/2)*s-l*(a.d/2)*i,p=e[0]-c,h=e[1]-d,u=_=>Math.max(.1,Math.round(_/n)*n),f=u((p*i+h*s)*r),m=u((-p*s+h*i)*l),g=_=>Math.round(_*1e3)/1e3;return{x:g(c+r*(f/2)*i-l*(m/2)*s),z:g(d+r*(f/2)*s+l*(m/2)*i),w:g(f),d:g(m)}}var $o=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell"],xo={lights:["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","stairs","stairs_u","robot_vacuum"],vehicles:["parking"]},wt=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Is=.3,Nt=["meter","inverter","home_battery","wallbox","grid_point"],Fs=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),ps=1.75;function ve(a){if(["lamp_ceiling","lamp_panel","lamp_pendant","stairwell","parking"].includes(a.type)||wo.has(a.type))return!1;let t=at(a.type);return!(t?.mount==="ceiling"&&t.light)}var us=new Set(["lamp_downlight","lamp_spot"]);function hs(a,t){return a==="lamp_spot"?Math.max(.06,t)+.008:.02}var wo=new Set(["stairs","stairs_u"]);function Rs(a,t,e){let n=Math.max(4,Math.round(e/.18)),o=Math.floor(n/2)+1,i=o-1,s=n-o,r=Math.min(.12,a*.06),l=(a-r)/2,c=Math.min(l,t*.45),d=(t-c)/i;return{n,k:o,steps1:i,steps2:s,gap:r,fw:l,landing:c,run:d,rise:e/n}}function vt(a){return Fs.has(a)||!!at(a)?.light}var el=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function ko(a,t,e,n=0){let o=it(a.points),i=o.x1-o.x0-2*n,s=o.z1-o.z0-2*n,r=[];for(let l=0;l<t;l++)for(let c=0;c<e;c++){let d=[Math.round((o.x0+n+i/e*(c+.5))*1e3)/1e3,Math.round((o.z0+n+s/t*(l+.5))*1e3)/1e3];C(d,a.points)&&r.push(d)}return r}function ye(a,t,e){let n=s=>Math.round(s*1e3)/1e3,[o,i]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(a[0]+o*t),n(a[1]+i*t)]}function fs(a){switch(a.type){case"home_battery":return a.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-a.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function ms(a,t,e){let n=0;for(let o of a.furniture)!(el.has(o.type)||at(o.type)?.surface)||!C([t,e],Et(o))||(n=Math.max(n,o.h));return n}var gs=new Set([...Fs,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),Pt={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Mo=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],So=["standard","bars","glass_wall"];function kn(a,t){return a.type==="door"?a.style&&Mo.includes(a.style)?a.style:t?"front":"interior":a.style&&So.includes(a.style)?a.style:"standard"}function Ls(a,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let o=t==="sidelights",i=a-.04,s=Math.min(1.05,Math.max(.6,i-(o?.6:.3))),r=(i-s)/(o?2:1),l=n.sidelight_width??r,c=o?n.sidelight_width2??n.sidelight_width??r:0;l=Math.max(.1,l),c=o?Math.max(.1,c):0;let d=i-.5;if(l+c>d){let h=Math.max(0,d)/(l+c);l*=h,c*=h}return o?{panels:[[.02,.02+l],[a-.02-c,a-.02]],x0:.02+l,x1:a-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:a-.02}:{panels:[[a-.02-l,a-.02]],x0:.02,x1:a-.02-l}}function Po(a){return a==="front"||a==="front_glass"||a==="sidelight"||a==="sidelights"}var Mn={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function Sn(a){if(a.type==="garage")return"garage";if(a.type==="window"&&a.style==="glass_wall")return"glass_wall";let t=a.leaves===2;return a.type==="door"?!t&&a.style&&Po(a.style)?"front":t?"door_double":"door":a.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function Pn(a){a.energy={...Qa,...a.energy??{}},a.presence=a.presence??[],a.settings={...Za,...a.settings,roof:{...Ss,...a.settings?.roof??{}}};for(let t of a.floors){t.outdoor=t.outdoor??[],t.walls=t.walls??[],t.rooms=t.rooms.map(n=>({...n,panel:n.panel??[]})),t.ha_floor=t.ha_floor??null,t.placements=t.placements.map(n=>({...n,mount:n.mount??null,rotation:n.rotation??0})),t.furniture=t.furniture.map(n=>({...n,entity:n.entity??null,power:n.power??null}));let e=t.placements.filter(n=>n.entity_id.startsWith("light.")&&!n.pin);if(e.length){let n={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of e){let i=n[o.mount??"ceiling"],[s,r,l]=Pt[i];t.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:i,x:o.x,z:o.z,rotation:0,w:s,d:r,h:l,variant:null,entity:o.entity_id,power:null})}t.placements=t.placements.filter(o=>!o.entity_id.startsWith("light.")||o.pin)}t.openings=t.openings.map(n=>({...n,hinge:n.hinge??"left",leaves:n.leaves??1,swing:n.swing??"in",style:n.style??null,cover:n.cover??null,contact:n.contact??null,contact2:n.contact2??null,tilt:n.tilt??null}))}return a}function W(a){return`${a}_${Math.random().toString(36).slice(2,10)}`}function nt(a){let t=0;for(let e=0;e<a.length;e++){let[n,o]=a[e],[i,s]=a[(e+1)%a.length];t+=n*s-i*o}return t/2}function pt(a){return Math.abs(nt(a))}function kt(a){let t=nt(a);if(Math.abs(t)<1e-9){let o=a.length||1;return[a.reduce((i,s)=>i+s[0],0)/o,a.reduce((i,s)=>i+s[1],0)/o]}let e=0,n=0;for(let o=0;o<a.length;o++){let[i,s]=a[o],[r,l]=a[(o+1)%a.length],c=i*l-r*s;e+=(i+r)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function En(a){if(a.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=a[t],[o,i]=a[(t+1)%4];if(Math.abs(e-o)>1e-6&&Math.abs(n-i)>1e-6)return!1}return!0}function it(a){let t=1/0,e=1/0,n=-1/0,o=-1/0;for(let[i,s]of a)t=Math.min(t,i),e=Math.min(e,s),n=Math.max(n,i),o=Math.max(o,s);return{x0:t,z0:e,x1:n,z1:o}}function Et(a){let t=a.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),o=a.w/2,i=a.d/2;return[[-o,-i],[o,-i],[o,i],[-o,i]].map(([s,r])=>[a.x+s*e-r*n,a.z+s*n+r*e])}function C(a,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[i,s]=t[n],[r,l]=t[o];s>a[1]!=l>a[1]&&a[0]<(r-i)*(a[1]-s)/(l-s)+i&&(e=!e)}return e}var Eo={lamp_ceiling:"ceiling",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Os="neonplan3d";function nl(a){let t=structuredClone(a);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function Vs(a,t){return{format:Os,version:1,exported_at:new Date().toISOString(),building:t?nl(a):structuredClone(a)}}function Ts(a){let t;try{t=JSON.parse(a)}catch{throw new Error("not_json")}let e=t,n=e?.format===Os?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let o of n.floors)o.background=null;return Pn(n)}function js(a){let t=new Set;for(let e of a.floors){e.background?.image_id&&t.add(e.background.image_id);for(let n of e.furniture)for(let o of n.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&t.add(o.image)}return[...t]}function Ao(a,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=a,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var ol={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},il=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure"]),sl=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx"]),rl=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),An=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Ns=new Set(["light","switch","fan"]);function Bs(a){return a.slice(0,a.indexOf("."))}function K(a){return ol[Bs(a)]??null}function Ue(a){return a!==null&&a!=="scene"&&a!=="script"}function re(a,t){let e=a.entities?.[t];return e?e.area_id?e.area_id:e.device_id&&a.devices?.[e.device_id]?.area_id||null:null}function Cs(a,t){let e=K(t);if(!e)return!1;let n=a.entities?.[t];if(n?.hidden||n?.entity_category)return!1;let o=a.states[t];if(!o)return!1;let i=o.attributes.device_class;return e==="sensor"?i?il.has(i):sl.has(String(o.attributes.unit_of_measurement??"")):e==="binary"?i?rl.has(i):!!n?.area_id:!0}var al=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Ds(a,t){if(K(t)!=="sensor")return!1;let e=a.entities?.[t];if(e?.hidden||e?.entity_category)return!1;let n=a.states[t];return!n||!n.attributes.unit_of_measurement||al.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||zn(n)}var zo=null;function ie(a){let t=zo;if(t&&t.entities===a.entities&&t.devices===a.devices&&(t.states===a.states||(t.states=a.states,Object.keys(a.states).length===t.stateCount)))return t;let e=new Map,n=new Map,o=[],i=new Map,s=new Map;for(let l of Object.keys(a.entities??{})){let c=a.entities[l],d=c.device_id;d&&c.area_id&&(s.get(d)??s.set(d,new Set).get(d)).add(c.area_id),d&&To(a,l)&&(n.get(d)??n.set(d,[]).get(d)).push(l),d&&!c.hidden&&!c.entity_category&&(i.get(d)??i.set(d,new Set).get(d)).add(Bs(l));let p=Cs(a,l),h=re(a,l);if(!h){(p||Ds(a,l))&&Ue(K(l))&&o.push(l);continue}p&&(e.get(h)??e.set(h,[]).get(h)).push(l)}if(a.entities)for(let l of Object.keys(a.states))a.entities[l]||(Cs(a,l)||Ds(a,l))&&Ue(K(l))&&o.push(l);o.sort((l,c)=>An.indexOf(K(l))-An.indexOf(K(c))||Z(a,l).localeCompare(Z(a,c)));for(let[l,c]of e){let d=a.areas?.[l]?.name;c.sort((p,h)=>{let u=An.indexOf(K(p)),f=An.indexOf(K(h));return u-f||Z(a,p,d).localeCompare(Z(a,h,d))})}let r=new Set([...s].filter(([,l])=>l.size>1).map(([l])=>l));return zo={entities:a.entities,devices:a.devices,states:a.states,stateCount:Object.keys(a.states).length,areas:e,power:n,unassigned:o,domains:i,hubs:r},zo}function se(a,t){return!t||!a.entities?[]:ie(a).areas.get(t)??[]}function qs(a,t){return a.entities?[...ie(a).areas].filter(([e])=>e!==t).map(([e,n])=>({areaId:e,name:a.areas?.[e]?.name??e,ids:n.filter(o=>Ue(K(o)))})).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function Us(a){return a.entities?ie(a).unassigned:[]}var Io={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},ll=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),cl=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Fo(a,t){let e=a.entities?.[t]?.device_id,n=e&&!ie(a).hubs.has(e)?ie(a).domains.get(e):void 0;return n&&[...n].some(o=>ll.has(o))?!1:!cl.test(`${t} ${a.states[t]?.attributes.friendly_name??""}`)}function Ks(a,t,e,n){let o=e.climate?.[n];if(o==="none")return[];if(o)return a.states[o]?[o]:[];let i=Io[n],s=(u,f)=>C([u,f],e.points),r=t?.placements.filter(u=>u.entity_id.startsWith("sensor."))??[],l=r.filter(u=>s(u.x,u.z)).map(u=>u.entity_id),c=new Set(r.filter(u=>!s(u.x,u.z)).map(u=>u.entity_id)),d=[...new Set([...se(a,e.area_id).filter(u=>!c.has(u)),...l])],p=d.filter(u=>u.startsWith("sensor.")&&a.states[u]?.attributes.device_class===i&&Fo(a,u));if(p.length)return p;let h=Ro[n];return h?d.filter(u=>u.startsWith("climate.")&&typeof a.states[u]?.attributes[h]=="number"):[]}var Ro={temperature:"current_temperature",humidity:"current_humidity"};function Gs(a,t){return!!a.entities&&ie(a).hubs.has(t)}function Lo(a,t){return a.entities?ie(a).power.get(t)??[]:[]}function Z(a,t,e){let o=a.states[t]?.attributes.friendly_name??a.entities?.[t]?.name??t;if(e&&o.length>e.length+1&&o.toLowerCase().startsWith(e.toLowerCase()+" ")){let i=o.slice(e.length+1);return i.charAt(0).toUpperCase()+i.slice(1)}return o}function zn(a){return!a||a.state==="unavailable"||a.state==="unknown"}function Xs(a){return!!a&&a.entity_id.startsWith("sensor.")&&a.attributes.device_class==="enum"}function In(a,t,e=null){if(a==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(a==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(a){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function dl(a,t){let e=1/0;for(let n=0;n<t.length;n++){let o=t[n],i=t[(n+1)%t.length],s=i[0]-o[0],r=i[1]-o[1],l=s*s+r*r||1,c=Math.min(1,Math.max(0,((a[0]-o[0])*s+(a[1]-o[1])*r)/l));e=Math.min(e,Math.hypot(a[0]-o[0]-s*c,a[1]-o[1]-r*c))}return e}function Js(a,t,e=[]){if(a.points.length<3||!t.length)return[];let n=a.points,o=n.map(v=>v[0]),i=n.map(v=>v[1]),s=Math.min(...o),r=Math.min(...i),l=Math.max(...o),c=Math.max(...i),d=Math.min(l-s,c-r),p=Math.max(.1,Math.min(.25,d/8)),h=Math.min(.35,d/5),u=kt(n),f=[];for(let v=s+p/2;v<l;v+=p)for(let $=r+p/2;$<c;$+=p){let k=[v,$];if(!C(k,n))continue;let x=dl(k,n);x<h||f.push({p:k,wall:x})}f.length||f.push({p:u,wall:0});let m=[...e],g=[],_=Math.min(.7,d/4);for(let v of t){let $=K(v)==="light",k=f[0].p,x=-1/0;for(let{p:P,wall:w}of f){let z=m.length?Math.min(...m.map(L=>Math.hypot(P[0]-L[0],P[1]-L[1]))):3,S=Math.hypot(P[0]-u[0],P[1]-u[1]),I=Math.min(z,3)*2;S<_&&!$&&(I-=10),I-=$?S*.35:w*1.2,I>x+1e-9&&(x=I,k=P)}let A=[Math.round(k[0]*100)/100,Math.round(k[1]*100)/100];m.push(A),g.push({entity_id:v,x:A[0],z:A[1],y:null,mount:null})}return g}var pl=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),ul=new Set(["garage","gate"]),hl=new Set(["window","opening"]);function qe(a,t,e=!1){let n=new Map;return t.length&&a.forEach((o,i)=>{let s=e&&t.length===1?t[0]:t[i];s&&n.set(o.id,s)}),n}function Ys(a,t){let e=new Map,n=(i,s)=>i==="none"?null:i??s??null,o=(i,s,r)=>({cover:n(i.cover,s),contact:i.sensor==="handle"&&i.contact==null?null:n(i.contact,r),tilt:i.tilt==="none"?null:i.tilt,contact2:i.leaves===2&&i.contact2&&i.contact2!=="none"?i.contact2:null,tilt2:i.leaves===2&&i.tilt2&&i.tilt2!=="none"?i.tilt2:null,position:i.position&&i.position!=="none"?i.position:null,positionInverted:!!i.position_inverted,tiltAngle:i.tilt_angle&&i.tilt_angle!=="none"?i.tilt_angle:null,tiltMax:i.tilt_max??null,tiltOffset:i.tilt_offset??null,tiltInvert:!!i.tilt_invert,shut:!!i.shut,...i.contact_invert?{contactInvert:!0}:{},...i.cover_invert?{coverInvert:!0}:{}});for(let i of t){for(let s of i.rooms){let r=i.openings.filter($=>$.room_id===s.id).sort(($,k)=>$.edge-k.edge||$.offset-k.offset);if(!r.length)continue;let l=se(a,s.area_id),c=$=>a.states[$]?.attributes.device_class,d=l.filter($=>K($)==="cover"&&pl.has(c($))),p=r.filter($=>$.type==="window"),h=r.filter($=>$.type==="door"),u=r.filter($=>$.type==="garage"),f=qe(p,d,!0),m=qe(p,l.filter($=>K($)==="binary"&&hl.has(c($)))),g=qe(h,l.filter($=>K($)==="binary"&&c($)==="door")),_=qe(u,l.filter($=>K($)==="cover"&&ul.has(c($)??""))),v=qe(u,l.filter($=>K($)==="binary"&&c($)==="garage_door"));for(let $ of r){let k=$.type==="window"?f:$.type==="garage"?_:null,x=$.type==="window"?m:$.type==="garage"?v:g;e.set($.id,o($,k?.get($.id),x.get($.id)))}}for(let s of i.openings)e.has(s.id)||e.set(s.id,o(s))}return e}var fl=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Oo(a){if(!a||zn(a))return null;let t=a.attributes.window_state;for(let e of[typeof t=="string"?t:null,a.state]){if(!e)continue;let n=fl.find(([o])=>o.test(e.trim()));if(n)return n[1]}return null}function Vo(a,t){let e=new Map,n=[];for(let s of t){let r=a.entities?.[s]?.device_id??`entity:${s}`,l=e.get(r);l||(e.set(r,l=[]),n.push(r)),l.push(s)}let o=n.map(s=>{let r=e.get(s),l=r.find(c=>!a.entities?.[c]?.name)??r[0];return{primary:l,others:r.filter(c=>c!==l)}}),i=new Map(t.map((s,r)=>[s,r]));return o.sort((s,r)=>i.get(s.primary)-i.get(r.primary))}function ml(a,t){return Vo(a,t).map(e=>e.primary)}var gl={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i},Qs=new Set(["tv_board","tv_wall"]);function Zs(a,t){let e=a.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let o=String(n).toLowerCase(),i=t.state.trim().toLowerCase();return t.state.trim()==="*"||o===i||i.length>=3&&o.includes(i)}function Fn(a){return Qs.has(a)||!!cs(a)}function Rn(a){return Fn(a)||a==="desk"||a==="fridge_smart"}var Hs={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function To(a,t){return t.startsWith("sensor.")&&a.states[t]?.attributes.device_class==="power"}function _l(a,t){if(To(a,t))return t;let e=a.entities?.[t]?.device_id;return e?Lo(a,e).find(n=>n!==t)??null:null}function $e(a,t){let e=new Map;for(let n of t){let o=new Set([...n.furniture.flatMap(i=>[i.entity,i.power]),...n.placements.map(i=>i.entity_id)].filter(i=>!!i&&i!=="none"));for(let i of n.furniture){let s=i.type in Hs,r=s?Hs[i.type]:gl[i.type];if(!r&&i.entity==null&&i.power==null)continue;let l=n.rooms.find(u=>u.points.length>=3&&C([i.x,i.z],u.points)),c=l?ml(a,se(a,l.area_id)):[],d=u=>`${u} ${Z(a,u)}`,p=i.entity==="none"?null:i.entity??null;if(i.entity==null){let u=c.filter(f=>!o.has(f));if(s){let f=u.filter(m=>K(m)==="light");p=f.find(m=>r.test(d(m)))??f[0]??null}else if(i.type==="robot_vacuum"){let f=l?.area_id??null;p=Object.keys(a.entities??{}).find(m=>m.startsWith("vacuum.")&&!o.has(m)&&re(a,m)===f)??null}else if(i.type==="radiator"){let f=u.filter(m=>K(m)==="climate");p=f.find(m=>r.test(d(m)))??f[0]??null}else if(Fn(i.type)){let f=u.filter(m=>K(m)==="media");p=f.find(m=>a.states[m]?.attributes.device_class==="tv")??f.find(m=>r?.test(d(m)))??(Qs.has(i.type)?f[0]??null:null)}else r&&(p=u.find(f=>["switch","media","fan"].includes(K(f)??"")&&r.test(d(f)))??null);p&&o.add(p)}let h=i.power==="none"?null:i.power??null;i.power==null&&(h=p?_l(a,p):null,!h&&r&&l&&!s&&(h=se(a,l.area_id).find(f=>To(a,f)&&!o.has(f)&&r.test(d(f)))??null),h&&o.add(h)),(p||h)&&e.set(i.id,{entity:p,power:h})}}return e}var Ws=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,bl={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function tr(a,t){let e=t.car??{},n=p=>p&&p!=="none"?p:null,o=n(e.device)??n(t.entity),i=o?a.entities?.[o]?.device_id:null,s=i&&a.entities?Object.values(a.entities).filter(p=>p.device_id===i).map(p=>p.entity_id):[],r=p=>`${p} ${a.states[p]?.attributes.friendly_name??""} ${a.entities?.[p]?.translation_key??""}`.toLowerCase().replace(/[\s-]+/g,"_"),l=(p,h,u)=>s.find(f=>h.includes(f.split(".")[0])&&bl[p].test(r(f))&&(!u||u(f)))??null,c=p=>String(a.states[p]?.attributes.unit_of_measurement??""),d=p=>String(a.states[p]?.attributes.device_class??"");return{soc:n(e.soc)??s.find(p=>p.startsWith("sensor.")&&d(p)==="battery")??l("soc",["sensor"],p=>c(p)==="%"),range:n(e.range)??l("range",["sensor"],p=>/km|mi/.test(c(p)))??l("range",["sensor"]),charging:n(e.charging)??l("charging",["sensor"],p=>/^k?W$/.test(c(p)))??l("charging",["binary_sensor","switch"]),plugged:n(e.plugged)??s.find(p=>p.startsWith("binary_sensor.")&&d(p)==="plug")??l("plugged",["binary_sensor"]),lock:n(e.lock)??s.find(p=>p.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(e.climate)??s.find(p=>p.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(e.tracker)??s.find(p=>p.startsWith("device_tracker."))??null}}function er(a,t,e){if(e==="none")return null;if(e)return e;let n=t?a.entities?.[t]?.device_id:null;if(!n||!a.entities)return null;for(let o of Object.values(a.entities))if(!(o.device_id!==n||!o.entity_id.startsWith("sensor."))&&(Ws.test(o.translation_key??"")||Ws.test(o.entity_id.split(".")[1])))return o.entity_id;return null}var G=(a,t,e,n,o="")=>F`<rect class=${o} x=${Math.min(a,e)} y=${Math.min(t,n)} width=${Math.abs(e-a)} height=${Math.abs(n-t)} />`,N=(a,t,e,n,o="")=>F`<line class=${o} x1=${a} y1=${t} x2=${e} y2=${n} />`,Q=(a,t,e,n="")=>F`<circle class=${n} cx=${a} cy=${t} r=${e} />`,jo=(a,t,e,n,o="")=>F`<ellipse class=${o} cx=${a} cy=${t} rx=${e} ry=${n} />`;function Co(a,t,e){let n=[];for(let o=1;o<e;o++){let i=-a/2+a/e*o;n.push(N(i,t/2,i,t/2-Math.min(.12,t*.3)))}return n}function nr(a,t,e,n){let o=Math.min(.24,t*.28),i=n?Math.min(.2,a*.12):0,s=[G(-a/2,-t/2,a/2,-t/2+o,"fp3d-sym-fill")];n&&s.push(G(-a/2,-t/2,-a/2+i,t/2,"fp3d-sym-fill"),G(a/2-i,-t/2,a/2,t/2,"fp3d-sym-fill"));let r=a-2*i;for(let l=1;l<e;l++){let c=-a/2+i+r/e*l;s.push(N(c,-t/2+o,c,t/2-.02))}return s}function or(a,t,e){let n=-a/2,o=a/2,i=-t/2,s=t/2,r=Math.max(.3,Math.min(.95,t*.5,a*(e?.34:.45))),l=Math.min(.24,r*.28),c=Math.min(.2,r*.24),d=[G(n,i,o,i+l,"fp3d-sym-fill"),G(n,i+l,n+l,s,"fp3d-sym-fill"),G(n+l,s-c,n+r,s,"fp3d-sym-fill")];e?d.push(G(o-l,i+l,o,s,"fp3d-sym-fill"),G(o-r,s-c,o-l,s,"fp3d-sym-fill")):d.push(G(o-c,i+l,o,i+r,"fp3d-sym-fill"));let p=e?o-r:o-c;d.push(N(n+r,s-c,n+r,i+r),N(n+r,i+r,p,i+r)),e&&d.push(N(o-r,i+r,o-r,s-c));let h=n+l,u=e?o-l:o-c,f=Math.max(1,Math.round((u-h)/.62));for(let v=1;v<f;v++)d.push(N(h+(u-h)/f*v,i+l,h+(u-h)/f*v,i+r));let m=i+r,g=s-c,_=g-m<.2?0:Math.max(1,Math.round((g-m)/.62));for(let v=0;v<_;v++){let $=m+(g-m)/_*v;d.push(N(n+l,$,n+r,$)),e&&d.push(N(o-r,$,o-l,$))}return d}function ir(a,t,e){switch(a){case"sofa":return nr(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return nr(t,e,1,!0);case"sofa_l":return or(t,e,!1);case"sofa_u":return or(t,e,!0);case"bench":return[G(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[G(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),G(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),N(-t/2+n,-e/2+n,t/2,-e/2+n),N(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[G(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[Q(0,.03,Math.min(t,e)*.36),G(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[Q(0,0,Math.min(t,e)*.42)];case"stool":return[G(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[G(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return a==="desk"&&n.push(N(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,o=(t-.2)/n,i=[G(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),N(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let s=0;s<n;s++)i.push(G(-t/2+.13+o*s,-e/2+.12,-t/2+.07+o*(s+1),-e/2+.12+Math.min(.4,e*.18)));return i}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Co(t,e,a==="nightstand"||a==="tall_cabinet"||a==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[G(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...Co(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[N(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[N(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[Q(-t*.22,-e*.2,n),Q(t*.22,-e*.2,n*.8),Q(-t*.22,e*.2,n*.8),Q(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[G(-n/2,-e/2+.1,n/2,e/2-.08),Q(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[N(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[Q(0,.05,Math.min(t,e)*.3),N(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[G(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),Q(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[N(-t/2,-e/2,t/2,e/2),N(t/2,-e/2,-t/2,e/2),Q(0,0,.04)];case"wc":return[G(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),jo(0,e*.1,t*.36,e*.3)];case"washbasin":return[jo(0,.03,t*.34,e*.3)];case"tv_board":return[N(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...Co(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[N(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[Q(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),Q(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[Q(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),Q(0,0,Math.min(t,e)*1.6)];case"parking":return[G(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),N(-t*.15,e/2-.5,0,e/2-.22,"fp3d-sym-strong"),N(0,e/2-.22,t*.15,e/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[G(-t*.45,-e/2,t*.45,-e/2+e*.3,"fp3d-sym-fill"),Q(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],o=Math.max(3,Math.round(t/.1));for(let i=1;i<o;i++)n.push(N(-t/2+t/o*i,-e/2,-t/2+t/o*i,e/2));return n}case"lamp_panel":return[G(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,o=[Q(0,0,n*.9,"fp3d-sym-fill"),Q(0,0,n*.3)];if(a==="lamp_ceiling"||a==="lamp_pendant")for(let i=0;i<8;i++){let s=i/8*Math.PI*2;o.push(N(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return o}case"lamp_wall":return[G(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),jo(0,.01,t*.4,e*.4)];case"led_strip":return[N(-t/2,0,t/2,0,"fp3d-sym-strong")];case"plant":return[Q(0,0,Math.min(t,e)*.46),Q(0,0,Math.min(t,e)*.25)];case"rug":return[G(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),o=[];for(let i=1;i<n;i++)o.push(N(-t/2,e/2-e/n*i,t/2,e/2-e/n*i));return o.push(N(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),N(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),N(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),o}case"stairs_u":{let{steps1:n,steps2:o,fw:i,landing:s,run:r}=Rs(t,e,2.75),l=-e/2+s,c=-t/2+i,d=t/2-i,p=[N(-t/2,l,c,l),N(c,l,c,e/2),N(d,l,d,e/2)];for(let g=1;g<n;g++)p.push(N(-t/2,e/2-r*g,c,e/2-r*g));for(let g=1;g<=o;g++)p.push(N(d,l+r*g,t/2,l+r*g));let h=(-t/2+c)/2,u=(d+t/2)/2,f=-e/2+s/2,m=e/2-.15;return p.push(N(h,e/2-.1,h,f,"fp3d-sym-strong"),N(h,f,u,f,"fp3d-sym-strong"),N(u,f,u,m,"fp3d-sym-strong"),N(u-.15,m-.2,u,m,"fp3d-sym-strong"),N(u+.15,m-.2,u,m,"fp3d-sym-strong")),p}default:{let n=at(a);return n?vl(n,t,e):y}}}function vl(a,t,e){return a.symbol?.length?a.symbol.map(n=>n.shape==="rect"?G((n.x-n.w/2)*t,(n.z-n.d/2)*e,(n.x+n.w/2)*t,(n.z+n.d/2)*e,n.fill?"fp3d-sym-fill":""):n.shape==="circle"?Q(n.x*t,n.z*e,n.r*Math.min(t,e)):N(n.x1*t,n.z1*e,n.x2*t,n.z2*e)):a.parts.filter(n=>n.w<.98||n.d<.98).map(n=>n.shape==="cyl"&&(n.axis??"y")==="y"?Q(n.x*t,n.z*e,Math.min(n.w*t,n.d*e)/2):G((n.x-n.w/2)*t,(n.z-n.d/2)*e,(n.x+n.w/2)*t,(n.z+n.d/2)*e))}var ot=(a,t)=>[a[0]-t[0],a[1]-t[1]],Bt=(a,t)=>[a[0]+t[0],a[1]+t[1]],Ot=(a,t)=>[a[0]*t,a[1]*t],Ge=(a,t)=>a[0]*t[0]+a[1]*t[1],xe=(a,t)=>a[0]*t[1]-a[1]*t[0],Ke=a=>Math.hypot(a[0],a[1]),At=a=>{let t=Ke(a)||1;return[a[0]/t,a[1]/t]},sr=a=>[-a[1],a[0]],rr=a=>[a[1],-a[0]];function lt(a,t,e=[]){let n=t.eps??.005,o=[],i=e.filter(w=>Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])>.05),s=[],r=w=>{for(let z=0;z<s.length;z++)if(Math.abs(s[z][0]-w[0])<=n&&Math.abs(s[z][1]-w[1])<=n)return z;return s.push([w[0],w[1]]),s.length-1},l=[];for(let w of a){let z=w.points;if(z.length<3||Math.abs(nt(z))<1e-6)continue;let S=nt(z)>0,I=z.map(r);for(let L=0;L<z.length;L++){let O=I[L],T=I[(L+1)%z.length];O!==T&&l.push(S?{u:O,v:T,room:w.id,edge:L,forward:!0}:{u:T,v:O,room:w.id,edge:L,forward:!1})}}let c=i.map(w=>[r(w.a),r(w.b)]),d=new Set;for(let w of a){let z=w.points;z.length<3||(w.wall_splits??[]).forEach((S,I)=>{if(!S||I>=z.length)return;let L=z[I],O=ot(z[(I+1)%z.length],L),T=Ke(O);for(let V of S)V>n&&V<T-n&&d.add(r(Bt(L,Ot(O,V/T))))})}let p=[];for(let w of l){let z=s[w.u],S=s[w.v],I=ot(S,z),L=Ke(I),O=Ot(I,1/L),T=[];for(let E=0;E<s.length;E++){if(E===w.u||E===w.v)continue;let R=ot(s[E],z),j=Ge(R,O);j<=n||j>=L-n||Math.abs(xe(O,R))<=n&&T.push({t:j,id:E})}T.sort((E,R)=>E.t-R.t);let V=[{t:0,id:w.u},...T,{t:L,id:w.v}];for(let E=0;E+1<V.length;E++){let R=V[E],j=V[E+1],D=w.forward?R.t:L-j.t,H=w.forward?j.t:L-R.t;p.push({u:R.id,v:j.id,room:w.room,edge:w.edge,t0:D,t1:H})}}let h=new Map;for(let w of p){let z=w.u<w.v?`${w.u}-${w.v}`:`${w.v}-${w.u}`,S=h.get(z);S||h.set(z,S=[]),S.push(w)}let u=w=>({room_id:w.room,edge:w.edge,t0:w.t0,t1:w.t1}),f=new Map;for(let w of p){let z=`${w.room}:${w.edge}`;f.set(z,[...f.get(z)??[],w.t0].sort((S,I)=>S-I))}let m=w=>{let z=a.find(I=>I.id===w.room)?.wall_heights?.[w.edge];if(!Array.isArray(z))return z;let S=f.get(`${w.room}:${w.edge}`)??[];return z[S.indexOf(w.t0)]??null},g=w=>{let z=w.map(m).filter(I=>typeof I=="number"&&I>0);if(z.length)return Math.min(...z);let S=w.map(I=>a.find(L=>L.id===I.room)?.ceiling_height);return S.every(I=>typeof I=="number"&&I>0)?Math.max(...S):void 0},_=w=>{let z=w.map(S=>a.find(I=>I.id===S.room)?.wall_thickness?.[S.edge]).filter(S=>typeof S=="number"&&S>0);return z.length?Math.max(...z):void 0},v=w=>w.some(z=>m(z)===0),$=[],k=[];for(let w of h.values()){let z=w[0],S=w.find(I=>I!==z&&I.u===z.v&&I.v===z.u&&I.room!==z.room);for(let I of w)I!==z&&I!==S&&I.room!==z.room&&o.push(`overlap:${z.room}:${I.room}`);if(v(S?[z,S]:[z])){S&&$.push([z.room,S.room]);continue}if(S){let I=_([z,S])??t.interior;k.push({a:z.u,b:z.v,left:I/2,right:I/2,exterior:!1,roomLeft:z.room,roomRight:S.room,sources:[u(z),u(S)],height:g([z,S])})}else k.push({a:z.u,b:z.v,left:0,right:_([z])??t.exterior,exterior:!0,roomLeft:z.room,roomRight:null,sources:[u(z)],height:g([z])})}let x=w=>At(ot(s[w.b],s[w.a]));for(let w of k){if(w.exterior||w.free)continue;let z=new Set;for(let I of[w.a,w.b])for(let L of k)!L.exterior||L.free||L.a!==I&&L.b!==I||Math.abs(xe(x(w),x(L)))>1e-6||(L.roomLeft===w.roomLeft?z.add("left"):L.roomLeft===w.roomRight&&z.add("right"));if(z.size!==1)continue;let S=w.left+w.right;z.has("left")?(w.left=0,w.right=S):(w.left=S,w.right=0)}i.forEach((w,z)=>{let[S,I]=c[z];if(S===I)return;let L=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],O=a.find(E=>E.points.length>=3&&C(L,E.points))?.id??null,T=(w.thickness??t.interior)/2,V=typeof w.height=="number"&&w.height>0?w.height:void 0;k.push({free:w.id,a:S,b:I,left:T,right:T,exterior:!1,roomLeft:O,roomRight:O,sources:[],height:V})}),k=$l(k,s,d);let A=wl(k,s);return{walls:k.map((w,z)=>{let S=s[w.a],I=s[w.b],L=A.get(`${z}:a`),O=A.get(`${z}:b`),T=kl([L.right,O.left,I,O.right,L.left,S],1e-6);return{id:yl(S,I),a:[S[0],S[1]],b:[I[0],I[1]],left:w.left,right:w.right,exterior:w.exterior,roomLeft:w.roomLeft,roomRight:w.roomRight,sources:w.sources,footprint:T,...w.free?{free:w.free}:{},...w.height!==void 0?{height:w.height}:{}}}),warnings:[...new Set(o)],open:$}}function yl(a,t){let e=i=>Math.round(i*100),[n,o]=a[0]<t[0]||a[0]===t[0]&&a[1]<=t[1]?[a,t]:[t,a];return`w_${e(n[0])}_${e(n[1])}_${e(o[0])}_${e(o[1])}`}function ar(a){return{...a,a:a.b,b:a.a,left:a.right,right:a.left,roomLeft:a.roomRight,roomRight:a.roomLeft}}function $l(a,t,e=new Set){let n=a.slice(),o=!0;for(;o;){o=!1;let i=new Map;n.forEach((s,r)=>{for(let l of[s.a,s.b]){let c=i.get(l);c||i.set(l,c=[]),c.push(r)}});for(let[s,r]of i){if(r.length!==2||e.has(s))continue;let l=n[r[0]],c=n[r[1]];if(l.b!==s&&(l=ar(l)),c.a!==s&&(c=ar(c)),l.a===c.b)continue;let d=At(ot(t[l.b],t[l.a])),p=At(ot(t[c.b],t[c.a]));if(Math.abs(xe(d,p))>1e-6||Ge(d,p)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:xl(l.sources,c.sources)},u=n.filter((f,m)=>m!==r[0]&&m!==r[1]);u.push(h),n.length=0,n.push(...u),o=!0;break}}return n}function xl(a,t){let e=a.map(n=>({...n}));for(let n of t){let o=e.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));o?(o.t0=Math.min(o.t0,n.t0),o.t1=Math.max(o.t1,n.t1)):e.push({...n})}return e}function wl(a,t){let e=new Map;a.forEach((o,i)=>{let s=At(ot(t[o.b],t[o.a])),r=[[o.a,{key:`${i}:a`,d:s,left:o.left,right:o.right,angle:Math.atan2(s[1],s[0])}],[o.b,{key:`${i}:b`,d:Ot(s,-1),left:o.right,right:o.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of r){let d=e.get(l);d||e.set(l,d=[]),d.push(c)}});let n=new Map;for(let[o,i]of e){let s=t[o];i.sort((c,d)=>c.angle-d.angle);let r=c=>({left:Bt(s,Ot(sr(c.d),c.left)),right:Bt(s,Ot(rr(c.d),c.right))});for(let c of i)n.set(c.key,r(c));if(i.length<2)continue;let l=4*Math.max(...i.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<i.length;c++){let d=i[c],p=i[(c+1)%i.length],h=Bt(s,Ot(sr(d.d),d.left)),u=Bt(s,Ot(rr(p.d),p.right)),f=xe(d.d,p.d);if(Math.abs(f)<1e-4)continue;let m=xe(ot(u,h),p.d)/f,g=Bt(h,Ot(d.d,m));Ke(ot(g,s))>l||(n.get(d.key).left=g,n.get(p.key).right=g)}}return n}function kl(a,t){let e=a.filter((o,i)=>Ke(ot(o,a[(i+1)%a.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let o=0;o<e.length;o++){let i=e[(o+e.length-1)%e.length],s=e[o],r=e[(o+1)%e.length],l=ot(s,i),c=ot(r,s);if(Math.abs(xe(At(l),At(c)))<1e-7&&Ge(l,c)>0){e=e.filter((d,p)=>p!==o),n=!0;break}}}return e}function qt(a,t,e){let n=a.points[t],o=a.points[(t+1)%a.points.length],i=At(ot(o,n));return Bt(n,Ot(i,e))}function we(a,t,e){if(a.wall){let o=e.find(r=>r.id===a.wall);if(!o||Math.hypot(o.b[0]-o.a[0],o.b[1]-o.a[1])<.05)return null;let i=At(ot(o.b,o.a));return{room:{id:a.room_id,name:"",area_id:null,points:[o.a,o.b,Bt(o.a,[-i[1],i[0]])]},edge:0}}let n=t.find(o=>o.id===a.room_id);return n&&a.edge<n.points.length?{room:n,edge:a.edge}:null}function Do(a,t,e){if(!t.wall)return Ml(a,e.room,e.edge,t.offset);let n=a.find(i=>i.free===t.wall);if(!n)return null;let o=qt(e.room,0,t.offset);return{wall:n,s:Ge(ot(o,n.a),At(ot(n.b,n.a)))}}function Ml(a,t,e,n){for(let o of a){if(!o.sources.find(r=>r.room_id===t.id&&r.edge===e&&n>=r.t0-1e-6&&n<=r.t1+1e-6))continue;let s=qt(t,e,n);return{wall:o,s:Ge(ot(s,o.a),At(ot(o.b,o.a)))}}return null}function Ho(a,t){let e=nt(t)>0?1:-1,n=[...a];for(let o=0;o<t.length&&n.length;o++){let i=t[o],s=t[(o+1)%t.length],r=c=>e*((s[0]-i[0])*(c[1]-i[1])-(s[1]-i[1])*(c[0]-i[0])),l=n;n=[];for(let c=0;c<l.length;c++){let d=l[c],p=l[(c+1)%l.length],h=r(d),u=r(p);if(h>=0&&n.push(d),h>=0!=u>=0){let f=h/(h-u);n.push([d[0]+(p[0]-d[0])*f,d[1]+(p[1]-d[1])*f])}}}return n}var lr=a=>a.length>=3?Math.abs(pt(a)):0;function Sl(a,t){return a.exterior?0:a.roomLeft===t?a.left:a.roomRight===t?a.right:0}function cr(a,t,e){let n=lr(a.points);if(a.points.length<3)return n;let{walls:o}=lt(t.rooms,e,t.walls??[]),i=n,s=o.filter(r=>!r.free&&(r.roomLeft===a.id||r.roomRight===a.id));for(let r of o){let l=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2];if((r.free?!C(l,a.points):!s.includes(r))||(i-=lr(Ho(a.points,r.footprint)),!r.free))continue;let c=Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1]);if(c<.2)continue;let d=[(r.b[0]-r.a[0])/c,(r.b[1]-r.a[1])/c],p=null;for(let h of s){let u=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1]);if(u<.2)continue;let f=[(h.b[0]-h.a[0])/u,(h.b[1]-h.a[1])/u];if(Math.abs(d[0]*f[1]-d[1]*f[0])>.05)continue;let m=Math.abs((l[0]-h.a[0])*f[1]-(l[1]-h.a[1])*f[0]),g=(r.a[0]-h.a[0])*f[0]+(r.a[1]-h.a[1])*f[1],_=(r.b[0]-h.a[0])*f[0]+(r.b[1]-h.a[1])*f[1],v=Math.min(u,Math.max(g,_))-Math.max(0,Math.min(g,_)),$=m-(r.left+r.right)/2-Sl(h,a.id);v>.1&&$>0&&m<1&&(!p||$<p.gap)&&(p={gap:$,overlap:v})}p&&(i-=p.gap*p.overlap)}return Math.max(0,i)}function Wo(a,t){return t==="metric"||t==="imperial"?t:a?.config?.unit_system?.length==="mi"?"imperial":"metric"}function dr(a,t){return String(Number(a.toFixed(t)))}function ae(a,t=2){let e=a<0?"-":"",n=Math.round(Math.abs(a)/.0254*(t>=2?10:1))/(t>=2?10:1),o=Math.floor(n/12+1e-9),i=n-o*12,s=dr(i,t>=2?1:0);return o?i<.05?`${e}${o}'`:`${e}${o}' ${s}"`:`${e}${s}"`}function No(a,t){let e=a.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,o=0,i=!1,s=!1,r=e;for(let l of e.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];i=!0,r=r.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(o+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?o+=c*.0254:d==="mm"?o+=c/1e3:d==="cm"?o+=c/100:d==="m"?o+=c:o+=t==="imperial"?c*(s?.0254:.3048):c}return!i||/[^\s+]/.test(r)?null:o}function pr(a,t,e){return t==="imperial"?ae(a):`${e(a)} m`}function ur(a,t,e){return t==="imperial"?`${dr(a/(.3048*.3048),1)} ft\xB2`:`${e(a)} m\xB2`}function Xe(a,t){return t==="imperial"?a.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):a}var Pl=.05,El=.2,Al=.12;function zl(a){let t=[];return a.forEach((e,n)=>{let o=e.points;if(o.length<3)return;let i=nt(o)>=0;for(let s=0;s<o.length;s++){let r=o[s],l=o[(s+1)%o.length],c=l[0]-r[0],d=l[1]-r[1],p=Math.hypot(c,d);if(p<.05)continue;let h=[c/p,d/p],u=i?[h[1],-h[0]]:[-h[1],h[0]];(h[1]<-1e-9||Math.abs(h[1])<=1e-9&&h[0]<0)&&(h=[-h[0],-h[1]]);let f=[-h[1],h[0]],m=r[0]*h[0]+r[1]*h[1],g=l[0]*h[0]+l[1]*h[1];t.push({room:n,index:s,dir:h,normal:f,offset:r[0]*f[0]+r[1]*f[1],outside:u[0]*f[0]+u[1]*f[1]>0?1:-1,t0:Math.min(m,g),t1:Math.max(m,g)})}}),t}function hr(a,t=.6){let e=zl(a),n=e.map((d,p)=>p),o=d=>n[d]===d?d:n[d]=o(n[d]),i=[];for(let d=0;d<e.length;d++)for(let p=d+1;p<e.length;p++){let h=e[d],u=e[p];if(h.room===u.room||Math.abs(h.dir[0]*u.dir[1]-h.dir[1]*u.dir[0])>Pl||h.outside===u.outside)continue;let f=(u.offset-h.offset)*h.outside;f>t||f<-Al||Math.abs(f)<1e-4||Math.min(h.t1,u.t1)-Math.max(h.t0,u.t0)<El||(i.push(Math.round(f*1e3)/1e3),n[o(d)]=o(p))}if(!i.length)return{rooms:a.map(d=>({...d,points:d.points.map(p=>[p[0],p[1]])})),gaps:i};let s=new Map;e.forEach((d,p)=>{let h=o(p);if(h===p&&!e.some((f,m)=>m!==p&&o(m)===p))return;let u=s.get(h)??[];u.push(p),s.set(h,u)});let r=a.map(d=>d.points.map(()=>new Map));for(let[d,p]of s){let h=p.reduce((u,f)=>u+e[f].offset,0)/p.length;for(let u of p){let f=e[u],m=h-f.offset,g=[f.normal[0]*m,f.normal[1]*m],_=a[f.room].points.length;r[f.room][f.index].set(d,g),r[f.room][(f.index+1)%_].set(d,g)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:a.map((d,p)=>({...d,points:d.points.map((h,u)=>{let f=h[0],m=h[1];for(let[g,_]of r[p][u].values())f+=g,m+=_;return[l(f),l(m)]})})),gaps:i}}function fr(a){let t=a.filter(n=>n>.04).sort((n,o)=>n-o);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}function mr(a,t=.05,e=.5){let n=a.map(i=>({...i,points:i.points.map(s=>[s[0],s[1]])})),o=0;for(let i=0;i<4;i++){let s=(l,c)=>n.reduce((d,p)=>d+p.points.filter(h=>Math.abs(h[l]-c)<1e-6).length,0),r=!1;for(let l of n)for(let c=0;c<l.points.length;c++){let d=l.points[c],p=l.points[(c+1)%l.points.length],h=Math.abs(p[0]-d[0]),u=Math.abs(p[1]-d[1]),f=u>1e-6&&u<=t&&h>=e?1:h>1e-6&&h<=t&&u>=e?0:null;if(f===null)continue;let[m,g]=s(f,d[f])>=s(f,p[f])?[d[f],p[f]]:[p[f],d[f]];for(let _ of n)for(let v of _.points)Math.abs(v[f]-g)<1e-6&&(v[f]=m);o++,r=!0}if(!r)break}return{rooms:n,fixed:o}}var Il=.25,Ln=a=>Math.round(a*1e3)/1e3;function Bo(a,t,e,n,o){let i=a.rooms.find(s=>s.points.length>=3&&C([t,e],s.points));return!i||C([n,o],i.points)?[n,o]:C([n,e],i.points)?[n,e]:C([t,o],i.points)?[t,o]:[t,e]}function ke(a,t,e,n){let o=Math.hypot(n[0]-e[0],n[1]-e[1]);if(o<.01)return!1;let i=[(n[0]-e[0])/o,(n[1]-e[1])/o],s=l=>Math.abs(-(l[0]-e[0])*i[1]+(l[1]-e[1])*i[0]),r=l=>(l[0]-e[0])*i[0]+(l[1]-e[1])*i[1];return a.rooms.some(l=>l.id!==t&&l.points.some((c,d)=>{let p=l.points[(d+1)%l.points.length];return s(c)>.02||s(p)>.02?!1:Math.min(o,Math.max(r(c),r(p)))-Math.max(0,Math.min(r(c),r(p)))>.05}))}function qo(a,t,e,n,o,i=.05){let s=a.rooms.find(h=>h.points.length>=3&&C([t.x,t.z],h.points));if(!s)return[e,n];let r=s.points,l=nt(r)>=0?1:-1,c=Et({...t}),d=e,p=n;for(let h=0;h<2;h++){let u=Et({...t,x:d,z:p});for(let f=0;f<r.length;f++){let m=r[f],g=r[(f+1)%r.length],_=Math.hypot(g[0]-m[0],g[1]-m[1]);if(_<.05)continue;let v=[(g[0]-m[0])/_,(g[1]-m[1])/_],$=[-v[1]*l,v[0]*l],k=ke(a,s.id,m,g)?o/2:0,x=0;u.forEach((A,P)=>{let w=(A[0]-m[0])*v[0]+(A[1]-m[1])*v[1];if(w<-.01||w>_+.01)return;let z=(A[0]-m[0])*$[0]+(A[1]-m[1])*$[1]-k,S=c[P];(S[0]-m[0])*$[0]+(S[1]-m[1])*$[1]-k<-i||z<x&&(x=z)}),x<-1e-4&&(d-=$[0]*x,p-=$[1]*x)}}return[Ln(d),Ln(p)]}function Je(a,t,e,n=Il){let o=a.rooms.find(c=>c.points.length>=3&&C([t.x,t.z],c.points));if(!o)return null;let i=o.points,s=nt(i)>=0?1:-1,r=e/2,l=null;for(let c=0;c<i.length;c++){let d=i[c],p=i[(c+1)%i.length],h=Math.hypot(p[0]-d[0],p[1]-d[1]);if(h<.3)continue;let u=[(p[0]-d[0])/h,(p[1]-d[1])/h],f=[-u[1]*s,u[0]*s],m=(t.x-d[0])*u[0]+(t.z-d[1])*u[1];if(m<0||m>h)continue;let _=a.rooms.some(w=>w.id!==o.id&&w.points.some((z,S)=>{let I=w.points[(S+1)%w.points.length],L=Math.abs((z[0]-d[0])*f[0]+(z[1]-d[1])*f[1]),O=Math.abs((I[0]-d[0])*f[0]+(I[1]-d[1])*f[1]);return L<.02&&O<.02}))?r:0,v=(t.x-d[0])*f[0]+(t.z-d[1])*f[1]-_,$=Math.atan2(-f[0],f[1])*180/Math.PI,k=w=>Math.abs((t.rotation-w+540)%360-180),A=[{rotation:$,extent:t.d/2},{rotation:$+90,extent:t.w/2},{rotation:$-90,extent:t.w/2}].reduce((w,z)=>k(z.rotation)<k(w.rotation)?z:w);if(k(A.rotation)>50)continue;let P=v-A.extent;Math.abs(P)>n||l&&Math.abs(P)>=Math.abs(l.gap)||(l={x:Ln(t.x-f[0]*P),z:Ln(t.z-f[1]*P),rotation:(Math.round(A.rotation)%360+360)%360,gap:P})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Me(a,t){let e=a.points,n=e[t],o=e[(t+1)%e.length],i=Math.hypot(o[0]-n[0],o[1]-n[1])||1,s=[(o[0]-n[0])/i,(o[1]-n[1])/i],r=[-s[1],s[0]],l=[(n[0]+o[0])/2,(n[1]+o[1])/2];C([l[0]+r[0]*.02,l[1]+r[1]*.02],e)||(r=[-r[0],-r[1]]);let c=[r[1],-r[0]];return{a:n,b:o,u:s,n:r,length:i,rightward:s[0]*c[0]+s[1]*c[1]>0}}function st(a,t){let e=t[0]-a.a[0],n=t[1]-a.a[1];return{s:e*a.u[0]+n*a.u[1],d:e*a.n[0]+n*a.n[1]}}function Ut(a,t,e){return[a.a[0]+a.u[0]*t+a.n[0]*e,a.a[1]+a.u[1]*t+a.n[1]*e]}var Fl=.45;function Uo(a,t){let e=[];for(let n of t.openings){if(n.wall)continue;let o=t.rooms.find(r=>r.id===n.room_id);if(!o||n.edge>=o.points.length)continue;let{s:i,d:s}=st(a,qt(o,n.edge,n.offset));Math.abs(s)>.4||i<-.05||i>a.length+.05||e.push(Rl(n,i))}return e}function Rl(a,t){return{kind:"opening",id:a.id,s0:t-a.width/2,s1:t+a.width/2,y0:a.sill,y1:a.sill+a.height,d:0}}function On(a,t,e){let n=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let i=C([o.x,o.z],e.points),s=Et(o).map(h=>st(a,h)),r=Math.min(...s.map(h=>h.d)),l=Math.min(...s.map(h=>h.s)),c=Math.max(...s.map(h=>h.s)),d=st(a,[o.x,o.z]);if(!i&&d.d<=0||d.d<=0||r>Fl||r<-.3||c<.02||l>a.length-.02)continue;let p=bt(t,o);n.push({kind:"furniture",id:o.id,s0:l,s1:c,y0:p,y1:p+o.h,d:r})}return n}function gr(a,t,e){let n=o=>Math.round(o*1e3)/1e3;return{x:n(t.x+a.u[0]*e),z:n(t.z+a.u[1]*e)}}var Ko=.3;function ft(a,t){let e=a.from?t(a.from):null,n=a.to?t(a.to):null,o=a.height??Ko,i=[];if(a.heights)e&&i.push([e.x,e.y,e.z]),a.points.forEach(([s,r],l)=>i.push([s,a.heights?.[l]??o,r])),n&&i.push([n.x,n.y,n.z]);else{if(!e||!n)return[];i.push([e.x,e.y,e.z],[e.x,o,e.z]);for(let[s,r]of a.points)i.push([s,o,r]);i.push([n.x,o,n.z],[n.x,n.y,n.z])}return i.filter((s,r)=>r===0||Vn(s,i[r-1])>.001)}function Vn(a,t){return Math.hypot(t[0]-a[0],t[1]-a[1],t[2]-a[2])}function Go(a){let t=0;for(let e=1;e<a.length;e++)t+=Vn(a[e-1],a[e]);return t}function _r(a,t){if(a.length<2)return null;let e=Math.max(0,t);for(let n=1;n<a.length;n++){let[o,i]=[a[n-1],a[n]],s=Vn(o,i);if(!(s<1e-6)){if(e<=s||n===a.length-1){let r=Math.min(1,e/s),l=[(i[0]-o[0])/s,(i[1]-o[1])/s,(i[2]-o[2])/s];return{p:[o[0]+(i[0]-o[0])*r,o[1]+(i[1]-o[1])*r,o[2]+(i[2]-o[2])*r],dir:l,seg:n-1}}e-=s}}return null}function Se(a,t){let e=null,n=0;for(let o=1;o<a.length;o++){let[i,s]=[a[o-1],a[o]],r=[s[0]-i[0],s[1]-i[1],s[2]-i[2]],l=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],c=l>0?Math.max(0,Math.min(1,((t[0]-i[0])*r[0]+(t[1]-i[1])*r[1]+(t[2]-i[2])*r[2])/l)):0,d=[i[0]+r[0]*c,i[1]+r[1]*c,i[2]+r[2]*c],p=Vn(d,t);(!e||p<e.d)&&(e={at:n+Math.sqrt(l)*c,d:p,seg:o-1,p:d}),n+=Math.sqrt(l)}return e}function Kt(a,t,e,n){let[o,i]=Ut(a,t,n);return[o,e,i]}function br(a,t,e,n){let o=Ut(a,0,t),i=Ut(e,0,n),s=a.u[0]*-e.u[1]-a.u[1]*-e.u[0];if(Math.abs(s)<1e-6)return null;let r=i[0]-o[0],l=i[1]-o[1],c=(r*-e.u[1]-l*-e.u[0])/s;return[o[0]+a.u[0]*c,o[1]+a.u[1]*c]}var vr=["top6","side6","four"];function Gt(a){return a==="pool_pump"?["suction","pressure"]:a==="pool_filter"?["pump","return","waste"]:a==="pool_heat_pump"?["in","out"]:[]}function Pe(a){return a==="wall"||a==="floor"?["inside","outside"]:["in","out1","out2"]}function X(a){let[t="",e="",n]=a.split(":");return{kind:t,id:e,port:n||null}}function Vt(a){let{kind:t,id:e}=X(a);return t&&e?`${t}:${e}`:a}function Ll(a,t){let{w:e,d:n,h:o}=a;if(a.type==="pool_pump")return t==="suction"?[e*.5,o*.55,0]:t==="pressure"?[e*.05,o*.9,0]:null;if(a.type==="pool_filter"){let i=Math.min(e,n)/2;if(a.variant==="side6"){let l=i+.08;return t==="pump"?[l,o*.6,0]:t==="return"?[l+.06,o*.48,0]:t==="waste"?[l,o*.36,0]:null}let s=o*.89,r=i*.45+.04;return t==="pump"?[-r,s,0]:t==="return"?[r,s,0]:t==="waste"?[0,s,-r]:null}return a.type==="pool_heat_pump"?t==="in"?[e/2+.04,o*.25,-n*.2]:t==="out"?[e/2+.04,o*.45,-n*.2]:null:null}function yr(a,t){let e=Ll(a,t);if(!e)return null;let n=a.rotation*Math.PI/180,[o,i]=[Math.cos(n),Math.sin(n)];return{x:a.x+e[0]*o-e[2]*i,y:e[1],z:a.z+e[0]*i+e[2]*o}}function Xo(a,t){if(t==="outside"){if(a.kind==="floor")return{x:a.x,y:a.y-.3,z:a.z};if(a.kind==="wall"){let e=(a.depth??.3)+.05;return{x:a.x-(a.nx??0)*e,y:a.y,z:a.z-(a.nz??0)*e}}}return{x:a.x,y:a.y,z:a.z}}function $r(a){return a==="pressure"||a==="return"||a==="waste"||a==="out"?"source":a==="suction"||a==="pump"||a==="in"?"sink":null}function xr(a){return a==="skimmer"||a==="drain"?"source":"sink"}function tt(a,t,e){let n=e.pool??{},o=ks(t,e);return i=>{let{kind:s,id:r,port:l}=X(i);if(s==="port"){let c=n.ports?.find(p=>p.id===r);if(!c)return null;let d=c.kind==="skimmer"?o:c.kind==="drain"?o-1.2:c.kind==="inlet"?o-.3:.02;return{x:c.x,z:c.z,y:d}}if(s==="joint"){let c=n.joints?.find(d=>d.id===r);return c?Xo(c,l):null}if(s!=="dev")return null;for(let c of a.floors){let d=c.furniture.find(u=>u.id===r);if(!d||!wt.includes(d.type))continue;let p=l?yr(d,l):null;if(p)return{...p,y:p.y+bt(c,d)};let h=d.type==="pool_filter"?d.h*.88:d.type==="pool_dosing"?.95:d.type==="pool_valve"?Is:d.type==="pool_pump"?.2:.3;return{x:d.x,z:d.z,y:h+bt(c,d)}}return null}}function mt(a,t){if(a.heights)return a;let e=a.height??Ko,n=t(a.from),o=t(a.to),i=[...n?[[n.x,n.z]]:[],...a.points,...o?[[o.x,o.z]]:[]];return{...a,points:i,heights:i.map(()=>e)}}var J=a=>Math.round(a*1e3)/1e3;function Jo(a,t,e,n,o){let i=mt(a,t),s=ft(i,t),r=Se(s,e);if(!r)return null;let l={id:n,x:J(r.p[0]),z:J(r.p[2]),y:J(r.p[1])},c=Ye(i,t),d=Math.max(0,Math.min(i.points.length,r.seg+1-c)),p=i.heights??[],h=i.fittings??[],u={...i,to:`joint:${n}:in`,points:i.points.slice(0,d),heights:p.slice(0,d),fittings:h.filter(m=>m.at<=r.at)},f={...i,id:o,from:`joint:${n}:out1`,points:i.points.slice(d),heights:p.slice(d),fittings:h.filter(m=>m.at>r.at).map(m=>({...m,at:J(m.at-r.at)}))};return{joint:l,first:u,second:f}}function Ye(a,t){return a.from&&t(a.from)?1:0}var Ol=1.6;function kr(a,t,e){let n=[],o=i=>{let s=st(a,[i[0],i[2]]);return s.d>-.35&&s.d<Ol&&s.s>-.3&&s.s<a.length+.3?s:null};for(let i of t){let s=mt(i,e),r=ft(s,e);if(r.length<2)continue;let l={id:i.id,pieces:[],points:[],fittings:[],ends:[]};for(let p=1;p<r.length;p++){let h=o(r[p-1]),u=o(r[p]);h&&u&&l.pieces.push({k:p-1,s0:h.s,y0:r[p-1][1],d0:h.d,s1:u.s,y1:r[p][1],d1:u.d})}if(!l.pieces.length)continue;let c=Ye(s,e);s.points.forEach((p,h)=>{let u=r[h+c],f=u&&o(u);f&&l.points.push({i:h,s:f.s,y:u[1]})});let d=Go(r);for(let p of i.fittings??[]){let h=Math.min(d,p.at),u=_r(r,h)?.p,f=u&&o(u);u&&f&&l.fittings.push({id:p.id,kind:p.kind,open:p.open!==!1,s:f.s,y:u[1]})}for(let[p,h]of[["from",r[0]],["to",r[r.length-1]]]){let u=(p==="from"?!i.from:!i.to)?o(h):null;u&&l.ends.push({end:p,s:u.s,y:h[1]})}n.push(l)}return n}var Mr=-.3;function Yo(a,t,e,n,o){let i=[],s=[],r=g=>t(g),l=[],c=a.from,d=[];for(let g of a.vias){if(g.kind!=="hole"){d.push(g.kind);continue}let _=e.find(A=>A.id===g.joint),v=r(c);if(!_||!v)continue;let $=r(`joint:${_.id}:inside`),k=r(`joint:${_.id}:outside`),x=g.dir?g.dir==="out":Math.hypot(v.x-$.x,v.z-$.z)<=Math.hypot(v.x-k.x,v.z-k.z);l.push({a:c,b:`joint:${_.id}:${x?"inside":"outside"}`,fits:d}),d=[],c=`joint:${_.id}:${x?"outside":"inside"}`}let p=a.to;if(p.length>1){let g=r(c),_=p.map(r).filter(v=>!!v);if(g&&_.length===p.length){let v=_.reduce((w,z)=>w+z.x,0)/_.length,$=_.reduce((w,z)=>w+z.z,0)/_.length,k=Math.hypot(g.x-v,g.z-$)||1,x=Math.min(1,k/2)/k,A=g.y<0||_.some(w=>w.y<0),P={id:o("joint"),kind:"tee",x:J(v+(g.x-v)*x),z:J($+(g.z-$)*x),y:A?Mr:J(g.y)};s.push(P),l.push({a:c,b:`joint:${P.id}:in`,fits:d}),d=[],p.forEach((w,z)=>l.push({a:`joint:${P.id}:out${z+1}`,b:w,fits:[]})),p=[]}}p.length&&l.push({a:c,b:p[0],fits:d});let h=g=>{let{kind:_,id:v,port:$}=X(g),k=_==="joint"?s.find(x=>x.id===v):void 0;return k?Xo(k,$):r(g)},u=g=>n(g)==="source",f=g=>n(g)==="sink",m=a.to.some(u)&&!u(a.from)||f(a.from)&&!a.to.some(f);for(let g of l){let _=h(g.a),v=h(g.b);if(!_||!v)continue;let $=Vl(_,v,wr(g.a,e),wr(g.b,e)),k={id:o("pipe"),from:g.a,to:g.b,floor_id:a.floorId,points:$.map(A=>[A[0],A[2]]),heights:$.map(A=>A[1])},x=Go(ft(k,h));k.fittings=g.fits.map((A,P)=>({id:o("fit"),kind:A,at:J(Math.min(x/2,.4+P*.25)),...A==="valve"?{open:!0}:{}})),m&&(k={...k,from:k.to,to:k.from,points:[...k.points].reverse(),heights:[...k.heights??[]].reverse(),fittings:k.fittings?.map(A=>({...A,at:J(Math.max(0,x-A.at))}))}),i.push(k)}return{pipes:i,joints:s}}function wr(a,t){let{kind:e,id:n,port:o}=X(a),i=e==="joint"&&o==="outside"?t.find(s=>s.id===n):void 0;return i?.kind==="wall"?[-(i.nx??0),-(i.nz??0)]:null}function Vl(a,t,e=null,n=null){let o=a.y<0||t.y<0?Mr:J(Math.max(a.y,t.y)),i=[],[s,r]=[a.x,a.z];e&&([s,r]=[J(s+e[0]*.5),J(r+e[1]*.5)],i.push([s,J(a.y),r]));let[l,c]=[t.x,t.z],d=[];return n&&([l,c]=[J(l+n[0]*.5),J(c+n[1]*.5)],d.push([l,J(t.y),c])),i.push([J(s),o,J(r)]),Math.abs(l-s)>.01&&i.push([J(l),o,J(r)]),Math.abs(c-r)>.01&&i.push([J(l),o,J(c)]),i.push(...d),i.filter((p,h)=>h===0||Math.hypot(p[0]-i[h-1][0],p[1]-i[h-1][1],p[2]-i[h-1][2])>.001)}function Sr(a,t,e){let n=i=>{let{kind:s,id:r,port:l}=X(i),c=s==="joint"&&(l==="inside"||l==="outside")?t.find(d=>d.id===r):void 0;return c&&(c.kind==="wall"||c.kind==="floor")?{id:r,port:l}:null},o=[];for(let i of a.filter(s=>s.from===e||s.to===e)){let s={start:e,other:"",pipes:[],holes:[],fittings:[]},r=i,l=e,c=new Set;for(;r&&!c.has(r.id);){c.add(r.id),s.pipes.push(r.id),s.fittings.push(...(r.fittings??[]).map(u=>u.kind));let d=r.from===l?r.to:r.from,p=d?n(d):null;if(!p){s.other=d;break}s.holes.push({joint:p.id,dir:p.port==="inside"?"out":"in"}),l=`joint:${p.id}:${p.port==="inside"?"outside":"inside"}`;let h=r;r=a.find(u=>u!==h&&(u.from===l||u.to===l)),r||(s.other=l)}o.push(s)}return o}function Tl(a,t,e){let n=e[0]-t[0],o=e[1]-t[1],i=n*n+o*o,s=i?Math.max(0,Math.min(1,((a[0]-t[0])*n+(a[1]-t[1])*o)/i)):0;return Math.hypot(a[0]-t[0]-n*s,a[1]-t[1]-o*s)}function Pr(a,t,e=.03){return a.every(n=>C(n,t)||t.some((o,i)=>Tl(n,o,t[(i+1)%t.length])<=e))}function Er(a,t){return t&&a.states[t]?t:Object.keys(a.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}function Ar(a,t){let e=a.states[t];if(!e)return!1;let n=String(e.attributes.device_class??"");return t.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(t):t.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(e.attributes.unit_of_measurement??"")):!1}var Tn=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool"],jl=["pool"];function Cl(){try{return localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function yt(a){return!jl.includes(a)||Cl()}var zr=["fridge_smart"];function Ir(a){return Tn.includes(a)||zr.includes(a)}var Fr=a=>(a??navigator.language).toLowerCase().startsWith("de");function Tt(a){return Fr(a)?"https://mastershort.de/neonplan3d/?lang=de":"https://mastershort.de/en/neonplan3d/?lang=en"}var Dl={camera_cockpit:{de:"pro-erweiterungen/#61-kamera-cockpit",en:"pro-add-ons/#61-camera-cockpit"},weather:{de:"pro-erweiterungen/#62-wetter-drau%C3%9Fen",en:"pro-add-ons/#62-weather-outside"},screens:{de:"pro-erweiterungen/#63-bildschirme-live",en:"pro-add-ons/#63-live-screens"},energy_pro:{de:"pro-erweiterungen/#64-energie-pro",en:"pro-add-ons/#64-energy-pro"},sound:{de:"pro-erweiterungen/#65-klang-kino",en:"pro-add-ons/#65-sound-cinema"},auto_pro:{de:"pro-erweiterungen/#66-auto-pro",en:"pro-add-ons/#66-auto-pro"},time_travel:{de:"pro-erweiterungen/#67-zeitreise",en:"pro-add-ons/#67-time-travel"},pool:{de:"pro-erweiterungen/#68-pool-pro",en:"pro-add-ons/#68-pool-pro"},extensions:{de:"erweiterungen-shop-moebel-packs/",en:"extensions-shop-furniture-packs/"}};function le(a,t){let e=Fr(a),n=e?"https://mastershort.de/neonplan3d/anleitung/":"https://mastershort.de/en/neonplan3d/manual/",o=t?Dl[t]:void 0,i=o?e?o.de:o.en:"",[s,r]=i.split("#");return`${n}${s}?lang=${e?"de":"en"}${r?`#${r}`:""}`}function Rr(){return new Set([...Tn,...zr].filter(yt))}function rt(a){return yt(a)}var Hl=["time_travel","pool"];function Xt(a){return Hl.includes(a)}var Qo="https://discord.gg/SSdVVFsev7";function jn(a){return(a??navigator.language).toLowerCase().startsWith("de")?"https://mastershort.de/neonplan3d/unterstuetzer/?lang=de":"https://mastershort.de/en/neonplan3d/supporters/?lang=en"}var Nl=/(pool|schwimm|piscine|piscina|zwembad|basen|bazen)/;function Lr(a,t){let e=t??{},n=Object.keys(a.states),o=p=>`${p} ${a.states[p]?.attributes.friendly_name??""}`.toLowerCase().replace(/[\s-]+/g,"_"),i=p=>String(a.states[p]?.attributes.device_class??""),s=p=>String(a.states[p]?.attributes.unit_of_measurement??""),r=n.filter(p=>Nl.test(o(p))),l=(p,h)=>p.find(h)??null,c=(p,h)=>{let u=e[p];return u==="none"?null:u??h()},d=p=>p.split(".")[0];return{temperature:c("temperature",()=>l(r,p=>d(p)==="sensor"&&(i(p)==="temperature"||/°[CF]/.test(s(p)))&&/(wasser|water|eau|agua|acqua)/.test(o(p)))??l(r,p=>d(p)==="sensor"&&(i(p)==="temperature"||/°[CF]/.test(s(p))))),heater:c("heater",()=>l(r,p=>d(p)==="climate"||d(p)==="water_heater")??l(r,p=>/^(switch|input_boolean)$/.test(d(p))&&/(w(ae|ä)rmepumpe|heat|heiz|chauff)/.test(o(p)))),pump:c("pump",()=>l(r,p=>/^(switch|fan|input_boolean)$/.test(d(p))&&/(pump|pumpe|filter|pompe|bomba)/.test(o(p)))??l(r,p=>d(p)==="binary_sensor"&&/(pump|pumpe|filter)/.test(o(p)))),light:c("light",()=>l(r,p=>d(p)==="light")),ph:c("ph",()=>{let p=h=>d(h)==="sensor"&&(i(h)==="ph"||s(h).toLowerCase()==="ph"||/(^|[._])ph($|_)/.test(o(h)));return l(r,p)??l(n,p)}),chlorine:c("chlorine",()=>l(r,h=>d(h)==="sensor"&&(/(orp|redox|chlor|chlore|cloro)/.test(o(h))||s(h)==="mV"))??l(n,h=>d(h)==="sensor"&&/(orp|redox|chlor)/.test(o(h)))),cover:c("cover",()=>l(r,p=>d(p)==="cover"))}}function Cn(a,t){let e=a[0]??t,n=1/0;for(let o=0;o<a.length;o++){let i=a[o],s=a[(o+1)%a.length],r=s[0]-i[0],l=s[1]-i[1],c=r*r+l*l,d=c>0?Math.max(0,Math.min(1,((t[0]-i[0])*r+(t[1]-i[1])*l)/c)):0,p=[i[0]+r*d,i[1]+l*d],h=Math.hypot(p[0]-t[0],p[1]-t[1]);h<n&&([e,n]=[p,h])}return e}var Bl={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de NeonPlan 3D ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra NeonPlan 3D {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de NeonPlan 3D instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de NeonPlan 3D ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de NeonPlan 3D.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"NeonPlan 3D",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace.",as_furniture_pick:"Elegir mueble \u2026",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de NeonPlan 3D.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_title:"Conexi\xF3n con la tienda",license_instance:"Id de instalaci\xF3n",license_copy:"Copiar",license_copied:"Id copiado",license_activate:"Activar",license_activated:"Conectado: tus packs aparecen abajo.",license_active:"Conectado como {name} (clave {key})",license_checked:"\xFAltima comprobaci\xF3n {time}",license_refresh:"Comprobar ahora",license_refreshed:"Comprobado.",license_remove:"Desconectar",license_remove_confirm:"\xBFDesconectar de la tienda? Los packs instalados se quedan; solo dejan de llegar las actualizaciones por s\xED solas.",license_installed:"instalado \xB7 v{release}",license_update_available:"actualizaci\xF3n a v{release} disponible",license_not_installed:"a\xFAn no instalado",license_install:"Instalar",license_update:"Actualizar",license_none:"Todav\xEDa no hay packs en la cuenta.",license_hint:"La clave de licencia est\xE1 en tu pedido y en tu cuenta en mastershort.de. Introducida una vez, los packs comprados aparecen aqu\xED, se firman para esta instalaci\xF3n y se actualizan solos (se comprueba una vez al d\xEDa). Todo lo instalado sigue funcionando sin la conexi\xF3n.",license_shop:"M\xE1s packs en la tienda",license_error_invalid_key:"La tienda no conoce esta clave. Tiene la forma NP-XXXX-XXXX-XXXX-XXXX.",license_error_activation_limit:"Esta clave ya est\xE1 vinculada al n\xFAmero permitido de instalaciones.",license_error_shop_unreachable:"La tienda no est\xE1 disponible ahora mismo. Los packs instalados siguen funcionando.",license_error_not_owned:"Este pack no est\xE1 en esta cuenta.",license_error_no_key:"Introduce primero la clave de licencia.",license_error_wrong_instance:"La tienda firm\xF3 el pack para otra instalaci\xF3n.",license_error_rate_limit:"La tienda est\xE1 muy solicitada ahora mismo. Int\xE9ntalo de nuevo en un minuto.",license_error_other:"No ha funcionado: {detail}",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de NeonPlan \u2013 actualiza NeonPlan 3D (HACS) y recarga la p\xE1gina.",pro_title:"NeonPlan Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",offers_title:"Novedades en la tienda",offers_new:"NUEVO",offers_loyalty:"Tu descuento de fidelidad: {percent} % en cada pack y extensi\xF3n Pro adicional",offers_kind_pack:"Pack de muebles",offers_kind_pro:"Extensi\xF3n Pro",offers_kind_bundle:"Lote",offers_dot:"Novedades en la tienda",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para NeonPlan 3D. Instala aqu\xED lo que has comprado con tu clave de licencia; se actualiza solo y funciona tambi\xE9n sin la conexi\xF3n.",ext_shop:"Abrir la tienda",ext_pro:"Extensiones Pro",ext_active:"activa",ext_get:"Ver en la tienda",supporter_title:"Supporter \xB7 Discord",supporter_intro:"\xA1Gracias por apoyar NeonPlan 3D! Este c\xF3digo desbloquea el rol \u{1F499} Supporter en Discord: ver\xE1s el canal #beta-feedback y probar\xE1s las nuevas extensiones primero.",supporter_open:"Abrir Discord",supporter_how:"C\xF3mo: abre Discord, escribe /supporter {code} en cualquier canal y env\xEDalo. El rol llega al instante.",beta_yours:"Beta \xB7 para ti como supporter",beta_supporters:"Beta \xB7 primero para supporters",beta_yours_hint:"Como eres supporter, puedes probar esta extensi\xF3n antes. Cu\xE9ntanos en Discord (canal #beta-feedback) qu\xE9 funciona y qu\xE9 no.",beta_supporters_hint:"Esta extensi\xF3n a\xFAn est\xE1 en beta y primero solo viene con el Supporter-Pass. Cuando est\xE9 terminada, todos podr\xE1n conseguirla en la tienda.",beta_feedback:"Opini\xF3n en Discord",beta_become:"Hazte supporter",beta_bar:"Beta \u2013 como supporter la pruebas primero. Opiniones en Discord (#beta-feedback).",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles, la conexi\xF3n con la tienda y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: NeonPlan encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro. Tras la compra aparece en Extensiones \u203A Conexi\xF3n con la tienda y se instala desde ah\xED.",pro_shop:"Ir a la tienda",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de NeonPlan 3D. Actualiza primero (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',license_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de NeonPlan 3D. Actualiza primero (HACS \u203A NeonPlan 3D \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",chk_pro_get:"Desbloquear Energ\xEDa Pro (cables, m\xF3dulos, holograma)",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",pro_unlock:"Desbloquear",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas como issue en GitHub y de los deseos como discusi\xF3n: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",help_discord:"Comunidad en Discord",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en NeonPlan, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de NeonPlan 3D \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant."};function zt(a,t,e={}){let n=Bl[t]??t;for(let[o,i]of Object.entries(e))n=n.replace(`{${o}}`,String(i));return n}function gt(a,t,e=2){return t.toLocaleString("es",{maximumFractionDigits:e})}var ql={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Qe(a){return ql[a]}function Or(a,t){let e=`${t} ${String(a.states[t]?.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(e)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(e)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(e)?"pet":"motion"}function Vr(a,t){let e=a.entities?.[t]?.device_id;return e?Object.values(a.entities??{}).filter(n=>n.device_id===e&&n.entity_id.startsWith("binary_sensor.")).map(n=>n.entity_id).filter(n=>["motion","occupancy","presence"].includes(String(a.states[n]?.attributes.device_class))):[]}var jt=Math.PI/180;function Mt(a){let t=Math.min(a.x0,a.x1),e=Math.max(a.x0,a.x1),n=Math.min(a.z0,a.z1),o=Math.max(a.z0,a.z1);return a.axis==="x"?{u0:t,u1:e,w:o-n,at:(i,s)=>[i,a.flip?o-s:n+s]}:{u0:n,u1:o,w:e-t,at:(i,s)=>[a.flip?e-s:t+s,i]}}function Jt(a){let t=Mt(a).w,e=a.eave_a,n=a.eave_b,o=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*jt),i=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*jt);if(a.shape==="flat"||a.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(a.shape==="pent")return{vr:t,rh:e+t*o,y:l=>e+l*o};if(a.shape==="mansard"){let l=Hr(t,e,n,o,i);return{vr:l.vr,rh:l.rh,y:l.y}}let s=o+i>1e-6?Math.min(t,Math.max(0,(n-e+t*i)/(o+i))):t/2,r=e+s*o;return{vr:s,rh:r,y:l=>l<=s?e+l*o:n+(t-l)*i}}var Ul=.14;function jr(a,t){return!a.open&&Math.min(a.base,a.eave_a,a.eave_b)<t-.05}function Cr(a,t,e){let n=[];for(let o of a.settings.roof.sections??[]){if(o.open||o.shape==="flat"||o.shape==="parapet"||o.shape==="mansard")continue;let i=Mt(o),s=Jt(o),r=t+e+Ul,l=[],c=Math.tan(Math.min(80,Math.max(0,o.pitch_a))*jt),d=Math.tan(Math.min(80,Math.max(0,o.pitch_b))*jt);c>1e-6&&l.push((r-o.eave_a)/c),o.shape==="gable"&&d>1e-6&&l.push(i.w-(r-o.eave_b)/d);for(let p of l)p<=.01||p>=i.w-.01||o.shape==="gable"&&Math.abs(s.y(p)-r)>1e-6||n.push([i.at(i.u0,p),i.at(i.u1,p)])}return n}function Kl(a,t){let e=a.length;if(e<3||Math.abs(t)<1e-9)return a.map(i=>[i[0],i[1]]);let n=pt(a)>=0?1:-1,o=[];for(let i=0;i<e;i++){let s=a[(i+e-1)%e],r=a[i],l=a[(i+1)%e],c=Tr([r[0]-s[0],r[1]-s[1]]),d=Tr([l[0]-r[0],l[1]-r[1]]),p=[c[1]*n,-c[0]*n],h=[d[1]*n,-d[0]*n],u=p[0]+h[0],f=p[1]+h[1],m=Math.hypot(u,f);if(m<1e-6){o.push([r[0]+p[0]*t,r[1]+p[1]*t]);continue}let g=(u*p[0]+f*p[1])/m,_=Math.min(4,1/Math.max(.25,g));o.push([r[0]+u/m*t*_,r[1]+f/m*t*_])}return o}function Tr(a){let t=Math.hypot(a[0],a[1])||1;return[a[0]/t,a[1]/t]}function Zo(a){let t=a.map(n=>n[0]),e=a.map(n=>n[1]);return{x0:Math.min(...t),z0:Math.min(...e),x1:Math.max(...t),z1:Math.max(...e)}}function Dr(a,t,e,n){let o=lt(a,{exterior:e,interior:n},t).walls.filter(p=>p.exterior&&!p.free);if(!o.length)return null;let i=p=>`${Math.round(p[0]*1e3)}:${Math.round(p[1]*1e3)}`,s=new Map,r=o.map(p=>({a:p.a,b:p.b}));for(let p of r)for(let h of[p.a,p.b])s.set(i(h),[...s.get(i(h))??[],p]);let l=new Set,c=null;for(let p of r){if(l.has(p))continue;l.add(p);let h=[p.a,p.b],u=p.b;for(;;){let f=(s.get(i(u))??[]).find(m=>!l.has(m));if(!f||(l.add(f),u=i(f.a)===i(u)?f.b:f.a,i(u)===i(h[0])))break;h.push(u)}h.length>=3&&i(u)===i(h[0])&&(!c||Math.abs(pt(h))>Math.abs(pt(c)))&&(c=h)}if(!c)return null;let d=[];for(let p=0;p<c.length;p++){let h=c[(p+c.length-1)%c.length],u=c[p],f=c[(p+1)%c.length],m=(u[0]-h[0])*(f[1]-u[1])-(u[1]-h[1])*(f[0]-u[0]);Math.abs(m)>1e-6&&d.push(u)}return d.length>=3?Kl(d,e):null}var Ze=Math.tan(30*jt);function Hr(a,t,e,n,o){let i=Math.min(a*.3,n>1e-6?2.4/n:a*.3),s=Math.min(a*.3,o>1e-6?2.4/o:a*.3),r=t+i*n,l=e+s*o,c=Math.min(a-s,Math.max(i,(l-r+Ze*(a-s+i))/(2*Ze))),d=r+(c-i)*Ze;return{vla:i,vlb:s,yla:r,ylb:l,vr:c,rh:d,y:h=>h<=i?t+h*n:h<=c?r+(h-i)*Ze:h<=a-s?l+(a-s-h)*Ze:e+(a-h)*o}}function ti(a,t){let e=Mt(a),n=Jt(a),o=e.w,i=Math.max(0,t.a),s=Math.max(0,t.b),r=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(v,$)=>[v,$,n.y($)],d=c(r,-i),p=c(l,-i),h=c(l,o+s),u=c(r,o+s),f=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*jt),m=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*jt);if(a.shape==="pent"){let v=[d,p,h,u];return{faces:[v],rim:v,ridges:[[h,u]],gable:[[0,n.y(0)],[o,n.y(o)]]}}if(a.shape==="hip"||a.shape==="pyramid"){let v=a.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,o-n.vr)||o/2),$=[e.u0+v,n.vr,n.rh],k=[e.u1-v,n.vr,n.rh],x=a.shape==="pyramid"?[[d,p,$],[p,h,$],[h,u,$],[u,d,$]]:[[d,p,k,$],[$,k,h,u],[u,d,$],[p,h,k]],A=a.shape==="pyramid"?[[d,$],[u,$],[p,$],[h,$]]:[[$,k],[d,$],[u,$],[p,k],[h,k]];return{faces:x,rim:[d,p,h,u],ridges:A,gable:null}}if(a.shape==="halfhip"){let v=Math.min(n.y(0),n.y(o)),$=v+(n.rh-v)*.55,k=f>1e-6?Math.min(n.vr,($-a.eave_a)/f):n.vr,x=m>1e-6?Math.max(n.vr,o-($-a.eave_b)/m):n.vr,A=Math.min((e.u1-e.u0)/2-.1,(n.rh-$)/Math.max(.2,f)),P=[e.u0+A,n.vr,n.rh],w=[e.u1-A,n.vr,n.rh],z=[r,k,$],S=[r,x,$],I=[l,k,$],L=[l,x,$];return{faces:[[d,p,I,w,P,z],[P,w,L,h,u,S],[S,z,P],[I,L,w]],rim:[d,p,I,L,h,u,S,z],ridges:[[P,w],[z,P],[S,P],[I,w],[L,w]],gable:[[0,n.y(0)],[k,$],[x,$],[o,n.y(o)]]}}if(a.shape==="mansard"){let v=Hr(o,a.eave_a,a.eave_b,f,m),$=[r,v.vla,v.yla],k=[l,v.vla,v.yla],x=[r,o-v.vlb,v.ylb],A=[l,o-v.vlb,v.ylb],P=[r,v.vr,v.rh],w=[l,v.vr,v.rh];return{faces:[[d,p,k,$],[$,k,w,P],[P,w,A,x],[x,A,h,u]],rim:[d,p,k,w,A,h,u,x,P,$],ridges:[[P,w],[$,k],[x,A]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[o-v.vlb,v.ylb],[o,n.y(o)]]}}let g=[r,n.vr,n.rh],_=[l,n.vr,n.rh];return{faces:[[d,p,_,g],[g,_,h,u]],rim:[d,p,_,h,u,g],ridges:[[g,_]],gable:[[0,n.y(0)],[n.vr,n.rh],[o,n.y(o)]]}}function Gl(a,t,e){let n=null;for(let o of a.faces){if(!C([t,e],o.map(v=>[v[0],v[1]])))continue;let[i,s]=o,r=o.slice(2).find(v=>Math.abs((s[0]-i[0])*(v[1]-i[1])-(s[1]-i[1])*(v[0]-i[0]))>1e-9);if(!r)continue;let l=s[0]-i[0],c=s[2]-i[2],d=s[1]-i[1],p=r[0]-i[0],h=r[2]-i[2],u=r[1]-i[1],f=c*u-d*h,m=d*p-l*u,g=l*h-c*p;if(Math.abs(m)<1e-9)continue;let _=i[2]-(f*(t-i[0])+g*(e-i[1]))/m;n=n===null?_:Math.min(n,_)}return n}function Xl(a,t,e){let n=Math.min(a.x0,a.x1),o=Math.max(a.x0,a.x1),i=Math.min(a.z0,a.z1),s=Math.max(a.z0,a.z1);return a.axis==="x"?[t,a.flip?s-e:e-i]:[e,a.flip?o-t:t-n]}function Jl(a){return{x0:Math.min(a.x0,a.x1),x1:Math.max(a.x0,a.x1),z0:Math.min(a.z0,a.z1),z1:Math.max(a.z0,a.z1)}}function Wr(a,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,o=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),i=null;for(let s of a){if(s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||o(s)<o(t)*1.5)continue;let r=Jl(s);e<r.x0||e>r.x1||n<r.z0||n>r.z1||(!i||o(s)<o(i))&&(i=s)}return i}function Nr(a,t,e,n){let o=Mt(a),i=Jt(a),s=2,r=Math.max(o.u0+.3,Math.min(o.u1-s-.3,(n??(o.u0+o.u1)/2)-s/2)),l=t==="a"?a.eave_a:a.eave_b,c=t==="a"?a.pitch_a:a.pitch_b,d=l+1.4,p=s/2*Math.tan(35*jt),h=d+p,u=Math.max(.8,Math.min(o.w/2-.2,(h-l)/Math.max(.15,Math.tan(Math.min(80,c)*jt)))),f=t==="a"?0:o.w-u,m=t==="a"?u:o.w,g=o.at(r,f),_=o.at(r+s,m);return{id:e,x0:Math.round(Math.min(g[0],_[0])*100)/100,z0:Math.round(Math.min(g[1],_[1])*100)/100,x1:Math.round(Math.max(g[0],_[0])*100)/100,z1:Math.round(Math.max(g[1],_[1])*100)/100,shape:"gable",axis:a.axis==="x"?"z":"x",eave_a:Math.round(d*100)/100,eave_b:Math.round(d*100)/100,pitch_a:35,pitch_b:35,base:Math.round(i.y(t==="a"?0:o.w)*100)/100,overhang:.15,dormer:!0}}function Br(a,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Mt(t),n=Jt(t).rh,o=ti(a,{u0:0,u1:0,a:0,b:0}),i=Jt(a),s=f=>{let[m,g]=e.at(f,e.w/2),[_,v]=Xl(a,m,g);return Gl(o,_,v)??i.y(v)},r=s(e.u0)<=s(e.u1),l=r?e.u0:e.u1,c=r?e.u1:e.u0,d=r?1:-1,p=Math.abs(c-l),h=c;for(let f=.5;f<p;f+=.05)if(s(l+d*f)>=n-.02){h=l+d*f;break}if(Math.abs(h-c)<.05)return t;let u={...t};return t.axis==="x"?c===e.u1?u.x1=h:u.x0=h:c===e.u1?u.z1=h:u.z0=h,u}function qr(a,t,e){let n=Mt(t),o=a.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>t.base+.05)),i=c=>c.some(d=>o.some(p=>C(d,p.points))),s=.35,r=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:i(r.map(c=>n.at(c,-s)))?0:e,b:i(r.map(c=>n.at(c,n.w+s)))?0:e,u0:i(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:i(l.map(c=>n.at(n.u1+s,c)))?0:e}}function Ur(a,t,e,n,o){let i=[];for(let r of[.2,.5,.8])for(let l of[.2,.5,.8])i.push([t+(n-t)*r,e+(o-e)*l]);let s=a.floors.filter(r=>r.rooms.some(l=>l.points.length>=3&&i.some(c=>C(c,l.points)))).map(r=>r.elevation+r.height);return s.length?Math.max(...s):null}function Kr(a,t){let e=a.floors.filter(n=>n.rooms.length>0).sort((n,o)=>n.elevation-o.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function Dn(a){return Jt(a).rh}function Gr(a,t=e=>`roof_${e+1}`){let e=a.settings.roof?.pitch??35,n=a.settings.wall_exterior,o=a.floors.filter(l=>l.rooms.some(c=>c.points.length>=3)).sort((l,c)=>c.elevation-l.elevation),i=[],s=[],r=l=>Math.round(l*1e3)/1e3;for(let l of o){let c=l.rooms.filter($=>$.points.length>=3),d=[...new Set(c.flatMap($=>$.points.map(k=>r(k[0]))))].sort(($,k)=>$-k),p=[...new Set(c.flatMap($=>$.points.map(k=>r(k[1]))))].sort(($,k)=>$-k),h=d.length-1,u=p.length-1,f=($,k)=>$.some(x=>C(k,x.points)),m=[];for(let $=0;$<u;$++){m.push([]);for(let k=0;k<h;k++){let x=[(d[k]+d[k+1])/2,(p[$]+p[$+1])/2];m[$].push(f(c,x)&&!f(s,x))}}let g=m.map($=>$.map(()=>!1)),_=($,k)=>m[k][$]&&!g[k][$],v=l.elevation+l.height;for(let $=0;$<u;$++)for(let k=0;k<h;k++){if(!_(k,$))continue;let x=k;for(;x+1<h&&_(x+1,$);)x++;let A=$;for(;A+1<u&&Array.from({length:x-k+1},(I,L)=>_(k+L,A+1)).every(Boolean);)A++;for(let I=$;I<=A;I++)for(let L=k;L<=x;L++)g[I][L]=!0;let P=d[k]-n,w=d[x+1]+n,z=p[$]-n,S=p[A+1]+n;Math.min(w-P,S-z)<.8||i.push({id:t(i.length),x0:r(P),z0:r(z),x1:r(w),z1:r(S),shape:"gable",axis:w-P>=S-z?"x":"z",eave_a:r(v),eave_b:r(v),pitch_a:e,pitch_b:e,base:r(v),overhang:null})}s.push(...c)}return i}var pe=Math.PI/180,Xr=1.13,ei=1.72,$t=.025,ce=.07,Jr=.25;function It(a,t){let e=[];for(let n of a.floors){if(t&&n.id!==t)continue;let{walls:o}=lt(n.rooms,{exterior:a.settings.wall_exterior,interior:a.settings.wall_interior},n.walls??[]);for(let i of o){if(!i.exterior&&!i.free)continue;let s=i.b[0]-i.a[0],r=i.b[1]-i.a[1],l=Math.hypot(s,r);if(l<.5)continue;let c=r/l,d=-s/l,p=Math.min(n.height,i.height??n.height),h=i.sources.find(m=>m.room_id===i.roomLeft)?.edge??null,u={floorId:n.id,room:i.roomLeft,edge:h,free:!!i.free},f=(m,g,_,v)=>e.push({key:m,section:null,side:"top",flat:!1,o:g,eu:_,es:[0,1,0],n:v,lu:l,ls:p,pitch:90,span:()=>[0,l],facing:[v[0],v[2]],wall:u});f(`wall:${n.id}:${i.id}`,[i.a[0]+c*i.right,n.elevation,i.a[1]+d*i.right],[s/l,0,r/l],[c,0,d]),i.free&&f(`wall:${n.id}:${i.id}:back`,[i.b[0]-c*i.left,n.elevation,i.b[1]-d*i.left],[-s/l,0,-r/l],[-c,0,-d])}}return e}var Qt="ground";function Yl(a){let t=[...a.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??a.floors[0]??null}function Yr(a,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],o=[-Math.sin(e),0,Math.cos(e)],i=Yl(a),s=n[0]*t.u+o[0]*t.v,r=n[2]*t.u+o[2]*t.v,l=i?i.elevation+(t.base!=null?t.base:xs(i,s,r)):t.base??0;return{key:Qt,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:o,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[o[0],o[2]],unbounded:!0}}function ut(a,t,e=Y(a)){return t.face===Qt?Yr(a,t):t.face.startsWith("wall:")?It(a,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function Qr(a,t,e){let n=It(a,e),o=a.settings.north??0,i=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-o;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},s=[...n].sort((l,c)=>i(c)-i(l))[0];if(!s)return null;let r={...Nn(s,t),portrait:!1,rows:1};return r.cols=Math.max(1,Math.floor((s.lu-.8+$t)/(ei+$t))),r.u=Math.round((s.lu-(r.cols*ei+(r.cols-1)*$t))/2*100)/100,r.v=Math.round(Math.max(0,s.ls-Xr-.3)*100)/100,r}function oi(a,t){let e=a.floors.flatMap(i=>i.rooms.flatMap(s=>s.points)),n=e.length?Math.max(...e.map(i=>i[0]))+3:0,o=e.length?Math.min(...e.map(i=>i[1])):0;return{id:t,face:Qt,u:Math.round(n*100)/100,v:Math.round(o*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(a.settings.north??0)||0,look:"black",entity:null}}function ii(a){return a.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Y(a){let t=a.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>Ql(v,qr(a,v,v.overhang??t.overhang)));let e=ii(a);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map($=>$[0])),o=e.rooms.flatMap(v=>v.points.map($=>$[1])),i=a.settings.wall_exterior+t.overhang,s=Math.min(...n)-i,r=Math.max(...n)+i,l=Math.min(...o)-i,c=Math.max(...o)+i,d=e.elevation+e.height;if(t.type==="flat")return[Zr("main",null,s,l,r,c,d+Jr)];let p=r-s>=c-l,h=t.ridge==="short"?!p:p,u=(h?c-l:r-s)/2,f=u*Math.tan(t.pitch*pe),m=(v,$,k)=>h?[v,d+k,(l+c)/2+$]:[(s+r)/2+$,d+k,v],[g,_]=h?[s,r]:[l,c];return[-1,1].map(v=>Hn(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",m(g,v*u,0),m(_,v*u,0),m(g,0,f),t.pitch,()=>[0,_-g]))}function Ql(a,t){let e=Mt(a),n=Jt(a),o=(m,g,_)=>{let[v,$]=e.at(m,g);return[v,_,$]},i=Math.max(0,t.a),s=Math.max(0,t.b),r=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-r;if(a.shape==="flat"||a.shape==="parapet"){let m=e.at(r,-i),g=e.at(l,e.w+s);return[Zr(a.id,a.id,Math.min(m[0],g[0]),Math.min(m[1],g[1]),Math.max(m[0],g[0]),Math.max(m[1],g[1]),a.eave_a+Jr)]}if(a.shape==="pent")return[Hn(`${a.id}:a`,a.id,"a",o(r,-i,n.y(-i)),o(l,-i,n.y(-i)),o(r,e.w+s,n.y(e.w+s)),a.pitch_a,()=>[0,c])];let d=a.shape==="hip"||a.shape==="pyramid",p=a.shape==="pyramid"?(e.u1-e.u0)/2:d?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,h=d?e.u0+p-r:0,u=d?l-(e.u1-p):0,f=[];if(n.vr>.3){let m=Math.hypot(n.vr+i,n.rh-n.y(-i));f.push(Hn(`${a.id}:a`,a.id,"a",o(r,-i,n.y(-i)),o(l,-i,n.y(-i)),o(r,n.vr,n.rh),a.pitch_a,g=>[h*(g/m),c-u*(g/m)]))}if(e.w-n.vr>.3){let m=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));f.push(Hn(`${a.id}:b`,a.id,"b",o(l,e.w+s,n.y(e.w+s)),o(r,e.w+s,n.y(e.w+s)),o(l,n.vr,n.rh),a.pitch_b,g=>[u*(g/m),c-h*(g/m)]))}if(d){let m=n.y(-i),g=n.y(e.w+s),_=[[`${a.id}:c`,"c",o(r,e.w+s,g),o(r,-i,m),o(e.u0+p,n.vr,n.rh)],[`${a.id}:d`,"d",o(l,-i,m),o(l,e.w+s,g),o(e.u1-p,n.vr,n.rh)]];for(let[v,$,k,x,A]of _){let P=Zl(v,a.id,$,k,x,A);P&&f.push(P)}}return f}function Zl(a,t,e,n,o,i){let s=tn(de(o,n));if(s<.3)return null;let r=Yt(de(o,n)),l=de(i,n),c=l[0]*r[0]+l[1]*r[1]+l[2]*r[2],d=[l[0]-r[0]*c,l[1]-r[1]*c,l[2]-r[2]*c],p=tn(d);if(p<.3)return null;let h=Yt(d),u=Yt(ea(r,h));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let f=Yt([-h[0],0,-h[2]]),m=Math.atan2(h[1],Math.hypot(h[0],h[2]))/pe;return{key:a,section:t,side:e,flat:!1,o:n,eu:r,es:h,n:u,lu:s,ls:p,pitch:m,span:_=>{let v=Math.min(1,Math.max(0,_/p));return[c*v,s-(s-c)*v]},facing:[f[0],f[2]]}}function Hn(a,t,e,n,o,i,s,r){let l=Yt(de(o,n)),c=Yt(de(i,n)),d=Yt(ea(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=Yt([-c[0],0,-c[2]]);return{key:a,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:d,lu:tn(de(o,n)),ls:tn(de(i,n)),pitch:s,span:r,facing:[p[0],p[2]]}}function Zr(a,t,e,n,o,i,s){let r=o-e>=i-n,l=r?o-e:i-n,c=r?i-n:o-e;return{key:`${a}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:r?[1,0,0]:[0,0,1],es:r?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:r?[0,1]:[1,0]}}function Ee(a){let t=a.module_w||Xr,e=a.module_h||ei;return a.portrait===!1?[e,t]:[t,e]}function en(a){return a.layout?.length?a.layout.map(t=>Math.max(0,Math.min(60,Math.round(t)))):Array.from({length:Math.max(1,a.rows)},()=>Math.max(1,a.cols))}function si(a,t){return a.flat?Math.min(45,Math.max(0,t.tilt??15))*pe:a.wall?Math.min(90,Math.max(0,t.tilt??0))*pe:0}function Ae(a,t){let[e,n]=Ee(t),o=en(t),i=Math.max(1,...o),r=(o.length-1)*ri(a,t)+n*Math.cos(si(a,t));return[i*e+(i-1)*$t,r]}function ri(a,t){let[,e]=Ee(t),n=si(a,t);return a.wall?e*Math.cos(n)+$t:a.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+$t}function Ct(a,t,e=!1){let[n,o]=Ee(t),i=[],s=si(a,t),r=o*Math.cos(s),l=ri(a,t),c=en(t),d=Math.max(1,...c),p=new Set(t.skip??[]),h=!!a.wall&&n>a.lu+1e-6,u=(m,g,_)=>[a.o[0]+a.eu[0]*m+a.es[0]*g+a.n[0]*_,a.o[1]+a.eu[1]*m+a.es[1]*g+a.n[1]*_,a.o[2]+a.eu[2]*m+a.es[2]*g+a.n[2]*_],f=(m,g)=>{if(a.unbounded)return!0;if(g<-1e-6||g>a.ls+1e-6)return!1;let[_,v]=a.span(g);return m>=_-1e-6&&m<=v+1e-6};return c.forEach((m,g)=>{let _=t.align==="right"?d-m:t.align==="center"?(d-m)/2:0;for(let v=0;v<m;v++){let $=`${g}:${v}`,k=p.has($);if(k&&!e)continue;let x=t.u+(v+_)*(n+$t),A=t.v+g*l,P=x+n,w=A+(a.flat||a.wall?r:o);if(h){if(!(f((x+P)/2,A)&&f((x+P)/2,w)))continue}else if(![[x,A],[P,A],[P,w],[x,w]].every(([T,V])=>f(T,V)))continue;if(a.wall&&s>.001){let T=ce+o*Math.sin(s),[V,E]=t.flip?[T,ce]:[ce,T],R=[u(x,A,V),u(P,A,V),u(P,w,E),u(x,w,E)],j=t.flip?A:w,D=[x+.05,P-.05].map(H=>[u(H,j,0),u(H,j,T)]);i.push({corners:R,posts:D,cell:$,skipped:k});continue}if(!a.flat){i.push({corners:[u(x,A,ce),u(P,A,ce),u(P,w,ce),u(x,w,ce)],posts:[],cell:$,skipped:k});continue}let z=.15,S=z+o*Math.sin(s),[I,L]=t.flip?[w,A]:[A,w],O=[u(x,I,z),u(P,I,z),u(P,L,S),u(x,L,S)];i.push({corners:O,posts:[x+.05,P-.05].flatMap(T=>[[u(T,I,0),u(T,I,z)],[u(T,L,0),u(T,L,S)]]),cell:$,skipped:k})}}),i}function Wn(a,t){let e=[a.eu[0],a.eu[2]],n=[a.es[0],a.es[2]],o=[t[0]-a.o[0],t[1]-a.o[2]],i=e[0]*n[1]-e[1]*n[0];if(Math.abs(i)<1e-9)return null;let s=(o[0]*n[1]-o[1]*n[0])/i,r=(e[0]*o[1]-e[1]*o[0])/i;if(r<0||r>a.ls)return null;let[l,c]=a.span(r);return s>=l&&s<=c?{u:s,s:r}:null}function ta(a,t){let e=null;for(let n of a){if(n.wall){let s=[t[0]-n.o[0],t[1]-n.o[2]],r=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(r>=0&&r<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:r,s:Number.NaN};r>=0&&r<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:r,s:Number.NaN,y:-1/0});continue}let o=Wn(n,t);if(!o)continue;let i=n.o[1]+n.es[1]*o.s;(!e||i>e.y)&&(e={face:n,...o,y:i})}return e?{face:e.face,u:e.u,s:e.s}:null}function ze(a,t){if(a.unbounded)return{u:t.u,v:t.v};let[e,n]=Ae(a,t),o=s=>Math.floor(s*100+1e-6)/100;return{u:a.wall&&e>a.lu?Math.round((a.lu-e)/2*100)/100:o(Math.min(Math.max(0,t.u),Math.max(0,a.lu-e))),v:o(Math.min(Math.max(0,t.v),Math.max(0,a.ls-n)))}}function Nn(a,t){let e={id:t,face:a.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:a.flat?15:null,flip:!1,entity:null,look:"black"},[n]=Ee(e),o=.4,i=ri(a,e),[s,r]=a.span(a.ls/2);for(e.cols=Math.max(1,Math.floor((r-s-2*o+$t)/(n+$t))),e.rows=Math.max(1,Math.min(4,Math.floor((a.ls-2*o)/i)));e.cols>1&&Ct(a,{...e,u:ni(a,e),v:o}).length<e.rows*e.cols;)e.cols--;return e.u=ni(a,e),e.v=o,e}function ai(a,t){let e={...t,face:a.key,tilt:a.flat?t.tilt??15:null,rotation:null,flip:!1};return a.wall&&Object.assign(e,tc(a,e)),e.u=ni(a,e),e.v=.4,{...e,...ze(a,e)}}function tc(a,t){let e=o=>Math.floor((a.lu+$t+1e-6)/(Ee({...t,portrait:o})[0]+$t)),n=t.portrait===!1&&e(!1)<1?!0:t.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...en(t)),e(n!==!1))),layout:void 0,skip:void 0}}function ni(a,t){let[e]=Ee(t),n=t.cols*e+(t.cols-1)*$t;return Math.round((a.lu-n)/2*100)/100}function li(a,t){let e=(Math.atan2(a.facing[0],-a.facing[1])/pe-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function Bn(a,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let o=(Math.atan2(n.facing[0],-n.facing[1])/pe-t+720)%360,i=Math.cos((o-180)*pe);return n.lu*n.ls*(1.2+i)};return[...a].sort((n,o)=>e(o)-e(n))[0]??null}function de(a,t){return[a[0]-t[0],a[1]-t[1],a[2]-t[2]]}function tn(a){return Math.hypot(a[0],a[1],a[2])}function Yt(a){let t=tn(a)||1;return[a[0]/t,a[1]/t,a[2]/t]}function ea(a,t){return[a[1]*t[2]-a[2]*t[1],a[2]*t[0]-a[0]*t[2],a[0]*t[1]-a[1]*t[0]]}var na=.78,oa=1.18;function Ie(a){return{id:a.id,face:a.face,u:a.u,v:a.v,rows:1,cols:1,portrait:!0,module_w:a.w||na,module_h:a.h||oa}}function ia(a,t){let e=Ct(a,Ie(t))[0];if(!e)return null;let n=o=>[o[0]-a.n[0]*.05,o[1]-a.n[1]*.05,o[2]-a.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function ci(a,t){let e=na,n=oa,[o,i]=a.span(a.ls/2);return{id:t,face:a.key,u:Math.round((o+i-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(a.ls-n,a.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function nn(a,t,e){let n=Yr(a,t),[o,i]=Ae(n,t),s=n.eu[0]*(t.u+o/2)+n.es[0]*(t.v+i/2),r=n.eu[2]*(t.u+o/2)+n.es[2]*(t.v+i/2),l=e*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],p=s*c[0]+r*c[1]-o/2,h=s*d[0]+r*d[1]-i/2,u=f=>Math.round(f*100)/100;return{u:u(p),v:u(h),rotation:(Math.round(e)%360+360)%360}}function on(a,t){let[e,n]=Ae(a,t);return[a.o[0]+a.eu[0]*(t.u+e/2)+a.es[0]*(t.v+n/2),a.o[2]+a.eu[2]*(t.u+e/2)+a.es[2]*(t.v+n/2)]}function di(a,t,e){let n=e[0]*a.n[0]+e[1]*a.n[1]+e[2]*a.n[2];if(Math.abs(n)<1e-6)return null;let o=((a.o[0]-t[0])*a.n[0]+(a.o[1]-t[1])*a.n[1]+(a.o[2]-t[2])*a.n[2])/n;if(o<=0)return null;let i=[t[0]+e[0]*o-a.o[0],t[1]+e[1]*o-a.o[1],t[2]+e[2]*o-a.o[2]],s=i[0]*a.eu[0]+i[1]*a.eu[1]+i[2]*a.eu[2],r=i[0]*a.es[0]+i[1]*a.es[1]+i[2]*a.es[2];return{t:o,u:s,s:r}}function sa(a,t,e){if(a.unbounded)return!0;if(e<0||e>a.ls)return!1;let[n,o]=a.span(e);return t>=n&&t<=o}function ra(a,t,e,n){for(let o of Ct(a,t)){let i=o.corners.map(d=>{let p=[d[0]-a.o[0],d[1]-a.o[1],d[2]-a.o[2]];return[p[0]*a.eu[0]+p[1]*a.eu[1]+p[2]*a.eu[2],p[0]*a.es[0]+p[1]*a.es[1]+p[2]*a.es[2]]}),[s,r]=[Math.min(...i.map(d=>d[0])),Math.max(...i.map(d=>d[0]))],[l,c]=[Math.min(...i.map(d=>d[1])),Math.max(...i.map(d=>d[1]))];if(e>=s-.05&&e<=r+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}var xt=.03,qn=a=>a&&a!=="none"?a:null;function ui(a,t=e=>qn(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of a.floors)for(let o of n.furniture){let i=t(o);if(o.type==="meter")e.grid??=i,e.gridExport??=qn(o.export);else if(o.type==="inverter"&&i&&!e.solar.includes(i))e.solar.push(i);else if(o.type==="home_battery"){i&&!e.battery.includes(i)&&e.battery.push(i);let s=qn(o.charge);s&&!e.charge.includes(s)&&e.charge.push(s),(i||s)&&e.batteries.push({power:i,charge:s});let r=qn(o.soc);r&&!e.soc.includes(r)&&e.soc.push(r)}}return e}function hi(a){for(let t of a.floors){let e=t.furniture.find(n=>n.type==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return a.energy.meter}function pa(a){let t=n=>a.energy_sources?.find(o=>o.type===n)?.stat_energy_from??null,e=n=>n&&n.startsWith("sensor.")?n:null;return{gas:e(t("gas")),water:e(t("water"))}}function Un(a,t,e="power"){if(!t)return null;let n=a.entities?.[t]?.device_id;if(!n)return null;let o=Object.keys(a.states).filter(r=>r.startsWith("sensor.")&&a.entities?.[r]?.device_id===n&&a.states[r]?.attributes.device_class===e);if(o.length<=1)return o[0]??null;let i=o.filter(r=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(r)),s=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return i.find(r=>s&&r.includes(s))??i[0]??o[0]}function ua(a,t){let e={};for(let n of t.energy_sources??[])if(n.type==="grid"){let o=n.flow_from?.[0]?.stat_energy_from??n.flow_to?.[0]?.stat_energy_to,i=Un(a,o);i&&!e.grid&&(e.grid=i)}else if(n.type==="solar"){let o=Un(a,n.stat_energy_from);o&&!e.solar&&(e.solar=o)}else if(n.type==="battery"){let o=Un(a,n.stat_energy_from??n.stat_energy_to);o&&!e.battery&&(e.battery=o);let i=Un(a,n.stat_energy_from??n.stat_energy_to,"battery");i&&!e.battery_soc&&(e.battery_soc=i)}return e}var ec=.07;function Dt(a,t=!1){if(!a)return null;let e=Number(a.state);if(!Number.isFinite(e))return null;let n=String(a.attributes.unit_of_measurement??"W"),o=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-o:o}function nc(a,t){return t.startsWith("sensor.")&&a.states[t]?.attributes.device_class==="power"}function ha(a,t){if(nc(a,t))return t;let e=a.entities?.[t]?.device_id;if(!e)return null;let n=Gs(a,e),o=n?re(a,t):null;return Lo(a,e).find(i=>i!==t&&(!n||o!==null&&re(a,i)===o))??null}function fa(a,t,e,n=ui(t)){let o=t.energy,i=o.grid??n.grid,s=i?Dt(a.states[i],o.grid_invert):null;if(!o.grid&&n.gridExport){let m=Math.max(0,Dt(a.states[n.gridExport])??0);s=Math.max(0,s??0)-m}let r=o.solar?Dt(a.states[o.solar]):null;if(!o.solar&&n.solar.length){let m=n.solar.map(g=>Dt(a.states[g])).filter(g=>g!==null);r=m.length?m.reduce((g,_)=>g+_,0):null}let l=o.battery?Dt(a.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let m=n.batteries.map(g=>{if(g.charge){let _=g.power?Math.max(0,Dt(a.states[g.power])??0):0,v=Math.max(0,Dt(a.states[g.charge])??0);return _-v}return g.power?Dt(a.states[g.power],o.battery_invert):null}).filter(g=>g!==null);l=m.length?m.reduce((g,_)=>g+_,0):null}let d=(o.battery_soc?[o.battery_soc]:n.soc).map(m=>Number(a.states[m]?.state)).filter(m=>Number.isFinite(m)),p=d.length?d.reduce((m,g)=>m+g,0)/d.length:NaN,h=o.tariff?a.states[o.tariff]:void 0,u=Number(h?.state),f=o.consumption?Dt(a.states[o.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||r!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,r??0)+(l??0)):e.length&&(f=e.reduce((m,g)=>m+g.power,0)),{grid:s,solar:r===null?null:Math.max(0,r),battery:l,soc:Number.isFinite(p)?p:null,tariff:h&&Number.isFinite(u)?{value:u,unit:String(h.attributes.unit_of_measurement??"")}:null,consumption:f}}function he(a,t){return a.pos.push(t),a.adj.push([]),a.pos.length-1}function ue(a,t,e){let n=Math.hypot(a.pos[t][0]-a.pos[e][0],a.pos[t][1]-a.pos[e][1]);a.adj[t].push({to:e,w:n}),a.adj[e].push({to:t,w:n})}function oc(a,t){let e=a.length,n=a.map((o,i)=>{let s=a[(i+1)%e],r=s[0]-o[0],l=s[1]-o[1],c=Math.hypot(r,l)||1,d=-l/c,p=r/c;return{p:[o[0]+d*t[i],o[1]+p*t[i]],d:[r/c,l/c],n:[d,p]}});return a.map((o,i)=>{let s=n[(i-1+e)%e],r=n[i],l=s.d[0]*r.d[1]-s.d[1]*r.d[0];if(Math.abs(l)<1e-6)return[o[0]+r.n[0]*t[i],o[1]+r.n[1]*t[i]];let c=((r.p[0]-s.p[0])*r.d[1]-(r.p[1]-s.p[1])*r.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function ic(a){return nt(a.points)>=0?{pts:a.points,flipped:!1}:{pts:[...a.points].reverse(),flipped:!0}}function fi(a,t,e){let n={pos:[],adj:[],rings:new Map},{walls:o}=lt(a.rooms,{exterior:t,interior:e},a.walls??[]);for(let i of a.rooms){if(i.points.length<3)continue;let{pts:s,flipped:r}=ic(i),l=s.length,c=s.map((h,u)=>{let f=r?(l-2-u+l)%l:u,m=o.some(g=>!g.exterior&&g.sources.some(_=>_.room_id===i.id&&_.edge===f));return ec+(m?e/2:0)}),d=oc(s,c).map(h=>he(n,h)),p=d.map((h,u)=>[h,d[(u+1)%l]]);for(let[h,u]of p)ue(n,h,u);n.rings.set(i.id,p)}for(let i of o){if(i.exterior||!i.roomLeft||!i.roomRight)continue;let s=[(i.a[0]+i.b[0])/2,(i.a[1]+i.b[1])/2],r=Gn(n,i.roomLeft,s),l=Gn(n,i.roomRight,s);r!==null&&l!==null&&ue(n,r,l)}return n}function Gn(a,t,e){let n=a.rings.get(t);if(!n)return null;let o=null;for(let s of n){let r=a.pos[s[0]],l=a.pos[s[1]],c=l[0]-r[0],d=l[1]-r[1],p=c*c+d*d||1,h=Math.min(1,Math.max(0,((e[0]-r[0])*c+(e[1]-r[1])*d)/p)),u=[r[0]+c*h,r[1]+d*h],f=Math.hypot(e[0]-u[0],e[1]-u[1]);(!o||f<o.d)&&(o={seg:s,q:u,d:f})}if(!o)return null;let i=he(a,o.q);return ue(a,i,o.seg[0]),ue(a,i,o.seg[1]),i}function Xn(a,t,e){let n=a.pos[e],o=Gn(a,t.id,n);if(o===null)return!1;let i=a.pos[o],s=a.pos[a.adj[o][0].to],r=a.pos[a.adj[o][1].to],l=Math.hypot(r[0]-s[0],r[1]-s[1])||1,c=[(r[0]-s[0])/l,(r[1]-s[1])/l],d=(n[0]-i[0])*c[0]+(n[1]-i[1])*c[1],p=(n[1]-i[1])*c[0]-(n[0]-i[0])*c[1];if(Math.abs(d)<.01||Math.abs(p)<.01)return ue(a,e,o),!0;let h=[i[0]+c[0]*d,i[1]+c[1]*d],u=[i[0]-c[1]*p,i[1]+c[0]*p],f=he(a,C(u,t.points)||!C(h,t.points)?u:h);return ue(a,o,f),ue(a,f,e),!0}function rn(a,t){let e=a.rooms.filter(i=>i.points.length>=3),n=e.find(i=>C(t,i.points));if(n)return n;let o=null;for(let i of e)for(let s of i.points){let r=Math.hypot(t[0]-s[0],t[1]-s[1]);(!o||r<o.d)&&(o={room:i,d:r})}return o?.room??null}function ma(a,t){let e=a.pos.map(()=>1/0),n=a.pos.map(()=>-1),o=a.pos.map(()=>!1);for(e[t]=0;;){let i=-1;for(let s=0;s<e.length;s++)!o[s]&&e[s]<1/0&&(i<0||e[s]<e[i])&&(i=s);if(i<0)break;o[i]=!0;for(let{to:s,w:r}of a.adj[i])e[i]+r<e[s]-1e-9&&(e[s]=e[i]+r,n[s]=i)}return{dist:e,prev:n}}function aa(a,t){return a.every(e=>t[e].kind==="battery")?"battery":a.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var la=new WeakMap;function sc(a,t){let e=hi(a),n=a.floors.find(d=>d.id===e.floor_id),o=[],{wall_exterior:i,wall_interior:s}=a.settings,r=new Map,l=new Map;t.forEach((d,p)=>l.set(d.floorId,[...l.get(d.floorId)??[],p]));let c=a.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let p=d.elevation>n.elevation,h=l.get(d.id),u=aa(h,t);o.push({floorId:n.id,a:[e.x,xt,e.z],b:[e.x,p?n.height:-.2,e.z],dist:0,members:h,kind:u});let f=Math.abs(d.elevation-n.elevation);o.push({floorId:d.id,a:[e.x,p?-.2:d.height,e.z],b:[e.x,xt,e.z],dist:f,members:h,kind:u}),r.set(d.id,f+.25)}for(let d of c){let p=fi(d,i,s),h=rn(d,[e.x,e.z]);if(!h)continue;let u=he(p,[e.x,e.z]);if(!Xn(p,h,u))continue;let f=[];for(let $ of l.get(d.id)){let k=t[$],x=rn(d,[k.x,k.z]);if(!x)continue;let A=he(p,[k.x,k.z]);Xn(p,x,A)&&f.push({node:A,member:$})}let{dist:m,prev:g}=ma(p,u),_=new Map;for(let $ of f)if(Number.isFinite(m[$.node]))for(let k=$.node;g[k]>=0;k=g[k]){let x=g[k],A=`${x}>${k}`,P=_.get(A)??{a:x,b:k,members:[]};P.members.push($.member),_.set(A,P)}let v=r.get(d.id)??0;for(let{a:$,b:k,members:x}of _.values()){let A=p.pos[$],P=p.pos[k],w=aa(x,t);o.push({floorId:d.id,a:[A[0],xt,A[1]],b:[P[0],xt,P[1]],dist:v+m[$],members:x,kind:w})}}return o}function ga({building:a,consumers:t,summary:e,battery:n,fieldPower:o,devicePower:i}){let s=hi(a);if(!s)return[];let r=a.floors.find(S=>S.id===s.floor_id);if(!r)return[];let l=S=>i?.get(S),c=pi(a,"inverter"),d=pi(a,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let p=S=>{let I=null;for(let L of c)L.floorId===S.floorId&&(!I||Math.hypot(L.x-S.x,L.z-S.z)<Math.hypot(I.x-S.x,I.z-S.z))&&(I=L);return I},h=S=>l(S.id)??(d.length===1?e.battery??0:0),u=new Map;for(let S of d){let I=p(S);I&&u.set(S.id,I)}let f=t.map(S=>({floorId:S.floorId,x:S.x,z:S.z,kind:S.wallbox?"wallbox":"consumer",power:S.power}));for(let S of d)!u.has(S.id)&&e.battery!==null&&f.push({floorId:S.floorId,x:S.x,z:S.z,kind:"battery",power:Math.abs(h(S))});let m=`${s.floor_id}:${s.x},${s.z}|${f.map(S=>`${S.floorId}:${S.x},${S.z}:${S.kind}`).join(";")}`,g=la.get(a);g||la.set(a,g=new Map);let _=g.get(m);_||(_=sc(a,f),g.clear(),g.set(m,_));let v=_.map(S=>({floorId:S.floorId,a:S.a,b:S.b,dist:S.dist,power:S.members.reduce((I,L)=>I+f[L].power,0),kind:S.kind})),$=e.grid!==null?mi(a):null,k=a.settings.roof.cables??[],x=S=>k.find(I=>I.id===S),A=(S,I)=>S.map(L=>({...L,key:I}));if($){let S=e.grid>=0,I=x("grid"),L=I?Kn(a,I,[$.end[0],r.elevation+Math.max(xt,$.height),$.end[1]],[s.x,r.elevation+.4+1.1,s.z]):[...$.height>.05?[[$.end[0],$.height,$.end[1]]]:[],[$.end[0],xt,$.end[1]],[$.wall[0],xt,$.wall[1]],[s.x,xt,s.z]],O=I?sn(a,S?L:[...L].reverse(),Math.abs(e.grid),S?"grid":"export",r):ba(r.id,S?L:[...L].reverse(),Math.abs(e.grid),S?"grid":"export",0);v.push(...A(O,"grid"))}if(e.battery!==null&&e.battery>0)for(let S of v)S.kind==="battery"&&([S.a,S.b]=[S.b,S.a]);let P=a.settings.roof.solar??[],w=a.settings.roof.strings??[],z=new Map;if(o&&P.length){let S=[...Y(a),...It(a)];for(let I of P){let L=o.get(I.id)??0,O=I.string?w.find(H=>H.id===I.string)?.inverter:null,T=O?c.find(H=>H.id===O)??null:null;if(!T&&c.length){let H=ut(a,I,S),B=H?on(H,I):[I.u,I.v];T=c.reduce((q,U)=>!q||Math.hypot(U.x-B[0],U.z-B[1])<Math.hypot(q.x-B[0],q.z-B[1])?U:q,null)}T&&z.set(T.id,(z.get(T.id)??0)+L);let V=T??{floorId:s.floor_id,x:s.x,z:s.z},E=T?1.1+T.h:1.5,R=x(`solar:${I.id}`),j=R?rc(a,I):null,D=a.floors.find(H=>H.id===V.floorId);R&&j&&D?v.push(...A(sn(a,Kn(a,R,j,[V.x,D.elevation+E,V.z]),L,"solar",D),`solar:${I.id}`)):v.push(...A(lc(a,I,L,V,E),`solar:${I.id}`))}}else e.solar!==null&&!c.length&&v.push({floorId:r.id,a:[s.x+.08,r.height+.6,s.z+.08],b:[s.x+.08,xt,s.z+.08],dist:0,power:e.solar,kind:"solar"});for(let S of c){let I=1.1+S.h,L=d.filter(V=>u.get(V.id)===S),O=l(S.id);if(O===void 0){O=z.get(S.id)??(c.length===1?e.solar??0:0);for(let V of L)O+=h(V)}let T=a.floors.find(V=>V.id===S.floorId);if(e.solar!==null||e.battery!==null){let V=x(`inv:${S.id}`),E=V&&T?sn(a,Kn(a,V,[S.x,T.elevation+I,S.z],[s.x,r.elevation+1.5,s.z]),Math.max(0,O),"inverter",T):da(a,S,I,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,O),"inverter",0);v.push(...A(E,`inv:${S.id}`))}for(let V of L){let E=h(V);if(e.battery===null&&l(V.id)===void 0)continue;let R=V.variant==="wall"?.5+V.h:.9,j=x(`bat:${V.id}`),D=j&&T?sn(a,Kn(a,j,[S.x,T.elevation+I-.1,S.z],[V.x,T.elevation+R,V.z]),Math.abs(E),"battery",T):da(a,S,I-.1,V,R,Math.abs(E),"battery",0);v.push(...A(E<=0?D:D.map(H=>({...H,a:H.b,b:H.a})).reverse(),`bat:${V.id}`))}}return v}function mi(a){let t=hi(a),e=t?a.floors.find(u=>u.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:o}=a.settings,{walls:i}=lt(e.rooms,{exterior:n,interior:o},e.walls??[]),s=pi(a,"grid_point")[0],r=i.filter(u=>u.exterior);if(s){let u=null;for(let g of r){let _=g.b[0]-g.a[0],v=g.b[1]-g.a[1],$=s.x-t.x,k=s.z-t.z,x=$*v-k*_;if(Math.abs(x)<1e-9)continue;let A=((g.a[0]-t.x)*v-(g.a[1]-t.z)*_)/x,P=((g.a[0]-t.x)*k-(g.a[1]-t.z)*$)/x;if(A<=0||A>1||P<0||P>1||u&&A>=u.t)continue;let w=Math.hypot(_,v)||1;u={q:[t.x+$*A,t.z+k*A],out:[v/w,-_/w],t:A}}let f=u?[u.q[0]+u.out[0]*(n/2+.05),u.q[1]+u.out[1]*(n/2+.05)]:[t.x,t.z],m=a.floors.flatMap(g=>g.furniture).find(g=>g.id===s.id)?.mount_y??0;return{floorId:e.id,wall:f,end:[s.x,s.z],height:Math.max(0,m)}}let l=null;for(let u of r){let f=u.b[0]-u.a[0],m=u.b[1]-u.a[1],g=f*f+m*m||1,_=Math.min(1,Math.max(0,((t.x-u.a[0])*f+(t.z-u.a[1])*m)/g)),v=[u.a[0]+f*_,u.a[1]+m*_],$=Math.hypot(t.x-v[0],t.z-v[1]),k=Math.sqrt(g);(!l||$<l.d)&&(l={q:v,out:[m/k,-f/k],d:$})}if(!l)return null;let{q:c,out:d}=l,p=0;for(let u of a.floors)for(let f of u.outdoor??[]){let m=f.points.length;for(let g=0;g<m;g++){let _=f.points[g],v=f.points[(g+1)%m],$=v[0]-_[0],k=v[1]-_[1],x=d[0]*k-d[1]*$;if(Math.abs(x)<1e-9)continue;let A=((_[0]-c[0])*k-(_[1]-c[1])*$)/x,P=((_[0]-c[0])*d[1]-(_[1]-c[1])*d[0])/x;A>0&&P>=0&&P<=1&&(p=Math.max(p,Math.min(15,A)))}}let h=p>n+1?p:n+2.5;return{floorId:e.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*h,c[1]+d[1]*h],height:0}}function pi(a,t){let e=[];for(let n of a.floors)for(let o of n.furniture)o.type===t&&e.push({id:o.id,type:o.type,floorId:n.id,x:o.x,z:o.z,h:o.h,variant:o.variant??null});return e}var ca=new WeakMap;function _a(a,t,e,n){let o=`${t.id}:${e.join(",")}>${n.join(",")}`,i=ca.get(a);i||ca.set(a,i=new Map);let s=i.get(o);if(s)return s;let{wall_exterior:r,wall_interior:l}=a.settings,c=fi(t,r,l),d=[e,n],p=rn(t,e),h=rn(t,n);if(p&&h){let u=he(c,e),f=he(c,n);if(Xn(c,p,u)&&Xn(c,h,f)){let{dist:m,prev:g}=ma(c,u);if(Number.isFinite(m[f])){d.length=0;for(let _=f;_>=0;_=g[_])d.unshift(c.pos[_])}}}return i.set(o,d),d}function da(a,t,e,n,o,i,s,r){let l=a.floors.find(p=>p.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let c=_a(a,l,[t.x,t.z],[n.x,n.z]),d=[[t.x,e,t.z],...c.map(p=>[p[0],xt,p[1]]),[n.x,o,n.z]];return ba(l.id,d,i,s,r)}function ba(a,t,e,n,o){let i=[];for(let s=0;s+1<t.length;s++){let r=t[s],l=t[s+1],c=Math.hypot(l[0]-r[0],l[1]-r[1],l[2]-r[2]);c<1e-4||(i.push({floorId:a,a:r,b:l,dist:o,power:e,kind:n}),o+=c)}return i}function Kn(a,t,e,n){let i=(a.floors.find(s=>s.id===t.floor_id)?.elevation??0)+Math.max(xt,t.height);return[e,...t.points.map(s=>[s[0],i,s[1]]),n]}function rc(a,t){let e=ut(a,t,[...Y(a),...It(a)]);if(!e)return null;let[n,o]=Ae(e,t),i=t.u+n/2,s=e.unbounded?t.v+o/2:t.v;return[e.o[0]+e.eu[0]*i+e.es[0]*s,e.o[1]+e.eu[1]*i+e.es[1]*s,e.o[2]+e.eu[2]*i+e.es[2]*s]}function ac(a,t,e){let{wall_exterior:n,wall_interior:o}=a.settings,i=fi(t,n,o),s=rn(t,e),r=s?Gn(i,s.id,e):null;return r===null?e:i.pos[r]}function sn(a,t,e,n,o){let i=[...a.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=o;for(let p of i)c>=p.elevation-.01&&(d=p);return d},r=[],l=0;for(let c=0;c+1<t.length;c++){let d=t[c],p=t[c+1];if(Math.hypot(p[0]-d[0],p[1]-d[1],p[2]-d[2])<1e-4)continue;let u=[];if(Math.abs(p[1]-d[1])>.01){let f=Math.min(d[1],p[1]),m=Math.max(d[1],p[1]);for(let g of i)g.elevation>f+.01&&g.elevation<m-.01&&u.push(g.elevation);p[1]<d[1]&&u.reverse()}for(let f of[...u,p[1]]){let m=(f-d[1])/(p[1]-d[1]||1),g=Math.abs(p[1]-d[1])>.01?[d[0]+(p[0]-d[0])*m,f,d[2]+(p[2]-d[2])*m]:p,_=s((d[1]+g[1])/2),v=Math.hypot(g[0]-d[0],g[1]-d[1],g[2]-d[2]);v>1e-4&&r.push({floorId:_.id,a:[d[0],d[1]-_.elevation,d[2]],b:[g[0],g[1]-_.elevation,g[2]],dist:l,power:e,kind:n}),l+=v,d=g}}return r}function lc(a,t,e,n,o){let i=[...Y(a),...It(a)],s=ut(a,t,i),r=a.floors.find(g=>g.id===n.floorId);if(!s||!r)return[];let[l,c]=Ae(s,t),d=(g,_)=>[s.o[0]+s.eu[0]*g+s.es[0]*_,s.o[1]+s.eu[1]*g+s.es[1]*_,s.o[2]+s.eu[2]*g+s.es[2]*_],p=t.u+l/2,h=r.elevation+xt,u=[],f;if(s.unbounded){let g=d(p,t.v+c/2);f=[g[0],h,g[2]],u.push(f)}else if(s.wall){let g=d(p,t.v);f=[g[0],h,g[2]],u.push(g,f)}else{let g=d(p,t.v),_=ii(a)??r,v=Math.max(r.elevation+.5,Math.min(g[1]-.25,_.elevation+_.height-.12));f=[g[0],v,g[2]],u.push(g)}let m=ac(a,r,[f[0],f[2]]);u.push([m[0],f[1],m[1]]),Math.abs(f[1]-h)>.05&&u.push([m[0],h,m[1]]);for(let g of _a(a,r,m,[n.x,n.z]).slice(1))u.push([g[0],h,g[1]]);return u.push([n.x,r.elevation+o,n.z]),sn(a,u,e,"solar",r)}var ya=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],cc={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},dc={back:0,right:90,front:180,left:270};function $a(a,t,e){let n=it(a.points),o=n.x1-n.x0,i=n.z1-n.z0,s=cc[t],r=[],l=(d,p,h,u,f)=>{let[m,g,_]=f??Pt[d];r.push({id:e(),type:d,x:va(p),z:va(h),rotation:u,w:m,d:g,h:_,variant:null,entity:null,power:null})},c=.02;for(let d of s.rows){let p=d.items.map(g=>({type:g.type,size:g.size??Pt[g.type]})),h=d.wall==="back"||d.wall==="front"?o:i,u=[],f=0;for(let g of p){if(f+g.size[0]>h-.1)break;u.push(g),f+=g.size[0]}let m=d.align==="start"?.05:d.align==="end"?h-f-.05:(h-f)/2;for(let g of u){let[_,v]=g.size,$=m+_/2,k=v/2+c;d.wall==="back"?l(g.type,n.x0+$,n.z0+k,0,g.size):d.wall==="front"?l(g.type,n.x1-$,n.z1-k,180,g.size):d.wall==="right"?l(g.type,n.x1-k,n.z0+$,90,g.size):l(g.type,n.x0+k,n.z1-$,dc.left,g.size),m+=_}}for(let d of s.free){let[p,h]=d.size??Pt[d.type],u=Math.min(n.x1-p/2-.05,Math.max(n.x0+p/2+.05,n.x0+o*d.at[0])),f=Math.min(n.z1-h/2-.05,Math.max(n.z0+h/2+.05,n.z0+i*d.at[1]));l(d.type,u,f,d.rotation,d.size)}return r}var va=a=>Math.round(a*1e3)/1e3;var Fe=St`
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
`,Jn=St`
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
`;var xa=40,gi=class extends _t{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=s=>{let r=`${s.label} ${s.id}`.toLowerCase();return e.every(l=>r.includes(l))},o=this.fixed.filter(s=>!t||n(s)),i=t?this.options.filter(n):this.options;return[...o,...i.slice(0,xa)]}get leftOut(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=t?this.options.filter(o=>e.every(i=>`${o.label} ${o.id}`.toLowerCase().includes(i))).length:this.options.length;return Math.max(0,n-xa)}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[];return b`<div class="wrap">
      <input
        type="text"
        role="combobox"
        aria-expanded=${this._open}
        ?disabled=${this.disabled}
        placeholder=${t?t.label:this.placeholder}
        .value=${this._open?this._query:t?.label??""}
        @focus=${()=>{clearTimeout(this.blurTimer),this._open=!0,this._query="",this._cursor=0}}
        @blur=${()=>{this.blurTimer=setTimeout(()=>this._open=!1,150)}}
        @input=${n=>{this._query=n.target.value,this._cursor=0,this._open=!0}}
        @keydown=${this.onKey}
      />
      ${this._open?b`<ul class="list" role="listbox">
            ${e.length?y:b`<li class="empty">–</li>`}
            ${e.map((n,o)=>b`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${o===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${i=>i.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?b`<small>${n.id}</small>`:y}
              </li>`)}
            ${this.leftOut>0?b`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:y}
          </ul>`:y}
    </div>`}static styles=[Fe,St`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",gi);var pc=new URL(import.meta.url),uc=new URL("./neonplan3d-3d.js?v=e1898a542370",pc).href,wa;function _i(){return wa??=import(uc),wa}function fe(a,t){if(!be(t))return zt(a,`furn_${t}`);let e=at(t);return e?Wt(e):zt(a,"pack_missing_item")}var bi=class extends _t{static properties={hass:{attribute:!1},packs:{attribute:!1},_packMsg:{state:!0},_license:{state:!0},_licenseKey:{state:!0},_licenseBusy:{state:!0},_licenseMsg:{state:!0}};licenseLoading=!1;freshUpdates=null;constructor(){super(),this._packMsg=null,this._license=null,this._licenseKey="",this._licenseBusy=null,this._licenseMsg=null}get isAdmin(){return this.hass?.user?.is_admin??!1}t(t,e){return zt(this.hass,t,e)}render(){let t=Rr();return b`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn fp3d-primary" href=${Tt(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_shop")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
          <a class="fp3d-btn" href=${le(this.hass?.language,"extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      ${this.renderUpdates()} ${this.renderSupporter()} ${this.renderOffers()} ${this.renderShop()}
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${Tn.filter(e=>yt(e)).map(e=>b`<div class="fp3d-ext-feature ${t.has(e)?"fp3d-ext-on":""} ${Xt(e)?"fp3d-ext-beta":""}">
              <b>${t.has(e)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${e}`)}</b>
              ${Xt(e)?b`<span class="fp3d-beta-tag">🧪 ${this.t(t.has(e)?"beta_yours":"beta_supporters")}</span>`:y}
              <span class="fp3d-sub">${this.t(`pro_feature_${e}`)}</span>
              ${Xt(e)?b`<span class="fp3d-sub">${this.t(t.has(e)?"beta_yours_hint":"beta_supporters_hint")}</span>`:y}
              <span class="fp3d-ext-links">
                ${t.has(e)?b`<span class="fp3d-ext-state">${this.t("ext_active")}</span>
                      ${Xt(e)?b`<a class="fp3d-ext-link" href=${Qo} target="_blank" rel="noopener">💬 ${this.t("beta_feedback")}</a>`:y}`:Xt(e)?b`<a class="fp3d-ext-link" href=${jn(this.hass?.language)} target="_blank" rel="noopener">💙 ${this.t("beta_become")}</a>`:b`<a class="fp3d-ext-link" href=${Tt(this.hass?.language)} target="_blank" rel="noopener">${this.t("ext_get")}</a>`}
                <a class="fp3d-ext-link" href=${le(this.hass?.language,e)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderPacks()}
    </div>`}async loadLicense(){if(!(!this.hass||this.licenseLoading)){this.licenseLoading=!0;try{this._license=await uo(this.hass)}catch{this._license=null}finally{this.licenseLoading=!1}}}async shopCall(t,e,n){this._licenseBusy=t,this._licenseMsg=null;try{this._license=await e(),n&&(this._licenseMsg={ok:!0,text:n})}catch(o){let{code:i,message:s}=o??{},r=`license_error_${i}`,l=this.t(r);this._licenseMsg={ok:!1,text:l===r?this.t("license_error_other",{detail:s??String(o)}):l}}finally{this._licenseBusy=null}}async installFromShop(t){if(!this.hass)return;let e=this.hass;await this.shopCall(t.id,async()=>{let n=await as(e,t.id);return this._packMsg={ok:!0,text:this.t("pack_imported",{name:n.name,publisher:n.publisher,n:n.items})},this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})),uo(e)})}renderUpdates(){let t=this._license;return t?.active?(this.freshUpdates||(this.freshUpdates=ts(t.updates??[]),es(t.updates??[])),this.freshUpdates.length?b`<section class="fp3d-ext-card fp3d-updates">
      ${this.freshUpdates.map(e=>b`<p>✨ ${e.added>0?this.t("pack_updated_added",{name:ht(e),release:e.release,n:e.added}):this.t("pack_updated",{name:ht(e),release:e.release})}</p>`)}
    </section>`:y):y}renderSupporter(){let t=this._license?.active?this._license.supporter:null;return t?b`<section class="fp3d-ext-card fp3d-offers">
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
        <a class="fp3d-btn fp3d-primary" href=${Qo} target="_blank" rel="noopener">💬 ${this.t("supporter_open")}</a>
      </div>
      <p class="fp3d-sub">${this.t("supporter_how",{code:t.code})}</p>
    </section>`:y}renderOffers(){let t=this._license;if(!t?.active)return y;let e=[...t.offers??[]].sort((o,i)=>Number(i.new)-Number(o.new)),n=t.loyalty??null;return!e.length&&!n?y:(Qi(e),this.dispatchEvent(new CustomEvent("offers-seen",{bubbles:!0,composed:!0})),b`<section class="fp3d-ext-card fp3d-offers">
      <h3>${this.t("offers_title")}</h3>
      ${n?b`<div class="fp3d-loyalty">
            <span>🎁 ${this.t("offers_loyalty",{percent:n.percent})}</span>
            <code>${n.code}</code>
            <button
              class="fp3d-btn"
              @click=${async()=>{try{await navigator.clipboard.writeText(n.code),this._licenseMsg={ok:!0,text:this.t("license_copied")}}catch{}}}
            >
              ${this.t("license_copy")}
            </button>
          </div>`:y}
      <div class="fp3d-offer-grid">
        ${e.map(o=>b`<a class="fp3d-offer" href=${ns(o.url,n)} target="_blank" rel="noopener">
            ${o.image?b`<img src=${o.image} alt="" loading="lazy" />`:b`<div class="fp3d-offer-ph">✦</div>`}
            <div class="fp3d-offer-body">
              <b>${ht(o)}</b>
              ${o.new?b`<span class="fp3d-offer-new">${this.t("offers_new")}</span>`:y}
              <span class="fp3d-offer-kind">${this.t(`offers_kind_${o.kind}`)}${o.price?` \xB7 ${o.price}`:""}</span>
              ${o.teaser?b`<span class="fp3d-sub">${o.teaser}</span>`:y}
            </div>
          </a>`)}
      </div>
    </section>`)}renderShop(){let t=this._license;if(!this.isAdmin||!this.hass)return y;if(!t)return this.loadLicense(),y;let e=this.hass,n=this._licenseBusy,o=t.checked_at?new Date(t.checked_at*1e3).toLocaleString(e.language):null;return b`<div class="fp3d-shop fp3d-ext-card">
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
      ${t.active?b`<div class="fp3d-shop-row">
              <span>${this.t("license_active",{name:t.licensee??"",key:t.key_hint??""})}</span>
              ${o?b`<span class="fp3d-sub">${this.t("license_checked",{time:o})}</span>`:y}
              <button class="fp3d-btn" ?disabled=${!!n} @click=${()=>this.shopCall("refresh",()=>is(e),this.t("license_refreshed"))}>
                ${n==="refresh"?"\u2026":this.t("license_refresh")}
              </button>
              <button class="fp3d-btn fp3d-danger" ?disabled=${!!n} @click=${()=>confirm(this.t("license_remove_confirm"))&&this.shopCall("remove",()=>os(e))}>
                ${this.t("license_remove")}
              </button>
            </div>
            ${t.error?b`<p class="fp3d-sub fp3d-pack-error">${this.t(`license_error_${t.error}`)}</p>`:y}
            ${t.packs.length?t.packs.map(i=>{let s=i.installed===null?"install":i.installed<i.release?"update":"installed";return b`<div class="fp3d-pack">
                    <div>
                      <b>${ht(i)}</b>
                      <span class="fp3d-sub">${s==="installed"?this.t("license_installed",{release:i.release}):s==="update"?this.t("license_update_available",{release:i.release}):this.t("license_not_installed")}</span>
                    </div>
                    ${s==="installed"?y:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!!n} @click=${()=>this.installFromShop(i)}>
                          ${n===i.id?"\u2026":this.t(s==="update"?"license_update":"license_install")}
                        </button>`}
                  </div>`}):b`<p class="fp3d-sub">${this.t("license_none")}</p>`}`:b`<div class="fp3d-shop-row">
            <input
              type="text"
              class="fp3d-shop-key"
              placeholder="NP-XXXX-XXXX-XXXX-XXXX"
              autocomplete="off"
              spellcheck="false"
              .value=${this._licenseKey}
              @input=${i=>this._licenseKey=i.target.value}
              @keydown=${i=>{i.key==="Enter"&&this._licenseKey.trim()&&this.shopCall("activate",()=>ho(e,this._licenseKey),this.t("license_activated"))}}
            />
            <button class="fp3d-btn fp3d-primary" ?disabled=${!!n||!this._licenseKey.trim()} @click=${()=>this.shopCall("activate",()=>ho(e,this._licenseKey),this.t("license_activated"))}>
              ${n==="activate"?"\u2026":this.t("license_activate")}
            </button>
          </div>`}
      ${this._licenseMsg?b`<p class="fp3d-sub ${this._licenseMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._licenseMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("license_hint")} <a href=${t.shop_url} target="_blank" rel="noopener">${this.t("license_shop")}</a></p>
    </div>`}renderPacks(){let t=this.packs??[];return b`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${t.map(e=>b`<div class="fp3d-pack">
          <div>
            <b>${ht(e)}</b>
            <span class="fp3d-sub">${e.features?.length?this.t("pack_features",{publisher:e.publisher,n:e.features.length}):this.t("pack_by",{publisher:e.publisher,n:e.items.length})}</span>
            ${e.licensee?b`<span class="fp3d-sub">${this.t("pack_licensed",{name:e.licensee})}${e.release&&e.release>1?` \xB7 v${e.release}`:""}</span>`:y}
            ${(e.features??[]).some(n=>!Ir(n))?b`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:y}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(e)}>${this.t("pack_remove")}</button>
        </div>`)}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${e=>this.importPackFile(e)} />
      </label>
      ${this._packMsg?b`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let o=[],i=[];for(let r of n)try{let l=await Ji(this.hass,await r.text());o.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},p=`pack_error_${c}`,h=this.t(p,{detail:d??String(l)});i.push(`${r.name}: ${h===p?this.t("pack_error_other",{detail:d??String(l)}):h}`)}o.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:o.length,total:n.length})]:[];this._packMsg={ok:i.length===0,text:[...s,...o,...i].join(" \xB7 ")}}async deletePack(t){!this.hass||!confirm(this.t("pack_remove_confirm",{name:ht(t)}))||(await Yi(this.hass,t.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[Fe,Jn,St`
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
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",bi);var vi=10,ka=new Set(["vertex","room","device","opening","furniture","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),Ma=100,Sa=/^(switch|input_boolean)\./,Yn=10,M=a=>Math.round(a*1e3)/1e3,Pa=.06;function Re(a,t,e){let[n,,o]=Kt(a,t,0,e);return[M(n),M(o)]}function yi(a,t){let e=ft(a,t),n=0;for(let o=1;o<e.length;o++)n+=Math.hypot(e[o][0]-e[o-1][0],e[o][1]-e[o-1][1],e[o][2]-e[o-1][2]);return n}var Ea={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},fc=new Set(["parking","stairwell","rug","grid_point"]),xi=class extends _t{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;cableCache=null;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let n=localStorage.getItem("neonplan3d.library");n&&(this._libOpen=new Set(JSON.parse(n)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._wallSel=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("neonplan3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let t=!1;try{t=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let n=Number(localStorage.getItem("neonplan3d.editorSplit"));n>=20&&n<=80&&(this._splitRatio=n/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=e,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return zt(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),this.resizeObserver?.disconnect()}willUpdate(t){t.has("packs")&&ls(this.packs??[]),t.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(t.has("_split")&&this._split||t.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),t.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),t.has("building")&&this.building!==this._doc&&(this._doc=this.building,this._doc3d=this.building,this._doc.floors.some(e=>e.id===this._floorId)||(this._floorId=this._doc.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null))}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let o=e.getBoundingClientRect(),i=r=>{this._splitRatio=Math.min(.8,Math.max(.2,(r.clientX-o.left)/o.width))},s=()=>{n.removeEventListener("pointermove",i),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",i),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(t){let{id:e,x:n,z:o}=t.detail,i=this._doc.settings.wall_interior;this.change(s=>{for(let r of s.floors){let l=r.furniture.find(g=>g.id===e);if(!l)continue;let[c,d]=Bo(r,l.x,l.z,n,o),[p,h]=qo(r,l,c,d,i),u=Je(r,l,i),f=u?Math.hypot(u.x-l.x,u.z-l.z):1/0;Object.assign(l,{x:p,z:h});let m=Je(r,l,i);m&&Math.hypot(m.x-p,m.z-h)<=f+.01&&Object.assign(l,m)}})}onDeviceMoved3d(t){let{id:e,x:n,z:o}=t.detail;this.change(i=>{for(let s of i.floors){let r=s.placements.find(d=>d.entity_id===e);if(!r)continue;let[l,c]=Bo(s,r.x,r.z,n,o);Object.assign(r,{x:l,z:c})}})}render3dBar(){if(!this.isAdmin)return y;let t=this.furnitureItem,e=this.device;if(t){let n=ve(t),o=(i,s,r=.05)=>b`<label class="fp3d-3d-size" title=${this.t(`size_${i}`)}
        >${s}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${r}
          .value=${this.unit==="imperial"?ae(t[i]):String(Math.round(t[i]*100)/100)}
          @change=${l=>{let c=this.readLen(l.target.value);c!==null&&c>=r&&this.updateFurniture({[i]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return b`<div class="fp3d-3d-bar">
        <span>${fe(this.hass,t.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${n?b`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?ae(t.mount_y??bt(this.floor,t)):String(Math.round((t.mount_y??bt(this.floor,t))*100)/100)}
                @change=${i=>{let s=this.readLen(i.target.value);s!==null&&s>=0&&this.updateFurniture({mount_y:Math.round(Math.min(vi,s)*1e3)/1e3})}}
              />
            </label>`:y}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let n=K(e.entity_id),o=n==="light",i=n?In(n,this.floor?.height??2.5,o?e.mount??"ceiling":null):1;return b`<div class="fp3d-3d-bar">
        <span>${Z(this.hass,e.entity_id)}</span>
        ${o?b`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${s=>this.updateDevice({mount:s.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(s=>b`<option value=${s} ?selected=${s===(e.mount??"ceiling")}>${this.t(`lamp_${s}`)}</option>`)}
            </select>`:y}
        <label class="fp3d-3d-size" title=${this.t("marker_height")}
          >${this.t("size_short_h")}
          <input
            type="number"
            inputmode="decimal"
            step="0.05"
            min="0"
            .value=${String(Math.round((e.y??i)*100)/100)}
            @change=${s=>{let r=parseFloat(s.target.value.replace(",","."));Number.isFinite(r)&&r>=0&&this.updateDevice({y:Math.round(r*1e3)/1e3})}}
          />
        </label>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:(((e.rotation??0)-45)%360+360)%360})}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.updateDevice({rotation:((e.rotation??0)+45)%360%360})}>↻ 45°</button>
        ${this.fixButton("device",e.entity_id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteItem("device",e.entity_id)}>${this.t("delete")}</button>
      </div>`}return y}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t?.moved&&this.pushHistory(t.base)}};grab3dStart(t){let e=this._doc,n=Y(e),o=null,i=(r,l,c,d,p=!1)=>{if(!c||p)return;let h=di(c,t.o,t.d);!h||!ra(c,d,h.u,h.s)||o&&o.t<=h.t||(o={id:r,win:l,t:h.t,du:h.u-d.u,ds:h.s-d.v})};if(this._tool==="energy")for(let r of e.settings.roof.solar??[])i(r.id,!1,ut(e,r,n),r,!!r.locked);if(this._tool==="roof")for(let r of e.settings.roof.windows??[])i(r.id,!0,n.find(l=>l.key===r.face)??null,Ie(r),!!r.locked);if(!o)return!1;let s=o;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:e,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(t){let e=this.grab3d;if(!e)return;let n=e.base,o=e.win?n.settings.roof.windows?.find(u=>u.id===e.id):void 0,i=e.win?o?Ie(o):void 0:n.settings.roof.solar?.find(u=>u.id===e.id);if(!i)return;let s=ut(n,i),r=s?.unbounded?[s]:e.win?Y(n):[...Y(n),...It(n)],l=null;for(let u of r){let f=di(u,t.o,t.d);f&&sa(u,f.u,f.s)&&(!l||f.t<l.t)&&(l={face:u,...f})}if(!l)return;let c=l.face,d=.05,p=u=>M(Math.round(u/d)*d),h=ze(c,{...i,face:c.key,u:p(l.u-e.du),v:p(l.s-e.ds),tilt:c.flat?i.tilt??15:i.tilt});e.moved=!0,this.change(u=>{if(e.win){let m=u.settings.roof.windows?.find(g=>g.id===e.id);m&&Object.assign(m,{face:c.key,...h});return}let f=u.settings.roof.solar?.find(m=>m.id===e.id);f&&Object.assign(f,{face:c.key,...h},c.flat&&f.tilt==null?{tilt:15}:{})},e.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return b`<div class="fp3d-editor-3d">
      ${this.houseTool?y:b`<div class="fp3d-seg fp3d-3d-walls">
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
        .furnishTypes=${this._tool==="energy"?Nt:this._tool==="roof"?[]:null}
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
    </div>`}setWall3d(t){this._wall3d=t;try{localStorage.setItem("neonplan3d.walls3d",t)}catch{}}updated(){for(let e of this.renderRoot.querySelectorAll("select option[selected]"))e.selected||(e.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>this.renderRoot.querySelector("fp3d-view3d")?.resetView(),250));let t=this.floor?.background;if(t&&!this._images[t.image_id]&&!this.loadingImages.has(t.image_id)&&this.loadImage(t.image_id),this.furnitureItem?.pictures)for(let e of this.storedPictures())!this._images[e]&&!this.loadingImages.has(e)&&this.loadImage(e)}get floor(){return this._doc?.floors.find(t=>t.id===this._floorId)}get room(){return this.floor?.rooms.find(t=>t.id===this._roomId)}get isAdmin(){return this.hass?.user?.is_admin??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>Ma&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let o=structuredClone(e),i=o.floors.find(s=>s.id===this._floorId);!i&&this._floorId||(t(o,i),this.setDoc(o,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){this._doc=t,t.floors.some(e=>e.id===this._floorId)||(this._floorId=t.floors[0]?.id??null),this.floor?.rooms.some(e=>e.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:o}=this._view;return[t[0]*e+n,t[1]*e+o]}toWorld(t,e){let{scale:n,ox:o,oy:i}=this._view;return[(t-o)/n,(e-i)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){let t=this.floor?.rooms.flatMap(r=>r.points)??[];if(this._tool==="roof")for(let r of this._doc.settings.roof.sections??[])t.push([r.x0,r.z0],[r.x1,r.z1]);let e=t.length?it(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,o=e.x1-e.x0+2*n,i=e.z1-e.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/o,this._size.h/i)));this._view={scale:s,ox:this._size.w/2-(e.x0+e.x1)/2*s,oy:this._size.h/2-(e.z0+e.z1)/2*s},this.fittedView=this._view}showPoint(t,e){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-t*n,oy:this._size.h/2-e*n}}zoomAt(t,e,n){let{scale:o,ox:i,oy:s}=this._view,r=Math.max(8,Math.min(600,o*t)),l=r/o;this._view={scale:r,ox:e-(e-i)*l,oy:n-(n-s)*l}}snap(t,e,n=!1){if(this._guides={},n)return t;let o=Yn/this._view.scale,i=this.floor?.rooms??[],s=[];for(let f of i)f.points.forEach((m,g)=>{e&&f.id===e.roomId&&(e.index===void 0||e.index===g)||s.push(m)});let r=null,l=o;for(let f of s){let m=Math.hypot(f[0]-t[0],f[1]-t[1]);m<l&&(l=m,r=f)}if(r)return this._guides={point:r},[r[0],r[1]];for(let f of i)if(!(e&&f.id===e.roomId))for(let m=0;m<f.points.length;m++){let g=f.points[m],_=f.points[(m+1)%f.points.length],v=_[0]-g[0],$=_[1]-g[1],k=v*v+$*$;if(k<1e-9)continue;let x=((t[0]-g[0])*v+(t[1]-g[1])*$)/k;if(x<=0||x>=1)continue;let A=[g[0]+x*v,g[1]+x*$],P=Math.hypot(A[0]-t[0],A[1]-t[1]),w=this._doc.settings.grid;Math.abs($)<1e-9&&(A[0]=Math.min(Math.max(Math.round(A[0]/w)*w,Math.min(g[0],_[0])),Math.max(g[0],_[0]))),Math.abs(v)<1e-9&&(A[1]=Math.min(Math.max(Math.round(A[1]/w)*w,Math.min(g[1],_[1])),Math.max(g[1],_[1]))),P<l&&(l=P,r=A)}if(r)return this._guides={point:r},[M(r[0]),M(r[1])];let c=this._doc.settings.grid,d=[M(Math.round(t[0]/c)*c),M(Math.round(t[1]/c)*c)],p=o,h=o,u={};for(let f of s)Math.abs(f[0]-t[0])<p&&(p=Math.abs(f[0]-t[0]),d[0]=f[0],u.x=f[0]),Math.abs(f[1]-t[1])<h&&(h=Math.abs(f[1]-t[1]),d[1]=f[1],u.z=f[1]);return this._guides=u,d}onPointerDown(t){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let e=this.localPoint(t),n=t.target;this.pressStart=e,this.pressTimer=window.setTimeout(()=>{let o=this.drag;o&&"moved"in o&&o.moved||(this.drag=null,this.openContext(n,e))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"||e.kind==="aim"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&ka.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){this.drag={kind:"pan",last:n};return}let o=this.toWorld(...n),i=t.target;if(this._wallPick){this.pickWall(o);return}if(this._bgLevel&&this.isAdmin&&this.floor?.background){let x=[...this._bgLevel,o];x.length<2?this._bgLevel=x:this.applyBgLevel(x[0],x[1]);return}if(this.bgHandles()&&this.floor.background&&i.closest("[data-bg-rotate]")){let x=this.floor.background,A=this._images[x.image_id],P=x.width*(A?.aspect??1),w=[x.x+x.width/2,x.z+P/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(o[1]-w[1],o[0]-w[0]),rot:x.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&this.floor?.background){this._bgRuler=[...this._bgRuler,o];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(i.closest("[data-bg-handle]")||i.closest("[data-bg]"))){let x=this.floor.background;this.drag=i.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:o,bx:x.x,bz:x.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&this.floor?.background){let x=this.floor.background;if(i.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(i.closest("[data-bg]")){this.drag={kind:"bgmove",start:o,bx:x.x,bz:x.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let x=this.snap(o,void 0,t.altKey);this.drag={kind:"freewall",start:x,end:x};return}if(this._tool==="pool"&&this.poolDown(t,i,o,n))return;if(this._tool==="roof"||this._tool==="energy"){let x=i.closest("[data-roof-corner]")?.getAttribute("data-roof-corner"),A=i.closest("[data-roof-vertex]")?.getAttribute("data-roof-vertex"),P=i.closest("[data-roof]")?.getAttribute("data-roof"),w=this._tool==="energy"?i.closest("[data-energy-device]")?.getAttribute("data-energy-device"):null;if(w){this._solarId=null,this.selectItem("furniture",w),this.drag=this.isAdmin?{kind:"furniture",id:w,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&i.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let O=i.closest("[data-cable-pt]")?.getAttribute("data-cable-pt"),T=R=>!!this._doc.settings.roof.cables?.find(j=>j.id===R)?.locked;if(O&&this.isAdmin&&!T(O.slice(0,O.lastIndexOf(":")))){let R=O.lastIndexOf(":"),j=O.slice(0,R),D=Number(O.slice(R+1));if(t.detail>=2){this.change(H=>{let B=H.settings.roof.cables?.find(q=>q.id===j);B&&B.points.length>1&&B.points.splice(D,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:j,index:D,base:this._doc,moved:!1};return}let V=i.closest("[data-cable-line]")?.getAttribute("data-cable-line");if(V&&this.isAdmin&&!T(V)){let R=Number(i.closest("[data-cable-line]")?.getAttribute("data-cable-seg")??0),j=this._doc;this.change(D=>{let H=D.settings.roof.cables?.find(B=>B.id===V);H&&H.points.splice(R,0,[M(o[0]),M(o[1])])}),this.drag={kind:"cablept",id:V,index:R,base:j,moved:!0};return}let E=i.closest("[data-cable]")?.getAttribute("data-cable");if(E){if(this._cableId=E,this.isAdmin&&this._floorId&&!this._doc.settings.roof.cables?.some(R=>R.id===E)){let R=this._doc;this.layCable(E);let j=this._doc.settings.roof.cables?.find(H=>H.id===E),D=this.cableSegments().filter(H=>H.key===E);if(j&&D.length){let H=[[D[0].a[0],D[0].a[2]],...j.points,[D[D.length-1].b[0],D[D.length-1].b[2]]],B=0,q=1/0;for(let U=0;U+1<H.length;U++){let et=mc(o,H[U],H[U+1]);et<q&&(q=et,B=U)}this.change(U=>{let et=U.settings.roof.cables?.find(dt=>dt.id===E);et&&et.points.splice(B,0,[M(o[0]),M(o[1])])}),this.drag={kind:"cablept",id:E,index:B,base:R,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let z=this._tool==="energy"?i.closest("[data-solar]")?.getAttribute("data-solar"):null,S=this._tool==="energy"?i.closest("[data-solar-turn]")?.getAttribute("data-solar-turn"):null;if(S&&this.isAdmin){this.drag={kind:"solarturn",id:S,base:this._doc,moved:!1};return}if(z){let O=i.closest("[data-cell]")?.getAttribute("data-cell");if(this._solarPick&&z===this._solarId&&O&&this.isAdmin){this.toggleSolarCell(O),this.drag={kind:"pan",last:n};return}z!==this._solarId&&(this._solarPick=!1),this._solarId=z,this._roofId=null;let T=this._doc.settings.roof.solar?.find(j=>j.id===z),V=T?ut(this._doc,T)??void 0:void 0,E=V?this.faceHit(V,o):null,R=T&&E?{du:E.u-T.u,ds:Number.isNaN(E.s)?0:E.s-T.v}:null;this.drag=this.isAdmin&&!T?.locked?{kind:"solarmove",id:z,start:o,startScreen:n,base:this._doc,moved:!1,grab:R}:{kind:"pan",last:n};return}let I=this._tool==="roof"?i.closest("[data-roofwin]")?.getAttribute("data-roofwin"):null;if(I){this._roofWinId=I,this._roofId=null;let O=this._doc.settings.roof.windows?.find(R=>R.id===I),T=O?Y(this._doc).find(R=>R.key===O.face):void 0,V=T?Wn(T,o):null,E=O&&V?{du:V.u-O.u,ds:V.s-O.v}:null;this.drag=this.isAdmin&&!O?.locked?{kind:"solarmove",id:I,start:o,startScreen:n,base:this._doc,moved:!1,grab:E,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let L=this._tool==="energy"?i.closest(".fp3d-energy-item")?.getAttribute("data-furniture"):null;if(L){this._solarId=null,this.selectItem("furniture",L),this.drag=this.isAdmin?{kind:"furniture",id:L,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(A&&this.isAdmin){let[O,T]=A.split(":");this.drag={kind:"roofvertex",id:O,index:Number(T),base:this._doc,moved:!1}}else if(x&&this.isAdmin){let[O,T,V]=x.split(":");this.drag={kind:"roofcorner",id:O,corner:[T==="1"?1:0,V==="1"?1:0],base:this._doc,moved:!1}}else if(P){let O=this.roofFixed(this._doc.settings.roof.sections?.find(T=>T.id===P));O&&this._roofId===P&&(this._fixedHint=!0),this._roofId=P,this.drag=this.isAdmin&&!O?{kind:"roofmove",id:P,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let O=this.snap(o,void 0,t.altKey);this.drag={kind:"rect",start:O,end:O,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this._outdoorFree||this._tool==="hole"){let x=this.snap(o,void 0,t.altKey);this.drag={kind:"rect",start:x,end:x,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}let r=i.closest("[data-device]");if(r&&this.isAdmin){this.drag={kind:"device",entityId:r.getAttribute("data-device"),start:o,startScreen:n,base:this._doc,moved:!1};return}let l=i.closest("[data-opening]");if(l){let x=l.getAttribute("data-opening");this.selectItem("opening",x),this.drag=this.isAdmin?{kind:"opening",id:x,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let c=i.closest("[data-resize]");if(c&&this.isAdmin){let[x,A,P]=c.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:x,corner:[A==="1"?1:-1,P==="1"?1:-1],base:this._doc,moved:!1};return}let d=i.closest("[data-rotate]");if(d&&this.isAdmin){this.drag={kind:"rotate",id:d.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let p=i.closest("[data-aim]");if(p&&this.isAdmin){this.drag={kind:"aim",entityId:p.getAttribute("data-aim"),base:this._doc,moved:!1};return}let h=i.closest("[data-furniture]");if(h&&!i.closest("[data-vertex], [data-mid]")){let x=h.getAttribute("data-furniture");this.selectItem("furniture",x),this.drag=this.isAdmin?{kind:"furniture",id:x,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let u=i.closest("[data-vertex]"),f=i.closest("[data-mid]");if(u&&this.room&&this.isAdmin){this._vertex=Number(u.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let x=Number(f.getAttribute("data-mid")),A=this.room.points,P=A[x],w=A[(x+1)%A.length],z=[M((P[0]+w[0])/2),M((P[1]+w[1])/2)],S=this._doc,I=this.room.id;this.change((L,O)=>{let T=O.rooms.find(E=>E.id===I);T.points.splice(x+1,0,z),T.wall_heights&&T.wall_heights.splice(x+1,0,T.wall_heights[x]??null),T.wall_thickness&&T.wall_thickness.splice(x+1,0,T.wall_thickness[x]??null);let V=Math.hypot(z[0]-P[0],z[1]-P[1]);for(let E of O.openings)E.room_id!==I||E.wall||(E.edge>x?E.edge+=1:E.edge===x&&E.offset>V&&(E.edge=x+1,E.offset=M(E.offset-V)))},S,!1),this._vertex=x+1,this.drag={kind:"vertex",roomId:I,index:x+1,base:S,moved:!0};return}let m=i.closest("[data-wall-end]");if(m&&this.isAdmin){let[x,A]=m.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:x,end:A,start:o,startScreen:n,base:this._doc,moved:!1};return}let g=i.closest("[data-free-wall]");if(g){let x=g.getAttribute("data-free-wall");this.selectItem("wall",x),this.drag=this.isAdmin?{kind:"wallmove",id:x,end:null,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let _=i.closest("[data-out-box]");if(_&&this.isAdmin){let[x,A]=_.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:x,corner:Number(A),base:this._doc,moved:!1};return}let v=i.closest("[data-out-vertex]");if(v&&this.isAdmin){let[x,A]=v.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:x,index:Number(A),base:this._doc,moved:!1};return}let $=i.closest("[data-outdoor]");if($&&!i.closest("[data-room]")&&!this.roomAt(o)){let x=$.getAttribute("data-outdoor");this.selectItem("outdoor",x),this.drag=this.isAdmin?{kind:"outdoor",id:x,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let k=i.closest("[data-room]")?.getAttribute("data-room")??this.roomAt(o);if(k){k!==this._roomId&&(this._vertex=null),this.selectItem("room",k),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:k,start:o,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){if(this.pressStart){let i=this.localPoint(t);Math.hypot(i[0]-this.pressStart[0],i[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&this.drag?.kind==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let i=this.pinchState();i&&(this.zoomAt(i.dist/Math.max(1,this.pinch.dist),...i.mid),this._view={...this._view,ox:this._view.ox+i.mid[0]-this.pinch.mid[0],oy:this._view.oy+i.mid[1]-this.pinch.mid[1]},this.pinch=i);return}let n=this.toWorld(...e),o=this.drag;if(!o){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(o.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-o.last[0],oy:this._view.oy+e[1]-o.last[1]},o.last=e;break;case"tap":(o.panning||Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])>6)&&(o.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-o.last[0],oy:this._view.oy+e[1]-o.last[1]}),o.last=e;break;case"rect":o.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let i=this.snap(n,void 0,t.altKey);t.shiftKey&&(i=Math.abs(i[0]-o.start[0])>Math.abs(i[1]-o.start[1])?[i[0],o.start[1]]:[o.start[0],i[1]]),o.end=i,this.requestUpdate();break}case"wallmove":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let i=(o.base.floors.find(r=>r.id===this._floorId)?.walls??[]).find(r=>r.id===o.id);if(!i)return;let s;if(o.end){let r=this.snap(n,void 0,t.altKey);s=o.end==="a"?{a:r,b:i.b}:{a:i.a,b:r}}else{let r=t.altKey?.01:this._doc.settings.grid,l=Math.round((n[0]-o.start[0])/r)*r,c=Math.round((n[1]-o.start[1])/r)*r;s={a:[M(i.a[0]+l),M(i.a[1]+c)],b:[M(i.b[0]+l),M(i.b[1]+c)]}}this.change((r,l)=>Object.assign((l.walls??[]).find(c=>c.id===o.id),s),o.base,!1);break}case"vertex":{let i=this.snap(n,{roomId:o.roomId,index:o.index},t.altKey);o.moved=!0,this.change((s,r)=>{r.rooms.find(l=>l.id===o.roomId).points[o.index]=i},o.base,!1);break}case"room":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.base.floors.find(c=>c.id===this._floorId)?.rooms.find(c=>c.id===o.roomId);if(!i)return;let s=this.roomDelta(i,[n[0]-o.start[0],n[1]-o.start[1]],t.altKey),r=o.base.floors.find(c=>c.id===this._floorId),l=new Set(r.placements.filter(c=>C([c.x,c.z],i.points)).map(c=>c.entity_id));this.change((c,d)=>{let p=d.rooms.find(h=>h.id===o.roomId);p.points=i.points.map(([h,u])=>[M(h+s[0]),M(u+s[1])]),d.placements=r.placements.map(h=>l.has(h.entity_id)?{...h,x:M(h.x+s[0]),z:M(h.z+s[1])}:h)},o.base,!1);break}case"roofmove":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let i=t.altKey?.01:this._doc.settings.grid,s=M(Math.round((n[0]-o.start[0])/i)*i),r=M(Math.round((n[1]-o.start[1])/i)*i),l=o.base.settings.roof.sections?.find(c=>c.id===o.id);if(!l)return;this.change(c=>{let d=c.settings.roof.sections?.find(p=>p.id===o.id);d&&(Object.assign(d,{x0:M(l.x0+s),x1:M(l.x1+s),z0:M(l.z0+r),z1:M(l.z1+r)}),l.points&&(d.points=l.points.map(([p,h])=>[M(p+s),M(h+r)])))},o.base,!1);break}case"solarturn":{o.moved=!0;let i=o.base.settings.roof.solar?.find(h=>h.id===o.id),s=i?ut(o.base,i):null;if(!i||!s)return;let[r,l]=on(s,i),c=Math.atan2(n[0]-r,-(n[1]-l))*180/Math.PI,d=t.altKey?1:15;c=Math.round(c/d)*d;let p=nn(o.base,i,c);this.change(h=>{let u=h.settings.roof.solar?.find(f=>f.id===o.id);u&&Object.assign(u,p)},o.base,!1);break}case"solarmove":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.win?o.base.settings.roof.windows?.find(g=>g.id===o.id):void 0,s=o.win?i?Ie(i):void 0:o.base.settings.roof.solar?.find(g=>g.id===o.id),r=o.win?Y(o.base):[...Y(o.base),...this._floorId?It(o.base,this._floorId):[]],l=s?ut(o.base,s,r):null;if(!s||!l)return;let c=t.altKey?.01:.05,d=g=>M(Math.round(g/c)*c),p=l.unbounded?null:ta(r,n),h=l,u,f;if(p&&o.grab)h=p.face,u=d(p.u-o.grab.du),f=Number.isNaN(p.s)?p.face.key===s.face?s.v:Math.max(0,p.face.ls-1.5):d(p.s-o.grab.ds);else{let g=n[0]-o.start[0],_=n[1]-o.start[1],v=[l.es[0],l.es[2]],$=v[0]*v[0]+v[1]*v[1]||1;u=d(s.u+g*l.eu[0]+_*l.eu[2]),f=d(s.v+(g*v[0]+_*v[1])/$)}let m=ze(h,{...s,face:h.key,u,v:f,tilt:h.flat?s.tilt??15:s.tilt});this.change(g=>{if(o.win){let v=g.settings.roof.windows?.find($=>$.id===o.id);v&&Object.assign(v,{face:h.key,...m});return}let _=g.settings.roof.solar?.find(v=>v.id===o.id);_&&Object.assign(_,{face:h.key,...m},h.flat&&_.tilt==null?{tilt:15}:{})},o.base,!1);break}case"outbox":{o.moved=!0;let i=this.snap(n,void 0,t.altKey),s=o.base.floors.find(_=>_.id===this._floorId)?.outdoor.find(_=>_.id===o.id);if(!s?.pool_shape)return;let r=it(s.points),c=[[r.x0,r.z0],[r.x1,r.z0],[r.x1,r.z1],[r.x0,r.z1]][(o.corner+2)%4],d=i[0]-c[0],p=i[1]-c[1];if(s.pool_shape==="round"){let _=Math.max(Math.abs(d),Math.abs(p),.5);d=Math.sign(d||1)*_,p=Math.sign(p||1)*_}else d=Math.sign(d||1)*Math.max(Math.abs(d),.5),p=Math.sign(p||1)*Math.max(Math.abs(p),.5);let h=Math.min(c[0],c[0]+d),u=Math.max(c[0],c[0]+d),f=Math.min(c[1],c[1]+p),m=Math.max(c[1],c[1]+p),g=s.pool_shape;this.change((_,v)=>{let $=v.outdoor.find(k=>k.id===o.id);$&&($.points=wn(g,M(h),M(f),M(u),M(m)))},o.base,!1);break}case"pipept":{o.moved=!0;let i=this.snap(n,void 0,t.altKey);this.change((s,r)=>{let l=r.outdoor.find(c=>c.id===o.pool)?.pool?.pipes?.find(c=>c.id===o.pipe);l&&(l.points[o.index]=[M(i[0]),M(i[1])])},o.base,!1);break}case"poolport":{o.moved=!0;let i=this.snap(n,void 0,t.altKey);this.change((s,r)=>{let l=r.outdoor.find(h=>h.id===o.pool),c=l?.pool?.ports?.find(h=>h.id===o.id);if(!l||!c)return;let[d,p]=c.kind==="skimmer"||c.kind==="inlet"?Cn(l.points,i):i;c.x=M(d),c.z=M(p)},o.base,!1);break}case"pooljoint":{if(!o.moved&&Math.hypot(n[0]-o.start[0],n[1]-o.start[1])<.05)break;o.moved=!0;let i=o.base.floors.flatMap(r=>r.outdoor).find(r=>r.id===o.pool)?.pool?.joints?.find(r=>r.id===o.id);if(!i)break;let s=this.snap([i.x+n[0]-o.start[0],i.z+n[1]-o.start[1]],void 0,t.altKey);if(i.kind==="wall"){let r=[-(i.nz??0),i.nx??0],l=(s[0]-i.x)*r[0]+(s[1]-i.z)*r[1];s=[i.x+r[0]*l,i.z+r[1]*l]}this.change(r=>{let l=r.floors.flatMap(c=>c.outdoor).find(c=>c.id===o.pool)?.pool?.joints?.find(c=>c.id===o.id);l&&([l.x,l.z]=[M(s[0]),M(s[1])])},o.base,!1);break}case"pooldev":{if(!o.moved&&Math.hypot(n[0]-o.start[0],n[1]-o.start[1])<.05)break;o.moved=!0;let i=o.base.floors.flatMap(r=>r.furniture).find(r=>r.id===o.id);if(!i)break;let s=this.snap([i.x+n[0]-o.start[0],i.z+n[1]-o.start[1]],void 0,t.altKey);this.change(r=>{let l=r.floors.flatMap(c=>c.furniture).find(c=>c.id===o.id);l&&([l.x,l.z]=[M(s[0]),M(s[1])])},o.base,!1);break}case"outvertex":{o.moved=!0;let i=this.snap(n,void 0,t.altKey),s=o.base.floors.find(l=>l.id===this._floorId)?.outdoor.find(l=>l.id===o.id);if(!s)return;let r=En(s.points);this.change((l,c)=>{let d=c.outdoor.find(f=>f.id===o.id);if(!d)return;let p=s.points.map(f=>[...f]),h=o.index,u=s.points[h];p[h]=[M(i[0]),M(i[1])],r&&s.points.forEach((f,m)=>{m!==h&&(Math.abs(f[0]-u[0])<1e-6&&(p[m][0]=M(i[0])),Math.abs(f[1]-u[1])<1e-6&&(p[m][1]=M(i[1])))}),d.points=p},o.base,!1);break}case"cablept":{o.moved=!0;let i=this.snap(n,void 0,t.altKey);this.change(s=>{let r=s.settings.roof.cables?.find(l=>l.id===o.id);r&&r.points[o.index]&&(r.points[o.index]=[M(i[0]),M(i[1])])},o.base,!1);break}case"holopt":{o.moved=!0;let i=this.snap(n,void 0,t.altKey);this.change(s=>s.settings.roof.hologram={...s.settings.roof.hologram??$n,place:"free",x:M(i[0]),z:M(i[1])},o.base,!1);break}case"bgmove":{o.moved=!0;let i=n[0]-o.start[0],s=n[1]-o.start[1];this.change((r,l)=>{l.background&&(l.background.x=M(o.bx+i),l.background.z=M(o.bz+s))},o.base,!1);break}case"bgrotate":{o.moved=!0;let i=this.floor?.background,s=i?this._images[i.image_id]:void 0;if(!i||!s)break;let r=i.width*s.aspect,l=[i.x+i.width/2,i.z+r/2],c=Math.atan2(n[1]-l[1],n[0]-l[0]),d=o.rot+(c-o.start)*180/Math.PI;d=t.shiftKey?Math.round(d/15)*15:Math.round(d*10)/10,d=((d+180)%360+360)%360-180,this.change((p,h)=>{h.background&&(h.background.rotation=d)},o.base,!1);break}case"bgscale":{o.moved=!0;let i=this.floor?.background,s=i?this._images[i.image_id]:void 0;if(!i||!s)break;let[r]=this.bgLocal(i,n,s.aspect),l=Math.max(.5,M(r));this.change((c,d)=>{d.background&&(d.background.width=l)},o.base,!1);break}case"roofvertex":{o.moved=!0;let i=this.snap(n,void 0,t.altKey);this.change(s=>{let r=s.settings.roof.sections?.find(l=>l.id===o.id);!r?.points||o.index>=r.points.length||(r.points[o.index]=[M(i[0]),M(i[1])],Object.assign(r,Zo(r.points)))},o.base,!1);break}case"roofcorner":{o.moved=!0;let i=this.snap(n,void 0,t.altKey);this.change(s=>{let r=s.settings.roof.sections?.find(l=>l.id===o.id);r&&(o.corner[0]?r.x1=M(i[0]):r.x0=M(i[0]),o.corner[1]?r.z1=M(i[1]):r.z0=M(i[1]))},o.base,!1);break}case"opening":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.base.floors.find(c=>c.id===this._floorId),s=i?.openings.find(c=>c.id===o.id),r=s&&i?we(s,i.rooms,i.walls??[]):null;if(!s||!r)return;let l=this.offsetOnEdge(r.room,r.edge,n,s.width,t.altKey);this.change((c,d)=>Object.assign(d.openings.find(p=>p.id===o.id),{offset:l}),o.base,!1);break}case"furniture":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.base.floors.find(p=>p.id===this._floorId)?.furniture.find(p=>p.id===o.id);if(!i)return;let s=t.altKey?.01:this._doc.settings.grid,r=M(Math.round((i.x+n[0]-o.start[0])/s)*s),l=M(Math.round((i.z+n[1]-o.start[1])/s)*s),c=i.rotation,d=t.altKey?null:this.snapToWall({...i,x:r,z:l});d&&({x:r,z:l,rotation:c}=d),this.change((p,h)=>Object.assign(h.furniture.find(u=>u.id===o.id),{x:r,z:l,rotation:c}),o.base,!1);break}case"outdoor":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.base.floors.find(c=>c.id===this._floorId)?.outdoor.find(c=>c.id===o.id);if(!i)return;let s=t.altKey?.01:this._doc.settings.grid,r=Math.round((n[0]-o.start[0])/s)*s,l=Math.round((n[1]-o.start[1])/s)*s;this.change((c,d)=>{let p=d.outdoor.find(h=>h.id===o.id);p.points=i.points.map(([h,u])=>[M(h+r),M(u+l)]),p.pool?.ports&&i.pool?.ports&&(p.pool.ports=i.pool.ports.map(h=>({...h,x:M(h.x+r),z:M(h.z+l)})))},o.base,!1);break}case"resize":{o.moved=!0;let i=o.base.floors.find(r=>r.id===this._floorId)?.furniture.find(r=>r.id===o.id);if(!i)return;let s=zs(i,o.corner,n,t.altKey?.01:this._doc.settings.grid);this.change((r,l)=>Object.assign(l.furniture.find(c=>c.id===o.id),s),o.base,!1);break}case"rotate":{o.moved=!0;let i=o.base.floors.find(l=>l.id===this._floorId)?.furniture.find(l=>l.id===o.id);if(!i)return;let s=Math.atan2(-(n[0]-i.x),n[1]-i.z)*180/Math.PI,r=t.altKey?1:15;s=(Math.round(s/r)*r%360+360)%360,this.change((l,c)=>Object.assign(c.furniture.find(d=>d.id===o.id),{rotation:s}),o.base,!1);break}case"aim":{o.moved=!0;let i=o.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===o.entityId);if(!i)return;let s=Math.atan2(-(n[0]-i.x),n[1]-i.z)*180/Math.PI,r=t.altKey?1:5;s=(Math.round(s/r)*r%360+360)%360;let l=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-i.x,n[1]-i.z)*10)/10));this.change((c,d)=>Object.assign(d.placements.find(p=>p.entity_id===o.entityId),{rotation:s,reach:l}),o.base,!1);break}case"device":{if(!o.moved&&Math.hypot(e[0]-o.startScreen[0],e[1]-o.startScreen[1])<5)return;o.moved=!0;let i=o.base.floors.find(c=>c.id===this._floorId)?.placements.find(c=>c.entity_id===o.entityId);if(!i)return;let s=t.altKey?.01:this._doc.settings.grid,r=M(Math.round((i.x+n[0]-o.start[0])/s)*s),l=M(Math.round((i.z+n[1]-o.start[1])/s)*s);this.change((c,d)=>Object.assign(d.placements.find(p=>p.entity_id===o.entityId),{x:r,z:l}),o.base,!1);break}}}onPointerUp(t){if(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let e=this.drag;if(this.drag=null,!e||t.type==="pointercancel"){e&&ka.has(e.kind)&&"moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base);return}let n=this.localPoint(t);switch(e.kind){case"freewall":{Math.hypot(e.end[0]-e.start[0],e.end[1]-e.start[1])>=.2&&this.addFreeWall(e.start,e.end),this._guides={};break}case"wallmove":e.moved&&this.pushHistory(e.base),this._guides={};break;case"rect":{let[o,i]=e.start,[s,r]=e.end;if(Math.abs(s-o)>=.2&&Math.abs(r-i)>=.2){let l=[Math.min(o,s),Math.min(i,r)],c=[Math.max(o,s),Math.max(i,r)],d=[l,[c[0],l[1]],c,[l[0],c[1]]];e.outdoor?this.addOutdoor(d):e.hole?this.addHole(l,c):e.roof?this.addRoofSection(l,c):this.addRoom(d)}this._guides={};break}case"tap":if(e.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...n),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...n),void 0,t.altKey),n);break;case"opening":case"furniture":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":e.moved?this.pushHistory(e.base):(e.kind==="poolport"||e.kind==="pooljoint")&&this.openCard(e.pool,`${e.kind==="poolport"?"port":"joint"}:${e.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":e.moved&&this.pushHistory(e.base);break;case"pooldev":{e.moved?this.pushHistory(e.base):this._doc.floors.flatMap(o=>o.furniture).find(o=>o.id===e.id)?.type==="pool_valve"?this.togglePoolValve(e.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${e.id}`);break}case"device":e.moved?this.pushHistory(e.base):this.selectItem("device",e.entityId);break;case"vertex":case"room":e.moved&&this.pushHistory(e.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>Ma&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){if(n)return e;let o=this._doc.settings.grid,i=[Math.round(e[0]/o)*o,Math.round(e[1]/o)*o],r=Yn/this._view.scale;this._guides={};for(let l of this.floor?.rooms??[])if(l.id!==t.id)for(let c of l.points)for(let d of t.points){let p=Math.hypot(d[0]+e[0]-c[0],d[1]+e[1]-c[1]);p<r&&(r=p,i=[c[0]-d[0],c[1]-d[1]],this._guides={point:c})}return i}roomAt(t){return(this.floor?.rooms??[]).filter(o=>C(t,o.points)).sort((o,i)=>pt(o.points)-pt(i.points))[0]?.id??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[i,s]=this.toScreen(n[0]);if(Math.hypot(i-e[0],s-e[1])<14){this.closeDraft();return}}let o=n[n.length-1];o&&Math.hypot(o[0]-t[0],o[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Math.abs(pt(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=ye(e,this._measureLen,t),o=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-o[0],n[1]-o[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;e>.1&&n>.1&&(this.addRoom([t,ye(t,e,"right"),ye(ye(t,e,"right"),n,"down"),ye(t,n,"down")]),this._draft=[])}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],o=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,i=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=r=>gt(this.hass,r,2);return b`<section>
      <h3>${this.t("measure")}</h3>
      ${e?b`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(e[0]),z:this.m(e[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${Xe(this.t("measure_length"),this.unit)}
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
                ${i.map(([r,l])=>b`<button class="fp3d-btn fp3d-arrow-${r}" title=${this.t(`dir_${r}`)} @click=${()=>this.measureStep(r)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?b`<ol class="fp3d-measure-list">
                  ${t.slice(1).map((r,l)=>b`<li>${this.m(Math.hypot(r[0]-t[l][0],r[1]-t[l][1]))}</li>`)}
                </ol>`:y}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?b`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(o)})}</p>`:y}`:b`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],r=>this._rectSize=[Math.max(.1,r),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],r=>this._rectSize=[this._rectSize[0],Math.max(.1,r)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(t,e){if(!this.floor)return;let n={id:W("wall"),a:[M(t[0]),M(t[1])],b:[M(e[0]),M(e[1])],thickness:null};this.change((o,i)=>i.walls=[...i.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){return this._wallId?(this.floor?.walls??[]).find(t=>t.id===this._wallId):void 0}updateFreeWall(t){let e=this._wallId;e&&this.change((n,o)=>Object.assign((o.walls??[]).find(i=>i.id===e),t))}deleteFreeWall(){let t=this._wallId;!t||!this.isAdmin||!this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(o=>o.id!==t),n.openings=n.openings.filter(o=>o.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return F`<g>${(t.walls??[]).map(e=>{let[n,o]=this.toScreen(e.a),[i,s]=this.toScreen(e.b),r=e.id===this._wallId;return F`<g data-free-wall=${e.id} class=${`fp3d-free-wall${r?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${o} x2=${i} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${o} x2=${i} y2=${s} />
      </g>
      ${r&&this.isAdmin&&!mo(e,!0,this._doc.settings)?F`<g class="fp3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${o} r="16" class="fp3d-hit" /><circle cx=${n} cy=${o} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${i} cy=${s} r="16" class="fp3d-hit" /><circle cx=${i} cy=${s} r="6" /></g>`:y}`})}</g>`}renderFreeWallForm(t){let e=this.isAdmin,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),o=r=>{let c=Math.max(.1,r)/(n||1);this.updateFreeWall({b:[M(t.a[0]+(t.b[0]-t.a[0])*c),M(t.a[1]+(t.b[1]-t.a[1])*c)]})},i=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],s=(r,l)=>{let c=l-i[r],d=p=>r===0?[M(p[0]+c),p[1]]:[p[0],M(p[1]+c)];this.updateFreeWall({a:d(t.a),b:d(t.b)})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),i[0],r=>s(0,r))} ${this.len(this.t("z"),i[1],r=>s(1,r))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,o,.01,.1)}
        ${this.len(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,r=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,r))}),.01,.02)}
        ${this.len(this.t("wall_height"),t.height??this.floor?.height??2.5,r=>this.updateFreeWall({height:r>=(this.floor?.height??2.5)-.005?null:Math.max(.05,r)}),.05,.05)}
      </div>
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:y}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:W("hole"),type:"stairwell",x:M((t[0]+e[0])/2),z:M((t[1]+e[1])/2),w:M(e[0]-t[0]),d:M(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((o,i)=>i.furniture.push(n)),this.selectItem("furniture",n.id),this._tool="select"}addOutdoor(t){if(!this.floor)return;let e=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:W("outdoor"),type:e,points:t.map(([i,s])=>[M(i),M(s)])},o=e==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(o==="round"||o==="oval"){let i=it(n.points);n.points=wn(o,i.x0,i.z0,i.x1,i.z1),n.pool_shape=o}e==="pool"&&rt("pool")&&(n.pool={}),this.change((i,s)=>s.outdoor.push(n)),this.selectItem("outdoor",n.id),this._tool!=="pool"&&(this._tool="select")}get outdoorArea(){return this._outdoorId?this.floor?.outdoor.find(t=>t.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,o)=>Object.assign(o.outdoor.find(i=>i.id===e),t))}deleteOutdoor(){let t=this._outdoorId;!t||!this.isAdmin||!this.confirmFixedDelete("outdoor",t)||(this.change((e,n)=>n.outdoor=n.outdoor.filter(o=>o.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isAdmin)return;let e={...t,id:W("outdoor"),points:t.points.map(([n,o])=>[M(n+.5),M(o+.5)])};this.change((n,o)=>o.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t){if(!this.floor)return;let e=W("room"),n=this.floor.rooms.length+1;this.change((o,i)=>i.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([s,r])=>[M(s),M(r)]),floor_material:"wood"})),this._roomId=e,this._vertex=null,this._tool="select"}onKey=t=>{if(t.composedPath().some(o=>o instanceof HTMLInputElement||o instanceof HTMLSelectElement||o instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let o=this.selectedFix;this.toggleFixed(o.kind,o.id)}else if(Object.hasOwn(Ea,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let o=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[i,s]=Ea[t.key];this.nudge(i*o,s*o)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Backspace"&&this.drawingPoints)this._draft=this._draft.slice(0,-1);else if(t.key==="Enter"&&this.drawingPoints)this.closeDraft();else if(t.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}};nudge(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let o=this.selectedFix;if(o&&this.isFixedItem(o.kind,o.id))return this._fixedHint=!0,!0;let i=s=>[M(s[0]+t),M(s[1]+e)];if(this._deviceId){let s=this._deviceId;if(!n.placements.some(r=>r.entity_id===s))return!1;this.change((r,l)=>{let c=l.placements.find(d=>d.entity_id===s);[c.x,c.z]=i([c.x,c.z])})}else if(this._furnitureId){let s=this._furnitureId;this.change((r,l)=>{let c=l.furniture.find(d=>d.id===s);c&&([c.x,c.z]=i([c.x,c.z]))})}else if(this._openingId){let s=this.opening,r=s?we(s,n.rooms,n.walls??[]):null;if(!s||!r)return!1;let l=r.room.points[r.edge],c=r.room.points[(r.edge+1)%r.room.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1])||1,p=(t*(c[0]-l[0])+e*(c[1]-l[1]))/d;if(Math.abs(p)<1e-9)return!0;let h=Math.min(s.width,d)/2;this.updateOpening({offset:M(Math.min(d-h,Math.max(h,s.offset+p)))})}else if(this._wallId){let s=this._wallId;this.change((r,l)=>{let c=(l.walls??[]).find(d=>d.id===s);c&&([c.a,c.b]=[i(c.a),i(c.b)])})}else if(this._outdoorId){let s=this._outdoorId;this.change((r,l)=>{let c=l.outdoor.find(d=>d.id===s);c&&(c.points=c.points.map(i))})}else if(this._roomId){let s=this._roomId,r=this._vertex,l=n.rooms.find(d=>d.id===s);if(!l)return!1;let c=new Set(n.placements.filter(d=>C([d.x,d.z],l.points)).map(d=>d.entity_id));this.change((d,p)=>{let h=p.rooms.find(u=>u.id===s);if(r!==null&&r<h.points.length){h.points[r]=i(h.points[r]);return}h.points=h.points.map(i);for(let u of p.placements)c.has(u.entity_id)&&([u.x,u.z]=i([u.x,u.z]))})}else return!1;return!0}get freeHaFloors(){let t=new Set(this._doc.floors.map(e=>e.ha_floor));return Object.values(this.hass?.floors??{}).filter(e=>!t.has(e.floor_id)).sort((e,n)=>(e.level??99)-(n.level??99)||e.name.localeCompare(n.name))}unplacedAreas(t){if(!t.ha_floor)return[];let e=new Set(this._doc.floors.flatMap(n=>n.rooms.map(o=>o.area_id)));return Object.values(this.hass?.areas??{}).filter(n=>n.floor_id===t.ha_floor&&!e.has(n.area_id)).sort((n,o)=>n.name.localeCompare(o.name))}addFloor(t=null){let e=this._doc.floors,n=W("floor"),o=t?.name??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),i={...Ps(n,o,Es(e,t?.level)),ha_floor:t?.floor_id??null},s=structuredClone(this._doc),r=s.floors.findIndex(l=>l.elevation>i.elevation);s.floors.splice(r<0?s.floors.length:r,0,i),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=As(t,e,()=>W("room"));this.change((o,i)=>i.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(i=>i.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let o=structuredClone(this._doc);[o.floors[e],o.floors[n]]=[o.floors[n],o.floors[e]],this.setDoc(o)}deleteFloor(){let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(n=>n.id!==t.id),this.setDoc(e),this._floorId=e.floors[0]?.id??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||!this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let o=n.rooms.find(i=>i.id===t);n.rooms=n.rooms.filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.room_id!==t||i.wall),o&&(n.placements=n.placements.filter(i=>!C([i.x,i.z],o.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=W("room");this.change((n,o)=>o.rooms.push({...structuredClone(t),id:e,points:t.points.map(([i,s])=>[M(i+.5),M(s+.5)])})),this._roomId=e}roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?y:b`<div class="fp3d-seg fp3d-dev-source">
      ${t.map(e=>b`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
    </div>`}get roofSection(){return this._roofId?this._doc.settings.roof.sections?.find(t=>t.id===this._roofId):void 0}useRoofSections(t=!1){if(!this.isAdmin)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=Gr(n,()=>W("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isAdmin)return;let n=Ur(this._doc,t[0],t[1],e[0],e[1]),o=Math.min(...this._doc.floors.map(c=>c.elevation)),i=n===null,s=M(n??o+2.4),r=i?6:this._doc.settings.roof.pitch||35,l={id:W("roof"),x0:M(t[0]),z0:M(t[1]),x1:M(e[0]),z1:M(e[1]),shape:i?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:r,pitch_b:r,base:s,overhang:i?.15:null,...i?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let t=this.floor,e=this._roofId;if(!t||!e||!this.isAdmin)return;let n=Dr(t.rooms,t.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let o=n.map(([i,s])=>[M(i),M(s)]);this.updateRoofSection({shape:"flat",points:o,...Zo(o)})}addDormer(t){let e=this.roofSection;if(!e||!this.isAdmin)return;let n=Nr(e,t,W("roof"));this.change(o=>{o.settings.roof.sections=[...o.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(t){let e=this._roofId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{let o=n.settings.roof.sections?.find(i=>i.id===e);o&&Object.assign(o,t)}))}deleteRoofSection(){let t=this._roofId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:W("roof"),x0:M(t.x0+1),x1:M(t.x1+1),z0:M(t.z0+1),z1:M(t.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return F`<g class="fp3d-roof-layer">${e.map((n,o)=>{let i=n.id===this._roofId,s=Mt(n),r=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=Wr(e,n),c=l?Mt(Br(l,n)):s,d=(r??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(_=>this.toScreen(_)),p=(_,v)=>{let[$,k]=this.toScreen(_),[x,A]=this.toScreen(v);return F`<line x1=${$} y1=${k} x2=${x} y2=${A} />`},h=n.shape==="flat"||n.shape==="parapet"?null:ti(n,{u0:0,u1:0,a:0,b:0}),u=h?F`${h.ridges.map(([_,v])=>p(s.at(_[0],_[1]),s.at(v[0],v[1])))}`:y,[f,m]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),g=`${this.roofFixed(n)?"\u{1F512} ":""}${o+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(Dn(n),1)}`;return F`<g data-roof=${n.id} class=${`fp3d-roof-sec${i?" fp3d-roof-sel":""}`}>
          <polygon points=${d.map(_=>_.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${u}</g>
          <text x=${f} y=${m-14}>${g}</text>
        </g>
        ${i&&this.isAdmin&&!this.roofFixed(n)&&r?r.map((_,v)=>{let[$,k]=this.toScreen(_);return F`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${v}`}><circle cx=${$} cy=${k} r="16" class="fp3d-hit" /><circle cx=${$} cy=${k} r="6" /></g>`}):y}
        ${i&&this.isAdmin&&!this.roofFixed(n)&&!r?[[0,0],[1,0],[1,1],[0,1]].map(([_,v])=>{let[$,k]=this.toScreen([_?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),v?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return F`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${_}:${v}`}><circle cx=${$} cy=${k} r="16" class="fp3d-hit" /><circle cx=${$} cy=${k} r="6" /></g>`}):y}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:Wn(t,e)}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return y;let e=Y(this._doc);return F`<g class="fp3d-solar-layer">${t.map(n=>{let o=ut(this._doc,n,e);if(!o||o.wall&&o.wall.floorId!==this._floorId)return y;let i=n.id===this._solarId,s=y;if(i&&o.unbounded&&this.isAdmin&&!n.locked){let[r,l]=on(o,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...Ct(o,n,!0).flatMap(m=>m.corners.map(g=>Math.hypot(g[0]-r,g[2]-l))))*.5,[p,h]=this.toScreen([r,l]),[u,f]=this.toScreen([r+Math.sin(c)*d,l-Math.cos(c)*d]);s=F`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${p} y1=${h} x2=${u} y2=${f} />
          <circle cx=${u} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${u} cy=${f} r="8" />
          <path d="M${u-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return F`<g data-solar=${n.id} class=${`fp3d-solar${i?" fp3d-solar-sel":""}${i&&this._solarPick?" fp3d-solar-pick":""}`}>${Ct(o,n,i).map(r=>{let l=o.wall?Math.max(.3,...r.corners.map(d=>(d[0]-o.o[0])*o.n[0]+(d[2]-o.o[2])*o.n[2])):0,c=o.wall?[r.corners[0],r.corners[1]].flatMap((d,p)=>{let h=[d[0],d[2]],u=[d[0]+o.n[0]*l,d[2]+o.n[2]*l];return p===0?[h,u]:[u,h]}):r.corners.map(d=>[d[0],d[2]]);return F`<polygon data-cell=${r.cell} class=${r.skipped?"fp3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return y;let e=new Map(Y(this._doc).map(n=>[n.key,n]));return F`<g class="fp3d-roofwin-layer">${t.map(n=>{let o=e.get(n.face),i=o?ia(o,n):null;return i?F`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${i.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:y})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let t=Y(this._doc).filter(o=>!o.flat),e=Bn(t,this._doc.settings.north??0)??Y(this._doc)[0];if(!e)return;let n=ci(e,W("rwin"));this.change(o=>o.settings.roof.windows=[...o.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isAdmin||this.change(n=>{let o=n.settings.roof.windows?.find(s=>s.id===e);if(!o)return;Object.assign(o,t);let i=Y(n).find(s=>s.key===o.face);i&&Object.assign(o,ze(i,Ie(o)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(Y(this._doc).map(n=>[n.key,n]));return b`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?b`<div class="fp3d-room-list">
            ${t.map((n,o)=>{let i=e.get(n.face);return b`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${o+1} · ${i?this.faceLabel(i):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isAdmin,n=Y(this._doc),o=l=>this.updateRoofWindow(l),i=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),r=this.entityOptions(l=>$i(l)||ct(l));return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${i}</h3>
          ${e?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>o({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&o({...ci(c,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt,window:t.window,name:t.name})}}>
              ${n.map(l=>b`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),t.w??.78,l=>o({w:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),t.h??1.18,l=>o({h:Math.max(.3,Math.min(4,M(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),t.u,l=>o({u:M(l)}),.05)}
          ${this.len(this.t("solar_v"),t.v,l=>o({v:M(l)}),.05)}
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
        ${e?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:y}
      </section>`}cableSegments(){if(this.cableCache?.doc===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(i=>[i.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},o=[];try{o=ga({building:t,consumers:[],summary:n,fieldPower:e}).filter(i=>i.key)}catch{o=[]}return this.cableCache={doc:t,segs:o},o}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,o)=>e(n)-e(o)||n.localeCompare(o))}cableLabel(t){let e=r=>{let l=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===r);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.type==="meter"),o=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${o} \u2192 ${this.t("furn_grid_point")}`;let[i,s]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(i==="solar"){let r=this._doc.settings.roof.solar??[],l=r.findIndex(d=>d.id===s);return`${r[l]?.name||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return i==="inv"?`${e(s)} \u2192 ${o}`:`${this.t("furn_inverter")} \u2194 ${e(s)}`}layCable(t){if(!this.isAdmin||!this._floorId)return;let e=[];for(let i of this.cableSegments().filter(s=>s.key===t))for(let s of[i.a,i.b]){let r=[M(s[0]),M(s[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-r[0],l[1]-r[1])>.05)&&e.push(r)}let n=e.length>2?e.slice(1,-1):e,o=this._floorId;this.change(i=>{i.settings.roof.cables=[...(i.settings.roof.cables??[]).filter(s=>s.id!==t),{id:t,floor_id:o,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){if(!rt("energy_pro"))return y;let t=this.cableSegments();if(!t.length)return y;let e=t.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],o=this._cableId,i=[...new Set(t.map(s=>s.key))];return F`<g class="fp3d-cable-layer">${i.map(s=>{let r=n.find(g=>g.id===s),l=`fp3d-cable fp3d-cable-${s.split(":")[0]}${r?" fp3d-cable-laid":""}${s===o?" fp3d-cable-sel":""}`,c=t.filter(g=>g.key===s),d=e.filter(g=>g.key===s).map(g=>{let _=this.toScreen([g.a[0],g.a[2]]),v=this.toScreen([g.b[0],g.b[2]]);return F`<line x1=${_[0]} y1=${_[1]} x2=${v[0]} y2=${v[1]} />`});if(!(r&&s===o&&r.floor_id===this._floorId&&!r.locked))return d.length?F`<g class=${l} data-cable=${s}><g class="fp3d-cable-hit">${d}</g>${d}</g>`:y;let p=c[0],h=c[c.length-1],u=[this.toScreen([p.a[0],p.a[2]]),...r.points.map(g=>this.toScreen(g)),this.toScreen([h.b[0],h.b[2]])],f=u.slice(0,-1).map((g,_)=>F`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${_} x1=${g[0]} y1=${g[1]} x2=${u[_+1][0]} y2=${u[_+1][1]} />`),m=r.points.map((g,_)=>{let v=this.toScreen(g);return F`<g class="fp3d-vertex" data-cable-pt=${`${s}:${_}`}><circle cx=${v[0]} cy=${v[1]} r="16" class="fp3d-hit" /><circle cx=${v[0]} cy=${v[1]} r="6" /></g>`});return F`<g class=${l} data-cable=${s}>${d}${f}${m}</g>`})}</g>`}renderCableSettings(){let t=this.cableKeys();if(!t.length)return y;let e=this.isAdmin,n=this._doc.settings.roof.cables??[],o=this._cableId?n.find(i=>i.id===this._cableId):void 0;return b`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${t.map(i=>b`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${i===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=i===this._cableId?null:i;let s=n.find(r=>r.id===i);this._cableId&&s&&this._doc.floors.some(r=>r.id===s.floor_id)&&(this._floorId=s.floor_id)}}
            >
              <span>${this.cableLabel(i)}${n.some(s=>s.id===i)?b` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:y}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?b`<div class="fp3d-actions">
              ${o?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!o.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(i=>{let s=i.settings.roof.cables?.find(r=>r.id===o.id);s&&(s.locked=!s.locked)})}>
                      ${o.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(i=>i.settings.roof.cables=(i.settings.roof.cables??[]).filter(s=>s.id!==this._cableId))}>${this.t("cable_auto")}</button>`:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${o?b`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),o.height,i=>this.change(s=>{let r=s.settings.roof.cables?.find(l=>l.id===o.id);r&&(r.height=Math.min(30,Math.max(0,M(i))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${o.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:this._doc.floors.find(i=>i.id===o.floor_id)?.name??""})}</p>`:y}`:y}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return y;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,o=rt("energy_pro")&&n?.place==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return F`<g class="fp3d-energy-markers">${o?F`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${o[0]} cy=${o[1]} r="17" />
          <text x=${o[0]} y=${o[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${o[0]} y=${o[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:y}${t.furniture.filter(i=>Nt.includes(i.type)).map(i=>{let[s,r]=this.toScreen([i.x,i.z]),l=i.id===this._furnitureId;return F`<g data-energy-device=${i.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${r} r="17" />
          <text x=${s} y=${r+6} class="fp3d-energy-icon">${e[i.type]??"\u26A1"}</text>
          ${l?F`<text x=${s} y=${r+32} class="fp3d-energy-name">${this.t(`furn_${i.type}`)}</text>`:y}
          <title>${this.t(`furn_${i.type}`)}</title>
        </g>`})}</g>`}faceLabel(t){if(t.key===Qt)return this.t("solar_ground");if(t.wall){let{floorId:i,room:s,edge:r,free:l}=t.wall,c=this._doc.floors.find(h=>h.id===i),d=c?.rooms.find(h=>h.id===s),p=l?this.t("solar_wall_free"):d?`${d.name}${r!=null?` ${r+1}\u2013${(r+1)%d.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${c?.name??""} \xB7 ${p?`${p} \xB7 `:""}${this.t(`compass_${li(t,this._doc.settings.north??0)}`)} \xB7 ${this.m(t.lu,2)}`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(i=>i.id===t.section)+1}):this.t("solar_main");if(t.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let o=t.side==="c"||t.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${li(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0${o}`}addSolarField(){if(!this.isAdmin)return;let t=Y(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,o=Bn(t.filter(s=>!e.has(s.key)),n)??Bn(t,n);if(!o)return;let i=Nn(o,W("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],i]),this._solarId=i.id,this._roofId=null}selectSolar(t){this._solarId=t,this._roofId=null;let e=this._doc.settings.roof.solar?.find(n=>n.id===t);e?.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){if(!this.isAdmin)return;let t=this._floorId??this._doc.floors[0]?.id,e=t?Qr(this._doc,W("pv"),t):null;e&&(this.change(n=>n.settings.roof.solar=[...n.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isAdmin)return;let t=oi(this._doc,W("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{let o=n.settings.roof.solar?.find(s=>s.id===e);if(!o)return;Object.assign(o,t);let i=ut(n,o);i&&Object.assign(o,ze(i,o))}))}setSolarString(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{let o=n.settings.roof,i=o.solar?.find(r=>r.id===e);if(!i)return;if(t==="new"){let r=o.strings??[],l={id:W("str"),name:this.t("solar_string_n",{n:r.length+1}),entity:i.entity??null,inverter:null};o.strings=[...r,l],i.string=l.id}else i.string=t;let s=new Set((o.solar??[]).map(r=>r.string).filter(Boolean));o.strings=(o.strings??[]).filter(r=>s.has(r.id))})}updateSolarString(t){let n=this._doc.settings.roof.solar?.find(o=>o.id===this._solarId)?.string;!n||!this.isAdmin||this.change(o=>{let i=o.settings.roof.strings?.find(s=>s.id===n);i&&Object.assign(i,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{let o=n.settings.roof.solar?.find(i=>i.id===e);o&&t(o)})}deleteSolar(){let t=this._solarId;!t||!this.isAdmin||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(i=>i.id!==t);let o=new Set(n.solar.map(i=>i.string).filter(Boolean));n.strings=(n.strings??[]).filter(i=>o.has(i.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=Y(this._doc),n=new Map(t.map(i=>[i.id,ut(this._doc,i,e)])),o=this.isAdmin;return b`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?b`<div class="fp3d-room-list">
            ${t.map((i,s)=>{let r=n.get(i.id),l=r?Ct(r,i).length:0;return b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(i.id)}
                >
                  <span>${i.name||`${this.t("solar_field")} ${s+1}`} · ${r?this.faceLabel(r):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:gt(this.hass,l*(i.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!o||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!o} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!o||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?b`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(i=>{let s=t.filter(d=>d.string===i.id),r=s.map(d=>n.get(d.id)?Ct(n.get(d.id),d).length:0),l=r.reduce((d,p)=>d+p,0),c=s.reduce((d,p,h)=>d+r[h]*(p.wp??400)/1e3,0);return b`<p class="fp3d-sub">🔗 <b>${i.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:l,kwp:gt(this.hass,c,1)})}</p>`})}`:y}
    </section>`}renderSolarForm(t){let e=this.isAdmin,n=Y(this._doc),o=It(this._doc),i=ut(this._doc,t,n),s=t.face===Qt,r=i?Ct(i,t).length:0,l=en(t),c=l.reduce((u,f)=>u+f,0)-(t.skip?.length??0),d=this.entityOptions(u=>this.isPowerSensor(u)),p=u=>this.updateSolar(u),h=(this._doc.settings.roof.solar??[]).findIndex(u=>u.id===t.id)+1;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${h}`}</h3>
          ${e?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_name")}
            <input
              type="text"
              ?disabled=${!e}
              .value=${t.name??""}
              placeholder=${this.t("solar_name_hint")}
              @change=${u=>p({name:u.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${u=>{let f=u.target.value,m={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h,wp:t.wp};f===Qt&&p({...oi(this._doc,t.id),...m,rows:t.rows,cols:t.cols});let g=n.find(v=>v.key===f);g&&p(ai(g,{...t,...m}));let _=o.find(v=>v.key===f);_&&p(ai(_,{...t,...m,rows:1}))}}
            >
              ${i?y:b`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(u=>b`<option value=${u.key} ?selected=${u.key===t.face}>${this.faceLabel(u)}</option>`)}
              <option value=${Qt} ?selected=${s}>${this.t("solar_ground")}</option>
              ${o.map(u=>b`<option value=${u.key} ?selected=${u.key===t.face}>${this.faceLabel(u)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,u=>{let f=Math.max(1,Math.min(40,Math.round(u)));p(t.layout?.length?{layout:Array.from({length:f},(m,g)=>t.layout[g]??t.layout[t.layout.length-1]),rows:f}:{rows:f})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${t.layout?.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${u=>{let f=u.target.value.split(/[,;\s]+/).map(m=>parseInt(m,10)).filter(m=>Number.isFinite(m)&&m>=0);f.length&&(f.length===1?p({cols:Math.max(1,Math.min(60,f[0])),layout:null,skip:null}):p({layout:f.slice(0,40).map(m=>Math.min(60,m)),rows:Math.min(40,f.length),cols:Math.max(1,...f),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${i&&!i.unbounded?b`${this.t("solar_face_size",{w:gt(this.hass,i.lu,1),h:gt(this.hass,i.ls,1)})} · `:y}${this.t("solar_cols_hint")}
        </p>
        ${t.layout?.length&&new Set(t.layout).size>1?b`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(u=>b`<button aria-pressed=${(t.align??"left")===u} ?disabled=${!e} @click=${()=>p({align:u})}>${this.t(`solar_align_${u}`)}</button>`)}
            </div>`:y}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.portrait!==!1} ?disabled=${!e} @click=${()=>p({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${t.portrait===!1} ?disabled=${!e} @click=${()=>p({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.look!=="blue"} ?disabled=${!e} @click=${()=>p({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${t.look==="blue"} ?disabled=${!e} @click=${()=>p({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"),t.module_w??1.13,u=>p({module_w:Math.max(.3,Math.min(3,M(u)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),t.module_h??1.72,u=>p({module_h:Math.max(.3,Math.min(3,M(u)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),t.wp??400,u=>p({wp:Math.max(50,Math.min(1500,Math.round(u)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${t.skip?.length?b`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>p({skip:null})}>${this.t("solar_pick_all")}</button>`:y}
        </div>
        ${this._solarPick?b`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:y}
        <div class="fp3d-form">
          ${s?b`${this.len(this.t("solar_base"),t.base??0,u=>p({base:u>.001?Math.min(60,M(u)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,u=>p(nn(this._doc,t,u)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>p(nn(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>p(nn(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:b`${this.len(this.t("solar_u"),t.u,u=>p({u:M(u)}),.05)} ${this.num(this.t(i?.wall?"solar_v_wall":"solar_v"),t.v,u=>p({v:M(u)}),.05)}`}
          ${i?.wall?b`${this.num(this.t("solar_tilt_wall"),t.tilt??0,u=>p({tilt:Math.max(0,Math.min(90,Math.round(u)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${u=>p({flip:u.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:y}
          ${i?.flat?b`${this.num(this.t("solar_tilt"),t.tilt??15,u=>p({tilt:Math.max(0,Math.min(45,Math.round(u)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${u=>p({flip:u.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:y}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:r,kwp:gt(this.hass,r*(t.wp??400)/1e3,1)})}${r<c?b` · <b>${this.t("solar_partial",{n:r,total:c})}</b>`:y}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${u=>{let f=u.target.value;this.setSolarString(f===""?null:f)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(u=>b`<option value=${u.id} ?selected=${u.id===t.string}>${u.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{let u=this._doc.settings.roof.strings?.find(g=>g.id===t.string);if(!u)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,d,g=>p({entity:g==="none"?null:g}));let f=this.hass?$e(this.hass,this._doc.floors):null,m=this._doc.floors.flatMap(g=>g.furniture.filter(_=>_.type==="inverter").map(_=>({m:_,fl:g}))).map(({m:g,fl:_},v)=>{let $=f?.get(g.id)?.entity,k=g.name?.trim()||($&&this.hass?Z(this.hass,$):"");return{id:g.id,label:`${k||`${this.t("furn_inverter")} ${v+1}`} \xB7 ${_.name}`}});return b`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${u.name} @change=${g=>this.updateSolarString({name:g.target.value.trim()||u.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),u.entity??null,void 0,d,g=>this.updateSolarString({entity:g==="none"?null:g}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${g=>this.updateSolarString({inverter:g.target.value||null})}>
                  <option value="" ?selected=${!u.inverter}>${this.t(m.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${m.map(g=>b`<option value=${g.id} ?selected=${g.id===u.inverter}>${g.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${e?b`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!i} @click=${()=>i&&p({...Nn(i,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}renderRoofPanel(){let t=this._doc.settings.roof,e=this.isAdmin,n=t.type==="custom"?this.roofSection:void 0,o=this._roofWinId?t.windows?.find(s=>s.id===this._roofWinId):void 0;if(o)return this.renderRoofWindowForm(o);if(n)return this.renderRoofSectionForm(n);let i=t.type==="custom"?t.sections??[]:[];return b`<section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:b`<div class="fp3d-room-list">
              ${i.map((s,r)=>b`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=s.id}>
                    <span>${r+1} · ${s.dormer?this.t("roof_dormer"):this.t(`roof_shape_${s.shape}`)} · ${this.m(Math.abs(s.x1-s.x0),1)} × ${this.m(Math.abs(s.z1-s.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(Dn(s),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(s=>s.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){let t=this._solarId?this._doc.settings.roof.solar?.find(o=>o.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?this.floor?.furniture.find(o=>o.id===this._furnitureId&&Nt.includes(o.type)):void 0;if(e)return b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`;let n=rt("energy_pro");return b`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():y}${n?this.renderHologramSettings():y}${this.renderProCard()}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[],e=this.isAdmin,n=this._doc.settings.roof.hologram??$n,o=n.place==="free",i=l=>this.change(c=>c.settings.roof.hologram={...c.settings.roof.hologram??$n,...l}),s=(l,c)=>l.name||`${this.t("solar_field")} ${c+1}`,r=()=>{let l=-1/0,c=1/0,d=-1/0;for(let h of this._doc.floors)for(let u of h.rooms)for(let[f,m]of u.points)l=Math.max(l,f),c=Math.min(c,m),d=Math.max(d,m);let p=Number.isFinite(l);i({place:"free",x:n.x??(p?M(l+2):0),z:n.z??(p?M((c+d)/2):0),height:n.height??3})};return b`<section>
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
        ${o?b`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>i({x:M(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>i({z:M(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>i({height:Math.min(60,Math.max(0,M(l)))}),.25,0)}`:t.length?b`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!e} @change=${l=>i({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${t.map((l,c)=>b`<option value=${l.id} ?selected=${l.id===n.field}>${s(l,c)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>i({right:Math.min(30,Math.max(-30,M(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>i({up:Math.min(30,Math.max(-30,M(l)))}),.25)}`:b`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>i({size:Math.min(3,Math.max(.3,M(l)))}),.1,.3)}
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
    </section>`}isPowerSensor(t){if(!ct(t))return!1;let e=this.hass?.states[t]?.attributes;return e?.device_class==="power"||e?.unit_of_measurement==="W"||e?.unit_of_measurement==="kW"}devicePower(t,e){return t.power&&t.power!=="none"?t.power:e.get(t.id)?.power??null}renderEnergyChecklist(){let t=this._doc,e=this.hass?$e(this.hass,t.floors):new Map,n=t.floors.flatMap(_=>_.furniture.map(v=>({m:v,fl:_}))),o=_=>n.filter(v=>v.m.type===_),i=_=>{this._floorId=_.fl.id,this._solarId=null,this.selectItem("furniture",_.m.id),this.showPoint(_.m.x,_.m.z)},s=t.settings.roof.solar??[],r=o("meter"),l=o("inverter"),c=o("home_battery"),d=o("grid_point"),p=!!t.energy.grid||r.some(_=>this.devicePower(_.m,e)),h=!!t.energy.solar||l.length>0&&l.every(_=>this.devicePower(_.m,e)),u=c.every(_=>this.devicePower(_.m,e)&&_.m.soc&&_.m.soc!=="none")||!!t.energy.battery,f=rt("energy_pro"),m=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},r.length?{state:p?"ok":"todo",label:this.t(p?"chk_meter":"chk_meter_sensor"),action:()=>i(r[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:h?"ok":"todo",label:this.t(h?"chk_inverter":"chk_inverter_sensor"),action:()=>i(l.find(_=>!this.devicePower(_.m,e))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},c.length?{state:u?"ok":"todo",label:this.t(u?"chk_battery":"chk_battery_sensor"),action:()=>i(c[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},d.length?{state:"ok",label:this.t("chk_grid"),action:()=>i(d[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},f?{state:"ok",label:this.t("chk_pro_active")}:{state:"opt",label:this.t("chk_pro_get"),href:Tt(this.hass?.language)}],g=m.filter(_=>_.state==="ok").length;return b`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${g}/${m.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${m.map(_=>_.href?b`<a class="fp3d-chk fp3d-chk-${_.state}" href=${_.href} target="_blank" rel="noopener"><span>${_.state==="ok"?"\u2713":_.state==="todo"?"\u25CB":"\xB7"}</span>${_.label}</a>`:b`<button class="fp3d-chk fp3d-chk-${_.state}" ?disabled=${!this.isAdmin&&!!_.action&&_.state!=="ok"} @click=${_.action}><span>${_.state==="ok"?"\u2713":_.state==="todo"?"\u25CB":"\xB7"}</span>${_.label}</button>`)}
    </section>`}renderHelpLinks(){return b`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/Mastershort/neonplan3d/discussions/categories/ideas" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
        <a class="fp3d-btn" href="https://discord.gg/SSdVVFsev7" target="_blank" rel="noopener">💬 ${this.t("help_discord")}</a>
      </div>
    </section>`}renderProCard(){let t=this.hass?.language;if(rt("energy_pro"))return b`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${le(t,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let e=new URL("./images/solar-pro.jpg",import.meta.url).href;return b`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b><a class="fp3d-btn fp3d-primary" href=${Tt(t)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
      <img src=${e} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${le(t,"energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isAdmin)return;if(t==="grid_point"){let v=mi(this._doc),[$,k,x]=Ht(t),[A,P]=v?v.end:this.toWorld(this._size.w/2,this._size.h/2),w={id:W("furniture"),type:t,x:M(A),z:M(P),rotation:0,w:$,d:k,h:x,variant:null};this.change((z,S)=>S.furniture.push(w)),this.selectItem("furniture",w.id),this.showPoint(w.x,w.z);return}let n=v=>`${v.name} ${v.area_id&&this.hass?.areas?.[v.area_id]?.name||""} ${v.area_id??""}`.toLowerCase(),o=e.rooms.filter(v=>v.points.length>=3),i=v=>o.find($=>v.test(n($))),s=o.find(v=>e.furniture.some($=>$.type==="parking"&&C([$.x,$.z],v.points))),r=i(/garage|carport/)??s,l=i(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=i(/flur|diele|eingang|hall|entr|lobby/),d=(t==="wallbox"?r:t==="meter"?l??c??r:l??r)??this.room??o.sort((v,$)=>Math.abs(nt($.points))-Math.abs(nt(v.points)))[0],[p,h,u]=Ht(t),[f,m]=d?kt(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[v,$]=kt(d.points),k=null,x=new Set(e.openings.filter(w=>w.room_id===d.id).map(w=>w.edge)),A=d.points.some((w,z)=>!x.has(z));d.points.forEach((w,z)=>{if(A&&x.has(z))return;let S=d.points[(z+1)%d.points.length],I=Math.hypot(S[0]-w[0],S[1]-w[1]);if(k&&I<=k.l)return;let L=(w[0]+S[0])/2,O=(w[1]+S[1])/2,T=-(S[1]-w[1])/I,V=(S[0]-w[0])/I;(v-L)*T+($-O)*V<0&&([T,V]=[-T,-V]),k={mx:L,mz:O,nx:T,nz:V,l:I}});let P=k;P&&([f,m]=[P.mx+P.nx*(h/2+.25),P.mz+P.nz*(h/2+.25)])}let g={id:W("furniture"),type:t,x:M(f),z:M(m),rotation:0,w:p,d:h,h:u,variant:null},_=d?Je({...e,furniture:[...e.furniture,g]},g,this._doc.settings.wall_interior):null;_&&Object.assign(g,{x:M(_.x),z:M(_.z),rotation:_.rotation}),this.change((v,$)=>$.furniture.push(g)),this.selectItem("furniture",g.id),this.showPoint(g.x,g.z)}renderEnergyDevices(){let t=this.isAdmin,e=this._doc.floors.flatMap(n=>n.furniture.filter(o=>Nt.includes(o.type)).map(o=>({fl:n,m:o})));return b`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${e.length?b`<div class="fp3d-room-list">
            ${e.map(({fl:n,m:o})=>b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",o.id),this.showPoint(o.x,o.z)}}
                >
                  <span>${o.name||this.t(`furn_${o.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:y}
      <div class="fp3d-actions">
        ${Nt.map(n=>b`<button
            class="fp3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(t){let e=this.isAdmin,n=u=>this.updateRoofSection(u),o=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[i,s]=t.flip?[o[1],o[0]]:o,r=t.shape==="flat"||t.shape==="parapet",l=t.shape==="pent",c=u=>u.findIndex(f=>f.id===t.id)+1,d=(u,f,m,g=.05,_=0)=>this.len(u,f,v=>m(Math.max(_,M(v))),g,_),p=(u,f,m)=>this.num(u,f,g=>m(Math.max(0,M(g))),1,0),h=!!this._doc.settings.lock_plan;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${t.dormer?this.t("roof_dormer"):this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${e?h?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:y}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!e} @change=${u=>n({shape:u.target.value})}>
            ${bs.map(u=>b`<option value=${u} ?selected=${t.shape===u}>${this.t(`roof_shape_${u}`)}</option>`)}
          </select>
        </label>
        ${r?y:b`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${u=>n({open:u.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${r?d(this.t("roof_height"),t.eave_a,u=>n({eave_a:u,eave_b:u})):b`${d(`${this.t("roof_eave")} ${l?"":i}`,t.eave_a,u=>n({eave_a:u}))}
              ${l?y:d(`${this.t("roof_eave")} ${s}`,t.eave_b,u=>n({eave_b:u}))}
              ${p(`${this.t("roof_pitch_short")} ${l?"":i}`,t.pitch_a,u=>n({pitch_a:Math.min(75,u)}))}
              ${l?y:p(`${this.t("roof_pitch_short")} ${s}`,t.pitch_b,u=>n({pitch_b:Math.min(75,u)}))}`}
          ${d(this.t("roof_base"),t.base,u=>n({base:u}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!e}
              @change=${u=>{let f=this._doc.floors.find(_=>_.id===u.target.value);if(!f)return;let m=M(f.elevation+f.height),g=m-t.base;n({base:m,eave_a:M(t.eave_a+g),eave_b:M(t.eave_b+g)})}}
            >
              ${[...this._doc.floors].filter(u=>u.rooms.length).sort((u,f)=>f.elevation-u.elevation).map(u=>b`<option value=${u.id} ?selected=${Kr(this._doc,t)?.id===u.id}>${u.name}</option>`)}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,u=>n({overhang:Math.min(2,u)}),.05,0)}
        </div>
        ${r&&e?b`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${t.points?b`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:y}
            </div>
            <p class="fp3d-sub">${this.t(t.points?"roof_points_hint":"roof_outline_hint")}</p>`:y}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(Dn(t),2)} · ${this.t("roof_section_hint")}</p>
        ${e?b`<div class="fp3d-actions">
              ${r?y:b`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!r&&!t.dormer&&!t.open?b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${i}</button>
                  ${l?y:b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:y}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(o=>o.id===n);case"opening":return t.openings.find(o=>o.id===n);case"furniture":return t.furniture.find(o=>o.id===n);case"device":return t.placements.find(o=>o.entity_id===n);case"wall":return(t.walls??[]).find(o=>o.id===n);case"outdoor":return t.outdoor.find(o=>o.id===n)}}isFixedItem(t,e){return mo(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isAdmin||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);n||(this._fixedHint=!1),this.change((o,i)=>{let s=this.fixItem(i,t,e);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(t=>t.settings.lock_plan=!t.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(t){t.preventDefault(),!(this._tool!=="select"&&this._tool!=="furniture")&&(this.drag=null,this.openContext(t.target,this.localPoint(t)))}openContext(t,e){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...e),o=f=>t.closest(`[${f}]`)?.getAttribute(f)??null,i=null,s=o("data-device"),r=o("data-opening"),l=t.closest("[data-vertex], [data-mid]")?null:o("data-furniture"),c=o("data-free-wall"),d=o("data-outdoor"),p=o("data-room")??this.roomAt(n);if(s?i=["device",s]:r?i=["opening",r]:l?i=["furniture",l]:c?i=["wall",c]:d&&!p?i=["outdoor",d]:p&&(i=["room",p]),!i){this._ctx=null;return}let[h,u]=i;this.selectItem(h,u),(h==="opening"||h==="furniture")&&(this._roomId=this._roomId??p),this._ctx={x:e[0],y:e[1],kind:h,id:u}}deleteItem(t,e){if(t==="device"){if(!this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return y;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),o=Math.max(4,Math.min(t.x,(n?.clientWidth??800)-190)),i=Math.max(4,Math.min(t.y,(n?.clientHeight??600)-190)),s=r=>()=>{this._ctx=null,r()};return b`<div class="fp3d-ctx" style=${`left:${o}px;top:${i}px`} @pointerdown=${r=>r.stopPropagation()} @contextmenu=${r=>r.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?b`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:b`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?b`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:y}
      ${t.kind==="furniture"?b`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${s(()=>{let r=this.floor?.furniture.find(l=>l.id===t.id);r&&this.openWallViewFor(r)})}>▦ ${this.t("wall_view")}</button>`:y}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isAdmin)return y;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:y;let n=this.isFixedItem(t,e);return b`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){if(this._notice=null,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._deviceId=t==="device"?e:null,t==="device"&&e){let n=this.floor?.placements.find(o=>o.entity_id===e);this._roomId=(n&&this.roomAt([n.x,n.z]))??this._roomId}t==="opening"&&e&&(this._roomId=this.floor?.openings.find(n=>n.id===e)?.room_id??this._roomId)}get opening(){return this._openingId?this.floor?.openings.find(t=>t.id===this._openingId):void 0}get furnitureItem(){return this._furnitureId?this.floor?.furniture.find(t=>t.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,o,i){let s=t.points[e],r=t.points[(e+1)%t.points.length],l=Math.hypot(r[0]-s[0],r[1]-s[1])||1,c=((n[0]-s[0])*(r[0]-s[0])+(n[1]-s[1])*(r[1]-s[1]))/l,d=i?.01:this._doc.settings.grid,p=Math.min(o,l)/2;return M(Math.min(l-p,Math.max(p,Math.round(c/d)*d)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let o=null;for(let m of n.walls??[]){let g=we({room_id:"",edge:0,wall:m.id},n.rooms,n.walls??[]);if(!g)continue;let[_,v]=this.toScreen(m.a),[$,k]=this.toScreen(m.b),x=($-_)**2+(k-v)**2||1,A=Math.min(1,Math.max(0,((e[0]-_)*($-_)+(e[1]-v)*(k-v))/x)),P=Math.hypot(e[0]-_-($-_)*A,e[1]-v-(k-v)*A),w=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],z=n.rooms.find(S=>S.points.length>=3&&C(w,S.points));P<Yn*2.2&&(!o||P-1<o.d)&&(o={room:g.room,edge:0,d:P-1,wall:m.id,roomId:z?.id??m.id})}for(let m of n.rooms)for(let g=0;g<m.points.length;g++){let[_,v]=this.toScreen(m.points[g]),[$,k]=this.toScreen(m.points[(g+1)%m.points.length]),x=($-_)**2+(k-v)**2||1,A=Math.min(1,Math.max(0,((e[0]-_)*($-_)+(e[1]-v)*(k-v))/x)),P=Math.hypot(e[0]-_-($-_)*A,e[1]-v-(k-v)*A),w=P-(m.id===this._roomId?.5:0);P<Yn*2.2&&(!o||w<o.d)&&(o={room:m,edge:g,d:w})}if(!o)return!1;let{room:i,edge:s,wall:r}=o,l=i.points[s],c=i.points[(s+1)%i.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),p=Mn[t],h=p.type,u=M(Math.min(p.width,Math.max(.3,d-.1))),f={id:W("opening"),room_id:o.roomId??i.id,edge:s,...r?{wall:r}:{},offset:this.offsetOnEdge(i,s,this.toWorld(...e),u,!1),width:u,type:h,sill:p.sill,height:p.height,hinge:"left",leaves:p.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((m,g)=>g.openings.push(f)),this._tool="select",this.selectItem("opening",f.id),!0}setOpeningPreset(t,e){let n=Mn[e];this._openingPreset=e;let o=Sn(t)===e,i="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:i,...o?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,o)=>Object.assign(o.openings.find(i=>i.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||!this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(o=>o.id!==t)),this._openingId=null)}glowScaleField(t,e){return b`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((t??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let o=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;e(Math.abs(o-1)<.001?null:o)}}
    /></label>`}furnitureFor(t){let e=K(t),n=[...$o.map(s=>({type:s,label:this.t(`furn_${s}`)})),...(this.packs??[]).flatMap(s=>s.items.map(r=>({type:_e(s.id,r.id),label:`${Wt(r)} \xB7 ${ht(s)}`})))],o=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,i=s=>e==="light"?vt(s):e==="climate"?s==="radiator":t.startsWith("vacuum.")?s==="robot_vacuum"||be(s)&&s.endsWith(":robot_vacuum"):e==="media"?Rn(s)||Be(s)&&o.test(s):Be(s)&&!vt(s);return n.filter(s=>i(s.type)).sort((s,r)=>s.label.localeCompare(r.label))}vehicleToSpot(t){if(!this.isAdmin)return;let[e,n,o]=Ht("parking"),i={id:W("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,M(t.w+.5)),d:Math.max(n,M(t.d+.4)),h:o,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}};this.change((s,r)=>{r.furniture=r.furniture.filter(l=>l.id!==t.id),r.furniture.push(i)}),this.selectItem("furniture",i.id)}deviceToFurniture(t,e){if(!this.isAdmin)return;let[n,o,i]=Ht(e),s={id:W("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:o,h:i,variant:null,entity:t.entity_id,name:t.name??null,...t.locked?{locked:!0}:{}};this.change((r,l)=>{l.placements=l.placements.filter(c=>c.entity_id!==t.entity_id),l.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(t){let e=t.entity;if(!this.isAdmin||!e||e==="none")return;let n={entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,...t.name?{name:t.name}:{},...e.startsWith("light.")?{pin:!0}:{}};this.change((o,i)=>{i.furniture=i.furniture.filter(s=>s.id!==t.id),i.placements.some(s=>s.entity_id===e)||i.placements.push(n)}),this._furnitureId=null,this.selectItem("device",e)}renderAsFurniture(t){if(!this.isAdmin)return y;let e=this.furnitureFor(t.entity_id);return e.length?b`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let o=n.target.value;o&&this.deviceToFurniture(t,o)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${e.map(n=>b`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:y}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,o,i]=Ht(t),s=this._doc.floors.filter(u=>u.elevation>e.elevation).sort((u,f)=>u.elevation-f.elevation)[0],r=wo.has(t)?M(s?s.elevation-e.elevation:e.height+.25):i,l=this.room,[c,d]=l?kt(l.points):this.toWorld(this._size.w/2,this._size.h/2),p=0;if(t==="parking"&&l){let u=e.openings.find(_=>_.room_id===l.id&&_.type==="garage"),f=u?l.points[u.edge]:null,m=u?l.points[(u.edge+1)%l.points.length]:null,g=it(l.points);p=(f&&m?Math.abs(m[1]-f[1])>Math.abs(m[0]-f[0]):g.x1-g.x0>g.z1-g.z0)?90:0}let h={id:W("furniture"),type:t,x:M(c),z:M(d),rotation:p,w:n,d:o,h:r,variant:null};this.change((u,f)=>f.furniture.push(h)),this.selectItem("furniture",h.id),this.showPoint(h.x,h.z)}snapToWall(t){return this.floor?Je(this.floor,t,this._doc.settings.wall_interior):null}updateFurniture(t){let e=this._furnitureId;this.change((n,o)=>Object.assign(o.furniture.find(i=>i.id===e),t))}mirrorFurniture(){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({mirror:!t.mirror})}rotateFurniture(t){let e=this.furnitureItem;!e||!this.isAdmin||this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;!t||!this.isAdmin||!this.confirmFixedDelete("furniture",t)||(this.change((e,n)=>n.furniture=n.furniture.filter(o=>o.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:W("furniture"),x:M(t.x+.3),z:M(t.z+.3)};this.change((n,o)=>o.furniture.push(e)),this.selectItem("furniture",e.id)}placeDevices(t){let e=this.room;if(!e||!t.length||!this.isAdmin)return;let n=new Set(t);this.change((o,i)=>{for(let r of o.floors)r.placements=r.placements.filter(l=>!n.has(l.entity_id)),r.furniture=r.furniture.filter(l=>!(vt(l.type)&&l.entity&&n.has(l.entity)));let s=[...i.placements.map(r=>[r.x,r.z]),...i.furniture.filter(r=>vt(r.type)).map(r=>[r.x,r.z])];for(let r of Js(e,t,s)){if(!r.entity_id.startsWith("light.")){i.placements.push(r);continue}let[l,c,d]=Pt.lamp_ceiling;i.furniture.push({id:W("furniture"),type:"lamp_ceiling",x:r.x,z:r.z,rotation:0,w:l,d:c,h:d,variant:null,entity:r.entity_id,power:null})}})}get device(){return this._deviceId?this.floor?.placements.find(t=>t.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,o)=>Object.assign(o.placements.find(i=>i.entity_id===e),t))}centreDevice(){let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=this.floor?.rooms.find(s=>s.id===e);if(!t||!n)return;let[o,i]=kt(n.points);this.updateDevice({x:M(o),z:M(i)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(p=>K(p.entity_id)==="light"&&(p.mount??"ceiling")==="ceiling"&&C([p.x,p.z],t.points));if(n.length<2)return;let o=it(t.points),i=o.x1-o.x0,s=o.z1-o.z0,r=Math.max(1,Math.round(Math.sqrt(n.length*i/Math.max(.1,s)))),l=Math.ceil(n.length/r),c=n.map((p,h)=>{let u=Math.floor(h/r),f=u===l-1?n.length-r*(l-1):r,m=h-u*r;return[M(o.x0+i/f*(m+.5)),M(o.z0+s/l*(u+.5))]}),d=n.map(p=>p.entity_id);this.change((p,h)=>{d.forEach((u,f)=>Object.assign(h.placements.find(m=>m.entity_id===u),{x:c[f][0],z:c[f][1]}))})}straightenFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,fixed:n}=mr(t.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((o,i)=>i.rooms=e),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=hr(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let o=fr(n);this.change((i,s)=>{s.rooms=e,o&&(i.settings.wall_interior=o)}),this._notice=o?this.t("gaps_closed_wall",{n:n.length,t:gt(this.hass,o,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(o=>o.entity_id!==t),n.furniture=n.furniture.filter(o=>!(vt(o.type)&&o.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,o=(t-1+n)%n;this.change((i,s)=>{let r=s.rooms.find(l=>l.id===e.id);r.points.splice(t,1),r.wall_heights&&r.wall_heights.splice(t,1),r.wall_thickness&&r.wall_thickness.splice(t,1),s.openings=s.openings.filter(l=>l.room_id!==e.id||l.wall||l.edge!==t&&l.edge!==o).map(l=>l.room_id===e.id&&!l.wall&&l.edge>t?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(t,e){if(!this.isAdmin||!t&&!e)return;let n=i=>[M(i[0]+t),M(i[1]+e)],o=i=>{for(let s of i.rooms)s.points=s.points.map(n);for(let s of i.furniture)s.x=M(s.x+t),s.z=M(s.z+e);for(let s of i.placements)s.x=M(s.x+t),s.z=M(s.z+e);for(let s of i.outdoor)s.points=s.points.map(n);for(let s of i.walls??[])s.a=n(s.a),s.b=n(s.b);i.background&&(i.background.x=M(i.background.x+t),i.background.z=M(i.background.z+e))};this._shiftAll?this.change(i=>{for(let s of i.floors)o(s);this.moveHouseExtras(i,n)}):this.change((i,s)=>o(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(t,e){for(let o of t.settings.roof.sections??[]){let i=[e([o.x0,o.z0]),e([o.x1,o.z0]),e([o.x1,o.z1]),e([o.x0,o.z1])];o.x0=Math.min(...i.map(s=>s[0])),o.x1=Math.max(...i.map(s=>s[0])),o.z0=Math.min(...i.map(s=>s[1])),o.z1=Math.max(...i.map(s=>s[1])),o.points&&(o.points=o.points.map(e))}for(let o of t.settings.roof.cables??[])o.points=o.points.map(e);t.energy.meter&&([t.energy.meter.x,t.energy.meter.z]=e([t.energy.meter.x,t.energy.meter.z]));let n=t.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=e([n.x,n.z]))}turnFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let e=(this._shiftAll?this._doc.floors:[t]).flatMap(c=>c.rooms.flatMap(d=>d.points));if(!e.length)return;let n=e.map(c=>c[0]),o=e.map(c=>c[1]),i=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...o)+Math.max(...o))/2,r=c=>[M(i-(c[1]-s)),M(s+(c[0]-i))],l=c=>{for(let d of c.rooms)d.points=d.points.map(r);for(let d of c.furniture)[d.x,d.z]=r([d.x,d.z]),d.rotation=(d.rotation+90)%360;for(let d of c.placements)[d.x,d.z]=r([d.x,d.z]),d.rotation=((d.rotation??0)+90)%360;for(let d of c.outdoor)d.points=d.points.map(r);for(let d of c.walls??[])d.a=r(d.a),d.b=r(d.b);c.background&&([c.background.x,c.background.z]=r([c.background.x,c.background.z]),c.background.rotation=((c.background.rotation??0)+90)%360)};this._shiftAll?this.change(c=>{for(let d of c.floors)l(d);this.moveHouseExtras(c,r)}):this.change((c,d)=>l(d))}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,o)=>Object.assign(o.rooms.find(i=>i.id===e),t))}setArea(t){let e=this.room;if(!e)return;let n=t?this.hass?.areas?.[t]:void 0,o=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(this.hass?.areas??{}).some(i=>i.name===e.name);this.updateRoom({area_id:t||null,...n&&o?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let o=it(n.points),{x0:i,z0:s,x1:r,z1:l}=o;t==="x"&&([i,r]=[e,e+(r-i)]),t==="z"&&([s,l]=[e,e+(l-s)]),t==="w"&&e>.05&&(r=i+e),t==="d"&&e>.05&&(l=s+e),this.updateRoom({points:[[M(i),M(s)],[M(r),M(s)],[M(r),M(l)],[M(i),M(l)]]})}setPoint(t,e,n){let o=this.room;if(!o||!Number.isFinite(n))return;let i=o.points.map(s=>[...s]);i[t][e]=M(n),this.updateRoom({points:i})}async loadImage(t){this.loadingImages.add(t);try{let e=await po(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){let e=t.target,n=e.files?.[0];if(e.value="",!n)return;let o=await createImageBitmap(n),i=Math.min(1,2048/Math.max(o.width,o.height)),s=document.createElement("canvas");s.width=Math.round(o.width*i),s.height=Math.round(o.height*i),s.getContext("2d").drawImage(o,0,0,s.width,s.height);let r=s.toDataURL("image/jpeg",.85),l=W("img");await yn(this.hass,l,r),this._images={...this._images,[l]:{url:r,aspect:s.height/s.width}};let c=this.floor?.rooms.length?it(this.floor.rooms.flatMap(d=>d.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,M(c.x1-c.x0)):12,opacity:.5}})}render(){let t=this.floor,e=t?lt(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return b`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}">
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?b`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:y}
            <div class="fp3d-seg" role="group" aria-label=${this.t("tool_select")}>
              ${["select","rect","polygon","wall","opening","furniture","outdoor","pool","hole","roof","energy"].map(n=>b`<button
                  aria-pressed=${this._tool===n}
                  ?disabled=${!t||!this.isAdmin&&n!=="select"}
                  @click=${()=>{if(this._tool=n,this._draft=[],this._cursor=null,this._pipeMode=!1,this._pipeDraft=null,n==="pool"&&this.outdoorArea?.type!=="pool"){let o=t?.outdoor.find(i=>i.type==="pool");o&&this.selectItem("outdoor",o.id)}this._sideOpen=n!=="select"}}
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
              ${this.isAdmin?b`<button aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>${this.t("lock_plan")}</button>`:y}
            </div>
            ${this._tool==="pool"?b`<div class="fp3d-seg" role="group" aria-label=${this.t("pool_shape")}>
                    ${["rect","round","oval","free"].map(n=>b`<button
                          aria-pressed=${!this._pipeMode&&(this._poolShape??"rect")===n}
                          @click=${()=>(this._poolShape=n,this._outdoorFree=n==="free",this._pipeMode=!1,this._pipeDraft=null,this._draft=[])}
                        >
                          ${n==="rect"?"\u25AD":n==="round"?"\u25EF":n==="oval"?"\u2B2D":"\u270E"} ${this.t(`pool_shape_${n}`)}
                        </button>`)}
                  </div>
                  ${yt("pool")?b`<div class="fp3d-seg" role="group">
                        <button aria-pressed=${!!this._pipeMode} title=${this.t("pool_pipe_draw_hint")} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null,this._draft=[])}>〰 ${this.t("pool_pipe_draw")}</button>
                      </div>`:y}`:y}
            ${this._tool==="outdoor"?b`<label class="fp3d-outdoor-type" title=${this.t("outdoor_draw_type_hint")}
                    >${this.t("outdoor_draw_type")}
                    <select
                      @change=${n=>{this._outdoorType=n.target.value,this._outdoorType==="pool"&&(this._outdoorFree=this._poolShape==="free"),this._draft=[]}}
                    >
                      ${_o.filter(n=>n!=="pool").map(n=>b`<option value=${n} ?selected=${n===(this._outdoorType??"lawn")}>${this.t(`out_${n}`)}</option>`)}
                    </select></label
                  >
                  ${b`<div class="fp3d-seg" role="group" aria-label=${this.t("tool_outdoor")}>
                        <button aria-pressed=${!this._outdoorFree} @click=${()=>(this._outdoorFree=!1,this._draft=[])}>▭ ${this.t("outdoor_shape_rect")}</button>
                        <button aria-pressed=${this._outdoorFree} @click=${()=>(this._outdoorFree=!0,this._draft=[])}>✎ ${this.t("outdoor_shape_free")}</button>
                      </div>`}`:y}
            ${e?.warnings.length?b`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:y}
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
                </div>`:y}
            ${this.houseTool?b`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:y}
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
              ${this.renderBackground(t)} ${this.renderGrid()} ${this.renderGhost()} ${e?this.renderWalls(e.walls):y}
              ${t?this.renderOutdoor(t):y} ${t?this.renderRooms(t):y} ${t?this.renderFurniture(t):y}
              ${t?this.renderFreeWalls(t):y}
              ${t&&e?this.renderOpenings(t,e.walls):y} ${t?this.renderMeter(t):y}
              ${t&&this._tool==="select"?this.renderDevices(t):y}
              ${this.room&&this.isAdmin&&this._tool==="select"&&!this._openingId&&!this._furnitureId&&!this.isFixedItem("room",this.room.id)?this.renderHandles(this.room):y}
              ${t?this.renderOutdoorHandles(t):y}
              ${this.room&&this._tool==="select"?this.renderSplitMarks(this.room):y}
              ${t?this.renderHeadroom(t):y}
              ${this._tool==="roof"?F`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?F`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&t&&yt("pool")?this.renderPoolPlan(t):y} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${t?this._wallPick?this.t("hint_wall_pick"):this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this._outdoorFree?this.t("hint_outdoor_free"):this._tool==="pool"&&this._jointPlace?this.t("hint_joint_place"):this._tool==="pool"&&this._pipeMode?this.t(this.poolArea?this._pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool"):this._tool==="pool"&&yt("pool")?this.t("hint_pool_tech"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?b`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:y}
          ${this._split?this.render3d():y}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}renderBackground(t){let e=t?.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return y;let[o,i]=this.toScreen([e.x,e.z]),s=e.width*this._view.scale,r=s*n.aspect,l=e.rotation??0,c=this.bgHandles();return F`<g transform="rotate(${l} ${o+s/2} ${i+r/2})">
      <image href=${n.url} x=${o} y=${i} width=${s} height=${r} opacity=${e.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
      ${c?F`<rect class="fp3d-bg-frame" x=${o} y=${i} width=${s} height=${r} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${o+s} cy=${i+r} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${o+s/2} y1=${i} x2=${o+s/2} y2=${i-30} />
            <circle cx=${o+s/2} cy=${i-30} r="16" class="fp3d-hit" />
            <circle cx=${o+s/2} cy=${i-30} r="8" />
            <path d="M${o+s/2-4} ${i-31}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>${this.renderBgRuler()}`}bgHandles(){return!!this.floor?.background&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){let t=this._bgLevel?.length?this._bgLevel:this._bgRuler;if(!t?.length)return y;let e=t.map(n=>this.toScreen(n));return F`<g class="fp3d-bg-ruler">
      ${e.length===2?F`<line x1=${e[0][0]} y1=${e[0][1]} x2=${e[1][0]} y2=${e[1][1]} />`:y}
      ${e.map(([n,o])=>F`<circle cx=${n} cy=${o} r="6" />`)}
    </g>`}applyBgLevel(t,e){let n=this.floor?.background,o=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!o||Math.hypot(e[0]-t[0],e[1]-t[1])<.05)return;let i=Math.atan2(e[1]-t[1],e[0]-t[0]),s=Math.round(i/(Math.PI/2))*(Math.PI/2)-i;if(Math.abs(s)<1e-4)return;let r=n.width*o.aspect,l=[n.x+n.width/2,n.z+r/2],c=l[0]-t[0],d=l[1]-t[1],p=[t[0]+c*Math.cos(s)-d*Math.sin(s),t[1]+c*Math.sin(s)+d*Math.cos(s)],h=(n.rotation??0)+s*180/Math.PI;h=Math.round((((h+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:h,x:M(p[0]-n.width/2),z:M(p[1]-r/2)}})}applyBgRuler(t){let n=this.floor?.background,o=this._bgRuler,i=n?this._images[n.image_id]:void 0;if(!n||!i||!o||o.length<2||!(t>0))return;let s=Math.hypot(o[1][0]-o[0][0],o[1][1]-o[0][1]);if(s<1e-4)return;let r=t/s,l=n.width*i.aspect,c=[n.x+n.width/2,n.z+l/2],d=o[0],p=[d[0]+r*(c[0]-d[0]),d[1]+r*(c[1]-d[1])],h=n.width*r,u=l*r;this.updateFloor({background:{...n,width:M(h),x:M(p[0]-h/2),z:M(p[1]-u/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(t,e,n){let o=t.width*n,i=t.x+t.width/2,s=t.z+o/2,r=-(t.rotation??0)*Math.PI/180,l=e[0]-i,c=e[1]-s;return[i+l*Math.cos(r)-c*Math.sin(r)-t.x,s+l*Math.sin(r)+c*Math.cos(r)-t.z]}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,o=t>=90?.1:t>=30?.5:1,i=t>=20?1:5,[s,r]=this.toWorld(0,0),[l,c]=this.toWorld(e,n),d=[],p=(f,m)=>{for(let g=Math.ceil(s/f)*f;g<=l;g+=f){let _=this.toScreen([g,0])[0];d.push(F`<line class=${m} x1=${_} y1="0" x2=${_} y2=${n} />`)}for(let g=Math.ceil(r/f)*f;g<=c;g+=f){let _=this.toScreen([0,g])[1];d.push(F`<line class=${m} x1="0" y1=${_} x2=${e} y2=${_} />`)}};o<i&&p(o,"fp3d-grid-minor"),p(i,"fp3d-grid-major");let[h,u]=this.toScreen([0,0]);return d.push(F`<circle class="fp3d-origin" cx=${h} cy=${u} r="3" />`),F`<g pointer-events="none">${d}</g>`}renderGhost(){let t=this._doc?.floors.findIndex(n=>n.id===this._floorId)??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?F`<g pointer-events="none">${e.rooms.map(n=>F`<polygon class="fp3d-ghost" points=${n.points.map(o=>this.toScreen(o).join(",")).join(" ")} />`)}</g>`:y}renderWalls(t){let e=this.floor?.height??2.5;return F`<g pointer-events="none">${t.map(n=>{let o=n.height!==void 0&&n.height<e-.01,i=`fp3d-wall${n.exterior?" fp3d-wall-ext":""}${o?" fp3d-wall-low":""}`;return F`<polygon class=${i} points=${n.footprint.map(s=>this.toScreen(s).join(",")).join(" ")} />`})}</g>`}edgeParts(t,e){let n=this.floor;if(!n)return[0];let i=lt(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(r=>r.room_id===t.id&&r.edge===e).map(r=>r.t0));return i.length?[...new Set(i)].sort((s,r)=>s-r):[0]}setEdgeHeight(t,e,n,o){let i=this.floor;if(!i||!this.isAdmin)return;if(o!==void 0){let l=this.edgeParts(t,e).length;this.change((c,d)=>{let p=d.rooms.find(m=>m.id===t.id);if(!p)return;let h=(p.wall_heights??[]).slice(0,p.points.length);for(;h.length<p.points.length;)h.push(null);let u=h[e],f=Array.isArray(u)?[...u]:new Array(l).fill(typeof u=="number"?u:null);for(;f.length<l;)f.push(null);f[o]=n,h[e]=f.every(m=>m===f[0])?f[0]:f,p.wall_heights=h.every(m=>m===null)?void 0:h});return}let r=lt(i.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},i.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===t.id&&c.edge===e)).flatMap(l=>l.sources);r.some(l=>l.room_id===t.id&&l.edge===e)||r.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((l,c)=>{for(let d of r){let p=c.rooms.find(u=>u.id===d.room_id);if(!p)continue;let h=(p.wall_heights??[]).slice(0,p.points.length);for(;h.length<p.points.length;)h.push(null);h[d.edge]=n,p.wall_heights=h.every(u=>u===null)?void 0:h}})}renderCameraDetections(t){if(!this.hass)return y;let e=this.hass,n=Vr(e,t),o=[...new Set(n.map(s=>Or(e,s)))],i=rt("camera_cockpit");return b`<p class="fp3d-sub fp3d-wide">
      ${n.length?b`${i?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:o.map(s=>this.t(`detect_${s}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(t,e,n){if(!this.isAdmin)return;let o=t.points,i=Math.hypot(o[(e+1)%o.length][0]-o[e][0],o[(e+1)%o.length][1]-o[e][1]),s=this.edgeParts(t,e),r=n===void 0?0:s[n],l=n===void 0?i:s[n+1]??i;if(l-r<.4)return;let c=Math.round((r+l)/2*100)/100;this.change((d,p)=>{let h=p.rooms.find(m=>m.id===t.id);if(!h)return;let u=(h.wall_splits??[]).slice(0,h.points.length);for(;u.length<h.points.length;)u.push(null);u[e]=[...u[e]??[],c].sort((m,g)=>m-g),h.wall_splits=u;let f=h.wall_heights?.[e];if(Array.isArray(f)){let m=n??0;f.splice(m+1,0,f[m]??null)}})}moveSplit(t,e,n,o){let i=t.points,s=Math.hypot(i[(e+1)%i.length][0]-i[e][0],i[(e+1)%i.length][1]-i[e][1]),r=this.edgeParts(t,e).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(s-.1,Math.round(o*100)/100));r.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{let h=d.rooms.find(f=>f.id===t.id)?.wall_splits?.[e];if(!h)return;let u=h.findIndex(f=>Math.abs(f-n)<.001);u>=0&&(h[u]=l),h.sort((f,m)=>f-m)})}joinSplit(t,e,n,o){this.change((i,s)=>{let r=s.rooms.find(d=>d.id===t.id);if(!r?.wall_splits?.[e])return;let l=r.wall_splits[e].filter(d=>Math.abs(d-n)>.001);r.wall_splits[e]=l.length?l:null,r.wall_splits.every(d=>!d)&&(r.wall_splits=void 0);let c=r.wall_heights?.[e];Array.isArray(c)&&(c.splice(o,1),c.every(d=>d===c[0])&&(r.wall_heights[e]=c[0]??null))})}renderSplitMarks(t){let e=t.points;return F`${(t.wall_splits??[]).flatMap((n,o)=>{if(!n||o>=e.length)return[];let i=e[o],s=e[(o+1)%e.length],r=Math.hypot(s[0]-i[0],s[1]-i[1])||1,l=(s[0]-i[0])/r,c=(s[1]-i[1])/r;return n.map(d=>{let[p,h]=this.toScreen([i[0]+l*d,i[1]+c*d]);return F`<line class="fp3d-split-mark" x1=${p-c*7} y1=${h+l*7} x2=${p+c*7} y2=${h-l*7} />`})})}`}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length,o=this._doc.settings,i=new Set;for(let r of lt(this.floor.rooms,{exterior:o.wall_exterior,interior:o.wall_interior},this.floor.walls??[]).walls)if(r.exterior)for(let l of r.sources)l.room_id===t.id&&i.add(l.edge);let s=(r,l)=>this.change((c,d)=>{let p=d.rooms.find(u=>u.id===t.id);if(!p)return;let h=(p.wall_thickness??[]).slice(0,p.points.length);for(;h.length<p.points.length;)h.push(null);h[r]=l,p.wall_thickness=h.every(u=>u===null)?void 0:h});return b`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${t.points.flatMap((r,l)=>{let c=t.points[(l+1)%n],d=Math.hypot(c[0]-r[0],c[1]-r[1]),p=t.wall_heights?.[l]??null,h=()=>this._edgeHi=l,u=()=>this._edgeHi=null,f=this.edgeParts(t,l);return(f.length>1?f.map((g,_)=>_):[void 0]).map(g=>{let _=g===void 0?Array.isArray(p)?p[0]??null:p:Array.isArray(p)?p[g]??null:p,v=g===void 0?d:(f[g+1]??d)-f[g],$=k=>this.setEdgeHeight(t,l,k,g);return b`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${_!==null?" fp3d-edge-low":""}"
            @mouseenter=${h}
            @mouseleave=${u}
            @focusin=${h}
            @focusout=${u}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${g===void 0?"":` \xB7 ${this.t("wall_part",{n:g+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(v,2)}</span
              ></span
            >
            ${_===0?b`<span class="fp3d-muted">${this.t("wall_none")}</span>`:this.len(this.t("wall_height"),_??e,k=>$(k>=e-.005?null:Math.max(.05,k)),.05,.05)}
            ${this.isAdmin&&_!==null?b`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>$(null)}>↥</button>`:y}
            ${this.isAdmin&&_!==0?b`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>$(0)}>${this.t("wall_none")}</button>`:y}
            ${this.isAdmin&&v>=.4?b`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(t,l,g)}>✂</button>`:y}
            ${(g===void 0||g===0)&&_!==0?b`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(t.id,l)}>▦</button>`:y}
            ${(g===void 0||g===0)&&_!==0?b`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),t.wall_thickness?.[l]??(i.has(l)?o.wall_exterior:o.wall_interior),k=>{let x=i.has(l)?o.wall_exterior:o.wall_interior,A=Math.min(1.5,Math.max(.02,Math.round(k*1e3)/1e3));s(l,Math.abs(A-x)<5e-4?null:A)},.01,.02)}
                  ${this.isAdmin&&t.wall_thickness?.[l]!=null?b`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:y}</span
                >`:y}
            ${g!==void 0&&g>0&&(t.wall_splits?.[l]??[]).some(k=>Math.abs(k-f[g])<.001)?b`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),f[g],k=>this.moveSplit(t,l,f[g],k),.05,.1)}
                  ${this.isAdmin?b`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(t,l,f[g],g)}>⨉</button>`:y}</span
                >`:y}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!e||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return y;if(e.pool_shape){let n=it(e.points),o=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return F`${o.map((i,s)=>{let[r,l]=this.toScreen(i);return F`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${e.id}:${s}`}><circle cx=${r} cy=${l} r="16" class="fp3d-hit" /><rect x=${r-5} y=${l-5} width="10" height="10" /></g>`})}`}return F`${e.points.map((n,o)=>{let[i,s]=this.toScreen(n);return F`<g class="fp3d-vertex" data-out-vertex=${`${e.id}:${o}`}><circle cx=${i} cy=${s} r="16" class="fp3d-hit" /><circle cx=${i} cy=${s} r="6" /></g>`})}`}renderOutdoor(t){return F`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[o,i]=this.toScreen(kt(e.points)),s=it(e.points),r=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return F`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${r?F`<text x=${o} y=${i+4}>${this.t(`out_${e.type}`)}</text>`:y}
      </g>`})}</g>`}renderOutdoorForm(t){let e=this.isAdmin,n=En(t.points),o=it(t.points),i=(s,r)=>{let{x0:l,z0:c,x1:d,z1:p}=o;s==="x"&&([l,d]=[r,r+(d-l)]),s==="z"&&([c,p]=[r,r+(p-c)]),s==="w"&&(d=l+Math.max(.1,r)),s==="d"&&(p=c+Math.max(.1,r)),this.updateOutdoor({points:[[l,c],[d,c],[d,p],[l,p]].map(([h,u])=>[M(h),M(u)])})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${_o.map(s=>b`<option value=${s} ?selected=${s===t.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${n?b`${this.len(this.t("x"),o.x0,s=>i("x",s))} ${this.len(this.t("z"),o.z0,s=>i("z",s))}
            ${this.len(this.t("width"),o.x1-o.x0,s=>i("w",s),.01,.1)} ${this.len(this.t("depth"),o.z1-o.z0,s=>i("d",s),.01,.1)}`:y}
        ${bo(t.type)?this.len(this.t("outdoor_height"),t.height??xn[t.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,M(s)))}),.05,.1):t.type==="balcony"?this.len(this.t("balcony_rail"),t.height??1,s=>this.updateOutdoor({height:Math.min(2,Math.max(.4,M(s)))}),.05,.4):y}
        ${this.len(this.t("outdoor_offset"),t.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,M(s)))||null}),.05)}
        ${t.type!=="pool"?b`${this.len(this.t("outdoor_slope"),t.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,M(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!e} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${$s.map(s=>b`<option value=${s} ?selected=${s===(t.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:y}
        ${t.type==="pool"?this.renderPoolShape(t):y}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${t.outline!==!1} ?disabled=${!e} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${t.type==="fence"||t.type==="pergola"?b`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:y}
        ${t.type==="pergola"?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.bracing} ?disabled=${!e} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!t.cut} ?disabled=${!e} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${t.slope?b`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:y}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${t.type==="pool"?this.renderPoolPro(t):y}
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}openWallView(t,e,n=null){this._wallView={roomId:t,edge:e},this._wallSel=n,this.wallDrag=null}openWallViewFor(t){let e=this.floor;if(!e)return;let n=e.rooms.find(s=>s.points.length>=3&&C([t.x,t.z],s.points));if(!n)return;let o=-1,i=1/0;n.points.forEach((s,r)=>{let l=n.points[(r+1)%n.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1])||1,d=Math.max(0,Math.min(1,((t.x-s[0])*(l[0]-s[0])+(t.z-s[1])*(l[1]-s[1]))/(c*c))),p=Math.hypot(t.x-(s[0]+(l[0]-s[0])*d),t.z-(s[1]+(l[1]-s[1])*d));p<i&&(i=p,o=r)}),o>=0&&this.openWallView(n.id,o,t.id)}openRoomWalls(t){let e=this.floor;if(!e)return;let n=0,o=-1;t.points.forEach((i,s)=>{let r=On(Me(t,s),e,t).length;r>o&&(o=r,n=s)}),this.openWallView(t.id,n)}setWallView3d(t){this._wallView3d=t,this.wall3dKey="";try{localStorage.setItem("neonplan3d.wall3d",t?"1":"0")}catch{}}setupWall3d(t,e,n){let o=`${e.id}|${n}`;if(this.wall3dKey===o&&this.wall3dEl===t)return;let i=this.wall3dEl!==t;this.wall3dKey=o,this.wall3dEl=t,i&&t.addEventListener("pointerdown",s=>this.runDown3d(s),{capture:!0}),(async()=>{let s;for(let u=0;u<120&&!(s=t.viewer);u++)await new Promise(f=>setTimeout(f,50));i&&await new Promise(u=>setTimeout(u,250));let r=this.floor;if(!s||!r||this.wall3dKey!==o)return;if(!s.__npWall){s.__npWall=!0,s.updateWalls=function(){for(let f of this.floors)f.mask.standing.value=65535,f.mask.glass.value=0},s.labels.style.display="none";let u=new CSSStyleSheet;u.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),t.shadowRoot&&(t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,u]),s.camera.fov=58,s.camera.updateProjectionMatrix(),s.controls.minRadius=.6,s.controls.leftDragTurns=!1}let l=Me(e,n),c=Math.max(1.5,...e.points.map(u=>st(l,u).d)),d=Ut(l,l.length/2,0),p=r.elevation+(s.floorMap.get(r.id)?.y??0)+1.15;s.controls.maxRadius=Math.max(1.4,c-.25);let h=s.getView();h.target.set(d[0],p,d[1]),s.flyTo({...h,radius:Math.max(1.2,Math.min(c*.8,c-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},i?0:650),s.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let t=()=>{this.liftRaf=0;let e=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!e?.isConnected||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(t),!n))return;let o=this.floor,i=this._wallSel?o?.furniture.find(u=>u.id===this._wallSel):void 0,s=e.viewer;if(!i||!o||!s||!ve(i)||i.locked){n.hidden=!0;return}let r=bt(o,i),l=o.elevation+(s.floorMap.get(o.id)?.y??0)+r+i.h,c=s.camera.position.clone().set(i.x,l+.12,i.z).project(s.camera);if(c.z>1){n.hidden=!0;return}n.hidden=!1;let d=e.getBoundingClientRect(),p=n.offsetParent?.getBoundingClientRect()??d;n.style.transform=`translate(${d.left-p.left+(c.x+1)/2*d.width}px, ${d.top-p.top+(1-c.y)/2*d.height}px)`;let h=n.querySelector("b");h&&(h.textContent=this.m(Math.round(r*100)/100,2))};this.liftRaf=requestAnimationFrame(t)}liftDown(t){let e=this.floor,n=this._wallSel?e?.furniture.find(d=>d.id===this._wallSel):void 0,i=this.wall3dEl?.viewer;if(!e||!n||!i||!this.isAdmin)return;t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId);let s=Math.hypot(i.camera.position.x-n.x,i.camera.position.z-n.z)||1,r=this.wall3dEl.clientHeight||1,l=e.rooms.find(d=>d.points.length>=3&&C([n.x,n.z],d.points)),c=Math.max(e.height,l?.ceiling_height??0);this.lift={id:n.id,y:bt(e,n),startY:t.clientY,perPx:2*s*Math.tan(i.camera.fov*Math.PI/360)/r,base:this._doc,top:Math.max(0,c-n.h),moved:!1}}liftMove(t){let e=this.lift,n=this._wallView?this.floor?.rooms.find(s=>s.id===this._wallView.roomId):void 0;if(!e||!n)return;let o=(e.startY-t.clientY)*e.perPx;if(!e.moved&&Math.abs(t.clientY-e.startY)<3)return;e.moved=!0;let i=Math.min(e.top,Math.max(0,Math.round((e.y+o)*100)/100));this.moveOnWall(Me(n,this._wallView.edge),e.id,0,i,e.base,!1)}liftUp(){let t=this.lift;this.lift=null,t?.moved&&this.pushHistory(t.base)}wallPickTip=[0,0];toggleWallPick(t){let e=t.closest(".fp3d-toolbar")?.getBoundingClientRect(),n=t.getBoundingClientRect();this.wallPickTip=e?[n.left-e.left+n.width/2,n.bottom-e.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(t){let e=this.floor;if(!e)return;let n=null;for(let o of e.rooms){if(o.points.length<3)continue;let i=C(t,o.points)?-.25:0;o.points.forEach((s,r)=>{let l=o.points[(r+1)%o.points.length],c=(l[0]-s[0])**2+(l[1]-s[1])**2||1,d=Math.max(0,Math.min(1,((t[0]-s[0])*(l[0]-s[0])+(t[1]-s[1])*(l[1]-s[1]))/c)),p=Math.hypot(t[0]-(s[0]+(l[0]-s[0])*d),t[1]-(s[1]+(l[1]-s[1])*d));p<.6&&(!n||p+i<n.d)&&(n={room:o,edge:r,d:p+i})})}if(!n){let o=e.rooms.find(i=>i.points.length>=3&&C(t,i.points));if(!o)return;this._wallPick=!1,this.openRoomWalls(o);return}this._wallPick=!1,this.openWallView(n.room.id,n.edge)}turnOnWall(t,e){let n=this._doc.settings.wall_interior;this.change((o,i)=>{let s=i.furniture.find(c=>c.id===t);if(!s)return;s.rotation=Math.round((e%360+360)%360);let[r,l]=qo(i,s,s.x,s.z,n,.6);Object.assign(s,{x:r,z:l})})}moveFromWall(t,e,n){this.change((o,i)=>{let s=i.furniture.find(r=>r.id===e);s&&(s.x=Math.round((s.x+t.n[0]*n)*1e3)/1e3,s.z=Math.round((s.z+t.n[1]*n)*1e3)/1e3)})}moveOnWall(t,e,n,o,i=this._doc,s=!0){this.change((r,l)=>{let c=l.furniture.find(d=>d.id===e);c&&(Object.assign(c,gr(t,c,n)),o!==null&&(c.mount_y=Math.round(Math.min(vi,Math.max(0,o))*1e3)/1e3))},i,s)}wallTurn(t,e){let n=Math.atan2(-t.n[0],t.n[1])*180/Math.PI;return((e.rotation-n)%360+360)%360}wallPicKey(t,e){return`${e.type}|${e.w}|${e.d}|${e.h}|${e.variant??""}|${Math.round(this.wallTurn(t,e))}`}async askWallPics(t,e){let n=e.filter(o=>!this.wallPicsAsked.has(this.wallPicKey(t,o)));if(n.length){for(let o of n)this.wallPicsAsked.add(this.wallPicKey(t,o));try{let o=await _i();for(let i of n){let s=o.furnitureFront({type:i.type,w:i.w,d:i.d,h:i.h,variant:i.variant,lamp:Eo[i.type]??null},this.wallTurn(t,i),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(t,i),s)}}catch{}this._wallPicTick++}}renderWallView(){let t=this._wallView,e=this.floor,n=t?e?.rooms.find(E=>E.id===t.roomId):void 0;if(!t||!e||!n||t.edge>=n.points.length)return y;let o=n.points.length,i=Me(n,t.edge),s=i.length,r=Math.max(e.height,n.ceiling_height??0),l=On(i,e,n),c=Uo(i,e),d=E=>i.rightward?E:s-E,p=(E,R)=>[Math.min(d(E),d(R)),Math.abs(R-E)],h=E=>r-E,u=this.isAdmin,f=this._wallSel?e.furniture.find(E=>E.id===this._wallSel):void 0,m=f?l.find(E=>E.id===f.id)??(()=>{let E=Et(f).map(j=>st(i,j)),R=bt(e,f);return{kind:"furniture",id:f.id,s0:Math.min(...E.map(j=>j.s)),s1:Math.max(...E.map(j=>j.s)),y0:R,y1:R+f.h,d:Math.min(...E.map(j=>j.d))}})():null,g=!!f&&ve(f),_=E=>this.m(E,2),v=E=>{let R=E.currentTarget.closest("svg"),j=R.createSVGPoint();return j.x=E.clientX,j.y=E.clientY,j.matrixTransform(R.getScreenCTM().inverse())},$=E=>[0,s,...l.filter(R=>R.id!==E).flatMap(R=>[R.s0,R.s1]),...c.flatMap(R=>[R.s0,R.s1])],k=(E,R)=>{if(!u)return;E.stopPropagation();let j=l.find(B=>B.id===R),D=e.furniture.find(B=>B.id===R),H=v(E);E.currentTarget.closest("svg").setPointerCapture(E.pointerId),this.wallDrag={id:R,x:H.x,y:H.y,base:this._doc,s0:j.s0,y0:j.y0,lift:!!D&&ve(D),moved:!1},this._wallSel=R,this._runSel=null},x=E=>{let R=this.wallDrag;if(!R)return;let j=v(E),D=j.x-R.x,H=R.y-j.y;if(!R.moved&&Math.hypot(D,H)<.02)return;R.moved=!0;let B=l.find(dt=>dt.id===R.id),q=B?B.s1-B.s0:0,U=R.s0+(i.rightward?D:-D);if(U=Math.round(U*100)/100,!E.altKey)for(let dt of $(R.id))Math.abs(U-dt)<.04?U=dt:Math.abs(U+q-dt)<.04&&(U=dt-q);let et=R.lift?Math.round((R.y0+H)*100)/100:null;this.moveOnWall(i,R.id,U-R.s0,et,R.base,!1)},A=()=>{let E=this.wallDrag;this.wallDrag=null,E?.moved&&this.pushHistory(E.base)},P=E=>{if(this._runMode&&(E.key==="Escape"||E.key==="Enter")){E.preventDefault(),E.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(E.key==="Escape"){this._wallView=null;return}if(!m&&(E.key==="ArrowLeft"||E.key==="ArrowRight")){E.preventDefault(),L(E.key==="ArrowLeft"?S:z);return}if(!m||!u||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(E.key)||E.target.closest("input, select, textarea"))return;E.preventDefault();let R=E.shiftKey?.1:.01,j=E.key==="ArrowRight"?R:E.key==="ArrowLeft"?-R:0,D=i.rightward?j:-j,H=E.key==="ArrowUp"?R:E.key==="ArrowDown"?-R:0;this.moveOnWall(i,m.id,D,g&&H?m.y0+H:null)},w=m?(()=>{let[E,R]=p(m.s0,m.s1),j=h(m.y0),D=Math.min(r+.25,h(0)+.25);return F`<g class="fp3d-wv-dims">
            ${E>.03?F`<line x1="0" y1=${D} x2=${E} y2=${D} /><text x=${E/2} y=${D-.05}>${_(E)}</text>`:y}
            ${s-E-R>.03?F`<line x1=${E+R} y1=${D} x2=${s} y2=${D} /><text x=${E+R+(s-E-R)/2} y=${D-.05}>${_(s-E-R)}</text>`:y}
            ${m.y0>.03?F`<line x1=${E+R/2} y1=${j} x2=${E+R/2} y2=${r} /><text x=${E+R/2+.05} y=${(j+r)/2} class="fp3d-wv-up">${_(m.y0)}</text>`:y}
          </g>`})():y,z=(t.edge+(i.rightward?1:-1)+o)%o,S=(t.edge+(i.rightward?-1:1)+o)%o,I=E=>this.t("wall_n",{a:E+1,b:(E+1)%o+1}),L=E=>this.openWallView(n.id,E);this._wallPicTick,this.askWallPics(i,l.map(E=>e.furniture.find(R=>R.id===E.id)).filter(E=>!!E));let O=Math.max(.09,Math.min(.16,s/40)),T=this.canLayRuns?this.runPool:void 0,V=this.runCtx3d=T?{frame:i,floor:e,room:n,key:`${n.id}|${t.edge}`,L:s,H:r,gap:(ke(e,n.id,i.a,i.b)?this._doc.settings.wall_interior/2:0)+Pa,runs:kr(i,(T.pool?.pipes??[]).filter(E=>E.floor_id===e.id),tt(this._doc,e,T)),pool:T,pt:E=>{let R=v(E);return{s:i.rightward?R.x:s-R.x,y:r-R.y}}}:null;return b`<div class="fp3d-wv-veil" @click=${E=>E.target===E.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${P}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${I(S)}`} @click=${()=>L(S)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:t.edge+1,b:(t.edge+1)%o+1})} · ${this.m(s,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${I(z)}`} @click=${()=>L(z)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${V&&u?b`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:y}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(i,n,V)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${I(S)}`} @click=${()=>L(S)}>‹<small>${I(S)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${I(z)}`} @click=${()=>L(z)}>›<small>${I(z)}</small></button>
        ${this._wallView3d?b`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${Ui(E=>E&&this.setupWall3d(E,n,t.edge))}
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
              ?furnish=${u}
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
              @furniture-select=${E=>this._wallSel=E.detail.id}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${E=>this.liftDown(E)} @pointermove=${E=>this.liftMove(E)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:b`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""}"
          viewBox="${-.5} ${-.35} ${s+1} ${r+.9}"
          preserveAspectRatio="xMidYMid meet"
          @pointerdown=${E=>{V&&this._runMode?this.runDown(E,V):this._runSel&&(this._runSel=null)}}
          @pointermove=${E=>{if(x(E),V&&this.jointDrag)this.jointMove(E,V);else if(V&&this.fitDrag)this.fittingMove(E,V);else if(V&&this.runDrag)this.runPointMove(E,V);else if(V&&this._runMode==="draw"&&this._runDraft){let R=V.pt(E);this.runHover=[R.s,R.y],this.requestUpdate()}}}
          @pointerup=${()=>{A(),this.runPointUp(),this.fittingUp(V);let E=this.jointDrag;this.jointDrag=null,E?.moved?this.pushHistory(E.base):E&&V&&this.openCard(V.pool.id,`joint:${E.id}`)}}
          @pointercancel=${()=>{A(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${O}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${s} height=${r} />
          ${Array.from({length:Math.floor(r/.5)},(E,R)=>F`<line class="fp3d-wv-grid" x1="0" x2=${s} y1=${h((R+1)*.5)} y2=${h((R+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${h((R+1)*.5)+.03}>${((R+1)*.5).toFixed(1)}</text>`)}
          ${c.map(E=>{let[R,j]=p(E.s0,E.s1),D=e.openings.find(B=>B.id===E.id),H=D?.type==="window"?this.t("opening_window"):D?.type==="garage"?this.t("opening_garage"):this.t("opening_door");return F`<rect class="fp3d-wv-hole ${D?.type==="window"?"fp3d-wv-window":""}" x=${R} y=${h(E.y1)} width=${j} height=${E.y1-E.y0} />
              ${j>O*3.5?F`<text class="fp3d-wv-hole-label" x=${R+j/2} y=${h(E.y1)+O*1.3} style="font-size:${O*.85}px">${H}</text>`:y}`})}
          ${l.map(E=>{let[R,j]=p(E.s0,E.s1),D=e.furniture.find(et=>et.id===E.id),H=D.name||fe(this.hass,D.type),B=E.y1-E.y0,q=this.wallPics.get(this.wallPicKey(i,D)),U=d(st(i,[D.x,D.z]).s);return F`<g class="fp3d-wv-item ${q?"fp3d-wv-pic":""} ${E.id===this._wallSel?"fp3d-wv-sel":""}" @pointerdown=${et=>k(et,E.id)} @dblclick=${()=>{this._wallView=null,this.selectItem("furniture",E.id)}}>
              ${q?F`<image href=${q.url} x=${U+q.x0} y=${h(E.y0+q.y1)} width=${q.x1-q.x0} height=${q.y1-q.y0} preserveAspectRatio="none" />`:y}
              <rect x=${R} y=${h(E.y1)} width=${j} height=${Math.max(.02,B)}><title>${H}</title></rect>
              ${!q&&j>O*3&&B>O*1.4?F`<text x=${R+j/2} y=${h(E.y1)+Math.min(B/2,O*1.6)+O*.35} style="font-size:${O}px">${H}</text>`:y}
            </g>`})}
          ${w}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${s+.3} y1=${r} y2=${r} />
          ${V?this.renderRuns(V,d,h):y}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${V&&(this._runMode||this._runSel&&!m)?this.renderRunFoot(V):m&&f?b`<b>${f.name||fe(this.hass,f.type)}</b>
                ${this.fixButton("furniture",m.id)}
                ${V&&wt.includes(f.type)?b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(V.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:y}
                ${f.locked&&u?b`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:y}
                ${this.len(this.t("wall_view_left"),Math.round(p(m.s0,m.s1)[0]*1e3)/1e3,E=>{let R=E-p(m.s0,m.s1)[0];this.moveOnWall(i,m.id,i.rightward?R:-R,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,m.d)*1e3)/1e3,E=>this.moveFromWall(i,m.id,E-m.d),.01,0)}
                ${g?this.len(this.t("mount_height"),Math.round(m.y0*1e3)/1e3,E=>this.moveOnWall(i,m.id,0,E),.01,0):b`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${u&&!f.locked?b`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,E=>this.turnOnWall(f.id,E),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:y}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",m.id)}}>${this.t("wall_view_form")}</button>`:b`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
        </div>
      </div>
    </div>`}addOnWall(t,e,n){let o=this.floor;if(!o||!this.isAdmin)return;let[i,s,r]=Ht(t),l=[...On(e,o,n).map(m=>[m.s0,m.s1]),...Uo(e,o).filter(m=>m.y0<.05).map(m=>[m.s0,m.s1])],c=Math.max(0,e.length/2-i/2);for(let m=.1;m+i<=e.length-.05;m+=.05)if(!l.some(([g,_])=>m<_+.05&&m+i>g-.05)){c=m;break}let d=ke(o,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,[p,h]=Ut(e,c+i/2,d+s/2+.01),u=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),f={id:W("furniture"),type:t,x:M(p),z:M(h),rotation:u,w:i,d:s,h:r,variant:null};this.change((m,g)=>g.furniture.push(f)),this._runSel=null,this._runMode=null,this._wallSel=f.id}renderWallKit(t,e,n){let o=!!n,i=rt("energy_pro");if(!this.isAdmin||!o&&!i)return y;let s=l=>b`<button class="fp3d-btn" @click=${()=>this.addOnWall(l,t,e)}>+ ${this.t(`furn_${l}`)}</button>`,r=(l,c)=>b`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,l)}>+ ${this.t(c)}</button>`;return b`<aside class="fp3d-wv-kit">
      ${o?b`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${r("valve","wall_run_valve")} ${r("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(l=>b`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?null:l}}>+ ${this.t(`wall_kit_${l}`)}</button>`)}`:y}
      ${i?b`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`:y}
    </aside>`}get runPool(){return this.poolArea??this.floor?.outdoor.find(t=>t.type==="pool"&&t.points.length>=3)}get canLayRuns(){return yt("pool")&&!!this.runPool}runFrame(t){let[e,n]=t.split("|"),o=this.floor?.rooms.find(i=>i.id===e);return o&&Number(n)<o.points.length?Me(o,Number(n)):null}docWithDraft(){let t=this._runDraft;if(!t||!this._wallView)return this._doc;let e=[...t.from||!t.anchor?[]:[t.anchor],...t.pts];if(!e.length)return this._doc;let n=structuredClone(this._doc),o=n.floors.find(r=>r.outdoor.some(l=>l.id===t.pool)),i=o?.outdoor.find(r=>r.id===t.pool);if(!o||!i)return this._doc;i.pool??={};let s={id:"__draft",from:t.from,to:"",floor_id:o.id,points:e.map(r=>[r[0],r[2]]),heights:e.map(r=>r[1])};return i.pool.pipes=[...i.pool.pipes??[],s],n}runLast(t,e){if(t.pts.length)return t.pts[t.pts.length-1];if(t.fromT)return t.fromT;let n=tt(this._doc,e.floor,e.pool);if(t.extend){let i=e.pool.pool?.pipes?.find(r=>r.id===t.extend.pipe),s=i?ft(i,n):[];return(t.extend.end==="to"?s[s.length-1]:s[0])??null}let o=n(t.from);return o?[o.x,o.y,o.z]:null}runPick(t,e,n,o=!1){if(!o){for(let l of t.runs)for(let c of l.ends)if(Math.hypot(c.s-e,c.y-n)<.12)return{end:{pipe:l.id,end:c.end}}}let i=tt(this._doc,t.floor,t.pool),s=null,r=[...t.floor.furniture.filter(l=>wt.includes(l.type)).flatMap(l=>Gt(l.type).length?Gt(l.type).map(c=>`dev:${l.id}:${c}`):[`dev:${l.id}`]),...(t.pool.pool?.joints??[]).map(l=>l.kind==="wall"||l.kind==="floor"?`joint:${l.id}:inside`:`joint:${l.id}`)];for(let l of o?[]:r){let c=i(l);if(!c)continue;let d=st(t.frame,[c.x,c.z]);if(d.d<-.3||d.d>1.6)continue;let p=Math.hypot(d.s-e,c.y-n);p<.12&&(!s||p<s.d)&&(s={node:l,d:p})}if(s)return{node:s.node};for(let l of t.runs)for(let c of l.pieces){let[d,p]=[c.s1-c.s0,c.y1-c.y0],h=d*d+p*p,u=h>0?Math.max(0,Math.min(1,((e-c.s0)*d+(n-c.y0)*p)/h)):0,[f,m]=[c.s0+d*u,c.y0+p*u];if(Math.hypot(f-e,m-n)<.07)return{pipe:{id:l.id,p:Kt(t.frame,f,m,c.d0+(c.d1-c.d0)*u)}}}return{}}runDown(t,e){if(!this._runMode||!this.isAdmin)return;t.stopPropagation();let{s:n,y:o}=e.pt(t);this.runAt(e,n,o,t.altKey,t.detail,null)}runDown3d(t){let e=this.runCtx3d;if(!this._runMode||!e||t.button!==0||!this.isAdmin||!this._wallView3d)return;let n=this.wall3dEl?.viewer;if(!n)return;t.stopPropagation(),t.preventDefault();let o=n.renderer.domElement.getBoundingClientRect(),[i,s]=[t.clientX-o.left,t.clientY-o.top],r=n.furnitureIdAt(i,s),l=r?e.floor.furniture.find(v=>v.id===r&&wt.includes(v.type)):void 0,c=n.pointerRay(i,s),d=Ut(e.frame,0,e.gap),p=e.frame.n,h=c.d[0]*p[0]+c.d[2]*p[1];if(Math.abs(h)<1e-6)return;let u=((d[0]-c.o[0])*p[0]+(d[1]-c.o[2])*p[1])/h;if(u<=0&&!l)return;let f=[c.o[0]+c.d[0]*u,c.o[1]+c.d[1]*u,c.o[2]+c.d[2]*u],m=e.floor.elevation+(n.floorMap.get(e.floor.id)?.y??0),g=tt(this._doc,e.floor,e.pool),_=()=>{let v=Gt(l.type);if(!v.length)return`dev:${l.id}`;let $=k=>{let x=g(k),A=[x.x-c.o[0],x.y+m-c.o[1],x.z-c.o[2]],P=A[0]*c.d[0]+A[1]*c.d[1]+A[2]*c.d[2];return Math.hypot(A[0]-c.d[0]*P,A[1]-c.d[1]*P,A[2]-c.d[2]*P)};return v.map(k=>`dev:${l.id}:${k}`).sort((k,x)=>$(k)-$(x))[0]};this.runAt(e,st(e.frame,[f[0],f[2]]).s,f[1]-m,t.altKey,t.detail,l&&this._runMode==="draw"?_():null)}runAt(t,e,n,o,i,s){let r=this._runMode;if(!r)return;if(r==="hole_wall"||r==="hole_floor"||r==="tee"||r==="y")return this.placeJoint(t,r,e,n);let l=s?{node:s}:this.runPick(t,e,n,r!=="draw");if(r!=="draw"){l.pipe&&this.addFitting(t,l.pipe.id,l.pipe.p,r),this._runMode=null;return}let c=this._runDraft;if(!c){let d={pool:t.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:t.key,d:t.gap},p;l.end?p={...d,extend:l.end}:l.node?p={...d,from:l.node}:l.pipe?p={...d,fromT:l.pipe.p}:p={...d,pts:[Kt(t.frame,Math.round(e*20)/20,Math.round(n*20)/20,t.gap)]},this._runDraft={...p,anchor:this.runLast({...p,pts:[]},t)};return}if(i>=2)return this.finishRun("",null);if(l.node&&l.node!==c.from)return this.finishRun(l.node,null);if(l.pipe)return this.finishRun("",l.pipe.p);this._runDraft={...c,pts:[...c.pts,...this.runStep(c,t,e,n,o)],wall:t.key,d:t.gap}}runStep(t,e,n,o,i){let s=Math.round(n*20)/20,r=Math.round(o*20)/20,l=[],c=this.runLast(t,e);if(c&&t.wall!==e.key){let d=this.runFrame(t.wall),p=d&&br(d,t.d,e.frame,e.gap);p&&(c=[M(p[0]),c[1],M(p[1])],l.push(c))}if(c&&!i){let d=st(e.frame,[c[0],c[2]]);d.d>-.35&&d.d<.6&&(Math.abs(s-d.s)<Math.abs(r-c[1])?s=d.s:r=c[1])}return l.push(Kt(e.frame,s,r,e.gap)),l.map(d=>[M(d[0]),M(d[1]),M(d[2])])}finishRun(t,e,n=[],o){let i=this._runDraft,s=this.floor;if(this._runDraft=null,!i||!s)return;let r=[...i.pts,...n];if(!r.length&&!e&&(!t||t===i.from)&&!i.fromT)return;let l=null;this.changePool(i.pool,(c,d)=>{let p=c.joints??=[],h=c.pipes??=[],u=tt(this._doc,s,d),f=w=>{let z=w.startsWith("joint:")?p.find(S=>`joint:${S.id}`===w):void 0;return z?{x:z.x,z:z.z,y:z.y}:u(w)},m=w=>{let z=null;for(let I of h){let L=Se(ft(I,f),w);L&&L.d<.12&&(!z||L.d<z.d)&&(z={pipe:I,d:L.d})}let S=z&&Jo(z.pipe,f,w,W("joint"),W("pipe"));return!z||!S?"":(p.push(S.joint),h.splice(h.indexOf(z.pipe),1,S.first,S.second),`joint:${S.joint.id}:out2`)},g=(w,z=[])=>{let{kind:S,id:I,port:L}=X(w),O=S==="joint"&&!L?p.find(E=>E.id===I):void 0;if(!O||!O.kind)return w;if(O.kind==="wall"||O.kind==="floor")return`joint:${I}:inside`;let T=new Set([...h.flatMap(E=>[E.from,E.to]),...z]),V=Pe(O.kind).find(E=>!T.has(`joint:${I}:${E}`));return V?`joint:${I}:${V}`:w},_=i.fromT?m(i.fromT):g(i.from),v=e?m(e):g(t,[_]),$=r.map(w=>[M(w[0]),M(w[2])]),k=r.map(w=>M(w[1])),x=i.extend,A=x&&h.find(w=>w.id===x.pipe);if(x&&A){Object.assign(A,mt(A,f)),x.end==="to"?(A.points=[...A.points,...$],A.heights=[...A.heights??[],...k],A.to=v):(A.points=[...$.reverse(),...A.points],A.heights=[...k.reverse(),...A.heights??[]],A.from=v),o!==void 0&&(A.height=o),l=A.id;return}let P={id:W("pipe"),from:_,to:v,floor_id:s.id,points:$,heights:k,height:o??k[k.length-1]??null};h.push(P),l=P.id}),l&&(this._runSel={pipe:l,pt:null}),this._runMode=null}placeJoint(t,e,n,o){let i=t.gap-Pa,s=Math.round(n*100)/100,r=Math.round(o*100)/100,l=ke(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c;if(e==="hole_wall"){let[d,p]=Re(t.frame,s,i);c={id:W("joint"),kind:"wall",x:d,z:p,y:Math.max(.05,r),nx:M(t.frame.n[0]),nz:M(t.frame.n[1]),depth:M(l)}}else if(e==="hole_floor"){let[d,p]=Re(t.frame,s,t.gap);c={id:W("joint"),kind:"floor",x:d,z:p,y:0}}else{let[d,p]=Re(t.frame,s,t.gap);c={id:W("joint"),kind:e,x:d,z:p,y:r}}this.changePool(t.pool.id,d=>d.joints=[...d.joints??[],c]),this._runMode=null}runOut(t,e){let n=this._runDraft,o=n&&this.runLast(n,t);if(!n||!o)return;if(e==="down")return this.finishRun("",null,[[o[0],-.3,o[2]]],-.3);let i=st(t.frame,[o[0],o[2]]),s=ke(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,r=Kt(t.frame,i.s,o[1],-(s+.15));this.finishRun("",null,[[M(r[0]),o[1],M(r[2])]],o[1])}addFitting(t,e,n,o){let i=tt(this._doc,t.floor,t.pool);this.changePool(t.pool.id,s=>{let r=s.pipes?.find(c=>c.id===e),l=r&&Se(ft(r,i),n);!r||!l||(r.fittings=[...r.fittings??[],{id:W("fit"),kind:o,at:M(l.at),...o==="valve"?{open:!0}:{}}])}),this._runSel={pipe:e,pt:null}}runPieceDown(t,e,n,o){if(this._runMode)return;if(t.stopPropagation(),this._wallSel=null,this._runSel?.pipe!==n.id||!this.isAdmin){this._runSel={pipe:n.id,pt:null};return}let{s:i,y:s}=e.pt(t),r=n.pieces.find(u=>u.k===o),l=Math.hypot(r.s1-r.s0,r.y1-r.y0)>0?Math.hypot(i-r.s0,s-r.y0)/Math.hypot(r.s1-r.s0,r.y1-r.y0):0,c=r.d0+(r.d1-r.d0)*Math.min(1,l),d=this._doc,p=tt(d,e.floor,e.pool),h=-1;this.changePool(e.pool.id,u=>{let f=u.pipes?.find(m=>m.id===n.id);f&&(Object.assign(f,mt(f,p)),h=Math.max(0,Math.min(f.points.length,o+1-Ye(f,p))),f.points.splice(h,0,Re(e.frame,i,c)),f.heights.splice(h,0,M(s)))}),!(h<0)&&(this._runSel={pipe:n.id,pt:h},this.runDrag={pipe:n.id,i:h,d:c,base:d,moved:!0},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}runPointDown(t,e,n,o){if(this._runMode||!this.isAdmin)return;t.stopPropagation();let i=tt(this._doc,e.floor,e.pool);if(t.detail>=2){this.changePool(e.pool.id,c=>{let d=c.pipes?.find(p=>p.id===n);d&&(Object.assign(d,mt(d,i)),d.points.splice(o,1),d.heights.splice(o,1))}),this._runSel={pipe:n,pt:null};return}let s=e.pool.pool?.pipes?.find(c=>c.id===n),l=(s&&mt(s,i))?.points[o];l&&(this._runSel={pipe:n,pt:o},this.runDrag={pipe:n,i:o,d:st(e.frame,l).d,base:this._doc,moved:!1},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}runPointMove(t,e){let n=this.runDrag;if(!n)return;let{s:o,y:i}=e.pt(t);o=Math.round(o*100)/100,i=Math.round(i*100)/100;let s=tt(n.base,e.floor,e.pool),l=n.base.floors.flatMap(d=>d.outdoor).find(d=>d.id===e.pool.id)?.pool?.pipes?.find(d=>d.id===n.pipe);if(!l)return;let c=mt(l,s);if(!t.altKey){let d=ft(c,s),p=Ye(c,s);for(let h of[d[n.i+p-1],d[n.i+p+1]]){if(!h)continue;let u=st(e.frame,[h[0],h[2]]);Math.abs(u.s-o)<.04&&(o=M(u.s)),Math.abs(h[1]-i)<.04&&(i=M(h[1]))}}n.moved=!0,this.change((d,p)=>{let h=p.outdoor.find(u=>u.id===e.pool.id)?.pool?.pipes?.find(u=>u.id===n.pipe);h&&(Object.assign(h,mt(h,s)),h.points[n.i]=Re(e.frame,o,n.d),h.heights[n.i]=i)},n.base,!1)}runPointUp(){let t=this.runDrag;this.runDrag=null,t?.moved&&this.pushHistory(t.base)}fittingDown(t,e,n,o){if(!(this._runMode||!this.isAdmin)){if(t.stopPropagation(),this._runSel={pipe:n,pt:null},t.detail>=2){this.changePool(e.pool.id,i=>{let s=i.pipes?.find(r=>r.id===n);s?.fittings&&(s.fittings=s.fittings.filter(r=>r.id!==o))});return}this.fitDrag={pipe:n,id:o,base:this._doc,moved:!1,x:t.clientX,y:t.clientY},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId)}}jointDown(t,e,n){this._runMode||!this.isAdmin||(t.stopPropagation(),this.jointDrag={id:e,d:n,base:this._doc,moved:!1},t.currentTarget.closest("svg")?.setPointerCapture(t.pointerId))}jointMove(t,e){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:o,y:i}=e.pt(t),s=t.altKey?o:Math.round(o*100)/100,r=t.altKey?i:Math.round(i*100)/100;this.change((l,c)=>{let d=c.outdoor.find(p=>p.id===e.pool.id)?.pool?.joints?.find(p=>p.id===n.id);d&&([d.x,d.z]=Re(e.frame,s,n.d),d.kind!=="floor"&&(d.y=Math.max(d.kind==="wall"?.05:-1,M(r))))},n.base,!1)}fittingMove(t,e){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)<4)return;n.moved=!0;let{s:o,y:i}=e.pt(t),s=e.runs.find(d=>d.id===n.pipe);if(!s)return;let r=null;for(let d of s.pieces){let[p,h]=[d.s1-d.s0,d.y1-d.y0],u=p*p+h*h,f=u>0?Math.max(0,Math.min(1,((o-d.s0)*p+(i-d.y0)*h)/u)):0,[m,g]=[d.s0+p*f,d.y0+h*f],_=Math.hypot(m-o,g-i);(!r||_<r.d)&&(r={p:Kt(e.frame,m,g,d.d0+(d.d1-d.d0)*f),d:_})}if(!r)return;let l=tt(n.base,e.floor,e.pool),c=r.p;this.change((d,p)=>{let h=p.outdoor.find(m=>m.id===e.pool.id)?.pool?.pipes?.find(m=>m.id===n.pipe),u=h?.fittings?.find(m=>m.id===n.id),f=h&&Se(ft(h,l),c);u&&f&&(u.at=M(f.at))},n.base,!1)}fittingUp(t){let e=this.fitDrag;if(this.fitDrag=null,!!e){if(e.moved)return this.pushHistory(e.base);t&&this.changePool(t.pool.id,n=>{let o=n.pipes?.find(i=>i.id===e.pipe)?.fittings?.find(i=>i.id===e.id);o?.kind==="valve"&&(o.open=o.open===!1)})}}kitFitting(t,e){this._runDraft=null;let n=t&&this._runSel?t.runs.find(i=>i.id===this._runSel.pipe):void 0;if(!t||!n||!n.pieces.length){this._runMode=this._runMode===e?null:e;return}let o=[...n.pieces].sort((i,s)=>Math.hypot(s.s1-s.s0,s.y1-s.y0)-Math.hypot(i.s1-i.s0,i.y1-i.y0))[0];this.addFitting(t,n.id,Kt(t.frame,(o.s0+o.s1)/2,(o.y0+o.y1)/2,(o.d0+o.d1)/2),e),this._runMode=null}renderRuns(t,e,n){let o=this._runSel?.pipe,i=f=>{let m=st(t.frame,[f[0],f[2]]);return`${e(m.s)},${n(f[1])}`},s=this._runDraft,r=s&&this.runLast(s,t),l=s?[...s.fromT||s.extend||s.from?[this.runLast({...s,pts:[]},t)]:[],...s.pts].filter(f=>!!f):[],c=this.runHover,d=tt(this._doc,t.floor,t.pool),p={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},h=(f,m,g="",_)=>{let v=d(f),$=v&&st(t.frame,[v.x,v.z]);return v&&$&&$.d>-.6&&$.d<1.6&&$.s>-.2&&$.s<t.L+.2?[F`<g class="fp3d-wv-node ${g} ${_?"fp3d-wv-joint":""}" transform="translate(${e($.s)} ${n(v.y)})" @pointerdown=${k=>_&&this.jointDown(k,_,$.d)}>
              <circle r="0.05" /><text y="0.11">${m}</text><title>${this.poolNodeLabel(t.pool,f)}</title>
            </g>`]:[]},u=[...t.floor.furniture.flatMap(f=>{if(p[f.type]===void 0)return[];let m=Gt(f.type);return m.length?m.flatMap(g=>h(`dev:${f.id}:${g}`,this.t(`port_${g}`))):h(`dev:${f.id}`,p[f.type])}),...(t.pool.pool?.joints??[]).flatMap(f=>f.kind==="wall"||f.kind==="floor"?h(`joint:${f.id}:inside`,this.jointLabel(t.pool,f.id),"fp3d-wv-hole-mark",f.id):h(`joint:${f.id}`,this.jointLabel(t.pool,f.id),"",f.id))];return F`<g class="fp3d-wv-runs">
      ${u}
      ${t.runs.map(f=>F`<g class="fp3d-wv-run ${f.id===o?"fp3d-wv-run-sel":""}">
          ${f.pieces.map(m=>F`<line class=${m.y0<-.01&&m.y1<-.01?"fp3d-wv-under":""} x1=${e(m.s0)} y1=${n(m.y0)} x2=${e(m.s1)} y2=${n(m.y1)} @pointerdown=${g=>this.runPieceDown(g,t,f,m.k)} />`)}
          ${f.ends.map(m=>F`<circle class="fp3d-wv-end" cx=${e(m.s)} cy=${n(m.y)} r="0.035" />`)}
          ${f.fittings.map(m=>m.kind==="valve"?F`<g class="fp3d-wv-valve ${m.open?"":"fp3d-wv-shut"}" transform="translate(${e(m.s)} ${n(m.y)})" @pointerdown=${g=>this.fittingDown(g,t,f.id,m.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${m.open?.11:0} y2=${m.open?0:-.11} />
                </g>`:F`<rect class="fp3d-wv-sight" x=${e(m.s)-.06} y=${n(m.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${g=>this.fittingDown(g,t,f.id,m.id)} />`)}
          ${f.id===o?f.points.map(m=>F`<circle class="fp3d-wv-runpt ${this._runSel?.pt===m.i?"fp3d-on":""}" cx=${e(m.s)} cy=${n(m.y)} r="0.04" @pointerdown=${g=>this.runPointDown(g,t,f.id,m.i)} />`):y}
        </g>`)}
      ${l.length?F`<polyline class="fp3d-wv-draft" points=${l.map(i).join(" ")} />`:y}
      ${r&&c?F`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${i(r).split(",")[0]} y1=${i(r).split(",")[1]} x2=${e(c[0])} y2=${n(c[1])} />`:y}
    </g>`}renderRunFoot(t){let e=this._runMode,n=this._runDraft;if(e==="hole_wall"||e==="hole_floor"||e==="tee"||e==="y")return b`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="valve"||e==="sight")return b`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="draw")return b`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?b`<button class="fp3d-btn" @click=${()=>this.runOut(t,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(t,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:y}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let o=this._runSel,i=o&&t.pool.pool?.pipes?.find(p=>p.id===o.pipe);if(!o||!i)return y;let s=tt(this._doc,t.floor,t.pool),r=mt(i,s),l=o.pt,c=this.isAdmin,d=i.to?i.from?null:"from":"to";return b`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&r.heights?.[l]!==void 0?this.len(this.t("wall_run_pt"),r.heights[l]??0,p=>this.changePool(t.pool.id,h=>{let u=h.pipes?.find(f=>f.id===i.id);u&&(Object.assign(u,mt(u,s)),u.heights[l]=Math.min(10,Math.max(-5,M(p))))}),.01):y}
      ${c?b`<button class="fp3d-btn" @click=${()=>this.kitFitting(t,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(t,"sight")}>${this.t("wall_run_sight")}</button>
            ${d?b`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let p={pool:t.pool.id,from:"",fromT:null,extend:{pipe:i.id,end:d},pts:[],anchor:null,wall:t.key,d:t.gap};this._runDraft={...p,anchor:this.runLast(p,t)}}}>${this.t("wall_run_more")}</button>`:y}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.pool.id,p=>{let h=p.pipes?.find(u=>u.id===i.id);h&&(Object.assign(h,mt(h,s)),[h.from,h.to,h.points,h.heights]=[h.to,h.from,[...h.points].reverse(),[...h.heights??[]].reverse()],h.fittings=h.fittings?.map(u=>({...u,at:M(Math.max(0,yi(h,s)-u.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(t.pool.id,p=>p.pipes=(p.pipes??[]).filter(h=>h.id!==i.id)),this._runSel=null}}>${this.t("delete")}</button>`:y}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){let t=this.outdoorArea;if(t?.type==="pool")return t;let e=this.floor?.outdoor.filter(n=>n.type==="pool")??[];return e.length===1?e[0]:void 0}poolDown(t,e,n,o){let i=this.floor;if(!i)return!1;let s=this.poolArea,r=e.closest("[data-pool-node]")?.getAttribute("data-pool-node")??null;if(this._jointPlace&&s)return this.isAdmin&&this.placeJointPlan(s,this._jointPlace,n,e.closest("[data-pipe]")?.getAttribute("data-pipe")??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isAdmin)return!0;if(!s){let h=i.outdoor.find(u=>u.type==="pool"&&u.points.length>=3&&C(n,u.points));return h&&(this.selectItem("outdoor",h.id),this._tool="pool",this._pipeMode=!0),!0}let p=e.closest("[data-pipe-end]")?.getAttribute("data-pipe-end");if(p&&!this._pipeDraft){let[h,u]=p.split("|"),f=s.pool?.pipes?.find(g=>g.id===h),m=f&&(u==="to"?f.points[f.points.length-1]:f.points[0]);m&&(this._pipeDraft={from:"",points:[],extend:{pipe:h,end:u,at:m}})}else if(r){let h=this._pipeDraft;h?h.extend?(this.extendPipe(s,h.extend,r,h.points),this._pipeDraft=null):r!==h.from&&(this.addPipe(s.id,h.from,r,h.points),this._pipeDraft=null):this._pipeDraft={from:r,points:[]}}else if(this._pipeDraft){let h=this.snap(n,void 0,t.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[M(h[0]),M(h[1])]]}}return!0}let l=p=>[p.slice(0,p.lastIndexOf(":")),Number(p.slice(p.lastIndexOf(":")+1))];if(s&&this.isAdmin){let p=e.closest("[data-pipe-pt]")?.getAttribute("data-pipe-pt");if(p){let[u,f]=l(p);return t.detail>=2?this.change((m,g)=>{let _=g.outdoor.find(v=>v.id===s.id)?.pool?.pipes?.find(v=>v.id===u);_?.points.splice(f,1),_?.heights?.splice(f,1)}):this.drag={kind:"pipept",pool:s.id,pipe:u,index:f,base:this._doc,moved:!1},!0}let h=e.closest("[data-pipe-seg]")?.getAttribute("data-pipe-seg");if(h){let[u,f]=l(h),m=this.snap(n,void 0,t.altKey);return this.change((g,_)=>{let v=_.outdoor.find($=>$.id===s.id)?.pool?.pipes?.find($=>$.id===u);v?.points.splice(f,0,[M(m[0]),M(m[1])]),v?.heights?.splice(f,0,v.heights[f-1]??v.heights[f]??null)}),this._pipeId=u,this.drag={kind:"pipept",pool:s.id,pipe:u,index:f,base:this._doc,moved:!1},!0}}let c=e.closest("[data-pipe]")?.getAttribute("data-pipe");if(c)return this._pipeId=c,!0;if(r&&s&&this.isAdmin)return r.startsWith("port:")?this.drag={kind:"poolport",pool:s.id,id:r.slice(5),base:this._doc,moved:!1}:r.startsWith("joint:")?this.drag={kind:"pooljoint",pool:s.id,id:X(r).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:r.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let p=e.closest("[data-out-box]")?.getAttribute("data-out-box");if(p){let[u,f]=l(p);return this.drag={kind:"outbox",id:u,corner:f,base:this._doc,moved:!1},!0}let h=e.closest("[data-out-vertex]")?.getAttribute("data-out-vertex");if(h){let[u,f]=l(h);return this.drag={kind:"outvertex",id:u,index:f,base:this._doc,moved:!1},!0}}let d=e.closest("[data-outdoor]")?.getAttribute("data-outdoor");return d&&i.outdoor.some(p=>p.id===d&&p.type==="pool")?(this.selectItem("outdoor",d),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:d,start:n,startScreen:o,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(t,e){this.change((n,o)=>{let i=o.outdoor.find(s=>s.id===t);i&&(i.pool??={},e(i.pool,i))})}extendPipe(t,e,n,o){let i=this.floor;if(!i)return;let s=tt(this._doc,i,t);n=this.jointEnd(t,n,o[o.length-1]),this.changePool(t.id,r=>{let l=r.pipes?.find(d=>d.id===e.pipe);if(!l)return;Object.assign(l,mt(l,s));let c=l.heights??[];if(e.end==="to"){let d=c[c.length-1]??l.height??null;l.points=[...l.points,...o],l.heights=[...c,...o.map(()=>d)],l.to=n}else{let d=yi(l,s),p=c[0]??l.height??null;l.points=[...[...o].reverse(),...l.points],l.heights=[...o.map(()=>p),...c],l.from=n;let h=yi(l,s)-d;l.fittings=l.fittings?.map(u=>({...u,at:M(u.at+h)}))}}),this._pipeId=e.pipe}jointEnd(t,e,n,o=[]){let{kind:i,id:s,port:r}=X(e),l=i==="joint"&&!r?t.pool?.joints?.find(p=>p.id===s):void 0;if(!l)return e;if(l.kind==="wall"||l.kind==="floor"){let p=this._doc.floors.find(m=>m.outdoor.some(g=>g.id===t.id)),h=p&&tt(this._doc,p,t),[u,f]=[h?.(`joint:${s}:inside`),h?.(`joint:${s}:outside`)];return!n||!u||!f?`joint:${s}:inside`:`joint:${s}:${Math.hypot(n[0]-u.x,n[1]-u.z)<=Math.hypot(n[0]-f.x,n[1]-f.z)?"inside":"outside"}`}let c=new Set([...(t.pool?.pipes??[]).flatMap(p=>[p.from,p.to]),...o]),d=Pe(l.kind).find(p=>!c.has(`joint:${s}:${p}`));return d?`joint:${s}:${d}`:e}addPipe(t,e,n,o){let i=this.floor;if(!i)return;let s=i.outdoor.find(l=>l.id===t);s&&(e=this.jointEnd(s,e,o[0]),n=this.jointEnd(s,n,o[o.length-1],[e]));let r={id:W("pipe"),from:e,to:n,floor_id:i.id,points:o};this.changePool(t,l=>l.pipes=[...l.pipes??[],r]),this._pipeId=r.id}addPoolPort(t){let e=this.poolArea;if(!e||!this.isAdmin)return;let n=e.pool?.ports??[],o=e.points.length,i=h=>{let u=e.points[h%o],f=e.points[(h+1)%o];return[(u[0]+f[0])/2,(u[1]+f[1])/2]},[s,r]=kt(e.points),l=this._doc.floors.flatMap(h=>h.furniture).find(h=>h.type==="pool_filter"||h.type==="pool_pump"),c=n.filter(h=>h.kind==="inlet").length,d=t==="skimmer"?Cn(e.points,i(0)):t==="inlet"?Cn(e.points,i(Math.floor(o/2)+c*Math.max(1,Math.floor(o/8)))):t==="drain"?[s,r]:l?[l.x+.8,l.z]:[s,r+3],p={id:W("port"),kind:t,x:M(d[0]),z:M(d[1])};this.changePool(e.id,h=>h.ports=[...n,p])}addPoolDevice(t){let e=this.poolArea;this.addEnergyDevice(t),e&&this.selectItem("outdoor",e.id),this._tool="pool"}deletePoolDevice(t){this.change(e=>{for(let n of e.floors){n.furniture=n.furniture.filter(o=>o.id!==t);for(let o of n.outdoor)o.pool?.pipes&&(o.pool.pipes=o.pool.pipes.filter(i=>i.from!==`dev:${t}`&&i.to!==`dev:${t}`))}})}deletePoolPort(t,e){this.changePool(t,n=>{n.ports=(n.ports??[]).filter(o=>o.id!==e),n.pipes=(n.pipes??[]).filter(o=>o.from!==`port:${e}`&&o.to!==`port:${e}`)})}togglePoolValve(t){let e=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===t);!e||e.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let o=n.floors.flatMap(i=>i.furniture).find(i=>i.id===t);o&&(o.valve_open=o.valve_open===!1?null:!1)})}setPoolDevice(t,e){this.change(n=>{let o=n.floors.flatMap(i=>i.furniture).find(i=>i.id===t);o&&Object.assign(o,e)})}portText(t){let{kind:e,port:n}=X(t),o={in:"A",out1:"B",out2:"C"};return e==="joint"&&n&&o[n]?`${this.t("card_port")} ${o[n]}`:n?this.t(`port_${n}`):""}openCard(t,e){this._card={pool:t,part:e},this._cardJoin=null}partPorts(t,e){let{kind:n,id:o}=X(e);if(n==="joint"){let i=t.pool?.joints?.find(s=>s.id===o);return i?Pe(i.kind).map(s=>`${e}:${s}`):[]}if(n==="dev"){let i=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.id===o),s=i?Gt(i.type):[];return s.length?s.map(r=>`${e}:${r}`):[e]}return[e]}partStatus(t,e){let n=t.pool?.pipes??[],o=this.partPorts(t,e);return[o.filter(i=>n.some(s=>s.from===i||s.to===i)).length,o.length]}cardConnect(t,e,n,o){let i=this._doc.floors.find(p=>p.outdoor.some(h=>h.id===t.id));if(!i||!n)return;let s=tt(this._doc,i,t),r=t.pool?.ports??[],l=p=>{let{kind:h,id:u,port:f}=X(p);return h==="port"?xr(r.find(m=>m.id===u)?.kind??"inlet"):h==="dev"?$r(f):null},c=this.jointEnd(t,n,void 0,[e]),d=Yo({from:e,vias:o,to:[c],floorId:i.id},s,t.pool?.joints??[],l,p=>W(p));this.changePool(t.id,p=>{p.joints=[...p.joints??[],...d.joints],p.pipes=[...p.pipes??[],...d.pipes]}),this._cardJoin=null}cardDisconnect(t,e){this.changePool(t.id,n=>n.pipes=(n.pipes??[]).filter(o=>!e.pipes.includes(o.id)))}cardReroute(t,e){let n=t.pool?.pipes??[],o=n.find(f=>f.id===e.pipes[0]);if(!o||!e.other)return;let i=o.from===e.start,s=[...e.holes.map(f=>({kind:"hole",joint:f.joint,dir:f.dir})),...e.fittings.map(f=>({kind:f}))],r=this._doc.floors.find(f=>f.outdoor.some(m=>m.id===t.id));if(!r)return;let l={...t,pool:{...t.pool,pipes:n.filter(f=>!e.pipes.includes(f.id))}},c=tt(this._doc,r,l),d=i?e.start:e.other,p=i?e.other:e.start,h=i?s:[...e.holes].reverse().map(f=>({kind:"hole",joint:f.joint,dir:f.dir==="in"?"out":"in"})).concat(e.fittings.map(f=>({kind:f}))),u=Yo({from:d,vias:h,to:[p],floorId:r.id},c,t.pool?.joints??[],()=>null,f=>W(f));this.changePool(t.id,f=>{f.pipes=[...(f.pipes??[]).filter(m=>!e.pipes.includes(m.id)),...u.pipes]})}renderPartCard(){let t=this._card,e=t?this._doc.floors.flatMap(P=>P.outdoor).find(P=>P.id===t.pool):void 0;if(!t||!e)return y;let n=this.isAdmin,{kind:o,id:i}=X(t.part),s=o==="joint"?e.pool?.joints?.find(P=>P.id===i):void 0,r=o==="dev"?this._doc.floors.flatMap(P=>P.furniture).find(P=>P.id===i):void 0,l=o==="port"?e.pool?.ports?.find(P=>P.id===i):void 0;if(!s&&!r&&!l)return y;let c=e.pool?.pipes??[],d=e.pool?.joints??[],p=this.partPorts(e,t.part),h=this.poolEnds(e).filter(P=>Vt(P.node)!==t.part&&!P.used),u=d.filter(P=>P.kind==="wall"||P.kind==="floor"),f=P=>this.poolNodeLabel(e,P),m=P=>X(P).port?this.portText(P):this.t("card_port"),g=P=>P.kind==="hole"?this.t(P.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(e,P.joint)}):this.t(P.kind==="valve"?"wall_run_valve":"wall_run_sight"),_=()=>{this._card=null,this._cardJoin=null},v=()=>s?[s.x,s.z]:r?[r.x,r.z]:l?[l.x,l.z]:null,$=p.map(P=>{let w=Sr(c,d,P),z=this._cardJoin?.port===P?this._cardJoin:null;return b`<div class="fp3d-pc-row ${w.length?"fp3d-on":""}">
        <b>${m(P)}</b>
        <div class="fp3d-pc-conns">
          ${w.map(S=>b`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...S.holes.map(I=>g({kind:"hole",joint:I.joint,dir:I.dir})),...S.fittings.map(I=>g({kind:I}))].map(I=>b`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${I}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${S.other?b`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(e.id,Vt(S.other))}>${f(S.other)}</button>`:b`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?b`<span class="fp3d-pc-tools">
                    ${S.other?b`<button class="fp3d-btn" @click=${()=>this.cardReroute(e,S)}>${this.t("card_reroute")}</button>`:y}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(e,S)}>${this.t("card_disconnect")}</button>
                  </span>`:y}
            </div>`)}
          ${n&&(!w.length||p.length===1)?z?this.renderJoinPicker(e,P,z,h,u,g):b`<button class="fp3d-btn ${w.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:P,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:y}
        </div>
      </div>`}),[k,x]=this.partStatus(e,t.part),A=v();return b`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${P=>P.target===P.currentTarget&&_()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${P=>P.key==="Escape"&&_()}>
        <div class="fp3d-wv-head">
          ${s&&n?b`<input
                class="fp3d-pc-name"
                .value=${s.name??""}
                placeholder=${this.jointLabel(e,s.id)}
                title=${this.t("joint_name")}
                @change=${P=>{let w=P.target.value.trim().slice(0,60);this.changePool(e.id,z=>{let S=z.joints?.find(I=>I.id===s.id);S&&(S.name=w||null)})}}
              />`:b`<b class="fp3d-pc-title">${f(t.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:k,b:x})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${_}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(e,t.part,p)}
          <div class="fp3d-pc-rows">${$}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${A?b`<button class="fp3d-btn" @click=${()=>{_(),this._wallView=null,this._tool="pool",this.showPoint(A[0],A[1])}}>${this.t("card_show_plan")}</button>`:y}
          ${A&&!l?b`<button class="fp3d-btn" @click=${()=>{_(),this.pickWall(A)}}>▦ ${this.t("card_show_wall")}</button>`:y}
          <span class="fp3d-wv-grow"></span>
          ${n?b`<button class="fp3d-btn fp3d-danger" @click=${()=>{_(),r?this.deletePoolDevice(r.id):l?this.deletePoolPort(e.id,l.id):s&&this.changePool(e.id,P=>{P.joints=(P.joints??[]).filter(w=>w.id!==s.id),P.pipes=(P.pipes??[]).filter(w=>Vt(w.from)!==t.part&&Vt(w.to)!==t.part)})}}>${this.t("delete")}</button>`:y}
        </div>
      </div>
    </div>`}renderJoinPicker(t,e,n,o,i,s){let r=h=>{let{kind:u,id:f}=X(h);if(u==="port")return"pool";if(u==="dev")return"tech";let m=t.pool?.joints?.find(g=>g.id===f);return m?.kind==="wall"||m?.kind==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(h=>({g:h,items:o.filter(u=>r(u.node)===h)})).filter(h=>h.items.length),c=h=>this._cardJoin={...n,...h},d=h=>c({vias:[...n.vias,h]}),p=new Set(n.vias.flatMap(h=>h.kind==="hole"?[h.joint]:[]));return b`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(t,e)}</span>
        ${n.vias.map((h,u)=>b`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>c({vias:n.vias.filter((f,m)=>m!==u)})}>${s(h)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?b`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>c({to:""})}>${this.poolNodeLabel(t,n.to)} <i>✕</i></button>`:b`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?y:b`<div class="fp3d-pc-steps">
            ${i.some(h=>!p.has(h.id))?b`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${i.filter(h=>!p.has(h.id)).map(h=>b`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(t,h.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:h.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:h.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:y}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${l.map(({g:h,items:u})=>b`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${h}`)}</span>
                <div class="fp3d-pc-picks">${u.map(f=>b`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>c({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(t,e,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(t,e,n){let o=t.pool?.pipes??[],i=f=>o.some(m=>m.from===f||m.to===f),{kind:s,id:r}=X(e),l=s==="joint"?t.pool?.joints?.find(f=>f.id===r):void 0,c=s==="dev"?this._doc.floors.flatMap(f=>f.furniture).find(f=>f.id===r):void 0,d={},p=y,h=l?.kind??(c?c.type:"port");h==="tee"?(Object.assign(d,{in:[20,60],out1:[180,60],out2:[100,130]}),p=F`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):h==="y"?(Object.assign(d,{in:[20,70],out1:[180,25],out2:[180,115]}),p=F`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):h==="wall"||h==="floor"?(Object.assign(d,{outside:[20,70],inside:[180,70]}),p=F`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):h==="pool_pump"?(Object.assign(d,{suction:[20,95],pressure:[110,10]}),p=F`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):h==="pool_filter"?(Object.assign(d,{pump:[20,40],return:[180,40],waste:[100,4]}),p=F`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):h==="pool_heat_pump"?(Object.assign(d,{in:[180,95],out:[180,45]}),p=F`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(d[""]=[180,70],p=F`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let u=h==="pool_filter"?[100,41]:h==="pool_pump"?[100,85]:[100,70];return b`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(f=>{let m=X(f).port??"",g=d[m]??d[""]??[180,70],_=i(f);return F`<g class="fp3d-pc-stub ${_?"fp3d-on":""}" @click=${()=>this.isAdmin&&!_&&(this._cardJoin={port:f,to:"",vias:[]})}>
          <line x1=${u[0]} y1=${u[1]} x2=${g[0]} y2=${g[1]} />
          <circle cx=${g[0]} cy=${g[1]} r="7" />
          <title>${m?this.portText(f):""}</title>
        </g>`})}
      ${p}
      ${n.map(f=>{let m=X(f).port,g=d[m??""]??[180,70];return m?F`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,g[0]))} y=${g[1]<70?g[1]+20:g[1]-12}>${this.portText(f)}</text>`:y})}
    </svg>`}jointLabel(t,e){let n=t.pool?.joints??[],o=n.find(r=>r.id===e);if(!o)return this.t("pool_loose_end");let i=r=>r==="wall"||r==="floor"?"hole":r??"tee";if(o.name?.trim())return o.name.trim();let s=n.filter(r=>i(r.kind)===i(o.kind));return`${this.t(`joint_${o.kind??"tee"}`,{n:s.indexOf(o)+1})}`}poolEnds(t){let e=t.pool?.pipes??[],n=i=>e.some(s=>s.from===i||s.to===i),o=[];for(let i of t.pool?.ports??[])o.push({node:`port:${i.id}`,label:this.poolNodeLabel(t,`port:${i.id}`),used:!1});for(let i of this._doc.floors.flatMap(s=>s.furniture).filter(s=>wt.includes(s.type)&&s.type!=="pool_valve")){let s=Gt(i.type);for(let r of s.length?s.map(l=>`dev:${i.id}:${l}`):[`dev:${i.id}`])o.push({node:r,label:this.poolNodeLabel(t,r),used:s.length>0&&n(r)})}for(let i of t.pool?.joints??[])for(let s of Pe(i.kind)){let r=`joint:${i.id}:${s}`;o.push({node:r,label:this.poolNodeLabel(t,r),used:n(r)})}return o}placeJointPlan(t,e,n,o){let i=this.floor;if(!i)return;let s=tt(this._doc,i,t),r=o?t.pool?.pipes?.find(d=>d.id===o):void 0;if(r){let d=ft(r,s),p=null;for(let u=1;u<d.length;u++){let[f,m]=[d[u-1],d[u]],[g,_]=[m[0]-f[0],m[2]-f[2]],v=g*g+_*_,$=v>0?Math.max(0,Math.min(1,((n[0]-f[0])*g+(n[1]-f[2])*_)/v)):0,k=[f[0]+g*$,f[1]+(m[1]-f[1])*$,f[2]+_*$],x=Math.hypot(k[0]-n[0],k[2]-n[1]);(!p||x<p.d)&&(p={p:k,d:x})}let h=p&&Jo(r,s,p.p,W("joint"),W("pipe"));if(h){this.changePool(t.id,u=>{u.joints=[...u.joints??[],{...h.joint,kind:e}],u.pipes=(u.pipes??[]).flatMap(f=>f.id===r.id?[{...h.first,to:`joint:${h.joint.id}:in`},{...h.second,from:`joint:${h.joint.id}:out1`}]:[f])});return}}let l=i.rooms.some(d=>d.points.length>=3&&C(n,d.points)),c=this.snap(n);this.changePool(t.id,d=>d.joints=[...d.joints??[],{id:W("joint"),kind:e,x:M(c[0]),z:M(c[1]),y:l?.5:-.3}])}poolNodePos(t,e){if(!e)return null;let n=this._doc.floors.find(i=>i.outdoor.some(s=>s.id===t.id));if(e.startsWith("joint:")||e.split(":").length>2){let i=n&&tt(this._doc,n,t)(e);return i?[i.x,i.z]:null}if(e.startsWith("port:")){let i=t.pool?.ports?.find(s=>s.id===e.slice(5));return i?[i.x,i.z]:null}let o=this._doc.floors.flatMap(i=>i.furniture).find(i=>i.id===e.slice(4));return o?[o.x,o.z]:null}poolNodeLabel(t,e){let{kind:n,id:o,port:i}=X(e);if(!e)return this.t("pool_loose_end");if(i||n==="joint"){let c=n==="joint"?this.jointLabel(t,o):this.poolNodeLabel(t,`${n}:${o}`);return i?`${c} \xB7 ${this.portText(e)}`:c}if(e.startsWith("port:")){let c=t.pool?.ports??[],d=c.find(h=>h.id===e.slice(5));if(!d)return"?";let p=c.filter(h=>h.kind===d.kind);return`${this.t(`pool_port_${d.kind}`)}${p.length>1?` ${p.indexOf(d)+1}`:""}`}let s=this._doc.floors.flatMap(c=>c.furniture).filter(c=>wt.includes(c.type)),r=s.find(c=>c.id===e.slice(4));if(!r)return"?";let l=s.filter(c=>c.type===r.type);return`${r.name||this.t(`furn_${r.type}`)}${l.length>1&&!r.name?` ${l.indexOf(r)+1}`:""}`}renderPoolPlan(t){let e=this.poolArea,n=t.furniture.filter(u=>wt.includes(u.type)),o={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},i=e?(e.pool?.pipes??[]).filter(u=>u.floor_id===t.id):[],s=i.map(u=>{let f=this.poolNodePos(e,u.from),m=this.poolNodePos(e,u.to);if((!f||!m)&&!u.heights)return y;let g=f?1:0,_=[...f?[f]:[],...u.points,...m?[m]:[]].map(S=>this.toScreen(S));if(_.length<2)return y;let v=u.id===this._pipeId,$=0;for(let S=1;S<_.length-1;S++)Math.hypot(_[S+1][0]-_[S][0],_[S+1][1]-_[S][1])>Math.hypot(_[$+1][0]-_[$][0],_[$+1][1]-_[$][1])&&($=S);let[k,x]=_[$],[A,P]=_[$+1],w=Math.atan2(P-x,A-k)*180/Math.PI,z=_.map(S=>S.join(",")).join(" ");return F`<g data-pipe=${u.id}>
        <polyline class="fp3d-pipe-hit" points=${z} />
        <polyline class="fp3d-pipe ${v?"fp3d-pipe-sel":""}" points=${z} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(k+A)/2} ${(x+P)/2}) rotate(${w})`} />
        ${v&&this.isAdmin?F`${_.slice(0,-1).map((S,I)=>F`<line class="fp3d-pipe-seg" data-pipe-seg=${`${u.id}:${I+1-g}`} x1=${S[0]} y1=${S[1]} x2=${_[I+1][0]} y2=${_[I+1][1]} />`)}
              ${u.points.map((S,I)=>{let[L,O]=this.toScreen(S);return F`<g class="fp3d-vertex" data-pipe-pt=${`${u.id}:${I}`}><circle cx=${L} cy=${O} r="14" class="fp3d-hit" /><circle cx=${L} cy=${O} r="5" /></g>`})}`:y}
      </g>`}),r=(u,f,m,g,_)=>{let[v,$]=this.toScreen(f);return F`<g class="fp3d-pool-node ${g}" data-pool-node=${u}><title>${_}</title><circle cx=${v} cy=${$} r="16" class="fp3d-hit" /><circle cx=${v} cy=${$} r="10" /><text x=${v} y=${$}>${m}</text></g>`},l=e?(e.pool?.ports??[]).map(u=>r(`port:${u.id}`,[u.x,u.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[u.kind],`fp3d-pool-port-${u.kind}`,this.poolNodeLabel(e,`port:${u.id}`))):[],c=n.map(u=>r(`dev:${u.id}`,[u.x,u.z],u.type==="pool_valve"?u.valve_open===!1?"\u2715":"":o[u.type],`fp3d-pool-dev ${u.type==="pool_valve"&&u.valve_open===!1?"fp3d-pool-closed":""}`,e?this.poolNodeLabel(e,`dev:${u.id}`):u.type)),d=y;if(e&&this._pipeDraft){let u=this._pipeDraft.extend?.at??this.poolNodePos(e,this._pipeDraft.from);if(u){let f=[u,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(m=>this.toScreen(m).join(",")).join(" ");d=F`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${f} />`}}let p=e?(e.pool?.joints??[]).map(u=>r(`joint:${u.id}`,[u.x,u.z],u.kind==="wall"||u.kind==="floor"?"\u25CE":u.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(e,u.id))):[],h=i.flatMap(u=>u.heights&&u.points.length?["from","to"].filter(f=>!u[f]).map(f=>{let[m,g]=this.toScreen(f==="to"?u.points[u.points.length-1]:u.points[0]);return F`<g class="fp3d-pipe-end" data-pipe-end=${`${u.id}|${f}`}><circle cx=${m} cy=${g} r="14" class="fp3d-hit" /><circle cx=${m} cy=${g} r="6" /></g>`}):[]);return F`<g class="fp3d-pool-plan">${s}${d}${p}${h}${l}${c}</g>`}renderPoolPanel(t){let e=t?.outdoor.filter(o=>o.type==="pool")??[],n=this.poolArea;return n?b`${e.length>1?b`<section>
            <div class="fp3d-seg">${e.map((o,i)=>b`<button aria-pressed=${o.id===n.id} @click=${()=>this.selectItem("outdoor",o.id)}>🏊 ${i+1}</button>`)}</div>
          </section>`:y}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:b`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(e.length?"pool_choose":"pool_tool_empty")}</p>
        ${e.length?b`<div class="fp3d-actions">${e.map((o,i)=>b`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",o.id)}>🏊 ${this.t("out_pool")} ${e.length>1?i+1:""}</button>`)}</div>`:y}
      </section>`}renderPoolTech(t){if(!yt("pool"))return y;let e=this.isAdmin,n=t.pool?.ports??[],o=t.pool?.pipes??[],i=this._doc.floors.flatMap(r=>r.furniture).filter(r=>wt.includes(r.type)),s=o.find(r=>r.id===this._pipeId);return b`<section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(r=>b`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolPort(r)}>+ ${this.t(`pool_port_${r}`)}</button>`)}
        </div>
        ${n.map(r=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`port:${r.id}`)}>${this.poolNodeLabel(t,`port:${r.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(t,`port:${r.id}`)[0]?"\u2713":"\u25CB"}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolPort(t.id,r.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${wt.filter(r=>r!=="pool_valve").map(r=>b`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolDevice(r)}>+ ${this.t(`furn_${r}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${i.map(r=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`dev:${r.id}`)}>${this.poolNodeLabel(t,`dev:${r.id}`)}</button>
            <span class="fp3d-ports">${Gt(r.type).map(l=>b`<i class=${o.some(c=>c.from===`dev:${r.id}:${l}`||c.to===`dev:${r.id}:${l}`)?"fp3d-on":""}>${this.t(`port_${l}`)}</i>`)}</span>
            ${r.type==="pool_filter"?b`<select ?disabled=${!e} title=${this.t("pool_valve_type")} @change=${l=>this.setPoolDevice(r.id,{variant:l.target.value==="top6"?null:l.target.value})}>
                    ${vr.map(l=>b`<option value=${l} ?selected=${(r.variant??"top6")===l}>${this.t(`valve_${l}`)}</option>`)}
                  </select>
                  <select ?disabled=${!e} title=${this.t("pool_valve_position")} @change=${l=>this.setPoolDevice(r.id,{valve_position:l.target.value})}>
                  ${ws.map(l=>b`<option value=${l} ?selected=${(r.valve_position??"filter")===l}>${this.t(`valve_${l}`)}</option>`)}
                </select>`:r.type==="pool_valve"?b`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${r.valve_open!==!1} ?disabled=${!e} @change=${l=>this.setPoolDevice(r.id,{valve_open:l.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:y}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(r.id)}>✕</button>
          </div>`)}
        ${(t.pool?.joints??[]).map(r=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`joint:${r.id}`)}>${this.jointLabel(t,r.id)}</button>
            <span class="fp3d-ports">${Pe(r.kind).map(l=>{let c=`joint:${r.id}:${l}`,d=o.some(p=>p.from===c||p.to===c||(r.kind??"tee")!=="wall"&&(r.kind??"tee")!=="floor"&&Vt(p.from)===`joint:${r.id}`&&!X(p.from).port&&l==="in");return b`<i class=${d?"fp3d-on":""} title=${this.portText(c)}>${this.portText(c)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,l=>{l.joints=(l.joints??[]).filter(c=>c.id!==r.id),l.pipes=(l.pipes??[]).filter(c=>Vt(c.from)!==`joint:${r.id}`&&Vt(c.to)!==`joint:${r.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!e} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${o.map(r=>b`<div class="fp3d-pool-row ${r.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=r.id}>${this.poolNodeLabel(t,r.from)} → ${this.poolNodeLabel(t,r.to)}</button>
            <button class="fp3d-btn" ?disabled=${!e} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.id,l=>{let c=l.pipes?.find(d=>d.id===r.id);c&&([c.from,c.to,c.points]=[c.to,c.from,[...c.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,l=>l.pipes=(l.pipes??[]).filter(c=>c.id!==r.id))}>✕</button>
          </div>`)}
        ${s?b`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),s.height??.3,r=>this.changePool(t.id,l=>{let c=l.pipes?.find(d=>d.id===s.id);c&&(c.height=Math.min(10,Math.max(-5,M(r))))}),.05)}
            </div>`:y}
        ${rt("pool")||!yt("pool")?y:b`<p class="fp3d-sub">${this.t("pool_pipes_pro")}</p>`}
      </section>`}renderPoolShape(t){let e=this.isAdmin,n=it(t.points),o=t.pool_shape,i=(l,c,d,p)=>o&&this.updateOutdoor({points:wn(o,l,c,d,p)}),s=(n.x0+n.x1)/2,r=(n.z0+n.z1)/2;return b`${o==="round"?b`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let c=Math.max(.5,l)/2;i(s-c,r-c,s+c,r+c)},.01,1)}`:o==="oval"?b`${this.len(this.t("width"),n.x1-n.x0,l=>i(s-Math.max(1,l)/2,n.z0,s+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>i(n.x0,r-Math.max(1,l)/2,n.x1,r+Math.max(1,l)/2),.01,1)}`:y}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!t.above} ?disabled=${!e} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${t.above?this.len(this.t("pool_height"),yo(t),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,M(l)))}),.05,.4):y}`}renderPoolPro(t){let e=this.hass?.language;if(!yt("pool"))return y;if(!rt("pool")){let l=Xt("pool");return b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head">
          <b>🏊 ${this.t("pro_name_pool")}</b>
          <a class="fp3d-btn fp3d-primary" href=${l?jn(e):Tt(e)} target="_blank" rel="noopener">${this.t(l?"beta_become":"pro_unlock")}</a>
        </div>
        <p class="fp3d-sub">${this.t("pool_teaser")}</p>
      </section>`}if(!this.hass)return y;let n=t.pool??{},o=Lr(this.hass,{}),i=l=>this.updateOutdoor({pool:{...n,...l}}),s=(l,c,d)=>this.entitySelect(this.t(c),n[l]??null,o[l]??void 0,this.entityOptions(d),p=>i({[l]:p==="none"?"none":p})),r=l=>l.startsWith("sensor.");return b`<section>
      <h3>🏊 ${this.t("pro_name_pool")}</h3>
      <p class="fp3d-sub">${this.t("pool_pro_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${s("temperature","pool_temperature",l=>/^(sensor|climate|water_heater)\./.test(l))}
        ${s("heater","pool_heater",l=>/^(climate|water_heater|switch|input_boolean)\./.test(l))}
        ${s("pump","pool_pump",l=>/^(switch|fan|input_boolean|binary_sensor|sensor)\./.test(l))}
        ${s("light","pool_light",l=>/^(light|switch)\./.test(l))}
        ${s("ph","pool_ph",r)}
        ${s("chlorine","pool_chlorine_role",r)}
        ${s("cover","pool_cover",l=>l.startsWith("cover."))}
      </div>
      ${t.pool?y:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!this.isAdmin} @click=${()=>this.updateOutdoor({pool:{}})}>${this.t("pool_activate")}</button>`}
    </section>`}renderRooms(t){return F`
      <g>${t.rooms.map(e=>{let n=e.points.map(o=>this.toScreen(o).join(",")).join(" ");return F`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,o]=this.toScreen(kt(e.points));return F`<text class="fp3d-room-name" x=${n} y=${o-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${o+14}>${this.area(pt(e.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return y;let[n,o]=this.toScreen(t.points[e]),[i,s]=this.toScreen(t.points[(e+1)%t.points.length]);return F`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${o} x2=${i} y2=${s} />`}renderMeter(t){let e=this._doc.energy?.meter;if(!e||e.floor_id!==t.id)return y;let[n,o]=this.toScreen([e.x,e.z]);return F`<g class="fp3d-meter" transform="translate(${n} ${o})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale;return F`<g>${t.furniture.map(n=>{let o=n.id===this._furnitureId,[i,s]=this.toScreen([n.x,n.z]),r=Math.min(n.w,n.d)*e>44,l=n.rotation*Math.PI/180,c=n.d/2+Math.max(.3,26/e),[d,p]=this.toScreen([n.x-Math.sin(l)*c,n.z+Math.cos(l)*c]),[h,u]=this.toScreen([n.x-Math.sin(l)*(n.d/2),n.z+Math.cos(l)*(n.d/2)]),f=vt(n.type)&&!!n.entity&&n.entity!=="none"&&this.hass?.states[n.entity]?.state==="on";return F`<g data-furniture=${n.id} class=${`fp3d-furn${o?" fp3d-furn-sel":""}${f?" fp3d-furn-lit":""}${Nt.includes(n.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${i} ${s}) rotate(${n.rotation}) scale(${n.mirror?-e:e} ${e})">
          <rect class="fp3d-furn-body" x=${-n.w/2} y=${-n.d/2} width=${n.w} height=${n.d} />
          <g class="fp3d-furn-sym">${ir(n.type,n.w,n.d)}</g>
          <line class="fp3d-furn-front" x1=${-n.w/2} y1=${n.d/2} x2=${n.w/2} y2=${n.d/2} />
        </g>
        ${r?F`<text x=${i} y=${s+4}>${fe(this.hass,n.type)}</text>`:y}
      </g>
      ${o&&this.isAdmin&&!n.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,g])=>{let[_,v]=this.toScreen([n.x+m*n.w*Math.cos(l)/2-g*n.d*Math.sin(l)/2,n.z+m*n.w*Math.sin(l)/2+g*n.d*Math.cos(l)/2]);return F`<g class="fp3d-resize" data-resize=${`${n.id}:${m}:${g}`}>
              <circle cx=${_} cy=${v} r="14" class="fp3d-hit" />
              <rect x=${_-5} y=${v-5} width="10" height="10" rx="2" />
            </g>`}):y}
      ${o?(()=>{let[m,g]=this.toScreen([n.x+Math.sin(l)*(n.d/2+18/e),n.z-Math.cos(l)*(n.d/2+18/e)]);return F`<text class="fp3d-dim" x=${m} y=${g+4}>${this.m(n.w,2)} × ${this.m(n.d,2)}</text>`})():y}
      ${o&&n.locked?F`<text class="fp3d-lock" x=${d} y=${p+5}>🔒</text>`:y}
      ${o&&this.isAdmin&&!n.locked?F`<g class="fp3d-rotate" data-rotate=${n.id}>
            <line x1=${h} y1=${u} x2=${d} y2=${p} />
            <circle cx=${d} cy=${p} r="16" class="fp3d-hit" />
            <circle cx=${d} cy=${p} r="8" />
            <path d="M${d-4} ${p-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}`})}</g>`}renderOpenings(t,e){return F`<g>${t.openings.map(n=>{let o=we(n,t.rooms,t.walls??[]);if(!o)return y;let{room:i,edge:s}=o,r=Do(e,n,o),l=qt(i,s,n.offset-n.width/2),c=qt(i,s,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),p=(c[1]-l[1])/(n.width||1),h=nt(i.points)>=0?1:-1,u=[-p*h,d*h],f=[.06,.06];r&&(f=r.wall.free||r.wall.roomLeft===i.id?[r.wall.left,r.wall.right]:[r.wall.right,r.wall.left]);let m=(w,z)=>this.toScreen([w[0]+u[0]*z,w[1]+u[1]*z]),g=[m(l,f[0]+.01),m(c,f[0]+.01),m(c,-f[1]-.01),m(l,-f[1]-.01)],_=n.id===this._openingId,v=kn(n,r?.wall.exterior??!1),$=n.type==="door"&&Po(v),k=`fp3d-open fp3d-open-${n.type}${$?" fp3d-open-front":""}${_?" fp3d-open-sel":""}`,x;if(n.type==="garage"){let w=m(l,f[0]-.04),z=m(c,f[0]-.04),S=m(l,f[0]+Math.min(2,n.height)),I=m(c,f[0]+Math.min(2,n.height));x=F`<line x1=${w[0]} y1=${w[1]} x2=${z[0]} y2=${z[1]} />
          <path class="fp3d-open-track" d="M${w[0]} ${w[1]}L${S[0]} ${S[1]}M${z[0]} ${z[1]}L${I[0]} ${I[1]}" />`}else if(n.type==="door"){let w=n.swing==="out",z=w?-f[1]:f[0],S=n.hinge==="left"==h>0,I=n.leaves===2,L=l,O=c,T=[],V=Ls(n.width,v,S,n);if(V){let B=q=>q<=.02?l:q>=n.width-.02?c:qt(i,s,n.offset-n.width/2+q);L=B(V.x0),O=B(V.x1),T=V.panels.map(([q,U])=>[B(q),B(U)])}let E=[(L[0]+O[0])/2,(L[1]+O[1])/2],R=(I?.5:1)*Math.hypot(O[0]-L[0],O[1]-L[1]),j=(f[0]-f[1])/2,D=T.map(([B,q])=>{let U=m(B,j+.035),et=m(q,j+.035),dt=m(B,j-.035),Le=m(q,j-.035);return F`<line class="fp3d-open-pane" x1=${U[0]} y1=${U[1]} x2=${et[0]} y2=${et[1]} /><line class="fp3d-open-pane" x1=${dt[0]} y1=${dt[1]} x2=${Le[0]} y2=${Le[1]} />`}),H=(B,q)=>{let[U,et]=m(B,z),[dt,Le]=m(q,z),an=m(B,z+(w?-R:R)),wi=R*this._view.scale,za=(an[0]-U)*(Le-et)-(an[1]-et)*(dt-U);return F`<path d="M${U} ${et}L${an[0]} ${an[1]}A${wi} ${wi} 0 0 ${za>0?1:0} ${dt} ${Le}" />`};x=F`${D}${v==="passage"?F`<line class="fp3d-open-passage" x1=${m(l,j)[0]} y1=${m(l,j)[1]} x2=${m(c,j)[0]} y2=${m(c,j)[1]} />`:v==="sliding"?F`<line x1=${m(L,z)[0]} y1=${m(L,z)[1]} x2=${m(O,z)[0]} y2=${m(O,z)[1]} />`:I?F`${H(L,E)}${H(O,E)}`:H(S?L:O,S?O:L)}`}else{let w=(f[0]-f[1])/2,z=m(l,w+.035),S=m(c,w+.035),I=m(l,w-.035),L=m(c,w-.035),O=[(l[0]+c[0])/2,(l[1]+c[1])/2],T=m(O,f[0]),V=m(O,-f[1]);x=F`<line x1=${z[0]} y1=${z[1]} x2=${S[0]} y2=${S[1]} /><line x1=${I[0]} y1=${I[1]} x2=${L[0]} y2=${L[1]} />${n.leaves===2?F`<line x1=${T[0]} y1=${T[1]} x2=${V[0]} y2=${V[1]} />`:y}`}let A=m(l,(f[0]-f[1])/2),P=m(c,(f[0]-f[1])/2);return F`<g data-opening=${n.id} class=${k}>
        <line class="fp3d-open-hit" x1=${A[0]} y1=${A[1]} x2=${P[0]} y2=${P[1]} />
        <polygon class="fp3d-open-gap" points=${g.map(w=>w.join(",")).join(" ")} />
        ${x}
      </g>`})}</g>`}renderDevices(t){return F`<g>${t.placements.map(e=>{let n=K(e.entity_id);if(!n)return y;let[o,i]=this.toScreen([e.x,e.z]),s=this.hass?.states[e.entity_id]?.state==="on",r=e.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${r?" fp3d-device-sel":""}`;return F`${n==="camera"?this.renderCameraWedge(e,r):y}<g data-device=${e.entity_id} class=${l} transform="translate(${o} ${i})">
        <title>${Z(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Qe(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${r&&e.locked?F`<text class="fp3d-lock" x=${o+16} y=${i-12}>🔒</text>`:y}`})}</g>`}renderCameraWedge(t,e){let n=t.mount==="ceiling",o=t.fov??(n?360:90),i=t.reach??(n?3:4.5),s=(t.rotation??0)*Math.PI/180,r=($,k)=>this.toScreen([t.x-Math.sin(s+$)*k,t.z+Math.cos(s+$)*k]),[l,c]=this.toScreen([t.x,t.z]),d=Math.min(o,359.9)*Math.PI/180/2,[p,h]=r(-d,i),[u,f]=r(d,i),m=i*this._view.scale,g=o>=360?"":`M${l} ${c}L${p} ${h}A${m} ${m} 0 ${d>Math.PI/2?1:0} 1 ${u} ${f}Z`,[_,v]=r(0,i);return F`<g class="fp3d-wedge ${e?"fp3d-wedge-sel":""}">
      ${o>=360?F`<circle cx=${l} cy=${c} r=${m} />`:F`<path d=${g} />`}
      ${e&&this.isAdmin&&!t.locked?F`<g class="fp3d-rotate" data-aim=${t.entity_id}>
            <line x1=${l} y1=${c} x2=${_} y2=${v} />
            <circle cx=${_} cy=${v} r="16" class="fp3d-hit" />
            <circle cx=${_} cy=${v} r="8" />
            <path d="M${_-4} ${v-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>`}renderHandles(t){let e=t.points,n=e.length,o=e.map((s,r)=>{let l=e[(r+1)%n],[c,d]=this.toScreen(s),[p,h]=this.toScreen(l),u=Math.hypot(l[0]-s[0],l[1]-s[1]),f=(c+p)/2,m=(d+h)/2,[g,_]=this.toScreen(kt(e)),v=-(h-d),$=p-c,k=Math.hypot(v,$)||1;v/=k,$/=k,v*(f-g)+$*(m-_)<0&&(v=-v,$=-$);let x=Math.hypot(p-c,h-d);return F`
        ${x>50?Math.abs(v)>Math.abs($)?F`<text class="fp3d-dim" style="text-anchor:${v>0?"start":"end"}" x=${f+v*13} y=${m+$*13+4}>${this.m(u,2)}</text>`:F`<text class="fp3d-dim" x=${f+v*16} y=${m+$*16+4}>${this.m(u,2)}</text>`:y}
        ${x>36?F`<g data-mid=${r} class="fp3d-mid"><circle cx=${f} cy=${m} r="14" class="fp3d-hit" /><circle cx=${f} cy=${m} r="6" /><path d="M${f-3} ${m}h6M${f} ${m-3}v6" /></g>`:y}
      `}),i=e.map((s,r)=>{let[l,c]=this.toScreen(s);return F`<g data-vertex=${r} class=${r===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${c-9}>${r+1}</text>`});return F`<g>${o}${i}</g>`}renderDraft(){let t=this.drag;if(t?.kind==="freewall"){let[o,i]=this.toScreen(t.start),[s,r]=this.toScreen(t.end),l=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return F`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${o} y1=${i} x2=${s} y2=${r} />
        <text class="fp3d-dim" x=${(o+s)/2} y=${(i+r)/2-10}>${this.m(l,2)}</text>
      </g>`}if(t?.kind==="rect"){let[o,i]=this.toScreen(t.start),[s,r]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),c=Math.abs(t.end[1]-t.start[1]);return F`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(o,s)} y=${Math.min(i,r)} width=${Math.abs(s-o)} height=${Math.abs(r-i)} />
        <text class="fp3d-dim" x=${(o+s)/2} y=${Math.min(i,r)-8}>${this.m(l,2)} × ${this.m(c,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return y;let e=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=e.map(o=>this.toScreen(o));return F`<g pointer-events="none">
      ${n.length>1?F`<polyline class="fp3d-draft" points=${n.map(o=>o.join(",")).join(" ")} />`:y}
      ${n.slice(1).map((o,i)=>{let s=n[i];return Math.hypot(o[0]-s[0],o[1]-s[1])<30?y:F`<text class="fp3d-dim" x=${(s[0]+o[0])/2} y=${(s[1]+o[1])/2-6}>${this.m(Math.hypot(e[i+1][0]-e[i][0],e[i+1][1]-e[i][1]),2)}</text>`})}
      ${this._draft.map((o,i)=>{let[s,r]=this.toScreen(o);return F`<circle class=${i===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${r} r=${i===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?F`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:y}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return F`<g pointer-events="none">
      ${t.x!==void 0?F`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:y}
      ${t.z!==void 0?F`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:y}
      ${t.point?F`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:y}
    </g>`}get unit(){return Wo(this.hass,this._doc.settings.units)}m(t,e=2){return pr(t,this.unit,n=>gt(this.hass,n,e))}area(t){return ur(Math.abs(t),this.unit,e=>gt(this.hass,e,1))}lenValue(t){return this.unit==="imperial"?ae(t):String(M(t))}readLen(t){if(this.unit==="imperial")return No(t,"imperial");let e=parseFloat(t.replace(",","."));return Number.isFinite(e)?e:null}len(t,e,n,o=.01,i){return this.unit!=="imperial"?this.num(t,e,n,o,i):b`<label class="fp3d-field"
      >${Xe(t,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${ae(e)}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=s.target,l=No(r.value,"imperial");l!==null?n(i!==void 0?Math.max(i,l):l):r.value=ae(e)}}
    /></label>`}num(t,e,n,o=.01,i){return b`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${o}
        min=${i??y}
        .value=${String(M(e))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=parseFloat(s.target.value.replace(",","."));Number.isFinite(r)&&n(r)}}
    /></label>`}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",t?"1":"0")}catch{}}renderAside(t){return this._split&&!this._sidePinned&&!this.narrow?this._sideOpen?b`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:b`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this._sideOpen=!0}>☰</button>
        ${this._furnitureId||this._deviceId||this._openingId?b`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this._sideOpen=!0}>⚙</button>`:y}
        <button class="fp3d-strip-btn" title=${this.t("tool_furniture")} @click=${()=>(this._tool="furniture",this._draft=[],this._sideOpen=!0)}>🛋</button>
        <button class="fp3d-strip-btn" title=${this.t("tool_opening")} @click=${()=>(this._tool="opening",this._draft=[],this._sideOpen=!0)}>🚪</button>
      </aside>`:b`<aside class="fp3d-side">${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){return!this._split||this.narrow?y:b`<div class="fp3d-pin-row">
      ${t?b`<button class="fp3d-btn" @click=${()=>this._sideOpen=!1}>${this.t("side_close")}</button>`:y}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`}renderSide(t){let e=this._doc?.floors??[],n=this.room,o=this.isAdmin,i=Object.values(this.hass?.areas??{}).sort((r,l)=>r.name.localeCompare(l.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(t);if(this._tool==="furniture"&&t&&o)return b`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):y} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:n?.name??""})}</button>
        ${s}`:n&&this._tool!=="measure"?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,i)} ${this.renderDeviceList(n)}`:b`
      ${o?y:b`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${this.t("floors")}</h3>
        <div class="fp3d-floor-list">
          ${[...e].reverse().map(r=>b`<button
              class="fp3d-chip"
              aria-pressed=${r.id===this._floorId}
              @click=${()=>{this._floorId=r.id,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}}
            >
              ${r.name}
            </button>`)}
          ${o?b`<button
                class="fp3d-btn"
                aria-expanded=${this._floorMenu}
                @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:this.addFloor()}
              >
                + ${this.t("add_floor")}
              </button>`:y}
        </div>
        ${o&&this._floorMenu?b`<div class="fp3d-floor-menu">
              <p class="fp3d-sub">${this.t("floor_from_ha")}</p>
              ${this.freeHaFloors.map(r=>b`<button class="fp3d-btn" @click=${()=>this.addFloor(r)}>
                  ${r.name}${r.level!=null?b` <span class="fp3d-sub">· ${this.t("level",{n:r.level})}</span>`:y}
                </button>`)}
              <button class="fp3d-btn" @click=${()=>this.addFloor()}>${this.t("floor_empty")}</button>
            </div>`:y}
        ${t?b`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!o} @change=${r=>this.updateFloor({name:r.target.value})}
              /></label>
              ${this.len(this.t("elevation"),t.elevation,r=>this.updateFloor({elevation:r}))}
              ${o?b`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${r=>this._shiftX=Number(r.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${r=>this._shiftZ=Number(r.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${t.start_view?b`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:y}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${r=>this._shiftAll=r.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:y}
              ${this.len(this.t("height"),t.height,r=>this.updateFloor({height:Math.max(1,r)}),.05,1)}
              ${Object.keys(this.hass?.floors??{}).length?b`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!o} @change=${r=>this.updateFloor({ha_floor:r.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(this.hass?.floors??{}).filter(r=>r.floor_id===t.ha_floor||!e.some(l=>l.ha_floor===r.floor_id)).map(r=>b`<option value=${r.floor_id} ?selected=${r.floor_id===t.ha_floor}>${r.name}</option>`)}
                    </select></label
                  >`:y}
              ${o&&this.unplacedAreas(t).length?b`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                  </div>`:y}
              ${o?b`<div class="fp3d-actions fp3d-wide">
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
                  ${this._notice?b`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:y}`:y}
            </div>`:y}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?b`${this.renderRoomForm(n,i)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):y}
      ${o?this.renderStartView():y} ${o?this.renderFavorites():y}
      ${this.renderHelpLinks()}
      ${o&&!1?this.renderPresenceSettings():y}
      ${t&&o?this.renderBackgroundForm(t):y} ${o?this.renderSettings():y}
      ${o?this.renderBackup():y}
    `}renderRoomList(t){return t.rooms.length?b`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map(e=>b`<button class="fp3d-row" @click=${()=>this.selectItem("room",e.id)}>
            <span>${e.name}</span><span class="fp3d-muted">${this.area(pt(e.points))}</span>
          </button>`)}
      </div>
    </section>`:y}renderRoomOpenings(t){let e=(this.floor?.openings??[]).filter(n=>n.room_id===t.id);return e.length?b`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${e.length})</summary>
      <div class="fp3d-room-list">
        ${e.map(n=>b`<button class="fp3d-row" @click=${()=>(this.selectItem("opening",n.id),this.renderRoot.querySelector(".fp3d-side")?.scrollTo(0,0))}>
            <span>${this.t(`preset_${Sn(n)}`)}</span><span class="fp3d-muted">${this.m(n.width,2)}</span>
          </button>`)}
      </div>
    </details>`:y}renderRoomForm(t,e){let n=this.isAdmin,o=En(t.points),i=it(t.points);return b`<section>
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
            ${Ms.map(s=>b`<option value=${s} ?selected=${s===t.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${o?b`${this.len(this.t("x"),i.x0,s=>this.setRect("x",s))} ${this.len(this.t("z"),i.z0,s=>this.setRect("z",s))}
            ${this.len(this.t("width"),i.x1-i.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.len(this.t("depth"),i.z1-i.z0,s=>this.setRect("d",s),.01,.05)}`:y}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${Xe(this.t("room_ceiling"),this.unit)}
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
        ${t.start_view?b`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:y}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(pt(t.points)),n:this.area(cr(t,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{navigator.clipboard?.writeText(t.id).catch(()=>{})}}>${t.id}</code></p>
      ${this.renderEdgeHeights(t)} ${this.renderRoomClimate(t)} ${this.renderRoomOpenings(t)}
      <details class="fp3d-points" ?open=${!o}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((s,r)=>b`<div class="fp3d-point ${r===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${r+1}</span>
            ${this.len(this.t("x"),s[0],l=>this.setPoint(r,0,l))} ${this.len(this.t("z"),s[1],l=>this.setPoint(r,1,l))}
            ${n?b`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(r)}>
                  ×
                </button>`:y}
          </div>`)}
      </details>
      ${n?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:y}
      ${this._spots?this.renderSpotForm(t):y}
      ${this._packages?b`<div class="fp3d-packages">
            ${ya.map(s=>b`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:y}
    </section>`}applyPackage(t,e){if(!this.isAdmin)return;let n=$a(t,e,()=>W("furniture"));this.change((o,i)=>i.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=it(t.points),n=this.hass?se(this.hass,t.area_id).filter(o=>o.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,o,i]=Pt[e.type],s=ko(t,e.rows,e.cols).map(([r,l])=>({id:W("furniture"),type:e.type,x:r,z:l,rotation:0,w:n,d:o,h:i,variant:null,entity:e.entity??"none",power:null}));this.change((r,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(t){let e=this._spots,n=ko(t,e.rows,e.cols).length,o=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),i=s=>this._spots={...e,...s};return b`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>i({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>b`<option value=${s} ?selected=${s===e.type}>${this.t(`furn_${s}`)}</option>`)}
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
    </div>`}iconInput(t,e){let n=t?t.startsWith("mdi:")?t:`mdi:${t}`:"";return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${t??""} ?disabled=${!this.isAdmin} @change=${o=>e(o.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?Ni(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):y}
      </span></label
    >`}markerSelect(t,e){return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${_s.map(n=>b`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t){let e=n=>{let o=this.hass?.entities?.[n],i=o?.area_id??(o?.device_id?this.hass?.devices?.[o.device_id]?.area_id:null);return i?this.hass?.areas?.[i]?.name:void 0};return Object.keys(this.hass?.states??{}).filter(t).map(n=>({id:n,label:`${Z(this.hass,n)}${e(n)?` \xB7 ${e(n)}`:""}`})).sort((n,o)=>n.label.localeCompare(o.label))}entitySelect(t,e,n,o,i){let s=n===void 0?null:n?this.t("entity_auto",{name:Z(this.hass,n)}):this.t("entity_auto_none"),r=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return b`<label class="fp3d-field fp3d-wide"
      >${t}
      <fp3d-entity-picker
        .options=${o}
        .fixed=${r}
        .value=${e===null?s!==null?"__auto":"none":e}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),i(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(t){let e=this.floor,n=e?we(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let o=lt(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return Do(o.walls,t,n)?.wall.exterior??!1}renderSidelightFields(t){if(t.type!=="door")return y;let e=kn(t,this.openingIsExterior(t));if(e!=="sidelight"&&e!=="sidelights")return y;let n=this.isAdmin,o=(i,s)=>b`<label class="fp3d-field"
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
    </label>`;return e==="sidelight"?b`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!t.sidelight_hinge} ?disabled=${!n} @change=${i=>this.updateOpening({sidelight_hinge:i.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${o("sidelight_width","sidelight_width")}`:b`${o("sidelight_width","sidelight_width_left")} ${o("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(t){let e=t.type==="door"?Mo:So,n=kn({type:t.type,style:null},this.openingIsExterior(t)),o=t.style&&e.includes(t.style)?t.style:"";return b`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${i=>this.updateOpening({style:i.target.value||null})}>
        <option value="" ?selected=${!o}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(i=>b`<option value=${i} ?selected=${i===o}>${this.t(`style_${i}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",o=t.type==="garage",i=_=>{if(!this.hass)return null;let v=structuredClone(this._doc.floors);for(let $ of v)for(let k of $.openings)k.id===t.id&&(k[_]=null);return Ys(this.hass,v).get(t.id)?.[_]??null},s=_=>this.hass?.states[_]?.attributes.device_class,r=this.entityOptions(_=>_.startsWith("cover.")),l=this.entityOptions(_=>/^(sensor|number|input_number)\./.test(_)&&Number.isFinite(Number(this.hass?.states[_]?.state))),c=this.entityOptions(_=>_.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(_)??"")||ct(_)&&Oo(this.hass?.states[_])!==null),d=this.entityOptions(_=>{let v=this.hass?.states[_];return _.startsWith("binary_sensor.")?typeof v?.attributes.window_state=="string":ct(_)&&(Oo(v)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${_} ${Z(this.hass,_)}`))}),p=this.entityOptions(_=>_.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(_)??"")),h=o?this.entityOptions(_=>_.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(_)??"")||Sa.test(_)):c,u=o&&Sa.test(t.contact??"")&&!(t.cover&&t.cover!=="none")&&!i("cover"),f=_=>{let v=_===1,$=v?t.tilt:t.tilt2??null,k=v?t.contact:t.contact2,x=(v?t.sensor:t.sensor2)??($&&$!=="none"?"contact_tilt":"contact"),A=P=>this.updateOpening(v?{contact:P}:{contact2:P==="none"?null:P});return b`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${P=>{let w=P.target.value,z=w==="contact_tilt"?{}:v?{tilt:null}:{tilt2:null};this.updateOpening({...v?{sensor:w}:{sensor2:w},...z})}}
          >
            ${["contact","handle","contact_tilt"].map(P=>b`<option value=${P} ?selected=${P===x}>${this.t(`sensor_kind_${P}`)}</option>`)}
          </select></label
        >
        ${x==="handle"?this.entitySelect(this.t("handle_entity"),k,void 0,d,P=>A(P==="none"?v?"none":null:P)):this.entitySelect(this.t("contact_entity"),k,v?i("contact"):void 0,p,A)}
        ${x==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),$,void 0,c,P=>this.updateOpening(v?{tilt:P==="none"?null:P}:{tilt2:P==="none"?null:P})):y}
        ${v?b`${this.entitySelect(this.t("tilt_angle_entity"),t.tilt_angle??null,void 0,this.entityOptions(P=>ct(P)),P=>this.updateOpening({tilt_angle:P==="none"?null:P}))}
            ${t.tilt_angle&&t.tilt_angle!=="none"?b`${this.num(this.t("tilt_angle_max"),t.tilt_max??15,P=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,P))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),t.tilt_offset??0,P=>this.updateOpening({tilt_offset:P}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!t.tilt_invert} ?disabled=${!e} @change=${P=>this.updateOpening({tilt_invert:P.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:y}`:y}`},m=Sn(t),g=t.type==="door";return b`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${m}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?b`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Mn).map(_=>b`<button class="fp3d-chip" aria-pressed=${_===m} @click=${()=>this.setOpeningPreset(t,_)}>${this.t(`preset_${_}`)}</button>`)}
          </div>`:y}
      ${e&&!o?b`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${g?b`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:y}
          </div>`:y}
      <div class="fp3d-form">
        ${this.len(this.t("width"),t.width,_=>this.updateOpening({width:Math.max(.3,_)}),.01,.3)}
        ${this.len(this.t("opening_position"),t.offset,_=>this.updateOpening({offset:Math.max(0,_)}),.01,0)}
        ${n?this.len(this.t("sill"),t.sill,_=>this.updateOpening({sill:Math.max(0,_)}),.01,0):y}
        ${this.len(this.t("opening_height"),t.height,_=>this.updateOpening({height:Math.max(.3,_)}),.01,.3)}
        ${o?y:this.renderStyleSelect(t)}
        ${this.renderSidelightFields(t)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${_=>this.updateOpening({mark:_.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${o?y:b`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${_=>this.updateOpening({hinge:_.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||o||g?this.entitySelect(this.t(n?"cover_entity":"door_cover"),t.cover,i("cover"),r,_=>this.updateOpening({cover:_})):y}
        ${(n||o||g)&&t.cover!=="none"&&(t.cover||i("cover"))?b`${this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,l,_=>this.updateOpening({position:_==="none"?null:_}))}
              ${t.position?b`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${_=>this.updateOpening({position_inverted:_.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:y}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_invert_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.cover_invert} @change=${_=>this.updateOpening({cover_invert:_.target.checked||void 0})} />
                ${this.t("cover_invert")}</label
              >
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${_=>this.updateOpening({confirm:_.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:y}
        ${n?b`${t.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:y}
              ${f(1)} ${t.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${f(2)}`:y}`:b`${this.entitySelect(this.t(o?"garage_contact":t.leaves===2?"contact_main":"contact_entity"),t.contact,i("contact"),h,_=>this.updateOpening({contact:_}))}
              ${u?b`<label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                    ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${_=>this.updateOpening({confirm:_.target.checked})} />
                    ${this.t("device_confirm")}</label
                  >`:y}
              ${t.leaves===2&&!o?this.entitySelect(this.t("contact_second"),t.contact2,void 0,c,_=>this.updateOpening({contact2:_==="none"?null:_})):y}
              ${g?b`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!t.shut} ?disabled=${!e} @change=${_=>this.updateOpening({shut:_.target.checked})} />
                    ${this.t("door_shut")}</label
                  >`:y}`}
        ${t.contact!=="none"&&(t.contact||t.contact2||i("contact"))?b`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!t.contact_invert} ?disabled=${!e} @change=${_=>this.updateOpening({contact_invert:_.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:y}
        ${t.type==="window"?b`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!t.rain_ignore} ?disabled=${!e} @change=${_=>this.updateOpening({rain_ignore:_.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:y}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":o?"garage_hint":"door_hint")}</p>
      ${e?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:y}
    </section>`}renderFurnitureForm(t){let e=this.isAdmin;return b`<section>
      <div class="fp3d-h3row"><h3>${t.name||this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${t.name??""} ?disabled=${!e} placeholder=${this.t(`furn_${t.type}`)===`furn_${t.type}`?"":this.t(`furn_${t.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        ${t.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${$o.map(n=>b`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).filter(n=>n.items.length).map(n=>b`<optgroup label=${ht(n)}>
                ${n.items.map(o=>{let i=_e(n.id,o.id);return b`<option value=${i} ?selected=${i===t.type}>${Wt(o)}</option>`})}
              </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(n=>t.type.startsWith(`pack:${n.id}:`))?b`<option value=${t.type} selected>${fe(this.hass,t.type)}</option>`:y}
          </select></label
        >
        ${this.len(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.len(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.len(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.05,n)}),.01,.05)}
        ${this.len(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.05,n)}),.01,.05)}
        ${this.len(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${vt(t.type)?y:b`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!t.mirror} ?disabled=${!e} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${t.type==="led_strip"?b`${this.num(this.t("strip_tilt"),t.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!t.upright} ?disabled=${!e} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:y}
        ${ve(t)&&this.floor?b`${this.len(this.t("mount_height"),t.mount_y??bt(this.floor,t),n=>this.updateFurniture({mount_y:Math.min(vi,Math.max(0,n))}),.01,0)}
              ${t.mount_y!=null?b`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:y}`:y}
      </div>
      ${t.type==="stairs"?b`<p class="fp3d-sub">${this.t("stairs_hint")}</p>`:y}
      ${t.type==="stairs_u"?b`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:y}
      ${t.type==="stairwell"?b`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&(Pr(Et(t),n.points)||pt(Ho(n.points,Et(t)))>.01))?b`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:y}`:y}
      ${t.type==="inverter"||t.type==="home_battery"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(t.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>b`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`${t.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${t.type==="lamp_pendant"?b`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>b`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${Be(t.type)?this.renderFurnitureLinks(t):fc.has(t.type)?y:b`<div class="fp3d-form fp3d-links">${this.renderStateLinks(t)}</div>`} ${t.type==="parking"?this.renderParkingForm(t):y}
      ${t.type.startsWith("pack:mastershort.vehicles:")&&this.isAdmin?b`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(t)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:y}
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(t)}>▦ ${this.t("wall_view")}</button>
            ${t.entity&&t.entity!=="none"&&t.type!=="parking"?b`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(t)}>${this.t("as_device")}</button>`:y}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=ua(this.hass,t),n=0,o=r=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===r),i=(r,l,c)=>{if(!c)return;let d=o(r);if(!d&&this.floor&&(this.addEnergyDevice(r),d=o(r)),!d||d[l]&&d[l]!=="none")return;let p=d.id;this.change(h=>{let u=h.floors.flatMap(f=>f.furniture).find(f=>f.id===p);u&&(u[l]=c)}),n++};i("meter","power",e.grid),i("inverter","power",e.solar),i("home_battery","power",e.battery),i("home_battery","soc",e.battery_soc);let s=pa(t);for(let r of["gas","water"])s[r]&&!this._doc.energy[r]&&(this.setEnergy({[r]:s[r]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let t=this._doc.energy,e=this.isAdmin,n=(m,g)=>this.hass?.states[m]?.attributes[g],o=this.entityOptions(m=>this.isPowerSensor(m)),i=this.entityOptions(m=>ct(m)&&n(m,"device_class")==="battery"),s=this.entityOptions(m=>ct(m)&&(n(m,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(m,"unit_of_measurement")??""))),r=m=>g=>this.setEnergy({[m]:g==="none"?null:g}),l=m=>this.entityOptions(g=>ct(g)&&(n(g,"device_class")===m||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(g,"unit_of_measurement")??""))),c=this.hass?$e(this.hass,this._doc.floors):new Map,d=ui(this._doc,m=>this.devicePower(m,c)),p=this.hass?fa(this.hass,this._doc,[],d):null,h=!!p&&(p.solar??0)<20,u=h&&p.grid!==null&&p.grid<-50,f=h&&p.battery!==null&&p.battery<-50&&(p.grid??0)<=0;return b`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${u?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({grid_invert:!t.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      ${f?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({battery_invert:!t.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),t.grid,d.grid,o,r("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} ?disabled=${!e} @change=${m=>this.setEnergy({grid_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,d.solar[0]??null,o,r("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,d.battery[0]??null,o,r("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} ?disabled=${!e} @change=${m=>this.setEnergy({battery_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,d.soc[0]??null,i,r("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),t.consumption,null,o,r("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,s,r("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),t.gas??null,void 0,l("gas"),m=>this.setEnergy({gas:m==="none"?null:m}))}
        ${this.entitySelect(this.t("energy_water_meter"),t.water??null,void 0,l("water"),m=>this.setEnergy({water:m==="none"?null:m}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!e||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?b`<p class="fp3d-sub">${this._energyNote}</p>`:y}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(t){let e=t.elevation+t.height;if(!(this._doc.settings.roof.sections??[]).some(i=>jr(i,e)))return y;let o={settings:this._doc.settings};return F`${[1.5,2].map(i=>Cr(o,t.elevation,i).map(([s,r])=>{let[l,c]=this.toScreen(s),[d,p]=this.toScreen(r);return F`<line class="fp3d-headroom" x1=${l} y1=${c} x2=${d} y2=${p} />
          <text class="fp3d-headroom-label" x=${(l+d)/2} y=${(c+p)/2-4}>${this.m(i,1)}</text>`}))}`}renderFavorites(){let t=this._doc.settings.favorites??[],e=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>e.includes(s.split(".")[0])&&!t.includes(s)),o=s=>this.change(r=>r.settings.favorites=s.length?s:void 0),i=(s,r)=>{let l=[...t],[c]=l.splice(s,1);l.splice(Math.max(0,Math.min(l.length,s+r)),0,c),o(l)};return b`<details class="fp3d-section">
      <summary>${this.t("favorites")}${t.length?b` <span class="fp3d-lib-count">${t.length}</span>`:y}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${t.map((s,r)=>b`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${Z(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${r===0} @click=${()=>i(r,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${r===t.length-1} @click=${()=>i(r,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>o(t.filter(l=>l!==s))}>✕</button>
        </div>`)}
      ${t.length<40?b`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!t.includes(s)&&o([...t,s])})}
          </div>`:y}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let t=this._doc.settings.media_presets??[],e=o=>this.change(i=>i.settings.media_presets=o.length?o:void 0),n=(o,i)=>e(t.map((s,r)=>r===o?{...s,...i}:s));return b`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(o=>b`<option value=${o}></option>`)}
      </datalist>
      ${t.map((o,i)=>b`<div class="fp3d-form fp3d-own-button">
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
      ${t.length<30?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:W("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:y}`}renderOwnButtons(){let t=this._doc.settings.buttons??[],e=i=>this.change(s=>s.settings.buttons=i.length?i:void 0),n=(i,s)=>e(t.map((r,l)=>l===i?{...r,...s}:r)),o={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return b`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${t.map((i,s)=>b`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${i.label} @change=${r=>n(s,{label:r.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${r=>n(s,{action:r.target.value})}>
              ${vs.map(r=>b`<option value=${r} ?selected=${r===i.action}>${this.t(`own_action_${r}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(i.icon??null,r=>n(s,{icon:r}))}
          ${i.action!=="fire_dom_event"?b`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${i.action}`)}
                <input type="text" .value=${i.target??""} placeholder=${o[i.action]} @change=${r=>n(s,{target:r.target.value.trim()||null})}
              /></label>`:y}
          ${i.action==="service"||i.action==="fire_dom_event"?b`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${i.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${i.data?JSON.stringify(i.data,null,1):""}
                  @change=${r=>{r.target.setCustomValidity("");let l=r.target.value.trim();if(!l)return n(s,{data:null});try{let c=JSON.parse(l);c&&typeof c=="object"&&!Array.isArray(c)&&n(s,{data:c})}catch{r.target.setCustomValidity(this.t("own_data_bad")),r.target.reportValidity()}}}
                ></textarea></label
              >`:y}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>e([...t.slice(0,s-1),i,t[s-1],...t.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((r,l)=>l!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<20?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:W("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:y}`}paneView(){let e=this.renderRoot.querySelector("fp3d-view3d")?.currentView();if(!e)return null;let n=e.target;return{theta:M(e.theta),phi:M(e.phi),radius:M(e.radius),...n?{target:{x:M(n.x),y:M(n.y),z:M(n.z)}}:{}}}rememberFloorView(){let t=this.paneView();if(!t){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:t})}rememberRoomView(){let t=this.paneView();if(!t){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:t})}renderStartView(){let t=this._doc.settings.start_view??null,e=()=>{let n=this.paneView();n&&this.change(o=>o.settings.start_view=n)};return b`<details class="fp3d-section">
      <summary>${this.t("start_view")}</summary>
      <p class="fp3d-sub">${this.t("start_view_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" @click=${e}>${this.t("start_view_set")}</button>
        ${t?b`<button class="fp3d-btn" @click=${()=>this.change(n=>n.settings.start_view=null)}>${this.t("start_view_reset")}</button>`:y}
      </div>
      ${t?b`<p class="fp3d-sub">${this.t("start_view_saved")}</p>
            <p class="fp3d-sub">${this.t("start_view_card")}</p>
            <code class="fp3d-code"
              >start_view: { theta: ${t.theta}, phi: ${t.phi}, radius: ${t.radius}${t.target?`, target: { x: ${t.target.x}, y: ${t.target.y}, z: ${t.target.z} }`:""} }</code
            >`:y}
    </details>`}renderPresenceSettings(){let t=Object.keys(this.hass?.states??{}).filter(o=>o.startsWith("person.")).sort(),e=o=>{let i=o.slice(7),s=this.entityOptions(l=>ct(l)),r=l=>l.includes(i)&&/(area|room|raum|bermuda|espresense)/.test(l);return[...s.filter(l=>r(l.id)),...s.filter(l=>!r(l.id))]},n=(o,i)=>{let s=structuredClone(this._doc);s.presence=s.presence.filter(r=>r.person!==o),i&&i!=="none"&&s.presence.push({person:o,sensor:i}),this.setDoc(s)};return b`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(o=>this.entitySelect(`${Z(this.hass,o)} \xB7 ${this.t("presence_sensor")}`,this._doc.presence.find(i=>i.person===o)?.sensor??null,void 0,e(o),i=>n(o,i))):b`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
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
                        >`:y}`:y}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderFurnitureLinks(t){if(!this.hass)return y;let e=this.hass,n=d=>{let p=structuredClone(this._doc.floors);for(let h of p)for(let u of h.furniture)u.id===t.id&&(u[d]=null);return $e(e,p).get(t.id)?.[d]??null},o=Fn(t.type),i=o&&(!be(t.type)||ds(t.type)),s=vt(t.type),r=this.entityOptions(d=>s?/^(light|switch|input_boolean)\./.test(d):i?/^(media_player|switch|input_boolean|light)\./.test(d):t.type==="radiator"?d.startsWith("climate."):t.type==="robot_vacuum"?d.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(d)||Xs(e.states[d])),l=this.entityOptions(d=>this.isPowerSensor(d)),c=t.type==="fridge_smart"?this.entityOptions(d=>d.startsWith("binary_sensor.")):[];return b`<div class="fp3d-form fp3d-links">
        ${t.type==="grid_point"?b`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(s?"furn_entity_light":i?"furn_entity_tv":t.type==="radiator"?"furn_entity_climate":t.type==="robot_vacuum"?"furn_entity_vacuum":"furn_entity"),t.entity??null,n("entity"),r,d=>this.updateFurniture({entity:d}))}
        ${!s&&!Nt.includes(t.type)&&!Rn(t.type)?this.renderStateLinks(t):y}
        ${s&&t.entity&&t.entity!=="none"?b`${this.entitySelect(this.t("furn_color_entity"),t.color_entity??null,void 0,this.entityOptions(d=>d.startsWith("light.")&&d!==t.entity),d=>this.updateFurniture({color_entity:d==="none"?null:d}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:y}
        ${s?this.glowScaleField(t.glow_scale,d=>this.updateFurniture({glow_scale:d})):y}
        ${s||t.type==="grid_point"?y:this.entitySelect(this.t(t.type==="meter"?"energy_grid":t.type==="inverter"?"energy_solar_sensor":t.type==="home_battery"?"energy_battery_sensor":"furn_power"),t.power??null,n("power"),l,d=>this.updateFurniture({power:d}))}
        ${rt("energy_pro")&&!s&&!["grid_point","meter","inverter","home_battery"].includes(t.type)?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({holo:d.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:rt("energy_pro")&&t.type==="inverter"?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${t.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({plant_card:d.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${t.plant_card!==!1?b`${this.len(this.t("holo_right"),t.plant_right??0,d=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,M(d)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),t.plant_up??0,d=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,M(d)))||void 0}),.25)}`:y}`:y}
      </div>
      ${t.type==="meter"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),t.export??null,void 0,l,d=>this.updateFurniture({export:d==="none"?null:d}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:y}
      ${t.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let d=(this._doc.settings.roof.strings??[]).filter(p=>p.inverter===t.id).map(p=>p.name);return b`<p class="fp3d-sub fp3d-wide">${d.length?this.t("inverter_strings",{names:d.join(", ")}):this.t("inverter_strings_none")}</p>`})():y}
      ${t.type==="home_battery"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(d=>ct(d)&&(e.states[d]?.attributes.device_class==="battery"||e.states[d]?.attributes.unit_of_measurement==="%")),d=>this.updateFurniture({soc:d==="none"?null:d}))}
            ${this.entitySelect(this.t("furn_charge"),t.charge??null,void 0,l,d=>this.updateFurniture({charge:d==="none"?null:d}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:y}
      ${t.type==="wallbox"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(d=>$i(d)||ct(d)),d=>this.updateFurniture({status:d==="none"?null:d}))}
          </div>`:y}
      ${!s||t.entity?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isAdmin} @change=${d=>this.updateFurniture({confirm:d.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(t.marker??null,d=>this.updateFurniture({marker:d}))}${this.iconInput(t.icon,d=>this.updateFurniture({icon:d}))}</div>`:y}
      ${t.type==="robot_vacuum"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,er(e,$e(e,this._doc.floors).get(t.id)?.entity??null,null),this.entityOptions(d=>ct(d)),d=>this.updateFurniture({room_sensor:d}))}
          </div>`:y}
      ${t.type==="fridge_smart"?b`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,c,d=>this.updateFurniture({door_left:d}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,c,d=>this.updateFurniture({door_right:d}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:y}
      ${Rn(t.type)?this.renderPictureRules(t):y}
      <p class="fp3d-sub">${this.t(s?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":o?"furn_links_hint_tv":t.type==="robot_vacuum"?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){let e=this.isAdmin,n=(this.packs??[]).flatMap(_=>_.items.filter(v=>v.vehicle).map(v=>({id:_e(_.id,v.id),label:`${Wt(v)} \xB7 ${ht(_)}`}))),o=_=>_.startsWith("device_tracker.")?this.hass?.states[_]?.attributes.source_type==="router"?2:0:1,i=this.entityOptions(_=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(_)).sort((_,v)=>o(_.id)-o(v.id)),s=this.entityOptions(_=>/^(sensor|input_select|select|input_text)\./.test(_)),r=t.type_entity?this.hass?.states[t.type_entity]:void 0,l=Array.isArray(r?.attributes.options)?r.attributes.options:[],c=t.types??[],d=_=>this.updateFurniture({types:_}),p=(_,v)=>b`<select ?disabled=${!e} @change=${$=>v($.target.value||null)}>
        <option value="" ?selected=${!_}>${this.t("parking_vehicle_none")}</option>
        ${n.map($=>b`<option value=${$.id} ?selected=${$.id===_}>${$.label}</option>`)}
      </select>`,h=this.floor,u=h?.rooms.find(_=>_.points.length>=3&&C([t.x,t.z],_.points)),f=t.vehicle?at(t.vehicle):void 0,m=f?f.size[2]*(t.scale??1):0,g=!!u&&!!h&&m>h.height+1e-6;return b`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,i,_=>this.updateFurniture({entity:_==="none"?null:_}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${p(t.vehicle??null,_=>this.updateFurniture({vehicle:_}))}</label>
        ${n.length?y:b`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),_=>this.updateFurniture({scale:Math.min(150,Math.max(30,_))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,s,_=>this.updateFurniture({type_entity:_==="none"?null:_}))}
        ${t.type_entity?b`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${c.map((_,v)=>b`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${_.state}
                    ?disabled=${!e}
                    @change=${$=>d(c.map((k,x)=>x===v?{...k,state:$.target.value}:k))}
                  />
                  ${p(_.vehicle,$=>d(c.map((k,x)=>x===v?{...k,vehicle:$??""}:k)))}
                  <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>d(c.filter(($,k)=>k!==v))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(_=>b`<option value=${_}></option>`)}</datalist>
              ${e?b`<button class="fp3d-btn" @click=${()=>d([...c,{state:l[c.length]??"",vehicle:n[0]?.id??""}])}>${this.t("parking_add_type")}</button>`:y}
            </div>`:y}
      </div>
      ${g?b`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:gt(this.hass,m,2),room:gt(this.hass,h.height,2)})}</p>`:y}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(t)}`}renderCarForm(t){let e=this.hass?.language;if(!rt("auto_pro"))return b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b><a class="fp3d-btn fp3d-primary" href=${Tt(e)} target="_blank" rel="noopener">${this.t("pro_unlock")}</a></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return y;let n=this.hass,o=t.car??{},i=tr(n,{entity:t.entity,car:{device:o.device}}),s=c=>this.updateFurniture({car:{...o,...c}}),r=this.entityOptions(c=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(c)),l=(c,d,p)=>this.entitySelect(this.t(d),o[c]??null,i[c],p,h=>s({[c]:h==="none"?"none":h}));return b`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),o.device??null,void 0,r,c=>s({device:c==="none"?null:c}))}
        ${l("soc","car_soc",this.entityOptions(c=>ct(c)))}
        ${l("range","car_range",this.entityOptions(c=>ct(c)))}
        ${l("charging","car_charging",this.entityOptions(c=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(c)))}
        ${l("plugged","car_plugged",this.entityOptions(c=>$i(c)))}
        ${l("lock","car_lock",this.entityOptions(c=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(c)))}
        ${l("climate","car_climate",this.entityOptions(c=>/^(climate|switch|binary_sensor|input_boolean)\./.test(c)))}
        ${l("tracker","car_tracker",this.entityOptions(c=>c.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(t){let e=new Set(this._libOpen);e.has(t)?e.delete(t):e.add(t),this._libOpen=e;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...e]))}catch{}}librarySection(t,e,n,o){let i=Qn(o).split(/\s+/).filter(Boolean),s=i.length?n.filter(l=>{let c=Qn(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${e}`);return i.every(d=>c.includes(d))}):n;if(o&&!s.length)return y;let r=o?!0:this._libOpen.has(t);return b`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${r} @click=${()=>this.toggleLibrary(t)}>
        <span class="fp3d-lib-caret">${r?"\u25BE":"\u25B8"}</span>${e} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${r?b`<div class="fp3d-library">${s.map(l=>this.libraryButton(l.type,l.label))}</div>`:y}`}libraryHasHits(t){let e=Qn(t).split(/\s+/).filter(Boolean);return[...Object.entries(xo).flatMap(([o,i])=>i.map(s=>`${this.t(`furn_${s}`)} ${zt(Aa,`furn_${s}`)} ${s.replace(/_/g," ")} ${this.t(`furn_group_${o}`)}`)),...(this.packs??[]).flatMap(o=>o.items.map(i=>`${Wt(i)} ${Object.values(i.name).join(" ")} ${i.id.replace(/_/g," ")} ${o.name} ${ht(o)}`))].some(o=>{let i=Qn(o);return e.every(s=>i.includes(s))})}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let o of n.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&!t.includes(o.image)&&t.push(o.image);return t}renderPictureRules(t){let e=this.isAdmin,n=t.pictures??[];if(!rt("screens"))return b`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${Tt(this.hass?.language)} target="_blank" rel="noopener">${this.t("pro_shop")}</a> · <a href=${le(this.hass?.language,"screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let o=_=>this.updateFurniture({pictures:_}),i=this.entityOptions(()=>!0),s=_=>["string","number","boolean"].includes(typeof _),r=_=>Object.entries(this.hass?.states[_]?.attributes??{}).filter(([v,$])=>s($)&&v!=="friendly_name"&&v!=="icon").map(([v])=>v),l=(_,v)=>{let $=this.hass?.states[_];return $?String((v?$.attributes[v]:$.state)??""):""},c=(_,v)=>{let $=this.hass?.states[_],k=!v&&Array.isArray($?.attributes.options)?$.attributes.options:[];return k.length?k:[l(_,v)]},d=_=>`${_.entity}\0${_.attribute??""}`,p=[];n.forEach((_,v)=>{let $=p.find(k=>d(k)===d(_));$?$.rows.push(v):p.push({entity:_.entity,attribute:_.attribute??null,rows:[v]})});let h=(_,v)=>o(n.map(($,k)=>_.rows.includes(k)?{...$,...v}:$)),u=(_,v)=>o(n.map(($,k)=>k===_?{...$,...v}:$)),f=this.storedPictures(),m=this.entityOptions(_=>_.startsWith("camera.")),g=_=>_.image.startsWith("camera:")?_.image.slice(7):null;return b`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?b`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${_=>this.updateFurniture({screen_bg:_.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:y}
      ${p.map(_=>b`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${i}
            .value=${_.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${v=>{v.stopPropagation(),h(_,{entity:v.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${v=>{let $=v.target.value||null,k=l(_.entity,$);o(n.map((x,A)=>_.rows.includes(A)?{...x,attribute:$,state:_.rows[0]===A?k:x.state}:x))}}
          >
            <option value="" ?selected=${!_.attribute}>${this.t("picture_state_of")}</option>
            ${r(_.entity).map(v=>b`<option value=${v} ?selected=${v===_.attribute}>${v}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(_.entity,_.attribute)||"\u2013"})}</span>
          ${_.rows.map(v=>{let $=n[v],k=!!this.hass&&Zs(this.hass,$);return b`<div class="fp3d-picture-row ${k?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${v}"
                placeholder=${this.t("picture_state")}
                .value=${$.state}
                ?disabled=${!e}
                @change=${x=>u(v,{state:x.target.value})}
              />
              <datalist id="fp3d-picture-states-${v}"><option value="*"></option>${c(_.entity,_.attribute).map(x=>b`<option value=${x}></option>`)}</datalist>
              ${this._images[$.image]?b`<img class="fp3d-picture-thumb" src=${this._images[$.image].url} alt="" /> `:y}
              ${g($)&&this.hass?.states[g($)]?.attributes.entity_picture?b`<img class="fp3d-picture-thumb" src=${String(this.hass.states[g($)].attributes.entity_picture)} alt="" />`:y}
              <label class="fp3d-btn fp3d-picture-pick">
                ${$.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${x=>{this.uploadPicture(x,t,v)}} />
              </label>
              ${f.filter(x=>x!==$.image).length?b`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(x=>x!==$.image&&this._images[x]).map(x=>b`<button class="fp3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>u(v,{image:x})}><img src=${this._images[x].url} alt="" /></button>`)}
                  </div>`:y}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test($.image)?$.image:""}
                ?disabled=${!e}
                @change=${x=>{let A=x.target.value.trim();A&&u(v,{image:A})}}
              />
              ${m.length?b`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${m}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${g($)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${x=>{x.stopPropagation(),x.detail.value!=="none"?u(v,{image:`camera:${x.detail.value}`}):g($)&&u(v,{image:""})}}
                  ></fp3d-entity-picker>`:y}
              <span class="fp3d-sub">${k?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>o(n.filter((x,A)=>A!==v))}>✕</button>
            </div>`})}
          ${e?b`<button class="fp3d-btn" @click=${()=>o([...n,{entity:_.entity,attribute:_.attribute,state:l(_.entity,_.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:y}
        </div>`)}
      ${e?b`<button class="fp3d-btn" @click=${()=>o([...n,{entity:i[0]?.id??"",attribute:null,state:"on",image:""}])}>${this.t("picture_add_entity")}</button>`:y}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){let o=t.target,i=o.files?.[0];if(o.value="",!i)return;let s=await createImageBitmap(i),r=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*r),l.height=Math.round(s.height*r),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let c=l.toDataURL(i.type==="image/png"?"image/png":"image/jpeg",.85),d=W("pic");await yn(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let p=this.furnitureItem?.id===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:p.map((h,u)=>u===n?{...h,image:d}:h)})}renderFurnitureLibrary(){let t=this.room,e=this._furnQuery.trim().toLowerCase();return b`<section>
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
      ${e&&!this.libraryHasHits(e)?b`<p class="fp3d-sub">${this.t("furniture_search_none")}</p>`:y}
      ${Object.entries(xo).map(([n,o])=>this.librarySection(`group:${n}`,this.t(`furn_group_${n}`),[...o,...n==="kitchen"&&rt("fridge_smart")?["fridge_smart"]:[]].map(i=>({type:i,label:this.t(`furn_${i}`),search:zt(Aa,`furn_${i}`)})),e))}
      ${(this.packs??[]).filter(n=>n.items.length).map(n=>this.librarySection(`pack:${n.id}`,ht(n),n.items.map(o=>({type:_e(n.id,o.id),label:Wt(o),search:Object.values(o.name).join(" ")})),e))}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(t,e){let n=i=>{this.showPreview(t,i.currentTarget)},o=vt(t)?"light":Be(t)?"switch":null;return b`<button
      class="fp3d-btn ${o?"fp3d-lib-electric":""}"
      title=${o?this.t(o==="light"?"lib_badge_light":"lib_badge_electric"):e}
      @click=${()=>this.addFurniture(t)}
      @mouseenter=${n}
      @focus=${n}
      @mouseleave=${()=>this._preview=null}
      @blur=${()=>this._preview=null}
    >
      ${e}
      ${o?b`<svg class="fp3d-lib-badge" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Qe(o)} />
          </svg>`:y}
    </button>`}async showPreview(t,e){let n=e.getBoundingClientRect(),o={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...o};try{let i=await _i(),[s,r,l]=Ht(t),c=i.furniturePreview({type:t,w:s,d:r,h:l,variant:null,lamp:Eo[t]??null},180,this.packs??[]);this._preview?.type===t&&(this._preview={type:t,url:c,...o})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?b`<div class="fp3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?b`<img src=${t.url} alt="" />`:b`<span class="fp3d-preview-wait"></span>`}
      <b>${fe(this.hass,t.type)}</b>
    </div>`:y}renderDeviceForm(t){let e=this.isAdmin,n=K(t.entity_id),o=n==="light",i=t.mount??"ceiling",s=n?In(n,this.floor?.height??2.5,o?i:null):1;return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Qe(n):""} />
        </svg>
        ${Z(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${o?b`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(r=>b`<option value=${r} ?selected=${r===i}>${this.t(`lamp_${r}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(t.glow_scale,r=>this.updateDevice({glow_scale:r}))}`:n==="camera"?b`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!e} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
                  <option value="wall" ?selected=${(t.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${t.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:y}
        ${this.len(this.t("x"),t.x,r=>this.updateDevice({x:r}))} ${this.len(this.t("z"),t.z,r=>this.updateDevice({z:r}))}
        ${this.len(this.t("marker_height"),t.y??s,r=>this.updateDevice({y:Math.max(0,r)}),.05,0)}
        ${this.num(this.t("rotation"),t.rotation??0,r=>this.updateDevice({rotation:(r%360+360)%360}),1)}
        ${n==="camera"?b`${this.num(this.t("camera_fov"),t.fov??(t.mount==="ceiling"?360:90),r=>this.updateDevice({fov:Math.min(360,Math.max(10,r))}),5,10)}
            ${this.len(this.t("camera_reach"),t.reach??(t.mount==="ceiling"?3:4.5),r=>this.updateDevice({reach:Math.min(50,Math.max(.5,r))}),.5,.5)}
            ${this.num(this.t("camera_tilt"),t.tilt??(t.mount==="ceiling"?65:20),r=>this.updateDevice({tilt:Math.min(90,Math.max(0,r))}),5,0)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${t.cone!==!1} ?disabled=${!e} @change=${r=>this.updateDevice({cone:r.target.checked?null:!1})} />
              ${this.t("camera_cone")}</label
            >
            <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_pins_hint")}
              ><input type="checkbox" .checked=${t.detect_pins!==!1} ?disabled=${!e} @change=${r=>this.updateDevice({detect_pins:r.target.checked?null:!1})} />
              ${this.t("camera_detect_pins")}</label
            >
            <p class="fp3d-sub fp3d-wide">${this.t("camera_aim_hint")}</p>
            ${this.renderCameraDetections(t.entity_id)}`:y}
        ${n&&Ns.has(n)?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${r=>this.updateDevice({confirm:r.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:y}
        ${rt("energy_pro")&&ha(this.hass,t.entity_id)?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!e} @change=${r=>this.updateDevice({holo:r.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:y}
        ${this.markerSelect(t.marker??null,r=>this.updateDevice({marker:r}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${t.name??""} ?disabled=${!e} maxlength="60" placeholder=${Z(this.hass,t.entity_id)} @change=${r=>this.updateDevice({name:r.target.value.trim()||null})}
        /></label>
        ${t.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${r=>this.updateDevice({show_name:r.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        ${this.iconInput(t.icon,r=>this.updateDevice({icon:r}))}
      </div>
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?b`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:y}
            ${this.renderAsFurniture(t)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:y}
    </section>`}renderDeviceList(t){let e=this.isAdmin,n=this.hass,o=t.area_id?n?.areas?.[t.area_id]?.name:void 0,i=n?se(n,t.area_id).filter(x=>Ue(K(x))):[],s=new Set([...this.floor?.placements.filter(x=>C([x.x,x.z],t.points)).map(x=>x.entity_id)??[],...this.floor?.furniture.filter(x=>vt(x.type)&&x.entity&&C([x.x,x.z],t.points)).map(x=>x.entity)??[]]),r=n?Vo(n,i):[],l=r.map(x=>x.primary).filter(x=>!s.has(x)),c=this._deviceQuery.trim().toLowerCase(),d=x=>!c||Z(n,x,o).toLowerCase().includes(c)||x.includes(c),p=this.floor?.placements.filter(x=>K(x.entity_id)==="light"&&(x.mount??"ceiling")==="ceiling"&&C([x.x,x.z],t.points)).length,h=new Set(t.panel??[]),u=new Set(t.hidden??[]),f=new Set(t.no_state??[]),m=new Map;for(let x of this._doc.floors)for(let A of[...x.placements.map(P=>[P.entity_id,P.x,P.z]),...x.furniture.filter(P=>vt(P.type)&&P.entity).map(P=>[P.entity,P.x,P.z])]){let P=x.rooms.find(w=>C([A[1],A[2]],w.points));P&&P.id!==t.id&&m.set(A[0],P.name)}let g=(x,A=!1,P=o)=>{let w=s.has(x),z=w?void 0:m.get(x);return b`<div class="fp3d-row fp3d-dev-row ${A?"fp3d-dev-extra":""} ${u.has(x)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${w?"":"fp3d-muted"}" ?disabled=${!w} @click=${()=>this.selectItem("device",x)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Qe(K(x))} />
          </svg>
          <span>${Z(n,x,P)}${z?b`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:z})}</small>`:y}</span>
        </button>
        ${e&&!A?b`<button
              class="fp3d-pin ${u.has(x)?"fp3d-pin-on":""}"
              aria-pressed=${u.has(x)}
              title=${this.t(u.has(x)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:u.has(x)?[...u].filter(S=>S!==x):[...u,x]})}
            >
              ${u.has(x)?"\u{1F648}":"\u{1F441}"}
            </button>`:y}
        ${e&&!A&&!u.has(x)?b`<button
              class="fp3d-pin ${f.has(x)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(x)}
              title=${this.t(f.has(x)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:f.has(x)?[...f].filter(S=>S!==x):[...f,x]})}
            >
              ${f.has(x)?"\u2205":"Aa"}
            </button>`:y}
        ${e&&!w?b`<button
              class="fp3d-pin ${h.has(x)?"fp3d-pin-on":""}"
              aria-pressed=${h.has(x)}
              title=${this.t(h.has(x)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:h.has(x)?[...h].filter(S=>S!==x):[...h,x]})}
            >
              ${h.has(x)?"\u2605":"\u2606"}
            </button>`:y}
        ${e?w?b`<button class="fp3d-link" @click=${()=>this.removeDevice(x)}>${this.t("devices_remove")}</button>`:b`<button class="fp3d-link" @click=${()=>this.placeDevices([x])}>${this.t("devices_place")}</button>`:y}
      </div>`},_=e?this._devSource:"area",v=x=>{this._devSource=x,this._deviceQuery=""},$=b`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${x=>this._deviceQuery=x.target.value}
    />`,k=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return b`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?b`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${_==="area"} @click=${()=>v("area")}>${this.t("devices_src_area")}${i.length?` (${r.length})`:""}</button>
            <button aria-pressed=${_==="other"} @click=${()=>v("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${_==="none"} @click=${()=>v("none")}>${this.t("devices_src_none")}</button>
          </div>`:y}
      ${_!=="area"?b`${$}${this.renderDeviceExtras(t,g,_)}`:t.area_id?i.length?b`${e&&(p??0)>=2?b`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:y}
              ${i.length>8?$:y}
              <div class="fp3d-room-list">
                ${r.map(x=>{let A=x.others.filter(d),P=this._expanded.has(x.primary)||!!c&&A.length>0;return!d(x.primary)&&!A.length?y:b`${g(x.primary)}
                  ${x.others.length?b`<button
                        class="fp3d-more"
                        @click=${()=>{let w=new Set(this._expanded);w.has(x.primary)?w.delete(x.primary):w.add(x.primary),this._expanded=w}}
                      >
                        ${P?this.t("devices_less"):this.t("devices_more",{n:x.others.length})}
                      </button>`:y}
                  ${P?(c?A:x.others).map(w=>g(w,!0)):y}`})}
              </div>
              ${e&&l.length>1?b`<button class="fp3d-link fp3d-place-all" @click=${k}>${this.t("devices_place_all_n",{n:l.length})}</button>`:y}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(t,e,n){let o=this.hass;if(!o)return y;let i=50,s=this._deviceQuery.trim().toLowerCase(),r=(d,p)=>!s||`${Z(o,d,p)} ${d} ${p??""}`.toLowerCase().includes(s),l=d=>d>0?b`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:y;if(n==="other"){let d=0,p=0,h=qs(o,t.area_id).map(u=>{let f=u.ids.filter(g=>r(g,u.name)),m=f.slice(0,Math.max(0,i-d));return d+=m.length,p+=f.length-m.length,m.length?b`<div class="fp3d-dev-area">${u.name}</div>${m.map(g=>e(g,!1,u.name))}`:y});return d?b`<div class="fp3d-room-list">${h}</div>${l(p)}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=Us(o).filter(d=>r(d));return c.length?b`<div class="fp3d-room-list">${c.slice(0,i).map(d=>e(d))}</div>${l(c.length-Math.min(c.length,i))}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(t){let e=this.hass;if(!e)return y;let n=(s,r)=>{let l={...t.climate??{},[s]:r},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},o=!!t.climate&&Object.values(t.climate).some(s=>s!=null),i=(s,r)=>{let l=Io[s],c=Ks(e,this.floor??null,{...t,climate:null},s),d=Ro[s],p=this.entityOptions(h=>ct(h)&&e.states[h]?.attributes.device_class===l||!!d&&h.startsWith("climate.")&&typeof e.states[h]?.attributes[d]=="number").map(h=>({...h,rank:(re(e,h.id)===t.area_id?0:1)+(Fo(e,h.id)?0:2)})).sort((h,u)=>h.rank-u.rank).map(({id:h,label:u})=>({id:h,label:u}));return this.entitySelect(r,t.climate?.[s]??null,c[0]??null,p,h=>n(s,h))};return b`<details class="fp3d-points" ?open=${o}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${i("temperature",this.t("climate_temperature"))} ${i("humidity",this.t("climate_humidity"))} ${i("co2",this.t("climate_co2"))}
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
                  ${this._bgLevel?b`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:y}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?b`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:b`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${Xe(this.t("bg_ruler_length"),this.unit)}
                            <input type=${this.unit==="imperial"?"text":"number"} min="0.01" step="0.01" .value=${this._bgRulerLen?this.lenValue(this._bgRulerLen):""} @input=${n=>this._bgRulerLen=this.readLen(n.target.value)??0} @keydown=${n=>n.key==="Enter"&&this.applyBgRuler(this._bgRulerLen)}
                          /></label>
                          <button class="fp3d-btn fp3d-primary" ?disabled=${!(this._bgRulerLen>0)} @click=${()=>this.applyBgRuler(this._bgRulerLen)}>${this.t("bg_ruler_apply")}</button>`:y}`:y}
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
              <button class="fp3d-btn fp3d-danger fp3d-wide" @click=${()=>this.updateFloor({background:null})}>${this.t("background_remove")}</button>`:y}
      </div>
    </details>`}async loadHistory(){if(this.hass)try{this._history=await Ki(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await Xi(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await ss(this.hass),e={};for(let o of js(t.building))try{e[o]=await po(this.hass,o)}catch{}let n=new Date().toISOString().slice(0,10);Ao(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...t,exported_at:new Date().toISOString(),images:e}))}catch(t){alert(this.t("backup_import_error",{error:String(t?.message??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let o;try{o=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if(o?.format!=="neonplan3d-backup"||!o.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let i=await rs(this.hass,o.building,o.packs??[]),s=0;for(let[l,c]of Object.entries(o.images??{}))try{await yn(this.hass,l,c),s++}catch{}this.setDoc(Pn(i.building)),this._floorId=i.building.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let r=i.skipped.length?` ${this.t("backup_full_skipped",{packs:i.skipped.map(l=>l.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:i.packs,pictures:s})+r}catch(i){let{code:s,message:r}=i??{};alert(this.t("backup_import_error",{error:r??s??String(i)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);Ao(`neonplan3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(Vs(this._doc,t),null,2))}async importPlan(t){let e=t.target,n=e.files?.[0];if(e.value="",!n||!this.hass)return;let o;try{o=Ts(await n.text())}catch(i){let s=i.message;alert(s==="not_json"?this.t("import_error_not_json"):s==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:s}));return}confirm(this.t("backup_import_confirm"))&&(await Gi(this.hass).catch(()=>{}),this.setDoc(o),this._floorId=o.floors[0]?.id??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){return new Date(t.saved_at*1e3).toLocaleString(this.hass?.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return b`<details
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
    </details>`}renderSettings(){let t=this._doc.settings,e=n=>{let o=structuredClone(this._doc);Object.assign(o.settings,n),this.setDoc(o)};return b`<details class="fp3d-section">
      <summary>${this.t("settings")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),t.wall_exterior,n=>e({wall_exterior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("wall_interior"),t.wall_interior,n=>e({wall_interior:Math.min(1,Math.max(.02,n))}),.01,.02)}
        ${this.len(this.t("grid"),t.grid,n=>e({grid:Math.min(1,Math.max(.01,n))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${n=>{let o=n.target.value;e({units:o==="metric"||o==="imperial"?o:null})}}>
            <option value="auto" ?selected=${!t.units}>${this.t("units_auto",{unit:this.t(Wo(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
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
            ${["none","flat","gable","custom"].map(n=>b`<option value=${n} ?selected=${n===t.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${t.roof.type==="gable"?b`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>e({roof:{...t.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${t.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${t.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:y}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):y}
        ${t.roof.type!=="none"?this.len(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):y}
        ${this.hass?this.entitySelect(this.t("weather_entity"),t.weather_entity??null,Er(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>e({weather_entity:n})):y}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${ys.map(n=>{let o=t.weather_effects??go;return b`<label class="fp3d-check"
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
        ${this.hass?b`${this.entitySelect(this.t("rain_entity"),t.rain_entity??null,void 0,this.entityOptions(n=>Ar(this.hass,n)),n=>e({rain_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("rain_entity_hint")}</p>`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${t.alert_names!==!1} @change=${n=>e({alert_names:n.target.checked})} />
          ${this.t("alert_names")}</label
        >
        ${this.hass?b`${this.entitySelect(this.t("outage_entity"),t.outage_entity??null,void 0,this.entityOptions(n=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(n)),n=>e({outage_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${t.sun_patches!==!1} @change=${n=>e({sun_patches:n.target.checked})} />
          ${this.t("sun_patches")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("north_hint")} ${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[Fe,Jn,St`
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",xi);function mc(a,t,e){let n=e[0]-t[0],o=e[1]-t[1],i=n*n+o*o||1,s=Math.min(1,Math.max(0,((a[0]-t[0])*n+(a[1]-t[1])*o)/i));return Math.hypot(a[0]-t[0]-n*s,a[1]-t[1]-o*s)}function Qn(a){return a.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Aa={language:"en"};function ct(a){return/^(sensor|input_number|number)\./.test(a)}function $i(a){return/^(binary_sensor|input_boolean)\./.test(a)}export{xi as Fp3dEditor};
