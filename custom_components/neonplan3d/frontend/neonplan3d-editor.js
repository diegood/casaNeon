var ti=globalThis,ei=ti.ShadowRoot&&(ti.ShadyCSS===void 0||ti.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,no=Symbol(),Ks=new WeakMap,Sn=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==no)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ei&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=Ks.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&Ks.set(e,t))}return t}toString(){return this.cssText}},Us=r=>new Sn(typeof r=="string"?r:r+"",void 0,no),qt=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new Sn(e,r,no)},Gs=(r,t)=>{if(ei)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=ti.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,r.appendChild(n)}},io=ei?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return Us(e)})(r):r;var{is:yd,defineProperty:$d,getOwnPropertyDescriptor:wd,getOwnPropertyNames:xd,getOwnPropertySymbols:kd,getPrototypeOf:Md}=Object,ni=globalThis,Ys=ni.trustedTypes,Sd=Ys?Ys.emptyScript:"",oo=ni.reactiveElementPolyfillSupport,En=(r,t)=>r,so={toAttribute(r,t){switch(t){case Boolean:r=r?Sd:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Js=(r,t)=>!yd(r,t),Qs={attribute:!0,type:String,converter:so,reflect:!1,useDefault:!1,hasChanged:Js};Symbol.metadata??=Symbol("metadata"),ni.litPropertyMetadata??=new WeakMap;var he=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Qs){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&$d(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:o}=wd(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let a=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Qs}static _$Ei(){if(this.hasOwnProperty(En("elementProperties")))return;let t=Md(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(En("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(En("properties"))){let e=this.properties,n=[...xd(e),...kd(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(io(i))}else t!==void 0&&e.push(io(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gs(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var o;let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:so).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){var o,s;let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let a=n.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:so;this._$Em=i;let d=l.fromAttribute(e,a.type);this[i]=d??((s=this._$Ej)==null?void 0:s.get(i))??d,this._$Em=null}}requestUpdate(t,e,n,i=!1,o){var s;if(t!==void 0){let a=this.constructor;if(i===!1&&(o=this[t]),n??=a.getPropertyOptions(t),!((n.hasChanged??Js)(o,e)||n.useDefault&&n.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(a._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,s]of i){let{wrapped:a}=s,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};he.elementStyles=[],he.shadowRootOptions={mode:"open"},he[En("elementProperties")]=new Map,he[En("finalized")]=new Map,oo==null||oo({ReactiveElement:he}),(ni.reactiveElementVersions??=[]).push("2.1.2");var lo=globalThis,Zs=r=>r,ii=lo.trustedTypes,Xs=ii?ii.createPolicy("lit-html",{createHTML:r=>r}):void 0,co="$lit$",fe=`lit$${Math.random().toFixed(9).slice(2)}$`,uo="?"+fe,Ed=`<${uo}>`,We=document,An=()=>We.createComment(""),zn=r=>r===null||typeof r!="object"&&typeof r!="function",po=Array.isArray,sr=r=>po(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ro=`[ 	
\f\r]`,Pn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tr=/-->/g,er=/>/g,De=RegExp(`>|${ro}(?:([^\\s"'>=/]+)(${ro}*=${ro}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),nr=/'/g,ir=/"/g,rr=/^(?:script|style|textarea|title)$/i,ho=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),_=ho(1),j=ho(2),Fp=ho(3),Xt=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),or=new WeakMap,Ve=We.createTreeWalker(We,129);function ar(r,t){if(!po(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xs!==void 0?Xs.createHTML(t):t}var lr=(r,t)=>{let e=r.length-1,n=[],i,o=t===2?"<svg>":t===3?"<math>":"",s=Pn;for(let a=0;a<e;a++){let l=r[a],d,c,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===Pn?c[1]==="!--"?s=tr:c[1]!==void 0?s=er:c[2]!==void 0?(rr.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=De):c[3]!==void 0&&(s=De):s===De?c[0]===">"?(s=i??Pn,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?De:c[3]==='"'?ir:nr):s===ir||s===nr?s=De:s===tr||s===er?s=Pn:(s=De,i=void 0);let h=s===De&&r[a+1].startsWith("/>")?" ":"";o+=s===Pn?l+Ed:u>=0?(n.push(d),l.slice(0,u)+co+l.slice(u)+fe+h):l+fe+(u===-2?a:h)}return[ar(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},In=class r{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,s=0,a=t.length-1,l=this.parts,[d,c]=lr(t,e);if(this.el=r.createElement(d,n),Ve.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Ve.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(co)){let p=c[s++],h=i.getAttribute(u).split(fe),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:f[2],strings:h,ctor:f[1]==="."?si:f[1]==="?"?ri:f[1]==="@"?ai:Be}),i.removeAttribute(u)}else u.startsWith(fe)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(rr.test(i.tagName)){let u=i.textContent.split(fe),p=u.length-1;if(p>0){i.textContent=ii?ii.emptyScript:"";for(let h=0;h<p;h++)i.append(u[h],An()),Ve.nextNode(),l.push({type:2,index:++o});i.append(u[p],An())}}}else if(i.nodeType===8)if(i.data===uo)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(fe,u+1))!==-1;)l.push({type:7,index:o}),u+=fe.length-1}o++}}static createElement(t,e){let n=We.createElement("template");return n.innerHTML=t,n}};function Ne(r,t,e=r,n){var s,a;if(t===Xt)return t;let i=n!==void 0?(s=e._$Co)==null?void 0:s[n]:e._$Cl,o=zn(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=Ne(r,i._$AS(r,t.values),i,n)),t}var oi=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??We).importNode(e,!0);Ve.currentNode=i;let o=Ve.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new ln(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new li(o,this,t)),this._$AV.push(d),l=n[++a]}s!==(l==null?void 0:l.index)&&(o=Ve.nextNode(),s++)}return Ve.currentNode=We,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},ln=class r{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ne(this,t,e),zn(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==Xt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):sr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&zn(this._$AH)?this._$AA.nextSibling.data=t:this.T(We.createTextNode(t)),this._$AH=t}$(t){var o;let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=In.createElement(ar(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{let s=new oi(i,this),a=s.u(this.options);s.p(e),this.T(a),this._$AH=s}}_$AC(t){let e=or.get(t.strings);return e===void 0&&or.set(t.strings,e=new In(t)),e}k(t){po(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let o of t)i===e.length?e.push(n=new r(this.O(An()),this.O(An()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){let i=Zs(t).nextSibling;Zs(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},Be=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(t,e=this,n,i){let o=this.strings,s=!1;if(o===void 0)t=Ne(this,t,e,0),s=!zn(t)||t!==this._$AH&&t!==Xt,s&&(this._$AH=t);else{let a=t,l,d;for(t=o[0],l=0;l<o.length-1;l++)d=Ne(this,a[n+l],e,l),d===Xt&&(d=this._$AH[l]),s||=!zn(d)||d!==this._$AH[l],d===y?t=y:t!==y&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}s&&!i&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},si=class extends Be{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},ri=class extends Be{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},ai=class extends Be{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=Ne(this,t,e,0)??y)===Xt)return;let n=this._$AH,i=t===y&&n!==y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==y&&(n===y||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},li=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Ne(this,t)}},cr={M:co,P:fe,A:uo,C:1,L:lr,R:oi,D:sr,V:Ne,I:ln,H:Be,N:ri,U:ai,B:si,F:li},ao=lo.litHtmlPolyfillSupport;ao==null||ao(In,ln),(lo.litHtmlVersions??=[]).push("3.3.3");var dr=(r,t,e)=>{let n=(e==null?void 0:e.renderBefore)??t,i=n._$litPart$;if(i===void 0){let o=(e==null?void 0:e.renderBefore)??null;n._$litPart$=i=new ln(t.insertBefore(An(),o),o,void 0,e??{})}return i._$AI(r),i};var Fn=globalThis,jt=class extends he{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Xt}},ur;jt._$litElement$=!0,jt.finalized=!0,(ur=Fn.litElementHydrateSupport)==null||ur.call(Fn,{LitElement:jt});var fo=Fn.litElementPolyfillSupport;fo==null||fo({LitElement:jt});(Fn.litElementVersions??=[]).push("4.2.2");var cn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qe=r=>(...t)=>({_$litDirective$:r,values:t}),xe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Rn=class extends xe{constructor(t){if(super(t),this.it=y,t.type!==cn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===Xt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Rn.directiveName="unsafeHTML",Rn.resultType=1;var pr=qe(Rn);var{I:Pd}=cr,hr=r=>r;var mr=r=>r.strings===void 0,fr=()=>document.createComment(""),dn=(r,t,e)=>{var o;let n=r._$AA.parentNode,i=t===void 0?r._$AB:t._$AA;if(e===void 0){let s=n.insertBefore(fr(),i),a=n.insertBefore(fr(),i);e=new Pd(s,a,r,r.options)}else{let s=e._$AB.nextSibling,a=e._$AM,l=a!==r;if(l){let d;(o=e._$AQ)==null||o.call(e,r),e._$AM=r,e._$AP!==void 0&&(d=r._$AU)!==a._$AU&&e._$AP(d)}if(s!==i||l){let d=e._$AA;for(;d!==s;){let c=hr(d).nextSibling;hr(n).insertBefore(d,i),d=c}}}return e},ke=(r,t,e=r)=>(r._$AI(t,e),r),Ad={},gr=(r,t=Ad)=>r._$AH=t,_r=r=>r._$AH,ci=r=>{r._$AR(),r._$AA.remove()};var Tn=(r,t)=>{var n;let e=r._$AN;if(e===void 0)return!1;for(let i of e)(n=i._$AO)==null||n.call(i,t,!1),Tn(i,t);return!0},di=r=>{let t,e;do{if((t=r._$AM)===void 0)break;e=t._$AN,e.delete(r),r=t}while((e==null?void 0:e.size)===0)},br=r=>{for(let t;t=r._$AM;r=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(r))break;e.add(r),Fd(t)}};function zd(r){this._$AN!==void 0?(di(this),this._$AM=r,br(this)):this._$AM=r}function Id(r,t=!1,e=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=e;o<n.length;o++)Tn(n[o],!1),di(n[o]);else n!=null&&(Tn(n,!1),di(n));else Tn(this,r)}var Fd=r=>{r.type==cn.CHILD&&(r._$AP??=Id,r._$AQ??=zd)},ui=class extends xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),br(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),e&&(Tn(this,t),di(this))}setValue(t){if(mr(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var mo=new WeakMap,vr=qe(class extends ui{render(r){return y}update(r,[t]){var n;let e=t!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=(n=r.options)==null?void 0:n.host,this.rt(this.ct=r.element)),y}rt(r){if(this.G!==void 0)if(this.isConnected||(r=void 0),typeof this.G=="function"){let t=this.ht??globalThis,e=mo.get(t);e===void 0&&(e=new WeakMap,mo.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){var r,t;return typeof this.G=="function"?(r=mo.get(this.ht??globalThis))==null?void 0:r.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});async function go(r,t){return(await r.callWS({type:"neonplan3d/image/get",image_id:t})).data}async function pi(r,t,e){await r.callWS({type:"neonplan3d/image/set",image_id:t,data:e})}async function yr(r){return(await r.callWS({type:"neonplan3d/history/list"})).snapshots}async function $r(r){await r.callWS({type:"neonplan3d/history/snapshot"})}async function wr(r,t){return(await r.callWS({type:"neonplan3d/history/restore",snapshot_id:t})).revision}async function xr(r,t){return r.callWS({type:"neonplan3d/packs/import",pack:t})}async function kr(r,t){await r.callWS({type:"neonplan3d/packs/remove",pack_id:t})}function Mr(r){return r.callWS({type:"neonplan3d/backup/export"})}function Sr(r,t,e){return r.callWS({type:"neonplan3d/backup/import",building:t,packs:e})}async function Er(r){return r.callWS({type:"neonplan3d/voice/settings"})}async function Pr(r,t){return r.callWS({type:"neonplan3d/voice/settings/set",sentences:t})}var Ar=[.16,.16,.035],zr=[.16,.035,.16],Ir=2.1;function Fr(r){return r.variant==="wall"}function Rd(r){let t=new Map;for(let n of Object.values(r.entities??{}))n.device_id&&t.set(n.device_id,[...t.get(n.device_id)??[],n.entity_id]);let e=new Set;for(let[n,i]of t){let o=s=>{var a;return`${s} ${((a=r.states[s])==null?void 0:a.attributes.friendly_name)??""}`.toLowerCase()};i.some(s=>s.startsWith("sensor.")&&_o(r.states[s]))&&i.some(s=>s.startsWith("sensor.")&&/clients|clientes/.test(o(s)))&&e.add(n)}return e}function Td(r,t){var n,i;let e=t&&t!=="none"?(i=(n=r.entities)==null?void 0:n[t])==null?void 0:i.device_id:null;return e&&r.entities?Object.values(r.entities).filter(o=>o.device_id===e).map(o=>o.entity_id):[]}function _o(r){let t=r==null?void 0:r.attributes.options;return Array.isArray(t)&&t.includes("connected")&&t.includes("disconnected")}function Rr(r,t){let e=Td(r,t.entity),n=o=>{var s,a,l;return`${o} ${((s=r.states[o])==null?void 0:s.attributes.friendly_name)??""} ${((l=(a=r.entities)==null?void 0:a[o])==null?void 0:l.translation_key)??""}`.toLowerCase()},i=o=>e.find(s=>s.startsWith("sensor.")&&o.test(n(s)))??null;return{state:e.find(o=>o.startsWith("sensor.")&&_o(r.states[o]))??null,clients:i(/clients|clientes/),led:e.find(o=>o.startsWith("light."))??null,cpu:i(/cpu/),memory:i(/memor/),restart:e.find(o=>{var s;return o.startsWith("button.")&&(((s=r.states[o])==null?void 0:s.attributes.device_class)==="restart"||/restart|reinici/.test(n(o)))})??null}}function Tr(r){let t=[];for(let e of Rd(r)){let n=Object.values(r.entities??{}).filter(o=>o.device_id===e).map(o=>o.entity_id),i=n.find(o=>o.startsWith("device_tracker.")&&!o.startsWith("device_tracker.unifi_default_"))??n.find(o=>o.startsWith("sensor.")&&_o(r.states[o]));i&&t.push({id:i,label:Ld(r,i)})}return t.sort((e,n)=>e.label.localeCompare(n.label))}function Ld(r,t){var i,o,s,a;let e=(o=(i=r.entities)==null?void 0:i[t])==null?void 0:o.device_id,n=e?(s=r.devices)==null?void 0:s[e]:void 0;return(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||((a=r.states[t])==null?void 0:a.attributes.friendly_name)||t}var Od=[],bo=new Map,Lr=0;function Or(r){Od=r,bo=new Map(r.flatMap(t=>t.items.map(e=>[Me(t.id,e.id),e]))),Lr++}function Cr(){return Lr}function Me(r,t){return`pack:${r}:${t}`}function Se(r){return r.startsWith("pack:")}function Ke(r){return Se(r)?r.endsWith(":curtain_motor")?"curtain":r.endsWith(":screen_roll")?"screen":null:null}function me(r){return r==="robot_vacuum"||Se(r)&&r.endsWith(":robot_vacuum")}function jr(r){return Se(r)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(r)}var Cd={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Hr(r){var t;return(t=$t(r))==null?void 0:t.parts.find(e=>e.screen)}function Dr(r){let t=$t(r);if(!t)return!1;let[e,n,i]=t.size;return t.parts.some(o=>{if(!o.screen)return!1;let[s,a]=[o.w*e,o.d*n,o.h*i].sort((l,d)=>d-l);return s>=.06&&a>=.06})}function $t(r){if(!Se(r))return;let t=bo.get(r);if(t)return t;let[,e,...n]=r.split(":"),i=Cd[e];return i?bo.get(`pack:${i}:${n.join(":")}`):void 0}function Ht(r){var t;return le[r]??((t=$t(r))==null?void 0:t.size)??[.6,.6,.8]}function Ue(r){var t,e;return Kr.has(r)||!!((t=$t(r))!=null&&t.electric)||!!((e=$t(r))!=null&&e.light)}function ae(r){return r.name.es??r.name.en??Object.values(r.name)[0]??r.id}var jd={architecture:"Arquitectura y acabados",bath:"Ba\xF1o",bedroom:"Dormitorio",cinema:"Cine en casa y Hi-Fi",exclusive:"Exclusivo: frigor\xEDfico inteligente",fitness:"Fitness",garage:"Garaje y taller",garden:"Jard\xEDn y terraza",kids:"Cuarto infantil",kitchen:"Cocina",living:"Sal\xF3n",office:"Oficina y gaming",pets:"Mascotas",smarthome:"Smart home y tecnolog\xEDa",stairs:"Escaleras y barandillas",utility:"Lavadero e instalaciones",vehicles:"Veh\xEDculos",starter:"Pack de inicio",pro_auto:"Pro: Auto Pro",pro_timetravel:"Pro: Viaje en el tiempo",pro_pool:"Pro: Piscina Pro",pro_camera:"Pro: Cabina de c\xE1mara",pro_energy:"Pro: Energ\xEDa Pro",pro_screens:"Pro: Pantallas en directo",pro_sound:"Pro: Sonido y Cine",pro_weather:"Pro: Tiempo exterior"};function ge(r){let t=r.id.replace(/^mastershort\./,""),e=t.endsWith("_sample"),n=jd[e?t.slice(0,-7):t];return n?e?`${n} \u2013 muestra`:n:r.name}function Tt(r,t){let e=$t(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return Vr;if(t.type==="access_point")return t.variant==="wall"?Ir:Math.max(0,r.height-Math.max(.005,t.h));if(Wr.has(t.type))return Math.max(0,r.height-Nr(t.type,t.h));if(t.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return qr(r,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,r.height-t.h);default:return e?0:Br(t)}}var hi={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},Ur=Object.keys(hi),Gr=1;function Yr(r){return r.variant&&hi[r.variant]?r.variant:"80"}function Qr(r,t){var a,l;let e=t.entity&&t.entity!=="none"?t.entity:null,n=e?(l=(a=r.entities)==null?void 0:a[e])==null?void 0:l.device_id:null,i=n&&r.entities?Object.values(r.entities).filter(d=>d.device_id===n).map(d=>d.entity_id):[],o=d=>{var c,u,p;return`${d} ${((c=r.states[d])==null?void 0:c.attributes.friendly_name)??""} ${((p=(u=r.entities)==null?void 0:u[d])==null?void 0:p.translation_key)??""}`.toLowerCase()},s=(d,c,u)=>i.find(p=>p.startsWith(`${d}.`)&&c.test(o(p))&&!(u&&u.test(o(p))))??null;return{heater:e,heating:s("binary_sensor",/heating|calentando|heizt/),showers:s("sensor",/shower|ducha|dusch/),remaining:s("sensor",/remaining|restante|restzeit/),power:s("switch",/power|encendid|_on\b/,/eco|legionella/),eco:s("switch",/\beco/)}}var Zr=["auto","none","inside","outside"],Xr=["always","no_power","never"],ta=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],ea=["gable","hip","halfhip"],mi={field:null,size:1,right:0,up:0},na=["navigate","more_info","service","fire_dom_event"];var Ln={cat:["orange","tabby","black","white","grey","calico","cream"],dog:["golden","cream","brown","black","white","grey"],rabbit:["white","grey","brown","black","cream"]},ia=["dachshund","pug","terrier","labrador","shepherd"];function vo(r,t,e){return r?t?!!e.lock_plan:!!r.locked:!1}var oa=["rain","snow","fog","clouds","lightning","sky"],yo=["rain","snow","clouds","lightning","sky"],$o=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],wo={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function un(r){return r==="hedge"||r==="fence"||r==="pergola"}function gi(r){return(r.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!un(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}var sa=["x","-x","z","-z"];function Hd(r,t,e){let n=r.slope??0;if(!n||r.type==="pool")return 0;let i=r.slope_dir??"x",o=(d,c)=>i==="x"?d:i==="-x"?-d:i==="z"?c:-c,s=1/0,a=-1/0;for(let[d,c]of r.points){let u=o(d,c);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function Dd(r,t,e,n){return la(r,t)+wo[t.type]-Vd(r,t,e,n)}var xo=-.2,fi={set:!1,level:xo};function ra(r){let t=(r==null?void 0:r.settings.terrain)??null;fi={set:(t==null?void 0:t.level)!=null,level:(t==null?void 0:t.level)??xo}}function ko(r,t){return fi.level}function aa(r){return r.elevation>.3?0:fi.set?fi.level-r.elevation:xo}function la(r,t){return aa(r)+(t.offset??0)}function Vd(r,t,e,n){return t.type==="pool"?0:Hd(t,e,n)}function ca(r,t,e){let n=(r.outdoor??[]).filter(o=>!un(o.type)&&o.type!=="pool"&&tt([t,e],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?Dd(r,i,t,e):aa(r)}var da=["filter","backwash","rinse","waste","recirculate","closed"];function ua(r,t){return la(r,t)+(t.above?_i(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function Mo(r){return r.depth&&r.depth>=.3?Math.min(5,r.depth):r.above?_i(r):1.5}function So(r,t){return t.above?!1:(r.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!un(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>tt(n,e.points)))}function pa(r,t){return!t.above&&!So(r,t)?Eo(r,t)-.05:ua(r,t)-Mo(t)}function Eo(r,t){return ua(r,t)-.15}function _i(r){return r.height&&r.height>.3?r.height:1.2}function bi(r,t,e,n,i){let o=v=>Math.round(v*1e3)/1e3,s=n-t,a=i-e,l=(t+n)/2,d=(e+i)/2;if(r==="rect")return[[t,e],[n,e],[n,i],[t,i]];let c=40;if(r==="round"){let v=Math.min(s,a)/2;return Array.from({length:c},(g,b)=>[o(l+v*Math.cos(b/c*Math.PI*2)),o(d+v*Math.sin(b/c*Math.PI*2))])}let u=s>=a,p=(u?a:s)/2,h=Math.max(0,(u?s:a)/2-p),f=[],m=c/2;for(let v=0;v<2;v++){let g=v===0?1:-1;for(let b=0;b<=m;b++){let $=-Math.PI/2+b/m*Math.PI+(v===0?0:Math.PI),x=g*h+p*Math.cos($),P=p*Math.sin($);f.push(u?[o(l+x),o(d+P)]:[o(l+P),o(d+x)])}}return f}var Wd={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},ha=["wood","oak","tiles","carpet","stone","concrete"],fa={type:"none",pitch:35,overhang:.4},Nd={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...fa}};function ma(r,t,e){return{id:r,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var Bd=2.75;function ga(r,t){if(t!=null&&Number.isFinite(t))return Math.round(t*Bd*100)/100;let e=r.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function _a(r,t,e){let n=r.rooms.flatMap(a=>a.points.map(l=>l[0])),i=r.rooms.flatMap(a=>a.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return t.map((a,l)=>{let d=o+l%3*4.5,c=s+Math.floor(l/3)*3.5;return{id:e(),name:a.name,area_id:a.area_id,points:[[d,c],[d+4,c],[d+4,c+3],[d,c+3]],floor_material:"wood"}})}function ba(r,t,e,n){let i=r.rotation*Math.PI/180,o=Math.cos(i),s=Math.sin(i),[a,l]=t,d=r.x-a*(r.w/2)*o+l*(r.d/2)*s,c=r.z-a*(r.w/2)*s-l*(r.d/2)*o,u=e[0]-d,p=e[1]-c,h=g=>Math.max(.1,Math.round(g/n)*n),f=h((u*o+p*s)*a),m=h((-u*s+p*o)*l),v=g=>Math.round(g*1e3)/1e3;return{x:v(d+a*(f/2)*o-l*(m/2)*s),z:v(c+a*(f/2)*s+l*(m/2)*o),w:v(f),d:v(m)}}var vi=["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","ac_unit","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell","awning","waste_bin","mailbox","wall_switch","wall_socket","water_heater","access_point"],yi={lights:["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer","water_heater"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","ac_unit","stairs","stairs_u","robot_vacuum"],vehicles:["parking"],outdoor:["awning"],household:["waste_bin","mailbox"],electric:["wall_switch","wall_socket","water_heater","access_point"]},Pt=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],va=.3,_e=["meter","inverter","home_battery","wallbox","grid_point"],$i=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Vr=1.75;function ce(r){if(["lamp_ceiling_fan","lamp_pendant","stairwell","parking"].includes(r.type)||Po.has(r.type))return!1;let t=$t(r.type);return!((t==null?void 0:t.mount)==="ceiling"&&t.light&&t.light!=="panel")}var Wr=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Nr(r,t){return r==="lamp_spot"?Math.max(.06,t)+.008:r==="lamp_ceiling"||r==="lamp_panel"?Math.max(.02,t)+.005:.02}var Po=new Set(["stairs","stairs_u"]);function ya(r,t,e){let n=Math.max(4,Math.round(e/.18)),i=Math.floor(n/2)+1,o=i-1,s=n-i,a=Math.min(.12,r*.06),l=(r-a)/2,d=Math.min(l,t*.45),c=(t-d)/o;return{n,k:i,steps1:o,steps2:s,gap:a,fw:l,landing:d,run:c,rise:e/n}}function Kt(r){var t;return $i.has(r)||!!((t=$t(r))!=null&&t.light)}var qd=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Ao(r,t,e,n=0){let i=zt(r.points),o=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,a=[];for(let l=0;l<t;l++)for(let d=0;d<e;d++){let c=[Math.round((i.x0+n+o/e*(d+.5))*1e3)/1e3,Math.round((i.z0+n+s/t*(l+.5))*1e3)/1e3];tt(c,r.points)&&a.push(c)}return a}function pn(r,t,e){let n=s=>Math.round(s*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(r[0]+i*t),n(r[1]+o*t)]}var Kd=1.05,Ud=.3;function $a(r,t){return t&&t!=="none"?{state_entity:t}:{state_entity:r.state_entity2&&r.state_entity2!=="none"?r.state_entity2:null,state_entity2:null}}function Br(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return r.variant==="bank"?.75:r.variant==="pole"||r.variant==="pillar"||r.variant==="parcel"?0:1;case"wall_switch":return Kd;case"wall_socket":return Ud;case"water_heater":return Gr;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var Jr=.04,Gd=1.2;function qr(r,t,e,n=0){var o;let i=0;for(let s of r.furniture)!(qd.has(s.type)||(o=$t(s.type))!=null&&o.surface)||!tt([t,e],Wt(s))||s.type==="worktop"&&n>0&&s.h-Jr>=Gd&&n<=s.h-Jr-.02||(i=Math.max(i,s.h));return i}function wi(r){let t=r.split(/[,;\n]/).map(e=>e.trim()).filter(Boolean).slice(0,12);return t.length?t:void 0}var Kr=new Set([...$i,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),le={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_ceiling_fan:[1.2,1.2,.35],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.086,.05,.086],wall_socket:[.086,.05,.086],water_heater:[.506,.275,1.066],access_point:[.16,.16,.035],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var zo=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Io=["standard","bars","glass_wall"];function xi(r,t){return r.type==="door"?r.style&&zo.includes(r.style)?r.style:t?"front":"interior":r.style&&Io.includes(r.style)?r.style:"standard"}function wa(r,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let i=t==="sidelights",o=r-.04,s=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),a=(o-s)/(i?2:1),l=n.sidelight_width??a,d=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),d=i?Math.max(.1,d):0;let c=o-.5;if(l+d>c){let p=Math.max(0,c)/(l+d);l*=p,d*=p}return i?{panels:[[.02,.02+l],[r-.02-d,r-.02]],x0:.02+l,x1:r-.02-d}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:r-.02}:{panels:[[r-.02-l,r-.02]],x0:.02,x1:r-.02-l}}function Fo(r){return r==="front"||r==="front_glass"||r==="sidelight"||r==="sidelights"}var ki={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function Mi(r){if(r.type==="garage")return"garage";if(r.type==="window"&&r.style==="glass_wall")return"glass_wall";let t=r.leaves===2;return r.type==="door"?!t&&r.style&&Fo(r.style)?"front":t?"door_double":"door":r.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function Si(r){var t;r.energy={...Wd,...r.energy??{}},r.presence=r.presence??[],r.settings={...Nd,...r.settings,roof:{...fa,...((t=r.settings)==null?void 0:t.roof)??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(i=>({...i,panel:i.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(i=>({...i,mount:i.mount??null,rotation:i.rotation??0})),e.furniture=e.furniture.map(i=>({...i,entity:i.entity??null,power:i.power??null}));let n=e.placements.filter(i=>i.entity_id.startsWith("light.")&&!i.pin);if(n.length){let i={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let s=i[o.mount??"ceiling"],[a,l,d]=le[s];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:o.x,z:o.z,rotation:0,w:a,d:l,h:d,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light.")||o.pin)}e.openings=e.openings.map(i=>({...i,hinge:i.hinge??"left",leaves:i.leaves??1,swing:i.swing??"in",style:i.style??null,cover:i.cover??null,contact:i.contact??null,contact2:i.contact2??null,tilt:i.tilt??null}))}return r}function X(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function St(r){let t=0;for(let e=0;e<r.length;e++){let[n,i]=r[e],[o,s]=r[(e+1)%r.length];t+=n*s-o*i}return t/2}function Rt(r){return Math.abs(St(r))}function te(r){let t=St(r);if(Math.abs(t)<1e-9){let i=r.length||1;return[r.reduce((o,s)=>o+s[0],0)/i,r.reduce((o,s)=>o+s[1],0)/i]}let e=0,n=0;for(let i=0;i<r.length;i++){let[o,s]=r[i],[a,l]=r[(i+1)%r.length],d=o*l-a*s;e+=(o+a)*d,n+=(s+l)*d}return[e/(6*t),n/(6*t)]}function Ei(r){if(r.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=r[t],[i,o]=r[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function zt(r){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[o,s]of r)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),i=Math.max(i,s);return{x0:t,z0:e,x1:n,z1:i}}function Wt(r){let t=r.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=r.w/2,o=r.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,a])=>[r.x+s*e-a*n,r.z+s*n+a*e])}function tt(r,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[o,s]=t[n],[a,l]=t[i];s>r[1]!=l>r[1]&&r[0]<(a-o)*(r[1]-s)/(l-s)+o&&(e=!e)}return e}var On={lamp_ceiling:"ceiling",lamp_ceiling_fan:"ceiling_fan",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};var xa="neonplan3d";function Yd(r){let t=structuredClone(r);t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function ka(r,t){return{format:xa,version:1,exported_at:new Date().toISOString(),building:t?Yd(r):structuredClone(r)}}function Ma(r){let t;try{t=JSON.parse(r)}catch{throw new Error("not_json")}let e=t,n=(e==null?void 0:e.format)===xa?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return Si(n)}function Sa(r){var e;let t=new Set;for(let n of r.floors){(e=n.background)!=null&&e.image_id&&t.add(n.background.image_id);for(let i of n.furniture)for(let o of i.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&t.add(o.image)}return[...t]}function Ro(r,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=r,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var Pa=/^(light|switch|input_boolean|fan|cover)\./;function To(r){let t=(r.switch_keys??[]).slice(0,4).map(e=>e&&e!=="none"?e:null);return t.length?t:[null]}var Aa=/^(switch|input_boolean|light)\./,Ea=r=>r&&r!=="none"?r:null;function Lo(r){let t=(r.socket_outlets??[]).slice(0,4).map(e=>({entity:Ea(e==null?void 0:e.entity),power:Ea(e==null?void 0:e.power)}));return t.length?t:[{entity:null,power:null}]}function Oo(r){return Math.round((.086+.071*(Math.max(1,Math.min(4,r))-1))*1e3)/1e3}function za(r){return r.switch_ring&&r.switch_ring!=="none"?r.switch_ring:null}var Qd={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Jd=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),Zd=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),Xd=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Pi=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],Oa=new Set(["light","switch","fan"]);function Ca(r){return r.slice(0,r.indexOf("."))}function at(r){return Qd[Ca(r)]??null}function Ge(r){return r!==null&&r!=="scene"&&r!=="script"}function Qe(r,t){var n,i,o;let e=(n=r.entities)==null?void 0:n[t];return e?e.area_id?e.area_id:e.device_id&&((o=(i=r.devices)==null?void 0:i[e.device_id])==null?void 0:o.area_id)||null:null}function hn(r,t){var n;let e=(n=r.entities)==null?void 0:n[t];return!!e&&(!!e.hidden||!!e.hidden_by||!!e.disabled_by)}function Ia(r,t){var s;let e=at(t);if(!e)return!1;let n=(s=r.entities)==null?void 0:s[t];if(hn(r,t)||n!=null&&n.entity_category)return!1;let i=r.states[t];if(!i)return!1;let o=i.attributes.device_class;return e==="sensor"?o?Jd.has(o):Zd.has(String(i.attributes.unit_of_measurement??"")):e==="binary"?o?Xd.has(o):!!(n!=null&&n.area_id):!0}var tu=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function Fa(r,t){var i;if(at(t)!=="sensor")return!1;let e=(i=r.entities)==null?void 0:i[t];if(hn(r,t)||e!=null&&e.entity_category)return!1;let n=r.states[t];return!n||!n.attributes.unit_of_measurement||tu.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||Wo(n)}var Co=null;function Ye(r){var l,d;let t=Co;if(t&&t.entities===r.entities&&t.devices===r.devices&&(t.states===r.states||(t.states=r.states,Object.keys(r.states).length===t.stateCount)))return t;let e=new Map,n=new Map,i=[],o=new Map,s=new Map;for(let c of Object.keys(r.entities??{})){let u=r.entities[c],p=u.device_id;p&&u.area_id&&(s.get(p)??s.set(p,new Set).get(p)).add(u.area_id),p&&Bo(r,c)&&(n.get(p)??n.set(p,[]).get(p)).push(c),p&&!hn(r,c)&&!u.entity_category&&(o.get(p)??o.set(p,new Set).get(p)).add(Ca(c));let h=Ia(r,c),f=Qe(r,c);if(!f){(h||Fa(r,c))&&Ge(at(c))&&i.push(c);continue}h&&(e.get(f)??e.set(f,[]).get(f)).push(c)}if(r.entities)for(let c of Object.keys(r.states))r.entities[c]||(Ia(r,c)||Fa(r,c))&&Ge(at(c))&&i.push(c);i.sort((c,u)=>Pi.indexOf(at(c))-Pi.indexOf(at(u))||_t(r,c).localeCompare(_t(r,u)));for(let[c,u]of e){let p=(d=(l=r.areas)==null?void 0:l[c])==null?void 0:d.name;u.sort((h,f)=>{let m=Pi.indexOf(at(h)),v=Pi.indexOf(at(f));return m-v||_t(r,h,p).localeCompare(_t(r,f,p))})}let a=new Set([...s].filter(([,c])=>c.size>1).map(([c])=>c));return Co={entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,areas:e,power:n,unassigned:i,domains:o,hubs:a},Co}function Ee(r,t){return!t||!r.entities?[]:Ye(r).areas.get(t)??[]}function ja(r,t){return r.entities?[...Ye(r).areas].filter(([e])=>e!==t).map(([e,n])=>{var i,o;return{areaId:e,name:((o=(i=r.areas)==null?void 0:i[e])==null?void 0:o.name)??e,ids:n.filter(s=>Ge(at(s)))}}).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function Ha(r){return r.entities?Ye(r).unassigned:[]}var jo={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},eu=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),nu=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Ho(r,t){var i,o,s;let e=(o=(i=r.entities)==null?void 0:i[t])==null?void 0:o.device_id,n=e&&!Ye(r).hubs.has(e)?Ye(r).domains.get(e):void 0;return n&&[...n].some(a=>eu.has(a))?!1:!nu.test(`${t} ${((s=r.states[t])==null?void 0:s.attributes.friendly_name)??""}`)}function Da(r,t,e,n){var h;let i=(h=e.climate)==null?void 0:h[n];if(i==="none")return[];if(i)return r.states[i]?[i]:[];let o=jo[n],s=(f,m)=>tt([f,m],e.points),a=(t==null?void 0:t.placements.filter(f=>f.entity_id.startsWith("sensor.")))??[],l=a.filter(f=>s(f.x,f.z)).map(f=>f.entity_id),d=new Set(a.filter(f=>!s(f.x,f.z)).map(f=>f.entity_id)),c=[...new Set([...Ee(r,e.area_id).filter(f=>!d.has(f)),...l])],u=c.filter(f=>{var m;return f.startsWith("sensor.")&&((m=r.states[f])==null?void 0:m.attributes.device_class)===o&&(e.outdoor||Ho(r,f))});if(u.length)return u;let p=Do[n];return p?c.filter(f=>{var m;return f.startsWith("climate.")&&typeof((m=r.states[f])==null?void 0:m.attributes[p])=="number"}):[]}var Do={temperature:"current_temperature",humidity:"current_humidity"};function Va(r,t){return!!r.entities&&Ye(r).hubs.has(t)}function Vo(r,t){return r.entities?Ye(r).power.get(t)??[]:[]}function _t(r,t,e){var o,s;let n=r.states[t],i=(n==null?void 0:n.attributes.friendly_name)??((s=(o=r.entities)==null?void 0:o[t])==null?void 0:s.name)??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let a=i.slice(e.length+1);return a.charAt(0).toUpperCase()+a.slice(1)}return i}function Wo(r){return!r||r.state==="unavailable"||r.state==="unknown"}function Wa(r){return!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum"}function Ai(r,t,e=null){if(r==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(r==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(r){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function iu(r,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],o=t[(n+1)%t.length],s=o[0]-i[0],a=o[1]-i[1],l=s*s+a*a||1,d=Math.min(1,Math.max(0,((r[0]-i[0])*s+(r[1]-i[1])*a)/l));e=Math.min(e,Math.hypot(r[0]-i[0]-s*d,r[1]-i[1]-a*d))}return e}function Na(r,t,e=[]){if(r.points.length<3||!t.length)return[];let n=r.points,i=n.map(b=>b[0]),o=n.map(b=>b[1]),s=Math.min(...i),a=Math.min(...o),l=Math.max(...i),d=Math.max(...o),c=Math.min(l-s,d-a),u=Math.max(.1,Math.min(.25,c/8)),p=Math.min(.35,c/5),h=te(n),f=[];for(let b=s+u/2;b<l;b+=u)for(let $=a+u/2;$<d;$+=u){let x=[b,$];if(!tt(x,n))continue;let P=iu(x,n);P<p||f.push({p:x,wall:P})}f.length||f.push({p:h,wall:0});let m=[...e],v=[],g=Math.min(.7,c/4);for(let b of t){let $=at(b)==="light",x=f[0].p,P=-1/0;for(let{p:R,wall:I}of f){let E=m.length?Math.min(...m.map(A=>Math.hypot(R[0]-A[0],R[1]-A[1]))):3,k=Math.hypot(R[0]-h[0],R[1]-h[1]),w=Math.min(E,3)*2;k<g&&!$&&(w-=10),w-=$?k*.35:I*1.2,w>P+1e-9&&(P=w,x=R)}let S=[Math.round(x[0]*100)/100,Math.round(x[1]*100)/100];m.push(S),v.push({entity_id:b,x:S[0],z:S[1],y:null,mount:null})}return v}var ou=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),su=new Set(["garage","gate"]),ru=new Set(["window","opening"]);function Cn(r,t,e=!1){let n=new Map;return t.length&&r.forEach((i,o)=>{let s=e&&t.length===1?t[0]:t[o];s&&n.set(i.id,s)}),n}function Ba(r,t){let e=new Map,n=(o,s)=>o==="none"?null:o??s??null,i=(o,s,a)=>{let l=n(o.cover,s);return{cover:l,contact:o.sensor==="handle"&&o.contact==null?null:n(o.contact,a),tilt:o.tilt==="none"?null:o.tilt,contact2:o.leaves===2&&o.contact2&&o.contact2!=="none"?o.contact2:null,lock:(o.type==="door"||o.type==="window"&&o.sill<=.01)&&o.lock&&o.lock!=="none"?o.lock:null,tilt2:o.leaves===2&&o.tilt2&&o.tilt2!=="none"?o.tilt2:null,position:l&&at(l)==="cover"&&o.position&&o.position!=="none"?o.position:null,positionInverted:!!o.position_inverted,tiltAngle:o.tilt_angle&&o.tilt_angle!=="none"?o.tilt_angle:null,tiltMax:o.tilt_max??null,tiltOffset:o.tilt_offset??null,tiltInvert:!!o.tilt_invert,shut:!!o.shut,...o.contact_invert?{contactInvert:!0}:{},...o.cover_invert?{coverInvert:!0}:{}}};for(let o of t){for(let s of o.rooms){let a=o.openings.filter($=>$.room_id===s.id).sort(($,x)=>$.edge-x.edge||$.offset-x.offset);if(!a.length)continue;let l=Ee(r,s.area_id),d=$=>{var x;return(x=r.states[$])==null?void 0:x.attributes.device_class},c=l.filter($=>at($)==="cover"&&ou.has(d($))),u=a.filter($=>$.type==="window"),p=a.filter($=>$.type==="door"),h=a.filter($=>$.type==="garage"),f=Cn(u,c,!0),m=Cn(u,l.filter($=>at($)==="binary"&&ru.has(d($)))),v=Cn(p,l.filter($=>at($)==="binary"&&d($)==="door")),g=Cn(h,l.filter($=>at($)==="cover"&&su.has(d($)??""))),b=Cn(h,l.filter($=>at($)==="binary"&&d($)==="garage_door"));for(let $ of a){let x=$.type==="window"?f:$.type==="garage"?g:null,P=$.type==="window"?m:$.type==="garage"?b:v;e.set($.id,i($,x==null?void 0:x.get($.id),P.get($.id)))}}for(let s of o.openings)e.has(s.id)||e.set(s.id,i(s))}return e}var au=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function No(r){if(!r||Wo(r))return null;let t=r.attributes.window_state;for(let e of[typeof t=="string"?t:null,r.state]){if(!e)continue;let n=au.find(([i])=>i.test(e.trim()));if(n)return n[1]}return null}function jn(r){return!!r&&/^(switch|button|input_button)\./.test(r)}function zi(r,t){var s,a;let e=new Map,n=[];for(let l of t){let d=at(l)==="camera"?`camera:${l}`:((a=(s=r.entities)==null?void 0:s[l])==null?void 0:a.device_id)??`entity:${l}`,c=e.get(d);c||(e.set(d,c=[]),n.push(d)),c.push(l)}let i=n.map(l=>{let d=e.get(l),c=d.find(u=>{var p,h;return!((h=(p=r.entities)==null?void 0:p[u])!=null&&h.name)})??d[0];return{primary:c,others:d.filter(u=>u!==c)}}),o=new Map(t.map((l,d)=>[l,d]));return i.sort((l,d)=>o.get(l.primary)-o.get(d.primary))}function lu(r,t){return zi(r,t).map(e=>e.primary)}var Ra={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},qa=new Set(["tv_board","tv_wall"]);function Ka(r,t){let e=r.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=t.state.trim().toLowerCase();return t.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function Ii(r){return qa.has(r)||!!Hr(r)}function Fi(r){return Ii(r)||r==="desk"||r==="fridge_smart"}var Ta={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function Bo(r,t){var e;return t.startsWith("sensor.")&&((e=r.states[t])==null?void 0:e.attributes.device_class)==="power"}function cu(r,t){var n,i;if(Bo(r,t))return t;let e=(i=(n=r.entities)==null?void 0:n[t])==null?void 0:i.device_id;return e?Vo(r,e).find(o=>o!==t)??null:null}function fn(r,t){let e=new Map;for(let n of t){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in Ta,a=s?Ta[o.type]:Ra[o.type]??(me(o.type)?Ra.robot_vacuum:void 0);if(!a&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&tt([o.x,o.z],h.points))??(o.type==="awning"?gi(n).find(h=>tt([o.x,o.z],h.points)):void 0),d=l?lu(r,Ee(r,l.area_id)):[],c=h=>`${h} ${_t(r,h)}`,u=o.entity==="none"?null:o.entity??null;if(o.entity==null){let h=d.filter(f=>!i.has(f));if(s){let f=h.filter(m=>at(m)==="light");u=f.find(m=>a.test(c(m)))??f[0]??null}else if(me(o.type)){let f=(l==null?void 0:l.area_id)??null;u=Object.keys(r.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&!hn(r,m)&&Qe(r,m)===f)??null}else if(o.type==="radiator"||o.type==="ac_unit"){let f=h.filter(m=>at(m)==="climate");u=f.find(m=>a.test(c(m)))??f[0]??null}else if(Ii(o.type)){let f=h.filter(m=>at(m)==="media");u=f.find(m=>{var v;return((v=r.states[m])==null?void 0:v.attributes.device_class)==="tv"})??f.find(m=>a==null?void 0:a.test(c(m)))??(qa.has(o.type)?f[0]??null:null)}else o.type==="awning"?u=h.find(f=>{var m;return f.startsWith("cover.")&&((a==null?void 0:a.test(c(f)))||((m=r.states[f])==null?void 0:m.attributes.device_class)==="awning")})??null:a&&(u=h.find(f=>["switch","media","fan"].includes(at(f)??"")&&a.test(c(f)))??null);u&&i.add(u)}let p=o.power==="none"?null:o.power??null;o.power==null&&(p=u?cu(r,u):null,!p&&a&&l&&!s&&(p=Ee(r,l.area_id).find(f=>Bo(r,f)&&!i.has(f)&&a.test(c(f)))??null),p&&i.add(p)),(u||p)&&e.set(o.id,{entity:u,power:p})}}return e}var La=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,du={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function Ua(r,t){var u,p;let e=t.car??{},n=h=>h&&h!=="none"?h:null,i=n(e.device)??n(t.entity),o=i?(p=(u=r.entities)==null?void 0:u[i])==null?void 0:p.device_id:null,s=o&&r.entities?Object.values(r.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],a=h=>{var f,m,v;return`${h} ${((f=r.states[h])==null?void 0:f.attributes.friendly_name)??""} ${((v=(m=r.entities)==null?void 0:m[h])==null?void 0:v.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(h,f,m)=>s.find(v=>f.includes(v.split(".")[0])&&du[h].test(a(v))&&(!m||m(v)))??null,d=h=>{var f;return String(((f=r.states[h])==null?void 0:f.attributes.unit_of_measurement)??"")},c=h=>{var f;return String(((f=r.states[h])==null?void 0:f.attributes.device_class)??"")};return{soc:n(e.soc)??s.find(h=>h.startsWith("sensor.")&&c(h)==="battery")??l("soc",["sensor"],h=>d(h)==="%"),range:n(e.range)??l("range",["sensor"],h=>/km|mi/.test(d(h)))??l("range",["sensor"]),charging:n(e.charging)??l("charging",["sensor"],h=>/^k?W$/.test(d(h)))??l("charging",["binary_sensor","switch"]),plugged:n(e.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&c(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(e.lock)??s.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(e.climate)??s.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(e.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function Ga(r,t,e){var i,o;if(e==="none")return null;if(e)return e;let n=t?(o=(i=r.entities)==null?void 0:i[t])==null?void 0:o.device_id:null;if(!n||!r.entities)return null;for(let s of Object.values(r.entities))if(!(s.device_id!==n||!s.entity_id.startsWith("sensor."))&&(La.test(s.translation_key??"")||La.test(s.entity_id.split(".")[1])))return s.entity_id;return null}var dt=(r,t,e,n,i="")=>j`<rect class=${i} x=${Math.min(r,e)} y=${Math.min(t,n)} width=${Math.abs(e-r)} height=${Math.abs(n-t)} />`,ot=(r,t,e,n,i="")=>j`<line class=${i} x1=${r} y1=${t} x2=${e} y2=${n} />`,wt=(r,t,e,n="")=>j`<circle class=${n} cx=${r} cy=${t} r=${e} />`,qo=(r,t,e,n,i="")=>j`<ellipse class=${i} cx=${r} cy=${t} rx=${e} ry=${n} />`;function Ko(r,t,e){let n=[];for(let i=1;i<e;i++){let o=-r/2+r/e*i;n.push(ot(o,t/2,o,t/2-Math.min(.12,t*.3)))}return n}function Ya(r,t,e,n){let i=Math.min(.24,t*.28),o=n?Math.min(.2,r*.12):0,s=[dt(-r/2,-t/2,r/2,-t/2+i,"fp3d-sym-fill")];n&&s.push(dt(-r/2,-t/2,-r/2+o,t/2,"fp3d-sym-fill"),dt(r/2-o,-t/2,r/2,t/2,"fp3d-sym-fill"));let a=r-2*o;for(let l=1;l<e;l++){let d=-r/2+o+a/e*l;s.push(ot(d,-t/2+i,d,t/2-.02))}return s}function Qa(r,t,e){let n=-r/2,i=r/2,o=-t/2,s=t/2,a=Math.max(.3,Math.min(.95,t*.5,r*(e?.34:.45))),l=Math.min(.24,a*.28),d=Math.min(.2,a*.24),c=[dt(n,o,i,o+l,"fp3d-sym-fill"),dt(n,o+l,n+l,s,"fp3d-sym-fill"),dt(n+l,s-d,n+a,s,"fp3d-sym-fill")];e?c.push(dt(i-l,o+l,i,s,"fp3d-sym-fill"),dt(i-a,s-d,i-l,s,"fp3d-sym-fill")):c.push(dt(i-d,o+l,i,o+a,"fp3d-sym-fill"));let u=e?i-a:i-d;c.push(ot(n+a,s-d,n+a,o+a),ot(n+a,o+a,u,o+a)),e&&c.push(ot(i-a,o+a,i-a,s-d));let p=n+l,h=e?i-l:i-d,f=Math.max(1,Math.round((h-p)/.62));for(let b=1;b<f;b++)c.push(ot(p+(h-p)/f*b,o+l,p+(h-p)/f*b,o+a));let m=o+a,v=s-d,g=v-m<.2?0:Math.max(1,Math.round((v-m)/.62));for(let b=0;b<g;b++){let $=m+(v-m)/g*b;c.push(ot(n+l,$,n+a,$)),e&&c.push(ot(i-a,$,i-l,$))}return c}function Ja(r,t,e){switch(r){case"sofa":return Ya(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return Ya(t,e,1,!0);case"sofa_l":return Qa(t,e,!1);case"sofa_u":return Qa(t,e,!0);case"bench":return[dt(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[dt(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),dt(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),ot(-t/2+n,-e/2+n,t/2,-e/2+n),ot(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[dt(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[wt(0,.03,Math.min(t,e)*.36),dt(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[wt(0,0,Math.min(t,e)*.42)];case"stool":return[dt(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[dt(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return r==="desk"&&n.push(ot(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,o=[dt(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),ot(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let s=0;s<n;s++)o.push(dt(-t/2+.13+i*s,-e/2+.12,-t/2+.07+i*(s+1),-e/2+.12+Math.min(.4,e*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return Ko(t,e,r==="nightstand"||r==="tall_cabinet"||r==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[dt(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...Ko(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[ot(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[ot(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[wt(-t*.22,-e*.2,n),wt(t*.22,-e*.2,n*.8),wt(-t*.22,e*.2,n*.8),wt(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[dt(-n/2,-e/2+.1,n/2,e/2-.08),wt(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[ot(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[wt(0,.05,Math.min(t,e)*.3),ot(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[dt(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),wt(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[ot(-t/2,-e/2,t/2,e/2),ot(t/2,-e/2,-t/2,e/2),wt(0,0,.04)];case"wc":return[dt(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),qo(0,e*.1,t*.36,e*.3)];case"washbasin":return[qo(0,.03,t*.34,e*.3)];case"tv_board":return[ot(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...Ko(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[ot(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[wt(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),wt(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[wt(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),wt(0,0,Math.min(t,e)*1.6)];case"parking":return[dt(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),ot(-t*.15,e/2-.5,0,e/2-.22,"fp3d-sym-strong"),ot(0,e/2-.22,t*.15,e/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[dt(-t*.45,-e/2,t*.45,-e/2+e*.3,"fp3d-sym-fill"),wt(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(t/.1));for(let o=1;o<i;o++)n.push(ot(-t/2+t/i*o,-e/2,-t/2+t/i*o,e/2));return n}case"lamp_panel":return[dt(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_ceiling_fan":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[wt(0,0,n*.9,"fp3d-sym-fill"),wt(0,0,n*.3)];if(r==="lamp_ceiling"||r==="lamp_pendant"||r==="lamp_ceiling_fan")for(let o=0;o<8;o++){let s=o/8*Math.PI*2;i.push(ot(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[dt(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),qo(0,.01,t*.4,e*.4)];case"led_strip":return[ot(-t/2,0,t/2,0,"fp3d-sym-strong")];case"plant":return[wt(0,0,Math.min(t,e)*.46),wt(0,0,Math.min(t,e)*.25)];case"rug":return[dt(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let o=1;o<n;o++)i.push(ot(-t/2,e/2-e/n*o,t/2,e/2-e/n*o));return i.push(ot(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),ot(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),ot(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:o,landing:s,run:a}=ya(t,e,2.75),l=-e/2+s,d=-t/2+o,c=t/2-o,u=[ot(-t/2,l,d,l),ot(d,l,d,e/2),ot(c,l,c,e/2)];for(let v=1;v<n;v++)u.push(ot(-t/2,e/2-a*v,d,e/2-a*v));for(let v=1;v<=i;v++)u.push(ot(c,l+a*v,t/2,l+a*v));let p=(-t/2+d)/2,h=(c+t/2)/2,f=-e/2+s/2,m=e/2-.15;return u.push(ot(p,e/2-.1,p,f,"fp3d-sym-strong"),ot(p,f,h,f,"fp3d-sym-strong"),ot(h,f,h,m,"fp3d-sym-strong"),ot(h-.15,m-.2,h,m,"fp3d-sym-strong"),ot(h+.15,m-.2,h,m,"fp3d-sym-strong")),u}default:{let n=$t(r);return n?uu(n,t,e):y}}}function uu(r,t,e){var n;return(n=r.symbol)!=null&&n.length?r.symbol.map(i=>i.shape==="rect"?dt((i.x-i.w/2)*t,(i.z-i.d/2)*e,(i.x+i.w/2)*t,(i.z+i.d/2)*e,i.fill?"fp3d-sym-fill":""):i.shape==="circle"?wt(i.x*t,i.z*e,i.r*Math.min(t,e)):ot(i.x1*t,i.z1*e,i.x2*t,i.z2*e)):r.parts.filter(i=>i.w<.98||i.d<.98).map(i=>i.shape==="cyl"&&(i.axis??"y")==="y"?wt(i.x*t,i.z*e,Math.min(i.w*t,i.d*e)/2):dt((i.x-i.w/2)*t,(i.z-i.d/2)*e,(i.x+i.w/2)*t,(i.z+i.d/2)*e))}var Mt=(r,t)=>[r[0]-t[0],r[1]-t[1]],Pe=(r,t)=>[r[0]+t[0],r[1]+t[1]],be=(r,t)=>[r[0]*t,r[1]*t],gn=(r,t)=>r[0]*t[0]+r[1]*t[1],mn=(r,t)=>r[0]*t[1]-r[1]*t[0],Hn=r=>Math.hypot(r[0],r[1]),Ut=r=>{let t=Hn(r)||1;return[r[0]/t,r[1]/t]},Za=r=>[-r[1],r[0]],Xa=r=>[r[1],-r[0]];function At(r,t,e=[]){let n=t.eps??.005,i=[],o=e.filter(k=>Math.hypot(k.b[0]-k.a[0],k.b[1]-k.a[1])>.05),s=[],a=k=>{for(let w=0;w<s.length;w++)if(Math.abs(s[w][0]-k[0])<=n&&Math.abs(s[w][1]-k[1])<=n)return w;return s.push([k[0],k[1]]),s.length-1},l=[];for(let k of r){let w=k.points;if(w.length<3||Math.abs(St(w))<1e-6)continue;let A=St(w)>0,M=w.map(a);for(let T=0;T<w.length;T++){let C=M[T],O=M[(T+1)%w.length];C!==O&&l.push(A?{u:C,v:O,room:k.id,edge:T,forward:!0}:{u:O,v:C,room:k.id,edge:T,forward:!1})}}let d=o.map(k=>[a(k.a),a(k.b)]),c=new Set;for(let k of r){let w=k.points;w.length<3||(k.wall_splits??[]).forEach((A,M)=>{if(!A||M>=w.length)return;let T=w[M],C=Mt(w[(M+1)%w.length],T),O=Hn(C);for(let D of A)D>n&&D<O-n&&c.add(a(Pe(T,be(C,D/O))))})}let u=[];for(let k of l){let w=s[k.u],A=s[k.v],M=Mt(A,w),T=Hn(M),C=be(M,1/T),O=[];for(let H=0;H<s.length;H++){if(H===k.u||H===k.v)continue;let U=Mt(s[H],w),G=gn(U,C);G<=n||G>=T-n||Math.abs(mn(C,U))<=n&&O.push({t:G,id:H})}O.sort((H,U)=>H.t-U.t);let D=[{t:0,id:k.u},...O,{t:T,id:k.v}];for(let H=0;H+1<D.length;H++){let U=D[H],G=D[H+1],Z=k.forward?U.t:T-G.t,Y=k.forward?G.t:T-U.t;u.push({u:U.id,v:G.id,room:k.room,edge:k.edge,t0:Z,t1:Y})}}let p=new Map;for(let k of u){let w=k.u<k.v?`${k.u}-${k.v}`:`${k.v}-${k.u}`,A=p.get(w);A||p.set(w,A=[]),A.push(k)}let h=k=>({room_id:k.room,edge:k.edge,t0:k.t0,t1:k.t1}),f=new Map;for(let k of u){let w=`${k.room}:${k.edge}`;f.set(w,[...f.get(w)??[],k.t0].sort((A,M)=>A-M))}let m=k=>{var M,T;let w=(T=(M=r.find(C=>C.id===k.room))==null?void 0:M.wall_heights)==null?void 0:T[k.edge];if(!Array.isArray(w))return w;let A=f.get(`${k.room}:${k.edge}`)??[];return w[A.indexOf(k.t0)]??null},v=k=>{let w=k.map(m).filter(M=>typeof M=="number"&&M>0);if(w.length)return Math.min(...w);let A=k.map(M=>{var T;return(T=r.find(C=>C.id===M.room))==null?void 0:T.ceiling_height});return A.every(M=>typeof M=="number"&&M>0)?Math.max(...A):void 0},g=k=>{let w=k.map(A=>{var M,T;return(T=(M=r.find(C=>C.id===A.room))==null?void 0:M.wall_thickness)==null?void 0:T[A.edge]}).filter(A=>typeof A=="number"&&A>0);return w.length?Math.max(...w):void 0},b=k=>{var w;for(let A of k){let M=r.find(D=>D.id===A.room),T=(w=M==null?void 0:M.wall_slopes)==null?void 0:w[A.edge];if(!M||!T)continue;let C=M.points[A.edge],O=M.points[(A.edge+1)%M.points.length];return{p:[C[0],C[1]],q:[O[0],O[1]],h0:Math.max(.05,T[0]),h1:Math.max(.05,T[1])}}},$=k=>k.some(w=>m(w)===0),x=k=>{let w=b(k);return w?{height:Math.max(w.h0,w.h1),slope:w}:{height:v(k)}},P=[],S=[];for(let k of p.values()){let w=k[0],A=k.find(M=>M!==w&&M.u===w.v&&M.v===w.u&&M.room!==w.room);for(let M of k)M!==w&&M!==A&&M.room!==w.room&&i.push(`overlap:${w.room}:${M.room}`);if($(A?[w,A]:[w])){A&&P.push([w.room,A.room]);continue}if(A){let M=g([w,A])??t.interior;S.push({a:w.u,b:w.v,left:M/2,right:M/2,exterior:!1,roomLeft:w.room,roomRight:A.room,sources:[h(w),h(A)],...x([w,A])})}else S.push({a:w.u,b:w.v,left:0,right:g([w])??t.exterior,exterior:!0,roomLeft:w.room,roomRight:null,sources:[h(w)],...x([w])})}let R=k=>Ut(Mt(s[k.b],s[k.a]));for(let k of S){if(k.exterior||k.free)continue;let w=new Set;for(let M of[k.a,k.b])for(let T of S)!T.exterior||T.free||T.a!==M&&T.b!==M||Math.abs(mn(R(k),R(T)))>1e-6||(T.roomLeft===k.roomLeft?w.add("left"):T.roomLeft===k.roomRight&&w.add("right"));if(w.size!==1)continue;let A=k.left+k.right;w.has("left")?(k.left=0,k.right=A):(k.left=A,k.right=0)}o.forEach((k,w)=>{var H;let[A,M]=d[w];if(A===M)return;let T=[(k.a[0]+k.b[0])/2,(k.a[1]+k.b[1])/2],C=((H=r.find(U=>U.points.length>=3&&tt(T,U.points)))==null?void 0:H.id)??null,O=(k.thickness??t.interior)/2,D=typeof k.height=="number"&&k.height>0?k.height:void 0;S.push({free:k.id,a:A,b:M,left:O,right:O,exterior:!1,roomLeft:C,roomRight:C,sources:[],height:D})}),S=hu(S,s,c);let I=mu(S,s);return{walls:S.map((k,w)=>{let A=s[k.a],M=s[k.b],T=I.get(`${w}:a`),C=I.get(`${w}:b`),O=gu([T.right,C.left,M,C.right,T.left,A],1e-6);return{id:pu(A,M),a:[A[0],A[1]],b:[M[0],M[1]],left:k.left,right:k.right,exterior:k.exterior,roomLeft:k.roomLeft,roomRight:k.roomRight,sources:k.sources,footprint:O,...k.free?{free:k.free}:{},...k.height!==void 0?{height:k.height}:{},...k.slope?{slope:k.slope}:{}}}),warnings:[...new Set(i)],open:P}}function pu(r,t){let e=o=>Math.round(o*100),[n,i]=r[0]<t[0]||r[0]===t[0]&&r[1]<=t[1]?[r,t]:[t,r];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function tl(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function hu(r,t,e=new Set){let n=r.slice(),i=!0;for(;i;){i=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let d=o.get(l);d||o.set(l,d=[]),d.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],d=n[a[1]];if(l.b!==s&&(l=tl(l)),d.a!==s&&(d=tl(d)),l.a===d.b)continue;let c=Ut(Mt(t[l.b],t[l.a])),u=Ut(Mt(t[d.b],t[d.a]));if(Math.abs(mn(c,u))>1e-6||gn(c,u)<=0||l.free||d.free||l.height!==d.height||l.slope||d.slope||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let p={...l,b:d.b,sources:fu(l.sources,d.sources)},h=n.filter((f,m)=>m!==a[0]&&m!==a[1]);h.push(p),n.length=0,n.push(...h),i=!0;break}}return n}function fu(r,t){let e=r.map(n=>({...n}));for(let n of t){let i=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function mu(r,t){let e=new Map;r.forEach((i,o)=>{let s=Ut(Mt(t[i.b],t[i.a])),a=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:be(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,d]of a){let c=e.get(l);c||e.set(l,c=[]),c.push(d)}});let n=new Map;for(let[i,o]of e){let s=t[i];o.sort((d,c)=>d.angle-c.angle);let a=d=>({left:Pe(s,be(Za(d.d),d.left)),right:Pe(s,be(Xa(d.d),d.right))});for(let d of o)n.set(d.key,a(d));if(o.length<2)continue;let l=4*Math.max(...o.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<o.length;d++){let c=o[d],u=o[(d+1)%o.length],p=Pe(s,be(Za(c.d),c.left)),h=Pe(s,be(Xa(u.d),u.right)),f=mn(c.d,u.d);if(Math.abs(f)<1e-4)continue;let m=mn(Mt(h,p),u.d)/f,v=Pe(p,be(c.d,m));Hn(Mt(v,s))>l||(n.get(c.key).left=v,n.get(u.key).right=v)}}return n}function gu(r,t){let e=r.filter((i,o)=>Hn(Mt(i,r[(o+1)%r.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let o=e[(i+e.length-1)%e.length],s=e[i],a=e[(i+1)%e.length],l=Mt(s,o),d=Mt(a,s);if(Math.abs(mn(Ut(l),Ut(d)))<1e-7&&gn(l,d)>0){e=e.filter((c,u)=>u!==i),n=!0;break}}}return e}function Ae(r,t,e){let n=r.points[t],i=r.points[(t+1)%r.points.length],o=Ut(Mt(i,n));return Pe(n,be(o,e))}function ze(r,t,e){if(r.wall){let i=e.find(a=>a.id===r.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=Ut(Mt(i.b,i.a));return{room:{id:r.room_id,name:"",area_id:null,points:[i.a,i.b,Pe(i.a,[-o[1],o[0]])]},edge:0}}let n=t.find(i=>i.id===r.room_id);return n&&r.edge<n.points.length?{room:n,edge:r.edge}:null}function Dn(r,t,e){if(!t.wall)return nl(r,e.room,e.edge,t.offset);let n=r.find(o=>o.free===t.wall);if(!n)return null;let i=Ae(e.room,0,t.offset);return{wall:n,s:gn(Mt(i,n.a),Ut(Mt(n.b,n.a)))}}function _u(r,t,e){if(!t.exterior||t.free)return null;let n=e?t.b:t.a,i=Ut(Mt(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of r)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||!a.exterior||a.free||!o(e?a.a:a.b)||gn(Ut(Mt(a.b,a.a)),i)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function el(r,t,e){return[0,Math.hypot(t.points[(e+1)%t.points.length][0]-t.points[e][0],t.points[(e+1)%t.points.length][1]-t.points[e][1])].map(i=>{let o=nl(r,t,e,i);if(!o)return 0;let s=Math.hypot(o.wall.b[0]-o.wall.a[0],o.wall.b[1]-o.wall.a[1]),a=o.s>s/2;if(Math.abs(o.s-(a?s:0))>.001)return 0;let l=_u(r,o.wall,a);return l?Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]):0})}function nl(r,t,e,n){for(let i of r){if(!i.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Ae(t,e,n);return{wall:i,s:gn(Mt(s,i.a),Ut(Mt(i.b,i.a)))}}return null}function Uo(r,t){let e=St(t)>0?1:-1,n=[...r];for(let i=0;i<t.length&&n.length;i++){let o=t[i],s=t[(i+1)%t.length],a=d=>e*((s[0]-o[0])*(d[1]-o[1])-(s[1]-o[1])*(d[0]-o[0])),l=n;n=[];for(let d=0;d<l.length;d++){let c=l[d],u=l[(d+1)%l.length],p=a(c),h=a(u);if(p>=0&&n.push(c),p>=0!=h>=0){let f=p/(p-h);n.push([c[0]+(u[0]-c[0])*f,c[1]+(u[1]-c[1])*f])}}}return n}var il=r=>r.length>=3?Math.abs(Rt(r)):0;function bu(r,t){return r.exterior?0:r.roomLeft===t?r.left:r.roomRight===t?r.right:0}function ol(r,t,e){let n=il(r.points);if(r.points.length<3)return n;let{walls:i}=At(t.rooms,e,t.walls??[]),o=n,s=i.filter(a=>!a.free&&(a.roomLeft===r.id||a.roomRight===r.id));for(let a of i){let l=[(a.a[0]+a.b[0])/2,(a.a[1]+a.b[1])/2];if((a.free?!tt(l,r.points):!s.includes(a))||(o-=il(Uo(r.points,a.footprint)),!a.free))continue;let d=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(d<.2)continue;let c=[(a.b[0]-a.a[0])/d,(a.b[1]-a.a[1])/d],u=null;for(let p of s){let h=Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1]);if(h<.2)continue;let f=[(p.b[0]-p.a[0])/h,(p.b[1]-p.a[1])/h];if(Math.abs(c[0]*f[1]-c[1]*f[0])>.05)continue;let m=Math.abs((l[0]-p.a[0])*f[1]-(l[1]-p.a[1])*f[0]),v=(a.a[0]-p.a[0])*f[0]+(a.a[1]-p.a[1])*f[1],g=(a.b[0]-p.a[0])*f[0]+(a.b[1]-p.a[1])*f[1],b=Math.min(h,Math.max(v,g))-Math.max(0,Math.min(v,g)),$=m-(a.left+a.right)/2-bu(p,r.id);b>.1&&$>0&&m<1&&(!u||$<u.gap)&&(u={gap:$,overlap:b})}u&&(o-=u.gap*u.overlap)}return Math.max(0,o)}function Go(r,t){var e,n;return t==="metric"||t==="imperial"?t:((n=(e=r==null?void 0:r.config)==null?void 0:e.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function sl(r,t){return String(Number(r.toFixed(t)))}function Je(r,t=2){let e=r<0?"-":"",n=Math.round(Math.abs(r)/.0254*(t>=2?10:1))/(t>=2?10:1),i=Math.floor(n/12+1e-9),o=n-i*12,s=sl(o,t>=2?1:0);return i?o<.05?`${e}${i}'`:`${e}${i}' ${s}"`:`${e}${s}"`}function Yo(r,t){let e=r.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,s=!1,a=e;for(let l of e.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];o=!0,a=a.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(i+=d*.3048,s=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?i+=d*.0254:c==="mm"?i+=d/1e3:c==="cm"?i+=d/100:c==="m"?i+=d:i+=t==="imperial"?d*(s?.0254:.3048):d}return!o||/[^\s+]/.test(a)?null:i}function rl(r,t,e){return t==="imperial"?Je(r):`${e(r)} m`}function al(r,t,e){return t==="imperial"?`${sl(r/(.3048*.3048),1)} ft\xB2`:`${e(r)} m\xB2`}function Vn(r,t){return t==="imperial"?r.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):r}var vu=.05,yu=.2,$u=.12;function wu(r){let t=[];return r.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let o=St(i)>=0;for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],d=l[0]-a[0],c=l[1]-a[1],u=Math.hypot(d,c);if(u<.05)continue;let p=[d/u,c/u],h=o?[p[1],-p[0]]:[-p[1],p[0]];(p[1]<-1e-9||Math.abs(p[1])<=1e-9&&p[0]<0)&&(p=[-p[0],-p[1]]);let f=[-p[1],p[0]],m=a[0]*p[0]+a[1]*p[1],v=l[0]*p[0]+l[1]*p[1];t.push({room:n,index:s,dir:p,normal:f,offset:a[0]*f[0]+a[1]*f[1],outside:h[0]*f[0]+h[1]*f[1]>0?1:-1,t0:Math.min(m,v),t1:Math.max(m,v)})}}),t}function ll(r,t=.6){let e=wu(r),n=e.map((c,u)=>u),i=c=>n[c]===c?c:n[c]=i(n[c]),o=[];for(let c=0;c<e.length;c++)for(let u=c+1;u<e.length;u++){let p=e[c],h=e[u];if(p.room===h.room||Math.abs(p.dir[0]*h.dir[1]-p.dir[1]*h.dir[0])>vu||p.outside===h.outside)continue;let f=(h.offset-p.offset)*p.outside;f>t||f<-$u||Math.abs(f)<1e-4||Math.min(p.t1,h.t1)-Math.max(p.t0,h.t0)<yu||(o.push(Math.round(f*1e3)/1e3),n[i(c)]=i(u))}if(!o.length)return{rooms:r.map(c=>({...c,points:c.points.map(u=>[u[0],u[1]])})),gaps:o};let s=new Map;e.forEach((c,u)=>{let p=i(u);if(p===u&&!e.some((f,m)=>m!==u&&i(m)===u))return;let h=s.get(p)??[];h.push(u),s.set(p,h)});let a=r.map(c=>c.points.map(()=>new Map));for(let[c,u]of s){let p=u.reduce((h,f)=>h+e[f].offset,0)/u.length;for(let h of u){let f=e[h],m=p-f.offset,v=[f.normal[0]*m,f.normal[1]*m],g=r[f.room].points.length;a[f.room][f.index].set(c,v),a[f.room][(f.index+1)%g].set(c,v)}}let l=c=>Math.round(c*1e3)/1e3;return{rooms:r.map((c,u)=>({...c,points:c.points.map((p,h)=>{let f=p[0],m=p[1];for(let[v,g]of a[u][h].values())f+=v,m+=g;return[l(f),l(m)]})})),gaps:o}}function cl(r){let t=r.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}function dl(r,t=.05,e=.5){let n=r.map(o=>({...o,points:o.points.map(s=>[s[0],s[1]])})),i=0;for(let o=0;o<4;o++){let s=(l,d)=>n.reduce((c,u)=>c+u.points.filter(p=>Math.abs(p[l]-d)<1e-6).length,0),a=!1;for(let l of n)for(let d=0;d<l.points.length;d++){let c=l.points[d],u=l.points[(d+1)%l.points.length],p=Math.abs(u[0]-c[0]),h=Math.abs(u[1]-c[1]),f=h>1e-6&&h<=t&&p>=e?1:p>1e-6&&p<=t&&h>=e?0:null;if(f===null)continue;let[m,v]=s(f,c[f])>=s(f,u[f])?[c[f],u[f]]:[u[f],c[f]];for(let g of n)for(let b of g.points)Math.abs(b[f]-v)<1e-6&&(b[f]=m);i++,a=!0}if(!a)break}return{rooms:n,fixed:i}}var xu=.25,Ri=r=>Math.round(r*1e3)/1e3;function Qo(r,t,e,n,i){let o=r.rooms.find(s=>s.points.length>=3&&tt([t,e],s.points));return!o||tt([n,i],o.points)?[n,i]:tt([n,e],o.points)?[n,e]:tt([t,i],o.points)?[t,i]:[t,e]}function de(r,t,e,n){let i=Math.hypot(n[0]-e[0],n[1]-e[1]);if(i<.01)return!1;let o=[(n[0]-e[0])/i,(n[1]-e[1])/i],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return r.rooms.some(l=>l.id!==t&&l.points.some((d,c)=>{let u=l.points[(c+1)%l.points.length];return s(d)>.02||s(u)>.02?!1:Math.min(i,Math.max(a(d),a(u)))-Math.max(0,Math.min(a(d),a(u)))>.05}))}function Jo(r,t,e,n,i,o=.05){let s=r.rooms.find(p=>p.points.length>=3&&tt([t.x,t.z],p.points));if(!s)return[e,n];let a=s.points,l=St(a)>=0?1:-1,d=Wt({...t}),c=e,u=n;for(let p=0;p<2;p++){let h=Wt({...t,x:c,z:u});for(let f=0;f<a.length;f++){let m=a[f],v=a[(f+1)%a.length],g=Math.hypot(v[0]-m[0],v[1]-m[1]);if(g<.05)continue;let b=[(v[0]-m[0])/g,(v[1]-m[1])/g],$=[-b[1]*l,b[0]*l],x=de(r,s.id,m,v)?i/2:0,P=0;h.forEach((S,R)=>{let I=(S[0]-m[0])*b[0]+(S[1]-m[1])*b[1];if(I<-.01||I>g+.01)return;let E=(S[0]-m[0])*$[0]+(S[1]-m[1])*$[1]-x,k=d[R];(k[0]-m[0])*$[0]+(k[1]-m[1])*$[1]-x<-o||E<P&&(P=E)}),P<-1e-4&&(c-=$[0]*P,u-=$[1]*P)}}return[Ri(c),Ri(u)]}function Wn(r,t,e,n=xu){let i=r.rooms.find(d=>d.points.length>=3&&tt([t.x,t.z],d.points));if(!i)return null;let o=i.points,s=St(o)>=0?1:-1,a=e/2,l=null;for(let d=0;d<o.length;d++){let c=o[d],u=o[(d+1)%o.length],p=Math.hypot(u[0]-c[0],u[1]-c[1]);if(p<.3)continue;let h=[(u[0]-c[0])/p,(u[1]-c[1])/p],f=[-h[1]*s,h[0]*s],m=(t.x-c[0])*h[0]+(t.z-c[1])*h[1];if(m<0||m>p)continue;let g=r.rooms.some(I=>I.id!==i.id&&I.points.some((E,k)=>{let w=I.points[(k+1)%I.points.length],A=Math.abs((E[0]-c[0])*f[0]+(E[1]-c[1])*f[1]),M=Math.abs((w[0]-c[0])*f[0]+(w[1]-c[1])*f[1]);return A<.02&&M<.02}))?a:0,b=(t.x-c[0])*f[0]+(t.z-c[1])*f[1]-g,$=Math.atan2(-f[0],f[1])*180/Math.PI,x=I=>Math.abs((t.rotation-I+540)%360-180),S=[{rotation:$,extent:t.d/2},{rotation:$+90,extent:t.w/2},{rotation:$-90,extent:t.w/2}].reduce((I,E)=>x(E.rotation)<x(I.rotation)?E:I);if(x(S.rotation)>50)continue;let R=b-S.extent;Math.abs(R)>n||l&&Math.abs(R)>=Math.abs(l.gap)||(l={x:Ri(t.x-f[0]*R),z:Ri(t.z-f[1]*R),rotation:(Math.round(S.rotation)%360+360)%360,gap:R})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function Ie(r,t){let e=r.points,n=e[t],i=e[(t+1)%e.length],o=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/o,(i[1]-n[1])/o],a=[-s[1],s[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];tt([l[0]+a[0]*.02,l[1]+a[1]*.02],e)||(a=[-a[0],-a[1]]);let d=[a[1],-a[0]];return{a:n,b:i,u:s,n:a,length:o,rightward:s[0]*d[0]+s[1]*d[1]>0}}function gt(r,t){let e=t[0]-r.a[0],n=t[1]-r.a[1];return{s:e*r.u[0]+n*r.u[1],d:e*r.n[0]+n*r.n[1]}}function ee(r,t,e){return[r.a[0]+r.u[0]*t+r.n[0]*e,r.a[1]+r.u[1]*t+r.n[1]*e]}var ku=.45;function _n(r,t){let e=[];for(let n of t.openings){if(n.wall)continue;let i=t.rooms.find(a=>a.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:o,d:s}=gt(r,Ae(i,n.edge,n.offset));Math.abs(s)>.4||o<-.05||o>r.length+.05||e.push(Mu(n,o))}return e}function Mu(r,t){return{kind:"opening",id:r.id,s0:t-r.width/2,s1:t+r.width/2,y0:r.sill,y1:r.sill+r.height,d:0}}function Fe(r,t,e,n=ku){let i=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let s=tt([o.x,o.z],e.points),a=Wt(o).map(h=>gt(r,h)),l=Math.min(...a.map(h=>h.d)),d=Math.min(...a.map(h=>h.s)),c=Math.max(...a.map(h=>h.s)),u=gt(r,[o.x,o.z]);if(!s&&u.d<=0||u.d<=0||l>n||l<-.3||c<.02||d>r.length-.02)continue;let p=Tt(t,o);i.push({kind:"furniture",id:o.id,s0:d,s1:c,y0:p,y1:p+o.h,d:l})}return i}function Ti(r,t,e){let n=i=>Math.round(i*1e3)/1e3;return{x:n(t.x+r.u[0]*e),z:n(t.z+r.u[1]*e)}}var Zo=.3;function Gt(r,t){let e=r.from?t(r.from):null,n=r.to?t(r.to):null,i=r.height??Zo,o=[];if(r.heights)e&&o.push([e.x,e.y,e.z]),r.points.forEach(([s,a],l)=>{var d;return o.push([s,((d=r.heights)==null?void 0:d[l])??i,a])}),n&&o.push([n.x,n.y,n.z]);else{if(!e||!n)return[];o.push([e.x,e.y,e.z],[e.x,i,e.z]);for(let[s,a]of r.points)o.push([s,i,a]);o.push([n.x,i,n.z],[n.x,n.y,n.z])}return o.filter((s,a)=>a===0||Li(s,o[a-1])>.001)}function Li(r,t){return Math.hypot(t[0]-r[0],t[1]-r[1],t[2]-r[2])}function Xo(r){let t=0;for(let e=1;e<r.length;e++)t+=Li(r[e-1],r[e]);return t}function ul(r,t){if(r.length<2)return null;let e=Math.max(0,t);for(let n=1;n<r.length;n++){let[i,o]=[r[n-1],r[n]],s=Li(i,o);if(!(s<1e-6)){if(e<=s||n===r.length-1){let a=Math.min(1,e/s),l=[(o[0]-i[0])/s,(o[1]-i[1])/s,(o[2]-i[2])/s];return{p:[i[0]+(o[0]-i[0])*a,i[1]+(o[1]-i[1])*a,i[2]+(o[2]-i[2])*a],dir:l,seg:n-1}}e-=s}}return null}function bn(r,t){let e=null,n=0;for(let i=1;i<r.length;i++){let[o,s]=[r[i-1],r[i]],a=[s[0]-o[0],s[1]-o[1],s[2]-o[2]],l=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],d=l>0?Math.max(0,Math.min(1,((t[0]-o[0])*a[0]+(t[1]-o[1])*a[1]+(t[2]-o[2])*a[2])/l)):0,c=[o[0]+a[0]*d,o[1]+a[1]*d,o[2]+a[2]*d],u=Li(c,t);(!e||u<e.d)&&(e={at:n+Math.sqrt(l)*d,d:u,seg:i-1,p:c}),n+=Math.sqrt(l)}return e}function ne(r,t,e,n){let[i,o]=ee(r,t,n);return[i,e,o]}function pl(r,t,e,n){let i=ee(r,0,t),o=ee(e,0,n),s=r.u[0]*-e.u[1]-r.u[1]*-e.u[0];if(Math.abs(s)<1e-6)return null;let a=o[0]-i[0],l=o[1]-i[1],d=(a*-e.u[1]-l*-e.u[0])/s;return[i[0]+r.u[0]*d,i[1]+r.u[1]*d]}var hl=["top6","side6","four"];function Re(r){return r==="pool_pump"?["suction","pressure"]:r==="pool_filter"?["pump","return","waste"]:r==="pool_heat_pump"?["in","out"]:[]}function vn(r){return r==="wall"||r==="floor"?["inside","outside"]:["in","out1","out2"]}function ut(r){let[t="",e="",n]=r.split(":");return{kind:t,id:e,port:n||null}}function ie(r){let{kind:t,id:e}=ut(r);return t&&e?`${t}:${e}`:r}function Su(r,t){let{w:e,d:n,h:i}=r;if(r.type==="pool_pump")return t==="suction"?[e*.5,i*.55,0]:t==="pressure"?[e*.05,i*.9,0]:null;if(r.type==="pool_filter"){let o=Math.min(e,n)/2;if(r.variant==="side6"){let l=o+.08;return t==="pump"?[l,i*.6,0]:t==="return"?[l+.06,i*.48,0]:t==="waste"?[l,i*.36,0]:null}let s=i*.89,a=o*.45+.04;return t==="pump"?[-a,s,0]:t==="return"?[a,s,0]:t==="waste"?[0,s,-a]:null}if(r.type==="pool_heat_pump"){let o=r.variant==="left"||r.variant==="back"?r.variant:"right";if(t!=="in"&&t!=="out")return null;let s=t==="in"?i*.25:i*.45;return o==="back"?[t==="in"?-e*.15:e*.15,s,-n/2-.04]:[(o==="left"?-1:1)*(e/2+.04),s,-n*.2]}return null}function fl(r,t){let e=Su(r,t);if(!e)return null;let n=r.rotation*Math.PI/180,[i,o]=[Math.cos(n),Math.sin(n)];return{x:r.x+e[0]*i-e[2]*o,y:e[1],z:r.z+e[0]*o+e[2]*i}}function Te(r,t){if(t==="outside"){if(r.kind==="floor")return{x:r.x,y:r.y-.3,z:r.z};if(r.kind==="wall"){let e=(r.depth??.3)+.05;return{x:r.x-(r.nx??0)*e,y:r.y,z:r.z-(r.nz??0)*e}}}return{x:r.x,y:r.y,z:r.z}}function ml(r){return r==="pressure"||r==="return"||r==="waste"||r==="out"?"source":r==="suction"||r==="pump"||r==="in"?"sink":null}function ts(r){return r==="skimmer"||r==="drain"?"source":"sink"}function Oi(r,t){let e=r[0]??t,n=1/0;for(let i=0;i<r.length;i++){let o=r[i],s=r[(i+1)%r.length],a=s[0]-o[0],l=s[1]-o[1],d=a*a+l*l,c=d>0?Math.max(0,Math.min(1,((t[0]-o[0])*a+(t[1]-o[1])*l)/d)):0,u=[o[0]+a*c,o[1]+l*c],p=Math.hypot(u[0]-t[0],u[1]-t[1]);p<n&&([e,n]=[u,p])}return e}function ft(r,t,e){let n=e.pool??{},i=Eo(t,e);return o=>{var d,c;let{kind:s,id:a,port:l}=ut(o);if(s==="port"){let u=(d=n.ports)==null?void 0:d.find(h=>h.id===a);if(!u)return null;let p=u.kind==="skimmer"?i-(u.depth??0):u.kind==="drain"?pa(t,e)+.03:u.kind==="inlet"?i-(u.depth??.3):.02;return{x:u.x,z:u.z,y:p}}if(s==="joint"){let u=(c=n.joints)==null?void 0:c.find(p=>p.id===a);return u?Te(u,l):null}if(s!=="dev")return null;for(let u of r.floors){let p=u.furniture.find(v=>v.id===a);if(!p||!Pt.includes(p.type))continue;let h=l?fl(p,l):null,f=u.elevation-t.elevation;if(h)return{...h,y:h.y+Tt(u,p)+f};let m=p.type==="pool_filter"?p.h*.88:p.type==="pool_dosing"?.95:p.type==="pool_valve"?va:p.type==="pool_pump"?.2:.3;return{x:p.x,z:p.z,y:m+Tt(u,p)+f}}return null}}function Nt(r,t){if(r.heights)return r;let e=r.height??Zo,n=t(r.from),i=t(r.to),o=[...n?[[n.x,n.z]]:[],...r.points,...i?[[i.x,i.z]]:[]];return{...r,points:o,heights:o.map(()=>e)}}var bt=r=>Math.round(r*1e3)/1e3;function Ci(r,t,e,n,i){let o=Nt(r,t),s=Gt(o,t),a=bn(s,e);if(!a)return null;let l={id:n,x:bt(a.p[0]),z:bt(a.p[2]),y:bt(a.p[1])},d=Nn(o,t),c=Math.max(0,Math.min(o.points.length,a.seg+1-d)),u=o.heights??[],p=o.fittings??[],h={...o,to:`joint:${n}:in`,points:o.points.slice(0,c),heights:u.slice(0,c),fittings:p.filter(m=>m.at<=a.at)},f={...o,id:i,from:`joint:${n}:out1`,points:o.points.slice(c),heights:u.slice(c),fittings:p.filter(m=>m.at>a.at).map(m=>({...m,at:bt(m.at-a.at)}))};return{joint:l,first:h,second:f}}function Nn(r,t){return r.from&&t(r.from)?1:0}var Eu=1.6;function _l(r,t,e){var o;let n=[],i=s=>{let a=gt(r,[s[0],s[2]]);return a.d>-.35&&a.d<Eu&&a.s>-.3&&a.s<r.length+.3?a:null};for(let s of t){let a=Nt(s,e),l=Gt(a,e);if(l.length<2)continue;let d={id:s.id,pieces:[],points:[],fittings:[],ends:[]};for(let p=1;p<l.length;p++){let h=i(l[p-1]),f=i(l[p]);h&&f&&d.pieces.push({k:p-1,s0:h.s,y0:l[p-1][1],d0:h.d,s1:f.s,y1:l[p][1],d1:f.d})}if(!d.pieces.length)continue;let c=Nn(a,e);a.points.forEach((p,h)=>{let f=l[h+c],m=f&&i(f);m&&d.points.push({i:h,s:m.s,y:f[1]})});let u=Xo(l);for(let p of s.fittings??[]){let h=Math.min(u,p.at),f=(o=ul(l,h))==null?void 0:o.p,m=f&&i(f);f&&m&&d.fittings.push({id:p.id,kind:p.kind,open:p.open!==!1,s:m.s,y:f[1]})}for(let[p,h]of[["from",l[0]],["to",l[l.length-1]]]){let f=(p==="from"?!s.from:!s.to)?i(h):null;f&&d.ends.push({end:p,s:f.s,y:h[1]})}n.push(d)}return n}var bl=-.3;function yn(r,t,e,n,i){var v;let o=[],s=[],a=g=>t(g),l=[],d=r.from,c=[];for(let g of r.vias){if(g.kind!=="hole"){c.push(g.kind);continue}let b=e.find(R=>R.id===g.joint),$=a(d);if(!b||!$)continue;let x=a(`joint:${b.id}:inside`),P=a(`joint:${b.id}:outside`),S=g.dir?g.dir==="out":Math.hypot($.x-x.x,$.z-x.z)<=Math.hypot($.x-P.x,$.z-P.z);l.push({a:d,b:`joint:${b.id}:${S?"inside":"outside"}`,fits:c}),c=[],d=`joint:${b.id}:${S?"outside":"inside"}`}let u=r.to;if(u.length>1){let g=a(d),b=u.map(a).filter($=>!!$);if(g&&b.length===u.length){let $=b.reduce((E,k)=>E+k.x,0)/b.length,x=b.reduce((E,k)=>E+k.z,0)/b.length,P=Math.hypot(g.x-$,g.z-x)||1,S=Math.min(1,P/2)/P,R=g.y<0||b.some(E=>E.y<0),I={id:i("joint"),kind:"tee",x:bt($+(g.x-$)*S),z:bt(x+(g.z-x)*S),y:R?bl:bt(g.y)};s.push(I),l.push({a:d,b:`joint:${I.id}:in`,fits:c}),c=[],u.forEach((E,k)=>l.push({a:`joint:${I.id}:out${k+1}`,b:E,fits:[]})),u=[]}}u.length&&l.push({a:d,b:u[0],fits:c});let p=g=>{let{kind:b,id:$,port:x}=ut(g),P=b==="joint"?s.find(S=>S.id===$):void 0;return P?Te(P,x):a(g)},h=g=>n(g)==="source",f=g=>n(g)==="sink",m=r.to.some(h)&&!h(r.from)||f(r.from)&&!r.to.some(f);for(let g of l){let b=p(g.a),$=p(g.b);if(!b||!$)continue;let x=Pu(b,$,gl(g.a,e),gl(g.b,e)),P={id:i("pipe"),from:g.a,to:g.b,floor_id:r.floorId,points:x.map(R=>[R[0],R[2]]),heights:x.map(R=>R[1])},S=Xo(Gt(P,p));P.fittings=g.fits.map((R,I)=>({id:i("fit"),kind:R,at:bt(Math.min(S/2,.4+I*.25)),...R==="valve"?{open:!0}:{}})),m&&(P={...P,from:P.to,to:P.from,points:[...P.points].reverse(),heights:[...P.heights??[]].reverse(),fittings:(v=P.fittings)==null?void 0:v.map(R=>({...R,at:bt(Math.max(0,S-R.at))}))}),o.push(P)}return{pipes:o,joints:s}}function gl(r,t){let{kind:e,id:n,port:i}=ut(r),o=e==="joint"&&i==="outside"?t.find(s=>s.id===n):void 0;return(o==null?void 0:o.kind)==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function Pu(r,t,e=null,n=null){let i=r.y<0||t.y<0?bl:bt(Math.max(r.y,t.y)),o=[],[s,a]=[r.x,r.z];e&&([s,a]=[bt(s+e[0]*.5),bt(a+e[1]*.5)],o.push([s,bt(r.y),a]));let[l,d]=[t.x,t.z],c=[];return n&&([l,d]=[bt(l+n[0]*.5),bt(d+n[1]*.5)],c.push([l,bt(t.y),d])),o.push([bt(s),i,bt(a)]),Math.abs(l-s)>.01&&o.push([bt(l),i,bt(a)]),Math.abs(d-a)>.01&&o.push([bt(l),i,bt(d)]),o.push(...c),o.filter((u,p)=>p===0||Math.hypot(u[0]-o[p-1][0],u[1]-o[p-1][1],u[2]-o[p-1][2])>.001)}function vl(r,t,e){let n=o=>{let{kind:s,id:a,port:l}=ut(o),d=s==="joint"&&(l==="inside"||l==="outside")?t.find(c=>c.id===a):void 0;return d&&(d.kind==="wall"||d.kind==="floor")?{id:a,port:l}:null},i=[];for(let o of r.filter(s=>s.from===e||s.to===e)){let s={start:e,other:"",pipes:[],holes:[],fittings:[]},a=o,l=e,d=new Set;for(;a&&!d.has(a.id);){d.add(a.id),s.pipes.push(a.id),s.fittings.push(...(a.fittings??[]).map(h=>h.kind));let c=a.from===l?a.to:a.from,u=c?n(c):null;if(!u){s.other=c;break}s.holes.push({joint:u.id,dir:u.port==="inside"?"out":"in"}),l=`joint:${u.id}:${u.port==="inside"?"outside":"inside"}`;let p=a;a=r.find(h=>h!==p&&(h.from===l||h.to===l)),a||(s.other=l)}i.push(s)}return i}function Au(r,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i,s=o?Math.max(0,Math.min(1,((r[0]-t[0])*n+(r[1]-t[1])*i)/o)):0;return Math.hypot(r[0]-t[0]-n*s,r[1]-t[1]-i*s)}function yl(r,t,e=.03){return r.every(n=>tt(n,t)||t.some((i,o)=>Au(n,i,t[(o+1)%t.length])<=e))}function $l(r,t){return t&&r.states[t]?t:Object.keys(r.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}function wl(r,t){let e=r.states[t];if(!e)return!1;let n=String(e.attributes.device_class??"");return t.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(t):t.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(e.attributes.unit_of_measurement??"")):!1}var ji=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],Hi=["fun_pets","fun_halloween"],zu=["pool"];function es(){try{let r=new URLSearchParams(location.search).get("fp3d_lab");return r==="1"?localStorage.setItem("neonplan3d.lab","1"):r==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function ve(r){return!zu.includes(r)||es()}var kl=["fridge_smart"];function Ml(r){return ji.includes(r)||kl.includes(r)||Hi.includes(r)}var xl="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",Iu={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function Ze(r){let t=r?Iu[r]:void 0;return t?`${xl}#${t}`:xl}function Sl(){return new Set([...ji,...kl,...Hi].filter(ve))}function vt(r){return ve(r)}var ns;function El(){let r=new URL("./neonplan3d-locate.js?v=eb2fbc574bce",new URL(import.meta.url)).href;return ns??=import(r).catch(t=>{throw ns=void 0,t}),ns}function Al(r){let t=$t(r);if(!t||t.light)return!1;let e=t.parts.filter(n=>n.color==="plant").length;return e>0&&e+t.parts.filter(n=>n.color==="pot").length>=t.parts.length/2}var is=["bin120","bin240","bin1100","multi","bag","caddy","underground"],zl=["rest","bio","paper","plastic","glass","garden","recycling","other"],os=["wall","pole","pillar","parcel","bank"],Il={bin120:[.48,.55,.93],bin240:[.58,.73,1.07],bin1100:[1.37,1.07,1.45],multi:[.6,.75,1.07],bag:[.42,.32,.62],caddy:[.3,.26,.32],underground:[1,1,1.15]},Fl={wall:[.38,.14,.34],pole:[.24,.5,1.15],pillar:[.42,.36,1.3],parcel:[.6,.55,1.1],bank:[.95,.3,.7]};function Rl(r){return is.includes(r.variant??"")?r.variant:"bin240"}function Tl(r){return os.includes(r.variant??"")?r.variant:"wall"}var xt=["#3a3f47","#3a3f47"],Xe=["#23262b","#23262b"],oe=["#5a3b25","#5a3b25"],mt=["#1f4fa8","#1f4fa8"],Le=["#e3b616","#e3b616"],st=["#2f7d3b","#2f7d3b"],Pl={default:{rest:xt,bio:oe,paper:mt,plastic:Le,glass:st,garden:st,recycling:Le,other:xt},DE:{rest:Xe,bio:oe,paper:mt,plastic:Le,glass:st,garden:st,recycling:Le},AT:{rest:xt,bio:oe,paper:[xt[0],"#c0262d"],plastic:Le,glass:st,garden:st},CH:{rest:["#d8d8d8","#d8d8d8"],bio:st,paper:mt,plastic:xt,glass:st,garden:st},NL:{rest:xt,bio:st,paper:mt,plastic:["#3a3f47","#e57a1f"],glass:st,garden:st},BE:{rest:xt,bio:st,paper:mt,plastic:mt,glass:st,garden:st},GB:{rest:Xe,bio:["#3a3f47","#5a3b25"],paper:mt,plastic:mt,glass:Xe,garden:oe,recycling:mt},US:{rest:Xe,bio:st,paper:mt,plastic:mt,glass:mt,garden:st,recycling:mt},CA:{rest:Xe,bio:st,paper:mt,plastic:mt,glass:mt,garden:st,recycling:mt},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:xt,bio:oe,paper:[xt[0],"#e3b616"],plastic:[xt[0],"#e3b616"],recycling:[xt[0],"#e3b616"],glass:st,garden:st},IT:{rest:xt,bio:oe,paper:mt,plastic:Le,glass:st,garden:st},ES:{rest:xt,bio:oe,paper:mt,plastic:Le,glass:st,garden:st},PT:{rest:xt,bio:oe,paper:mt,plastic:Le,glass:st,garden:st},DK:{rest:Xe,bio:st,paper:mt,plastic:xt,glass:st,garden:st},SE:{rest:Xe,bio:oe,paper:mt,plastic:xt,glass:st,garden:st},NO:{rest:xt,bio:oe,paper:mt,plastic:xt,glass:st,garden:st},FI:{rest:xt,bio:oe,paper:mt,plastic:xt,glass:st,garden:st}},Ll="DE";function Ol(){return Ll}function ss(r,t){var e;return((e=Pl[t])==null?void 0:e[r])??Pl.default[r]??xt}function Cl(r,t=Ll){let e=ss(r.bin_kind??"rest",t),n=r.bin_color||e[0];return[n,r.bin_lid||(r.bin_color?n:e[1])]}var Fu={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de CasaNeon ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de CasaNeon.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace.",as_furniture_pick:"Elegir mueble \u2026",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de CasaNeon.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_copy:"Copiar",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon \u2013 actualiza CasaNeon (HACS) y recarga la p\xE1gina.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para CasaNeon. Importa aqu\xED tus propios packs (.fp3dpack).",ext_pro:"Extensiones Pro",ext_active:"activa",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: CasaNeon encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia ahora",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas y prop\xF3n ideas como issue en GitHub: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant.",show_menu:"Mostrar",tool_menu:"Herramienta",floor_label:"Planta:",floor_settings:"Ajustes de la planta",floor_settings_of:"Planta {floor}",floor_none_hint:"A\xF1ade tu primera planta arriba con \xABPlanta\xBB \u2192 \xABA\xF1adir planta\xBB.",tool_group_build:"Construir",tool_group_outside:"Exterior",tool_room:"Habitaci\xF3n",view_menu:"Vista",fit_hint:"Mostrar todo el plano de la planta (con el jard\xEDn al dibujar el exterior)",tech_open:"Dibujar la sala t\xE9cnica",tech_open_hint:"Despu\xE9s toca en el plano la pared donde est\xE1 tu instalaci\xF3n.",tech_step:"Paso {n}",tech_step_feed:"Toca \xAB{name}\xBB a la izquierda y luego el punto de la pared por donde entra la tuber\xEDa (abajo del todo: desde el suelo).",tech_step_devices:"Toca la bomba y el filtro de arena a la izquierda: se colocan junto a la pared. La bomba de calor y la dosificaci\xF3n si las tienes.",tech_step_line:"Traza una l\xEDnea: de \xAB{a}\xBB a \xAB{b}\xBB. Pulsa en uno y arrastra hasta el otro.",tech_step_loose:"Un tubo acaba suelto: prol\xF3ngalo hasta un equipo o una tuber\xEDa, o b\xF3rralo (\u270B Seleccionar).",tech_step_drawing:"Sigue arrastrando o toca punto a punto: la l\xEDnea termina en un equipo, una tuber\xEDa o un tubo.",tech_step_fit:"Toca el tubo donde va la v\xE1lvula (el visor): se ilumina en naranja.",tech_mode:"Sala t\xE9cnica",tech_mode_hint:"Dibuja la sala t\xE9cnica en esta pared: entra las tuber\xEDas de la piscina, coloca los equipos, traza los tubos",tech_draw:"Dibujar",tech_pick:"Seleccionar",pool_delete_confirm:"\xBFEliminar la piscina con sus {n} tubos?",tech_erase:"Borrar",tech_erase_hint:"Toca un tubo, una v\xE1lvula de bola, una mirilla o un agujero y se elimina. \xBFLo dibujaste mal? Deshacer tambi\xE9n ayuda.",tech_feeds:"Tuber\xEDas de la piscina",tech_devices:"Equipos",tech_fittings:"Valvuler\xEDa",tech_hint:"Trazar una l\xEDnea: toca un equipo, una tuber\xEDa o un tubo y arrastra hasta el siguiente (o punto a punto). Sobre un tubo crea una T. CasaNeon sabe solo hacia d\xF3nde va el agua y qu\xE9 conexi\xF3n del equipo usar.",tech_no_ports:"Coloca primero el skimmer, el sumidero y las boquillas con la herramienta Piscina.",tech_ok:"Todo conectado: el agua circula.",tech_issue_loose:"{n} extremos sueltos",tech_issue_port:"{name} sin conectar",tech_issue_feed:"{name} a\xFAn no entrado",tech_feed_place:"Toca donde la tuber\xEDa entra en la sala: abajo del todo, desde el suelo; m\xE1s arriba, por la pared.",tech_start:"Toca un equipo o una tuber\xEDa y traza una l\xEDnea.",feed_skimmer:"Skimmer",feed_drain:"Sumidero",feed_inlet:"Boquillas",feed_waste:"Desag\xFCe (lavado)",hp_ports:"Conexiones",hp_side_right:"derecha",hp_side_left:"izquierda",hp_side_back:"detr\xE1s",pool_depth:"Profundidad del vaso (m)",pool_rim:"Borde sobre el c\xE9sped (m)",pool_depth_hint:"Profundidad: del borde al fondo. Una piscina de 1,50 m que sobresale 20 cm: profundidad 1,50, borde 0,20. El agua queda 15 cm bajo el borde.",pool_depth_ground:"La profundidad se ve en 3D en cuanto la piscina est\xE1 en un c\xE9sped, una terraza u otra zona; sin suelo alrededor, el vaso se ver\xEDa desde fuera.",pool_port_depth:"Prof.",pool_port_depth_hint:"Profundidad bajo la l\xEDnea de agua (m): boquillas normalmente 0,30, el skimmer en la l\xEDnea de agua",pool_valves:"V\xE1lvulas",pool_valve_shut:"cerrada",pool_valve_toggle:"Toca para cambiar: tal como est\xE1 la v\xE1lvula de verdad",pool_joint:"Uni\xF3n",block_some_fixed:"\u{1F512} Una pieza est\xE1 fijada: el bloque solo se mueve cuando todas est\xE9n liberadas.",unfix_all:"Liberar todo",wv_block_all:"Bloque entero",wv_block_one:"Solo esta pieza",wv_gap:"Hueco: {w} \u2013 esto cabe:",wv_gap_hint:"Toca un lugar libre de la pared: aqu\xED aparece lo que cabe.",wv_kit_title:"A la pared",wv_recent:"Usados recientemente",wv_none_fits:"Nada cabe en este hueco.",wv_cat_base:"Muebles bajos y aparadores",wv_cat_hang:"Colgados",wv_cat_tall:"Armarios altos",wv_cat_living:"Sentarse y dormir",wv_cat_light:"Luces",wv_cat_pack:"De tus packs",wv_cat_energy:"Energ\xEDa",block_title:"Bloque de muebles",multi_title:"{n} muebles seleccionados",block_hint:"Un clic selecciona todo el bloque, arrastrar lo mueve. Una sola pieza: t\xF3cala dos veces o elige su nombre abajo.",multi_hint:"May\xFAs + clic a\xF1ade o quita muebles, May\xFAs + arrastrar en una zona vac\xEDa dibuja un marco. Mu\xE9velos, g\xEDralos o c\xF3pialos juntos, o \xFAnelos en un bloque.",block_part_edit:"Editar solo esta pieza",block_break:"Deshacer bloque",block_make:"Unir en un bloque",multi_mode:"Seleccionar varios (tocar a\xF1ade, arrastrar dibuja un marco)",block_part:"Parte de un bloque.",block_select:"Seleccionar todo el bloque",block_delete:"\xBFEliminar {n} muebles?",block_delete_fixed:"\xBFEliminar {n} muebles? Algunos est\xE1n fijados.",wall_zoom_hint:"Zoom: rueda del rat\xF3n o dos dedos",wall_zoom_all:"Pared entera",card_pets:"Mostrar las mascotas",card_ghost:"Mostrar el fantasma de Halloween",card_ghost_hint:"Pack divertido Halloween: el fantasma flota tambi\xE9n por la casa de esta tarjeta (p. ej. desact\xEDvalo en la tableta de pared)",card_pets_hint:"Pack divertido Mascotas: mostrar los animales configurados en esta tarjeta (p. ej. desact\xEDvalos en la tableta de pared)",fun_title:"Packs divertidos",fun_intro:"Extras solo por diversi\xF3n; act\xEDvalos y desact\xEDvalos aqu\xED.",fun_name_pets:"Mascotas",fun_feature_pets:"Un gato, un perro o un conejo vive en tu casa 3D: recorre las habitaciones, se tumba en el sof\xE1, la cama o la alfombra y duerme por la noche.",fun_name_halloween:"Halloween",fun_feature_halloween:"Un fantasma que de vez en cuando flota por la casa.",halloween_ghost:"Dejar flotar al fantasma",pets_show:"Mostrar las mascotas",pet_add:"A\xF1adir una mascota",pet_name:"Nombre",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Gato",pet_kind_dog:"\u{1F436} Perro",pet_kind_rabbit:"\u{1F430} Conejo",pet_fur:"Pelaje",pet_fur_orange:"Pelirrojo",pet_fur_tabby:"Atigrado",pet_fur_black:"Negro",pet_fur_white:"Blanco",pet_fur_grey:"Gris",pet_fur_brown:"Marr\xF3n",pet_fur_calico:"Tricolor",pet_fur_golden:"Dorado",pet_fur_cream:"Crema",pet_breed:"Raza",pet_breed_dachshund:"Teckel",pet_breed_pug:"Carlino",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Pastor",pet_floor:"Planta",pet_floor_auto:"Planta baja",tt_ev_camera:"La c\xE1mara detecta movimiento: {name}",terrain:"Terreno",terrain_hint:"D\xF3nde est\xE1 el terreno alrededor de la casa. Lo que queda por debajo (un s\xF3tano, la parte baja de un semis\xF3tano) est\xE1 bajo tierra en 3D; c\xE9spedes, caminos y terrazas est\xE1n sobre el terreno.",terrain_level:"Altura del terreno (m, planta baja = 0)",terrain_earth:"Mostrar los s\xF3tanos bajo tierra",terrain_earth_hint:"Las plantas por debajo del terreno est\xE1n bajo tierra; abre una y la ver\xE1s como en una excavaci\xF3n. Desactivado: quedan sueltas como antes.",terrain_cellar_hint:"Semis\xF3tano: baja la altura del terreno tanto como deba asomar el s\xF3tano, p. ej. \u22121,2 m. Las ventanas de s\xF3tano bajo el terreno reciben un patio ingl\xE9s.",terrain_no_cellar_hint:"Un s\xF3tano es una planta con elevaci\xF3n negativa, p. ej. \u22122,6 m.",terrain_reset:"Restablecer el terreno",cellar_window:"Ventana de s\xF3tano",well:"Patio ingl\xE9s",well_hint:"Esta ventana est\xE1 bajo el nivel del terreno: en 3D recibe un patio ingl\xE9s con rejilla. Desm\xE1rcalo para no tener ninguno, p. ej. si por fuera pasa un camino.",well_rim:"Borde sobre el terreno (m)",cellar_window_hint:"Peque\xF1a y arriba en la pared: 100 \xD7 50 cm, 25 cm bajo el techo. Bajo el terreno recibe en 3D un patio ingl\xE9s con rejilla.",side_fold_hint:"Estrechar la barra lateral: m\xE1s espacio para el plano",furn_ac_unit:"Aire acondicionado (de pared)",furn_awning:"Toldo",furn_group_outdoor:"Terraza y balc\xF3n",bin_from:"Brillar desde (hora, el d\xEDa antes)",bin_until:"hasta (hora, d\xEDa de recogida)",bin_none:"Sin recogida a la vista",hh_title:"Hoy en casa",hh_left:"quedan {t}",hh_done:"\xA1Listo!",hh_finished:"{name} ha terminado",hh_thirsty:"Sed",hh_plant:"{name} necesita agua",hh_service:"{name}: mantenimiento pendiente",hh_fridge_open:"{name} est\xE1 abierto",alert_fridge_door:"Nevera abierta: {name}",alert_short_fridge_door:"Nevera abierta",hh_moisture:"Planta (plant.*) o sensor de humedad",hh_moisture_min:"Sed por debajo de (%)",hh_remaining:"Tiempo restante (sensor)",hh_door:"Sensor de puerta",hh_fridge_door:"Sensor de puerta",hh_appliance_hint:"Mientras funciona, su marcador muestra el tiempo restante; despu\xE9s \xAB\xA1Listo!\xBB hasta que se abre la puerta o vuelve a funcionar.",hh_door_alarm:"Avisar tras (minutos abierto)",hh_service_entity:"Consumible / mantenimiento (sensor)",hh_service_min:"Pendiente desde (\u2264 % o d\xEDas)",hh_service_hint:"P. ej. filtro, sal o abrillantador: un sensor binario (activo = pendiente), un n\xFAmero (% o d\xEDas restantes) o una fecha. Si toca, el aparato brilla en amarillo y aparece en \xABHoy en casa\xBB.",hh_teaser_plant:"Con Hogar Pro la planta muestra cu\xE1ndo necesita agua.",hh_teaser_appliance:"Con Hogar Pro el aparato muestra su tiempo restante y \xAB\xA1Listo!\xBB hasta que se abre la puerta.",hh_teaser_fridge:"Con Hogar Pro CasaNeon avisa cuando la puerta de la nevera est\xE1 abierta demasiado tiempo.",card_household:"Hoy en casa",card_household_hint:"Hogar Pro: tarjeta con contenedores, correo, aparatos terminados, plantas sedientas y mantenimiento",furn_waste_bin:"Contenedor de basura",furn_mailbox:"Buz\xF3n",furn_wall_switch:"Interruptor de pared",furn_water_heater:"Termo el\xE9ctrico",stair_open:"Abierta por debajo (losa inclinada)",stair_open_hint:"Los pelda\xF1os van sobre una losa que sigue la pendiente: el hueco de debajo queda libre, con techo inclinado, y cabe otro tramo o un mueble debajo.",furn_access_point:"Punto de acceso Wi-Fi",ap_entity:"Punto de acceso",ap_mount:"Montaje",ap_ceiling:"Techo",ap_wall:"Pared",ap_hint:"Elige el punto de acceso por su nombre; su estado, clientes, LED, CPU, memoria y bot\xF3n de reinicio se buscan en el mismo dispositivo (UniFi Network).",ap_gestures:"En 3D: tocar enciende o apaga su LED; mantener pulsado lo reinicia (pregunta antes). El anillo brilla azul conectado con el LED encendido, rojo si est\xE1 desconectado y \xE1mbar mientras se actualiza.",ap_role_state:"estado",ap_role_clients:"clientes",ap_role_led:"LED",ap_role_cpu:"CPU",ap_role_memory:"memoria",ap_role_restart:"reinicio",ap_client:"{n} cliente",ap_clients:"{n} clientes",ap_down:"Desconectado",ap_busy:"Actualizando",ap_up:"Conectado",ap_restart_confirm:"\xBFReiniciar {name}? Sus clientes perder\xE1n el Wi-Fi un par de minutos.",heater_entity:"Calentador (water_heater)",heater_capacity:"Capacidad",heater_found:"Encontrado en el mismo dispositivo:",heater_hint:"Elige su entidad water_heater; lo dem\xE1s (si calienta, duchas, tiempo restante, encendido, eco) se busca solo en el mismo dispositivo.",heater_role_heating:"calentando",heater_role_showers:"duchas",heater_role_remaining:"tiempo restante",heater_role_power:"encendido",heater_role_eco:"eco",heater_gestures:"En 3D: tocar lo enciende o apaga; mantener pulsado abre su ficha para regular la temperatura y el modo.",heater_gestures_no_power:"En 3D: tocar o mantener pulsado abre su ficha para regular la temperatura y el modo (no se encontr\xF3 un interruptor de encendido).",heater_shower:"{n} ducha",heater_showers:"{n} duchas",heater_left:"{min} min para agua caliente",furn_lamp_ceiling_fan:"Ventilador de techo con luz",furn_fan_entity:"Entidad del ventilador",ceiling_fan_hint:"La luz es la entidad del elemento de arriba: el motor y la pantalla la encienden. Las aspas conmutan el ventilador por separado y giran mientras funciona, m\xE1s r\xE1pido cuanto mayor es su velocidad.",furn_wall_socket:"Enchufe de pared",furn_group_electric:"Electricidad",socket_count:"Enchufes",socket_n:"Enchufe {n}",socket_switch:"Encender y apagar con (opcional)",socket_power:"Medidor de consumo (W, opcional)",socket_hint:"Un enchufe con interruptor (enchufe inteligente) se enciende y apaga al tocarlo en 3D y su peque\xF1o LED muestra que est\xE1 encendido. Con medidor de consumo cuenta en el balance de energ\xEDa y su pin muestra los vatios de todos sus enchufes. Para ponerlo sobre una encimera, sube su \xABAltura sobre el suelo\xBB.",switch_keys:"Teclas",switch_key:"Entidad de la tecla",switch_key_n:"Tecla {n}",switch_ring:"Anillo de luz (color de)",switch_ring_hint:"Para interruptores con luz alrededor (p. ej. Sonoff TX Ultimate): elige la luz que da su color y brillo; el anillo brilla en la pared alrededor de la placa mientras esa luz est\xE1 encendida.",switch_hint:"Cada tecla conmuta su entidad al tocarla en 3D (una persiana se abre o se cierra) y su LED se enciende mientras est\xE1 encendida o abierta.",furn_group_household:"Hogar",bin_shape:"Forma",bin_shape_bin120:"Contenedor con ruedas 120 l",bin_shape_bin240:"Contenedor con ruedas 240 l",bin_shape_bin1100:"Contenedor 1100 l",bin_shape_multi:"Contenedor con varios compartimentos",bin_shape_bag:"Bolsa",bin_shape_caddy:"Cubo",bin_shape_underground:"Contenedor soterrado",bin_kind:"Residuo",bin_kind_rest:"Resto",bin_kind_bio:"Org\xE1nico",bin_kind_paper:"Papel",bin_kind_plastic:"Envases",bin_kind_glass:"Vidrio",bin_kind_garden:"Restos de poda",bin_kind_recycling:"Reciclaje",bin_kind_other:"Otro",bin_color:"Color",bin_lid:"Tapa",bin_source:"Calendario de recogida o sensor",bin_match:"Palabra del calendario (vac\xEDo: seg\xFAn el residuo)",bin_hint:"El contenedor brilla desde la hora elegida del d\xEDa anterior hasta la hora del d\xEDa de recogida (para todos); su marcador indica \xABHoy\xBB o \xABMa\xF1ana\xBB, al tocarlo muestra las pr\xF3ximas recogidas. En un calendario (p. ej. Waste Collection Schedule) se buscan las palabras de su residuo; un sensor puede dar los d\xEDas o la fecha.",bin_today:"Hoy",bin_tomorrow:"Ma\xF1ana",bin_in_days:"en {n} d\xEDas",mailbox_shape:"Forma",mailbox_shape_wall:"Buz\xF3n de pared",mailbox_shape_pole:"Buz\xF3n en poste (con bandera)",mailbox_shape_pillar:"Buz\xF3n de pie con portaperi\xF3dicos",mailbox_shape_parcel:"Buz\xF3n de paquetes",mailbox_shape_bank:"Buzones agrupados",mailbox_entity:"Sensor de correo (trampilla o indicador)",mailbox_door:"Sensor de la puerta de recogida (opcional)",mailbox_hint:"Con un indicador (p. ej. un input_boolean \xABcorreo\xBB que activa una automatizaci\xF3n) el buz\xF3n brilla mientras est\xE1 activo. Con trampilla y puerta de recogida brilla cuando ha llegado correo despu\xE9s del \xFAltimo vaciado.",mailbox_post:"Correo",pro_name_household:"Hogar Pro",pro_feature_household:"Hogar Pro: contenedores que brillan la v\xEDspera de la recogida, buz\xF3n con correo, plantas con sed; lavadora, secadora y lavavajillas muestran el tiempo restante y \xAB\xA1Listo!\xBB; filtros y consumibles pendientes en amarillo; aviso de nevera abierta; tarjeta \xABHoy en casa\xBB; adem\xE1s la nevera inteligente (americana, puertas con sensores)",household_teaser_bin:"Con Hogar Pro el contenedor brilla la v\xEDspera de la recogida, seg\xFAn tu calendario.",household_teaser_mail:"Con Hogar Pro el buz\xF3n brilla en cuanto hay correo, hasta que se vac\xEDa.",awning_cover:"Toldo (cover)",motor_cover:"Motor (cover)",curtain_side:"Se abre hacia",curtain_side_both:"ambos lados",curtain_side_left:"izquierda (vista de frente)",curtain_side_right:"derecha (vista de frente)",motor_time:"Tiempo de recorrido (s)",motor_invert_hint:"Para covers que indican 100 % con la cortina cerrada o la pantalla abajo.",awning_pitch:"Inclinaci\xF3n (\xB0)",awning_time:"Tiempo de salida completa (s)",awning_position:"Sensor de posici\xF3n (opcional)",awning_valance:"Fald\xF3n (borde de lona delantero)",awning_invert:"Invertir el sentido",awning_invert_hint:"Para covers que informan 100 % cuando el toldo est\xE1 recogido.",awning_kind:"Tipo",awning_kind_arm:"Toldo de brazos articulados (terraza)",awning_kind_drop:"Toldo de brazo invisible / punto recto (balc\xF3n, ventana)",awning_kind_vertical:"Toldo vertical / ZIP (ventana, balc\xF3n)",awning_kind_pergola:"Toldo de p\xE9rgola / galer\xEDa acristalada",awning_kind_side:"Toldo lateral (privacidad)",awning_kind_arm_hint:"El cl\xE1sico sobre la terraza: los brazos articulados empujan la lona hacia fuera con una ligera pendiente. Fondo = salida.",awning_kind_drop_hint:"Los brazos giran desde la pared hacia delante y hacia abajo, la lona se tensa inclinada delante. Fondo = longitud de los brazos, Inclinaci\xF3n = cu\xE1nto bajan los brazos por debajo de la horizontal.",awning_kind_vertical_hint:"La lona baja en vertical por gu\xEDas laterales hasta el suelo \u2013 delante de una ventana, la barandilla de un balc\xF3n o el frente de una p\xE9rgola. Altura sobre el suelo = borde inferior del cofre.",awning_kind_pergola_hint:"Un marco fijo con postes delante; la lona se extiende por encima de sus gu\xEDas. Fondo = hasta los postes, Inclinaci\xF3n = pendiente del techo.",awning_kind_side_hint:"Un poste con la lona enrollada a la izquierda, la lona se extiende en horizontal hacia la derecha hasta el poste opuesto. Ancho = extensi\xF3n, Altura sobre el suelo = altura de la lona.",awning_hint:"Ancho = el toldo a lo largo de la pared, fondo = su salida totalmente extendido; la parte trasera del marco va contra la fachada, la altura sobre el suelo es la parte inferior del cofre. Si el cover informa su posici\xF3n mientras se mueve, el toldo sale despacio en 3D; si solo dice abriendo/cerrando, se mueve seg\xFAn el tiempo de salida.",furn_only_color:"Brillar solo en un color",furn_only_color_pick:"Color",furn_only_color_hint:"La l\xE1mpara solo brilla mientras la luz muestra aproximadamente este color, p. ej. amarillo para \xABagua\xBB en el lavabo. Los dem\xE1s colores de la misma luz quedan oscuros aqu\xED.",furn_run_w:"En marcha desde (vatios)",furn_run_w_hint:"A partir de cu\xE1ntos vatios en el sensor de potencia el aparato cuenta como en marcha y brilla (vac\xEDo: 10 W). Para aparatos tras un enchufe inteligente que consumen unos vatios en espera, p. ej. 100.",roof_window_float:"Mostrar sobre la habitaci\xF3n sin el tejado",roof_window_float_hint:"Cuando el tejado se desvanece al acercarte a una planta o una habitaci\xF3n, la ventana se queda en su sitio sobre la habitaci\xF3n: abierta, abatida, con su persiana. Funciona sobre las habitaciones de la planta en la que se apoya el tejado; donde la pendiente baja sobre una planta inferior, las ventanas se quedan en el tejado. Desactivado: solo se ve en el tejado.",tech_ask:"Tubo colocado: \xBFsigue hasta la piscina? Entonces aqu\xED va un pasamuros con su salida al exterior:",tech_ask_loose:"Dejarlo abierto",tech_step_tee:"Toca el tubo donde va la derivaci\xF3n: se corta ah\xED y desde la T trazas la siguiente l\xEDnea.",side_resize:"Arrastra para ensanchar o estrechar la barra lateral",furn_extra:"Valor extra junto al s\xEDmbolo (sensor, p. ej. temperatura del agua)",settings_house:"Casa",settings_weather:"Tiempo y avisos",roof_basics:"Forma del tejado",through_full:"Pantalla completa",through_full_hint:"La imagen de la c\xE1mara en toda la pantalla (Esc o Atr\xE1s para salir). Donde el navegador no puede, se abre la vista de c\xE1mara de Home Assistant, tambi\xE9n con sonido.",director:"Director en directo",director_hint:"Una pantalla muestra sola lo que pasa en casa: suena el timbre y la vista vuela a la puerta y mira por su c\xE1mara. Cada evento est\xE1 apagado hasta que lo actives.",director_here:"Activar en este dispositivo",director_here_hint:"Solo para este navegador, p. ej. la tablet de la pared. En una tarjeta del dashboard el director se activa en los ajustes de la tarjeta.",director_doorbell:"Suena el timbre: volar a la puerta y mirar por la c\xE1mara",director_doorbell_entity:"Timbre",director_doorbell_camera:"C\xE1mara de la puerta",director_no_doorbell:"No se encontr\xF3 ning\xFAn timbre. Elige la entidad event o binary_sensor de tu timbre.",director_motion:"Una c\xE1mara ve a alguien",director_appliances:"Lavadora, secadora o lavavajillas terminados",director_alerts:"Aviso nuevo (humo, agua, alarma, ventana abierta con lluvia \u2026)",director_hold:"Volver tras (segundos)",director_back_hint:"Despu\xE9s la vista vuelve a donde estaba, salvo que alguien haya tocado la pantalla mientras tanto. A quien est\xE9 usando la tablet solo le interrumpen el timbre y los avisos. Con el timbre se queda el doble de tiempo.",voice:"Control por voz",voice_hint:"Un bot\xF3n de micr\xF3fono abajo a la izquierda en la vista 3D: t\xF3calo y habla. \xABMuestra el sal\xF3n\xBB, \xABplanta de arriba\xBB o \xABtoda la casa\xBB muestran el sitio; lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist de Home Assistant.",voice_here:"Activar en este dispositivo",aliases:"Otros nombres para la voz",aliases_hint:"Otros nombres separados por comas, para pedir la \xABSmart TV Pro\xBB como \xABtele del sal\xF3n\xBB o \xABtele\xBB. Los usan el control por voz y la b\xFAsqueda.",aliases_placeholder:"p. ej. tele del sal\xF3n, tele",voice_understands:"Qu\xE9 entiende CasaNeon",voice_examples:"\xABMuestra el sal\xF3n\xBB|\xABVe a la planta de arriba\xBB|\xABMuestra toda la casa\xBB|\xABMuestra la lavadora\xBB / \xAB\xBFD\xF3nde est\xE1 la secadora?\xBB|\xABMuestra la c\xE1mara de la entrada\xBB|\xABMuestra las c\xE1maras\xBB|Todo lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist",voice_needs:"Necesita https, permiso para el micr\xF3fono (en Fully Kiosk: Web Content Settings \u2192 acceso al micr\xF3fono) y una pipeline de Assist con voz a texto. En una tarjeta del dashboard el bot\xF3n se activa en los ajustes de la tarjeta.",voice_showing:"Mostrando {name}.",screen_name:"Nombre de pantalla (para Assist)",screen_name_placeholder:"p. ej. Cocina",screen_name_hint:"Preguntar a Assist (\xABMuestra el sal\xF3n\xBB) o una automatizaci\xF3n que llame al servicio neonplan3d.ask llega a todas las vistas de CasaNeon abiertas. Si el servicio nombra una pantalla, solo reacciona la vista con ese nombre.",voice_button:"Hablar",voice_listen:"Escuchando \u2026",voice_none:"No se entendi\xF3 nada",voice_silent:"El micr\xF3fono solo da silencio. Normalmente lo tiene otra app: en Fully Kiosk desactiva la detecci\xF3n ac\xFAstica de movimiento (Motion Detection \u2192 Acoustic Detection) y recarga.",voice_no_pipeline:"No hay voz a texto configurada en Assist (Ajustes \u2192 Asistentes de voz).",voice_denied:"Micr\xF3fono no permitido: solo funciona con https y con el permiso en el navegador o en Fully Kiosk.",voice_error:"Control por voz: {msg}",card_voice:"Control por voz (bot\xF3n de micr\xF3fono)",card_voice_hint:"\xABMuestra el sal\xF3n\xBB muestra la habitaci\xF3n; las dem\xE1s frases van a Assist. Necesita https y el micr\xF3fono permitido",director_mic_test:"\u{1F399}\uFE0F Probar el micr\xF3fono",director_mic_hint:"Comprueba https, el micr\xF3fono y la voz a texto de Assist en este dispositivo y muestra qu\xE9 habitaci\xF3n abrir\xEDa una frase. No se acciona nada.",voice_pipeline:"Pipeline de Assist en este dispositivo",voice_sentences:"Frases para Assist",voice_sentences_hint:"Lo que Assist pasa a CasaNeon. Preguntas como \xAB\xBFQu\xE9 ventanas est\xE1n abiertas?\xBB las contesta si no Home Assistant; \xABPregunta a la casa qu\xE9 ventanas est\xE1n abiertas\xBB siempre llega a CasaNeon.",voice_pipeline_preferred:"La preferida en Home Assistant",voice_pipeline_no_stt:"sin voz a texto",backdrop:"Fondo",backdrop_kind:"Detr\xE1s de la casa",backdrop_color:"Un color",backdrop_top:"Color arriba",backdrop_bottom:"Color abajo",backdrop_image_url:"Direcci\xF3n de la imagen",backdrop_dim:"Oscurecer",backdrop_image_bad:"Esta direcci\xF3n no sirve: https://\u2026 o una ruta como /local/fondo.jpg",backdrop_hint:"Pon la imagen en config/www de Home Assistant; entonces es /local/nombre.jpg. Oscurecer mantiene legibles las l\xEDneas de ne\xF3n. No cuesta rendimiento, tampoco en tablets antiguas.",director_live:"Imagen en directo al mirar por la c\xE1mara",director_live_hint:"En vez de una foto cada pocos segundos corre el v\xEDdeo de la c\xE1mara (con el reproductor de Home Assistant). Necesita m\xE1s potencia: mejor desactivado en tablets muy antiguas.",director_triggers:"Disparadores propios",director_triggers_hint:"Cuando una de estas entidades se enciende o se abre (un segundo timbre, el port\xF3n del garaje, la puerta del jard\xEDn), la vista vuela all\xED y mira por la c\xE1mara elegida (sin c\xE1mara: al dispositivo).",director_trigger_entity:"Disparador",director_trigger_add:"+ A\xF1adir disparador",card_director:"Director en directo (cabina de c\xE1maras)",card_director_hint:"La tarjeta muestra sola lo que pasa. Qu\xE9 eventos, lo eliges en el editor en \xABDirector en directo\xBB.",card_roof:"Mostrar el tejado",card_roof_hint:"Desactivado: la casa se ve sin tejado, como si no lo tuviera, con las habitaciones abiertas (los campos solares del tejado desaparecen con \xE9l)",room_order_up:"Subir la habitaci\xF3n (antes en la barra de habitaciones)",room_order_down:"Bajar la habitaci\xF3n (despu\xE9s en la barra de habitaciones)",outdoor_area_hint:"Con un \xE1rea, la superficie funciona como una habitaci\xF3n: un toque en 3D la abre con los dispositivos del \xE1rea, aparece en la barra de habitaciones y lleva su nombre.",angle_lock:"Bloqueo 3D",angle_lock_hint:"El \xE1ngulo queda fijo: arrastrar desplaza la vista y el zoom sigue funcionando; nadie gira la casa sin querer.",strip_rise:"Inclinaci\xF3n (\xB0)",strip_rise_hint:"La tira sube a lo largo, p. ej. por la escalera o un pasamanos (~35\u201340\xB0). Su altura sobre el suelo es entonces la de su centro.",wall_slope:"Inclinada",wall_slope_hint:"Pared inclinada: una altura propia en cada esquina y el borde superior recto entre ellas (un cobertizo, una pendiente, ventanas altas en el lado alto). Ventanas y puertas quedan por debajo del borde.",wall_slope_start:"Altura en la esquina {n} (m)",wall_slope_end:"Altura en la esquina {n} (m)",theme_auto:"Auto (D\xEDa/Ne\xF3n seg\xFAn el sol)",markers_room:"En la habitaci\xF3n",pin_size:"Tama\xF1o de los s\xEDmbolos",pin_size_small:"Peque\xF1o",pin_size_normal:"Normal",pin_size_large:"Grande",hh_notes:"Tabl\xF3n (ayudante de texto)",hh_notes_hint:"Un ayudante de texto (input_text) o sensor cuyo texto aparece en \xABHoy en casa\xBB; separa varias l\xEDneas con |. Las automatizaciones escriben en \xE9l (\xABel paquete est\xE1 en el garaje\xBB) y la tarjeta lo muestra.",heat_sensor:"Calefacci\xF3n (sensor)",heat_sensor_hint:"Si el termostato no dice si calienta (las v\xE1lvulas Tuya informan un \xABwork state\xBB), elige aqu\xED ese sensor: encendido/abierto/calentando o una apertura mayor de 0 % hace brillar el radiador.",door_lock:"Cerradura inteligente",door_lock_hint:"La cerradura de la puerta (Nuki, Aqara \u2026): un pin en la puerta muestra cerrada o abierta; un toque la cierra o la abre.",clock:"Reloj",clock_off:"Desactivado",clock_tl:"\u2196 reloj",clock_tr:"\u2197 reloj",clock_bl:"\u2199 reloj",clock_br:"\u2198 reloj",editor_floor:"Planta inicial del editor",editor_floor_auto:"La primera de la lista",editor_floor_hint:"La planta con la que se abre el editor.",director_motion_off:"Desactivado",director_motion_person:"Solo personas",director_motion_all:"Cualquier movimiento",voice_sentences_distinct:"Solo las inequ\xEDvocas (\xABMuestra \u2026\xBB, \xABPregunta a la casa \u2026\xBB, \xABCasa, \u2026\xBB)",voice_sentences_all:"Todas las preguntas (tambi\xE9n las que Home Assistant contesta por s\xED mismo)",voice_sentences_off:"Ninguna (predeterminado \u2013 sin archivo de frases)",backdrop_look:"El cielo del aspecto (por defecto)",backdrop_gradient:"Degradado",backdrop_image:"Imagen",voice_sentences_kept:"Has cambiado t\xFA el archivo de frases de {langs} \u2013 CasaNeon no lo toca.",voice_sentences_failed:"No se pudo escribir el archivo de frases.",voice_sentences_file:"CasaNeon solo crea el archivo custom_sentences/<idioma>/neonplan3d.yaml cuando eliges frases aqu\xED. Un archivo que hayas cambiado nunca se sobrescribe; al quitar la integraci\xF3n se borra el archivo de CasaNeon.",roof_end:"Extremo",roof_end_auto:"seg\xFAn la forma",roof_end_gable:"Hastial",roof_end_hint:"C\xF3mo termina la cumbrera en este extremo: hastial (muro vertical), fald\xF3n o media cadera; por ejemplo, un fald\xF3n solo en un lado.",devices_hide_all:"Ocultar los {n} en el panel de la habitaci\xF3n",devices_show_all:"Mostrar de nuevo los {n}",sill_board:"Alf\xE9izar",sill_board_hint:"Autom\xE1tico: a partir de 30 cm de antepecho, alf\xE9izar por dentro y por fuera; ninguno en una ventana que se apoya directamente sobre otra (montante, frente acristalado dividido).",sill_board_auto:"autom\xE1tico",sill_board_none:"ninguno",sill_board_inside:"solo dentro",sill_board_outside:"solo fuera",lib_room_all:"Todas las habitaciones",lib_room_living:"Sal\xF3n",lib_room_dining:"Comedor",lib_room_kitchen:"Cocina",lib_room_bedroom:"Dormitorio",lib_room_kids:"Ni\xF1os",lib_room_bath:"Ba\xF1o",lib_room_office:"Oficina",lib_room_hall:"Pasillo",lib_room_utility:"Lavadero",lib_room_garage:"Garaje",lib_room_garden:"Jard\xEDn",lib_room_hobby:"Hobby y fitness",lib_kind_sofa:"Sof\xE1s",lib_kind_seating:"Asientos",lib_kind_table:"Mesas",lib_kind_storage:"Armarios y estanter\xEDas",lib_kind_bed:"Camas",lib_kind_kitchen:"Cocina",lib_kind_appliance:"Electrodom\xE9sticos",lib_kind_bath:"Ba\xF1o",lib_kind_lamp:"Luces",lib_kind_media:"TV y audio",lib_kind_office:"Oficina",lib_kind_tech:"T\xE9cnica y hogar inteligente",lib_kind_heating:"Calefacci\xF3n y clima",lib_kind_energy:"Energ\xEDa",lib_kind_household:"Hogar",lib_kind_deco:"Decoraci\xF3n",lib_kind_plant:"Plantas",lib_kind_outdoor:"Jard\xEDn y exterior",lib_kind_kids:"Ni\xF1os",lib_kind_sport:"Fitness",lib_kind_pets:"Mascotas",lib_kind_vehicle:"Veh\xEDculos",lib_kind_stairs:"Escaleras y barandillas",lib_kind_architecture:"Arquitectura",lib_recent:"Usados recientemente",lib_favorites:"Favoritos",lib_fav_add:"A\xF1adir a favoritos",lib_fav_remove:"Quitar de favoritos",lib_chip_electric:"Vinculable",lib_chip_light:"Ilumina",lib_chip_outdoor:"Exterior",lib_more:"Mostrar {n} m\xE1s",lib_basic:"B\xE1sico",lib_sizes:"{n} tama\xF1os",lib_hint_room:"Sugerido para la habitaci\xF3n abierta \u2013 cambia arriba.",persons:"Personas",locate:"Localizaci\xF3n",bin_out:"Sacado (ayudante)",bin_out_hint:"Opcional: encendido mientras el cubo est\xE1 fuera (input_boolean, interruptor o sensor binario). Entonces deja de brillar y su etiqueta dice \xABsacado \u2713\xBB; tocar el cubo conmuta un ayudante o interruptor. Una automatizaci\xF3n nocturna lo restablece.",bin_out_done:"sacado \u2713",bin_out_mark:"Marcar como sacado",bin_next_only:"Etiquetar solo la pr\xF3xima recogida",bin_days:"Mostrar etiquetas solo \u2026 d\xEDas antes",bin_days_always:"siempre",bin_tags_hint:"Para todos los cubos. Los cubos sin etiqueta siguen en \xABHoy en casa\xBB y muestran sus recogidas al tocarlos.",hh_service2:"{name}: {what} pendiente",hh_service2_entity:"Segundo mantenimiento (p. ej. base)",hh_service2_min:"Segundo pendiente desde (\u2264 % o d\xEDas)",door_lock_btn:"Bloquear",door_unlock_btn:"Desbloquear",door_lock_confirm:"\xBFSeguro que quieres bloquear {name}?",door_unlock_confirm:"\xBFSeguro que quieres desbloquear {name}?",garage_pulse_hint:"Un interruptor o bot\xF3n como motor: un toque en la puerta da un impulso (el interruptor se enciende, el bot\xF3n se pulsa); si la puerta est\xE1 abierta lo indica el contacto.",pin_standby:"En espera"};function se(r,t,e={}){let n=Fu[t]??t;for(let[i,o]of Object.entries(e))n=n.replace(`{${i}}`,String(o));return n}function Bt(r,t,e=2){return t.toLocaleString("es",{maximumFractionDigits:e})}var Ru={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Bn(r){return Ru[r]}function jl(r,t){var n;let e=`${t} ${String(((n=r.states[t])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(e)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(e)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(e)?"pet":"motion"}function Hl(r,t){var n,i;let e=(i=(n=r.entities)==null?void 0:n[t])==null?void 0:i.device_id;return e?Object.values(r.entities??{}).filter(o=>o.device_id===e&&o.entity_id.startsWith("binary_sensor.")).map(o=>o.entity_id).filter(o=>{var s;return["motion","occupancy","presence"].includes(String((s=r.states[o])==null?void 0:s.attributes.device_class))}):[]}function Dl(r){let t=(r??"").trim();return!t||/["'()\\\s]/.test(t)?null:/^(https?:\/\/|\/)/i.test(t)||/^data:image\//i.test(t)?t:null}function Vl(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function Wl(r){try{r?localStorage.setItem("neonplan3d.voice","1"):localStorage.removeItem("neonplan3d.voice")}catch{}}function Nl(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function Bl(r){try{r.trim()?localStorage.setItem("neonplan3d.screen",r.trim()):localStorage.removeItem("neonplan3d.screen")}catch{}}function ql(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function Kl(r){try{r?localStorage.setItem("neonplan3d.voicePipeline",r):localStorage.removeItem("neonplan3d.voicePipeline")}catch{}}var xf=3*6e4;var rs="neonplan3d.director";function Ul(){try{return localStorage.getItem(rs)==="1"}catch{return!1}}function Gl(r){try{r?localStorage.setItem(rs,"1"):localStorage.removeItem(rs)}catch{}}var Tu=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Yl(r,t){return t?r.states[t]?[t]:[]:Object.keys(r.states).filter(e=>{let n=r.states[e];if(e.startsWith("event."))return n.attributes.device_class==="doorbell";if(!e.startsWith("binary_sensor."))return!1;let i=`${e} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return Tu.test(i)}).sort()}function Ql(r,t,e,n){var c;if(n)return n;let i=r.entities??{},o=(c=i[t])==null?void 0:c.device_id,s=e.filter(u=>u.startsWith("camera.")),a=o?s.find(u=>{var p;return((p=i[u])==null?void 0:p.device_id)===o}):void 0;if(a)return a;let l=u=>{var p,h,f,m;return((p=i[u])==null?void 0:p.area_id)??((m=(f=r.devices)==null?void 0:f[((h=i[u])==null?void 0:h.device_id)??""])==null?void 0:m.area_id)??null},d=l(t);return d&&s.find(u=>l(u)===d)||null}var re=Math.PI/180;function Yt(r){let t=Math.min(r.x0,r.x1),e=Math.max(r.x0,r.x1),n=Math.min(r.z0,r.z1),i=Math.max(r.z0,r.z1);return r.axis==="x"?{u0:t,u1:e,w:i-n,at:(o,s)=>[o,r.flip?i-s:n+s]}:{u0:n,u1:i,w:e-t,at:(o,s)=>[r.flip?e-s:t+s,o]}}function ue(r){let t=Yt(r).w,e=r.eave_a,n=r.eave_b,i=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*re),o=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*re);if(r.shape==="flat"||r.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(r.shape==="pent")return{vr:t,rh:e+t*i,y:l=>e+l*i};if(r.shape==="mansard"){let l=nc(t,e,n,i,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(i+o))):t/2,a=e+s*i;return{vr:s,rh:a,y:l=>l<=s?e+l*i:n+(t-l)*o}}function as(r){let t=r.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Zl=.14;function Xl(r,t){return!r.open&&Math.min(r.base,r.eave_a,r.eave_b)<t-.05}function tc(r,t){return ue(r).rh-Zl>t+.01}function ec(r,t,e){let n=[];for(let i of as(r)){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let o=Yt(i),s=ue(i),a=t+e+Zl,l=[],d=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*re),c=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*re);d>1e-6&&l.push((a-i.eave_a)/d),i.shape==="gable"&&c>1e-6&&l.push(o.w-(a-i.eave_b)/c);for(let u of l)u<=.01||u>=o.w-.01||i.shape==="gable"&&Math.abs(s.y(u)-a)>1e-6||n.push([o.at(o.u0,u),o.at(o.u1,u)])}return n}function Lu(r,t){let e=r.length;if(e<3||Math.abs(t)<1e-9)return r.map(o=>[o[0],o[1]]);let n=Rt(r)>=0?1:-1,i=[];for(let o=0;o<e;o++){let s=r[(o+e-1)%e],a=r[o],l=r[(o+1)%e],d=Jl([a[0]-s[0],a[1]-s[1]]),c=Jl([l[0]-a[0],l[1]-a[1]]),u=[d[1]*n,-d[0]*n],p=[c[1]*n,-c[0]*n],h=u[0]+p[0],f=u[1]+p[1],m=Math.hypot(h,f);if(m<1e-6){i.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let v=(h*u[0]+f*u[1])/m,g=Math.min(4,1/Math.max(.25,v));i.push([a[0]+h/m*t*g,a[1]+f/m*t*g])}return i}function Jl(r){let t=Math.hypot(r[0],r[1])||1;return[r[0]/t,r[1]/t]}function ls(r){let t=r.map(n=>n[0]),e=r.map(n=>n[1]);return{x0:Math.min(...t),z0:Math.min(...e),x1:Math.max(...t),z1:Math.max(...e)}}function Di(r,t,e,n){let i=At(r,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!i.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=i.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let p of[u.a,u.b])s.set(o(p),[...s.get(o(p))??[],u]);let l=new Set,d=null;for(let u of a){if(l.has(u))continue;l.add(u);let p=[u.a,u.b],h=u.b;for(;;){let f=(s.get(o(h))??[]).find(m=>!l.has(m));if(!f||(l.add(f),h=o(f.a)===o(h)?f.b:f.a,o(h)===o(p[0])))break;p.push(h)}p.length>=3&&o(h)===o(p[0])&&(!d||Math.abs(Rt(p))>Math.abs(Rt(d)))&&(d=p)}if(!d)return null;let c=[];for(let u=0;u<d.length;u++){let p=d[(u+d.length-1)%d.length],h=d[u],f=d[(u+1)%d.length],m=(h[0]-p[0])*(f[1]-h[1])-(h[1]-p[1])*(f[0]-h[0]);Math.abs(m)>1e-6&&c.push(h)}return c.length>=3?Lu(c,e):null}var qn=Math.tan(30*re);function nc(r,t,e,n,i){let o=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,i>1e-6?2.4/i:r*.3),a=t+o*n,l=e+s*i,d=Math.min(r-s,Math.max(o,(l-a+qn*(r-s+o))/(2*qn))),c=a+(d-o)*qn;return{vla:o,vlb:s,yla:a,ylb:l,vr:d,rh:c,y:p=>p<=o?t+p*n:p<=d?a+(p-o)*qn:p<=r-s?l+(r-s-p)*qn:e+(r-p)*i}}function cs(r,t){let e=Yt(r),n=ue(r),i=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),d=(H,U)=>[H,U,n.y(U)],c=d(a,-o),u=d(l,-o),p=d(l,i+s),h=d(a,i+s),f=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*re),m=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*re);if(r.shape==="pent"){let H=[c,u,p,h],U=[[0,n.y(0)],[i,n.y(i)]];return{faces:[H],rim:H,ridges:[[p,h]],gable:U,gables:[U,U]}}if(r.shape==="pyramid"){let H=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[c,u,H],[u,p,H],[p,h,H],[h,c,H]],rim:[c,u,p,h],ridges:[[c,H],[h,H],[u,H],[p,H]],gable:null,gables:[null,null]}}if(r.shape==="mansard"){let H=nc(i,r.eave_a,r.eave_b,f,m),U=[[0,n.y(0)],[H.vla,H.yla],[H.vr,H.rh],[i-H.vlb,H.ylb],[i,n.y(i)]],G=[a,H.vla,H.yla],Z=[l,H.vla,H.yla],Y=[a,i-H.vlb,H.ylb],it=[l,i-H.vlb,H.ylb],q=[a,H.vr,H.rh],lt=[l,H.vr,H.rh];return{faces:[[c,u,Z,G],[G,Z,lt,q],[q,lt,it,Y],[Y,it,p,h]],rim:[c,u,Z,lt,it,p,h,Y,q,G],ridges:[[q,lt],[G,Z],[Y,it]],gable:U,gables:[U,U]}}let[v,g]=ds(r)??["gable","gable"],b=us(r,[v,g]),$=v==="gable"?[a,n.vr,n.rh]:[e.u0+b.d0,n.vr,n.rh],x=g==="gable"?[l,n.vr,n.rh]:[e.u1-b.d1,n.vr,n.rh],P=[a,b.vah,b.yh],S=[a,b.vbh,b.yh],R=[l,b.vah,b.yh],I=[l,b.vbh,b.yh],E=v==="halfhip",k=g==="halfhip",w=[[c,u,...k?[R]:[],x,$,...E?[P]:[]],[$,x,...k?[I]:[],p,h,...E?[S]:[]]];v==="hip"&&w.push([h,c,$]),E&&w.push([S,P,$]),g==="hip"&&w.push([u,p,x]),k&&w.push([R,I,x]);let A=[c,u,...g==="gable"?[x]:k?[R,I]:[],p,h,...v==="gable"?[$]:E?[S,P]:[]],M=[[$,x]];v==="hip"&&M.push([c,$],[h,$]),E&&M.push([P,$],[S,$]),g==="hip"&&M.push([u,x],[p,x]),k&&M.push([R,x],[I,x]);let T=[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]],C=[[0,n.y(0)],[b.vah,b.yh],[b.vbh,b.yh],[i,n.y(i)]],O=H=>H==="gable"?T:H==="halfhip"?C:null,D=[O(v),O(g)];return{faces:w,rim:A,ridges:M,gable:D[0]??D[1],gables:D}}function ds(r){if(r.shape!=="gable"&&r.shape!=="hip"&&r.shape!=="halfhip")return null;let t=r.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(r.end_u0),e(r.end_u1)]}function us(r,t){let e=Yt(r),n=ue(r),i=e.w,o=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*re),s=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*re),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,d=Math.min(n.y(0),n.y(i)),c=d+(n.rh-d)*.55,u=o>1e-6?Math.min(n.vr,(c-r.eave_a)/o):n.vr,p=s>1e-6?Math.max(n.vr,i-(c-r.eave_b)/s):n.vr,h=Math.min(l,Math.min(n.vr,i-n.vr)||i/2),f=Math.min(l-.1,(n.rh-c)/Math.max(.2,o)),m=v=>v==="hip"?h:v==="halfhip"?f:0;return{d0:m(t[0]),d1:m(t[1]),yh:c,vah:u,vbh:p}}function Ou(r,t,e){let n=null;for(let i of r.faces){if(!tt([t,e],i.map(b=>[b[0],b[1]])))continue;let[o,s]=i,a=i.slice(2).find(b=>Math.abs((s[0]-o[0])*(b[1]-o[1])-(s[1]-o[1])*(b[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],d=s[2]-o[2],c=s[1]-o[1],u=a[0]-o[0],p=a[2]-o[2],h=a[1]-o[1],f=d*h-c*p,m=c*u-l*h,v=l*p-d*u;if(Math.abs(m)<1e-9)continue;let g=o[2]-(f*(t-o[0])+v*(e-o[1]))/m;n=n===null?g:Math.min(n,g)}return n}function Cu(r,t,e){let n=Math.min(r.x0,r.x1),i=Math.max(r.x0,r.x1),o=Math.min(r.z0,r.z1),s=Math.max(r.z0,r.z1);return r.axis==="x"?[t,r.flip?s-e:e-o]:[e,r.flip?i-t:t-n]}function ju(r){return{x0:Math.min(r.x0,r.x1),x1:Math.max(r.x0,r.x1),z0:Math.min(r.z0,r.z1),z1:Math.max(r.z0,r.z1)}}function ic(r,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of r){if(s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||i(s)<i(t)*1.5)continue;let a=ju(s);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!o||i(s)<i(o))&&(o=s)}return o}function oc(r,t,e,n){let i=Yt(r),o=ue(r),s=2,a=Math.max(i.u0+.3,Math.min(i.u1-s-.3,(n??(i.u0+i.u1)/2)-s/2)),l=t==="a"?r.eave_a:r.eave_b,d=t==="a"?r.pitch_a:r.pitch_b,c=l+1.4,u=s/2*Math.tan(35*re),p=c+u,h=Math.max(.8,Math.min(i.w/2-.2,(p-l)/Math.max(.15,Math.tan(Math.min(80,d)*re)))),f=t==="a"?0:i.w-h,m=t==="a"?h:i.w,v=i.at(a,f),g=i.at(a+s,m);return{id:e,x0:Math.round(Math.min(v[0],g[0])*100)/100,z0:Math.round(Math.min(v[1],g[1])*100)/100,x1:Math.round(Math.max(v[0],g[0])*100)/100,z1:Math.round(Math.max(v[1],g[1])*100)/100,shape:"gable",axis:r.axis==="x"?"z":"x",eave_a:Math.round(c*100)/100,eave_b:Math.round(c*100)/100,pitch_a:35,pitch_b:35,base:Math.round(o.y(t==="a"?0:i.w)*100)/100,overhang:.15,dormer:!0}}function sc(r,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Yt(t),n=ue(t).rh,i=cs(r,{u0:0,u1:0,a:0,b:0}),o=ue(r),s=f=>{let[m,v]=e.at(f,e.w/2),[g,b]=Cu(r,m,v);return Ou(i,g,b)??o.y(b)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,d=a?e.u1:e.u0,c=a?1:-1,u=Math.abs(d-l),p=d;for(let f=.5;f<u;f+=.05)if(s(l+c*f)>=n-.02){p=l+c*f;break}if(Math.abs(p-d)<.05)return t;let h={...t};return t.axis==="x"?d===e.u1?h.x1=p:h.x0=p:d===e.u1?h.z1=p:h.z0=p,h}function rc(r,t,e){let n=Yt(t),i=r.floors.flatMap(d=>d.rooms.filter(c=>c.points.length>=3&&d.elevation+d.height>t.base+.05)),o=d=>d.some(c=>i.some(u=>tt(c,u.points))),s=.35,a=[.15,.5,.85].map(d=>n.u0+(n.u1-n.u0)*d),l=[.15,.5,.85].map(d=>n.w*d);return{a:o(a.map(d=>n.at(d,-s)))?0:e,b:o(a.map(d=>n.at(d,n.w+s)))?0:e,u0:o(l.map(d=>n.at(n.u0-s,d)))?0:e,u1:o(l.map(d=>n.at(n.u1+s,d)))?0:e}}function ac(r,t,e,n,i){let o=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])o.push([t+(n-t)*a,e+(i-e)*l]);let s=r.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&o.some(d=>tt(d,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function lc(r,t){let e=r.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function Vi(r){return ue(r).rh}function cc(r,t=e=>`roof_${e+1}`){var l;let e=((l=r.settings.roof)==null?void 0:l.pitch)??35,n=r.settings.wall_exterior,i=r.floors.filter(d=>d.rooms.some(c=>c.points.length>=3)).sort((d,c)=>c.elevation-d.elevation),o=[],s=[],a=d=>Math.round(d*1e3)/1e3;for(let d of i){let c=d.rooms.filter(x=>x.points.length>=3),u=[...new Set(c.flatMap(x=>x.points.map(P=>a(P[0]))))].sort((x,P)=>x-P),p=[...new Set(c.flatMap(x=>x.points.map(P=>a(P[1]))))].sort((x,P)=>x-P),h=u.length-1,f=p.length-1,m=(x,P)=>x.some(S=>tt(P,S.points)),v=[];for(let x=0;x<f;x++){v.push([]);for(let P=0;P<h;P++){let S=[(u[P]+u[P+1])/2,(p[x]+p[x+1])/2];v[x].push(m(c,S)&&!m(s,S))}}let g=v.map(x=>x.map(()=>!1)),b=(x,P)=>v[P][x]&&!g[P][x],$=d.elevation+d.height;for(let x=0;x<f;x++)for(let P=0;P<h;P++){if(!b(P,x))continue;let S=P;for(;S+1<h&&b(S+1,x);)S++;let R=x;for(;R+1<f&&Array.from({length:S-P+1},(A,M)=>b(P+M,R+1)).every(Boolean);)R++;for(let A=x;A<=R;A++)for(let M=P;M<=S;M++)g[A][M]=!0;let I=u[P]-n,E=u[S+1]+n,k=p[x]-n,w=p[R+1]+n;Math.min(E-I,w-k)<.8||o.push({id:t(o.length),x0:a(I),z0:a(k),x1:a(E),z1:a(w),shape:"gable",axis:E-I>=w-k?"x":"z",eave_a:a($),eave_b:a($),pitch_a:e,pitch_b:e,base:a($),overhang:null})}s.push(...c)}return o}var nn=Math.PI/180,dc=1.13,ps=1.72,Qt=.025,tn=.07,uc=.25;function pe(r,t){var n;let e=[];for(let i of r.floors){if(t&&i.id!==t)continue;let{walls:o}=At(i.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},i.walls??[]);for(let s of o){if(!s.exterior&&!s.free)continue;let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],d=Math.hypot(a,l);if(d<.5)continue;let c=l/d,u=-a/d,p=Math.min(i.height,s.height??i.height),h=((n=s.sources.find(v=>v.room_id===s.roomLeft))==null?void 0:n.edge)??null,f={floorId:i.id,room:s.roomLeft,edge:h,free:!!s.free},m=(v,g,b,$)=>e.push({key:v,section:null,side:"top",flat:!1,o:g,eu:b,es:[0,1,0],n:$,lu:d,ls:p,pitch:90,span:()=>[0,d],facing:[$[0],$[2]],wall:f});m(`wall:${i.id}:${s.id}`,[s.a[0]+c*s.right,i.elevation,s.a[1]+u*s.right],[a/d,0,l/d],[c,0,u]),s.free&&m(`wall:${i.id}:${s.id}:back`,[s.b[0]-c*s.left,i.elevation,s.b[1]-u*s.left],[-a/d,0,-l/d],[-c,0,-u])}}return e}var Ce="ground";function Hu(r){let t=[...r.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??r.floors[0]??null}function pc(r,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],i=[-Math.sin(e),0,Math.cos(e)],o=Hu(r),s=n[0]*t.u+i[0]*t.v,a=n[2]*t.u+i[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:ca(o,s,a)):t.base??0;return{key:Ce,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Dt(r,t,e=yt(r)){return t.face===Ce?pc(r,t):t.face.startsWith("wall:")?pe(r,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function hc(r,t,e){let n=pe(r,e),i=r.settings.north??0,o=l=>{let d=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((d-180)*Math.PI/180))},s=[...n].sort((l,d)=>o(d)-o(l))[0];if(!s)return null;let a={...Bi(s,t),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((s.lu-.8+Qt)/(ps+Qt))),a.u=Math.round((s.lu-(a.cols*ps+(a.cols-1)*Qt))/2*100)/100,a.v=Math.round(Math.max(0,s.ls-dc-.3)*100)/100,a}function fs(r,t){let e=r.floors.flatMap(o=>o.rooms.flatMap(s=>s.points)),n=e.length?Math.max(...e.map(o=>o[0]))+3:0,i=e.length?Math.min(...e.map(o=>o[1])):0;return{id:t,face:Ce,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(r.settings.north??0)||0,look:"black",entity:null}}function ms(r){return r.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function yt(r){let t=r.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(b=>Du(b,rc(r,b,b.overhang??t.overhang)));let e=ms(r);if(!e)return[];let n=e.rooms.flatMap(b=>b.points.map($=>$[0])),i=e.rooms.flatMap(b=>b.points.map($=>$[1])),o=r.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...i)-o,d=Math.max(...i)+o,c=e.elevation+e.height;if(t.type==="flat")return[fc("main",null,s,l,a,d,c+uc)];let u=a-s>=d-l,p=t.ridge==="short"?!u:u,h=(p?d-l:a-s)/2,f=h*Math.tan(t.pitch*nn),m=(b,$,x)=>p?[b,c+x,(l+d)/2+$]:[(s+a)/2+$,c+x,b],[v,g]=p?[s,a]:[l,d];return[-1,1].map(b=>Wi(`main:${b<0?"a":"b"}`,null,b<0?"a":"b",m(v,b*h,0),m(g,b*h,0),m(v,0,f),t.pitch,()=>[0,g-v]))}function Du(r,t){let e=Yt(r),n=ue(r),i=($,x,P)=>{let[S,R]=e.at($,x);return[S,P,R]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),d=l-a;if(r.shape==="flat"||r.shape==="parapet"){let $=e.at(a,-o),x=e.at(l,e.w+s);return[fc(r.id,r.id,Math.min($[0],x[0]),Math.min($[1],x[1]),Math.max($[0],x[0]),Math.max($[1],x[1]),r.eave_a+uc)]}if(r.shape==="pent")return[Wi(`${r.id}:a`,r.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,e.w+s,n.y(e.w+s)),r.pitch_a,()=>[0,d])];let c=ds(r),u=c?us(r,c):null,p=r.shape==="pyramid"||(c==null?void 0:c[0])==="hip",h=r.shape==="pyramid"||(c==null?void 0:c[1])==="hip",f=r.shape==="pyramid"?(e.u1-e.u0)/2:p?u.d0:0,m=r.shape==="pyramid"?(e.u1-e.u0)/2:h?u.d1:0,v=p?e.u0+f-a:0,g=h?l-(e.u1-m):0,b=[];if(n.vr>.3){let $=Math.hypot(n.vr+o,n.rh-n.y(-o));b.push(Wi(`${r.id}:a`,r.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,n.vr,n.rh),r.pitch_a,x=>[v*(x/$),d-g*(x/$)]))}if(e.w-n.vr>.3){let $=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));b.push(Wi(`${r.id}:b`,r.id,"b",i(l,e.w+s,n.y(e.w+s)),i(a,e.w+s,n.y(e.w+s)),i(l,n.vr,n.rh),r.pitch_b,x=>[g*(x/$),d-v*(x/$)]))}if(p||h){let $=n.y(-o),x=n.y(e.w+s),P=[];p&&P.push([`${r.id}:c`,"c",i(a,e.w+s,x),i(a,-o,$),i(e.u0+f,n.vr,n.rh)]),h&&P.push([`${r.id}:d`,"d",i(l,-o,$),i(l,e.w+s,x),i(e.u1-m,n.vr,n.rh)]);for(let[S,R,I,E,k]of P){let w=Vu(S,r.id,R,I,E,k);w&&b.push(w)}}return b}function Vu(r,t,e,n,i,o){let s=Kn(en(i,n));if(s<.3)return null;let a=Oe(en(i,n)),l=en(o,n),d=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],c=[l[0]-a[0]*d,l[1]-a[1]*d,l[2]-a[2]*d],u=Kn(c);if(u<.3)return null;let p=Oe(c),h=Oe(gc(a,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=Oe([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/nn;return{key:r,section:t,side:e,flat:!1,o:n,eu:a,es:p,n:h,lu:s,ls:u,pitch:m,span:g=>{let b=Math.min(1,Math.max(0,g/u));return[d*b,s-(s-d)*b]},facing:[f[0],f[2]]}}function Wi(r,t,e,n,i,o,s,a){let l=Oe(en(i,n)),d=Oe(en(o,n)),c=Oe(gc(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let u=Oe([-d[0],0,-d[2]]);return{key:r,section:t,side:e,flat:!1,o:n,eu:l,es:d,n:c,lu:Kn(en(i,n)),ls:Kn(en(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function fc(r,t,e,n,i,o,s){let a=i-e>=o-n,l=a?i-e:o-n,d=a?o-n:i-e;return{key:`${r}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function $n(r){let t=r.module_w||dc,e=r.module_h||ps;return r.portrait===!1?[e,t]:[t,e]}function Un(r){var t;return(t=r.layout)!=null&&t.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function gs(r,t){return r.flat?Math.min(45,Math.max(0,t.tilt??15))*nn:r.wall?Math.min(90,Math.max(0,t.tilt??0))*nn:0}function wn(r,t){let[e,n]=$n(t),i=Un(t),o=Math.max(1,...i),a=(i.length-1)*_s(r,t)+n*Math.cos(gs(r,t));return[o*e+(o-1)*Qt,a]}function _s(r,t){let[,e]=$n(t),n=gs(r,t);return r.wall?e*Math.cos(n)+Qt:r.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Qt}function ye(r,t,e=!1){let[n,i]=$n(t),o=[],s=gs(r,t),a=i*Math.cos(s),l=_s(r,t),d=Un(t),c=Math.max(1,...d),u=new Set(t.skip??[]),p=!!r.wall&&n>r.lu+1e-6,h=(m,v,g)=>[r.o[0]+r.eu[0]*m+r.es[0]*v+r.n[0]*g,r.o[1]+r.eu[1]*m+r.es[1]*v+r.n[1]*g,r.o[2]+r.eu[2]*m+r.es[2]*v+r.n[2]*g],f=(m,v)=>{if(r.unbounded)return!0;if(v<-1e-6||v>r.ls+1e-6)return!1;let[g,b]=r.span(v);return m>=g-1e-6&&m<=b+1e-6};return d.forEach((m,v)=>{let g=t.align==="right"?c-m:t.align==="center"?(c-m)/2:0;for(let b=0;b<m;b++){let $=`${v}:${b}`,x=u.has($);if(x&&!e)continue;let P=t.u+(b+g)*(n+Qt),S=t.v+v*l,R=P+n,I=S+(r.flat||r.wall?a:i);if(p){if(!(f((P+R)/2,S)&&f((P+R)/2,I)))continue}else if(![[P,S],[R,S],[R,I],[P,I]].every(([T,C])=>f(T,C)))continue;if(r.wall&&s>.001){let T=tn+i*Math.sin(s),[C,O]=t.flip?[T,tn]:[tn,T],D=[h(P,S,C),h(R,S,C),h(R,I,O),h(P,I,O)],H=t.flip?S:I,U=[P+.05,R-.05].map(G=>[h(G,H,0),h(G,H,T)]);o.push({corners:D,posts:U,cell:$,skipped:x});continue}if(!r.flat){o.push({corners:[h(P,S,tn),h(R,S,tn),h(R,I,tn),h(P,I,tn)],posts:[],cell:$,skipped:x});continue}let E=.15,k=E+i*Math.sin(s),[w,A]=t.flip?[I,S]:[S,I],M=[h(P,w,E),h(R,w,E),h(R,A,k),h(P,A,k)];o.push({corners:M,posts:[P+.05,R-.05].flatMap(T=>[[h(T,w,0),h(T,w,E)],[h(T,A,0),h(T,A,k)]]),cell:$,skipped:x})}}),o}function Ni(r,t){let e=[r.eu[0],r.eu[2]],n=[r.es[0],r.es[2]],i=[t[0]-r.o[0],t[1]-r.o[2]],o=e[0]*n[1]-e[1]*n[0];if(Math.abs(o)<1e-9)return null;let s=(i[0]*n[1]-i[1]*n[0])/o,a=(e[0]*i[1]-e[1]*i[0])/o;if(a<0||a>r.ls)return null;let[l,d]=r.span(a);return s>=l&&s<=d?{u:s,s:a}:null}function mc(r,t){let e=null;for(let n of r){if(n.wall){let s=[t[0]-n.o[0],t[1]-n.o[2]],a=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:a,s:Number.NaN,y:-1/0});continue}let i=Ni(n,t);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!e||o>e.y)&&(e={face:n,...i,y:o})}return e?{face:e.face,u:e.u,s:e.s}:null}function xn(r,t){if(r.unbounded)return{u:t.u,v:t.v};let[e,n]=wn(r,t),i=s=>Math.floor(s*100+1e-6)/100;return{u:r.wall&&e>r.lu?Math.round((r.lu-e)/2*100)/100:i(Math.min(Math.max(0,t.u),Math.max(0,r.lu-e))),v:i(Math.min(Math.max(0,t.v),Math.max(0,r.ls-n)))}}function Bi(r,t){let e={id:t,face:r.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:r.flat?15:null,flip:!1,entity:null,look:"black"},[n]=$n(e),i=.4,o=_s(r,e),[s,a]=r.span(r.ls/2);for(e.cols=Math.max(1,Math.floor((a-s-2*i+Qt)/(n+Qt))),e.rows=Math.max(1,Math.min(4,Math.floor((r.ls-2*i)/o)));e.cols>1&&ye(r,{...e,u:hs(r,e),v:i}).length<e.rows*e.cols;)e.cols--;return e.u=hs(r,e),e.v=i,e}function bs(r,t){let e={...t,face:r.key,tilt:r.flat?t.tilt??15:null,rotation:null,flip:!1};return r.wall&&Object.assign(e,Wu(r,e)),e.u=hs(r,e),e.v=.4,{...e,...xn(r,e)}}function Wu(r,t){let e=i=>Math.floor((r.lu+Qt+1e-6)/($n({...t,portrait:i})[0]+Qt)),n=t.portrait===!1&&e(!1)<1?!0:t.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...Un(t)),e(n!==!1))),layout:void 0,skip:void 0}}function hs(r,t){let[e]=$n(t),n=t.cols*e+(t.cols-1)*Qt;return Math.round((r.lu-n)/2*100)/100}function vs(r,t){let e=(Math.atan2(r.facing[0],-r.facing[1])/nn-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function qi(r,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/nn-t+720)%360,o=Math.cos((i-180)*nn);return n.lu*n.ls*(1.2+o)};return[...r].sort((n,i)=>e(i)-e(n))[0]??null}function en(r,t){return[r[0]-t[0],r[1]-t[1],r[2]-t[2]]}function Kn(r){return Math.hypot(r[0],r[1],r[2])}function Oe(r){let t=Kn(r)||1;return[r[0]/t,r[1]/t,r[2]/t]}function gc(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}var _c=.78,bc=1.18;function kn(r){return{id:r.id,face:r.face,u:r.u,v:r.v,rows:1,cols:1,portrait:!0,module_w:r.w||_c,module_h:r.h||bc}}function vc(r,t){let e=ye(r,kn(t))[0];if(!e)return null;let n=i=>[i[0]-r.n[0]*.05,i[1]-r.n[1]*.05,i[2]-r.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function ys(r,t){let e=_c,n=bc,[i,o]=r.span(r.ls/2);return{id:t,face:r.key,u:Math.round((i+o-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(r.ls-n,r.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function Gn(r,t,e){let n=pc(r,t),[i,o]=wn(n,t),s=n.eu[0]*(t.u+i/2)+n.es[0]*(t.v+o/2),a=n.eu[2]*(t.u+i/2)+n.es[2]*(t.v+o/2),l=e*Math.PI/180,d=[Math.cos(l),Math.sin(l)],c=[-Math.sin(l),Math.cos(l)],u=s*d[0]+a*d[1]-i/2,p=s*c[0]+a*c[1]-o/2,h=f=>Math.round(f*100)/100;return{u:h(u),v:h(p),rotation:(Math.round(e)%360+360)%360}}function Yn(r,t){let[e,n]=wn(r,t);return[r.o[0]+r.eu[0]*(t.u+e/2)+r.es[0]*(t.v+n/2),r.o[2]+r.eu[2]*(t.u+e/2)+r.es[2]*(t.v+n/2)]}function $s(r,t,e){let n=e[0]*r.n[0]+e[1]*r.n[1]+e[2]*r.n[2];if(Math.abs(n)<1e-6)return null;let i=((r.o[0]-t[0])*r.n[0]+(r.o[1]-t[1])*r.n[1]+(r.o[2]-t[2])*r.n[2])/n;if(i<=0)return null;let o=[t[0]+e[0]*i-r.o[0],t[1]+e[1]*i-r.o[1],t[2]+e[2]*i-r.o[2]],s=o[0]*r.eu[0]+o[1]*r.eu[1]+o[2]*r.eu[2],a=o[0]*r.es[0]+o[1]*r.es[1]+o[2]*r.es[2];return{t:i,u:s,s:a}}function yc(r,t,e){if(r.unbounded)return!0;if(e<0||e>r.ls)return!1;let[n,i]=r.span(e);return t>=n&&t<=i}function $c(r,t,e,n){for(let i of ye(r,t)){let o=i.corners.map(c=>{let u=[c[0]-r.o[0],c[1]-r.o[1],c[2]-r.o[2]];return[u[0]*r.eu[0]+u[1]*r.eu[1]+u[2]*r.eu[2],u[0]*r.es[0]+u[1]*r.es[1]+u[2]*r.es[2]]}),[s,a]=[Math.min(...o.map(c=>c[0])),Math.max(...o.map(c=>c[0]))],[l,d]=[Math.min(...o.map(c=>c[1])),Math.max(...o.map(c=>c[1]))];if(e>=s-.05&&e<=a+.05&&n>=l-.05&&n<=d+.05)return!0}return!1}var Jt=.03,Ki=r=>r&&r!=="none"?r:null;function xs(r,t=e=>Ki(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let i of n.furniture){let o=t(i);if(i.type==="meter")e.grid??=o,e.gridExport??=Ki(i.export);else if(i.type==="inverter"&&o&&!e.solar.includes(o))e.solar.push(o);else if(i.type==="home_battery"){o&&!e.battery.includes(o)&&e.battery.push(o);let s=Ki(i.charge);s&&!e.charge.includes(s)&&e.charge.push(s),(o||s)&&e.batteries.push({power:o,charge:s});let a=Ki(i.soc);a&&!e.soc.includes(a)&&e.soc.push(a)}}return e}function ks(r){for(let t of r.floors){let e=t.furniture.find(n=>n.type==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return r.energy.meter}function Pc(r){let t=n=>{var i,o;return((o=(i=r.energy_sources)==null?void 0:i.find(s=>s.type===n))==null?void 0:o.stat_energy_from)??null},e=n=>n&&n.startsWith("sensor.")?n:null;return{gas:e(t("gas")),water:e(t("water"))}}function Ui(r,t,e="power"){var a,l;if(!t)return null;let n=(l=(a=r.entities)==null?void 0:a[t])==null?void 0:l.device_id;if(!n)return null;let i=Object.keys(r.states).filter(d=>{var c,u,p;return d.startsWith("sensor.")&&((u=(c=r.entities)==null?void 0:c[d])==null?void 0:u.device_id)===n&&((p=r.states[d])==null?void 0:p.attributes.device_class)===e});if(i.length<=1)return i[0]??null;let o=i.filter(d=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(d)),s=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return o.find(d=>s&&d.includes(s))??o[0]??i[0]}function Ac(r,t){var n,i,o,s;let e={};for(let a of t.energy_sources??[])if(a.type==="grid"){let l=((i=(n=a.flow_from)==null?void 0:n[0])==null?void 0:i.stat_energy_from)??((s=(o=a.flow_to)==null?void 0:o[0])==null?void 0:s.stat_energy_to),d=Ui(r,l);d&&!e.grid&&(e.grid=d)}else if(a.type==="solar"){let l=Ui(r,a.stat_energy_from);l&&!e.solar&&(e.solar=l)}else if(a.type==="battery"){let l=Ui(r,a.stat_energy_from??a.stat_energy_to);l&&!e.battery&&(e.battery=l);let d=Ui(r,a.stat_energy_from??a.stat_energy_to,"battery");d&&!e.battery_soc&&(e.battery_soc=d)}return e}var Nu=.07;function $e(r,t=!1){if(!r)return null;let e=Number(r.state);if(!Number.isFinite(e))return null;let n=String(r.attributes.unit_of_measurement??"W"),i=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-i:i}function Bu(r,t){var e;return t.startsWith("sensor.")&&((e=r.states[t])==null?void 0:e.attributes.device_class)==="power"}function zc(r,t){var o,s;if(Bu(r,t))return t;let e=(s=(o=r.entities)==null?void 0:o[t])==null?void 0:s.device_id;if(!e)return null;let n=Va(r,e),i=n?Qe(r,t):null;return Vo(r,e).find(a=>a!==t&&(!n||i!==null&&Qe(r,a)===i))??null}function Ic(r,t,e,n=xs(t)){let i=t.energy,o=i.grid??n.grid,s=o?$e(r.states[o],i.grid_invert):null;if(!i.grid&&n.gridExport){let m=Math.max(0,$e(r.states[n.gridExport])??0);s=Math.max(0,s??0)-m}let a=i.solar?$e(r.states[i.solar]):null;if(!i.solar&&n.solar.length){let m=n.solar.map(v=>$e(r.states[v])).filter(v=>v!==null);a=m.length?m.reduce((v,g)=>v+g,0):null}let l=i.battery?$e(r.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let m=n.batteries.map(v=>{if(v.charge){let g=v.power?Math.max(0,$e(r.states[v.power])??0):0,b=Math.max(0,$e(r.states[v.charge])??0);return g-b}return v.power?$e(r.states[v.power],i.battery_invert):null}).filter(v=>v!==null);l=m.length?m.reduce((v,g)=>v+g,0):null}let c=(i.battery_soc?[i.battery_soc]:n.soc).map(m=>{var v;return Number((v=r.states[m])==null?void 0:v.state)}).filter(m=>Number.isFinite(m)),u=c.length?c.reduce((m,v)=>m+v,0)/c.length:NaN,p=i.tariff?r.states[i.tariff]:void 0,h=Number(p==null?void 0:p.state),f=i.consumption?$e(r.states[i.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||a!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):e.length&&(f=e.reduce((m,v)=>m+v.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function sn(r,t){return r.pos.push(t),r.adj.push([]),r.pos.length-1}function on(r,t,e){let n=Math.hypot(r.pos[t][0]-r.pos[e][0],r.pos[t][1]-r.pos[e][1]);r.adj[t].push({to:e,w:n}),r.adj[e].push({to:t,w:n})}function qu(r,t){let e=r.length,n=r.map((i,o)=>{let s=r[(o+1)%e],a=s[0]-i[0],l=s[1]-i[1],d=Math.hypot(a,l)||1,c=-l/d,u=a/d;return{p:[i[0]+c*t[o],i[1]+u*t[o]],d:[a/d,l/d],n:[c,u]}});return r.map((i,o)=>{let s=n[(o-1+e)%e],a=n[o],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*t[o],i[1]+a.n[1]*t[o]];let d=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*d,s.p[1]+s.d[1]*d]})}function Ku(r){return St(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function Ms(r,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=At(r.rooms,{exterior:t,interior:e},r.walls??[]);for(let o of r.rooms){if(o.points.length<3)continue;let{pts:s,flipped:a}=Ku(o),l=s.length,d=s.map((p,h)=>{let f=a?(l-2-h+l)%l:h,m=i.some(v=>!v.exterior&&v.sources.some(g=>g.room_id===o.id&&g.edge===f));return Nu+(m?e/2:0)}),c=qu(s,d).map(p=>sn(n,p)),u=c.map((p,h)=>[p,c[(h+1)%l]]);for(let[p,h]of u)on(n,p,h);n.rings.set(o.id,u)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],a=Gi(n,o.roomLeft,s),l=Gi(n,o.roomRight,s);a!==null&&l!==null&&on(n,a,l)}return n}function Gi(r,t,e){let n=r.rings.get(t);if(!n)return null;let i=null;for(let s of n){let a=r.pos[s[0]],l=r.pos[s[1]],d=l[0]-a[0],c=l[1]-a[1],u=d*d+c*c||1,p=Math.min(1,Math.max(0,((e[0]-a[0])*d+(e[1]-a[1])*c)/u)),h=[a[0]+d*p,a[1]+c*p],f=Math.hypot(e[0]-h[0],e[1]-h[1]);(!i||f<i.d)&&(i={seg:s,q:h,d:f})}if(!i)return null;let o=sn(r,i.q);return on(r,o,i.seg[0]),on(r,o,i.seg[1]),o}function Yi(r,t,e){let n=r.pos[e],i=Gi(r,t.id,n);if(i===null)return!1;let o=r.pos[i],s=r.pos[r.adj[i][0].to],a=r.pos[r.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=[(a[0]-s[0])/l,(a[1]-s[1])/l],c=(n[0]-o[0])*d[0]+(n[1]-o[1])*d[1],u=(n[1]-o[1])*d[0]-(n[0]-o[0])*d[1];if(Math.abs(c)<.01||Math.abs(u)<.01)return on(r,e,i),!0;let p=[o[0]+d[0]*c,o[1]+d[1]*c],h=[o[0]-d[1]*u,o[1]+d[0]*u],f=sn(r,tt(h,t.points)||!tt(p,t.points)?h:p);return on(r,i,f),on(r,f,e),!0}function Jn(r,t){let e=r.rooms.filter(o=>o.points.length>=3),n=e.find(o=>tt(t,o.points));if(n)return n;let i=null;for(let o of e)for(let s of o.points){let a=Math.hypot(t[0]-s[0],t[1]-s[1]);(!i||a<i.d)&&(i={room:o,d:a})}return(i==null?void 0:i.room)??null}function Fc(r,t){let e=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),i=r.pos.map(()=>!1);for(e[t]=0;;){let o=-1;for(let s=0;s<e.length;s++)!i[s]&&e[s]<1/0&&(o<0||e[s]<e[o])&&(o=s);if(o<0)break;i[o]=!0;for(let{to:s,w:a}of r.adj[o])e[o]+a<e[s]-1e-9&&(e[s]=e[o]+a,n[s]=o)}return{dist:e,prev:n}}function wc(r,t){return r.every(e=>t[e].kind==="battery")?"battery":r.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var xc=new WeakMap;function Uu(r,t){let e=ks(r),n=r.floors.find(c=>c.id===e.floor_id),i=[],{wall_exterior:o,wall_interior:s}=r.settings,a=new Map,l=new Map;t.forEach((c,u)=>l.set(c.floorId,[...l.get(c.floorId)??[],u]));let d=r.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let u=c.elevation>n.elevation,p=l.get(c.id),h=wc(p,t);i.push({floorId:n.id,a:[e.x,Jt,e.z],b:[e.x,u?n.height:-.2,e.z],dist:0,members:p,kind:h});let f=Math.abs(c.elevation-n.elevation);i.push({floorId:c.id,a:[e.x,u?-.2:c.height,e.z],b:[e.x,Jt,e.z],dist:f,members:p,kind:h}),a.set(c.id,f+.25)}for(let c of d){let u=Ms(c,o,s),p=Jn(c,[e.x,e.z]);if(!p)continue;let h=sn(u,[e.x,e.z]);if(!Yi(u,p,h))continue;let f=[];for(let $ of l.get(c.id)){let x=t[$],P=Jn(c,[x.x,x.z]);if(!P)continue;let S=sn(u,[x.x,x.z]);Yi(u,P,S)&&f.push({node:S,member:$})}let{dist:m,prev:v}=Fc(u,h),g=new Map;for(let $ of f)if(Number.isFinite(m[$.node]))for(let x=$.node;v[x]>=0;x=v[x]){let P=v[x],S=`${P}>${x}`,R=g.get(S)??{a:P,b:x,members:[]};R.members.push($.member),g.set(S,R)}let b=a.get(c.id)??0;for(let{a:$,b:x,members:P}of g.values()){let S=u.pos[$],R=u.pos[x],I=wc(P,t);i.push({floorId:c.id,a:[S[0],Jt,S[1]],b:[R[0],Jt,R[1]],dist:b+m[$],members:P,kind:I})}}return i}function Rc({building:r,consumers:t,summary:e,battery:n,fieldPower:i,devicePower:o}){var k;let s=ks(r);if(!s)return[];let a=r.floors.find(w=>w.id===s.floor_id);if(!a)return[];let l=w=>o==null?void 0:o.get(w),d=ws(r,"inverter"),c=ws(r,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=w=>{let A=null;for(let M of d)M.floorId===w.floorId&&(!A||Math.hypot(M.x-w.x,M.z-w.z)<Math.hypot(A.x-w.x,A.z-w.z))&&(A=M);return A},p=w=>l(w.id)??(c.length===1?e.battery??0:0),h=new Map;for(let w of c){let A=u(w);A&&h.set(w.id,A)}let f=t.map(w=>({floorId:w.floorId,x:w.x,z:w.z,kind:w.wallbox?"wallbox":"consumer",power:w.power}));for(let w of c)!h.has(w.id)&&e.battery!==null&&f.push({floorId:w.floorId,x:w.x,z:w.z,kind:"battery",power:Math.abs(p(w))});let m=`${s.floor_id}:${s.x},${s.z}|${f.map(w=>`${w.floorId}:${w.x},${w.z}:${w.kind}`).join(";")}`,v=xc.get(r);v||xc.set(r,v=new Map);let g=v.get(m);g||(g=Uu(r,f),v.clear(),v.set(m,g));let b=g.map(w=>({floorId:w.floorId,a:w.a,b:w.b,dist:w.dist,power:w.members.reduce((A,M)=>A+f[M].power,0),kind:w.kind})),$=e.grid!==null?Ss(r):null,x=r.settings.roof.cables??[],P=w=>x.find(A=>A.id===w),S=(w,A)=>w.map(M=>({...M,key:A}));if($){let w=e.grid>=0,A=P("grid"),M=A?Qn(r,A,[$.end[0],a.elevation+Math.max(Jt,$.height),$.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...$.height>.05?[[$.end[0],$.height,$.end[1]]]:[],[$.end[0],Jt,$.end[1]],[$.wall[0],Jt,$.wall[1]],[s.x,Jt,s.z]],T=A?Mn(r,w?M:[...M].reverse(),Math.abs(e.grid),w?"grid":"export",a):Lc(a.id,w?M:[...M].reverse(),Math.abs(e.grid),w?"grid":"export",0);b.push(...S(T,"grid"))}if(e.battery!==null&&e.battery>0)for(let w of b)w.kind==="battery"&&([w.a,w.b]=[w.b,w.a]);let R=r.settings.roof.solar??[],I=r.settings.roof.strings??[],E=new Map;if(i&&R.length){let w=[...yt(r),...pe(r)];for(let A of R){let M=i.get(A.id)??0,T=A.string?(k=I.find(Y=>Y.id===A.string))==null?void 0:k.inverter:null,C=T?c.find(Y=>Y.id===T)??null:null,O=T&&!C?d.find(Y=>Y.id===T)??null:null;if(C){let Y=h.get(C.id);Y&&E.set(Y.id,(E.get(Y.id)??0)+M);let it=C.variant==="wall"?.5+C.h:.9,q=P(`solar:${A.id}`),lt=q?Sc(r,A):null,It=r.floors.find(Zt=>Zt.id===C.floorId);q&&lt&&It?b.push(...S(Mn(r,Qn(r,q,lt,[C.x,It.elevation+it,C.z]),M,"solar",It),`solar:${A.id}`)):b.push(...S(Ec(r,A,M,C,it),`solar:${A.id}`));continue}if(!O&&d.length){let Y=Dt(r,A,w),it=Y?Yn(Y,A):[A.u,A.v];O=d.reduce((q,lt)=>!q||Math.hypot(lt.x-it[0],lt.z-it[1])<Math.hypot(q.x-it[0],q.z-it[1])?lt:q,null)}O&&E.set(O.id,(E.get(O.id)??0)+M);let D=O??{floorId:s.floor_id,x:s.x,z:s.z},H=O?1.1+O.h:1.5,U=P(`solar:${A.id}`),G=U?Sc(r,A):null,Z=r.floors.find(Y=>Y.id===D.floorId);U&&G&&Z?b.push(...S(Mn(r,Qn(r,U,G,[D.x,Z.elevation+H,D.z]),M,"solar",Z),`solar:${A.id}`)):b.push(...S(Ec(r,A,M,D,H),`solar:${A.id}`))}}else e.solar!==null&&!d.length&&b.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Jt,s.z+.08],dist:0,power:e.solar,kind:"solar"});for(let w of d){let A=1.1+w.h,M=c.filter(O=>h.get(O.id)===w),T=l(w.id);if(T===void 0){T=E.get(w.id)??(d.length===1?e.solar??0:0);for(let O of M)T+=p(O)}let C=r.floors.find(O=>O.id===w.floorId);if(e.solar!==null||e.battery!==null){let O=P(`inv:${w.id}`),D=O&&C?Mn(r,Qn(r,O,[w.x,C.elevation+A,w.z],[s.x,a.elevation+1.5,s.z]),Math.max(0,T),"inverter",C):Mc(r,w,A,{floorId:s.floor_id,x:s.x,z:s.z},1.5,Math.max(0,T),"inverter",0);b.push(...S(D,`inv:${w.id}`))}for(let O of M){let D=p(O);if(e.battery===null&&l(O.id)===void 0)continue;let H=O.variant==="wall"?.5+O.h:.9,U=P(`bat:${O.id}`),G=U&&C?Mn(r,Qn(r,U,[w.x,C.elevation+A-.1,w.z],[O.x,C.elevation+H,O.z]),Math.abs(D),"battery",C):Mc(r,w,A-.1,O,H,Math.abs(D),"battery",0);b.push(...S(D<=0?G:G.map(Z=>({...Z,a:Z.b,b:Z.a})).reverse(),`bat:${O.id}`))}}return b}function Ss(r){var h;let t=ks(r),e=t?r.floors.find(f=>f.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:i}=r.settings,{walls:o}=At(e.rooms,{exterior:n,interior:i},e.walls??[]),s=ws(r,"grid_point")[0],a=o.filter(f=>f.exterior);if(s){let f=null;for(let g of a){let b=g.b[0]-g.a[0],$=g.b[1]-g.a[1],x=s.x-t.x,P=s.z-t.z,S=x*$-P*b;if(Math.abs(S)<1e-9)continue;let R=((g.a[0]-t.x)*$-(g.a[1]-t.z)*b)/S,I=((g.a[0]-t.x)*P-(g.a[1]-t.z)*x)/S;if(R<=0||R>1||I<0||I>1||f&&R>=f.t)continue;let E=Math.hypot(b,$)||1;f={q:[t.x+x*R,t.z+P*R],out:[$/E,-b/E],t:R}}let m=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[t.x,t.z],v=((h=r.floors.flatMap(g=>g.furniture).find(g=>g.id===s.id))==null?void 0:h.mount_y)??0;return{floorId:e.id,wall:m,end:[s.x,s.z],height:Math.max(0,v)}}let l=null;for(let f of a){let m=f.b[0]-f.a[0],v=f.b[1]-f.a[1],g=m*m+v*v||1,b=Math.min(1,Math.max(0,((t.x-f.a[0])*m+(t.z-f.a[1])*v)/g)),$=[f.a[0]+m*b,f.a[1]+v*b],x=Math.hypot(t.x-$[0],t.z-$[1]),P=Math.sqrt(g);(!l||x<l.d)&&(l={q:$,out:[v/P,-m/P],d:x})}if(!l)return null;let{q:d,out:c}=l,u=0;for(let f of r.floors)for(let m of f.outdoor??[]){let v=m.points.length;for(let g=0;g<v;g++){let b=m.points[g],$=m.points[(g+1)%v],x=$[0]-b[0],P=$[1]-b[1],S=c[0]*P-c[1]*x;if(Math.abs(S)<1e-9)continue;let R=((b[0]-d[0])*P-(b[1]-d[1])*x)/S,I=((b[0]-d[0])*c[1]-(b[1]-d[1])*c[0])/S;R>0&&I>=0&&I<=1&&(u=Math.max(u,Math.min(15,R)))}}let p=u>n+1?u:n+2.5;return{floorId:e.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*p,d[1]+c[1]*p],height:0}}function ws(r,t){let e=[];for(let n of r.floors)for(let i of n.furniture)i.type===t&&e.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return e}var kc=new WeakMap;function Tc(r,t,e,n){let i=`${t.id}:${e.join(",")}>${n.join(",")}`,o=kc.get(r);o||kc.set(r,o=new Map);let s=o.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=r.settings,d=Ms(t,a,l),c=[e,n],u=Jn(t,e),p=Jn(t,n);if(u&&p){let h=sn(d,e),f=sn(d,n);if(Yi(d,u,h)&&Yi(d,p,f)){let{dist:m,prev:v}=Fc(d,h);if(Number.isFinite(m[f])){c.length=0;for(let g=f;g>=0;g=v[g])c.unshift(d.pos[g])}}}return o.set(i,c),c}function Mc(r,t,e,n,i,o,s,a){let l=r.floors.find(u=>u.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let d=Tc(r,l,[t.x,t.z],[n.x,n.z]),c=[[t.x,e,t.z],...d.map(u=>[u[0],Jt,u[1]]),[n.x,i,n.z]];return Lc(l.id,c,o,s,a)}function Lc(r,t,e,n,i){let o=[];for(let s=0;s+1<t.length;s++){let a=t[s],l=t[s+1],d=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);d<1e-4||(o.push({floorId:r,a,b:l,dist:i,power:e,kind:n}),i+=d)}return o}function Qn(r,t,e,n){let i=r.floors.find(s=>s.id===t.floor_id),o=((i==null?void 0:i.elevation)??0)+Math.max(Jt,t.height);return[e,...t.points.map(s=>[s[0],o,s[1]]),n]}function Sc(r,t){let e=Dt(r,t,[...yt(r),...pe(r)]);if(!e)return null;let[n,i]=wn(e,t),o=t.u+n/2,s=e.unbounded?t.v+i/2:t.v;return[e.o[0]+e.eu[0]*o+e.es[0]*s,e.o[1]+e.eu[1]*o+e.es[1]*s,e.o[2]+e.eu[2]*o+e.es[2]*s]}function Gu(r,t,e){let{wall_exterior:n,wall_interior:i}=r.settings,o=Ms(t,n,i),s=Jn(t,e),a=s?Gi(o,s.id,e):null;return a===null?e:o.pos[a]}function Mn(r,t,e,n,i){let o=[...r.floors].sort((d,c)=>d.elevation-c.elevation),s=d=>{let c=i;for(let u of o)d>=u.elevation-.01&&(c=u);return c},a=[],l=0;for(let d=0;d+1<t.length;d++){let c=t[d],u=t[d+1];if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-c[1])>.01){let f=Math.min(c[1],u[1]),m=Math.max(c[1],u[1]);for(let v of o)v.elevation>f+.01&&v.elevation<m-.01&&h.push(v.elevation);u[1]<c[1]&&h.reverse()}for(let f of[...h,u[1]]){let m=(f-c[1])/(u[1]-c[1]||1),v=Math.abs(u[1]-c[1])>.01?[c[0]+(u[0]-c[0])*m,f,c[2]+(u[2]-c[2])*m]:u,g=s((c[1]+v[1])/2),b=Math.hypot(v[0]-c[0],v[1]-c[1],v[2]-c[2]);b>1e-4&&a.push({floorId:g.id,a:[c[0],c[1]-g.elevation,c[2]],b:[v[0],v[1]-g.elevation,v[2]],dist:l,power:e,kind:n}),l+=b,c=v}}return a}function Ec(r,t,e,n,i){let o=[...yt(r),...pe(r)],s=Dt(r,t,o),a=r.floors.find(v=>v.id===n.floorId);if(!s||!a)return[];let[l,d]=wn(s,t),c=(v,g)=>[s.o[0]+s.eu[0]*v+s.es[0]*g,s.o[1]+s.eu[1]*v+s.es[1]*g,s.o[2]+s.eu[2]*v+s.es[2]*g],u=t.u+l/2,p=a.elevation+Jt,h=[],f;if(s.unbounded){let v=c(u,t.v+d/2);f=[v[0],p,v[2]],h.push(f)}else if(s.wall){let v=c(u,t.v);f=[v[0],p,v[2]],h.push(v,f)}else{let v=c(u,t.v),g=ms(r)??a,b=Math.max(a.elevation+.5,Math.min(v[1]-.25,g.elevation+g.height-.12));f=[v[0],b,v[2]],h.push(v)}let m=Gu(r,a,[f[0],f[2]]);h.push([m[0],f[1],m[1]]),Math.abs(f[1]-p)>.05&&h.push([m[0],p,m[1]]);for(let v of Tc(r,a,m,[n.x,n.z]).slice(1))h.push([v[0],p,v[1]]);return h.push([n.x,a.elevation+i,n.z]),Mn(r,h,e,"solar",a)}var Cc=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],Yu={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Qu={back:0,right:90,front:180,left:270};function jc(r,t,e){let n=zt(r.points),i=n.x1-n.x0,o=n.z1-n.z0,s=Yu[t],a=[],l=(c,u,p,h,f)=>{let[m,v,g]=f??le[c];a.push({id:e(),type:c,x:Oc(u),z:Oc(p),rotation:h,w:m,d:v,h:g,variant:null,entity:null,power:null})},d=.02;for(let c of s.rows){let u=c.items.map(v=>({type:v.type,size:v.size??le[v.type]})),p=c.wall==="back"||c.wall==="front"?i:o,h=[],f=0;for(let v of u){if(f+v.size[0]>p-.1)break;h.push(v),f+=v.size[0]}let m=c.align==="start"?.05:c.align==="end"?p-f-.05:(p-f)/2;for(let v of h){let[g,b]=v.size,$=m+g/2,x=b/2+d;c.wall==="back"?l(v.type,n.x0+$,n.z0+x,0,v.size):c.wall==="front"?l(v.type,n.x1-$,n.z1-x,180,v.size):c.wall==="right"?l(v.type,n.x1-x,n.z0+$,90,v.size):l(v.type,n.x0+x,n.z1-$,Qu.left,v.size),m+=g}}for(let c of s.free){let[u,p]=c.size??le[c.type],h=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*c.at[0])),f=Math.min(n.z1-p/2-.05,Math.max(n.z0+p/2+.05,n.z0+o*c.at[1]));l(c.type,h,f,c.rotation,c.size)}return a}var Oc=r=>Math.round(r*1e3)/1e3;var rn=new Map,Es=new Map,Hc=new Map;async function Ju(r,t){return r.callWS({type:"neonplan3d/modules/code",pack_id:t})}async function Zu(r,t){let e=await Ju(r,t.id);if(e.api!==1)return null;let n=URL.createObjectURL(new Blob([e.code],{type:"text/javascript"}));try{let o=(await import(n)).default;if(!o||o.api!==1||typeof o.id!="string")return null;let s=Hc.get(t.id);s&&URL.revokeObjectURL(s),Hc.set(t.id,n);let a={id:t.id,release:e.release,module:o};return rn.set(t.id,a),a}catch(i){throw URL.revokeObjectURL(n),i}}async function Ps(r,t){let e=new Map(t.filter(n=>n.module&&n.module.api===1&&n.module.approved===!0).map(n=>[n.id,n]));for(let n of[...rn.keys()])e.has(n)||rn.delete(n);await Promise.all([...e.values()].map(n=>{let i=rn.get(n.id);if(i&&i.release===(n.release??1))return Promise.resolve(i);let o=Es.get(n.id);return o||(o=Zu(r,n).catch(s=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,s),null)).finally(()=>Es.delete(n.id)),Es.set(n.id,o)),o}))}function Dc(r){var e,n;let t=[];for(let i of rn.values())try{t.push(...((n=(e=i.module).help)==null?void 0:n.call(e,r))??[])}catch{}return t}function Vc(r,t){return Bc(e=>{var n;return(n=e.areaFields)==null?void 0:n.call(e,r,t)})}function Wc(r,t){return Bc(e=>{var n;return(n=e.furnitureFields)==null?void 0:n.call(e,r,t)})}function Nc(){for(let r of rn.values())if(r.module.pipes)return r.module.pipes;return null}function Bc(r){let t=[];for(let e of rn.values())try{t.push(...r(e.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${e.id} failed`,n)}return t}function Xu(r){return{a:r.a,b:r.b,u:r.u,n:r.n,length:r.length,rightward:!0}}var As={walls(r,t,e){let n=r.floors.find(o=>o.id===t),i=n==null?void 0:n.rooms.find(o=>o.id===e);return!n||!i||i.points.length<3?[]:i.points.map((o,s)=>{let a=Ie(i,s),l=de(n,i.id,a.a,a.b),d=[...Fe(a,n,i).map(c=>[c.s0,c.s1]),..._n(a,n).filter(c=>c.y0<.05).map(c=>[c.s0,c.s1])];return{roomId:i.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?r.settings.wall_interior:r.settings.wall_exterior,taken:d}})},onWall(r,t,e){return ee(Xu(r),t,e)},freeSpot(r,t,e=.1){let n=o=>o>=e&&o+t<=r.length-e&&!r.taken.some(([s,a])=>o<a+.05&&o+t>s-.05),i=r.length/2-t/2;for(let o=0;o<=r.length;o+=.05){if(n(i-o))return Math.round((i-o)*100)/100;if(n(i+o))return Math.round((i+o)*100)/100}return null},nodeAt(r,t,e){let n=r.floors.find(a=>a.id===t),i=n==null?void 0:n.outdoor.find(a=>a.id===e);if(!n||!i)return()=>null;let o=ft(r,n,i),s=i.pool??{};return a=>{let{kind:l,id:d,port:c}=ut(a),u=l==="joint"?(s.joints??[]).find(h=>h.id===d):void 0;if(u)return Te(u,c);let p=l==="port"?(s.ports??[]).find(h=>h.id===d):void 0;return p?o(a)??{x:p.x,y:.02,z:p.z}:o(a)}},connect(r,t,e,n,i,o){var l;let s=r.floors.find(d=>d.id===t),a=s==null?void 0:s.outdoor.find(d=>d.id===e);return!s||!a?{pipes:[],joints:[]}:yn({...n,floorId:t},As.nodeAt(r,t,e),((l=a.pool)==null?void 0:l.joints)??[],i,o)}};function tp(r,t){return t.rooms.some(e=>e.points.length>=3)?Di(t.rooms,t.walls??[],r.settings.wall_exterior,r.settings.wall_interior):null}function ep(r,t){var n;if(((n=r.settings.terrain)==null?void 0:n.earth)===!1||t.elevation>.3)return!1;let e=tp(r,t);return!!e&&e.some(([i,o])=>ko(i,o)-t.elevation>-.15)}function np(r,t,e,n,i){return!e||!ep(r,t)?!1:n<Math.min(t.height,ko(i[0],i[1])-t.elevation)-.05}function qc(r,t,e){if(e.type!=="window")return!1;let n=ze(e,t.rooms,t.walls??[]);if(!n)return!1;let i=At(t.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},t.walls??[]).walls,o=Dn(i,e,n);if(!o)return!1;let{wall:s,s:a}=o,l=Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1]),d=l>1e-9?[(s.b[0]-s.a[0])/l,(s.b[1]-s.a[1])/l]:[1,0],c=Math.min(Math.min(t.height,s.height??t.height)-.02,e.sill+e.height),u=Math.max(0,Math.min(e.sill,c-.1));return np(r,t,s.exterior,u,[s.a[0]+d[0]*a,s.a[1]+d[1]*a])}var je=qt`
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
`,Qi=qt`
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
`;var Kc=40,zs=class extends jt{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return e.every(l=>a.includes(l))},i=this.fixed.filter(s=>!t||n(s)),o=t?this.options.filter(n):this.options;return[...i,...o.slice(0,Kc)]}get leftOut(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=t?this.options.filter(i=>e.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-Kc)}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[];return _`<div class="wrap">
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
      ${this._open?_`<ul class="list" role="listbox">
            ${e.length?y:_`<li class="empty">–</li>`}
            ${e.map((n,i)=>_`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?_`<small>${n.id}</small>`:y}
              </li>`)}
            ${this.leftOut>0?_`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:y}
          </ul>`:y}
    </div>`}static styles=[je,qt`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",zs);var ip=new URL(import.meta.url),op=new URL("./neonplan3d-3d.js?v=b21e57bc4e3d",ip).href,Uc;function Zn(){return Uc??=import(op),Uc}var Gc=(r,t,e)=>{let n=new Map;for(let i=t;i<=e;i++)n.set(r[i],i);return n},Yc=qe(class extends xe{constructor(r){if(super(r),r.type!==cn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let n;e===void 0?e=t:t!==void 0&&(n=t);let i=[],o=[],s=0;for(let a of r)i[s]=n?n(a,s):s,o[s]=e(a,s),s++;return{values:o,keys:i}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,n]){let i=_r(r),{values:o,keys:s}=this.dt(t,e,n);if(!Array.isArray(i))return this.ut=s,o;let a=this.ut??=[],l=[],d,c,u=0,p=i.length-1,h=0,f=o.length-1;for(;u<=p&&h<=f;)if(i[u]===null)u++;else if(i[p]===null)p--;else if(a[u]===s[h])l[h]=ke(i[u],o[h]),u++,h++;else if(a[p]===s[f])l[f]=ke(i[p],o[f]),p--,f--;else if(a[u]===s[f])l[f]=ke(i[u],o[f]),dn(r,l[f+1],i[u]),u++,f--;else if(a[p]===s[h])l[h]=ke(i[p],o[h]),dn(r,i[u],i[p]),p--,h++;else if(d===void 0&&(d=Gc(s,h,f),c=Gc(a,u,p)),d.has(a[u]))if(d.has(a[p])){let m=c.get(s[h]),v=m!==void 0?i[m]:null;if(v===null){let g=dn(r,i[u]);ke(g,o[h]),l[h]=g}else l[h]=ke(v,o[h]),dn(r,i[u],v),i[m]=null;h++}else ci(i[p]),p--;else ci(i[u]),u++;for(;h<=f;){let m=dn(r,l[f+1]);ke(m,o[h]),l[h++]=m}for(;u<=p;){let m=i[u++];m!==null&&ci(m)}return this.ut=s,gr(r,l),Xt}});var Is=["sofa","seating","table","storage","bed","kitchen","appliance","bath","lamp","media","office","tech","heating","energy","household","deco","plant","outdoor","kids","sport","pets","vehicle","stairs","architecture"],Fs=["living","dining","kitchen","bedroom","kids","bath","office","hall","utility","garage","garden","hobby"],td={lamp_ceiling:["lamp",[]],lamp_downlight:["lamp",[]],lamp_spot:["lamp",[]],lamp_panel:["lamp",[]],lamp_pendant:["lamp",[]],lamp_ceiling_fan:["lamp",[]],lamp_floor:["lamp",["living","bedroom","office"]],lamp_uplight:["lamp",["living","bedroom","office"]],lamp_table:["lamp",["living","bedroom","office"]],lamp_wall:["lamp",[]],led_strip:["lamp",[]],lamp_bollard:["lamp",["garden"]],lamp_garden:["lamp",["garden"]],radiator:["heating",[]],ac_unit:["heating",[]],sofa:["sofa",["living"]],sofa_l:["sofa",["living"]],sofa_u:["sofa",["living"]],armchair:["seating",["living","bedroom","office"]],stool:["seating",["living","bath","kids"]],coffee_table:["table",["living"]],tv_board:["media",["living","bedroom"]],tv_wall:["media",["living","bedroom"]],sideboard:["storage",["living","dining","hall"]],shelf:["storage",["living","office","kids","utility","garage"]],plant:["plant",[]],rug:["deco",["living","bedroom","kids","hall"]],table:["table",["dining","kitchen","living"]],table_round:["table",["dining","kitchen","living"]],chair:["seating",["dining","kitchen","living"]],bench:["seating",["dining","kitchen","hall","garden"]],corner_bench:["seating",["dining","kitchen"]],bar_stool:["seating",["kitchen","dining"]],kitchen:["kitchen",["kitchen"]],kitchen_wall:["kitchen",["kitchen"]],kitchen_tall:["kitchen",["kitchen"]],island:["kitchen",["kitchen"]],worktop:["kitchen",["kitchen","utility","garage"]],sink:["kitchen",["kitchen","utility"]],stove:["appliance",["kitchen"]],dishwasher:["appliance",["kitchen"]],fridge:["appliance",["kitchen","utility"]],fridge_smart:["appliance",["kitchen"]],bed:["bed",["bedroom","kids"]],bunk_bed:["bed",["kids","bedroom"]],nightstand:["storage",["bedroom","kids"]],wardrobe:["storage",["bedroom","kids","hall"]],dresser:["storage",["bedroom","kids","hall"]],bathtub:["bath",["bath"]],shower:["bath",["bath"]],wc:["bath",["bath"]],washbasin:["bath",["bath"]],washer:["appliance",["bath","utility"]],dryer:["appliance",["bath","utility"]],desk:["office",["office","kids","bedroom"]],office_chair:["office",["office","kids"]],tall_cabinet:["storage",["office","hall","utility","bath"]],coat_rack:["household",["hall"]],stairs:["stairs",["hall","living"]],stairs_u:["stairs",["hall","living"]],stairwell:["stairs",["hall","living"]],robot_vacuum:["appliance",[]],inverter:["energy",["utility","garage"]],home_battery:["energy",["utility","garage"]],wallbox:["energy",["garage"]],meter:["energy",["utility","garage"]],grid_point:["energy",["utility"]],pool_pump:["outdoor",["utility","garage","garden"]],pool_filter:["outdoor",["utility","garage","garden"]],pool_heat_pump:["outdoor",["garden","utility"]],pool_dosing:["outdoor",["utility","garage"]],pool_valve:["outdoor",["utility","garage"]],parking:["vehicle",["garage"]],awning:["outdoor",["garden"]],waste_bin:["household",["garden","garage","utility"]],mailbox:["household",["garden","hall"]],wall_switch:["tech",[]],wall_socket:["tech",[]],access_point:["tech",[]],water_heater:["heating",["utility","bath","garage"]]};function ed(r=[]){let t=new Set(Object.values(yi).flat());for(let e of r)t.add(e);return[...t].filter(e=>e in td)}var sp={living:["living"],kitchen:["kitchen"],bedroom:["bedroom"],bath:["bath"],kids:["kids"],office:["office"],garage:["garage"],garden:["garden"],utility:["utility"],cinema:["living","hobby"],fitness:["hobby"],stairs:["hall"],vehicles:["garage"],pets:[],smarthome:[],architecture:[],fun_halloween:[],fun_pets:[]},rp=[[/\b(van|estate|suv|compact car|sedan|coup|cabrio|convertible|city ev|minibus|transporter|panel van|pickup|campervan|motorhome|caravan|trailer|motorcycle|electric car|e-bike|bike stand|bike holder|bike rack)\b/,"vehicle",["garage"]],[/\b(cat|dog|pet|pets|litter|hamster|rabbit|bird cage|aquarium|terrarium|bowls|scratch|animal|cage)\b/,"pets",[]],[/\b(stairs?|stair|winder|landing|railing|spiral|space-saver|outdoor steps)\b/,"stairs",["hall"]],[/\b(treadmill|power rack|rower|rowing|spin bike|dumbbell|punching|yoga|elliptical|cross trainer|gym|wall bars|fitness|smart trainer|kettlebell|massage chair|water cooler|exercise)\b/,"sport",["hobby"]],[/\b(kids|loft bed|teepee|tipi|play kitchen|play mat|play tower|toy|toys|rocking horse|cuddle|cosy corner|ball pit|house bed|baby|crib|cot|changing table|children)\b/,"kids",["kids"]],[/\b(lamp|lamps|lantern|torch|lights|spotlight|downlight|pendant|light cove|led niche|light pillar|ceiling panel|wall light|workshop light|under-cabinet light|night light|star projector|star ceiling|garden spots|up and down|candelabra)\b/,"lamp",null],[/\b(herb garden|tree|shrub|brush|plant|plants|monstera|flower|pots|pampas)\b/,"plant",null],[/\b(tv|television|projector|projection screen|screen|speaker|subwoofer|soundbar|receiver|turntable|record shelf|game console|hi-fi|cinema seat|cinema|acoustic|bass trap|smart display|media wall|arcade|monitor|sim racing|piano)\b/,"media",null],[/\b(fridge|freezer|oven|hob|cooker|dishwasher|microwave|coffee|kettle|toaster|mixer|hood|washer|washing machine|dryer|vacuum|ironing|wine|range|popcorn)\b/,"appliance",null],[/\b(wallbox|home battery|inverter|solar|balcony|fuse box|meter cabinet|grid)\b/,"energy",null],[/\b(heat pump|boiler|buffer tank|manifold|ventilation|radiator|fan|air purifier|humidifier|dehumidifier|thermostat|water softener|water pump|hot water|patio heater|fireplace|wood stove|chimney|stove)\b/,"heating",null],[/\b(server|network|nas|router|access point|wi-fi|printer|filament|siren|smoke detector|camera|baby monitor|phone booth|smart home|sensor|leak|switch|socket|compressor|door opener|alarm clock|clock)\b/,"tech",null],[/\b(hot tub|outdoor|garden|patio|pergola|parasol|grill|greenhouse|raised bed|shed|trampoline|sprinkler|irrigation|rain barrel|rotary|awning|mower|fire bowl|hammock|lounger)\b/,"outdoor",["garden"]],[/\b(base unit|drawer unit|sink unit|wall unit|corner base|corner wall|pantry|kitchen|island|breakfast bar|spice rack|trolley|worktop|sink)\b/,"kitchen",["kitchen"]],[/\b(bathtub|tub|shower|toilet|wc|bidet|bathroom|washbasin|basin|sauna|whirlpool)\b/,"bath",["bath"]],[/\b(bed|beds|boxspring|box-spring|futon|canopy)\b/,"bed",["bedroom"]],[/\b(wardrobe|closet|clothes|dresser|chest of|nightstand|bedside)\b/,"storage",["bedroom"]],[/\b(desk|office|whiteboard|filing|file cabinet)\b/,"office",["office"]],[/\b(sofa|chesterfield|chaise|r[ée]camière|recamiere|lounge set)\b/,"sofa",["living"]],[/\b(table|tables|workbench|vanity)\b/,"table",null],[/\b(armchair|chair|chairs|stool|stools|bench|recliner|bean bag|pouf|seat|rocking)\b/,"seating",null],[/\b(waste|bin|mailbox|drying rack|basket|coat|laundry|hooks)\b/,"household",null],[/\b(shelf|shelves|cabinet|sideboard|lowboard|highboard|vitrine|display cabinet|cube|rack|bookcase|tool wall|shoe|console table)\b/,"storage",null],[/\b(column|beam|beams|partition|sliding wall|divider|podium|platform|gallery|curtain|niche|built-in)\b/,"architecture",[]],[/\b(rug|vase|picture|painting|mirror|pumpkin|cobweb|garland|gravestone|grave|skeleton|cauldron|ghost|broom|candle|deco)\b/,"deco",null]],ap=/\b(mirror|towel|laundry|washer|cabinet|shelf|plant|fan|rain shower)\b/;function lp(r){return`${r.id.replace(/_/g," ")} ${r.name.en??""}`.toLowerCase()}function cp(r,t){var a;let e=t.group&&Is.includes(t.group)?t.group:null,n=(a=t.room)==null?void 0:a.filter(l=>Fs.includes(l)),i=r.replace(/^mastershort\./,""),o=sp[i]??[];if(e)return{kind:e,rooms:n??o};let s=lp(t);if(i==="bath"&&ap.test(s)&&!/\b(washing machine cabinet|fan)\b/.test(s))return{kind:"bath",rooms:n??["bath"]};for(let[l,d,c]of rp)if(l.test(s))return{kind:d,rooms:n??(c&&c.length?[...new Set([...c,...o])]:o)};return{kind:"deco",rooms:n??o}}function nd(r){let t=r.toLowerCase(),e=[[/kinder|kids|child|niñ|bambin|enfant|dziec|děts|barn|lapsi|gyerek|copi|otro|儿童|kinderkamer/,"kids"],[/schlaf|bedroom|dormit|camera da letto|chambre|slaapkamer|sypial|ložnic|sover|makuu|háló|dormitor|spaln|卧室|soveværelse/,"bedroom"],[/wohn|living|lounge|salon|soggiorno|sala de estar|woonkamer|obývací|stue|olohuone|nappali|sufrag|dnevn|客厅/,"living"],[/\bess|dining|comedor|pranzo|salle à manger|eetkamer|jadal|jídel|spise|ruokailu|étkez|jedil|餐厅/,"dining"],[/küche|kueche|kitchen|cocina|cucina|cuisine|keuken|kuchn|kuchyn|kjøkken|køkken|keittiö|konyha|bucăt|kuhinj|厨房/,"kitchen"],[/\bbad\b|bath|baño|bagno|salle de bain|badkamer|łazienk|koupeln|baderom|badevær|kylpy|fürdő|baie|kopaln|wc|toilet|gäste|guest|浴室|dusch|shower/,"bath"],[/büro|buero|office|arbeit|studio|bureau|kantoor|biuro|pracovn|kontor|työhuone|iroda|birou|pisarn|gaming|办公/,"office"],[/flur|diele|hall|corridor|entrance|eingang|ingresso|gang|hal\b|przedpok|chodba|entré|eteinen|előszoba|hol\b|hodnik|treppe|stair|walk/,"hall"],[/hauswirtschaft|hwr|utility|technik|keller|wasch|laundry|lavander|buanderie|berging|bijkeuken|pralni|prádeln|vaskerom|kodinhoito|mosó|tehnic|pralnic|cellar|basement|abstell|storage|vorrat|pantry|heizung|boiler/,"utility"],[/garage|carport|werkstatt|workshop|garaje|garaż|garáž|verkstad|autotalli|garázs|garaj|garaž|车库/,"garage"],[/garten|garden|terrasse|terrace|balkon|balcony|jardin|giardino|tuin|ogród|zahrad|hage|have|puutarha|kert|grădin|vrt|pool|yard|patio|einfahrt|driveway|花园/,"garden"],[/fitness|gym|sport|hobby|kino|cinema|heimkino|home theater|spiel|play|party|bar\b|sauna|wellness/,"hobby"]];for(let[n,i]of e)if(n.test(t))return i;return null}var dp=/\s*\(?\b\d+(?:[.,]\d+)?\s*(?:[×x]\s*\d+(?:[.,]\d+)?)*\s*(?:cm|m|l|u|″|"|-seater|-sitzer|-door|-türig|-drawer|-teilig|-piece|seats|parts)?\)?/gi;function up(r){let t=r.replace(dp," ").replace(/\s+(mit|with|avec|con)\s*$/i,"").replace(/\s{2,}/g," ").replace(/^[\s,–-]+|[\s,–-]+$/g,"").trim();return t?t[0].toUpperCase()+t.slice(1):r}function Qc(r){let t=[...r.matchAll(/\d+(?:[.,]\d+)?(?:\s*[×x]\s*\d+(?:[.,]\d+)?)*/g)].map(n=>n[0].replace(/\s*[×x]\s*/g," \xD7 "));if(t.length)return t.join(" \xB7 ");let e=r.match(/\b(links|rechts|left|right|izquierda|derecha)\b/i);return e?e[1].toLowerCase():null}function pp(r){return/\b(links|left|izquierda)\b/i.test(r)?"left":/\b(rechts|right|derecha)\b/i.test(r)?"right":null}function hp(r){return r.replace(/\b(links|rechts|left|right|izquierda|derecha)\b/i,t=>{let n={links:"rechts",rechts:"links",left:"right",right:"left",izquierda:"derecha",derecha:"izquierda"}[t.toLowerCase()]??t;return t[0]===t[0].toUpperCase()?n[0].toUpperCase()+n.slice(1):n})}function fp(r){if(r.family)return r.family;let t=r.id.match(/^(.*?)_(\d+(?:x\d+)?|left|right|links|rechts)$/);return t?t[1]:null}var Jc=new Set(["garden"]),Zc={sofa:"sofa couch sof\xE1",seating:"stuhl sessel hocker bank sitz chair stool bench seat silla sill\xF3n taburete banco asiento",table:"tisch table mesa",storage:"schrank regal kommode vitrine cabinet shelf dresser wardrobe armario estanter\xEDa c\xF3moda vitrina",bed:"bett bed cama",kitchen:"k\xFCche kitchen cocina",appliance:"ger\xE4t ger\xE4te appliance electrodom\xE9stico aparato",bath:"bad bath ba\xF1o",lamp:"lampe lampen leuchte licht lamp light l\xE1mpara luz",media:"tv fernseher lautsprecher audio speaker tele televisor altavoz",office:"b\xFCro schreibtisch desk office oficina escritorio",tech:"technik smart home sensor t\xE9cnica dom\xF3tica",heating:"heizung heizk\xF6rper klima heating climate calefacci\xF3n radiador clima",energy:"energie strom solar energy power energ\xEDa",household:"haushalt household hogar",deco:"deko dekoration decoration decoraci\xF3n",plant:"pflanze pflanzen baum plant tree planta \xE1rbol",outdoor:"garten au\xDFen drau\xDFen garden outdoor jard\xEDn exterior",kids:"kinder kids ni\xF1os",sport:"fitness sport deporte",pets:"haustier tier pet mascota animal",vehicle:"auto fahrzeug car vehicle coche veh\xEDculo",stairs:"treppe gel\xE4nder stairs railing escalera barandilla",architecture:"architektur architecture arquitectura"};function id(r){let t=[];for(let n of r.basics){let i=td[n];if(!i)continue;let[o,s]=i,a=r.basicName(n);t.push({type:n,key:n,label:a,search:`${a} ${r.basicNameEn(n)} ${n.replace(/_/g," ")} ${r.kindName(o)} ${Zc[o]}`,kind:o,rooms:s,electric:Ue(n),light:$i.has(n),outdoor:s.length>0&&s.every(l=>Jc.has(l)),size:r.size(n),pack:null,packLabel:null,packRelease:0,family:null,variant:null})}for(let n of r.packs){if(!n.items.length)continue;let i=ge(n);for(let o of n.items){let{kind:s,rooms:a}=cp(n.id,o),l=Me(n.id,o.id),d=ae(o);t.push({type:l,key:l,label:d,search:`${Object.values(o.name).join(" ")} ${o.id.replace(/_/g," ")} ${i} ${n.name} ${r.kindName(s)} ${Zc[s]} ${(o.tags??[]).join(" ")}`,kind:s,rooms:a,electric:!!o.electric||!!o.light,light:!!o.light,outdoor:a.length>0&&a.every(c=>Jc.has(c)),size:o.size,pack:n.id,packLabel:i,packRelease:n.release??1,family:fp(o),variant:o.variant?o.variant[r.language.split("-")[0]]??o.variant.en??Object.values(o.variant)[0]??null:Qc(d)})}}let e=new Map(t.map(n=>[n.type,n]));for(let n of[...t]){if(!pp(n.label)||n.mirror)continue;let o=n.type.replace(/(_|\b)(left|right|links|rechts)(?=$|[_\s)])/i,(a,l,d)=>l+({left:"right",right:"left",links:"rechts",rechts:"links"}[d.toLowerCase()]??d));if(o!==n.type&&e.has(o))continue;let s=hp(n.label);t.push({...n,key:`${n.type}#m`,mirror:!0,label:s,search:`${n.search} ${s}`,family:n.family??n.type,variant:Qc(s)}),n.family||(n.family=n.type)}return t}function Xc(r){return r.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss")}function od(r,t){let e=Xc(t.query).split(/\s+/).filter(Boolean);return r.filter(n=>{if(t.room&&n.rooms.length&&!n.rooms.includes(t.room)||t.electric&&!n.electric||t.light&&!n.light||t.outdoor&&!n.outdoor)return!1;if(!e.length)return!0;let i=Xc(n.search);return e.every(o=>i.includes(o))})}function sd(r,t){let e=r.filter(s=>s.kind===t),n=new Map;for(let s of e){if(!s.family)continue;let a=`${s.pack??"basic"}:${s.family}`;n.set(a,[...n.get(a)??[],s])}let i=[],o=new Set;for(let s of e){if(o.has(s.key))continue;let a=s.family?`${s.pack??"basic"}:${s.family}`:null,l=a?n.get(a):void 0;if(a&&l&&l.length>1){for(let c of l)o.add(c.key);let d=[...new Set(l.flatMap(c=>c.rooms))];i.push({key:a,label:up(s.label),kind:t,rooms:d,entries:l})}else o.add(s.key),i.push({key:s.key,label:s.label,kind:t,rooms:s.rooms,entries:[s]})}return i}function Rs(r,t){let[e,n]=r,i=s=>Math.round(s*100),o=t.startsWith("de")||t.startsWith("fr")||t.startsWith("it")||t.startsWith("es")||t.startsWith("nl")?",":".";return e>=10||n>=10?`${(Math.round(e*10)/10).toString().replace(".",o)} \xD7 ${(Math.round(n*10)/10).toString().replace(".",o)} m`:`${i(e)} \xD7 ${i(n)} cm`}var mp="neonplan3d-thumbs",Xn="thumbs",Ts=new Map,Ji=null;function rd(){return Ji||(Ji=new Promise(r=>{try{if(typeof indexedDB>"u")return r(null);let t=indexedDB.open(mp,1);t.onupgradeneeded=()=>t.result.createObjectStore(Xn),t.onsuccess=()=>r(t.result),t.onerror=()=>r(null),t.onblocked=()=>r(null)}catch{r(null)}}),Ji)}async function gp(r){let t=await rd();return t?new Promise(e=>{try{let n=t.transaction(Xn,"readonly").objectStore(Xn).get(r);n.onsuccess=()=>e(typeof n.result=="string"?n.result:null),n.onerror=()=>e(null)}catch{e(null)}}):null}async function _p(r,t){let e=await rd();if(e)try{e.transaction(Xn,"readwrite").objectStore(Xn).put(t,r)}catch{}}async function ad(r,t){let e=Ts.get(r);if(e)return e;let n=await gp(r);if(n)return Ts.set(r,n),n;let i=await t();return i&&(Ts.set(r,i),_p(r,i)),i}var bp=10,ld=24,vp=96,cd="neonplan3d.lib.open",dd="neonplan3d.lib.fav",ud="neonplan3d.lib.recent";function Ls(r,t){try{let e=localStorage.getItem(r);return e?JSON.parse(e):t}catch{return t}}function Os(r,t){try{localStorage.setItem(r,JSON.stringify(t))}catch{}}var Cs=class extends jt{static properties={entries:{attribute:!1},language:{attribute:!1},roomHint:{attribute:!1},admin:{type:Boolean},lite:{type:Boolean},t:{attribute:!1},thumb:{attribute:!1},_query:{state:!0},_room:{state:!0},_electric:{state:!0},_light:{state:!0},_outdoor:{state:!0},_open:{state:!0},_fav:{state:!0},_recent:{state:!0},_thumbs:{state:!0},_shown:{state:!0},_limits:{state:!0}};roomTouched=!1;observer=null;observed=new WeakSet;wanted=new Set;drawing=0;queue=[];constructor(){super(),this.entries=[],this.language="en",this.roomHint=null,this.admin=!0,this.lite=(navigator.hardwareConcurrency??4)<=2||(navigator.deviceMemory??4)<=2,this.t=t=>t,this.thumb=null,this._query="",this._room=null,this._electric=!1,this._light=!1,this._outdoor=!1,this._open=new Set(Ls(cd,["sofa","lamp"])),this._fav=Ls(dd,[]),this._recent=Ls(ud,[]),this._thumbs=new Map,this._shown=new Map,this._limits=new Map}willUpdate(t){if(t.has("roomHint")&&!this.roomTouched&&(this._room=this.roomHint),t.has("entries")){let e=new Set(this.entries.map(n=>n.key));this._fav=this._fav.filter(n=>e.has(n)),this._recent=this._recent.filter(n=>e.has(n)),this.queue=[]}}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.observer)==null||t.disconnect(),this.observer=null}updated(){if(this.lite||!this.thumb)return;this.observer??=new IntersectionObserver(n=>{for(let i of n){if(!i.isIntersecting)continue;let o=this.byKey.get(i.target.dataset.key??"");o&&this.want(o)}},{root:null,rootMargin:"200px"});let t=this.byKey,e=window.innerHeight+200;for(let n of this.renderRoot.querySelectorAll(".fp3d-lc-pic[data-key]")){this.observed.has(n)||(this.observed.add(n),this.observer.observe(n));let i=t.get(n.dataset.key??"");if(!i||this._thumbs.has(i.type))continue;let o=n.getBoundingClientRect();o.bottom>=-200&&o.top<=e&&this.want(i)}}get byKey(){return new Map(this.entries.map(t=>[t.key,t]))}showVariant(t,e,n){if(this.lite||!this.thumb){this.preview((e==null?void 0:e.type)??null,n);return}let i=new Map(this._shown);e?i.set(t,e.key):i.delete(t),this._shown=i,e&&this.want(e)}want(t){this._thumbs.has(t.type)||this.wanted.has(t.type)||(this.wanted.add(t.type),this.queue.push(t),this.drain())}drain(){for(;this.drawing<2&&this.queue.length;){let t=this.queue.shift();this.drawing++;let e=`${t.type}|${t.packRelease}|${vp}|1`;ad(e,()=>this.thumb?this.thumb(t):Promise.resolve(null)).then(n=>{if(n){let i=new Map(this._thumbs);i.set(t.type,n),this._thumbs=i}else this.wanted.delete(t.type)}).catch(()=>this.wanted.delete(t.type)).finally(()=>{this.drawing--,this.drain()})}}pick(t){this.admin&&(this._recent=[t.key,...this._recent.filter(e=>e!==t.key)].slice(0,bp),Os(ud,this._recent),this.dispatchEvent(new CustomEvent("library-add",{detail:{type:t.type,mirror:!!t.mirror},bubbles:!0,composed:!0})))}preview(t,e){this.lite&&this.dispatchEvent(new CustomEvent("library-preview",{detail:{type:t,element:e},bubbles:!0,composed:!0}))}toggleFav(t){this._fav=this._fav.includes(t)?this._fav.filter(e=>e!==t):[...this._fav,t],Os(dd,this._fav)}toggleOpen(t){let e=new Set(this._open);e.has(t)?e.delete(t):e.add(t),this._open=e,Os(cd,[...e])}setRoom(t){this.roomTouched=!0,this._room=t}get hits(){return od(this.entries,{query:this._query,room:this._room,electric:this._electric,light:this._light,outdoor:this._outdoor})}render(){let t=this.t,e=this.hits,n=this._query.trim().length>0,i=this.byKey,o=new Set(e.map(u=>u.key)),s=u=>({key:u.key,label:u.label,kind:u.kind,rooms:u.rooms,entries:[u]}),a=this._recent.map(u=>i.get(u)).filter(u=>!!u&&o.has(u.key)),l=this._fav.map(u=>i.get(u)).filter(u=>!!u&&o.has(u.key)),d=Is.map(u=>({kind:u,cards:sd(e,u)})).filter(u=>u.cards.length),c=d.length&&!d.some(u=>this._open.has(u.kind))?d[0].kind:null;return _`<input
        class="fp3d-search"
        type="search"
        placeholder=${t("furniture_search")}
        .value=${this._query}
        @input=${u=>this._query=u.target.value}
        @keydown=${u=>{u.key==="Escape"&&(this._query="")}}
      />
      <div class="fp3d-lib-rooms" role="group">
        <button class="fp3d-chip ${this._room===null?"on":""}" @click=${()=>this.setRoom(null)}>${t("lib_room_all")}</button>
        ${Fs.map(u=>_`<button class="fp3d-chip ${this._room===u?"on":""}" @click=${()=>this.setRoom(u)}>${t(`lib_room_${u}`)}</button>`)}
      </div>
      <div class="fp3d-lib-chips">
        <button class="fp3d-chip fp3d-chip-f ${this._electric?"on":""}" @click=${()=>this._electric=!this._electric}>⚡ ${t("lib_chip_electric")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._light?"on":""}" @click=${()=>this._light=!this._light}>💡 ${t("lib_chip_light")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._outdoor?"on":""}" @click=${()=>this._outdoor=!this._outdoor}>🌳 ${t("lib_chip_outdoor")}</button>
      </div>
      ${this.roomHint&&this._room===this.roomHint&&!this.roomTouched?_`<p class="fp3d-lib-hint">${t("lib_hint_room")}</p>`:y}
      ${e.length?y:_`<p class="fp3d-lib-hint">${t("furniture_search_none")}</p>`}
      ${a.length?this.section("recent",`\u{1F558} ${t("lib_recent")}`,a.map(s),n,!0):y}
      ${l.length?this.section("fav",`\u2605 ${t("lib_favorites")}`,l.map(s),n,!0):y}
      ${d.map(u=>this.section(u.kind,t(`lib_kind_${u.kind}`),u.cards,n||u.kind===c,!1))}`}section(t,e,n,i,o){let s=i||o||this._open.has(t),a=this._limits.get(t)??ld,l=n.slice(0,a),d=n.reduce((c,u)=>c+u.entries.length,0);return _`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${s} @click=${()=>o?void 0:this.toggleOpen(t)}>
        <span class="fp3d-lib-caret">${o?"":s?"\u25BE":"\u25B8"}</span>${e} <span class="fp3d-lib-count">${d}</span>
      </button>
      ${s?_`<div class="fp3d-lib-grid">${Yc(l,c=>c.key,c=>this.card(c))}</div>
            ${n.length>a?_`<button class="fp3d-lib-more" @click=${()=>{let c=new Map(this._limits);c.set(t,a+ld*2),this._limits=c}}>${this.t("lib_more",{n:n.length-a})}</button>`:y}`:y}`}card(t){let e=this.t,n=t.entries[0],i=t.entries.length>1,o=this._fav.includes(n.key),s=this._shown.get(n.key),a=s&&t.entries.find(c=>c.key===s)||n,l=this._thumbs.get(a.type)??this._thumbs.get(n.type),d=n.light?"\u{1F4A1}":n.electric?"\u26A1":"";return _`<div class="fp3d-lc ${i?"fp3d-lc-family":""}" title=${a.label} @mouseleave=${()=>i&&this.showVariant(n.key,null,null)}>
      <button
        class="fp3d-lc-main"
        ?disabled=${!this.admin}
        @click=${()=>this.pick(n)}
        @mouseenter=${c=>this.preview(n.type,c.currentTarget)}
        @focus=${c=>this.preview(n.type,c.currentTarget)}
        @mouseleave=${()=>this.preview(null,null)}
        @blur=${()=>this.preview(null,null)}
      >
        ${this.lite?y:_`<span class="fp3d-lc-pic" data-key=${n.key}>${l?_`<img src=${l} alt="" loading="lazy" class=${(this._thumbs.has(a.type)?a:n).mirror?"fp3d-lc-mirrored":""} />`:_`<span class="fp3d-lc-wait"></span>`}</span>`}
        <span class="fp3d-lc-label">${t.label}${d?_` <span class="fp3d-lc-badge">${d}</span>`:y}</span>
        <span class="fp3d-lc-sub">${i?e("lib_sizes",{n:t.entries.length}):Rs(n.size,this.language)}${n.packLabel?_` · ${n.packLabel}`:_` · ${e("lib_basic")}`}</span>
      </button>
      ${i?_`<div class="fp3d-lc-chips">
            ${t.entries.map(c=>_`<button
                title="${c.label} · ${Rs(c.size,this.language)}"
                ?disabled=${!this.admin}
                class="fp3d-lc-chip ${a.key===c.key&&i&&s?"on":""}"
                @click=${()=>this.pick(c)}
                @mouseenter=${u=>this.showVariant(n.key,c,u.currentTarget)}
                @focus=${u=>this.showVariant(n.key,c,u.currentTarget)}
                @mouseleave=${()=>this.preview(null,null)}
                @blur=${()=>this.preview(null,null)}
              >${c.variant??c.label}</button>`)}
          </div>`:y}
      <button class="fp3d-lc-fav ${o?"on":""}" title=${e(o?"lib_fav_remove":"lib_fav_add")} aria-label=${e(o?"lib_fav_remove":"lib_fav_add")} @click=${()=>this.toggleFav(n.key)}>${o?"\u2605":"\u2606"}</button>
    </div>`}static styles=[je,qt`
      :host {
        display: block;
      }
      .fp3d-search {
        position: sticky;
        top: 0;
        z-index: 2;
        width: 100%;
        box-sizing: border-box;
        font: inherit;
        font-size: 14px;
        color: var(--fp3d-text);
        background: var(--fp3d-panel, #0d1424);
        border: 1px solid var(--fp3d-line);
        border-radius: 8px;
        padding: 8px 10px;
        margin: 6px 0 8px;
      }
      .fp3d-lib-rooms,
      .fp3d-lib-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 6px;
      }
      .fp3d-chip {
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--fp3d-line);
        border-radius: 999px;
        padding: 3px 9px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-chip.on {
        background: var(--fp3d-accent);
        color: #041018;
        border-color: var(--fp3d-accent);
        font-weight: 600;
      }
      .fp3d-chip-f {
        font-size: 11px;
      }
      .fp3d-lib-hint {
        margin: 2px 0 8px;
        font-size: 12px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-head {
        display: flex;
        align-items: center;
        gap: 6px;
        width: 100%;
        margin: 10px 0 4px;
        padding: 4px 0;
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        border-bottom: 1px solid var(--fp3d-line);
        text-align: left;
        cursor: pointer;
      }
      .fp3d-lib-caret {
        width: 10px;
        color: var(--fp3d-muted);
      }
      .fp3d-lib-count {
        margin-left: auto;
        font-weight: 400;
        font-size: 12px;
        color: var(--fp3d-muted);
        font-variant-numeric: tabular-nums;
      }
      .fp3d-lib-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
        gap: 6px;
      }
      .fp3d-lc {
        position: relative;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid var(--fp3d-line);
        border-radius: 10px;
        overflow: hidden;
      }
      .fp3d-lc:hover {
        border-color: var(--fp3d-accent);
      }
      .fp3d-lc-main {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 2px;
        padding: 6px 6px 5px;
        font: inherit;
        color: var(--fp3d-text);
        background: none;
        border: 0;
        text-align: left;
        cursor: pointer;
      }
      .fp3d-lc-main:disabled {
        cursor: default;
        opacity: 0.6;
      }
      .fp3d-lc-pic {
        display: block;
        height: 64px;
        border-radius: 6px;
        background: radial-gradient(ellipse at 50% 70%, rgba(80, 200, 255, 0.12), transparent 70%);
      }
      .fp3d-lc-pic img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .fp3d-lc-pic img.fp3d-lc-mirrored {
        transform: scaleX(-1);
      }
      .fp3d-lc-wait {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background: rgba(255, 255, 255, 0.03);
      }
      .fp3d-lc-label {
        font-size: 12px;
        font-weight: 500;
        line-height: 1.25;
        padding-right: 16px;
      }
      .fp3d-lc-badge {
        font-size: 10px;
      }
      .fp3d-lc-sub {
        font-size: 10.5px;
        color: var(--fp3d-muted);
        line-height: 1.2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .fp3d-lc-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        padding: 0 6px 6px;
      }
      .fp3d-lc-chip {
        font: inherit;
        font-size: 11px;
        color: var(--fp3d-text);
        background: rgba(255, 255, 255, 0.07);
        border: 1px solid var(--fp3d-line);
        border-radius: 6px;
        padding: 2px 6px;
        cursor: pointer;
        white-space: nowrap;
      }
      .fp3d-lc-chip:hover,
      .fp3d-lc-chip.on {
        border-color: var(--fp3d-accent);
        color: var(--fp3d-accent);
      }
      .fp3d-lc-fav {
        position: absolute;
        top: 4px;
        right: 4px;
        width: 22px;
        height: 22px;
        padding: 0;
        font-size: 14px;
        line-height: 22px;
        color: var(--fp3d-muted);
        background: rgba(4, 16, 24, 0.55);
        border: 0;
        border-radius: 50%;
        cursor: pointer;
      }
      .fp3d-lc-fav.on,
      .fp3d-lc-fav:hover {
        color: #ffd166;
      }
      .fp3d-lib-more {
        display: block;
        width: 100%;
        margin: 6px 0 2px;
        padding: 6px;
        font: inherit;
        font-size: 12px;
        color: var(--fp3d-accent);
        background: none;
        border: 1px dashed var(--fp3d-line);
        border-radius: 8px;
        cursor: pointer;
      }
    `]};customElements.get("fp3d-library")||customElements.define("fp3d-library",Cs);function He(r,t){if(!Se(t))return se(r,`furn_${t}`);let e=$t(t);return e?ae(e):se(r,"pack_missing_item")}var js=class extends jt{static properties={hass:{attribute:!1},packs:{attribute:!1},building:{attribute:!1},_packMsg:{state:!0}};constructor(){super(),this._packMsg=null}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!1}t(t,e){return se(this.hass,t,e)}render(){let t=Sl();return _`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new?labels=enhancement" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href=${Ze("extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${ji.filter(e=>ve(e)).map(e=>_`<div class="fp3d-ext-feature ${t.has(e)?"fp3d-ext-on":""}">
              <b>${t.has(e)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${e}`)}</b>
              <span class="fp3d-sub">${this.t(`pro_feature_${e}`)}</span>
              <span class="fp3d-ext-links">
                ${t.has(e)?_`<span class="fp3d-ext-state">${this.t("ext_active")}</span>`:y}
                <a class="fp3d-ext-link" href=${Ze(e)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderFun(t)} ${this.renderPacks()}
    </div>`}editBuilding(t){if(!this.building)return;let e=structuredClone(this.building);t(e),this.dispatchEvent(new CustomEvent("building-edit",{detail:e,bubbles:!0,composed:!0}))}renderFun(t){var d,c;let e=Hi.filter(u=>t.has(u));if(!e.length)return y;let n=((d=this.building)==null?void 0:d.settings.pets)??null,i=(n==null?void 0:n.list)??[],o=(n==null?void 0:n.on)!==!1,s=(((c=this.building)==null?void 0:c.floors)??[]).filter(u=>u.rooms.length).sort((u,p)=>u.elevation-p.elevation),a=u=>this.editBuilding(p=>{var f,m;let h={on:((f=p.settings.pets)==null?void 0:f.on)!==!1,list:[...((m=p.settings.pets)==null?void 0:m.list)??[]]};u(h),p.settings.pets=h}),l=(u,p)=>a(h=>h.list=h.list.map(f=>f.id===u?{...f,...p}:f));return _`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${e.map(u=>u==="fun_halloween"?this.renderHalloween():_`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>✓ ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isAdmin&&this.building?_`<label class="fp3d-check"><input type="checkbox" .checked=${o} @change=${p=>a(h=>h.on=p.target.checked)} /> ${this.t("pets_show")}</label>
                    ${i.map(p=>_`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${h=>{let f=h.target.value,m=Ln[f];l(p.id,{kind:f,fur:m.includes(p.fur)?p.fur:m[0],breed:f==="dog"?p.breed??"labrador":null})}}
                        >
                          ${["cat","dog","rabbit"].map(h=>_`<option value=${h} ?selected=${p.kind===h}>${this.t(`pet_kind_${h}`)}</option>`)}
                        </select>
                        ${p.kind==="dog"?_`<select aria-label=${this.t("pet_breed")} @change=${h=>l(p.id,{breed:h.target.value})}>
                              ${ia.map(h=>_`<option value=${h} ?selected=${(p.breed??"labrador")===h}>${this.t(`pet_breed_${h}`)}</option>`)}
                            </select>`:y}
                        <input type="text" maxlength="30" .value=${p.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${h=>l(p.id,{name:h.target.value.trim()})} />
                        <select aria-label=${this.t("pet_fur")} @change=${h=>l(p.id,{fur:h.target.value})}>
                          ${Ln[p.kind].map(h=>_`<option value=${h} ?selected=${p.fur===h}>${this.t(`pet_fur_${h}`)}</option>`)}
                        </select>
                        ${s.length>1?_`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${h=>l(p.id,{floor_id:h.target.value||null})}>
                              ${s.map((h,f)=>_`<option value=${f===0?"":h.id} ?selected=${(p.floor_id??s[0].id)===h.id}>🏠 ${h.name}</option>`)}
                            </select>`:y}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${()=>a(h=>h.list=h.list.filter(f=>f.id!==p.id))}>✕</button>
                      </div>`)}
                    ${i.length<8?_`<button class="fp3d-btn" @click=${()=>a(p=>p.list.push({id:`pet_${Date.now().toString(36)}`,kind:"cat",name:"",fur:Ln.cat[p.list.length%Ln.cat.length]}))}>+ ${this.t("pet_add")}</button>`:y}`:y}
            </div>`)}
    </section>`}renderHalloween(){var e,n;let t=((n=(e=this.building)==null?void 0:e.settings.halloween)==null?void 0:n.ghost)!==!1;return _`<div class="fp3d-ext-feature fp3d-ext-on">
      <b>✓ 🎃 ${this.t("fun_name_halloween")}</b>
      <span class="fp3d-sub">${this.t("fun_feature_halloween")}</span>
      ${this.isAdmin&&this.building?_`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${t}
              @change=${i=>this.editBuilding(o=>o.settings.halloween={...o.settings.halloween??{},ghost:i.target.checked})}
            />
            ${this.t("halloween_ghost")}</label
          >`:y}
    </div>`}renderPacks(){let t=this.packs??[];return _`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${t.map(e=>{var n;return _`<div class="fp3d-pack">
          <div>
            <b>${ge(e)}</b>
            <span class="fp3d-sub">${(n=e.features)!=null&&n.length?this.t("pack_features",{publisher:e.publisher,n:e.features.length}):this.t("pack_by",{publisher:e.publisher,n:e.items.length})}</span>
            ${e.licensee?_`<span class="fp3d-sub">${this.t("pack_licensed",{name:e.licensee})}${e.release&&e.release>1?` \xB7 v${e.release}`:""}</span>`:y}
            ${(e.features??[]).some(i=>!Ml(i))?_`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:y}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(e)}>${this.t("pack_remove")}</button>
        </div>`})}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${e=>this.importPackFile(e)} />
      </label>
      ${this._packMsg?_`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:y}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let i=[],o=[];for(let a of n)try{let l=await xr(this.hass,await a.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:d,message:c}=l??{},u=`pack_error_${d}`,p=this.t(u,{detail:c??String(l)});o.push(`${a.name}: ${p===u?this.t("pack_error_other",{detail:c??String(l)}):p}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...s,...i,...o].join(" \xB7 ")}}async deletePack(t){!this.hass||!confirm(this.t("pack_remove_confirm",{name:ge(t)}))||(await kr(this.hass,t.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[je,Qi,qt`
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
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",js);var Zi=10,fd=new Set(["vertex","room","device","opening","furniture","furnset","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),md=100,gd=/^(switch|input_boolean)\./,Hs={base:["kitchen","sink","stove","dishwasher","sideboard","dresser","tv_board","nightstand","washbasin","washer","dryer","worktop","desk"],hang:["kitchen_wall","tv_wall","shelf","lamp_wall","radiator","ac_unit","led_strip"],tall:["kitchen_tall","fridge","wardrobe","tall_cabinet","shelf","coat_rack"],living:["sofa","armchair","bed","bunk_bed","bench","corner_bench","plant"],light:["lamp_wall","lamp_floor","led_strip","lamp_table","wall_switch"]},xp=new Set(["kitchen_wall","tv_wall","lamp_wall","shelf","led_strip","ac_unit"]),Xi=new Set(["kitchen","kitchen_wall","kitchen_tall","sideboard","dresser","tv_board","worktop","wardrobe","tall_cabinet","shelf","desk"]),kp={kitchen:.15,kitchen_wall:.2,kitchen_tall:.3,sideboard:.4,dresser:.4,tv_board:.6,worktop:.1,wardrobe:.4,tall_cabinet:.3,shelf:.25,desk:.6},to=10,z=r=>Math.round(r*1e3)/1e3,Ds=.06;function Bs(r,t){if(r.length<3)return r.slice(1);let e=r[0],n=r[r.length-1],i=0,o=-1,s=Math.hypot(n.s-e.s,n.y-e.y)||1;for(let a=1;a<r.length-1;a++){let l=r[a],d=Math.abs((n.s-e.s)*(e.y-l.y)-(e.s-l.s)*(n.y-e.y))/s;d>i&&([i,o]=[d,a])}return i<=t||o<0?[]:[...Bs(r.slice(0,o+1),t),r[o],...Bs(r.slice(o),t)]}function Mp(r){if(r.length<2)return r;let t=s=>Math.round(s*20)/20,e=[{s:r[0].s,y:r[0].y}];for(let s=1;s<r.length;s++){let a=e[e.length-1],l=r[s],c=Math.abs(l.s-a.s)>=Math.abs(l.y-a.y)?{s:t(l.s),y:a.y}:{s:a.s,y:t(l.y)},u=e.length>1?e[e.length-2]:null;u&&(u.y===a.y&&c.y===a.y||u.s===a.s&&c.s===a.s)&&e.pop(),!(Math.hypot(c.s-e[e.length-1].s,c.y-e[e.length-1].y)<.08&&s<r.length-1)&&e.push(c)}let n=r[r.length-1],i=e[e.length-1];e.pop();let o=e[e.length-1];return o&&Math.abs(n.s-o.s)>=.08&&Math.abs(n.y-o.y)>=.08&&e.push(o.y===i.y||e.length<2?{s:t(n.s),y:o.y}:{s:o.s,y:t(n.y)}),e.push({s:n.s,y:n.y}),e}function an(r,t,e){let[n,,i]=ne(r,t,0,e);return[z(n),z(i)]}function Vs(r,t){let e=Gt(r,t),n=0;for(let i=1;i<e.length;i++)n+=Math.hypot(e[i][0]-e[i-1][0],e[i][1]-e[i-1][1],e[i][2]-e[i-1][2]);return n}var _d={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},Sp=new Set(["parking","stairwell","rug","grid_point","waste_bin","mailbox","wall_switch","wall_socket"]),qs=class extends jt{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideMin:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_multi:{state:!0},_single:{state:!0},_multiMode:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_cableId:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallMulti:{state:!0},_wallSingle:{state:!0},_wallGap:{state:!0},_wallCat:{state:!0},_wallQuery:{state:!0},_wallFrame:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_techMode:{state:!0},_feedKind:{state:!0},_techAsk:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_toolMenu:{state:!0},_settingsMenu:{state:!0},_sideWidth:{state:!0},_settingsDialog:{state:!0},_toolOpen:{state:!0},_viewMenu:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;lastFurnTap=null;shiftHeld=!1;onShift=t=>this.shiftHeld=t.shiftKey;kitPics=new Map;kitPicsAsked=new Set;cableCache=null;techPress=null;techStroke=null;wvZoom=null;wvTouch=new Map;wvPinch=null;wvTap=null;wvScale=1;techPick=!1;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallResize=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;sideDrag=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._multi=[],this._single=!1,this._multiMode=!1,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._cableId=null,this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._techMode=!1,this._feedKind=null,this._techAsk=null,this._wallSel=null,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallCat=null,this._wallQuery="",this._wallFrame=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("neonplan3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let t=!1;try{t=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let o=Number(localStorage.getItem("neonplan3d.editorSplit"));o>=20&&o<=80&&(this._splitRatio=o/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=e;let n=!1;try{n=localStorage.getItem("neonplan3d.sideMin")==="1"}catch{}this._sideMin=n,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._toolMenu=null,this._settingsMenu=!1;let i=320;try{i=Number(localStorage.getItem("neonplan3d.sideWidth"))||320}catch{}this._sideWidth=Math.min(640,Math.max(280,i)),this._settingsDialog=null,this._toolOpen=null,this._viewMenu=!1,this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return se(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onShift)}disconnectedCallback(){var t;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onShift),(t=this.resizeObserver)==null||t.disconnect()}willUpdate(t){var e,n,i;if(t.has("packs")&&Or(this.packs??[]),(t.has("packs")||t.has("hass"))&&this.hass&&((e=this.packs)!=null&&e.some(o=>o.module))&&Ps(this.hass,this.packs).then(()=>this.requestUpdate()),t.has("_doc")&&ra(this._doc),t.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(t.has("_split")&&this._split||t.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),t.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),t.has("building")&&this.building!==this._doc){this._doc=this.building,this._doc3d=this.building;let o=this._doc.settings.editor_floor;this._floorId===null&&o&&this._doc.floors.some(s=>s.id===o)&&(this._floorId=o),this._doc.floors.some(s=>s.id===this._floorId)||(this._floorId=((n=this._doc.floors[0])==null?void 0:n.id)??null),(i=this.floor)!=null&&i.rooms.some(s=>s.id===this._roomId)||(this._roomId=null)}}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let i=e.getBoundingClientRect(),o=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(t){var l;let{id:e,x:n,z:i}=t.detail,o=this._doc.settings.wall_interior,s=this._wallView?this.wallSelection():this._furnitureId?this.selection():[],a=s.includes(e)&&s.length>1?s:[];if(a.length){let d=(l=this.floor)==null?void 0:l.furniture.find(h=>h.id===e);if(!d||a.some(h=>this.isFixedItem("furniture",h)))return;let c=z(n-d.x),u=z(i-d.z),p=new Set(a);this.change((h,f)=>{for(let m of f.furniture)p.has(m.id)&&Object.assign(m,{x:z(m.x+c),z:z(m.z+u)})});return}this.change(d=>{for(let c of d.floors){let u=c.furniture.find($=>$.id===e);if(!u)continue;let[p,h]=Qo(c,u.x,u.z,n,i),[f,m]=Jo(c,u,p,h,o),v=Wn(c,u,o),g=v?Math.hypot(v.x-u.x,v.z-u.z):1/0;Object.assign(u,{x:f,z:m});let b=Wn(c,u,o);b&&Math.hypot(b.x-f,b.z-m)<=g+.01&&Object.assign(u,b)}})}onDeviceMoved3d(t){let{id:e,x:n,z:i}=t.detail;this.change(o=>{for(let s of o.floors){let a=s.placements.find(c=>c.entity_id===e);if(!a)continue;let[l,d]=Qo(s,a.x,a.z,n,i);Object.assign(a,{x:l,z:d})}})}render3dBar(){var n;if(!this.isAdmin)return y;let t=this.furnitureItem,e=this.device;if(t){let i=ce(t),o=(s,a,l=.05)=>_`<label class="fp3d-3d-size" title=${this.t(`size_${s}`)}
        >${a}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${l}
          .value=${this.unit==="imperial"?Je(t[s]):String(Math.round(t[s]*100)/100)}
          @change=${d=>{let c=this.readLen(d.target.value);c!==null&&c>=l&&this.updateFurniture({[s]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return _`<div class="fp3d-3d-bar">
        <span>${He(this.hass,t.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${i?_`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?Je(t.mount_y??Tt(this.floor,t)):String(Math.round((t.mount_y??Tt(this.floor,t))*100)/100)}
                @change=${s=>{let a=this.readLen(s.target.value);a!==null&&a>=0&&this.updateFurniture({mount_y:Math.round(Math.min(Zi,a)*1e3)/1e3})}}
              />
            </label>`:y}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let i=at(e.entity_id),o=i==="light",s=i?Ai(i,((n=this.floor)==null?void 0:n.height)??2.5,o?e.mount??"ceiling":null):1;return _`<div class="fp3d-3d-bar">
        <span>${_t(this.hass,e.entity_id)}</span>
        ${o?_`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(a=>_`<option value=${a} ?selected=${a===(e.mount??"ceiling")}>${this.t(`lamp_${a}`)}</option>`)}
            </select>`:y}
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
      </div>`}return y}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t!=null&&t.moved&&this.pushHistory(t.base)}};grab3dStart(t){let e=this._doc,n=yt(e),i=null,o=(a,l,d,c,u=!1)=>{if(!d||u)return;let p=$s(d,t.o,t.d);!p||!$c(d,c,p.u,p.s)||i&&i.t<=p.t||(i={id:a,win:l,t:p.t,du:p.u-c.u,ds:p.s-c.v})};if(this._tool==="energy")for(let a of e.settings.roof.solar??[])o(a.id,!1,Dt(e,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of e.settings.roof.windows??[])o(a.id,!0,n.find(l=>l.key===a.face)??null,kn(a),!!a.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:e,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(t){var h,f;let e=this.grab3d;if(!e)return;let n=e.base,i=e.win?(h=n.settings.roof.windows)==null?void 0:h.find(m=>m.id===e.id):void 0,o=e.win?i?kn(i):void 0:(f=n.settings.roof.solar)==null?void 0:f.find(m=>m.id===e.id);if(!o)return;let s=Dt(n,o),a=s!=null&&s.unbounded?[s]:e.win?yt(n):[...yt(n),...pe(n)],l=null;for(let m of a){let v=$s(m,t.o,t.d);v&&yc(m,v.u,v.s)&&(!l||v.t<l.t)&&(l={face:m,...v})}if(!l)return;let d=l.face,c=.05,u=m=>z(Math.round(m/c)*c),p=xn(d,{...o,face:d.key,u:u(l.u-e.du),v:u(l.s-e.ds),tilt:d.flat?o.tilt??15:o.tilt});e.moved=!0,this.change(m=>{var g,b;if(e.win){let $=(g=m.settings.roof.windows)==null?void 0:g.find(x=>x.id===e.id);$&&Object.assign($,{face:d.key,...p});return}let v=(b=m.settings.roof.solar)==null?void 0:b.find($=>$.id===e.id);v&&Object.assign(v,{face:d.key,...p},d.flat&&v.tilt==null?{tilt:15}:{})},e.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return _`<div class="fp3d-editor-3d">
      ${this.houseTool?y:_`<div class="fp3d-seg fp3d-3d-walls">
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
        .furnishTypes=${this._tool==="energy"?_e:this._tool==="roof"?[]:null}
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
    </div>`}setWall3d(t){this._wall3d=t;try{localStorage.setItem("neonplan3d.walls3d",t)}catch{}}updated(){var n,i;if(this._settingsDialog)for(let o of this.renderRoot.querySelectorAll(".fp3d-dialog details"))o.open=!0;let t=this._preview?this.renderRoot.querySelector(".fp3d-preview"):null;if(t&&this._preview){let o=t.getBoundingClientRect(),s=o.left-this._preview.left,a=o.top-this._preview.top;(Math.abs(s)>1||Math.abs(a)>1)&&(t.style.left=`${parseFloat(t.style.left)-s}px`,t.style.top=`${parseFloat(t.style.top)-a}px`)}for(let o of this.renderRoot.querySelectorAll("select option[selected]"))o.selected||(o.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>{var o;return(o=this.renderRoot.querySelector("fp3d-view3d"))==null?void 0:o.resetView()},250));let e=(n=this.floor)==null?void 0:n.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),(i=this.furnitureItem)!=null&&i.pictures)for(let o of this.storedPictures())!this._images[o]&&!this.loadingImages.has(o)&&this.loadImage(o)}get floor(){var t;return(t=this._doc)==null?void 0:t.floors.find(e=>e.id===this._floorId)}get room(){var t;return(t=this.floor)==null?void 0:t.rooms.find(e=>e.id===this._roomId)}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>md&&this.past.shift(),this.future=[]),this._doc=t,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),o=i.floors.find(s=>s.id===this._floorId);!o&&this._floorId||(t(i,o),this.setDoc(i,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){var e,n;this._doc=t,t.floors.some(i=>i.id===this._floorId)||(this._floorId=((e=t.floors[0])==null?void 0:e.id)??null),(n=this.floor)!=null&&n.rooms.some(i=>i.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:o}=this._view;return[(t-i)/n,(e-o)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){var a,l;let t=((a=this.floor)==null?void 0:a.rooms.flatMap(d=>d.points))??[];if(this._tool==="outdoor"||this._tool==="pool")for(let d of((l=this.floor)==null?void 0:l.outdoor)??[])t.push(...d.points);if(this._tool==="roof")for(let d of this._doc.settings.roof.sections??[])t.push([d.x0,d.z0],[d.x1,d.z1]);let e=t.length?zt(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=e.x1-e.x0+2*n,o=e.z1-e.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:s,ox:this._size.w/2-(e.x0+e.x1)/2*s,oy:this._size.h/2-(e.z0+e.z1)/2*s},this.fittedView=this._view}showPoint(t,e){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-t*n,oy:this._size.h/2-e*n}}zoomAt(t,e,n){let{scale:i,ox:o,oy:s}=this._view,a=Math.max(8,Math.min(600,i*t)),l=a/i;this._view={scale:a,ox:e-(e-o)*l,oy:n-(n-s)*l}}snap(t,e,n=!1){var f;if(this._guides={},n)return t;let i=to/this._view.scale,o=((f=this.floor)==null?void 0:f.rooms)??[],s=[];for(let m of o)m.points.forEach((v,g)=>{e&&m.id===e.roomId&&(e.index===void 0||e.index===g)||s.push(v)});let a=null,l=i;for(let m of s){let v=Math.hypot(m[0]-t[0],m[1]-t[1]);v<l&&(l=v,a=m)}if(a)return this._guides={point:a},[a[0],a[1]];for(let m of o)if(!(e&&m.id===e.roomId))for(let v=0;v<m.points.length;v++){let g=m.points[v],b=m.points[(v+1)%m.points.length],$=b[0]-g[0],x=b[1]-g[1],P=$*$+x*x;if(P<1e-9)continue;let S=((t[0]-g[0])*$+(t[1]-g[1])*x)/P;if(S<=0||S>=1)continue;let R=[g[0]+S*$,g[1]+S*x],I=Math.hypot(R[0]-t[0],R[1]-t[1]),E=this._doc.settings.grid;Math.abs(x)<1e-9&&(R[0]=Math.min(Math.max(Math.round(R[0]/E)*E,Math.min(g[0],b[0])),Math.max(g[0],b[0]))),Math.abs($)<1e-9&&(R[1]=Math.min(Math.max(Math.round(R[1]/E)*E,Math.min(g[1],b[1])),Math.max(g[1],b[1]))),I<l&&(l=I,a=R)}if(a)return this._guides={point:a},[z(a[0]),z(a[1])];let d=this._doc.settings.grid,c=[z(Math.round(t[0]/d)*d),z(Math.round(t[1]/d)*d)],u=i,p=i,h={};for(let m of s)Math.abs(m[0]-t[0])<u&&(u=Math.abs(m[0]-t[0]),c[0]=m[0],h.x=m[0]),Math.abs(m[1]-t[1])<p&&(p=Math.abs(m[1]-t[1]),c[1]=m[1],h.z=m[1]);return this._guides=h,c}onPointerDown(t){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let e=this.localPoint(t),n=t.target;this.pressStart=e,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,e))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"||e.kind==="aim"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="furnset"?n=["furniture",e.ids.find(i=>this.isFixedItem("furniture",i))??e.ids[0]]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){var P,S,R,I,E,k,w,A,M,T,C,O,D,H,U,G,Z,Y,it,q,lt,It,Zt;t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&fd.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){t.button===2&&(this.rightPress={at:n,target:t.target,moved:!1}),this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=t.target;if(this._wallPick){this.pickWall(i);return}if(this._bgLevel&&this.isAdmin&&((P=this.floor)!=null&&P.background)){let B=[...this._bgLevel,i];B.length<2?this._bgLevel=B:this.applyBgLevel(B[0],B[1]);return}if(this.bgHandles()&&this.floor.background&&o.closest("[data-bg-rotate]")){let B=this.floor.background,pt=this._images[B.image_id],Q=B.width*((pt==null?void 0:pt.aspect)??1),Et=[B.x+B.width/2,B.z+Q/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-Et[1],i[0]-Et[0]),rot:B.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&((S=this.floor)!=null&&S.background)){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let B=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:B.x,bz:B.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&((R=this.floor)!=null&&R.background)){let B=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:B.x,bz:B.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let B=this.snap(i,void 0,t.altKey);this.drag={kind:"freewall",start:B,end:B};return}if(this._tool==="pool"&&this.poolDown(t,o,i,n))return;if(this._tool==="roof"||this._tool==="energy"){let B=(I=o.closest("[data-roof-corner]"))==null?void 0:I.getAttribute("data-roof-corner"),pt=(E=o.closest("[data-roof-vertex]"))==null?void 0:E.getAttribute("data-roof-vertex"),Q=(k=o.closest("[data-roof]"))==null?void 0:k.getAttribute("data-roof"),Et=this._tool==="energy"?(w=o.closest("[data-energy-device]"))==null?void 0:w.getAttribute("data-energy-device"):null;if(Et){this._solarId=null,this.selectItem("furniture",Et),this.drag=this.isAdmin?{kind:"furniture",id:Et,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&o.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let V=(A=o.closest("[data-cable-pt]"))==null?void 0:A.getAttribute("data-cable-pt"),N=J=>{var et,rt;return!!((rt=(et=this._doc.settings.roof.cables)==null?void 0:et.find(ht=>ht.id===J))!=null&&rt.locked)};if(V&&this.isAdmin&&!N(V.slice(0,V.lastIndexOf(":")))){let J=V.lastIndexOf(":"),et=V.slice(0,J),rt=Number(V.slice(J+1));if(this.doubleTap(t,`cable:${V}`)){this.change(ht=>{var Ot;let ct=(Ot=ht.settings.roof.cables)==null?void 0:Ot.find(Ct=>Ct.id===et);ct&&ct.points.length>1&&ct.points.splice(rt,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:et,index:rt,base:this._doc,moved:!1};return}let nt=(M=o.closest("[data-cable-line]"))==null?void 0:M.getAttribute("data-cable-line");if(nt&&this.isAdmin&&!N(nt)){let J=Number(((T=o.closest("[data-cable-line]"))==null?void 0:T.getAttribute("data-cable-seg"))??0),et=this._doc;this.change(rt=>{var ct;let ht=(ct=rt.settings.roof.cables)==null?void 0:ct.find(Ot=>Ot.id===nt);ht&&ht.points.splice(J,0,[z(i[0]),z(i[1])])}),this.drag={kind:"cablept",id:nt,index:J,base:et,moved:!0};return}let K=(C=o.closest("[data-cable]"))==null?void 0:C.getAttribute("data-cable");if(K){if(this._cableId=K,this.isAdmin&&this._floorId&&!((O=this._doc.settings.roof.cables)!=null&&O.some(J=>J.id===K))){let J=this._doc;this.layCable(K);let et=(D=this._doc.settings.roof.cables)==null?void 0:D.find(ht=>ht.id===K),rt=this.cableSegments().filter(ht=>ht.key===K);if(et&&rt.length){let ht=[[rt[0].a[0],rt[0].a[2]],...et.points,[rt[rt.length-1].b[0],rt[rt.length-1].b[2]]],ct=0,Ot=1/0;for(let Ct=0;Ct+1<ht.length;Ct++){let kt=Ep(i,ht[Ct],ht[Ct+1]);kt<Ot&&(Ot=kt,ct=Ct)}this.change(Ct=>{var Vt;let kt=(Vt=Ct.settings.roof.cables)==null?void 0:Vt.find(we=>we.id===K);kt&&kt.points.splice(ct,0,[z(i[0]),z(i[1])])}),this.drag={kind:"cablept",id:K,index:ct,base:J,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let Ft=this._tool==="energy"?(H=o.closest("[data-solar]"))==null?void 0:H.getAttribute("data-solar"):null,F=this._tool==="energy"?(U=o.closest("[data-solar-turn]"))==null?void 0:U.getAttribute("data-solar-turn"):null;if(F&&this.isAdmin){this.drag={kind:"solarturn",id:F,base:this._doc,moved:!1};return}if(Ft){let V=(G=o.closest("[data-cell]"))==null?void 0:G.getAttribute("data-cell");if(this._solarPick&&Ft===this._solarId&&V&&this.isAdmin){this.toggleSolarCell(V),this.drag={kind:"pan",last:n};return}Ft!==this._solarId&&(this._solarPick=!1),this._solarId=Ft,this._roofId=null;let N=(Z=this._doc.settings.roof.solar)==null?void 0:Z.find(et=>et.id===Ft),nt=N?Dt(this._doc,N)??void 0:void 0,K=nt?this.faceHit(nt,i):null,J=N&&K?{du:K.u-N.u,ds:Number.isNaN(K.s)?0:K.s-N.v}:null;this.drag=this.isAdmin&&!(N!=null&&N.locked)?{kind:"solarmove",id:Ft,start:i,startScreen:n,base:this._doc,moved:!1,grab:J}:{kind:"pan",last:n};return}let L=this._tool==="roof"?(Y=o.closest("[data-roofwin]"))==null?void 0:Y.getAttribute("data-roofwin"):null;if(L){this._roofWinId=L,this._roofId=null;let V=(it=this._doc.settings.roof.windows)==null?void 0:it.find(J=>J.id===L),N=V?yt(this._doc).find(J=>J.key===V.face):void 0,nt=N?Ni(N,i):null,K=V&&nt?{du:nt.u-V.u,ds:nt.s-V.v}:null;this.drag=this.isAdmin&&!(V!=null&&V.locked)?{kind:"solarmove",id:L,start:i,startScreen:n,base:this._doc,moved:!1,grab:K,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let W=this._tool==="energy"?(q=o.closest(".fp3d-energy-item"))==null?void 0:q.getAttribute("data-furniture"):null;if(W){this._solarId=null,this.selectItem("furniture",W),this.drag=this.isAdmin?{kind:"furniture",id:W,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(pt&&this.isAdmin){let[V,N]=pt.split(":");this.drag={kind:"roofvertex",id:V,index:Number(N),base:this._doc,moved:!1}}else if(B&&this.isAdmin){let[V,N,nt]=B.split(":");this.drag={kind:"roofcorner",id:V,corner:[N==="1"?1:0,nt==="1"?1:0],base:this._doc,moved:!1}}else if(Q){let V=this.roofFixed((lt=this._doc.settings.roof.sections)==null?void 0:lt.find(N=>N.id===Q));V&&this._roofId===Q&&(this._fixedHint=!0),this._roofId=Q,this.drag=this.isAdmin&&!V?{kind:"roofmove",id:Q,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let V=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:V,end:V,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this._outdoorFree||this._tool==="hole"){let B=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:B,end:B,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this.isAdmin&&(this._tool==="select"||this._tool==="furniture")&&(t.shiftKey||this._multiMode)){let B=o.closest("[data-furniture]");B?(this.toggleMulti(B.getAttribute("data-furniture")),this.drag=null):this.drag={kind:"marquee",start:i,end:i,add:!0};return}let a=o.closest("[data-device]");if(a&&this.isAdmin){this.drag={kind:"device",entityId:a.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let l=o.closest("[data-opening]");if(l){let B=l.getAttribute("data-opening");this.selectItem("opening",B),this.drag=this.isAdmin?{kind:"opening",id:B,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let d=o.closest("[data-resize]");if(d&&this.isAdmin){let[B,pt,Q]=d.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:B,corner:[pt==="1"?1:-1,Q==="1"?1:-1],base:this._doc,moved:!1};return}let c=o.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let u=o.closest("[data-aim]");if(u&&this.isAdmin){this.drag={kind:"aim",entityId:u.getAttribute("data-aim"),base:this._doc,moved:!1};return}let p=o.closest("[data-furniture]");if(p&&!o.closest("[data-vertex], [data-mid]")){let B=p.getAttribute("data-furniture"),pt=Date.now(),Q=((It=this.lastFurnTap)==null?void 0:It.id)===B&&pt-this.lastFurnTap.t<400;this.lastFurnTap={id:B,t:pt};let Et=this.floor.furniture.find(F=>F.id===B);Q&&(Et!=null&&Et.group)?(this.selectItem("furniture",B),this._single=!0):(!this.selection().includes(B)||this._single)&&this.selectItem("furniture",B);let Ft=this.selection();this.drag=this.isAdmin?Ft.length>1?{kind:"furnset",ids:Ft,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"furniture",id:B,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=o.closest("[data-vertex]"),f=o.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this._vertex=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let B=Number(f.getAttribute("data-mid")),pt=this.room.points,Q=pt[B],Et=pt[(B+1)%pt.length],Ft=[z((Q[0]+Et[0])/2),z((Q[1]+Et[1])/2)],F=this._doc,L=this.room.id;this.change((W,V)=>{let N=V.rooms.find(K=>K.id===L);N.points.splice(B+1,0,Ft),N.wall_heights&&N.wall_heights.splice(B+1,0,N.wall_heights[B]??null),N.wall_thickness&&N.wall_thickness.splice(B+1,0,N.wall_thickness[B]??null);let nt=Math.hypot(Ft[0]-Q[0],Ft[1]-Q[1]);if(N.wall_slopes){let K=N.wall_slopes[B]??null,J=Math.hypot(Et[0]-Q[0],Et[1]-Q[1])||1,et=K?Math.round((K[0]+(K[1]-K[0])*nt/J)*1e3)/1e3:0;K&&(N.wall_slopes[B]=[K[0],et]),N.wall_slopes.splice(B+1,0,K?[et,K[1]]:null)}for(let K of V.openings)K.room_id!==L||K.wall||(K.edge>B?K.edge+=1:K.edge===B&&K.offset>nt&&(K.edge=B+1,K.offset=z(K.offset-nt)))},F,!1),this._vertex=B+1,this.drag={kind:"vertex",roomId:L,index:B+1,base:F,moved:!0};return}let m=o.closest("[data-wall-end]");if(m&&this.isAdmin){let[B,pt]=m.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:B,end:pt,start:i,startScreen:n,base:this._doc,moved:!1};return}let v=o.closest("[data-free-wall]");if(v){let B=v.getAttribute("data-free-wall");this.selectItem("wall",B),this.drag=this.isAdmin?{kind:"wallmove",id:B,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let g=o.closest("[data-out-box]");if(g&&this.isAdmin){let[B,pt]=g.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:B,corner:Number(pt),base:this._doc,moved:!1};return}let b=o.closest("[data-out-vertex]");if(b&&this.isAdmin){let[B,pt]=b.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:B,index:Number(pt),base:this._doc,moved:!1};return}let $=o.closest("[data-outdoor]");if($&&!o.closest("[data-room]")&&!this.roomAt(i)){let B=this.outdoorAt(i)??$.getAttribute("data-outdoor");this.selectItem("outdoor",B),this.drag=this.isAdmin?{kind:"outdoor",id:B,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let x=((Zt=o.closest("[data-room]"))==null?void 0:Zt.getAttribute("data-room"))??this.roomAt(i);if(x){x!==this._roomId&&(this._vertex=null),this.selectItem("room",x),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:x,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){var o,s,a,l,d,c,u,p,h,f,m,v,g,b,$,x,P,S,R,I;if(this.rightPress&&!this.rightPress.moved){let E=this.localPoint(t);Math.hypot(E[0]-this.rightPress.at[0],E[1]-this.rightPress.at[1])>5&&(this.rightPress.moved=!0)}if(this.pressStart){let E=this.localPoint(t);Math.hypot(E[0]-this.pressStart[0],E[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&((o=this.drag)==null?void 0:o.kind)==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let E=this.pinchState();E&&(this.zoomAt(E.dist/Math.max(1,this.pinch.dist),...E.mid),this._view={...this._view,ox:this._view.ox+E.mid[0]-this.pinch.mid[0],oy:this._view.oy+E.mid[1]-this.pinch.mid[1]},this.pinch=E);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let E=this.snap(n,void 0,t.altKey);t.shiftKey&&(E=Math.abs(E[0]-i.start[0])>Math.abs(E[1]-i.start[1])?[E[0],i.start[1]]:[i.start[0],E[1]]),i.end=E,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let E=(((s=i.base.floors.find(w=>w.id===this._floorId))==null?void 0:s.walls)??[]).find(w=>w.id===i.id);if(!E)return;let k;if(i.end){let w=this.snap(n,void 0,t.altKey);k=i.end==="a"?{a:w,b:E.b}:{a:E.a,b:w}}else{let w=t.altKey?.01:this._doc.settings.grid,A=Math.round((n[0]-i.start[0])/w)*w,M=Math.round((n[1]-i.start[1])/w)*w;k={a:[z(E.a[0]+A),z(E.a[1]+M)],b:[z(E.b[0]+A),z(E.b[1]+M)]}}this.change((w,A)=>Object.assign((A.walls??[]).find(M=>M.id===i.id),k),i.base,!1);break}case"vertex":{let E=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((k,w)=>{w.rooms.find(A=>A.id===i.roomId).points[i.index]=E},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let E=(a=i.base.floors.find(M=>M.id===this._floorId))==null?void 0:a.rooms.find(M=>M.id===i.roomId);if(!E)return;let k=this.roomDelta(E,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),w=i.base.floors.find(M=>M.id===this._floorId),A=new Set(w.placements.filter(M=>tt([M.x,M.z],E.points)).map(M=>M.entity_id));this.change((M,T)=>{let C=T.rooms.find(O=>O.id===i.roomId);C.points=E.points.map(([O,D])=>[z(O+k[0]),z(D+k[1])]),T.placements=w.placements.map(O=>A.has(O.entity_id)?{...O,x:z(O.x+k[0]),z:z(O.z+k[1])}:O)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let E=t.altKey?.01:this._doc.settings.grid,k=z(Math.round((n[0]-i.start[0])/E)*E),w=z(Math.round((n[1]-i.start[1])/E)*E),A=(l=i.base.settings.roof.sections)==null?void 0:l.find(M=>M.id===i.id);if(!A)return;this.change(M=>{var C;let T=(C=M.settings.roof.sections)==null?void 0:C.find(O=>O.id===i.id);T&&(Object.assign(T,{x0:z(A.x0+k),x1:z(A.x1+k),z0:z(A.z0+w),z1:z(A.z1+w)}),A.points&&(T.points=A.points.map(([O,D])=>[z(O+k),z(D+w)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let E=(d=i.base.settings.roof.solar)==null?void 0:d.find(O=>O.id===i.id),k=E?Dt(i.base,E):null;if(!E||!k)return;let[w,A]=Yn(k,E),M=Math.atan2(n[0]-w,-(n[1]-A))*180/Math.PI,T=t.altKey?1:15;M=Math.round(M/T)*T;let C=Gn(i.base,E,M);this.change(O=>{var H;let D=(H=O.settings.roof.solar)==null?void 0:H.find(U=>U.id===i.id);D&&Object.assign(D,C)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let E=i.win?(c=i.base.settings.roof.windows)==null?void 0:c.find(G=>G.id===i.id):void 0,k=i.win?E?kn(E):void 0:(u=i.base.settings.roof.solar)==null?void 0:u.find(G=>G.id===i.id),w=i.win?yt(i.base):[...yt(i.base),...this._floorId?pe(i.base,this._floorId):[]],A=k?Dt(i.base,k,w):null;if(!k||!A)return;let M=t.altKey?.01:.05,T=G=>z(Math.round(G/M)*M),C=A.unbounded?null:mc(w,n),O=A,D,H;if(C&&i.grab)O=C.face,D=T(C.u-i.grab.du),H=Number.isNaN(C.s)?C.face.key===k.face?k.v:Math.max(0,C.face.ls-1.5):T(C.s-i.grab.ds);else{let G=n[0]-i.start[0],Z=n[1]-i.start[1],Y=[A.es[0],A.es[2]],it=Y[0]*Y[0]+Y[1]*Y[1]||1;D=T(k.u+G*A.eu[0]+Z*A.eu[2]),H=T(k.v+(G*Y[0]+Z*Y[1])/it)}let U=xn(O,{...k,face:O.key,u:D,v:H,tilt:O.flat?k.tilt??15:k.tilt});this.change(G=>{var Y,it;if(i.win){let q=(Y=G.settings.roof.windows)==null?void 0:Y.find(lt=>lt.id===i.id);q&&Object.assign(q,{face:O.key,...U});return}let Z=(it=G.settings.roof.solar)==null?void 0:it.find(q=>q.id===i.id);Z&&Object.assign(Z,{face:O.key,...U},O.flat&&Z.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outbox":{i.moved=!0;let E=this.snap(n,void 0,t.altKey),k=(p=i.base.floors.find(Z=>Z.id===this._floorId))==null?void 0:p.outdoor.find(Z=>Z.id===i.id);if(!(k!=null&&k.pool_shape))return;let w=zt(k.points),M=[[w.x0,w.z0],[w.x1,w.z0],[w.x1,w.z1],[w.x0,w.z1]][(i.corner+2)%4],T=E[0]-M[0],C=E[1]-M[1];if(k.pool_shape==="round"){let Z=Math.max(Math.abs(T),Math.abs(C),.5);T=Math.sign(T||1)*Z,C=Math.sign(C||1)*Z}else T=Math.sign(T||1)*Math.max(Math.abs(T),.5),C=Math.sign(C||1)*Math.max(Math.abs(C),.5);let O=Math.min(M[0],M[0]+T),D=Math.max(M[0],M[0]+T),H=Math.min(M[1],M[1]+C),U=Math.max(M[1],M[1]+C),G=k.pool_shape;this.change((Z,Y)=>{let it=Y.outdoor.find(q=>q.id===i.id);it&&(it.points=bi(G,z(O),z(H),z(D),z(U)))},i.base,!1);break}case"pipept":{i.moved=!0;let E=this.snap(n,void 0,t.altKey);this.change((k,w)=>{var M,T,C;let A=(C=(T=(M=w.outdoor.find(O=>O.id===i.pool))==null?void 0:M.pool)==null?void 0:T.pipes)==null?void 0:C.find(O=>O.id===i.pipe);A&&(A.points[i.index]=[z(E[0]),z(E[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let E=this.snap(n,void 0,t.altKey);this.change((k,w)=>{var O,D;let A=w.outdoor.find(H=>H.id===i.pool),M=(D=(O=A==null?void 0:A.pool)==null?void 0:O.ports)==null?void 0:D.find(H=>H.id===i.id);if(!A||!M)return;let[T,C]=M.kind==="skimmer"||M.kind==="inlet"?Oi(A.points,E):E;M.x=z(T),M.z=z(C)},i.base,!1);break}case"pooljoint":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let E=(m=(f=(h=i.base.floors.flatMap(w=>w.outdoor).find(w=>w.id===i.pool))==null?void 0:h.pool)==null?void 0:f.joints)==null?void 0:m.find(w=>w.id===i.id);if(!E)break;let k=this.snap([E.x+n[0]-i.start[0],E.z+n[1]-i.start[1]],void 0,t.altKey);if(E.kind==="wall"){let w=[-(E.nz??0),E.nx??0],A=(k[0]-E.x)*w[0]+(k[1]-E.z)*w[1];k=[E.x+w[0]*A,E.z+w[1]*A]}this.change(w=>{var M,T,C;let A=(C=(T=(M=w.floors.flatMap(O=>O.outdoor).find(O=>O.id===i.pool))==null?void 0:M.pool)==null?void 0:T.joints)==null?void 0:C.find(O=>O.id===i.id);A&&([A.x,A.z]=[z(k[0]),z(k[1])])},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let E=i.base.floors.flatMap(w=>w.furniture).find(w=>w.id===i.id);if(!E)break;let k=this.snap([E.x+n[0]-i.start[0],E.z+n[1]-i.start[1]],void 0,t.altKey);this.change(w=>{let A=w.floors.flatMap(M=>M.furniture).find(M=>M.id===i.id);A&&([A.x,A.z]=[z(k[0]),z(k[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let E=this.snap(n,void 0,t.altKey),k=(v=i.base.floors.find(A=>A.id===this._floorId))==null?void 0:v.outdoor.find(A=>A.id===i.id);if(!k)return;let w=Ei(k.points);this.change((A,M)=>{let T=M.outdoor.find(H=>H.id===i.id);if(!T)return;let C=k.points.map(H=>[...H]),O=i.index,D=k.points[O];C[O]=[z(E[0]),z(E[1])],w&&k.points.forEach((H,U)=>{U!==O&&(Math.abs(H[0]-D[0])<1e-6&&(C[U][0]=z(E[0])),Math.abs(H[1]-D[1])<1e-6&&(C[U][1]=z(E[1])))}),T.points=C},i.base,!1);break}case"cablept":{i.moved=!0;let E=this.snap(n,void 0,t.altKey);this.change(k=>{var A;let w=(A=k.settings.roof.cables)==null?void 0:A.find(M=>M.id===i.id);w&&w.points[i.index]&&(w.points[i.index]=[z(E[0]),z(E[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let E=this.snap(n,void 0,t.altKey);this.change(k=>k.settings.roof.hologram={...k.settings.roof.hologram??mi,place:"free",x:z(E[0]),z:z(E[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let E=n[0]-i.start[0],k=n[1]-i.start[1];this.change((w,A)=>{A.background&&(A.background.x=z(i.bx+E),A.background.z=z(i.bz+k))},i.base,!1);break}case"bgrotate":{i.moved=!0;let E=(g=this.floor)==null?void 0:g.background,k=E?this._images[E.image_id]:void 0;if(!E||!k)break;let w=E.width*k.aspect,A=[E.x+E.width/2,E.z+w/2],M=Math.atan2(n[1]-A[1],n[0]-A[0]),T=i.rot+(M-i.start)*180/Math.PI;T=t.shiftKey?Math.round(T/15)*15:Math.round(T*10)/10,T=((T+180)%360+360)%360-180,this.change((C,O)=>{O.background&&(O.background.rotation=T)},i.base,!1);break}case"bgscale":{i.moved=!0;let E=(b=this.floor)==null?void 0:b.background,k=E?this._images[E.image_id]:void 0;if(!E||!k)break;let[w]=this.bgLocal(E,n,k.aspect),A=Math.max(.5,z(w));this.change((M,T)=>{T.background&&(T.background.width=A)},i.base,!1);break}case"roofvertex":{i.moved=!0;let E=this.snap(n,void 0,t.altKey);this.change(k=>{var A;let w=(A=k.settings.roof.sections)==null?void 0:A.find(M=>M.id===i.id);!(w!=null&&w.points)||i.index>=w.points.length||(w.points[i.index]=[z(E[0]),z(E[1])],Object.assign(w,ls(w.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let E=this.snap(n,void 0,t.altKey);this.change(k=>{var A;let w=(A=k.settings.roof.sections)==null?void 0:A.find(M=>M.id===i.id);w&&(i.corner[0]?w.x1=z(E[0]):w.x0=z(E[0]),i.corner[1]?w.z1=z(E[1]):w.z0=z(E[1]))},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let E=i.base.floors.find(M=>M.id===this._floorId),k=E==null?void 0:E.openings.find(M=>M.id===i.id),w=k&&E?ze(k,E.rooms,E.walls??[]):null;if(!k||!w)return;let A=this.offsetOnEdge(w.room,w.edge,n,k.width,t.altKey);this.change((M,T)=>Object.assign(T.openings.find(C=>C.id===i.id),{offset:A}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let E=($=i.base.floors.find(C=>C.id===this._floorId))==null?void 0:$.furniture.find(C=>C.id===i.id);if(!E)return;let k=t.altKey?.01:this._doc.settings.grid,w=z(Math.round((E.x+n[0]-i.start[0])/k)*k),A=z(Math.round((E.z+n[1]-i.start[1])/k)*k),M=E.rotation,T=t.altKey?null:this.snapToWall({...E,x:w,z:A});T&&({x:w,z:A,rotation:M}=T),this.change((C,O)=>Object.assign(O.furniture.find(D=>D.id===i.id),{x:w,z:A,rotation:M}),i.base,!1);break}case"furnset":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let E=t.altKey?.01:this._doc.settings.grid,k=z(Math.round((n[0]-i.start[0])/E)*E),w=z(Math.round((n[1]-i.start[1])/E)*E),A=new Set(i.ids);this.change((M,T)=>{for(let C of T.furniture)A.has(C.id)&&Object.assign(C,{x:z(C.x+k),z:z(C.z+w)})},i.base,!1);break}case"marquee":i.end=n,this.requestUpdate();break;case"outdoor":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let E=(x=i.base.floors.find(M=>M.id===this._floorId))==null?void 0:x.outdoor.find(M=>M.id===i.id);if(!E)return;let k=t.altKey?.01:this._doc.settings.grid,w=Math.round((n[0]-i.start[0])/k)*k,A=Math.round((n[1]-i.start[1])/k)*k;this.change((M,T)=>{var O,D;let C=T.outdoor.find(H=>H.id===i.id);C.points=E.points.map(([H,U])=>[z(H+w),z(U+A)]),(O=C.pool)!=null&&O.ports&&((D=E.pool)!=null&&D.ports)&&(C.pool.ports=E.pool.ports.map(H=>({...H,x:z(H.x+w),z:z(H.z+A)})))},i.base,!1);break}case"resize":{i.moved=!0;let E=(P=i.base.floors.find(w=>w.id===this._floorId))==null?void 0:P.furniture.find(w=>w.id===i.id);if(!E)return;let k=ba(E,i.corner,n,t.altKey?.01:this._doc.settings.grid);this.change((w,A)=>Object.assign(A.furniture.find(M=>M.id===i.id),k),i.base,!1);break}case"rotate":{i.moved=!0;let E=(S=i.base.floors.find(A=>A.id===this._floorId))==null?void 0:S.furniture.find(A=>A.id===i.id);if(!E)return;let k=Math.atan2(-(n[0]-E.x),n[1]-E.z)*180/Math.PI,w=t.altKey?1:15;k=(Math.round(k/w)*w%360+360)%360,this.change((A,M)=>Object.assign(M.furniture.find(T=>T.id===i.id),{rotation:k}),i.base,!1);break}case"aim":{i.moved=!0;let E=(R=i.base.floors.find(M=>M.id===this._floorId))==null?void 0:R.placements.find(M=>M.entity_id===i.entityId);if(!E)return;let k=Math.atan2(-(n[0]-E.x),n[1]-E.z)*180/Math.PI,w=t.altKey?1:5;k=(Math.round(k/w)*w%360+360)%360;let A=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-E.x,n[1]-E.z)*10)/10));this.change((M,T)=>Object.assign(T.placements.find(C=>C.entity_id===i.entityId),{rotation:k,reach:A}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let E=(I=i.base.floors.find(M=>M.id===this._floorId))==null?void 0:I.placements.find(M=>M.entity_id===i.entityId);if(!E)return;let k=t.altKey?.01:this._doc.settings.grid,w=z(Math.round((E.x+n[0]-i.start[0])/k)*k),A=z(Math.round((E.z+n[1]-i.start[1])/k)*k);this.change((M,T)=>Object.assign(T.placements.find(C=>C.entity_id===i.entityId),{x:w,z:A}),i.base,!1);break}}}onPointerUp(t){var o,s;let e=this.rightPress;if(this.rightPress=null,e&&t.button===2&&(this.rightUp=performance.now(),!e.moved&&t.type!=="pointercancel"&&(this._tool==="select"||this._tool==="furniture")&&this.openContext(e.target,e.at)),clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||t.type==="pointercancel"){n&&fd.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let i=this.localPoint(t);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[a,l]=n.start,[d,c]=n.end;if(Math.abs(d-a)>=.2&&Math.abs(c-l)>=.2){let u=[Math.min(a,d),Math.min(l,c)],p=[Math.max(a,d),Math.max(l,c)],h=[u,[p[0],u[1]],p,[u[0],p[1]]];n.outdoor?this.addOutdoor(h):n.hole?this.addHole(u,p):n.roof?this.addRoofSection(u,p):this.addRoom(h)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...i),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...i),void 0,t.altKey),i);break;case"marquee":{let[a,l]=[Math.min(n.start[0],n.end[0]),Math.max(n.start[0],n.end[0])],[d,c]=[Math.min(n.start[1],n.end[1]),Math.max(n.start[1],n.end[1])],u=(((o=this.floor)==null?void 0:o.furniture)??[]).filter(p=>p.x>=a&&p.x<=l&&p.z>=d&&p.z<=c).map(p=>p.id);u.length&&this.setMulti([...new Set([...this.selection(),...this.withGroups(u)])]);break}case"opening":case"furniture":case"furnset":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":n.moved?this.pushHistory(n.base):(n.kind==="poolport"||n.kind==="pooljoint")&&this.openCard(n.pool,`${n.kind==="poolport"?"port":"joint"}:${n.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"pooldev":{n.moved?this.pushHistory(n.base):((s=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.id===n.id))==null?void 0:s.type)==="pool_valve"?this.togglePoolValve(n.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${n.id}`);break}case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>md&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){var l;if(n)return e;let i=this._doc.settings.grid,o=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],a=to/this._view.scale;this._guides={};for(let d of((l=this.floor)==null?void 0:l.rooms)??[])if(d.id!==t.id)for(let c of d.points)for(let u of t.points){let p=Math.hypot(u[0]+e[0]-c[0],u[1]+e[1]-c[1]);p<a&&(a=p,o=[c[0]-u[0],c[1]-u[1]],this._guides={point:c})}return o}roomAt(t){var i,o;return((o=(((i=this.floor)==null?void 0:i.rooms)??[]).filter(s=>tt(t,s.points)).sort((s,a)=>Rt(s.points)-Rt(a.points))[0])==null?void 0:o.id)??null}outdoorAt(t){var i,o;return((o=(((i=this.floor)==null?void 0:i.outdoor)??[]).filter(s=>s.points.length>=3&&tt(t,s.points)).sort((s,a)=>Rt(s.points)-Rt(a.points))[0])==null?void 0:o.id)??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[o,s]=this.toScreen(n[0]);if(Math.hypot(o-e[0],s-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Math.abs(Rt(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=pn(e,this._measureLen,t),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;e>.1&&n>.1&&(this.addRoom([t,pn(t,e,"right"),pn(pn(t,e,"right"),n,"down"),pn(t,n,"down")]),this._draft=[])}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],i=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>Bt(this.hass,a,2);return _`<section>
      <h3>${this.t("measure")}</h3>
      ${e?_`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(e[0]),z:this.m(e[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${Vn(this.t("measure_length"),this.unit)}
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
                ${o.map(([a,l])=>_`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?_`<ol class="fp3d-measure-list">
                  ${t.slice(1).map((a,l)=>_`<li>${this.m(Math.hypot(a[0]-t[l][0],a[1]-t[l][1]))}</li>`)}
                </ol>`:y}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?_`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:y}`:_`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(t,e){if(!this.floor)return;let n={id:X("wall"),a:[z(t[0]),z(t[1])],b:[z(e[0]),z(e[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){var t;return this._wallId?(((t=this.floor)==null?void 0:t.walls)??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(t){let e=this._wallId;e&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===e),t))}deleteFreeWall(){let t=this._wallId;!t||!this.isAdmin||!this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return j`<g>${(t.walls??[]).map(e=>{let[n,i]=this.toScreen(e.a),[o,s]=this.toScreen(e.b),a=e.id===this._wallId;return j`<g data-free-wall=${e.id} class=${`fp3d-free-wall${a?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${o} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${s} />
      </g>
      ${a&&this.isAdmin&&!vo(e,!0,this._doc.settings)?j`<g class="fp3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`:y}`})}</g>`}renderFreeWallForm(t){var a;let e=this.isAdmin,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),i=l=>{let c=Math.max(.1,l)/(n||1);this.updateFreeWall({b:[z(t.a[0]+(t.b[0]-t.a[0])*c),z(t.a[1]+(t.b[1]-t.a[1])*c)]})},o=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],s=(l,d)=>{let c=d-o[l],u=p=>l===0?[z(p[0]+c),p[1]]:[p[0],z(p[1]+c)];this.updateFreeWall({a:u(t.a),b:u(t.b)})};return _`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),o[0],l=>s(0,l))} ${this.len(this.t("z"),o[1],l=>s(1,l))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,l=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,l))}),.01,.02)}
        ${this.len(this.t("wall_height"),t.height??((a=this.floor)==null?void 0:a.height)??2.5,l=>{var d;return this.updateFreeWall({height:l>=(((d=this.floor)==null?void 0:d.height)??2.5)-.005?null:Math.max(.05,l)})},.05,.05)}
      </div>
      ${e?_`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:y}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:X("hole"),type:"stairwell",x:z((t[0]+e[0])/2),z:z((t[1]+e[1])/2),w:z(e[0]-t[0]),d:z(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}addOutdoor(t){if(!this.floor)return;let e=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:X("outdoor"),type:e,points:t.map(([o,s])=>[z(o),z(s)])},i=e==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(i==="round"||i==="oval"){let o=zt(n.points);n.points=bi(i,o.x0,o.z0,o.x1,o.z1),n.pool_shape=i}e==="pool"&&this.pipeRules&&(n.pool={}),this.change((o,s)=>s.outdoor.push(n)),this.selectItem("outdoor",n.id)}get outdoorArea(){var t;return this._outdoorId?(t=this.floor)==null?void 0:t.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,i)=>Object.assign(i.outdoor.find(o=>o.id===e),t))}deleteOutdoor(){var i,o,s;let t=this._outdoorId;if(!t||!this.isAdmin||!this.confirmFixedDelete("outdoor",t))return;let e=(i=this.floor)==null?void 0:i.outdoor.find(a=>a.id===t),n=((s=(o=e==null?void 0:e.pool)==null?void 0:o.pipes)==null?void 0:s.length)??0;(e==null?void 0:e.type)==="pool"&&n&&!confirm(this.t("pool_delete_confirm",{n}))||(this.change((a,l)=>l.outdoor=l.outdoor.filter(d=>d.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isAdmin)return;let e={...t,id:X("outdoor"),points:t.points.map(([n,i])=>[z(n+.5),z(i+.5)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t){if(!this.floor)return;let e=X("room"),n=this.floor.rooms.length+1;this.change((i,o)=>o.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([s,a])=>[z(s),z(a)]),floor_material:"wood"})),this._roomId=e,this._vertex=null}onKey=t=>{if(this.shiftHeld=t.shiftKey,t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;if(!(this._wallView&&!(n&&["z","y"].includes(t.key.toLowerCase())))){if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this._furnitureId?this.duplicateFurniture():this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&this._furnitureId&&this.selection().length>1)this.lockSelection(!this.selection().every(i=>this.isFixedItem("furniture",i)));else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.prototype.hasOwnProperty.call(_d,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[o,s]=_d[t.key];this.nudge(o*i,s*i)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Backspace"&&this.drawingPoints)this._draft=this._draft.slice(0,-1);else if(t.key==="Enter"&&this.drawingPoints)this.closeDraft();else if(t.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}}};nudge(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix,o=this._furnitureId?this.selection():[];if(i&&this.isFixedItem(i.kind,i.id)||o.some(a=>this.isFixedItem("furniture",a)))return this._fixedHint=!0,!0;let s=a=>[z(a[0]+t),z(a[1]+e)];if(o.length>1){let a=new Set(o);return this.change((l,d)=>{for(let c of d.furniture)a.has(c.id)&&([c.x,c.z]=s([c.x,c.z]))}),!0}if(this._deviceId){let a=this._deviceId;if(!n.placements.some(l=>l.entity_id===a))return!1;this.change((l,d)=>{let c=d.placements.find(u=>u.entity_id===a);[c.x,c.z]=s([c.x,c.z])})}else if(this._furnitureId){let a=this._furnitureId;this.change((l,d)=>{let c=d.furniture.find(u=>u.id===a);c&&([c.x,c.z]=s([c.x,c.z]))})}else if(this._openingId){let a=this.opening,l=a?ze(a,n.rooms,n.walls??[]):null;if(!a||!l)return!1;let d=l.room.points[l.edge],c=l.room.points[(l.edge+1)%l.room.points.length],u=Math.hypot(c[0]-d[0],c[1]-d[1])||1,p=(t*(c[0]-d[0])+e*(c[1]-d[1]))/u;if(Math.abs(p)<1e-9)return!0;this.updateOpening({offset:this.clampOffset(l.room,l.edge,a.width,a.offset+p)})}else if(this._wallId){let a=this._wallId;this.change((l,d)=>{let c=(d.walls??[]).find(u=>u.id===a);c&&([c.a,c.b]=[s(c.a),s(c.b)])})}else if(this._outdoorId){let a=this._outdoorId;this.change((l,d)=>{let c=d.outdoor.find(u=>u.id===a);c&&(c.points=c.points.map(s))})}else if(this._roomId){let a=this._roomId,l=this._vertex,d=n.rooms.find(u=>u.id===a);if(!d)return!1;let c=new Set(n.placements.filter(u=>tt([u.x,u.z],d.points)).map(u=>u.entity_id));this.change((u,p)=>{let h=p.rooms.find(f=>f.id===a);if(l!==null&&l<h.points.length){h.points[l]=s(h.points[l]);return}h.points=h.points.map(s);for(let f of p.placements)c.has(f.entity_id)&&([f.x,f.z]=s([f.x,f.z]))})}else return!1;return!0}get freeHaFloors(){var e;let t=new Set(this._doc.floors.map(n=>n.ha_floor));return Object.values(((e=this.hass)==null?void 0:e.floors)??{}).filter(n=>!t.has(n.floor_id)).sort((n,i)=>(n.level??99)-(i.level??99)||n.name.localeCompare(i.name))}unplacedAreas(t){var n;if(!t.ha_floor)return[];let e=new Set(this._doc.floors.flatMap(i=>[...i.rooms.map(o=>o.area_id),...(i.outdoor??[]).map(o=>o.area_id??null)]));return Object.values(((n=this.hass)==null?void 0:n.areas)??{}).filter(i=>i.floor_id===t.ha_floor&&!e.has(i.area_id)).sort((i,o)=>i.name.localeCompare(o.name))}addFloor(t=null){let e=this._doc.floors,n=X("floor"),i=(t==null?void 0:t.name)??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),o={...ma(n,i,ga(e,t==null?void 0:t.level)),ha_floor:(t==null?void 0:t.floor_id)??null},s=structuredClone(this._doc),a=s.floors.findIndex(l=>l.elevation>o.elevation);s.floors.splice(a<0?s.floors.length:a,0,o),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=_a(t,e,()=>X("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(o=>o.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}deleteFloor(){var n;let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(i=>i.id!==t.id),this.setDoc(e),this._floorId=((n=e.floors[0])==null?void 0:n.id)??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||!this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let i=n.rooms.find(o=>o.id===t);n.rooms=n.rooms.filter(o=>o.id!==t),n.openings=n.openings.filter(o=>o.room_id!==t||o.wall),i&&(n.placements=n.placements.filter(o=>!tt([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=X("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([o,s])=>[z(o+.5),z(s+.5)])})),this._roomId=e}roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?y:_`<div class="fp3d-seg fp3d-dev-source">
      ${t.map(e=>_`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
    </div>`}get roofSection(){var t;return this._roofId?(t=this._doc.settings.roof.sections)==null?void 0:t.find(e=>e.id===this._roofId):void 0}useRoofSections(t=!1){if(!this.isAdmin)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=cc(n,()=>X("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isAdmin)return;let n=ac(this._doc,t[0],t[1],e[0],e[1]),i=Math.min(...this._doc.floors.map(d=>d.elevation)),o=n===null,s=z(n??i+2.4),a=o?6:this._doc.settings.roof.pitch||35,l={id:X("roof"),x0:z(t[0]),z0:z(t[1]),x1:z(e[0]),z1:z(e[1]),shape:o?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}};this.change(d=>{d.settings.roof.type="custom",d.settings.roof.sections=[...d.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let t=this.floor,e=this._roofId;if(!t||!e||!this.isAdmin)return;let n=Di(t.rooms,t.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([o,s])=>[z(o),z(s)]);this.updateRoofSection({shape:"flat",points:i,...ls(i)})}addDormer(t){let e=this.roofSection;if(!e||!this.isAdmin)return;let n=oc(e,t,X("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(t){let e=this._roofId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var o;let i=(o=n.settings.roof.sections)==null?void 0:o.find(s=>s.id===e);i&&Object.assign(i,t)}))}deleteRoofSection(){let t=this._roofId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:X("roof"),x0:z(t.x0+1),x1:z(t.x1+1),z0:z(t.z0+1),z1:z(t.z1+1)};this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return j`<g class="fp3d-roof-layer">${e.map((n,i)=>{let o=n.id===this._roofId,s=Yt(n),a=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=ic(e,n),d=l?Yt(sc(l,n)):s,c=(a??[d.at(d.u0,0),d.at(d.u1,0),d.at(d.u1,d.w),d.at(d.u0,d.w)]).map(g=>this.toScreen(g)),u=(g,b)=>{let[$,x]=this.toScreen(g),[P,S]=this.toScreen(b);return j`<line x1=${$} y1=${x} x2=${P} y2=${S} />`},p=n.shape==="flat"||n.shape==="parapet"?null:cs(n,{u0:0,u1:0,a:0,b:0}),h=p?j`${p.ridges.map(([g,b])=>u(s.at(g[0],g[1]),s.at(b[0],b[1])))}`:y,[f,m]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),v=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(Vi(n),1)}`;return j`<g data-roof=${n.id} class=${`fp3d-roof-sec${o?" fp3d-roof-sel":""}`}>
          <polygon points=${c.map(g=>g.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${h}</g>
          <text x=${f} y=${m-14}>${v}</text>
        </g>
        ${o&&this.isAdmin&&!this.roofFixed(n)&&a?a.map((g,b)=>{let[$,x]=this.toScreen(g);return j`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${b}`}><circle cx=${$} cy=${x} r="16" class="fp3d-hit" /><circle cx=${$} cy=${x} r="6" /></g>`}):y}
        ${o&&this.isAdmin&&!this.roofFixed(n)&&!a?[[0,0],[1,0],[1,1],[0,1]].map(([g,b])=>{let[$,x]=this.toScreen([g?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),b?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]);return j`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${g}:${b}`}><circle cx=${$} cy=${x} r="16" class="fp3d-hit" /><circle cx=${$} cy=${x} r="6" /></g>`}):y}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:Ni(t,e)}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return y;let e=yt(this._doc);return j`<g class="fp3d-solar-layer">${t.map(n=>{let i=Dt(this._doc,n,e);if(!i||i.wall&&i.wall.floorId!==this._floorId)return y;let o=n.id===this._solarId,s=y;if(o&&i.unbounded&&this.isAdmin&&!n.locked){let[a,l]=Yn(i,n),d=(n.rotation??0)*Math.PI/180,c=.9+Math.max(...ye(i,n,!0).flatMap(m=>m.corners.map(v=>Math.hypot(v[0]-a,v[2]-l))))*.5,[u,p]=this.toScreen([a,l]),[h,f]=this.toScreen([a+Math.sin(d)*c,l-Math.cos(d)*c]);s=j`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${u} y1=${p} x2=${h} y2=${f} />
          <circle cx=${h} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${h} cy=${f} r="8" />
          <path d="M${h-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return j`<g data-solar=${n.id} class=${`fp3d-solar${o?" fp3d-solar-sel":""}${o&&this._solarPick?" fp3d-solar-pick":""}`}>${ye(i,n,o).map(a=>{let l=i.wall?Math.max(.3,...a.corners.map(c=>(c[0]-i.o[0])*i.n[0]+(c[2]-i.o[2])*i.n[2])):0,d=i.wall?[a.corners[0],a.corners[1]].flatMap((c,u)=>{let p=[c[0],c[2]],h=[c[0]+i.n[0]*l,c[2]+i.n[2]*l];return u===0?[p,h]:[h,p]}):a.corners.map(c=>[c[0],c[2]]);return j`<polygon data-cell=${a.cell} class=${a.skipped?"fp3d-solar-off":""} points=${d.map(c=>this.toScreen(c).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return y;let e=new Map(yt(this._doc).map(n=>[n.key,n]));return j`<g class="fp3d-roofwin-layer">${t.map(n=>{let i=e.get(n.face),o=i?vc(i,n):null;return o?j`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${o.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:y})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let t=yt(this._doc).filter(i=>!i.flat),e=qi(t,this._doc.settings.north??0)??yt(this._doc)[0];if(!e)return;let n=ys(e,X("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isAdmin||this.change(n=>{var s;let i=(s=n.settings.roof.windows)==null?void 0:s.find(a=>a.id===e);if(!i)return;Object.assign(i,t);let o=yt(n).find(a=>a.key===i.face);o&&Object.assign(i,xn(o,kn(i)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map(yt(this._doc).map(n=>[n.key,n]));return _`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?_`<div class="fp3d-room-list">
            ${t.map((n,i)=>{let o=e.get(n.face);return _`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isAdmin,n=yt(this._doc),i=l=>this.updateRoofWindow(l),o=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>Ns(l)||Lt(l));return _`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${e?_`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:y}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let d=n.find(c=>c.key===l.target.value);d&&i({...ys(d,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt,window:t.window,name:t.name,float:t.float})}}>
              ${n.map(l=>_`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
            </select></label
          >
          ${this.len(this.t("width"),t.w??.78,l=>i({w:Math.max(.3,Math.min(4,z(l)))}),.01,.3)}
          ${this.len(this.t("height_m"),t.h??1.18,l=>i({h:Math.max(.3,Math.min(4,z(l)))}),.01,.3)}
          ${this.len(this.t("solar_u"),t.u,l=>i({u:z(l)}),.05)}
          ${this.len(this.t("solar_v"),t.v,l=>i({v:z(l)}),.05)}
          ${this.entitySelect(this.t("cover_entity"),t.cover??null,void 0,s,l=>i({cover:l==="none"?null:l}))}
          ${this.entitySelect(this.t("contact_entity"),t.contact??null,void 0,a,l=>i({contact:l==="none"?null:l}))}
          ${this.entitySelect(this.t("roof_window_tilt"),t.tilt??null,void 0,a,l=>i({tilt:l==="none"?null:l}))}
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
        ${e?_`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:y}
      </section>`}cableSegments(){var o;if(((o=this.cableCache)==null?void 0:o.doc)===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(s=>[s.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=Rc({building:t,consumers:[],summary:n,fieldPower:e}).filter(s=>s.key)}catch{i=[]}return this.cableCache={doc:t,segs:i},i}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,i)=>e(n)-e(i)||n.localeCompare(i))}cableLabel(t){let e=a=>{let l=this._doc.floors.flatMap(d=>d.furniture).find(d=>d.id===a);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type==="meter"),i=n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[o,s]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(o==="solar"){let a=this._doc.settings.roof.solar??[],l=a.findIndex(c=>c.id===s),d=a[l];return`${(d==null?void 0:d.name)||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return o==="inv"?`${e(s)} \u2192 ${i}`:`${this.t("furn_inverter")} \u2194 ${e(s)}`}layCable(t){if(!this.isAdmin||!this._floorId)return;let e=[];for(let o of this.cableSegments().filter(s=>s.key===t))for(let s of[o.a,o.b]){let a=[z(s[0]),z(s[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-a[0],l[1]-a[1])>.05)&&e.push(a)}let n=e.length>2?e.slice(1,-1):e,i=this._floorId;this.change(o=>{o.settings.roof.cables=[...(o.settings.roof.cables??[]).filter(s=>s.id!==t),{id:t,floor_id:i,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){if(!vt("energy_pro"))return y;let t=this.cableSegments();if(!t.length)return y;let e=t.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,o=[...new Set(t.map(s=>s.key))];return j`<g class="fp3d-cable-layer">${o.map(s=>{let a=n.find(v=>v.id===s),l=`fp3d-cable fp3d-cable-${s.split(":")[0]}${a?" fp3d-cable-laid":""}${s===i?" fp3d-cable-sel":""}`,d=t.filter(v=>v.key===s),c=e.filter(v=>v.key===s).map(v=>{let g=this.toScreen([v.a[0],v.a[2]]),b=this.toScreen([v.b[0],v.b[2]]);return j`<line x1=${g[0]} y1=${g[1]} x2=${b[0]} y2=${b[1]} />`});if(!(a&&s===i&&a.floor_id===this._floorId&&!a.locked))return c.length?j`<g class=${l} data-cable=${s}><g class="fp3d-cable-hit">${c}</g>${c}</g>`:y;let u=d[0],p=d[d.length-1],h=[this.toScreen([u.a[0],u.a[2]]),...a.points.map(v=>this.toScreen(v)),this.toScreen([p.b[0],p.b[2]])],f=h.slice(0,-1).map((v,g)=>j`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${g} x1=${v[0]} y1=${v[1]} x2=${h[g+1][0]} y2=${h[g+1][1]} />`),m=a.points.map((v,g)=>{let b=this.toScreen(v);return j`<g class="fp3d-vertex" data-cable-pt=${`${s}:${g}`}><circle cx=${b[0]} cy=${b[1]} r="16" class="fp3d-hit" /><circle cx=${b[0]} cy=${b[1]} r="6" /></g>`});return j`<g class=${l} data-cable=${s}>${c}${f}${m}</g>`})}</g>`}renderCableSettings(){var o;let t=this.cableKeys();if(!t.length)return y;let e=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(s=>s.id===this._cableId):void 0;return _`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${t.map(s=>_`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${s===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=s===this._cableId?null:s;let a=n.find(l=>l.id===s);this._cableId&&a&&this._doc.floors.some(l=>l.id===a.floor_id)&&(this._floorId=a.floor_id)}}
            >
              <span>${this.cableLabel(s)}${n.some(a=>a.id===s)?_` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:y}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?_`<div class="fp3d-actions">
              ${i?_`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(s=>{var l;let a=(l=s.settings.roof.cables)==null?void 0:l.find(d=>d.id===i.id);a&&(a.locked=!a.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(s=>s.settings.roof.cables=(s.settings.roof.cables??[]).filter(a=>a.id!==this._cableId))}>${this.t("cable_auto")}</button>`:_`<button class="fp3d-btn fp3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?_`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,s=>this.change(a=>{var d;let l=(d=a.settings.roof.cables)==null?void 0:d.find(c=>c.id===i.id);l&&(l.height=Math.min(30,Math.max(0,z(s))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:((o=this._doc.floors.find(s=>s.id===i.floor_id))==null?void 0:o.name)??""})}</p>`:y}`:y}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return y;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,i=vt("energy_pro")&&(n==null?void 0:n.place)==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return j`<g class="fp3d-energy-markers">${i?j`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:y}${t.furniture.filter(o=>_e.includes(o.type)).map(o=>{let[s,a]=this.toScreen([o.x,o.z]),l=o.id===this._furnitureId;return j`<g data-energy-device=${o.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${a} r="17" />
          <text x=${s} y=${a+6} class="fp3d-energy-icon">${e[o.type]??"\u26A1"}</text>
          ${l?j`<text x=${s} y=${a+32} class="fp3d-energy-name">${this.t(`furn_${o.type}`)}</text>`:y}
          <title>${this.t(`furn_${o.type}`)}</title>
        </g>`})}</g>`}faceLabel(t){if(t.key===Ce)return this.t("solar_ground");if(t.wall){let{floorId:o,room:s,edge:a,free:l}=t.wall,d=this._doc.floors.find(p=>p.id===o),c=d==null?void 0:d.rooms.find(p=>p.id===s),u=l?this.t("solar_wall_free"):c?`${c.name}${a!=null?` ${a+1}\u2013${(a+1)%c.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${(d==null?void 0:d.name)??""} \xB7 ${u?`${u} \xB7 `:""}${this.t(`compass_${vs(t,this._doc.settings.north??0)}`)} \xB7 ${this.m(t.lu,2)}`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(o=>o.id===t.section)+1}):this.t("solar_main");if(t.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=t.side==="c"||t.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${vs(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0${i}`}addSolarField(){if(!this.isAdmin)return;let t=yt(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,i=qi(t.filter(s=>!e.has(s.key)),n)??qi(t,n);if(!i)return;let o=Bi(i,X("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(t){var n;this._solarId=t,this._roofId=null;let e=(n=this._doc.settings.roof.solar)==null?void 0:n.find(i=>i.id===t);e!=null&&e.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){var n;if(!this.isAdmin)return;let t=this._floorId??((n=this._doc.floors[0])==null?void 0:n.id),e=t?hc(this._doc,X("pv"),t):null;e&&(this.change(i=>i.settings.roof.solar=[...i.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isAdmin)return;let t=fs(this._doc,X("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var s;let i=(s=n.settings.roof.solar)==null?void 0:s.find(a=>a.id===e);if(!i)return;Object.assign(i,t);let o=Dt(n,i);o&&Object.assign(i,xn(o,i))}))}setSolarString(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var a;let i=n.settings.roof,o=(a=i.solar)==null?void 0:a.find(l=>l.id===e);if(!o)return;if(t==="new"){let l=i.strings??[],d={id:X("str"),name:this.t("solar_string_n",{n:l.length+1}),entity:o.entity??null,inverter:null};i.strings=[...l,d],o.string=d.id}else o.string=t;let s=new Set((i.solar??[]).map(l=>l.string).filter(Boolean));i.strings=(i.strings??[]).filter(l=>s.has(l.id))})}updateSolarString(t){var i;let e=(i=this._doc.settings.roof.solar)==null?void 0:i.find(o=>o.id===this._solarId),n=e==null?void 0:e.string;!n||!this.isAdmin||this.change(o=>{var a;let s=(a=o.settings.roof.strings)==null?void 0:a.find(l=>l.id===n);s&&Object.assign(s,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var o;let i=(o=n.settings.roof.solar)==null?void 0:o.find(s=>s.id===e);i&&t(i)})}deleteSolar(){let t=this._solarId;!t||!this.isAdmin||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==t);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=yt(this._doc),n=new Map(t.map(o=>[o.id,Dt(this._doc,o,e)])),i=this.isAdmin;return _`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?_`<div class="fp3d-room-list">
            ${t.map((o,s)=>{let a=n.get(o.id),l=a?ye(a,o).length:0;return _`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(o.id)}
                >
                  <span>${o.name||`${this.t("solar_field")} ${s+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:Bt(this.hass,l*(o.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:y}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?_`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(o=>{let s=t.filter(c=>c.string===o.id),a=s.map(c=>n.get(c.id)?ye(n.get(c.id),c).length:0),l=a.reduce((c,u)=>c+u,0),d=s.reduce((c,u,p)=>c+a[p]*(u.wp??400)/1e3,0);return _`<p class="fp3d-sub">🔗 <b>${o.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:l,kwp:Bt(this.hass,d,1)})}</p>`})}`:y}
    </section>`}renderSolarForm(t){var h,f,m,v;let e=this.isAdmin,n=yt(this._doc),i=pe(this._doc),o=Dt(this._doc,t,n),s=t.face===Ce,a=o?ye(o,t).length:0,l=Un(t),d=l.reduce((g,b)=>g+b,0)-(((h=t.skip)==null?void 0:h.length)??0),c=this.entityOptions(g=>this.isPowerSensor(g)),u=g=>this.updateSolar(g),p=(this._doc.settings.roof.solar??[]).findIndex(g=>g.id===t.id)+1;return _`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${p}`}</h3>
          ${e?_`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!t.locked})}>
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
              @change=${g=>{let b=g.target.value,$={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h,wp:t.wp};b===Ce&&u({...fs(this._doc,t.id),...$,rows:t.rows,cols:t.cols});let x=n.find(S=>S.key===b);x&&u(bs(x,{...t,...$}));let P=i.find(S=>S.key===b);P&&u(bs(P,{...t,...$,rows:1}))}}
            >
              ${o?y:_`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(g=>_`<option value=${g.key} ?selected=${g.key===t.face}>${this.faceLabel(g)}</option>`)}
              <option value=${Ce} ?selected=${s}>${this.t("solar_ground")}</option>
              ${i.map(g=>_`<option value=${g.key} ?selected=${g.key===t.face}>${this.faceLabel(g)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,g=>{var $;let b=Math.max(1,Math.min(40,Math.round(g)));u(($=t.layout)!=null&&$.length?{layout:Array.from({length:b},(x,P)=>t.layout[P]??t.layout[t.layout.length-1]),rows:b}:{rows:b})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${(f=t.layout)!=null&&f.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${g=>{let b=g.target.value.split(/[,;\s]+/).map($=>parseInt($,10)).filter($=>Number.isFinite($)&&$>=0);b.length&&(b.length===1?u({cols:Math.max(1,Math.min(60,b[0])),layout:null,skip:null}):u({layout:b.slice(0,40).map($=>Math.min(60,$)),rows:Math.min(40,b.length),cols:Math.max(1,...b),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${o&&!o.unbounded?_`${this.t("solar_face_size",{w:Bt(this.hass,o.lu,1),h:Bt(this.hass,o.ls,1)})} · `:y}${this.t("solar_cols_hint")}
        </p>
        ${(m=t.layout)!=null&&m.length&&new Set(t.layout).size>1?_`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(g=>_`<button aria-pressed=${(t.align??"left")===g} ?disabled=${!e} @click=${()=>u({align:g})}>${this.t(`solar_align_${g}`)}</button>`)}
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
          ${this.len(this.t("solar_module_w"),t.module_w??1.13,g=>u({module_w:Math.max(.3,Math.min(3,z(g)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),t.module_h??1.72,g=>u({module_h:Math.max(.3,Math.min(3,z(g)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),t.wp??400,g=>u({wp:Math.max(50,Math.min(1500,Math.round(g)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${(v=t.skip)!=null&&v.length?_`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:y}
        </div>
        ${this._solarPick?_`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:y}
        <div class="fp3d-form">
          ${s?_`${this.len(this.t("solar_base"),t.base??0,g=>u({base:g>.001?Math.min(60,z(g)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,g=>u(Gn(this._doc,t,g)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Gn(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Gn(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:_`${this.len(this.t("solar_u"),t.u,g=>u({u:z(g)}),.05)} ${this.num(this.t(o!=null&&o.wall?"solar_v_wall":"solar_v"),t.v,g=>u({v:z(g)}),.05)}`}
          ${o!=null&&o.wall?_`${this.num(this.t("solar_tilt_wall"),t.tilt??0,g=>u({tilt:Math.max(0,Math.min(90,Math.round(g)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${g=>u({flip:g.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:y}
          ${o!=null&&o.flat?_`${this.num(this.t("solar_tilt"),t.tilt??15,g=>u({tilt:Math.max(0,Math.min(45,Math.round(g)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${g=>u({flip:g.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:y}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:a,kwp:Bt(this.hass,a*(t.wp??400)/1e3,1)})}${a<d?_` · <b>${this.t("solar_partial",{n:a,total:d})}</b>`:y}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${g=>{let b=g.target.value;this.setSolarString(b===""?null:b)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(g=>_`<option value=${g.id} ?selected=${g.id===t.string}>${g.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{var P;let g=(P=this._doc.settings.roof.strings)==null?void 0:P.find(S=>S.id===t.string);if(!g)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,c,S=>u({entity:S==="none"?null:S}));let b=this.hass?fn(this.hass,this._doc.floors):null,$=S=>this._doc.floors.flatMap(R=>R.furniture.filter(I=>I.type===S).map(I=>({m:I,fl:R}))).map(({m:R,fl:I},E)=>{var A,M;let k=(A=b==null?void 0:b.get(R.id))==null?void 0:A.entity,w=((M=R.name)==null?void 0:M.trim())||(k&&this.hass?_t(this.hass,k):"");return{id:R.id,label:`${w||`${this.t(`furn_${S}`)} ${E+1}`} \xB7 ${I.name}`}}),x=[...$("inverter"),...$("home_battery")];return _`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${g.name} @change=${S=>this.updateSolarString({name:S.target.value.trim()||g.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),g.entity??null,void 0,c,S=>this.updateSolarString({entity:S==="none"?null:S}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${S=>this.updateSolarString({inverter:S.target.value||null})}>
                  <option value="" ?selected=${!g.inverter}>${this.t(x.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${x.map(S=>_`<option value=${S.id} ?selected=${S.id===g.inverter}>${S.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${e?_`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!o} @click=${()=>o&&u({...Bi(o,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}renderRoofPanel(){var s;let t=this._doc.settings.roof,e=this.isAdmin,n=t.type==="custom"?this.roofSection:void 0,i=this._roofWinId?(s=t.windows)==null?void 0:s.find(a=>a.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=t.type==="custom"?t.sections??[]:[];return _`${this.renderRoofBasics()}
    <section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?_`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:_`<div class="fp3d-room-list">
              ${o.map((a,l)=>_`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=a.id}>
                    <span>${l+1} · ${a.dormer?this.t("roof_dormer"):this.t(`roof_shape_${a.shape}`)} · ${this.m(Math.abs(a.x1-a.x0),1)} × ${this.m(Math.abs(a.z1-a.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(Vi(a),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(a=>a.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){var i,o;let t=this._solarId?(i=this._doc.settings.roof.solar)==null?void 0:i.find(s=>s.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?(o=this.floor)==null?void 0:o.furniture.find(s=>s.id===this._furnitureId&&_e.includes(s.type)):void 0;if(e)return _`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`;let n=vt("energy_pro");return _`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():y}${n?this.renderHologramSettings():y}${this.renderProCard()}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[],e=this.isAdmin,n=this._doc.settings.roof.hologram??mi,i=n.place==="free",o=l=>this.change(d=>d.settings.roof.hologram={...d.settings.roof.hologram??mi,...l}),s=(l,d)=>l.name||`${this.t("solar_field")} ${d+1}`,a=()=>{let l=-1/0,d=1/0,c=-1/0;for(let p of this._doc.floors)for(let h of p.rooms)for(let[f,m]of h.points)l=Math.max(l,f),d=Math.min(d,m),c=Math.max(c,m);let u=Number.isFinite(l);o({place:"free",x:n.x??(u?z(l+2):0),z:n.z??(u?z((d+c)/2):0),height:n.height??3})};return _`<section>
      <h3>◈ ${this.t("holo_settings")}</h3>
      <p class="fp3d-sub">${this.t("holo_settings_hint")}</p>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("holo_place")}
          <select ?disabled=${!e} @change=${l=>l.target.value==="free"?a():o({place:"field"})}>
            <option value="field" ?selected=${!i}>${this.t("holo_place_field")}</option>
            <option value="free" ?selected=${i}>${this.t("holo_place_free")}</option>
          </select>
        </label>
        ${i?_`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>o({x:z(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>o({z:z(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>o({height:Math.min(60,Math.max(0,z(l)))}),.25,0)}`:t.length?_`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!e} @change=${l=>o({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${t.map((l,d)=>_`<option value=${l.id} ?selected=${l.id===n.field}>${s(l,d)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>o({right:Math.min(30,Math.max(-30,z(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>o({up:Math.min(30,Math.max(-30,z(l)))}),.25)}`:_`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
        ${this.num(this.t("holo_size"),n.size,l=>o({size:Math.min(3,Math.max(.3,z(l)))}),.1,.3)}
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
    </section>`}isPowerSensor(t){var n,i;if(!Lt(t))return!1;let e=(i=(n=this.hass)==null?void 0:n.states[t])==null?void 0:i.attributes;return(e==null?void 0:e.device_class)==="power"||(e==null?void 0:e.unit_of_measurement)==="W"||(e==null?void 0:e.unit_of_measurement)==="kW"}devicePower(t,e){var n;return t.power&&t.power!=="none"?t.power:((n=e.get(t.id))==null?void 0:n.power)??null}renderEnergyChecklist(){let t=this._doc,e=this.hass?fn(this.hass,t.floors):new Map,n=t.floors.flatMap(g=>g.furniture.map(b=>({m:b,fl:g}))),i=g=>n.filter(b=>b.m.type===g),o=g=>{this._floorId=g.fl.id,this._solarId=null,this.selectItem("furniture",g.m.id),this.showPoint(g.m.x,g.m.z)},s=t.settings.roof.solar??[],a=i("meter"),l=i("inverter"),d=i("home_battery"),c=i("grid_point"),u=!!t.energy.grid||a.some(g=>this.devicePower(g.m,e)),p=!!t.energy.solar||l.length>0&&l.every(g=>this.devicePower(g.m,e)),h=d.every(g=>this.devicePower(g.m,e)&&g.m.soc&&g.m.soc!=="none")||!!t.energy.battery,f=vt("energy_pro"),m=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},a.length?{state:u?"ok":"todo",label:this.t(u?"chk_meter":"chk_meter_sensor"),action:()=>o(a[0])}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:p?"ok":"todo",label:this.t(p?"chk_inverter":"chk_inverter_sensor"),action:()=>o(l.find(g=>!this.devicePower(g.m,e))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},d.length?{state:h?"ok":"todo",label:this.t(h?"chk_battery":"chk_battery_sensor"),action:()=>o(d[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},c.length?{state:"ok",label:this.t("chk_grid"),action:()=>o(c[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},...f?[{state:"ok",label:this.t("chk_pro_active")}]:[]],v=m.filter(g=>g.state==="ok").length;return _`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${v}/${m.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${m.map(g=>g.href?_`<a class="fp3d-chk fp3d-chk-${g.state}" href=${g.href} target="_blank" rel="noopener"><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</a>`:_`<button class="fp3d-chk fp3d-chk-${g.state}" ?disabled=${!this.isAdmin&&!!g.action&&g.state!=="ok"} @click=${g.action}><span>${g.state==="ok"?"\u2713":g.state==="todo"?"\u25CB":"\xB7"}</span>${g.label}</button>`)}
    </section>`}renderHelpLinks(){return _`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new?labels=enhancement" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
      </div>
    </section>`}renderProCard(){if(vt("energy_pro"))return _`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${Ze("energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return _`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${Ze("energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isAdmin)return;if(t==="grid_point"){let b=Ss(this._doc),[$,x,P]=Ht(t),[S,R]=b?b.end:this.toWorld(this._size.w/2,this._size.h/2),I={id:X("furniture"),type:t,x:z(S),z:z(R),rotation:0,w:$,d:x,h:P,variant:null};this.change((E,k)=>k.furniture.push(I)),this.selectItem("furniture",I.id),this.showPoint(I.x,I.z);return}let n=b=>{var $,x,P;return`${b.name} ${b.area_id&&((P=(x=($=this.hass)==null?void 0:$.areas)==null?void 0:x[b.area_id])==null?void 0:P.name)||""} ${b.area_id??""}`.toLowerCase()},i=e.rooms.filter(b=>b.points.length>=3),o=b=>i.find($=>b.test(n($))),s=i.find(b=>e.furniture.some($=>$.type==="parking"&&tt([$.x,$.z],b.points))),a=o(/garage|carport/)??s,l=o(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),d=o(/flur|diele|eingang|hall|entr|lobby/),c=(t==="wallbox"?a:t==="meter"?l??d??a:l??a)??this.room??i.sort((b,$)=>Math.abs(St($.points))-Math.abs(St(b.points)))[0],[u,p,h]=Ht(t),[f,m]=c?te(c.points):this.toWorld(this._size.w/2,this._size.h/2);if(c){let[b,$]=te(c.points),x=null,P=new Set(e.openings.filter(I=>I.room_id===c.id).map(I=>I.edge)),S=c.points.some((I,E)=>!P.has(E));c.points.forEach((I,E)=>{if(S&&P.has(E))return;let k=c.points[(E+1)%c.points.length],w=Math.hypot(k[0]-I[0],k[1]-I[1]);if(x&&w<=x.l)return;let A=(I[0]+k[0])/2,M=(I[1]+k[1])/2,T=-(k[1]-I[1])/w,C=(k[0]-I[0])/w;(b-A)*T+($-M)*C<0&&([T,C]=[-T,-C]),x={mx:A,mz:M,nx:T,nz:C,l:w}});let R=x;R&&([f,m]=[R.mx+R.nx*(p/2+.25),R.mz+R.nz*(p/2+.25)])}let v={id:X("furniture"),type:t,x:z(f),z:z(m),rotation:0,w:u,d:p,h,variant:null},g=c?Wn({...e,furniture:[...e.furniture,v]},v,this._doc.settings.wall_interior):null;g&&Object.assign(v,{x:z(g.x),z:z(g.z),rotation:g.rotation}),this.change((b,$)=>$.furniture.push(v)),this.selectItem("furniture",v.id),this.showPoint(v.x,v.z)}renderEnergyDevices(){let t=this.isAdmin,e=this._doc.floors.flatMap(n=>n.furniture.filter(i=>_e.includes(i.type)).map(i=>({fl:n,m:i})));return _`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${e.length?_`<div class="fp3d-room-list">
            ${e.map(({fl:n,m:i})=>_`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:y}
      <div class="fp3d-actions">
        ${_e.map(n=>_`<button
            class="fp3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
    </section>`}renderRoofSectionForm(t){let e=this.isAdmin,n=h=>this.updateRoofSection(h),i=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[o,s]=t.flip?[i[1],i[0]]:i,a=t.shape==="flat"||t.shape==="parapet",l=t.shape==="pent",d=h=>h.findIndex(f=>f.id===t.id)+1,c=(h,f,m,v=.05,g=0)=>this.len(h,f,b=>m(Math.max(g,z(b))),v,g),u=(h,f,m)=>this.num(h,f,v=>m(Math.max(0,z(v))),1,0),p=!!this._doc.settings.lock_plan;return _`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${t.dormer?this.t("roof_dormer"):this.t("roof_section")} ${d(this._doc.settings.roof.sections??[])}</h3>
          ${e?p?_`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:_`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:y}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!e} @change=${h=>n({shape:h.target.value})}>
            ${ta.map(h=>_`<option value=${h} ?selected=${t.shape===h}>${this.t(`roof_shape_${h}`)}</option>`)}
          </select>
        </label>
        ${a?y:_`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        ${t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip"?_`<div class="fp3d-form" title=${this.t("roof_end_hint")}>
              ${[0,1].map(h=>{let f=this.t(t.axis==="x"?h===0?"roof_side_left":"roof_side_right":h===0?"roof_side_top":"roof_side_bottom"),m=(h===0?t.end_u0:t.end_u1)??"";return _`<label class="fp3d-field"
                  >${this.t("roof_end")} ${f}
                  <select
                    ?disabled=${!e}
                    @change=${v=>{let g=v.target.value||null;n(h===0?{end_u0:g}:{end_u1:g})}}
                  >
                    <option value="" ?selected=${m===""}>${this.t("roof_end_auto")}</option>
                    ${ea.map(v=>_`<option value=${v} ?selected=${m===v}>${this.t(v==="gable"?"roof_end_gable":`roof_shape_${v}`)}</option>`)}
                  </select></label
                >`})}
            </div>`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${h=>n({open:h.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${a?c(this.t("roof_height"),t.eave_a,h=>n({eave_a:h,eave_b:h})):_`${c(`${this.t("roof_eave")} ${l?"":o}`,t.eave_a,h=>n({eave_a:h}))}
              ${l?y:c(`${this.t("roof_eave")} ${s}`,t.eave_b,h=>n({eave_b:h}))}
              ${u(`${this.t("roof_pitch_short")} ${l?"":o}`,t.pitch_a,h=>n({pitch_a:Math.min(75,h)}))}
              ${l?y:u(`${this.t("roof_pitch_short")} ${s}`,t.pitch_b,h=>n({pitch_b:Math.min(75,h)}))}`}
          ${c(this.t("roof_base"),t.base,h=>n({base:h}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!e}
              @change=${h=>{let f=this._doc.floors.find(g=>g.id===h.target.value);if(!f)return;let m=z(f.elevation+f.height),v=m-t.base;n({base:m,eave_a:z(t.eave_a+v),eave_b:z(t.eave_b+v)})}}
            >
              ${[...this._doc.floors].filter(h=>h.rooms.length).sort((h,f)=>f.elevation-h.elevation).map(h=>{var f;return _`<option value=${h.id} ?selected=${((f=lc(this._doc,t))==null?void 0:f.id)===h.id}>${h.name}</option>`})}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${c(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,h=>n({overhang:Math.min(2,h)}),.05,0)}
        </div>
        ${a&&e?_`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${t.points?_`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:y}
            </div>
            <p class="fp3d-sub">${this.t(t.points?"roof_points_hint":"roof_outline_hint")}</p>`:y}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(Vi(t),2)} · ${this.t("roof_section_hint")}</p>
        ${e?_`<div class="fp3d-actions">
              ${a?y:_`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!a&&!t.dormer&&!t.open?_`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${o}</button>
                  ${l?y:_`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:y}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:y}
      </section>`}fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(i=>i.id===n);case"opening":return t.openings.find(i=>i.id===n);case"furniture":return t.furniture.find(i=>i.id===n);case"device":return t.placements.find(i=>i.entity_id===n);case"wall":return(t.walls??[]).find(i=>i.id===n);case"outdoor":return t.outdoor.find(i=>i.id===n)}}isFixedItem(t,e){return vo(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isAdmin||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);n||(this._fixedHint=!1),this.change((i,o)=>{let s=this.fixItem(o,t,e);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(t=>t.settings.lock_plan=!t.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(t){t.preventDefault(),!(this.rightPress||performance.now()-this.rightUp<600)&&(this._tool!=="select"&&this._tool!=="furniture"||(this.drag=null,this.openContext(t.target,this.localPoint(t))))}openContext(t,e){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...e),i=f=>{var m;return((m=t.closest(`[${f}]`))==null?void 0:m.getAttribute(f))??null},o=null,s=i("data-device"),a=i("data-opening"),l=t.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),d=i("data-free-wall"),c=i("data-outdoor")?this.outdoorAt(n)??i("data-outdoor"):null,u=i("data-room")??this.roomAt(n);if(s?o=["device",s]:a?o=["opening",a]:l?o=["furniture",l]:d?o=["wall",d]:c&&!u?o=["outdoor",c]:u&&(o=["room",u]),!o){this._ctx=null;return}let[p,h]=o;this.selectItem(p,h),(p==="opening"||p==="furniture")&&(this._roomId=this._roomId??u),this._ctx={x:e[0],y:e[1],kind:p,id:h}}deleteItem(t,e){if(t==="device"){if(!this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return y;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(t.x,((n==null?void 0:n.clientWidth)??800)-190)),o=Math.max(4,Math.min(t.y,((n==null?void 0:n.clientHeight)??600)-190)),s=a=>()=>{this._ctx=null,a()};return _`<div class="fp3d-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?_`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:_`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?_`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:y}
      ${t.kind==="furniture"?_`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${s(()=>{var l;let a=(l=this.floor)==null?void 0:l.furniture.find(d=>d.id===t.id);a&&this.openWallViewFor(a)})}>▦ ${this.t("wall_view")}</button>`:y}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isAdmin)return y;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?_`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:y;let n=this.isFixedItem(t,e);return _`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){var n,i,o;if(this._notice=null,e&&(this._sideOpen=!0),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._multi=[],this._single=!1,this._deviceId=t==="device"?e:null,t==="device"&&e){let s=(n=this.floor)==null?void 0:n.placements.find(a=>a.entity_id===e);this._roomId=(s&&this.roomAt([s.x,s.z]))??this._roomId}t==="opening"&&e&&(this._roomId=((o=(i=this.floor)==null?void 0:i.openings.find(s=>s.id===e))==null?void 0:o.room_id)??this._roomId)}get opening(){var t;return this._openingId?(t=this.floor)==null?void 0:t.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){var t;return this._furnitureId?(t=this.floor)==null?void 0:t.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,o){let s=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l,c=o?.01:this._doc.settings.grid;return this.clampOffset(t,e,i,Math.round(d/c)*c)}clampOffset(t,e,n,i){let o=t.points[e],s=t.points[(e+1)%t.points.length],a=Math.hypot(s[0]-o[0],s[1]-o[1])||1,l=this.floor,d=this._doc.settings,[c,u]=l?el(At(l.rooms,{exterior:d.wall_exterior,interior:d.wall_interior},l.walls??[]).walls,t,e):[0,0],p=Math.min(n,a+c+u)/2;return z(Math.min(a,a+u-p,Math.max(0,p-c,i)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let m of n.walls??[]){let v=ze({room_id:"",edge:0,wall:m.id},n.rooms,n.walls??[]);if(!v)continue;let[g,b]=this.toScreen(m.a),[$,x]=this.toScreen(m.b),P=($-g)**2+(x-b)**2||1,S=Math.min(1,Math.max(0,((e[0]-g)*($-g)+(e[1]-b)*(x-b))/P)),R=Math.hypot(e[0]-g-($-g)*S,e[1]-b-(x-b)*S),I=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],E=n.rooms.find(k=>k.points.length>=3&&tt(I,k.points));R<to*2.2&&(!i||R-1<i.d)&&(i={room:v.room,edge:0,d:R-1,wall:m.id,roomId:(E==null?void 0:E.id)??m.id})}for(let m of n.rooms)for(let v=0;v<m.points.length;v++){let[g,b]=this.toScreen(m.points[v]),[$,x]=this.toScreen(m.points[(v+1)%m.points.length]),P=($-g)**2+(x-b)**2||1,S=Math.min(1,Math.max(0,((e[0]-g)*($-g)+(e[1]-b)*(x-b))/P)),R=Math.hypot(e[0]-g-($-g)*S,e[1]-b-(x-b)*S),I=R-(m.id===this._roomId?.5:0);R<to*2.2&&(!i||I<i.d)&&(i={room:m,edge:v,d:I})}if(!i)return!1;let{room:o,edge:s,wall:a}=i,l=o.points[s],d=o.points[(s+1)%o.points.length],c=Math.hypot(d[0]-l[0],d[1]-l[1]),u=ki[t],p=u.type,h=z(Math.min(u.width,Math.max(.3,c-.1))),f={id:X("opening"),room_id:i.roomId??o.id,edge:s,...a?{wall:a}:{},offset:this.offsetOnEdge(o,s,this.toWorld(...e),h,!1),width:h,type:p,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((m,v)=>v.openings.push(f)),this.selectItem("opening",f.id),!0}setOpeningPreset(t,e){let n=ki[e];this._openingPreset=e;let i=Mi(t)===e,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,i)=>Object.assign(i.openings.find(o=>o.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||!this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}glowScaleField(t,e){return _`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((t??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;e(Math.abs(i-1)<.001?null:i)}}
    /></label>`}typeChoices(t){let e=new Set(Object.values(yi).flat());return(vt("fridge_smart")||vt("household"))&&e.add("fridge_smart"),vi.filter(n=>e.has(n)||n===t)}furnitureFor(t){let e=at(t),n=[...vi.map(s=>({type:s,label:this.t(`furn_${s}`)})),...(this.packs??[]).flatMap(s=>s.items.map(a=>({type:Me(s.id,a.id),label:`${ae(a)} \xB7 ${ge(s)}`})))],i=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,o=s=>e==="light"?Kt(s):e==="climate"?s==="radiator"||s==="ac_unit":t.startsWith("vacuum.")?me(s):e==="media"?Fi(s)||Ue(s)&&i.test(s):Ue(s)&&!Kt(s);return n.filter(s=>o(s.type)).sort((s,a)=>s.label.localeCompare(a.label))}vehicleToSpot(t){if(!this.isAdmin)return;let[e,n,i]=Ht("parking"),o={id:X("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,z(t.w+.5)),d:Math.max(n,z(t.d+.4)),h:i,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}};this.change((s,a)=>{a.furniture=a.furniture.filter(l=>l.id!==t.id),a.furniture.push(o)}),this.selectItem("furniture",o.id)}deviceToFurniture(t,e){if(!this.isAdmin)return;let[n,i,o]=Ht(e),s={id:X("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:i,h:o,variant:null,entity:t.entity_id,name:t.name??null,...t.locked?{locked:!0}:{}};this.change((a,l)=>{l.placements=l.placements.filter(d=>d.entity_id!==t.entity_id),l.furniture.push(s)}),this._deviceId=null,this.selectItem("furniture",s.id)}furnitureToDevice(t){let e=t.entity;if(!this.isAdmin||!e||e==="none")return;let n={entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,...t.name?{name:t.name}:{},...e.startsWith("light.")?{pin:!0}:{}};this.change((i,o)=>{o.furniture=o.furniture.filter(s=>s.id!==t.id),o.placements.some(s=>s.entity_id===e)||o.placements.push(n)}),this._furnitureId=null,this.selectItem("device",e)}renderAsFurniture(t){if(!this.isAdmin)return y;let e=this.furnitureFor(t.entity_id);return e.length?_`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${n=>{let i=n.target.value;i&&this.deviceToFurniture(t,i)}}
      >
        <option value="" selected>${this.t("as_furniture_pick")}</option>
        ${e.map(n=>_`<option value=${n.type}>${n.label}</option>`)}
      </select></label
    >`:y}addFurniture(t,e=!1){let n=this.floor;if(!n||!this.isAdmin)return;let[i,o,s]=Ht(t),a=this._doc.floors.filter(f=>f.elevation>n.elevation).sort((f,m)=>f.elevation-m.elevation)[0],l=Po.has(t)?z(a?a.elevation-n.elevation:n.height+.25):s,d=this.room,[c,u]=d?te(d.points):this.toWorld(this._size.w/2,this._size.h/2),p=0;if(t==="parking"&&d){let f=n.openings.find(b=>b.room_id===d.id&&b.type==="garage"),m=f?d.points[f.edge]:null,v=f?d.points[(f.edge+1)%d.points.length]:null,g=zt(d.points);p=(m&&v?Math.abs(v[1]-m[1])>Math.abs(v[0]-m[0]):g.x1-g.x0>g.z1-g.z0)?90:0}let h={id:X("furniture"),type:t,x:z(c),z:z(u),rotation:p,w:i,d:o,h:l,variant:null,...e?{mirror:!0}:{}};this.change((f,m)=>m.furniture.push(h)),this.selectItem("furniture",h.id),this.showPoint(h.x,h.z)}snapToWall(t){return this.floor?Wn(this.floor,t,this._doc.settings.wall_interior):null}updateFurniture(t){let e=this._furnitureId;this.change((n,i)=>Object.assign(i.furniture.find(o=>o.id===e),t))}mirrorFurniture(){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({mirror:!t.mirror})}rotateFurniture(t){let e=this.furnitureItem;if(!e||!this.isAdmin)return;if(this.selection().length>1)return this.rotateSelection(t);this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;if(!t||!this.isAdmin)return;let e=this.selection();if(e.length>1){let n=e.some(o=>this.isFixedItem("furniture",o));if(!confirm(this.t(n?"block_delete_fixed":"block_delete",{n:e.length})))return;let i=new Set(e);this.change((o,s)=>s.furniture=s.furniture.filter(a=>!i.has(a.id))),this.selectItem("room",this._roomId);return}this.confirmFixedDelete("furniture",t)&&(this.change((n,i)=>i.furniture=i.furniture.filter(o=>o.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e=this.selection();if(e.length>1){let i=this.floor.furniture.filter(a=>e.includes(a.id)),o=new Map,s=i.map(a=>({...structuredClone(a),id:X("furniture"),x:z(a.x+.3),z:z(a.z+.3),group:a.group?o.get(a.group)??o.set(a.group,X("block")).get(a.group):null,locked:null}));this.change((a,l)=>l.furniture.push(...s)),this.setMulti(s.map(a=>a.id));return}let n={...structuredClone(t),id:X("furniture"),x:z(t.x+.3),z:z(t.z+.3),group:this._single?t.group:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}selection(){var e;if(this._multi.length)return this._multi;let t=this.furnitureItem;return t?t.group&&!this._single?(((e=this.floor)==null?void 0:e.furniture)??[]).filter(n=>n.group===t.group).map(n=>n.id):[t.id]:[]}withGroups(t){var n,i;let e=new Set((((n=this.floor)==null?void 0:n.furniture)??[]).filter(o=>t.includes(o.id)&&o.group).map(o=>o.group));return[...new Set([...t,...(((i=this.floor)==null?void 0:i.furniture)??[]).filter(o=>o.group&&e.has(o.group)).map(o=>o.id)])]}setMulti(t){if(!t.length)return this.selectItem("room",this._roomId);this.selectItem("furniture",t[0]);let e=this.selection();t.length>1&&!(t.length===e.length&&t.every(n=>e.includes(n)))&&(this._multi=t)}toggleMulti(t){let e=this._furnitureId?this.selection():[],n=this.withGroups([t]),i=e.includes(t)?e.filter(o=>!n.includes(o)):[...new Set([...e,...n])];this.setMulti(i)}selectionCentre(t){var o;let e=(((o=this.floor)==null?void 0:o.furniture)??[]).filter(s=>t.includes(s.id)),n=e.map(s=>s.x),i=e.map(s=>s.z);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...i)+Math.max(...i))/2]}rotateSelection(t){let e=this.selection();if(e.some(d=>this.isFixedItem("furniture",d))){this._fixedHint=!0;return}let[n,i]=this.selectionCentre(e),o=t*Math.PI/180,s=Math.round(Math.cos(o)*1e6)/1e6,a=Math.round(Math.sin(o)*1e6)/1e6,l=new Set(e);this.change((d,c)=>{for(let u of c.furniture){if(!l.has(u.id))continue;let p=u.x-n,h=u.z-i;Object.assign(u,{x:z(n+p*s-h*a),z:z(i+p*a+h*s),rotation:((u.rotation+t)%360+360)%360})}})}groupSelection(){let t=new Set(this.selection());if(t.size<2)return;let e=X("block");this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=e)}),this._multi=[],this._single=!1}ungroupSelection(){let t=this.selection(),e=new Set(t);this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=null)}),t.length>1&&(this._multi=t)}lockSelection(t){let e=new Set(this.selection());this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.locked=t||null)})}placeDevices(t,e){let n=e??this.room;if(!n||!t.length||!this.isAdmin)return;let i=new Set(t);this.change((o,s)=>{for(let l of o.floors)l.placements=l.placements.filter(d=>!i.has(d.entity_id)),l.furniture=l.furniture.filter(d=>!(Kt(d.type)&&d.entity&&i.has(d.entity)));let a=[...s.placements.map(l=>[l.x,l.z]),...s.furniture.filter(l=>Kt(l.type)).map(l=>[l.x,l.z])];for(let l of Na(n,t,a)){if(!l.entity_id.startsWith("light.")||n.outdoor){s.placements.push(l);continue}let[d,c,u]=le.lamp_ceiling;s.furniture.push({id:X("furniture"),type:"lamp_ceiling",x:l.x,z:l.z,rotation:0,w:d,d:c,h:u,variant:null,entity:l.entity_id,power:null})}})}get device(){var t;return this._deviceId?(t=this.floor)==null?void 0:t.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,i)=>Object.assign(i.placements.find(o=>o.entity_id===e),t))}centreDevice(){var s;let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=(s=this.floor)==null?void 0:s.rooms.find(a=>a.id===e);if(!t||!n)return;let[i,o]=te(n.points);this.updateDevice({x:z(i),z:z(o)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(u=>at(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&tt([u.x,u.z],t.points));if(n.length<2)return;let i=zt(t.points),o=i.x1-i.x0,s=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,s)))),l=Math.ceil(n.length/a),d=n.map((u,p)=>{let h=Math.floor(p/a),f=h===l-1?n.length-a*(l-1):a,m=p-h*a;return[z(i.x0+o/f*(m+.5)),z(i.z0+s/l*(h+.5))]}),c=n.map(u=>u.entity_id);this.change((u,p)=>{c.forEach((h,f)=>Object.assign(p.placements.find(m=>m.entity_id===h),{x:d[f][0],z:d[f][1]}))})}straightenFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,fixed:n}=dl(t.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((i,o)=>o.rooms=e),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=ll(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=cl(n);this.change((o,s)=>{s.rooms=e,i&&(o.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:Bt(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(Kt(i.type)&&i.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n;this.change((o,s)=>{let a=s.rooms.find(l=>l.id===e.id);a.points.splice(t,1),a.wall_heights&&a.wall_heights.splice(t,1),a.wall_thickness&&a.wall_thickness.splice(t,1),a.wall_slopes&&(a.wall_slopes.splice(t,1),a.wall_slopes[(t-1+a.points.length)%a.points.length]=null,a.wall_slopes.every(l=>!l)&&(a.wall_slopes=void 0)),s.openings=s.openings.filter(l=>l.room_id!==e.id||l.wall||l.edge!==t&&l.edge!==i).map(l=>l.room_id===e.id&&!l.wall&&l.edge>t?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(t,e){if(!this.isAdmin||!t&&!e)return;let n=o=>[z(o[0]+t),z(o[1]+e)],i=o=>{for(let s of o.rooms)s.points=s.points.map(n);for(let s of o.furniture)s.x=z(s.x+t),s.z=z(s.z+e);for(let s of o.placements)s.x=z(s.x+t),s.z=z(s.z+e);for(let s of o.outdoor)s.points=s.points.map(n);for(let s of o.walls??[])s.a=n(s.a),s.b=n(s.b);o.background&&(o.background.x=z(o.background.x+t),o.background.z=z(o.background.z+e))};this._shiftAll?this.change(o=>{for(let s of o.floors)i(s);this.moveHouseExtras(o,n)}):this.change((o,s)=>i(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(t,e){for(let i of t.settings.roof.sections??[]){let o=[e([i.x0,i.z0]),e([i.x1,i.z0]),e([i.x1,i.z1]),e([i.x0,i.z1])];i.x0=Math.min(...o.map(s=>s[0])),i.x1=Math.max(...o.map(s=>s[0])),i.z0=Math.min(...o.map(s=>s[1])),i.z1=Math.max(...o.map(s=>s[1])),i.points&&(i.points=i.points.map(e))}for(let i of t.settings.roof.cables??[])i.points=i.points.map(e);t.energy.meter&&([t.energy.meter.x,t.energy.meter.z]=e([t.energy.meter.x,t.energy.meter.z]));let n=t.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=e([n.x,n.z]))}turnFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let e=(this._shiftAll?this._doc.floors:[t]).flatMap(d=>d.rooms.flatMap(c=>c.points));if(!e.length)return;let n=e.map(d=>d[0]),i=e.map(d=>d[1]),o=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...i)+Math.max(...i))/2,a=d=>[z(o-(d[1]-s)),z(s+(d[0]-o))],l=d=>{for(let c of d.rooms)c.points=c.points.map(a);for(let c of d.furniture)[c.x,c.z]=a([c.x,c.z]),c.rotation=(c.rotation+90)%360;for(let c of d.placements)[c.x,c.z]=a([c.x,c.z]),c.rotation=((c.rotation??0)+90)%360;for(let c of d.outdoor)c.points=c.points.map(a);for(let c of d.walls??[])c.a=a(c.a),c.b=a(c.b);d.background&&([d.background.x,d.background.z]=a([d.background.x,d.background.z]),d.background.rotation=((d.background.rotation??0)+90)%360)};this._shiftAll?this.change(d=>{for(let c of d.floors)l(c);this.moveHouseExtras(d,a)}):this.change((d,c)=>l(c))}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>Object.assign(i.rooms.find(o=>o.id===e),t))}setArea(t){var o,s,a;let e=this.room;if(!e)return;let n=t?(s=(o=this.hass)==null?void 0:o.areas)==null?void 0:s[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(((a=this.hass)==null?void 0:a.areas)??{}).some(l=>l.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=zt(n.points),{x0:o,z0:s,x1:a,z1:l}=i;t==="x"&&([o,a]=[e,e+(a-o)]),t==="z"&&([s,l]=[e,e+(l-s)]),t==="w"&&e>.05&&(a=o+e),t==="d"&&e>.05&&(l=s+e),this.updateRoom({points:[[z(o),z(s)],[z(a),z(s)],[z(a),z(l)],[z(o),z(l)]]})}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(s=>[...s]);o[t][e]=z(n),this.updateRoom({points:o})}async loadImage(t){this.loadingImages.add(t);try{let e=await go(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){var c,u;let e=t.target,n=(c=e.files)==null?void 0:c[0];if(e.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*o),s.height=Math.round(i.height*o),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let a=s.toDataURL("image/jpeg",.85),l=X("img");await pi(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:s.height/s.width}};let d=(u=this.floor)!=null&&u.rooms.length?zt(this.floor.rooms.flatMap(p=>p.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,z(d.x1-d.x0)):12,opacity:.5}})}selectFloor(t){this._floorId=t,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}renderFloorMenu(){let t=this._doc.floors,e=this.floor,n=this.isAdmin,i=this._toolMenu==="floor",o=()=>(this._toolMenu=null,this._floorMenu=!1);return _`<div class="fp3d-seg fp3d-seg-menu">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${i} @click=${()=>(this._toolMenu=i?null:"floor",this._floorMenu=!1,this._viewMenu=!1)}>
          <span class="fp3d-menu-label">${this.t("floor_label")}</span> ${(e==null?void 0:e.name)??this.t("floors")} <span class="fp3d-caret">▾</span>
        </button>
        ${i?_`<div class="fp3d-menu-veil" @click=${o}></div>
              <div class="fp3d-menu" role="menu">
                ${[...t].reverse().map(s=>_`<button role="menuitem" class="fp3d-menu-item ${s.id===this._floorId?"fp3d-menu-on":""}" @click=${()=>(o(),this.selectFloor(s.id))}>
                    ${s.name}<span class="fp3d-menu-more">${s.id===this._floorId?"\u2713":""}</span>
                  </button>`)}
                ${n?_`<div class="fp3d-menu-sep"></div>
                      <button
                        role="menuitem"
                        class="fp3d-menu-item"
                        aria-expanded=${this.freeHaFloors.length?this._floorMenu:y}
                        @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:(o(),this.addFloor())}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length?_`<span class="fp3d-menu-more">${this._floorMenu?"\u25BE":"\u25B8"}</span>`:y}
                      </button>
                      ${this._floorMenu?_`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map(s=>_`<button class="fp3d-chip" @click=${()=>(o(),this.addFloor(s))}>${s.name}</button>`)}
                            <button class="fp3d-chip" @click=${()=>(o(),this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`:y}
                      ${e?_`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${()=>{o(),this.setTool("select"),this.selectItem("room",null),this._sideOpen=!0}}
                          >
                            ${this.t("floor_settings")}
                          </button>`:y}`:y}
              </div>`:y}
      </div>
    </div>`}setTool(t){var n;let e=this.floor;if(this._tool=t,this._draft=[],this._cursor=null,this._pipeMode=!1,this._pipeDraft=null,t==="pool"&&((n=this.outdoorArea)==null?void 0:n.type)!=="pool"){let i=e==null?void 0:e.outdoor.find(o=>o.type==="pool");i&&this.selectItem("outdoor",i.id)}this.setSideFolded(!1)}renderToolBar(t){let e=this.isAdmin,n=!t||!e,i=$o.filter(h=>h!=="pool"),o={tool:"rect",label:this.t("tool_room"),choices:()=>[{label:this.t("tool_rect"),on:this._tool==="rect",pick:()=>this.setTool("rect")},{label:this.t("tool_polygon"),on:this._tool==="polygon",pick:()=>this.setTool("polygon")},{label:this.t("tool_measure"),on:this._tool==="measure",pick:()=>this.setTool("measure")}]},s={tool:"outdoor",label:this.t("tool_outdoor"),choices:()=>[...i.map(h=>({label:this.t(`out_${h}`),on:this._tool==="outdoor"&&(this._outdoorType??"lawn")===h,pick:()=>{this.setTool("outdoor"),this._outdoorType=h}})),{label:this.t("outdoor_shape_rect"),on:this._tool==="outdoor"&&!this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!1)},{label:this.t("outdoor_shape_free"),on:this._tool==="outdoor"&&this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!0)}]},a={tool:"pool",label:this.t("tool_pool"),choices:()=>[...["rect","round","oval","free"].map(h=>({label:this.t(`pool_shape_${h}`),on:this._tool==="pool"&&!this._pipeMode&&(this._poolShape??"rect")===h,pick:()=>{this.setTool("pool"),this._poolShape=h,this._outdoorFree=h==="free"}})),...this.pipeRules?[{label:this.t("pool_pipe_draw"),on:this._tool==="pool"&&!!this._pipeMode,pick:()=>(this.setTool("pool"),this._pipeMode=!0)}]:[]]},l=[{id:"build",label:this.t("tool_group_build"),entries:[o,{tool:"wall",label:this.t("tool_wall")},{tool:"opening",label:this.t("tool_opening")},{tool:"hole",label:this.t("tool_hole")},{tool:"roof",label:this.t("tool_roof")}]},{id:"outside",label:this.t("tool_group_outside"),entries:[s,a]}],d=h=>h.tool===this._tool||h===o&&(this._tool==="polygon"||this._tool==="measure"),c=h=>h===a?this._pipeMode?this.t("pool_pipe_draw"):this.t(`pool_shape_${this._poolShape??"rect"}`):h===s?this.t(`out_${this._outdoorType??"lawn"}`):h===o?this.t(`tool_${this._tool}`):"",u=()=>(this._toolMenu=null,this._toolOpen=null),p=(h,f)=>_`<button aria-pressed=${this._tool===h} ?disabled=${n} @click=${()=>(u(),this.setTool(h))}>${f}</button>`;return _`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool==="select"} ?disabled=${!t} @click=${()=>(u(),this.setTool("select"))}>${this.t("tool_select")}</button>
        ${l.map(h=>{let f=h.entries.find(d),m=this._toolMenu===h.id,v=f?`${f.label}${c(f)?`: ${c(f)}`:""}`:h.label;return _`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!f} aria-haspopup="menu" aria-expanded=${m} ?disabled=${n} @click=${()=>(this._toolMenu=m?null:h.id,this._toolOpen=null,this._viewMenu=!1)}>
              ${v} <span class="fp3d-caret">▾</span>
            </button>
            ${m?_`<div class="fp3d-menu-veil" @click=${u}></div>
                  <div class="fp3d-menu" role="menu">
                    ${h.entries.map(g=>{var x;let b=((x=g.choices)==null?void 0:x.call(g))??[],$=this._toolOpen===g.tool;return _`<button
                          role="menuitem"
                          class="fp3d-menu-item ${d(g)?"fp3d-menu-on":""}"
                          aria-expanded=${b.length?$:y}
                          @click=${()=>{b.length?this._toolOpen=$?null:g.tool:(this.setTool(g.tool),u())}}
                        >
                          ${g.label}${b.length?_`<span class="fp3d-menu-more">${$?"\u25BE":"\u25B8"}</span>`:y}
                        </button>
                        ${$?_`<div class="fp3d-menu-sub">
                              ${b.map(P=>_`<button
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
      ${this.renderSettingsMenu(u)}`}renderSettingsMenu(t){let e=this.isAdmin,n=this._settingsMenu,o=[{key:"house",icon:"\u{1F3E0}",label:this.t("settings_house"),admin:!0},{key:"weather",icon:"\u{1F326}",label:this.t("settings_weather"),admin:!0},{key:"director",icon:"\u{1F3AC}",label:this.t("card_director"),admin:!0},{key:"voice",icon:"\u{1F399}",label:this.t("voice"),admin:!1},...ve("locate")?[{key:"locate",icon:"\u{1F4E1}",label:this.t("locate"),admin:!0}]:[],{key:"favorites",icon:"\u2B50",label:this.t("favorites"),admin:!0},{key:"backdrop",icon:"\u{1F5BC}",label:this.t("backdrop"),admin:!0},{key:"terrain",icon:"\u26F0",label:this.t("terrain"),admin:!0},{key:"backup",icon:"\u{1F4BE}",label:this.t("backup"),admin:!0}].filter(a=>e||!a.admin),s=()=>{t(),this._settingsMenu=!n};return _`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-settings">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${n} title=${this.t("settings")} @click=${s}>
          ⚙ <span class="fp3d-settings-word">${this.t("settings")}</span> <span class="fp3d-caret">▾</span>
        </button>
        ${n?_`<div class="fp3d-menu-veil" @click=${()=>this._settingsMenu=!1}></div>
              <div class="fp3d-menu fp3d-menu-right" role="menu">
                ${o.map(a=>_`<button
                    role="menuitem"
                    class="fp3d-menu-item"
                    @click=${()=>{if(this._settingsMenu=!1,a.key==="locate"){this.hass&&El().then(l=>l.openLocateSetup(this.hass,this._doc,()=>this.hass,d=>this.setSettings({person_look:d==="figure"?null:d})));return}this._settingsDialog=a.key,a.key==="voice"&&this.hass&&Ps(this.hass,this.packs??[]).then(()=>this.requestUpdate())}}
                  >
                    ${a.icon} ${a.label}
                  </button>`)}
              </div>`:y}
      </div>
    </div>`}renderSettingsDialog(){let t=this._settingsDialog;if(!t)return y;let e=()=>this._settingsDialog=null,n={house:this.t("settings_house"),weather:this.t("settings_weather"),director:this.t("card_director"),voice:this.t("voice"),locate:this.t("locate"),favorites:this.t("favorites"),backdrop:this.t("backdrop"),terrain:this.t("terrain"),backup:this.t("backup")},i=t==="house"?this.renderHouseSettings():t==="weather"?this.renderWeatherSettings():t==="director"?this.renderDirector():t==="voice"?this.renderVoice():t==="favorites"?this.renderFavorites():t==="backdrop"?this.renderBackdrop():t==="terrain"?this.renderTerrain():this.renderBackup();return _`<div class="fp3d-dialog-veil" @click=${o=>o.target===o.currentTarget&&e()}>
      <div class="fp3d-dialog" role="dialog" aria-label=${n[t]} tabindex="-1" @keydown=${o=>o.key==="Escape"&&e()}>
        <div class="fp3d-dialog-head">
          <h3>${n[t]}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${e}>✕</button>
        </div>
        <div class="fp3d-dialog-body">${i}</div>
      </div>
    </div>`}render(){let t=this.floor,e=t?At(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return _`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderSettingsDialog()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}" style=${`--fp3d-side-w:${this._sideWidth}px`}>
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?_`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:y}
            ${this.renderFloorMenu()} ${this.renderToolBar(t)}
            ${e!=null&&e.warnings.length?_`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:y}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint?_`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${()=>{this._phoneHint=!1;try{localStorage.setItem("neonplan3d.phoneHint","0")}catch{}}}
                  >
                    ✕
                  </button>
                </div>`:y}
            ${this.houseTool?_`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:y}
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
              ${this._tool==="roof"?j`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?j`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&t&&this.pipeRules?this.renderPoolPlan(t):y} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${t?this._wallPick?this.t("hint_wall_pick"):this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this._outdoorFree?this.t("hint_outdoor_free"):this._tool==="pool"&&this._jointPlace?this.t("hint_joint_place"):this._tool==="pool"&&this._pipeMode?this.t(this.poolArea?this._pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool"):this._tool==="pool"&&ve("pool")?this.t("hint_pool_tech"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?_`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:y}
          ${this._split?this.render3d():y}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}renderBackground(t){let e=t==null?void 0:t.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return y;let[i,o]=this.toScreen([e.x,e.z]),s=e.width*this._view.scale,a=s*n.aspect,l=e.rotation??0,d=this.bgHandles();return j`<g transform="rotate(${l} ${i+s/2} ${o+a/2})">
      <image href=${n.url} x=${i} y=${o} width=${s} height=${a} opacity=${e.opacity} preserveAspectRatio="none" pointer-events=${d?"auto":"none"} data-bg="1" style=${d?"cursor:move":""} />
      ${d?j`<rect class="fp3d-bg-frame" x=${i} y=${o} width=${s} height=${a} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+s} cy=${o+a} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+s/2} y1=${o} x2=${i+s/2} y2=${o-30} />
            <circle cx=${i+s/2} cy=${o-30} r="16" class="fp3d-hit" />
            <circle cx=${i+s/2} cy=${o-30} r="8" />
            <path d="M${i+s/2-4} ${o-31}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>${this.renderBgRuler()}`}bgHandles(){var t;return!!((t=this.floor)!=null&&t.background)&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){var n;let t=(n=this._bgLevel)!=null&&n.length?this._bgLevel:this._bgRuler;if(!(t!=null&&t.length))return y;let e=t.map(i=>this.toScreen(i));return j`<g class="fp3d-bg-ruler">
      ${e.length===2?j`<line x1=${e[0][0]} y1=${e[0][1]} x2=${e[1][0]} y2=${e[1][1]} />`:y}
      ${e.map(([i,o])=>j`<circle cx=${i} cy=${o} r="6" />`)}
    </g>`}applyBgLevel(t,e){var h;let n=(h=this.floor)==null?void 0:h.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(e[0]-t[0],e[1]-t[1])<.05)return;let o=Math.atan2(e[1]-t[1],e[0]-t[0]),s=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(s)<1e-4)return;let a=n.width*i.aspect,l=[n.x+n.width/2,n.z+a/2],d=l[0]-t[0],c=l[1]-t[1],u=[t[0]+d*Math.cos(s)-c*Math.sin(s),t[1]+d*Math.sin(s)+c*Math.cos(s)],p=(n.rotation??0)+s*180/Math.PI;p=Math.round((((p+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:p,x:z(u[0]-n.width/2),z:z(u[1]-a/2)}})}applyBgRuler(t){let e=this.floor,n=e==null?void 0:e.background,i=this._bgRuler,o=n?this._images[n.image_id]:void 0;if(!n||!o||!i||i.length<2||!(t>0))return;let s=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(s<1e-4)return;let a=t/s,l=n.width*o.aspect,d=[n.x+n.width/2,n.z+l/2],c=i[0],u=[c[0]+a*(d[0]-c[0]),c[1]+a*(d[1]-c[1])],p=n.width*a,h=l*a;this.updateFloor({background:{...n,width:z(p),x:z(u[0]-p/2),z:z(u[1]-h/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(t,e,n){let i=t.width*n,o=t.x+t.width/2,s=t.z+i/2,a=-(t.rotation??0)*Math.PI/180,l=e[0]-o,d=e[1]-s;return[o+l*Math.cos(a)-d*Math.sin(a)-t.x,s+l*Math.sin(a)+d*Math.cos(a)-t.z]}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,o=t>=20?1:5,[s,a]=this.toWorld(0,0),[l,d]=this.toWorld(e,n),c=[],u=(f,m)=>{for(let v=Math.ceil(s/f)*f;v<=l;v+=f){let g=this.toScreen([v,0])[0];c.push(j`<line class=${m} x1=${g} y1="0" x2=${g} y2=${n} />`)}for(let v=Math.ceil(a/f)*f;v<=d;v+=f){let g=this.toScreen([0,v])[1];c.push(j`<line class=${m} x1="0" y1=${g} x2=${e} y2=${g} />`)}};i<o&&u(i,"fp3d-grid-minor"),u(o,"fp3d-grid-major");let[p,h]=this.toScreen([0,0]);return c.push(j`<circle class="fp3d-origin" cx=${p} cy=${h} r="3" />`),j`<g pointer-events="none">${c}</g>`}renderGhost(){var n;let t=((n=this._doc)==null?void 0:n.floors.findIndex(i=>i.id===this._floorId))??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?j`<g pointer-events="none">${e.rooms.map(i=>j`<polygon class="fp3d-ghost" points=${i.points.map(o=>this.toScreen(o).join(",")).join(" ")} />`)}</g>`:y}renderWalls(t){var n;let e=((n=this.floor)==null?void 0:n.height)??2.5;return j`<g pointer-events="none">${t.map(i=>{let o=i.height!==void 0&&i.height<e-.01,s=`fp3d-wall${i.exterior?" fp3d-wall-ext":""}${o?" fp3d-wall-low":""}`;return j`<polygon class=${s} points=${i.footprint.map(a=>this.toScreen(a).join(",")).join(" ")} />`})}</g>`}edgeParts(t,e){let n=this.floor;if(!n)return[0];let o=At(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(a=>a.room_id===t.id&&a.edge===e).map(a=>a.t0));return o.length?[...new Set(o)].sort((s,a)=>s-a):[0]}setEdgeSlope(t,e,n){this.isAdmin&&this.change((i,o)=>{let s=o.rooms.find(l=>l.id===t.id);if(!s)return;let a=(s.wall_slopes??[]).slice(0,s.points.length);for(;a.length<s.points.length;)a.push(null);a[e]=n?[Math.round(Math.max(.05,n[0])*1e3)/1e3,Math.round(Math.max(.05,n[1])*1e3)/1e3]:null,s.wall_slopes=a.every(l=>!l)?void 0:a})}setEdgeHeight(t,e,n,i){let o=this.floor;if(!o||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(t,e).length;this.change((d,c)=>{let u=c.rooms.find(m=>m.id===t.id);if(!u)return;let p=(u.wall_heights??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);let h=p[e],f=Array.isArray(h)?[...h]:new Array(l).fill(typeof h=="number"?h:null);for(;f.length<l;)f.push(null);f[i]=n,p[e]=f.every(m=>m===f[0])?f[0]:f,u.wall_heights=p.every(m=>m===null)?void 0:p});return}let a=At(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(l=>l.sources.some(d=>d.room_id===t.id&&d.edge===e)).flatMap(l=>l.sources);a.some(l=>l.room_id===t.id&&l.edge===e)||a.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((l,d)=>{for(let c of a){let u=d.rooms.find(h=>h.id===c.room_id);if(!u)continue;let p=(u.wall_heights??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[c.edge]=n,u.wall_heights=p.every(h=>h===null)?void 0:p}})}renderCameraDetections(t){if(!this.hass)return y;let e=this.hass,n=Hl(e,t),i=[...new Set(n.map(s=>jl(e,s)))],o=vt("camera_cockpit");return _`<p class="fp3d-sub fp3d-wide">
      ${n.length?_`${o?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:i.map(s=>this.t(`detect_${s}`)).join(", "),n:n.length})}`:this.t("camera_detect_none")}
    </p>`}splitEdge(t,e,n){if(!this.isAdmin)return;let i=t.points,o=Math.hypot(i[(e+1)%i.length][0]-i[e][0],i[(e+1)%i.length][1]-i[e][1]),s=this.edgeParts(t,e),a=n===void 0?0:s[n],l=n===void 0?o:s[n+1]??o;if(l-a<.4)return;let d=Math.round((a+l)/2*100)/100;this.change((c,u)=>{var m;let p=u.rooms.find(v=>v.id===t.id);if(!p)return;let h=(p.wall_splits??[]).slice(0,p.points.length);for(;h.length<p.points.length;)h.push(null);h[e]=[...h[e]??[],d].sort((v,g)=>v-g),p.wall_splits=h;let f=(m=p.wall_heights)==null?void 0:m[e];if(Array.isArray(f)){let v=n??0;f.splice(v+1,0,f[v]??null)}})}moveSplit(t,e,n,i){let o=t.points,s=Math.hypot(o[(e+1)%o.length][0]-o[e][0],o[(e+1)%o.length][1]-o[e][1]),a=this.edgeParts(t,e).filter(d=>Math.abs(d-n)>.001&&d>0),l=Math.max(.1,Math.min(s-.1,Math.round(i*100)/100));a.some(d=>Math.abs(d-l)<.1)&&(l=n),this.change((d,c)=>{var f;let u=c.rooms.find(m=>m.id===t.id),p=(f=u==null?void 0:u.wall_splits)==null?void 0:f[e];if(!p)return;let h=p.findIndex(m=>Math.abs(m-n)<.001);h>=0&&(p[h]=l),p.sort((m,v)=>m-v)})}joinSplit(t,e,n,i){this.change((o,s)=>{var c,u;let a=s.rooms.find(p=>p.id===t.id);if(!((c=a==null?void 0:a.wall_splits)!=null&&c[e]))return;let l=a.wall_splits[e].filter(p=>Math.abs(p-n)>.001);a.wall_splits[e]=l.length?l:null,a.wall_splits.every(p=>!p)&&(a.wall_splits=void 0);let d=(u=a.wall_heights)==null?void 0:u[e];Array.isArray(d)&&(d.splice(i,1),d.every(p=>p===d[0])&&(a.wall_heights[e]=d[0]??null))})}renderSplitMarks(t){let e=t.points;return j`${(t.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=e.length)return[];let o=e[i],s=e[(i+1)%e.length],a=Math.hypot(s[0]-o[0],s[1]-o[1])||1,l=(s[0]-o[0])/a,d=(s[1]-o[1])/a;return n.map(c=>{let[u,p]=this.toScreen([o[0]+l*c,o[1]+d*c]);return j`<line class="fp3d-split-mark" x1=${u-d*7} y1=${p+l*7} x2=${u+d*7} y2=${p-l*7} />`})})}`}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length,i=this._doc.settings,o=new Set;for(let a of At(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(a.exterior)for(let l of a.sources)l.room_id===t.id&&o.add(l.edge);let s=(a,l)=>this.change((d,c)=>{let u=c.rooms.find(h=>h.id===t.id);if(!u)return;let p=(u.wall_thickness??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[a]=l,u.wall_thickness=p.every(h=>h===null)?void 0:p});return _`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${t.points.flatMap((a,l)=>{var g,b;let d=t.points[(l+1)%n],c=Math.hypot(d[0]-a[0],d[1]-a[1]),u=((g=t.wall_heights)==null?void 0:g[l])??null,p=((b=t.wall_slopes)==null?void 0:b[l])??null,h=()=>this._edgeHi=l,f=()=>this._edgeHi=null,m=this.edgeParts(t,l);return(m.length>1?m.map(($,x)=>x):[void 0]).map($=>{var R,I,E;let x=$===void 0?Array.isArray(u)?u[0]??null:u:Array.isArray(u)?u[$]??null:u,P=$===void 0?c:(m[$+1]??c)-m[$],S=k=>this.setEdgeHeight(t,l,k,$);return _`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${x!==null?" fp3d-edge-low":""}"
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
            ${x===0?_`<span class="fp3d-muted">${this.t("wall_none")}</span>`:p&&$===void 0?_`${this.len(this.t("wall_slope_start",{n:l+1}),p[0],k=>this.setEdgeSlope(t,l,[k,p[1]]),.05,.05)}
                  ${this.len(this.t("wall_slope_end",{n:(l+1)%n+1}),p[1],k=>this.setEdgeSlope(t,l,[p[0],k]),.05,.05)}`:this.len(this.t("wall_height"),x??e,k=>S(k>=e-.005?null:Math.max(.05,k)),.05,.05)}
            ${this.isAdmin&&$===void 0&&x!==0?_`<button class="fp3d-btn" aria-pressed=${!!p} title=${this.t("wall_slope_hint")} @click=${()=>this.setEdgeSlope(t,l,p?null:[x??e,x??e])}>◢ ${this.t("wall_slope")}</button>`:y}
            ${this.isAdmin&&x!==null?_`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>S(null)}>↥</button>`:y}
            ${this.isAdmin&&x!==0?_`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>S(0)}>${this.t("wall_none")}</button>`:y}
            ${this.isAdmin&&P>=.4?_`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(t,l,$)}>✂</button>`:y}
            ${($===void 0||$===0)&&x!==0?_`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(t.id,l)}>▦</button>`:y}
            ${($===void 0||$===0)&&x!==0?_`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),((R=t.wall_thickness)==null?void 0:R[l])??(o.has(l)?i.wall_exterior:i.wall_interior),k=>{let w=o.has(l)?i.wall_exterior:i.wall_interior,A=Math.min(1.5,Math.max(.02,Math.round(k*1e3)/1e3));s(l,Math.abs(A-w)<5e-4?null:A)},.01,.02)}
                  ${this.isAdmin&&((I=t.wall_thickness)==null?void 0:I[l])!=null?_`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:y}</span
                >`:y}
            ${$!==void 0&&$>0&&(((E=t.wall_splits)==null?void 0:E[l])??[]).some(k=>Math.abs(k-m[$])<.001)?_`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),m[$],k=>this.moveSplit(t,l,m[$],k),.05,.1)}
                  ${this.isAdmin?_`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(t,l,m[$],$)}>⨉</button>`:y}</span
                >`:y}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!e||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return y;if(e.pool_shape){let n=zt(e.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return j`${i.map((o,s)=>{let[a,l]=this.toScreen(o);return j`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${e.id}:${s}`}><circle cx=${a} cy=${l} r="16" class="fp3d-hit" /><rect x=${a-5} y=${l-5} width="10" height="10" /></g>`})}`}return j`${e.points.map((n,i)=>{let[o,s]=this.toScreen(n);return j`<g class="fp3d-vertex" data-out-vertex=${`${e.id}:${i}`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`})}`}renderOutdoor(t){return j`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(te(e.points)),s=zt(e.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return j`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?j`<text x=${i} y=${o+4}>${this.t(`out_${e.type}`)}</text>`:y}
      </g>`})}</g>`}renderOutdoorZone(t){var i;let e=this.isAdmin,n=Object.values(((i=this.hass)==null?void 0:i.areas)??{}).sort((o,s)=>o.name.localeCompare(s.name));return _`<label class="fp3d-field fp3d-wide" title=${this.t("outdoor_area_hint")}
        >${this.t("area")}
        <select
          ?disabled=${!e}
          @change=${o=>{var l,d,c;let s=o.target.value||null,a=(t.name??"").trim()||(s?((c=(d=(l=this.hass)==null?void 0:l.areas)==null?void 0:d[s])==null?void 0:c.name)??null:null);this.updateOutdoor({area_id:s,name:s?a:t.name??null})}}
        >
          <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
          ${n.map(o=>_`<option value=${o.area_id} ?selected=${o.area_id===t.area_id}>${o.name}</option>`)}
        </select></label
      >
      ${t.area_id?_`<label class="fp3d-field fp3d-wide"
            >${this.t("room_name")}
            <input .value=${t.name??""} ?disabled=${!e} @change=${o=>this.updateOutdoor({name:o.target.value.trim()||null})}
          /></label>`:y}
      <p class="fp3d-sub fp3d-wide">${this.t("outdoor_area_hint")}</p>
      ${t.area_id?this.renderOutdoorDevices(t):y}`}renderOutdoorDevices(t){var h,f;let e=this.hass,n=this.floor,i=n?gi(n).find(m=>m.id===t.id):void 0;if(!e||!n||!i)return y;let o=i.area_id?(f=(h=e.areas)==null?void 0:h[i.area_id])==null?void 0:f.name:void 0,s=zi(e,Ee(e,i.area_id).filter(m=>Ge(at(m)))),a=new Set([...n.placements.filter(m=>tt([m.x,m.z],i.points)).map(m=>m.entity_id),...n.furniture.filter(m=>Kt(m.type)&&m.entity&&tt([m.x,m.z],i.points)).map(m=>m.entity)]),l=s.map(m=>m.primary).filter(m=>!a.has(m)),d=new Set(t.panel??[]),c=new Set(t.hidden??[]),u=new Set(t.no_state??[]),p=(m,v)=>m.has(v)?[...m].filter(g=>g!==v):[...m,v];return s.length?_`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("devices")}</h4>
      ${s.map(m=>_`<div class="fp3d-row fp3d-dev-row ${c.has(m.primary)?"fp3d-dev-hidden":""}">
          <button class="fp3d-dev-name ${a.has(m.primary)?"":"fp3d-muted"}" ?disabled=${!a.has(m.primary)} @click=${()=>this.selectItem("device",m.primary)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d=${Bn(at(m.primary))} />
            </svg>
            <span>${_t(e,m.primary,o)}</span>
          </button>
          ${this.isAdmin?_`<button
                  class="fp3d-pin ${c.has(m.primary)?"fp3d-pin-on":""}"
                  aria-pressed=${c.has(m.primary)}
                  title=${this.t(c.has(m.primary)?"panel_unhide":"panel_hide")}
                  @click=${()=>this.updateOutdoor({hidden:p(c,m.primary)})}
                >
                  ${c.has(m.primary)?"\u{1F648}":"\u{1F441}"}
                </button>
                ${c.has(m.primary)?y:_`<button
                      class="fp3d-pin ${u.has(m.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${u.has(m.primary)}
                      title=${this.t(u.has(m.primary)?"panel_state_show":"panel_state_hide")}
                      @click=${()=>this.updateOutdoor({no_state:p(u,m.primary)})}
                    >
                      ${u.has(m.primary)?"\u2205":"Aa"}
                    </button>`}
                ${a.has(m.primary)?y:_`<button
                      class="fp3d-pin ${d.has(m.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${d.has(m.primary)}
                      title=${this.t(d.has(m.primary)?"panel_unpin":"panel_pin")}
                      @click=${()=>this.updateOutdoor({panel:p(d,m.primary)})}
                    >
                      ${d.has(m.primary)?"\u2605":"\u2606"}
                    </button>`}`:y}
          ${this.isAdmin?a.has(m.primary)?_`<button class="fp3d-link" @click=${()=>this.removeDevice(m.primary)}>${this.t("devices_remove")}</button>`:_`<button class="fp3d-link" @click=${()=>this.placeDevices([m.primary],i)}>${this.t("devices_place")}</button>`:y}
        </div>`)}
      ${this.isAdmin&&l.length>1?_`<button class="fp3d-link fp3d-place-all" @click=${()=>this.placeDevices(l,i)}>${this.t("devices_place_all_n",{n:l.length})}</button>`:y}
    </div>`:_`<p class="fp3d-sub fp3d-wide">${this.t("devices_none")}</p>`}renderOutdoorForm(t){let e=this.isAdmin,n=Ei(t.points),i=zt(t.points),o=(s,a)=>{let{x0:l,z0:d,x1:c,z1:u}=i;s==="x"&&([l,c]=[a,a+(c-l)]),s==="z"&&([d,u]=[a,a+(u-d)]),s==="w"&&(c=l+Math.max(.1,a)),s==="d"&&(u=d+Math.max(.1,a)),this.updateOutdoor({points:[[l,d],[c,d],[c,u],[l,u]].map(([p,h])=>[z(p),z(h)])})};return _`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${$o.map(s=>_`<option value=${s} ?selected=${s===t.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${un(t.type)?y:this.renderOutdoorZone(t)}
        ${n?_`${this.len(this.t("x"),i.x0,s=>o("x",s))} ${this.len(this.t("z"),i.z0,s=>o("z",s))}
            ${this.len(this.t("width"),i.x1-i.x0,s=>o("w",s),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,s=>o("d",s),.01,.1)}`:y}
        ${un(t.type)?this.len(this.t("outdoor_height"),t.height??wo[t.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,z(s)))}),.05,.1):t.type==="balcony"?this.len(this.t("balcony_rail"),t.height??1,s=>this.updateOutdoor({height:Math.min(2,Math.max(.4,z(s)))}),.05,.4):y}
        ${this.len(this.t("outdoor_offset"),t.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,z(s)))||null}),.05)}
        ${t.type!=="pool"?_`${this.len(this.t("outdoor_slope"),t.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,z(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!e} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${sa.map(s=>_`<option value=${s} ?selected=${s===(t.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:y}
        ${t.type==="pool"?this.renderPoolShape(t):y}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${t.outline!==!1} ?disabled=${!e} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${t.type==="fence"||t.type==="pergola"?_`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:y}
        ${t.type==="pergola"?_`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.bracing} ?disabled=${!e} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!t.cut} ?disabled=${!e} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${t.slope?_`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:y}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${this.renderModuleFields(t)}
      ${e?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:y}
    </section>`}openWallView(t,e,n=null){this._wallView={roomId:t,edge:e},this._wallSel=n,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallFrame=null,this.wallDrag=null}wallSelection(){var e,n;if(this._wallMulti.length)return this._wallMulti;let t=this._wallSel?(e=this.floor)==null?void 0:e.furniture.find(i=>i.id===this._wallSel):void 0;return t?t.group&&!this._wallSingle?(((n=this.floor)==null?void 0:n.furniture)??[]).filter(i=>i.group===t.group).map(i=>i.id):[t.id]:[]}wallToggle(t){let e=this.wallSelection(),n=this.withGroups([t]),i=e.includes(t)?e.filter(o=>!n.includes(o)):[...new Set([...e,...n])];this.wallChoose(i,t)}wallChoose(t,e=t[0]??null){this._wallSingle=!1,this._wallSel=t.length?e&&t.includes(e)?e:t[0]:null,this._wallMulti=[];let n=this.wallSelection();t.length>1&&!(t.length===n.length&&t.every(i=>n.includes(i)))&&(this._wallMulti=t),this._wallGap=null}moveSetOnWall(t,e,n,i,o=this._doc,s=!0){let a=new Set(e);this.change((l,d)=>{for(let c of d.furniture)a.has(c.id)&&(Object.assign(c,Ti(t,c,n)),i!==null&&ce(c)&&(c.mount_y=Math.round(Math.min(Zi,Math.max(0,Tt(d,c)+i))*1e3)/1e3))},o,s)}wallGapAt(t,e,n,i,o){let s=o<1.2,a=t.length,l=[...Fe(t,e,n).filter(u=>s?u.y0<1:u.y1>1.2).map(u=>[u.s0,u.s1]),..._n(t,e).filter(u=>s?u.y0<.9:u.y1>1.2).map(u=>[u.s0,u.s1])];if(l.some(([u,p])=>i>u&&i<p))return null;let d=Math.max(0,...l.filter(([,u])=>u<=i).map(([,u])=>u)),c=Math.min(a,...l.filter(([u])=>u>=i).map(([u])=>u));return c-d>=.1?{s0:Math.round(d*1e3)/1e3,s1:Math.round(c*1e3)/1e3,low:s}:null}openWallViewFor(t){let e=this.floor;if(!e)return;let n=e.rooms.find(s=>s.points.length>=3&&tt([t.x,t.z],s.points));if(!n)return;let i=-1,o=1/0;n.points.forEach((s,a)=>{let l=n.points[(a+1)%n.points.length],d=Math.hypot(l[0]-s[0],l[1]-s[1])||1,c=Math.max(0,Math.min(1,((t.x-s[0])*(l[0]-s[0])+(t.z-s[1])*(l[1]-s[1]))/(d*d))),u=Math.hypot(t.x-(s[0]+(l[0]-s[0])*c),t.z-(s[1]+(l[1]-s[1])*c));u<o&&(o=u,i=a)}),i>=0&&this.openWallView(n.id,i,t.id)}openRoomWalls(t){let e=this.floor;if(!e)return;let n=0,i=-1;t.points.forEach((o,s)=>{let a=Fe(Ie(t,s),e,t).length;a>i&&(i=a,n=s)}),this.openWallView(t.id,n)}setWallView3d(t){this._wallView3d=t,this.wall3dKey="";try{localStorage.setItem("neonplan3d.wall3d",t?"1":"0")}catch{}}setupWall3d(t,e,n){let i=`${e.id}|${n}`;if(this.wall3dKey===i&&this.wall3dEl===t)return;let o=this.wall3dEl!==t;this.wall3dKey=i,this.wall3dEl=t,o&&t.addEventListener("pointerdown",s=>this.runDown3d(s),{capture:!0}),(async()=>{var h;let s;for(let f=0;f<120&&!(s=t.viewer);f++)await new Promise(m=>setTimeout(m,50));o&&await new Promise(f=>setTimeout(f,250));let a=this.floor;if(!s||!a||this.wall3dKey!==i)return;if(!s.__npWall){s.__npWall=!0,s.updateWalls=function(){for(let m of this.floors)m.mask.standing.value=65535,m.mask.glass.value=0},s.labels.style.display="none";let f=new CSSStyleSheet;f.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),t.shadowRoot&&(t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,f]),s.camera.fov=58,s.camera.updateProjectionMatrix(),s.controls.minRadius=.6,s.controls.leftDragTurns=!1}let l=Ie(e,n),d=Math.max(1.5,...e.points.map(f=>gt(l,f).d)),c=ee(l,l.length/2,0),u=a.elevation+(((h=s.floorMap.get(a.id))==null?void 0:h.y)??0)+1.15;s.controls.maxRadius=Math.max(1.4,d-.25);let p=s.getView();p.target.set(c[0],u,c[1]),s.flyTo({...p,radius:Math.max(1.2,Math.min(d*.8,d-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},o?0:650),s.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let t=()=>{var h,f;this.liftRaf=0;let e=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!(e!=null&&e.isConnected)||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(t),!n))return;let i=this.floor,o=this._wallSel?i==null?void 0:i.furniture.find(m=>m.id===this._wallSel):void 0,s=e.viewer;if(!o||!i||!s||!ce(o)||o.locked){n.hidden=!0;return}let a=Tt(i,o),l=i.elevation+(((h=s.floorMap.get(i.id))==null?void 0:h.y)??0)+a+o.h,d=s.camera.position.clone().set(o.x,l+.12,o.z).project(s.camera);if(d.z>1){n.hidden=!0;return}n.hidden=!1;let c=e.getBoundingClientRect(),u=((f=n.offsetParent)==null?void 0:f.getBoundingClientRect())??c;n.style.transform=`translate(${c.left-u.left+(d.x+1)/2*c.width}px, ${c.top-u.top+(1-d.y)/2*c.height}px)`;let p=n.querySelector("b");p&&(p.textContent=this.m(Math.round(a*100)/100,2))};this.liftRaf=requestAnimationFrame(t)}liftDown(t){let e=this.floor,n=this._wallSel?e==null?void 0:e.furniture.find(c=>c.id===this._wallSel):void 0,i=this.wall3dEl,o=i==null?void 0:i.viewer;if(!e||!n||!o||!this.isAdmin)return;t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId);let s=Math.hypot(o.camera.position.x-n.x,o.camera.position.z-n.z)||1,a=this.wall3dEl.clientHeight||1,l=e.rooms.find(c=>c.points.length>=3&&tt([n.x,n.z],c.points)),d=Math.max(e.height,(l==null?void 0:l.ceiling_height)??0);this.lift={id:n.id,y:Tt(e,n),startY:t.clientY,perPx:2*s*Math.tan(o.camera.fov*Math.PI/360)/a,base:this._doc,top:Math.max(0,d-n.h),moved:!1}}liftMove(t){var s;let e=this.lift,n=this._wallView?(s=this.floor)==null?void 0:s.rooms.find(a=>a.id===this._wallView.roomId):void 0;if(!e||!n)return;let i=(e.startY-t.clientY)*e.perPx;if(!e.moved&&Math.abs(t.clientY-e.startY)<3)return;e.moved=!0;let o=Math.min(e.top,Math.max(0,Math.round((e.y+i)*100)/100));this.moveOnWall(Ie(n,this._wallView.edge),e.id,0,o,e.base,!1)}liftUp(){let t=this.lift;this.lift=null,t!=null&&t.moved&&this.pushHistory(t.base)}wallPickTip=[0,0];toggleWallPick(t){var i;let e=(i=t.closest(".fp3d-toolbar"))==null?void 0:i.getBoundingClientRect(),n=t.getBoundingClientRect();this.wallPickTip=e?[n.left-e.left+n.width/2,n.bottom-e.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(t){let e=this.floor;if(!e)return;let n=null;for(let i of e.rooms){if(i.points.length<3)continue;let o=tt(t,i.points)?-.25:0;i.points.forEach((s,a)=>{let l=i.points[(a+1)%i.points.length],d=(l[0]-s[0])**2+(l[1]-s[1])**2||1,c=Math.max(0,Math.min(1,((t[0]-s[0])*(l[0]-s[0])+(t[1]-s[1])*(l[1]-s[1]))/d)),u=Math.hypot(t[0]-(s[0]+(l[0]-s[0])*c),t[1]-(s[1]+(l[1]-s[1])*c));u<.6&&(!n||u+o<n.d)&&(n={room:i,edge:a,d:u+o})})}if(!n){let i=e.rooms.find(o=>o.points.length>=3&&tt(t,o.points));if(!i)return;this._wallPick=!1,this.openRoomWalls(i),this.techPick&&this.enterTech();return}this._wallPick=!1,this.openWallView(n.room.id,n.edge),this.techPick&&this.enterTech()}techDoc3d(){var n;let t=this._doc3d;if(((n=this.techDocCache)==null?void 0:n.src)===t)return this.techDocCache.doc;let e={...t,floors:t.floors.map(i=>({...i,furniture:i.furniture.filter(o=>Pt.includes(o.type))}))};return this.techDocCache={src:t,doc:e},e}techDocCache=null;enterTech(){this.techPick=!1,this._techMode=!0,this._wallSel=null,this._wallMulti=[],this._runSel=null,this._runDraft=null,this._feedKind=null,this._runMode="draw"}turnOnWall(t,e){let n=this._doc.settings.wall_interior;this.change((i,o)=>{let s=o.furniture.find(d=>d.id===t);if(!s)return;s.rotation=Math.round((e%360+360)%360);let[a,l]=Jo(o,s,s.x,s.z,n,.6);Object.assign(s,{x:a,z:l})})}moveFromWall(t,e,n){this.change((i,o)=>{let s=o.furniture.find(a=>a.id===e);s&&(s.x=Math.round((s.x+t.n[0]*n)*1e3)/1e3,s.z=Math.round((s.z+t.n[1]*n)*1e3)/1e3)})}moveOnWall(t,e,n,i,o=this._doc,s=!0){this.change((a,l)=>{let d=l.furniture.find(c=>c.id===e);d&&(Object.assign(d,Ti(t,d,n)),i!==null&&(d.mount_y=Math.round(Math.min(Zi,Math.max(0,i))*1e3)/1e3))},o,s)}alongAxis(t,e){let n=this.wallTurn(t,e)*Math.PI/180;return Math.abs(Math.sin(n))<.05?"w":Math.abs(Math.cos(n))<.05?"d":null}resizeOnWall(t,e,n,i,o,s,a=this._doc,l=!0){this.change((d,c)=>{let u=c.furniture.find(h=>h.id===e);if(!u)return;let p=this.alongAxis(t,u);if(n!==null&&i!==null&&p&&i-n>=.05){let h=Wt(u).map(m=>gt(t,m).s),f=(Math.min(...h)+Math.max(...h))/2;u[p]=z(i-n),Object.assign(u,Ti(t,u,(n+i)/2-f))}if(o!==null||s!==null){let h=Tt(c,u),f=o??h,m=s??h+u.h;if(m-f<.03)return;u.h=z(m-f),o!==null&&ce(u)&&(u.mount_y=z(Math.max(0,f)))}},a,l)}wallTurn(t,e){let n=Math.atan2(-t.n[0],t.n[1])*180/Math.PI;return((e.rotation-n)%360+360)%360}wallPicKey(t,e){return`${e.type}|${e.w}|${e.d}|${e.h}|${e.variant??""}|${Math.round(this.wallTurn(t,e))}`}async askWallPics(t,e){let n=e.filter(i=>!this.wallPicsAsked.has(this.wallPicKey(t,i)));if(n.length){for(let i of n)this.wallPicsAsked.add(this.wallPicKey(t,i));try{let i=await Zn();for(let o of n){let s=i.furnitureFront({type:o.type,w:o.w,d:o.d,h:o.h,variant:o.variant,lamp:On[o.type]??null},this.wallTurn(t,o),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(t,o),s)}}catch{}this._wallPicTick++}}renderWallView(){var Et,Ft;let t=this._wallView,e=this.floor,n=t?e==null?void 0:e.rooms.find(F=>F.id===t.roomId):void 0;if(!t||!e||!n||t.edge>=n.points.length)return y;let i=n.points.length,o=Ie(n,t.edge),s=o.length,a=Math.max(e.height,n.ceiling_height??0),l=this._techMode?Fe(o,e,n,1.6).filter(F=>{var L;return Pt.includes(((L=e.furniture.find(W=>W.id===F.id))==null?void 0:L.type)??"")}):Fe(o,e,n),d=_n(o,e),c=F=>o.rightward?F:s-F,u=(F,L)=>[Math.min(c(F),c(L)),Math.abs(L-F)],p=F=>a-F,h=this.isAdmin,f=this._wallSel?e.furniture.find(F=>F.id===this._wallSel):void 0,m=f?l.find(F=>F.id===f.id)??(()=>{let F=Wt(f).map(W=>gt(o,W)),L=Tt(e,f);return{kind:"furniture",id:f.id,s0:Math.min(...F.map(W=>W.s)),s1:Math.max(...F.map(W=>W.s)),y0:L,y1:L+f.h,d:Math.min(...F.map(W=>W.d))}})():null,v=!!f&&ce(f),g=this.wallSelection(),b=g.length>1,$=l.filter(F=>g.includes(F.id)),x=$.length?{s0:Math.min(...$.map(F=>F.s0)),s1:Math.max(...$.map(F=>F.s1)),y0:Math.min(...$.map(F=>F.y0)),y1:Math.max(...$.map(F=>F.y1))}:null,P=F=>this.m(F,2),S=F=>{let L=F.currentTarget.closest("svg"),W=L.createSVGPoint();return W.x=F.clientX,W.y=F.clientY,W.matrixTransform(L.getScreenCTM().inverse())},R=F=>[0,s,...l.filter(L=>!F.includes(L.id)).flatMap(L=>[L.s0,L.s1]),...d.flatMap(L=>[L.s0,L.s1])],I=(F,L)=>{if(!h)return;if(Q&&this._runMode){this.techPress=Q.pt(F),this.runDown(F,Q);return}if(F.stopPropagation(),this._runSel=null,F.shiftKey||this._multiMode){this.wallToggle(L);return}(!this.wallSelection().includes(L)||this._wallSingle)&&this.wallChoose([L]);let W=this.wallSelection(),V=S(F);F.currentTarget.closest("svg").setPointerCapture(F.pointerId);let N=l.filter(J=>W.includes(J.id));if(W.length>1&&W.some(J=>this.isFixedItem("furniture",J)))return;if(W.length>1&&N.length){let J=Math.min(...N.map(et=>et.s0));this.wallDrag={id:L,ids:W,w:Math.max(...N.map(et=>et.s1))-J,x:V.x,y:V.y,base:this._doc,s0:J,y0:0,lift:N.every(et=>{let rt=e.furniture.find(ht=>ht.id===et.id);return!!rt&&ce(rt)}),moved:!1};return}let nt=l.find(J=>J.id===L),K=e.furniture.find(J=>J.id===L);this.wallDrag={id:L,x:V.x,y:V.y,base:this._doc,s0:nt.s0,y0:nt.y0,lift:!!K&&ce(K),moved:!1}},E=F=>{if(!h||this._runMode)return;let L=S(F);if(F.shiftKey||this._multiMode){F.currentTarget.closest("svg").setPointerCapture(F.pointerId),this._wallFrame={x0:L.x,y0:L.y,x1:L.x,y1:L.y};return}this._wallSel=null,this._wallMulti=[],this._wallSingle=!1;let W=o.rightward?L.x:s-L.x;this._wallGap=W>=0&&W<=s&&L.y>=0&&L.y<=a?this.wallGapAt(o,e,n,W,a-L.y):null},k=F=>{let L=this.wallResize;if(L){let ct=S(F);L.moved=!0;let Ot=R([L.id]).map(kt=>c(kt)),Ct=kt=>{if(kt=Math.round(kt*100)/100,!F.altKey){for(let Vt of Ot)if(Math.abs(kt-Vt)<.04)return Vt}return kt};if(L.side==="l"||L.side==="r"){let kt=L.side==="l"?Math.min(Ct(ct.x),L.x1-.1):L.x0,Vt=L.side==="r"?Math.max(Ct(ct.x),L.x0+.1):L.x1,[we,eo]=o.rightward?[kt,Vt]:[s-Vt,s-kt];this.resizeOnWall(o,L.id,we,eo,null,null,L.base,!1)}else{let kt=Math.round((a-ct.y)*100)/100;L.side==="t"?this.resizeOnWall(o,L.id,null,null,null,Math.max(L.y0+.05,Math.min(a,kt)),L.base,!1):this.resizeOnWall(o,L.id,null,null,Math.max(0,Math.min(L.y1-.05,kt)),null,L.base,!1)}return}let W=this._wallFrame;if(W){let ct=S(F);this._wallFrame={...W,x1:ct.x,y1:ct.y};return}let V=this.wallDrag;if(!V)return;let N=S(F),nt=N.x-V.x,K=V.y-N.y;if(!V.moved&&Math.hypot(nt,K)<.02)return;V.moved=!0;let J=l.find(ct=>ct.id===V.id),et=V.ids?V.w??0:J?J.s1-J.s0:0,rt=V.s0+(o.rightward?nt:-nt);if(rt=Math.round(rt*100)/100,!F.altKey)for(let ct of R(V.ids??[V.id]))Math.abs(rt-ct)<.04?rt=ct:Math.abs(rt+et-ct)<.04&&(rt=ct-et);if(V.ids){this.moveSetOnWall(o,V.ids,rt-V.s0,V.lift?Math.round(K*100)/100:null,V.base,!1);return}let ht=V.lift?Math.round((V.y0+K)*100)/100:null;this.moveOnWall(o,V.id,rt-V.s0,ht,V.base,!1)},w=()=>{let F=this.wallResize;if(F){this.wallResize=null,F.moved&&this.pushHistory(F.base);return}let L=this._wallFrame;if(L){this._wallFrame=null;let[V,N]=[Math.min(L.x0,L.x1),Math.max(L.x0,L.x1)],[nt,K]=[Math.min(L.y0,L.y1),Math.max(L.y0,L.y1)],J=l.filter(et=>{let[rt,ht]=u(et.s0,et.s1),ct=rt+ht/2,Ot=p((et.y0+et.y1)/2);return ct>=V&&ct<=N&&Ot>=nt&&Ot<=K}).map(et=>et.id);J.length&&this.wallChoose([...new Set([...this.wallSelection(),...this.withGroups(J)])]);return}let W=this.wallDrag;this.wallDrag=null,W!=null&&W.moved&&this.pushHistory(W.base)},A=F=>{if(this._runMode&&(F.key==="Escape"||F.key==="Enter")){F.preventDefault(),F.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(F.key==="Escape"){this._wallView=null;return}if((F.key==="Delete"||F.key==="Backspace")&&h&&Q&&this._runSel&&!g.length&&!F.target.closest("input, select, textarea")){F.preventDefault();let nt=this._runSel.pipe;this.changePool(Q.pool.id,K=>K.pipes=(K.pipes??[]).filter(J=>J.id!==nt)),this._runSel=null;return}if((F.key==="Delete"||F.key==="Backspace")&&h&&g.length&&!F.target.closest("input, select, textarea")){F.preventDefault(),this.deleteOnWall(g);return}if(!m&&(F.key==="ArrowLeft"||F.key==="ArrowRight")){F.preventDefault(),H(F.key==="ArrowLeft"?O:C);return}if(!m||!h||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(F.key)||F.target.closest("input, select, textarea"))return;F.preventDefault();let L=F.shiftKey?.1:.01,W=F.key==="ArrowRight"?L:F.key==="ArrowLeft"?-L:0,V=o.rightward?W:-W,N=F.key==="ArrowUp"?L:F.key==="ArrowDown"?-L:0;if(b)return this.moveSetOnWall(o,g,V,N||null);this.moveOnWall(o,m.id,V,v&&N?m.y0+N:null)},M=b&&x?x:m,T=M?(()=>{let F=M,[L,W]=u(F.s0,F.s1),V=p(F.y0),N=Math.min(a+.25,p(0)+.25);return j`<g class="fp3d-wv-dims">
            ${L>.03?j`<line x1="0" y1=${N} x2=${L} y2=${N} /><text x=${L/2} y=${N-.05}>${P(L)}</text>`:y}
            ${s-L-W>.03?j`<line x1=${L+W} y1=${N} x2=${s} y2=${N} /><text x=${L+W+(s-L-W)/2} y=${N-.05}>${P(s-L-W)}</text>`:y}
            ${F.y0>.03?j`<line x1=${L+W/2} y1=${V} x2=${L+W/2} y2=${a} /><text x=${L+W/2+.05} y=${(V+a)/2} class="fp3d-wv-up">${P(F.y0)}</text>`:y}
          </g>`})():y,C=(t.edge+(o.rightward?1:-1)+i)%i,O=(t.edge+(o.rightward?-1:1)+i)%i,D=F=>this.t("wall_n",{a:F+1,b:(F+1)%i+1}),H=F=>this.openWallView(n.id,F);this._wallPicTick,this.askWallPics(o,l.map(F=>e.furniture.find(L=>L.id===F.id)).filter(F=>!!F));let U=`${n.id}:${t.edge}`,G=((Et=this.wvZoom)==null?void 0:Et.key)===U?this.wvZoom:null,Z=s+1,Y=a+.9,it=(F,L,W)=>{let V=Math.min(8,Math.max(1,F)),N=Z/V,nt=Y/V;return{k:V,w:N,h:nt,x0:Math.min(-.5+Z-N,Math.max(-.5,L)),y0:Math.min(-.35+Y-nt,Math.max(-.35,W))}},q=it((G==null?void 0:G.k)??1,(G==null?void 0:G.x0)??-.5,(G==null?void 0:G.y0)??-.35),lt=(F,L,W)=>{let V=it(F,L,W);this.wvZoom=V.k<=1.001?null:{key:U,k:V.k,x0:V.x0,y0:V.y0},this.requestUpdate()},It=(F,L,W)=>{let V=Math.min(8,Math.max(1,W));lt(V,F-(F-q.x0)*q.k/V,L-(L-q.y0)*q.k/V)},Zt=F=>{let L=this.wvPinch,[W,V]=[...this.wvTouch.values()],N=Math.hypot(W.x-V.x,W.y-V.y),nt=(W.x+V.x)/2,K=(W.y+V.y)/2,J=F.getBoundingClientRect(),et=Z/L.k,rt=Y/L.k,ht=Math.min(J.width/et,J.height/rt),ct=J.left+(J.width-et*ht)/2,Ot=J.top+(J.height-rt*ht)/2,Ct=L.x0+(L.mx-ct)/ht,kt=L.y0+(L.my-Ot)/ht,Vt=Math.min(8,Math.max(1,L.k*N/Math.max(1,L.d))),we=ht*(Vt/L.k),eo=J.left+(J.width-Z/Vt*we)/2,vd=J.top+(J.height-Y/Vt*we)/2;lt(Vt,Ct-(nt-eo)/we,kt-(K-vd)/we)};this.wvScale=1/Math.sqrt(q.k);let B=Math.max(.09,Math.min(.16,s/40))*this.wvScale,pt=this.canLayRuns?this.runPool:void 0,Q=this.runCtx3d=pt?{frame:o,floor:e,room:n,key:`${n.id}|${t.edge}`,L:s,H:a,gap:(de(e,n.id,o.a,o.b)?this._doc.settings.wall_interior/2:0)+Ds,runs:_l(o,(((Ft=pt.pool)==null?void 0:Ft.pipes)??[]).filter(F=>F.floor_id===e.id),ft(this._doc,e,pt)),pool:pt,pt:F=>{let L=S(F);return{s:o.rightward?L.x:s-L.x,y:a-L.y}}}:null;return _`<div class="fp3d-wv-veil" @click=${F=>F.target===F.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${A}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${D(O)}`} @click=${()=>H(O)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:t.edge+1,b:(t.edge+1)%i+1})} · ${this.m(s,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${D(C)}`} @click=${()=>H(C)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${h&&this.pipeRules&&this.runPool?_`<button class="fp3d-btn ${this._techMode?"fp3d-primary":""}" title=${this.t("tech_mode_hint")} @click=${()=>{this._techMode?(this._techMode=!1,this._runDraft=null,this._feedKind=null,this._runMode=null):this.enterTech()}}>🛠 ${this.t("tech_mode")}</button>`:y}
          ${Q&&h&&!this._techMode?_`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:y}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(o,n,Q)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${D(O)}`} @click=${()=>H(O)}>‹<small>${D(O)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${D(C)}`} @click=${()=>H(C)}>›<small>${D(C)}</small></button>
          ${this._wallView3d?y:_`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${()=>It(q.x0+q.w/2,q.y0+q.h/2,q.k*1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${q.k<=1.001} @click=${()=>It(q.x0+q.w/2,q.y0+q.h/2,q.k/1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${q.k<=1.001} @click=${()=>lt(1,-.5,-.35)}>⤢</button>
                ${q.k>1.001?_`<button class="fp3d-btn" aria-label="←" @click=${()=>lt(q.k,q.x0-q.w*.3,q.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${()=>lt(q.k,q.x0+q.w*.3,q.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${()=>lt(q.k,q.x0,q.y0-q.h*.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${()=>lt(q.k,q.x0,q.y0+q.h*.3)}>↓</button>`:y}
              </div>`}
        ${this._wallView3d?_`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${vr(F=>F&&this.setupWall3d(F,n,t.edge))}
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
              @furniture-select=${F=>{let L=F.detail.id;L&&(this.shiftHeld||this._multiMode)?this.wallToggle(L):L?!this.wallSelection().includes(L)||this._wallSingle?this.wallChoose([L]):this._wallSel=L:this.wallChoose([])}}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${F=>this.liftDown(F)} @pointermove=${F=>this.liftMove(F)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:_`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""} ${this._runMode==="valve"||this._runMode==="sight"?"fp3d-wv-fitmode":""} ${this._runMode==="erase"?"fp3d-wv-fitmode fp3d-wv-erase":""}"
          viewBox="${q.x0} ${q.y0} ${q.w} ${q.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${F=>{F.preventDefault();let L=F.currentTarget,W=L.createSVGPoint();W.x=F.clientX,W.y=F.clientY;let V=W.matrixTransform(L.getScreenCTM().inverse());It(V.x,V.y,q.k*Math.exp(-F.deltaY*.0015))}}
          @pointerdown=${F=>{if(F.pointerType==="touch"){if(this.wvTouch.set(F.pointerId,{x:F.clientX,y:F.clientY}),this.wvTouch.size===2){let[L,W]=[...this.wvTouch.values()];this.wvPinch={d:Math.hypot(L.x-W.x,L.y-W.y),mx:(L.x+W.x)/2,my:(L.y+W.y)/2,k:q.k,x0:q.x0,y0:q.y0},this.wvTap=null,this.techPress=null,w(),this.runPointUp(),this.fitDrag=null,this.jointDrag=null;return}if(this.wvPinch)return;if(Q&&this._runMode&&this.isAdmin){F.stopPropagation();let L=Q.pt(F);this.wvTap=L,this.techPress=L;return}}Q&&this._runMode?(this.techPress=Q.pt(F),this.runDown(F,Q)):this._runSel?this._runSel=null:E(F)}}
          @pointermove=${F=>{if(this.wvTouch.has(F.pointerId)&&this.wvTouch.set(F.pointerId,{x:F.clientX,y:F.clientY}),this.wvPinch){this.wvTouch.size===2&&Zt(F.currentTarget);return}if(k(F),Q&&this.jointDrag)this.jointMove(F,Q);else if(Q&&this.fitDrag)this.fittingMove(F,Q);else if(Q&&this.runDrag)this.runPointMove(F,Q);else if(Q&&this._runMode==="draw"&&this.techPress&&this.isAdmin&&(F.buttons&1||F.pointerType==="touch")){let L=Q.pt(F),W=this.techPress;if(!this._runDraft&&!this.techStroke&&Math.hypot(L.s-W.s,L.y-W.y)>.02&&(this.wvTap=null,this.runAt(Q,W.s,W.y,!1,1,null)),this._runDraft&&!this.wvTap){let V=this.techStroke??=[this.techPress],N=V[V.length-1];Math.hypot(L.s-N.s,L.y-N.y)>.02&&V.push(L),this.runHover=[L.s,L.y],this.requestUpdate()}}else if(Q&&this._runMode==="draw"&&this._runDraft){let L=Q.pt(F);this.runHover=[L.s,L.y],this.requestUpdate()}}}
          @pointerup=${F=>{if(this.wvTouch.delete(F.pointerId),this.wvPinch){this.wvTouch.size||(this.wvPinch=null);return}let L=this.wvTap;this.wvTap=null;let W=this.techStroke;this.techStroke=null;let V=W?W.reduce((K,J,et)=>et?K+Math.hypot(J.s-W[et-1].s,J.y-W[et-1].y):0,0):0,N=Q&&this._techMode&&this._runMode==="draw";if(W&&V>.12&&Q&&this._runMode==="draw"&&this._runDraft)this.techPress=null,this.runHover=null,this.endStroke(Q,W,Q.pt(F));else if(N){let K=this.techPress;if(this.techPress=null,this._runDraft=null,this.runHover=null,K){let J=this.runPick(Q,K.s,K.y,!0);this._runSel=J.pipe?{pipe:J.pipe.id,pt:null}:null}}else L&&Q&&this._runMode&&this.runAt(Q,L.s,L.y,!1,1,null),this.techPress=null;w(),this.runPointUp(),this.fittingUp(Q);let nt=this.jointDrag;this.jointDrag=null,nt!=null&&nt.moved?this.pushHistory(nt.base):nt&&Q&&this.openCard(Q.pool.id,`joint:${nt.id}`)}}
          @pointercancel=${F=>{this.wvTouch.delete(F.pointerId),this.wvTouch.size||(this.wvPinch=null),this.wvTap=null,this.techPress=null,this.techStroke=null,w(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${B}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${s} height=${a} />
          ${Array.from({length:Math.floor(a/.5)},(F,L)=>j`<line class="fp3d-wv-grid" x1="0" x2=${s} y1=${p((L+1)*.5)} y2=${p((L+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${p((L+1)*.5)+.03}>${((L+1)*.5).toFixed(1)}</text>`)}
          ${d.map(F=>{let[L,W]=u(F.s0,F.s1),V=e.openings.find(nt=>nt.id===F.id),N=(V==null?void 0:V.type)==="window"?this.t("opening_window"):(V==null?void 0:V.type)==="garage"?this.t("opening_garage"):this.t("opening_door");return j`<rect class="fp3d-wv-hole ${(V==null?void 0:V.type)==="window"?"fp3d-wv-window":""}" x=${L} y=${p(F.y1)} width=${W} height=${F.y1-F.y0} />
              ${W>B*3.5?j`<text class="fp3d-wv-hole-label" x=${L+W/2} y=${p(F.y1)+B*1.3} style="font-size:${B*.85}px">${N}</text>`:y}`})}
          ${l.map(F=>{let[L,W]=u(F.s0,F.s1),V=e.furniture.find(et=>et.id===F.id),N=V.name||He(this.hass,V.type),nt=F.y1-F.y0,K=this.wallPics.get(this.wallPicKey(o,V)),J=c(gt(o,[V.x,V.z]).s);return j`<g class="fp3d-wv-item ${K?"fp3d-wv-pic":""} ${F.id===this._wallSel||g.includes(F.id)?"fp3d-wv-sel":""}" @pointerdown=${et=>I(et,F.id)} @dblclick=${()=>{let et=e.furniture.find(rt=>rt.id===F.id);if(et!=null&&et.group&&!this._wallSingle){this.wallChoose([F.id]),this._wallSingle=!0;return}this._wallView=null,this.selectItem("furniture",F.id)}}>
              ${K?j`<image href=${K.url} x=${J+K.x0} y=${p(F.y0+K.y1)} width=${K.x1-K.x0} height=${K.y1-K.y0} preserveAspectRatio="none" />`:y}
              <rect x=${L} y=${p(F.y1)} width=${W} height=${Math.max(.02,nt)}><title>${N}</title></rect>
              ${!K&&W>B*3&&nt>B*1.4?j`<text x=${L+W/2} y=${p(F.y1)+Math.min(nt/2,B*1.6)+B*.35} style="font-size:${B}px">${N}</text>`:y}
            </g>`})}
          ${T}
          ${m&&f&&!b&&h&&!f.locked&&l.some(F=>F.id===m.id)?(()=>{let[F,L]=u(m.s0,m.s1),W=p(m.y1),V=p(m.y0),N=B*.75,nt=this.alongAxis(o,f),K=J=>et=>{et.stopPropagation(),et.currentTarget.closest("svg").setPointerCapture(et.pointerId),this.wallResize={id:m.id,side:J,x0:F,x1:F+L,y0:m.y0,y1:m.y1,base:this._doc,moved:!1}};return j`<g class="fp3d-wv-handles">
                  ${nt?j`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${F-N/2} y=${(W+V)/2-N} width=${N} height=${N*2} rx=${N/3} @pointerdown=${K("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${F+L-N/2} y=${(W+V)/2-N} width=${N} height=${N*2} rx=${N/3} @pointerdown=${K("r")} />`:y}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${F+L/2-N} y=${W-N/2} width=${N*2} height=${N} rx=${N/3} @pointerdown=${K("t")} />
                  ${m.y0>.05&&ce(f)?j`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${F+L/2-N} y=${V-N/2} width=${N*2} height=${N} rx=${N/3} @pointerdown=${K("b")} />`:y}
                  <text class="fp3d-wv-size" x=${F+L/2} y=${W-N*.9} style="font-size:${B*.85}px">${P(m.s1-m.s0)} × ${P(m.y1-m.y0)}</text>
                </g>`})():y}
          ${b&&x?(()=>{let[F,L]=u(x.s0,x.s1),W=!this._wallMulti.length;return j`<g class=${`fp3d-wv-setframe${W?" fp3d-wv-setblock":""}`}><rect x=${F-.03} y=${p(x.y1)-.03} width=${L+.06} height=${x.y1-x.y0+.06} /><text x=${F} y=${p(x.y1)-.07} style="font-size:${B*.85}px">${W?`\u25A3 ${this.t("block_title")} \xB7 ${g.length}`:this.t("multi_title",{n:g.length})}</text></g>`})():y}
          ${this._wallGap?(()=>{let F=this._wallGap,[L,W]=u(F.s0,F.s1),V=F.low?Math.min(a,.9):Math.min(a,2.2),N=F.low?0:1.3;return j`<g class="fp3d-wv-gap"><rect x=${L} y=${p(V)} width=${W} height=${V-N} /><text x=${L+W/2} y=${p((V+N)/2)} style="font-size:${B}px">${P(W)}</text></g>`})():y}
          ${this._wallFrame?j`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0,this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0,this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1-this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1-this._wallFrame.y0)} />`:y}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${s+.3} y1=${a} y2=${a} />
          ${Q?this.renderRuns(Q,c,p):y}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${Q&&this._techMode&&!this._runDraft&&!this._runSel&&!m&&(this._runMode==="draw"||this._runMode==="feed")?_`<span class="fp3d-muted">${this.t(this._runMode==="feed"?"tech_feed_place":"tech_start")}</span> ${this.renderTechIssues(Q)}`:Q&&(this._runMode||this._runSel&&!m)?this.renderRunFoot(Q):b&&h?this.renderWallSetFoot(o,g,x,u):m&&f?_`<b>${f.name||He(this.hass,f.type)}</b>
                ${this.fixButton("furniture",m.id)}
                ${f.group&&h?_`<button class="fp3d-btn" title=${this.t("block_select")} @click=${()=>{this._wallSingle=!1,this.requestUpdate()}}>▣ ${this.t("wv_block_all")}</button>`:y}
                ${Q&&Pt.includes(f.type)?_`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(Q.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:y}
                ${f.locked&&h?_`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:y}
                ${this.len(this.t("wall_view_left"),Math.round(u(m.s0,m.s1)[0]*1e3)/1e3,F=>{let L=F-u(m.s0,m.s1)[0];this.moveOnWall(o,m.id,o.rightward?L:-L,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,m.d)*1e3)/1e3,F=>this.moveFromWall(o,m.id,F-m.d),.01,0)}
                ${h&&!f.locked&&this.alongAxis(o,f)?this.len(this.t("width"),Math.round((m.s1-m.s0)*1e3)/1e3,F=>{let L=Math.max(.05,F);o.rightward?this.resizeOnWall(o,m.id,m.s0,m.s0+L,null,null):this.resizeOnWall(o,m.id,m.s1-L,m.s1,null,null)},.01,.05):y}
                ${h&&!f.locked?this.len(this.t("height_m"),Math.round((m.y1-m.y0)*1e3)/1e3,F=>this.resizeOnWall(o,m.id,null,null,null,m.y0+Math.max(.03,F)),.01,.03):y}
                ${v?this.len(this.t("mount_height"),Math.round(m.y0*1e3)/1e3,F=>this.moveOnWall(o,m.id,0,F),.01,0):_`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${h&&!f.locked?_`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,F=>this.turnOnWall(f.id,F),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:y}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",m.id)}}>${this.t("wall_view_form")}</button>
                ${h?_`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall([m.id])}>${this.t("delete")}</button>`:y}`:_`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
          ${h&&!this._techMode?this.renderMultiToggle():y}
        </div>
      </div>
    </div>`}renderWallSetFoot(t,e,n,i){let o=!this._wallMulti.length,s=e.every(l=>this.isFixedItem("furniture",l)),a=!s&&e.some(l=>this.isFixedItem("furniture",l));return _`<b>${o?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</b>
      ${a?_`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>`:y}
      ${o?_`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${()=>this._wallSingle=!0}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${()=>{let l=this._wallSel;this._wallMulti=e,this.ungroupSelectionOf(e),this._wallSel=l}}>${this.t("block_break")}</button>`:_`<button class="fp3d-btn fp3d-primary" @click=${()=>{this.groupIds(e),this._wallMulti=[]}}>▣ ${this.t("block_make")}</button>`}
      ${n?this.len(this.t("wall_view_left"),Math.round(i(n.s0,n.s1)[0]*1e3)/1e3,l=>{let d=l-i(n.s0,n.s1)[0];this.moveSetOnWall(t,e,t.rightward?d:-d,null)},.01,0):y}
      <button class="fp3d-btn ${a?"fp3d-primary":""}" @click=${()=>{let l=new Set(e),d=!s&&!a;this.change((c,u)=>{for(let p of u.furniture)l.has(p.id)&&(p.locked=d||null)})}}>${s?`\u{1F513} ${this.t("unfix")}`:a?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall(e)}>${this.t("delete")}</button>`}deleteOnWall(t){if(!t.length||!this.isAdmin)return;if(t.length>1){if(!confirm(this.t(t.some(n=>this.isFixedItem("furniture",n))?"block_delete_fixed":"block_delete",{n:t.length})))return}else if(!this.confirmFixedDelete("furniture",t[0]))return;let e=new Set(t);this.change((n,i)=>i.furniture=i.furniture.filter(o=>!e.has(o.id))),this._wallSel=null,this._wallMulti=[],this._wallSingle=!1}groupIds(t){let e=new Set(t),n=X("block");this.change((i,o)=>{for(let s of o.furniture)e.has(s.id)&&(s.group=n)})}ungroupSelectionOf(t){let e=new Set(t);this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=null)})}addOnWall(t,e,n){let i=this.floor;if(!i||!this.isAdmin)return;this.rememberWallType(t);let o=this._wallGap;if(o)return this.addIntoGap(t,e,n,o);let[s,a,l]=Ht(t),d=[...Fe(e,i,n).map(v=>[v.s0,v.s1]),..._n(e,i).filter(v=>v.y0<.05).map(v=>[v.s0,v.s1])],c=Math.max(0,e.length/2-s/2);for(let v=.1;v+s<=e.length-.05;v+=.05)if(!d.some(([g,b])=>v<b+.05&&v+s>g-.05)){c=v;break}let u=de(i,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,[p,h]=ee(e,c+s/2,u+a/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),m={id:X("furniture"),type:t,x:z(p),z:z(h),rotation:f,w:s,d:a,h:l,variant:null};this.change((v,g)=>g.furniture.push(m)),this._runSel=null,this._runMode=null,this._wallSel=m.id}addIntoGap(t,e,n,i){let o=this.floor,s=i.s1-i.s0,[a,l,d]=Ht(t);Xi.has(t)&&(a>s+.005||s-a<.1)&&(a=Math.round(s*1e3)/1e3);let c=de(o,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,u=i.s0+Math.min(a,s)/2,[p,h]=ee(e,u,c+l/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),m={id:X("furniture"),type:t,x:z(p),z:z(h),rotation:f,w:a,d:l,h:d,variant:null};this.change((v,g)=>g.furniture.push(m)),this._wallGap=null,this._wallSel=m.id,this._wallMulti=[]}rememberWallType(t){try{let e=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");localStorage.setItem("neonplan3d.wallRecent",JSON.stringify([t,...e.filter(n=>n!==t)].slice(0,6)))}catch{}}wallRecent(){try{let t=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"&&(vi.includes(e)||!!$t(e))):[]}catch{return[]}}renderWallFurniture(t,e){let n=this._wallGap,i=n?n.s1-n.s0:0,o=bd(this._wallQuery.trim()),s=this._wallCat,a=(this.packs??[]).flatMap(v=>v.items.filter(g=>!g.light&&!g.vehicle&&!g.hole&&g.mount!=="ceiling").map(g=>({type:Me(v.id,g.id),label:ae(g),search:`${Object.values(g.name).join(" ")} ${v.name}`,wall:g.mount==="wall"}))),l=v=>this.t(`furn_${v}`),d=[];s==="pack"?d=a:s==="energy"?d=["meter","inverter","home_battery","wallbox"].map(v=>({type:v,label:l(v),search:""})):s?d=(Hs[s]??[]).map(v=>({type:v,label:l(v),search:se(Ws,`furn_${v}`)})):o||n?d=[...Object.values(Hs).flat().filter((v,g,b)=>b.indexOf(v)===g).map(v=>({type:v,label:l(v),search:se(Ws,`furn_${v}`)})),...a]:this.wallRecent().length||(d=Hs.base.map(v=>({type:v,label:l(v),search:""})));let c=o.split(/\s+/).filter(Boolean),u=c.length?d.filter(v=>c.every(g=>bd(`${v.label} ${v.search} ${v.type.replace(/[_:.]/g," ")}`).includes(g))):d;if(n){let v=(g,b)=>b||xp.has(g);u=u.filter(g=>v(g.type,g.wall)===!n.low).filter(g=>Ht(g.type)[0]<=i+.01||Xi.has(g.type)&&i>=(kp[g.type]??.2)).sort((g,b)=>{let $=x=>Xi.has(x)?1:Math.min(1,Ht(x)[0]/i);return $(b.type)-$(g.type)||Number(g.type.startsWith("pack:"))-Number(b.type.startsWith("pack:"))})}let p=!s&&!o&&!n?this.wallRecent():[],h=[["base","\u25AD"],["hang","\u2594"],["tall","\u25AF"],["living","\u{1F6CB}"],["light","\u{1F4A1}"],...(this.packs??[]).some(v=>v.items.length)?[["pack","\u{1F9E9}"]]:[],...vt("energy_pro")?[["energy","\u26A1"]]:[]],f=[...p,...u.slice(0,40).map(v=>v.type)];this.askKitPics(f),this._wallPicTick;let m=(v,g)=>{let b=Ht(v)[0],$=n&&Xi.has(v)&&(b>i+.005||i-b<.1),x=this.kitPics.get(v);return _`<button class="fp3d-wv-tile" title=${g} @click=${()=>this.addOnWall(v,t,e)}>
        <span class="fp3d-wv-tile-pic">${x?_`<img src=${x} alt="" />`:_`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${g}</span>
        <small class=${$?"fp3d-wv-fit":""}>${$?`\u2194 ${this.m(i,2)}`:this.m(b,2)}</small>
      </button>`};return _`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${h.map(([v,g])=>_`<button class="fp3d-wv-cat ${s===v?"fp3d-on":""}" title=${this.t(`wv_cat_${v}`)} @click=${()=>this._wallCat=s===v?null:v}><span>${g}</span>${this.t(`wv_cat_${v}`)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${v=>this._wallQuery=v.target.value} />
      ${n?_`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap",{w:this.m(i,2)})} <button class="fp3d-link" @click=${()=>this._wallGap=null}>✕</button></p>`:!s&&!o?_`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`:y}
      ${s?_`<h4>${this.t(`wv_cat_${s}`)}</h4>`:y}
      ${p.length?_`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${p.map(v=>m(v,$t(v)?ae($t(v)):l(v)))}</div>`:y}
      ${(s||o||n)&&!u.length?_`<p class="fp3d-sub">${this.t(n?"wv_none_fits":"furniture_search_none")}</p>`:y}
      <div class="fp3d-wv-tiles">${u.slice(0,40).map(v=>m(v.type,v.label))}</div>
    </aside>`}async askKitPics(t){let e=t.filter(n=>!this.kitPicsAsked.has(n));if(e.length){for(let n of e)this.kitPicsAsked.add(n);try{let n=await Zn();for(let i of e){let[o,s,a]=Ht(i);this.kitPics.set(i,n.furniturePreview({type:i,w:o,d:s,h:a,variant:null,lamp:On[i]??null},120,this.packs??[]))}}catch{}this._wallPicTick++}}renderWallKit(t,e,n){let i=!!n,o=vt("energy_pro");if(!i)return this.isAdmin?this.renderWallFurniture(t,e):y;if(this._techMode&&n)return this.renderTechKit(t,e,n);if(!this.isAdmin||!i&&!o)return y;let s=l=>_`<button class="fp3d-btn" @click=${()=>this.addOnWall(l,t,e)}>+ ${this.t(`furn_${l}`)}</button>`,a=(l,d)=>_`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,l)}>+ ${this.t(d)}</button>`;return _`<aside class="fp3d-wv-kit">
      ${i?_`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${a("valve","wall_run_valve")} ${a("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(l=>_`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?null:l}}>+ ${this.t(`wall_kit_${l}`)}</button>`)}`:y}
      ${o?_`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`:y}
    </aside>`}get runPool(){var t;return this.poolArea??((t=this.floor)==null?void 0:t.outdoor.find(e=>e.type==="pool"&&e.points.length>=3))}get canLayRuns(){return(es()||this._techMode)&&!!this.runPool}runFrame(t){var o;let[e,n]=t.split("|"),i=(o=this.floor)==null?void 0:o.rooms.find(s=>s.id===e);return i&&Number(n)<i.points.length?Ie(i,Number(n)):null}docWithDraft(){let t=this._runDraft;if(!t||!this._wallView)return this._doc;let e=[...t.from||!t.anchor?[]:[t.anchor],...t.pts];if(!e.length)return this._doc;let n=structuredClone(this._doc),i=n.floors.find(a=>a.outdoor.some(l=>l.id===t.pool)),o=i==null?void 0:i.outdoor.find(a=>a.id===t.pool);if(!i||!o)return this._doc;o.pool??={};let s={id:"__draft",from:t.from,to:"",floor_id:i.id,points:e.map(a=>[a[0],a[2]]),heights:e.map(a=>a[1])};return o.pool.pipes=[...o.pool.pipes??[],s],n}runLast(t,e){var o,s;if(t.pts.length)return t.pts[t.pts.length-1];if(t.fromT)return t.fromT;let n=ft(this._doc,e.floor,e.pool);if(t.extend){let a=(s=(o=e.pool.pool)==null?void 0:o.pipes)==null?void 0:s.find(d=>d.id===t.extend.pipe),l=a?Gt(a,n):[];return(t.extend.end==="to"?l[l.length-1]:l[0])??null}let i=n(t.from);return i?[i.x,i.y,i.z]:null}runPick(t,e,n,i=!1){var l;if(!i){for(let d of t.runs)for(let c of d.ends)if(Math.hypot(c.s-e,c.y-n)<.12)return{end:{pipe:d.id,end:c.end}}}let o=ft(this._doc,t.floor,t.pool),s=null,a=[...t.floor.furniture.filter(d=>Pt.includes(d.type)).flatMap(d=>Re(d.type).length?Re(d.type).map(c=>`dev:${d.id}:${c}`):[`dev:${d.id}`]),...(((l=t.pool.pool)==null?void 0:l.joints)??[]).map(d=>d.kind==="wall"||d.kind==="floor"?`joint:${d.id}:inside`:`joint:${d.id}`)];for(let d of i?[]:a){let c=o(d);if(!c)continue;let u=gt(t.frame,[c.x,c.z]);if(u.d<-.3||u.d>1.6)continue;let p=Math.hypot(u.s-e,c.y-n);p<.12&&(!s||p<s.d)&&(s={node:d,d:p})}if(s)return{node:s.node};if(this._techMode&&!i){let d=t.floor.furniture.find(c=>{if(!Pt.includes(c.type)||c.type==="pool_valve")return!1;let u=Wt(c).map(h=>gt(t.frame,h));if(Math.min(...u.map(h=>h.d))>1.6||Math.max(...u.map(h=>h.d))<-.3)return!1;let p=Tt(t.floor,c);return Math.min(...u.map(h=>h.s))-.03<=e&&e<=Math.max(...u.map(h=>h.s))+.03&&p-.03<=n&&n<=p+c.h+.03});if(d)return{node:`dev:${d.id}`}}for(let d of t.runs)for(let c of d.pieces){let[u,p]=[c.s1-c.s0,c.y1-c.y0],h=u*u+p*p,f=h>0?Math.max(0,Math.min(1,((e-c.s0)*u+(n-c.y0)*p)/h)):0,[m,v]=[c.s0+u*f,c.y0+p*f];if(Math.hypot(m-e,v-n)<(i?.24:.07))return{pipe:{id:d.id,p:ne(t.frame,m,v,c.d0+(c.d1-c.d0)*f)}}}return{}}eraseAt(t,e,n){var l;let i=(d,c,u)=>Math.hypot(d-e,c-n)<u;for(let d of t.runs)for(let c of d.fittings)if(i(c.s,c.y,.1*Math.max(1,this.wvScale))){this.changePool(t.pool.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===d.id);p&&(p.fittings=(p.fittings??[]).filter(f=>f.id!==c.id))});return}let o=ft(this._doc,t.floor,t.pool),s=(((l=t.pool.pool)==null?void 0:l.joints)??[]).find(d=>{let c=d.kind==="wall"||d.kind==="floor"?`joint:${d.id}:inside`:`joint:${d.id}`,u=o(c);if(!u)return!1;let p=gt(t.frame,[u.x,u.z]);return p.d>-.3&&p.d<1.6&&i(p.s,u.y,.1)});if(s){let d=`joint:${s.id}`;this.changePool(t.pool.id,c=>{c.joints=(c.joints??[]).filter(u=>u.id!==s.id),c.pipes=(c.pipes??[]).filter(u=>ie(u.from)!==d&&ie(u.to)!==d)}),this._runSel=null;return}let a=this.runPick(t,e,n,!0);if(a.pipe){let d=a.pipe.id;this.changePool(t.pool.id,c=>c.pipes=(c.pipes??[]).filter(u=>u.id!==d)),this._runSel=null}}runDown(t,e){if(!this._runMode||!this.isAdmin||(t.stopPropagation(),this._techAsk=null,this._techMode&&this._runMode==="draw"))return;let{s:n,y:i}=e.pt(t);this.runAt(e,n,i,t.altKey,t.detail,null)}runDown3d(t){var b,$;let e=this.runCtx3d;if(!this._runMode||!e||t.button!==0||!this.isAdmin||!this._wallView3d)return;let n=(b=this.wall3dEl)==null?void 0:b.viewer;if(!n)return;t.stopPropagation(),t.preventDefault();let i=n.renderer.domElement.getBoundingClientRect(),[o,s]=[t.clientX-i.left,t.clientY-i.top],a=n.furnitureIdAt(o,s),l=a?e.floor.furniture.find(x=>x.id===a&&Pt.includes(x.type)):void 0,d=n.pointerRay(o,s),c=ee(e.frame,0,e.gap),u=e.frame.n,p=d.d[0]*u[0]+d.d[2]*u[1];if(Math.abs(p)<1e-6)return;let h=((c[0]-d.o[0])*u[0]+(c[1]-d.o[2])*u[1])/p;if(h<=0&&!l)return;let f=[d.o[0]+d.d[0]*h,d.o[1]+d.d[1]*h,d.o[2]+d.d[2]*h],m=e.floor.elevation+((($=n.floorMap.get(e.floor.id))==null?void 0:$.y)??0),v=ft(this._doc,e.floor,e.pool),g=()=>{let x=Re(l.type);if(!x.length)return`dev:${l.id}`;let P=S=>{let R=v(S),I=[R.x-d.o[0],R.y+m-d.o[1],R.z-d.o[2]],E=I[0]*d.d[0]+I[1]*d.d[1]+I[2]*d.d[2];return Math.hypot(I[0]-d.d[0]*E,I[1]-d.d[1]*E,I[2]-d.d[2]*E)};return x.map(S=>`dev:${l.id}:${S}`).sort((S,R)=>P(S)-P(R))[0]};this.runAt(e,gt(e.frame,[f[0],f[2]]).s,f[1]-m,t.altKey,t.detail,l&&this._runMode==="draw"?g():null)}runAt(t,e,n,i,o,s){let a=this._runMode;if(!a)return;if(a==="tee"&&this._techMode){let c=this.runPick(t,e,n,!0);c.pipe&&this.teeOnPipe(t,c.pipe.id,c.pipe.p);return}if(a==="hole_wall"||a==="hole_floor"||a==="tee"||a==="y")return this.placeJoint(t,a,e,n);if(a==="feed")return this.placeFeed(t,e,n);if(a==="erase")return this.eraseAt(t,e,n);let l=s?{node:s}:this.runPick(t,e,n,a!=="draw");if(a!=="draw"){if(!l.pipe&&this._techMode)return;l.pipe&&this.addFitting(t,l.pipe.id,l.pipe.p,a),this._runMode=this._techMode?"draw":null,this._techMode&&(this._runSel=null);return}let d=this._runDraft;if(d&&this._techMode&&!this.techStroke&&((d.pts.length>=2||(d.extend||d.fromT||d.from)&&d.pts.length)&&this.finishRun("",null),this._runDraft=null,d=null),!d){let c={pool:t.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:t.key,d:t.gap},u;l.end?u={...c,extend:l.end}:l.node?u={...c,from:l.node}:l.pipe?u={...c,fromT:l.pipe.p}:u={...c,pts:[ne(t.frame,Math.round(e*20)/20,Math.round(n*20)/20,t.gap)]},this._runDraft={...u,anchor:this.runLast({...u,pts:[]},t)};return}if(o>=2)return void this.finishRun("",null);if(l.node&&l.node!==d.from)return void this.finishRun(l.node,null);if(l.pipe)return void this.finishRun("",l.pipe.p);this._runDraft={...d,pts:[...d.pts,...this.runStep(d,t,e,n,i)],wall:t.key,d:t.gap}}runStep(t,e,n,i,o){let s=Math.round(n*20)/20,a=Math.round(i*20)/20,l=[],d=this.runLast(t,e);if(d&&t.wall!==e.key){let c=this.runFrame(t.wall),u=c&&pl(c,t.d,e.frame,e.gap);u&&(d=[z(u[0]),d[1],z(u[1])],l.push(d))}if(d&&!o){let c=gt(e.frame,[d[0],d[2]]);c.d>-.35&&c.d<.6&&(Math.abs(s-c.s)<Math.abs(a-d[1])?s=c.s:a=d[1])}return l.push(ne(e.frame,s,a,e.gap)),l.map(c=>[z(c[0]),z(c[1]),z(c[2])])}finishRun(t,e,n=[],i){var p;let o=this._runDraft,s=this.floor,a=this.pipeRules;if(this._runDraft=null,!o||!s||!a)return null;let l=[...o.pts,...n],d=this._techMode?this.runFrame(o.wall):null,c=this._techMode?(p=this.floor)==null?void 0:p.outdoor.find(h=>h.id===o.pool):void 0;if(d&&c&&!n.length&&(t||e)){let h=l.length?l[l.length-1]:(()=>{let m=o.from?ft(this._doc,s,c)(o.from):null;return m?[m.x,m.y,m.z]:o.fromT})(),f=e?{x:e[0],y:e[1],z:e[2]}:ft(this._doc,s,c)(t);if(h&&f){let m=gt(d,[h[0],h[2]]),v=gt(d,[f.x,f.z]);Math.abs(m.s-v.s)>.03&&Math.abs(h[1]-f.y)>.03&&l.push(ne(d,v.s,h[1],o.d))}}if(!l.length&&!e&&(!t||t===o.from)&&!o.fromT)return null;let u=null;return this.changePool(o.pool,(h,f)=>{let m=h.joints??=[],v=h.pipes??=[],g=ft(this._doc,s,f),b=O=>{let D=O.startsWith("joint:")?m.find(H=>`joint:${H.id}`===O):void 0;return D?{x:D.x,z:D.z,y:D.y}:g(O)},$=O=>{let D=null;for(let U of v){let G=bn(Gt(U,b),O);G&&G.d<.12&&(!D||G.d<D.d)&&(D={pipe:U,d:G.d})}let H=D&&Ci(D.pipe,b,O,X("joint"),X("pipe"));return!D||!H?"":(m.push(H.joint),v.splice(v.indexOf(D.pipe),1,H.first,H.second),`joint:${H.joint.id}:out2`)},x=(O,D=[])=>{let{kind:H,id:U,port:G}=ut(O),Z=H==="joint"&&!G?m.find(q=>q.id===U):void 0;if(!Z||!Z.kind)return O;if(Z.kind==="wall"||Z.kind==="floor")return`joint:${U}:inside`;let Y=new Set([...v.flatMap(q=>[q.from,q.to]),...D]),it=vn(Z.kind).find(q=>!Y.has(`joint:${U}:${q}`));return it?`joint:${U}:${it}`:O},P=o.fromT?$(o.fromT):x(o.from),S=e?$(e):x(t,[P]),R=s.furniture.filter(O=>Pt.includes(O.type)).map(O=>({id:O.id,type:O.type})),I=O=>v.flatMap(D=>[D.from,D.to]).filter(D=>ie(D)===O).map(D=>ut(D).port).filter(D=>!!D),E=O=>{var U,G,Z,Y;let{kind:D,id:H}=ut(O);return D==="port"?((Z=(G=(U=f.pool)==null?void 0:U.ports)==null?void 0:G.find(it=>it.id===H))==null?void 0:Z.kind)==="waste":D==="joint"&&/kanal|waste|abwasser|backwash/i.test(((Y=m.find(it=>it.id===H))==null?void 0:Y.name)??"")},k=(O,D)=>{var it;let{kind:H,id:U,port:G}=ut(O);if(H!=="dev"||G)return O;let Z=((it=s.furniture.find(q=>q.id===U))==null?void 0:it.type)??"",Y=a.autoPort(Z,D?a.nodeFlow(D,f,R):null,E(D),I(`dev:${U}`));return Y?`dev:${U}:${Y}`:O};P=k(P,S),S=k(S,P);let w=l.map(O=>[z(O[0]),z(O[2])]),A=l.map(O=>z(O[1])),M=o.extend,T=M&&v.find(O=>O.id===M.pipe);if(M&&T){Object.assign(T,Nt(T,b)),M.end==="to"?(T.points=[...T.points,...w],T.heights=[...T.heights??[],...A],T.to=S):(T.points=[...w.reverse(),...T.points],T.heights=[...A.reverse(),...T.heights??[]],T.from=S),i!==void 0&&(T.height=i),u=T.id;return}let C={id:X("pipe"),from:P,to:S,floor_id:s.id,points:w,heights:A,height:i??A[A.length-1]??null};C=a.orientPipe(C,P?a.nodeFlow(P,f,R):null,S?a.nodeFlow(S,f,R):null),v.push(C),u=C.id}),u&&!this._techMode&&(this._runSel={pipe:u,pt:null}),this._runMode=this._techMode?"draw":null,u}teeOnPipe(t,e,n){let i=ft(this._doc,t.floor,t.pool);this.changePool(t.pool.id,o=>{let s=[...o.pipes??[]],a=s.findIndex(d=>d.id===e);if(a<0)return;let l=Ci(s[a],i,n,X("joint"),X("pipe"));l&&(o.joints=[...o.joints??[],l.joint],s.splice(a,1,l.first,l.second),o.pipes=s)}),this._runMode="draw"}placeFeed(t,e,n){let i=this._feedKind;this._feedKind=null,this._runMode="draw",i&&this.feedAt(t,i,e,n)}feedAt(t,e,n,i){let o=this.floor;if(!o)return null;let s=Math.round(n*20)/20,a=i<.25,l=t.gap-Ds,d=de(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c=this.t(`feed_${e}`),[u,p]=an(t.frame,s,a?t.gap:l),h=a?{id:X("joint"),kind:"floor",x:u,z:p,y:0,name:c}:{id:X("joint"),kind:"wall",x:u,z:p,y:Math.round(i*20)/20,nx:z(t.frame.n[0]),nz:z(t.frame.n[1]),depth:z(d),name:c};return this.changePool(t.pool.id,(f,m)=>{f.joints=[...f.joints??[],h];let v=(f.ports??[]).filter(P=>P.kind===e);if(e==="waste"&&!v.length){let P=Te(h,"outside"),S={id:X("port"),kind:"waste",x:z(P.x-t.frame.n[0]*1),z:z(P.z-t.frame.n[1]*1)};f.ports=[...f.ports??[],S],v=[S]}if(!v.length)return;let g=ft(this._doc,o,m),b=P=>{let{kind:S,id:R,port:I}=ut(P),E=S==="joint"?(f.joints??[]).find(w=>w.id===R):void 0;if(E)return Te(E,I);let k=S==="port"?(f.ports??[]).find(w=>w.id===R):void 0;return k?g(P)??{x:k.x,y:.02,z:k.z}:g(P)},$=P=>{let{kind:S,id:R}=ut(P);if(S==="port"){let I=(f.ports??[]).find(E=>E.id===R);return I?ts(I.kind):null}return null},x=yn({from:`joint:${h.id}:outside`,vias:[],to:v.map(P=>`port:${P.id}`),floorId:o.id},b,f.joints??[],$,P=>X(P));f.joints=[...f.joints??[],...x.joints],f.pipes=[...f.pipes??[],...x.pipes]}),h}endStroke(t,e,n){let i=this._runDraft;if(!i)return;let o=this.runLast(i,t),s=o?gt(t.frame,[o[0],o[2]]):null,a=s&&s.d>-.35&&s.d<.6?{s:s.s,y:o[1]}:e[0],l=Mp([a,...Bs(e,.08),n]),d=l.slice(1,-1).map(f=>{let m=ne(t.frame,f.s,f.y,t.gap);return[z(m[0]),z(m[1]),z(m[2])]}),c=this.runPick(t,n.s,n.y);if(this._techAsk=null,c.node&&c.node!==i.from){this.finishRun(c.node,null,d);return}if(c.pipe){this.finishRun("",c.pipe.p,d);return}let u=l[l.length-1],p=ne(t.frame,Math.round(u.s*20)/20,Math.round(u.y*20)/20,t.gap),h=this.finishRun("",null,[...d,[z(p[0]),z(p[1]),z(p[2])]]);h&&(this._techAsk={s:u.s,y:u.y,pipe:h})}answerAsk(t,e){let n=this._techAsk;if(this._techAsk=null,!n)return;if(e==="cancel"){this.changePool(t.pool.id,o=>o.pipes=(o.pipes??[]).filter(s=>s.id!==n.pipe));return}if(!e)return;let i=this.feedAt(t,e,n.s,n.y);i&&this.changePool(t.pool.id,o=>{var a;let s=(a=o.pipes)==null?void 0:a.find(l=>l.id===n.pipe);s&&(s.to?s.from||(s.from=`joint:${i.id}:inside`):s.to=`joint:${i.id}:inside`)})}renderTechKit(t,e,n){var c;let i=n.pool,o=this.pipeRules;if(!o)return y;let s=u=>_`<button class="fp3d-wv-tile" @click=${()=>this.addOnWall(u,t,e)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(u)?_`<img src=${this.kitPics.get(u)} alt="" />`:_`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${u}`)}</span>
    </button>`;this.askKitPics(["pool_pump","pool_filter","pool_heat_pump","pool_dosing"]);let a=["skimmer","drain","inlet","waste"].filter(u=>{var p;return u==="waste"||(((p=i.pool)==null?void 0:p.ports)??[]).some(h=>h.kind===u)}),l=(u,p)=>_`<button class="fp3d-btn ${this._runMode===u?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===u?"draw":u}}>+ ${this.t(p)}</button>`,d=this._techAsk;return _`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${d?_`<div class="fp3d-tech-ask">
            <b>${this.t("tech_ask")}</b>
            ${["skimmer","drain","inlet","waste"].map(u=>_`<button class="fp3d-btn fp3d-tech-feed" @click=${()=>this.answerAsk(n,u)}><i>${u==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${u}`)}</button>`)}
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
      ${a.map(u=>{let p=o.feedDone(i,u);return _`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind===u?"fp3d-primary":""} ${p?"fp3d-on":""}" ?disabled=${p} @click=${()=>{this._runDraft=null,this._feedKind=this._feedKind===u?null:u,this._runMode=this._feedKind?"feed":"draw"}}><i>${u==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${u}`)}${p?_`<small>✓</small>`:y}</button>`})}
      ${(((c=i.pool)==null?void 0:c.ports)??[]).some(u=>u.kind!=="waste")?y:_`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>`}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${l("valve","wall_run_valve")} ${l("sight","wall_run_sight")}
      <button class="fp3d-btn ${this._runMode==="tee"?"fp3d-primary":""}" title=${this.t("tech_step_tee")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode==="tee"?"draw":"tee"}}>+ ${this.t("joint_add_tee")}</button>
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`}renderTechStep(t){var h;let e=t.pool,n=this.pipeRules;if(!n)return y;let i=((h=e.pool)==null?void 0:h.ports)??[],o=t.floor.furniture.filter(f=>Pt.includes(f.type)),s=(f,m)=>_`<div class="fp3d-tech-step ${f===null?"fp3d-done":""}"><b>${f===null?"\u2713":this.t("tech_step",{n:f})}</b>${m}</div>`;if(this._runMode==="feed")return s(1,this.t("tech_feed_place"));if(this._runMode==="erase")return _`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;if(this._runMode==="valve"||this._runMode==="sight")return s(4,this.t("tech_step_fit"));if(this._runMode==="tee")return s(4,this.t("tech_step_tee"));if(this._runDraft)return s(3,this.t("tech_step_drawing"));if(!i.some(f=>f.kind!=="waste"))return s(1,this.t("tech_no_ports"));let a=["skimmer","drain","inlet"].find(f=>i.some(m=>m.kind===f)&&!n.feedDone(e,f));if(a)return s(1,this.t("tech_step_feed",{name:this.t(`feed_${a}`)}));let l=o.find(f=>f.type==="pool_pump"),d=o.find(f=>f.type==="pool_filter");if(!l||!d)return s(2,this.t("tech_step_devices"));let c=n.issues(e,o.map(f=>({id:f.id,type:f.type}))),u=f=>this.poolNodeLabel(e,f),p=c.find(f=>f.kind==="port");if(p){let{port:f}=ut(p.node),m={suction:this.t("feed_skimmer"),pressure:u(`dev:${d.id}:pump`),pump:u(`dev:${l.id}:pressure`),return:o.some(v=>v.type==="pool_heat_pump")?this.t("furn_pool_heat_pump"):this.t("feed_inlet"),waste:this.t("feed_waste"),in:u(`dev:${d.id}:return`),out:this.t("feed_inlet")};return s(3,this.t("tech_step_line",{a:f?m[f]??"\u2026":"\u2026",b:u(p.node)}))}return c.some(f=>f.kind==="loose")?s(3,this.t("tech_step_loose")):s(null,this.t("tech_ok"))}renderTechIssues(t){let e=t.floor.furniture.filter(a=>Pt.includes(a.type)).map(a=>({id:a.id,type:a.type})),n=this.pipeRules;if(!n)return y;let i=n.issues(t.pool,e);if(!i.length)return _`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;let o=i.filter(a=>a.kind==="loose").length,s=[...o?[this.t("tech_issue_loose",{n:o})]:[],...i.filter(a=>a.kind==="port").map(a=>this.t("tech_issue_port",{name:this.poolNodeLabel(t.pool,a.node)})),...i.filter(a=>a.kind==="feed").map(a=>this.t("tech_issue_feed",{name:this.t(`feed_${a.node}`)}))];return _`<span class="fp3d-tech-issues">⚠ ${s.slice(0,4).join(" \xB7 ")}${s.length>4?" \u2026":""}</span>`}placeJoint(t,e,n,i){let o=t.gap-Ds,s=Math.round(n*100)/100,a=Math.round(i*100)/100,l=de(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,d;if(e==="hole_wall"){let[c,u]=an(t.frame,s,o);d={id:X("joint"),kind:"wall",x:c,z:u,y:Math.max(.05,a),nx:z(t.frame.n[0]),nz:z(t.frame.n[1]),depth:z(l)}}else if(e==="hole_floor"){let[c,u]=an(t.frame,s,t.gap);d={id:X("joint"),kind:"floor",x:c,z:u,y:0}}else{let[c,u]=an(t.frame,s,t.gap);d={id:X("joint"),kind:e,x:c,z:u,y:a}}this.changePool(t.pool.id,c=>c.joints=[...c.joints??[],d]),this._runMode=null}runOut(t,e){let n=this._runDraft,i=n&&this.runLast(n,t);if(!n||!i)return;if(e==="down")return void this.finishRun("",null,[[i[0],-.3,i[2]]],-.3);let o=gt(t.frame,[i[0],i[2]]),s=de(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,a=ne(t.frame,o.s,i[1],-(s+.15));this.finishRun("",null,[[z(a[0]),i[1],z(a[2])]],i[1])}addFitting(t,e,n,i){let o=ft(this._doc,t.floor,t.pool);this.changePool(t.pool.id,s=>{var d;let a=(d=s.pipes)==null?void 0:d.find(c=>c.id===e),l=a&&bn(Gt(a,o),n);!a||!l||(a.fittings=[...a.fittings??[],{id:X("fit"),kind:i,at:z(l.at),...i==="valve"?{open:!0}:{}}])}),this._runSel={pipe:e,pt:null}}runPieceDown(t,e,n,i){var h,f;if(this._runMode)return;if(t.stopPropagation(),this._wallSel=null,((h=this._runSel)==null?void 0:h.pipe)!==n.id||!this.isAdmin){this._runSel={pipe:n.id,pt:null};return}let{s:o,y:s}=e.pt(t),a=n.pieces.find(m=>m.k===i),l=Math.hypot(a.s1-a.s0,a.y1-a.y0)>0?Math.hypot(o-a.s0,s-a.y0)/Math.hypot(a.s1-a.s0,a.y1-a.y0):0,d=a.d0+(a.d1-a.d0)*Math.min(1,l),c=this._doc,u=ft(c,e.floor,e.pool),p=-1;this.changePool(e.pool.id,m=>{var g;let v=(g=m.pipes)==null?void 0:g.find(b=>b.id===n.id);v&&(Object.assign(v,Nt(v,u)),p=Math.max(0,Math.min(v.points.length,i+1-Nn(v,u))),v.points.splice(p,0,an(e.frame,o,d)),v.heights.splice(p,0,z(s)))}),!(p<0)&&(this._runSel={pipe:n.id,pt:p},this.runDrag={pipe:n.id,i:p,d,base:c,moved:!0},(f=t.currentTarget.closest("svg"))==null||f.setPointerCapture(t.pointerId))}runPointDown(t,e,n,i){var d,c,u;if(this._runMode||!this.isAdmin)return;t.stopPropagation();let o=ft(this._doc,e.floor,e.pool);if(this.doubleTap(t,`runpt:${n}:${i}`)){this.changePool(e.pool.id,p=>{var f;let h=(f=p.pipes)==null?void 0:f.find(m=>m.id===n);h&&(Object.assign(h,Nt(h,o)),h.points.splice(i,1),h.heights.splice(i,1))}),this._runSel={pipe:n,pt:null};return}let s=(c=(d=e.pool.pool)==null?void 0:d.pipes)==null?void 0:c.find(p=>p.id===n),a=s&&Nt(s,o),l=a==null?void 0:a.points[i];l&&(this._runSel={pipe:n,pt:i},this.runDrag={pipe:n,i,d:gt(e.frame,l).d,base:this._doc,moved:!1},(u=t.currentTarget.closest("svg"))==null||u.setPointerCapture(t.pointerId))}runPointMove(t,e){var c,u;let n=this.runDrag;if(!n)return;let{s:i,y:o}=e.pt(t);i=Math.round(i*100)/100,o=Math.round(o*100)/100;let s=ft(n.base,e.floor,e.pool),a=n.base.floors.flatMap(p=>p.outdoor).find(p=>p.id===e.pool.id),l=(u=(c=a==null?void 0:a.pool)==null?void 0:c.pipes)==null?void 0:u.find(p=>p.id===n.pipe);if(!l)return;let d=Nt(l,s);if(!t.altKey){let p=Gt(d,s),h=Nn(d,s);for(let f of[p[n.i+h-1],p[n.i+h+1]]){if(!f)continue;let m=gt(e.frame,[f[0],f[2]]);Math.abs(m.s-i)<.04&&(i=z(m.s)),Math.abs(f[1]-o)<.04&&(o=z(f[1]))}}n.moved=!0,this.change((p,h)=>{var m,v,g;let f=(g=(v=(m=h.outdoor.find(b=>b.id===e.pool.id))==null?void 0:m.pool)==null?void 0:v.pipes)==null?void 0:g.find(b=>b.id===n.pipe);f&&(Object.assign(f,Nt(f,s)),f.points[n.i]=an(e.frame,i,n.d),f.heights[n.i]=o)},n.base,!1)}runPointUp(){let t=this.runDrag;this.runDrag=null,t!=null&&t.moved&&this.pushHistory(t.base)}fittingDown(t,e,n,i){var o;if(!(this._runMode||!this.isAdmin)){if(t.stopPropagation(),this._runSel={pipe:n,pt:null},this.doubleTap(t,`fitting:${i}`)){this.changePool(e.pool.id,s=>{var l;let a=(l=s.pipes)==null?void 0:l.find(d=>d.id===n);a!=null&&a.fittings&&(a.fittings=a.fittings.filter(d=>d.id!==i))});return}this.fitDrag={pipe:n,id:i,base:this._doc,moved:!1,x:t.clientX,y:t.clientY},(o=t.currentTarget.closest("svg"))==null||o.setPointerCapture(t.pointerId)}}jointDown(t,e,n){var i;this._runMode||!this.isAdmin||(t.stopPropagation(),this.jointDrag={id:e,d:n,base:this._doc,moved:!1},(i=t.currentTarget.closest("svg"))==null||i.setPointerCapture(t.pointerId))}jointMove(t,e){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:i,y:o}=e.pt(t),s=t.altKey?i:Math.round(i*100)/100,a=t.altKey?o:Math.round(o*100)/100;this.change((l,d)=>{var u,p,h;let c=(h=(p=(u=d.outdoor.find(f=>f.id===e.pool.id))==null?void 0:u.pool)==null?void 0:p.joints)==null?void 0:h.find(f=>f.id===n.id);c&&([c.x,c.z]=an(e.frame,s,n.d),c.kind!=="floor"&&(c.y=Math.max(c.kind==="wall"?.05:-1,z(a))))},n.base,!1)}fittingMove(t,e){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)<4)return;n.moved=!0;let{s:i,y:o}=e.pt(t),s=e.runs.find(c=>c.id===n.pipe);if(!s)return;let a=null;for(let c of s.pieces){let[u,p]=[c.s1-c.s0,c.y1-c.y0],h=u*u+p*p,f=h>0?Math.max(0,Math.min(1,((i-c.s0)*u+(o-c.y0)*p)/h)):0,[m,v]=[c.s0+u*f,c.y0+p*f],g=Math.hypot(m-i,v-o);(!a||g<a.d)&&(a={p:ne(e.frame,m,v,c.d0+(c.d1-c.d0)*f),d:g})}if(!a)return;let l=ft(n.base,e.floor,e.pool),d=a.p;this.change((c,u)=>{var m,v,g,b;let p=(g=(v=(m=u.outdoor.find($=>$.id===e.pool.id))==null?void 0:m.pool)==null?void 0:v.pipes)==null?void 0:g.find($=>$.id===n.pipe),h=(b=p==null?void 0:p.fittings)==null?void 0:b.find($=>$.id===n.id),f=p&&bn(Gt(p,l),d);h&&f&&(h.at=z(f.at))},n.base,!1)}fittingUp(t){let e=this.fitDrag;if(this.fitDrag=null,!!e){if(e.moved)return this.pushHistory(e.base);t&&this.changePool(t.pool.id,n=>{var o,s,a;let i=(a=(s=(o=n.pipes)==null?void 0:o.find(l=>l.id===e.pipe))==null?void 0:s.fittings)==null?void 0:a.find(l=>l.id===e.id);(i==null?void 0:i.kind)==="valve"&&(i.open=i.open===!1)})}}kitFitting(t,e){this._runDraft=null;let n=t&&this._runSel?t.runs.find(o=>o.id===this._runSel.pipe):void 0;if(!t||!n||!n.pieces.length){this._runMode=this._runMode===e?null:e;return}let i=[...n.pieces].sort((o,s)=>Math.hypot(s.s1-s.s0,s.y1-s.y0)-Math.hypot(o.s1-o.s0,o.y1-o.y0))[0];this.addFitting(t,n.id,ne(t.frame,(i.s0+i.s1)/2,(i.y0+i.y1)/2,(i.d0+i.d1)/2),e),this._runMode=null}renderRuns(t,e,n){var b,$,x,P;let i=(b=this._runSel)==null?void 0:b.pipe,o=S=>{let R=gt(t.frame,[S[0],S[2]]);return`${e(R.s)},${n(S[1])}`},s=this._runDraft,a=s&&this.runLast(s,t),l=s?[...s.fromT||s.extend||s.from?[this.runLast({...s,pts:[]},t)]:[],...s.pts].filter(S=>!!S):[],d=this.runHover,c=ft(this._doc,t.floor,t.pool),u={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},p=[],h=(S,R,I="",E)=>{let k=c(S),w=k&&gt(t.frame,[k.x,k.z]);if(!(k&&w&&w.d>-.6&&w.d<1.6&&w.s>-.2&&w.s<t.L+.2))return[];let A=p.filter(T=>Math.hypot(T.s-w.s,T.y-k.y)<.3*this.wvScale).length;p.push({s:w.s,y:k.y});let M=A&&this.wvScale>.5?"":R;return[j`<g class="fp3d-wv-node ${I} ${E?"fp3d-wv-joint":""}" transform="translate(${e(w.s)} ${n(k.y)}) scale(${this.wvScale})" @pointerdown=${T=>E&&this.jointDown(T,E,w.d)}>
            <circle r="0.05" /><text y=${.11+A*.07}>${M}</text><title>${this.poolNodeLabel(t.pool,S)}</title>
          </g>`]},f=[...t.floor.furniture.flatMap(S=>{if(u[S.type]===void 0)return[];let R=Re(S.type);return R.length?R.flatMap(I=>h(`dev:${S.id}:${I}`,this.t(`port_${I}`))):h(`dev:${S.id}`,u[S.type])}),...((($=t.pool.pool)==null?void 0:$.joints)??[]).flatMap(S=>S.kind==="wall"||S.kind==="floor"?h(`joint:${S.id}:inside`,this.jointLabel(t.pool,S.id),"fp3d-wv-hole-mark",S.id):h(`joint:${S.id}`,this.jointLabel(t.pool,S.id),"",S.id))],m=this.pipeRules,v=this._techMode&&m?m.flow({pipes:((x=t.pool.pool)==null?void 0:x.pipes)??[],ports:((P=t.pool.pool)==null?void 0:P.ports)??[],devices:this._doc.floors.flatMap(S=>S.furniture).filter(S=>Pt.includes(S.type)).map(S=>({id:S.id,type:S.type,open:S.valve_open!==!1,valve:S.valve_position??null})),pumpOn:!0,heaterOn:!1,heating:!1}):null,g=S=>{let R=v==null?void 0:v.get(S);if(!(R!=null&&R.active)||!m)return"";let[I,E,k]=m.waterColor(R).map(w=>Math.round(w*255));return`stroke: rgb(${I}, ${E}, ${k}); stroke-opacity: 0.95`};return j`<g class="fp3d-wv-runs">
      ${f}
      ${t.runs.map(S=>{var R;return j`<g class="fp3d-wv-run ${S.id===i?"fp3d-wv-run-sel":""} ${v&&!((R=v.get(S.id))!=null&&R.active)?"fp3d-wv-dry":""}">
          ${S.pieces.map(I=>j`<line class=${I.y0<-.01&&I.y1<-.01?"fp3d-wv-under":""} style=${g(S.id)} x1=${e(I.s0)} y1=${n(I.y0)} x2=${e(I.s1)} y2=${n(I.y1)} @pointerdown=${E=>this.runPieceDown(E,t,S,I.k)} />`)}
          ${S.ends.map(I=>j`<circle class="fp3d-wv-end" cx=${e(I.s)} cy=${n(I.y)} r="0.035" />`)}
          ${S.fittings.map(I=>I.kind==="valve"?j`<g class="fp3d-wv-valve ${I.open?"":"fp3d-wv-shut"}" transform="translate(${e(I.s)} ${n(I.y)}) scale(${this.wvScale})" @pointerdown=${E=>this.fittingDown(E,t,S.id,I.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${I.open?.11:0} y2=${I.open?0:-.11} />
                </g>`:j`<rect class="fp3d-wv-sight" x=${e(I.s)-.06} y=${n(I.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${E=>this.fittingDown(E,t,S.id,I.id)} />`)}
          ${S.id===i?S.points.map(I=>{var E;return j`<circle class="fp3d-wv-runpt ${((E=this._runSel)==null?void 0:E.pt)===I.i?"fp3d-on":""}" cx=${e(I.s)} cy=${n(I.y)} r="0.04" @pointerdown=${k=>this.runPointDown(k,t,S.id,I.i)} />`}):y}
        </g>`})}
      ${l.length?j`<polyline class="fp3d-wv-draft" points=${l.map(o).join(" ")} />`:y}
      ${this.techStroke&&this.techStroke.length>1?j`<polyline class="fp3d-wv-draft fp3d-wv-stroke" points=${this.techStroke.map(S=>`${e(S.s)},${n(S.y)}`).join(" ")} />`:y}
      ${a&&d?j`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${o(a).split(",")[0]} y1=${o(a).split(",")[1]} x2=${e(d[0])} y2=${n(d[1])} />`:y}
    </g>`}renderRunFoot(t){var u,p,h;let e=this._runMode,n=this._runDraft;if(e==="hole_wall"||e==="hole_floor"||e==="tee"||e==="y")return _`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="valve"||e==="sight")return _`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="draw")return _`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?_`<button class="fp3d-btn" @click=${()=>this.runOut(t,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(t,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:y}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let i=this._runSel,o=i&&((p=(u=t.pool.pool)==null?void 0:u.pipes)==null?void 0:p.find(f=>f.id===i.pipe));if(!i||!o)return y;let s=ft(this._doc,t.floor,t.pool),a=Nt(o,s),l=i.pt,d=this.isAdmin,c=o.to?o.from?null:"from":"to";return _`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&((h=a.heights)==null?void 0:h[l])!==void 0?this.len(this.t("wall_run_pt"),a.heights[l]??0,f=>this.changePool(t.pool.id,m=>{var g;let v=(g=m.pipes)==null?void 0:g.find(b=>b.id===o.id);v&&(Object.assign(v,Nt(v,s)),v.heights[l]=Math.min(10,Math.max(-5,z(f))))}),.01):y}
      ${d?_`<button class="fp3d-btn" @click=${()=>this.kitFitting(t,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(t,"sight")}>${this.t("wall_run_sight")}</button>
            ${c?_`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let f={pool:t.pool.id,from:"",fromT:null,extend:{pipe:o.id,end:c},pts:[],anchor:null,wall:t.key,d:t.gap};this._runDraft={...f,anchor:this.runLast(f,t)}}}>${this.t("wall_run_more")}</button>`:y}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.pool.id,f=>{var v,g;let m=(v=f.pipes)==null?void 0:v.find(b=>b.id===o.id);m&&(Object.assign(m,Nt(m,s)),[m.from,m.to,m.points,m.heights]=[m.to,m.from,[...m.points].reverse(),[...m.heights??[]].reverse()],m.fittings=(g=m.fittings)==null?void 0:g.map(b=>({...b,at:z(Math.max(0,Vs(m,s)-b.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(t.pool.id,f=>f.pipes=(f.pipes??[]).filter(m=>m.id!==o.id)),this._runSel=null}}>${this.t("delete")}</button>`:y}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){var n;let t=this.outdoorArea;if((t==null?void 0:t.type)==="pool")return t;let e=((n=this.floor)==null?void 0:n.outdoor.filter(i=>i.type==="pool"))??[];return e.length===1?e[0]:void 0}poolDown(t,e,n,i){var u,p,h,f,m,v,g,b,$,x;let o=this.floor;if(!o)return!1;let s=this.poolArea,a=((u=e.closest("[data-pool-node]"))==null?void 0:u.getAttribute("data-pool-node"))??null;if(this._jointPlace&&s)return this.isAdmin&&this.placeJointPlan(s,this._jointPlace,n,((p=e.closest("[data-pipe]"))==null?void 0:p.getAttribute("data-pipe"))??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isAdmin)return!0;if(!s){let S=o.outdoor.find(R=>R.type==="pool"&&R.points.length>=3&&tt(n,R.points));return S&&(this.selectItem("outdoor",S.id),this._tool="pool",this._pipeMode=!0),!0}let P=(h=e.closest("[data-pipe-end]"))==null?void 0:h.getAttribute("data-pipe-end");if(P&&!this._pipeDraft){let[S,R]=P.split("|"),I=(m=(f=s.pool)==null?void 0:f.pipes)==null?void 0:m.find(k=>k.id===S),E=I&&(R==="to"?I.points[I.points.length-1]:I.points[0]);E&&(this._pipeDraft={from:"",points:[],extend:{pipe:S,end:R,at:E}})}else if(a){let S=this._pipeDraft;S?S.extend?(this.extendPipe(s,S.extend,a,S.points),this._pipeDraft=null):a!==S.from&&(this.addPipe(s.id,S.from,a,S.points),this._pipeDraft=null):this._pipeDraft={from:a,points:[]}}else if(this._pipeDraft){let S=this.snap(n,void 0,t.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[z(S[0]),z(S[1])]]}}return!0}let l=P=>[P.slice(0,P.lastIndexOf(":")),Number(P.slice(P.lastIndexOf(":")+1))];if(s&&this.isAdmin){let P=(v=e.closest("[data-pipe-pt]"))==null?void 0:v.getAttribute("data-pipe-pt");if(P){let[R,I]=l(P);return this.doubleTap(t,`pipept:${P}`)?this.change((E,k)=>{var A,M,T,C;let w=(T=(M=(A=k.outdoor.find(O=>O.id===s.id))==null?void 0:A.pool)==null?void 0:M.pipes)==null?void 0:T.find(O=>O.id===R);w==null||w.points.splice(I,1),(C=w==null?void 0:w.heights)==null||C.splice(I,1)}):this.drag={kind:"pipept",pool:s.id,pipe:R,index:I,base:this._doc,moved:!1},!0}let S=(g=e.closest("[data-pipe-seg]"))==null?void 0:g.getAttribute("data-pipe-seg");if(S){let[R,I]=l(S),E=this.snap(n,void 0,t.altKey);return this.change((k,w)=>{var M,T,C,O;let A=(C=(T=(M=w.outdoor.find(D=>D.id===s.id))==null?void 0:M.pool)==null?void 0:T.pipes)==null?void 0:C.find(D=>D.id===R);A==null||A.points.splice(I,0,[z(E[0]),z(E[1])]),(O=A==null?void 0:A.heights)==null||O.splice(I,0,A.heights[I-1]??A.heights[I]??null)}),this._pipeId=R,this.drag={kind:"pipept",pool:s.id,pipe:R,index:I,base:this._doc,moved:!1},!0}}let d=(b=e.closest("[data-pipe]"))==null?void 0:b.getAttribute("data-pipe");if(d)return this._pipeId=d,!0;if(a&&s&&this.isAdmin)return a.startsWith("port:")?this.drag={kind:"poolport",pool:s.id,id:a.slice(5),base:this._doc,moved:!1}:a.startsWith("joint:")?this.drag={kind:"pooljoint",pool:s.id,id:ut(a).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:a.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let P=($=e.closest("[data-out-box]"))==null?void 0:$.getAttribute("data-out-box");if(P){let[R,I]=l(P);return this.drag={kind:"outbox",id:R,corner:I,base:this._doc,moved:!1},!0}let S=(x=e.closest("[data-out-vertex]"))==null?void 0:x.getAttribute("data-out-vertex");if(S){let[R,I]=l(S);return this.drag={kind:"outvertex",id:R,index:I,base:this._doc,moved:!1},!0}}let c=e.closest("[data-outdoor]")?this.outdoorAt(n)??e.closest("[data-outdoor]").getAttribute("data-outdoor"):null;return c&&o.outdoor.some(P=>P.id===c&&P.type==="pool")?(this.selectItem("outdoor",c),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:c,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(t,e){this.change((n,i)=>{let o=i.outdoor.find(s=>s.id===t);o&&(o.pool??={},e(o.pool,o))})}extendPipe(t,e,n,i){let o=this.floor;if(!o)return;let s=ft(this._doc,o,t);n=this.jointEnd(t,n,i[i.length-1]),this.changePool(t.id,a=>{var c,u;let l=(c=a.pipes)==null?void 0:c.find(p=>p.id===e.pipe);if(!l)return;Object.assign(l,Nt(l,s));let d=l.heights??[];if(e.end==="to"){let p=d[d.length-1]??l.height??null;l.points=[...l.points,...i],l.heights=[...d,...i.map(()=>p)],l.to=n}else{let p=Vs(l,s),h=d[0]??l.height??null;l.points=[...[...i].reverse(),...l.points],l.heights=[...i.map(()=>h),...d],l.from=n;let f=Vs(l,s)-p;l.fittings=(u=l.fittings)==null?void 0:u.map(m=>({...m,at:z(m.at+f)}))}}),this._pipeId=e.pipe}jointEnd(t,e,n,i=[]){var u,p,h;let{kind:o,id:s,port:a}=ut(e),l=o==="joint"&&!a?(p=(u=t.pool)==null?void 0:u.joints)==null?void 0:p.find(f=>f.id===s):void 0;if(!l)return e;if(l.kind==="wall"||l.kind==="floor"){let f=this._doc.floors.find(b=>b.outdoor.some($=>$.id===t.id)),m=f&&ft(this._doc,f,t),[v,g]=[m==null?void 0:m(`joint:${s}:inside`),m==null?void 0:m(`joint:${s}:outside`)];return!n||!v||!g?`joint:${s}:inside`:`joint:${s}:${Math.hypot(n[0]-v.x,n[1]-v.z)<=Math.hypot(n[0]-g.x,n[1]-g.z)?"inside":"outside"}`}let d=new Set([...(((h=t.pool)==null?void 0:h.pipes)??[]).flatMap(f=>[f.from,f.to]),...i]),c=vn(l.kind).find(f=>!d.has(`joint:${s}:${f}`));return c?`joint:${s}:${c}`:e}addPipe(t,e,n,i){let o=this.floor;if(!o)return;let s=o.outdoor.find(l=>l.id===t);s&&(e=this.jointEnd(s,e,i[0]),n=this.jointEnd(s,n,i[i.length-1],[e]));let a={id:X("pipe"),from:e,to:n,floor_id:o.id,points:i};this.changePool(t,l=>l.pipes=[...l.pipes??[],a]),this._pipeId=a.id}addPoolPort(t){var p;let e=this.poolArea;if(!e||!this.isAdmin)return;let n=((p=e.pool)==null?void 0:p.ports)??[],i=e.points.length,o=h=>{let f=e.points[h%i],m=e.points[(h+1)%i];return[(f[0]+m[0])/2,(f[1]+m[1])/2]},[s,a]=te(e.points),l=this._doc.floors.flatMap(h=>h.furniture).find(h=>h.type==="pool_filter"||h.type==="pool_pump"),d=n.filter(h=>h.kind==="inlet").length,c=t==="skimmer"?Oi(e.points,o(0)):t==="inlet"?Oi(e.points,o(Math.floor(i/2)+d*Math.max(1,Math.floor(i/8)))):t==="drain"?[s,a]:l?[l.x+.8,l.z]:[s,a+3],u={id:X("port"),kind:t,x:z(c[0]),z:z(c[1])};this.changePool(e.id,h=>h.ports=[...n,u])}addPoolDevice(t){let e=this.poolArea;this.addEnergyDevice(t),e&&this.selectItem("outdoor",e.id),this._tool="pool"}deletePoolDevice(t){this.change(e=>{var n;for(let i of e.floors){i.furniture=i.furniture.filter(o=>o.id!==t);for(let o of i.outdoor)(n=o.pool)!=null&&n.pipes&&(o.pool.pipes=o.pool.pipes.filter(s=>s.from!==`dev:${t}`&&s.to!==`dev:${t}`))}})}deletePoolPort(t,e){this.changePool(t,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==e),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${e}`&&i.to!==`port:${e}`)})}togglePoolValve(t){let e=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===t);!e||e.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===t);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(t,e){this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===t);i&&Object.assign(i,e)})}portText(t){let{kind:e,port:n}=ut(t),i={in:"A",out1:"B",out2:"C"};return e==="joint"&&n&&i[n]?`${this.t("card_port")} ${i[n]}`:n?this.t(`port_${n}`):""}openCard(t,e){this._card={pool:t,part:e},this._cardJoin=null}partPorts(t,e){var o,s;let{kind:n,id:i}=ut(e);if(n==="joint"){let a=(s=(o=t.pool)==null?void 0:o.joints)==null?void 0:s.find(l=>l.id===i);return a?vn(a.kind).map(l=>`${e}:${l}`):[]}if(n==="dev"){let a=this._doc.floors.flatMap(d=>d.furniture).find(d=>d.id===i),l=a?Re(a.type):[];return l.length?l.map(d=>`${e}:${d}`):[e]}return[e]}partStatus(t,e){var o;let n=((o=t.pool)==null?void 0:o.pipes)??[],i=this.partPorts(t,e);return[i.filter(s=>n.some(a=>a.from===s||a.to===s)).length,i.length]}cardConnect(t,e,n,i){var u,p;let o=this._doc.floors.find(h=>h.outdoor.some(f=>f.id===t.id));if(!o||!n)return;let s=ft(this._doc,o,t),a=((u=t.pool)==null?void 0:u.ports)??[],l=h=>{var g;let{kind:f,id:m,port:v}=ut(h);return f==="port"?ts(((g=a.find(b=>b.id===m))==null?void 0:g.kind)??"inlet"):f==="dev"?ml(v):null},d=this.jointEnd(t,n,void 0,[e]),c=yn({from:e,vias:i,to:[d],floorId:o.id},s,((p=t.pool)==null?void 0:p.joints)??[],l,h=>X(h));this.changePool(t.id,h=>{h.joints=[...h.joints??[],...c.joints],h.pipes=[...h.pipes??[],...c.pipes]}),this._cardJoin=null}cardDisconnect(t,e){this.changePool(t.id,n=>n.pipes=(n.pipes??[]).filter(i=>!e.pipes.includes(i.id)))}cardReroute(t,e){var f,m;let n=((f=t.pool)==null?void 0:f.pipes)??[],i=n.find(v=>v.id===e.pipes[0]);if(!i||!e.other)return;let o=i.from===e.start,s=[...e.holes.map(v=>({kind:"hole",joint:v.joint,dir:v.dir})),...e.fittings.map(v=>({kind:v}))],a=this._doc.floors.find(v=>v.outdoor.some(g=>g.id===t.id));if(!a)return;let l={...t,pool:{...t.pool,pipes:n.filter(v=>!e.pipes.includes(v.id))}},d=ft(this._doc,a,l),c=o?e.start:e.other,u=o?e.other:e.start,p=o?s:[...e.holes].reverse().map(v=>({kind:"hole",joint:v.joint,dir:v.dir==="in"?"out":"in"})).concat(e.fittings.map(v=>({kind:v}))),h=yn({from:c,vias:p,to:[u],floorId:a.id},d,((m=t.pool)==null?void 0:m.joints)??[],()=>null,v=>X(v));this.changePool(t.id,v=>{v.pipes=[...(v.pipes??[]).filter(g=>!e.pipes.includes(g.id)),...h.pipes]})}renderPartCard(){var R,I,E,k,w,A;let t=this._card,e=t?this._doc.floors.flatMap(M=>M.outdoor).find(M=>M.id===t.pool):void 0;if(!t||!e)return y;let n=this.isAdmin,{kind:i,id:o}=ut(t.part),s=i==="joint"?(I=(R=e.pool)==null?void 0:R.joints)==null?void 0:I.find(M=>M.id===o):void 0,a=i==="dev"?this._doc.floors.flatMap(M=>M.furniture).find(M=>M.id===o):void 0,l=i==="port"?(k=(E=e.pool)==null?void 0:E.ports)==null?void 0:k.find(M=>M.id===o):void 0;if(!s&&!a&&!l)return y;let d=((w=e.pool)==null?void 0:w.pipes)??[],c=((A=e.pool)==null?void 0:A.joints)??[],u=this.partPorts(e,t.part),p=this.poolEnds(e).filter(M=>ie(M.node)!==t.part&&!M.used),h=c.filter(M=>M.kind==="wall"||M.kind==="floor"),f=M=>this.poolNodeLabel(e,M),m=M=>ut(M).port?this.portText(M):this.t("card_port"),v=M=>M.kind==="hole"?this.t(M.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(e,M.joint)}):this.t(M.kind==="valve"?"wall_run_valve":"wall_run_sight"),g=()=>{this._card=null,this._cardJoin=null},b=()=>s?[s.x,s.z]:a?[a.x,a.z]:l?[l.x,l.z]:null,$=u.map(M=>{var O;let T=vl(d,c,M),C=((O=this._cardJoin)==null?void 0:O.port)===M?this._cardJoin:null;return _`<div class="fp3d-pc-row ${T.length?"fp3d-on":""}">
        <b>${m(M)}</b>
        <div class="fp3d-pc-conns">
          ${T.map(D=>_`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...D.holes.map(H=>v({kind:"hole",joint:H.joint,dir:H.dir})),...D.fittings.map(H=>v({kind:H}))].map(H=>_`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${H}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${D.other?_`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(e.id,ie(D.other))}>${f(D.other)}</button>`:_`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?_`<span class="fp3d-pc-tools">
                    ${D.other?_`<button class="fp3d-btn" @click=${()=>this.cardReroute(e,D)}>${this.t("card_reroute")}</button>`:y}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(e,D)}>${this.t("card_disconnect")}</button>
                  </span>`:y}
            </div>`)}
          ${n&&(!T.length||u.length===1)?C?this.renderJoinPicker(e,M,C,p,h,v):_`<button class="fp3d-btn ${T.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:M,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:y}
        </div>
      </div>`}),[x,P]=this.partStatus(e,t.part),S=b();return _`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${M=>M.target===M.currentTarget&&g()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${M=>M.key==="Escape"&&g()}>
        <div class="fp3d-wv-head">
          ${s&&n?_`<input
                class="fp3d-pc-name"
                .value=${s.name??""}
                placeholder=${this.jointLabel(e,s.id)}
                title=${this.t("joint_name")}
                @change=${M=>{let T=M.target.value.trim().slice(0,60);this.changePool(e.id,C=>{var D;let O=(D=C.joints)==null?void 0:D.find(H=>H.id===s.id);O&&(O.name=T||null)})}}
              />`:_`<b class="fp3d-pc-title">${f(t.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:x,b:P})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${g}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(e,t.part,u)}
          <div class="fp3d-pc-rows">${$}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${S?_`<button class="fp3d-btn" @click=${()=>{g(),this._wallView=null,this._tool="pool",this.showPoint(S[0],S[1])}}>${this.t("card_show_plan")}</button>`:y}
          ${S&&!l?_`<button class="fp3d-btn" @click=${()=>{g(),this.pickWall(S)}}>▦ ${this.t("card_show_wall")}</button>`:y}
          <span class="fp3d-wv-grow"></span>
          ${n?_`<button class="fp3d-btn fp3d-danger" @click=${()=>{g(),a?this.deletePoolDevice(a.id):l?this.deletePoolPort(e.id,l.id):s&&this.changePool(e.id,M=>{M.joints=(M.joints??[]).filter(T=>T.id!==s.id),M.pipes=(M.pipes??[]).filter(T=>ie(T.from)!==t.part&&ie(T.to)!==t.part)})}}>${this.t("delete")}</button>`:y}
        </div>
      </div>
    </div>`}renderJoinPicker(t,e,n,i,o,s){let a=p=>{var v,g;let{kind:h,id:f}=ut(p);if(h==="port")return"pool";if(h==="dev")return"tech";let m=(g=(v=t.pool)==null?void 0:v.joints)==null?void 0:g.find(b=>b.id===f);return(m==null?void 0:m.kind)==="wall"||(m==null?void 0:m.kind)==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(p=>({g:p,items:i.filter(h=>a(h.node)===p)})).filter(p=>p.items.length),d=p=>this._cardJoin={...n,...p},c=p=>d({vias:[...n.vias,p]}),u=new Set(n.vias.flatMap(p=>p.kind==="hole"?[p.joint]:[]));return _`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(t,e)}</span>
        ${n.vias.map((p,h)=>_`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>d({vias:n.vias.filter((f,m)=>m!==h)})}>${s(p)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?_`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>d({to:""})}>${this.poolNodeLabel(t,n.to)} <i>✕</i></button>`:_`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?y:_`<div class="fp3d-pc-steps">
            ${o.some(p=>!u.has(p.id))?_`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${o.filter(p=>!u.has(p.id)).map(p=>_`<div class="fp3d-pc-hole">
                        <span>${this.jointLabel(t,p.id)}</span>
                        <button class="fp3d-pc-pick" @click=${()=>c({kind:"hole",joint:p.id,dir:"in"})}>${this.t("card_hole_in")}</button>
                        <button class="fp3d-pc-pick" @click=${()=>c({kind:"hole",joint:p.id,dir:"out"})}>${this.t("card_hole_out")}</button>
                      </div>`)}`:y}
            <div class="fp3d-pc-step">${this.t("card_step_fit")}</div>
            <div class="fp3d-pc-picks">
              <button class="fp3d-pc-pick" @click=${()=>c({kind:"valve"})}>${this.t("wall_run_valve")}</button>
              <button class="fp3d-pc-pick" @click=${()=>c({kind:"sight"})}>${this.t("wall_run_sight")}</button>
            </div>
            <div class="fp3d-pc-step">${this.t("card_step_end")}</div>
            ${l.map(({g:p,items:h})=>_`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${p}`)}</span>
                <div class="fp3d-pc-picks">${h.map(f=>_`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>d({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(t,e,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(t,e,n){var f,m,v;let i=((f=t.pool)==null?void 0:f.pipes)??[],o=g=>i.some(b=>b.from===g||b.to===g),{kind:s,id:a}=ut(e),l=s==="joint"?(v=(m=t.pool)==null?void 0:m.joints)==null?void 0:v.find(g=>g.id===a):void 0,d=s==="dev"?this._doc.floors.flatMap(g=>g.furniture).find(g=>g.id===a):void 0,c={},u=y,p=(l==null?void 0:l.kind)??(d?d.type:"port");p==="tee"?(Object.assign(c,{in:[20,60],out1:[180,60],out2:[100,130]}),u=j`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):p==="y"?(Object.assign(c,{in:[20,70],out1:[180,25],out2:[180,115]}),u=j`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):p==="wall"||p==="floor"?(Object.assign(c,{outside:[20,70],inside:[180,70]}),u=j`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):p==="pool_pump"?(Object.assign(c,{suction:[20,95],pressure:[110,10]}),u=j`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):p==="pool_filter"?(Object.assign(c,{pump:[20,40],return:[180,40],waste:[100,4]}),u=j`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):p==="pool_heat_pump"?(Object.assign(c,{in:[180,95],out:[180,45]}),u=j`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(c[""]=[180,70],u=j`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let h=p==="pool_filter"?[100,41]:p==="pool_pump"?[100,85]:[100,70];return _`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(g=>{let b=ut(g).port??"",$=c[b]??c[""]??[180,70],x=o(g);return j`<g class="fp3d-pc-stub ${x?"fp3d-on":""}" @click=${()=>this.isAdmin&&!x&&(this._cardJoin={port:g,to:"",vias:[]})}>
          <line x1=${h[0]} y1=${h[1]} x2=${$[0]} y2=${$[1]} />
          <circle cx=${$[0]} cy=${$[1]} r="7" />
          <title>${b?this.portText(g):""}</title>
        </g>`})}
      ${u}
      ${n.map(g=>{let b=ut(g).port,$=c[b??""]??[180,70];return b?j`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,$[0]))} y=${$[1]<70?$[1]+20:$[1]-12}>${this.portText(g)}</text>`:y})}
    </svg>`}jointLabel(t,e){var a,l;let n=((a=t.pool)==null?void 0:a.joints)??[],i=n.find(d=>d.id===e);if(!i)return this.t("pool_loose_end");let o=d=>d==="wall"||d==="floor"?"hole":d??"tee";if((l=i.name)!=null&&l.trim())return i.name.trim();let s=n.filter(d=>o(d.kind)===o(i.kind));return`${this.t(`joint_${i.kind??"tee"}`,{n:s.indexOf(i)+1})}`}poolEnds(t){var o,s,a;let e=((o=t.pool)==null?void 0:o.pipes)??[],n=l=>e.some(d=>d.from===l||d.to===l),i=[];for(let l of((s=t.pool)==null?void 0:s.ports)??[])i.push({node:`port:${l.id}`,label:this.poolNodeLabel(t,`port:${l.id}`),used:!1});for(let l of this._doc.floors.flatMap(d=>d.furniture).filter(d=>Pt.includes(d.type)&&d.type!=="pool_valve")){let d=Re(l.type);for(let c of d.length?d.map(u=>`dev:${l.id}:${u}`):[`dev:${l.id}`])i.push({node:c,label:this.poolNodeLabel(t,c),used:d.length>0&&n(c)})}for(let l of((a=t.pool)==null?void 0:a.joints)??[])for(let d of vn(l.kind)){let c=`joint:${l.id}:${d}`;i.push({node:c,label:this.poolNodeLabel(t,c),used:n(c)})}return i}placeJointPlan(t,e,n,i){var c,u;let o=this.floor;if(!o)return;let s=ft(this._doc,o,t),a=i?(u=(c=t.pool)==null?void 0:c.pipes)==null?void 0:u.find(p=>p.id===i):void 0;if(a){let p=Gt(a,s),h=null;for(let m=1;m<p.length;m++){let[v,g]=[p[m-1],p[m]],[b,$]=[g[0]-v[0],g[2]-v[2]],x=b*b+$*$,P=x>0?Math.max(0,Math.min(1,((n[0]-v[0])*b+(n[1]-v[2])*$)/x)):0,S=[v[0]+b*P,v[1]+(g[1]-v[1])*P,v[2]+$*P],R=Math.hypot(S[0]-n[0],S[2]-n[1]);(!h||R<h.d)&&(h={p:S,d:R})}let f=h&&Ci(a,s,h.p,X("joint"),X("pipe"));if(f){this.changePool(t.id,m=>{m.joints=[...m.joints??[],{...f.joint,kind:e}],m.pipes=(m.pipes??[]).flatMap(v=>v.id===a.id?[{...f.first,to:`joint:${f.joint.id}:in`},{...f.second,from:`joint:${f.joint.id}:out1`}]:[v])});return}}let l=o.rooms.some(p=>p.points.length>=3&&tt(n,p.points)),d=this.snap(n);this.changePool(t.id,p=>p.joints=[...p.joints??[],{id:X("joint"),kind:e,x:z(d[0]),z:z(d[1]),y:l?.5:-.3}])}poolNodePos(t,e){var o,s;if(!e)return null;let n=this._doc.floors.find(a=>a.outdoor.some(l=>l.id===t.id));if(e.startsWith("joint:")||e.split(":").length>2){let a=n&&ft(this._doc,n,t)(e);return a?[a.x,a.z]:null}if(e.startsWith("port:")){let a=(s=(o=t.pool)==null?void 0:o.ports)==null?void 0:s.find(l=>l.id===e.slice(5));return a?[a.x,a.z]:null}let i=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.id===e.slice(4));return i?[i.x,i.z]:null}poolNodeLabel(t,e){var d;let{kind:n,id:i,port:o}=ut(e);if(!e)return this.t("pool_loose_end");if(o||n==="joint"){let c=n==="joint"?this.jointLabel(t,i):this.poolNodeLabel(t,`${n}:${i}`);return o?`${c} \xB7 ${this.portText(e)}`:c}if(e.startsWith("port:")){let c=((d=t.pool)==null?void 0:d.ports)??[],u=c.find(h=>h.id===e.slice(5));if(!u)return"?";let p=c.filter(h=>h.kind===u.kind);return`${this.t(`pool_port_${u.kind}`)}${p.length>1?` ${p.indexOf(u)+1}`:""}`}let s=this._doc.floors.flatMap(c=>c.furniture).filter(c=>Pt.includes(c.type)),a=s.find(c=>c.id===e.slice(4));if(!a)return"?";let l=s.filter(c=>c.type===a.type);return`${a.name||this.t(`furn_${a.type}`)}${l.length>1&&!a.name?` ${l.indexOf(a)+1}`:""}`}renderPoolPlan(t){var h,f,m,v;let e=this.poolArea,n=t.furniture.filter(g=>Pt.includes(g.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},o=e?(((h=e.pool)==null?void 0:h.pipes)??[]).filter(g=>g.floor_id===t.id):[],s=o.map(g=>{let b=this.poolNodePos(e,g.from),$=this.poolNodePos(e,g.to);if((!b||!$)&&!g.heights)return y;let x=b?1:0,P=[...b?[b]:[],...g.points,...$?[$]:[]].map(T=>this.toScreen(T));if(P.length<2)return y;let S=g.id===this._pipeId,R=0;for(let T=1;T<P.length-1;T++)Math.hypot(P[T+1][0]-P[T][0],P[T+1][1]-P[T][1])>Math.hypot(P[R+1][0]-P[R][0],P[R+1][1]-P[R][1])&&(R=T);let[I,E]=P[R],[k,w]=P[R+1],A=Math.atan2(w-E,k-I)*180/Math.PI,M=P.map(T=>T.join(",")).join(" ");return j`<g data-pipe=${g.id}>
        <polyline class="fp3d-pipe-hit" points=${M} />
        <polyline class="fp3d-pipe ${S?"fp3d-pipe-sel":""}" points=${M} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(I+k)/2} ${(E+w)/2}) rotate(${A})`} />
        ${S&&this.isAdmin?j`${P.slice(0,-1).map((T,C)=>j`<line class="fp3d-pipe-seg" data-pipe-seg=${`${g.id}:${C+1-x}`} x1=${T[0]} y1=${T[1]} x2=${P[C+1][0]} y2=${P[C+1][1]} />`)}
              ${g.points.map((T,C)=>{let[O,D]=this.toScreen(T);return j`<g class="fp3d-vertex" data-pipe-pt=${`${g.id}:${C}`}><circle cx=${O} cy=${D} r="14" class="fp3d-hit" /><circle cx=${O} cy=${D} r="5" /></g>`})}`:y}
      </g>`}),a=(g,b,$,x,P)=>{let[S,R]=this.toScreen(b);return j`<g class="fp3d-pool-node ${x}" data-pool-node=${g}><title>${P}</title><circle cx=${S} cy=${R} r="16" class="fp3d-hit" /><circle cx=${S} cy=${R} r="10" /><text x=${S} y=${R}>${$}</text></g>`},l=e?(((f=e.pool)==null?void 0:f.ports)??[]).map(g=>a(`port:${g.id}`,[g.x,g.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[g.kind],`fp3d-pool-port-${g.kind}`,this.poolNodeLabel(e,`port:${g.id}`))):[],d=n.map(g=>a(`dev:${g.id}`,[g.x,g.z],g.type==="pool_valve"?g.valve_open===!1?"\u2715":"":i[g.type],`fp3d-pool-dev ${g.type==="pool_valve"&&g.valve_open===!1?"fp3d-pool-closed":""}`,e?this.poolNodeLabel(e,`dev:${g.id}`):g.type)),c=y;if(e&&this._pipeDraft){let g=((m=this._pipeDraft.extend)==null?void 0:m.at)??this.poolNodePos(e,this._pipeDraft.from);if(g){let b=[g,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map($=>this.toScreen($).join(",")).join(" ");c=j`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${b} />`}}let u=e?(((v=e.pool)==null?void 0:v.joints)??[]).map(g=>a(`joint:${g.id}`,[g.x,g.z],g.kind==="wall"||g.kind==="floor"?"\u25CE":g.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(e,g.id))):[],p=o.flatMap(g=>g.heights&&g.points.length?["from","to"].filter(b=>!g[b]).map(b=>{let[$,x]=this.toScreen(b==="to"?g.points[g.points.length-1]:g.points[0]);return j`<g class="fp3d-pipe-end" data-pipe-end=${`${g.id}|${b}`}><circle cx=${$} cy=${x} r="14" class="fp3d-hit" /><circle cx=${$} cy=${x} r="6" /></g>`}):[]);return j`<g class="fp3d-pool-plan">${s}${c}${u}${p}${l}${d}</g>`}renderPoolPanel(t){let e=(t==null?void 0:t.outdoor.filter(i=>i.type==="pool"))??[],n=this.poolArea;return n?_`${e.length>1?_`<section>
            <div class="fp3d-seg">${e.map((i,o)=>_`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${o+1}</button>`)}</div>
          </section>`:y}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:_`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(e.length?"pool_choose":"pool_tool_empty")}</p>
        ${e.length?_`<div class="fp3d-actions">${e.map((i,o)=>_`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${e.length>1?o+1:""}</button>`)}</div>`:y}
      </section>`}renderPoolTech(t){var a,l,d;if(!this.pipeRules)return y;let e=this.isAdmin,n=((a=t.pool)==null?void 0:a.ports)??[],i=((l=t.pool)==null?void 0:l.pipes)??[],o=this._doc.floors.flatMap(c=>c.furniture).filter(c=>Pt.includes(c.type)),s=i.find(c=>c.id===this._pipeId);return _`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!e} title=${this.t("tech_open_hint")} @click=${()=>{this.techPick=!0,this._wallPick=!0}}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(c=>_`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolPort(c)}>+ ${this.t(`pool_port_${c}`)}</button>`)}
        </div>
        ${n.map(c=>_`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`port:${c.id}`)}>${this.poolNodeLabel(t,`port:${c.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(t,`port:${c.id}`)[0]?"\u2713":"\u25CB"}</span>
            ${c.kind==="inlet"||c.kind==="skimmer"?_`<label class="fp3d-pool-depth" title=${this.t("pool_port_depth_hint")}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(c.depth??(c.kind==="inlet"?.3:0))} ?disabled=${!e} @change=${u=>{let p=Number(u.target.value.replace(",","."));Number.isFinite(p)&&this.change((h,f)=>{var v,g,b;let m=(b=(g=(v=f.outdoor.find($=>$.id===t.id))==null?void 0:v.pool)==null?void 0:g.ports)==null?void 0:b.find($=>$.id===c.id);m&&(m.depth=Math.min(3,Math.max(0,z(p))))})}} />m</label
                >`:y}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolPort(t.id,c.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${Pt.filter(c=>c!=="pool_valve").map(c=>_`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolDevice(c)}>+ ${this.t(`furn_${c}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${o.map(c=>_`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`dev:${c.id}`)}>${this.poolNodeLabel(t,`dev:${c.id}`)}</button>
            <span class="fp3d-ports">${Re(c.type).map(u=>_`<i class=${i.some(p=>p.from===`dev:${c.id}:${u}`||p.to===`dev:${c.id}:${u}`)?"fp3d-on":""}>${this.t(`port_${u}`)}</i>`)}</span>
            ${c.type==="pool_filter"?_`<select ?disabled=${!e} title=${this.t("pool_valve_type")} @change=${u=>this.setPoolDevice(c.id,{variant:u.target.value==="top6"?null:u.target.value})}>
                    ${hl.map(u=>_`<option value=${u} ?selected=${(c.variant??"top6")===u}>${this.t(`valve_${u}`)}</option>`)}
                  </select>
                  <select ?disabled=${!e} title=${this.t("pool_valve_position")} @change=${u=>this.setPoolDevice(c.id,{valve_position:u.target.value})}>
                  ${da.map(u=>_`<option value=${u} ?selected=${(c.valve_position??"filter")===u}>${this.t(`valve_${u}`)}</option>`)}
                </select>`:c.type==="pool_heat_pump"?_`<select ?disabled=${!e} title=${this.t("hp_ports")} @change=${u=>this.setPoolDevice(c.id,{variant:u.target.value==="right"?null:u.target.value})}>
                    ${["right","left","back"].map(u=>_`<option value=${u} ?selected=${(c.variant??"right")===u}>${this.t("hp_ports")}: ${this.t(`hp_side_${u}`)}</option>`)}
                  </select>`:c.type==="pool_valve"?_`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${c.valve_open!==!1} ?disabled=${!e} @change=${u=>this.setPoolDevice(c.id,{valve_open:u.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:y}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(c.id)}>✕</button>
          </div>`)}
        ${(((d=t.pool)==null?void 0:d.joints)??[]).map(c=>_`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`joint:${c.id}`)}>${this.jointLabel(t,c.id)}</button>
            <span class="fp3d-ports">${vn(c.kind).map(u=>{let p=`joint:${c.id}:${u}`,h=i.some(f=>f.from===p||f.to===p||(c.kind??"tee")!=="wall"&&(c.kind??"tee")!=="floor"&&ie(f.from)===`joint:${c.id}`&&!ut(f.from).port&&u==="in");return _`<i class=${h?"fp3d-on":""} title=${this.portText(p)}>${this.portText(p)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,u=>{u.joints=(u.joints??[]).filter(p=>p.id!==c.id),u.pipes=(u.pipes??[]).filter(p=>ie(p.from)!==`joint:${c.id}`&&ie(p.to)!==`joint:${c.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!e} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(c=>_`<div class="fp3d-pool-row ${c.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=c.id}>${this.poolNodeLabel(t,c.from)} → ${this.poolNodeLabel(t,c.to)}</button>
            <button class="fp3d-btn" ?disabled=${!e} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===c.id);p&&([p.from,p.to,p.points]=[p.to,p.from,[...p.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,u=>u.pipes=(u.pipes??[]).filter(p=>p.id!==c.id))}>✕</button>
          </div>`)}
        ${s?_`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),s.height??.3,c=>this.changePool(t.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===s.id);p&&(p.height=Math.min(10,Math.max(-5,z(c))))}),.05)}
            </div>`:y}
      </section>`}renderPoolShape(t){let e=this.isAdmin,n=zt(t.points),i=t.pool_shape,o=(l,d,c,u)=>i&&this.updateOutdoor({points:bi(i,l,d,c,u)}),s=(n.x0+n.x1)/2,a=(n.z0+n.z1)/2;return _`${i==="round"?_`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let d=Math.max(.5,l)/2;o(s-d,a-d,s+d,a+d)},.01,1)}`:i==="oval"?_`${this.len(this.t("width"),n.x1-n.x0,l=>o(s-Math.max(1,l)/2,n.z0,s+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>o(n.x0,a-Math.max(1,l)/2,n.x1,a+Math.max(1,l)/2),.01,1)}`:y}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!t.above} ?disabled=${!e} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${t.above?this.len(this.t("pool_height"),_i(t),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,z(l)))}),.05,.4):y}
      ${this.len(this.t("pool_depth"),Mo(t),l=>this.updateOutdoor({depth:Math.min(5,Math.max(.3,z(l)))}),.05,.3)}
      ${t.above?y:this.len(this.t("pool_rim"),t.rim??.06,l=>this.updateOutdoor({rim:Math.min(2,Math.max(-.3,z(l)))}),.01,-.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!t.above&&this.floor&&!So(this.floor,t)?_`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>`:y}`}get pipeRules(){return Nc()}editorHost(){let t=this.hass;return{api:1,hass:()=>t,building:()=>this._doc,language:()=>t.language||"en",devices:()=>[],findDevice:()=>null,openings:()=>[],energy:()=>null,consumers:()=>[],canEdit:()=>this.isAdmin,updateBuilding:e=>this.change(n=>e(n)),callService:(e,n,i)=>t.callService(e,n,i),newId:e=>X(e),refresh:()=>this.requestUpdate(),plan:As}}renderModuleFields(t){return this.hass?this.renderFields(Vc(this.editorHost(),t)):y}renderModuleFurnitureFields(t){return this.hass?this.renderFields(Wc(this.editorHost(),t)):y}renderFields(t,e=!0){if(!t.length)return y;let n=this.isAdmin,i=o=>{switch(o.kind){case"heading":return _`<h3>${o.text}</h3>`;case"text":return _`<p class="fp3d-sub fp3d-wide">${o.text}</p>`;case"entity":return this.entitySelect(o.label,o.value,o.auto,this.entityOptions(o.filter),s=>o.set(s));case"select":return _`<label class="fp3d-field fp3d-wide"
            >${o.label}
            <select ?disabled=${!n} @change=${s=>o.set(s.target.value)}>
              ${o.options.map(s=>_`<option value=${s.id} ?selected=${s.id===o.value}>${s.label}</option>`)}
            </select></label
          >`;case"check":return _`<label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${o.value} ?disabled=${!n} @change=${s=>o.set(s.target.checked)} /> ${o.label}</label>`;case"button":return _`<button class="fp3d-btn ${o.primary?"fp3d-primary":""} fp3d-wide" ?disabled=${!n} title=${o.title??""} @click=${()=>o.onTap()}>${o.label}</button>`}};return e?_`<section>
      <div class="fp3d-form fp3d-links">${t.map(i)}</div>
    </section>`:t.map(i)}renderRooms(t){return j`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return j`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(te(e.points));return j`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(Rt(e.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return y;let[n,i]=this.toScreen(t.points[e]),[o,s]=this.toScreen(t.points[(e+1)%t.points.length]);return j`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${s} />`}renderMeter(t){var o;let e=(o=this._doc.energy)==null?void 0:o.meter;if(!e||e.floor_id!==t.id)return y;let[n,i]=this.toScreen([e.x,e.z]);return j`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale,n=this._furnitureId?this.selection():[],i=n.length>1;return j`<g>${this.renderSelectionFrame(t,n)}${t.furniture.map(o=>{var b,$;let s=n.includes(o.id),a=o.id===this._furnitureId&&!i,[l,d]=this.toScreen([o.x,o.z]),c=Math.min(o.w,o.d)*e>44,u=o.rotation*Math.PI/180,p=o.d/2+Math.max(.3,26/e),[h,f]=this.toScreen([o.x-Math.sin(u)*p,o.z+Math.cos(u)*p]),[m,v]=this.toScreen([o.x-Math.sin(u)*(o.d/2),o.z+Math.cos(u)*(o.d/2)]),g=Kt(o.type)&&!!o.entity&&o.entity!=="none"&&(($=(b=this.hass)==null?void 0:b.states[o.entity])==null?void 0:$.state)==="on";return j`<g data-furniture=${o.id} class=${`fp3d-furn${a||s?" fp3d-furn-sel":""}${g?" fp3d-furn-lit":""}${_e.includes(o.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${l} ${d}) rotate(${o.rotation}) scale(${o.mirror?-e:e} ${e})">
          <rect class="fp3d-furn-body" x=${-o.w/2} y=${-o.d/2} width=${o.w} height=${o.d} />
          <g class="fp3d-furn-sym">${Ja(o.type,o.w,o.d)}</g>
          <line class="fp3d-furn-front" x1=${-o.w/2} y1=${o.d/2} x2=${o.w/2} y2=${o.d/2} />
        </g>
        ${c?j`<text x=${l} y=${d+4}>${He(this.hass,o.type)}</text>`:y}
      </g>
      ${a&&this.isAdmin&&!o.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,P])=>{let[S,R]=this.toScreen([o.x+x*o.w*Math.cos(u)/2-P*o.d*Math.sin(u)/2,o.z+x*o.w*Math.sin(u)/2+P*o.d*Math.cos(u)/2]);return j`<g class="fp3d-resize" data-resize=${`${o.id}:${x}:${P}`}>
              <circle cx=${S} cy=${R} r="14" class="fp3d-hit" />
              <rect x=${S-5} y=${R-5} width="10" height="10" rx="2" />
            </g>`}):y}
      ${a?(()=>{let[x,P]=this.toScreen([o.x+Math.sin(u)*(o.d/2+18/e),o.z-Math.cos(u)*(o.d/2+18/e)]);return j`<text class="fp3d-dim" x=${x} y=${P+4}>${this.m(o.w,2)} × ${this.m(o.d,2)}</text>`})():y}
      ${a&&o.locked?j`<text class="fp3d-lock" x=${h} y=${f+5}>🔒</text>`:y}
      ${a&&this.isAdmin&&!o.locked?j`<g class="fp3d-rotate" data-rotate=${o.id}>
            <line x1=${m} y1=${v} x2=${h} y2=${f} />
            <circle cx=${h} cy=${f} r="16" class="fp3d-hit" />
            <circle cx=${h} cy=${f} r="8" />
            <path d="M${h-4} ${f-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}`})}</g>`}renderSelectionFrame(t,e){let n=this.drag,i=(n==null?void 0:n.kind)==="marquee"?j`<rect class="fp3d-marquee" x=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[0]))} y=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[1]))} width=${Math.abs(this.toScreen(n.end)[0]-this.toScreen(n.start)[0])} height=${Math.abs(this.toScreen(n.end)[1]-this.toScreen(n.start)[1])} />`:y;if(e.length<2)return i;let o=t.furniture.filter(u=>e.includes(u.id)).flatMap(u=>Wt(u));if(!o.length)return i;let[s,a]=this.toScreen([Math.min(...o.map(u=>u[0])),Math.min(...o.map(u=>u[1]))]),[l,d]=this.toScreen([Math.max(...o.map(u=>u[0])),Math.max(...o.map(u=>u[1]))]),c=!this._multi.length;return j`${i}<g class=${`fp3d-selframe${c?" fp3d-selframe-block":""}`}>
      <rect x=${s-6} y=${a-6} width=${l-s+12} height=${d-a+12} rx="6" />
      <text x=${s-4} y=${a-12}>${c?`\u25A3 ${this.t("block_title")} \xB7 ${e.length}`:this.t("multi_title",{n:e.length})}</text>
    </g>`}renderBlockForm(){var s,a;let t=this.selection(),e=(((s=this.floor)==null?void 0:s.furniture)??[]).filter(l=>t.includes(l.id)),n=!this._multi.length&&!!((a=e[0])!=null&&a.group),i=e.every(l=>this.isFixedItem("furniture",l.id)),o=!i&&e.some(l=>this.isFixedItem("furniture",l.id));return _`<section>
      <div class="fp3d-h3row"><h3>${n?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</h3></div>
      <p class="fp3d-sub">${this.t(n?"block_hint":"multi_hint")}</p>
      ${o?_`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>`:y}
      <div class="fp3d-block-parts">
        ${e.map(l=>_`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${()=>{this.selectItem("furniture",l.id),this._single=!!l.group}}>${l.name||He(this.hass,l.type)}</button>`)}
      </div>
      <div class="fp3d-actions">
        ${n?_`<button class="fp3d-btn" @click=${()=>this.ungroupSelection()}>${this.t("block_break")}</button>`:_`<button class="fp3d-btn fp3d-primary" @click=${()=>this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
        <button class="fp3d-btn ${o?"fp3d-primary":""}" @click=${()=>this.lockSelection(!i&&!o)}>${i?`\u{1F513} ${this.t("unfix")}`:o?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`}renderMultiToggle(){return _`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${t=>this._multiMode=t.target.checked} /> ${this.t("multi_mode")}</label>`}renderOpenings(t,e){return j`<g>${t.openings.map(n=>{let i=ze(n,t.rooms,t.walls??[]);if(!i)return y;let{room:o,edge:s}=i,a=Dn(e,n,i),l=Ae(o,s,n.offset-n.width/2),d=Ae(o,s,n.offset+n.width/2),c=(d[0]-l[0])/(n.width||1),u=(d[1]-l[1])/(n.width||1),p=St(o.points)>=0?1:-1,h=[-u*p,c*p],f=[.06,.06];a&&(f=a.wall.free||a.wall.roomLeft===o.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let m=(I,E)=>this.toScreen([I[0]+h[0]*E,I[1]+h[1]*E]),v=[m(l,f[0]+.01),m(d,f[0]+.01),m(d,-f[1]-.01),m(l,-f[1]-.01)],g=n.id===this._openingId,b=xi(n,(a==null?void 0:a.wall.exterior)??!1),$=n.type==="door"&&Fo(b),x=`fp3d-open fp3d-open-${n.type}${$?" fp3d-open-front":""}${g?" fp3d-open-sel":""}`,P;if(n.type==="garage"){let I=m(l,f[0]-.04),E=m(d,f[0]-.04),k=m(l,f[0]+Math.min(2,n.height)),w=m(d,f[0]+Math.min(2,n.height));P=j`<line x1=${I[0]} y1=${I[1]} x2=${E[0]} y2=${E[1]} />
          <path class="fp3d-open-track" d="M${I[0]} ${I[1]}L${k[0]} ${k[1]}M${E[0]} ${E[1]}L${w[0]} ${w[1]}" />`}else if(n.type==="door"){let I=n.swing==="out",E=I?-f[1]:f[0],k=n.hinge==="left"==p>0,w=n.leaves===2,A=l,M=d,T=[],C=wa(n.width,b,k,n);if(C){let Z=Y=>Y<=.02?l:Y>=n.width-.02?d:Ae(o,s,n.offset-n.width/2+Y);A=Z(C.x0),M=Z(C.x1),T=C.panels.map(([Y,it])=>[Z(Y),Z(it)])}let O=[(A[0]+M[0])/2,(A[1]+M[1])/2],D=(w?.5:1)*Math.hypot(M[0]-A[0],M[1]-A[1]),H=(f[0]-f[1])/2,U=T.map(([Z,Y])=>{let it=m(Z,H+.035),q=m(Y,H+.035),lt=m(Z,H-.035),It=m(Y,H-.035);return j`<line class="fp3d-open-pane" x1=${it[0]} y1=${it[1]} x2=${q[0]} y2=${q[1]} /><line class="fp3d-open-pane" x1=${lt[0]} y1=${lt[1]} x2=${It[0]} y2=${It[1]} />`}),G=(Z,Y)=>{let[it,q]=m(Z,E),[lt,It]=m(Y,E),Zt=m(Z,E+(I?-D:D)),B=D*this._view.scale,pt=(Zt[0]-it)*(It-q)-(Zt[1]-q)*(lt-it);return j`<path d="M${it} ${q}L${Zt[0]} ${Zt[1]}A${B} ${B} 0 0 ${pt>0?1:0} ${lt} ${It}" />`};P=j`${U}${b==="passage"?j`<line class="fp3d-open-passage" x1=${m(l,H)[0]} y1=${m(l,H)[1]} x2=${m(d,H)[0]} y2=${m(d,H)[1]} />`:b==="sliding"?j`<line x1=${m(A,E)[0]} y1=${m(A,E)[1]} x2=${m(M,E)[0]} y2=${m(M,E)[1]} />`:w?j`${G(A,O)}${G(M,O)}`:G(k?A:M,k?M:A)}`}else{let I=(f[0]-f[1])/2,E=m(l,I+.035),k=m(d,I+.035),w=m(l,I-.035),A=m(d,I-.035),M=[(l[0]+d[0])/2,(l[1]+d[1])/2],T=m(M,f[0]),C=m(M,-f[1]);P=j`<line x1=${E[0]} y1=${E[1]} x2=${k[0]} y2=${k[1]} /><line x1=${w[0]} y1=${w[1]} x2=${A[0]} y2=${A[1]} />${n.leaves===2?j`<line x1=${T[0]} y1=${T[1]} x2=${C[0]} y2=${C[1]} />`:y}`}let S=m(l,(f[0]-f[1])/2),R=m(d,(f[0]-f[1])/2);return j`<g data-opening=${n.id} class=${x}>
        <line class="fp3d-open-hit" x1=${S[0]} y1=${S[1]} x2=${R[0]} y2=${R[1]} />
        <polygon class="fp3d-open-gap" points=${v.map(I=>I.join(",")).join(" ")} />
        ${P}
      </g>`})}</g>`}renderDevices(t){return j`<g>${t.placements.map(e=>{var d,c;let n=at(e.entity_id);if(!n)return y;let[i,o]=this.toScreen([e.x,e.z]),s=((c=(d=this.hass)==null?void 0:d.states[e.entity_id])==null?void 0:c.state)==="on",a=e.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return j`${n==="camera"?this.renderCameraWedge(e,a):y}<g data-device=${e.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${_t(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Bn(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&e.locked?j`<text class="fp3d-lock" x=${i+16} y=${o-12}>🔒</text>`:y}`})}</g>`}renderCameraWedge(t,e){let n=t.mount==="ceiling",i=t.fov??(n?360:90),o=t.reach??(n?3:4.5),s=(t.rotation??0)*Math.PI/180,a=($,x)=>this.toScreen([t.x-Math.sin(s+$)*x,t.z+Math.cos(s+$)*x]),[l,d]=this.toScreen([t.x,t.z]),c=Math.min(i,359.9)*Math.PI/180/2,[u,p]=a(-c,o),[h,f]=a(c,o),m=o*this._view.scale,v=i>=360?"":`M${l} ${d}L${u} ${p}A${m} ${m} 0 ${c>Math.PI/2?1:0} 1 ${h} ${f}Z`,[g,b]=a(0,o);return j`<g class="fp3d-wedge ${e?"fp3d-wedge-sel":""}">
      ${i>=360?j`<circle cx=${l} cy=${d} r=${m} />`:j`<path d=${v} />`}
      ${e&&this.isAdmin&&!t.locked?j`<g class="fp3d-rotate" data-aim=${t.entity_id}>
            <line x1=${l} y1=${d} x2=${g} y2=${b} />
            <circle cx=${g} cy=${b} r="16" class="fp3d-hit" />
            <circle cx=${g} cy=${b} r="8" />
            <path d="M${g-4} ${b-1}a4 4 0 1 1 2 3.5" />
          </g>`:y}
    </g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((s,a)=>{let l=e[(a+1)%n],[d,c]=this.toScreen(s),[u,p]=this.toScreen(l),h=Math.hypot(l[0]-s[0],l[1]-s[1]),f=(d+u)/2,m=(c+p)/2,[v,g]=this.toScreen(te(e)),b=-(p-c),$=u-d,x=Math.hypot(b,$)||1;b/=x,$/=x,b*(f-v)+$*(m-g)<0&&(b=-b,$=-$);let P=Math.hypot(u-d,p-c);return j`
        ${P>50?Math.abs(b)>Math.abs($)?j`<text class="fp3d-dim" style="text-anchor:${b>0?"start":"end"}" x=${f+b*13} y=${m+$*13+4}>${this.m(h,2)}</text>`:j`<text class="fp3d-dim" x=${f+b*16} y=${m+$*16+4}>${this.m(h,2)}</text>`:y}
        ${P>36?j`<g data-mid=${a} class="fp3d-mid"><circle cx=${f} cy=${m} r="14" class="fp3d-hit" /><circle cx=${f} cy=${m} r="6" /><path d="M${f-3} ${m}h6M${f} ${m-3}v6" /></g>`:y}
      `}),o=e.map((s,a)=>{let[l,d]=this.toScreen(s);return j`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${d-9}>${a+1}</text>`});return j`<g>${i}${o}</g>`}renderDraft(){let t=this.drag;if((t==null?void 0:t.kind)==="freewall"){let[i,o]=this.toScreen(t.start),[s,a]=this.toScreen(t.end),l=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return j`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${i} y1=${o} x2=${s} y2=${a} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${(o+a)/2-10}>${this.m(l,2)}</text>
      </g>`}if((t==null?void 0:t.kind)==="rect"){let[i,o]=this.toScreen(t.start),[s,a]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),d=Math.abs(t.end[1]-t.start[1]);return j`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,s)} y=${Math.min(o,a)} width=${Math.abs(s-i)} height=${Math.abs(a-o)} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${Math.min(o,a)-8}>${this.m(l,2)} × ${this.m(d,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return y;let e=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=e.map(i=>this.toScreen(i));return j`<g pointer-events="none">
      ${n.length>1?j`<polyline class="fp3d-draft" points=${n.map(i=>i.join(",")).join(" ")} />`:y}
      ${n.slice(1).map((i,o)=>{let s=n[o];return Math.hypot(i[0]-s[0],i[1]-s[1])<30?y:j`<text class="fp3d-dim" x=${(s[0]+i[0])/2} y=${(s[1]+i[1])/2-6}>${this.m(Math.hypot(e[o+1][0]-e[o][0],e[o+1][1]-e[o][1]),2)}</text>`})}
      ${this._draft.map((i,o)=>{let[s,a]=this.toScreen(i);return j`<circle class=${o===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${a} r=${o===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?j`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:y}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return j`<g pointer-events="none">
      ${t.x!==void 0?j`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:y}
      ${t.z!==void 0?j`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:y}
      ${t.point?j`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:y}
    </g>`}get unit(){return Go(this.hass,this._doc.settings.units)}m(t,e=2){return rl(t,this.unit,n=>Bt(this.hass,n,e))}area(t){return al(Math.abs(t),this.unit,e=>Bt(this.hass,e,1))}lenValue(t){return this.unit==="imperial"?Je(t):String(z(t))}readLen(t){if(this.unit==="imperial")return Yo(t,"imperial");let e=parseFloat(t.replace(",","."));return Number.isFinite(e)?e:null}len(t,e,n,i=.01,o){return this.unit!=="imperial"?this.num(t,e,n,i,o):_`<label class="fp3d-field"
      >${Vn(t,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${Je(e)}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=s.target,l=Yo(a.value,"imperial");l!==null?n(o!==void 0?Math.max(o,l):l):a.value=Je(e)}}
    /></label>`}num(t,e,n,i=.01,o){return _`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${o??y}
        .value=${String(z(e))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}rightPress=null;rightUp=-1e9;lastTap=null;doubleTap(t,e){var o;let n=performance.now(),i=t.detail>=2||((o=this.lastTap)==null?void 0:o.key)===e&&n-this.lastTap.at<450;return this.lastTap=i?null:{key:e,at:n},i}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",t?"1":"0")}catch{}}setSideFolded(t){if(this._split&&!this._sidePinned){this._sideOpen=!t;return}this._sideMin=t;try{localStorage.setItem("neonplan3d.sideMin",t?"1":"0")}catch{}}renderSideGrip(){if(this.narrow)return y;let t=n=>{this.sideDrag&&(this._sideWidth=Math.min(640,Math.max(280,Math.round(this.sideDrag.width+(this.sideDrag.x-n.clientX)))))},e=n=>{if(this.sideDrag){this.sideDrag=null,n.currentTarget.releasePointerCapture(n.pointerId);try{localStorage.setItem("neonplan3d.sideWidth",String(this._sideWidth))}catch{}}};return _`<div
      class="fp3d-side-grip"
      title=${this.t("side_resize")}
      @pointerdown=${n=>{this.sideDrag={x:n.clientX,width:this._sideWidth},n.currentTarget.setPointerCapture(n.pointerId),n.preventDefault()}}
      @pointermove=${t}
      @pointerup=${e}
      @pointercancel=${e}
    ></div>`}renderAside(t){let e=this._split&&!this._sidePinned&&!this.narrow;return!this.narrow&&(e?!this._sideOpen:this._sideMin)?_`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this.setSideFolded(!1)}>‹</button>
        ${this._furnitureId||this._deviceId||this._openingId||this._roomId?_`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this.setSideFolded(!1)}>⚙</button>`:y}
      </aside>`:e?_`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderSideGrip()}
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:_`<aside class="fp3d-side">${this.renderSideGrip()}${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){if(this.narrow)return y;let e=_`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${()=>this.setSideFolded(!0)}>${this.t("side_close")} ›</button>`;return this._split?_`<div class="fp3d-pin-row">
      ${e}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`:_`<div class="fp3d-pin-row">${e}</div>`}renderSide(t){var a,l,d,c;let e=((a=this._doc)==null?void 0:a.floors)??[],n=this.room,i=this.isAdmin,o=Object.values(((l=this.hass)==null?void 0:l.areas)??{}).sort((u,p)=>u.name.localeCompare(p.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(t);if(this._tool==="furniture"&&t&&i)return _`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):y} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?_`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:(n==null?void 0:n.name)??""})}</button>
        ${s}`:n&&this._tool!=="measure"?_`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:_`
      ${i?y:_`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${t?this.t("floor_settings_of",{floor:t.name}):this.t("floors")}</h3>
        ${e.length?y:_`<p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${i&&t?_`<button class="fp3d-btn" aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
              ${this.t(this._doc.settings.lock_plan?"plan_unlock":"plan_lock")}
            </button>`:y}
        ${t?_`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${u=>this.updateFloor({name:u.target.value})}
              /></label>
              ${this.len(this.t("elevation"),t.elevation,u=>this.updateFloor({elevation:u}))}
              ${i?_`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${u=>this._shiftX=Number(u.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${u=>this._shiftZ=Number(u.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${t.start_view?_`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:y}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${u=>this._shiftAll=u.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:y}
              ${this.len(this.t("height"),t.height,u=>this.updateFloor({height:Math.max(1,u)}),.05,1)}
              ${Object.keys(((d=this.hass)==null?void 0:d.floors)??{}).length?_`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${u=>this.updateFloor({ha_floor:u.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(((c=this.hass)==null?void 0:c.floors)??{}).filter(u=>u.floor_id===t.ha_floor||!e.some(p=>p.ha_floor===u.floor_id)).map(u=>_`<option value=${u.floor_id} ?selected=${u.floor_id===t.ha_floor}>${u.name}</option>`)}
                    </select></label
                  >`:y}
              ${i&&this.unplacedAreas(t).length?_`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                  </div>`:y}
              ${i?_`<div class="fp3d-actions fp3d-wide">
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
                  ${this._notice?_`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:y}`:y}
            </div>`:y}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?_`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):y}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():y}
      ${t&&i?this.renderBackgroundForm(t):y}
    `}moveRoom(t,e){this.change((n,i)=>{let o=i.rooms.findIndex(l=>l.id===t),s=o+e;if(o<0||s<0||s>=i.rooms.length)return;let[a]=i.rooms.splice(o,1);i.rooms.splice(s,0,a)})}renderRoomList(t){return t.rooms.length?_`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map((e,n)=>_`<div class="fp3d-row fp3d-dev-row">
            <button class="fp3d-row fp3d-room-btn" @click=${()=>this.selectItem("room",e.id)}>
              <span>${e.name}</span><span class="fp3d-muted">${this.area(Rt(e.points))}</span>
            </button>
            ${this.isAdmin&&t.rooms.length>1?_`<button class="fp3d-pin" title=${this.t("room_order_up")} ?disabled=${n===0} @click=${()=>this.moveRoom(e.id,-1)}>↑</button>
                  <button class="fp3d-pin" title=${this.t("room_order_down")} ?disabled=${n===t.rooms.length-1} @click=${()=>this.moveRoom(e.id,1)}>↓</button>`:y}
          </div>`)}
      </div>
    </section>`:y}renderRoomOpenings(t){var n;let e=(((n=this.floor)==null?void 0:n.openings)??[]).filter(i=>i.room_id===t.id);return e.length?_`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${e.length})</summary>
      <div class="fp3d-room-list">
        ${e.map(i=>_`<button class="fp3d-row" @click=${()=>{var o;return this.selectItem("opening",i.id),(o=this.renderRoot.querySelector(".fp3d-side"))==null?void 0:o.scrollTo(0,0)}}>
            <span>${this.t(`preset_${Mi(i)}`)}</span><span class="fp3d-muted">${this.m(i.width,2)}</span>
          </button>`)}
      </div>
    </details>`:y}renderRoomForm(t,e){let n=this.isAdmin,i=Ei(t.points),o=zt(t.points);return _`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",t.id)}</div>
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${()=>this.openRoomWalls(t)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!n} placeholder=${this.t("aliases_placeholder")} @change=${s=>this.updateRoom({aliases:wi(s.target.value)})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(s=>_`<option value=${s.area_id} ?selected=${s.area_id===t.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${ha.map(s=>_`<option value=${s} ?selected=${s===t.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?_`${this.len(this.t("x"),o.x0,s=>this.setRect("x",s))} ${this.len(this.t("z"),o.z0,s=>this.setRect("z",s))}
            ${this.len(this.t("width"),o.x1-o.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.len(this.t("depth"),o.z1-o.z0,s=>this.setRect("d",s),.01,.05)}`:y}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${Vn(this.t("room_ceiling"),this.unit)}
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
        ${t.start_view?_`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:y}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(Rt(t.points)),n:this.area(ol(t,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{var s;(s=navigator.clipboard)==null?void 0:s.writeText(t.id).catch(()=>{})}}>${t.id}</code></p>
      ${this.renderEdgeHeights(t)} ${this.renderRoomClimate(t)} ${this.renderRoomOpenings(t)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((s,a)=>_`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.len(this.t("x"),s[0],l=>this.setPoint(a,0,l))} ${this.len(this.t("z"),s[1],l=>this.setPoint(a,1,l))}
            ${n?_`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:y}
          </div>`)}
      </details>
      ${n?_`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:y}
      ${this._spots?this.renderSpotForm(t):y}
      ${this._packages?_`<div class="fp3d-packages">
            ${Cc.map(s=>_`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:y}
    </section>`}applyPackage(t,e){if(!this.isAdmin)return;let n=jc(t,e,()=>X("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=zt(t.points),n=this.hass?Ee(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,i,o]=le[e.type],s=Ao(t,e.rows,e.cols).map(([a,l])=>({id:X("furniture"),type:e.type,x:a,z:l,rotation:0,w:n,d:i,h:o,variant:null,entity:e.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(t){let e=this._spots,n=Ao(t,e.rows,e.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),o=s=>this._spots={...e,...s};return _`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>o({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>_`<option value=${s} ?selected=${s===e.type}>${this.t(`furn_${s}`)}</option>`)}
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
    </div>`}iconInput(t,e){let n=t?t.startsWith("mdi:")?t:`mdi:${t}`:"";return _`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${t??""} ?disabled=${!this.isAdmin} @change=${i=>e(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?pr(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):y}
      </span></label
    >`}markerSelect(t,e){return _`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${Xr.map(n=>_`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}entityOptions(t){var n;let e=i=>{var a,l,d,c,u,p,h,f;let o=(l=(a=this.hass)==null?void 0:a.entities)==null?void 0:l[i],s=(o==null?void 0:o.area_id)??(o!=null&&o.device_id?(u=(c=(d=this.hass)==null?void 0:d.devices)==null?void 0:c[o.device_id])==null?void 0:u.area_id:null);return s?(f=(h=(p=this.hass)==null?void 0:p.areas)==null?void 0:h[s])==null?void 0:f.name:void 0};return Object.keys(((n=this.hass)==null?void 0:n.states)??{}).filter(t).map(i=>({id:i,label:`${_t(this.hass,i)}${e(i)?` \xB7 ${e(i)}`:""}`})).sort((i,o)=>i.label.localeCompare(o.label))}entitySelect(t,e,n,i,o){let s=n===void 0?null:n?this.t("entity_auto",{name:_t(this.hass,n)}):this.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return _`<label class="fp3d-field fp3d-wide"
      >${t}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${a}
        .value=${e===null?s!==null?"__auto":"none":e}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${d=>{d.stopPropagation(),o(d.detail.value==="__auto"?null:d.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(t){var o;let e=this.floor,n=e?ze(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let i=At(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return((o=Dn(i.walls,t,n))==null?void 0:o.wall.exterior)??!1}renderSidelightFields(t){if(t.type!=="door")return y;let e=xi(t,this.openingIsExterior(t));if(e!=="sidelight"&&e!=="sidelights")return y;let n=this.isAdmin,i=(o,s)=>_`<label class="fp3d-field"
      >${this.t(s)}
      <input
        type="number"
        step="0.05"
        min="0.1"
        max="3"
        placeholder=${this.t("sidelight_auto")}
        .value=${t[o]==null?"":String(t[o])}
        ?disabled=${!n}
        @change=${a=>{let l=Number(a.target.value);this.updateOpening({[o]:Number.isFinite(l)&&l>0?Math.min(3,Math.max(.1,Math.round(l*100)/100)):null})}}
      />
    </label>`;return e==="sidelight"?_`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!t.sidelight_hinge} ?disabled=${!n} @change=${o=>this.updateOpening({sidelight_hinge:o.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:_`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(t){let e=t.type==="door"?zo:Io,n=xi({type:t.type,style:null},this.openingIsExterior(t)),i=t.style&&e.includes(t.style)?t.style:"";return _`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(o=>_`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",i=t.type==="garage",o=b=>{var x;if(!this.hass)return null;let $=structuredClone(this._doc.floors);for(let P of $)for(let S of P.openings)S.id===t.id&&(S[b]=null);return((x=Ba(this.hass,$).get(t.id))==null?void 0:x[b])??null},s=b=>{var $,x;return(x=($=this.hass)==null?void 0:$.states[b])==null?void 0:x.attributes.device_class},a=this.entityOptions(b=>b.startsWith("cover.")),l=i?this.entityOptions(b=>b.startsWith("cover.")||jn(b)):a,d=this.entityOptions(b=>{var $,x;return/^(sensor|number|input_number)\./.test(b)&&Number.isFinite(Number((x=($=this.hass)==null?void 0:$.states[b])==null?void 0:x.state))}),c=this.entityOptions(b=>{var $;return b.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(b)??"")||Lt(b)&&No(($=this.hass)==null?void 0:$.states[b])!==null||i&&/^(switch|input_boolean)\./.test(b)}),u=this.entityOptions(b=>{var x;let $=(x=this.hass)==null?void 0:x.states[b];return b.startsWith("binary_sensor.")?typeof($==null?void 0:$.attributes.window_state)=="string":Lt(b)&&(No($)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${b} ${_t(this.hass,b)}`))}),p=this.entityOptions(b=>b.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(b)??"")),h=i?this.entityOptions(b=>b.startsWith("binary_sensor.")&&["door","window","opening","garage_door"].includes(s(b)??"")||gd.test(b)):c,f=i&&gd.test(t.contact??"")&&!(t.cover&&t.cover!=="none")&&!o("cover"),m=b=>{let $=b===1,x=$?t.tilt:t.tilt2??null,P=$?t.contact:t.contact2,S=($?t.sensor:t.sensor2)??(x&&x!=="none"?"contact_tilt":"contact"),R=I=>this.updateOpening($?{contact:I}:{contact2:I==="none"?null:I});return _`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${I=>{let E=I.target.value,k=E==="contact_tilt"?{}:$?{tilt:null}:{tilt2:null};this.updateOpening({...$?{sensor:E}:{sensor2:E},...k})}}
          >
            ${["contact","handle","contact_tilt"].map(I=>_`<option value=${I} ?selected=${I===S}>${this.t(`sensor_kind_${I}`)}</option>`)}
          </select></label
        >
        ${S==="handle"?this.entitySelect(this.t("handle_entity"),P,void 0,u,I=>R(I==="none"?$?"none":null:I)):this.entitySelect(this.t("contact_entity"),P,$?o("contact"):void 0,p,R)}
        ${S==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),x,void 0,c,I=>this.updateOpening($?{tilt:I==="none"?null:I}:{tilt2:I==="none"?null:I})):y}
        ${$?_`${this.entitySelect(this.t("tilt_angle_entity"),t.tilt_angle??null,void 0,this.entityOptions(I=>Lt(I)),I=>this.updateOpening({tilt_angle:I==="none"?null:I}))}
            ${t.tilt_angle&&t.tilt_angle!=="none"?_`${this.num(this.t("tilt_angle_max"),t.tilt_max??15,I=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,I))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),t.tilt_offset??0,I=>this.updateOpening({tilt_offset:I}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!t.tilt_invert} ?disabled=${!e} @change=${I=>this.updateOpening({tilt_invert:I.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:y}`:y}`},v=Mi(t),g=t.type==="door";return _`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${v}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?_`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(ki).map(b=>_`<button class="fp3d-chip" aria-pressed=${b===v} @click=${()=>this.setOpeningPreset(t,b)}>${this.t(`preset_${b}`)}</button>`)}
          </div>`:y}
      ${e&&!i?_`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${g||n&&t.sill<.1?_`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:y}
          </div>`:y}
      <div class="fp3d-form">
        ${this.len(this.t("width"),t.width,b=>this.updateOpening({width:Math.max(.3,b)}),.01,.3)}
        ${this.len(this.t("opening_position"),t.offset,b=>this.updateOpening({offset:Math.max(0,b)}),.01,0)}
        ${n?this.len(this.t("sill"),t.sill,b=>this.updateOpening({sill:Math.max(0,b)}),.01,0):y}
        ${this.len(this.t("opening_height"),t.height,b=>this.updateOpening({height:Math.max(.3,b)}),.01,.3)}
        ${n&&this.isAdmin?_`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${()=>{var $;let b=(($=this.floor)==null?void 0:$.height)??2.5;this.updateOpening({width:1,height:.5,sill:Math.max(0,Math.round((b-.75)*100)/100)})}}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`:y}
        ${i?y:this.renderStyleSelect(t)}
        ${n&&t.style!=="glass_wall"?_`<label class="fp3d-field fp3d-wide" title=${this.t("sill_board_hint")}
              >${this.t("sill_board")}
              <select ?disabled=${!e} @change=${b=>this.updateOpening({sill_board:b.target.value||"auto"})}>
                ${Zr.map(b=>_`<option value=${b} ?selected=${(t.sill_board??"auto")===b}>${this.t(`sill_board_${b}`)}</option>`)}
              </select></label
            >`:y}
        ${this.renderSidelightFields(t)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${b=>this.updateOpening({mark:b.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?y:_`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${b=>this.updateOpening({hinge:b.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||g?this.entitySelect(this.t(n?"cover_entity":"door_cover"),t.cover,o("cover"),i?l:a,b=>this.updateOpening({cover:b})):y}
        ${i&&jn(t.cover)?_`<p class="fp3d-sub fp3d-wide">${this.t("garage_pulse_hint")}</p>`:y}
        ${(n||i||g)&&t.cover!=="none"&&(t.cover||o("cover"))?_`${jn(t.cover)?y:this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,d,b=>this.updateOpening({position:b==="none"?null:b}))}
              ${t.position&&!jn(t.cover)?_`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${b=>this.updateOpening({position_inverted:b.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:y}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_invert_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.cover_invert} @change=${b=>this.updateOpening({cover_invert:b.target.checked||void 0})} />
                ${this.t("cover_invert")}</label
              >
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${b=>this.updateOpening({confirm:b.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:y}
        ${n?_`${t.leaves===2?_`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:y}
              ${m(1)} ${t.leaves===2?_`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${m(2)}`:y}
              ${t.sill<=.01?_`${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(b=>b.startsWith("lock.")),b=>this.updateOpening({lock:b==="none"?null:b}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:y}`:_`${this.entitySelect(this.t(i?"garage_contact":t.leaves===2?"contact_main":"contact_entity"),t.contact,o("contact"),h,b=>this.updateOpening({contact:b}))}
              ${f?_`<label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                    ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${b=>this.updateOpening({confirm:b.target.checked})} />
                    ${this.t("device_confirm")}</label
                  >`:y}
              ${t.leaves===2&&!i?this.entitySelect(this.t("contact_second"),t.contact2,void 0,c,b=>this.updateOpening({contact2:b==="none"?null:b})):y}
              ${g?_`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!t.shut} ?disabled=${!e} @change=${b=>this.updateOpening({shut:b.target.checked})} />
                    ${this.t("door_shut")}</label
                  >
                  ${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(b=>b.startsWith("lock.")),b=>this.updateOpening({lock:b==="none"?null:b}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:y}`}
        ${t.contact!=="none"&&(t.contact||t.contact2||o("contact"))?_`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!t.contact_invert} ?disabled=${!e} @change=${b=>this.updateOpening({contact_invert:b.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:y}
        ${this.floor&&qc(this._doc,this.floor,t)?_`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${t.well!==!1} ?disabled=${!e} @change=${b=>this.updateOpening({well:b.target.checked?void 0:!1})} />
                ${this.t("well")}</label
              >
              ${t.well!==!1?this.len(this.t("well_rim"),t.well_rim??0,b=>this.updateOpening({well_rim:Math.max(-.3,Math.min(1,b))||null}),.01,-.3):y}`:y}
        ${t.type==="window"?_`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!t.rain_ignore} ?disabled=${!e} @change=${b=>this.updateOpening({rain_ignore:b.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:y}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?_`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:y}
    </section>`}renderFurnitureForm(t){if(this.selection().length>1)return this.renderBlockForm();let e=this.isAdmin;return _`<section>
      <div class="fp3d-h3row"><h3>${t.name||this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
      ${t.group?_`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${()=>{this._single=!1,this.requestUpdate()}}>${this.t("block_select")}</button></p>`:y}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${t.name??""} ?disabled=${!e} placeholder=${this.t(`furn_${t.type}`)===`furn_${t.type}`?"":this.t(`furn_${t.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!e} placeholder=${this.t("aliases_placeholder")} @change=${n=>this.updateFurniture({aliases:wi(n.target.value)})}
        /></label>
        ${t.name?_`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${this.typeChoices(t.type).map(n=>_`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).filter(n=>n.items.length).map(n=>_`<optgroup label=${ge(n)}>
                ${n.items.map(i=>{let o=Me(n.id,i.id);return _`<option value=${o} ?selected=${o===t.type}>${ae(i)}</option>`})}
              </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(n=>t.type.startsWith(`pack:${n.id}:`))?_`<option value=${t.type} selected>${He(this.hass,t.type)}</option>`:y}
          </select></label
        >
        ${this.len(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.len(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.len(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.01,n)}),.01,.01)}
        ${this.len(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.01,n)}),.01,.01)}
        ${this.len(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${Kt(t.type)?y:_`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!t.mirror} ?disabled=${!e} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${t.type==="led_strip"?_`${this.num(this.t("strip_tilt"),t.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              ${t.upright?y:_`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"),t.rise??0,n=>this.updateFurniture({rise:Math.max(-80,Math.min(80,Math.round(n)))||void 0}),5)}</span>`}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!t.upright} ?disabled=${!e} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:y}
        ${ce(t)&&this.floor?_`${this.len(this.t("mount_height"),t.mount_y??Tt(this.floor,t),n=>this.updateFurniture({mount_y:Math.min(Zi,Math.max(0,n))}),.01,0)}
              ${t.mount_y!=null?_`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:y}`:y}
      </div>
      ${t.type==="stairs"?_`<label class="fp3d-check" title=${this.t("stair_open_hint")}
              ><input type="checkbox" .checked=${!!t.stair_open} ?disabled=${!this.isAdmin} @change=${n=>this.updateFurniture({stair_open:n.target.checked||void 0})} />
              ${this.t("stair_open")}</label
            >
            <p class="fp3d-sub">${this.t("stairs_hint")}</p>`:y}
      ${t.type==="stairs_u"?_`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:y}
      ${t.type==="stairwell"?_`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&(yl(Wt(t),n.points)||Rt(Uo(n.points,Wt(t)))>.01))?_`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:y}`:y}
      ${t.type==="inverter"||t.type==="home_battery"?_`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(t.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>_`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`${t.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${t.type==="lamp_pendant"?_`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>_`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:y}
      ${t.type==="lamp_ceiling_fan"?_`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_fan_entity"),t.fan_entity??null,void 0,this.entityOptions(n=>n.startsWith("fan.")),n=>this.updateFurniture({fan_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("ceiling_fan_hint")}</p>
            </div>`:y}
      ${Ue(t.type)?this.renderFurnitureLinks(t):Sp.has(t.type)?y:_`<div class="fp3d-form fp3d-links">${this.renderStateLinks(t)}</div>`} ${t.type==="parking"?this.renderParkingForm(t):y} ${t.type==="wall_switch"?this.renderWallSwitchForm(t):t.type==="wall_socket"?this.renderWallSocketForm(t):y} ${t.type==="waste_bin"||t.type==="mailbox"?this.renderHouseholdForm(t):this.renderHouseholdExtras(t)}
      ${this.renderModuleFurnitureFields(t)}
      ${t.type.startsWith("pack:mastershort.vehicles:")&&this.isAdmin?_`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(t)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:y}
      ${e?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(t)}>▦ ${this.t("wall_view")}</button>
            ${t.entity&&t.entity!=="none"&&t.type!=="parking"?_`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(t)}>${this.t("as_device")}</button>`:y}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`:y}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=Ac(this.hass,t),n=0,i=a=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===a),o=(a,l,d)=>{if(!d)return;let c=i(a);if(!c&&this.floor&&(this.addEnergyDevice(a),c=i(a)),!c||c[l]&&c[l]!=="none")return;let u=c.id;this.change(p=>{let h=p.floors.flatMap(f=>f.furniture).find(f=>f.id===u);h&&(h[l]=d)}),n++};o("meter","power",e.grid),o("inverter","power",e.solar),o("home_battery","power",e.battery),o("home_battery","soc",e.battery_soc);let s=Pc(t);for(let a of["gas","water"])s[a]&&!this._doc.energy[a]&&(this.setEnergy({[a]:s[a]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let t=this._doc.energy,e=this.isAdmin,n=(m,v)=>{var g,b;return(b=(g=this.hass)==null?void 0:g.states[m])==null?void 0:b.attributes[v]},i=this.entityOptions(m=>this.isPowerSensor(m)),o=this.entityOptions(m=>Lt(m)&&n(m,"device_class")==="battery"),s=this.entityOptions(m=>Lt(m)&&(n(m,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(m,"unit_of_measurement")??""))),a=m=>v=>this.setEnergy({[m]:v==="none"?null:v}),l=m=>this.entityOptions(v=>Lt(v)&&(n(v,"device_class")===m||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(v,"unit_of_measurement")??""))),d=this.hass?fn(this.hass,this._doc.floors):new Map,c=xs(this._doc,m=>this.devicePower(m,d)),u=this.hass?Ic(this.hass,this._doc,[],c):null,p=!!u&&(u.solar??0)<20,h=p&&u.grid!==null&&u.grid<-50,f=p&&u.battery!==null&&u.battery<-50&&(u.grid??0)<=0;return _`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${h?_`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({grid_invert:!t.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      ${f?_`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({battery_invert:!t.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:y}
      <div class="fp3d-form">
        ${this.entitySelect(this.t("energy_grid"),t.grid,c.grid,i,a("grid"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.grid_invert} ?disabled=${!e} @change=${m=>this.setEnergy({grid_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_solar_sensor"),t.solar,c.solar[0]??null,i,a("solar"))}
        ${this.entitySelect(this.t("energy_battery_sensor"),t.battery,c.battery[0]??null,i,a("battery"))}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.battery_invert} ?disabled=${!e} @change=${m=>this.setEnergy({battery_invert:m.target.checked})} />
          ${this.t("energy_invert")}</label
        >
        ${this.entitySelect(this.t("energy_battery_soc"),t.battery_soc,c.soc[0]??null,o,a("battery_soc"))}
        ${this.entitySelect(this.t("energy_consumption_sensor"),t.consumption,null,i,a("consumption"))}
        ${this.entitySelect(this.t("energy_tariff_sensor"),t.tariff,void 0,s,a("tariff"))}
        ${this.entitySelect(this.t("energy_gas_meter"),t.gas??null,void 0,l("gas"),m=>this.setEnergy({gas:m==="none"?null:m}))}
        ${this.entitySelect(this.t("energy_water_meter"),t.water??null,void 0,l("water"),m=>this.setEnergy({water:m==="none"?null:m}))}
      </div>
      <p class="fp3d-sub">${this.t("energy_meters_hint")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" ?disabled=${!e||!this.hass} @click=${()=>this.importEnergyPrefs()}>${this.t("energy_import_prefs")}</button>
      </div>
      ${this._energyNote?_`<p class="fp3d-sub">${this._energyNote}</p>`:y}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(t){let e=t.elevation+t.height;if(!as(this._doc).some(o=>Xl(o,e)&&tc(o,t.elevation)))return y;let i={settings:this._doc.settings};return j`${[1.5,2].map(o=>ec(i,t.elevation,o).map(([s,a])=>{let[l,d]=this.toScreen(s),[c,u]=this.toScreen(a);return j`<line class="fp3d-headroom" x1=${l} y1=${d} x2=${c} y2=${u} />
          <text class="fp3d-headroom-label" x=${(l+c)/2} y=${(d+u)/2-4}>${this.m(o,1)}</text>`}))}`}renderFavorites(){let t=this._doc.settings.favorites??[],e=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>e.includes(s.split(".")[0])&&!t.includes(s)),i=s=>this.change(a=>a.settings.favorites=s.length?s:void 0),o=(s,a)=>{let l=[...t],[d]=l.splice(s,1);l.splice(Math.max(0,Math.min(l.length,s+a)),0,d),i(l)};return _`<details class="fp3d-section">
      <summary>${this.t("favorites")}${t.length?_` <span class="fp3d-lib-count">${t.length}</span>`:y}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${t.map((s,a)=>_`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${_t(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${a===0} @click=${()=>o(a,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${a===t.length-1} @click=${()=>o(a,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(t.filter(l=>l!==s))}>✕</button>
        </div>`)}
      ${t.length<40?_`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!t.includes(s)&&i([...t,s])})}
          </div>`:y}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let t=this._doc.settings.media_presets??[],e=i=>this.change(o=>o.settings.media_presets=i.length?i:void 0),n=(i,o)=>e(t.map((s,a)=>a===i?{...s,...o}:s));return _`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>_`<option value=${i}></option>`)}
      </datalist>
      ${t.map((i,o)=>_`<div class="fp3d-form fp3d-own-button">
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
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((s,a)=>a!==o))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<30?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:X("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:y}`}renderOwnButtons(){let t=this._doc.settings.buttons??[],e=o=>this.change(s=>s.settings.buttons=o.length?o:void 0),n=(o,s)=>e(t.map((a,l)=>l===o?{...a,...s}:a)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return _`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${t.map((o,s)=>_`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${o.label} @change=${a=>n(s,{label:a.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${a=>n(s,{action:a.target.value})}>
              ${na.map(a=>_`<option value=${a} ?selected=${a===o.action}>${this.t(`own_action_${a}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(o.icon??null,a=>n(s,{icon:a}))}
          ${o.action!=="fire_dom_event"?_`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${o.action}`)}
                <input type="text" .value=${o.target??""} placeholder=${i[o.action]} @change=${a=>n(s,{target:a.target.value.trim()||null})}
              /></label>`:y}
          ${o.action==="service"||o.action==="fire_dom_event"?_`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${o.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${o.data?JSON.stringify(o.data,null,1):""}
                  @change=${a=>{a.target.setCustomValidity("");let l=a.target.value.trim();if(!l)return n(s,{data:null});try{let d=JSON.parse(l);d&&typeof d=="object"&&!Array.isArray(d)&&n(s,{data:d})}catch{a.target.setCustomValidity(this.t("own_data_bad")),a.target.reportValidity()}}}
                ></textarea></label
              >`:y}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>e([...t.slice(0,s-1),o,t[s-1],...t.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((a,l)=>l!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<20?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:X("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:y}`}paneView(){let t=this.renderRoot.querySelector("fp3d-view3d"),e=t==null?void 0:t.currentView();if(!e)return null;let n=e.target;return{theta:z(e.theta),phi:z(e.phi),radius:z(e.radius),...n?{target:{x:z(n.x),y:z(n.y),z:z(n.z)}}:{}}}rememberFloorView(){let t=this.paneView();if(!t){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:t})}rememberRoomView(){let t=this.paneView();if(!t){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:t})}renderDirectorTriggers(t,e){if(!this.hass)return y;let i=t.triggers??[],o=a=>this.change(l=>l.settings.director={...l.settings.director??{},triggers:a.length?a:null}),s=vt("camera_cockpit");return _`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("director_triggers")}</h4>
      <p class="fp3d-sub">${this.t("director_triggers_hint")}</p>
      ${i.map((a,l)=>_`<div class="fp3d-form">
          ${this.entitySelect(this.t("director_trigger_entity"),a.entity||null,void 0,this.entityOptions(d=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(d)),d=>o(i.map((c,u)=>u===l?{...c,entity:d&&d!=="none"?d:""}:c).filter(c=>c.entity)))}
          ${this.entitySelect(this.t("director_doorbell_camera"),a.camera,void 0,this.entityOptions(d=>d.startsWith("camera.")&&e.includes(d)),d=>o(i.map((c,u)=>u===l?{...c,camera:d&&d!=="none"?d:null}:c)))}
          <button class="fp3d-btn" ?disabled=${!s} @click=${()=>o(i.filter((d,c)=>c!==l))}>✕ ${this.t("delete")}</button>
        </div>`)}
      ${i.length<20&&s?_`<div class="fp3d-form">
            ${this.entitySelect(this.t("director_trigger_add"),null,void 0,this.entityOptions(a=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(a)),a=>{a&&a!=="none"&&o([...i,{entity:a,camera:null}])})}
          </div>`:y}
    </div>`}renderDirector(){let t=this.hass,e=this._doc.settings.director??{},n=u=>this.change(p=>p.settings.director={...p.settings.director??{},...u}),i=vt("camera_cockpit"),o=Ul(),s=[...new Set(this._doc.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],a=t?Yl(t):[],l=t?e.doorbell_entity??a[0]??null:null,d=t&&l?Ql(t,l,s):null,c=(u,p,h,f=!i)=>_`<label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${p} ?disabled=${f} @change=${m=>h(m.target.checked)} /> ${this.t(u)}</label
      >`;return _`<details class="fp3d-section">
      <summary>🎬 ${this.t("director")}</summary>
      <p class="fp3d-sub">${this.t("director_hint")}</p>
      ${i?y:_`<p class="fp3d-sub">🔒 ${this.t("pro_feature_camera_cockpit")}</p>`}
      <div class="fp3d-form">
        ${c("director_here",o,u=>{Gl(u),this.dispatchEvent(new CustomEvent("director-here",{bubbles:!0,composed:!0})),this.requestUpdate()})}
        <p class="fp3d-sub fp3d-wide">${this.t("director_here_hint")}</p>
        ${c("director_doorbell",!!e.doorbell,u=>n({doorbell:u}))}
        ${e.doorbell&&t?_`${this.entitySelect(this.t("director_doorbell_entity"),e.doorbell_entity??null,a[0]??null,this.entityOptions(u=>u.startsWith("event.")||u.startsWith("binary_sensor.")),u=>n({doorbell_entity:u==="none"?null:u}))}
            ${this.entitySelect(this.t("director_doorbell_camera"),e.doorbell_camera??null,d,this.entityOptions(u=>u.startsWith("camera.")&&s.includes(u)),u=>n({doorbell_camera:u==="none"?null:u}))}
            ${!a.length&&!e.doorbell_entity?_`<p class="fp3d-sub fp3d-wide">${this.t("director_no_doorbell")}</p>`:y}`:y}
        <label class="fp3d-field fp3d-wide"
          >${this.t("director_motion")}
          <select ?disabled=${!i} @change=${u=>n({motion:u.target.value})}>
            ${["off","person","all"].map(u=>_`<option value=${u} ?selected=${(e.motion??"off")===u}>${this.t(`director_motion_${u}`)}</option>`)}
          </select></label
        >
        ${c("director_appliances",!!e.appliances,u=>n({appliances:u}))}
        ${c("director_alerts",!!e.alerts,u=>n({alerts:u}))}
        ${this.renderDirectorTriggers(e,s)}
        ${c("director_live",!!e.live,u=>n({live:u}))}
        <p class="fp3d-sub fp3d-wide">${this.t("director_live_hint")}</p>
        ${this.num(this.t("director_hold"),e.hold??30,u=>n({hold:Math.min(600,Math.max(10,Math.round(u)))}),5,10)}
      </div>
      <p class="fp3d-sub">${this.t("director_back_hint")}</p>
    </details>`}voicePipes=null;voicePipesAsked=!1;voiceSentences=null;voiceSentencesMsg=null;renderVoicePipeline(){let t=this.hass;if(!t)return y;this.voicePipesAsked||(this.voicePipesAsked=!0,Er(t).then(i=>{this.voiceSentences=i.sentences,this.requestUpdate()}).catch(()=>this.voiceSentences="off"),t.callWS({type:"assist_pipeline/pipeline/list"}).then(i=>{this.voicePipes=i.pipelines.map(o=>({id:o.id,name:o.name,stt:!!o.stt_engine})),this.requestUpdate()}).catch(()=>{}));let e=ql(),n=["distinct","all","off"];return _`<div class="fp3d-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_sentences")}
        <select
          ?disabled=${!this.isAdmin||this.voiceSentences===null}
          @change=${i=>{let o=i.target.value;this.voiceSentences=o,this.voiceSentencesMsg=null,Pr(t,o).then(s=>{var a;(a=s.kept)!=null&&a.length&&(this.voiceSentencesMsg=this.t("voice_sentences_kept",{langs:s.kept.join(", ")})),this.requestUpdate()}).catch(()=>{this.voiceSentencesMsg=this.t("voice_sentences_failed"),this.requestUpdate()})}}
        >
          ${n.map(i=>_`<option value=${i} ?selected=${(this.voiceSentences??"off")===i}>${this.t(`voice_sentences_${i}`)}</option>`)}
        </select></label
      >
      ${this.voiceSentencesMsg?_`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.voiceSentencesMsg}</p>`:y}
      <p class="fp3d-sub fp3d-wide">${this.t("voice_sentences_hint")} ${this.t("voice_sentences_file")}</p>
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_pipeline")}
        <select
          @change=${i=>{Kl(i.target.value||null),this.requestUpdate()}}
        >
          <option value="" ?selected=${!e}>${this.t("voice_pipeline_preferred")}</option>
          ${(this.voicePipes??[]).map(i=>_`<option value=${i.id} ?selected=${e===i.id} ?disabled=${!i.stt}>${i.name}${i.stt?"":` (${this.t("voice_pipeline_no_stt")})`}</option>`)}
        </select></label
      >
    </div>`}renderVoice(){var n;let t=Vl(),e=[...this.t("voice_examples").split("|"),...Dc(((n=this.hass)==null?void 0:n.language)??"en")];return _`<details class="fp3d-section">
      <summary>🎙️ ${this.t("voice")}</summary>
      <p class="fp3d-sub">${this.t("voice_hint")}</p>
      <p class="fp3d-sub"><b>${this.t("voice_understands")}</b></p>
      <ul class="fp3d-voice-list">
        ${e.map(i=>_`<li>${i}</li>`)}
      </ul>
      <div class="fp3d-form">
        <label class="fp3d-check fp3d-wide"
          ><input
            type="checkbox"
            .checked=${t}
            @change=${i=>{Wl(i.target.checked),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0})),this.requestUpdate()}}
          />
          ${this.t("voice_here")}</label
        >
        <label class="fp3d-wide"
          >${this.t("screen_name")}
          <input
            type="text"
            .value=${Nl()}
            placeholder=${this.t("screen_name_placeholder")}
            @change=${i=>{Bl(i.target.value),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0}))}}
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
    </details>`}renderPresenceSettings(){var i;let t=Object.keys(((i=this.hass)==null?void 0:i.states)??{}).filter(o=>o.startsWith("person.")).sort(),e=o=>{let s=o.slice(7),a=this.entityOptions(d=>Lt(d)),l=d=>d.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(d);return[...a.filter(d=>l(d.id)),...a.filter(d=>!l(d.id))]},n=(o,s)=>{let a=structuredClone(this._doc);a.presence=a.presence.filter(l=>l.person!==o),s&&s!=="none"&&a.presence.push({person:o,sensor:s}),this.setDoc(a)};return _`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(o=>{var s;return this.entitySelect(`${_t(this.hass,o)} \xB7 ${this.t("presence_sensor")}`,((s=this._doc.presence.find(a=>a.person===o))==null?void 0:s.sensor)??null,void 0,e(o),a=>n(o,a))}):_`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderStateLinks(t){return _`${this.entitySelect(this.t("furn_state_entity"),t.state_entity??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture($a(t,e)))}
              ${t.state_entity&&t.state_entity!=="none"?_`${this.entitySelect(this.t("furn_state_entity2"),t.state_entity2??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture({state_entity2:e==="none"?null:e}))}
                    ${t.state_entity2&&t.state_entity2!=="none"?_`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${e=>this.updateFurniture({state_split:e.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${t.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${t.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:y}`:y}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderWallSwitchForm(t){let e=this.isAdmin,n=To(t),i=this.entityOptions(s=>Pa.test(s)),o=s=>{let a=Array.from({length:s},(l,d)=>n[d]??null);this.updateFurniture({switch_keys:a,w:Oo(s)})};return _`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field fp3d-wide"
        >${this.t("switch_keys")}
        <select ?disabled=${!e} @change=${s=>o(Number(s.target.value))}>
          ${Array.from({length:4},(s,a)=>a+1).map(s=>_`<option value=${s} ?selected=${n.length===s}>${s}</option>`)}
        </select></label
      >
      ${n.map((s,a)=>this.entitySelect(this.t(n.length>1?"switch_key_n":"switch_key",{n:a+1}),s,void 0,i,l=>this.updateFurniture({switch_keys:n.map((d,c)=>c===a?l==="none"?null:l:d)})))}
      ${this.entitySelect(this.t("switch_ring"),za(t),void 0,this.entityOptions(s=>s.startsWith("light.")),s=>this.updateFurniture({switch_ring:s==="none"?null:s}))}
      <p class="fp3d-sub fp3d-wide">${this.t("switch_ring_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${s=>this.updateFurniture({confirm:s.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("switch_hint")}</p>
    </div>`}renderWallSocketForm(t){let e=this.isAdmin,n=Lo(t),i=this.entityOptions(l=>Aa.test(l)),o=this.entityOptions(l=>this.isPowerSensor(l)),s=(l,d)=>this.updateFurniture({socket_outlets:n.map((c,u)=>u===l?{...c,...d}:c)}),a=l=>this.updateFurniture({socket_outlets:Array.from({length:l},(d,c)=>n[c]??{entity:null,power:null}),w:Oo(l)});return _`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field fp3d-wide"
        >${this.t("socket_count")}
        <select ?disabled=${!e} @change=${l=>a(Number(l.target.value))}>
          ${Array.from({length:4},(l,d)=>d+1).map(l=>_`<option value=${l} ?selected=${n.length===l}>${l}</option>`)}
        </select></label
      >
      ${n.map((l,d)=>_`${n.length>1?_`<h4 class="fp3d-lib-head fp3d-wide">${this.t("socket_n",{n:d+1})}</h4>`:y}
          ${this.entitySelect(this.t("socket_switch"),l.entity,void 0,i,c=>s(d,{entity:c==="none"?null:c}))}
          ${this.entitySelect(this.t("socket_power"),l.power,void 0,o,c=>s(d,{power:c==="none"?null:c}))}`)}
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${l=>this.updateFurniture({confirm:l.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("socket_hint")}</p>
    </div>`}renderApFields(t){let e=this.isAdmin,n=Fr(t),i=this.hass?Rr(this.hass,{entity:t.entity}):null,o=i?["state","clients","led","cpu","memory","restart"].filter(s=>i[s]).map(s=>this.t(`ap_role_${s}`)):[];return _`<label class="fp3d-field fp3d-wide"
        >${this.t("ap_mount")}
        <select
          ?disabled=${!e}
          @change=${s=>{let a=s.target.value==="wall",[l,d,c]=a?zr:Ar;this.updateFurniture({variant:a?"wall":null,w:l,d,h:c,mount_y:null})}}
        >
          <option value="ceiling" ?selected=${!n}>${this.t("ap_ceiling")}</option>
          <option value="wall" ?selected=${n}>${this.t("ap_wall")}</option>
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${o.length?`${this.t("heater_found")} ${o.join(" \xB7 ")}`:this.t("ap_hint")}</p>
      <p class="fp3d-sub fp3d-wide">${this.t("ap_gestures")}</p>`}renderHeaterFields(t){let e=this.isAdmin,n=Yr(t),i=this.hass?Qr(this.hass,{entity:t.entity}):null,o=i?["heating","showers","remaining","power","eco"].filter(s=>i[s]).map(s=>`${this.t(`heater_role_${s}`)}: ${_t(this.hass,i[s])}`):[];return _`<label class="fp3d-field fp3d-wide"
        >${this.t("heater_capacity")}
        <select
          ?disabled=${!e}
          @change=${s=>{let a=s.target.value,[l,d,c]=hi[a];this.updateFurniture({variant:a,w:l,d,h:c})}}
        >
          ${Ur.map(s=>_`<option value=${s} ?selected=${n===s}>${s} l</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${o.length?`${this.t("heater_found")} ${o.join(" \xB7 ")}`:this.t("heater_hint")}</p>
      <p class="fp3d-sub fp3d-wide">${this.t(i!=null&&i.power?"heater_gestures":"heater_gestures_no_power")}</p>`}setHousehold(t){let e=structuredClone(this._doc);e.settings.household={...e.settings.household??{},...t},this.setDoc(e)}renderHouseholdForm(t){var d,c,u,p;let e=this.isAdmin,n=vt("household"),i=!n&&ve("household")?_`<section class="fp3d-teaser fp3d-wide">
          <div class="fp3d-teaser-head"><b>🏠 ${this.t("pro_name_household")}</b></div>
          <p class="fp3d-sub">${this.t(t.type==="waste_bin"?"household_teaser_bin":"household_teaser_mail")}</p>
        </section>`:y,o=(h,f,m,v,g)=>_`<label class="fp3d-field fp3d-wide"
        >${h}
        <select ?disabled=${!e} @change=${b=>g(b.target.value)}>
          ${m.map(b=>_`<option value=${b} ?selected=${b===f}>${this.t(v(b))}</option>`)}
        </select></label
      >`;if(t.type==="waste_bin"){let h=Rl(t),f=t.bin_kind??"rest",[m,v]=Cl(t),g=this.entityOptions(b=>b.startsWith("calendar.")||b.startsWith("sensor."));return _`<div class="fp3d-form fp3d-links">
        ${o(this.t("bin_shape"),h,is,b=>`bin_shape_${b}`,b=>{let[$,x,P]=Il[b];this.updateFurniture({variant:b==="bin240"?null:b,w:$,d:x,h:P})})}
        ${o(this.t("bin_kind"),f,zl,b=>`bin_kind_${b}`,b=>{let[$,x]=ss(b,Ol());this.updateFurniture({bin_kind:b,bin_color:$,bin_lid:x===$?null:x})})}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${m} ?disabled=${!e} @change=${b=>this.updateFurniture({bin_color:b.target.value})}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${v} ?disabled=${!e} @change=${b=>this.updateFurniture({bin_lid:b.target.value})}
        /></label>
        ${n?_`${this.entitySelect(this.t("bin_source"),t.bin_source??null,void 0,g,b=>this.updateFurniture({bin_source:b==="none"?null:b}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${t.bin_match??""} placeholder=${this.t(`bin_kind_${f}`)} ?disabled=${!e}
                  @change=${b=>this.updateFurniture({bin_match:b.target.value.trim()||null})} /></label>
              ${this.num(this.t("bin_from"),((d=this._doc.settings.household)==null?void 0:d.bin_from)??14,b=>this.setHousehold({bin_from:Math.max(0,Math.min(24,b))}),.5)}
              ${this.num(this.t("bin_until"),((c=this._doc.settings.household)==null?void 0:c.bin_until)??12,b=>this.setHousehold({bin_until:Math.max(0,Math.min(24,b))}),.5)}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_hint")}</p>
              ${this.entitySelect(this.t("bin_out"),t.bin_out??null,void 0,this.entityOptions(b=>/^(input_boolean|switch|binary_sensor)\./.test(b)),b=>this.updateFurniture({bin_out:b==="none"?null:b}))}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_out_hint")}</p>
              <label class="fp3d-check fp3d-wide"
                ><input type="checkbox" .checked=${!!((u=this._doc.settings.household)!=null&&u.bin_next_only)} ?disabled=${!e} @change=${b=>this.setHousehold({bin_next_only:b.target.checked||null})} />
                ${this.t("bin_next_only")}</label
              >
              <label class="fp3d-field"
                >${this.t("bin_days")}
                <input type="number" inputmode="numeric" min="0" max="60" step="1" placeholder=${this.t("bin_days_always")} .value=${((p=this._doc.settings.household)==null?void 0:p.bin_days)==null?"":String(this._doc.settings.household.bin_days)} ?disabled=${!e}
                  @change=${b=>{let $=parseInt(b.target.value,10);this.setHousehold({bin_days:Number.isFinite($)?Math.max(0,Math.min(60,$)):null})}}
              /></label>
              <p class="fp3d-sub fp3d-wide">${this.t("bin_tags_hint")}</p>`:i}
      </div>`}let s=Tl(t),a=this.entityOptions(h=>["binary_sensor.","input_boolean.","sensor.","counter.","input_number."].some(f=>h.startsWith(f))),l=this.entityOptions(h=>h.startsWith("binary_sensor."));return _`<div class="fp3d-form fp3d-links">
      ${o(this.t("mailbox_shape"),s,os,h=>`mailbox_shape_${h}`,h=>{let[f,m,v]=Fl[h];this.updateFurniture({variant:h==="wall"?null:h,w:f,d:m,h:v})})}
      ${n?_`${this.entitySelect(this.t("mailbox_entity"),typeof t.entity=="string"&&t.entity!=="none"?t.entity:null,void 0,a,h=>this.updateFurniture({entity:h??"none"}))}
            ${this.entitySelect(this.t("mailbox_door"),t.mailbox_door??null,void 0,l,h=>this.updateFurniture({mailbox_door:h==="none"?null:h}))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`:i}
    </div>`}renderHouseholdExtras(t){let e=t.type==="plant"||Al(t.type),n=t.type==="washer"||t.type==="dryer"||t.type==="dishwasher",i=t.type==="fridge"||t.type==="fridge_smart",o=Ue(t.type);if(!e&&!o)return y;if(!vt("household"))return!ve("household")||!(e||n||i)?y:_`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🏠 ${this.t("pro_name_household")}</b></div>
        <p class="fp3d-sub">${this.t(e?"hh_teaser_plant":i?"hh_teaser_fridge":"hh_teaser_appliance")}</p>
      </section>`;let s=this.entityOptions(c=>c.startsWith("sensor.")),a=this.entityOptions(c=>c.startsWith("binary_sensor.")),l=this.entityOptions(c=>["sensor.","binary_sensor.","input_boolean.","input_datetime.","input_number."].some(u=>c.startsWith(u))),d=c=>c==="none"?null:c;return _`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("pro_name_household")}</b></p>
      ${e?_`${this.entitySelect(this.t("hh_moisture"),t.moisture??null,void 0,this.entityOptions(c=>c.startsWith("plant.")||c.startsWith("sensor.")),c=>this.updateFurniture({moisture:d(c)}))}
            ${this.num(this.t("hh_moisture_min"),t.moisture_min??20,c=>this.updateFurniture({moisture_min:Math.max(0,Math.min(100,Math.round(c)))}),1)}`:y}
      ${n?_`${this.entitySelect(this.t("hh_remaining"),t.remaining??null,void 0,s,c=>this.updateFurniture({remaining:d(c)}))}
            ${this.entitySelect(this.t("hh_door"),t.door_left??null,void 0,a,c=>this.updateFurniture({door_left:d(c)}))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`:y}
      ${i?_`${t.type==="fridge"?this.entitySelect(this.t("hh_fridge_door"),t.door_left??null,void 0,a,c=>this.updateFurniture({door_left:d(c)})):y}
            ${this.num(this.t("hh_door_alarm"),t.door_alarm??2,c=>this.updateFurniture({door_alarm:Math.max(.5,Math.min(120,c))}),.5)}`:y}
      ${o?_`${this.entitySelect(this.t("hh_service_entity"),t.service??null,void 0,l,c=>this.updateFurniture({service:d(c)}))}
            ${t.service&&t.service!=="none"?this.num(this.t("hh_service_min"),t.service_min??10,c=>this.updateFurniture({service_min:Math.max(0,c)}),1):y}
            ${t.service&&t.service!=="none"||t.service2&&t.service2!=="none"?this.entitySelect(this.t("hh_service2_entity"),t.service2??null,void 0,l,c=>this.updateFurniture({service2:d(c)})):y}
            ${t.service2&&t.service2!=="none"?this.num(this.t("hh_service2_min"),t.service2_min??10,c=>this.updateFurniture({service2_min:Math.max(0,c)}),1):y}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`:y}
    </div>`}renderAwningFields(t){let e=this.isAdmin,n=this.entityOptions(s=>s.startsWith("sensor.")||s.startsWith("input_number.")||s.startsWith("number.")),i={arm:{w:3,d:2.5,y:2.3,pitch:null},drop:{w:2.4,d:1.2,y:2.3,pitch:20},vertical:{w:2,d:.2,y:2.3,pitch:null},pergola:{w:4,d:3.5,y:2.6,pitch:6},side:{w:3,d:.2,y:1.8,pitch:null}},o=t.variant??"arm";return _`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!e}
          @change=${s=>{let a=s.target.value,l=i[a];this.updateFurniture({variant:a==="arm"?null:a,w:l.w,d:l.d,mount_y:l.y,awning_pitch:l.pitch})}}
        >
          ${Object.keys(i).map(s=>_`<option value=${s} ?selected=${o===s}>${this.t(`awning_kind_${s}`)}</option>`)}
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
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`}renderMotionFields(t){let e=this.isAdmin,n=this.entityOptions(o=>o.startsWith("sensor.")||o.startsWith("input_number.")||o.startsWith("number.")),i=t.variant==="left"||t.variant==="right"?t.variant:"both";return _`${Ke(t.type)==="curtain"?_`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!e} @change=${o=>{let s=o.target.value;this.updateFurniture({variant:s==="both"?null:s})}}>
              ${["both","left","right"].map(o=>_`<option value=${o} ?selected=${i===o}>${this.t(`curtain_side_${o}`)}</option>`)}
            </select></label
          >`:y}
      ${this.num(this.t("motor_time"),t.awning_time??20,o=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(o)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,o=>this.updateFurniture({awning_position:o==="none"?null:o}))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${o=>this.updateFurniture({awning_invert:o.target.checked})} />
        ${this.t("awning_invert")}</label
      >`}renderFurnitureLinks(t){var u;let e=new Set(["smoke","gas","carbon_monoxide","heat","moisture","safety","sound","problem"]);if(!this.hass)return y;let n=this.hass,i=p=>{var f;let h=structuredClone(this._doc.floors);for(let m of h)for(let v of m.furniture)v.id===t.id&&(v[p]=null);return((f=fn(n,h).get(t.id))==null?void 0:f[p])??null},o=Ii(t.type),s=o&&(!Se(t.type)||Dr(t.type)),a=Kt(t.type),l=t.type==="access_point"&&this.hass?Tr(this.hass):this.entityOptions(p=>{var h;return a?/^(light|switch|input_boolean)\./.test(p):s?/^(media_player|switch|input_boolean|light)\./.test(p)||Ke(t.type)==="screen"&&p.startsWith("cover."):t.type==="water_heater"?p.startsWith("water_heater."):t.type==="awning"?p.startsWith("cover."):Ke(t.type)==="curtain"?/^(cover|switch|input_boolean)\./.test(p):t.type==="radiator"||t.type==="ac_unit"?p.startsWith("climate."):me(t.type)?p.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(p)||jr(t.type)&&p.startsWith("water_heater.")||Wa(n.states[p])||p.startsWith("binary_sensor.")&&(t.type.endsWith("smoke_detector")||e.has(String(((h=n.states[p])==null?void 0:h.attributes.device_class)??"")))}),d=this.entityOptions(p=>this.isPowerSensor(p)),c=t.type==="fridge_smart"?this.entityOptions(p=>p.startsWith("binary_sensor.")):[];return _`<div class="fp3d-form fp3d-links">
        ${t.type==="grid_point"?_`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(a?"furn_entity_light":Ke(t.type)?"motor_cover":s?"furn_entity_tv":t.type==="awning"?"awning_cover":t.type==="water_heater"?"heater_entity":t.type==="access_point"?"ap_entity":t.type==="radiator"||t.type==="ac_unit"?"furn_entity_climate":me(t.type)?"furn_entity_vacuum":"furn_entity"),t.entity??null,i("entity"),l,p=>this.updateFurniture({entity:p}))}
        ${t.type==="radiator"?_`${this.entitySelect(this.t("heat_sensor"),t.heat_sensor??null,void 0,this.entityOptions(p=>/^(binary_sensor|sensor|switch|input_boolean|number)\./.test(p)),p=>this.updateFurniture({heat_sensor:p&&p!=="none"?p:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("heat_sensor_hint")}</p>`:y}
        ${t.type==="awning"?this.renderAwningFields(t):t.type==="water_heater"?this.renderHeaterFields(t):t.type==="access_point"?this.renderApFields(t):Ke(t.type)?this.renderMotionFields(t):y}
        ${!a&&!_e.includes(t.type)&&!Fi(t.type)?this.renderStateLinks(t):y}
        ${a&&t.entity&&t.entity!=="none"?_`${this.entitySelect(this.t("furn_color_entity"),t.color_entity??null,void 0,this.entityOptions(p=>p.startsWith("light.")&&p!==t.entity),p=>this.updateFurniture({color_entity:p==="none"?null:p}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:y}
        ${a?this.glowScaleField(t.glow_scale,p=>this.updateFurniture({glow_scale:p})):y}
        ${a&&t.entity&&t.entity!=="none"?_`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!t.only_color} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({only_color:p.target.checked?"#ffd400":null})} />
                ${this.t("furn_only_color")}</label
              >
              ${t.only_color?_`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${t.only_color} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({only_color:p.target.value})} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`:y}`:y}
        ${a||t.type==="grid_point"?y:this.entitySelect(this.t(t.type==="meter"?"energy_grid":t.type==="inverter"?"energy_solar_sensor":t.type==="home_battery"?"energy_battery_sensor":"furn_power"),t.power??null,i("power"),d,p=>this.updateFurniture({power:p}))}
        ${!a&&t.power&&t.power!=="none"&&!_e.includes(t.type)?_`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
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
        ${vt("energy_pro")&&!a&&!["grid_point","meter","inverter","home_battery"].includes(t.type)?_`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({holo:p.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:vt("energy_pro")&&t.type==="inverter"?_`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${t.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({plant_card:p.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${t.plant_card!==!1?_`${this.len(this.t("holo_right"),t.plant_right??0,p=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,z(p)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),t.plant_up??0,p=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,z(p)))||void 0}),.25)}`:y}`:y}
      </div>
      ${t.type==="meter"?_`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),t.export??null,void 0,d,p=>this.updateFurniture({export:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:y}
      ${t.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let p=(this._doc.settings.roof.strings??[]).filter(h=>h.inverter===t.id).map(h=>h.name);return _`<p class="fp3d-sub fp3d-wide">${p.length?this.t("inverter_strings",{names:p.join(", ")}):this.t("inverter_strings_none")}</p>`})():y}
      ${t.type==="home_battery"?_`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(p=>{var h,f;return Lt(p)&&(((h=n.states[p])==null?void 0:h.attributes.device_class)==="battery"||((f=n.states[p])==null?void 0:f.attributes.unit_of_measurement)==="%")}),p=>this.updateFurniture({soc:p==="none"?null:p}))}
            ${this.entitySelect(this.t("furn_charge"),t.charge??null,void 0,d,p=>this.updateFurniture({charge:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:y}
      ${t.type==="wallbox"?_`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(p=>Ns(p)||Lt(p)),p=>this.updateFurniture({status:p==="none"?null:p}))}
          </div>`:y}
      ${a?y:this.entitySelect(this.t("furn_extra"),t.extra??null,void 0,this.entityOptions(p=>p.startsWith("sensor.")),p=>this.updateFurniture({extra:p==="none"?null:p}))}
      ${!a||t.entity?_`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({confirm:p.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(t.marker??null,p=>this.updateFurniture({marker:p}))}${this.iconInput(t.icon,p=>this.updateFurniture({icon:p}))}</div>`:y}
      ${me(t.type)?_`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,Ga(n,((u=fn(n,this._doc.floors).get(t.id))==null?void 0:u.entity)??null,null),this.entityOptions(p=>Lt(p)),p=>this.updateFurniture({room_sensor:p}))}
          </div>`:y}
      ${t.type==="fridge_smart"?_`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,c,p=>this.updateFurniture({door_left:p}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,c,p=>this.updateFurniture({door_right:p}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:y}
      ${Fi(t.type)?this.renderPictureRules(t):y}
      <p class="fp3d-sub">${this.t(a?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":o?"furn_links_hint_tv":me(t.type)?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){var g;let e=this.isAdmin,n=(this.packs??[]).flatMap(b=>b.items.filter($=>$.vehicle).map($=>({id:Me(b.id,$.id),label:`${ae($)} \xB7 ${ge(b)}`}))),i=b=>{var $,x;return b.startsWith("device_tracker.")?((x=($=this.hass)==null?void 0:$.states[b])==null?void 0:x.attributes.source_type)==="router"?2:0:1},o=this.entityOptions(b=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(b)).sort((b,$)=>i(b.id)-i($.id)),s=this.entityOptions(b=>/^(sensor|input_select|select|input_text)\./.test(b)),a=t.type_entity?(g=this.hass)==null?void 0:g.states[t.type_entity]:void 0,l=Array.isArray(a==null?void 0:a.attributes.options)?a.attributes.options:[],d=t.types??[],c=b=>this.updateFurniture({types:b}),u=(b,$)=>_`<select ?disabled=${!e} @change=${x=>$(x.target.value||null)}>
        <option value="" ?selected=${!b}>${this.t("parking_vehicle_none")}</option>
        ${n.map(x=>_`<option value=${x.id} ?selected=${x.id===b}>${x.label}</option>`)}
      </select>`,p=this.floor,h=p==null?void 0:p.rooms.find(b=>b.points.length>=3&&tt([t.x,t.z],b.points)),f=t.vehicle?$t(t.vehicle):void 0,m=f?f.size[2]*(t.scale??1):0,v=!!h&&!!p&&m>p.height+1e-6;return _`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,o,b=>this.updateFurniture({entity:b==="none"?null:b}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${u(t.vehicle??null,b=>this.updateFurniture({vehicle:b}))}</label>
        ${n.length?y:_`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),b=>this.updateFurniture({scale:Math.min(150,Math.max(30,b))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,s,b=>this.updateFurniture({type_entity:b==="none"?null:b}))}
        ${t.type_entity?_`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${d.map((b,$)=>_`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${b.state}
                    ?disabled=${!e}
                    @change=${x=>c(d.map((P,S)=>S===$?{...P,state:x.target.value}:P))}
                  />
                  ${u(b.vehicle,x=>c(d.map((P,S)=>S===$?{...P,vehicle:x??""}:P)))}
                  <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>c(d.filter((x,P)=>P!==$))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(b=>_`<option value=${b}></option>`)}</datalist>
              ${e?_`<button class="fp3d-btn" @click=${()=>{var b;return c([...d,{state:l[d.length]??"",vehicle:((b=n[0])==null?void 0:b.id)??""}])}}>${this.t("parking_add_type")}</button>`:y}
            </div>`:y}
      </div>
      ${v?_`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Bt(this.hass,m,2),room:Bt(this.hass,p.height,2)})}</p>`:y}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(t)}`}renderCarForm(t){if(!vt("auto_pro"))return _`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return y;let e=this.hass,n=t.car??{},i=Ua(e,{entity:t.entity,car:{device:n.device}}),o=l=>this.updateFurniture({car:{...n,...l}}),s=this.entityOptions(l=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(l)),a=(l,d,c)=>this.entitySelect(this.t(d),n[l]??null,i[l],c,u=>o({[l]:u==="none"?"none":u}));return _`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),n.device??null,void 0,s,l=>o({device:l==="none"?null:l}))}
        ${a("soc","car_soc",this.entityOptions(l=>Lt(l)))}
        ${a("range","car_range",this.entityOptions(l=>Lt(l)))}
        ${a("charging","car_charging",this.entityOptions(l=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(l)))}
        ${a("plugged","car_plugged",this.entityOptions(l=>Ns(l)))}
        ${a("lock","car_lock",this.entityOptions(l=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(l)))}
        ${a("climate","car_climate",this.entityOptions(l=>/^(climate|switch|binary_sensor|input_boolean)\./.test(l)))}
        ${a("tracker","car_tracker",this.entityOptions(l=>l.startsWith("device_tracker.")))}
      </div>
    </section>`}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!t.includes(i.image)&&t.push(i.image);return t}renderPictureRules(t){let e=this.isAdmin,n=t.pictures??[];if(!vt("screens"))return _`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${Ze("screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=g=>this.updateFurniture({pictures:g}),o=this.entityOptions(()=>!0),s=g=>["string","number","boolean"].includes(typeof g),a=g=>{var b,$;return Object.entries((($=(b=this.hass)==null?void 0:b.states[g])==null?void 0:$.attributes)??{}).filter(([x,P])=>s(P)&&x!=="friendly_name"&&x!=="icon").map(([x])=>x)},l=(g,b)=>{var x;let $=(x=this.hass)==null?void 0:x.states[g];return $?String((b?$.attributes[b]:$.state)??""):""},d=(g,b)=>{var P;let $=(P=this.hass)==null?void 0:P.states[g],x=!b&&Array.isArray($==null?void 0:$.attributes.options)?$.attributes.options:[];return x.length?x:[l(g,b)]},c=g=>`${g.entity}\0${g.attribute??""}`,u=[];n.forEach((g,b)=>{let $=u.find(x=>c(x)===c(g));$?$.rows.push(b):u.push({entity:g.entity,attribute:g.attribute??null,rows:[b]})});let p=(g,b)=>i(n.map(($,x)=>g.rows.includes(x)?{...$,...b}:$)),h=(g,b)=>i(n.map(($,x)=>x===g?{...$,...b}:$)),f=this.storedPictures(),m=this.entityOptions(g=>g.startsWith("camera.")),v=g=>g.image.startsWith("camera:")?g.image.slice(7):null;return _`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?_`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${g=>this.updateFurniture({screen_bg:g.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:y}
      ${u.map(g=>_`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${o}
            .value=${g.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${b=>{b.stopPropagation(),p(g,{entity:b.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${b=>{let $=b.target.value||null,x=l(g.entity,$);i(n.map((P,S)=>g.rows.includes(S)?{...P,attribute:$,state:g.rows[0]===S?x:P.state}:P))}}
          >
            <option value="" ?selected=${!g.attribute}>${this.t("picture_state_of")}</option>
            ${a(g.entity).map(b=>_`<option value=${b} ?selected=${b===g.attribute}>${b}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(g.entity,g.attribute)||"\u2013"})}</span>
          ${g.rows.map(b=>{var P,S;let $=n[b],x=!!this.hass&&Ka(this.hass,$);return _`<div class="fp3d-picture-row ${x?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${b}"
                placeholder=${this.t("picture_state")}
                .value=${$.state}
                ?disabled=${!e}
                @change=${R=>h(b,{state:R.target.value})}
              />
              <datalist id="fp3d-picture-states-${b}"><option value="*"></option>${d(g.entity,g.attribute).map(R=>_`<option value=${R}></option>`)}</datalist>
              ${this._images[$.image]?_`<img class="fp3d-picture-thumb" src=${this._images[$.image].url} alt="" /> `:y}
              ${v($)&&((S=(P=this.hass)==null?void 0:P.states[v($)])!=null&&S.attributes.entity_picture)?_`<img class="fp3d-picture-thumb" src=${String(this.hass.states[v($)].attributes.entity_picture)} alt="" />`:y}
              <label class="fp3d-btn fp3d-picture-pick">
                ${$.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${R=>{this.uploadPicture(R,t,b)}} />
              </label>
              ${f.filter(R=>R!==$.image).length?_`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(R=>R!==$.image&&this._images[R]).map(R=>_`<button class="fp3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>h(b,{image:R})}><img src=${this._images[R].url} alt="" /></button>`)}
                  </div>`:y}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test($.image)?$.image:""}
                ?disabled=${!e}
                @change=${R=>{let I=R.target.value.trim();I&&h(b,{image:I})}}
              />
              ${m.length?_`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${m}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${v($)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${R=>{R.stopPropagation(),R.detail.value!=="none"?h(b,{image:`camera:${R.detail.value}`}):v($)&&h(b,{image:""})}}
                  ></fp3d-entity-picker>`:y}
              <span class="fp3d-sub">${x?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>i(n.filter((R,I)=>I!==b))}>✕</button>
            </div>`})}
          ${e?_`<button class="fp3d-btn" @click=${()=>i([...n,{entity:g.entity,attribute:g.attribute,state:l(g.entity,g.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:y}
        </div>`)}
      ${e?_`<button class="fp3d-btn" @click=${()=>{var g;return i([...n,{entity:((g=o[0])==null?void 0:g.id)??"",attribute:null,state:"on",image:""}])}}>${this.t("picture_add_entity")}</button>`:y}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){var p,h;let i=t.target,o=(p=i.files)==null?void 0:p[0];if(i.value="",!o)return;let s=await createImageBitmap(o),a=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*a),l.height=Math.round(s.height*a),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let d=l.toDataURL(o.type==="image/png"?"image/png":"image/jpeg",.85),c=X("pic");await pi(this.hass,c,d),this._images={...this._images,[c]:{url:d,aspect:l.height/l.width}};let u=((h=this.furnitureItem)==null?void 0:h.id)===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:u.map((f,m)=>m===n?{...f,image:c}:f)})}libIndex=null;libraryEntries(t){var o,s;let e=vt("fridge_smart")||vt("household")?["fridge_smart"]:[],n=`${t}|${Cr()}|${((o=this.packs)==null?void 0:o.length)??0}|${e.length}`;if(((s=this.libIndex)==null?void 0:s.key)===n)return this.libIndex.entries;let i=id({packs:this.packs??[],basics:ed(e),language:t,basicName:a=>this.t(`furn_${a}`),basicNameEn:a=>se(Ws,`furn_${a}`),kindName:a=>this.t(`lib_kind_${a}`),size:Ht});return this.libIndex={key:n,entries:i},i}libraryThumb=async t=>{let e=await Zn(),[n,i,o]=t.size;return e.furniturePreview({type:t.type,w:n,d:i,h:o,variant:null,lamp:On[t.type]??null},96,this.packs??[])};renderFurnitureLibrary(){var n;let t=this.room,e=((n=this.hass)==null?void 0:n.language)??"en";return _`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${t?this.t("furniture_into",{room:t.name}):this.t("furniture_pick_room")}</p>
      <fp3d-library
        .entries=${this.libraryEntries(e)}
        .language=${e}
        .roomHint=${t?nd(t.name):null}
        .admin=${this.isAdmin}
        .t=${(i,o)=>this.t(i,o)}
        .thumb=${this.libraryThumb}
        @library-add=${i=>this.addFurniture(i.detail.type,!!i.detail.mirror)}
        @library-preview=${i=>{i.detail.type&&i.detail.element?this.showPreview(i.detail.type,i.detail.element):this._preview=null}}
      ></fp3d-library>
    </section>
    <div class="fp3d-ext-teaser">
      <b>${this.t("ext_teaser_title")}</b>
      <span class="fp3d-sub">${this.t("ext_teaser_text")}</span>
      <button class="fp3d-btn fp3d-primary" @click=${()=>this.dispatchEvent(new CustomEvent("open-extensions",{bubbles:!0,composed:!0}))}>${this.t("ext_open")}</button>
    </div>`}async showPreview(t,e){var o;let n=e.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...i};try{let s=await Zn(),[a,l,d]=Ht(t),c=s.furniturePreview({type:t,w:a,d:l,h:d,variant:null,lamp:On[t]??null},180,this.packs??[]);((o=this._preview)==null?void 0:o.type)===t&&(this._preview={type:t,url:c,...i})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?_`<div class="fp3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?_`<img src=${t.url} alt="" />`:_`<span class="fp3d-preview-wait"></span>`}
      <b>${He(this.hass,t.type)}</b>
    </div>`:y}renderDeviceForm(t){var a;let e=this.isAdmin,n=at(t.entity_id),i=n==="light",o=t.mount??"ceiling",s=n?Ai(n,((a=this.floor)==null?void 0:a.height)??2.5,i?o:null):1;return _`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Bn(n):""} />
        </svg>
        ${_t(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?_`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${l=>this.updateDevice({mount:l.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(l=>_`<option value=${l} ?selected=${l===o}>${this.t(`lamp_${l}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(t.glow_scale,l=>this.updateDevice({glow_scale:l}))}`:n==="camera"?_`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!e} @change=${l=>this.updateDevice({mount:l.target.value,y:null})}>
                  <option value="wall" ?selected=${(t.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${t.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:y}
        ${this.len(this.t("x"),t.x,l=>this.updateDevice({x:l}))} ${this.len(this.t("z"),t.z,l=>this.updateDevice({z:l}))}
        ${this.len(this.t("marker_height"),t.y??s,l=>this.updateDevice({y:Math.max(0,l)}),.05,0)}
        ${this.num(this.t("rotation"),t.rotation??0,l=>this.updateDevice({rotation:(l%360+360)%360}),1)}
        ${n==="camera"?_`${this.num(this.t("camera_fov"),t.fov??(t.mount==="ceiling"?360:90),l=>this.updateDevice({fov:Math.min(360,Math.max(10,l))}),5,10)}
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
        ${n&&Oa.has(n)?_`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${l=>this.updateDevice({confirm:l.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:y}
        ${vt("energy_pro")&&zc(this.hass,t.entity_id)?_`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
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
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!e} placeholder=${this.t("aliases_placeholder")} @change=${l=>this.updateDevice({aliases:wi(l.target.value)})}
        /></label>
        ${t.name?_`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${l=>this.updateDevice({show_name:l.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:y}
        ${this.iconInput(t.icon,l=>this.updateDevice({icon:l}))}
      </div>
      ${e?_`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?_`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:y}
            ${this.renderAsFurniture(t)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:y}
    </section>`}renderDeviceList(t){var S,R,I,E,k;let e=this.isAdmin,n=this.hass,i=t.area_id?(R=(S=n==null?void 0:n.areas)==null?void 0:S[t.area_id])==null?void 0:R.name:void 0,o=n?Ee(n,t.area_id).filter(w=>Ge(at(w))):[],s=new Set([...((I=this.floor)==null?void 0:I.placements.filter(w=>tt([w.x,w.z],t.points)).map(w=>w.entity_id))??[],...((E=this.floor)==null?void 0:E.furniture.filter(w=>Kt(w.type)&&w.entity&&tt([w.x,w.z],t.points)).map(w=>w.entity))??[]]),a=n?[...o,...[...s].filter(w=>!o.includes(w)&&hn(n,w)&&Ge(at(w)))]:o,l=n?zi(n,a):[],d=l.map(w=>w.primary).filter(w=>!s.has(w)),c=this._deviceQuery.trim().toLowerCase(),u=w=>!c||_t(n,w,i).toLowerCase().includes(c)||w.includes(c),p=(k=this.floor)==null?void 0:k.placements.filter(w=>at(w.entity_id)==="light"&&(w.mount??"ceiling")==="ceiling"&&tt([w.x,w.z],t.points)).length,h=new Set(t.panel??[]),f=new Set(t.hidden??[]),m=new Set(t.no_state??[]),v=new Map;for(let w of this._doc.floors)for(let A of[...w.placements.map(M=>[M.entity_id,M.x,M.z]),...w.furniture.filter(M=>Kt(M.type)&&M.entity).map(M=>[M.entity,M.x,M.z])]){let M=w.rooms.find(T=>tt([A[1],A[2]],T.points));M&&M.id!==t.id&&v.set(A[0],M.name)}let g=(w,A=!1,M=i,T=!1)=>{let C=s.has(w),O=C?void 0:v.get(w);return _`<div class="fp3d-row fp3d-dev-row ${A||T?"fp3d-dev-extra":""} ${f.has(w)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${C?"":"fp3d-muted"}" ?disabled=${!C} @click=${()=>this.selectItem("device",w)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Bn(at(w))} />
          </svg>
          <span>${_t(n,w,M)}${O?_`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:O})}</small>`:y}</span>
        </button>
        ${e&&!A?_`<button
              class="fp3d-pin ${f.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(w)}
              title=${this.t(f.has(w)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:f.has(w)?[...f].filter(D=>D!==w):[...f,w]})}
            >
              ${f.has(w)?"\u{1F648}":"\u{1F441}"}
            </button>`:y}
        ${e&&!A&&!f.has(w)?_`<button
              class="fp3d-pin ${m.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${m.has(w)}
              title=${this.t(m.has(w)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:m.has(w)?[...m].filter(D=>D!==w):[...m,w]})}
            >
              ${m.has(w)?"\u2205":"Aa"}
            </button>`:y}
        ${e&&!C?_`<button
              class="fp3d-pin ${h.has(w)?"fp3d-pin-on":""}"
              aria-pressed=${h.has(w)}
              title=${this.t(h.has(w)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:h.has(w)?[...h].filter(D=>D!==w):[...h,w]})}
            >
              ${h.has(w)?"\u2605":"\u2606"}
            </button>`:y}
        ${e?C?_`<button class="fp3d-link" @click=${()=>this.removeDevice(w)}>${this.t("devices_remove")}</button>`:_`<button class="fp3d-link" @click=${()=>this.placeDevices([w])}>${this.t("devices_place")}</button>`:y}
      </div>`},b=e?this._devSource:"area",$=w=>{this._devSource=w,this._deviceQuery=""},x=_`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${w=>this._deviceQuery=w.target.value}
    />`,P=()=>{confirm(this.t("devices_place_all_confirm",{n:d.length}))&&this.placeDevices(d)};return _`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?_`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${b==="area"} @click=${()=>$("area")}>${this.t("devices_src_area")}${a.length?` (${l.length})`:""}</button>
            <button aria-pressed=${b==="other"} @click=${()=>$("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${b==="none"} @click=${()=>$("none")}>${this.t("devices_src_none")}</button>
          </div>`:y}
      ${b!=="area"?_`${x}${this.renderDeviceExtras(t,g,b)}`:t.area_id?a.length?_`${e&&(p??0)>=2?_`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:y}
              ${a.length>8?x:y}
              <div class="fp3d-room-list">
                ${l.map(w=>{let A=w.others.filter(u),M=this._expanded.has(w.primary)||!!c&&A.length>0;return!u(w.primary)&&!A.length?y:_`${g(w.primary)}
                  ${w.others.length?_`<button
                        class="fp3d-more"
                        @click=${()=>{let T=new Set(this._expanded);T.has(w.primary)?T.delete(w.primary):T.add(w.primary),this._expanded=T}}
                      >
                        ${M?this.t("devices_less"):this.t("devices_more",{n:w.others.length})}
                      </button>`:y}
                  ${M?this.renderDeviceOthers(c?A:w.others,T=>g(T,!1,i,!0),f,e):y}`})}
              </div>
              ${e&&d.length>1?_`<button class="fp3d-link fp3d-place-all" @click=${P}>${this.t("devices_place_all_n",{n:d.length})}</button>`:y}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:_`<p class="fp3d-sub">${this.t("devices_none")}</p>`:_`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceOthers(t,e,n,i){let s=t.every(l=>n.has(l)),a=()=>{let l=new Set(n);for(let d of t)s?l.delete(d):l.add(d);this.updateRoom({hidden:[...l]})};return _`${i&&t.length>=5?_`<button class="fp3d-link fp3d-dev-all" @click=${a}>
            ${this.t(s?"devices_show_all":"devices_hide_all",{n:t.length})}
          </button>`:y}
      ${t.slice(0,40).map(e)}
      ${t.length>40?_`<p class="fp3d-sub">${this.t("devices_narrow",{n:t.length-40})}</p>`:y}`}renderDeviceExtras(t,e,n){let i=this.hass;if(!i)return y;let o=50,s=this._deviceQuery.trim().toLowerCase(),a=(c,u)=>!s||`${_t(i,c,u)} ${c} ${u??""}`.toLowerCase().includes(s),l=c=>c>0?_`<p class="fp3d-sub">${this.t("devices_narrow",{n:c})}</p>`:y;if(n==="other"){let c=0,u=0,p=ja(i,t.area_id).map(h=>{let f=h.ids.filter(v=>a(v,h.name)),m=f.slice(0,Math.max(0,o-c));return c+=m.length,u+=f.length-m.length,m.length?_`<div class="fp3d-dev-area">${h.name}</div>${m.map(v=>e(v,!1,h.name))}`:y});return c?_`<div class="fp3d-room-list">${p}</div>${l(u)}`:_`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let d=Ha(i).filter(c=>a(c));return d.length?_`<div class="fp3d-room-list">${d.slice(0,o).map(c=>e(c))}</div>${l(d.length-Math.min(d.length,o))}`:_`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(t){let e=this.hass;if(!e)return y;let n=(s,a)=>{let l={...t.climate??{},[s]:a},d=Object.values(l).every(c=>c==null);this.updateRoom({climate:d?null:l})},i=!!t.climate&&Object.values(t.climate).some(s=>s!=null),o=(s,a)=>{var p;let l=jo[s],d=Da(e,this.floor??null,{...t,climate:null},s),c=Do[s],u=this.entityOptions(h=>{var f,m;return Lt(h)&&((f=e.states[h])==null?void 0:f.attributes.device_class)===l||!!c&&h.startsWith("climate.")&&typeof((m=e.states[h])==null?void 0:m.attributes[c])=="number"}).map(h=>({...h,rank:(Qe(e,h.id)===t.area_id?0:1)+(Ho(e,h.id)?0:2)})).sort((h,f)=>h.rank-f.rank).map(({id:h,label:f})=>({id:h,label:f}));return this.entitySelect(a,((p=t.climate)==null?void 0:p[s])??null,d[0]??null,u,h=>n(s,h))};return _`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(t){let e=t.background;return _`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?_`${this.len(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
              ${this.len(this.t("z"),e.z,n=>this.updateFloor({background:{...e,z:n}}))}
              ${this.len(this.t("background_width"),e.width,n=>this.updateFloor({background:{...e,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),e.rotation??0,n=>this.updateFloor({background:{...e,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isAdmin?_`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel?"fp3d-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?_`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:y}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?_`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:_`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${Vn(this.t("bg_ruler_length"),this.unit)}
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
    </details>`}async loadHistory(){if(this.hass)try{this._history=await yr(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await wr(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await Mr(this.hass),e={};for(let i of Sa(t.building))try{e[i]=await go(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);Ro(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...t,exported_at:new Date().toISOString(),images:e}))}catch(t){alert(this.t("backup_import_error",{error:String((t==null?void 0:t.message)??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){var o,s;let e=t.target,n=(o=e.files)==null?void 0:o[0];if(e.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if((i==null?void 0:i.format)!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let a=await Sr(this.hass,i.building,i.packs??[]),l=0;for(let[c,u]of Object.entries(i.images??{}))try{await pi(this.hass,c,u),l++}catch{}this.setDoc(Si(a.building)),this._floorId=((s=a.building.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let d=a.skipped.length?` ${this.t("backup_full_skipped",{packs:a.skipped.map(c=>c.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:a.packs,pictures:l})+d}catch(a){let{code:l,message:d}=a??{};alert(this.t("backup_import_error",{error:d??l??String(a)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);Ro(`neonplan3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(ka(this._doc,t),null,2))}async importPlan(t){var o,s;let e=t.target,n=(o=e.files)==null?void 0:o[0];if(e.value="",!n||!this.hass)return;let i;try{i=Ma(await n.text())}catch(a){let l=a.message;alert(l==="not_json"?this.t("import_error_not_json"):l==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:l}));return}confirm(this.t("backup_import_confirm"))&&(await $r(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=((s=i.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){var e;return new Date(t.saved_at*1e3).toLocaleString((e=this.hass)==null?void 0:e.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return _`<details
      class="fp3d-section"
      @toggle=${t=>{t.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?_`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?_`<div class="fp3d-room-list">
              ${this._history.map(t=>_`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(t)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:t.rooms,furniture:t.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(t)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:_`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
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
    </details>`}renderBackdrop(){let t=this._doc.settings.backdrop??{},e=o=>this.change(s=>s.settings.backdrop={...s.settings.backdrop??{},...o}),n=t.kind??"",i=(o,s,a,l)=>_`<label class="fp3d-field"
        >${this.t(o)}
        <input type="color" .value=${s??a} @change=${d=>e({[l]:d.target.value})} />
      </label>`;return _`<details class="fp3d-section">
      <summary>🖼 ${this.t("backdrop")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("backdrop_kind")}
          <select @change=${o=>e({kind:o.target.value||null})}>
            ${["","color","gradient","image"].map(o=>_`<option value=${o} ?selected=${n===o}>${this.t(`backdrop_${o||"look"}`)}</option>`)}
          </select></label
        >
        ${n==="color"||n==="gradient"?i(n==="gradient"?"backdrop_top":"backdrop_color",t.color,"#0b1426","color"):y}
        ${n==="gradient"?i("backdrop_bottom",t.color2,"#03060c","color2"):y}
        ${n==="image"?_`<label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_image_url")}
                <input type="text" placeholder="/local/hintergrund.jpg" .value=${t.image??""} @change=${o=>e({image:o.target.value.trim()||null})}
              /></label>
              <label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_dim")} (${Math.round((t.dim??.45)*100)} %)
                <input type="range" min="0" max="90" .value=${String(Math.round((t.dim??.45)*100))} @change=${o=>e({dim:Number(o.target.value)/100})}
              /></label>
              ${t.image&&!Dl(t.image)?_`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.t("backdrop_image_bad")}</p>`:y}`:y}
      </div>
      <p class="fp3d-sub">${this.t("backdrop_hint")}</p>
    </details>`}renderTerrain(){let t=this._doc.settings.terrain??{},e=i=>{let o=structuredClone(this._doc);o.settings.terrain={...o.settings.terrain??{},...i},this.setDoc(o)},n=this._doc.floors.some(i=>i.elevation<-.3);return _`<details class="fp3d-section">
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
      ${t.level!=null?_`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>e({level:null})}>${this.t("terrain_reset")}</button></div>`:y}
    </details>`}setSettings(t){let e=structuredClone(this._doc);Object.assign(e.settings,t),this.setDoc(e)}renderHouseSettings(){var n;let t=this._doc.settings,e=i=>this.setSettings(i);return _`<details class="fp3d-section">
      <summary>${this.t("settings_house")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),t.wall_exterior,i=>e({wall_exterior:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.len(this.t("wall_interior"),t.wall_interior,i=>e({wall_interior:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.len(this.t("grid"),t.grid,i=>e({grid:Math.min(1,Math.max(.01,i))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${i=>{let o=i.target.value;e({units:o==="metric"||o==="imperial"?o:null})}}>
            <option value="auto" ?selected=${!t.units}>${this.t("units_auto",{unit:this.t(Go(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
            <option value="metric" ?selected=${t.units==="metric"}>${this.t("units_metric")}</option>
            <option value="imperial" ?selected=${t.units==="imperial"}>${this.t("units_imperial")}</option>
          </select></label
        >
        ${this.num(this.t("north"),t.north,i=>e({north:(Math.round(i)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide" title=${this.t("editor_floor_hint")}
          >${this.t("editor_floor")}
          <select @change=${i=>e({editor_floor:i.target.value||null})}>
            <option value="" ?selected=${!t.editor_floor}>${this.t("editor_floor_auto")}</option>
            ${this._doc.floors.map(i=>_`<option value=${i.id} ?selected=${t.editor_floor===i.id}>${i.name}</option>`)}
          </select></label
        >
        ${this.entitySelect(this.t("hh_notes"),((n=t.household)==null?void 0:n.notes)??null,void 0,this.entityOptions(i=>/^(input_text|text|sensor)\./.test(i)),i=>this.setHousehold({notes:i==="none"?null:i}))}
        <p class="fp3d-sub fp3d-wide">${this.t("hh_notes_hint")}</p>
      </div>
      <p class="fp3d-sub">${this.t("north_hint")}</p>
    </details>`}renderRoofBasics(){let t=this._doc.settings,e=n=>this.setSettings(n);return _`<section>
      <h3>${this.t("roof_basics")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):e({roof:{...t.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>_`<option value=${n} ?selected=${n===t.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${t.roof.type==="gable"?_`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>e({roof:{...t.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${t.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${t.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:y}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):y}
        ${t.roof.type!=="none"?this.len(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):y}
      </div>
    </section>`}renderWeatherSettings(){let t=this._doc.settings,e=n=>this.setSettings(n);return _`<details class="fp3d-section">
      <summary>${this.t("settings_weather")}</summary>
      <div class="fp3d-form">
        ${this.hass?this.entitySelect(this.t("weather_entity"),t.weather_entity??null,$l(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>e({weather_entity:n})):y}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${oa.map(n=>{let i=t.weather_effects??yo;return _`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${i.includes(n)}
              @change=${o=>{let s=o.target.checked;e({weather_effects:s?[...new Set([...i,n])]:i.filter(a=>a!==n)})}}
            />
            ${this.t(`weather_effect_${n}`)}</label
          >`})}
        <label class="fp3d-check fp3d-wide"
          ><input type="checkbox" .checked=${t.rain_warning!==!1} @change=${n=>e({rain_warning:n.target.checked})} />
          ${this.t("rain_warning")}</label
        >
        ${this.hass?_`${this.entitySelect(this.t("rain_entity"),t.rain_entity??null,void 0,this.entityOptions(n=>wl(this.hass,n)),n=>e({rain_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("rain_entity_hint")}</p>`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${t.alert_names!==!1} @change=${n=>e({alert_names:n.target.checked})} />
          ${this.t("alert_names")}</label
        >
        ${this.hass?_`${this.entitySelect(this.t("outage_entity"),t.outage_entity??null,void 0,this.entityOptions(n=>/^(binary_sensor|sensor|input_boolean|switch)\./.test(n)),n=>e({outage_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`:y}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${t.sun_patches!==!1} @change=${n=>e({sun_patches:n.target.checked})} />
          ${this.t("sun_patches")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[je,Qi,qt`
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
        width: min(var(--fp3d-side-w, 340px), 60%);
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
        border-left: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome-solid);
        overflow-y: auto;
        padding: 12px 14px 24px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        min-height: 0;
      }
      /* the grip's containing block; the overlay keeps its absolute position (#658: "position: relative" on
         every side bar made the unpinned bar a third grid cell, which pushed the plan and the 3D pane aside) */
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
      .fp3d-dev-all {
        display: block;
        padding: 2px 26px 6px;
        font-size: 12px;
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",qs);function Ep(r,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i||1,s=Math.min(1,Math.max(0,((r[0]-t[0])*n+(r[1]-t[1])*i)/o));return Math.hypot(r[0]-t[0]-n*s,r[1]-t[1]-i*s)}function bd(r){return r.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var Ws={language:"en"};function Lt(r){return/^(sensor|input_number|number)\./.test(r)}function Ns(r){return/^(binary_sensor|input_boolean)\./.test(r)}export{qs as Fp3dEditor};
