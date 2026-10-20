var Kn=globalThis,Un=Kn.ShadowRoot&&(Kn.ShadyCSS===void 0||Kn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ui=Symbol(),Ms=new WeakMap,wn=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==Ui)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(Un&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Ms.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ms.set(e,t))}return t}toString(){return this.cssText}},Ss=a=>new wn(typeof a=="string"?a:a+"",void 0,Ui),ie=(a,...t)=>{let e=a.length===1?a[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+a[o+1],a[0]);return new wn(e,a,Ui)},Ps=(a,t)=>{if(Un)a.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=Kn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,a.appendChild(n)}},Gi=Un?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Ss(e)})(a):a;var{is:yd,defineProperty:$d,getOwnPropertyDescriptor:wd,getOwnPropertyNames:xd,getOwnPropertySymbols:kd,getPrototypeOf:Md}=Object,Gn=globalThis,Es=Gn.trustedTypes,Sd=Es?Es.emptyScript:"",Yi=Gn.reactiveElementPolyfillSupport,xn=(a,t)=>a,Ji={toAttribute(a,t){switch(t){case Boolean:a=a?Sd:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},Is=(a,t)=>!yd(a,t),As={attribute:!0,type:String,converter:Ji,reflect:!1,useDefault:!1,hasChanged:Is};Symbol.metadata??=Symbol("metadata"),Gn.litPropertyMetadata??=new WeakMap;var ce=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=As){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&$d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:o}=wd(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let r=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??As}static _$Ei(){if(this.hasOwnProperty(xn("elementProperties")))return;let t=Md(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(xn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xn("properties"))){let e=this.properties,n=[...xd(e),...kd(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(Gi(i))}else t!==void 0&&e.push(Gi(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ps(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var o;let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:Ji).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){var o,s;let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=n.getPropertyOptions(i),l=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)==null?void 0:o.fromAttribute)!==void 0?r.converter:Ji;this._$Em=i;let c=l.fromAttribute(e,r.type);this[i]=c??((s=this._$Ej)==null?void 0:s.get(i))??c,this._$Em=null}}requestUpdate(t,e,n,i=!1,o){var s;if(t!==void 0){let r=this.constructor;if(i===!1&&(o=this[t]),n??=r.getPropertyOptions(t),!((n.hasChanged??Is)(o,e)||n.useDefault&&n.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(r._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,s]of i){let{wrapped:r}=s,l=this[o];r!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ce.elementStyles=[],ce.shadowRootOptions={mode:"open"},ce[xn("elementProperties")]=new Map,ce[xn("finalized")]=new Map,Yi==null||Yi({ReactiveElement:ce}),(Gn.reactiveElementVersions??=[]).push("2.1.2");var Xi=globalThis,zs=a=>a,Yn=Xi.trustedTypes,Fs=Yn?Yn.createPolicy("lit-html",{createHTML:a=>a}):void 0,to="$lit$",ue=`lit$${Math.random().toFixed(9).slice(2)}$`,eo="?"+ue,Pd=`<${eo}>`,je=document,Mn=()=>je.createComment(""),Sn=a=>a===null||typeof a!="object"&&typeof a!="function",no=Array.isArray,Cs=a=>no(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",Qi=`[ 	
\f\r]`,kn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rs=/-->/g,Ts=/>/g,Te=RegExp(`>|${Qi}(?:([^\\s"'>=/]+)(${Qi}*=${Qi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Os=/'/g,js=/"/g,Hs=/^(?:script|style|textarea|title)$/i,io=a=>(t,...e)=>({_$litType$:a,strings:t,values:e}),b=io(1),C=io(2),mu=io(3),pe=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Ls=new WeakMap,Oe=je.createTreeWalker(je,129);function Ds(a,t){if(!no(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fs!==void 0?Fs.createHTML(t):t}var Vs=(a,t)=>{let e=a.length-1,n=[],i,o=t===2?"<svg>":t===3?"<math>":"",s=kn;for(let r=0;r<e;r++){let l=a[r],c,d,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===kn?d[1]==="!--"?s=Rs:d[1]!==void 0?s=Ts:d[2]!==void 0?(Hs.test(d[2])&&(i=RegExp("</"+d[2],"g")),s=Te):d[3]!==void 0&&(s=Te):s===Te?d[0]===">"?(s=i??kn,u=-1):d[1]===void 0?u=-2:(u=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?Te:d[3]==='"'?js:Os):s===js||s===Os?s=Te:s===Rs||s===Ts?s=kn:(s=Te,i=void 0);let h=s===Te&&a[r+1].startsWith("/>")?" ":"";o+=s===kn?l+Pd:u>=0?(n.push(c),l.slice(0,u)+to+l.slice(u)+ue+h):l+ue+(u===-2?r:h)}return[Ds(a,o+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Pn=class a{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,s=0,r=t.length-1,l=this.parts,[c,d]=Vs(t,e);if(this.el=a.createElement(c,n),Oe.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Oe.nextNode())!==null&&l.length<r;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(to)){let p=d[s++],h=i.getAttribute(u).split(ue),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:f[2],strings:h,ctor:f[1]==="."?Qn:f[1]==="?"?Zn:f[1]==="@"?Xn:Ce}),i.removeAttribute(u)}else u.startsWith(ue)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(Hs.test(i.tagName)){let u=i.textContent.split(ue),p=u.length-1;if(p>0){i.textContent=Yn?Yn.emptyScript:"";for(let h=0;h<p;h++)i.append(u[h],Mn()),Oe.nextNode(),l.push({type:2,index:++o});i.append(u[p],Mn())}}}else if(i.nodeType===8)if(i.data===eo)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(ue,u+1))!==-1;)l.push({type:7,index:o}),u+=ue.length-1}o++}}static createElement(t,e){let n=je.createElement("template");return n.innerHTML=t,n}};function Le(a,t,e=a,n){var s,r;if(t===pe)return t;let i=n!==void 0?(s=e._$Co)==null?void 0:s[n]:e._$Cl,o=Sn(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((r=i==null?void 0:i._$AO)==null||r.call(i,!1),o===void 0?i=void 0:(i=new o(a),i._$AT(a,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=Le(a,i._$AS(a,t.values),i,n)),t}var Jn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??je).importNode(e,!0);Oe.currentNode=i;let o=Oe.nextNode(),s=0,r=0,l=n[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new tn(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new ti(o,this,t)),this._$AV.push(c),l=n[++r]}s!==(l==null?void 0:l.index)&&(o=Oe.nextNode(),s++)}return Oe.currentNode=je,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},tn=class a{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Le(this,t,e),Sn(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==pe&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Cs(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&Sn(this._$AH)?this._$AA.nextSibling.data=t:this.T(je.createTextNode(t)),this._$AH=t}$(t){var o;let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Pn.createElement(Ds(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{let s=new Jn(i,this),r=s.u(this.options);s.p(e),this.T(r),this._$AH=s}}_$AC(t){let e=Ls.get(t.strings);return e===void 0&&Ls.set(t.strings,e=new Pn(t)),e}k(t){no(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let o of t)i===e.length?e.push(n=new a(this.O(Mn()),this.O(Mn()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){let i=zs(t).nextSibling;zs(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},Ce=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(t,e=this,n,i){let o=this.strings,s=!1;if(o===void 0)t=Le(this,t,e,0),s=!Sn(t)||t!==this._$AH&&t!==pe,s&&(this._$AH=t);else{let r=t,l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Le(this,r[n+l],e,l),c===pe&&(c=this._$AH[l]),s||=!Sn(c)||c!==this._$AH[l],c===y?t=y:t!==y&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Qn=class extends Ce{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},Zn=class extends Ce{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},Xn=class extends Ce{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=Le(this,t,e,0)??y)===pe)return;let n=this._$AH,i=t===y&&n!==y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},ti=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Le(this,t)}},Ws={M:to,P:ue,A:eo,C:1,L:Vs,R:Jn,D:Cs,V:Le,I:tn,H:Ce,N:Zn,U:Xn,B:Qn,F:ti},Zi=Xi.litHtmlPolyfillSupport;Zi==null||Zi(Pn,tn),(Xi.litHtmlVersions??=[]).push("3.3.3");var Ns=(a,t,e)=>{let n=(e==null?void 0:e.renderBefore)??t,i=n._$litPart$;if(i===void 0){let o=(e==null?void 0:e.renderBefore)??null;n._$litPart$=i=new tn(t.insertBefore(Mn(),o),o,void 0,e??{})}return i._$AI(a),i};var En=globalThis,qt=class extends ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ns(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return pe}},Bs;qt._$litElement$=!0,qt.finalized=!0,(Bs=En.litElementHydrateSupport)==null||Bs.call(En,{LitElement:qt});var oo=En.litElementPolyfillSupport;oo==null||oo({LitElement:qt});(En.litElementVersions??=[]).push("4.2.2");var ei={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},An=a=>(...t)=>({_$litDirective$:a,values:t}),en=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var In=class extends en{constructor(t){if(super(t),this.it=y,t.type!==ei.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===pe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};In.directiveName="unsafeHTML",In.resultType=1;var qs=An(In);var{I:Ou}=Ws;var Ks=a=>a.strings===void 0;var zn=(a,t)=>{var n;let e=a._$AN;if(e===void 0)return!1;for(let i of e)(n=i._$AO)==null||n.call(i,t,!1),zn(i,t);return!0},ni=a=>{let t,e;do{if((t=a._$AM)===void 0)break;e=t._$AN,e.delete(a),a=t}while((e==null?void 0:e.size)===0)},Us=a=>{for(let t;t=a._$AM;a=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(a))break;e.add(a),Id(t)}};function Ed(a){this._$AN!==void 0?(ni(this),this._$AM=a,Us(this)):this._$AM=a}function Ad(a,t=!1,e=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=e;o<n.length;o++)zn(n[o],!1),ni(n[o]);else n!=null&&(zn(n,!1),ni(n));else zn(this,a)}var Id=a=>{a.type==ei.CHILD&&(a._$AP??=Ad,a._$AQ??=Ed)},ii=class extends en{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),Us(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),e&&(zn(this,t),ni(this))}setValue(t){if(Ks(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var so=new WeakMap,Gs=An(class extends ii{render(a){return y}update(a,[t]){var n;let e=t!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=(n=a.options)==null?void 0:n.host,this.rt(this.ct=a.element)),y}rt(a){if(this.G!==void 0)if(this.isConnected||(a=void 0),typeof this.G=="function"){let t=this.ht??globalThis,e=so.get(t);e===void 0&&(e=new WeakMap,so.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,a),a!==void 0&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){var a,t;return typeof this.G=="function"?(a=so.get(this.ht??globalThis))==null?void 0:a.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});async function ro(a,t){return(await a.callWS({type:"neonplan3d/image/get",image_id:t})).data}async function oi(a,t,e){await a.callWS({type:"neonplan3d/image/set",image_id:t,data:e})}async function Ys(a){return(await a.callWS({type:"neonplan3d/history/list"})).snapshots}async function Js(a){await a.callWS({type:"neonplan3d/history/snapshot"})}async function Qs(a,t){return(await a.callWS({type:"neonplan3d/history/restore",snapshot_id:t})).revision}async function Zs(a,t){return a.callWS({type:"neonplan3d/packs/import",pack:t})}async function Xs(a,t){await a.callWS({type:"neonplan3d/packs/remove",pack_id:t})}function tr(a){return a.callWS({type:"neonplan3d/backup/export"})}function er(a,t,e){return a.callWS({type:"neonplan3d/backup/import",building:t,packs:e})}async function nr(a){return a.callWS({type:"neonplan3d/voice/settings"})}async function ir(a,t){return a.callWS({type:"neonplan3d/voice/settings/set",sentences:t})}var or=[.16,.16,.035],sr=[.16,.035,.16],rr=2.1;function ar(a){return a.variant==="wall"}function zd(a){let t=new Map;for(let n of Object.values(a.entities??{}))n.device_id&&t.set(n.device_id,[...t.get(n.device_id)??[],n.entity_id]);let e=new Set;for(let[n,i]of t){let o=s=>{var r;return`${s} ${((r=a.states[s])==null?void 0:r.attributes.friendly_name)??""}`.toLowerCase()};i.some(s=>s.startsWith("sensor.")&&ao(a.states[s]))&&i.some(s=>s.startsWith("sensor.")&&/clients|clientes/.test(o(s)))&&e.add(n)}return e}function Fd(a,t){var n,i;let e=t&&t!=="none"?(i=(n=a.entities)==null?void 0:n[t])==null?void 0:i.device_id:null;return e&&a.entities?Object.values(a.entities).filter(o=>o.device_id===e).map(o=>o.entity_id):[]}function ao(a){let t=a==null?void 0:a.attributes.options;return Array.isArray(t)&&t.includes("connected")&&t.includes("disconnected")}function lr(a,t){let e=Fd(a,t.entity),n=o=>{var s,r,l;return`${o} ${((s=a.states[o])==null?void 0:s.attributes.friendly_name)??""} ${((l=(r=a.entities)==null?void 0:r[o])==null?void 0:l.translation_key)??""}`.toLowerCase()},i=o=>e.find(s=>s.startsWith("sensor.")&&o.test(n(s)))??null;return{state:e.find(o=>o.startsWith("sensor.")&&ao(a.states[o]))??null,clients:i(/clients|clientes/),led:e.find(o=>o.startsWith("light."))??null,cpu:i(/cpu/),memory:i(/memor/),restart:e.find(o=>{var s;return o.startsWith("button.")&&(((s=a.states[o])==null?void 0:s.attributes.device_class)==="restart"||/restart|reinici/.test(n(o)))})??null}}function dr(a){let t=[];for(let e of zd(a)){let n=Object.values(a.entities??{}).filter(o=>o.device_id===e).map(o=>o.entity_id),i=n.find(o=>o.startsWith("device_tracker.")&&!o.startsWith("device_tracker.unifi_default_"))??n.find(o=>o.startsWith("sensor.")&&ao(a.states[o]));i&&t.push({id:i,label:Rd(a,i)})}return t.sort((e,n)=>e.label.localeCompare(n.label))}function Rd(a,t){var i,o,s,r;let e=(o=(i=a.entities)==null?void 0:i[t])==null?void 0:o.device_id,n=e?(s=a.devices)==null?void 0:s[e]:void 0;return(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||((r=a.states[t])==null?void 0:r.attributes.friendly_name)||t}var Td=[],lo=new Map,Od=0;function cr(a){Td=a,lo=new Map(a.flatMap(t=>t.items.map(e=>[He(t.id,e.id),e]))),Od++}function He(a,t){return`pack:${a}:${t}`}function De(a){return a.startsWith("pack:")}function Ve(a){return De(a)?a.endsWith(":curtain_motor")?"curtain":a.endsWith(":screen_roll")?"screen":null:null}function he(a){return a==="robot_vacuum"||De(a)&&a.endsWith(":robot_vacuum")}var jd={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function ur(a){var t;return(t=$t(a))==null?void 0:t.parts.find(e=>e.screen)}function pr(a){let t=$t(a);if(!t)return!1;let[e,n,i]=t.size;return t.parts.some(o=>{if(!o.screen)return!1;let[s,r]=[o.w*e,o.d*n,o.h*i].sort((l,c)=>c-l);return s>=.06&&r>=.06})}function $t(a){if(!De(a))return;let t=lo.get(a);if(t)return t;let[,e,...n]=a.split(":"),i=jd[e];return i?lo.get(`pack:${i}:${n.join(":")}`):void 0}function Dt(a){var t;return se[a]??((t=$t(a))==null?void 0:t.size)??[.6,.6,.8]}function nn(a){var t,e;return br.has(a)||!!((t=$t(a))!=null&&t.electric)||!!((e=$t(a))!=null&&e.light)}function oe(a){return a.name.es??a.name.en??Object.values(a.name)[0]??a.id}var Ld={architecture:"Arquitectura y acabados",bath:"Ba\xF1o",bedroom:"Dormitorio",cinema:"Cine en casa y Hi-Fi",exclusive:"Exclusivo: frigor\xEDfico inteligente",fitness:"Fitness",garage:"Garaje y taller",garden:"Jard\xEDn y terraza",kids:"Cuarto infantil",kitchen:"Cocina",living:"Sal\xF3n",office:"Oficina y gaming",pets:"Mascotas",smarthome:"Smart home y tecnolog\xEDa",stairs:"Escaleras y barandillas",utility:"Lavadero e instalaciones",vehicles:"Veh\xEDculos",starter:"Pack de inicio",pro_auto:"Pro: Auto Pro",pro_timetravel:"Pro: Viaje en el tiempo",pro_pool:"Pro: Piscina Pro",pro_camera:"Pro: Cabina de c\xE1mara",pro_energy:"Pro: Energ\xEDa Pro",pro_screens:"Pro: Pantallas en directo",pro_sound:"Pro: Sonido y Cine",pro_weather:"Pro: Tiempo exterior"};function fe(a){let t=a.id.replace(/^mastershort\./,""),e=t.endsWith("_sample"),n=Ld[e?t.slice(0,-7):t];return n?e?`${n} \u2013 muestra`:n:a.name}function Rt(a,t){let e=$t(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return hr;if(t.type==="access_point")return t.variant==="wall"?rr:Math.max(0,a.height-Math.max(.005,t.h));if(fr.has(t.type))return Math.max(0,a.height-mr(t.type,t.h));if(t.type==="led_strip")return Math.max(0,a.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return _r(a,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,a.height-t.h);default:return e?0:gr(t)}}var si={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},vr=Object.keys(si),yr=1;function $r(a){return a.variant&&si[a.variant]?a.variant:"80"}function wr(a,t){var r,l;let e=t.entity&&t.entity!=="none"?t.entity:null,n=e?(l=(r=a.entities)==null?void 0:r[e])==null?void 0:l.device_id:null,i=n&&a.entities?Object.values(a.entities).filter(c=>c.device_id===n).map(c=>c.entity_id):[],o=c=>{var d,u,p;return`${c} ${((d=a.states[c])==null?void 0:d.attributes.friendly_name)??""} ${((p=(u=a.entities)==null?void 0:u[c])==null?void 0:p.translation_key)??""}`.toLowerCase()},s=(c,d,u)=>i.find(p=>p.startsWith(`${c}.`)&&d.test(o(p))&&!(u&&u.test(o(p))))??null;return{heater:e,heating:s("binary_sensor",/heating|calentando|heizt/),showers:s("sensor",/shower|ducha|dusch/),remaining:s("sensor",/remaining|restante|restzeit/),power:s("switch",/power|encendid|_on\b/,/eco|legionella/),eco:s("switch",/\beco/)}}var kr=["always","no_power","never"],Mr=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],ai={field:null,size:1,right:0,up:0},Sr=["navigate","more_info","service","fire_dom_event"];var Fn={cat:["orange","tabby","black","white","grey","calico","cream"],dog:["golden","cream","brown","black","white","grey"],rabbit:["white","grey","brown","black","cream"]},Pr=["dachshund","pug","terrier","labrador","shepherd"];function co(a,t,e){return a?t?!!e.lock_plan:!!a.locked:!1}var Er=["rain","snow","fog","clouds","lightning","sky"],uo=["rain","snow","clouds","lightning","sky"],po=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],ho={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function on(a){return a==="hedge"||a==="fence"||a==="pergola"}function Ar(a){return(a.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!on(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}var Ir=["x","-x","z","-z"];function Cd(a,t,e){let n=a.slope??0;if(!n||a.type==="pool")return 0;let i=a.slope_dir??"x",o=(c,d)=>i==="x"?c:i==="-x"?-c:i==="z"?d:-d,s=1/0,r=-1/0;for(let[c,d]of a.points){let u=o(c,d);s=Math.min(s,u),r=Math.max(r,u)}if(r-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(r-s)));return n*l}function Hd(a,t,e,n){return Tr(a,t)+ho[t.type]-Dd(a,t,e,n)}var fo=-.2,ri={set:!1,level:fo};function zr(a){let t=(a==null?void 0:a.settings.terrain)??null;ri={set:(t==null?void 0:t.level)!=null,level:(t==null?void 0:t.level)??fo}}function Fr(a,t){return ri.level}function Rr(a){return a.elevation>.3?0:ri.set?ri.level-a.elevation:fo}function Tr(a,t){return Rr(a)+(t.offset??0)}function Dd(a,t,e,n){return t.type==="pool"?0:Cd(t,e,n)}function Or(a,t,e){let n=(a.outdoor??[]).filter(o=>!on(o.type)&&o.type!=="pool"&&Q([t,e],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?Hd(a,i,t,e):Rr(a)}var jr=["filter","backwash","rinse","waste","recirculate","closed"];function Lr(a,t){return Tr(a,t)+(t.above?li(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function mo(a){return a.depth&&a.depth>=.3?Math.min(5,a.depth):a.above?li(a):1.5}function go(a,t){return t.above?!1:(a.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!on(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Q(n,e.points)))}function Cr(a,t){return!t.above&&!go(a,t)?_o(a,t)-.05:Lr(a,t)-mo(t)}function _o(a,t){return Lr(a,t)-.15}function li(a){return a.height&&a.height>.3?a.height:1.2}function di(a,t,e,n,i){let o=_=>Math.round(_*1e3)/1e3,s=n-t,r=i-e,l=(t+n)/2,c=(e+i)/2;if(a==="rect")return[[t,e],[n,e],[n,i],[t,i]];let d=40;if(a==="round"){let _=Math.min(s,r)/2;return Array.from({length:d},(g,v)=>[o(l+_*Math.cos(v/d*Math.PI*2)),o(c+_*Math.sin(v/d*Math.PI*2))])}let u=s>=r,p=(u?r:s)/2,h=Math.max(0,(u?s:r)/2-p),f=[],m=d/2;for(let _=0;_<2;_++){let g=_===0?1:-1;for(let v=0;v<=m;v++){let $=-Math.PI/2+v/m*Math.PI+(_===0?0:Math.PI),k=g*h+p*Math.cos($),P=p*Math.sin($);f.push(u?[o(l+k),o(c+P)]:[o(l+P),o(c+k)])}}return f}var Vd={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},Hr=["wood","oak","tiles","carpet","stone","concrete"],Dr={type:"none",pitch:35,overhang:.4},Wd={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Dr}};function Vr(a,t,e){return{id:a,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Nd=2.75;function Wr(a,t){if(t!=null&&Number.isFinite(t))return Math.round(t*Nd*100)/100;let e=a.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function Nr(a,t,e){let n=a.rooms.flatMap(r=>r.points.map(l=>l[0])),i=a.rooms.flatMap(r=>r.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return t.map((r,l)=>{let c=o+l%3*4.5,d=s+Math.floor(l/3)*3.5;return{id:e(),name:r.name,area_id:r.area_id,points:[[c,d],[c+4,d],[c+4,d+3],[c,d+3]],floor_material:"wood"}})}function Br(a,t,e,n){let i=a.rotation*Math.PI/180,o=Math.cos(i),s=Math.sin(i),[r,l]=t,c=a.x-r*(a.w/2)*o+l*(a.d/2)*s,d=a.z-r*(a.w/2)*s-l*(a.d/2)*o,u=e[0]-c,p=e[1]-d,h=g=>Math.max(.1,Math.round(g/n)*n),f=h((u*o+p*s)*r),m=h((-u*s+p*o)*l),_=g=>Math.round(g*1e3)/1e3;return{x:_(c+r*(f/2)*o-l*(m/2)*s),z:_(d+r*(f/2)*s+l*(m/2)*o),w:_(f),d:_(m)}}var ci=["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","ac_unit","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell","awning","waste_bin","mailbox","wall_switch","wall_socket","water_heater","access_point"],ui={lights:["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer","water_heater"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","ac_unit","stairs","stairs_u","robot_vacuum"],vehicles:["parking"],outdoor:["awning"],household:["waste_bin","mailbox"],electric:["wall_switch","wall_socket","water_heater","access_point"]},St=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],qr=.3,me=["meter","inverter","home_battery","wallbox","grid_point"],Kr=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),hr=1.75;function re(a){if(["lamp_ceiling_fan","lamp_pendant","stairwell","parking"].includes(a.type)||bo.has(a.type))return!1;let t=$t(a.type);return!((t==null?void 0:t.mount)==="ceiling"&&t.light)}var fr=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function mr(a,t){return a==="lamp_spot"?Math.max(.06,t)+.008:a==="lamp_ceiling"||a==="lamp_panel"?Math.max(.02,t)+.005:.02}var bo=new Set(["stairs","stairs_u"]);function Ur(a,t,e){let n=Math.max(4,Math.round(e/.18)),i=Math.floor(n/2)+1,o=i-1,s=n-i,r=Math.min(.12,a*.06),l=(a-r)/2,c=Math.min(l,t*.45),d=(t-c)/o;return{n,k:i,steps1:o,steps2:s,gap:r,fw:l,landing:c,run:d,rise:e/n}}function Vt(a){var t;return Kr.has(a)||!!((t=$t(a))!=null&&t.light)}var Bd=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function vo(a,t,e,n=0){let i=At(a.points),o=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,r=[];for(let l=0;l<t;l++)for(let c=0;c<e;c++){let d=[Math.round((i.x0+n+o/e*(c+.5))*1e3)/1e3,Math.round((i.z0+n+s/t*(l+.5))*1e3)/1e3];Q(d,a.points)&&r.push(d)}return r}function sn(a,t,e){let n=s=>Math.round(s*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(a[0]+i*t),n(a[1]+o*t)]}var qd=1.05,Kd=.3;function gr(a){switch(a.type){case"home_battery":return a.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-a.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return a.variant==="bank"?.75:a.variant==="pole"||a.variant==="pillar"||a.variant==="parcel"?0:1;case"wall_switch":return qd;case"wall_socket":return Kd;case"water_heater":return yr;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var xr=.04,Ud=1.2;function _r(a,t,e,n=0){var o;let i=0;for(let s of a.furniture)!(Bd.has(s.type)||(o=$t(s.type))!=null&&o.surface)||!Q([t,e],Wt(s))||s.type==="worktop"&&n>0&&s.h-xr>=Ud&&n<=s.h-xr-.02||(i=Math.max(i,s.h));return i}function pi(a){let t=a.split(/[,;\n]/).map(e=>e.trim()).filter(Boolean).slice(0,12);return t.length?t:void 0}var br=new Set([...Kr,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),se={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_ceiling_fan:[1.2,1.2,.35],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.086,.05,.086],wall_socket:[.086,.05,.086],water_heater:[.506,.275,1.066],access_point:[.16,.16,.035],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var yo=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],$o=["standard","bars","glass_wall"];function hi(a,t){return a.type==="door"?a.style&&yo.includes(a.style)?a.style:t?"front":"interior":a.style&&$o.includes(a.style)?a.style:"standard"}function Gr(a,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let i=t==="sidelights",o=a-.04,s=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),r=(o-s)/(i?2:1),l=n.sidelight_width??r,c=i?n.sidelight_width2??n.sidelight_width??r:0;l=Math.max(.1,l),c=i?Math.max(.1,c):0;let d=o-.5;if(l+c>d){let p=Math.max(0,d)/(l+c);l*=p,c*=p}return i?{panels:[[.02,.02+l],[a-.02-c,a-.02]],x0:.02+l,x1:a-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:a-.02}:{panels:[[a-.02-l,a-.02]],x0:.02,x1:a-.02-l}}function wo(a){return a==="front"||a==="front_glass"||a==="sidelight"||a==="sidelights"}var fi={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function mi(a){if(a.type==="garage")return"garage";if(a.type==="window"&&a.style==="glass_wall")return"glass_wall";let t=a.leaves===2;return a.type==="door"?!t&&a.style&&wo(a.style)?"front":t?"door_double":"door":a.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function gi(a){var t;a.energy={...Vd,...a.energy??{}},a.presence=a.presence??[],a.settings={...Wd,...a.settings,roof:{...Dr,...((t=a.settings)==null?void 0:t.roof)??{}}};for(let e of a.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(i=>({...i,panel:i.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(i=>({...i,mount:i.mount??null,rotation:i.rotation??0})),e.furniture=e.furniture.map(i=>({...i,entity:i.entity??null,power:i.power??null}));let n=e.placements.filter(i=>i.entity_id.startsWith("light.")&&!i.pin);if(n.length){let i={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let s=i[o.mount??"ceiling"],[r,l,c]=se[s];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:o.x,z:o.z,rotation:0,w:r,d:l,h:c,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light.")||o.pin)}e.openings=e.openings.map(i=>({...i,hinge:i.hinge??"left",leaves:i.leaves??1,swing:i.swing??"in",style:i.style??null,cover:i.cover??null,contact:i.contact??null,contact2:i.contact2??null,tilt:i.tilt??null}))}return a}function J(a){return`${a}_${Math.random().toString(36).slice(2,10)}`}function Pt(a){let t=0;for(let e=0;e<a.length;e++){let[n,i]=a[e],[o,s]=a[(e+1)%a.length];t+=n*s-o*i}return t/2}function Ft(a){return Math.abs(Pt(a))}function Qt(a){let t=Pt(a);if(Math.abs(t)<1e-9){let i=a.length||1;return[a.reduce((o,s)=>o+s[0],0)/i,a.reduce((o,s)=>o+s[1],0)/i]}let e=0,n=0;for(let i=0;i<a.length;i++){let[o,s]=a[i],[r,l]=a[(i+1)%a.length],c=o*l-r*s;e+=(o+r)*c,n+=(s+l)*c}return[e/(6*t),n/(6*t)]}function _i(a){if(a.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=a[t],[i,o]=a[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function At(a){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[o,s]of a)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),i=Math.max(i,s);return{x0:t,z0:e,x1:n,z1:i}}function Wt(a){let t=a.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=a.w/2,o=a.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,r])=>[a.x+s*e-r*n,a.z+s*n+r*e])}function Q(a,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[o,s]=t[n],[r,l]=t[i];s>a[1]!=l>a[1]&&a[0]<(r-o)*(a[1]-s)/(l-s)+o&&(e=!e)}return e}var bi={lamp_ceiling:"ceiling",lamp_ceiling_fan:"ceiling_fan",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var Yr="neonplan3d";function Gd(a){let t=structuredClone(a);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function Jr(a,t){return{format:Yr,version:1,exported_at:new Date().toISOString(),building:t?Gd(a):structuredClone(a)}}function Qr(a){let t;try{t=JSON.parse(a)}catch{throw new Error("not_json")}let e=t,n=(e==null?void 0:e.format)===Yr?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return gi(n)}function Zr(a){var e;let t=new Set;for(let n of a.floors){(e=n.background)!=null&&e.image_id&&t.add(n.background.image_id);for(let i of n.furniture)for(let o of i.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&t.add(o.image)}return[...t]}function xo(a,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=a,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var ta=/^(light|switch|input_boolean|fan|cover)\./;function ko(a){let t=(a.switch_keys??[]).slice(0,4).map(e=>e&&e!=="none"?e:null);return t.length?t:[null]}var ea=/^(switch|input_boolean|light)\./,Xr=a=>a&&a!=="none"?a:null;function Mo(a){let t=(a.socket_outlets??[]).slice(0,4).map(e=>({entity:Xr(e==null?void 0:e.entity),power:Xr(e==null?void 0:e.power)}));return t.length?t:[{entity:null,power:null}]}function So(a){return Math.round((.086+.071*(Math.max(1,Math.min(4,a))-1))*1e3)/1e3}function na(a){return a.switch_ring&&a.switch_ring!=="none"?a.switch_ring:null}var Yd={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Jd=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),Qd=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),Zd=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),vi=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],la=new Set(["light","switch","fan"]);function da(a){return a.slice(0,a.indexOf("."))}function at(a){return Yd[da(a)]??null}function rn(a){return a!==null&&a!=="scene"&&a!=="script"}function Ne(a,t){var n,i,o;let e=(n=a.entities)==null?void 0:n[t];return e?e.area_id?e.area_id:e.device_id&&((o=(i=a.devices)==null?void 0:i[e.device_id])==null?void 0:o.area_id)||null:null}function ia(a,t){var s;let e=at(t);if(!e)return!1;let n=(s=a.entities)==null?void 0:s[t];if(n!=null&&n.hidden||n!=null&&n.entity_category)return!1;let i=a.states[t];if(!i)return!1;let o=i.attributes.device_class;return e==="sensor"?o?Jd.has(o):Qd.has(String(i.attributes.unit_of_measurement??"")):e==="binary"?o?Zd.has(o):!!(n!=null&&n.area_id):!0}var Xd=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function oa(a,t){var i;if(at(t)!=="sensor")return!1;let e=(i=a.entities)==null?void 0:i[t];if(e!=null&&e.hidden||e!=null&&e.entity_category)return!1;let n=a.states[t];return!n||!n.attributes.unit_of_measurement||Xd.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Fo(n)}var Po=null;function We(a){var l,c;let t=Po;if(t&&t.entities===a.entities&&t.devices===a.devices&&(t.states===a.states||(t.states=a.states,Object.keys(a.states).length===t.stateCount)))return t;let e=new Map,n=new Map,i=[],o=new Map,s=new Map;for(let d of Object.keys(a.entities??{})){let u=a.entities[d],p=u.device_id;p&&u.area_id&&(s.get(p)??s.set(p,new Set).get(p)).add(u.area_id),p&&To(a,d)&&(n.get(p)??n.set(p,[]).get(p)).push(d),p&&!u.hidden&&!u.entity_category&&(o.get(p)??o.set(p,new Set).get(p)).add(da(d));let h=ia(a,d),f=Ne(a,d);if(!f){(h||oa(a,d))&&rn(at(d))&&i.push(d);continue}h&&(e.get(f)??e.set(f,[]).get(f)).push(d)}if(a.entities)for(let d of Object.keys(a.states))a.entities[d]||(ia(a,d)||oa(a,d))&&rn(at(d))&&i.push(d);i.sort((d,u)=>vi.indexOf(at(d))-vi.indexOf(at(u))||_t(a,d).localeCompare(_t(a,u)));for(let[d,u]of e){let p=(c=(l=a.areas)==null?void 0:l[d])==null?void 0:c.name;u.sort((h,f)=>{let m=vi.indexOf(at(h)),_=vi.indexOf(at(f));return m-_||_t(a,h,p).localeCompare(_t(a,f,p))})}let r=new Set([...s].filter(([,d])=>d.size>1).map(([d])=>d));return Po={entities:a.entities,devices:a.devices,states:a.states,stateCount:Object.keys(a.states).length,areas:e,power:n,unassigned:i,domains:o,hubs:r},Po}function $e(a,t){return!t||!a.entities?[]:We(a).areas.get(t)??[]}function ca(a,t){return a.entities?[...We(a).areas].filter(([e])=>e!==t).map(([e,n])=>{var i,o;return{areaId:e,name:((o=(i=a.areas)==null?void 0:i[e])==null?void 0:o.name)??e,ids:n.filter(s=>rn(at(s)))}}).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function ua(a){return a.entities?We(a).unassigned:[]}var Eo={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},tc=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),ec=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Ao(a,t){var i,o,s;let e=(o=(i=a.entities)==null?void 0:i[t])==null?void 0:o.device_id,n=e&&!We(a).hubs.has(e)?We(a).domains.get(e):void 0;return n&&[...n].some(r=>tc.has(r))?!1:!ec.test(`${t} ${((s=a.states[t])==null?void 0:s.attributes.friendly_name)??""}`)}function pa(a,t,e,n){var h;let i=(h=e.climate)==null?void 0:h[n];if(i==="none")return[];if(i)return a.states[i]?[i]:[];let o=Eo[n],s=(f,m)=>Q([f,m],e.points),r=(t==null?void 0:t.placements.filter(f=>f.entity_id.startsWith("sensor.")))??[],l=r.filter(f=>s(f.x,f.z)).map(f=>f.entity_id),c=new Set(r.filter(f=>!s(f.x,f.z)).map(f=>f.entity_id)),d=[...new Set([...$e(a,e.area_id).filter(f=>!c.has(f)),...l])],u=d.filter(f=>{var m;return f.startsWith("sensor.")&&((m=a.states[f])==null?void 0:m.attributes.device_class)===o&&(e.outdoor||Ao(a,f))});if(u.length)return u;let p=Io[n];return p?d.filter(f=>{var m;return f.startsWith("climate.")&&typeof((m=a.states[f])==null?void 0:m.attributes[p])=="number"}):[]}var Io={temperature:"current_temperature",humidity:"current_humidity"};function ha(a,t){return!!a.entities&&We(a).hubs.has(t)}function zo(a,t){return a.entities?We(a).power.get(t)??[]:[]}function _t(a,t,e){var o,s;let n=a.states[t],i=(n==null?void 0:n.attributes.friendly_name)??((s=(o=a.entities)==null?void 0:o[t])==null?void 0:s.name)??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let r=i.slice(e.length+1);return r.charAt(0).toUpperCase()+r.slice(1)}return i}function Fo(a){return!a||a.state==="unavailable"||a.state==="unknown"}function fa(a){return!!a&&a.entity_id.startsWith("sensor.")&&a.attributes.device_class==="enum"}function yi(a,t,e=null){if(a==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(a==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(a){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function nc(a,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],o=t[(n+1)%t.length],s=o[0]-i[0],r=o[1]-i[1],l=s*s+r*r||1,c=Math.min(1,Math.max(0,((a[0]-i[0])*s+(a[1]-i[1])*r)/l));e=Math.min(e,Math.hypot(a[0]-i[0]-s*c,a[1]-i[1]-r*c))}return e}function ma(a,t,e=[]){if(a.points.length<3||!t.length)return[];let n=a.points,i=n.map(v=>v[0]),o=n.map(v=>v[1]),s=Math.min(...i),r=Math.min(...o),l=Math.max(...i),c=Math.max(...o),d=Math.min(l-s,c-r),u=Math.max(.1,Math.min(.25,d/8)),p=Math.min(.35,d/5),h=Qt(n),f=[];for(let v=s+u/2;v<l;v+=u)for(let $=r+u/2;$<c;$+=u){let k=[v,$];if(!Q(k,n))continue;let P=nc(k,n);P<p||f.push({p:k,wall:P})}f.length||f.push({p:h,wall:0});let m=[...e],_=[],g=Math.min(.7,d/4);for(let v of t){let $=at(v)==="light",k=f[0].p,P=-1/0;for(let{p:z,wall:R}of f){let A=m.length?Math.min(...m.map(E=>Math.hypot(z[0]-E[0],z[1]-E[1]))):3,w=Math.hypot(z[0]-h[0],z[1]-h[1]),x=Math.min(A,3)*2;w<g&&!$&&(x-=10),x-=$?w*.35:R*1.2,x>P+1e-9&&(P=x,k=z)}let M=[Math.round(k[0]*100)/100,Math.round(k[1]*100)/100];m.push(M),_.push({entity_id:v,x:M[0],z:M[1],y:null,mount:null})}return _}var ic=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),oc=new Set(["garage","gate"]),sc=new Set(["window","opening"]);function Rn(a,t,e=!1){let n=new Map;return t.length&&a.forEach((i,o)=>{let s=e&&t.length===1?t[0]:t[o];s&&n.set(i.id,s)}),n}function ga(a,t){let e=new Map,n=(o,s)=>o==="none"?null:o??s??null,i=(o,s,r)=>({cover:n(o.cover,s),contact:o.sensor==="handle"&&o.contact==null?null:n(o.contact,r),tilt:o.tilt==="none"?null:o.tilt,contact2:o.leaves===2&&o.contact2&&o.contact2!=="none"?o.contact2:null,lock:(o.type==="door"||o.type==="window"&&o.sill<=.01)&&o.lock&&o.lock!=="none"?o.lock:null,tilt2:o.leaves===2&&o.tilt2&&o.tilt2!=="none"?o.tilt2:null,position:o.position&&o.position!=="none"?o.position:null,positionInverted:!!o.position_inverted,tiltAngle:o.tilt_angle&&o.tilt_angle!=="none"?o.tilt_angle:null,tiltMax:o.tilt_max??null,tiltOffset:o.tilt_offset??null,tiltInvert:!!o.tilt_invert,shut:!!o.shut,...o.contact_invert?{contactInvert:!0}:{},...o.cover_invert?{coverInvert:!0}:{}});for(let o of t){for(let s of o.rooms){let r=o.openings.filter($=>$.room_id===s.id).sort(($,k)=>$.edge-k.edge||$.offset-k.offset);if(!r.length)continue;let l=$e(a,s.area_id),c=$=>{var k;return(k=a.states[$])==null?void 0:k.attributes.device_class},d=l.filter($=>at($)==="cover"&&ic.has(c($))),u=r.filter($=>$.type==="window"),p=r.filter($=>$.type==="door"),h=r.filter($=>$.type==="garage"),f=Rn(u,d,!0),m=Rn(u,l.filter($=>at($)==="binary"&&sc.has(c($)))),_=Rn(p,l.filter($=>at($)==="binary"&&c($)==="door")),g=Rn(h,l.filter($=>at($)==="cover"&&oc.has(c($)??""))),v=Rn(h,l.filter($=>at($)==="binary"&&c($)==="garage_door"));for(let $ of r){let k=$.type==="window"?f:$.type==="garage"?g:null,P=$.type==="window"?m:$.type==="garage"?v:_;e.set($.id,i($,k==null?void 0:k.get($.id),P.get($.id)))}}for(let s of o.openings)e.has(s.id)||e.set(s.id,i(s))}return e}var rc=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function Ro(a){if(!a||Fo(a))return null;let t=a.attributes.window_state;for(let e of[typeof t=="string"?t:null,a.state]){if(!e)continue;let n=rc.find(([i])=>i.test(e.trim()));if(n)return n[1]}return null}function $i(a,t){var s,r;let e=new Map,n=[];for(let l of t){let c=at(l)==="camera"?`camera:${l}`:((r=(s=a.entities)==null?void 0:s[l])==null?void 0:r.device_id)??`entity:${l}`,d=e.get(c);d||(e.set(c,d=[]),n.push(c)),d.push(l)}let i=n.map(l=>{let c=e.get(l),d=c.find(u=>{var p,h;return!((h=(p=a.entities)==null?void 0:p[u])!=null&&h.name)})??c[0];return{primary:d,others:c.filter(u=>u!==d)}}),o=new Map(t.map((l,c)=>[l,c]));return i.sort((l,c)=>o.get(l.primary)-o.get(c.primary))}function ac(a,t){return $i(a,t).map(e=>e.primary)}var sa={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},_a=new Set(["tv_board","tv_wall"]);function ba(a,t){let e=a.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=t.state.trim().toLowerCase();return t.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function wi(a){return _a.has(a)||!!ur(a)}function xi(a){return wi(a)||a==="desk"||a==="fridge_smart"}var ra={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function To(a,t){var e;return t.startsWith("sensor.")&&((e=a.states[t])==null?void 0:e.attributes.device_class)==="power"}function lc(a,t){var n,i;if(To(a,t))return t;let e=(i=(n=a.entities)==null?void 0:n[t])==null?void 0:i.device_id;return e?zo(a,e).find(o=>o!==t)??null:null}function an(a,t){let e=new Map;for(let n of t){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in ra,r=s?ra[o.type]:sa[o.type]??(he(o.type)?sa.robot_vacuum:void 0);if(!r&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&Q([o.x,o.z],h.points)),c=l?ac(a,$e(a,l.area_id)):[],d=h=>`${h} ${_t(a,h)}`,u=o.entity==="none"?null:o.entity??null;if(o.entity==null){let h=c.filter(f=>!i.has(f));if(s){let f=h.filter(m=>at(m)==="light");u=f.find(m=>r.test(d(m)))??f[0]??null}else if(he(o.type)){let f=(l==null?void 0:l.area_id)??null;u=Object.keys(a.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&Ne(a,m)===f)??null}else if(o.type==="radiator"||o.type==="ac_unit"){let f=h.filter(m=>at(m)==="climate");u=f.find(m=>r.test(d(m)))??f[0]??null}else if(wi(o.type)){let f=h.filter(m=>at(m)==="media");u=f.find(m=>{var _;return((_=a.states[m])==null?void 0:_.attributes.device_class)==="tv"})??f.find(m=>r==null?void 0:r.test(d(m)))??(_a.has(o.type)?f[0]??null:null)}else r&&(u=h.find(f=>["switch","media","fan"].includes(at(f)??"")&&r.test(d(f)))??null);u&&i.add(u)}let p=o.power==="none"?null:o.power??null;o.power==null&&(p=u?lc(a,u):null,!p&&r&&l&&!s&&(p=$e(a,l.area_id).find(f=>To(a,f)&&!i.has(f)&&r.test(d(f)))??null),p&&i.add(p)),(u||p)&&e.set(o.id,{entity:u,power:p})}}return e}var aa=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,dc={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function va(a,t){var u,p;let e=t.car??{},n=h=>h&&h!=="none"?h:null,i=n(e.device)??n(t.entity),o=i?(p=(u=a.entities)==null?void 0:u[i])==null?void 0:p.device_id:null,s=o&&a.entities?Object.values(a.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],r=h=>{var f,m,_;return`${h} ${((f=a.states[h])==null?void 0:f.attributes.friendly_name)??""} ${((_=(m=a.entities)==null?void 0:m[h])==null?void 0:_.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(h,f,m)=>s.find(_=>f.includes(_.split(".")[0])&&dc[h].test(r(_))&&(!m||m(_)))??null,c=h=>{var f;return String(((f=a.states[h])==null?void 0:f.attributes.unit_of_measurement)??"")},d=h=>{var f;return String(((f=a.states[h])==null?void 0:f.attributes.device_class)??"")};return{soc:n(e.soc)??s.find(h=>h.startsWith("sensor.")&&d(h)==="battery")??l("soc",["sensor"],h=>c(h)==="%"),range:n(e.range)??l("range",["sensor"],h=>/km|mi/.test(c(h)))??l("range",["sensor"]),charging:n(e.charging)??l("charging",["sensor"],h=>/^k?W$/.test(c(h)))??l("charging",["binary_sensor","switch"]),plugged:n(e.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&d(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(e.lock)??s.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(e.climate)??s.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(e.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function ya(a,t,e){var i,o;if(e==="none")return null;if(e)return e;let n=t?(o=(i=a.entities)==null?void 0:i[t])==null?void 0:o.device_id:null;if(!n||!a.entities)return null;for(let s of Object.values(a.entities))if(!(s.device_id!==n||!s.entity_id.startsWith("sensor."))&&(aa.test(s.translation_key??"")||aa.test(s.entity_id.split(".")[1])))return s.entity_id;return null}var dt=(a,t,e,n,i="")=>C`<rect class=${i} x=${Math.min(a,e)} y=${Math.min(t,n)} width=${Math.abs(e-a)} height=${Math.abs(n-t)} />`,ot=(a,t,e,n,i="")=>C`<line class=${i} x1=${a} y1=${t} x2=${e} y2=${n} />`,wt=(a,t,e,n="")=>C`<circle class=${n} cx=${a} cy=${t} r=${e} />`,Oo=(a,t,e,n,i="")=>C`<ellipse class=${i} cx=${a} cy=${t} rx=${e} ry=${n} />`;function jo(a,t,e){let n=[];for(let i=1;i<e;i++){let o=-a/2+a/e*i;n.push(ot(o,t/2,o,t/2-Math.min(.12,t*.3)))}return n}function $a(a,t,e,n){let i=Math.min(.24,t*.28),o=n?Math.min(.2,a*.12):0,s=[dt(-a/2,-t/2,a/2,-t/2+i,"fp3d-sym-fill")];n&&s.push(dt(-a/2,-t/2,-a/2+o,t/2,"fp3d-sym-fill"),dt(a/2-o,-t/2,a/2,t/2,"fp3d-sym-fill"));let r=a-2*o;for(let l=1;l<e;l++){let c=-a/2+o+r/e*l;s.push(ot(c,-t/2+i,c,t/2-.02))}return s}function wa(a,t,e){let n=-a/2,i=a/2,o=-t/2,s=t/2,r=Math.max(.3,Math.min(.95,t*.5,a*(e?.34:.45))),l=Math.min(.24,r*.28),c=Math.min(.2,r*.24),d=[dt(n,o,i,o+l,"fp3d-sym-fill"),dt(n,o+l,n+l,s,"fp3d-sym-fill"),dt(n+l,s-c,n+r,s,"fp3d-sym-fill")];e?d.push(dt(i-l,o+l,i,s,"fp3d-sym-fill"),dt(i-r,s-c,i-l,s,"fp3d-sym-fill")):d.push(dt(i-c,o+l,i,o+r,"fp3d-sym-fill"));let u=e?i-r:i-c;d.push(ot(n+r,s-c,n+r,o+r),ot(n+r,o+r,u,o+r)),e&&d.push(ot(i-r,o+r,i-r,s-c));let p=n+l,h=e?i-l:i-c,f=Math.max(1,Math.round((h-p)/.62));for(let v=1;v<f;v++)d.push(ot(p+(h-p)/f*v,o+l,p+(h-p)/f*v,o+r));let m=o+r,_=s-c,g=_-m<.2?0:Math.max(1,Math.round((_-m)/.62));for(let v=0;v<g;v++){let $=m+(_-m)/g*v;d.push(ot(n+l,$,n+r,$)),e&&d.push(ot(i-r,$,i-l,$))}return d}function xa(a,t,e){switch(a){case"sofa":return $a(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return $a(t,e,1,!0);case"sofa_l":return wa(t,e,!1);case"sofa_u":return wa(t,e,!0);case"bench":return[dt(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[dt(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),dt(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),ot(-t/2+n,-e/2+n,t/2,-e/2+n),ot(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[dt(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[wt(0,.03,Math.min(t,e)*.36),dt(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[wt(0,0,Math.min(t,e)*.42)];case"stool":return[dt(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[dt(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return a==="desk"&&n.push(ot(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,o=[dt(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),ot(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let s=0;s<n;s++)o.push(dt(-t/2+.13+i*s,-e/2+.12,-t/2+.07+i*(s+1),-e/2+.12+Math.min(.4,e*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return jo(t,e,a==="nightstand"||a==="tall_cabinet"||a==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[dt(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...jo(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[ot(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[ot(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[wt(-t*.22,-e*.2,n),wt(t*.22,-e*.2,n*.8),wt(-t*.22,e*.2,n*.8),wt(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[dt(-n/2,-e/2+.1,n/2,e/2-.08),wt(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[ot(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[wt(0,.05,Math.min(t,e)*.3),ot(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[dt(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),wt(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[ot(-t/2,-e/2,t/2,e/2),ot(t/2,-e/2,-t/2,e/2),wt(0,0,.04)];case"wc":return[dt(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),Oo(0,e*.1,t*.36,e*.3)];case"washbasin":return[Oo(0,.03,t*.34,e*.3)];case"tv_board":return[ot(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...jo(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[ot(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[wt(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),wt(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[wt(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),wt(0,0,Math.min(t,e)*1.6)];case"parking":return[dt(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),ot(-t*.15,e/2-.5,0,e/2-.22,"fp3d-sym-strong"),ot(0,e/2-.22,t*.15,e/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[dt(-t*.45,-e/2,t*.45,-e/2+e*.3,"fp3d-sym-fill"),wt(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(t/.1));for(let o=1;o<i;o++)n.push(ot(-t/2+t/i*o,-e/2,-t/2+t/i*o,e/2));return n}case"lamp_panel":return[dt(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_ceiling_fan":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[wt(0,0,n*.9,"fp3d-sym-fill"),wt(0,0,n*.3)];if(a==="lamp_ceiling"||a==="lamp_pendant"||a==="lamp_ceiling_fan")for(let o=0;o<8;o++){let s=o/8*Math.PI*2;i.push(ot(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[dt(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),Oo(0,.01,t*.4,e*.4)];case"led_strip":return[ot(-t/2,0,t/2,0,"fp3d-sym-strong")];case"plant":return[wt(0,0,Math.min(t,e)*.46),wt(0,0,Math.min(t,e)*.25)];case"rug":return[dt(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let o=1;o<n;o++)i.push(ot(-t/2,e/2-e/n*o,t/2,e/2-e/n*o));return i.push(ot(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),ot(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),ot(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:o,landing:s,run:r}=Ur(t,e,2.75),l=-e/2+s,c=-t/2+o,d=t/2-o,u=[ot(-t/2,l,c,l),ot(c,l,c,e/2),ot(d,l,d,e/2)];for(let _=1;_<n;_++)u.push(ot(-t/2,e/2-r*_,c,e/2-r*_));for(let _=1;_<=i;_++)u.push(ot(d,l+r*_,t/2,l+r*_));let p=(-t/2+c)/2,h=(d+t/2)/2,f=-e/2+s/2,m=e/2-.15;return u.push(ot(p,e/2-.1,p,f,"fp3d-sym-strong"),ot(p,f,h,f,"fp3d-sym-strong"),ot(h,f,h,m,"fp3d-sym-strong"),ot(h-.15,m-.2,h,m,"fp3d-sym-strong"),ot(h+.15,m-.2,h,m,"fp3d-sym-strong")),u}default:{let n=$t(a);return n?cc(n,t,e):y}}}function cc(a,t,e){var n;return(n=a.symbol)!=null&&n.length?a.symbol.map(i=>i.shape==="rect"?dt((i.x-i.w/2)*t,(i.z-i.d/2)*e,(i.x+i.w/2)*t,(i.z+i.d/2)*e,i.fill?"fp3d-sym-fill":""):i.shape==="circle"?wt(i.x*t,i.z*e,i.r*Math.min(t,e)):ot(i.x1*t,i.z1*e,i.x2*t,i.z2*e)):a.parts.filter(i=>i.w<.98||i.d<.98).map(i=>i.shape==="cyl"&&(i.axis??"y")==="y"?wt(i.x*t,i.z*e,Math.min(i.w*t,i.d*e)/2):dt((i.x-i.w/2)*t,(i.z-i.d/2)*e,(i.x+i.w/2)*t,(i.z+i.d/2)*e))}var Et=(a,t)=>[a[0]-t[0],a[1]-t[1]],we=(a,t)=>[a[0]+t[0],a[1]+t[1]],ge=(a,t)=>[a[0]*t,a[1]*t],On=(a,t)=>a[0]*t[0]+a[1]*t[1],ln=(a,t)=>a[0]*t[1]-a[1]*t[0],Tn=a=>Math.hypot(a[0],a[1]),ae=a=>{let t=Tn(a)||1;return[a[0]/t,a[1]/t]},ka=a=>[-a[1],a[0]],Ma=a=>[a[1],-a[0]];function Tt(a,t,e=[]){let n=t.eps??.005,i=[],o=e.filter(w=>Math.hypot(w.b[0]-w.a[0],w.b[1]-w.a[1])>.05),s=[],r=w=>{for(let x=0;x<s.length;x++)if(Math.abs(s[x][0]-w[0])<=n&&Math.abs(s[x][1]-w[1])<=n)return x;return s.push([w[0],w[1]]),s.length-1},l=[];for(let w of a){let x=w.points;if(x.length<3||Math.abs(Pt(x))<1e-6)continue;let E=Pt(x)>0,S=x.map(r);for(let T=0;T<x.length;T++){let L=S[T],j=S[(T+1)%x.length];L!==j&&l.push(E?{u:L,v:j,room:w.id,edge:T,forward:!0}:{u:j,v:L,room:w.id,edge:T,forward:!1})}}let c=o.map(w=>[r(w.a),r(w.b)]),d=new Set;for(let w of a){let x=w.points;x.length<3||(w.wall_splits??[]).forEach((E,S)=>{if(!E||S>=x.length)return;let T=x[S],L=Et(x[(S+1)%x.length],T),j=Tn(L);for(let D of E)D>n&&D<j-n&&d.add(r(we(T,ge(L,D/j))))})}let u=[];for(let w of l){let x=s[w.u],E=s[w.v],S=Et(E,x),T=Tn(S),L=ge(S,1/T),j=[];for(let W=0;W<s.length;W++){if(W===w.u||W===w.v)continue;let Z=Et(s[W],x),Y=On(Z,L);Y<=n||Y>=T-n||Math.abs(ln(L,Z))<=n&&j.push({t:Y,id:W})}j.sort((W,Z)=>W.t-Z.t);let D=[{t:0,id:w.u},...j,{t:T,id:w.v}];for(let W=0;W+1<D.length;W++){let Z=D[W],Y=D[W+1],tt=w.forward?Z.t:T-Y.t,X=w.forward?Y.t:T-Z.t;u.push({u:Z.id,v:Y.id,room:w.room,edge:w.edge,t0:tt,t1:X})}}let p=new Map;for(let w of u){let x=w.u<w.v?`${w.u}-${w.v}`:`${w.v}-${w.u}`,E=p.get(x);E||p.set(x,E=[]),E.push(w)}let h=w=>({room_id:w.room,edge:w.edge,t0:w.t0,t1:w.t1}),f=new Map;for(let w of u){let x=`${w.room}:${w.edge}`;f.set(x,[...f.get(x)??[],w.t0].sort((E,S)=>E-S))}let m=w=>{var S,T;let x=(T=(S=a.find(L=>L.id===w.room))==null?void 0:S.wall_heights)==null?void 0:T[w.edge];if(!Array.isArray(x))return x;let E=f.get(`${w.room}:${w.edge}`)??[];return x[E.indexOf(w.t0)]??null},_=w=>{let x=w.map(m).filter(S=>typeof S=="number"&&S>0);if(x.length)return Math.min(...x);let E=w.map(S=>{var T;return(T=a.find(L=>L.id===S.room))==null?void 0:T.ceiling_height});return E.every(S=>typeof S=="number"&&S>0)?Math.max(...E):void 0},g=w=>{let x=w.map(E=>{var S,T;return(T=(S=a.find(L=>L.id===E.room))==null?void 0:S.wall_thickness)==null?void 0:T[E.edge]}).filter(E=>typeof E=="number"&&E>0);return x.length?Math.max(...x):void 0},v=w=>{var x;for(let E of w){let S=a.find(D=>D.id===E.room),T=(x=S==null?void 0:S.wall_slopes)==null?void 0:x[E.edge];if(!S||!T)continue;let L=S.points[E.edge],j=S.points[(E.edge+1)%S.points.length];return{p:[L[0],L[1]],q:[j[0],j[1]],h0:Math.max(.05,T[0]),h1:Math.max(.05,T[1])}}},$=w=>w.some(x=>m(x)===0),k=w=>{let x=v(w);return x?{height:Math.max(x.h0,x.h1),slope:x}:{height:_(w)}},P=[],M=[];for(let w of p.values()){let x=w[0],E=w.find(S=>S!==x&&S.u===x.v&&S.v===x.u&&S.room!==x.room);for(let S of w)S!==x&&S!==E&&S.room!==x.room&&i.push(`overlap:${x.room}:${S.room}`);if($(E?[x,E]:[x])){E&&P.push([x.room,E.room]);continue}if(E){let S=g([x,E])??t.interior;M.push({a:x.u,b:x.v,left:S/2,right:S/2,exterior:!1,roomLeft:x.room,roomRight:E.room,sources:[h(x),h(E)],...k([x,E])})}else M.push({a:x.u,b:x.v,left:0,right:g([x])??t.exterior,exterior:!0,roomLeft:x.room,roomRight:null,sources:[h(x)],...k([x])})}let z=w=>ae(Et(s[w.b],s[w.a]));for(let w of M){if(w.exterior||w.free)continue;let x=new Set;for(let S of[w.a,w.b])for(let T of M)!T.exterior||T.free||T.a!==S&&T.b!==S||Math.abs(ln(z(w),z(T)))>1e-6||(T.roomLeft===w.roomLeft?x.add("left"):T.roomLeft===w.roomRight&&x.add("right"));if(x.size!==1)continue;let E=w.left+w.right;x.has("left")?(w.left=0,w.right=E):(w.left=E,w.right=0)}o.forEach((w,x)=>{var W;let[E,S]=c[x];if(E===S)return;let T=[(w.a[0]+w.b[0])/2,(w.a[1]+w.b[1])/2],L=((W=a.find(Z=>Z.points.length>=3&&Q(T,Z.points)))==null?void 0:W.id)??null,j=(w.thickness??t.interior)/2,D=typeof w.height=="number"&&w.height>0?w.height:void 0;M.push({free:w.id,a:E,b:S,left:j,right:j,exterior:!1,roomLeft:L,roomRight:L,sources:[],height:D})}),M=pc(M,s,d);let R=fc(M,s);return{walls:M.map((w,x)=>{let E=s[w.a],S=s[w.b],T=R.get(`${x}:a`),L=R.get(`${x}:b`),j=mc([T.right,L.left,S,L.right,T.left,E],1e-6);return{id:uc(E,S),a:[E[0],E[1]],b:[S[0],S[1]],left:w.left,right:w.right,exterior:w.exterior,roomLeft:w.roomLeft,roomRight:w.roomRight,sources:w.sources,footprint:j,...w.free?{free:w.free}:{},...w.height!==void 0?{height:w.height}:{},...w.slope?{slope:w.slope}:{}}}),warnings:[...new Set(i)],open:P}}function uc(a,t){let e=o=>Math.round(o*100),[n,i]=a[0]<t[0]||a[0]===t[0]&&a[1]<=t[1]?[a,t]:[t,a];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function Sa(a){return{...a,a:a.b,b:a.a,left:a.right,right:a.left,roomLeft:a.roomRight,roomRight:a.roomLeft}}function pc(a,t,e=new Set){let n=a.slice(),i=!0;for(;i;){i=!1;let o=new Map;n.forEach((s,r)=>{for(let l of[s.a,s.b]){let c=o.get(l);c||o.set(l,c=[]),c.push(r)}});for(let[s,r]of o){if(r.length!==2||e.has(s))continue;let l=n[r[0]],c=n[r[1]];if(l.b!==s&&(l=Sa(l)),c.a!==s&&(c=Sa(c)),l.a===c.b)continue;let d=ae(Et(t[l.b],t[l.a])),u=ae(Et(t[c.b],t[c.a]));if(Math.abs(ln(d,u))>1e-6||On(d,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let p={...l,b:c.b,sources:hc(l.sources,c.sources)},h=n.filter((f,m)=>m!==r[0]&&m!==r[1]);h.push(p),n.length=0,n.push(...h),i=!0;break}}return n}function hc(a,t){let e=a.map(n=>({...n}));for(let n of t){let i=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function fc(a,t){let e=new Map;a.forEach((i,o)=>{let s=ae(Et(t[i.b],t[i.a])),r=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:ge(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,c]of r){let d=e.get(l);d||e.set(l,d=[]),d.push(c)}});let n=new Map;for(let[i,o]of e){let s=t[i];o.sort((c,d)=>c.angle-d.angle);let r=c=>({left:we(s,ge(ka(c.d),c.left)),right:we(s,ge(Ma(c.d),c.right))});for(let c of o)n.set(c.key,r(c));if(o.length<2)continue;let l=4*Math.max(...o.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<o.length;c++){let d=o[c],u=o[(c+1)%o.length],p=we(s,ge(ka(d.d),d.left)),h=we(s,ge(Ma(u.d),u.right)),f=ln(d.d,u.d);if(Math.abs(f)<1e-4)continue;let m=ln(Et(h,p),u.d)/f,_=we(p,ge(d.d,m));Tn(Et(_,s))>l||(n.get(d.key).left=_,n.get(u.key).right=_)}}return n}function mc(a,t){let e=a.filter((i,o)=>Tn(Et(i,a[(o+1)%a.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let o=e[(i+e.length-1)%e.length],s=e[i],r=e[(i+1)%e.length],l=Et(s,o),c=Et(r,s);if(Math.abs(ln(ae(l),ae(c)))<1e-7&&On(l,c)>0){e=e.filter((d,u)=>u!==i),n=!0;break}}}return e}function xe(a,t,e){let n=a.points[t],i=a.points[(t+1)%a.points.length],o=ae(Et(i,n));return we(n,ge(o,e))}function dn(a,t,e){if(a.wall){let i=e.find(r=>r.id===a.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=ae(Et(i.b,i.a));return{room:{id:a.room_id,name:"",area_id:null,points:[i.a,i.b,we(i.a,[-o[1],o[0]])]},edge:0}}let n=t.find(i=>i.id===a.room_id);return n&&a.edge<n.points.length?{room:n,edge:a.edge}:null}function Lo(a,t,e){if(!t.wall)return gc(a,e.room,e.edge,t.offset);let n=a.find(o=>o.free===t.wall);if(!n)return null;let i=xe(e.room,0,t.offset);return{wall:n,s:On(Et(i,n.a),ae(Et(n.b,n.a)))}}function gc(a,t,e,n){for(let i of a){if(!i.sources.find(r=>r.room_id===t.id&&r.edge===e&&n>=r.t0-1e-6&&n<=r.t1+1e-6))continue;let s=xe(t,e,n);return{wall:i,s:On(Et(s,i.a),ae(Et(i.b,i.a)))}}return null}function Co(a,t){let e=Pt(t)>0?1:-1,n=[...a];for(let i=0;i<t.length&&n.length;i++){let o=t[i],s=t[(i+1)%t.length],r=c=>e*((s[0]-o[0])*(c[1]-o[1])-(s[1]-o[1])*(c[0]-o[0])),l=n;n=[];for(let c=0;c<l.length;c++){let d=l[c],u=l[(c+1)%l.length],p=r(d),h=r(u);if(p>=0&&n.push(d),p>=0!=h>=0){let f=p/(p-h);n.push([d[0]+(u[0]-d[0])*f,d[1]+(u[1]-d[1])*f])}}}return n}var Pa=a=>a.length>=3?Math.abs(Ft(a)):0;function _c(a,t){return a.exterior?0:a.roomLeft===t?a.left:a.roomRight===t?a.right:0}function Ea(a,t,e){let n=Pa(a.points);if(a.points.length<3)return n;let{walls:i}=Tt(t.rooms,e,t.walls??[]),o=n,s=i.filter(r=>!r.free&&(r.roomLeft===a.id||r.roomRight===a.id));for(let r of i){let l=[(r.a[0]+r.b[0])/2,(r.a[1]+r.b[1])/2];if((r.free?!Q(l,a.points):!s.includes(r))||(o-=Pa(Co(a.points,r.footprint)),!r.free))continue;let c=Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1]);if(c<.2)continue;let d=[(r.b[0]-r.a[0])/c,(r.b[1]-r.a[1])/c],u=null;for(let p of s){let h=Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1]);if(h<.2)continue;let f=[(p.b[0]-p.a[0])/h,(p.b[1]-p.a[1])/h];if(Math.abs(d[0]*f[1]-d[1]*f[0])>.05)continue;let m=Math.abs((l[0]-p.a[0])*f[1]-(l[1]-p.a[1])*f[0]),_=(r.a[0]-p.a[0])*f[0]+(r.a[1]-p.a[1])*f[1],g=(r.b[0]-p.a[0])*f[0]+(r.b[1]-p.a[1])*f[1],v=Math.min(h,Math.max(_,g))-Math.max(0,Math.min(_,g)),$=m-(r.left+r.right)/2-_c(p,a.id);v>.1&&$>0&&m<1&&(!u||$<u.gap)&&(u={gap:$,overlap:v})}u&&(o-=u.gap*u.overlap)}return Math.max(0,o)}function Ho(a,t){var e,n;return t==="metric"||t==="imperial"?t:((n=(e=a==null?void 0:a.config)==null?void 0:e.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function Aa(a,t){return String(Number(a.toFixed(t)))}function Be(a,t=2){let e=a<0?"-":"",n=Math.round(Math.abs(a)/.0254*(t>=2?10:1))/(t>=2?10:1),i=Math.floor(n/12+1e-9),o=n-i*12,s=Aa(o,t>=2?1:0);return i?o<.05?`${e}${i}'`:`${e}${i}' ${s}"`:`${e}${s}"`}function Do(a,t){let e=a.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,s=!1,r=e;for(let l of e.matchAll(n)){let c=Number(l[1]);if(!Number.isFinite(c))return null;let d=l[2];o=!0,r=r.replace(l[0],""),d==="feet"||d==="foot"||d==="ft"||d==="'"?(i+=c*.3048,s=!0):d==="inches"||d==="inch"||d==="in"||d==='"'?i+=c*.0254:d==="mm"?i+=c/1e3:d==="cm"?i+=c/100:d==="m"?i+=c:i+=t==="imperial"?c*(s?.0254:.3048):c}return!o||/[^\s+]/.test(r)?null:i}function Ia(a,t,e){return t==="imperial"?Be(a):`${e(a)} m`}function za(a,t,e){return t==="imperial"?`${Aa(a/(.3048*.3048),1)} ft\xB2`:`${e(a)} m\xB2`}function jn(a,t){return t==="imperial"?a.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):a}var bc=.05,vc=.2,yc=.12;function $c(a){let t=[];return a.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let o=Pt(i)>=0;for(let s=0;s<i.length;s++){let r=i[s],l=i[(s+1)%i.length],c=l[0]-r[0],d=l[1]-r[1],u=Math.hypot(c,d);if(u<.05)continue;let p=[c/u,d/u],h=o?[p[1],-p[0]]:[-p[1],p[0]];(p[1]<-1e-9||Math.abs(p[1])<=1e-9&&p[0]<0)&&(p=[-p[0],-p[1]]);let f=[-p[1],p[0]],m=r[0]*p[0]+r[1]*p[1],_=l[0]*p[0]+l[1]*p[1];t.push({room:n,index:s,dir:p,normal:f,offset:r[0]*f[0]+r[1]*f[1],outside:h[0]*f[0]+h[1]*f[1]>0?1:-1,t0:Math.min(m,_),t1:Math.max(m,_)})}}),t}function Fa(a,t=.6){let e=$c(a),n=e.map((d,u)=>u),i=d=>n[d]===d?d:n[d]=i(n[d]),o=[];for(let d=0;d<e.length;d++)for(let u=d+1;u<e.length;u++){let p=e[d],h=e[u];if(p.room===h.room||Math.abs(p.dir[0]*h.dir[1]-p.dir[1]*h.dir[0])>bc||p.outside===h.outside)continue;let f=(h.offset-p.offset)*p.outside;f>t||f<-yc||Math.abs(f)<1e-4||Math.min(p.t1,h.t1)-Math.max(p.t0,h.t0)<vc||(o.push(Math.round(f*1e3)/1e3),n[i(d)]=i(u))}if(!o.length)return{rooms:a.map(d=>({...d,points:d.points.map(u=>[u[0],u[1]])})),gaps:o};let s=new Map;e.forEach((d,u)=>{let p=i(u);if(p===u&&!e.some((f,m)=>m!==u&&i(m)===u))return;let h=s.get(p)??[];h.push(u),s.set(p,h)});let r=a.map(d=>d.points.map(()=>new Map));for(let[d,u]of s){let p=u.reduce((h,f)=>h+e[f].offset,0)/u.length;for(let h of u){let f=e[h],m=p-f.offset,_=[f.normal[0]*m,f.normal[1]*m],g=a[f.room].points.length;r[f.room][f.index].set(d,_),r[f.room][(f.index+1)%g].set(d,_)}}let l=d=>Math.round(d*1e3)/1e3;return{rooms:a.map((d,u)=>({...d,points:d.points.map((p,h)=>{let f=p[0],m=p[1];for(let[_,g]of r[u][h].values())f+=_,m+=g;return[l(f),l(m)]})})),gaps:o}}function Ra(a){let t=a.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}function Ta(a,t=.05,e=.5){let n=a.map(o=>({...o,points:o.points.map(s=>[s[0],s[1]])})),i=0;for(let o=0;o<4;o++){let s=(l,c)=>n.reduce((d,u)=>d+u.points.filter(p=>Math.abs(p[l]-c)<1e-6).length,0),r=!1;for(let l of n)for(let c=0;c<l.points.length;c++){let d=l.points[c],u=l.points[(c+1)%l.points.length],p=Math.abs(u[0]-d[0]),h=Math.abs(u[1]-d[1]),f=h>1e-6&&h<=t&&p>=e?1:p>1e-6&&p<=t&&h>=e?0:null;if(f===null)continue;let[m,_]=s(f,d[f])>=s(f,u[f])?[d[f],u[f]]:[u[f],d[f]];for(let g of n)for(let v of g.points)Math.abs(v[f]-_)<1e-6&&(v[f]=m);i++,r=!0}if(!r)break}return{rooms:n,fixed:i}}var wc=.25,ki=a=>Math.round(a*1e3)/1e3;function Vo(a,t,e,n,i){let o=a.rooms.find(s=>s.points.length>=3&&Q([t,e],s.points));return!o||Q([n,i],o.points)?[n,i]:Q([n,e],o.points)?[n,e]:Q([t,i],o.points)?[t,i]:[t,e]}function le(a,t,e,n){let i=Math.hypot(n[0]-e[0],n[1]-e[1]);if(i<.01)return!1;let o=[(n[0]-e[0])/i,(n[1]-e[1])/i],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),r=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return a.rooms.some(l=>l.id!==t&&l.points.some((c,d)=>{let u=l.points[(d+1)%l.points.length];return s(c)>.02||s(u)>.02?!1:Math.min(i,Math.max(r(c),r(u)))-Math.max(0,Math.min(r(c),r(u)))>.05}))}function Wo(a,t,e,n,i,o=.05){let s=a.rooms.find(p=>p.points.length>=3&&Q([t.x,t.z],p.points));if(!s)return[e,n];let r=s.points,l=Pt(r)>=0?1:-1,c=Wt({...t}),d=e,u=n;for(let p=0;p<2;p++){let h=Wt({...t,x:d,z:u});for(let f=0;f<r.length;f++){let m=r[f],_=r[(f+1)%r.length],g=Math.hypot(_[0]-m[0],_[1]-m[1]);if(g<.05)continue;let v=[(_[0]-m[0])/g,(_[1]-m[1])/g],$=[-v[1]*l,v[0]*l],k=le(a,s.id,m,_)?i/2:0,P=0;h.forEach((M,z)=>{let R=(M[0]-m[0])*v[0]+(M[1]-m[1])*v[1];if(R<-.01||R>g+.01)return;let A=(M[0]-m[0])*$[0]+(M[1]-m[1])*$[1]-k,w=c[z];(w[0]-m[0])*$[0]+(w[1]-m[1])*$[1]-k<-o||A<P&&(P=A)}),P<-1e-4&&(d-=$[0]*P,u-=$[1]*P)}}return[ki(d),ki(u)]}function Ln(a,t,e,n=wc){let i=a.rooms.find(c=>c.points.length>=3&&Q([t.x,t.z],c.points));if(!i)return null;let o=i.points,s=Pt(o)>=0?1:-1,r=e/2,l=null;for(let c=0;c<o.length;c++){let d=o[c],u=o[(c+1)%o.length],p=Math.hypot(u[0]-d[0],u[1]-d[1]);if(p<.3)continue;let h=[(u[0]-d[0])/p,(u[1]-d[1])/p],f=[-h[1]*s,h[0]*s],m=(t.x-d[0])*h[0]+(t.z-d[1])*h[1];if(m<0||m>p)continue;let g=a.rooms.some(R=>R.id!==i.id&&R.points.some((A,w)=>{let x=R.points[(w+1)%R.points.length],E=Math.abs((A[0]-d[0])*f[0]+(A[1]-d[1])*f[1]),S=Math.abs((x[0]-d[0])*f[0]+(x[1]-d[1])*f[1]);return E<.02&&S<.02}))?r:0,v=(t.x-d[0])*f[0]+(t.z-d[1])*f[1]-g,$=Math.atan2(-f[0],f[1])*180/Math.PI,k=R=>Math.abs((t.rotation-R+540)%360-180),M=[{rotation:$,extent:t.d/2},{rotation:$+90,extent:t.w/2},{rotation:$-90,extent:t.w/2}].reduce((R,A)=>k(A.rotation)<k(R.rotation)?A:R);if(k(M.rotation)>50)continue;let z=v-M.extent;Math.abs(z)>n||l&&Math.abs(z)>=Math.abs(l.gap)||(l={x:ki(t.x-f[0]*z),z:ki(t.z-f[1]*z),rotation:(Math.round(M.rotation)%360+360)%360,gap:z})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function ke(a,t){let e=a.points,n=e[t],i=e[(t+1)%e.length],o=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/o,(i[1]-n[1])/o],r=[-s[1],s[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];Q([l[0]+r[0]*.02,l[1]+r[1]*.02],e)||(r=[-r[0],-r[1]]);let c=[r[1],-r[0]];return{a:n,b:i,u:s,n:r,length:o,rightward:s[0]*c[0]+s[1]*c[1]>0}}function gt(a,t){let e=t[0]-a.a[0],n=t[1]-a.a[1];return{s:e*a.u[0]+n*a.u[1],d:e*a.n[0]+n*a.n[1]}}function Zt(a,t,e){return[a.a[0]+a.u[0]*t+a.n[0]*e,a.a[1]+a.u[1]*t+a.n[1]*e]}var xc=.45;function cn(a,t){let e=[];for(let n of t.openings){if(n.wall)continue;let i=t.rooms.find(r=>r.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:o,d:s}=gt(a,xe(i,n.edge,n.offset));Math.abs(s)>.4||o<-.05||o>a.length+.05||e.push(kc(n,o))}return e}function kc(a,t){return{kind:"opening",id:a.id,s0:t-a.width/2,s1:t+a.width/2,y0:a.sill,y1:a.sill+a.height,d:0}}function Me(a,t,e,n=xc){let i=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let s=Q([o.x,o.z],e.points),r=Wt(o).map(h=>gt(a,h)),l=Math.min(...r.map(h=>h.d)),c=Math.min(...r.map(h=>h.s)),d=Math.max(...r.map(h=>h.s)),u=gt(a,[o.x,o.z]);if(!s&&u.d<=0||u.d<=0||l>n||l<-.3||d<.02||c>a.length-.02)continue;let p=Rt(t,o);i.push({kind:"furniture",id:o.id,s0:c,s1:d,y0:p,y1:p+o.h,d:l})}return i}function Mi(a,t,e){let n=i=>Math.round(i*1e3)/1e3;return{x:n(t.x+a.u[0]*e),z:n(t.z+a.u[1]*e)}}var No=.3;function Kt(a,t){let e=a.from?t(a.from):null,n=a.to?t(a.to):null,i=a.height??No,o=[];if(a.heights)e&&o.push([e.x,e.y,e.z]),a.points.forEach(([s,r],l)=>{var c;return o.push([s,((c=a.heights)==null?void 0:c[l])??i,r])}),n&&o.push([n.x,n.y,n.z]);else{if(!e||!n)return[];o.push([e.x,e.y,e.z],[e.x,i,e.z]);for(let[s,r]of a.points)o.push([s,i,r]);o.push([n.x,i,n.z],[n.x,n.y,n.z])}return o.filter((s,r)=>r===0||Si(s,o[r-1])>.001)}function Si(a,t){return Math.hypot(t[0]-a[0],t[1]-a[1],t[2]-a[2])}function Bo(a){let t=0;for(let e=1;e<a.length;e++)t+=Si(a[e-1],a[e]);return t}function Oa(a,t){if(a.length<2)return null;let e=Math.max(0,t);for(let n=1;n<a.length;n++){let[i,o]=[a[n-1],a[n]],s=Si(i,o);if(!(s<1e-6)){if(e<=s||n===a.length-1){let r=Math.min(1,e/s),l=[(o[0]-i[0])/s,(o[1]-i[1])/s,(o[2]-i[2])/s];return{p:[i[0]+(o[0]-i[0])*r,i[1]+(o[1]-i[1])*r,i[2]+(o[2]-i[2])*r],dir:l,seg:n-1}}e-=s}}return null}function un(a,t){let e=null,n=0;for(let i=1;i<a.length;i++){let[o,s]=[a[i-1],a[i]],r=[s[0]-o[0],s[1]-o[1],s[2]-o[2]],l=r[0]*r[0]+r[1]*r[1]+r[2]*r[2],c=l>0?Math.max(0,Math.min(1,((t[0]-o[0])*r[0]+(t[1]-o[1])*r[1]+(t[2]-o[2])*r[2])/l)):0,d=[o[0]+r[0]*c,o[1]+r[1]*c,o[2]+r[2]*c],u=Si(d,t);(!e||u<e.d)&&(e={at:n+Math.sqrt(l)*c,d:u,seg:i-1,p:d}),n+=Math.sqrt(l)}return e}function Xt(a,t,e,n){let[i,o]=Zt(a,t,n);return[i,e,o]}function ja(a,t,e,n){let i=Zt(a,0,t),o=Zt(e,0,n),s=a.u[0]*-e.u[1]-a.u[1]*-e.u[0];if(Math.abs(s)<1e-6)return null;let r=o[0]-i[0],l=o[1]-i[1],c=(r*-e.u[1]-l*-e.u[0])/s;return[i[0]+a.u[0]*c,i[1]+a.u[1]*c]}var La=["top6","side6","four"];function Se(a){return a==="pool_pump"?["suction","pressure"]:a==="pool_filter"?["pump","return","waste"]:a==="pool_heat_pump"?["in","out"]:[]}function pn(a){return a==="wall"||a==="floor"?["inside","outside"]:["in","out1","out2"]}function ct(a){let[t="",e="",n]=a.split(":");return{kind:t,id:e,port:n||null}}function te(a){let{kind:t,id:e}=ct(a);return t&&e?`${t}:${e}`:a}function Mc(a,t){let{w:e,d:n,h:i}=a;if(a.type==="pool_pump")return t==="suction"?[e*.5,i*.55,0]:t==="pressure"?[e*.05,i*.9,0]:null;if(a.type==="pool_filter"){let o=Math.min(e,n)/2;if(a.variant==="side6"){let l=o+.08;return t==="pump"?[l,i*.6,0]:t==="return"?[l+.06,i*.48,0]:t==="waste"?[l,i*.36,0]:null}let s=i*.89,r=o*.45+.04;return t==="pump"?[-r,s,0]:t==="return"?[r,s,0]:t==="waste"?[0,s,-r]:null}if(a.type==="pool_heat_pump"){let o=a.variant==="left"||a.variant==="back"?a.variant:"right";if(t!=="in"&&t!=="out")return null;let s=t==="in"?i*.25:i*.45;return o==="back"?[t==="in"?-e*.15:e*.15,s,-n/2-.04]:[(o==="left"?-1:1)*(e/2+.04),s,-n*.2]}return null}function Ca(a,t){let e=Mc(a,t);if(!e)return null;let n=a.rotation*Math.PI/180,[i,o]=[Math.cos(n),Math.sin(n)];return{x:a.x+e[0]*i-e[2]*o,y:e[1],z:a.z+e[0]*o+e[2]*i}}function Pe(a,t){if(t==="outside"){if(a.kind==="floor")return{x:a.x,y:a.y-.3,z:a.z};if(a.kind==="wall"){let e=(a.depth??.3)+.05;return{x:a.x-(a.nx??0)*e,y:a.y,z:a.z-(a.nz??0)*e}}}return{x:a.x,y:a.y,z:a.z}}function Ha(a){return a==="pressure"||a==="return"||a==="waste"||a==="out"?"source":a==="suction"||a==="pump"||a==="in"?"sink":null}function qo(a){return a==="skimmer"||a==="drain"?"source":"sink"}function Pi(a,t){let e=a[0]??t,n=1/0;for(let i=0;i<a.length;i++){let o=a[i],s=a[(i+1)%a.length],r=s[0]-o[0],l=s[1]-o[1],c=r*r+l*l,d=c>0?Math.max(0,Math.min(1,((t[0]-o[0])*r+(t[1]-o[1])*l)/c)):0,u=[o[0]+r*d,o[1]+l*d],p=Math.hypot(u[0]-t[0],u[1]-t[1]);p<n&&([e,n]=[u,p])}return e}function ht(a,t,e){let n=e.pool??{},i=_o(t,e);return o=>{var c,d;let{kind:s,id:r,port:l}=ct(o);if(s==="port"){let u=(c=n.ports)==null?void 0:c.find(h=>h.id===r);if(!u)return null;let p=u.kind==="skimmer"?i-(u.depth??0):u.kind==="drain"?Cr(t,e)+.03:u.kind==="inlet"?i-(u.depth??.3):.02;return{x:u.x,z:u.z,y:p}}if(s==="joint"){let u=(d=n.joints)==null?void 0:d.find(p=>p.id===r);return u?Pe(u,l):null}if(s!=="dev")return null;for(let u of a.floors){let p=u.furniture.find(_=>_.id===r);if(!p||!St.includes(p.type))continue;let h=l?Ca(p,l):null,f=u.elevation-t.elevation;if(h)return{...h,y:h.y+Rt(u,p)+f};let m=p.type==="pool_filter"?p.h*.88:p.type==="pool_dosing"?.95:p.type==="pool_valve"?qr:p.type==="pool_pump"?.2:.3;return{x:p.x,z:p.z,y:m+Rt(u,p)+f}}return null}}function Nt(a,t){if(a.heights)return a;let e=a.height??No,n=t(a.from),i=t(a.to),o=[...n?[[n.x,n.z]]:[],...a.points,...i?[[i.x,i.z]]:[]];return{...a,points:o,heights:o.map(()=>e)}}var bt=a=>Math.round(a*1e3)/1e3;function Ei(a,t,e,n,i){let o=Nt(a,t),s=Kt(o,t),r=un(s,e);if(!r)return null;let l={id:n,x:bt(r.p[0]),z:bt(r.p[2]),y:bt(r.p[1])},c=Cn(o,t),d=Math.max(0,Math.min(o.points.length,r.seg+1-c)),u=o.heights??[],p=o.fittings??[],h={...o,to:`joint:${n}:in`,points:o.points.slice(0,d),heights:u.slice(0,d),fittings:p.filter(m=>m.at<=r.at)},f={...o,id:i,from:`joint:${n}:out1`,points:o.points.slice(d),heights:u.slice(d),fittings:p.filter(m=>m.at>r.at).map(m=>({...m,at:bt(m.at-r.at)}))};return{joint:l,first:h,second:f}}function Cn(a,t){return a.from&&t(a.from)?1:0}var Sc=1.6;function Va(a,t,e){var o;let n=[],i=s=>{let r=gt(a,[s[0],s[2]]);return r.d>-.35&&r.d<Sc&&r.s>-.3&&r.s<a.length+.3?r:null};for(let s of t){let r=Nt(s,e),l=Kt(r,e);if(l.length<2)continue;let c={id:s.id,pieces:[],points:[],fittings:[],ends:[]};for(let p=1;p<l.length;p++){let h=i(l[p-1]),f=i(l[p]);h&&f&&c.pieces.push({k:p-1,s0:h.s,y0:l[p-1][1],d0:h.d,s1:f.s,y1:l[p][1],d1:f.d})}if(!c.pieces.length)continue;let d=Cn(r,e);r.points.forEach((p,h)=>{let f=l[h+d],m=f&&i(f);m&&c.points.push({i:h,s:m.s,y:f[1]})});let u=Bo(l);for(let p of s.fittings??[]){let h=Math.min(u,p.at),f=(o=Oa(l,h))==null?void 0:o.p,m=f&&i(f);f&&m&&c.fittings.push({id:p.id,kind:p.kind,open:p.open!==!1,s:m.s,y:f[1]})}for(let[p,h]of[["from",l[0]],["to",l[l.length-1]]]){let f=(p==="from"?!s.from:!s.to)?i(h):null;f&&c.ends.push({end:p,s:f.s,y:h[1]})}n.push(c)}return n}var Wa=-.3;function hn(a,t,e,n,i){var _;let o=[],s=[],r=g=>t(g),l=[],c=a.from,d=[];for(let g of a.vias){if(g.kind!=="hole"){d.push(g.kind);continue}let v=e.find(z=>z.id===g.joint),$=r(c);if(!v||!$)continue;let k=r(`joint:${v.id}:inside`),P=r(`joint:${v.id}:outside`),M=g.dir?g.dir==="out":Math.hypot($.x-k.x,$.z-k.z)<=Math.hypot($.x-P.x,$.z-P.z);l.push({a:c,b:`joint:${v.id}:${M?"inside":"outside"}`,fits:d}),d=[],c=`joint:${v.id}:${M?"outside":"inside"}`}let u=a.to;if(u.length>1){let g=r(c),v=u.map(r).filter($=>!!$);if(g&&v.length===u.length){let $=v.reduce((A,w)=>A+w.x,0)/v.length,k=v.reduce((A,w)=>A+w.z,0)/v.length,P=Math.hypot(g.x-$,g.z-k)||1,M=Math.min(1,P/2)/P,z=g.y<0||v.some(A=>A.y<0),R={id:i("joint"),kind:"tee",x:bt($+(g.x-$)*M),z:bt(k+(g.z-k)*M),y:z?Wa:bt(g.y)};s.push(R),l.push({a:c,b:`joint:${R.id}:in`,fits:d}),d=[],u.forEach((A,w)=>l.push({a:`joint:${R.id}:out${w+1}`,b:A,fits:[]})),u=[]}}u.length&&l.push({a:c,b:u[0],fits:d});let p=g=>{let{kind:v,id:$,port:k}=ct(g),P=v==="joint"?s.find(M=>M.id===$):void 0;return P?Pe(P,k):r(g)},h=g=>n(g)==="source",f=g=>n(g)==="sink",m=a.to.some(h)&&!h(a.from)||f(a.from)&&!a.to.some(f);for(let g of l){let v=p(g.a),$=p(g.b);if(!v||!$)continue;let k=Pc(v,$,Da(g.a,e),Da(g.b,e)),P={id:i("pipe"),from:g.a,to:g.b,floor_id:a.floorId,points:k.map(z=>[z[0],z[2]]),heights:k.map(z=>z[1])},M=Bo(Kt(P,p));P.fittings=g.fits.map((z,R)=>({id:i("fit"),kind:z,at:bt(Math.min(M/2,.4+R*.25)),...z==="valve"?{open:!0}:{}})),m&&(P={...P,from:P.to,to:P.from,points:[...P.points].reverse(),heights:[...P.heights??[]].reverse(),fittings:(_=P.fittings)==null?void 0:_.map(z=>({...z,at:bt(Math.max(0,M-z.at))}))}),o.push(P)}return{pipes:o,joints:s}}function Da(a,t){let{kind:e,id:n,port:i}=ct(a),o=e==="joint"&&i==="outside"?t.find(s=>s.id===n):void 0;return(o==null?void 0:o.kind)==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function Pc(a,t,e=null,n=null){let i=a.y<0||t.y<0?Wa:bt(Math.max(a.y,t.y)),o=[],[s,r]=[a.x,a.z];e&&([s,r]=[bt(s+e[0]*.5),bt(r+e[1]*.5)],o.push([s,bt(a.y),r]));let[l,c]=[t.x,t.z],d=[];return n&&([l,c]=[bt(l+n[0]*.5),bt(c+n[1]*.5)],d.push([l,bt(t.y),c])),o.push([bt(s),i,bt(r)]),Math.abs(l-s)>.01&&o.push([bt(l),i,bt(r)]),Math.abs(c-r)>.01&&o.push([bt(l),i,bt(c)]),o.push(...d),o.filter((u,p)=>p===0||Math.hypot(u[0]-o[p-1][0],u[1]-o[p-1][1],u[2]-o[p-1][2])>.001)}function Na(a,t,e){let n=o=>{let{kind:s,id:r,port:l}=ct(o),c=s==="joint"&&(l==="inside"||l==="outside")?t.find(d=>d.id===r):void 0;return c&&(c.kind==="wall"||c.kind==="floor")?{id:r,port:l}:null},i=[];for(let o of a.filter(s=>s.from===e||s.to===e)){let s={start:e,other:"",pipes:[],holes:[],fittings:[]},r=o,l=e,c=new Set;for(;r&&!c.has(r.id);){c.add(r.id),s.pipes.push(r.id),s.fittings.push(...(r.fittings??[]).map(h=>h.kind));let d=r.from===l?r.to:r.from,u=d?n(d):null;if(!u){s.other=d;break}s.holes.push({joint:u.id,dir:u.port==="inside"?"out":"in"}),l=`joint:${u.id}:${u.port==="inside"?"outside":"inside"}`;let p=r;r=a.find(h=>h!==p&&(h.from===l||h.to===l)),r||(s.other=l)}i.push(s)}return i}function Ec(a,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i,s=o?Math.max(0,Math.min(1,((a[0]-t[0])*n+(a[1]-t[1])*i)/o)):0;return Math.hypot(a[0]-t[0]-n*s,a[1]-t[1]-i*s)}function Ba(a,t,e=.03){return a.every(n=>Q(n,t)||t.some((i,o)=>Ec(n,i,t[(o+1)%t.length])<=e))}function qa(a,t){return t&&a.states[t]?t:Object.keys(a.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}function Ka(a,t){let e=a.states[t];if(!e)return!1;let n=String(e.attributes.device_class??"");return t.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(t):t.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(e.attributes.unit_of_measurement??"")):!1}var Ai=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],Ii=["fun_pets","fun_halloween"],Ac=["pool"];function Ko(){try{let a=new URLSearchParams(location.search).get("fp3d_lab");return a==="1"?localStorage.setItem("neonplan3d.lab","1"):a==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function Ee(a){return!Ac.includes(a)||Ko()}var Ga=["fridge_smart"];function Ya(a){return Ai.includes(a)||Ga.includes(a)||Ii.includes(a)}var Ua="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",Ic={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function qe(a){let t=a?Ic[a]:void 0;return t?`${Ua}#${t}`:Ua}function Ja(){return new Set([...Ai,...Ga,...Ii].filter(Ee))}function vt(a){return Ee(a)}function Za(a){let t=$t(a);if(!t||t.light)return!1;let e=t.parts.filter(n=>n.color==="plant").length;return e>0&&e+t.parts.filter(n=>n.color==="pot").length>=t.parts.length/2}var Uo=["bin120","bin240","bin1100","multi","bag","caddy","underground"],Xa=["rest","bio","paper","plastic","glass","garden","recycling","other"],Go=["wall","pole","pillar","parcel","bank"],tl={bin120:[.48,.55,.93],bin240:[.58,.73,1.07],bin1100:[1.37,1.07,1.45],multi:[.6,.75,1.07],bag:[.42,.32,.62],caddy:[.3,.26,.32],underground:[1,1,1.15]},el={wall:[.38,.14,.34],pole:[.24,.5,1.15],pillar:[.42,.36,1.3],parcel:[.6,.55,1.1],bank:[.95,.3,.7]};function nl(a){return Uo.includes(a.variant??"")?a.variant:"bin240"}function il(a){return Go.includes(a.variant??"")?a.variant:"wall"}var xt=["#3a3f47","#3a3f47"],Ke=["#23262b","#23262b"],ee=["#5a3b25","#5a3b25"],mt=["#1f4fa8","#1f4fa8"],Ae=["#e3b616","#e3b616"],st=["#2f7d3b","#2f7d3b"],Qa={default:{rest:xt,bio:ee,paper:mt,plastic:Ae,glass:st,garden:st,recycling:Ae,other:xt},DE:{rest:Ke,bio:ee,paper:mt,plastic:Ae,glass:st,garden:st,recycling:Ae},AT:{rest:xt,bio:ee,paper:[xt[0],"#c0262d"],plastic:Ae,glass:st,garden:st},CH:{rest:["#d8d8d8","#d8d8d8"],bio:st,paper:mt,plastic:xt,glass:st,garden:st},NL:{rest:xt,bio:st,paper:mt,plastic:["#3a3f47","#e57a1f"],glass:st,garden:st},BE:{rest:xt,bio:st,paper:mt,plastic:mt,glass:st,garden:st},GB:{rest:Ke,bio:["#3a3f47","#5a3b25"],paper:mt,plastic:mt,glass:Ke,garden:ee,recycling:mt},US:{rest:Ke,bio:st,paper:mt,plastic:mt,glass:mt,garden:st,recycling:mt},CA:{rest:Ke,bio:st,paper:mt,plastic:mt,glass:mt,garden:st,recycling:mt},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:xt,bio:ee,paper:[xt[0],"#e3b616"],plastic:[xt[0],"#e3b616"],recycling:[xt[0],"#e3b616"],glass:st,garden:st},IT:{rest:xt,bio:ee,paper:mt,plastic:Ae,glass:st,garden:st},ES:{rest:xt,bio:ee,paper:mt,plastic:Ae,glass:st,garden:st},PT:{rest:xt,bio:ee,paper:mt,plastic:Ae,glass:st,garden:st},DK:{rest:Ke,bio:st,paper:mt,plastic:xt,glass:st,garden:st},SE:{rest:Ke,bio:ee,paper:mt,plastic:xt,glass:st,garden:st},NO:{rest:xt,bio:ee,paper:mt,plastic:xt,glass:st,garden:st},FI:{rest:xt,bio:ee,paper:mt,plastic:xt,glass:st,garden:st}},ol="DE";function sl(){return ol}function Yo(a,t){var e;return((e=Qa[t])==null?void 0:e[a])??Qa.default[a]??xt}function rl(a,t=ol){let e=Yo(a.bin_kind??"rest",t),n=a.bin_color||e[0];return[n,a.bin_lid||(a.bin_color?n:e[1])]}var zc={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de CasaNeon ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de CasaNeon.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace.",as_furniture_pick:"Elegir mueble \u2026",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de CasaNeon.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_copy:"Copiar",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon \u2013 actualiza CasaNeon (HACS) y recarga la p\xE1gina.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para CasaNeon. Importa aqu\xED tus propios packs (.fp3dpack).",ext_pro:"Extensiones Pro",ext_active:"activa",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: CasaNeon encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia ahora",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas y prop\xF3n ideas como issue en GitHub: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant.",show_menu:"Mostrar",tool_menu:"Herramienta",floor_label:"Planta:",floor_settings:"Ajustes de la planta",floor_settings_of:"Planta {floor}",floor_none_hint:"A\xF1ade tu primera planta arriba con \xABPlanta\xBB \u2192 \xABA\xF1adir planta\xBB.",tool_group_build:"Construir",tool_group_outside:"Exterior",tool_room:"Habitaci\xF3n",view_menu:"Vista",fit_hint:"Mostrar todo el plano de la planta (con el jard\xEDn al dibujar el exterior)",tech_open:"Dibujar la sala t\xE9cnica",tech_open_hint:"Despu\xE9s toca en el plano la pared donde est\xE1 tu instalaci\xF3n.",tech_step:"Paso {n}",tech_step_feed:"Toca \xAB{name}\xBB a la izquierda y luego el punto de la pared por donde entra la tuber\xEDa (abajo del todo: desde el suelo).",tech_step_devices:"Toca la bomba y el filtro de arena a la izquierda: se colocan junto a la pared. La bomba de calor y la dosificaci\xF3n si las tienes.",tech_step_line:"Traza una l\xEDnea: de \xAB{a}\xBB a \xAB{b}\xBB. Pulsa en uno y arrastra hasta el otro.",tech_step_loose:"Un tubo acaba suelto: prol\xF3ngalo hasta un equipo o una tuber\xEDa, o b\xF3rralo (\u270B Seleccionar).",tech_step_drawing:"Sigue arrastrando o toca punto a punto: la l\xEDnea termina en un equipo, una tuber\xEDa o un tubo.",tech_step_fit:"Toca el tubo donde va la v\xE1lvula (el visor): se ilumina en naranja.",tech_mode:"Sala t\xE9cnica",tech_mode_hint:"Dibuja la sala t\xE9cnica en esta pared: entra las tuber\xEDas de la piscina, coloca los equipos, traza los tubos",tech_draw:"Dibujar",tech_pick:"Seleccionar",pool_delete_confirm:"\xBFEliminar la piscina con sus {n} tubos?",tech_erase:"Borrar",tech_erase_hint:"Toca un tubo, una v\xE1lvula de bola, una mirilla o un agujero y se elimina. \xBFLo dibujaste mal? Deshacer tambi\xE9n ayuda.",tech_feeds:"Tuber\xEDas de la piscina",tech_devices:"Equipos",tech_fittings:"Valvuler\xEDa",tech_hint:"Trazar una l\xEDnea: toca un equipo, una tuber\xEDa o un tubo y arrastra hasta el siguiente (o punto a punto). Sobre un tubo crea una T. CasaNeon sabe solo hacia d\xF3nde va el agua y qu\xE9 conexi\xF3n del equipo usar.",tech_no_ports:"Coloca primero el skimmer, el sumidero y las boquillas con la herramienta Piscina.",tech_ok:"Todo conectado: el agua circula.",tech_issue_loose:"{n} extremos sueltos",tech_issue_port:"{name} sin conectar",tech_issue_feed:"{name} a\xFAn no entrado",tech_feed_place:"Toca donde la tuber\xEDa entra en la sala: abajo del todo, desde el suelo; m\xE1s arriba, por la pared.",tech_start:"Toca un equipo o una tuber\xEDa y traza una l\xEDnea.",feed_skimmer:"Skimmer",feed_drain:"Sumidero",feed_inlet:"Boquillas",feed_waste:"Desag\xFCe (lavado)",hp_ports:"Conexiones",hp_side_right:"derecha",hp_side_left:"izquierda",hp_side_back:"detr\xE1s",pool_depth:"Profundidad del vaso (m)",pool_rim:"Borde sobre el c\xE9sped (m)",pool_depth_hint:"Profundidad: del borde al fondo. Una piscina de 1,50 m que sobresale 20 cm: profundidad 1,50, borde 0,20. El agua queda 15 cm bajo el borde.",pool_depth_ground:"La profundidad se ve en 3D en cuanto la piscina est\xE1 en un c\xE9sped, una terraza u otra zona; sin suelo alrededor, el vaso se ver\xEDa desde fuera.",pool_port_depth:"Prof.",pool_port_depth_hint:"Profundidad bajo la l\xEDnea de agua (m): boquillas normalmente 0,30, el skimmer en la l\xEDnea de agua",pool_valves:"V\xE1lvulas",pool_valve_shut:"cerrada",pool_valve_toggle:"Toca para cambiar: tal como est\xE1 la v\xE1lvula de verdad",pool_joint:"Uni\xF3n",block_some_fixed:"\u{1F512} Una pieza est\xE1 fijada: el bloque solo se mueve cuando todas est\xE9n liberadas.",unfix_all:"Liberar todo",wv_block_all:"Bloque entero",wv_block_one:"Solo esta pieza",wv_gap:"Hueco: {w} \u2013 esto cabe:",wv_gap_hint:"Toca un lugar libre de la pared: aqu\xED aparece lo que cabe.",wv_kit_title:"A la pared",wv_recent:"Usados recientemente",wv_none_fits:"Nada cabe en este hueco.",wv_cat_base:"Muebles bajos y aparadores",wv_cat_hang:"Colgados",wv_cat_tall:"Armarios altos",wv_cat_living:"Sentarse y dormir",wv_cat_light:"Luces",wv_cat_pack:"De tus packs",wv_cat_energy:"Energ\xEDa",block_title:"Bloque de muebles",multi_title:"{n} muebles seleccionados",block_hint:"Un clic selecciona todo el bloque, arrastrar lo mueve. Una sola pieza: t\xF3cala dos veces o elige su nombre abajo.",multi_hint:"May\xFAs + clic a\xF1ade o quita muebles, May\xFAs + arrastrar en una zona vac\xEDa dibuja un marco. Mu\xE9velos, g\xEDralos o c\xF3pialos juntos, o \xFAnelos en un bloque.",block_part_edit:"Editar solo esta pieza",block_break:"Deshacer bloque",block_make:"Unir en un bloque",multi_mode:"Seleccionar varios (tocar a\xF1ade, arrastrar dibuja un marco)",block_part:"Parte de un bloque.",block_select:"Seleccionar todo el bloque",block_delete:"\xBFEliminar {n} muebles?",block_delete_fixed:"\xBFEliminar {n} muebles? Algunos est\xE1n fijados.",wall_zoom_hint:"Zoom: rueda del rat\xF3n o dos dedos",wall_zoom_all:"Pared entera",card_pets:"Mostrar las mascotas",card_ghost:"Mostrar el fantasma de Halloween",card_ghost_hint:"Pack divertido Halloween: el fantasma flota tambi\xE9n por la casa de esta tarjeta (p. ej. desact\xEDvalo en la tableta de pared)",card_pets_hint:"Pack divertido Mascotas: mostrar los animales configurados en esta tarjeta (p. ej. desact\xEDvalos en la tableta de pared)",fun_title:"Packs divertidos",fun_intro:"Extras solo por diversi\xF3n; act\xEDvalos y desact\xEDvalos aqu\xED.",fun_name_pets:"Mascotas",fun_feature_pets:"Un gato, un perro o un conejo vive en tu casa 3D: recorre las habitaciones, se tumba en el sof\xE1, la cama o la alfombra y duerme por la noche.",fun_name_halloween:"Halloween",fun_feature_halloween:"Un fantasma que de vez en cuando flota por la casa.",halloween_ghost:"Dejar flotar al fantasma",pets_show:"Mostrar las mascotas",pet_add:"A\xF1adir una mascota",pet_name:"Nombre",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Gato",pet_kind_dog:"\u{1F436} Perro",pet_kind_rabbit:"\u{1F430} Conejo",pet_fur:"Pelaje",pet_fur_orange:"Pelirrojo",pet_fur_tabby:"Atigrado",pet_fur_black:"Negro",pet_fur_white:"Blanco",pet_fur_grey:"Gris",pet_fur_brown:"Marr\xF3n",pet_fur_calico:"Tricolor",pet_fur_golden:"Dorado",pet_fur_cream:"Crema",pet_breed:"Raza",pet_breed_dachshund:"Teckel",pet_breed_pug:"Carlino",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Pastor",pet_floor:"Planta",pet_floor_auto:"Planta baja",tt_ev_camera:"La c\xE1mara detecta movimiento: {name}",terrain:"Terreno",terrain_hint:"D\xF3nde est\xE1 el terreno alrededor de la casa. Lo que queda por debajo (un s\xF3tano, la parte baja de un semis\xF3tano) est\xE1 bajo tierra en 3D; c\xE9spedes, caminos y terrazas est\xE1n sobre el terreno.",terrain_level:"Altura del terreno (m, planta baja = 0)",terrain_earth:"Mostrar los s\xF3tanos bajo tierra",terrain_earth_hint:"Las plantas por debajo del terreno est\xE1n bajo tierra; abre una y la ver\xE1s como en una excavaci\xF3n. Desactivado: quedan sueltas como antes.",terrain_cellar_hint:"Semis\xF3tano: baja la altura del terreno tanto como deba asomar el s\xF3tano, p. ej. \u22121,2 m. Las ventanas de s\xF3tano bajo el terreno reciben un patio ingl\xE9s.",terrain_no_cellar_hint:"Un s\xF3tano es una planta con elevaci\xF3n negativa, p. ej. \u22122,6 m.",terrain_reset:"Restablecer el terreno",cellar_window:"Ventana de s\xF3tano",well:"Patio ingl\xE9s",well_hint:"Esta ventana est\xE1 bajo el nivel del terreno: en 3D recibe un patio ingl\xE9s con rejilla. Desm\xE1rcalo para no tener ninguno, p. ej. si por fuera pasa un camino.",well_rim:"Borde sobre el terreno (m)",cellar_window_hint:"Peque\xF1a y arriba en la pared: 100 \xD7 50 cm, 25 cm bajo el techo. Bajo el terreno recibe en 3D un patio ingl\xE9s con rejilla.",side_fold_hint:"Estrechar la barra lateral: m\xE1s espacio para el plano",furn_ac_unit:"Aire acondicionado (de pared)",furn_awning:"Toldo",furn_group_outdoor:"Terraza y balc\xF3n",bin_from:"Brillar desde (hora, el d\xEDa antes)",bin_until:"hasta (hora, d\xEDa de recogida)",bin_none:"Sin recogida a la vista",hh_title:"Hoy en casa",hh_left:"quedan {t}",hh_done:"\xA1Listo!",hh_finished:"{name} ha terminado",hh_thirsty:"Sed",hh_plant:"{name} necesita agua",hh_service:"{name}: mantenimiento pendiente",hh_fridge_open:"{name} est\xE1 abierto",alert_fridge_door:"Nevera abierta: {name}",alert_short_fridge_door:"Nevera abierta",hh_moisture:"Planta (plant.*) o sensor de humedad",hh_moisture_min:"Sed por debajo de (%)",hh_remaining:"Tiempo restante (sensor)",hh_door:"Sensor de puerta",hh_fridge_door:"Sensor de puerta",hh_appliance_hint:"Mientras funciona, su marcador muestra el tiempo restante; despu\xE9s \xAB\xA1Listo!\xBB hasta que se abre la puerta o vuelve a funcionar.",hh_door_alarm:"Avisar tras (minutos abierto)",hh_service_entity:"Consumible / mantenimiento (sensor)",hh_service_min:"Pendiente desde (\u2264 % o d\xEDas)",hh_service_hint:"P. ej. filtro, sal o abrillantador: un sensor binario (activo = pendiente), un n\xFAmero (% o d\xEDas restantes) o una fecha. Si toca, el aparato brilla en amarillo y aparece en \xABHoy en casa\xBB.",hh_teaser_plant:"Con Hogar Pro la planta muestra cu\xE1ndo necesita agua.",hh_teaser_appliance:"Con Hogar Pro el aparato muestra su tiempo restante y \xAB\xA1Listo!\xBB hasta que se abre la puerta.",hh_teaser_fridge:"Con Hogar Pro CasaNeon avisa cuando la puerta de la nevera est\xE1 abierta demasiado tiempo.",card_household:"Hoy en casa",card_household_hint:"Hogar Pro: tarjeta con contenedores, correo, aparatos terminados, plantas sedientas y mantenimiento",furn_waste_bin:"Contenedor de basura",furn_mailbox:"Buz\xF3n",furn_wall_switch:"Interruptor de pared",furn_water_heater:"Termo el\xE9ctrico",stair_open:"Abierta por debajo (losa inclinada)",stair_open_hint:"Los pelda\xF1os van sobre una losa que sigue la pendiente: el hueco de debajo queda libre, con techo inclinado, y cabe otro tramo o un mueble debajo.",furn_access_point:"Punto de acceso Wi-Fi",ap_entity:"Punto de acceso",ap_mount:"Montaje",ap_ceiling:"Techo",ap_wall:"Pared",ap_hint:"Elige el punto de acceso por su nombre; su estado, clientes, LED, CPU, memoria y bot\xF3n de reinicio se buscan en el mismo dispositivo (UniFi Network).",ap_gestures:"En 3D: tocar enciende o apaga su LED; mantener pulsado lo reinicia (pregunta antes). El anillo brilla azul conectado con el LED encendido, rojo si est\xE1 desconectado y \xE1mbar mientras se actualiza.",ap_role_state:"estado",ap_role_clients:"clientes",ap_role_led:"LED",ap_role_cpu:"CPU",ap_role_memory:"memoria",ap_role_restart:"reinicio",ap_client:"{n} cliente",ap_clients:"{n} clientes",ap_down:"Desconectado",ap_busy:"Actualizando",ap_up:"Conectado",ap_restart_confirm:"\xBFReiniciar {name}? Sus clientes perder\xE1n el Wi-Fi un par de minutos.",heater_entity:"Calentador (water_heater)",heater_capacity:"Capacidad",heater_found:"Encontrado en el mismo dispositivo:",heater_hint:"Elige su entidad water_heater; lo dem\xE1s (si calienta, duchas, tiempo restante, encendido, eco) se busca solo en el mismo dispositivo.",heater_role_heating:"calentando",heater_role_showers:"duchas",heater_role_remaining:"tiempo restante",heater_role_power:"encendido",heater_role_eco:"eco",heater_gestures:"En 3D: tocar lo enciende o apaga; mantener pulsado abre su ficha para regular la temperatura y el modo.",heater_gestures_no_power:"En 3D: tocar o mantener pulsado abre su ficha para regular la temperatura y el modo (no se encontr\xF3 un interruptor de encendido).",heater_shower:"{n} ducha",heater_showers:"{n} duchas",heater_left:"{min} min para agua caliente",furn_lamp_ceiling_fan:"Ventilador de techo con luz",furn_fan_entity:"Entidad del ventilador",ceiling_fan_hint:"La luz es la entidad del elemento de arriba: el motor y la pantalla la encienden. Las aspas conmutan el ventilador por separado y giran mientras funciona, m\xE1s r\xE1pido cuanto mayor es su velocidad.",furn_wall_socket:"Enchufe de pared",furn_group_electric:"Electricidad",socket_count:"Enchufes",socket_n:"Enchufe {n}",socket_switch:"Encender y apagar con (opcional)",socket_power:"Medidor de consumo (W, opcional)",socket_hint:"Un enchufe con interruptor (enchufe inteligente) se enciende y apaga al tocarlo en 3D y su peque\xF1o LED muestra que est\xE1 encendido. Con medidor de consumo cuenta en el balance de energ\xEDa y su pin muestra los vatios de todos sus enchufes. Para ponerlo sobre una encimera, sube su \xABAltura sobre el suelo\xBB.",switch_keys:"Teclas",switch_key:"Entidad de la tecla",switch_key_n:"Tecla {n}",switch_ring:"Anillo de luz (color de)",switch_ring_hint:"Para interruptores con luz alrededor (p. ej. Sonoff TX Ultimate): elige la luz que da su color y brillo; el anillo brilla en la pared alrededor de la placa mientras esa luz est\xE1 encendida.",switch_hint:"Cada tecla conmuta su entidad al tocarla en 3D (una persiana se abre o se cierra) y su LED se enciende mientras est\xE1 encendida o abierta.",furn_group_household:"Hogar",bin_shape:"Forma",bin_shape_bin120:"Contenedor con ruedas 120 l",bin_shape_bin240:"Contenedor con ruedas 240 l",bin_shape_bin1100:"Contenedor 1100 l",bin_shape_multi:"Contenedor con varios compartimentos",bin_shape_bag:"Bolsa",bin_shape_caddy:"Cubo",bin_shape_underground:"Contenedor soterrado",bin_kind:"Residuo",bin_kind_rest:"Resto",bin_kind_bio:"Org\xE1nico",bin_kind_paper:"Papel",bin_kind_plastic:"Envases",bin_kind_glass:"Vidrio",bin_kind_garden:"Restos de poda",bin_kind_recycling:"Reciclaje",bin_kind_other:"Otro",bin_color:"Color",bin_lid:"Tapa",bin_source:"Calendario de recogida o sensor",bin_match:"Palabra del calendario (vac\xEDo: seg\xFAn el residuo)",bin_hint:"El contenedor brilla desde la hora elegida del d\xEDa anterior hasta la hora del d\xEDa de recogida (para todos); su marcador indica \xABHoy\xBB o \xABMa\xF1ana\xBB, al tocarlo muestra las pr\xF3ximas recogidas. En un calendario (p. ej. Waste Collection Schedule) se buscan las palabras de su residuo; un sensor puede dar los d\xEDas o la fecha.",bin_today:"Hoy",bin_tomorrow:"Ma\xF1ana",bin_in_days:"en {n} d\xEDas",mailbox_shape:"Forma",mailbox_shape_wall:"Buz\xF3n de pared",mailbox_shape_pole:"Buz\xF3n en poste (con bandera)",mailbox_shape_pillar:"Buz\xF3n de pie con portaperi\xF3dicos",mailbox_shape_parcel:"Buz\xF3n de paquetes",mailbox_shape_bank:"Buzones agrupados",mailbox_entity:"Sensor de correo (trampilla o indicador)",mailbox_door:"Sensor de la puerta de recogida (opcional)",mailbox_hint:"Con un indicador (p. ej. un input_boolean \xABcorreo\xBB que activa una automatizaci\xF3n) el buz\xF3n brilla mientras est\xE1 activo. Con trampilla y puerta de recogida brilla cuando ha llegado correo despu\xE9s del \xFAltimo vaciado.",mailbox_post:"Correo",pro_name_household:"Hogar Pro",pro_feature_household:"Hogar Pro: contenedores que brillan la v\xEDspera de la recogida, buz\xF3n con correo, plantas con sed; lavadora, secadora y lavavajillas muestran el tiempo restante y \xAB\xA1Listo!\xBB; filtros y consumibles pendientes en amarillo; aviso de nevera abierta; tarjeta \xABHoy en casa\xBB; adem\xE1s la nevera inteligente (americana, puertas con sensores)",household_teaser_bin:"Con Hogar Pro el contenedor brilla la v\xEDspera de la recogida, seg\xFAn tu calendario.",household_teaser_mail:"Con Hogar Pro el buz\xF3n brilla en cuanto hay correo, hasta que se vac\xEDa.",awning_cover:"Toldo (cover)",motor_cover:"Motor (cover)",curtain_side:"Se abre hacia",curtain_side_both:"ambos lados",curtain_side_left:"izquierda (vista de frente)",curtain_side_right:"derecha (vista de frente)",motor_time:"Tiempo de recorrido (s)",motor_invert_hint:"Para covers que indican 100 % con la cortina cerrada o la pantalla abajo.",awning_pitch:"Inclinaci\xF3n (\xB0)",awning_time:"Tiempo de salida completa (s)",awning_position:"Sensor de posici\xF3n (opcional)",awning_valance:"Fald\xF3n (borde de lona delantero)",awning_invert:"Invertir el sentido",awning_invert_hint:"Para covers que informan 100 % cuando el toldo est\xE1 recogido.",awning_kind:"Tipo",awning_kind_arm:"Toldo de brazos articulados (terraza)",awning_kind_drop:"Toldo de brazo invisible / punto recto (balc\xF3n, ventana)",awning_kind_vertical:"Toldo vertical / ZIP (ventana, balc\xF3n)",awning_kind_pergola:"Toldo de p\xE9rgola / galer\xEDa acristalada",awning_kind_side:"Toldo lateral (privacidad)",awning_kind_arm_hint:"El cl\xE1sico sobre la terraza: los brazos articulados empujan la lona hacia fuera con una ligera pendiente. Fondo = salida.",awning_kind_drop_hint:"Los brazos giran desde la pared hacia delante y hacia abajo, la lona se tensa inclinada delante. Fondo = longitud de los brazos, Inclinaci\xF3n = cu\xE1nto bajan los brazos por debajo de la horizontal.",awning_kind_vertical_hint:"La lona baja en vertical por gu\xEDas laterales hasta el suelo \u2013 delante de una ventana, la barandilla de un balc\xF3n o el frente de una p\xE9rgola. Altura sobre el suelo = borde inferior del cofre.",awning_kind_pergola_hint:"Un marco fijo con postes delante; la lona se extiende por encima de sus gu\xEDas. Fondo = hasta los postes, Inclinaci\xF3n = pendiente del techo.",awning_kind_side_hint:"Un poste con la lona enrollada a la izquierda, la lona se extiende en horizontal hacia la derecha hasta el poste opuesto. Ancho = extensi\xF3n, Altura sobre el suelo = altura de la lona.",awning_hint:"Ancho = el toldo a lo largo de la pared, fondo = su salida totalmente extendido; la parte trasera del marco va contra la fachada, la altura sobre el suelo es la parte inferior del cofre. Si el cover informa su posici\xF3n mientras se mueve, el toldo sale despacio en 3D; si solo dice abriendo/cerrando, se mueve seg\xFAn el tiempo de salida.",furn_only_color:"Brillar solo en un color",furn_only_color_pick:"Color",furn_only_color_hint:"La l\xE1mpara solo brilla mientras la luz muestra aproximadamente este color, p. ej. amarillo para \xABagua\xBB en el lavabo. Los dem\xE1s colores de la misma luz quedan oscuros aqu\xED.",furn_run_w:"En marcha desde (vatios)",furn_run_w_hint:"A partir de cu\xE1ntos vatios en el sensor de potencia el aparato cuenta como en marcha y brilla (vac\xEDo: 10 W). Para aparatos tras un enchufe inteligente que consumen unos vatios en espera, p. ej. 100.",roof_window_float:"Mostrar sobre la habitaci\xF3n sin el tejado",roof_window_float_hint:"Cuando el tejado se desvanece al acercarte a una planta o una habitaci\xF3n, la ventana se queda en su sitio sobre la habitaci\xF3n: abierta, abatida, con su persiana. Funciona sobre las habitaciones de la planta en la que se apoya el tejado; donde la pendiente baja sobre una planta inferior, las ventanas se quedan en el tejado. Desactivado: solo se ve en el tejado.",tech_ask:"Tubo colocado: \xBFsigue hasta la piscina? Entonces aqu\xED va un pasamuros con su salida al exterior:",tech_ask_loose:"Dejarlo abierto",tech_step_tee:"Toca el tubo donde va la derivaci\xF3n: se corta ah\xED y desde la T trazas la siguiente l\xEDnea.",side_resize:"Arrastra para ensanchar o estrechar la barra lateral",furn_extra:"Valor extra junto al s\xEDmbolo (sensor, p. ej. temperatura del agua)",settings_house:"Casa",settings_weather:"Tiempo y avisos",roof_basics:"Forma del tejado",through_full:"Pantalla completa",through_full_hint:"La imagen de la c\xE1mara en toda la pantalla (Esc o Atr\xE1s para salir). Donde el navegador no puede, se abre la vista de c\xE1mara de Home Assistant, tambi\xE9n con sonido.",director:"Director en directo",director_hint:"Una pantalla muestra sola lo que pasa en casa: suena el timbre y la vista vuela a la puerta y mira por su c\xE1mara. Cada evento est\xE1 apagado hasta que lo actives.",director_here:"Activar en este dispositivo",director_here_hint:"Solo para este navegador, p. ej. la tablet de la pared. En una tarjeta del dashboard el director se activa en los ajustes de la tarjeta.",director_doorbell:"Suena el timbre: volar a la puerta y mirar por la c\xE1mara",director_doorbell_entity:"Timbre",director_doorbell_camera:"C\xE1mara de la puerta",director_no_doorbell:"No se encontr\xF3 ning\xFAn timbre. Elige la entidad event o binary_sensor de tu timbre.",director_motion:"Una c\xE1mara ve a alguien",director_appliances:"Lavadora, secadora o lavavajillas terminados",director_alerts:"Aviso nuevo (humo, agua, alarma, ventana abierta con lluvia \u2026)",director_hold:"Volver tras (segundos)",director_back_hint:"Despu\xE9s la vista vuelve a donde estaba, salvo que alguien haya tocado la pantalla mientras tanto. A quien est\xE9 usando la tablet solo le interrumpen el timbre y los avisos. Con el timbre se queda el doble de tiempo.",voice:"Control por voz",voice_hint:"Un bot\xF3n de micr\xF3fono abajo a la izquierda en la vista 3D: t\xF3calo y habla. \xABMuestra el sal\xF3n\xBB, \xABplanta de arriba\xBB o \xABtoda la casa\xBB muestran el sitio; lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist de Home Assistant.",voice_here:"Activar en este dispositivo",aliases:"Otros nombres para la voz",aliases_hint:"Otros nombres separados por comas, para pedir la \xABSmart TV Pro\xBB como \xABtele del sal\xF3n\xBB o \xABtele\xBB. Los usan el control por voz y la b\xFAsqueda.",aliases_placeholder:"p. ej. tele del sal\xF3n, tele",voice_understands:"Qu\xE9 entiende CasaNeon",voice_examples:"\xABMuestra el sal\xF3n\xBB|\xABVe a la planta de arriba\xBB|\xABMuestra toda la casa\xBB|\xABMuestra la lavadora\xBB / \xAB\xBFD\xF3nde est\xE1 la secadora?\xBB|\xABMuestra la c\xE1mara de la entrada\xBB|\xABMuestra las c\xE1maras\xBB|Todo lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist",voice_needs:"Necesita https, permiso para el micr\xF3fono (en Fully Kiosk: Web Content Settings \u2192 acceso al micr\xF3fono) y una pipeline de Assist con voz a texto. En una tarjeta del dashboard el bot\xF3n se activa en los ajustes de la tarjeta.",voice_showing:"Mostrando {name}.",screen_name:"Nombre de pantalla (para Assist)",screen_name_placeholder:"p. ej. Cocina",screen_name_hint:"Preguntar a Assist (\xABMuestra el sal\xF3n\xBB) o una automatizaci\xF3n que llame al servicio neonplan3d.ask llega a todas las vistas de CasaNeon abiertas. Si el servicio nombra una pantalla, solo reacciona la vista con ese nombre.",voice_button:"Hablar",voice_listen:"Escuchando \u2026",voice_none:"No se entendi\xF3 nada",voice_silent:"El micr\xF3fono solo da silencio. Normalmente lo tiene otra app: en Fully Kiosk desactiva la detecci\xF3n ac\xFAstica de movimiento (Motion Detection \u2192 Acoustic Detection) y recarga.",voice_no_pipeline:"No hay voz a texto configurada en Assist (Ajustes \u2192 Asistentes de voz).",voice_denied:"Micr\xF3fono no permitido: solo funciona con https y con el permiso en el navegador o en Fully Kiosk.",voice_error:"Control por voz: {msg}",card_voice:"Control por voz (bot\xF3n de micr\xF3fono)",card_voice_hint:"\xABMuestra el sal\xF3n\xBB muestra la habitaci\xF3n; las dem\xE1s frases van a Assist. Necesita https y el micr\xF3fono permitido",director_mic_test:"\u{1F399}\uFE0F Probar el micr\xF3fono",director_mic_hint:"Comprueba https, el micr\xF3fono y la voz a texto de Assist en este dispositivo y muestra qu\xE9 habitaci\xF3n abrir\xEDa una frase. No se acciona nada.",voice_pipeline:"Pipeline de Assist en este dispositivo",voice_sentences:"Frases para Assist",voice_sentences_hint:"Lo que Assist pasa a CasaNeon. Preguntas como \xAB\xBFQu\xE9 ventanas est\xE1n abiertas?\xBB las contesta si no Home Assistant; \xABPregunta a la casa qu\xE9 ventanas est\xE1n abiertas\xBB siempre llega a CasaNeon.",voice_pipeline_preferred:"La preferida en Home Assistant",voice_pipeline_no_stt:"sin voz a texto",backdrop:"Fondo",backdrop_kind:"Detr\xE1s de la casa",backdrop_color:"Un color",backdrop_top:"Color arriba",backdrop_bottom:"Color abajo",backdrop_image_url:"Direcci\xF3n de la imagen",backdrop_dim:"Oscurecer",backdrop_image_bad:"Esta direcci\xF3n no sirve: https://\u2026 o una ruta como /local/fondo.jpg",backdrop_hint:"Pon la imagen en config/www de Home Assistant; entonces es /local/nombre.jpg. Oscurecer mantiene legibles las l\xEDneas de ne\xF3n. No cuesta rendimiento, tampoco en tablets antiguas.",director_live:"Imagen en directo al mirar por la c\xE1mara",director_live_hint:"En vez de una foto cada pocos segundos corre el v\xEDdeo de la c\xE1mara (con el reproductor de Home Assistant). Necesita m\xE1s potencia: mejor desactivado en tablets muy antiguas.",director_triggers:"Disparadores propios",director_triggers_hint:"Cuando una de estas entidades se enciende o se abre (un segundo timbre, el port\xF3n del garaje, la puerta del jard\xEDn), la vista vuela all\xED y mira por la c\xE1mara elegida (sin c\xE1mara: al dispositivo).",director_trigger_entity:"Disparador",director_trigger_add:"+ A\xF1adir disparador",card_director:"Director en directo (cabina de c\xE1maras)",card_director_hint:"La tarjeta muestra sola lo que pasa. Qu\xE9 eventos, lo eliges en el editor en \xABDirector en directo\xBB.",card_roof:"Mostrar el tejado",card_roof_hint:"Desactivado: la casa se ve sin tejado, como si no lo tuviera, con las habitaciones abiertas (los campos solares del tejado desaparecen con \xE9l)",room_order_up:"Subir la habitaci\xF3n (antes en la barra de habitaciones)",room_order_down:"Bajar la habitaci\xF3n (despu\xE9s en la barra de habitaciones)",outdoor_area_hint:"Con un \xE1rea, la superficie funciona como una habitaci\xF3n: un toque en 3D la abre con los dispositivos del \xE1rea, aparece en la barra de habitaciones y lleva su nombre.",angle_lock:"Bloqueo 3D",angle_lock_hint:"El \xE1ngulo queda fijo: arrastrar desplaza la vista y el zoom sigue funcionando; nadie gira la casa sin querer.",strip_rise:"Inclinaci\xF3n (\xB0)",strip_rise_hint:"La tira sube a lo largo, p. ej. por la escalera o un pasamanos (~35\u201340\xB0). Su altura sobre el suelo es entonces la de su centro.",wall_slope:"Inclinada",wall_slope_hint:"Pared inclinada: una altura propia en cada esquina y el borde superior recto entre ellas (un cobertizo, una pendiente, ventanas altas en el lado alto). Ventanas y puertas quedan por debajo del borde.",wall_slope_start:"Altura en la esquina {n} (m)",wall_slope_end:"Altura en la esquina {n} (m)",theme_auto:"Auto (D\xEDa/Ne\xF3n seg\xFAn el sol)",markers_room:"En la habitaci\xF3n",pin_size:"Tama\xF1o de los s\xEDmbolos",pin_size_small:"Peque\xF1o",pin_size_normal:"Normal",pin_size_large:"Grande",hh_notes:"Tabl\xF3n (ayudante de texto)",hh_notes_hint:"Un ayudante de texto (input_text) o sensor cuyo texto aparece en \xABHoy en casa\xBB; separa varias l\xEDneas con |. Las automatizaciones escriben en \xE9l (\xABel paquete est\xE1 en el garaje\xBB) y la tarjeta lo muestra.",heat_sensor:"Calefacci\xF3n (sensor)",heat_sensor_hint:"Si el termostato no dice si calienta (las v\xE1lvulas Tuya informan un \xABwork state\xBB), elige aqu\xED ese sensor: encendido/abierto/calentando o una apertura mayor de 0 % hace brillar el radiador.",door_lock:"Cerradura inteligente",door_lock_hint:"La cerradura de la puerta (Nuki, Aqara \u2026): un pin en la puerta muestra cerrada o abierta; un toque la cierra o la abre.",clock:"Reloj",clock_off:"Desactivado",clock_tl:"\u2196 reloj",clock_tr:"\u2197 reloj",clock_bl:"\u2199 reloj",clock_br:"\u2198 reloj",editor_floor:"Planta inicial del editor",editor_floor_auto:"La primera de la lista",editor_floor_hint:"La planta con la que se abre el editor.",director_motion_off:"Desactivado",director_motion_person:"Solo personas",director_motion_all:"Cualquier movimiento",voice_sentences_distinct:"Solo las inequ\xEDvocas (\xABMuestra \u2026\xBB, \xABPregunta a la casa \u2026\xBB, \xABCasa, \u2026\xBB)",voice_sentences_all:"Todas las preguntas (tambi\xE9n las que Home Assistant contesta por s\xED mismo)",voice_sentences_off:"Ninguna (se borra el archivo de frases)",backdrop_look:"El cielo del aspecto (por defecto)",backdrop_gradient:"Degradado",backdrop_image:"Imagen"};function Ut(a,t,e={}){let n=zc[t]??t;for(let[i,o]of Object.entries(e))n=n.replace(`{${i}}`,String(o));return n}function Bt(a,t,e=2){return t.toLocaleString("es",{maximumFractionDigits:e})}var Fc={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function fn(a){return Fc[a]}function al(a,t){var n;let e=`${t} ${String(((n=a.states[t])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(e)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(e)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(e)?"pet":"motion"}function ll(a,t){var n,i;let e=(i=(n=a.entities)==null?void 0:n[t])==null?void 0:i.device_id;return e?Object.values(a.entities??{}).filter(o=>o.device_id===e&&o.entity_id.startsWith("binary_sensor.")).map(o=>o.entity_id).filter(o=>{var s;return["motion","occupancy","presence"].includes(String((s=a.states[o])==null?void 0:s.attributes.device_class))}):[]}function dl(a){let t=(a??"").trim();return!t||/["'()\\\s]/.test(t)?null:/^(https?:\/\/|\/)/i.test(t)||/^data:image\//i.test(t)?t:null}function cl(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function ul(a){try{a?localStorage.setItem("neonplan3d.voice","1"):localStorage.removeItem("neonplan3d.voice")}catch{}}function pl(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function hl(a){try{a.trim()?localStorage.setItem("neonplan3d.screen",a.trim()):localStorage.removeItem("neonplan3d.screen")}catch{}}function fl(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function ml(a){try{a?localStorage.setItem("neonplan3d.voicePipeline",a):localStorage.removeItem("neonplan3d.voicePipeline")}catch{}}var sh=3*6e4;var Jo="neonplan3d.director";function gl(){try{return localStorage.getItem(Jo)==="1"}catch{return!1}}function _l(a){try{a?localStorage.setItem(Jo,"1"):localStorage.removeItem(Jo)}catch{}}var Rc=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function bl(a,t){return t?a.states[t]?[t]:[]:Object.keys(a.states).filter(e=>{let n=a.states[e];if(e.startsWith("event."))return n.attributes.device_class==="doorbell";if(!e.startsWith("binary_sensor."))return!1;let i=`${e} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return Rc.test(i)}).sort()}function vl(a,t,e,n){var d;if(n)return n;let i=a.entities??{},o=(d=i[t])==null?void 0:d.device_id,s=e.filter(u=>u.startsWith("camera.")),r=o?s.find(u=>{var p;return((p=i[u])==null?void 0:p.device_id)===o}):void 0;if(r)return r;let l=u=>{var p,h,f,m;return((p=i[u])==null?void 0:p.area_id)??((m=(f=a.devices)==null?void 0:f[((h=i[u])==null?void 0:h.device_id)??""])==null?void 0:m.area_id)??null},c=l(t);return c&&s.find(u=>l(u)===c)||null}var _e=Math.PI/180;function ne(a){let t=Math.min(a.x0,a.x1),e=Math.max(a.x0,a.x1),n=Math.min(a.z0,a.z1),i=Math.max(a.z0,a.z1);return a.axis==="x"?{u0:t,u1:e,w:i-n,at:(o,s)=>[o,a.flip?i-s:n+s]}:{u0:n,u1:i,w:e-t,at:(o,s)=>[a.flip?e-s:t+s,o]}}function Ie(a){let t=ne(a).w,e=a.eave_a,n=a.eave_b,i=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*_e),o=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*_e);if(a.shape==="flat"||a.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(a.shape==="pent")return{vr:t,rh:e+t*i,y:l=>e+l*i};if(a.shape==="mansard"){let l=kl(t,e,n,i,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(i+o))):t/2,r=e+s*i;return{vr:s,rh:r,y:l=>l<=s?e+l*i:n+(t-l)*o}}var Tc=.14;function $l(a,t){return!a.open&&Math.min(a.base,a.eave_a,a.eave_b)<t-.05}function wl(a,t,e){let n=[];for(let i of a.settings.roof.sections??[]){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let o=ne(i),s=Ie(i),r=t+e+Tc,l=[],c=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*_e),d=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*_e);c>1e-6&&l.push((r-i.eave_a)/c),i.shape==="gable"&&d>1e-6&&l.push(o.w-(r-i.eave_b)/d);for(let u of l)u<=.01||u>=o.w-.01||i.shape==="gable"&&Math.abs(s.y(u)-r)>1e-6||n.push([o.at(o.u0,u),o.at(o.u1,u)])}return n}function Oc(a,t){let e=a.length;if(e<3||Math.abs(t)<1e-9)return a.map(o=>[o[0],o[1]]);let n=Ft(a)>=0?1:-1,i=[];for(let o=0;o<e;o++){let s=a[(o+e-1)%e],r=a[o],l=a[(o+1)%e],c=yl([r[0]-s[0],r[1]-s[1]]),d=yl([l[0]-r[0],l[1]-r[1]]),u=[c[1]*n,-c[0]*n],p=[d[1]*n,-d[0]*n],h=u[0]+p[0],f=u[1]+p[1],m=Math.hypot(h,f);if(m<1e-6){i.push([r[0]+u[0]*t,r[1]+u[1]*t]);continue}let _=(h*u[0]+f*u[1])/m,g=Math.min(4,1/Math.max(.25,_));i.push([r[0]+h/m*t*g,r[1]+f/m*t*g])}return i}function yl(a){let t=Math.hypot(a[0],a[1])||1;return[a[0]/t,a[1]/t]}function Qo(a){let t=a.map(n=>n[0]),e=a.map(n=>n[1]);return{x0:Math.min(...t),z0:Math.min(...e),x1:Math.max(...t),z1:Math.max(...e)}}function xl(a,t,e,n){let i=Tt(a,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!i.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,r=i.map(u=>({a:u.a,b:u.b}));for(let u of r)for(let p of[u.a,u.b])s.set(o(p),[...s.get(o(p))??[],u]);let l=new Set,c=null;for(let u of r){if(l.has(u))continue;l.add(u);let p=[u.a,u.b],h=u.b;for(;;){let f=(s.get(o(h))??[]).find(m=>!l.has(m));if(!f||(l.add(f),h=o(f.a)===o(h)?f.b:f.a,o(h)===o(p[0])))break;p.push(h)}p.length>=3&&o(h)===o(p[0])&&(!c||Math.abs(Ft(p))>Math.abs(Ft(c)))&&(c=p)}if(!c)return null;let d=[];for(let u=0;u<c.length;u++){let p=c[(u+c.length-1)%c.length],h=c[u],f=c[(u+1)%c.length],m=(h[0]-p[0])*(f[1]-h[1])-(h[1]-p[1])*(f[0]-h[0]);Math.abs(m)>1e-6&&d.push(h)}return d.length>=3?Oc(d,e):null}var Hn=Math.tan(30*_e);function kl(a,t,e,n,i){let o=Math.min(a*.3,n>1e-6?2.4/n:a*.3),s=Math.min(a*.3,i>1e-6?2.4/i:a*.3),r=t+o*n,l=e+s*i,c=Math.min(a-s,Math.max(o,(l-r+Hn*(a-s+o))/(2*Hn))),d=r+(c-o)*Hn;return{vla:o,vlb:s,yla:r,ylb:l,vr:c,rh:d,y:p=>p<=o?t+p*n:p<=c?r+(p-o)*Hn:p<=a-s?l+(a-s-p)*Hn:e+(a-p)*i}}function Zo(a,t){let e=ne(a),n=Ie(a),i=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),r=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(v,$)=>[v,$,n.y($)],d=c(r,-o),u=c(l,-o),p=c(l,i+s),h=c(r,i+s),f=Math.tan(Math.min(80,Math.max(0,a.pitch_a))*_e),m=Math.tan(Math.min(80,Math.max(0,a.pitch_b))*_e);if(a.shape==="pent"){let v=[d,u,p,h];return{faces:[v],rim:v,ridges:[[p,h]],gable:[[0,n.y(0)],[i,n.y(i)]]}}if(a.shape==="hip"||a.shape==="pyramid"){let v=a.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,i-n.vr)||i/2),$=[e.u0+v,n.vr,n.rh],k=[e.u1-v,n.vr,n.rh],P=a.shape==="pyramid"?[[d,u,$],[u,p,$],[p,h,$],[h,d,$]]:[[d,u,k,$],[$,k,p,h],[h,d,$],[u,p,k]],M=a.shape==="pyramid"?[[d,$],[h,$],[u,$],[p,$]]:[[$,k],[d,$],[h,$],[u,k],[p,k]];return{faces:P,rim:[d,u,p,h],ridges:M,gable:null}}if(a.shape==="halfhip"){let v=Math.min(n.y(0),n.y(i)),$=v+(n.rh-v)*.55,k=f>1e-6?Math.min(n.vr,($-a.eave_a)/f):n.vr,P=m>1e-6?Math.max(n.vr,i-($-a.eave_b)/m):n.vr,M=Math.min((e.u1-e.u0)/2-.1,(n.rh-$)/Math.max(.2,f)),z=[e.u0+M,n.vr,n.rh],R=[e.u1-M,n.vr,n.rh],A=[r,k,$],w=[r,P,$],x=[l,k,$],E=[l,P,$];return{faces:[[d,u,x,R,z,A],[z,R,E,p,h,w],[w,A,z],[x,E,R]],rim:[d,u,x,E,p,h,w,A],ridges:[[z,R],[A,z],[w,z],[x,R],[E,R]],gable:[[0,n.y(0)],[k,$],[P,$],[i,n.y(i)]]}}if(a.shape==="mansard"){let v=kl(i,a.eave_a,a.eave_b,f,m),$=[r,v.vla,v.yla],k=[l,v.vla,v.yla],P=[r,i-v.vlb,v.ylb],M=[l,i-v.vlb,v.ylb],z=[r,v.vr,v.rh],R=[l,v.vr,v.rh];return{faces:[[d,u,k,$],[$,k,R,z],[z,R,M,P],[P,M,p,h]],rim:[d,u,k,R,M,p,h,P,z,$],ridges:[[z,R],[$,k],[P,M]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[i-v.vlb,v.ylb],[i,n.y(i)]]}}let _=[r,n.vr,n.rh],g=[l,n.vr,n.rh];return{faces:[[d,u,g,_],[_,g,p,h]],rim:[d,u,g,p,h,_],ridges:[[_,g]],gable:[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]]}}function jc(a,t,e){let n=null;for(let i of a.faces){if(!Q([t,e],i.map(v=>[v[0],v[1]])))continue;let[o,s]=i,r=i.slice(2).find(v=>Math.abs((s[0]-o[0])*(v[1]-o[1])-(s[1]-o[1])*(v[0]-o[0]))>1e-9);if(!r)continue;let l=s[0]-o[0],c=s[2]-o[2],d=s[1]-o[1],u=r[0]-o[0],p=r[2]-o[2],h=r[1]-o[1],f=c*h-d*p,m=d*u-l*h,_=l*p-c*u;if(Math.abs(m)<1e-9)continue;let g=o[2]-(f*(t-o[0])+_*(e-o[1]))/m;n=n===null?g:Math.min(n,g)}return n}function Lc(a,t,e){let n=Math.min(a.x0,a.x1),i=Math.max(a.x0,a.x1),o=Math.min(a.z0,a.z1),s=Math.max(a.z0,a.z1);return a.axis==="x"?[t,a.flip?s-e:e-o]:[e,a.flip?i-t:t-n]}function Cc(a){return{x0:Math.min(a.x0,a.x1),x1:Math.max(a.x0,a.x1),z0:Math.min(a.z0,a.z1),z1:Math.max(a.z0,a.z1)}}function Ml(a,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of a){if(s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||i(s)<i(t)*1.5)continue;let r=Cc(s);e<r.x0||e>r.x1||n<r.z0||n>r.z1||(!o||i(s)<i(o))&&(o=s)}return o}function Sl(a,t,e,n){let i=ne(a),o=Ie(a),s=2,r=Math.max(i.u0+.3,Math.min(i.u1-s-.3,(n??(i.u0+i.u1)/2)-s/2)),l=t==="a"?a.eave_a:a.eave_b,c=t==="a"?a.pitch_a:a.pitch_b,d=l+1.4,u=s/2*Math.tan(35*_e),p=d+u,h=Math.max(.8,Math.min(i.w/2-.2,(p-l)/Math.max(.15,Math.tan(Math.min(80,c)*_e)))),f=t==="a"?0:i.w-h,m=t==="a"?h:i.w,_=i.at(r,f),g=i.at(r+s,m);return{id:e,x0:Math.round(Math.min(_[0],g[0])*100)/100,z0:Math.round(Math.min(_[1],g[1])*100)/100,x1:Math.round(Math.max(_[0],g[0])*100)/100,z1:Math.round(Math.max(_[1],g[1])*100)/100,shape:"gable",axis:a.axis==="x"?"z":"x",eave_a:Math.round(d*100)/100,eave_b:Math.round(d*100)/100,pitch_a:35,pitch_b:35,base:Math.round(o.y(t==="a"?0:i.w)*100)/100,overhang:.15,dormer:!0}}function Pl(a,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=ne(t),n=Ie(t).rh,i=Zo(a,{u0:0,u1:0,a:0,b:0}),o=Ie(a),s=f=>{let[m,_]=e.at(f,e.w/2),[g,v]=Lc(a,m,_);return jc(i,g,v)??o.y(v)},r=s(e.u0)<=s(e.u1),l=r?e.u0:e.u1,c=r?e.u1:e.u0,d=r?1:-1,u=Math.abs(c-l),p=c;for(let f=.5;f<u;f+=.05)if(s(l+d*f)>=n-.02){p=l+d*f;break}if(Math.abs(p-c)<.05)return t;let h={...t};return t.axis==="x"?c===e.u1?h.x1=p:h.x0=p:c===e.u1?h.z1=p:h.z0=p,h}function El(a,t,e){let n=ne(t),i=a.floors.flatMap(c=>c.rooms.filter(d=>d.points.length>=3&&c.elevation+c.height>t.base+.05)),o=c=>c.some(d=>i.some(u=>Q(d,u.points))),s=.35,r=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:o(r.map(c=>n.at(c,-s)))?0:e,b:o(r.map(c=>n.at(c,n.w+s)))?0:e,u0:o(l.map(c=>n.at(n.u0-s,c)))?0:e,u1:o(l.map(c=>n.at(n.u1+s,c)))?0:e}}function Al(a,t,e,n,i){let o=[];for(let r of[.2,.5,.8])for(let l of[.2,.5,.8])o.push([t+(n-t)*r,e+(i-e)*l]);let s=a.floors.filter(r=>r.rooms.some(l=>l.points.length>=3&&o.some(c=>Q(c,l.points)))).map(r=>r.elevation+r.height);return s.length?Math.max(...s):null}function Il(a,t){let e=a.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function zi(a){return Ie(a).rh}function zl(a,t=e=>`roof_${e+1}`){var l;let e=((l=a.settings.roof)==null?void 0:l.pitch)??35,n=a.settings.wall_exterior,i=a.floors.filter(c=>c.rooms.some(d=>d.points.length>=3)).sort((c,d)=>d.elevation-c.elevation),o=[],s=[],r=c=>Math.round(c*1e3)/1e3;for(let c of i){let d=c.rooms.filter(k=>k.points.length>=3),u=[...new Set(d.flatMap(k=>k.points.map(P=>r(P[0]))))].sort((k,P)=>k-P),p=[...new Set(d.flatMap(k=>k.points.map(P=>r(P[1]))))].sort((k,P)=>k-P),h=u.length-1,f=p.length-1,m=(k,P)=>k.some(M=>Q(P,M.points)),_=[];for(let k=0;k<f;k++){_.push([]);for(let P=0;P<h;P++){let M=[(u[P]+u[P+1])/2,(p[k]+p[k+1])/2];_[k].push(m(d,M)&&!m(s,M))}}let g=_.map(k=>k.map(()=>!1)),v=(k,P)=>_[P][k]&&!g[P][k],$=c.elevation+c.height;for(let k=0;k<f;k++)for(let P=0;P<h;P++){if(!v(P,k))continue;let M=P;for(;M+1<h&&v(M+1,k);)M++;let z=k;for(;z+1<f&&Array.from({length:M-P+1},(E,S)=>v(P+S,z+1)).every(Boolean);)z++;for(let E=k;E<=z;E++)for(let S=P;S<=M;S++)g[E][S]=!0;let R=u[P]-n,A=u[M+1]+n,w=p[k]-n,x=p[z+1]+n;Math.min(A-R,x-w)<.8||o.push({id:t(o.length),x0:r(R),z0:r(w),x1:r(A),z1:r(x),shape:"gable",axis:A-R>=x-w?"x":"z",eave_a:r($),eave_b:r($),pitch_a:e,pitch_b:e,base:r($),overhang:null})}s.push(...d)}return o}var Ye=Math.PI/180,Fl=1.13,Xo=1.72,Gt=.025,Ue=.07,Rl=.25;function de(a,t){var n;let e=[];for(let i of a.floors){if(t&&i.id!==t)continue;let{walls:o}=Tt(i.rooms,{exterior:a.settings.wall_exterior,interior:a.settings.wall_interior},i.walls??[]);for(let s of o){if(!s.exterior&&!s.free)continue;let r=s.b[0]-s.a[0],l=s.b[1]-s.a[1],c=Math.hypot(r,l);if(c<.5)continue;let d=l/c,u=-r/c,p=Math.min(i.height,s.height??i.height),h=((n=s.sources.find(_=>_.room_id===s.roomLeft))==null?void 0:n.edge)??null,f={floorId:i.id,room:s.roomLeft,edge:h,free:!!s.free},m=(_,g,v,$)=>e.push({key:_,section:null,side:"top",flat:!1,o:g,eu:v,es:[0,1,0],n:$,lu:c,ls:p,pitch:90,span:()=>[0,c],facing:[$[0],$[2]],wall:f});m(`wall:${i.id}:${s.id}`,[s.a[0]+d*s.right,i.elevation,s.a[1]+u*s.right],[r/c,0,l/c],[d,0,u]),s.free&&m(`wall:${i.id}:${s.id}:back`,[s.b[0]-d*s.left,i.elevation,s.b[1]-u*s.left],[-r/c,0,-l/c],[-d,0,-u])}}return e}var Fe="ground";function Hc(a){let t=[...a.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??a.floors[0]??null}function Tl(a,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],i=[-Math.sin(e),0,Math.cos(e)],o=Hc(a),s=n[0]*t.u+i[0]*t.v,r=n[2]*t.u+i[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:Or(o,s,r)):t.base??0;return{key:Fe,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Ct(a,t,e=yt(a)){return t.face===Fe?Tl(a,t):t.face.startsWith("wall:")?de(a,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function Ol(a,t,e){let n=de(a,e),i=a.settings.north??0,o=l=>{let c=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((c-180)*Math.PI/180))},s=[...n].sort((l,c)=>o(c)-o(l))[0];if(!s)return null;let r={...Ti(s,t),portrait:!1,rows:1};return r.cols=Math.max(1,Math.floor((s.lu-.8+Gt)/(Xo+Gt))),r.u=Math.round((s.lu-(r.cols*Xo+(r.cols-1)*Gt))/2*100)/100,r.v=Math.round(Math.max(0,s.ls-Fl-.3)*100)/100,r}function es(a,t){let e=a.floors.flatMap(o=>o.rooms.flatMap(s=>s.points)),n=e.length?Math.max(...e.map(o=>o[0]))+3:0,i=e.length?Math.min(...e.map(o=>o[1])):0;return{id:t,face:Fe,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(a.settings.north??0)||0,look:"black",entity:null}}function ns(a){return a.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function yt(a){let t=a.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>Dc(v,El(a,v,v.overhang??t.overhang)));let e=ns(a);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map($=>$[0])),i=e.rooms.flatMap(v=>v.points.map($=>$[1])),o=a.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,r=Math.max(...n)+o,l=Math.min(...i)-o,c=Math.max(...i)+o,d=e.elevation+e.height;if(t.type==="flat")return[jl("main",null,s,l,r,c,d+Rl)];let u=r-s>=c-l,p=t.ridge==="short"?!u:u,h=(p?c-l:r-s)/2,f=h*Math.tan(t.pitch*Ye),m=(v,$,k)=>p?[v,d+k,(l+c)/2+$]:[(s+r)/2+$,d+k,v],[_,g]=p?[s,r]:[l,c];return[-1,1].map(v=>Fi(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",m(_,v*h,0),m(g,v*h,0),m(_,0,f),t.pitch,()=>[0,g-_]))}function Dc(a,t){let e=ne(a),n=Ie(a),i=(m,_,g)=>{let[v,$]=e.at(m,_);return[v,g,$]},o=Math.max(0,t.a),s=Math.max(0,t.b),r=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-r;if(a.shape==="flat"||a.shape==="parapet"){let m=e.at(r,-o),_=e.at(l,e.w+s);return[jl(a.id,a.id,Math.min(m[0],_[0]),Math.min(m[1],_[1]),Math.max(m[0],_[0]),Math.max(m[1],_[1]),a.eave_a+Rl)]}if(a.shape==="pent")return[Fi(`${a.id}:a`,a.id,"a",i(r,-o,n.y(-o)),i(l,-o,n.y(-o)),i(r,e.w+s,n.y(e.w+s)),a.pitch_a,()=>[0,c])];let d=a.shape==="hip"||a.shape==="pyramid",u=a.shape==="pyramid"?(e.u1-e.u0)/2:d?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,p=d?e.u0+u-r:0,h=d?l-(e.u1-u):0,f=[];if(n.vr>.3){let m=Math.hypot(n.vr+o,n.rh-n.y(-o));f.push(Fi(`${a.id}:a`,a.id,"a",i(r,-o,n.y(-o)),i(l,-o,n.y(-o)),i(r,n.vr,n.rh),a.pitch_a,_=>[p*(_/m),c-h*(_/m)]))}if(e.w-n.vr>.3){let m=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));f.push(Fi(`${a.id}:b`,a.id,"b",i(l,e.w+s,n.y(e.w+s)),i(r,e.w+s,n.y(e.w+s)),i(l,n.vr,n.rh),a.pitch_b,_=>[h*(_/m),c-p*(_/m)]))}if(d){let m=n.y(-o),_=n.y(e.w+s),g=[[`${a.id}:c`,"c",i(r,e.w+s,_),i(r,-o,m),i(e.u0+u,n.vr,n.rh)],[`${a.id}:d`,"d",i(l,-o,m),i(l,e.w+s,_),i(e.u1-u,n.vr,n.rh)]];for(let[v,$,k,P,M]of g){let z=Vc(v,a.id,$,k,P,M);z&&f.push(z)}}return f}function Vc(a,t,e,n,i,o){let s=Dn(Ge(i,n));if(s<.3)return null;let r=ze(Ge(i,n)),l=Ge(o,n),c=l[0]*r[0]+l[1]*r[1]+l[2]*r[2],d=[l[0]-r[0]*c,l[1]-r[1]*c,l[2]-r[2]*c],u=Dn(d);if(u<.3)return null;let p=ze(d),h=ze(Cl(r,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=ze([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/Ye;return{key:a,section:t,side:e,flat:!1,o:n,eu:r,es:p,n:h,lu:s,ls:u,pitch:m,span:g=>{let v=Math.min(1,Math.max(0,g/u));return[c*v,s-(s-c)*v]},facing:[f[0],f[2]]}}function Fi(a,t,e,n,i,o,s,r){let l=ze(Ge(i,n)),c=ze(Ge(o,n)),d=ze(Cl(l,c));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let u=ze([-c[0],0,-c[2]]);return{key:a,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:d,lu:Dn(Ge(i,n)),ls:Dn(Ge(o,n)),pitch:s,span:r,facing:[u[0],u[2]]}}function jl(a,t,e,n,i,o,s){let r=i-e>=o-n,l=r?i-e:o-n,c=r?o-n:i-e;return{key:`${a}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:r?[1,0,0]:[0,0,1],es:r?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:r?[0,1]:[1,0]}}function mn(a){let t=a.module_w||Fl,e=a.module_h||Xo;return a.portrait===!1?[e,t]:[t,e]}function Vn(a){var t;return(t=a.layout)!=null&&t.length?a.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,a.rows)},()=>Math.max(1,a.cols))}function is(a,t){return a.flat?Math.min(45,Math.max(0,t.tilt??15))*Ye:a.wall?Math.min(90,Math.max(0,t.tilt??0))*Ye:0}function gn(a,t){let[e,n]=mn(t),i=Vn(t),o=Math.max(1,...i),r=(i.length-1)*os(a,t)+n*Math.cos(is(a,t));return[o*e+(o-1)*Gt,r]}function os(a,t){let[,e]=mn(t),n=is(a,t);return a.wall?e*Math.cos(n)+Gt:a.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Gt}function be(a,t,e=!1){let[n,i]=mn(t),o=[],s=is(a,t),r=i*Math.cos(s),l=os(a,t),c=Vn(t),d=Math.max(1,...c),u=new Set(t.skip??[]),p=!!a.wall&&n>a.lu+1e-6,h=(m,_,g)=>[a.o[0]+a.eu[0]*m+a.es[0]*_+a.n[0]*g,a.o[1]+a.eu[1]*m+a.es[1]*_+a.n[1]*g,a.o[2]+a.eu[2]*m+a.es[2]*_+a.n[2]*g],f=(m,_)=>{if(a.unbounded)return!0;if(_<-1e-6||_>a.ls+1e-6)return!1;let[g,v]=a.span(_);return m>=g-1e-6&&m<=v+1e-6};return c.forEach((m,_)=>{let g=t.align==="right"?d-m:t.align==="center"?(d-m)/2:0;for(let v=0;v<m;v++){let $=`${_}:${v}`,k=u.has($);if(k&&!e)continue;let P=t.u+(v+g)*(n+Gt),M=t.v+_*l,z=P+n,R=M+(a.flat||a.wall?r:i);if(p){if(!(f((P+z)/2,M)&&f((P+z)/2,R)))continue}else if(![[P,M],[z,M],[z,R],[P,R]].every(([T,L])=>f(T,L)))continue;if(a.wall&&s>.001){let T=Ue+i*Math.sin(s),[L,j]=t.flip?[T,Ue]:[Ue,T],D=[h(P,M,L),h(z,M,L),h(z,R,j),h(P,R,j)],W=t.flip?M:R,Z=[P+.05,z-.05].map(Y=>[h(Y,W,0),h(Y,W,T)]);o.push({corners:D,posts:Z,cell:$,skipped:k});continue}if(!a.flat){o.push({corners:[h(P,M,Ue),h(z,M,Ue),h(z,R,Ue),h(P,R,Ue)],posts:[],cell:$,skipped:k});continue}let A=.15,w=A+i*Math.sin(s),[x,E]=t.flip?[R,M]:[M,R],S=[h(P,x,A),h(z,x,A),h(z,E,w),h(P,E,w)];o.push({corners:S,posts:[P+.05,z-.05].flatMap(T=>[[h(T,x,0),h(T,x,A)],[h(T,E,0),h(T,E,w)]]),cell:$,skipped:k})}}),o}function Ri(a,t){let e=[a.eu[0],a.eu[2]],n=[a.es[0],a.es[2]],i=[t[0]-a.o[0],t[1]-a.o[2]],o=e[0]*n[1]-e[1]*n[0];if(Math.abs(o)<1e-9)return null;let s=(i[0]*n[1]-i[1]*n[0])/o,r=(e[0]*i[1]-e[1]*i[0])/o;if(r<0||r>a.ls)return null;let[l,c]=a.span(r);return s>=l&&s<=c?{u:s,s:r}:null}function Ll(a,t){let e=null;for(let n of a){if(n.wall){let s=[t[0]-n.o[0],t[1]-n.o[2]],r=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(r>=0&&r<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:r,s:Number.NaN};r>=0&&r<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:r,s:Number.NaN,y:-1/0});continue}let i=Ri(n,t);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!e||o>e.y)&&(e={face:n,...i,y:o})}return e?{face:e.face,u:e.u,s:e.s}:null}function _n(a,t){if(a.unbounded)return{u:t.u,v:t.v};let[e,n]=gn(a,t),i=s=>Math.floor(s*100+1e-6)/100;return{u:a.wall&&e>a.lu?Math.round((a.lu-e)/2*100)/100:i(Math.min(Math.max(0,t.u),Math.max(0,a.lu-e))),v:i(Math.min(Math.max(0,t.v),Math.max(0,a.ls-n)))}}function Ti(a,t){let e={id:t,face:a.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:a.flat?15:null,flip:!1,entity:null,look:"black"},[n]=mn(e),i=.4,o=os(a,e),[s,r]=a.span(a.ls/2);for(e.cols=Math.max(1,Math.floor((r-s-2*i+Gt)/(n+Gt))),e.rows=Math.max(1,Math.min(4,Math.floor((a.ls-2*i)/o)));e.cols>1&&be(a,{...e,u:ts(a,e),v:i}).length<e.rows*e.cols;)e.cols--;return e.u=ts(a,e),e.v=i,e}function ss(a,t){let e={...t,face:a.key,tilt:a.flat?t.tilt??15:null,rotation:null,flip:!1};return a.wall&&Object.assign(e,Wc(a,e)),e.u=ts(a,e),e.v=.4,{...e,..._n(a,e)}}function Wc(a,t){let e=i=>Math.floor((a.lu+Gt+1e-6)/(mn({...t,portrait:i})[0]+Gt)),n=t.portrait===!1&&e(!1)<1?!0:t.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...Vn(t)),e(n!==!1))),layout:void 0,skip:void 0}}function ts(a,t){let[e]=mn(t),n=t.cols*e+(t.cols-1)*Gt;return Math.round((a.lu-n)/2*100)/100}function rs(a,t){let e=(Math.atan2(a.facing[0],-a.facing[1])/Ye-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function Oi(a,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/Ye-t+720)%360,o=Math.cos((i-180)*Ye);return n.lu*n.ls*(1.2+o)};return[...a].sort((n,i)=>e(i)-e(n))[0]??null}function Ge(a,t){return[a[0]-t[0],a[1]-t[1],a[2]-t[2]]}function Dn(a){return Math.hypot(a[0],a[1],a[2])}function ze(a){let t=Dn(a)||1;return[a[0]/t,a[1]/t,a[2]/t]}function Cl(a,t){return[a[1]*t[2]-a[2]*t[1],a[2]*t[0]-a[0]*t[2],a[0]*t[1]-a[1]*t[0]]}var Hl=.78,Dl=1.18;function bn(a){return{id:a.id,face:a.face,u:a.u,v:a.v,rows:1,cols:1,portrait:!0,module_w:a.w||Hl,module_h:a.h||Dl}}function Vl(a,t){let e=be(a,bn(t))[0];if(!e)return null;let n=i=>[i[0]-a.n[0]*.05,i[1]-a.n[1]*.05,i[2]-a.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function as(a,t){let e=Hl,n=Dl,[i,o]=a.span(a.ls/2);return{id:t,face:a.key,u:Math.round((i+o-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(a.ls-n,a.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function Wn(a,t,e){let n=Tl(a,t),[i,o]=gn(n,t),s=n.eu[0]*(t.u+i/2)+n.es[0]*(t.v+o/2),r=n.eu[2]*(t.u+i/2)+n.es[2]*(t.v+o/2),l=e*Math.PI/180,c=[Math.cos(l),Math.sin(l)],d=[-Math.sin(l),Math.cos(l)],u=s*c[0]+r*c[1]-i/2,p=s*d[0]+r*d[1]-o/2,h=f=>Math.round(f*100)/100;return{u:h(u),v:h(p),rotation:(Math.round(e)%360+360)%360}}function Nn(a,t){let[e,n]=gn(a,t);return[a.o[0]+a.eu[0]*(t.u+e/2)+a.es[0]*(t.v+n/2),a.o[2]+a.eu[2]*(t.u+e/2)+a.es[2]*(t.v+n/2)]}function ls(a,t,e){let n=e[0]*a.n[0]+e[1]*a.n[1]+e[2]*a.n[2];if(Math.abs(n)<1e-6)return null;let i=((a.o[0]-t[0])*a.n[0]+(a.o[1]-t[1])*a.n[1]+(a.o[2]-t[2])*a.n[2])/n;if(i<=0)return null;let o=[t[0]+e[0]*i-a.o[0],t[1]+e[1]*i-a.o[1],t[2]+e[2]*i-a.o[2]],s=o[0]*a.eu[0]+o[1]*a.eu[1]+o[2]*a.eu[2],r=o[0]*a.es[0]+o[1]*a.es[1]+o[2]*a.es[2];return{t:i,u:s,s:r}}function Wl(a,t,e){if(a.unbounded)return!0;if(e<0||e>a.ls)return!1;let[n,i]=a.span(e);return t>=n&&t<=i}function Nl(a,t,e,n){for(let i of be(a,t)){let o=i.corners.map(d=>{let u=[d[0]-a.o[0],d[1]-a.o[1],d[2]-a.o[2]];return[u[0]*a.eu[0]+u[1]*a.eu[1]+u[2]*a.eu[2],u[0]*a.es[0]+u[1]*a.es[1]+u[2]*a.es[2]]}),[s,r]=[Math.min(...o.map(d=>d[0])),Math.max(...o.map(d=>d[0]))],[l,c]=[Math.min(...o.map(d=>d[1])),Math.max(...o.map(d=>d[1]))];if(e>=s-.05&&e<=r+.05&&n>=l-.05&&n<=c+.05)return!0}return!1}var Yt=.03,ji=a=>a&&a!=="none"?a:null;function cs(a,t=e=>ji(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of a.floors)for(let i of n.furniture){let o=t(i);if(i.type==="meter")e.grid??=o,e.gridExport??=ji(i.export);else if(i.type==="inverter"&&o&&!e.solar.includes(o))e.solar.push(o);else if(i.type==="home_battery"){o&&!e.battery.includes(o)&&e.battery.push(o);let s=ji(i.charge);s&&!e.charge.includes(s)&&e.charge.push(s),(o||s)&&e.batteries.push({power:o,charge:s});let r=ji(i.soc);r&&!e.soc.includes(r)&&e.soc.push(r)}}return e}function us(a){for(let t of a.floors){let e=t.furniture.find(n=>n.type==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return a.energy.meter}function Jl(a){let t=n=>{var i,o;return((o=(i=a.energy_sources)==null?void 0:i.find(s=>s.type===n))==null?void 0:o.stat_energy_from)??null},e=n=>n&&n.startsWith("sensor.")?n:null;return{gas:e(t("gas")),water:e(t("water"))}}function Li(a,t,e="power"){var r,l;if(!t)return null;let n=(l=(r=a.entities)==null?void 0:r[t])==null?void 0:l.device_id;if(!n)return null;let i=Object.keys(a.states).filter(c=>{var d,u,p;return c.startsWith("sensor.")&&((u=(d=a.entities)==null?void 0:d[c])==null?void 0:u.device_id)===n&&((p=a.states[c])==null?void 0:p.attributes.device_class)===e});if(i.length<=1)return i[0]??null;let o=i.filter(c=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(c)),s=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return o.find(c=>s&&c.includes(s))??o[0]??i[0]}function Ql(a,t){var n,i,o,s;let e={};for(let r of t.energy_sources??[])if(r.type==="grid"){let l=((i=(n=r.flow_from)==null?void 0:n[0])==null?void 0:i.stat_energy_from)??((s=(o=r.flow_to)==null?void 0:o[0])==null?void 0:s.stat_energy_to),c=Li(a,l);c&&!e.grid&&(e.grid=c)}else if(r.type==="solar"){let l=Li(a,r.stat_energy_from);l&&!e.solar&&(e.solar=l)}else if(r.type==="battery"){let l=Li(a,r.stat_energy_from??r.stat_energy_to);l&&!e.battery&&(e.battery=l);let c=Li(a,r.stat_energy_from??r.stat_energy_to,"battery");c&&!e.battery_soc&&(e.battery_soc=c)}return e}var Nc=.07;function ve(a,t=!1){if(!a)return null;let e=Number(a.state);if(!Number.isFinite(e))return null;let n=String(a.attributes.unit_of_measurement??"W"),i=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-i:i}function Bc(a,t){var e;return t.startsWith("sensor.")&&((e=a.states[t])==null?void 0:e.attributes.device_class)==="power"}function Zl(a,t){var o,s;if(Bc(a,t))return t;let e=(s=(o=a.entities)==null?void 0:o[t])==null?void 0:s.device_id;if(!e)return null;let n=ha(a,e),i=n?Ne(a,t):null;return zo(a,e).find(r=>r!==t&&(!n||i!==null&&Ne(a,r)===i))??null}function Xl(a,t,e,n=cs(t)){let i=t.energy,o=i.grid??n.grid,s=o?ve(a.states[o],i.grid_invert):null;if(!i.grid&&n.gridExport){let m=Math.max(0,ve(a.states[n.gridExport])??0);s=Math.max(0,s??0)-m}let r=i.solar?ve(a.states[i.solar]):null;if(!i.solar&&n.solar.length){let m=n.solar.map(_=>ve(a.states[_])).filter(_=>_!==null);r=m.length?m.reduce((_,g)=>_+g,0):null}let l=i.battery?ve(a.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let m=n.batteries.map(_=>{if(_.charge){let g=_.power?Math.max(0,ve(a.states[_.power])??0):0,v=Math.max(0,ve(a.states[_.charge])??0);return g-v}return _.power?ve(a.states[_.power],i.battery_invert):null}).filter(_=>_!==null);l=m.length?m.reduce((_,g)=>_+g,0):null}let d=(i.battery_soc?[i.battery_soc]:n.soc).map(m=>{var _;return Number((_=a.states[m])==null?void 0:_.state)}).filter(m=>Number.isFinite(m)),u=d.length?d.reduce((m,_)=>m+_,0)/d.length:NaN,p=i.tariff?a.states[i.tariff]:void 0,h=Number(p==null?void 0:p.state),f=i.consumption?ve(a.states[i.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||r!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,r??0)+(l??0)):e.length&&(f=e.reduce((m,_)=>m+_.power,0)),{grid:s,solar:r===null?null:Math.max(0,r),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function Qe(a,t){return a.pos.push(t),a.adj.push([]),a.pos.length-1}function Je(a,t,e){let n=Math.hypot(a.pos[t][0]-a.pos[e][0],a.pos[t][1]-a.pos[e][1]);a.adj[t].push({to:e,w:n}),a.adj[e].push({to:t,w:n})}function qc(a,t){let e=a.length,n=a.map((i,o)=>{let s=a[(o+1)%e],r=s[0]-i[0],l=s[1]-i[1],c=Math.hypot(r,l)||1,d=-l/c,u=r/c;return{p:[i[0]+d*t[o],i[1]+u*t[o]],d:[r/c,l/c],n:[d,u]}});return a.map((i,o)=>{let s=n[(o-1+e)%e],r=n[o],l=s.d[0]*r.d[1]-s.d[1]*r.d[0];if(Math.abs(l)<1e-6)return[i[0]+r.n[0]*t[o],i[1]+r.n[1]*t[o]];let c=((r.p[0]-s.p[0])*r.d[1]-(r.p[1]-s.p[1])*r.d[0])/l;return[s.p[0]+s.d[0]*c,s.p[1]+s.d[1]*c]})}function Kc(a){return Pt(a.points)>=0?{pts:a.points,flipped:!1}:{pts:[...a.points].reverse(),flipped:!0}}function ps(a,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=Tt(a.rooms,{exterior:t,interior:e},a.walls??[]);for(let o of a.rooms){if(o.points.length<3)continue;let{pts:s,flipped:r}=Kc(o),l=s.length,c=s.map((p,h)=>{let f=r?(l-2-h+l)%l:h,m=i.some(_=>!_.exterior&&_.sources.some(g=>g.room_id===o.id&&g.edge===f));return Nc+(m?e/2:0)}),d=qc(s,c).map(p=>Qe(n,p)),u=d.map((p,h)=>[p,d[(h+1)%l]]);for(let[p,h]of u)Je(n,p,h);n.rings.set(o.id,u)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],r=Ci(n,o.roomLeft,s),l=Ci(n,o.roomRight,s);r!==null&&l!==null&&Je(n,r,l)}return n}function Ci(a,t,e){let n=a.rings.get(t);if(!n)return null;let i=null;for(let s of n){let r=a.pos[s[0]],l=a.pos[s[1]],c=l[0]-r[0],d=l[1]-r[1],u=c*c+d*d||1,p=Math.min(1,Math.max(0,((e[0]-r[0])*c+(e[1]-r[1])*d)/u)),h=[r[0]+c*p,r[1]+d*p],f=Math.hypot(e[0]-h[0],e[1]-h[1]);(!i||f<i.d)&&(i={seg:s,q:h,d:f})}if(!i)return null;let o=Qe(a,i.q);return Je(a,o,i.seg[0]),Je(a,o,i.seg[1]),o}function Hi(a,t,e){let n=a.pos[e],i=Ci(a,t.id,n);if(i===null)return!1;let o=a.pos[i],s=a.pos[a.adj[i][0].to],r=a.pos[a.adj[i][1].to],l=Math.hypot(r[0]-s[0],r[1]-s[1])||1,c=[(r[0]-s[0])/l,(r[1]-s[1])/l],d=(n[0]-o[0])*c[0]+(n[1]-o[1])*c[1],u=(n[1]-o[1])*c[0]-(n[0]-o[0])*c[1];if(Math.abs(d)<.01||Math.abs(u)<.01)return Je(a,e,i),!0;let p=[o[0]+c[0]*d,o[1]+c[1]*d],h=[o[0]-c[1]*u,o[1]+c[0]*u],f=Qe(a,Q(h,t.points)||!Q(p,t.points)?h:p);return Je(a,i,f),Je(a,f,e),!0}function qn(a,t){let e=a.rooms.filter(o=>o.points.length>=3),n=e.find(o=>Q(t,o.points));if(n)return n;let i=null;for(let o of e)for(let s of o.points){let r=Math.hypot(t[0]-s[0],t[1]-s[1]);(!i||r<i.d)&&(i={room:o,d:r})}return(i==null?void 0:i.room)??null}function td(a,t){let e=a.pos.map(()=>1/0),n=a.pos.map(()=>-1),i=a.pos.map(()=>!1);for(e[t]=0;;){let o=-1;for(let s=0;s<e.length;s++)!i[s]&&e[s]<1/0&&(o<0||e[s]<e[o])&&(o=s);if(o<0)break;i[o]=!0;for(let{to:s,w:r}of a.adj[o])e[o]+r<e[s]-1e-9&&(e[s]=e[o]+r,n[s]=o)}return{dist:e,prev:n}}function Bl(a,t){return a.every(e=>t[e].kind==="battery")?"battery":a.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var ql=new WeakMap;function Uc(a,t){let e=us(a),n=a.floors.find(d=>d.id===e.floor_id),i=[],{wall_exterior:o,wall_interior:s}=a.settings,r=new Map,l=new Map;t.forEach((d,u)=>l.set(d.floorId,[...l.get(d.floorId)??[],u]));let c=a.floors.filter(d=>l.has(d.id));for(let d of c){if(d.id===n.id)continue;let u=d.elevation>n.elevation,p=l.get(d.id),h=Bl(p,t);i.push({floorId:n.id,a:[e.x,Yt,e.z],b:[e.x,u?n.height:-.2,e.z],dist:0,members:p,kind:h});let f=Math.abs(d.elevation-n.elevation);i.push({floorId:d.id,a:[e.x,u?-.2:d.height,e.z],b:[e.x,Yt,e.z],dist:f,members:p,kind:h}),r.set(d.id,f+.25)}for(let d of c){let u=ps(d,o,s),p=qn(d,[e.x,e.z]);if(!p)continue;let h=Qe(u,[e.x,e.z]);if(!Hi(u,p,h))continue;let f=[];for(let $ of l.get(d.id)){let k=t[$],P=qn(d,[k.x,k.z]);if(!P)continue;let M=Qe(u,[k.x,k.z]);Hi(u,P,M)&&f.push({node:M,member:$})}let{dist:m,prev:_}=td(u,h),g=new Map;for(let $ of f)if(Number.isFinite(m[$.node]))for(let k=$.node;_[k]>=0;k=_[k]){let P=_[k],M=`${P}>${k}`,z=g.get(M)??{a:P,b:k,members:[]};z.members.push($.member),g.set(M,z)}let v=r.get(d.id)??0;for(let{a:$,b:k,members:P}of g.values()){let M=u.pos[$],z=u.pos[k],R=Bl(P,t);i.push({floorId:d.id,a:[M[0],Yt,M[1]],b:[z[0],Yt,z[1]],dist:v+m[$],members:P,kind:R})}}return i}function ed({building:a,consumers:t,summary:e,battery:n,fieldPower:i,devicePower:o}){var w;let s=us(a);if(!s)return[];let r=a.floors.find(x=>x.id===s.floor_id);if(!r)return[];let l=x=>o==null?void 0:o.get(x),c=ds(a,"inverter"),d=ds(a,"home_battery");!d.length&&n&&d.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=x=>{let E=null;for(let S of c)S.floorId===x.floorId&&(!E||Math.hypot(S.x-x.x,S.z-x.z)<Math.hypot(E.x-x.x,E.z-x.z))&&(E=S);return E},p=x=>l(x.id)??(d.length===1?e.battery??0:0),h=new Map;for(let x of d){let E=u(x);E&&h.set(x.id,E)}let f=t.map(x=>({floorId:x.floorId,x:x.x,z:x.z,kind:x.wallbox?"wallbox":"consumer",power:x.power}));for(let x of d)!h.has(x.id)&&e.battery!==null&&f.push({floorId:x.floorId,x:x.x,z:x.z,kind:"battery",power:Math.abs(p(x))});let m=`${s.floor_id}:${s.x},${s.z}|${f.map(x=>`${x.floorId}:${x.x},${x.z}:${x.kind}`).join(";")}`,_=ql.get(a);_||ql.set(a,_=new Map);let g=_.get(m);g||(g=Uc(a,f),_.clear(),_.set(m,g));let v=g.map(x=>({floorId:x.floorId,a:x.a,b:x.b,dist:x.dist,power:x.members.reduce((E,S)=>E+f[S].power,0),kind:x.kind})),$=e.grid!==null?hs(a):null,k=a.settings.roof.cables??[],P=x=>k.find(E=>E.id===x),M=(x,E)=>x.map(S=>({...S,key:E}));if($){let x=e.grid>=0,E=P("grid"),S=E?Bn(a,E,[$.end[0],r.elevation+Math.max(Yt,$.height),$.end[1]],[s.x,r.elevation+.4+1.1,s.z]):[...$.height>.05?[[$.end[0],$.height,$.end[1]]]:[],[$.end[0],Yt,$.end[1]],[$.wall[0],Yt,$.wall[1]],[s.x,Yt,s.z]],T=E?vn(a,x?S:[...S].reverse(),Math.abs(e.grid),x?"grid":"export",r):id(r.id,x?S:[...S].reverse(),Math.abs(e.grid),x?"grid":"export",0);v.push(...M(T,"grid"))}if(e.battery!==null&&e.battery>0)for(let x of v)x.kind==="battery"&&([x.a,x.b]=[x.b,x.a]);let z=a.settings.roof.solar??[],R=a.settings.roof.strings??[],A=new Map;if(i&&z.length){let x=[...yt(a),...de(a)];for(let E of z){let S=i.get(E.id)??0,T=E.string?(w=R.find(X=>X.id===E.string))==null?void 0:w.inverter:null,L=T?d.find(X=>X.id===T)??null:null,j=T&&!L?c.find(X=>X.id===T)??null:null;if(L){let X=h.get(L.id);X&&A.set(X.id,(A.get(X.id)??0)+S);let it=L.variant==="wall"?.5+L.h:.9,q=P(`solar:${E.id}`),ft=q?Gl(a,E):null,It=a.floors.find(Jt=>Jt.id===L.floorId);q&&ft&&It?v.push(...M(vn(a,Bn(a,q,ft,[L.x,It.elevation+it,L.z]),S,"solar",It),`solar:${E.id}`)):v.push(...M(Yl(a,E,S,L,it),`solar:${E.id}`));continue}if(!j&&c.length){let X=Ct(a,E,x),it=X?Nn(X,E):[E.u,E.v];j=c.reduce((q,ft)=>!q||Math.hypot(ft.x-it[0],ft.z-it[1])<Math.hypot(q.x-it[0],q.z-it[1])?ft:q,null)}j&&A.set(j.id,(A.get(j.id)??0)+S);let D=j??{floorId:s.floor_id,x:s.x,z:s.z},W=j?1.1+j.h:1.5,Z=P(`solar:${E.id}`),Y=Z?Gl(a,E):null,tt=a.floors.find(X=>X.id===D.floorId);Z&&Y&&tt?v.push(...M(vn(a,Bn(a,Z,Y,[D.x,tt.elevation+W,D.z]),S,"solar",tt),`solar:${E.id}`)):v.push(...M(Yl(a,E,S,D,W),`solar:${E.id}`))}}else e.solar!==null&&!c.length&&v.push({floorId:r.id,a:[s.x+.08,r.height+.6,s.z+.08],b:[s.x+.08,Yt,s.z+.08],dist:0,power:e.solar,kind:"solar"});for(let x of c){let E=1.1+x.h,S=d.filter(j=>h.get(j.id)===x),T=l(x.id);if(T===void 0){T=A.get(x.id)??(c.length===1?e.solar??0:0);for(let j of S)T+=p(j)}let L=a.floors.find(j=>j.id===x.floorId);if(e.solar!==null||e.battery!==null){let j=P(`inv:${x.id}`),D=j&&L?vn(a,Bn(a,j,[x.x,L.elevation+E,x.z],[s.x,r.elevation+1.5,s.z]),Math.max(0,T),"inverter",L):Ul(a,x,E,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,T),"inverter",0);v.push(...M(D,`inv:${x.id}`))}for(let j of S){let D=p(j);if(e.battery===null&&l(j.id)===void 0)continue;let W=j.variant==="wall"?.5+j.h:.9,Z=P(`bat:${j.id}`),Y=Z&&L?vn(a,Bn(a,Z,[x.x,L.elevation+E-.1,x.z],[j.x,L.elevation+W,j.z]),Math.abs(D),"battery",L):Ul(a,x,E-.1,j,W,Math.abs(D),"battery",0);v.push(...M(D<=0?Y:Y.map(tt=>({...tt,a:tt.b,b:tt.a})).reverse(),`bat:${j.id}`))}}return v}function hs(a){var h;let t=us(a),e=t?a.floors.find(f=>f.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:i}=a.settings,{walls:o}=Tt(e.rooms,{exterior:n,interior:i},e.walls??[]),s=ds(a,"grid_point")[0],r=o.filter(f=>f.exterior);if(s){let f=null;for(let g of r){let v=g.b[0]-g.a[0],$=g.b[1]-g.a[1],k=s.x-t.x,P=s.z-t.z,M=k*$-P*v;if(Math.abs(M)<1e-9)continue;let z=((g.a[0]-t.x)*$-(g.a[1]-t.z)*v)/M,R=((g.a[0]-t.x)*P-(g.a[1]-t.z)*k)/M;if(z<=0||z>1||R<0||R>1||f&&z>=f.t)continue;let A=Math.hypot(v,$)||1;f={q:[t.x+k*z,t.z+P*z],out:[$/A,-v/A],t:z}}let m=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[t.x,t.z],_=((h=a.floors.flatMap(g=>g.furniture).find(g=>g.id===s.id))==null?void 0:h.mount_y)??0;return{floorId:e.id,wall:m,end:[s.x,s.z],height:Math.max(0,_)}}let l=null;for(let f of r){let m=f.b[0]-f.a[0],_=f.b[1]-f.a[1],g=m*m+_*_||1,v=Math.min(1,Math.max(0,((t.x-f.a[0])*m+(t.z-f.a[1])*_)/g)),$=[f.a[0]+m*v,f.a[1]+_*v],k=Math.hypot(t.x-$[0],t.z-$[1]),P=Math.sqrt(g);(!l||k<l.d)&&(l={q:$,out:[_/P,-m/P],d:k})}if(!l)return null;let{q:c,out:d}=l,u=0;for(let f of a.floors)for(let m of f.outdoor??[]){let _=m.points.length;for(let g=0;g<_;g++){let v=m.points[g],$=m.points[(g+1)%_],k=$[0]-v[0],P=$[1]-v[1],M=d[0]*P-d[1]*k;if(Math.abs(M)<1e-9)continue;let z=((v[0]-c[0])*P-(v[1]-c[1])*k)/M,R=((v[0]-c[0])*d[1]-(v[1]-c[1])*d[0])/M;z>0&&R>=0&&R<=1&&(u=Math.max(u,Math.min(15,z)))}}let p=u>n+1?u:n+2.5;return{floorId:e.id,wall:[c[0]+d[0]*(n/2+.05),c[1]+d[1]*(n/2+.05)],end:[c[0]+d[0]*p,c[1]+d[1]*p],height:0}}function ds(a,t){let e=[];for(let n of a.floors)for(let i of n.furniture)i.type===t&&e.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return e}var Kl=new WeakMap;function nd(a,t,e,n){let i=`${t.id}:${e.join(",")}>${n.join(",")}`,o=Kl.get(a);o||Kl.set(a,o=new Map);let s=o.get(i);if(s)return s;let{wall_exterior:r,wall_interior:l}=a.settings,c=ps(t,r,l),d=[e,n],u=qn(t,e),p=qn(t,n);if(u&&p){let h=Qe(c,e),f=Qe(c,n);if(Hi(c,u,h)&&Hi(c,p,f)){let{dist:m,prev:_}=td(c,h);if(Number.isFinite(m[f])){d.length=0;for(let g=f;g>=0;g=_[g])d.unshift(c.pos[g])}}}return o.set(i,d),d}function Ul(a,t,e,n,i,o,s,r){let l=a.floors.find(u=>u.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let c=nd(a,l,[t.x,t.z],[n.x,n.z]),d=[[t.x,e,t.z],...c.map(u=>[u[0],Yt,u[1]]),[n.x,i,n.z]];return id(l.id,d,o,s,r)}function id(a,t,e,n,i){let o=[];for(let s=0;s+1<t.length;s++){let r=t[s],l=t[s+1],c=Math.hypot(l[0]-r[0],l[1]-r[1],l[2]-r[2]);c<1e-4||(o.push({floorId:a,a:r,b:l,dist:i,power:e,kind:n}),i+=c)}return o}function Bn(a,t,e,n){let i=a.floors.find(s=>s.id===t.floor_id),o=((i==null?void 0:i.elevation)??0)+Math.max(Yt,t.height);return[e,...t.points.map(s=>[s[0],o,s[1]]),n]}function Gl(a,t){let e=Ct(a,t,[...yt(a),...de(a)]);if(!e)return null;let[n,i]=gn(e,t),o=t.u+n/2,s=e.unbounded?t.v+i/2:t.v;return[e.o[0]+e.eu[0]*o+e.es[0]*s,e.o[1]+e.eu[1]*o+e.es[1]*s,e.o[2]+e.eu[2]*o+e.es[2]*s]}function Gc(a,t,e){let{wall_exterior:n,wall_interior:i}=a.settings,o=ps(t,n,i),s=qn(t,e),r=s?Ci(o,s.id,e):null;return r===null?e:o.pos[r]}function vn(a,t,e,n,i){let o=[...a.floors].sort((c,d)=>c.elevation-d.elevation),s=c=>{let d=i;for(let u of o)c>=u.elevation-.01&&(d=u);return d},r=[],l=0;for(let c=0;c+1<t.length;c++){let d=t[c],u=t[c+1];if(Math.hypot(u[0]-d[0],u[1]-d[1],u[2]-d[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-d[1])>.01){let f=Math.min(d[1],u[1]),m=Math.max(d[1],u[1]);for(let _ of o)_.elevation>f+.01&&_.elevation<m-.01&&h.push(_.elevation);u[1]<d[1]&&h.reverse()}for(let f of[...h,u[1]]){let m=(f-d[1])/(u[1]-d[1]||1),_=Math.abs(u[1]-d[1])>.01?[d[0]+(u[0]-d[0])*m,f,d[2]+(u[2]-d[2])*m]:u,g=s((d[1]+_[1])/2),v=Math.hypot(_[0]-d[0],_[1]-d[1],_[2]-d[2]);v>1e-4&&r.push({floorId:g.id,a:[d[0],d[1]-g.elevation,d[2]],b:[_[0],_[1]-g.elevation,_[2]],dist:l,power:e,kind:n}),l+=v,d=_}}return r}function Yl(a,t,e,n,i){let o=[...yt(a),...de(a)],s=Ct(a,t,o),r=a.floors.find(_=>_.id===n.floorId);if(!s||!r)return[];let[l,c]=gn(s,t),d=(_,g)=>[s.o[0]+s.eu[0]*_+s.es[0]*g,s.o[1]+s.eu[1]*_+s.es[1]*g,s.o[2]+s.eu[2]*_+s.es[2]*g],u=t.u+l/2,p=r.elevation+Yt,h=[],f;if(s.unbounded){let _=d(u,t.v+c/2);f=[_[0],p,_[2]],h.push(f)}else if(s.wall){let _=d(u,t.v);f=[_[0],p,_[2]],h.push(_,f)}else{let _=d(u,t.v),g=ns(a)??r,v=Math.max(r.elevation+.5,Math.min(_[1]-.25,g.elevation+g.height-.12));f=[_[0],v,_[2]],h.push(_)}let m=Gc(a,r,[f[0],f[2]]);h.push([m[0],f[1],m[1]]),Math.abs(f[1]-p)>.05&&h.push([m[0],p,m[1]]);for(let _ of nd(a,r,m,[n.x,n.z]).slice(1))h.push([_[0],p,_[1]]);return h.push([n.x,r.elevation+i,n.z]),vn(a,h,e,"solar",r)}var sd=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Yc={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Jc={back:0,right:90,front:180,left:270};function rd(a,t,e){let n=At(a.points),i=n.x1-n.x0,o=n.z1-n.z0,s=Yc[t],r=[],l=(d,u,p,h,f)=>{let[m,_,g]=f??se[d];r.push({id:e(),type:d,x:od(u),z:od(p),rotation:h,w:m,d:_,h:g,variant:null,entity:null,power:null})},c=.02;for(let d of s.rows){let u=d.items.map(_=>({type:_.type,size:_.size??se[_.type]})),p=d.wall==="back"||d.wall==="front"?i:o,h=[],f=0;for(let _ of u){if(f+_.size[0]>p-.1)break;h.push(_),f+=_.size[0]}let m=d.align==="start"?.05:d.align==="end"?p-f-.05:(p-f)/2;for(let _ of h){let[g,v]=_.size,$=m+g/2,k=v/2+c;d.wall==="back"?l(_.type,n.x0+$,n.z0+k,0,_.size):d.wall==="front"?l(_.type,n.x1-$,n.z1-k,180,_.size):d.wall==="right"?l(_.type,n.x1-k,n.z0+$,90,_.size):l(_.type,n.x0+k,n.z1-$,Jc.left,_.size),m+=g}}for(let d of s.free){let[u,p]=d.size??se[d.type],h=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*d.at[0])),f=Math.min(n.z1-p/2-.05,Math.max(n.z0+p/2+.05,n.z0+o*d.at[1]));l(d.type,h,f,d.rotation,d.size)}return r}var od=a=>Math.round(a*1e3)/1e3;var Ze=new Map,fs=new Map,ad=new Map;async function Qc(a,t){return a.callWS({type:"neonplan3d/modules/code",pack_id:t})}async function Zc(a,t){let e=await Qc(a,t.id);if(e.api!==1)return null;let n=URL.createObjectURL(new Blob([e.code],{type:"text/javascript"}));try{let o=(await import(n)).default;if(!o||o.api!==1||typeof o.id!="string")return null;let s=ad.get(t.id);s&&URL.revokeObjectURL(s),ad.set(t.id,n);let r={id:t.id,release:e.release,module:o};return Ze.set(t.id,r),r}catch(i){throw URL.revokeObjectURL(n),i}}async function ms(a,t){let e=new Map(t.filter(n=>n.module&&n.module.api===1).map(n=>[n.id,n]));for(let n of[...Ze.keys()])e.has(n)||Ze.delete(n);await Promise.all([...e.values()].map(n=>{let i=Ze.get(n.id);if(i&&i.release===(n.release??1))return Promise.resolve(i);let o=fs.get(n.id);return o||(o=Zc(a,n).catch(s=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,s),null)).finally(()=>fs.delete(n.id)),fs.set(n.id,o)),o}))}function ld(a){var e,n;let t=[];for(let i of Ze.values())try{t.push(...((n=(e=i.module).help)==null?void 0:n.call(e,a))??[])}catch{}return t}function dd(a,t){return Xc(e=>{var n;return(n=e.areaFields)==null?void 0:n.call(e,a,t)})}function cd(){for(let a of Ze.values())if(a.module.pipes)return a.module.pipes;return null}function Xc(a){let t=[];for(let e of Ze.values())try{t.push(...a(e.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${e.id} failed`,n)}return t}function tu(a){return{a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,rightward:!0}}var gs={walls(a,t,e){let n=a.floors.find(o=>o.id===t),i=n==null?void 0:n.rooms.find(o=>o.id===e);return!n||!i||i.points.length<3?[]:i.points.map((o,s)=>{let r=ke(i,s),l=le(n,i.id,r.a,r.b),c=[...Me(r,n,i).map(d=>[d.s0,d.s1]),...cn(r,n).filter(d=>d.y0<.05).map(d=>[d.s0,d.s1])];return{roomId:i.id,edge:s,a:r.a,b:r.b,u:r.u,n:r.n,length:r.length,shared:l,thickness:l?a.settings.wall_interior:a.settings.wall_exterior,taken:c}})},onWall(a,t,e){return Zt(tu(a),t,e)},freeSpot(a,t,e=.1){let n=o=>o>=e&&o+t<=a.length-e&&!a.taken.some(([s,r])=>o<r+.05&&o+t>s-.05),i=a.length/2-t/2;for(let o=0;o<=a.length;o+=.05){if(n(i-o))return Math.round((i-o)*100)/100;if(n(i+o))return Math.round((i+o)*100)/100}return null},nodeAt(a,t,e){let n=a.floors.find(r=>r.id===t),i=n==null?void 0:n.outdoor.find(r=>r.id===e);if(!n||!i)return()=>null;let o=ht(a,n,i),s=i.pool??{};return r=>{let{kind:l,id:c,port:d}=ct(r),u=l==="joint"?(s.joints??[]).find(h=>h.id===c):void 0;if(u)return Pe(u,d);let p=l==="port"?(s.ports??[]).find(h=>h.id===c):void 0;return p?o(r)??{x:p.x,y:.02,z:p.z}:o(r)}},connect(a,t,e,n,i,o){var l;let s=a.floors.find(c=>c.id===t),r=s==null?void 0:s.outdoor.find(c=>c.id===e);return!s||!r?{pipes:[],joints:[]}:hn({...n,floorId:t},gs.nodeAt(a,t,e),((l=r.pool)==null?void 0:l.joints)??[],i,o)}};var yn=ie`
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
`,Di=ie`
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
`;var ud=40,_s=class extends qt{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=s=>{let r=`${s.label} ${s.id}`.toLowerCase();return e.every(l=>r.includes(l))},i=this.fixed.filter(s=>!t||n(s)),o=t?this.options.filter(n):this.options;return[...i,...o.slice(0,ud)]}get leftOut(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=t?this.options.filter(i=>e.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-ud)}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[];return b`<div class="wrap">
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
            ${e.length?y:b`<li class="empty">–</li>`}
            ${e.map((n,i)=>b`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?b`<small>${n.id}</small>`:y}
              </li>`)}
            ${this.leftOut>0?b`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:y}
          </ul>`:y}
    </div>`}static styles=[yn,ie`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",_s);var eu=new URL(import.meta.url),nu=new URL("./neonplan3d-3d.js?v=e00245ce6995",eu).href,pd;function Vi(){return pd??=import(nu),pd}function Re(a,t){if(!De(t))return Ut(a,`furn_${t}`);let e=$t(t);return e?oe(e):Ut(a,"pack_missing_item")}var bs=class extends qt{static properties={hass:{attribute:!1},packs:{attribute:!1},building:{attribute:!1},_packMsg:{state:!0}};constructor(){super(),this._packMsg=null}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!1}t(t,e){return Ut(this.hass,t,e)}render(){let t=Ja();return b`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new?labels=enhancement" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href=${qe("extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${Ai.filter(e=>Ee(e)).map(e=>b`<div class="fp3d-ext-feature ${t.has(e)?"fp3d-ext-on":""}">
              <b>${t.has(e)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${e}`)}</b>
              <span class="fp3d-sub">${this.t(`pro_feature_${e}`)}</span>
              <span class="fp3d-ext-links">
                ${t.has(e)?b`<span class="fp3d-ext-state">${this.t("ext_active")}</span>`:y}
                <a class="fp3d-ext-link" href=${qe(e)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderFun(t)} ${this.renderPacks()}
    </div>`}editBuilding(t){if(!this.building)return;let e=structuredClone(this.building);t(e),this.dispatchEvent(new CustomEvent("building-edit",{detail:e,bubbles:!0,composed:!0}))}renderFun(t){var c,d;let e=Ii.filter(u=>t.has(u));if(!e.length)return y;let n=((c=this.building)==null?void 0:c.settings.pets)??null,i=(n==null?void 0:n.list)??[],o=(n==null?void 0:n.on)!==!1,s=(((d=this.building)==null?void 0:d.floors)??[]).filter(u=>u.rooms.length).sort((u,p)=>u.elevation-p.elevation),r=u=>this.editBuilding(p=>{var f,m;let h={on:((f=p.settings.pets)==null?void 0:f.on)!==!1,list:[...((m=p.settings.pets)==null?void 0:m.list)??[]]};u(h),p.settings.pets=h}),l=(u,p)=>r(h=>h.list=h.list.map(f=>f.id===u?{...f,...p}:f));return b`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${e.map(u=>u==="fun_halloween"?this.renderHalloween():b`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>✓ ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isAdmin&&this.building?b`<label class="fp3d-check"><input type="checkbox" .checked=${o} @change=${p=>r(h=>h.on=p.target.checked)} /> ${this.t("pets_show")}</label>
                    ${i.map(p=>b`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${h=>{let f=h.target.value,m=Fn[f];l(p.id,{kind:f,fur:m.includes(p.fur)?p.fur:m[0],breed:f==="dog"?p.breed??"labrador":null})}}
                        >
                          ${["cat","dog","rabbit"].map(h=>b`<option value=${h} ?selected=${p.kind===h}>${this.t(`pet_kind_${h}`)}</option>`)}
                        </select>
                        ${p.kind==="dog"?b`<select aria-label=${this.t("pet_breed")} @change=${h=>l(p.id,{breed:h.target.value})}>
                              ${Pr.map(h=>b`<option value=${h} ?selected=${(p.breed??"labrador")===h}>${this.t(`pet_breed_${h}`)}</option>`)}
                            </select>`:y}
                        <input type="text" maxlength="30" .value=${p.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${h=>l(p.id,{name:h.target.value.trim()})} />
                        <select aria-label=${this.t("pet_fur")} @change=${h=>l(p.id,{fur:h.target.value})}>
                          ${Fn[p.kind].map(h=>b`<option value=${h} ?selected=${p.fur===h}>${this.t(`pet_fur_${h}`)}</option>`)}
                        </select>
                        ${s.length>1?b`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${h=>l(p.id,{floor_id:h.target.value||null})}>
                              ${s.map((h,f)=>b`<option value=${f===0?"":h.id} ?selected=${(p.floor_id??s[0].id)===h.id}>🏠 ${h.name}</option>`)}
                            </select>`:y}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${()=>r(h=>h.list=h.list.filter(f=>f.id!==p.id))}>✕</button>
                      </div>`)}
                    ${i.length<8?b`<button class="fp3d-btn" @click=${()=>r(p=>p.list.push({id:`pet_${Date.now().toString(36)}`,kind:"cat",name:"",fur:Fn.cat[p.list.length%Fn.cat.length]}))}>+ ${this.t("pet_add")}</button>`:y}`:y}
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
          >`:y}
    </div>`}renderPacks(){let t=this.packs??[];return b`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${t.map(e=>{var n;return b`<div class="fp3d-pack">
          <div>
            <b>${fe(e)}</b>
            <span class="fp3d-sub">${(n=e.features)!=null&&n.length?this.t("pack_features",{publisher:e.publisher,n:e.features.length}):this.t("pack_by",{publisher:e.publisher,n:e.items.length})}</span>
            ${e.licensee?b`<span class="fp3d-sub">${this.t("pack_licensed",{name:e.licensee})}${e.release&&e.release>1?` \xB7 v${e.release}`:""}</span>`:y}
            ${(e.features??[]).some(i=>!Ya(i))?b`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:y}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(e)}>${this.t("pack_remove")}</button>
        </div>`})}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${e=>this.importPackFile(e)} />
      </label>
      ${this._packMsg?b`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let i=[],o=[];for(let r of n)try{let l=await Zs(this.hass,await r.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:c,message:d}=l??{},u=`pack_error_${c}`,p=this.t(u,{detail:d??String(l)});o.push(`${r.name}: ${p===u?this.t("pack_error_other",{detail:d??String(l)}):p}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...s,...i,...o].join(" \xB7 ")}}async deletePack(t){!this.hass||!confirm(this.t("pack_remove_confirm",{name:fe(t)}))||(await Xs(this.hass,t.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[yn,Di,ie`
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
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",bs);var Wi=10,md=new Set(["vertex","room","device","opening","furniture","furnset","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),gd=100,_d=/^(switch|input_boolean)\./,vs={base:["kitchen","sink","stove","dishwasher","sideboard","dresser","tv_board","nightstand","washbasin","washer","dryer","worktop","desk"],hang:["kitchen_wall","tv_wall","shelf","lamp_wall","radiator","ac_unit","led_strip"],tall:["kitchen_tall","fridge","wardrobe","tall_cabinet","shelf","coat_rack"],living:["sofa","armchair","bed","bunk_bed","bench","corner_bench","plant"],light:["lamp_wall","lamp_floor","led_strip","lamp_table","wall_switch"]},ru=new Set(["kitchen_wall","tv_wall","lamp_wall","shelf","led_strip","ac_unit"]),Ni=new Set(["kitchen","kitchen_wall","kitchen_tall","sideboard","dresser","tv_board","worktop","wardrobe","tall_cabinet","shelf","desk"]),au={kitchen:.15,kitchen_wall:.2,kitchen_tall:.3,sideboard:.4,dresser:.4,tv_board:.6,worktop:.1,wardrobe:.4,tall_cabinet:.3,shelf:.25,desk:.6},Bi=10,I=a=>Math.round(a*1e3)/1e3,ys=.06;function xs(a,t){if(a.length<3)return a.slice(1);let e=a[0],n=a[a.length-1],i=0,o=-1,s=Math.hypot(n.s-e.s,n.y-e.y)||1;for(let r=1;r<a.length-1;r++){let l=a[r],c=Math.abs((n.s-e.s)*(e.y-l.y)-(e.s-l.s)*(n.y-e.y))/s;c>i&&([i,o]=[c,r])}return i<=t||o<0?[]:[...xs(a.slice(0,o+1),t),a[o],...xs(a.slice(o),t)]}function lu(a){if(a.length<2)return a;let t=s=>Math.round(s*20)/20,e=[{s:a[0].s,y:a[0].y}];for(let s=1;s<a.length;s++){let r=e[e.length-1],l=a[s],d=Math.abs(l.s-r.s)>=Math.abs(l.y-r.y)?{s:t(l.s),y:r.y}:{s:r.s,y:t(l.y)},u=e.length>1?e[e.length-2]:null;u&&(u.y===r.y&&d.y===r.y||u.s===r.s&&d.s===r.s)&&e.pop(),!(Math.hypot(d.s-e[e.length-1].s,d.y-e[e.length-1].y)<.08&&s<a.length-1)&&e.push(d)}let n=a[a.length-1],i=e[e.length-1];e.pop();let o=e[e.length-1];return o&&Math.abs(n.s-o.s)>=.08&&Math.abs(n.y-o.y)>=.08&&e.push(o.y===i.y||e.length<2?{s:t(n.s),y:o.y}:{s:o.s,y:t(n.y)}),e.push({s:n.s,y:n.y}),e}function Xe(a,t,e){let[n,,i]=Xt(a,t,0,e);return[I(n),I(i)]}function $s(a,t){let e=Kt(a,t),n=0;for(let i=1;i<e.length;i++)n+=Math.hypot(e[i][0]-e[i-1][0],e[i][1]-e[i-1][1],e[i][2]-e[i-1][2]);return n}var bd={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},du=new Set(["parking","stairwell","rug","grid_point","waste_bin","mailbox","wall_switch","wall_socket"]),ks=class extends qt{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideMin:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_multi:{state:!0},_single:{state:!0},_multiMode:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_furnQuery:{state:!0},_libOpen:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallMulti:{state:!0},_wallSingle:{state:!0},_wallGap:{state:!0},_wallCat:{state:!0},_wallQuery:{state:!0},_wallFrame:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_techMode:{state:!0},_feedKind:{state:!0},_techAsk:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_toolMenu:{state:!0},_settingsMenu:{state:!0},_sideWidth:{state:!0},_settingsDialog:{state:!0},_toolOpen:{state:!0},_viewMenu:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;lastFurnTap=null;shiftHeld=!1;onShift=t=>this.shiftHeld=t.shiftKey;kitPics=new Map;kitPicsAsked=new Set;cableCache=null;techPress=null;techStroke=null;wvZoom=null;wvTouch=new Map;wvPinch=null;wvTap=null;wvScale=1;techPick=!1;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallResize=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;sideDrag=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._multi=[],this._single=!1,this._multiMode=!1,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._furnQuery="",this._libOpen=new Set(["group:lights","group:living"]);try{let o=localStorage.getItem("neonplan3d.library");o&&(this._libOpen=new Set(JSON.parse(o)))}catch{}this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._techMode=!1,this._feedKind=null,this._techAsk=null,this._wallSel=null,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallCat=null,this._wallQuery="",this._wallFrame=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("neonplan3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let t=!1;try{t=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let o=Number(localStorage.getItem("neonplan3d.editorSplit"));o>=20&&o<=80&&(this._splitRatio=o/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=e;let n=!1;try{n=localStorage.getItem("neonplan3d.sideMin")==="1"}catch{}this._sideMin=n,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._toolMenu=null,this._settingsMenu=!1;let i=320;try{i=Number(localStorage.getItem("neonplan3d.sideWidth"))||320}catch{}this._sideWidth=Math.min(640,Math.max(280,i)),this._settingsDialog=null,this._toolOpen=null,this._viewMenu=!1,this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return Ut(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onShift)}disconnectedCallback(){var t;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onShift),(t=this.resizeObserver)==null||t.disconnect()}willUpdate(t){var e,n,i;if(t.has("packs")&&cr(this.packs??[]),(t.has("packs")||t.has("hass"))&&this.hass&&((e=this.packs)!=null&&e.some(o=>o.module))&&ms(this.hass,this.packs).then(()=>this.requestUpdate()),t.has("_doc")&&zr(this._doc),t.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(t.has("_split")&&this._split||t.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),t.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),t.has("building")&&this.building!==this._doc){this._doc=this.building,this._doc3d=this.building;let o=this._doc.settings.editor_floor;this._floorId===null&&o&&this._doc.floors.some(s=>s.id===o)&&(this._floorId=o),this._doc.floors.some(s=>s.id===this._floorId)||(this._floorId=((n=this._doc.floors[0])==null?void 0:n.id)??null),(i=this.floor)!=null&&i.rooms.some(s=>s.id===this._roomId)||(this._roomId=null)}}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let i=e.getBoundingClientRect(),o=r=>{this._splitRatio=Math.min(.8,Math.max(.2,(r.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(t){var l;let{id:e,x:n,z:i}=t.detail,o=this._doc.settings.wall_interior,s=this._wallView?this.wallSelection():this._furnitureId?this.selection():[],r=s.includes(e)&&s.length>1?s:[];if(r.length){let c=(l=this.floor)==null?void 0:l.furniture.find(h=>h.id===e);if(!c||r.some(h=>this.isFixedItem("furniture",h)))return;let d=I(n-c.x),u=I(i-c.z),p=new Set(r);this.change((h,f)=>{for(let m of f.furniture)p.has(m.id)&&Object.assign(m,{x:I(m.x+d),z:I(m.z+u)})});return}this.change(c=>{for(let d of c.floors){let u=d.furniture.find($=>$.id===e);if(!u)continue;let[p,h]=Vo(d,u.x,u.z,n,i),[f,m]=Wo(d,u,p,h,o),_=Ln(d,u,o),g=_?Math.hypot(_.x-u.x,_.z-u.z):1/0;Object.assign(u,{x:f,z:m});let v=Ln(d,u,o);v&&Math.hypot(v.x-f,v.z-m)<=g+.01&&Object.assign(u,v)}})}onDeviceMoved3d(t){let{id:e,x:n,z:i}=t.detail;this.change(o=>{for(let s of o.floors){let r=s.placements.find(d=>d.entity_id===e);if(!r)continue;let[l,c]=Vo(s,r.x,r.z,n,i);Object.assign(r,{x:l,z:c})}})}render3dBar(){var n;if(!this.isAdmin)return y;let t=this.furnitureItem,e=this.device;if(t){let i=re(t),o=(s,r,l=.05)=>b`<label class="fp3d-3d-size" title=${this.t(`size_${s}`)}
        >${r}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${l}
          .value=${this.unit==="imperial"?Be(t[s]):String(Math.round(t[s]*100)/100)}
          @change=${c=>{let d=this.readLen(c.target.value);d!==null&&d>=l&&this.updateFurniture({[s]:Math.round(d*1e3)/1e3})}}
        />
      </label>`;return b`<div class="fp3d-3d-bar">
        <span>${Re(this.hass,t.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${i?b`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?Be(t.mount_y??Rt(this.floor,t)):String(Math.round((t.mount_y??Rt(this.floor,t))*100)/100)}
                @change=${s=>{let r=this.readLen(s.target.value);r!==null&&r>=0&&this.updateFurniture({mount_y:Math.round(Math.min(Wi,r)*1e3)/1e3})}}
              />
            </label>`:y}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let i=at(e.entity_id),o=i==="light",s=i?yi(i,((n=this.floor)==null?void 0:n.height)??2.5,o?e.mount??"ceiling":null):1;return b`<div class="fp3d-3d-bar">
        <span>${_t(this.hass,e.entity_id)}</span>
        ${o?b`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${r=>this.updateDevice({mount:r.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(r=>b`<option value=${r} ?selected=${r===(e.mount??"ceiling")}>${this.t(`lamp_${r}`)}</option>`)}
            </select>`:y}
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
      </div>`}return y}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t!=null&&t.moved&&this.pushHistory(t.base)}};grab3dStart(t){let e=this._doc,n=yt(e),i=null,o=(r,l,c,d,u=!1)=>{if(!c||u)return;let p=ls(c,t.o,t.d);!p||!Nl(c,d,p.u,p.s)||i&&i.t<=p.t||(i={id:r,win:l,t:p.t,du:p.u-d.u,ds:p.s-d.v})};if(this._tool==="energy")for(let r of e.settings.roof.solar??[])o(r.id,!1,Ct(e,r,n),r,!!r.locked);if(this._tool==="roof")for(let r of e.settings.roof.windows??[])o(r.id,!0,n.find(l=>l.key===r.face)??null,bn(r),!!r.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:e,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(t){var h,f;let e=this.grab3d;if(!e)return;let n=e.base,i=e.win?(h=n.settings.roof.windows)==null?void 0:h.find(m=>m.id===e.id):void 0,o=e.win?i?bn(i):void 0:(f=n.settings.roof.solar)==null?void 0:f.find(m=>m.id===e.id);if(!o)return;let s=Ct(n,o),r=s!=null&&s.unbounded?[s]:e.win?yt(n):[...yt(n),...de(n)],l=null;for(let m of r){let _=ls(m,t.o,t.d);_&&Wl(m,_.u,_.s)&&(!l||_.t<l.t)&&(l={face:m,..._})}if(!l)return;let c=l.face,d=.05,u=m=>I(Math.round(m/d)*d),p=_n(c,{...o,face:c.key,u:u(l.u-e.du),v:u(l.s-e.ds),tilt:c.flat?o.tilt??15:o.tilt});e.moved=!0,this.change(m=>{var g,v;if(e.win){let $=(g=m.settings.roof.windows)==null?void 0:g.find(k=>k.id===e.id);$&&Object.assign($,{face:c.key,...p});return}let _=(v=m.settings.roof.solar)==null?void 0:v.find($=>$.id===e.id);_&&Object.assign(_,{face:c.key,...p},c.flat&&_.tilt==null?{tilt:15}:{})},e.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return b`<div class="fp3d-editor-3d">
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
        .furnishTypes=${this._tool==="energy"?me:this._tool==="roof"?[]:null}
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
    </div>`}setWall3d(t){this._wall3d=t;try{localStorage.setItem("neonplan3d.walls3d",t)}catch{}}updated(){var n,i;if(this._settingsDialog)for(let o of this.renderRoot.querySelectorAll(".fp3d-dialog details"))o.open=!0;let t=this._preview?this.renderRoot.querySelector(".fp3d-preview"):null;if(t&&this._preview){let o=t.getBoundingClientRect(),s=o.left-this._preview.left,r=o.top-this._preview.top;(Math.abs(s)>1||Math.abs(r)>1)&&(t.style.left=`${parseFloat(t.style.left)-s}px`,t.style.top=`${parseFloat(t.style.top)-r}px`)}for(let o of this.renderRoot.querySelectorAll("select option[selected]"))o.selected||(o.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>{var o;return(o=this.renderRoot.querySelector("fp3d-view3d"))==null?void 0:o.resetView()},250));let e=(n=this.floor)==null?void 0:n.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),(i=this.furnitureItem)!=null&&i.pictures)for(let o of this.storedPictures())!this._images[o]&&!this.loadingImages.has(o)&&this.loadImage(o)}get floor(){var t;return(t=this._doc)==null?void 0:t.floors.find(e=>e.id===this._floorId)}get room(){var t;return(t=this.floor)==null?void 0:t.rooms.find(e=>e.id===this._roomId)}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>gd&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),o=i.floors.find(s=>s.id===this._floorId);!o&&this._floorId||(t(i,o),this.setDoc(i,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){var e,n;this._doc=t,t.floors.some(i=>i.id===this._floorId)||(this._floorId=((e=t.floors[0])==null?void 0:e.id)??null),(n=this.floor)!=null&&n.rooms.some(i=>i.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:o}=this._view;return[(t-i)/n,(e-o)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){var r,l;let t=((r=this.floor)==null?void 0:r.rooms.flatMap(c=>c.points))??[];if(this._tool==="outdoor"||this._tool==="pool")for(let c of((l=this.floor)==null?void 0:l.outdoor)??[])t.push(...c.points);if(this._tool==="roof")for(let c of this._doc.settings.roof.sections??[])t.push([c.x0,c.z0],[c.x1,c.z1]);let e=t.length?At(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=e.x1-e.x0+2*n,o=e.z1-e.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:s,ox:this._size.w/2-(e.x0+e.x1)/2*s,oy:this._size.h/2-(e.z0+e.z1)/2*s},this.fittedView=this._view}showPoint(t,e){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-t*n,oy:this._size.h/2-e*n}}zoomAt(t,e,n){let{scale:i,ox:o,oy:s}=this._view,r=Math.max(8,Math.min(600,i*t)),l=r/i;this._view={scale:r,ox:e-(e-o)*l,oy:n-(n-s)*l}}snap(t,e,n=!1){var f;if(this._guides={},n)return t;let i=Bi/this._view.scale,o=((f=this.floor)==null?void 0:f.rooms)??[],s=[];for(let m of o)m.points.forEach((_,g)=>{e&&m.id===e.roomId&&(e.index===void 0||e.index===g)||s.push(_)});let r=null,l=i;for(let m of s){let _=Math.hypot(m[0]-t[0],m[1]-t[1]);_<l&&(l=_,r=m)}if(r)return this._guides={point:r},[r[0],r[1]];for(let m of o)if(!(e&&m.id===e.roomId))for(let _=0;_<m.points.length;_++){let g=m.points[_],v=m.points[(_+1)%m.points.length],$=v[0]-g[0],k=v[1]-g[1],P=$*$+k*k;if(P<1e-9)continue;let M=((t[0]-g[0])*$+(t[1]-g[1])*k)/P;if(M<=0||M>=1)continue;let z=[g[0]+M*$,g[1]+M*k],R=Math.hypot(z[0]-t[0],z[1]-t[1]),A=this._doc.settings.grid;Math.abs(k)<1e-9&&(z[0]=Math.min(Math.max(Math.round(z[0]/A)*A,Math.min(g[0],v[0])),Math.max(g[0],v[0]))),Math.abs($)<1e-9&&(z[1]=Math.min(Math.max(Math.round(z[1]/A)*A,Math.min(g[1],v[1])),Math.max(g[1],v[1]))),R<l&&(l=R,r=z)}if(r)return this._guides={point:r},[I(r[0]),I(r[1])];let c=this._doc.settings.grid,d=[I(Math.round(t[0]/c)*c),I(Math.round(t[1]/c)*c)],u=i,p=i,h={};for(let m of s)Math.abs(m[0]-t[0])<u&&(u=Math.abs(m[0]-t[0]),d[0]=m[0],h.x=m[0]),Math.abs(m[1]-t[1])<p&&(p=Math.abs(m[1]-t[1]),d[1]=m[1],h.z=m[1]);return this._guides=h,d}onPointerDown(t){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let e=this.localPoint(t),n=t.target;this.pressStart=e,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,e))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"||e.kind==="aim"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="furnset"?n=["furniture",e.ids.find(i=>this.isFixedItem("furniture",i))??e.ids[0]]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){var P,M,z,R,A,w,x,E,S,T,L,j,D,W,Z,Y,tt,X,it,q,ft,It,Jt;t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&md.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){t.button===2&&(this.rightPress={at:n,target:t.target,moved:!1}),this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=t.target;if(this._wallPick){this.pickWall(i);return}if(this._bgLevel&&this.isAdmin&&((P=this.floor)!=null&&P.background)){let B=[...this._bgLevel,i];B.length<2?this._bgLevel=B:this.applyBgLevel(B[0],B[1]);return}if(this.bgHandles()&&this.floor.background&&o.closest("[data-bg-rotate]")){let B=this.floor.background,ut=this._images[B.image_id],U=B.width*((ut==null?void 0:ut.aspect)??1),Mt=[B.x+B.width/2,B.z+U/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-Mt[1],i[0]-Mt[0]),rot:B.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&((M=this.floor)!=null&&M.background)){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let B=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:B.x,bz:B.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&((z=this.floor)!=null&&z.background)){let B=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:B.x,bz:B.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let B=this.snap(i,void 0,t.altKey);this.drag={kind:"freewall",start:B,end:B};return}if(this._tool==="pool"&&this.poolDown(t,o,i,n))return;if(this._tool==="roof"||this._tool==="energy"){let B=(R=o.closest("[data-roof-corner]"))==null?void 0:R.getAttribute("data-roof-corner"),ut=(A=o.closest("[data-roof-vertex]"))==null?void 0:A.getAttribute("data-roof-vertex"),U=(w=o.closest("[data-roof]"))==null?void 0:w.getAttribute("data-roof"),Mt=this._tool==="energy"?(x=o.closest("[data-energy-device]"))==null?void 0:x.getAttribute("data-energy-device"):null;if(Mt){this._solarId=null,this.selectItem("furniture",Mt),this.drag=this.isAdmin?{kind:"furniture",id:Mt,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&o.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let H=(E=o.closest("[data-cable-pt]"))==null?void 0:E.getAttribute("data-cable-pt"),N=G=>{var et,rt;return!!((rt=(et=this._doc.settings.roof.cables)==null?void 0:et.find(pt=>pt.id===G))!=null&&rt.locked)};if(H&&this.isAdmin&&!N(H.slice(0,H.lastIndexOf(":")))){let G=H.lastIndexOf(":"),et=H.slice(0,G),rt=Number(H.slice(G+1));if(this.doubleTap(t,`cable:${H}`)){this.change(pt=>{var jt;let lt=(jt=pt.settings.roof.cables)==null?void 0:jt.find(Lt=>Lt.id===et);lt&&lt.points.length>1&&lt.points.splice(rt,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:et,index:rt,base:this._doc,moved:!1};return}let nt=(S=o.closest("[data-cable-line]"))==null?void 0:S.getAttribute("data-cable-line");if(nt&&this.isAdmin&&!N(nt)){let G=Number(((T=o.closest("[data-cable-line]"))==null?void 0:T.getAttribute("data-cable-seg"))??0),et=this._doc;this.change(rt=>{var lt;let pt=(lt=rt.settings.roof.cables)==null?void 0:lt.find(jt=>jt.id===nt);pt&&pt.points.splice(G,0,[I(i[0]),I(i[1])])}),this.drag={kind:"cablept",id:nt,index:G,base:et,moved:!0};return}let K=(L=o.closest("[data-cable]"))==null?void 0:L.getAttribute("data-cable");if(K){if(this._cableId=K,this.isAdmin&&this._floorId&&!((j=this._doc.settings.roof.cables)!=null&&j.some(G=>G.id===K))){let G=this._doc;this.layCable(K);let et=(D=this._doc.settings.roof.cables)==null?void 0:D.find(pt=>pt.id===K),rt=this.cableSegments().filter(pt=>pt.key===K);if(et&&rt.length){let pt=[[rt[0].a[0],rt[0].a[2]],...et.points,[rt[rt.length-1].b[0],rt[rt.length-1].b[2]]],lt=0,jt=1/0;for(let Lt=0;Lt+1<pt.length;Lt++){let kt=cu(i,pt[Lt],pt[Lt+1]);kt<jt&&(jt=kt,lt=Lt)}this.change(Lt=>{var Ht;let kt=(Ht=Lt.settings.roof.cables)==null?void 0:Ht.find(ye=>ye.id===K);kt&&kt.points.splice(lt,0,[I(i[0]),I(i[1])])}),this.drag={kind:"cablept",id:K,index:lt,base:G,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let zt=this._tool==="energy"?(W=o.closest("[data-solar]"))==null?void 0:W.getAttribute("data-solar"):null,F=this._tool==="energy"?(Z=o.closest("[data-solar-turn]"))==null?void 0:Z.getAttribute("data-solar-turn"):null;if(F&&this.isAdmin){this.drag={kind:"solarturn",id:F,base:this._doc,moved:!1};return}if(zt){let H=(Y=o.closest("[data-cell]"))==null?void 0:Y.getAttribute("data-cell");if(this._solarPick&&zt===this._solarId&&H&&this.isAdmin){this.toggleSolarCell(H),this.drag={kind:"pan",last:n};return}zt!==this._solarId&&(this._solarPick=!1),this._solarId=zt,this._roofId=null;let N=(tt=this._doc.settings.roof.solar)==null?void 0:tt.find(et=>et.id===zt),nt=N?Ct(this._doc,N)??void 0:void 0,K=nt?this.faceHit(nt,i):null,G=N&&K?{du:K.u-N.u,ds:Number.isNaN(K.s)?0:K.s-N.v}:null;this.drag=this.isAdmin&&!(N!=null&&N.locked)?{kind:"solarmove",id:zt,start:i,startScreen:n,base:this._doc,moved:!1,grab:G}:{kind:"pan",last:n};return}let O=this._tool==="roof"?(X=o.closest("[data-roofwin]"))==null?void 0:X.getAttribute("data-roofwin"):null;if(O){this._roofWinId=O,this._roofId=null;let H=(it=this._doc.settings.roof.windows)==null?void 0:it.find(G=>G.id===O),N=H?yt(this._doc).find(G=>G.key===H.face):void 0,nt=N?Ri(N,i):null,K=H&&nt?{du:nt.u-H.u,ds:nt.s-H.v}:null;this.drag=this.isAdmin&&!(H!=null&&H.locked)?{kind:"solarmove",id:O,start:i,startScreen:n,base:this._doc,moved:!1,grab:K,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let V=this._tool==="energy"?(q=o.closest(".fp3d-energy-item"))==null?void 0:q.getAttribute("data-furniture"):null;if(V){this._solarId=null,this.selectItem("furniture",V),this.drag=this.isAdmin?{kind:"furniture",id:V,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(ut&&this.isAdmin){let[H,N]=ut.split(":");this.drag={kind:"roofvertex",id:H,index:Number(N),base:this._doc,moved:!1}}else if(B&&this.isAdmin){let[H,N,nt]=B.split(":");this.drag={kind:"roofcorner",id:H,corner:[N==="1"?1:0,nt==="1"?1:0],base:this._doc,moved:!1}}else if(U){let H=this.roofFixed((ft=this._doc.settings.roof.sections)==null?void 0:ft.find(N=>N.id===U));H&&this._roofId===U&&(this._fixedHint=!0),this._roofId=U,this.drag=this.isAdmin&&!H?{kind:"roofmove",id:U,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let H=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:H,end:H,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this._outdoorFree||this._tool==="hole"){let B=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:B,end:B,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this.isAdmin&&(this._tool==="select"||this._tool==="furniture")&&(t.shiftKey||this._multiMode)){let B=o.closest("[data-furniture]");B?(this.toggleMulti(B.getAttribute("data-furniture")),this.drag=null):this.drag={kind:"marquee",start:i,end:i,add:!0};return}let r=o.closest("[data-device]");if(r&&this.isAdmin){this.drag={kind:"device",entityId:r.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let l=o.closest("[data-opening]");if(l){let B=l.getAttribute("data-opening");this.selectItem("opening",B),this.drag=this.isAdmin?{kind:"opening",id:B,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let c=o.closest("[data-resize]");if(c&&this.isAdmin){let[B,ut,U]=c.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:B,corner:[ut==="1"?1:-1,U==="1"?1:-1],base:this._doc,moved:!1};return}let d=o.closest("[data-rotate]");if(d&&this.isAdmin){this.drag={kind:"rotate",id:d.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let u=o.closest("[data-aim]");if(u&&this.isAdmin){this.drag={kind:"aim",entityId:u.getAttribute("data-aim"),base:this._doc,moved:!1};return}let p=o.closest("[data-furniture]");if(p&&!o.closest("[data-vertex], [data-mid]")){let B=p.getAttribute("data-furniture"),ut=Date.now(),U=((It=this.lastFurnTap)==null?void 0:It.id)===B&&ut-this.lastFurnTap.t<400;this.lastFurnTap={id:B,t:ut};let Mt=this.floor.furniture.find(F=>F.id===B);U&&(Mt!=null&&Mt.group)?(this.selectItem("furniture",B),this._single=!0):(!this.selection().includes(B)||this._single)&&this.selectItem("furniture",B);let zt=this.selection();this.drag=this.isAdmin?zt.length>1?{kind:"furnset",ids:zt,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"furniture",id:B,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=o.closest("[data-vertex]"),f=o.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this._vertex=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let B=Number(f.getAttribute("data-mid")),ut=this.room.points,U=ut[B],Mt=ut[(B+1)%ut.length],zt=[I((U[0]+Mt[0])/2),I((U[1]+Mt[1])/2)],F=this._doc,O=this.room.id;this.change((V,H)=>{let N=H.rooms.find(K=>K.id===O);N.points.splice(B+1,0,zt),N.wall_heights&&N.wall_heights.splice(B+1,0,N.wall_heights[B]??null),N.wall_thickness&&N.wall_thickness.splice(B+1,0,N.wall_thickness[B]??null);let nt=Math.hypot(zt[0]-U[0],zt[1]-U[1]);if(N.wall_slopes){let K=N.wall_slopes[B]??null,G=Math.hypot(Mt[0]-U[0],Mt[1]-U[1])||1,et=K?Math.round((K[0]+(K[1]-K[0])*nt/G)*1e3)/1e3:0;K&&(N.wall_slopes[B]=[K[0],et]),N.wall_slopes.splice(B+1,0,K?[et,K[1]]:null)}for(let K of H.openings)K.room_id!==O||K.wall||(K.edge>B?K.edge+=1:K.edge===B&&K.offset>nt&&(K.edge=B+1,K.offset=I(K.offset-nt)))},F,!1),this._vertex=B+1,this.drag={kind:"vertex",roomId:O,index:B+1,base:F,moved:!0};return}let m=o.closest("[data-wall-end]");if(m&&this.isAdmin){let[B,ut]=m.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:B,end:ut,start:i,startScreen:n,base:this._doc,moved:!1};return}let _=o.closest("[data-free-wall]");if(_){let B=_.getAttribute("data-free-wall");this.selectItem("wall",B),this.drag=this.isAdmin?{kind:"wallmove",id:B,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let g=o.closest("[data-out-box]");if(g&&this.isAdmin){let[B,ut]=g.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:B,corner:Number(ut),base:this._doc,moved:!1};return}let v=o.closest("[data-out-vertex]");if(v&&this.isAdmin){let[B,ut]=v.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:B,index:Number(ut),base:this._doc,moved:!1};return}let $=o.closest("[data-outdoor]");if($&&!o.closest("[data-room]")&&!this.roomAt(i)){let B=this.outdoorAt(i)??$.getAttribute("data-outdoor");this.selectItem("outdoor",B),this.drag=this.isAdmin?{kind:"outdoor",id:B,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let k=((Jt=o.closest("[data-room]"))==null?void 0:Jt.getAttribute("data-room"))??this.roomAt(i);if(k){k!==this._roomId&&(this._vertex=null),this.selectItem("room",k),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:k,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){var o,s,r,l,c,d,u,p,h,f,m,_,g,v,$,k,P,M,z,R;if(this.rightPress&&!this.rightPress.moved){let A=this.localPoint(t);Math.hypot(A[0]-this.rightPress.at[0],A[1]-this.rightPress.at[1])>5&&(this.rightPress.moved=!0)}if(this.pressStart){let A=this.localPoint(t);Math.hypot(A[0]-this.pressStart[0],A[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&((o=this.drag)==null?void 0:o.kind)==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let A=this.pinchState();A&&(this.zoomAt(A.dist/Math.max(1,this.pinch.dist),...A.mid),this._view={...this._view,ox:this._view.ox+A.mid[0]-this.pinch.mid[0],oy:this._view.oy+A.mid[1]-this.pinch.mid[1]},this.pinch=A);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let A=this.snap(n,void 0,t.altKey);t.shiftKey&&(A=Math.abs(A[0]-i.start[0])>Math.abs(A[1]-i.start[1])?[A[0],i.start[1]]:[i.start[0],A[1]]),i.end=A,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let A=(((s=i.base.floors.find(x=>x.id===this._floorId))==null?void 0:s.walls)??[]).find(x=>x.id===i.id);if(!A)return;let w;if(i.end){let x=this.snap(n,void 0,t.altKey);w=i.end==="a"?{a:x,b:A.b}:{a:A.a,b:x}}else{let x=t.altKey?.01:this._doc.settings.grid,E=Math.round((n[0]-i.start[0])/x)*x,S=Math.round((n[1]-i.start[1])/x)*x;w={a:[I(A.a[0]+E),I(A.a[1]+S)],b:[I(A.b[0]+E),I(A.b[1]+S)]}}this.change((x,E)=>Object.assign((E.walls??[]).find(S=>S.id===i.id),w),i.base,!1);break}case"vertex":{let A=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((w,x)=>{x.rooms.find(E=>E.id===i.roomId).points[i.index]=A},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let A=(r=i.base.floors.find(S=>S.id===this._floorId))==null?void 0:r.rooms.find(S=>S.id===i.roomId);if(!A)return;let w=this.roomDelta(A,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),x=i.base.floors.find(S=>S.id===this._floorId),E=new Set(x.placements.filter(S=>Q([S.x,S.z],A.points)).map(S=>S.entity_id));this.change((S,T)=>{let L=T.rooms.find(j=>j.id===i.roomId);L.points=A.points.map(([j,D])=>[I(j+w[0]),I(D+w[1])]),T.placements=x.placements.map(j=>E.has(j.entity_id)?{...j,x:I(j.x+w[0]),z:I(j.z+w[1])}:j)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let A=t.altKey?.01:this._doc.settings.grid,w=I(Math.round((n[0]-i.start[0])/A)*A),x=I(Math.round((n[1]-i.start[1])/A)*A),E=(l=i.base.settings.roof.sections)==null?void 0:l.find(S=>S.id===i.id);if(!E)return;this.change(S=>{var L;let T=(L=S.settings.roof.sections)==null?void 0:L.find(j=>j.id===i.id);T&&(Object.assign(T,{x0:I(E.x0+w),x1:I(E.x1+w),z0:I(E.z0+x),z1:I(E.z1+x)}),E.points&&(T.points=E.points.map(([j,D])=>[I(j+w),I(D+x)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let A=(c=i.base.settings.roof.solar)==null?void 0:c.find(j=>j.id===i.id),w=A?Ct(i.base,A):null;if(!A||!w)return;let[x,E]=Nn(w,A),S=Math.atan2(n[0]-x,-(n[1]-E))*180/Math.PI,T=t.altKey?1:15;S=Math.round(S/T)*T;let L=Wn(i.base,A,S);this.change(j=>{var W;let D=(W=j.settings.roof.solar)==null?void 0:W.find(Z=>Z.id===i.id);D&&Object.assign(D,L)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let A=i.win?(d=i.base.settings.roof.windows)==null?void 0:d.find(Y=>Y.id===i.id):void 0,w=i.win?A?bn(A):void 0:(u=i.base.settings.roof.solar)==null?void 0:u.find(Y=>Y.id===i.id),x=i.win?yt(i.base):[...yt(i.base),...this._floorId?de(i.base,this._floorId):[]],E=w?Ct(i.base,w,x):null;if(!w||!E)return;let S=t.altKey?.01:.05,T=Y=>I(Math.round(Y/S)*S),L=E.unbounded?null:Ll(x,n),j=E,D,W;if(L&&i.grab)j=L.face,D=T(L.u-i.grab.du),W=Number.isNaN(L.s)?L.face.key===w.face?w.v:Math.max(0,L.face.ls-1.5):T(L.s-i.grab.ds);else{let Y=n[0]-i.start[0],tt=n[1]-i.start[1],X=[E.es[0],E.es[2]],it=X[0]*X[0]+X[1]*X[1]||1;D=T(w.u+Y*E.eu[0]+tt*E.eu[2]),W=T(w.v+(Y*X[0]+tt*X[1])/it)}let Z=_n(j,{...w,face:j.key,u:D,v:W,tilt:j.flat?w.tilt??15:w.tilt});this.change(Y=>{var X,it;if(i.win){let q=(X=Y.settings.roof.windows)==null?void 0:X.find(ft=>ft.id===i.id);q&&Object.assign(q,{face:j.key,...Z});return}let tt=(it=Y.settings.roof.solar)==null?void 0:it.find(q=>q.id===i.id);tt&&Object.assign(tt,{face:j.key,...Z},j.flat&&tt.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outbox":{i.moved=!0;let A=this.snap(n,void 0,t.altKey),w=(p=i.base.floors.find(tt=>tt.id===this._floorId))==null?void 0:p.outdoor.find(tt=>tt.id===i.id);if(!(w!=null&&w.pool_shape))return;let x=At(w.points),S=[[x.x0,x.z0],[x.x1,x.z0],[x.x1,x.z1],[x.x0,x.z1]][(i.corner+2)%4],T=A[0]-S[0],L=A[1]-S[1];if(w.pool_shape==="round"){let tt=Math.max(Math.abs(T),Math.abs(L),.5);T=Math.sign(T||1)*tt,L=Math.sign(L||1)*tt}else T=Math.sign(T||1)*Math.max(Math.abs(T),.5),L=Math.sign(L||1)*Math.max(Math.abs(L),.5);let j=Math.min(S[0],S[0]+T),D=Math.max(S[0],S[0]+T),W=Math.min(S[1],S[1]+L),Z=Math.max(S[1],S[1]+L),Y=w.pool_shape;this.change((tt,X)=>{let it=X.outdoor.find(q=>q.id===i.id);it&&(it.points=di(Y,I(j),I(W),I(D),I(Z)))},i.base,!1);break}case"pipept":{i.moved=!0;let A=this.snap(n,void 0,t.altKey);this.change((w,x)=>{var S,T,L;let E=(L=(T=(S=x.outdoor.find(j=>j.id===i.pool))==null?void 0:S.pool)==null?void 0:T.pipes)==null?void 0:L.find(j=>j.id===i.pipe);E&&(E.points[i.index]=[I(A[0]),I(A[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let A=this.snap(n,void 0,t.altKey);this.change((w,x)=>{var j,D;let E=x.outdoor.find(W=>W.id===i.pool),S=(D=(j=E==null?void 0:E.pool)==null?void 0:j.ports)==null?void 0:D.find(W=>W.id===i.id);if(!E||!S)return;let[T,L]=S.kind==="skimmer"||S.kind==="inlet"?Pi(E.points,A):A;S.x=I(T),S.z=I(L)},i.base,!1);break}case"pooljoint":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let A=(m=(f=(h=i.base.floors.flatMap(x=>x.outdoor).find(x=>x.id===i.pool))==null?void 0:h.pool)==null?void 0:f.joints)==null?void 0:m.find(x=>x.id===i.id);if(!A)break;let w=this.snap([A.x+n[0]-i.start[0],A.z+n[1]-i.start[1]],void 0,t.altKey);if(A.kind==="wall"){let x=[-(A.nz??0),A.nx??0],E=(w[0]-A.x)*x[0]+(w[1]-A.z)*x[1];w=[A.x+x[0]*E,A.z+x[1]*E]}this.change(x=>{var S,T,L;let E=(L=(T=(S=x.floors.flatMap(j=>j.outdoor).find(j=>j.id===i.pool))==null?void 0:S.pool)==null?void 0:T.joints)==null?void 0:L.find(j=>j.id===i.id);E&&([E.x,E.z]=[I(w[0]),I(w[1])])},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let A=i.base.floors.flatMap(x=>x.furniture).find(x=>x.id===i.id);if(!A)break;let w=this.snap([A.x+n[0]-i.start[0],A.z+n[1]-i.start[1]],void 0,t.altKey);this.change(x=>{let E=x.floors.flatMap(S=>S.furniture).find(S=>S.id===i.id);E&&([E.x,E.z]=[I(w[0]),I(w[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let A=this.snap(n,void 0,t.altKey),w=(_=i.base.floors.find(E=>E.id===this._floorId))==null?void 0:_.outdoor.find(E=>E.id===i.id);if(!w)return;let x=_i(w.points);this.change((E,S)=>{let T=S.outdoor.find(W=>W.id===i.id);if(!T)return;let L=w.points.map(W=>[...W]),j=i.index,D=w.points[j];L[j]=[I(A[0]),I(A[1])],x&&w.points.forEach((W,Z)=>{Z!==j&&(Math.abs(W[0]-D[0])<1e-6&&(L[Z][0]=I(A[0])),Math.abs(W[1]-D[1])<1e-6&&(L[Z][1]=I(A[1])))}),T.points=L},i.base,!1);break}case"cablept":{i.moved=!0;let A=this.snap(n,void 0,t.altKey);this.change(w=>{var E;let x=(E=w.settings.roof.cables)==null?void 0:E.find(S=>S.id===i.id);x&&x.points[i.index]&&(x.points[i.index]=[I(A[0]),I(A[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let A=this.snap(n,void 0,t.altKey);this.change(w=>w.settings.roof.hologram={...w.settings.roof.hologram??ai,place:"free",x:I(A[0]),z:I(A[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let A=n[0]-i.start[0],w=n[1]-i.start[1];this.change((x,E)=>{E.background&&(E.background.x=I(i.bx+A),E.background.z=I(i.bz+w))},i.base,!1);break}case"bgrotate":{i.moved=!0;let A=(g=this.floor)==null?void 0:g.background,w=A?this._images[A.image_id]:void 0;if(!A||!w)break;let x=A.width*w.aspect,E=[A.x+A.width/2,A.z+x/2],S=Math.atan2(n[1]-E[1],n[0]-E[0]),T=i.rot+(S-i.start)*180/Math.PI;T=t.shiftKey?Math.round(T/15)*15:Math.round(T*10)/10,T=((T+180)%360+360)%360-180,this.change((L,j)=>{j.background&&(j.background.rotation=T)},i.base,!1);break}case"bgscale":{i.moved=!0;let A=(v=this.floor)==null?void 0:v.background,w=A?this._images[A.image_id]:void 0;if(!A||!w)break;let[x]=this.bgLocal(A,n,w.aspect),E=Math.max(.5,I(x));this.change((S,T)=>{T.background&&(T.background.width=E)},i.base,!1);break}case"roofvertex":{i.moved=!0;let A=this.snap(n,void 0,t.altKey);this.change(w=>{var E;let x=(E=w.settings.roof.sections)==null?void 0:E.find(S=>S.id===i.id);!(x!=null&&x.points)||i.index>=x.points.length||(x.points[i.index]=[I(A[0]),I(A[1])],Object.assign(x,Qo(x.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let A=this.snap(n,void 0,t.altKey);this.change(w=>{var E;let x=(E=w.settings.roof.sections)==null?void 0:E.find(S=>S.id===i.id);x&&(i.corner[0]?x.x1=I(A[0]):x.x0=I(A[0]),i.corner[1]?x.z1=I(A[1]):x.z0=I(A[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let A=i.base.floors.find(S=>S.id===this._floorId),w=A==null?void 0:A.openings.find(S=>S.id===i.id),x=w&&A?dn(w,A.rooms,A.walls??[]):null;if(!w||!x)return;let E=this.offsetOnEdge(x.room,x.edge,n,w.width,t.altKey);this.change((S,T)=>Object.assign(T.openings.find(L=>L.id===i.id),{offset:E}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let A=($=i.base.floors.find(L=>L.id===this._floorId))==null?void 0:$.furniture.find(L=>L.id===i.id);if(!A)return;let w=t.altKey?.01:this._doc.settings.grid,x=I(Math.round((A.x+n[0]-i.start[0])/w)*w),E=I(Math.round((A.z+n[1]-i.start[1])/w)*w),S=A.rotation,T=t.altKey?null:this.snapToWall({...A,x,z:E});T&&({x,z:E,rotation:S}=T),this.change((L,j)=>Object.assign(j.furniture.find(D=>D.id===i.id),{x,z:E,rotation:S}),i.base,!1);break}case"furnset":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let A=t.altKey?.01:this._doc.settings.grid,w=I(Math.round((n[0]-i.start[0])/A)*A),x=I(Math.round((n[1]-i.start[1])/A)*A),E=new Set(i.ids);this.change((S,T)=>{for(let L of T.furniture)E.has(L.id)&&Object.assign(L,{x:I(L.x+w),z:I(L.z+x)})},i.base,!1);break}case"marquee":i.end=n,this.requestUpdate();break;case"outdoor":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let A=(k=i.base.floors.find(S=>S.id===this._floorId))==null?void 0:k.outdoor.find(S=>S.id===i.id);if(!A)return;let w=t.altKey?.01:this._doc.settings.grid,x=Math.round((n[0]-i.start[0])/w)*w,E=Math.round((n[1]-i.start[1])/w)*w;this.change((S,T)=>{var j,D;let L=T.outdoor.find(W=>W.id===i.id);L.points=A.points.map(([W,Z])=>[I(W+x),I(Z+E)]),(j=L.pool)!=null&&j.ports&&((D=A.pool)!=null&&D.ports)&&(L.pool.ports=A.pool.ports.map(W=>({...W,x:I(W.x+x),z:I(W.z+E)})))},i.base,!1);break}case"resize":{i.moved=!0;let A=(P=i.base.floors.find(x=>x.id===this._floorId))==null?void 0:P.furniture.find(x=>x.id===i.id);if(!A)return;let w=Br(A,i.corner,n,t.altKey?.01:this._doc.settings.grid);this.change((x,E)=>Object.assign(E.furniture.find(S=>S.id===i.id),w),i.base,!1);break}case"rotate":{i.moved=!0;let A=(M=i.base.floors.find(E=>E.id===this._floorId))==null?void 0:M.furniture.find(E=>E.id===i.id);if(!A)return;let w=Math.atan2(-(n[0]-A.x),n[1]-A.z)*180/Math.PI,x=t.altKey?1:15;w=(Math.round(w/x)*x%360+360)%360,this.change((E,S)=>Object.assign(S.furniture.find(T=>T.id===i.id),{rotation:w}),i.base,!1);break}case"aim":{i.moved=!0;let A=(z=i.base.floors.find(S=>S.id===this._floorId))==null?void 0:z.placements.find(S=>S.entity_id===i.entityId);if(!A)return;let w=Math.atan2(-(n[0]-A.x),n[1]-A.z)*180/Math.PI,x=t.altKey?1:5;w=(Math.round(w/x)*x%360+360)%360;let E=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-A.x,n[1]-A.z)*10)/10));this.change((S,T)=>Object.assign(T.placements.find(L=>L.entity_id===i.entityId),{rotation:w,reach:E}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let A=(R=i.base.floors.find(S=>S.id===this._floorId))==null?void 0:R.placements.find(S=>S.entity_id===i.entityId);if(!A)return;let w=t.altKey?.01:this._doc.settings.grid,x=I(Math.round((A.x+n[0]-i.start[0])/w)*w),E=I(Math.round((A.z+n[1]-i.start[1])/w)*w);this.change((S,T)=>Object.assign(T.placements.find(L=>L.entity_id===i.entityId),{x,z:E}),i.base,!1);break}}}onPointerUp(t){var o,s;let e=this.rightPress;if(this.rightPress=null,e&&t.button===2&&(this.rightUp=performance.now(),!e.moved&&t.type!=="pointercancel"&&(this._tool==="select"||this._tool==="furniture")&&this.openContext(e.target,e.at)),clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||t.type==="pointercancel"){n&&md.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let i=this.localPoint(t);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[r,l]=n.start,[c,d]=n.end;if(Math.abs(c-r)>=.2&&Math.abs(d-l)>=.2){let u=[Math.min(r,c),Math.min(l,d)],p=[Math.max(r,c),Math.max(l,d)],h=[u,[p[0],u[1]],p,[u[0],p[1]]];n.outdoor?this.addOutdoor(h):n.hole?this.addHole(u,p):n.roof?this.addRoofSection(u,p):this.addRoom(h)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...i),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...i),void 0,t.altKey),i);break;case"marquee":{let[r,l]=[Math.min(n.start[0],n.end[0]),Math.max(n.start[0],n.end[0])],[c,d]=[Math.min(n.start[1],n.end[1]),Math.max(n.start[1],n.end[1])],u=(((o=this.floor)==null?void 0:o.furniture)??[]).filter(p=>p.x>=r&&p.x<=l&&p.z>=c&&p.z<=d).map(p=>p.id);u.length&&this.setMulti([...new Set([...this.selection(),...this.withGroups(u)])]);break}case"opening":case"furniture":case"furnset":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":n.moved?this.pushHistory(n.base):(n.kind==="poolport"||n.kind==="pooljoint")&&this.openCard(n.pool,`${n.kind==="poolport"?"port":"joint"}:${n.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"pooldev":{n.moved?this.pushHistory(n.base):((s=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.id===n.id))==null?void 0:s.type)==="pool_valve"?this.togglePoolValve(n.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${n.id}`);break}case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>gd&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){var l;if(n)return e;let i=this._doc.settings.grid,o=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],r=Bi/this._view.scale;this._guides={};for(let c of((l=this.floor)==null?void 0:l.rooms)??[])if(c.id!==t.id)for(let d of c.points)for(let u of t.points){let p=Math.hypot(u[0]+e[0]-d[0],u[1]+e[1]-d[1]);p<r&&(r=p,o=[d[0]-u[0],d[1]-u[1]],this._guides={point:d})}return o}roomAt(t){var i,o;return((o=(((i=this.floor)==null?void 0:i.rooms)??[]).filter(s=>Q(t,s.points)).sort((s,r)=>Ft(s.points)-Ft(r.points))[0])==null?void 0:o.id)??null}outdoorAt(t){var i,o;return((o=(((i=this.floor)==null?void 0:i.outdoor)??[]).filter(s=>s.points.length>=3&&Q(t,s.points)).sort((s,r)=>Ft(s.points)-Ft(r.points))[0])==null?void 0:o.id)??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[o,s]=this.toScreen(n[0]);if(Math.hypot(o-e[0],s-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Math.abs(Ft(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=sn(e,this._measureLen,t),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;e>.1&&n>.1&&(this.addRoom([t,sn(t,e,"right"),sn(sn(t,e,"right"),n,"down"),sn(t,n,"down")]),this._draft=[])}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],i=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=r=>Bt(this.hass,r,2);return b`<section>
      <h3>${this.t("measure")}</h3>
      ${e?b`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(e[0]),z:this.m(e[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${jn(this.t("measure_length"),this.unit)}
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
                </ol>`:y}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?b`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:y}`:b`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],r=>this._rectSize=[Math.max(.1,r),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],r=>this._rectSize=[this._rectSize[0],Math.max(.1,r)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(t,e){if(!this.floor)return;let n={id:J("wall"),a:[I(t[0]),I(t[1])],b:[I(e[0]),I(e[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){var t;return this._wallId?(((t=this.floor)==null?void 0:t.walls)??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(t){let e=this._wallId;e&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===e),t))}deleteFreeWall(){let t=this._wallId;!t||!this.isAdmin||!this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return C`<g>${(t.walls??[]).map(e=>{let[n,i]=this.toScreen(e.a),[o,s]=this.toScreen(e.b),r=e.id===this._wallId;return C`<g data-free-wall=${e.id} class=${`fp3d-free-wall${r?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${o} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${s} />
      </g>
      ${r&&this.isAdmin&&!co(e,!0,this._doc.settings)?C`<g class="fp3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`:y}`})}</g>`}renderFreeWallForm(t){var r;let e=this.isAdmin,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),i=l=>{let d=Math.max(.1,l)/(n||1);this.updateFreeWall({b:[I(t.a[0]+(t.b[0]-t.a[0])*d),I(t.a[1]+(t.b[1]-t.a[1])*d)]})},o=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],s=(l,c)=>{let d=c-o[l],u=p=>l===0?[I(p[0]+d),p[1]]:[p[0],I(p[1]+d)];this.updateFreeWall({a:u(t.a),b:u(t.b)})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),o[0],l=>s(0,l))} ${this.len(this.t("z"),o[1],l=>s(1,l))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,l=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,l))}),.01,.02)}
        ${this.len(this.t("wall_height"),t.height??((r=this.floor)==null?void 0:r.height)??2.5,l=>{var c;return this.updateFreeWall({height:l>=(((c=this.floor)==null?void 0:c.height)??2.5)-.005?null:Math.max(.05,l)})},.05,.05)}
      </div>
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:y}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:J("hole"),type:"stairwell",x:I((t[0]+e[0])/2),z:I((t[1]+e[1])/2),w:I(e[0]-t[0]),d:I(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}addOutdoor(t){if(!this.floor)return;let e=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:J("outdoor"),type:e,points:t.map(([o,s])=>[I(o),I(s)])},i=e==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(i==="round"||i==="oval"){let o=At(n.points);n.points=di(i,o.x0,o.z0,o.x1,o.z1),n.pool_shape=i}e==="pool"&&this.pipeRules&&(n.pool={}),this.change((o,s)=>s.outdoor.push(n)),this.selectItem("outdoor",n.id)}get outdoorArea(){var t;return this._outdoorId?(t=this.floor)==null?void 0:t.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(o=>o.id===e),t))}deleteOutdoor(){var i,o,s;let t=this._outdoorId;if(!t||!this.isAdmin||!this.confirmFixedDelete("outdoor",t))return;let e=(i=this.floor)==null?void 0:i.outdoor.find(r=>r.id===t),n=((s=(o=e==null?void 0:e.pool)==null?void 0:o.pipes)==null?void 0:s.length)??0;(e==null?void 0:e.type)==="pool"&&n&&!confirm(this.t("pool_delete_confirm",{n}))||(this.change((r,l)=>l.outdoor=l.outdoor.filter(c=>c.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isAdmin)return;let e={...t,id:J("outdoor"),points:t.points.map(([n,i])=>[I(n+.5),I(i+.5)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t){if(!this.floor)return;let e=J("room"),n=this.floor.rooms.length+1;this.change((i,o)=>o.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([s,r])=>[I(s),I(r)]),floor_material:"wood"})),this._roomId=e,this._vertex=null}onKey=t=>{if(this.shiftHeld=t.shiftKey,t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;if(!(this._wallView&&!(n&&["z","y"].includes(t.key.toLowerCase())))){if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this._furnitureId?this.duplicateFurniture():this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&this._furnitureId&&this.selection().length>1)this.lockSelection(!this.selection().every(i=>this.isFixedItem("furniture",i)));else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.prototype.hasOwnProperty.call(bd,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[o,s]=bd[t.key];this.nudge(o*i,s*i)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Backspace"&&this.drawingPoints)this._draft=this._draft.slice(0,-1);else if(t.key==="Enter"&&this.drawingPoints)this.closeDraft();else if(t.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}}};nudge(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix,o=this._furnitureId?this.selection():[];if(i&&this.isFixedItem(i.kind,i.id)||o.some(r=>this.isFixedItem("furniture",r)))return this._fixedHint=!0,!0;let s=r=>[I(r[0]+t),I(r[1]+e)];if(o.length>1){let r=new Set(o);return this.change((l,c)=>{for(let d of c.furniture)r.has(d.id)&&([d.x,d.z]=s([d.x,d.z]))}),!0}if(this._deviceId){let r=this._deviceId;if(!n.placements.some(l=>l.entity_id===r))return!1;this.change((l,c)=>{let d=c.placements.find(u=>u.entity_id===r);[d.x,d.z]=s([d.x,d.z])})}else if(this._furnitureId){let r=this._furnitureId;this.change((l,c)=>{let d=c.furniture.find(u=>u.id===r);d&&([d.x,d.z]=s([d.x,d.z]))})}else if(this._openingId){let r=this.opening,l=r?dn(r,n.rooms,n.walls??[]):null;if(!r||!l)return!1;let c=l.room.points[l.edge],d=l.room.points[(l.edge+1)%l.room.points.length],u=Math.hypot(d[0]-c[0],d[1]-c[1])||1,p=(t*(d[0]-c[0])+e*(d[1]-c[1]))/u;if(Math.abs(p)<1e-9)return!0;let h=Math.min(r.width,u)/2;this.updateOpening({offset:I(Math.min(u-h,Math.max(h,r.offset+p)))})}else if(this._wallId){let r=this._wallId;this.change((l,c)=>{let d=(c.walls??[]).find(u=>u.id===r);d&&([d.a,d.b]=[s(d.a),s(d.b)])})}else if(this._outdoorId){let r=this._outdoorId;this.change((l,c)=>{let d=c.outdoor.find(u=>u.id===r);d&&(d.points=d.points.map(s))})}else if(this._roomId){let r=this._roomId,l=this._vertex,c=n.rooms.find(u=>u.id===r);if(!c)return!1;let d=new Set(n.placements.filter(u=>Q([u.x,u.z],c.points)).map(u=>u.entity_id));this.change((u,p)=>{let h=p.rooms.find(f=>f.id===r);if(l!==null&&l<h.points.length){h.points[l]=s(h.points[l]);return}h.points=h.points.map(s);for(let f of p.placements)d.has(f.entity_id)&&([f.x,f.z]=s([f.x,f.z]))})}else return!1;return!0}get freeHaFloors(){var e;let t=new Set(this._doc.floors.map(n=>n.ha_floor));return Object.values(((e=this.hass)==null?void 0:e.floors)??{}).filter(n=>!t.has(n.floor_id)).sort((n,i)=>(n.level??99)-(i.level??99)||n.name.localeCompare(i.name))}unplacedAreas(t){var n;if(!t.ha_floor)return[];let e=new Set(this._doc.floors.flatMap(i=>[...i.rooms.map(o=>o.area_id),...(i.outdoor??[]).map(o=>o.area_id??null)]));return Object.values(((n=this.hass)==null?void 0:n.areas)??{}).filter(i=>i.floor_id===t.ha_floor&&!e.has(i.area_id)).sort((i,o)=>i.name.localeCompare(o.name))}addFloor(t=null){let e=this._doc.floors,n=J("floor"),i=(t==null?void 0:t.name)??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),o={...Vr(n,i,Wr(e,t==null?void 0:t.level)),ha_floor:(t==null?void 0:t.floor_id)??null},s=structuredClone(this._doc),r=s.floors.findIndex(l=>l.elevation>o.elevation);s.floors.splice(r<0?s.floors.length:r,0,o),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=Nr(t,e,()=>J("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(o=>o.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}deleteFloor(){var n;let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(i=>i.id!==t.id),this.setDoc(e),this._floorId=((n=e.floors[0])==null?void 0:n.id)??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||!this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let i=n.rooms.find(o=>o.id===t);n.rooms=n.rooms.filter(o=>o.id!==t),n.openings=n.openings.filter(o=>o.room_id!==t||o.wall),i&&(n.placements=n.placements.filter(o=>!Q([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=J("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([o,s])=>[I(o+.5),I(s+.5)])})),this._roomId=e}roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?y:b`<div class="fp3d-seg fp3d-dev-source">
      ${t.map(e=>b`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
    </div>`}get roofSection(){var t;return this._roofId?(t=this._doc.settings.roof.sections)==null?void 0:t.find(e=>e.id===this._roofId):void 0}useRoofSections(t=!1){if(!this.isAdmin)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=zl(n,()=>J("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isAdmin)return;let n=Al(this._doc,t[0],t[1],e[0],e[1]),i=Math.min(...this._doc.floors.map(c=>c.elevation)),o=n===null,s=I(n??i+2.4),r=o?6:this._doc.settings.roof.pitch||35,l={id:J("roof"),x0:I(t[0]),z0:I(t[1]),x1:I(e[0]),z1:I(e[1]),shape:o?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:r,pitch_b:r,base:s,overhang:o?.15:null,...o?{open:!0}:{}};this.change(c=>{c.settings.roof.type="custom",c.settings.roof.sections=[...c.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let t=this.floor,e=this._roofId;if(!t||!e||!this.isAdmin)return;let n=xl(t.rooms,t.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([o,s])=>[I(o),I(s)]);this.updateRoofSection({shape:"flat",points:i,...Qo(i)})}addDormer(t){let e=this.roofSection;if(!e||!this.isAdmin)return;let n=Sl(e,t,J("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(t){let e=this._roofId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var o;let i=(o=n.settings.roof.sections)==null?void 0:o.find(s=>s.id===e);i&&Object.assign(i,t)}))}deleteRoofSection(){let t=this._roofId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:J("roof"),x0:I(t.x0+1),x1:I(t.x1+1),z0:I(t.z0+1),z1:I(t.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return C`<g class="fp3d-roof-layer">${e.map((n,i)=>{let o=n.id===this._roofId,s=ne(n),r=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=Ml(e,n),c=l?ne(Pl(l,n)):s,d=(r??[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,c.w),c.at(c.u0,c.w)]).map(g=>this.toScreen(g)),u=(g,v)=>{let[$,k]=this.toScreen(g),[P,M]=this.toScreen(v);return C`<line x1=${$} y1=${k} x2=${P} y2=${M} />`},p=n.shape==="flat"||n.shape==="parapet"?null:Zo(n,{u0:0,u1:0,a:0,b:0}),h=p?C`${p.ridges.map(([g,v])=>u(s.at(g[0],g[1]),s.at(v[0],v[1])))}`:y,[f,m]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),_=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(zi(n),1)}`;return C`<g data-roof=${n.id} class=${`fp3d-roof-sec${o?" fp3d-roof-sel":""}`}>
          <polygon points=${d.map(g=>g.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${h}</g>
          <text x=${f} y=${m-14}>${_}</text>
        </g>
        ${o&&this.isAdmin&&!this.roofFixed(n)&&r?r.map((g,v)=>{let[$,k]=this.toScreen(g);return C`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${v}`}><circle cx=${$} cy=${k} r="16" class="fp3d-hit" /><circle cx=${$} cy=${k} r="6" /></g>`}):y}
        ${o&&this.isAdmin&&!this.roofFixed(n)&&!r?[[0,0],[1,0],[1,1],[0,1]].map(([g,v])=>{let[$,k]=this.toScreen([g?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),v?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return C`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${g}:${v}`}><circle cx=${$} cy=${k} r="16" class="fp3d-hit" /><circle cx=${$} cy=${k} r="6" /></g>`}):y}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:Ri(t,e)}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return y;let e=yt(this._doc);return C`<g class="fp3d-solar-layer">${t.map(n=>{let i=Ct(this._doc,n,e);if(!i||i.wall&&i.wall.floorId!==this._floorId)return y;let o=n.id===this._solarId,s=y;if(o&&i.unbounded&&this.isAdmin&&!n.locked){let[r,l]=Nn(i,n),c=(n.rotation??0)*Math.PI/180,d=.9+Math.max(...be(i,n,!0).flatMap(m=>m.corners.map(_=>Math.hypot(_[0]-r,_[2]-l))))*.5,[u,p]=this.toScreen([r,l]),[h,f]=this.toScreen([r+Math.sin(c)*d,l-Math.cos(c)*d]);s=C`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${u} y1=${p} x2=${h} y2=${f} />
          <circle cx=${h} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${h} cy=${f} r="8" />
          <path d="M${h-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return C`<g data-solar=${n.id} class=${`fp3d-solar${o?" fp3d-solar-sel":""}${o&&this._solarPick?" fp3d-solar-pick":""}`}>${be(i,n,o).map(r=>{let l=i.wall?Math.max(.3,...r.corners.map(d=>(d[0]-i.o[0])*i.n[0]+(d[2]-i.o[2])*i.n[2])):0,c=i.wall?[r.corners[0],r.corners[1]].flatMap((d,u)=>{let p=[d[0],d[2]],h=[d[0]+i.n[0]*l,d[2]+i.n[2]*l];return u===0?[p,h]:[h,p]}):r.corners.map(d=>[d[0],d[2]]);return C`<polygon data-cell=${r.cell} class=${r.skipped?"fp3d-solar-off":""} points=${c.map(d=>this.toScreen(d).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return y;let e=new Map(yt(this._doc).map(n=>[n.key,n]));return C`<g class="fp3d-roofwin-layer">${t.map(n=>{let i=e.get(n.face),o=i?Vl(i,n):null;return o?C`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${o.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:y})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let t=yt(this._doc).filter(i=>!i.flat),e=Oi(t,this._doc.settings.north??0)??yt(this._doc)[0];if(!e)return;let n=as(e,J("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isAdmin||this.change(n=>{var s;let i=(s=n.settings.roof.windows)==null?void 0:s.find(r=>r.id===e);if(!i)return;Object.assign(i,t);let o=yt(n).find(r=>r.key===i.face);o&&Object.assign(i,_n(o,bn(i)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(yt(this._doc).map(n=>[n.key,n]));return b`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?b`<div class="fp3d-room-list">
            ${t.map((n,i)=>{let o=e.get(n.face);return b`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isAdmin,n=yt(this._doc),i=l=>this.updateRoofWindow(l),o=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),r=this.entityOptions(l=>ws(l)||Ot(l));return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${e?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let c=n.find(d=>d.key===l.target.value);c&&i({...as(c,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt,window:t.window,name:t.name,float:t.float})}}>
              ${n.map(l=>b`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),t.w??.78,l=>i({w:Math.max(.3,Math.min(4,I(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),t.h??1.18,l=>i({h:Math.max(.3,Math.min(4,I(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),t.u,l=>i({u:I(l)}),.05)}
          ${this.len(this.t("solar_v"),t.v,l=>i({v:I(l)}),.05)}
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
        ${e?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:y}
      </section>`}cableSegments(){var o;if(((o=this.cableCache)==null?void 0:o.doc)===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(s=>[s.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=ed({building:t,consumers:[],summary:n,fieldPower:e}).filter(s=>s.key)}catch{i=[]}return this.cableCache={doc:t,segs:i},i}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,i)=>e(n)-e(i)||n.localeCompare(i))}cableLabel(t){let e=r=>{let l=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===r);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.type==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[o,s]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(o==="solar"){let r=this._doc.settings.roof.solar??[],l=r.findIndex(d=>d.id===s),c=r[l];return`${(c==null?void 0:c.name)||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return o==="inv"?`${e(s)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${e(s)}`}layCable(t){if(!this.isAdmin||!this._floorId)return;let e=[];for(let o of this.cableSegments().filter(s=>s.key===t))for(let s of[o.a,o.b]){let r=[I(s[0]),I(s[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-r[0],l[1]-r[1])>.05)&&e.push(r)}let n=e.length>2?e.slice(1,-1):e,i=this._floorId;this.change(o=>{o.settings.roof.cables=[...(o.settings.roof.cables??[]).filter(s=>s.id!==t),{id:t,floor_id:i,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){if(!vt("energy_pro"))return y;let t=this.cableSegments();if(!t.length)return y;let e=t.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,o=[...new Set(t.map(s=>s.key))];return C`<g class="fp3d-cable-layer">${o.map(s=>{let r=n.find(_=>_.id===s),l=`fp3d-cable fp3d-cable-${s.split(":")[0]}${r?" fp3d-cable-laid":""}${s===i?" fp3d-cable-sel":""}`,c=t.filter(_=>_.key===s),d=e.filter(_=>_.key===s).map(_=>{let g=this.toScreen([_.a[0],_.a[2]]),v=this.toScreen([_.b[0],_.b[2]]);return C`<line x1=${g[0]} y1=${g[1]} x2=${v[0]} y2=${v[1]} />`});if(!(r&&s===i&&r.floor_id===this._floorId&&!r.locked))return d.length?C`<g class=${l} data-cable=${s}><g class="fp3d-cable-hit">${d}</g>${d}</g>`:y;let u=c[0],p=c[c.length-1],h=[this.toScreen([u.a[0],u.a[2]]),...r.points.map(_=>this.toScreen(_)),this.toScreen([p.b[0],p.b[2]])],f=h.slice(0,-1).map((_,g)=>C`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${g} x1=${_[0]} y1=${_[1]} x2=${h[g+1][0]} y2=${h[g+1][1]} />`),m=r.points.map((_,g)=>{let v=this.toScreen(_);return C`<g class="fp3d-vertex" data-cable-pt=${`${s}:${g}`}><circle cx=${v[0]} cy=${v[1]} r="16" class="fp3d-hit" /><circle cx=${v[0]} cy=${v[1]} r="6" /></g>`});return C`<g class=${l} data-cable=${s}>${d}${f}${m}</g>`})}</g>`}renderCableSettings(){var o;let t=this.cableKeys();if(!t.length)return y;let e=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(s=>s.id===this._cableId):void 0;return b`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${t.map(s=>b`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${s===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=s===this._cableId?null:s;let r=n.find(l=>l.id===s);this._cableId&&r&&this._doc.floors.some(l=>l.id===r.floor_id)&&(this._floorId=r.floor_id)}}
            >
              <span>${this.cableLabel(s)}${n.some(r=>r.id===s)?b` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:y}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?b`<div class="fp3d-actions">
              ${i?b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(s=>{var l;let r=(l=s.settings.roof.cables)==null?void 0:l.find(c=>c.id===i.id);r&&(r.locked=!r.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(s=>s.settings.roof.cables=(s.settings.roof.cables??[]).filter(r=>r.id!==this._cableId))}>${this.t("cable_auto")}</button>`:b`<button class="fp3d-btn fp3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?b`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,s=>this.change(r=>{var c;let l=(c=r.settings.roof.cables)==null?void 0:c.find(d=>d.id===i.id);l&&(l.height=Math.min(30,Math.max(0,I(s))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:((o=this._doc.floors.find(s=>s.id===i.floor_id))==null?void 0:o.name)??""})}</p>`:y}`:y}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return y;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,i=vt("energy_pro")&&(n==null?void 0:n.place)==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return C`<g class="fp3d-energy-markers">${i?C`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:y}${t.furniture.filter(o=>me.includes(o.type)).map(o=>{let[s,r]=this.toScreen([o.x,o.z]),l=o.id===this._furnitureId;return C`<g data-energy-device=${o.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${r} r="17" />
          <text x=${s} y=${r+6} class="fp3d-energy-icon">${e[o.type]??"\u26A1"}</text>
          ${l?C`<text x=${s} y=${r+32} class="fp3d-energy-name">${this.t(`furn_${o.type}`)}</text>`:y}
          <title>${this.t(`furn_${o.type}`)}</title>
        </g>`})}</g>`}faceLabel(t){if(t.key===Fe)return this.t("solar_ground");if(t.wall){let{floorId:o,room:s,edge:r,free:l}=t.wall,c=this._doc.floors.find(p=>p.id===o),d=c==null?void 0:c.rooms.find(p=>p.id===s),u=l?this.t("solar_wall_free"):d?`${d.name}${r!=null?` ${r+1}\u2013${(r+1)%d.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${(c==null?void 0:c.name)??""} \xB7 ${u?`${u} \xB7 `:""}${this.t(`compass_${rs(t,this._doc.settings.north??0)}`)} \xB7 ${this.m(t.lu,2)}`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(o=>o.id===t.section)+1}):this.t("solar_main");if(t.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=t.side==="c"||t.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${rs(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0${i}`}addSolarField(){if(!this.isAdmin)return;let t=yt(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,i=Oi(t.filter(s=>!e.has(s.key)),n)??Oi(t,n);if(!i)return;let o=Ti(i,J("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(t){var n;this._solarId=t,this._roofId=null;let e=(n=this._doc.settings.roof.solar)==null?void 0:n.find(i=>i.id===t);e!=null&&e.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){var n;if(!this.isAdmin)return;let t=this._floorId??((n=this._doc.floors[0])==null?void 0:n.id),e=t?Ol(this._doc,J("pv"),t):null;e&&(this.change(i=>i.settings.roof.solar=[...i.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isAdmin)return;let t=es(this._doc,J("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var s;let i=(s=n.settings.roof.solar)==null?void 0:s.find(r=>r.id===e);if(!i)return;Object.assign(i,t);let o=Ct(n,i);o&&Object.assign(i,_n(o,i))}))}setSolarString(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var r;let i=n.settings.roof,o=(r=i.solar)==null?void 0:r.find(l=>l.id===e);if(!o)return;if(t==="new"){let l=i.strings??[],c={id:J("str"),name:this.t("solar_string_n",{n:l.length+1}),entity:o.entity??null,inverter:null};i.strings=[...l,c],o.string=c.id}else o.string=t;let s=new Set((i.solar??[]).map(l=>l.string).filter(Boolean));i.strings=(i.strings??[]).filter(l=>s.has(l.id))})}updateSolarString(t){var i;let e=(i=this._doc.settings.roof.solar)==null?void 0:i.find(o=>o.id===this._solarId),n=e==null?void 0:e.string;!n||!this.isAdmin||this.change(o=>{var r;let s=(r=o.settings.roof.strings)==null?void 0:r.find(l=>l.id===n);s&&Object.assign(s,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var o;let i=(o=n.settings.roof.solar)==null?void 0:o.find(s=>s.id===e);i&&t(i)})}deleteSolar(){let t=this._solarId;!t||!this.isAdmin||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==t);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=yt(this._doc),n=new Map(t.map(o=>[o.id,Ct(this._doc,o,e)])),i=this.isAdmin;return b`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?b`<div class="fp3d-room-list">
            ${t.map((o,s)=>{let r=n.get(o.id),l=r?be(r,o).length:0;return b`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(o.id)}
                >
                  <span>${o.name||`${this.t("solar_field")} ${s+1}`} · ${r?this.faceLabel(r):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:Bt(this.hass,l*(o.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?b`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(o=>{let s=t.filter(d=>d.string===o.id),r=s.map(d=>n.get(d.id)?be(n.get(d.id),d).length:0),l=r.reduce((d,u)=>d+u,0),c=s.reduce((d,u,p)=>d+r[p]*(u.wp??400)/1e3,0);return b`<p class="fp3d-sub">🔗 <b>${o.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:l,kwp:Bt(this.hass,c,1)})}</p>`})}`:y}
    </section>`}renderSolarForm(t){var h,f,m,_;let e=this.isAdmin,n=yt(this._doc),i=de(this._doc),o=Ct(this._doc,t,n),s=t.face===Fe,r=o?be(o,t).length:0,l=Vn(t),c=l.reduce((g,v)=>g+v,0)-(((h=t.skip)==null?void 0:h.length)??0),d=this.entityOptions(g=>this.isPowerSensor(g)),u=g=>this.updateSolar(g),p=(this._doc.settings.roof.solar??[]).findIndex(g=>g.id===t.id)+1;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${p}`}</h3>
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
              @change=${g=>u({name:g.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${g=>{let v=g.target.value,$={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h,wp:t.wp};v===Fe&&u({...es(this._doc,t.id),...$,rows:t.rows,cols:t.cols});let k=n.find(M=>M.key===v);k&&u(ss(k,{...t,...$}));let P=i.find(M=>M.key===v);P&&u(ss(P,{...t,...$,rows:1}))}}
            >
              ${o?y:b`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(g=>b`<option value=${g.key} ?selected=${g.key===t.face}>${this.faceLabel(g)}</option>`)}
              <option value=${Fe} ?selected=${s}>${this.t("solar_ground")}</option>
              ${i.map(g=>b`<option value=${g.key} ?selected=${g.key===t.face}>${this.faceLabel(g)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,g=>{var $;let v=Math.max(1,Math.min(40,Math.round(g)));u(($=t.layout)!=null&&$.length?{layout:Array.from({length:v},(k,P)=>t.layout[P]??t.layout[t.layout.length-1]),rows:v}:{rows:v})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${(f=t.layout)!=null&&f.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${g=>{let v=g.target.value.split(/[,;\s]+/).map($=>parseInt($,10)).filter($=>Number.isFinite($)&&$>=0);v.length&&(v.length===1?u({cols:Math.max(1,Math.min(60,v[0])),layout:null,skip:null}):u({layout:v.slice(0,40).map($=>Math.min(60,$)),rows:Math.min(40,v.length),cols:Math.max(1,...v),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${o&&!o.unbounded?b`${this.t("solar_face_size",{w:Bt(this.hass,o.lu,1),h:Bt(this.hass,o.ls,1)})} · `:y}${this.t("solar_cols_hint")}
        </p>
        ${(m=t.layout)!=null&&m.length&&new Set(t.layout).size>1?b`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(g=>b`<button aria-pressed=${(t.align??"left")===g} ?disabled=${!e} @click=${()=>u({align:g})}>${this.t(`solar_align_${g}`)}</button>`)}
            </div>`:y}
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.portrait!==!1} ?disabled=${!e} @click=${()=>u({portrait:!0})}>${this.t("solar_portrait")}</button>
          <button aria-pressed=${t.portrait===!1} ?disabled=${!e} @click=${()=>u({portrait:!1})}>${this.t("solar_landscape")}</button>
        </div>
        <div class="fp3d-seg fp3d-dev-source">
          <button aria-pressed=${t.look!=="blue"} ?disabled=${!e} @click=${()=>u({look:"black"})}>${this.t("solar_look_black")}</button>
          <button aria-pressed=${t.look==="blue"} ?disabled=${!e} @click=${()=>u({look:"blue"})}>${this.t("solar_look_blue")}</button>
        </div>
        <div class="fp3d-form">
          ${this.len(this.t("solar_module_w"),t.module_w??1.13,g=>u({module_w:Math.max(.3,Math.min(3,I(g)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),t.module_h??1.72,g=>u({module_h:Math.max(.3,Math.min(3,I(g)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),t.wp??400,g=>u({wp:Math.max(50,Math.min(1500,Math.round(g)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${(_=t.skip)!=null&&_.length?b`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:y}
        </div>
        ${this._solarPick?b`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:y}
        <div class="fp3d-form">
          ${s?b`${this.len(this.t("solar_base"),t.base??0,g=>u({base:g>.001?Math.min(60,I(g)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,g=>u(Wn(this._doc,t,g)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Wn(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Wn(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:b`${this.len(this.t("solar_u"),t.u,g=>u({u:I(g)}),.05)} ${this.num(this.t(o!=null&&o.wall?"solar_v_wall":"solar_v"),t.v,g=>u({v:I(g)}),.05)}`}
          ${o!=null&&o.wall?b`${this.num(this.t("solar_tilt_wall"),t.tilt??0,g=>u({tilt:Math.max(0,Math.min(90,Math.round(g)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${g=>u({flip:g.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:y}
          ${o!=null&&o.flat?b`${this.num(this.t("solar_tilt"),t.tilt??15,g=>u({tilt:Math.max(0,Math.min(45,Math.round(g)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${g=>u({flip:g.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:y}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:r,kwp:Bt(this.hass,r*(t.wp??400)/1e3,1)})}${r<c?b` · <b>${this.t("solar_partial",{n:r,total:c})}</b>`:y}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${g=>{let v=g.target.value;this.setSolarString(v===""?null:v)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(g=>b`<option value=${g.id} ?selected=${g.id===t.string}>${g.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{var P;let g=(P=this._doc.settings.roof.strings)==null?void 0:P.find(M=>M.id===t.string);if(!g)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,d,M=>u({entity:M==="none"?null:M}));let v=this.hass?an(this.hass,this._doc.floors):null,$=M=>this._doc.floors.flatMap(z=>z.furniture.filter(R=>R.type===M).map(R=>({m:R,fl:z}))).map(({m:z,fl:R},A)=>{var E,S;let w=(E=v==null?void 0:v.get(z.id))==null?void 0:E.entity,x=((S=z.name)==null?void 0:S.trim())||(w&&this.hass?_t(this.hass,w):"");return{id:z.id,label:`${x||`${this.t(`furn_${M}`)} ${A+1}`} \xB7 ${R.name}`}}),k=[...$("inverter"),...$("home_battery")];return b`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${g.name} @change=${M=>this.updateSolarString({name:M.target.value.trim()||g.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),g.entity??null,void 0,d,M=>this.updateSolarString({entity:M==="none"?null:M}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${M=>this.updateSolarString({inverter:M.target.value||null})}>
                  <option value="" ?selected=${!g.inverter}>${this.t(k.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${k.map(M=>b`<option value=${M.id} ?selected=${M.id===g.inverter}>${M.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${e?b`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!o} @click=${()=>o&&u({...Ti(o,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}renderRoofPanel(){var s;let t=this._doc.settings.roof,e=this.isAdmin,n=t.type==="custom"?this.roofSection:void 0,i=this._roofWinId?(s=t.windows)==null?void 0:s.find(r=>r.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=t.type==="custom"?t.sections??[]:[];return b`${this.renderRoofBasics()}
    <section>
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
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){var i,o;let t=this._solarId?(i=this._doc.settings.roof.solar)==null?void 0:i.find(s=>s.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?(o=this.floor)==null?void 0:o.furniture.find(s=>s.id===this._furnitureId&&me.includes(s.type)):void 0;if(e)return b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`;let n=vt("energy_pro");return b`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():y}${n?this.renderHologramSettings():y}${this.renderProCard()}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[],e=this.isAdmin,n=this._doc.settings.roof.hologram??ai,i=n.place==="free",o=l=>this.change(c=>c.settings.roof.hologram={...c.settings.roof.hologram??ai,...l}),s=(l,c)=>l.name||`${this.t("solar_field")} ${c+1}`,r=()=>{let l=-1/0,c=1/0,d=-1/0;for(let p of this._doc.floors)for(let h of p.rooms)for(let[f,m]of h.points)l=Math.max(l,f),c=Math.min(c,m),d=Math.max(d,m);let u=Number.isFinite(l);o({place:"free",x:n.x??(u?I(l+2):0),z:n.z??(u?I((c+d)/2):0),height:n.height??3})};return b`<section>
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
              ${this.len("X (m)",n.x??0,l=>o({x:I(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>o({z:I(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>o({height:Math.min(60,Math.max(0,I(l)))}),.25,0)}`:t.length?b`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!e} @change=${l=>o({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${t.map((l,c)=>b`<option value=${l.id} ?selected=${l.id===n.field}>${s(l,c)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>o({right:Math.min(30,Math.max(-30,I(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>o({up:Math.min(30,Math.max(-30,I(l)))}),.25)}`:b`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>o({size:Math.min(3,Math.max(.3,I(l)))}),.1,.3)}
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
    </section>`}isPowerSensor(t){var n,i;if(!Ot(t))return!1;let e=(i=(n=this.hass)==null?void 0:n.states[t])==null?void 0:i.attributes;return(e==null?void 0:e.device_class)==="power"||(e==null?void 0:e.unit_of_measurement)==="W"||(e==null?void 0:e.unit_of_measurement)==="kW"}devicePower(t,e){var n;return t.power&&t.power!=="none"?t.power:((n=e.get(t.id))==null?void 0:n.power)??null}renderEnergyChecklist(){let t=this._doc,e=this.hass?an(this.hass,t.floors):new Map,n=t.floors.flatMap(g=>g.furniture.map(v=>({m:v,fl:g}))),i=g=>n.filter(v=>v.m.type===g),o=g=>{this._floorId=g.fl.id,this._solarId=null,this.selectItem("furniture",g.m.id),this.showPoint(g.m.x,g.m.z)},s=t.settings.roof.solar??[],r=i("meter"),l=i("inverter"),c=i("home_battery"),d=i("grid_point"),u=!!t.energy.grid||r.some(g=>this.devicePower(g.m,e)),p=!!t.energy.solar||l.length>0&&l.every(g=>this.devicePower(g.m,e)),h=c.every(g=>this.devicePower(g.m,e)&&g.m.soc&&g.m.soc!=="none")||!!t.energy.battery,f=vt("energy_pro"),m=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},r.length?{state:u?"ok":"todo",label:this.t(u?"chk_meter":"chk_meter_sensor"),action:()=>o(r[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:p?"ok":"todo",label:this.t(p?"chk_inverter":"chk_inverter_sensor"),action:()=>o(l.find(g=>!this.devicePower(g.m,e))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},c.length?{state:h?"ok":"todo",label:this.t(h?"chk_battery":"chk_battery_sensor"),action:()=>o(c[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},d.length?{state:"ok",label:this.t("chk_grid"),action:()=>o(d[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},...f?[{state:"ok",label:this.t("chk_pro_active")}]:[]],_=m.filter(g=>g.state==="ok").length;return b`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${_}/${m.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${m.map(g=>g.href?b`<a class="fp3d-chk fp3d-chk-${g.state}" href=${g.href} target="_blank" rel="noopener"><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</a>`:b`<button class="fp3d-chk fp3d-chk-${g.state}" ?disabled=${!this.isAdmin&&!!g.action&&g.state!=="ok"} @click=${g.action}><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</button>`)}
    </section>`}renderHelpLinks(){return b`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new?labels=enhancement" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
      </div>
    </section>`}renderProCard(){if(vt("energy_pro"))return b`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${qe("energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
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
      <div class="fp3d-actions"><a class="fp3d-btn" href=${qe("energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isAdmin)return;if(t==="grid_point"){let v=hs(this._doc),[$,k,P]=Dt(t),[M,z]=v?v.end:this.toWorld(this._size.w/2,this._size.h/2),R={id:J("furniture"),type:t,x:I(M),z:I(z),rotation:0,w:$,d:k,h:P,variant:null};this.change((A,w)=>w.furniture.push(R)),this.selectItem("furniture",R.id),this.showPoint(R.x,R.z);return}let n=v=>{var $,k,P;return`${v.name} ${v.area_id&&((P=(k=($=this.hass)==null?void 0:$.areas)==null?void 0:k[v.area_id])==null?void 0:P.name)||""} ${v.area_id??""}`.toLowerCase()},i=e.rooms.filter(v=>v.points.length>=3),o=v=>i.find($=>v.test(n($))),s=i.find(v=>e.furniture.some($=>$.type==="parking"&&Q([$.x,$.z],v.points))),r=o(/garage|carport/)??s,l=o(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),c=o(/flur|diele|eingang|hall|entr|lobby/),d=(t==="wallbox"?r:t==="meter"?l??c??r:l??r)??this.room??i.sort((v,$)=>Math.abs(Pt($.points))-Math.abs(Pt(v.points)))[0],[u,p,h]=Dt(t),[f,m]=d?Qt(d.points):this.toWorld(this._size.w/2,this._size.h/2);if(d){let[v,$]=Qt(d.points),k=null,P=new Set(e.openings.filter(R=>R.room_id===d.id).map(R=>R.edge)),M=d.points.some((R,A)=>!P.has(A));d.points.forEach((R,A)=>{if(M&&P.has(A))return;let w=d.points[(A+1)%d.points.length],x=Math.hypot(w[0]-R[0],w[1]-R[1]);if(k&&x<=k.l)return;let E=(R[0]+w[0])/2,S=(R[1]+w[1])/2,T=-(w[1]-R[1])/x,L=(w[0]-R[0])/x;(v-E)*T+($-S)*L<0&&([T,L]=[-T,-L]),k={mx:E,mz:S,nx:T,nz:L,l:x}});let z=k;z&&([f,m]=[z.mx+z.nx*(p/2+.25),z.mz+z.nz*(p/2+.25)])}let _={id:J("furniture"),type:t,x:I(f),z:I(m),rotation:0,w:u,d:p,h,variant:null},g=d?Ln({...e,furniture:[...e.furniture,_]},_,this._doc.settings.wall_interior):null;g&&Object.assign(_,{x:I(g.x),z:I(g.z),rotation:g.rotation}),this.change((v,$)=>$.furniture.push(_)),this.selectItem("furniture",_.id),this.showPoint(_.x,_.z)}renderEnergyDevices(){let t=this.isAdmin,e=this._doc.floors.flatMap(n=>n.furniture.filter(i=>me.includes(i.type)).map(i=>({fl:n,m:i})));return b`<section>
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
          </div>`:y}
      <div class="fp3d-actions">
        ${me.map(n=>b`<button
            class="fp3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(t){let e=this.isAdmin,n=h=>this.updateRoofSection(h),i=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[o,s]=t.flip?[i[1],i[0]]:i,r=t.shape==="flat"||t.shape==="parapet",l=t.shape==="pent",c=h=>h.findIndex(f=>f.id===t.id)+1,d=(h,f,m,_=.05,g=0)=>this.len(h,f,v=>m(Math.max(g,I(v))),_,g),u=(h,f,m)=>this.num(h,f,_=>m(Math.max(0,I(_))),1,0),p=!!this._doc.settings.lock_plan;return b`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${t.dormer?this.t("roof_dormer"):this.t("roof_section")} ${c(this._doc.settings.roof.sections??[])}</h3>
          ${e?p?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:b`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:y}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!e} @change=${h=>n({shape:h.target.value})}>
            ${Mr.map(h=>b`<option value=${h} ?selected=${t.shape===h}>${this.t(`roof_shape_${h}`)}</option>`)}
          </select>
        </label>
        ${r?y:b`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${h=>n({open:h.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${r?d(this.t("roof_height"),t.eave_a,h=>n({eave_a:h,eave_b:h})):b`${d(`${this.t("roof_eave")} ${l?"":o}`,t.eave_a,h=>n({eave_a:h}))}
              ${l?y:d(`${this.t("roof_eave")} ${s}`,t.eave_b,h=>n({eave_b:h}))}
              ${u(`${this.t("roof_pitch_short")} ${l?"":o}`,t.pitch_a,h=>n({pitch_a:Math.min(75,h)}))}
              ${l?y:u(`${this.t("roof_pitch_short")} ${s}`,t.pitch_b,h=>n({pitch_b:Math.min(75,h)}))}`}
          ${d(this.t("roof_base"),t.base,h=>n({base:h}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!e}
              @change=${h=>{let f=this._doc.floors.find(g=>g.id===h.target.value);if(!f)return;let m=I(f.elevation+f.height),_=m-t.base;n({base:m,eave_a:I(t.eave_a+_),eave_b:I(t.eave_b+_)})}}
            >
              ${[...this._doc.floors].filter(h=>h.rooms.length).sort((h,f)=>f.elevation-h.elevation).map(h=>{var f;return b`<option value=${h.id} ?selected=${((f=Il(this._doc,t))==null?void 0:f.id)===h.id}>${h.name}</option>`})}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${d(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,h=>n({overhang:Math.min(2,h)}),.05,0)}
        </div>
        ${r&&e?b`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${t.points?b`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:y}
            </div>
            <p class="fp3d-sub">${this.t(t.points?"roof_points_hint":"roof_outline_hint")}</p>`:y}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(zi(t),2)} · ${this.t("roof_section_hint")}</p>
        ${e?b`<div class="fp3d-actions">
              ${r?y:b`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!r&&!t.dormer&&!t.open?b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${o}</button>
                  ${l?y:b`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:y}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(i=>i.id===n);case"opening":return t.openings.find(i=>i.id===n);case"furniture":return t.furniture.find(i=>i.id===n);case"device":return t.placements.find(i=>i.entity_id===n);case"wall":return(t.walls??[]).find(i=>i.id===n);case"outdoor":return t.outdoor.find(i=>i.id===n)}}isFixedItem(t,e){return co(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isAdmin||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);n||(this._fixedHint=!1),this.change((i,o)=>{let s=this.fixItem(o,t,e);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(t=>t.settings.lock_plan=!t.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(t){t.preventDefault(),!(this.rightPress||performance.now()-this.rightUp<600)&&(this._tool!=="select"&&this._tool!=="furniture"||(this.drag=null,this.openContext(t.target,this.localPoint(t))))}openContext(t,e){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...e),i=f=>{var m;return((m=t.closest(`[${f}]`))==null?void 0:m.getAttribute(f))??null},o=null,s=i("data-device"),r=i("data-opening"),l=t.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),c=i("data-free-wall"),d=i("data-outdoor")?this.outdoorAt(n)??i("data-outdoor"):null,u=i("data-room")??this.roomAt(n);if(s?o=["device",s]:r?o=["opening",r]:l?o=["furniture",l]:c?o=["wall",c]:d&&!u?o=["outdoor",d]:u&&(o=["room",u]),!o){this._ctx=null;return}let[p,h]=o;this.selectItem(p,h),(p==="opening"||p==="furniture")&&(this._roomId=this._roomId??u),this._ctx={x:e[0],y:e[1],kind:p,id:h}}deleteItem(t,e){if(t==="device"){if(!this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return y;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(t.x,((n==null?void 0:n.clientWidth)??800)-190)),o=Math.max(4,Math.min(t.y,((n==null?void 0:n.clientHeight)??600)-190)),s=r=>()=>{this._ctx=null,r()};return b`<div class="fp3d-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${r=>r.stopPropagation()} @contextmenu=${r=>r.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?b`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:b`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?b`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:y}
      ${t.kind==="furniture"?b`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${s(()=>{var l;let r=(l=this.floor)==null?void 0:l.furniture.find(c=>c.id===t.id);r&&this.openWallViewFor(r)})}>▦ ${this.t("wall_view")}</button>`:y}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isAdmin)return y;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?b`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:y;let n=this.isFixedItem(t,e);return b`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){var n,i,o;if(this._notice=null,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._multi=[],this._single=!1,this._deviceId=t==="device"?e:null,t==="device"&&e){let s=(n=this.floor)==null?void 0:n.placements.find(r=>r.entity_id===e);this._roomId=(s&&this.roomAt([s.x,s.z]))??this._roomId}t==="opening"&&e&&(this._roomId=((o=(i=this.floor)==null?void 0:i.openings.find(s=>s.id===e))==null?void 0:o.room_id)??this._roomId)}get opening(){var t;return this._openingId?(t=this.floor)==null?void 0:t.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){var t;return this._furnitureId?(t=this.floor)==null?void 0:t.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,o){let s=t.points[e],r=t.points[(e+1)%t.points.length],l=Math.hypot(r[0]-s[0],r[1]-s[1])||1,c=((n[0]-s[0])*(r[0]-s[0])+(n[1]-s[1])*(r[1]-s[1]))/l,d=o?.01:this._doc.settings.grid,u=Math.min(i,l)/2;return I(Math.min(l-u,Math.max(u,Math.round(c/d)*d)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let m of n.walls??[]){let _=dn({room_id:"",edge:0,wall:m.id},n.rooms,n.walls??[]);if(!_)continue;let[g,v]=this.toScreen(m.a),[$,k]=this.toScreen(m.b),P=($-g)**2+(k-v)**2||1,M=Math.min(1,Math.max(0,((e[0]-g)*($-g)+(e[1]-v)*(k-v))/P)),z=Math.hypot(e[0]-g-($-g)*M,e[1]-v-(k-v)*M),R=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],A=n.rooms.find(w=>w.points.length>=3&&Q(R,w.points));z<Bi*2.2&&(!i||z-1<i.d)&&(i={room:_.room,edge:0,d:z-1,wall:m.id,roomId:(A==null?void 0:A.id)??m.id})}for(let m of n.rooms)for(let _=0;_<m.points.length;_++){let[g,v]=this.toScreen(m.points[_]),[$,k]=this.toScreen(m.points[(_+1)%m.points.length]),P=($-g)**2+(k-v)**2||1,M=Math.min(1,Math.max(0,((e[0]-g)*($-g)+(e[1]-v)*(k-v))/P)),z=Math.hypot(e[0]-g-($-g)*M,e[1]-v-(k-v)*M),R=z-(m.id===this._roomId?.5:0);z<Bi*2.2&&(!i||R<i.d)&&(i={room:m,edge:_,d:R})}if(!i)return!1;let{room:o,edge:s,wall:r}=i,l=o.points[s],c=o.points[(s+1)%o.points.length],d=Math.hypot(c[0]-l[0],c[1]-l[1]),u=fi[t],p=u.type,h=I(Math.min(u.width,Math.max(.3,d-.1))),f={id:J("opening"),room_id:i.roomId??o.id,edge:s,...r?{wall:r}:{},offset:this.offsetOnEdge(o,s,this.toWorld(...e),h,!1),width:h,type:p,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((m,_)=>_.openings.push(f)),this.selectItem("opening",f.id),!0}setOpeningPreset(t,e){let n=fi[e];this._openingPreset=e;let i=mi(t)===e,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(o=>o.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||!this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}glowScaleField(t,e){return b`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((t??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;e(Math.abs(i-1)<.001?null:i)}}
    /></label>`}typeChoices(t){let e=new Set(Object.values(ui).flat());return(vt("fridge_smart")||vt("household"))&&e.add("fridge_smart"),ci.filter(n=>e.has(n)||n===t)}furnitureFor(t){let e=at(t),n=[...ci.map(s=>({type:s,label:this.t(`furn_${s}`)})),...(this.packs??[]).flatMap(s=>s.items.map(r=>({type:He(s.id,r.id),label:`${oe(r)} \xB7 ${fe(s)}`})))],i=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,o=s=>e==="light"?Vt(s):e==="climate"?s==="radiator"||s==="ac_unit":t.startsWith("vacuum.")?he(s):e==="media"?xi(s)||nn(s)&&i.test(s):nn(s)&&!Vt(s);return n.filter(s=>o(s.type)).sort((s,r)=>s.label.localeCompare(r.label))}vehicleToSpot(t){if(!this.isAdmin)return;let[e,n,i]=Dt("parking"),o={id:J("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,I(t.w+.5)),d:Math.max(n,I(t.d+.4)),h:i,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}};this.change((s,r)=>{r.furniture=r.furniture.filter(l=>l.id!==t.id),r.furniture.push(o)}),this.selectItem("furniture",o.id)}deviceToFurniture(t,e){if(!this.isAdmin)return;let[n,i,o]=Dt(e),s={id:J("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:i,h:o,variant:null,entity:t.entity_id,name:t.name??null,...t.locked?{locked:!0}:{}};this.change((r,l)=>{l.placements=l.placements.filter(c=>c.entity_id!==t.entity_id),l.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(t){let e=t.entity;if(!this.isAdmin||!e||e==="none")return;let n={entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,...t.name?{name:t.name}:{},...e.startsWith("light.")?{pin:!0}:{}};this.change((i,o)=>{o.furniture=o.furniture.filter(s=>s.id!==t.id),o.placements.some(s=>s.entity_id===e)||o.placements.push(n)}),this._furnitureId=null,this.selectItem("device",e)}renderAsFurniture(t){if(!this.isAdmin)return y;let e=this.furnitureFor(t.entity_id);return e.length?b`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let i=n.target.value;i&&this.deviceToFurniture(t,i)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${e.map(n=>b`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:y}addFurniture(t){let e=this.floor;if(!e||!this.isAdmin)return;let[n,i,o]=Dt(t),s=this._doc.floors.filter(h=>h.elevation>e.elevation).sort((h,f)=>h.elevation-f.elevation)[0],r=bo.has(t)?I(s?s.elevation-e.elevation:e.height+.25):o,l=this.room,[c,d]=l?Qt(l.points):this.toWorld(this._size.w/2,this._size.h/2),u=0;if(t==="parking"&&l){let h=e.openings.find(g=>g.room_id===l.id&&g.type==="garage"),f=h?l.points[h.edge]:null,m=h?l.points[(h.edge+1)%l.points.length]:null,_=At(l.points);u=(f&&m?Math.abs(m[1]-f[1])>Math.abs(m[0]-f[0]):_.x1-_.x0>_.z1-_.z0)?90:0}let p={id:J("furniture"),type:t,x:I(c),z:I(d),rotation:u,w:n,d:i,h:r,variant:null};this.change((h,f)=>f.furniture.push(p)),this.selectItem("furniture",p.id),this.showPoint(p.x,p.z)}snapToWall(t){return this.floor?Ln(this.floor,t,this._doc.settings.wall_interior):null}updateFurniture(t){let e=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(o=>o.id===e),t))}mirrorFurniture(){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({mirror:!t.mirror})}rotateFurniture(t){let e=this.furnitureItem;if(!e||!this.isAdmin)return;if(this.selection().length>1)return this.rotateSelection(t);this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;if(!t||!this.isAdmin)return;let e=this.selection();if(e.length>1){let n=e.some(o=>this.isFixedItem("furniture",o));if(!confirm(this.t(n?"block_delete_fixed":"block_delete",{n:e.length})))return;let i=new Set(e);this.change((o,s)=>s.furniture=s.furniture.filter(r=>!i.has(r.id))),this.selectItem("room",this._roomId);return}this.confirmFixedDelete("furniture",t)&&(this.change((n,i)=>i.furniture=i.furniture.filter(o=>o.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e=this.selection();if(e.length>1){let i=this.floor.furniture.filter(r=>e.includes(r.id)),o=new Map,s=i.map(r=>({...structuredClone(r),id:J("furniture"),x:I(r.x+.3),z:I(r.z+.3),group:r.group?o.get(r.group)??o.set(r.group,J("block")).get(r.group):null,locked:null}));this.change((r,l)=>l.furniture.push(...s)),this.setMulti(s.map(r=>r.id));return}let n={...structuredClone(t),id:J("furniture"),x:I(t.x+.3),z:I(t.z+.3),group:this._single?t.group:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}selection(){var e;if(this._multi.length)return this._multi;let t=this.furnitureItem;return t?t.group&&!this._single?(((e=this.floor)==null?void 0:e.furniture)??[]).filter(n=>n.group===t.group).map(n=>n.id):[t.id]:[]}withGroups(t){var n,i;let e=new Set((((n=this.floor)==null?void 0:n.furniture)??[]).filter(o=>t.includes(o.id)&&o.group).map(o=>o.group));return[...new Set([...t,...(((i=this.floor)==null?void 0:i.furniture)??[]).filter(o=>o.group&&e.has(o.group)).map(o=>o.id)])]}setMulti(t){if(!t.length)return this.selectItem("room",this._roomId);this.selectItem("furniture",t[0]);let e=this.selection();t.length>1&&!(t.length===e.length&&t.every(n=>e.includes(n)))&&(this._multi=t)}toggleMulti(t){let e=this._furnitureId?this.selection():[],n=this.withGroups([t]),i=e.includes(t)?e.filter(o=>!n.includes(o)):[...new Set([...e,...n])];this.setMulti(i)}selectionCentre(t){var o;let e=(((o=this.floor)==null?void 0:o.furniture)??[]).filter(s=>t.includes(s.id)),n=e.map(s=>s.x),i=e.map(s=>s.z);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...i)+Math.max(...i))/2]}rotateSelection(t){let e=this.selection();if(e.some(c=>this.isFixedItem("furniture",c))){this._fixedHint=!0;return}let[n,i]=this.selectionCentre(e),o=t*Math.PI/180,s=Math.round(Math.cos(o)*1e6)/1e6,r=Math.round(Math.sin(o)*1e6)/1e6,l=new Set(e);this.change((c,d)=>{for(let u of d.furniture){if(!l.has(u.id))continue;let p=u.x-n,h=u.z-i;Object.assign(u,{x:I(n+p*s-h*r),z:I(i+p*r+h*s),rotation:((u.rotation+t)%360+360)%360})}})}groupSelection(){let t=new Set(this.selection());if(t.size<2)return;let e=J("block");this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=e)}),this._multi=[],this._single=!1}ungroupSelection(){let t=this.selection(),e=new Set(t);this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=null)}),t.length>1&&(this._multi=t)}lockSelection(t){let e=new Set(this.selection());this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.locked=t||null)})}placeDevices(t,e){let n=e??this.room;if(!n||!t.length||!this.isAdmin)return;let i=new Set(t);this.change((o,s)=>{for(let l of o.floors)l.placements=l.placements.filter(c=>!i.has(c.entity_id)),l.furniture=l.furniture.filter(c=>!(Vt(c.type)&&c.entity&&i.has(c.entity)));let r=[...s.placements.map(l=>[l.x,l.z]),...s.furniture.filter(l=>Vt(l.type)).map(l=>[l.x,l.z])];for(let l of ma(n,t,r)){if(!l.entity_id.startsWith("light.")||n.outdoor){s.placements.push(l);continue}let[c,d,u]=se.lamp_ceiling;s.furniture.push({id:J("furniture"),type:"lamp_ceiling",x:l.x,z:l.z,rotation:0,w:c,d,h:u,variant:null,entity:l.entity_id,power:null})}})}get device(){var t;return this._deviceId?(t=this.floor)==null?void 0:t.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(o=>o.entity_id===e),t))}centreDevice(){var s;let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=(s=this.floor)==null?void 0:s.rooms.find(r=>r.id===e);if(!t||!n)return;let[i,o]=Qt(n.points);this.updateDevice({x:I(i),z:I(o)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(u=>at(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&Q([u.x,u.z],t.points));if(n.length<2)return;let i=At(t.points),o=i.x1-i.x0,s=i.z1-i.z0,r=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,s)))),l=Math.ceil(n.length/r),c=n.map((u,p)=>{let h=Math.floor(p/r),f=h===l-1?n.length-r*(l-1):r,m=p-h*r;return[I(i.x0+o/f*(m+.5)),I(i.z0+s/l*(h+.5))]}),d=n.map(u=>u.entity_id);this.change((u,p)=>{d.forEach((h,f)=>Object.assign(p.placements.find(m=>m.entity_id===h),{x:c[f][0],z:c[f][1]}))})}straightenFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,fixed:n}=Ta(t.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((i,o)=>o.rooms=e),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=Fa(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Ra(n);this.change((o,s)=>{s.rooms=e,i&&(o.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:Bt(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(Vt(i.type)&&i.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n;this.change((o,s)=>{let r=s.rooms.find(l=>l.id===e.id);r.points.splice(t,1),r.wall_heights&&r.wall_heights.splice(t,1),r.wall_thickness&&r.wall_thickness.splice(t,1),r.wall_slopes&&(r.wall_slopes.splice(t,1),r.wall_slopes[(t-1+r.points.length)%r.points.length]=null,r.wall_slopes.every(l=>!l)&&(r.wall_slopes=void 0)),s.openings=s.openings.filter(l=>l.room_id!==e.id||l.wall||l.edge!==t&&l.edge!==i).map(l=>l.room_id===e.id&&!l.wall&&l.edge>t?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(t,e){if(!this.isAdmin||!t&&!e)return;let n=o=>[I(o[0]+t),I(o[1]+e)],i=o=>{for(let s of o.rooms)s.points=s.points.map(n);for(let s of o.furniture)s.x=I(s.x+t),s.z=I(s.z+e);for(let s of o.placements)s.x=I(s.x+t),s.z=I(s.z+e);for(let s of o.outdoor)s.points=s.points.map(n);for(let s of o.walls??[])s.a=n(s.a),s.b=n(s.b);o.background&&(o.background.x=I(o.background.x+t),o.background.z=I(o.background.z+e))};this._shiftAll?this.change(o=>{for(let s of o.floors)i(s);this.moveHouseExtras(o,n)}):this.change((o,s)=>i(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(t,e){for(let i of t.settings.roof.sections??[]){let o=[e([i.x0,i.z0]),e([i.x1,i.z0]),e([i.x1,i.z1]),e([i.x0,i.z1])];i.x0=Math.min(...o.map(s=>s[0])),i.x1=Math.max(...o.map(s=>s[0])),i.z0=Math.min(...o.map(s=>s[1])),i.z1=Math.max(...o.map(s=>s[1])),i.points&&(i.points=i.points.map(e))}for(let i of t.settings.roof.cables??[])i.points=i.points.map(e);t.energy.meter&&([t.energy.meter.x,t.energy.meter.z]=e([t.energy.meter.x,t.energy.meter.z]));let n=t.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=e([n.x,n.z]))}turnFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let e=(this._shiftAll?this._doc.floors:[t]).flatMap(c=>c.rooms.flatMap(d=>d.points));if(!e.length)return;let n=e.map(c=>c[0]),i=e.map(c=>c[1]),o=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...i)+Math.max(...i))/2,r=c=>[I(o-(c[1]-s)),I(s+(c[0]-o))],l=c=>{for(let d of c.rooms)d.points=d.points.map(r);for(let d of c.furniture)[d.x,d.z]=r([d.x,d.z]),d.rotation=(d.rotation+90)%360;for(let d of c.placements)[d.x,d.z]=r([d.x,d.z]),d.rotation=((d.rotation??0)+90)%360;for(let d of c.outdoor)d.points=d.points.map(r);for(let d of c.walls??[])d.a=r(d.a),d.b=r(d.b);c.background&&([c.background.x,c.background.z]=r([c.background.x,c.background.z]),c.background.rotation=((c.background.rotation??0)+90)%360)};this._shiftAll?this.change(c=>{for(let d of c.floors)l(d);this.moveHouseExtras(c,r)}):this.change((c,d)=>l(d))}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(o=>o.id===e),t))}setArea(t){var o,s,r;let e=this.room;if(!e)return;let n=t?(s=(o=this.hass)==null?void 0:o.areas)==null?void 0:s[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(((r=this.hass)==null?void 0:r.areas)??{}).some(l=>l.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=At(n.points),{x0:o,z0:s,x1:r,z1:l}=i;t==="x"&&([o,r]=[e,e+(r-o)]),t==="z"&&([s,l]=[e,e+(l-s)]),t==="w"&&e>.05&&(r=o+e),t==="d"&&e>.05&&(l=s+e),this.updateRoom({points:[[I(o),I(s)],[I(r),I(s)],[I(r),I(l)],[I(o),I(l)]]})}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(s=>[...s]);o[t][e]=I(n),this.updateRoom({points:o})}async loadImage(t){this.loadingImages.add(t);try{let e=await ro(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){var d,u;let e=t.target,n=(d=e.files)==null?void 0:d[0];if(e.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*o),s.height=Math.round(i.height*o),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let r=s.toDataURL("image/jpeg",.85),l=J("img");await oi(this.hass,l,r),this._images={...this._images,[l]:{url:r,aspect:s.height/s.width}};let c=(u=this.floor)!=null&&u.rooms.length?At(this.floor.rooms.flatMap(p=>p.points)):null;this.updateFloor({background:{image_id:l,x:c?c.x0:0,z:c?c.z0:0,width:c?Math.max(4,I(c.x1-c.x0)):12,opacity:.5}})}selectFloor(t){this._floorId=t,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}renderFloorMenu(){let t=this._doc.floors,e=this.floor,n=this.isAdmin,i=this._toolMenu==="floor",o=()=>(this._toolMenu=null,this._floorMenu=!1);return b`<div class="fp3d-seg fp3d-seg-menu">
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
                        aria-expanded=${this.freeHaFloors.length?this._floorMenu:y}
                        @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:(o(),this.addFloor())}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length?b`<span class="fp3d-menu-more">${this._floorMenu?"\u25BE":"\u25B8"}</span>`:y}
                      </button>
                      ${this._floorMenu?b`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map(s=>b`<button class="fp3d-chip" @click=${()=>(o(),this.addFloor(s))}>${s.name}</button>`)}
                            <button class="fp3d-chip" @click=${()=>(o(),this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`:y}
                      ${e?b`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${()=>{o(),this.setTool("select"),this.selectItem("room",null),this._sideOpen=!0}}
                          >
                            ${this.t("floor_settings")}
                          </button>`:y}`:y}
              </div>`:y}
      </div>
    </div>`}setTool(t){var n;let e=this.floor;if(this._tool=t,this._draft=[],this._cursor=null,this._pipeMode=!1,this._pipeDraft=null,t==="pool"&&((n=this.outdoorArea)==null?void 0:n.type)!=="pool"){let i=e==null?void 0:e.outdoor.find(o=>o.type==="pool");i&&this.selectItem("outdoor",i.id)}this.setSideFolded(!1)}renderToolBar(t){let e=this.isAdmin,n=!t||!e,i=po.filter(h=>h!=="pool"),o={tool:"rect",label:this.t("tool_room"),choices:()=>[{label:this.t("tool_rect"),on:this._tool==="rect",pick:()=>this.setTool("rect")},{label:this.t("tool_polygon"),on:this._tool==="polygon",pick:()=>this.setTool("polygon")},{label:this.t("tool_measure"),on:this._tool==="measure",pick:()=>this.setTool("measure")}]},s={tool:"outdoor",label:this.t("tool_outdoor"),choices:()=>[...i.map(h=>({label:this.t(`out_${h}`),on:this._tool==="outdoor"&&(this._outdoorType??"lawn")===h,pick:()=>{this.setTool("outdoor"),this._outdoorType=h}})),{label:this.t("outdoor_shape_rect"),on:this._tool==="outdoor"&&!this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!1)},{label:this.t("outdoor_shape_free"),on:this._tool==="outdoor"&&this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!0)}]},r={tool:"pool",label:this.t("tool_pool"),choices:()=>[...["rect","round","oval","free"].map(h=>({label:this.t(`pool_shape_${h}`),on:this._tool==="pool"&&!this._pipeMode&&(this._poolShape??"rect")===h,pick:()=>{this.setTool("pool"),this._poolShape=h,this._outdoorFree=h==="free"}})),...this.pipeRules?[{label:this.t("pool_pipe_draw"),on:this._tool==="pool"&&!!this._pipeMode,pick:()=>(this.setTool("pool"),this._pipeMode=!0)}]:[]]},l=[{id:"build",label:this.t("tool_group_build"),entries:[o,{tool:"wall",label:this.t("tool_wall")},{tool:"opening",label:this.t("tool_opening")},{tool:"hole",label:this.t("tool_hole")},{tool:"roof",label:this.t("tool_roof")}]},{id:"outside",label:this.t("tool_group_outside"),entries:[s,r]}],c=h=>h.tool===this._tool||h===o&&(this._tool==="polygon"||this._tool==="measure"),d=h=>h===r?this._pipeMode?this.t("pool_pipe_draw"):this.t(`pool_shape_${this._poolShape??"rect"}`):h===s?this.t(`out_${this._outdoorType??"lawn"}`):h===o?this.t(`tool_${this._tool}`):"",u=()=>(this._toolMenu=null,this._toolOpen=null),p=(h,f)=>b`<button aria-pressed=${this._tool===h} ?disabled=${n} @click=${()=>(u(),this.setTool(h))}>${f}</button>`;return b`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool==="select"} ?disabled=${!t} @click=${()=>(u(),this.setTool("select"))}>${this.t("tool_select")}</button>
        ${l.map(h=>{let f=h.entries.find(c),m=this._toolMenu===h.id,_=f?`${f.label}${d(f)?`: ${d(f)}`:""}`:h.label;return b`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!f} aria-haspopup="menu" aria-expanded=${m} ?disabled=${n} @click=${()=>(this._toolMenu=m?null:h.id,this._toolOpen=null,this._viewMenu=!1)}>
              ${_} <span class="fp3d-caret">▾</span>
            </button>
            ${m?b`<div class="fp3d-menu-veil" @click=${u}></div>
                  <div class="fp3d-menu" role="menu">
                    ${h.entries.map(g=>{var k;let v=((k=g.choices)==null?void 0:k.call(g))??[],$=this._toolOpen===g.tool;return b`<button
                          role="menuitem"
                          class="fp3d-menu-item ${c(g)?"fp3d-menu-on":""}"
                          aria-expanded=${v.length?$:y}
                          @click=${()=>{v.length?this._toolOpen=$?null:g.tool:(this.setTool(g.tool),u())}}
                        >
                          ${g.label}${v.length?b`<span class="fp3d-menu-more">${$?"\u25BE":"\u25B8"}</span>`:y}
                        </button>
                        ${$?b`<div class="fp3d-menu-sub">
                              ${v.map(P=>b`<button
                                    class="fp3d-chip ${P.on?"fp3d-menu-on":""}"
                                    @click=${()=>{P.pick(),this._draft=[],u()}}
                                  >
                                    ${P.label}
                                  </button>`)}
                            </div>`:y}`})}
                  </div>`:y}
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
      </div>
      ${this.renderSettingsMenu(u)}`}renderSettingsMenu(t){let e=this.isAdmin,n=this._settingsMenu,o=[{key:"house",icon:"\u{1F3E0}",label:this.t("settings_house"),admin:!0},{key:"weather",icon:"\u{1F326}",label:this.t("settings_weather"),admin:!0},{key:"director",icon:"\u{1F3AC}",label:this.t("card_director"),admin:!0},{key:"voice",icon:"\u{1F399}",label:this.t("voice"),admin:!1},{key:"favorites",icon:"\u2B50",label:this.t("favorites"),admin:!0},{key:"backdrop",icon:"\u{1F5BC}",label:this.t("backdrop"),admin:!0},{key:"terrain",icon:"\u26F0",label:this.t("terrain"),admin:!0},{key:"backup",icon:"\u{1F4BE}",label:this.t("backup"),admin:!0}].filter(r=>e||!r.admin),s=()=>{t(),this._settingsMenu=!n};return b`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-settings">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${n} title=${this.t("settings")} @click=${s}>
          ⚙ <span class="fp3d-settings-word">${this.t("settings")}</span> <span class="fp3d-caret">▾</span>
        </button>
        ${n?b`<div class="fp3d-menu-veil" @click=${()=>this._settingsMenu=!1}></div>
              <div class="fp3d-menu fp3d-menu-right" role="menu">
                ${o.map(r=>b`<button
                    role="menuitem"
                    class="fp3d-menu-item"
                    @click=${()=>{this._settingsDialog=r.key,this._settingsMenu=!1,r.key==="voice"&&this.hass&&ms(this.hass,this.packs??[]).then(()=>this.requestUpdate())}}
                  >
                    ${r.icon} ${r.label}
                  </button>`)}
              </div>`:y}
      </div>
    </div>`}renderSettingsDialog(){let t=this._settingsDialog;if(!t)return y;let e=()=>this._settingsDialog=null,n={house:this.t("settings_house"),weather:this.t("settings_weather"),director:this.t("card_director"),voice:this.t("voice"),favorites:this.t("favorites"),backdrop:this.t("backdrop"),terrain:this.t("terrain"),backup:this.t("backup")},i=t==="house"?this.renderHouseSettings():t==="weather"?this.renderWeatherSettings():t==="director"?this.renderDirector():t==="voice"?this.renderVoice():t==="favorites"?this.renderFavorites():t==="backdrop"?this.renderBackdrop():t==="terrain"?this.renderTerrain():this.renderBackup();return b`<div class="fp3d-dialog-veil" @click=${o=>o.target===o.currentTarget&&e()}>
      <div class="fp3d-dialog" role="dialog" aria-label=${n[t]} tabindex="-1" @keydown=${o=>o.key==="Escape"&&e()}>
        <div class="fp3d-dialog-head">
          <h3>${n[t]}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${e}>✕</button>
        </div>
        <div class="fp3d-dialog-body">${i}</div>
      </div>
    </div>`}render(){let t=this.floor,e=t?Tt(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return b`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderSettingsDialog()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}" style=${`--fp3d-side-w:${this._sideWidth}px`}>
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?b`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:y}
            ${this.renderFloorMenu()} ${this.renderToolBar(t)}
            ${e!=null&&e.warnings.length?b`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:y}
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
              ${this._tool==="roof"?C`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?C`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&t&&this.pipeRules?this.renderPoolPlan(t):y} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${t?this._wallPick?this.t("hint_wall_pick"):this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this._outdoorFree?this.t("hint_outdoor_free"):this._tool==="pool"&&this._jointPlace?this.t("hint_joint_place"):this._tool==="pool"&&this._pipeMode?this.t(this.poolArea?this._pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool"):this._tool==="pool"&&Ee("pool")?this.t("hint_pool_tech"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?b`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:y}
          ${this._split?this.render3d():y}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}renderBackground(t){let e=t==null?void 0:t.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return y;let[i,o]=this.toScreen([e.x,e.z]),s=e.width*this._view.scale,r=s*n.aspect,l=e.rotation??0,c=this.bgHandles();return C`<g transform="rotate(${l} ${i+s/2} ${o+r/2})">
      <image href=${n.url} x=${i} y=${o} width=${s} height=${r} opacity=${e.opacity} preserveAspectRatio="none" pointer-events=${c?"auto":"none"} data-bg="1" style=${c?"cursor:move":""} />
      ${c?C`<rect class="fp3d-bg-frame" x=${i} y=${o} width=${s} height=${r} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+s} cy=${o+r} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+s/2} y1=${o} x2=${i+s/2} y2=${o-30} />
            <circle cx=${i+s/2} cy=${o-30} r="16" class="fp3d-hit" />
            <circle cx=${i+s/2} cy=${o-30} r="8" />
            <path d="M${i+s/2-4} ${o-31}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>${this.renderBgRuler()}`}bgHandles(){var t;return!!((t=this.floor)!=null&&t.background)&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){var n;let t=(n=this._bgLevel)!=null&&n.length?this._bgLevel:this._bgRuler;if(!(t!=null&&t.length))return y;let e=t.map(i=>this.toScreen(i));return C`<g class="fp3d-bg-ruler">
      ${e.length===2?C`<line x1=${e[0][0]} y1=${e[0][1]} x2=${e[1][0]} y2=${e[1][1]} />`:y}
      ${e.map(([i,o])=>C`<circle cx=${i} cy=${o} r="6" />`)}
    </g>`}applyBgLevel(t,e){var h;let n=(h=this.floor)==null?void 0:h.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(e[0]-t[0],e[1]-t[1])<.05)return;let o=Math.atan2(e[1]-t[1],e[0]-t[0]),s=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(s)<1e-4)return;let r=n.width*i.aspect,l=[n.x+n.width/2,n.z+r/2],c=l[0]-t[0],d=l[1]-t[1],u=[t[0]+c*Math.cos(s)-d*Math.sin(s),t[1]+c*Math.sin(s)+d*Math.cos(s)],p=(n.rotation??0)+s*180/Math.PI;p=Math.round((((p+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:p,x:I(u[0]-n.width/2),z:I(u[1]-r/2)}})}applyBgRuler(t){let e=this.floor,n=e==null?void 0:e.background,i=this._bgRuler,o=n?this._images[n.image_id]:void 0;if(!n||!o||!i||i.length<2||!(t>0))return;let s=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(s<1e-4)return;let r=t/s,l=n.width*o.aspect,c=[n.x+n.width/2,n.z+l/2],d=i[0],u=[d[0]+r*(c[0]-d[0]),d[1]+r*(c[1]-d[1])],p=n.width*r,h=l*r;this.updateFloor({background:{...n,width:I(p),x:I(u[0]-p/2),z:I(u[1]-h/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(t,e,n){let i=t.width*n,o=t.x+t.width/2,s=t.z+i/2,r=-(t.rotation??0)*Math.PI/180,l=e[0]-o,c=e[1]-s;return[o+l*Math.cos(r)-c*Math.sin(r)-t.x,s+l*Math.sin(r)+c*Math.cos(r)-t.z]}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,o=t>=20?1:5,[s,r]=this.toWorld(0,0),[l,c]=this.toWorld(e,n),d=[],u=(f,m)=>{for(let _=Math.ceil(s/f)*f;_<=l;_+=f){let g=this.toScreen([_,0])[0];d.push(C`<line class=${m} x1=${g} y1="0" x2=${g} y2=${n} />`)}for(let _=Math.ceil(r/f)*f;_<=c;_+=f){let g=this.toScreen([0,_])[1];d.push(C`<line class=${m} x1="0" y1=${g} x2=${e} y2=${g} />`)}};i<o&&u(i,"fp3d-grid-minor"),u(o,"fp3d-grid-major");let[p,h]=this.toScreen([0,0]);return d.push(C`<circle class="fp3d-origin" cx=${p} cy=${h} r="3" />`),C`<g pointer-events="none">${d}</g>`}renderGhost(){var n;let t=((n=this._doc)==null?void 0:n.floors.findIndex(i=>i.id===this._floorId))??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?C`<g pointer-events="none">${e.rooms.map(i=>C`<polygon class="fp3d-ghost" points=${i.points.map(o=>this.toScreen(o).join(",")).join(" ")} />`)}</g>`:y}renderWalls(t){var n;let e=((n=this.floor)==null?void 0:n.height)??2.5;return C`<g pointer-events="none">${t.map(i=>{let o=i.height!==void 0&&i.height<e-.01,s=`fp3d-wall${i.exterior?" fp3d-wall-ext":""}${o?" fp3d-wall-low":""}`;return C`<polygon class=${s} points=${i.footprint.map(r=>this.toScreen(r).join(",")).join(" ")} />`})}</g>`}edgeParts(t,e){let n=this.floor;if(!n)return[0];let o=Tt(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(r=>r.room_id===t.id&&r.edge===e).map(r=>r.t0));return o.length?[...new Set(o)].sort((s,r)=>s-r):[0]}setEdgeSlope(t,e,n){this.isAdmin&&this.change((i,o)=>{let s=o.rooms.find(l=>l.id===t.id);if(!s)return;let r=(s.wall_slopes??[]).slice(0,s.points.length);for(;r.length<s.points.length;)r.push(null);r[e]=n?[Math.round(Math.max(.05,n[0])*1e3)/1e3,Math.round(Math.max(.05,n[1])*1e3)/1e3]:null,s.wall_slopes=r.every(l=>!l)?void 0:r})}setEdgeHeight(t,e,n,i){let o=this.floor;if(!o||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(t,e).length;this.change((c,d)=>{let u=d.rooms.find(m=>m.id===t.id);if(!u)return;let p=(u.wall_heights??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);let h=p[e],f=Array.isArray(h)?[...h]:new Array(l).fill(typeof h=="number"?h:null);for(;f.length<l;)f.push(null);f[i]=n,p[e]=f.every(m=>m===f[0])?f[0]:f,u.wall_heights=p.every(m=>m===null)?void 0:p});return}let r=Tt(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(l=>l.sources.some(c=>c.room_id===t.id&&c.edge===e)).flatMap(l=>l.sources);r.some(l=>l.room_id===t.id&&l.edge===e)||r.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((l,c)=>{for(let d of r){let u=c.rooms.find(h=>h.id===d.room_id);if(!u)continue;let p=(u.wall_heights??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[d.edge]=n,u.wall_heights=p.every(h=>h===null)?void 0:p}})}renderCameraDetections(t){if(!this.hass)return y;let e=this.hass,n=ll(e,t),i=[...new Set(n.map(s=>al(e,s)))],o=vt("camera_cockpit");return b`<p class="fp3d-sub fp3d-wide">
      ${n.length?b`${o?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:i.map(s=>this.t(`detect_${s}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(t,e,n){if(!this.isAdmin)return;let i=t.points,o=Math.hypot(i[(e+1)%i.length][0]-i[e][0],i[(e+1)%i.length][1]-i[e][1]),s=this.edgeParts(t,e),r=n===void 0?0:s[n],l=n===void 0?o:s[n+1]??o;if(l-r<.4)return;let c=Math.round((r+l)/2*100)/100;this.change((d,u)=>{var m;let p=u.rooms.find(_=>_.id===t.id);if(!p)return;let h=(p.wall_splits??[]).slice(0,p.points.length);for(;h.length<p.points.length;)h.push(null);h[e]=[...h[e]??[],c].sort((_,g)=>_-g),p.wall_splits=h;let f=(m=p.wall_heights)==null?void 0:m[e];if(Array.isArray(f)){let _=n??0;f.splice(_+1,0,f[_]??null)}})}moveSplit(t,e,n,i){let o=t.points,s=Math.hypot(o[(e+1)%o.length][0]-o[e][0],o[(e+1)%o.length][1]-o[e][1]),r=this.edgeParts(t,e).filter(c=>Math.abs(c-n)>.001&&c>0),l=Math.max(.1,Math.min(s-.1,Math.round(i*100)/100));r.some(c=>Math.abs(c-l)<.1)&&(l=n),this.change((c,d)=>{var f;let u=d.rooms.find(m=>m.id===t.id),p=(f=u==null?void 0:u.wall_splits)==null?void 0:f[e];if(!p)return;let h=p.findIndex(m=>Math.abs(m-n)<.001);h>=0&&(p[h]=l),p.sort((m,_)=>m-_)})}joinSplit(t,e,n,i){this.change((o,s)=>{var d,u;let r=s.rooms.find(p=>p.id===t.id);if(!((d=r==null?void 0:r.wall_splits)!=null&&d[e]))return;let l=r.wall_splits[e].filter(p=>Math.abs(p-n)>.001);r.wall_splits[e]=l.length?l:null,r.wall_splits.every(p=>!p)&&(r.wall_splits=void 0);let c=(u=r.wall_heights)==null?void 0:u[e];Array.isArray(c)&&(c.splice(i,1),c.every(p=>p===c[0])&&(r.wall_heights[e]=c[0]??null))})}renderSplitMarks(t){let e=t.points;return C`${(t.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=e.length)return[];let o=e[i],s=e[(i+1)%e.length],r=Math.hypot(s[0]-o[0],s[1]-o[1])||1,l=(s[0]-o[0])/r,c=(s[1]-o[1])/r;return n.map(d=>{let[u,p]=this.toScreen([o[0]+l*d,o[1]+c*d]);return C`<line class="fp3d-split-mark" x1=${u-c*7} y1=${p+l*7} x2=${u+c*7} y2=${p-l*7} />`})})}`}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length,i=this._doc.settings,o=new Set;for(let r of Tt(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(r.exterior)for(let l of r.sources)l.room_id===t.id&&o.add(l.edge);let s=(r,l)=>this.change((c,d)=>{let u=d.rooms.find(h=>h.id===t.id);if(!u)return;let p=(u.wall_thickness??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[r]=l,u.wall_thickness=p.every(h=>h===null)?void 0:p});return b`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${t.points.flatMap((r,l)=>{var g,v;let c=t.points[(l+1)%n],d=Math.hypot(c[0]-r[0],c[1]-r[1]),u=((g=t.wall_heights)==null?void 0:g[l])??null,p=((v=t.wall_slopes)==null?void 0:v[l])??null,h=()=>this._edgeHi=l,f=()=>this._edgeHi=null,m=this.edgeParts(t,l);return(m.length>1?m.map(($,k)=>k):[void 0]).map($=>{var z,R,A;let k=$===void 0?Array.isArray(u)?u[0]??null:u:Array.isArray(u)?u[$]??null:u,P=$===void 0?d:(m[$+1]??d)-m[$],M=w=>this.setEdgeHeight(t,l,w,$);return b`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${k!==null?" fp3d-edge-low":""}"
            @mouseenter=${h}
            @mouseleave=${f}
            @focusin=${h}
            @focusout=${f}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${$===void 0?"":` \xB7 ${this.t("wall_part",{n:$+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(P,2)}</span
              ></span
            >
            ${k===0?b`<span class="fp3d-muted">${this.t("wall_none")}</span>`:p&&$===void 0?b`${this.len(this.t("wall_slope_start",{n:l+1}),p[0],w=>this.setEdgeSlope(t,l,[w,p[1]]),.05,.05)}
                  ${this.len(this.t("wall_slope_end",{n:(l+1)%n+1}),p[1],w=>this.setEdgeSlope(t,l,[p[0],w]),.05,.05)}`:this.len(this.t("wall_height"),k??e,w=>M(w>=e-.005?null:Math.max(.05,w)),.05,.05)}
            ${this.isAdmin&&$===void 0&&k!==0?b`<button class="fp3d-btn" aria-pressed=${!!p} title=${this.t("wall_slope_hint")} @click=${()=>this.setEdgeSlope(t,l,p?null:[k??e,k??e])}>◢ ${this.t("wall_slope")}</button>`:y}
            ${this.isAdmin&&k!==null?b`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>M(null)}>↥</button>`:y}
            ${this.isAdmin&&k!==0?b`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>M(0)}>${this.t("wall_none")}</button>`:y}
            ${this.isAdmin&&P>=.4?b`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(t,l,$)}>✂</button>`:y}
            ${($===void 0||$===0)&&k!==0?b`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(t.id,l)}>▦</button>`:y}
            ${($===void 0||$===0)&&k!==0?b`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),((z=t.wall_thickness)==null?void 0:z[l])??(o.has(l)?i.wall_exterior:i.wall_interior),w=>{let x=o.has(l)?i.wall_exterior:i.wall_interior,E=Math.min(1.5,Math.max(.02,Math.round(w*1e3)/1e3));s(l,Math.abs(E-x)<5e-4?null:E)},.01,.02)}
                  ${this.isAdmin&&((R=t.wall_thickness)==null?void 0:R[l])!=null?b`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:y}</span
                >`:y}
            ${$!==void 0&&$>0&&(((A=t.wall_splits)==null?void 0:A[l])??[]).some(w=>Math.abs(w-m[$])<.001)?b`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),m[$],w=>this.moveSplit(t,l,m[$],w),.05,.1)}
                  ${this.isAdmin?b`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(t,l,m[$],$)}>⨉</button>`:y}</span
                >`:y}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!e||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return y;if(e.pool_shape){let n=At(e.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return C`${i.map((o,s)=>{let[r,l]=this.toScreen(o);return C`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${e.id}:${s}`}><circle cx=${r} cy=${l} r="16" class="fp3d-hit" /><rect x=${r-5} y=${l-5} width="10" height="10" /></g>`})}`}return C`${e.points.map((n,i)=>{let[o,s]=this.toScreen(n);return C`<g class="fp3d-vertex" data-out-vertex=${`${e.id}:${i}`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`})}`}renderOutdoor(t){return C`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(Qt(e.points)),s=At(e.points),r=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return C`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${r?C`<text x=${i} y=${o+4}>${this.t(`out_${e.type}`)}</text>`:y}
      </g>`})}</g>`}renderOutdoorZone(t){var i;let e=this.isAdmin,n=Object.values(((i=this.hass)==null?void 0:i.areas)??{}).sort((o,s)=>o.name.localeCompare(s.name));return b`<label class="fp3d-field fp3d-wide" title=${this.t("outdoor_area_hint")}
        >${this.t("area")}
        <select
          ?disabled=${!e}
          @change=${o=>{var l,c,d;let s=o.target.value||null,r=(t.name??"").trim()||(s?((d=(c=(l=this.hass)==null?void 0:l.areas)==null?void 0:c[s])==null?void 0:d.name)??null:null);this.updateOutdoor({area_id:s,name:s?r:t.name??null})}}
        >
          <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
          ${n.map(o=>b`<option value=${o.area_id} ?selected=${o.area_id===t.area_id}>${o.name}</option>`)}
        </select></label
      >
      ${t.area_id?b`<label class="fp3d-field fp3d-wide"
            >${this.t("room_name")}
            <input .value=${t.name??""} ?disabled=${!e} @change=${o=>this.updateOutdoor({name:o.target.value.trim()||null})}
          /></label>`:y}
      <p class="fp3d-sub fp3d-wide">${this.t("outdoor_area_hint")}</p>
      ${t.area_id?this.renderOutdoorDevices(t):y}`}renderOutdoorDevices(t){var h,f;let e=this.hass,n=this.floor,i=n?Ar(n).find(m=>m.id===t.id):void 0;if(!e||!n||!i)return y;let o=i.area_id?(f=(h=e.areas)==null?void 0:h[i.area_id])==null?void 0:f.name:void 0,s=$i(e,$e(e,i.area_id).filter(m=>rn(at(m)))),r=new Set([...n.placements.filter(m=>Q([m.x,m.z],i.points)).map(m=>m.entity_id),...n.furniture.filter(m=>Vt(m.type)&&m.entity&&Q([m.x,m.z],i.points)).map(m=>m.entity)]),l=s.map(m=>m.primary).filter(m=>!r.has(m)),c=new Set(t.panel??[]),d=new Set(t.hidden??[]),u=new Set(t.no_state??[]),p=(m,_)=>m.has(_)?[...m].filter(g=>g!==_):[...m,_];return s.length?b`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("devices")}</h4>
      ${s.map(m=>b`<div class="fp3d-row fp3d-dev-row ${d.has(m.primary)?"fp3d-dev-hidden":""}">
          <button class="fp3d-dev-name ${r.has(m.primary)?"":"fp3d-muted"}" ?disabled=${!r.has(m.primary)} @click=${()=>this.selectItem("device",m.primary)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d=${fn(at(m.primary))} />
            </svg>
            <span>${_t(e,m.primary,o)}</span>
          </button>
          ${this.isAdmin?b`<button
                  class="fp3d-pin ${d.has(m.primary)?"fp3d-pin-on":""}"
                  aria-pressed=${d.has(m.primary)}
                  title=${this.t(d.has(m.primary)?"panel_unhide":"panel_hide")}
                  @click=${()=>this.updateOutdoor({hidden:p(d,m.primary)})}
                >
                  ${d.has(m.primary)?"\u{1F648}":"\u{1F441}"}
                </button>
                ${d.has(m.primary)?y:b`<button
                      class="fp3d-pin ${u.has(m.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${u.has(m.primary)}
                      title=${this.t(u.has(m.primary)?"panel_state_show":"panel_state_hide")}
                      @click=${()=>this.updateOutdoor({no_state:p(u,m.primary)})}
                    >
                      ${u.has(m.primary)?"\u2205":"Aa"}
                    </button>`}
                ${r.has(m.primary)?y:b`<button
                      class="fp3d-pin ${c.has(m.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${c.has(m.primary)}
                      title=${this.t(c.has(m.primary)?"panel_unpin":"panel_pin")}
                      @click=${()=>this.updateOutdoor({panel:p(c,m.primary)})}
                    >
                      ${c.has(m.primary)?"\u2605":"\u2606"}
                    </button>`}`:y}
          ${this.isAdmin?r.has(m.primary)?b`<button class="fp3d-link" @click=${()=>this.removeDevice(m.primary)}>${this.t("devices_remove")}</button>`:b`<button class="fp3d-link" @click=${()=>this.placeDevices([m.primary],i)}>${this.t("devices_place")}</button>`:y}
        </div>`)}
      ${this.isAdmin&&l.length>1?b`<button class="fp3d-link fp3d-place-all" @click=${()=>this.placeDevices(l,i)}>${this.t("devices_place_all_n",{n:l.length})}</button>`:y}
    </div>`:b`<p class="fp3d-sub fp3d-wide">${this.t("devices_none")}</p>`}renderOutdoorForm(t){let e=this.isAdmin,n=_i(t.points),i=At(t.points),o=(s,r)=>{let{x0:l,z0:c,x1:d,z1:u}=i;s==="x"&&([l,d]=[r,r+(d-l)]),s==="z"&&([c,u]=[r,r+(u-c)]),s==="w"&&(d=l+Math.max(.1,r)),s==="d"&&(u=c+Math.max(.1,r)),this.updateOutdoor({points:[[l,c],[d,c],[d,u],[l,u]].map(([p,h])=>[I(p),I(h)])})};return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${po.map(s=>b`<option value=${s} ?selected=${s===t.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${on(t.type)?y:this.renderOutdoorZone(t)}
        ${n?b`${this.len(this.t("x"),i.x0,s=>o("x",s))} ${this.len(this.t("z"),i.z0,s=>o("z",s))}
            ${this.len(this.t("width"),i.x1-i.x0,s=>o("w",s),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,s=>o("d",s),.01,.1)}`:y}
        ${on(t.type)?this.len(this.t("outdoor_height"),t.height??ho[t.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,I(s)))}),.05,.1):t.type==="balcony"?this.len(this.t("balcony_rail"),t.height??1,s=>this.updateOutdoor({height:Math.min(2,Math.max(.4,I(s)))}),.05,.4):y}
        ${this.len(this.t("outdoor_offset"),t.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,I(s)))||null}),.05)}
        ${t.type!=="pool"?b`${this.len(this.t("outdoor_slope"),t.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,I(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!e} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${Ir.map(s=>b`<option value=${s} ?selected=${s===(t.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
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
      ${this.renderModuleFields(t)}
      ${e?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}openWallView(t,e,n=null){this._wallView={roomId:t,edge:e},this._wallSel=n,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallFrame=null,this.wallDrag=null}wallSelection(){var e,n;if(this._wallMulti.length)return this._wallMulti;let t=this._wallSel?(e=this.floor)==null?void 0:e.furniture.find(i=>i.id===this._wallSel):void 0;return t?t.group&&!this._wallSingle?(((n=this.floor)==null?void 0:n.furniture)??[]).filter(i=>i.group===t.group).map(i=>i.id):[t.id]:[]}wallToggle(t){let e=this.wallSelection(),n=this.withGroups([t]),i=e.includes(t)?e.filter(o=>!n.includes(o)):[...new Set([...e,...n])];this.wallChoose(i,t)}wallChoose(t,e=t[0]??null){this._wallSingle=!1,this._wallSel=t.length?e&&t.includes(e)?e:t[0]:null,this._wallMulti=[];let n=this.wallSelection();t.length>1&&!(t.length===n.length&&t.every(i=>n.includes(i)))&&(this._wallMulti=t),this._wallGap=null}moveSetOnWall(t,e,n,i,o=this._doc,s=!0){let r=new Set(e);this.change((l,c)=>{for(let d of c.furniture)r.has(d.id)&&(Object.assign(d,Mi(t,d,n)),i!==null&&re(d)&&(d.mount_y=Math.round(Math.min(Wi,Math.max(0,Rt(c,d)+i))*1e3)/1e3))},o,s)}wallGapAt(t,e,n,i,o){let s=o<1.2,r=t.length,l=[...Me(t,e,n).filter(u=>s?u.y0<1:u.y1>1.2).map(u=>[u.s0,u.s1]),...cn(t,e).filter(u=>s?u.y0<.9:u.y1>1.2).map(u=>[u.s0,u.s1])];if(l.some(([u,p])=>i>u&&i<p))return null;let c=Math.max(0,...l.filter(([,u])=>u<=i).map(([,u])=>u)),d=Math.min(r,...l.filter(([u])=>u>=i).map(([u])=>u));return d-c>=.1?{s0:Math.round(c*1e3)/1e3,s1:Math.round(d*1e3)/1e3,low:s}:null}openWallViewFor(t){let e=this.floor;if(!e)return;let n=e.rooms.find(s=>s.points.length>=3&&Q([t.x,t.z],s.points));if(!n)return;let i=-1,o=1/0;n.points.forEach((s,r)=>{let l=n.points[(r+1)%n.points.length],c=Math.hypot(l[0]-s[0],l[1]-s[1])||1,d=Math.max(0,Math.min(1,((t.x-s[0])*(l[0]-s[0])+(t.z-s[1])*(l[1]-s[1]))/(c*c))),u=Math.hypot(t.x-(s[0]+(l[0]-s[0])*d),t.z-(s[1]+(l[1]-s[1])*d));u<o&&(o=u,i=r)}),i>=0&&this.openWallView(n.id,i,t.id)}openRoomWalls(t){let e=this.floor;if(!e)return;let n=0,i=-1;t.points.forEach((o,s)=>{let r=Me(ke(t,s),e,t).length;r>i&&(i=r,n=s)}),this.openWallView(t.id,n)}setWallView3d(t){this._wallView3d=t,this.wall3dKey="";try{localStorage.setItem("neonplan3d.wall3d",t?"1":"0")}catch{}}setupWall3d(t,e,n){let i=`${e.id}|${n}`;if(this.wall3dKey===i&&this.wall3dEl===t)return;let o=this.wall3dEl!==t;this.wall3dKey=i,this.wall3dEl=t,o&&t.addEventListener("pointerdown",s=>this.runDown3d(s),{capture:!0}),(async()=>{var h;let s;for(let f=0;f<120&&!(s=t.viewer);f++)await new Promise(m=>setTimeout(m,50));o&&await new Promise(f=>setTimeout(f,250));let r=this.floor;if(!s||!r||this.wall3dKey!==i)return;if(!s.__npWall){s.__npWall=!0,s.updateWalls=function(){for(let m of this.floors)m.mask.standing.value=65535,m.mask.glass.value=0},s.labels.style.display="none";let f=new CSSStyleSheet;f.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),t.shadowRoot&&(t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,f]),s.camera.fov=58,s.camera.updateProjectionMatrix(),s.controls.minRadius=.6,s.controls.leftDragTurns=!1}let l=ke(e,n),c=Math.max(1.5,...e.points.map(f=>gt(l,f).d)),d=Zt(l,l.length/2,0),u=r.elevation+(((h=s.floorMap.get(r.id))==null?void 0:h.y)??0)+1.15;s.controls.maxRadius=Math.max(1.4,c-.25);let p=s.getView();p.target.set(d[0],u,d[1]),s.flyTo({...p,radius:Math.max(1.2,Math.min(c*.8,c-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},o?0:650),s.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let t=()=>{var h,f;this.liftRaf=0;let e=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!(e!=null&&e.isConnected)||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(t),!n))return;let i=this.floor,o=this._wallSel?i==null?void 0:i.furniture.find(m=>m.id===this._wallSel):void 0,s=e.viewer;if(!o||!i||!s||!re(o)||o.locked){n.hidden=!0;return}let r=Rt(i,o),l=i.elevation+(((h=s.floorMap.get(i.id))==null?void 0:h.y)??0)+r+o.h,c=s.camera.position.clone().set(o.x,l+.12,o.z).project(s.camera);if(c.z>1){n.hidden=!0;return}n.hidden=!1;let d=e.getBoundingClientRect(),u=((f=n.offsetParent)==null?void 0:f.getBoundingClientRect())??d;n.style.transform=`translate(${d.left-u.left+(c.x+1)/2*d.width}px, ${d.top-u.top+(1-c.y)/2*d.height}px)`;let p=n.querySelector("b");p&&(p.textContent=this.m(Math.round(r*100)/100,2))};this.liftRaf=requestAnimationFrame(t)}liftDown(t){let e=this.floor,n=this._wallSel?e==null?void 0:e.furniture.find(d=>d.id===this._wallSel):void 0,i=this.wall3dEl,o=i==null?void 0:i.viewer;if(!e||!n||!o||!this.isAdmin)return;t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId);let s=Math.hypot(o.camera.position.x-n.x,o.camera.position.z-n.z)||1,r=this.wall3dEl.clientHeight||1,l=e.rooms.find(d=>d.points.length>=3&&Q([n.x,n.z],d.points)),c=Math.max(e.height,(l==null?void 0:l.ceiling_height)??0);this.lift={id:n.id,y:Rt(e,n),startY:t.clientY,perPx:2*s*Math.tan(o.camera.fov*Math.PI/360)/r,base:this._doc,top:Math.max(0,c-n.h),moved:!1}}liftMove(t){var s;let e=this.lift,n=this._wallView?(s=this.floor)==null?void 0:s.rooms.find(r=>r.id===this._wallView.roomId):void 0;if(!e||!n)return;let i=(e.startY-t.clientY)*e.perPx;if(!e.moved&&Math.abs(t.clientY-e.startY)<3)return;e.moved=!0;let o=Math.min(e.top,Math.max(0,Math.round((e.y+i)*100)/100));this.moveOnWall(ke(n,this._wallView.edge),e.id,0,o,e.base,!1)}liftUp(){let t=this.lift;this.lift=null,t!=null&&t.moved&&this.pushHistory(t.base)}wallPickTip=[0,0];toggleWallPick(t){var i;let e=(i=t.closest(".fp3d-toolbar"))==null?void 0:i.getBoundingClientRect(),n=t.getBoundingClientRect();this.wallPickTip=e?[n.left-e.left+n.width/2,n.bottom-e.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(t){let e=this.floor;if(!e)return;let n=null;for(let i of e.rooms){if(i.points.length<3)continue;let o=Q(t,i.points)?-.25:0;i.points.forEach((s,r)=>{let l=i.points[(r+1)%i.points.length],c=(l[0]-s[0])**2+(l[1]-s[1])**2||1,d=Math.max(0,Math.min(1,((t[0]-s[0])*(l[0]-s[0])+(t[1]-s[1])*(l[1]-s[1]))/c)),u=Math.hypot(t[0]-(s[0]+(l[0]-s[0])*d),t[1]-(s[1]+(l[1]-s[1])*d));u<.6&&(!n||u+o<n.d)&&(n={room:i,edge:r,d:u+o})})}if(!n){let i=e.rooms.find(o=>o.points.length>=3&&Q(t,o.points));if(!i)return;this._wallPick=!1,this.openRoomWalls(i),this.techPick&&this.enterTech();return}this._wallPick=!1,this.openWallView(n.room.id,n.edge),this.techPick&&this.enterTech()}techDoc3d(){var n;let t=this._doc3d;if(((n=this.techDocCache)==null?void 0:n.src)===t)return this.techDocCache.doc;let e={...t,floors:t.floors.map(i=>({...i,furniture:i.furniture.filter(o=>St.includes(o.type))}))};return this.techDocCache={src:t,doc:e},e}techDocCache=null;enterTech(){this.techPick=!1,this._techMode=!0,this._wallSel=null,this._wallMulti=[],this._runSel=null,this._runDraft=null,this._feedKind=null,this._runMode="draw"}turnOnWall(t,e){let n=this._doc.settings.wall_interior;this.change((i,o)=>{let s=o.furniture.find(c=>c.id===t);if(!s)return;s.rotation=Math.round((e%360+360)%360);let[r,l]=Wo(o,s,s.x,s.z,n,.6);Object.assign(s,{x:r,z:l})})}moveFromWall(t,e,n){this.change((i,o)=>{let s=o.furniture.find(r=>r.id===e);s&&(s.x=Math.round((s.x+t.n[0]*n)*1e3)/1e3,s.z=Math.round((s.z+t.n[1]*n)*1e3)/1e3)})}moveOnWall(t,e,n,i,o=this._doc,s=!0){this.change((r,l)=>{let c=l.furniture.find(d=>d.id===e);c&&(Object.assign(c,Mi(t,c,n)),i!==null&&(c.mount_y=Math.round(Math.min(Wi,Math.max(0,i))*1e3)/1e3))},o,s)}alongAxis(t,e){let n=this.wallTurn(t,e)*Math.PI/180;return Math.abs(Math.sin(n))<.05?"w":Math.abs(Math.cos(n))<.05?"d":null}resizeOnWall(t,e,n,i,o,s,r=this._doc,l=!0){this.change((c,d)=>{let u=d.furniture.find(h=>h.id===e);if(!u)return;let p=this.alongAxis(t,u);if(n!==null&&i!==null&&p&&i-n>=.05){let h=Wt(u).map(m=>gt(t,m).s),f=(Math.min(...h)+Math.max(...h))/2;u[p]=I(i-n),Object.assign(u,Mi(t,u,(n+i)/2-f))}if(o!==null||s!==null){let h=Rt(d,u),f=o??h,m=s??h+u.h;if(m-f<.03)return;u.h=I(m-f),o!==null&&re(u)&&(u.mount_y=I(Math.max(0,f)))}},r,l)}wallTurn(t,e){let n=Math.atan2(-t.n[0],t.n[1])*180/Math.PI;return((e.rotation-n)%360+360)%360}wallPicKey(t,e){return`${e.type}|${e.w}|${e.d}|${e.h}|${e.variant??""}|${Math.round(this.wallTurn(t,e))}`}async askWallPics(t,e){let n=e.filter(i=>!this.wallPicsAsked.has(this.wallPicKey(t,i)));if(n.length){for(let i of n)this.wallPicsAsked.add(this.wallPicKey(t,i));try{let i=await Vi();for(let o of n){let s=i.furnitureFront({type:o.type,w:o.w,d:o.d,h:o.h,variant:o.variant,lamp:bi[o.type]??null},this.wallTurn(t,o),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(t,o),s)}}catch{}this._wallPicTick++}}renderWallView(){var Mt,zt;let t=this._wallView,e=this.floor,n=t?e==null?void 0:e.rooms.find(F=>F.id===t.roomId):void 0;if(!t||!e||!n||t.edge>=n.points.length)return y;let i=n.points.length,o=ke(n,t.edge),s=o.length,r=Math.max(e.height,n.ceiling_height??0),l=this._techMode?Me(o,e,n,1.6).filter(F=>{var O;return St.includes(((O=e.furniture.find(V=>V.id===F.id))==null?void 0:O.type)??"")}):Me(o,e,n),c=cn(o,e),d=F=>o.rightward?F:s-F,u=(F,O)=>[Math.min(d(F),d(O)),Math.abs(O-F)],p=F=>r-F,h=this.isAdmin,f=this._wallSel?e.furniture.find(F=>F.id===this._wallSel):void 0,m=f?l.find(F=>F.id===f.id)??(()=>{let F=Wt(f).map(V=>gt(o,V)),O=Rt(e,f);return{kind:"furniture",id:f.id,s0:Math.min(...F.map(V=>V.s)),s1:Math.max(...F.map(V=>V.s)),y0:O,y1:O+f.h,d:Math.min(...F.map(V=>V.d))}})():null,_=!!f&&re(f),g=this.wallSelection(),v=g.length>1,$=l.filter(F=>g.includes(F.id)),k=$.length?{s0:Math.min(...$.map(F=>F.s0)),s1:Math.max(...$.map(F=>F.s1)),y0:Math.min(...$.map(F=>F.y0)),y1:Math.max(...$.map(F=>F.y1))}:null,P=F=>this.m(F,2),M=F=>{let O=F.currentTarget.closest("svg"),V=O.createSVGPoint();return V.x=F.clientX,V.y=F.clientY,V.matrixTransform(O.getScreenCTM().inverse())},z=F=>[0,s,...l.filter(O=>!F.includes(O.id)).flatMap(O=>[O.s0,O.s1]),...c.flatMap(O=>[O.s0,O.s1])],R=(F,O)=>{if(!h)return;if(U&&this._runMode){this.techPress=U.pt(F),this.runDown(F,U);return}if(F.stopPropagation(),this._runSel=null,F.shiftKey||this._multiMode){this.wallToggle(O);return}(!this.wallSelection().includes(O)||this._wallSingle)&&this.wallChoose([O]);let V=this.wallSelection(),H=M(F);F.currentTarget.closest("svg").setPointerCapture(F.pointerId);let N=l.filter(G=>V.includes(G.id));if(V.length>1&&V.some(G=>this.isFixedItem("furniture",G)))return;if(V.length>1&&N.length){let G=Math.min(...N.map(et=>et.s0));this.wallDrag={id:O,ids:V,w:Math.max(...N.map(et=>et.s1))-G,x:H.x,y:H.y,base:this._doc,s0:G,y0:0,lift:N.every(et=>{let rt=e.furniture.find(pt=>pt.id===et.id);return!!rt&&re(rt)}),moved:!1};return}let nt=l.find(G=>G.id===O),K=e.furniture.find(G=>G.id===O);this.wallDrag={id:O,x:H.x,y:H.y,base:this._doc,s0:nt.s0,y0:nt.y0,lift:!!K&&re(K),moved:!1}},A=F=>{if(!h||this._runMode)return;let O=M(F);if(F.shiftKey||this._multiMode){F.currentTarget.closest("svg").setPointerCapture(F.pointerId),this._wallFrame={x0:O.x,y0:O.y,x1:O.x,y1:O.y};return}this._wallSel=null,this._wallMulti=[],this._wallSingle=!1;let V=o.rightward?O.x:s-O.x;this._wallGap=V>=0&&V<=s&&O.y>=0&&O.y<=r?this.wallGapAt(o,e,n,V,r-O.y):null},w=F=>{let O=this.wallResize;if(O){let lt=M(F);O.moved=!0;let jt=z([O.id]).map(kt=>d(kt)),Lt=kt=>{if(kt=Math.round(kt*100)/100,!F.altKey){for(let Ht of jt)if(Math.abs(kt-Ht)<.04)return Ht}return kt};if(O.side==="l"||O.side==="r"){let kt=O.side==="l"?Math.min(Lt(lt.x),O.x1-.1):O.x0,Ht=O.side==="r"?Math.max(Lt(lt.x),O.x0+.1):O.x1,[ye,Ki]=o.rightward?[kt,Ht]:[s-Ht,s-kt];this.resizeOnWall(o,O.id,ye,Ki,null,null,O.base,!1)}else{let kt=Math.round((r-lt.y)*100)/100;O.side==="t"?this.resizeOnWall(o,O.id,null,null,null,Math.max(O.y0+.05,Math.min(r,kt)),O.base,!1):this.resizeOnWall(o,O.id,null,null,Math.max(0,Math.min(O.y1-.05,kt)),null,O.base,!1)}return}let V=this._wallFrame;if(V){let lt=M(F);this._wallFrame={...V,x1:lt.x,y1:lt.y};return}let H=this.wallDrag;if(!H)return;let N=M(F),nt=N.x-H.x,K=H.y-N.y;if(!H.moved&&Math.hypot(nt,K)<.02)return;H.moved=!0;let G=l.find(lt=>lt.id===H.id),et=H.ids?H.w??0:G?G.s1-G.s0:0,rt=H.s0+(o.rightward?nt:-nt);if(rt=Math.round(rt*100)/100,!F.altKey)for(let lt of z(H.ids??[H.id]))Math.abs(rt-lt)<.04?rt=lt:Math.abs(rt+et-lt)<.04&&(rt=lt-et);if(H.ids){this.moveSetOnWall(o,H.ids,rt-H.s0,H.lift?Math.round(K*100)/100:null,H.base,!1);return}let pt=H.lift?Math.round((H.y0+K)*100)/100:null;this.moveOnWall(o,H.id,rt-H.s0,pt,H.base,!1)},x=()=>{let F=this.wallResize;if(F){this.wallResize=null,F.moved&&this.pushHistory(F.base);return}let O=this._wallFrame;if(O){this._wallFrame=null;let[H,N]=[Math.min(O.x0,O.x1),Math.max(O.x0,O.x1)],[nt,K]=[Math.min(O.y0,O.y1),Math.max(O.y0,O.y1)],G=l.filter(et=>{let[rt,pt]=u(et.s0,et.s1),lt=rt+pt/2,jt=p((et.y0+et.y1)/2);return lt>=H&&lt<=N&&jt>=nt&&jt<=K}).map(et=>et.id);G.length&&this.wallChoose([...new Set([...this.wallSelection(),...this.withGroups(G)])]);return}let V=this.wallDrag;this.wallDrag=null,V!=null&&V.moved&&this.pushHistory(V.base)},E=F=>{if(this._runMode&&(F.key==="Escape"||F.key==="Enter")){F.preventDefault(),F.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(F.key==="Escape"){this._wallView=null;return}if((F.key==="Delete"||F.key==="Backspace")&&h&&U&&this._runSel&&!g.length&&!F.target.closest("input, select, textarea")){F.preventDefault();let nt=this._runSel.pipe;this.changePool(U.pool.id,K=>K.pipes=(K.pipes??[]).filter(G=>G.id!==nt)),this._runSel=null;return}if((F.key==="Delete"||F.key==="Backspace")&&h&&g.length&&!F.target.closest("input, select, textarea")){F.preventDefault(),this.deleteOnWall(g);return}if(!m&&(F.key==="ArrowLeft"||F.key==="ArrowRight")){F.preventDefault(),W(F.key==="ArrowLeft"?j:L);return}if(!m||!h||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(F.key)||F.target.closest("input, select, textarea"))return;F.preventDefault();let O=F.shiftKey?.1:.01,V=F.key==="ArrowRight"?O:F.key==="ArrowLeft"?-O:0,H=o.rightward?V:-V,N=F.key==="ArrowUp"?O:F.key==="ArrowDown"?-O:0;if(v)return this.moveSetOnWall(o,g,H,N||null);this.moveOnWall(o,m.id,H,_&&N?m.y0+N:null)},S=v&&k?k:m,T=S?(()=>{let F=S,[O,V]=u(F.s0,F.s1),H=p(F.y0),N=Math.min(r+.25,p(0)+.25);return C`<g class="fp3d-wv-dims">
            ${O>.03?C`<line x1="0" y1=${N} x2=${O} y2=${N} /><text x=${O/2} y=${N-.05}>${P(O)}</text>`:y}
            ${s-O-V>.03?C`<line x1=${O+V} y1=${N} x2=${s} y2=${N} /><text x=${O+V+(s-O-V)/2} y=${N-.05}>${P(s-O-V)}</text>`:y}
            ${F.y0>.03?C`<line x1=${O+V/2} y1=${H} x2=${O+V/2} y2=${r} /><text x=${O+V/2+.05} y=${(H+r)/2} class="fp3d-wv-up">${P(F.y0)}</text>`:y}
          </g>`})():y,L=(t.edge+(o.rightward?1:-1)+i)%i,j=(t.edge+(o.rightward?-1:1)+i)%i,D=F=>this.t("wall_n",{a:F+1,b:(F+1)%i+1}),W=F=>this.openWallView(n.id,F);this._wallPicTick,this.askWallPics(o,l.map(F=>e.furniture.find(O=>O.id===F.id)).filter(F=>!!F));let Z=`${n.id}:${t.edge}`,Y=((Mt=this.wvZoom)==null?void 0:Mt.key)===Z?this.wvZoom:null,tt=s+1,X=r+.9,it=(F,O,V)=>{let H=Math.min(8,Math.max(1,F)),N=tt/H,nt=X/H;return{k:H,w:N,h:nt,x0:Math.min(-.5+tt-N,Math.max(-.5,O)),y0:Math.min(-.35+X-nt,Math.max(-.35,V))}},q=it((Y==null?void 0:Y.k)??1,(Y==null?void 0:Y.x0)??-.5,(Y==null?void 0:Y.y0)??-.35),ft=(F,O,V)=>{let H=it(F,O,V);this.wvZoom=H.k<=1.001?null:{key:Z,k:H.k,x0:H.x0,y0:H.y0},this.requestUpdate()},It=(F,O,V)=>{let H=Math.min(8,Math.max(1,V));ft(H,F-(F-q.x0)*q.k/H,O-(O-q.y0)*q.k/H)},Jt=F=>{let O=this.wvPinch,[V,H]=[...this.wvTouch.values()],N=Math.hypot(V.x-H.x,V.y-H.y),nt=(V.x+H.x)/2,K=(V.y+H.y)/2,G=F.getBoundingClientRect(),et=tt/O.k,rt=X/O.k,pt=Math.min(G.width/et,G.height/rt),lt=G.left+(G.width-et*pt)/2,jt=G.top+(G.height-rt*pt)/2,Lt=O.x0+(O.mx-lt)/pt,kt=O.y0+(O.my-jt)/pt,Ht=Math.min(8,Math.max(1,O.k*N/Math.max(1,O.d))),ye=pt*(Ht/O.k),Ki=G.left+(G.width-tt/Ht*ye)/2,vd=G.top+(G.height-X/Ht*ye)/2;ft(Ht,Lt-(nt-Ki)/ye,kt-(K-vd)/ye)};this.wvScale=1/Math.sqrt(q.k);let B=Math.max(.09,Math.min(.16,s/40))*this.wvScale,ut=this.canLayRuns?this.runPool:void 0,U=this.runCtx3d=ut?{frame:o,floor:e,room:n,key:`${n.id}|${t.edge}`,L:s,H:r,gap:(le(e,n.id,o.a,o.b)?this._doc.settings.wall_interior/2:0)+ys,runs:Va(o,(((zt=ut.pool)==null?void 0:zt.pipes)??[]).filter(F=>F.floor_id===e.id),ht(this._doc,e,ut)),pool:ut,pt:F=>{let O=M(F);return{s:o.rightward?O.x:s-O.x,y:r-O.y}}}:null;return b`<div class="fp3d-wv-veil" @click=${F=>F.target===F.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${E}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${D(j)}`} @click=${()=>W(j)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:t.edge+1,b:(t.edge+1)%i+1})} · ${this.m(s,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${D(L)}`} @click=${()=>W(L)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${h&&this.pipeRules&&this.runPool?b`<button class="fp3d-btn ${this._techMode?"fp3d-primary":""}" title=${this.t("tech_mode_hint")} @click=${()=>{this._techMode?(this._techMode=!1,this._runDraft=null,this._feedKind=null,this._runMode=null):this.enterTech()}}>🛠 ${this.t("tech_mode")}</button>`:y}
          ${U&&h&&!this._techMode?b`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:y}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(o,n,U)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${D(j)}`} @click=${()=>W(j)}>‹<small>${D(j)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${D(L)}`} @click=${()=>W(L)}>›<small>${D(L)}</small></button>
          ${this._wallView3d?y:b`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${()=>It(q.x0+q.w/2,q.y0+q.h/2,q.k*1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${q.k<=1.001} @click=${()=>It(q.x0+q.w/2,q.y0+q.h/2,q.k/1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${q.k<=1.001} @click=${()=>ft(1,-.5,-.35)}>⤢</button>
                ${q.k>1.001?b`<button class="fp3d-btn" aria-label="←" @click=${()=>ft(q.k,q.x0-q.w*.3,q.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${()=>ft(q.k,q.x0+q.w*.3,q.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${()=>ft(q.k,q.x0,q.y0-q.h*.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${()=>ft(q.k,q.x0,q.y0+q.h*.3)}>↓</button>`:y}
              </div>`}
        ${this._wallView3d?b`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${Gs(F=>F&&this.setupWall3d(F,n,t.edge))}
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
              .selectedSet=${g}
              .quality=${"auto"}
              .floorThumbs=${!1}
              .roomLabels=${!1}
              .floorStack=${"single"}
              .panelOpen=${!1}
              .alerts=${!1}
              .scenes=${!1}
              .central=${!1}
              @furniture-select=${F=>{let O=F.detail.id;O&&(this.shiftHeld||this._multiMode)?this.wallToggle(O):O?!this.wallSelection().includes(O)||this._wallSingle?this.wallChoose([O]):this._wallSel=O:this.wallChoose([])}}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${F=>this.liftDown(F)} @pointermove=${F=>this.liftMove(F)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:b`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""} ${this._runMode==="valve"||this._runMode==="sight"?"fp3d-wv-fitmode":""} ${this._runMode==="erase"?"fp3d-wv-fitmode fp3d-wv-erase":""}"
          viewBox="${q.x0} ${q.y0} ${q.w} ${q.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${F=>{F.preventDefault();let O=F.currentTarget,V=O.createSVGPoint();V.x=F.clientX,V.y=F.clientY;let H=V.matrixTransform(O.getScreenCTM().inverse());It(H.x,H.y,q.k*Math.exp(-F.deltaY*.0015))}}
          @pointerdown=${F=>{if(F.pointerType==="touch"){if(this.wvTouch.set(F.pointerId,{x:F.clientX,y:F.clientY}),this.wvTouch.size===2){let[O,V]=[...this.wvTouch.values()];this.wvPinch={d:Math.hypot(O.x-V.x,O.y-V.y),mx:(O.x+V.x)/2,my:(O.y+V.y)/2,k:q.k,x0:q.x0,y0:q.y0},this.wvTap=null,this.techPress=null,x(),this.runPointUp(),this.fitDrag=null,this.jointDrag=null;return}if(this.wvPinch)return;if(U&&this._runMode&&this.isAdmin){F.stopPropagation();let O=U.pt(F);this.wvTap=O,this.techPress=O;return}}U&&this._runMode?(this.techPress=U.pt(F),this.runDown(F,U)):this._runSel?this._runSel=null:A(F)}}
          @pointermove=${F=>{if(this.wvTouch.has(F.pointerId)&&this.wvTouch.set(F.pointerId,{x:F.clientX,y:F.clientY}),this.wvPinch){this.wvTouch.size===2&&Jt(F.currentTarget);return}if(w(F),U&&this.jointDrag)this.jointMove(F,U);else if(U&&this.fitDrag)this.fittingMove(F,U);else if(U&&this.runDrag)this.runPointMove(F,U);else if(U&&this._runMode==="draw"&&this.techPress&&this.isAdmin&&(F.buttons&1||F.pointerType==="touch")){let O=U.pt(F),V=this.techPress;if(!this._runDraft&&!this.techStroke&&Math.hypot(O.s-V.s,O.y-V.y)>.02&&(this.wvTap=null,this.runAt(U,V.s,V.y,!1,1,null)),this._runDraft&&!this.wvTap){let H=this.techStroke??=[this.techPress],N=H[H.length-1];Math.hypot(O.s-N.s,O.y-N.y)>.02&&H.push(O),this.runHover=[O.s,O.y],this.requestUpdate()}}else if(U&&this._runMode==="draw"&&this._runDraft){let O=U.pt(F);this.runHover=[O.s,O.y],this.requestUpdate()}}}
          @pointerup=${F=>{if(this.wvTouch.delete(F.pointerId),this.wvPinch){this.wvTouch.size||(this.wvPinch=null);return}let O=this.wvTap;this.wvTap=null;let V=this.techStroke;this.techStroke=null;let H=V?V.reduce((K,G,et)=>et?K+Math.hypot(G.s-V[et-1].s,G.y-V[et-1].y):0,0):0,N=U&&this._techMode&&this._runMode==="draw";if(V&&H>.12&&U&&this._runMode==="draw"&&this._runDraft)this.techPress=null,this.runHover=null,this.endStroke(U,V,U.pt(F));else if(N){let K=this.techPress;if(this.techPress=null,this._runDraft=null,this.runHover=null,K){let G=this.runPick(U,K.s,K.y,!0);this._runSel=G.pipe?{pipe:G.pipe.id,pt:null}:null}}else O&&U&&this._runMode&&this.runAt(U,O.s,O.y,!1,1,null),this.techPress=null;x(),this.runPointUp(),this.fittingUp(U);let nt=this.jointDrag;this.jointDrag=null,nt!=null&&nt.moved?this.pushHistory(nt.base):nt&&U&&this.openCard(U.pool.id,`joint:${nt.id}`)}}
          @pointercancel=${F=>{this.wvTouch.delete(F.pointerId),this.wvTouch.size||(this.wvPinch=null),this.wvTap=null,this.techPress=null,this.techStroke=null,x(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${B}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${s} height=${r} />
          ${Array.from({length:Math.floor(r/.5)},(F,O)=>C`<line class="fp3d-wv-grid" x1="0" x2=${s} y1=${p((O+1)*.5)} y2=${p((O+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${p((O+1)*.5)+.03}>${((O+1)*.5).toFixed(1)}</text>`)}
          ${c.map(F=>{let[O,V]=u(F.s0,F.s1),H=e.openings.find(nt=>nt.id===F.id),N=(H==null?void 0:H.type)==="window"?this.t("opening_window"):(H==null?void 0:H.type)==="garage"?this.t("opening_garage"):this.t("opening_door");return C`<rect class="fp3d-wv-hole ${(H==null?void 0:H.type)==="window"?"fp3d-wv-window":""}" x=${O} y=${p(F.y1)} width=${V} height=${F.y1-F.y0} />
              ${V>B*3.5?C`<text class="fp3d-wv-hole-label" x=${O+V/2} y=${p(F.y1)+B*1.3} style="font-size:${B*.85}px">${N}</text>`:y}`})}
          ${l.map(F=>{let[O,V]=u(F.s0,F.s1),H=e.furniture.find(et=>et.id===F.id),N=H.name||Re(this.hass,H.type),nt=F.y1-F.y0,K=this.wallPics.get(this.wallPicKey(o,H)),G=d(gt(o,[H.x,H.z]).s);return C`<g class="fp3d-wv-item ${K?"fp3d-wv-pic":""} ${F.id===this._wallSel||g.includes(F.id)?"fp3d-wv-sel":""}" @pointerdown=${et=>R(et,F.id)} @dblclick=${()=>{let et=e.furniture.find(rt=>rt.id===F.id);if(et!=null&&et.group&&!this._wallSingle){this.wallChoose([F.id]),this._wallSingle=!0;return}this._wallView=null,this.selectItem("furniture",F.id)}}>
              ${K?C`<image href=${K.url} x=${G+K.x0} y=${p(F.y0+K.y1)} width=${K.x1-K.x0} height=${K.y1-K.y0} preserveAspectRatio="none" />`:y}
              <rect x=${O} y=${p(F.y1)} width=${V} height=${Math.max(.02,nt)}><title>${N}</title></rect>
              ${!K&&V>B*3&&nt>B*1.4?C`<text x=${O+V/2} y=${p(F.y1)+Math.min(nt/2,B*1.6)+B*.35} style="font-size:${B}px">${N}</text>`:y}
            </g>`})}
          ${T}
          ${m&&f&&!v&&h&&!f.locked&&l.some(F=>F.id===m.id)?(()=>{let[F,O]=u(m.s0,m.s1),V=p(m.y1),H=p(m.y0),N=B*.75,nt=this.alongAxis(o,f),K=G=>et=>{et.stopPropagation(),et.currentTarget.closest("svg").setPointerCapture(et.pointerId),this.wallResize={id:m.id,side:G,x0:F,x1:F+O,y0:m.y0,y1:m.y1,base:this._doc,moved:!1}};return C`<g class="fp3d-wv-handles">
                  ${nt?C`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${F-N/2} y=${(V+H)/2-N} width=${N} height=${N*2} rx=${N/3} @pointerdown=${K("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${F+O-N/2} y=${(V+H)/2-N} width=${N} height=${N*2} rx=${N/3} @pointerdown=${K("r")} />`:y}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${F+O/2-N} y=${V-N/2} width=${N*2} height=${N} rx=${N/3} @pointerdown=${K("t")} />
                  ${m.y0>.05&&re(f)?C`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${F+O/2-N} y=${H-N/2} width=${N*2} height=${N} rx=${N/3} @pointerdown=${K("b")} />`:y}
                  <text class="fp3d-wv-size" x=${F+O/2} y=${V-N*.9} style="font-size:${B*.85}px">${P(m.s1-m.s0)} × ${P(m.y1-m.y0)}</text>
                </g>`})():y}
          ${v&&k?(()=>{let[F,O]=u(k.s0,k.s1),V=!this._wallMulti.length;return C`<g class=${`fp3d-wv-setframe${V?" fp3d-wv-setblock":""}`}><rect x=${F-.03} y=${p(k.y1)-.03} width=${O+.06} height=${k.y1-k.y0+.06} /><text x=${F} y=${p(k.y1)-.07} style="font-size:${B*.85}px">${V?`\u25A3 ${this.t("block_title")} \xB7 ${g.length}`:this.t("multi_title",{n:g.length})}</text></g>`})():y}
          ${this._wallGap?(()=>{let F=this._wallGap,[O,V]=u(F.s0,F.s1),H=F.low?Math.min(r,.9):Math.min(r,2.2),N=F.low?0:1.3;return C`<g class="fp3d-wv-gap"><rect x=${O} y=${p(H)} width=${V} height=${H-N} /><text x=${O+V/2} y=${p((H+N)/2)} style="font-size:${B}px">${P(V)}</text></g>`})():y}
          ${this._wallFrame?C`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0,this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0,this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1-this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1-this._wallFrame.y0)} />`:y}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${s+.3} y1=${r} y2=${r} />
          ${U?this.renderRuns(U,d,p):y}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${U&&this._techMode&&!this._runDraft&&!this._runSel&&!m&&(this._runMode==="draw"||this._runMode==="feed")?b`<span class="fp3d-muted">${this.t(this._runMode==="feed"?"tech_feed_place":"tech_start")}</span> ${this.renderTechIssues(U)}`:U&&(this._runMode||this._runSel&&!m)?this.renderRunFoot(U):v&&h?this.renderWallSetFoot(o,g,k,u):m&&f?b`<b>${f.name||Re(this.hass,f.type)}</b>
                ${this.fixButton("furniture",m.id)}
                ${f.group&&h?b`<button class="fp3d-btn" title=${this.t("block_select")} @click=${()=>{this._wallSingle=!1,this.requestUpdate()}}>▣ ${this.t("wv_block_all")}</button>`:y}
                ${U&&St.includes(f.type)?b`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(U.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:y}
                ${f.locked&&h?b`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:y}
                ${this.len(this.t("wall_view_left"),Math.round(u(m.s0,m.s1)[0]*1e3)/1e3,F=>{let O=F-u(m.s0,m.s1)[0];this.moveOnWall(o,m.id,o.rightward?O:-O,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,m.d)*1e3)/1e3,F=>this.moveFromWall(o,m.id,F-m.d),.01,0)}
                ${h&&!f.locked&&this.alongAxis(o,f)?this.len(this.t("width"),Math.round((m.s1-m.s0)*1e3)/1e3,F=>{let O=Math.max(.05,F);o.rightward?this.resizeOnWall(o,m.id,m.s0,m.s0+O,null,null):this.resizeOnWall(o,m.id,m.s1-O,m.s1,null,null)},.01,.05):y}
                ${h&&!f.locked?this.len(this.t("height_m"),Math.round((m.y1-m.y0)*1e3)/1e3,F=>this.resizeOnWall(o,m.id,null,null,null,m.y0+Math.max(.03,F)),.01,.03):y}
                ${_?this.len(this.t("mount_height"),Math.round(m.y0*1e3)/1e3,F=>this.moveOnWall(o,m.id,0,F),.01,0):b`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${h&&!f.locked?b`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,F=>this.turnOnWall(f.id,F),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:y}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",m.id)}}>${this.t("wall_view_form")}</button>
                ${h?b`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall([m.id])}>${this.t("delete")}</button>`:y}`:b`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
          ${h&&!this._techMode?this.renderMultiToggle():y}
        </div>
      </div>
    </div>`}renderWallSetFoot(t,e,n,i){let o=!this._wallMulti.length,s=e.every(l=>this.isFixedItem("furniture",l)),r=!s&&e.some(l=>this.isFixedItem("furniture",l));return b`<b>${o?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</b>
      ${r?b`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>`:y}
      ${o?b`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${()=>this._wallSingle=!0}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${()=>{let l=this._wallSel;this._wallMulti=e,this.ungroupSelectionOf(e),this._wallSel=l}}>${this.t("block_break")}</button>`:b`<button class="fp3d-btn fp3d-primary" @click=${()=>{this.groupIds(e),this._wallMulti=[]}}>▣ ${this.t("block_make")}</button>`}
      ${n?this.len(this.t("wall_view_left"),Math.round(i(n.s0,n.s1)[0]*1e3)/1e3,l=>{let c=l-i(n.s0,n.s1)[0];this.moveSetOnWall(t,e,t.rightward?c:-c,null)},.01,0):y}
      <button class="fp3d-btn ${r?"fp3d-primary":""}" @click=${()=>{let l=new Set(e),c=!s&&!r;this.change((d,u)=>{for(let p of u.furniture)l.has(p.id)&&(p.locked=c||null)})}}>${s?`\u{1F513} ${this.t("unfix")}`:r?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall(e)}>${this.t("delete")}</button>`}deleteOnWall(t){if(!t.length||!this.isAdmin)return;if(t.length>1){if(!confirm(this.t(t.some(n=>this.isFixedItem("furniture",n))?"block_delete_fixed":"block_delete",{n:t.length})))return}else if(!this.confirmFixedDelete("furniture",t[0]))return;let e=new Set(t);this.change((n,i)=>i.furniture=i.furniture.filter(o=>!e.has(o.id))),this._wallSel=null,this._wallMulti=[],this._wallSingle=!1}groupIds(t){let e=new Set(t),n=J("block");this.change((i,o)=>{for(let s of o.furniture)e.has(s.id)&&(s.group=n)})}ungroupSelectionOf(t){let e=new Set(t);this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=null)})}addOnWall(t,e,n){let i=this.floor;if(!i||!this.isAdmin)return;this.rememberWallType(t);let o=this._wallGap;if(o)return this.addIntoGap(t,e,n,o);let[s,r,l]=Dt(t),c=[...Me(e,i,n).map(_=>[_.s0,_.s1]),...cn(e,i).filter(_=>_.y0<.05).map(_=>[_.s0,_.s1])],d=Math.max(0,e.length/2-s/2);for(let _=.1;_+s<=e.length-.05;_+=.05)if(!c.some(([g,v])=>_<v+.05&&_+s>g-.05)){d=_;break}let u=le(i,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,[p,h]=Zt(e,d+s/2,u+r/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),m={id:J("furniture"),type:t,x:I(p),z:I(h),rotation:f,w:s,d:r,h:l,variant:null};this.change((_,g)=>g.furniture.push(m)),this._runSel=null,this._runMode=null,this._wallSel=m.id}addIntoGap(t,e,n,i){let o=this.floor,s=i.s1-i.s0,[r,l,c]=Dt(t);Ni.has(t)&&(r>s+.005||s-r<.1)&&(r=Math.round(s*1e3)/1e3);let d=le(o,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,u=i.s0+Math.min(r,s)/2,[p,h]=Zt(e,u,d+l/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),m={id:J("furniture"),type:t,x:I(p),z:I(h),rotation:f,w:r,d:l,h:c,variant:null};this.change((_,g)=>g.furniture.push(m)),this._wallGap=null,this._wallSel=m.id,this._wallMulti=[]}rememberWallType(t){try{let e=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");localStorage.setItem("neonplan3d.wallRecent",JSON.stringify([t,...e.filter(n=>n!==t)].slice(0,6)))}catch{}}wallRecent(){try{let t=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"&&(ci.includes(e)||!!$t(e))):[]}catch{return[]}}renderWallFurniture(t,e){let n=this._wallGap,i=n?n.s1-n.s0:0,o=$n(this._wallQuery.trim()),s=this._wallCat,r=(this.packs??[]).flatMap(_=>_.items.filter(g=>!g.light&&!g.vehicle&&!g.hole&&g.mount!=="ceiling").map(g=>({type:He(_.id,g.id),label:oe(g),search:`${Object.values(g.name).join(" ")} ${_.name}`,wall:g.mount==="wall"}))),l=_=>this.t(`furn_${_}`),c=[];s==="pack"?c=r:s==="energy"?c=["meter","inverter","home_battery","wallbox"].map(_=>({type:_,label:l(_),search:""})):s?c=(vs[s]??[]).map(_=>({type:_,label:l(_),search:Ut(qi,`furn_${_}`)})):o||n?c=[...Object.values(vs).flat().filter((_,g,v)=>v.indexOf(_)===g).map(_=>({type:_,label:l(_),search:Ut(qi,`furn_${_}`)})),...r]:this.wallRecent().length||(c=vs.base.map(_=>({type:_,label:l(_),search:""})));let d=o.split(/\s+/).filter(Boolean),u=d.length?c.filter(_=>d.every(g=>$n(`${_.label} ${_.search} ${_.type.replace(/[_:.]/g," ")}`).includes(g))):c;if(n){let _=(g,v)=>v||ru.has(g);u=u.filter(g=>_(g.type,g.wall)===!n.low).filter(g=>Dt(g.type)[0]<=i+.01||Ni.has(g.type)&&i>=(au[g.type]??.2)).sort((g,v)=>{let $=k=>Ni.has(k)?1:Math.min(1,Dt(k)[0]/i);return $(v.type)-$(g.type)||Number(g.type.startsWith("pack:"))-Number(v.type.startsWith("pack:"))})}let p=!s&&!o&&!n?this.wallRecent():[],h=[["base","\u25AD"],["hang","\u2594"],["tall","\u25AF"],["living","\u{1F6CB}"],["light","\u{1F4A1}"],...(this.packs??[]).some(_=>_.items.length)?[["pack","\u{1F9E9}"]]:[],...vt("energy_pro")?[["energy","\u26A1"]]:[]],f=[...p,...u.slice(0,40).map(_=>_.type)];this.askKitPics(f),this._wallPicTick;let m=(_,g)=>{let v=Dt(_)[0],$=n&&Ni.has(_)&&(v>i+.005||i-v<.1),k=this.kitPics.get(_);return b`<button class="fp3d-wv-tile" title=${g} @click=${()=>this.addOnWall(_,t,e)}>
        <span class="fp3d-wv-tile-pic">${k?b`<img src=${k} alt="" />`:b`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${g}</span>
        <small class=${$?"fp3d-wv-fit":""}>${$?`\u2194 ${this.m(i,2)}`:this.m(v,2)}</small>
      </button>`};return b`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${h.map(([_,g])=>b`<button class="fp3d-wv-cat ${s===_?"fp3d-on":""}" title=${this.t(`wv_cat_${_}`)} @click=${()=>this._wallCat=s===_?null:_}><span>${g}</span>${this.t(`wv_cat_${_}`)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${_=>this._wallQuery=_.target.value} />
      ${n?b`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap",{w:this.m(i,2)})} <button class="fp3d-link" @click=${()=>this._wallGap=null}>✕</button></p>`:!s&&!o?b`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`:y}
      ${s?b`<h4>${this.t(`wv_cat_${s}`)}</h4>`:y}
      ${p.length?b`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${p.map(_=>m(_,$t(_)?oe($t(_)):l(_)))}</div>`:y}
      ${(s||o||n)&&!u.length?b`<p class="fp3d-sub">${this.t(n?"wv_none_fits":"furniture_search_none")}</p>`:y}
      <div class="fp3d-wv-tiles">${u.slice(0,40).map(_=>m(_.type,_.label))}</div>
    </aside>`}async askKitPics(t){let e=t.filter(n=>!this.kitPicsAsked.has(n));if(e.length){for(let n of e)this.kitPicsAsked.add(n);try{let n=await Vi();for(let i of e){let[o,s,r]=Dt(i);this.kitPics.set(i,n.furniturePreview({type:i,w:o,d:s,h:r,variant:null,lamp:bi[i]??null},120,this.packs??[]))}}catch{}this._wallPicTick++}}renderWallKit(t,e,n){let i=!!n,o=vt("energy_pro");if(!i)return this.isAdmin?this.renderWallFurniture(t,e):y;if(this._techMode&&n)return this.renderTechKit(t,e,n);if(!this.isAdmin||!i&&!o)return y;let s=l=>b`<button class="fp3d-btn" @click=${()=>this.addOnWall(l,t,e)}>+ ${this.t(`furn_${l}`)}</button>`,r=(l,c)=>b`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,l)}>+ ${this.t(c)}</button>`;return b`<aside class="fp3d-wv-kit">
      ${i?b`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${r("valve","wall_run_valve")} ${r("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(l=>b`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?null:l}}>+ ${this.t(`wall_kit_${l}`)}</button>`)}`:y}
      ${o?b`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`:y}
    </aside>`}get runPool(){var t;return this.poolArea??((t=this.floor)==null?void 0:t.outdoor.find(e=>e.type==="pool"&&e.points.length>=3))}get canLayRuns(){return(Ko()||this._techMode)&&!!this.runPool}runFrame(t){var o;let[e,n]=t.split("|"),i=(o=this.floor)==null?void 0:o.rooms.find(s=>s.id===e);return i&&Number(n)<i.points.length?ke(i,Number(n)):null}docWithDraft(){let t=this._runDraft;if(!t||!this._wallView)return this._doc;let e=[...t.from||!t.anchor?[]:[t.anchor],...t.pts];if(!e.length)return this._doc;let n=structuredClone(this._doc),i=n.floors.find(r=>r.outdoor.some(l=>l.id===t.pool)),o=i==null?void 0:i.outdoor.find(r=>r.id===t.pool);if(!i||!o)return this._doc;o.pool??={};let s={id:"__draft",from:t.from,to:"",floor_id:i.id,points:e.map(r=>[r[0],r[2]]),heights:e.map(r=>r[1])};return o.pool.pipes=[...o.pool.pipes??[],s],n}runLast(t,e){var o,s;if(t.pts.length)return t.pts[t.pts.length-1];if(t.fromT)return t.fromT;let n=ht(this._doc,e.floor,e.pool);if(t.extend){let r=(s=(o=e.pool.pool)==null?void 0:o.pipes)==null?void 0:s.find(c=>c.id===t.extend.pipe),l=r?Kt(r,n):[];return(t.extend.end==="to"?l[l.length-1]:l[0])??null}let i=n(t.from);return i?[i.x,i.y,i.z]:null}runPick(t,e,n,i=!1){var l;if(!i){for(let c of t.runs)for(let d of c.ends)if(Math.hypot(d.s-e,d.y-n)<.12)return{end:{pipe:c.id,end:d.end}}}let o=ht(this._doc,t.floor,t.pool),s=null,r=[...t.floor.furniture.filter(c=>St.includes(c.type)).flatMap(c=>Se(c.type).length?Se(c.type).map(d=>`dev:${c.id}:${d}`):[`dev:${c.id}`]),...(((l=t.pool.pool)==null?void 0:l.joints)??[]).map(c=>c.kind==="wall"||c.kind==="floor"?`joint:${c.id}:inside`:`joint:${c.id}`)];for(let c of i?[]:r){let d=o(c);if(!d)continue;let u=gt(t.frame,[d.x,d.z]);if(u.d<-.3||u.d>1.6)continue;let p=Math.hypot(u.s-e,d.y-n);p<.12&&(!s||p<s.d)&&(s={node:c,d:p})}if(s)return{node:s.node};if(this._techMode&&!i){let c=t.floor.furniture.find(d=>{if(!St.includes(d.type)||d.type==="pool_valve")return!1;let u=Wt(d).map(h=>gt(t.frame,h));if(Math.min(...u.map(h=>h.d))>1.6||Math.max(...u.map(h=>h.d))<-.3)return!1;let p=Rt(t.floor,d);return Math.min(...u.map(h=>h.s))-.03<=e&&e<=Math.max(...u.map(h=>h.s))+.03&&p-.03<=n&&n<=p+d.h+.03});if(c)return{node:`dev:${c.id}`}}for(let c of t.runs)for(let d of c.pieces){let[u,p]=[d.s1-d.s0,d.y1-d.y0],h=u*u+p*p,f=h>0?Math.max(0,Math.min(1,((e-d.s0)*u+(n-d.y0)*p)/h)):0,[m,_]=[d.s0+u*f,d.y0+p*f];if(Math.hypot(m-e,_-n)<(i?.24:.07))return{pipe:{id:c.id,p:Xt(t.frame,m,_,d.d0+(d.d1-d.d0)*f)}}}return{}}eraseAt(t,e,n){var l;let i=(c,d,u)=>Math.hypot(c-e,d-n)<u;for(let c of t.runs)for(let d of c.fittings)if(i(d.s,d.y,.1*Math.max(1,this.wvScale))){this.changePool(t.pool.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===c.id);p&&(p.fittings=(p.fittings??[]).filter(f=>f.id!==d.id))});return}let o=ht(this._doc,t.floor,t.pool),s=(((l=t.pool.pool)==null?void 0:l.joints)??[]).find(c=>{let d=c.kind==="wall"||c.kind==="floor"?`joint:${c.id}:inside`:`joint:${c.id}`,u=o(d);if(!u)return!1;let p=gt(t.frame,[u.x,u.z]);return p.d>-.3&&p.d<1.6&&i(p.s,u.y,.1)});if(s){let c=`joint:${s.id}`;this.changePool(t.pool.id,d=>{d.joints=(d.joints??[]).filter(u=>u.id!==s.id),d.pipes=(d.pipes??[]).filter(u=>te(u.from)!==c&&te(u.to)!==c)}),this._runSel=null;return}let r=this.runPick(t,e,n,!0);if(r.pipe){let c=r.pipe.id;this.changePool(t.pool.id,d=>d.pipes=(d.pipes??[]).filter(u=>u.id!==c)),this._runSel=null}}runDown(t,e){if(!this._runMode||!this.isAdmin||(t.stopPropagation(),this._techAsk=null,this._techMode&&this._runMode==="draw"))return;let{s:n,y:i}=e.pt(t);this.runAt(e,n,i,t.altKey,t.detail,null)}runDown3d(t){var v,$;let e=this.runCtx3d;if(!this._runMode||!e||t.button!==0||!this.isAdmin||!this._wallView3d)return;let n=(v=this.wall3dEl)==null?void 0:v.viewer;if(!n)return;t.stopPropagation(),t.preventDefault();let i=n.renderer.domElement.getBoundingClientRect(),[o,s]=[t.clientX-i.left,t.clientY-i.top],r=n.furnitureIdAt(o,s),l=r?e.floor.furniture.find(k=>k.id===r&&St.includes(k.type)):void 0,c=n.pointerRay(o,s),d=Zt(e.frame,0,e.gap),u=e.frame.n,p=c.d[0]*u[0]+c.d[2]*u[1];if(Math.abs(p)<1e-6)return;let h=((d[0]-c.o[0])*u[0]+(d[1]-c.o[2])*u[1])/p;if(h<=0&&!l)return;let f=[c.o[0]+c.d[0]*h,c.o[1]+c.d[1]*h,c.o[2]+c.d[2]*h],m=e.floor.elevation+((($=n.floorMap.get(e.floor.id))==null?void 0:$.y)??0),_=ht(this._doc,e.floor,e.pool),g=()=>{let k=Se(l.type);if(!k.length)return`dev:${l.id}`;let P=M=>{let z=_(M),R=[z.x-c.o[0],z.y+m-c.o[1],z.z-c.o[2]],A=R[0]*c.d[0]+R[1]*c.d[1]+R[2]*c.d[2];return Math.hypot(R[0]-c.d[0]*A,R[1]-c.d[1]*A,R[2]-c.d[2]*A)};return k.map(M=>`dev:${l.id}:${M}`).sort((M,z)=>P(M)-P(z))[0]};this.runAt(e,gt(e.frame,[f[0],f[2]]).s,f[1]-m,t.altKey,t.detail,l&&this._runMode==="draw"?g():null)}runAt(t,e,n,i,o,s){let r=this._runMode;if(!r)return;if(r==="tee"&&this._techMode){let d=this.runPick(t,e,n,!0);d.pipe&&this.teeOnPipe(t,d.pipe.id,d.pipe.p);return}if(r==="hole_wall"||r==="hole_floor"||r==="tee"||r==="y")return this.placeJoint(t,r,e,n);if(r==="feed")return this.placeFeed(t,e,n);if(r==="erase")return this.eraseAt(t,e,n);let l=s?{node:s}:this.runPick(t,e,n,r!=="draw");if(r!=="draw"){if(!l.pipe&&this._techMode)return;l.pipe&&this.addFitting(t,l.pipe.id,l.pipe.p,r),this._runMode=this._techMode?"draw":null,this._techMode&&(this._runSel=null);return}let c=this._runDraft;if(c&&this._techMode&&!this.techStroke&&((c.pts.length>=2||(c.extend||c.fromT||c.from)&&c.pts.length)&&this.finishRun("",null),this._runDraft=null,c=null),!c){let d={pool:t.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:t.key,d:t.gap},u;l.end?u={...d,extend:l.end}:l.node?u={...d,from:l.node}:l.pipe?u={...d,fromT:l.pipe.p}:u={...d,pts:[Xt(t.frame,Math.round(e*20)/20,Math.round(n*20)/20,t.gap)]},this._runDraft={...u,anchor:this.runLast({...u,pts:[]},t)};return}if(o>=2)return void this.finishRun("",null);if(l.node&&l.node!==c.from)return void this.finishRun(l.node,null);if(l.pipe)return void this.finishRun("",l.pipe.p);this._runDraft={...c,pts:[...c.pts,...this.runStep(c,t,e,n,i)],wall:t.key,d:t.gap}}runStep(t,e,n,i,o){let s=Math.round(n*20)/20,r=Math.round(i*20)/20,l=[],c=this.runLast(t,e);if(c&&t.wall!==e.key){let d=this.runFrame(t.wall),u=d&&ja(d,t.d,e.frame,e.gap);u&&(c=[I(u[0]),c[1],I(u[1])],l.push(c))}if(c&&!o){let d=gt(e.frame,[c[0],c[2]]);d.d>-.35&&d.d<.6&&(Math.abs(s-d.s)<Math.abs(r-c[1])?s=d.s:r=c[1])}return l.push(Xt(e.frame,s,r,e.gap)),l.map(d=>[I(d[0]),I(d[1]),I(d[2])])}finishRun(t,e,n=[],i){var p;let o=this._runDraft,s=this.floor,r=this.pipeRules;if(this._runDraft=null,!o||!s||!r)return null;let l=[...o.pts,...n],c=this._techMode?this.runFrame(o.wall):null,d=this._techMode?(p=this.floor)==null?void 0:p.outdoor.find(h=>h.id===o.pool):void 0;if(c&&d&&!n.length&&(t||e)){let h=l.length?l[l.length-1]:(()=>{let m=o.from?ht(this._doc,s,d)(o.from):null;return m?[m.x,m.y,m.z]:o.fromT})(),f=e?{x:e[0],y:e[1],z:e[2]}:ht(this._doc,s,d)(t);if(h&&f){let m=gt(c,[h[0],h[2]]),_=gt(c,[f.x,f.z]);Math.abs(m.s-_.s)>.03&&Math.abs(h[1]-f.y)>.03&&l.push(Xt(c,_.s,h[1],o.d))}}if(!l.length&&!e&&(!t||t===o.from)&&!o.fromT)return null;let u=null;return this.changePool(o.pool,(h,f)=>{let m=h.joints??=[],_=h.pipes??=[],g=ht(this._doc,s,f),v=j=>{let D=j.startsWith("joint:")?m.find(W=>`joint:${W.id}`===j):void 0;return D?{x:D.x,z:D.z,y:D.y}:g(j)},$=j=>{let D=null;for(let Z of _){let Y=un(Kt(Z,v),j);Y&&Y.d<.12&&(!D||Y.d<D.d)&&(D={pipe:Z,d:Y.d})}let W=D&&Ei(D.pipe,v,j,J("joint"),J("pipe"));return!D||!W?"":(m.push(W.joint),_.splice(_.indexOf(D.pipe),1,W.first,W.second),`joint:${W.joint.id}:out2`)},k=(j,D=[])=>{let{kind:W,id:Z,port:Y}=ct(j),tt=W==="joint"&&!Y?m.find(q=>q.id===Z):void 0;if(!tt||!tt.kind)return j;if(tt.kind==="wall"||tt.kind==="floor")return`joint:${Z}:inside`;let X=new Set([..._.flatMap(q=>[q.from,q.to]),...D]),it=pn(tt.kind).find(q=>!X.has(`joint:${Z}:${q}`));return it?`joint:${Z}:${it}`:j},P=o.fromT?$(o.fromT):k(o.from),M=e?$(e):k(t,[P]),z=s.furniture.filter(j=>St.includes(j.type)).map(j=>({id:j.id,type:j.type})),R=j=>_.flatMap(D=>[D.from,D.to]).filter(D=>te(D)===j).map(D=>ct(D).port).filter(D=>!!D),A=j=>{var Z,Y,tt,X;let{kind:D,id:W}=ct(j);return D==="port"?((tt=(Y=(Z=f.pool)==null?void 0:Z.ports)==null?void 0:Y.find(it=>it.id===W))==null?void 0:tt.kind)==="waste":D==="joint"&&/kanal|waste|abwasser|backwash/i.test(((X=m.find(it=>it.id===W))==null?void 0:X.name)??"")},w=(j,D)=>{var it;let{kind:W,id:Z,port:Y}=ct(j);if(W!=="dev"||Y)return j;let tt=((it=s.furniture.find(q=>q.id===Z))==null?void 0:it.type)??"",X=r.autoPort(tt,D?r.nodeFlow(D,f,z):null,A(D),R(`dev:${Z}`));return X?`dev:${Z}:${X}`:j};P=w(P,M),M=w(M,P);let x=l.map(j=>[I(j[0]),I(j[2])]),E=l.map(j=>I(j[1])),S=o.extend,T=S&&_.find(j=>j.id===S.pipe);if(S&&T){Object.assign(T,Nt(T,v)),S.end==="to"?(T.points=[...T.points,...x],T.heights=[...T.heights??[],...E],T.to=M):(T.points=[...x.reverse(),...T.points],T.heights=[...E.reverse(),...T.heights??[]],T.from=M),i!==void 0&&(T.height=i),u=T.id;return}let L={id:J("pipe"),from:P,to:M,floor_id:s.id,points:x,heights:E,height:i??E[E.length-1]??null};L=r.orientPipe(L,P?r.nodeFlow(P,f,z):null,M?r.nodeFlow(M,f,z):null),_.push(L),u=L.id}),u&&!this._techMode&&(this._runSel={pipe:u,pt:null}),this._runMode=this._techMode?"draw":null,u}teeOnPipe(t,e,n){let i=ht(this._doc,t.floor,t.pool);this.changePool(t.pool.id,o=>{let s=[...o.pipes??[]],r=s.findIndex(c=>c.id===e);if(r<0)return;let l=Ei(s[r],i,n,J("joint"),J("pipe"));l&&(o.joints=[...o.joints??[],l.joint],s.splice(r,1,l.first,l.second),o.pipes=s)}),this._runMode="draw"}placeFeed(t,e,n){let i=this._feedKind;this._feedKind=null,this._runMode="draw",i&&this.feedAt(t,i,e,n)}feedAt(t,e,n,i){let o=this.floor;if(!o)return null;let s=Math.round(n*20)/20,r=i<.25,l=t.gap-ys,c=le(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,d=this.t(`feed_${e}`),[u,p]=Xe(t.frame,s,r?t.gap:l),h=r?{id:J("joint"),kind:"floor",x:u,z:p,y:0,name:d}:{id:J("joint"),kind:"wall",x:u,z:p,y:Math.round(i*20)/20,nx:I(t.frame.n[0]),nz:I(t.frame.n[1]),depth:I(c),name:d};return this.changePool(t.pool.id,(f,m)=>{f.joints=[...f.joints??[],h];let _=(f.ports??[]).filter(P=>P.kind===e);if(e==="waste"&&!_.length){let P=Pe(h,"outside"),M={id:J("port"),kind:"waste",x:I(P.x-t.frame.n[0]*1),z:I(P.z-t.frame.n[1]*1)};f.ports=[...f.ports??[],M],_=[M]}if(!_.length)return;let g=ht(this._doc,o,m),v=P=>{let{kind:M,id:z,port:R}=ct(P),A=M==="joint"?(f.joints??[]).find(x=>x.id===z):void 0;if(A)return Pe(A,R);let w=M==="port"?(f.ports??[]).find(x=>x.id===z):void 0;return w?g(P)??{x:w.x,y:.02,z:w.z}:g(P)},$=P=>{let{kind:M,id:z}=ct(P);if(M==="port"){let R=(f.ports??[]).find(A=>A.id===z);return R?qo(R.kind):null}return null},k=hn({from:`joint:${h.id}:outside`,vias:[],to:_.map(P=>`port:${P.id}`),floorId:o.id},v,f.joints??[],$,P=>J(P));f.joints=[...f.joints??[],...k.joints],f.pipes=[...f.pipes??[],...k.pipes]}),h}endStroke(t,e,n){let i=this._runDraft;if(!i)return;let o=this.runLast(i,t),s=o?gt(t.frame,[o[0],o[2]]):null,r=s&&s.d>-.35&&s.d<.6?{s:s.s,y:o[1]}:e[0],l=lu([r,...xs(e,.08),n]),c=l.slice(1,-1).map(f=>{let m=Xt(t.frame,f.s,f.y,t.gap);return[I(m[0]),I(m[1]),I(m[2])]}),d=this.runPick(t,n.s,n.y);if(this._techAsk=null,d.node&&d.node!==i.from){this.finishRun(d.node,null,c);return}if(d.pipe){this.finishRun("",d.pipe.p,c);return}let u=l[l.length-1],p=Xt(t.frame,Math.round(u.s*20)/20,Math.round(u.y*20)/20,t.gap),h=this.finishRun("",null,[...c,[I(p[0]),I(p[1]),I(p[2])]]);h&&(this._techAsk={s:u.s,y:u.y,pipe:h})}answerAsk(t,e){let n=this._techAsk;if(this._techAsk=null,!n)return;if(e==="cancel"){this.changePool(t.pool.id,o=>o.pipes=(o.pipes??[]).filter(s=>s.id!==n.pipe));return}if(!e)return;let i=this.feedAt(t,e,n.s,n.y);i&&this.changePool(t.pool.id,o=>{var r;let s=(r=o.pipes)==null?void 0:r.find(l=>l.id===n.pipe);s&&(s.to?s.from||(s.from=`joint:${i.id}:inside`):s.to=`joint:${i.id}:inside`)})}renderTechKit(t,e,n){var d;let i=n.pool,o=this.pipeRules;if(!o)return y;let s=u=>b`<button class="fp3d-wv-tile" @click=${()=>this.addOnWall(u,t,e)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(u)?b`<img src=${this.kitPics.get(u)} alt="" />`:b`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${u}`)}</span>
    </button>`;this.askKitPics(["pool_pump","pool_filter","pool_heat_pump","pool_dosing"]);let r=["skimmer","drain","inlet","waste"].filter(u=>{var p;return u==="waste"||(((p=i.pool)==null?void 0:p.ports)??[]).some(h=>h.kind===u)}),l=(u,p)=>b`<button class="fp3d-btn ${this._runMode===u?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===u?"draw":u}}>+ ${this.t(p)}</button>`,c=this._techAsk;return b`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${c?b`<div class="fp3d-tech-ask">
            <b>${this.t("tech_ask")}</b>
            ${["skimmer","drain","inlet","waste"].map(u=>b`<button class="fp3d-btn fp3d-tech-feed" @click=${()=>this.answerAsk(n,u)}><i>${u==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${u}`)}</button>`)}
            <button class="fp3d-btn" @click=${()=>this.answerAsk(n,null)}>${this.t("tech_ask_loose")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.answerAsk(n,"cancel")}>${this.t("delete")}</button>
          </div>`:this.renderTechStep(n)}
      <div class="fp3d-seg fp3d-tech-pen" role="group">
        <button aria-pressed=${this._runMode==="draw"} @click=${()=>{this._runMode="draw",this._runSel=null}}><span>✏</span>${this.t("tech_draw")}</button>
        <button aria-pressed=${this._runMode!=="draw"&&this._runMode!=="feed"&&this._runMode!=="erase"} @click=${()=>{this._runDraft=null,this._runMode=null}}><span>✋</span>${this.t("tech_pick")}</button>
        <button aria-pressed=${this._runMode==="erase"} title=${this.t("tech_erase_hint")} @click=${()=>{this._runDraft=null,this._runSel=null,this._feedKind=null,this._runMode=this._runMode==="erase"?"draw":"erase"}}><span>🧽</span>${this.t("tech_erase")}</button>
      </div>
      <button class="fp3d-btn fp3d-tech-undo" ?disabled=${!this._canUndo} title="Ctrl+Z" @click=${()=>{this._runDraft=null,this.undo()}}>↶ ${this.t("undo")}</button>
      <h4>${this.t("tech_feeds")}</h4>
      ${r.map(u=>{let p=o.feedDone(i,u);return b`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind===u?"fp3d-primary":""} ${p?"fp3d-on":""}" ?disabled=${p} @click=${()=>{this._runDraft=null,this._feedKind=this._feedKind===u?null:u,this._runMode=this._feedKind?"feed":"draw"}}><i>${u==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${u}`)}${p?b`<small>✓</small>`:y}</button>`})}
      ${(((d=i.pool)==null?void 0:d.ports)??[]).some(u=>u.kind!=="waste")?y:b`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>`}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${l("valve","wall_run_valve")} ${l("sight","wall_run_sight")}
      <button class="fp3d-btn ${this._runMode==="tee"?"fp3d-primary":""}" title=${this.t("tech_step_tee")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode==="tee"?"draw":"tee"}}>+ ${this.t("joint_add_tee")}</button>
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`}renderTechStep(t){var h;let e=t.pool,n=this.pipeRules;if(!n)return y;let i=((h=e.pool)==null?void 0:h.ports)??[],o=t.floor.furniture.filter(f=>St.includes(f.type)),s=(f,m)=>b`<div class="fp3d-tech-step ${f===null?"fp3d-done":""}"><b>${f===null?"\u2713":this.t("tech_step",{n:f})}</b>${m}</div>`;if(this._runMode==="feed")return s(1,this.t("tech_feed_place"));if(this._runMode==="erase")return b`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;if(this._runMode==="valve"||this._runMode==="sight")return s(4,this.t("tech_step_fit"));if(this._runMode==="tee")return s(4,this.t("tech_step_tee"));if(this._runDraft)return s(3,this.t("tech_step_drawing"));if(!i.some(f=>f.kind!=="waste"))return s(1,this.t("tech_no_ports"));let r=["skimmer","drain","inlet"].find(f=>i.some(m=>m.kind===f)&&!n.feedDone(e,f));if(r)return s(1,this.t("tech_step_feed",{name:this.t(`feed_${r}`)}));let l=o.find(f=>f.type==="pool_pump"),c=o.find(f=>f.type==="pool_filter");if(!l||!c)return s(2,this.t("tech_step_devices"));let d=n.issues(e,o.map(f=>({id:f.id,type:f.type}))),u=f=>this.poolNodeLabel(e,f),p=d.find(f=>f.kind==="port");if(p){let{port:f}=ct(p.node),m={suction:this.t("feed_skimmer"),pressure:u(`dev:${c.id}:pump`),pump:u(`dev:${l.id}:pressure`),return:o.some(_=>_.type==="pool_heat_pump")?this.t("furn_pool_heat_pump"):this.t("feed_inlet"),waste:this.t("feed_waste"),in:u(`dev:${c.id}:return`),out:this.t("feed_inlet")};return s(3,this.t("tech_step_line",{a:f?m[f]??"\u2026":"\u2026",b:u(p.node)}))}return d.some(f=>f.kind==="loose")?s(3,this.t("tech_step_loose")):s(null,this.t("tech_ok"))}renderTechIssues(t){let e=t.floor.furniture.filter(r=>St.includes(r.type)).map(r=>({id:r.id,type:r.type})),n=this.pipeRules;if(!n)return y;let i=n.issues(t.pool,e);if(!i.length)return b`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;let o=i.filter(r=>r.kind==="loose").length,s=[...o?[this.t("tech_issue_loose",{n:o})]:[],...i.filter(r=>r.kind==="port").map(r=>this.t("tech_issue_port",{name:this.poolNodeLabel(t.pool,r.node)})),...i.filter(r=>r.kind==="feed").map(r=>this.t("tech_issue_feed",{name:this.t(`feed_${r.node}`)}))];return b`<span class="fp3d-tech-issues">⚠ ${s.slice(0,4).join(" \xB7 ")}${s.length>4?" \u2026":""}</span>`}placeJoint(t,e,n,i){let o=t.gap-ys,s=Math.round(n*100)/100,r=Math.round(i*100)/100,l=le(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c;if(e==="hole_wall"){let[d,u]=Xe(t.frame,s,o);c={id:J("joint"),kind:"wall",x:d,z:u,y:Math.max(.05,r),nx:I(t.frame.n[0]),nz:I(t.frame.n[1]),depth:I(l)}}else if(e==="hole_floor"){let[d,u]=Xe(t.frame,s,t.gap);c={id:J("joint"),kind:"floor",x:d,z:u,y:0}}else{let[d,u]=Xe(t.frame,s,t.gap);c={id:J("joint"),kind:e,x:d,z:u,y:r}}this.changePool(t.pool.id,d=>d.joints=[...d.joints??[],c]),this._runMode=null}runOut(t,e){let n=this._runDraft,i=n&&this.runLast(n,t);if(!n||!i)return;if(e==="down")return void this.finishRun("",null,[[i[0],-.3,i[2]]],-.3);let o=gt(t.frame,[i[0],i[2]]),s=le(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,r=Xt(t.frame,o.s,i[1],-(s+.15));this.finishRun("",null,[[I(r[0]),i[1],I(r[2])]],i[1])}addFitting(t,e,n,i){let o=ht(this._doc,t.floor,t.pool);this.changePool(t.pool.id,s=>{var c;let r=(c=s.pipes)==null?void 0:c.find(d=>d.id===e),l=r&&un(Kt(r,o),n);!r||!l||(r.fittings=[...r.fittings??[],{id:J("fit"),kind:i,at:I(l.at),...i==="valve"?{open:!0}:{}}])}),this._runSel={pipe:e,pt:null}}runPieceDown(t,e,n,i){var h,f;if(this._runMode)return;if(t.stopPropagation(),this._wallSel=null,((h=this._runSel)==null?void 0:h.pipe)!==n.id||!this.isAdmin){this._runSel={pipe:n.id,pt:null};return}let{s:o,y:s}=e.pt(t),r=n.pieces.find(m=>m.k===i),l=Math.hypot(r.s1-r.s0,r.y1-r.y0)>0?Math.hypot(o-r.s0,s-r.y0)/Math.hypot(r.s1-r.s0,r.y1-r.y0):0,c=r.d0+(r.d1-r.d0)*Math.min(1,l),d=this._doc,u=ht(d,e.floor,e.pool),p=-1;this.changePool(e.pool.id,m=>{var g;let _=(g=m.pipes)==null?void 0:g.find(v=>v.id===n.id);_&&(Object.assign(_,Nt(_,u)),p=Math.max(0,Math.min(_.points.length,i+1-Cn(_,u))),_.points.splice(p,0,Xe(e.frame,o,c)),_.heights.splice(p,0,I(s)))}),!(p<0)&&(this._runSel={pipe:n.id,pt:p},this.runDrag={pipe:n.id,i:p,d:c,base:d,moved:!0},(f=t.currentTarget.closest("svg"))==null||f.setPointerCapture(t.pointerId))}runPointDown(t,e,n,i){var c,d,u;if(this._runMode||!this.isAdmin)return;t.stopPropagation();let o=ht(this._doc,e.floor,e.pool);if(this.doubleTap(t,`runpt:${n}:${i}`)){this.changePool(e.pool.id,p=>{var f;let h=(f=p.pipes)==null?void 0:f.find(m=>m.id===n);h&&(Object.assign(h,Nt(h,o)),h.points.splice(i,1),h.heights.splice(i,1))}),this._runSel={pipe:n,pt:null};return}let s=(d=(c=e.pool.pool)==null?void 0:c.pipes)==null?void 0:d.find(p=>p.id===n),r=s&&Nt(s,o),l=r==null?void 0:r.points[i];l&&(this._runSel={pipe:n,pt:i},this.runDrag={pipe:n,i,d:gt(e.frame,l).d,base:this._doc,moved:!1},(u=t.currentTarget.closest("svg"))==null||u.setPointerCapture(t.pointerId))}runPointMove(t,e){var d,u;let n=this.runDrag;if(!n)return;let{s:i,y:o}=e.pt(t);i=Math.round(i*100)/100,o=Math.round(o*100)/100;let s=ht(n.base,e.floor,e.pool),r=n.base.floors.flatMap(p=>p.outdoor).find(p=>p.id===e.pool.id),l=(u=(d=r==null?void 0:r.pool)==null?void 0:d.pipes)==null?void 0:u.find(p=>p.id===n.pipe);if(!l)return;let c=Nt(l,s);if(!t.altKey){let p=Kt(c,s),h=Cn(c,s);for(let f of[p[n.i+h-1],p[n.i+h+1]]){if(!f)continue;let m=gt(e.frame,[f[0],f[2]]);Math.abs(m.s-i)<.04&&(i=I(m.s)),Math.abs(f[1]-o)<.04&&(o=I(f[1]))}}n.moved=!0,this.change((p,h)=>{var m,_,g;let f=(g=(_=(m=h.outdoor.find(v=>v.id===e.pool.id))==null?void 0:m.pool)==null?void 0:_.pipes)==null?void 0:g.find(v=>v.id===n.pipe);f&&(Object.assign(f,Nt(f,s)),f.points[n.i]=Xe(e.frame,i,n.d),f.heights[n.i]=o)},n.base,!1)}runPointUp(){let t=this.runDrag;this.runDrag=null,t!=null&&t.moved&&this.pushHistory(t.base)}fittingDown(t,e,n,i){var o;if(!(this._runMode||!this.isAdmin)){if(t.stopPropagation(),this._runSel={pipe:n,pt:null},this.doubleTap(t,`fitting:${i}`)){this.changePool(e.pool.id,s=>{var l;let r=(l=s.pipes)==null?void 0:l.find(c=>c.id===n);r!=null&&r.fittings&&(r.fittings=r.fittings.filter(c=>c.id!==i))});return}this.fitDrag={pipe:n,id:i,base:this._doc,moved:!1,x:t.clientX,y:t.clientY},(o=t.currentTarget.closest("svg"))==null||o.setPointerCapture(t.pointerId)}}jointDown(t,e,n){var i;this._runMode||!this.isAdmin||(t.stopPropagation(),this.jointDrag={id:e,d:n,base:this._doc,moved:!1},(i=t.currentTarget.closest("svg"))==null||i.setPointerCapture(t.pointerId))}jointMove(t,e){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:i,y:o}=e.pt(t),s=t.altKey?i:Math.round(i*100)/100,r=t.altKey?o:Math.round(o*100)/100;this.change((l,c)=>{var u,p,h;let d=(h=(p=(u=c.outdoor.find(f=>f.id===e.pool.id))==null?void 0:u.pool)==null?void 0:p.joints)==null?void 0:h.find(f=>f.id===n.id);d&&([d.x,d.z]=Xe(e.frame,s,n.d),d.kind!=="floor"&&(d.y=Math.max(d.kind==="wall"?.05:-1,I(r))))},n.base,!1)}fittingMove(t,e){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)<4)return;n.moved=!0;let{s:i,y:o}=e.pt(t),s=e.runs.find(d=>d.id===n.pipe);if(!s)return;let r=null;for(let d of s.pieces){let[u,p]=[d.s1-d.s0,d.y1-d.y0],h=u*u+p*p,f=h>0?Math.max(0,Math.min(1,((i-d.s0)*u+(o-d.y0)*p)/h)):0,[m,_]=[d.s0+u*f,d.y0+p*f],g=Math.hypot(m-i,_-o);(!r||g<r.d)&&(r={p:Xt(e.frame,m,_,d.d0+(d.d1-d.d0)*f),d:g})}if(!r)return;let l=ht(n.base,e.floor,e.pool),c=r.p;this.change((d,u)=>{var m,_,g,v;let p=(g=(_=(m=u.outdoor.find($=>$.id===e.pool.id))==null?void 0:m.pool)==null?void 0:_.pipes)==null?void 0:g.find($=>$.id===n.pipe),h=(v=p==null?void 0:p.fittings)==null?void 0:v.find($=>$.id===n.id),f=p&&un(Kt(p,l),c);h&&f&&(h.at=I(f.at))},n.base,!1)}fittingUp(t){let e=this.fitDrag;if(this.fitDrag=null,!!e){if(e.moved)return this.pushHistory(e.base);t&&this.changePool(t.pool.id,n=>{var o,s,r;let i=(r=(s=(o=n.pipes)==null?void 0:o.find(l=>l.id===e.pipe))==null?void 0:s.fittings)==null?void 0:r.find(l=>l.id===e.id);(i==null?void 0:i.kind)==="valve"&&(i.open=i.open===!1)})}}kitFitting(t,e){this._runDraft=null;let n=t&&this._runSel?t.runs.find(o=>o.id===this._runSel.pipe):void 0;if(!t||!n||!n.pieces.length){this._runMode=this._runMode===e?null:e;return}let i=[...n.pieces].sort((o,s)=>Math.hypot(s.s1-s.s0,s.y1-s.y0)-Math.hypot(o.s1-o.s0,o.y1-o.y0))[0];this.addFitting(t,n.id,Xt(t.frame,(i.s0+i.s1)/2,(i.y0+i.y1)/2,(i.d0+i.d1)/2),e),this._runMode=null}renderRuns(t,e,n){var v,$,k,P;let i=(v=this._runSel)==null?void 0:v.pipe,o=M=>{let z=gt(t.frame,[M[0],M[2]]);return`${e(z.s)},${n(M[1])}`},s=this._runDraft,r=s&&this.runLast(s,t),l=s?[...s.fromT||s.extend||s.from?[this.runLast({...s,pts:[]},t)]:[],...s.pts].filter(M=>!!M):[],c=this.runHover,d=ht(this._doc,t.floor,t.pool),u={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},p=[],h=(M,z,R="",A)=>{let w=d(M),x=w&&gt(t.frame,[w.x,w.z]);if(!(w&&x&&x.d>-.6&&x.d<1.6&&x.s>-.2&&x.s<t.L+.2))return[];let E=p.filter(T=>Math.hypot(T.s-x.s,T.y-w.y)<.3*this.wvScale).length;p.push({s:x.s,y:w.y});let S=E&&this.wvScale>.5?"":z;return[C`<g class="fp3d-wv-node ${R} ${A?"fp3d-wv-joint":""}" transform="translate(${e(x.s)} ${n(w.y)}) scale(${this.wvScale})" @pointerdown=${T=>A&&this.jointDown(T,A,x.d)}>
            <circle r="0.05" /><text y=${.11+E*.07}>${S}</text><title>${this.poolNodeLabel(t.pool,M)}</title>
          </g>`]},f=[...t.floor.furniture.flatMap(M=>{if(u[M.type]===void 0)return[];let z=Se(M.type);return z.length?z.flatMap(R=>h(`dev:${M.id}:${R}`,this.t(`port_${R}`))):h(`dev:${M.id}`,u[M.type])}),...((($=t.pool.pool)==null?void 0:$.joints)??[]).flatMap(M=>M.kind==="wall"||M.kind==="floor"?h(`joint:${M.id}:inside`,this.jointLabel(t.pool,M.id),"fp3d-wv-hole-mark",M.id):h(`joint:${M.id}`,this.jointLabel(t.pool,M.id),"",M.id))],m=this.pipeRules,_=this._techMode&&m?m.flow({pipes:((k=t.pool.pool)==null?void 0:k.pipes)??[],ports:((P=t.pool.pool)==null?void 0:P.ports)??[],devices:this._doc.floors.flatMap(M=>M.furniture).filter(M=>St.includes(M.type)).map(M=>({id:M.id,type:M.type,open:M.valve_open!==!1,valve:M.valve_position??null})),pumpOn:!0,heaterOn:!1,heating:!1}):null,g=M=>{let z=_==null?void 0:_.get(M);if(!(z!=null&&z.active)||!m)return"";let[R,A,w]=m.waterColor(z).map(x=>Math.round(x*255));return`stroke: rgb(${R}, ${A}, ${w}); stroke-opacity: 0.95`};return C`<g class="fp3d-wv-runs">
      ${f}
      ${t.runs.map(M=>{var z;return C`<g class="fp3d-wv-run ${M.id===i?"fp3d-wv-run-sel":""} ${_&&!((z=_.get(M.id))!=null&&z.active)?"fp3d-wv-dry":""}">
          ${M.pieces.map(R=>C`<line class=${R.y0<-.01&&R.y1<-.01?"fp3d-wv-under":""} style=${g(M.id)} x1=${e(R.s0)} y1=${n(R.y0)} x2=${e(R.s1)} y2=${n(R.y1)} @pointerdown=${A=>this.runPieceDown(A,t,M,R.k)} />`)}
          ${M.ends.map(R=>C`<circle class="fp3d-wv-end" cx=${e(R.s)} cy=${n(R.y)} r="0.035" />`)}
          ${M.fittings.map(R=>R.kind==="valve"?C`<g class="fp3d-wv-valve ${R.open?"":"fp3d-wv-shut"}" transform="translate(${e(R.s)} ${n(R.y)}) scale(${this.wvScale})" @pointerdown=${A=>this.fittingDown(A,t,M.id,R.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${R.open?.11:0} y2=${R.open?0:-.11} />
                </g>`:C`<rect class="fp3d-wv-sight" x=${e(R.s)-.06} y=${n(R.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${A=>this.fittingDown(A,t,M.id,R.id)} />`)}
          ${M.id===i?M.points.map(R=>{var A;return C`<circle class="fp3d-wv-runpt ${((A=this._runSel)==null?void 0:A.pt)===R.i?"fp3d-on":""}" cx=${e(R.s)} cy=${n(R.y)} r="0.04" @pointerdown=${w=>this.runPointDown(w,t,M.id,R.i)} />`}):y}
        </g>`})}
      ${l.length?C`<polyline class="fp3d-wv-draft" points=${l.map(o).join(" ")} />`:y}
      ${this.techStroke&&this.techStroke.length>1?C`<polyline class="fp3d-wv-draft fp3d-wv-stroke" points=${this.techStroke.map(M=>`${e(M.s)},${n(M.y)}`).join(" ")} />`:y}
      ${r&&c?C`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${o(r).split(",")[0]} y1=${o(r).split(",")[1]} x2=${e(c[0])} y2=${n(c[1])} />`:y}
    </g>`}renderRunFoot(t){var u,p,h;let e=this._runMode,n=this._runDraft;if(e==="hole_wall"||e==="hole_floor"||e==="tee"||e==="y")return b`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="valve"||e==="sight")return b`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="draw")return b`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?b`<button class="fp3d-btn" @click=${()=>this.runOut(t,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(t,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:y}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let i=this._runSel,o=i&&((p=(u=t.pool.pool)==null?void 0:u.pipes)==null?void 0:p.find(f=>f.id===i.pipe));if(!i||!o)return y;let s=ht(this._doc,t.floor,t.pool),r=Nt(o,s),l=i.pt,c=this.isAdmin,d=o.to?o.from?null:"from":"to";return b`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&((h=r.heights)==null?void 0:h[l])!==void 0?this.len(this.t("wall_run_pt"),r.heights[l]??0,f=>this.changePool(t.pool.id,m=>{var g;let _=(g=m.pipes)==null?void 0:g.find(v=>v.id===o.id);_&&(Object.assign(_,Nt(_,s)),_.heights[l]=Math.min(10,Math.max(-5,I(f))))}),.01):y}
      ${c?b`<button class="fp3d-btn" @click=${()=>this.kitFitting(t,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(t,"sight")}>${this.t("wall_run_sight")}</button>
            ${d?b`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let f={pool:t.pool.id,from:"",fromT:null,extend:{pipe:o.id,end:d},pts:[],anchor:null,wall:t.key,d:t.gap};this._runDraft={...f,anchor:this.runLast(f,t)}}}>${this.t("wall_run_more")}</button>`:y}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.pool.id,f=>{var _,g;let m=(_=f.pipes)==null?void 0:_.find(v=>v.id===o.id);m&&(Object.assign(m,Nt(m,s)),[m.from,m.to,m.points,m.heights]=[m.to,m.from,[...m.points].reverse(),[...m.heights??[]].reverse()],m.fittings=(g=m.fittings)==null?void 0:g.map(v=>({...v,at:I(Math.max(0,$s(m,s)-v.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(t.pool.id,f=>f.pipes=(f.pipes??[]).filter(m=>m.id!==o.id)),this._runSel=null}}>${this.t("delete")}</button>`:y}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){var n;let t=this.outdoorArea;if((t==null?void 0:t.type)==="pool")return t;let e=((n=this.floor)==null?void 0:n.outdoor.filter(i=>i.type==="pool"))??[];return e.length===1?e[0]:void 0}poolDown(t,e,n,i){var u,p,h,f,m,_,g,v,$,k;let o=this.floor;if(!o)return!1;let s=this.poolArea,r=((u=e.closest("[data-pool-node]"))==null?void 0:u.getAttribute("data-pool-node"))??null;if(this._jointPlace&&s)return this.isAdmin&&this.placeJointPlan(s,this._jointPlace,n,((p=e.closest("[data-pipe]"))==null?void 0:p.getAttribute("data-pipe"))??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isAdmin)return!0;if(!s){let M=o.outdoor.find(z=>z.type==="pool"&&z.points.length>=3&&Q(n,z.points));return M&&(this.selectItem("outdoor",M.id),this._tool="pool",this._pipeMode=!0),!0}let P=(h=e.closest("[data-pipe-end]"))==null?void 0:h.getAttribute("data-pipe-end");if(P&&!this._pipeDraft){let[M,z]=P.split("|"),R=(m=(f=s.pool)==null?void 0:f.pipes)==null?void 0:m.find(w=>w.id===M),A=R&&(z==="to"?R.points[R.points.length-1]:R.points[0]);A&&(this._pipeDraft={from:"",points:[],extend:{pipe:M,end:z,at:A}})}else if(r){let M=this._pipeDraft;M?M.extend?(this.extendPipe(s,M.extend,r,M.points),this._pipeDraft=null):r!==M.from&&(this.addPipe(s.id,M.from,r,M.points),this._pipeDraft=null):this._pipeDraft={from:r,points:[]}}else if(this._pipeDraft){let M=this.snap(n,void 0,t.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[I(M[0]),I(M[1])]]}}return!0}let l=P=>[P.slice(0,P.lastIndexOf(":")),Number(P.slice(P.lastIndexOf(":")+1))];if(s&&this.isAdmin){let P=(_=e.closest("[data-pipe-pt]"))==null?void 0:_.getAttribute("data-pipe-pt");if(P){let[z,R]=l(P);return this.doubleTap(t,`pipept:${P}`)?this.change((A,w)=>{var E,S,T,L;let x=(T=(S=(E=w.outdoor.find(j=>j.id===s.id))==null?void 0:E.pool)==null?void 0:S.pipes)==null?void 0:T.find(j=>j.id===z);x==null||x.points.splice(R,1),(L=x==null?void 0:x.heights)==null||L.splice(R,1)}):this.drag={kind:"pipept",pool:s.id,pipe:z,index:R,base:this._doc,moved:!1},!0}let M=(g=e.closest("[data-pipe-seg]"))==null?void 0:g.getAttribute("data-pipe-seg");if(M){let[z,R]=l(M),A=this.snap(n,void 0,t.altKey);return this.change((w,x)=>{var S,T,L,j;let E=(L=(T=(S=x.outdoor.find(D=>D.id===s.id))==null?void 0:S.pool)==null?void 0:T.pipes)==null?void 0:L.find(D=>D.id===z);E==null||E.points.splice(R,0,[I(A[0]),I(A[1])]),(j=E==null?void 0:E.heights)==null||j.splice(R,0,E.heights[R-1]??E.heights[R]??null)}),this._pipeId=z,this.drag={kind:"pipept",pool:s.id,pipe:z,index:R,base:this._doc,moved:!1},!0}}let c=(v=e.closest("[data-pipe]"))==null?void 0:v.getAttribute("data-pipe");if(c)return this._pipeId=c,!0;if(r&&s&&this.isAdmin)return r.startsWith("port:")?this.drag={kind:"poolport",pool:s.id,id:r.slice(5),base:this._doc,moved:!1}:r.startsWith("joint:")?this.drag={kind:"pooljoint",pool:s.id,id:ct(r).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:r.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let P=($=e.closest("[data-out-box]"))==null?void 0:$.getAttribute("data-out-box");if(P){let[z,R]=l(P);return this.drag={kind:"outbox",id:z,corner:R,base:this._doc,moved:!1},!0}let M=(k=e.closest("[data-out-vertex]"))==null?void 0:k.getAttribute("data-out-vertex");if(M){let[z,R]=l(M);return this.drag={kind:"outvertex",id:z,index:R,base:this._doc,moved:!1},!0}}let d=e.closest("[data-outdoor]")?this.outdoorAt(n)??e.closest("[data-outdoor]").getAttribute("data-outdoor"):null;return d&&o.outdoor.some(P=>P.id===d&&P.type==="pool")?(this.selectItem("outdoor",d),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:d,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(t,e){this.change((n,i)=>{let o=i.outdoor.find(s=>s.id===t);o&&(o.pool??={},e(o.pool,o))})}extendPipe(t,e,n,i){let o=this.floor;if(!o)return;let s=ht(this._doc,o,t);n=this.jointEnd(t,n,i[i.length-1]),this.changePool(t.id,r=>{var d,u;let l=(d=r.pipes)==null?void 0:d.find(p=>p.id===e.pipe);if(!l)return;Object.assign(l,Nt(l,s));let c=l.heights??[];if(e.end==="to"){let p=c[c.length-1]??l.height??null;l.points=[...l.points,...i],l.heights=[...c,...i.map(()=>p)],l.to=n}else{let p=$s(l,s),h=c[0]??l.height??null;l.points=[...[...i].reverse(),...l.points],l.heights=[...i.map(()=>h),...c],l.from=n;let f=$s(l,s)-p;l.fittings=(u=l.fittings)==null?void 0:u.map(m=>({...m,at:I(m.at+f)}))}}),this._pipeId=e.pipe}jointEnd(t,e,n,i=[]){var u,p,h;let{kind:o,id:s,port:r}=ct(e),l=o==="joint"&&!r?(p=(u=t.pool)==null?void 0:u.joints)==null?void 0:p.find(f=>f.id===s):void 0;if(!l)return e;if(l.kind==="wall"||l.kind==="floor"){let f=this._doc.floors.find(v=>v.outdoor.some($=>$.id===t.id)),m=f&&ht(this._doc,f,t),[_,g]=[m==null?void 0:m(`joint:${s}:inside`),m==null?void 0:m(`joint:${s}:outside`)];return!n||!_||!g?`joint:${s}:inside`:`joint:${s}:${Math.hypot(n[0]-_.x,n[1]-_.z)<=Math.hypot(n[0]-g.x,n[1]-g.z)?"inside":"outside"}`}let c=new Set([...(((h=t.pool)==null?void 0:h.pipes)??[]).flatMap(f=>[f.from,f.to]),...i]),d=pn(l.kind).find(f=>!c.has(`joint:${s}:${f}`));return d?`joint:${s}:${d}`:e}addPipe(t,e,n,i){let o=this.floor;if(!o)return;let s=o.outdoor.find(l=>l.id===t);s&&(e=this.jointEnd(s,e,i[0]),n=this.jointEnd(s,n,i[i.length-1],[e]));let r={id:J("pipe"),from:e,to:n,floor_id:o.id,points:i};this.changePool(t,l=>l.pipes=[...l.pipes??[],r]),this._pipeId=r.id}addPoolPort(t){var p;let e=this.poolArea;if(!e||!this.isAdmin)return;let n=((p=e.pool)==null?void 0:p.ports)??[],i=e.points.length,o=h=>{let f=e.points[h%i],m=e.points[(h+1)%i];return[(f[0]+m[0])/2,(f[1]+m[1])/2]},[s,r]=Qt(e.points),l=this._doc.floors.flatMap(h=>h.furniture).find(h=>h.type==="pool_filter"||h.type==="pool_pump"),c=n.filter(h=>h.kind==="inlet").length,d=t==="skimmer"?Pi(e.points,o(0)):t==="inlet"?Pi(e.points,o(Math.floor(i/2)+c*Math.max(1,Math.floor(i/8)))):t==="drain"?[s,r]:l?[l.x+.8,l.z]:[s,r+3],u={id:J("port"),kind:t,x:I(d[0]),z:I(d[1])};this.changePool(e.id,h=>h.ports=[...n,u])}addPoolDevice(t){let e=this.poolArea;this.addEnergyDevice(t),e&&this.selectItem("outdoor",e.id),this._tool="pool"}deletePoolDevice(t){this.change(e=>{var n;for(let i of e.floors){i.furniture=i.furniture.filter(o=>o.id!==t);for(let o of i.outdoor)(n=o.pool)!=null&&n.pipes&&(o.pool.pipes=o.pool.pipes.filter(s=>s.from!==`dev:${t}`&&s.to!==`dev:${t}`))}})}deletePoolPort(t,e){this.changePool(t,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==e),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${e}`&&i.to!==`port:${e}`)})}togglePoolValve(t){let e=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===t);!e||e.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===t);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(t,e){this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===t);i&&Object.assign(i,e)})}portText(t){let{kind:e,port:n}=ct(t),i={in:"A",out1:"B",out2:"C"};return e==="joint"&&n&&i[n]?`${this.t("card_port")} ${i[n]}`:n?this.t(`port_${n}`):""}openCard(t,e){this._card={pool:t,part:e},this._cardJoin=null}partPorts(t,e){var o,s;let{kind:n,id:i}=ct(e);if(n==="joint"){let r=(s=(o=t.pool)==null?void 0:o.joints)==null?void 0:s.find(l=>l.id===i);return r?pn(r.kind).map(l=>`${e}:${l}`):[]}if(n==="dev"){let r=this._doc.floors.flatMap(c=>c.furniture).find(c=>c.id===i),l=r?Se(r.type):[];return l.length?l.map(c=>`${e}:${c}`):[e]}return[e]}partStatus(t,e){var o;let n=((o=t.pool)==null?void 0:o.pipes)??[],i=this.partPorts(t,e);return[i.filter(s=>n.some(r=>r.from===s||r.to===s)).length,i.length]}cardConnect(t,e,n,i){var u,p;let o=this._doc.floors.find(h=>h.outdoor.some(f=>f.id===t.id));if(!o||!n)return;let s=ht(this._doc,o,t),r=((u=t.pool)==null?void 0:u.ports)??[],l=h=>{var g;let{kind:f,id:m,port:_}=ct(h);return f==="port"?qo(((g=r.find(v=>v.id===m))==null?void 0:g.kind)??"inlet"):f==="dev"?Ha(_):null},c=this.jointEnd(t,n,void 0,[e]),d=hn({from:e,vias:i,to:[c],floorId:o.id},s,((p=t.pool)==null?void 0:p.joints)??[],l,h=>J(h));this.changePool(t.id,h=>{h.joints=[...h.joints??[],...d.joints],h.pipes=[...h.pipes??[],...d.pipes]}),this._cardJoin=null}cardDisconnect(t,e){this.changePool(t.id,n=>n.pipes=(n.pipes??[]).filter(i=>!e.pipes.includes(i.id)))}cardReroute(t,e){var f,m;let n=((f=t.pool)==null?void 0:f.pipes)??[],i=n.find(_=>_.id===e.pipes[0]);if(!i||!e.other)return;let o=i.from===e.start,s=[...e.holes.map(_=>({kind:"hole",joint:_.joint,dir:_.dir})),...e.fittings.map(_=>({kind:_}))],r=this._doc.floors.find(_=>_.outdoor.some(g=>g.id===t.id));if(!r)return;let l={...t,pool:{...t.pool,pipes:n.filter(_=>!e.pipes.includes(_.id))}},c=ht(this._doc,r,l),d=o?e.start:e.other,u=o?e.other:e.start,p=o?s:[...e.holes].reverse().map(_=>({kind:"hole",joint:_.joint,dir:_.dir==="in"?"out":"in"})).concat(e.fittings.map(_=>({kind:_}))),h=hn({from:d,vias:p,to:[u],floorId:r.id},c,((m=t.pool)==null?void 0:m.joints)??[],()=>null,_=>J(_));this.changePool(t.id,_=>{_.pipes=[...(_.pipes??[]).filter(g=>!e.pipes.includes(g.id)),...h.pipes]})}renderPartCard(){var z,R,A,w,x,E;let t=this._card,e=t?this._doc.floors.flatMap(S=>S.outdoor).find(S=>S.id===t.pool):void 0;if(!t||!e)return y;let n=this.isAdmin,{kind:i,id:o}=ct(t.part),s=i==="joint"?(R=(z=e.pool)==null?void 0:z.joints)==null?void 0:R.find(S=>S.id===o):void 0,r=i==="dev"?this._doc.floors.flatMap(S=>S.furniture).find(S=>S.id===o):void 0,l=i==="port"?(w=(A=e.pool)==null?void 0:A.ports)==null?void 0:w.find(S=>S.id===o):void 0;if(!s&&!r&&!l)return y;let c=((x=e.pool)==null?void 0:x.pipes)??[],d=((E=e.pool)==null?void 0:E.joints)??[],u=this.partPorts(e,t.part),p=this.poolEnds(e).filter(S=>te(S.node)!==t.part&&!S.used),h=d.filter(S=>S.kind==="wall"||S.kind==="floor"),f=S=>this.poolNodeLabel(e,S),m=S=>ct(S).port?this.portText(S):this.t("card_port"),_=S=>S.kind==="hole"?this.t(S.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(e,S.joint)}):this.t(S.kind==="valve"?"wall_run_valve":"wall_run_sight"),g=()=>{this._card=null,this._cardJoin=null},v=()=>s?[s.x,s.z]:r?[r.x,r.z]:l?[l.x,l.z]:null,$=u.map(S=>{var j;let T=Na(c,d,S),L=((j=this._cardJoin)==null?void 0:j.port)===S?this._cardJoin:null;return b`<div class="fp3d-pc-row ${T.length?"fp3d-on":""}">
        <b>${m(S)}</b>
        <div class="fp3d-pc-conns">
          ${T.map(D=>b`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...D.holes.map(W=>_({kind:"hole",joint:W.joint,dir:W.dir})),...D.fittings.map(W=>_({kind:W}))].map(W=>b`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${W}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${D.other?b`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(e.id,te(D.other))}>${f(D.other)}</button>`:b`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?b`<span class="fp3d-pc-tools">
                    ${D.other?b`<button class="fp3d-btn" @click=${()=>this.cardReroute(e,D)}>${this.t("card_reroute")}</button>`:y}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(e,D)}>${this.t("card_disconnect")}</button>
                  </span>`:y}
            </div>`)}
          ${n&&(!T.length||u.length===1)?L?this.renderJoinPicker(e,S,L,p,h,_):b`<button class="fp3d-btn ${T.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:S,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:y}
        </div>
      </div>`}),[k,P]=this.partStatus(e,t.part),M=v();return b`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${S=>S.target===S.currentTarget&&g()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${S=>S.key==="Escape"&&g()}>
        <div class="fp3d-wv-head">
          ${s&&n?b`<input
                class="fp3d-pc-name"
                .value=${s.name??""}
                placeholder=${this.jointLabel(e,s.id)}
                title=${this.t("joint_name")}
                @change=${S=>{let T=S.target.value.trim().slice(0,60);this.changePool(e.id,L=>{var D;let j=(D=L.joints)==null?void 0:D.find(W=>W.id===s.id);j&&(j.name=T||null)})}}
              />`:b`<b class="fp3d-pc-title">${f(t.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:k,b:P})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${g}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(e,t.part,u)}
          <div class="fp3d-pc-rows">${$}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${M?b`<button class="fp3d-btn" @click=${()=>{g(),this._wallView=null,this._tool="pool",this.showPoint(M[0],M[1])}}>${this.t("card_show_plan")}</button>`:y}
          ${M&&!l?b`<button class="fp3d-btn" @click=${()=>{g(),this.pickWall(M)}}>▦ ${this.t("card_show_wall")}</button>`:y}
          <span class="fp3d-wv-grow"></span>
          ${n?b`<button class="fp3d-btn fp3d-danger" @click=${()=>{g(),r?this.deletePoolDevice(r.id):l?this.deletePoolPort(e.id,l.id):s&&this.changePool(e.id,S=>{S.joints=(S.joints??[]).filter(T=>T.id!==s.id),S.pipes=(S.pipes??[]).filter(T=>te(T.from)!==t.part&&te(T.to)!==t.part)})}}>${this.t("delete")}</button>`:y}
        </div>
      </div>
    </div>`}renderJoinPicker(t,e,n,i,o,s){let r=p=>{var _,g;let{kind:h,id:f}=ct(p);if(h==="port")return"pool";if(h==="dev")return"tech";let m=(g=(_=t.pool)==null?void 0:_.joints)==null?void 0:g.find(v=>v.id===f);return(m==null?void 0:m.kind)==="wall"||(m==null?void 0:m.kind)==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(p=>({g:p,items:i.filter(h=>r(h.node)===p)})).filter(p=>p.items.length),c=p=>this._cardJoin={...n,...p},d=p=>c({vias:[...n.vias,p]}),u=new Set(n.vias.flatMap(p=>p.kind==="hole"?[p.joint]:[]));return b`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(t,e)}</span>
        ${n.vias.map((p,h)=>b`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>c({vias:n.vias.filter((f,m)=>m!==h)})}>${s(p)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?b`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>c({to:""})}>${this.poolNodeLabel(t,n.to)} <i>✕</i></button>`:b`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?y:b`<div class="fp3d-pc-steps">
            ${o.some(p=>!u.has(p.id))?b`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${o.filter(p=>!u.has(p.id)).map(p=>b`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(t,p.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:p.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>d({kind:"hole",joint:p.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:y}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>d({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${l.map(({g:p,items:h})=>b`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${p}`)}</span>
                <div class="fp3d-pc-picks">${h.map(f=>b`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>c({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(t,e,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(t,e,n){var f,m,_;let i=((f=t.pool)==null?void 0:f.pipes)??[],o=g=>i.some(v=>v.from===g||v.to===g),{kind:s,id:r}=ct(e),l=s==="joint"?(_=(m=t.pool)==null?void 0:m.joints)==null?void 0:_.find(g=>g.id===r):void 0,c=s==="dev"?this._doc.floors.flatMap(g=>g.furniture).find(g=>g.id===r):void 0,d={},u=y,p=(l==null?void 0:l.kind)??(c?c.type:"port");p==="tee"?(Object.assign(d,{in:[20,60],out1:[180,60],out2:[100,130]}),u=C`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):p==="y"?(Object.assign(d,{in:[20,70],out1:[180,25],out2:[180,115]}),u=C`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):p==="wall"||p==="floor"?(Object.assign(d,{outside:[20,70],inside:[180,70]}),u=C`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):p==="pool_pump"?(Object.assign(d,{suction:[20,95],pressure:[110,10]}),u=C`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):p==="pool_filter"?(Object.assign(d,{pump:[20,40],return:[180,40],waste:[100,4]}),u=C`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):p==="pool_heat_pump"?(Object.assign(d,{in:[180,95],out:[180,45]}),u=C`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(d[""]=[180,70],u=C`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let h=p==="pool_filter"?[100,41]:p==="pool_pump"?[100,85]:[100,70];return b`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(g=>{let v=ct(g).port??"",$=d[v]??d[""]??[180,70],k=o(g);return C`<g class="fp3d-pc-stub ${k?"fp3d-on":""}" @click=${()=>this.isAdmin&&!k&&(this._cardJoin={port:g,to:"",vias:[]})}>
          <line x1=${h[0]} y1=${h[1]} x2=${$[0]} y2=${$[1]} />
          <circle cx=${$[0]} cy=${$[1]} r="7" />
          <title>${v?this.portText(g):""}</title>
        </g>`})}
      ${u}
      ${n.map(g=>{let v=ct(g).port,$=d[v??""]??[180,70];return v?C`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,$[0]))} y=${$[1]<70?$[1]+20:$[1]-12}>${this.portText(g)}</text>`:y})}
    </svg>`}jointLabel(t,e){var r,l;let n=((r=t.pool)==null?void 0:r.joints)??[],i=n.find(c=>c.id===e);if(!i)return this.t("pool_loose_end");let o=c=>c==="wall"||c==="floor"?"hole":c??"tee";if((l=i.name)!=null&&l.trim())return i.name.trim();let s=n.filter(c=>o(c.kind)===o(i.kind));return`${this.t(`joint_${i.kind??"tee"}`,{n:s.indexOf(i)+1})}`}poolEnds(t){var o,s,r;let e=((o=t.pool)==null?void 0:o.pipes)??[],n=l=>e.some(c=>c.from===l||c.to===l),i=[];for(let l of((s=t.pool)==null?void 0:s.ports)??[])i.push({node:`port:${l.id}`,label:this.poolNodeLabel(t,`port:${l.id}`),used:!1});for(let l of this._doc.floors.flatMap(c=>c.furniture).filter(c=>St.includes(c.type)&&c.type!=="pool_valve")){let c=Se(l.type);for(let d of c.length?c.map(u=>`dev:${l.id}:${u}`):[`dev:${l.id}`])i.push({node:d,label:this.poolNodeLabel(t,d),used:c.length>0&&n(d)})}for(let l of((r=t.pool)==null?void 0:r.joints)??[])for(let c of pn(l.kind)){let d=`joint:${l.id}:${c}`;i.push({node:d,label:this.poolNodeLabel(t,d),used:n(d)})}return i}placeJointPlan(t,e,n,i){var d,u;let o=this.floor;if(!o)return;let s=ht(this._doc,o,t),r=i?(u=(d=t.pool)==null?void 0:d.pipes)==null?void 0:u.find(p=>p.id===i):void 0;if(r){let p=Kt(r,s),h=null;for(let m=1;m<p.length;m++){let[_,g]=[p[m-1],p[m]],[v,$]=[g[0]-_[0],g[2]-_[2]],k=v*v+$*$,P=k>0?Math.max(0,Math.min(1,((n[0]-_[0])*v+(n[1]-_[2])*$)/k)):0,M=[_[0]+v*P,_[1]+(g[1]-_[1])*P,_[2]+$*P],z=Math.hypot(M[0]-n[0],M[2]-n[1]);(!h||z<h.d)&&(h={p:M,d:z})}let f=h&&Ei(r,s,h.p,J("joint"),J("pipe"));if(f){this.changePool(t.id,m=>{m.joints=[...m.joints??[],{...f.joint,kind:e}],m.pipes=(m.pipes??[]).flatMap(_=>_.id===r.id?[{...f.first,to:`joint:${f.joint.id}:in`},{...f.second,from:`joint:${f.joint.id}:out1`}]:[_])});return}}let l=o.rooms.some(p=>p.points.length>=3&&Q(n,p.points)),c=this.snap(n);this.changePool(t.id,p=>p.joints=[...p.joints??[],{id:J("joint"),kind:e,x:I(c[0]),z:I(c[1]),y:l?.5:-.3}])}poolNodePos(t,e){var o,s;if(!e)return null;let n=this._doc.floors.find(r=>r.outdoor.some(l=>l.id===t.id));if(e.startsWith("joint:")||e.split(":").length>2){let r=n&&ht(this._doc,n,t)(e);return r?[r.x,r.z]:null}if(e.startsWith("port:")){let r=(s=(o=t.pool)==null?void 0:o.ports)==null?void 0:s.find(l=>l.id===e.slice(5));return r?[r.x,r.z]:null}let i=this._doc.floors.flatMap(r=>r.furniture).find(r=>r.id===e.slice(4));return i?[i.x,i.z]:null}poolNodeLabel(t,e){var c;let{kind:n,id:i,port:o}=ct(e);if(!e)return this.t("pool_loose_end");if(o||n==="joint"){let d=n==="joint"?this.jointLabel(t,i):this.poolNodeLabel(t,`${n}:${i}`);return o?`${d} \xB7 ${this.portText(e)}`:d}if(e.startsWith("port:")){let d=((c=t.pool)==null?void 0:c.ports)??[],u=d.find(h=>h.id===e.slice(5));if(!u)return"?";let p=d.filter(h=>h.kind===u.kind);return`${this.t(`pool_port_${u.kind}`)}${p.length>1?` ${p.indexOf(u)+1}`:""}`}let s=this._doc.floors.flatMap(d=>d.furniture).filter(d=>St.includes(d.type)),r=s.find(d=>d.id===e.slice(4));if(!r)return"?";let l=s.filter(d=>d.type===r.type);return`${r.name||this.t(`furn_${r.type}`)}${l.length>1&&!r.name?` ${l.indexOf(r)+1}`:""}`}renderPoolPlan(t){var h,f,m,_;let e=this.poolArea,n=t.furniture.filter(g=>St.includes(g.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},o=e?(((h=e.pool)==null?void 0:h.pipes)??[]).filter(g=>g.floor_id===t.id):[],s=o.map(g=>{let v=this.poolNodePos(e,g.from),$=this.poolNodePos(e,g.to);if((!v||!$)&&!g.heights)return y;let k=v?1:0,P=[...v?[v]:[],...g.points,...$?[$]:[]].map(T=>this.toScreen(T));if(P.length<2)return y;let M=g.id===this._pipeId,z=0;for(let T=1;T<P.length-1;T++)Math.hypot(P[T+1][0]-P[T][0],P[T+1][1]-P[T][1])>Math.hypot(P[z+1][0]-P[z][0],P[z+1][1]-P[z][1])&&(z=T);let[R,A]=P[z],[w,x]=P[z+1],E=Math.atan2(x-A,w-R)*180/Math.PI,S=P.map(T=>T.join(",")).join(" ");return C`<g data-pipe=${g.id}>
        <polyline class="fp3d-pipe-hit" points=${S} />
        <polyline class="fp3d-pipe ${M?"fp3d-pipe-sel":""}" points=${S} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(R+w)/2} ${(A+x)/2}) rotate(${E})`} />
        ${M&&this.isAdmin?C`${P.slice(0,-1).map((T,L)=>C`<line class="fp3d-pipe-seg" data-pipe-seg=${`${g.id}:${L+1-k}`} x1=${T[0]} y1=${T[1]} x2=${P[L+1][0]} y2=${P[L+1][1]} />`)}
              ${g.points.map((T,L)=>{let[j,D]=this.toScreen(T);return C`<g class="fp3d-vertex" data-pipe-pt=${`${g.id}:${L}`}><circle cx=${j} cy=${D} r="14" class="fp3d-hit" /><circle cx=${j} cy=${D} r="5" /></g>`})}`:y}
      </g>`}),r=(g,v,$,k,P)=>{let[M,z]=this.toScreen(v);return C`<g class="fp3d-pool-node ${k}" data-pool-node=${g}><title>${P}</title><circle cx=${M} cy=${z} r="16" class="fp3d-hit" /><circle cx=${M} cy=${z} r="10" /><text x=${M} y=${z}>${$}</text></g>`},l=e?(((f=e.pool)==null?void 0:f.ports)??[]).map(g=>r(`port:${g.id}`,[g.x,g.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[g.kind],`fp3d-pool-port-${g.kind}`,this.poolNodeLabel(e,`port:${g.id}`))):[],c=n.map(g=>r(`dev:${g.id}`,[g.x,g.z],g.type==="pool_valve"?g.valve_open===!1?"\u2715":"":i[g.type],`fp3d-pool-dev ${g.type==="pool_valve"&&g.valve_open===!1?"fp3d-pool-closed":""}`,e?this.poolNodeLabel(e,`dev:${g.id}`):g.type)),d=y;if(e&&this._pipeDraft){let g=((m=this._pipeDraft.extend)==null?void 0:m.at)??this.poolNodePos(e,this._pipeDraft.from);if(g){let v=[g,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map($=>this.toScreen($).join(",")).join(" ");d=C`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${v} />`}}let u=e?(((_=e.pool)==null?void 0:_.joints)??[]).map(g=>r(`joint:${g.id}`,[g.x,g.z],g.kind==="wall"||g.kind==="floor"?"\u25CE":g.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(e,g.id))):[],p=o.flatMap(g=>g.heights&&g.points.length?["from","to"].filter(v=>!g[v]).map(v=>{let[$,k]=this.toScreen(v==="to"?g.points[g.points.length-1]:g.points[0]);return C`<g class="fp3d-pipe-end" data-pipe-end=${`${g.id}|${v}`}><circle cx=${$} cy=${k} r="14" class="fp3d-hit" /><circle cx=${$} cy=${k} r="6" /></g>`}):[]);return C`<g class="fp3d-pool-plan">${s}${d}${u}${p}${l}${c}</g>`}renderPoolPanel(t){let e=(t==null?void 0:t.outdoor.filter(i=>i.type==="pool"))??[],n=this.poolArea;return n?b`${e.length>1?b`<section>
            <div class="fp3d-seg">${e.map((i,o)=>b`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${o+1}</button>`)}</div>
          </section>`:y}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:b`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(e.length?"pool_choose":"pool_tool_empty")}</p>
        ${e.length?b`<div class="fp3d-actions">${e.map((i,o)=>b`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${e.length>1?o+1:""}</button>`)}</div>`:y}
      </section>`}renderPoolTech(t){var r,l,c;if(!this.pipeRules)return y;let e=this.isAdmin,n=((r=t.pool)==null?void 0:r.ports)??[],i=((l=t.pool)==null?void 0:l.pipes)??[],o=this._doc.floors.flatMap(d=>d.furniture).filter(d=>St.includes(d.type)),s=i.find(d=>d.id===this._pipeId);return b`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!e} title=${this.t("tech_open_hint")} @click=${()=>{this.techPick=!0,this._wallPick=!0}}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(d=>b`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolPort(d)}>+ ${this.t(`pool_port_${d}`)}</button>`)}
        </div>
        ${n.map(d=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`port:${d.id}`)}>${this.poolNodeLabel(t,`port:${d.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(t,`port:${d.id}`)[0]?"\u2713":"\u25CB"}</span>
            ${d.kind==="inlet"||d.kind==="skimmer"?b`<label class="fp3d-pool-depth" title=${this.t("pool_port_depth_hint")}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(d.depth??(d.kind==="inlet"?.3:0))} ?disabled=${!e} @change=${u=>{let p=Number(u.target.value.replace(",","."));Number.isFinite(p)&&this.change((h,f)=>{var _,g,v;let m=(v=(g=(_=f.outdoor.find($=>$.id===t.id))==null?void 0:_.pool)==null?void 0:g.ports)==null?void 0:v.find($=>$.id===d.id);m&&(m.depth=Math.min(3,Math.max(0,I(p))))})}} />m</label
                >`:y}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolPort(t.id,d.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${St.filter(d=>d!=="pool_valve").map(d=>b`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolDevice(d)}>+ ${this.t(`furn_${d}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${o.map(d=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`dev:${d.id}`)}>${this.poolNodeLabel(t,`dev:${d.id}`)}</button>
            <span class="fp3d-ports">${Se(d.type).map(u=>b`<i class=${i.some(p=>p.from===`dev:${d.id}:${u}`||p.to===`dev:${d.id}:${u}`)?"fp3d-on":""}>${this.t(`port_${u}`)}</i>`)}</span>
            ${d.type==="pool_filter"?b`<select ?disabled=${!e} title=${this.t("pool_valve_type")} @change=${u=>this.setPoolDevice(d.id,{variant:u.target.value==="top6"?null:u.target.value})}>
                    ${La.map(u=>b`<option value=${u} ?selected=${(d.variant??"top6")===u}>${this.t(`valve_${u}`)}</option>`)}
                  </select>
                  <select ?disabled=${!e} title=${this.t("pool_valve_position")} @change=${u=>this.setPoolDevice(d.id,{valve_position:u.target.value})}>
                  ${jr.map(u=>b`<option value=${u} ?selected=${(d.valve_position??"filter")===u}>${this.t(`valve_${u}`)}</option>`)}
                </select>`:d.type==="pool_heat_pump"?b`<select ?disabled=${!e} title=${this.t("hp_ports")} @change=${u=>this.setPoolDevice(d.id,{variant:u.target.value==="right"?null:u.target.value})}>
                    ${["right","left","back"].map(u=>b`<option value=${u} ?selected=${(d.variant??"right")===u}>${this.t("hp_ports")}: ${this.t(`hp_side_${u}`)}</option>`)}
                  </select>`:d.type==="pool_valve"?b`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${d.valve_open!==!1} ?disabled=${!e} @change=${u=>this.setPoolDevice(d.id,{valve_open:u.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:y}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(d.id)}>✕</button>
          </div>`)}
        ${(((c=t.pool)==null?void 0:c.joints)??[]).map(d=>b`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`joint:${d.id}`)}>${this.jointLabel(t,d.id)}</button>
            <span class="fp3d-ports">${pn(d.kind).map(u=>{let p=`joint:${d.id}:${u}`,h=i.some(f=>f.from===p||f.to===p||(d.kind??"tee")!=="wall"&&(d.kind??"tee")!=="floor"&&te(f.from)===`joint:${d.id}`&&!ct(f.from).port&&u==="in");return b`<i class=${h?"fp3d-on":""} title=${this.portText(p)}>${this.portText(p)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,u=>{u.joints=(u.joints??[]).filter(p=>p.id!==d.id),u.pipes=(u.pipes??[]).filter(p=>te(p.from)!==`joint:${d.id}`&&te(p.to)!==`joint:${d.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!e} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(d=>b`<div class="fp3d-pool-row ${d.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=d.id}>${this.poolNodeLabel(t,d.from)} → ${this.poolNodeLabel(t,d.to)}</button>
            <button class="fp3d-btn" ?disabled=${!e} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===d.id);p&&([p.from,p.to,p.points]=[p.to,p.from,[...p.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,u=>u.pipes=(u.pipes??[]).filter(p=>p.id!==d.id))}>✕</button>
          </div>`)}
        ${s?b`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),s.height??.3,d=>this.changePool(t.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===s.id);p&&(p.height=Math.min(10,Math.max(-5,I(d))))}),.05)}
            </div>`:y}
      </section>`}renderPoolShape(t){let e=this.isAdmin,n=At(t.points),i=t.pool_shape,o=(l,c,d,u)=>i&&this.updateOutdoor({points:di(i,l,c,d,u)}),s=(n.x0+n.x1)/2,r=(n.z0+n.z1)/2;return b`${i==="round"?b`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let c=Math.max(.5,l)/2;o(s-c,r-c,s+c,r+c)},.01,1)}`:i==="oval"?b`${this.len(this.t("width"),n.x1-n.x0,l=>o(s-Math.max(1,l)/2,n.z0,s+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>o(n.x0,r-Math.max(1,l)/2,n.x1,r+Math.max(1,l)/2),.01,1)}`:y}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!t.above} ?disabled=${!e} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${t.above?this.len(this.t("pool_height"),li(t),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,I(l)))}),.05,.4):y}
      ${this.len(this.t("pool_depth"),mo(t),l=>this.updateOutdoor({depth:Math.min(5,Math.max(.3,I(l)))}),.05,.3)}
      ${t.above?y:this.len(this.t("pool_rim"),t.rim??.06,l=>this.updateOutdoor({rim:Math.min(2,Math.max(-.3,I(l)))}),.01,-.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!t.above&&this.floor&&!go(this.floor,t)?b`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>`:y}`}get pipeRules(){return cd()}editorHost(){let t=this.hass;return{api:1,hass:()=>t,building:()=>this._doc,language:()=>t.language||"en",devices:()=>[],findDevice:()=>null,openings:()=>[],energy:()=>null,consumers:()=>[],canEdit:()=>this.isAdmin,updateBuilding:e=>this.change(n=>e(n)),callService:(e,n,i)=>t.callService(e,n,i),newId:e=>J(e),refresh:()=>this.requestUpdate(),plan:gs}}renderModuleFields(t){if(!this.hass)return y;let e=dd(this.editorHost(),t);if(!e.length)return y;let n=this.isAdmin,i=o=>{switch(o.kind){case"heading":return b`<h3>${o.text}</h3>`;case"text":return b`<p class="fp3d-sub fp3d-wide">${o.text}</p>`;case"entity":return this.entitySelect(o.label,o.value,o.auto,this.entityOptions(o.filter),s=>o.set(s));case"select":return b`<label class="fp3d-field fp3d-wide"
            >${o.label}
            <select ?disabled=${!n} @change=${s=>o.set(s.target.value)}>
              ${o.options.map(s=>b`<option value=${s.id} ?selected=${s.id===o.value}>${s.label}</option>`)}
            </select></label
          >`;case"check":return b`<label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${o.value} ?disabled=${!n} @change=${s=>o.set(s.target.checked)} /> ${o.label}</label>`;case"button":return b`<button class="fp3d-btn ${o.primary?"fp3d-primary":""} fp3d-wide" ?disabled=${!n} title=${o.title??""} @click=${()=>o.onTap()}>${o.label}</button>`}};return b`<section>
      <div class="fp3d-form fp3d-links">${e.map(i)}</div>
    </section>`}renderRooms(t){return C`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return C`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(Qt(e.points));return C`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(Ft(e.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return y;let[n,i]=this.toScreen(t.points[e]),[o,s]=this.toScreen(t.points[(e+1)%t.points.length]);return C`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${s} />`}renderMeter(t){var o;let e=(o=this._doc.energy)==null?void 0:o.meter;if(!e||e.floor_id!==t.id)return y;let[n,i]=this.toScreen([e.x,e.z]);return C`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale,n=this._furnitureId?this.selection():[],i=n.length>1;return C`<g>${this.renderSelectionFrame(t,n)}${t.furniture.map(o=>{var v,$;let s=n.includes(o.id),r=o.id===this._furnitureId&&!i,[l,c]=this.toScreen([o.x,o.z]),d=Math.min(o.w,o.d)*e>44,u=o.rotation*Math.PI/180,p=o.d/2+Math.max(.3,26/e),[h,f]=this.toScreen([o.x-Math.sin(u)*p,o.z+Math.cos(u)*p]),[m,_]=this.toScreen([o.x-Math.sin(u)*(o.d/2),o.z+Math.cos(u)*(o.d/2)]),g=Vt(o.type)&&!!o.entity&&o.entity!=="none"&&(($=(v=this.hass)==null?void 0:v.states[o.entity])==null?void 0:$.state)==="on";return C`<g data-furniture=${o.id} class=${`fp3d-furn${r||s?" fp3d-furn-sel":""}${g?" fp3d-furn-lit":""}${me.includes(o.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${l} ${c}) rotate(${o.rotation}) scale(${o.mirror?-e:e} ${e})">
          <rect class="fp3d-furn-body" x=${-o.w/2} y=${-o.d/2} width=${o.w} height=${o.d} />
          <g class="fp3d-furn-sym">${xa(o.type,o.w,o.d)}</g>
          <line class="fp3d-furn-front" x1=${-o.w/2} y1=${o.d/2} x2=${o.w/2} y2=${o.d/2} />
        </g>
        ${d?C`<text x=${l} y=${c+4}>${Re(this.hass,o.type)}</text>`:y}
      </g>
      ${r&&this.isAdmin&&!o.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([k,P])=>{let[M,z]=this.toScreen([o.x+k*o.w*Math.cos(u)/2-P*o.d*Math.sin(u)/2,o.z+k*o.w*Math.sin(u)/2+P*o.d*Math.cos(u)/2]);return C`<g class="fp3d-resize" data-resize=${`${o.id}:${k}:${P}`}>
              <circle cx=${M} cy=${z} r="14" class="fp3d-hit" />
              <rect x=${M-5} y=${z-5} width="10" height="10" rx="2" />
            </g>`}):y}
      ${r?(()=>{let[k,P]=this.toScreen([o.x+Math.sin(u)*(o.d/2+18/e),o.z-Math.cos(u)*(o.d/2+18/e)]);return C`<text class="fp3d-dim" x=${k} y=${P+4}>${this.m(o.w,2)} × ${this.m(o.d,2)}</text>`})():y}
      ${r&&o.locked?C`<text class="fp3d-lock" x=${h} y=${f+5}>🔒</text>`:y}
      ${r&&this.isAdmin&&!o.locked?C`<g class="fp3d-rotate" data-rotate=${o.id}>
            <line x1=${m} y1=${_} x2=${h} y2=${f} />
            <circle cx=${h} cy=${f} r="16" class="fp3d-hit" />
            <circle cx=${h} cy=${f} r="8" />
            <path d="M${h-4} ${f-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}`})}</g>`}renderSelectionFrame(t,e){let n=this.drag,i=(n==null?void 0:n.kind)==="marquee"?C`<rect class="fp3d-marquee" x=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[0]))} y=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[1]))} width=${Math.abs(this.toScreen(n.end)[0]-this.toScreen(n.start)[0])} height=${Math.abs(this.toScreen(n.end)[1]-this.toScreen(n.start)[1])} />`:y;if(e.length<2)return i;let o=t.furniture.filter(u=>e.includes(u.id)).flatMap(u=>Wt(u));if(!o.length)return i;let[s,r]=this.toScreen([Math.min(...o.map(u=>u[0])),Math.min(...o.map(u=>u[1]))]),[l,c]=this.toScreen([Math.max(...o.map(u=>u[0])),Math.max(...o.map(u=>u[1]))]),d=!this._multi.length;return C`${i}<g class=${`fp3d-selframe${d?" fp3d-selframe-block":""}`}>
      <rect x=${s-6} y=${r-6} width=${l-s+12} height=${c-r+12} rx="6" />
      <text x=${s-4} y=${r-12}>${d?`\u25A3 ${this.t("block_title")} \xB7 ${e.length}`:this.t("multi_title",{n:e.length})}</text>
    </g>`}renderBlockForm(){var s,r;let t=this.selection(),e=(((s=this.floor)==null?void 0:s.furniture)??[]).filter(l=>t.includes(l.id)),n=!this._multi.length&&!!((r=e[0])!=null&&r.group),i=e.every(l=>this.isFixedItem("furniture",l.id)),o=!i&&e.some(l=>this.isFixedItem("furniture",l.id));return b`<section>
      <div class="fp3d-h3row"><h3>${n?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</h3></div>
      <p class="fp3d-sub">${this.t(n?"block_hint":"multi_hint")}</p>
      ${o?b`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>`:y}
      <div class="fp3d-block-parts">
        ${e.map(l=>b`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${()=>{this.selectItem("furniture",l.id),this._single=!!l.group}}>${l.name||Re(this.hass,l.type)}</button>`)}
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
    </section>`}renderMultiToggle(){return b`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${t=>this._multiMode=t.target.checked} /> ${this.t("multi_mode")}</label>`}renderOpenings(t,e){return C`<g>${t.openings.map(n=>{let i=dn(n,t.rooms,t.walls??[]);if(!i)return y;let{room:o,edge:s}=i,r=Lo(e,n,i),l=xe(o,s,n.offset-n.width/2),c=xe(o,s,n.offset+n.width/2),d=(c[0]-l[0])/(n.width||1),u=(c[1]-l[1])/(n.width||1),p=Pt(o.points)>=0?1:-1,h=[-u*p,d*p],f=[.06,.06];r&&(f=r.wall.free||r.wall.roomLeft===o.id?[r.wall.left,r.wall.right]:[r.wall.right,r.wall.left]);let m=(R,A)=>this.toScreen([R[0]+h[0]*A,R[1]+h[1]*A]),_=[m(l,f[0]+.01),m(c,f[0]+.01),m(c,-f[1]-.01),m(l,-f[1]-.01)],g=n.id===this._openingId,v=hi(n,(r==null?void 0:r.wall.exterior)??!1),$=n.type==="door"&&wo(v),k=`fp3d-open fp3d-open-${n.type}${$?" fp3d-open-front":""}${g?" fp3d-open-sel":""}`,P;if(n.type==="garage"){let R=m(l,f[0]-.04),A=m(c,f[0]-.04),w=m(l,f[0]+Math.min(2,n.height)),x=m(c,f[0]+Math.min(2,n.height));P=C`<line x1=${R[0]} y1=${R[1]} x2=${A[0]} y2=${A[1]} />
          <path class="fp3d-open-track" d="M${R[0]} ${R[1]}L${w[0]} ${w[1]}M${A[0]} ${A[1]}L${x[0]} ${x[1]}" />`}else if(n.type==="door"){let R=n.swing==="out",A=R?-f[1]:f[0],w=n.hinge==="left"==p>0,x=n.leaves===2,E=l,S=c,T=[],L=Gr(n.width,v,w,n);if(L){let tt=X=>X<=.02?l:X>=n.width-.02?c:xe(o,s,n.offset-n.width/2+X);E=tt(L.x0),S=tt(L.x1),T=L.panels.map(([X,it])=>[tt(X),tt(it)])}let j=[(E[0]+S[0])/2,(E[1]+S[1])/2],D=(x?.5:1)*Math.hypot(S[0]-E[0],S[1]-E[1]),W=(f[0]-f[1])/2,Z=T.map(([tt,X])=>{let it=m(tt,W+.035),q=m(X,W+.035),ft=m(tt,W-.035),It=m(X,W-.035);return C`<line class="fp3d-open-pane" x1=${it[0]} y1=${it[1]} x2=${q[0]} y2=${q[1]} /><line class="fp3d-open-pane" x1=${ft[0]} y1=${ft[1]} x2=${It[0]} y2=${It[1]} />`}),Y=(tt,X)=>{let[it,q]=m(tt,A),[ft,It]=m(X,A),Jt=m(tt,A+(R?-D:D)),B=D*this._view.scale,ut=(Jt[0]-it)*(It-q)-(Jt[1]-q)*(ft-it);return C`<path d="M${it} ${q}L${Jt[0]} ${Jt[1]}A${B} ${B} 0 0 ${ut>0?1:0} ${ft} ${It}" />`};P=C`${Z}${v==="passage"?C`<line class="fp3d-open-passage" x1=${m(l,W)[0]} y1=${m(l,W)[1]} x2=${m(c,W)[0]} y2=${m(c,W)[1]} />`:v==="sliding"?C`<line x1=${m(E,A)[0]} y1=${m(E,A)[1]} x2=${m(S,A)[0]} y2=${m(S,A)[1]} />`:x?C`${Y(E,j)}${Y(S,j)}`:Y(w?E:S,w?S:E)}`}else{let R=(f[0]-f[1])/2,A=m(l,R+.035),w=m(c,R+.035),x=m(l,R-.035),E=m(c,R-.035),S=[(l[0]+c[0])/2,(l[1]+c[1])/2],T=m(S,f[0]),L=m(S,-f[1]);P=C`<line x1=${A[0]} y1=${A[1]} x2=${w[0]} y2=${w[1]} /><line x1=${x[0]} y1=${x[1]} x2=${E[0]} y2=${E[1]} />${n.leaves===2?C`<line x1=${T[0]} y1=${T[1]} x2=${L[0]} y2=${L[1]} />`:y}`}let M=m(l,(f[0]-f[1])/2),z=m(c,(f[0]-f[1])/2);return C`<g data-opening=${n.id} class=${k}>
        <line class="fp3d-open-hit" x1=${M[0]} y1=${M[1]} x2=${z[0]} y2=${z[1]} />
        <polygon class="fp3d-open-gap" points=${_.map(R=>R.join(",")).join(" ")} />
        ${P}
      </g>`})}</g>`}renderDevices(t){return C`<g>${t.placements.map(e=>{var c,d;let n=at(e.entity_id);if(!n)return y;let[i,o]=this.toScreen([e.x,e.z]),s=((d=(c=this.hass)==null?void 0:c.states[e.entity_id])==null?void 0:d.state)==="on",r=e.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${r?" fp3d-device-sel":""}`;return C`${n==="camera"?this.renderCameraWedge(e,r):y}<g data-device=${e.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${_t(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${fn(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${r&&e.locked?C`<text class="fp3d-lock" x=${i+16} y=${o-12}>🔒</text>`:y}`})}</g>`}renderCameraWedge(t,e){let n=t.mount==="ceiling",i=t.fov??(n?360:90),o=t.reach??(n?3:4.5),s=(t.rotation??0)*Math.PI/180,r=($,k)=>this.toScreen([t.x-Math.sin(s+$)*k,t.z+Math.cos(s+$)*k]),[l,c]=this.toScreen([t.x,t.z]),d=Math.min(i,359.9)*Math.PI/180/2,[u,p]=r(-d,o),[h,f]=r(d,o),m=o*this._view.scale,_=i>=360?"":`M${l} ${c}L${u} ${p}A${m} ${m} 0 ${d>Math.PI/2?1:0} 1 ${h} ${f}Z`,[g,v]=r(0,o);return C`<g class="fp3d-wedge ${e?"fp3d-wedge-sel":""}">
      ${i>=360?C`<circle cx=${l} cy=${c} r=${m} />`:C`<path d=${_} />`}
      ${e&&this.isAdmin&&!t.locked?C`<g class="fp3d-rotate" data-aim=${t.entity_id}>
            <line x1=${l} y1=${c} x2=${g} y2=${v} />
            <circle cx=${g} cy=${v} r="16" class="fp3d-hit" />
            <circle cx=${g} cy=${v} r="8" />
            <path d="M${g-4} ${v-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((s,r)=>{let l=e[(r+1)%n],[c,d]=this.toScreen(s),[u,p]=this.toScreen(l),h=Math.hypot(l[0]-s[0],l[1]-s[1]),f=(c+u)/2,m=(d+p)/2,[_,g]=this.toScreen(Qt(e)),v=-(p-d),$=u-c,k=Math.hypot(v,$)||1;v/=k,$/=k,v*(f-_)+$*(m-g)<0&&(v=-v,$=-$);let P=Math.hypot(u-c,p-d);return C`
        ${P>50?Math.abs(v)>Math.abs($)?C`<text class="fp3d-dim" style="text-anchor:${v>0?"start":"end"}" x=${f+v*13} y=${m+$*13+4}>${this.m(h,2)}</text>`:C`<text class="fp3d-dim" x=${f+v*16} y=${m+$*16+4}>${this.m(h,2)}</text>`:y}
        ${P>36?C`<g data-mid=${r} class="fp3d-mid"><circle cx=${f} cy=${m} r="14" class="fp3d-hit" /><circle cx=${f} cy=${m} r="6" /><path d="M${f-3} ${m}h6M${f} ${m-3}v6" /></g>`:y}
      `}),o=e.map((s,r)=>{let[l,c]=this.toScreen(s);return C`<g data-vertex=${r} class=${r===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${c} r="16" class="fp3d-hit" /><circle cx=${l} cy=${c} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${c-9}>${r+1}</text>`});return C`<g>${i}${o}</g>`}renderDraft(){let t=this.drag;if((t==null?void 0:t.kind)==="freewall"){let[i,o]=this.toScreen(t.start),[s,r]=this.toScreen(t.end),l=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return C`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${i} y1=${o} x2=${s} y2=${r} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${(o+r)/2-10}>${this.m(l,2)}</text>
      </g>`}if((t==null?void 0:t.kind)==="rect"){let[i,o]=this.toScreen(t.start),[s,r]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),c=Math.abs(t.end[1]-t.start[1]);return C`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,s)} y=${Math.min(o,r)} width=${Math.abs(s-i)} height=${Math.abs(r-o)} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${Math.min(o,r)-8}>${this.m(l,2)} × ${this.m(c,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return y;let e=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=e.map(i=>this.toScreen(i));return C`<g pointer-events="none">
      ${n.length>1?C`<polyline class="fp3d-draft" points=${n.map(i=>i.join(",")).join(" ")} />`:y}
      ${n.slice(1).map((i,o)=>{let s=n[o];return Math.hypot(i[0]-s[0],i[1]-s[1])<30?y:C`<text class="fp3d-dim" x=${(s[0]+i[0])/2} y=${(s[1]+i[1])/2-6}>${this.m(Math.hypot(e[o+1][0]-e[o][0],e[o+1][1]-e[o][1]),2)}</text>`})}
      ${this._draft.map((i,o)=>{let[s,r]=this.toScreen(i);return C`<circle class=${o===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${r} r=${o===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?C`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:y}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return C`<g pointer-events="none">
      ${t.x!==void 0?C`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:y}
      ${t.z!==void 0?C`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:y}
      ${t.point?C`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:y}
    </g>`}get unit(){return Ho(this.hass,this._doc.settings.units)}m(t,e=2){return Ia(t,this.unit,n=>Bt(this.hass,n,e))}area(t){return za(Math.abs(t),this.unit,e=>Bt(this.hass,e,1))}lenValue(t){return this.unit==="imperial"?Be(t):String(I(t))}readLen(t){if(this.unit==="imperial")return Do(t,"imperial");let e=parseFloat(t.replace(",","."));return Number.isFinite(e)?e:null}len(t,e,n,i=.01,o){return this.unit!=="imperial"?this.num(t,e,n,i,o):b`<label class="fp3d-field"
      >${jn(t,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${Be(e)}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=s.target,l=Do(r.value,"imperial");l!==null?n(o!==void 0?Math.max(o,l):l):r.value=Be(e)}}
    /></label>`}num(t,e,n,i=.01,o){return b`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${o??y}
        .value=${String(I(e))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let r=parseFloat(s.target.value.replace(",","."));Number.isFinite(r)&&n(r)}}
    /></label>`}rightPress=null;rightUp=-1e9;lastTap=null;doubleTap(t,e){var o;let n=performance.now(),i=t.detail>=2||((o=this.lastTap)==null?void 0:o.key)===e&&n-this.lastTap.at<450;return this.lastTap=i?null:{key:e,at:n},i}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",t?"1":"0")}catch{}}setSideFolded(t){if(this._split&&!this._sidePinned){this._sideOpen=!t;return}this._sideMin=t;try{localStorage.setItem("neonplan3d.sideMin",t?"1":"0")}catch{}}renderSideGrip(){if(this.narrow)return y;let t=n=>{this.sideDrag&&(this._sideWidth=Math.min(640,Math.max(280,Math.round(this.sideDrag.width+(this.sideDrag.x-n.clientX)))))},e=n=>{if(this.sideDrag){this.sideDrag=null,n.currentTarget.releasePointerCapture(n.pointerId);try{localStorage.setItem("neonplan3d.sideWidth",String(this._sideWidth))}catch{}}};return b`<div
      class="fp3d-side-grip"
      title=${this.t("side_resize")}
      @pointerdown=${n=>{this.sideDrag={x:n.clientX,width:this._sideWidth},n.currentTarget.setPointerCapture(n.pointerId),n.preventDefault()}}
      @pointermove=${t}
      @pointerup=${e}
      @pointercancel=${e}
    ></div>`}renderAside(t){let e=this._split&&!this._sidePinned&&!this.narrow;return!this.narrow&&(e?!this._sideOpen:this._sideMin)?b`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this.setSideFolded(!1)}>‹</button>
        ${this._furnitureId||this._deviceId||this._openingId||this._roomId?b`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this.setSideFolded(!1)}>⚙</button>`:y}
      </aside>`:e?b`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:b`<aside class="fp3d-side">${this.renderSideGrip()}${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){if(this.narrow)return y;let e=b`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${()=>this.setSideFolded(!0)}>${this.t("side_close")} ›</button>`;return this._split?b`<div class="fp3d-pin-row">
      ${e}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`:b`<div class="fp3d-pin-row">${e}</div>`}renderSide(t){var r,l,c,d;let e=((r=this._doc)==null?void 0:r.floors)??[],n=this.room,i=this.isAdmin,o=Object.values(((l=this.hass)==null?void 0:l.areas)??{}).sort((u,p)=>u.name.localeCompare(p.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(t);if(this._tool==="furniture"&&t&&i)return b`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):y} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:(n==null?void 0:n.name)??""})}</button>
        ${s}`:n&&this._tool!=="measure"?b`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:b`
      ${i?y:b`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${t?this.t("floor_settings_of",{floor:t.name}):this.t("floors")}</h3>
        ${e.length?y:b`<p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${i&&t?b`<button class="fp3d-btn" aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
              ${this.t(this._doc.settings.lock_plan?"plan_unlock":"plan_lock")}
            </button>`:y}
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
                    ${t.start_view?b`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:y}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${u=>this._shiftAll=u.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:y}
              ${this.len(this.t("height"),t.height,u=>this.updateFloor({height:Math.max(1,u)}),.05,1)}
              ${Object.keys(((c=this.hass)==null?void 0:c.floors)??{}).length?b`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${u=>this.updateFloor({ha_floor:u.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(((d=this.hass)==null?void 0:d.floors)??{}).filter(u=>u.floor_id===t.ha_floor||!e.some(p=>p.ha_floor===u.floor_id)).map(u=>b`<option value=${u.floor_id} ?selected=${u.floor_id===t.ha_floor}>${u.name}</option>`)}
                    </select></label
                  >`:y}
              ${i&&this.unplacedAreas(t).length?b`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                  </div>`:y}
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
                  ${this._notice?b`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:y}`:y}
            </div>`:y}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?b`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):y}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():y}
      ${t&&i?this.renderBackgroundForm(t):y}
    `}moveRoom(t,e){this.change((n,i)=>{let o=i.rooms.findIndex(l=>l.id===t),s=o+e;if(o<0||s<0||s>=i.rooms.length)return;let[r]=i.rooms.splice(o,1);i.rooms.splice(s,0,r)})}renderRoomList(t){return t.rooms.length?b`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map((e,n)=>b`<div class="fp3d-row fp3d-dev-row">
            <button class="fp3d-row fp3d-room-btn" @click=${()=>this.selectItem("room",e.id)}>
              <span>${e.name}</span><span class="fp3d-muted">${this.area(Ft(e.points))}</span>
            </button>
            ${this.isAdmin&&t.rooms.length>1?b`<button class="fp3d-pin" title=${this.t("room_order_up")} ?disabled=${n===0} @click=${()=>this.moveRoom(e.id,-1)}>↑</button>
                  <button class="fp3d-pin" title=${this.t("room_order_down")} ?disabled=${n===t.rooms.length-1} @click=${()=>this.moveRoom(e.id,1)}>↓</button>`:y}
          </div>`)}
      </div>
    </section>`:y}renderRoomOpenings(t){var n;let e=(((n=this.floor)==null?void 0:n.openings)??[]).filter(i=>i.room_id===t.id);return e.length?b`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${e.length})</summary>
      <div class="fp3d-room-list">
        ${e.map(i=>b`<button class="fp3d-row" @click=${()=>{var o;return this.selectItem("opening",i.id),(o=this.renderRoot.querySelector(".fp3d-side"))==null?void 0:o.scrollTo(0,0)}}>
            <span>${this.t(`preset_${mi(i)}`)}</span><span class="fp3d-muted">${this.m(i.width,2)}</span>
          </button>`)}
      </div>
    </details>`:y}renderRoomForm(t,e){let n=this.isAdmin,i=_i(t.points),o=At(t.points);return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",t.id)}</div>
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${()=>this.openRoomWalls(t)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!n} placeholder=${this.t("aliases_placeholder")} @change=${s=>this.updateRoom({aliases:pi(s.target.value)})}
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
            ${Hr.map(s=>b`<option value=${s} ?selected=${s===t.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?b`${this.len(this.t("x"),o.x0,s=>this.setRect("x",s))} ${this.len(this.t("z"),o.z0,s=>this.setRect("z",s))}
            ${this.len(this.t("width"),o.x1-o.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.len(this.t("depth"),o.z1-o.z0,s=>this.setRect("d",s),.01,.05)}`:y}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${jn(this.t("room_ceiling"),this.unit)}
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
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(Ft(t.points)),n:this.area(Ea(t,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{var s;(s=navigator.clipboard)==null?void 0:s.writeText(t.id).catch(()=>{})}}>${t.id}</code></p>
      ${this.renderEdgeHeights(t)} ${this.renderRoomClimate(t)} ${this.renderRoomOpenings(t)}
      <details class="fp3d-points" ?open=${!i}>
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
            ${sd.map(s=>b`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:y}
    </section>`}applyPackage(t,e){if(!this.isAdmin)return;let n=rd(t,e,()=>J("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=At(t.points),n=this.hass?$e(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,i,o]=se[e.type],s=vo(t,e.rows,e.cols).map(([r,l])=>({id:J("furniture"),type:e.type,x:r,z:l,rotation:0,w:n,d:i,h:o,variant:null,entity:e.entity??"none",power:null}));this.change((r,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(t){let e=this._spots,n=vo(t,e.rows,e.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),o=s=>this._spots={...e,...s};return b`<div class="fp3d-form fp3d-spot-form">
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
        ${n?qs(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):y}
      </span></label
    >`}markerSelect(t,e){return b`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${kr.map(n=>b`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t){var n;let e=i=>{var r,l,c,d,u,p,h,f;let o=(l=(r=this.hass)==null?void 0:r.entities)==null?void 0:l[i],s=(o==null?void 0:o.area_id)??(o!=null&&o.device_id?(u=(d=(c=this.hass)==null?void 0:c.devices)==null?void 0:d[o.device_id])==null?void 0:u.area_id:null);return s?(f=(h=(p=this.hass)==null?void 0:p.areas)==null?void 0:h[s])==null?void 0:f.name:void 0};return Object.keys(((n=this.hass)==null?void 0:n.states)??{}).filter(t).map(i=>({id:i,label:`${_t(this.hass,i)}${e(i)?` \xB7 ${e(i)}`:""}`})).sort((i,o)=>i.label.localeCompare(o.label))}entitySelect(t,e,n,i,o){let s=n===void 0?null:n?this.t("entity_auto",{name:_t(this.hass,n)}):this.t("entity_auto_none"),r=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return b`<label class="fp3d-field fp3d-wide"
      >${t}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${r}
        .value=${e===null?s!==null?"__auto":"none":e}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${c=>{c.stopPropagation(),o(c.detail.value==="__auto"?null:c.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(t){var o;let e=this.floor,n=e?dn(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let i=Tt(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return((o=Lo(i.walls,t,n))==null?void 0:o.wall.exterior)??!1}renderSidelightFields(t){if(t.type!=="door")return y;let e=hi(t,this.openingIsExterior(t));if(e!=="sidelight"&&e!=="sidelights")return y;let n=this.isAdmin,i=(o,s)=>b`<label class="fp3d-field"
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
          ${i("sidelight_width","sidelight_width")}`:b`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(t){let e=t.type==="door"?yo:$o,n=hi({type:t.type,style:null},this.openingIsExterior(t)),i=t.style&&e.includes(t.style)?t.style:"";return b`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(o=>b`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",i=t.type==="garage",o=g=>{var $;if(!this.hass)return null;let v=structuredClone(this._doc.floors);for(let k of v)for(let P of k.openings)P.id===t.id&&(P[g]=null);return(($=ga(this.hass,v).get(t.id))==null?void 0:$[g])??null},s=g=>{var v,$;return($=(v=this.hass)==null?void 0:v.states[g])==null?void 0:$.attributes.device_class},r=this.entityOptions(g=>g.startsWith("cover.")),l=this.entityOptions(g=>{var v,$;return/^(sensor|number|input_number)\./.test(g)&&Number.isFinite(Number(($=(v=this.hass)==null?void 0:v.states[g])==null?void 0:$.state))}),c=this.entityOptions(g=>{var v;return g.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(g)??"")||Ot(g)&&Ro((v=this.hass)==null?void 0:v.states[g])!==null||i&&/^(switch|input_boolean)\./.test(g)}),d=this.entityOptions(g=>{var $;let v=($=this.hass)==null?void 0:$.states[g];return g.startsWith("binary_sensor.")?typeof(v==null?void 0:v.attributes.window_state)=="string":Ot(g)&&(Ro(v)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${g} ${_t(this.hass,g)}`))}),u=this.entityOptions(g=>g.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(g)??"")),p=i?this.entityOptions(g=>g.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(g)??"")||_d.test(g)):c,h=i&&_d.test(t.contact??"")&&!(t.cover&&t.cover!=="none")&&!o("cover"),f=g=>{let v=g===1,$=v?t.tilt:t.tilt2??null,k=v?t.contact:t.contact2,P=(v?t.sensor:t.sensor2)??($&&$!=="none"?"contact_tilt":"contact"),M=z=>this.updateOpening(v?{contact:z}:{contact2:z==="none"?null:z});return b`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${z=>{let R=z.target.value,A=R==="contact_tilt"?{}:v?{tilt:null}:{tilt2:null};this.updateOpening({...v?{sensor:R}:{sensor2:R},...A})}}
          >
            ${["contact","handle","contact_tilt"].map(z=>b`<option value=${z} ?selected=${z===P}>${this.t(`sensor_kind_${z}`)}</option>`)}
          </select></label
        >
        ${P==="handle"?this.entitySelect(this.t("handle_entity"),k,void 0,d,z=>M(z==="none"?v?"none":null:z)):this.entitySelect(this.t("contact_entity"),k,v?o("contact"):void 0,u,M)}
        ${P==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),$,void 0,c,z=>this.updateOpening(v?{tilt:z==="none"?null:z}:{tilt2:z==="none"?null:z})):y}
        ${v?b`${this.entitySelect(this.t("tilt_angle_entity"),t.tilt_angle??null,void 0,this.entityOptions(z=>Ot(z)),z=>this.updateOpening({tilt_angle:z==="none"?null:z}))}
            ${t.tilt_angle&&t.tilt_angle!=="none"?b`${this.num(this.t("tilt_angle_max"),t.tilt_max??15,z=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,z))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),t.tilt_offset??0,z=>this.updateOpening({tilt_offset:z}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!t.tilt_invert} ?disabled=${!e} @change=${z=>this.updateOpening({tilt_invert:z.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:y}`:y}`},m=mi(t),_=t.type==="door";return b`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${m}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?b`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(fi).map(g=>b`<button class="fp3d-chip" aria-pressed=${g===m} @click=${()=>this.setOpeningPreset(t,g)}>${this.t(`preset_${g}`)}</button>`)}
          </div>`:y}
      ${e&&!i?b`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${_||n&&t.sill<.1?b`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:y}
          </div>`:y}
      <div class="fp3d-form">
        ${this.len(this.t("width"),t.width,g=>this.updateOpening({width:Math.max(.3,g)}),.01,.3)}
        ${this.len(this.t("opening_position"),t.offset,g=>this.updateOpening({offset:Math.max(0,g)}),.01,0)}
        ${n?this.len(this.t("sill"),t.sill,g=>this.updateOpening({sill:Math.max(0,g)}),.01,0):y}
        ${this.len(this.t("opening_height"),t.height,g=>this.updateOpening({height:Math.max(.3,g)}),.01,.3)}
        ${n&&this.isAdmin?b`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${()=>{var v;let g=((v=this.floor)==null?void 0:v.height)??2.5;this.updateOpening({width:1,height:.5,sill:Math.max(0,Math.round((g-.75)*100)/100)})}}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`:y}
        ${i?y:this.renderStyleSelect(t)}
        ${this.renderSidelightFields(t)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${g=>this.updateOpening({mark:g.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?y:b`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${g=>this.updateOpening({hinge:g.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||_?this.entitySelect(this.t(n?"cover_entity":"door_cover"),t.cover,o("cover"),r,g=>this.updateOpening({cover:g})):y}
        ${(n||i||_)&&t.cover!=="none"&&(t.cover||o("cover"))?b`${this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,l,g=>this.updateOpening({position:g==="none"?null:g}))}
              ${t.position?b`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${g=>this.updateOpening({position_inverted:g.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:y}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_invert_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.cover_invert} @change=${g=>this.updateOpening({cover_invert:g.target.checked||void 0})} />
                ${this.t("cover_invert")}</label
              >
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${g=>this.updateOpening({confirm:g.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:y}
        ${n?b`${t.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:y}
              ${f(1)} ${t.leaves===2?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${f(2)}`:y}
              ${t.sill<=.01?b`${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(g=>g.startsWith("lock.")),g=>this.updateOpening({lock:g==="none"?null:g}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:y}`:b`${this.entitySelect(this.t(i?"garage_contact":t.leaves===2?"contact_main":"contact_entity"),t.contact,o("contact"),p,g=>this.updateOpening({contact:g}))}
              ${h?b`<label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                    ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${g=>this.updateOpening({confirm:g.target.checked})} />
                    ${this.t("device_confirm")}</label
                  >`:y}
              ${t.leaves===2&&!i?this.entitySelect(this.t("contact_second"),t.contact2,void 0,c,g=>this.updateOpening({contact2:g==="none"?null:g})):y}
              ${_?b`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!t.shut} ?disabled=${!e} @change=${g=>this.updateOpening({shut:g.target.checked})} />
                    ${this.t("door_shut")}</label
                  >
                  ${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(g=>g.startsWith("lock.")),g=>this.updateOpening({lock:g==="none"?null:g}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:y}`}
        ${t.contact!=="none"&&(t.contact||t.contact2||o("contact"))?b`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!t.contact_invert} ?disabled=${!e} @change=${g=>this.updateOpening({contact_invert:g.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:y}
        ${t.type==="window"&&this.floor&&t.sill<Fr()-this.floor.elevation-.05?b`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${t.well!==!1} ?disabled=${!e} @change=${g=>this.updateOpening({well:g.target.checked?void 0:!1})} />
                ${this.t("well")}</label
              >
              ${t.well!==!1?this.len(this.t("well_rim"),t.well_rim??0,g=>this.updateOpening({well_rim:Math.max(-.3,Math.min(1,g))||null}),.01,-.3):y}`:y}
        ${t.type==="window"?b`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!t.rain_ignore} ?disabled=${!e} @change=${g=>this.updateOpening({rain_ignore:g.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:y}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?b`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:y}
    </section>`}renderFurnitureForm(t){if(this.selection().length>1)return this.renderBlockForm();let e=this.isAdmin;return b`<section>
      <div class="fp3d-h3row"><h3>${t.name||this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
      ${t.group?b`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${()=>{this._single=!1,this.requestUpdate()}}>${this.t("block_select")}</button></p>`:y}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${t.name??""} ?disabled=${!e} placeholder=${this.t(`furn_${t.type}`)===`furn_${t.type}`?"":this.t(`furn_${t.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!e} placeholder=${this.t("aliases_placeholder")} @change=${n=>this.updateFurniture({aliases:pi(n.target.value)})}
        /></label>
        ${t.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${this.typeChoices(t.type).map(n=>b`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).filter(n=>n.items.length).map(n=>b`<optgroup label=${fe(n)}>
                ${n.items.map(i=>{let o=He(n.id,i.id);return b`<option value=${o} ?selected=${o===t.type}>${oe(i)}</option>`})}
              </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(n=>t.type.startsWith(`pack:${n.id}:`))?b`<option value=${t.type} selected>${Re(this.hass,t.type)}</option>`:y}
          </select></label
        >
        ${this.len(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.len(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.len(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.01,n)}),.01,.01)}
        ${this.len(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.01,n)}),.01,.01)}
        ${this.len(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${Vt(t.type)?y:b`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!t.mirror} ?disabled=${!e} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${t.type==="led_strip"?b`${this.num(this.t("strip_tilt"),t.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              ${t.upright?y:b`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"),t.rise??0,n=>this.updateFurniture({rise:Math.max(-80,Math.min(80,Math.round(n)))||void 0}),5)}</span>`}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!t.upright} ?disabled=${!e} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:y}
        ${re(t)&&this.floor?b`${this.len(this.t("mount_height"),t.mount_y??Rt(this.floor,t),n=>this.updateFurniture({mount_y:Math.min(Wi,Math.max(0,n))}),.01,0)}
              ${t.mount_y!=null?b`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:y}`:y}
      </div>
      ${t.type==="stairs"?b`<label class="fp3d-check" title=${this.t("stair_open_hint")}
              ><input type="checkbox" .checked=${!!t.stair_open} ?disabled=${!this.isAdmin} @change=${n=>this.updateFurniture({stair_open:n.target.checked||void 0})} />
              ${this.t("stair_open")}</label
            >
            <p class="fp3d-sub">${this.t("stairs_hint")}</p>`:y}
      ${t.type==="stairs_u"?b`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:y}
      ${t.type==="stairwell"?b`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&(Ba(Wt(t),n.points)||Ft(Co(n.points,Wt(t)))>.01))?b`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:y}`:y}
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
      ${t.type==="lamp_ceiling_fan"?b`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_fan_entity"),t.fan_entity??null,void 0,this.entityOptions(n=>n.startsWith("fan.")),n=>this.updateFurniture({fan_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("ceiling_fan_hint")}</p>
            </div>`:y}
      ${nn(t.type)?this.renderFurnitureLinks(t):du.has(t.type)?y:b`<div class="fp3d-form fp3d-links">${this.renderStateLinks(t)}</div>`} ${t.type==="parking"?this.renderParkingForm(t):y} ${t.type==="wall_switch"?this.renderWallSwitchForm(t):t.type==="wall_socket"?this.renderWallSocketForm(t):y} ${t.type==="waste_bin"||t.type==="mailbox"?this.renderHouseholdForm(t):this.renderHouseholdExtras(t)}
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
          </div>
          ${this.renderMultiToggle()}`:y}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=Ql(this.hass,t),n=0,i=r=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===r),o=(r,l,c)=>{if(!c)return;let d=i(r);if(!d&&this.floor&&(this.addEnergyDevice(r),d=i(r)),!d||d[l]&&d[l]!=="none")return;let u=d.id;this.change(p=>{let h=p.floors.flatMap(f=>f.furniture).find(f=>f.id===u);h&&(h[l]=c)}),n++};o("meter","power",e.grid),o("inverter","power",e.solar),o("home_battery","power",e.battery),o("home_battery","soc",e.battery_soc);let s=Jl(t);for(let r of["gas","water"])s[r]&&!this._doc.energy[r]&&(this.setEnergy({[r]:s[r]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let t=this._doc.energy,e=this.isAdmin,n=(m,_)=>{var g,v;return(v=(g=this.hass)==null?void 0:g.states[m])==null?void 0:v.attributes[_]},i=this.entityOptions(m=>this.isPowerSensor(m)),o=this.entityOptions(m=>Ot(m)&&n(m,"device_class")==="battery"),s=this.entityOptions(m=>Ot(m)&&(n(m,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(m,"unit_of_measurement")??""))),r=m=>_=>this.setEnergy({[m]:_==="none"?null:_}),l=m=>this.entityOptions(_=>Ot(_)&&(n(_,"device_class")===m||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(_,"unit_of_measurement")??""))),c=this.hass?an(this.hass,this._doc.floors):new Map,d=cs(this._doc,m=>this.devicePower(m,c)),u=this.hass?Xl(this.hass,this._doc,[],d):null,p=!!u&&(u.solar??0)<20,h=p&&u.grid!==null&&u.grid<-50,f=p&&u.battery!==null&&u.battery<-50&&(u.grid??0)<=0;return b`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${h?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({grid_invert:!t.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      ${f?b`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({battery_invert:!t.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),t.grid,d.grid,i,r("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} ?disabled=${!e} @change=${m=>this.setEnergy({grid_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,d.solar[0]??null,i,r("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,d.battery[0]??null,i,r("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} ?disabled=${!e} @change=${m=>this.setEnergy({battery_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,d.soc[0]??null,o,r("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),t.consumption,null,i,r("consumption"))}
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
    </section>`}renderHeadroom(t){let e=t.elevation+t.height;if(!(this._doc.settings.roof.sections??[]).some(o=>$l(o,e)))return y;let i={settings:this._doc.settings};return C`${[1.5,2].map(o=>wl(i,t.elevation,o).map(([s,r])=>{let[l,c]=this.toScreen(s),[d,u]=this.toScreen(r);return C`<line class="fp3d-headroom" x1=${l} y1=${c} x2=${d} y2=${u} />
          <text class="fp3d-headroom-label" x=${(l+d)/2} y=${(c+u)/2-4}>${this.m(o,1)}</text>`}))}`}renderFavorites(){let t=this._doc.settings.favorites??[],e=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>e.includes(s.split(".")[0])&&!t.includes(s)),i=s=>this.change(r=>r.settings.favorites=s.length?s:void 0),o=(s,r)=>{let l=[...t],[c]=l.splice(s,1);l.splice(Math.max(0,Math.min(l.length,s+r)),0,c),i(l)};return b`<details class="fp3d-section">
      <summary>${this.t("favorites")}${t.length?b` <span class="fp3d-lib-count">${t.length}</span>`:y}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${t.map((s,r)=>b`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${_t(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${r===0} @click=${()=>o(r,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${r===t.length-1} @click=${()=>o(r,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(t.filter(l=>l!==s))}>✕</button>
        </div>`)}
      ${t.length<40?b`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!t.includes(s)&&i([...t,s])})}
          </div>`:y}
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
            <button class="fp3d-btn" @click=${()=>e([...t,{id:J("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:y}`}renderOwnButtons(){let t=this._doc.settings.buttons??[],e=o=>this.change(s=>s.settings.buttons=o.length?o:void 0),n=(o,s)=>e(t.map((r,l)=>l===o?{...r,...s}:r)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return b`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${t.map((o,s)=>b`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${o.label} @change=${r=>n(s,{label:r.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${r=>n(s,{action:r.target.value})}>
              ${Sr.map(r=>b`<option value=${r} ?selected=${r===o.action}>${this.t(`own_action_${r}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(o.icon??null,r=>n(s,{icon:r}))}
          ${o.action!=="fire_dom_event"?b`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${o.action}`)}
                <input type="text" .value=${o.target??""} placeholder=${i[o.action]} @change=${r=>n(s,{target:r.target.value.trim()||null})}
              /></label>`:y}
          ${o.action==="service"||o.action==="fire_dom_event"?b`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${o.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${o.data?JSON.stringify(o.data,null,1):""}
                  @change=${r=>{r.target.setCustomValidity("");let l=r.target.value.trim();if(!l)return n(s,{data:null});try{let c=JSON.parse(l);c&&typeof c=="object"&&!Array.isArray(c)&&n(s,{data:c})}catch{r.target.setCustomValidity(this.t("own_data_bad")),r.target.reportValidity()}}}
                ></textarea></label
              >`:y}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>e([...t.slice(0,s-1),o,t[s-1],...t.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((r,l)=>l!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<20?b`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:J("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:y}`}paneView(){let t=this.renderRoot.querySelector("fp3d-view3d"),e=t==null?void 0:t.currentView();if(!e)return null;let n=e.target;return{theta:I(e.theta),phi:I(e.phi),radius:I(e.radius),...n?{target:{x:I(n.x),y:I(n.y),z:I(n.z)}}:{}}}rememberFloorView(){let t=this.paneView();if(!t){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:t})}rememberRoomView(){let t=this.paneView();if(!t){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:t})}renderDirectorTriggers(t,e){if(!this.hass)return y;let i=t.triggers??[],o=r=>this.change(l=>l.settings.director={...l.settings.director??{},triggers:r.length?r:null}),s=vt("camera_cockpit");return b`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("director_triggers")}</h4>
      <p class="fp3d-sub">${this.t("director_triggers_hint")}</p>
      ${i.map((r,l)=>b`<div class="fp3d-form">
          ${this.entitySelect(this.t("director_trigger_entity"),r.entity||null,void 0,this.entityOptions(c=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(c)),c=>o(i.map((d,u)=>u===l?{...d,entity:c&&c!=="none"?c:""}:d).filter(d=>d.entity)))}
          ${this.entitySelect(this.t("director_doorbell_camera"),r.camera,void 0,this.entityOptions(c=>c.startsWith("camera.")&&e.includes(c)),c=>o(i.map((d,u)=>u===l?{...d,camera:c&&c!=="none"?c:null}:d)))}
          <button class="fp3d-btn" ?disabled=${!s} @click=${()=>o(i.filter((c,d)=>d!==l))}>✕ ${this.t("delete")}</button>
        </div>`)}
      ${i.length<20&&s?b`<div class="fp3d-form">
            ${this.entitySelect(this.t("director_trigger_add"),null,void 0,this.entityOptions(r=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(r)),r=>{r&&r!=="none"&&o([...i,{entity:r,camera:null}])})}
          </div>`:y}
    </div>`}renderDirector(){let t=this.hass,e=this._doc.settings.director??{},n=u=>this.change(p=>p.settings.director={...p.settings.director??{},...u}),i=vt("camera_cockpit"),o=gl(),s=[...new Set(this._doc.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],r=t?bl(t):[],l=t?e.doorbell_entity??r[0]??null:null,c=t&&l?vl(t,l,s):null,d=(u,p,h,f=!i)=>b`<label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${p} ?disabled=${f} @change=${m=>h(m.target.checked)} /> ${this.t(u)}</label
      >`;return b`<details class="fp3d-section">
      <summary>🎬 ${this.t("director")}</summary>
      <p class="fp3d-sub">${this.t("director_hint")}</p>
      ${i?y:b`<p class="fp3d-sub">🔒 ${this.t("pro_feature_camera_cockpit")}</p>`}
      <div class="fp3d-form">
        ${d("director_here",o,u=>{_l(u),this.dispatchEvent(new CustomEvent("director-here",{bubbles:!0,composed:!0})),this.requestUpdate()})}
        <p class="fp3d-sub fp3d-wide">${this.t("director_here_hint")}</p>
        ${d("director_doorbell",!!e.doorbell,u=>n({doorbell:u}))}
        ${e.doorbell&&t?b`${this.entitySelect(this.t("director_doorbell_entity"),e.doorbell_entity??null,r[0]??null,this.entityOptions(u=>u.startsWith("event.")||u.startsWith("binary_sensor.")),u=>n({doorbell_entity:u==="none"?null:u}))}
            ${this.entitySelect(this.t("director_doorbell_camera"),e.doorbell_camera??null,c,this.entityOptions(u=>u.startsWith("camera.")&&s.includes(u)),u=>n({doorbell_camera:u==="none"?null:u}))}
            ${!r.length&&!e.doorbell_entity?b`<p class="fp3d-sub fp3d-wide">${this.t("director_no_doorbell")}</p>`:y}`:y}
        <label class="fp3d-field fp3d-wide"
          >${this.t("director_motion")}
          <select ?disabled=${!i} @change=${u=>n({motion:u.target.value})}>
            ${["off","person","all"].map(u=>b`<option value=${u} ?selected=${(e.motion??"off")===u}>${this.t(`director_motion_${u}`)}</option>`)}
          </select></label
        >
        ${d("director_appliances",!!e.appliances,u=>n({appliances:u}))}
        ${d("director_alerts",!!e.alerts,u=>n({alerts:u}))}
        ${this.renderDirectorTriggers(e,s)}
        ${d("director_live",!!e.live,u=>n({live:u}))}
        <p class="fp3d-sub fp3d-wide">${this.t("director_live_hint")}</p>
        ${this.num(this.t("director_hold"),e.hold??30,u=>n({hold:Math.min(600,Math.max(10,Math.round(u)))}),5,10)}
      </div>
      <p class="fp3d-sub">${this.t("director_back_hint")}</p>
    </details>`}voicePipes=null;voicePipesAsked=!1;voiceSentences=null;renderVoicePipeline(){let t=this.hass;if(!t)return y;this.voicePipesAsked||(this.voicePipesAsked=!0,nr(t).then(i=>{this.voiceSentences=i.sentences,this.requestUpdate()}).catch(()=>this.voiceSentences="distinct"),t.callWS({type:"assist_pipeline/pipeline/list"}).then(i=>{this.voicePipes=i.pipelines.map(o=>({id:o.id,name:o.name,stt:!!o.stt_engine})),this.requestUpdate()}).catch(()=>{}));let e=fl(),n=["distinct","all","off"];return b`<div class="fp3d-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_sentences")}
        <select
          ?disabled=${!this.isAdmin||this.voiceSentences===null}
          @change=${i=>{let o=i.target.value;this.voiceSentences=o,ir(t,o).catch(()=>{})}}
        >
          ${n.map(i=>b`<option value=${i} ?selected=${(this.voiceSentences??"distinct")===i}>${this.t(`voice_sentences_${i}`)}</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("voice_sentences_hint")}</p>
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_pipeline")}
        <select
          @change=${i=>{ml(i.target.value||null),this.requestUpdate()}}
        >
          <option value="" ?selected=${!e}>${this.t("voice_pipeline_preferred")}</option>
          ${(this.voicePipes??[]).map(i=>b`<option value=${i.id} ?selected=${e===i.id} ?disabled=${!i.stt}>${i.name}${i.stt?"":` (${this.t("voice_pipeline_no_stt")})`}</option>`)}
        </select></label
      >
    </div>`}renderVoice(){var n;let t=cl(),e=[...this.t("voice_examples").split("|"),...ld(((n=this.hass)==null?void 0:n.language)??"en")];return b`<details class="fp3d-section">
      <summary>🎙️ ${this.t("voice")}</summary>
      <p class="fp3d-sub">${this.t("voice_hint")}</p>
      <p class="fp3d-sub"><b>${this.t("voice_understands")}</b></p>
      <ul class="fp3d-voice-list">
        ${e.map(i=>b`<li>${i}</li>`)}
      </ul>
      <div class="fp3d-form">
        <label class="fp3d-check fp3d-wide"
          ><input
            type="checkbox"
            .checked=${t}
            @change=${i=>{ul(i.target.checked),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0})),this.requestUpdate()}}
          />
          ${this.t("voice_here")}</label
        >
        <label class="fp3d-wide"
          >${this.t("screen_name")}
          <input
            type="text"
            .value=${pl()}
            placeholder=${this.t("screen_name_placeholder")}
            @change=${i=>{hl(i.target.value),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0}))}}
          />
        </label>
      </div>
      <p class="fp3d-sub">${this.t("screen_name_hint")}</p>
      ${this.renderVoicePipeline()}
      <p class="fp3d-sub">${this.t("voice_needs")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.dispatchEvent(new CustomEvent("mic-probe",{bubbles:!0,composed:!0}))}>${this.t("director_mic_test")}</button>
      </div>
      <p class="fp3d-sub">${this.t("director_mic_hint")}</p>
    </details>`}renderPresenceSettings(){var i;let t=Object.keys(((i=this.hass)==null?void 0:i.states)??{}).filter(o=>o.startsWith("person.")).sort(),e=o=>{let s=o.slice(7),r=this.entityOptions(c=>Ot(c)),l=c=>c.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(c);return[...r.filter(c=>l(c.id)),...r.filter(c=>!l(c.id))]},n=(o,s)=>{let r=structuredClone(this._doc);r.presence=r.presence.filter(l=>l.person!==o),s&&s!=="none"&&r.presence.push({person:o,sensor:s}),this.setDoc(r)};return b`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(o=>{var s;return this.entitySelect(`${_t(this.hass,o)} \xB7 ${this.t("presence_sensor")}`,((s=this._doc.presence.find(r=>r.person===o))==null?void 0:s.sensor)??null,void 0,e(o),r=>n(o,r))}):b`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
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
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderWallSwitchForm(t){let e=this.isAdmin,n=ko(t),i=this.entityOptions(s=>ta.test(s)),o=s=>{let r=Array.from({length:s},(l,c)=>n[c]??null);this.updateFurniture({switch_keys:r,w:So(s)})};return b`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field fp3d-wide"
        >${this.t("switch_keys")}
        <select ?disabled=${!e} @change=${s=>o(Number(s.target.value))}>
          ${Array.from({length:4},(s,r)=>r+1).map(s=>b`<option value=${s} ?selected=${n.length===s}>${s}</option>`)}
        </select></label
      >
      ${n.map((s,r)=>this.entitySelect(this.t(n.length>1?"switch_key_n":"switch_key",{n:r+1}),s,void 0,i,l=>this.updateFurniture({switch_keys:n.map((c,d)=>d===r?l==="none"?null:l:c)})))}
      ${this.entitySelect(this.t("switch_ring"),na(t),void 0,this.entityOptions(s=>s.startsWith("light.")),s=>this.updateFurniture({switch_ring:s==="none"?null:s}))}
      <p class="fp3d-sub fp3d-wide">${this.t("switch_ring_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${s=>this.updateFurniture({confirm:s.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("switch_hint")}</p>
    </div>`}renderWallSocketForm(t){let e=this.isAdmin,n=Mo(t),i=this.entityOptions(l=>ea.test(l)),o=this.entityOptions(l=>this.isPowerSensor(l)),s=(l,c)=>this.updateFurniture({socket_outlets:n.map((d,u)=>u===l?{...d,...c}:d)}),r=l=>this.updateFurniture({socket_outlets:Array.from({length:l},(c,d)=>n[d]??{entity:null,power:null}),w:So(l)});return b`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field fp3d-wide"
        >${this.t("socket_count")}
        <select ?disabled=${!e} @change=${l=>r(Number(l.target.value))}>
          ${Array.from({length:4},(l,c)=>c+1).map(l=>b`<option value=${l} ?selected=${n.length===l}>${l}</option>`)}
        </select></label
      >
      ${n.map((l,c)=>b`${n.length>1?b`<h4 class="fp3d-lib-head fp3d-wide">${this.t("socket_n",{n:c+1})}</h4>`:y}
          ${this.entitySelect(this.t("socket_switch"),l.entity,void 0,i,d=>s(c,{entity:d==="none"?null:d}))}
          ${this.entitySelect(this.t("socket_power"),l.power,void 0,o,d=>s(c,{power:d==="none"?null:d}))}`)}
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${l=>this.updateFurniture({confirm:l.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("socket_hint")}</p>
    </div>`}renderApFields(t){let e=this.isAdmin,n=ar(t),i=this.hass?lr(this.hass,{entity:t.entity}):null,o=i?["state","clients","led","cpu","memory","restart"].filter(s=>i[s]).map(s=>this.t(`ap_role_${s}`)):[];return b`<label class="fp3d-field fp3d-wide"
        >${this.t("ap_mount")}
        <select
          ?disabled=${!e}
          @change=${s=>{let r=s.target.value==="wall",[l,c,d]=r?sr:or;this.updateFurniture({variant:r?"wall":null,w:l,d:c,h:d,mount_y:null})}}
        >
          <option value="ceiling" ?selected=${!n}>${this.t("ap_ceiling")}</option>
          <option value="wall" ?selected=${n}>${this.t("ap_wall")}</option>
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${o.length?`${this.t("heater_found")} ${o.join(" \xB7 ")}`:this.t("ap_hint")}</p>
      <p class="fp3d-sub fp3d-wide">${this.t("ap_gestures")}</p>`}renderHeaterFields(t){let e=this.isAdmin,n=$r(t),i=this.hass?wr(this.hass,{entity:t.entity}):null,o=i?["heating","showers","remaining","power","eco"].filter(s=>i[s]).map(s=>`${this.t(`heater_role_${s}`)}: ${_t(this.hass,i[s])}`):[];return b`<label class="fp3d-field fp3d-wide"
        >${this.t("heater_capacity")}
        <select
          ?disabled=${!e}
          @change=${s=>{let r=s.target.value,[l,c,d]=si[r];this.updateFurniture({variant:r,w:l,d:c,h:d})}}
        >
          ${vr.map(s=>b`<option value=${s} ?selected=${n===s}>${s} l</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${o.length?`${this.t("heater_found")} ${o.join(" \xB7 ")}`:this.t("heater_hint")}</p>
      <p class="fp3d-sub fp3d-wide">${this.t(i!=null&&i.power?"heater_gestures":"heater_gestures_no_power")}</p>`}setHousehold(t){let e=structuredClone(this._doc);e.settings.household={...e.settings.household??{},...t},this.setDoc(e)}renderHouseholdForm(t){var c,d;let e=this.isAdmin,n=vt("household"),i=!n&&Ee("household")?b`<section class="fp3d-teaser fp3d-wide">
          <div class="fp3d-teaser-head"><b>🏠 ${this.t("pro_name_household")}</b></div>
          <p class="fp3d-sub">${this.t(t.type==="waste_bin"?"household_teaser_bin":"household_teaser_mail")}</p>
        </section>`:y,o=(u,p,h,f,m)=>b`<label class="fp3d-field fp3d-wide"
        >${u}
        <select ?disabled=${!e} @change=${_=>m(_.target.value)}>
          ${h.map(_=>b`<option value=${_} ?selected=${_===p}>${this.t(f(_))}</option>`)}
        </select></label
      >`;if(t.type==="waste_bin"){let u=nl(t),p=t.bin_kind??"rest",[h,f]=rl(t),m=this.entityOptions(_=>_.startsWith("calendar.")||_.startsWith("sensor."));return b`<div class="fp3d-form fp3d-links">
        ${o(this.t("bin_shape"),u,Uo,_=>`bin_shape_${_}`,_=>{let[g,v,$]=tl[_];this.updateFurniture({variant:_==="bin240"?null:_,w:g,d:v,h:$})})}
        ${o(this.t("bin_kind"),p,Xa,_=>`bin_kind_${_}`,_=>{let[g,v]=Yo(_,sl());this.updateFurniture({bin_kind:_,bin_color:g,bin_lid:v===g?null:v})})}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${h} ?disabled=${!e} @change=${_=>this.updateFurniture({bin_color:_.target.value})}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${f} ?disabled=${!e} @change=${_=>this.updateFurniture({bin_lid:_.target.value})}
        /></label>
        ${n?b`${this.entitySelect(this.t("bin_source"),t.bin_source??null,void 0,m,_=>this.updateFurniture({bin_source:_==="none"?null:_}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${t.bin_match??""} placeholder=${this.t(`bin_kind_${p}`)} ?disabled=${!e}
                  @change=${_=>this.updateFurniture({bin_match:_.target.value.trim()||null})} /></label>
              ${this.num(this.t("bin_from"),((c=this._doc.settings.household)==null?void 0:c.bin_from)??14,_=>this.setHousehold({bin_from:Math.max(0,Math.min(24,_))}),.5)}
              ${this.num(this.t("bin_until"),((d=this._doc.settings.household)==null?void 0:d.bin_until)??12,_=>this.setHousehold({bin_until:Math.max(0,Math.min(24,_))}),.5)}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_hint")}</p>`:i}
      </div>`}let s=il(t),r=this.entityOptions(u=>["binary_sensor.","input_boolean.","sensor.","counter.","input_number."].some(p=>u.startsWith(p))),l=this.entityOptions(u=>u.startsWith("binary_sensor."));return b`<div class="fp3d-form fp3d-links">
      ${o(this.t("mailbox_shape"),s,Go,u=>`mailbox_shape_${u}`,u=>{let[p,h,f]=el[u];this.updateFurniture({variant:u==="wall"?null:u,w:p,d:h,h:f})})}
      ${n?b`${this.entitySelect(this.t("mailbox_entity"),typeof t.entity=="string"&&t.entity!=="none"?t.entity:null,void 0,r,u=>this.updateFurniture({entity:u??"none"}))}
            ${this.entitySelect(this.t("mailbox_door"),t.mailbox_door??null,void 0,l,u=>this.updateFurniture({mailbox_door:u==="none"?null:u}))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`:i}
    </div>`}renderHouseholdExtras(t){let e=t.type==="plant"||Za(t.type),n=t.type==="washer"||t.type==="dryer"||t.type==="dishwasher",i=t.type==="fridge"||t.type==="fridge_smart",o=nn(t.type);if(!e&&!o)return y;if(!vt("household"))return!Ee("household")||!(e||n||i)?y:b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🏠 ${this.t("pro_name_household")}</b></div>
        <p class="fp3d-sub">${this.t(e?"hh_teaser_plant":i?"hh_teaser_fridge":"hh_teaser_appliance")}</p>
      </section>`;let s=this.entityOptions(d=>d.startsWith("sensor.")),r=this.entityOptions(d=>d.startsWith("binary_sensor.")),l=this.entityOptions(d=>["sensor.","binary_sensor.","input_boolean.","input_datetime.","input_number."].some(u=>d.startsWith(u))),c=d=>d==="none"?null:d;return b`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("pro_name_household")}</b></p>
      ${e?b`${this.entitySelect(this.t("hh_moisture"),t.moisture??null,void 0,this.entityOptions(d=>d.startsWith("plant.")||d.startsWith("sensor.")),d=>this.updateFurniture({moisture:c(d)}))}
            ${this.num(this.t("hh_moisture_min"),t.moisture_min??20,d=>this.updateFurniture({moisture_min:Math.max(0,Math.min(100,Math.round(d)))}),1)}`:y}
      ${n?b`${this.entitySelect(this.t("hh_remaining"),t.remaining??null,void 0,s,d=>this.updateFurniture({remaining:c(d)}))}
            ${this.entitySelect(this.t("hh_door"),t.door_left??null,void 0,r,d=>this.updateFurniture({door_left:c(d)}))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`:y}
      ${i?b`${t.type==="fridge"?this.entitySelect(this.t("hh_fridge_door"),t.door_left??null,void 0,r,d=>this.updateFurniture({door_left:c(d)})):y}
            ${this.num(this.t("hh_door_alarm"),t.door_alarm??2,d=>this.updateFurniture({door_alarm:Math.max(.5,Math.min(120,d))}),.5)}`:y}
      ${o?b`${this.entitySelect(this.t("hh_service_entity"),t.service??null,void 0,l,d=>this.updateFurniture({service:c(d)}))}
            ${t.service&&t.service!=="none"?this.num(this.t("hh_service_min"),t.service_min??10,d=>this.updateFurniture({service_min:Math.max(0,d)}),1):y}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`:y}
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
      ${o==="vertical"||o==="side"?y:this.num(this.t("awning_pitch"),t.awning_pitch??12,s=>this.updateFurniture({awning_pitch:Math.max(0,Math.min(80,Math.round(s)))}),1)}
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
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`}renderMotionFields(t){let e=this.isAdmin,n=this.entityOptions(o=>o.startsWith("sensor.")||o.startsWith("input_number.")||o.startsWith("number.")),i=t.variant==="left"||t.variant==="right"?t.variant:"both";return b`${Ve(t.type)==="curtain"?b`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!e} @change=${o=>{let s=o.target.value;this.updateFurniture({variant:s==="both"?null:s})}}>
              ${["both","left","right"].map(o=>b`<option value=${o} ?selected=${i===o}>${this.t(`curtain_side_${o}`)}</option>`)}
            </select></label
          >`:y}
      ${this.num(this.t("motor_time"),t.awning_time??20,o=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(o)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,o=>this.updateFurniture({awning_position:o==="none"?null:o}))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${o=>this.updateFurniture({awning_invert:o.target.checked})} />
        ${this.t("awning_invert")}</label
      >`}renderFurnitureLinks(t){var u;let e=new Set(["smoke","gas","carbon_monoxide","heat","moisture","safety","sound","problem"]);if(!this.hass)return y;let n=this.hass,i=p=>{var f;let h=structuredClone(this._doc.floors);for(let m of h)for(let _ of m.furniture)_.id===t.id&&(_[p]=null);return((f=an(n,h).get(t.id))==null?void 0:f[p])??null},o=wi(t.type),s=o&&(!De(t.type)||pr(t.type)),r=Vt(t.type),l=t.type==="access_point"&&this.hass?dr(this.hass):this.entityOptions(p=>{var h;return r?/^(light|switch|input_boolean)\./.test(p):s?/^(media_player|switch|input_boolean|light)\./.test(p)||Ve(t.type)==="screen"&&p.startsWith("cover."):t.type==="water_heater"?p.startsWith("water_heater."):t.type==="awning"?p.startsWith("cover."):Ve(t.type)==="curtain"?/^(cover|switch|input_boolean)\./.test(p):t.type==="radiator"||t.type==="ac_unit"?p.startsWith("climate."):he(t.type)?p.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(p)||fa(n.states[p])||p.startsWith("binary_sensor.")&&(t.type.endsWith("smoke_detector")||e.has(String(((h=n.states[p])==null?void 0:h.attributes.device_class)??"")))}),c=this.entityOptions(p=>this.isPowerSensor(p)),d=t.type==="fridge_smart"?this.entityOptions(p=>p.startsWith("binary_sensor.")):[];return b`<div class="fp3d-form fp3d-links">
        ${t.type==="grid_point"?b`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(r?"furn_entity_light":Ve(t.type)?"motor_cover":s?"furn_entity_tv":t.type==="awning"?"awning_cover":t.type==="water_heater"?"heater_entity":t.type==="access_point"?"ap_entity":t.type==="radiator"||t.type==="ac_unit"?"furn_entity_climate":he(t.type)?"furn_entity_vacuum":"furn_entity"),t.entity??null,i("entity"),l,p=>this.updateFurniture({entity:p}))}
        ${t.type==="radiator"?b`${this.entitySelect(this.t("heat_sensor"),t.heat_sensor??null,void 0,this.entityOptions(p=>/^(binary_sensor|sensor|switch|input_boolean|number)\./.test(p)),p=>this.updateFurniture({heat_sensor:p&&p!=="none"?p:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("heat_sensor_hint")}</p>`:y}
        ${t.type==="awning"?this.renderAwningFields(t):t.type==="water_heater"?this.renderHeaterFields(t):t.type==="access_point"?this.renderApFields(t):Ve(t.type)?this.renderMotionFields(t):y}
        ${!r&&!me.includes(t.type)&&!xi(t.type)?this.renderStateLinks(t):y}
        ${r&&t.entity&&t.entity!=="none"?b`${this.entitySelect(this.t("furn_color_entity"),t.color_entity??null,void 0,this.entityOptions(p=>p.startsWith("light.")&&p!==t.entity),p=>this.updateFurniture({color_entity:p==="none"?null:p}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:y}
        ${r?this.glowScaleField(t.glow_scale,p=>this.updateFurniture({glow_scale:p})):y}
        ${r&&t.entity&&t.entity!=="none"?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!t.only_color} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({only_color:p.target.checked?"#ffd400":null})} />
                ${this.t("furn_only_color")}</label
              >
              ${t.only_color?b`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${t.only_color} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({only_color:p.target.value})} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`:y}`:y}
        ${r||t.type==="grid_point"?y:this.entitySelect(this.t(t.type==="meter"?"energy_grid":t.type==="inverter"?"energy_solar_sensor":t.type==="home_battery"?"energy_battery_sensor":"furn_power"),t.power??null,i("power"),c,p=>this.updateFurniture({power:p}))}
        ${!r&&t.power&&t.power!=="none"&&!me.includes(t.type)?b`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
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
            /></label>`:y}
        ${vt("energy_pro")&&!r&&!["grid_point","meter","inverter","home_battery"].includes(t.type)?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({holo:p.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:vt("energy_pro")&&t.type==="inverter"?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${t.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({plant_card:p.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${t.plant_card!==!1?b`${this.len(this.t("holo_right"),t.plant_right??0,p=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,I(p)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),t.plant_up??0,p=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,I(p)))||void 0}),.25)}`:y}`:y}
      </div>
      ${t.type==="meter"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),t.export??null,void 0,c,p=>this.updateFurniture({export:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:y}
      ${t.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let p=(this._doc.settings.roof.strings??[]).filter(h=>h.inverter===t.id).map(h=>h.name);return b`<p class="fp3d-sub fp3d-wide">${p.length?this.t("inverter_strings",{names:p.join(", ")}):this.t("inverter_strings_none")}</p>`})():y}
      ${t.type==="home_battery"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(p=>{var h,f;return Ot(p)&&(((h=n.states[p])==null?void 0:h.attributes.device_class)==="battery"||((f=n.states[p])==null?void 0:f.attributes.unit_of_measurement)==="%")}),p=>this.updateFurniture({soc:p==="none"?null:p}))}
            ${this.entitySelect(this.t("furn_charge"),t.charge??null,void 0,c,p=>this.updateFurniture({charge:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:y}
      ${t.type==="wallbox"?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(p=>ws(p)||Ot(p)),p=>this.updateFurniture({status:p==="none"?null:p}))}
          </div>`:y}
      ${r?y:this.entitySelect(this.t("furn_extra"),t.extra??null,void 0,this.entityOptions(p=>p.startsWith("sensor.")),p=>this.updateFurniture({extra:p==="none"?null:p}))}
      ${!r||t.entity?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({confirm:p.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(t.marker??null,p=>this.updateFurniture({marker:p}))}${this.iconInput(t.icon,p=>this.updateFurniture({icon:p}))}</div>`:y}
      ${he(t.type)?b`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,ya(n,((u=an(n,this._doc.floors).get(t.id))==null?void 0:u.entity)??null,null),this.entityOptions(p=>Ot(p)),p=>this.updateFurniture({room_sensor:p}))}
          </div>`:y}
      ${t.type==="fridge_smart"?b`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,d,p=>this.updateFurniture({door_left:p}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,d,p=>this.updateFurniture({door_right:p}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:y}
      ${xi(t.type)?this.renderPictureRules(t):y}
      <p class="fp3d-sub">${this.t(r?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":o?"furn_links_hint_tv":he(t.type)?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){var g;let e=this.isAdmin,n=(this.packs??[]).flatMap(v=>v.items.filter($=>$.vehicle).map($=>({id:He(v.id,$.id),label:`${oe($)} \xB7 ${fe(v)}`}))),i=v=>{var $,k;return v.startsWith("device_tracker.")?((k=($=this.hass)==null?void 0:$.states[v])==null?void 0:k.attributes.source_type)==="router"?2:0:1},o=this.entityOptions(v=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(v)).sort((v,$)=>i(v.id)-i($.id)),s=this.entityOptions(v=>/^(sensor|input_select|select|input_text)\./.test(v)),r=t.type_entity?(g=this.hass)==null?void 0:g.states[t.type_entity]:void 0,l=Array.isArray(r==null?void 0:r.attributes.options)?r.attributes.options:[],c=t.types??[],d=v=>this.updateFurniture({types:v}),u=(v,$)=>b`<select ?disabled=${!e} @change=${k=>$(k.target.value||null)}>
        <option value="" ?selected=${!v}>${this.t("parking_vehicle_none")}</option>
        ${n.map(k=>b`<option value=${k.id} ?selected=${k.id===v}>${k.label}</option>`)}
      </select>`,p=this.floor,h=p==null?void 0:p.rooms.find(v=>v.points.length>=3&&Q([t.x,t.z],v.points)),f=t.vehicle?$t(t.vehicle):void 0,m=f?f.size[2]*(t.scale??1):0,_=!!h&&!!p&&m>p.height+1e-6;return b`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,o,v=>this.updateFurniture({entity:v==="none"?null:v}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${u(t.vehicle??null,v=>this.updateFurniture({vehicle:v}))}</label>
        ${n.length?y:b`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),v=>this.updateFurniture({scale:Math.min(150,Math.max(30,v))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,s,v=>this.updateFurniture({type_entity:v==="none"?null:v}))}
        ${t.type_entity?b`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${c.map((v,$)=>b`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${v.state}
                    ?disabled=${!e}
                    @change=${k=>d(c.map((P,M)=>M===$?{...P,state:k.target.value}:P))}
                  />
                  ${u(v.vehicle,k=>d(c.map((P,M)=>M===$?{...P,vehicle:k??""}:P)))}
                  <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>d(c.filter((k,P)=>P!==$))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(v=>b`<option value=${v}></option>`)}</datalist>
              ${e?b`<button class="fp3d-btn" @click=${()=>{var v;return d([...c,{state:l[c.length]??"",vehicle:((v=n[0])==null?void 0:v.id)??""}])}}>${this.t("parking_add_type")}</button>`:y}
            </div>`:y}
      </div>
      ${_?b`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Bt(this.hass,m,2),room:Bt(this.hass,p.height,2)})}</p>`:y}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(t)}`}renderCarForm(t){if(!vt("auto_pro"))return b`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return y;let e=this.hass,n=t.car??{},i=va(e,{entity:t.entity,car:{device:n.device}}),o=l=>this.updateFurniture({car:{...n,...l}}),s=this.entityOptions(l=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(l)),r=(l,c,d)=>this.entitySelect(this.t(c),n[l]??null,i[l],d,u=>o({[l]:u==="none"?"none":u}));return b`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),n.device??null,void 0,s,l=>o({device:l==="none"?null:l}))}
        ${r("soc","car_soc",this.entityOptions(l=>Ot(l)))}
        ${r("range","car_range",this.entityOptions(l=>Ot(l)))}
        ${r("charging","car_charging",this.entityOptions(l=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(l)))}
        ${r("plugged","car_plugged",this.entityOptions(l=>ws(l)))}
        ${r("lock","car_lock",this.entityOptions(l=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(l)))}
        ${r("climate","car_climate",this.entityOptions(l=>/^(climate|switch|binary_sensor|input_boolean)\./.test(l)))}
        ${r("tracker","car_tracker",this.entityOptions(l=>l.startsWith("device_tracker.")))}
      </div>
    </section>`}toggleLibrary(t){let e=new Set(this._libOpen);e.has(t)?e.delete(t):e.add(t),this._libOpen=e;try{localStorage.setItem("neonplan3d.library",JSON.stringify([...e]))}catch{}}librarySection(t,e,n,i){let o=$n(i).split(/\s+/).filter(Boolean),s=o.length?n.filter(l=>{let c=$n(`${l.label} ${l.search??""} ${l.type.replace(/[_:.]/g," ")} ${e}`);return o.every(d=>c.includes(d))}):n;if(i&&!s.length)return y;let r=i?!0:this._libOpen.has(t);return b`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${r} @click=${()=>this.toggleLibrary(t)}>
        <span class="fp3d-lib-caret">${r?"\u25BE":"\u25B8"}</span>${e} <span class="fp3d-lib-count">${s.length}</span>
      </button>
      ${r?b`<div class="fp3d-library">${s.map(l=>this.libraryButton(l.type,l.label))}</div>`:y}`}libraryHasHits(t){let e=$n(t).split(/\s+/).filter(Boolean);return[...Object.entries(ui).flatMap(([i,o])=>o.map(s=>`${this.t(`furn_${s}`)} ${Ut(qi,`furn_${s}`)} ${s.replace(/_/g," ")} ${this.t(`furn_group_${i}`)}`)),...(this.packs??[]).flatMap(i=>i.items.map(o=>`${oe(o)} ${Object.values(o.name).join(" ")} ${o.id.replace(/_/g," ")} ${i.name} ${fe(i)}`))].some(i=>{let o=$n(i);return e.every(s=>o.includes(s))})}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!t.includes(i.image)&&t.push(i.image);return t}renderPictureRules(t){let e=this.isAdmin,n=t.pictures??[];if(!vt("screens"))return b`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${qe("screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=g=>this.updateFurniture({pictures:g}),o=this.entityOptions(()=>!0),s=g=>["string","number","boolean"].includes(typeof g),r=g=>{var v,$;return Object.entries((($=(v=this.hass)==null?void 0:v.states[g])==null?void 0:$.attributes)??{}).filter(([k,P])=>s(P)&&k!=="friendly_name"&&k!=="icon").map(([k])=>k)},l=(g,v)=>{var k;let $=(k=this.hass)==null?void 0:k.states[g];return $?String((v?$.attributes[v]:$.state)??""):""},c=(g,v)=>{var P;let $=(P=this.hass)==null?void 0:P.states[g],k=!v&&Array.isArray($==null?void 0:$.attributes.options)?$.attributes.options:[];return k.length?k:[l(g,v)]},d=g=>`${g.entity}\0${g.attribute??""}`,u=[];n.forEach((g,v)=>{let $=u.find(k=>d(k)===d(g));$?$.rows.push(v):u.push({entity:g.entity,attribute:g.attribute??null,rows:[v]})});let p=(g,v)=>i(n.map(($,k)=>g.rows.includes(k)?{...$,...v}:$)),h=(g,v)=>i(n.map(($,k)=>k===g?{...$,...v}:$)),f=this.storedPictures(),m=this.entityOptions(g=>g.startsWith("camera.")),_=g=>g.image.startsWith("camera:")?g.image.slice(7):null;return b`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?b`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${g=>this.updateFurniture({screen_bg:g.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:y}
      ${u.map(g=>b`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${o}
            .value=${g.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${v=>{v.stopPropagation(),p(g,{entity:v.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${v=>{let $=v.target.value||null,k=l(g.entity,$);i(n.map((P,M)=>g.rows.includes(M)?{...P,attribute:$,state:g.rows[0]===M?k:P.state}:P))}}
          >
            <option value="" ?selected=${!g.attribute}>${this.t("picture_state_of")}</option>
            ${r(g.entity).map(v=>b`<option value=${v} ?selected=${v===g.attribute}>${v}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(g.entity,g.attribute)||"\u2013"})}</span>
          ${g.rows.map(v=>{var P,M;let $=n[v],k=!!this.hass&&ba(this.hass,$);return b`<div class="fp3d-picture-row ${k?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${v}"
                placeholder=${this.t("picture_state")}
                .value=${$.state}
                ?disabled=${!e}
                @change=${z=>h(v,{state:z.target.value})}
              />
              <datalist id="fp3d-picture-states-${v}"><option value="*"></option>${c(g.entity,g.attribute).map(z=>b`<option value=${z}></option>`)}</datalist>
              ${this._images[$.image]?b`<img class="fp3d-picture-thumb" src=${this._images[$.image].url} alt="" /> `:y}
              ${_($)&&((M=(P=this.hass)==null?void 0:P.states[_($)])!=null&&M.attributes.entity_picture)?b`<img class="fp3d-picture-thumb" src=${String(this.hass.states[_($)].attributes.entity_picture)} alt="" />`:y}
              <label class="fp3d-btn fp3d-picture-pick">
                ${$.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${z=>{this.uploadPicture(z,t,v)}} />
              </label>
              ${f.filter(z=>z!==$.image).length?b`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(z=>z!==$.image&&this._images[z]).map(z=>b`<button class="fp3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>h(v,{image:z})}><img src=${this._images[z].url} alt="" /></button>`)}
                  </div>`:y}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test($.image)?$.image:""}
                ?disabled=${!e}
                @change=${z=>{let R=z.target.value.trim();R&&h(v,{image:R})}}
              />
              ${m.length?b`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${m}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${_($)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${z=>{z.stopPropagation(),z.detail.value!=="none"?h(v,{image:`camera:${z.detail.value}`}):_($)&&h(v,{image:""})}}
                  ></fp3d-entity-picker>`:y}
              <span class="fp3d-sub">${k?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>i(n.filter((z,R)=>R!==v))}>✕</button>
            </div>`})}
          ${e?b`<button class="fp3d-btn" @click=${()=>i([...n,{entity:g.entity,attribute:g.attribute,state:l(g.entity,g.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:y}
        </div>`)}
      ${e?b`<button class="fp3d-btn" @click=${()=>{var g;return i([...n,{entity:((g=o[0])==null?void 0:g.id)??"",attribute:null,state:"on",image:""}])}}>${this.t("picture_add_entity")}</button>`:y}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){var p,h;let i=t.target,o=(p=i.files)==null?void 0:p[0];if(i.value="",!o)return;let s=await createImageBitmap(o),r=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*r),l.height=Math.round(s.height*r),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let c=l.toDataURL(o.type==="image/png"?"image/png":"image/jpeg",.85),d=J("pic");await oi(this.hass,d,c),this._images={...this._images,[d]:{url:c,aspect:l.height/l.width}};let u=((h=this.furnitureItem)==null?void 0:h.id)===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:u.map((f,m)=>m===n?{...f,image:d}:f)})}renderFurnitureLibrary(){let t=this.room,e=this._furnQuery.trim().toLowerCase();return b`<section>
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
      ${Object.entries(ui).map(([n,i])=>this.librarySection(`group:${n}`,this.t(`furn_group_${n}`),[...i,...n==="kitchen"&&(vt("fridge_smart")||vt("household"))?["fridge_smart"]:[]].map(o=>({type:o,label:this.t(`furn_${o}`),search:Ut(qi,`furn_${o}`)})),e))}
      ${(this.packs??[]).filter(n=>n.items.length).map(n=>this.librarySection(`pack:${n.id}`,fe(n),n.items.map(i=>({type:He(n.id,i.id),label:oe(i),search:Object.values(i.name).join(" ")})),e))}
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}libraryButton(t,e){let n=o=>{this.showPreview(t,o.currentTarget)},i=Vt(t)?"light":nn(t)?"switch":null;return b`<button
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
            <path d=${fn(i)} />
          </svg>`:y}
    </button>`}async showPreview(t,e){var o;let n=e.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...i};try{let s=await Vi(),[r,l,c]=Dt(t),d=s.furniturePreview({type:t,w:r,d:l,h:c,variant:null,lamp:bi[t]??null},180,this.packs??[]);((o=this._preview)==null?void 0:o.type)===t&&(this._preview={type:t,url:d,...i})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?b`<div class="fp3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?b`<img src=${t.url} alt="" />`:b`<span class="fp3d-preview-wait"></span>`}
      <b>${Re(this.hass,t.type)}</b>
    </div>`:y}renderDeviceForm(t){var r;let e=this.isAdmin,n=at(t.entity_id),i=n==="light",o=t.mount??"ceiling",s=n?yi(n,((r=this.floor)==null?void 0:r.height)??2.5,i?o:null):1;return b`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?fn(n):""} />
        </svg>
        ${_t(this.hass,t.entity_id)}
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
              >`:y}
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
            ${this.renderCameraDetections(t.entity_id)}`:y}
        ${n&&la.has(n)?b`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${l=>this.updateDevice({confirm:l.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:y}
        ${vt("energy_pro")&&Zl(this.hass,t.entity_id)?b`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!e} @change=${l=>this.updateDevice({holo:l.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:y}
        ${this.markerSelect(t.marker??null,l=>this.updateDevice({marker:l}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${t.name??""} ?disabled=${!e} maxlength="60" placeholder=${_t(this.hass,t.entity_id)} @change=${l=>this.updateDevice({name:l.target.value.trim()||null})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!e} placeholder=${this.t("aliases_placeholder")} @change=${l=>this.updateDevice({aliases:pi(l.target.value)})}
        /></label>
        ${t.name?b`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${l=>this.updateDevice({show_name:l.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        ${this.iconInput(t.icon,l=>this.updateDevice({icon:l}))}
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
    </section>`}renderDeviceList(t){var P,M,z,R,A;let e=this.isAdmin,n=this.hass,i=t.area_id?(M=(P=n==null?void 0:n.areas)==null?void 0:P[t.area_id])==null?void 0:M.name:void 0,o=n?$e(n,t.area_id).filter(w=>rn(at(w))):[],s=new Set([...((z=this.floor)==null?void 0:z.placements.filter(w=>Q([w.x,w.z],t.points)).map(w=>w.entity_id))??[],...((R=this.floor)==null?void 0:R.furniture.filter(w=>Vt(w.type)&&w.entity&&Q([w.x,w.z],t.points)).map(w=>w.entity))??[]]),r=n?$i(n,o):[],l=r.map(w=>w.primary).filter(w=>!s.has(w)),c=this._deviceQuery.trim().toLowerCase(),d=w=>!c||_t(n,w,i).toLowerCase().includes(c)||w.includes(c),u=(A=this.floor)==null?void 0:A.placements.filter(w=>at(w.entity_id)==="light"&&(w.mount??"ceiling")==="ceiling"&&Q([w.x,w.z],t.points)).length,p=new Set(t.panel??[]),h=new Set(t.hidden??[]),f=new Set(t.no_state??[]),m=new Map;for(let w of this._doc.floors)for(let x of[...w.placements.map(E=>[E.entity_id,E.x,E.z]),...w.furniture.filter(E=>Vt(E.type)&&E.entity).map(E=>[E.entity,E.x,E.z])]){let E=w.rooms.find(S=>Q([x[1],x[2]],S.points));E&&E.id!==t.id&&m.set(x[0],E.name)}let _=(w,x=!1,E=i,S=!1)=>{let T=s.has(w),L=T?void 0:m.get(w);return b`<div class="fp3d-row fp3d-dev-row ${x||S?"fp3d-dev-extra":""} ${h.has(w)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${T?"":"fp3d-muted"}" ?disabled=${!T} @click=${()=>this.selectItem("device",w)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${fn(at(w))} />
          </svg>
          <span>${_t(n,w,E)}${L?b`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:L})}</small>`:y}</span>
        </button>
        ${e&&!x?b`<button
              class="fp3d-pin ${h.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${h.has(w)}
              title=${this.t(h.has(w)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:h.has(w)?[...h].filter(j=>j!==w):[...h,w]})}
            >
              ${h.has(w)?"\u{1F648}":"\u{1F441}"}
            </button>`:y}
        ${e&&!x&&!h.has(w)?b`<button
              class="fp3d-pin ${f.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(w)}
              title=${this.t(f.has(w)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:f.has(w)?[...f].filter(j=>j!==w):[...f,w]})}
            >
              ${f.has(w)?"\u2205":"Aa"}
            </button>`:y}
        ${e&&!T?b`<button
              class="fp3d-pin ${p.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${p.has(w)}
              title=${this.t(p.has(w)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:p.has(w)?[...p].filter(j=>j!==w):[...p,w]})}
            >
              ${p.has(w)?"\u2605":"\u2606"}
            </button>`:y}
        ${e?T?b`<button class="fp3d-link" @click=${()=>this.removeDevice(w)}>${this.t("devices_remove")}</button>`:b`<button class="fp3d-link" @click=${()=>this.placeDevices([w])}>${this.t("devices_place")}</button>`:y}
      </div>`},g=e?this._devSource:"area",v=w=>{this._devSource=w,this._deviceQuery=""},$=b`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${w=>this._deviceQuery=w.target.value}
    />`,k=()=>{confirm(this.t("devices_place_all_confirm",{n:l.length}))&&this.placeDevices(l)};return b`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?b`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${g==="area"} @click=${()=>v("area")}>${this.t("devices_src_area")}${o.length?` (${r.length})`:""}</button>
            <button aria-pressed=${g==="other"} @click=${()=>v("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${g==="none"} @click=${()=>v("none")}>${this.t("devices_src_none")}</button>
          </div>`:y}
      ${g!=="area"?b`${$}${this.renderDeviceExtras(t,_,g)}`:t.area_id?o.length?b`${e&&(u??0)>=2?b`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:y}
              ${o.length>8?$:y}
              <div class="fp3d-room-list">
                ${r.map(w=>{let x=w.others.filter(d),E=this._expanded.has(w.primary)||!!c&&x.length>0;return!d(w.primary)&&!x.length?y:b`${_(w.primary)}
                  ${w.others.length?b`<button
                        class="fp3d-more"
                        @click=${()=>{let S=new Set(this._expanded);S.has(w.primary)?S.delete(w.primary):S.add(w.primary),this._expanded=S}}
                      >
                        ${E?this.t("devices_less"):this.t("devices_more",{n:w.others.length})}
                      </button>`:y}
                  ${E?(c?x:w.others).map(S=>_(S,!1,i,!0)):y}`})}
              </div>
              ${e&&l.length>1?b`<button class="fp3d-link fp3d-place-all" @click=${k}>${this.t("devices_place_all_n",{n:l.length})}</button>`:y}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`:b`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceExtras(t,e,n){let i=this.hass;if(!i)return y;let o=50,s=this._deviceQuery.trim().toLowerCase(),r=(d,u)=>!s||`${_t(i,d,u)} ${d} ${u??""}`.toLowerCase().includes(s),l=d=>d>0?b`<p class="fp3d-sub">${this.t("devices_narrow",{n:d})}</p>`:y;if(n==="other"){let d=0,u=0,p=ca(i,t.area_id).map(h=>{let f=h.ids.filter(_=>r(_,h.name)),m=f.slice(0,Math.max(0,o-d));return d+=m.length,u+=f.length-m.length,m.length?b`<div class="fp3d-dev-area">${h.name}</div>${m.map(_=>e(_,!1,h.name))}`:y});return d?b`<div class="fp3d-room-list">${p}</div>${l(u)}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let c=ua(i).filter(d=>r(d));return c.length?b`<div class="fp3d-room-list">${c.slice(0,o).map(d=>e(d))}</div>${l(c.length-Math.min(c.length,o))}`:b`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(t){let e=this.hass;if(!e)return y;let n=(s,r)=>{let l={...t.climate??{},[s]:r},c=Object.values(l).every(d=>d==null);this.updateRoom({climate:c?null:l})},i=!!t.climate&&Object.values(t.climate).some(s=>s!=null),o=(s,r)=>{var p;let l=Eo[s],c=pa(e,this.floor??null,{...t,climate:null},s),d=Io[s],u=this.entityOptions(h=>{var f,m;return Ot(h)&&((f=e.states[h])==null?void 0:f.attributes.device_class)===l||!!d&&h.startsWith("climate.")&&typeof((m=e.states[h])==null?void 0:m.attributes[d])=="number"}).map(h=>({...h,rank:(Ne(e,h.id)===t.area_id?0:1)+(Ao(e,h.id)?0:2)})).sort((h,f)=>h.rank-f.rank).map(({id:h,label:f})=>({id:h,label:f}));return this.entitySelect(r,((p=t.climate)==null?void 0:p[s])??null,c[0]??null,u,h=>n(s,h))};return b`<details class="fp3d-points" ?open=${i}>
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
                  ${this._bgLevel?b`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:y}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?b`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:b`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${jn(this.t("bg_ruler_length"),this.unit)}
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
    </details>`}async loadHistory(){if(this.hass)try{this._history=await Ys(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await Qs(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await tr(this.hass),e={};for(let i of Zr(t.building))try{e[i]=await ro(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);xo(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...t,exported_at:new Date().toISOString(),images:e}))}catch(t){alert(this.t("backup_import_error",{error:String((t==null?void 0:t.message)??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){var o,s;let e=t.target,n=(o=e.files)==null?void 0:o[0];if(e.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if((i==null?void 0:i.format)!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let r=await er(this.hass,i.building,i.packs??[]),l=0;for(let[d,u]of Object.entries(i.images??{}))try{await oi(this.hass,d,u),l++}catch{}this.setDoc(gi(r.building)),this._floorId=((s=r.building.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let c=r.skipped.length?` ${this.t("backup_full_skipped",{packs:r.skipped.map(d=>d.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:r.packs,pictures:l})+c}catch(r){let{code:l,message:c}=r??{};alert(this.t("backup_import_error",{error:c??l??String(r)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);xo(`neonplan3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(Jr(this._doc,t),null,2))}async importPlan(t){var o,s;let e=t.target,n=(o=e.files)==null?void 0:o[0];if(e.value="",!n||!this.hass)return;let i;try{i=Qr(await n.text())}catch(r){let l=r.message;alert(l==="not_json"?this.t("import_error_not_json"):l==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:l}));return}confirm(this.t("backup_import_confirm"))&&(await Js(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=((s=i.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){var e;return new Date(t.saved_at*1e3).toLocaleString((e=this.hass)==null?void 0:e.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return b`<details
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
    </details>`}renderBackdrop(){let t=this._doc.settings.backdrop??{},e=o=>this.change(s=>s.settings.backdrop={...s.settings.backdrop??{},...o}),n=t.kind??"",i=(o,s,r,l)=>b`<label class="fp3d-field"
        >${this.t(o)}
        <input type="color" .value=${s??r} @change=${c=>e({[l]:c.target.value})} />
      </label>`;return b`<details class="fp3d-section">
      <summary>🖼 ${this.t("backdrop")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("backdrop_kind")}
          <select @change=${o=>e({kind:o.target.value||null})}>
            ${["","color","gradient","image"].map(o=>b`<option value=${o} ?selected=${n===o}>${this.t(`backdrop_${o||"look"}`)}</option>`)}
          </select></label
        >
        ${n==="color"||n==="gradient"?i(n==="gradient"?"backdrop_top":"backdrop_color",t.color,"#0b1426","color"):y}
        ${n==="gradient"?i("backdrop_bottom",t.color2,"#03060c","color2"):y}
        ${n==="image"?b`<label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_image_url")}
                <input type="text" placeholder="/local/hintergrund.jpg" .value=${t.image??""} @change=${o=>e({image:o.target.value.trim()||null})}
              /></label>
              <label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_dim")} (${Math.round((t.dim??.45)*100)} %)
                <input type="range" min="0" max="90" .value=${String(Math.round((t.dim??.45)*100))} @change=${o=>e({dim:Number(o.target.value)/100})}
              /></label>
              ${t.image&&!dl(t.image)?b`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.t("backdrop_image_bad")}</p>`:y}`:y}
      </div>
      <p class="fp3d-sub">${this.t("backdrop_hint")}</p>
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
      ${t.level!=null?b`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>e({level:null})}>${this.t("terrain_reset")}</button></div>`:y}
    </details>`}setSettings(t){let e=structuredClone(this._doc);Object.assign(e.settings,t),this.setDoc(e)}renderHouseSettings(){var n;let t=this._doc.settings,e=i=>this.setSettings(i);return b`<details class="fp3d-section">
      <summary>${this.t("settings_house")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),t.wall_exterior,i=>e({wall_exterior:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.len(this.t("wall_interior"),t.wall_interior,i=>e({wall_interior:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.len(this.t("grid"),t.grid,i=>e({grid:Math.min(1,Math.max(.01,i))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${i=>{let o=i.target.value;e({units:o==="metric"||o==="imperial"?o:null})}}>
            <option value="auto" ?selected=${!t.units}>${this.t("units_auto",{unit:this.t(Ho(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
            <option value="metric" ?selected=${t.units==="metric"}>${this.t("units_metric")}</option>
            <option value="imperial" ?selected=${t.units==="imperial"}>${this.t("units_imperial")}</option>
          </select></label
        >
        ${this.num(this.t("north"),t.north,i=>e({north:(Math.round(i)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide" title=${this.t("editor_floor_hint")}
          >${this.t("editor_floor")}
          <select @change=${i=>e({editor_floor:i.target.value||null})}>
            <option value="" ?selected=${!t.editor_floor}>${this.t("editor_floor_auto")}</option>
            ${this._doc.floors.map(i=>b`<option value=${i.id} ?selected=${t.editor_floor===i.id}>${i.name}</option>`)}
          </select></label
        >
        ${this.entitySelect(this.t("hh_notes"),((n=t.household)==null?void 0:n.notes)??null,void 0,this.entityOptions(i=>/^(input_text|text|sensor)\./.test(i)),i=>this.setHousehold({notes:i==="none"?null:i}))}
        <p class="fp3d-sub fp3d-wide">${this.t("hh_notes_hint")}</p>
      </div>
      <p class="fp3d-sub">${this.t("north_hint")}</p>
    </details>`}renderRoofBasics(){let t=this._doc.settings,e=n=>this.setSettings(n);return b`<section>
      <h3>${this.t("roof_basics")}</h3>
      <div class="fp3d-form">
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
            >`:y}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):y}
        ${t.roof.type!=="none"?this.len(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):y}
      </div>
    </section>`}renderWeatherSettings(){let t=this._doc.settings,e=n=>this.setSettings(n);return b`<details class="fp3d-section">
      <summary>${this.t("settings_weather")}</summary>
      <div class="fp3d-form">
        ${this.hass?this.entitySelect(this.t("weather_entity"),t.weather_entity??null,qa(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>e({weather_entity:n})):y}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${Er.map(n=>{let i=t.weather_effects??uo;return b`<label class="fp3d-check"
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
        ${this.hass?b`${this.entitySelect(this.t("rain_entity"),t.rain_entity??null,void 0,this.entityOptions(n=>Ka(this.hass,n)),n=>e({rain_entity:n==="none"?null:n}))}
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
      <p class="fp3d-sub">${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[yn,Di,ie`
      :host {
        display: block;
        height: 100%;
      }
      .fp3d-editor {
        position: relative;
        display: grid;
        grid-template-columns: 1fr var(--fp3d-side-w, 320px);
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
      .fp3d-side-grip {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 8px;
        cursor: col-resize;
        touch-action: none;
        z-index: 2;
      }
      .fp3d-side-grip:hover {
        background: linear-gradient(90deg, rgba(55, 224, 255, 0.35), transparent);
      }
      .fp3d-side {
        position: relative;
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
      .fp3d-wv-stroke {
        stroke-dasharray: 0.08 0.05;
        opacity: 0.55;
      }
      .fp3d-tech-ask {
        display: grid;
        gap: 4px;
        padding: 8px;
        margin-bottom: 6px;
        border: 1px solid var(--fp3d-accent);
        border-radius: 8px;
        background: rgba(91, 124, 255, 0.08);
      }
      .fp3d-tech-ask b {
        font-size: 12.5px;
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
      .fp3d-voice-list {
        margin: 0 0 8px;
        padding-left: 18px;
        font-size: 13px;
        color: var(--fp3d-muted);
        columns: 2;
        column-gap: 18px;
      }
      .fp3d-voice-list li {
        break-inside: avoid;
        margin: 2px 0;
      }
      .fp3d-seg-settings {
        margin-left: auto;
      }
      .fp3d-menu-right {
        right: 0;
        left: auto;
      }
      .fp3d-narrow .fp3d-settings-word {
        display: none;
      }
      .fp3d-dialog-veil {
        position: fixed;
        inset: 0;
        z-index: 30;
        display: grid;
        place-items: center;
        padding: 16px;
        background: rgba(2, 6, 14, 0.55);
      }
      .fp3d-dialog {
        width: min(640px, 100%);
        max-height: calc(100% - 16px);
        overflow: auto;
        padding: 14px 18px 18px;
        border-radius: 18px;
        border: 1px solid var(--fp3d-accent, #22d3ee);
        background: var(--fp3d-panel, #0d1628);
        box-shadow: 0 0 40px rgba(34, 211, 238, 0.2);
        outline: none;
      }
      .fp3d-dialog-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 6px;
      }
      .fp3d-dialog-head h3 {
        margin: 0;
      }
      .fp3d-dialog details.fp3d-section > summary {
        display: none;
      }
      .fp3d-dialog details.fp3d-section {
        border: 0;
        padding: 0;
        margin: 0;
      }
      .fp3d-narrow .fp3d-dialog-veil {
        padding: 0;
      }
      .fp3d-narrow .fp3d-dialog {
        width: 100%;
        max-height: 100%;
        border-radius: 0;
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
      .fp3d-room-btn {
        flex: 1;
        min-width: 0;
        border-bottom: none;
        padding: 0;
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",ks);function cu(a,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i||1,s=Math.min(1,Math.max(0,((a[0]-t[0])*n+(a[1]-t[1])*i)/o));return Math.hypot(a[0]-t[0]-n*s,a[1]-t[1]-i*s)}function $n(a){return a.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var qi={language:"en"};function Ot(a){return/^(sensor|input_number|number)\./.test(a)}function ws(a){return/^(binary_sensor|input_boolean)\./.test(a)}export{ks as Fp3dEditor};
